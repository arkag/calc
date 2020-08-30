"use strict";

module.exports = function (processor) {
  const Parser = this.Parser;
  const inlineTokenizers = Parser.prototype.inlineTokenizers;
  const inlineMethods = Parser.prototype.inlineMethods;
  inlineTokenizers.calc = require('./remark-calc-inline-parser');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'calc');
};