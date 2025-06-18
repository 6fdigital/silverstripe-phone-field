if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  /* eslint-disable-next-line no-console */
  console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('it', {
    'PHONE_FIELD.NO_INTERNATIONAL_FORMAT': 'Per favore, inserisci il numero di telefono nel formato internazionale (ad esempio, +39 {number})'
  });
}
