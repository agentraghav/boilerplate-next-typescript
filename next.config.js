const withCSS = require('@zeit/next-css')
const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');
module.exports = withImages({
  i18n,  
});
