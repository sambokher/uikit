"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppShell;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AppShell(props) {
  var _props$pageBackground = props.pageBackground,
    pageBackground = _props$pageBackground === void 0 ? 'base-0' : _props$pageBackground,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 'stretch' : _props$maxWidth,
    _props$justifyContent = props.justifyContent,
    justifyContent = _props$justifyContent === void 0 ? 'center' : _props$justifyContent,
    _props$paddingX = props.paddingX,
    paddingX = _props$paddingX === void 0 ? null : _props$paddingX,
    _props$paddingY = props.paddingY,
    paddingY = _props$paddingY === void 0 ? null : _props$paddingY,
    children = props.children,
    attributes = props.attributes,
    listeners = props.listeners;
  var paddingStyles = "".concat(paddingX ? " px-".concat(paddingX) : 'px-0', " ").concat(paddingY ? "py-".concat(paddingY) : 'py-0');
  var fontColor = pageBackground !== null && pageBackground !== void 0 && pageBackground.startsWith('base') ? 'base-content' : "".concat(pageBackground, "-content");
  var pageBgColor = "bg-".concat(pageBackground);
  var fontColorValue = "text-".concat(fontColor);

  // Ensure that parent has h-screen or replace h-full to h-screen in the classes below
  var outerClasses = "relative flex flex-col w-full h-full flex-grow ".concat(pageBgColor, " ").concat(fontColorValue);
  var innerClasses = "relative flex flex-row w-full items-stretch flex-grow min-h-full self-".concat(justifyContent, " ").concat(paddingStyles);
  var mainClasses = "relative flex flex-col w-full items-stretch flex-grow min-h-full";
  var groupedChildren = {
    Header: [],
    Hero: [],
    IconBar: [],
    Sidebar: [],
    FeaturePanel: [],
    MainArea: [],
    // sidepanel + main
    Footer: []
  };
  _react["default"].Children.forEach(children, function (child) {
    if ( /*#__PURE__*/(0, _react.isValidElement)(child)) {
      var _child$props;
      var type = child.type;
      var typeName = (type === null || type === void 0 ? void 0 : type.displayName) || (type === null || type === void 0 ? void 0 : type.name);
      typeName = child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.self) === null || _child$props === void 0 ? void 0 : _child$props.componentAPIName; // comment out
      if (groupedChildren[typeName]) {
        groupedChildren[typeName].push(child);
      } else {
        groupedChildren.MainArea.push(child);
      }
    }
  });
  var Header = groupedChildren.Header,
    Hero = groupedChildren.Hero,
    Footer = groupedChildren.Footer,
    MainArea = groupedChildren.MainArea,
    IconBar = groupedChildren.IconBar,
    Sidebar = groupedChildren.Sidebar,
    FeaturePanel = groupedChildren.FeaturePanel;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, attributes, listeners, {
    className: outerClasses
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: innerClasses,
    style: {
      width: '100%',
      maxWidth: maxWidth != 'stretch' ? "".concat(maxWidth, "px") : '100%'
    }
  }, IconBar, Sidebar, FeaturePanel, /*#__PURE__*/_react["default"].createElement("div", {
    className: mainClasses,
    style: {
      minHeight: '100%'
    }
  }, Header, Hero, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row flex-grow w-full h-full  justify-".concat(justifyContent)
  }, MainArea), Footer)));
}
AppShell.propTypes = {
  pageBackground: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'base-300', 'primary', 'secondary', 'accent']), _propTypes["default"].string]),
  maxWidth: _propTypes["default"].oneOf(['stretch', '960', '1200', '1440', '1920']),
  justifyContent: _propTypes["default"].oneOf(['center', 'start', 'end']),
  paddingX: _propTypes["default"].oneOf(["none", "xs", "2xs", "sm", "base", "md", "lg", 'xl', '2xl']),
  paddingY: _propTypes["default"].oneOf(["none", "xs", "2xs", "sm", "base", "md", "lg", 'xl', '2xl']),
  children: _propTypes["default"].node
};