'use babel';
"use strict";

var math = require("mathjs")

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var showPositives = new Boolean();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function togglePositives() {
  if (!showPositives) {
    showPositives = true;
  } else {
    showPositives = false;
  }
}

exports.togglePositives = togglePositives;

class Math extends React.Component {
  render() {
    const lang = this.props.lang;
    const equation = this.props.children[0];

    if (equation) {
      try {
        var result = math.evaluate(equation)
        if (showPositives) {
          return /*#__PURE__*/React.createElement("span", null, (result<0?"":"+") + result);
        } else {
          return /*#__PURE__*/React.createElement("span", null, result);
        }
        
      } catch (e) {
        return /*#__PURE__*/React.createElement("span", null, e.message);
      }
    } else {
      return /*#__PURE__*/React.createElement("span", null, "Invalid calculator block");
    }
  }

}

exports.default = Math;

_defineProperty(Math, "propTypes", {
  lang: _propTypes.default.string.isRequired,
  children: _propTypes.default.arrayOf(_propTypes.default.string)
});