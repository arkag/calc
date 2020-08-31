// pulled from inkdrop-math plugin

"use strict";
'use babel';

var _remarkCalc = _interopRequireDefault(require("./remark-calc"));

var _inkdrop = require("inkdrop");

var _reactCalc = _interopRequireDefault(require("./react-calc"));

const showPositives = new Boolean();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  activate() {
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkPlugins.push(_remarkCalc.default);

      _inkdrop.markdownRenderer.remarkCodeComponents.inline_calc = _reactCalc.default;
    }
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
  },

  componentWillMount() {
    // Events subscribed to in Inkdrop's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this dialog
    this.subscriptions.add(inkdrop.commands.add(document.body, {
      'calc:toggle-positives': () => this.togglePositives()
    }));
  },

  togglePositives() {
    if (!showPositives) {
      showPositives = true;
    } else {
      showPositives = false;
    }
  }
}
