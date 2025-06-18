<?php

namespace SixF\PhoneField\Model;

use SilverStripe\Core\Manifest\ModuleResourceLoader;
use SilverStripe\Forms\FormField;
use SilverStripe\UserForms\Model\EditableFormField;
use SilverStripe\View\Requirements;
use SixF\PhoneField\Forms\PhoneField;

if (!class_exists(EditableFormField::class)) {
    return;
}

class EditablePhoneField extends EditableFormField
{
    private static string $singular_name = 'Phone Field';

    private static string $plural_name = 'Phone Fields';

    private static bool $has_placeholder = true;

    private static string $table_name = 'EditablePhoneField';

    /**
     * @return PhoneField
     */
    public function getFormField(): PhoneField
    {
        // Load the JavaScript for the phone field
        Requirements::javascript('silverstripe/admin:client/dist/js/i18n.js');
        Requirements::add_i18n_javascript('vendor/6fdigital/silverstripe-phone-field/client/lang');
        $jsUrl = ModuleResourceLoader::resourceURL('6fdigital/silverstripe-phone-field:client/dist/bundle.js');
        Requirements::javascript($jsUrl, ['type' => 'module']);

         $field = PhoneField::create($this->Name, $this->Title ?: false, $this->Default)
            ->setFieldHolderTemplate(EditableFormField::class . '_holder')
            ->setTemplate(EditableFormField::class);

        $this->doUpdateFormField($field);

         return $field;
    }


    /**
     * @return true
     */
    public function getSetsOwnError(): true
    {
        return true;
    }

    /**
     * Updates a formfield with the additional metadata specified by this field
     *
     * @param FormField $field
     */
    protected function updateFormField($field): void
    {
        parent::updateFormField($field);

        $field->setAttribute('data-rule-phone', true);
    }
}
