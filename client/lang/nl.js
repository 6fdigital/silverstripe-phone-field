if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  /* eslint-disable-next-line no-console */
  console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('nl', {
    'PHONE_FIELD.NO_INTERNATIONAL_FORMAT': 'Voer het telefoonnummer in internationaal formaat in (bijv. +31 {number})'
  });
}
