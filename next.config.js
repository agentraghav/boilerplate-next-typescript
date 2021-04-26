const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');
module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  i18n,
});
