System.register([],(function(t){"use strict";return{execute:function(){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}var check=function(t){return t&&t.Math==Math&&t},e=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof r&&r)||function(){return this}()||Function("return this")(),fails=function(t){try{return!!t()}catch(t){return!0}},n=!fails((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,u={f:i&&!o.call({1:2},1)?function propertyIsEnumerable(t){var r=i(this,t);return!!r&&r.enumerable}:o},createPropertyDescriptor=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},c={}.toString,classofRaw=function(t){return c.call(t).slice(8,-1)},a="".split,f=fails((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==classofRaw(t)?a.call(t,""):Object(t)}:Object,requireObjectCoercible=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},toIndexedObject=function(t){return f(requireObjectCoercible(t))},isObject=function(t){return"object"==typeof t?null!==t:"function"==typeof t},toPrimitive=function(t,r){if(!isObject(t))return t;var e,n;if(r&&"function"==typeof(e=t.toString)&&!isObject(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!isObject(n=e.call(t)))return n;if(!r&&"function"==typeof(e=t.toString)&&!isObject(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")},l={}.hasOwnProperty,has=function(t,r){return l.call(t,r)},s=e.document,p=isObject(s)&&isObject(s.createElement),documentCreateElement=function(t){return p?s.createElement(t):{}},y=!n&&!fails((function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a})),d=Object.getOwnPropertyDescriptor,g={f:n?d:function getOwnPropertyDescriptor(t,r){if(t=toIndexedObject(t),r=toPrimitive(r,!0),y)try{return d(t,r)}catch(t){}if(has(t,r))return createPropertyDescriptor(!u.f.call(t,r),t[r])}},anObject=function(t){if(!isObject(t))throw TypeError(String(t)+" is not an object");return t},m=Object.defineProperty,h={f:n?m:function defineProperty(t,r,e){if(anObject(t),r=toPrimitive(r,!0),anObject(e),y)try{return m(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},v=n?function(t,r,e){return h.f(t,r,createPropertyDescriptor(1,e))}:function(t,r,e){return t[r]=e,t},setGlobal=function(t,r){try{v(e,t,r)}catch(n){e[t]=r}return r},b="__core-js_shared__",S=e[b]||setGlobal(b,{}),w=Function.toString;"function"!=typeof S.inspectSource&&(S.inspectSource=function(t){return w.call(t)});var O,j,A,E=S.inspectSource,T=e.WeakMap,_="function"==typeof T&&/native code/.test(E(T)),P=createCommonjsModule((function(t){(t.exports=function(t,r){return S[t]||(S[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),C=0,x=Math.random(),uid=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++C+x).toString(36)},M=P("keys"),sharedKey=function(t){return M[t]||(M[t]=uid(t))},I={},k=e.WeakMap;if(_){var L=S.state||(S.state=new k),F=L.get,N=L.has,R=L.set;O=function(t,r){return r.facade=t,R.call(L,t,r),r},j=function(t){return F.call(L,t)||{}},A=function(t){return N.call(L,t)}}else{var D=sharedKey("state");I[D]=!0,O=function(t,r){return r.facade=t,v(t,D,r),r},j=function(t){return has(t,D)?t[D]:{}},A=function(t){return has(t,D)}}var W,q,z={set:O,get:j,has:A,enforce:function(t){return A(t)?j(t):O(t,{})},getterFor:function(t){return function(r){var e;if(!isObject(r)||(e=j(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},G=createCommonjsModule((function(t){var r=z.get,n=z.enforce,o=String(String).split("String");(t.exports=function(t,r,i,u){var c,a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof r||has(i,"name")||v(i,"name",r),(c=n(i)).source||(c.source=o.join("string"==typeof r?r:""))),t!==e?(a?!l&&t[r]&&(f=!0):delete t[r],f?t[r]=i:v(t,r,i)):f?t[r]=i:setGlobal(r,i)})(Function.prototype,"toString",(function toString(){return"function"==typeof this&&r(this).source||E(this)}))})),J=e,aFunction=function(t){return"function"==typeof t?t:void 0},getBuiltIn=function(t,r){return arguments.length<2?aFunction(J[t])||aFunction(e[t]):J[t]&&J[t][r]||e[t]&&e[t][r]},K=Math.ceil,B=Math.floor,toInteger=function(t){return isNaN(t=+t)?0:(t>0?B:K)(t)},H=Math.min,toLength=function(t){return t>0?H(toInteger(t),9007199254740991):0},U=Math.max,V=Math.min,createMethod=function(t){return function(r,e,n){var o,i=toIndexedObject(r),u=toLength(i.length),c=function(t,r){var e=toInteger(t);return e<0?U(e+r,0):V(e,r)}(n,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},X={includes:createMethod(!0),indexOf:createMethod(!1)},Y=X.indexOf,objectKeysInternal=function(t,r){var e,n=toIndexedObject(t),o=0,i=[];for(e in n)!has(I,e)&&has(n,e)&&i.push(e);for(;r.length>o;)has(n,e=r[o++])&&(~Y(i,e)||i.push(e));return i},$=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Q=$.concat("length","prototype"),Z={f:Object.getOwnPropertyNames||function getOwnPropertyNames(t){return objectKeysInternal(t,Q)}},tt={f:Object.getOwnPropertySymbols},rt=getBuiltIn("Reflect","ownKeys")||function ownKeys(t){var r=Z.f(anObject(t)),e=tt.f;return e?r.concat(e(t)):r},copyConstructorProperties=function(t,r){for(var e=rt(r),n=h.f,o=g.f,i=0;i<e.length;i++){var u=e[i];has(t,u)||n(t,u,o(r,u))}},et=/#|\.prototype\./,isForced=function(t,r){var e=ot[nt(t)];return e==ut||e!=it&&("function"==typeof r?fails(r):!!r)},nt=isForced.normalize=function(t){return String(t).replace(et,".").toLowerCase()},ot=isForced.data={},it=isForced.NATIVE="N",ut=isForced.POLYFILL="P",ct=isForced,at=g.f,_export=function(t,r){var n,o,i,u,c,a=t.target,f=t.global,l=t.stat;if(n=f?e:l?e[a]||setGlobal(a,{}):(e[a]||{}).prototype)for(o in r){if(u=r[o],i=t.noTargetGet?(c=at(n,o))&&c.value:n[o],!ct(f?o:a+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;copyConstructorProperties(u,i)}(t.sham||i&&i.sham)&&v(u,"sham",!0),G(n,o,u,t)}},ft=Array.isArray||function isArray(t){return"Array"==classofRaw(t)},toObject=function(t){return Object(requireObjectCoercible(t))},createProperty=function(t,r,e){var n=toPrimitive(r);n in t?h.f(t,n,createPropertyDescriptor(0,e)):t[n]=e},lt=!!Object.getOwnPropertySymbols&&!fails((function(){return!String(Symbol())})),st=lt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,pt=P("wks"),yt=e.Symbol,dt=st?yt:yt&&yt.withoutSetter||uid,wellKnownSymbol=function(t){return has(pt,t)||(lt&&has(yt,t)?pt[t]=yt[t]:pt[t]=dt("Symbol."+t)),pt[t]},gt=wellKnownSymbol("species"),arraySpeciesCreate=function(t,r){var e;return ft(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!ft(e.prototype)?isObject(e)&&null===(e=e[gt])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)},mt=getBuiltIn("navigator","userAgent")||"",ht=e.process,vt=ht&&ht.versions,bt=vt&&vt.v8;bt?q=(W=bt.split("."))[0]+W[1]:mt&&(!(W=mt.match(/Edge\/(\d+)/))||W[1]>=74)&&(W=mt.match(/Chrome\/(\d+)/))&&(q=W[1]);var St,wt=q&&+q,Ot=wellKnownSymbol("species"),jt=wellKnownSymbol("isConcatSpreadable"),At=9007199254740991,Et="Maximum allowed index exceeded",Tt=wt>=51||!fails((function(){var t=[];return t[jt]=!1,t.concat()[0]!==t})),_t=(St="concat",wt>=51||!fails((function(){var t=[];return(t.constructor={})[Ot]=function(){return{foo:1}},1!==t[St](Boolean).foo}))),isConcatSpreadable=function(t){if(!isObject(t))return!1;var r=t[jt];return void 0!==r?!!r:ft(t)};_export({target:"Array",proto:!0,forced:!Tt||!_t},{concat:function concat(t){var r,e,n,o,i,u=toObject(this),c=arraySpeciesCreate(u,0),a=0;for(r=-1,n=arguments.length;r<n;r++)if(isConcatSpreadable(i=-1===r?u:arguments[r])){if(a+(o=toLength(i.length))>At)throw TypeError(Et);for(e=0;e<o;e++,a++)e in i&&createProperty(c,a,i[e])}else{if(a>=At)throw TypeError(Et);createProperty(c,a++,i)}return c.length=a,c}});var Pt,Ct=Object.keys||function keys(t){return objectKeysInternal(t,$)},xt=n?Object.defineProperties:function defineProperties(t,r){anObject(t);for(var e,n=Ct(r),o=n.length,i=0;o>i;)h.f(t,e=n[i++],r[e]);return t},Mt=getBuiltIn("document","documentElement"),It=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return"<script>"+t+"</"+"script>"},NullProtoObject=function(){try{Pt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;NullProtoObject=Pt?function(t){t.write(scriptTag("")),t.close();var r=t.parentWindow.Object;return t=null,r}(Pt):((r=documentCreateElement("iframe")).style.display="none",Mt.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(scriptTag("document.F=Object")),t.close(),t.F);for(var e=$.length;e--;)delete NullProtoObject.prototype[$[e]];return NullProtoObject()};I[It]=!0;var kt=Object.create||function create(t,r){var e;return null!==t?(EmptyConstructor.prototype=anObject(t),e=new EmptyConstructor,EmptyConstructor.prototype=null,e[It]=t):e=NullProtoObject(),void 0===r?e:xt(e,r)},Lt=wellKnownSymbol("unscopables"),Ft=Array.prototype;null==Ft[Lt]&&h.f(Ft,Lt,{configurable:!0,value:kt(null)});var Nt,Rt=Object.defineProperty,Dt={},thrower=function(t){throw t},Wt=X.includes;_export({target:"Array",proto:!0,forced:!function(t,r){if(has(Dt,t))return Dt[t];r||(r={});var e=[][t],o=!!has(r,"ACCESSORS")&&r.ACCESSORS,i=has(r,0)?r[0]:thrower,u=has(r,1)?r[1]:void 0;return Dt[t]=!!e&&!fails((function(){if(o&&!n)return!0;var t={length:-1};o?Rt(t,1,{enumerable:!0,get:thrower}):t[1]=1,e.call(t,i,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function includes(t){return Wt(this,t,arguments.length>1?arguments[1]:void 0)}}),Nt="includes",Ft[Lt][Nt]=!0;var qt=h.f,zt=Function.prototype,Gt=zt.toString,Jt=/^\s*function ([^ (]*)/,Kt="name";n&&!(Kt in zt)&&qt(zt,Kt,{configurable:!0,get:function(){try{return Gt.call(this).match(Jt)[1]}catch(t){return""}}});var Bt=wellKnownSymbol("match"),notARegexp=function(t){if(function(t){var r;return isObject(t)&&(void 0!==(r=t[Bt])?!!r:"RegExp"==classofRaw(t))}(t))throw TypeError("The method doesn't accept regular expressions");return t},Ht=wellKnownSymbol("match");function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}(t)||function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(t,r)}(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}_export({target:"String",proto:!0,forced:!function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[Ht]=!1,"/./"[t](r)}catch(t){}}return!1}("includes")},{includes:function includes(t){return!!~String(requireObjectCoercible(this)).indexOf(notARegexp(t),arguments.length>1?arguments[1]:void 0)}});t("default",{name:"xdomain-messaging",init:function init(){var t=this,r=t.canvas;try{window.addEventListener("message",(function(e){if(e.data&&["string","object"].includes(_typeof(e.data))&&"|"!==e.data.charAt()){var n="object"===_typeof(e.data)?e.data:JSON.parse(e.data);if(n&&"object"===_typeof(n)&&"svgCanvas"===n.namespace){var o=t.curConfig.allowedOrigins;if(o.includes("*")||o.includes(e.origin)){var i=n.id,u=n.name,c=n.args,a={namespace:"svg-edit",id:i};try{a.result=r[u].apply(r,_toConsumableArray(c))}catch(t){a.error=t.message}e.source.postMessage(JSON.stringify(a),"*")}else console.log("Origin ".concat(e.origin," not whitelisted for posting to ").concat(window.origin))}}}))}catch(t){console.log("Error with xdomain message listener: "+t)}}})}}}));
