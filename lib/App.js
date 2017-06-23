"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    "div",
    { className: "App" },
    _react2.default.createElement(
      "div",
      { className: "App-header" },
      _react2.default.createElement(
        "h2",
        null,
        "Welcome to our React Library"
      )
    ),
    _react2.default.createElement(
      "p",
      { className: "App-intro" },
      "This is our React Library Content"
    )
  );
};

exports.default = App;