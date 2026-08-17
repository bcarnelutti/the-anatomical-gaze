(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ah={exports:{}},Fo={};var H0;function Hy(){if(H0)return Fo;H0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var G0;function Gy(){return G0||(G0=1,ah.exports=Hy()),ah.exports}var ve=Gy(),rh={exports:{}},lt={};var V0;function Vy(){if(V0)return lt;V0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function _(N,Z,Me){this.props=N,this.context=Z,this.refs=S,this.updater=Me||T}_.prototype.isReactComponent={},_.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=_.prototype;function I(N,Z,Me){this.props=N,this.context=Z,this.refs=S,this.updater=Me||T}var w=I.prototype=new O;w.constructor=I,C(w,_.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function D(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function U(N,Z,Me){var Te=Me.ref;return{$$typeof:s,type:N,key:Z,ref:Te!==void 0?Te:null,props:Me}}function X(N,Z){return U(N.type,Z,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function W(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Me){return Z[Me]})}var ce=/\/+/g;function de(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?W(""+N.key):Z.toString(36)}function Q(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(D,D):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,Z,Me,Te,Oe){var ae=typeof N;(ae==="undefined"||ae==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(ae){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case s:case e:ye=!0;break;case y:return ye=N._init,B(ye(N._payload),Z,Me,Te,Oe)}}if(ye)return Oe=Oe(N),ye=Te===""?"."+de(N,0):Te,P(Oe)?(Me="",ye!=null&&(Me=ye.replace(ce,"$&/")+"/"),B(Oe,Z,Me,"",function(it){return it})):Oe!=null&&(G(Oe)&&(Oe=X(Oe,Me+(Oe.key==null||N&&N.key===Oe.key?"":(""+Oe.key).replace(ce,"$&/")+"/")+ye)),Z.push(Oe)),1;ye=0;var Se=Te===""?".":Te+":";if(P(N))for(var Fe=0;Fe<N.length;Fe++)Te=N[Fe],ae=Se+de(Te,Fe),ye+=B(Te,Z,Me,ae,Oe);else if(Fe=M(N),typeof Fe=="function")for(N=Fe.call(N),Fe=0;!(Te=N.next()).done;)Te=Te.value,ae=Se+de(Te,Fe++),ye+=B(Te,Z,Me,ae,Oe);else if(ae==="object"){if(typeof N.then=="function")return B(Q(N),Z,Me,Te,Oe);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ye}function F(N,Z,Me){if(N==null)return N;var Te=[],Oe=0;return B(N,Te,"","",function(ae){return Z.call(Me,ae,Oe++)}),Te}function J(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(Me){(N._status===0||N._status===-1)&&(N._status=1,N._result=Me)},function(Me){(N._status===0||N._status===-1)&&(N._status=2,N._result=Me)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var me=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ee={map:F,forEach:function(N,Z,Me){F(N,function(){Z.apply(this,arguments)},Me)},count:function(N){var Z=0;return F(N,function(){Z++}),Z},toArray:function(N){return F(N,function(Z){return Z})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=x,lt.Children=Ee,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=I,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,Z,Me){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Te=C({},N.props),Oe=N.key;if(Z!=null)for(ae in Z.key!==void 0&&(Oe=""+Z.key),Z)!E.call(Z,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&Z.ref===void 0||(Te[ae]=Z[ae]);var ae=arguments.length-2;if(ae===1)Te.children=Me;else if(1<ae){for(var ye=Array(ae),Se=0;Se<ae;Se++)ye[Se]=arguments[Se+2];Te.children=ye}return U(N.type,Oe,Te)},lt.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},lt.createElement=function(N,Z,Me){var Te,Oe={},ae=null;if(Z!=null)for(Te in Z.key!==void 0&&(ae=""+Z.key),Z)E.call(Z,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Oe[Te]=Z[Te]);var ye=arguments.length-2;if(ye===1)Oe.children=Me;else if(1<ye){for(var Se=Array(ye),Fe=0;Fe<ye;Fe++)Se[Fe]=arguments[Fe+2];Oe.children=Se}if(N&&N.defaultProps)for(Te in ye=N.defaultProps,ye)Oe[Te]===void 0&&(Oe[Te]=ye[Te]);return U(N,ae,Oe)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:p,render:N}},lt.isValidElement=G,lt.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:J}},lt.memo=function(N,Z){return{$$typeof:d,type:N,compare:Z===void 0?null:Z}},lt.startTransition=function(N){var Z=z.T,Me={};z.T=Me;try{var Te=N(),Oe=z.S;Oe!==null&&Oe(Me,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(D,me)}catch(ae){me(ae)}finally{Z!==null&&Me.types!==null&&(Z.types=Me.types),z.T=Z}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(N){return z.H.use(N)},lt.useActionState=function(N,Z,Me){return z.H.useActionState(N,Z,Me)},lt.useCallback=function(N,Z){return z.H.useCallback(N,Z)},lt.useContext=function(N){return z.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,Z){return z.H.useDeferredValue(N,Z)},lt.useEffect=function(N,Z){return z.H.useEffect(N,Z)},lt.useEffectEvent=function(N){return z.H.useEffectEvent(N)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(N,Z,Me){return z.H.useImperativeHandle(N,Z,Me)},lt.useInsertionEffect=function(N,Z){return z.H.useInsertionEffect(N,Z)},lt.useLayoutEffect=function(N,Z){return z.H.useLayoutEffect(N,Z)},lt.useMemo=function(N,Z){return z.H.useMemo(N,Z)},lt.useOptimistic=function(N,Z){return z.H.useOptimistic(N,Z)},lt.useReducer=function(N,Z,Me){return z.H.useReducer(N,Z,Me)},lt.useRef=function(N){return z.H.useRef(N)},lt.useState=function(N){return z.H.useState(N)},lt.useSyncExternalStore=function(N,Z,Me){return z.H.useSyncExternalStore(N,Z,Me)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.8",lt}var k0;function Bd(){return k0||(k0=1,rh.exports=Vy()),rh.exports}var Tn=Bd(),sh={exports:{}},Ho={},oh={exports:{}},lh={};var X0;function ky(){return X0||(X0=1,(function(s){function e(B,F){var J=B.length;B.push(F);e:for(;0<J;){var me=J-1>>>1,Ee=B[me];if(0<l(Ee,F))B[me]=F,B[J]=Ee,J=me;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var F=B[0],J=B.pop();if(J!==F){B[0]=J;e:for(var me=0,Ee=B.length,N=Ee>>>1;me<N;){var Z=2*(me+1)-1,Me=B[Z],Te=Z+1,Oe=B[Te];if(0>l(Me,J))Te<Ee&&0>l(Oe,Me)?(B[me]=Oe,B[Te]=J,me=Te):(B[me]=Me,B[Z]=J,me=Z);else if(Te<Ee&&0>l(Oe,J))B[me]=Oe,B[Te]=J,me=Te;else break e}}return F}function l(B,F){var J=B.sortIndex-F.sortIndex;return J!==0?J:B.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var m=[],d=[],y=1,x=null,g=3,M=!1,T=!1,C=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var F=i(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=B)r(d),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(d)}}function P(B){if(C=!1,w(B),!T)if(i(m)!==null)T=!0,D||(D=!0,W());else{var F=i(d);F!==null&&Q(P,F.startTime-B)}}var D=!1,z=-1,E=5,U=-1;function X(){return S?!0:!(s.unstable_now()-U<E)}function G(){if(S=!1,D){var B=s.unstable_now();U=B;var F=!0;try{e:{T=!1,C&&(C=!1,O(z),z=-1),M=!0;var J=g;try{t:{for(w(B),x=i(m);x!==null&&!(x.expirationTime>B&&X());){var me=x.callback;if(typeof me=="function"){x.callback=null,g=x.priorityLevel;var Ee=me(x.expirationTime<=B);if(B=s.unstable_now(),typeof Ee=="function"){x.callback=Ee,w(B),F=!0;break t}x===i(m)&&r(m),w(B)}else r(m);x=i(m)}if(x!==null)F=!0;else{var N=i(d);N!==null&&Q(P,N.startTime-B),F=!1}}break e}finally{x=null,g=J,M=!1}F=void 0}}finally{F?W():D=!1}}}var W;if(typeof I=="function")W=function(){I(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=G,W=function(){de.postMessage(null)}}else W=function(){_(G,0)};function Q(B,F){z=_(function(){B(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(B){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var J=g;g=F;try{return B()}finally{g=J}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return F()}finally{g=J}},s.unstable_scheduleCallback=function(B,F,J){var me=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,B){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,B={id:y++,callback:F,priorityLevel:B,startTime:J,expirationTime:Ee,sortIndex:-1},J>me?(B.sortIndex=J,e(d,B),i(m)===null&&B===i(d)&&(C?(O(z),z=-1):C=!0,Q(P,J-me))):(B.sortIndex=Ee,e(m,B),T||M||(T=!0,D||(D=!0,W()))),B},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(B){var F=g;return function(){var J=g;g=F;try{return B.apply(this,arguments)}finally{g=J}}}})(lh)),lh}var W0;function Xy(){return W0||(W0=1,oh.exports=ky()),oh.exports}var ch={exports:{}},Pn={};var q0;function Wy(){if(q0)return Pn;q0=1;var s=Bd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:y}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(m,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,y)},Pn.flushSync=function(m){var d=h.T,y=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=y,r.d.f()}},Pn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Pn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Pn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var y=d.as,x=p(y,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):y==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Pn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,x=p(y,d.crossOrigin);r.d.L(m,y,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(m,d){if(typeof m=="string")if(d){var y=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Pn.requestFormReset=function(m){r.d.r(m)},Pn.unstable_batchedUpdates=function(m,d){return m(d)},Pn.useFormState=function(m,d,y){return h.H.useFormState(m,d,y)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.8",Pn}var Y0;function qy(){if(Y0)return ch.exports;Y0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ch.exports=Wy(),ch.exports}var Z0;function Yy(){if(Z0)return Ho;Z0=1;var s=Xy(),e=Bd(),i=qy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case D:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function N(t){return{current:t}}function Z(t){0>Ee||(t.current=me[Ee],me[Ee]=null,Ee--)}function Me(t,n){Ee++,me[Ee]=t.current,t.current=n}var Te=N(null),Oe=N(null),ae=N(null),ye=N(null);function Se(t,n){switch(Me(ae,n),Me(Oe,t),Me(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?c0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=c0(n),t=u0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Te),Me(Te,t)}function Fe(){Z(Te),Z(Oe),Z(ae)}function it(t){t.memoizedState!==null&&Me(ye,t);var n=Te.current,a=u0(n,t.type);n!==a&&(Me(Oe,t),Me(Te,a))}function Qe(t){Oe.current===t&&(Z(Te),Z(Oe)),ye.current===t&&(Z(ye),Po._currentValue=J)}var Ue,Ke;function at(t){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",Ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+t+Ke}var st=!1;function ut(t,n){if(!t||st)return"";st=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var oe=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){oe=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){oe=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var H=v.split(`
`),te=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===te.length)for(o=H.length-1,u=te.length-1;1<=o&&0<=u&&H[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==te[u]){var pe=`
`+H[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{st=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==n&&n!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return at("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Nt=Object.prototype.hasOwnProperty,Jt=s.unstable_scheduleCallback,Ut=s.unstable_cancelCallback,sn=s.unstable_shouldYield,Y=s.unstable_requestPaint,Gt=s.unstable_now,wt=s.unstable_getCurrentPriorityLevel,L=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,j=s.unstable_NormalPriority,re=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Ae=s.log,De=s.unstable_setDisableYieldValue,ue=null,he=null;function Ce(t){if(typeof Ae=="function"&&De(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(ue,t)}catch{}}var He=Math.clz32?Math.clz32:Je,Pe=Math.log,Le=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Pe(t)/Le|0)|0}var $e=256,ot=262144,k=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(v&=R,v!==0?u=Re(v):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):v!==0?u=Re(v):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $t(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-He(a),xe=1<<pe;R[pe]=0,H[pe]=-1;var oe=te[pe];if(oe!==null)for(te[pe]=null,pe=0;pe<oe.length;pe++){var le=oe[pe];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&Ot(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ot(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-He(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:Zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ks(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qs(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:N0(t.type))}function Wr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Ni=Math.random().toString(36).slice(2),hn="__reactFiber$"+Ni,Cn="__reactProps$"+Ni,kn="__reactContainer$"+Ni,ur="__reactEvents$"+Ni,rl="__reactListeners$"+Ni,sl="__reactHandles$"+Ni,fr="__reactResources$"+Ni,Aa="__reactMarker$"+Ni;function Ra(t){delete t[hn],delete t[Cn],delete t[ur],delete t[rl],delete t[sl]}function Ki(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[kn]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=v0(t);t!==null;){if(a=t[hn])return a;t=v0(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[hn]||t[kn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ca(t){var n=t[fr];return n||(n=t[fr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Aa]=!0}var ol=new Set,A={};function q(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)ol.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Ie={};function Ve(t){return Nt.call(Ie,t)?!0:Nt.call(ie,t)?!1:ne.test(t)?Ie[t]=!0:(ie[t]=!0,!1)}function Ne(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pt=/[\n"\\]/g;function It(t){return t.replace(Pt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?gt(t,v,et(n)):a!=null?gt(t,v,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function On(t,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),At(t)}function gt(t,n,a){n==="number"&&qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&tn(t,f,n[f])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(t){return wa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var eu=null;function tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qr=null,Yr=null;function lp(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[Cn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Cn]||null;if(!u)throw Error(r(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&en(o)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var nu=!1;function cp(t,n,a){if(nu)return t(n,a);nu=!0;try{var o=t(n);return o}finally{if(nu=!1,(qr!==null||Yr!==null)&&(Zl(),qr&&(n=qr,t=Yr,Yr=qr=null,lp(n),t)))for(n=0;n<t.length;n++)lp(t[n])}}function js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Ji)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{iu=!1}var Da=null,au=null,ll=null;function up(){if(ll)return ll;var t,n=au,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ll=u.slice(t,1<o?1-o:void 0)}function cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function fp(){return!1}function Xn(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:fp,this.isPropagationStopped=fp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Xn(pr),$s=x({},pr,{view:0,detail:0}),B_=Xn($s),ru,su,eo,hl=x({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(ru=t.screenX-eo.screenX,su=t.screenY-eo.screenY):su=ru=0,eo=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),hp=Xn(hl),F_=x({},hl,{dataTransfer:0}),H_=Xn(F_),G_=x({},$s,{relatedTarget:0}),ou=Xn(G_),V_=x({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=Xn(V_),X_=x({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W_=Xn(X_),q_=x({},pr,{data:0}),dp=Xn(q_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K_[t])?!!n[t]:!1}function lu(){return Q_}var j_=x({},$s,{key:function(t){if(t.key){var n=Y_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J_=Xn(j_),$_=x({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Xn($_),ex=x({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),tx=Xn(ex),nx=x({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=Xn(nx),ax=x({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=Xn(ax),sx=x({},pr,{newState:0,oldState:0}),ox=Xn(sx),lx=[9,13,27,32],cu=Ji&&"CompositionEvent"in window,to=null;Ji&&"documentMode"in document&&(to=document.documentMode);var cx=Ji&&"TextEvent"in window&&!to,mp=Ji&&(!cu||to&&8<to&&11>=to),gp=" ",vp=!1;function _p(t,n){switch(t){case"keyup":return lx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function ux(t,n){switch(t){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(vp=!0,gp);case"textInput":return t=n.data,t===gp&&vp?null:t;default:return null}}function fx(t,n){if(Zr)return t==="compositionend"||!cu&&_p(t,n)?(t=up(),ll=au=Da=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mp&&n.locale!=="ko"?null:n.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hx[t.type]:n==="textarea"}function Sp(t,n,a,o){qr?Yr?Yr.push(o):Yr=[o]:qr=o,n=tc(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function dx(t){i0(t,0)}function dl(t){var n=hr(t);if(en(n))return t}function Mp(t,n){if(t==="change")return n}var bp=!1;if(Ji){var uu;if(Ji){var fu="oninput"in document;if(!fu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),fu=typeof Ep.oninput=="function"}uu=fu}else uu=!1;bp=uu&&(!document.documentMode||9<document.documentMode)}function Tp(){no&&(no.detachEvent("onpropertychange",Ap),io=no=null)}function Ap(t){if(t.propertyName==="value"&&dl(io)){var n=[];Sp(n,io,t,tu(t)),cp(dx,n)}}function px(t,n,a){t==="focusin"?(Tp(),no=n,io=a,no.attachEvent("onpropertychange",Ap)):t==="focusout"&&Tp()}function mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(io)}function gx(t,n){if(t==="click")return dl(n)}function vx(t,n){if(t==="input"||t==="change")return dl(n)}function _x(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:_x;function ao(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Nt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=Rp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function wp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qt(t.document)}return n}function hu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var xx=Ji&&"documentMode"in document&&11>=document.documentMode,Kr=null,du=null,ro=null,pu=!1;function Up(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Kr==null||Kr!==qt(o)||(o=Kr,"selectionStart"in o&&hu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=tc(du,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Kr)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},mu={},Lp={};Ji&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function gr(t){if(mu[t])return mu[t];if(!Qr[t])return t;var n=Qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return mu[t]=n[a];return t}var Np=gr("animationend"),Op=gr("animationiteration"),Pp=gr("animationstart"),yx=gr("transitionrun"),Sx=gr("transitionstart"),Mx=gr("transitioncancel"),Ip=gr("transitionend"),zp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Ti(t,n){zp.set(t,n),q(n,[t])}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],jr=0,vu=0;function ml(){for(var t=jr,n=vu=jr=0;n<t;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Bp(a,u,f)}}function gl(t,n,a,o){pi[jr++]=t,pi[jr++]=n,pi[jr++]=a,pi[jr++]=o,vu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function _u(t,n,a,o){return gl(t,n,a,o),vl(t)}function vr(t,n){return gl(t,null,null,n),vl(t)}function Bp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-He(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(t){if(50<Co)throw Co=0,Cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Jr={};function bx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new bx(t,n,a,o)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")xu(t)&&(v=1);else if(typeof t=="string")v=Cy(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=ii(31,a,n,u),t.elementType=U,t.lanes=f,t;case C:return _r(a.children,u,f,n);case S:v=8,u|=24;break;case _:return t=ii(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case P:return t=ii(13,a,n,u),t.elementType=P,t.lanes=f,t;case D:return t=ii(19,a,n,u),t.elementType=D,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:v=10;break e;case O:v=9;break e;case w:v=11;break e;case z:v=14;break e;case E:v=16,o=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ii(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function _r(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function yu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function Hp(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function Su(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gp=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},Gp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var $r=[],es=0,xl=null,so=0,gi=[],vi=0,Ua=null,Pi=1,Ii="";function ea(t,n){$r[es++]=so,$r[es++]=xl,xl=t,so=n}function Vp(t,n,a){gi[vi++]=Pi,gi[vi++]=Ii,gi[vi++]=Ua,Ua=t;var o=Pi;t=Ii;var u=32-He(o)-1;o&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Pi=1<<32-He(n)+u|a<<u|o,Ii=f+t}else Pi=1<<f|a<<u|o,Ii=t}function Mu(t){t.return!==null&&(ea(t,1),Vp(t,1,0))}function bu(t){for(;t===xl;)xl=$r[--es],$r[es]=null,so=$r[--es],$r[es]=null;for(;t===Ua;)Ua=gi[--vi],gi[vi]=null,Ii=gi[--vi],gi[vi]=null,Pi=gi[--vi],gi[vi]=null}function kp(t,n){gi[vi++]=Pi,gi[vi++]=Ii,gi[vi++]=Ua,Pi=n.id,Ii=n.overflow,Ua=t}var wn=null,Kt=null,bt=!1,La=null,_i=!1,Eu=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(mi(n,t)),Eu}function Xp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[Cn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)_t(Do[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||o0(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Na(t,!0)}function Wp(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:wn=wn.return}}function ts(t){if(t!==wn)return!1;if(!bt)return Wp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kf(t.type,t.memoizedProps)),a=!a),a&&Kt&&Na(t),Wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=g0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=g0(t)}else n===27?(n=Kt,Ya(t.type)?(t=Zf,Zf=null,Kt=t):Kt=n):Kt=wn?yi(t.stateNode.nextSibling):null;return!0}function xr(){Kt=wn=null,bt=!1}function Tu(){var t=La;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),La=null),t}function oo(t){La===null?La=[t]:La.push(t)}var Au=N(null),yr=null,ta=null;function Oa(t,n,a){Me(Au,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Au.current,Z(Au)}function Ru(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Cu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Ru(f.return,a,t),o||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ru(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ns(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var R=u.type;ni(u.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Cu(n,t,a,o),n.flags|=262144}function yl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){yr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return qp(yr,t)}function Sl(t,n){return yr===null&&Sr(t),qp(t,n)}function qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(r(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var Ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Tx=s.unstable_scheduleCallback,Ax=s.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new Ex,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&Tx(Ax,function(){t.controller.abort()})}var co=null,Du=0,is=0,as=null;function Rx(t,n){if(co===null){var a=co=[];Du=0,is=Of(),as={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Du++,n.then(Yp,Yp),n}function Yp(){if(--Du===0&&co!==null){as!==null&&(as.status="fulfilled");var t=co;co=null,is=0,as=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=B.S;B.S=function(t,n){Ug=Gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(t,n),Zp!==null&&Zp(t,n)};var Mr=N(null);function Uu(){var t=Mr.current;return t!==null?t:Yt.pooledCache}function Ml(t,n){n===null?Me(Mr,Mr.current):Me(Mr,n.pool)}function Kp(){var t=Uu();return t===null?null:{parent:pn._currentValue,pool:t}}var rs=Error(r(460)),Lu=Error(r(474)),bl=Error(r(542)),El={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t}throw Er=n,rs}}function br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,rs):a}}var Er=null;function Jp(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function $p(t){if(t===rs||t===bl)throw Error(r(483))}var ss=null,uo=0;function Tl(t){var n=uo;return uo+=1,ss===null&&(ss=[]),jp(ss,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Al(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function em(t){function n(K,V){if(t){var ee=K.deletions;ee===null?(K.deletions=[V],K.flags|=16):ee.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=$i(K,V),K.index=0,K.sibling=null,K}function f(K,V,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<V?(K.flags|=67108866,V):ee):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function v(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,ee,_e){return V===null||V.tag!==6?(V=yu(ee,K.mode,_e),V.return=K,V):(V=u(V,ee),V.return=K,V)}function H(K,V,ee,_e){var tt=ee.type;return tt===C?pe(K,V,ee.props.children,_e,ee.key):V!==null&&(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===E&&br(tt)===V.type)?(V=u(V,ee.props),fo(V,ee),V.return=K,V):(V=_l(ee.type,ee.key,ee.props,null,K.mode,_e),fo(V,ee),V.return=K,V)}function te(K,V,ee,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Su(ee,K.mode,_e),V.return=K,V):(V=u(V,ee.children||[]),V.return=K,V)}function pe(K,V,ee,_e,tt){return V===null||V.tag!==7?(V=_r(ee,K.mode,_e,tt),V.return=K,V):(V=u(V,ee),V.return=K,V)}function xe(K,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=yu(""+V,K.mode,ee),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ee=_l(V.type,V.key,V.props,null,K.mode,ee),fo(ee,V),ee.return=K,ee;case T:return V=Su(V,K.mode,ee),V.return=K,V;case E:return V=br(V),xe(K,V,ee)}if(Q(V)||W(V))return V=_r(V,K.mode,ee,null),V.return=K,V;if(typeof V.then=="function")return xe(K,Tl(V),ee);if(V.$$typeof===I)return xe(K,Sl(K,V),ee);Al(K,V)}return null}function oe(K,V,ee,_e){var tt=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return tt!==null?null:R(K,V,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===tt?H(K,V,ee,_e):null;case T:return ee.key===tt?te(K,V,ee,_e):null;case E:return ee=br(ee),oe(K,V,ee,_e)}if(Q(ee)||W(ee))return tt!==null?null:pe(K,V,ee,_e,null);if(typeof ee.then=="function")return oe(K,V,Tl(ee),_e);if(ee.$$typeof===I)return oe(K,V,Sl(K,ee),_e);Al(K,ee)}return null}function le(K,V,ee,_e,tt){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(ee)||null,R(V,K,""+_e,tt);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return K=K.get(_e.key===null?ee:_e.key)||null,H(V,K,_e,tt);case T:return K=K.get(_e.key===null?ee:_e.key)||null,te(V,K,_e,tt);case E:return _e=br(_e),le(K,V,ee,_e,tt)}if(Q(_e)||W(_e))return K=K.get(ee)||null,pe(V,K,_e,tt,null);if(typeof _e.then=="function")return le(K,V,ee,Tl(_e),tt);if(_e.$$typeof===I)return le(K,V,ee,Sl(V,_e),tt);Al(V,_e)}return null}function qe(K,V,ee,_e){for(var tt=null,Rt=null,Ze=V,dt=V=0,yt=null;Ze!==null&&dt<ee.length;dt++){Ze.index>dt?(yt=Ze,Ze=null):yt=Ze.sibling;var Ct=oe(K,Ze,ee[dt],_e);if(Ct===null){Ze===null&&(Ze=yt);break}t&&Ze&&Ct.alternate===null&&n(K,Ze),V=f(Ct,V,dt),Rt===null?tt=Ct:Rt.sibling=Ct,Rt=Ct,Ze=yt}if(dt===ee.length)return a(K,Ze),bt&&ea(K,dt),tt;if(Ze===null){for(;dt<ee.length;dt++)Ze=xe(K,ee[dt],_e),Ze!==null&&(V=f(Ze,V,dt),Rt===null?tt=Ze:Rt.sibling=Ze,Rt=Ze);return bt&&ea(K,dt),tt}for(Ze=o(Ze);dt<ee.length;dt++)yt=le(Ze,K,dt,ee[dt],_e),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?dt:yt.key),V=f(yt,V,dt),Rt===null?tt=yt:Rt.sibling=yt,Rt=yt);return t&&Ze.forEach(function(Ja){return n(K,Ja)}),bt&&ea(K,dt),tt}function nt(K,V,ee,_e){if(ee==null)throw Error(r(151));for(var tt=null,Rt=null,Ze=V,dt=V=0,yt=null,Ct=ee.next();Ze!==null&&!Ct.done;dt++,Ct=ee.next()){Ze.index>dt?(yt=Ze,Ze=null):yt=Ze.sibling;var Ja=oe(K,Ze,Ct.value,_e);if(Ja===null){Ze===null&&(Ze=yt);break}t&&Ze&&Ja.alternate===null&&n(K,Ze),V=f(Ja,V,dt),Rt===null?tt=Ja:Rt.sibling=Ja,Rt=Ja,Ze=yt}if(Ct.done)return a(K,Ze),bt&&ea(K,dt),tt;if(Ze===null){for(;!Ct.done;dt++,Ct=ee.next())Ct=xe(K,Ct.value,_e),Ct!==null&&(V=f(Ct,V,dt),Rt===null?tt=Ct:Rt.sibling=Ct,Rt=Ct);return bt&&ea(K,dt),tt}for(Ze=o(Ze);!Ct.done;dt++,Ct=ee.next())Ct=le(Ze,K,dt,Ct.value,_e),Ct!==null&&(t&&Ct.alternate!==null&&Ze.delete(Ct.key===null?dt:Ct.key),V=f(Ct,V,dt),Rt===null?tt=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Ze.forEach(function(Fy){return n(K,Fy)}),bt&&ea(K,dt),tt}function Xt(K,V,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var tt=ee.key;V!==null;){if(V.key===tt){if(tt=ee.type,tt===C){if(V.tag===7){a(K,V.sibling),_e=u(V,ee.props.children),_e.return=K,K=_e;break e}}else if(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===E&&br(tt)===V.type){a(K,V.sibling),_e=u(V,ee.props),fo(_e,ee),_e.return=K,K=_e;break e}a(K,V);break}else n(K,V);V=V.sibling}ee.type===C?(_e=_r(ee.props.children,K.mode,_e,ee.key),_e.return=K,K=_e):(_e=_l(ee.type,ee.key,ee.props,null,K.mode,_e),fo(_e,ee),_e.return=K,K=_e)}return v(K);case T:e:{for(tt=ee.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(K,V.sibling),_e=u(V,ee.children||[]),_e.return=K,K=_e;break e}else{a(K,V);break}else n(K,V);V=V.sibling}_e=Su(ee,K.mode,_e),_e.return=K,K=_e}return v(K);case E:return ee=br(ee),Xt(K,V,ee,_e)}if(Q(ee))return qe(K,V,ee,_e);if(W(ee)){if(tt=W(ee),typeof tt!="function")throw Error(r(150));return ee=tt.call(ee),nt(K,V,ee,_e)}if(typeof ee.then=="function")return Xt(K,V,Tl(ee),_e);if(ee.$$typeof===I)return Xt(K,V,Sl(K,ee),_e);Al(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(a(K,V.sibling),_e=u(V,ee),_e.return=K,K=_e):(a(K,V),_e=yu(ee,K.mode,_e),_e.return=K,K=_e),v(K)):a(K,V)}return function(K,V,ee,_e){try{uo=0;var tt=Xt(K,V,ee,_e);return ss=null,tt}catch(Ze){if(Ze===rs||Ze===bl)throw Ze;var Rt=ii(29,Ze,null,K.mode);return Rt.lanes=_e,Rt.return=K,Rt}}}var Tr=em(!0),tm=em(!1),Pa=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(t),Bp(t,null,a),n}return gl(t,o,n,a),vl(t)}function ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}function Pu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Iu=!1;function po(){if(Iu){var t=as;if(t!==null)throw t}}function mo(t,n,a,o){Iu=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,te=H.next;H.next=null,v===null?f=te:v.next=te,v=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==v&&(R===null?pe.firstBaseUpdate=te:R.next=te,pe.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;v=0,pe=te=H=null,R=f;do{var oe=R.lane&-536870913,le=oe!==R.lane;if(le?(xt&oe)===oe:(o&oe)===oe){oe!==0&&oe===is&&(Iu=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,nt=R;oe=n;var Xt=a;switch(nt.tag){case 1:if(qe=nt.payload,typeof qe=="function"){xe=qe.call(Xt,xe,oe);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=nt.payload,oe=typeof qe=="function"?qe.call(Xt,xe,oe):qe,oe==null)break e;xe=x({},xe,oe);break e;case 2:Pa=!0}}oe=R.callback,oe!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(te=pe=le,H=xe):pe=pe.next=le,v|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Va|=v,t.lanes=v,t.memoizedState=xe}}function nm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],n)}var os=N(null),Rl=N(0);function am(t,n){t=fa,Me(Rl,t),Me(os,n),fa=t|n.baseLanes}function zu(){Me(Rl,fa),Me(os,os.current)}function Bu(){fa=Rl.current,Z(os),Z(Rl)}var ai=N(null),xi=null;function Ba(t){var n=t.alternate;Me(cn,cn.current&1),Me(ai,t),xi===null&&(n===null||os.current!==null||n.memoizedState!==null)&&(xi=t)}function Fu(t){Me(cn,cn.current),Me(ai,t),xi===null&&(xi=t)}function rm(t){t.tag===22?(Me(cn,cn.current),Me(ai,t),xi===null&&(xi=t)):Fa()}function Fa(){Me(cn,cn.current),Me(ai,ai.current)}function ri(t){Z(ai),xi===t&&(xi=null),Z(cn)}var cn=N(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ht=null,Vt=null,mn=null,wl=!1,ls=!1,Ar=!1,Dl=0,go=0,cs=null,wx=0;function on(){throw Error(r(321))}function Hu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Gu(t,n,a,o,u,f){return ia=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Vm:nf,Ar=!1,f=a(o,u),Ar=!1,ls&&(f=om(n,a,o,u)),sm(t),f}function sm(t){B.H=xo;var n=Vt!==null&&Vt.next!==null;if(ia=0,mn=Vt=ht=null,wl=!1,go=0,cs=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&yl(t)&&(gn=!0))}function om(t,n,a,o){ht=t;var u=0;do{if(ls&&(cs=null),go=0,ls=!1,25<=u)throw Error(r(301));if(u+=1,mn=Vt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=km,f=n(a,o)}while(ls);return f}function Dx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(ht.flags|=1024),n}function Vu(){var t=Dl!==0;return Dl=0,t}function ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xu(t){if(wl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}wl=!1}ia=0,mn=Vt=ht=null,ls=!1,go=Dl=0,cs=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ht.memoizedState=mn=t:mn=mn.next=t,mn}function un(){if(Vt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=mn===null?ht.memoizedState:mn.next;if(n!==null)mn=n,Vt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},mn===null?ht.memoizedState=mn=t:mn=mn.next=t}return mn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=go;return go+=1,cs===null&&(cs=[]),t=jp(cs,t,n),n=ht,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Vm:nf),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===I)return Dn(t)}throw Error(r(438,String(t)))}function Wu(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Nl(t){var n=un();return qu(n,Vt,t)}function qu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=v=null,H=null,te=n,pe=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(xt&xe)===xe:(ia&xe)===xe){var oe=te.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===is&&(pe=!0);else if((ia&oe)===oe){te=te.next,oe===is&&(pe=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=xe,v=f):H=H.next=xe,ht.lanes|=oe,Va|=oe;xe=te.action,Ar&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else oe={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=oe,v=f):H=H.next=oe,ht.lanes|=xe,Va|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?v=f:H.next=R,!ni(f,t.memoizedState)&&(gn=!0,pe&&(a=as,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Yu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ni(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function lm(t,n,a){var o=ht,u=un(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ni((Vt||u).memoizedState,a);if(v&&(u.memoizedState=a,gn=!0),u=u.queue,Qu(fm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,us(9,{destroy:void 0},um.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));f||(ia&127)!==0||cm(o,n,a)}return a}function cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Ul(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function um(t,n,a,o){n.value=a,n.getSnapshot=o,hm(n)&&dm(t)}function fm(t,n,a){return a(function(){hm(n)&&dm(t)})}function hm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function dm(t){var n=vr(t,2);n!==null&&Kn(n,t,2)}function Zu(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Ar){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function pm(t,n,a,o){return t.baseState=a,qu(t,Vt,typeof o=="function"?o:aa)}function Ux(t,n,a,o,u){if(Il(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function mm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var R=a(u,o),H=B.S;H!==null&&H(v,R),gm(t,n,R)}catch(te){Ku(t,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(u,o),gm(t,n,f)}catch(te){Ku(t,n,te)}}function gm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(t,n,o)},function(o){return Ku(t,n,o)}):vm(t,n,a)}function vm(t,n,a){n.status="fulfilled",n.value=a,_m(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mm(t,a)))}function Ku(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,_m(n),n=n.next;while(n!==o)}t.action=null}function _m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xm(t,n){return n}function ym(t,n){if(bt){var a=Yt.formState;if(a!==null){e:{var o=ht;if(bt){if(Kt){t:{for(var u=Kt,f=_i;u.nodeType!==8;){if(!f){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=yi(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xm,lastRenderedState:n},a.queue=o,a=Fm.bind(null,ht,o),o.dispatch=a,o=Zu(!1),f=tf.bind(null,ht,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ux.bind(null,ht,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Sm(t){var n=un();return Mm(n,Vt,t)}function Mm(t,n,a){if(n=qu(t,n,xm)[0],t=Nl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(v){throw v===rs?bl:v}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,us(9,{destroy:void 0},Lx.bind(null,u,a),null)),[o,f,t]}function Lx(t,n){t.action=n}function bm(t){var n=un(),a=Vt;if(a!==null)return Mm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function us(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Ul(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Em(){return un().memoizedState}function Ol(t,n,a,o){var u=Gn();ht.flags|=t,u.memoizedState=us(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Vt!==null&&o!==null&&Hu(o,Vt.memoizedState.deps)?u.memoizedState=us(n,f,a,o):(ht.flags|=t,u.memoizedState=us(1|n,f,a,o))}function Tm(t,n){Ol(8390656,8,t,n)}function Qu(t,n){Pl(2048,8,t,n)}function Nx(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Ul(),ht.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Am(t){var n=un().memoizedState;return Nx({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Rm(t,n){return Pl(4,2,t,n)}function Cm(t,n){return Pl(4,4,t,n)}function wm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dm(t,n,a){a=a!=null?a.concat([t]):null,Pl(4,4,wm.bind(null,n,t),a)}function ju(){}function Um(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hu(n,o[1]))return o[0];if(o=t(),Ar){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function Ju(t,n,a){return a===void 0||(ia&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ng(),ht.lanes|=t,Va|=t,a)}function Nm(t,n,a,o){return ni(a,n)?a:os.current!==null?(t=Ju(t,a,o),ni(t,n)||(gn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(xt&261930)===0?(gn=!0,t.memoizedState=a):(t=Ng(),ht.lanes|=t,Va|=t,n)}function Om(t,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var v=B.T,R={};B.T=R,tf(t,!1,n,a);try{var H=u(),te=B.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=Cx(H,o);_o(t,n,pe,li(t))}else _o(t,n,o,li(t))}catch(xe){_o(t,n,{then:function(){},status:"rejected",reason:xe},li())}finally{F.p=f,v!==null&&R.types!==null&&(v.types=R.types),B.T=v}}function Ox(){}function $u(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Pm(t).queue;Om(t,u,n,J,a===null?Ox:function(){return Im(t),a(o)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Im(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},li())}function ef(){return Dn(Po)}function zm(){return un().memoizedState}function Bm(){return un().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ia(a);var o=za(n,t,a);o!==null&&(Kn(o,n,a),ho(o,n,a)),n={cache:wu()},t.payload=n;return}n=n.return}}function Ix(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?Hm(n,a):(a=_u(t,n,a,o),a!==null&&(Kn(a,t,o),Gm(a,n,o)))}function Fm(t,n,a){var o=li();_o(t,n,a,o)}function _o(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))Hm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,v))return gl(t,n,u,0),Yt===null&&ml(),!1}catch{}if(a=_u(t,n,u,o),a!==null)return Kn(a,t,o),Gm(a,n,o),!0}return!1}function tf(t,n,a,o){if(o={lane:2,revertLane:Of(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(r(479))}else n=_u(t,a,o,2),n!==null&&Kn(n,t,2)}function Il(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function Hm(t,n){ls=wl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jn(t,a)}}var xo={readContext:Dn,use:Ll,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};xo.useEffectEvent=on;var Vm={readContext:Dn,use:Ll,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:Tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,wm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(Ar){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Ar){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ix.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Zu(t);var n=t.queue,a=Fm.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(t,n){var a=Gn();return Ju(a,t,n)},useTransition:function(){var t=Zu(!1);return t=Om.bind(null,ht,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Gn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(xt&127)!==0||cm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Tm(fm.bind(null,o,f,t),[t]),o.flags|=2048,us(9,{destroy:void 0},um.bind(null,o,f,a,n),null),a},useId:function(){var t=Gn(),n=Yt.identifierPrefix;if(bt){var a=Ii,o=Pi;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:ym,useActionState:ym,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:Wu,useCacheRefresh:function(){return Gn().memoizedState=Px.bind(null,ht)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:Dn,use:Ll,useCallback:Um,useContext:Dn,useEffect:Qu,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Nl,useRef:Em,useState:function(){return Nl(aa)},useDebugValue:ju,useDeferredValue:function(t,n){var a=un();return Nm(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Nl(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:lm,useId:zm,useHostTransitionStatus:ef,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=un();return pm(a,Vt,t,n)},useMemoCache:Wu,useCacheRefresh:Bm};nf.useEffectEvent=Am;var km={readContext:Dn,use:Ll,useCallback:Um,useContext:Dn,useEffect:Qu,useImperativeHandle:Dm,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Yu,useRef:Em,useState:function(){return Yu(aa)},useDebugValue:ju,useDeferredValue:function(t,n){var a=un();return Vt===null?Ju(a,t,n):Nm(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Yu(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:lm,useId:zm,useHostTransitionStatus:ef,useFormState:bm,useActionState:bm,useOptimistic:function(t,n){var a=un();return Vt!==null?pm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Bm};km.useEffectEvent=Am;function af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Kn(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Kn(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Kn(n,t,a),ho(n,t,a))}};function Xm(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,f):!0}function Wm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&rf.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function qm(t){pl(t)}function Ym(t){console.error(t)}function Zm(t){pl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function Qm(t){return t=Ia(t),t.tag=3,t}function jm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Km(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Km(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function zx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ns(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?Kl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Uf(t,o,u)),!1;case 22:return a.flags|=65536,o===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Uf(t,o,u)),!1}throw Error(r(435,a.tag))}return Uf(t,o,u),Kl(),!1}if(bt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eu&&(t=Error(r(422),{cause:o}),oo(mi(t,a)))):(o!==Eu&&(n=Error(r(423),{cause:o}),oo(mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=mi(o,a),u=sf(t.stateNode,o,u),Pu(t,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:o});if(f=mi(f,a),Ro===null?Ro=[f]:Ro.push(f),ln!==4&&(ln=2),n===null)return!0;o=mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=sf(a.stateNode,o,t),Pu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),jm(u,t,a,o),Pu(a,u),!1}a=a.return}while(a!==null);return!1}var of=Error(r(461)),gn=!1;function Un(t,n,a,o){n.child=t===null?tm(n,null,a,o):Tr(n,t.child,a,o)}function Jm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Sr(n),o=Gu(t,n,a,v,f,u),R=Vu(),t!==null&&!gn?(ku(t,n,u),ra(t,n,u)):(bt&&R&&Mu(n),n.flags|=1,Un(t,n,o,u),n.child)}function $m(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,eg(t,n,f,o,u)):(t=_l(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!mf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(v,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=$i(f,o),t.ref=n.ref,t.return=n,n.child=t}function eg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(ao(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,mf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return lf(t,n,a,o,u)}function tg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return ng(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?am(n,f):zu(),rm(n);else return o=n.lanes=536870912,ng(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ml(n,f.cachePool),am(n,f),Fa(),n.memoizedState=null):(t!==null&&Ml(n,null),zu(),Fa());return Un(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ng(t,n,a,o,u){var f=Uu();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ml(n,null),zu(),rm(n),t!==null&&ns(t,n,o,!0),n.childLanes=u,null}function Bl(t,n){return n=Hl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ig(t,n,a){return Tr(n,t.child,null,a),t=Bl(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Bx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Bl(n,o),n.lanes=536870912,yo(null,t);if(Fu(n),(t=Kt)?(t=m0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,wn=n,Kt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Bl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Fu(n),u)if(n.flags&256)n.flags&=-257,n=ig(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||ns(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=Yt,o!==null&&(v=$n(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,vr(t,v),Kn(o,t,v),of;Kl(),n=ig(t,n,a)}else t=f.treeContext,Kt=yi(v.nextSibling),wn=n,bt=!0,La=null,_i=!1,t!==null&&kp(n,t),n=Bl(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,o,u){return Sr(n),a=Gu(t,n,a,o,void 0,u),o=Vu(),t!==null&&!gn?(ku(t,n,u),ra(t,n,u)):(bt&&o&&Mu(n),n.flags|=1,Un(t,n,a,u),n.child)}function ag(t,n,a,o,u,f){return Sr(n),n.updateQueue=null,a=om(n,o,a,u),sm(t),o=Vu(),t!==null&&!gn?(ku(t,n,f),ra(t,n,f)):(bt&&o&&Mu(n),n.flags|=1,Un(t,n,a,f),n.child)}function rg(t,n,a,o,u){if(Sr(n),n.stateNode===null){var f=Jr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Dn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Dn(v):Jr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(af(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&rf.enqueueReplaceState(f,f.state,null),mo(n,o,f,u),po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Rr(a,R);f.props=H;var te=f.context,pe=a.contextType;v=Jr,typeof pe=="object"&&pe!==null&&(v=Dn(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==v)&&Wm(n,f,o,v),Pa=!1;var oe=n.memoizedState;f.state=oe,mo(n,o,f,u),po(),te=n.memoizedState,R||oe!==te||Pa?(typeof xe=="function"&&(af(n,a,xe,o),te=n.memoizedState),(H=Pa||Xm(n,a,H,o,oe,te,v))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=v,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ou(t,n),v=n.memoizedProps,pe=Rr(a,v),f.props=pe,xe=n.pendingProps,oe=f.context,te=a.contextType,H=Jr,typeof te=="object"&&te!==null&&(H=Dn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xe||oe!==H)&&Wm(n,f,o,H),Pa=!1,oe=n.memoizedState,f.state=oe,mo(n,o,f,u),po();var le=n.memoizedState;v!==xe||oe!==le||Pa||t!==null&&t.dependencies!==null&&yl(t.dependencies)?(typeof R=="function"&&(af(n,a,R,o),le=n.memoizedState),(pe=Pa||Xm(n,a,pe,o,oe,le,H)||t!==null&&t.dependencies!==null&&yl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=H,o=pe):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Fl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Tr(n,t.child,null,u),n.child=Tr(n,null,a,u)):Un(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function sg(t,n,a,o){return xr(),n.flags|=256,Un(t,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:Kp()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function og(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ba(n):Fa(),(t=Kt)?(t=m0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,wn=n,Kt=null)):t=null,t===null)throw Na(n);return Yf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Hl({mode:"hidden",children:R},u),o=_r(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,v,a),n.memoizedState=cf,yo(null,o)):(Ba(n),hf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),R=_r(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Tr(n,t.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(t,v,a),n.memoizedState=cf,n=yo(null,o));else if(Ba(n),Yf(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var te=v.dgst;v=te,o=Error(r(419)),o.stack="",o.digest=v,oo({value:o,source:null,stack:null}),n=df(t,n,a)}else if(gn||ns(t,n,a,!1),v=(a&t.childLanes)!==0,gn||v){if(v=Yt,v!==null&&(o=$n(v,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,vr(t,o),Kn(v,t,o),of;qf(R)||Kl(),n=df(t,n,a)}else qf(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Kt=yi(R.nextSibling),wn=n,bt=!0,La=null,_i=!1,t!==null&&kp(n,t),n=hf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,H=t.child,te=H.sibling,o=$i(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=$i(te,R):(R=_r(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=uf(a):(u=R.cachePool,u!==null?(H=pn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Kp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=ff(t,v,a),n.memoizedState=cf,yo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function hf(t,n){return n=Hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hl(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function df(t,n,a){return Tr(n,t.child,null,a),t=hf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function lg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ru(t.return,n,a)}function pf(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function cg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=cn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Me(cn,v),Un(t,n,o,a),o=bt?so:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,a,n);else if(t.tag===19)lg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pf(n,!0,a,null,f,o);break;case"together":pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ns(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yl(t)))}function Fx(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Oa(n,pn,t.memoizedState.cache),xr();break;case 27:case 5:it(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?og(t,n,a):(Ba(n),t=ra(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ns(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return cg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(cn,cn.current),o)break;return null;case 22:return n.lanes=0,tg(t,n,a,n.pendingProps);case 24:Oa(n,pn,t.memoizedState.cache)}return ra(t,n,a)}function ug(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!mf(t,a)&&(n.flags&128)===0)return gn=!1,Fx(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,bt&&(n.flags&1048576)!==0&&Vp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=br(n.elementType),n.type=t,typeof t=="function")xu(t)?(o=Rr(t,o),n.tag=1,n=rg(null,n,t,o,a)):(n.tag=0,n=lf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=Jm(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=$m(null,n,t,o,a);break e}}throw n=de(t)||t,Error(r(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rr(o,n.pendingProps),rg(t,n,o,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(t,n),mo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Oa(n,pn,o),o!==f.cache&&Cu(n,[pn],a,!0),po(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sg(t,n,o,a);break e}else if(o!==u){u=mi(Error(r(424)),n),oo(u),n=sg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=yi(t.firstChild),wn=n,bt=!0,La=null,_i=!0,a=tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xr(),o===u){n=ra(t,n,a);break e}Un(t,n,o,a)}n=n.child}return n;case 26:return Fl(t,n),t===null?(a=S0(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=nc(ae.current).createElement(a),o[hn]=n,o[Cn]=t,Ln(o,a,t),dn(o),n.stateNode=o):n.memoizedState=S0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&bt&&(o=n.stateNode=_0(n.type,n.pendingProps,ae.current),wn=n,_i=!0,u=Kt,Ya(n.type)?(Zf=u,Kt=yi(o.firstChild)):Kt=u),Un(t,n,n.pendingProps.children,a),Fl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Kt)&&(o=my(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,wn=n,Kt=yi(o.firstChild),_i=!1,u=!0):u=!1),u||Na(n)),it(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,kf(u,f)?o=null:v!==null&&kf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(t,n,Dx,null,null,a),Po._currentValue=u),Fl(t,n),Un(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Kt)&&(a=gy(a,n.pendingProps,_i),a!==null?(n.stateNode=a,wn=n,Kt=null,t=!0):t=!1),t||Na(n)),null;case 13:return og(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Tr(n,null,o,a):Un(t,n,o,a),n.child;case 11:return Jm(t,n,n.type,n.pendingProps,a);case 7:return Un(t,n,n.pendingProps,a),n.child;case 8:return Un(t,n,n.pendingProps.children,a),n.child;case 12:return Un(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Un(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Sr(n),u=Dn(u),o=o(u),n.flags|=1,Un(t,n,o,a),n.child;case 14:return $m(t,n,n.type,n.pendingProps,a);case 15:return eg(t,n,n.type,n.pendingProps,a);case 19:return cg(t,n,a);case 31:return Bx(t,n,a);case 22:return tg(t,n,a,n.pendingProps);case 24:return Sr(n),o=Dn(pn),t===null?(u=Uu(),u===null&&(u=Yt,f=wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Nu(n),Oa(n,pn,u)):((t.lanes&a)!==0&&(Ou(t,n),mo(n,null,null,a),po()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,pn,o)):(o=f.cache,Oa(n,pn,o),o!==u.cache&&Cu(n,[pn],a,!0))),Un(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function gf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(zg())t.flags|=8192;else throw Er=El,Lu}else t.flags&=-16777217}function fg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!A0(n))if(zg())t.flags|=8192;else throw Er=El,Lu}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,ps|=n)}function So(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Hx(t,n,a){var o=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(pn),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ts(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Qt(n),fg(n,f)):(Qt(n),gf(n,u,null,o,a))):f?f!==t.memoizedState?(sa(n),Qt(n),fg(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Qt(n),gf(n,u,t,o,a)),null;case 27:if(Qe(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Te.current,ts(n)?Xp(n):(t=_0(u,o,a),n.stateNode=t,sa(n))}return Qt(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Te.current,ts(n))Xp(n);else{var v=nc(ae.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[hn]=n,f[Cn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Ln(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Qt(n),gf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,ts(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||o0(t.nodeValue,a)),t||Na(n,!0)}else t=nc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ts(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[hn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ts(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[hn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Qt(n),null);case 4:return Fe(),t===null&&Bf(n.stateNode.containerInfo),Qt(n),null;case 10:return na(n.type),Qt(n),null;case 19:if(Z(cn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)So(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Cl(t),f!==null){for(n.flags|=128,So(o,!1),t=f.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return Me(cn,cn.current&1|2),bt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Gt()>ql&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=Cl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*Gt()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Gt(),t.sibling=null,a=cn.current,Me(cn,u?a&1|2:a&1),bt&&ea(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ri(n),Bu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gx(t,n){switch(bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(pn),Fe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(cn),null;case 4:return Fe(),null;case 10:return na(n.type),null;case 22:case 23:return ri(n),Bu(),t!==null&&Z(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(pn),null;case 25:return null;default:return null}}function hg(t,n){switch(bu(n),n.tag){case 3:na(pn),Fe();break;case 26:case 27:case 5:Qe(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Z(cn);break;case 10:na(n.type);break;case 22:case 23:ri(n),Bu(),t!==null&&Z(Mr);break;case 24:na(pn)}}function Mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Ft(n,n.return,R)}}function Ha(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var H=a,te=R;try{te()}catch(pe){Ft(u,H,pe)}}}o=o.next}while(o!==f)}}catch(pe){Ft(n,n.return,pe)}}function dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{im(n,a)}catch(o){Ft(t,t.return,o)}}}function pg(t,n,a){a.props=Rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function mg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function vf(t,n,a){try{var o=t.stateNode;cy(o,t.type,a,n),o[Cn]=n}catch(u){Ft(t,t.return,u)}}function gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(xf(t,n,a),t=t.sibling;t!==null;)xf(t,n,a),t=t.sibling}function Vl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Vl(t,n,a),t=t.sibling;t!==null;)Vl(t,n,a),t=t.sibling}function vg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[hn]=t,n[Cn]=a}catch(f){Ft(t,t.return,f)}}var oa=!1,vn=!1,yf=!1,_g=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Vx(t,n){if(t=t.containerInfo,Gf=cc,t=Dp(t),hu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,H=-1,te=0,pe=0,xe=t,oe=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(R=v+u),xe!==f||o!==0&&xe.nodeType!==3||(H=v+o),xe.nodeType===3&&(v+=xe.nodeValue.length),(le=xe.firstChild)!==null;)oe=xe,xe=le;for(;;){if(xe===t)break t;if(oe===a&&++te===u&&(R=v),oe===f&&++pe===o&&(H=v),(le=xe.nextSibling)!==null)break;xe=oe,oe=xe.parentNode}xe=le}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},cc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qe=Rr(a.type,u);t=o.getSnapshotBeforeUpdate(qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Ft(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function xg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&Mo(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ft(a,a.return,v)}else{var u=Rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ft(a,a.return,v)}}o&64&&dg(a),o&512&&bo(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{im(t,n)}catch(v){Ft(a,a.return,v)}}break;case 27:n===null&&o&4&&vg(a);case 26:case 5:ca(t,a),n===null&&o&4&&mg(a),o&512&&bo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&Mg(t,a);break;case 13:ca(t,a),o&4&&bg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jx.bind(null,a),vy(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||vn,u=oa;var f=vn;oa=o,(vn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,vn=f}break;case 30:break;default:ca(t,a)}}function yg(t){var n=t.alternate;n!==null&&(t.alternate=null,yg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Wn=!1;function la(t,n,a){for(a=a.child;a!==null;)Sg(t,n,a),a=a.sibling}function Sg(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:vn||zi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||zi(a,n);var o=nn,u=Wn;Ya(a.type)&&(nn=a.stateNode,Wn=!1),la(t,n,a),Lo(a.stateNode),nn=o,Wn=u;break;case 5:vn||zi(a,n);case 6:if(o=nn,u=Wn,nn=null,la(t,n,a),nn=o,Wn=u,nn!==null)if(Wn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:nn!==null&&(Wn?(t=nn,d0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ms(t)):d0(nn,a.stateNode));break;case 4:o=nn,u=Wn,nn=a.stateNode.containerInfo,Wn=!0,la(t,n,a),nn=o,Wn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),vn||Ha(4,a,n),la(t,n,a);break;case 1:vn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&pg(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,la(t,n,a),vn=o;break;default:la(t,n,a)}}function Mg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ms(t)}catch(a){Ft(n,n.return,a)}}}function bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ms(t)}catch(a){Ft(n,n.return,a)}}function kx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _g),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _g),n;default:throw Error(r(435,t.tag))}}function kl(t,n){var a=kx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Jx.bind(null,t,o);o.then(u,u)}})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){nn=R.stateNode,Wn=!1;break e}break;case 5:nn=R.stateNode,Wn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if(nn===null)throw Error(r(160));Sg(f,v,u),nn=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Eg(n,t),n=n.sibling}var Ai=null;function Eg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ha(3,t,t.return),Mo(3,t),Ha(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(vn||a===null||zi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(qn(n,t),Yn(t),o&512&&(vn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Aa]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,o,a),f[hn]=t,dn(f),o=f;break e;case"link":var v=E0("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;case"meta":if(v=E0("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[hn]=t,dn(f),o=f}t.stateNode=o}else T0(u,t.type,t.stateNode);else t.stateNode=b0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?T0(u,t.type,t.stateNode):b0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(vn||a===null||zi(a,a.return)),a!==null&&o&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(vn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{ti(u,"")}catch(qe){Ft(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,vf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Ft(t,t.return,qe)}}break;case 3:if(rc=null,u=Ai,Ai=ic(n.containerInfo),qn(n,t),Ai=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ms(n.containerInfo)}catch(qe){Ft(t,t.return,qe)}yf&&(yf=!1,Tg(t));break;case 4:o=Ai,Ai=ic(t.stateNode.containerInfo),qn(n,t),Yn(t),Ai=o;break;case 12:qn(n,t),Yn(t);break;case 31:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=Gt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=oa,pe=vn;if(oa=te||u,vn=pe||H,qn(n,t),vn=pe,oa=te,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||oa||vn||Cr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,oe=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(qe){Ft(H,H.return,qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(qe){Ft(H,H.return,qe)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?p0(le,!0):p0(H.stateNode,!1)}catch(qe){Ft(H,H.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(gg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(t);Vl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ti(v,""),a.flags&=-33);var R=_f(t);Vl(t,R,v);break;case 3:case 4:var H=a.stateNode.containerInfo,te=_f(t);xf(t,te,H);break;default:throw Error(r(161))}}catch(pe){Ft(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xg(t,n.alternate,n),n=n.sibling}function Cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Cr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&pg(n,n.return,a),Cr(n);break;case 27:Lo(n.stateNode);case 26:case 5:zi(n,n.return),Cr(n);break;case 22:n.memoizedState===null&&Cr(n);break;case 30:Cr(n);break;default:Cr(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),Mo(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ft(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)nm(H[u],R)}catch(te){Ft(o,o.return,te)}}a&&v&64&&dg(f),bo(f,f.return);break;case 27:vg(f);case 26:case 5:ua(u,f,a),a&&o===null&&v&4&&mg(f),bo(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&v&4&&Mg(u,f);break;case 13:ua(u,f,a),a&&v&4&&bg(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),bo(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&lo(a))}function Mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ag(t,n,a,o),n=n.sibling}function Ag(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&Mo(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Ft(n,n.return,H)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,o):Eo(t,n):f._visibility&2?Ri(t,n,a,o):(f._visibility|=2,fs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(v,n);break;case 24:Ri(t,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Ri(t,n,a,o)}}function fs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,H=o,te=v.flags;switch(v.tag){case 0:case 11:case 15:fs(f,v,R,H,u),Mo(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?fs(f,v,R,H,u):Eo(f,v):(pe._visibility|=2,fs(f,v,R,H,u)),u&&te&2048&&Sf(v.alternate,v);break;case 24:fs(f,v,R,H,u),u&&te&2048&&Mf(v.alternate,v);break;default:fs(f,v,R,H,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Mf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var To=8192;function hs(t,n,a){if(t.subtreeFlags&To)for(t=t.child;t!==null;)Rg(t,n,a),t=t.sibling}function Rg(t,n,a){switch(t.tag){case 26:hs(t,n,a),t.flags&To&&t.memoizedState!==null&&wy(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:hs(t,n,a);break;case 3:case 4:var o=Ai;Ai=ic(t.stateNode.containerInfo),hs(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,hs(t,n,a),To=o):hs(t,n,a));break;default:hs(t,n,a)}}function Cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Dg(o,t)}Cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wg(t),t=t.sibling}function wg(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):Ao(t);break;default:Ao(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Dg(o,t)}Cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function Dg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,f=o.return;if(yg(o),o===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var Xx={getCacheForType:function(t){var n=Dn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(pn).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Yt=null,vt=null,xt=0,Bt=0,si=null,Ga=!1,ds=!1,bf=!1,fa=0,ln=0,Va=0,wr=0,Ef=0,oi=0,ps=0,Ro=null,Zn=null,Tf=!1,Wl=0,Ug=0,ql=1/0,Yl=null,ka=null,yn=0,Xa=null,ms=null,ha=0,Af=0,Rf=null,Lg=null,Co=0,Cf=null;function li(){return(Dt&2)!==0&&xt!==0?xt&-xt:B.T!==null?Of():Qs()}function Ng(){if(oi===0)if((xt&536870912)===0||bt){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Kn(t,n,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(gs(t,0),Wa(t,xt,oi,!1)),ke(t,a),((Dt&2)===0||t!==Yt)&&(t===Yt&&((Dt&2)===0&&(wr|=a),ln===4&&Wa(t,xt,oi,!1)),Bi(t))}function Og(t,n,a){if((Dt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?Zx(t,n):Df(t,n,!0),f=o;do{if(u===0){ds&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qx(a)){u=Df(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=t;u=Ro;var H=R.current.memoizedState.isDehydrated;if(H&&(gs(R,v).flags|=256),v=Df(R,v,!1),v!==2){if(bf&&!H){R.errorRecoveryDisabledLanes|=f,wr|=f,u=4;break e}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){gs(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,oi,!Ga);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wl+300-Gt(),10<u)){if(Wa(o,n,oi,!Ga),ge(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=f0(Pg.bind(null,o,a,Zn,Yl,Tf,n,oi,wr,ps,Ga,f,"Throttled",-0,0),u);break e}Pg(o,a,Zn,Yl,Tf,n,oi,wr,ps,Ga,f,null,-0,0)}}break}while(!0);Bi(t)}function Pg(t,n,a,o,u,f,v,R,H,te,pe,xe,oe,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Rg(n,f,xe);var qe=(f&62914560)===f?Wl-Gt():(f&4194048)===f?Ug-Gt():0;if(qe=Dy(xe,qe),qe!==null){ha=f,t.cancelPendingCommit=qe(kg.bind(null,t,n,f,a,o,u,v,R,H,pe,xe,null,oe,le)),Wa(t,f,v,!te);return}}kg(t,n,f,a,o,u,v,R,H)}function qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~Ef,n&=~wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-He(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Ot(t,a,n)}function Zl(){return(Dt&6)===0?(wo(0),!1):!0}function wf(){if(vt!==null){if(Bt===0)var t=vt.return;else t=vt,ta=yr=null,Xu(t),ss=null,uo=0,t=vt;for(;t!==null;)hg(t.alternate,t),t=t.return;vt=null}}function gs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,wf(),Yt=t,vt=a=$i(t.current,null),xt=n,Bt=0,si=null,Ga=!1,ds=we(t,n),bf=!1,ps=oi=Ef=wr=Va=ln=0,Zn=Ro=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-He(o),f=1<<u;n|=t[u],o&=~f}return fa=n,ml(),a}function Ig(t,n){ht=null,B.H=xo,n===rs||n===bl?(n=Jp(),Bt=3):n===Lu?(n=Jp(),Bt=4):Bt=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,vt===null&&(ln=1,zl(t,mi(n,t.current)))}function zg(){var t=ai.current;return t===null?!0:(xt&4194048)===xt?xi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===xi:!1}function Bg(){var t=B.H;return B.H=xo,t===null?xo:t}function Fg(){var t=B.A;return B.A=Xx,t}function Kl(){ln=4,Ga||(xt&4194048)!==xt&&ai.current!==null||(ds=!0),(Va&134217727)===0&&(wr&134217727)===0||Yt===null||Wa(Yt,xt,oi,!1)}function Df(t,n,a){var o=Dt;Dt|=2;var u=Bg(),f=Fg();(Yt!==t||xt!==n)&&(Yl=null,gs(t,n)),n=!1;var v=ln;e:do try{if(Bt!==0&&vt!==null){var R=vt,H=si;switch(Bt){case 8:wf(),v=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var te=Bt;if(Bt=0,si=null,vs(t,R,H,te),a&&ds){v=0;break e}break;default:te=Bt,Bt=0,si=null,vs(t,R,H,te)}}Yx(),v=ln;break}catch(pe){Ig(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ta=yr=null,Dt=o,B.H=u,B.A=f,vt===null&&(Yt=null,xt=0,ml()),v}function Yx(){for(;vt!==null;)Hg(vt)}function Zx(t,n){var a=Dt;Dt|=2;var o=Bg(),u=Fg();Yt!==t||xt!==n?(Yl=null,ql=Gt()+500,gs(t,n)):ds=we(t,n);e:do try{if(Bt!==0&&vt!==null){n=vt;var f=si;t:switch(Bt){case 1:Bt=0,si=null,vs(t,n,f,1);break;case 2:case 9:if(Qp(f)){Bt=0,si=null,Gg(n);break}n=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Bi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Qp(f)?(Bt=0,si=null,Gg(n)):(Bt=0,si=null,vs(t,n,f,7));break;case 5:var v=null;switch(vt.tag){case 26:v=vt.memoizedState;case 5:case 27:var R=vt;if(v?A0(v):R.stateNode.complete){Bt=0,si=null;var H=R.sibling;if(H!==null)vt=H;else{var te=R.return;te!==null?(vt=te,Ql(te)):vt=null}break t}}Bt=0,si=null,vs(t,n,f,5);break;case 6:Bt=0,si=null,vs(t,n,f,6);break;case 8:wf(),ln=6;break e;default:throw Error(r(462))}}Kx();break}catch(pe){Ig(t,pe)}while(!0);return ta=yr=null,B.H=o,B.A=u,Dt=a,vt!==null?0:(Yt=null,xt=0,ml(),ln)}function Kx(){for(;vt!==null&&!sn();)Hg(vt)}function Hg(t){var n=ug(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?Ql(t):vt=n}function Gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ag(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=ag(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Xu(n);default:hg(a,n),n=vt=Fp(n,fa),n=ug(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?Ql(t):vt=n}function vs(t,n,a,o){ta=yr=null,Xu(n),ss=null,uo=0;var u=n.return;try{if(zx(t,u,n,a,xt)){ln=1,zl(t,mi(a,t.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;ln=1,zl(t,mi(a,t.current)),vt=null;return}n.flags&32768?(bt||o===1?t=!0:ds||(xt&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Vg(n,t)):Ql(n)}function Ql(t){var n=t;do{if((n.flags&32768)!==0){Vg(n,Ga);return}t=n.return;var a=Hx(n.alternate,n,fa);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);ln===0&&(ln=5)}function Vg(t,n){do{var a=Gx(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);ln=6,vt=null}function kg(t,n,a,o,u,f,v,R,H){t.cancelPendingCommit=null;do jl();while(yn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vu,$t(t,a,f,v,R,H),t===Yt&&(vt=Yt=null,xt=0),ms=n,Xa=t,ha=a,Af=f,Rf=u,Lg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$x(j,function(){return Zg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=F.p,F.p=2,v=Dt,Dt|=4;try{Vx(t,n,a)}finally{Dt=v,F.p=u,B.T=o}}yn=1,Xg(),Wg(),qg()}}function Xg(){if(yn===1){yn=0;var t=Xa,n=ms,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=F.p;F.p=2;var u=Dt;Dt|=4;try{Eg(n,t);var f=Vf,v=Dp(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&wp(R.ownerDocument.documentElement,R)){if(H!==null&&hu(R)){var te=H.start,pe=H.end;if(pe===void 0&&(pe=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(pe,R.value.length);else{var xe=R.ownerDocument||document,oe=xe&&xe.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),qe=R.textContent.length,nt=Math.min(H.start,qe),Xt=H.end===void 0?nt:Math.min(H.end,qe);!le.extend&&nt>Xt&&(v=Xt,Xt=nt,nt=v);var K=Cp(R,nt),V=Cp(R,Xt);if(K&&V&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var ee=xe.createRange();ee.setStart(K.node,K.offset),le.removeAllRanges(),nt>Xt?(le.addRange(ee),le.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),le.addRange(ee))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var _e=xe[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}cc=!!Gf,Vf=Gf=null}finally{Dt=u,F.p=o,B.T=a}}t.current=n,yn=2}}function Wg(){if(yn===2){yn=0;var t=Xa,n=ms,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=F.p;F.p=2;var u=Dt;Dt|=4;try{xg(t,n.alternate,n)}finally{Dt=u,F.p=o,B.T=a}}yn=3}}function qg(){if(yn===4||yn===3){yn=0,Y();var t=Xa,n=ms,a=ha,o=Lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,ms=Xa=null,Yg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),Ks(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=F.p,F.p=2,B.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{B.T=n,F.p=u}}(ha&3)!==0&&jl(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Cf?Co++:(Co=0,Cf=t):Co=0,wo(0)}}function Yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function jl(){return Xg(),Wg(),qg(),Zg()}function Zg(){if(yn!==5)return!1;var t=Xa,n=Af;Af=0;var a=Ks(ha),o=B.T,u=F.p;try{F.p=32>a?32:a,B.T=null,a=Rf,Rf=null;var f=Xa,v=ha;if(yn=0,ms=Xa=null,ha=0,(Dt&6)!==0)throw Error(r(331));var R=Dt;if(Dt|=4,wg(f.current),Ag(f,f.current,v,a),Dt=R,wo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{F.p=u,B.T=o,Yg(t,n)}}function Kg(t,n,a){n=mi(a,n),n=sf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(ke(t,2),Bi(t))}function Ft(t,n,a){if(t.tag===3)Kg(t,t,a);else for(;n!==null;){if(n.tag===3){Kg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=mi(a,t),a=Qm(2),o=za(n,a,2),o!==null&&(jm(a,o,n,t),ke(o,2),Bi(o));break}}n=n.return}}function Uf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Wx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),t=Qx.bind(null,t,n,a),n.then(t,t))}function Qx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(xt&a)===a&&(ln===4||ln===3&&(xt&62914560)===xt&&300>Gt()-Wl?(Dt&2)===0&&gs(t,0):Ef|=a,ps===xt&&(ps=0)),Bi(t)}function Qg(t,n){n===0&&(n=be()),t=vr(t,n),t!==null&&(ke(t,n),Bi(t))}function jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function Jx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Qg(t,a)}function $x(t,n){return Jt(t,n)}var Jl=null,_s=null,Lf=!1,$l=!1,Nf=!1,qa=0;function Bi(t){t!==_s&&t.next===null&&(_s===null?Jl=_s=t:_s=_s.next=t),$l=!0,Lf||(Lf=!0,ty())}function wo(t,n){if(!Nf&&$l){Nf=!0;do for(var a=!1,o=Jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-He(42|t)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,e0(o,f))}else f=xt,f=ge(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,e0(o,f));o=o.next}while(a);Nf=!1}}function ey(){jg()}function jg(){$l=Lf=!1;var t=0;qa!==0&&fy()&&(t=qa);for(var n=Gt(),a=null,o=Jl;o!==null;){var u=o.next,f=Jg(o,n);f===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(_s=a)):(a=o,(t!==0||(f&3)!==0)&&($l=!0)),o=u}yn!==0&&yn!==5||wo(t),qa!==0&&(qa=0)}function Jg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-He(f),R=1<<v,H=u[v];H===-1?((R&a)===0||(R&o)!==0)&&(u[v]=Be(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=Yt,a=xt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ut(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ut(o),Ks(a)){case 2:case 8:a=b;break;case 32:a=j;break;case 268435456:a=fe;break;default:a=j}return o=$g.bind(null,t),a=Jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ut(o),t.callbackPriority=2,t.callbackNode=null,2}function $g(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jl()&&t.callbackNode!==a)return null;var o=xt;return o=ge(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Og(t,o,n),Jg(t,Gt()),t.callbackNode!=null&&t.callbackNode===a?$g.bind(null,t):null)}function e0(t,n){if(jl())return null;Og(t,n,!0)}function ty(){dy(function(){(Dt&6)!==0?Jt(L,ey):jg()})}function Of(){if(qa===0){var t=is;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),qa=t}return qa}function t0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dr(""+t)}function n0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ny(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=t0((u[Cn]||null).action),v=o.submitter;v&&(n=(n=v[Cn]||null)?t0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new fl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var H=v?n0(u,v):new FormData(u);$u(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=v?n0(u,v):new FormData(u),$u(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Pf=0;Pf<gu.length;Pf++){var If=gu[Pf],iy=If.toLowerCase(),ay=If[0].toUpperCase()+If.slice(1);Ti(iy,"on"+ay)}Ti(Np,"onAnimationEnd"),Ti(Op,"onAnimationIteration"),Ti(Pp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(yx,"onTransitionRun"),Ti(Sx,"onTransitionStart"),Ti(Mx,"onTransitionCancel"),Ti(Ip,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function i0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(pe){pl(pe)}u.currentTarget=null,f=H}else for(v=0;v<o.length;v++){if(R=o[v],H=R.instance,te=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(pe){pl(pe)}u.currentTarget=null,f=H}}}}function _t(t,n){var a=n[ur];a===void 0&&(a=n[ur]=new Set);var o=t+"__bubble";a.has(o)||(a0(n,t,2,!1),a.add(o))}function zf(t,n,a){var o=0;n&&(o|=4),a0(a,t,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Bf(t){if(!t[ec]){t[ec]=!0,ol.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||zf(a,!1,t),zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,zf("selectionchange",!1,n))}}function a0(t,n,a,o){switch(N0(n)){case 2:var u=Ny;break;case 8:u=Oy;break;default:u=$f}a=u.bind(null,n,a,t),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Ki(R),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){o=f=v;continue e}R=R.parentNode}}o=o.return}cp(function(){var te=f,pe=tu(a),xe=[];e:{var oe=zp.get(t);if(oe!==void 0){var le=fl,qe=t;switch(t){case"keypress":if(cl(a)===0)break e;case"keydown":case"keyup":le=J_;break;case"focusin":qe="focus",le=ou;break;case"focusout":qe="blur",le=ou;break;case"beforeblur":case"afterblur":le=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=tx;break;case Np:case Op:case Pp:le=k_;break;case Ip:le=ix;break;case"scroll":case"scrollend":le=B_;break;case"wheel":le=rx;break;case"copy":case"cut":case"paste":le=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=pp;break;case"toggle":case"beforetoggle":le=ox}var nt=(n&4)!==0,Xt=!nt&&(t==="scroll"||t==="scrollend"),K=nt?oe!==null?oe+"Capture":null:oe;nt=[];for(var V=te,ee;V!==null;){var _e=V;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||K===null||(_e=js(V,K),_e!=null&&nt.push(Uo(V,_e,ee))),Xt)break;V=V.return}0<nt.length&&(oe=new le(oe,qe,null,a,pe),xe.push({event:oe,listeners:nt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",oe&&a!==eu&&(qe=a.relatedTarget||a.fromElement)&&(Ki(qe)||qe[kn]))break e;if((le||oe)&&(oe=pe.window===pe?pe:(oe=pe.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(qe=a.relatedTarget||a.toElement,le=te,qe=qe?Ki(qe):null,qe!==null&&(Xt=c(qe),nt=qe.tag,qe!==Xt||nt!==5&&nt!==27&&nt!==6)&&(qe=null)):(le=null,qe=te),le!==qe)){if(nt=hp,_e="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(nt=pp,_e="onPointerLeave",K="onPointerEnter",V="pointer"),Xt=le==null?oe:hr(le),ee=qe==null?oe:hr(qe),oe=new nt(_e,V+"leave",le,a,pe),oe.target=Xt,oe.relatedTarget=ee,_e=null,Ki(pe)===te&&(nt=new nt(K,V+"enter",qe,a,pe),nt.target=ee,nt.relatedTarget=Xt,_e=nt),Xt=_e,le&&qe)t:{for(nt=sy,K=le,V=qe,ee=0,_e=K;_e;_e=nt(_e))ee++;_e=0;for(var tt=V;tt;tt=nt(tt))_e++;for(;0<ee-_e;)K=nt(K),ee--;for(;0<_e-ee;)V=nt(V),_e--;for(;ee--;){if(K===V||V!==null&&K===V.alternate){nt=K;break t}K=nt(K),V=nt(V)}nt=null}else nt=null;le!==null&&r0(xe,oe,le,nt,!1),qe!==null&&Xt!==null&&r0(xe,Xt,qe,nt,!0)}}e:{if(oe=te?hr(te):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var Rt=Mp;else if(yp(oe))if(bp)Rt=vx;else{Rt=mx;var Ze=px}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&Lt(te.elementType)&&(Rt=Mp):Rt=gx;if(Rt&&(Rt=Rt(t,te))){Sp(xe,Rt,a,pe);break e}Ze&&Ze(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&gt(oe,"number",oe.value)}switch(Ze=te?hr(te):window,t){case"focusin":(yp(Ze)||Ze.contentEditable==="true")&&(Kr=Ze,du=te,ro=null);break;case"focusout":ro=du=Kr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Up(xe,a,pe);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":Up(xe,a,pe)}var dt;if(cu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Zr?_p(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(mp&&a.locale!=="ko"&&(Zr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Zr&&(dt=up()):(Da=pe,au="value"in Da?Da.value:Da.textContent,Zr=!0)),Ze=tc(te,yt),0<Ze.length&&(yt=new dp(yt,t,null,a,pe),xe.push({event:yt,listeners:Ze}),dt?yt.data=dt:(dt=xp(a),dt!==null&&(yt.data=dt)))),(dt=cx?ux(t,a):fx(t,a))&&(yt=tc(te,"onBeforeInput"),0<yt.length&&(Ze=new dp("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Ze,listeners:yt}),Ze.data=dt)),ny(xe,t,te,a,pe)}i0(xe,n)})}function Uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=js(t,a),u!=null&&o.unshift(Uo(t,u,f)),u=js(t,n),u!=null&&o.push(Uo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function sy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r0(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||te===null||(H=te,u?(te=js(a,f),te!=null&&v.unshift(Uo(a,te,H))):u||(te=js(a,f),te!=null&&v.push(Uo(a,te,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ly,"")}function o0(t,n){return n=s0(n),s0(t)===n}function kt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=dr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Ne(t,a,o))}}function Hf(t,n,a,o,u,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ti(t,o):(typeof o=="number"||typeof o=="bigint")&&ti(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ne(t,a,o)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,f,v,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=f=v=u=null,H=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":v=pe;break;case"checked":H=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:kt(t,n,o,pe,a,null)}}On(t,f,R,H,te,v,u,!1);return;case"select":_t("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:kt(t,n,u,R,a,null)}n=f,a=v,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:kt(t,n,v,R,a,null)}bi(t,o,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":kt(t,n,H,o,a,null));return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)_t(Do[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,te,o,a,null)}return;default:if(Lt(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Hf(t,n,pe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&kt(t,n,R,o,a,null))}function cy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,H=null,te=null,pe=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,xe)}}for(var oe in o){var le=o[oe];if(xe=a[oe],o.hasOwnProperty(oe)&&(le!=null||xe!=null))switch(oe){case"type":f=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":pe=le;break;case"value":v=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&kt(t,n,oe,le,o,xe)}}Ge(t,v,R,H,te,pe,f,u);return;case"select":le=v=R=oe=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(f)||kt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==H&&kt(t,n,u,f,o,H)}n=R,a=v,o=le,oe!=null?xn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":le=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:kt(t,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":oe=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&kt(t,n,v,u,o,f)}ei(t,oe,le);return;case"option":for(var qe in a)oe=a[qe],a.hasOwnProperty(qe)&&oe!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:kt(t,n,qe,null,o,oe));for(H in o)oe=o[H],le=a[H],o.hasOwnProperty(H)&&oe!==le&&(oe!=null||le!=null)&&(H==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":kt(t,n,H,oe,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)oe=a[nt],a.hasOwnProperty(nt)&&oe!=null&&!o.hasOwnProperty(nt)&&kt(t,n,nt,null,o,oe);for(te in o)if(oe=o[te],le=a[te],o.hasOwnProperty(te)&&oe!==le&&(oe!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:kt(t,n,te,oe,o,le)}return;default:if(Lt(n)){for(var Xt in a)oe=a[Xt],a.hasOwnProperty(Xt)&&oe!==void 0&&!o.hasOwnProperty(Xt)&&Hf(t,n,Xt,void 0,o,oe);for(pe in o)oe=o[pe],le=a[pe],!o.hasOwnProperty(pe)||oe===le||oe===void 0&&le===void 0||Hf(t,n,pe,oe,o,le);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&kt(t,n,K,null,o,oe);for(xe in o)oe=o[xe],le=a[xe],!o.hasOwnProperty(xe)||oe===le||oe==null&&le==null||kt(t,n,xe,oe,o,le)}function l0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&l0(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],te=H.startTime;if(te>R)break;var pe=H.transferSize,xe=H.initiatorType;pe&&l0(xe)&&(H=H.responseEnd,v+=pe*(H<R?1:(R-te)/(H-te)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gf=null,Vf=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function c0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function fy(){var t=window.event;return t&&t.type==="popstate"?t===Xf?!1:(Xf=t,!0):(Xf=null,!1)}var f0=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(t){return h0.resolve(null).then(t).catch(py)}:f0;function py(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function d0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ms(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Lo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Aa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Lo(t.ownerDocument.body);a=u}while(a);Ms(n)}function p0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function my(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function gy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function m0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$?"||t.data==="$~"}function Yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Zf=null;function g0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function v0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function _0(t,n,a){switch(n=nc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ra(t)}var Si=new Map,x0=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=F.d;F.d={f:_y,r:xy,D:yy,C:Sy,L:My,m:by,X:Ty,S:Ey,M:Ay};function _y(){var t=da.f(),n=Zl();return t||n}function xy(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Im(n):da.r(t)}var xs=typeof document>"u"?null:document;function y0(t,n,a){var o=xs;if(o&&typeof n=="string"&&n){var u=It(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),x0.has(u)||(x0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",t),dn(n),o.head.appendChild(n)))}}function yy(t){da.D(t),y0("dns-prefetch",t,null)}function Sy(t,n){da.C(t,n),y0("preconnect",t,n)}function My(t,n,a){da.L(t,n,a);var o=xs;if(o&&t&&n){var u='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+It(a.imageSizes)+'"]')):u+='[href="'+It(t)+'"]';var f=u;switch(n){case"style":f=ys(t);break;case"script":f=Ss(t)}Si.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Oo(f))||(n=o.createElement("link"),Ln(n,"link",t),dn(n),o.head.appendChild(n)))}}function by(t,n){da.m(t,n);var a=xs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+It(o)+'"][href="'+It(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ss(t)}if(!Si.has(f)&&(t=x({rel:"modulepreload",href:t},n),Si.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(f)))return}o=a.createElement("link"),Ln(o,"link",t),dn(o),a.head.appendChild(o)}}}function Ey(t,n,a){da.S(t,n,a);var o=xs;if(o&&t){var u=Ca(o).hoistableStyles,f=ys(t);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(No(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(f))&&Kf(t,a);var H=v=o.createElement("link");dn(H),Ln(H,"link",t),H._p=new Promise(function(te,pe){H.onload=te,H.onerror=pe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ac(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function Ty(t,n){da.X(t,n);var a=xs;if(a&&t){var o=Ca(a).hoistableScripts,u=Ss(t),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(t=x({src:t,async:!0},n),(n=Si.get(u))&&Qf(t,n),f=a.createElement("script"),dn(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ay(t,n){da.M(t,n);var a=xs;if(a&&t){var o=Ca(a).hoistableScripts,u=Ss(t),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&Qf(t,n),f=a.createElement("script"),dn(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function S0(t,n,a,o){var u=(u=ae.current)?ic(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ys(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ys(a.href);var f=Ca(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(No(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,a),f||Ry(u,t,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ys(t){return'href="'+It(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function M0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Ry(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),dn(n),t.head.appendChild(n))}function Ss(t){return'[src="'+It(t)+'"]'}function Oo(t){return"script[async]"+t}function b0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+It(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Ln(o,"style",u),ac(o,a.precedence,t),n.instance=o;case"stylesheet":u=ys(a.href);var f=t.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=M0(a),(u=Si.get(u))&&Kf(o,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var v=f;return v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),Ln(f,"link",o),n.state.loading|=4,ac(f,a.precedence,t),n.instance=f;case"script":return f=Ss(a.src),(u=t.querySelector(Oo(f)))?(n.instance=u,dn(u),u):(o=a,(u=Si.get(f))&&(o=x({},a),Qf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Ln(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,t));return n.instance}function ac(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function E0(t,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Aa]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function T0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function A0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function wy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ys(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=M0(o),(u=Si.get(u))&&Kf(o,u),f=f.createElement("link"),dn(f);var v=f;v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),Ln(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function Dy(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&jf===0&&(jf=62500*uy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(Uy,t),oc=null,sc.call(t))}function Uy(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var o=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ly(t,n,a,o,u,f,v,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function R0(t,n,a,o,u,f,v,R,H,te,pe,xe){return t=new Ly(t,n,a,v,H,te,pe,xe,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=wu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nu(f),t}function C0(t){return t?(t=Jr,t):Jr}function w0(t,n,a,o,u,f){u=C0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Kn(a,t,n),ho(a,t,n))}function D0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jf(t,n){D0(t,n),(t=t.alternate)&&D0(t,n)}function U0(t){if(t.tag===13||t.tag===31){var n=vr(t,67108864);n!==null&&Kn(n,t,67108864),Jf(t,67108864)}}function L0(t){if(t.tag===13||t.tag===31){var n=li();n=Zs(n);var a=vr(t,n);a!==null&&Kn(a,t,n),Jf(t,n)}}var cc=!0;function Ny(t,n,a,o){var u=B.T;B.T=null;var f=F.p;try{F.p=2,$f(t,n,a,o)}finally{F.p=f,B.T=u}}function Oy(t,n,a,o){var u=B.T;B.T=null;var f=F.p;try{F.p=8,$f(t,n,a,o)}finally{F.p=f,B.T=u}}function $f(t,n,a,o){if(cc){var u=eh(o);if(u===null)Ff(t,n,o,uc,a),O0(t,o);else if(Iy(u,t,n,a,o))o.stopPropagation();else if(O0(t,o),n&4&&-1<Py.indexOf(t)){for(;u!==null;){var f=Qi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Re(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var H=1<<31-He(v);R.entanglements[1]|=H,v&=~H}Bi(f),(Dt&6)===0&&(ql=Gt()+500,wo(0))}}break;case 31:case 13:R=vr(f,2),R!==null&&Kn(R,f,2),Zl(),Jf(f,2)}if(f=eh(o),f===null&&Ff(t,n,o,uc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ff(t,n,o,null,a)}}function eh(t){return t=tu(t),th(t)}var uc=null;function th(t){if(uc=null,t=Ki(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function N0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case L:return 2;case b:return 8;case j:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var nh=!1,Za=null,Ka=null,Qa=null,Io=new Map,zo=new Map,ja=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Bo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qi(n),n!==null&&U0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Iy(t,n,a,o,u){switch(n){case"focusin":return Za=Bo(Za,t,n,a,o,u),!0;case"dragenter":return Ka=Bo(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=Bo(Qa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Io.set(f,Bo(Io.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Bo(zo.get(f)||null,t,n,a,o,u)),!0}return!1}function P0(t){var n=Ki(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Wr(t.priority,function(){L0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Wr(t.priority,function(){L0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=eh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=Qi(a),n!==null&&U0(n),t.blockedOn=a,!1;n.shift()}return!0}function I0(t,n,a){fc(t)&&a.delete(n)}function zy(){nh=!1,Za!==null&&fc(Za)&&(Za=null),Ka!==null&&fc(Ka)&&(Ka=null),Qa!==null&&fc(Qa)&&(Qa=null),Io.forEach(I0),zo.forEach(I0)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,nh||(nh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,zy)))}var dc=null;function z0(t){dc!==t&&(dc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(th(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ms(t){function n(H){return hc(H,t)}Za!==null&&hc(Za,t),Ka!==null&&hc(Ka,t),Qa!==null&&hc(Qa,t),Io.forEach(n),zo.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)P0(a),a.blockedOn===null&&ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Cn]||null;if(typeof f=="function")v||z0(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Cn]||null)R=v.formAction;else if(th(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),z0(a)}}}function B0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ih(t){this._internalRoot=t}pc.prototype.render=ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=li();w0(a,o,t,n,null,null)},pc.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;w0(t.current,2,null,t,null,null),Zl(),n[kn]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Qs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,t),a===0&&P0(t)}};var F0=e.version;if(F0!=="19.2.8")throw Error(r(527,F0,"19.2.8"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var By={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{ue=mc.inject(By),he=mc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=qm,f=Ym,v=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=R0(t,1,!1,null,null,a,o,null,u,f,v,B0),t[kn]=n.current,Bf(t),new ih(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=qm,v=Ym,R=Zm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=R0(t,1,!0,n,a??null,o,u,H,f,v,R,B0),n.context=C0(null),a=n.current,o=li(),o=Zs(o),u=Ia(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,ke(n,a),Bi(n),t[kn]=n.current,Bf(t),new pc(n)},Ho.version="19.2.8",Ho}var K0;function Zy(){if(K0)return sh.exports;K0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sh.exports=Yy(),sh.exports}var Ky=Zy();const Qy=[{id:1,title:"Galen's Model of the Eye",date:"2nd Century",description:"Galen posited the crystalline lens as the principal instrument of vision. His anatomical model influenced centuries of thought.",literaryConnection:"Dante's emphasis on pure light and the initial structure of his cosmos echo Galenic perfection."},{id:2,title:"Alhazen's Book of Optics",date:"11th Century",description:"Influential on medieval perspectivism, Alhazen proved intromission theory—that light enters the eye rather than being emitted from it.",literaryConnection:"Provides the optical framework for Dante's progressive adaptation to blinding divine light."},{id:3,title:"Vesalius's Fabrica",date:"1543",description:"Revolutionized anatomical dissection, breaking down the eye into structural parts verifiable by the medical gaze.",literaryConnection:"The corpse becomes an object of intense scrutiny, shifting the focus from mystical light to physical flesh."},{id:4,title:"Kepler's Discovery of the Retina",date:"1604",description:"Kepler identified the retina, not the lens, as the seat of vision.",literaryConnection:"Corresponds to Dante's Empyrean as the 'eye of God', an inverted image forming the true reality."},{id:5,title:"Descartes & the Camera Obscura",date:"17th Century",description:"Descartes modeled the eye as a mechanical camera obscura, leading to the mind/body dualism.",literaryConnection:"Prefigures the modern detachment of the viewing subject from the observed object."},{id:6,title:"Forensic Pathology",date:"19th Century",description:"The rise of medicalization of the corpse. Exploring the body as a site of trauma and history.",literaryConnection:"Echoes Frankenstein's assembled body and the preservation of Tollund Man's eyes in Heaney's poetry."}],jy=[{id:1,title:"The Anatomical Venus",type:"Early modern anatomical plate",image:"/anatomical_venus.jpg",description:"Wax models depicting dissected faces and eyes, blending the beautiful with the macabre."},{id:2,title:"Tollund Man",type:"Forensic Photograph",description:"As catalogued in Glob's 'The Bog People'. A preserved corpse that becomes an object of both forensic and poetic inquiry."},{id:3,title:"Frankenstein's Assembly",type:"Literary Medicalization",description:"The creation of life from the fragments of the dead, viewed through the physician's eye."}];function Jy(){return ve.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[ve.jsx("h2",{style:{marginBottom:"2rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Eye Timeline"}),ve.jsx("div",{className:"timeline",style:{position:"relative",borderLeft:"2px solid var(--accent-gold)",paddingLeft:"2rem",marginLeft:"1rem"},children:Qy.map((s,e)=>ve.jsxs("div",{className:"timeline-item interactive-card",style:{marginBottom:"2rem",padding:"1.5rem",background:"var(--bg-secondary)",borderRadius:"12px",position:"relative"},children:[ve.jsx("div",{style:{position:"absolute",left:"-2.65rem",top:"1.5rem",width:"16px",height:"16px",borderRadius:"50%",background:"var(--accent-crimson)",border:"3px solid var(--bg-primary)"}}),ve.jsx("span",{style:{color:"var(--accent-gold)",fontWeight:"bold",display:"block",marginBottom:"0.5rem"},children:s.date}),ve.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem"},children:s.title}),ve.jsxs("p",{style:{marginBottom:"1rem"},children:[ve.jsx("strong",{children:"Medical History:"})," ",s.description]}),ve.jsxs("p",{style:{color:"#d0d0d0"},children:[ve.jsx("em",{children:"Literary Connection:"})," ",s.literaryConnection]})]},s.id))})]})}const Fd="185",$y=0,Q0=1,eS=2,Fc=1,i_=2,Zo=3,ba=0,jn=1,An=2,Sa=0,Bs=1,j0=2,J0=3,$0=4,tS=5,Pr=100,nS=101,iS=102,aS=103,rS=104,sS=200,oS=201,lS=202,cS=203,Yh=204,Zh=205,uS=206,fS=207,hS=208,dS=209,pS=210,mS=211,gS=212,vS=213,_S=214,Kh=0,Qh=1,jh=2,Gs=3,Jh=4,$h=5,ed=6,td=7,a_=0,xS=1,yS=2,Xi=0,r_=1,s_=2,o_=3,Hd=4,l_=5,c_=6,u_=7,f_=300,Vr=301,Vs=302,uh=303,fh=304,Qc=306,zr=1e3,ya=1001,nd=1002,Nn=1003,SS=1004,gc=1005,Bn=1006,hh=1007,Br=1008,hi=1009,h_=1010,d_=1011,jo=1012,Gd=1013,Yi=1014,Vi=1015,Ea=1016,Vd=1017,kd=1018,Jo=1020,p_=35902,m_=35899,g_=1021,v_=1022,Li=1023,Ta=1026,Fr=1027,__=1028,Xd=1029,kr=1030,Wd=1031,qd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,id=35840,ad=35841,rd=35842,sd=35843,od=36196,ld=37492,cd=37496,ud=37488,fd=37489,Wc=37490,hd=37491,dd=37808,pd=37809,md=37810,gd=37811,vd=37812,_d=37813,xd=37814,yd=37815,Sd=37816,Md=37817,bd=37818,Ed=37819,Td=37820,Ad=37821,Rd=36492,Cd=36494,wd=36495,Dd=36283,Ud=36284,qc=36285,Ld=36286,MS=3200,Nd=0,bS=1,sr="",Rn="srgb",Yc="srgb-linear",Zc="linear",Ht="srgb",bs=7680,ev=519,ES=512,TS=513,AS=514,Yd=515,RS=516,CS=517,Zd=518,wS=519,tv=35044,nv="300 es",ki=2e3,$o=2001;function DS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function el(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function US(){const s=el("canvas");return s.style.display="block",s}const iv={};function av(...s){const e="THREE."+s.shift();console.log(e,...s)}function x_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=x_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Tt(...s){s=x_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Fs(...s){const e=s.join(" ");e in iv||(iv[e]=!0,rt(...s))}function LS(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const NS={[Kh]:Qh,[jh]:ed,[Jh]:td,[Gs]:$h,[Qh]:Kh,[ed]:jh,[td]:Jh,[$h]:Gs};class Xr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Od=180/Math.PI;function nl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function OS(s,e){return(s%e+e)%e}function ph(s,e,i){return(1-i)*s+i*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ip=class ip{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ip.prototype.isVector2=!0;let mt=ip;class Ws{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,p){let m=r[l+0],d=r[l+1],y=r[l+2],x=r[l+3],g=c[h+0],M=c[h+1],T=c[h+2],C=c[h+3];if(x!==C||m!==g||d!==M||y!==T){let S=m*g+d*M+y*T+x*C;S<0&&(g=-g,M=-M,T=-T,C=-C,S=-S);let _=1-p;if(S<.9995){const O=Math.acos(S),I=Math.sin(O);_=Math.sin(_*O)/I,p=Math.sin(p*O)/I,m=m*_+g*p,d=d*_+M*p,y=y*_+T*p,x=x*_+C*p}else{m=m*_+g*p,d=d*_+M*p,y=y*_+T*p,x=x*_+C*p;const O=1/Math.sqrt(m*m+d*d+y*y+x*x);m*=O,d*=O,y*=O,x*=O}}e[i]=m,e[i+1]=d,e[i+2]=y,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,h){const p=r[l],m=r[l+1],d=r[l+2],y=r[l+3],x=c[h],g=c[h+1],M=c[h+2],T=c[h+3];return e[i]=p*T+y*x+m*M-d*g,e[i+1]=m*T+y*g+d*x-p*M,e[i+2]=d*T+y*M+p*g-m*x,e[i+3]=y*T-p*x-m*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),y=p(l/2),x=p(c/2),g=m(r/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*y*x+d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x-g*M*T;break;case"YXZ":this._x=g*y*x+d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x+g*M*T;break;case"ZXY":this._x=g*y*x-d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x-g*M*T;break;case"ZYX":this._x=g*y*x-d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x+g*M*T;break;case"YZX":this._x=g*y*x+d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x-g*M*T;break;case"XZY":this._x=g*y*x-d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x+g*M*T;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],y=i[6],x=i[10],g=r+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(y-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(r>p&&r>x){const M=2*Math.sqrt(1+r-p-x);this._w=(y-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-r-x);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+x-r-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,y=i._w;return this._x=r*y+h*p+l*d-c*m,this._y=l*y+h*m+c*p-r*d,this._z=c*y+h*d+r*m-l*p,this._w=h*y-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),y=Math.sin(d);m=Math.sin(m*d)/y,i=Math.sin(i*d)/y,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ap=class ap{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(rv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(rv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*r),y=2*(p*i-c*l),x=2*(c*r-h*i);return this.x=i+m*d+h*x-p*y,this.y=r+m*y+p*d-c*x,this.z=l+m*x+c*y-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-r*m,this.z=r*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ap.prototype.isVector3=!0;let $=ap;const mh=new $,rv=new Ws,rp=class rp{constructor(e,i,r,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d)}set(e,i,r,l,c,h,p,m,d){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=i,y[4]=c,y[5]=m,y[6]=r,y[7]=h,y[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],y=r[4],x=r[7],g=r[2],M=r[5],T=r[8],C=l[0],S=l[3],_=l[6],O=l[1],I=l[4],w=l[7],P=l[2],D=l[5],z=l[8];return c[0]=h*C+p*O+m*P,c[3]=h*S+p*I+m*D,c[6]=h*_+p*w+m*z,c[1]=d*C+y*O+x*P,c[4]=d*S+y*I+x*D,c[7]=d*_+y*w+x*z,c[2]=g*C+M*O+T*P,c[5]=g*S+M*I+T*D,c[8]=g*_+M*w+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],y=e[8];return i*h*y-i*p*d-r*c*y+r*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],y=e[8],x=y*h-p*d,g=p*m-y*c,M=d*c-h*m,T=i*x+r*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*d-y*r)*C,e[2]=(p*r-l*h)*C,e[3]=g*C,e[4]=(y*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(r*m-d*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gh.makeScale(e,i)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gh.makeRotation(-e)),this}translate(e,i){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rp.prototype.isMatrix3=!0;let ct=rp;const gh=new ct,sv=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ov=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PS(){const s={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ht&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=Hs(l.r),l.g=Hs(l.g),l.b=Hs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===sr?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Yc]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:sv,fromXYZ:ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:sv,fromXYZ:ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),s}const Et=PS();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class IS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Es===void 0&&(Es=el("canvas")),Es.width=e.width,Es.height=e.height;const l=Es.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Es}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=el("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function vh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?IS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let BS=0;const _h=new $;class Fn extends Xr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=ya,l=ya,c=Bn,h=Br,p=Li,m=hi,d=Fn.DEFAULT_ANISOTROPY,y=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=nl(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=f_;Fn.DEFAULT_ANISOTROPY=1;const sp=class sp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,d=m[0],y=m[4],x=m[8],g=m[1],M=m[5],T=m[9],C=m[2],S=m[6],_=m[10];if(Math.abs(y-g)<.01&&Math.abs(x-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(y+g)<.1&&Math.abs(x+C)<.1&&Math.abs(T+S)<.1&&Math.abs(d+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(d+1)/2,w=(M+1)/2,P=(_+1)/2,D=(y+g)/4,z=(x+C)/4,E=(T+S)/4;return I>w&&I>P?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=D/r,c=z/r):w>P?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=D/l,c=E/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=z/c,l=E/c),this.set(r,l,c,i),this}let O=Math.sqrt((S-T)*(S-T)+(x-C)*(x-C)+(g-y)*(g-y));return Math.abs(O)<.001&&(O=1),this.x=(S-T)/O,this.y=(x-C)/O,this.z=(g-y)/O,this.w=Math.acos((d+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sp.prototype.isVector4=!0;let an=sp;class FS extends Xr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Fn(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends FS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class y_ extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kc=class Kc{constructor(e,i,r,l,c,h,p,m,d,y,x,g,M,T,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d,y,x,g,M,T,C,S)}set(e,i,r,l,c,h,p,m,d,y,x,g,M,T,C,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=p,_[13]=m,_[2]=d,_[6]=y,_[10]=x,_[14]=g,_[3]=M,_[7]=T,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),h=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),y=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*y,M=h*x,T=p*y,C=p*x;i[0]=m*y,i[4]=-m*x,i[8]=d,i[1]=M+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+M*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*y,M=m*x,T=d*y,C=d*x;i[0]=g+C*p,i[4]=T*p-M,i[8]=h*d,i[1]=h*x,i[5]=h*y,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*y,M=m*x,T=d*y,C=d*x;i[0]=g-C*p,i[4]=-h*x,i[8]=T+M*p,i[1]=M+T*p,i[5]=h*y,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*y,M=h*x,T=p*y,C=p*x;i[0]=m*y,i[4]=T*d-M,i[8]=g*d+C,i[1]=m*x,i[5]=C*d+g,i[9]=M*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,M=h*d,T=p*m,C=p*d;i[0]=m*y,i[4]=C-g*x,i[8]=T*x+M,i[1]=x,i[5]=h*y,i[9]=-p*y,i[2]=-d*y,i[6]=M*x+T,i[10]=g-C*x}else if(e.order==="XZY"){const g=h*m,M=h*d,T=p*m,C=p*d;i[0]=m*y,i[4]=-x,i[8]=d*y,i[1]=g*x+C,i[5]=h*y,i[9]=M*x-T,i[2]=T*x-M,i[6]=p*y,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,VS)}lookAt(e,i,r){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),$a.crossVectors(r,ci),$a.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),$a.crossVectors(r,ci)),$a.normalize(),vc.crossVectors(ci,$a),l[0]=$a.x,l[4]=vc.x,l[8]=ci.x,l[1]=$a.y,l[5]=vc.y,l[9]=ci.y,l[2]=$a.z,l[6]=vc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],y=r[1],x=r[5],g=r[9],M=r[13],T=r[2],C=r[6],S=r[10],_=r[14],O=r[3],I=r[7],w=r[11],P=r[15],D=l[0],z=l[4],E=l[8],U=l[12],X=l[1],G=l[5],W=l[9],ce=l[13],de=l[2],Q=l[6],B=l[10],F=l[14],J=l[3],me=l[7],Ee=l[11],N=l[15];return c[0]=h*D+p*X+m*de+d*J,c[4]=h*z+p*G+m*Q+d*me,c[8]=h*E+p*W+m*B+d*Ee,c[12]=h*U+p*ce+m*F+d*N,c[1]=y*D+x*X+g*de+M*J,c[5]=y*z+x*G+g*Q+M*me,c[9]=y*E+x*W+g*B+M*Ee,c[13]=y*U+x*ce+g*F+M*N,c[2]=T*D+C*X+S*de+_*J,c[6]=T*z+C*G+S*Q+_*me,c[10]=T*E+C*W+S*B+_*Ee,c[14]=T*U+C*ce+S*F+_*N,c[3]=O*D+I*X+w*de+P*J,c[7]=O*z+I*G+w*Q+P*me,c[11]=O*E+I*W+w*B+P*Ee,c[15]=O*U+I*ce+w*F+P*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],y=e[2],x=e[6],g=e[10],M=e[14],T=e[3],C=e[7],S=e[11],_=e[15],O=m*M-d*g,I=p*M-d*x,w=p*g-m*x,P=h*M-d*y,D=h*g-m*y,z=h*x-p*y;return i*(C*O-S*I+_*w)-r*(T*O-S*P+_*D)+l*(T*I-C*P+_*z)-c*(T*w-C*D+S*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],y=e[10];return i*(h*y-p*d)-r*(c*y-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],y=e[8],x=e[9],g=e[10],M=e[11],T=e[12],C=e[13],S=e[14],_=e[15],O=i*p-r*h,I=i*m-l*h,w=i*d-c*h,P=r*m-l*p,D=r*d-c*p,z=l*d-c*m,E=y*C-x*T,U=y*S-g*T,X=y*_-M*T,G=x*S-g*C,W=x*_-M*C,ce=g*_-M*S,de=O*ce-I*W+w*G+P*X-D*U+z*E;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/de;return e[0]=(p*ce-m*W+d*G)*Q,e[1]=(l*W-r*ce-c*G)*Q,e[2]=(C*z-S*D+_*P)*Q,e[3]=(g*D-x*z-M*P)*Q,e[4]=(m*X-h*ce-d*U)*Q,e[5]=(i*ce-l*X+c*U)*Q,e[6]=(S*w-T*z-_*I)*Q,e[7]=(y*z-g*w+M*I)*Q,e[8]=(h*W-p*X+d*E)*Q,e[9]=(r*X-i*W-c*E)*Q,e[10]=(T*D-C*w+_*O)*Q,e[11]=(x*w-y*D-M*O)*Q,e[12]=(p*U-h*G-m*E)*Q,e[13]=(i*G-r*U+l*E)*Q,e[14]=(C*I-T*P-S*O)*Q,e[15]=(y*P-x*I+g*O)*Q,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,p=e.y,m=e.z,d=c*h,y=c*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,y*p+r,y*m-l*h,0,d*m-l*p,y*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,y=h+h,x=p+p,g=c*d,M=c*y,T=c*x,C=h*y,S=h*x,_=p*x,O=m*d,I=m*y,w=m*x,P=r.x,D=r.y,z=r.z;return l[0]=(1-(C+_))*P,l[1]=(M+w)*P,l[2]=(T-I)*P,l[3]=0,l[4]=(M-w)*D,l[5]=(1-(g+_))*D,l[6]=(S+O)*D,l[7]=0,l[8]=(T+I)*z,l[9]=(S-O)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=Ts.set(l[0],l[1],l[2]).length();const p=Ts.set(l[4],l[5],l[6]).length(),m=Ts.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ci.copy(this);const d=1/h,y=1/p,x=1/m;return Ci.elements[0]*=d,Ci.elements[1]*=d,Ci.elements[2]*=d,Ci.elements[4]*=y,Ci.elements[5]*=y,Ci.elements[6]*=y,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,i.setFromRotationMatrix(Ci),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,h,p=ki,m=!1){const d=this.elements,y=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(p===ki)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===$o)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=y,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,c,h,p=ki,m=!1){const d=this.elements,y=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(p===ki)T=-2/(h-c),C=-(h+c)/(h-c);else if(p===$o)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=y,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Kc.prototype.isMatrix4=!0;let rn=Kc;const Ts=new $,Ci=new rn,GS=new $(0,0,0),VS=new $(1,1,1),$a=new $,vc=new $,ci=new $,lv=new rn,cv=new Ws;class cr{constructor(e=0,i=0,r=0,l=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],y=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return cv.setFromEuler(this),this.setFromQuaternion(cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const uv=new $,As=new Ws,pa=new rn,_c=new $,Vo=new $,XS=new $,WS=new Ws,fv=new $(1,0,0),hv=new $(0,1,0),dv=new $(0,0,1),pv={type:"added"},qS={type:"removed"},Rs={type:"childadded",child:null},xh={type:"childremoved",child:null};class Hn extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new $,i=new cr,r=new Ws,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ct}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(fv,e)}rotateY(e){return this.rotateOnAxis(hv,e)}rotateZ(e){return this.rotateOnAxis(dv,e)}translateOnAxis(e,i){return uv.copy(e).applyQuaternion(this.quaternion),this.position.add(uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(fv,e)}translateY(e){return this.translateOnAxis(hv,e)}translateZ(e){return this.translateOnAxis(dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_c.copy(e):_c.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Vo,_c,this.up):pa.lookAt(_c,Vo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),As.setFromRotationMatrix(pa),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pv),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qS),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pv),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,y=m.length;d<y;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),y=h(e.images),x=h(e.shapes),g=h(e.skeletons),M=h(e.animations),T=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),y.length>0&&(r.images=y),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(p){const m=[];for(const d in p){const y=p[d];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new $(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YS={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),_=this._getHandJoint(d,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const y=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=y.position.distanceTo(x.position),M=.02,T=.005;d.inputState.pinching&&g>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(YS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Hr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Sh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Mt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=r,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Et.workingColorSpace){if(e=OS(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Sh(h,c,e+1/3),this.g=Sh(h,c,e),this.b=Sh(h,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=Rn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Rn){const r=S_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Et.workingToColorSpace(zn.copy(this),e),Math.round(St(zn.r*255,0,255))*65536+Math.round(St(zn.g*255,0,255))*256+Math.round(St(zn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,h=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const y=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=y<=.5?x/(h+p):x/(2-h-p),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=y,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Rn){Et.workingToColorSpace(zn.copy(this),e);const i=zn.r,r=zn.g,l=zn.b;return e!==Rn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(xc);const r=ph(er.h,xc.h,i),l=ph(er.s,xc.s,i),c=ph(er.l,xc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Mt;Mt.NAMES=S_;class ZS extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new $,ma=new $,Mh=new $,ga=new $,Cs=new $,ws=new $,mv=new $,bh=new $,Eh=new $,Th=new $,Ah=new an,Rh=new an,Ch=new an;class Ui{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){wi.subVectors(l,i),ma.subVectors(r,i),Mh.subVectors(e,i);const h=wi.dot(wi),p=wi.dot(ma),m=wi.dot(Mh),d=ma.dot(ma),y=ma.dot(Mh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*y)*g,T=(h*y-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,c,h,p,m){return this.getBarycoord(e,i,r,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(h,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,i),Rh.fromBufferAttribute(e,r),Ch.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ah,c.x),h.addScaledVector(Rh,c.y),h.addScaledVector(Ch,c.z),h}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),ma.subVectors(e,i),wi.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,p;Cs.subVectors(l,r),ws.subVectors(c,r),bh.subVectors(e,r);const m=Cs.dot(bh),d=ws.dot(bh);if(m<=0&&d<=0)return i.copy(r);Eh.subVectors(e,l);const y=Cs.dot(Eh),x=ws.dot(Eh);if(y>=0&&x<=y)return i.copy(l);const g=m*x-y*d;if(g<=0&&m>=0&&y<=0)return h=m/(m-y),i.copy(r).addScaledVector(Cs,h);Th.subVectors(e,c);const M=Cs.dot(Th),T=ws.dot(Th);if(T>=0&&M<=T)return i.copy(c);const C=M*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(r).addScaledVector(ws,p);const S=y*T-M*x;if(S<=0&&x-y>=0&&M-T>=0)return mv.subVectors(c,l),p=(x-y)/(x-y+(M-T)),i.copy(l).addScaledVector(mv,p);const _=1/(S+C+g);return h=C*_,p=g*_,i.copy(r).addScaledVector(Cs,h).addScaledVector(ws,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Di):Di.fromBufferAttribute(c,h),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Sc.subVectors(this.max,ko),Ds.subVectors(e.a,ko),Us.subVectors(e.b,ko),Ls.subVectors(e.c,ko),tr.subVectors(Us,Ds),nr.subVectors(Ls,Us),Dr.subVectors(Ds,Ls);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Dr.z,Dr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Dr.z,0,-Dr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Dr.y,Dr.x,0];return!wh(i,Ds,Us,Ls,Sc)||(i=[1,0,0,0,1,0,0,0,1],!wh(i,Ds,Us,Ls,Sc))?!1:(Mc.crossVectors(tr,nr),i=[Mc.x,Mc.y,Mc.z],wh(i,Ds,Us,Ls,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new $,new $,new $,new $,new $,new $,new $,new $],Di=new $,yc=new il,Ds=new $,Us=new $,Ls=new $,tr=new $,nr=new $,Dr=new $,ko=new $,Sc=new $,Mc=new $,Ur=new $;function wh(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Ur.fromArray(s,c);const p=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),d=i.dot(Ur),y=r.dot(Ur);if(Math.max(-Math.max(m,d,y),Math.min(m,d,y))>p)return!1}return!0}const _n=new $,bc=new mt;let KS=0;class qi extends Xr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=tv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(e),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),l=Qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class M_ extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class b_ extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class fn extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const QS=new il,Xo=new $,Dh=new $;class jd{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):QS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Dh)),this.expandByPoint(Xo.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jS=0;const Mi=new rn,Uh=new Hn,Ns=new $,ui=new il,Wo=new il,En=new $;class di extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DS(e)?b_:M_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,r){return Mi.makeTranslation(e,i,r),this.applyMatrix4(Mi),this}scale(e,i,r){return Mi.makeScale(e,i,r),this.applyMatrix4(Mi),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new fn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Wo.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(ui.min,Wo.min),ui.expandByPoint(En),En.addVectors(ui.max,Wo.max),ui.expandByPoint(En)):(ui.expandByPoint(Wo.min),ui.expandByPoint(Wo.max))}ui.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,y=p.count;d<y;d++)En.fromBufferAttribute(p,d),m&&(Ns.fromBufferAttribute(e,d),En.add(Ns)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new qi(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let E=0;E<r.count;E++)p[E]=new $,m[E]=new $;const d=new $,y=new $,x=new $,g=new mt,M=new mt,T=new mt,C=new $,S=new $;function _(E,U,X){d.fromBufferAttribute(r,E),y.fromBufferAttribute(r,U),x.fromBufferAttribute(r,X),g.fromBufferAttribute(c,E),M.fromBufferAttribute(c,U),T.fromBufferAttribute(c,X),y.sub(d),x.sub(d),M.sub(g),T.sub(g);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(G),p[E].add(C),p[U].add(C),p[X].add(C),m[E].add(S),m[U].add(S),m[X].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let E=0,U=O.length;E<U;++E){const X=O[E],G=X.start,W=X.count;for(let ce=G,de=G+W;ce<de;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const I=new $,w=new $,P=new $,D=new $;function z(E){P.fromBufferAttribute(l,E),D.copy(P);const U=p[E];I.copy(U),I.sub(P.multiplyScalar(P.dot(U))).normalize(),w.crossVectors(D,U);const G=w.dot(m[E])<0?-1:1;h.setXYZW(E,I.x,I.y,I.z,G)}for(let E=0,U=O.length;E<U;++E){const X=O[E],G=X.start,W=X.count;for(let ce=G,de=G+W;ce<de;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,p=new $,m=new $,d=new $,y=new $,x=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),y.subVectors(h,c),x.subVectors(l,c),y.cross(x),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),p.add(y),m.add(y),d.add(y),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),y.subVectors(h,c),x.subVectors(l,c),y.cross(x),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const d=p.array,y=p.itemSize,x=p.normalized,g=new d.constructor(m.length*y);let M=0,T=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*y;for(let _=0;_<y;_++)g[T++]=d[M++]}return new qi(g,y,x)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new di,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let y=0,x=d.length;y<x;y++){const g=d[y],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],y=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];y.push(M.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const y=l[d];this.setAttribute(d,y.clone(i))}const c=e.morphAttributes;for(const d in c){const y=[],x=c[d];for(let g=0,M=x.length;g<M;g++)y.push(x[g].clone(i));this.morphAttributes[d]=y}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,y=h.length;d<y;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let JS=0;class al extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Bs,this.side=ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Zh,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==Zh&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ev&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new $,Lh=new $,Ec=new $,ir=new $,Nh=new $,Tc=new $,Oh=new $;class E_{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Lh.copy(e).add(i).multiplyScalar(.5),Ec.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Lh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Ec),p=ir.dot(this.direction),m=-ir.dot(Ec),d=ir.lengthSq(),y=Math.abs(1-h*h);let x,g,M,T;if(y>0)if(x=h*m-p,g=h*p-m,T=c*y,x>=0)if(g>=-T)if(g<=T){const C=1/y;x*=C,g*=C,M=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),M=-x*x+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Lh).addScaledVector(Ec,g),M}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const r=_a.dot(this.direction),l=_a.dot(_a)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,p,m;const d=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),y>=0?(c=(e.min.y-g.y)*y,h=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,h=(e.min.y-g.y)*y),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,r,l,c){Nh.subVectors(i,e),Tc.subVectors(r,e),Oh.crossVectors(Nh,Tc);let h=this.direction.dot(Oh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ir.subVectors(this.origin,e);const m=p*this.direction.dot(Tc.crossVectors(ir,Tc));if(m<0)return null;const d=p*this.direction.dot(Nh.cross(ir));if(d<0||m+d>h)return null;const y=-p*ir.dot(Oh);return y<0?null:this.at(y/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gr extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=a_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gv=new rn,Lr=new E_,Ac=new jd,vv=new $,Rc=new $,Cc=new $,wc=new $,Ph=new $,Dc=new $,_v=new $,Uc=new $;class jt extends Hn{constructor(e=new di,i=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Dc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const y=p[m],x=c[m];y!==0&&(Ph.fromBufferAttribute(x,e),h?Dc.addScaledVector(Ph,y):Dc.addScaledVector(Ph.sub(i),y))}i.add(Dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Ac.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ac,vv)===null||Lr.origin.distanceToSquared(vv)>(e.far-e.near)**2))&&(gv.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(gv),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,y=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const S=g[T],_=h[S.materialIndex],O=Math.max(S.start,M.start),I=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,P=I;w<P;w+=3){const D=p.getX(w),z=p.getX(w+1),E=p.getX(w+2);l=Lc(this,_,e,r,d,y,x,D,z,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,_=C;S<_;S+=3){const O=p.getX(S),I=p.getX(S+1),w=p.getX(S+2);l=Lc(this,h,e,r,d,y,x,O,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const S=g[T],_=h[S.materialIndex],O=Math.max(S.start,M.start),I=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=O,P=I;w<P;w+=3){const D=w,z=w+1,E=w+2;l=Lc(this,_,e,r,d,y,x,D,z,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=T,_=C;S<_;S+=3){const O=S,I=S+1,w=S+2;l=Lc(this,h,e,r,d,y,x,O,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function $S(s,e,i,r,l,c,h,p){let m;if(e.side===jn?m=r.intersectTriangle(h,c,l,!0,p):m=r.intersectTriangle(l,c,h,e.side===ba,p),m===null)return null;Uc.copy(p),Uc.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(Uc);return d<i.near||d>i.far?null:{distance:d,point:Uc.clone(),object:s}}function Lc(s,e,i,r,l,c,h,p,m,d){s.getVertexPosition(p,Rc),s.getVertexPosition(m,Cc),s.getVertexPosition(d,wc);const y=$S(s,e,i,r,Rc,Cc,wc,_v);if(y){const x=new $;Ui.getBarycoord(_v,Rc,Cc,wc,x),l&&(y.uv=Ui.getInterpolatedAttribute(l,p,m,d,x,new mt)),c&&(y.uv1=Ui.getInterpolatedAttribute(c,p,m,d,x,new mt)),h&&(y.normal=Ui.getInterpolatedAttribute(h,p,m,d,x,new $),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};Ui.getNormal(Rc,Cc,wc,g.normal),y.face=g,y.barycoord=x}return y}class eM extends Fn{constructor(e=null,i=1,r=1,l,c,h,p,m,d=Nn,y=Nn,x,g){super(null,h,p,m,d,y,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new $,tM=new $,nM=new ct;class Or{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ih.subVectors(r,i).cross(tM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Ih),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||nM.getNormalMatrix(e),l=this.coplanarPoint(Ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new jd,iM=new mt(.5,.5),Nc=new $;class Jd{constructor(e=new Or,i=new Or,r=new Or,l=new Or,c=new Or,h=new Or){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],y=c[4],x=c[5],g=c[6],M=c[7],T=c[8],C=c[9],S=c[10],_=c[11],O=c[12],I=c[13],w=c[14],P=c[15];if(l[0].setComponents(d-h,M-y,_-T,P-O).normalize(),l[1].setComponents(d+h,M+y,_+T,P+O).normalize(),l[2].setComponents(d+p,M+x,_+C,P+I).normalize(),l[3].setComponents(d-p,M-x,_-C,P-I).normalize(),r)l[4].setComponents(m,g,S,w).normalize(),l[5].setComponents(d-m,M-g,_-S,P-w).normalize();else if(l[4].setComponents(d-m,M-g,_-S,P-w).normalize(),i===ki)l[5].setComponents(d+m,M+g,_+S,P+w).normalize();else if(i===$o)l[5].setComponents(m,g,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=iM.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class T_ extends Fn{constructor(e=[],i=Vr,r,l,c,h,p,m,d,y){super(e,i,r,l,c,h,p,m,d,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ks extends Fn{constructor(e,i,r=Yi,l,c,h,p=Nn,m=Nn,d,y=Ta,x=1){if(y!==Ta&&y!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,p,m,y,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class aM extends ks{constructor(e,i=Yi,r=Vr,l,c,h=Nn,p=Nn,m,d=Ta){const y={width:e,height:e,depth:1},x=[y,y,y,y,y,y];super(e,e,i,r,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class A_ extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends di{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],y=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,r,i,e,h,c,0),T("z","y","x",1,-1,r,i,-e,h,c,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(x,2));function T(C,S,_,O,I,w,P,D,z,E,U){const X=w/z,G=P/E,W=w/2,ce=P/2,de=D/2,Q=z+1,B=E+1;let F=0,J=0;const me=new $;for(let Ee=0;Ee<B;Ee++){const N=Ee*G-ce;for(let Z=0;Z<Q;Z++){const Me=Z*X-W;me[C]=Me*O,me[S]=N*I,me[_]=de,d.push(me.x,me.y,me.z),me[C]=0,me[S]=0,me[_]=D>0?1:-1,y.push(me.x,me.y,me.z),x.push(Z/z),x.push(1-Ee/E),F+=1}}for(let Ee=0;Ee<E;Ee++)for(let N=0;N<z;N++){const Z=g+N+Q*Ee,Me=g+N+Q*(Ee+1),Te=g+(N+1)+Q*(Ee+1),Oe=g+(N+1)+Q*Ee;m.push(Z,Me,Oe),m.push(Me,Te,Oe),J+=6}p.addGroup(M,J,U),M+=J,g+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qo extends di{constructor(e=1,i=1,r=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const y=[],x=[],g=[],M=[];let T=0;const C=[],S=r/2;let _=0;O(),h===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(y),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(M,2));function O(){const w=new $,P=new $;let D=0;const z=(i-e)/r;for(let E=0;E<=c;E++){const U=[],X=E/c,G=X*(i-e)+e;for(let W=0;W<=l;W++){const ce=W/l,de=ce*m+p,Q=Math.sin(de),B=Math.cos(de);P.x=G*Q,P.y=-X*r+S,P.z=G*B,x.push(P.x,P.y,P.z),w.set(Q,z,B).normalize(),g.push(w.x,w.y,w.z),M.push(ce,1-X),U.push(T++)}C.push(U)}for(let E=0;E<l;E++)for(let U=0;U<c;U++){const X=C[U][E],G=C[U+1][E],W=C[U+1][E+1],ce=C[U][E+1];(e>0||U!==0)&&(y.push(X,G,ce),D+=3),(i>0||U!==c-1)&&(y.push(G,W,ce),D+=3)}d.addGroup(_,D,0),_+=D}function I(w){const P=T,D=new mt,z=new $;let E=0;const U=w===!0?e:i,X=w===!0?1:-1;for(let W=1;W<=l;W++)x.push(0,S*X,0),g.push(0,X,0),M.push(.5,.5),T++;const G=T;for(let W=0;W<=l;W++){const de=W/l*m+p,Q=Math.cos(de),B=Math.sin(de);z.x=U*B,z.y=S*X,z.z=U*Q,x.push(z.x,z.y,z.z),g.push(0,X,0),D.x=Q*.5+.5,D.y=B*.5*X+.5,M.push(D.x,D.y),T++}for(let W=0;W<l;W++){const ce=P+W,de=G+W;w===!0?y.push(de,de+1,ce):y.push(de+1,de,ce),E+=3}d.addGroup(_,E,w===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jc extends di{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,y=m+1,x=e/p,g=i/m,M=[],T=[],C=[],S=[];for(let _=0;_<y;_++){const O=_*g-h;for(let I=0;I<d;I++){const w=I*x-c;T.push(w,-O,0),C.push(0,0,1),S.push(I/p),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<p;O++){const I=O+d*_,w=O+d*(_+1),P=O+1+d*(_+1),D=O+1+d*_;M.push(I,w,D),M.push(w,P,D)}this.setIndex(M),this.setAttribute("position",new fn(T,3)),this.setAttribute("normal",new fn(C,3)),this.setAttribute("uv",new fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class tl extends di{constructor(e=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],d=[],y=[];let x=e;const g=(i-e)/l,M=new $,T=new mt;for(let C=0;C<=l;C++){for(let S=0;S<=r;S++){const _=c+S/r*h;M.x=x*Math.cos(_),M.y=x*Math.sin(_),m.push(M.x,M.y,M.z),d.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,y.push(T.x,T.y)}x+=g}for(let C=0;C<l;C++){const S=C*(r+1);for(let _=0;_<r;_++){const O=_+S,I=O,w=O+r+1,P=O+r+2,D=O+1;p.push(I,w,D),p.push(w,P,D)}}this.setIndex(p),this.setAttribute("position",new fn(m,3)),this.setAttribute("normal",new fn(d,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xa extends di{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+p,Math.PI);let d=0;const y=[],x=new $,g=new $,M=[],T=[],C=[],S=[];for(let _=0;_<=r;_++){const O=[],I=_/r,w=h+I*p,P=e*Math.cos(w),D=Math.sqrt(e*e-P*P);let z=0;_===0&&h===0?z=.5/i:_===r&&m===Math.PI&&(z=-.5/i);for(let E=0;E<=i;E++){const U=E/i,X=l+U*c;x.x=-D*Math.cos(X),x.y=P,x.z=D*Math.sin(X),T.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),S.push(U+z,1-I),O.push(d++)}y.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const I=y[_][O+1],w=y[_][O],P=y[_+1][O],D=y[_+1][O+1];(_!==0||h>0)&&M.push(I,w,D),(_!==r-1||m<Math.PI)&&M.push(w,P,D)}this.setIndex(M),this.setAttribute("position",new fn(T,3)),this.setAttribute("normal",new fn(C,3)),this.setAttribute("uv",new fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $d extends di{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c,thetaStart:h,thetaLength:p},r=Math.floor(r),l=Math.floor(l);const m=[],d=[],y=[],x=[],g=new $,M=new $,T=new $;for(let C=0;C<=r;C++){const S=h+C/r*p;for(let _=0;_<=l;_++){const O=_/l*c;M.x=(e+i*Math.cos(S))*Math.cos(O),M.y=(e+i*Math.cos(S))*Math.sin(O),M.z=i*Math.sin(S),d.push(M.x,M.y,M.z),g.x=e*Math.cos(O),g.y=e*Math.sin(O),T.subVectors(M,g).normalize(),y.push(T.x,T.y,T.z),x.push(_/l),x.push(C/r)}}for(let C=1;C<=r;C++)for(let S=1;S<=l;S++){const _=(l+1)*C+S-1,O=(l+1)*(C-1)+S-1,I=(l+1)*(C-1)+S,w=(l+1)*C+S;m.push(_,O,w),m.push(O,I,w)}this.setIndex(m),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Xs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(xv(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(xv(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Vn(s){const e={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)e[l]=r[l]}return e}function xv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function rM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function R_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const sM={clone:Xs,merge:Vn};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(l.value);break;case"v2":this.uniforms[r].value=new mt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new $().fromArray(l.value);break;case"v4":this.uniforms[r].value=new an().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(l.value);break;case"m4":this.uniforms[r].value=new rn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rr extends al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zh extends rr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uM extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fM extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(yv(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!yv(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function yv(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class hM{constructor(e,i,r){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(y){p++,c===!1&&l.onStart!==void 0&&l.onStart(y,h,p),c=!0},this.itemEnd=function(y){h++,l.onProgress!==void 0&&l.onProgress(y,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(y){l.onError!==void 0&&l.onError(y)},this.resolveURL=function(y){return y=y.normalize("NFC"),m?m(y):y},this.setURLModifier=function(y){return m=y,this},this.addHandler=function(y,x){return d.push(y,x),this},this.removeHandler=function(y){const x=d.indexOf(y);return x!==-1&&d.splice(x,2),this},this.getHandler=function(y){for(let x=0,g=d.length;x<g;x+=2){const M=d[x],T=d[x+1];if(M.global&&(M.lastIndex=0),M.test(y))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dM=new hM;class ep{constructor(e){this.manager=e!==void 0?e:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ep.DEFAULT_MATERIAL_NAME="__DEFAULT";const Os=new WeakMap;class pM extends ep{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Bh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let x=Os.get(h);x===void 0&&(x=[],Os.set(h,x)),x.push({onLoad:i,onError:l})}return h}const p=el("img");function m(){y(),i&&i(this);const x=Os.get(this)||[];for(let g=0;g<x.length;g++){const M=x[g];M.onLoad&&M.onLoad(this)}Os.delete(this),c.manager.itemEnd(e)}function d(x){y(),l&&l(x),Bh.remove(`image:${e}`);const g=Os.get(this)||[];for(let M=0;M<g.length;M++){const T=g[M];T.onError&&T.onError(x)}Os.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function y(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Bh.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class mM extends ep{constructor(e){super(e)}load(e,i,r,l){const c=new Fn,h=new pM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class tp extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Fh=new rn,Sv=new $,Mv=new $;class C_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Sv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sv),Mv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Mv),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===$o||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oc=new $,Pc=new Ws,Fi=new $;class w_ extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Pc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Oc,Pc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new $,bv=new mt,Ev=new mt;class fi extends w_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,bv,Ev),i.subVectors(Ev,bv)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class gM extends C_{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class Tv extends tp{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new gM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class np extends w_{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class vM extends C_{constructor(){super(new np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Av extends tp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new vM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class _M extends tp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ps=-90,Is=1;class xM extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Ps,Is,e,i);l.layers=this.layers,this.add(l);const c=new fi(Ps,Is,e,i);c.layers=this.layers,this.add(c);const h=new fi(Ps,Is,e,i);h.layers=this.layers,this.add(h);const p=new fi(Ps,Is,e,i);p.layers=this.layers,this.add(p);const m=new fi(Ps,Is,e,i);m.layers=this.layers,this.add(m);const d=new fi(Ps,Is,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===$o)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,y]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(x,g,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class yM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Rv=new rn;class Cv{constructor(e,i,r=0,l=1/0){this.ray=new E_(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Tt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Rv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rv),this}intersectObject(e,i=!0,r=[]){return Pd(e,this,r,i),r.sort(wv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Pd(e[l],this,r,i);return r.sort(wv),r}}function wv(s,e){return s.distance-e.distance}function Pd(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,p=c.length;h<p;h++)Pd(c[h],e,i,!0)}}class SM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const op=class op{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};op.prototype.isMatrix2=!0;let Dv=op;function Uv(s,e,i,r){const l=MM(r);switch(i){case g_:return s*e;case __:return s*e/l.components*l.byteLength;case Xd:return s*e/l.components*l.byteLength;case kr:return s*e*2/l.components*l.byteLength;case Wd:return s*e*2/l.components*l.byteLength;case v_:return s*e*3/l.components*l.byteLength;case Li:return s*e*4/l.components*l.byteLength;case qd:return s*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:case sd:return Math.max(s,16)*Math.max(e,8)/4;case id:case rd:return Math.max(s,8)*Math.max(e,8)/2;case od:case ld:case ud:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cd:case Wc:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rd:case Cd:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dd:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qc:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MM(s){switch(s){case hi:case h_:return{byteLength:1,components:1};case jo:case d_:case Ea:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case Yi:case Gd:case Vi:return{byteLength:4,components:1};case p_:case m_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);function D_(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function bM(s){const e=new WeakMap;function i(p,m){const d=p.array,y=p.usage,x=d.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,y),p.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,d){const y=m.array,x=m.updateRanges;if(s.bindBuffer(d,p),x.length===0)s.bufferSubData(d,0,y);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],C=x[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const C=x[M];s.bufferSubData(d,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
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
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DM=`#ifdef USE_AOMAP
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
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LM=`#ifdef USE_BATCHING
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
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,YM=`#define PI 3.141592653589793
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
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KM=`vec3 transformedNormal = objectNormal;
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
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gb=`#ifdef USE_ENVMAP
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
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sb=`PhysicalMaterial material;
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
#endif`,Mb=`uniform sampler2D dfgLUT;
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
}`,bb=`
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ob=`#if defined( USE_POINTS_UV )
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
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cE=`float getShadowMask() {
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
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
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
}`,UE=`#if DEPTH_PACKING == 3200
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
}`,LE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
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
}`,zE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,FE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,GE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,XE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,qE=`#define PHONG
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
}`,YE=`#define PHONG
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
}`,ZE=`#define STANDARD
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
}`,KE=`#define STANDARD
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
}`,QE=`#define TOON
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
}`,jE=`#define TOON
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
}`,JE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:EM,alphahash_pars_fragment:TM,alphamap_fragment:AM,alphamap_pars_fragment:RM,alphatest_fragment:CM,alphatest_pars_fragment:wM,aomap_fragment:DM,aomap_pars_fragment:UM,batching_pars_vertex:LM,batching_vertex:NM,begin_vertex:OM,beginnormal_vertex:PM,bsdfs:IM,iridescence_fragment:zM,bumpmap_pars_fragment:BM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:kM,color_pars_fragment:XM,color_pars_vertex:WM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:jM,emissivemap_fragment:JM,emissivemap_pars_fragment:$M,colorspace_fragment:eb,colorspace_pars_fragment:tb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:ab,envmap_pars_vertex:rb,envmap_physical_pars_fragment:gb,envmap_vertex:sb,fog_vertex:ob,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:ub,gradientmap_pars_fragment:fb,lightmap_pars_fragment:hb,lights_lambert_fragment:db,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:vb,lights_toon_pars_fragment:_b,lights_phong_fragment:xb,lights_phong_pars_fragment:yb,lights_physical_fragment:Sb,lights_physical_pars_fragment:Mb,lights_fragment_begin:bb,lights_fragment_maps:Eb,lights_fragment_end:Tb,lightprobes_pars_fragment:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Db,map_fragment:Ub,map_pars_fragment:Lb,map_particle_fragment:Nb,map_particle_pars_fragment:Ob,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:zb,morphcolor_vertex:Bb,morphnormal_vertex:Fb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Gb,normal_fragment_begin:Vb,normal_fragment_maps:kb,normal_pars_fragment:Xb,normal_pars_vertex:Wb,normal_vertex:qb,normalmap_pars_fragment:Yb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Qb,iridescence_pars_fragment:jb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:bE,background_vert:EE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:DE,depth_frag:UE,distance_vert:LE,distance_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:IE,linedashed_frag:zE,meshbasic_vert:BE,meshbasic_frag:FE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:ZE,meshphysical_frag:KE,meshtoon_vert:QE,meshtoon_frag:jE,points_vert:JE,points_frag:$E,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},ze={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Gi={basic:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Vn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Vn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Vn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Vn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Vn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Vn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Vn([ze.common,ze.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Vn([ze.lights,ze.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Gi.physical={uniforms:Vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ic={r:0,b:0,g:0},aT=new rn,U_=new ct;U_.set(-1,0,0,0,1,0,0,0,1);function rT(s,e,i,r,l,c){const h=new Mt(0);let p=l===!0?0:1,m,d,y=null,x=0,g=null;function M(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const w=O.backgroundBlurriness>0;I=e.get(I,w)}return I}function T(O){let I=!1;const w=M(O);w===null?S(h,p):w&&w.isColor&&(S(w,1),I=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,I){const w=M(I);w&&(w.isCubeTexture||w.mapping===Qc)?(d===void 0&&(d=new jt(new qs(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Xs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(U_),d.material.toneMapped=Et.getTransfer(w.colorSpace)!==Ht,(y!==w||x!==w.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,y=w,x=w.version,g=s.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new jt(new jc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Xs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Et.getTransfer(w.colorSpace)!==Ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(y!==w||x!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,y=w,x=w.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function S(O,I){O.getRGB(Ic,R_(s)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,I,c)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,I=1){h.set(O),p=I,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,S(h,p)},render:T,addToRenderList:C,dispose:_}}function sT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,h=!1;function p(G,W,ce,de,Q){let B=!1;const F=x(G,de,ce,W);c!==F&&(c=F,d(c.object)),B=M(G,de,ce,Q),B&&T(G,de,ce,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,w(G,W,ce,de),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function y(G){return s.deleteVertexArray(G)}function x(G,W,ce,de){const Q=de.wireframe===!0;let B=r[W.id];B===void 0&&(B={},r[W.id]=B);const F=G.isInstancedMesh===!0?G.id:0;let J=B[F];J===void 0&&(J={},B[F]=J);let me=J[ce.id];me===void 0&&(me={},J[ce.id]=me);let Ee=me[Q];return Ee===void 0&&(Ee=g(m()),me[Q]=Ee),Ee}function g(G){const W=[],ce=[],de=[];for(let Q=0;Q<i;Q++)W[Q]=0,ce[Q]=0,de[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:de,object:G,attributes:{},index:null}}function M(G,W,ce,de){const Q=c.attributes,B=W.attributes;let F=0;const J=ce.getAttributes();for(const me in J)if(J[me].location>=0){const N=Q[me];let Z=B[me];if(Z===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),N===void 0||N.attribute!==Z||Z&&N.data!==Z.data)return!0;F++}return c.attributesNum!==F||c.index!==de}function T(G,W,ce,de){const Q={},B=W.attributes;let F=0;const J=ce.getAttributes();for(const me in J)if(J[me].location>=0){let N=B[me];N===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(N=G.instanceColor));const Z={};Z.attribute=N,N&&N.data&&(Z.data=N.data),Q[me]=Z,F++}c.attributes=Q,c.attributesNum=F,c.index=de}function C(){const G=c.newAttributes;for(let W=0,ce=G.length;W<ce;W++)G[W]=0}function S(G){_(G,0)}function _(G,W){const ce=c.newAttributes,de=c.enabledAttributes,Q=c.attributeDivisors;ce[G]=1,de[G]===0&&(s.enableVertexAttribArray(G),de[G]=1),Q[G]!==W&&(s.vertexAttribDivisor(G,W),Q[G]=W)}function O(){const G=c.newAttributes,W=c.enabledAttributes;for(let ce=0,de=W.length;ce<de;ce++)W[ce]!==G[ce]&&(s.disableVertexAttribArray(ce),W[ce]=0)}function I(G,W,ce,de,Q,B,F){F===!0?s.vertexAttribIPointer(G,W,ce,Q,B):s.vertexAttribPointer(G,W,ce,de,Q,B)}function w(G,W,ce,de){C();const Q=de.attributes,B=ce.getAttributes(),F=W.defaultAttributeValues;for(const J in B){const me=B[J];if(me.location>=0){let Ee=Q[J];if(Ee===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(Ee=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(Ee=G.instanceColor)),Ee!==void 0){const N=Ee.normalized,Z=Ee.itemSize,Me=e.get(Ee);if(Me===void 0)continue;const Te=Me.buffer,Oe=Me.type,ae=Me.bytesPerElement,ye=Oe===s.INT||Oe===s.UNSIGNED_INT||Ee.gpuType===Gd;if(Ee.isInterleavedBufferAttribute){const Se=Ee.data,Fe=Se.stride,it=Ee.offset;if(Se.isInstancedInterleavedBuffer){for(let Qe=0;Qe<me.locationSize;Qe++)_(me.location+Qe,Se.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)S(me.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Qe=0;Qe<me.locationSize;Qe++)I(me.location+Qe,Z/me.locationSize,Oe,N,Fe*ae,(it+Z/me.locationSize*Qe)*ae,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Se=0;Se<me.locationSize;Se++)_(me.location+Se,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Se=0;Se<me.locationSize;Se++)S(me.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Se=0;Se<me.locationSize;Se++)I(me.location+Se,Z/me.locationSize,Oe,N,Z*ae,Z/me.locationSize*Se*ae,ye)}}else if(F!==void 0){const N=F[J];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(me.location,N);break;case 3:s.vertexAttrib3fv(me.location,N);break;case 4:s.vertexAttrib4fv(me.location,N);break;default:s.vertexAttrib1fv(me.location,N)}}}}O()}function P(){U();for(const G in r){const W=r[G];for(const ce in W){const de=W[ce];for(const Q in de){const B=de[Q];for(const F in B)y(B[F].object),delete B[F];delete de[Q]}}delete r[G]}}function D(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const ce in W){const de=W[ce];for(const Q in de){const B=de[Q];for(const F in B)y(B[F].object),delete B[F];delete de[Q]}}delete r[G.id]}function z(G){for(const W in r){const ce=r[W];for(const de in ce){const Q=ce[de];if(Q[G.id]===void 0)continue;const B=Q[G.id];for(const F in B)y(B[F].object),delete B[F];delete Q[G.id]}}}function E(G){for(const W in r){const ce=r[W],de=G.isInstancedMesh===!0?G.id:0,Q=ce[de];if(Q!==void 0){for(const B in Q){const F=Q[B];for(const J in F)y(F[J].object),delete F[J];delete Q[B]}delete ce[de],Object.keys(ce).length===0&&delete r[W]}}}function U(){X(),h=!0,c!==l&&(c=l,d(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function oT(s,e,i){let r;function l(m){r=m}function c(m,d){s.drawArrays(r,m,d),i.update(d,r,1)}function h(m,d,y){y!==0&&(s.drawArraysInstanced(r,m,d,y),i.update(d,r,y))}function p(m,d,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,y);let g=0;for(let M=0;M<y;M++)g+=d[M];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function lT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Li&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const E=z===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==hi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!E)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const y=m(d);y!==d&&(rt("WebGLRenderer:",d,"not supported, using",y,"instead."),d=y);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:w,maxSamples:P,samples:D}}function cT(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Or,p=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||l;return l=g,r=x.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=y(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||T===null||T.length===0||c&&!S)c?y(null):d();else{const O=c?0:r,I=O*4;let w=_.clippingState||null;m.value=w,w=y(T,g,I,M);for(let P=0;P!==I;++P)w[P]=i[P];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(x,g,M,T){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const _=M+C*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let I=0,w=M;I!==C;++I,w+=4)h.copy(x[I]).applyMatrix4(O,p),h.normal.toArray(S,w),S[w+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const lr=4,Lv=[.125,.215,.35,.446,.526,.582],Ir=20,uT=256,qo=new np,Nv=new Mt;let Hh=null,Gh=0,Vh=0,kh=!1;const fT=new $;class Ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:p=fT}=c;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=kh,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ea,format:Li,colorSpace:Yc,depthBuffer:!1},l=Pv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hT(c)),this._blurMaterial=pT(c,e,i),this._ggxMaterial=dT(c,e,i)}return l}_compileMaterial(e){const i=new jt(new di,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,r,l,c){const m=new fi(90,1,i,r),d=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Nv),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new qs,new Gr({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,_=!0):(S.color.copy(Nv),_=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[I],c.y,c.z)):w===1?(m.up.set(0,0,d[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[I],c.z)):(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[I]));const P=this._cubeSize;zs(l,w*P,I>2?P:0,P,P),x.setRenderTarget(l),_&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;zs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,qo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-y*y),g=0+d*1.25,M=x*g,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-lr?r-T+lr:0),_=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,zs(c,S,_,3*C,2*C),l.setRenderTarget(c),l.render(p,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,zs(e,S,_,3*C,2*C),l.setRenderTarget(e),l.render(p,qo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const y=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ir-1),C=c/T,S=isFinite(c)?1+Math.floor(y*C):Ir;S>Ir&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ir}`);const _=[];let O=0;for(let z=0;z<Ir;++z){const E=z/C,U=Math.exp(-E*E/2);_.push(U),z===0?O+=U:z<S&&(O+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=T,g.mipInt.value=I-r;const w=this._sizeLods[l],P=3*w*(l>I-lr?l-I+lr:0),D=4*(this._cubeSize-w);zs(i,P,D,3*w,2*w),m.setRenderTarget(i),m.render(x,qo)}}function hT(s){const e=[],i=[],r=[];let l=s;const c=s-lr+1+Lv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>s-lr?m=Lv[h-s+lr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),y=-d,x=1+d,g=[y,y,x,y,x,x,y,y,x,x,y,x],M=6,T=6,C=3,S=2,_=1,O=new Float32Array(C*T*M),I=new Float32Array(S*T*M),w=new Float32Array(_*T*M);for(let D=0;D<M;D++){const z=D%3*2/3-1,E=D>2?0:-1,U=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];O.set(U,C*T*D),I.set(g,S*T*D);const X=[D,D,D,D,D,D];w.set(X,_*T*D)}const P=new di;P.setAttribute("position",new qi(O,C)),P.setAttribute("uv",new qi(I,S)),P.setAttribute("faceIndex",new qi(w,_)),r.push(new jt(P,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Pv(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=Qc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function dT(s,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function pT(s,e,i){const r=new Float32Array(Ir),l=new $(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Iv(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function zv(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}class L_ extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new T_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qs(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new jt(l,c),p=i.minFilter;return i.minFilter===Br&&(i.minFilter=Bn),new xM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}function mT(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===uh||M===fh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new L_(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,T=M===uh||M===fh,C=M===Vr||M===Vs;if(T||C){let S=i.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Ov(s)),S=T?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const O=g.image;return T&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new Ov(s)),S=T?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",y),S.texture):null}}}return g}function p(g,M){return M===uh?g.mapping=Vr:M===fh&&(g.mapping=Vs),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function d(g){const M=g.target;M.removeEventListener("dispose",d);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function y(g){const M=g.target;M.removeEventListener("dispose",y);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function gT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fs("WebGLRenderer: "+r+" extension not supported."),l}}}function vT(s,e,i,r){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const O=M.array;C=M.version;for(let I=0,w=O.length;I<w;I+=3){const P=O[I+0],D=O[I+1],z=O[I+2];g.push(P,D,D,z,z,P)}}else{const O=T.array;C=T.version;for(let I=0,w=O.length/3-1;I<w;I+=3){const P=I+0,D=I+1,z=I+2;g.push(P,D,D,z,z,P)}}const S=new(T.count>=65535?b_:M_)(g,1);S.version=C;const _=c.get(x);_&&e.remove(_),c.set(x,S)}function y(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:y}}function _T(s,e,i){let r;function l(x){r=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*h),i.update(g,r,1)}function d(x,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,x*h,M),i.update(g,r,M))}function y(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=y}function xT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,p){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Tt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function yT(s,e,i){const r=new WeakMap,l=new an;function c(h,p,m){const d=h.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=y!==void 0?y.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let X=function(){E.dispose(),r.delete(p),p.removeEventListener("dispose",X)};var M=X;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let w=0;T===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let P=p.attributes.position.count*w,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const z=new Float32Array(P*D*4*x),E=new y_(z,P,D,x);E.type=Vi,E.needsUpdate=!0;const U=w*4;for(let G=0;G<x;G++){const W=_[G],ce=O[G],de=I[G],Q=P*D*4*G;for(let B=0;B<W.count;B++){const F=B*U;T===!0&&(l.fromBufferAttribute(W,B),z[Q+F+0]=l.x,z[Q+F+1]=l.y,z[Q+F+2]=l.z,z[Q+F+3]=0),C===!0&&(l.fromBufferAttribute(ce,B),z[Q+F+4]=l.x,z[Q+F+5]=l.y,z[Q+F+6]=l.z,z[Q+F+7]=0),S===!0&&(l.fromBufferAttribute(de,B),z[Q+F+8]=l.x,z[Q+F+9]=l.y,z[Q+F+10]=l.z,z[Q+F+11]=de.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new mt(P,D)},r.set(p,g),p.addEventListener("dispose",X)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let S=0;S<d.length;S++)T+=d[S];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function ST(s,e,i,r,l){let c=new WeakMap;function h(d){const y=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==y&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,y))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return g}function p(){c=new WeakMap}function m(d){const y=d.target;y.removeEventListener("dispose",m),r.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:h,dispose:p}}const MT={[r_]:"LINEAR_TONE_MAPPING",[s_]:"REINHARD_TONE_MAPPING",[o_]:"CINEON_TONE_MAPPING",[Hd]:"ACES_FILMIC_TONE_MAPPING",[c_]:"AGX_TONE_MAPPING",[u_]:"NEUTRAL_TONE_MAPPING",[l_]:"CUSTOM_TONE_MAPPING"};function bT(s,e,i,r,l,c){const h=new Wi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new ks(e,i):void 0}),p=new Wi(e,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),m=new di;m.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new fn([0,2,0,0,2,0],2));const d=new cM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new jt(m,d),x=new np(-1,1,1,-1,0,1);let g=null,M=null,T=!1,C,S=null,_=[],O=!1;this.setSize=function(I,w){h.setSize(I,w),p.setSize(I,w);for(let P=0;P<_.length;P++){const D=_[P];D.setSize&&D.setSize(I,w)}},this.setEffects=function(I){_=I,O=_.length>0&&_[0].isRenderPass===!0;const w=h.width,P=h.height;for(let D=0;D<_.length;D++){const z=_[D];z.setSize&&z.setSize(w,P)}},this.begin=function(I,w){if(T||I.toneMapping===Xi&&_.length===0)return!1;if(S=w,w!==null){const P=w.width,D=w.height;(h.width!==P||h.height!==D)&&this.setSize(P,D)}return O===!1&&I.setRenderTarget(h),C=I.toneMapping,I.toneMapping=Xi,!0},this.hasRenderPass=function(){return O},this.end=function(I,w){I.toneMapping=C,T=!0;let P=h,D=p;for(let z=0;z<_.length;z++){const E=_[z];if(E.enabled!==!1&&(E.render(I,D,P,w),E.needsSwap!==!1)){const U=P;P=D,D=U}}if(g!==I.outputColorSpace||M!==I.toneMapping){g=I.outputColorSpace,M=I.toneMapping,d.defines={},Et.getTransfer(g)===Ht&&(d.defines.SRGB_TRANSFER="");const z=MT[M];z&&(d.defines[z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,I.setRenderTarget(S),I.render(y,x),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const N_=new Fn,Id=new ks(1,1),O_=new y_,P_=new HS,I_=new T_,Bv=[],Fv=[],Hv=new Float32Array(16),Gv=new Float32Array(9),Vv=new Float32Array(4);function Ys(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Bv[l];if(c===void 0&&(c=new Float32Array(l),Bv[l]=c),e!==0){r.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,s[h].toArray(c,p)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function $c(s,e){let i=Fv[e];i===void 0&&(i=new Int32Array(e),Fv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function ET(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function TT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function AT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function RT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function CT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;Vv.set(r),s.uniformMatrix2fv(this.addr,!1,Vv),Mn(i,r)}}function wT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;Gv.set(r),s.uniformMatrix3fv(this.addr,!1,Gv),Mn(i,r)}}function DT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;Hv.set(r),s.uniformMatrix4fv(this.addr,!1,Hv),Mn(i,r)}}function UT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function LT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function NT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function OT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function PT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function IT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function zT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function BT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function FT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Id.compareFunction=i.isReversedDepthBuffer()?Zd:Yd,c=Id):c=N_,i.setTexture2D(e||c,l)}function HT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||P_,l)}function GT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||I_,l)}function VT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||O_,l)}function kT(s){switch(s){case 5126:return ET;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return IT;case 36295:return zT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}function XT(s,e){s.uniform1fv(this.addr,e)}function WT(s,e){const i=Ys(e,this.size,2);s.uniform2fv(this.addr,i)}function qT(s,e){const i=Ys(e,this.size,3);s.uniform3fv(this.addr,i)}function YT(s,e){const i=Ys(e,this.size,4);s.uniform4fv(this.addr,i)}function ZT(s,e){const i=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function KT(s,e){const i=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function QT(s,e){const i=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function jT(s,e){s.uniform1iv(this.addr,e)}function JT(s,e){s.uniform2iv(this.addr,e)}function $T(s,e){s.uniform3iv(this.addr,e)}function e1(s,e){s.uniform4iv(this.addr,e)}function t1(s,e){s.uniform1uiv(this.addr,e)}function n1(s,e){s.uniform2uiv(this.addr,e)}function i1(s,e){s.uniform3uiv(this.addr,e)}function a1(s,e){s.uniform4uiv(this.addr,e)}function r1(s,e,i){const r=this.cache,l=e.length,c=$c(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=Id:h=N_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function s1(s,e,i){const r=this.cache,l=e.length,c=$c(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||P_,c[h])}function o1(s,e,i){const r=this.cache,l=e.length,c=$c(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||I_,c[h])}function l1(s,e,i){const r=this.cache,l=e.length,c=$c(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||O_,c[h])}function c1(s){switch(s){case 5126:return XT;case 35664:return WT;case 35665:return qT;case 35666:return YT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return jT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kT(i.type)}}class f1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=c1(i.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function kv(s,e){s.seq.push(e),s.map[e.id]=e}function d1(s,e,i){const r=s.name,l=r.length;for(Xh.lastIndex=0;;){const c=Xh.exec(r),h=Xh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){kv(i,d===void 0?new u1(p,s,e):new f1(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new h1(p),kv(i,x)),i=x}}}class Xc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);d1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Xv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const p1=37297;let m1=0;function g1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const Wv=new ct;function v1(s){Et._getMatrix(Wv,Et.workingColorSpace,s);const e=`mat3( ${Wv.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(s)){case Zc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+g1(s.getShaderSource(e),p)}else return c}function _1(s,e){const i=v1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const x1={[r_]:"Linear",[s_]:"Reinhard",[o_]:"Cineon",[Hd]:"ACESFilmic",[c_]:"AgX",[u_]:"Neutral",[l_]:"Custom"};function y1(s,e){const i=x1[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new $;function S1(){Et.getLuminanceCoefficients(zc);const s=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function b1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function E1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:p}}return i}function Ko(s){return s!==""}function Yv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace(T1,R1)}const A1=new Map;function R1(s,e){let i=pt[e];if(i===void 0){const r=A1.get(e);if(r!==void 0)i=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zd(i)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(s){return s.replace(C1,w1)}function w1(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Qv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const D1={[Fc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function U1(s){return D1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L1={[Vr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Qc]:"ENVMAP_TYPE_CUBE_UV"};function N1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":L1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const O1={[Vs]:"ENVMAP_MODE_REFRACTION"};function P1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":O1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I1={[a_]:"ENVMAP_BLENDING_MULTIPLY",[xS]:"ENVMAP_BLENDING_MIX",[yS]:"ENVMAP_BLENDING_ADD"};function z1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":I1[s.combine]||"ENVMAP_BLENDING_NONE"}function B1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function F1(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=U1(i),d=N1(i),y=P1(i),x=z1(i),g=B1(i),M=M1(i),T=b1(c),C=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ko).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ko).join(`
`),_.length>0&&(_+=`
`)):(S=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),_=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+y:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Xi?y1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,_1("linearToOutputTexel",i.outputColorSpace),S1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=zd(h),h=Yv(h,i),h=Zv(h,i),p=zd(p),p=Yv(p,i),p=Zv(p,i),h=Kv(h),p=Kv(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=O+S+h,w=O+_+p,P=Xv(l,l.VERTEX_SHADER,I),D=Xv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,P),l.attachShader(C,D),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(s.debug.checkShaderErrors){const W=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(P)||"",de=l.getShaderInfoLog(D)||"",Q=W.trim(),B=ce.trim(),F=de.trim();let J=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,P,D);else{const Ee=qv(l,P,"vertex"),N=qv(l,D,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+Ee+`
`+N)}else Q!==""?rt("WebGLProgram: Program Info Log:",Q):(B===""||F==="")&&(me=!1);me&&(G.diagnostics={runnable:J,programLog:Q,vertexShader:{log:B,prefix:S},fragmentShader:{log:F,prefix:_}})}l.deleteShader(P),l.deleteShader(D),E=new Xc(l,C),U=E1(l,C)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(C,p1)),X},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=D,this}let H1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new V1(e),i.set(e,r)),r}}class V1{constructor(e){this.id=H1++,this.code=e,this.usedTimes=0}}function k1(s){return s===kr||s===Wc||s===qc}function X1(s,e,i,r,l,c){const h=new Qd,p=new G1,m=new Set,d=[],y=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function C(E,U,X,G,W,ce){const de=G.fog,Q=W.geometry,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=e.get(E.envMap||B,F),me=J&&J.mapping===Qc?J.image.height:null,Ee=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&rt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const N=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Z=N!==void 0?N.length:0;let Me=0;Q.morphAttributes.position!==void 0&&(Me=1),Q.morphAttributes.normal!==void 0&&(Me=2),Q.morphAttributes.color!==void 0&&(Me=3);let Te,Oe,ae,ye;if(Ee){const ke=Gi[Ee];Te=ke.vertexShader,Oe=ke.fragmentShader}else{Te=E.vertexShader,Oe=E.fragmentShader;const ke=p.getVertexShaderStage(E),$t=p.getFragmentShaderStage(E);p.update(E,ke,$t),ae=ke.id,ye=$t.id}const Se=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),it=W.isInstancedMesh===!0,Qe=W.isBatchedMesh===!0,Ue=!!E.map,Ke=!!E.matcap,at=!!J,st=!!E.aoMap,ut=!!E.lightMap,Zt=!!E.bumpMap&&E.wireframe===!1,Wt=!!E.normalMap,Nt=!!E.displacementMap,Jt=!!E.emissiveMap,Ut=!!E.metalnessMap,sn=!!E.roughnessMap,Y=E.anisotropy>0,Gt=E.clearcoat>0,wt=E.dispersion>0,L=E.iridescence>0,b=E.sheen>0,j=E.transmission>0,re=Y&&!!E.anisotropyMap,fe=Gt&&!!E.clearcoatMap,Ae=Gt&&!!E.clearcoatNormalMap,De=Gt&&!!E.clearcoatRoughnessMap,ue=L&&!!E.iridescenceMap,he=L&&!!E.iridescenceThicknessMap,Ce=b&&!!E.sheenColorMap,He=b&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Le=!!E.specularColorMap,Je=!!E.specularIntensityMap,$e=j&&!!E.transmissionMap,ot=j&&!!E.thicknessMap,k=!!E.gradientMap,Re=!!E.alphaMap,ge=E.alphaTest>0,we=!!E.alphaHash,Be=!!E.extensions;let be=Xi;E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(be=s.toneMapping);const Ye={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:Oe,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&W._colorsTexture!==null,instancing:it,instancingColor:it&&W.instanceColor!==null,instancingMorph:it&&W.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ue,matcap:Ke,envMap:at,envMapMode:at&&J.mapping,envMapCubeUVHeight:me,aoMap:st,lightMap:ut,bumpMap:Zt,normalMap:Wt,displacementMap:Nt,emissiveMap:Jt,normalMapObjectSpace:Wt&&E.normalMapType===bS,normalMapTangentSpace:Wt&&E.normalMapType===Nd,packedNormalMap:Wt&&E.normalMapType===Nd&&k1(E.normalMap.format),metalnessMap:Ut,roughnessMap:sn,anisotropy:Y,anisotropyMap:re,clearcoat:Gt,clearcoatMap:fe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,dispersion:wt,iridescence:L,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Le,specularIntensityMap:Je,transmission:j,transmissionMap:$e,thicknessMap:ot,gradientMap:k,opaque:E.transparent===!1&&E.blending===Bs&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:ge,alphaHash:we,combine:E.combine,mapUv:Ue&&T(E.map.channel),aoMapUv:st&&T(E.aoMap.channel),lightMapUv:ut&&T(E.lightMap.channel),bumpMapUv:Zt&&T(E.bumpMap.channel),normalMapUv:Wt&&T(E.normalMap.channel),displacementMapUv:Nt&&T(E.displacementMap.channel),emissiveMapUv:Jt&&T(E.emissiveMap.channel),metalnessMapUv:Ut&&T(E.metalnessMap.channel),roughnessMapUv:sn&&T(E.roughnessMap.channel),anisotropyMapUv:re&&T(E.anisotropyMap.channel),clearcoatMapUv:fe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(E.sheenRoughnessMap.channel),specularMapUv:Pe&&T(E.specularMap.channel),specularColorMapUv:Le&&T(E.specularColorMap.channel),specularIntensityMapUv:Je&&T(E.specularIntensityMap.channel),transmissionMapUv:$e&&T(E.transmissionMap.channel),thicknessMapUv:ot&&T(E.thicknessMap.channel),alphaMapUv:Re&&T(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Wt||Y),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Q.attributes.uv&&(Ue||Re),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&Wt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Fe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Me,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Ue&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Ht,decodeVideoTextureEmissive:Jt&&E.emissiveMap.isVideoTexture===!0&&Et.getTransfer(E.emissiveMap.colorSpace)===Ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function S(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)U.push(X),U.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(_(U,E),O(U,E),U.push(s.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function _(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function O(E,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),U.packedNormalMap&&h.enable(22),U.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),U.numLightProbeGrids>0&&h.enable(22),U.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function I(E){const U=M[E.type];let X;if(U){const G=Gi[U];X=sM.clone(G.uniforms)}else X=E.uniforms;return X}function w(E,U){let X=y.get(U);return X!==void 0?++X.usedTimes:(X=new F1(s,U,E,l),d.push(X),y.set(U,X)),X}function P(E){if(--E.usedTimes===0){const U=d.indexOf(E);d[U]=d[d.length-1],d.pop(),y.delete(E.cacheKey),E.destroy()}}function D(E){p.remove(E)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:d,dispose:z}}function W1(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let p=s.get(h);return p===void 0&&(p={},s.set(h,p)),p}function r(h){s.delete(h)}function l(h,p,m){s.get(h)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function q1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function jv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,S,_){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:M,material:T,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:_},s[e]=O):(O.id=g.id,O.object=g,O.geometry=M,O.material=T,O.materialVariant=h(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=S,O.group=_),e++,O}function m(g,M,T,C,S,_){const O=p(g,M,T,C,S,_);T.transmission>0?r.push(O):T.transparent===!0?l.push(O):i.push(O)}function d(g,M,T,C,S,_){const O=p(g,M,T,C,S,_);T.transmission>0?r.unshift(O):T.transparent===!0?l.unshift(O):i.unshift(O)}function y(g,M,T){i.length>1&&i.sort(g||q1),r.length>1&&r.sort(M||jv),l.length>1&&l.sort(M||jv),T&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,M=s.length;g<M;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:x,sort:y}}function Y1(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new Jv,s.set(r,[h])):l>=c.length?(h=new Jv,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function Z1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Mt};break;case"SpotLight":i={position:new $,direction:new $,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=i,i}}}function K1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let Q1=0;function j1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function J1(s){const e=new Z1,i=K1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new $);const l=new $,c=new rn,h=new rn;function p(d){let y=0,x=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,T=0,C=0,S=0,_=0,O=0,I=0,w=0,P=0,D=0,z=0;d.sort(j1);for(let U=0,X=d.length;U<X;U++){const G=d[U],W=G.color,ce=G.intensity,de=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===kr?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)y+=W.r*ce,x+=W.g*ce,g+=W.b*ce;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],ce);z++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,J=i.get(G);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,r.directionalShadow[M]=J,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=G.shadow.matrix,O++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(W).multiplyScalar(ce),B.distance=de,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[C]=B;const F=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,F.updateMatrices(G),G.castShadow&&D++),r.spotLightMatrix[C]=F.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,r.spotShadow[C]=J,r.spotShadowMap[C]=Q,w++}C++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(W).multiplyScalar(ce),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const F=G.shadow,J=i.get(G);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,J.shadowCameraNear=F.camera.near,J.shadowCameraFar=F.camera.far,r.pointShadow[T]=J,r.pointShadowMap[T]=Q,r.pointShadowMatrix[T]=G.shadow.matrix,I++}r.point[T]=B,T++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(ce),B.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[_]=B,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==T||E.spotLength!==C||E.rectAreaLength!==S||E.hemiLength!==_||E.numDirectionalShadows!==O||E.numPointShadows!==I||E.numSpotShadows!==w||E.numSpotMaps!==P||E.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=z,E.directionalLength=M,E.pointLength=T,E.spotLength=C,E.rectAreaLength=S,E.hemiLength=_,E.numDirectionalShadows=O,E.numPointShadows=I,E.numSpotShadows=w,E.numSpotMaps=P,E.numLightProbes=z,r.version=Q1++)}function m(d,y){let x=0,g=0,M=0,T=0,C=0;const S=y.matrixWorldInverse;for(let _=0,O=d.length;_<O;_++){const I=d[_];if(I.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),x++}else if(I.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),h.identity(),c.copy(I.matrixWorld),c.premultiply(S),h.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(I.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function $v(s){const e=new J1(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function y(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:y,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function $1(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new $v(s),e.set(l,[p])):c>=h.length?(p=new $v(s),h.push(p)):p=h[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
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
}`,nA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],iA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],e_=new rn,Yo=new $,Wh=new $;function aA(s,e,i){let r=new Jd;const l=new mt,c=new mt,h=new an,p=new uM,m=new fM,d={},y=i.maxTextureSize,x={[ba]:jn,[jn]:ba,[An]:An},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:eA,fragmentShader:tA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new di;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new jt(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let _=this.type;this.render=function(D,z,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;this.type===i_&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fc);const U=s.getRenderTarget(),X=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Sa),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ce=_!==this.type;ce&&z.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Q=>Q.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Q=D.length;de<Q;de++){const B=D[de],F=B.shadow;if(F===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const J=F.getFrameExtents();l.multiply(J),c.copy(F.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/J.x),l.x=c.x*J.x,F.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/J.y),l.y=c.y*J.y,F.mapSize.y=c.y));const me=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=me,F.map===null||ce===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Zo){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wi(l.x,l.y,{format:kr,type:Ea,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new ks(l.x,l.y,Vi),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Ta,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn}else B.isPointLight?(F.map=new L_(l.x),F.map.depthTexture=new aM(l.x,Yi)):(F.map=new Wi(l.x,l.y),F.map.depthTexture=new ks(l.x,l.y,Yi)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Ta,this.type===Fc?(F.map.depthTexture.compareFunction=me?Zd:Yd,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn);F.camera.updateProjectionMatrix()}const Ee=F.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Ee;N++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,N),s.clear();else{N===0&&(s.setRenderTarget(F.map),s.clear());const Z=F.getViewport(N);h.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),W.viewport(h)}if(B.isPointLight){const Z=F.camera,Me=F.matrix,Te=B.distance||Z.far;Te!==Z.far&&(Z.far=Te,Z.updateProjectionMatrix()),Yo.setFromMatrixPosition(B.matrixWorld),Z.position.copy(Yo),Wh.copy(Z.position),Wh.add(nA[N]),Z.up.copy(iA[N]),Z.lookAt(Wh),Z.updateMatrixWorld(),Me.makeTranslation(-Yo.x,-Yo.y,-Yo.z),e_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(e_,Z.coordinateSystem,Z.reversedDepth)}else F.updateMatrices(B);r=F.getFrustum(),w(z,E,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Zo&&O(F,E),F.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(U,X,G)};function O(D,z){const E=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Wi(l.x,l.y,{format:kr,type:Ea})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(z,null,E,g,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(z,null,E,M,C,null)}function I(D,z,E,U){let X=null;const G=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)X=G;else if(X=E.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const W=X.uuid,ce=z.uuid;let de=d[W];de===void 0&&(de={},d[W]=de);let Q=de[ce];Q===void 0&&(Q=X.clone(),de[ce]=Q,z.addEventListener("dispose",P)),X=Q}if(X.visible=z.visible,X.wireframe=z.wireframe,U===Zo?X.side=z.shadowSide!==null?z.shadowSide:z.side:X.side=z.shadowSide!==null?z.shadowSide:x[z.side],X.alphaMap=z.alphaMap,X.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,X.map=z.map,X.clipShadows=z.clipShadows,X.clippingPlanes=z.clippingPlanes,X.clipIntersection=z.clipIntersection,X.displacementMap=z.displacementMap,X.displacementScale=z.displacementScale,X.displacementBias=z.displacementBias,X.wireframeLinewidth=z.wireframeLinewidth,X.linewidth=z.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const W=s.properties.get(X);W.light=E}return X}function w(D,z,E,U,X){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===Zo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),de=D.material;if(Array.isArray(de)){const Q=ce.groups;for(let B=0,F=Q.length;B<F;B++){const J=Q[B],me=de[J.materialIndex];if(me&&me.visible){const Ee=I(D,me,U,X);D.onBeforeShadow(s,D,z,E,ce,Ee,J),s.renderBufferDirect(E,null,ce,Ee,D,J),D.onAfterShadow(s,D,z,E,ce,Ee,J)}}}else if(de.visible){const Q=I(D,de,U,X);D.onBeforeShadow(s,D,z,E,ce,Q,null),s.renderBufferDirect(E,null,ce,Q,D,null),D.onAfterShadow(s,D,z,E,ce,Q,null)}}const W=D.children;for(let ce=0,de=W.length;ce<de;ce++)w(W[ce],z,E,U,X)}function P(D){D.target.removeEventListener("dispose",P);for(const E in d){const U=d[E],X=D.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function rA(s,e){function i(){let k=!1;const Re=new an;let ge=null;const we=new an(0,0,0,0);return{setMask:function(Be){ge!==Be&&!k&&(s.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){k=Be},setClear:function(Be,be,Ye,ke,$t){$t===!0&&(Be*=ke,be*=ke,Ye*=ke),Re.set(Be,be,Ye,ke),we.equals(Re)===!1&&(s.clearColor(Be,be,Ye,ke),we.copy(Re))},reset:function(){k=!1,ge=null,we.set(-1,0,0,0)}}}function r(){let k=!1,Re=!1,ge=null,we=null,Be=null;return{setReversed:function(be){if(Re!==be){const Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const ke=Be;Be=null,this.setClear(ke)}},getReversed:function(){return Re},setTest:function(be){be?Se(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(be){ge!==be&&!k&&(s.depthMask(be),ge=be)},setFunc:function(be){if(Re&&(be=NS[be]),we!==be){switch(be){case Kh:s.depthFunc(s.NEVER);break;case Qh:s.depthFunc(s.ALWAYS);break;case jh:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case Jh:s.depthFunc(s.EQUAL);break;case $h:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=be}},setLocked:function(be){k=be},setClear:function(be){Be!==be&&(Be=be,Re&&(be=1-be),s.clearDepth(be))},reset:function(){k=!1,ge=null,we=null,Be=null,Re=!1}}}function l(){let k=!1,Re=null,ge=null,we=null,Be=null,be=null,Ye=null,ke=null,$t=null;return{setTest:function(Ot){k||(Ot?Se(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(Ot){Re!==Ot&&!k&&(s.stencilMask(Ot),Re=Ot)},setFunc:function(Ot,Jn,$n){(ge!==Ot||we!==Jn||Be!==$n)&&(s.stencilFunc(Ot,Jn,$n),ge=Ot,we=Jn,Be=$n)},setOp:function(Ot,Jn,$n){(be!==Ot||Ye!==Jn||ke!==$n)&&(s.stencilOp(Ot,Jn,$n),be=Ot,Ye=Jn,ke=$n)},setLocked:function(Ot){k=Ot},setClear:function(Ot){$t!==Ot&&(s.clearStencil(Ot),$t=Ot)},reset:function(){k=!1,Re=null,ge=null,we=null,Be=null,be=null,Ye=null,ke=null,$t=null}}}const c=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let y={},x={},g={},M=new WeakMap,T=[],C=null,S=!1,_=null,O=null,I=null,w=null,P=null,D=null,z=null,E=new Mt(0,0,0),U=0,X=!1,G=null,W=null,ce=null,de=null,Q=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,J=0;const me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(me)[1]),F=J>=1):me.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),F=J>=2);let Ee=null,N={};const Z=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Te=new an().fromArray(Z),Oe=new an().fromArray(Me);function ae(k,Re,ge,we){const Be=new Uint8Array(4),be=s.createTexture();s.bindTexture(k,be),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ge;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Re+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return be}const ye={};ye[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),h.setFunc(Gs),Zt(!1),Wt(Q0),Se(s.CULL_FACE),st(Sa);function Se(k){y[k]!==!0&&(s.enable(k),y[k]=!0)}function Fe(k){y[k]!==!1&&(s.disable(k),y[k]=!1)}function it(k,Re){return g[k]!==Re?(s.bindFramebuffer(k,Re),g[k]=Re,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(k,Re){let ge=T,we=!1;if(k){ge=M.get(Re),ge===void 0&&(ge=[],M.set(Re,ge));const Be=k.textures;if(ge.length!==Be.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ye=Be.length;be<Ye;be++)ge[be]=s.COLOR_ATTACHMENT0+be;ge.length=Be.length,we=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,we=!0);we&&s.drawBuffers(ge)}function Ue(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const Ke={[Pr]:s.FUNC_ADD,[nS]:s.FUNC_SUBTRACT,[iS]:s.FUNC_REVERSE_SUBTRACT};Ke[aS]=s.MIN,Ke[rS]=s.MAX;const at={[sS]:s.ZERO,[oS]:s.ONE,[lS]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[pS]:s.SRC_ALPHA_SATURATE,[hS]:s.DST_COLOR,[uS]:s.DST_ALPHA,[cS]:s.ONE_MINUS_SRC_COLOR,[Zh]:s.ONE_MINUS_SRC_ALPHA,[dS]:s.ONE_MINUS_DST_COLOR,[fS]:s.ONE_MINUS_DST_ALPHA,[mS]:s.CONSTANT_COLOR,[gS]:s.ONE_MINUS_CONSTANT_COLOR,[vS]:s.CONSTANT_ALPHA,[_S]:s.ONE_MINUS_CONSTANT_ALPHA};function st(k,Re,ge,we,Be,be,Ye,ke,$t,Ot){if(k===Sa){S===!0&&(Fe(s.BLEND),S=!1);return}if(S===!1&&(Se(s.BLEND),S=!0),k!==tS){if(k!==_||Ot!==X){if((O!==Pr||P!==Pr)&&(s.blendEquation(s.FUNC_ADD),O=Pr,P=Pr),Ot)switch(k){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case j0:s.blendFunc(s.ONE,s.ONE);break;case J0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",k);break}else switch(k){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case j0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case J0:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",k);break}I=null,w=null,D=null,z=null,E.set(0,0,0),U=0,_=k,X=Ot}return}Be=Be||Re,be=be||ge,Ye=Ye||we,(Re!==O||Be!==P)&&(s.blendEquationSeparate(Ke[Re],Ke[Be]),O=Re,P=Be),(ge!==I||we!==w||be!==D||Ye!==z)&&(s.blendFuncSeparate(at[ge],at[we],at[be],at[Ye]),I=ge,w=we,D=be,z=Ye),(ke.equals(E)===!1||$t!==U)&&(s.blendColor(ke.r,ke.g,ke.b,$t),E.copy(ke),U=$t),_=k,X=!1}function ut(k,Re){k.side===An?Fe(s.CULL_FACE):Se(s.CULL_FACE);let ge=k.side===jn;Re&&(ge=!ge),Zt(ge),k.blending===Bs&&k.transparent===!1?st(Sa):st(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const we=k.stencilWrite;p.setTest(we),we&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function Wt(k){k!==$y?(Se(s.CULL_FACE),k!==W&&(k===Q0?s.cullFace(s.BACK):k===eS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),W=k}function Nt(k){k!==ce&&(F&&s.lineWidth(k),ce=k)}function Jt(k,Re,ge){k?(Se(s.POLYGON_OFFSET_FILL),(de!==Re||Q!==ge)&&(de=Re,Q=ge,h.getReversed()&&(Re=-Re),s.polygonOffset(Re,ge))):Fe(s.POLYGON_OFFSET_FILL)}function Ut(k){k?Se(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function sn(k){k===void 0&&(k=s.TEXTURE0+B-1),Ee!==k&&(s.activeTexture(k),Ee=k)}function Y(k,Re,ge){ge===void 0&&(Ee===null?ge=s.TEXTURE0+B-1:ge=Ee);let we=N[ge];we===void 0&&(we={type:void 0,texture:void 0},N[ge]=we),(we.type!==k||we.texture!==Re)&&(Ee!==ge&&(s.activeTexture(ge),Ee=ge),s.bindTexture(k,Re||ye[k]),we.type=k,we.texture=Re)}function Gt(){const k=N[Ee];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function b(){try{s.texSubImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function j(){try{s.texSubImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function Ae(){try{s.texStorage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function De(){try{s.texStorage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function ue(){try{s.texImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function he(){try{s.texImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function Ce(k){return x[k]!==void 0?x[k]:s.getParameter(k)}function He(k,Re){x[k]!==Re&&(s.pixelStorei(k,Re),x[k]=Re)}function Pe(k){Te.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Le(k){Oe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function Je(k,Re){let ge=d.get(Re);ge===void 0&&(ge=new WeakMap,d.set(Re,ge));let we=ge.get(k);we===void 0&&(we=s.getUniformBlockIndex(Re,k.name),ge.set(k,we))}function $e(k,Re){const we=d.get(Re).get(k);m.get(Re)!==we&&(s.uniformBlockBinding(Re,we,k.__bindingPointIndex),m.set(Re,we))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},x={},Ee=null,N={},g={},M=new WeakMap,T=[],C=null,S=!1,_=null,O=null,I=null,w=null,P=null,D=null,z=null,E=new Mt(0,0,0),U=0,X=!1,G=null,W=null,ce=null,de=null,Q=null,Te.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Se,disable:Fe,bindFramebuffer:it,drawBuffers:Qe,useProgram:Ue,setBlending:st,setMaterial:ut,setFlipSided:Zt,setCullFace:Wt,setLineWidth:Nt,setPolygonOffset:Jt,setScissorTest:Ut,activeTexture:sn,bindTexture:Y,unbindTexture:Gt,compressedTexImage2D:wt,compressedTexImage3D:L,texImage2D:ue,texImage3D:he,pixelStorei:He,getParameter:Ce,updateUBOMapping:Je,uniformBlockBinding:$e,texStorage2D:Ae,texStorage3D:De,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Pe,viewport:Le,reset:ot}}function sA(s,e,i,r,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new mt,y=new WeakMap,x=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,b){return T?new OffscreenCanvas(L,b):el("canvas")}function S(L,b,j){let re=1;const fe=wt(L);if((fe.width>j||fe.height>j)&&(re=j/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(re*fe.width),De=Math.floor(re*fe.height);g===void 0&&(g=C(Ae,De));const ue=b?C(Ae,De):g;return ue.width=Ae,ue.height=De,ue.getContext("2d").drawImage(L,0,0,Ae,De),rt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ae+"x"+De+")."),ue}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function _(L){return L.generateMipmaps}function O(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(L,b,j,re,fe,Ae=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===s.RED&&(j===s.FLOAT&&(ue=s.R32F),j===s.HALF_FLOAT&&(ue=s.R16F),j===s.UNSIGNED_BYTE&&(ue=s.R8),j===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),j===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),b===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.R8UI),j===s.UNSIGNED_SHORT&&(ue=s.R16UI),j===s.UNSIGNED_INT&&(ue=s.R32UI),j===s.BYTE&&(ue=s.R8I),j===s.SHORT&&(ue=s.R16I),j===s.INT&&(ue=s.R32I)),b===s.RG&&(j===s.FLOAT&&(ue=s.RG32F),j===s.HALF_FLOAT&&(ue=s.RG16F),j===s.UNSIGNED_BYTE&&(ue=s.RG8),j===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),j===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RG8UI),j===s.UNSIGNED_SHORT&&(ue=s.RG16UI),j===s.UNSIGNED_INT&&(ue=s.RG32UI),j===s.BYTE&&(ue=s.RG8I),j===s.SHORT&&(ue=s.RG16I),j===s.INT&&(ue=s.RG32I)),b===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),j===s.UNSIGNED_INT&&(ue=s.RGB32UI),j===s.BYTE&&(ue=s.RGB8I),j===s.SHORT&&(ue=s.RGB16I),j===s.INT&&(ue=s.RGB32I)),b===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),j===s.UNSIGNED_INT&&(ue=s.RGBA32UI),j===s.BYTE&&(ue=s.RGBA8I),j===s.SHORT&&(ue=s.RGBA16I),j===s.INT&&(ue=s.RGBA32I)),b===s.RGB&&(j===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),j===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),b===s.RGBA){const he=Ae?Zc:Et.getTransfer(fe);j===s.FLOAT&&(ue=s.RGBA32F),j===s.HALF_FLOAT&&(ue=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ue=he===Ht?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),j===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(L,b){let j;return L?b===null||b===Yi||b===Jo?j=s.DEPTH24_STENCIL8:b===Vi?j=s.DEPTH32F_STENCIL8:b===jo&&(j=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Jo?j=s.DEPTH_COMPONENT24:b===Vi?j=s.DEPTH_COMPONENT32F:b===jo&&(j=s.DEPTH_COMPONENT16),j}function D(L,b){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function z(L){const b=L.target;b.removeEventListener("dispose",z),U(b),b.isVideoTexture&&y.delete(b),b.isHTMLTexture&&x.delete(b)}function E(L){const b=L.target;b.removeEventListener("dispose",E),G(b)}function U(L){const b=r.get(L);if(b.__webglInit===void 0)return;const j=L.source,re=M.get(j);if(re){const fe=re[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&X(L),Object.keys(re).length===0&&M.delete(j)}r.remove(L)}function X(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const j=L.source,re=M.get(j);delete re[b.__cacheKey],h.memory.textures--}function G(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let fe=0;fe<b.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)s.deleteFramebuffer(b.__webglFramebuffer[re]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=L.textures;for(let re=0,fe=j.length;re<fe;re++){const Ae=r.get(j[re]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),h.memory.textures--),r.remove(j[re])}r.remove(L)}let W=0;function ce(){W=0}function de(){return W}function Q(L){W=L}function B(){const L=W;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),W+=1,L}function F(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function J(L,b){const j=r.get(L);if(L.isVideoTexture&&Y(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const re=L.image;if(re===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(j,L,b);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+b)}function me(L,b){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Fe(j,L,b);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+b)}function Ee(L,b){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Fe(j,L,b);return}i.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+b)}function N(L,b){const j=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){it(j,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+b)}const Z={[zr]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},Me={[Nn]:s.NEAREST,[SS]:s.NEAREST_MIPMAP_NEAREST,[gc]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[hh]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Te={[ES]:s.NEVER,[wS]:s.ALWAYS,[TS]:s.LESS,[Yd]:s.LEQUAL,[AS]:s.EQUAL,[Zd]:s.GEQUAL,[RS]:s.GREATER,[CS]:s.NOTEQUAL};function Oe(L,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===hh||b.magFilter===gc||b.magFilter===Br||b.minFilter===Bn||b.minFilter===hh||b.minFilter===gc||b.minFilter===Br)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Z[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Me[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==gc&&b.minFilter!==Br||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ae(L,b){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",z));const re=b.source;let fe=M.get(re);fe===void 0&&(fe={},M.set(re,fe));const Ae=F(b);if(Ae!==L.__cacheKey){fe[Ae]===void 0&&(fe[Ae]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,j=!0),fe[Ae].usedTimes++;const De=fe[L.__cacheKey];De!==void 0&&(fe[L.__cacheKey].usedTimes--,De.usedTimes===0&&X(b)),L.__cacheKey=Ae,L.__webglTexture=fe[Ae].texture}return j}function ye(L,b,j){return Math.floor(Math.floor(L/j)/b)}function Se(L,b,j,re){const Ae=L.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,j,re,b.data);else{Ae.sort((He,Pe)=>He.start-Pe.start);let De=0;for(let He=1;He<Ae.length;He++){const Pe=Ae[De],Le=Ae[He],Je=Pe.start+Pe.count,$e=ye(Le.start,b.width,4),ot=ye(Pe.start,b.width,4);Le.start<=Je+1&&$e===ot&&ye(Le.start+Le.count-1,b.width,4)===$e?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++De,Ae[De]=Le)}Ae.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),he=i.getParameter(s.UNPACK_SKIP_PIXELS),Ce=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let He=0,Pe=Ae.length;He<Pe;He++){const Le=Ae[He],Je=Math.floor(Le.start/4),$e=Math.ceil(Le.count/4),ot=Je%b.width,k=Math.floor(Je/b.width),Re=$e,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ot,k,Re,ge,j,re,b.data)}L.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,he),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function Fe(L,b,j){let re=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=s.TEXTURE_3D);const fe=ae(L,b),Ae=b.source;i.bindTexture(re,L.__webglTexture,s.TEXTURE0+j);const De=r.get(Ae);if(Ae.version!==De.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=Et.getPrimaries(Et.workingColorSpace),we=b.colorSpace===sr?null:Et.getPrimaries(b.colorSpace),Be=b.colorSpace===sr||ge===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let he=S(b.image,!1,l.maxTextureSize);he=Gt(b,he);const Ce=c.convert(b.format,b.colorSpace),He=c.convert(b.type);let Pe=w(b.internalFormat,Ce,He,b.normalized,b.colorSpace,b.isVideoTexture);Oe(re,b);let Le;const Je=b.mipmaps,$e=b.isVideoTexture!==!0,ot=De.__version===void 0||fe===!0,k=Ae.dataReady,Re=D(b,he);if(b.isDepthTexture)Pe=P(b.format===Fr,b.type),ot&&($e?i.texStorage2D(s.TEXTURE_2D,1,Pe,he.width,he.height):i.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,Ce,He,null));else if(b.isDataTexture)if(Je.length>0){$e&&ot&&i.texStorage2D(s.TEXTURE_2D,Re,Pe,Je[0].width,Je[0].height);for(let ge=0,we=Je.length;ge<we;ge++)Le=Je[ge],$e?k&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ce,He,Le.data):i.texImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Ce,He,Le.data);b.generateMipmaps=!1}else $e?(ot&&i.texStorage2D(s.TEXTURE_2D,Re,Pe,he.width,he.height),k&&Se(b,he,Ce,He)):i.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,Ce,He,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,Je[0].width,Je[0].height,he.depth);for(let ge=0,we=Je.length;ge<we;ge++)if(Le=Je[ge],b.format!==Li)if(Ce!==null)if($e){if(k)if(b.layerUpdates.size>0){const Be=Uv(Le.width,Le.height,b.format,b.type);for(const be of b.layerUpdates){const Ye=Le.data.subarray(be*Be/Le.data.BYTES_PER_ELEMENT,(be+1)*Be/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,be,Le.width,Le.height,1,Ce,Ye)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,he.depth,Ce,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,he.depth,0,Le.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,he.depth,Ce,He,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,he.depth,0,Ce,He,Le.data)}else{$e&&ot&&i.texStorage2D(s.TEXTURE_2D,Re,Pe,Je[0].width,Je[0].height);for(let ge=0,we=Je.length;ge<we;ge++)Le=Je[ge],b.format!==Li?Ce!==null?$e?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ce,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ce,He,Le.data):i.texImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Ce,He,Le.data)}else if(b.isDataArrayTexture)if($e){if(ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,he.width,he.height,he.depth),k)if(b.layerUpdates.size>0){const ge=Uv(he.width,he.height,b.format,b.type);for(const we of b.layerUpdates){const Be=he.data.subarray(we*ge/he.data.BYTES_PER_ELEMENT,(we+1)*ge/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Ce,He,Be)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,He,he.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,Ce,He,he.data);else if(b.isData3DTexture)$e?(ot&&i.texStorage3D(s.TEXTURE_3D,Re,Pe,he.width,he.height,he.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,He,he.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,Ce,He,he.data);else if(b.isFramebufferTexture){if(ot)if($e)i.texStorage2D(s.TEXTURE_2D,Re,Pe,he.width,he.height);else{let ge=he.width,we=he.height;for(let Be=0;Be<Re;Be++)i.texImage2D(s.TEXTURE_2D,Be,Pe,ge,we,0,Ce,He,null),ge>>=1,we>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),he.parentNode!==ge){ge.appendChild(he),x.add(b),ge.onpaint=we=>{const Be=we.changedElements;for(const be of x)Be.includes(be.image)&&(be.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const Be=s.RGBA,be=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,be,Ye,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if($e&&ot){const ge=wt(Je[0]);i.texStorage2D(s.TEXTURE_2D,Re,Pe,ge.width,ge.height)}for(let ge=0,we=Je.length;ge<we;ge++)Le=Je[ge],$e?k&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ce,He,Le):i.texImage2D(s.TEXTURE_2D,ge,Pe,Ce,He,Le);b.generateMipmaps=!1}else if($e){if(ot){const ge=wt(he);i.texStorage2D(s.TEXTURE_2D,Re,Pe,ge.width,ge.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,He,he)}else i.texImage2D(s.TEXTURE_2D,0,Pe,Ce,He,he);_(b)&&O(re),De.__version=Ae.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function it(L,b,j){if(b.image.length!==6)return;const re=ae(L,b),fe=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const Ae=r.get(fe);if(fe.version!==Ae.__version||re===!0){i.activeTexture(s.TEXTURE0+j);const De=Et.getPrimaries(Et.workingColorSpace),ue=b.colorSpace===sr?null:Et.getPrimaries(b.colorSpace),he=b.colorSpace===sr||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!Ce&&!He?Pe[be]=S(b.image[be],!0,l.maxCubemapSize):Pe[be]=He?b.image[be].image:b.image[be],Pe[be]=Gt(b,Pe[be]);const Le=Pe[0],Je=c.convert(b.format,b.colorSpace),$e=c.convert(b.type),ot=w(b.internalFormat,Je,$e,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Re=Ae.__version===void 0||re===!0,ge=fe.dataReady;let we=D(b,Le);Oe(s.TEXTURE_CUBE_MAP,b);let Be;if(Ce){k&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,ot,Le.width,Le.height);for(let be=0;be<6;be++){Be=Pe[be].mipmaps;for(let Ye=0;Ye<Be.length;Ye++){const ke=Be[Ye];b.format!==Li?Je!==null?k?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,ke.width,ke.height,Je,ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,ot,ke.width,ke.height,0,ke.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,ke.width,ke.height,Je,$e,ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,ot,ke.width,ke.height,0,Je,$e,ke.data)}}}else{if(Be=b.mipmaps,k&&Re){Be.length>0&&we++;const be=wt(Pe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,ot,be.width,be.height)}for(let be=0;be<6;be++)if(He){k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,Je,$e,Pe[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,Pe[be].width,Pe[be].height,0,Je,$e,Pe[be].data);for(let Ye=0;Ye<Be.length;Ye++){const $t=Be[Ye].image[be].image;k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,$t.width,$t.height,Je,$e,$t.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,ot,$t.width,$t.height,0,Je,$e,$t.data)}}else{k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,$e,Pe[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ot,Je,$e,Pe[be]);for(let Ye=0;Ye<Be.length;Ye++){const ke=Be[Ye];k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,Je,$e,ke.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,ot,Je,$e,ke.image[be])}}}_(b)&&O(s.TEXTURE_CUBE_MAP),Ae.__version=fe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Qe(L,b,j,re,fe,Ae){const De=c.convert(j.format,j.colorSpace),ue=c.convert(j.type),he=w(j.internalFormat,De,ue,j.normalized,j.colorSpace),Ce=r.get(b),He=r.get(j);if(He.__renderTarget=b,!Ce.__hasExternalTextures){const Pe=Math.max(1,b.width>>Ae),Le=Math.max(1,b.height>>Ae);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Ae,he,Pe,Le,b.depth,0,De,ue,null):i.texImage2D(fe,Ae,he,Pe,Le,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),sn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,He.__webglTexture,0,Ut(b)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,He.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(L,b,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const re=b.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Ae=P(b.stencilBuffer,fe),De=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;sn(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(b),Ae,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(b),Ae,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,L)}else{const re=b.textures;for(let fe=0;fe<re.length;fe++){const Ae=re[fe],De=c.convert(Ae.format,Ae.colorSpace),ue=c.convert(Ae.type),he=w(Ae.internalFormat,De,ue,Ae.normalized,Ae.colorSpace);sn(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(b),he,b.width,b.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(b),he,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,he,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(L,b,j){const re=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(b.depthTexture);if(fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),He=c.convert(b.depthTexture.type);let Pe;b.depthTexture.format===Ta?Pe=s.DEPTH_COMPONENT24:b.depthTexture.format===Fr&&(Pe=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,b.width,b.height,0,Ce,He,null)}}else J(b.depthTexture,0);const Ae=fe.__webglTexture,De=Ut(b),ue=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,he=b.depthTexture.format===Fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)sn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,he,ue,Ae,0);else if(b.depthTexture.format===Fr)sn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,he,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(L){const b=r.get(L),j=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=re}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let re=0;re<6;re++)Ke(b.__webglFramebuffer[re],L,re);else{const re=L.texture.mipmaps;re&&re.length>0?Ke(b.__webglFramebuffer[0],L,0):Ke(b.__webglFramebuffer,L,0)}else if(j){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=s.createRenderbuffer(),Ue(b.__webglDepthbuffer[re],L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ae)}}else{const re=L.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ue(b.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function st(L,b,j){const re=r.get(L);b!==void 0&&Qe(re.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&at(L)}function ut(L){const b=L.texture,j=r.get(L),re=r.get(b);L.addEventListener("dispose",E);const fe=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=b.version,h.memory.textures++),Ae){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let he=0;he<b.mipmaps.length;he++)j.__webglFramebuffer[ue][he]=s.createFramebuffer()}else j.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)j.__webglFramebuffer[ue]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,he=fe.length;ue<he;ue++){const Ce=r.get(fe[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&sn(L)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const he=fe[ue];j.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ue]);const Ce=c.convert(he.format,he.colorSpace),He=c.convert(he.type),Pe=w(he.internalFormat,Ce,He,he.normalized,he.colorSpace,L.isXRRenderTarget===!0),Le=Ut(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,j.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(j.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)Qe(j.__webglFramebuffer[ue][he],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else Qe(j.__webglFramebuffer[ue],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(b)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,he=fe.length;ue<he;ue++){const Ce=fe[ue],He=r.get(Ce);let Pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,He.__webglTexture),Oe(Pe,Ce),Qe(j.__webglFramebuffer,L,Ce,s.COLOR_ATTACHMENT0+ue,Pe,0),_(Ce)&&O(Pe)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),Oe(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let he=0;he<b.mipmaps.length;he++)Qe(j.__webglFramebuffer[he],L,b,s.COLOR_ATTACHMENT0,ue,he);else Qe(j.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,ue,0);_(b)&&O(ue),i.unbindTexture()}L.depthBuffer&&at(L)}function Zt(L){const b=L.textures;for(let j=0,re=b.length;j<re;j++){const fe=b[j];if(_(fe)){const Ae=I(L),De=r.get(fe).__webglTexture;i.bindTexture(Ae,De),O(Ae),i.unbindTexture()}}}const Wt=[],Nt=[];function Jt(L){if(L.samples>0){if(sn(L)===!1){const b=L.textures,j=L.width,re=L.height;let fe=s.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(L),ue=b.length>1;if(ue)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const he=L.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const He=r.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,j,re,0,0,j,re,fe,s.NEAREST),m===!0&&(Wt.length=0,Nt.length=0,Wt.push(s.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Wt.push(Ae),Nt.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const He=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,He,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ut(L){return Math.min(l.maxSamples,L.samples)}function sn(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(L){const b=h.render.frame;y.get(L)!==b&&(y.set(L,b),L.update())}function Gt(L,b){const j=L.colorSpace,re=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Yc&&j!==sr&&(Et.getTransfer(j)===Ht?(re!==Li||fe!==hi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",j)),b}function wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=ce,this.getTextureUnits=de,this.setTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=me,this.setTexture3D=Ee,this.setTextureCube=N,this.rebindTextures=st,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function oA(s,e){function i(r,l=sr){let c;const h=Et.getTransfer(l);if(r===hi)return s.UNSIGNED_BYTE;if(r===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===p_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===m_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===h_)return s.BYTE;if(r===d_)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===Gd)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===g_)return s.ALPHA;if(r===v_)return s.RGB;if(r===Li)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Fr)return s.DEPTH_STENCIL;if(r===__)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===kr)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===qd)return s.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===kc)if(h===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===id||r===ad||r===rd||r===sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od||r===ld||r===cd||r===ud||r===fd||r===Wc||r===hd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===od||r===ld)return h===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ud)return c.COMPRESSED_R11_EAC;if(r===fd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Wc)return c.COMPRESSED_RG11_EAC;if(r===hd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===bd||r===Ed||r===Td||r===Ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===dd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===md)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_d)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Md)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bd)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rd||r===Cd||r===wd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rd)return h===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===Ud||r===qc||r===Ld)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Dd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const lA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cA=`
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

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new A_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Zi({vertexShader:lA,fragmentShader:cA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jt(new jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fA extends Xr{constructor(e,i){super();const r=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,y=null,x=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new uA,_={},O=i.getContextAttributes();let I=null,w=null;const P=[],D=[],z=new mt;let E=null;const U=new fi;U.viewport=new an;const X=new fi;X.viewport=new an;const G=[U,X],W=new yM;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ye=P[ae];return ye===void 0&&(ye=new yh,P[ae]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ae){let ye=P[ae];return ye===void 0&&(ye=new yh,P[ae]=ye),ye.getGripSpace()},this.getHand=function(ae){let ye=P[ae];return ye===void 0&&(ye=new yh,P[ae]=ye),ye.getHandSpace()};function Q(ae){const ye=D.indexOf(ae.inputSource);if(ye===-1)return;const Se=P[ye];Se!==void 0&&(Se.update(ae.inputSource,ae.frame,d||h),Se.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",F);for(let ae=0;ae<P.length;ae++){const ye=D[ae];ye!==null&&(D[ae]=null,P[ae].disconnect(ye))}ce=null,de=null,S.reset();for(const ae in _)delete _[ae];e.setRenderTarget(I),M=null,g=null,x=null,l=null,w=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){p=ae,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",B),l.addEventListener("inputsourceschange",F),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,it=null;O.depth&&(it=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=O.stencil?Fr:Ta,Fe=O.stencil?Jo:Yi);const Qe={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Wi(g.textureWidth,g.textureHeight,{format:Li,type:hi,depthTexture:new ks(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function F(ae){for(let ye=0;ye<ae.removed.length;ye++){const Se=ae.removed[ye],Fe=D.indexOf(Se);Fe>=0&&(D[Fe]=null,P[Fe].disconnect(Se))}for(let ye=0;ye<ae.added.length;ye++){const Se=ae.added[ye];let Fe=D.indexOf(Se);if(Fe===-1){for(let Qe=0;Qe<P.length;Qe++)if(Qe>=D.length){D.push(Se),Fe=Qe;break}else if(D[Qe]===null){D[Qe]=Se,Fe=Qe;break}if(Fe===-1)break}const it=P[Fe];it&&it.connect(Se)}}const J=new $,me=new $;function Ee(ae,ye,Se){J.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Se.matrixWorld);const Fe=J.distanceTo(me),it=ye.projectionMatrix.elements,Qe=Se.projectionMatrix.elements,Ue=it[14]/(it[10]-1),Ke=it[14]/(it[10]+1),at=(it[9]+1)/it[5],st=(it[9]-1)/it[5],ut=(it[8]-1)/it[0],Zt=(Qe[8]+1)/Qe[0],Wt=Ue*ut,Nt=Ue*Zt,Jt=Fe/(-ut+Zt),Ut=Jt*-ut;if(ye.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ut),ae.translateZ(Jt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),it[10]===-1)ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const sn=Ue+Jt,Y=Ke+Jt,Gt=Wt-Ut,wt=Nt+(Fe-Ut),L=at*Ke/Y*sn,b=st*Ke/Y*sn;ae.projectionMatrix.makePerspective(Gt,wt,L,b,sn,Y),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function N(ae,ye){ye===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ye.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ye=ae.near,Se=ae.far;S.texture!==null&&(S.depthNear>0&&(ye=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),W.near=X.near=U.near=ye,W.far=X.far=U.far=Se,(ce!==W.near||de!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),ce=W.near,de=W.far),W.layers.mask=ae.layers.mask|6,U.layers.mask=W.layers.mask&-5,X.layers.mask=W.layers.mask&-3;const Fe=ae.parent,it=W.cameras;N(W,Fe);for(let Qe=0;Qe<it.length;Qe++)N(it[Qe],Fe);it.length===2?Ee(W,U,X):W.projectionMatrix.copy(U.projectionMatrix),Z(ae,W,Fe)};function Z(ae,ye,Se){Se===null?ae.matrix.copy(ye.matrixWorld):(ae.matrix.copy(Se.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ye.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Od*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ae){m=ae,g!==null&&(g.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(W)},this.getCameraTexture=function(ae){return _[ae]};let Me=null;function Te(ae,ye){if(y=ye.getViewerPose(d||h),T=ye,y!==null){const Se=y.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Fe=!1;Se.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let Ke=0;Ke<Se.length;Ke++){const at=Se[Ke];let st=null;if(M!==null)st=M.getViewport(at);else{const Zt=x.getViewSubImage(g,at);st=Zt.viewport,Ke===0&&(e.setRenderTargetTextures(w,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(w))}let ut=G[Ke];ut===void 0&&(ut=new fi,ut.layers.enable(Ke),ut.viewport=new an,G[Ke]=ut),ut.matrix.fromArray(at.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(at.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(st.x,st.y,st.width,st.height),Ke===0&&(W.matrix.copy(ut.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(ut)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const Ke=x.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&S.init(Ke,l.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let Ke=0;Ke<Se.length;Ke++){const at=Se[Ke].camera;if(at){let st=_[at];st||(st=new A_,_[at]=st);const ut=x.getCameraImage(at);st.sourceTexture=ut}}}}for(let Se=0;Se<P.length;Se++){const Fe=D[Se],it=P[Se];Fe!==null&&it!==void 0&&it.update(Fe,ye,d||h)}Me&&Me(ae,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Oe=new D_;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const hA=new rn,z_=new ct;z_.set(-1,0,0,0,1,0,0,0,1);function dA(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,R_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,I,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),y(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),g(S,_),_.isMeshPhysicalMaterial&&M(S,_,w)):_.isMeshMatcapMaterial?(c(S,_),T(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),C(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&p(S,_)):_.isPointsMaterial?m(S,_,O,I):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=e.get(_),I=O.envMap,w=O.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(hA.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(z_),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function p(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,O,I){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=I*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function y(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const O=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function pA(s,e,i,r){let l={},c={},h=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const D=P.program;r.uniformBlockBinding(w,D)}function d(w,P){let D=l[w.id];D===void 0&&(S(w),D=y(w),l[w.id]=D,w.addEventListener("dispose",O));const z=P.program;r.updateUBOMapping(w,z);const E=e.render.frame;c[w.id]!==E&&(g(w),c[w.id]=E)}function y(w){const P=x();w.__bindingPointIndex=P;const D=s.createBuffer(),z=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,z,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function x(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=l[w.id],D=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,U=D.length;E<U;E++){const X=D[E];if(Array.isArray(X))for(let G=0,W=X.length;G<W;G++)M(X[G],E,G,z);else M(X,E,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,P,D,z){if(C(w,P,D,z)===!0){const E=w.__offset,U=w.value;if(Array.isArray(U)){let X=0;for(let G=0;G<U.length;G++){const W=U[G],ce=_(W);T(W,w.__data,X),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,w.__data)}}function T(w,P,D){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,D)}function C(w,P,D,z){const E=w.value,U=P+"_"+D;if(z[U]===void 0)return typeof E=="number"||typeof E=="boolean"?z[U]=E:ArrayBuffer.isView(E)?z[U]=E.slice():z[U]=E.clone(),!0;{const X=z[U];if(typeof E=="number"||typeof E=="boolean"){if(X!==E)return z[U]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(X.equals(E)===!1)return X.copy(E),!0}}return!1}function S(w){const P=w.uniforms;let D=0;const z=16;for(let U=0,X=P.length;U<X;U++){const G=Array.isArray(P[U])?P[U]:[P[U]];for(let W=0,ce=G.length;W<ce;W++){const de=G[W],Q=Array.isArray(de.value)?de.value:[de.value];for(let B=0,F=Q.length;B<F;B++){const J=Q[B],me=_(J),Ee=D%z,N=Ee%me.boundary,Z=Ee+N;D+=N,Z!==0&&z-Z<me.storage&&(D+=z-Z),de.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=D,D+=me.storage}}}const E=D%z;return E>0&&(D+=z-E),w.__size=D,w.__cache={},this}function _(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),P}function O(w){const P=w.target;P.removeEventListener("dispose",O);const D=h.indexOf(P.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function I(){for(const w in l)s.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:I}}const mA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function gA(){return Hi===null&&(Hi=new eM(mA,16,16,kr,Ea),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=ya,Hi.wrapT=ya,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class vA{constructor(e={}){const{canvas:i=US(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=hi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const C=M,S=new Set([qd,Wd,Xd]),_=new Set([hi,Yi,jo,Jo,Vd,kd]),O=new Uint32Array(4),I=new Int32Array(4),w=new $;let P=null,D=null;const z=[],E=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,W=null,ce=null,de=null,Q=null;this._outputColorSpace=Rn;let B=0,F=0,J=null,me=-1,Ee=null;const N=new an,Z=new an;let Me=null;const Te=new Mt(0);let Oe=0,ae=i.width,ye=i.height,Se=1,Fe=null,it=null;const Qe=new an(0,0,ae,ye),Ue=new an(0,0,ae,ye);let Ke=!1;const at=new Jd;let st=!1,ut=!1;const Zt=new rn,Wt=new $,Nt=new an,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function sn(){return J===null?Se:1}let Y=r;function Gt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Jn,!1),Y===null){const q="webgl2";if(Y=Gt(q,A),Y===null)throw Gt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let wt,L,b,j,re,fe,Ae,De,ue,he,Ce,He,Pe,Le,Je,$e,ot,k,Re,ge,we,Be,be;function Ye(){wt=new gT(Y),wt.init(),we=new oA(Y,wt),L=new lT(Y,wt,e,we),b=new rA(Y,wt),L.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),ce=Y.createFramebuffer(),de=Y.createFramebuffer(),Q=Y.createFramebuffer(),j=new xT(Y),re=new W1,fe=new sA(Y,wt,b,re,L,we,j),Ae=new mT(X),De=new bM(Y),Be=new sT(Y,De),ue=new vT(Y,De,j,Be),he=new ST(Y,ue,De,Be,j),k=new yT(Y,L,fe),Je=new cT(re),Ce=new X1(X,Ae,wt,L,Be,Je),He=new dA(X,re),Pe=new Y1,Le=new $1(wt),ot=new rT(X,Ae,b,he,T,m),$e=new aA(X,he,L),be=new pA(Y,j,L,b),Re=new oT(Y,wt,j),ge=new _T(Y,wt,j),j.programs=Ce.programs,X.capabilities=L,X.extensions=wt,X.properties=re,X.renderLists=Pe,X.shadowMap=$e,X.state=b,X.info=j}Ye(),C!==hi&&(U=new bT(C,i.width,i.height,p,l,c));const ke=new fA(X,Y);this.xr=ke,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(A){A!==void 0&&(Se=A,this.setSize(ae,ye,!1))},this.getSize=function(A){return A.set(ae,ye)},this.setSize=function(A,q,se=!0){if(ke.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ye=q,i.width=Math.floor(A*Se),i.height=Math.floor(q*Se),se===!0&&(i.style.width=A+"px",i.style.height=q+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ae*Se,ye*Se).floor()},this.setDrawingBufferSize=function(A,q,se){ae=A,ye=q,Se=se,i.width=Math.floor(A*se),i.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===hi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,q,se,ne){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,q,se,ne),b.viewport(N.copy(Qe).multiplyScalar(Se).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,q,se,ne){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,q,se,ne),b.scissor(Z.copy(Ue).multiplyScalar(Se).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){b.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ne=0;if(A){let ie=!1;if(J!==null){const Ie=J.texture.format;ie=S.has(Ie)}if(ie){const Ie=J.texture.type,Ve=_.has(Ie),Ne=ot.getClearColor(),We=ot.getClearAlpha(),Xe=Ne.r,et=Ne.g,ft=Ne.b;Ve?(O[0]=Xe,O[1]=et,O[2]=ft,O[3]=We,Y.clearBufferuiv(Y.COLOR,0,O)):(I[0]=Xe,I[1]=et,I[2]=ft,I[3]=We,Y.clearBufferiv(Y.COLOR,0,I))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Jn,!1),ot.dispose(),Pe.dispose(),Le.dispose(),re.dispose(),Ae.dispose(),he.dispose(),Be.dispose(),be.dispose(),Ce.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",hn),ke.removeEventListener("sessionend",Cn),kn.stop()};function $t(A){A.preventDefault(),av("WebGLRenderer: Context Lost."),G=!0}function Ot(){av("WebGLRenderer: Context Restored."),G=!1;const A=j.autoReset,q=$e.enabled,se=$e.autoUpdate,ne=$e.needsUpdate,ie=$e.type;Ye(),j.autoReset=A,$e.enabled=q,$e.autoUpdate=se,$e.needsUpdate=ne,$e.type=ie}function Jn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $n(A){const q=A.target;q.removeEventListener("dispose",$n),Zs(q)}function Zs(A){Ks(A),re.remove(A)}function Ks(A){const q=re.get(A).programs;q!==void 0&&(q.forEach(function(se){Ce.releaseProgram(se)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ne,ie,Ie){q===null&&(q=Jt);const Ve=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ne=Ca(A,q,se,ne,ie);b.setMaterial(ne,Ve);let We=se.index,Xe=1;if(ne.wireframe===!0){if(We=ue.getWireframeAttribute(se),We===void 0)return;Xe=2}const et=se.drawRange,ft=se.attributes.position;let je=et.start*Xe,At=(et.start+et.count)*Xe;Ie!==null&&(je=Math.max(je,Ie.start*Xe),At=Math.min(At,(Ie.start+Ie.count)*Xe)),We!==null?(je=Math.max(je,0),At=Math.min(At,We.count)):ft!=null&&(je=Math.max(je,0),At=Math.min(At,ft.count));const en=At-je;if(en<0||en===1/0)return;Be.setup(ie,ne,Ne,se,We);let qt,Pt=Re;if(We!==null&&(qt=De.get(We),Pt=ge,Pt.setIndex(qt)),ie.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*sn()),Pt.setMode(Y.LINES)):Pt.setMode(Y.TRIANGLES);else if(ie.isLine){let It=ne.linewidth;It===void 0&&(It=1),b.setLineWidth(It*sn()),ie.isLineSegments?Pt.setMode(Y.LINES):ie.isLineLoop?Pt.setMode(Y.LINE_LOOP):Pt.setMode(Y.LINE_STRIP)}else ie.isPoints?Pt.setMode(Y.POINTS):ie.isSprite&&Pt.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const It=ie._multiDrawStarts,Ge=ie._multiDrawCounts,On=ie._multiDrawCount,gt=We?De.get(We).bytesPerElement:1,xn=re.get(ne).currentProgram.getUniforms();for(let ei=0;ei<On;ei++)xn.setValue(Y,"_gl_DrawID",ei),Pt.render(It[ei]/gt,Ge[ei])}else if(ie.isInstancedMesh)Pt.renderInstances(je,en,ie.count);else if(se.isInstancedBufferGeometry){const It=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,It);Pt.renderInstances(je,en,Ge)}else Pt.render(je,en)};function Qs(A,q,se){A.transparent===!0&&A.side===An&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Ra(A,q,se),A.side=ba,A.needsUpdate=!0,Ra(A,q,se),A.side=An):Ra(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),D=Le.get(se),D.init(q),E.push(D),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),A!==se&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),D.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Ne=Ie[Ve];Qs(Ne,se,ie),ne.add(Ne)}else Qs(Ie,se,ie),ne.add(Ie)}),D=E.pop(),ne},this.compileAsync=function(A,q,se=null){const ne=this.compile(A,q,se);return new Promise(ie=>{function Ie(){if(ne.forEach(function(Ve){re.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){ie(A);return}setTimeout(Ie,10)}wt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Wr=null;function Ni(A){Wr&&Wr(A)}function hn(){kn.stop()}function Cn(){kn.start()}const kn=new D_;kn.setAnimationLoop(Ni),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){Wr=A,ke.setAnimationLoop(A),A===null?kn.stop():kn.start()},ke.addEventListener("sessionstart",hn),ke.addEventListener("sessionend",Cn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(A,q);const se=ke.enabled===!0&&ke.isPresenting===!0,ne=U!==null&&(J===null||se)&&U.begin(X,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(q),q=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,q,J),D=Le.get(A,E.length),D.init(q),D.state.textureUnits=fe.getTextureUnits(),E.push(D),Zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),at.setFromProjectionMatrix(Zt,ki,q.reversedDepth),ut=this.localClippingEnabled,st=Je.init(this.clippingPlanes,ut),P=Pe.get(A,z.length),P.init(),z.push(P),ke.enabled===!0&&ke.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&ur(Ve,q,-1/0,X.sortObjects)}ur(A,q,0,X.sortObjects),P.finish(),X.sortObjects===!0&&P.sort(Fe,it,q.reversedDepth),Ut=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ut&&ot.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Je.beginShadows();const ie=D.state.shadowsArray;if($e.render(ie,A,q),st===!0&&Je.endShadows(),(ne&&U.hasRenderPass())===!1){const Ve=P.opaque,Ne=P.transmissive;if(D.setupLights(),q.isArrayCamera){const We=q.cameras;if(Ne.length>0)for(let Xe=0,et=We.length;Xe<et;Xe++){const ft=We[Xe];sl(Ve,Ne,A,ft)}Ut&&ot.render(A);for(let Xe=0,et=We.length;Xe<et;Xe++){const ft=We[Xe];rl(P,A,ft,ft.viewport)}}else Ne.length>0&&sl(Ve,Ne,A,q),Ut&&ot.render(A),rl(P,A,q)}J!==null&&F===0&&(fe.updateMultisampleRenderTarget(J),fe.updateRenderTargetMipmap(J)),ne&&U.end(X),A.isScene===!0&&A.onAfterRender(X,A,q),Be.resetDefaultState(),me=-1,Ee=null,E.pop(),E.length>0?(D=E[E.length-1],fe.setTextureUnits(D.state.textureUnits),st===!0&&Je.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?P=z[z.length-1]:P=null,W!==null&&W.renderEnd()};function ur(A,q,se,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){ne&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);const Ve=he.update(A),Ne=A.material;Ne.visible&&P.push(A,Ve,Ne,se,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const Ve=he.update(A),Ne=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Nt.copy(Ve.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(Ne)){const We=Ve.groups;for(let Xe=0,et=We.length;Xe<et;Xe++){const ft=We[Xe],je=Ne[ft.materialIndex];je&&je.visible&&P.push(A,Ve,je,se,Nt.z,ft)}}else Ne.visible&&P.push(A,Ve,Ne,se,Nt.z,null)}}const Ie=A.children;for(let Ve=0,Ne=Ie.length;Ve<Ne;Ve++)ur(Ie[Ve],q,se,ne)}function rl(A,q,se,ne){const{opaque:ie,transmissive:Ie,transparent:Ve}=A;D.setupLightsView(se),st===!0&&Je.setGlobalState(X.clippingPlanes,se),ne&&b.viewport(N.copy(ne)),ie.length>0&&fr(ie,q,se),Ie.length>0&&fr(Ie,q,se),Ve.length>0&&fr(Ve,q,se),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function sl(A,q,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const je=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:je?Ea:hi,minFilter:Br,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ie=D.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||N;Ie.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Ne=X.getRenderTarget(),We=X.getActiveCubeFace(),Xe=X.getActiveMipmapLevel();X.setRenderTarget(Ie),X.getClearColor(Te),Oe=X.getClearAlpha(),Oe<1&&X.setClearColor(16777215,.5),X.clear(),Ut&&ot.render(se);const et=X.toneMapping;X.toneMapping=Xi;const ft=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),st===!0&&Je.setGlobalState(X.clippingPlanes,ne),fr(A,se,ne),fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie),wt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let At=0,en=q.length;At<en;At++){const qt=q[At],{object:Pt,geometry:It,material:Ge,group:On}=qt;if(Ge.side===An&&Pt.layers.test(ne.layers)){const gt=Ge.side;Ge.side=jn,Ge.needsUpdate=!0,Aa(Pt,se,ne,It,Ge,On),Ge.side=gt,Ge.needsUpdate=!0,je=!0}}je===!0&&(fe.updateMultisampleRenderTarget(Ie),fe.updateRenderTargetMipmap(Ie))}X.setRenderTarget(Ne,We,Xe),X.setClearColor(Te,Oe),ft!==void 0&&(ne.viewport=ft),X.toneMapping=et}function fr(A,q,se){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Ie=A.length;ie<Ie;ie++){const Ve=A[ie],{object:Ne,geometry:We,group:Xe}=Ve;let et=Ve.material;et.allowOverride===!0&&ne!==null&&(et=ne),Ne.layers.test(se.layers)&&Aa(Ne,q,se,We,et,Xe)}}function Aa(A,q,se,ne,ie,Ie){A.onBeforeRender(X,q,se,ne,ie,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(X,q,se,ne,A,Ie),ie.transparent===!0&&ie.side===An&&ie.forceSinglePass===!1?(ie.side=jn,ie.needsUpdate=!0,X.renderBufferDirect(se,q,ne,ie,A,Ie),ie.side=ba,ie.needsUpdate=!0,X.renderBufferDirect(se,q,ne,ie,A,Ie),ie.side=An):X.renderBufferDirect(se,q,ne,ie,A,Ie),A.onAfterRender(X,q,se,ne,ie,Ie)}function Ra(A,q,se){q.isScene!==!0&&(q=Jt);const ne=re.get(A),ie=D.state.lights,Ie=D.state.shadowsArray,Ve=ie.state.version,Ne=Ce.getParameters(A,ie.state,Ie,q,se,D.state.lightProbeGridArray),We=Ce.getProgramCacheKey(Ne);let Xe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ae.get(A.envMap||ne.environment,et),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",$n),Xe=new Map,ne.programs=Xe);let ft=Xe.get(We);if(ft!==void 0){if(ne.currentProgram===ft&&ne.lightsStateVersion===Ve)return Qi(A,Ne),ft}else Ne.uniforms=Ce.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,se,Ne),A.onBeforeCompile(Ne,X),ft=Ce.acquireProgram(Ne,We),Xe.set(We,ft),ne.uniforms=Ne.uniforms;const je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Je.uniform),Qi(A,Ne),ne.needsLights=ol(A),ne.lightsStateVersion=Ve,ne.needsLights&&(je.ambientLightColor.value=ie.state.ambient,je.lightProbe.value=ie.state.probe,je.directionalLights.value=ie.state.directional,je.directionalLightShadows.value=ie.state.directionalShadow,je.spotLights.value=ie.state.spot,je.spotLightShadows.value=ie.state.spotShadow,je.rectAreaLights.value=ie.state.rectArea,je.ltc_1.value=ie.state.rectAreaLTC1,je.ltc_2.value=ie.state.rectAreaLTC2,je.pointLights.value=ie.state.point,je.pointLightShadows.value=ie.state.pointShadow,je.hemisphereLights.value=ie.state.hemi,je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,je.spotLightMatrix.value=ie.state.spotLightMatrix,je.spotLightMap.value=ie.state.spotLightMap,je.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=ft,ne.uniformsList=null,ft}function Ki(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Xc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Qi(A,q){const se=re.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function hr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const ie=A[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(w))return ie}return null}function Ca(A,q,se,ne,ie){q.isScene!==!0&&(q=Jt),fe.resetTextureUnits();const Ie=q.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ne=J===null?X.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Et.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Xe=Ae.get(ne.envMap||Ve,We),et=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,en=!!se.morphAttributes.color;let qt=Xi;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(qt=X.toneMapping);const Pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,It=Pt!==void 0?Pt.length:0,Ge=re.get(ne),On=D.state.lights;if(st===!0&&(ut===!0||A!==Ee)){const Lt=A===Ee&&ne.id===me;Je.setState(ne,A,Lt)}let gt=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==On.state.version||Ge.outputColorSpace!==Ne||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==Xe||ne.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Je.numPlanes||Ge.numIntersection!==Je.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==ft||Ge.morphTargets!==je||Ge.morphNormals!==At||Ge.morphColors!==en||Ge.toneMapping!==qt||Ge.morphTargetsCount!==It||!!Ge.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ge.__version=ne.version);let xn=Ge.currentProgram;gt===!0&&(xn=Ra(ne,q,ie),W&&ne.isNodeMaterial&&W.onUpdateProgram(ne,xn,Ge));let ei=!1,bi=!1,ti=!1;const zt=xn.getUniforms(),tn=Ge.uniforms;if(b.useProgram(xn.program)&&(ei=!0,bi=!0,ti=!0),ne.id!==me&&(me=ne.id,bi=!0),Ge.needsLights){const Lt=hr(D.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==Lt&&(Ge.lightProbeGrid=Lt,bi=!0)}if(ei||Ee!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(Y,"projectionMatrix",A.projectionMatrix),zt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Oi=zt.map.cameraPosition;Oi!==void 0&&Oi.setValue(Y,Wt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&zt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&zt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,bi=!0,ti=!0)}if(Ge.needsLights&&(On.state.directionalShadowMap.length>0&&zt.setValue(Y,"directionalShadowMap",On.state.directionalShadowMap,fe),On.state.spotShadowMap.length>0&&zt.setValue(Y,"spotShadowMap",On.state.spotShadowMap,fe),On.state.pointShadowMap.length>0&&zt.setValue(Y,"pointShadowMap",On.state.pointShadowMap,fe)),ie.isSkinnedMesh){zt.setOptional(Y,ie,"bindMatrix"),zt.setOptional(Y,ie,"bindMatrixInverse");const Lt=ie.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),zt.setValue(Y,"boneTexture",Lt.boneTexture,fe))}ie.isBatchedMesh&&(zt.setOptional(Y,ie,"batchingTexture"),zt.setValue(Y,"batchingTexture",ie._matricesTexture,fe),zt.setOptional(Y,ie,"batchingIdTexture"),zt.setValue(Y,"batchingIdTexture",ie._indirectTexture,fe),zt.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&zt.setValue(Y,"batchingColorTexture",ie._colorsTexture,fe));const Ei=se.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&k.update(ie,se,xn),(bi||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,zt.setValue(Y,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=gA()),bi){if(zt.setValue(Y,"toneMappingExposure",X.toneMappingExposure),Ge.needsLights&&dn(tn,ti),Ie&&ne.fog===!0&&He.refreshFogUniforms(tn,Ie),He.refreshMaterialUniforms(tn,ne,Se,ye,D.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Lt=Ge.lightProbeGrid;tn.probesSH.value=Lt.texture,tn.probesMin.value.copy(Lt.boundingBox.min),tn.probesMax.value.copy(Lt.boundingBox.max),tn.probesResolution.value.copy(Lt.resolution)}Xc.upload(Y,Ki(Ge),tn,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xc.upload(Y,Ki(Ge),tn,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&zt.setValue(Y,"center",ie.center),zt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),zt.setValue(Y,"normalMatrix",ie.normalMatrix),zt.setValue(Y,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Lt=ne.uniformsGroups;for(let Oi=0,wa=Lt.length;Oi<wa;Oi++){const dr=Lt[Oi];be.update(dr,xn),be.bind(dr,xn)}}return xn}function dn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function ol(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,q,se){const ne=re.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=q,re.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=re.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,se=0){J=A,B=q,F=se;let ne=null,ie=!1,Ie=!1;if(A){const Ne=re.get(A);if(Ne.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Y.FRAMEBUFFER,Ne.__webglFramebuffer),N.copy(A.viewport),Z.copy(A.scissor),Me=A.scissorTest,b.viewport(N),b.scissor(Z),b.setScissorTest(Me),me=-1;return}else if(Ne.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Ne.__hasExternalTextures)fe.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&re.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ne=Xe[q][se]:ne=Xe[q],ie=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?ne=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ne=Xe[se]:ne=Xe,N.copy(A.viewport),Z.copy(A.scissor),Me=A.scissorTest}else N.copy(Qe).multiplyScalar(Se).floor(),Z.copy(Ue).multiplyScalar(Se).floor(),Me=Ke;if(se!==0&&(ne=ce),b.bindFramebuffer(Y.FRAMEBUFFER,ne)&&b.drawBuffers(A,ne),b.viewport(N),b.scissor(Z),b.setScissorTest(Me),ie){const Ne=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,se)}else if(Ie){const Ne=q;for(let We=0;We<A.textures.length;We++){const Xe=re.get(A.textures[We]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+We,Xe.__webglTexture,se,Ne)}}else if(A!==null&&se!==0){const Ne=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ne.__webglTexture,se)}me=-1},this.readRenderTargetPixels=function(A,q,se,ne,ie,Ie,Ve,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){b.bindFramebuffer(Y.FRAMEBUFFER,We);try{const Xe=A.textures[Ne],et=Xe.format,ft=Xe.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!L.textureFormatReadable(et)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ft)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-ie&&Y.readPixels(q,se,ne,ie,we.convert(et),we.convert(ft),Ie)}finally{const Xe=J!==null?re.get(J).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ne,ie,Ie,Ve,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(q>=0&&q<=A.width-ne&&se>=0&&se<=A.height-ie){b.bindFramebuffer(Y.FRAMEBUFFER,We);const Xe=A.textures[Ne],et=Xe.format,ft=Xe.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!L.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(q,se,ne,ie,we.convert(et),we.convert(ft),0);const At=J!==null?re.get(J).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,At);const en=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await LS(Y,en,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.deleteBuffer(je),Y.deleteSync(en),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(A.image.width*ne),Ie=Math.floor(A.image.height*ne),Ve=q!==null?q.x:0,Ne=q!==null?q.y:0;fe.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,Ve,Ne,ie,Ie),b.unbindTexture()},this.copyTextureToTexture=function(A,q,se=null,ne=null,ie=0,Ie=0){let Ve,Ne,We,Xe,et,ft,je,At,en;const qt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)Ve=se.max.x-se.min.x,Ne=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,et=se.min.y,ft=se.isBox3?se.min.z:0;else{const tn=Math.pow(2,-ie);Ve=Math.floor(qt.width*tn),Ne=Math.floor(qt.height*tn),A.isDataArrayTexture?We=qt.depth:A.isData3DTexture?We=Math.floor(qt.depth*tn):We=1,Xe=0,et=0,ft=0}ne!==null?(je=ne.x,At=ne.y,en=ne.z):(je=0,At=0,en=0);const Pt=we.convert(q.format),It=we.convert(q.type);let Ge;q.isData3DTexture?(fe.setTexture3D(q,0),Ge=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(fe.setTexture2DArray(q,0),Ge=Y.TEXTURE_2D_ARRAY):(fe.setTexture2D(q,0),Ge=Y.TEXTURE_2D),b.activeTexture(Y.TEXTURE0),b.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const On=b.getParameter(Y.UNPACK_ROW_LENGTH),gt=b.getParameter(Y.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(Y.UNPACK_SKIP_PIXELS),ei=b.getParameter(Y.UNPACK_SKIP_ROWS),bi=b.getParameter(Y.UNPACK_SKIP_IMAGES);b.pixelStorei(Y.UNPACK_ROW_LENGTH,qt.width),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,qt.height),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xe),b.pixelStorei(Y.UNPACK_SKIP_ROWS,et),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,ft);const ti=A.isDataArrayTexture||A.isData3DTexture,zt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const tn=re.get(A),Ei=re.get(q),Lt=re.get(tn.__renderTarget),Oi=re.get(Ei.__renderTarget);b.bindFramebuffer(Y.READ_FRAMEBUFFER,Lt.__webglFramebuffer),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let wa=0;wa<We;wa++)ti&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ie,ft+wa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(q).__webglTexture,Ie,en+wa)),Y.blitFramebuffer(Xe,et,Ve,Ne,je,At,Ve,Ne,Y.DEPTH_BUFFER_BIT,Y.NEAREST);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||re.has(A)){const tn=re.get(A),Ei=re.get(q);b.bindFramebuffer(Y.READ_FRAMEBUFFER,de),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Q);for(let Lt=0;Lt<We;Lt++)ti?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tn.__webglTexture,ie,ft+Lt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,tn.__webglTexture,ie),zt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ei.__webglTexture,Ie,en+Lt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ei.__webglTexture,Ie),ie!==0?Y.blitFramebuffer(Xe,et,Ve,Ne,je,At,Ve,Ne,Y.COLOR_BUFFER_BIT,Y.NEAREST):zt?Y.copyTexSubImage3D(Ge,Ie,je,At,en+Lt,Xe,et,Ve,Ne):Y.copyTexSubImage2D(Ge,Ie,je,At,Xe,et,Ve,Ne);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Ge,Ie,je,At,en,Ve,Ne,We,Pt,It,qt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ge,Ie,je,At,en,Ve,Ne,We,Pt,qt.data):Y.texSubImage3D(Ge,Ie,je,At,en,Ve,Ne,We,Pt,It,qt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,je,At,Ve,Ne,Pt,It,qt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,je,At,qt.width,qt.height,Pt,qt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,je,At,Ve,Ne,Pt,It,qt);b.pixelStorei(Y.UNPACK_ROW_LENGTH,On),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,gt),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(Y.UNPACK_SKIP_ROWS,ei),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,bi),Ie===0&&q.generateMipmaps&&Y.generateMipmap(Ge),b.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,F=0,J=null,b.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const _A=[{id:"all",label:"All Structures"},{id:"fibrosa",label:"Tunica Fibrosa (Outer)"},{id:"vasculosa",label:"Tunica Vasculosa / Uvea"},{id:"nervosa",label:"Tunica Nervosa (Retina)"},{id:"optical",label:"Optical Refractive Media"},{id:"neural",label:"Neural Pathways"}],or=[{id:"cornea",name:"Cornea",latin:"Cornea Transparens",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Anterior 1/6th)",pinPosition:[0,0,2.3],cameraTarget:[0,0,2],color:"#7dd3fc",opticalMetrics:{refractiveIndex:"n = 1.376",dioptricPower:"+43.0 Diopters (~70% total eye refraction)",thickness:"535 µm central, ~650 µm peripheral"},medicalDescription:"The anterior, transparent, highly curved window of the eye. Completely avascular, receiving oxygen directly from ambient air through the tear film and nutrients from the anterior chamber's aqueous humor. Comprises five classical histological layers: non-keratinized stratified squamous epithelium, Bowman's membrane, stroma (90% thickness composed of orthogonally arranged type I/V collagen fibrils), Descemet's membrane, and metabolic monolayer endothelium.",clinicalPathology:"Keratoconus (biomechanical stromal degradation causing conical ectasia), Fuchs' endothelial corneal dystrophy, microbial keratitis, bullous keratopathy.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course (BCSC), Section 8: External Disease and Cornea",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy: The Anatomical Basis of Clinical Practice (42nd Ed.)",title:"Chapter 41: The Visual Apparatus and Orbit",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"},{authority:"National Center for Biotechnology Information (NCBI)",title:"StatPearls: Anatomy, Head and Neck, Eye Cornea",url:"https://www.ncbi.nlm.nih.gov/books/NBK470344/"}],historicalTreatise:{author:"Alhazen (Ibn al-Haytham)",work:"Kitāb al-Manāẓir (Book of Optics, c. 1021)",note:"Refuted classical extramission theory (Pythagoras, Euclid, Galen), demonstrating through geometry and camera obscura experiments that perpendicular rays of light enter through the corneal hemisphere to initiate vision."},literaryAnalysis:{figure:"Seamus Heaney",text:"'Personal Helicon' (Death of a Naturalist, 1966)",quote:"Others had echoes, gave back your own call / With a clean new music in it. And one was mean for water: a shallow / To stare, big-eyed Narcissus, into some spring / Is beneath all adult dignity. I rhyme / To see myself, to set the darkness echoing.",commentary:"The cornea is the surface of the well: an organic lens that is both transparent aperture and reflective barrier. In Heaney's poetic archaeology, gazing into water mirrors the corneal threshold where the observing subject is confronted with their own submerged reflection."}},{id:"sclera",name:"Sclera & Episclera",latin:"Tunica Sclera",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Posterior 5/6ths)",pinPosition:[0,1.8,0],cameraTarget:[0,1.5,0],color:"#f8fafc",opticalMetrics:{refractiveIndex:"Opaque (irregular collagen scatter)",hydration:"68% hydration (vs. 78% in cornea)",thickness:"1.0 mm at posterior pole, 0.3 mm behind rectus insertions"},medicalDescription:"The dense, opaque, fibrous protective envelope of the globe. Consists of dense irregular bundles of collagen fibrils and elastic fibers that resist intraocular pressure (10–21 mmHg) and provide dynamic insertion points for the six extraocular muscles. Pierced posteriorly by the lamina cribrosa, through which retinal ganglion cell axons emerge to form the optic nerve.",clinicalPathology:"Scleritis (frequently associated with systemic autoimmune disorders like rheumatoid arthritis and granulomatosis with polyangiitis), episcleritis, scleral staphyloma, blue sclera (osteogenesis imperfecta).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Sclera and Episclera: Anatomy and Inflammation Management",url:"https://www.aao.org/eyenet/article/scleritis-diagnosis-management"},{authority:"Stanford University School of Medicine",title:"Ocular Pathology & Scleral Biomechanics",url:"https://med.stanford.edu/ophthalmology.html"}],historicalTreatise:{author:"Andreas Vesalius",work:"De Humani Corporis Fabrica (1543, Book VII)",note:"Vesalius systematically dissected the hard scleral tunic ('tunica dura / cornea dura') to dismantle Galen's rete mirabile within human cranial anatomy, demonstrating direct ocular-cerebral continuity."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto XXXII & XXXIII (Cocytus)",quote:"Lo pianto stesso lì pianger non lascia, / e 'l duol che truova in su li occhi rintoppo, / si volge in entro a far crescer l'ambascia; / ché le lagrime prime fanno groppo, / e sì come visiere di cristallo, / rïempion sotto 'l ciglio tutto 'l coppo.",commentary:"At the icy nadir of Dante's Inferno, frozen tears turn the ocular coats into rigid crystal visors. The sclera, as the protective armor of the eye, petrifies: weeping cannot escape, turning inward to intensify existential agony."}},{id:"iris",name:"Iris & Pupil",latin:"Iris / Pupilla",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Anterior Uvea)",pinPosition:[0,0,1.8],cameraTarget:[0,0,1.6],color:"#ca8a04",opticalMetrics:{apertureRange:"2.0 mm (miosis) to 8.0 mm (mydriasis)",focalRatio:"f/2.1 to f/8.3 optical aperture adjustment",aberrationControl:"Restricts peripheral spherical and chromatic aberration"},medicalDescription:"The contractile pigmented diaphragm dividing the anterior and posterior chambers. Regulates retinal illuminance via antagonistic smooth muscle systems: the circumferentially arranged sphincter pupillae (parasympathetic innervation via CN III / ciliary ganglion) and the radially arranged dilator pupillae (sympathetic innervation via superior cervical ganglion). Posterior pigmented epithelium prevents light leakage.",clinicalPathology:"Acute angle-closure glaucoma (pupillary block resulting in aqueous outflow obstruction at the trabecular meshwork), anterior uveitis (iritis with keratic precipitates), Horner's syndrome, Argyll Robertson pupil.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course, Section 2: Fundamentals and Principles of Ophthalmology",url:"https://www.aao.org/education/bcsc"},{authority:"National Institutes of Health (NIH)",title:"National Eye Institute: Pupil Reflex and Uveal Biology",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"Galen of Pergamon",work:"De Usu Partium (On the Usefulness of the Parts of the Body, 2nd Century CE)",note:"Interpreted the pupillary aperture as the conduit for the pneuma optikon (visual spirit) descending from the ventricles of the brain to illuminate the crystalline lens."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' (1987)",quote:"A small light for small people, wanting no / great beam, but testing what they say / with an eye that burns right into your soul / ... Diogenes with his lantern, seeking one just man.",commentary:"The pupil in Heaney becomes Diogenes' lantern: an aperture that tests moral illumination. It does not merely receive light but interrogates the observer with a concentrated, piercing pinpoint."}},{id:"lens",name:"Crystalline Lens & Zonules",latin:"Lens Crystallina",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,1.3],cameraTarget:[0,0,1.2],color:"#e0f2fe",opticalMetrics:{refractiveIndex:"Gradient index: n = 1.386 (cortex) to 1.406 (nucleus)",dioptricPower:"+15.0 to +20.0 Diopters (unaccommodated), up to +30.0 D",accommodation:"Helmholtz mechanism mediated by ciliary muscle contraction"},medicalDescription:"A transparent, biconvex, flexible optical element suspended between the iris and vitreous humor by the delicate zonular fibers of Zinn (ciliary zonule). Highly specialized, mature lens fibers lose their nuclei and organelles to maintain optical clarity, packing high concentrations of crystallin proteins (alpha, beta, gamma). Modulates dynamic focus via Helmholtzian accommodation.",clinicalPathology:"Cataracts (nuclear sclerotic, cortical, or posterior subcapsular opacification due to crystallin protein aggregation), presbyopia (loss of zonular elasticity and lens hardness with age), ectopia lentis (zonular dehiscence in Marfan syndrome).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Lens and Cataract: BCSC Section 11",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI Bookshelf: Webvision",title:"Physiological Optics of the Human Lens and Accommodation",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"}],historicalTreatise:{author:"Galen & Ibn al-Jazzar",work:"Medical Canon on the 'Seat of the Soul' (Classical Antiquity)",note:"From Galen through Islamic medieval medicine, the crystalline lens was mistakenly crowned as the ultimate central organ of visual perception ('principale organum visionis'), rather than a simple refractive lens."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XV & Paradiso, Canto XXVI",quote:"Come quando da l'acqua o da lo specchio / salta lo raggio a l'opposita parte, / salendo su per lo modo parecchio / a quel che scende, e tanto si diparte / dal cader de la pietra in igual tratta, / sì come mostra esperïenza e arte...",commentary:"Dante understands optical accommodation spiritually: as his pilgrim ascends the spheres of Paradise, Beatrice cleanses his ocular crystalline faculty so that his gaze can endure escalating intensities of celestial illumination."}},{id:"ciliaryBody",name:"Ciliary Body & Trabecular Meshwork",latin:"Corpus Ciliare",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Middle Uvea)",pinPosition:[0,1.4,1.1],cameraTarget:[0,1,1],color:"#b45309",opticalMetrics:{aqueousProduction:"2.0–2.5 µL/min secretional rate",accommodationForce:"Smooth muscle vectors adjusting zonular tension",intraocularPressure:"Regulated homeostatically around 15.5 mmHg"},medicalDescription:"The circumferential uveal tissue connecting the choroid with the iris. Composed of two parts: pars plicata (anterior corrugated zone bearing ~70 ciliary processes) and pars plana (posterior flattened zone). Produces aqueous humor through active secretion and ultrafiltration by the dual-layered ciliary epithelium, while containing the smooth ciliary muscle fibers (longitudinal, radial, circular) responsible for lens accommodation.",clinicalPathology:"Primary Open-Angle Glaucoma (trabecular meshwork resistance), cyclitis, hypotony, malignant ciliary block glaucoma.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Glaucoma: Pathophysiology of Aqueous Outflow and Intraocular Pressure",url:"https://www.aao.org/education/bcsc"},{authority:"European Glaucoma Society (EGS)",title:"Terminology and Guidelines for Glaucoma (5th Ed.)",url:"https://www.eugs.org/"}],historicalTreatise:{author:"Hermann von Helmholtz",work:"Handbuch der Physiologischen Optik (Treatise on Physiological Optics, 1856–1867)",note:"Formulated the definitive mechanism of ocular accommodation: ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to bulge into greater convexity."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Tollund Man' & Bog Poems",quote:"Those dark man-killing parishes. / ... I will feel lost, / Unhappy and at home.",commentary:"The hydraulic pressure within the ciliary apparatus parallels the bog's peat-press: an enclosed, dark anatomical engine regulating fluid balance, preserving archaic bodily tensions beneath peat and flesh."}},{id:"choroid",name:"Choroid",latin:"Choroidea",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Posterior Uvea)",pinPosition:[0,-1.6,-.6],cameraTarget:[0,-1.2,-.5],color:"#7f1d1d",opticalMetrics:{bloodFlow:"Highest blood flow per unit weight in human body (~1000 mL/min/100g)",pigmentation:"Dense melanin concentration for thermal/light dissipation",thickness:"0.2 mm (posterior pole) thinning to 0.1 mm anteriorly"},medicalDescription:"The posterior, extensively vascularized section of the uveal tract bounded internally by Bruch's membrane and externally by the sclera. Formed of four histological layers: Haller's layer (large vessel layer), Sattler's layer (medium vessels), choriocapillaris (fenestrated capillary monolayer), and Bruch's membrane (extracellular lamina). Nourishes the avascular outer retina, photoreceptors, and retinal pigment epithelium.",clinicalPathology:"Choroidal neovascularization (CNV in wet age-related macular degeneration), choroidal melanoma, central serous chorioretinopathy, choroidal detachment.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Retina and Vitreous: BCSC Section 12",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / NIH Webvision",title:"The Choroid: Anatomy, Vascular Architecture, and Bruch's Membrane",url:"https://www.ncbi.nlm.nih.gov/books/NBK11554/"}],historicalTreatise:{author:"Johannes Kepler",work:"Ad Vitellionem Paralipomena (Astronomiae Pars Optica, 1604)",note:"Recognized the choroid as the dark, light-absorptive lining of the anatomical camera obscura, preventing internal light back-scatter."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto IX (The City of Dis)",quote:"O voi ch'avete li 'ntelletti sani, / mirate la dottrina che s'asconde / sotto 'l velame de li versi strani.",commentary:"The vascular, blood-gorged choroid is the hidden anatomical veil ('velame') beneath the visual screen: a dark, pulsing under-tunic that sustains perception while remaining entirely concealed from conscious sight."}},{id:"vitreous",name:"Vitreous Humor (Corpus Vitreum)",latin:"Corpus Vitreum",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,.2],cameraTarget:[0,0,0],color:"#38bdf8",opticalMetrics:{refractiveIndex:"n = 1.336 (matched closely to aqueous humor)",composition:"98-99% water, type II collagen scaffolding, hyaluronic acid",volume:"4.0 mL (~80% of total globe volume)"},medicalDescription:"A clear, viscoelastic, transparent gel occupying the posterior four-fifths of the globe between the lens and retina. The hyaloid membrane encloses the vitreous core and establishes firm anatomical attachments at the vitreous base (straddling the ora serrata), optic disc margin, macula, and retinal blood vessels. Traversed embryologically by Cloquet's canal (vestige of the fetal hyaloid artery).",clinicalPathology:"Posterior vitreous detachment (PVD), vitreous hemorrhage, asteroid hyalosis, vitreomacular traction syndrome, floaters (vitreous syneresis).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Vitreous Body Physiology and Vitreoretinal Surgery",url:"https://www.aao.org/education/bcsc"},{authority:"National Eye Institute (NEI / NIH)",title:"Vitreous Mechanics and Retinal Traction",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"René Descartes",work:"La Dioptrique (1637)",note:"Used the transparent vitreous humor as a mechanical medium in his treatise on optics to model the physical transmission of motion particles (photons) directly onto the cerebral pineal gland."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Grauballe Man' & Bog Poems",quote:"As if he had been poured / in tar, he lies / on a pillow of turf / and seems to weep / the black river of himself.",commentary:"The vitreous body is the internal gelatinous abyss of the eye: a preserved, primordial fluid chamber preserving optical memory just as the peat bog embalms the sacrificed body in fluid suspension."}},{id:"retina",name:"Retina & Ora Serrata",latin:"Tunica Interna / Retina",layerCategory:"nervosa",layer:"Tunica Nervosa (Inner Sensorium)",pinPosition:[-1.2,.8,-.8],cameraTarget:[-1,.6,-.6],color:"#f43f5e",opticalMetrics:{photoreceptorCount:"~120 million rods, ~6 million cones",signalTransduction:"11-cis-retinal photoisomerization to all-trans-retinal in <1 picosecond",thickness:"100 µm at ora serrata to 230 µm adjacent to optic disc"},medicalDescription:"The neurosensory tissue of the inner eye that converts incident photons into action potentials. Histologically organized into 10 precisely stratified layers: (1) Retinal Pigment Epithelium, (2) Photoreceptor layer, (3) External Limiting Membrane, (4) Outer Nuclear Layer, (5) Outer Plexiform Layer, (6) Inner Nuclear Layer, (7) Inner Plexiform Layer, (8) Ganglion Cell Layer, (9) Nerve Fiber Layer, and (10) Internal Limiting Membrane.",clinicalPathology:"Rhegmatogenous retinal detachment (retinal tears allowing liquefied vitreous subretinal access), diabetic retinopathy, retinitis pigmentosa, retinal vein occlusion.",medicalSources:[{authority:"NCBI Bookshelf: Webvision",title:"The Organization of the Retina and Visual System (Kolb, Fernandez, Nelson)",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"},{authority:"American Academy of Ophthalmology (AAO)",title:"Retinal Anatomy, Physiology, and Vascular Diseases: BCSC Section 12",url:"https://www.aao.org/education/bcsc"}],historicalTreatise:{author:"Johannes Kepler & Santiago Ramón y Cajal",work:"Ad Vitellionem Paralipomena (1604) / The Structure of the Retina (1892)",note:"Kepler proved mathematically that an inverted and reversed physical image is projected onto the retinal screen; Cajal subsequently proved the individual neuronal circuit architecture using Golgi staining."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXXIII (The Beatific Vision)",quote:"Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",commentary:"Dante's climax in the Empyrean is the ultimate retinal exposure: the divine trinity appears as three concentric rings of light of three distinct colors, striking the pilgrim's sensorium directly in pure optical geometry."}},{id:"fovea",name:"Macula Lutea & Fovea Centralis",latin:"Fovea Centralis",layerCategory:"nervosa",layer:"Tunica Nervosa (Visual Axis Core)",pinPosition:[0,0,-1.85],cameraTarget:[0,0,-1.6],color:"#f59e0b",opticalMetrics:{diameter:"1.5 mm (Fovea), 0.35 mm (Foveola / avascular zone)",visualAcuity:"20/20 central foveal acuity (100% packed midget cone system)",pigmentation:"High concentration of lutein and zeaxanthin carotenoids"},medicalDescription:"The specialized, avascular central retinal depression located ~4.0 mm temporal and 0.8 mm inferior to the optic disc center. In the foveola, inner retinal layers are displaced laterally (creating the foveal pit/clivus) to allow unhindered light access to densely packed cone photoreceptors (~200,000 cones/mm²), providing maximal visual resolution and trichromatic color vision.",clinicalPathology:"Age-Related Macular Degeneration (dry/wet AMD with drusen and geographic atrophy), macular hole, central serous chorioretinopathy, cystoid macular edema.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Age-Related Macular Degeneration PPP (Preferred Practice Pattern)",url:"https://www.aao.org/preferred-practice-pattern/age-related-macular-degeneration-ppp"},{authority:"Journal of Comparative Neurology",title:"Curcio CA, et al. 'Human photoreceptor topography' (1990)",url:"https://pubmed.ncbi.nlm.nih.gov/2358643/"}],historicalTreatise:{author:"Samuel Thomas von Sömmerring",work:"De Foramine Centrali Retinae (1799)",note:"First documented the yellow pigment (macula lutea) and central foveal pit ('foramen centrale') in the human ocular fundus."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXVIII",quote:"Un punto vidi che raggiava lume / acuto sì, che 'l viso ch'elli affoca / chiuder conviensi per lo forte acume; / e quale stella par quinci più poca, / parrebbe luna, locata con esso / come stella con stella si colloca.",commentary:"The fovea centralis is Dante's 'point that radiated light so piercing'—an infinitesimal, blazing focal point of pure resolution around which the entire universe and sensory apparatus pivots."}},{id:"opticDisc",name:"Optic Disc (Mariotte's Blind Spot)",latin:"Discus Nervi Optici / Punctum Caecum",layerCategory:"neural",layer:"Neural Pathways / Physiological Scotoma",pinPosition:[.9,.2,-1.75],cameraTarget:[.7,.2,-1.5],color:"#fbbf24",opticalMetrics:{scotomaSize:"5.5° wide by 7.5° high in visual field (~15° temporal to fixation)",dimension:"1.5 mm horizontal x 1.75 mm vertical diameter",photoreceptorDensity:"Zero (complete absence of rods and cones)"},medicalDescription:"The anatomical exit point for ~1.2 million unmyelinated axons of retinal ganglion cells as they coalesce and pass through the fenestrated scleral lamina cribrosa. Because the disc is devoid of photoreceptors and retinal pigment epithelium, it generates an absolute physiological scotoma (blind spot) in the visual field. Contains the physiological cup and the central retinal artery/vein bifurcations.",clinicalPathology:"Papilledema (bilateral optic disc swelling from elevated intracranial pressure), glaucomatous optic neuropathy (cupping and neuroretinal rim loss), ischemic optic neuropathy (AION/NAION).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology: BCSC Section 5",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / StatPearls",title:"Physiology, Blind Spot (Punctum Caecum)",url:"https://www.ncbi.nlm.nih.gov/books/NBK545229/"}],historicalTreatise:{author:"Edme Mariotte",work:"Nouvelle Découverte touchant la Vue (Royal Academy of Sciences, Paris, 1668)",note:"Discovered the physiological blind spot by demonstrating that an object positioned at a 15-degree eccentricity disappears completely when its image strikes the optic nerve head."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' & 'The Underground'",quote:"There we were in the vaulted tunnel running, / You ahead of me, / ... All the while / I thought of Orpheus, turning to look back.",commentary:"Mariotte's blind spot is the structural blind spot of Orpheus: the inevitable dark void in the center of perception where looking directly causes the object of desire to vanish. Vision is constructed around what it cannot see."}},{id:"opticNerve",name:"Optic Nerve (Cranial Nerve II)",latin:"Nervus Opticus (CN II)",layerCategory:"neural",layer:"Neural Pathways (Ocular-Cerebral Conduit)",pinPosition:[.9,.2,-2.8],cameraTarget:[.9,.2,-2.4],color:"#fde047",opticalMetrics:{axonCount:"~1.2 million myelinated nerve fibers (oligodendrocytes post-lamina)",length:"40–50 mm total (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)",sheathMeninges:"Ensheathed by dura mater, arachnoid mater, and pia mater with subarachnoid space (CSF)"},medicalDescription:"The paired cranial nerve transmitting visual sensory information from the retina to the lateral geniculate nucleus (LGN), superior colliculus, and pretectal nuclei. Anatomically not a true peripheral nerve but an outpouching of the diencephalon; thus wrapped by all three meningeal sheaths and vulnerable to intracranial pressure transmitted through the subarachnoid space.",clinicalPathology:"Optic neuritis (demyelination in Multiple Sclerosis), optic nerve glioma, traumatic optic neuropathy, compressive pituitary adenoma at the optic chiasm (bitemporal hemianopia).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology and Optic Nerve Diseases",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy (42nd Ed.)",title:"Cranial Nerves: Cranial Nerve II (Optic Nerve Pathway)",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"}],historicalTreatise:{author:"Andreas Vesalius & Galen",work:"De Humani Corporis Fabrica (1543)",note:"Dismantled the ancient Galenic doctrine that the optic nerves were hollow pipes ('canales perforati') channeling spiritus visivus, proving they were solid fibrillar neural cables leading to the optic chiasm."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XXI & Paradiso, Canto XXX",quote:"Non è fantastico lo splendore ond'io mi sento fasciato; / ... e vidi lume in forma di rivera / fulvido di fulgore, intra due rive / dipinte di mirabil primavera.",commentary:"The optic nerve is the river of light connecting Dante's corporeal body to the Empyrean: a biological cable conveying light through darkness until neural sensation transforms into pure spiritual intellect."}}];function xA({activeStructureId:s,onSelectStructure:e,viewMode:i,activeLayerFilter:r}){const l=Tn.useRef(null),c=Tn.useRef(null),h=Tn.useRef(null),p=Tn.useRef(null),m=Tn.useRef({isDragging:!1,previousMousePosition:{x:0,y:0},rotation:{x:.15,y:-.92},targetRotation:{x:.15,y:-.92},zoom:6,targetZoom:6}),d=Tn.useRef(null),y=Tn.useRef(null),x=Tn.useRef(null),[g,M]=Tn.useState(null);return Tn.useEffect(()=>{const T=l.current;if(!T)return;const C=new ZS;c.current=C;const S=T.clientWidth,_=T.clientHeight||580,O=new fi(40,S/_,.1,100);O.position.set(0,0,m.current.zoom),h.current=O;const I=new vA({antialias:!0,alpha:!0});I.setSize(S,_),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.toneMapping=Hd,I.toneMappingExposure=1.45,I.shadowMap.enabled=!0,I.shadowMap.type=i_,p.current=I,T.innerHTML="",T.appendChild(I.domElement);const w=new _M(16777215,1.8);C.add(w);const P=new Av(16776176,3.2);P.position.set(8,10,9),C.add(P);const D=new Av(10875900,2.2);D.position.set(-8,-6,-7),C.add(D);const z=new Tv(16096779,3.8,30);z.position.set(0,8,-6),C.add(z);const E=new Tv(16347926,2.8,7);E.position.set(0,0,0),C.add(E);const U=new Hr;y.current=U,C.add(U);const X=new Hr;d.current=X,U.add(X);const G=new mM,W="/the-anatomical-gaze/",ce=G.load(`${W}iris_texture.jpg?v=3`,Ue=>{Ue.colorSpace=Rn,Ue.needsUpdate=!0});ce.colorSpace=Rn;const de=G.load(`${W}retina_texture.jpg?v=2`,Ue=>{Ue.colorSpace=Rn,Ue.needsUpdate=!0});de.colorSpace=Rn;const Q=G.load(`${W}sclera_texture.jpg?v=2`,Ue=>{Ue.colorSpace=Rn,Ue.wrapS=zr,Ue.wrapT=zr,Ue.repeat.set(2,1),Ue.needsUpdate=!0});Q.colorSpace=Rn,Q.wrapS=zr,Q.wrapT=zr,Q.repeat.set(2,1),yA(U,i,r,{irisTexture:ce,retinaTexture:de,scleraTexture:Q}),t_(X,or,s,r);let B=!1,F=0,J=0;const me=Ue=>{Ue.button!==0&&Ue.button!==2||(B=!0,F=Ue.clientX,J=Ue.clientY)},Ee=Ue=>{const Ke=I.domElement.getBoundingClientRect(),at=(Ue.clientX-Ke.left)/Ke.width*2-1,st=-((Ue.clientY-Ke.top)/Ke.height)*2+1,ut=new Cv;if(ut.setFromCamera(new mt(at,st),O),d.current){const Nt=d.current.children.map(Ut=>Ut.children[0]).filter(Boolean),Jt=ut.intersectObjects(Nt);if(Jt.length>0){const Ut=Jt[0].object.userData.structureId;M(Ut),I.domElement.style.cursor="pointer"}else M(null),I.domElement.style.cursor=B?"grabbing":"grab"}if(!B)return;const Zt=Ue.clientX-F,Wt=Ue.clientY-J;m.current.targetRotation.y+=Zt*.008,m.current.targetRotation.x+=Wt*.008,m.current.targetRotation.x=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,m.current.targetRotation.x)),F=Ue.clientX,J=Ue.clientY},N=()=>{B=!1,I.domElement.style.cursor="grab"},Z=Ue=>{const Ke=I.domElement.getBoundingClientRect(),at=(Ue.clientX-Ke.left)/Ke.width*2-1,st=-((Ue.clientY-Ke.top)/Ke.height)*2+1,ut=new Cv;if(ut.setFromCamera(new mt(at,st),O),d.current){const Zt=d.current.children.map(Nt=>Nt.children[0]).filter(Boolean),Wt=ut.intersectObjects(Zt);if(Wt.length>0){const Nt=Wt[0].object.userData.structureId;Nt&&e&&e(Nt)}}},Me=Ue=>{Ue.preventDefault(),m.current.targetZoom+=Ue.deltaY*.005,m.current.targetZoom=Math.max(3.5,Math.min(10,m.current.targetZoom))},Te=I.domElement;Te.addEventListener("mousedown",me),window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",N),Te.addEventListener("click",Z),Te.addEventListener("wheel",Me,{passive:!1});let Oe=0;const ae=Ue=>{Ue.touches.length===1?(B=!0,F=Ue.touches[0].clientX,J=Ue.touches[0].clientY):Ue.touches.length===2&&(Oe=Math.hypot(Ue.touches[0].clientX-Ue.touches[1].clientX,Ue.touches[0].clientY-Ue.touches[1].clientY))},ye=Ue=>{if(Ue.touches.length===1&&B){const Ke=Ue.touches[0].clientX-F,at=Ue.touches[0].clientY-J;m.current.targetRotation.y+=Ke*.008,m.current.targetRotation.x+=at*.008,F=Ue.touches[0].clientX,J=Ue.touches[0].clientY}else if(Ue.touches.length===2){const Ke=Math.hypot(Ue.touches[0].clientX-Ue.touches[1].clientX,Ue.touches[0].clientY-Ue.touches[1].clientY),at=(Oe-Ke)*.01;m.current.targetZoom=Math.max(3.5,Math.min(10,m.current.targetZoom+at)),Oe=Ke}},Se=()=>{B=!1};Te.addEventListener("touchstart",ae,{passive:!0}),Te.addEventListener("touchmove",ye,{passive:!0}),Te.addEventListener("touchend",Se,{passive:!0});const Fe=new ResizeObserver(Ue=>{for(let Ke of Ue){const at=Ke.contentRect.width,st=Ke.contentRect.height||580;at>0&&st>0&&(O.aspect=at/st,O.updateProjectionMatrix(),I.setSize(at,st))}});Fe.observe(T);let it=new SM;const Qe=()=>{const Ue=it.getElapsedTime();m.current.rotation.x+=(m.current.targetRotation.x-m.current.rotation.x)*.1,m.current.rotation.y+=(m.current.targetRotation.y-m.current.rotation.y)*.1,m.current.zoom+=(m.current.targetZoom-m.current.zoom)*.1,U.rotation.x=m.current.rotation.x,U.rotation.y=m.current.rotation.y,O.position.z=m.current.zoom,d.current&&d.current.children.forEach(Ke=>{const at=Ke.children[1];if(at){const st=1+.3*Math.sin(Ue*4.2+Ke.position.x);at.scale.set(st,st,st)}}),I.render(C,O),x.current=requestAnimationFrame(Qe)};return Qe(),()=>{x.current&&cancelAnimationFrame(x.current),Te.removeEventListener("mousedown",me),window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",N),Te.removeEventListener("click",Z),Te.removeEventListener("wheel",Me),Te.removeEventListener("touchstart",ae),Te.removeEventListener("touchmove",ye),Te.removeEventListener("touchend",Se),Fe.disconnect(),I.dispose()}},[i,r]),Tn.useEffect(()=>{d.current&&t_(d.current,or,s,r)},[s,r]),Tn.useEffect(()=>{if(!s)return;const T=or.find(C=>C.id===s);if(T&&T.pinPosition){const[C,S,_]=T.pinPosition,O=-Math.atan2(C,_),I=Math.atan2(S,Math.sqrt(C*C+_*_));m.current.targetRotation.y=O,m.current.targetRotation.x=I*.72,m.current.targetZoom=5.2}},[s]),ve.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"580px"},children:[ve.jsx("div",{ref:l,style:{width:"100%",height:"100%",minHeight:"580px",borderRadius:"12px",overflow:"hidden"}}),ve.jsxs("div",{style:{position:"absolute",bottom:"1rem",left:"1rem",display:"flex",gap:"0.6rem",background:"rgba(10, 10, 12, 0.85)",backdropFilter:"blur(12px)",padding:"0.45rem 0.9rem",borderRadius:"8px",border:"1px solid var(--border-glass)",fontSize:"0.82rem",color:"var(--text-secondary)"},children:[ve.jsx("span",{children:"🖱️ 360° Real 3D Model"}),ve.jsx("span",{children:"•"}),ve.jsx("span",{children:"🔍 Scroll to Zoom"}),ve.jsx("span",{children:"•"}),ve.jsx("span",{children:"🎯 Click 3D Pins"})]}),g&&ve.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",background:"rgba(20, 21, 26, 0.95)",backdropFilter:"blur(12px)",border:"1px solid var(--accent-gold)",padding:"0.5rem 1rem",borderRadius:"8px",color:"#fff",fontSize:"0.9rem",boxShadow:"0 8px 24px rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:30},children:[ve.jsx("strong",{style:{color:"var(--accent-gold)"},children:or.find(T=>T.id===g)?.name}),ve.jsx("span",{style:{display:"block",fontSize:"0.75rem",color:"var(--text-secondary)",fontStyle:"italic"},children:or.find(T=>T.id===g)?.latin})]}),ve.jsx("button",{onClick:()=>{m.current.targetRotation={x:.15,y:-.92},m.current.targetZoom=6},style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(20, 21, 26, 0.85)",border:"1px solid var(--border-glass)",color:"var(--text-primary)",padding:"0.45rem 0.9rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.82rem",backdropFilter:"blur(8px)",transition:"all 0.2s",zIndex:30},title:"Reset 3D Camera View",children:"↺ Reset 3D View"})]})}function yA(s,e,i,r){for(;s.children.length>1;)s.remove(s.children[s.children.length-1]);const l=e==="crossSection",c=l?Math.PI*1.5:Math.PI*2,h=Math.PI/2,p=Math.PI/2,m=i==="all"||i==="fibrosa",d=i==="all"||i==="vasculosa",y=i==="all"||i==="nervosa",x=i==="all"||i==="optical",g=i==="all"||i==="neural";if(m){const M=new xa(2,64,64,0,c,.42,Math.PI-.42),T=new rr({map:r.scleraTexture,roughness:.2,metalness:.05,side:l?An:ba}),C=new jt(M,T);C.rotation.x=h,C.rotation.z=p,s.add(C);const S=new qs(.38,.09,1.85),_=new rr({color:8917815,roughness:.6}),O=new jt(S,_);O.position.set(0,2.03,-.45),O.rotation.x=-.22,s.add(O);const I=new jt(S,_);I.position.set(0,-2.03,-.45),I.rotation.x=.22,s.add(I);const w=new xa(1.24,56,56,0,c,0,Math.PI/2.05),P=new zh({color:14412542,transparent:!0,opacity:.42,roughness:.01,metalness:.05,transmission:.98,ior:1.376,clearcoat:1,clearcoatRoughness:.05,side:An}),D=new jt(w,P);D.position.set(0,0,1.44),D.scale.set(1,1,.74),D.rotation.x=h,D.rotation.z=p,s.add(D)}if(d){const M=new xa(1.92,56,56,0,c,.46,Math.PI-.46),T=new rr({color:7346718,roughness:.55,metalness:.1,side:An}),C=new jt(M,T);C.rotation.x=h,C.rotation.z=p,s.add(C);const S=new tl(.44,1.22,56,8,0,c),_=new rr({map:r.irisTexture,roughness:.3,side:An}),O=new jt(S,_);O.position.set(0,0,1.46),s.add(O);const I=new $d(1.26,.12,16,56,c),w=new rr({color:7877903,roughness:.5}),P=new jt(I,w);P.position.set(0,0,1.32),s.add(P)}if(y){const M=new xa(1.85,64,64,0,c,.58,Math.PI-.58),T=new rr({map:r.retinaTexture,roughness:.35,metalness:.05,side:An}),C=new jt(M,T);C.rotation.x=h,C.rotation.z=p,s.add(C)}if(x){const M=new xa(.92,40,40,0,c),T=new zh({color:15792639,transparent:!0,opacity:.9,roughness:.03,transmission:.96,ior:1.406,clearcoat:.8,side:An}),C=new jt(M,T);C.position.set(0,0,1.24),C.scale.set(.96,.96,.48),C.rotation.x=h,C.rotation.z=p,s.add(C);const S=new tl(.9,1.25,56,8,0,c),_=new Gr({color:16710083,wireframe:!0,transparent:!0,opacity:.45,side:An}),O=new jt(S,_);if(O.position.set(0,0,1.24),s.add(O),l||i==="optical"){const I=new xa(1.8,40,40,0,c),w=new zh({color:16498468,transparent:!0,opacity:.18,roughness:.1,transmission:.96,side:An}),P=new jt(I,w);P.rotation.x=h,P.rotation.z=p,s.add(P)}}if(g||m){const M=new Qo(.42,.46,2,32),T=new rr({color:16707722,roughness:.35,metalness:.08}),C=new jt(M,T);C.position.set(.88,.22,-2.7),C.rotation.x=Math.PI/2+.15,C.rotation.z=-.15,s.add(C);const S=new Qo(.045,.045,2,16),_=new Gr({color:14427686}),O=new jt(S,_);O.position.set(.85,.26,-2.7),O.rotation.x=Math.PI/2+.15,s.add(O);const I=new Qo(.045,.045,2,16),w=new Gr({color:2450411}),P=new jt(I,w);P.position.set(.91,.18,-2.7),P.rotation.x=Math.PI/2+.15,s.add(P)}}function t_(s,e,i,r){for(;s.children.length>0;)s.remove(s.children[0]);e.forEach(l=>{if(r!=="all"&&l.layerCategory!==r)return;const c=l.id===i,h=new Hr;h.position.set(...l.pinPosition);const p=new xa(c?.13:.09,20,20),m=new Gr({color:c?13938487:16777215}),d=new jt(p,m);d.userData={structureId:l.id},h.add(d);const y=new tl(.12,.17,32),x=new Gr({color:c?13938487:l.color||3718648,side:An,transparent:!0,opacity:c?.95:.7}),g=new jt(y,x);g.lookAt(0,0,10),h.add(g),s.add(h)})}function SA({structure:s}){const[e,i]=Tn.useState("medical");return s?ve.jsxs("div",{className:"glass-panel",style:{height:"100%",padding:"2rem",display:"flex",flexDirection:"column",overflowY:"auto",maxHeight:"750px",animation:"fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)"},children:[ve.jsxs("div",{style:{borderBottom:"1px solid var(--border-glass)",paddingBottom:"1.25rem",marginBottom:"1.25rem"},children:[ve.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.4rem"},children:[ve.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--accent-crimson)",fontWeight:"600",background:"rgba(158, 42, 43, 0.15)",padding:"0.2rem 0.6rem",borderRadius:"4px",border:"1px solid rgba(158, 42, 43, 0.3)"},children:s.layer}),ve.jsx("span",{style:{fontStyle:"italic",color:"var(--text-secondary)",fontSize:"0.9rem"},children:s.latin})]}),ve.jsx("h2",{style:{fontSize:"2.2rem",color:"var(--accent-gold)",margin:"0.2rem 0 0.5rem 0"},children:s.name}),s.opticalMetrics&&ve.jsx("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginTop:"0.75rem"},children:Object.entries(s.opticalMetrics).map(([r,l])=>ve.jsxs("span",{style:{fontSize:"0.8rem",background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-glass)",padding:"0.25rem 0.6rem",borderRadius:"6px",color:"var(--text-primary)"},children:[ve.jsxs("strong",{style:{color:"var(--accent-gold)",textTransform:"capitalize"},children:[r.replace(/([A-Z])/g," $1"),":"]})," ",l]},r))})]}),ve.jsxs("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(0, 0, 0, 0.3)",padding:"0.3rem",borderRadius:"8px",marginBottom:"1.5rem",border:"1px solid var(--border-glass)",overflowX:"auto"},children:[ve.jsx("button",{onClick:()=>i("medical"),style:Bc(e==="medical"),children:"🩺 Anatomy & Pathology"}),ve.jsxs("button",{onClick:()=>i("sources"),style:Bc(e==="sources"),children:["📚 Medical Sources (",s.medicalSources?.length||0,")"]}),ve.jsx("button",{onClick:()=>i("history"),style:Bc(e==="history"),children:"📜 Historical Treatise"}),ve.jsx("button",{onClick:()=>i("literary"),style:Bc(e==="literary"),children:"🖋️ Literary Analysis"})]}),ve.jsxs("div",{style:{flex:1},children:[e==="medical"&&ve.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",borderRadius:"8px",borderLeft:"4px solid var(--accent-gold)"},children:[ve.jsx("h4",{style:{color:"var(--text-primary)",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Histological Organization & Physiology"}),ve.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.medicalDescription})]}),s.clinicalPathology&&ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.08)",borderRadius:"8px",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.2)"},children:[ve.jsx("h4",{style:{color:"#f87171",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Clinical Pathologies & Diagnostics"}),ve.jsx("p",{style:{fontSize:"0.92rem",lineHeight:"1.6",color:"var(--text-primary)"},children:s.clinicalPathology})]})]}),e==="sources"&&ve.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[ve.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"0.25rem"},children:"Data and anatomical parameters pooled from peer-reviewed ophthalmic authorities and institutional curricula:"}),s.medicalSources?.map((r,l)=>ve.jsxs("div",{className:"interactive-card",style:{padding:"1rem 1.25rem",background:"rgba(20, 21, 26, 0.8)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[ve.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.3rem"},children:[ve.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-gold)",fontWeight:"600"},children:r.authority}),ve.jsx("span",{style:{fontSize:"0.75rem",color:"#6ee7b7"},children:"✓ Verified Peer-Reviewed"})]}),ve.jsx("h5",{style:{fontSize:"0.95rem",color:"var(--text-primary)",marginBottom:"0.5rem",fontWeight:"500"},children:r.title||r.citation}),r.url&&ve.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem",color:"var(--accent-gold)",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:"View Authority Catalog ↗"})]},l))]}),e==="history"&&s.historicalTreatise&&ve.jsxs("div",{style:{padding:"1.5rem",background:"rgba(216, 184, 99, 0.05)",border:"1px solid rgba(216, 184, 99, 0.2)",borderRadius:"10px"},children:[ve.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"var(--accent-gold)"},children:"Historical Anatomical Root"}),ve.jsx("h3",{style:{fontSize:"1.3rem",color:"var(--text-primary)",margin:"0.4rem 0"},children:s.historicalTreatise.author}),ve.jsx("p",{style:{fontStyle:"italic",color:"var(--accent-gold)",marginBottom:"1rem",fontSize:"0.95rem"},children:s.historicalTreatise.work}),ve.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-primary)"},children:s.historicalTreatise.note})]}),e==="literary"&&s.literaryAnalysis&&ve.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.1)",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.25)",borderRadius:"8px"},children:[ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[ve.jsx("span",{style:{color:"var(--accent-crimson)",fontWeight:"bold",fontSize:"0.9rem"},children:s.literaryAnalysis.figure}),ve.jsx("span",{style:{fontStyle:"italic",fontSize:"0.85rem",color:"var(--text-secondary)"},children:s.literaryAnalysis.text})]}),ve.jsxs("blockquote",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"1.05rem",color:"var(--text-primary)",lineHeight:"1.6",margin:"0.75rem 0"},children:['"',s.literaryAnalysis.quote,'"']})]}),ve.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[ve.jsx("h5",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Critical Commentary"}),ve.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.literaryAnalysis.commentary})]})]})]})]}):ve.jsxs("div",{className:"glass-panel",style:{height:"100%",minHeight:"450px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2.5rem",textAlign:"center",color:"var(--text-secondary)"},children:[ve.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem",opacity:.8},children:"👁️"}),ve.jsx("h3",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"1.4rem"},children:"3D Interactive Ocular Dissection"}),ve.jsx("p",{style:{maxWidth:"380px",fontSize:"0.95rem",lineHeight:"1.6"},children:"Click on any glowing anatomical pin in the 3D viewport or select a structure from the directory to inspect its medical anatomy, clinical citations, and literary resonance."})]})}function Bc(s){return{flex:"1 1 auto",padding:"0.55rem 0.8rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:s?"600":"400",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"}}function MA(){const[s,e]=Tn.useState("cornea"),[i,r]=Tn.useState("crossSection"),[l,c]=Tn.useState("all"),h=or.find(m=>m.id===s)||or[0],p=or.filter(m=>l==="all"||m.layerCategory===l);return ve.jsxs("div",{className:"section-container",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[ve.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:[ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[ve.jsxs("div",{children:[ve.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"2px",color:"var(--accent-gold)"},children:"Interactive 3D Ocular Deep-Map"}),ve.jsx("h2",{style:{fontSize:"2.4rem",color:"var(--text-primary)",marginTop:"0.25rem"},children:"The Dissected Eye: 3D Anatomical Atlas"}),ve.jsx("p",{style:{maxWidth:"850px",fontSize:"1.05rem",color:"var(--text-secondary)",marginTop:"0.5rem",lineHeight:"1.6"},children:"Interactive 3D WebGL model modeled after clinical ophthalmic anatomy (LASIK, AAO, NIH Webvision). Rotate in 360°, inspect internal structures in sagittal cutaway dissection, and explore the convergence of medical ocular anatomy and Dante/Heaney poetics."})]}),ve.jsxs("div",{style:{display:"flex",background:"rgba(0,0,0,0.5)",padding:"0.4rem",borderRadius:"10px",border:"1px solid var(--border-glass)",gap:"0.4rem"},children:[ve.jsx("button",{onClick:()=>r("crossSection"),style:n_(i==="crossSection"),title:"Sagittal cross-section revealing internal anatomy",children:"🔪 Sagittal Dissection (Cutaway)"}),ve.jsx("button",{onClick:()=>r("composite"),style:n_(i==="composite"),title:"Full intact spherical globe",children:"👁️ Intact 3D Globe"})]})]}),ve.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1.5rem",flexWrap:"wrap",borderTop:"1px solid var(--border-glass)",paddingTop:"1.25rem"},children:[ve.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",alignSelf:"center",marginRight:"0.5rem"},children:"Filter Tunics:"}),_A.map(m=>ve.jsx("button",{onClick:()=>c(m.id),style:bA(l===m.id),children:m.label},m.id))]}),ve.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1rem",overflowX:"auto",paddingBottom:"0.4rem"},children:p.map(m=>{const d=m.id===s;return ve.jsxs("button",{onClick:()=>e(m.id),style:{padding:"0.4rem 0.85rem",background:d?"rgba(216, 184, 99, 0.2)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${d?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"20px",color:d?"var(--accent-gold)":"var(--text-secondary)",fontSize:"0.82rem",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"},children:[d?"● ":"",m.name]},m.id)})})]}),ve.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(420px, 1fr))",gap:"1.5rem",alignItems:"stretch"},children:[ve.jsxs("div",{className:"glass-panel",style:{position:"relative",padding:"1rem",display:"flex",flexDirection:"column",minHeight:"600px",border:"1px solid var(--border-glass)"},children:[ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",borderBottom:"1px solid var(--border-glass)",marginBottom:"0.5rem"},children:[ve.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[ve.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}),ve.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-primary)",letterSpacing:"0.5px"},children:"Interactive 3D WebGL Model"})]}),ve.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:["Mode: ",i==="crossSection"?"Sagittal Cutaway Dissection":"Intact Ocular Globe"]})]}),ve.jsx("div",{style:{flex:1,position:"relative",minHeight:"520px"},children:ve.jsx(xA,{activeStructureId:s,onSelectStructure:m=>e(m),viewMode:i,activeLayerFilter:l})})]}),ve.jsx("div",{style:{minHeight:"600px"},children:ve.jsx(SA,{structure:h})})]})]})}function n_(s){return{padding:"0.55rem 1.1rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"7px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.85rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function bA(s){return{padding:"0.35rem 0.8rem",background:s?"rgba(216, 184, 99, 0.25)":"rgba(255, 255, 255, 0.04)",border:`1px solid ${s?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.8rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function EA(){return ve.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[ve.jsx("h2",{style:{marginBottom:"1rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Gaze and the Abject Body"}),ve.jsx("p",{style:{marginBottom:"2rem",maxWidth:"800px",fontSize:"1.1rem"},children:'Explore how the "repulsive object" of the corpse, viewed through a medical lens, becomes the site of both poetic reflection and existential disintegration.'}),ve.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:jy.map(s=>ve.jsxs("div",{className:"interactive-card glass-panel",style:{padding:"1.5rem",display:"flex",flexDirection:"column"},children:[ve.jsx("div",{style:{height:"200px",background:"var(--bg-primary)",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border-glass)",color:"var(--text-secondary)",fontStyle:"italic",overflow:"hidden"},children:s.image?ve.jsx("img",{src:s.image,alt:s.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):`[Image Placeholder: ${s.title}]`}),ve.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-crimson)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"0.5rem"},children:s.type}),ve.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"1rem",color:"var(--accent-gold)"},children:s.title}),ve.jsx("p",{style:{fontSize:"0.95rem",flexGrow:1},children:s.description})]},s.id))})]})}function TA(){const[s,e]=Tn.useState("timeline"),i={timeline:ve.jsx(Jy,{}),diagram:ve.jsx(MA,{}),gallery:ve.jsx(EA,{})};return ve.jsxs("div",{className:"app-container",children:[ve.jsxs("header",{className:"glass-panel app-header",style:{margin:"2rem",padding:"2rem",textAlign:"center"},children:[ve.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"0.5rem",color:"var(--accent-gold)"},children:"The Anatomical Gaze"}),ve.jsx("p",{className:"subtitle",style:{fontSize:"1.1rem",marginBottom:"2rem"},children:"Medical Optics, Ocular Anatomy, and the Literary Eye from Dante to Heaney"}),ve.jsxs("nav",{className:"main-nav",style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[ve.jsx("button",{className:`nav-btn interactive-card ${s==="timeline"?"active":""}`,onClick:()=>e("timeline"),style:qh(s==="timeline"),children:"The Medical Eye"}),ve.jsx("button",{className:`nav-btn interactive-card ${s==="diagram"?"active":""}`,onClick:()=>e("diagram"),style:qh(s==="diagram"),children:"The Dissected Eye"}),ve.jsx("button",{className:`nav-btn interactive-card ${s==="gallery"?"active":""}`,onClick:()=>e("gallery"),style:qh(s==="gallery"),children:"The Abject Body"})]})]}),ve.jsx("main",{className:"content-area",style:{margin:"0 2rem 2rem 2rem",minHeight:"60vh"},children:i[s]})]})}function qh(s){return{padding:"0.75rem 1.5rem",background:s?"var(--accent-crimson)":"var(--bg-glass)",border:`1px solid ${s?"var(--accent-crimson)":"var(--border-glass)"}`,color:"#fff",borderRadius:"8px",fontFamily:"Inter",fontWeight:"500",fontSize:"1rem",cursor:"pointer",transition:"var(--transition-fast)"}}Ky.createRoot(document.getElementById("root")).render(ve.jsx(Tn.StrictMode,{children:ve.jsx(TA,{})}));
