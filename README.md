# SilverStripe Phone Field
A phone number field for the SilverStripe CMS with validation using libphonenumber.

## Requirements
* SilverStripe ^4 | ^5
* [libphonenumber-for-php](https://github.com/giggsey/libphonenumber-for-php)
* [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js)
* SilverStripe Userforms (optional)

## Installation
```bash
composer require "6fdigital/silverstripe-phone-field"
```

## Usage
The `PhoneField` can be used in your custom forms and with the
[SilverStripe Userforms](https://github.com/silverstripe/silverstripe-userforms) module. For usage in your custom Forms 
simply add the form to your field list:

```php
use SixF\PhoneField\PhoneField;

public function MyForm(): Form {
    return Form::create(
        $this,
        "MyForm",
        FieldList::create(
            ...
            PhoneField::create('PhoneNumber', 'Your Phone Number')
            ...
        ),
        FieldList::create(
            FormAction::create('doSubmit', 'Submit')
        ),
        RequiredFields::create('Phone')
        );
    }
}
```
