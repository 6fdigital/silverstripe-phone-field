if (typeof (ss) === 'undefined' || typeof (ss.i18n) === 'undefined') {
  /* eslint-disable-next-line no-console */
  console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary('es', {
    'PHONE_FIELD.NO_INTERNATIONAL_FORMAT': 'Por favor, ingrese el número de teléfono en formato internacional (por ejemplo, +34 {number})'
  });
}
