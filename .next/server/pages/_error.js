"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 9651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _classCallCheck=__webpack_require__(4575);var _createClass=__webpack_require__(3913);var _inherits=__webpack_require__(2205);var _possibleConstructorReturn=__webpack_require__(8585);var _getPrototypeOf=__webpack_require__(9754);function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _interop_require_default=(__webpack_require__(2648)/* ["default"] */ .Z);var _react=_interop_require_default(__webpack_require__(6689));var _head=_interop_require_default(__webpack_require__(4957));var statusCodes={400:'Bad Request',404:'This page could not be found',405:'Method Not Allowed',500:'Internal Server Error'};function _getInitialProps(_ref){var res=_ref.res,err=_ref.err;var statusCode=res&&res.statusCode?res.statusCode:err?err.statusCode:404;return{statusCode:statusCode};}var styles={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:'100vh',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'},desc:{display:'inline-block',textAlign:'left',lineHeight:'49px',height:'49px',verticalAlign:'middle'},h1:{display:'inline-block',margin:0,marginRight:'20px',padding:'0 23px 0 0',fontSize:'24px',fontWeight:500,verticalAlign:'top',lineHeight:'49px'},h2:{fontSize:'14px',fontWeight:'normal',lineHeight:'49px',margin:0,padding:0}};var _Component;var Error=function(_Component2){_inherits(Error,_Component2);var _super=_createSuper(Error);function Error(){_classCallCheck(this,Error);return _super.apply(this,arguments);}_createClass(Error,[{key:"render",value:function render(){var _this$props=this.props,statusCode=_this$props.statusCode,_this$props$withDarkM=_this$props.withDarkMode,withDarkMode=_this$props$withDarkM===void 0?true:_this$props$withDarkM;var title=this.props.title||statusCodes[statusCode]||'An unexpected error has occurred';return _react.default.createElement("div",{style:styles.error},_react.default.createElement(_head.default,null,_react.default.createElement("title",null,statusCode?statusCode+": "+title:'Application error: a client-side exception has occurred')),_react.default.createElement("div",null,_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                "+(withDarkMode?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":'')}}),statusCode?_react.default.createElement("h1",{className:"next-error-h1",style:styles.h1},statusCode):null,_react.default.createElement("div",{style:styles.desc},_react.default.createElement("h2",{style:styles.h2},this.props.title||statusCode?title:_react.default.createElement(_react.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))));}}]);return Error;}(_Component=_react.default.Component);Error.displayName='ErrorPage';Error.getInitialProps=_getInitialProps;Error.origGetInitialProps=_getInitialProps;exports["default"]=Error;

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [615,708], () => (__webpack_exec__(9651)));
module.exports = __webpack_exports__;

})();