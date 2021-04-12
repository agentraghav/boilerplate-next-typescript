const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr'],
  localeSubpaths: {
    fr: 'fr',
  },
  localePath: 'public/static/locales',
});
