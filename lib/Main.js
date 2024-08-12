"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Main;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Main(props) {
  var _props$paddingX = props.paddingX,
    paddingX = _props$paddingX === void 0 ? null : _props$paddingX,
    _props$paddingY = props.paddingY,
    paddingY = _props$paddingY === void 0 ? null : _props$paddingY,
    _props$background = props.background,
    background = _props$background === void 0 ? 'base-0' : _props$background,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'flex-col' : _props$direction,
    _props$gap = props.gap,
    gap = _props$gap === void 0 ? 'base' : _props$gap,
    _props$alignItems = props.alignItems,
    alignItems = _props$alignItems === void 0 ? 'start' : _props$alignItems,
    _props$justifyContent = props.justifyContent,
    justifyContent = _props$justifyContent === void 0 ? 'start' : _props$justifyContent,
    _props$textSize = props.textSize,
    textSize = _props$textSize === void 0 ? 'base' : _props$textSize,
    _props$width = props.width,
    width = _props$width === void 0 ? '960' : _props$width,
    _props$selfAlign = props.selfAlign,
    selfAlign = _props$selfAlign === void 0 ? 'center' : _props$selfAlign,
    _props$marginX = props.marginX,
    marginX = _props$marginX === void 0 ? null : _props$marginX,
    _props$marginY = props.marginY,
    marginY = _props$marginY === void 0 ? null : _props$marginY,
    _props$corners = props.corners,
    corners = _props$corners === void 0 ? 'none' : _props$corners,
    children = props.children,
    attributes = props.attributes,
    listeners = props.listeners;
  var bgStyles = "bg-".concat(background);
  var gapStyles = gap === 'none' ? '' : "gap-".concat(gap);
  var fontSize = "text-" + textSize;
  var alignItemsStyles = alignItems ? "items-".concat(alignItems) : '';
  var justifyContentStyles = justifyContent ? "justify-".concat(justifyContent) : '';
  var paddingStyles = "".concat(paddingX ? "px-".concat(paddingX) : '', " ").concat(paddingY ? "py-".concat(paddingY) : '');
  var fontColor = background != 'none' ? background == 'base-900' ? "text-base-0" : background !== null && background !== void 0 && background.startsWith('base') ? 'text-base-content' : "text-".concat(background, "-content") : '';
  var alignMain = "items-".concat(selfAlign);
  var cornerStyles = corners === 'none' ? '' : "rounded-".concat(corners);
  var marginStyles = "".concat(marginX ? "px-".concat(marginX) : '', " ").concat(marginY ? "py-".concat(marginY) : '');
  var outerClasses = "flex flex-col flex-grow w-full relative ".concat(alignMain, " ").concat(fontColor, " ").concat(fontSize, " ").concat(marginStyles);
  var innerClasses = "flex ".concat(direction, " flex-grow w-full z-0 relative  ").concat(bgStyles, " ").concat(paddingStyles, " ").concat(gapStyles, " ").concat(alignItemsStyles, " ").concat(justifyContentStyles, " ").concat(cornerStyles);
  return /*#__PURE__*/React.createElement("div", _extends({}, attributes, listeners, {
    style: {
      minHeight: '100%',
      overflow: 'scroll'
    },
    className: outerClasses
  }), /*#__PURE__*/React.createElement("div", {
    className: innerClasses,
    style: {
      width: '100%',
      maxWidth: width != 'stretch' ? "".concat(width, "px") : '100%'
    }
  }, children));
}
Main.propTypes = {
  background: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['base-0', 'base-50', 'base-100', 'base-200', 'primary', 'accent', 'base-900', 'none']), _propTypes["default"].string]),
  width: _propTypes["default"].oneOf(['stretch', '780', '960', '1200', '1440']),
  direction: _propTypes["default"].oneOf(["flex-col", "flex-row"]),
  paddingX: _propTypes["default"].oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
  paddingY: _propTypes["default"].oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
  marginX: _propTypes["default"].oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
  marginY: _propTypes["default"].oneOf(["none", "sm", "base", "md", "lg", 'xl', '2xl']),
  corners: _propTypes["default"].oneOf(['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
  gap: _propTypes["default"].oneOf(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl']),
  selfAlign: _propTypes["default"].oneOf(['start', 'center', 'end']),
  alignItems: _propTypes["default"].oneOf(['start', 'center', 'end', 'stretch']),
  justifyContent: _propTypes["default"].oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
  textSize: _propTypes["default"].oneOf(['sm', 'base', 'md']),
  children: _propTypes["default"].node
};