<?php

namespace SixF\PhoneField\Model;

use SilverStripe\Forms\FormField;
use SilverStripe\UserForms\Model\EditableFormField;
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
