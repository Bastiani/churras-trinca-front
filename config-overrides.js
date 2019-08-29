const { addBabelPlugins, disableEsLint, override } = require('customize-cra');

module.exports = override(disableEsLint(), ...addBabelPlugins('relay'));
