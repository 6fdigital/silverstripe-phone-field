if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  /* eslint-disable-next-line no-console */
  console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('de', {
    'PHONE_FIELD.NO_INTERNATIONAL_FORMAT': 'Bitte geben Sie die Telefonnummer im internationalen Format an (z.B. +49 {number})'
  });
}
