(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ih={exports:{}},Io={};var B0;function Py(){if(B0)return Io;B0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var m in l)m!=="key"&&(u[m]=l[m])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var F0;function Iy(){return F0||(F0=1,ih.exports=Py()),ih.exports}var ve=Iy(),ah={exports:{}},rt={};var H0;function zy(){if(H0)return rt;H0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function _(L,K,Me){this.props=L,this.context=K,this.refs=S,this.updater=Me||T}_.prototype.isReactComponent={},_.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=_.prototype;function B(L,K,Me){this.props=L,this.context=K,this.refs=S,this.updater=Me||T}var w=B.prototype=new O;w.constructor=B,C(w,_.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function U(){}var P={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function N(L,K,Me){var Te=Me.ref;return{$$typeof:s,type:L,key:K,ref:Te!==void 0?Te:null,props:Me}}function k(L,K){return N(L.type,K,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function q(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Me){return K[Me]})}var ce=/\/+/g;function pe(L,K){return typeof L=="object"&&L!==null&&L.key!=null?q(""+L.key):K.toString(36)}function j(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(U,U):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,K,Me,Te,Oe){var W=typeof L;(W==="undefined"||W==="boolean")&&(L=null);var de=!1;if(L===null)de=!0;else switch(W){case"bigint":case"string":case"number":de=!0;break;case"object":switch(L.$$typeof){case s:case e:de=!0;break;case y:return de=L._init,z(de(L._payload),K,Me,Te,Oe)}}if(de)return Oe=Oe(L),de=Te===""?"."+pe(L,0):Te,I(Oe)?(Me="",de!=null&&(Me=de.replace(ce,"$&/")+"/"),z(Oe,K,Me,"",function(et){return et})):Oe!=null&&(G(Oe)&&(Oe=k(Oe,Me+(Oe.key==null||L&&L.key===Oe.key?"":(""+Oe.key).replace(ce,"$&/")+"/")+de)),K.push(Oe)),1;de=0;var xe=Te===""?".":Te+":";if(I(L))for(var De=0;De<L.length;De++)Te=L[De],W=xe+pe(Te,De),de+=z(Te,K,Me,W,Oe);else if(De=b(L),typeof De=="function")for(L=De.call(L),De=0;!(Te=L.next()).done;)Te=Te.value,W=xe+pe(Te,De++),de+=z(Te,K,Me,W,Oe);else if(W==="object"){if(typeof L.then=="function")return z(j(L),K,Me,Te,Oe);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(L,K,Me){if(L==null)return L;var Te=[],Oe=0;return z(L,Te,"","",function(W){return K.call(Me,W,Oe++)}),Te}function $(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(Me){(L._status===0||L._status===-1)&&(L._status=1,L._result=Me)},function(Me){(L._status===0||L._status===-1)&&(L._status=2,L._result=Me)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var ge=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Ee={map:H,forEach:function(L,K,Me){H(L,function(){K.apply(this,arguments)},Me)},count:function(L){var K=0;return H(L,function(){K++}),K},toArray:function(L){return H(L,function(K){return K})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=x,rt.Children=Ee,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=B,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,K,Me){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Te=C({},L.props),Oe=L.key;if(K!=null)for(W in K.key!==void 0&&(Oe=""+K.key),K)!E.call(K,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&K.ref===void 0||(Te[W]=K[W]);var W=arguments.length-2;if(W===1)Te.children=Me;else if(1<W){for(var de=Array(W),xe=0;xe<W;xe++)de[xe]=arguments[xe+2];Te.children=de}return N(L.type,Oe,Te)},rt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,K,Me){var Te,Oe={},W=null;if(K!=null)for(Te in K.key!==void 0&&(W=""+K.key),K)E.call(K,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Oe[Te]=K[Te]);var de=arguments.length-2;if(de===1)Oe.children=Me;else if(1<de){for(var xe=Array(de),De=0;De<de;De++)xe[De]=arguments[De+2];Oe.children=xe}if(L&&L.defaultProps)for(Te in de=L.defaultProps,de)Oe[Te]===void 0&&(Oe[Te]=de[Te]);return N(L,W,Oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:m,render:L}},rt.isValidElement=G,rt.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:$}},rt.memo=function(L,K){return{$$typeof:d,type:L,compare:K===void 0?null:K}},rt.startTransition=function(L){var K=P.T,Me={};P.T=Me;try{var Te=L(),Oe=P.S;Oe!==null&&Oe(Me,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(U,ge)}catch(W){ge(W)}finally{K!==null&&Me.types!==null&&(K.types=Me.types),P.T=K}},rt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},rt.use=function(L){return P.H.use(L)},rt.useActionState=function(L,K,Me){return P.H.useActionState(L,K,Me)},rt.useCallback=function(L,K){return P.H.useCallback(L,K)},rt.useContext=function(L){return P.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,K){return P.H.useDeferredValue(L,K)},rt.useEffect=function(L,K){return P.H.useEffect(L,K)},rt.useEffectEvent=function(L){return P.H.useEffectEvent(L)},rt.useId=function(){return P.H.useId()},rt.useImperativeHandle=function(L,K,Me){return P.H.useImperativeHandle(L,K,Me)},rt.useInsertionEffect=function(L,K){return P.H.useInsertionEffect(L,K)},rt.useLayoutEffect=function(L,K){return P.H.useLayoutEffect(L,K)},rt.useMemo=function(L,K){return P.H.useMemo(L,K)},rt.useOptimistic=function(L,K){return P.H.useOptimistic(L,K)},rt.useReducer=function(L,K,Me){return P.H.useReducer(L,K,Me)},rt.useRef=function(L){return P.H.useRef(L)},rt.useState=function(L){return P.H.useState(L)},rt.useSyncExternalStore=function(L,K,Me){return P.H.useSyncExternalStore(L,K,Me)},rt.useTransition=function(){return P.H.useTransition()},rt.version="19.2.8",rt}var G0;function zd(){return G0||(G0=1,ah.exports=zy()),ah.exports}var Tn=zd(),rh={exports:{}},zo={},sh={exports:{}},oh={};var V0;function By(){return V0||(V0=1,(function(s){function e(z,H){var $=z.length;z.push(H);e:for(;0<$;){var ge=$-1>>>1,Ee=z[ge];if(0<l(Ee,H))z[ge]=H,z[$]=Ee,$=ge;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],$=z.pop();if($!==H){z[0]=$;e:for(var ge=0,Ee=z.length,L=Ee>>>1;ge<L;){var K=2*(ge+1)-1,Me=z[K],Te=K+1,Oe=z[Te];if(0>l(Me,$))Te<Ee&&0>l(Oe,Me)?(z[ge]=Oe,z[Te]=$,ge=Te):(z[ge]=Me,z[K]=$,ge=K);else if(Te<Ee&&0>l(Oe,$))z[ge]=Oe,z[Te]=$,ge=Te;else break e}}return H}function l(z,H){var $=z.sortIndex-H.sortIndex;return $!==0?$:z.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();s.unstable_now=function(){return h.now()-m}}var p=[],d=[],y=1,x=null,g=3,b=!1,T=!1,C=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=z)r(d),H.sortIndex=H.expirationTime,e(p,H);else break;H=i(d)}}function I(z){if(C=!1,w(z),!T)if(i(p)!==null)T=!0,U||(U=!0,q());else{var H=i(d);H!==null&&j(I,H.startTime-z)}}var U=!1,P=-1,E=5,N=-1;function k(){return S?!0:!(s.unstable_now()-N<E)}function G(){if(S=!1,U){var z=s.unstable_now();N=z;var H=!0;try{e:{T=!1,C&&(C=!1,O(P),P=-1),b=!0;var $=g;try{t:{for(w(z),x=i(p);x!==null&&!(x.expirationTime>z&&k());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,g=x.priorityLevel;var Ee=ge(x.expirationTime<=z);if(z=s.unstable_now(),typeof Ee=="function"){x.callback=Ee,w(z),H=!0;break t}x===i(p)&&r(p),w(z)}else r(p);x=i(p)}if(x!==null)H=!0;else{var L=i(d);L!==null&&j(I,L.startTime-z),H=!1}}break e}finally{x=null,g=$,b=!1}H=void 0}}finally{H?q():U=!1}}}var q;if(typeof B=="function")q=function(){B(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=G,q=function(){pe.postMessage(null)}}else q=function(){_(G,0)};function j(z,H){P=_(function(){z(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(z){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return z()}finally{g=$}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=g;g=z;try{return H()}finally{g=$}},s.unstable_scheduleCallback=function(z,H,$){var ge=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=$+Ee,z={id:y++,callback:H,priorityLevel:z,startTime:$,expirationTime:Ee,sortIndex:-1},$>ge?(z.sortIndex=$,e(d,z),i(p)===null&&z===i(d)&&(C?(O(P),P=-1):C=!0,j(I,$-ge))):(z.sortIndex=Ee,e(p,z),T||b||(T=!0,U||(U=!0,q()))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var H=g;return function(){var $=g;g=H;try{return z.apply(this,arguments)}finally{g=$}}}})(oh)),oh}var k0;function Fy(){return k0||(k0=1,sh.exports=By()),sh.exports}var lh={exports:{}},On={};var X0;function Hy(){if(X0)return On;X0=1;var s=zd();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,d,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:d,implementation:y}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(p,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(p,d,null,y)},On.flushSync=function(p){var d=h.T,y=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=d,r.p=y,r.d.f()}},On.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},On.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},On.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var y=d.as,x=m(y,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,b=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:b}):y==="script"&&r.d.X(p,{crossOrigin:x,integrity:g,fetchPriority:b,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},On.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=m(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},On.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,x=m(y,d.crossOrigin);r.d.L(p,y,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},On.preloadModule=function(p,d){if(typeof p=="string")if(d){var y=m(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},On.requestFormReset=function(p){r.d.r(p)},On.unstable_batchedUpdates=function(p,d){return p(d)},On.useFormState=function(p,d,y){return h.H.useFormState(p,d,y)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.8",On}var W0;function Gy(){if(W0)return lh.exports;W0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),lh.exports=Hy(),lh.exports}var q0;function Vy(){if(q0)return zo;q0=1;var s=Fy(),e=zd(),i=Gy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===o)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,R=c.child;R;){if(R===a){v=!0,a=c,o=f;break}if(R===o){v=!0,o=c,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=c;break}if(R===o){v=!0,o=f,a=c;break}R=R.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),B=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case B:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var j=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],Ee=-1;function L(t){return{current:t}}function K(t){0>Ee||(t.current=ge[Ee],ge[Ee]=null,Ee--)}function Me(t,n){Ee++,ge[Ee]=t.current,t.current=n}var Te=L(null),Oe=L(null),W=L(null),de=L(null);function xe(t,n){switch(Me(W,n),Me(Oe,t),Me(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?o0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=o0(n),t=l0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Te),Me(Te,t)}function De(){K(Te),K(Oe),K(W)}function et(t){t.memoizedState!==null&&Me(de,t);var n=Te.current,a=l0(n,t.type);n!==a&&(Me(Oe,t),Me(Te,a))}function Ze(t){Oe.current===t&&(K(Te),K(Oe)),de.current===t&&(K(de),No._currentValue=$)}var Dt,at;function dt(t){if(Dt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Dt=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dt+t+at}var ht=!1;function pt(t,n){if(!t||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var oe=le}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(le){oe=le}t.call(Se.prototype)}}else{try{throw Error()}catch(le){oe=le}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var F=v.split(`
`),ne=R.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===ne.length)for(o=F.length-1,c=ne.length-1;1<=o&&0<=c&&F[o]!==ne[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==ne[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==ne[c]){var me=`
`+F[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=c);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?dt(a):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return dt("Activity");default:return""}}function an(t){try{var n="",a=null;do n+=nn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,cn=s.unstable_scheduleCallback,Wt=s.unstable_cancelCallback,sn=s.unstable_shouldYield,Z=s.unstable_requestPaint,Ft=s.unstable_now,Ct=s.unstable_getCurrentPriorityLevel,D=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,re=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Ae=s.log,Ue=s.unstable_setDisableYieldValue,ue=null,he=null;function Ce(t){if(typeof Ae=="function"&&Ue(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(ue,t)}catch{}}var Fe=Math.clz32?Math.clz32:Qe,Pe=Math.log,Ne=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Pe(t)/Ne|0)|0}var je=256,it=262144,X=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Re(o):(v&=R,v!==0?c=Re(v):a||(a=R&~t,a!==0&&(c=Re(a))))):(R=o&~f,R!==0?c=Re(R):v!==0?c=Re(v):a||(a=o&~t,a!==0&&(c=Re(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zt(t,n,a,o,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ne=t.hiddenUpdates;for(a=v&~a;0<a;){var me=31-Fe(a),Se=1<<me;R[me]=0,F[me]=-1;var oe=ne[me];if(oe!==null)for(ne[me]=null,me=0;me<oe.length;me++){var le=oe[me];le!==null&&(le.lane&=-536870913)}a&=~Se}o!==0&&Nt(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:Ws(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ws(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:U0(t.type))}function Xr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Li=Math.random().toString(36).slice(2),hn="__reactFiber$"+Li,An="__reactProps$"+Li,Vn="__reactContainer$"+Li,cr="__reactEvents$"+Li,el="__reactListeners$"+Li,tl="__reactHandles$"+Li,ur="__reactResources$"+Li,Aa="__reactMarker$"+Li;function Ra(t){delete t[hn],delete t[An],delete t[cr],delete t[el],delete t[tl]}function Ki(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=m0(t);t!==null;){if(a=t[hn])return a;t=m0(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[hn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ca(t){var n=t[ur];return n||(n=t[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Aa]=!0}var nl=new Set,A={};function Y(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Ie={};function Ge(t){return rn.call(Ie,t)?!0:rn.call(ae,t)?!1:ie.test(t)?Ie[t]=!0:(ae[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,a,o,c,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?mt(t,v,Je(n)):a!=null?mt(t,v,Je(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Ln(t,n,a,o,c,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Tt(t)}function mt(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(j(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Qt(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Qt(t,f,n[f])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hr(t){return wa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var $c=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,qr=null;function sp(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[An]||null;if(!c)throw Error(r(90));He(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Kt(o)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var tu=!1;function op(t,n,a){if(tu)return t(n,a);tu=!0;try{var o=t(n);return o}finally{if(tu=!1,(Wr!==null||qr!==null)&&(kl(),Wr&&(n=Wr,t=qr,qr=Wr=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Ji)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{nu=!1}var Da=null,iu=null,il=null;function lp(){if(il)return il;var t,n=iu,a=n.length,o,c="value"in Da?Da.value:Da.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return il=c.slice(t,1<o?1-o:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function cp(){return!1}function kn(t){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:cp,this.isPropagationStopped=cp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=kn(dr),Qs=x({},dr,{view:0,detail:0}),L_=kn(Qs),au,ru,js,ol=x({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(au=t.screenX-js.screenX,ru=t.screenY-js.screenY):ru=au=0,js=t),au)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),up=kn(ol),O_=x({},ol,{dataTransfer:0}),P_=kn(O_),I_=x({},Qs,{relatedTarget:0}),su=kn(I_),z_=x({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),B_=kn(z_),F_=x({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H_=kn(F_),G_=x({},dr,{data:0}),fp=kn(G_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=X_[t])?!!n[t]:!1}function ou(){return W_}var q_=x({},Qs,{key:function(t){if(t.key){var n=V_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y_=kn(q_),Z_=x({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=kn(Z_),K_=x({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Q_=kn(K_),j_=x({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),J_=kn(j_),$_=x({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=kn($_),tx=x({},dr,{newState:0,oldState:0}),nx=kn(tx),ix=[9,13,27,32],lu=Ji&&"CompositionEvent"in window,Js=null;Ji&&"documentMode"in document&&(Js=document.documentMode);var ax=Ji&&"TextEvent"in window&&!Js,dp=Ji&&(!lu||Js&&8<Js&&11>=Js),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return ix.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function rx(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function sx(t,n){if(Yr)return t==="compositionend"||!lu&&gp(t,n)?(t=lp(),il=iu=Da=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ox[t.type]:n==="textarea"}function xp(t,n,a,o){Wr?qr?qr.push(o):qr=[o]:Wr=o,n=Ql(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var $s=null,eo=null;function lx(t){t0(t,0)}function ll(t){var n=fr(t);if(Kt(n))return t}function yp(t,n){if(t==="change")return n}var Sp=!1;if(Ji){var cu;if(Ji){var uu="oninput"in document;if(!uu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),uu=typeof Mp.oninput=="function"}cu=uu}else cu=!1;Sp=cu&&(!document.documentMode||9<document.documentMode)}function bp(){$s&&($s.detachEvent("onpropertychange",Ep),eo=$s=null)}function Ep(t){if(t.propertyName==="value"&&ll(eo)){var n=[];xp(n,eo,t,eu(t)),op(lx,n)}}function cx(t,n,a){t==="focusin"?(bp(),$s=n,eo=a,$s.attachEvent("onpropertychange",Ep)):t==="focusout"&&bp()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(eo)}function fx(t,n){if(t==="click")return ll(n)}function hx(t,n){if(t==="input"||t==="change")return ll(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:dx;function to(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!rn.call(n,c)||!ni(t[c],n[c]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var px=Ji&&"documentMode"in document&&11>=document.documentMode,Zr=null,hu=null,no=null,du=!1;function wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||Zr==null||Zr!==kt(o)||(o=Zr,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=Ql(hu,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Zr)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Kr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},pu={},Dp={};Ji&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function mr(t){if(pu[t])return pu[t];if(!Kr[t])return t;var n=Kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return pu[t]=n[a];return t}var Up=mr("animationend"),Np=mr("animationiteration"),Lp=mr("animationstart"),mx=mr("transitionrun"),gx=mr("transitionstart"),vx=mr("transitioncancel"),Op=mr("transitionend"),Pp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function Ti(t,n){Pp.set(t,n),Y(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],Qr=0,gu=0;function ul(){for(var t=Qr,n=gu=Qr=0;n<t;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var c=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&Ip(a,c,f)}}function fl(t,n,a,o){di[Qr++]=t,di[Qr++]=n,di[Qr++]=a,di[Qr++]=o,gu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function vu(t,n,a,o){return fl(t,n,a,o),hl(t)}function gr(t,n){return fl(t,null,null,n),hl(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Fe(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<To)throw To=0,Rf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function _x(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new _x(t,n,a,o)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,o,c,f){var v=0;if(o=t,typeof t=="function")_u(t)&&(v=1);else if(typeof t=="string")v=by(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ii(31,a,n,c),t.elementType=N,t.lanes=f,t;case C:return vr(a.children,c,f,n);case S:v=8,c|=24;break;case _:return t=ii(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case I:return t=ii(13,a,n,c),t.elementType=I,t.lanes=f,t;case U:return t=ii(19,a,n,c),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:v=10;break e;case O:v=9;break e;case w:v=11;break e;case P:v=14;break e;case E:v=16,o=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ii(v,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function vr(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function xu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function Bp(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function yu(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Fp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:an(n)},Fp.set(t,n),n)}return{value:t,source:n,stack:an(n)}}var Jr=[],$r=0,pl=null,io=0,mi=[],gi=0,Ua=null,Pi=1,Ii="";function ea(t,n){Jr[$r++]=io,Jr[$r++]=pl,pl=t,io=n}function Hp(t,n,a){mi[gi++]=Pi,mi[gi++]=Ii,mi[gi++]=Ua,Ua=t;var o=Pi;t=Ii;var c=32-Fe(o)-1;o&=~(1<<c),a+=1;var f=32-Fe(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Pi=1<<32-Fe(n)+c|a<<c|o,Ii=f+t}else Pi=1<<f|a<<c|o,Ii=t}function Su(t){t.return!==null&&(ea(t,1),Hp(t,1,0))}function Mu(t){for(;t===pl;)pl=Jr[--$r],Jr[$r]=null,io=Jr[--$r],Jr[$r]=null;for(;t===Ua;)Ua=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null,Pi=mi[--gi],mi[gi]=null}function Gp(t,n){mi[gi++]=Pi,mi[gi++]=Ii,mi[gi++]=Ua,Pi=n.id,Ii=n.overflow,Ua=t}var Rn=null,qt=null,Mt=!1,Na=null,vi=!1,bu=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(pi(n,t)),bu}function Vp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[An]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)vt(Ro[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||r0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||La(t,!0)}function kp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Rn=Rn.return}}function es(t){if(t!==Rn)return!1;if(!Mt)return kp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vf(t.type,t.memoizedProps)),a=!a),a&&qt&&La(t),kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=p0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=p0(t)}else n===27?(n=qt,Ya(t.type)?(t=Yf,Yf=null,qt=t):qt=n):qt=Rn?xi(t.stateNode.nextSibling):null;return!0}function _r(){qt=Rn=null,Mt=!1}function Eu(){var t=Na;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Na=null),t}function ao(t){Na===null?Na=[t]:Na.push(t)}var Tu=L(null),xr=null,ta=null;function Oa(t,n,a){Me(Tu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Tu.current,K(Tu)}function Au(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Au(f.return,a,t),o||(v=null);break e}f=R.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Au(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function ts(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var R=c.type;ni(c.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(c===de.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}c=c.return}t!==null&&Ru(n,t,a,o),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){xr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Xp(xr,t)}function gl(t,n){return xr===null&&yr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(r(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var xx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},yx=s.unstable_scheduleCallback,Sx=s.unstable_NormalPriority,pn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new xx,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&yx(Sx,function(){t.controller.abort()})}var so=null,wu=0,ns=0,is=null;function Mx(t,n){if(so===null){var a=so=[];wu=0,ns=Lf(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wu++,n.then(Wp,Wp),n}function Wp(){if(--wu===0&&so!==null){is!==null&&(is.status="fulfilled");var t=so;so=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function bx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var qp=z.S;z.S=function(t,n){wg=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Mx(t,n),qp!==null&&qp(t,n)};var Sr=L(null);function Du(){var t=Sr.current;return t!==null?t:Xt.pooledCache}function vl(t,n){n===null?Me(Sr,Sr.current):Me(Sr,n.pool)}function Yp(){var t=Du();return t===null?null:{parent:pn._currentValue,pool:t}}var as=Error(r(460)),Uu=Error(r(474)),_l=Error(r(542)),xl={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t}throw br=n,as}}function Mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(br=a,as):a}}var br=null;function Qp(){if(br===null)throw Error(r(459));var t=br;return br=null,t}function jp(t){if(t===as||t===_l)throw Error(r(483))}var rs=null,oo=0;function yl(t){var n=oo;return oo+=1,rs===null&&(rs=[]),Kp(rs,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(Q,V){if(t){var te=Q.deletions;te===null?(Q.deletions=[V],Q.flags|=16):te.push(V)}}function a(Q,V){if(!t)return null;for(;V!==null;)n(Q,V),V=V.sibling;return null}function o(Q){for(var V=new Map;Q!==null;)Q.key!==null?V.set(Q.key,Q):V.set(Q.index,Q),Q=Q.sibling;return V}function c(Q,V){return Q=$i(Q,V),Q.index=0,Q.sibling=null,Q}function f(Q,V,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<V?(Q.flags|=67108866,V):te):(Q.flags|=67108866,V)):(Q.flags|=1048576,V)}function v(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,V,te,ye){return V===null||V.tag!==6?(V=xu(te,Q.mode,ye),V.return=Q,V):(V=c(V,te),V.return=Q,V)}function F(Q,V,te,ye){var $e=te.type;return $e===C?me(Q,V,te.props.children,ye,te.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&Mr($e)===V.type)?(V=c(V,te.props),lo(V,te),V.return=Q,V):(V=dl(te.type,te.key,te.props,null,Q.mode,ye),lo(V,te),V.return=Q,V)}function ne(Q,V,te,ye){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=yu(te,Q.mode,ye),V.return=Q,V):(V=c(V,te.children||[]),V.return=Q,V)}function me(Q,V,te,ye,$e){return V===null||V.tag!==7?(V=vr(te,Q.mode,ye,$e),V.return=Q,V):(V=c(V,te),V.return=Q,V)}function Se(Q,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=xu(""+V,Q.mode,te),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return te=dl(V.type,V.key,V.props,null,Q.mode,te),lo(te,V),te.return=Q,te;case T:return V=yu(V,Q.mode,te),V.return=Q,V;case E:return V=Mr(V),Se(Q,V,te)}if(j(V)||q(V))return V=vr(V,Q.mode,te,null),V.return=Q,V;if(typeof V.then=="function")return Se(Q,yl(V),te);if(V.$$typeof===B)return Se(Q,gl(Q,V),te);Sl(Q,V)}return null}function oe(Q,V,te,ye){var $e=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:R(Q,V,""+te,ye);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case b:return te.key===$e?F(Q,V,te,ye):null;case T:return te.key===$e?ne(Q,V,te,ye):null;case E:return te=Mr(te),oe(Q,V,te,ye)}if(j(te)||q(te))return $e!==null?null:me(Q,V,te,ye,null);if(typeof te.then=="function")return oe(Q,V,yl(te),ye);if(te.$$typeof===B)return oe(Q,V,gl(Q,te),ye);Sl(Q,te)}return null}function le(Q,V,te,ye,$e){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Q=Q.get(te)||null,R(V,Q,""+ye,$e);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case b:return Q=Q.get(ye.key===null?te:ye.key)||null,F(V,Q,ye,$e);case T:return Q=Q.get(ye.key===null?te:ye.key)||null,ne(V,Q,ye,$e);case E:return ye=Mr(ye),le(Q,V,te,ye,$e)}if(j(ye)||q(ye))return Q=Q.get(te)||null,me(V,Q,ye,$e,null);if(typeof ye.then=="function")return le(Q,V,te,yl(ye),$e);if(ye.$$typeof===B)return le(Q,V,te,gl(V,ye),$e);Sl(V,ye)}return null}function We(Q,V,te,ye){for(var $e=null,At=null,Ye=V,ct=V=0,xt=null;Ye!==null&&ct<te.length;ct++){Ye.index>ct?(xt=Ye,Ye=null):xt=Ye.sibling;var Rt=oe(Q,Ye,te[ct],ye);if(Rt===null){Ye===null&&(Ye=xt);break}t&&Ye&&Rt.alternate===null&&n(Q,Ye),V=f(Rt,V,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt,Ye=xt}if(ct===te.length)return a(Q,Ye),Mt&&ea(Q,ct),$e;if(Ye===null){for(;ct<te.length;ct++)Ye=Se(Q,te[ct],ye),Ye!==null&&(V=f(Ye,V,ct),At===null?$e=Ye:At.sibling=Ye,At=Ye);return Mt&&ea(Q,ct),$e}for(Ye=o(Ye);ct<te.length;ct++)xt=le(Ye,Q,ct,te[ct],ye),xt!==null&&(t&&xt.alternate!==null&&Ye.delete(xt.key===null?ct:xt.key),V=f(xt,V,ct),At===null?$e=xt:At.sibling=xt,At=xt);return t&&Ye.forEach(function(Ja){return n(Q,Ja)}),Mt&&ea(Q,ct),$e}function tt(Q,V,te,ye){if(te==null)throw Error(r(151));for(var $e=null,At=null,Ye=V,ct=V=0,xt=null,Rt=te.next();Ye!==null&&!Rt.done;ct++,Rt=te.next()){Ye.index>ct?(xt=Ye,Ye=null):xt=Ye.sibling;var Ja=oe(Q,Ye,Rt.value,ye);if(Ja===null){Ye===null&&(Ye=xt);break}t&&Ye&&Ja.alternate===null&&n(Q,Ye),V=f(Ja,V,ct),At===null?$e=Ja:At.sibling=Ja,At=Ja,Ye=xt}if(Rt.done)return a(Q,Ye),Mt&&ea(Q,ct),$e;if(Ye===null){for(;!Rt.done;ct++,Rt=te.next())Rt=Se(Q,Rt.value,ye),Rt!==null&&(V=f(Rt,V,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt);return Mt&&ea(Q,ct),$e}for(Ye=o(Ye);!Rt.done;ct++,Rt=te.next())Rt=le(Ye,Q,ct,Rt.value,ye),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?ct:Rt.key),V=f(Rt,V,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt);return t&&Ye.forEach(function(Oy){return n(Q,Oy)}),Mt&&ea(Q,ct),$e}function Vt(Q,V,te,ye){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case b:e:{for(var $e=te.key;V!==null;){if(V.key===$e){if($e=te.type,$e===C){if(V.tag===7){a(Q,V.sibling),ye=c(V,te.props.children),ye.return=Q,Q=ye;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&Mr($e)===V.type){a(Q,V.sibling),ye=c(V,te.props),lo(ye,te),ye.return=Q,Q=ye;break e}a(Q,V);break}else n(Q,V);V=V.sibling}te.type===C?(ye=vr(te.props.children,Q.mode,ye,te.key),ye.return=Q,Q=ye):(ye=dl(te.type,te.key,te.props,null,Q.mode,ye),lo(ye,te),ye.return=Q,Q=ye)}return v(Q);case T:e:{for($e=te.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(Q,V.sibling),ye=c(V,te.children||[]),ye.return=Q,Q=ye;break e}else{a(Q,V);break}else n(Q,V);V=V.sibling}ye=yu(te,Q.mode,ye),ye.return=Q,Q=ye}return v(Q);case E:return te=Mr(te),Vt(Q,V,te,ye)}if(j(te))return We(Q,V,te,ye);if(q(te)){if($e=q(te),typeof $e!="function")throw Error(r(150));return te=$e.call(te),tt(Q,V,te,ye)}if(typeof te.then=="function")return Vt(Q,V,yl(te),ye);if(te.$$typeof===B)return Vt(Q,V,gl(Q,te),ye);Sl(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(Q,V.sibling),ye=c(V,te),ye.return=Q,Q=ye):(a(Q,V),ye=xu(te,Q.mode,ye),ye.return=Q,Q=ye),v(Q)):a(Q,V)}return function(Q,V,te,ye){try{oo=0;var $e=Vt(Q,V,te,ye);return rs=null,$e}catch(Ye){if(Ye===as||Ye===_l)throw Ye;var At=ii(29,Ye,null,Q.mode);return At.lanes=ye,At.return=Q,At}}}var Er=Jp(!0),$p=Jp(!1),Pa=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=hl(t),Ip(t,null,a),n}return fl(t,o,n,a),hl(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}function Ou(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function uo(){if(Pu){var t=is;if(t!==null)throw t}}function fo(t,n,a,o){Pu=!1;var c=t.updateQueue;Pa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var F=R,ne=F.next;F.next=null,v===null?f=ne:v.next=ne,v=F;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==v&&(R===null?me.firstBaseUpdate=ne:R.next=ne,me.lastBaseUpdate=F))}if(f!==null){var Se=c.baseState;v=0,me=ne=F=null,R=f;do{var oe=R.lane&-536870913,le=oe!==R.lane;if(le?(_t&oe)===oe:(o&oe)===oe){oe!==0&&oe===ns&&(Pu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,tt=R;oe=n;var Vt=a;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){Se=We.call(Vt,Se,oe);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,oe=typeof We=="function"?We.call(Vt,Se,oe):We,oe==null)break e;Se=x({},Se,oe);break e;case 2:Pa=!0}}oe=R.callback,oe!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ne=me=le,F=Se):me=me.next=le,v|=oe;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);me===null&&(F=Se),c.baseState=F,c.firstBaseUpdate=ne,c.lastBaseUpdate=me,f===null&&(c.shared.lanes=0),Va|=v,t.lanes=v,t.memoizedState=Se}}function em(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}var ss=L(null),Ml=L(0);function nm(t,n){t=fa,Me(Ml,t),Me(ss,n),fa=t|n.baseLanes}function Iu(){Me(Ml,fa),Me(ss,ss.current)}function zu(){fa=Ml.current,K(ss),K(Ml)}var ai=L(null),_i=null;function Ba(t){var n=t.alternate;Me(un,un.current&1),Me(ai,t),_i===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(_i=t)}function Bu(t){Me(un,un.current),Me(ai,t),_i===null&&(_i=t)}function im(t){t.tag===22?(Me(un,un.current),Me(ai,t),_i===null&&(_i=t)):Fa()}function Fa(){Me(un,un.current),Me(ai,ai.current)}function ri(t){K(ai),_i===t&&(_i=null),K(un)}var un=L(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,lt=null,Ht=null,mn=null,El=!1,os=!1,Tr=!1,Tl=0,ho=0,ls=null,Ex=0;function on(){throw Error(r(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Hu(t,n,a,o,c,f){return ia=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Hm:tf,Tr=!1,f=a(o,c),Tr=!1,os&&(f=rm(n,a,o,c)),am(t),f}function am(t){z.H=go;var n=Ht!==null&&Ht.next!==null;if(ia=0,mn=Ht=lt=null,El=!1,ho=0,ls=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&ml(t)&&(gn=!0))}function rm(t,n,a,o){lt=t;var c=0;do{if(os&&(ls=null),ho=0,os=!1,25<=c)throw Error(r(301));if(c+=1,mn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Gm,f=n(a,o)}while(os);return f}function Tx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(lt.flags|=1024),n}function Gu(){var t=Tl!==0;return Tl=0,t}function Vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ku(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}ia=0,mn=Ht=lt=null,os=!1,ho=Tl=0,ls=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?lt.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Ht===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=mn===null?lt.memoizedState:mn.next;if(n!==null)mn=n,Ht=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},mn===null?lt.memoizedState=mn=t:mn=mn.next=t}return mn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,ls===null&&(ls=[]),t=Kp(ls,t,n),n=lt,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Hm:tf),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===B)return Cn(t)}throw Error(r(438,String(t)))}function Xu(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=fn();return Wu(n,Ht,t)}function Wu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=v=null,F=null,ne=n,me=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(_t&Se)===Se:(ia&Se)===Se){var oe=ne.revertLane;if(oe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===ns&&(me=!0);else if((ia&oe)===oe){ne=ne.next,oe===ns&&(me=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=Se,v=f):F=F.next=Se,lt.lanes|=oe,Va|=oe;Se=ne.action,Tr&&a(f,Se),f=ne.hasEagerState?ne.eagerState:a(f,Se)}else oe={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=oe,v=f):F=F.next=oe,lt.lanes|=Se,Va|=Se;ne=ne.next}while(ne!==null&&ne!==n);if(F===null?v=f:F.next=R,!ni(f,t.memoizedState)&&(gn=!0,me&&(a=is,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function qu(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);ni(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function sm(t,n,a){var o=lt,c=fn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ni((Ht||c).memoizedState,a);if(v&&(c.memoizedState=a,gn=!0),c=c.queue,Ku(cm.bind(null,o,c,t),[t]),c.getSnapshot!==n||v||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},lm.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));f||(ia&127)!==0||om(o,n,a)}return a}function om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Al(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lm(t,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&fm(t)}function cm(t,n,a){return a(function(){um(n)&&fm(t)})}function um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function fm(t){var n=gr(t,2);n!==null&&Zn(n,t,2)}function Yu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Tr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function hm(t,n,a,o){return t.baseState=a,Wu(t,Ht,typeof o=="function"?o:aa)}function Ax(t,n,a,o,c){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var R=a(c,o),F=z.S;F!==null&&F(v,R),pm(t,n,R)}catch(ne){Zu(t,n,ne)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(c,o),pm(t,n,f)}catch(ne){Zu(t,n,ne)}}function pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(t,n,o)},function(o){return Zu(t,n,o)}):mm(t,n,a)}function mm(t,n,a){n.status="fulfilled",n.value=a,gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,dm(t,a)))}function Zu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vm(t,n){return n}function _m(t,n){if(Mt){var a=Xt.formState;if(a!==null){e:{var o=lt;if(Mt){if(qt){t:{for(var c=qt,f=vi;c.nodeType!==8;){if(!f){c=null;break t}if(c=xi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=xi(c.nextSibling),o=c.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=o,a=zm.bind(null,lt,o),o.dispatch=a,o=Yu(!1),f=ef.bind(null,lt,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Ax.bind(null,lt,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function xm(t){var n=fn();return ym(n,Ht,t)}function ym(t,n,a){if(n=Wu(t,n,vm)[0],t=Cl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(v){throw v===as?_l:v}else o=n;n=fn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,cs(9,{destroy:void 0},Rx.bind(null,c,a),null)),[o,f,t]}function Rx(t,n){t.action=n}function Sm(t){var n=fn(),a=Ht;if(a!==null)return ym(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Al(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mm(){return fn().memoizedState}function wl(t,n,a,o){var c=Fn();lt.flags|=t,c.memoizedState=cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(t,n,a,o){var c=fn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ht!==null&&o!==null&&Fu(o,Ht.memoizedState.deps)?c.memoizedState=cs(n,f,a,o):(lt.flags|=t,c.memoizedState=cs(1|n,f,a,o))}function bm(t,n){wl(8390656,8,t,n)}function Ku(t,n){Dl(2048,8,t,n)}function Cx(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Al(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=fn().memoizedState;return Cx({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Dl(4,2,t,n)}function Am(t,n){return Dl(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,Rm.bind(null,n,t),a)}function Qu(){}function wm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=t(),Tr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function ju(t,n,a){return a===void 0||(ia&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ug(),lt.lanes|=t,Va|=t,a)}function Um(t,n,a,o){return ni(a,n)?a:ss.current!==null?(t=ju(t,a,o),ni(t,n)||(gn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(_t&261930)===0?(gn=!0,t.memoizedState=a):(t=Ug(),lt.lanes|=t,Va|=t,n)}function Nm(t,n,a,o,c){var f=H.p;H.p=f!==0&&8>f?f:8;var v=z.T,R={};z.T=R,ef(t,!1,n,a);try{var F=c(),ne=z.S;if(ne!==null&&ne(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var me=bx(F,o);mo(t,n,me,li(t))}else mo(t,n,o,li(t))}catch(Se){mo(t,n,{then:function(){},status:"rejected",reason:Se},li())}finally{H.p=f,v!==null&&R.types!==null&&(v.types=R.types),z.T=v}}function wx(){}function Ju(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Lm(t).queue;Nm(t,c,n,$,a===null?wx:function(){return Om(t),a(o)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},li())}function $u(){return Cn(No)}function Pm(){return fn().memoizedState}function Im(){return fn().memoizedState}function Dx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ia(a);var o=za(n,t,a);o!==null&&(Zn(o,n,a),co(o,n,a)),n={cache:Cu()},t.payload=n;return}n=n.return}}function Ux(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Bm(n,a):(a=vu(t,n,a,o),a!==null&&(Zn(a,t,o),Fm(a,n,o)))}function zm(t,n,a){var o=li();mo(t,n,a,o)}function mo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(c.hasEagerState=!0,c.eagerState=R,ni(R,v))return fl(t,n,c,0),Xt===null&&ul(),!1}catch{}if(a=vu(t,n,c,o),a!==null)return Zn(a,t,o),Fm(a,n,o),!0}return!1}function ef(t,n,a,o){if(o={lane:2,revertLane:Lf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=vu(t,a,o,2),n!==null&&Zn(n,t,2)}function Ul(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Bm(t,n){os=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}var go={readContext:Cn,use:Rl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};go.useEffectEvent=on;var Hm={readContext:Cn,use:Rl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wl(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wl(4194308,4,t,n)},useInsertionEffect:function(t,n){wl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(Tr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(Tr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Ux.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yu(t);var n=t.queue,a=zm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(t,n){var a=Fn();return ju(a,t,n)},useTransition:function(){var t=Yu(!1);return t=Nm.bind(null,lt,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,c=Fn();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(_t&127)!==0||om(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,bm(cm.bind(null,o,f,t),[t]),o.flags|=2048,cs(9,{destroy:void 0},lm.bind(null,o,f,a,n),null),a},useId:function(){var t=Fn(),n=Xt.identifierPrefix;if(Mt){var a=Ii,o=Pi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ex++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$u,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xu,useCacheRefresh:function(){return Fn().memoizedState=Dx.bind(null,lt)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:Cn,use:Rl,useCallback:wm,useContext:Cn,useEffect:Ku,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Cl,useRef:Mm,useState:function(){return Cl(aa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=fn();return Um(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Cl(aa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:sm,useId:Pm,useHostTransitionStatus:$u,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=fn();return hm(a,Ht,t,n)},useMemoCache:Xu,useCacheRefresh:Im};tf.useEffectEvent=Em;var Gm={readContext:Cn,use:Rl,useCallback:wm,useContext:Cn,useEffect:Ku,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:qu,useRef:Mm,useState:function(){return qu(aa)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=fn();return Ht===null?ju(a,t,n):Um(a,Ht.memoizedState,t,n)},useTransition:function(){var t=qu(aa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:sm,useId:Pm,useHostTransitionStatus:$u,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=fn();return Ht!==null?hm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Im};Gm.useEffectEvent=Em;function nf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),c=Ia(o);c.payload=n,a!=null&&(c.callback=a),n=za(t,c,o),n!==null&&(Zn(n,t,o),co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),c=Ia(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=za(t,c,o),n!==null&&(Zn(n,t,o),co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Zn(n,t,a),co(n,t,a))}};function Vm(t,n,a,o,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(c,f):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&af.enqueueReplaceState(n,n.state,null)}function Ar(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Xm(t){cl(t)}function Wm(t){console.error(t)}function qm(t){cl(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function Zm(t){return t=Ia(t),t.tag=3,t}function Km(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Ym(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Nx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?Xl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Df(t,o,c)),!1;case 22:return a.flags|=65536,o===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Df(t,o,c)),!1}throw Error(r(435,a.tag))}return Df(t,o,c),Xl(),!1}if(Mt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==bu&&(t=Error(r(422),{cause:o}),ao(pi(t,a)))):(o!==bu&&(n=Error(r(423),{cause:o}),ao(pi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=pi(o,a),c=rf(t.stateNode,o,c),Ou(t,c),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:o});if(f=pi(f,a),Eo===null?Eo=[f]:Eo.push(f),ln!==4&&(ln=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=rf(a.stateNode,o,t),Ou(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Zm(c),Km(c,t,a,o),Ou(a,c),!1}a=a.return}while(a!==null);return!1}var sf=Error(r(461)),gn=!1;function wn(t,n,a,o){n.child=t===null?$p(n,null,a,o):Er(n,t.child,a,o)}function Qm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return yr(n),o=Hu(t,n,a,v,f,c),R=Gu(),t!==null&&!gn?(Vu(t,n,c),ra(t,n,c)):(Mt&&R&&Su(n),n.flags|=1,wn(t,n,o,c),n.child)}function jm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,o,c)):(t=dl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!pf(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,o)&&t.ref===n.ref)return ra(t,n,c)}return n.flags|=1,t=$i(f,o),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(to(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,pf(t,c))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,ra(t,n,c)}return of(t,n,a,o,c)}function $m(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return eg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Iu(),im(n);else return o=n.lanes=536870912,eg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),nm(n,f),Fa(),n.memoizedState=null):(t!==null&&vl(n,null),Iu(),Fa());return wn(t,n,c,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,o,c){var f=Du();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Iu(),im(n),t!==null&&ts(t,n,o,!0),n.childLanes=c,null}function Ll(t,n){return n=Pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tg(t,n,a){return Er(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Lx(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Ll(n,o),n.lanes=536870912,vo(null,t);if(Bu(n),(t=qt)?(t=d0(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Rn=n,qt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Ll(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Bu(n),c)if(n.flags&256)n.flags&=-257,n=tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||ts(t,n,a,!1),c=(a&t.childLanes)!==0,gn||c){if(o=Xt,o!==null&&(v=$n(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,gr(t,v),Zn(o,t,v),sf;Xl(),n=tg(t,n,a)}else t=f.treeContext,qt=xi(v.nextSibling),Rn=n,Mt=!0,Na=null,vi=!1,t!==null&&Gp(n,t),n=Ll(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function of(t,n,a,o,c){return yr(n),a=Hu(t,n,a,o,void 0,c),o=Gu(),t!==null&&!gn?(Vu(t,n,c),ra(t,n,c)):(Mt&&o&&Su(n),n.flags|=1,wn(t,n,a,c),n.child)}function ng(t,n,a,o,c,f){return yr(n),n.updateQueue=null,a=rm(n,o,a,c),am(t),o=Gu(),t!==null&&!gn?(Vu(t,n,f),ra(t,n,f)):(Mt&&o&&Su(n),n.flags|=1,wn(t,n,a,f),n.child)}function ig(t,n,a,o,c){if(yr(n),n.stateNode===null){var f=jr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):jr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(nf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&af.enqueueReplaceState(f,f.state,null),fo(n,o,f,c),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,F=Ar(a,R);f.props=F;var ne=f.context,me=a.contextType;v=jr,typeof me=="object"&&me!==null&&(v=Cn(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ne!==v)&&km(n,f,o,v),Pa=!1;var oe=n.memoizedState;f.state=oe,fo(n,o,f,c),uo(),ne=n.memoizedState,R||oe!==ne||Pa?(typeof Se=="function"&&(nf(n,a,Se,o),ne=n.memoizedState),(F=Pa||Vm(n,a,F,o,oe,ne,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=v,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lu(t,n),v=n.memoizedProps,me=Ar(a,v),f.props=me,Se=n.pendingProps,oe=f.context,ne=a.contextType,F=jr,typeof ne=="object"&&ne!==null&&(F=Cn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Se||oe!==F)&&km(n,f,o,F),Pa=!1,oe=n.memoizedState,f.state=oe,fo(n,o,f,c),uo();var le=n.memoizedState;v!==Se||oe!==le||Pa||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof R=="function"&&(nf(n,a,R,o),le=n.memoizedState),(me=Pa||Vm(n,a,me,o,oe,le,F)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=F,o=me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Er(n,t.child,null,c),n.child=Er(n,null,a,c)):wn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ra(t,n,c),t}function ag(t,n,a,o){return _r(),n.flags|=256,wn(t,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(t){return{baseLanes:t,cachePool:Yp()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function rg(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(c?Ba(n):Fa(),(t=qt)?(t=d0(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Rn=n,qt=null)):t=null,t===null)throw La(n);return qf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(Fa(),c=n.mode,R=Pl({mode:"hidden",children:R},c),o=vr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,v,a),n.memoizedState=lf,vo(null,o)):(Ba(n),ff(n,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=hf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),R=o.fallback,c=n.mode,o=Pl({mode:"visible",children:o.children},c),R=vr(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Er(n,t.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=uf(t,v,a),n.memoizedState=lf,n=vo(null,o));else if(Ba(n),qf(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ne=v.dgst;v=ne,o=Error(r(419)),o.stack="",o.digest=v,ao({value:o,source:null,stack:null}),n=hf(t,n,a)}else if(gn||ts(t,n,a,!1),v=(a&t.childLanes)!==0,gn||v){if(v=Xt,v!==null&&(o=$n(v,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,gr(t,o),Zn(v,t,o),sf;Wf(R)||Xl(),n=hf(t,n,a)}else Wf(R)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,qt=xi(R.nextSibling),Rn=n,Mt=!0,Na=null,vi=!1,t!==null&&Gp(n,t),n=ff(n,o.children),n.flags|=4096);return n}return c?(Fa(),R=o.fallback,c=n.mode,F=t.child,ne=F.sibling,o=$i(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ne!==null?R=$i(ne,R):(R=vr(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,vo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=cf(a):(c=R.cachePool,c!==null?(F=pn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Yp(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=uf(t,v,a),n.memoizedState=lf,vo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function ff(t,n){return n=Pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pl(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function hf(t,n,a){return Er(n,t.child,null,a),t=ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Au(t.return,n,a)}function df(t,n,a,o,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function og(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=un.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Me(un,v),wn(t,n,o,a),o=Mt?io:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,n);else if(t.tag===19)sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),df(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&bl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}df(n,!0,a,null,f,o);break;case"together":df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Ox(t,n,a){switch(n.tag){case 3:xe(n,n.stateNode.containerInfo),Oa(n,pn,t.memoizedState.cache),_r();break;case 27:case 5:et(n);break;case 4:xe(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(t,n,a):(Ba(n),t=ra(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return og(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(un,un.current),o)break;return null;case 22:return n.lanes=0,$m(t,n,a,n.pendingProps);case 24:Oa(n,pn,t.memoizedState.cache)}return ra(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!pf(t,a)&&(n.flags&128)===0)return gn=!1,Ox(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Mt&&(n.flags&1048576)!==0&&Hp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Mr(n.elementType),n.type=t,typeof t=="function")_u(t)?(o=Ar(t,o),n.tag=1,n=ig(null,n,t,o,a)):(n.tag=0,n=of(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===w){n.tag=11,n=Qm(null,n,t,o,a);break e}else if(c===P){n.tag=14,n=jm(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Ar(o,n.pendingProps),ig(t,n,o,c,a);case 3:e:{if(xe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Lu(t,n),fo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Oa(n,pn,o),o!==f.cache&&Ru(n,[pn],a,!0),uo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==c){c=pi(Error(r(424)),n),ao(c),n=ag(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=xi(t.firstChild),Rn=n,Mt=!0,Na=null,vi=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_r(),o===c){n=ra(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=jl(W.current).createElement(a),o[hn]=n,o[An]=t,Dn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=x0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&Mt&&(o=n.stateNode=g0(n.type,n.pendingProps,W.current),Rn=n,vi=!0,c=qt,Ya(n.type)?(Yf=c,qt=xi(o.firstChild)):qt=c),wn(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((c=o=qt)&&(o=uy(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Rn=n,qt=xi(o.firstChild),vi=!1,c=!0):c=!1),c||La(n)),et(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,Vf(c,f)?o=null:v!==null&&Vf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Hu(t,n,Tx,null,null,a),No._currentValue=c),Ol(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=qt)&&(a=fy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Rn=n,qt=null,t=!0):t=!1),t||La(n)),null;case 13:return rg(t,n,a);case 4:return xe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Er(n,null,o,a):wn(t,n,o,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,yr(n),c=Cn(c),o=o(c),n.flags|=1,wn(t,n,o,a),n.child;case 14:return jm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return Lx(t,n,a);case 22:return $m(t,n,a,n.pendingProps);case 24:return yr(n),o=Cn(pn),t===null?(c=Du(),c===null&&(c=Xt,f=Cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Nu(n),Oa(n,pn,c)):((t.lanes&a)!==0&&(Lu(t,n),fo(n,null,null,a),uo()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Oa(n,pn,o)):(o=f.cache,Oa(n,pn,o),o!==c.cache&&Ru(n,[pn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function mf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Pg())t.flags|=8192;else throw br=xl,Uu}else t.flags&=-16777217}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(n))if(Pg())t.flags|=8192;else throw br=xl,Uu}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,ds|=n)}function _o(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Px(t,n,a){var o=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(pn),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(es(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Yt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Yt(n),cg(n,f)):(Yt(n),mf(n,c,null,o,a))):f?f!==t.memoizedState?(sa(n),Yt(n),cg(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Yt(n),mf(n,c,t,o,a)),null;case 27:if(Ze(n),a=W.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Te.current,es(n)?Vp(n):(t=g0(c,o,a),n.stateNode=t,sa(n))}return Yt(n),null;case 5:if(Ze(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(f=Te.current,es(n))Vp(n);else{var v=jl(W.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[hn]=n,f[An]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Dn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Yt(n),mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=W.current,es(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||r0(t.nodeValue,a)),t||La(n,!0)}else t=jl(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[hn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[hn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Yt(n),null);case 4:return De(),t===null&&zf(n.stateNode.containerInfo),Yt(n),null;case 10:return na(n.type),Yt(n),null;case 19:if(K(un),o=n.memoizedState,o===null)return Yt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)_o(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bl(t),f!==null){for(n.flags|=128,_o(o,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return Me(un,un.current&1|2),Mt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>Gl&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304)}else{if(!c)if(t=bl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Yt(n),null}else 2*Ft()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,c=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=un.current,Me(un,c?a&1|2:a&1),Mt&&ea(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return ri(n),zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(pn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ix(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(pn),De(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(un),null;case 4:return De(),null;case 10:return na(n.type),null;case 22:case 23:return ri(n),zu(),t!==null&&K(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(pn),null;case 25:return null;default:return null}}function ug(t,n){switch(Mu(n),n.tag){case 3:na(pn),De();break;case 26:case 27:case 5:Ze(n);break;case 4:De();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:K(un);break;case 10:na(n.type);break;case 22:case 23:ri(n),zu(),t!==null&&K(Sr);break;case 24:na(pn)}}function xo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(R){zt(n,n.return,R)}}function Ha(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,c=n;var F=a,ne=R;try{ne()}catch(me){zt(c,F,me)}}}o=o.next}while(o!==f)}}catch(me){zt(n,n.return,me)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(o){zt(t,t.return,o)}}}function hg(t,n,a){a.props=Ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){zt(t,n,c)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){zt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(t,n,c)}else a.current=null}function dg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){zt(t,t.return,c)}}function gf(t,n,a){try{var o=t.stateNode;ay(o,t.type,a,n),o[An]=n}catch(c){zt(t,t.return,c)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,o,a),n[hn]=t,n[An]=a}catch(f){zt(t,t.return,f)}}var oa=!1,vn=!1,xf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function zx(t,n){if(t=t.containerInfo,Hf=ac,t=Cp(t),fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,F=-1,ne=0,me=0,Se=t,oe=null;t:for(;;){for(var le;Se!==a||c!==0&&Se.nodeType!==3||(R=v+c),Se!==f||o!==0&&Se.nodeType!==3||(F=v+o),Se.nodeType===3&&(v+=Se.nodeValue.length),(le=Se.firstChild)!==null;)oe=Se,Se=le;for(;;){if(Se===t)break t;if(oe===a&&++ne===c&&(R=v),oe===f&&++me===o&&(F=v),(le=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=le}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:t,selectionRange:a},ac=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Ar(a.type,c);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function vg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&xo(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){zt(a,a.return,v)}else{var c=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){zt(a,a.return,v)}}o&64&&fg(a),o&512&&yo(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(v){zt(a,a.return,v)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:ca(t,a),n===null&&o&4&&dg(a),o&512&&yo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&yg(t,a);break;case 13:ca(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qx.bind(null,a),hy(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||vn,c=oa;var f=vn;oa=o,(vn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=c,vn=f}break;case 30:break;default:ca(t,a)}}function _g(t){var n=t.alternate;n!==null&&(t.alternate=null,_g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Xn=!1;function la(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:vn||zi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||zi(a,n);var o=jt,c=Xn;Ya(a.type)&&(jt=a.stateNode,Xn=!1),la(t,n,a),wo(a.stateNode),jt=o,Xn=c;break;case 5:vn||zi(a,n);case 6:if(o=jt,c=Xn,jt=null,la(t,n,a),jt=o,Xn=c,jt!==null)if(Xn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:jt!==null&&(Xn?(t=jt,f0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ss(t)):f0(jt,a.stateNode));break;case 4:o=jt,c=Xn,jt=a.stateNode.containerInfo,Xn=!0,la(t,n,a),jt=o,Xn=c;break;case 0:case 11:case 14:case 15:Ha(2,a,n),vn||Ha(4,a,n),la(t,n,a);break;case 1:vn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hg(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,la(t,n,a),vn=o;break;default:la(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ss(t)}catch(a){zt(n,n.return,a)}}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ss(t)}catch(a){zt(n,n.return,a)}}function Bx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(r(435,t.tag))}}function Bl(t,n){var a=Bx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Yx.bind(null,t,o);o.then(c,c)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){jt=R.stateNode,Xn=!1;break e}break;case 5:jt=R.stateNode,Xn=!1;break e;case 3:case 4:jt=R.stateNode.containerInfo,Xn=!0;break e}R=R.return}if(jt===null)throw Error(r(160));xg(f,v,c),jt=null,Xn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var Ai=null;function Mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Ha(3,t,t.return),xo(3,t),Ha(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ai;if(Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Aa]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Dn(f,o,a),f[hn]=t,dn(f),o=f;break e;case"link":var v=M0("link","href",c).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=M0("meta","content",c).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[hn]=t,dn(f),o=f}t.stateNode=o}else b0(c,t.type,t.stateNode);else t.stateNode=S0(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?b0(c,t.type,t.stateNode):S0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),a!==null&&o&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(vn||a===null||zi(a,a.return)),t.flags&32){c=t.stateNode;try{ti(c,"")}catch(We){zt(t,t.return,We)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,gf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(xf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){zt(t,t.return,We)}}break;case 3:if(ec=null,c=Ai,Ai=Jl(n.containerInfo),Wn(n,t),Ai=c,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(We){zt(t,t.return,We)}xf&&(xf=!1,bg(t));break;case 4:o=Ai,Ai=Jl(t.stateNode.containerInfo),Wn(n,t),qn(t),Ai=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ne=oa,me=vn;if(oa=ne||c,vn=me||F,Wn(n,t),vn=me,oa=ne,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||oa||vn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=F.stateNode;var Se=F.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(We){zt(F,F.return,We)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(We){zt(F,F.return,We)}}}else if(n.tag===18){if(a===null){F=n;try{var le=F.stateNode;c?h0(le,!0):h0(F.stateNode,!1)}catch(We){zt(F,F.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=vf(t);zl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(ti(v,""),a.flags&=-33);var R=vf(t);zl(t,R,v);break;case 3:case 4:var F=a.stateNode.containerInfo,ne=vf(t);_f(t,ne,F);break;default:throw Error(r(161))}}catch(me){zt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vg(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Rr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),Rr(n);break;case 27:wo(n.stateNode);case 26:case 5:zi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ua(c,f,a),xo(4,f);break;case 1:if(ua(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){zt(o,o.return,ne)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)em(F[c],R)}catch(ne){zt(o,o.return,ne)}}a&&v&64&&fg(f),yo(f,f.return);break;case 27:mg(f);case 26:case 5:ua(c,f,a),a&&o===null&&v&4&&dg(f),yo(f,f.return);break;case 12:ua(c,f,a);break;case 31:ua(c,f,a),a&&v&4&&yg(c,f);break;case 13:ua(c,f,a),a&&v&4&&Sg(c,f);break;case 22:f.memoizedState===null&&ua(c,f,a),yo(f,f.return);break;case 30:break;default:ua(c,f,a)}n=n.sibling}}function yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function Sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,o),n=n.sibling}function Eg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),c&2048&&xo(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(c&2048){Ri(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){zt(n,n.return,F)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,o):So(t,n):f._visibility&2?Ri(t,n,a,o):(f._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&yf(v,n);break;case 24:Ri(t,n,a,o),c&2048&&Sf(n.alternate,n);break;default:Ri(t,n,a,o)}}function us(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,F=o,ne=v.flags;switch(v.tag){case 0:case 11:case 15:us(f,v,R,F,c),xo(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?us(f,v,R,F,c):So(f,v):(me._visibility|=2,us(f,v,R,F,c)),c&&ne&2048&&yf(v.alternate,v);break;case 24:us(f,v,R,F,c),c&&ne&2048&&Sf(v.alternate,v);break;default:us(f,v,R,F,c)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:So(a,o),c&2048&&yf(o.alternate,o);break;case 24:So(a,o),c&2048&&Sf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var Mo=8192;function fs(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)Tg(t,n,a),t=t.sibling}function Tg(t,n,a){switch(t.tag){case 26:fs(t,n,a),t.flags&Mo&&t.memoizedState!==null&&Ey(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,a);break;case 3:case 4:var o=Ai;Ai=Jl(t.stateNode.containerInfo),fs(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,fs(t,n,a),Mo=o):fs(t,n,a));break;default:fs(t,n,a)}}function Ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Cg(o,t)}Ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):bo(t);break;default:bo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Cg(o,t)}Ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function Cg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var c=o.sibling,f=o.return;if(_g(o),o===a){bn=null;break e}if(c!==null){c.return=f,bn=c;break e}bn=f}}}var Fx={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},Hx=typeof WeakMap=="function"?WeakMap:Map,wt=0,Xt=null,gt=null,_t=0,It=0,si=null,Ga=!1,hs=!1,Mf=!1,fa=0,ln=0,Va=0,Cr=0,bf=0,oi=0,ds=0,Eo=null,Yn=null,Ef=!1,Hl=0,wg=0,Gl=1/0,Vl=null,ka=null,yn=0,Xa=null,ps=null,ha=0,Tf=0,Af=null,Dg=null,To=0,Rf=null;function li(){return(wt&2)!==0&&_t!==0?_t&-_t:z.T!==null?Lf():Ys()}function Ug(){if(oi===0)if((_t&536870912)===0||Mt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Zn(t,n,a){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ms(t,0),Wa(t,_t,oi,!1)),Ve(t,a),((wt&2)===0||t!==Xt)&&(t===Xt&&((wt&2)===0&&(Cr|=a),ln===4&&Wa(t,_t,oi,!1)),Bi(t))}function Ng(t,n,a){if((wt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),c=o?kx(t,n):wf(t,n,!0),f=o;do{if(c===0){hs&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Gx(a)){c=wf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=t;c=Eo;var F=R.current.memoizedState.isDehydrated;if(F&&(ms(R,v).flags|=256),v=wf(R,v,!1),v!==2){if(Mf&&!F){R.errorRecoveryDisabledLanes|=f,Cr|=f,c=4;break e}f=Yn,Yn=c,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){ms(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,oi,!Ga);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Hl+300-Ft(),10<c)){if(Wa(o,n,oi,!Ga),_e(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=c0(Lg.bind(null,o,a,Yn,Vl,Ef,n,oi,Cr,ds,Ga,f,"Throttled",-0,0),c);break e}Lg(o,a,Yn,Vl,Ef,n,oi,Cr,ds,Ga,f,null,-0,0)}}break}while(!0);Bi(t)}function Lg(t,n,a,o,c,f,v,R,F,ne,me,Se,oe,le){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Tg(n,f,Se);var We=(f&62914560)===f?Hl-Ft():(f&4194048)===f?wg-Ft():0;if(We=Ty(Se,We),We!==null){ha=f,t.cancelPendingCommit=We(Gg.bind(null,t,n,f,a,o,c,v,R,F,me,Se,null,oe,le)),Wa(t,f,v,!ne);return}}Gg(t,n,f,a,o,c,v,R,F)}function Gx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ni(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~bf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Fe(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&Nt(t,a,n)}function kl(){return(wt&6)===0?(Ao(0),!1):!0}function Cf(){if(gt!==null){if(It===0)var t=gt.return;else t=gt,ta=xr=null,ku(t),rs=null,oo=0,t=gt;for(;t!==null;)ug(t.alternate,t),t=t.return;gt=null}}function ms(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,oy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,Cf(),Xt=t,gt=a=$i(t.current,null),_t=n,It=0,si=null,Ga=!1,hs=we(t,n),Mf=!1,ds=oi=bf=Cr=Va=ln=0,Yn=Eo=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Fe(o),f=1<<c;n|=t[c],o&=~f}return fa=n,ul(),a}function Og(t,n){lt=null,z.H=go,n===as||n===_l?(n=Qp(),It=3):n===Uu?(n=Qp(),It=4):It=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,gt===null&&(ln=1,Nl(t,pi(n,t.current)))}function Pg(){var t=ai.current;return t===null?!0:(_t&4194048)===_t?_i===null:(_t&62914560)===_t||(_t&536870912)!==0?t===_i:!1}function Ig(){var t=z.H;return z.H=go,t===null?go:t}function zg(){var t=z.A;return z.A=Fx,t}function Xl(){ln=4,Ga||(_t&4194048)!==_t&&ai.current!==null||(hs=!0),(Va&134217727)===0&&(Cr&134217727)===0||Xt===null||Wa(Xt,_t,oi,!1)}function wf(t,n,a){var o=wt;wt|=2;var c=Ig(),f=zg();(Xt!==t||_t!==n)&&(Vl=null,ms(t,n)),n=!1;var v=ln;e:do try{if(It!==0&&gt!==null){var R=gt,F=si;switch(It){case 8:Cf(),v=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ne=It;if(It=0,si=null,gs(t,R,F,ne),a&&hs){v=0;break e}break;default:ne=It,It=0,si=null,gs(t,R,F,ne)}}Vx(),v=ln;break}catch(me){Og(t,me)}while(!0);return n&&t.shellSuspendCounter++,ta=xr=null,wt=o,z.H=c,z.A=f,gt===null&&(Xt=null,_t=0,ul()),v}function Vx(){for(;gt!==null;)Bg(gt)}function kx(t,n){var a=wt;wt|=2;var o=Ig(),c=zg();Xt!==t||_t!==n?(Vl=null,Gl=Ft()+500,ms(t,n)):hs=we(t,n);e:do try{if(It!==0&&gt!==null){n=gt;var f=si;t:switch(It){case 1:It=0,si=null,gs(t,n,f,1);break;case 2:case 9:if(Zp(f)){It=0,si=null,Fg(n);break}n=function(){It!==2&&It!==9||Xt!==t||(It=7),Bi(t)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Zp(f)?(It=0,si=null,Fg(n)):(It=0,si=null,gs(t,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var R=gt;if(v?E0(v):R.stateNode.complete){It=0,si=null;var F=R.sibling;if(F!==null)gt=F;else{var ne=R.return;ne!==null?(gt=ne,Wl(ne)):gt=null}break t}}It=0,si=null,gs(t,n,f,5);break;case 6:It=0,si=null,gs(t,n,f,6);break;case 8:Cf(),ln=6;break e;default:throw Error(r(462))}}Xx();break}catch(me){Og(t,me)}while(!0);return ta=xr=null,z.H=o,z.A=c,wt=a,gt!==null?0:(Xt=null,_t=0,ul(),ln)}function Xx(){for(;gt!==null&&!sn();)Bg(gt)}function Bg(t){var n=lg(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?Wl(t):gt=n}function Fg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:ku(n);default:ug(a,n),n=gt=zp(n,fa),n=lg(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?Wl(t):gt=n}function gs(t,n,a,o){ta=xr=null,ku(n),rs=null,oo=0;var c=n.return;try{if(Nx(t,c,n,a,_t)){ln=1,Nl(t,pi(a,t.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;ln=1,Nl(t,pi(a,t.current)),gt=null;return}n.flags&32768?(Mt||o===1?t=!0:hs||(_t&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){Hg(n,Ga);return}t=n.return;var a=Px(n.alternate,n,fa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);ln===0&&(ln=5)}function Hg(t,n){do{var a=Ix(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);ln=6,gt=null}function Gg(t,n,a,o,c,f,v,R,F){t.cancelPendingCommit=null;do ql();while(yn!==0);if((wt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=gu,Zt(t,a,f,v,R,F),t===Xt&&(gt=Xt=null,_t=0),ps=n,Xa=t,ha=a,Tf=f,Af=c,Dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zx(J,function(){return qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=H.p,H.p=2,v=wt,wt|=4;try{zx(t,n,a)}finally{wt=v,H.p=c,z.T=o}}yn=1,Vg(),kg(),Xg()}}function Vg(){if(yn===1){yn=0;var t=Xa,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var c=wt;wt|=4;try{Mg(n,t);var f=Gf,v=Cp(t.containerInfo),R=f.focusedElem,F=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Rp(R.ownerDocument.documentElement,R)){if(F!==null&&fu(R)){var ne=F.start,me=F.end;if(me===void 0&&(me=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(me,R.value.length);else{var Se=R.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),We=R.textContent.length,tt=Math.min(F.start,We),Vt=F.end===void 0?tt:Math.min(F.end,We);!le.extend&&tt>Vt&&(v=Vt,Vt=tt,tt=v);var Q=Ap(R,tt),V=Ap(R,Vt);if(Q&&V&&(le.rangeCount!==1||le.anchorNode!==Q.node||le.anchorOffset!==Q.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var te=Se.createRange();te.setStart(Q.node,Q.offset),le.removeAllRanges(),tt>Vt?(le.addRange(te),le.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),le.addRange(te))}}}}for(Se=[],le=R;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ye=Se[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}ac=!!Hf,Gf=Hf=null}finally{wt=c,H.p=o,z.T=a}}t.current=n,yn=2}}function kg(){if(yn===2){yn=0;var t=Xa,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var c=wt;wt|=4;try{vg(t,n.alternate,n)}finally{wt=c,H.p=o,z.T=a}}yn=3}}function Xg(){if(yn===4||yn===3){yn=0,Z();var t=Xa,n=ps,a=ha,o=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,ps=Xa=null,Wg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ka=null),qs(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=H.p,H.p=2,z.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{z.T=n,H.p=c}}(ha&3)!==0&&ql(),Bi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Rf?To++:(To=0,Rf=t):To=0,Ao(0)}}function Wg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function ql(){return Vg(),kg(),Xg(),qg()}function qg(){if(yn!==5)return!1;var t=Xa,n=Tf;Tf=0;var a=qs(ha),o=z.T,c=H.p;try{H.p=32>a?32:a,z.T=null,a=Af,Af=null;var f=Xa,v=ha;if(yn=0,ps=Xa=null,ha=0,(wt&6)!==0)throw Error(r(331));var R=wt;if(wt|=4,Rg(f.current),Eg(f,f.current,v,a),wt=R,Ao(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{H.p=c,z.T=o,Wg(t,n)}}function Yg(t,n,a){n=pi(a,n),n=rf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Ve(t,2),Bi(t))}function zt(t,n,a){if(t.tag===3)Yg(t,t,a);else for(;n!==null;){if(n.tag===3){Yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=pi(a,t),a=Zm(2),o=za(n,a,2),o!==null&&(Km(a,o,n,t),Ve(o,2),Bi(o));break}}n=n.return}}function Df(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Hx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Mf=!0,c.add(a),t=Wx.bind(null,t,n,a),n.then(t,t))}function Wx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(_t&a)===a&&(ln===4||ln===3&&(_t&62914560)===_t&&300>Ft()-Hl?(wt&2)===0&&ms(t,0):bf|=a,ds===_t&&(ds=0)),Bi(t)}function Zg(t,n){n===0&&(n=be()),t=gr(t,n),t!==null&&(Ve(t,n),Bi(t))}function qx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zg(t,a)}function Yx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Zg(t,a)}function Zx(t,n){return cn(t,n)}var Yl=null,vs=null,Uf=!1,Zl=!1,Nf=!1,qa=0;function Bi(t){t!==vs&&t.next===null&&(vs===null?Yl=vs=t:vs=vs.next=t),Zl=!0,Uf||(Uf=!0,Qx())}function Ao(t,n){if(!Nf&&Zl){Nf=!0;do for(var a=!1,o=Yl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=c&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jg(o,f))}else f=_t,f=_e(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,Jg(o,f));o=o.next}while(a);Nf=!1}}function Kx(){Kg()}function Kg(){Zl=Uf=!1;var t=0;qa!==0&&sy()&&(t=qa);for(var n=Ft(),a=null,o=Yl;o!==null;){var c=o.next,f=Qg(o,n);f===0?(o.next=null,a===null?Yl=c:a.next=c,c===null&&(vs=a)):(a=o,(t!==0||(f&3)!==0)&&(Zl=!0)),o=c}yn!==0&&yn!==5||Ao(t),qa!==0&&(qa=0)}function Qg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Fe(f),R=1<<v,F=c[v];F===-1?((R&a)===0||(R&o)!==0)&&(c[v]=Be(R,n)):F<=n&&(t.expiredLanes|=R),f&=~R}if(n=Xt,a=_t,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),qs(a)){case 2:case 8:a=M;break;case 32:a=J;break;case 268435456:a=fe;break;default:a=J}return o=jg.bind(null,t),a=cn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var o=_t;return o=_e(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),Qg(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Jg(t,n){if(ql())return null;Ng(t,n,!0)}function Qx(){ly(function(){(wt&6)!==0?cn(D,Kx):Kg()})}function Lf(){if(qa===0){var t=ns;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),qa=t}return qa}function $g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hr(""+t)}function e0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function jx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=$g((c[An]||null).action),v=o.submitter;v&&(n=(n=v[An]||null)?$g(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new sl("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var F=v?e0(c,v):new FormData(c);Ju(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=v?e0(c,v):new FormData(c),Ju(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Of=0;Of<mu.length;Of++){var Pf=mu[Of],Jx=Pf.toLowerCase(),$x=Pf[0].toUpperCase()+Pf.slice(1);Ti(Jx,"on"+$x)}Ti(Up,"onAnimationEnd"),Ti(Np,"onAnimationIteration"),Ti(Lp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(mx,"onTransitionRun"),Ti(gx,"onTransitionStart"),Ti(vx,"onTransitionCancel"),Ti(Op,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function t0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],F=R.instance,ne=R.currentTarget;if(R=R.listener,F!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ne;try{f(c)}catch(me){cl(me)}c.currentTarget=null,f=F}else for(v=0;v<o.length;v++){if(R=o[v],F=R.instance,ne=R.currentTarget,R=R.listener,F!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ne;try{f(c)}catch(me){cl(me)}c.currentTarget=null,f=F}}}}function vt(t,n){var a=n[cr];a===void 0&&(a=n[cr]=new Set);var o=t+"__bubble";a.has(o)||(n0(n,t,2,!1),a.add(o))}function If(t,n,a){var o=0;n&&(o|=4),n0(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[Kl]){t[Kl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(ey.has(a)||If(a,!1,t),If(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,If("selectionchange",!1,n))}}function n0(t,n,a,o){switch(U0(n)){case 2:var c=Cy;break;case 8:c=wy;break;default:c=Jf}a=c.bind(null,n,a,t),c=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Bf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===c)break;if(v===4)for(v=o.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;R!==null;){if(v=Ki(R),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){o=f=v;continue e}R=R.parentNode}}o=o.return}op(function(){var ne=f,me=eu(a),Se=[];e:{var oe=Pp.get(t);if(oe!==void 0){var le=sl,We=t;switch(t){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":le=Y_;break;case"focusin":We="focus",le=su;break;case"focusout":We="blur",le=su;break;case"beforeblur":case"afterblur":le=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Q_;break;case Up:case Np:case Lp:le=B_;break;case Op:le=J_;break;case"scroll":case"scrollend":le=L_;break;case"wheel":le=ex;break;case"copy":case"cut":case"paste":le=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=hp;break;case"toggle":case"beforetoggle":le=nx}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),Q=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var V=ne,te;V!==null;){var ye=V;if(te=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||te===null||Q===null||(ye=Zs(V,Q),ye!=null&&tt.push(Co(V,ye,te))),Vt)break;V=V.return}0<tt.length&&(oe=new le(oe,We,null,a,me),Se.push({event:oe,listeners:tt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",oe&&a!==$c&&(We=a.relatedTarget||a.fromElement)&&(Ki(We)||We[Vn]))break e;if((le||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(We=a.relatedTarget||a.toElement,le=ne,We=We?Ki(We):null,We!==null&&(Vt=u(We),tt=We.tag,We!==Vt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(le=null,We=ne),le!==We)){if(tt=up,ye="onMouseLeave",Q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=hp,ye="onPointerLeave",Q="onPointerEnter",V="pointer"),Vt=le==null?oe:fr(le),te=We==null?oe:fr(We),oe=new tt(ye,V+"leave",le,a,me),oe.target=Vt,oe.relatedTarget=te,ye=null,Ki(me)===ne&&(tt=new tt(Q,V+"enter",We,a,me),tt.target=te,tt.relatedTarget=Vt,ye=tt),Vt=ye,le&&We)t:{for(tt=ty,Q=le,V=We,te=0,ye=Q;ye;ye=tt(ye))te++;ye=0;for(var $e=V;$e;$e=tt($e))ye++;for(;0<te-ye;)Q=tt(Q),te--;for(;0<ye-te;)V=tt(V),ye--;for(;te--;){if(Q===V||V!==null&&Q===V.alternate){tt=Q;break t}Q=tt(Q),V=tt(V)}tt=null}else tt=null;le!==null&&i0(Se,oe,le,tt,!1),We!==null&&Vt!==null&&i0(Se,Vt,We,tt,!0)}}e:{if(oe=ne?fr(ne):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var At=yp;else if(_p(oe))if(Sp)At=hx;else{At=ux;var Ye=cx}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Ut(ne.elementType)&&(At=yp):At=fx;if(At&&(At=At(t,ne))){xp(Se,At,a,me);break e}Ye&&Ye(t,oe,ne),t==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&mt(oe,"number",oe.value)}switch(Ye=ne?fr(ne):window,t){case"focusin":(_p(Ye)||Ye.contentEditable==="true")&&(Zr=Ye,hu=ne,no=null);break;case"focusout":no=hu=Zr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,wp(Se,a,me);break;case"selectionchange":if(px)break;case"keydown":case"keyup":wp(Se,a,me)}var ct;if(lu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Yr?gp(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(dp&&a.locale!=="ko"&&(Yr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Yr&&(ct=lp()):(Da=me,iu="value"in Da?Da.value:Da.textContent,Yr=!0)),Ye=Ql(ne,xt),0<Ye.length&&(xt=new fp(xt,t,null,a,me),Se.push({event:xt,listeners:Ye}),ct?xt.data=ct:(ct=vp(a),ct!==null&&(xt.data=ct)))),(ct=ax?rx(t,a):sx(t,a))&&(xt=Ql(ne,"onBeforeInput"),0<xt.length&&(Ye=new fp("onBeforeInput","beforeinput",null,a,me),Se.push({event:Ye,listeners:xt}),Ye.data=ct)),jx(Se,t,ne,a,me)}t0(Se,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Zs(t,a),c!=null&&o.unshift(Co(t,c,f)),c=Zs(t,n),c!=null&&o.push(Co(t,c,f))),t.tag===3)return o;t=t.return}return[]}function ty(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i0(t,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,F=R.alternate,ne=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||ne===null||(F=ne,c?(ne=Zs(a,f),ne!=null&&v.unshift(Co(a,ne,F))):c||(ne=Zs(a,f),ne!=null&&v.push(Co(a,ne,F)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(iy,"")}function r0(t,n){return n=a0(n),a0(t)===n}function Gt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",c.name,c,null),Gt(t,n,"formEncType",c.formEncType,c,null),Gt(t,n,"formMethod",c.formMethod,c,null),Gt(t,n,"formTarget",c.formTarget,c,null)):(Gt(t,n,"encType",c.encType,c,null),Gt(t,n,"method",c.method,c,null),Gt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=hr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Le(t,a,o))}}function Ff(t,n,a,o,c,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ti(t,o):(typeof o=="number"||typeof o=="bigint")&&ti(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,v,a,null)}}c&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=f=v=c=null,F=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":c=me;break;case"type":v=me;break;case"checked":F=me;break;case"defaultChecked":ne=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Gt(t,n,o,me,a,null)}}Ln(t,f,R,F,ne,v,c,!1);return;case"select":vt("invalid",t),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Gt(t,n,c,R,a,null)}n=f,a=v,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(t,n,v,R,a,null)}bi(t,o,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(t,n,F,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Ro.length;o++)vt(Ro[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,ne,o,a,null)}return;default:if(Ut(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Ff(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Gt(t,n,R,o,a,null))}function ay(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,R=null,F=null,ne=null,me=null;for(le in a){var Se=a[le];if(a.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(le)||Gt(t,n,le,null,o,Se)}}for(var oe in o){var le=o[oe];if(Se=a[oe],o.hasOwnProperty(oe)&&(le!=null||Se!=null))switch(oe){case"type":f=le;break;case"name":c=le;break;case"checked":ne=le;break;case"defaultChecked":me=le;break;case"value":v=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==Se&&Gt(t,n,oe,le,o,Se)}}He(t,v,R,F,ne,me,f,c);return;case"select":le=v=R=oe=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":le=F;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==F&&Gt(t,n,c,f,o,F)}n=R,a=v,o=le,oe!=null?xn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":le=oe=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(t,n,R,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":oe=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(t,n,v,c,o,f)}ei(t,oe,le);return;case"option":for(var We in a)oe=a[We],a.hasOwnProperty(We)&&oe!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Gt(t,n,We,null,o,oe));for(F in o)oe=o[F],le=a[F],o.hasOwnProperty(F)&&oe!==le&&(oe!=null||le!=null)&&(F==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Gt(t,n,F,oe,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)oe=a[tt],a.hasOwnProperty(tt)&&oe!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,oe);for(ne in o)if(oe=o[ne],le=a[ne],o.hasOwnProperty(ne)&&oe!==le&&(oe!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Gt(t,n,ne,oe,o,le)}return;default:if(Ut(n)){for(var Vt in a)oe=a[Vt],a.hasOwnProperty(Vt)&&oe!==void 0&&!o.hasOwnProperty(Vt)&&Ff(t,n,Vt,void 0,o,oe);for(me in o)oe=o[me],le=a[me],!o.hasOwnProperty(me)||oe===le||oe===void 0&&le===void 0||Ff(t,n,me,oe,o,le);return}}for(var Q in a)oe=a[Q],a.hasOwnProperty(Q)&&oe!=null&&!o.hasOwnProperty(Q)&&Gt(t,n,Q,null,o,oe);for(Se in o)oe=o[Se],le=a[Se],!o.hasOwnProperty(Se)||oe===le||oe==null&&le==null||Gt(t,n,Se,oe,o,le)}function s0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,R=c.duration;if(f&&R&&s0(v)){for(v=0,R=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],ne=F.startTime;if(ne>R)break;var me=F.transferSize,Se=F.initiatorType;me&&s0(Se)&&(F=F.responseEnd,v+=me*(F<R?1:(R-ne)/(F-ne)))}if(--o,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Gf=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function o0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function sy(){var t=window.event;return t&&t.type==="popstate"?t===kf?!1:(kf=t,!0):(kf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(cy)}:c0;function cy(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function f0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),Ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Aa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&wo(t.ownerDocument.body);a=c}while(a);Ss(n)}function h0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function uy(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function fy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function d0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function Wf(t){return t.data==="$?"||t.data==="$~"}function qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yf=null;function p0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function m0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function g0(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ra(t)}var yi=new Map,v0=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=H.d;H.d={f:dy,r:py,D:my,C:gy,L:vy,m:_y,X:yy,S:xy,M:Sy};function dy(){var t=da.f(),n=kl();return t||n}function py(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):da.r(t)}var _s=typeof document>"u"?null:document;function _0(t,n,a){var o=_s;if(o&&typeof n=="string"&&n){var c=Ot(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),v0.has(c)||(v0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Dn(n,"link",t),dn(n),o.head.appendChild(n)))}}function my(t){da.D(t),_0("dns-prefetch",t,null)}function gy(t,n){da.C(t,n),_0("preconnect",t,n)}function vy(t,n,a){da.L(t,n,a);var o=_s;if(o&&t&&n){var c='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ot(a.imageSizes)+'"]')):c+='[href="'+Ot(t)+'"]';var f=c;switch(n){case"style":f=xs(t);break;case"script":f=ys(t)}yi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),Dn(n,"link",t),dn(n),o.head.appendChild(n)))}}function _y(t,n){da.m(t,n);var a=_s;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ys(t)}if(!yi.has(f)&&(t=x({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),Dn(o,"link",t),dn(o),a.head.appendChild(o)}}}function xy(t,n,a){da.S(t,n,a);var o=_s;if(o&&t){var c=Ca(o).hoistableStyles,f=xs(t);n=n||"default";var v=c.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Do(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&Zf(t,a);var F=v=o.createElement("link");dn(F),Dn(F,"link",t),F._p=new Promise(function(ne,me){F.onload=ne,F.onerror=me}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},c.set(f,v)}}}function yy(t,n){da.X(t,n);var a=_s;if(a&&t){var o=Ca(a).hoistableScripts,c=ys(t),f=o.get(c);f||(f=a.querySelector(Uo(c)),f||(t=x({src:t,async:!0},n),(n=yi.get(c))&&Kf(t,n),f=a.createElement("script"),dn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Sy(t,n){da.M(t,n);var a=_s;if(a&&t){var o=Ca(a).hoistableScripts,c=ys(t),f=o.get(c);f||(f=a.querySelector(Uo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=yi.get(c))&&Kf(t,n),f=a.createElement("script"),dn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function x0(t,n,a,o){var c=(c=W.current)?Jl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=Ca(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var f=Ca(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(Do(t)))&&!f._p&&(v.instance=f,v.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||My(c,t,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ys(a),a=Ca(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function xs(t){return'href="'+Ot(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function y0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function My(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),dn(n),t.head.appendChild(n))}function ys(t){return'[src="'+Ot(t)+'"]'}function Uo(t){return"script[async]"+t}function S0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Dn(o,"style",c),$l(o,a.precedence,t),n.instance=o;case"stylesheet":c=xs(a.href);var f=t.querySelector(Do(c));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=y0(a),(c=yi.get(c))&&Zf(o,c),f=(t.ownerDocument||t).createElement("link"),dn(f);var v=f;return v._p=new Promise(function(R,F){v.onload=R,v.onerror=F}),Dn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=ys(a.src),(c=t.querySelector(Uo(f)))?(n.instance=c,dn(c),c):(o=a,(c=yi.get(f))&&(o=x({},a),Kf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),dn(c),Dn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,t));return n.instance}function $l(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function M0(t,n,a){if(ec===null){var o=new Map,c=ec=new Map;c.set(a,o)}else c=ec,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Aa]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function b0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function by(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ey(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=xs(o.href),f=n.querySelector(Do(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=y0(o),(c=yi.get(c))&&Zf(o,c),f=f.createElement("link"),dn(f);var v=f;v._p=new Promise(function(R,F){v.onload=R,v.onerror=F}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function Ty(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Qf===0&&(Qf=62500*ry());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(Ay,t),nc=null,tc.call(t))}function Ay(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var o=a.get(null);else{a=new Map,nc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=tc.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var No={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Ry(t,n,a,o,c,f,v,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function T0(t,n,a,o,c,f,v,R,F,ne,me,Se){return t=new Ry(t,n,a,v,F,ne,me,Se,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=Cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nu(f),t}function A0(t){return t?(t=jr,t):jr}function R0(t,n,a,o,c,f){c=A0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ia(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Zn(a,t,n),co(a,t,n))}function C0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jf(t,n){C0(t,n),(t=t.alternate)&&C0(t,n)}function w0(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Zn(n,t,67108864),jf(t,67108864)}}function D0(t){if(t.tag===13||t.tag===31){var n=li();n=Ws(n);var a=gr(t,n);a!==null&&Zn(a,t,n),jf(t,n)}}var ac=!0;function Cy(t,n,a,o){var c=z.T;z.T=null;var f=H.p;try{H.p=2,Jf(t,n,a,o)}finally{H.p=f,z.T=c}}function wy(t,n,a,o){var c=z.T;z.T=null;var f=H.p;try{H.p=8,Jf(t,n,a,o)}finally{H.p=f,z.T=c}}function Jf(t,n,a,o){if(ac){var c=$f(o);if(c===null)Bf(t,n,o,rc,a),N0(t,o);else if(Uy(c,t,n,a,o))o.stopPropagation();else if(N0(t,o),n&4&&-1<Dy.indexOf(t)){for(;c!==null;){var f=Qi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Re(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var F=1<<31-Fe(v);R.entanglements[1]|=F,v&=~F}Bi(f),(wt&6)===0&&(Gl=Ft()+500,Ao(0))}}break;case 31:case 13:R=gr(f,2),R!==null&&Zn(R,f,2),kl(),jf(f,2)}if(f=$f(o),f===null&&Bf(t,n,o,rc,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Bf(t,n,o,null,a)}}function $f(t){return t=eu(t),eh(t)}var rc=null;function eh(t){if(rc=null,t=Ki(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function U0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case D:return 2;case M:return 8;case J:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var th=!1,Za=null,Ka=null,Qa=null,Lo=new Map,Oo=new Map,ja=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Qi(n),n!==null&&w0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Uy(t,n,a,o,c){switch(n){case"focusin":return Za=Po(Za,t,n,a,o,c),!0;case"dragenter":return Ka=Po(Ka,t,n,a,o,c),!0;case"mouseover":return Qa=Po(Qa,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Lo.set(f,Po(Lo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,o,c)),!0}return!1}function L0(t){var n=Ki(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){D0(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){D0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$f(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);$c=o,a.target.dispatchEvent(o),$c=null}else return n=Qi(a),n!==null&&w0(n),t.blockedOn=a,!1;n.shift()}return!0}function O0(t,n,a){sc(t)&&a.delete(n)}function Ny(){th=!1,Za!==null&&sc(Za)&&(Za=null),Ka!==null&&sc(Ka)&&(Ka=null),Qa!==null&&sc(Qa)&&(Qa=null),Lo.forEach(O0),Oo.forEach(O0)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,th||(th=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ny)))}var lc=null;function P0(t){lc!==t&&(lc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(eh(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,Ju(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ss(t){function n(F){return oc(F,t)}Za!==null&&oc(Za,t),Ka!==null&&oc(Ka,t),Qa!==null&&oc(Qa,t),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[An]||null;if(typeof f=="function")v||P0(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[An]||null)R=v.formAction;else if(eh(c)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),P0(a)}}}function I0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function nh(t){this._internalRoot=t}cc.prototype.render=nh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=li();R0(a,o,t,n,null,null)},cc.prototype.unmount=nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;R0(t.current,2,null,t,null,null),kl(),n[Vn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,t),a===0&&L0(t)}};var z0=e.version;if(z0!=="19.2.8")throw Error(r(527,z0,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Ly={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{ue=uc.inject(Ly),he=uc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Xm,f=Wm,v=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=T0(t,1,!1,null,null,a,o,null,c,f,v,I0),t[Vn]=n.current,zf(t),new nh(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Xm,v=Wm,R=qm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=T0(t,1,!0,n,a??null,o,c,F,f,v,R,I0),n.context=A0(null),a=n.current,o=li(),o=Ws(o),c=Ia(o),c.callback=null,za(a,c,o),a=o,n.current.lanes=a,Ve(n,a),Bi(n),t[Vn]=n.current,zf(t),new cc(n)},zo.version="19.2.8",zo}var Y0;function ky(){if(Y0)return rh.exports;Y0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rh.exports=Vy(),rh.exports}var Xy=ky();const Wy=[{id:1,title:"Galen's Model of the Eye",date:"2nd Century",description:"Galen posited the crystalline lens as the principal instrument of vision. His anatomical model influenced centuries of thought.",literaryConnection:"Dante's emphasis on pure light and the initial structure of his cosmos echo Galenic perfection."},{id:2,title:"Alhazen's Book of Optics",date:"11th Century",description:"Influential on medieval perspectivism, Alhazen proved intromission theory—that light enters the eye rather than being emitted from it.",literaryConnection:"Provides the optical framework for Dante's progressive adaptation to blinding divine light."},{id:3,title:"Vesalius's Fabrica",date:"1543",description:"Revolutionized anatomical dissection, breaking down the eye into structural parts verifiable by the medical gaze.",literaryConnection:"The corpse becomes an object of intense scrutiny, shifting the focus from mystical light to physical flesh."},{id:4,title:"Kepler's Discovery of the Retina",date:"1604",description:"Kepler identified the retina, not the lens, as the seat of vision.",literaryConnection:"Corresponds to Dante's Empyrean as the 'eye of God', an inverted image forming the true reality."},{id:5,title:"Descartes & the Camera Obscura",date:"17th Century",description:"Descartes modeled the eye as a mechanical camera obscura, leading to the mind/body dualism.",literaryConnection:"Prefigures the modern detachment of the viewing subject from the observed object."},{id:6,title:"Forensic Pathology",date:"19th Century",description:"The rise of medicalization of the corpse. Exploring the body as a site of trauma and history.",literaryConnection:"Echoes Frankenstein's assembled body and the preservation of Tollund Man's eyes in Heaney's poetry."}],qy=[{id:1,title:"The Anatomical Venus",type:"Early modern anatomical plate",image:"/anatomical_venus.jpg",description:"Wax models depicting dissected faces and eyes, blending the beautiful with the macabre."},{id:2,title:"Tollund Man",type:"Forensic Photograph",description:"As catalogued in Glob's 'The Bog People'. A preserved corpse that becomes an object of both forensic and poetic inquiry."},{id:3,title:"Frankenstein's Assembly",type:"Literary Medicalization",description:"The creation of life from the fragments of the dead, viewed through the physician's eye."}];function Yy(){return ve.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[ve.jsx("h2",{style:{marginBottom:"2rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Eye Timeline"}),ve.jsx("div",{className:"timeline",style:{position:"relative",borderLeft:"2px solid var(--accent-gold)",paddingLeft:"2rem",marginLeft:"1rem"},children:Wy.map((s,e)=>ve.jsxs("div",{className:"timeline-item interactive-card",style:{marginBottom:"2rem",padding:"1.5rem",background:"var(--bg-secondary)",borderRadius:"12px",position:"relative"},children:[ve.jsx("div",{style:{position:"absolute",left:"-2.65rem",top:"1.5rem",width:"16px",height:"16px",borderRadius:"50%",background:"var(--accent-crimson)",border:"3px solid var(--bg-primary)"}}),ve.jsx("span",{style:{color:"var(--accent-gold)",fontWeight:"bold",display:"block",marginBottom:"0.5rem"},children:s.date}),ve.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem"},children:s.title}),ve.jsxs("p",{style:{marginBottom:"1rem"},children:[ve.jsx("strong",{children:"Medical History:"})," ",s.description]}),ve.jsxs("p",{style:{color:"#d0d0d0"},children:[ve.jsx("em",{children:"Literary Connection:"})," ",s.literaryConnection]})]},s.id))})]})}const Bd="185",Zy=0,Z0=1,Ky=2,Oc=1,Qy=2,Wo=3,ba=0,Qn=1,Un=2,Sa=0,Is=1,K0=2,Q0=3,j0=4,jy=5,Pr=100,Jy=101,$y=102,eS=103,tS=104,nS=200,iS=201,aS=202,rS=203,Wh=204,qh=205,sS=206,oS=207,lS=208,cS=209,uS=210,fS=211,hS=212,dS=213,pS=214,Yh=0,Zh=1,Kh=2,Fs=3,Qh=4,jh=5,Jh=6,$h=7,$v=0,mS=1,gS=2,Xi=0,e_=1,t_=2,n_=3,Fd=4,i_=5,a_=6,r_=7,s_=300,Gr=301,Hs=302,ch=303,uh=304,Zc=306,ed=1e3,ya=1001,td=1002,Nn=1003,vS=1004,fc=1005,zn=1006,fh=1007,zr=1008,hi=1009,o_=1010,l_=1011,Yo=1012,Hd=1013,Yi=1014,Vi=1015,Ea=1016,Gd=1017,Vd=1018,Zo=1020,c_=35902,u_=35899,f_=1021,h_=1022,Ni=1023,Ta=1026,Br=1027,d_=1028,kd=1029,Vr=1030,Xd=1031,Wd=1033,Pc=33776,Ic=33777,zc=33778,Bc=33779,nd=35840,id=35841,ad=35842,rd=35843,sd=36196,od=37492,ld=37496,cd=37488,ud=37489,Hc=37490,fd=37491,hd=37808,dd=37809,pd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,yd=37816,Sd=37817,Md=37818,bd=37819,Ed=37820,Td=37821,Ad=36492,Rd=36494,Cd=36495,wd=36283,Dd=36284,Gc=36285,Ud=36286,_S=3200,Nd=0,xS=1,rr="",Mi="srgb",Vc="srgb-linear",kc="linear",Bt="srgb",Ms=7680,J0=519,yS=512,SS=513,MS=514,qd=515,bS=516,ES=517,Yd=518,TS=519,$0=35044,ev="300 es",ki=2e3,Ko=2001;function AS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function RS(){const s=Xc("canvas");return s.style.display="block",s}const tv={};function nv(...s){const e="THREE."+s.shift();console.log(e,...s)}function p_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=p_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Et(...s){s=p_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function zs(...s){const e=s.join(" ");e in tv||(tv[e]=!0,nt(...s))}function CS(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const wS={[Yh]:Zh,[Kh]:Jh,[Qh]:$h,[Fs]:jh,[Zh]:Yh,[Jh]:Kh,[$h]:Qh,[jh]:Fs};class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=Math.PI/180,Ld=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function DS(s,e){return(s%e+e)%e}function dh(s,e,i){return(1-i)*s+i*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let ft=tp;class ks{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,m){let p=r[l+0],d=r[l+1],y=r[l+2],x=r[l+3],g=u[h+0],b=u[h+1],T=u[h+2],C=u[h+3];if(x!==C||p!==g||d!==b||y!==T){let S=p*g+d*b+y*T+x*C;S<0&&(g=-g,b=-b,T=-T,C=-C,S=-S);let _=1-m;if(S<.9995){const O=Math.acos(S),B=Math.sin(O);_=Math.sin(_*O)/B,m=Math.sin(m*O)/B,p=p*_+g*m,d=d*_+b*m,y=y*_+T*m,x=x*_+C*m}else{p=p*_+g*m,d=d*_+b*m,y=y*_+T*m,x=x*_+C*m;const O=1/Math.sqrt(p*p+d*d+y*y+x*x);p*=O,d*=O,y*=O,x*=O}}e[i]=p,e[i+1]=d,e[i+2]=y,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const m=r[l],p=r[l+1],d=r[l+2],y=r[l+3],x=u[h],g=u[h+1],b=u[h+2],T=u[h+3];return e[i]=m*T+y*x+p*b-d*g,e[i+1]=p*T+y*g+d*x-m*b,e[i+2]=d*T+y*b+m*g-p*x,e[i+3]=y*T-m*x-p*g-d*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,m=Math.cos,p=Math.sin,d=m(r/2),y=m(l/2),x=m(u/2),g=p(r/2),b=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=g*y*x+d*b*T,this._y=d*b*x-g*y*T,this._z=d*y*T+g*b*x,this._w=d*y*x-g*b*T;break;case"YXZ":this._x=g*y*x+d*b*T,this._y=d*b*x-g*y*T,this._z=d*y*T-g*b*x,this._w=d*y*x+g*b*T;break;case"ZXY":this._x=g*y*x-d*b*T,this._y=d*b*x+g*y*T,this._z=d*y*T+g*b*x,this._w=d*y*x-g*b*T;break;case"ZYX":this._x=g*y*x-d*b*T,this._y=d*b*x+g*y*T,this._z=d*y*T-g*b*x,this._w=d*y*x+g*b*T;break;case"YZX":this._x=g*y*x+d*b*T,this._y=d*b*x+g*y*T,this._z=d*y*T-g*b*x,this._w=d*y*x-g*b*T;break;case"XZY":this._x=g*y*x-d*b*T,this._y=d*b*x-g*y*T,this._z=d*y*T+g*b*x,this._w=d*y*x+g*b*T;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],m=i[5],p=i[9],d=i[2],y=i[6],x=i[10],g=r+m+x;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(y-p)*b,this._y=(u-d)*b,this._z=(h-l)*b}else if(r>m&&r>x){const b=2*Math.sqrt(1+r-m-x);this._w=(y-p)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(u+d)/b}else if(m>x){const b=2*Math.sqrt(1+m-r-x);this._w=(u-d)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(p+y)/b}else{const b=2*Math.sqrt(1+x-r-m);this._w=(h-l)/b,this._x=(u+d)/b,this._y=(p+y)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,m=i._x,p=i._y,d=i._z,y=i._w;return this._x=r*y+h*m+l*d-u*p,this._y=l*y+h*p+u*m-r*d,this._z=u*y+h*d+r*p-l*m,this._w=h*y-r*m-l*p-u*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,h=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,u=-u,h=-h,m=-m);let p=1-i;if(m<.9995){const d=Math.acos(m),y=Math.sin(d);p=Math.sin(p*d)/y,i=Math.sin(i*d)/y,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(iv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(iv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,m=e.z,p=e.w,d=2*(h*l-m*r),y=2*(m*i-u*l),x=2*(u*r-h*i);return this.x=i+p*d+h*x-m*y,this.y=r+p*y+m*d-u*x,this.z=l+p*x+u*y-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,m=i.y,p=i.z;return this.x=l*p-u*m,this.y=u*h-r*p,this.z=r*m-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let ee=np;const ph=new ee,iv=new ks,ip=class ip{constructor(e,i,r,l,u,h,m,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,m,p,d)}set(e,i,r,l,u,h,m,p,d){const y=this.elements;return y[0]=e,y[1]=l,y[2]=m,y[3]=i,y[4]=u,y[5]=p,y[6]=r,y[7]=h,y[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],m=r[3],p=r[6],d=r[1],y=r[4],x=r[7],g=r[2],b=r[5],T=r[8],C=l[0],S=l[3],_=l[6],O=l[1],B=l[4],w=l[7],I=l[2],U=l[5],P=l[8];return u[0]=h*C+m*O+p*I,u[3]=h*S+m*B+p*U,u[6]=h*_+m*w+p*P,u[1]=d*C+y*O+x*I,u[4]=d*S+y*B+x*U,u[7]=d*_+y*w+x*P,u[2]=g*C+b*O+T*I,u[5]=g*S+b*B+T*U,u[8]=g*_+b*w+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],m=e[5],p=e[6],d=e[7],y=e[8];return i*h*y-i*m*d-r*u*y+r*m*p+l*u*d-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],m=e[5],p=e[6],d=e[7],y=e[8],x=y*h-m*d,g=m*p-y*u,b=d*u-h*p,T=i*x+r*g+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*d-y*r)*C,e[2]=(m*r-l*h)*C,e[3]=g*C,e[4]=(y*i-l*p)*C,e[5]=(l*u-m*i)*C,e[6]=b*C,e[7]=(r*p-d*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,m){const p=Math.cos(u),d=Math.sin(u);return this.set(r*p,r*d,-r*(p*h+d*m)+h+e,-l*d,l*p,-l*(-d*h+p*m)+m+i,0,0,1),this}scale(e,i){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,i)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,i){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let st=ip;const mh=new st,av=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const s={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Bt&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Bt&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vc]:{primaries:e,whitePoint:r,transfer:kc,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:av,fromXYZ:rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),s}const bt=US();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class NS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bs===void 0&&(bs=Xc("canvas")),bs.width=e.width,bs.height=e.height;const l=bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=bs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ma(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,m=l.length;h<m;h++)l[h].isDataTexture?u.push(gh(l[h].image)):u.push(gh(l[h]))}else u=gh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?NS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let OS=0;const vh=new ee;class Gn extends kr{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=ya,l=ya,u=zn,h=zr,m=Ni,p=hi,d=Gn.DEFAULT_ANISOTROPY,y=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Qo(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=m,this.internalFormat=null,this.type=p,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=s_;Gn.DEFAULT_ANISOTROPY=1;const ap=class ap{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,d=p[0],y=p[4],x=p[8],g=p[1],b=p[5],T=p[9],C=p[2],S=p[6],_=p[10];if(Math.abs(y-g)<.01&&Math.abs(x-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(y+g)<.1&&Math.abs(x+C)<.1&&Math.abs(T+S)<.1&&Math.abs(d+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(d+1)/2,w=(b+1)/2,I=(_+1)/2,U=(y+g)/4,P=(x+C)/4,E=(T+S)/4;return B>w&&B>I?B<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(B),l=U/r,u=P/r):w>I?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=U/l,u=E/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=P/u,l=E/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-T)*(S-T)+(x-C)*(x-C)+(g-y)*(g-y));return Math.abs(O)<.001&&(O=1),this.x=(S-T)/O,this.y=(x-C)/O,this.z=(g-y)/O,this.w=Math.acos((d+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ap.prototype.isVector4=!0;let en=ap;class PS extends kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Gn(l),h=r.count;for(let m=0;m<h;m++)this.textures[m]=u.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends PS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class m_ extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=class Yc{constructor(e,i,r,l,u,h,m,p,d,y,x,g,b,T,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,m,p,d,y,x,g,b,T,C,S)}set(e,i,r,l,u,h,m,p,d,y,x,g,b,T,C,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=m,_[13]=p,_[2]=d,_[6]=y,_[10]=x,_[14]=g,_[3]=b,_[7]=T,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),h=1/Es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),m=Math.sin(r),p=Math.cos(l),d=Math.sin(l),y=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const g=h*y,b=h*x,T=m*y,C=m*x;i[0]=p*y,i[4]=-p*x,i[8]=d,i[1]=b+T*d,i[5]=g-C*d,i[9]=-m*p,i[2]=C-g*d,i[6]=T+b*d,i[10]=h*p}else if(e.order==="YXZ"){const g=p*y,b=p*x,T=d*y,C=d*x;i[0]=g+C*m,i[4]=T*m-b,i[8]=h*d,i[1]=h*x,i[5]=h*y,i[9]=-m,i[2]=b*m-T,i[6]=C+g*m,i[10]=h*p}else if(e.order==="ZXY"){const g=p*y,b=p*x,T=d*y,C=d*x;i[0]=g-C*m,i[4]=-h*x,i[8]=T+b*m,i[1]=b+T*m,i[5]=h*y,i[9]=C-g*m,i[2]=-h*d,i[6]=m,i[10]=h*p}else if(e.order==="ZYX"){const g=h*y,b=h*x,T=m*y,C=m*x;i[0]=p*y,i[4]=T*d-b,i[8]=g*d+C,i[1]=p*x,i[5]=C*d+g,i[9]=b*d-T,i[2]=-d,i[6]=m*p,i[10]=h*p}else if(e.order==="YZX"){const g=h*p,b=h*d,T=m*p,C=m*d;i[0]=p*y,i[4]=C-g*x,i[8]=T*x+b,i[1]=x,i[5]=h*y,i[9]=-m*y,i[2]=-d*y,i[6]=b*x+T,i[10]=g-C*x}else if(e.order==="XZY"){const g=h*p,b=h*d,T=m*p,C=m*d;i[0]=p*y,i[4]=-x,i[8]=d*y,i[1]=g*x+C,i[5]=h*y,i[9]=b*x-T,i[2]=T*x-b,i[6]=m*y,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,BS)}lookAt(e,i,r){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),$a.crossVectors(r,ci),$a.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),$a.crossVectors(r,ci)),$a.normalize(),hc.crossVectors(ci,$a),l[0]=$a.x,l[4]=hc.x,l[8]=ci.x,l[1]=$a.y,l[5]=hc.y,l[9]=ci.y,l[2]=$a.z,l[6]=hc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],m=r[4],p=r[8],d=r[12],y=r[1],x=r[5],g=r[9],b=r[13],T=r[2],C=r[6],S=r[10],_=r[14],O=r[3],B=r[7],w=r[11],I=r[15],U=l[0],P=l[4],E=l[8],N=l[12],k=l[1],G=l[5],q=l[9],ce=l[13],pe=l[2],j=l[6],z=l[10],H=l[14],$=l[3],ge=l[7],Ee=l[11],L=l[15];return u[0]=h*U+m*k+p*pe+d*$,u[4]=h*P+m*G+p*j+d*ge,u[8]=h*E+m*q+p*z+d*Ee,u[12]=h*N+m*ce+p*H+d*L,u[1]=y*U+x*k+g*pe+b*$,u[5]=y*P+x*G+g*j+b*ge,u[9]=y*E+x*q+g*z+b*Ee,u[13]=y*N+x*ce+g*H+b*L,u[2]=T*U+C*k+S*pe+_*$,u[6]=T*P+C*G+S*j+_*ge,u[10]=T*E+C*q+S*z+_*Ee,u[14]=T*N+C*ce+S*H+_*L,u[3]=O*U+B*k+w*pe+I*$,u[7]=O*P+B*G+w*j+I*ge,u[11]=O*E+B*q+w*z+I*Ee,u[15]=O*N+B*ce+w*H+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],m=e[5],p=e[9],d=e[13],y=e[2],x=e[6],g=e[10],b=e[14],T=e[3],C=e[7],S=e[11],_=e[15],O=p*b-d*g,B=m*b-d*x,w=m*g-p*x,I=h*b-d*y,U=h*g-p*y,P=h*x-m*y;return i*(C*O-S*B+_*w)-r*(T*O-S*I+_*U)+l*(T*B-C*I+_*P)-u*(T*w-C*U+S*P)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],h=e[5],m=e[9],p=e[2],d=e[6],y=e[10];return i*(h*y-m*d)-r*(u*y-m*p)+l*(u*d-h*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],m=e[5],p=e[6],d=e[7],y=e[8],x=e[9],g=e[10],b=e[11],T=e[12],C=e[13],S=e[14],_=e[15],O=i*m-r*h,B=i*p-l*h,w=i*d-u*h,I=r*p-l*m,U=r*d-u*m,P=l*d-u*p,E=y*C-x*T,N=y*S-g*T,k=y*_-b*T,G=x*S-g*C,q=x*_-b*C,ce=g*_-b*S,pe=O*ce-B*q+w*G+I*k-U*N+P*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/pe;return e[0]=(m*ce-p*q+d*G)*j,e[1]=(l*q-r*ce-u*G)*j,e[2]=(C*P-S*U+_*I)*j,e[3]=(g*U-x*P-b*I)*j,e[4]=(p*k-h*ce-d*N)*j,e[5]=(i*ce-l*k+u*N)*j,e[6]=(S*w-T*P-_*B)*j,e[7]=(y*P-g*w+b*B)*j,e[8]=(h*q-m*k+d*E)*j,e[9]=(r*k-i*q-u*E)*j,e[10]=(T*U-C*w+_*O)*j,e[11]=(x*w-y*U-b*O)*j,e[12]=(m*N-h*G-p*E)*j,e[13]=(i*G-r*N+l*E)*j,e[14]=(C*B-T*I-S*O)*j,e[15]=(y*I-x*B+g*O)*j,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,m=e.y,p=e.z,d=u*h,y=u*m;return this.set(d*h+r,d*m-l*p,d*p+l*m,0,d*m+l*p,y*m+r,y*p-l*h,0,d*p-l*m,y*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,m=i._z,p=i._w,d=u+u,y=h+h,x=m+m,g=u*d,b=u*y,T=u*x,C=h*y,S=h*x,_=m*x,O=p*d,B=p*y,w=p*x,I=r.x,U=r.y,P=r.z;return l[0]=(1-(C+_))*I,l[1]=(b+w)*I,l[2]=(T-B)*I,l[3]=0,l[4]=(b-w)*U,l[5]=(1-(g+_))*U,l[6]=(S+O)*U,l[7]=0,l[8]=(T+B)*P,l[9]=(S-O)*P,l[10]=(1-(g+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let h=Es.set(l[0],l[1],l[2]).length();const m=Es.set(l[4],l[5],l[6]).length(),p=Es.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Ci.copy(this);const d=1/h,y=1/m,x=1/p;return Ci.elements[0]*=d,Ci.elements[1]*=d,Ci.elements[2]*=d,Ci.elements[4]*=y,Ci.elements[5]*=y,Ci.elements[6]*=y,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,i.setFromRotationMatrix(Ci),r.x=h,r.y=m,r.z=p,this}makePerspective(e,i,r,l,u,h,m=ki,p=!1){const d=this.elements,y=2*u/(i-e),x=2*u/(r-l),g=(i+e)/(i-e),b=(r+l)/(r-l);let T,C;if(p)T=u/(h-u),C=h*u/(h-u);else if(m===ki)T=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(m===Ko)T=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return d[0]=y,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=b,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,u,h,m=ki,p=!1){const d=this.elements,y=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),b=-(r+l)/(r-l);let T,C;if(p)T=1/(h-u),C=h/(h-u);else if(m===ki)T=-2/(h-u),C=-(h+u)/(h-u);else if(m===Ko)T=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return d[0]=y,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=b,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Yc.prototype.isMatrix4=!0;let tn=Yc;const Es=new ee,Ci=new tn,zS=new ee(0,0,0),BS=new ee(1,1,1),$a=new ee,hc=new ee,ci=new ee,sv=new tn,ov=new ks;class lr{constructor(e=0,i=0,r=0,l=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],m=l[8],p=l[1],d=l[5],y=l[9],x=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,b),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,d),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(m,u)):(this._x=Math.atan2(-y,b),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ov.setFromEuler(this),this.setFromQuaternion(ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FS=0;const lv=new ee,Ts=new ks,pa=new tn,dc=new ee,Fo=new ee,HS=new ee,GS=new ks,cv=new ee(1,0,0),uv=new ee(0,1,0),fv=new ee(0,0,1),hv={type:"added"},VS={type:"removed"},As={type:"childadded",child:null},_h={type:"childremoved",child:null};class Bn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ee,i=new lr,r=new ks,l=new ee(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new st}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(cv,e)}rotateY(e){return this.rotateOnAxis(uv,e)}rotateZ(e){return this.rotateOnAxis(fv,e)}translateOnAxis(e,i){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(cv,e)}translateY(e){return this.translateOnAxis(uv,e)}translateZ(e){return this.translateOnAxis(fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Fo,dc,this.up):pa.lookAt(dc,Fo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(pa),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hv),As.child=e,this.dispatchEvent(As),As.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(VS),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,HS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,GS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let h=0,m=u.length;h<m;h++)u[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let d=0,y=p.length;d<y;d++){const x=p[d];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,d=this.material.length;p<d;p++)m.push(u(e.materials,this.material[p]));l.material=m}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];l.animations.push(u(e.animations,p))}}if(i){const m=h(e.geometries),p=h(e.materials),d=h(e.textures),y=h(e.images),x=h(e.shapes),g=h(e.skeletons),b=h(e.animations),T=h(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),y.length>0&&(r.images=y),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(m){const p=[];for(const d in m){const y=m[d];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new ee(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fr extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kS={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const m=this._targetRay,p=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),_=this._getHandJoint(d,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const y=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=y.position.distanceTo(x.position),b=.02,T=.005;d.inputState.pinching&&g>b+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=b-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(kS)))}return m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Fr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},pc={h:0,s:0,l:0};function yh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class St{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=bt.workingColorSpace){if(e=DS(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=yh(h,u,e+1/3),this.g=yh(h,u,e),this.b=yh(h,u,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function r(u){u!==void 0&&parseFloat(u)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],m=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=g_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return bt.workingToColorSpace(In.copy(this),e),Math.round(yt(In.r*255,0,255))*65536+Math.round(yt(In.g*255,0,255))*256+Math.round(yt(In.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(In.copy(this),i);const r=In.r,l=In.g,u=In.b,h=Math.max(r,l,u),m=Math.min(r,l,u);let p,d;const y=(m+h)/2;if(m===h)p=0,d=0;else{const x=h-m;switch(d=y<=.5?x/(h+m):x/(2-h-m),h){case r:p=(l-u)/x+(l<u?6:0);break;case l:p=(u-r)/x+2;break;case u:p=(r-l)/x+4;break}p/=6}return e.h=p,e.s=d,e.l=y,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Mi){bt.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,l=In.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(pc);const r=dh(er.h,pc.h,i),l=dh(er.s,pc.s,i),u=dh(er.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new St;St.NAMES=g_;class XS extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new ee,ma=new ee,Sh=new ee,ga=new ee,Rs=new ee,Cs=new ee,dv=new ee,Mh=new ee,bh=new ee,Eh=new ee,Th=new en,Ah=new en,Rh=new en;class Ui{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){wi.subVectors(l,i),ma.subVectors(r,i),Sh.subVectors(e,i);const h=wi.dot(wi),m=wi.dot(ma),p=wi.dot(Sh),d=ma.dot(ma),y=ma.dot(Sh),x=h*d-m*m;if(x===0)return u.set(0,0,0),null;const g=1/x,b=(d*p-m*y)*g,T=(h*y-m*p)*g;return u.set(1-b-T,T,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,u,h,m,p){return this.getBarycoord(e,i,r,l,ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ga.x),p.addScaledVector(h,ga.y),p.addScaledVector(m,ga.z),p)}static getInterpolatedAttribute(e,i,r,l,u,h){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,r),Rh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Th,u.x),h.addScaledVector(Ah,u.y),h.addScaledVector(Rh,u.z),h}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),ma.subVectors(e,i),wi.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,m;Rs.subVectors(l,r),Cs.subVectors(u,r),Mh.subVectors(e,r);const p=Rs.dot(Mh),d=Cs.dot(Mh);if(p<=0&&d<=0)return i.copy(r);bh.subVectors(e,l);const y=Rs.dot(bh),x=Cs.dot(bh);if(y>=0&&x<=y)return i.copy(l);const g=p*x-y*d;if(g<=0&&p>=0&&y<=0)return h=p/(p-y),i.copy(r).addScaledVector(Rs,h);Eh.subVectors(e,u);const b=Rs.dot(Eh),T=Cs.dot(Eh);if(T>=0&&b<=T)return i.copy(u);const C=b*d-p*T;if(C<=0&&d>=0&&T<=0)return m=d/(d-T),i.copy(r).addScaledVector(Cs,m);const S=y*T-b*x;if(S<=0&&x-y>=0&&b-T>=0)return dv.subVectors(u,l),m=(x-y)/(x-y+(b-T)),i.copy(l).addScaledVector(dv,m);const _=1/(S+C+g);return h=C*_,m=g*_,i.copy(r).addScaledVector(Rs,h).addScaledVector(Cs,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,m=u.count;h<m;h++)e.isMesh===!0?e.getVertexPosition(h,Di):Di.fromBufferAttribute(u,h),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mc.copy(r.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),gc.subVectors(this.max,Ho),ws.subVectors(e.a,Ho),Ds.subVectors(e.b,Ho),Us.subVectors(e.c,Ho),tr.subVectors(Ds,ws),nr.subVectors(Us,Ds),wr.subVectors(ws,Us);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-wr.z,wr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,wr.z,0,-wr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-wr.y,wr.x,0];return!Ch(i,ws,Ds,Us,gc)||(i=[1,0,0,0,1,0,0,0,1],!Ch(i,ws,Ds,Us,gc))?!1:(vc.crossVectors(tr,nr),i=[vc.x,vc.y,vc.z],Ch(i,ws,Ds,Us,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Di=new ee,mc=new jo,ws=new ee,Ds=new ee,Us=new ee,tr=new ee,nr=new ee,wr=new ee,Ho=new ee,gc=new ee,vc=new ee,Dr=new ee;function Ch(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){Dr.fromArray(s,u);const m=l.x*Math.abs(Dr.x)+l.y*Math.abs(Dr.y)+l.z*Math.abs(Dr.z),p=e.dot(Dr),d=i.dot(Dr),y=r.dot(Dr);if(Math.max(-Math.max(p,d,y),Math.min(p,d,y))>m)return!1}return!0}const _n=new ee,_c=new ft;let WS=0;class qi extends kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=$0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(e),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array),u=Kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class v_ extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class __ extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Jt extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const qS=new jo,Go=new ee,wh=new ee;class Qd{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(wh)),this.expandByPoint(Go.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YS=0;const Si=new tn,Dh=new Bn,Ns=new ee,ui=new jo,Vo=new jo,En=new ee;class jn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AS(e)?__:v_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,r){return Si.makeTranslation(e,i,r),this.applyMatrix4(Si),this}scale(e,i,r){return Si.makeScale(e,i,r),this.applyMatrix4(Si),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jt(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const m=i[u];Vo.setFromBufferAttribute(m),this.morphTargetsRelative?(En.addVectors(ui.min,Vo.min),ui.expandByPoint(En),En.addVectors(ui.max,Vo.max),ui.expandByPoint(En)):(ui.expandByPoint(Vo.min),ui.expandByPoint(Vo.max))}ui.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)En.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(En));if(i)for(let u=0,h=i.length;u<h;u++){const m=i[u],p=this.morphTargetsRelative;for(let d=0,y=m.count;d<y;d++)En.fromBufferAttribute(m,d),p&&(Ns.fromBufferAttribute(e,d),En.add(Ns)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new qi(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const m=[],p=[];for(let E=0;E<r.count;E++)m[E]=new ee,p[E]=new ee;const d=new ee,y=new ee,x=new ee,g=new ft,b=new ft,T=new ft,C=new ee,S=new ee;function _(E,N,k){d.fromBufferAttribute(r,E),y.fromBufferAttribute(r,N),x.fromBufferAttribute(r,k),g.fromBufferAttribute(u,E),b.fromBufferAttribute(u,N),T.fromBufferAttribute(u,k),y.sub(d),x.sub(d),b.sub(g),T.sub(g);const G=1/(b.x*T.y-T.x*b.y);isFinite(G)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(x,-b.y).multiplyScalar(G),S.copy(x).multiplyScalar(b.x).addScaledVector(y,-T.x).multiplyScalar(G),m[E].add(C),m[N].add(C),m[k].add(C),p[E].add(S),p[N].add(S),p[k].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let E=0,N=O.length;E<N;++E){const k=O[E],G=k.start,q=k.count;for(let ce=G,pe=G+q;ce<pe;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const B=new ee,w=new ee,I=new ee,U=new ee;function P(E){I.fromBufferAttribute(l,E),U.copy(I);const N=m[E];B.copy(N),B.sub(I.multiplyScalar(I.dot(N))).normalize(),w.crossVectors(U,N);const G=w.dot(p[E])<0?-1:1;h.setXYZW(E,B.x,B.y,B.z,G)}for(let E=0,N=O.length;E<N;++E){const k=O[E],G=k.start,q=k.count;for(let ce=G,pe=G+q;ce<pe;ce+=3)P(e.getX(ce+0)),P(e.getX(ce+1)),P(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const l=new ee,u=new ee,h=new ee,m=new ee,p=new ee,d=new ee,y=new ee,x=new ee;if(e)for(let g=0,b=e.count;g<b;g+=3){const T=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),y.subVectors(h,u),x.subVectors(l,u),y.cross(x),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),m.add(y),p.add(y),d.add(y),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),y.subVectors(h,u),x.subVectors(l,u),y.cross(x),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(m,p){const d=m.array,y=m.itemSize,x=m.normalized,g=new d.constructor(p.length*y);let b=0,T=0;for(let C=0,S=p.length;C<S;C++){m.isInterleavedBufferAttribute?b=p[C]*m.data.stride+m.offset:b=p[C]*y;for(let _=0;_<y;_++)g[T++]=d[b++]}return new qi(g,y,x)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,r=this.index.array,l=this.attributes;for(const m in l){const p=l[m],d=e(p,r);i.setAttribute(m,d)}const u=this.morphAttributes;for(const m in u){const p=[],d=u[m];for(let y=0,x=d.length;y<x;y++){const g=d[y],b=e(g,r);p.push(b)}i.morphAttributes[m]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let m=0,p=h.length;m<p;m++){const d=h[m];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const d=r[p];e.data.attributes[p]=d.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],y=[];for(let x=0,g=d.length;x<g;x++){const b=d[x];y.push(b.toJSON(e.data))}y.length>0&&(l[p]=y,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const y=l[d];this.setAttribute(d,y.clone(i))}const u=e.morphAttributes;for(const d in u){const y=[],x=u[d];for(let g=0,b=x.length;g<b;g++)y.push(x[g].clone(i));this.morphAttributes[d]=y}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,y=h.length;d<y;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZS=0;class Jo extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Is,this.side=ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const m in u){const p=u[m];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new ee,Uh=new ee,xc=new ee,ir=new ee,Nh=new ee,yc=new ee,Lh=new ee;class x_{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Uh.copy(e).add(i).multiplyScalar(.5),xc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Uh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(xc),m=ir.dot(this.direction),p=-ir.dot(xc),d=ir.lengthSq(),y=Math.abs(1-h*h);let x,g,b,T;if(y>0)if(x=h*p-m,g=h*m-p,T=u*y,x>=0)if(g>=-T)if(g<=T){const C=1/y;x*=C,g*=C,b=x*(x+h*g+2*m)+g*(h*x+g+2*p)+d}else g=u,x=Math.max(0,-(h*g+m)),b=-x*x+g*(g+2*p)+d;else g=-u,x=Math.max(0,-(h*g+m)),b=-x*x+g*(g+2*p)+d;else g<=-T?(x=Math.max(0,-(-h*u+m)),g=x>0?-u:Math.min(Math.max(-u,-p),u),b=-x*x+g*(g+2*p)+d):g<=T?(x=0,g=Math.min(Math.max(-u,-p),u),b=g*(g+2*p)+d):(x=Math.max(0,-(h*u+m)),g=x>0?u:Math.min(Math.max(-u,-p),u),b=-x*x+g*(g+2*p)+d);else g=h>0?-u:u,x=Math.max(0,-(h*g+m)),b=-x*x+g*(g+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Uh).addScaledVector(xc,g),b}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const r=_a.dot(this.direction),l=_a.dot(_a)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),m=r-h,p=r+h;return p<0?null:m<0?this.at(p,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,m,p;const d=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),y>=0?(u=(e.min.y-g.y)*y,h=(e.max.y-g.y)*y):(u=(e.max.y-g.y)*y,h=(e.min.y-g.y)*y),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(m=(e.min.z-g.z)*x,p=(e.max.z-g.z)*x):(m=(e.max.z-g.z)*x,p=(e.min.z-g.z)*x),r>p||m>l)||((m>r||r!==r)&&(r=m),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,r,l,u){Nh.subVectors(i,e),yc.subVectors(r,e),Lh.crossVectors(Nh,yc);let h=this.direction.dot(Lh),m;if(h>0){if(l)return null;m=1}else if(h<0)m=-1,h=-h;else return null;ir.subVectors(this.origin,e);const p=m*this.direction.dot(yc.crossVectors(ir,yc));if(p<0)return null;const d=m*this.direction.dot(Nh.cross(ir));if(d<0||p+d>h)return null;const y=-m*ir.dot(Lh);return y<0?null:this.at(y/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pv=new tn,Ur=new x_,Sc=new Qd,mv=new ee,Mc=new ee,bc=new ee,Ec=new ee,Oh=new ee,Tc=new ee,gv=new ee,Ac=new ee;class $t extends Bn{constructor(e=new jn,i=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const m=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(u&&m){Tc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const y=m[p],x=u[p];y!==0&&(Oh.fromBufferAttribute(x,e),h?Tc.addScaledVector(Oh,y):Tc.addScaledVector(Oh.sub(i),y))}i.add(Tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(u),Ur.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Sc,mv)===null||Ur.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(u).invert(),Ur.copy(e.ray).applyMatrix4(pv),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ur)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,m=u.index,p=u.attributes.position,d=u.attributes.uv,y=u.attributes.uv1,x=u.attributes.normal,g=u.groups,b=u.drawRange;if(m!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const S=g[T],_=h[S.materialIndex],O=Math.max(S.start,b.start),B=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let w=O,I=B;w<I;w+=3){const U=m.getX(w),P=m.getX(w+1),E=m.getX(w+2);l=Rc(this,_,e,r,d,y,x,U,P,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let S=T,_=C;S<_;S+=3){const O=m.getX(S),B=m.getX(S+1),w=m.getX(S+2);l=Rc(this,h,e,r,d,y,x,O,B,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const S=g[T],_=h[S.materialIndex],O=Math.max(S.start,b.start),B=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let w=O,I=B;w<I;w+=3){const U=w,P=w+1,E=w+2;l=Rc(this,_,e,r,d,y,x,U,P,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let S=T,_=C;S<_;S+=3){const O=S,B=S+1,w=S+2;l=Rc(this,h,e,r,d,y,x,O,B,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function KS(s,e,i,r,l,u,h,m){let p;if(e.side===Qn?p=r.intersectTriangle(h,u,l,!0,m):p=r.intersectTriangle(l,u,h,e.side===ba,m),p===null)return null;Ac.copy(m),Ac.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(Ac);return d<i.near||d>i.far?null:{distance:d,point:Ac.clone(),object:s}}function Rc(s,e,i,r,l,u,h,m,p,d){s.getVertexPosition(m,Mc),s.getVertexPosition(p,bc),s.getVertexPosition(d,Ec);const y=KS(s,e,i,r,Mc,bc,Ec,gv);if(y){const x=new ee;Ui.getBarycoord(gv,Mc,bc,Ec,x),l&&(y.uv=Ui.getInterpolatedAttribute(l,m,p,d,x,new ft)),u&&(y.uv1=Ui.getInterpolatedAttribute(u,m,p,d,x,new ft)),h&&(y.normal=Ui.getInterpolatedAttribute(h,m,p,d,x,new ee),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:m,b:p,c:d,normal:new ee,materialIndex:0};Ui.getNormal(Mc,bc,Ec,g.normal),y.face=g,y.barycoord=x}return y}class QS extends Gn{constructor(e=null,i=1,r=1,l,u,h,m,p,d=Nn,y=Nn,x,g){super(null,h,m,p,d,y,l,u,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ph=new ee,jS=new ee,JS=new st;class Lr{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ph.subVectors(r,i).cross(jS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Ph),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||JS.getNormalMatrix(e),l=this.coplanarPoint(Ph).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Qd,$S=new ft(.5,.5),Cc=new ee;class jd{constructor(e=new Lr,i=new Lr,r=new Lr,l=new Lr,u=new Lr,h=new Lr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(u),m[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,u=e.elements,h=u[0],m=u[1],p=u[2],d=u[3],y=u[4],x=u[5],g=u[6],b=u[7],T=u[8],C=u[9],S=u[10],_=u[11],O=u[12],B=u[13],w=u[14],I=u[15];if(l[0].setComponents(d-h,b-y,_-T,I-O).normalize(),l[1].setComponents(d+h,b+y,_+T,I+O).normalize(),l[2].setComponents(d+m,b+x,_+C,I+B).normalize(),l[3].setComponents(d-m,b-x,_-C,I-B).normalize(),r)l[4].setComponents(p,g,S,w).normalize(),l[5].setComponents(d-p,b-g,_-S,I-w).normalize();else if(l[4].setComponents(d-p,b-g,_-S,I-w).normalize(),i===ki)l[5].setComponents(d+p,b+g,_+S,I+w).normalize();else if(i===Ko)l[5].setComponents(p,g,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=$S.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y_ extends Gn{constructor(e=[],i=Gr,r,l,u,h,m,p,d,y){super(e,i,r,l,u,h,m,p,d,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gs extends Gn{constructor(e,i,r=Yi,l,u,h,m=Nn,p=Nn,d,y=Ta,x=1){if(y!==Ta&&y!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,u,h,m,p,y,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eM extends Gs{constructor(e,i=Yi,r=Gr,l,u,h=Nn,m=Nn,p,d=Ta){const y={width:e,height:e,depth:1},x=[y,y,y,y,y,y];super(e,e,i,r,l,u,h,m,p,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class S_ extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends jn{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const m=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],d=[],y=[],x=[];let g=0,b=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(x,2));function T(C,S,_,O,B,w,I,U,P,E,N){const k=w/P,G=I/E,q=w/2,ce=I/2,pe=U/2,j=P+1,z=E+1;let H=0,$=0;const ge=new ee;for(let Ee=0;Ee<z;Ee++){const L=Ee*G-ce;for(let K=0;K<j;K++){const Me=K*k-q;ge[C]=Me*O,ge[S]=L*B,ge[_]=pe,d.push(ge.x,ge.y,ge.z),ge[C]=0,ge[S]=0,ge[_]=U>0?1:-1,y.push(ge.x,ge.y,ge.z),x.push(K/P),x.push(1-Ee/E),H+=1}}for(let Ee=0;Ee<E;Ee++)for(let L=0;L<P;L++){const K=g+L+j*Ee,Me=g+L+j*(Ee+1),Te=g+(L+1)+j*(Ee+1),Oe=g+(L+1)+j*Ee;p.push(K,Me,Oe),p.push(Me,Te,Oe),$+=6}m.addGroup(b,$,N),b+=$,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wc extends jn{constructor(e=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const u=[],h=[],m=[],p=[],d=new ee,y=new ft;h.push(0,0,0),m.push(0,0,1),p.push(.5,.5);for(let x=0,g=3;x<=i;x++,g+=3){const b=r+x/i*l;d.x=e*Math.cos(b),d.y=e*Math.sin(b),h.push(d.x,d.y,d.z),m.push(0,0,1),y.x=(h[g]/e+1)/2,y.y=(h[g+1]/e+1)/2,p.push(y.x,y.y)}for(let x=1;x<=i;x++)u.push(x,x+1,0);this.setIndex(u),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qc extends jn{constructor(e=1,i=1,r=1,l=32,u=1,h=!1,m=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:m,thetaLength:p};const d=this;l=Math.floor(l),u=Math.floor(u);const y=[],x=[],g=[],b=[];let T=0;const C=[],S=r/2;let _=0;O(),h===!1&&(e>0&&B(!0),i>0&&B(!1)),this.setIndex(y),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(b,2));function O(){const w=new ee,I=new ee;let U=0;const P=(i-e)/r;for(let E=0;E<=u;E++){const N=[],k=E/u,G=k*(i-e)+e;for(let q=0;q<=l;q++){const ce=q/l,pe=ce*p+m,j=Math.sin(pe),z=Math.cos(pe);I.x=G*j,I.y=-k*r+S,I.z=G*z,x.push(I.x,I.y,I.z),w.set(j,P,z).normalize(),g.push(w.x,w.y,w.z),b.push(ce,1-k),N.push(T++)}C.push(N)}for(let E=0;E<l;E++)for(let N=0;N<u;N++){const k=C[N][E],G=C[N+1][E],q=C[N+1][E+1],ce=C[N][E+1];(e>0||N!==0)&&(y.push(k,G,ce),U+=3),(i>0||N!==u-1)&&(y.push(G,q,ce),U+=3)}d.addGroup(_,U,0),_+=U}function B(w){const I=T,U=new ft,P=new ee;let E=0;const N=w===!0?e:i,k=w===!0?1:-1;for(let q=1;q<=l;q++)x.push(0,S*k,0),g.push(0,k,0),b.push(.5,.5),T++;const G=T;for(let q=0;q<=l;q++){const pe=q/l*p+m,j=Math.cos(pe),z=Math.sin(pe);P.x=N*z,P.y=S*k,P.z=N*j,x.push(P.x,P.y,P.z),g.push(0,k,0),U.x=j*.5+.5,U.y=z*.5*k+.5,b.push(U.x,U.y),T++}for(let q=0;q<l;q++){const ce=I+q,pe=G+q;w===!0?y.push(pe,pe+1,ce):y.push(pe+1,pe,ce),E+=3}d.addGroup(_,E,w===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kc extends jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,m=Math.floor(r),p=Math.floor(l),d=m+1,y=p+1,x=e/m,g=i/p,b=[],T=[],C=[],S=[];for(let _=0;_<y;_++){const O=_*g-h;for(let B=0;B<d;B++){const w=B*x-u;T.push(w,-O,0),C.push(0,0,1),S.push(B/m),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<m;O++){const B=O+d*_,w=O+d*(_+1),I=O+1+d*(_+1),U=O+1+d*_;b.push(B,w,U),b.push(w,I,U)}this.setIndex(b),this.setAttribute("position",new Jt(T,3)),this.setAttribute("normal",new Jt(C,3)),this.setAttribute("uv",new Jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qc extends jn{constructor(e=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const m=[],p=[],d=[],y=[];let x=e;const g=(i-e)/l,b=new ee,T=new ft;for(let C=0;C<=l;C++){for(let S=0;S<=r;S++){const _=u+S/r*h;b.x=x*Math.cos(_),b.y=x*Math.sin(_),p.push(b.x,b.y,b.z),d.push(0,0,1),T.x=(b.x/i+1)/2,T.y=(b.y/i+1)/2,y.push(T.x,T.y)}x+=g}for(let C=0;C<l;C++){const S=C*(r+1);for(let _=0;_<r;_++){const O=_+S,B=O,w=O+r+1,I=O+r+2,U=O+1;m.push(B,w,U),m.push(w,I,U)}}this.setIndex(m),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xa extends jn{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:m},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+m,Math.PI);let d=0;const y=[],x=new ee,g=new ee,b=[],T=[],C=[],S=[];for(let _=0;_<=r;_++){const O=[],B=_/r,w=h+B*m,I=e*Math.cos(w),U=Math.sqrt(e*e-I*I);let P=0;_===0&&h===0?P=.5/i:_===r&&p===Math.PI&&(P=-.5/i);for(let E=0;E<=i;E++){const N=E/i,k=l+N*u;x.x=-U*Math.cos(k),x.y=I,x.z=U*Math.sin(k),T.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),S.push(N+P,1-B),O.push(d++)}y.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const B=y[_][O+1],w=y[_][O],I=y[_+1][O],U=y[_+1][O+1];(_!==0||h>0)&&b.push(B,w,U),(_!==r-1||p<Math.PI)&&b.push(w,I,U)}this.setIndex(b),this.setAttribute("position",new Jt(T,3)),this.setAttribute("normal",new Jt(C,3)),this.setAttribute("uv",new Jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jd extends jn{constructor(e=1,i=.4,r=12,l=48,u=Math.PI*2,h=0,m=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:u,thetaStart:h,thetaLength:m},r=Math.floor(r),l=Math.floor(l);const p=[],d=[],y=[],x=[],g=new ee,b=new ee,T=new ee;for(let C=0;C<=r;C++){const S=h+C/r*m;for(let _=0;_<=l;_++){const O=_/l*u;b.x=(e+i*Math.cos(S))*Math.cos(O),b.y=(e+i*Math.cos(S))*Math.sin(O),b.z=i*Math.sin(S),d.push(b.x,b.y,b.z),g.x=e*Math.cos(O),g.y=e*Math.sin(O),T.subVectors(b,g).normalize(),y.push(T.x,T.y,T.z),x.push(_/l),x.push(C/r)}}for(let C=1;C<=r;C++)for(let S=1;S<=l;S++){const _=(l+1)*C+S-1,O=(l+1)*(C-1)+S-1,B=(l+1)*(C-1)+S,w=(l+1)*C+S;p.push(_,O,w),p.push(O,B,w)}this.setIndex(p),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Vs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(vv(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(vv(l[0])){const u=[];for(let h=0,m=l.length;h<m;h++)u[h]=l[h].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Hn(s){const e={};for(let i=0;i<s.length;i++){const r=Vs(s[i]);for(const l in r)e[l]=r[l]}return e}function vv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function M_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const nM={clone:Vs,merge:Hn};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new St().setHex(l.value);break;case"v2":this.uniforms[r].value=new ft().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(l.value);break;case"v4":this.uniforms[r].value=new en().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Or extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ih extends Or{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sM extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oM extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $d extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const zh=new tn,_v=new ee,xv=new ee;class b_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;_v.setFromMatrixPosition(e.matrixWorld),i.position.copy(_v),xv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xv),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ko||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new ee,Dc=new ks,Fi=new ee;class E_ extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(wc,Dc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ee,yv=new ft,Sv=new ft;class fi extends E_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,yv,Sv),i.subVectors(Sv,yv)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(hh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/d,l*=h.width/p,r*=h.height/d}const m=this.filmOffset;m!==0&&(u+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class lM extends b_{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class cM extends $d{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new lM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ep extends E_{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,m=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,m-=y*this.view.offsetY,p=m-y*this.view.height}this.projectionMatrix.makeOrthographic(u,h,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uM extends b_{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mv extends $d{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new uM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class fM extends $d{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ls=-90,Os=1;class hM extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Ls,Os,e,i);l.layers=this.layers,this.add(l);const u=new fi(Ls,Os,e,i);u.layers=this.layers,this.add(u);const h=new fi(Ls,Os,e,i);h.layers=this.layers,this.add(h);const m=new fi(Ls,Os,e,i);m.layers=this.layers,this.add(m);const p=new fi(Ls,Os,e,i);p.layers=this.layers,this.add(p);const d=new fi(Ls,Os,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,m,p]=i;for(const d of i)this.remove(d);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ko)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,m,p,d,y]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(x,g,b),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class dM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bv=new tn;class Ev{constructor(e,i,r=0,l=1/0){this.ray=new x_(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Et("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return bv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bv),this}intersectObject(e,i=!0,r=[]){return Od(e,this,r,i),r.sort(Tv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)Od(e[l],this,r,i);return r.sort(Tv),r}}function Tv(s,e){return s.distance-e.distance}function Od(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let h=0,m=u.length;h<m;h++)Od(u[h],e,i,!0)}}class pM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const rp=class rp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};rp.prototype.isMatrix2=!0;let Av=rp;function Rv(s,e,i,r){const l=mM(r);switch(i){case f_:return s*e;case d_:return s*e/l.components*l.byteLength;case kd:return s*e/l.components*l.byteLength;case Vr:return s*e*2/l.components*l.byteLength;case Xd:return s*e*2/l.components*l.byteLength;case h_:return s*e*3/l.components*l.byteLength;case Ni:return s*e*4/l.components*l.byteLength;case Wd:return s*e*4/l.components*l.byteLength;case Pc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zc:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case id:case rd:return Math.max(s,16)*Math.max(e,8)/4;case nd:case ad:return Math.max(s,8)*Math.max(e,8)/2;case sd:case od:case cd:case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ld:case Hc:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ad:case Rd:case Cd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wd:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gc:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mM(s){switch(s){case hi:case o_:return{byteLength:1,components:1};case Yo:case l_:case Ea:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case Yi:case Hd:case Vi:return{byteLength:4,components:1};case c_:case u_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);function T_(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function gM(s){const e=new WeakMap;function i(m,p){const d=m.array,y=m.usage,x=d.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,d,y),m.onUploadCallback();let b;if(d instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)b=s.HALF_FLOAT;else if(d instanceof Uint16Array)m.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=s.SHORT;else if(d instanceof Uint32Array)b=s.UNSIGNED_INT;else if(d instanceof Int32Array)b=s.INT;else if(d instanceof Int8Array)b=s.BYTE;else if(d instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:m.version,size:x}}function r(m,p,d){const y=p.array,x=p.updateRanges;if(s.bindBuffer(d,m),x.length===0)s.bufferSubData(d,0,y);else{x.sort((b,T)=>b.start-T.start);let g=0;for(let b=1;b<x.length;b++){const T=x[g],C=x[b];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,x[g]=C)}x.length=g+1;for(let b=0,T=x.length;b<T;b++){const C=x[b];s.bufferSubData(d,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(s.deleteBuffer(p.buffer),e.delete(m))}function h(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const y=e.get(m);(!y||y.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const d=e.get(m);if(d===void 0)e.set(m,i(m,p));else if(d.version<m.version){if(d.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,m,p),d.version=m.version}}return{get:l,remove:u,update:h}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
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
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,UM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HM=`#define PI 3.141592653589793
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
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VM=`vec3 transformedNormal = objectNormal;
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
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`uniform sampler2D dfgLUT;
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
}`,gb=`
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rb=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hb=`#ifdef USE_NORMALMAP
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
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nE=`float getShadowMask() {
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
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`#include <common>
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
}`,EE=`#if DEPTH_PACKING == 3200
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
}`,TE=`#define DISTANCE
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
}`,AE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
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
}`,DE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,NE=`uniform vec3 diffuse;
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
}`,LE=`#define LAMBERT
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
}`,OE=`#define LAMBERT
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
}`,PE=`#define MATCAP
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
}`,IE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,BE=`#define NORMAL
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
}`,FE=`#define PHONG
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
}`,HE=`#define PHONG
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
}`,GE=`#define STANDARD
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
}`,VE=`#define STANDARD
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
}`,kE=`#define TOON
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
}`,XE=`#define TOON
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
}`,WE=`uniform float size;
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
}`,qE=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,ZE=`uniform vec3 color;
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
}`,KE=`uniform float rotation;
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
}`,QE=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:vM,alphahash_pars_fragment:_M,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:SM,alphatest_pars_fragment:MM,aomap_fragment:bM,aomap_pars_fragment:EM,batching_pars_vertex:TM,batching_vertex:AM,begin_vertex:RM,beginnormal_vertex:CM,bsdfs:wM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:PM,color_fragment:IM,color_pars_fragment:zM,color_pars_vertex:BM,color_vertex:FM,common:HM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:VM,displacementmap_pars_vertex:kM,displacementmap_vertex:XM,emissivemap_fragment:WM,emissivemap_pars_fragment:qM,colorspace_fragment:YM,colorspace_pars_fragment:ZM,envmap_fragment:KM,envmap_common_pars_fragment:QM,envmap_pars_fragment:jM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:cb,envmap_vertex:$M,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:ab,lightmap_pars_fragment:rb,lights_lambert_fragment:sb,lights_lambert_pars_fragment:ob,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:fb,lights_phong_fragment:hb,lights_phong_pars_fragment:db,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:vb,lights_fragment_end:_b,lightprobes_pars_fragment:xb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:bb,map_fragment:Eb,map_pars_fragment:Tb,map_particle_fragment:Ab,map_particle_pars_fragment:Rb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:wb,morphinstance_vertex:Db,morphcolor_vertex:Ub,morphnormal_vertex:Nb,morphtarget_pars_vertex:Lb,morphtarget_vertex:Ob,normal_fragment_begin:Pb,normal_fragment_maps:Ib,normal_pars_fragment:zb,normal_pars_vertex:Bb,normal_vertex:Fb,normalmap_pars_fragment:Hb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:kb,iridescence_pars_fragment:Xb,opaque_fragment:Wb,packing:qb,premultiplied_alpha_fragment:Yb,project_vertex:Zb,dithering_fragment:Kb,dithering_pars_fragment:Qb,roughnessmap_fragment:jb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:$b,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:aE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:vE,background_frag:_E,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:SE,cube_frag:ME,depth_vert:bE,depth_frag:EE,distance_vert:TE,distance_frag:AE,equirect_vert:RE,equirect_frag:CE,linedashed_vert:wE,linedashed_frag:DE,meshbasic_vert:UE,meshbasic_frag:NE,meshlambert_vert:LE,meshlambert_frag:OE,meshmatcap_vert:PE,meshmatcap_frag:IE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:FE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:VE,meshtoon_vert:kE,meshtoon_frag:XE,points_vert:WE,points_frag:qE,shadow_vert:YE,shadow_frag:ZE,sprite_vert:KE,sprite_frag:QE},ze={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Hn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Hn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Hn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Hn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new St(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Hn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Hn([ze.points,ze.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Hn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Hn([ze.common,ze.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Hn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Hn([ze.sprite,ze.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Hn([ze.common,ze.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Hn([ze.lights,ze.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Uc={r:0,b:0,g:0},jE=new tn,A_=new st;A_.set(-1,0,0,0,1,0,0,0,1);function JE(s,e,i,r,l,u){const h=new St(0);let m=l===!0?0:1,p,d,y=null,x=0,g=null;function b(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){const w=O.backgroundBlurriness>0;B=e.get(B,w)}return B}function T(O){let B=!1;const w=b(O);w===null?S(h,m):w&&w.isColor&&(S(w,1),B=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,B){const w=b(B);w&&(w.isCubeTexture||w.mapping===Zc)?(d===void 0&&(d=new $t(new $o(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Vs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(B.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(A_),d.material.toneMapped=bt.getTransfer(w.colorSpace)!==Bt,(y!==w||x!==w.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,y=w,x=w.version,g=s.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new $t(new Kc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Vs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=bt.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(y!==w||x!==w.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,y=w,x=w.version,g=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function S(O,B){O.getRGB(Uc,M_(s)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,B,u)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,B=1){h.set(O),m=B,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,S(h,m)},render:T,addToRenderList:C,dispose:_}}function $E(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,h=!1;function m(G,q,ce,pe,j){let z=!1;const H=x(G,pe,ce,q);u!==H&&(u=H,d(u.object)),z=b(G,pe,ce,j),z&&T(G,pe,ce,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,w(G,q,ce,pe),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function p(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function y(G){return s.deleteVertexArray(G)}function x(G,q,ce,pe){const j=pe.wireframe===!0;let z=r[q.id];z===void 0&&(z={},r[q.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let $=z[H];$===void 0&&($={},z[H]=$);let ge=$[ce.id];ge===void 0&&(ge={},$[ce.id]=ge);let Ee=ge[j];return Ee===void 0&&(Ee=g(p()),ge[j]=Ee),Ee}function g(G){const q=[],ce=[],pe=[];for(let j=0;j<i;j++)q[j]=0,ce[j]=0,pe[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ce,attributeDivisors:pe,object:G,attributes:{},index:null}}function b(G,q,ce,pe){const j=u.attributes,z=q.attributes;let H=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){const L=j[ge];let K=z[ge];if(K===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;H++}return u.attributesNum!==H||u.index!==pe}function T(G,q,ce,pe){const j={},z=q.attributes;let H=0;const $=ce.getAttributes();for(const ge in $)if($[ge].location>=0){let L=z[ge];L===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(L=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(L=G.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),j[ge]=K,H++}u.attributes=j,u.attributesNum=H,u.index=pe}function C(){const G=u.newAttributes;for(let q=0,ce=G.length;q<ce;q++)G[q]=0}function S(G){_(G,0)}function _(G,q){const ce=u.newAttributes,pe=u.enabledAttributes,j=u.attributeDivisors;ce[G]=1,pe[G]===0&&(s.enableVertexAttribArray(G),pe[G]=1),j[G]!==q&&(s.vertexAttribDivisor(G,q),j[G]=q)}function O(){const G=u.newAttributes,q=u.enabledAttributes;for(let ce=0,pe=q.length;ce<pe;ce++)q[ce]!==G[ce]&&(s.disableVertexAttribArray(ce),q[ce]=0)}function B(G,q,ce,pe,j,z,H){H===!0?s.vertexAttribIPointer(G,q,ce,j,z):s.vertexAttribPointer(G,q,ce,pe,j,z)}function w(G,q,ce,pe){C();const j=pe.attributes,z=ce.getAttributes(),H=q.defaultAttributeValues;for(const $ in z){const ge=z[$];if(ge.location>=0){let Ee=j[$];if(Ee===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Ee=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Ee=G.instanceColor)),Ee!==void 0){const L=Ee.normalized,K=Ee.itemSize,Me=e.get(Ee);if(Me===void 0)continue;const Te=Me.buffer,Oe=Me.type,W=Me.bytesPerElement,de=Oe===s.INT||Oe===s.UNSIGNED_INT||Ee.gpuType===Hd;if(Ee.isInterleavedBufferAttribute){const xe=Ee.data,De=xe.stride,et=Ee.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<ge.locationSize;Ze++)_(ge.location+Ze,xe.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<ge.locationSize;Ze++)S(ge.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ze=0;Ze<ge.locationSize;Ze++)B(ge.location+Ze,K/ge.locationSize,Oe,L,De*W,(et+K/ge.locationSize*Ze)*W,de)}else{if(Ee.isInstancedBufferAttribute){for(let xe=0;xe<ge.locationSize;xe++)_(ge.location+xe,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let xe=0;xe<ge.locationSize;xe++)S(ge.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let xe=0;xe<ge.locationSize;xe++)B(ge.location+xe,K/ge.locationSize,Oe,L,K*W,K/ge.locationSize*xe*W,de)}}else if(H!==void 0){const L=H[$];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(ge.location,L);break;case 3:s.vertexAttrib3fv(ge.location,L);break;case 4:s.vertexAttrib4fv(ge.location,L);break;default:s.vertexAttrib1fv(ge.location,L)}}}}O()}function I(){N();for(const G in r){const q=r[G];for(const ce in q){const pe=q[ce];for(const j in pe){const z=pe[j];for(const H in z)y(z[H].object),delete z[H];delete pe[j]}}delete r[G]}}function U(G){if(r[G.id]===void 0)return;const q=r[G.id];for(const ce in q){const pe=q[ce];for(const j in pe){const z=pe[j];for(const H in z)y(z[H].object),delete z[H];delete pe[j]}}delete r[G.id]}function P(G){for(const q in r){const ce=r[q];for(const pe in ce){const j=ce[pe];if(j[G.id]===void 0)continue;const z=j[G.id];for(const H in z)y(z[H].object),delete z[H];delete j[G.id]}}}function E(G){for(const q in r){const ce=r[q],pe=G.isInstancedMesh===!0?G.id:0,j=ce[pe];if(j!==void 0){for(const z in j){const H=j[z];for(const $ in H)y(H[$].object),delete H[$];delete j[z]}delete ce[pe],Object.keys(ce).length===0&&delete r[q]}}}function N(){k(),h=!0,u!==l&&(u=l,d(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:N,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function eT(s,e,i){let r;function l(p){r=p}function u(p,d){s.drawArrays(r,p,d),i.update(d,r,1)}function h(p,d,y){y!==0&&(s.drawArraysInstanced(r,p,d,y),i.update(d,r,y))}function m(p,d,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,d,0,y);let g=0;for(let b=0;b<y;b++)g+=d[b];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function tT(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ni&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(P){const E=P===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==hi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vi&&!E)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const y=p(d);y!==d&&(nt("WebGLRenderer:",d,"not supported, using",y,"instead."),d=y);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:m,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:w,maxSamples:I,samples:U}}function nT(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Lr,m=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const b=x.length!==0||g||r!==0||l;return l=g,r=x.length,b},this.beginShadows=function(){u=!0,y(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=y(x,g,0)},this.setState=function(x,g,b){const T=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||T===null||T.length===0||u&&!S)u?y(null):d();else{const O=u?0:r,B=O*4;let w=_.clippingState||null;p.value=w,w=y(T,g,B,b);for(let I=0;I!==B;++I)w[I]=i[I];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function d(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(x,g,b,T){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const _=b+C*4,O=g.matrixWorldInverse;m.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let B=0,w=b;B!==C;++B,w+=4)h.copy(x[B]).applyMatrix4(O,m),h.normal.toArray(S,w),S[w+3]=h.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const or=4,Cv=[.125,.215,.35,.446,.526,.582],Ir=20,iT=256,ko=new ep,wv=new St;let Bh=null,Fh=0,Hh=0,Gh=!1;const aT=new ee;class Dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:m=aT}=u;Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,m),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Fh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ea,format:Ni,colorSpace:Vc,depthBuffer:!1},l=Uv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uv(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rT(u)),this._blurMaterial=oT(u,e,i),this._ggxMaterial=sT(u,e,i)}return l}_compileMaterial(e){const i=new $t(new jn,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,r,l,u){const p=new fi(90,1,i,r),d=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,b=x.toneMapping;x.getClearColor(wv),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new $o,new Hr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,_=!0):(S.color.copy(wv),_=!0);for(let B=0;B<6;B++){const w=B%3;w===0?(p.up.set(0,d[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+y[B],u.y,u.z)):w===1?(p.up.set(0,0,d[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+y[B],u.z)):(p.up.set(0,d[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+y[B]));const I=this._cubeSize;Ps(l,w*I,B>2?I:0,I,I),x.setRenderTarget(l),_&&x.render(C,p),x.render(e,p)}x.toneMapping=b,x.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Gr||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const m=u.uniforms;m.envMap.value=e;const p=this._cubeSize;Ps(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,ko)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,m=this._lodMeshes[r];m.material=h;const p=h.uniforms,d=r/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-y*y),g=0+d*1.25,b=x*g,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-or?r-T+or:0),_=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=b,p.mipInt.value=T-i,Ps(u,S,_,3*C,2*C),l.setRenderTarget(u),l.render(m,ko),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-r,Ps(e,S,_,3*C,2*C),l.setRenderTarget(e),l.render(m,ko)}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,m){const p=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const y=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,b=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Ir-1),C=u/T,S=isFinite(u)?1+Math.floor(y*C):Ir;S>Ir&&nt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ir}`);const _=[];let O=0;for(let P=0;P<Ir;++P){const E=P/C,N=Math.exp(-E*E/2);_.push(N),P===0?O+=N:P<S&&(O+=2*N)}for(let P=0;P<_.length;P++)_[P]=_[P]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=h==="latitudinal",m&&(g.poleAxis.value=m);const{_lodMax:B}=this;g.dTheta.value=T,g.mipInt.value=B-r;const w=this._sizeLods[l],I=3*w*(l>B-or?l-B+or:0),U=4*(this._cubeSize-w);Ps(i,I,U,3*w,2*w),p.setRenderTarget(i),p.render(x,ko)}}function rT(s){const e=[],i=[],r=[];let l=s;const u=s-or+1+Cv.length;for(let h=0;h<u;h++){const m=Math.pow(2,l);e.push(m);let p=1/m;h>s-or?p=Cv[h-s+or-1]:h===0&&(p=0),i.push(p);const d=1/(m-2),y=-d,x=1+d,g=[y,y,x,y,x,x,y,y,x,x,y,x],b=6,T=6,C=3,S=2,_=1,O=new Float32Array(C*T*b),B=new Float32Array(S*T*b),w=new Float32Array(_*T*b);for(let U=0;U<b;U++){const P=U%3*2/3-1,E=U>2?0:-1,N=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];O.set(N,C*T*U),B.set(g,S*T*U);const k=[U,U,U,U,U,U];w.set(k,_*T*U)}const I=new jn;I.setAttribute("position",new qi(O,C)),I.setAttribute("uv",new qi(B,S)),I.setAttribute("faceIndex",new qi(w,_)),r.push(new $t(I,null)),l>or&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Uv(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=Zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function sT(s,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function oT(s,e,i){const r=new Float32Array(Ir),l=new ee(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Nv(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Lv(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}class R_ extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new y_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $o(5,5,5),u=new Zi({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Sa});u.uniforms.tEquirect.value=i;const h=new $t(l,u),m=i.minFilter;return i.minFilter===zr&&(i.minFilter=zn),new hM(1,10,this).update(e,h),i.minFilter=m,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}function lT(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,b=!1){return g==null?null:b?h(g):u(g)}function u(g){if(g&&g.isTexture){const b=g.mapping;if(b===ch||b===uh)if(e.has(g)){const T=e.get(g).texture;return m(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new R_(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",d),m(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const b=g.mapping,T=b===ch||b===uh,C=b===Gr||b===Hs;if(T||C){let S=i.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Dv(s)),S=T?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const O=g.image;return T&&O&&O.height>0||C&&O&&p(O)?(r===null&&(r=new Dv(s)),S=T?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",y),S.texture):null}}}return g}function m(g,b){return b===ch?g.mapping=Gr:b===uh&&(g.mapping=Hs),g}function p(g){let b=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&b++;return b===T}function d(g){const b=g.target;b.removeEventListener("dispose",d);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function y(g){const b=g.target;b.removeEventListener("dispose",y);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function cT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zs("WebGLRenderer: "+r+" extension not supported."),l}}}function uT(s,e,i,r){const l={},u=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const b=u.get(g);b&&(e.remove(b),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function m(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function p(x){const g=x.attributes;for(const b in g)e.update(g[b],s.ARRAY_BUFFER)}function d(x){const g=[],b=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(b!==null){const O=b.array;C=b.version;for(let B=0,w=O.length;B<w;B+=3){const I=O[B+0],U=O[B+1],P=O[B+2];g.push(I,U,U,P,P,I)}}else{const O=T.array;C=T.version;for(let B=0,w=O.length/3-1;B<w;B+=3){const I=B+0,U=B+1,P=B+2;g.push(I,U,U,P,P,I)}}const S=new(T.count>=65535?__:v_)(g,1);S.version=C;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function y(x){const g=u.get(x);if(g){const b=x.index;b!==null&&g.version<b.version&&d(x)}else d(x);return u.get(x)}return{get:m,update:p,getWireframeAttribute:y}}function fT(s,e,i){let r;function l(x){r=x}let u,h;function m(x){u=x.type,h=x.bytesPerElement}function p(x,g){s.drawElements(r,g,u,x*h),i.update(g,r,1)}function d(x,g,b){b!==0&&(s.drawElementsInstanced(r,g,u,x*h,b),i.update(g,r,b))}function y(x,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,x,0,b);let C=0;for(let S=0;S<b;S++)C+=g[S];i.update(C,r,1)}this.setMode=l,this.setIndex=m,this.render=p,this.renderInstances=d,this.renderMultiDraw=y}function hT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,m){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=m*(u/3);break;case s.LINES:i.lines+=m*(u/2);break;case s.LINE_STRIP:i.lines+=m*(u-1);break;case s.LINE_LOOP:i.lines+=m*u;break;case s.POINTS:i.points+=m*u;break;default:Et("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function dT(s,e,i){const r=new WeakMap,l=new en;function u(h,m,p){const d=h.morphTargetInfluences,y=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,x=y!==void 0?y.length:0;let g=r.get(m);if(g===void 0||g.count!==x){let k=function(){E.dispose(),r.delete(m),m.removeEventListener("dispose",k)};var b=k;g!==void 0&&g.texture.dispose();const T=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,S=m.morphAttributes.color!==void 0,_=m.morphAttributes.position||[],O=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let w=0;T===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let I=m.attributes.position.count*w,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*U*4*x),E=new m_(P,I,U,x);E.type=Vi,E.needsUpdate=!0;const N=w*4;for(let G=0;G<x;G++){const q=_[G],ce=O[G],pe=B[G],j=I*U*4*G;for(let z=0;z<q.count;z++){const H=z*N;T===!0&&(l.fromBufferAttribute(q,z),P[j+H+0]=l.x,P[j+H+1]=l.y,P[j+H+2]=l.z,P[j+H+3]=0),C===!0&&(l.fromBufferAttribute(ce,z),P[j+H+4]=l.x,P[j+H+5]=l.y,P[j+H+6]=l.z,P[j+H+7]=0),S===!0&&(l.fromBufferAttribute(pe,z),P[j+H+8]=l.x,P[j+H+9]=l.y,P[j+H+10]=l.z,P[j+H+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new ft(I,U)},r.set(m,g),m.addEventListener("dispose",k)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let S=0;S<d.length;S++)T+=d[S];const C=m.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function pT(s,e,i,r,l){let u=new WeakMap;function h(d){const y=l.render.frame,x=d.geometry,g=e.get(d,x);if(u.get(g)!==y&&(e.update(g),u.set(g,y)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),u.get(d)!==y&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),u.set(d,y))),d.isSkinnedMesh){const b=d.skeleton;u.get(b)!==y&&(b.update(),u.set(b,y))}return g}function m(){u=new WeakMap}function p(d){const y=d.target;y.removeEventListener("dispose",p),r.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:h,dispose:m}}const mT={[e_]:"LINEAR_TONE_MAPPING",[t_]:"REINHARD_TONE_MAPPING",[n_]:"CINEON_TONE_MAPPING",[Fd]:"ACES_FILMIC_TONE_MAPPING",[a_]:"AGX_TONE_MAPPING",[r_]:"NEUTRAL_TONE_MAPPING",[i_]:"CUSTOM_TONE_MAPPING"};function gT(s,e,i,r,l,u){const h=new Wi(e,i,{type:s,depthBuffer:l,stencilBuffer:u,samples:r?4:0,depthTexture:l?new Gs(e,i):void 0}),m=new Wi(e,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),p=new jn;p.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const d=new rM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new $t(p,d),x=new ep(-1,1,1,-1,0,1);let g=null,b=null,T=!1,C,S=null,_=[],O=!1;this.setSize=function(B,w){h.setSize(B,w),m.setSize(B,w);for(let I=0;I<_.length;I++){const U=_[I];U.setSize&&U.setSize(B,w)}},this.setEffects=function(B){_=B,O=_.length>0&&_[0].isRenderPass===!0;const w=h.width,I=h.height;for(let U=0;U<_.length;U++){const P=_[U];P.setSize&&P.setSize(w,I)}},this.begin=function(B,w){if(T||B.toneMapping===Xi&&_.length===0)return!1;if(S=w,w!==null){const I=w.width,U=w.height;(h.width!==I||h.height!==U)&&this.setSize(I,U)}return O===!1&&B.setRenderTarget(h),C=B.toneMapping,B.toneMapping=Xi,!0},this.hasRenderPass=function(){return O},this.end=function(B,w){B.toneMapping=C,T=!0;let I=h,U=m;for(let P=0;P<_.length;P++){const E=_[P];if(E.enabled!==!1&&(E.render(B,U,I,w),E.needsSwap!==!1)){const N=I;I=U,U=N}}if(g!==B.outputColorSpace||b!==B.toneMapping){g=B.outputColorSpace,b=B.toneMapping,d.defines={},bt.getTransfer(g)===Bt&&(d.defines.SRGB_TRANSFER="");const P=mT[b];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,B.setRenderTarget(S),B.render(y,x),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),m.dispose(),p.dispose(),d.dispose()}}const C_=new Gn,Pd=new Gs(1,1),w_=new m_,D_=new IS,U_=new y_,Ov=[],Pv=[],Iv=new Float32Array(16),zv=new Float32Array(9),Bv=new Float32Array(4);function Xs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=Ov[l];if(u===void 0&&(u=new Float32Array(l),Ov[l]=u),e!==0){r.toArray(u,0);for(let h=1,m=0;h!==e;++h)m+=i,s[h].toArray(u,m)}return u}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Jc(s,e){let i=Pv[e];i===void 0&&(i=new Int32Array(e),Pv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function vT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function _T(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function xT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function yT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function ST(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;Bv.set(r),s.uniformMatrix2fv(this.addr,!1,Bv),Mn(i,r)}}function MT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;zv.set(r),s.uniformMatrix3fv(this.addr,!1,zv),Mn(i,r)}}function bT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;Iv.set(r),s.uniformMatrix4fv(this.addr,!1,Iv),Mn(i,r)}}function ET(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function TT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function AT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function RT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function CT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function wT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function DT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function UT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function NT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Pd.compareFunction=i.isReversedDepthBuffer()?Yd:qd,u=Pd):u=C_,i.setTexture2D(e||u,l)}function LT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||D_,l)}function OT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||U_,l)}function PT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||w_,l)}function IT(s){switch(s){case 5126:return vT;case 35664:return _T;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return bT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return AT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}function zT(s,e){s.uniform1fv(this.addr,e)}function BT(s,e){const i=Xs(e,this.size,2);s.uniform2fv(this.addr,i)}function FT(s,e){const i=Xs(e,this.size,3);s.uniform3fv(this.addr,i)}function HT(s,e){const i=Xs(e,this.size,4);s.uniform4fv(this.addr,i)}function GT(s,e){const i=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function VT(s,e){const i=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function kT(s,e){const i=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function XT(s,e){s.uniform1iv(this.addr,e)}function WT(s,e){s.uniform2iv(this.addr,e)}function qT(s,e){s.uniform3iv(this.addr,e)}function YT(s,e){s.uniform4iv(this.addr,e)}function ZT(s,e){s.uniform1uiv(this.addr,e)}function KT(s,e){s.uniform2uiv(this.addr,e)}function QT(s,e){s.uniform3uiv(this.addr,e)}function jT(s,e){s.uniform4uiv(this.addr,e)}function JT(s,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Sn(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));let h;this.type===s.SAMPLER_2D_SHADOW?h=Pd:h=C_;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||h,u[m])}function $T(s,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Sn(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||D_,u[h])}function e1(s,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Sn(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||U_,u[h])}function t1(s,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Sn(r,u)||(s.uniform1iv(this.addr,u),Mn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||w_,u[h])}function n1(s){switch(s){case 5126:return zT;case 35664:return BT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}class i1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=IT(i.type)}}class a1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=n1(i.type)}}class r1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const m=l[u];m.setValue(e,i[m.id],r)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Fv(s,e){s.seq.push(e),s.map[e.id]=e}function s1(s,e,i){const r=s.name,l=r.length;for(Vh.lastIndex=0;;){const u=Vh.exec(r),h=Vh.lastIndex;let m=u[1];const p=u[2]==="]",d=u[3];if(p&&(m=m|0),d===void 0||d==="["&&h+2===l){Fv(i,d===void 0?new i1(m,s,e):new a1(m,s,e));break}else{let x=i.map[m];x===void 0&&(x=new r1(m),Fv(i,x)),i=x}}}class Fc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const m=e.getActiveUniform(i,h),p=e.getUniformLocation(i,m.name);s1(m,p,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const m=i[u],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Hv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const o1=37297;let l1=0;function c1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const m=h+1;r.push(`${m===e?">":" "} ${m}: ${i[h]}`)}return r.join(`
`)}const Gv=new st;function u1(s){bt._getMatrix(Gv,bt.workingColorSpace,s);const e=`mat3( ${Gv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(s)){case kc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const m=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+c1(s.getShaderSource(e),m)}else return u}function f1(s,e){const i=u1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const h1={[e_]:"Linear",[t_]:"Reinhard",[n_]:"Cineon",[Fd]:"ACESFilmic",[a_]:"AgX",[r_]:"Neutral",[i_]:"Custom"};function d1(s,e){const i=h1[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new ee;function p1(){bt.getLuminanceCoefficients(Nc);const s=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function g1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function v1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let m=1;u.type===s.FLOAT_MAT2&&(m=2),u.type===s.FLOAT_MAT3&&(m=3),u.type===s.FLOAT_MAT4&&(m=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:m}}return i}function qo(s){return s!==""}function kv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(_1,y1)}const x1=new Map;function y1(s,e){let i=ut[e];if(i===void 0){const r=x1.get(e);if(r!==void 0)i=ut[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Id(i)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wv(s){return s.replace(S1,M1)}function M1(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function qv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const b1={[Oc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function E1(s){return b1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T1={[Gr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function A1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":T1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const R1={[Hs]:"ENVMAP_MODE_REFRACTION"};function C1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":R1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w1={[$v]:"ENVMAP_BLENDING_MULTIPLY",[mS]:"ENVMAP_BLENDING_MIX",[gS]:"ENVMAP_BLENDING_ADD"};function D1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":w1[s.combine]||"ENVMAP_BLENDING_NONE"}function U1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function N1(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,m=i.fragmentShader;const p=E1(i),d=A1(i),y=C1(i),x=D1(i),g=U1(i),b=m1(i),T=g1(u),C=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(S=[qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+y:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ut.tonemapping_pars_fragment:"",i.toneMapping!==Xi?d1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,f1("linearToOutputTexel",i.outputColorSpace),p1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),h=Id(h),h=kv(h,i),h=Xv(h,i),m=Id(m),m=kv(m,i),m=Xv(m,i),h=Wv(h),m=Wv(m),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const B=O+S+h,w=O+_+m,I=Hv(l,l.VERTEX_SHADER,B),U=Hv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,I),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(G){if(s.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(U)||"",j=q.trim(),z=ce.trim(),H=pe.trim();let $=!0,ge=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,I,U);else{const Ee=Vv(l,I,"vertex"),L=Vv(l,U,"fragment");Et("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+Ee+`
`+L)}else j!==""?nt("WebGLProgram: Program Info Log:",j):(z===""||H==="")&&(ge=!1);ge&&(G.diagnostics={runnable:$,programLog:j,vertexShader:{log:z,prefix:S},fragmentShader:{log:H,prefix:_}})}l.deleteShader(I),l.deleteShader(U),E=new Fc(l,C),N=v1(l,C)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(C,o1)),k},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=U,this}let L1=0;class O1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new P1(e),i.set(e,r)),r}}class P1{constructor(e){this.id=L1++,this.code=e,this.usedTimes=0}}function I1(s){return s===Vr||s===Hc||s===Gc}function z1(s,e,i,r,l,u){const h=new Kd,m=new O1,p=new Set,d=[],y=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return p.add(E),E===0?"uv":`uv${E}`}function C(E,N,k,G,q,ce){const pe=G.fog,j=q.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,$=e.get(E.envMap||z,H),ge=$&&$.mapping===Zc?$.image.height:null,Ee=b[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const L=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,K=L!==void 0?L.length:0;let Me=0;j.morphAttributes.position!==void 0&&(Me=1),j.morphAttributes.normal!==void 0&&(Me=2),j.morphAttributes.color!==void 0&&(Me=3);let Te,Oe,W,de;if(Ee){const Ve=Gi[Ee];Te=Ve.vertexShader,Oe=Ve.fragmentShader}else{Te=E.vertexShader,Oe=E.fragmentShader;const Ve=m.getVertexShaderStage(E),Zt=m.getFragmentShaderStage(E);m.update(E,Ve,Zt),W=Ve.id,de=Zt.id}const xe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),et=q.isInstancedMesh===!0,Ze=q.isBatchedMesh===!0,Dt=!!E.map,at=!!E.matcap,dt=!!$,ht=!!E.aoMap,pt=!!E.lightMap,nn=!!E.bumpMap&&E.wireframe===!1,an=!!E.normalMap,rn=!!E.displacementMap,cn=!!E.emissiveMap,Wt=!!E.metalnessMap,sn=!!E.roughnessMap,Z=E.anisotropy>0,Ft=E.clearcoat>0,Ct=E.dispersion>0,D=E.iridescence>0,M=E.sheen>0,J=E.transmission>0,re=Z&&!!E.anisotropyMap,fe=Ft&&!!E.clearcoatMap,Ae=Ft&&!!E.clearcoatNormalMap,Ue=Ft&&!!E.clearcoatRoughnessMap,ue=D&&!!E.iridescenceMap,he=D&&!!E.iridescenceThicknessMap,Ce=M&&!!E.sheenColorMap,Fe=M&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Ne=!!E.specularColorMap,Qe=!!E.specularIntensityMap,je=J&&!!E.transmissionMap,it=J&&!!E.thicknessMap,X=!!E.gradientMap,Re=!!E.alphaMap,_e=E.alphaTest>0,we=!!E.alphaHash,Be=!!E.extensions;let be=Xi;E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(be=s.toneMapping);const qe={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:Oe,defines:E.defines,customVertexShaderID:W,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&q._colorsTexture!==null,instancing:et,instancingColor:et&&q.instanceColor!==null,instancingMorph:et&&q.morphTexture!==null,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Dt,matcap:at,envMap:dt,envMapMode:dt&&$.mapping,envMapCubeUVHeight:ge,aoMap:ht,lightMap:pt,bumpMap:nn,normalMap:an,displacementMap:rn,emissiveMap:cn,normalMapObjectSpace:an&&E.normalMapType===xS,normalMapTangentSpace:an&&E.normalMapType===Nd,packedNormalMap:an&&E.normalMapType===Nd&&I1(E.normalMap.format),metalnessMap:Wt,roughnessMap:sn,anisotropy:Z,anisotropyMap:re,clearcoat:Ft,clearcoatMap:fe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,dispersion:Ct,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:M,sheenColorMap:Ce,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Ne,specularIntensityMap:Qe,transmission:J,transmissionMap:je,thicknessMap:it,gradientMap:X,opaque:E.transparent===!1&&E.blending===Is&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:_e,alphaHash:we,combine:E.combine,mapUv:Dt&&T(E.map.channel),aoMapUv:ht&&T(E.aoMap.channel),lightMapUv:pt&&T(E.lightMap.channel),bumpMapUv:nn&&T(E.bumpMap.channel),normalMapUv:an&&T(E.normalMap.channel),displacementMapUv:rn&&T(E.displacementMap.channel),emissiveMapUv:cn&&T(E.emissiveMap.channel),metalnessMapUv:Wt&&T(E.metalnessMap.channel),roughnessMapUv:sn&&T(E.roughnessMap.channel),anisotropyMapUv:re&&T(E.anisotropyMap.channel),clearcoatMapUv:fe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(E.sheenRoughnessMap.channel),specularMapUv:Pe&&T(E.specularMap.channel),specularColorMapUv:Ne&&T(E.specularColorMap.channel),specularIntensityMapUv:Qe&&T(E.specularIntensityMap.channel),transmissionMapUv:je&&T(E.transmissionMap.channel),thicknessMapUv:it&&T(E.thicknessMap.channel),alphaMapUv:Re&&T(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(an||Z),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(Dt||Re),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&an===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Me,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===Bt,decodeVideoTextureEmissive:cn&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Un,flipSided:E.side===Qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=p.has(1),qe.vertexUv2s=p.has(2),qe.vertexUv3s=p.has(3),p.clear(),qe}function S(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)N.push(k),N.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(_(N,E),O(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function _(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function O(E,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),N.packedNormalMap&&h.enable(22),N.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),N.numLightProbeGrids>0&&h.enable(22),N.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function B(E){const N=b[E.type];let k;if(N){const G=Gi[N];k=nM.clone(G.uniforms)}else k=E.uniforms;return k}function w(E,N){let k=y.get(N);return k!==void 0?++k.usedTimes:(k=new N1(s,N,E,l),d.push(k),y.set(N,k)),k}function I(E){if(--E.usedTimes===0){const N=d.indexOf(E);d[N]=d[d.length-1],d.pop(),y.delete(E.cacheKey),E.destroy()}}function U(E){m.remove(E)}function P(){m.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:B,acquireProgram:w,releaseProgram:I,releaseShaderCache:U,programs:d,dispose:P}}function B1(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let m=s.get(h);return m===void 0&&(m={},s.set(h,m)),m}function r(h){s.delete(h)}function l(h,m,p){s.get(h)[m]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function F1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Yv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function m(g,b,T,C,S,_){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:b,material:T,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:_},s[e]=O):(O.id=g.id,O.object=g,O.geometry=b,O.material=T,O.materialVariant=h(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=S,O.group=_),e++,O}function p(g,b,T,C,S,_){const O=m(g,b,T,C,S,_);T.transmission>0?r.push(O):T.transparent===!0?l.push(O):i.push(O)}function d(g,b,T,C,S,_){const O=m(g,b,T,C,S,_);T.transmission>0?r.unshift(O):T.transparent===!0?l.unshift(O):i.unshift(O)}function y(g,b,T){i.length>1&&i.sort(g||F1),r.length>1&&r.sort(b||Yv),l.length>1&&l.sort(b||Yv),T&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,b=s.length;g<b;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:d,finish:x,sort:y}}function H1(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new Zv,s.set(r,[h])):l>=u.length?(h=new Zv,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function G1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new St};break;case"SpotLight":i={position:new ee,direction:new ee,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=i,i}}}function V1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let k1=0;function X1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function W1(s){const e=new G1,i=V1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ee);const l=new ee,u=new tn,h=new tn;function m(d){let y=0,x=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let b=0,T=0,C=0,S=0,_=0,O=0,B=0,w=0,I=0,U=0,P=0;d.sort(X1);for(let N=0,k=d.length;N<k;N++){const G=d[N],q=G.color,ce=G.intensity,pe=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Vr?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)y+=q.r*ce,x+=q.g*ce,g+=q.b*ce;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],ce);P++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[b]=$,r.directionalShadowMap[b]=j,r.directionalShadowMatrix[b]=G.shadow.matrix,O++}r.directional[b]=z,b++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(q).multiplyScalar(ce),z.distance=pe,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[C]=z;const H=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,H.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[C]=H.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=j,w++}C++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(q).multiplyScalar(ce),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=z,S++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[T]=$,r.pointShadowMap[T]=j,r.pointShadowMatrix[T]=G.shadow.matrix,B++}r.point[T]=z,T++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(ce),z.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[_]=z,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==b||E.pointLength!==T||E.spotLength!==C||E.rectAreaLength!==S||E.hemiLength!==_||E.numDirectionalShadows!==O||E.numPointShadows!==B||E.numSpotShadows!==w||E.numSpotMaps!==I||E.numLightProbes!==P)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=w+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=P,E.directionalLength=b,E.pointLength=T,E.spotLength=C,E.rectAreaLength=S,E.hemiLength=_,E.numDirectionalShadows=O,E.numPointShadows=B,E.numSpotShadows=w,E.numSpotMaps=I,E.numLightProbes=P,r.version=k1++)}function p(d,y){let x=0,g=0,b=0,T=0,C=0;const S=y.matrixWorldInverse;for(let _=0,O=d.length;_<O;_++){const B=d[_];if(B.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),x++}else if(B.isSpotLight){const w=r.spot[b];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),b++}else if(B.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(S),h.identity(),u.copy(B.matrixWorld),u.premultiply(S),h.extractRotation(u),w.halfWidth.set(B.width*.5,0,0),w.halfHeight.set(0,B.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(B.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(S),g++}else if(B.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(B.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:m,setupView:p,state:r}}function Kv(s){const e=new W1(s),i=[],r=[],l=[];function u(g){x.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function m(g){r.push(g)}function p(g){l.push(g)}function d(){e.setup(i)}function y(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:d,setupLightsView:y,pushLight:h,pushShadow:m,pushLightProbeGrid:p}}function q1(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let m;return h===void 0?(m=new Kv(s),e.set(l,[m])):u>=h.length?(m=new Kv(s),h.push(m)):m=h[u],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`,K1=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],Q1=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Qv=new tn,Xo=new ee,kh=new ee;function j1(s,e,i){let r=new jd;const l=new ft,u=new ft,h=new en,m=new sM,p=new oM,d={},y=i.maxTextureSize,x={[ba]:Qn,[Qn]:ba,[Un]:Un},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Y1,fragmentShader:Z1}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const T=new jn;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $t(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let _=this.type;this.render=function(U,P,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;this.type===Qy&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const N=s.getRenderTarget(),k=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Sa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ce=_!==this.type;ce&&P.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(j=>j.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,j=U.length;pe<j;pe++){const z=U[pe],H=z.shadow;if(H===void 0){nt("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();l.multiply($),u.copy(H.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(u.x=Math.floor(y/$.x),l.x=u.x*$.x,H.mapSize.x=u.x),l.y>y&&(u.y=Math.floor(y/$.y),l.y=u.y*$.y,H.mapSize.y=u.y));const ge=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wo){if(z.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Vr,type:Ea,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Gs(l.x,l.y,Vi),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ta,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else z.isPointLight?(H.map=new R_(l.x),H.map.depthTexture=new eM(l.x,Yi)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new Gs(l.x,l.y,Yi)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ta,this.type===Oc?(H.map.depthTexture.compareFunction=ge?Yd:qd,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn);H.camera.updateProjectionMatrix()}const Ee=H.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Ee;L++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,L),s.clear();else{L===0&&(s.setRenderTarget(H.map),s.clear());const K=H.getViewport(L);h.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),q.viewport(h)}if(z.isPointLight){const K=H.camera,Me=H.matrix,Te=z.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),Xo.setFromMatrixPosition(z.matrixWorld),K.position.copy(Xo),kh.copy(K.position),kh.add(K1[L]),K.up.copy(Q1[L]),K.lookAt(kh),K.updateMatrixWorld(),Me.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Qv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Qv,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),w(P,E,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Wo&&O(H,E),H.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(N,k,G)};function O(U,P){const E=e.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Wi(l.x,l.y,{format:Vr,type:Ea})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(P,null,E,g,C,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value=U.mapSize,b.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(P,null,E,b,C,null)}function B(U,P,E,N){let k=null;const G=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)k=G;else if(k=E.isPointLight===!0?p:m,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const q=k.uuid,ce=P.uuid;let pe=d[q];pe===void 0&&(pe={},d[q]=pe);let j=pe[ce];j===void 0&&(j=k.clone(),pe[ce]=j,P.addEventListener("dispose",I)),k=j}if(k.visible=P.visible,k.wireframe=P.wireframe,N===Wo?k.side=P.shadowSide!==null?P.shadowSide:P.side:k.side=P.shadowSide!==null?P.shadowSide:x[P.side],k.alphaMap=P.alphaMap,k.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,k.map=P.map,k.clipShadows=P.clipShadows,k.clippingPlanes=P.clippingPlanes,k.clipIntersection=P.clipIntersection,k.displacementMap=P.displacementMap,k.displacementScale=P.displacementScale,k.displacementBias=P.displacementBias,k.wireframeLinewidth=P.wireframeLinewidth,k.linewidth=P.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=s.properties.get(k);q.light=E}return k}function w(U,P,E,N,k){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===Wo)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const ce=e.update(U),pe=U.material;if(Array.isArray(pe)){const j=ce.groups;for(let z=0,H=j.length;z<H;z++){const $=j[z],ge=pe[$.materialIndex];if(ge&&ge.visible){const Ee=B(U,ge,N,k);U.onBeforeShadow(s,U,P,E,ce,Ee,$),s.renderBufferDirect(E,null,ce,Ee,U,$),U.onAfterShadow(s,U,P,E,ce,Ee,$)}}}else if(pe.visible){const j=B(U,pe,N,k);U.onBeforeShadow(s,U,P,E,ce,j,null),s.renderBufferDirect(E,null,ce,j,U,null),U.onAfterShadow(s,U,P,E,ce,j,null)}}const q=U.children;for(let ce=0,pe=q.length;ce<pe;ce++)w(q[ce],P,E,N,k)}function I(U){U.target.removeEventListener("dispose",I);for(const E in d){const N=d[E],k=U.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function J1(s,e){function i(){let X=!1;const Re=new en;let _e=null;const we=new en(0,0,0,0);return{setMask:function(Be){_e!==Be&&!X&&(s.colorMask(Be,Be,Be,Be),_e=Be)},setLocked:function(Be){X=Be},setClear:function(Be,be,qe,Ve,Zt){Zt===!0&&(Be*=Ve,be*=Ve,qe*=Ve),Re.set(Be,be,qe,Ve),we.equals(Re)===!1&&(s.clearColor(Be,be,qe,Ve),we.copy(Re))},reset:function(){X=!1,_e=null,we.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,_e=null,we=null,Be=null;return{setReversed:function(be){if(Re!==be){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Ve=Be;Be=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(be){be?xe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(be){_e!==be&&!X&&(s.depthMask(be),_e=be)},setFunc:function(be){if(Re&&(be=wS[be]),we!==be){switch(be){case Yh:s.depthFunc(s.NEVER);break;case Zh:s.depthFunc(s.ALWAYS);break;case Kh:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case Qh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Jh:s.depthFunc(s.GREATER);break;case $h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=be}},setLocked:function(be){X=be},setClear:function(be){Be!==be&&(Be=be,Re&&(be=1-be),s.clearDepth(be))},reset:function(){X=!1,_e=null,we=null,Be=null,Re=!1}}}function l(){let X=!1,Re=null,_e=null,we=null,Be=null,be=null,qe=null,Ve=null,Zt=null;return{setTest:function(Nt){X||(Nt?xe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Nt){Re!==Nt&&!X&&(s.stencilMask(Nt),Re=Nt)},setFunc:function(Nt,Jn,$n){(_e!==Nt||we!==Jn||Be!==$n)&&(s.stencilFunc(Nt,Jn,$n),_e=Nt,we=Jn,Be=$n)},setOp:function(Nt,Jn,$n){(be!==Nt||qe!==Jn||Ve!==$n)&&(s.stencilOp(Nt,Jn,$n),be=Nt,qe=Jn,Ve=$n)},setLocked:function(Nt){X=Nt},setClear:function(Nt){Zt!==Nt&&(s.clearStencil(Nt),Zt=Nt)},reset:function(){X=!1,Re=null,_e=null,we=null,Be=null,be=null,qe=null,Ve=null,Zt=null}}}const u=new i,h=new r,m=new l,p=new WeakMap,d=new WeakMap;let y={},x={},g={},b=new WeakMap,T=[],C=null,S=!1,_=null,O=null,B=null,w=null,I=null,U=null,P=null,E=new St(0,0,0),N=0,k=!1,G=null,q=null,ce=null,pe=null,j=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=$>=1):ge.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=$>=2);let Ee=null,L={};const K=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Te=new en().fromArray(K),Oe=new en().fromArray(Me);function W(X,Re,_e,we){const Be=new Uint8Array(4),be=s.createTexture();s.bindTexture(X,be),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<_e;qe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Re+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return be}const de={};de[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),m.setClear(0),xe(s.DEPTH_TEST),h.setFunc(Fs),nn(!1),an(Z0),xe(s.CULL_FACE),ht(Sa);function xe(X){y[X]!==!0&&(s.enable(X),y[X]=!0)}function De(X){y[X]!==!1&&(s.disable(X),y[X]=!1)}function et(X,Re){return g[X]!==Re?(s.bindFramebuffer(X,Re),g[X]=Re,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(X,Re){let _e=T,we=!1;if(X){_e=b.get(Re),_e===void 0&&(_e=[],b.set(Re,_e));const Be=X.textures;if(_e.length!==Be.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let be=0,qe=Be.length;be<qe;be++)_e[be]=s.COLOR_ATTACHMENT0+be;_e.length=Be.length,we=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,we=!0);we&&s.drawBuffers(_e)}function Dt(X){return C!==X?(s.useProgram(X),C=X,!0):!1}const at={[Pr]:s.FUNC_ADD,[Jy]:s.FUNC_SUBTRACT,[$y]:s.FUNC_REVERSE_SUBTRACT};at[eS]=s.MIN,at[tS]=s.MAX;const dt={[nS]:s.ZERO,[iS]:s.ONE,[aS]:s.SRC_COLOR,[Wh]:s.SRC_ALPHA,[uS]:s.SRC_ALPHA_SATURATE,[lS]:s.DST_COLOR,[sS]:s.DST_ALPHA,[rS]:s.ONE_MINUS_SRC_COLOR,[qh]:s.ONE_MINUS_SRC_ALPHA,[cS]:s.ONE_MINUS_DST_COLOR,[oS]:s.ONE_MINUS_DST_ALPHA,[fS]:s.CONSTANT_COLOR,[hS]:s.ONE_MINUS_CONSTANT_COLOR,[dS]:s.CONSTANT_ALPHA,[pS]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(X,Re,_e,we,Be,be,qe,Ve,Zt,Nt){if(X===Sa){S===!0&&(De(s.BLEND),S=!1);return}if(S===!1&&(xe(s.BLEND),S=!0),X!==jy){if(X!==_||Nt!==k){if((O!==Pr||I!==Pr)&&(s.blendEquation(s.FUNC_ADD),O=Pr,I=Pr),Nt)switch(X){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K0:s.blendFunc(s.ONE,s.ONE);break;case Q0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Q0:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}B=null,w=null,U=null,P=null,E.set(0,0,0),N=0,_=X,k=Nt}return}Be=Be||Re,be=be||_e,qe=qe||we,(Re!==O||Be!==I)&&(s.blendEquationSeparate(at[Re],at[Be]),O=Re,I=Be),(_e!==B||we!==w||be!==U||qe!==P)&&(s.blendFuncSeparate(dt[_e],dt[we],dt[be],dt[qe]),B=_e,w=we,U=be,P=qe),(Ve.equals(E)===!1||Zt!==N)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Zt),E.copy(Ve),N=Zt),_=X,k=!1}function pt(X,Re){X.side===Un?De(s.CULL_FACE):xe(s.CULL_FACE);let _e=X.side===Qn;Re&&(_e=!_e),nn(_e),X.blending===Is&&X.transparent===!1?ht(Sa):ht(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const we=X.stencilWrite;m.setTest(we),we&&(m.setMask(X.stencilWriteMask),m.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),m.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),cn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function nn(X){G!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),G=X)}function an(X){X!==Zy?(xe(s.CULL_FACE),X!==q&&(X===Z0?s.cullFace(s.BACK):X===Ky?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),q=X}function rn(X){X!==ce&&(H&&s.lineWidth(X),ce=X)}function cn(X,Re,_e){X?(xe(s.POLYGON_OFFSET_FILL),(pe!==Re||j!==_e)&&(pe=Re,j=_e,h.getReversed()&&(Re=-Re),s.polygonOffset(Re,_e))):De(s.POLYGON_OFFSET_FILL)}function Wt(X){X?xe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function sn(X){X===void 0&&(X=s.TEXTURE0+z-1),Ee!==X&&(s.activeTexture(X),Ee=X)}function Z(X,Re,_e){_e===void 0&&(Ee===null?_e=s.TEXTURE0+z-1:_e=Ee);let we=L[_e];we===void 0&&(we={type:void 0,texture:void 0},L[_e]=we),(we.type!==X||we.texture!==Re)&&(Ee!==_e&&(s.activeTexture(_e),Ee=_e),s.bindTexture(X,Re||de[X]),we.type=X,we.texture=Re)}function Ft(){const X=L[Ee];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function M(){try{s.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function J(){try{s.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ae(){try{s.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ue(){try{s.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function ue(){try{s.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function he(){try{s.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ce(X){return x[X]!==void 0?x[X]:s.getParameter(X)}function Fe(X,Re){x[X]!==Re&&(s.pixelStorei(X,Re),x[X]=Re)}function Pe(X){Te.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function Ne(X){Oe.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Oe.copy(X))}function Qe(X,Re){let _e=d.get(Re);_e===void 0&&(_e=new WeakMap,d.set(Re,_e));let we=_e.get(X);we===void 0&&(we=s.getUniformBlockIndex(Re,X.name),_e.set(X,we))}function je(X,Re){const we=d.get(Re).get(X);p.get(Re)!==we&&(s.uniformBlockBinding(Re,we,X.__bindingPointIndex),p.set(Re,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},x={},Ee=null,L={},g={},b=new WeakMap,T=[],C=null,S=!1,_=null,O=null,B=null,w=null,I=null,U=null,P=null,E=new St(0,0,0),N=0,k=!1,G=null,q=null,ce=null,pe=null,j=null,Te.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),m.reset()}return{buffers:{color:u,depth:h,stencil:m},enable:xe,disable:De,bindFramebuffer:et,drawBuffers:Ze,useProgram:Dt,setBlending:ht,setMaterial:pt,setFlipSided:nn,setCullFace:an,setLineWidth:rn,setPolygonOffset:cn,setScissorTest:Wt,activeTexture:sn,bindTexture:Z,unbindTexture:Ft,compressedTexImage2D:Ct,compressedTexImage3D:D,texImage2D:ue,texImage3D:he,pixelStorei:Fe,getParameter:Ce,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Pe,viewport:Ne,reset:it}}function $1(s,e,i,r,l,u,h){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ft,y=new WeakMap,x=new Set;let g;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,M){return T?new OffscreenCanvas(D,M):Xc("canvas")}function S(D,M,J){let re=1;const fe=Ct(D);if((fe.width>J||fe.height>J)&&(re=J/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ae=Math.floor(re*fe.width),Ue=Math.floor(re*fe.height);g===void 0&&(g=C(Ae,Ue));const ue=M?C(Ae,Ue):g;return ue.width=Ae,ue.height=Ue,ue.getContext("2d").drawImage(D,0,0,Ae,Ue),nt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ae+"x"+Ue+")."),ue}else return"data"in D&&nt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function _(D){return D.generateMipmaps}function O(D){s.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(D,M,J,re,fe,Ae=!1){if(D!==null){if(s[D]!==void 0)return s[D];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;re&&(Ue=e.get("EXT_texture_norm16"),Ue||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===s.RED&&(J===s.FLOAT&&(ue=s.R32F),J===s.HALF_FLOAT&&(ue=s.R16F),J===s.UNSIGNED_BYTE&&(ue=s.R8),J===s.UNSIGNED_SHORT&&Ue&&(ue=Ue.R16_EXT),J===s.SHORT&&Ue&&(ue=Ue.R16_SNORM_EXT)),M===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.R8UI),J===s.UNSIGNED_SHORT&&(ue=s.R16UI),J===s.UNSIGNED_INT&&(ue=s.R32UI),J===s.BYTE&&(ue=s.R8I),J===s.SHORT&&(ue=s.R16I),J===s.INT&&(ue=s.R32I)),M===s.RG&&(J===s.FLOAT&&(ue=s.RG32F),J===s.HALF_FLOAT&&(ue=s.RG16F),J===s.UNSIGNED_BYTE&&(ue=s.RG8),J===s.UNSIGNED_SHORT&&Ue&&(ue=Ue.RG16_EXT),J===s.SHORT&&Ue&&(ue=Ue.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RG8UI),J===s.UNSIGNED_SHORT&&(ue=s.RG16UI),J===s.UNSIGNED_INT&&(ue=s.RG32UI),J===s.BYTE&&(ue=s.RG8I),J===s.SHORT&&(ue=s.RG16I),J===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),J===s.UNSIGNED_INT&&(ue=s.RGB32UI),J===s.BYTE&&(ue=s.RGB8I),J===s.SHORT&&(ue=s.RGB16I),J===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),J===s.UNSIGNED_INT&&(ue=s.RGBA32UI),J===s.BYTE&&(ue=s.RGBA8I),J===s.SHORT&&(ue=s.RGBA16I),J===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(J===s.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGB16_EXT),J===s.SHORT&&Ue&&(ue=Ue.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const he=Ae?kc:bt.getTransfer(fe);J===s.FLOAT&&(ue=s.RGBA32F),J===s.HALF_FLOAT&&(ue=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ue=he===Bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGBA16_EXT),J===s.SHORT&&Ue&&(ue=Ue.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(D,M){let J;return D?M===null||M===Yi||M===Zo?J=s.DEPTH24_STENCIL8:M===Vi?J=s.DEPTH32F_STENCIL8:M===Yo&&(J=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===Zo?J=s.DEPTH_COMPONENT24:M===Vi?J=s.DEPTH_COMPONENT32F:M===Yo&&(J=s.DEPTH_COMPONENT16),J}function U(D,M){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function P(D){const M=D.target;M.removeEventListener("dispose",P),N(M),M.isVideoTexture&&y.delete(M),M.isHTMLTexture&&x.delete(M)}function E(D){const M=D.target;M.removeEventListener("dispose",E),G(M)}function N(D){const M=r.get(D);if(M.__webglInit===void 0)return;const J=D.source,re=b.get(J);if(re){const fe=re[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&k(D),Object.keys(re).length===0&&b.delete(J)}r.remove(D)}function k(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const J=D.source,re=b.get(J);delete re[M.__cacheKey],h.memory.textures--}function G(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let fe=0;fe<M.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)s.deleteFramebuffer(M.__webglFramebuffer[re]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=D.textures;for(let re=0,fe=J.length;re<fe;re++){const Ae=r.get(J[re]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),h.memory.textures--),r.remove(J[re])}r.remove(D)}let q=0;function ce(){q=0}function pe(){return q}function j(D){q=D}function z(){const D=q;return D>=l.maxTextures&&nt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),q+=1,D}function H(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function $(D,M){const J=r.get(D);if(D.isVideoTexture&&Z(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const re=D.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(J,D,M);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+M)}function ge(D,M){const J=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){De(J,D,M);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+M)}function Ee(D,M){const J=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){De(J,D,M);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+M)}function L(D,M){const J=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){et(J,D,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+M)}const K={[ed]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},Me={[Nn]:s.NEAREST,[vS]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[fh]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},Te={[yS]:s.NEVER,[TS]:s.ALWAYS,[SS]:s.LESS,[qd]:s.LEQUAL,[MS]:s.EQUAL,[Yd]:s.GEQUAL,[bS]:s.GREATER,[ES]:s.NOTEQUAL};function Oe(D,M){if(M.type===Vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===fh||M.magFilter===fc||M.magFilter===zr||M.minFilter===zn||M.minFilter===fh||M.minFilter===fc||M.minFilter===zr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,K[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Me[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==fc&&M.minFilter!==zr||M.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function W(D,M){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",P));const re=M.source;let fe=b.get(re);fe===void 0&&(fe={},b.set(re,fe));const Ae=H(M);if(Ae!==D.__cacheKey){fe[Ae]===void 0&&(fe[Ae]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,J=!0),fe[Ae].usedTimes++;const Ue=fe[D.__cacheKey];Ue!==void 0&&(fe[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(M)),D.__cacheKey=Ae,D.__webglTexture=fe[Ae].texture}return J}function de(D,M,J){return Math.floor(Math.floor(D/J)/M)}function xe(D,M,J,re){const Ae=D.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,J,re,M.data);else{Ae.sort((Fe,Pe)=>Fe.start-Pe.start);let Ue=0;for(let Fe=1;Fe<Ae.length;Fe++){const Pe=Ae[Ue],Ne=Ae[Fe],Qe=Pe.start+Pe.count,je=de(Ne.start,M.width,4),it=de(Pe.start,M.width,4);Ne.start<=Qe+1&&je===it&&de(Ne.start+Ne.count-1,M.width,4)===je?Pe.count=Math.max(Pe.count,Ne.start+Ne.count-Pe.start):(++Ue,Ae[Ue]=Ne)}Ae.length=Ue+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),he=i.getParameter(s.UNPACK_SKIP_PIXELS),Ce=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Fe=0,Pe=Ae.length;Fe<Pe;Fe++){const Ne=Ae[Fe],Qe=Math.floor(Ne.start/4),je=Math.ceil(Ne.count/4),it=Qe%M.width,X=Math.floor(Qe/M.width),Re=je,_e=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,it),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,it,X,Re,_e,J,re,M.data)}D.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,he),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function De(D,M,J){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);const fe=W(D,M),Ae=M.source;i.bindTexture(re,D.__webglTexture,s.TEXTURE0+J);const Ue=r.get(Ae);if(Ae.version!==Ue.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const _e=bt.getPrimaries(bt.workingColorSpace),we=M.colorSpace===rr?null:bt.getPrimaries(M.colorSpace),Be=M.colorSpace===rr||_e===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let he=S(M.image,!1,l.maxTextureSize);he=Ft(M,he);const Ce=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type);let Pe=w(M.internalFormat,Ce,Fe,M.normalized,M.colorSpace,M.isVideoTexture);Oe(re,M);let Ne;const Qe=M.mipmaps,je=M.isVideoTexture!==!0,it=Ue.__version===void 0||fe===!0,X=Ae.dataReady,Re=U(M,he);if(M.isDepthTexture)Pe=I(M.format===Br,M.type),it&&(je?i.texStorage2D(s.TEXTURE_2D,1,Pe,he.width,he.height):i.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,Ce,Fe,null));else if(M.isDataTexture)if(Qe.length>0){je&&it&&i.texStorage2D(s.TEXTURE_2D,Re,Pe,Qe[0].width,Qe[0].height);for(let _e=0,we=Qe.length;_e<we;_e++)Ne=Qe[_e],je?X&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,Ce,Fe,Ne.data):i.texImage2D(s.TEXTURE_2D,_e,Pe,Ne.width,Ne.height,0,Ce,Fe,Ne.data);M.generateMipmaps=!1}else je?(it&&i.texStorage2D(s.TEXTURE_2D,Re,Pe,he.width,he.height),X&&xe(M,he,Ce,Fe)):i.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,Ce,Fe,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,Qe[0].width,Qe[0].height,he.depth);for(let _e=0,we=Qe.length;_e<we;_e++)if(Ne=Qe[_e],M.format!==Ni)if(Ce!==null)if(je){if(X)if(M.layerUpdates.size>0){const Be=Rv(Ne.width,Ne.height,M.format,M.type);for(const be of M.layerUpdates){const qe=Ne.data.subarray(be*Be/Ne.data.BYTES_PER_ELEMENT,(be+1)*Be/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,be,Ne.width,Ne.height,1,Ce,qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,he.depth,Ce,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Pe,Ne.width,Ne.height,he.depth,0,Ne.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,he.depth,Ce,Fe,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,_e,Pe,Ne.width,Ne.height,he.depth,0,Ce,Fe,Ne.data)}else{je&&it&&i.texStorage2D(s.TEXTURE_2D,Re,Pe,Qe[0].width,Qe[0].height);for(let _e=0,we=Qe.length;_e<we;_e++)Ne=Qe[_e],M.format!==Ni?Ce!==null?je?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,Ce,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,_e,Pe,Ne.width,Ne.height,0,Ne.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,Ce,Fe,Ne.data):i.texImage2D(s.TEXTURE_2D,_e,Pe,Ne.width,Ne.height,0,Ce,Fe,Ne.data)}else if(M.isDataArrayTexture)if(je){if(it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,he.width,he.height,he.depth),X)if(M.layerUpdates.size>0){const _e=Rv(he.width,he.height,M.format,M.type);for(const we of M.layerUpdates){const Be=he.data.subarray(we*_e/he.data.BYTES_PER_ELEMENT,(we+1)*_e/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Ce,Fe,Be)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,Fe,he.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,Ce,Fe,he.data);else if(M.isData3DTexture)je?(it&&i.texStorage3D(s.TEXTURE_3D,Re,Pe,he.width,he.height,he.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,Fe,he.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,Ce,Fe,he.data);else if(M.isFramebufferTexture){if(it)if(je)i.texStorage2D(s.TEXTURE_2D,Re,Pe,he.width,he.height);else{let _e=he.width,we=he.height;for(let Be=0;Be<Re;Be++)i.texImage2D(s.TEXTURE_2D,Be,Pe,_e,we,0,Ce,Fe,null),_e>>=1,we>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),he.parentNode!==_e){_e.appendChild(he),x.add(M),_e.onpaint=we=>{const Be=we.changedElements;for(const be of x)Be.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const Be=s.RGBA,be=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,be,qe,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&it){const _e=Ct(Qe[0]);i.texStorage2D(s.TEXTURE_2D,Re,Pe,_e.width,_e.height)}for(let _e=0,we=Qe.length;_e<we;_e++)Ne=Qe[_e],je?X&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ce,Fe,Ne):i.texImage2D(s.TEXTURE_2D,_e,Pe,Ce,Fe,Ne);M.generateMipmaps=!1}else if(je){if(it){const _e=Ct(he);i.texStorage2D(s.TEXTURE_2D,Re,Pe,_e.width,_e.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Fe,he)}else i.texImage2D(s.TEXTURE_2D,0,Pe,Ce,Fe,he);_(M)&&O(re),Ue.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function et(D,M,J){if(M.image.length!==6)return;const re=W(D,M),fe=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+J);const Ae=r.get(fe);if(fe.version!==Ae.__version||re===!0){i.activeTexture(s.TEXTURE0+J);const Ue=bt.getPrimaries(bt.workingColorSpace),ue=M.colorSpace===rr?null:bt.getPrimaries(M.colorSpace),he=M.colorSpace===rr||Ue===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!Ce&&!Fe?Pe[be]=S(M.image[be],!0,l.maxCubemapSize):Pe[be]=Fe?M.image[be].image:M.image[be],Pe[be]=Ft(M,Pe[be]);const Ne=Pe[0],Qe=u.convert(M.format,M.colorSpace),je=u.convert(M.type),it=w(M.internalFormat,Qe,je,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Re=Ae.__version===void 0||re===!0,_e=fe.dataReady;let we=U(M,Ne);Oe(s.TEXTURE_CUBE_MAP,M);let Be;if(Ce){X&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ne.width,Ne.height);for(let be=0;be<6;be++){Be=Pe[be].mipmaps;for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];M.format!==Ni?Qe!==null?X?_e&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ve.width,Ve.height,Qe,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ve.width,Ve.height,Qe,je,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,it,Ve.width,Ve.height,0,Qe,je,Ve.data)}}}else{if(Be=M.mipmaps,X&&Re){Be.length>0&&we++;const be=Ct(Pe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,be.width,be.height)}for(let be=0;be<6;be++)if(Fe){X?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,Qe,je,Pe[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Pe[be].width,Pe[be].height,0,Qe,je,Pe[be].data);for(let qe=0;qe<Be.length;qe++){const Zt=Be[qe].image[be].image;X?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,Zt.width,Zt.height,Qe,je,Zt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,it,Zt.width,Zt.height,0,Qe,je,Zt.data)}}else{X?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Qe,je,Pe[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Qe,je,Pe[be]);for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];X?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,Qe,je,Ve.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,it,Qe,je,Ve.image[be])}}}_(M)&&O(s.TEXTURE_CUBE_MAP),Ae.__version=fe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ze(D,M,J,re,fe,Ae){const Ue=u.convert(J.format,J.colorSpace),ue=u.convert(J.type),he=w(J.internalFormat,Ue,ue,J.normalized,J.colorSpace),Ce=r.get(M),Fe=r.get(J);if(Fe.__renderTarget=M,!Ce.__hasExternalTextures){const Pe=Math.max(1,M.width>>Ae),Ne=Math.max(1,M.height>>Ae);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Ae,he,Pe,Ne,M.depth,0,Ue,ue,null):i.texImage2D(fe,Ae,he,Pe,Ne,0,Ue,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),sn(M)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,Fe.__webglTexture,0,Wt(M)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,Fe.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(D,M,J){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const re=M.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Ae=I(M.stencilBuffer,fe),Ue=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;sn(M)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),Ae,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),Ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,D)}else{const re=M.textures;for(let fe=0;fe<re.length;fe++){const Ae=re[fe],Ue=u.convert(Ae.format,Ae.colorSpace),ue=u.convert(Ae.type),he=w(Ae.internalFormat,Ue,ue,Ae.normalized,Ae.colorSpace);sn(M)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),he,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(D,M,J){const re=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=u.convert(M.depthTexture.format),Fe=u.convert(M.depthTexture.type);let Pe;M.depthTexture.format===Ta?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===Br&&(Pe=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Pe,M.width,M.height,0,Ce,Fe,null)}}else $(M.depthTexture,0);const Ae=fe.__webglTexture,Ue=Wt(M),ue=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,he=M.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ta)sn(M)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ue,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,he,ue,Ae,0);else if(M.depthTexture.format===Br)sn(M)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ue,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,he,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(D){const M=r.get(D),J=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=re}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)at(M.__webglFramebuffer[re],D,re);else{const re=D.texture.mipmaps;re&&re.length>0?at(M.__webglFramebuffer[0],D,0):at(M.__webglFramebuffer,D,0)}else if(J){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=s.createRenderbuffer(),Dt(M.__webglDepthbuffer[re],D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ae)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Dt(M.__webglDepthbuffer,D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(D,M,J){const re=r.get(D);M!==void 0&&Ze(re.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&dt(D)}function pt(D){const M=D.texture,J=r.get(D),re=r.get(M);D.addEventListener("dispose",E);const fe=D.textures,Ae=D.isWebGLCubeRenderTarget===!0,Ue=fe.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,h.memory.textures++),Ae){J.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[ue]=[];for(let he=0;he<M.mipmaps.length;he++)J.__webglFramebuffer[ue][he]=s.createFramebuffer()}else J.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)J.__webglFramebuffer[ue]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ue=0,he=fe.length;ue<he;ue++){const Ce=r.get(fe[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),h.memory.textures++)}if(D.samples>0&&sn(D)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const he=fe[ue];J.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ue]);const Ce=u.convert(he.format,he.colorSpace),Fe=u.convert(he.type),Pe=w(he.internalFormat,Ce,Fe,he.normalized,he.colorSpace,D.isXRRenderTarget===!0),Ne=Wt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Pe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,J.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Ze(J.__webglFramebuffer[ue][he],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else Ze(J.__webglFramebuffer[ue],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(M)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ue=0,he=fe.length;ue<he;ue++){const Ce=fe[ue],Fe=r.get(Ce);let Pe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Fe.__webglTexture),Oe(Pe,Ce),Ze(J.__webglFramebuffer,D,Ce,s.COLOR_ATTACHMENT0+ue,Pe,0),_(Ce)&&O(Pe)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),Oe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Ze(J.__webglFramebuffer[he],D,M,s.COLOR_ATTACHMENT0,ue,he);else Ze(J.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,ue,0);_(M)&&O(ue),i.unbindTexture()}D.depthBuffer&&dt(D)}function nn(D){const M=D.textures;for(let J=0,re=M.length;J<re;J++){const fe=M[J];if(_(fe)){const Ae=B(D),Ue=r.get(fe).__webglTexture;i.bindTexture(Ae,Ue),O(Ae),i.unbindTexture()}}}const an=[],rn=[];function cn(D){if(D.samples>0){if(sn(D)===!1){const M=D.textures,J=D.width,re=D.height;let fe=s.COLOR_BUFFER_BIT;const Ae=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(D),ue=M.length>1;if(ue)for(let Ce=0;Ce<M.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const he=D.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const Fe=r.get(M[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,J,re,0,0,J,re,fe,s.NEAREST),p===!0&&(an.length=0,rn.length=0,an.push(s.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(an.push(Ae),rn.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,an))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<M.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const Fe=r.get(M[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Fe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Wt(D){return Math.min(l.maxSamples,D.samples)}function sn(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(D){const M=h.render.frame;y.get(D)!==M&&(y.set(D,M),D.update())}function Ft(D,M){const J=D.colorSpace,re=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Vc&&J!==rr&&(bt.getTransfer(J)===Bt?(re!==Ni||fe!==hi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",J)),M}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=ce,this.getTextureUnits=pe,this.setTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=ge,this.setTexture3D=Ee,this.setTextureCube=L,this.rebindTextures=ht,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function eA(s,e){function i(r,l=rr){let u;const h=bt.getTransfer(l);if(r===hi)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===c_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===u_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===o_)return s.BYTE;if(r===l_)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===Hd)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===f_)return s.ALPHA;if(r===h_)return s.RGB;if(r===Ni)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===d_)return s.RED;if(r===kd)return s.RED_INTEGER;if(r===Vr)return s.RG;if(r===Xd)return s.RG_INTEGER;if(r===Wd)return s.RGBA_INTEGER;if(r===Pc||r===Ic||r===zc||r===Bc)if(h===Bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nd||r===id||r===ad||r===rd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===nd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===id)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sd||r===od||r===ld||r===cd||r===ud||r===Hc||r===fd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===sd||r===od)return h===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ld)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===cd)return u.COMPRESSED_R11_EAC;if(r===ud)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Hc)return u.COMPRESSED_RG11_EAC;if(r===fd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hd||r===dd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===bd||r===Ed||r===Td)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===hd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bd)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Td)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ad||r===Rd||r===Cd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ad)return h===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wd||r===Dd||r===Gc||r===Ud)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===wd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ud)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nA=`
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

}`;class iA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new S_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Zi({vertexShader:tA,fragmentShader:nA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $t(new Kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aA extends kr{constructor(e,i){super();const r=this;let l=null,u=1,h=null,m="local-floor",p=1,d=null,y=null,x=null,g=null,b=null,T=null;const C=typeof XRWebGLBinding<"u",S=new iA,_={},O=i.getContextAttributes();let B=null,w=null;const I=[],U=[],P=new ft;let E=null;const N=new fi;N.viewport=new en;const k=new fi;k.viewport=new en;const G=[N,k],q=new dM;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let de=I[W];return de===void 0&&(de=new xh,I[W]=de),de.getTargetRaySpace()},this.getControllerGrip=function(W){let de=I[W];return de===void 0&&(de=new xh,I[W]=de),de.getGripSpace()},this.getHand=function(W){let de=I[W];return de===void 0&&(de=new xh,I[W]=de),de.getHandSpace()};function j(W){const de=U.indexOf(W.inputSource);if(de===-1)return;const xe=I[de];xe!==void 0&&(xe.update(W.inputSource,W.frame,d||h),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let W=0;W<I.length;W++){const de=U[W];de!==null&&(U[W]=null,I[W].disconnect(de))}ce=null,pe=null,S.reset();for(const W in _)delete _[W];e.setRenderTarget(B),b=null,g=null,x=null,l=null,w=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){m=W,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,De=null,et=null;O.depth&&(et=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xe=O.stencil?Br:Ta,De=O.stencil?Zo:Yi);const Ze={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(Ze),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Wi(g.textureWidth,g.textureHeight,{format:Ni,type:hi,depthTexture:new Gs(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xe={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,xe),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new Wi(b.framebufferWidth,b.framebufferHeight,{format:Ni,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,h=await l.requestReferenceSpace(m),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(W){for(let de=0;de<W.removed.length;de++){const xe=W.removed[de],De=U.indexOf(xe);De>=0&&(U[De]=null,I[De].disconnect(xe))}for(let de=0;de<W.added.length;de++){const xe=W.added[de];let De=U.indexOf(xe);if(De===-1){for(let Ze=0;Ze<I.length;Ze++)if(Ze>=U.length){U.push(xe),De=Ze;break}else if(U[Ze]===null){U[Ze]=xe,De=Ze;break}if(De===-1)break}const et=I[De];et&&et.connect(xe)}}const $=new ee,ge=new ee;function Ee(W,de,xe){$.setFromMatrixPosition(de.matrixWorld),ge.setFromMatrixPosition(xe.matrixWorld);const De=$.distanceTo(ge),et=de.projectionMatrix.elements,Ze=xe.projectionMatrix.elements,Dt=et[14]/(et[10]-1),at=et[14]/(et[10]+1),dt=(et[9]+1)/et[5],ht=(et[9]-1)/et[5],pt=(et[8]-1)/et[0],nn=(Ze[8]+1)/Ze[0],an=Dt*pt,rn=Dt*nn,cn=De/(-pt+nn),Wt=cn*-pt;if(de.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Wt),W.translateZ(cn),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),et[10]===-1)W.projectionMatrix.copy(de.projectionMatrix),W.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const sn=Dt+cn,Z=at+cn,Ft=an-Wt,Ct=rn+(De-Wt),D=dt*at/Z*sn,M=ht*at/Z*sn;W.projectionMatrix.makePerspective(Ft,Ct,D,M,sn,Z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function L(W,de){de===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(de.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let de=W.near,xe=W.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),q.near=k.near=N.near=de,q.far=k.far=N.far=xe,(ce!==q.near||pe!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ce=q.near,pe=q.far),q.layers.mask=W.layers.mask|6,N.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const De=W.parent,et=q.cameras;L(q,De);for(let Ze=0;Ze<et.length;Ze++)L(et[Ze],De);et.length===2?Ee(q,N,k):q.projectionMatrix.copy(N.projectionMatrix),K(W,q,De)};function K(W,de,xe){xe===null?W.matrix.copy(de.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(de.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(de.projectionMatrix),W.projectionMatrixInverse.copy(de.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ld*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&b===null))return p},this.setFoveation=function(W){p=W,g!==null&&(g.fixedFoveation=W),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(W){return _[W]};let Me=null;function Te(W,de){if(y=de.getViewerPose(d||h),T=de,y!==null){const xe=y.views;b!==null&&(e.setRenderTargetFramebuffer(w,b.framebuffer),e.setRenderTarget(w));let De=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,De=!0);for(let at=0;at<xe.length;at++){const dt=xe[at];let ht=null;if(b!==null)ht=b.getViewport(dt);else{const nn=x.getViewSubImage(g,dt);ht=nn.viewport,at===0&&(e.setRenderTargetTextures(w,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(w))}let pt=G[at];pt===void 0&&(pt=new fi,pt.layers.enable(at),pt.viewport=new en,G[at]=pt),pt.matrix.fromArray(dt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(dt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ht.x,ht.y,ht.width,ht.height),at===0&&(q.matrix.copy(pt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),De===!0&&q.cameras.push(pt)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const at=x.getDepthInformation(xe[0]);at&&at.isValid&&at.texture&&S.init(at,l.renderState)}if(et&&et.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let at=0;at<xe.length;at++){const dt=xe[at].camera;if(dt){let ht=_[dt];ht||(ht=new S_,_[dt]=ht);const pt=x.getCameraImage(dt);ht.sourceTexture=pt}}}}for(let xe=0;xe<I.length;xe++){const De=U[xe],et=I[xe];De!==null&&et!==void 0&&et.update(De,de,d||h)}Me&&Me(W,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Oe=new T_;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const rA=new tn,N_=new st;N_.set(-1,0,0,0,1,0,0,0,1);function sA(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,M_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,B,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?u(S,_):_.isMeshLambertMaterial?(u(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),y(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(u(S,_),g(S,_),_.isMeshPhysicalMaterial&&b(S,_,w)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),C(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&m(S,_)):_.isPointsMaterial?p(S,_,O,B):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=e.get(_),B=O.envMap,w=O.envMapRotation;B&&(S.envMap.value=B,S.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(w)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(N_),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function m(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,O,B){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=B*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function y(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const O=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function oA(s,e,i,r){let l={},u={},h=[];const m=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,I){const U=I.program;r.uniformBlockBinding(w,U)}function d(w,I){let U=l[w.id];U===void 0&&(S(w),U=y(w),l[w.id]=U,w.addEventListener("dispose",O));const P=I.program;r.updateUBOMapping(w,P);const E=e.render.frame;u[w.id]!==E&&(g(w),u[w.id]=E)}function y(w){const I=x();w.__bindingPointIndex=I;const U=s.createBuffer(),P=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,U),U}function x(){for(let w=0;w<m;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const I=l[w.id],U=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,N=U.length;E<N;E++){const k=U[E];if(Array.isArray(k))for(let G=0,q=k.length;G<q;G++)b(k[G],E,G,P);else b(k,E,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(w,I,U,P){if(C(w,I,U,P)===!0){const E=w.__offset,N=w.value;if(Array.isArray(N)){let k=0;for(let G=0;G<N.length;G++){const q=N[G],ce=_(q);T(q,w.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,w.__data)}}function T(w,I,U){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,U)}function C(w,I,U,P){const E=w.value,N=I+"_"+U;if(P[N]===void 0)return typeof E=="number"||typeof E=="boolean"?P[N]=E:ArrayBuffer.isView(E)?P[N]=E.slice():P[N]=E.clone(),!0;{const k=P[N];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return P[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function S(w){const I=w.uniforms;let U=0;const P=16;for(let N=0,k=I.length;N<k;N++){const G=Array.isArray(I[N])?I[N]:[I[N]];for(let q=0,ce=G.length;q<ce;q++){const pe=G[q],j=Array.isArray(pe.value)?pe.value:[pe.value];for(let z=0,H=j.length;z<H;z++){const $=j[z],ge=_($),Ee=U%P,L=Ee%ge.boundary,K=Ee+L;U+=L,K!==0&&P-K<ge.storage&&(U+=P-K),pe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=U,U+=ge.storage}}}const E=U%P;return E>0&&(U+=P-E),w.__size=U,w.__cache={},this}function _(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),I}function O(w){const I=w.target;I.removeEventListener("dispose",O);const U=h.indexOf(I.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[I.id]),delete l[I.id],delete u[I.id]}function B(){for(const w in l)s.deleteBuffer(l[w]);h=[],l={},u={}}return{bind:p,update:d,dispose:B}}const lA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function cA(){return Hi===null&&(Hi=new QS(lA,16,16,Vr,Ea),Hi.name="DFG_LUT",Hi.minFilter=zn,Hi.magFilter=zn,Hi.wrapS=ya,Hi.wrapT=ya,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class uA{constructor(e={}){const{canvas:i=RS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:b=hi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const C=b,S=new Set([Wd,Xd,kd]),_=new Set([hi,Yi,Yo,Zo,Gd,Vd]),O=new Uint32Array(4),B=new Int32Array(4),w=new ee;let I=null,U=null;const P=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,q=null,ce=null,pe=null,j=null;this._outputColorSpace=Mi;let z=0,H=0,$=null,ge=-1,Ee=null;const L=new en,K=new en;let Me=null;const Te=new St(0);let Oe=0,W=i.width,de=i.height,xe=1,De=null,et=null;const Ze=new en(0,0,W,de),Dt=new en(0,0,W,de);let at=!1;const dt=new jd;let ht=!1,pt=!1;const nn=new tn,an=new ee,rn=new en,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function sn(){return $===null?xe:1}let Z=r;function Ft(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Jn,!1),Z===null){const Y="webgl2";if(Z=Ft(Y,A),Z===null)throw Ft(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let Ct,D,M,J,re,fe,Ae,Ue,ue,he,Ce,Fe,Pe,Ne,Qe,je,it,X,Re,_e,we,Be,be;function qe(){Ct=new cT(Z),Ct.init(),we=new eA(Z,Ct),D=new tT(Z,Ct,e,we),M=new J1(Z,Ct),D.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),pe=Z.createFramebuffer(),j=Z.createFramebuffer(),J=new hT(Z),re=new B1,fe=new $1(Z,Ct,M,re,D,we,J),Ae=new lT(k),Ue=new gM(Z),Be=new $E(Z,Ue),ue=new uT(Z,Ue,J,Be),he=new pT(Z,ue,Ue,Be,J),X=new dT(Z,D,fe),Qe=new nT(re),Ce=new z1(k,Ae,Ct,D,Be,Qe),Fe=new sA(k,re),Pe=new H1,Ne=new q1(Ct),it=new JE(k,Ae,M,he,T,p),je=new j1(k,he,D),be=new oA(Z,J,D,M),Re=new eT(Z,Ct,J),_e=new fT(Z,Ct,J),J.programs=Ce.programs,k.capabilities=D,k.extensions=Ct,k.properties=re,k.renderLists=Pe,k.shadowMap=je,k.state=M,k.info=J}qe(),C!==hi&&(N=new gT(C,i.width,i.height,m,l,u));const Ve=new aA(k,Z);this.xr=Ve,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(A){A!==void 0&&(xe=A,this.setSize(W,de,!1))},this.getSize=function(A){return A.set(W,de)},this.setSize=function(A,Y,se=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,de=Y,i.width=Math.floor(A*xe),i.height=Math.floor(Y*xe),se===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(W*xe,de*xe).floor()},this.setDrawingBufferSize=function(A,Y,se){W=A,de=Y,xe=se,i.width=Math.floor(A*se),i.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(C===hi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Ze)},this.setViewport=function(A,Y,se,ie){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,Y,se,ie),M.viewport(L.copy(Ze).multiplyScalar(xe).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,Y,se,ie){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,Y,se,ie),M.scissor(K.copy(Dt).multiplyScalar(xe).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){M.setScissorTest(at=A)},this.setOpaqueSort=function(A){De=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let ie=0;if(A){let ae=!1;if($!==null){const Ie=$.texture.format;ae=S.has(Ie)}if(ae){const Ie=$.texture.type,Ge=_.has(Ie),Le=it.getClearColor(),Xe=it.getClearAlpha(),ke=Le.r,Je=Le.g,ot=Le.b;Ge?(O[0]=ke,O[1]=Je,O[2]=ot,O[3]=Xe,Z.clearBufferuiv(Z.COLOR,0,O)):(B[0]=ke,B[1]=Je,B[2]=ot,B[3]=Xe,Z.clearBufferiv(Z.COLOR,0,B))}else ie|=Z.COLOR_BUFFER_BIT}Y&&(ie|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ie|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Jn,!1),it.dispose(),Pe.dispose(),Ne.dispose(),re.dispose(),Ae.dispose(),he.dispose(),Be.dispose(),be.dispose(),Ce.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",hn),Ve.removeEventListener("sessionend",An),Vn.stop()};function Zt(A){A.preventDefault(),nv("WebGLRenderer: Context Lost."),G=!0}function Nt(){nv("WebGLRenderer: Context Restored."),G=!1;const A=J.autoReset,Y=je.enabled,se=je.autoUpdate,ie=je.needsUpdate,ae=je.type;qe(),J.autoReset=A,je.enabled=Y,je.autoUpdate=se,je.needsUpdate=ie,je.type=ae}function Jn(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $n(A){const Y=A.target;Y.removeEventListener("dispose",$n),Ws(Y)}function Ws(A){qs(A),re.remove(A)}function qs(A){const Y=re.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Ce.releaseProgram(se)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,ie,ae,Ie){Y===null&&(Y=cn);const Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Le=Ca(A,Y,se,ie,ae);M.setMaterial(ie,Ge);let Xe=se.index,ke=1;if(ie.wireframe===!0){if(Xe=ue.getWireframeAttribute(se),Xe===void 0)return;ke=2}const Je=se.drawRange,ot=se.attributes.position;let Ke=Je.start*ke,Tt=(Je.start+Je.count)*ke;Ie!==null&&(Ke=Math.max(Ke,Ie.start*ke),Tt=Math.min(Tt,(Ie.start+Ie.count)*ke)),Xe!==null?(Ke=Math.max(Ke,0),Tt=Math.min(Tt,Xe.count)):ot!=null&&(Ke=Math.max(Ke,0),Tt=Math.min(Tt,ot.count));const Kt=Tt-Ke;if(Kt<0||Kt===1/0)return;Be.setup(ae,ie,Le,se,Xe);let kt,Lt=Re;if(Xe!==null&&(kt=Ue.get(Xe),Lt=_e,Lt.setIndex(kt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*sn()),Lt.setMode(Z.LINES)):Lt.setMode(Z.TRIANGLES);else if(ae.isLine){let Ot=ie.linewidth;Ot===void 0&&(Ot=1),M.setLineWidth(Ot*sn()),ae.isLineSegments?Lt.setMode(Z.LINES):ae.isLineLoop?Lt.setMode(Z.LINE_LOOP):Lt.setMode(Z.LINE_STRIP)}else ae.isPoints?Lt.setMode(Z.POINTS):ae.isSprite&&Lt.setMode(Z.TRIANGLES);if(ae.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ot=ae._multiDrawStarts,He=ae._multiDrawCounts,Ln=ae._multiDrawCount,mt=Xe?Ue.get(Xe).bytesPerElement:1,xn=re.get(ie).currentProgram.getUniforms();for(let ei=0;ei<Ln;ei++)xn.setValue(Z,"_gl_DrawID",ei),Lt.render(Ot[ei]/mt,He[ei])}else if(ae.isInstancedMesh)Lt.renderInstances(Ke,Kt,ae.count);else if(se.isInstancedBufferGeometry){const Ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,Ot);Lt.renderInstances(Ke,Kt,He)}else Lt.render(Ke,Kt)};function Ys(A,Y,se){A.transparent===!0&&A.side===Un&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ra(A,Y,se),A.side=ba,A.needsUpdate=!0,Ra(A,Y,se),A.side=Un):Ra(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),U=Ne.get(se),U.init(Y),E.push(U),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),A!==se&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),U.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Ie=ae.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Le=Ie[Ge];Ys(Le,se,ae),ie.add(Le)}else Ys(Ie,se,ae),ie.add(Ie)}),U=E.pop(),ie},this.compileAsync=function(A,Y,se=null){const ie=this.compile(A,Y,se);return new Promise(ae=>{function Ie(){if(ie.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ae(A);return}setTimeout(Ie,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Xr=null;function Li(A){Xr&&Xr(A)}function hn(){Vn.stop()}function An(){Vn.start()}const Vn=new T_;Vn.setAnimationLoop(Li),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Xr=A,Ve.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},Ve.addEventListener("sessionstart",hn),Ve.addEventListener("sessionend",An),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(A,Y);const se=Ve.enabled===!0&&Ve.isPresenting===!0,ie=N!==null&&($===null||se)&&N.begin(k,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,Y,$),U=Ne.get(A,E.length),U.init(Y),U.state.textureUnits=fe.getTextureUnits(),E.push(U),nn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),dt.setFromProjectionMatrix(nn,ki,Y.reversedDepth),pt=this.localClippingEnabled,ht=Qe.init(this.clippingPlanes,pt),I=Pe.get(A,P.length),I.init(),P.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=k.xr.getDepthSensingMesh();Ge!==null&&cr(Ge,Y,-1/0,k.sortObjects)}cr(A,Y,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(De,et,Y.reversedDepth),Wt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Wt&&it.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Qe.beginShadows();const ae=U.state.shadowsArray;if(je.render(ae,A,Y),ht===!0&&Qe.endShadows(),(ie&&N.hasRenderPass())===!1){const Ge=I.opaque,Le=I.transmissive;if(U.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Le.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const ot=Xe[ke];tl(Ge,Le,A,ot)}Wt&&it.render(A);for(let ke=0,Je=Xe.length;ke<Je;ke++){const ot=Xe[ke];el(I,A,ot,ot.viewport)}}else Le.length>0&&tl(Ge,Le,A,Y),Wt&&it.render(A),el(I,A,Y)}$!==null&&H===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),ie&&N.end(k),A.isScene===!0&&A.onAfterRender(k,A,Y),Be.resetDefaultState(),ge=-1,Ee=null,E.pop(),E.length>0?(U=E[E.length-1],fe.setTextureUnits(U.state.textureUnits),ht===!0&&Qe.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?I=P[P.length-1]:I=null,q!==null&&q.renderEnd()};function cr(A,Y,se,ie){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||dt.intersectsSprite(A)){ie&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nn);const Ge=he.update(A),Le=A.material;Le.visible&&I.push(A,Ge,Le,se,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||dt.intersectsObject(A))){const Ge=he.update(A),Le=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),rn.copy(Ge.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(nn)),Array.isArray(Le)){const Xe=Ge.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const ot=Xe[ke],Ke=Le[ot.materialIndex];Ke&&Ke.visible&&I.push(A,Ge,Ke,se,rn.z,ot)}}else Le.visible&&I.push(A,Ge,Le,se,rn.z,null)}}const Ie=A.children;for(let Ge=0,Le=Ie.length;Ge<Le;Ge++)cr(Ie[Ge],Y,se,ie)}function el(A,Y,se,ie){const{opaque:ae,transmissive:Ie,transparent:Ge}=A;U.setupLightsView(se),ht===!0&&Qe.setGlobalState(k.clippingPlanes,se),ie&&M.viewport(L.copy(ie)),ae.length>0&&ur(ae,Y,se),Ie.length>0&&ur(Ie,Y,se),Ge.length>0&&ur(Ge,Y,se),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function tl(A,Y,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const Ke=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new Wi(1,1,{generateMipmaps:!0,type:Ke?Ea:hi,minFilter:zr,samples:Math.max(4,D.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ie=U.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||L;Ie.setSize(Ge.z*k.transmissionResolutionScale,Ge.w*k.transmissionResolutionScale);const Le=k.getRenderTarget(),Xe=k.getActiveCubeFace(),ke=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(Te),Oe=k.getClearAlpha(),Oe<1&&k.setClearColor(16777215,.5),k.clear(),Wt&&it.render(se);const Je=k.toneMapping;k.toneMapping=Xi;const ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),ht===!0&&Qe.setGlobalState(k.clippingPlanes,ie),ur(A,se,ie),fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Tt=0,Kt=Y.length;Tt<Kt;Tt++){const kt=Y[Tt],{object:Lt,geometry:Ot,material:He,group:Ln}=kt;if(He.side===Un&&Lt.layers.test(ie.layers)){const mt=He.side;He.side=Qn,He.needsUpdate=!0,Aa(Lt,se,ie,Ot,He,Ln),He.side=mt,He.needsUpdate=!0,Ke=!0}}Ke===!0&&(fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie))}k.setRenderTarget(Le,Xe,ke),k.setClearColor(Te,Oe),ot!==void 0&&(ie.viewport=ot),k.toneMapping=Je}function ur(A,Y,se){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,Ie=A.length;ae<Ie;ae++){const Ge=A[ae],{object:Le,geometry:Xe,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Le.layers.test(se.layers)&&Aa(Le,Y,se,Xe,Je,ke)}}function Aa(A,Y,se,ie,ae,Ie){A.onBeforeRender(k,Y,se,ie,ae,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(k,Y,se,ie,A,Ie),ae.transparent===!0&&ae.side===Un&&ae.forceSinglePass===!1?(ae.side=Qn,ae.needsUpdate=!0,k.renderBufferDirect(se,Y,ie,ae,A,Ie),ae.side=ba,ae.needsUpdate=!0,k.renderBufferDirect(se,Y,ie,ae,A,Ie),ae.side=Un):k.renderBufferDirect(se,Y,ie,ae,A,Ie),A.onAfterRender(k,Y,se,ie,ae,Ie)}function Ra(A,Y,se){Y.isScene!==!0&&(Y=cn);const ie=re.get(A),ae=U.state.lights,Ie=U.state.shadowsArray,Ge=ae.state.version,Le=Ce.getParameters(A,ae.state,Ie,Y,se,U.state.lightProbeGridArray),Xe=Ce.getProgramCacheKey(Le);let ke=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ae.get(A.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",$n),ke=new Map,ie.programs=ke);let ot=ke.get(Xe);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===Ge)return Qi(A,Le),ot}else Le.uniforms=Ce.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,se,Le),A.onBeforeCompile(Le,k),ot=Ce.acquireProgram(Le,Xe),ke.set(Xe,ot),ie.uniforms=Le.uniforms;const Ke=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),Qi(A,Le),ie.needsLights=nl(A),ie.lightsStateVersion=Ge,ie.needsLights&&(Ke.ambientLightColor.value=ae.state.ambient,Ke.lightProbe.value=ae.state.probe,Ke.directionalLights.value=ae.state.directional,Ke.directionalLightShadows.value=ae.state.directionalShadow,Ke.spotLights.value=ae.state.spot,Ke.spotLightShadows.value=ae.state.spotShadow,Ke.rectAreaLights.value=ae.state.rectArea,Ke.ltc_1.value=ae.state.rectAreaLTC1,Ke.ltc_2.value=ae.state.rectAreaLTC2,Ke.pointLights.value=ae.state.point,Ke.pointLightShadows.value=ae.state.pointShadow,Ke.hemisphereLights.value=ae.state.hemi,Ke.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ae.state.spotLightMatrix,Ke.spotLightMap.value=ae.state.spotLightMap,Ke.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=U.state.lightProbeGridArray.length>0,ie.currentProgram=ot,ie.uniformsList=null,ot}function Ki(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Fc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Qi(A,Y){const se=re.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function fr(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(Y.matrixWorld);for(let se=0,ie=A.length;se<ie;se++){const ae=A[se];if(ae.texture!==null&&ae.boundingBox.containsPoint(w))return ae}return null}function Ca(A,Y,se,ie,ae){Y.isScene!==!0&&(Y=cn),fe.resetTextureUnits();const Ie=Y.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Le=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:bt.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=Ae.get(ie.envMap||Ge,Xe),Je=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ke=!!se.morphAttributes.position,Tt=!!se.morphAttributes.normal,Kt=!!se.morphAttributes.color;let kt=Xi;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(kt=k.toneMapping);const Lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,He=re.get(ie),Ln=U.state.lights;if(ht===!0&&(pt===!0||A!==Ee)){const Ut=A===Ee&&ie.id===ge;Qe.setState(ie,A,Ut)}let mt=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ln.state.version||He.outputColorSpace!==Le||ae.isBatchedMesh&&He.batching===!1||!ae.isBatchedMesh&&He.batching===!0||ae.isBatchedMesh&&He.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&He.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&He.instancing===!1||!ae.isInstancedMesh&&He.instancing===!0||ae.isSkinnedMesh&&He.skinning===!1||!ae.isSkinnedMesh&&He.skinning===!0||ae.isInstancedMesh&&He.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&He.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&He.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&He.instancingMorph===!1&&ae.morphTexture!==null||He.envMap!==ke||ie.fog===!0&&He.fog!==Ie||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Qe.numPlanes||He.numIntersection!==Qe.numIntersection)||He.vertexAlphas!==Je||He.vertexTangents!==ot||He.morphTargets!==Ke||He.morphNormals!==Tt||He.morphColors!==Kt||He.toneMapping!==kt||He.morphTargetsCount!==Ot||!!He.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,He.__version=ie.version);let xn=He.currentProgram;mt===!0&&(xn=Ra(ie,Y,ae),q&&ie.isNodeMaterial&&q.onUpdateProgram(ie,xn,He));let ei=!1,bi=!1,ti=!1;const Pt=xn.getUniforms(),Qt=He.uniforms;if(M.useProgram(xn.program)&&(ei=!0,bi=!0,ti=!0),ie.id!==ge&&(ge=ie.id,bi=!0),He.needsLights){const Ut=fr(U.state.lightProbeGridArray,ae);He.lightProbeGrid!==Ut&&(He.lightProbeGrid=Ut,bi=!0)}if(ei||Ee!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(Z,"projectionMatrix",A.projectionMatrix),Pt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Oi=Pt.map.cameraPosition;Oi!==void 0&&Oi.setValue(Z,an.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,bi=!0,ti=!0)}if(He.needsLights&&(Ln.state.directionalShadowMap.length>0&&Pt.setValue(Z,"directionalShadowMap",Ln.state.directionalShadowMap,fe),Ln.state.spotShadowMap.length>0&&Pt.setValue(Z,"spotShadowMap",Ln.state.spotShadowMap,fe),Ln.state.pointShadowMap.length>0&&Pt.setValue(Z,"pointShadowMap",Ln.state.pointShadowMap,fe)),ae.isSkinnedMesh){Pt.setOptional(Z,ae,"bindMatrix"),Pt.setOptional(Z,ae,"bindMatrixInverse");const Ut=ae.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Ut.boneTexture,fe))}ae.isBatchedMesh&&(Pt.setOptional(Z,ae,"batchingTexture"),Pt.setValue(Z,"batchingTexture",ae._matricesTexture,fe),Pt.setOptional(Z,ae,"batchingIdTexture"),Pt.setValue(Z,"batchingIdTexture",ae._indirectTexture,fe),Pt.setOptional(Z,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(Z,"batchingColorTexture",ae._colorsTexture,fe));const Ei=se.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&X.update(ae,se,xn),(bi||He.receiveShadow!==ae.receiveShadow)&&(He.receiveShadow=ae.receiveShadow,Pt.setValue(Z,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Qt.envMapIntensity.value=Y.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=cA()),bi){if(Pt.setValue(Z,"toneMappingExposure",k.toneMappingExposure),He.needsLights&&dn(Qt,ti),Ie&&ie.fog===!0&&Fe.refreshFogUniforms(Qt,Ie),Fe.refreshMaterialUniforms(Qt,ie,xe,de,U.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Ut=He.lightProbeGrid;Qt.probesSH.value=Ut.texture,Qt.probesMin.value.copy(Ut.boundingBox.min),Qt.probesMax.value.copy(Ut.boundingBox.max),Qt.probesResolution.value.copy(Ut.resolution)}Fc.upload(Z,Ki(He),Qt,fe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Fc.upload(Z,Ki(He),Qt,fe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(Z,"center",ae.center),Pt.setValue(Z,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(Z,"normalMatrix",ae.normalMatrix),Pt.setValue(Z,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ut=ie.uniformsGroups;for(let Oi=0,wa=Ut.length;Oi<wa;Oi++){const hr=Ut[Oi];be.update(hr,xn),be.bind(hr,xn)}}return xn}function dn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function nl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Y,se){const ie=re.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=Y,re.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=re.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,se=0){$=A,z=Y,H=se;let ie=null,ae=!1,Ie=!1;if(A){const Le=re.get(A);if(Le.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Z.FRAMEBUFFER,Le.__webglFramebuffer),L.copy(A.viewport),K.copy(A.scissor),Me=A.scissorTest,M.viewport(L),M.scissor(K),M.setScissorTest(Me),ge=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Le.__hasExternalTextures)fe.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const ke=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[Y])?ie=ke[Y][se]:ie=ke[Y],ae=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?ie=re.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[se]:ie=ke,L.copy(A.viewport),K.copy(A.scissor),Me=A.scissorTest}else L.copy(Ze).multiplyScalar(xe).floor(),K.copy(Dt).multiplyScalar(xe).floor(),Me=at;if(se!==0&&(ie=ce),M.bindFramebuffer(Z.FRAMEBUFFER,ie)&&M.drawBuffers(A,ie),M.viewport(L),M.scissor(K),M.setScissorTest(Me),ae){const Le=re.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,se)}else if(Ie){const Le=Y;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=re.get(A.textures[Xe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,se,Le)}}else if(A!==null&&se!==0){const Le=re.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Le.__webglTexture,se)}ge=-1},this.readRenderTargetPixels=function(A,Y,se,ie,ae,Ie,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){M.bindFramebuffer(Z.FRAMEBUFFER,Xe);try{const ke=A.textures[Le],Je=ke.format,ot=ke.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(Je)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ie&&se>=0&&se<=A.height-ae&&Z.readPixels(Y,se,ie,ae,we.convert(Je),we.convert(ot),Ie)}finally{const ke=$!==null?re.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,ie,ae,Ie,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(Y>=0&&Y<=A.width-ie&&se>=0&&se<=A.height-ae){M.bindFramebuffer(Z.FRAMEBUFFER,Xe);const ke=A.textures[Le],Je=ke.format,ot=ke.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ie.byteLength,Z.STREAM_READ),Z.readPixels(Y,se,ie,ae,we.convert(Je),we.convert(ot),0);const Tt=$!==null?re.get($).__webglFramebuffer:null;M.bindFramebuffer(Z.FRAMEBUFFER,Tt);const Kt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await CS(Z,Kt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ie),Z.deleteBuffer(Ke),Z.deleteSync(Kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const ie=Math.pow(2,-se),ae=Math.floor(A.image.width*ie),Ie=Math.floor(A.image.height*ie),Ge=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;fe.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,Ge,Le,ae,Ie),M.unbindTexture()},this.copyTextureToTexture=function(A,Y,se=null,ie=null,ae=0,Ie=0){let Ge,Le,Xe,ke,Je,ot,Ke,Tt,Kt;const kt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)Ge=se.max.x-se.min.x,Le=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Je=se.min.y,ot=se.isBox3?se.min.z:0;else{const Qt=Math.pow(2,-ae);Ge=Math.floor(kt.width*Qt),Le=Math.floor(kt.height*Qt),A.isDataArrayTexture?Xe=kt.depth:A.isData3DTexture?Xe=Math.floor(kt.depth*Qt):Xe=1,ke=0,Je=0,ot=0}ie!==null?(Ke=ie.x,Tt=ie.y,Kt=ie.z):(Ke=0,Tt=0,Kt=0);const Lt=we.convert(Y.format),Ot=we.convert(Y.type);let He;Y.isData3DTexture?(fe.setTexture3D(Y,0),He=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),He=Z.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),He=Z.TEXTURE_2D),M.activeTexture(Z.TEXTURE0),M.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ln=M.getParameter(Z.UNPACK_ROW_LENGTH),mt=M.getParameter(Z.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(Z.UNPACK_SKIP_PIXELS),ei=M.getParameter(Z.UNPACK_SKIP_ROWS),bi=M.getParameter(Z.UNPACK_SKIP_IMAGES);M.pixelStorei(Z.UNPACK_ROW_LENGTH,kt.width),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,kt.height),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(Z.UNPACK_SKIP_ROWS,Je),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,ot);const ti=A.isDataArrayTexture||A.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Qt=re.get(A),Ei=re.get(Y),Ut=re.get(Qt.__renderTarget),Oi=re.get(Ei.__renderTarget);M.bindFramebuffer(Z.READ_FRAMEBUFFER,Ut.__webglFramebuffer),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let wa=0;wa<Xe;wa++)ti&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ae,ot+wa),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(Y).__webglTexture,Ie,Kt+wa)),Z.blitFramebuffer(ke,Je,Ge,Le,Ke,Tt,Ge,Le,Z.DEPTH_BUFFER_BIT,Z.NEAREST);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||re.has(A)){const Qt=re.get(A),Ei=re.get(Y);M.bindFramebuffer(Z.READ_FRAMEBUFFER,pe),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,j);for(let Ut=0;Ut<Xe;Ut++)ti?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qt.__webglTexture,ae,ot+Ut):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Qt.__webglTexture,ae),Pt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ei.__webglTexture,Ie,Kt+Ut):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ei.__webglTexture,Ie),ae!==0?Z.blitFramebuffer(ke,Je,Ge,Le,Ke,Tt,Ge,Le,Z.COLOR_BUFFER_BIT,Z.NEAREST):Pt?Z.copyTexSubImage3D(He,Ie,Ke,Tt,Kt+Ut,ke,Je,Ge,Le):Z.copyTexSubImage2D(He,Ie,Ke,Tt,ke,Je,Ge,Le);M.bindFramebuffer(Z.READ_FRAMEBUFFER,null),M.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(He,Ie,Ke,Tt,Kt,Ge,Le,Xe,Lt,Ot,kt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(He,Ie,Ke,Tt,Kt,Ge,Le,Xe,Lt,kt.data):Z.texSubImage3D(He,Ie,Ke,Tt,Kt,Ge,Le,Xe,Lt,Ot,kt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ie,Ke,Tt,Ge,Le,Lt,Ot,kt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ie,Ke,Tt,kt.width,kt.height,Lt,kt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ie,Ke,Tt,Ge,Le,Lt,Ot,kt);M.pixelStorei(Z.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,mt),M.pixelStorei(Z.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(Z.UNPACK_SKIP_ROWS,ei),M.pixelStorei(Z.UNPACK_SKIP_IMAGES,bi),Ie===0&&Y.generateMipmaps&&Z.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){z=0,H=0,$=null,M.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const fA=[{id:"all",label:"All Structures"},{id:"fibrosa",label:"Tunica Fibrosa (Outer)"},{id:"vasculosa",label:"Tunica Vasculosa / Uvea"},{id:"nervosa",label:"Tunica Nervosa (Retina)"},{id:"optical",label:"Optical Refractive Media"},{id:"neural",label:"Neural Pathways"}],sr=[{id:"cornea",name:"Cornea",latin:"Cornea Transparens",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Anterior 1/6th)",pinPosition:[0,0,2.3],cameraTarget:[0,0,2],color:"#7dd3fc",opticalMetrics:{refractiveIndex:"n = 1.376",dioptricPower:"+43.0 Diopters (~70% total eye refraction)",thickness:"535 µm central, ~650 µm peripheral"},medicalDescription:"The anterior, transparent, highly curved window of the eye. Completely avascular, receiving oxygen directly from ambient air through the tear film and nutrients from the anterior chamber's aqueous humor. Comprises five classical histological layers: non-keratinized stratified squamous epithelium, Bowman's membrane, stroma (90% thickness composed of orthogonally arranged type I/V collagen fibrils), Descemet's membrane, and metabolic monolayer endothelium.",clinicalPathology:"Keratoconus (biomechanical stromal degradation causing conical ectasia), Fuchs' endothelial corneal dystrophy, microbial keratitis, bullous keratopathy.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course (BCSC), Section 8: External Disease and Cornea",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy: The Anatomical Basis of Clinical Practice (42nd Ed.)",title:"Chapter 41: The Visual Apparatus and Orbit",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"},{authority:"National Center for Biotechnology Information (NCBI)",title:"StatPearls: Anatomy, Head and Neck, Eye Cornea",url:"https://www.ncbi.nlm.nih.gov/books/NBK470344/"}],historicalTreatise:{author:"Alhazen (Ibn al-Haytham)",work:"Kitāb al-Manāẓir (Book of Optics, c. 1021)",note:"Refuted classical extramission theory (Pythagoras, Euclid, Galen), demonstrating through geometry and camera obscura experiments that perpendicular rays of light enter through the corneal hemisphere to initiate vision."},literaryAnalysis:{figure:"Seamus Heaney",text:"'Personal Helicon' (Death of a Naturalist, 1966)",quote:"Others had echoes, gave back your own call / With a clean new music in it. And one was mean for water: a shallow / To stare, big-eyed Narcissus, into some spring / Is beneath all adult dignity. I rhyme / To see myself, to set the darkness echoing.",commentary:"The cornea is the surface of the well: an organic lens that is both transparent aperture and reflective barrier. In Heaney's poetic archaeology, gazing into water mirrors the corneal threshold where the observing subject is confronted with their own submerged reflection."}},{id:"sclera",name:"Sclera & Episclera",latin:"Tunica Sclera",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Posterior 5/6ths)",pinPosition:[0,1.8,0],cameraTarget:[0,1.5,0],color:"#f8fafc",opticalMetrics:{refractiveIndex:"Opaque (irregular collagen scatter)",hydration:"68% hydration (vs. 78% in cornea)",thickness:"1.0 mm at posterior pole, 0.3 mm behind rectus insertions"},medicalDescription:"The dense, opaque, fibrous protective envelope of the globe. Consists of dense irregular bundles of collagen fibrils and elastic fibers that resist intraocular pressure (10–21 mmHg) and provide dynamic insertion points for the six extraocular muscles. Pierced posteriorly by the lamina cribrosa, through which retinal ganglion cell axons emerge to form the optic nerve.",clinicalPathology:"Scleritis (frequently associated with systemic autoimmune disorders like rheumatoid arthritis and granulomatosis with polyangiitis), episcleritis, scleral staphyloma, blue sclera (osteogenesis imperfecta).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Sclera and Episclera: Anatomy and Inflammation Management",url:"https://www.aao.org/eyenet/article/scleritis-diagnosis-management"},{authority:"Stanford University School of Medicine",title:"Ocular Pathology & Scleral Biomechanics",url:"https://med.stanford.edu/ophthalmology.html"}],historicalTreatise:{author:"Andreas Vesalius",work:"De Humani Corporis Fabrica (1543, Book VII)",note:"Vesalius systematically dissected the hard scleral tunic ('tunica dura / cornea dura') to dismantle Galen's rete mirabile within human cranial anatomy, demonstrating direct ocular-cerebral continuity."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto XXXII & XXXIII (Cocytus)",quote:"Lo pianto stesso lì pianger non lascia, / e 'l duol che truova in su li occhi rintoppo, / si volge in entro a far crescer l'ambascia; / ché le lagrime prime fanno groppo, / e sì come visiere di cristallo, / rïempion sotto 'l ciglio tutto 'l coppo.",commentary:"At the icy nadir of Dante's Inferno, frozen tears turn the ocular coats into rigid crystal visors. The sclera, as the protective armor of the eye, petrifies: weeping cannot escape, turning inward to intensify existential agony."}},{id:"iris",name:"Iris & Pupil",latin:"Iris / Pupilla",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Anterior Uvea)",pinPosition:[0,0,1.8],cameraTarget:[0,0,1.6],color:"#ca8a04",opticalMetrics:{apertureRange:"2.0 mm (miosis) to 8.0 mm (mydriasis)",focalRatio:"f/2.1 to f/8.3 optical aperture adjustment",aberrationControl:"Restricts peripheral spherical and chromatic aberration"},medicalDescription:"The contractile pigmented diaphragm dividing the anterior and posterior chambers. Regulates retinal illuminance via antagonistic smooth muscle systems: the circumferentially arranged sphincter pupillae (parasympathetic innervation via CN III / ciliary ganglion) and the radially arranged dilator pupillae (sympathetic innervation via superior cervical ganglion). Posterior pigmented epithelium prevents light leakage.",clinicalPathology:"Acute angle-closure glaucoma (pupillary block resulting in aqueous outflow obstruction at the trabecular meshwork), anterior uveitis (iritis with keratic precipitates), Horner's syndrome, Argyll Robertson pupil.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course, Section 2: Fundamentals and Principles of Ophthalmology",url:"https://www.aao.org/education/bcsc"},{authority:"National Institutes of Health (NIH)",title:"National Eye Institute: Pupil Reflex and Uveal Biology",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"Galen of Pergamon",work:"De Usu Partium (On the Usefulness of the Parts of the Body, 2nd Century CE)",note:"Interpreted the pupillary aperture as the conduit for the pneuma optikon (visual spirit) descending from the ventricles of the brain to illuminate the crystalline lens."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' (1987)",quote:"A small light for small people, wanting no / great beam, but testing what they say / with an eye that burns right into your soul / ... Diogenes with his lantern, seeking one just man.",commentary:"The pupil in Heaney becomes Diogenes' lantern: an aperture that tests moral illumination. It does not merely receive light but interrogates the observer with a concentrated, piercing pinpoint."}},{id:"lens",name:"Crystalline Lens & Zonules",latin:"Lens Crystallina",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,1.3],cameraTarget:[0,0,1.2],color:"#e0f2fe",opticalMetrics:{refractiveIndex:"Gradient index: n = 1.386 (cortex) to 1.406 (nucleus)",dioptricPower:"+15.0 to +20.0 Diopters (unaccommodated), up to +30.0 D",accommodation:"Helmholtz mechanism mediated by ciliary muscle contraction"},medicalDescription:"A transparent, biconvex, flexible optical element suspended between the iris and vitreous humor by the delicate zonular fibers of Zinn (ciliary zonule). Highly specialized, mature lens fibers lose their nuclei and organelles to maintain optical clarity, packing high concentrations of crystallin proteins (alpha, beta, gamma). Modulates dynamic focus via Helmholtzian accommodation.",clinicalPathology:"Cataracts (nuclear sclerotic, cortical, or posterior subcapsular opacification due to crystallin protein aggregation), presbyopia (loss of zonular elasticity and lens hardness with age), ectopia lentis (zonular dehiscence in Marfan syndrome).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Lens and Cataract: BCSC Section 11",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI Bookshelf: Webvision",title:"Physiological Optics of the Human Lens and Accommodation",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"}],historicalTreatise:{author:"Galen & Ibn al-Jazzar",work:"Medical Canon on the 'Seat of the Soul' (Classical Antiquity)",note:"From Galen through Islamic medieval medicine, the crystalline lens was mistakenly crowned as the ultimate central organ of visual perception ('principale organum visionis'), rather than a simple refractive lens."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XV & Paradiso, Canto XXVI",quote:"Come quando da l'acqua o da lo specchio / salta lo raggio a l'opposita parte, / salendo su per lo modo parecchio / a quel che scende, e tanto si diparte / dal cader de la pietra in igual tratta, / sì come mostra esperïenza e arte...",commentary:"Dante understands optical accommodation spiritually: as his pilgrim ascends the spheres of Paradise, Beatrice cleanses his ocular crystalline faculty so that his gaze can endure escalating intensities of celestial illumination."}},{id:"ciliaryBody",name:"Ciliary Body & Trabecular Meshwork",latin:"Corpus Ciliare",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Middle Uvea)",pinPosition:[0,1.4,1.1],cameraTarget:[0,1,1],color:"#b45309",opticalMetrics:{aqueousProduction:"2.0–2.5 µL/min secretional rate",accommodationForce:"Smooth muscle vectors adjusting zonular tension",intraocularPressure:"Regulated homeostatically around 15.5 mmHg"},medicalDescription:"The circumferential uveal tissue connecting the choroid with the iris. Composed of two parts: pars plicata (anterior corrugated zone bearing ~70 ciliary processes) and pars plana (posterior flattened zone). Produces aqueous humor through active secretion and ultrafiltration by the dual-layered ciliary epithelium, while containing the smooth ciliary muscle fibers (longitudinal, radial, circular) responsible for lens accommodation.",clinicalPathology:"Primary Open-Angle Glaucoma (trabecular meshwork resistance), cyclitis, hypotony, malignant ciliary block glaucoma.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Glaucoma: Pathophysiology of Aqueous Outflow and Intraocular Pressure",url:"https://www.aao.org/education/bcsc"},{authority:"European Glaucoma Society (EGS)",title:"Terminology and Guidelines for Glaucoma (5th Ed.)",url:"https://www.eugs.org/"}],historicalTreatise:{author:"Hermann von Helmholtz",work:"Handbuch der Physiologischen Optik (Treatise on Physiological Optics, 1856–1867)",note:"Formulated the definitive mechanism of ocular accommodation: ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to bulge into greater convexity."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Tollund Man' & Bog Poems",quote:"Those dark man-killing parishes. / ... I will feel lost, / Unhappy and at home.",commentary:"The hydraulic pressure within the ciliary apparatus parallels the bog's peat-press: an enclosed, dark anatomical engine regulating fluid balance, preserving archaic bodily tensions beneath peat and flesh."}},{id:"choroid",name:"Choroid",latin:"Choroidea",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Posterior Uvea)",pinPosition:[0,-1.6,-.6],cameraTarget:[0,-1.2,-.5],color:"#7f1d1d",opticalMetrics:{bloodFlow:"Highest blood flow per unit weight in human body (~1000 mL/min/100g)",pigmentation:"Dense melanin concentration for thermal/light dissipation",thickness:"0.2 mm (posterior pole) thinning to 0.1 mm anteriorly"},medicalDescription:"The posterior, extensively vascularized section of the uveal tract bounded internally by Bruch's membrane and externally by the sclera. Formed of four histological layers: Haller's layer (large vessel layer), Sattler's layer (medium vessels), choriocapillaris (fenestrated capillary monolayer), and Bruch's membrane (extracellular lamina). Nourishes the avascular outer retina, photoreceptors, and retinal pigment epithelium.",clinicalPathology:"Choroidal neovascularization (CNV in wet age-related macular degeneration), choroidal melanoma, central serous chorioretinopathy, choroidal detachment.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Retina and Vitreous: BCSC Section 12",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / NIH Webvision",title:"The Choroid: Anatomy, Vascular Architecture, and Bruch's Membrane",url:"https://www.ncbi.nlm.nih.gov/books/NBK11554/"}],historicalTreatise:{author:"Johannes Kepler",work:"Ad Vitellionem Paralipomena (Astronomiae Pars Optica, 1604)",note:"Recognized the choroid as the dark, light-absorptive lining of the anatomical camera obscura, preventing internal light back-scatter."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto IX (The City of Dis)",quote:"O voi ch'avete li 'ntelletti sani, / mirate la dottrina che s'asconde / sotto 'l velame de li versi strani.",commentary:"The vascular, blood-gorged choroid is the hidden anatomical veil ('velame') beneath the visual screen: a dark, pulsing under-tunic that sustains perception while remaining entirely concealed from conscious sight."}},{id:"vitreous",name:"Vitreous Humor (Corpus Vitreum)",latin:"Corpus Vitreum",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,.2],cameraTarget:[0,0,0],color:"#38bdf8",opticalMetrics:{refractiveIndex:"n = 1.336 (matched closely to aqueous humor)",composition:"98-99% water, type II collagen scaffolding, hyaluronic acid",volume:"4.0 mL (~80% of total globe volume)"},medicalDescription:"A clear, viscoelastic, transparent gel occupying the posterior four-fifths of the globe between the lens and retina. The hyaloid membrane encloses the vitreous core and establishes firm anatomical attachments at the vitreous base (straddling the ora serrata), optic disc margin, macula, and retinal blood vessels. Traversed embryologically by Cloquet's canal (vestige of the fetal hyaloid artery).",clinicalPathology:"Posterior vitreous detachment (PVD), vitreous hemorrhage, asteroid hyalosis, vitreomacular traction syndrome, floaters (vitreous syneresis).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Vitreous Body Physiology and Vitreoretinal Surgery",url:"https://www.aao.org/education/bcsc"},{authority:"National Eye Institute (NEI / NIH)",title:"Vitreous Mechanics and Retinal Traction",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"René Descartes",work:"La Dioptrique (1637)",note:"Used the transparent vitreous humor as a mechanical medium in his treatise on optics to model the physical transmission of motion particles (photons) directly onto the cerebral pineal gland."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Grauballe Man' & Bog Poems",quote:"As if he had been poured / in tar, he lies / on a pillow of turf / and seems to weep / the black river of himself.",commentary:"The vitreous body is the internal gelatinous abyss of the eye: a preserved, primordial fluid chamber preserving optical memory just as the peat bog embalms the sacrificed body in fluid suspension."}},{id:"retina",name:"Retina & Ora Serrata",latin:"Tunica Interna / Retina",layerCategory:"nervosa",layer:"Tunica Nervosa (Inner Sensorium)",pinPosition:[-1.2,.8,-.8],cameraTarget:[-1,.6,-.6],color:"#f43f5e",opticalMetrics:{photoreceptorCount:"~120 million rods, ~6 million cones",signalTransduction:"11-cis-retinal photoisomerization to all-trans-retinal in <1 picosecond",thickness:"100 µm at ora serrata to 230 µm adjacent to optic disc"},medicalDescription:"The neurosensory tissue of the inner eye that converts incident photons into action potentials. Histologically organized into 10 precisely stratified layers: (1) Retinal Pigment Epithelium, (2) Photoreceptor layer, (3) External Limiting Membrane, (4) Outer Nuclear Layer, (5) Outer Plexiform Layer, (6) Inner Nuclear Layer, (7) Inner Plexiform Layer, (8) Ganglion Cell Layer, (9) Nerve Fiber Layer, and (10) Internal Limiting Membrane.",clinicalPathology:"Rhegmatogenous retinal detachment (retinal tears allowing liquefied vitreous subretinal access), diabetic retinopathy, retinitis pigmentosa, retinal vein occlusion.",medicalSources:[{authority:"NCBI Bookshelf: Webvision",title:"The Organization of the Retina and Visual System (Kolb, Fernandez, Nelson)",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"},{authority:"American Academy of Ophthalmology (AAO)",title:"Retinal Anatomy, Physiology, and Vascular Diseases: BCSC Section 12",url:"https://www.aao.org/education/bcsc"}],historicalTreatise:{author:"Johannes Kepler & Santiago Ramón y Cajal",work:"Ad Vitellionem Paralipomena (1604) / The Structure of the Retina (1892)",note:"Kepler proved mathematically that an inverted and reversed physical image is projected onto the retinal screen; Cajal subsequently proved the individual neuronal circuit architecture using Golgi staining."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXXIII (The Beatific Vision)",quote:"Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",commentary:"Dante's climax in the Empyrean is the ultimate retinal exposure: the divine trinity appears as three concentric rings of light of three distinct colors, striking the pilgrim's sensorium directly in pure optical geometry."}},{id:"fovea",name:"Macula Lutea & Fovea Centralis",latin:"Fovea Centralis",layerCategory:"nervosa",layer:"Tunica Nervosa (Visual Axis Core)",pinPosition:[0,0,-1.85],cameraTarget:[0,0,-1.6],color:"#f59e0b",opticalMetrics:{diameter:"1.5 mm (Fovea), 0.35 mm (Foveola / avascular zone)",visualAcuity:"20/20 central foveal acuity (100% packed midget cone system)",pigmentation:"High concentration of lutein and zeaxanthin carotenoids"},medicalDescription:"The specialized, avascular central retinal depression located ~4.0 mm temporal and 0.8 mm inferior to the optic disc center. In the foveola, inner retinal layers are displaced laterally (creating the foveal pit/clivus) to allow unhindered light access to densely packed cone photoreceptors (~200,000 cones/mm²), providing maximal visual resolution and trichromatic color vision.",clinicalPathology:"Age-Related Macular Degeneration (dry/wet AMD with drusen and geographic atrophy), macular hole, central serous chorioretinopathy, cystoid macular edema.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Age-Related Macular Degeneration PPP (Preferred Practice Pattern)",url:"https://www.aao.org/preferred-practice-pattern/age-related-macular-degeneration-ppp"},{authority:"Journal of Comparative Neurology",title:"Curcio CA, et al. 'Human photoreceptor topography' (1990)",url:"https://pubmed.ncbi.nlm.nih.gov/2358643/"}],historicalTreatise:{author:"Samuel Thomas von Sömmerring",work:"De Foramine Centrali Retinae (1799)",note:"First documented the yellow pigment (macula lutea) and central foveal pit ('foramen centrale') in the human ocular fundus."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXVIII",quote:"Un punto vidi che raggiava lume / acuto sì, che 'l viso ch'elli affoca / chiuder conviensi per lo forte acume; / e quale stella par quinci più poca, / parrebbe luna, locata con esso / come stella con stella si colloca.",commentary:"The fovea centralis is Dante's 'point that radiated light so piercing'—an infinitesimal, blazing focal point of pure resolution around which the entire universe and sensory apparatus pivots."}},{id:"opticDisc",name:"Optic Disc (Mariotte's Blind Spot)",latin:"Discus Nervi Optici / Punctum Caecum",layerCategory:"neural",layer:"Neural Pathways / Physiological Scotoma",pinPosition:[.9,.2,-1.75],cameraTarget:[.7,.2,-1.5],color:"#fbbf24",opticalMetrics:{scotomaSize:"5.5° wide by 7.5° high in visual field (~15° temporal to fixation)",dimension:"1.5 mm horizontal x 1.75 mm vertical diameter",photoreceptorDensity:"Zero (complete absence of rods and cones)"},medicalDescription:"The anatomical exit point for ~1.2 million unmyelinated axons of retinal ganglion cells as they coalesce and pass through the fenestrated scleral lamina cribrosa. Because the disc is devoid of photoreceptors and retinal pigment epithelium, it generates an absolute physiological scotoma (blind spot) in the visual field. Contains the physiological cup and the central retinal artery/vein bifurcations.",clinicalPathology:"Papilledema (bilateral optic disc swelling from elevated intracranial pressure), glaucomatous optic neuropathy (cupping and neuroretinal rim loss), ischemic optic neuropathy (AION/NAION).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology: BCSC Section 5",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / StatPearls",title:"Physiology, Blind Spot (Punctum Caecum)",url:"https://www.ncbi.nlm.nih.gov/books/NBK545229/"}],historicalTreatise:{author:"Edme Mariotte",work:"Nouvelle Découverte touchant la Vue (Royal Academy of Sciences, Paris, 1668)",note:"Discovered the physiological blind spot by demonstrating that an object positioned at a 15-degree eccentricity disappears completely when its image strikes the optic nerve head."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' & 'The Underground'",quote:"There we were in the vaulted tunnel running, / You ahead of me, / ... All the while / I thought of Orpheus, turning to look back.",commentary:"Mariotte's blind spot is the structural blind spot of Orpheus: the inevitable dark void in the center of perception where looking directly causes the object of desire to vanish. Vision is constructed around what it cannot see."}},{id:"opticNerve",name:"Optic Nerve (Cranial Nerve II)",latin:"Nervus Opticus (CN II)",layerCategory:"neural",layer:"Neural Pathways (Ocular-Cerebral Conduit)",pinPosition:[.9,.2,-2.8],cameraTarget:[.9,.2,-2.4],color:"#fde047",opticalMetrics:{axonCount:"~1.2 million myelinated nerve fibers (oligodendrocytes post-lamina)",length:"40–50 mm total (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)",sheathMeninges:"Ensheathed by dura mater, arachnoid mater, and pia mater with subarachnoid space (CSF)"},medicalDescription:"The paired cranial nerve transmitting visual sensory information from the retina to the lateral geniculate nucleus (LGN), superior colliculus, and pretectal nuclei. Anatomically not a true peripheral nerve but an outpouching of the diencephalon; thus wrapped by all three meningeal sheaths and vulnerable to intracranial pressure transmitted through the subarachnoid space.",clinicalPathology:"Optic neuritis (demyelination in Multiple Sclerosis), optic nerve glioma, traumatic optic neuropathy, compressive pituitary adenoma at the optic chiasm (bitemporal hemianopia).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology and Optic Nerve Diseases",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy (42nd Ed.)",title:"Cranial Nerves: Cranial Nerve II (Optic Nerve Pathway)",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"}],historicalTreatise:{author:"Andreas Vesalius & Galen",work:"De Humani Corporis Fabrica (1543)",note:"Dismantled the ancient Galenic doctrine that the optic nerves were hollow pipes ('canales perforati') channeling spiritus visivus, proving they were solid fibrillar neural cables leading to the optic chiasm."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XXI & Paradiso, Canto XXX",quote:"Non è fantastico lo splendore ond'io mi sento fasciato; / ... e vidi lume in forma di rivera / fulvido di fulgore, intra due rive / dipinte di mirabil primavera.",commentary:"The optic nerve is the river of light connecting Dante's corporeal body to the Empyrean: a biological cable conveying light through darkness until neural sensation transforms into pure spiritual intellect."}}];function hA({activeStructureId:s,onSelectStructure:e,viewMode:i,activeLayerFilter:r}){const l=Tn.useRef(null),u=Tn.useRef(null),h=Tn.useRef(null),m=Tn.useRef(null),p=Tn.useRef({isDragging:!1,previousMousePosition:{x:0,y:0},rotation:{x:.3,y:-.6},targetRotation:{x:.3,y:-.6},zoom:6.2,targetZoom:6.2}),d=Tn.useRef(null),y=Tn.useRef(null),x=Tn.useRef(null),[g,b]=Tn.useState(null);return Tn.useEffect(()=>{const T=l.current;if(!T)return;const C=new XS;u.current=C;const S=T.clientWidth,_=T.clientHeight||550,O=new fi(45,S/_,.1,100);O.position.set(0,0,p.current.zoom),h.current=O;const B=new uA({antialias:!0,alpha:!0});B.setSize(S,_),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.toneMapping=Fd,B.toneMappingExposure=1.2,B.localClippingEnabled=!0,m.current=B,T.innerHTML="",T.appendChild(B.domElement);const w=new fM(16777215,1.2);C.add(w);const I=new Mv(16775149,2.2);I.position.set(5,8,7),C.add(I);const U=new Mv(8246268,1.4);U.position.set(-6,-4,-5),C.add(U);const P=new cM(13938487,2.5,20);P.position.set(0,5,-5),C.add(P);const E=new Fr;y.current=E,C.add(E);const N=new Fr;d.current=N,E.add(N),dA(E,i,r),jv(N,sr,s,r);let k=!1,G=0,q=0;const ce=W=>{W.button!==0&&W.button!==2||(k=!0,G=W.clientX,q=W.clientY)},pe=W=>{const de=B.domElement.getBoundingClientRect(),xe=(W.clientX-de.left)/de.width*2-1,De=-((W.clientY-de.top)/de.height)*2+1,et=new Ev;if(et.setFromCamera(new ft(xe,De),O),d.current){const at=d.current.children.map(ht=>ht.children[0]).filter(Boolean),dt=et.intersectObjects(at);if(dt.length>0){const ht=dt[0].object.userData.structureId;b(ht),B.domElement.style.cursor="pointer"}else b(null),B.domElement.style.cursor=k?"grabbing":"grab"}if(!k)return;const Ze=W.clientX-G,Dt=W.clientY-q;p.current.targetRotation.y+=Ze*.008,p.current.targetRotation.x+=Dt*.008,p.current.targetRotation.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,p.current.targetRotation.x)),G=W.clientX,q=W.clientY},j=()=>{k=!1,B.domElement.style.cursor="grab"},z=W=>{const de=B.domElement.getBoundingClientRect(),xe=(W.clientX-de.left)/de.width*2-1,De=-((W.clientY-de.top)/de.height)*2+1,et=new Ev;if(et.setFromCamera(new ft(xe,De),O),d.current){const Ze=d.current.children.map(at=>at.children[0]).filter(Boolean),Dt=et.intersectObjects(Ze);if(Dt.length>0){const at=Dt[0].object.userData.structureId;at&&e&&e(at)}}},H=W=>{W.preventDefault(),p.current.targetZoom+=W.deltaY*.005,p.current.targetZoom=Math.max(3.5,Math.min(10,p.current.targetZoom))},$=B.domElement;$.addEventListener("mousedown",ce),window.addEventListener("mousemove",pe),window.addEventListener("mouseup",j),$.addEventListener("click",z),$.addEventListener("wheel",H,{passive:!1});let ge=0;const Ee=W=>{W.touches.length===1?(k=!0,G=W.touches[0].clientX,q=W.touches[0].clientY):W.touches.length===2&&(ge=Math.hypot(W.touches[0].clientX-W.touches[1].clientX,W.touches[0].clientY-W.touches[1].clientY))},L=W=>{if(W.touches.length===1&&k){const de=W.touches[0].clientX-G,xe=W.touches[0].clientY-q;p.current.targetRotation.y+=de*.008,p.current.targetRotation.x+=xe*.008,G=W.touches[0].clientX,q=W.touches[0].clientY}else if(W.touches.length===2){const de=Math.hypot(W.touches[0].clientX-W.touches[1].clientX,W.touches[0].clientY-W.touches[1].clientY),xe=(ge-de)*.01;p.current.targetZoom=Math.max(3.5,Math.min(10,p.current.targetZoom+xe)),ge=de}},K=()=>{k=!1};$.addEventListener("touchstart",Ee,{passive:!0}),$.addEventListener("touchmove",L,{passive:!0}),$.addEventListener("touchend",K,{passive:!0});const Me=new ResizeObserver(W=>{for(let de of W){const xe=de.contentRect.width,De=de.contentRect.height||550;xe>0&&De>0&&(O.aspect=xe/De,O.updateProjectionMatrix(),B.setSize(xe,De))}});Me.observe(T);let Te=new pM;const Oe=()=>{const W=Te.getElapsedTime();p.current.rotation.x+=(p.current.targetRotation.x-p.current.rotation.x)*.1,p.current.rotation.y+=(p.current.targetRotation.y-p.current.rotation.y)*.1,p.current.zoom+=(p.current.targetZoom-p.current.zoom)*.1,E.rotation.x=p.current.rotation.x,E.rotation.y=p.current.rotation.y,O.position.z=p.current.zoom,d.current&&d.current.children.forEach(de=>{const xe=de.children[1];if(xe){const De=1+.25*Math.sin(W*4+de.position.x);xe.scale.set(De,De,De)}}),B.render(C,O),x.current=requestAnimationFrame(Oe)};return Oe(),()=>{x.current&&cancelAnimationFrame(x.current),$.removeEventListener("mousedown",ce),window.removeEventListener("mousemove",pe),window.removeEventListener("mouseup",j),$.removeEventListener("click",z),$.removeEventListener("wheel",H),$.removeEventListener("touchstart",Ee),$.removeEventListener("touchmove",L),$.removeEventListener("touchend",K),Me.disconnect(),B.dispose()}},[i,r]),Tn.useEffect(()=>{d.current&&jv(d.current,sr,s,r)},[s,r]),Tn.useEffect(()=>{if(!s)return;const T=sr.find(C=>C.id===s);if(T&&T.pinPosition){const[C,S,_]=T.pinPosition,O=-Math.atan2(C,_),B=Math.atan2(S,Math.sqrt(C*C+_*_));p.current.targetRotation.y=O,p.current.targetRotation.x=B*.8,p.current.targetZoom=5.2}},[s]),ve.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"520px"},children:[ve.jsx("div",{ref:l,style:{width:"100%",height:"100%",minHeight:"520px",borderRadius:"12px",overflow:"hidden"}}),ve.jsxs("div",{style:{position:"absolute",bottom:"1rem",left:"1rem",display:"flex",gap:"0.5rem",background:"rgba(10, 10, 12, 0.75)",backdropFilter:"blur(10px)",padding:"0.4rem 0.8rem",borderRadius:"8px",border:"1px solid var(--border-glass)",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[ve.jsx("span",{children:"🖱️ Drag to rotate"}),ve.jsx("span",{children:"•"}),ve.jsx("span",{children:"🔍 Scroll to zoom"}),ve.jsx("span",{children:"•"}),ve.jsx("span",{children:"🎯 Click pins to dissect"})]}),g&&ve.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",background:"rgba(20, 21, 26, 0.9)",backdropFilter:"blur(12px)",border:"1px solid var(--accent-gold)",padding:"0.5rem 1rem",borderRadius:"8px",color:"#fff",fontSize:"0.9rem",boxShadow:"0 8px 24px rgba(0,0,0,0.6)",pointerEvents:"none"},children:[ve.jsx("strong",{style:{color:"var(--accent-gold)"},children:sr.find(T=>T.id===g)?.name}),ve.jsx("span",{style:{display:"block",fontSize:"0.75rem",color:"var(--text-secondary)",fontStyle:"italic"},children:sr.find(T=>T.id===g)?.latin})]}),ve.jsx("button",{onClick:()=>{p.current.targetRotation={x:.3,y:-.6},p.current.targetZoom=6.2},style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(20, 21, 26, 0.8)",border:"1px solid var(--border-glass)",color:"var(--text-primary)",padding:"0.4rem 0.8rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",backdropFilter:"blur(8px)",transition:"all 0.2s"},title:"Reset 3D Camera View",children:"↺ Reset View"})]})}function dA(s,e,i){for(;s.children.length>1;)s.remove(s.children[s.children.length-1]);const r=e==="crossSection",l=r?Math.PI*1.35:Math.PI*2,u=i==="all"||i==="fibrosa",h=i==="all"||i==="vasculosa",m=i==="all"||i==="nervosa",p=i==="all"||i==="optical",d=i==="all"||i==="neural";if(u){const y=new xa(2,48,48,0,l,.4,Math.PI-.4),x=new Or({color:15987958,roughness:.35,metalness:.05,side:r?Un:ba}),g=new $t(y,x);g.rotation.y=Math.PI/2,s.add(g);const b=new xa(1.2,36,36,0,Math.PI*2,0,Math.PI/2.2),T=new Ih({color:10875900,transparent:!0,opacity:.45,roughness:.05,metalness:.1,transmission:.85,ior:1.376,side:Un}),C=new $t(b,T);C.position.set(0,0,1.45),C.scale.set(1,1,.7),s.add(C)}if(h){const y=new xa(1.92,40,40,0,l,.45,Math.PI-.45),x=new Or({color:8917815,roughness:.6,metalness:.1,side:Un}),g=new $t(y,x);g.rotation.y=Math.PI/2,s.add(g);const b=new Qc(.45,1.15,36),T=new Or({color:11817737,roughness:.4,side:Un}),C=new $t(b,T);C.position.set(0,0,1.48),s.add(C);const S=new Jd(1.22,.08,16,40),_=new Or({color:7877903,roughness:.5}),O=new $t(S,_);O.position.set(0,0,1.35),s.add(O)}if(m){const y=new xa(1.85,40,40,0,l,.55,Math.PI-.55),x=new Or({color:16007006,roughness:.5,metalness:0,side:Un}),g=new $t(y,x);g.rotation.y=Math.PI/2,s.add(g);const b=new Wc(.2,24),T=new Hr({color:16096779,side:Un}),C=new $t(b,T);C.position.set(0,0,-1.84),s.add(C);const S=new Wc(.22,24),_=new Hr({color:16707722,side:Un}),O=new $t(S,_);O.position.set(.75,.2,-1.78),O.rotation.y=.35,s.add(O)}if(p){const y=new xa(.9,32,32),x=new Ih({color:14742270,transparent:!0,opacity:.8,roughness:.1,transmission:.9,ior:1.406}),g=new $t(y,x);if(g.position.set(0,0,1.25),g.scale.set(.95,.95,.45),s.add(g),r||i==="optical"){const b=new xa(1.8,32,32,0,l),T=new Ih({color:3718648,transparent:!0,opacity:.22,roughness:.1,transmission:.95}),C=new $t(b,T);C.rotation.y=Math.PI/2,s.add(C)}}if(d||u){const y=new qc(.38,.42,1.8,24),x=new Or({color:16707722,roughness:.4,metalness:.1}),g=new $t(y,x);g.position.set(.85,.2,-2.6),g.rotation.x=Math.PI/2+.15,g.rotation.z=-.15,s.add(g);const b=new qc(.04,.04,1.8,12),T=new Hr({color:14427686}),C=new $t(b,T);C.position.set(.82,.24,-2.6),C.rotation.x=Math.PI/2+.15,s.add(C)}}function jv(s,e,i,r){for(;s.children.length>0;)s.remove(s.children[0]);e.forEach(l=>{if(r!=="all"&&l.layerCategory!==r)return;const u=l.id===i,h=new Fr;h.position.set(...l.pinPosition);const m=new xa(u?.12:.085,16,16),p=new Hr({color:u?13938487:16777215}),d=new $t(m,p);d.userData={structureId:l.id},h.add(d);const y=new Qc(.12,.16,24),x=new Hr({color:u?13938487:l.color||3718648,side:Un,transparent:!0,opacity:u?.9:.65}),g=new $t(y,x);g.lookAt(0,0,10),h.add(g),s.add(h)})}function pA({structure:s}){const[e,i]=Tn.useState("medical");return s?ve.jsxs("div",{className:"glass-panel",style:{height:"100%",padding:"2rem",display:"flex",flexDirection:"column",overflowY:"auto",maxHeight:"750px",animation:"fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)"},children:[ve.jsxs("div",{style:{borderBottom:"1px solid var(--border-glass)",paddingBottom:"1.25rem",marginBottom:"1.25rem"},children:[ve.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.4rem"},children:[ve.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--accent-crimson)",fontWeight:"600",background:"rgba(158, 42, 43, 0.15)",padding:"0.2rem 0.6rem",borderRadius:"4px",border:"1px solid rgba(158, 42, 43, 0.3)"},children:s.layer}),ve.jsx("span",{style:{fontStyle:"italic",color:"var(--text-secondary)",fontSize:"0.9rem"},children:s.latin})]}),ve.jsx("h2",{style:{fontSize:"2.2rem",color:"var(--accent-gold)",margin:"0.2rem 0 0.5rem 0"},children:s.name}),s.opticalMetrics&&ve.jsx("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginTop:"0.75rem"},children:Object.entries(s.opticalMetrics).map(([r,l])=>ve.jsxs("span",{style:{fontSize:"0.8rem",background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-glass)",padding:"0.25rem 0.6rem",borderRadius:"6px",color:"var(--text-primary)"},children:[ve.jsxs("strong",{style:{color:"var(--accent-gold)",textTransform:"capitalize"},children:[r.replace(/([A-Z])/g," $1"),":"]})," ",l]},r))})]}),ve.jsxs("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(0, 0, 0, 0.3)",padding:"0.3rem",borderRadius:"8px",marginBottom:"1.5rem",border:"1px solid var(--border-glass)",overflowX:"auto"},children:[ve.jsx("button",{onClick:()=>i("medical"),style:Lc(e==="medical"),children:"🩺 Anatomy & Pathology"}),ve.jsxs("button",{onClick:()=>i("sources"),style:Lc(e==="sources"),children:["📚 Medical Sources (",s.medicalSources?.length||0,")"]}),ve.jsx("button",{onClick:()=>i("history"),style:Lc(e==="history"),children:"📜 Historical Treatise"}),ve.jsx("button",{onClick:()=>i("literary"),style:Lc(e==="literary"),children:"🖋️ Literary Analysis"})]}),ve.jsxs("div",{style:{flex:1},children:[e==="medical"&&ve.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",borderRadius:"8px",borderLeft:"4px solid var(--accent-gold)"},children:[ve.jsx("h4",{style:{color:"var(--text-primary)",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Histological Organization & Physiology"}),ve.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.medicalDescription})]}),s.clinicalPathology&&ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.08)",borderRadius:"8px",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.2)"},children:[ve.jsx("h4",{style:{color:"#f87171",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Clinical Pathologies & Diagnostics"}),ve.jsx("p",{style:{fontSize:"0.92rem",lineHeight:"1.6",color:"var(--text-primary)"},children:s.clinicalPathology})]})]}),e==="sources"&&ve.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[ve.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"0.25rem"},children:"Data and anatomical parameters pooled from peer-reviewed ophthalmic authorities and institutional curricula:"}),s.medicalSources?.map((r,l)=>ve.jsxs("div",{className:"interactive-card",style:{padding:"1rem 1.25rem",background:"rgba(20, 21, 26, 0.8)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[ve.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.3rem"},children:[ve.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-gold)",fontWeight:"600"},children:r.authority}),ve.jsx("span",{style:{fontSize:"0.75rem",color:"#6ee7b7"},children:"✓ Verified Peer-Reviewed"})]}),ve.jsx("h5",{style:{fontSize:"0.95rem",color:"var(--text-primary)",marginBottom:"0.5rem",fontWeight:"500"},children:r.title||r.citation}),r.url&&ve.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem",color:"var(--accent-gold)",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:"View Authority Catalog ↗"})]},l))]}),e==="history"&&s.historicalTreatise&&ve.jsxs("div",{style:{padding:"1.5rem",background:"rgba(216, 184, 99, 0.05)",border:"1px solid rgba(216, 184, 99, 0.2)",borderRadius:"10px"},children:[ve.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"var(--accent-gold)"},children:"Historical Anatomical Root"}),ve.jsx("h3",{style:{fontSize:"1.3rem",color:"var(--text-primary)",margin:"0.4rem 0"},children:s.historicalTreatise.author}),ve.jsx("p",{style:{fontStyle:"italic",color:"var(--accent-gold)",marginBottom:"1rem",fontSize:"0.95rem"},children:s.historicalTreatise.work}),ve.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-primary)"},children:s.historicalTreatise.note})]}),e==="literary"&&s.literaryAnalysis&&ve.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.1)",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.25)",borderRadius:"8px"},children:[ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[ve.jsx("span",{style:{color:"var(--accent-crimson)",fontWeight:"bold",fontSize:"0.9rem"},children:s.literaryAnalysis.figure}),ve.jsx("span",{style:{fontStyle:"italic",fontSize:"0.85rem",color:"var(--text-secondary)"},children:s.literaryAnalysis.text})]}),ve.jsxs("blockquote",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"1.05rem",color:"var(--text-primary)",lineHeight:"1.6",margin:"0.75rem 0"},children:['"',s.literaryAnalysis.quote,'"']})]}),ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[ve.jsx("h5",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Critical Commentary"}),ve.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.literaryAnalysis.commentary})]})]})]})]}):ve.jsxs("div",{className:"glass-panel",style:{height:"100%",minHeight:"450px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2.5rem",textAlign:"center",color:"var(--text-secondary)"},children:[ve.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem",opacity:.8},children:"👁️"}),ve.jsx("h3",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"1.4rem"},children:"3D Interactive Ocular Dissection"}),ve.jsx("p",{style:{maxWidth:"380px",fontSize:"0.95rem",lineHeight:"1.6"},children:"Click on any glowing anatomical pin in the 3D viewport or select a structure from the directory to inspect its medical anatomy, clinical citations, and literary resonance."})]})}function Lc(s){return{flex:"1 1 auto",padding:"0.55rem 0.8rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:s?"600":"400",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"}}function mA(){const[s,e]=Tn.useState("cornea"),[i,r]=Tn.useState("crossSection"),[l,u]=Tn.useState("all"),h=sr.find(p=>p.id===s)||sr[0],m=sr.filter(p=>l==="all"||p.layerCategory===l);return ve.jsxs("div",{className:"section-container",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[ve.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:[ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[ve.jsxs("div",{children:[ve.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"2px",color:"var(--accent-gold)"},children:"Interactive 3D Ocular Deep-Map"}),ve.jsx("h2",{style:{fontSize:"2.4rem",color:"var(--text-primary)",marginTop:"0.25rem"},children:"The Dissected Eye: 3D Anatomical Atlas"}),ve.jsxs("p",{style:{maxWidth:"850px",fontSize:"1.05rem",color:"var(--text-secondary)",marginTop:"0.5rem",lineHeight:"1.6"},children:["An interactive WebGL ocular model pooling anatomical datasets from the ",ve.jsx("em",{children:"American Academy of Ophthalmology"}),", ",ve.jsx("em",{children:"NIH Webvision"}),", and ",ve.jsx("em",{children:"Gray's Anatomy"}),". Each biological structure corresponds to an optical and poetic threshold in Dante’s cosmos and Heaney’s katabasis."]})]}),ve.jsxs("div",{style:{display:"flex",background:"rgba(0,0,0,0.4)",padding:"0.35rem",borderRadius:"10px",border:"1px solid var(--border-glass)",gap:"0.3rem"},children:[ve.jsx("button",{onClick:()=>r("crossSection"),style:Jv(i==="crossSection"),title:"Sagittal cross-section revealing internal layers",children:"🔪 Sagittal Dissection"}),ve.jsx("button",{onClick:()=>r("composite"),style:Jv(i==="composite"),title:"Full spherical ocular globe",children:"🌐 Full 3D Eye"})]})]}),ve.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1.5rem",flexWrap:"wrap",borderTop:"1px solid var(--border-glass)",paddingTop:"1.25rem"},children:[ve.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",alignSelf:"center",marginRight:"0.5rem"},children:"Filter Tunics:"}),fA.map(p=>ve.jsx("button",{onClick:()=>u(p.id),style:gA(l===p.id),children:p.label},p.id))]}),ve.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1rem",overflowX:"auto",paddingBottom:"0.4rem"},children:m.map(p=>{const d=p.id===s;return ve.jsxs("button",{onClick:()=>e(p.id),style:{padding:"0.4rem 0.85rem",background:d?"rgba(216, 184, 99, 0.2)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${d?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"20px",color:d?"var(--accent-gold)":"var(--text-secondary)",fontSize:"0.82rem",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"},children:[d?"● ":"",p.name]},p.id)})})]}),ve.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(420px, 1fr))",gap:"1.5rem",alignItems:"stretch"},children:[ve.jsxs("div",{className:"glass-panel",style:{position:"relative",padding:"1rem",display:"flex",flexDirection:"column",minHeight:"560px",border:"1px solid var(--border-glass)"},children:[ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",borderBottom:"1px solid var(--border-glass)",marginBottom:"0.5rem"},children:[ve.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[ve.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}),ve.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-primary)",letterSpacing:"0.5px"},children:"WebGL 3D Anatomical Engine"})]}),ve.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:["Mode: ",i==="crossSection"?"Sagittal Cutaway (Dissection)":"Intact Ocular Globe"]})]}),ve.jsx("div",{style:{flex:1,position:"relative"},children:ve.jsx(hA,{activeStructureId:s,onSelectStructure:p=>e(p),viewMode:i,activeLayerFilter:l})})]}),ve.jsx("div",{style:{minHeight:"560px"},children:ve.jsx(pA,{structure:h})})]})]})}function Jv(s){return{padding:"0.5rem 1rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.85rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function gA(s){return{padding:"0.35rem 0.8rem",background:s?"rgba(216, 184, 99, 0.25)":"rgba(255, 255, 255, 0.04)",border:`1px solid ${s?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.8rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function vA(){return ve.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[ve.jsx("h2",{style:{marginBottom:"1rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Gaze and the Abject Body"}),ve.jsx("p",{style:{marginBottom:"2rem",maxWidth:"800px",fontSize:"1.1rem"},children:'Explore how the "repulsive object" of the corpse, viewed through a medical lens, becomes the site of both poetic reflection and existential disintegration.'}),ve.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:qy.map(s=>ve.jsxs("div",{className:"interactive-card glass-panel",style:{padding:"1.5rem",display:"flex",flexDirection:"column"},children:[ve.jsx("div",{style:{height:"200px",background:"var(--bg-primary)",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border-glass)",color:"var(--text-secondary)",fontStyle:"italic",overflow:"hidden"},children:s.image?ve.jsx("img",{src:s.image,alt:s.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):`[Image Placeholder: ${s.title}]`}),ve.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-crimson)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"0.5rem"},children:s.type}),ve.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"1rem",color:"var(--accent-gold)"},children:s.title}),ve.jsx("p",{style:{fontSize:"0.95rem",flexGrow:1},children:s.description})]},s.id))})]})}function _A(){const[s,e]=Tn.useState("timeline"),i={timeline:ve.jsx(Yy,{}),diagram:ve.jsx(mA,{}),gallery:ve.jsx(vA,{})};return ve.jsxs("div",{className:"app-container",children:[ve.jsxs("header",{className:"glass-panel app-header",style:{margin:"2rem",padding:"2rem",textAlign:"center"},children:[ve.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"0.5rem",color:"var(--accent-gold)"},children:"The Anatomical Gaze"}),ve.jsx("p",{className:"subtitle",style:{fontSize:"1.1rem",marginBottom:"2rem"},children:"Medical Optics, Ocular Anatomy, and the Literary Eye from Dante to Heaney"}),ve.jsxs("nav",{className:"main-nav",style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[ve.jsx("button",{className:`nav-btn interactive-card ${s==="timeline"?"active":""}`,onClick:()=>e("timeline"),style:Xh(s==="timeline"),children:"The Medical Eye"}),ve.jsx("button",{className:`nav-btn interactive-card ${s==="diagram"?"active":""}`,onClick:()=>e("diagram"),style:Xh(s==="diagram"),children:"The Dissected Eye"}),ve.jsx("button",{className:`nav-btn interactive-card ${s==="gallery"?"active":""}`,onClick:()=>e("gallery"),style:Xh(s==="gallery"),children:"The Abject Body"})]})]}),ve.jsx("main",{className:"content-area",style:{margin:"0 2rem 2rem 2rem",minHeight:"60vh"},children:i[s]})]})}function Xh(s){return{padding:"0.75rem 1.5rem",background:s?"var(--accent-crimson)":"var(--bg-glass)",border:`1px solid ${s?"var(--accent-crimson)":"var(--border-glass)"}`,color:"#fff",borderRadius:"8px",fontFamily:"Inter",fontWeight:"500",fontSize:"1rem",cursor:"pointer",transition:"var(--transition-fast)"}}Xy.createRoot(document.getElementById("root")).render(ve.jsx(Tn.StrictMode,{children:ve.jsx(_A,{})}));
