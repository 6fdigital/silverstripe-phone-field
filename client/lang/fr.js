if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  /* eslint-disable-next-line no-console */
  console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('fr', {
    'PHONE_FIELD.NO_INTERNATIONAL_FORMAT': 'Veuillez indiquer le numéro de téléphone au format international (par exemple, +33 {number})'
  });
}
