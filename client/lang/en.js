if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  /* eslint-disable-next-line no-console */
  console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('en', {
    'PHONE_FIELD.NO_INTERNATIONAL_FORMAT': 'Please provide the telephone number in international format (e.g. +44 {number})'
  });
}
