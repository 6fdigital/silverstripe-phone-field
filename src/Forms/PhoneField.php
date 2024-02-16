<?php

namespace SixF\PhoneField\Forms;

use libphonenumber\NumberParseException;
use libphonenumber\PhoneNumberFormat;
use libphonenumber\PhoneNumberUtil;
use Psr\Container\NotFoundExceptionInterface;
use SilverStripe\Forms\TextField;

class PhoneField extends TextField
{
    //
    protected $inputType = 'tel';

    /**
     * @return string
     */
    public function Type(): string
    {
        return "tel text";
    }

    /**
     * @param $validator
     * @return bool
     * @throws NotFoundExceptionInterface
     */
    public function validate($validator): bool
    {
        $result = true;
        $this->value = trim($this->value ?? '');

        // check if the phone number is in international format, if not
        // we must abort as libphonenumber can't handle it
        if (!str_contains($this->value, "+")) {
            //
            $validator->validationError(
                $this->name,
                _t(
                    "SixF\PhoneField\Forms\PhoneField.NO_INTERNATIONAL_FORMAT",
                    "Please enter the phone number in international format. (e.g. +49 {number})",
                    ['number' => $this->value]
                ),
            );

            return $this->extendValidationResult(false, $validator);
        }

        //
        $phoneUtil = PhoneNumberUtil::getInstance();

        try {

            // get the number proto
            $numberProto = $phoneUtil->parse($this->value);

            // check if the number is valid
            if (!$phoneUtil->isValidNumber($numberProto)) {
                $validator->validationError(
                    $this->name,
                    _t(
                        "SixF\PhoneField\Forms\PhoneField.INVALID",
                        "Please enter a valid phone number",
                    ),
                );
                $result = false;
            }

            // update the value
            $this->value = $phoneUtil->format($numberProto, PhoneNumberFormat::INTERNATIONAL);
        } catch (NumberParseException $e) {
            //
            $validator->validationError(
                $this->name,
                _t(
                    "SixF\PhoneField\Forms\PhoneField.INVALID",
                    "Please enter a valid phone number",
                ),
            );
            $result = false;
        }


        return $this->extendValidationResult($result, $validator);
    }
}
