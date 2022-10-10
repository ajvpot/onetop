exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 7228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 2858:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 3646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 5318:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 6860:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 3884:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 521:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 8206:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 3038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(2858);

var iterableToArrayLimit = __webpack_require__(3884);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableRest = __webpack_require__(521);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(3646);

var iterableToArray = __webpack_require__(6860);

var unsupportedIterableToArray = __webpack_require__(379);

var nonIterableSpread = __webpack_require__(8206);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(7228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireWildcard;
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}


/***/ }),

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 227:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.addBasePath=addBasePath;var _addPathPrefix=__webpack_require__(1751);var _normalizeTrailingSlash=__webpack_require__(4969);var basePath= false||'';function addBasePath(path,required){if(false){}return(0,_normalizeTrailingSlash).normalizePathTrailingSlash((0,_addPathPrefix).addPathPrefix(path,basePath));}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 7995:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.addLocale=void 0;var _normalizeTrailingSlash=__webpack_require__(4969);var addLocale=function addLocale(path){if(false){ var _len, args, _key, _require; }return path;};exports.addLocale=addLocale;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 7565:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.detectDomainLocale=void 0;var detectDomainLocale=function detectDomainLocale(){if(false){ var _require; }};exports.detectDomainLocale=detectDomainLocale;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 4019:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.getDomainLocale=getDomainLocale;var basePath=(/* unused pure expression or super */ null && ( false||''));function getDomainLocale(path,locale,locales,domainLocales){if(false){ var finalLocale, proto, domain, target, detectDomainLocale, normalizeLocalePath; }else{return false;}}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 8771:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.hasBasePath=hasBasePath;var _pathHasPrefix=__webpack_require__(4567);var basePath= false||'';function hasBasePath(path){return(0,_pathHasPrefix).pathHasPrefix(path,basePath);}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 877:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=initHeadManager;exports.isEqualNode=isEqualNode;exports.DOMAttributeNames=void 0;function initHeadManager(){return{mountedInstances:new Set(),updateHead:function updateHead(head){var tags={};head.forEach(function(h){if(h.type==='link'&&h.props['data-optimized-fonts']){if(document.querySelector("style[data-href=\""+h.props['data-href']+"\"]")){return;}else{h.props.href=h.props['data-href'];h.props['data-href']=undefined;}}var components=tags[h.type]||[];components.push(h);tags[h.type]=components;});var titleComponent=tags.title?tags.title[0]:null;var title='';if(titleComponent){var children=titleComponent.props.children;title=typeof children==='string'?children:Array.isArray(children)?children.join(''):'';}if(title!==document.title)document.title=title;['meta','base','link','style','script'].forEach(function(type){updateElements(type,tags[type]||[]);});}};}var DOMAttributeNames={acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv',noModule:'noModule'};exports.DOMAttributeNames=DOMAttributeNames;function reactElementToDOM(_ref){var type=_ref.type,props=_ref.props;var el=document.createElement(type);for(var p in props){if(!props.hasOwnProperty(p))continue;if(p==='children'||p==='dangerouslySetInnerHTML')continue;if(props[p]===undefined)continue;var attr=DOMAttributeNames[p]||p.toLowerCase();if(type==='script'&&(attr==='async'||attr==='defer'||attr==='noModule')){el[attr]=!!props[p];}else{el.setAttribute(attr,props[p]);}}var children=props.children,dangerouslySetInnerHTML=props.dangerouslySetInnerHTML;if(dangerouslySetInnerHTML){el.innerHTML=dangerouslySetInnerHTML.__html||'';}else if(children){el.textContent=typeof children==='string'?children:Array.isArray(children)?children.join(''):'';}return el;}function isEqualNode(oldTag,newTag){if(oldTag instanceof HTMLElement&&newTag instanceof HTMLElement){var nonce=newTag.getAttribute('nonce');if(nonce&&!oldTag.getAttribute('nonce')){var cloneTag=newTag.cloneNode(true);cloneTag.setAttribute('nonce','');cloneTag.nonce=nonce;return nonce===oldTag.nonce&&oldTag.isEqualNode(cloneTag);}}return oldTag.isEqualNode(newTag);}function updateElements(type,components){var headEl=document.getElementsByTagName('head')[0];var headCountEl=headEl.querySelector('meta[name=next-head-count]');if(false){}var headCount=Number(headCountEl.content);var oldTags=[];for(var i=0,j=headCountEl.previousElementSibling;i<headCount;i++,j=(j==null?void 0:j.previousElementSibling)||null){var ref;if((j==null?void 0:(ref=j.tagName)==null?void 0:ref.toLowerCase())===type){oldTags.push(j);}}var newTags=components.map(reactElementToDOM).filter(function(newTag){for(var k=0,len=oldTags.length;k<len;k++){var oldTag=oldTags[k];if(isEqualNode(oldTag,newTag)){oldTags.splice(k,1);return false;}}return true;});oldTags.forEach(function(t){var ref;return(ref=t.parentNode)==null?void 0:ref.removeChild(t);});newTags.forEach(function(t){return headEl.insertBefore(t,headCountEl);});headCountEl.content=(headCount-oldTags.length+newTags.length).toString();}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 7942:
/***/ ((module, exports, __webpack_require__) => {

"client";"use strict";var _extends=__webpack_require__(7154);var _slicedToArray=__webpack_require__(3038);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _interop_require_default=(__webpack_require__(2648)/* ["default"] */ .Z);var _object_without_properties_loose=(__webpack_require__(7273)/* ["default"] */ .Z);var _react=_interop_require_default(__webpack_require__(6689));var _router=__webpack_require__(5781);var _addLocale=__webpack_require__(7995);var _routerContext=__webpack_require__(4964);var _appRouterContext=__webpack_require__(3280);var _useIntersection=__webpack_require__(639);var _getDomainLocale=__webpack_require__(4019);var _addBasePath=__webpack_require__(227);'client';var prefetched={};function prefetch(router,href,as,options){if(true)return;if(!(0,_router).isLocalURL(href))return;Promise.resolve(router.prefetch(href,as,options)).catch(function(err){if(false){}});var curLocale=options&&typeof options.locale!=='undefined'?options.locale:router&&router.locale;prefetched[href+'%'+as+(curLocale?'%'+curLocale:'')]=true;}function isModifiedEvent(event){var target=event.currentTarget.target;return target&&target!=='_self'||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&event.nativeEvent.which===2;}function linkClicked(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){var nodeName=e.currentTarget.nodeName;var isAnchorNodeName=nodeName.toUpperCase()==='A';if(isAnchorNodeName&&(isModifiedEvent(e)||!(0,_router).isLocalURL(href))){return;}e.preventDefault();var navigate=function navigate(){if('beforePopState'in router){router[replace?'replace':'push'](href,as,{shallow:shallow,locale:locale,scroll:scroll});}else{var method=replace?'replace':'push';router[method](href,{forceOptimisticNavigation:!prefetchEnabled});}};if(isAppRouter){_react.default.startTransition(navigate);}else{navigate();}}var Link=_react.default.forwardRef(function LinkComponent(props,forwardedRef){if(false){ var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }var children;var hrefProp=props.href,asProp=props.as,childrenProp=props.children,prefetchProp=props.prefetch,passHref=props.passHref,replace=props.replace,shallow=props.shallow,scroll=props.scroll,locale=props.locale,_onClick=props.onClick,_onMouseEnter=props.onMouseEnter,_onTouchStart=props.onTouchStart,_props$legacyBehavior=props.legacyBehavior,legacyBehavior=_props$legacyBehavior===void 0?Boolean(false)!==true:_props$legacyBehavior,restProps=_object_without_properties_loose(props,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);children=childrenProp;if(legacyBehavior&&(typeof children==='string'||typeof children==='number')){children=_react.default.createElement("a",null,children);}var p=prefetchProp!==false;var router=_react.default.useContext(_routerContext.RouterContext);var appRouter=_react.default.useContext(_appRouterContext.AppRouterContext);if(appRouter){router=appRouter;}var _react$default$useMem=_react.default.useMemo(function(){var _resolveHref=(0,_router).resolveHref(router,hrefProp,true),_resolveHref2=_slicedToArray(_resolveHref,2),resolvedHref=_resolveHref2[0],resolvedAs=_resolveHref2[1];return{href:resolvedHref,as:asProp?(0,_router).resolveHref(router,asProp):resolvedAs||resolvedHref};},[router,hrefProp,asProp]),href=_react$default$useMem.href,as=_react$default$useMem.as;var previousHref=_react.default.useRef(href);var previousAs=_react.default.useRef(as);var child;if(legacyBehavior){if(false){}else{child=_react.default.Children.only(children);}}var childRef=legacyBehavior?child&&typeof child==='object'&&child.ref:forwardedRef;var _useIntersection2=(0,_useIntersection).useIntersection({rootMargin:'200px'}),_useIntersection3=_slicedToArray(_useIntersection2,3),setIntersectionRef=_useIntersection3[0],isVisible=_useIntersection3[1],resetVisible=_useIntersection3[2];var setRef=_react.default.useCallback(function(el){if(previousAs.current!==as||previousHref.current!==href){resetVisible();previousAs.current=as;previousHref.current=href;}setIntersectionRef(el);if(childRef){if(typeof childRef==='function')childRef(el);else if(typeof childRef==='object'){childRef.current=el;}}},[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect(function(){var shouldPrefetch=isVisible&&p&&(0,_router).isLocalURL(href);var curLocale=typeof locale!=='undefined'?locale:router&&router.locale;var isPrefetched=prefetched[href+'%'+as+(curLocale?'%'+curLocale:'')];if(shouldPrefetch&&!isPrefetched){prefetch(router,href,as,{locale:curLocale});}},[as,href,isVisible,locale,p,router]);var childProps={ref:setRef,onClick:function onClick(e){if(false){}if(!legacyBehavior&&typeof _onClick==='function'){_onClick(e);}if(legacyBehavior&&child.props&&typeof child.props.onClick==='function'){child.props.onClick(e);}if(!e.defaultPrevented){linkClicked(e,router,href,as,replace,shallow,scroll,locale,Boolean(appRouter),p);}},onMouseEnter:function onMouseEnter(e){if(!legacyBehavior&&typeof _onMouseEnter==='function'){_onMouseEnter(e);}if(legacyBehavior&&child.props&&typeof child.props.onMouseEnter==='function'){child.props.onMouseEnter(e);}if(!(!p&&appRouter)){if((0,_router).isLocalURL(href)){prefetch(router,href,as,{priority:true});}}},onTouchStart:function onTouchStart(e){if(!legacyBehavior&&typeof _onTouchStart==='function'){_onTouchStart(e);}if(legacyBehavior&&child.props&&typeof child.props.onTouchStart==='function'){child.props.onTouchStart(e);}if(!(!p&&appRouter)){if((0,_router).isLocalURL(href)){prefetch(router,href,as,{priority:true});}}}};if(!legacyBehavior||passHref||child.type==='a'&&!('href'in child.props)){var curLocale=typeof locale!=='undefined'?locale:router&&router.locale;var localeDomain=router&&router.isLocaleDomain&&(0,_getDomainLocale).getDomainLocale(as,curLocale,router.locales,router.domainLocales);childProps.href=localeDomain||(0,_addBasePath).addBasePath((0,_addLocale).addLocale(as,curLocale,router&&router.defaultLocale));}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",_extends({},restProps,childProps),children);});var _default=Link;exports["default"]=_default;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 4969:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.normalizePathTrailingSlash=void 0;var _removeTrailingSlash=__webpack_require__(3297);var _parsePath=__webpack_require__(8854);var normalizePathTrailingSlash=function normalizePathTrailingSlash(path){if(!path.startsWith('/')){return path;}var _parsePath2=(0,_parsePath).parsePath(path),pathname=_parsePath2.pathname,query=_parsePath2.query,hash=_parsePath2.hash;if(false){}return""+(0,_removeTrailingSlash).removeTrailingSlash(pathname)+query+hash;};exports.normalizePathTrailingSlash=normalizePathTrailingSlash;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 5678:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.removeBasePath=removeBasePath;var _hasBasePath=__webpack_require__(8771);var basePath= false||'';function removeBasePath(path){if(false){}path=path.slice(basePath.length);if(!path.startsWith('/'))path="/"+path;return path;}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 9781:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.removeLocale=removeLocale;var _parsePath=__webpack_require__(8854);function removeLocale(path,locale){if(false){ var localeLower, pathLower, _parsePath2, pathname; }return path;}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 6286:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.cancelIdleCallback=exports.requestIdleCallback=void 0;var requestIdleCallback=typeof self!=='undefined'&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:false,timeRemaining:function timeRemaining(){return Math.max(0,50-(Date.now()-start));}});},1);};exports.requestIdleCallback=requestIdleCallback;var cancelIdleCallback=typeof self!=='undefined'&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(id){return clearTimeout(id);};exports.cancelIdleCallback=cancelIdleCallback;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 4989:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.markAssetError=markAssetError;exports.isAssetError=isAssetError;exports.getClientBuildManifest=getClientBuildManifest;exports.createRouteLoader=createRouteLoader;var _interop_require_default=(__webpack_require__(2648)/* ["default"] */ .Z);var _getAssetPathFromRoute=_interop_require_default(__webpack_require__(9565));var _trustedTypes=__webpack_require__(5740);var _requestIdleCallback=__webpack_require__(6286);var MS_MAX_IDLE_DELAY=3800;function withFuture(key,map,generator){var entry=map.get(key);if(entry){if('future'in entry){return entry.future;}return Promise.resolve(entry);}var resolver;var prom=new Promise(function(resolve){resolver=resolve;});map.set(key,entry={resolve:resolver,future:prom});return generator?generator().then(function(value){return resolver(value),value;}).catch(function(err){map.delete(key);throw err;}):prom;}function hasPrefetch(link){try{link=document.createElement('link');return!!window.MSInputMethodContext&&!!document.documentMode||link.relList.supports('prefetch');}catch(e){return false;}}var canPrefetch=hasPrefetch();function prefetchViaDom(href,as,link){return new Promise(function(res,rej){var selector="\n      link[rel=\"prefetch\"][href^=\""+href+"\"],\n      link[rel=\"preload\"][href^=\""+href+"\"],\n      script[src^=\""+href+"\"]";if(document.querySelector(selector)){return res();}link=document.createElement('link');if(as)link.as=as;link.rel="prefetch";link.crossOrigin=undefined;link.onload=res;link.onerror=rej;link.href=href;document.head.appendChild(link);});}var ASSET_LOAD_ERROR=Symbol('ASSET_LOAD_ERROR');function markAssetError(err){return Object.defineProperty(err,ASSET_LOAD_ERROR,{});}function isAssetError(err){return err&&ASSET_LOAD_ERROR in err;}function appendScript(src,script){return new Promise(function(resolve,reject){script=document.createElement('script');script.onload=resolve;script.onerror=function(){return reject(markAssetError(new Error("Failed to load script: "+src)));};script.crossOrigin=undefined;script.src=src;document.body.appendChild(script);});}var devBuildPromise;function resolvePromiseWithTimeout(p,ms,err){return new Promise(function(resolve,reject){var cancelled=false;p.then(function(r){cancelled=true;resolve(r);}).catch(reject);if(false){}if(true){(0,_requestIdleCallback).requestIdleCallback(function(){return setTimeout(function(){if(!cancelled){reject(err);}},ms);});}});}function getClientBuildManifest(){if(self.__BUILD_MANIFEST){return Promise.resolve(self.__BUILD_MANIFEST);}var onBuildManifest=new Promise(function(resolve){var cb=self.__BUILD_MANIFEST_CB;self.__BUILD_MANIFEST_CB=function(){resolve(self.__BUILD_MANIFEST);cb&&cb();};});return resolvePromiseWithTimeout(onBuildManifest,MS_MAX_IDLE_DELAY,markAssetError(new Error('Failed to load client build manifest')));}function getFilesForRoute(assetPrefix,route){if(false){ var scriptUrl; }return getClientBuildManifest().then(function(manifest){if(!(route in manifest)){throw markAssetError(new Error("Failed to lookup route: "+route));}var allFiles=manifest[route].map(function(entry){return assetPrefix+'/_next/'+encodeURI(entry);});return{scripts:allFiles.filter(function(v){return v.endsWith('.js');}).map(function(v){return(0,_trustedTypes).__unsafeCreateTrustedScriptURL(v);}),css:allFiles.filter(function(v){return v.endsWith('.css');})};});}function createRouteLoader(assetPrefix){var entrypoints=new Map();var loadedScripts=new Map();var styleSheets=new Map();var routes=new Map();function maybeExecuteScript(src){if(true){var prom=loadedScripts.get(src.toString());if(prom){return prom;}if(document.querySelector("script[src^=\""+src+"\"]")){return Promise.resolve();}loadedScripts.set(src.toString(),prom=appendScript(src));return prom;}else{}}function fetchStyleSheet(href){var prom=styleSheets.get(href);if(prom){return prom;}styleSheets.set(href,prom=fetch(href).then(function(res){if(!res.ok){throw new Error("Failed to load stylesheet: "+href);}return res.text().then(function(text){return{href:href,content:text};});}).catch(function(err){throw markAssetError(err);}));return prom;}return{whenEntrypoint:function whenEntrypoint(route){return withFuture(route,entrypoints);},onEntrypoint:function onEntrypoint(route,execute){(execute?Promise.resolve().then(function(){return execute();}).then(function(exports){return{component:exports&&exports.default||exports,exports:exports};},function(err){return{error:err};}):Promise.resolve(undefined)).then(function(input){var old=entrypoints.get(route);if(old&&'resolve'in old){if(input){entrypoints.set(route,input);old.resolve(input);}}else{if(input){entrypoints.set(route,input);}else{entrypoints.delete(route);}routes.delete(route);}});},loadRoute:function loadRoute(route,prefetch){var _this=this;return withFuture(route,routes,function(){var devBuildPromiseResolve;if(false){}return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix,route).then(function(_ref){var scripts=_ref.scripts,css=_ref.css;return Promise.all([entrypoints.has(route)?[]:Promise.all(scripts.map(maybeExecuteScript)),Promise.all(css.map(fetchStyleSheet))]);}).then(function(res){return _this.whenEntrypoint(route).then(function(entrypoint){return{entrypoint:entrypoint,styles:res[1]};});}),MS_MAX_IDLE_DELAY,markAssetError(new Error("Route did not complete loading: "+route))).then(function(_ref2){var entrypoint=_ref2.entrypoint,styles=_ref2.styles;var res=_extends({styles:styles},entrypoint);return'error'in entrypoint?entrypoint:res;}).catch(function(err){if(prefetch){throw err;}return{error:err};}).finally(function(){return devBuildPromiseResolve==null?void 0:devBuildPromiseResolve();});});},prefetch:function prefetch(route){var _this2=this;var cn;if(cn=navigator.connection){if(cn.saveData||/2g/.test(cn.effectiveType))return Promise.resolve();}return getFilesForRoute(assetPrefix,route).then(function(output){return Promise.all(canPrefetch?output.scripts.map(function(script){return prefetchViaDom(script.toString(),'script');}):[]);}).then(function(){(0,_requestIdleCallback).requestIdleCallback(function(){return _this2.loadRoute(route,true).catch(function(){});});}).catch(function(){});}};}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 2189:
/***/ ((module, exports, __webpack_require__) => {

"client";"use strict";var _extends2=__webpack_require__(7154);var _toConsumableArray=__webpack_require__(319);var _slicedToArray=__webpack_require__(3038);Object.defineProperty(exports, "__esModule", ({value:true}));exports.handleClientScriptLoad=handleClientScriptLoad;exports.initScriptLoader=initScriptLoader;exports["default"]=void 0;var _extends=(__webpack_require__(6495)/* ["default"] */ .Z);var _interop_require_wildcard=(__webpack_require__(1598)/* ["default"] */ .Z);var _object_without_properties_loose=(__webpack_require__(7273)/* ["default"] */ .Z);var _react=_interop_require_wildcard(__webpack_require__(6689));var _headManagerContext=__webpack_require__(2796);var _headManager=__webpack_require__(877);var _requestIdleCallback=__webpack_require__(6286);'client';var ScriptCache=new Map();var LoadCache=new Set();var ignoreProps=['onLoad','onReady','dangerouslySetInnerHTML','children','onError','strategy'];var loadScript=function loadScript(props){var src=props.src,id=props.id,_props$onLoad=props.onLoad,onLoad=_props$onLoad===void 0?function(){}:_props$onLoad,_props$onReady=props.onReady,onReady=_props$onReady===void 0?null:_props$onReady,dangerouslySetInnerHTML=props.dangerouslySetInnerHTML,_props$children=props.children,children=_props$children===void 0?'':_props$children,_props$strategy=props.strategy,strategy=_props$strategy===void 0?'afterInteractive':_props$strategy,onError=props.onError;var cacheKey=id||src;if(cacheKey&&LoadCache.has(cacheKey)){return;}if(ScriptCache.has(src)){LoadCache.add(cacheKey);ScriptCache.get(src).then(onLoad,onError);return;}var afterLoad=function afterLoad(){if(onReady){onReady();}LoadCache.add(cacheKey);};var el=document.createElement('script');var loadPromise=new Promise(function(resolve,reject){el.addEventListener('load',function(e){resolve();if(onLoad){onLoad.call(this,e);}afterLoad();});el.addEventListener('error',function(e){reject(e);});}).catch(function(e){if(onError){onError(e);}});if(dangerouslySetInnerHTML){el.innerHTML=dangerouslySetInnerHTML.__html||'';afterLoad();}else if(children){el.textContent=typeof children==='string'?children:Array.isArray(children)?children.join(''):'';afterLoad();}else if(src){el.src=src;ScriptCache.set(src,loadPromise);}for(var _i=0,_Object$entries=Object.entries(props);_i<_Object$entries.length;_i++){var _ref=_Object$entries[_i];var _ref2=_slicedToArray(_ref,2);var k=_ref2[0];var value=_ref2[1];if(value===undefined||ignoreProps.includes(k)){continue;}var attr=_headManager.DOMAttributeNames[k]||k.toLowerCase();el.setAttribute(attr,value);}if(strategy==='worker'){el.setAttribute('type','text/partytown');}el.setAttribute('data-nscript',strategy);document.body.appendChild(el);};function handleClientScriptLoad(props){var _props$strategy2=props.strategy,strategy=_props$strategy2===void 0?'afterInteractive':_props$strategy2;if(strategy==='lazyOnload'){window.addEventListener('load',function(){(0,_requestIdleCallback).requestIdleCallback(function(){return loadScript(props);});});}else{loadScript(props);}}function loadLazyScript(props){if(document.readyState==='complete'){(0,_requestIdleCallback).requestIdleCallback(function(){return loadScript(props);});}else{window.addEventListener('load',function(){(0,_requestIdleCallback).requestIdleCallback(function(){return loadScript(props);});});}}function addBeforeInteractiveToCache(){var scripts=[].concat(_toConsumableArray(document.querySelectorAll('[data-nscript="beforeInteractive"]')),_toConsumableArray(document.querySelectorAll('[data-nscript="beforePageRender"]')));scripts.forEach(function(script){var cacheKey=script.id||script.getAttribute('src');LoadCache.add(cacheKey);});}function initScriptLoader(scriptLoaderItems){scriptLoaderItems.forEach(handleClientScriptLoad);addBeforeInteractiveToCache();}function Script(props){var id=props.id,_props$src=props.src,src=_props$src===void 0?'':_props$src,_props$onLoad2=props.onLoad,onLoad=_props$onLoad2===void 0?function(){}:_props$onLoad2,_props$onReady2=props.onReady,onReady=_props$onReady2===void 0?null:_props$onReady2,_props$strategy3=props.strategy,strategy=_props$strategy3===void 0?'afterInteractive':_props$strategy3,onError=props.onError,restProps=_object_without_properties_loose(props,["id","src","onLoad","onReady","strategy","onError"]);var _useContext=(0,_react).useContext(_headManagerContext.HeadManagerContext),updateScripts=_useContext.updateScripts,scripts=_useContext.scripts,getIsSsr=_useContext.getIsSsr;var hasOnReadyEffectCalled=(0,_react).useRef(false);(0,_react).useEffect(function(){var cacheKey=id||src;if(!hasOnReadyEffectCalled.current){if(onReady&&cacheKey&&LoadCache.has(cacheKey)){onReady();}hasOnReadyEffectCalled.current=true;}},[onReady,id,src]);var hasLoadScriptEffectCalled=(0,_react).useRef(false);(0,_react).useEffect(function(){if(!hasLoadScriptEffectCalled.current){if(strategy==='afterInteractive'){loadScript(props);}else if(strategy==='lazyOnload'){loadLazyScript(props);}hasLoadScriptEffectCalled.current=true;}},[props,strategy]);if(strategy==='beforeInteractive'||strategy==='worker'){if(updateScripts){scripts[strategy]=(scripts[strategy]||[]).concat([_extends({id:id,src:src,onLoad:onLoad,onReady:onReady,onError:onError},restProps)]);updateScripts(scripts);}else if(getIsSsr&&getIsSsr()){LoadCache.add(id||src);}else if(getIsSsr&&!getIsSsr()){loadScript(props);}}return null;}Object.defineProperty(Script,'__nextScript',{value:true});var _default=Script;exports["default"]=_default;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends2(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 5740:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.__unsafeCreateTrustedScriptURL=__unsafeCreateTrustedScriptURL;var policy;function getPolicy(){if(typeof policy==='undefined'&&false){ var ref; }return policy;}function __unsafeCreateTrustedScriptURL(url){var ref;return((ref=getPolicy())==null?void 0:ref.createScriptURL(url))||url;}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 639:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _extends=__webpack_require__(7154);var _slicedToArray=__webpack_require__(3038);Object.defineProperty(exports, "__esModule", ({value:true}));exports.useIntersection=useIntersection;var _react=__webpack_require__(6689);var _requestIdleCallback=__webpack_require__(6286);var hasIntersectionObserver=typeof IntersectionObserver==='function';var observers=new Map();var idList=[];function createObserver(options){var id={root:options.root||null,margin:options.rootMargin||''};var existing=idList.find(function(obj){return obj.root===id.root&&obj.margin===id.margin;});var instance;if(existing){instance=observers.get(existing);if(instance){return instance;}}var elements=new Map();var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){var callback=elements.get(entry.target);var isVisible=entry.isIntersecting||entry.intersectionRatio>0;if(callback&&isVisible){callback(isVisible);}});},options);instance={id:id,observer:observer,elements:elements};idList.push(id);observers.set(id,instance);return instance;}function observe(element,callback,options){var _createObserver=createObserver(options),id=_createObserver.id,observer=_createObserver.observer,elements=_createObserver.elements;elements.set(element,callback);observer.observe(element);return function unobserve(){elements.delete(element);observer.unobserve(element);if(elements.size===0){observer.disconnect();observers.delete(id);var index=idList.findIndex(function(obj){return obj.root===id.root&&obj.margin===id.margin;});if(index>-1){idList.splice(index,1);}}};}function useIntersection(_ref){var rootRef=_ref.rootRef,rootMargin=_ref.rootMargin,disabled=_ref.disabled;var isDisabled=disabled||!hasIntersectionObserver;var _useState=(0,_react).useState(false),_useState2=_slicedToArray(_useState,2),visible=_useState2[0],setVisible=_useState2[1];var _useState3=(0,_react).useState(null),_useState4=_slicedToArray(_useState3,2),element=_useState4[0],setElement=_useState4[1];(0,_react).useEffect(function(){if(hasIntersectionObserver){if(isDisabled||visible)return;if(element&&element.tagName){var unobserve=observe(element,function(isVisible){return isVisible&&setVisible(isVisible);},{root:rootRef==null?void 0:rootRef.current,rootMargin:rootMargin});return unobserve;}}else{if(!visible){var idleCallback=(0,_requestIdleCallback).requestIdleCallback(function(){return setVisible(true);});return function(){return(0,_requestIdleCallback).cancelIdleCallback(idleCallback);};}}},[element,isDisabled,rootMargin,rootRef,visible]);var resetVisible=(0,_react).useCallback(function(){setVisible(false);},[]);return[setElement,visible,resetVisible];}if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});_extends(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 5781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _classCallCheck=__webpack_require__(4575);var _createClass=__webpack_require__(3913);var _slicedToArray=__webpack_require__(3038);var _regeneratorRuntime=__webpack_require__(7757);var _extends2=__webpack_require__(7154);Object.defineProperty(exports, "__esModule", ({value:true}));exports.matchesMiddleware=matchesMiddleware;exports.isLocalURL=isLocalURL;exports.interpolateAs=interpolateAs;exports.resolveHref=resolveHref;exports.createKey=createKey;exports["default"]=void 0;var _async_to_generator=(__webpack_require__(932)/* ["default"] */ .Z);var _extends=(__webpack_require__(6495)/* ["default"] */ .Z);var _interop_require_default=(__webpack_require__(2648)/* ["default"] */ .Z);var _interop_require_wildcard=(__webpack_require__(1598)/* ["default"] */ .Z);var _normalizeTrailingSlash=__webpack_require__(4969);var _removeTrailingSlash=__webpack_require__(3297);var _routeLoader=__webpack_require__(4989);var _script=__webpack_require__(2189);var _isError=_interop_require_wildcard(__webpack_require__(676));var _denormalizePagePath=__webpack_require__(4406);var _normalizeLocalePath=__webpack_require__(4014);var _mitt=_interop_require_default(__webpack_require__(8020));var _utils=__webpack_require__(9232);var _isDynamic=__webpack_require__(1428);var _parseRelativeUrl=__webpack_require__(1292);var _querystring=__webpack_require__(979);var _resolveRewrites=_interop_require_default(__webpack_require__(6052));var _routeMatcher=__webpack_require__(4226);var _routeRegex=__webpack_require__(5052);var _formatUrl=__webpack_require__(3938);var _detectDomainLocale=__webpack_require__(7565);var _parsePath=__webpack_require__(8854);var _addLocale=__webpack_require__(7995);var _removeLocale=__webpack_require__(9781);var _removeBasePath=__webpack_require__(5678);var _addBasePath=__webpack_require__(227);var _hasBasePath=__webpack_require__(8771);var _getNextPathnameInfo=__webpack_require__(5789);var _formatNextPathnameInfo=__webpack_require__(299);var _compareStates=__webpack_require__(6220);var _isBot=__webpack_require__(1897);function buildCancellationError(){return _extends2(new Error('Route Cancelled'),{cancelled:true});}function matchesMiddleware(options){return _matchesMiddleware.apply(this,arguments);}function _matchesMiddleware(){_matchesMiddleware=_async_to_generator(_regeneratorRuntime.mark(function _callee(options){var matchers,_parsePath2,asPathname,cleanedAs,asWithBasePathAndLocale;return _regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Promise.resolve(options.router.pageLoader.getMiddleware());case 2:matchers=_context.sent;if(matchers){_context.next=5;break;}return _context.abrupt("return",false);case 5:_parsePath2=(0,_parsePath).parsePath(options.asPath),asPathname=_parsePath2.pathname;cleanedAs=(0,_hasBasePath).hasBasePath(asPathname)?(0,_removeBasePath).removeBasePath(asPathname):asPathname;asWithBasePathAndLocale=(0,_addBasePath).addBasePath((0,_addLocale).addLocale(cleanedAs,options.locale));return _context.abrupt("return",matchers.some(function(m){return new RegExp(m.regexp).test(asWithBasePathAndLocale);}));case 9:case"end":return _context.stop();}}},_callee);}));return _matchesMiddleware.apply(this,arguments);}function stripOrigin(url){var origin=(0,_utils).getLocationOrigin();return url.startsWith(origin)?url.substring(origin.length):url;}function omit(object,keys){var omitted={};Object.keys(object).forEach(function(key){if(!keys.includes(key)){omitted[key]=object[key];}});return omitted;}function isLocalURL(url){if(!(0,_utils).isAbsoluteUrl(url))return true;try{var locationOrigin=(0,_utils).getLocationOrigin();var resolved=new URL(url,locationOrigin);return resolved.origin===locationOrigin&&(0,_hasBasePath).hasBasePath(resolved.pathname);}catch(_){return false;}}function interpolateAs(route,asPathname,query){var interpolatedRoute='';var dynamicRegex=(0,_routeRegex).getRouteRegex(route);var dynamicGroups=dynamicRegex.groups;var dynamicMatches=(asPathname!==route?(0,_routeMatcher).getRouteMatcher(dynamicRegex)(asPathname):'')||query;interpolatedRoute=route;var params=Object.keys(dynamicGroups);if(!params.every(function(param){var value=dynamicMatches[param]||'';var _dynamicGroups$param=dynamicGroups[param],repeat=_dynamicGroups$param.repeat,optional=_dynamicGroups$param.optional;var replaced="["+(repeat?'...':'')+param+"]";if(optional){replaced=(!value?'/':'')+"["+replaced+"]";}if(repeat&&!Array.isArray(value))value=[value];return(optional||param in dynamicMatches)&&(interpolatedRoute=interpolatedRoute.replace(replaced,repeat?value.map(function(segment){return encodeURIComponent(segment);}).join('/'):encodeURIComponent(value))||'/');})){interpolatedRoute='';}return{params:params,result:interpolatedRoute};}function resolveHref(router,href,resolveAs){var base;var urlAsString=typeof href==='string'?href:(0,_formatUrl).formatWithValidation(href);var urlProtoMatch=urlAsString.match(/^[a-zA-Z]{1,}:\/\//);var urlAsStringNoProto=urlProtoMatch?urlAsString.slice(urlProtoMatch[0].length):urlAsString;var urlParts=urlAsStringNoProto.split('?');if((urlParts[0]||'').match(/(\/\/|\\)/)){console.error("Invalid href passed to next/router: "+urlAsString+", repeated forward-slashes (//) or backslashes \\ are not valid in the href");var normalizedUrl=(0,_utils).normalizeRepeatedSlashes(urlAsStringNoProto);urlAsString=(urlProtoMatch?urlProtoMatch[0]:'')+normalizedUrl;}if(!isLocalURL(urlAsString)){return resolveAs?[urlAsString]:urlAsString;}try{base=new URL(urlAsString.startsWith('#')?router.asPath:router.pathname,'http://n');}catch(_){base=new URL('/','http://n');}try{var finalUrl=new URL(urlAsString,base);finalUrl.pathname=(0,_normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);var interpolatedAs='';if((0,_isDynamic).isDynamicRoute(finalUrl.pathname)&&finalUrl.searchParams&&resolveAs){var query=(0,_querystring).searchParamsToUrlQuery(finalUrl.searchParams);var _interpolateAs=interpolateAs(finalUrl.pathname,finalUrl.pathname,query),result=_interpolateAs.result,params=_interpolateAs.params;if(result){interpolatedAs=(0,_formatUrl).formatWithValidation({pathname:result,hash:finalUrl.hash,query:omit(query,params)});}}var resolvedHref=finalUrl.origin===base.origin?finalUrl.href.slice(finalUrl.origin.length):finalUrl.href;return resolveAs?[resolvedHref,interpolatedAs||resolvedHref]:resolvedHref;}catch(_1){return resolveAs?[urlAsString]:urlAsString;}}function prepareUrlAs(router,url,as){var _resolveHref=resolveHref(router,url,true),_resolveHref2=_slicedToArray(_resolveHref,2),resolvedHref=_resolveHref2[0],resolvedAs=_resolveHref2[1];var origin=(0,_utils).getLocationOrigin();var hrefHadOrigin=resolvedHref.startsWith(origin);var asHadOrigin=resolvedAs&&resolvedAs.startsWith(origin);resolvedHref=stripOrigin(resolvedHref);resolvedAs=resolvedAs?stripOrigin(resolvedAs):resolvedAs;var preparedUrl=hrefHadOrigin?resolvedHref:(0,_addBasePath).addBasePath(resolvedHref);var preparedAs=as?stripOrigin(resolveHref(router,as)):resolvedAs||resolvedHref;return{url:preparedUrl,as:asHadOrigin?preparedAs:(0,_addBasePath).addBasePath(preparedAs)};}function resolveDynamicRoute(pathname,pages){var cleanPathname=(0,_removeTrailingSlash).removeTrailingSlash((0,_denormalizePagePath).denormalizePagePath(pathname));if(cleanPathname==='/404'||cleanPathname==='/_error'){return pathname;}if(!pages.includes(cleanPathname)){pages.some(function(page){if((0,_isDynamic).isDynamicRoute(page)&&(0,_routeRegex).getRouteRegex(page).re.test(cleanPathname)){pathname=page;return true;}});}return(0,_removeTrailingSlash).removeTrailingSlash(pathname);}function getMiddlewareData(source,response,options){var nextConfig={basePath:options.router.basePath,i18n:{locales:options.router.locales},trailingSlash:Boolean(false)};var rewriteHeader=response.headers.get('x-nextjs-rewrite');var rewriteTarget=rewriteHeader||response.headers.get('x-nextjs-matched-path');var matchedPath=response.headers.get('x-matched-path');if(matchedPath&&!rewriteTarget&&!matchedPath.includes('__next_data_catchall')&&!matchedPath.includes('/_error')&&!matchedPath.includes('/404')){rewriteTarget=matchedPath;}if(rewriteTarget){if(rewriteTarget.startsWith('/')){var parsedRewriteTarget=(0,_parseRelativeUrl).parseRelativeUrl(rewriteTarget);var pathnameInfo=(0,_getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname,{nextConfig:nextConfig,parseData:true});var fsPathname=(0,_removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);return Promise.all([options.router.pageLoader.getPageList(),(0,_routeLoader).getClientBuildManifest()]).then(function(_ref){var _ref2=_slicedToArray(_ref,2),pages=_ref2[0],rewrites=_ref2[1].__rewrites;var as=(0,_addLocale).addLocale(pathnameInfo.pathname,pathnameInfo.locale);if((0,_isDynamic).isDynamicRoute(as)||!rewriteHeader&&pages.includes((0,_normalizeLocalePath).normalizeLocalePath((0,_removeBasePath).removeBasePath(as),options.router.locales).pathname)){var parsedSource=(0,_getNextPathnameInfo).getNextPathnameInfo((0,_parseRelativeUrl).parseRelativeUrl(source).pathname,{parseData:true});as=(0,_addBasePath).addBasePath(parsedSource.pathname);parsedRewriteTarget.pathname=as;}if(false){ var result; }else if(!pages.includes(fsPathname)){var resolvedPathname=resolveDynamicRoute(fsPathname,pages);if(resolvedPathname!==fsPathname){fsPathname=resolvedPathname;}}var resolvedHref=!pages.includes(fsPathname)?resolveDynamicRoute((0,_normalizeLocalePath).normalizeLocalePath((0,_removeBasePath).removeBasePath(parsedRewriteTarget.pathname),options.router.locales).pathname,pages):fsPathname;if((0,_isDynamic).isDynamicRoute(resolvedHref)){var matches=(0,_routeMatcher).getRouteMatcher((0,_routeRegex).getRouteRegex(resolvedHref))(as);_extends2(parsedRewriteTarget.query,matches||{});}return{type:'rewrite',parsedAs:parsedRewriteTarget,resolvedHref:resolvedHref};});}var src=(0,_parsePath).parsePath(source);var pathname=(0,_formatNextPathnameInfo).formatNextPathnameInfo(_extends({},(0,_getNextPathnameInfo).getNextPathnameInfo(src.pathname,{nextConfig:nextConfig,parseData:true}),{defaultLocale:options.router.defaultLocale,buildId:''}));return Promise.resolve({type:'redirect-external',destination:""+pathname+src.query+src.hash});}var redirectTarget=response.headers.get('x-nextjs-redirect');if(redirectTarget){if(redirectTarget.startsWith('/')){var _src=(0,_parsePath).parsePath(redirectTarget);var _pathname=(0,_formatNextPathnameInfo).formatNextPathnameInfo(_extends({},(0,_getNextPathnameInfo).getNextPathnameInfo(_src.pathname,{nextConfig:nextConfig,parseData:true}),{defaultLocale:options.router.defaultLocale,buildId:''}));return Promise.resolve({type:'redirect-internal',newAs:""+_pathname+_src.query+_src.hash,newUrl:""+_pathname+_src.query+_src.hash});}return Promise.resolve({type:'redirect-external',destination:redirectTarget});}return Promise.resolve({type:'next'});}function withMiddlewareEffects(options){return matchesMiddleware(options).then(function(matches){if(matches&&options.fetchData){return options.fetchData().then(function(data){return getMiddlewareData(data.dataHref,data.response,options).then(function(effect){return{dataHref:data.dataHref,cacheKey:data.cacheKey,json:data.json,response:data.response,text:data.text,effect:effect};});}).catch(function(_err){return null;});}return null;});}var manualScrollRestoration=(/* unused pure expression or super */ null && ( false&&0));var SSG_DATA_NOT_FOUND=Symbol('SSG_DATA_NOT_FOUND');function fetchRetry(url,attempts,options){return fetch(url,{credentials:'same-origin',method:options.method||'GET',headers:_extends2({},options.headers,{'x-nextjs-data':'1'})}).then(function(response){return!response.ok&&attempts>1&&response.status>=500?fetchRetry(url,attempts-1,options):response;});}var backgroundCache={};function handleSmoothScroll(fn){var htmlElement=document.documentElement;var existing=htmlElement.style.scrollBehavior;htmlElement.style.scrollBehavior='auto';fn();htmlElement.style.scrollBehavior=existing;}function tryToParseAsJSON(text){try{return JSON.parse(text);}catch(error){return null;}}function fetchNextData(_ref3){var dataHref=_ref3.dataHref,inflightCache=_ref3.inflightCache,isPrefetch=_ref3.isPrefetch,hasMiddleware=_ref3.hasMiddleware,isServerRender=_ref3.isServerRender,parseJSON=_ref3.parseJSON,persistCache=_ref3.persistCache,isBackground=_ref3.isBackground,unstable_skipClientCache=_ref3.unstable_skipClientCache;var _URL=new URL(dataHref,window.location.href),cacheKey=_URL.href;var ref1;var getData=function getData(params){return fetchRetry(dataHref,isServerRender?3:1,{headers:isPrefetch?{purpose:'prefetch'}:{},method:(ref1=params==null?void 0:params.method)!=null?ref1:'GET'}).then(function(response){if(response.ok&&(params==null?void 0:params.method)==='HEAD'){return{dataHref:dataHref,response:response,text:'',json:{},cacheKey:cacheKey};}return response.text().then(function(text){if(!response.ok){if(hasMiddleware&&[301,302,307,308].includes(response.status)){return{dataHref:dataHref,response:response,text:text,json:{},cacheKey:cacheKey};}if(!hasMiddleware&&response.status===404){var ref;if((ref=tryToParseAsJSON(text))==null?void 0:ref.notFound){return{dataHref:dataHref,json:{notFound:SSG_DATA_NOT_FOUND},response:response,text:text,cacheKey:cacheKey};}}var error=new Error("Failed to load static props");if(!isServerRender){(0,_routeLoader).markAssetError(error);}throw error;}return{dataHref:dataHref,json:parseJSON?tryToParseAsJSON(text):null,response:response,text:text,cacheKey:cacheKey};});}).then(function(data){if(!persistCache||false||data.response.headers.get('x-middleware-cache')==='no-cache'){delete inflightCache[cacheKey];}return data;}).catch(function(err){delete inflightCache[cacheKey];throw err;});};if(unstable_skipClientCache&&persistCache){return getData({}).then(function(data){inflightCache[cacheKey]=Promise.resolve(data);return data;});}if(inflightCache[cacheKey]!==undefined){return inflightCache[cacheKey];}return inflightCache[cacheKey]=getData(isBackground?{method:'HEAD'}:{});}function createKey(){return Math.random().toString(36).slice(2,10);}function handleHardNavigation(_ref4){var url=_ref4.url,router=_ref4.router;if(url===(0,_addBasePath).addBasePath((0,_addLocale).addLocale(router.asPath,router.locale))){throw new Error("Invariant: attempted to hard navigate to the same URL "+url+" "+location.href);}window.location.href=url;}var getCancelledHandler=function getCancelledHandler(_ref5){var route=_ref5.route,router=_ref5.router;var cancelled=false;var cancel=router.clc=function(){cancelled=true;};var handleCancelled=function handleCancelled(){if(cancelled){var error=new Error("Abort fetching component for route: \""+route+"\"");error.cancelled=true;throw error;}if(cancel===router.clc){router.clc=null;}};return handleCancelled;};var Router=function(){_createClass(Router,[{key:"reload",value:function reload(){window.location.reload();}},{key:"back",value:function back(){window.history.back();}},{key:"push",value:function push(url,as){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(false){}var _prepareUrlAs=prepareUrlAs(this,url,as);url=_prepareUrlAs.url;as=_prepareUrlAs.as;return this.change('pushState',url,as,options);}},{key:"replace",value:function replace(url,as){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _prepareUrlAs2=prepareUrlAs(this,url,as);url=_prepareUrlAs2.url;as=_prepareUrlAs2.as;return this.change('replaceState',url,as,options);}},{key:"change",value:function change(method,url,as,options,forcedScroll){var _this=this;return _async_to_generator(_regeneratorRuntime.mark(function _callee2(){var isQueryUpdating,shouldResolveHref,nextState,readyStateChange,isSsr,prevLocale,parsedAs,localePathResult,didNavigate,ref,detectedDomain,asNoBasePath,_options$shallow,shallow,_options$scroll,scroll,routeProps,cleanedAs,localeChange,parsed,pathname,query,pages,rewrites,_yield$Promise$all,_yield$Promise$all2,resolvedAs,isMiddlewareMatch,rewritesResult,route,routeMatch,_parsedAs,asPathname,routeRegex,shouldInterpolate,interpolatedAs,missingParams,ref2,ref3,routeInfo,cleanedParsedPathname,prefixedAs,rewriteAs,localeResult,_routeRegex2,curRouteMatch,_routeInfo,error,props,__N_SSG,__N_SSP,component,scripts,destination,parsedHref,_prepareUrlAs3,newUrl,newAs,notFoundRoute,_route,isValidShallowRoute,_scroll,shouldScroll,resetScroll,upcomingRouterState,upcomingScrollState,canSkipUpdating,hashRegex;return _regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(isLocalURL(url)){_context2.next=3;break;}handleHardNavigation({url:url,router:_this});return _context2.abrupt("return",false);case 3:isQueryUpdating=options._h;shouldResolveHref=isQueryUpdating||options._shouldResolveHref||(0,_parsePath).parsePath(url).pathname===(0,_parsePath).parsePath(as).pathname;nextState=_extends({},_this.state);readyStateChange=_this.isReady!==true;_this.isReady=true;isSsr=_this.isSsr;if(!isQueryUpdating){_this.isSsr=false;}if(!(isQueryUpdating&&_this.clc)){_context2.next=12;break;}return _context2.abrupt("return",false);case 12:prevLocale=nextState.locale;if(true){_context2.next=25;break;}nextState.locale=options.locale===false?_this.defaultLocale:options.locale||nextState.locale;if(typeof options.locale==='undefined'){options.locale=nextState.locale;}parsedAs=(0,_parseRelativeUrl).parseRelativeUrl((0,_hasBasePath).hasBasePath(as)?(0,_removeBasePath).removeBasePath(as):as);localePathResult=(0,_normalizeLocalePath).normalizeLocalePath(parsedAs.pathname,_this.locales);if(localePathResult.detectedLocale){nextState.locale=localePathResult.detectedLocale;parsedAs.pathname=(0,_addBasePath).addBasePath(parsedAs.pathname);as=(0,_formatUrl).formatWithValidation(parsedAs);url=(0,_addBasePath).addBasePath((0,_normalizeLocalePath).normalizeLocalePath((0,_hasBasePath).hasBasePath(url)?(0,_removeBasePath).removeBasePath(url):url,_this.locales).pathname);}didNavigate=false;if(false){}detectedDomain=(0,_detectDomainLocale).detectDomainLocale(_this.domainLocales,undefined,nextState.locale);if(false){}if(!didNavigate){_context2.next=25;break;}return _context2.abrupt("return",new Promise(function(){}));case 25:if(_utils.ST){performance.mark('routeChange');}_options$shallow=options.shallow,shallow=_options$shallow===void 0?false:_options$shallow,_options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll;routeProps={shallow:shallow};if(_this._inFlightRoute&&_this.clc){if(!isSsr){Router.events.emit('routeChangeError',buildCancellationError(),_this._inFlightRoute,routeProps);}_this.clc();_this.clc=null;}as=(0,_addBasePath).addBasePath((0,_addLocale).addLocale((0,_hasBasePath).hasBasePath(as)?(0,_removeBasePath).removeBasePath(as):as,options.locale,_this.defaultLocale));cleanedAs=(0,_removeLocale).removeLocale((0,_hasBasePath).hasBasePath(as)?(0,_removeBasePath).removeBasePath(as):as,nextState.locale);_this._inFlightRoute=as;localeChange=prevLocale!==nextState.locale;if(!(!isQueryUpdating&&_this.onlyAHashChange(cleanedAs)&&!localeChange)){_context2.next=49;break;}nextState.asPath=cleanedAs;Router.events.emit('hashChangeStart',as,routeProps);_this.changeState(method,url,as,_extends({},options,{scroll:false}));if(scroll){_this.scrollToHash(cleanedAs);}_context2.prev=38;_context2.next=41;return _this.set(nextState,_this.components[nextState.route],null);case 41:_context2.next=47;break;case 43:_context2.prev=43;_context2.t0=_context2["catch"](38);if((0,_isError).default(_context2.t0)&&_context2.t0.cancelled){Router.events.emit('routeChangeError',_context2.t0,cleanedAs,routeProps);}throw _context2.t0;case 47:Router.events.emit('hashChangeComplete',as,routeProps);return _context2.abrupt("return",true);case 49:parsed=(0,_parseRelativeUrl).parseRelativeUrl(url);pathname=parsed.pathname,query=parsed.query;_context2.prev=51;_context2.next=54;return Promise.all([_this.pageLoader.getPageList(),(0,_routeLoader).getClientBuildManifest(),_this.pageLoader.getMiddleware()]);case 54:_yield$Promise$all=_context2.sent;_yield$Promise$all2=_slicedToArray(_yield$Promise$all,2);pages=_yield$Promise$all2[0];rewrites=_yield$Promise$all2[1].__rewrites;_context2.next=64;break;case 60:_context2.prev=60;_context2.t1=_context2["catch"](51);handleHardNavigation({url:as,router:_this});return _context2.abrupt("return",false);case 64:if(!_this.urlIsNew(cleanedAs)&&!localeChange){method='replaceState';}resolvedAs=as;pathname=pathname?(0,_removeTrailingSlash).removeTrailingSlash((0,_removeBasePath).removeBasePath(pathname)):pathname;_context2.next=69;return matchesMiddleware({asPath:as,locale:nextState.locale,router:_this});case 69:isMiddlewareMatch=_context2.sent;if(options.shallow&&isMiddlewareMatch){pathname=_this.pathname;}if(!(shouldResolveHref&&pathname!=='/_error')){_context2.next=84;break;}options._shouldResolveHref=true;if(true){_context2.next=82;break;}rewritesResult=(0,_resolveRewrites).default((0,_addBasePath).addBasePath((0,_addLocale).addLocale(cleanedAs,nextState.locale),true),pages,rewrites,query,function(p){return resolveDynamicRoute(p,pages);},_this.locales);if(!rewritesResult.externalDest){_context2.next=78;break;}handleHardNavigation({url:as,router:_this});return _context2.abrupt("return",true);case 78:if(!isMiddlewareMatch){resolvedAs=rewritesResult.asPath;}if(rewritesResult.matchedPage&&rewritesResult.resolvedHref){pathname=rewritesResult.resolvedHref;parsed.pathname=(0,_addBasePath).addBasePath(pathname);if(!isMiddlewareMatch){url=(0,_formatUrl).formatWithValidation(parsed);}}_context2.next=84;break;case 82:parsed.pathname=resolveDynamicRoute(pathname,pages);if(parsed.pathname!==pathname){pathname=parsed.pathname;parsed.pathname=(0,_addBasePath).addBasePath(pathname);if(!isMiddlewareMatch){url=(0,_formatUrl).formatWithValidation(parsed);}}case 84:if(isLocalURL(as)){_context2.next=89;break;}if(true){_context2.next=87;break;}throw new Error("Invalid href: \""+url+"\" and as: \""+as+"\", received relative href and external as"+"\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");case 87:handleHardNavigation({url:as,router:_this});return _context2.abrupt("return",false);case 89:resolvedAs=(0,_removeLocale).removeLocale((0,_removeBasePath).removeBasePath(resolvedAs),nextState.locale);route=(0,_removeTrailingSlash).removeTrailingSlash(pathname);routeMatch=false;if(!(0,_isDynamic).isDynamicRoute(route)){_context2.next=107;break;}_parsedAs=(0,_parseRelativeUrl).parseRelativeUrl(resolvedAs);asPathname=_parsedAs.pathname;routeRegex=(0,_routeRegex).getRouteRegex(route);routeMatch=(0,_routeMatcher).getRouteMatcher(routeRegex)(asPathname);shouldInterpolate=route===asPathname;interpolatedAs=shouldInterpolate?interpolateAs(route,asPathname,query):{};if(!(!routeMatch||shouldInterpolate&&!interpolatedAs.result)){_context2.next=106;break;}missingParams=Object.keys(routeRegex.groups).filter(function(param){return!query[param];});if(!(missingParams.length>0&&!isMiddlewareMatch)){_context2.next=104;break;}if(false){}throw new Error((shouldInterpolate?"The provided `href` ("+url+") value is missing query values ("+missingParams.join(', ')+") to be interpolated properly. ":"The provided `as` value ("+asPathname+") is incompatible with the `href` value ("+route+"). ")+("Read more: https://nextjs.org/docs/messages/"+(shouldInterpolate?'href-interpolation-failed':'incompatible-href-as')));case 104:_context2.next=107;break;case 106:if(shouldInterpolate){as=(0,_formatUrl).formatWithValidation(_extends2({},_parsedAs,{pathname:interpolatedAs.result,query:omit(query,interpolatedAs.params)}));}else{_extends2(query,routeMatch);}case 107:if(!isQueryUpdating){Router.events.emit('routeChangeStart',as,routeProps);}_context2.prev=108;_context2.next=111;return _this.getRouteInfo({route:route,pathname:pathname,query:query,as:as,resolvedAs:resolvedAs,routeProps:routeProps,locale:nextState.locale,isPreview:nextState.isPreview,hasMiddleware:isMiddlewareMatch});case 111:routeInfo=_context2.sent;if('route'in routeInfo&&isMiddlewareMatch){pathname=routeInfo.route||route;route=pathname;if(!routeProps.shallow){query=_extends2({},routeInfo.query||{},query);}cleanedParsedPathname=(0,_hasBasePath).hasBasePath(parsed.pathname)?(0,_removeBasePath).removeBasePath(parsed.pathname):parsed.pathname;if(routeMatch&&pathname!==cleanedParsedPathname){Object.keys(routeMatch).forEach(function(key){if(routeMatch&&query[key]===routeMatch[key]){delete query[key];}});}if((0,_isDynamic).isDynamicRoute(pathname)){prefixedAs=!routeProps.shallow&&routeInfo.resolvedAs?routeInfo.resolvedAs:(0,_addBasePath).addBasePath((0,_addLocale).addLocale(new URL(as,location.href).pathname,nextState.locale),true);rewriteAs=prefixedAs;if((0,_hasBasePath).hasBasePath(rewriteAs)){rewriteAs=(0,_removeBasePath).removeBasePath(rewriteAs);}if(false){}_routeRegex2=(0,_routeRegex).getRouteRegex(pathname);curRouteMatch=(0,_routeMatcher).getRouteMatcher(_routeRegex2)(rewriteAs);if(curRouteMatch){_extends2(query,curRouteMatch);}}}if(!('type'in routeInfo)){_context2.next=120;break;}if(!(routeInfo.type==='redirect-internal')){_context2.next=118;break;}return _context2.abrupt("return",_this.change(method,routeInfo.newUrl,routeInfo.newAs,options));case 118:handleHardNavigation({url:routeInfo.destination,router:_this});return _context2.abrupt("return",new Promise(function(){}));case 120:_routeInfo=routeInfo,error=_routeInfo.error,props=_routeInfo.props,__N_SSG=_routeInfo.__N_SSG,__N_SSP=_routeInfo.__N_SSP;component=routeInfo.Component;if(component&&component.unstable_scriptLoader){scripts=[].concat(component.unstable_scriptLoader());scripts.forEach(function(script){(0,_script).handleClientScriptLoad(script.props);});}if(!((__N_SSG||__N_SSP)&&props)){_context2.next=150;break;}if(!(props.pageProps&&props.pageProps.__N_REDIRECT)){_context2.next=134;break;}options.locale=false;destination=props.pageProps.__N_REDIRECT;if(!(destination.startsWith('/')&&props.pageProps.__N_REDIRECT_BASE_PATH!==false)){_context2.next=132;break;}parsedHref=(0,_parseRelativeUrl).parseRelativeUrl(destination);parsedHref.pathname=resolveDynamicRoute(parsedHref.pathname,pages);_prepareUrlAs3=prepareUrlAs(_this,destination,destination),newUrl=_prepareUrlAs3.url,newAs=_prepareUrlAs3.as;return _context2.abrupt("return",_this.change(method,newUrl,newAs,options));case 132:handleHardNavigation({url:destination,router:_this});return _context2.abrupt("return",new Promise(function(){}));case 134:nextState.isPreview=!!props.__N_PREVIEW;if(!(props.notFound===SSG_DATA_NOT_FOUND)){_context2.next=150;break;}_context2.prev=136;_context2.next=139;return _this.fetchComponent('/404');case 139:notFoundRoute='/404';_context2.next=145;break;case 142:_context2.prev=142;_context2.t2=_context2["catch"](136);notFoundRoute='/_error';case 145:_context2.next=147;return _this.getRouteInfo({route:notFoundRoute,pathname:notFoundRoute,query:query,as:as,resolvedAs:resolvedAs,routeProps:{shallow:false},locale:nextState.locale,isPreview:nextState.isPreview});case 147:routeInfo=_context2.sent;if(!('type'in routeInfo)){_context2.next=150;break;}throw new Error("Unexpected middleware effect on /404");case 150:Router.events.emit('beforeHistoryChange',as,routeProps);_this.changeState(method,url,as,options);if(isQueryUpdating&&pathname==='/_error'&&((ref2=self.__NEXT_DATA__.props)==null?void 0:(ref3=ref2.pageProps)==null?void 0:ref3.statusCode)===500&&(props==null?void 0:props.pageProps)){props.pageProps.statusCode=500;}isValidShallowRoute=options.shallow&&nextState.route===((_route=routeInfo.route)!=null?_route:route);shouldScroll=(_scroll=options.scroll)!=null?_scroll:!options._h&&!isValidShallowRoute;resetScroll=shouldScroll?{x:0,y:0}:null;upcomingRouterState=_extends({},nextState,{route:route,pathname:pathname,query:query,asPath:cleanedAs,isFallback:false});upcomingScrollState=forcedScroll!=null?forcedScroll:resetScroll;canSkipUpdating=options._h&&!upcomingScrollState&&!readyStateChange&&!localeChange&&(0,_compareStates).compareRouterStates(upcomingRouterState,_this.state);if(canSkipUpdating){_context2.next=169;break;}_context2.next=162;return _this.set(upcomingRouterState,routeInfo,upcomingScrollState).catch(function(e){if(e.cancelled)error=error||e;else throw e;});case 162:if(!error){_context2.next=165;break;}if(!isQueryUpdating){Router.events.emit('routeChangeError',error,cleanedAs,routeProps);}throw error;case 165:if(false){}if(!isQueryUpdating){Router.events.emit('routeChangeComplete',as,routeProps);}hashRegex=/#.+$/;if(shouldScroll&&hashRegex.test(as)){_this.scrollToHash(as);}case 169:return _context2.abrupt("return",true);case 172:_context2.prev=172;_context2.t3=_context2["catch"](108);if(!((0,_isError).default(_context2.t3)&&_context2.t3.cancelled)){_context2.next=176;break;}return _context2.abrupt("return",false);case 176:throw _context2.t3;case 177:case"end":return _context2.stop();}}},_callee2,null,[[38,43],[51,60],[108,172],[136,142]]);}))();}},{key:"changeState",value:function changeState(method,url,as){var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};if(false){}if(method!=='pushState'||(0,_utils).getURL()!==as){this._shallow=options.shallow;window.history[method]({url:url,as:as,options:options,__N:true,key:this._key=method!=='pushState'?this._key:createKey()},'',as);}}},{key:"handleRouteInfoError",value:function handleRouteInfoError(err,pathname,query,as,routeProps,loadErrorFail){var _this=this;return _async_to_generator(_regeneratorRuntime.mark(function _callee3(){var props,_yield$_this$fetchCom,Component,styleSheets,routeInfo;return _regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.error(err);if(!err.cancelled){_context3.next=3;break;}throw err;case 3:if(!((0,_routeLoader).isAssetError(err)||loadErrorFail)){_context3.next=7;break;}Router.events.emit('routeChangeError',err,as,routeProps);handleHardNavigation({url:as,router:_this});throw buildCancellationError();case 7:_context3.prev=7;_context3.next=10;return _this.fetchComponent('/_error');case 10:_yield$_this$fetchCom=_context3.sent;Component=_yield$_this$fetchCom.page;styleSheets=_yield$_this$fetchCom.styleSheets;routeInfo={props:props,Component:Component,styleSheets:styleSheets,err:err,error:err};if(routeInfo.props){_context3.next=25;break;}_context3.prev=15;_context3.next=18;return _this.getInitialProps(Component,{err:err,pathname:pathname,query:query});case 18:routeInfo.props=_context3.sent;_context3.next=25;break;case 21:_context3.prev=21;_context3.t0=_context3["catch"](15);console.error('Error in error page `getInitialProps`: ',_context3.t0);routeInfo.props={};case 25:return _context3.abrupt("return",routeInfo);case 28:_context3.prev=28;_context3.t1=_context3["catch"](7);return _context3.abrupt("return",_this.handleRouteInfoError((0,_isError).default(_context3.t1)?_context3.t1:new Error(_context3.t1+''),pathname,query,as,routeProps,true));case 31:case"end":return _context3.stop();}}},_callee3,null,[[7,28],[15,21]]);}))();}},{key:"getRouteInfo",value:function getRouteInfo(_ref6){var requestedRoute=_ref6.route,pathname=_ref6.pathname,query=_ref6.query,as=_ref6.as,resolvedAs=_ref6.resolvedAs,routeProps=_ref6.routeProps,locale=_ref6.locale,hasMiddleware=_ref6.hasMiddleware,isPreview=_ref6.isPreview,unstable_skipClientCache=_ref6.unstable_skipClientCache;var _this=this;return _async_to_generator(_regeneratorRuntime.mark(function _callee5(){var route,ref,ref4,ref5,handleCancelled,existingInfo,cachedRouteInfo,fetchNextDataParams,data,routeInfo,_require,isValidElementType,shouldFetchData,_yield$_this$_getData,props,cacheKey;return _regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:route=requestedRoute;_context5.prev=1;handleCancelled=getCancelledHandler({route:route,router:_this});existingInfo=_this.components[route];if(!(routeProps.shallow&&existingInfo&&_this.route===route)){_context5.next=6;break;}return _context5.abrupt("return",existingInfo);case 6:if(hasMiddleware){existingInfo=undefined;}cachedRouteInfo=existingInfo&&!('initial'in existingInfo)&&true?existingInfo:undefined;fetchNextDataParams={dataHref:_this.pageLoader.getDataHref({href:(0,_formatUrl).formatWithValidation({pathname:pathname,query:query}),skipInterpolation:true,asPath:resolvedAs,locale:locale}),hasMiddleware:true,isServerRender:_this.isSsr,parseJSON:true,inflightCache:_this.sdc,persistCache:!isPreview,isPrefetch:false,unstable_skipClientCache:unstable_skipClientCache};_context5.next=11;return withMiddlewareEffects({fetchData:function fetchData(){return fetchNextData(fetchNextDataParams);},asPath:resolvedAs,locale:locale,router:_this});case 11:data=_context5.sent;handleCancelled();if(!((data==null?void 0:(ref=data.effect)==null?void 0:ref.type)==='redirect-internal'||(data==null?void 0:(ref4=data.effect)==null?void 0:ref4.type)==='redirect-external')){_context5.next=15;break;}return _context5.abrupt("return",data.effect);case 15:if(!((data==null?void 0:(ref5=data.effect)==null?void 0:ref5.type)==='rewrite')){_context5.next=23;break;}route=(0,_removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);pathname=data.effect.resolvedHref;query=_extends({},query,data.effect.parsedAs.query);resolvedAs=(0,_removeBasePath).removeBasePath((0,_normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname,_this.locales).pathname);existingInfo=_this.components[route];if(!(routeProps.shallow&&existingInfo&&_this.route===route&&!hasMiddleware)){_context5.next=23;break;}return _context5.abrupt("return",_extends({},existingInfo,{route:route}));case 23:if(!(route==='/api'||route.startsWith('/api/'))){_context5.next=26;break;}handleHardNavigation({url:as,router:_this});return _context5.abrupt("return",new Promise(function(){}));case 26:_context5.t0=cachedRouteInfo;if(_context5.t0){_context5.next=31;break;}_context5.next=30;return _this.fetchComponent(route).then(function(res){return{Component:res.page,styleSheets:res.styleSheets,__N_SSG:res.mod.__N_SSG,__N_SSP:res.mod.__N_SSP};});case 30:_context5.t0=_context5.sent;case 31:routeInfo=_context5.t0;if(true){_context5.next=36;break;}_require=__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/dist/compiled/react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),isValidElementType=_require.isValidElementType;if(isValidElementType(routeInfo.Component)){_context5.next=36;break;}throw new Error("The default export is not a React Component in page: \""+pathname+"\"");case 36:shouldFetchData=routeInfo.__N_SSG||routeInfo.__N_SSP;_context5.next=39;return _this._getData(_async_to_generator(_regeneratorRuntime.mark(function _callee4(){var _ref7,json,_cacheKey;return _regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!shouldFetchData){_context4.next=12;break;}if(!(data==null?void 0:data.json)){_context4.next=5;break;}_context4.t0=data;_context4.next=8;break;case 5:_context4.next=7;return fetchNextData({dataHref:_this.pageLoader.getDataHref({href:(0,_formatUrl).formatWithValidation({pathname:pathname,query:query}),asPath:resolvedAs,locale:locale}),isServerRender:_this.isSsr,parseJSON:true,inflightCache:_this.sdc,persistCache:!isPreview,isPrefetch:false,unstable_skipClientCache:unstable_skipClientCache});case 7:_context4.t0=_context4.sent;case 8:_ref7=_context4.t0;json=_ref7.json;_cacheKey=_ref7.cacheKey;return _context4.abrupt("return",{cacheKey:_cacheKey,props:json||{}});case 12:_context4.t1={};_context4.next=15;return _this.getInitialProps(routeInfo.Component,{pathname:pathname,query:query,asPath:as,locale:locale,locales:_this.locales,defaultLocale:_this.defaultLocale});case 15:_context4.t2=_context4.sent;return _context4.abrupt("return",{headers:_context4.t1,cacheKey:'',props:_context4.t2});case 17:case"end":return _context4.stop();}}},_callee4);})));case 39:_yield$_this$_getData=_context5.sent;props=_yield$_this$_getData.props;cacheKey=_yield$_this$_getData.cacheKey;if(routeInfo.__N_SSP&&fetchNextDataParams.dataHref){delete _this.sdc[cacheKey];}if(!_this.isPreview&&routeInfo.__N_SSG&&true){fetchNextData(_extends2({},fetchNextDataParams,{isBackground:true,persistCache:false,inflightCache:backgroundCache})).catch(function(){});}props.pageProps=_extends2({},props.pageProps);routeInfo.props=props;routeInfo.route=route;routeInfo.query=query;routeInfo.resolvedAs=resolvedAs;_this.components[route]=routeInfo;return _context5.abrupt("return",routeInfo);case 53:_context5.prev=53;_context5.t1=_context5["catch"](1);return _context5.abrupt("return",_this.handleRouteInfoError((0,_isError).getProperError(_context5.t1),pathname,query,as,routeProps));case 56:case"end":return _context5.stop();}}},_callee5,null,[[1,53]]);}))();}},{key:"set",value:function set(state,data,resetScroll){this.state=state;return this.sub(data,this.components['/_app'].Component,resetScroll);}},{key:"beforePopState",value:function beforePopState(cb){this._bps=cb;}},{key:"onlyAHashChange",value:function onlyAHashChange(as){if(!this.asPath)return false;var _this$asPath$split=this.asPath.split('#'),_this$asPath$split2=_slicedToArray(_this$asPath$split,2),oldUrlNoHash=_this$asPath$split2[0],oldHash=_this$asPath$split2[1];var _as$split=as.split('#'),_as$split2=_slicedToArray(_as$split,2),newUrlNoHash=_as$split2[0],newHash=_as$split2[1];if(newHash&&oldUrlNoHash===newUrlNoHash&&oldHash===newHash){return true;}if(oldUrlNoHash!==newUrlNoHash){return false;}return oldHash!==newHash;}},{key:"scrollToHash",value:function scrollToHash(as){var _as$split3=as.split('#'),_as$split4=_slicedToArray(_as$split3,2),_as$split4$=_as$split4[1],hash=_as$split4$===void 0?'':_as$split4$;if(hash===''||hash==='top'){handleSmoothScroll(function(){return window.scrollTo(0,0);});return;}var rawHash=decodeURIComponent(hash);var idEl=document.getElementById(rawHash);if(idEl){handleSmoothScroll(function(){return idEl.scrollIntoView();});return;}var nameEl=document.getElementsByName(rawHash)[0];if(nameEl){handleSmoothScroll(function(){return nameEl.scrollIntoView();});}}},{key:"urlIsNew",value:function urlIsNew(asPath){return this.asPath!==asPath;}},{key:"prefetch",value:function prefetch(url){var asPath=arguments.length>1&&arguments[1]!==undefined?arguments[1]:url;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _this=this;return _async_to_generator(_regeneratorRuntime.mark(function _callee6(){var parsed,pathname,query,parsedAs,localePathResult,pages,resolvedAs,locale,rewrites,_yield$getClientBuild,rewritesResult,route;return _regeneratorRuntime.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(true){_context6.next=2;break;}return _context6.abrupt("return");case 2:parsed=(0,_parseRelativeUrl).parseRelativeUrl(url);pathname=parsed.pathname,query=parsed.query;if(false){}_context6.next=7;return _this.pageLoader.getPageList();case 7:pages=_context6.sent;resolvedAs=asPath;locale=typeof options.locale!=='undefined'?options.locale||undefined:_this.locale;if(true){_context6.next=20;break;}_context6.next=13;return(0,_routeLoader).getClientBuildManifest();case 13:_yield$getClientBuild=_context6.sent;rewrites=_yield$getClientBuild.__rewrites;rewritesResult=(0,_resolveRewrites).default((0,_addBasePath).addBasePath((0,_addLocale).addLocale(asPath,_this.locale),true),pages,rewrites,parsed.query,function(p){return resolveDynamicRoute(p,pages);},_this.locales);if(!rewritesResult.externalDest){_context6.next=18;break;}return _context6.abrupt("return");case 18:resolvedAs=(0,_removeLocale).removeLocale((0,_removeBasePath).removeBasePath(rewritesResult.asPath),_this.locale);if(rewritesResult.matchedPage&&rewritesResult.resolvedHref){pathname=rewritesResult.resolvedHref;parsed.pathname=pathname;url=(0,_formatUrl).formatWithValidation(parsed);}case 20:parsed.pathname=resolveDynamicRoute(parsed.pathname,pages);if((0,_isDynamic).isDynamicRoute(parsed.pathname)){pathname=parsed.pathname;parsed.pathname=pathname;_extends2(query,(0,_routeMatcher).getRouteMatcher((0,_routeRegex).getRouteRegex(parsed.pathname))((0,_parsePath).parsePath(asPath).pathname)||{});url=(0,_formatUrl).formatWithValidation(parsed);}if(true){_context6.next=24;break;}return _context6.abrupt("return");case 24:route=(0,_removeTrailingSlash).removeTrailingSlash(pathname);_context6.next=27;return Promise.all([_this.pageLoader._isSsg(route).then(function(isSsg){return isSsg?fetchNextData({dataHref:_this.pageLoader.getDataHref({href:url,asPath:resolvedAs,locale:locale}),isServerRender:false,parseJSON:true,inflightCache:_this.sdc,persistCache:!_this.isPreview,isPrefetch:true,unstable_skipClientCache:options.unstable_skipClientCache||options.priority&&!!true}).then(function(){return false;}):false;}),_this.pageLoader[options.priority?'loadPage':'prefetch'](route)]);case 27:case"end":return _context6.stop();}}},_callee6);}))();}},{key:"fetchComponent",value:function fetchComponent(route){var _this=this;return _async_to_generator(_regeneratorRuntime.mark(function _callee7(){var handleCancelled,componentResult;return _regeneratorRuntime.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:handleCancelled=getCancelledHandler({route:route,router:_this});_context7.prev=1;_context7.next=4;return _this.pageLoader.loadPage(route);case 4:componentResult=_context7.sent;handleCancelled();return _context7.abrupt("return",componentResult);case 9:_context7.prev=9;_context7.t0=_context7["catch"](1);handleCancelled();throw _context7.t0;case 13:case"end":return _context7.stop();}}},_callee7,null,[[1,9]]);}))();}},{key:"_getData",value:function _getData(fn){var _this2=this;var cancelled=false;var cancel=function cancel(){cancelled=true;};this.clc=cancel;return fn().then(function(data){if(cancel===_this2.clc){_this2.clc=null;}if(cancelled){var err=new Error('Loading initial props cancelled');err.cancelled=true;throw err;}return data;});}},{key:"_getFlightData",value:function _getFlightData(dataHref){return fetchNextData({dataHref:dataHref,isServerRender:true,parseJSON:false,inflightCache:this.sdc,persistCache:false,isPrefetch:false}).then(function(_ref8){var text=_ref8.text;return{data:text};});}},{key:"getInitialProps",value:function getInitialProps(Component,ctx){var App=this.components['/_app'].Component;var AppTree=this._wrapApp(App);ctx.AppTree=AppTree;return(0,_utils).loadGetInitialProps(App,{AppTree:AppTree,Component:Component,router:this,ctx:ctx});}},{key:"route",get:function get(){return this.state.route;}},{key:"pathname",get:function get(){return this.state.pathname;}},{key:"query",get:function get(){return this.state.query;}},{key:"asPath",get:function get(){return this.state.asPath;}},{key:"locale",get:function get(){return this.state.locale;}},{key:"isFallback",get:function get(){return this.state.isFallback;}},{key:"isPreview",get:function get(){return this.state.isPreview;}}]);function Router(pathname1,query1,as1,_ref9){var _this3=this;var initialProps=_ref9.initialProps,pageLoader=_ref9.pageLoader,App=_ref9.App,wrapApp=_ref9.wrapApp,Component=_ref9.Component,err=_ref9.err,subscription=_ref9.subscription,isFallback=_ref9.isFallback,locale=_ref9.locale,locales=_ref9.locales,defaultLocale=_ref9.defaultLocale,domainLocales=_ref9.domainLocales,isPreview=_ref9.isPreview;_classCallCheck(this,Router);this.sdc={};this.isFirstPopStateEvent=true;this._key=createKey();this.onPopState=function(e){var isFirstPopStateEvent=_this3.isFirstPopStateEvent;_this3.isFirstPopStateEvent=false;var state=e.state;if(!state){var _pathname2=_this3.pathname,query=_this3.query;_this3.changeState('replaceState',(0,_formatUrl).formatWithValidation({pathname:(0,_addBasePath).addBasePath(_pathname2),query:query}),(0,_utils).getURL());return;}if(state.__NA){window.location.reload();return;}if(!state.__N){return;}if(isFirstPopStateEvent&&_this3.locale===state.options.locale&&state.as===_this3.asPath){return;}var forcedScroll;var url=state.url,as=state.as,options=state.options,key=state.key;if(false){ var v; }_this3._key=key;var _parseRelativeUrl2=(0,_parseRelativeUrl).parseRelativeUrl(url),pathname=_parseRelativeUrl2.pathname;if(_this3.isSsr&&as===(0,_addBasePath).addBasePath(_this3.asPath)&&pathname===(0,_addBasePath).addBasePath(_this3.pathname)){return;}if(_this3._bps&&!_this3._bps(state)){return;}_this3.change('replaceState',url,as,_extends2({},options,{shallow:options.shallow&&_this3._shallow,locale:options.locale||_this3.defaultLocale,_h:0}),forcedScroll);};var route=(0,_removeTrailingSlash).removeTrailingSlash(pathname1);this.components={};if(pathname1!=='/_error'){this.components[route]={Component:Component,initial:true,props:initialProps,err:err,__N_SSG:initialProps&&initialProps.__N_SSG,__N_SSP:initialProps&&initialProps.__N_SSP};}this.components['/_app']={Component:App,styleSheets:[]};this.events=Router.events;this.pageLoader=pageLoader;var autoExportDynamic=(0,_isDynamic).isDynamicRoute(pathname1)&&self.__NEXT_DATA__.autoExport;this.basePath= false||'';this.sub=subscription;this.clc=null;this._wrapApp=wrapApp;this.isSsr=true;this.isLocaleDomain=false;this.isReady=!!(self.__NEXT_DATA__.gssp||self.__NEXT_DATA__.gip||self.__NEXT_DATA__.appGip&&!self.__NEXT_DATA__.gsp||!autoExportDynamic&&!self.location.search&&!false);if(false){}this.state={route:route,pathname:pathname1,query:query1,asPath:autoExportDynamic?pathname1:as1,isPreview:!!isPreview,locale: false?0:undefined,isFallback:isFallback};this._initialMatchesMiddlewarePromise=Promise.resolve(false);if(false){ var asPath, options; }}return Router;}();Router.events=(0,_mitt).default();exports["default"]=Router;

/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(8524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7942)


/***/ })

};
;