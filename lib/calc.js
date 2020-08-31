// pulled from inkdrop-math plugin

'use babel';
"use strict";

var _togglePositives = require("./react-calc");

var _remarkCalc = _interopRequireDefault(require("./remark-calc"));

var _inkdrop = require("inkdrop");

var _reactCalc = _interopRequireDefault(require("./react-calc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  activate() {
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkPlugins.push(_remarkCalc.default);

      _inkdrop.markdownRenderer.remarkCodeComponents.inline_calc = _reactCalc.default;
    }

    // Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = inkdrop.commands.add(document.body, {
      'calc:toggle-positives': () => _togglePositives.togglePositives()
    });
  },

  deactivate() {
    if (_inkdrop.markdownRenderer) {
      const {
        remarkPlugins,
        remarkCodeComponents
      } = _inkdrop.markdownRenderer;
      const i = remarkPlugins.indexOf(_remarkCalc.default);
      if (i >= 0) remarkPlugins.splice(i, 1);
      if (remarkCodeComponents.inline_calc === _react.default) delete remarkCodeComponents.inline_calc;
    }
    this.subscription.dispose()
  }

}
