(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var id={exports:{}},zo={};var B0;function By(){if(B0)return zo;B0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var F0;function Fy(){return F0||(F0=1,id.exports=By()),id.exports}var he=Fy(),ad={exports:{}},rt={};var H0;function Hy(){if(H0)return rt;H0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(L,Z,Me){this.props=L,this.context=Z,this.refs=S,this.updater=Me||T}y.prototype.isReactComponent={},y.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=y.prototype;function P(L,Z,Me){this.props=L,this.context=Z,this.refs=S,this.updater=Me||T}var w=P.prototype=new O;w.constructor=P,C(w,y.prototype),w.isPureReactComponent=!0;var z=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(L,Z,Me){var Te=Me.ref;return{$$typeof:s,type:L,key:Z,ref:Te!==void 0?Te:null,props:Me}}function X(L,Z){return D(L.type,Z,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function W(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Me){return Z[Me]})}var ce=/\/+/g;function ge(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?W(""+L.key):Z.toString(36)}function Q(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function B(L,Z,Me,Te,Pe){var ae=typeof L;(ae==="undefined"||ae==="boolean")&&(L=null);var le=!1;if(L===null)le=!0;else switch(ae){case"bigint":case"string":case"number":le=!0;break;case"object":switch(L.$$typeof){case s:case e:le=!0;break;case v:return le=L._init,B(le(L._payload),Z,Me,Te,Pe)}}if(le)return Pe=Pe(L),le=Te===""?"."+ge(L,0):Te,z(Pe)?(Me="",le!=null&&(Me=le.replace(ce,"$&/")+"/"),B(Pe,Z,Me,"",function(Ke){return Ke})):Pe!=null&&(G(Pe)&&(Pe=X(Pe,Me+(Pe.key==null||L&&L.key===Pe.key?"":(""+Pe.key).replace(ce,"$&/")+"/")+le)),Z.push(Pe)),1;le=0;var ve=Te===""?".":Te+":";if(z(L))for(var we=0;we<L.length;we++)Te=L[we],ae=ve+ge(Te,we),le+=B(Te,Z,Me,ae,Pe);else if(we=M(L),typeof we=="function")for(L=we.call(L),we=0;!(Te=L.next()).done;)Te=Te.value,ae=ve+ge(Te,we++),le+=B(Te,Z,Me,ae,Pe);else if(ae==="object"){if(typeof L.then=="function")return B(Q(L),Z,Me,Te,Pe);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return le}function H(L,Z,Me){if(L==null)return L;var Te=[],Pe=0;return B(L,Te,"","",function(ae){return Z.call(Me,ae,Pe++)}),Te}function $(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(Me){(L._status===0||L._status===-1)&&(L._status=1,L._result=Me)},function(Me){(L._status===0||L._status===-1)&&(L._status=2,L._result=Me)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Ee={map:H,forEach:function(L,Z,Me){H(L,function(){Z.apply(this,arguments)},Me)},count:function(L){var Z=0;return H(L,function(){Z++}),Z},toArray:function(L){return H(L,function(Z){return Z})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=x,rt.Children=Ee,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=P,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,Z,Me){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Te=C({},L.props),Pe=L.key;if(Z!=null)for(ae in Z.key!==void 0&&(Pe=""+Z.key),Z)!E.call(Z,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Z.ref===void 0||(Te[ae]=Z[ae]);var ae=arguments.length-2;if(ae===1)Te.children=Me;else if(1<ae){for(var le=Array(ae),ve=0;ve<ae;ve++)le[ve]=arguments[ve+2];Te.children=le}return D(L.type,Pe,Te)},rt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},rt.createElement=function(L,Z,Me){var Te,Pe={},ae=null;if(Z!=null)for(Te in Z.key!==void 0&&(ae=""+Z.key),Z)E.call(Z,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Pe[Te]=Z[Te]);var le=arguments.length-2;if(le===1)Pe.children=Me;else if(1<le){for(var ve=Array(le),we=0;we<le;we++)ve[we]=arguments[we+2];Pe.children=ve}if(L&&L.defaultProps)for(Te in le=L.defaultProps,le)Pe[Te]===void 0&&(Pe[Te]=le[Te]);return D(L,ae,Pe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:p,render:L}},rt.isValidElement=G,rt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:$}},rt.memo=function(L,Z){return{$$typeof:h,type:L,compare:Z===void 0?null:Z}},rt.startTransition=function(L){var Z=I.T,Me={};I.T=Me;try{var Te=L(),Pe=I.S;Pe!==null&&Pe(Me,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,fe)}catch(ae){fe(ae)}finally{Z!==null&&Me.types!==null&&(Z.types=Me.types),I.T=Z}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(L){return I.H.use(L)},rt.useActionState=function(L,Z,Me){return I.H.useActionState(L,Z,Me)},rt.useCallback=function(L,Z){return I.H.useCallback(L,Z)},rt.useContext=function(L){return I.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,Z){return I.H.useDeferredValue(L,Z)},rt.useEffect=function(L,Z){return I.H.useEffect(L,Z)},rt.useEffectEvent=function(L){return I.H.useEffectEvent(L)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(L,Z,Me){return I.H.useImperativeHandle(L,Z,Me)},rt.useInsertionEffect=function(L,Z){return I.H.useInsertionEffect(L,Z)},rt.useLayoutEffect=function(L,Z){return I.H.useLayoutEffect(L,Z)},rt.useMemo=function(L,Z){return I.H.useMemo(L,Z)},rt.useOptimistic=function(L,Z){return I.H.useOptimistic(L,Z)},rt.useReducer=function(L,Z,Me){return I.H.useReducer(L,Z,Me)},rt.useRef=function(L){return I.H.useRef(L)},rt.useState=function(L){return I.H.useState(L)},rt.useSyncExternalStore=function(L,Z,Me){return I.H.useSyncExternalStore(L,Z,Me)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.8",rt}var G0;function zh(){return G0||(G0=1,ad.exports=Hy()),ad.exports}var xn=zh(),rd={exports:{}},Bo={},sd={exports:{}},od={};var V0;function Gy(){return V0||(V0=1,(function(s){function e(B,H){var $=B.length;B.push(H);e:for(;0<$;){var fe=$-1>>>1,Ee=B[fe];if(0<l(Ee,H))B[fe]=H,B[$]=Ee,$=fe;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],$=B.pop();if($!==H){B[0]=$;e:for(var fe=0,Ee=B.length,L=Ee>>>1;fe<L;){var Z=2*(fe+1)-1,Me=B[Z],Te=Z+1,Pe=B[Te];if(0>l(Me,$))Te<Ee&&0>l(Pe,Me)?(B[fe]=Pe,B[Te]=$,fe=Te):(B[fe]=Me,B[Z]=$,fe=Z);else if(Te<Ee&&0>l(Pe,$))B[fe]=Pe,B[Te]=$,fe=Te;else break e}}return H}function l(B,H){var $=B.sortIndex-H.sortIndex;return $!==0?$:B.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,x=null,g=3,M=!1,T=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=B)r(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function z(B){if(C=!1,w(B),!T)if(i(m)!==null)T=!0,N||(N=!0,W());else{var H=i(h);H!==null&&Q(z,H.startTime-B)}}var N=!1,I=-1,E=5,D=-1;function X(){return S?!0:!(s.unstable_now()-D<E)}function G(){if(S=!1,N){var B=s.unstable_now();D=B;var H=!0;try{e:{T=!1,C&&(C=!1,O(I),I=-1),M=!0;var $=g;try{t:{for(w(B),x=i(m);x!==null&&!(x.expirationTime>B&&X());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,g=x.priorityLevel;var Ee=fe(x.expirationTime<=B);if(B=s.unstable_now(),typeof Ee=="function"){x.callback=Ee,w(B),H=!0;break t}x===i(m)&&r(m),w(B)}else r(m);x=i(m)}if(x!==null)H=!0;else{var L=i(h);L!==null&&Q(z,L.startTime-B),H=!1}}break e}finally{x=null,g=$,M=!1}H=void 0}}finally{H?W():N=!1}}}var W;if(typeof P=="function")W=function(){P(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ge=ce.port2;ce.port1.onmessage=G,W=function(){ge.postMessage(null)}}else W=function(){y(G,0)};function Q(B,H){I=y(function(){B(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return B()}finally{g=$}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=g;g=B;try{return H()}finally{g=$}},s.unstable_scheduleCallback=function(B,H,$){var fe=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?fe+$:fe):$=fe,B){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=$+Ee,B={id:v++,callback:H,priorityLevel:B,startTime:$,expirationTime:Ee,sortIndex:-1},$>fe?(B.sortIndex=$,e(h,B),i(m)===null&&B===i(h)&&(C?(O(I),I=-1):C=!0,Q(z,$-fe))):(B.sortIndex=Ee,e(m,B),T||M||(T=!0,N||(N=!0,W()))),B},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(B){var H=g;return function(){var $=g;g=H;try{return B.apply(this,arguments)}finally{g=$}}}})(od)),od}var k0;function Vy(){return k0||(k0=1,sd.exports=Gy()),sd.exports}var ld={exports:{}},On={};var X0;function ky(){if(X0)return On;X0=1;var s=zh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},On.flushSync=function(m){var h=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=v,r.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.8",On}var W0;function Xy(){if(W0)return ld.exports;W0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ld.exports=ky(),ld.exports}var q0;function Wy(){if(q0)return Bo;q0=1;var s=Vy(),e=zh(),i=Xy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case z:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},fe=[],Ee=-1;function L(t){return{current:t}}function Z(t){0>Ee||(t.current=fe[Ee],fe[Ee]=null,Ee--)}function Me(t,n){Ee++,fe[Ee]=t.current,t.current=n}var Te=L(null),Pe=L(null),ae=L(null),le=L(null);function ve(t,n){switch(Me(ae,n),Me(Pe,t),Me(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?o0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=o0(n),t=l0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Te),Me(Te,t)}function we(){Z(Te),Z(Pe),Z(ae)}function Ke(t){t.memoizedState!==null&&Me(le,t);var n=Te.current,a=l0(n,t.type);n!==a&&(Me(Pe,t),Me(Te,a))}function Ye(t){Pe.current===t&&(Z(Te),Z(Pe)),le.current===t&&(Z(le),Lo._currentValue=$)}var Ut,at;function ot(t){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+t+at}var pt=!1;function ut(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ue){var oe=ue}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ue){oe=ue}t.call(Se.prototype)}}else{try{throw Error()}catch(ue){oe=ue}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ue){if(ue&&oe&&typeof ue.stack=="string")return[ue.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var F=_.split(`
`),te=R.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===te.length)for(o=F.length-1,u=te.length-1;1<=o&&0<=u&&F[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==te[u]){var _e=`
`+F[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ot(a):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return ot(t.type);case 16:return ot("Lazy");case 13:return t.child!==n&&n!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return ot("Activity");default:return""}}function an(t){try{var n="",a=null;do n+=nn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,cn=s.unstable_scheduleCallback,qt=s.unstable_cancelCallback,sn=s.unstable_shouldYield,Y=s.unstable_requestPaint,Ft=s.unstable_now,Ct=s.unstable_getCurrentPriorityLevel,U=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,j=s.unstable_NormalPriority,re=s.unstable_LowPriority,pe=s.unstable_IdlePriority,Ae=s.log,Ue=s.unstable_setDisableYieldValue,de=null,me=null;function Ce(t){if(typeof Ae=="function"&&Ue(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(de,t)}catch{}}var Fe=Math.clz32?Math.clz32:je,Oe=Math.log,Ne=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Oe(t)/Ne|0)|0}var Je=256,it=262144,k=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(_&=R,_!==0?u=Re(_):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):_!==0?u=Re(_):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var _e=31-Fe(a),Se=1<<_e;R[_e]=0,F[_e]=-1;var oe=te[_e];if(oe!==null)for(te[_e]=null,_e=0;_e<oe.length;_e++){var ue=oe[_e];ue!==null&&(ue.lane&=-536870913)}a&=~Se}o!==0&&Nt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:U0(t.type))}function Xr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Li=Math.random().toString(36).slice(2),dn="__reactFiber$"+Li,An="__reactProps$"+Li,Vn="__reactContainer$"+Li,fr="__reactEvents$"+Li,nl="__reactListeners$"+Li,il="__reactHandles$"+Li,dr="__reactResources$"+Li,Ra="__reactMarker$"+Li;function Ca(t){delete t[dn],delete t[An],delete t[fr],delete t[nl],delete t[il]}function Ki(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=m0(t);t!==null;){if(a=t[dn])return a;t=m0(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[dn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function wa(t){var n=t[dr];return n||(n=t[dr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ra]=!0}var al=new Set,A={};function q(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)al.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Ie={};function Ge(t){return rn.call(Ie,t)?!0:rn.call(ie,t)?!1:ne.test(t)?Ie[t]=!0:(ie[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?mt(t,_,$e(n)):a!=null?mt(t,_,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Ln(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Tt(t)}function mt(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&jt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&jt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Da=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(t){return Da.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var $c=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,qr=null;function sp(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(r(90));He(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yn(t,!!a.multiple,n,!1)}}}var tu=!1;function op(t,n,a){if(tu)return t(n,a);tu=!0;try{var o=t(n);return o}finally{if(tu=!1,(Wr!==null||qr!==null)&&(Wl(),Wr&&(n=Wr,t=qr,qr=Wr=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Ji)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{nu=!1}var Ua=null,iu=null,rl=null;function lp(){if(rl)return rl;var t,n=iu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return rl=u.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function cp(){return!1}function kn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:cp,this.isPropagationStopped=cp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=kn(mr),js=x({},mr,{view:0,detail:0}),I_=kn(js),au,ru,Js,cl=x({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(au=t.screenX-Js.screenX,ru=t.screenY-Js.screenY):ru=au=0,Js=t),au)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),up=kn(cl),z_=x({},cl,{dataTransfer:0}),B_=kn(z_),F_=x({},js,{relatedTarget:0}),su=kn(F_),H_=x({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=kn(H_),V_=x({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k_=kn(V_),X_=x({},mr,{data:0}),fp=kn(X_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Y_[t])?!!n[t]:!1}function ou(){return Z_}var K_=x({},js,{key:function(t){if(t.key){var n=W_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q_=kn(K_),j_=x({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=kn(j_),J_=x({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),$_=kn(J_),ex=x({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=kn(ex),nx=x({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=kn(nx),ax=x({},mr,{newState:0,oldState:0}),rx=kn(ax),sx=[9,13,27,32],lu=Ji&&"CompositionEvent"in window,$s=null;Ji&&"documentMode"in document&&($s=document.documentMode);var ox=Ji&&"TextEvent"in window&&!$s,hp=Ji&&(!lu||$s&&8<$s&&11>=$s),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return sx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function lx(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function cx(t,n){if(Yr)return t==="compositionend"||!lu&&gp(t,n)?(t=lp(),rl=iu=Ua=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ux[t.type]:n==="textarea"}function xp(t,n,a,o){Wr?qr?qr.push(o):qr=[o]:Wr=o,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function fx(t){t0(t,0)}function ul(t){var n=hr(t);if(Qt(n))return t}function yp(t,n){if(t==="change")return n}var Sp=!1;if(Ji){var cu;if(Ji){var uu="oninput"in document;if(!uu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),uu=typeof Mp.oninput=="function"}cu=uu}else cu=!1;Sp=cu&&(!document.documentMode||9<document.documentMode)}function bp(){eo&&(eo.detachEvent("onpropertychange",Ep),to=eo=null)}function Ep(t){if(t.propertyName==="value"&&ul(to)){var n=[];xp(n,to,t,eu(t)),op(fx,n)}}function dx(t,n,a){t==="focusin"?(bp(),eo=n,to=a,eo.attachEvent("onpropertychange",Ep)):t==="focusout"&&bp()}function hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(to)}function px(t,n){if(t==="click")return ul(n)}function mx(t,n){if(t==="input"||t==="change")return ul(n)}function gx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:gx;function no(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rn.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var vx=Ji&&"documentMode"in document&&11>=document.documentMode,Zr=null,du=null,io=null,hu=!1;function wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Zr==null||Zr!==kt(o)||(o=Zr,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=Jl(du,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Zr)))}function gr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Kr={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},pu={},Dp={};Ji&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function vr(t){if(pu[t])return pu[t];if(!Kr[t])return t;var n=Kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return pu[t]=n[a];return t}var Up=vr("animationend"),Np=vr("animationiteration"),Lp=vr("animationstart"),_x=vr("transitionrun"),xx=vr("transitionstart"),yx=vr("transitioncancel"),Op=vr("transitionend"),Pp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function Ti(t,n){Pp.set(t,n),q(n,[t])}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],Qr=0,gu=0;function dl(){for(var t=Qr,n=gu=Qr=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Ip(a,u,f)}}function hl(t,n,a,o){hi[Qr++]=t,hi[Qr++]=n,hi[Qr++]=a,hi[Qr++]=o,gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function vu(t,n,a,o){return hl(t,n,a,o),pl(t)}function _r(t,n){return hl(t,null,null,n),pl(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function pl(t){if(50<Ao)throw Ao=0,Rf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function Sx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new Sx(t,n,a,o)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")_u(t)&&(_=1);else if(typeof t=="string")_=Ay(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ii(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return xr(a.children,u,f,n);case S:_=8,u|=24;break;case y:return t=ii(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case z:return t=ii(13,a,n,u),t.elementType=z,t.lanes=f,t;case N:return t=ii(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:_=10;break e;case O:_=9;break e;case w:_=11;break e;case I:_=14;break e;case E:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ii(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function xr(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function xu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function Bp(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function yu(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Fp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:an(n)},Fp.set(t,n),n)}return{value:t,source:n,stack:an(n)}}var Jr=[],$r=0,gl=null,ao=0,mi=[],gi=0,Na=null,Pi=1,Ii="";function ea(t,n){Jr[$r++]=ao,Jr[$r++]=gl,gl=t,ao=n}function Hp(t,n,a){mi[gi++]=Pi,mi[gi++]=Ii,mi[gi++]=Na,Na=t;var o=Pi;t=Ii;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Pi=1<<32-Fe(n)+u|a<<u|o,Ii=f+t}else Pi=1<<f|a<<u|o,Ii=t}function Su(t){t.return!==null&&(ea(t,1),Hp(t,1,0))}function Mu(t){for(;t===gl;)gl=Jr[--$r],Jr[$r]=null,ao=Jr[--$r],Jr[$r]=null;for(;t===Na;)Na=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null,Pi=mi[--gi],mi[gi]=null}function Gp(t,n){mi[gi++]=Pi,mi[gi++]=Ii,mi[gi++]=Na,Pi=n.id,Ii=n.overflow,Na=t}var Rn=null,Yt=null,Mt=!1,La=null,vi=!1,bu=Error(r(519));function Oa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(pi(n,t)),bu}function Vp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[An]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)vt(Co[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||r0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Oa(t,!0)}function kp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Rn=Rn.return}}function es(t){if(t!==Rn)return!1;if(!Mt)return kp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vf(t.type,t.memoizedProps)),a=!a),a&&Yt&&Oa(t),kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=p0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=p0(t)}else n===27?(n=Yt,Za(t.type)?(t=Yf,Yf=null,Yt=t):Yt=n):Yt=Rn?xi(t.stateNode.nextSibling):null;return!0}function yr(){Yt=Rn=null,Mt=!1}function Eu(){var t=La;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),La=null),t}function ro(t){La===null?La=[t]:La.push(t)}var Tu=L(null),Sr=null,ta=null;function Pa(t,n,a){Me(Tu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Tu.current,Z(Tu)}function Au(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Au(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Au(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ts(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=u.type;ni(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===le.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Ru(n,t,a,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){Sr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Xp(Sr,t)}function _l(t,n){return Sr===null&&Mr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(r(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},bx=s.unstable_scheduleCallback,Ex=s.unstable_NormalPriority,pn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new Mx,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&bx(Ex,function(){t.controller.abort()})}var oo=null,wu=0,ns=0,is=null;function Tx(t,n){if(oo===null){var a=oo=[];wu=0,ns=Lf(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wu++,n.then(Wp,Wp),n}function Wp(){if(--wu===0&&oo!==null){is!==null&&(is.status="fulfilled");var t=oo;oo=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ax(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=B.S;B.S=function(t,n){wg=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tx(t,n),qp!==null&&qp(t,n)};var br=L(null);function Du(){var t=br.current;return t!==null?t:Xt.pooledCache}function xl(t,n){n===null?Me(br,br.current):Me(br,n.pool)}function Yp(){var t=Du();return t===null?null:{parent:pn._currentValue,pool:t}}var as=Error(r(460)),Uu=Error(r(474)),yl=Error(r(542)),Sl={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t}throw Tr=n,as}}function Er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tr=a,as):a}}var Tr=null;function Qp(){if(Tr===null)throw Error(r(459));var t=Tr;return Tr=null,t}function jp(t){if(t===as||t===yl)throw Error(r(483))}var rs=null,lo=0;function Ml(t){var n=lo;return lo+=1,rs===null&&(rs=[]),Kp(rs,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(K,V){if(t){var ee=K.deletions;ee===null?(K.deletions=[V],K.flags|=16):ee.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=$i(K,V),K.index=0,K.sibling=null,K}function f(K,V,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<V?(K.flags|=67108866,V):ee):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,ee,ye){return V===null||V.tag!==6?(V=xu(ee,K.mode,ye),V.return=K,V):(V=u(V,ee),V.return=K,V)}function F(K,V,ee,ye){var et=ee.type;return et===C?_e(K,V,ee.props.children,ye,ee.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===E&&Er(et)===V.type)?(V=u(V,ee.props),co(V,ee),V.return=K,V):(V=ml(ee.type,ee.key,ee.props,null,K.mode,ye),co(V,ee),V.return=K,V)}function te(K,V,ee,ye){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=yu(ee,K.mode,ye),V.return=K,V):(V=u(V,ee.children||[]),V.return=K,V)}function _e(K,V,ee,ye,et){return V===null||V.tag!==7?(V=xr(ee,K.mode,ye,et),V.return=K,V):(V=u(V,ee),V.return=K,V)}function Se(K,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=xu(""+V,K.mode,ee),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ee=ml(V.type,V.key,V.props,null,K.mode,ee),co(ee,V),ee.return=K,ee;case T:return V=yu(V,K.mode,ee),V.return=K,V;case E:return V=Er(V),Se(K,V,ee)}if(Q(V)||W(V))return V=xr(V,K.mode,ee,null),V.return=K,V;if(typeof V.then=="function")return Se(K,Ml(V),ee);if(V.$$typeof===P)return Se(K,_l(K,V),ee);bl(K,V)}return null}function oe(K,V,ee,ye){var et=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(K,V,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===et?F(K,V,ee,ye):null;case T:return ee.key===et?te(K,V,ee,ye):null;case E:return ee=Er(ee),oe(K,V,ee,ye)}if(Q(ee)||W(ee))return et!==null?null:_e(K,V,ee,ye,null);if(typeof ee.then=="function")return oe(K,V,Ml(ee),ye);if(ee.$$typeof===P)return oe(K,V,_l(K,ee),ye);bl(K,ee)}return null}function ue(K,V,ee,ye,et){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return K=K.get(ee)||null,R(V,K,""+ye,et);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case M:return K=K.get(ye.key===null?ee:ye.key)||null,F(V,K,ye,et);case T:return K=K.get(ye.key===null?ee:ye.key)||null,te(V,K,ye,et);case E:return ye=Er(ye),ue(K,V,ee,ye,et)}if(Q(ye)||W(ye))return K=K.get(ee)||null,_e(V,K,ye,et,null);if(typeof ye.then=="function")return ue(K,V,ee,Ml(ye),et);if(ye.$$typeof===P)return ue(K,V,ee,_l(V,ye),et);bl(V,ye)}return null}function We(K,V,ee,ye){for(var et=null,At=null,Ze=V,ft=V=0,xt=null;Ze!==null&&ft<ee.length;ft++){Ze.index>ft?(xt=Ze,Ze=null):xt=Ze.sibling;var Rt=oe(K,Ze,ee[ft],ye);if(Rt===null){Ze===null&&(Ze=xt);break}t&&Ze&&Rt.alternate===null&&n(K,Ze),V=f(Rt,V,ft),At===null?et=Rt:At.sibling=Rt,At=Rt,Ze=xt}if(ft===ee.length)return a(K,Ze),Mt&&ea(K,ft),et;if(Ze===null){for(;ft<ee.length;ft++)Ze=Se(K,ee[ft],ye),Ze!==null&&(V=f(Ze,V,ft),At===null?et=Ze:At.sibling=Ze,At=Ze);return Mt&&ea(K,ft),et}for(Ze=o(Ze);ft<ee.length;ft++)xt=ue(Ze,K,ft,ee[ft],ye),xt!==null&&(t&&xt.alternate!==null&&Ze.delete(xt.key===null?ft:xt.key),V=f(xt,V,ft),At===null?et=xt:At.sibling=xt,At=xt);return t&&Ze.forEach(function($a){return n(K,$a)}),Mt&&ea(K,ft),et}function tt(K,V,ee,ye){if(ee==null)throw Error(r(151));for(var et=null,At=null,Ze=V,ft=V=0,xt=null,Rt=ee.next();Ze!==null&&!Rt.done;ft++,Rt=ee.next()){Ze.index>ft?(xt=Ze,Ze=null):xt=Ze.sibling;var $a=oe(K,Ze,Rt.value,ye);if($a===null){Ze===null&&(Ze=xt);break}t&&Ze&&$a.alternate===null&&n(K,Ze),V=f($a,V,ft),At===null?et=$a:At.sibling=$a,At=$a,Ze=xt}if(Rt.done)return a(K,Ze),Mt&&ea(K,ft),et;if(Ze===null){for(;!Rt.done;ft++,Rt=ee.next())Rt=Se(K,Rt.value,ye),Rt!==null&&(V=f(Rt,V,ft),At===null?et=Rt:At.sibling=Rt,At=Rt);return Mt&&ea(K,ft),et}for(Ze=o(Ze);!Rt.done;ft++,Rt=ee.next())Rt=ue(Ze,K,ft,Rt.value,ye),Rt!==null&&(t&&Rt.alternate!==null&&Ze.delete(Rt.key===null?ft:Rt.key),V=f(Rt,V,ft),At===null?et=Rt:At.sibling=Rt,At=Rt);return t&&Ze.forEach(function(zy){return n(K,zy)}),Mt&&ea(K,ft),et}function Vt(K,V,ee,ye){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var et=ee.key;V!==null;){if(V.key===et){if(et=ee.type,et===C){if(V.tag===7){a(K,V.sibling),ye=u(V,ee.props.children),ye.return=K,K=ye;break e}}else if(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===E&&Er(et)===V.type){a(K,V.sibling),ye=u(V,ee.props),co(ye,ee),ye.return=K,K=ye;break e}a(K,V);break}else n(K,V);V=V.sibling}ee.type===C?(ye=xr(ee.props.children,K.mode,ye,ee.key),ye.return=K,K=ye):(ye=ml(ee.type,ee.key,ee.props,null,K.mode,ye),co(ye,ee),ye.return=K,K=ye)}return _(K);case T:e:{for(et=ee.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(K,V.sibling),ye=u(V,ee.children||[]),ye.return=K,K=ye;break e}else{a(K,V);break}else n(K,V);V=V.sibling}ye=yu(ee,K.mode,ye),ye.return=K,K=ye}return _(K);case E:return ee=Er(ee),Vt(K,V,ee,ye)}if(Q(ee))return We(K,V,ee,ye);if(W(ee)){if(et=W(ee),typeof et!="function")throw Error(r(150));return ee=et.call(ee),tt(K,V,ee,ye)}if(typeof ee.then=="function")return Vt(K,V,Ml(ee),ye);if(ee.$$typeof===P)return Vt(K,V,_l(K,ee),ye);bl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(a(K,V.sibling),ye=u(V,ee),ye.return=K,K=ye):(a(K,V),ye=xu(ee,K.mode,ye),ye.return=K,K=ye),_(K)):a(K,V)}return function(K,V,ee,ye){try{lo=0;var et=Vt(K,V,ee,ye);return rs=null,et}catch(Ze){if(Ze===as||Ze===yl)throw Ze;var At=ii(29,Ze,null,K.mode);return At.lanes=ye,At.return=K,At}}}var Ar=Jp(!0),$p=Jp(!1),Ia=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=pl(t),Ip(t,null,a),n}return hl(t,o,n,a),pl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}function Ou(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function fo(){if(Pu){var t=is;if(t!==null)throw t}}function ho(t,n,a,o){Pu=!1;var u=t.updateQueue;Ia=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,te=F.next;F.next=null,_===null?f=te:_.next=te,_=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==_&&(R===null?_e.firstBaseUpdate=te:R.next=te,_e.lastBaseUpdate=F))}if(f!==null){var Se=u.baseState;_=0,_e=te=F=null,R=f;do{var oe=R.lane&-536870913,ue=oe!==R.lane;if(ue?(_t&oe)===oe:(o&oe)===oe){oe!==0&&oe===ns&&(Pu=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,tt=R;oe=n;var Vt=a;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){Se=We.call(Vt,Se,oe);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,oe=typeof We=="function"?We.call(Vt,Se,oe):We,oe==null)break e;Se=x({},Se,oe);break e;case 2:Ia=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[oe]:ue.push(oe))}else ue={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(te=_e=ue,F=Se):_e=_e.next=ue,_|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ue=R,R=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);_e===null&&(F=Se),u.baseState=F,u.firstBaseUpdate=te,u.lastBaseUpdate=_e,f===null&&(u.shared.lanes=0),ka|=_,t.lanes=_,t.memoizedState=Se}}function em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}var ss=L(null),El=L(0);function nm(t,n){t=fa,Me(El,t),Me(ss,n),fa=t|n.baseLanes}function Iu(){Me(El,fa),Me(ss,ss.current)}function zu(){fa=El.current,Z(ss),Z(El)}var ai=L(null),_i=null;function Fa(t){var n=t.alternate;Me(un,un.current&1),Me(ai,t),_i===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(_i=t)}function Bu(t){Me(un,un.current),Me(ai,t),_i===null&&(_i=t)}function im(t){t.tag===22?(Me(un,un.current),Me(ai,t),_i===null&&(_i=t)):Ha()}function Ha(){Me(un,un.current),Me(ai,ai.current)}function ri(t){Z(ai),_i===t&&(_i=null),Z(un)}var un=L(0);function Tl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ct=null,Ht=null,mn=null,Al=!1,os=!1,Rr=!1,Rl=0,po=0,ls=null,Rx=0;function on(){throw Error(r(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Hu(t,n,a,o,u,f){return ia=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Hm:tf,Rr=!1,f=a(o,u),Rr=!1,os&&(f=rm(n,a,o,u)),am(t),f}function am(t){B.H=vo;var n=Ht!==null&&Ht.next!==null;if(ia=0,mn=Ht=ct=null,Al=!1,po=0,ls=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&vl(t)&&(gn=!0))}function rm(t,n,a,o){ct=t;var u=0;do{if(os&&(ls=null),po=0,os=!1,25<=u)throw Error(r(301));if(u+=1,mn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Gm,f=n(a,o)}while(os);return f}function Cx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ct.flags|=1024),n}function Gu(){var t=Rl!==0;return Rl=0,t}function Vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ku(t){if(Al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Al=!1}ia=0,mn=Ht=ct=null,os=!1,po=Rl=0,ls=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ct.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Ht===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=mn===null?ct.memoizedState:mn.next;if(n!==null)mn=n,Ht=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},mn===null?ct.memoizedState=mn=t:mn=mn.next=t}return mn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,ls===null&&(ls=[]),t=Kp(ls,t,n),n=ct,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Hm:tf),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===P)return Cn(t)}throw Error(r(438,String(t)))}function Xu(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Dl(t){var n=fn();return Wu(n,Ht,t)}function Wu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,F=null,te=n,_e=!1;do{var Se=te.lane&-536870913;if(Se!==te.lane?(_t&Se)===Se:(ia&Se)===Se){var oe=te.revertLane;if(oe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Se===ns&&(_e=!0);else if((ia&oe)===oe){te=te.next,oe===ns&&(_e=!0);continue}else Se={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(R=F=Se,_=f):F=F.next=Se,ct.lanes|=oe,ka|=oe;Se=te.action,Rr&&a(f,Se),f=te.hasEagerState?te.eagerState:a(f,Se)}else oe={lane:Se,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(R=F=oe,_=f):F=F.next=oe,ct.lanes|=Se,ka|=Se;te=te.next}while(te!==null&&te!==n);if(F===null?_=f:F.next=R,!ni(f,t.memoizedState)&&(gn=!0,_e&&(a=is,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function qu(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ni(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function sm(t,n,a){var o=ct,u=fn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ni((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,gn=!0),u=u.queue,Ku(cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},lm.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));f||(ia&127)!==0||om(o,n,a)}return a}function om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Cl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lm(t,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&fm(t)}function cm(t,n,a){return a(function(){um(n)&&fm(t)})}function um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function fm(t){var n=_r(t,2);n!==null&&Zn(n,t,2)}function Yu(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Rr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function dm(t,n,a,o){return t.baseState=a,Wu(t,Ht,typeof o=="function"?o:aa)}function wx(t,n,a,o,u){if(Ll(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,_={};B.T=_;try{var R=a(u,o),F=B.S;F!==null&&F(_,R),pm(t,n,R)}catch(te){Zu(t,n,te)}finally{f!==null&&_.types!==null&&(f.types=_.types),B.T=f}}else try{f=a(u,o),pm(t,n,f)}catch(te){Zu(t,n,te)}}function pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(t,n,o)},function(o){return Zu(t,n,o)}):mm(t,n,a)}function mm(t,n,a){n.status="fulfilled",n.value=a,gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function Zu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vm(t,n){return n}function _m(t,n){if(Mt){var a=Xt.formState;if(a!==null){e:{var o=ct;if(Mt){if(Yt){t:{for(var u=Yt,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=xi(u.nextSibling),o=u.data==="F!";break e}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=o,a=zm.bind(null,ct,o),o.dispatch=a,o=Yu(!1),f=ef.bind(null,ct,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=wx.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function xm(t){var n=fn();return ym(n,Ht,t)}function ym(t,n,a){if(n=Wu(t,n,vm)[0],t=Dl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(_){throw _===as?yl:_}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,cs(9,{destroy:void 0},Dx.bind(null,u,a),null)),[o,f,t]}function Dx(t,n){t.action=n}function Sm(t){var n=fn(),a=Ht;if(a!==null)return ym(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Cl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mm(){return fn().memoizedState}function Ul(t,n,a,o){var u=Hn();ct.flags|=t,u.memoizedState=cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nl(t,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&Fu(o,Ht.memoizedState.deps)?u.memoizedState=cs(n,f,a,o):(ct.flags|=t,u.memoizedState=cs(1|n,f,a,o))}function bm(t,n){Ul(8390656,8,t,n)}function Ku(t,n){Nl(2048,8,t,n)}function Ux(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Cl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=fn().memoizedState;return Ux({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Nl(4,2,t,n)}function Am(t,n){return Nl(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,Nl(4,4,Rm.bind(null,n,t),a)}function Qu(){}function wm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=t(),Rr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function ju(t,n,a){return a===void 0||(ia&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ug(),ct.lanes|=t,ka|=t,a)}function Um(t,n,a,o){return ni(a,n)?a:ss.current!==null?(t=ju(t,a,o),ni(t,n)||(gn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(_t&261930)===0?(gn=!0,t.memoizedState=a):(t=Ug(),ct.lanes|=t,ka|=t,n)}function Nm(t,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=B.T,R={};B.T=R,ef(t,!1,n,a);try{var F=u(),te=B.S;if(te!==null&&te(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var _e=Ax(F,o);go(t,n,_e,li(t))}else go(t,n,o,li(t))}catch(Se){go(t,n,{then:function(){},status:"rejected",reason:Se},li())}finally{H.p=f,_!==null&&R.types!==null&&(_.types=R.types),B.T=_}}function Nx(){}function Ju(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Lm(t).queue;Nm(t,u,n,$,a===null?Nx:function(){return Om(t),a(o)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},li())}function $u(){return Cn(Lo)}function Pm(){return fn().memoizedState}function Im(){return fn().memoizedState}function Lx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=za(a);var o=Ba(n,t,a);o!==null&&(Zn(o,n,a),uo(o,n,a)),n={cache:Cu()},t.payload=n;return}n=n.return}}function Ox(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(t)?Bm(n,a):(a=vu(t,n,a,o),a!==null&&(Zn(a,t,o),Fm(a,n,o)))}function zm(t,n,a){var o=li();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(t))Bm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,_))return hl(t,n,u,0),Xt===null&&dl(),!1}catch{}if(a=vu(t,n,u,o),a!==null)return Zn(a,t,o),Fm(a,n,o),!0}return!1}function ef(t,n,a,o){if(o={lane:2,revertLane:Lf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ll(t)){if(n)throw Error(r(479))}else n=vu(t,a,o,2),n!==null&&Zn(n,t,2)}function Ll(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Bm(t,n){os=Al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}var vo={readContext:Cn,use:wl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};vo.useEffectEvent=on;var Hm={readContext:Cn,use:wl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ul(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ul(4194308,4,t,n)},useInsertionEffect:function(t,n){Ul(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Rr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Rr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ox.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yu(t);var n=t.queue,a=zm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(t,n){var a=Hn();return ju(a,t,n)},useTransition:function(){var t=Yu(!1);return t=Nm.bind(null,ct,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Hn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(_t&127)!==0||om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,bm(cm.bind(null,o,f,t),[t]),o.flags|=2048,cs(9,{destroy:void 0},lm.bind(null,o,f,a,n),null),a},useId:function(){var t=Hn(),n=Xt.identifierPrefix;if(Mt){var a=Ii,o=Pi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$u,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xu,useCacheRefresh:function(){return Hn().memoizedState=Lx.bind(null,ct)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:Cn,use:wl,useCallback:wm,useContext:Cn,useEffect:Ku,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Dl,useRef:Mm,useState:function(){return Dl(aa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=fn();return Um(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Dl(aa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:sm,useId:Pm,useHostTransitionStatus:$u,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=fn();return dm(a,Ht,t,n)},useMemoCache:Xu,useCacheRefresh:Im};tf.useEffectEvent=Em;var Gm={readContext:Cn,use:wl,useCallback:wm,useContext:Cn,useEffect:Ku,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:qu,useRef:Mm,useState:function(){return qu(aa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=fn();return Ht===null?ju(a,t,n):Um(a,Ht.memoizedState,t,n)},useTransition:function(){var t=qu(aa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:sm,useId:Pm,useHostTransitionStatus:$u,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=fn();return Ht!==null?dm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Im};Gm.useEffectEvent=Em;function nf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Zn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Zn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Zn(n,t,a),uo(n,t,a))}};function Vm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&af.enqueueReplaceState(n,n.state,null)}function Cr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xm(t){fl(t)}function Wm(t){console.error(t)}function qm(t){fl(t)}function Ol(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(t,n)},a}function Zm(t){return t=za(t),t.tag=3,t}function Km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Ym(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Px(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?ql():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Df(t,o,u)),!1;case 22:return a.flags|=65536,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Df(t,o,u)),!1}throw Error(r(435,a.tag))}return Df(t,o,u),ql(),!1}if(Mt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bu&&(t=Error(r(422),{cause:o}),ro(pi(t,a)))):(o!==bu&&(n=Error(r(423),{cause:o}),ro(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=rf(t.stateNode,o,u),Ou(t,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:o});if(f=pi(f,a),To===null?To=[f]:To.push(f),ln!==4&&(ln=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=rf(a.stateNode,o,t),Ou(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zm(u),Km(u,t,a,o),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(r(461)),gn=!1;function wn(t,n,a,o){n.child=t===null?$p(n,null,a,o):Ar(n,t.child,a,o)}function Qm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Mr(n),o=Hu(t,n,a,_,f,u),R=Gu(),t!==null&&!gn?(Vu(t,n,u),ra(t,n,u)):(Mt&&R&&Su(n),n.flags|=1,wn(t,n,o,u),n.child)}function jm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,o,u)):(t=ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!pf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(_,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=$i(f,o),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(no(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,pf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return of(t,n,a,o,u)}function $m(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return eg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Iu(),im(n);else return o=n.lanes=536870912,eg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(xl(n,f.cachePool),nm(n,f),Ha(),n.memoizedState=null):(t!==null&&xl(n,null),Iu(),Ha());return wn(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,o,u){var f=Du();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&xl(n,null),Iu(),im(n),t!==null&&ts(t,n,o,!0),n.childLanes=u,null}function Pl(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tg(t,n,a){return Ar(n,t.child,null,a),t=Pl(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Ix(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Pl(n,o),n.lanes=536870912,_o(null,t);if(Bu(n),(t=Yt)?(t=h0(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return Pl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||ts(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=Xt,o!==null&&(_=$n(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,_r(t,_),Zn(o,t,_),sf;ql(),n=tg(t,n,a)}else t=f.treeContext,Yt=xi(_.nextSibling),Rn=n,Mt=!0,La=null,vi=!1,t!==null&&Gp(n,t),n=Pl(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function of(t,n,a,o,u){return Mr(n),a=Hu(t,n,a,o,void 0,u),o=Gu(),t!==null&&!gn?(Vu(t,n,u),ra(t,n,u)):(Mt&&o&&Su(n),n.flags|=1,wn(t,n,a,u),n.child)}function ng(t,n,a,o,u,f){return Mr(n),n.updateQueue=null,a=rm(n,o,a,u),am(t),o=Gu(),t!==null&&!gn?(Vu(t,n,f),ra(t,n,f)):(Mt&&o&&Su(n),n.flags|=1,wn(t,n,a,f),n.child)}function ig(t,n,a,o,u){if(Mr(n),n.stateNode===null){var f=jr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):jr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(nf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&af.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,F=Cr(a,R);f.props=F;var te=f.context,_e=a.contextType;_=jr,typeof _e=="object"&&_e!==null&&(_=Cn(_e));var Se=a.getDerivedStateFromProps;_e=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==_)&&km(n,f,o,_),Ia=!1;var oe=n.memoizedState;f.state=oe,ho(n,o,f,u),fo(),te=n.memoizedState,R||oe!==te||Ia?(typeof Se=="function"&&(nf(n,a,Se,o),te=n.memoizedState),(F=Ia||Vm(n,a,F,o,oe,te,_))?(_e||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=_,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lu(t,n),_=n.memoizedProps,_e=Cr(a,_),f.props=_e,Se=n.pendingProps,oe=f.context,te=a.contextType,F=jr,typeof te=="object"&&te!==null&&(F=Cn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Se||oe!==F)&&km(n,f,o,F),Ia=!1,oe=n.memoizedState,f.state=oe,ho(n,o,f,u),fo();var ue=n.memoizedState;_!==Se||oe!==ue||Ia||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof R=="function"&&(nf(n,a,R,o),ue=n.memoizedState),(_e=Ia||Vm(n,a,_e,o,oe,ue,F)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=F,o=_e):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ar(n,t.child,null,u),n.child=Ar(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function ag(t,n,a,o){return yr(),n.flags|=256,wn(t,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(t){return{baseLanes:t,cachePool:Yp()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function rg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Fa(n):Ha(),(t=Yt)?(t=h0(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Oa(n);return qf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ha(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=xr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,_,a),n.memoizedState=lf,_o(null,o)):(Fa(n),ff(n,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,n=null):(Ha(),R=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),R=xr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ar(n,t.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,_,a),n.memoizedState=lf,n=_o(null,o));else if(Fa(n),qf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(r(419)),o.stack="",o.digest=_,ro({value:o,source:null,stack:null}),n=df(t,n,a)}else if(gn||ts(t,n,a,!1),_=(a&t.childLanes)!==0,gn||_){if(_=Xt,_!==null&&(o=$n(_,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,_r(t,o),Zn(_,t,o),sf;Wf(R)||ql(),n=df(t,n,a)}else Wf(R)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Yt=xi(R.nextSibling),Rn=n,Mt=!0,La=null,vi=!1,t!==null&&Gp(n,t),n=ff(n,o.children),n.flags|=4096);return n}return u?(Ha(),R=o.fallback,u=n.mode,F=t.child,te=F.sibling,o=$i(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,te!==null?R=$i(te,R):(R=xr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,_o(null,o),o=n.child,R=t.child.memoizedState,R===null?R=cf(a):(u=R.cachePool,u!==null?(F=pn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Yp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=uf(t,_,a),n.memoizedState=lf,_o(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function ff(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function df(t,n,a){return Ar(n,t.child,null,a),t=ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Au(t.return,n,a)}function hf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function og(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=un.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Me(un,_),wn(t,n,o,a),o=Mt?ao:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,n);else if(t.tag===19)sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Tl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Tl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}hf(n,!0,a,null,f,o);break;case"together":hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function zx(t,n,a){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),Pa(n,pn,t.memoizedState.cache),yr();break;case 27:case 5:Ke(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(t,n,a):(Fa(n),t=ra(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return og(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(un,un.current),o)break;return null;case 22:return n.lanes=0,$m(t,n,a,n.pendingProps);case 24:Pa(n,pn,t.memoizedState.cache)}return ra(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!pf(t,a)&&(n.flags&128)===0)return gn=!1,zx(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Mt&&(n.flags&1048576)!==0&&Hp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")_u(t)?(o=Cr(t,o),n.tag=1,n=ig(null,n,t,o,a)):(n.tag=0,n=of(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=Qm(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=jm(null,n,t,o,a);break e}}throw n=ge(t)||t,Error(r(306,n,""))}}return n;case 0:return of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cr(o,n.pendingProps),ig(t,n,o,u,a);case 3:e:{if(ve(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(t,n),ho(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Pa(n,pn,o),o!==f.cache&&Ru(n,[pn],a,!0),fo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==u){u=pi(Error(r(424)),n),ro(u),n=ag(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=xi(t.firstChild),Rn=n,Mt=!0,La=null,vi=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yr(),o===u){n=ra(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=$l(ae.current).createElement(a),o[dn]=n,o[An]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=x0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Mt&&(o=n.stateNode=g0(n.type,n.pendingProps,ae.current),Rn=n,vi=!0,u=Yt,Za(n.type)?(Yf=u,Yt=xi(o.firstChild)):Yt=u),wn(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Yt)&&(o=hy(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Rn=n,Yt=xi(o.firstChild),vi=!1,u=!0):u=!1),u||Oa(n)),Ke(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Vf(u,f)?o=null:_!==null&&Vf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(t,n,Cx,null,null,a),Lo._currentValue=u),Il(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Yt)&&(a=py(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Rn=n,Yt=null,t=!0):t=!1),t||Oa(n)),null;case 13:return rg(t,n,a);case 4:return ve(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ar(n,null,o,a):wn(t,n,o,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Mr(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return jm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return Ix(t,n,a);case 22:return $m(t,n,a,n.pendingProps);case 24:return Mr(n),o=Cn(pn),t===null?(u=Du(),u===null&&(u=Xt,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Nu(n),Pa(n,pn,u)):((t.lanes&a)!==0&&(Lu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,pn,o)):(o=f.cache,Pa(n,pn,o),o!==u.cache&&Ru(n,[pn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function mf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Pg())t.flags|=8192;else throw Tr=Sl,Uu}else t.flags&=-16777217}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(n))if(Pg())t.flags|=8192;else throw Tr=Sl,Uu}function Bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,hs|=n)}function xo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Bx(t,n,a){var o=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(pn),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(es(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Zt(n),cg(n,f)):(Zt(n),mf(n,u,null,o,a))):f?f!==t.memoizedState?(sa(n),Zt(n),cg(n,f)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Zt(n),mf(n,u,t,o,a)),null;case 27:if(Ye(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}t=Te.current,es(n)?Vp(n):(t=g0(u,o,a),n.stateNode=t,sa(n))}return Zt(n),null;case 5:if(Ye(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(f=Te.current,es(n))Vp(n);else{var _=$l(ae.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[dn]=n,f[An]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Zt(n),mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,es(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||r0(t.nodeValue,a)),t||Oa(n,!0)}else t=$l(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Zt(n),null);case 4:return we(),t===null&&zf(n.stateNode.containerInfo),Zt(n),null;case 10:return na(n.type),Zt(n),null;case 19:if(Z(un),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Tl(t),f!==null){for(n.flags|=128,xo(o,!1),t=f.updateQueue,n.updateQueue=t,Bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return Me(un,un.current&1|2),Mt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>kl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Tl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Bl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Zt(n),null}else 2*Ft()-o.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=un.current,Me(un,u?a&1|2:a&1),Mt&&ea(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ri(n),zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(pn),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Fx(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(pn),we(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(un),null;case 4:return we(),null;case 10:return na(n.type),null;case 22:case 23:return ri(n),zu(),t!==null&&Z(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(pn),null;case 25:return null;default:return null}}function ug(t,n){switch(Mu(n),n.tag){case 3:na(pn),we();break;case 26:case 27:case 5:Ye(n);break;case 4:we();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Z(un);break;case 10:na(n.type);break;case 22:case 23:ri(n),zu(),t!==null&&Z(br);break;case 24:na(pn)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){zt(n,n.return,R)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var F=a,te=R;try{te()}catch(_e){zt(u,F,_e)}}}o=o.next}while(o!==f)}}catch(_e){zt(n,n.return,_e)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(o){zt(t,t.return,o)}}}function dg(t,n,a){a.props=Cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function gf(t,n,a){try{var o=t.stateNode;oy(o,t.type,a,n),o[An]=n}catch(u){zt(t,t.return,u)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[dn]=t,n[An]=a}catch(f){zt(t,t.return,f)}}var oa=!1,vn=!1,xf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Hx(t,n){if(t=t.containerInfo,Hf=sc,t=Cp(t),fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,F=-1,te=0,_e=0,Se=t,oe=null;t:for(;;){for(var ue;Se!==a||u!==0&&Se.nodeType!==3||(R=_+u),Se!==f||o!==0&&Se.nodeType!==3||(F=_+o),Se.nodeType===3&&(_+=Se.nodeValue.length),(ue=Se.firstChild)!==null;)oe=Se,Se=ue;for(;;){if(Se===t)break t;if(oe===a&&++te===u&&(R=_),oe===f&&++_e===o&&(F=_),(ue=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=ue}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:t,selectionRange:a},sc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Cr(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function vg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&yo(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){zt(a,a.return,_)}else{var u=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){zt(a,a.return,_)}}o&64&&fg(a),o&512&&So(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(_){zt(a,a.return,_)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:ca(t,a),n===null&&o&4&&hg(a),o&512&&So(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&yg(t,a);break;case 13:ca(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Kx.bind(null,a),my(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||vn,u=oa;var f=vn;oa=o,(vn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,vn=f}break;case 30:break;default:ca(t,a)}}function _g(t){var n=t.alternate;n!==null&&(t.alternate=null,_g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ca(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Xn=!1;function la(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:vn||zi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||zi(a,n);var o=Jt,u=Xn;Za(a.type)&&(Jt=a.stateNode,Xn=!1),la(t,n,a),Do(a.stateNode),Jt=o,Xn=u;break;case 5:vn||zi(a,n);case 6:if(o=Jt,u=Xn,Jt=null,la(t,n,a),Jt=o,Xn=u,Jt!==null)if(Xn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Jt!==null&&(Xn?(t=Jt,f0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ss(t)):f0(Jt,a.stateNode));break;case 4:o=Jt,u=Xn,Jt=a.stateNode.containerInfo,Xn=!0,la(t,n,a),Jt=o,Xn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),vn||Ga(4,a,n),la(t,n,a);break;case 1:vn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,la(t,n,a),vn=o;break;default:la(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ss(t)}catch(a){zt(n,n.return,a)}}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ss(t)}catch(a){zt(n,n.return,a)}}function Gx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(r(435,t.tag))}}function Hl(t,n){var a=Gx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Qx.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){Jt=R.stateNode,Xn=!1;break e}break;case 5:Jt=R.stateNode,Xn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(Jt===null)throw Error(r(160));xg(f,_,u),Jt=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var Ai=null;function Mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Ga(3,t,t.return),yo(3,t),Ga(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ra]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[dn]=t,hn(f),o=f;break e;case"link":var _=M0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=M0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[dn]=t,hn(f),o=f}t.stateNode=o}else b0(u,t.type,t.stateNode);else t.stateNode=S0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?b0(u,t.type,t.stateNode):S0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),a!==null&&o&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{ti(u,"")}catch(We){zt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,gf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){zt(t,t.return,We)}}break;case 3:if(nc=null,u=Ai,Ai=ec(n.containerInfo),Wn(n,t),Ai=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(We){zt(t,t.return,We)}xf&&(xf=!1,bg(t));break;case 4:o=Ai,Ai=ec(t.stateNode.containerInfo),Wn(n,t),qn(t),Ai=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hl(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hl(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,te=oa,_e=vn;if(oa=te||u,vn=_e||F,Wn(n,t),vn=_e,oa=te,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||oa||vn||wr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=F.stateNode;var Se=F.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(We){zt(F,F.return,We)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(We){zt(F,F.return,We)}}}else if(n.tag===18){if(a===null){F=n;try{var ue=F.stateNode;u?d0(ue,!0):d0(F.stateNode,!1)}catch(We){zt(F,F.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Hl(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Hl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=vf(t);Fl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ti(_,""),a.flags&=-33);var R=vf(t);Fl(t,R,_);break;case 3:case 4:var F=a.stateNode.containerInfo,te=vf(t);_f(t,te,F);break;default:throw Error(r(161))}}catch(_e){zt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vg(t,n.alternate,n),n=n.sibling}function wr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),wr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),wr(n);break;case 27:Do(n.stateNode);case 26:case 5:zi(n,n.return),wr(n);break;case 22:n.memoizedState===null&&wr(n);break;case 30:wr(n);break;default:wr(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),yo(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){zt(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)em(F[u],R)}catch(te){zt(o,o.return,te)}}a&&_&64&&fg(f),So(f,f.return);break;case 27:mg(f);case 26:case 5:ua(u,f,a),a&&o===null&&_&4&&hg(f),So(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&_&4&&yg(u,f);break;case 13:ua(u,f,a),a&&_&4&&Sg(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),So(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,o),n=n.sibling}function Eg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&yo(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){zt(n,n.return,F)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,o):Mo(t,n):f._visibility&2?Ri(t,n,a,o):(f._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&yf(_,n);break;case 24:Ri(t,n,a,o),u&2048&&Sf(n.alternate,n);break;default:Ri(t,n,a,o)}}function us(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,F=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:us(f,_,R,F,u),yo(8,_);break;case 23:break;case 22:var _e=_.stateNode;_.memoizedState!==null?_e._visibility&2?us(f,_,R,F,u):Mo(f,_):(_e._visibility|=2,us(f,_,R,F,u)),u&&te&2048&&yf(_.alternate,_);break;case 24:us(f,_,R,F,u),u&&te&2048&&Sf(_.alternate,_);break;default:us(f,_,R,F,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&yf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Sf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var bo=8192;function fs(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Tg(t,n,a),t=t.sibling}function Tg(t,n,a){switch(t.tag){case 26:fs(t,n,a),t.flags&bo&&t.memoizedState!==null&&Ry(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,a);break;case 3:case 4:var o=Ai;Ai=ec(t.stateNode.containerInfo),fs(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,fs(t,n,a),bo=o):fs(t,n,a));break;default:fs(t,n,a)}}function Ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Cg(o,t)}Ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gl(t)):Eo(t);break;default:Eo(t)}}function Gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Cg(o,t)}Ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}t=t.sibling}}function Cg(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,f=o.return;if(_g(o),o===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var Vx={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},kx=typeof WeakMap=="function"?WeakMap:Map,wt=0,Xt=null,gt=null,_t=0,It=0,si=null,Va=!1,ds=!1,Mf=!1,fa=0,ln=0,ka=0,Dr=0,bf=0,oi=0,hs=0,To=null,Yn=null,Ef=!1,Vl=0,wg=0,kl=1/0,Xl=null,Xa=null,Sn=0,Wa=null,ps=null,da=0,Tf=0,Af=null,Dg=null,Ao=0,Rf=null;function li(){return(wt&2)!==0&&_t!==0?_t&-_t:B.T!==null?Lf():Zs()}function Ug(){if(oi===0)if((_t&536870912)===0||Mt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Zn(t,n,a){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ms(t,0),qa(t,_t,oi,!1)),Ve(t,a),((wt&2)===0||t!==Xt)&&(t===Xt&&((wt&2)===0&&(Dr|=a),ln===4&&qa(t,_t,oi,!1)),Bi(t))}function Ng(t,n,a){if((wt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=o?qx(t,n):wf(t,n,!0),f=o;do{if(u===0){ds&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Xx(a)){u=wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=To;var F=R.current.memoizedState.isDehydrated;if(F&&(ms(R,_).flags|=256),_=wf(R,_,!1),_!==2){if(Mf&&!F){R.errorRecoveryDisabledLanes|=f,Dr|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ms(t,0),qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,oi,!Va);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vl+300-Ft(),10<u)){if(qa(o,n,oi,!Va),xe(o,0,!0)!==0)break e;da=n,o.timeoutHandle=c0(Lg.bind(null,o,a,Yn,Xl,Ef,n,oi,Dr,hs,Va,f,"Throttled",-0,0),u);break e}Lg(o,a,Yn,Xl,Ef,n,oi,Dr,hs,Va,f,null,-0,0)}}break}while(!0);Bi(t)}function Lg(t,n,a,o,u,f,_,R,F,te,_e,Se,oe,ue){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Tg(n,f,Se);var We=(f&62914560)===f?Vl-Ft():(f&4194048)===f?wg-Ft():0;if(We=Cy(Se,We),We!==null){da=f,t.cancelPendingCommit=We(Gg.bind(null,t,n,f,a,o,u,_,R,F,_e,Se,null,oe,ue)),qa(t,f,_,!te);return}}Gg(t,n,f,a,o,u,_,R,F)}function Xx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~bf,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Nt(t,a,n)}function Wl(){return(wt&6)===0?(Ro(0),!1):!0}function Cf(){if(gt!==null){if(It===0)var t=gt.return;else t=gt,ta=Sr=null,ku(t),rs=null,lo=0,t=gt;for(;t!==null;)ug(t.alternate,t),t=t.return;gt=null}}function ms(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,Cf(),Xt=t,gt=a=$i(t.current,null),_t=n,It=0,si=null,Va=!1,ds=De(t,n),Mf=!1,hs=oi=bf=Dr=ka=ln=0,Yn=To=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return fa=n,dl(),a}function Og(t,n){ct=null,B.H=vo,n===as||n===yl?(n=Qp(),It=3):n===Uu?(n=Qp(),It=4):It=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,gt===null&&(ln=1,Ol(t,pi(n,t.current)))}function Pg(){var t=ai.current;return t===null?!0:(_t&4194048)===_t?_i===null:(_t&62914560)===_t||(_t&536870912)!==0?t===_i:!1}function Ig(){var t=B.H;return B.H=vo,t===null?vo:t}function zg(){var t=B.A;return B.A=Vx,t}function ql(){ln=4,Va||(_t&4194048)!==_t&&ai.current!==null||(ds=!0),(ka&134217727)===0&&(Dr&134217727)===0||Xt===null||qa(Xt,_t,oi,!1)}function wf(t,n,a){var o=wt;wt|=2;var u=Ig(),f=zg();(Xt!==t||_t!==n)&&(Xl=null,ms(t,n)),n=!1;var _=ln;e:do try{if(It!==0&&gt!==null){var R=gt,F=si;switch(It){case 8:Cf(),_=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var te=It;if(It=0,si=null,gs(t,R,F,te),a&&ds){_=0;break e}break;default:te=It,It=0,si=null,gs(t,R,F,te)}}Wx(),_=ln;break}catch(_e){Og(t,_e)}while(!0);return n&&t.shellSuspendCounter++,ta=Sr=null,wt=o,B.H=u,B.A=f,gt===null&&(Xt=null,_t=0,dl()),_}function Wx(){for(;gt!==null;)Bg(gt)}function qx(t,n){var a=wt;wt|=2;var o=Ig(),u=zg();Xt!==t||_t!==n?(Xl=null,kl=Ft()+500,ms(t,n)):ds=De(t,n);e:do try{if(It!==0&&gt!==null){n=gt;var f=si;t:switch(It){case 1:It=0,si=null,gs(t,n,f,1);break;case 2:case 9:if(Zp(f)){It=0,si=null,Fg(n);break}n=function(){It!==2&&It!==9||Xt!==t||(It=7),Bi(t)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Zp(f)?(It=0,si=null,Fg(n)):(It=0,si=null,gs(t,n,f,7));break;case 5:var _=null;switch(gt.tag){case 26:_=gt.memoizedState;case 5:case 27:var R=gt;if(_?E0(_):R.stateNode.complete){It=0,si=null;var F=R.sibling;if(F!==null)gt=F;else{var te=R.return;te!==null?(gt=te,Yl(te)):gt=null}break t}}It=0,si=null,gs(t,n,f,5);break;case 6:It=0,si=null,gs(t,n,f,6);break;case 8:Cf(),ln=6;break e;default:throw Error(r(462))}}Yx();break}catch(_e){Og(t,_e)}while(!0);return ta=Sr=null,B.H=o,B.A=u,wt=a,gt!==null?0:(Xt=null,_t=0,dl(),ln)}function Yx(){for(;gt!==null&&!sn();)Bg(gt)}function Bg(t){var n=lg(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?Yl(t):gt=n}function Fg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:ku(n);default:ug(a,n),n=gt=zp(n,fa),n=lg(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?Yl(t):gt=n}function gs(t,n,a,o){ta=Sr=null,ku(n),rs=null,lo=0;var u=n.return;try{if(Px(t,u,n,a,_t)){ln=1,Ol(t,pi(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;ln=1,Ol(t,pi(a,t.current)),gt=null;return}n.flags&32768?(Mt||o===1?t=!0:ds||(_t&536870912)!==0?t=!1:(Va=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(n,t)):Yl(n)}function Yl(t){var n=t;do{if((n.flags&32768)!==0){Hg(n,Va);return}t=n.return;var a=Bx(n.alternate,n,fa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);ln===0&&(ln=5)}function Hg(t,n){do{var a=Fx(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);ln=6,gt=null}function Gg(t,n,a,o,u,f,_,R,F){t.cancelPendingCommit=null;do Zl();while(Sn!==0);if((wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=gu,Kt(t,a,f,_,R,F),t===Xt&&(gt=Xt=null,_t=0),ps=n,Wa=t,da=a,Tf=f,Af=u,Dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jx(j,function(){return qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=H.p,H.p=2,_=wt,wt|=4;try{Hx(t,n,a)}finally{wt=_,H.p=u,B.T=o}}Sn=1,Vg(),kg(),Xg()}}function Vg(){if(Sn===1){Sn=0;var t=Wa,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=wt;wt|=4;try{Mg(n,t);var f=Gf,_=Cp(t.containerInfo),R=f.focusedElem,F=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Rp(R.ownerDocument.documentElement,R)){if(F!==null&&fu(R)){var te=F.start,_e=F.end;if(_e===void 0&&(_e=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(_e,R.value.length);else{var Se=R.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var ue=oe.getSelection(),We=R.textContent.length,tt=Math.min(F.start,We),Vt=F.end===void 0?tt:Math.min(F.end,We);!ue.extend&&tt>Vt&&(_=Vt,Vt=tt,tt=_);var K=Ap(R,tt),V=Ap(R,Vt);if(K&&V&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==V.node||ue.focusOffset!==V.offset)){var ee=Se.createRange();ee.setStart(K.node,K.offset),ue.removeAllRanges(),tt>Vt?(ue.addRange(ee),ue.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),ue.addRange(ee))}}}}for(Se=[],ue=R;ue=ue.parentNode;)ue.nodeType===1&&Se.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ye=Se[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}sc=!!Hf,Gf=Hf=null}finally{wt=u,H.p=o,B.T=a}}t.current=n,Sn=2}}function kg(){if(Sn===2){Sn=0;var t=Wa,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=wt;wt|=4;try{vg(t,n.alternate,n)}finally{wt=u,H.p=o,B.T=a}}Sn=3}}function Xg(){if(Sn===4||Sn===3){Sn=0,Y();var t=Wa,n=ps,a=da,o=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,ps=Wa=null,Wg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Ys(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{B.T=n,H.p=u}}(da&3)!==0&&Zl(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Rf?Ao++:(Ao=0,Rf=t):Ao=0,Ro(0)}}function Wg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Zl(){return Vg(),kg(),Xg(),qg()}function qg(){if(Sn!==5)return!1;var t=Wa,n=Tf;Tf=0;var a=Ys(da),o=B.T,u=H.p;try{H.p=32>a?32:a,B.T=null,a=Af,Af=null;var f=Wa,_=da;if(Sn=0,ps=Wa=null,da=0,(wt&6)!==0)throw Error(r(331));var R=wt;if(wt|=4,Rg(f.current),Eg(f,f.current,_,a),wt=R,Ro(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{H.p=u,B.T=o,Wg(t,n)}}function Yg(t,n,a){n=pi(a,n),n=rf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Ve(t,2),Bi(t))}function zt(t,n,a){if(t.tag===3)Yg(t,t,a);else for(;n!==null;){if(n.tag===3){Yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=pi(a,t),a=Zm(2),o=Ba(n,a,2),o!==null&&(Km(a,o,n,t),Ve(o,2),Bi(o));break}}n=n.return}}function Df(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Mf=!0,u.add(a),t=Zx.bind(null,t,n,a),n.then(t,t))}function Zx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(_t&a)===a&&(ln===4||ln===3&&(_t&62914560)===_t&&300>Ft()-Vl?(wt&2)===0&&ms(t,0):bf|=a,hs===_t&&(hs=0)),Bi(t)}function Zg(t,n){n===0&&(n=be()),t=_r(t,n),t!==null&&(Ve(t,n),Bi(t))}function Kx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zg(t,a)}function Qx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Zg(t,a)}function jx(t,n){return cn(t,n)}var Kl=null,vs=null,Uf=!1,Ql=!1,Nf=!1,Ya=0;function Bi(t){t!==vs&&t.next===null&&(vs===null?Kl=vs=t:vs=vs.next=t),Ql=!0,Uf||(Uf=!0,$x())}function Ro(t,n){if(!Nf&&Ql){Nf=!0;do for(var a=!1,o=Kl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jg(o,f))}else f=_t,f=xe(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,Jg(o,f));o=o.next}while(a);Nf=!1}}function Jx(){Kg()}function Kg(){Ql=Uf=!1;var t=0;Ya!==0&&cy()&&(t=Ya);for(var n=Ft(),a=null,o=Kl;o!==null;){var u=o.next,f=Qg(o,n);f===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(vs=a)):(a=o,(t!==0||(f&3)!==0)&&(Ql=!0)),o=u}Sn!==0&&Sn!==5||Ro(t),Ya!==0&&(Ya=0)}function Qg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Fe(f),R=1<<_,F=u[_];F===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Be(R,n)):F<=n&&(t.expiredLanes|=R),f&=~R}if(n=Xt,a=_t,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&qt(o),Ys(a)){case 2:case 8:a=b;break;case 32:a=j;break;case 268435456:a=pe;break;default:a=j}return o=jg.bind(null,t),a=cn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&qt(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zl()&&t.callbackNode!==a)return null;var o=_t;return o=xe(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),Qg(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Jg(t,n){if(Zl())return null;Ng(t,n,!0)}function $x(){fy(function(){(wt&6)!==0?cn(U,Jx):Kg()})}function Lf(){if(Ya===0){var t=ns;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),Ya=t}return Ya}function $g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pr(""+t)}function e0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ey(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=$g((u[An]||null).action),_=o.submitter;_&&(n=(n=_[An]||null)?$g(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new ll("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var F=_?e0(u,_):new FormData(u);Ju(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=_?e0(u,_):new FormData(u),Ju(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Of=0;Of<mu.length;Of++){var Pf=mu[Of],ty=Pf.toLowerCase(),ny=Pf[0].toUpperCase()+Pf.slice(1);Ti(ty,"on"+ny)}Ti(Up,"onAnimationEnd"),Ti(Np,"onAnimationIteration"),Ti(Lp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(_x,"onTransitionRun"),Ti(xx,"onTransitionStart"),Ti(yx,"onTransitionCancel"),Ti(Op,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function t0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],F=R.instance,te=R.currentTarget;if(R=R.listener,F!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(_e){fl(_e)}u.currentTarget=null,f=F}else for(_=0;_<o.length;_++){if(R=o[_],F=R.instance,te=R.currentTarget,R=R.listener,F!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(_e){fl(_e)}u.currentTarget=null,f=F}}}}function vt(t,n){var a=n[fr];a===void 0&&(a=n[fr]=new Set);var o=t+"__bubble";a.has(o)||(n0(n,t,2,!1),a.add(o))}function If(t,n,a){var o=0;n&&(o|=4),n0(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[jl]){t[jl]=!0,al.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||If(a,!1,t),If(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,If("selectionchange",!1,n))}}function n0(t,n,a,o){switch(U0(n)){case 2:var u=Uy;break;case 8:u=Ny;break;default:u=Jf}a=u.bind(null,n,a,t),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Bf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ki(R),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){o=f=_;continue e}R=R.parentNode}}o=o.return}op(function(){var te=f,_e=eu(a),Se=[];e:{var oe=Pp.get(t);if(oe!==void 0){var ue=ll,We=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ue=Q_;break;case"focusin":We="focus",ue=su;break;case"focusout":We="blur",ue=su;break;case"beforeblur":case"afterblur":ue=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=B_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=$_;break;case Up:case Np:case Lp:ue=G_;break;case Op:ue=tx;break;case"scroll":case"scrollend":ue=I_;break;case"wheel":ue=ix;break;case"copy":case"cut":case"paste":ue=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=dp;break;case"toggle":case"beforetoggle":ue=rx}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),K=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var V=te,ee;V!==null;){var ye=V;if(ee=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ee===null||K===null||(ye=Ks(V,K),ye!=null&&tt.push(wo(V,ye,ee))),Vt)break;V=V.return}0<tt.length&&(oe=new ue(oe,We,null,a,_e),Se.push({event:oe,listeners:tt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",oe&&a!==$c&&(We=a.relatedTarget||a.fromElement)&&(Ki(We)||We[Vn]))break e;if((ue||oe)&&(oe=_e.window===_e?_e:(oe=_e.ownerDocument)?oe.defaultView||oe.parentWindow:window,ue?(We=a.relatedTarget||a.toElement,ue=te,We=We?Ki(We):null,We!==null&&(Vt=c(We),tt=We.tag,We!==Vt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(ue=null,We=te),ue!==We)){if(tt=up,ye="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=dp,ye="onPointerLeave",K="onPointerEnter",V="pointer"),Vt=ue==null?oe:hr(ue),ee=We==null?oe:hr(We),oe=new tt(ye,V+"leave",ue,a,_e),oe.target=Vt,oe.relatedTarget=ee,ye=null,Ki(_e)===te&&(tt=new tt(K,V+"enter",We,a,_e),tt.target=ee,tt.relatedTarget=Vt,ye=tt),Vt=ye,ue&&We)t:{for(tt=ay,K=ue,V=We,ee=0,ye=K;ye;ye=tt(ye))ee++;ye=0;for(var et=V;et;et=tt(et))ye++;for(;0<ee-ye;)K=tt(K),ee--;for(;0<ye-ee;)V=tt(V),ye--;for(;ee--;){if(K===V||V!==null&&K===V.alternate){tt=K;break t}K=tt(K),V=tt(V)}tt=null}else tt=null;ue!==null&&i0(Se,oe,ue,tt,!1),We!==null&&Vt!==null&&i0(Se,Vt,We,tt,!0)}}e:{if(oe=te?hr(te):window,ue=oe.nodeName&&oe.nodeName.toLowerCase(),ue==="select"||ue==="input"&&oe.type==="file")var At=yp;else if(_p(oe))if(Sp)At=mx;else{At=hx;var Ze=dx}else ue=oe.nodeName,!ue||ue.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&Dt(te.elementType)&&(At=yp):At=px;if(At&&(At=At(t,te))){xp(Se,At,a,_e);break e}Ze&&Ze(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&mt(oe,"number",oe.value)}switch(Ze=te?hr(te):window,t){case"focusin":(_p(Ze)||Ze.contentEditable==="true")&&(Zr=Ze,du=te,io=null);break;case"focusout":io=du=Zr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,wp(Se,a,_e);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":wp(Se,a,_e)}var ft;if(lu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Yr?gp(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(hp&&a.locale!=="ko"&&(Yr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Yr&&(ft=lp()):(Ua=_e,iu="value"in Ua?Ua.value:Ua.textContent,Yr=!0)),Ze=Jl(te,xt),0<Ze.length&&(xt=new fp(xt,t,null,a,_e),Se.push({event:xt,listeners:Ze}),ft?xt.data=ft:(ft=vp(a),ft!==null&&(xt.data=ft)))),(ft=ox?lx(t,a):cx(t,a))&&(xt=Jl(te,"onBeforeInput"),0<xt.length&&(Ze=new fp("onBeforeInput","beforeinput",null,a,_e),Se.push({event:Ze,listeners:xt}),Ze.data=ft)),ey(Se,t,te,a,_e)}t0(Se,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Jl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ks(t,a),u!=null&&o.unshift(wo(t,u,f)),u=Ks(t,n),u!=null&&o.push(wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ay(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i0(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,F=R.alternate,te=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||te===null||(F=te,u?(te=Ks(a,f),te!=null&&_.unshift(wo(a,te,F))):u||(te=Ks(a,f),te!=null&&_.push(wo(a,te,F)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ry=/\r\n?/g,sy=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(ry,`
`).replace(sy,"")}function r0(t,n){return n=a0(n),a0(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Le(t,a,o))}}function Ff(t,n,a,o,u,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ti(t,o):(typeof o=="number"||typeof o=="bigint")&&ti(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,_,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=f=_=u=null,F=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":_=_e;break;case"checked":F=_e;break;case"defaultChecked":te=_e;break;case"value":f=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Gt(t,n,o,_e,a,null)}}Ln(t,f,R,F,te,_,u,!1);return;case"select":vt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Gt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?yn(t,!!o,n,!1):a!=null&&yn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(t,n,_,R,a,null)}bi(t,o,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(t,n,F,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)vt(Co[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,te,o,a,null)}return;default:if(Dt(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&Ff(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Gt(t,n,R,o,a,null))}function oy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,F=null,te=null,_e=null;for(ue in a){var Se=a[ue];if(a.hasOwnProperty(ue)&&Se!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(ue)||Gt(t,n,ue,null,o,Se)}}for(var oe in o){var ue=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(ue!=null||Se!=null))switch(oe){case"type":f=ue;break;case"name":u=ue;break;case"checked":te=ue;break;case"defaultChecked":_e=ue;break;case"value":_=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==Se&&Gt(t,n,oe,ue,o,Se)}}He(t,_,R,F,te,_e,f,u);return;case"select":ue=_=R=oe=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ue=F;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==F&&Gt(t,n,u,f,o,F)}n=R,a=_,o=ue,oe!=null?yn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?yn(t,!!a,n,!0):yn(t,!!a,a?[]:"",!1));return;case"textarea":ue=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":oe=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(t,n,_,u,o,f)}ei(t,oe,ue);return;case"option":for(var We in a)oe=a[We],a.hasOwnProperty(We)&&oe!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Gt(t,n,We,null,o,oe));for(F in o)oe=o[F],ue=a[F],o.hasOwnProperty(F)&&oe!==ue&&(oe!=null||ue!=null)&&(F==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Gt(t,n,F,oe,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)oe=a[tt],a.hasOwnProperty(tt)&&oe!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,oe);for(te in o)if(oe=o[te],ue=a[te],o.hasOwnProperty(te)&&oe!==ue&&(oe!=null||ue!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Gt(t,n,te,oe,o,ue)}return;default:if(Dt(n)){for(var Vt in a)oe=a[Vt],a.hasOwnProperty(Vt)&&oe!==void 0&&!o.hasOwnProperty(Vt)&&Ff(t,n,Vt,void 0,o,oe);for(_e in o)oe=o[_e],ue=a[_e],!o.hasOwnProperty(_e)||oe===ue||oe===void 0&&ue===void 0||Ff(t,n,_e,oe,o,ue);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&Gt(t,n,K,null,o,oe);for(Se in o)oe=o[Se],ue=a[Se],!o.hasOwnProperty(Se)||oe===ue||oe==null&&ue==null||Gt(t,n,Se,oe,o,ue)}function s0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&s0(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],te=F.startTime;if(te>R)break;var _e=F.transferSize,Se=F.initiatorType;_e&&s0(Se)&&(F=F.responseEnd,_+=_e*(F<R?1:(R-te)/(F-te)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Gf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function o0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function cy(){var t=window.event;return t&&t.type==="popstate"?t===kf?!1:(kf=t,!0):(kf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(dy)}:c0;function dy(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function f0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);Ss(n)}function d0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function py(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function h0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function Wf(t){return t.data==="$?"||t.data==="$~"}function qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function my(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yf=null;function p0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function m0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function g0(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ca(t)}var yi=new Map,v0=new Set;function ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=H.d;H.d={f:gy,r:vy,D:_y,C:xy,L:yy,m:Sy,X:by,S:My,M:Ey};function gy(){var t=ha.f(),n=Wl();return t||n}function vy(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):ha.r(t)}var _s=typeof document>"u"?null:document;function _0(t,n,a){var o=_s;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),v0.has(u)||(v0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function _y(t){ha.D(t),_0("dns-prefetch",t,null)}function xy(t,n){ha.C(t,n),_0("preconnect",t,n)}function yy(t,n,a){ha.L(t,n,a);var o=_s;if(o&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=xs(t);break;case"script":f=ys(t)}yi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(f))||n==="script"&&o.querySelector(No(f))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function Sy(t,n){ha.m(t,n);var a=_s;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ys(t)}if(!yi.has(f)&&(t=x({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function My(t,n,a){ha.S(t,n,a);var o=_s;if(o&&t){var u=wa(o).hoistableStyles,f=xs(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Uo(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&Zf(t,a);var F=_=o.createElement("link");hn(F),Dn(F,"link",t),F._p=new Promise(function(te,_e){F.onload=te,F.onerror=_e}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function by(t,n){ha.X(t,n);var a=_s;if(a&&t){var o=wa(a).hoistableScripts,u=ys(t),f=o.get(u);f||(f=a.querySelector(No(u)),f||(t=x({src:t,async:!0},n),(n=yi.get(u))&&Kf(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ey(t,n){ha.M(t,n);var a=_s;if(a&&t){var o=wa(a).hoistableScripts,u=ys(t),f=o.get(u);f||(f=a.querySelector(No(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Kf(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function x0(t,n,a,o){var u=(u=ae.current)?ec(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var f=wa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Uo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||Ty(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ys(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function xs(t){return'href="'+Ot(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function y0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Ty(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function ys(t){return'[src="'+Ot(t)+'"]'}function No(t){return"script[async]"+t}function S0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",u),tc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xs(a.href);var f=t.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=y0(a),(u=yi.get(u))&&Zf(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),Dn(f,"link",o),n.state.loading|=4,tc(f,a.precedence,t),n.instance=f;case"script":return f=ys(a.src),(u=t.querySelector(No(f)))?(n.instance=u,hn(u),u):(o=a,(u=yi.get(f))&&(o=x({},a),Kf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tc(o,a.precedence,t));return n.instance}function tc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function M0(t,n,a){if(nc===null){var o=new Map,u=nc=new Map;u.set(a,o)}else u=nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ra]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function b0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ay(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ry(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xs(o.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ic.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=y0(o),(u=yi.get(u))&&Zf(o,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ic.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function Cy(t,n){return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Qf===0&&(Qf=62500*ly());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(wy,t),ac=null,ic.call(t))}function wy(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var o=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=ic.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:P,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Dy(t,n,a,o,u,f,_,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function T0(t,n,a,o,u,f,_,R,F,te,_e,Se){return t=new Dy(t,n,a,_,F,te,_e,Se,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=Cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nu(f),t}function A0(t){return t?(t=jr,t):jr}function R0(t,n,a,o,u,f){u=A0(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(t,o,n),a!==null&&(Zn(a,t,n),uo(a,t,n))}function C0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jf(t,n){C0(t,n),(t=t.alternate)&&C0(t,n)}function w0(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&Zn(n,t,67108864),jf(t,67108864)}}function D0(t){if(t.tag===13||t.tag===31){var n=li();n=qs(n);var a=_r(t,n);a!==null&&Zn(a,t,n),jf(t,n)}}var sc=!0;function Uy(t,n,a,o){var u=B.T;B.T=null;var f=H.p;try{H.p=2,Jf(t,n,a,o)}finally{H.p=f,B.T=u}}function Ny(t,n,a,o){var u=B.T;B.T=null;var f=H.p;try{H.p=8,Jf(t,n,a,o)}finally{H.p=f,B.T=u}}function Jf(t,n,a,o){if(sc){var u=$f(o);if(u===null)Bf(t,n,o,oc,a),N0(t,o);else if(Oy(u,t,n,a,o))o.stopPropagation();else if(N0(t,o),n&4&&-1<Ly.indexOf(t)){for(;u!==null;){var f=Qi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Re(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var F=1<<31-Fe(_);R.entanglements[1]|=F,_&=~F}Bi(f),(wt&6)===0&&(kl=Ft()+500,Ro(0))}}break;case 31:case 13:R=_r(f,2),R!==null&&Zn(R,f,2),Wl(),jf(f,2)}if(f=$f(o),f===null&&Bf(t,n,o,oc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Bf(t,n,o,null,a)}}function $f(t){return t=eu(t),ed(t)}var oc=null;function ed(t){if(oc=null,t=Ki(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return oc=t,null}function U0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case U:return 2;case b:return 8;case j:case re:return 32;case pe:return 268435456;default:return 32}default:return 32}}var td=!1,Ka=null,Qa=null,ja=null,Oo=new Map,Po=new Map,Ja=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Io(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qi(n),n!==null&&w0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Oy(t,n,a,o,u){switch(n){case"focusin":return Ka=Io(Ka,t,n,a,o,u),!0;case"dragenter":return Qa=Io(Qa,t,n,a,o,u),!0;case"mouseover":return ja=Io(ja,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Io(Oo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Io(Po.get(f)||null,t,n,a,o,u)),!0}return!1}function L0(t){var n=Ki(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){D0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){D0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$f(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);$c=o,a.target.dispatchEvent(o),$c=null}else return n=Qi(a),n!==null&&w0(n),t.blockedOn=a,!1;n.shift()}return!0}function O0(t,n,a){lc(t)&&a.delete(n)}function Py(){td=!1,Ka!==null&&lc(Ka)&&(Ka=null),Qa!==null&&lc(Qa)&&(Qa=null),ja!==null&&lc(ja)&&(ja=null),Oo.forEach(O0),Po.forEach(O0)}function cc(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Py)))}var uc=null;function P0(t){uc!==t&&(uc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uc===t&&(uc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ed(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ss(t){function n(F){return cc(F,t)}Ka!==null&&cc(Ka,t),Qa!==null&&cc(Qa,t),ja!==null&&cc(ja,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[An]||null;if(typeof f=="function")_||P0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[An]||null)R=_.formAction;else if(ed(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),P0(a)}}}function I0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nd(t){this._internalRoot=t}fc.prototype.render=nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=li();R0(a,o,t,n,null,null)},fc.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;R0(t.current,2,null,t,null,null),Wl(),n[Vn]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&L0(t)}};var z0=e.version;if(z0!=="19.2.8")throw Error(r(527,z0,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Iy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{de=dc.inject(Iy),me=dc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Xm,f=Wm,_=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=T0(t,1,!1,null,null,a,o,null,u,f,_,I0),t[Vn]=n.current,zf(t),new nd(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Xm,_=Wm,R=qm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=T0(t,1,!0,n,a??null,o,u,F,f,_,R,I0),n.context=A0(null),a=n.current,o=li(),o=qs(o),u=za(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Bi(n),t[Vn]=n.current,zf(t),new fc(n)},Bo.version="19.2.8",Bo}var Y0;function qy(){if(Y0)return rd.exports;Y0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rd.exports=Wy(),rd.exports}var Yy=qy();const Zy=[{id:1,title:"Galen's Model of the Eye",date:"2nd Century",description:"Galen posited the crystalline lens as the principal instrument of vision. His anatomical model influenced centuries of thought.",literaryConnection:"Dante's emphasis on pure light and the initial structure of his cosmos echo Galenic perfection."},{id:2,title:"Alhazen's Book of Optics",date:"11th Century",description:"Influential on medieval perspectivism, Alhazen proved intromission theory—that light enters the eye rather than being emitted from it.",literaryConnection:"Provides the optical framework for Dante's progressive adaptation to blinding divine light."},{id:3,title:"Vesalius's Fabrica",date:"1543",description:"Revolutionized anatomical dissection, breaking down the eye into structural parts verifiable by the medical gaze.",literaryConnection:"The corpse becomes an object of intense scrutiny, shifting the focus from mystical light to physical flesh."},{id:4,title:"Kepler's Discovery of the Retina",date:"1604",description:"Kepler identified the retina, not the lens, as the seat of vision.",literaryConnection:"Corresponds to Dante's Empyrean as the 'eye of God', an inverted image forming the true reality."},{id:5,title:"Descartes & the Camera Obscura",date:"17th Century",description:"Descartes modeled the eye as a mechanical camera obscura, leading to the mind/body dualism.",literaryConnection:"Prefigures the modern detachment of the viewing subject from the observed object."},{id:6,title:"Forensic Pathology",date:"19th Century",description:"The rise of medicalization of the corpse. Exploring the body as a site of trauma and history.",literaryConnection:"Echoes Frankenstein's assembled body and the preservation of Tollund Man's eyes in Heaney's poetry."}],Ky=[{id:1,title:"The Anatomical Venus",type:"Early modern anatomical plate",image:"/anatomical_venus.jpg",description:"Wax models depicting dissected faces and eyes, blending the beautiful with the macabre."},{id:2,title:"Tollund Man",type:"Forensic Photograph",description:"As catalogued in Glob's 'The Bog People'. A preserved corpse that becomes an object of both forensic and poetic inquiry."},{id:3,title:"Frankenstein's Assembly",type:"Literary Medicalization",description:"The creation of life from the fragments of the dead, viewed through the physician's eye."}];function Qy(){return he.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[he.jsx("h2",{style:{marginBottom:"2rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Eye Timeline"}),he.jsx("div",{className:"timeline",style:{position:"relative",borderLeft:"2px solid var(--accent-gold)",paddingLeft:"2rem",marginLeft:"1rem"},children:Zy.map((s,e)=>he.jsxs("div",{className:"timeline-item interactive-card",style:{marginBottom:"2rem",padding:"1.5rem",background:"var(--bg-secondary)",borderRadius:"12px",position:"relative"},children:[he.jsx("div",{style:{position:"absolute",left:"-2.65rem",top:"1.5rem",width:"16px",height:"16px",borderRadius:"50%",background:"var(--accent-crimson)",border:"3px solid var(--bg-primary)"}}),he.jsx("span",{style:{color:"var(--accent-gold)",fontWeight:"bold",display:"block",marginBottom:"0.5rem"},children:s.date}),he.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem"},children:s.title}),he.jsxs("p",{style:{marginBottom:"1rem"},children:[he.jsx("strong",{children:"Medical History:"})," ",s.description]}),he.jsxs("p",{style:{color:"#d0d0d0"},children:[he.jsx("em",{children:"Literary Connection:"})," ",s.literaryConnection]})]},s.id))})]})}const Bh="185",jy=0,Z0=1,Jy=2,Ic=1,$y=2,qo=3,Ea=0,Qn=1,Un=2,Ma=0,Is=1,K0=2,Q0=3,j0=4,eS=5,Ir=100,tS=101,nS=102,iS=103,aS=104,rS=200,sS=201,oS=202,lS=203,Wd=204,qd=205,cS=206,uS=207,fS=208,dS=209,hS=210,pS=211,mS=212,gS=213,vS=214,Yd=0,Zd=1,Kd=2,Fs=3,Qd=4,jd=5,Jd=6,$d=7,t_=0,_S=1,xS=2,Xi=0,n_=1,i_=2,a_=3,Fh=4,r_=5,s_=6,o_=7,l_=300,Gr=301,Hs=302,cd=303,ud=304,Kc=306,eh=1e3,Sa=1001,th=1002,Nn=1003,yS=1004,hc=1005,zn=1006,fd=1007,Br=1008,di=1009,c_=1010,u_=1011,Ko=1012,Hh=1013,Yi=1014,Vi=1015,Ta=1016,Gh=1017,Vh=1018,Qo=1020,f_=35902,d_=35899,h_=1021,p_=1022,Ni=1023,Aa=1026,Fr=1027,m_=1028,kh=1029,Vr=1030,Xh=1031,Wh=1033,zc=33776,Bc=33777,Fc=33778,Hc=33779,nh=35840,ih=35841,ah=35842,rh=35843,sh=36196,oh=37492,lh=37496,ch=37488,uh=37489,Vc=37490,fh=37491,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,_h=37814,xh=37815,yh=37816,Sh=37817,Mh=37818,bh=37819,Eh=37820,Th=37821,Ah=36492,Rh=36494,Ch=36495,wh=36283,Dh=36284,kc=36285,Uh=36286,SS=3200,Nh=0,MS=1,or="",Mi="srgb",Xc="srgb-linear",Wc="linear",Bt="srgb",Ms=7680,J0=519,bS=512,ES=513,TS=514,qh=515,AS=516,RS=517,Yh=518,CS=519,$0=35044,ev="300 es",ki=2e3,jo=2001;function wS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function DS(){const s=qc("canvas");return s.style.display="block",s}const tv={};function nv(...s){const e="THREE."+s.shift();console.log(e,...s)}function g_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=g_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Et(...s){s=g_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function zs(...s){const e=s.join(" ");e in tv||(tv[e]=!0,nt(...s))}function US(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const NS={[Yd]:Zd,[Kd]:Jd,[Qd]:$d,[Fs]:jd,[Zd]:Yd,[Jd]:Kd,[$d]:Qd,[jd]:Fs};class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Lh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function LS(s,e){return(s%e+e)%e}function hd(s,e,i){return(1-i)*s+i*e}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let ht=tp;class ks{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],v=r[l+2],x=r[l+3],g=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(x!==C||m!==g||h!==M||v!==T){let S=m*g+h*M+v*T+x*C;S<0&&(g=-g,M=-M,T=-T,C=-C,S=-S);let y=1-p;if(S<.9995){const O=Math.acos(S),P=Math.sin(O);y=Math.sin(y*O)/P,p=Math.sin(p*O)/P,m=m*y+g*p,h=h*y+M*p,v=v*y+T*p,x=x*y+C*p}else{m=m*y+g*p,h=h*y+M*p,v=v*y+T*p,x=x*y+C*p;const O=1/Math.sqrt(m*m+h*h+v*v+x*x);m*=O,h*=O,v*=O,x*=O}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],x=c[d],g=c[d+1],M=c[d+2],T=c[d+3];return e[i]=p*T+v*x+m*M-h*g,e[i+1]=m*T+v*g+h*x-p*M,e[i+2]=h*T+v*M+p*g-m*x,e[i+3]=v*T-p*x-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),x=p(c/2),g=m(r/2),M=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*v*x+h*M*T,this._y=h*M*x-g*v*T,this._z=h*v*T+g*M*x,this._w=h*v*x-g*M*T;break;case"YXZ":this._x=g*v*x+h*M*T,this._y=h*M*x-g*v*T,this._z=h*v*T-g*M*x,this._w=h*v*x+g*M*T;break;case"ZXY":this._x=g*v*x-h*M*T,this._y=h*M*x+g*v*T,this._z=h*v*T+g*M*x,this._w=h*v*x-g*M*T;break;case"ZYX":this._x=g*v*x-h*M*T,this._y=h*M*x+g*v*T,this._z=h*v*T-g*M*x,this._w=h*v*x+g*M*T;break;case"YZX":this._x=g*v*x+h*M*T,this._y=h*M*x+g*v*T,this._z=h*v*T-g*M*x,this._w=h*v*x-g*M*T;break;case"XZY":this._x=g*v*x-h*M*T,this._y=h*M*x-g*v*T,this._z=h*v*T+g*M*x,this._w=h*v*x+g*M*T;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],x=i[10],g=r+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(r>p&&r>x){const M=2*Math.sqrt(1+r-p-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>x){const M=2*Math.sqrt(1+p-r-x);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-r-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-r*h,this._z=c*v+d*h+r*m-l*p,this._w=d*v-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(iv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(iv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),v=2*(p*i-c*l),x=2*(c*r-d*i);return this.x=i+m*h+d*x-p*v,this.y=r+m*v+p*h-c*x,this.z=l+m*x+c*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let J=np;const pd=new J,iv=new ks,ip=class ip{constructor(e,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],v=r[4],x=r[7],g=r[2],M=r[5],T=r[8],C=l[0],S=l[3],y=l[6],O=l[1],P=l[4],w=l[7],z=l[2],N=l[5],I=l[8];return c[0]=d*C+p*O+m*z,c[3]=d*S+p*P+m*N,c[6]=d*y+p*w+m*I,c[1]=h*C+v*O+x*z,c[4]=h*S+v*P+x*N,c[7]=h*y+v*w+x*I,c[2]=g*C+M*O+T*z,c[5]=g*S+M*P+T*N,c[8]=g*y+M*w+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*d*v-i*p*h-r*c*v+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=v*d-p*h,g=p*m-v*c,M=h*c-d*m,T=i*x+r*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*h-v*r)*C,e[2]=(p*r-l*d)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,i)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,i){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let st=ip;const md=new st,av=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const s={enabled:!0,workingColorSpace:Xc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Bt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?Wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xc]:{primaries:e,whitePoint:r,transfer:Wc,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),s}const bt=OS();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class PS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bs===void 0&&(bs=qc("canvas")),bs.width=e.width,bs.height=e.height;const l=bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=bs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IS=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?PS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let zS=0;const vd=new J;class Bn extends kr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=Sa,l=Sa,c=zn,d=Br,p=Ni,m=di,h=Bn.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=$o(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=l_;Bn.DEFAULT_ANISOTROPY=1;const ap=class ap{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],v=m[4],x=m[8],g=m[1],M=m[5],T=m[9],C=m[2],S=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+C)<.1&&Math.abs(T+S)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,w=(M+1)/2,z=(y+1)/2,N=(v+g)/4,I=(x+C)/4,E=(T+S)/4;return P>w&&P>z?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=N/r,c=I/r):w>z?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=N/l,c=E/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=I/c,l=E/c),this.set(r,l,c,i),this}let O=Math.sqrt((S-T)*(S-T)+(x-C)*(x-C)+(g-v)*(g-v));return Math.abs(O)<.001&&(O=1),this.x=(S-T)/O,this.y=(x-C)/O,this.z=(g-v)/O,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ap.prototype.isVector4=!0;let en=ap;class BS extends kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends BS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class v_ extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=class Zc{constructor(e,i,r,l,c,d,p,m,h,v,x,g,M,T,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,v,x,g,M,T,C,S)}set(e,i,r,l,c,d,p,m,h,v,x,g,M,T,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=d,y[9]=p,y[13]=m,y[2]=h,y[6]=v,y[10]=x,y[14]=g,y[3]=M,y[7]=T,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Es.setFromMatrixColumn(e,0).length(),c=1/Es.setFromMatrixColumn(e,1).length(),d=1/Es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=d*v,M=d*x,T=p*v,C=p*x;i[0]=m*v,i[4]=-m*x,i[8]=h,i[1]=M+T*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=T+M*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,M=m*x,T=h*v,C=h*x;i[0]=g+C*p,i[4]=T*p-M,i[8]=d*h,i[1]=d*x,i[5]=d*v,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,M=m*x,T=h*v,C=h*x;i[0]=g-C*p,i[4]=-d*x,i[8]=T+M*p,i[1]=M+T*p,i[5]=d*v,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,M=d*x,T=p*v,C=p*x;i[0]=m*v,i[4]=T*h-M,i[8]=g*h+C,i[1]=m*x,i[5]=C*h+g,i[9]=M*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*v,i[4]=C-g*x,i[8]=T*x+M,i[1]=x,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*x+T,i[10]=g-C*x}else if(e.order==="XZY"){const g=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*v,i[4]=-x,i[8]=h*v,i[1]=g*x+C,i[5]=d*v,i[9]=M*x-T,i[2]=T*x-M,i[6]=p*v,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HS,e,GS)}lookAt(e,i,r){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),er.crossVectors(r,ci),er.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),er.crossVectors(r,ci)),er.normalize(),pc.crossVectors(ci,er),l[0]=er.x,l[4]=pc.x,l[8]=ci.x,l[1]=er.y,l[5]=pc.y,l[9]=ci.y,l[2]=er.z,l[6]=pc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],v=r[1],x=r[5],g=r[9],M=r[13],T=r[2],C=r[6],S=r[10],y=r[14],O=r[3],P=r[7],w=r[11],z=r[15],N=l[0],I=l[4],E=l[8],D=l[12],X=l[1],G=l[5],W=l[9],ce=l[13],ge=l[2],Q=l[6],B=l[10],H=l[14],$=l[3],fe=l[7],Ee=l[11],L=l[15];return c[0]=d*N+p*X+m*ge+h*$,c[4]=d*I+p*G+m*Q+h*fe,c[8]=d*E+p*W+m*B+h*Ee,c[12]=d*D+p*ce+m*H+h*L,c[1]=v*N+x*X+g*ge+M*$,c[5]=v*I+x*G+g*Q+M*fe,c[9]=v*E+x*W+g*B+M*Ee,c[13]=v*D+x*ce+g*H+M*L,c[2]=T*N+C*X+S*ge+y*$,c[6]=T*I+C*G+S*Q+y*fe,c[10]=T*E+C*W+S*B+y*Ee,c[14]=T*D+C*ce+S*H+y*L,c[3]=O*N+P*X+w*ge+z*$,c[7]=O*I+P*G+w*Q+z*fe,c[11]=O*E+P*W+w*B+z*Ee,c[15]=O*D+P*ce+w*H+z*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],x=e[6],g=e[10],M=e[14],T=e[3],C=e[7],S=e[11],y=e[15],O=m*M-h*g,P=p*M-h*x,w=p*g-m*x,z=d*M-h*v,N=d*g-m*v,I=d*x-p*v;return i*(C*O-S*P+y*w)-r*(T*O-S*z+y*N)+l*(T*P-C*z+y*I)-c*(T*w-C*N+S*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(d*v-p*h)-r*(c*v-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=e[9],g=e[10],M=e[11],T=e[12],C=e[13],S=e[14],y=e[15],O=i*p-r*d,P=i*m-l*d,w=i*h-c*d,z=r*m-l*p,N=r*h-c*p,I=l*h-c*m,E=v*C-x*T,D=v*S-g*T,X=v*y-M*T,G=x*S-g*C,W=x*y-M*C,ce=g*y-M*S,ge=O*ce-P*W+w*G+z*X-N*D+I*E;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ge;return e[0]=(p*ce-m*W+h*G)*Q,e[1]=(l*W-r*ce-c*G)*Q,e[2]=(C*I-S*N+y*z)*Q,e[3]=(g*N-x*I-M*z)*Q,e[4]=(m*X-d*ce-h*D)*Q,e[5]=(i*ce-l*X+c*D)*Q,e[6]=(S*w-T*I-y*P)*Q,e[7]=(v*I-g*w+M*P)*Q,e[8]=(d*W-p*X+h*E)*Q,e[9]=(r*X-i*W-c*E)*Q,e[10]=(T*N-C*w+y*O)*Q,e[11]=(x*w-v*N-M*O)*Q,e[12]=(p*D-d*G-m*E)*Q,e[13]=(i*G-r*D+l*E)*Q,e[14]=(C*P-T*z-S*O)*Q,e[15]=(v*z-x*P+g*O)*Q,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,v=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,x=p+p,g=c*h,M=c*v,T=c*x,C=d*v,S=d*x,y=p*x,O=m*h,P=m*v,w=m*x,z=r.x,N=r.y,I=r.z;return l[0]=(1-(C+y))*z,l[1]=(M+w)*z,l[2]=(T-P)*z,l[3]=0,l[4]=(M-w)*N,l[5]=(1-(g+y))*N,l[6]=(S+O)*N,l[7]=0,l[8]=(T+P)*I,l[9]=(S-O)*I,l[10]=(1-(g+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Es.set(l[0],l[1],l[2]).length();const p=Es.set(l[4],l[5],l[6]).length(),m=Es.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ci.copy(this);const h=1/d,v=1/p,x=1/m;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,i.setFromRotationMatrix(Ci),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=ki,m=!1){const h=this.elements,v=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let T,C;if(m)T=c/(d-c),C=d*c/(d-c);else if(p===ki)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===jo)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=ki,m=!1){const h=this.elements,v=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,C;if(m)T=1/(d-c),C=d/(d-c);else if(p===ki)T=-2/(d-c),C=-(d+c)/(d-c);else if(p===jo)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Zc.prototype.isMatrix4=!0;let tn=Zc;const Es=new J,Ci=new tn,HS=new J(0,0,0),GS=new J(1,1,1),er=new J,pc=new J,ci=new J,sv=new tn,ov=new ks;class ur{constructor(e=0,i=0,r=0,l=ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ov.setFromEuler(this),this.setFromQuaternion(ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ur.DEFAULT_ORDER="XYZ";class Kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VS=0;const lv=new J,Ts=new ks,pa=new tn,mc=new J,Ho=new J,kS=new J,XS=new ks,cv=new J(1,0,0),uv=new J(0,1,0),fv=new J(0,0,1),dv={type:"added"},WS={type:"removed"},As={type:"childadded",child:null},_d={type:"childremoved",child:null};class Fn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new J,i=new ur,r=new ks,l=new J(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new st}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(cv,e)}rotateY(e){return this.rotateOnAxis(uv,e)}rotateZ(e){return this.rotateOnAxis(fv,e)}translateOnAxis(e,i){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(cv,e)}translateY(e){return this.translateOnAxis(uv,e)}translateZ(e){return this.translateOnAxis(fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Ho,mc,this.up):pa.lookAt(mc,Ho,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(pa),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dv),As.child=e,this.dispatchEvent(As),As.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(WS),_d.child=e,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,kS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,XS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),x=d(e.shapes),g=d(e.skeletons),M=d(e.animations),T=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new J(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),y=this._getHandJoint(h,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,T=.005;h.inputState.pinching&&g>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Hr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},gc={h:0,s:0,l:0};function yd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class St{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=bt.workingColorSpace){if(e=LS(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=yd(d,c,e+1/3),this.g=yd(d,c,e),this.b=yd(d,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=__[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return bt.workingToColorSpace(In.copy(this),e),Math.round(yt(In.r*255,0,255))*65536+Math.round(yt(In.g*255,0,255))*256+Math.round(yt(In.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(In.copy(this),i);const r=In.r,l=In.g,c=In.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=v<=.5?x/(d+p):x/(2-d-p),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Mi){bt.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,l=In.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(gc);const r=hd(tr.h,gc.h,i),l=hd(tr.s,gc.s,i),c=hd(tr.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new St;St.NAMES=__;class YS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new J,ma=new J,Sd=new J,ga=new J,Rs=new J,Cs=new J,hv=new J,Md=new J,bd=new J,Ed=new J,Td=new en,Ad=new en,Rd=new en;class Ui{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){wi.subVectors(l,i),ma.subVectors(r,i),Sd.subVectors(e,i);const d=wi.dot(wi),p=wi.dot(ma),m=wi.dot(Sd),h=ma.dot(ma),v=ma.dot(Sd),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(h*m-p*v)*g,T=(d*v-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(d,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,r),Rd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Td,c.x),d.addScaledVector(Ad,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),ma.subVectors(e,i),wi.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Rs.subVectors(l,r),Cs.subVectors(c,r),Md.subVectors(e,r);const m=Rs.dot(Md),h=Cs.dot(Md);if(m<=0&&h<=0)return i.copy(r);bd.subVectors(e,l);const v=Rs.dot(bd),x=Cs.dot(bd);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Rs,d);Ed.subVectors(e,c);const M=Rs.dot(Ed),T=Cs.dot(Ed);if(T>=0&&M<=T)return i.copy(c);const C=M*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(Cs,p);const S=v*T-M*x;if(S<=0&&x-v>=0&&M-T>=0)return hv.subVectors(c,l),p=(x-v)/(x-v+(M-T)),i.copy(l).addScaledVector(hv,p);const y=1/(S+C+g);return d=C*y,p=g*y,i.copy(r).addScaledVector(Rs,d).addScaledVector(Cs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class el{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),_c.subVectors(this.max,Go),ws.subVectors(e.a,Go),Ds.subVectors(e.b,Go),Us.subVectors(e.c,Go),nr.subVectors(Ds,ws),ir.subVectors(Us,Ds),Ur.subVectors(ws,Us);let i=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ur.z,Ur.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ur.z,0,-Ur.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ur.y,Ur.x,0];return!Cd(i,ws,Ds,Us,_c)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,ws,Ds,Us,_c))?!1:(xc.crossVectors(nr,ir),i=[xc.x,xc.y,xc.z],Cd(i,ws,Ds,Us,_c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new J,new J,new J,new J,new J,new J,new J,new J],Di=new J,vc=new el,ws=new J,Ds=new J,Us=new J,nr=new J,ir=new J,Ur=new J,Go=new J,_c=new J,xc=new J,Nr=new J;function Cd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Nr.fromArray(s,c);const p=l.x*Math.abs(Nr.x)+l.y*Math.abs(Nr.y)+l.z*Math.abs(Nr.z),m=e.dot(Nr),h=i.dot(Nr),v=r.dot(Nr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const _n=new J,yc=new ht;let ZS=0;class qi extends kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=$0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class x_ extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class y_ extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class $t extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const KS=new el,Vo=new J,wd=new J;class Qh{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):KS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(wd)),this.expandByPoint(Vo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QS=0;const Si=new tn,Dd=new Fn,Ns=new J,ui=new el,ko=new el,Tn=new J;class jn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wS(e)?y_:x_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,r){return Si.makeTranslation(e,i,r),this.applyMatrix4(Si),this}scale(e,i,r){return Si.makeScale(e,i,r),this.applyMatrix4(Si),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new $t(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];ko.setFromBufferAttribute(p),this.morphTargetsRelative?(Tn.addVectors(ui.min,ko.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,ko.max),ui.expandByPoint(Tn)):(ui.expandByPoint(ko.min),ui.expandByPoint(ko.max))}ui.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Tn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Tn.fromBufferAttribute(p,h),m&&(Ns.fromBufferAttribute(e,h),Tn.add(Ns)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new qi(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let E=0;E<r.count;E++)p[E]=new J,m[E]=new J;const h=new J,v=new J,x=new J,g=new ht,M=new ht,T=new ht,C=new J,S=new J;function y(E,D,X){h.fromBufferAttribute(r,E),v.fromBufferAttribute(r,D),x.fromBufferAttribute(r,X),g.fromBufferAttribute(c,E),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,X),v.sub(h),x.sub(h),M.sub(g),T.sub(g);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(G),p[E].add(C),p[D].add(C),p[X].add(C),m[E].add(S),m[D].add(S),m[X].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let E=0,D=O.length;E<D;++E){const X=O[E],G=X.start,W=X.count;for(let ce=G,ge=G+W;ce<ge;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new J,w=new J,z=new J,N=new J;function I(E){z.fromBufferAttribute(l,E),N.copy(z);const D=p[E];P.copy(D),P.sub(z.multiplyScalar(z.dot(D))).normalize(),w.crossVectors(N,D);const G=w.dot(m[E])<0?-1:1;d.setXYZW(E,P.x,P.y,P.z,G)}for(let E=0,D=O.length;E<D;++E){const X=O[E],G=X.start,W=X.count;for(let ce=G,ge=G+W;ce<ge;ce+=3)I(e.getX(ce+0)),I(e.getX(ce+1)),I(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new J,c=new J,d=new J,p=new J,m=new J,h=new J,v=new J,x=new J;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(v),m.add(v),h.add(v),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,x=p.normalized,g=new h.constructor(m.length*v);let M=0,T=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let y=0;y<v;y++)g[T++]=h[M++]}return new qi(g,v,x)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,x=h.length;v<x;v++){const g=h[v],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let x=0,g=h.length;x<g;x++){const M=h[x];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],x=c[h];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jS=0;class tl extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Is,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==Ea&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wd&&(r.blendSrc=this.blendSrc),this.blendDst!==qd&&(r.blendDst=this.blendDst),this.blendEquation!==Ir&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ht().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new J,Ud=new J,Sc=new J,ar=new J,Nd=new J,Mc=new J,Ld=new J;class S_{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ud.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),ar.copy(this.origin).sub(Ud);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Sc),p=ar.dot(this.direction),m=-ar.dot(Sc),h=ar.lengthSq(),v=Math.abs(1-d*d);let x,g,M,T;if(v>0)if(x=d*m-p,g=d*p-m,T=c*v,x>=0)if(g>=-T)if(g<=T){const C=1/v;x*=C,g*=C,M=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=c,x=Math.max(0,-(d*g+p)),M=-x*x+g*(g+2*m)+h;else g=-c,x=Math.max(0,-(d*g+p)),M=-x*x+g*(g+2*m)+h;else g<=-T?(x=Math.max(0,-(-d*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+h):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(x=Math.max(0,-(d*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+h);else g=d>0?-c:c,x=Math.max(0,-(d*g+p)),M=-x*x+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ud).addScaledVector(Sc,g),M}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const r=_a.dot(this.direction),l=_a.dot(_a)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,r,l,c){Nd.subVectors(i,e),Mc.subVectors(r,e),Ld.crossVectors(Nd,Mc);let d=this.direction.dot(Ld),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ar.subVectors(this.origin,e);const m=p*this.direction.dot(Mc.crossVectors(ar,Mc));if(m<0)return null;const h=p*this.direction.dot(Nd.cross(ar));if(h<0||m+h>d)return null;const v=-p*ar.dot(Ld);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ya extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=t_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pv=new tn,Lr=new S_,bc=new Qh,mv=new J,Ec=new J,Tc=new J,Ac=new J,Od=new J,Rc=new J,gv=new J,Cc=new J;class Wt extends Fn{constructor(e=new jn,i=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Rc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],x=c[m];v!==0&&(Od.fromBufferAttribute(x,e),d?Rc.addScaledVector(Od,v):Rc.addScaledVector(Od.sub(i),v))}i.add(Rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(bc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(bc,mv)===null||Lr.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(pv),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const S=g[T],y=d[S.materialIndex],O=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,z=P;w<z;w+=3){const N=p.getX(w),I=p.getX(w+1),E=p.getX(w+2);l=wc(this,y,e,r,h,v,x,N,I,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const O=p.getX(S),P=p.getX(S+1),w=p.getX(S+2);l=wc(this,d,e,r,h,v,x,O,P,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const S=g[T],y=d[S.materialIndex],O=Math.max(S.start,M.start),P=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,z=P;w<z;w+=3){const N=w,I=w+1,E=w+2;l=wc(this,y,e,r,h,v,x,N,I,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const O=S,P=S+1,w=S+2;l=wc(this,d,e,r,h,v,x,O,P,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function JS(s,e,i,r,l,c,d,p){let m;if(e.side===Qn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===Ea,p),m===null)return null;Cc.copy(p),Cc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Cc);return h<i.near||h>i.far?null:{distance:h,point:Cc.clone(),object:s}}function wc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,Ec),s.getVertexPosition(m,Tc),s.getVertexPosition(h,Ac);const v=JS(s,e,i,r,Ec,Tc,Ac,gv);if(v){const x=new J;Ui.getBarycoord(gv,Ec,Tc,Ac,x),l&&(v.uv=Ui.getInterpolatedAttribute(l,p,m,h,x,new ht)),c&&(v.uv1=Ui.getInterpolatedAttribute(c,p,m,h,x,new ht)),d&&(v.normal=Ui.getInterpolatedAttribute(d,p,m,h,x,new J),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new J,materialIndex:0};Ui.getNormal(Ec,Tc,Ac,g.normal),v.face=g,v.barycoord=x}return v}class $S extends Bn{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Nn,v=Nn,x,g){super(null,d,p,m,h,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new J,eM=new J,tM=new st;class Pr{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Pd.subVectors(r,i).cross(eM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Pd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||tM.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Qh,nM=new ht(.5,.5),Dc=new J;class jh{constructor(e=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,d=new Pr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],x=c[5],g=c[6],M=c[7],T=c[8],C=c[9],S=c[10],y=c[11],O=c[12],P=c[13],w=c[14],z=c[15];if(l[0].setComponents(h-d,M-v,y-T,z-O).normalize(),l[1].setComponents(h+d,M+v,y+T,z+O).normalize(),l[2].setComponents(h+p,M+x,y+C,z+P).normalize(),l[3].setComponents(h-p,M-x,y-C,z-P).normalize(),r)l[4].setComponents(m,g,S,w).normalize(),l[5].setComponents(h-m,M-g,y-S,z-w).normalize();else if(l[4].setComponents(h-m,M-g,y-S,z-w).normalize(),i===ki)l[5].setComponents(h+m,M+g,y+S,z+w).normalize();else if(i===jo)l[5].setComponents(m,g,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const i=nM.distanceTo(e.center);return Or.radius=.7071067811865476+i,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?e.max.x:e.min.x,Dc.y=l.normal.y>0?e.max.y:e.min.y,Dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M_ extends Bn{constructor(e=[],i=Gr,r,l,c,d,p,m,h,v){super(e,i,r,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends Bn{constructor(e,i,r,l,c,d,p,m,h){super(e,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends Bn{constructor(e,i,r=Yi,l,c,d,p=Nn,m=Nn,h,v=Aa,x=1){if(v!==Aa&&v!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,d,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iM extends Gs{constructor(e,i=Yi,r=Gr,l,c,d=Nn,p=Nn,m,h=Aa){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,r,l,c,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class E_ extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xs extends jn{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,r,i,e,d,c,0),T("z","y","x",1,-1,r,i,-e,d,c,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(x,2));function T(C,S,y,O,P,w,z,N,I,E,D){const X=w/I,G=z/E,W=w/2,ce=z/2,ge=N/2,Q=I+1,B=E+1;let H=0,$=0;const fe=new J;for(let Ee=0;Ee<B;Ee++){const L=Ee*G-ce;for(let Z=0;Z<Q;Z++){const Me=Z*X-W;fe[C]=Me*O,fe[S]=L*P,fe[y]=ge,h.push(fe.x,fe.y,fe.z),fe[C]=0,fe[S]=0,fe[y]=N>0?1:-1,v.push(fe.x,fe.y,fe.z),x.push(Z/I),x.push(1-Ee/E),H+=1}}for(let Ee=0;Ee<E;Ee++)for(let L=0;L<I;L++){const Z=g+L+Q*Ee,Me=g+L+Q*(Ee+1),Te=g+(L+1)+Q*(Ee+1),Pe=g+(L+1)+Q*Ee;m.push(Z,Me,Pe),m.push(Me,Te,Pe),$+=6}p.addGroup(M,$,D),M+=$,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yc extends jn{constructor(e=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const c=[],d=[],p=[],m=[],h=new J,v=new ht;d.push(0,0,0),p.push(0,0,1),m.push(.5,.5);for(let x=0,g=3;x<=i;x++,g+=3){const M=r+x/i*l;h.x=e*Math.cos(M),h.y=e*Math.sin(M),d.push(h.x,h.y,h.z),p.push(0,0,1),v.x=(d[g]/e+1)/2,v.y=(d[g+1]/e+1)/2,m.push(v.x,v.y)}for(let x=1;x<=i;x++)c.push(x,x+1,0);this.setIndex(c),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zo extends jn{constructor(e=1,i=1,r=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const v=[],x=[],g=[],M=[];let T=0;const C=[],S=r/2;let y=0;O(),d===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(M,2));function O(){const w=new J,z=new J;let N=0;const I=(i-e)/r;for(let E=0;E<=c;E++){const D=[],X=E/c,G=X*(i-e)+e;for(let W=0;W<=l;W++){const ce=W/l,ge=ce*m+p,Q=Math.sin(ge),B=Math.cos(ge);z.x=G*Q,z.y=-X*r+S,z.z=G*B,x.push(z.x,z.y,z.z),w.set(Q,I,B).normalize(),g.push(w.x,w.y,w.z),M.push(ce,1-X),D.push(T++)}C.push(D)}for(let E=0;E<l;E++)for(let D=0;D<c;D++){const X=C[D][E],G=C[D+1][E],W=C[D+1][E+1],ce=C[D][E+1];(e>0||D!==0)&&(v.push(X,G,ce),N+=3),(i>0||D!==c-1)&&(v.push(G,W,ce),N+=3)}h.addGroup(y,N,0),y+=N}function P(w){const z=T,N=new ht,I=new J;let E=0;const D=w===!0?e:i,X=w===!0?1:-1;for(let W=1;W<=l;W++)x.push(0,S*X,0),g.push(0,X,0),M.push(.5,.5),T++;const G=T;for(let W=0;W<=l;W++){const ge=W/l*m+p,Q=Math.cos(ge),B=Math.sin(ge);I.x=D*B,I.y=S*X,I.z=D*Q,x.push(I.x,I.y,I.z),g.push(0,X,0),N.x=Q*.5+.5,N.y=B*.5*X+.5,M.push(N.x,N.y),T++}for(let W=0;W<l;W++){const ce=z+W,ge=G+W;w===!0?v.push(ge,ge+1,ce):v.push(ge+1,ge,ce),E+=3}h.addGroup(y,E,w===!0?1:2),y+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qc extends jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,x=e/p,g=i/m,M=[],T=[],C=[],S=[];for(let y=0;y<v;y++){const O=y*g-d;for(let P=0;P<h;P++){const w=P*x-c;T.push(w,-O,0),C.push(0,0,1),S.push(P/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let O=0;O<p;O++){const P=O+h*y,w=O+h*(y+1),z=O+1+h*(y+1),N=O+1+h*y;M.push(P,w,N),M.push(w,z,N)}this.setIndex(M),this.setAttribute("position",new $t(T,3)),this.setAttribute("normal",new $t(C,3)),this.setAttribute("uv",new $t(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jo extends jn{constructor(e=.5,i=1,r=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],h=[],v=[];let x=e;const g=(i-e)/l,M=new J,T=new ht;for(let C=0;C<=l;C++){for(let S=0;S<=r;S++){const y=c+S/r*d;M.x=x*Math.cos(y),M.y=x*Math.sin(y),m.push(M.x,M.y,M.z),h.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,v.push(T.x,T.y)}x+=g}for(let C=0;C<l;C++){const S=C*(r+1);for(let y=0;y<r;y++){const O=y+S,P=O,w=O+r+1,z=O+r+2,N=O+1;p.push(P,w,N),p.push(w,z,N)}}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xa extends jn{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+p,Math.PI);let h=0;const v=[],x=new J,g=new J,M=[],T=[],C=[],S=[];for(let y=0;y<=r;y++){const O=[],P=y/r,w=d+P*p,z=e*Math.cos(w),N=Math.sqrt(e*e-z*z);let I=0;y===0&&d===0?I=.5/i:y===r&&m===Math.PI&&(I=-.5/i);for(let E=0;E<=i;E++){const D=E/i,X=l+D*c;x.x=-N*Math.cos(X),x.y=z,x.z=N*Math.sin(X),T.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),S.push(D+I,1-P),O.push(h++)}v.push(O)}for(let y=0;y<r;y++)for(let O=0;O<i;O++){const P=v[y][O+1],w=v[y][O],z=v[y+1][O],N=v[y+1][O+1];(y!==0||d>0)&&M.push(P,w,N),(y!==r-1||m<Math.PI)&&M.push(w,z,N)}this.setIndex(M),this.setAttribute("position",new $t(T,3)),this.setAttribute("normal",new $t(C,3)),this.setAttribute("uv",new $t(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jh extends jn{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},r=Math.floor(r),l=Math.floor(l);const m=[],h=[],v=[],x=[],g=new J,M=new J,T=new J;for(let C=0;C<=r;C++){const S=d+C/r*p;for(let y=0;y<=l;y++){const O=y/l*c;M.x=(e+i*Math.cos(S))*Math.cos(O),M.y=(e+i*Math.cos(S))*Math.sin(O),M.z=i*Math.sin(S),h.push(M.x,M.y,M.z),g.x=e*Math.cos(O),g.y=e*Math.sin(O),T.subVectors(M,g).normalize(),v.push(T.x,T.y,T.z),x.push(y/l),x.push(C/r)}}for(let C=1;C<=r;C++)for(let S=1;S<=l;S++){const y=(l+1)*C+S-1,O=(l+1)*(C-1)+S-1,P=(l+1)*(C-1)+S,w=(l+1)*C+S;m.push(y,O,w),m.push(O,P,w)}this.setIndex(m),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Vs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(vv(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(vv(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Gn(s){const e={};for(let i=0;i<s.length;i++){const r=Vs(s[i]);for(const l in r)e[l]=r[l]}return e}function vv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function aM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function T_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const rM={clone:Vs,merge:Gn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new St().setHex(l.value);break;case"v2":this.uniforms[r].value=new ht().fromArray(l.value);break;case"v3":this.uniforms[r].value=new J().fromArray(l.value);break;case"v4":this.uniforms[r].value=new en().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sr extends tl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Id extends sr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cM extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $h extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const zd=new tn,_v=new J,xv=new J;class A_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;_v.setFromMatrixPosition(e.matrixWorld),i.position.copy(_v),xv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xv),i.updateMatrixWorld(),zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===jo||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uc=new J,Nc=new ks,Fi=new J;class R_ extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uc,Nc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Nc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Uc,Nc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Nc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new J,yv=new ht,Sv=new ht;class fi extends R_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,yv,Sv),i.subVectors(Sv,yv)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fM extends A_{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class Mv extends $h{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ep extends R_{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dM extends A_{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bv extends $h{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new dM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class hM extends $h{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ls=-90,Os=1;class pM extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Ls,Os,e,i);l.layers=this.layers,this.add(l);const c=new fi(Ls,Os,e,i);c.layers=this.layers,this.add(c);const d=new fi(Ls,Os,e,i);d.layers=this.layers,this.add(d);const p=new fi(Ls,Os,e,i);p.layers=this.layers,this.add(p);const m=new fi(Ls,Os,e,i);m.layers=this.layers,this.add(m);const h=new fi(Ls,Os,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===jo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class mM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ev=new tn;class Tv{constructor(e,i,r=0,l=1/0){this.ray=new S_(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Kh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Et("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Ev.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ev),this}intersectObject(e,i=!0,r=[]){return Oh(e,this,r,i),r.sort(Av),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Oh(e[l],this,r,i);return r.sort(Av),r}}function Av(s,e){return s.distance-e.distance}function Oh(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,p=c.length;d<p;d++)Oh(c[d],e,i,!0)}}class gM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const rp=class rp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};rp.prototype.isMatrix2=!0;let Rv=rp;function Cv(s,e,i,r){const l=vM(r);switch(i){case h_:return s*e;case m_:return s*e/l.components*l.byteLength;case kh:return s*e/l.components*l.byteLength;case Vr:return s*e*2/l.components*l.byteLength;case Xh:return s*e*2/l.components*l.byteLength;case p_:return s*e*3/l.components*l.byteLength;case Ni:return s*e*4/l.components*l.byteLength;case Wh:return s*e*4/l.components*l.byteLength;case zc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ih:case rh:return Math.max(s,16)*Math.max(e,8)/4;case nh:case ah:return Math.max(s,8)*Math.max(e,8)/2;case sh:case oh:case ch:case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lh:case Vc:case fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ah:case Rh:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wh:case Dh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kc:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vM(s){switch(s){case di:case c_:return{byteLength:1,components:1};case Ko:case u_:case Ta:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case Yi:case Hh:case Vi:return{byteLength:4,components:1};case f_:case d_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function C_(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function _M(s){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,x=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,h){const v=m.array,x=m.updateRanges;if(s.bindBuffer(h,p),x.length===0)s.bufferSubData(h,0,v);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],C=x[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const C=x[M];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_b=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:xM,alphahash_pars_fragment:yM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:bM,alphatest_pars_fragment:EM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:RM,batching_vertex:CM,begin_vertex:wM,beginnormal_vertex:DM,bsdfs:UM,iridescence_fragment:NM,bumpmap_pars_fragment:LM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:PM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:zM,color_fragment:BM,color_pars_fragment:FM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:XM,displacementmap_pars_vertex:WM,displacementmap_vertex:qM,emissivemap_fragment:YM,emissivemap_pars_fragment:ZM,colorspace_fragment:KM,colorspace_pars_fragment:QM,envmap_fragment:jM,envmap_common_pars_fragment:JM,envmap_pars_fragment:$M,envmap_pars_vertex:eb,envmap_physical_pars_fragment:fb,envmap_vertex:tb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:ab,fog_pars_fragment:rb,gradientmap_pars_fragment:sb,lightmap_pars_fragment:ob,lights_lambert_fragment:lb,lights_lambert_pars_fragment:cb,lights_pars_begin:ub,lights_toon_fragment:db,lights_toon_pars_fragment:hb,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:vb,lights_fragment_begin:_b,lights_fragment_maps:xb,lights_fragment_end:yb,lightprobes_pars_fragment:Sb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:Eb,logdepthbuf_vertex:Tb,map_fragment:Ab,map_pars_fragment:Rb,map_particle_fragment:Cb,map_particle_pars_fragment:wb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Ub,morphinstance_vertex:Nb,morphcolor_vertex:Lb,morphnormal_vertex:Ob,morphtarget_pars_vertex:Pb,morphtarget_vertex:Ib,normal_fragment_begin:zb,normal_fragment_maps:Bb,normal_pars_fragment:Fb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Vb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:qb,opaque_fragment:Yb,packing:Zb,premultiplied_alpha_fragment:Kb,project_vertex:Qb,dithering_fragment:jb,dithering_pars_fragment:Jb,roughnessmap_fragment:$b,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:aE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:fE,tonemapping_pars_fragment:dE,transmission_fragment:hE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:vE,worldpos_vertex:_E,background_vert:xE,background_frag:yE,backgroundCube_vert:SE,backgroundCube_frag:ME,cube_vert:bE,cube_frag:EE,depth_vert:TE,depth_frag:AE,distance_vert:RE,distance_frag:CE,equirect_vert:wE,equirect_frag:DE,linedashed_vert:UE,linedashed_frag:NE,meshbasic_vert:LE,meshbasic_frag:OE,meshlambert_vert:PE,meshlambert_frag:IE,meshmatcap_vert:zE,meshmatcap_frag:BE,meshnormal_vert:FE,meshnormal_frag:HE,meshphong_vert:GE,meshphong_frag:VE,meshphysical_vert:kE,meshphysical_frag:XE,meshtoon_vert:WE,meshtoon_frag:qE,points_vert:YE,points_frag:ZE,shadow_vert:KE,shadow_frag:QE,sprite_vert:jE,sprite_frag:JE},ze={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Gn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Gn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new St(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Gn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Gn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Gn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Gn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Gn([ze.common,ze.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Gn([ze.lights,ze.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Lc={r:0,b:0,g:0},$E=new tn,w_=new st;w_.set(-1,0,0,0,1,0,0,0,1);function e1(s,e,i,r,l,c){const d=new St(0);let p=l===!0?0:1,m,h,v=null,x=0,g=null;function M(O){let P=O.isScene===!0?O.background:null;if(P&&P.isTexture){const w=O.backgroundBlurriness>0;P=e.get(P,w)}return P}function T(O){let P=!1;const w=M(O);w===null?S(d,p):w&&w.isColor&&(S(w,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,P){const w=M(P);w&&(w.isCubeTexture||w.mapping===Kc)?(h===void 0&&(h=new Wt(new Xs(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Vs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(P.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(w_),h.material.toneMapped=bt.getTransfer(w.colorSpace)!==Bt,(v!==w||x!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=w,x=w.version,g=s.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Wt(new Qc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Vs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=bt.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||x!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=w,x=w.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function S(O,P){O.getRGB(Lc,T_(s)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,P,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,P=1){d.set(O),p=P,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,S(d,p)},render:T,addToRenderList:C,dispose:y}}function t1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(G,W,ce,ge,Q){let B=!1;const H=x(G,ge,ce,W);c!==H&&(c=H,h(c.object)),B=M(G,ge,ce,Q),B&&T(G,ge,ce,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,w(G,W,ce,ge),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function x(G,W,ce,ge){const Q=ge.wireframe===!0;let B=r[W.id];B===void 0&&(B={},r[W.id]=B);const H=G.isInstancedMesh===!0?G.id:0;let $=B[H];$===void 0&&($={},B[H]=$);let fe=$[ce.id];fe===void 0&&(fe={},$[ce.id]=fe);let Ee=fe[Q];return Ee===void 0&&(Ee=g(m()),fe[Q]=Ee),Ee}function g(G){const W=[],ce=[],ge=[];for(let Q=0;Q<i;Q++)W[Q]=0,ce[Q]=0,ge[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:ge,object:G,attributes:{},index:null}}function M(G,W,ce,ge){const Q=c.attributes,B=W.attributes;let H=0;const $=ce.getAttributes();for(const fe in $)if($[fe].location>=0){const L=Q[fe];let Z=B[fe];if(Z===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==ge}function T(G,W,ce,ge){const Q={},B=W.attributes;let H=0;const $=ce.getAttributes();for(const fe in $)if($[fe].location>=0){let L=B[fe];L===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(L=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(L=G.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),Q[fe]=Z,H++}c.attributes=Q,c.attributesNum=H,c.index=ge}function C(){const G=c.newAttributes;for(let W=0,ce=G.length;W<ce;W++)G[W]=0}function S(G){y(G,0)}function y(G,W){const ce=c.newAttributes,ge=c.enabledAttributes,Q=c.attributeDivisors;ce[G]=1,ge[G]===0&&(s.enableVertexAttribArray(G),ge[G]=1),Q[G]!==W&&(s.vertexAttribDivisor(G,W),Q[G]=W)}function O(){const G=c.newAttributes,W=c.enabledAttributes;for(let ce=0,ge=W.length;ce<ge;ce++)W[ce]!==G[ce]&&(s.disableVertexAttribArray(ce),W[ce]=0)}function P(G,W,ce,ge,Q,B,H){H===!0?s.vertexAttribIPointer(G,W,ce,Q,B):s.vertexAttribPointer(G,W,ce,ge,Q,B)}function w(G,W,ce,ge){C();const Q=ge.attributes,B=ce.getAttributes(),H=W.defaultAttributeValues;for(const $ in B){const fe=B[$];if(fe.location>=0){let Ee=Q[$];if(Ee===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Ee=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Ee=G.instanceColor)),Ee!==void 0){const L=Ee.normalized,Z=Ee.itemSize,Me=e.get(Ee);if(Me===void 0)continue;const Te=Me.buffer,Pe=Me.type,ae=Me.bytesPerElement,le=Pe===s.INT||Pe===s.UNSIGNED_INT||Ee.gpuType===Hh;if(Ee.isInterleavedBufferAttribute){const ve=Ee.data,we=ve.stride,Ke=Ee.offset;if(ve.isInstancedInterleavedBuffer){for(let Ye=0;Ye<fe.locationSize;Ye++)y(fe.location+Ye,ve.meshPerAttribute);G.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ye=0;Ye<fe.locationSize;Ye++)S(fe.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ye=0;Ye<fe.locationSize;Ye++)P(fe.location+Ye,Z/fe.locationSize,Pe,L,we*ae,(Ke+Z/fe.locationSize*Ye)*ae,le)}else{if(Ee.isInstancedBufferAttribute){for(let ve=0;ve<fe.locationSize;ve++)y(fe.location+ve,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ve=0;ve<fe.locationSize;ve++)S(fe.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ve=0;ve<fe.locationSize;ve++)P(fe.location+ve,Z/fe.locationSize,Pe,L,Z*ae,Z/fe.locationSize*ve*ae,le)}}else if(H!==void 0){const L=H[$];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(fe.location,L);break;case 3:s.vertexAttrib3fv(fe.location,L);break;case 4:s.vertexAttrib4fv(fe.location,L);break;default:s.vertexAttrib1fv(fe.location,L)}}}}O()}function z(){D();for(const G in r){const W=r[G];for(const ce in W){const ge=W[ce];for(const Q in ge){const B=ge[Q];for(const H in B)v(B[H].object),delete B[H];delete ge[Q]}}delete r[G]}}function N(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const ce in W){const ge=W[ce];for(const Q in ge){const B=ge[Q];for(const H in B)v(B[H].object),delete B[H];delete ge[Q]}}delete r[G.id]}function I(G){for(const W in r){const ce=r[W];for(const ge in ce){const Q=ce[ge];if(Q[G.id]===void 0)continue;const B=Q[G.id];for(const H in B)v(B[H].object),delete B[H];delete Q[G.id]}}}function E(G){for(const W in r){const ce=r[W],ge=G.isInstancedMesh===!0?G.id:0,Q=ce[ge];if(Q!==void 0){for(const B in Q){const H=Q[B];for(const $ in H)v(H[$].object),delete H[$];delete Q[B]}delete ce[ge],Object.keys(ce).length===0&&delete r[W]}}}function D(){X(),d=!0,c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:X,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function n1(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,v){v!==0&&(s.drawArraysInstanced(r,m,h,v),i.update(h,r,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let g=0;for(let M=0;M<v;M++)g+=h[M];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function i1(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ni&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const E=I===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==di&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vi&&!E)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(nt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:w,maxSamples:z,samples:N}}function a1(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Pr,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||l;return l=g,r=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,y=s.get(x);if(!l||T===null||T.length===0||c&&!S)c?v(null):h();else{const O=c?0:r,P=O*4;let w=y.clippingState||null;m.value=w,w=v(T,g,P,M);for(let z=0;z!==P;++z)w[z]=i[z];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,M,T){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const y=M+C*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,w=M;P!==C;++P,w+=4)d.copy(x[P]).applyMatrix4(O,p),d.normal.toArray(S,w),S[w+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const cr=4,wv=[.125,.215,.35,.446,.526,.582],zr=20,r1=256,Xo=new ep,Dv=new St;let Bd=null,Fd=0,Hd=0,Gd=!1;const s1=new J;class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=s1}=c;Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Fd,Hd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:Xc,depthBuffer:!1},l=Nv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=o1(c)),this._blurMaterial=c1(c,e,i),this._ggxMaterial=l1(c,e,i)}return l}_compileMaterial(e){const i=new Wt(new jn,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,r,l,c){const m=new fi(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Dv),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Xs,new ya({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,y=!0):(S.color.copy(Dv),y=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[P],c.y,c.z)):w===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[P]));const z=this._cubeSize;Ps(l,w*z,P>2?z:0,z,z),x.setRenderTarget(l),y&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Gr||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Xo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),g=0+h*1.25,M=x*g,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-cr?r-T+cr:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Ps(c,S,y,3*C,2*C),l.setRenderTarget(c),l.render(p,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Ps(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(p,Xo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*zr-1),C=c/T,S=isFinite(c)?1+Math.floor(v*C):zr;S>zr&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${zr}`);const y=[];let O=0;for(let I=0;I<zr;++I){const E=I/C,D=Math.exp(-E*E/2);y.push(D),I===0?O+=D:I<S&&(O+=2*D)}for(let I=0;I<y.length;I++)y[I]=y[I]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:P}=this;g.dTheta.value=T,g.mipInt.value=P-r;const w=this._sizeLods[l],z=3*w*(l>P-cr?l-P+cr:0),N=4*(this._cubeSize-w);Ps(i,z,N,3*w,2*w),m.setRenderTarget(i),m.render(x,Xo)}}function o1(s){const e=[],i=[],r=[];let l=s;const c=s-cr+1+wv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-cr?m=wv[d-s+cr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,x=1+h,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,T=6,C=3,S=2,y=1,O=new Float32Array(C*T*M),P=new Float32Array(S*T*M),w=new Float32Array(y*T*M);for(let N=0;N<M;N++){const I=N%3*2/3-1,E=N>2?0:-1,D=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];O.set(D,C*T*N),P.set(g,S*T*N);const X=[N,N,N,N,N,N];w.set(X,y*T*N)}const z=new jn;z.setAttribute("position",new qi(O,C)),z.setAttribute("uv",new qi(P,S)),z.setAttribute("faceIndex",new qi(w,y)),r.push(new Wt(z,null)),l>cr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Nv(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function l1(s,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function c1(s,e,i){const r=new Float32Array(zr),l=new J(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Lv(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Ov(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class D_ extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new M_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xs(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Ma});c.uniforms.tEquirect.value=i;const d=new Wt(l,c),p=i.minFilter;return i.minFilter===Br&&(i.minFilter=zn),new pM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function u1(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===cd||M===ud)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new D_(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,T=M===cd||M===ud,C=M===Gr||M===Hs;if(T||C){let S=i.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Uv(s)),S=T?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const O=g.image;return T&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new Uv(s)),S=T?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,M){return M===cd?g.mapping=Gr:M===ud&&(g.mapping=Hs),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function h(g){const M=g.target;M.removeEventListener("dispose",h);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function f1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zs("WebGLRenderer: "+r+" extension not supported."),l}}}function d1(s,e,i,r){const l={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(x){const g=[],M=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const O=M.array;C=M.version;for(let P=0,w=O.length;P<w;P+=3){const z=O[P+0],N=O[P+1],I=O[P+2];g.push(z,N,N,I,I,z)}}else{const O=T.array;C=T.version;for(let P=0,w=O.length/3-1;P<w;P+=3){const z=P+0,N=P+1,I=P+2;g.push(z,N,N,I,I,z)}}const S=new(T.count>=65535?y_:x_)(g,1);S.version=C;const y=c.get(x);y&&e.remove(y),c.set(x,S)}function v(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function h1(s,e,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*d),i.update(g,r,1)}function h(x,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,x*d,M),i.update(g,r,M))}function v(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function p1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function m1(s,e,i){const r=new WeakMap,l=new en;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let X=function(){E.dispose(),r.delete(p),p.removeEventListener("dispose",X)};var M=X;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let w=0;T===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let z=p.attributes.position.count*w,N=1;z>e.maxTextureSize&&(N=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*N*4*x),E=new v_(I,z,N,x);E.type=Vi,E.needsUpdate=!0;const D=w*4;for(let G=0;G<x;G++){const W=y[G],ce=O[G],ge=P[G],Q=z*N*4*G;for(let B=0;B<W.count;B++){const H=B*D;T===!0&&(l.fromBufferAttribute(W,B),I[Q+H+0]=l.x,I[Q+H+1]=l.y,I[Q+H+2]=l.z,I[Q+H+3]=0),C===!0&&(l.fromBufferAttribute(ce,B),I[Q+H+4]=l.x,I[Q+H+5]=l.y,I[Q+H+6]=l.z,I[Q+H+7]=0),S===!0&&(l.fromBufferAttribute(ge,B),I[Q+H+8]=l.x,I[Q+H+9]=l.y,I[Q+H+10]=l.z,I[Q+H+11]=ge.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new ht(z,N)},r.set(p,g),p.addEventListener("dispose",X)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<h.length;S++)T+=h[S];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function g1(s,e,i,r,l){let c=new WeakMap;function d(h){const v=l.render.frame,x=h.geometry,g=e.get(h,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const v1={[n_]:"LINEAR_TONE_MAPPING",[i_]:"REINHARD_TONE_MAPPING",[a_]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[s_]:"AGX_TONE_MAPPING",[o_]:"NEUTRAL_TONE_MAPPING",[r_]:"CUSTOM_TONE_MAPPING"};function _1(s,e,i,r,l,c){const d=new Wi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Gs(e,i):void 0}),p=new Wi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),m=new jn;m.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new $t([0,2,0,0,2,0],2));const h=new lM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Wt(m,h),x=new ep(-1,1,1,-1,0,1);let g=null,M=null,T=!1,C,S=null,y=[],O=!1;this.setSize=function(P,w){d.setSize(P,w),p.setSize(P,w);for(let z=0;z<y.length;z++){const N=y[z];N.setSize&&N.setSize(P,w)}},this.setEffects=function(P){y=P,O=y.length>0&&y[0].isRenderPass===!0;const w=d.width,z=d.height;for(let N=0;N<y.length;N++){const I=y[N];I.setSize&&I.setSize(w,z)}},this.begin=function(P,w){if(T||P.toneMapping===Xi&&y.length===0)return!1;if(S=w,w!==null){const z=w.width,N=w.height;(d.width!==z||d.height!==N)&&this.setSize(z,N)}return O===!1&&P.setRenderTarget(d),C=P.toneMapping,P.toneMapping=Xi,!0},this.hasRenderPass=function(){return O},this.end=function(P,w){P.toneMapping=C,T=!0;let z=d,N=p;for(let I=0;I<y.length;I++){const E=y[I];if(E.enabled!==!1&&(E.render(P,N,z,w),E.needsSwap!==!1)){const D=z;z=N,N=D}}if(g!==P.outputColorSpace||M!==P.toneMapping){g=P.outputColorSpace,M=P.toneMapping,h.defines={},bt.getTransfer(g)===Bt&&(h.defines.SRGB_TRANSFER="");const I=v1[M];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=z.texture,P.setRenderTarget(S),P.render(v,x),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const U_=new Bn,Ph=new Gs(1,1),N_=new v_,L_=new FS,O_=new M_,Pv=[],Iv=[],zv=new Float32Array(16),Bv=new Float32Array(9),Fv=new Float32Array(4);function Ws(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Pv[l];if(c===void 0&&(c=new Float32Array(l),Pv[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function Mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function bn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Jc(s,e){let i=Iv[e];i===void 0&&(i=new Int32Array(e),Iv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function x1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function y1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2fv(this.addr,e),bn(i,e)}}function S1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;s.uniform3fv(this.addr,e),bn(i,e)}}function M1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4fv(this.addr,e),bn(i,e)}}function b1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Mn(i,r))return;Fv.set(r),s.uniformMatrix2fv(this.addr,!1,Fv),bn(i,r)}}function E1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Mn(i,r))return;Bv.set(r),s.uniformMatrix3fv(this.addr,!1,Bv),bn(i,r)}}function T1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Mn(i,r))return;zv.set(r),s.uniformMatrix4fv(this.addr,!1,zv),bn(i,r)}}function A1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function R1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2iv(this.addr,e),bn(i,e)}}function C1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3iv(this.addr,e),bn(i,e)}}function w1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4iv(this.addr,e),bn(i,e)}}function D1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function U1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2uiv(this.addr,e),bn(i,e)}}function N1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3uiv(this.addr,e),bn(i,e)}}function L1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4uiv(this.addr,e),bn(i,e)}}function O1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Ph.compareFunction=i.isReversedDepthBuffer()?Yh:qh,c=Ph):c=U_,i.setTexture2D(e||c,l)}function P1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||L_,l)}function I1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||O_,l)}function z1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||N_,l)}function B1(s){switch(s){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return b1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return w1;case 5125:return D1;case 36294:return U1;case 36295:return N1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return z1}}function F1(s,e){s.uniform1fv(this.addr,e)}function H1(s,e){const i=Ws(e,this.size,2);s.uniform2fv(this.addr,i)}function G1(s,e){const i=Ws(e,this.size,3);s.uniform3fv(this.addr,i)}function V1(s,e){const i=Ws(e,this.size,4);s.uniform4fv(this.addr,i)}function k1(s,e){const i=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function X1(s,e){const i=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function W1(s,e){const i=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function q1(s,e){s.uniform1iv(this.addr,e)}function Y1(s,e){s.uniform2iv(this.addr,e)}function Z1(s,e){s.uniform3iv(this.addr,e)}function K1(s,e){s.uniform4iv(this.addr,e)}function Q1(s,e){s.uniform1uiv(this.addr,e)}function j1(s,e){s.uniform2uiv(this.addr,e)}function J1(s,e){s.uniform3uiv(this.addr,e)}function $1(s,e){s.uniform4uiv(this.addr,e)}function eT(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Ph:d=U_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function tT(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||L_,c[d])}function nT(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||O_,c[d])}function iT(s,e,i){const r=this.cache,l=e.length,c=Jc(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),bn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||N_,c[d])}function aT(s){switch(s){case 5126:return F1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return X1;case 35676:return W1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return Q1;case 36294:return j1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}class rT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=B1(i.type)}}class sT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aT(i.type)}}class oT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Hv(s,e){s.seq.push(e),s.map[e.id]=e}function lT(s,e,i){const r=s.name,l=r.length;for(Vd.lastIndex=0;;){const c=Vd.exec(r),d=Vd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Hv(i,h===void 0?new rT(p,s,e):new sT(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new oT(p),Hv(i,x)),i=x}}}class Gc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);lT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Gv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const cT=37297;let uT=0;function fT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Vv=new st;function dT(s){bt._getMatrix(Vv,bt.workingColorSpace,s);const e=`mat3( ${Vv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(s)){case Wc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function kv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+fT(s.getShaderSource(e),p)}else return c}function hT(s,e){const i=dT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const pT={[n_]:"Linear",[i_]:"Reinhard",[a_]:"Cineon",[Fh]:"ACESFilmic",[s_]:"AgX",[o_]:"Neutral",[r_]:"Custom"};function mT(s,e){const i=pT[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new J;function gT(){bt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function _T(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function xT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function Yo(s){return s!==""}function Xv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace(yT,MT)}const ST=new Map;function MT(s,e){let i=dt[e];if(i===void 0){const r=ST.get(e);if(r!==void 0)i=dt[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(i)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(s){return s.replace(bT,ET)}function ET(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Yv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TT={[Ic]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function AT(s){return TT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RT={[Gr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function CT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":RT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const wT={[Hs]:"ENVMAP_MODE_REFRACTION"};function DT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UT={[t_]:"ENVMAP_BLENDING_MULTIPLY",[_S]:"ENVMAP_BLENDING_MIX",[xS]:"ENVMAP_BLENDING_ADD"};function NT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":UT[s.combine]||"ENVMAP_BLENDING_NONE"}function LT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function OT(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=AT(i),h=CT(i),v=DT(i),x=NT(i),g=LT(i),M=vT(i),T=_T(c),C=l.createProgram();let S,y,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),y.length>0&&(y+=`
`)):(S=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),y=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Xi?mT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,hT("linearToOutputTexel",i.outputColorSpace),gT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Ih(d),d=Xv(d,i),d=Wv(d,i),p=Ih(p),p=Xv(p,i),p=Wv(p,i),d=qv(d),p=qv(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=O+S+d,w=O+y+p,z=Gv(l,l.VERTEX_SHADER,P),N=Gv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,z),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(G){if(s.debug.checkShaderErrors){const W=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(z)||"",ge=l.getShaderInfoLog(N)||"",Q=W.trim(),B=ce.trim(),H=ge.trim();let $=!0,fe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,z,N);else{const Ee=kv(l,z,"vertex"),L=kv(l,N,"fragment");Et("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+Ee+`
`+L)}else Q!==""?nt("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(fe=!1);fe&&(G.diagnostics={runnable:$,programLog:Q,vertexShader:{log:B,prefix:S},fragmentShader:{log:H,prefix:y}})}l.deleteShader(z),l.deleteShader(N),E=new Gc(l,C),D=xT(l,C)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(C,cT)),X},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=N,this}let PT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new zT(e),i.set(e,r)),r}}class zT{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}}function BT(s){return s===Vr||s===Vc||s===kc}function FT(s,e,i,r,l,c){const d=new Kh,p=new IT,m=new Set,h=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function C(E,D,X,G,W,ce){const ge=G.fog,Q=W.geometry,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=e.get(E.envMap||B,H),fe=$&&$.mapping===Kc?$.image.height:null,Ee=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const L=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Z=L!==void 0?L.length:0;let Me=0;Q.morphAttributes.position!==void 0&&(Me=1),Q.morphAttributes.normal!==void 0&&(Me=2),Q.morphAttributes.color!==void 0&&(Me=3);let Te,Pe,ae,le;if(Ee){const Ve=Gi[Ee];Te=Ve.vertexShader,Pe=Ve.fragmentShader}else{Te=E.vertexShader,Pe=E.fragmentShader;const Ve=p.getVertexShaderStage(E),Kt=p.getFragmentShaderStage(E);p.update(E,Ve,Kt),ae=Ve.id,le=Kt.id}const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ke=W.isInstancedMesh===!0,Ye=W.isBatchedMesh===!0,Ut=!!E.map,at=!!E.matcap,ot=!!$,pt=!!E.aoMap,ut=!!E.lightMap,nn=!!E.bumpMap&&E.wireframe===!1,an=!!E.normalMap,rn=!!E.displacementMap,cn=!!E.emissiveMap,qt=!!E.metalnessMap,sn=!!E.roughnessMap,Y=E.anisotropy>0,Ft=E.clearcoat>0,Ct=E.dispersion>0,U=E.iridescence>0,b=E.sheen>0,j=E.transmission>0,re=Y&&!!E.anisotropyMap,pe=Ft&&!!E.clearcoatMap,Ae=Ft&&!!E.clearcoatNormalMap,Ue=Ft&&!!E.clearcoatRoughnessMap,de=U&&!!E.iridescenceMap,me=U&&!!E.iridescenceThicknessMap,Ce=b&&!!E.sheenColorMap,Fe=b&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ne=!!E.specularColorMap,je=!!E.specularIntensityMap,Je=j&&!!E.transmissionMap,it=j&&!!E.thicknessMap,k=!!E.gradientMap,Re=!!E.alphaMap,xe=E.alphaTest>0,De=!!E.alphaHash,Be=!!E.extensions;let be=Xi;E.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(be=s.toneMapping);const qe={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:Pe,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&W._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&W.instanceColor!==null,instancingMorph:Ke&&W.morphTexture!==null,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ut,matcap:at,envMap:ot,envMapMode:ot&&$.mapping,envMapCubeUVHeight:fe,aoMap:pt,lightMap:ut,bumpMap:nn,normalMap:an,displacementMap:rn,emissiveMap:cn,normalMapObjectSpace:an&&E.normalMapType===MS,normalMapTangentSpace:an&&E.normalMapType===Nh,packedNormalMap:an&&E.normalMapType===Nh&&BT(E.normalMap.format),metalnessMap:qt,roughnessMap:sn,anisotropy:Y,anisotropyMap:re,clearcoat:Ft,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,dispersion:Ct,iridescence:U,iridescenceMap:de,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:Ne,specularIntensityMap:je,transmission:j,transmissionMap:Je,thicknessMap:it,gradientMap:k,opaque:E.transparent===!1&&E.blending===Is&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:xe,alphaHash:De,combine:E.combine,mapUv:Ut&&T(E.map.channel),aoMapUv:pt&&T(E.aoMap.channel),lightMapUv:ut&&T(E.lightMap.channel),bumpMapUv:nn&&T(E.bumpMap.channel),normalMapUv:an&&T(E.normalMap.channel),displacementMapUv:rn&&T(E.displacementMap.channel),emissiveMapUv:cn&&T(E.emissiveMap.channel),metalnessMapUv:qt&&T(E.metalnessMap.channel),roughnessMapUv:sn&&T(E.roughnessMap.channel),anisotropyMapUv:re&&T(E.anisotropyMap.channel),clearcoatMapUv:pe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(E.sheenRoughnessMap.channel),specularMapUv:Oe&&T(E.specularMap.channel),specularColorMapUv:Ne&&T(E.specularColorMap.channel),specularIntensityMapUv:je&&T(E.specularIntensityMap.channel),transmissionMapUv:Je&&T(E.transmissionMap.channel),thicknessMapUv:it&&T(E.thicknessMap.channel),alphaMapUv:Re&&T(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(an||Y),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Q.attributes.uv&&(Ut||Re),fog:!!ge,useFog:E.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&an===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Me,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Ut&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===Bt,decodeVideoTextureEmissive:cn&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Un,flipSided:E.side===Qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)D.push(X),D.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(y(D,E),O(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function y(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function O(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function P(E){const D=M[E.type];let X;if(D){const G=Gi[D];X=rM.clone(G.uniforms)}else X=E.uniforms;return X}function w(E,D){let X=v.get(D);return X!==void 0?++X.usedTimes:(X=new OT(s,D,E,l),h.push(X),v.set(D,X)),X}function z(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),v.delete(E.cacheKey),E.destroy()}}function N(E){p.remove(E)}function I(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:P,acquireProgram:w,releaseProgram:z,releaseShaderCache:N,programs:h,dispose:I}}function HT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function GT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Kv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,S,y){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:M,material:T,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:y},s[e]=O):(O.id=g.id,O.object=g,O.geometry=M,O.material=T,O.materialVariant=d(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=S,O.group=y),e++,O}function m(g,M,T,C,S,y){const O=p(g,M,T,C,S,y);T.transmission>0?r.push(O):T.transparent===!0?l.push(O):i.push(O)}function h(g,M,T,C,S,y){const O=p(g,M,T,C,S,y);T.transmission>0?r.unshift(O):T.transparent===!0?l.unshift(O):i.unshift(O)}function v(g,M,T){i.length>1&&i.sort(g||GT),r.length>1&&r.sort(M||Zv),l.length>1&&l.sort(M||Zv),T&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,M=s.length;g<M;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:x,sort:v}}function VT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Kv,s.set(r,[d])):l>=c.length?(d=new Kv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function kT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new St};break;case"SpotLight":i={position:new J,direction:new J,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=i,i}}}function XT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let WT=0;function qT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YT(s){const e=new kT,i=XT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const l=new J,c=new tn,d=new tn;function p(h){let v=0,x=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,C=0,S=0,y=0,O=0,P=0,w=0,z=0,N=0,I=0;h.sort(qT);for(let D=0,X=h.length;D<X;D++){const G=h[D],W=G.color,ce=G.intensity,ge=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Vr?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=W.r*ce,x+=W.g*ce,g+=W.b*ce;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],ce);I++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=G.shadow.matrix,O++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(W).multiplyScalar(ce),B.distance=ge,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[C]=B;const H=G.shadow;if(G.map&&(r.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[C]=H.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=Q,w++}C++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(W).multiplyScalar(ce),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[T]=$,r.pointShadowMap[T]=Q,r.pointShadowMatrix[T]=G.shadow.matrix,P++}r.point[T]=B,T++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(ce),B.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[y]=B,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==T||E.spotLength!==C||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==O||E.numPointShadows!==P||E.numSpotShadows!==w||E.numSpotMaps!==z||E.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=w+z-N,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=I,E.directionalLength=M,E.pointLength=T,E.spotLength=C,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=O,E.numPointShadows=P,E.numSpotShadows=w,E.numSpotMaps=z,E.numLightProbes=I,r.version=WT++)}function m(h,v){let x=0,g=0,M=0,T=0,C=0;const S=v.matrixWorldInverse;for(let y=0,O=h.length;y<O;y++){const P=h[y];if(P.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),x++}else if(P.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),d.identity(),c.copy(P.matrixWorld),c.premultiply(S),d.extractRotation(c),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),g++}else if(P.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function Qv(s){const e=new YT(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:v,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function ZT(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Qv(s),e.set(l,[p])):c>=d.length?(p=new Qv(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jT=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],JT=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],jv=new tn,Wo=new J,kd=new J;function $T(s,e,i){let r=new jh;const l=new ht,c=new ht,d=new en,p=new cM,m=new uM,h={},v=i.maxTextureSize,x={[Ea]:Qn,[Qn]:Ea,[Un]:Un},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:KT,fragmentShader:QT}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new jn;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wt(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let y=this.type;this.render=function(N,I,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===$y&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ic);const D=s.getRenderTarget(),X=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Ma),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ce=y!==this.type;ce&&I.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(Q=>Q.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,Q=N.length;ge<Q;ge++){const B=N[ge],H=B.shadow;if(H===void 0){nt("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();l.multiply($),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,H.mapSize.y=c.y));const fe=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=fe,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qo){if(B.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Vr,type:Ta,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Gs(l.x,l.y,Vi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Aa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else B.isPointLight?(H.map=new D_(l.x),H.map.depthTexture=new iM(l.x,Yi)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new Gs(l.x,l.y,Yi)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Aa,this.type===Ic?(H.map.depthTexture.compareFunction=fe?Yh:qh,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn);H.camera.updateProjectionMatrix()}const Ee=H.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Ee;L++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,L),s.clear();else{L===0&&(s.setRenderTarget(H.map),s.clear());const Z=H.getViewport(L);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),W.viewport(d)}if(B.isPointLight){const Z=H.camera,Me=H.matrix,Te=B.distance||Z.far;Te!==Z.far&&(Z.far=Te,Z.updateProjectionMatrix()),Wo.setFromMatrixPosition(B.matrixWorld),Z.position.copy(Wo),kd.copy(Z.position),kd.add(jT[L]),Z.up.copy(JT[L]),Z.lookAt(kd),Z.updateMatrixWorld(),Me.makeTranslation(-Wo.x,-Wo.y,-Wo.z),jv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(jv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(B);r=H.getFrustum(),w(I,E,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===qo&&O(H,E),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(D,X,G)};function O(N,I){const E=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Wi(l.x,l.y,{format:Vr,type:Ta})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(I,null,E,g,C,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(I,null,E,M,C,null)}function P(N,I,E,D){let X=null;const G=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)X=G;else if(X=E.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=X.uuid,ce=I.uuid;let ge=h[W];ge===void 0&&(ge={},h[W]=ge);let Q=ge[ce];Q===void 0&&(Q=X.clone(),ge[ce]=Q,I.addEventListener("dispose",z)),X=Q}if(X.visible=I.visible,X.wireframe=I.wireframe,D===qo?X.side=I.shadowSide!==null?I.shadowSide:I.side:X.side=I.shadowSide!==null?I.shadowSide:x[I.side],X.alphaMap=I.alphaMap,X.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,X.map=I.map,X.clipShadows=I.clipShadows,X.clippingPlanes=I.clippingPlanes,X.clipIntersection=I.clipIntersection,X.displacementMap=I.displacementMap,X.displacementScale=I.displacementScale,X.displacementBias=I.displacementBias,X.wireframeLinewidth=I.wireframeLinewidth,X.linewidth=I.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const W=s.properties.get(X);W.light=E}return X}function w(N,I,E,D,X){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===qo)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),ge=N.material;if(Array.isArray(ge)){const Q=ce.groups;for(let B=0,H=Q.length;B<H;B++){const $=Q[B],fe=ge[$.materialIndex];if(fe&&fe.visible){const Ee=P(N,fe,D,X);N.onBeforeShadow(s,N,I,E,ce,Ee,$),s.renderBufferDirect(E,null,ce,Ee,N,$),N.onAfterShadow(s,N,I,E,ce,Ee,$)}}}else if(ge.visible){const Q=P(N,ge,D,X);N.onBeforeShadow(s,N,I,E,ce,Q,null),s.renderBufferDirect(E,null,ce,Q,N,null),N.onAfterShadow(s,N,I,E,ce,Q,null)}}const W=N.children;for(let ce=0,ge=W.length;ce<ge;ce++)w(W[ce],I,E,D,X)}function z(N){N.target.removeEventListener("dispose",z);for(const E in h){const D=h[E],X=N.target.uuid;X in D&&(D[X].dispose(),delete D[X])}}}function eA(s,e){function i(){let k=!1;const Re=new en;let xe=null;const De=new en(0,0,0,0);return{setMask:function(Be){xe!==Be&&!k&&(s.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){k=Be},setClear:function(Be,be,qe,Ve,Kt){Kt===!0&&(Be*=Ve,be*=Ve,qe*=Ve),Re.set(Be,be,qe,Ve),De.equals(Re)===!1&&(s.clearColor(Be,be,qe,Ve),De.copy(Re))},reset:function(){k=!1,xe=null,De.set(-1,0,0,0)}}}function r(){let k=!1,Re=!1,xe=null,De=null,Be=null;return{setReversed:function(be){if(Re!==be){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Ve=Be;Be=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(be){be?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){xe!==be&&!k&&(s.depthMask(be),xe=be)},setFunc:function(be){if(Re&&(be=NS[be]),De!==be){switch(be){case Yd:s.depthFunc(s.NEVER);break;case Zd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case Qd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Jd:s.depthFunc(s.GREATER);break;case $d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=be}},setLocked:function(be){k=be},setClear:function(be){Be!==be&&(Be=be,Re&&(be=1-be),s.clearDepth(be))},reset:function(){k=!1,xe=null,De=null,Be=null,Re=!1}}}function l(){let k=!1,Re=null,xe=null,De=null,Be=null,be=null,qe=null,Ve=null,Kt=null;return{setTest:function(Nt){k||(Nt?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Nt){Re!==Nt&&!k&&(s.stencilMask(Nt),Re=Nt)},setFunc:function(Nt,Jn,$n){(xe!==Nt||De!==Jn||Be!==$n)&&(s.stencilFunc(Nt,Jn,$n),xe=Nt,De=Jn,Be=$n)},setOp:function(Nt,Jn,$n){(be!==Nt||qe!==Jn||Ve!==$n)&&(s.stencilOp(Nt,Jn,$n),be=Nt,qe=Jn,Ve=$n)},setLocked:function(Nt){k=Nt},setClear:function(Nt){Kt!==Nt&&(s.clearStencil(Nt),Kt=Nt)},reset:function(){k=!1,Re=null,xe=null,De=null,Be=null,be=null,qe=null,Ve=null,Kt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},x={},g={},M=new WeakMap,T=[],C=null,S=!1,y=null,O=null,P=null,w=null,z=null,N=null,I=null,E=new St(0,0,0),D=0,X=!1,G=null,W=null,ce=null,ge=null,Q=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(fe)[1]),H=$>=1):fe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),H=$>=2);let Ee=null,L={};const Z=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Te=new en().fromArray(Z),Pe=new en().fromArray(Me);function ae(k,Re,xe,De){const Be=new Uint8Array(4),be=s.createTexture();s.bindTexture(k,be),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<xe;qe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Re+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return be}const le={};le[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ve(s.DEPTH_TEST),d.setFunc(Fs),nn(!1),an(Z0),ve(s.CULL_FACE),pt(Ma);function ve(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function we(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function Ke(k,Re){return g[k]!==Re?(s.bindFramebuffer(k,Re),g[k]=Re,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ye(k,Re){let xe=T,De=!1;if(k){xe=M.get(Re),xe===void 0&&(xe=[],M.set(Re,xe));const Be=k.textures;if(xe.length!==Be.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,qe=Be.length;be<qe;be++)xe[be]=s.COLOR_ATTACHMENT0+be;xe.length=Be.length,De=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,De=!0);De&&s.drawBuffers(xe)}function Ut(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const at={[Ir]:s.FUNC_ADD,[tS]:s.FUNC_SUBTRACT,[nS]:s.FUNC_REVERSE_SUBTRACT};at[iS]=s.MIN,at[aS]=s.MAX;const ot={[rS]:s.ZERO,[sS]:s.ONE,[oS]:s.SRC_COLOR,[Wd]:s.SRC_ALPHA,[hS]:s.SRC_ALPHA_SATURATE,[fS]:s.DST_COLOR,[cS]:s.DST_ALPHA,[lS]:s.ONE_MINUS_SRC_COLOR,[qd]:s.ONE_MINUS_SRC_ALPHA,[dS]:s.ONE_MINUS_DST_COLOR,[uS]:s.ONE_MINUS_DST_ALPHA,[pS]:s.CONSTANT_COLOR,[mS]:s.ONE_MINUS_CONSTANT_COLOR,[gS]:s.CONSTANT_ALPHA,[vS]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(k,Re,xe,De,Be,be,qe,Ve,Kt,Nt){if(k===Ma){S===!0&&(we(s.BLEND),S=!1);return}if(S===!1&&(ve(s.BLEND),S=!0),k!==eS){if(k!==y||Nt!==X){if((O!==Ir||z!==Ir)&&(s.blendEquation(s.FUNC_ADD),O=Ir,z=Ir),Nt)switch(k){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K0:s.blendFunc(s.ONE,s.ONE);break;case Q0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",k);break}else switch(k){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Q0:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",k);break}P=null,w=null,N=null,I=null,E.set(0,0,0),D=0,y=k,X=Nt}return}Be=Be||Re,be=be||xe,qe=qe||De,(Re!==O||Be!==z)&&(s.blendEquationSeparate(at[Re],at[Be]),O=Re,z=Be),(xe!==P||De!==w||be!==N||qe!==I)&&(s.blendFuncSeparate(ot[xe],ot[De],ot[be],ot[qe]),P=xe,w=De,N=be,I=qe),(Ve.equals(E)===!1||Kt!==D)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Kt),E.copy(Ve),D=Kt),y=k,X=!1}function ut(k,Re){k.side===Un?we(s.CULL_FACE):ve(s.CULL_FACE);let xe=k.side===Qn;Re&&(xe=!xe),nn(xe),k.blending===Is&&k.transparent===!1?pt(Ma):pt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const De=k.stencilWrite;p.setTest(De),De&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),cn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function nn(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function an(k){k!==jy?(ve(s.CULL_FACE),k!==W&&(k===Z0?s.cullFace(s.BACK):k===Jy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),W=k}function rn(k){k!==ce&&(H&&s.lineWidth(k),ce=k)}function cn(k,Re,xe){k?(ve(s.POLYGON_OFFSET_FILL),(ge!==Re||Q!==xe)&&(ge=Re,Q=xe,d.getReversed()&&(Re=-Re),s.polygonOffset(Re,xe))):we(s.POLYGON_OFFSET_FILL)}function qt(k){k?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function sn(k){k===void 0&&(k=s.TEXTURE0+B-1),Ee!==k&&(s.activeTexture(k),Ee=k)}function Y(k,Re,xe){xe===void 0&&(Ee===null?xe=s.TEXTURE0+B-1:xe=Ee);let De=L[xe];De===void 0&&(De={type:void 0,texture:void 0},L[xe]=De),(De.type!==k||De.texture!==Re)&&(Ee!==xe&&(s.activeTexture(xe),Ee=xe),s.bindTexture(k,Re||le[k]),De.type=k,De.texture=Re)}function Ft(){const k=L[Ee];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function b(){try{s.texSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function j(){try{s.texSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function pe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Ae(){try{s.texStorage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function Ue(){try{s.texStorage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function de(){try{s.texImage2D(...arguments)}catch(k){Et("WebGLState:",k)}}function me(){try{s.texImage3D(...arguments)}catch(k){Et("WebGLState:",k)}}function Ce(k){return x[k]!==void 0?x[k]:s.getParameter(k)}function Fe(k,Re){x[k]!==Re&&(s.pixelStorei(k,Re),x[k]=Re)}function Oe(k){Te.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Ne(k){Pe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Pe.copy(k))}function je(k,Re){let xe=h.get(Re);xe===void 0&&(xe=new WeakMap,h.set(Re,xe));let De=xe.get(k);De===void 0&&(De=s.getUniformBlockIndex(Re,k.name),xe.set(k,De))}function Je(k,Re){const De=h.get(Re).get(k);m.get(Re)!==De&&(s.uniformBlockBinding(Re,De,k.__bindingPointIndex),m.set(Re,De))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},Ee=null,L={},g={},M=new WeakMap,T=[],C=null,S=!1,y=null,O=null,P=null,w=null,z=null,N=null,I=null,E=new St(0,0,0),D=0,X=!1,G=null,W=null,ce=null,ge=null,Q=null,Te.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:ve,disable:we,bindFramebuffer:Ke,drawBuffers:Ye,useProgram:Ut,setBlending:pt,setMaterial:ut,setFlipSided:nn,setCullFace:an,setLineWidth:rn,setPolygonOffset:cn,setScissorTest:qt,activeTexture:sn,bindTexture:Y,unbindTexture:Ft,compressedTexImage2D:Ct,compressedTexImage3D:U,texImage2D:de,texImage3D:me,pixelStorei:Fe,getParameter:Ce,updateUBOMapping:je,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:re,compressedTexSubImage3D:pe,scissor:Oe,viewport:Ne,reset:it}}function tA(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,b){return T?new OffscreenCanvas(U,b):qc("canvas")}function S(U,b,j){let re=1;const pe=Ct(U);if((pe.width>j||pe.height>j)&&(re=j/Math.max(pe.width,pe.height)),re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ae=Math.floor(re*pe.width),Ue=Math.floor(re*pe.height);g===void 0&&(g=C(Ae,Ue));const de=b?C(Ae,Ue):g;return de.width=Ae,de.height=Ue,de.getContext("2d").drawImage(U,0,0,Ae,Ue),nt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Ue+")."),de}else return"data"in U&&nt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function y(U){return U.generateMipmaps}function O(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,b,j,re,pe,Ae=!1){if(U!==null){if(s[U]!==void 0)return s[U];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;re&&(Ue=e.get("EXT_texture_norm16"),Ue||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=b;if(b===s.RED&&(j===s.FLOAT&&(de=s.R32F),j===s.HALF_FLOAT&&(de=s.R16F),j===s.UNSIGNED_BYTE&&(de=s.R8),j===s.UNSIGNED_SHORT&&Ue&&(de=Ue.R16_EXT),j===s.SHORT&&Ue&&(de=Ue.R16_SNORM_EXT)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.R8UI),j===s.UNSIGNED_SHORT&&(de=s.R16UI),j===s.UNSIGNED_INT&&(de=s.R32UI),j===s.BYTE&&(de=s.R8I),j===s.SHORT&&(de=s.R16I),j===s.INT&&(de=s.R32I)),b===s.RG&&(j===s.FLOAT&&(de=s.RG32F),j===s.HALF_FLOAT&&(de=s.RG16F),j===s.UNSIGNED_BYTE&&(de=s.RG8),j===s.UNSIGNED_SHORT&&Ue&&(de=Ue.RG16_EXT),j===s.SHORT&&Ue&&(de=Ue.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.RG8UI),j===s.UNSIGNED_SHORT&&(de=s.RG16UI),j===s.UNSIGNED_INT&&(de=s.RG32UI),j===s.BYTE&&(de=s.RG8I),j===s.SHORT&&(de=s.RG16I),j===s.INT&&(de=s.RG32I)),b===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.RGB8UI),j===s.UNSIGNED_SHORT&&(de=s.RGB16UI),j===s.UNSIGNED_INT&&(de=s.RGB32UI),j===s.BYTE&&(de=s.RGB8I),j===s.SHORT&&(de=s.RGB16I),j===s.INT&&(de=s.RGB32I)),b===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),j===s.UNSIGNED_INT&&(de=s.RGBA32UI),j===s.BYTE&&(de=s.RGBA8I),j===s.SHORT&&(de=s.RGBA16I),j===s.INT&&(de=s.RGBA32I)),b===s.RGB&&(j===s.UNSIGNED_SHORT&&Ue&&(de=Ue.RGB16_EXT),j===s.SHORT&&Ue&&(de=Ue.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),b===s.RGBA){const me=Ae?Wc:bt.getTransfer(pe);j===s.FLOAT&&(de=s.RGBA32F),j===s.HALF_FLOAT&&(de=s.RGBA16F),j===s.UNSIGNED_BYTE&&(de=me===Bt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&Ue&&(de=Ue.RGBA16_EXT),j===s.SHORT&&Ue&&(de=Ue.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function z(U,b){let j;return U?b===null||b===Yi||b===Qo?j=s.DEPTH24_STENCIL8:b===Vi?j=s.DEPTH32F_STENCIL8:b===Ko&&(j=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Qo?j=s.DEPTH_COMPONENT24:b===Vi?j=s.DEPTH_COMPONENT32F:b===Ko&&(j=s.DEPTH_COMPONENT16),j}function N(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Nn&&U.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function I(U){const b=U.target;b.removeEventListener("dispose",I),D(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&x.delete(b)}function E(U){const b=U.target;b.removeEventListener("dispose",E),G(b)}function D(U){const b=r.get(U);if(b.__webglInit===void 0)return;const j=U.source,re=M.get(j);if(re){const pe=re[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&X(U),Object.keys(re).length===0&&M.delete(j)}r.remove(U)}function X(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const j=U.source,re=M.get(j);delete re[b.__cacheKey],d.memory.textures--}function G(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let pe=0;pe<b.__webglFramebuffer[re].length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[re][pe]);else s.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)s.deleteFramebuffer(b.__webglFramebuffer[re]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=U.textures;for(let re=0,pe=j.length;re<pe;re++){const Ae=r.get(j[re]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),d.memory.textures--),r.remove(j[re])}r.remove(U)}let W=0;function ce(){W=0}function ge(){return W}function Q(U){W=U}function B(){const U=W;return U>=l.maxTextures&&nt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),W+=1,U}function H(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function $(U,b){const j=r.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&j.__version!==U.version){const re=U.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(j,U,b);return}}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function fe(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){we(j,U,b);return}else U.isExternalTexture&&(j.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function Ee(U,b){const j=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){we(j,U,b);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function L(U,b){const j=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&j.__version!==U.version){Ke(j,U,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const Z={[eh]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[th]:s.MIRRORED_REPEAT},Me={[Nn]:s.NEAREST,[yS]:s.NEAREST_MIPMAP_NEAREST,[hc]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Te={[bS]:s.NEVER,[CS]:s.ALWAYS,[ES]:s.LESS,[qh]:s.LEQUAL,[TS]:s.EQUAL,[Yh]:s.GEQUAL,[AS]:s.GREATER,[RS]:s.NOTEQUAL};function Pe(U,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===fd||b.magFilter===hc||b.magFilter===Br||b.minFilter===zn||b.minFilter===fd||b.minFilter===hc||b.minFilter===Br)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Z[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Me[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==hc&&b.minFilter!==Br||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ae(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",I));const re=b.source;let pe=M.get(re);pe===void 0&&(pe={},M.set(re,pe));const Ae=H(b);if(Ae!==U.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,j=!0),pe[Ae].usedTimes++;const Ue=pe[U.__cacheKey];Ue!==void 0&&(pe[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&X(b)),U.__cacheKey=Ae,U.__webglTexture=pe[Ae].texture}return j}function le(U,b,j){return Math.floor(Math.floor(U/j)/b)}function ve(U,b,j,re){const Ae=U.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,j,re,b.data);else{Ae.sort((Fe,Oe)=>Fe.start-Oe.start);let Ue=0;for(let Fe=1;Fe<Ae.length;Fe++){const Oe=Ae[Ue],Ne=Ae[Fe],je=Oe.start+Oe.count,Je=le(Ne.start,b.width,4),it=le(Oe.start,b.width,4);Ne.start<=je+1&&Je===it&&le(Ne.start+Ne.count-1,b.width,4)===Je?Oe.count=Math.max(Oe.count,Ne.start+Ne.count-Oe.start):(++Ue,Ae[Ue]=Ne)}Ae.length=Ue+1;const de=i.getParameter(s.UNPACK_ROW_LENGTH),me=i.getParameter(s.UNPACK_SKIP_PIXELS),Ce=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,Oe=Ae.length;Fe<Oe;Fe++){const Ne=Ae[Fe],je=Math.floor(Ne.start/4),Je=Math.ceil(Ne.count/4),it=je%b.width,k=Math.floor(je/b.width),Re=Je,xe=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,it),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,it,k,Re,xe,j,re,b.data)}U.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,de),i.pixelStorei(s.UNPACK_SKIP_PIXELS,me),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function we(U,b,j){let re=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=s.TEXTURE_3D);const pe=ae(U,b),Ae=b.source;i.bindTexture(re,U.__webglTexture,s.TEXTURE0+j);const Ue=r.get(Ae);if(Ae.version!==Ue.__version||pe===!0){if(i.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const xe=bt.getPrimaries(bt.workingColorSpace),De=b.colorSpace===or?null:bt.getPrimaries(b.colorSpace),Be=b.colorSpace===or||xe===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let me=S(b.image,!1,l.maxTextureSize);me=Ft(b,me);const Ce=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Oe=w(b.internalFormat,Ce,Fe,b.normalized,b.colorSpace,b.isVideoTexture);Pe(re,b);let Ne;const je=b.mipmaps,Je=b.isVideoTexture!==!0,it=Ue.__version===void 0||pe===!0,k=Ae.dataReady,Re=N(b,me);if(b.isDepthTexture)Oe=z(b.format===Fr,b.type),it&&(Je?i.texStorage2D(s.TEXTURE_2D,1,Oe,me.width,me.height):i.texImage2D(s.TEXTURE_2D,0,Oe,me.width,me.height,0,Ce,Fe,null));else if(b.isDataTexture)if(je.length>0){Je&&it&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,je[0].width,je[0].height);for(let xe=0,De=je.length;xe<De;xe++)Ne=je[xe],Je?k&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ce,Fe,Ne.data):i.texImage2D(s.TEXTURE_2D,xe,Oe,Ne.width,Ne.height,0,Ce,Fe,Ne.data);b.generateMipmaps=!1}else Je?(it&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,me.width,me.height),k&&ve(b,me,Ce,Fe)):i.texImage2D(s.TEXTURE_2D,0,Oe,me.width,me.height,0,Ce,Fe,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Oe,je[0].width,je[0].height,me.depth);for(let xe=0,De=je.length;xe<De;xe++)if(Ne=je[xe],b.format!==Ni)if(Ce!==null)if(Je){if(k)if(b.layerUpdates.size>0){const Be=Cv(Ne.width,Ne.height,b.format,b.type);for(const be of b.layerUpdates){const qe=Ne.data.subarray(be*Be/Ne.data.BYTES_PER_ELEMENT,(be+1)*Be/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,be,Ne.width,Ne.height,1,Ce,qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,me.depth,Ce,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Oe,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,me.depth,Ce,Fe,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,xe,Oe,Ne.width,Ne.height,me.depth,0,Ce,Fe,Ne.data)}else{Je&&it&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,je[0].width,je[0].height);for(let xe=0,De=je.length;xe<De;xe++)Ne=je[xe],b.format!==Ni?Ce!==null?Je?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ce,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,xe,Oe,Ne.width,Ne.height,0,Ne.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?k&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ce,Fe,Ne.data):i.texImage2D(s.TEXTURE_2D,xe,Oe,Ne.width,Ne.height,0,Ce,Fe,Ne.data)}else if(b.isDataArrayTexture)if(Je){if(it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Oe,me.width,me.height,me.depth),k)if(b.layerUpdates.size>0){const xe=Cv(me.width,me.height,b.format,b.type);for(const De of b.layerUpdates){const Be=me.data.subarray(De*xe/me.data.BYTES_PER_ELEMENT,(De+1)*xe/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,me.width,me.height,1,Ce,Fe,Be)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Fe,me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,me.width,me.height,me.depth,0,Ce,Fe,me.data);else if(b.isData3DTexture)Je?(it&&i.texStorage3D(s.TEXTURE_3D,Re,Oe,me.width,me.height,me.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Fe,me.data)):i.texImage3D(s.TEXTURE_3D,0,Oe,me.width,me.height,me.depth,0,Ce,Fe,me.data);else if(b.isFramebufferTexture){if(it)if(Je)i.texStorage2D(s.TEXTURE_2D,Re,Oe,me.width,me.height);else{let xe=me.width,De=me.height;for(let Be=0;Be<Re;Be++)i.texImage2D(s.TEXTURE_2D,Be,Oe,xe,De,0,Ce,Fe,null),xe>>=1,De>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),x.add(b),xe.onpaint=De=>{const Be=De.changedElements;for(const be of x)Be.includes(be.image)&&(be.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const Be=s.RGBA,be=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,be,qe,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if(Je&&it){const xe=Ct(je[0]);i.texStorage2D(s.TEXTURE_2D,Re,Oe,xe.width,xe.height)}for(let xe=0,De=je.length;xe<De;xe++)Ne=je[xe],Je?k&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce,Fe,Ne):i.texImage2D(s.TEXTURE_2D,xe,Oe,Ce,Fe,Ne);b.generateMipmaps=!1}else if(Je){if(it){const xe=Ct(me);i.texStorage2D(s.TEXTURE_2D,Re,Oe,xe.width,xe.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Fe,me)}else i.texImage2D(s.TEXTURE_2D,0,Oe,Ce,Fe,me);y(b)&&O(re),Ue.__version=Ae.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ke(U,b,j){if(b.image.length!==6)return;const re=ae(U,b),pe=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);const Ae=r.get(pe);if(pe.version!==Ae.__version||re===!0){i.activeTexture(s.TEXTURE0+j);const Ue=bt.getPrimaries(bt.workingColorSpace),de=b.colorSpace===or?null:bt.getPrimaries(b.colorSpace),me=b.colorSpace===or||Ue===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,Oe=[];for(let be=0;be<6;be++)!Ce&&!Fe?Oe[be]=S(b.image[be],!0,l.maxCubemapSize):Oe[be]=Fe?b.image[be].image:b.image[be],Oe[be]=Ft(b,Oe[be]);const Ne=Oe[0],je=c.convert(b.format,b.colorSpace),Je=c.convert(b.type),it=w(b.internalFormat,je,Je,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Re=Ae.__version===void 0||re===!0,xe=pe.dataReady;let De=N(b,Ne);Pe(s.TEXTURE_CUBE_MAP,b);let Be;if(Ce){k&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,it,Ne.width,Ne.height);for(let be=0;be<6;be++){Be=Oe[be].mipmaps;for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];b.format!==Ni?je!==null?k?xe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ve.width,Ve.height,je,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ve.width,Ve.height,je,Je,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,it,Ve.width,Ve.height,0,je,Je,Ve.data)}}}else{if(Be=b.mipmaps,k&&Re){Be.length>0&&De++;const be=Ct(Oe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,it,be.width,be.height)}for(let be=0;be<6;be++)if(Fe){k?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Oe[be].width,Oe[be].height,je,Je,Oe[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Oe[be].width,Oe[be].height,0,je,Je,Oe[be].data);for(let qe=0;qe<Be.length;qe++){const Kt=Be[qe].image[be].image;k?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,Kt.width,Kt.height,je,Je,Kt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,it,Kt.width,Kt.height,0,je,Je,Kt.data)}}else{k?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,Je,Oe[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,je,Je,Oe[be]);for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];k?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,je,Je,Ve.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,it,je,Je,Ve.image[be])}}}y(b)&&O(s.TEXTURE_CUBE_MAP),Ae.__version=pe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ye(U,b,j,re,pe,Ae){const Ue=c.convert(j.format,j.colorSpace),de=c.convert(j.type),me=w(j.internalFormat,Ue,de,j.normalized,j.colorSpace),Ce=r.get(b),Fe=r.get(j);if(Fe.__renderTarget=b,!Ce.__hasExternalTextures){const Oe=Math.max(1,b.width>>Ae),Ne=Math.max(1,b.height>>Ae);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?i.texImage3D(pe,Ae,me,Oe,Ne,b.depth,0,Ue,de,null):i.texImage2D(pe,Ae,me,Oe,Ne,0,Ue,de,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),sn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,pe,Fe.__webglTexture,0,qt(b)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,pe,Fe.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(U,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const re=b.depthTexture,pe=re&&re.isDepthTexture?re.type:null,Ae=z(b.stencilBuffer,pe),Ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;sn(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(b),Ae,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(b),Ae,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,U)}else{const re=b.textures;for(let pe=0;pe<re.length;pe++){const Ae=re[pe],Ue=c.convert(Ae.format,Ae.colorSpace),de=c.convert(Ae.type),me=w(Ae.internalFormat,Ue,de,Ae.normalized,Ae.colorSpace);sn(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(b),me,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(b),me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(U,b,j){const re=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(b.depthTexture);if(pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),Fe=c.convert(b.depthTexture.type);let Oe;b.depthTexture.format===Aa?Oe=s.DEPTH_COMPONENT24:b.depthTexture.format===Fr&&(Oe=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Oe,b.width,b.height,0,Ce,Fe,null)}}else $(b.depthTexture,0);const Ae=pe.__webglTexture,Ue=qt(b),de=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,me=b.depthTexture.format===Fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Aa)sn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,de,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,me,de,Ae,0);else if(b.depthTexture.format===Fr)sn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,de,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,me,de,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(U){const b=r.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const re=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",pe)};re.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=re}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let re=0;re<6;re++)at(b.__webglFramebuffer[re],U,re);else{const re=U.texture.mipmaps;re&&re.length>0?at(b.__webglFramebuffer[0],U,0):at(b.__webglFramebuffer,U,0)}else if(j){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=s.createRenderbuffer(),Ut(b.__webglDepthbuffer[re],U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ae)}}else{const re=U.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ut(b.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(U,b,j){const re=r.get(U);b!==void 0&&Ye(re.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ot(U)}function ut(U){const b=U.texture,j=r.get(U),re=r.get(b);U.addEventListener("dispose",E);const pe=U.textures,Ae=U.isWebGLCubeRenderTarget===!0,Ue=pe.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=b.version,d.memory.textures++),Ae){j.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[de]=[];for(let me=0;me<b.mipmaps.length;me++)j.__webglFramebuffer[de][me]=s.createFramebuffer()}else j.__webglFramebuffer[de]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)j.__webglFramebuffer[de]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let de=0,me=pe.length;de<me;de++){const Ce=r.get(pe[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&sn(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let de=0;de<pe.length;de++){const me=pe[de];j.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[de]);const Ce=c.convert(me.format,me.colorSpace),Fe=c.convert(me.type),Oe=w(me.internalFormat,Ce,Fe,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),Ne=qt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Oe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,j.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(j.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Ye(j.__webglFramebuffer[de][me],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Ye(j.__webglFramebuffer[de],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);y(b)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let de=0,me=pe.length;de<me;de++){const Ce=pe[de],Fe=r.get(Ce);let Oe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Fe.__webglTexture),Pe(Oe,Ce),Ye(j.__webglFramebuffer,U,Ce,s.COLOR_ATTACHMENT0+de,Oe,0),y(Ce)&&O(Oe)}i.unbindTexture()}else{let de=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(de,re.__webglTexture),Pe(de,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Ye(j.__webglFramebuffer[me],U,b,s.COLOR_ATTACHMENT0,de,me);else Ye(j.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,de,0);y(b)&&O(de),i.unbindTexture()}U.depthBuffer&&ot(U)}function nn(U){const b=U.textures;for(let j=0,re=b.length;j<re;j++){const pe=b[j];if(y(pe)){const Ae=P(U),Ue=r.get(pe).__webglTexture;i.bindTexture(Ae,Ue),O(Ae),i.unbindTexture()}}}const an=[],rn=[];function cn(U){if(U.samples>0){if(sn(U)===!1){const b=U.textures,j=U.width,re=U.height;let pe=s.COLOR_BUFFER_BIT;const Ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(U),de=b.length>1;if(de)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const Fe=r.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,j,re,0,0,j,re,pe,s.NEAREST),m===!0&&(an.length=0,rn.length=0,an.push(s.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(an.push(Ae),rn.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,an))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const Fe=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Fe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function qt(U){return Math.min(l.maxSamples,U.samples)}function sn(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(U){const b=d.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function Ft(U,b){const j=U.colorSpace,re=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Xc&&j!==or&&(bt.getTransfer(j)===Bt?(re!==Ni||pe!==di)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",j)),b}function Ct(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=ce,this.getTextureUnits=ge,this.setTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=fe,this.setTexture3D=Ee,this.setTextureCube=L,this.rebindTextures=pt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function nA(s,e){function i(r,l=or){let c;const d=bt.getTransfer(l);if(r===di)return s.UNSIGNED_BYTE;if(r===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===f_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===d_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===c_)return s.BYTE;if(r===u_)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===Hh)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Ta)return s.HALF_FLOAT;if(r===h_)return s.ALPHA;if(r===p_)return s.RGB;if(r===Ni)return s.RGBA;if(r===Aa)return s.DEPTH_COMPONENT;if(r===Fr)return s.DEPTH_STENCIL;if(r===m_)return s.RED;if(r===kh)return s.RED_INTEGER;if(r===Vr)return s.RG;if(r===Xh)return s.RG_INTEGER;if(r===Wh)return s.RGBA_INTEGER;if(r===zc||r===Bc||r===Fc||r===Hc)if(d===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nh||r===ih||r===ah||r===rh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sh||r===oh||r===lh||r===ch||r===uh||r===Vc||r===fh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===sh||r===oh)return d===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===lh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ch)return c.COMPRESSED_R11_EAC;if(r===uh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Vc)return c.COMPRESSED_RG11_EAC;if(r===fh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===yh||r===Sh||r===Mh||r===bh||r===Eh||r===Th)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===dh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ph)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ah||r===Rh||r===Ch)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ah)return d===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wh||r===Dh||r===kc||r===Uh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===wh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new E_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Zi({vertexShader:iA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wt(new Qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends kr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,x=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new rA,y={},O=i.getContextAttributes();let P=null,w=null;const z=[],N=[],I=new ht;let E=null;const D=new fi;D.viewport=new en;const X=new fi;X.viewport=new en;const G=[D,X],W=new mM;let ce=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let le=z[ae];return le===void 0&&(le=new xd,z[ae]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ae){let le=z[ae];return le===void 0&&(le=new xd,z[ae]=le),le.getGripSpace()},this.getHand=function(ae){let le=z[ae];return le===void 0&&(le=new xd,z[ae]=le),le.getHandSpace()};function Q(ae){const le=N.indexOf(ae.inputSource);if(le===-1)return;const ve=z[le];ve!==void 0&&(ve.update(ae.inputSource,ae.frame,h||d),ve.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let ae=0;ae<z.length;ae++){const le=N[ae];le!==null&&(N[ae]=null,z[ae].disconnect(le))}ce=null,ge=null,S.reset();for(const ae in y)delete y[ae];e.setRenderTarget(P),M=null,g=null,x=null,l=null,w=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,we=null,Ke=null;O.depth&&(Ke=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=O.stencil?Fr:Aa,we=O.stencil?Qo:Yi);const Ye={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Ye),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Wi(g.textureWidth,g.textureHeight,{format:Ni,type:di,depthTexture:new Gs(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ve={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ve),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:di,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(ae){for(let le=0;le<ae.removed.length;le++){const ve=ae.removed[le],we=N.indexOf(ve);we>=0&&(N[we]=null,z[we].disconnect(ve))}for(let le=0;le<ae.added.length;le++){const ve=ae.added[le];let we=N.indexOf(ve);if(we===-1){for(let Ye=0;Ye<z.length;Ye++)if(Ye>=N.length){N.push(ve),we=Ye;break}else if(N[Ye]===null){N[Ye]=ve,we=Ye;break}if(we===-1)break}const Ke=z[we];Ke&&Ke.connect(ve)}}const $=new J,fe=new J;function Ee(ae,le,ve){$.setFromMatrixPosition(le.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const we=$.distanceTo(fe),Ke=le.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Ut=Ke[14]/(Ke[10]-1),at=Ke[14]/(Ke[10]+1),ot=(Ke[9]+1)/Ke[5],pt=(Ke[9]-1)/Ke[5],ut=(Ke[8]-1)/Ke[0],nn=(Ye[8]+1)/Ye[0],an=Ut*ut,rn=Ut*nn,cn=we/(-ut+nn),qt=cn*-ut;if(le.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(qt),ae.translateZ(cn),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ke[10]===-1)ae.projectionMatrix.copy(le.projectionMatrix),ae.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const sn=Ut+cn,Y=at+cn,Ft=an-qt,Ct=rn+(we-qt),U=ot*at/Y*sn,b=pt*at/Y*sn;ae.projectionMatrix.makePerspective(Ft,Ct,U,b,sn,Y),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function L(ae,le){le===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(le.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let le=ae.near,ve=ae.far;S.texture!==null&&(S.depthNear>0&&(le=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),W.near=X.near=D.near=le,W.far=X.far=D.far=ve,(ce!==W.near||ge!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),ce=W.near,ge=W.far),W.layers.mask=ae.layers.mask|6,D.layers.mask=W.layers.mask&-5,X.layers.mask=W.layers.mask&-3;const we=ae.parent,Ke=W.cameras;L(W,we);for(let Ye=0;Ye<Ke.length;Ye++)L(Ke[Ye],we);Ke.length===2?Ee(W,D,X):W.projectionMatrix.copy(D.projectionMatrix),Z(ae,W,we)};function Z(ae,le,ve){ve===null?ae.matrix.copy(le.matrixWorld):(ae.matrix.copy(ve.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(le.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(le.projectionMatrix),ae.projectionMatrixInverse.copy(le.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Lh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(ae){return y[ae]};let Me=null;function Te(ae,le){if(v=le.getViewerPose(h||d),T=le,v!==null){const ve=v.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let we=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,we=!0);for(let at=0;at<ve.length;at++){const ot=ve[at];let pt=null;if(M!==null)pt=M.getViewport(ot);else{const nn=x.getViewSubImage(g,ot);pt=nn.viewport,at===0&&(e.setRenderTargetTextures(w,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(w))}let ut=G[at];ut===void 0&&(ut=new fi,ut.layers.enable(at),ut.viewport=new en,G[at]=ut),ut.matrix.fromArray(ot.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(ot.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(pt.x,pt.y,pt.width,pt.height),at===0&&(W.matrix.copy(ut.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),we===!0&&W.cameras.push(ut)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const at=x.getDepthInformation(ve[0]);at&&at.isValid&&at.texture&&S.init(at,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let at=0;at<ve.length;at++){const ot=ve[at].camera;if(ot){let pt=y[ot];pt||(pt=new E_,y[ot]=pt);const ut=x.getCameraImage(ot);pt.sourceTexture=ut}}}}for(let ve=0;ve<z.length;ve++){const we=N[ve],Ke=z[ve];we!==null&&Ke!==void 0&&Ke.update(we,le,h||d)}Me&&Me(ae,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),T=null}const Pe=new C_;Pe.setAnimationLoop(Te),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const oA=new tn,P_=new st;P_.set(-1,0,0,0,1,0,0,0,1);function lA(s,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,T_(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,O,P,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&M(S,y,w)):y.isMeshMatcapMaterial?(c(S,y),T(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),C(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(d(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,O,P):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const O=e.get(y),P=O.envMap,w=O.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(w)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(P_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,O,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*O,S.scale.value=P*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,O){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const O=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function cA(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,z){const N=z.program;r.uniformBlockBinding(w,N)}function h(w,z){let N=l[w.id];N===void 0&&(S(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",O));const I=z.program;r.updateUBOMapping(w,I);const E=e.render.frame;c[w.id]!==E&&(g(w),c[w.id]=E)}function v(w){const z=x();w.__bindingPointIndex=z;const N=s.createBuffer(),I=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,I,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,z,N),N}function x(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const z=l[w.id],N=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,z);for(let E=0,D=N.length;E<D;E++){const X=N[E];if(Array.isArray(X))for(let G=0,W=X.length;G<W;G++)M(X[G],E,G,I);else M(X,E,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,z,N,I){if(C(w,z,N,I)===!0){const E=w.__offset,D=w.value;if(Array.isArray(D)){let X=0;for(let G=0;G<D.length;G++){const W=D[G],ce=y(W);T(W,w.__data,X),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,w.__data)}}function T(w,z,N){typeof w=="number"||typeof w=="boolean"?z[0]=w:w.isMatrix3?(z[0]=w.elements[0],z[1]=w.elements[1],z[2]=w.elements[2],z[3]=0,z[4]=w.elements[3],z[5]=w.elements[4],z[6]=w.elements[5],z[7]=0,z[8]=w.elements[6],z[9]=w.elements[7],z[10]=w.elements[8],z[11]=0):ArrayBuffer.isView(w)?z.set(new w.constructor(w.buffer,w.byteOffset,z.length)):w.toArray(z,N)}function C(w,z,N,I){const E=w.value,D=z+"_"+N;if(I[D]===void 0)return typeof E=="number"||typeof E=="boolean"?I[D]=E:ArrayBuffer.isView(E)?I[D]=E.slice():I[D]=E.clone(),!0;{const X=I[D];if(typeof E=="number"||typeof E=="boolean"){if(X!==E)return I[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(X.equals(E)===!1)return X.copy(E),!0}}return!1}function S(w){const z=w.uniforms;let N=0;const I=16;for(let D=0,X=z.length;D<X;D++){const G=Array.isArray(z[D])?z[D]:[z[D]];for(let W=0,ce=G.length;W<ce;W++){const ge=G[W],Q=Array.isArray(ge.value)?ge.value:[ge.value];for(let B=0,H=Q.length;B<H;B++){const $=Q[B],fe=y($),Ee=N%I,L=Ee%fe.boundary,Z=Ee+L;N+=L,Z!==0&&I-Z<fe.storage&&(N+=I-Z),ge.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=N,N+=fe.storage}}}const E=N%I;return E>0&&(N+=I-E),w.__size=N,w.__cache={},this}function y(w){const z={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(z.boundary=4,z.storage=4):w.isVector2?(z.boundary=8,z.storage=8):w.isVector3||w.isColor?(z.boundary=16,z.storage=12):w.isVector4?(z.boundary=16,z.storage=16):w.isMatrix3?(z.boundary=48,z.storage=48):w.isMatrix4?(z.boundary=64,z.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(z.boundary=16,z.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),z}function O(w){const z=w.target;z.removeEventListener("dispose",O);const N=d.indexOf(z.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function P(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:h,dispose:P}}const uA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function fA(){return Hi===null&&(Hi=new $S(uA,16,16,Vr,Ta),Hi.name="DFG_LUT",Hi.minFilter=zn,Hi.magFilter=zn,Hi.wrapS=Sa,Hi.wrapT=Sa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class dA{constructor(e={}){const{canvas:i=DS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=di}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=M,S=new Set([Wh,Xh,kh]),y=new Set([di,Yi,Ko,Qo,Gh,Vh]),O=new Uint32Array(4),P=new Int32Array(4),w=new J;let z=null,N=null;const I=[],E=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,W=null,ce=null,ge=null,Q=null;this._outputColorSpace=Mi;let B=0,H=0,$=null,fe=-1,Ee=null;const L=new en,Z=new en;let Me=null;const Te=new St(0);let Pe=0,ae=i.width,le=i.height,ve=1,we=null,Ke=null;const Ye=new en(0,0,ae,le),Ut=new en(0,0,ae,le);let at=!1;const ot=new jh;let pt=!1,ut=!1;const nn=new tn,an=new J,rn=new en,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function sn(){return $===null?ve:1}let Y=r;function Ft(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bh}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Jn,!1),Y===null){const q="webgl2";if(Y=Ft(q,A),Y===null)throw Ft(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let Ct,U,b,j,re,pe,Ae,Ue,de,me,Ce,Fe,Oe,Ne,je,Je,it,k,Re,xe,De,Be,be;function qe(){Ct=new f1(Y),Ct.init(),De=new nA(Y,Ct),U=new i1(Y,Ct,e,De),b=new eA(Y,Ct),U.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),ce=Y.createFramebuffer(),ge=Y.createFramebuffer(),Q=Y.createFramebuffer(),j=new p1(Y),re=new HT,pe=new tA(Y,Ct,b,re,U,De,j),Ae=new u1(X),Ue=new _M(Y),Be=new t1(Y,Ue),de=new d1(Y,Ue,j,Be),me=new g1(Y,de,Ue,Be,j),k=new m1(Y,U,pe),je=new a1(re),Ce=new FT(X,Ae,Ct,U,Be,je),Fe=new lA(X,re),Oe=new VT,Ne=new ZT(Ct),it=new e1(X,Ae,b,me,T,m),Je=new $T(X,me,U),be=new cA(Y,j,U,b),Re=new n1(Y,Ct,j),xe=new h1(Y,Ct,j),j.programs=Ce.programs,X.capabilities=U,X.extensions=Ct,X.properties=re,X.renderLists=Oe,X.shadowMap=Je,X.state=b,X.info=j}qe(),C!==di&&(D=new _1(C,i.width,i.height,p,l,c));const Ve=new sA(X,Y);this.xr=Ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(ae,le,!1))},this.getSize=function(A){return A.set(ae,le)},this.setSize=function(A,q,se=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,le=q,i.width=Math.floor(A*ve),i.height=Math.floor(q*ve),se===!0&&(i.style.width=A+"px",i.style.height=q+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ae*ve,le*ve).floor()},this.setDrawingBufferSize=function(A,q,se){ae=A,le=q,ve=se,i.width=Math.floor(A*se),i.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===di){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Ye)},this.setViewport=function(A,q,se,ne){A.isVector4?Ye.set(A.x,A.y,A.z,A.w):Ye.set(A,q,se,ne),b.viewport(L.copy(Ye).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,q,se,ne){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,q,se,ne),b.scissor(Z.copy(Ut).multiplyScalar(ve).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){b.setScissorTest(at=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ne=0;if(A){let ie=!1;if($!==null){const Ie=$.texture.format;ie=S.has(Ie)}if(ie){const Ie=$.texture.type,Ge=y.has(Ie),Le=it.getClearColor(),Xe=it.getClearAlpha(),ke=Le.r,$e=Le.g,lt=Le.b;Ge?(O[0]=ke,O[1]=$e,O[2]=lt,O[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,O)):(P[0]=ke,P[1]=$e,P[2]=lt,P[3]=Xe,Y.clearBufferiv(Y.COLOR,0,P))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Jn,!1),it.dispose(),Oe.dispose(),Ne.dispose(),re.dispose(),Ae.dispose(),me.dispose(),Be.dispose(),be.dispose(),Ce.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",dn),Ve.removeEventListener("sessionend",An),Vn.stop()};function Kt(A){A.preventDefault(),nv("WebGLRenderer: Context Lost."),G=!0}function Nt(){nv("WebGLRenderer: Context Restored."),G=!1;const A=j.autoReset,q=Je.enabled,se=Je.autoUpdate,ne=Je.needsUpdate,ie=Je.type;qe(),j.autoReset=A,Je.enabled=q,Je.autoUpdate=se,Je.needsUpdate=ne,Je.type=ie}function Jn(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $n(A){const q=A.target;q.removeEventListener("dispose",$n),qs(q)}function qs(A){Ys(A),re.remove(A)}function Ys(A){const q=re.get(A).programs;q!==void 0&&(q.forEach(function(se){Ce.releaseProgram(se)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ne,ie,Ie){q===null&&(q=cn);const Ge=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Le=wa(A,q,se,ne,ie);b.setMaterial(ne,Ge);let Xe=se.index,ke=1;if(ne.wireframe===!0){if(Xe=de.getWireframeAttribute(se),Xe===void 0)return;ke=2}const $e=se.drawRange,lt=se.attributes.position;let Qe=$e.start*ke,Tt=($e.start+$e.count)*ke;Ie!==null&&(Qe=Math.max(Qe,Ie.start*ke),Tt=Math.min(Tt,(Ie.start+Ie.count)*ke)),Xe!==null?(Qe=Math.max(Qe,0),Tt=Math.min(Tt,Xe.count)):lt!=null&&(Qe=Math.max(Qe,0),Tt=Math.min(Tt,lt.count));const Qt=Tt-Qe;if(Qt<0||Qt===1/0)return;Be.setup(ie,ne,Le,se,Xe);let kt,Lt=Re;if(Xe!==null&&(kt=Ue.get(Xe),Lt=xe,Lt.setIndex(kt)),ie.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*sn()),Lt.setMode(Y.LINES)):Lt.setMode(Y.TRIANGLES);else if(ie.isLine){let Ot=ne.linewidth;Ot===void 0&&(Ot=1),b.setLineWidth(Ot*sn()),ie.isLineSegments?Lt.setMode(Y.LINES):ie.isLineLoop?Lt.setMode(Y.LINE_LOOP):Lt.setMode(Y.LINE_STRIP)}else ie.isPoints?Lt.setMode(Y.POINTS):ie.isSprite&&Lt.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ot=ie._multiDrawStarts,He=ie._multiDrawCounts,Ln=ie._multiDrawCount,mt=Xe?Ue.get(Xe).bytesPerElement:1,yn=re.get(ne).currentProgram.getUniforms();for(let ei=0;ei<Ln;ei++)yn.setValue(Y,"_gl_DrawID",ei),Lt.render(Ot[ei]/mt,He[ei])}else if(ie.isInstancedMesh)Lt.renderInstances(Qe,Qt,ie.count);else if(se.isInstancedBufferGeometry){const Ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,Ot);Lt.renderInstances(Qe,Qt,He)}else Lt.render(Qe,Qt)};function Zs(A,q,se){A.transparent===!0&&A.side===Un&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ca(A,q,se),A.side=Ea,A.needsUpdate=!0,Ca(A,q,se),A.side=Un):Ca(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),N=Ne.get(se),N.init(q),E.push(N),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(N.pushLight(ie),ie.castShadow&&N.pushShadow(ie))}),A!==se&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(N.pushLight(ie),ie.castShadow&&N.pushShadow(ie))}),N.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Le=Ie[Ge];Zs(Le,se,ie),ne.add(Le)}else Zs(Ie,se,ie),ne.add(Ie)}),N=E.pop(),ne},this.compileAsync=function(A,q,se=null){const ne=this.compile(A,q,se);return new Promise(ie=>{function Ie(){if(ne.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){ie(A);return}setTimeout(Ie,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Xr=null;function Li(A){Xr&&Xr(A)}function dn(){Vn.stop()}function An(){Vn.start()}const Vn=new C_;Vn.setAnimationLoop(Li),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Xr=A,Ve.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},Ve.addEventListener("sessionstart",dn),Ve.addEventListener("sessionend",An),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(A,q);const se=Ve.enabled===!0&&Ve.isPresenting===!0,ne=D!==null&&($===null||se)&&D.begin(X,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,q,$),N=Ne.get(A,E.length),N.init(q),N.state.textureUnits=pe.getTextureUnits(),E.push(N),nn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ot.setFromProjectionMatrix(nn,ki,q.reversedDepth),ut=this.localClippingEnabled,pt=je.init(this.clippingPlanes,ut),z=Oe.get(A,I.length),z.init(),I.push(z),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=X.xr.getDepthSensingMesh();Ge!==null&&fr(Ge,q,-1/0,X.sortObjects)}fr(A,q,0,X.sortObjects),z.finish(),X.sortObjects===!0&&z.sort(we,Ke,q.reversedDepth),qt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,qt&&it.addToRenderList(z,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&je.beginShadows();const ie=N.state.shadowsArray;if(Je.render(ie,A,q),pt===!0&&je.endShadows(),(ne&&D.hasRenderPass())===!1){const Ge=z.opaque,Le=z.transmissive;if(N.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Le.length>0)for(let ke=0,$e=Xe.length;ke<$e;ke++){const lt=Xe[ke];il(Ge,Le,A,lt)}qt&&it.render(A);for(let ke=0,$e=Xe.length;ke<$e;ke++){const lt=Xe[ke];nl(z,A,lt,lt.viewport)}}else Le.length>0&&il(Ge,Le,A,q),qt&&it.render(A),nl(z,A,q)}$!==null&&H===0&&(pe.updateMultisampleRenderTarget($),pe.updateRenderTargetMipmap($)),ne&&D.end(X),A.isScene===!0&&A.onAfterRender(X,A,q),Be.resetDefaultState(),fe=-1,Ee=null,E.pop(),E.length>0?(N=E[E.length-1],pe.setTextureUnits(N.state.textureUnits),pt===!0&&je.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?z=I[I.length-1]:z=null,W!==null&&W.renderEnd()};function fr(A,q,se,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ot.intersectsSprite(A)){ne&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nn);const Ge=me.update(A),Le=A.material;Le.visible&&z.push(A,Ge,Le,se,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ot.intersectsObject(A))){const Ge=me.update(A),Le=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),rn.copy(Ge.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(nn)),Array.isArray(Le)){const Xe=Ge.groups;for(let ke=0,$e=Xe.length;ke<$e;ke++){const lt=Xe[ke],Qe=Le[lt.materialIndex];Qe&&Qe.visible&&z.push(A,Ge,Qe,se,rn.z,lt)}}else Le.visible&&z.push(A,Ge,Le,se,rn.z,null)}}const Ie=A.children;for(let Ge=0,Le=Ie.length;Ge<Le;Ge++)fr(Ie[Ge],q,se,ne)}function nl(A,q,se,ne){const{opaque:ie,transmissive:Ie,transparent:Ge}=A;N.setupLightsView(se),pt===!0&&je.setGlobalState(X.clippingPlanes,se),ne&&b.viewport(L.copy(ne)),ie.length>0&&dr(ie,q,se),Ie.length>0&&dr(Ie,q,se),Ge.length>0&&dr(Ge,q,se),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function il(A,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const Qe=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:Qe?Ta:di,minFilter:Br,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||L;Ie.setSize(Ge.z*X.transmissionResolutionScale,Ge.w*X.transmissionResolutionScale);const Le=X.getRenderTarget(),Xe=X.getActiveCubeFace(),ke=X.getActiveMipmapLevel();X.setRenderTarget(Ie),X.getClearColor(Te),Pe=X.getClearAlpha(),Pe<1&&X.setClearColor(16777215,.5),X.clear(),qt&&it.render(se);const $e=X.toneMapping;X.toneMapping=Xi;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),pt===!0&&je.setGlobalState(X.clippingPlanes,ne),dr(A,se,ne),pe.updateMultisampleRenderTarget(Ie),pe.updateRenderTargetMipmap(Ie),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Tt=0,Qt=q.length;Tt<Qt;Tt++){const kt=q[Tt],{object:Lt,geometry:Ot,material:He,group:Ln}=kt;if(He.side===Un&&Lt.layers.test(ne.layers)){const mt=He.side;He.side=Qn,He.needsUpdate=!0,Ra(Lt,se,ne,Ot,He,Ln),He.side=mt,He.needsUpdate=!0,Qe=!0}}Qe===!0&&(pe.updateMultisampleRenderTarget(Ie),pe.updateRenderTargetMipmap(Ie))}X.setRenderTarget(Le,Xe,ke),X.setClearColor(Te,Pe),lt!==void 0&&(ne.viewport=lt),X.toneMapping=$e}function dr(A,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Ie=A.length;ie<Ie;ie++){const Ge=A[ie],{object:Le,geometry:Xe,group:ke}=Ge;let $e=Ge.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Le.layers.test(se.layers)&&Ra(Le,q,se,Xe,$e,ke)}}function Ra(A,q,se,ne,ie,Ie){A.onBeforeRender(X,q,se,ne,ie,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(X,q,se,ne,A,Ie),ie.transparent===!0&&ie.side===Un&&ie.forceSinglePass===!1?(ie.side=Qn,ie.needsUpdate=!0,X.renderBufferDirect(se,q,ne,ie,A,Ie),ie.side=Ea,ie.needsUpdate=!0,X.renderBufferDirect(se,q,ne,ie,A,Ie),ie.side=Un):X.renderBufferDirect(se,q,ne,ie,A,Ie),A.onAfterRender(X,q,se,ne,ie,Ie)}function Ca(A,q,se){q.isScene!==!0&&(q=cn);const ne=re.get(A),ie=N.state.lights,Ie=N.state.shadowsArray,Ge=ie.state.version,Le=Ce.getParameters(A,ie.state,Ie,q,se,N.state.lightProbeGridArray),Xe=Ce.getProgramCacheKey(Le);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ae.get(A.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",$n),ke=new Map,ne.programs=ke);let lt=ke.get(Xe);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Ge)return Qi(A,Le),lt}else Le.uniforms=Ce.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,se,Le),A.onBeforeCompile(Le,X),lt=Ce.acquireProgram(Le,Xe),ke.set(Xe,lt),ne.uniforms=Le.uniforms;const Qe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=je.uniform),Qi(A,Le),ne.needsLights=al(A),ne.lightsStateVersion=Ge,ne.needsLights&&(Qe.ambientLightColor.value=ie.state.ambient,Qe.lightProbe.value=ie.state.probe,Qe.directionalLights.value=ie.state.directional,Qe.directionalLightShadows.value=ie.state.directionalShadow,Qe.spotLights.value=ie.state.spot,Qe.spotLightShadows.value=ie.state.spotShadow,Qe.rectAreaLights.value=ie.state.rectArea,Qe.ltc_1.value=ie.state.rectAreaLTC1,Qe.ltc_2.value=ie.state.rectAreaLTC2,Qe.pointLights.value=ie.state.point,Qe.pointLightShadows.value=ie.state.pointShadow,Qe.hemisphereLights.value=ie.state.hemi,Qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ie.state.spotLightMatrix,Qe.spotLightMap.value=ie.state.spotLightMap,Qe.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=N.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function Ki(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Gc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Qi(A,q){const se=re.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function hr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const ie=A[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(w))return ie}return null}function wa(A,q,se,ne,ie){q.isScene!==!0&&(q=cn),pe.resetTextureUnits();const Ie=q.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Le=$===null?X.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:bt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=Ae.get(ne.envMap||Ge,Xe),$e=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!se.morphAttributes.position,Tt=!!se.morphAttributes.normal,Qt=!!se.morphAttributes.color;let kt=Xi;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(kt=X.toneMapping);const Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,He=re.get(ne),Ln=N.state.lights;if(pt===!0&&(ut===!0||A!==Ee)){const Dt=A===Ee&&ne.id===fe;je.setState(ne,A,Dt)}let mt=!1;ne.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ln.state.version||He.outputColorSpace!==Le||ie.isBatchedMesh&&He.batching===!1||!ie.isBatchedMesh&&He.batching===!0||ie.isBatchedMesh&&He.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&He.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&He.instancing===!1||!ie.isInstancedMesh&&He.instancing===!0||ie.isSkinnedMesh&&He.skinning===!1||!ie.isSkinnedMesh&&He.skinning===!0||ie.isInstancedMesh&&He.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&He.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&He.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&He.instancingMorph===!1&&ie.morphTexture!==null||He.envMap!==ke||ne.fog===!0&&He.fog!==Ie||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==je.numPlanes||He.numIntersection!==je.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==lt||He.morphTargets!==Qe||He.morphNormals!==Tt||He.morphColors!==Qt||He.toneMapping!==kt||He.morphTargetsCount!==Ot||!!He.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,He.__version=ne.version);let yn=He.currentProgram;mt===!0&&(yn=Ca(ne,q,ie),W&&ne.isNodeMaterial&&W.onUpdateProgram(ne,yn,He));let ei=!1,bi=!1,ti=!1;const Pt=yn.getUniforms(),jt=He.uniforms;if(b.useProgram(yn.program)&&(ei=!0,bi=!0,ti=!0),ne.id!==fe&&(fe=ne.id,bi=!0),He.needsLights){const Dt=hr(N.state.lightProbeGridArray,ie);He.lightProbeGrid!==Dt&&(He.lightProbeGrid=Dt,bi=!0)}if(ei||Ee!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(Y,"projectionMatrix",A.projectionMatrix),Pt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Oi=Pt.map.cameraPosition;Oi!==void 0&&Oi.setValue(Y,an.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Pt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,bi=!0,ti=!0)}if(He.needsLights&&(Ln.state.directionalShadowMap.length>0&&Pt.setValue(Y,"directionalShadowMap",Ln.state.directionalShadowMap,pe),Ln.state.spotShadowMap.length>0&&Pt.setValue(Y,"spotShadowMap",Ln.state.spotShadowMap,pe),Ln.state.pointShadowMap.length>0&&Pt.setValue(Y,"pointShadowMap",Ln.state.pointShadowMap,pe)),ie.isSkinnedMesh){Pt.setOptional(Y,ie,"bindMatrix"),Pt.setOptional(Y,ie,"bindMatrixInverse");const Dt=ie.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(Y,"boneTexture",Dt.boneTexture,pe))}ie.isBatchedMesh&&(Pt.setOptional(Y,ie,"batchingTexture"),Pt.setValue(Y,"batchingTexture",ie._matricesTexture,pe),Pt.setOptional(Y,ie,"batchingIdTexture"),Pt.setValue(Y,"batchingIdTexture",ie._indirectTexture,pe),Pt.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(Y,"batchingColorTexture",ie._colorsTexture,pe));const Ei=se.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&k.update(ie,se,yn),(bi||He.receiveShadow!==ie.receiveShadow)&&(He.receiveShadow=ie.receiveShadow,Pt.setValue(Y,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(jt.envMapIntensity.value=q.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=fA()),bi){if(Pt.setValue(Y,"toneMappingExposure",X.toneMappingExposure),He.needsLights&&hn(jt,ti),Ie&&ne.fog===!0&&Fe.refreshFogUniforms(jt,Ie),Fe.refreshMaterialUniforms(jt,ne,ve,le,N.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Dt=He.lightProbeGrid;jt.probesSH.value=Dt.texture,jt.probesMin.value.copy(Dt.boundingBox.min),jt.probesMax.value.copy(Dt.boundingBox.max),jt.probesResolution.value.copy(Dt.resolution)}Gc.upload(Y,Ki(He),jt,pe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Gc.upload(Y,Ki(He),jt,pe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(Y,"center",ie.center),Pt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(Y,"normalMatrix",ie.normalMatrix),Pt.setValue(Y,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Dt=ne.uniformsGroups;for(let Oi=0,Da=Dt.length;Oi<Da;Oi++){const pr=Dt[Oi];be.update(pr,yn),be.bind(pr,yn)}}return yn}function hn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function al(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,q,se){const ne=re.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=q,re.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=re.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,se=0){$=A,B=q,H=se;let ne=null,ie=!1,Ie=!1;if(A){const Le=re.get(A);if(Le.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Y.FRAMEBUFFER,Le.__webglFramebuffer),L.copy(A.viewport),Z.copy(A.scissor),Me=A.scissorTest,b.viewport(L),b.scissor(Z),b.setScissorTest(Me),fe=-1;return}else if(Le.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Le.__hasExternalTextures)pe.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const ke=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ne=ke[q][se]:ne=ke[q],ie=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?ne=re.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[se]:ne=ke,L.copy(A.viewport),Z.copy(A.scissor),Me=A.scissorTest}else L.copy(Ye).multiplyScalar(ve).floor(),Z.copy(Ut).multiplyScalar(ve).floor(),Me=at;if(se!==0&&(ne=ce),b.bindFramebuffer(Y.FRAMEBUFFER,ne)&&b.drawBuffers(A,ne),b.viewport(L),b.scissor(Z),b.setScissorTest(Me),ie){const Le=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,se)}else if(Ie){const Le=q;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=re.get(A.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,se,Le)}}else if(A!==null&&se!==0){const Le=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Le.__webglTexture,se)}fe=-1},this.readRenderTargetPixels=function(A,q,se,ne,ie,Ie,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){b.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const ke=A.textures[Le],$e=ke.format,lt=ke.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable($e)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-ie&&Y.readPixels(q,se,ne,ie,De.convert($e),De.convert(lt),Ie)}finally{const ke=$!==null?re.get($).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ne,ie,Ie,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-ie){b.bindFramebuffer(Y.FRAMEBUFFER,Xe);const ke=A.textures[Le],$e=ke.format,lt=ke.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(q,se,ne,ie,De.convert($e),De.convert(lt),0);const Tt=$!==null?re.get($).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,Tt);const Qt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await US(Y,Qt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.deleteBuffer(Qe),Y.deleteSync(Qt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(A.image.width*ne),Ie=Math.floor(A.image.height*ne),Ge=q!==null?q.x:0,Le=q!==null?q.y:0;pe.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,Ge,Le,ie,Ie),b.unbindTexture()},this.copyTextureToTexture=function(A,q,se=null,ne=null,ie=0,Ie=0){let Ge,Le,Xe,ke,$e,lt,Qe,Tt,Qt;const kt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)Ge=se.max.x-se.min.x,Le=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,$e=se.min.y,lt=se.isBox3?se.min.z:0;else{const jt=Math.pow(2,-ie);Ge=Math.floor(kt.width*jt),Le=Math.floor(kt.height*jt),A.isDataArrayTexture?Xe=kt.depth:A.isData3DTexture?Xe=Math.floor(kt.depth*jt):Xe=1,ke=0,$e=0,lt=0}ne!==null?(Qe=ne.x,Tt=ne.y,Qt=ne.z):(Qe=0,Tt=0,Qt=0);const Lt=De.convert(q.format),Ot=De.convert(q.type);let He;q.isData3DTexture?(pe.setTexture3D(q,0),He=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(pe.setTexture2DArray(q,0),He=Y.TEXTURE_2D_ARRAY):(pe.setTexture2D(q,0),He=Y.TEXTURE_2D),b.activeTexture(Y.TEXTURE0),b.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=b.getParameter(Y.UNPACK_ROW_LENGTH),mt=b.getParameter(Y.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(Y.UNPACK_SKIP_PIXELS),ei=b.getParameter(Y.UNPACK_SKIP_ROWS),bi=b.getParameter(Y.UNPACK_SKIP_IMAGES);b.pixelStorei(Y.UNPACK_ROW_LENGTH,kt.width),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,kt.height),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt);const ti=A.isDataArrayTexture||A.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const jt=re.get(A),Ei=re.get(q),Dt=re.get(jt.__renderTarget),Oi=re.get(Ei.__renderTarget);b.bindFramebuffer(Y.READ_FRAMEBUFFER,Dt.__webglFramebuffer),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Da=0;Da<Xe;Da++)ti&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ie,lt+Da),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(q).__webglTexture,Ie,Qt+Da)),Y.blitFramebuffer(ke,$e,Ge,Le,Qe,Tt,Ge,Le,Y.DEPTH_BUFFER_BIT,Y.NEAREST);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||re.has(A)){const jt=re.get(A),Ei=re.get(q);b.bindFramebuffer(Y.READ_FRAMEBUFFER,ge),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Q);for(let Dt=0;Dt<Xe;Dt++)ti?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,jt.__webglTexture,ie,lt+Dt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,jt.__webglTexture,ie),Pt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ei.__webglTexture,Ie,Qt+Dt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ei.__webglTexture,Ie),ie!==0?Y.blitFramebuffer(ke,$e,Ge,Le,Qe,Tt,Ge,Le,Y.COLOR_BUFFER_BIT,Y.NEAREST):Pt?Y.copyTexSubImage3D(He,Ie,Qe,Tt,Qt+Dt,ke,$e,Ge,Le):Y.copyTexSubImage2D(He,Ie,Qe,Tt,ke,$e,Ge,Le);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(He,Ie,Qe,Tt,Qt,Ge,Le,Xe,Lt,Ot,kt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(He,Ie,Qe,Tt,Qt,Ge,Le,Xe,Lt,kt.data):Y.texSubImage3D(He,Ie,Qe,Tt,Qt,Ge,Le,Xe,Lt,Ot,kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,Qe,Tt,Ge,Le,Lt,Ot,kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,Qe,Tt,kt.width,kt.height,Lt,kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,Qe,Tt,Ge,Le,Lt,Ot,kt);b.pixelStorei(Y.UNPACK_ROW_LENGTH,Ln),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,mt),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(Y.UNPACK_SKIP_ROWS,ei),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,bi),Ie===0&&q.generateMipmaps&&Y.generateMipmap(He),b.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,H=0,$=null,b.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const hA=[{id:"all",label:"All Structures"},{id:"fibrosa",label:"Tunica Fibrosa (Outer)"},{id:"vasculosa",label:"Tunica Vasculosa / Uvea"},{id:"nervosa",label:"Tunica Nervosa (Retina)"},{id:"optical",label:"Optical Refractive Media"},{id:"neural",label:"Neural Pathways"}],lr=[{id:"cornea",name:"Cornea",latin:"Cornea Transparens",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Anterior 1/6th)",pinPosition:[0,0,2.3],cameraTarget:[0,0,2],color:"#7dd3fc",opticalMetrics:{refractiveIndex:"n = 1.376",dioptricPower:"+43.0 Diopters (~70% total eye refraction)",thickness:"535 µm central, ~650 µm peripheral"},medicalDescription:"The anterior, transparent, highly curved window of the eye. Completely avascular, receiving oxygen directly from ambient air through the tear film and nutrients from the anterior chamber's aqueous humor. Comprises five classical histological layers: non-keratinized stratified squamous epithelium, Bowman's membrane, stroma (90% thickness composed of orthogonally arranged type I/V collagen fibrils), Descemet's membrane, and metabolic monolayer endothelium.",clinicalPathology:"Keratoconus (biomechanical stromal degradation causing conical ectasia), Fuchs' endothelial corneal dystrophy, microbial keratitis, bullous keratopathy.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course (BCSC), Section 8: External Disease and Cornea",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy: The Anatomical Basis of Clinical Practice (42nd Ed.)",title:"Chapter 41: The Visual Apparatus and Orbit",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"},{authority:"National Center for Biotechnology Information (NCBI)",title:"StatPearls: Anatomy, Head and Neck, Eye Cornea",url:"https://www.ncbi.nlm.nih.gov/books/NBK470344/"}],historicalTreatise:{author:"Alhazen (Ibn al-Haytham)",work:"Kitāb al-Manāẓir (Book of Optics, c. 1021)",note:"Refuted classical extramission theory (Pythagoras, Euclid, Galen), demonstrating through geometry and camera obscura experiments that perpendicular rays of light enter through the corneal hemisphere to initiate vision."},literaryAnalysis:{figure:"Seamus Heaney",text:"'Personal Helicon' (Death of a Naturalist, 1966)",quote:"Others had echoes, gave back your own call / With a clean new music in it. And one was mean for water: a shallow / To stare, big-eyed Narcissus, into some spring / Is beneath all adult dignity. I rhyme / To see myself, to set the darkness echoing.",commentary:"The cornea is the surface of the well: an organic lens that is both transparent aperture and reflective barrier. In Heaney's poetic archaeology, gazing into water mirrors the corneal threshold where the observing subject is confronted with their own submerged reflection."}},{id:"sclera",name:"Sclera & Episclera",latin:"Tunica Sclera",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Posterior 5/6ths)",pinPosition:[0,1.8,0],cameraTarget:[0,1.5,0],color:"#f8fafc",opticalMetrics:{refractiveIndex:"Opaque (irregular collagen scatter)",hydration:"68% hydration (vs. 78% in cornea)",thickness:"1.0 mm at posterior pole, 0.3 mm behind rectus insertions"},medicalDescription:"The dense, opaque, fibrous protective envelope of the globe. Consists of dense irregular bundles of collagen fibrils and elastic fibers that resist intraocular pressure (10–21 mmHg) and provide dynamic insertion points for the six extraocular muscles. Pierced posteriorly by the lamina cribrosa, through which retinal ganglion cell axons emerge to form the optic nerve.",clinicalPathology:"Scleritis (frequently associated with systemic autoimmune disorders like rheumatoid arthritis and granulomatosis with polyangiitis), episcleritis, scleral staphyloma, blue sclera (osteogenesis imperfecta).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Sclera and Episclera: Anatomy and Inflammation Management",url:"https://www.aao.org/eyenet/article/scleritis-diagnosis-management"},{authority:"Stanford University School of Medicine",title:"Ocular Pathology & Scleral Biomechanics",url:"https://med.stanford.edu/ophthalmology.html"}],historicalTreatise:{author:"Andreas Vesalius",work:"De Humani Corporis Fabrica (1543, Book VII)",note:"Vesalius systematically dissected the hard scleral tunic ('tunica dura / cornea dura') to dismantle Galen's rete mirabile within human cranial anatomy, demonstrating direct ocular-cerebral continuity."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto XXXII & XXXIII (Cocytus)",quote:"Lo pianto stesso lì pianger non lascia, / e 'l duol che truova in su li occhi rintoppo, / si volge in entro a far crescer l'ambascia; / ché le lagrime prime fanno groppo, / e sì come visiere di cristallo, / rïempion sotto 'l ciglio tutto 'l coppo.",commentary:"At the icy nadir of Dante's Inferno, frozen tears turn the ocular coats into rigid crystal visors. The sclera, as the protective armor of the eye, petrifies: weeping cannot escape, turning inward to intensify existential agony."}},{id:"iris",name:"Iris & Pupil",latin:"Iris / Pupilla",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Anterior Uvea)",pinPosition:[0,0,1.8],cameraTarget:[0,0,1.6],color:"#ca8a04",opticalMetrics:{apertureRange:"2.0 mm (miosis) to 8.0 mm (mydriasis)",focalRatio:"f/2.1 to f/8.3 optical aperture adjustment",aberrationControl:"Restricts peripheral spherical and chromatic aberration"},medicalDescription:"The contractile pigmented diaphragm dividing the anterior and posterior chambers. Regulates retinal illuminance via antagonistic smooth muscle systems: the circumferentially arranged sphincter pupillae (parasympathetic innervation via CN III / ciliary ganglion) and the radially arranged dilator pupillae (sympathetic innervation via superior cervical ganglion). Posterior pigmented epithelium prevents light leakage.",clinicalPathology:"Acute angle-closure glaucoma (pupillary block resulting in aqueous outflow obstruction at the trabecular meshwork), anterior uveitis (iritis with keratic precipitates), Horner's syndrome, Argyll Robertson pupil.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course, Section 2: Fundamentals and Principles of Ophthalmology",url:"https://www.aao.org/education/bcsc"},{authority:"National Institutes of Health (NIH)",title:"National Eye Institute: Pupil Reflex and Uveal Biology",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"Galen of Pergamon",work:"De Usu Partium (On the Usefulness of the Parts of the Body, 2nd Century CE)",note:"Interpreted the pupillary aperture as the conduit for the pneuma optikon (visual spirit) descending from the ventricles of the brain to illuminate the crystalline lens."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' (1987)",quote:"A small light for small people, wanting no / great beam, but testing what they say / with an eye that burns right into your soul / ... Diogenes with his lantern, seeking one just man.",commentary:"The pupil in Heaney becomes Diogenes' lantern: an aperture that tests moral illumination. It does not merely receive light but interrogates the observer with a concentrated, piercing pinpoint."}},{id:"lens",name:"Crystalline Lens & Zonules",latin:"Lens Crystallina",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,1.3],cameraTarget:[0,0,1.2],color:"#e0f2fe",opticalMetrics:{refractiveIndex:"Gradient index: n = 1.386 (cortex) to 1.406 (nucleus)",dioptricPower:"+15.0 to +20.0 Diopters (unaccommodated), up to +30.0 D",accommodation:"Helmholtz mechanism mediated by ciliary muscle contraction"},medicalDescription:"A transparent, biconvex, flexible optical element suspended between the iris and vitreous humor by the delicate zonular fibers of Zinn (ciliary zonule). Highly specialized, mature lens fibers lose their nuclei and organelles to maintain optical clarity, packing high concentrations of crystallin proteins (alpha, beta, gamma). Modulates dynamic focus via Helmholtzian accommodation.",clinicalPathology:"Cataracts (nuclear sclerotic, cortical, or posterior subcapsular opacification due to crystallin protein aggregation), presbyopia (loss of zonular elasticity and lens hardness with age), ectopia lentis (zonular dehiscence in Marfan syndrome).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Lens and Cataract: BCSC Section 11",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI Bookshelf: Webvision",title:"Physiological Optics of the Human Lens and Accommodation",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"}],historicalTreatise:{author:"Galen & Ibn al-Jazzar",work:"Medical Canon on the 'Seat of the Soul' (Classical Antiquity)",note:"From Galen through Islamic medieval medicine, the crystalline lens was mistakenly crowned as the ultimate central organ of visual perception ('principale organum visionis'), rather than a simple refractive lens."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XV & Paradiso, Canto XXVI",quote:"Come quando da l'acqua o da lo specchio / salta lo raggio a l'opposita parte, / salendo su per lo modo parecchio / a quel che scende, e tanto si diparte / dal cader de la pietra in igual tratta, / sì come mostra esperïenza e arte...",commentary:"Dante understands optical accommodation spiritually: as his pilgrim ascends the spheres of Paradise, Beatrice cleanses his ocular crystalline faculty so that his gaze can endure escalating intensities of celestial illumination."}},{id:"ciliaryBody",name:"Ciliary Body & Trabecular Meshwork",latin:"Corpus Ciliare",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Middle Uvea)",pinPosition:[0,1.4,1.1],cameraTarget:[0,1,1],color:"#b45309",opticalMetrics:{aqueousProduction:"2.0–2.5 µL/min secretional rate",accommodationForce:"Smooth muscle vectors adjusting zonular tension",intraocularPressure:"Regulated homeostatically around 15.5 mmHg"},medicalDescription:"The circumferential uveal tissue connecting the choroid with the iris. Composed of two parts: pars plicata (anterior corrugated zone bearing ~70 ciliary processes) and pars plana (posterior flattened zone). Produces aqueous humor through active secretion and ultrafiltration by the dual-layered ciliary epithelium, while containing the smooth ciliary muscle fibers (longitudinal, radial, circular) responsible for lens accommodation.",clinicalPathology:"Primary Open-Angle Glaucoma (trabecular meshwork resistance), cyclitis, hypotony, malignant ciliary block glaucoma.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Glaucoma: Pathophysiology of Aqueous Outflow and Intraocular Pressure",url:"https://www.aao.org/education/bcsc"},{authority:"European Glaucoma Society (EGS)",title:"Terminology and Guidelines for Glaucoma (5th Ed.)",url:"https://www.eugs.org/"}],historicalTreatise:{author:"Hermann von Helmholtz",work:"Handbuch der Physiologischen Optik (Treatise on Physiological Optics, 1856–1867)",note:"Formulated the definitive mechanism of ocular accommodation: ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to bulge into greater convexity."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Tollund Man' & Bog Poems",quote:"Those dark man-killing parishes. / ... I will feel lost, / Unhappy and at home.",commentary:"The hydraulic pressure within the ciliary apparatus parallels the bog's peat-press: an enclosed, dark anatomical engine regulating fluid balance, preserving archaic bodily tensions beneath peat and flesh."}},{id:"choroid",name:"Choroid",latin:"Choroidea",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Posterior Uvea)",pinPosition:[0,-1.6,-.6],cameraTarget:[0,-1.2,-.5],color:"#7f1d1d",opticalMetrics:{bloodFlow:"Highest blood flow per unit weight in human body (~1000 mL/min/100g)",pigmentation:"Dense melanin concentration for thermal/light dissipation",thickness:"0.2 mm (posterior pole) thinning to 0.1 mm anteriorly"},medicalDescription:"The posterior, extensively vascularized section of the uveal tract bounded internally by Bruch's membrane and externally by the sclera. Formed of four histological layers: Haller's layer (large vessel layer), Sattler's layer (medium vessels), choriocapillaris (fenestrated capillary monolayer), and Bruch's membrane (extracellular lamina). Nourishes the avascular outer retina, photoreceptors, and retinal pigment epithelium.",clinicalPathology:"Choroidal neovascularization (CNV in wet age-related macular degeneration), choroidal melanoma, central serous chorioretinopathy, choroidal detachment.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Retina and Vitreous: BCSC Section 12",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / NIH Webvision",title:"The Choroid: Anatomy, Vascular Architecture, and Bruch's Membrane",url:"https://www.ncbi.nlm.nih.gov/books/NBK11554/"}],historicalTreatise:{author:"Johannes Kepler",work:"Ad Vitellionem Paralipomena (Astronomiae Pars Optica, 1604)",note:"Recognized the choroid as the dark, light-absorptive lining of the anatomical camera obscura, preventing internal light back-scatter."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto IX (The City of Dis)",quote:"O voi ch'avete li 'ntelletti sani, / mirate la dottrina che s'asconde / sotto 'l velame de li versi strani.",commentary:"The vascular, blood-gorged choroid is the hidden anatomical veil ('velame') beneath the visual screen: a dark, pulsing under-tunic that sustains perception while remaining entirely concealed from conscious sight."}},{id:"vitreous",name:"Vitreous Humor (Corpus Vitreum)",latin:"Corpus Vitreum",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,.2],cameraTarget:[0,0,0],color:"#38bdf8",opticalMetrics:{refractiveIndex:"n = 1.336 (matched closely to aqueous humor)",composition:"98-99% water, type II collagen scaffolding, hyaluronic acid",volume:"4.0 mL (~80% of total globe volume)"},medicalDescription:"A clear, viscoelastic, transparent gel occupying the posterior four-fifths of the globe between the lens and retina. The hyaloid membrane encloses the vitreous core and establishes firm anatomical attachments at the vitreous base (straddling the ora serrata), optic disc margin, macula, and retinal blood vessels. Traversed embryologically by Cloquet's canal (vestige of the fetal hyaloid artery).",clinicalPathology:"Posterior vitreous detachment (PVD), vitreous hemorrhage, asteroid hyalosis, vitreomacular traction syndrome, floaters (vitreous syneresis).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Vitreous Body Physiology and Vitreoretinal Surgery",url:"https://www.aao.org/education/bcsc"},{authority:"National Eye Institute (NEI / NIH)",title:"Vitreous Mechanics and Retinal Traction",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"René Descartes",work:"La Dioptrique (1637)",note:"Used the transparent vitreous humor as a mechanical medium in his treatise on optics to model the physical transmission of motion particles (photons) directly onto the cerebral pineal gland."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Grauballe Man' & Bog Poems",quote:"As if he had been poured / in tar, he lies / on a pillow of turf / and seems to weep / the black river of himself.",commentary:"The vitreous body is the internal gelatinous abyss of the eye: a preserved, primordial fluid chamber preserving optical memory just as the peat bog embalms the sacrificed body in fluid suspension."}},{id:"retina",name:"Retina & Ora Serrata",latin:"Tunica Interna / Retina",layerCategory:"nervosa",layer:"Tunica Nervosa (Inner Sensorium)",pinPosition:[-1.2,.8,-.8],cameraTarget:[-1,.6,-.6],color:"#f43f5e",opticalMetrics:{photoreceptorCount:"~120 million rods, ~6 million cones",signalTransduction:"11-cis-retinal photoisomerization to all-trans-retinal in <1 picosecond",thickness:"100 µm at ora serrata to 230 µm adjacent to optic disc"},medicalDescription:"The neurosensory tissue of the inner eye that converts incident photons into action potentials. Histologically organized into 10 precisely stratified layers: (1) Retinal Pigment Epithelium, (2) Photoreceptor layer, (3) External Limiting Membrane, (4) Outer Nuclear Layer, (5) Outer Plexiform Layer, (6) Inner Nuclear Layer, (7) Inner Plexiform Layer, (8) Ganglion Cell Layer, (9) Nerve Fiber Layer, and (10) Internal Limiting Membrane.",clinicalPathology:"Rhegmatogenous retinal detachment (retinal tears allowing liquefied vitreous subretinal access), diabetic retinopathy, retinitis pigmentosa, retinal vein occlusion.",medicalSources:[{authority:"NCBI Bookshelf: Webvision",title:"The Organization of the Retina and Visual System (Kolb, Fernandez, Nelson)",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"},{authority:"American Academy of Ophthalmology (AAO)",title:"Retinal Anatomy, Physiology, and Vascular Diseases: BCSC Section 12",url:"https://www.aao.org/education/bcsc"}],historicalTreatise:{author:"Johannes Kepler & Santiago Ramón y Cajal",work:"Ad Vitellionem Paralipomena (1604) / The Structure of the Retina (1892)",note:"Kepler proved mathematically that an inverted and reversed physical image is projected onto the retinal screen; Cajal subsequently proved the individual neuronal circuit architecture using Golgi staining."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXXIII (The Beatific Vision)",quote:"Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",commentary:"Dante's climax in the Empyrean is the ultimate retinal exposure: the divine trinity appears as three concentric rings of light of three distinct colors, striking the pilgrim's sensorium directly in pure optical geometry."}},{id:"fovea",name:"Macula Lutea & Fovea Centralis",latin:"Fovea Centralis",layerCategory:"nervosa",layer:"Tunica Nervosa (Visual Axis Core)",pinPosition:[0,0,-1.85],cameraTarget:[0,0,-1.6],color:"#f59e0b",opticalMetrics:{diameter:"1.5 mm (Fovea), 0.35 mm (Foveola / avascular zone)",visualAcuity:"20/20 central foveal acuity (100% packed midget cone system)",pigmentation:"High concentration of lutein and zeaxanthin carotenoids"},medicalDescription:"The specialized, avascular central retinal depression located ~4.0 mm temporal and 0.8 mm inferior to the optic disc center. In the foveola, inner retinal layers are displaced laterally (creating the foveal pit/clivus) to allow unhindered light access to densely packed cone photoreceptors (~200,000 cones/mm²), providing maximal visual resolution and trichromatic color vision.",clinicalPathology:"Age-Related Macular Degeneration (dry/wet AMD with drusen and geographic atrophy), macular hole, central serous chorioretinopathy, cystoid macular edema.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Age-Related Macular Degeneration PPP (Preferred Practice Pattern)",url:"https://www.aao.org/preferred-practice-pattern/age-related-macular-degeneration-ppp"},{authority:"Journal of Comparative Neurology",title:"Curcio CA, et al. 'Human photoreceptor topography' (1990)",url:"https://pubmed.ncbi.nlm.nih.gov/2358643/"}],historicalTreatise:{author:"Samuel Thomas von Sömmerring",work:"De Foramine Centrali Retinae (1799)",note:"First documented the yellow pigment (macula lutea) and central foveal pit ('foramen centrale') in the human ocular fundus."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXVIII",quote:"Un punto vidi che raggiava lume / acuto sì, che 'l viso ch'elli affoca / chiuder conviensi per lo forte acume; / e quale stella par quinci più poca, / parrebbe luna, locata con esso / come stella con stella si colloca.",commentary:"The fovea centralis is Dante's 'point that radiated light so piercing'—an infinitesimal, blazing focal point of pure resolution around which the entire universe and sensory apparatus pivots."}},{id:"opticDisc",name:"Optic Disc (Mariotte's Blind Spot)",latin:"Discus Nervi Optici / Punctum Caecum",layerCategory:"neural",layer:"Neural Pathways / Physiological Scotoma",pinPosition:[.9,.2,-1.75],cameraTarget:[.7,.2,-1.5],color:"#fbbf24",opticalMetrics:{scotomaSize:"5.5° wide by 7.5° high in visual field (~15° temporal to fixation)",dimension:"1.5 mm horizontal x 1.75 mm vertical diameter",photoreceptorDensity:"Zero (complete absence of rods and cones)"},medicalDescription:"The anatomical exit point for ~1.2 million unmyelinated axons of retinal ganglion cells as they coalesce and pass through the fenestrated scleral lamina cribrosa. Because the disc is devoid of photoreceptors and retinal pigment epithelium, it generates an absolute physiological scotoma (blind spot) in the visual field. Contains the physiological cup and the central retinal artery/vein bifurcations.",clinicalPathology:"Papilledema (bilateral optic disc swelling from elevated intracranial pressure), glaucomatous optic neuropathy (cupping and neuroretinal rim loss), ischemic optic neuropathy (AION/NAION).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology: BCSC Section 5",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / StatPearls",title:"Physiology, Blind Spot (Punctum Caecum)",url:"https://www.ncbi.nlm.nih.gov/books/NBK545229/"}],historicalTreatise:{author:"Edme Mariotte",work:"Nouvelle Découverte touchant la Vue (Royal Academy of Sciences, Paris, 1668)",note:"Discovered the physiological blind spot by demonstrating that an object positioned at a 15-degree eccentricity disappears completely when its image strikes the optic nerve head."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' & 'The Underground'",quote:"There we were in the vaulted tunnel running, / You ahead of me, / ... All the while / I thought of Orpheus, turning to look back.",commentary:"Mariotte's blind spot is the structural blind spot of Orpheus: the inevitable dark void in the center of perception where looking directly causes the object of desire to vanish. Vision is constructed around what it cannot see."}},{id:"opticNerve",name:"Optic Nerve (Cranial Nerve II)",latin:"Nervus Opticus (CN II)",layerCategory:"neural",layer:"Neural Pathways (Ocular-Cerebral Conduit)",pinPosition:[.9,.2,-2.8],cameraTarget:[.9,.2,-2.4],color:"#fde047",opticalMetrics:{axonCount:"~1.2 million myelinated nerve fibers (oligodendrocytes post-lamina)",length:"40–50 mm total (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)",sheathMeninges:"Ensheathed by dura mater, arachnoid mater, and pia mater with subarachnoid space (CSF)"},medicalDescription:"The paired cranial nerve transmitting visual sensory information from the retina to the lateral geniculate nucleus (LGN), superior colliculus, and pretectal nuclei. Anatomically not a true peripheral nerve but an outpouching of the diencephalon; thus wrapped by all three meningeal sheaths and vulnerable to intracranial pressure transmitted through the subarachnoid space.",clinicalPathology:"Optic neuritis (demyelination in Multiple Sclerosis), optic nerve glioma, traumatic optic neuropathy, compressive pituitary adenoma at the optic chiasm (bitemporal hemianopia).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology and Optic Nerve Diseases",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy (42nd Ed.)",title:"Cranial Nerves: Cranial Nerve II (Optic Nerve Pathway)",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"}],historicalTreatise:{author:"Andreas Vesalius & Galen",work:"De Humani Corporis Fabrica (1543)",note:"Dismantled the ancient Galenic doctrine that the optic nerves were hollow pipes ('canales perforati') channeling spiritus visivus, proving they were solid fibrillar neural cables leading to the optic chiasm."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XXI & Paradiso, Canto XXX",quote:"Non è fantastico lo splendore ond'io mi sento fasciato; / ... e vidi lume in forma di rivera / fulvido di fulgore, intra due rive / dipinte di mirabil primavera.",commentary:"The optic nerve is the river of light connecting Dante's corporeal body to the Empyrean: a biological cable conveying light through darkness until neural sensation transforms into pure spiritual intellect."}}];function pA({activeStructureId:s,onSelectStructure:e,viewMode:i,activeLayerFilter:r}){const l=xn.useRef(null),c=xn.useRef(null),d=xn.useRef(null),p=xn.useRef(null),m=xn.useRef({isDragging:!1,previousMousePosition:{x:0,y:0},rotation:{x:.15,y:-.9},targetRotation:{x:.15,y:-.9},zoom:6.2,targetZoom:6.2}),h=xn.useRef(null),v=xn.useRef(null),x=xn.useRef(null),[g,M]=xn.useState(null);return xn.useEffect(()=>{const T=l.current;if(!T)return;const C=new YS;c.current=C;const S=T.clientWidth,y=T.clientHeight||560,O=new fi(42,S/y,.1,100);O.position.set(0,0,m.current.zoom),d.current=O;const P=new dA({antialias:!0,alpha:!0});P.setSize(S,y),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.toneMapping=Fh,P.toneMappingExposure=1.35,P.localClippingEnabled=!0,p.current=P,T.innerHTML="",T.appendChild(P.domElement);const w=new hM(16777215,1.5);C.add(w);const z=new bv(16775920,2.8);z.position.set(7,9,8),C.add(z);const N=new bv(8246268,1.8);N.position.set(-7,-5,-6),C.add(N);const I=new Mv(13938487,3.2,30);I.position.set(0,7,-6),C.add(I);const E=new Mv(16486972,2.2,8);E.position.set(0,0,0),C.add(E);const D=new Hr;v.current=D,C.add(D);const X=new Hr;h.current=X,D.add(X),vA(D,i,r),Jv(X,lr,s,r);let G=!1,W=0,ce=0;const ge=le=>{le.button!==0&&le.button!==2||(G=!0,W=le.clientX,ce=le.clientY)},Q=le=>{const ve=P.domElement.getBoundingClientRect(),we=(le.clientX-ve.left)/ve.width*2-1,Ke=-((le.clientY-ve.top)/ve.height)*2+1,Ye=new Tv;if(Ye.setFromCamera(new ht(we,Ke),O),h.current){const ot=h.current.children.map(ut=>ut.children[0]).filter(Boolean),pt=Ye.intersectObjects(ot);if(pt.length>0){const ut=pt[0].object.userData.structureId;M(ut),P.domElement.style.cursor="pointer"}else M(null),P.domElement.style.cursor=G?"grabbing":"grab"}if(!G)return;const Ut=le.clientX-W,at=le.clientY-ce;m.current.targetRotation.y+=Ut*.008,m.current.targetRotation.x+=at*.008,m.current.targetRotation.x=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,m.current.targetRotation.x)),W=le.clientX,ce=le.clientY},B=()=>{G=!1,P.domElement.style.cursor="grab"},H=le=>{const ve=P.domElement.getBoundingClientRect(),we=(le.clientX-ve.left)/ve.width*2-1,Ke=-((le.clientY-ve.top)/ve.height)*2+1,Ye=new Tv;if(Ye.setFromCamera(new ht(we,Ke),O),h.current){const Ut=h.current.children.map(ot=>ot.children[0]).filter(Boolean),at=Ye.intersectObjects(Ut);if(at.length>0){const ot=at[0].object.userData.structureId;ot&&e&&e(ot)}}},$=le=>{le.preventDefault(),m.current.targetZoom+=le.deltaY*.005,m.current.targetZoom=Math.max(3.5,Math.min(10,m.current.targetZoom))},fe=P.domElement;fe.addEventListener("mousedown",ge),window.addEventListener("mousemove",Q),window.addEventListener("mouseup",B),fe.addEventListener("click",H),fe.addEventListener("wheel",$,{passive:!1});let Ee=0;const L=le=>{le.touches.length===1?(G=!0,W=le.touches[0].clientX,ce=le.touches[0].clientY):le.touches.length===2&&(Ee=Math.hypot(le.touches[0].clientX-le.touches[1].clientX,le.touches[0].clientY-le.touches[1].clientY))},Z=le=>{if(le.touches.length===1&&G){const ve=le.touches[0].clientX-W,we=le.touches[0].clientY-ce;m.current.targetRotation.y+=ve*.008,m.current.targetRotation.x+=we*.008,W=le.touches[0].clientX,ce=le.touches[0].clientY}else if(le.touches.length===2){const ve=Math.hypot(le.touches[0].clientX-le.touches[1].clientX,le.touches[0].clientY-le.touches[1].clientY),we=(Ee-ve)*.01;m.current.targetZoom=Math.max(3.5,Math.min(10,m.current.targetZoom+we)),Ee=ve}},Me=()=>{G=!1};fe.addEventListener("touchstart",L,{passive:!0}),fe.addEventListener("touchmove",Z,{passive:!0}),fe.addEventListener("touchend",Me,{passive:!0});const Te=new ResizeObserver(le=>{for(let ve of le){const we=ve.contentRect.width,Ke=ve.contentRect.height||560;we>0&&Ke>0&&(O.aspect=we/Ke,O.updateProjectionMatrix(),P.setSize(we,Ke))}});Te.observe(T);let Pe=new gM;const ae=()=>{const le=Pe.getElapsedTime();m.current.rotation.x+=(m.current.targetRotation.x-m.current.rotation.x)*.1,m.current.rotation.y+=(m.current.targetRotation.y-m.current.rotation.y)*.1,m.current.zoom+=(m.current.targetZoom-m.current.zoom)*.1,D.rotation.x=m.current.rotation.x,D.rotation.y=m.current.rotation.y,O.position.z=m.current.zoom,h.current&&h.current.children.forEach(ve=>{const we=ve.children[1];if(we){const Ke=1+.28*Math.sin(le*4+ve.position.x);we.scale.set(Ke,Ke,Ke)}}),P.render(C,O),x.current=requestAnimationFrame(ae)};return ae(),()=>{x.current&&cancelAnimationFrame(x.current),fe.removeEventListener("mousedown",ge),window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",B),fe.removeEventListener("click",H),fe.removeEventListener("wheel",$),fe.removeEventListener("touchstart",L),fe.removeEventListener("touchmove",Z),fe.removeEventListener("touchend",Me),Te.disconnect(),P.dispose()}},[i,r]),xn.useEffect(()=>{h.current&&Jv(h.current,lr,s,r)},[s,r]),xn.useEffect(()=>{if(!s)return;const T=lr.find(C=>C.id===s);if(T&&T.pinPosition){const[C,S,y]=T.pinPosition,O=-Math.atan2(C,y),P=Math.atan2(S,Math.sqrt(C*C+y*y));m.current.targetRotation.y=O,m.current.targetRotation.x=P*.7,m.current.targetZoom=5.2}},[s]),he.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"560px"},children:[he.jsx("div",{ref:l,style:{width:"100%",height:"100%",minHeight:"560px",borderRadius:"12px",overflow:"hidden"}}),he.jsxs("div",{style:{position:"absolute",bottom:"1rem",left:"1rem",display:"flex",gap:"0.6rem",background:"rgba(10, 10, 12, 0.85)",backdropFilter:"blur(12px)",padding:"0.45rem 0.9rem",borderRadius:"8px",border:"1px solid var(--border-glass)",fontSize:"0.82rem",color:"var(--text-secondary)"},children:[he.jsx("span",{children:"🖱️ 360° Rotate"}),he.jsx("span",{children:"•"}),he.jsx("span",{children:"🔍 Scroll to Zoom"}),he.jsx("span",{children:"•"}),he.jsx("span",{children:"🎯 Click 3D Pins"})]}),g&&he.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",background:"rgba(20, 21, 26, 0.95)",backdropFilter:"blur(12px)",border:"1px solid var(--accent-gold)",padding:"0.5rem 1rem",borderRadius:"8px",color:"#fff",fontSize:"0.9rem",boxShadow:"0 8px 24px rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:30},children:[he.jsx("strong",{style:{color:"var(--accent-gold)"},children:lr.find(T=>T.id===g)?.name}),he.jsx("span",{style:{display:"block",fontSize:"0.75rem",color:"var(--text-secondary)",fontStyle:"italic"},children:lr.find(T=>T.id===g)?.latin})]}),he.jsx("button",{onClick:()=>{m.current.targetRotation={x:.15,y:-.9},m.current.targetZoom=6.2},style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(20, 21, 26, 0.85)",border:"1px solid var(--border-glass)",color:"var(--text-primary)",padding:"0.45rem 0.9rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.82rem",backdropFilter:"blur(8px)",transition:"all 0.2s",zIndex:30},title:"Reset 3D Camera View",children:"↺ Reset 3D View"})]})}function mA(){const s=document.createElement("canvas");s.width=512,s.height=512;const e=s.getContext("2d"),i=e.createRadialGradient(256,256,60,256,256,256);i.addColorStop(0,"#1c1917"),i.addColorStop(.2,"#78350f"),i.addColorStop(.6,"#b45309"),i.addColorStop(.9,"#d97706"),i.addColorStop(1,"#451a03"),e.fillStyle=i,e.fillRect(0,0,512,512),e.strokeStyle="rgba(254, 240, 138, 0.35)",e.lineWidth=1.5;for(let l=0;l<180;l++){const c=l*Math.PI/90,d=80+Math.random()*20,p=240+Math.random()*16;e.beginPath(),e.moveTo(256+Math.cos(c)*d,256+Math.sin(c)*d),e.lineTo(256+Math.cos(c)*p,256+Math.sin(c)*p),e.stroke()}return e.fillStyle="#050505",e.beginPath(),e.arc(256,256,75,0,Math.PI*2),e.fill(),new b_(s)}function gA(){const s=document.createElement("canvas");s.width=1024,s.height=512;const e=s.getContext("2d"),i=e.createLinearGradient(0,0,1024,512);i.addColorStop(0,"#ea580c"),i.addColorStop(.4,"#c2410c"),i.addColorStop(.8,"#9a3412"),i.addColorStop(1,"#7c2d12"),e.fillStyle=i,e.fillRect(0,0,1024,512);const r=380,l=260;e.fillStyle="#fef08a",e.beginPath(),e.arc(r,l,32,0,Math.PI*2),e.fill(),e.strokeStyle="#ca8a04",e.lineWidth=3,e.stroke();const c=600,d=260,p=e.createRadialGradient(c,d,8,c,d,45);p.addColorStop(0,"#f59e0b"),p.addColorStop(.4,"#7c2d12"),p.addColorStop(1,"transparent"),e.fillStyle=p,e.beginPath(),e.arc(c,d,45,0,Math.PI*2),e.fill();const m=(v,x,g)=>{e.strokeStyle=g?"rgba(37, 99, 235, 0.85)":"rgba(220, 38, 38, 0.9)",e.lineWidth=g?3.5:2.5,e.lineCap="round",e.beginPath(),e.moveTo(v,x),e.bezierCurveTo(v+40,x-80,v+160,x-140,v+280,x-120),e.stroke(),e.lineWidth=1.8,e.beginPath(),e.moveTo(v+100,x-100),e.lineTo(v+160,x-180),e.moveTo(v+180,x-130),e.lineTo(v+240,x-200),e.stroke(),e.lineWidth=g?3.5:2.5,e.beginPath(),e.moveTo(v,x),e.bezierCurveTo(v+40,x+80,v+160,x+140,v+280,x+120),e.stroke(),e.lineWidth=1.8,e.beginPath(),e.moveTo(v+100,x+100),e.lineTo(v+160,x+180),e.moveTo(v+180,x+130),e.lineTo(v+240,x+200),e.stroke()};return m(r,l,!0),m(r+4,l-2,!1),new b_(s)}function vA(s,e,i){for(;s.children.length>1;)s.remove(s.children[s.children.length-1]);const r=e==="crossSection",l=r?Math.PI*1.34:Math.PI*2,c=i==="all"||i==="fibrosa",d=i==="all"||i==="vasculosa",p=i==="all"||i==="nervosa",m=i==="all"||i==="optical",h=i==="all"||i==="neural";if(c){const v=new xa(2,56,56,0,l,.42,Math.PI-.42),x=new sr({color:16317180,roughness:.32,metalness:.05,side:r?Un:Ea}),g=new Wt(v,x);g.rotation.y=Math.PI/2,s.add(g);const M=new Xs(.32,.08,1.8),T=new sr({color:10033947,roughness:.55}),C=new Wt(M,T);C.position.set(0,2.02,-.45),C.rotation.x=-.2,s.add(C);const S=new Wt(M,T);S.position.set(0,-2.02,-.45),S.rotation.x=.2,s.add(S);const y=new xa(1.24,48,48,0,Math.PI*2,0,Math.PI/2.05),O=new Id({color:12248829,transparent:!0,opacity:.45,roughness:.03,metalness:.08,transmission:.92,ior:1.376,side:Un}),P=new Wt(y,O);P.position.set(0,0,1.44),P.scale.set(1,1,.74),s.add(P)}if(d){const v=new xa(1.92,48,48,0,l,.46,Math.PI-.46),x=new sr({color:8330525,roughness:.55,metalness:.12,side:Un}),g=new Wt(v,x);g.rotation.y=Math.PI/2,s.add(g);const M=new Jo(.46,1.22,48),T=mA(),C=new sr({map:T,roughness:.4,side:Un}),S=new Wt(M,C);S.position.set(0,0,1.46),s.add(S);const y=new Jh(1.26,.12,16,48),O=new sr({color:7877903,roughness:.5}),P=new Wt(y,O);P.position.set(0,0,1.32),s.add(P)}if(p){const v=new xa(1.85,56,56,0,l,.58,Math.PI-.58),x=gA(),g=new sr({map:x,roughness:.45,metalness:.05,side:Un}),M=new Wt(v,g);M.rotation.y=Math.PI/2,s.add(M);const T=new Yc(.22,32),C=new ya({color:16096779,side:Un}),S=new Wt(T,C);S.position.set(0,0,-1.84),s.add(S);const y=new Yc(.25,32),O=new ya({color:16707722,side:Un}),P=new Wt(y,O);P.position.set(.78,.22,-1.77),P.rotation.y=.35,s.add(P)}if(m){const v=new xa(.92,36,36),x=new Id({color:14742270,transparent:!0,opacity:.88,roughness:.05,transmission:.92,ior:1.406}),g=new Wt(v,x);g.position.set(0,0,1.24),g.scale.set(.96,.96,.48),s.add(g);const M=new Jo(.9,1.25,48,8),T=new ya({color:16710083,wireframe:!0,transparent:!0,opacity:.45}),C=new Wt(M,T);if(C.position.set(0,0,1.24),s.add(C),r||i==="optical"){const S=new xa(1.8,36,36,0,l),y=new Id({color:16498468,transparent:!0,opacity:.2,roughness:.1,transmission:.95}),O=new Wt(S,y);O.rotation.y=Math.PI/2,s.add(O)}}if(h||c){const v=new Zo(.42,.46,2,32),x=new sr({color:16707722,roughness:.35,metalness:.08}),g=new Wt(v,x);g.position.set(.88,.22,-2.7),g.rotation.x=Math.PI/2+.15,g.rotation.z=-.15,s.add(g);const M=new Zo(.045,.045,2,16),T=new ya({color:14427686}),C=new Wt(M,T);C.position.set(.85,.26,-2.7),C.rotation.x=Math.PI/2+.15,s.add(C);const S=new Zo(.045,.045,2,16),y=new ya({color:2450411}),O=new Wt(S,y);O.position.set(.91,.18,-2.7),O.rotation.x=Math.PI/2+.15,s.add(O)}}function Jv(s,e,i,r){for(;s.children.length>0;)s.remove(s.children[0]);e.forEach(l=>{if(r!=="all"&&l.layerCategory!==r)return;const c=l.id===i,d=new Hr;d.position.set(...l.pinPosition);const p=new xa(c?.13:.09,20,20),m=new ya({color:c?13938487:16777215}),h=new Wt(p,m);h.userData={structureId:l.id},d.add(h);const v=new Jo(.12,.17,32),x=new ya({color:c?13938487:l.color||3718648,side:Un,transparent:!0,opacity:c?.95:.7}),g=new Wt(v,x);g.lookAt(0,0,10),d.add(g),s.add(d)})}const _A=[{id:"cornea",label:"Cornea",x:25.8,y:35.5},{id:"iris",label:"Iris & Pupil",x:31.2,y:53.5},{id:"lens",label:"Crystalline Lens",x:35.5,y:49},{id:"ciliaryBody",label:"Ciliary Body & Zonules",x:34.5,y:65},{id:"vitreous",label:"Vitreous Body",x:52,y:50},{id:"sclera",label:"Sclera",x:61.5,y:17.5},{id:"choroid",label:"Choroid",x:63.5,y:22.5},{id:"retina",label:"Retina",x:65.8,y:27.5},{id:"fovea",label:"Macula & Fovea Centralis",x:67.2,y:49.5},{id:"opticDisc",label:"Optic Disc (Blind Spot)",x:64.5,y:61.5},{id:"opticNerve",label:"Optic Nerve (CN II)",x:75,y:69}];function xA({activeStructureId:s,onSelectStructure:e}){const[i,r]=xn.useState(null);return he.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"520px",background:"#0a0d14",borderRadius:"12px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border-glass)"},children:[he.jsx("img",{src:"/the-anatomical-gaze/eye_anatomy_diagram.jpg",alt:"Clinical Sagittal Eye Anatomy Diagram",style:{width:"100%",height:"100%",objectFit:"contain",display:"block"}}),_A.map(l=>{const c=l.id===s,d=l.id===i;return he.jsxs("div",{onClick:()=>e(l.id),onMouseEnter:()=>r(l.id),onMouseLeave:()=>r(null),style:{position:"absolute",left:`${l.x}%`,top:`${l.y}%`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:10},children:[he.jsx("div",{style:{position:"relative",width:c?"26px":"20px",height:c?"26px":"20px",borderRadius:"50%",background:c?"radial-gradient(circle, var(--accent-gold) 0%, rgba(216, 184, 99, 0.4) 70%)":"radial-gradient(circle, #38bdf8 0%, rgba(56, 189, 248, 0.3) 70%)",boxShadow:c?"0 0 16px var(--accent-gold), 0 0 30px rgba(216, 184, 99, 0.6)":"0 0 10px rgba(56, 189, 248, 0.6)",border:`2px solid ${c?"#fff":"rgba(255, 255, 255, 0.9)"}`,transition:"all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",alignItems:"center",justifyContent:"center"},children:he.jsx("div",{style:{width:c?"8px":"6px",height:c?"8px":"6px",borderRadius:"50%",background:"#fff"}})}),(d||c)&&he.jsx("div",{style:{position:"absolute",bottom:"120%",left:"50%",transform:"translateX(-50%)",background:"rgba(15, 17, 23, 0.95)",backdropFilter:"blur(10px)",border:`1px solid ${c?"var(--accent-gold)":"var(--border-glass)"}`,padding:"0.35rem 0.75rem",borderRadius:"6px",color:c?"var(--accent-gold)":"#fff",fontSize:"0.78rem",fontWeight:"600",whiteSpace:"nowrap",boxShadow:"0 8px 24px rgba(0,0,0,0.8)",pointerEvents:"none",zIndex:20},children:l.label})]},l.id)}),he.jsx("div",{style:{position:"absolute",bottom:"0.75rem",left:"0.75rem",background:"rgba(10, 10, 12, 0.8)",backdropFilter:"blur(8px)",padding:"0.35rem 0.75rem",borderRadius:"6px",border:"1px solid var(--border-glass)",fontSize:"0.78rem",color:"var(--text-secondary)"},children:"✨ Clinical Sagittal Anatomy (Exeter Eye Standard) • Click any glowing pin"})]})}function yA({structure:s}){const[e,i]=xn.useState("medical");return s?he.jsxs("div",{className:"glass-panel",style:{height:"100%",padding:"2rem",display:"flex",flexDirection:"column",overflowY:"auto",maxHeight:"750px",animation:"fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)"},children:[he.jsxs("div",{style:{borderBottom:"1px solid var(--border-glass)",paddingBottom:"1.25rem",marginBottom:"1.25rem"},children:[he.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.4rem"},children:[he.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--accent-crimson)",fontWeight:"600",background:"rgba(158, 42, 43, 0.15)",padding:"0.2rem 0.6rem",borderRadius:"4px",border:"1px solid rgba(158, 42, 43, 0.3)"},children:s.layer}),he.jsx("span",{style:{fontStyle:"italic",color:"var(--text-secondary)",fontSize:"0.9rem"},children:s.latin})]}),he.jsx("h2",{style:{fontSize:"2.2rem",color:"var(--accent-gold)",margin:"0.2rem 0 0.5rem 0"},children:s.name}),s.opticalMetrics&&he.jsx("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginTop:"0.75rem"},children:Object.entries(s.opticalMetrics).map(([r,l])=>he.jsxs("span",{style:{fontSize:"0.8rem",background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-glass)",padding:"0.25rem 0.6rem",borderRadius:"6px",color:"var(--text-primary)"},children:[he.jsxs("strong",{style:{color:"var(--accent-gold)",textTransform:"capitalize"},children:[r.replace(/([A-Z])/g," $1"),":"]})," ",l]},r))})]}),he.jsxs("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(0, 0, 0, 0.3)",padding:"0.3rem",borderRadius:"8px",marginBottom:"1.5rem",border:"1px solid var(--border-glass)",overflowX:"auto"},children:[he.jsx("button",{onClick:()=>i("medical"),style:Pc(e==="medical"),children:"🩺 Anatomy & Pathology"}),he.jsxs("button",{onClick:()=>i("sources"),style:Pc(e==="sources"),children:["📚 Medical Sources (",s.medicalSources?.length||0,")"]}),he.jsx("button",{onClick:()=>i("history"),style:Pc(e==="history"),children:"📜 Historical Treatise"}),he.jsx("button",{onClick:()=>i("literary"),style:Pc(e==="literary"),children:"🖋️ Literary Analysis"})]}),he.jsxs("div",{style:{flex:1},children:[e==="medical"&&he.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[he.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",borderRadius:"8px",borderLeft:"4px solid var(--accent-gold)"},children:[he.jsx("h4",{style:{color:"var(--text-primary)",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Histological Organization & Physiology"}),he.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.medicalDescription})]}),s.clinicalPathology&&he.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.08)",borderRadius:"8px",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.2)"},children:[he.jsx("h4",{style:{color:"#f87171",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Clinical Pathologies & Diagnostics"}),he.jsx("p",{style:{fontSize:"0.92rem",lineHeight:"1.6",color:"var(--text-primary)"},children:s.clinicalPathology})]})]}),e==="sources"&&he.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[he.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"0.25rem"},children:"Data and anatomical parameters pooled from peer-reviewed ophthalmic authorities and institutional curricula:"}),s.medicalSources?.map((r,l)=>he.jsxs("div",{className:"interactive-card",style:{padding:"1rem 1.25rem",background:"rgba(20, 21, 26, 0.8)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[he.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.3rem"},children:[he.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-gold)",fontWeight:"600"},children:r.authority}),he.jsx("span",{style:{fontSize:"0.75rem",color:"#6ee7b7"},children:"✓ Verified Peer-Reviewed"})]}),he.jsx("h5",{style:{fontSize:"0.95rem",color:"var(--text-primary)",marginBottom:"0.5rem",fontWeight:"500"},children:r.title||r.citation}),r.url&&he.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem",color:"var(--accent-gold)",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:"View Authority Catalog ↗"})]},l))]}),e==="history"&&s.historicalTreatise&&he.jsxs("div",{style:{padding:"1.5rem",background:"rgba(216, 184, 99, 0.05)",border:"1px solid rgba(216, 184, 99, 0.2)",borderRadius:"10px"},children:[he.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"var(--accent-gold)"},children:"Historical Anatomical Root"}),he.jsx("h3",{style:{fontSize:"1.3rem",color:"var(--text-primary)",margin:"0.4rem 0"},children:s.historicalTreatise.author}),he.jsx("p",{style:{fontStyle:"italic",color:"var(--accent-gold)",marginBottom:"1rem",fontSize:"0.95rem"},children:s.historicalTreatise.work}),he.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-primary)"},children:s.historicalTreatise.note})]}),e==="literary"&&s.literaryAnalysis&&he.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[he.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.1)",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.25)",borderRadius:"8px"},children:[he.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[he.jsx("span",{style:{color:"var(--accent-crimson)",fontWeight:"bold",fontSize:"0.9rem"},children:s.literaryAnalysis.figure}),he.jsx("span",{style:{fontStyle:"italic",fontSize:"0.85rem",color:"var(--text-secondary)"},children:s.literaryAnalysis.text})]}),he.jsxs("blockquote",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"1.05rem",color:"var(--text-primary)",lineHeight:"1.6",margin:"0.75rem 0"},children:['"',s.literaryAnalysis.quote,'"']})]}),he.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[he.jsx("h5",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Critical Commentary"}),he.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.literaryAnalysis.commentary})]})]})]})]}):he.jsxs("div",{className:"glass-panel",style:{height:"100%",minHeight:"450px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2.5rem",textAlign:"center",color:"var(--text-secondary)"},children:[he.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem",opacity:.8},children:"👁️"}),he.jsx("h3",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"1.4rem"},children:"3D Interactive Ocular Dissection"}),he.jsx("p",{style:{maxWidth:"380px",fontSize:"0.95rem",lineHeight:"1.6"},children:"Click on any glowing anatomical pin in the 3D viewport or select a structure from the directory to inspect its medical anatomy, clinical citations, and literary resonance."})]})}function Pc(s){return{flex:"1 1 auto",padding:"0.55rem 0.8rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:s?"600":"400",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"}}function SA(){const[s,e]=xn.useState("cornea"),[i,r]=xn.useState("3d"),[l,c]=xn.useState("crossSection"),[d,p]=xn.useState("all"),m=lr.find(v=>v.id===s)||lr[0],h=lr.filter(v=>d==="all"||v.layerCategory===d);return he.jsxs("div",{className:"section-container",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[he.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:[he.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[he.jsxs("div",{children:[he.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"2px",color:"var(--accent-gold)"},children:"Interactive 3D Ocular Deep-Map"}),he.jsx("h2",{style:{fontSize:"2.4rem",color:"var(--text-primary)",marginTop:"0.25rem"},children:"The Dissected Eye: 3D Anatomical Atlas"}),he.jsx("p",{style:{maxWidth:"850px",fontSize:"1.05rem",color:"var(--text-secondary)",marginTop:"0.5rem",lineHeight:"1.6"},children:"Fully interactive 3D WebGL model modeled after clinical ophthalmic cross-sections (Exeter Eye, AAO, NIH Webvision). Rotate in 360°, inspect internal layers in sagittal cutaway dissection, and explore the convergence of medical anatomy and Dante/Heaney poetics."})]}),he.jsxs("div",{style:{display:"flex",background:"rgba(0,0,0,0.5)",padding:"0.4rem",borderRadius:"10px",border:"1px solid var(--accent-gold)",gap:"0.4rem"},children:[he.jsx("button",{onClick:()=>r("3d"),style:$v(i==="3d"),title:"Interactive 3D WebGL anatomical model",children:"🌐 3D Interactive Model"}),he.jsx("button",{onClick:()=>r("diagram"),style:$v(i==="diagram"),title:"Clinical sagittal cross-section illustration",children:"📋 Clinical 2D Diagram"})]})]}),i==="3d"&&he.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",marginTop:"1.25rem",paddingTop:"1rem",borderTop:"1px dashed var(--border-glass)"},children:[he.jsx("span",{style:{fontSize:"0.82rem",color:"var(--accent-gold)"},children:"3D Anatomy Mode:"}),he.jsx("button",{onClick:()=>c("crossSection"),style:e_(l==="crossSection"),children:"🔪 Sagittal Dissection (Cutaway)"}),he.jsx("button",{onClick:()=>c("composite"),style:e_(l==="composite"),children:"👁️ Intact 3D Globe"})]}),he.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1.25rem",flexWrap:"wrap",borderTop:"1px solid var(--border-glass)",paddingTop:"1.25rem"},children:[he.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",alignSelf:"center",marginRight:"0.5rem"},children:"Filter Tunics:"}),hA.map(v=>he.jsx("button",{onClick:()=>p(v.id),style:MA(d===v.id),children:v.label},v.id))]}),he.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1rem",overflowX:"auto",paddingBottom:"0.4rem"},children:h.map(v=>{const x=v.id===s;return he.jsxs("button",{onClick:()=>e(v.id),style:{padding:"0.4rem 0.85rem",background:x?"rgba(216, 184, 99, 0.2)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${x?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"20px",color:x?"var(--accent-gold)":"var(--text-secondary)",fontSize:"0.82rem",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"},children:[x?"● ":"",v.name]},v.id)})})]}),he.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(420px, 1fr))",gap:"1.5rem",alignItems:"stretch"},children:[he.jsxs("div",{className:"glass-panel",style:{position:"relative",padding:"1rem",display:"flex",flexDirection:"column",minHeight:"560px",border:"1px solid var(--border-glass)"},children:[he.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",borderBottom:"1px solid var(--border-glass)",marginBottom:"0.5rem"},children:[he.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[he.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}),he.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-primary)",letterSpacing:"0.5px"},children:i==="3d"?"Interactive 3D WebGL Model":"Clinical Ophthalmic Illustration"})]}),he.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:i==="3d"?l==="crossSection"?"Sagittal Cutaway Dissection":"Intact Globe":"Exeter Eye Standard"})]}),he.jsx("div",{style:{flex:1,position:"relative",minHeight:"520px"},children:i==="3d"?he.jsx(pA,{activeStructureId:s,onSelectStructure:v=>e(v),viewMode:l,activeLayerFilter:d}):he.jsx(xA,{activeStructureId:s,onSelectStructure:v=>e(v)})})]}),he.jsx("div",{style:{minHeight:"560px"},children:he.jsx(yA,{structure:m})})]})]})}function $v(s){return{padding:"0.55rem 1.1rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"7px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.88rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function e_(s){return{padding:"0.35rem 0.75rem",background:s?"rgba(216, 184, 99, 0.25)":"rgba(255, 255, 255, 0.05)",border:`1px solid ${s?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"5px",color:s?"var(--accent-gold)":"var(--text-secondary)",fontSize:"0.78rem",fontWeight:s?"600":"400",cursor:"pointer"}}function MA(s){return{padding:"0.35rem 0.8rem",background:s?"rgba(216, 184, 99, 0.25)":"rgba(255, 255, 255, 0.04)",border:`1px solid ${s?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.8rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function bA(){return he.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[he.jsx("h2",{style:{marginBottom:"1rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Gaze and the Abject Body"}),he.jsx("p",{style:{marginBottom:"2rem",maxWidth:"800px",fontSize:"1.1rem"},children:'Explore how the "repulsive object" of the corpse, viewed through a medical lens, becomes the site of both poetic reflection and existential disintegration.'}),he.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:Ky.map(s=>he.jsxs("div",{className:"interactive-card glass-panel",style:{padding:"1.5rem",display:"flex",flexDirection:"column"},children:[he.jsx("div",{style:{height:"200px",background:"var(--bg-primary)",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border-glass)",color:"var(--text-secondary)",fontStyle:"italic",overflow:"hidden"},children:s.image?he.jsx("img",{src:s.image,alt:s.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):`[Image Placeholder: ${s.title}]`}),he.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-crimson)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"0.5rem"},children:s.type}),he.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"1rem",color:"var(--accent-gold)"},children:s.title}),he.jsx("p",{style:{fontSize:"0.95rem",flexGrow:1},children:s.description})]},s.id))})]})}function EA(){const[s,e]=xn.useState("timeline"),i={timeline:he.jsx(Qy,{}),diagram:he.jsx(SA,{}),gallery:he.jsx(bA,{})};return he.jsxs("div",{className:"app-container",children:[he.jsxs("header",{className:"glass-panel app-header",style:{margin:"2rem",padding:"2rem",textAlign:"center"},children:[he.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"0.5rem",color:"var(--accent-gold)"},children:"The Anatomical Gaze"}),he.jsx("p",{className:"subtitle",style:{fontSize:"1.1rem",marginBottom:"2rem"},children:"Medical Optics, Ocular Anatomy, and the Literary Eye from Dante to Heaney"}),he.jsxs("nav",{className:"main-nav",style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[he.jsx("button",{className:`nav-btn interactive-card ${s==="timeline"?"active":""}`,onClick:()=>e("timeline"),style:Xd(s==="timeline"),children:"The Medical Eye"}),he.jsx("button",{className:`nav-btn interactive-card ${s==="diagram"?"active":""}`,onClick:()=>e("diagram"),style:Xd(s==="diagram"),children:"The Dissected Eye"}),he.jsx("button",{className:`nav-btn interactive-card ${s==="gallery"?"active":""}`,onClick:()=>e("gallery"),style:Xd(s==="gallery"),children:"The Abject Body"})]})]}),he.jsx("main",{className:"content-area",style:{margin:"0 2rem 2rem 2rem",minHeight:"60vh"},children:i[s]})]})}function Xd(s){return{padding:"0.75rem 1.5rem",background:s?"var(--accent-crimson)":"var(--bg-glass)",border:`1px solid ${s?"var(--accent-crimson)":"var(--border-glass)"}`,color:"#fff",borderRadius:"8px",fontFamily:"Inter",fontWeight:"500",fontSize:"1rem",cursor:"pointer",transition:"var(--transition-fast)"}}Yy.createRoot(document.getElementById("root")).render(he.jsx(xn.StrictMode,{children:he.jsx(EA,{})}));
