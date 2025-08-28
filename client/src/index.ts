import {isValidPhoneNumber} from 'libphonenumber-js';

/**
 * Silverstripe Phone Field Validation
 */
document.addEventListener('DOMContentLoaded', () => {
  // Try to find the form(s) on the page
  const forms = document.querySelectorAll('form.userform');
  if (!forms.length) {
    return;
  }

  // Loop through each form and add an event listener
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      //
      let isValid = true;
      const phoneFields = form.querySelectorAll('input[type="tel"]');

      phoneFields.forEach((phoneField: HTMLInputElement) => {
        // Get the required attribute
        const required = phoneField.getAttribute('required');
        if (!required) return;

        // Get phone number and validate
        const phoneNumber = phoneField.value.trim();

        // Ensure international format and validate
        if (!phoneNumber.startsWith('+')) {
          const message = ss.i18n.inject(
            ss.i18n._t('PHONE_FIELD.NO_INTERNATIONAL_FORMAT'),
            {number: phoneNumber}
          );
          setErrorMessage(phoneField, message);
          isValid = false;
        } else if (!isValidPhoneNumber(phoneNumber)) {
          const message = phoneField.getAttribute('data-msg-required') || "Please enter a valid phone number.";
          setErrorMessage(phoneField, message);
          isValid = false;
        }
      });

      // Prevent form submission if any phone field is invalid
      if (!isValid) {
        event.preventDefault();
        event.stopPropagation(); // Prevent further event propagation
        return false;
      }
    }, {capture: true}); // Use capture phase to ensure validation runs before any other submit handlers
  });

  /**
   * Set an error message below the phone field
   */
  const setErrorMessage = (phoneField, message) => {
    // Remove existing error message
    const existingError = phoneField.nextElementSibling;
    if (existingError && existingError.classList.contains('error')) {
      existingError.remove();
    }

    const errorElement = document.createElement('span');
    errorElement.className = 'error message';
    errorElement.textContent = message;

    phoneField.insertAdjacentElement('afterend', errorElement);
  };
});
