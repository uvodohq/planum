const uiGenerator = require('./generators/ui/index')

module.exports = function (plop) {
  plop.setGenerator('ui', uiGenerator)
}
