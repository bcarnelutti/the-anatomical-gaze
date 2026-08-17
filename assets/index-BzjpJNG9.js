(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ed={exports:{}},Oo={};var I0;function zy(){if(I0)return Oo;I0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var m in l)m!=="key"&&(u[m]=l[m])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var z0;function By(){return z0||(z0=1,ed.exports=zy()),ed.exports}var _e=By(),td={exports:{}},rt={};var B0;function Fy(){if(B0)return rt;B0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(U,W,Se){this.props=U,this.context=W,this.refs=M,this.updater=Se||T}y.prototype.isReactComponent={},y.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=y.prototype;function z(U,W,Se){this.props=U,this.context=W,this.refs=M,this.updater=Se||T}var C=z.prototype=new I;C.constructor=z,w(C,y.prototype),C.isPureReactComponent=!0;var B=Array.isArray;function L(){}var P={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function N(U,W,Se){var Ae=Se.ref;return{$$typeof:s,type:U,key:W,ref:Ae!==void 0?Ae:null,props:Se}}function Y(U,W){return N(U.type,W,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function j(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Se){return W[Se]})}var de=/\/+/g;function pe(U,W){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):W.toString(36)}function Q(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,W,Se,Ae,Oe){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(ie){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0;break;case x:return ye=U._init,O(ye(U._payload),W,Se,Ae,Oe)}}if(ye)return Oe=Oe(U),ye=Ae===""?"."+pe(U,0):Ae,B(Oe)?(Se="",ye!=null&&(Se=ye.replace(de,"$&/")+"/"),O(Oe,W,Se,"",function(Te){return Te})):Oe!=null&&(G(Oe)&&(Oe=Y(Oe,Se+(Oe.key==null||U&&U.key===Oe.key?"":(""+Oe.key).replace(de,"$&/")+"/")+ye)),W.push(Oe)),1;ye=0;var Me=Ae===""?".":Ae+":";if(B(U))for(var He=0;He<U.length;He++)Ae=U[He],ie=Me+pe(Ae,He),ye+=O(Ae,W,Se,ie,Oe);else if(He=b(U),typeof He=="function")for(U=He.call(U),He=0;!(Ae=U.next()).done;)Ae=Ae.value,ie=Me+pe(Ae,He++),ye+=O(Ae,W,Se,ie,Oe);else if(ie==="object"){if(typeof U.then=="function")return O(Q(U),W,Se,Ae,Oe);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(U,W,Se){if(U==null)return U;var Ae=[],Oe=0;return O(U,Ae,"","",function(ie){return W.call(Se,ie,Oe++)}),Ae}function J(U){if(U._status===-1){var W=U._result;W=W(),W.then(function(Se){(U._status===0||U._status===-1)&&(U._status=1,U._result=Se)},function(Se){(U._status===0||U._status===-1)&&(U._status=2,U._result=Se)}),U._status===-1&&(U._status=0,U._result=W)}if(U._status===1)return U._result.default;throw U._result}var me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Ee={map:H,forEach:function(U,W,Se){H(U,function(){W.apply(this,arguments)},Se)},count:function(U){var W=0;return H(U,function(){W++}),W},toArray:function(U){return H(U,function(W){return W})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=v,rt.Children=Ee,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=z,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,W,Se){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=w({},U.props),Oe=U.key;if(W!=null)for(ie in W.key!==void 0&&(Oe=""+W.key),W)!E.call(W,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&W.ref===void 0||(Ae[ie]=W[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=Se;else if(1<ie){for(var ye=Array(ie),Me=0;Me<ie;Me++)ye[Me]=arguments[Me+2];Ae.children=ye}return N(U.type,Oe,Ae)},rt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},rt.createElement=function(U,W,Se){var Ae,Oe={},ie=null;if(W!=null)for(Ae in W.key!==void 0&&(ie=""+W.key),W)E.call(W,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Oe[Ae]=W[Ae]);var ye=arguments.length-2;if(ye===1)Oe.children=Se;else if(1<ye){for(var Me=Array(ye),He=0;He<ye;He++)Me[He]=arguments[He+2];Oe.children=Me}if(U&&U.defaultProps)for(Ae in ye=U.defaultProps,ye)Oe[Ae]===void 0&&(Oe[Ae]=ye[Ae]);return N(U,ie,Oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:m,render:U}},rt.isValidElement=G,rt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:J}},rt.memo=function(U,W){return{$$typeof:h,type:U,compare:W===void 0?null:W}},rt.startTransition=function(U){var W=P.T,Se={};P.T=Se;try{var Ae=U(),Oe=P.S;Oe!==null&&Oe(Se,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,me)}catch(ie){me(ie)}finally{W!==null&&Se.types!==null&&(W.types=Se.types),P.T=W}},rt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},rt.use=function(U){return P.H.use(U)},rt.useActionState=function(U,W,Se){return P.H.useActionState(U,W,Se)},rt.useCallback=function(U,W){return P.H.useCallback(U,W)},rt.useContext=function(U){return P.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,W){return P.H.useDeferredValue(U,W)},rt.useEffect=function(U,W){return P.H.useEffect(U,W)},rt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},rt.useId=function(){return P.H.useId()},rt.useImperativeHandle=function(U,W,Se){return P.H.useImperativeHandle(U,W,Se)},rt.useInsertionEffect=function(U,W){return P.H.useInsertionEffect(U,W)},rt.useLayoutEffect=function(U,W){return P.H.useLayoutEffect(U,W)},rt.useMemo=function(U,W){return P.H.useMemo(U,W)},rt.useOptimistic=function(U,W){return P.H.useOptimistic(U,W)},rt.useReducer=function(U,W,Se){return P.H.useReducer(U,W,Se)},rt.useRef=function(U){return P.H.useRef(U)},rt.useState=function(U){return P.H.useState(U)},rt.useSyncExternalStore=function(U,W,Se){return P.H.useSyncExternalStore(U,W,Se)},rt.useTransition=function(){return P.H.useTransition()},rt.version="19.2.8",rt}var F0;function Oh(){return F0||(F0=1,td.exports=Fy()),td.exports}var bn=Oh(),nd={exports:{}},Po={},id={exports:{}},ad={};var H0;function Hy(){return H0||(H0=1,(function(s){function e(O,H){var J=O.length;O.push(H);e:for(;0<J;){var me=J-1>>>1,Ee=O[me];if(0<l(Ee,H))O[me]=H,O[J]=Ee,J=me;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],J=O.pop();if(J!==H){O[0]=J;e:for(var me=0,Ee=O.length,U=Ee>>>1;me<U;){var W=2*(me+1)-1,Se=O[W],Ae=W+1,Oe=O[Ae];if(0>l(Se,J))Ae<Ee&&0>l(Oe,Se)?(O[me]=Oe,O[Ae]=J,me=Ae):(O[me]=Se,O[W]=J,me=W);else if(Ae<Ee&&0>l(Oe,J))O[me]=Oe,O[Ae]=J,me=Ae;else break e}}return H}function l(O,H){var J=O.sortIndex-H.sortIndex;return J!==0?J:O.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();s.unstable_now=function(){return d.now()-m}}var p=[],h=[],x=1,v=null,g=3,b=!1,T=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=O)r(h),H.sortIndex=H.expirationTime,e(p,H);else break;H=i(h)}}function B(O){if(w=!1,C(O),!T)if(i(p)!==null)T=!0,L||(L=!0,j());else{var H=i(h);H!==null&&Q(B,H.startTime-O)}}var L=!1,P=-1,E=5,N=-1;function Y(){return M?!0:!(s.unstable_now()-N<E)}function G(){if(M=!1,L){var O=s.unstable_now();N=O;var H=!0;try{e:{T=!1,w&&(w=!1,I(P),P=-1),b=!0;var J=g;try{t:{for(C(O),v=i(p);v!==null&&!(v.expirationTime>O&&Y());){var me=v.callback;if(typeof me=="function"){v.callback=null,g=v.priorityLevel;var Ee=me(v.expirationTime<=O);if(O=s.unstable_now(),typeof Ee=="function"){v.callback=Ee,C(O),H=!0;break t}v===i(p)&&r(p),C(O)}else r(p);v=i(p)}if(v!==null)H=!0;else{var U=i(h);U!==null&&Q(B,U.startTime-O),H=!1}}break e}finally{v=null,g=J,b=!1}H=void 0}}finally{H?j():L=!1}}}var j;if(typeof z=="function")j=function(){z(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=G,j=function(){pe.postMessage(null)}}else j=function(){y(G,0)};function Q(O,H){P=y(function(){O(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var J=g;g=H;try{return O()}finally{g=J}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=g;g=O;try{return H()}finally{g=J}},s.unstable_scheduleCallback=function(O,H,J){var me=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,O){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,O={id:x++,callback:H,priorityLevel:O,startTime:J,expirationTime:Ee,sortIndex:-1},J>me?(O.sortIndex=J,e(h,O),i(p)===null&&O===i(h)&&(w?(I(P),P=-1):w=!0,Q(B,J-me))):(O.sortIndex=Ee,e(p,O),T||b||(T=!0,L||(L=!0,j()))),O},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(O){var H=g;return function(){var J=g;g=H;try{return O.apply(this,arguments)}finally{g=J}}}})(ad)),ad}var G0;function Gy(){return G0||(G0=1,id.exports=Hy()),id.exports}var rd={exports:{}},Un={};var V0;function Vy(){if(V0)return Un;V0=1;var s=Oh();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:h,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(p,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(p,h,null,x)},Un.flushSync=function(p){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=h,r.p=x,r.d.f()}},Un.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Un.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Un.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var x=h.as,v=m(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:b}):x==="script"&&r.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=m(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Un.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=m(x,h.crossOrigin);r.d.L(p,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(p,h){if(typeof p=="string")if(h){var x=m(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Un.requestFormReset=function(p){r.d.r(p)},Un.unstable_batchedUpdates=function(p,h){return p(h)},Un.useFormState=function(p,h,x){return d.H.useFormState(p,h,x)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var k0;function ky(){if(k0)return rd.exports;k0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rd.exports=Vy(),rd.exports}var X0;function Xy(){if(X0)return Po;X0=1;var s=Gy(),e=Oh(),i=ky();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===o)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,o=f;break}if(R===o){_=!0,o=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=c;break}if(R===o){_=!0,o=f,a=c;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var Q=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function U(t){return{current:t}}function W(t){0>Ee||(t.current=me[Ee],me[Ee]=null,Ee--)}function Se(t,n){Ee++,me[Ee]=t.current,t.current=n}var Ae=U(null),Oe=U(null),ie=U(null),ye=U(null);function Me(t,n){switch(Se(ie,n),Se(Oe,t),Se(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?r0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=r0(n),t=s0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Ae),Se(Ae,t)}function He(){W(Ae),W(Oe),W(ie)}function Te(t){t.memoizedState!==null&&Se(ye,t);var n=Ae.current,a=s0(n,t.type);n!==a&&(Se(Oe,t),Se(Ae,a))}function Ie(t){Oe.current===t&&(W(Ae),W(Oe)),ye.current===t&&(W(ye),Do._currentValue=J)}var dt,tt;function ut(t){if(dt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);dt=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+t+tt}var pt=!1;function ot(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var oe=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){oe=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){oe=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var F=_.split(`
`),ee=R.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===ee.length)for(o=F.length-1,c=ee.length-1;1<=o&&0<=c&&F[o]!==ee[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==ee[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==ee[c]){var he=`
`+F[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=c);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ut(a):""}function Lt(t,n){switch(t.tag){case 26:case 27:case 5:return ut(t.type);case 16:return ut("Lazy");case 13:return t.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return ut("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=Lt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,on=s.unstable_scheduleCallback,Yt=s.unstable_cancelCallback,an=s.unstable_shouldYield,q=s.unstable_requestPaint,Ht=s.unstable_now,wt=s.unstable_getCurrentPriorityLevel,D=s.unstable_ImmediatePriority,S=s.unstable_UserBlockingPriority,K=s.unstable_NormalPriority,re=s.unstable_LowPriority,ue=s.unstable_IdlePriority,Re=s.log,Ue=s.unstable_setDisableYieldValue,ce=null,fe=null;function we(t){if(typeof Re=="function"&&Ue(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ce,t)}catch{}}var Ge=Math.clz32?Math.clz32:je,Pe=Math.log,Le=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Pe(t)/Le|0)|0}var Je=256,at=262144,k=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Ce(o):(_&=R,_!==0?c=Ce(_):a||(a=R&~t,a!==0&&(c=Ce(a))))):(R=o&~f,R!==0?c=Ce(R):_!==0?c=Ce(_):a||(a=o&~t,a!==0&&(c=Ce(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ze(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jt(t,n,a,o,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ee=t.hiddenUpdates;for(a=_&~a;0<a;){var he=31-Ge(a),xe=1<<he;R[he]=0,F[he]=-1;var oe=ee[he];if(oe!==null)for(ee[he]=null,he=0;he<oe.length;he++){var le=oe[he];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&Nt(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:w0(t.type))}function Gr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Ni=Math.random().toString(36).slice(2),un="__reactFiber$"+Ni,En="__reactProps$"+Ni,Gn="__reactContainer$"+Ni,lr="__reactEvents$"+Ni,tl="__reactListeners$"+Ni,nl="__reactHandles$"+Ni,cr="__reactResources$"+Ni,Ea="__reactMarker$"+Ni;function Ta(t){delete t[un],delete t[En],delete t[lr],delete t[tl],delete t[nl]}function Ki(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=h0(t);t!==null;){if(a=t[un])return a;t=h0(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[un]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ur(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Aa(t){var n=t[cr];return n||(n=t[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[Ea]=!0}var il=new Set,A={};function X(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)il.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ze={};function ke(t){return qt.call(ze,t)?!0:qt.call(ne,t)?!1:te.test(t)?ze[t]=!0:(ne[t]=!0,!1)}function Ne(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function We(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Jt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,c,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?gt(t,_,$e(n)):a!=null?gt(t,_,$e(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Dn(t,n,a,o,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),At(t)}function gt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function $n(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Mi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var It=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $t(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||It.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&$t(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&$t(t,f,n[f])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fr(t){return Ra.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var Qc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function ap(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[En]||null;if(!c)throw Error(r(90));Ve(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Jt(o)}break e;case"textarea":$n(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var Jc=!1;function rp(t,n,a){if(Jc)return t(n,a);Jc=!0;try{var o=t(n);return o}finally{if(Jc=!1,(Vr!==null||kr!==null)&&(Xl(),Vr&&(n=Vr,t=kr,kr=Vr=null,ap(n),t)))for(n=0;n<t.length;n++)ap(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Ji)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{$c=!1}var Ca=null,eu=null,al=null;function sp(){if(al)return al;var t,n=eu,a=n.length,o,c="value"in Ca?Ca.value:Ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===c[f-o];o++);return al=c.slice(t,1<o?1-o:void 0)}function rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function op(){return!1}function Vn(t){function n(a,o,c,f,_){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:op,this.isPropagationStopped=op,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Vn(dr),Zs=v({},dr,{view:0,detail:0}),Pv=Vn(Zs),tu,nu,Ks,ll=v({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(tu=t.screenX-Ks.screenX,nu=t.screenY-Ks.screenY):nu=tu=0,Ks=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),lp=Vn(ll),Iv=v({},ll,{dataTransfer:0}),zv=Vn(Iv),Bv=v({},Zs,{relatedTarget:0}),iu=Vn(Bv),Fv=v({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Vn(Fv),Gv=v({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vv=Vn(Gv),kv=v({},dr,{data:0}),cp=Vn(kv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qv[t])?!!n[t]:!1}function au(){return Yv}var Zv=v({},Zs,{key:function(t){if(t.key){var n=Xv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kv=Vn(Zv),Qv=v({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Vn(Qv),jv=v({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Jv=Vn(jv),$v=v({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=Vn($v),tx=v({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Vn(tx),ix=v({},dr,{newState:0,oldState:0}),ax=Vn(ix),rx=[9,13,27,32],ru=Ji&&"CompositionEvent"in window,Qs=null;Ji&&"documentMode"in document&&(Qs=document.documentMode);var sx=Ji&&"TextEvent"in window&&!Qs,fp=Ji&&(!ru||Qs&&8<Qs&&11>=Qs),dp=" ",hp=!1;function pp(t,n){switch(t){case"keyup":return rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function ox(t,n){switch(t){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(hp=!0,dp);case"textInput":return t=n.data,t===dp&&hp?null:t;default:return null}}function lx(t,n){if(Xr)return t==="compositionend"||!ru&&pp(t,n)?(t=sp(),al=eu=Ca=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cx[t.type]:n==="textarea"}function _p(t,n,a,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=jl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var js=null,Js=null;function ux(t){$g(t,0)}function cl(t){var n=ur(t);if(Jt(n))return t}function vp(t,n){if(t==="change")return n}var xp=!1;if(Ji){var su;if(Ji){var ou="oninput"in document;if(!ou){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),ou=typeof yp.oninput=="function"}su=ou}else su=!1;xp=su&&(!document.documentMode||9<document.documentMode)}function Sp(){js&&(js.detachEvent("onpropertychange",Mp),Js=js=null)}function Mp(t){if(t.propertyName==="value"&&cl(Js)){var n=[];_p(n,Js,t,jc(t)),rp(ux,n)}}function fx(t,n,a){t==="focusin"?(Sp(),js=n,Js=a,js.attachEvent("onpropertychange",Mp)):t==="focusout"&&Sp()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Js)}function hx(t,n){if(t==="click")return cl(n)}function px(t,n){if(t==="input"||t==="change")return cl(n)}function mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:mx;function $s(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!qt.call(n,c)||!ti(t[c],n[c]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,n){var a=bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ap(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function lu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var gx=Ji&&"documentMode"in document&&11>=document.documentMode,Wr=null,cu=null,eo=null,uu=!1;function Rp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||Wr==null||Wr!==Xt(o)||(o=Wr,"selectionStart"in o&&lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=jl(cu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Wr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},fu={},Cp={};Ji&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function pr(t){if(fu[t])return fu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return fu[t]=n[a];return t}var wp=pr("animationend"),Dp=pr("animationiteration"),Up=pr("animationstart"),_x=pr("transitionrun"),vx=pr("transitionstart"),xx=pr("transitioncancel"),Lp=pr("transitionend"),Np=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Ei(t,n){Np.set(t,n),X(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],Yr=0,hu=0;function fl(){for(var t=Yr,n=hu=Yr=0;n<t;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var c=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&Op(a,c,f)}}function dl(t,n,a,o){di[Yr++]=t,di[Yr++]=n,di[Yr++]=a,di[Yr++]=o,hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function pu(t,n,a,o){return dl(t,n,a,o),hl(t)}function mr(t,n){return dl(t,null,null,n),hl(t)}function Op(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ge(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<bo)throw bo=0,Ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function yx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,o){return new yx(t,n,a,o)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,c,f){var _=0;if(o=t,typeof t=="function")mu(t)&&(_=1);else if(typeof t=="string")_=Ty(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ni(31,a,n,c),t.elementType=N,t.lanes=f,t;case w:return gr(a.children,c,f,n);case M:_=8,c|=24;break;case y:return t=ni(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case B:return t=ni(13,a,n,c),t.elementType=B,t.lanes=f,t;case L:return t=ni(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:_=10;break e;case I:_=9;break e;case C:_=11;break e;case P:_=14;break e;case E:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ni(_,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function gr(t,n,a,o){return t=ni(7,t,o,n),t.lanes=a,t}function gu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Ip(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function _u(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zp=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},zp.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var Kr=[],Qr=0,ml=null,to=0,pi=[],mi=0,wa=null,Pi=1,Ii="";function ea(t,n){Kr[Qr++]=to,Kr[Qr++]=ml,ml=t,to=n}function Bp(t,n,a){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=wa,wa=t;var o=Pi;t=Ii;var c=32-Ge(o)-1;o&=~(1<<c),a+=1;var f=32-Ge(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Pi=1<<32-Ge(n)+c|a<<c|o,Ii=f+t}else Pi=1<<f|a<<c|o,Ii=t}function vu(t){t.return!==null&&(ea(t,1),Bp(t,1,0))}function xu(t){for(;t===ml;)ml=Kr[--Qr],Kr[Qr]=null,to=Kr[--Qr],Kr[Qr]=null;for(;t===wa;)wa=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function Fp(t,n){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=wa,Pi=n.id,Ii=n.overflow,wa=t}var Tn=null,Kt=null,bt=!1,Da=null,gi=!1,yu=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(hi(n,t)),yu}function Hp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[un]=t,n[En]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)vt(To[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Mi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||i0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ua(t,!0)}function Gp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Tn=Tn.return}}function jr(t){if(t!==Tn)return!1;if(!bt)return Gp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ff(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ua(t),Gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=d0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=d0(t)}else n===27?(n=Kt,Wa(t.type)?(t=Xf,Xf=null,Kt=t):Kt=n):Kt=Tn?vi(t.stateNode.nextSibling):null;return!0}function _r(){Kt=Tn=null,bt=!1}function Su(){var t=Da;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Da=null),t}function no(t){Da===null?Da=[t]:Da.push(t)}var Mu=U(null),vr=null,ta=null;function La(t,n,a){Se(Mu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Mu.current,W(Mu)}function bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Eu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=c;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),bu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Jr(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=c.type;ti(c.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(c===ye.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}c=c.return}t!==null&&Eu(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){vr=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Vp(vr,t)}function _l(t,n){return vr===null&&xr(t),Vp(t,n)}function Vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(r(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var Sx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Mx=s.unstable_scheduleCallback,bx=s.unstable_NormalPriority,dn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new Sx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&Mx(bx,function(){t.controller.abort()})}var ao=null,Au=0,$r=0,es=null;function Ex(t,n){if(ao===null){var a=ao=[];Au=0,$r=Df(),es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Au++,n.then(kp,kp),n}function kp(){if(--Au===0&&ao!==null){es!==null&&(es.status="fulfilled");var t=ao;ao=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Tx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Xp=O.S;O.S=function(t,n){Rg=Ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ex(t,n),Xp!==null&&Xp(t,n)};var yr=U(null);function Ru(){var t=yr.current;return t!==null?t:Wt.pooledCache}function vl(t,n){n===null?Se(yr,yr.current):Se(yr,n.pool)}function Wp(){var t=Ru();return t===null?null:{parent:dn._currentValue,pool:t}}var ts=Error(r(460)),Cu=Error(r(474)),xl=Error(r(542)),yl={then:function(){}};function qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw Mr=n,ts}}function Sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,ts):a}}var Mr=null;function Zp(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function Kp(t){if(t===ts||t===xl)throw Error(r(483))}var ns=null,ro=0;function Sl(t){var n=ro;return ro+=1,ns===null&&(ns=[]),Yp(ns,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ml(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){function n(Z,V){if(t){var $=Z.deletions;$===null?(Z.deletions=[V],Z.flags|=16):$.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=$i(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<V?(Z.flags|=67108866,V):$):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,V,$,ve){return V===null||V.tag!==6?(V=gu($,Z.mode,ve),V.return=Z,V):(V=c(V,$),V.return=Z,V)}function F(Z,V,$,ve){var et=$.type;return et===w?he(Z,V,$.props.children,ve,$.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===E&&Sr(et)===V.type)?(V=c(V,$.props),so(V,$),V.return=Z,V):(V=pl($.type,$.key,$.props,null,Z.mode,ve),so(V,$),V.return=Z,V)}function ee(Z,V,$,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=_u($,Z.mode,ve),V.return=Z,V):(V=c(V,$.children||[]),V.return=Z,V)}function he(Z,V,$,ve,et){return V===null||V.tag!==7?(V=gr($,Z.mode,ve,et),V.return=Z,V):(V=c(V,$),V.return=Z,V)}function xe(Z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=gu(""+V,Z.mode,$),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return $=pl(V.type,V.key,V.props,null,Z.mode,$),so($,V),$.return=Z,$;case T:return V=_u(V,Z.mode,$),V.return=Z,V;case E:return V=Sr(V),xe(Z,V,$)}if(Q(V)||j(V))return V=gr(V,Z.mode,$,null),V.return=Z,V;if(typeof V.then=="function")return xe(Z,Sl(V),$);if(V.$$typeof===z)return xe(Z,_l(Z,V),$);Ml(Z,V)}return null}function oe(Z,V,$,ve){var et=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return et!==null?null:R(Z,V,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return $.key===et?F(Z,V,$,ve):null;case T:return $.key===et?ee(Z,V,$,ve):null;case E:return $=Sr($),oe(Z,V,$,ve)}if(Q($)||j($))return et!==null?null:he(Z,V,$,ve,null);if(typeof $.then=="function")return oe(Z,V,Sl($),ve);if($.$$typeof===z)return oe(Z,V,_l(Z,$),ve);Ml(Z,$)}return null}function le(Z,V,$,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get($)||null,R(V,Z,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return Z=Z.get(ve.key===null?$:ve.key)||null,F(V,Z,ve,et);case T:return Z=Z.get(ve.key===null?$:ve.key)||null,ee(V,Z,ve,et);case E:return ve=Sr(ve),le(Z,V,$,ve,et)}if(Q(ve)||j(ve))return Z=Z.get($)||null,he(V,Z,ve,et,null);if(typeof ve.then=="function")return le(Z,V,$,Sl(ve),et);if(ve.$$typeof===z)return le(Z,V,$,_l(V,ve),et);Ml(V,ve)}return null}function Ye(Z,V,$,ve){for(var et=null,Rt=null,Ke=V,ft=V=0,yt=null;Ke!==null&&ft<$.length;ft++){Ke.index>ft?(yt=Ke,Ke=null):yt=Ke.sibling;var Ct=oe(Z,Ke,$[ft],ve);if(Ct===null){Ke===null&&(Ke=yt);break}t&&Ke&&Ct.alternate===null&&n(Z,Ke),V=f(Ct,V,ft),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,Ke=yt}if(ft===$.length)return a(Z,Ke),bt&&ea(Z,ft),et;if(Ke===null){for(;ft<$.length;ft++)Ke=xe(Z,$[ft],ve),Ke!==null&&(V=f(Ke,V,ft),Rt===null?et=Ke:Rt.sibling=Ke,Rt=Ke);return bt&&ea(Z,ft),et}for(Ke=o(Ke);ft<$.length;ft++)yt=le(Ke,Z,ft,$[ft],ve),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?ft:yt.key),V=f(yt,V,ft),Rt===null?et=yt:Rt.sibling=yt,Rt=yt);return t&&Ke.forEach(function(Qa){return n(Z,Qa)}),bt&&ea(Z,ft),et}function nt(Z,V,$,ve){if($==null)throw Error(r(151));for(var et=null,Rt=null,Ke=V,ft=V=0,yt=null,Ct=$.next();Ke!==null&&!Ct.done;ft++,Ct=$.next()){Ke.index>ft?(yt=Ke,Ke=null):yt=Ke.sibling;var Qa=oe(Z,Ke,Ct.value,ve);if(Qa===null){Ke===null&&(Ke=yt);break}t&&Ke&&Qa.alternate===null&&n(Z,Ke),V=f(Qa,V,ft),Rt===null?et=Qa:Rt.sibling=Qa,Rt=Qa,Ke=yt}if(Ct.done)return a(Z,Ke),bt&&ea(Z,ft),et;if(Ke===null){for(;!Ct.done;ft++,Ct=$.next())Ct=xe(Z,Ct.value,ve),Ct!==null&&(V=f(Ct,V,ft),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return bt&&ea(Z,ft),et}for(Ke=o(Ke);!Ct.done;ft++,Ct=$.next())Ct=le(Ke,Z,ft,Ct.value,ve),Ct!==null&&(t&&Ct.alternate!==null&&Ke.delete(Ct.key===null?ft:Ct.key),V=f(Ct,V,ft),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Ke.forEach(function(Iy){return n(Z,Iy)}),bt&&ea(Z,ft),et}function kt(Z,V,$,ve){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case b:e:{for(var et=$.key;V!==null;){if(V.key===et){if(et=$.type,et===w){if(V.tag===7){a(Z,V.sibling),ve=c(V,$.props.children),ve.return=Z,Z=ve;break e}}else if(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===E&&Sr(et)===V.type){a(Z,V.sibling),ve=c(V,$.props),so(ve,$),ve.return=Z,Z=ve;break e}a(Z,V);break}else n(Z,V);V=V.sibling}$.type===w?(ve=gr($.props.children,Z.mode,ve,$.key),ve.return=Z,Z=ve):(ve=pl($.type,$.key,$.props,null,Z.mode,ve),so(ve,$),ve.return=Z,Z=ve)}return _(Z);case T:e:{for(et=$.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Z,V.sibling),ve=c(V,$.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,V);break}else n(Z,V);V=V.sibling}ve=_u($,Z.mode,ve),ve.return=Z,Z=ve}return _(Z);case E:return $=Sr($),kt(Z,V,$,ve)}if(Q($))return Ye(Z,V,$,ve);if(j($)){if(et=j($),typeof et!="function")throw Error(r(150));return $=et.call($),nt(Z,V,$,ve)}if(typeof $.then=="function")return kt(Z,V,Sl($),ve);if($.$$typeof===z)return kt(Z,V,_l(Z,$),ve);Ml(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Z,V.sibling),ve=c(V,$),ve.return=Z,Z=ve):(a(Z,V),ve=gu($,Z.mode,ve),ve.return=Z,Z=ve),_(Z)):a(Z,V)}return function(Z,V,$,ve){try{ro=0;var et=kt(Z,V,$,ve);return ns=null,et}catch(Ke){if(Ke===ts||Ke===xl)throw Ke;var Rt=ni(29,Ke,null,Z.mode);return Rt.lanes=ve,Rt.return=Z,Rt}}}var br=Qp(!0),jp=Qp(!1),Na=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=hl(t),Op(t,null,a),n}return dl(t,o,n,a),hl(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,jn(t,a)}}function Uu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lu=!1;function lo(){if(Lu){var t=es;if(t!==null)throw t}}function co(t,n,a,o){Lu=!1;var c=t.updateQueue;Na=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var F=R,ee=F.next;F.next=null,_===null?f=ee:_.next=ee,_=F;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==_&&(R===null?he.firstBaseUpdate=ee:R.next=ee,he.lastBaseUpdate=F))}if(f!==null){var xe=c.baseState;_=0,he=ee=F=null,R=f;do{var oe=R.lane&-536870913,le=oe!==R.lane;if(le?(xt&oe)===oe:(o&oe)===oe){oe!==0&&oe===$r&&(Lu=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,nt=R;oe=n;var kt=a;switch(nt.tag){case 1:if(Ye=nt.payload,typeof Ye=="function"){xe=Ye.call(kt,xe,oe);break e}xe=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=nt.payload,oe=typeof Ye=="function"?Ye.call(kt,xe,oe):Ye,oe==null)break e;xe=v({},xe,oe);break e;case 2:Na=!0}}oe=R.callback,oe!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ee=he=le,F=xe):he=he.next=le,_|=oe;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);he===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=ee,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Ha|=_,t.lanes=_,t.memoizedState=xe}}function Jp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function $p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jp(a[t],n)}var is=U(null),bl=U(0);function em(t,n){t=fa,Se(bl,t),Se(is,n),fa=t|n.baseLanes}function Nu(){Se(bl,fa),Se(is,is.current)}function Ou(){fa=bl.current,W(is),W(bl)}var ii=U(null),_i=null;function Ia(t){var n=t.alternate;Se(ln,ln.current&1),Se(ii,t),_i===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(_i=t)}function Pu(t){Se(ln,ln.current),Se(ii,t),_i===null&&(_i=t)}function tm(t){t.tag===22?(Se(ln,ln.current),Se(ii,t),_i===null&&(_i=t)):za()}function za(){Se(ln,ln.current),Se(ii,ii.current)}function ai(t){W(ii),_i===t&&(_i=null),W(ln)}var ln=U(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ct=null,Gt=null,hn=null,Tl=!1,as=!1,Er=!1,Al=0,uo=0,rs=null,Ax=0;function rn(){throw Error(r(321))}function Iu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function zu(t,n,a,o,c,f){return ia=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Bm:Ju,Er=!1,f=a(o,c),Er=!1,as&&(f=im(n,a,o,c)),nm(t),f}function nm(t){O.H=po;var n=Gt!==null&&Gt.next!==null;if(ia=0,hn=Gt=ct=null,Tl=!1,uo=0,rs=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&gl(t)&&(pn=!0))}function im(t,n,a,o){ct=t;var c=0;do{if(as&&(rs=null),uo=0,as=!1,25<=c)throw Error(r(301));if(c+=1,hn=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Fm,f=n(a,o)}while(as);return f}function Rx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Bu(){var t=Al!==0;return Al=0,t}function Fu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Hu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}ia=0,hn=Gt=ct=null,as=!1,uo=Al=0,rs=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ct.memoizedState=hn=t:hn=hn.next=t,hn}function cn(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=hn===null?ct.memoizedState:hn.next;if(n!==null)hn=n,Gt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},hn===null?ct.memoizedState=hn=t:hn=hn.next=t}return hn}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,rs===null&&(rs=[]),t=Yp(rs,t,n),n=ct,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Bm:Ju),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===z)return An(t)}throw Error(r(438,String(t)))}function Gu(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=cn();return Vu(n,Gt,t)}function Vu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=_=null,F=null,ee=n,he=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(xt&xe)===xe:(ia&xe)===xe){var oe=ee.revertLane;if(oe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===$r&&(he=!0);else if((ia&oe)===oe){ee=ee.next,oe===$r&&(he=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(R=F=xe,_=f):F=F.next=xe,ct.lanes|=oe,Ha|=oe;xe=ee.action,Er&&a(f,xe),f=ee.hasEagerState?ee.eagerState:a(f,xe)}else oe={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(R=F=oe,_=f):F=F.next=oe,ct.lanes|=xe,Ha|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(F===null?_=f:F.next=R,!ti(f,t.memoizedState)&&(pn=!0,he&&(a=es,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ku(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);ti(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function am(t,n,a){var o=ct,c=cn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ti((Gt||c).memoizedState,a);if(_&&(c.memoizedState=a,pn=!0),c=c.queue,qu(om.bind(null,o,c,t),[t]),c.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},sm.bind(null,o,c,a,n),null),Wt===null)throw Error(r(349));f||(ia&127)!==0||rm(o,n,a)}return a}function rm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Rl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sm(t,n,a,o){n.value=a,n.getSnapshot=o,lm(n)&&cm(t)}function om(t,n,a){return a(function(){lm(n)&&cm(t)})}function lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function cm(t){var n=mr(t,2);n!==null&&Yn(n,t,2)}function Xu(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Er){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function um(t,n,a,o){return t.baseState=a,Vu(t,Gt,typeof o=="function"?o:aa)}function Cx(t,n,a,o,c){if(Ll(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(c,o),F=O.S;F!==null&&F(_,R),dm(t,n,R)}catch(ee){Wu(t,n,ee)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(c,o),dm(t,n,f)}catch(ee){Wu(t,n,ee)}}function dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){hm(t,n,o)},function(o){return Wu(t,n,o)}):hm(t,n,a)}function hm(t,n,a){n.status="fulfilled",n.value=a,pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,fm(t,a)))}function Wu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,pm(n),n=n.next;while(n!==o)}t.action=null}function pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function mm(t,n){return n}function gm(t,n){if(bt){var a=Wt.formState;if(a!==null){e:{var o=ct;if(bt){if(Kt){t:{for(var c=Kt,f=gi;c.nodeType!==8;){if(!f){c=null;break t}if(c=vi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Kt=vi(c.nextSibling),o=c.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:n},a.queue=o,a=Pm.bind(null,ct,o),o.dispatch=a,o=Xu(!1),f=ju.bind(null,ct,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Cx.bind(null,ct,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function _m(t){var n=cn();return vm(n,Gt,t)}function vm(t,n,a){if(n=Vu(t,n,mm)[0],t=wl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(_){throw _===ts?xl:_}else o=n;n=cn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,ss(9,{destroy:void 0},wx.bind(null,c,a),null)),[o,f,t]}function wx(t,n){t.action=n}function xm(t){var n=cn(),a=Gt;if(a!==null)return vm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ss(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Rl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function ym(){return cn().memoizedState}function Dl(t,n,a,o){var c=Bn();ct.flags|=t,c.memoizedState=ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ul(t,n,a,o){var c=cn();o=o===void 0?null:o;var f=c.memoizedState.inst;Gt!==null&&o!==null&&Iu(o,Gt.memoizedState.deps)?c.memoizedState=ss(n,f,a,o):(ct.flags|=t,c.memoizedState=ss(1|n,f,a,o))}function Sm(t,n){Dl(8390656,8,t,n)}function qu(t,n){Ul(2048,8,t,n)}function Dx(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Rl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Mm(t){var n=cn().memoizedState;return Dx({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function bm(t,n){return Ul(4,2,t,n)}function Em(t,n){return Ul(4,4,t,n)}function Tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Am(t,n,a){a=a!=null?a.concat([t]):null,Ul(4,4,Tm.bind(null,n,t),a)}function Yu(){}function Rm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Cm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=t(),Er){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o}function Zu(t,n,a){return a===void 0||(ia&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=wg(),ct.lanes|=t,Ha|=t,a)}function wm(t,n,a,o){return ti(a,n)?a:is.current!==null?(t=Zu(t,a,o),ti(t,n)||(pn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(xt&261930)===0?(pn=!0,t.memoizedState=a):(t=wg(),ct.lanes|=t,Ha|=t,n)}function Dm(t,n,a,o,c){var f=H.p;H.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,ju(t,!1,n,a);try{var F=c(),ee=O.S;if(ee!==null&&ee(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var he=Tx(F,o);ho(t,n,he,oi(t))}else ho(t,n,o,oi(t))}catch(xe){ho(t,n,{then:function(){},status:"rejected",reason:xe},oi())}finally{H.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function Ux(){}function Ku(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Um(t).queue;Dm(t,c,n,J,a===null?Ux:function(){return Lm(t),a(o)})}function Um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Lm(t){var n=Um(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},oi())}function Qu(){return An(Do)}function Nm(){return cn().memoizedState}function Om(){return cn().memoizedState}function Lx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Yn(o,n,a),oo(o,n,a)),n={cache:Tu()},t.payload=n;return}n=n.return}}function Nx(t,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(t)?Im(n,a):(a=pu(t,n,a,o),a!==null&&(Yn(a,t,o),zm(a,n,o)))}function Pm(t,n,a){var o=oi();ho(t,n,a,o)}function ho(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(t))Im(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,ti(R,_))return dl(t,n,c,0),Wt===null&&fl(),!1}catch{}if(a=pu(t,n,c,o),a!==null)return Yn(a,t,o),zm(a,n,o),!0}return!1}function ju(t,n,a,o){if(o={lane:2,revertLane:Df(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ll(t)){if(n)throw Error(r(479))}else n=pu(t,a,o,2),n!==null&&Yn(n,t,2)}function Ll(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Im(t,n){as=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,jn(t,a)}}var po={readContext:An,use:Cl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};po.useEffectEvent=rn;var Bm={readContext:An,use:Cl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Sm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(Er){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(Er){we(!0);try{a(n)}finally{we(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Nx.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Xu(t);var n=t.queue,a=Pm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(t,n){var a=Bn();return Zu(a,t,n)},useTransition:function(){var t=Xu(!1);return t=Dm.bind(null,ct,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,c=Bn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(xt&127)!==0||rm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Sm(om.bind(null,o,f,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},sm.bind(null,o,f,a,n),null),a},useId:function(){var t=Bn(),n=Wt.identifierPrefix;if(bt){var a=Ii,o=Pi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ax++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qu,useFormState:gm,useActionState:gm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Gu,useCacheRefresh:function(){return Bn().memoizedState=Lx.bind(null,ct)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ju={readContext:An,use:Cl,useCallback:Rm,useContext:An,useEffect:qu,useImperativeHandle:Am,useInsertionEffect:bm,useLayoutEffect:Em,useMemo:Cm,useReducer:wl,useRef:ym,useState:function(){return wl(aa)},useDebugValue:Yu,useDeferredValue:function(t,n){var a=cn();return wm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=wl(aa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:Qu,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=cn();return um(a,Gt,t,n)},useMemoCache:Gu,useCacheRefresh:Om};Ju.useEffectEvent=Mm;var Fm={readContext:An,use:Cl,useCallback:Rm,useContext:An,useEffect:qu,useImperativeHandle:Am,useInsertionEffect:bm,useLayoutEffect:Em,useMemo:Cm,useReducer:ku,useRef:ym,useState:function(){return ku(aa)},useDebugValue:Yu,useDeferredValue:function(t,n){var a=cn();return Gt===null?Zu(a,t,n):wm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=ku(aa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:Qu,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=cn();return Gt!==null?um(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Om};Fm.useEffectEvent=Mm;function $u(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=oi(),c=Oa(o);c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,o),n!==null&&(Yn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=oi(),c=Oa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,o),n!==null&&(Yn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Yn(n,t,a),oo(n,t,a))}};function Hm(t,n,a,o,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(c,f):!0}function Gm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ef.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Vm(t){ul(t)}function km(t){console.error(t)}function Xm(t){ul(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function qm(t){return t=Oa(t),t.tag=3,t}function Ym(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Wm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Wm(n,a,o),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ox(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?Wl():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Rf(t,o,c)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Rf(t,o,c)),!1}throw Error(r(435,a.tag))}return Rf(t,o,c),Wl(),!1}if(bt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==yu&&(t=Error(r(422),{cause:o}),no(hi(t,a)))):(o!==yu&&(n=Error(r(423),{cause:o}),no(hi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=hi(o,a),c=tf(t.stateNode,o,c),Uu(t,c),sn!==4&&(sn=2)),!1;var f=Error(r(520),{cause:o});if(f=hi(f,a),Mo===null?Mo=[f]:Mo.push(f),sn!==4&&(sn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=tf(a.stateNode,o,t),Uu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=qm(c),Ym(c,t,a,o),Uu(a,c),!1}a=a.return}while(a!==null);return!1}var nf=Error(r(461)),pn=!1;function Rn(t,n,a,o){n.child=t===null?jp(n,null,a,o):br(n,t.child,a,o)}function Zm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return xr(n),o=zu(t,n,a,_,f,c),R=Bu(),t!==null&&!pn?(Fu(t,n,c),ra(t,n,c)):(bt&&R&&vu(n),n.flags|=1,Rn(t,n,o,c),n.child)}function Km(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Qm(t,n,f,o,c)):(t=pl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ff(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(_,o)&&t.ref===n.ref)return ra(t,n,c)}return n.flags|=1,t=$i(f,o),t.ref=n.ref,t.return=n,n.child=t}function Qm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if($s(f,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=f,ff(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ra(t,n,c)}return af(t,n,a,o,c)}function jm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Jm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?em(n,f):Nu(),tm(n);else return o=n.lanes=536870912,Jm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),em(n,f),za(),n.memoizedState=null):(t!==null&&vl(n,null),Nu(),za());return Rn(t,n,c,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jm(t,n,a,o,c){var f=Ru();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Nu(),tm(n),t!==null&&Jr(t,n,o,!0),n.childLanes=c,null}function Ol(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $m(t,n,a){return br(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function Px(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Ol(n,o),n.lanes=536870912,mo(null,t);if(Pu(n),(t=Kt)?(t=f0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Tn=n,Kt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Ol(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Pu(n),c)if(n.flags&256)n.flags&=-257,n=$m(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||Jr(t,n,a,!1),c=(a&t.childLanes)!==0,pn||c){if(o=Wt,o!==null&&(_=Jn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,mr(t,_),Yn(o,t,_),nf;Wl(),n=$m(t,n,a)}else t=f.treeContext,Kt=vi(_.nextSibling),Tn=n,bt=!0,Da=null,gi=!1,t!==null&&Fp(n,t),n=Ol(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function af(t,n,a,o,c){return xr(n),a=zu(t,n,a,o,void 0,c),o=Bu(),t!==null&&!pn?(Fu(t,n,c),ra(t,n,c)):(bt&&o&&vu(n),n.flags|=1,Rn(t,n,a,c),n.child)}function eg(t,n,a,o,c,f){return xr(n),n.updateQueue=null,a=im(n,o,a,c),nm(t),o=Bu(),t!==null&&!pn?(Fu(t,n,f),ra(t,n,f)):(bt&&o&&vu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function tg(t,n,a,o,c){if(xr(n),n.stateNode===null){var f=Zr,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Zr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&($u(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ef.enqueueReplaceState(f,f.state,null),co(n,o,f,c),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,F=Tr(a,R);f.props=F;var ee=f.context,he=a.contextType;_=Zr,typeof he=="object"&&he!==null&&(_=An(he));var xe=a.getDerivedStateFromProps;he=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ee!==_)&&Gm(n,f,o,_),Na=!1;var oe=n.memoizedState;f.state=oe,co(n,o,f,c),lo(),ee=n.memoizedState,R||oe!==ee||Na?(typeof xe=="function"&&($u(n,a,xe,o),ee=n.memoizedState),(F=Na||Hm(n,a,F,o,oe,ee,_))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=_,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Du(t,n),_=n.memoizedProps,he=Tr(a,_),f.props=he,xe=n.pendingProps,oe=f.context,ee=a.contextType,F=Zr,typeof ee=="object"&&ee!==null&&(F=An(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||oe!==F)&&Gm(n,f,o,F),Na=!1,oe=n.memoizedState,f.state=oe,co(n,o,f,c),lo();var le=n.memoizedState;_!==xe||oe!==le||Na||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof R=="function"&&($u(n,a,R,o),le=n.memoizedState),(he=Na||Hm(n,a,he,o,oe,le,F)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=F,o=he):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Pl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,c),n.child=br(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ra(t,n,c),t}function ng(t,n,a,o){return _r(),n.flags|=256,Rn(t,n,a,o),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(t){return{baseLanes:t,cachePool:Wp()}}function of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function ig(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(c?Ia(n):za(),(t=Kt)?(t=f0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Tn=n,Kt=null)):t=null,t===null)throw Ua(n);return kf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(za(),c=n.mode,R=Il({mode:"hidden",children:R},c),o=gr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=sf(a),o.childLanes=of(t,_,a),n.memoizedState=rf,mo(null,o)):(Ia(n),lf(n,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=cf(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=o.fallback,c=n.mode,o=Il({mode:"visible",children:o.children},c),R=gr(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=sf(a),o.childLanes=of(t,_,a),n.memoizedState=rf,n=mo(null,o));else if(Ia(n),kf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ee=_.dgst;_=ee,o=Error(r(419)),o.stack="",o.digest=_,no({value:o,source:null,stack:null}),n=cf(t,n,a)}else if(pn||Jr(t,n,a,!1),_=(a&t.childLanes)!==0,pn||_){if(_=Wt,_!==null&&(o=Jn(_,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,mr(t,o),Yn(_,t,o),nf;Vf(R)||Wl(),n=cf(t,n,a)}else Vf(R)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Kt=vi(R.nextSibling),Tn=n,bt=!0,Da=null,gi=!1,t!==null&&Fp(n,t),n=lf(n,o.children),n.flags|=4096);return n}return c?(za(),R=o.fallback,c=n.mode,F=t.child,ee=F.sibling,o=$i(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ee!==null?R=$i(ee,R):(R=gr(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,mo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=sf(a):(c=R.cachePool,c!==null?(F=dn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Wp(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=of(t,_,a),n.memoizedState=rf,mo(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function lf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function cf(t,n,a){return br(n,t.child,null,a),t=lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ag(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),bu(t.return,n,a)}function uf(t,n,a,o,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function rg(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var _=ln.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Se(ln,_),Rn(t,n,o,a),o=bt?to:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,a,n);else if(t.tag===19)ag(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),uf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&El(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}uf(n,!0,a,null,f,o);break;case"together":uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function Ix(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),La(n,dn,t.memoizedState.cache),_r();break;case 27:case 5:Te(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(t,n,a):(Ia(n),t=ra(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return rg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(ln,ln.current),o)break;return null;case 22:return n.lanes=0,jm(t,n,a,n.pendingProps);case 24:La(n,dn,t.memoizedState.cache)}return ra(t,n,a)}function sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!ff(t,a)&&(n.flags&128)===0)return pn=!1,Ix(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,bt&&(n.flags&1048576)!==0&&Bp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Sr(n.elementType),n.type=t,typeof t=="function")mu(t)?(o=Tr(t,o),n.tag=1,n=tg(null,n,t,o,a)):(n.tag=0,n=af(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===C){n.tag=11,n=Zm(null,n,t,o,a);break e}else if(c===P){n.tag=14,n=Km(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return af(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Tr(o,n.pendingProps),tg(t,n,o,c,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Du(t,n),co(n,o,null,a);var _=n.memoizedState;if(o=_.cache,La(n,dn,o),o!==f.cache&&Eu(n,[dn],a,!0),lo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ng(t,n,o,a);break e}else if(o!==c){c=hi(Error(r(424)),n),no(c),n=ng(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=vi(t.firstChild),Tn=n,bt=!0,Da=null,gi=!0,a=jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_r(),o===c){n=ra(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=_0(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=Jl(ie.current).createElement(a),o[un]=n,o[En]=t,Cn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=_0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Te(n),t===null&&bt&&(o=n.stateNode=p0(n.type,n.pendingProps,ie.current),Tn=n,gi=!0,c=Kt,Wa(n.type)?(Xf=c,Kt=vi(o.firstChild)):Kt=c),Rn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((c=o=Kt)&&(o=dy(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,Tn=n,Kt=vi(o.firstChild),gi=!1,c=!0):c=!1),c||Ua(n)),Te(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Ff(c,f)?o=null:_!==null&&Ff(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=zu(t,n,Rx,null,null,a),Do._currentValue=c),Pl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Kt)&&(a=hy(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Tn=n,Kt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return ig(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Zm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,xr(n),c=An(c),o=o(c),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Km(t,n,n.type,n.pendingProps,a);case 15:return Qm(t,n,n.type,n.pendingProps,a);case 19:return rg(t,n,a);case 31:return Px(t,n,a);case 22:return jm(t,n,a,n.pendingProps);case 24:return xr(n),o=An(dn),t===null?(c=Ru(),c===null&&(c=Wt,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wu(n),La(n,dn,c)):((t.lanes&a)!==0&&(Du(t,n),co(n,null,null,a),lo()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),La(n,dn,o)):(o=f.cache,La(n,dn,o),o!==c.cache&&Eu(n,[dn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function df(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Ng())t.flags|=8192;else throw Mr=yl,Cu}else t.flags&=-16777217}function og(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M0(n))if(Ng())t.flags|=8192;else throw Mr=yl,Cu}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,us|=n)}function go(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function zx(t,n,a){var o=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(dn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),Qt(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Qt(n),og(n,f)):(Qt(n),df(n,c,null,o,a))):f?f!==t.memoizedState?(sa(n),Qt(n),og(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Qt(n),df(n,c,t,o,a)),null;case 27:if(Ie(n),a=ie.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Ae.current,jr(n)?Hp(n):(t=p0(c,o,a),n.stateNode=t,sa(n))}return Qt(n),null;case 5:if(Ie(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Ae.current,jr(n))Hp(n);else{var _=Jl(ie.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(c,{is:o.is}):_.createElement(c)}}f[un]=n,f[En]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Qt(n),df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||i0(t.nodeValue,a)),t||Ua(n,!0)}else t=Jl(t).createTextNode(o),t[un]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[un]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[un]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),c=!1}else c=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Qt(n),null);case 4:return He(),t===null&&Of(n.stateNode.containerInfo),Qt(n),null;case 10:return na(n.type),Qt(n),null;case 19:if(W(ln),o=n.memoizedState,o===null)return Qt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)go(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,go(o,!1),t=f.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Pp(a,t),a=a.sibling;return Se(ln,ln.current&1|2),bt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ht()>Vl&&(n.flags|=128,c=!0,go(o,!1),n.lanes=4194304)}else{if(!c)if(t=El(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*Ht()-o.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,c=!0,go(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ht(),t.sibling=null,a=ln.current,Se(ln,c?a&1|2:a&1),bt&&ea(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ai(n),Ou(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&W(yr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(dn),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Bx(t,n){switch(xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(dn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(ln),null;case 4:return He(),null;case 10:return na(n.type),null;case 22:case 23:return ai(n),Ou(),t!==null&&W(yr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(dn),null;case 25:return null;default:return null}}function lg(t,n){switch(xu(n),n.tag){case 3:na(dn),He();break;case 26:case 27:case 5:Ie(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:W(ln);break;case 10:na(n.type);break;case 22:case 23:ai(n),Ou(),t!==null&&W(yr);break;case 24:na(dn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==c)}}catch(R){Bt(n,n.return,R)}}function Ba(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var F=a,ee=R;try{ee()}catch(he){Bt(c,F,he)}}}o=o.next}while(o!==f)}}catch(he){Bt(n,n.return,he)}}function cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$p(n,a)}catch(o){Bt(t,t.return,o)}}}function ug(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Bt(t,n,c)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(t,n,c)}else a.current=null}function fg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(t,t.return,c)}}function hf(t,n,a){try{var o=t.stateNode;sy(o,t.type,a,n),o[En]=n}catch(c){Bt(t,t.return,c)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(mf(t,n,a),t=t.sibling;t!==null;)mf(t,n,a),t=t.sibling}function Bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function hg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[un]=t,n[En]=a}catch(f){Bt(t,t.return,f)}}var oa=!1,mn=!1,gf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Fx(t,n){if(t=t.containerInfo,zf=rc,t=Ap(t),lu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,F=-1,ee=0,he=0,xe=t,oe=null;t:for(;;){for(var le;xe!==a||c!==0&&xe.nodeType!==3||(R=_+c),xe!==f||o!==0&&xe.nodeType!==3||(F=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(le=xe.firstChild)!==null;)oe=xe,xe=le;for(;;){if(xe===t)break t;if(oe===a&&++ee===c&&(R=_),oe===f&&++he===o&&(F=_),(le=xe.nextSibling)!==null)break;xe=oe,oe=xe.parentNode}xe=le}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:t,selectionRange:a},rc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ye=Tr(a.type,c);t=o.getSnapshotBeforeUpdate(Ye,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Gf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function mg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&_o(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Bt(a,a.return,_)}else{var c=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Bt(a,a.return,_)}}o&64&&cg(a),o&512&&vo(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(t,n)}catch(_){Bt(a,a.return,_)}}break;case 27:n===null&&o&4&&hg(a);case 26:case 5:ca(t,a),n===null&&o&4&&fg(a),o&512&&vo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&vg(t,a);break;case 13:ca(t,a),o&4&&xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Zx.bind(null,a),py(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||mn,c=oa;var f=mn;oa=o,(mn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=c,mn=f}break;case 30:break;default:ca(t,a)}}function gg(t){var n=t.alternate;n!==null&&(t.alternate=null,gg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ta(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,kn=!1;function la(t,n,a){for(a=a.child;a!==null;)_g(t,n,a),a=a.sibling}function _g(t,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=en,c=kn;Wa(a.type)&&(en=a.stateNode,kn=!1),la(t,n,a),Ro(a.stateNode),en=o,kn=c;break;case 5:mn||zi(a,n);case 6:if(o=en,c=kn,en=null,la(t,n,a),en=o,kn=c,en!==null)if(kn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:en!==null&&(kn?(t=en,c0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vs(t)):c0(en,a.stateNode));break;case 4:o=en,c=kn,en=a.stateNode.containerInfo,kn=!0,la(t,n,a),en=o,kn=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),mn||Ba(4,a,n),la(t,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ug(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,la(t,n,a),mn=o;break;default:la(t,n,a)}}function vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vs(t)}catch(a){Bt(n,n.return,a)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(a){Bt(n,n.return,a)}}function Hx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pg),n;default:throw Error(r(435,t.tag))}}function Fl(t,n){var a=Hx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Kx.bind(null,t,o);o.then(c,c)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){en=R.stateNode,kn=!1;break e}break;case 5:en=R.stateNode,kn=!1;break e;case 3:case 4:en=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(en===null)throw Error(r(160));_g(f,_,c),en=null,kn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)yg(n,t),n=n.sibling}var Ti=null;function yg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Ba(3,t,t.return),_o(3,t),Ba(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(mn||a===null||zi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ti;if(Xn(n,t),Wn(t),o&512&&(mn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ea]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,o,a),f[un]=t,fn(f),o=f;break e;case"link":var _=y0("link","href",c).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;case"meta":if(_=y0("meta","content",c).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=c.createElement(o),Cn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[un]=t,fn(f),o=f}t.stateNode=o}else S0(c,t.type,t.stateNode);else t.stateNode=x0(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?S0(c,t.type,t.stateNode):x0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(mn||a===null||zi(a,a.return)),t.flags&32){c=t.stateNode;try{ei(c,"")}catch(Ye){Bt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,hf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(gf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){Bt(t,t.return,Ye)}}break;case 3:if(tc=null,c=Ti,Ti=$l(n.containerInfo),Xn(n,t),Ti=c,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(Ye){Bt(t,t.return,Ye)}gf&&(gf=!1,Sg(t));break;case 4:o=Ti,Ti=$l(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ti=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gl=Ht()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ee=oa,he=mn;if(oa=ee||c,mn=he||F,Xn(n,t),mn=he,oa=ee,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||oa||mn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=F.stateNode;var xe=F.memoizedProps.style,oe=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ye){Bt(F,F.return,Ye)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Ye){Bt(F,F.return,Ye)}}}else if(n.tag===18){if(a===null){F=n;try{var le=F.stateNode;c?u0(le,!0):u0(F.stateNode,!1)}catch(Ye){Bt(F,F.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Fl(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(dg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=pf(t);Bl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(ei(_,""),a.flags&=-33);var R=pf(t);Bl(t,R,_);break;case 3:case 4:var F=a.stateNode.containerInfo,ee=pf(t);mf(t,ee,F);break;default:throw Error(r(161))}}catch(he){Bt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Sg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ar(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),Ar(n);break;case 27:Ro(n.stateNode);case 26:case 5:zi(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ua(c,f,a),_o(4,f);break;case 1:if(ua(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){Bt(o,o.return,ee)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Jp(F[c],R)}catch(ee){Bt(o,o.return,ee)}}a&&_&64&&cg(f),vo(f,f.return);break;case 27:hg(f);case 26:case 5:ua(c,f,a),a&&o===null&&_&4&&fg(f),vo(f,f.return);break;case 12:ua(c,f,a);break;case 31:ua(c,f,a),a&&_&4&&vg(c,f);break;case 13:ua(c,f,a),a&&_&4&&xg(c,f);break;case 22:f.memoizedState===null&&ua(c,f,a),vo(f,f.return);break;case 30:break;default:ua(c,f,a)}n=n.sibling}}function _f(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function vf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(t,n,a,o),n=n.sibling}function Mg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),c&2048&&_o(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(c&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Bt(n,n.return,F)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):xo(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,os(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&_f(_,n);break;case 24:Ai(t,n,a,o),c&2048&&vf(n.alternate,n);break;default:Ai(t,n,a,o)}}function os(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,F=o,ee=_.flags;switch(_.tag){case 0:case 11:case 15:os(f,_,R,F,c),_o(8,_);break;case 23:break;case 22:var he=_.stateNode;_.memoizedState!==null?he._visibility&2?os(f,_,R,F,c):xo(f,_):(he._visibility|=2,os(f,_,R,F,c)),c&&ee&2048&&_f(_.alternate,_);break;case 24:os(f,_,R,F,c),c&&ee&2048&&vf(_.alternate,_);break;default:os(f,_,R,F,c)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:xo(a,o),c&2048&&_f(o.alternate,o);break;case 24:xo(a,o),c&2048&&vf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var yo=8192;function ls(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)bg(t,n,a),t=t.sibling}function bg(t,n,a){switch(t.tag){case 26:ls(t,n,a),t.flags&yo&&t.memoizedState!==null&&Ay(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,a);break;case 3:case 4:var o=Ti;Ti=$l(t.stateNode.containerInfo),ls(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,ls(t,n,a),yo=o):ls(t,n,a));break;default:ls(t,n,a)}}function Eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Ag(o,t)}Eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):So(t);break;default:So(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Ag(o,t)}Eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function Ag(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var c=o.sibling,f=o.return;if(gg(o),o===a){Sn=null;break e}if(c!==null){c.return=f,Sn=c;break e}Sn=f}}}var Gx={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Wt=null,_t=null,xt=0,zt=0,ri=null,Fa=!1,cs=!1,xf=!1,fa=0,sn=0,Ha=0,Rr=0,yf=0,si=0,us=0,Mo=null,qn=null,Sf=!1,Gl=0,Rg=0,Vl=1/0,kl=null,Ga=null,vn=0,Va=null,fs=null,da=0,Mf=0,bf=null,Cg=null,bo=0,Ef=null;function oi(){return(Dt&2)!==0&&xt!==0?xt&-xt:O.T!==null?Df():Ws()}function wg(){if(si===0)if((xt&536870912)===0||bt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),si=t}else si=536870912;return t=ii.current,t!==null&&(t.flags|=32),si}function Yn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),ka(t,xt,si,!1)),Xe(t,a),((Dt&2)===0||t!==Wt)&&(t===Wt&&((Dt&2)===0&&(Rr|=a),sn===4&&ka(t,xt,si,!1)),Bi(t))}function Dg(t,n,a){if((Dt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),c=o?Wx(t,n):Af(t,n,!0),f=o;do{if(c===0){cs&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!kx(a)){c=Af(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;c=Mo;var F=R.current.memoizedState.isDehydrated;if(F&&(ds(R,_).flags|=256),_=Af(R,_,!1),_!==2){if(xf&&!F){R.errorRecoveryDisabledLanes|=f,Rr|=f,c=4;break e}f=qn,qn=c,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){ds(t,0),ka(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,si,!Fa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Gl+300-Ht(),10<c)){if(ka(o,n,si,!Fa),ge(o,0,!0)!==0)break e;da=n,o.timeoutHandle=o0(Ug.bind(null,o,a,qn,kl,Sf,n,si,Rr,us,Fa,f,"Throttled",-0,0),c);break e}Ug(o,a,qn,kl,Sf,n,si,Rr,us,Fa,f,null,-0,0)}}break}while(!0);Bi(t)}function Ug(t,n,a,o,c,f,_,R,F,ee,he,xe,oe,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},bg(n,f,xe);var Ye=(f&62914560)===f?Gl-Ht():(f&4194048)===f?Rg-Ht():0;if(Ye=Ry(xe,Ye),Ye!==null){da=f,t.cancelPendingCommit=Ye(Fg.bind(null,t,n,f,a,o,c,_,R,F,he,xe,null,oe,le)),ka(t,f,_,!ee);return}}Fg(t,n,f,a,o,c,_,R,F)}function kx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ti(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~yf,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Ge(c),_=1<<f;o[f]=-1,c&=~_}a!==0&&Nt(t,a,n)}function Xl(){return(Dt&6)===0?(Eo(0),!1):!0}function Tf(){if(_t!==null){if(zt===0)var t=_t.return;else t=_t,ta=vr=null,Hu(t),ns=null,ro=0,t=_t;for(;t!==null;)lg(t.alternate,t),t=t.return;_t=null}}function ds(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,Tf(),Wt=t,_t=a=$i(t.current,null),xt=n,zt=0,ri=null,Fa=!1,cs=De(t,n),xf=!1,us=si=yf=Rr=Ha=sn=0,qn=Mo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ge(o),f=1<<c;n|=t[c],o&=~f}return fa=n,fl(),a}function Lg(t,n){ct=null,O.H=po,n===ts||n===xl?(n=Zp(),zt=3):n===Cu?(n=Zp(),zt=4):zt=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,_t===null&&(sn=1,Nl(t,hi(n,t.current)))}function Ng(){var t=ii.current;return t===null?!0:(xt&4194048)===xt?_i===null:(xt&62914560)===xt||(xt&536870912)!==0?t===_i:!1}function Og(){var t=O.H;return O.H=po,t===null?po:t}function Pg(){var t=O.A;return O.A=Gx,t}function Wl(){sn=4,Fa||(xt&4194048)!==xt&&ii.current!==null||(cs=!0),(Ha&134217727)===0&&(Rr&134217727)===0||Wt===null||ka(Wt,xt,si,!1)}function Af(t,n,a){var o=Dt;Dt|=2;var c=Og(),f=Pg();(Wt!==t||xt!==n)&&(kl=null,ds(t,n)),n=!1;var _=sn;e:do try{if(zt!==0&&_t!==null){var R=_t,F=ri;switch(zt){case 8:Tf(),_=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ee=zt;if(zt=0,ri=null,hs(t,R,F,ee),a&&cs){_=0;break e}break;default:ee=zt,zt=0,ri=null,hs(t,R,F,ee)}}Xx(),_=sn;break}catch(he){Lg(t,he)}while(!0);return n&&t.shellSuspendCounter++,ta=vr=null,Dt=o,O.H=c,O.A=f,_t===null&&(Wt=null,xt=0,fl()),_}function Xx(){for(;_t!==null;)Ig(_t)}function Wx(t,n){var a=Dt;Dt|=2;var o=Og(),c=Pg();Wt!==t||xt!==n?(kl=null,Vl=Ht()+500,ds(t,n)):cs=De(t,n);e:do try{if(zt!==0&&_t!==null){n=_t;var f=ri;t:switch(zt){case 1:zt=0,ri=null,hs(t,n,f,1);break;case 2:case 9:if(qp(f)){zt=0,ri=null,zg(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),Bi(t)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:qp(f)?(zt=0,ri=null,zg(n)):(zt=0,ri=null,hs(t,n,f,7));break;case 5:var _=null;switch(_t.tag){case 26:_=_t.memoizedState;case 5:case 27:var R=_t;if(_?M0(_):R.stateNode.complete){zt=0,ri=null;var F=R.sibling;if(F!==null)_t=F;else{var ee=R.return;ee!==null?(_t=ee,ql(ee)):_t=null}break t}}zt=0,ri=null,hs(t,n,f,5);break;case 6:zt=0,ri=null,hs(t,n,f,6);break;case 8:Tf(),sn=6;break e;default:throw Error(r(462))}}qx();break}catch(he){Lg(t,he)}while(!0);return ta=vr=null,O.H=o,O.A=c,Dt=a,_t!==null?0:(Wt=null,xt=0,fl(),sn)}function qx(){for(;_t!==null&&!an();)Ig(_t)}function Ig(t){var n=sg(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?ql(t):_t=n}function zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Hu(n);default:lg(a,n),n=_t=Pp(n,fa),n=sg(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?ql(t):_t=n}function hs(t,n,a,o){ta=vr=null,Hu(n),ns=null,ro=0;var c=n.return;try{if(Ox(t,c,n,a,xt)){sn=1,Nl(t,hi(a,t.current)),_t=null;return}}catch(f){if(c!==null)throw _t=c,f;sn=1,Nl(t,hi(a,t.current)),_t=null;return}n.flags&32768?(bt||o===1?t=!0:cs||(xt&536870912)!==0?t=!1:(Fa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bg(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Bg(n,Fa);return}t=n.return;var a=zx(n.alternate,n,fa);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);sn===0&&(sn=5)}function Bg(t,n){do{var a=Bx(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);sn=6,_t=null}function Fg(t,n,a,o,c,f,_,R,F){t.cancelPendingCommit=null;do Yl();while(vn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=hu,jt(t,a,f,_,R,F),t===Wt&&(_t=Wt=null,xt=0),fs=n,Va=t,da=a,Mf=f,bf=c,Cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Qx(K,function(){return Xg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=H.p,H.p=2,_=Dt,Dt|=4;try{Fx(t,n,a)}finally{Dt=_,H.p=c,O.T=o}}vn=1,Hg(),Gg(),Vg()}}function Hg(){if(vn===1){vn=0;var t=Va,n=fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var c=Dt;Dt|=4;try{yg(n,t);var f=Bf,_=Ap(t.containerInfo),R=f.focusedElem,F=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Tp(R.ownerDocument.documentElement,R)){if(F!==null&&lu(R)){var ee=F.start,he=F.end;if(he===void 0&&(he=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(he,R.value.length);else{var xe=R.ownerDocument||document,oe=xe&&xe.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),Ye=R.textContent.length,nt=Math.min(F.start,Ye),kt=F.end===void 0?nt:Math.min(F.end,Ye);!le.extend&&nt>kt&&(_=kt,kt=nt,nt=_);var Z=Ep(R,nt),V=Ep(R,kt);if(Z&&V&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var $=xe.createRange();$.setStart(Z.node,Z.offset),le.removeAllRanges(),nt>kt?(le.addRange($),le.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),le.addRange($))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}rc=!!zf,Bf=zf=null}finally{Dt=c,H.p=o,O.T=a}}t.current=n,vn=2}}function Gg(){if(vn===2){vn=0;var t=Va,n=fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var c=Dt;Dt|=4;try{mg(t,n.alternate,n)}finally{Dt=c,H.p=o,O.T=a}}vn=3}}function Vg(){if(vn===4||vn===3){vn=0,q();var t=Va,n=fs,a=da,o=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,fs=Va=null,kg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ga=null),Xs(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=H.p,H.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,H.p=c}}(da&3)!==0&&Yl(),Bi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Ef?bo++:(bo=0,Ef=t):bo=0,Eo(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Yl(){return Hg(),Gg(),Vg(),Xg()}function Xg(){if(vn!==5)return!1;var t=Va,n=Mf;Mf=0;var a=Xs(da),o=O.T,c=H.p;try{H.p=32>a?32:a,O.T=null,a=bf,bf=null;var f=Va,_=da;if(vn=0,fs=Va=null,da=0,(Dt&6)!==0)throw Error(r(331));var R=Dt;if(Dt|=4,Tg(f.current),Mg(f,f.current,_,a),Dt=R,Eo(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{H.p=c,O.T=o,kg(t,n)}}function Wg(t,n,a){n=hi(a,n),n=tf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Xe(t,2),Bi(t))}function Bt(t,n,a){if(t.tag===3)Wg(t,t,a);else for(;n!==null;){if(n.tag===3){Wg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=hi(a,t),a=qm(2),o=Pa(n,a,2),o!==null&&(Ym(a,o,n,t),Xe(o,2),Bi(o));break}}n=n.return}}function Rf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Vx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(xf=!0,c.add(a),t=Yx.bind(null,t,n,a),n.then(t,t))}function Yx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(xt&a)===a&&(sn===4||sn===3&&(xt&62914560)===xt&&300>Ht()-Gl?(Dt&2)===0&&ds(t,0):yf|=a,us===xt&&(us=0)),Bi(t)}function qg(t,n){n===0&&(n=be()),t=mr(t,n),t!==null&&(Xe(t,n),Bi(t))}function Zx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(t,a)}function Kx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),qg(t,a)}function Qx(t,n){return on(t,n)}var Zl=null,ps=null,Cf=!1,Kl=!1,wf=!1,Xa=0;function Bi(t){t!==ps&&t.next===null&&(ps===null?Zl=ps=t:ps=ps.next=t),Kl=!0,Cf||(Cf=!0,Jx())}function Eo(t,n){if(!wf&&Kl){wf=!0;do for(var a=!1,o=Zl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ge(42|t)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qg(o,f))}else f=xt,f=ge(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,Qg(o,f));o=o.next}while(a);wf=!1}}function jx(){Yg()}function Yg(){Kl=Cf=!1;var t=0;Xa!==0&&ly()&&(t=Xa);for(var n=Ht(),a=null,o=Zl;o!==null;){var c=o.next,f=Zg(o,n);f===0?(o.next=null,a===null?Zl=c:a.next=c,c===null&&(ps=a)):(a=o,(t!==0||(f&3)!==0)&&(Kl=!0)),o=c}vn!==0&&vn!==5||Eo(t),Xa!==0&&(Xa=0)}function Zg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Ge(f),R=1<<_,F=c[_];F===-1?((R&a)===0||(R&o)!==0)&&(c[_]=Fe(R,n)):F<=n&&(t.expiredLanes|=R),f&=~R}if(n=Wt,a=xt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Yt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Yt(o),Xs(a)){case 2:case 8:a=S;break;case 32:a=K;break;case 268435456:a=ue;break;default:a=K}return o=Kg.bind(null,t),a=on(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Yt(o),t.callbackPriority=2,t.callbackNode=null,2}function Kg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var o=xt;return o=ge(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Dg(t,o,n),Zg(t,Ht()),t.callbackNode!=null&&t.callbackNode===a?Kg.bind(null,t):null)}function Qg(t,n){if(Yl())return null;Dg(t,n,!0)}function Jx(){uy(function(){(Dt&6)!==0?on(D,jx):Yg()})}function Df(){if(Xa===0){var t=$r;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),Xa=t}return Xa}function jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fr(""+t)}function Jg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function $x(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=jg((c[En]||null).action),_=o.submitter;_&&(n=(n=_[En]||null)?jg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new ol("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var F=_?Jg(c,_):new FormData(c);Ku(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=_?Jg(c,_):new FormData(c),Ku(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Uf=0;Uf<du.length;Uf++){var Lf=du[Uf],ey=Lf.toLowerCase(),ty=Lf[0].toUpperCase()+Lf.slice(1);Ei(ey,"on"+ty)}Ei(wp,"onAnimationEnd"),Ei(Dp,"onAnimationIteration"),Ei(Up,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(_x,"onTransitionRun"),Ei(vx,"onTransitionStart"),Ei(xx,"onTransitionCancel"),Ei(Lp,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function $g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],F=R.instance,ee=R.currentTarget;if(R=R.listener,F!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ee;try{f(c)}catch(he){ul(he)}c.currentTarget=null,f=F}else for(_=0;_<o.length;_++){if(R=o[_],F=R.instance,ee=R.currentTarget,R=R.listener,F!==f&&c.isPropagationStopped())break e;f=R,c.currentTarget=ee;try{f(c)}catch(he){ul(he)}c.currentTarget=null,f=F}}}}function vt(t,n){var a=n[lr];a===void 0&&(a=n[lr]=new Set);var o=t+"__bubble";a.has(o)||(e0(n,t,2,!1),a.add(o))}function Nf(t,n,a){var o=0;n&&(o|=4),e0(a,t,o,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Of(t){if(!t[Ql]){t[Ql]=!0,il.forEach(function(a){a!=="selectionchange"&&(ny.has(a)||Nf(a,!1,t),Nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Nf("selectionchange",!1,n))}}function e0(t,n,a,o){switch(w0(n)){case 2:var c=Dy;break;case 8:c=Uy;break;default:c=Kf}a=c.bind(null,n,a,t),c=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Pf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=o.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=Ki(R),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){o=f=_;continue e}R=R.parentNode}}o=o.return}rp(function(){var ee=f,he=jc(a),xe=[];e:{var oe=Np.get(t);if(oe!==void 0){var le=ol,Ye=t;switch(t){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":le=Kv;break;case"focusin":Ye="focus",le=iu;break;case"focusout":Ye="blur",le=iu;break;case"beforeblur":case"afterblur":le=iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Jv;break;case wp:case Dp:case Up:le=Hv;break;case Lp:le=ex;break;case"scroll":case"scrollend":le=Pv;break;case"wheel":le=nx;break;case"copy":case"cut":case"paste":le=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=up;break;case"toggle":case"beforetoggle":le=ax}var nt=(n&4)!==0,kt=!nt&&(t==="scroll"||t==="scrollend"),Z=nt?oe!==null?oe+"Capture":null:oe;nt=[];for(var V=ee,$;V!==null;){var ve=V;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||Z===null||(ve=qs(V,Z),ve!=null&&nt.push(Ao(V,ve,$))),kt)break;V=V.return}0<nt.length&&(oe=new le(oe,Ye,null,a,he),xe.push({event:oe,listeners:nt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",oe&&a!==Qc&&(Ye=a.relatedTarget||a.fromElement)&&(Ki(Ye)||Ye[Gn]))break e;if((le||oe)&&(oe=he.window===he?he:(oe=he.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(Ye=a.relatedTarget||a.toElement,le=ee,Ye=Ye?Ki(Ye):null,Ye!==null&&(kt=u(Ye),nt=Ye.tag,Ye!==kt||nt!==5&&nt!==27&&nt!==6)&&(Ye=null)):(le=null,Ye=ee),le!==Ye)){if(nt=lp,ve="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(nt=up,ve="onPointerLeave",Z="onPointerEnter",V="pointer"),kt=le==null?oe:ur(le),$=Ye==null?oe:ur(Ye),oe=new nt(ve,V+"leave",le,a,he),oe.target=kt,oe.relatedTarget=$,ve=null,Ki(he)===ee&&(nt=new nt(Z,V+"enter",Ye,a,he),nt.target=$,nt.relatedTarget=kt,ve=nt),kt=ve,le&&Ye)t:{for(nt=iy,Z=le,V=Ye,$=0,ve=Z;ve;ve=nt(ve))$++;ve=0;for(var et=V;et;et=nt(et))ve++;for(;0<$-ve;)Z=nt(Z),$--;for(;0<ve-$;)V=nt(V),ve--;for(;$--;){if(Z===V||V!==null&&Z===V.alternate){nt=Z;break t}Z=nt(Z),V=nt(V)}nt=null}else nt=null;le!==null&&t0(xe,oe,le,nt,!1),Ye!==null&&kt!==null&&t0(xe,kt,Ye,nt,!0)}}e:{if(oe=ee?ur(ee):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var Rt=vp;else if(gp(oe))if(xp)Rt=px;else{Rt=dx;var Ke=fx}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ee&&Ut(ee.elementType)&&(Rt=vp):Rt=hx;if(Rt&&(Rt=Rt(t,ee))){_p(xe,Rt,a,he);break e}Ke&&Ke(t,oe,ee),t==="focusout"&&ee&&oe.type==="number"&&ee.memoizedProps.value!=null&&gt(oe,"number",oe.value)}switch(Ke=ee?ur(ee):window,t){case"focusin":(gp(Ke)||Ke.contentEditable==="true")&&(Wr=Ke,cu=ee,eo=null);break;case"focusout":eo=cu=Wr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,Rp(xe,a,he);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Rp(xe,a,he)}var ft;if(ru)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Xr?pp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(fp&&a.locale!=="ko"&&(Xr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Xr&&(ft=sp()):(Ca=he,eu="value"in Ca?Ca.value:Ca.textContent,Xr=!0)),Ke=jl(ee,yt),0<Ke.length&&(yt=new cp(yt,t,null,a,he),xe.push({event:yt,listeners:Ke}),ft?yt.data=ft:(ft=mp(a),ft!==null&&(yt.data=ft)))),(ft=sx?ox(t,a):lx(t,a))&&(yt=jl(ee,"onBeforeInput"),0<yt.length&&(Ke=new cp("onBeforeInput","beforeinput",null,a,he),xe.push({event:Ke,listeners:yt}),Ke.data=ft)),$x(xe,t,ee,a,he)}$g(xe,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function jl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=qs(t,a),c!=null&&o.unshift(Ao(t,c,f)),c=qs(t,n),c!=null&&o.push(Ao(t,c,f))),t.tag===3)return o;t=t.return}return[]}function iy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t0(t,n,a,o,c){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,F=R.alternate,ee=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||ee===null||(F=ee,c?(ee=qs(a,f),ee!=null&&_.unshift(Ao(a,ee,F))):c||(ee=qs(a,f),ee!=null&&_.push(Ao(a,ee,F)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ay=/\r\n?/g,ry=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(ay,`
`).replace(ry,"")}function i0(t,n){return n=n0(n),n0(t)===n}function Vt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(t,""+o);break;case"className":qe(t,"class",o);break;case"tabIndex":qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,o);break;case"style":bi(t,o,f);break;case"data":if(n!=="object"){qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",c.name,c,null),Vt(t,n,"formEncType",c.formEncType,c,null),Vt(t,n,"formMethod",c.formMethod,c,null),Vt(t,n,"formTarget",c.formTarget,c,null)):(Vt(t,n,"encType",c.encType,c,null),Vt(t,n,"method",c.method,c,null),Vt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Ne(t,a,o))}}function If(t,n,a,o,c,f){switch(a){case"style":bi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ei(t,o):(typeof o=="number"||typeof o=="bigint")&&ei(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ne(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,f,_,a,null)}}c&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=f=_=c=null,F=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":c=he;break;case"type":_=he;break;case"checked":F=he;break;case"defaultChecked":ee=he;break;case"value":f=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Vt(t,n,o,he,a,null)}}Dn(t,f,R,F,ee,_,c,!1);return;case"select":vt("invalid",t),o=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Vt(t,n,c,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=c=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Vt(t,n,_,R,a,null)}Mi(t,o,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,F,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)vt(To[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,ee,o,a,null)}return;default:if(Ut(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&If(t,n,he,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function sy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,F=null,ee=null,he=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=xe;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,xe)}}for(var oe in o){var le=o[oe];if(xe=a[oe],o.hasOwnProperty(oe)&&(le!=null||xe!=null))switch(oe){case"type":f=le;break;case"name":c=le;break;case"checked":ee=le;break;case"defaultChecked":he=le;break;case"value":_=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Vt(t,n,oe,le,o,xe)}}Ve(t,_,R,F,ee,he,f,c);return;case"select":le=_=R=oe=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":le=F;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==F&&Vt(t,n,c,f,o,F)}n=R,a=_,o=le,oe!=null?_n(t,!!a,oe,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":le=oe=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,c)}for(_ in o)if(c=o[_],f=a[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":oe=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Vt(t,n,_,c,o,f)}$n(t,oe,le);return;case"option":for(var Ye in a)oe=a[Ye],a.hasOwnProperty(Ye)&&oe!=null&&!o.hasOwnProperty(Ye)&&(Ye==="selected"?t.selected=!1:Vt(t,n,Ye,null,o,oe));for(F in o)oe=o[F],le=a[F],o.hasOwnProperty(F)&&oe!==le&&(oe!=null||le!=null)&&(F==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Vt(t,n,F,oe,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)oe=a[nt],a.hasOwnProperty(nt)&&oe!=null&&!o.hasOwnProperty(nt)&&Vt(t,n,nt,null,o,oe);for(ee in o)if(oe=o[ee],le=a[ee],o.hasOwnProperty(ee)&&oe!==le&&(oe!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Vt(t,n,ee,oe,o,le)}return;default:if(Ut(n)){for(var kt in a)oe=a[kt],a.hasOwnProperty(kt)&&oe!==void 0&&!o.hasOwnProperty(kt)&&If(t,n,kt,void 0,o,oe);for(he in o)oe=o[he],le=a[he],!o.hasOwnProperty(he)||oe===le||oe===void 0&&le===void 0||If(t,n,he,oe,o,le);return}}for(var Z in a)oe=a[Z],a.hasOwnProperty(Z)&&oe!=null&&!o.hasOwnProperty(Z)&&Vt(t,n,Z,null,o,oe);for(xe in o)oe=o[xe],le=a[xe],!o.hasOwnProperty(xe)||oe===le||oe==null&&le==null||Vt(t,n,xe,oe,o,le)}function a0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&a0(_)){for(_=0,R=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],ee=F.startTime;if(ee>R)break;var he=F.transferSize,xe=F.initiatorType;he&&a0(xe)&&(F=F.responseEnd,_+=he*(F<R?1:(R-ee)/(F-ee)))}if(--o,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zf=null,Bf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function r0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function ly(){var t=window.event;return t&&t.type==="popstate"?t===Hf?!1:(Hf=t,!0):(Hf=null,!1)}var o0=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(t){return l0.resolve(null).then(t).catch(fy)}:o0;function fy(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function c0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),vs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ea]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ro(t.ownerDocument.body);a=c}while(a);vs(n)}function u0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Gf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),Ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dy(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ea])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function hy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function f0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Vf(t){return t.data==="$?"||t.data==="$~"}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function py(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Xf=null;function d0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function h0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function p0(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ta(t)}var xi=new Map,m0=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=H.d;H.d={f:my,r:gy,D:_y,C:vy,L:xy,m:yy,X:My,S:Sy,M:by};function my(){var t=ha.f(),n=Xl();return t||n}function gy(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Lm(n):ha.r(t)}var ms=typeof document>"u"?null:document;function g0(t,n,a){var o=ms;if(o&&typeof n=="string"&&n){var c=Pt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),m0.has(c)||(m0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function _y(t){ha.D(t),g0("dns-prefetch",t,null)}function vy(t,n){ha.C(t,n),g0("preconnect",t,n)}function xy(t,n,a){ha.L(t,n,a);var o=ms;if(o&&t&&n){var c='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Pt(a.imageSizes)+'"]')):c+='[href="'+Pt(t)+'"]';var f=c;switch(n){case"style":f=gs(t);break;case"script":f=_s(t)}xi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function yy(t,n){ha.m(t,n);var a=ms;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_s(t)}if(!xi.has(f)&&(t=v({rel:"modulepreload",href:t},n),xi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),Cn(o,"link",t),fn(o),a.head.appendChild(o)}}}function Sy(t,n,a){ha.S(t,n,a);var o=ms;if(o&&t){var c=Aa(o).hoistableStyles,f=gs(t);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Co(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(f))&&Wf(t,a);var F=_=o.createElement("link");fn(F),Cn(F,"link",t),F._p=new Promise(function(ee,he){F.onload=ee,F.onerror=he}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ec(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function My(t,n){ha.X(t,n);var a=ms;if(a&&t){var o=Aa(a).hoistableScripts,c=_s(t),f=o.get(c);f||(f=a.querySelector(wo(c)),f||(t=v({src:t,async:!0},n),(n=xi.get(c))&&qf(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function by(t,n){ha.M(t,n);var a=ms;if(a&&t){var o=Aa(a).hoistableScripts,c=_s(t),f=o.get(c);f||(f=a.querySelector(wo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=xi.get(c))&&qf(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function _0(t,n,a,o){var c=(c=ie.current)?$l(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gs(a.href),a=Aa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=gs(a.href);var f=Aa(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Co(t)))&&!f._p&&(_.instance=f,_.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),f||Ey(c,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(a),a=Aa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function gs(t){return'href="'+Pt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function v0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ey(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),fn(n),t.head.appendChild(n))}function _s(t){return'[src="'+Pt(t)+'"]'}function wo(t){return"script[async]"+t}function x0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),Cn(o,"style",c),ec(o,a.precedence,t),n.instance=o;case"stylesheet":c=gs(a.href);var f=t.querySelector(Co(c));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;o=v0(a),(c=xi.get(c))&&Wf(o,c),f=(t.ownerDocument||t).createElement("link"),fn(f);var _=f;return _._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),Cn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=_s(a.src),(c=t.querySelector(wo(f)))?(n.instance=c,fn(c),c):(o=a,(c=xi.get(f))&&(o=v({},a),qf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),fn(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function y0(t,n,a){if(tc===null){var o=new Map,c=tc=new Map;c.set(a,o)}else c=tc,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ea]||f[un]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function S0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ty(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ay(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=gs(o.href),f=n.querySelector(Co(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,o=v0(o),(c=xi.get(c))&&Wf(o,c),f=f.createElement("link"),fn(f);var _=f;_._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function Ry(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Yf===0&&(Yf=62500*oy());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Yf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(Cy,t),ic=null,nc.call(t))}function Cy(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,c),a.set(_,c),this.count++,o=nc.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:z,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function wy(t,n,a,o,c,f,_,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function b0(t,n,a,o,c,f,_,R,F,ee,he,xe){return t=new wy(t,n,a,_,F,ee,he,xe,R),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=Tu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wu(f),t}function E0(t){return t?(t=Zr,t):Zr}function T0(t,n,a,o,c,f){c=E0(c),o.context===null?o.context=c:o.pendingContext=c,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(t,o,n),a!==null&&(Yn(a,t,n),oo(a,t,n))}function A0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){A0(t,n),(t=t.alternate)&&A0(t,n)}function R0(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Yn(n,t,67108864),Zf(t,67108864)}}function C0(t){if(t.tag===13||t.tag===31){var n=oi();n=ks(n);var a=mr(t,n);a!==null&&Yn(a,t,n),Zf(t,n)}}var rc=!0;function Dy(t,n,a,o){var c=O.T;O.T=null;var f=H.p;try{H.p=2,Kf(t,n,a,o)}finally{H.p=f,O.T=c}}function Uy(t,n,a,o){var c=O.T;O.T=null;var f=H.p;try{H.p=8,Kf(t,n,a,o)}finally{H.p=f,O.T=c}}function Kf(t,n,a,o){if(rc){var c=Qf(o);if(c===null)Pf(t,n,o,sc,a),D0(t,o);else if(Ny(c,t,n,a,o))o.stopPropagation();else if(D0(t,o),n&4&&-1<Ly.indexOf(t)){for(;c!==null;){var f=Qi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ce(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var F=1<<31-Ge(_);R.entanglements[1]|=F,_&=~F}Bi(f),(Dt&6)===0&&(Vl=Ht()+500,Eo(0))}}break;case 31:case 13:R=mr(f,2),R!==null&&Yn(R,f,2),Xl(),Zf(f,2)}if(f=Qf(o),f===null&&Pf(t,n,o,sc,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Pf(t,n,o,null,a)}}function Qf(t){return t=jc(t),jf(t)}var sc=null;function jf(t){if(sc=null,t=Ki(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function w0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case D:return 2;case S:return 8;case K:case re:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Jf=!1,qa=null,Ya=null,Za=null,Uo=new Map,Lo=new Map,Ka=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Qi(n),n!==null&&R0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ny(t,n,a,o,c){switch(n){case"focusin":return qa=No(qa,t,n,a,o,c),!0;case"dragenter":return Ya=No(Ya,t,n,a,o,c),!0;case"mouseover":return Za=No(Za,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Uo.set(f,No(Uo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Lo.set(f,No(Lo.get(f)||null,t,n,a,o,c)),!0}return!1}function U0(t){var n=Ki(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){C0(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){C0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=Qi(a),n!==null&&R0(n),t.blockedOn=a,!1;n.shift()}return!0}function L0(t,n,a){oc(t)&&a.delete(n)}function Oy(){Jf=!1,qa!==null&&oc(qa)&&(qa=null),Ya!==null&&oc(Ya)&&(Ya=null),Za!==null&&oc(Za)&&(Za=null),Uo.forEach(L0),Lo.forEach(L0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,Jf||(Jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Oy)))}var cc=null;function N0(t){cc!==t&&(cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,Ku(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function vs(t){function n(F){return lc(F,t)}qa!==null&&lc(qa,t),Ya!==null&&lc(Ya,t),Za!==null&&lc(Za,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],_=c[En]||null;if(typeof f=="function")_||N0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[En]||null)R=_.formAction;else if(jf(c)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),N0(a)}}}function O0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function $f(t){this._internalRoot=t}uc.prototype.render=$f.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=oi();T0(a,o,t,n,null,null)},uc.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T0(t.current,2,null,t,null,null),Xl(),n[Gn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&U0(t)}};var P0=e.version;if(P0!=="19.2.8")throw Error(r(527,P0,"19.2.8"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Py={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ce=fc.inject(Py),fe=fc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Vm,f=km,_=Xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=b0(t,1,!1,null,null,a,o,null,c,f,_,O0),t[Gn]=n.current,Of(t),new $f(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Vm,_=km,R=Xm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=b0(t,1,!0,n,a??null,o,c,F,f,_,R,O0),n.context=E0(null),a=n.current,o=oi(),o=ks(o),c=Oa(o),c.callback=null,Pa(a,c,o),a=o,n.current.lanes=a,Xe(n,a),Bi(n),t[Gn]=n.current,Of(t),new uc(n)},Po.version="19.2.8",Po}var W0;function Wy(){if(W0)return nd.exports;W0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),nd.exports=Xy(),nd.exports}var qy=Wy();const Yy=[{id:1,title:"Galen's Model of the Eye",date:"2nd Century",description:"Galen posited the crystalline lens as the principal instrument of vision. His anatomical model influenced centuries of thought.",literaryConnection:"Dante's emphasis on pure light and the initial structure of his cosmos echo Galenic perfection."},{id:2,title:"Alhazen's Book of Optics",date:"11th Century",description:"Influential on medieval perspectivism, Alhazen proved intromission theory—that light enters the eye rather than being emitted from it.",literaryConnection:"Provides the optical framework for Dante's progressive adaptation to blinding divine light."},{id:3,title:"Vesalius's Fabrica",date:"1543",description:"Revolutionized anatomical dissection, breaking down the eye into structural parts verifiable by the medical gaze.",literaryConnection:"The corpse becomes an object of intense scrutiny, shifting the focus from mystical light to physical flesh."},{id:4,title:"Kepler's Discovery of the Retina",date:"1604",description:"Kepler identified the retina, not the lens, as the seat of vision.",literaryConnection:"Corresponds to Dante's Empyrean as the 'eye of God', an inverted image forming the true reality."},{id:5,title:"Descartes & the Camera Obscura",date:"17th Century",description:"Descartes modeled the eye as a mechanical camera obscura, leading to the mind/body dualism.",literaryConnection:"Prefigures the modern detachment of the viewing subject from the observed object."},{id:6,title:"Forensic Pathology",date:"19th Century",description:"The rise of medicalization of the corpse. Exploring the body as a site of trauma and history.",literaryConnection:"Echoes Frankenstein's assembled body and the preservation of Tollund Man's eyes in Heaney's poetry."}],Zy=[{id:1,title:"The Anatomical Venus",type:"Early modern anatomical plate",image:"/anatomical_venus.jpg",description:"Wax models depicting dissected faces and eyes, blending the beautiful with the macabre."},{id:2,title:"Tollund Man",type:"Forensic Photograph",description:"As catalogued in Glob's 'The Bog People'. A preserved corpse that becomes an object of both forensic and poetic inquiry."},{id:3,title:"Frankenstein's Assembly",type:"Literary Medicalization",description:"The creation of life from the fragments of the dead, viewed through the physician's eye."}];function Ky(){return _e.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[_e.jsx("h2",{style:{marginBottom:"2rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Eye Timeline"}),_e.jsx("div",{className:"timeline",style:{position:"relative",borderLeft:"2px solid var(--accent-gold)",paddingLeft:"2rem",marginLeft:"1rem"},children:Yy.map((s,e)=>_e.jsxs("div",{className:"timeline-item interactive-card",style:{marginBottom:"2rem",padding:"1.5rem",background:"var(--bg-secondary)",borderRadius:"12px",position:"relative"},children:[_e.jsx("div",{style:{position:"absolute",left:"-2.65rem",top:"1.5rem",width:"16px",height:"16px",borderRadius:"50%",background:"var(--accent-crimson)",border:"3px solid var(--bg-primary)"}}),_e.jsx("span",{style:{color:"var(--accent-gold)",fontWeight:"bold",display:"block",marginBottom:"0.5rem"},children:s.date}),_e.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem"},children:s.title}),_e.jsxs("p",{style:{marginBottom:"1rem"},children:[_e.jsx("strong",{children:"Medical History:"})," ",s.description]}),_e.jsxs("p",{style:{color:"#d0d0d0"},children:[_e.jsx("em",{children:"Literary Connection:"})," ",s.literaryConnection]})]},s.id))})]})}const Ph="185",Qy=0,q0=1,jy=2,Pc=1,$_=2,ko=3,sr=0,Kn=1,Si=2,ya=0,Os=1,Y0=2,Z0=3,K0=4,Jy=5,Nr=100,$y=101,eS=102,tS=103,nS=104,iS=200,aS=201,rS=202,sS=203,Vd=204,kd=205,oS=206,lS=207,cS=208,uS=209,fS=210,dS=211,hS=212,pS=213,mS=214,Xd=0,Wd=1,qd=2,zs=3,Yd=4,Zd=5,Kd=6,Qd=7,ev=0,gS=1,_S=2,Xi=0,tv=1,nv=2,iv=3,Ih=4,av=5,rv=6,sv=7,ov=300,Br=301,Bs=302,sd=303,od=304,Yc=306,jd=1e3,xa=1001,Jd=1002,wn=1003,vS=1004,dc=1005,Pn=1006,ld=1007,Pr=1008,fi=1009,lv=1010,cv=1011,Wo=1012,zh=1013,Yi=1014,Vi=1015,Ma=1016,Bh=1017,Fh=1018,qo=1020,uv=35902,fv=35899,dv=1021,hv=1022,Ui=1023,ba=1026,Ir=1027,pv=1028,Hh=1029,Fr=1030,Gh=1031,Vh=1033,Ic=33776,zc=33777,Bc=33778,Fc=33779,$d=35840,eh=35841,th=35842,nh=35843,ih=36196,ah=37492,rh=37496,sh=37488,oh=37489,Gc=37490,lh=37491,ch=37808,uh=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,_h=37816,vh=37817,xh=37818,yh=37819,Sh=37820,Mh=37821,bh=36492,Eh=36494,Th=36495,Ah=36283,Rh=36284,Vc=36285,Ch=36286,xS=3200,wh=0,yS=1,ir="",On="srgb",kc="srgb-linear",Xc="linear",Ft="srgb",xs=7680,Q0=519,SS=512,MS=513,bS=514,kh=515,ES=516,TS=517,Xh=518,AS=519,j0=35044,J0="300 es",ki=2e3,Yo=2001;function RS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CS(){const s=Zo("canvas");return s.style.display="block",s}const $0={};function e_(...s){const e="THREE."+s.shift();console.log(e,...s)}function mv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=mv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Tt(...s){s=mv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ps(...s){const e=s.join(" ");e in $0||($0[e]=!0,it(...s))}function wS(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const DS={[Xd]:Wd,[qd]:Kd,[Yd]:Qd,[zs]:Zd,[Wd]:Xd,[Kd]:qd,[Qd]:Yd,[Zd]:zs};class Hr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Dh=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function St(s,e,i){return Math.max(e,Math.min(i,s))}function US(s,e){return(s%e+e)%e}function ud(s,e,i){return(1-i)*s+i*e}function Io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $h=class $h{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;let mt=$h;class Gs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,m){let p=r[l+0],h=r[l+1],x=r[l+2],v=r[l+3],g=u[d+0],b=u[d+1],T=u[d+2],w=u[d+3];if(v!==w||p!==g||h!==b||x!==T){let M=p*g+h*b+x*T+v*w;M<0&&(g=-g,b=-b,T=-T,w=-w,M=-M);let y=1-m;if(M<.9995){const I=Math.acos(M),z=Math.sin(I);y=Math.sin(y*I)/z,m=Math.sin(m*I)/z,p=p*y+g*m,h=h*y+b*m,x=x*y+T*m,v=v*y+w*m}else{p=p*y+g*m,h=h*y+b*m,x=x*y+T*m,v=v*y+w*m;const I=1/Math.sqrt(p*p+h*h+x*x+v*v);p*=I,h*=I,x*=I,v*=I}}e[i]=p,e[i+1]=h,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const m=r[l],p=r[l+1],h=r[l+2],x=r[l+3],v=u[d],g=u[d+1],b=u[d+2],T=u[d+3];return e[i]=m*T+x*v+p*b-h*g,e[i+1]=p*T+x*g+h*v-m*b,e[i+2]=h*T+x*b+m*g-p*v,e[i+3]=x*T-m*v-p*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,m=Math.cos,p=Math.sin,h=m(r/2),x=m(l/2),v=m(u/2),g=p(r/2),b=p(l/2),T=p(u/2);switch(d){case"XYZ":this._x=g*x*v+h*b*T,this._y=h*b*v-g*x*T,this._z=h*x*T+g*b*v,this._w=h*x*v-g*b*T;break;case"YXZ":this._x=g*x*v+h*b*T,this._y=h*b*v-g*x*T,this._z=h*x*T-g*b*v,this._w=h*x*v+g*b*T;break;case"ZXY":this._x=g*x*v-h*b*T,this._y=h*b*v+g*x*T,this._z=h*x*T+g*b*v,this._w=h*x*v-g*b*T;break;case"ZYX":this._x=g*x*v-h*b*T,this._y=h*b*v+g*x*T,this._z=h*x*T-g*b*v,this._w=h*x*v+g*b*T;break;case"YZX":this._x=g*x*v+h*b*T,this._y=h*b*v+g*x*T,this._z=h*x*T-g*b*v,this._w=h*x*v-g*b*T;break;case"XZY":this._x=g*x*v-h*b*T,this._y=h*b*v-g*x*T,this._z=h*x*T+g*b*v,this._w=h*x*v+g*b*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],m=i[5],p=i[9],h=i[2],x=i[6],v=i[10],g=r+m+v;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(x-p)*b,this._y=(u-h)*b,this._z=(d-l)*b}else if(r>m&&r>v){const b=2*Math.sqrt(1+r-m-v);this._w=(x-p)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+h)/b}else if(m>v){const b=2*Math.sqrt(1+m-r-v);this._w=(u-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(p+x)/b}else{const b=2*Math.sqrt(1+v-r-m);this._w=(d-l)/b,this._x=(u+h)/b,this._y=(p+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,m=i._x,p=i._y,h=i._z,x=i._w;return this._x=r*x+d*m+l*h-u*p,this._y=l*x+d*p+u*m-r*h,this._z=u*x+d*h+r*p-l*m,this._w=d*x-r*m-l*p-u*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,u=-u,d=-d,m=-m);let p=1-i;if(m<.9995){const h=Math.acos(m),x=Math.sin(h);p=Math.sin(p*h)/x,i=Math.sin(i*h)/x,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ep=class ep{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(t_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(t_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,m=e.z,p=e.w,h=2*(d*l-m*r),x=2*(m*i-u*l),v=2*(u*r-d*i);return this.x=i+p*h+d*v-m*x,this.y=r+p*x+m*h-u*v,this.z=l+p*v+u*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,m=i.y,p=i.z;return this.x=l*p-u*m,this.y=u*d-r*p,this.z=r*m-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ep.prototype.isVector3=!0;let ae=ep;const fd=new ae,t_=new Gs,tp=class tp{constructor(e,i,r,l,u,d,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,m,p,h)}set(e,i,r,l,u,d,m,p,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=m,x[3]=i,x[4]=u,x[5]=p,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],m=r[3],p=r[6],h=r[1],x=r[4],v=r[7],g=r[2],b=r[5],T=r[8],w=l[0],M=l[3],y=l[6],I=l[1],z=l[4],C=l[7],B=l[2],L=l[5],P=l[8];return u[0]=d*w+m*I+p*B,u[3]=d*M+m*z+p*L,u[6]=d*y+m*C+p*P,u[1]=h*w+x*I+v*B,u[4]=h*M+x*z+v*L,u[7]=h*y+x*C+v*P,u[2]=g*w+b*I+T*B,u[5]=g*M+b*z+T*L,u[8]=g*y+b*C+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],m=e[5],p=e[6],h=e[7],x=e[8];return i*d*x-i*m*h-r*u*x+r*m*p+l*u*h-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],m=e[5],p=e[6],h=e[7],x=e[8],v=x*d-m*h,g=m*p-x*u,b=h*u-d*p,T=i*v+r*g+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(l*h-x*r)*w,e[2]=(m*r-l*d)*w,e[3]=g*w,e[4]=(x*i-l*p)*w,e[5]=(l*u-m*i)*w,e[6]=b*w,e[7]=(r*p-h*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,m){const p=Math.cos(u),h=Math.sin(u);return this.set(r*p,r*h,-r*(p*d+h*m)+d+e,-l*h,l*p,-l*(-h*d+p*m)+m+i,0,0,1),this}scale(e,i){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dd.makeScale(e,i)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dd.makeRotation(-e)),this}translate(e,i){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tp.prototype.isMatrix3=!0;let st=tp;const dd=new st,n_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LS(){const s={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ft&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[kc]:{primaries:e,whitePoint:r,transfer:Xc,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),s}const Et=LS();function Sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class NS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=Zo("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Sa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Sa(i[r]/255)*255):i[r]=Sa(i[r]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class Wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?u.push(hd(l[d].image)):u.push(hd(l[d]))}else u=hd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function hd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?NS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let PS=0;const pd=new ae;class In extends Hr{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=xa,l=xa,u=Pn,d=Pr,m=Ui,p=fi,h=In.DEFAULT_ANISOTROPY,x=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Qo(),this.name="",this.source=new Wh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jd:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jd:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ov;In.DEFAULT_ANISOTROPY=1;const np=class np{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,h=p[0],x=p[4],v=p[8],g=p[1],b=p[5],T=p[9],w=p[2],M=p[6],y=p[10];if(Math.abs(x-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+M)<.1&&Math.abs(h+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(h+1)/2,C=(b+1)/2,B=(y+1)/2,L=(x+g)/4,P=(v+w)/4,E=(T+M)/4;return z>C&&z>B?z<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(z),l=L/r,u=P/r):C>B?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=L/l,u=E/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=P/u,l=E/u),this.set(r,l,u,i),this}let I=Math.sqrt((M-T)*(M-T)+(v-w)*(v-w)+(g-x)*(g-x));return Math.abs(I)<.001&&(I=1),this.x=(M-T)/I,this.y=(v-w)/I,this.z=(g-x)/I,this.w=Math.acos((h+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};np.prototype.isVector4=!0;let tn=np;class IS extends Hr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new In(l),d=r.count;for(let m=0;m<d;m++)this.textures[m]=u.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends IS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class gv extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=class qc{constructor(e,i,r,l,u,d,m,p,h,x,v,g,b,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,m,p,h,x,v,g,b,T,w,M)}set(e,i,r,l,u,d,m,p,h,x,v,g,b,T,w,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=u,y[5]=d,y[9]=m,y[13]=p,y[2]=h,y[6]=x,y[10]=v,y[14]=g,y[3]=b,y[7]=T,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ss.setFromMatrixColumn(e,0).length(),u=1/Ss.setFromMatrixColumn(e,1).length(),d=1/Ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),m=Math.sin(r),p=Math.cos(l),h=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const g=d*x,b=d*v,T=m*x,w=m*v;i[0]=p*x,i[4]=-p*v,i[8]=h,i[1]=b+T*h,i[5]=g-w*h,i[9]=-m*p,i[2]=w-g*h,i[6]=T+b*h,i[10]=d*p}else if(e.order==="YXZ"){const g=p*x,b=p*v,T=h*x,w=h*v;i[0]=g+w*m,i[4]=T*m-b,i[8]=d*h,i[1]=d*v,i[5]=d*x,i[9]=-m,i[2]=b*m-T,i[6]=w+g*m,i[10]=d*p}else if(e.order==="ZXY"){const g=p*x,b=p*v,T=h*x,w=h*v;i[0]=g-w*m,i[4]=-d*v,i[8]=T+b*m,i[1]=b+T*m,i[5]=d*x,i[9]=w-g*m,i[2]=-d*h,i[6]=m,i[10]=d*p}else if(e.order==="ZYX"){const g=d*x,b=d*v,T=m*x,w=m*v;i[0]=p*x,i[4]=T*h-b,i[8]=g*h+w,i[1]=p*v,i[5]=w*h+g,i[9]=b*h-T,i[2]=-h,i[6]=m*p,i[10]=d*p}else if(e.order==="YZX"){const g=d*p,b=d*h,T=m*p,w=m*h;i[0]=p*x,i[4]=w-g*v,i[8]=T*v+b,i[1]=v,i[5]=d*x,i[9]=-m*x,i[2]=-h*x,i[6]=b*v+T,i[10]=g-w*v}else if(e.order==="XZY"){const g=d*p,b=d*h,T=m*p,w=m*h;i[0]=p*x,i[4]=-v,i[8]=h*x,i[1]=g*v+w,i[5]=d*x,i[9]=b*v-T,i[2]=T*v-b,i[6]=m*x,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BS,e,FS)}lookAt(e,i,r){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ja.crossVectors(r,li),ja.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ja.crossVectors(r,li)),ja.normalize(),hc.crossVectors(li,ja),l[0]=ja.x,l[4]=hc.x,l[8]=li.x,l[1]=ja.y,l[5]=hc.y,l[9]=li.y,l[2]=ja.z,l[6]=hc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],m=r[4],p=r[8],h=r[12],x=r[1],v=r[5],g=r[9],b=r[13],T=r[2],w=r[6],M=r[10],y=r[14],I=r[3],z=r[7],C=r[11],B=r[15],L=l[0],P=l[4],E=l[8],N=l[12],Y=l[1],G=l[5],j=l[9],de=l[13],pe=l[2],Q=l[6],O=l[10],H=l[14],J=l[3],me=l[7],Ee=l[11],U=l[15];return u[0]=d*L+m*Y+p*pe+h*J,u[4]=d*P+m*G+p*Q+h*me,u[8]=d*E+m*j+p*O+h*Ee,u[12]=d*N+m*de+p*H+h*U,u[1]=x*L+v*Y+g*pe+b*J,u[5]=x*P+v*G+g*Q+b*me,u[9]=x*E+v*j+g*O+b*Ee,u[13]=x*N+v*de+g*H+b*U,u[2]=T*L+w*Y+M*pe+y*J,u[6]=T*P+w*G+M*Q+y*me,u[10]=T*E+w*j+M*O+y*Ee,u[14]=T*N+w*de+M*H+y*U,u[3]=I*L+z*Y+C*pe+B*J,u[7]=I*P+z*G+C*Q+B*me,u[11]=I*E+z*j+C*O+B*Ee,u[15]=I*N+z*de+C*H+B*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],m=e[5],p=e[9],h=e[13],x=e[2],v=e[6],g=e[10],b=e[14],T=e[3],w=e[7],M=e[11],y=e[15],I=p*b-h*g,z=m*b-h*v,C=m*g-p*v,B=d*b-h*x,L=d*g-p*x,P=d*v-m*x;return i*(w*I-M*z+y*C)-r*(T*I-M*B+y*L)+l*(T*z-w*B+y*P)-u*(T*C-w*L+M*P)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],d=e[5],m=e[9],p=e[2],h=e[6],x=e[10];return i*(d*x-m*h)-r*(u*x-m*p)+l*(u*h-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],m=e[5],p=e[6],h=e[7],x=e[8],v=e[9],g=e[10],b=e[11],T=e[12],w=e[13],M=e[14],y=e[15],I=i*m-r*d,z=i*p-l*d,C=i*h-u*d,B=r*p-l*m,L=r*h-u*m,P=l*h-u*p,E=x*w-v*T,N=x*M-g*T,Y=x*y-b*T,G=v*M-g*w,j=v*y-b*w,de=g*y-b*M,pe=I*de-z*j+C*G+B*Y-L*N+P*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/pe;return e[0]=(m*de-p*j+h*G)*Q,e[1]=(l*j-r*de-u*G)*Q,e[2]=(w*P-M*L+y*B)*Q,e[3]=(g*L-v*P-b*B)*Q,e[4]=(p*Y-d*de-h*N)*Q,e[5]=(i*de-l*Y+u*N)*Q,e[6]=(M*C-T*P-y*z)*Q,e[7]=(x*P-g*C+b*z)*Q,e[8]=(d*j-m*Y+h*E)*Q,e[9]=(r*Y-i*j-u*E)*Q,e[10]=(T*L-w*C+y*I)*Q,e[11]=(v*C-x*L-b*I)*Q,e[12]=(m*N-d*G-p*E)*Q,e[13]=(i*G-r*N+l*E)*Q,e[14]=(w*z-T*B-M*I)*Q,e[15]=(x*B-v*z+g*I)*Q,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,m=e.y,p=e.z,h=u*d,x=u*m;return this.set(h*d+r,h*m-l*p,h*p+l*m,0,h*m+l*p,x*m+r,x*p-l*d,0,h*p-l*m,x*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,m=i._z,p=i._w,h=u+u,x=d+d,v=m+m,g=u*h,b=u*x,T=u*v,w=d*x,M=d*v,y=m*v,I=p*h,z=p*x,C=p*v,B=r.x,L=r.y,P=r.z;return l[0]=(1-(w+y))*B,l[1]=(b+C)*B,l[2]=(T-z)*B,l[3]=0,l[4]=(b-C)*L,l[5]=(1-(g+y))*L,l[6]=(M+I)*L,l[7]=0,l[8]=(T+z)*P,l[9]=(M-I)*P,l[10]=(1-(g+w))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=Ss.set(l[0],l[1],l[2]).length();const m=Ss.set(l[4],l[5],l[6]).length(),p=Ss.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ri.copy(this);const h=1/d,x=1/m,v=1/p;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=d,r.y=m,r.z=p,this}makePerspective(e,i,r,l,u,d,m=ki,p=!1){const h=this.elements,x=2*u/(i-e),v=2*u/(r-l),g=(i+e)/(i-e),b=(r+l)/(r-l);let T,w;if(p)T=u/(d-u),w=d*u/(d-u);else if(m===ki)T=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(m===Yo)T=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d,m=ki,p=!1){const h=this.elements,x=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),b=-(r+l)/(r-l);let T,w;if(p)T=1/(d-u),w=d/(d-u);else if(m===ki)T=-2/(d-u),w=-(d+u)/(d-u);else if(m===Yo)T=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};qc.prototype.isMatrix4=!0;let nn=qc;const Ss=new ae,Ri=new nn,BS=new ae(0,0,0),FS=new ae(1,1,1),ja=new ae,hc=new ae,li=new ae,a_=new nn,r_=new Gs;class or{constructor(e=0,i=0,r=0,l=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],m=l[8],p=l[1],h=l[5],x=l[9],v=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(m,u)):(this._x=Math.atan2(-x,b),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const s_=new ae,Ms=new Gs,pa=new nn,pc=new ae,zo=new ae,GS=new ae,VS=new Gs,o_=new ae(1,0,0),l_=new ae(0,1,0),c_=new ae(0,0,1),u_={type:"added"},kS={type:"removed"},bs={type:"childadded",child:null},md={type:"childremoved",child:null};class zn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ae,i=new or,r=new Gs,l=new ae(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new st}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(o_,e)}rotateY(e){return this.rotateOnAxis(l_,e)}rotateZ(e){return this.rotateOnAxis(c_,e)}translateOnAxis(e,i){return s_.copy(e).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(o_,e)}translateY(e){return this.translateOnAxis(l_,e)}translateZ(e){return this.translateOnAxis(c_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?pc.copy(e):pc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(zo,pc,this.up):pa.lookAt(pc,zo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(pa),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u_),bs.child=e,this.dispatchEvent(bs),bs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kS),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,VS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,m=u.length;d<m;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,x=p.length;h<x;h++){const v=p[h];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(u(e.materials,this.material[p]));l.material=m}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];l.animations.push(u(e.animations,p))}}if(i){const m=d(e.geometries),p=d(e.materials),h=d(e.textures),x=d(e.images),v=d(e.shapes),g=d(e.skeletons),b=d(e.animations),T=d(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(m){const p=[];for(const h in m){const x=m[h];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new ae(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zr extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),y=this._getHandJoint(h,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=x.position.distanceTo(v.position),b=.02,T=.005;h.inputState.pinching&&g>b+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new zr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},mc={h:0,s:0,l:0};function _d(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Mt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=r,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Et.workingColorSpace){if(e=US(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=_d(d,u,e+1/3),this.g=_d(d,u,e),this.b=_d(d,u,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=On){function r(u){u!==void 0&&parseFloat(u)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=On){const r=_v[e.toLowerCase()];return r!==void 0?this.setHex(r,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Et.workingToColorSpace(Nn.copy(this),e),Math.round(St(Nn.r*255,0,255))*65536+Math.round(St(Nn.g*255,0,255))*256+Math.round(St(Nn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(r,l,u),m=Math.min(r,l,u);let p,h;const x=(m+d)/2;if(m===d)p=0,h=0;else{const v=d-m;switch(h=x<=.5?v/(d+m):v/(2-d-m),d){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=x,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=On){Et.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==On?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(mc);const r=ud(Ja.h,mc.h,i),l=ud(Ja.s,mc.s,i),u=ud(Ja.l,mc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Mt;Mt.NAMES=_v;class WS extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new ae,ma=new ae,vd=new ae,ga=new ae,Es=new ae,Ts=new ae,f_=new ae,xd=new ae,yd=new ae,Sd=new ae,Md=new tn,bd=new tn,Ed=new tn;class Di{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ci.subVectors(l,i),ma.subVectors(r,i),vd.subVectors(e,i);const d=Ci.dot(Ci),m=Ci.dot(ma),p=Ci.dot(vd),h=ma.dot(ma),x=ma.dot(vd),v=d*h-m*m;if(v===0)return u.set(0,0,0),null;const g=1/v,b=(h*p-m*x)*g,T=(d*x-m*p)*g;return u.set(1-b-T,T,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,u,d,m,p){return this.getBarycoord(e,i,r,l,ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ga.x),p.addScaledVector(d,ga.y),p.addScaledVector(m,ga.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return Md.setScalar(0),bd.setScalar(0),Ed.setScalar(0),Md.fromBufferAttribute(e,i),bd.fromBufferAttribute(e,r),Ed.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Md,u.x),d.addScaledVector(bd,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),ma.subVectors(e,i),Ci.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ci.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,m;Es.subVectors(l,r),Ts.subVectors(u,r),xd.subVectors(e,r);const p=Es.dot(xd),h=Ts.dot(xd);if(p<=0&&h<=0)return i.copy(r);yd.subVectors(e,l);const x=Es.dot(yd),v=Ts.dot(yd);if(x>=0&&v<=x)return i.copy(l);const g=p*v-x*h;if(g<=0&&p>=0&&x<=0)return d=p/(p-x),i.copy(r).addScaledVector(Es,d);Sd.subVectors(e,u);const b=Es.dot(Sd),T=Ts.dot(Sd);if(T>=0&&b<=T)return i.copy(u);const w=b*h-p*T;if(w<=0&&h>=0&&T<=0)return m=h/(h-T),i.copy(r).addScaledVector(Ts,m);const M=x*T-b*v;if(M<=0&&v-x>=0&&b-T>=0)return f_.subVectors(u,l),m=(v-x)/(v-x+(b-T)),i.copy(l).addScaledVector(f_,m);const y=1/(M+w+g);return d=w*y,m=g*y,i.copy(r).addScaledVector(Es,d).addScaledVector(Ts,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,m=u.count;d<m;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(u,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),_c.subVectors(this.max,Bo),As.subVectors(e.a,Bo),Rs.subVectors(e.b,Bo),Cs.subVectors(e.c,Bo),$a.subVectors(Rs,As),er.subVectors(Cs,Rs),Cr.subVectors(As,Cs);let i=[0,-$a.z,$a.y,0,-er.z,er.y,0,-Cr.z,Cr.y,$a.z,0,-$a.x,er.z,0,-er.x,Cr.z,0,-Cr.x,-$a.y,$a.x,0,-er.y,er.x,0,-Cr.y,Cr.x,0];return!Td(i,As,Rs,Cs,_c)||(i=[1,0,0,0,1,0,0,0,1],!Td(i,As,Rs,Cs,_c))?!1:(vc.crossVectors($a,er),i=[vc.x,vc.y,vc.z],Td(i,As,Rs,Cs,_c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],wi=new ae,gc=new jo,As=new ae,Rs=new ae,Cs=new ae,$a=new ae,er=new ae,Cr=new ae,Bo=new ae,_c=new ae,vc=new ae,wr=new ae;function Td(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){wr.fromArray(s,u);const m=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),p=e.dot(wr),h=i.dot(wr),x=r.dot(wr);if(Math.max(-Math.max(p,h,x),Math.min(p,h,x))>m)return!1}return!0}const gn=new ae,xc=new mt;let qS=0;class qi extends Hr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=j0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),u=Zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vv extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class xv extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Hn extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const YS=new jo,Fo=new ae,Ad=new ae;class Yh{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):YS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Ad)),this.expandByPoint(Fo.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ZS=0;const yi=new nn,Rd=new zn,ws=new ae,ci=new jo,Ho=new jo,Mn=new ae;class Li extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RS(e)?xv:vv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,r){return yi.makeTranslation(e,i,r),this.applyMatrix4(yi),this}scale(e,i,r){return yi.makeScale(e,i,r),this.applyMatrix4(yi),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ci.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const m=i[u];Ho.setFromBufferAttribute(m),this.morphTargetsRelative?(Mn.addVectors(ci.min,Ho.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,Ho.max),ci.expandByPoint(Mn)):(ci.expandByPoint(Ho.min),ci.expandByPoint(Ho.max))}ci.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const m=i[u],p=this.morphTargetsRelative;for(let h=0,x=m.count;h<x;h++)Mn.fromBufferAttribute(m,h),p&&(ws.fromBufferAttribute(e,h),Mn.add(ws)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new qi(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const m=[],p=[];for(let E=0;E<r.count;E++)m[E]=new ae,p[E]=new ae;const h=new ae,x=new ae,v=new ae,g=new mt,b=new mt,T=new mt,w=new ae,M=new ae;function y(E,N,Y){h.fromBufferAttribute(r,E),x.fromBufferAttribute(r,N),v.fromBufferAttribute(r,Y),g.fromBufferAttribute(u,E),b.fromBufferAttribute(u,N),T.fromBufferAttribute(u,Y),x.sub(h),v.sub(h),b.sub(g),T.sub(g);const G=1/(b.x*T.y-T.x*b.y);isFinite(G)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(v,-b.y).multiplyScalar(G),M.copy(v).multiplyScalar(b.x).addScaledVector(x,-T.x).multiplyScalar(G),m[E].add(w),m[N].add(w),m[Y].add(w),p[E].add(M),p[N].add(M),p[Y].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,N=I.length;E<N;++E){const Y=I[E],G=Y.start,j=Y.count;for(let de=G,pe=G+j;de<pe;de+=3)y(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const z=new ae,C=new ae,B=new ae,L=new ae;function P(E){B.fromBufferAttribute(l,E),L.copy(B);const N=m[E];z.copy(N),z.sub(B.multiplyScalar(B.dot(N))).normalize(),C.crossVectors(L,N);const G=C.dot(p[E])<0?-1:1;d.setXYZW(E,z.x,z.y,z.z,G)}for(let E=0,N=I.length;E<N;++E){const Y=I[E],G=Y.start,j=Y.count;for(let de=G,pe=G+j;de<pe;de+=3)P(e.getX(de+0)),P(e.getX(de+1)),P(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const l=new ae,u=new ae,d=new ae,m=new ae,p=new ae,h=new ae,x=new ae,v=new ae;if(e)for(let g=0,b=e.count;g<b;g+=3){const T=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),h.fromBufferAttribute(r,M),m.add(x),p.add(x),h.add(x),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(m,p){const h=m.array,x=m.itemSize,v=m.normalized,g=new h.constructor(p.length*x);let b=0,T=0;for(let w=0,M=p.length;w<M;w++){m.isInterleavedBufferAttribute?b=p[w]*m.data.stride+m.offset:b=p[w]*x;for(let y=0;y<x;y++)g[T++]=h[b++]}return new qi(g,x,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const m in l){const p=l[m],h=e(p,r);i.setAttribute(m,h)}const u=this.morphAttributes;for(const m in u){const p=[],h=u[m];for(let x=0,v=h.length;x<v;x++){const g=h[x],b=e(g,r);p.push(b)}i.morphAttributes[m]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,p=d.length;m<p;m++){const h=d[m];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],x=[];for(let v=0,g=h.length;v<g;v++){const b=h[v];x.push(b.toJSON(e.data))}x.length>0&&(l[p]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const u=e.morphAttributes;for(const h in u){const x=[],v=u[h];for(let g=0,b=v.length;g<b;g++)x.push(v[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KS=0;class Jo extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Os,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=kd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vd&&(r.blendSrc=this.blendSrc),this.blendDst!==kd&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const m in u){const p=u[m];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const va=new ae,Cd=new ae,yc=new ae,tr=new ae,wd=new ae,Sc=new ae,Dd=new ae;class yv{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Cd.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),tr.copy(this.origin).sub(Cd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(yc),m=tr.dot(this.direction),p=-tr.dot(yc),h=tr.lengthSq(),x=Math.abs(1-d*d);let v,g,b,T;if(x>0)if(v=d*p-m,g=d*m-p,T=u*x,v>=0)if(g>=-T)if(g<=T){const w=1/x;v*=w,g*=w,b=v*(v+d*g+2*m)+g*(d*v+g+2*p)+h}else g=u,v=Math.max(0,-(d*g+m)),b=-v*v+g*(g+2*p)+h;else g=-u,v=Math.max(0,-(d*g+m)),b=-v*v+g*(g+2*p)+h;else g<=-T?(v=Math.max(0,-(-d*u+m)),g=v>0?-u:Math.min(Math.max(-u,-p),u),b=-v*v+g*(g+2*p)+h):g<=T?(v=0,g=Math.min(Math.max(-u,-p),u),b=g*(g+2*p)+h):(v=Math.max(0,-(d*u+m)),g=v>0?u:Math.min(Math.max(-u,-p),u),b=-v*v+g*(g+2*p)+h);else g=d>0?-u:u,v=Math.max(0,-(d*g+m)),b=-v*v+g*(g+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Cd).addScaledVector(yc,g),b}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),m=r-d,p=r+d;return p<0?null:m<0?this.at(p,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,m,p;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),x>=0?(u=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(u=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(m=(e.min.z-g.z)*v,p=(e.max.z-g.z)*v):(m=(e.max.z-g.z)*v,p=(e.min.z-g.z)*v),r>p||m>l)||((m>r||r!==r)&&(r=m),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,l,u){wd.subVectors(i,e),Sc.subVectors(r,e),Dd.crossVectors(wd,Sc);let d=this.direction.dot(Dd),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;tr.subVectors(this.origin,e);const p=m*this.direction.dot(Sc.crossVectors(tr,Sc));if(p<0)return null;const h=m*this.direction.dot(wd.cross(tr));if(h<0||p+h>d)return null;const x=-m*tr.dot(Dd);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wc extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const d_=new nn,Dr=new yv,Mc=new Yh,h_=new ae,bc=new ae,Ec=new ae,Tc=new ae,Ud=new ae,Ac=new ae,p_=new ae,Rc=new ae;class Qn extends zn{constructor(e=new Li,i=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const m=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(u&&m){Ac.set(0,0,0);for(let p=0,h=u.length;p<h;p++){const x=m[p],v=u[p];x!==0&&(Ud.fromBufferAttribute(v,e),d?Ac.addScaledVector(Ud,x):Ac.addScaledVector(Ud.sub(i),x))}i.add(Ac)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(u),Dr.copy(e.ray).recast(e.near),!(Mc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Mc,h_)===null||Dr.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(d_.copy(u).invert(),Dr.copy(e.ray).applyMatrix4(d_),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Dr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,m=u.index,p=u.attributes.position,h=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,g=u.groups,b=u.drawRange;if(m!==null)if(Array.isArray(d))for(let T=0,w=g.length;T<w;T++){const M=g[T],y=d[M.materialIndex],I=Math.max(M.start,b.start),z=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let C=I,B=z;C<B;C+=3){const L=m.getX(C),P=m.getX(C+1),E=m.getX(C+2);l=Cc(this,y,e,r,h,x,v,L,P,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),w=Math.min(m.count,b.start+b.count);for(let M=T,y=w;M<y;M+=3){const I=m.getX(M),z=m.getX(M+1),C=m.getX(M+2);l=Cc(this,d,e,r,h,x,v,I,z,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,w=g.length;T<w;T++){const M=g[T],y=d[M.materialIndex],I=Math.max(M.start,b.start),z=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let C=I,B=z;C<B;C+=3){const L=C,P=C+1,E=C+2;l=Cc(this,y,e,r,h,x,v,L,P,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),w=Math.min(p.count,b.start+b.count);for(let M=T,y=w;M<y;M+=3){const I=M,z=M+1,C=M+2;l=Cc(this,d,e,r,h,x,v,I,z,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function QS(s,e,i,r,l,u,d,m){let p;if(e.side===Kn?p=r.intersectTriangle(d,u,l,!0,m):p=r.intersectTriangle(l,u,d,e.side===sr,m),p===null)return null;Rc.copy(m),Rc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Rc);return h<i.near||h>i.far?null:{distance:h,point:Rc.clone(),object:s}}function Cc(s,e,i,r,l,u,d,m,p,h){s.getVertexPosition(m,bc),s.getVertexPosition(p,Ec),s.getVertexPosition(h,Tc);const x=QS(s,e,i,r,bc,Ec,Tc,p_);if(x){const v=new ae;Di.getBarycoord(p_,bc,Ec,Tc,v),l&&(x.uv=Di.getInterpolatedAttribute(l,m,p,h,v,new mt)),u&&(x.uv1=Di.getInterpolatedAttribute(u,m,p,h,v,new mt)),d&&(x.normal=Di.getInterpolatedAttribute(d,m,p,h,v,new ae),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:m,b:p,c:h,normal:new ae,materialIndex:0};Di.getNormal(bc,Ec,Tc,g.normal),x.face=g,x.barycoord=v}return x}class jS extends In{constructor(e=null,i=1,r=1,l,u,d,m,p,h=wn,x=wn,v,g){super(null,d,m,p,h,x,l,u,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new ae,JS=new ae,$S=new st;class Lr{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ld.subVectors(r,i).cross(JS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Ld),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$S.getNormalMatrix(e),l=this.coplanarPoint(Ld).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Yh,eM=new mt(.5,.5),wc=new ae;class Zh{constructor(e=new Lr,i=new Lr,r=new Lr,l=new Lr,u=new Lr,d=new Lr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(u),m[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,u=e.elements,d=u[0],m=u[1],p=u[2],h=u[3],x=u[4],v=u[5],g=u[6],b=u[7],T=u[8],w=u[9],M=u[10],y=u[11],I=u[12],z=u[13],C=u[14],B=u[15];if(l[0].setComponents(h-d,b-x,y-T,B-I).normalize(),l[1].setComponents(h+d,b+x,y+T,B+I).normalize(),l[2].setComponents(h+m,b+v,y+w,B+z).normalize(),l[3].setComponents(h-m,b-v,y-w,B-z).normalize(),r)l[4].setComponents(p,g,M,C).normalize(),l[5].setComponents(h-p,b-g,y-M,B-C).normalize();else if(l[4].setComponents(h-p,b-g,y-M,B-C).normalize(),i===ki)l[5].setComponents(h+p,b+g,y+M,B+C).normalize();else if(i===Yo)l[5].setComponents(p,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const i=eM.distanceTo(e.center);return Ur.radius=.7071067811865476+i,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends In{constructor(e=[],i=Br,r,l,u,d,m,p,h,x){super(e,i,r,l,u,d,m,p,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fs extends In{constructor(e,i,r=Yi,l,u,d,m=wn,p=wn,h,x=ba,v=1){if(x!==ba&&x!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,u,d,m,p,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tM extends Fs{constructor(e,i=Yi,r=Br,l,u,d=wn,m=wn,p,h=ba){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,r,l,u,d,m,p,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends Li{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const m=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],h=[],x=[],v=[];let g=0,b=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(v,2));function T(w,M,y,I,z,C,B,L,P,E,N){const Y=C/P,G=B/E,j=C/2,de=B/2,pe=L/2,Q=P+1,O=E+1;let H=0,J=0;const me=new ae;for(let Ee=0;Ee<O;Ee++){const U=Ee*G-de;for(let W=0;W<Q;W++){const Se=W*Y-j;me[w]=Se*I,me[M]=U*z,me[y]=pe,h.push(me.x,me.y,me.z),me[w]=0,me[M]=0,me[y]=L>0?1:-1,x.push(me.x,me.y,me.z),v.push(W/P),v.push(1-Ee/E),H+=1}}for(let Ee=0;Ee<E;Ee++)for(let U=0;U<P;U++){const W=g+U+Q*Ee,Se=g+U+Q*(Ee+1),Ae=g+(U+1)+Q*(Ee+1),Oe=g+(U+1)+Q*Ee;p.push(W,Se,Oe),p.push(Se,Ae,Oe),J+=6}m.addGroup(b,J,N),b+=J,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class el extends Li{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,m=Math.floor(r),p=Math.floor(l),h=m+1,x=p+1,v=e/m,g=i/p,b=[],T=[],w=[],M=[];for(let y=0;y<x;y++){const I=y*g-d;for(let z=0;z<h;z++){const C=z*v-u;T.push(C,-I,0),w.push(0,0,1),M.push(z/m),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let I=0;I<m;I++){const z=I+h*y,C=I+h*(y+1),B=I+1+h*(y+1),L=I+1+h*y;b.push(z,C,L),b.push(C,B,L)}this.setIndex(b),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kh extends Li{constructor(e=.5,i=1,r=32,l=1,u=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const m=[],p=[],h=[],x=[];let v=e;const g=(i-e)/l,b=new ae,T=new mt;for(let w=0;w<=l;w++){for(let M=0;M<=r;M++){const y=u+M/r*d;b.x=v*Math.cos(y),b.y=v*Math.sin(y),p.push(b.x,b.y,b.z),h.push(0,0,1),T.x=(b.x/i+1)/2,T.y=(b.y/i+1)/2,x.push(T.x,T.y)}v+=g}for(let w=0;w<l;w++){const M=w*(r+1);for(let y=0;y<r;y++){const I=y+M,z=I,C=I+r+1,B=I+r+2,L=I+1;m.push(z,C,L),m.push(C,B,L)}}this.setIndex(m),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ko extends Li{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:m},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(d+m,Math.PI);let h=0;const x=[],v=new ae,g=new ae,b=[],T=[],w=[],M=[];for(let y=0;y<=r;y++){const I=[],z=y/r,C=d+z*m,B=e*Math.cos(C),L=Math.sqrt(e*e-B*B);let P=0;y===0&&d===0?P=.5/i:y===r&&p===Math.PI&&(P=-.5/i);for(let E=0;E<=i;E++){const N=E/i,Y=l+N*u;v.x=-L*Math.cos(Y),v.y=B,v.z=L*Math.sin(Y),T.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(N+P,1-z),I.push(h++)}x.push(I)}for(let y=0;y<r;y++)for(let I=0;I<i;I++){const z=x[y][I+1],C=x[y][I],B=x[y+1][I],L=x[y+1][I+1];(y!==0||d>0)&&b.push(z,C,L),(y!==r-1||p<Math.PI)&&b.push(C,B,L)}this.setIndex(b),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(m_(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(m_(l[0])){const u=[];for(let d=0,m=l.length;d<m;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function m_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function bv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const iM={clone:Hs,merge:Fn};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=nM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(l.value);break;case"v2":this.uniforms[r].value=new mt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(l.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ev extends Jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g_ extends Ev{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oM extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(__(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!__(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function __(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class cM{constructor(e,i,r){const l=this;let u=!1,d=0,m=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){m++,u===!1&&l.onStart!==void 0&&l.onStart(x,d,m),u=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,m),d===m&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return h.push(x,v),this},this.removeHandler=function(x){const v=h.indexOf(x);return v!==-1&&h.splice(v,2),this},this.getHandler=function(x){for(let v=0,g=h.length;v<g;v+=2){const b=h[v],T=h[v+1];if(b.global&&(b.lastIndex=0),b.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const uM=new cM;class Qh{constructor(e){this.manager=e!==void 0?e:uM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class fM extends Qh{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=Nd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let v=Ds.get(d);v===void 0&&(v=[],Ds.set(d,v)),v.push({onLoad:i,onError:l})}return d}const m=Zo("img");function p(){x(),i&&i(this);const v=Ds.get(this)||[];for(let g=0;g<v.length;g++){const b=v[g];b.onLoad&&b.onLoad(this)}Ds.delete(this),u.manager.itemEnd(e)}function h(v){x(),l&&l(v),Nd.remove(`image:${e}`);const g=Ds.get(this)||[];for(let b=0;b<g.length;b++){const T=g[b];T.onError&&T.onError(v)}Ds.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function x(){m.removeEventListener("load",p,!1),m.removeEventListener("error",h,!1)}return m.addEventListener("load",p,!1),m.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(m.crossOrigin=this.crossOrigin),Nd.add(`image:${e}`,m),u.manager.itemStart(e),m.src=e,m}}class dM extends Qh{constructor(e){super(e)}load(e,i,r,l){const u=new In,d=new fM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(m){u.image=m,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class jh extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Od=new nn,v_=new ae,x_=new ae;class Tv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;v_.setFromMatrixPosition(e.matrixWorld),i.position.copy(v_),x_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(x_),i.updateMatrixWorld(),Od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Yo||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dc=new ae,Uc=new Gs,Fi=new ae;class Av extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dc,Uc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Dc,Uc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ae,y_=new mt,S_=new mt;class ui extends Av{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,y_,S_),i.subVectors(S_,y_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/h,l*=d.width/p,r*=d.height/h}const m=this.filmOffset;m!==0&&(u+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class hM extends Tv{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}}class pM extends jh{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new hM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Jh extends Av{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,m=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,m-=x*this.view.offsetY,p=m-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mM extends Tv{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M_ extends jh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new mM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class gM extends jh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Ls=1;class _M extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Us,Ls,e,i);l.layers=this.layers,this.add(l);const u=new ui(Us,Ls,e,i);u.layers=this.layers,this.add(u);const d=new ui(Us,Ls,e,i);d.layers=this.layers,this.add(d);const m=new ui(Us,Ls,e,i);m.layers=this.layers,this.add(m);const p=new ui(Us,Ls,e,i);p.layers=this.layers,this.add(p);const h=new ui(Us,Ls,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,m,p]=i;for(const h of i)this.remove(h);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Yo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,m,p,h,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,g,b),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class vM extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const b_=new nn;class E_{constructor(e,i,r=0,l=1/0){this.ray=new yv(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Tt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return b_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b_),this}intersectObject(e,i=!0,r=[]){return Uh(e,this,r,i),r.sort(T_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)Uh(e[l],this,r,i);return r.sort(T_),r}}function T_(s,e){return s.distance-e.distance}function Uh(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let d=0,m=u.length;d<m;d++)Uh(u[d],e,i,!0)}}class xM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const ip=class ip{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};ip.prototype.isMatrix2=!0;let A_=ip;function R_(s,e,i,r){const l=yM(r);switch(i){case dv:return s*e;case pv:return s*e/l.components*l.byteLength;case Hh:return s*e/l.components*l.byteLength;case Fr:return s*e*2/l.components*l.byteLength;case Gh:return s*e*2/l.components*l.byteLength;case hv:return s*e*3/l.components*l.byteLength;case Ui:return s*e*4/l.components*l.byteLength;case Vh:return s*e*4/l.components*l.byteLength;case Ic:case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(s,16)*Math.max(e,8)/4;case $d:case th:return Math.max(s,8)*Math.max(e,8)/2;case ih:case ah:case sh:case oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rh:case Gc:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bh:case Eh:case Th:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yM(s){switch(s){case fi:case lv:return{byteLength:1,components:1};case Wo:case cv:case Ma:return{byteLength:2,components:1};case Bh:case Fh:return{byteLength:2,components:4};case Yi:case zh:case Vi:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function Rv(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function SM(s){const e=new WeakMap;function i(m,p){const h=m.array,x=m.usage,v=h.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,h,x),m.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=s.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:v}}function r(m,p,h){const x=p.array,v=p.updateRanges;if(s.bindBuffer(h,m),v.length===0)s.bufferSubData(h,0,x);else{v.sort((b,T)=>b.start-T.start);let g=0;for(let b=1;b<v.length;b++){const T=v[g],w=v[b];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let b=0,T=v.length;b<T;b++){const w=v[b];s.bufferSubData(h,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(s.deleteBuffer(p.buffer),e.delete(m))}function d(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const x=e.get(m);(!x||x.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,i(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,p),h.version=m.version}}return{get:l,remove:u,update:d}}var MM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
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
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
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
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,WM=`#define PI 3.141592653589793
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
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YM=`vec3 transformedNormal = objectNormal;
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
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
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
}`,ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
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
#endif`,yb=`uniform sampler2D dfgLUT;
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
}`,Sb=`
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
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oE=`float getShadowMask() {
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
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,DE=`#define DISTANCE
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
}`,UE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,PE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,zE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,HE=`#define MATCAP
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
}`,GE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,kE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,WE=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,KE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,$E=`uniform vec3 color;
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
}`,eT=`uniform float rotation;
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
}`,tT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:MM,alphahash_pars_fragment:bM,alphamap_fragment:EM,alphamap_pars_fragment:TM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:wM,batching_pars_vertex:DM,batching_vertex:UM,begin_vertex:LM,beginnormal_vertex:NM,bsdfs:OM,iridescence_fragment:PM,bumpmap_pars_fragment:IM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:kM,color_vertex:XM,common:WM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:YM,displacementmap_pars_vertex:ZM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:jM,colorspace_fragment:JM,colorspace_pars_fragment:$M,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:ab,fog_vertex:rb,fog_pars_vertex:sb,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:fb,lights_lambert_pars_fragment:db,lights_pars_begin:hb,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:_b,lights_phong_pars_fragment:vb,lights_physical_fragment:xb,lights_physical_pars_fragment:yb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:bb,lightprobes_pars_fragment:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:zb,morphtarget_pars_vertex:Bb,morphtarget_vertex:Fb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:kb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:jb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:oE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:fE,specularmap_fragment:dE,specularmap_pars_fragment:hE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:_E,uv_pars_fragment:vE,uv_pars_vertex:xE,uv_vertex:yE,worldpos_vertex:SE,background_vert:ME,background_frag:bE,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:AE,cube_frag:RE,depth_vert:CE,depth_frag:wE,distance_vert:DE,distance_frag:UE,equirect_vert:LE,equirect_frag:NE,linedashed_vert:OE,linedashed_frag:PE,meshbasic_vert:IE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:HE,meshmatcap_frag:GE,meshnormal_vert:VE,meshnormal_frag:kE,meshphong_vert:XE,meshphong_frag:WE,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:ZE,meshtoon_frag:KE,points_vert:QE,points_frag:jE,shadow_vert:JE,shadow_frag:$E,sprite_vert:eT,sprite_frag:tT},Be={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Gi={basic:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Fn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Fn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Fn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Fn([Be.points,Be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Fn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Fn([Be.common,Be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Fn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Fn([Be.sprite,Be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Fn([Be.common,Be.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Fn([Be.lights,Be.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gi.physical={uniforms:Fn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Lc={r:0,b:0,g:0},nT=new nn,Cv=new st;Cv.set(-1,0,0,0,1,0,0,0,1);function iT(s,e,i,r,l,u){const d=new Mt(0);let m=l===!0?0:1,p,h,x=null,v=0,g=null;function b(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){const C=I.backgroundBlurriness>0;z=e.get(z,C)}return z}function T(I){let z=!1;const C=b(I);C===null?M(d,m):C&&C.isColor&&(M(C,1),z=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(I,z){const C=b(z);C&&(C.isCubeTexture||C.mapping===Yc)?(h===void 0&&(h=new Qn(new $o(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Hs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nT.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Cv),h.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ft,(x!==C||v!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=C,v=C.version,g=s.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Qn(new el(2,2),new Zi({name:"BackgroundMaterial",uniforms:Hs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=C,v=C.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function M(I,z){I.getRGB(Lc,bv(s)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,z,u)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,z=1){d.set(I),m=z,M(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,M(d,m)},render:T,addToRenderList:w,dispose:y}}function aT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,d=!1;function m(G,j,de,pe,Q){let O=!1;const H=v(G,pe,de,j);u!==H&&(u=H,h(u.object)),O=b(G,pe,de,Q),O&&T(G,pe,de,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,C(G,j,de,pe),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function x(G){return s.deleteVertexArray(G)}function v(G,j,de,pe){const Q=pe.wireframe===!0;let O=r[j.id];O===void 0&&(O={},r[j.id]=O);const H=G.isInstancedMesh===!0?G.id:0;let J=O[H];J===void 0&&(J={},O[H]=J);let me=J[de.id];me===void 0&&(me={},J[de.id]=me);let Ee=me[Q];return Ee===void 0&&(Ee=g(p()),me[Q]=Ee),Ee}function g(G){const j=[],de=[],pe=[];for(let Q=0;Q<i;Q++)j[Q]=0,de[Q]=0,pe[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:de,attributeDivisors:pe,object:G,attributes:{},index:null}}function b(G,j,de,pe){const Q=u.attributes,O=j.attributes;let H=0;const J=de.getAttributes();for(const me in J)if(J[me].location>=0){const U=Q[me];let W=O[me];if(W===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(W=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(W=G.instanceColor)),U===void 0||U.attribute!==W||W&&U.data!==W.data)return!0;H++}return u.attributesNum!==H||u.index!==pe}function T(G,j,de,pe){const Q={},O=j.attributes;let H=0;const J=de.getAttributes();for(const me in J)if(J[me].location>=0){let U=O[me];U===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const W={};W.attribute=U,U&&U.data&&(W.data=U.data),Q[me]=W,H++}u.attributes=Q,u.attributesNum=H,u.index=pe}function w(){const G=u.newAttributes;for(let j=0,de=G.length;j<de;j++)G[j]=0}function M(G){y(G,0)}function y(G,j){const de=u.newAttributes,pe=u.enabledAttributes,Q=u.attributeDivisors;de[G]=1,pe[G]===0&&(s.enableVertexAttribArray(G),pe[G]=1),Q[G]!==j&&(s.vertexAttribDivisor(G,j),Q[G]=j)}function I(){const G=u.newAttributes,j=u.enabledAttributes;for(let de=0,pe=j.length;de<pe;de++)j[de]!==G[de]&&(s.disableVertexAttribArray(de),j[de]=0)}function z(G,j,de,pe,Q,O,H){H===!0?s.vertexAttribIPointer(G,j,de,Q,O):s.vertexAttribPointer(G,j,de,pe,Q,O)}function C(G,j,de,pe){w();const Q=pe.attributes,O=de.getAttributes(),H=j.defaultAttributeValues;for(const J in O){const me=O[J];if(me.location>=0){let Ee=Q[J];if(Ee===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(Ee=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(Ee=G.instanceColor)),Ee!==void 0){const U=Ee.normalized,W=Ee.itemSize,Se=e.get(Ee);if(Se===void 0)continue;const Ae=Se.buffer,Oe=Se.type,ie=Se.bytesPerElement,ye=Oe===s.INT||Oe===s.UNSIGNED_INT||Ee.gpuType===zh;if(Ee.isInterleavedBufferAttribute){const Me=Ee.data,He=Me.stride,Te=Ee.offset;if(Me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<me.locationSize;Ie++)y(me.location+Ie,Me.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ie=0;Ie<me.locationSize;Ie++)M(me.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Ie=0;Ie<me.locationSize;Ie++)z(me.location+Ie,W/me.locationSize,Oe,U,He*ie,(Te+W/me.locationSize*Ie)*ie,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Me=0;Me<me.locationSize;Me++)y(me.location+Me,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Me=0;Me<me.locationSize;Me++)M(me.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Me=0;Me<me.locationSize;Me++)z(me.location+Me,W/me.locationSize,Oe,U,W*ie,W/me.locationSize*Me*ie,ye)}}else if(H!==void 0){const U=H[J];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(me.location,U);break;case 3:s.vertexAttrib3fv(me.location,U);break;case 4:s.vertexAttrib4fv(me.location,U);break;default:s.vertexAttrib1fv(me.location,U)}}}}I()}function B(){N();for(const G in r){const j=r[G];for(const de in j){const pe=j[de];for(const Q in pe){const O=pe[Q];for(const H in O)x(O[H].object),delete O[H];delete pe[Q]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const j=r[G.id];for(const de in j){const pe=j[de];for(const Q in pe){const O=pe[Q];for(const H in O)x(O[H].object),delete O[H];delete pe[Q]}}delete r[G.id]}function P(G){for(const j in r){const de=r[j];for(const pe in de){const Q=de[pe];if(Q[G.id]===void 0)continue;const O=Q[G.id];for(const H in O)x(O[H].object),delete O[H];delete Q[G.id]}}}function E(G){for(const j in r){const de=r[j],pe=G.isInstancedMesh===!0?G.id:0,Q=de[pe];if(Q!==void 0){for(const O in Q){const H=Q[O];for(const J in H)x(H[J].object),delete H[J];delete Q[O]}delete de[pe],Object.keys(de).length===0&&delete r[j]}}}function N(){Y(),d=!0,u!==l&&(u=l,h(u.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:N,resetDefaultState:Y,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:I}}function rT(s,e,i){let r;function l(p){r=p}function u(p,h){s.drawArrays(r,p,h),i.update(h,r,1)}function d(p,h,x){x!==0&&(s.drawArraysInstanced(r,p,h,x),i.update(h,r,x))}function m(p,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,x);let g=0;for(let b=0;b<x;b++)g+=h[b];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=m}function sT(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ui&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(P){const E=P===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==fi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vi&&!E)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=p(h);x!==h&&(it("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:C,maxSamples:B,samples:L}}function oT(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Lr,m=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const b=v.length!==0||g||r!==0||l;return l=g,r=v.length,b},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,b){const T=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=s.get(v);if(!l||T===null||T.length===0||u&&!M)u?x(null):h();else{const I=u?0:r,z=I*4;let C=y.clippingState||null;p.value=C,C=x(T,g,z,b);for(let B=0;B!==z;++B)C[B]=i[B];y.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function h(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,g,b,T){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=p.value,T!==!0||M===null){const y=b+w*4,I=g.matrixWorldInverse;m.getNormalMatrix(I),(M===null||M.length<y)&&(M=new Float32Array(y));for(let z=0,C=b;z!==w;++z,C+=4)d.copy(v[z]).applyMatrix4(I,m),d.normal.toArray(M,C),M[C+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const rr=4,C_=[.125,.215,.35,.446,.526,.582],Or=20,lT=256,Go=new Jh,w_=new Mt;let Pd=null,Id=0,zd=0,Bd=!1;const cT=new ae;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:m=cT}=u;Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,m),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Id,zd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Br||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ma,format:Ui,colorSpace:kc,depthBuffer:!1},l=U_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uT(u)),this._blurMaterial=dT(u,e,i),this._ggxMaterial=fT(u,e,i)}return l}_compileMaterial(e){const i=new Qn(new Li,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,u){const p=new ui(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,b=v.toneMapping;v.getClearColor(w_),v.toneMapping=Xi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new $o,new Wc({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,y=!0):(M.color.copy(w_),y=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(p.up.set(0,h[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+x[z],u.y,u.z)):C===1?(p.up.set(0,0,h[z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+x[z],u.z)):(p.up.set(0,h[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+x[z]));const B=this._cubeSize;Ns(l,C*B,z>2?B:0,B,B),v.setRenderTarget(l),y&&v.render(w,p),v.render(e,p)}v.toneMapping=b,v.autoClear=g,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Br||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const m=u.uniforms;m.envMap.value=e;const p=this._cubeSize;Ns(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[r];m.material=d;const p=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),g=0+h*1.25,b=v*g,{_lodMax:T}=this,w=this._sizeLods[r],M=3*w*(r>T-rr?r-T+rr:0),y=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=b,p.mipInt.value=T-i,Ns(u,M,y,3*w,2*w),l.setRenderTarget(u),l.render(m,Go),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-r,Ns(e,M,y,3*w,2*w),l.setRenderTarget(e),l.render(m,Go)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,m){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,b=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Or-1),w=u/T,M=isFinite(u)?1+Math.floor(x*w):Or;M>Or&&it(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Or}`);const y=[];let I=0;for(let P=0;P<Or;++P){const E=P/w,N=Math.exp(-E*E/2);y.push(N),P===0?I+=N:P<M&&(I+=2*N)}for(let P=0;P<y.length;P++)y[P]=y[P]/I;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=d==="latitudinal",m&&(g.poleAxis.value=m);const{_lodMax:z}=this;g.dTheta.value=T,g.mipInt.value=z-r;const C=this._sizeLods[l],B=3*C*(l>z-rr?l-z+rr:0),L=4*(this._cubeSize-C);Ns(i,B,L,3*C,2*C),p.setRenderTarget(i),p.render(v,Go)}}function uT(s){const e=[],i=[],r=[];let l=s;const u=s-rr+1+C_.length;for(let d=0;d<u;d++){const m=Math.pow(2,l);e.push(m);let p=1/m;d>s-rr?p=C_[d-s+rr-1]:d===0&&(p=0),i.push(p);const h=1/(m-2),x=-h,v=1+h,g=[x,x,v,x,v,v,x,x,v,v,x,v],b=6,T=6,w=3,M=2,y=1,I=new Float32Array(w*T*b),z=new Float32Array(M*T*b),C=new Float32Array(y*T*b);for(let L=0;L<b;L++){const P=L%3*2/3-1,E=L>2?0:-1,N=[P,E,0,P+2/3,E,0,P+2/3,E+1,0,P,E,0,P+2/3,E+1,0,P,E+1,0];I.set(N,w*T*L),z.set(g,M*T*L);const Y=[L,L,L,L,L,L];C.set(Y,y*T*L)}const B=new Li;B.setAttribute("position",new qi(I,w)),B.setAttribute("uv",new qi(z,M)),B.setAttribute("faceIndex",new qi(C,y)),r.push(new Qn(B,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function U_(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ns(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function fT(s,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function dT(s,e,i){const r=new Float32Array(Or),l=new ae(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function L_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function N_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}class wv extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $o(5,5,5),u=new Zi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:ya});u.uniforms.tEquirect.value=i;const d=new Qn(l,u),m=i.minFilter;return i.minFilter===Pr&&(i.minFilter=Pn),new _M(1,10,this).update(e,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function hT(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,b=!1){return g==null?null:b?d(g):u(g)}function u(g){if(g&&g.isTexture){const b=g.mapping;if(b===sd||b===od)if(e.has(g)){const T=e.get(g).texture;return m(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new wv(T.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",h),m(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,T=b===sd||b===od,w=b===Br||b===Bs;if(T||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new D_(s)),M=T?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const I=g.image;return T&&I&&I.height>0||w&&I&&p(I)?(r===null&&(r=new D_(s)),M=T?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",x),M.texture):null}}}return g}function m(g,b){return b===sd?g.mapping=Br:b===od&&(g.mapping=Bs),g}function p(g){let b=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&b++;return b===T}function h(g){const b=g.target;b.removeEventListener("dispose",h);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function x(g){const b=g.target;b.removeEventListener("dispose",x);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function pT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ps("WebGLRenderer: "+r+" extension not supported."),l}}}function mT(s,e,i,r){const l={},u=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const b=u.get(g);b&&(e.remove(b),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function m(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function p(v){const g=v.attributes;for(const b in g)e.update(g[b],s.ARRAY_BUFFER)}function h(v){const g=[],b=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(b!==null){const I=b.array;w=b.version;for(let z=0,C=I.length;z<C;z+=3){const B=I[z+0],L=I[z+1],P=I[z+2];g.push(B,L,L,P,P,B)}}else{const I=T.array;w=T.version;for(let z=0,C=I.length/3-1;z<C;z+=3){const B=z+0,L=z+1,P=z+2;g.push(B,L,L,P,P,B)}}const M=new(T.count>=65535?xv:vv)(g,1);M.version=w;const y=u.get(v);y&&e.remove(y),u.set(v,M)}function x(v){const g=u.get(v);if(g){const b=v.index;b!==null&&g.version<b.version&&h(v)}else h(v);return u.get(v)}return{get:m,update:p,getWireframeAttribute:x}}function gT(s,e,i){let r;function l(v){r=v}let u,d;function m(v){u=v.type,d=v.bytesPerElement}function p(v,g){s.drawElements(r,g,u,v*d),i.update(g,r,1)}function h(v,g,b){b!==0&&(s.drawElementsInstanced(r,g,u,v*d,b),i.update(g,r,b))}function x(v,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,v,0,b);let w=0;for(let M=0;M<b;M++)w+=g[M];i.update(w,r,1)}this.setMode=l,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=x}function _T(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,m){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=m*(u/3);break;case s.LINES:i.lines+=m*(u/2);break;case s.LINE_STRIP:i.lines+=m*(u-1);break;case s.LINE_LOOP:i.lines+=m*u;break;case s.POINTS:i.points+=m*u;break;default:Tt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function vT(s,e,i){const r=new WeakMap,l=new tn;function u(d,m,p){const h=d.morphTargetInfluences,x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=x!==void 0?x.length:0;let g=r.get(m);if(g===void 0||g.count!==v){let Y=function(){E.dispose(),r.delete(m),m.removeEventListener("dispose",Y)};var b=Y;g!==void 0&&g.texture.dispose();const T=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],I=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let B=m.attributes.position.count*C,L=1;B>e.maxTextureSize&&(L=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const P=new Float32Array(B*L*4*v),E=new gv(P,B,L,v);E.type=Vi,E.needsUpdate=!0;const N=C*4;for(let G=0;G<v;G++){const j=y[G],de=I[G],pe=z[G],Q=B*L*4*G;for(let O=0;O<j.count;O++){const H=O*N;T===!0&&(l.fromBufferAttribute(j,O),P[Q+H+0]=l.x,P[Q+H+1]=l.y,P[Q+H+2]=l.z,P[Q+H+3]=0),w===!0&&(l.fromBufferAttribute(de,O),P[Q+H+4]=l.x,P[Q+H+5]=l.y,P[Q+H+6]=l.z,P[Q+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,O),P[Q+H+8]=l.x,P[Q+H+9]=l.y,P[Q+H+10]=l.z,P[Q+H+11]=pe.itemSize===4?l.w:1)}}g={count:v,texture:E,size:new mt(B,L)},r.set(m,g),m.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const w=m.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function xT(s,e,i,r,l){let u=new WeakMap;function d(h){const x=l.render.frame,v=h.geometry,g=e.get(h,v);if(u.get(g)!==x&&(e.update(g),u.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),u.get(h)!==x&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),u.set(h,x))),h.isSkinnedMesh){const b=h.skeleton;u.get(b)!==x&&(b.update(),u.set(b,x))}return g}function m(){u=new WeakMap}function p(h){const x=h.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:m}}const yT={[tv]:"LINEAR_TONE_MAPPING",[nv]:"REINHARD_TONE_MAPPING",[iv]:"CINEON_TONE_MAPPING",[Ih]:"ACES_FILMIC_TONE_MAPPING",[rv]:"AGX_TONE_MAPPING",[sv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function ST(s,e,i,r,l,u){const d=new Wi(e,i,{type:s,depthBuffer:l,stencilBuffer:u,samples:r?4:0,depthTexture:l?new Fs(e,i):void 0}),m=new Wi(e,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Li;p.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const h=new sM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Qn(p,h),v=new Jh(-1,1,1,-1,0,1);let g=null,b=null,T=!1,w,M=null,y=[],I=!1;this.setSize=function(z,C){d.setSize(z,C),m.setSize(z,C);for(let B=0;B<y.length;B++){const L=y[B];L.setSize&&L.setSize(z,C)}},this.setEffects=function(z){y=z,I=y.length>0&&y[0].isRenderPass===!0;const C=d.width,B=d.height;for(let L=0;L<y.length;L++){const P=y[L];P.setSize&&P.setSize(C,B)}},this.begin=function(z,C){if(T||z.toneMapping===Xi&&y.length===0)return!1;if(M=C,C!==null){const B=C.width,L=C.height;(d.width!==B||d.height!==L)&&this.setSize(B,L)}return I===!1&&z.setRenderTarget(d),w=z.toneMapping,z.toneMapping=Xi,!0},this.hasRenderPass=function(){return I},this.end=function(z,C){z.toneMapping=w,T=!0;let B=d,L=m;for(let P=0;P<y.length;P++){const E=y[P];if(E.enabled!==!1&&(E.render(z,L,B,C),E.needsSwap!==!1)){const N=B;B=L,L=N}}if(g!==z.outputColorSpace||b!==z.toneMapping){g=z.outputColorSpace,b=z.toneMapping,h.defines={},Et.getTransfer(g)===Ft&&(h.defines.SRGB_TRANSFER="");const P=yT[b];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=B.texture,z.setRenderTarget(M),z.render(x,v),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),m.dispose(),p.dispose(),h.dispose()}}const Dv=new In,Lh=new Fs(1,1),Uv=new gv,Lv=new zS,Nv=new Sv,O_=[],P_=[],I_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function Vs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=O_[l];if(u===void 0&&(u=new Float32Array(l),O_[l]=u),e!==0){r.toArray(u,0);for(let d=1,m=0;d!==e;++d)m+=i,s[d].toArray(u,m)}return u}function xn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Kc(s,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function MT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function bT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function ET(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function TT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function AT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;B_.set(r),s.uniformMatrix2fv(this.addr,!1,B_),yn(i,r)}}function RT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;z_.set(r),s.uniformMatrix3fv(this.addr,!1,z_),yn(i,r)}}function CT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,r))return;I_.set(r),s.uniformMatrix4fv(this.addr,!1,I_),yn(i,r)}}function wT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function DT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function UT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function LT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function NT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function OT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function PT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function IT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function zT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?Xh:kh,u=Lh):u=Dv,i.setTexture2D(e||u,l)}function BT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Lv,l)}function FT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Nv,l)}function HT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Uv,l)}function GT(s){switch(s){case 5126:return MT;case 35664:return bT;case 35665:return ET;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return HT}}function VT(s,e){s.uniform1fv(this.addr,e)}function kT(s,e){const i=Vs(e,this.size,2);s.uniform2fv(this.addr,i)}function XT(s,e){const i=Vs(e,this.size,3);s.uniform3fv(this.addr,i)}function WT(s,e){const i=Vs(e,this.size,4);s.uniform4fv(this.addr,i)}function qT(s,e){const i=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function YT(s,e){const i=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function ZT(s,e){const i=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function KT(s,e){s.uniform1iv(this.addr,e)}function QT(s,e){s.uniform2iv(this.addr,e)}function jT(s,e){s.uniform3iv(this.addr,e)}function JT(s,e){s.uniform4iv(this.addr,e)}function $T(s,e){s.uniform1uiv(this.addr,e)}function e1(s,e){s.uniform2uiv(this.addr,e)}function t1(s,e){s.uniform3uiv(this.addr,e)}function n1(s,e){s.uniform4uiv(this.addr,e)}function i1(s,e,i){const r=this.cache,l=e.length,u=Kc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),yn(r,u));let d;this.type===s.SAMPLER_2D_SHADOW?d=Lh:d=Dv;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||d,u[m])}function a1(s,e,i){const r=this.cache,l=e.length,u=Kc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Lv,u[d])}function r1(s,e,i){const r=this.cache,l=e.length,u=Kc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Nv,u[d])}function s1(s,e,i){const r=this.cache,l=e.length,u=Kc(i,l);xn(r,u)||(s.uniform1iv(this.addr,u),yn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Uv,u[d])}function o1(s){switch(s){case 5126:return VT;case 35664:return kT;case 35665:return XT;case 35666:return WT;case 35674:return qT;case 35675:return YT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return jT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}class l1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=GT(i.type)}}class c1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=o1(i.type)}}class u1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const m=l[u];m.setValue(e,i[m.id],r)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function F_(s,e){s.seq.push(e),s.map[e.id]=e}function f1(s,e,i){const r=s.name,l=r.length;for(Fd.lastIndex=0;;){const u=Fd.exec(r),d=Fd.lastIndex;let m=u[1];const p=u[2]==="]",h=u[3];if(p&&(m=m|0),h===void 0||h==="["&&d+2===l){F_(i,h===void 0?new l1(m,s,e):new c1(m,s,e));break}else{let v=i.map[m];v===void 0&&(v=new u1(m),F_(i,v)),i=v}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const m=e.getActiveUniform(i,d),p=e.getUniformLocation(i,m.name);f1(m,p,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const m=i[u],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function H_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const d1=37297;let h1=0;function p1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const m=d+1;r.push(`${m===e?">":" "} ${m}: ${i[d]}`)}return r.join(`
`)}const G_=new st;function m1(s){Et._getMatrix(G_,Et.workingColorSpace,s);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(s)){case Xc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function V_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+p1(s.getShaderSource(e),m)}else return u}function g1(s,e){const i=m1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _1={[tv]:"Linear",[nv]:"Reinhard",[iv]:"Cineon",[Ih]:"ACESFilmic",[rv]:"AgX",[sv]:"Neutral",[av]:"Custom"};function v1(s,e){const i=_1[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new ae;function x1(){Et.getLuminanceCoefficients(Nc);const s=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function S1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function M1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let m=1;u.type===s.FLOAT_MAT2&&(m=2),u.type===s.FLOAT_MAT3&&(m=3),u.type===s.FLOAT_MAT4&&(m=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:m}}return i}function Xo(s){return s!==""}function k_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(s){return s.replace(b1,T1)}const E1=new Map;function T1(s,e){let i=ht[e];if(i===void 0){const r=E1.get(e);if(r!==void 0)i=ht[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nh(i)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(s){return s.replace(A1,R1)}function R1(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function q_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const C1={[Pc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function w1(s){return C1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D1={[Br]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function U1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":D1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const L1={[Bs]:"ENVMAP_MODE_REFRACTION"};function N1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":L1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O1={[ev]:"ENVMAP_BLENDING_MULTIPLY",[gS]:"ENVMAP_BLENDING_MIX",[_S]:"ENVMAP_BLENDING_ADD"};function P1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":O1[s.combine]||"ENVMAP_BLENDING_NONE"}function I1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function z1(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,m=i.fragmentShader;const p=w1(i),h=U1(i),x=N1(i),v=P1(i),g=I1(i),b=y1(i),T=S1(u),w=l.createProgram();let M,y,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),y.length>0&&(y+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),y=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ht.tonemapping_pars_fragment:"",i.toneMapping!==Xi?v1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,g1("linearToOutputTexel",i.outputColorSpace),x1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Nh(d),d=k_(d,i),d=X_(d,i),m=Nh(m),m=k_(m,i),m=X_(m,i),d=W_(d),m=W_(m),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===J0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=I+M+d,C=I+y+m,B=H_(l,l.VERTEX_SHADER,z),L=H_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,B),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(G){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",de=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(L)||"",Q=j.trim(),O=de.trim(),H=pe.trim();let J=!0,me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,B,L);else{const Ee=V_(l,B,"vertex"),U=V_(l,L,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+Ee+`
`+U)}else Q!==""?it("WebGLProgram: Program Info Log:",Q):(O===""||H==="")&&(me=!1);me&&(G.diagnostics={runnable:J,programLog:Q,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:y}})}l.deleteShader(B),l.deleteShader(L),E=new Hc(l,w),N=M1(l,w)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,d1)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=L,this}let B1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new H1(e),i.set(e,r)),r}}class H1{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}}function G1(s){return s===Fr||s===Gc||s===Vc}function V1(s,e,i,r,l,u){const d=new qh,m=new F1,p=new Set,h=[],x=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return p.add(E),E===0?"uv":`uv${E}`}function w(E,N,Y,G,j,de){const pe=G.fog,Q=j.geometry,O=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=e.get(E.envMap||O,H),me=J&&J.mapping===Yc?J.image.height:null,Ee=b[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&it("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const U=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,W=U!==void 0?U.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ae,Oe,ie,ye;if(Ee){const Xe=Gi[Ee];Ae=Xe.vertexShader,Oe=Xe.fragmentShader}else{Ae=E.vertexShader,Oe=E.fragmentShader;const Xe=m.getVertexShaderStage(E),jt=m.getFragmentShaderStage(E);m.update(E,Xe,jt),ie=Xe.id,ye=jt.id}const Me=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),Te=j.isInstancedMesh===!0,Ie=j.isBatchedMesh===!0,dt=!!E.map,tt=!!E.matcap,ut=!!J,pt=!!E.aoMap,ot=!!E.lightMap,Lt=!!E.bumpMap&&E.wireframe===!1,Zt=!!E.normalMap,qt=!!E.displacementMap,on=!!E.emissiveMap,Yt=!!E.metalnessMap,an=!!E.roughnessMap,q=E.anisotropy>0,Ht=E.clearcoat>0,wt=E.dispersion>0,D=E.iridescence>0,S=E.sheen>0,K=E.transmission>0,re=q&&!!E.anisotropyMap,ue=Ht&&!!E.clearcoatMap,Re=Ht&&!!E.clearcoatNormalMap,Ue=Ht&&!!E.clearcoatRoughnessMap,ce=D&&!!E.iridescenceMap,fe=D&&!!E.iridescenceThicknessMap,we=S&&!!E.sheenColorMap,Ge=S&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Le=!!E.specularColorMap,je=!!E.specularIntensityMap,Je=K&&!!E.transmissionMap,at=K&&!!E.thicknessMap,k=!!E.gradientMap,Ce=!!E.alphaMap,ge=E.alphaTest>0,De=!!E.alphaHash,Fe=!!E.extensions;let be=Xi;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(be=s.toneMapping);const Ze={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Ae,fragmentShader:Oe,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&j._colorsTexture!==null,instancing:Te,instancingColor:Te&&j.instanceColor!==null,instancingMorph:Te&&j.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:tt,envMap:ut,envMapMode:ut&&J.mapping,envMapCubeUVHeight:me,aoMap:pt,lightMap:ot,bumpMap:Lt,normalMap:Zt,displacementMap:qt,emissiveMap:on,normalMapObjectSpace:Zt&&E.normalMapType===yS,normalMapTangentSpace:Zt&&E.normalMapType===wh,packedNormalMap:Zt&&E.normalMapType===wh&&G1(E.normalMap.format),metalnessMap:Yt,roughnessMap:an,anisotropy:q,anisotropyMap:re,clearcoat:Ht,clearcoatMap:ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:wt,iridescence:D,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:S,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:Pe,specularColorMap:Le,specularIntensityMap:je,transmission:K,transmissionMap:Je,thicknessMap:at,gradientMap:k,opaque:E.transparent===!1&&E.blending===Os&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ge,alphaHash:De,combine:E.combine,mapUv:dt&&T(E.map.channel),aoMapUv:pt&&T(E.aoMap.channel),lightMapUv:ot&&T(E.lightMap.channel),bumpMapUv:Lt&&T(E.bumpMap.channel),normalMapUv:Zt&&T(E.normalMap.channel),displacementMapUv:qt&&T(E.displacementMap.channel),emissiveMapUv:on&&T(E.emissiveMap.channel),metalnessMapUv:Yt&&T(E.metalnessMap.channel),roughnessMapUv:an&&T(E.roughnessMap.channel),anisotropyMapUv:re&&T(E.anisotropyMap.channel),clearcoatMapUv:ue&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(E.sheenRoughnessMap.channel),specularMapUv:Pe&&T(E.specularMap.channel),specularColorMapUv:Le&&T(E.specularColorMap.channel),specularIntensityMapUv:je&&T(E.specularIntensityMap.channel),transmissionMapUv:Je&&T(E.transmissionMap.channel),thicknessMapUv:at&&T(E.thicknessMap.channel),alphaMapUv:Ce&&T(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Zt||q),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Q.attributes.uv&&(dt||Ce),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&Zt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:He,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:on&&E.emissiveMap.isVideoTexture===!0&&Et.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Si,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=p.has(1),Ze.vertexUv2s=p.has(2),Ze.vertexUv3s=p.has(3),p.clear(),Ze}function M(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)N.push(Y),N.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(y(N,E),I(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function y(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function I(E,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function z(E){const N=b[E.type];let Y;if(N){const G=Gi[N];Y=iM.clone(G.uniforms)}else Y=E.uniforms;return Y}function C(E,N){let Y=x.get(N);return Y!==void 0?++Y.usedTimes:(Y=new z1(s,N,E,l),h.push(Y),x.set(N,Y)),Y}function B(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),x.delete(E.cacheKey),E.destroy()}}function L(E){m.remove(E)}function P(){m.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:z,acquireProgram:C,releaseProgram:B,releaseShaderCache:L,programs:h,dispose:P}}function k1(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let m=s.get(d);return m===void 0&&(m={},s.set(d,m)),m}function r(d){s.delete(d)}function l(d,m,p){s.get(d)[m]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function X1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Z_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function m(g,b,T,w,M,y){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:b,material:T,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},s[e]=I):(I.id=g.id,I.object=g,I.geometry=b,I.material=T,I.materialVariant=d(g),I.groupOrder=w,I.renderOrder=g.renderOrder,I.z=M,I.group=y),e++,I}function p(g,b,T,w,M,y){const I=m(g,b,T,w,M,y);T.transmission>0?r.push(I):T.transparent===!0?l.push(I):i.push(I)}function h(g,b,T,w,M,y){const I=m(g,b,T,w,M,y);T.transmission>0?r.unshift(I):T.transparent===!0?l.unshift(I):i.unshift(I)}function x(g,b,T){i.length>1&&i.sort(g||X1),r.length>1&&r.sort(b||Y_),l.length>1&&l.sort(b||Y_),T&&(i.reverse(),r.reverse(),l.reverse())}function v(){for(let g=e,b=s.length;g<b;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:h,finish:v,sort:x}}function W1(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new Z_,s.set(r,[d])):l>=u.length?(d=new Z_,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function q1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Mt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=i,i}}}function Y1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let Z1=0;function K1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Q1(s){const e=new q1,i=Y1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ae);const l=new ae,u=new nn,d=new nn;function m(h){let x=0,v=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let b=0,T=0,w=0,M=0,y=0,I=0,z=0,C=0,B=0,L=0,P=0;h.sort(K1);for(let N=0,Y=h.length;N<Y;N++){const G=h[N],j=G.color,de=G.intensity,pe=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Fr?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=j.r*de,v+=j.g*de,g+=j.b*de;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],de);P++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,J=i.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.directionalShadow[b]=J,r.directionalShadowMap[b]=Q,r.directionalShadowMatrix[b]=G.shadow.matrix,I++}r.directional[b]=O,b++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(j).multiplyScalar(de),O.distance=pe,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[w]=O;const H=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,H.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[w]=H.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,r.spotShadow[w]=J,r.spotShadowMap[w]=Q,C++}w++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(j).multiplyScalar(de),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=O,M++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const H=G.shadow,J=i.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,r.pointShadow[T]=J,r.pointShadowMap[T]=Q,r.pointShadowMatrix[T]=G.shadow.matrix,z++}r.point[T]=O,T++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(de),O.groundColor.copy(G.groundColor).multiplyScalar(de),r.hemi[y]=O,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==b||E.pointLength!==T||E.spotLength!==w||E.rectAreaLength!==M||E.hemiLength!==y||E.numDirectionalShadows!==I||E.numPointShadows!==z||E.numSpotShadows!==C||E.numSpotMaps!==B||E.numLightProbes!==P)&&(r.directional.length=b,r.spot.length=w,r.rectArea.length=M,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=C+B-L,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=P,E.directionalLength=b,E.pointLength=T,E.spotLength=w,E.rectAreaLength=M,E.hemiLength=y,E.numDirectionalShadows=I,E.numPointShadows=z,E.numSpotShadows=C,E.numSpotMaps=B,E.numLightProbes=P,r.version=Z1++)}function p(h,x){let v=0,g=0,b=0,T=0,w=0;const M=x.matrixWorldInverse;for(let y=0,I=h.length;y<I;y++){const z=h[y];if(z.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),v++}else if(z.isSpotLight){const C=r.spot[b];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),b++}else if(z.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(M),d.identity(),u.copy(z.matrixWorld),u.premultiply(M),d.extractRotation(u),C.halfWidth.set(z.width*.5,0,0),C.halfHeight.set(0,z.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(z.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(z.matrixWorld),C.position.applyMatrix4(M),g++}else if(z.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(z.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:m,setupView:p,state:r}}function K_(s){const e=new Q1(s),i=[],r=[],l=[];function u(g){v.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function m(g){r.push(g)}function p(g){l.push(g)}function h(){e.setup(i)}function x(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:m,pushLightProbeGrid:p}}function j1(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let m;return d===void 0?(m=new K_(s),e.set(l,[m])):u>=d.length?(m=new K_(s),d.push(m)):m=d[u],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const J1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`,eA=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],tA=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Q_=new nn,Vo=new ae,Hd=new ae;function nA(s,e,i){let r=new Zh;const l=new mt,u=new mt,d=new tn,m=new oM,p=new lM,h={},x=i.maxTextureSize,v={[sr]:Kn,[Kn]:sr,[Si]:Si},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:J1,fragmentShader:$1}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const T=new Li;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Qn(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let y=this.type;this.render=function(L,P,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===$_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const N=s.getRenderTarget(),Y=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),j=s.state;j.setBlending(ya),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const de=y!==this.type;de&&P.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(Q=>Q.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,Q=L.length;pe<Q;pe++){const O=L[pe],H=O.shadow;if(H===void 0){it("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const J=H.getFrameExtents();l.multiply(J),u.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/J.x),l.x=u.x*J.x,H.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/J.y),l.y=u.y*J.y,H.mapSize.y=u.y));const me=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=me,H.map===null||de===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ko){if(O.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Fr,type:Ma,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Fs(l.x,l.y,Vi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn}else O.isPointLight?(H.map=new wv(l.x),H.map.depthTexture=new tM(l.x,Yi)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new Fs(l.x,l.y,Yi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=ba,this.type===Pc?(H.map.depthTexture.compareFunction=me?Xh:kh,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn);H.camera.updateProjectionMatrix()}const Ee=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Ee;U++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,U),s.clear();else{U===0&&(s.setRenderTarget(H.map),s.clear());const W=H.getViewport(U);d.set(u.x*W.x,u.y*W.y,u.x*W.z,u.y*W.w),j.viewport(d)}if(O.isPointLight){const W=H.camera,Se=H.matrix,Ae=O.distance||W.far;Ae!==W.far&&(W.far=Ae,W.updateProjectionMatrix()),Vo.setFromMatrixPosition(O.matrixWorld),W.position.copy(Vo),Hd.copy(W.position),Hd.add(eA[U]),W.up.copy(tA[U]),W.lookAt(Hd),W.updateMatrixWorld(),Se.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Q_.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Q_,W.coordinateSystem,W.reversedDepth)}else H.updateMatrices(O);r=H.getFrustum(),C(P,E,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===ko&&I(H,E),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(N,Y,G)};function I(L,P){const E=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Wi(l.x,l.y,{format:Fr,type:Ma})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(P,null,E,g,w,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value=L.mapSize,b.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(P,null,E,b,w,null)}function z(L,P,E,N){let Y=null;const G=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=E.isPointLight===!0?p:m,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const j=Y.uuid,de=P.uuid;let pe=h[j];pe===void 0&&(pe={},h[j]=pe);let Q=pe[de];Q===void 0&&(Q=Y.clone(),pe[de]=Q,P.addEventListener("dispose",B)),Y=Q}if(Y.visible=P.visible,Y.wireframe=P.wireframe,N===ko?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:v[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,E.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=s.properties.get(Y);j.light=E}return Y}function C(L,P,E,N,Y){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===ko)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const de=e.update(L),pe=L.material;if(Array.isArray(pe)){const Q=de.groups;for(let O=0,H=Q.length;O<H;O++){const J=Q[O],me=pe[J.materialIndex];if(me&&me.visible){const Ee=z(L,me,N,Y);L.onBeforeShadow(s,L,P,E,de,Ee,J),s.renderBufferDirect(E,null,de,Ee,L,J),L.onAfterShadow(s,L,P,E,de,Ee,J)}}}else if(pe.visible){const Q=z(L,pe,N,Y);L.onBeforeShadow(s,L,P,E,de,Q,null),s.renderBufferDirect(E,null,de,Q,L,null),L.onAfterShadow(s,L,P,E,de,Q,null)}}const j=L.children;for(let de=0,pe=j.length;de<pe;de++)C(j[de],P,E,N,Y)}function B(L){L.target.removeEventListener("dispose",B);for(const E in h){const N=h[E],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function iA(s,e){function i(){let k=!1;const Ce=new tn;let ge=null;const De=new tn(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!k&&(s.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,be,Ze,Xe,jt){jt===!0&&(Fe*=Xe,be*=Xe,Ze*=Xe),Ce.set(Fe,be,Ze,Xe),De.equals(Ce)===!1&&(s.clearColor(Fe,be,Ze,Xe),De.copy(Ce))},reset:function(){k=!1,ge=null,De.set(-1,0,0,0)}}}function r(){let k=!1,Ce=!1,ge=null,De=null,Fe=null;return{setReversed:function(be){if(Ce!==be){const Ze=e.get("EXT_clip_control");be?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const Xe=Fe;Fe=null,this.setClear(Xe)}},getReversed:function(){return Ce},setTest:function(be){be?Me(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(be){ge!==be&&!k&&(s.depthMask(be),ge=be)},setFunc:function(be){if(Ce&&(be=DS[be]),De!==be){switch(be){case Xd:s.depthFunc(s.NEVER);break;case Wd:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case Zd:s.depthFunc(s.GEQUAL);break;case Kd:s.depthFunc(s.GREATER);break;case Qd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=be}},setLocked:function(be){k=be},setClear:function(be){Fe!==be&&(Fe=be,Ce&&(be=1-be),s.clearDepth(be))},reset:function(){k=!1,ge=null,De=null,Fe=null,Ce=!1}}}function l(){let k=!1,Ce=null,ge=null,De=null,Fe=null,be=null,Ze=null,Xe=null,jt=null;return{setTest:function(Nt){k||(Nt?Me(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(Nt){Ce!==Nt&&!k&&(s.stencilMask(Nt),Ce=Nt)},setFunc:function(Nt,jn,Jn){(ge!==Nt||De!==jn||Fe!==Jn)&&(s.stencilFunc(Nt,jn,Jn),ge=Nt,De=jn,Fe=Jn)},setOp:function(Nt,jn,Jn){(be!==Nt||Ze!==jn||Xe!==Jn)&&(s.stencilOp(Nt,jn,Jn),be=Nt,Ze=jn,Xe=Jn)},setLocked:function(Nt){k=Nt},setClear:function(Nt){jt!==Nt&&(s.clearStencil(Nt),jt=Nt)},reset:function(){k=!1,Ce=null,ge=null,De=null,Fe=null,be=null,Ze=null,Xe=null,jt=null}}}const u=new i,d=new r,m=new l,p=new WeakMap,h=new WeakMap;let x={},v={},g={},b=new WeakMap,T=[],w=null,M=!1,y=null,I=null,z=null,C=null,B=null,L=null,P=null,E=new Mt(0,0,0),N=0,Y=!1,G=null,j=null,de=null,pe=null,Q=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=J>=1):me.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=J>=2);let Ee=null,U={};const W=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ae=new tn().fromArray(W),Oe=new tn().fromArray(Se);function ie(k,Ce,ge,De){const Fe=new Uint8Array(4),be=s.createTexture();s.bindTexture(k,be),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<ge;Ze++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Ce+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return be}const ye={};ye[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Me(s.DEPTH_TEST),d.setFunc(zs),Lt(!1),Zt(q0),Me(s.CULL_FACE),pt(ya);function Me(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function He(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function Te(k,Ce){return g[k]!==Ce?(s.bindFramebuffer(k,Ce),g[k]=Ce,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ie(k,Ce){let ge=T,De=!1;if(k){ge=b.get(Ce),ge===void 0&&(ge=[],b.set(Ce,ge));const Fe=k.textures;if(ge.length!==Fe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ze=Fe.length;be<Ze;be++)ge[be]=s.COLOR_ATTACHMENT0+be;ge.length=Fe.length,De=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,De=!0);De&&s.drawBuffers(ge)}function dt(k){return w!==k?(s.useProgram(k),w=k,!0):!1}const tt={[Nr]:s.FUNC_ADD,[$y]:s.FUNC_SUBTRACT,[eS]:s.FUNC_REVERSE_SUBTRACT};tt[tS]=s.MIN,tt[nS]=s.MAX;const ut={[iS]:s.ZERO,[aS]:s.ONE,[rS]:s.SRC_COLOR,[Vd]:s.SRC_ALPHA,[fS]:s.SRC_ALPHA_SATURATE,[cS]:s.DST_COLOR,[oS]:s.DST_ALPHA,[sS]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[uS]:s.ONE_MINUS_DST_COLOR,[lS]:s.ONE_MINUS_DST_ALPHA,[dS]:s.CONSTANT_COLOR,[hS]:s.ONE_MINUS_CONSTANT_COLOR,[pS]:s.CONSTANT_ALPHA,[mS]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(k,Ce,ge,De,Fe,be,Ze,Xe,jt,Nt){if(k===ya){M===!0&&(He(s.BLEND),M=!1);return}if(M===!1&&(Me(s.BLEND),M=!0),k!==Jy){if(k!==y||Nt!==Y){if((I!==Nr||B!==Nr)&&(s.blendEquation(s.FUNC_ADD),I=Nr,B=Nr),Nt)switch(k){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Y0:s.blendFunc(s.ONE,s.ONE);break;case Z0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case K0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",k);break}else switch(k){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Y0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Z0:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",k);break}z=null,C=null,L=null,P=null,E.set(0,0,0),N=0,y=k,Y=Nt}return}Fe=Fe||Ce,be=be||ge,Ze=Ze||De,(Ce!==I||Fe!==B)&&(s.blendEquationSeparate(tt[Ce],tt[Fe]),I=Ce,B=Fe),(ge!==z||De!==C||be!==L||Ze!==P)&&(s.blendFuncSeparate(ut[ge],ut[De],ut[be],ut[Ze]),z=ge,C=De,L=be,P=Ze),(Xe.equals(E)===!1||jt!==N)&&(s.blendColor(Xe.r,Xe.g,Xe.b,jt),E.copy(Xe),N=jt),y=k,Y=!1}function ot(k,Ce){k.side===Si?He(s.CULL_FACE):Me(s.CULL_FACE);let ge=k.side===Kn;Ce&&(ge=!ge),Lt(ge),k.blending===Os&&k.transparent===!1?pt(ya):pt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const De=k.stencilWrite;m.setTest(De),De&&(m.setMask(k.stencilWriteMask),m.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),m.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),on(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function Zt(k){k!==Qy?(Me(s.CULL_FACE),k!==j&&(k===q0?s.cullFace(s.BACK):k===jy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),j=k}function qt(k){k!==de&&(H&&s.lineWidth(k),de=k)}function on(k,Ce,ge){k?(Me(s.POLYGON_OFFSET_FILL),(pe!==Ce||Q!==ge)&&(pe=Ce,Q=ge,d.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,ge))):He(s.POLYGON_OFFSET_FILL)}function Yt(k){k?Me(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function an(k){k===void 0&&(k=s.TEXTURE0+O-1),Ee!==k&&(s.activeTexture(k),Ee=k)}function q(k,Ce,ge){ge===void 0&&(Ee===null?ge=s.TEXTURE0+O-1:ge=Ee);let De=U[ge];De===void 0&&(De={type:void 0,texture:void 0},U[ge]=De),(De.type!==k||De.texture!==Ce)&&(Ee!==ge&&(s.activeTexture(ge),Ee=ge),s.bindTexture(k,Ce||ye[k]),De.type=k,De.texture=Ce)}function Ht(){const k=U[Ee];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function S(){try{s.texSubImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function K(){try{s.texSubImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function Re(){try{s.texStorage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function Ue(){try{s.texStorage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function ce(){try{s.texImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function fe(){try{s.texImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function we(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function Ge(k,Ce){v[k]!==Ce&&(s.pixelStorei(k,Ce),v[k]=Ce)}function Pe(k){Ae.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Le(k){Oe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function je(k,Ce){let ge=h.get(Ce);ge===void 0&&(ge=new WeakMap,h.set(Ce,ge));let De=ge.get(k);De===void 0&&(De=s.getUniformBlockIndex(Ce,k.name),ge.set(k,De))}function Je(k,Ce){const De=h.get(Ce).get(k);p.get(Ce)!==De&&(s.uniformBlockBinding(Ce,De,k.__bindingPointIndex),p.set(Ce,De))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},v={},Ee=null,U={},g={},b=new WeakMap,T=[],w=null,M=!1,y=null,I=null,z=null,C=null,B=null,L=null,P=null,E=new Mt(0,0,0),N=0,Y=!1,G=null,j=null,de=null,pe=null,Q=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),m.reset()}return{buffers:{color:u,depth:d,stencil:m},enable:Me,disable:He,bindFramebuffer:Te,drawBuffers:Ie,useProgram:dt,setBlending:pt,setMaterial:ot,setFlipSided:Lt,setCullFace:Zt,setLineWidth:qt,setPolygonOffset:on,setScissorTest:Yt,activeTexture:an,bindTexture:q,unbindTexture:Ht,compressedTexImage2D:wt,compressedTexImage3D:D,texImage2D:ce,texImage3D:fe,pixelStorei:Ge,getParameter:we,updateUBOMapping:je,uniformBlockBinding:Je,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:S,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Pe,viewport:Le,reset:at}}function aA(s,e,i,r,l,u,d){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,x=new WeakMap,v=new Set;let g;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,S){return T?new OffscreenCanvas(D,S):Zo("canvas")}function M(D,S,K){let re=1;const ue=wt(D);if((ue.width>K||ue.height>K)&&(re=K/Math.max(ue.width,ue.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Re=Math.floor(re*ue.width),Ue=Math.floor(re*ue.height);g===void 0&&(g=w(Re,Ue));const ce=S?w(Re,Ue):g;return ce.width=Re,ce.height=Ue,ce.getContext("2d").drawImage(D,0,0,Re,Ue),it("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Re+"x"+Ue+")."),ce}else return"data"in D&&it("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),D;return D}function y(D){return D.generateMipmaps}function I(D){s.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,S,K,re,ue,Re=!1){if(D!==null){if(s[D]!==void 0)return s[D];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;re&&(Ue=e.get("EXT_texture_norm16"),Ue||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=S;if(S===s.RED&&(K===s.FLOAT&&(ce=s.R32F),K===s.HALF_FLOAT&&(ce=s.R16F),K===s.UNSIGNED_BYTE&&(ce=s.R8),K===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.R16_EXT),K===s.SHORT&&Ue&&(ce=Ue.R16_SNORM_EXT)),S===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.R8UI),K===s.UNSIGNED_SHORT&&(ce=s.R16UI),K===s.UNSIGNED_INT&&(ce=s.R32UI),K===s.BYTE&&(ce=s.R8I),K===s.SHORT&&(ce=s.R16I),K===s.INT&&(ce=s.R32I)),S===s.RG&&(K===s.FLOAT&&(ce=s.RG32F),K===s.HALF_FLOAT&&(ce=s.RG16F),K===s.UNSIGNED_BYTE&&(ce=s.RG8),K===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.RG16_EXT),K===s.SHORT&&Ue&&(ce=Ue.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RG8UI),K===s.UNSIGNED_SHORT&&(ce=s.RG16UI),K===s.UNSIGNED_INT&&(ce=s.RG32UI),K===s.BYTE&&(ce=s.RG8I),K===s.SHORT&&(ce=s.RG16I),K===s.INT&&(ce=s.RG32I)),S===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),K===s.UNSIGNED_INT&&(ce=s.RGB32UI),K===s.BYTE&&(ce=s.RGB8I),K===s.SHORT&&(ce=s.RGB16I),K===s.INT&&(ce=s.RGB32I)),S===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),K===s.UNSIGNED_INT&&(ce=s.RGBA32UI),K===s.BYTE&&(ce=s.RGBA8I),K===s.SHORT&&(ce=s.RGBA16I),K===s.INT&&(ce=s.RGBA32I)),S===s.RGB&&(K===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.RGB16_EXT),K===s.SHORT&&Ue&&(ce=Ue.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),S===s.RGBA){const fe=Re?Xc:Et.getTransfer(ue);K===s.FLOAT&&(ce=s.RGBA32F),K===s.HALF_FLOAT&&(ce=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ce=fe===Ft?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ue&&(ce=Ue.RGBA16_EXT),K===s.SHORT&&Ue&&(ce=Ue.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function B(D,S){let K;return D?S===null||S===Yi||S===qo?K=s.DEPTH24_STENCIL8:S===Vi?K=s.DEPTH32F_STENCIL8:S===Wo&&(K=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===qo?K=s.DEPTH_COMPONENT24:S===Vi?K=s.DEPTH_COMPONENT32F:S===Wo&&(K=s.DEPTH_COMPONENT16),K}function L(D,S){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Pn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function P(D){const S=D.target;S.removeEventListener("dispose",P),N(S),S.isVideoTexture&&x.delete(S),S.isHTMLTexture&&v.delete(S)}function E(D){const S=D.target;S.removeEventListener("dispose",E),G(S)}function N(D){const S=r.get(D);if(S.__webglInit===void 0)return;const K=D.source,re=b.get(K);if(re){const ue=re[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&Y(D),Object.keys(re).length===0&&b.delete(K)}r.remove(D)}function Y(D){const S=r.get(D);s.deleteTexture(S.__webglTexture);const K=D.source,re=b.get(K);delete re[S.__cacheKey],d.memory.textures--}function G(D){const S=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let ue=0;ue<S.__webglFramebuffer[re].length;ue++)s.deleteFramebuffer(S.__webglFramebuffer[re][ue]);else s.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)s.deleteFramebuffer(S.__webglFramebuffer[re]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=D.textures;for(let re=0,ue=K.length;re<ue;re++){const Re=r.get(K[re]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),d.memory.textures--),r.remove(K[re])}r.remove(D)}let j=0;function de(){j=0}function pe(){return j}function Q(D){j=D}function O(){const D=j;return D>=l.maxTextures&&it("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function H(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function J(D,S){const K=r.get(D);if(D.isVideoTexture&&q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const re=D.image;if(re===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{He(K,D,S);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+S)}function me(D,S){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){He(K,D,S);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+S)}function Ee(D,S){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){He(K,D,S);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+S)}function U(D,S){const K=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){Te(K,D,S);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+S)}const W={[jd]:s.REPEAT,[xa]:s.CLAMP_TO_EDGE,[Jd]:s.MIRRORED_REPEAT},Se={[wn]:s.NEAREST,[vS]:s.NEAREST_MIPMAP_NEAREST,[dc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[ld]:s.LINEAR_MIPMAP_NEAREST,[Pr]:s.LINEAR_MIPMAP_LINEAR},Ae={[SS]:s.NEVER,[AS]:s.ALWAYS,[MS]:s.LESS,[kh]:s.LEQUAL,[bS]:s.EQUAL,[Xh]:s.GEQUAL,[ES]:s.GREATER,[TS]:s.NOTEQUAL};function Oe(D,S){if(S.type===Vi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Pn||S.magFilter===ld||S.magFilter===dc||S.magFilter===Pr||S.minFilter===Pn||S.minFilter===ld||S.minFilter===dc||S.minFilter===Pr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,W[S.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Se[S.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==dc&&S.minFilter!==Pr||S.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function ie(D,S){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",P));const re=S.source;let ue=b.get(re);ue===void 0&&(ue={},b.set(re,ue));const Re=H(S);if(Re!==D.__cacheKey){ue[Re]===void 0&&(ue[Re]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),ue[Re].usedTimes++;const Ue=ue[D.__cacheKey];Ue!==void 0&&(ue[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&Y(S)),D.__cacheKey=Re,D.__webglTexture=ue[Re].texture}return K}function ye(D,S,K){return Math.floor(Math.floor(D/K)/S)}function Me(D,S,K,re){const Re=D.updateRanges;if(Re.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,K,re,S.data);else{Re.sort((Ge,Pe)=>Ge.start-Pe.start);let Ue=0;for(let Ge=1;Ge<Re.length;Ge++){const Pe=Re[Ue],Le=Re[Ge],je=Pe.start+Pe.count,Je=ye(Le.start,S.width,4),at=ye(Pe.start,S.width,4);Le.start<=je+1&&Je===at&&ye(Le.start+Le.count-1,S.width,4)===Je?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++Ue,Re[Ue]=Le)}Re.length=Ue+1;const ce=i.getParameter(s.UNPACK_ROW_LENGTH),fe=i.getParameter(s.UNPACK_SKIP_PIXELS),we=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Ge=0,Pe=Re.length;Ge<Pe;Ge++){const Le=Re[Ge],je=Math.floor(Le.start/4),Je=Math.ceil(Le.count/4),at=je%S.width,k=Math.floor(je/S.width),Ce=Je,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,at,k,Ce,ge,K,re,S.data)}D.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ce),i.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function He(D,S,K){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);const ue=ie(D,S),Re=S.source;i.bindTexture(re,D.__webglTexture,s.TEXTURE0+K);const Ue=r.get(Re);if(Re.version!==Ue.__version||ue===!0){if(i.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ge=Et.getPrimaries(Et.workingColorSpace),De=S.colorSpace===ir?null:Et.getPrimaries(S.colorSpace),Fe=S.colorSpace===ir||ge===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let fe=M(S.image,!1,l.maxTextureSize);fe=Ht(S,fe);const we=u.convert(S.format,S.colorSpace),Ge=u.convert(S.type);let Pe=C(S.internalFormat,we,Ge,S.normalized,S.colorSpace,S.isVideoTexture);Oe(re,S);let Le;const je=S.mipmaps,Je=S.isVideoTexture!==!0,at=Ue.__version===void 0||ue===!0,k=Re.dataReady,Ce=L(S,fe);if(S.isDepthTexture)Pe=B(S.format===Ir,S.type),at&&(Je?i.texStorage2D(s.TEXTURE_2D,1,Pe,fe.width,fe.height):i.texImage2D(s.TEXTURE_2D,0,Pe,fe.width,fe.height,0,we,Ge,null));else if(S.isDataTexture)if(je.length>0){Je&&at&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,je[0].width,je[0].height);for(let ge=0,De=je.length;ge<De;ge++)Le=je[ge],Je?k&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,we,Ge,Le.data):i.texImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,we,Ge,Le.data);S.generateMipmaps=!1}else Je?(at&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,fe.width,fe.height),k&&Me(S,fe,we,Ge)):i.texImage2D(s.TEXTURE_2D,0,Pe,fe.width,fe.height,0,we,Ge,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,je[0].width,je[0].height,fe.depth);for(let ge=0,De=je.length;ge<De;ge++)if(Le=je[ge],S.format!==Ui)if(we!==null)if(Je){if(k)if(S.layerUpdates.size>0){const Fe=R_(Le.width,Le.height,S.format,S.type);for(const be of S.layerUpdates){const Ze=Le.data.subarray(be*Fe/Le.data.BYTES_PER_ELEMENT,(be+1)*Fe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,be,Le.width,Le.height,1,we,Ze)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,fe.depth,we,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,fe.depth,0,Le.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,fe.depth,we,Ge,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,fe.depth,0,we,Ge,Le.data)}else{Je&&at&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,je[0].width,je[0].height);for(let ge=0,De=je.length;ge<De;ge++)Le=je[ge],S.format!==Ui?we!==null?Je?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,we,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Le.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?k&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,we,Ge,Le.data):i.texImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,we,Ge,Le.data)}else if(S.isDataArrayTexture)if(Je){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,fe.width,fe.height,fe.depth),k)if(S.layerUpdates.size>0){const ge=R_(fe.width,fe.height,S.format,S.type);for(const De of S.layerUpdates){const Fe=fe.data.subarray(De*ge/fe.data.BYTES_PER_ELEMENT,(De+1)*ge/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,fe.width,fe.height,1,we,Ge,Fe)}S.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Ge,fe.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,we,Ge,fe.data);else if(S.isData3DTexture)Je?(at&&i.texStorage3D(s.TEXTURE_3D,Ce,Pe,fe.width,fe.height,fe.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Ge,fe.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,we,Ge,fe.data);else if(S.isFramebufferTexture){if(at)if(Je)i.texStorage2D(s.TEXTURE_2D,Ce,Pe,fe.width,fe.height);else{let ge=fe.width,De=fe.height;for(let Fe=0;Fe<Ce;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,Pe,ge,De,0,we,Ge,null),ge>>=1,De>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),fe.parentNode!==ge){ge.appendChild(fe),v.add(S),ge.onpaint=De=>{const Fe=De.changedElements;for(const be of v)Fe.includes(be.image)&&(be.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,fe);else{const Fe=s.RGBA,be=s.RGBA,Ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Fe,be,Ze,fe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if(Je&&at){const ge=wt(je[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Pe,ge.width,ge.height)}for(let ge=0,De=je.length;ge<De;ge++)Le=je[ge],Je?k&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,we,Ge,Le):i.texImage2D(s.TEXTURE_2D,ge,Pe,we,Ge,Le);S.generateMipmaps=!1}else if(Je){if(at){const ge=wt(fe);i.texStorage2D(s.TEXTURE_2D,Ce,Pe,ge.width,ge.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ge,fe)}else i.texImage2D(s.TEXTURE_2D,0,Pe,we,Ge,fe);y(S)&&I(re),Ue.__version=Re.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Te(D,S,K){if(S.image.length!==6)return;const re=ie(D,S),ue=S.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+K);const Re=r.get(ue);if(ue.version!==Re.__version||re===!0){i.activeTexture(s.TEXTURE0+K);const Ue=Et.getPrimaries(Et.workingColorSpace),ce=S.colorSpace===ir?null:Et.getPrimaries(S.colorSpace),fe=S.colorSpace===ir||Ue===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!we&&!Ge?Pe[be]=M(S.image[be],!0,l.maxCubemapSize):Pe[be]=Ge?S.image[be].image:S.image[be],Pe[be]=Ht(S,Pe[be]);const Le=Pe[0],je=u.convert(S.format,S.colorSpace),Je=u.convert(S.type),at=C(S.internalFormat,je,Je,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,Ce=Re.__version===void 0||re===!0,ge=ue.dataReady;let De=L(S,Le);Oe(s.TEXTURE_CUBE_MAP,S);let Fe;if(we){k&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,Le.width,Le.height);for(let be=0;be<6;be++){Fe=Pe[be].mipmaps;for(let Ze=0;Ze<Fe.length;Ze++){const Xe=Fe[Ze];S.format!==Ui?je!==null?k?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,Xe.width,Xe.height,je,Xe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,at,Xe.width,Xe.height,0,Xe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,Xe.width,Xe.height,je,Je,Xe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,at,Xe.width,Xe.height,0,je,Je,Xe.data)}}}else{if(Fe=S.mipmaps,k&&Ce){Fe.length>0&&De++;const be=wt(Pe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,be.width,be.height)}for(let be=0;be<6;be++)if(Ge){k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,je,Je,Pe[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,at,Pe[be].width,Pe[be].height,0,je,Je,Pe[be].data);for(let Ze=0;Ze<Fe.length;Ze++){const jt=Fe[Ze].image[be].image;k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,jt.width,jt.height,je,Je,jt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,at,jt.width,jt.height,0,je,Je,jt.data)}}else{k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,Je,Pe[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,at,je,Je,Pe[be]);for(let Ze=0;Ze<Fe.length;Ze++){const Xe=Fe[Ze];k?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,je,Je,Xe.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,at,je,Je,Xe.image[be])}}}y(S)&&I(s.TEXTURE_CUBE_MAP),Re.__version=ue.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Ie(D,S,K,re,ue,Re){const Ue=u.convert(K.format,K.colorSpace),ce=u.convert(K.type),fe=C(K.internalFormat,Ue,ce,K.normalized,K.colorSpace),we=r.get(S),Ge=r.get(K);if(Ge.__renderTarget=S,!we.__hasExternalTextures){const Pe=Math.max(1,S.width>>Re),Le=Math.max(1,S.height>>Re);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?i.texImage3D(ue,Re,fe,Pe,Le,S.depth,0,Ue,ce,null):i.texImage2D(ue,Re,fe,Pe,Le,0,Ue,ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),an(S)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ue,Ge.__webglTexture,0,Yt(S)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ue,Ge.__webglTexture,Re),i.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(D,S,K){if(s.bindRenderbuffer(s.RENDERBUFFER,D),S.depthBuffer){const re=S.depthTexture,ue=re&&re.isDepthTexture?re.type:null,Re=B(S.stencilBuffer,ue),Ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;an(S)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt(S),Re,S.width,S.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt(S),Re,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Re,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,D)}else{const re=S.textures;for(let ue=0;ue<re.length;ue++){const Re=re[ue],Ue=u.convert(Re.format,Re.colorSpace),ce=u.convert(Re.type),fe=C(Re.internalFormat,Ue,ce,Re.normalized,Re.colorSpace);an(S)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt(S),fe,S.width,S.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt(S),fe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,fe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function tt(D,S,K){const re=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(S.depthTexture);if(ue.__renderTarget=S,(!ue.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S.depthTexture);const we=u.convert(S.depthTexture.format),Ge=u.convert(S.depthTexture.type);let Pe;S.depthTexture.format===ba?Pe=s.DEPTH_COMPONENT24:S.depthTexture.format===Ir&&(Pe=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,S.width,S.height,0,we,Ge,null)}}else J(S.depthTexture,0);const Re=ue.__webglTexture,Ue=Yt(S),ce=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,fe=S.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ba)an(S)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ce,Re,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,fe,ce,Re,0);else if(S.depthTexture.format===Ir)an(S)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ce,Re,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,fe,ce,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(D){const S=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",ue)};re.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=re}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)tt(S.__webglFramebuffer[re],D,re);else{const re=D.texture.mipmaps;re&&re.length>0?tt(S.__webglFramebuffer[0],D,0):tt(S.__webglFramebuffer,D,0)}else if(K){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=s.createRenderbuffer(),dt(S.__webglDepthbuffer[re],D,!1);else{const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=S.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Re)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),dt(S.__webglDepthbuffer,D,!1);else{const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Re)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(D,S,K){const re=r.get(D);S!==void 0&&Ie(re.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ut(D)}function ot(D){const S=D.texture,K=r.get(D),re=r.get(S);D.addEventListener("dispose",E);const ue=D.textures,Re=D.isWebGLCubeRenderTarget===!0,Ue=ue.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,d.memory.textures++),Re){K.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)K.__webglFramebuffer[ce][fe]=s.createFramebuffer()}else K.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)K.__webglFramebuffer[ce]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ce=0,fe=ue.length;ce<fe;ce++){const we=r.get(ue[ce]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&an(D)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ce=0;ce<ue.length;ce++){const fe=ue[ce];K.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);const we=u.convert(fe.format,fe.colorSpace),Ge=u.convert(fe.type),Pe=C(fe.internalFormat,we,Ge,fe.normalized,fe.colorSpace,D.isXRRenderTarget===!0),Le=Yt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Pe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,K.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Ie(K.__webglFramebuffer[ce][fe],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Ie(K.__webglFramebuffer[ce],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(S)&&I(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ce=0,fe=ue.length;ce<fe;ce++){const we=ue[ce],Ge=r.get(we);let Pe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ge.__webglTexture),Oe(Pe,we),Ie(K.__webglFramebuffer,D,we,s.COLOR_ATTACHMENT0+ce,Pe,0),y(we)&&I(Pe)}i.unbindTexture()}else{let ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ce,re.__webglTexture),Oe(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Ie(K.__webglFramebuffer[fe],D,S,s.COLOR_ATTACHMENT0,ce,fe);else Ie(K.__webglFramebuffer,D,S,s.COLOR_ATTACHMENT0,ce,0);y(S)&&I(ce),i.unbindTexture()}D.depthBuffer&&ut(D)}function Lt(D){const S=D.textures;for(let K=0,re=S.length;K<re;K++){const ue=S[K];if(y(ue)){const Re=z(D),Ue=r.get(ue).__webglTexture;i.bindTexture(Re,Ue),I(Re),i.unbindTexture()}}}const Zt=[],qt=[];function on(D){if(D.samples>0){if(an(D)===!1){const S=D.textures,K=D.width,re=D.height;let ue=s.COLOR_BUFFER_BIT;const Re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(D),ce=S.length>1;if(ce)for(let we=0;we<S.length;we++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const fe=D.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let we=0;we<S.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const Ge=r.get(S[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,ue,s.NEAREST),p===!0&&(Zt.length=0,qt.length=0,Zt.push(s.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Zt.push(Re),qt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let we=0;we<S.length;we++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const Ge=r.get(S[we]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Ge,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const S=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Yt(D){return Math.min(l.maxSamples,D.samples)}function an(D){const S=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function q(D){const S=d.render.frame;x.get(D)!==S&&(x.set(D,S),D.update())}function Ht(D,S){const K=D.colorSpace,re=D.format,ue=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==kc&&K!==ir&&(Et.getTransfer(K)===Ft?(re!==Ui||ue!==fi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",K)),S}function wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=de,this.getTextureUnits=pe,this.setTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=me,this.setTexture3D=Ee,this.setTextureCube=U,this.rebindTextures=pt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function rA(s,e){function i(r,l=ir){let u;const d=Et.getTransfer(l);if(r===fi)return s.UNSIGNED_BYTE;if(r===Bh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===uv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===lv)return s.BYTE;if(r===cv)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===zh)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===dv)return s.ALPHA;if(r===hv)return s.RGB;if(r===Ui)return s.RGBA;if(r===ba)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===pv)return s.RED;if(r===Hh)return s.RED_INTEGER;if(r===Fr)return s.RG;if(r===Gh)return s.RG_INTEGER;if(r===Vh)return s.RGBA_INTEGER;if(r===Ic||r===zc||r===Bc||r===Fc)if(d===Ft)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ic)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ic)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$d||r===eh||r===th||r===nh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===$d)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ih||r===ah||r===rh||r===sh||r===oh||r===Gc||r===lh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ih||r===ah)return d===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===rh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===sh)return u.COMPRESSED_R11_EAC;if(r===oh)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Gc)return u.COMPRESSED_RG11_EAC;if(r===lh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Sh||r===Mh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ch)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ph)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_h)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mh)return d===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bh||r===Eh||r===Th)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bh)return d===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Th)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ah||r===Rh||r===Vc||r===Ch)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ah)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
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

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Mv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Zi({vertexShader:sA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qn(new el(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends Hr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,m="local-floor",p=1,h=null,x=null,v=null,g=null,b=null,T=null;const w=typeof XRWebGLBinding<"u",M=new lA,y={},I=i.getContextAttributes();let z=null,C=null;const B=[],L=[],P=new mt;let E=null;const N=new ui;N.viewport=new tn;const Y=new ui;Y.viewport=new tn;const G=[N,Y],j=new vM;let de=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=B[ie];return ye===void 0&&(ye=new gd,B[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=B[ie];return ye===void 0&&(ye=new gd,B[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=B[ie];return ye===void 0&&(ye=new gd,B[ie]=ye),ye.getHandSpace()};function Q(ie){const ye=L.indexOf(ie.inputSource);if(ye===-1)return;const Me=B[ye];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,h||d),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function O(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let ie=0;ie<B.length;ie++){const ye=L[ie];ye!==null&&(L[ie]=null,B[ie].disconnect(ye))}de=null,pe=null,M.reset();for(const ie in y)delete y[ie];e.setRenderTarget(z),b=null,g=null,v=null,l=null,C=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){m=ie,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,Te=null;I.depth&&(Te=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=I.stencil?Ir:ba,He=I.stencil?qo:Yi);const Ie={colorFormat:i.RGBA8,depthFormat:Te,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(Ie),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Wi(g.textureWidth,g.textureHeight,{format:Ui,type:fi,depthTexture:new Fs(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),C=new Wi(b.framebufferWidth,b.framebufferHeight,{format:Ui,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await l.requestReferenceSpace(m),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ie){for(let ye=0;ye<ie.removed.length;ye++){const Me=ie.removed[ye],He=L.indexOf(Me);He>=0&&(L[He]=null,B[He].disconnect(Me))}for(let ye=0;ye<ie.added.length;ye++){const Me=ie.added[ye];let He=L.indexOf(Me);if(He===-1){for(let Ie=0;Ie<B.length;Ie++)if(Ie>=L.length){L.push(Me),He=Ie;break}else if(L[Ie]===null){L[Ie]=Me,He=Ie;break}if(He===-1)break}const Te=B[He];Te&&Te.connect(Me)}}const J=new ae,me=new ae;function Ee(ie,ye,Me){J.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Me.matrixWorld);const He=J.distanceTo(me),Te=ye.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,dt=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),ut=(Te[9]+1)/Te[5],pt=(Te[9]-1)/Te[5],ot=(Te[8]-1)/Te[0],Lt=(Ie[8]+1)/Ie[0],Zt=dt*ot,qt=dt*Lt,on=He/(-ot+Lt),Yt=on*-ot;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Yt),ie.translateZ(on),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Te[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const an=dt+on,q=tt+on,Ht=Zt-Yt,wt=qt+(He-Yt),D=ut*tt/q*an,S=pt*tt/q*an;ie.projectionMatrix.makePerspective(Ht,wt,D,S,an,q),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let ye=ie.near,Me=ie.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),j.near=Y.near=N.near=ye,j.far=Y.far=N.far=Me,(de!==j.near||pe!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),de=j.near,pe=j.far),j.layers.mask=ie.layers.mask|6,N.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const He=ie.parent,Te=j.cameras;U(j,He);for(let Ie=0;Ie<Te.length;Ie++)U(Te[Ie],He);Te.length===2?Ee(j,N,Y):j.projectionMatrix.copy(N.projectionMatrix),W(ie,j,He)};function W(ie,ye,Me){Me===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Dh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&b===null))return p},this.setFoveation=function(ie){p=ie,g!==null&&(g.fixedFoveation=ie),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(ie){return y[ie]};let Se=null;function Ae(ie,ye){if(x=ye.getViewerPose(h||d),T=ye,x!==null){const Me=x.views;b!==null&&(e.setRenderTargetFramebuffer(C,b.framebuffer),e.setRenderTarget(C));let He=!1;Me.length!==j.cameras.length&&(j.cameras.length=0,He=!0);for(let tt=0;tt<Me.length;tt++){const ut=Me[tt];let pt=null;if(b!==null)pt=b.getViewport(ut);else{const Lt=v.getViewSubImage(g,ut);pt=Lt.viewport,tt===0&&(e.setRenderTargetTextures(C,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(C))}let ot=G[tt];ot===void 0&&(ot=new ui,ot.layers.enable(tt),ot.viewport=new tn,G[tt]=ot),ot.matrix.fromArray(ut.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(ut.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(pt.x,pt.y,pt.width,pt.height),tt===0&&(j.matrix.copy(ot.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),He===!0&&j.cameras.push(ot)}const Te=l.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const tt=v.getDepthInformation(Me[0]);tt&&tt.isValid&&tt.texture&&M.init(tt,l.renderState)}if(Te&&Te.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let tt=0;tt<Me.length;tt++){const ut=Me[tt].camera;if(ut){let pt=y[ut];pt||(pt=new Mv,y[ut]=pt);const ot=v.getCameraImage(ut);pt.sourceTexture=ot}}}}for(let Me=0;Me<B.length;Me++){const He=L[Me],Te=B[Me];He!==null&&Te!==void 0&&Te.update(He,ye,h||d)}Se&&Se(ie,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Oe=new Rv;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const uA=new nn,Ov=new st;Ov.set(-1,0,0,0,1,0,0,0,1);function fA(s,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,bv(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,I,z,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?u(M,y):y.isMeshLambertMaterial?(u(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(M,y),v(M,y)):y.isMeshPhongMaterial?(u(M,y),x(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(M,y),g(M,y),y.isMeshPhysicalMaterial&&b(M,y,C)):y.isMeshMatcapMaterial?(u(M,y),T(M,y)):y.isMeshDepthMaterial?u(M,y):y.isMeshDistanceMaterial?(u(M,y),w(M,y)):y.isMeshNormalMaterial?u(M,y):y.isLineBasicMaterial?(d(M,y),y.isLineDashedMaterial&&m(M,y)):y.isPointsMaterial?p(M,y,I,z):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const I=e.get(y),z=I.envMap,C=I.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Ov),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function m(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,I,z){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*I,M.scale.value=z*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function x(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,I){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const I=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function dA(s,e,i,r){let l={},u={},d=[];const m=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,B){const L=B.program;r.uniformBlockBinding(C,L)}function h(C,B){let L=l[C.id];L===void 0&&(M(C),L=x(C),l[C.id]=L,C.addEventListener("dispose",I));const P=B.program;r.updateUBOMapping(C,P);const E=e.render.frame;u[C.id]!==E&&(g(C),u[C.id]=E)}function x(C){const B=v();C.__bindingPointIndex=B;const L=s.createBuffer(),P=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,B,L),L}function v(){for(let C=0;C<m;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const B=l[C.id],L=C.uniforms,P=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let E=0,N=L.length;E<N;E++){const Y=L[E];if(Array.isArray(Y))for(let G=0,j=Y.length;G<j;G++)b(Y[G],E,G,P);else b(Y,E,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(C,B,L,P){if(w(C,B,L,P)===!0){const E=C.__offset,N=C.value;if(Array.isArray(N)){let Y=0;for(let G=0;G<N.length;G++){const j=N[G],de=y(j);T(j,C.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function T(C,B,L){typeof C=="number"||typeof C=="boolean"?B[0]=C:C.isMatrix3?(B[0]=C.elements[0],B[1]=C.elements[1],B[2]=C.elements[2],B[3]=0,B[4]=C.elements[3],B[5]=C.elements[4],B[6]=C.elements[5],B[7]=0,B[8]=C.elements[6],B[9]=C.elements[7],B[10]=C.elements[8],B[11]=0):ArrayBuffer.isView(C)?B.set(new C.constructor(C.buffer,C.byteOffset,B.length)):C.toArray(B,L)}function w(C,B,L,P){const E=C.value,N=B+"_"+L;if(P[N]===void 0)return typeof E=="number"||typeof E=="boolean"?P[N]=E:ArrayBuffer.isView(E)?P[N]=E.slice():P[N]=E.clone(),!0;{const Y=P[N];if(typeof E=="number"||typeof E=="boolean"){if(Y!==E)return P[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(Y.equals(E)===!1)return Y.copy(E),!0}}return!1}function M(C){const B=C.uniforms;let L=0;const P=16;for(let N=0,Y=B.length;N<Y;N++){const G=Array.isArray(B[N])?B[N]:[B[N]];for(let j=0,de=G.length;j<de;j++){const pe=G[j],Q=Array.isArray(pe.value)?pe.value:[pe.value];for(let O=0,H=Q.length;O<H;O++){const J=Q[O],me=y(J),Ee=L%P,U=Ee%me.boundary,W=Ee+U;L+=U,W!==0&&P-W<me.storage&&(L+=P-W),pe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=L,L+=me.storage}}}const E=L%P;return E>0&&(L+=P-E),C.__size=L,C.__cache={},this}function y(C){const B={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(B.boundary=4,B.storage=4):C.isVector2?(B.boundary=8,B.storage=8):C.isVector3||C.isColor?(B.boundary=16,B.storage=12):C.isVector4?(B.boundary=16,B.storage=16):C.isMatrix3?(B.boundary=48,B.storage=48):C.isMatrix4?(B.boundary=64,B.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(B.boundary=16,B.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),B}function I(C){const B=C.target;B.removeEventListener("dispose",I);const L=d.indexOf(B.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[B.id]),delete l[B.id],delete u[B.id]}function z(){for(const C in l)s.deleteBuffer(l[C]);d=[],l={},u={}}return{bind:p,update:h,dispose:z}}const hA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function pA(){return Hi===null&&(Hi=new jS(hA,16,16,Fr,Ma),Hi.name="DFG_LUT",Hi.minFilter=Pn,Hi.magFilter=Pn,Hi.wrapS=xa,Hi.wrapT=xa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class mA{constructor(e={}){const{canvas:i=CS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:b=fi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const w=b,M=new Set([Vh,Gh,Hh]),y=new Set([fi,Yi,Wo,qo,Bh,Fh]),I=new Uint32Array(4),z=new Int32Array(4),C=new ae;let B=null,L=null;const P=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,j=null,de=null,pe=null,Q=null;this._outputColorSpace=On;let O=0,H=0,J=null,me=-1,Ee=null;const U=new tn,W=new tn;let Se=null;const Ae=new Mt(0);let Oe=0,ie=i.width,ye=i.height,Me=1,He=null,Te=null;const Ie=new tn(0,0,ie,ye),dt=new tn(0,0,ie,ye);let tt=!1;const ut=new Zh;let pt=!1,ot=!1;const Lt=new nn,Zt=new ae,qt=new tn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function an(){return J===null?Me:1}let q=r;function Ht(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ph}`),i.addEventListener("webglcontextlost",jt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",jn,!1),q===null){const X="webgl2";if(q=Ht(X,A),q===null)throw Ht(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let wt,D,S,K,re,ue,Re,Ue,ce,fe,we,Ge,Pe,Le,je,Je,at,k,Ce,ge,De,Fe,be;function Ze(){wt=new pT(q),wt.init(),De=new rA(q,wt),D=new sT(q,wt,e,De),S=new iA(q,wt),D.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),de=q.createFramebuffer(),pe=q.createFramebuffer(),Q=q.createFramebuffer(),K=new _T(q),re=new k1,ue=new aA(q,wt,S,re,D,De,K),Re=new hT(Y),Ue=new SM(q),Fe=new aT(q,Ue),ce=new mT(q,Ue,K,Fe),fe=new xT(q,ce,Ue,Fe,K),k=new vT(q,D,ue),je=new oT(re),we=new V1(Y,Re,wt,D,Fe,je),Ge=new fA(Y,re),Pe=new W1,Le=new j1(wt),at=new iT(Y,Re,S,fe,T,p),Je=new nA(Y,fe,D),be=new dA(q,K,D,S),Ce=new rT(q,wt,K),ge=new gT(q,wt,K),K.programs=we.programs,Y.capabilities=D,Y.extensions=wt,Y.properties=re,Y.renderLists=Pe,Y.shadowMap=Je,Y.state=S,Y.info=K}Ze(),w!==fi&&(N=new ST(w,i.width,i.height,m,l,u));const Xe=new cA(Y,q);this.xr=Xe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(A){A!==void 0&&(Me=A,this.setSize(ie,ye,!1))},this.getSize=function(A){return A.set(ie,ye)},this.setSize=function(A,X,se=!0){if(Xe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ye=X,i.width=Math.floor(A*Me),i.height=Math.floor(X*Me),se===!0&&(i.style.width=A+"px",i.style.height=X+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ie*Me,ye*Me).floor()},this.setDrawingBufferSize=function(A,X,se){ie=A,ye=X,Me=se,i.width=Math.floor(A*se),i.height=Math.floor(X*se),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(w===fi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,X,se,te){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,X,se,te),S.viewport(U.copy(Ie).multiplyScalar(Me).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,X,se,te){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,X,se,te),S.scissor(W.copy(dt).multiplyScalar(Me).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){S.setScissorTest(tt=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,se=!0){let te=0;if(A){let ne=!1;if(J!==null){const ze=J.texture.format;ne=M.has(ze)}if(ne){const ze=J.texture.type,ke=y.has(ze),Ne=at.getClearColor(),qe=at.getClearAlpha(),We=Ne.r,$e=Ne.g,lt=Ne.b;ke?(I[0]=We,I[1]=$e,I[2]=lt,I[3]=qe,q.clearBufferuiv(q.COLOR,0,I)):(z[0]=We,z[1]=$e,z[2]=lt,z[3]=qe,q.clearBufferiv(q.COLOR,0,z))}else te|=q.COLOR_BUFFER_BIT}X&&(te|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",jt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),at.dispose(),Pe.dispose(),Le.dispose(),re.dispose(),Re.dispose(),fe.dispose(),Fe.dispose(),be.dispose(),we.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",un),Xe.removeEventListener("sessionend",En),Gn.stop()};function jt(A){A.preventDefault(),e_("WebGLRenderer: Context Lost."),G=!0}function Nt(){e_("WebGLRenderer: Context Restored."),G=!1;const A=K.autoReset,X=Je.enabled,se=Je.autoUpdate,te=Je.needsUpdate,ne=Je.type;Ze(),K.autoReset=A,Je.enabled=X,Je.autoUpdate=se,Je.needsUpdate=te,Je.type=ne}function jn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const X=A.target;X.removeEventListener("dispose",Jn),ks(X)}function ks(A){Xs(A),re.remove(A)}function Xs(A){const X=re.get(A).programs;X!==void 0&&(X.forEach(function(se){we.releaseProgram(se)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,se,te,ne,ze){X===null&&(X=on);const ke=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ne=Aa(A,X,se,te,ne);S.setMaterial(te,ke);let qe=se.index,We=1;if(te.wireframe===!0){if(qe=ce.getWireframeAttribute(se),qe===void 0)return;We=2}const $e=se.drawRange,lt=se.attributes.position;let Qe=$e.start*We,At=($e.start+$e.count)*We;ze!==null&&(Qe=Math.max(Qe,ze.start*We),At=Math.min(At,(ze.start+ze.count)*We)),qe!==null?(Qe=Math.max(Qe,0),At=Math.min(At,qe.count)):lt!=null&&(Qe=Math.max(Qe,0),At=Math.min(At,lt.count));const Jt=At-Qe;if(Jt<0||Jt===1/0)return;Fe.setup(ne,te,Ne,se,qe);let Xt,Ot=Ce;if(qe!==null&&(Xt=Ue.get(qe),Ot=ge,Ot.setIndex(Xt)),ne.isMesh)te.wireframe===!0?(S.setLineWidth(te.wireframeLinewidth*an()),Ot.setMode(q.LINES)):Ot.setMode(q.TRIANGLES);else if(ne.isLine){let Pt=te.linewidth;Pt===void 0&&(Pt=1),S.setLineWidth(Pt*an()),ne.isLineSegments?Ot.setMode(q.LINES):ne.isLineLoop?Ot.setMode(q.LINE_LOOP):Ot.setMode(q.LINE_STRIP)}else ne.isPoints?Ot.setMode(q.POINTS):ne.isSprite&&Ot.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Pt=ne._multiDrawStarts,Ve=ne._multiDrawCounts,Dn=ne._multiDrawCount,gt=qe?Ue.get(qe).bytesPerElement:1,_n=re.get(te).currentProgram.getUniforms();for(let $n=0;$n<Dn;$n++)_n.setValue(q,"_gl_DrawID",$n),Ot.render(Pt[$n]/gt,Ve[$n])}else if(ne.isInstancedMesh)Ot.renderInstances(Qe,Jt,ne.count);else if(se.isInstancedBufferGeometry){const Pt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ve=Math.min(se.instanceCount,Pt);Ot.renderInstances(Qe,Jt,Ve)}else Ot.render(Qe,Jt)};function Ws(A,X,se){A.transparent===!0&&A.side===Si&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,Ta(A,X,se),A.side=sr,A.needsUpdate=!0,Ta(A,X,se),A.side=Si):Ta(A,X,se)}this.compile=function(A,X,se=null){se===null&&(se=A),L=Le.get(se),L.init(X),E.push(L),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),A!==se&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const ze=ne.material;if(ze)if(Array.isArray(ze))for(let ke=0;ke<ze.length;ke++){const Ne=ze[ke];Ws(Ne,se,ne),te.add(Ne)}else Ws(ze,se,ne),te.add(ze)}),L=E.pop(),te},this.compileAsync=function(A,X,se=null){const te=this.compile(A,X,se);return new Promise(ne=>{function ze(){if(te.forEach(function(ke){re.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){ne(A);return}setTimeout(ze,10)}wt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Gr=null;function Ni(A){Gr&&Gr(A)}function un(){Gn.stop()}function En(){Gn.start()}const Gn=new Rv;Gn.setAnimationLoop(Ni),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){Gr=A,Xe.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},Xe.addEventListener("sessionstart",un),Xe.addEventListener("sessionend",En),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(A,X);const se=Xe.enabled===!0&&Xe.isPresenting===!0,te=N!==null&&(J===null||se)&&N.begin(Y,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(X),X=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,X,J),L=Le.get(A,E.length),L.init(X),L.state.textureUnits=ue.getTextureUnits(),E.push(L),Lt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ut.setFromProjectionMatrix(Lt,ki,X.reversedDepth),ot=this.localClippingEnabled,pt=je.init(this.clippingPlanes,ot),B=Pe.get(A,P.length),B.init(),P.push(B),Xe.enabled===!0&&Xe.isPresenting===!0){const ke=Y.xr.getDepthSensingMesh();ke!==null&&lr(ke,X,-1/0,Y.sortObjects)}lr(A,X,0,Y.sortObjects),B.finish(),Y.sortObjects===!0&&B.sort(He,Te,X.reversedDepth),Yt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Yt&&at.addToRenderList(B,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&je.beginShadows();const ne=L.state.shadowsArray;if(Je.render(ne,A,X),pt===!0&&je.endShadows(),(te&&N.hasRenderPass())===!1){const ke=B.opaque,Ne=B.transmissive;if(L.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Ne.length>0)for(let We=0,$e=qe.length;We<$e;We++){const lt=qe[We];nl(ke,Ne,A,lt)}Yt&&at.render(A);for(let We=0,$e=qe.length;We<$e;We++){const lt=qe[We];tl(B,A,lt,lt.viewport)}}else Ne.length>0&&nl(ke,Ne,A,X),Yt&&at.render(A),tl(B,A,X)}J!==null&&H===0&&(ue.updateMultisampleRenderTarget(J),ue.updateRenderTargetMipmap(J)),te&&N.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,X),Fe.resetDefaultState(),me=-1,Ee=null,E.pop(),E.length>0?(L=E[E.length-1],ue.setTextureUnits(L.state.textureUnits),pt===!0&&je.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?B=P[P.length-1]:B=null,j!==null&&j.renderEnd()};function lr(A,X,se,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ut.intersectsSprite(A)){te&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const ke=fe.update(A),Ne=A.material;Ne.visible&&B.push(A,ke,Ne,se,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ut.intersectsObject(A))){const ke=fe.update(A),Ne=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),qt.copy(ke.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ne)){const qe=ke.groups;for(let We=0,$e=qe.length;We<$e;We++){const lt=qe[We],Qe=Ne[lt.materialIndex];Qe&&Qe.visible&&B.push(A,ke,Qe,se,qt.z,lt)}}else Ne.visible&&B.push(A,ke,Ne,se,qt.z,null)}}const ze=A.children;for(let ke=0,Ne=ze.length;ke<Ne;ke++)lr(ze[ke],X,se,te)}function tl(A,X,se,te){const{opaque:ne,transmissive:ze,transparent:ke}=A;L.setupLightsView(se),pt===!0&&je.setGlobalState(Y.clippingPlanes,se),te&&S.viewport(U.copy(te)),ne.length>0&&cr(ne,X,se),ze.length>0&&cr(ze,X,se),ke.length>0&&cr(ke,X,se),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function nl(A,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Qe=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new Wi(1,1,{generateMipmaps:!0,type:Qe?Ma:fi,minFilter:Pr,samples:Math.max(4,D.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const ze=L.state.transmissionRenderTarget[te.id],ke=te.viewport||U;ze.setSize(ke.z*Y.transmissionResolutionScale,ke.w*Y.transmissionResolutionScale);const Ne=Y.getRenderTarget(),qe=Y.getActiveCubeFace(),We=Y.getActiveMipmapLevel();Y.setRenderTarget(ze),Y.getClearColor(Ae),Oe=Y.getClearAlpha(),Oe<1&&Y.setClearColor(16777215,.5),Y.clear(),Yt&&at.render(se);const $e=Y.toneMapping;Y.toneMapping=Xi;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),pt===!0&&je.setGlobalState(Y.clippingPlanes,te),cr(A,se,te),ue.updateMultisampleRenderTarget(ze),ue.updateRenderTargetMipmap(ze),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let At=0,Jt=X.length;At<Jt;At++){const Xt=X[At],{object:Ot,geometry:Pt,material:Ve,group:Dn}=Xt;if(Ve.side===Si&&Ot.layers.test(te.layers)){const gt=Ve.side;Ve.side=Kn,Ve.needsUpdate=!0,Ea(Ot,se,te,Pt,Ve,Dn),Ve.side=gt,Ve.needsUpdate=!0,Qe=!0}}Qe===!0&&(ue.updateMultisampleRenderTarget(ze),ue.updateRenderTargetMipmap(ze))}Y.setRenderTarget(Ne,qe,We),Y.setClearColor(Ae,Oe),lt!==void 0&&(te.viewport=lt),Y.toneMapping=$e}function cr(A,X,se){const te=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,ze=A.length;ne<ze;ne++){const ke=A[ne],{object:Ne,geometry:qe,group:We}=ke;let $e=ke.material;$e.allowOverride===!0&&te!==null&&($e=te),Ne.layers.test(se.layers)&&Ea(Ne,X,se,qe,$e,We)}}function Ea(A,X,se,te,ne,ze){A.onBeforeRender(Y,X,se,te,ne,ze),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(Y,X,se,te,A,ze),ne.transparent===!0&&ne.side===Si&&ne.forceSinglePass===!1?(ne.side=Kn,ne.needsUpdate=!0,Y.renderBufferDirect(se,X,te,ne,A,ze),ne.side=sr,ne.needsUpdate=!0,Y.renderBufferDirect(se,X,te,ne,A,ze),ne.side=Si):Y.renderBufferDirect(se,X,te,ne,A,ze),A.onAfterRender(Y,X,se,te,ne,ze)}function Ta(A,X,se){X.isScene!==!0&&(X=on);const te=re.get(A),ne=L.state.lights,ze=L.state.shadowsArray,ke=ne.state.version,Ne=we.getParameters(A,ne.state,ze,X,se,L.state.lightProbeGridArray),qe=we.getProgramCacheKey(Ne);let We=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Re.get(A.envMap||te.environment,$e),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Jn),We=new Map,te.programs=We);let lt=We.get(qe);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===ke)return Qi(A,Ne),lt}else Ne.uniforms=we.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,se,Ne),A.onBeforeCompile(Ne,Y),lt=we.acquireProgram(Ne,qe),We.set(qe,lt),te.uniforms=Ne.uniforms;const Qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=je.uniform),Qi(A,Ne),te.needsLights=il(A),te.lightsStateVersion=ke,te.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function Ki(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Hc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Qi(A,X){const se=re.get(A);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function ur(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let se=0,te=A.length;se<te;se++){const ne=A[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(C))return ne}return null}function Aa(A,X,se,te,ne){X.isScene!==!0&&(X=on),ue.resetTextureUnits();const ze=X.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Ne=J===null?Y.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Et.workingColorSpace,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,We=Re.get(te.envMap||ke,qe),$e=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,Jt=!!se.morphAttributes.color;let Xt=Xi;te.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=Y.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ve=re.get(te),Dn=L.state.lights;if(pt===!0&&(ot===!0||A!==Ee)){const Ut=A===Ee&&te.id===me;je.setState(te,A,Ut)}let gt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dn.state.version||Ve.outputColorSpace!==Ne||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==We||te.fog===!0&&Ve.fog!==ze||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==je.numPlanes||Ve.numIntersection!==je.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==lt||Ve.morphTargets!==Qe||Ve.morphNormals!==At||Ve.morphColors!==Jt||Ve.toneMapping!==Xt||Ve.morphTargetsCount!==Pt||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ve.__version=te.version);let _n=Ve.currentProgram;gt===!0&&(_n=Ta(te,X,ne),j&&te.isNodeMaterial&&j.onUpdateProgram(te,_n,Ve));let $n=!1,Mi=!1,ei=!1;const It=_n.getUniforms(),$t=Ve.uniforms;if(S.useProgram(_n.program)&&($n=!0,Mi=!0,ei=!0),te.id!==me&&(me=te.id,Mi=!0),Ve.needsLights){const Ut=ur(L.state.lightProbeGridArray,ne);Ve.lightProbeGrid!==Ut&&(Ve.lightProbeGrid=Ut,Mi=!0)}if($n||Ee!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(q,"projectionMatrix",A.projectionMatrix),It.setValue(q,"viewMatrix",A.matrixWorldInverse);const Oi=It.map.cameraPosition;Oi!==void 0&&Oi.setValue(q,Zt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&It.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,Mi=!0,ei=!0)}if(Ve.needsLights&&(Dn.state.directionalShadowMap.length>0&&It.setValue(q,"directionalShadowMap",Dn.state.directionalShadowMap,ue),Dn.state.spotShadowMap.length>0&&It.setValue(q,"spotShadowMap",Dn.state.spotShadowMap,ue),Dn.state.pointShadowMap.length>0&&It.setValue(q,"pointShadowMap",Dn.state.pointShadowMap,ue)),ne.isSkinnedMesh){It.setOptional(q,ne,"bindMatrix"),It.setOptional(q,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(q,"boneTexture",Ut.boneTexture,ue))}ne.isBatchedMesh&&(It.setOptional(q,ne,"batchingTexture"),It.setValue(q,"batchingTexture",ne._matricesTexture,ue),It.setOptional(q,ne,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",ne._indirectTexture,ue),It.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",ne._colorsTexture,ue));const bi=se.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&k.update(ne,se,_n),(Mi||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,It.setValue(q,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&($t.envMapIntensity.value=X.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=pA()),Mi){if(It.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Ve.needsLights&&fn($t,ei),ze&&te.fog===!0&&Ge.refreshFogUniforms($t,ze),Ge.refreshMaterialUniforms($t,te,Me,ye,L.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ut=Ve.lightProbeGrid;$t.probesSH.value=Ut.texture,$t.probesMin.value.copy(Ut.boundingBox.min),$t.probesMax.value.copy(Ut.boundingBox.max),$t.probesResolution.value.copy(Ut.resolution)}Hc.upload(q,Ki(Ve),$t,ue)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hc.upload(q,Ki(Ve),$t,ue),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&It.setValue(q,"center",ne.center),It.setValue(q,"modelViewMatrix",ne.modelViewMatrix),It.setValue(q,"normalMatrix",ne.normalMatrix),It.setValue(q,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Ut=te.uniformsGroups;for(let Oi=0,Ra=Ut.length;Oi<Ra;Oi++){const fr=Ut[Oi];be.update(fr,_n),be.bind(fr,_n)}}return _n}function fn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function il(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,X,se){const te=re.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=X,re.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const se=re.get(A);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,se=0){J=A,O=X,H=se;let te=null,ne=!1,ze=!1;if(A){const Ne=re.get(A);if(Ne.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(q.FRAMEBUFFER,Ne.__webglFramebuffer),U.copy(A.viewport),W.copy(A.scissor),Se=A.scissorTest,S.viewport(U),S.scissor(W),S.setScissorTest(Se),me=-1;return}else if(Ne.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Ne.__hasExternalTextures)ue.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Ne.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);const We=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[X])?te=We[X][se]:te=We[X],ne=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?te=re.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[se]:te=We,U.copy(A.viewport),W.copy(A.scissor),Se=A.scissorTest}else U.copy(Ie).multiplyScalar(Me).floor(),W.copy(dt).multiplyScalar(Me).floor(),Se=tt;if(se!==0&&(te=de),S.bindFramebuffer(q.FRAMEBUFFER,te)&&S.drawBuffers(A,te),S.viewport(U),S.scissor(W),S.setScissorTest(Se),ne){const Ne=re.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,se)}else if(ze){const Ne=X;for(let qe=0;qe<A.textures.length;qe++){const We=re.get(A.textures[qe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+qe,We.__webglTexture,se,Ne)}}else if(A!==null&&se!==0){const Ne=re.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ne.__webglTexture,se)}me=-1},this.readRenderTargetPixels=function(A,X,se,te,ne,ze,ke,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){S.bindFramebuffer(q.FRAMEBUFFER,qe);try{const We=A.textures[Ne],$e=We.format,lt=We.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne),!D.textureFormatReadable($e)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&se>=0&&se<=A.height-ne&&q.readPixels(X,se,te,ne,De.convert($e),De.convert(lt),ze)}finally{const We=J!==null?re.get(J).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,X,se,te,ne,ze,ke,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(X>=0&&X<=A.width-te&&se>=0&&se<=A.height-ne){S.bindFramebuffer(q.FRAMEBUFFER,qe);const We=A.textures[Ne],$e=We.format,lt=We.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne),!D.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Qe),q.bufferData(q.PIXEL_PACK_BUFFER,ze.byteLength,q.STREAM_READ),q.readPixels(X,se,te,ne,De.convert($e),De.convert(lt),0);const At=J!==null?re.get(J).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,At);const Jt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await wS(q,Jt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Qe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ze),q.deleteBuffer(Qe),q.deleteSync(Jt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,se=0){const te=Math.pow(2,-se),ne=Math.floor(A.image.width*te),ze=Math.floor(A.image.height*te),ke=X!==null?X.x:0,Ne=X!==null?X.y:0;ue.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,ke,Ne,ne,ze),S.unbindTexture()},this.copyTextureToTexture=function(A,X,se=null,te=null,ne=0,ze=0){let ke,Ne,qe,We,$e,lt,Qe,At,Jt;const Xt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(se!==null)ke=se.max.x-se.min.x,Ne=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,$e=se.min.y,lt=se.isBox3?se.min.z:0;else{const $t=Math.pow(2,-ne);ke=Math.floor(Xt.width*$t),Ne=Math.floor(Xt.height*$t),A.isDataArrayTexture?qe=Xt.depth:A.isData3DTexture?qe=Math.floor(Xt.depth*$t):qe=1,We=0,$e=0,lt=0}te!==null?(Qe=te.x,At=te.y,Jt=te.z):(Qe=0,At=0,Jt=0);const Ot=De.convert(X.format),Pt=De.convert(X.type);let Ve;X.isData3DTexture?(ue.setTexture3D(X,0),Ve=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ue.setTexture2DArray(X,0),Ve=q.TEXTURE_2D_ARRAY):(ue.setTexture2D(X,0),Ve=q.TEXTURE_2D),S.activeTexture(q.TEXTURE0),S.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const Dn=S.getParameter(q.UNPACK_ROW_LENGTH),gt=S.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=S.getParameter(q.UNPACK_SKIP_PIXELS),$n=S.getParameter(q.UNPACK_SKIP_ROWS),Mi=S.getParameter(q.UNPACK_SKIP_IMAGES);S.pixelStorei(q.UNPACK_ROW_LENGTH,Xt.width),S.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Xt.height),S.pixelStorei(q.UNPACK_SKIP_PIXELS,We),S.pixelStorei(q.UNPACK_SKIP_ROWS,$e),S.pixelStorei(q.UNPACK_SKIP_IMAGES,lt);const ei=A.isDataArrayTexture||A.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const $t=re.get(A),bi=re.get(X),Ut=re.get($t.__renderTarget),Oi=re.get(bi.__renderTarget);S.bindFramebuffer(q.READ_FRAMEBUFFER,Ut.__webglFramebuffer),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ra=0;Ra<qe;Ra++)ei&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ne,lt+Ra),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(X).__webglTexture,ze,Jt+Ra)),q.blitFramebuffer(We,$e,ke,Ne,Qe,At,ke,Ne,q.DEPTH_BUFFER_BIT,q.NEAREST);S.bindFramebuffer(q.READ_FRAMEBUFFER,null),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||re.has(A)){const $t=re.get(A),bi=re.get(X);S.bindFramebuffer(q.READ_FRAMEBUFFER,pe),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,Q);for(let Ut=0;Ut<qe;Ut++)ei?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$t.__webglTexture,ne,lt+Ut):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$t.__webglTexture,ne),It?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bi.__webglTexture,ze,Jt+Ut):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bi.__webglTexture,ze),ne!==0?q.blitFramebuffer(We,$e,ke,Ne,Qe,At,ke,Ne,q.COLOR_BUFFER_BIT,q.NEAREST):It?q.copyTexSubImage3D(Ve,ze,Qe,At,Jt+Ut,We,$e,ke,Ne):q.copyTexSubImage2D(Ve,ze,Qe,At,We,$e,ke,Ne);S.bindFramebuffer(q.READ_FRAMEBUFFER,null),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ve,ze,Qe,At,Jt,ke,Ne,qe,Ot,Pt,Xt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Ve,ze,Qe,At,Jt,ke,Ne,qe,Ot,Xt.data):q.texSubImage3D(Ve,ze,Qe,At,Jt,ke,Ne,qe,Ot,Pt,Xt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ze,Qe,At,ke,Ne,Ot,Pt,Xt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ze,Qe,At,Xt.width,Xt.height,Ot,Xt.data):q.texSubImage2D(q.TEXTURE_2D,ze,Qe,At,ke,Ne,Ot,Pt,Xt);S.pixelStorei(q.UNPACK_ROW_LENGTH,Dn),S.pixelStorei(q.UNPACK_IMAGE_HEIGHT,gt),S.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),S.pixelStorei(q.UNPACK_SKIP_ROWS,$n),S.pixelStorei(q.UNPACK_SKIP_IMAGES,Mi),ze===0&&X.generateMipmaps&&q.generateMipmap(Ve),S.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){O=0,H=0,J=null,S.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const gA=[{id:"all",label:"All Structures"},{id:"fibrosa",label:"Tunica Fibrosa (Outer)"},{id:"vasculosa",label:"Tunica Vasculosa / Uvea"},{id:"nervosa",label:"Tunica Nervosa (Retina)"},{id:"optical",label:"Optical Refractive Media"},{id:"neural",label:"Neural Pathways"}],ar=[{id:"cornea",name:"Cornea",latin:"Cornea Transparens",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Anterior 1/6th)",pinPosition:[0,0,2.3],cameraTarget:[0,0,2],color:"#7dd3fc",opticalMetrics:{refractiveIndex:"n = 1.376",dioptricPower:"+43.0 Diopters (~70% total eye refraction)",thickness:"535 µm central, ~650 µm peripheral"},medicalDescription:"The anterior, transparent, highly curved window of the eye. Completely avascular, receiving oxygen directly from ambient air through the tear film and nutrients from the anterior chamber's aqueous humor. Comprises five classical histological layers: non-keratinized stratified squamous epithelium, Bowman's membrane, stroma (90% thickness composed of orthogonally arranged type I/V collagen fibrils), Descemet's membrane, and metabolic monolayer endothelium.",clinicalPathology:"Keratoconus (biomechanical stromal degradation causing conical ectasia), Fuchs' endothelial corneal dystrophy, microbial keratitis, bullous keratopathy.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course (BCSC), Section 8: External Disease and Cornea",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy: The Anatomical Basis of Clinical Practice (42nd Ed.)",title:"Chapter 41: The Visual Apparatus and Orbit",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"},{authority:"National Center for Biotechnology Information (NCBI)",title:"StatPearls: Anatomy, Head and Neck, Eye Cornea",url:"https://www.ncbi.nlm.nih.gov/books/NBK470344/"}],historicalTreatise:{author:"Alhazen (Ibn al-Haytham)",work:"Kitāb al-Manāẓir (Book of Optics, c. 1021)",note:"Refuted classical extramission theory (Pythagoras, Euclid, Galen), demonstrating through geometry and camera obscura experiments that perpendicular rays of light enter through the corneal hemisphere to initiate vision."},literaryAnalysis:{figure:"Seamus Heaney",text:"'Personal Helicon' (Death of a Naturalist, 1966)",quote:"Others had echoes, gave back your own call / With a clean new music in it. And one was mean for water: a shallow / To stare, big-eyed Narcissus, into some spring / Is beneath all adult dignity. I rhyme / To see myself, to set the darkness echoing.",commentary:"The cornea is the surface of the well: an organic lens that is both transparent aperture and reflective barrier. In Heaney's poetic archaeology, gazing into water mirrors the corneal threshold where the observing subject is confronted with their own submerged reflection."}},{id:"sclera",name:"Sclera & Episclera",latin:"Tunica Sclera",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Posterior 5/6ths)",pinPosition:[0,1.8,0],cameraTarget:[0,1.5,0],color:"#f8fafc",opticalMetrics:{refractiveIndex:"Opaque (irregular collagen scatter)",hydration:"68% hydration (vs. 78% in cornea)",thickness:"1.0 mm at posterior pole, 0.3 mm behind rectus insertions"},medicalDescription:"The dense, opaque, fibrous protective envelope of the globe. Consists of dense irregular bundles of collagen fibrils and elastic fibers that resist intraocular pressure (10–21 mmHg) and provide dynamic insertion points for the six extraocular muscles. Pierced posteriorly by the lamina cribrosa, through which retinal ganglion cell axons emerge to form the optic nerve.",clinicalPathology:"Scleritis (frequently associated with systemic autoimmune disorders like rheumatoid arthritis and granulomatosis with polyangiitis), episcleritis, scleral staphyloma, blue sclera (osteogenesis imperfecta).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Sclera and Episclera: Anatomy and Inflammation Management",url:"https://www.aao.org/eyenet/article/scleritis-diagnosis-management"},{authority:"Stanford University School of Medicine",title:"Ocular Pathology & Scleral Biomechanics",url:"https://med.stanford.edu/ophthalmology.html"}],historicalTreatise:{author:"Andreas Vesalius",work:"De Humani Corporis Fabrica (1543, Book VII)",note:"Vesalius systematically dissected the hard scleral tunic ('tunica dura / cornea dura') to dismantle Galen's rete mirabile within human cranial anatomy, demonstrating direct ocular-cerebral continuity."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto XXXII & XXXIII (Cocytus)",quote:"Lo pianto stesso lì pianger non lascia, / e 'l duol che truova in su li occhi rintoppo, / si volge in entro a far crescer l'ambascia; / ché le lagrime prime fanno groppo, / e sì come visiere di cristallo, / rïempion sotto 'l ciglio tutto 'l coppo.",commentary:"At the icy nadir of Dante's Inferno, frozen tears turn the ocular coats into rigid crystal visors. The sclera, as the protective armor of the eye, petrifies: weeping cannot escape, turning inward to intensify existential agony."}},{id:"iris",name:"Iris",latin:"Iris Stroma",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Anterior Uvea)",pinPosition:[-1.18,-.32,.22],cameraTarget:[-1.18,-.32,.22],color:"#38bdf8",opticalMetrics:{stromaPigmentation:"Melanin density in anterior border layer (eumelanin vs. pheomelanin)",musculature:"Sphincter pupillae (circular) & Dilator pupillae (radial)",diameter:"12 mm total diameter, 0.5 mm thickness at collarette"},medicalDescription:"The colored contractile diaphragm dividing the anterior and posterior chambers. Regulates retinal illuminance via two antagonistic smooth muscles: the circumferentially arranged sphincter pupillae (parasympathetic innervation via CN III / ciliary ganglion) and the radially arranged dilator pupillae (sympathetic innervation via superior cervical ganglion). Posterior pigmented epithelium prevents light leakage.",clinicalPathology:"Anterior uveitis (iritis with keratic precipitates and cell/flare in anterior chamber), heterochromia iridum, iridodialysis (traumatic disinsertion of iris root), Horner's syndrome.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course, Section 2: Fundamentals and Principles of Ophthalmology",url:"https://www.aao.org/education/bcsc"},{authority:"National Institutes of Health (NIH)",title:"National Eye Institute: Uveal Biology and Iris Stroma Function",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"Galen of Pergamon",work:"De Usu Partium (On the Usefulness of the Parts of the Body, 2nd Century CE)",note:"Described the rainbow membrane ('iris') as the dynamic regulator of visual spirit (pneuma optikon), adjusting to protect the interior crystalline seat of vision from excess glare."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXXIII",quote:"Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",commentary:"In the climactic vision of the Trinity in Paradiso XXXIII, Dante employs the optical phenomenon of the rainbow iris ('come iri da iri') reflecting light back upon itself, evoking the circular chromatic rings of the eye to envision the divine essence."}},{id:"pupil",name:"Pupil",latin:"Pupilla (Apertura Centralis)",layerCategory:"optical",layer:"Optical Aperture & Light Reflex",pinPosition:[-1.22,.02,.25],cameraTarget:[-1.22,.02,.25],color:"#fbbf24",opticalMetrics:{apertureRange:"2.0 mm (miosis in bright light) to 8.0 mm (mydriasis in darkness)",focalRatio:"f/2.1 to f/8.3 optical aperture adjustment",aberrationControl:"Restricts spherical and chromatic aberration to diffraction limit"},medicalDescription:"The central circular aperture of the iris through which light enters the posterior eye. Acts as the optical entrance pupil, dynamically modulating depth of field and retinal illuminance. Governed by the afferent pupillary light reflex pathway (retinal ganglion cells to pretectal nucleus in midbrain, projecting bilaterally to Edinger-Westphal nuclei).",clinicalPathology:"Relative Afferent Pupillary Defect (RAPD / Marcus Gunn pupil indicating optic nerve lesion), Argyll Robertson pupil (light-near dissociation in neurosyphilis), Adie's tonic pupil, pharmacological mydriasis.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Pupil Evaluation and Afferent/Efferent Pupillary Disorders",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI Bookshelf: Webvision",title:"The Pupillary Light Reflex Pathway and Clinical Neuro-Ophthalmology",url:"https://webvision.med.utah.edu/"}],historicalTreatise:{author:"René Descartes",work:"La Dioptrique (1637, Discourse V)",note:"Compared the pupil to the adjustable diaphragm of a camera obscura, mathematically calculating how pupillary dilation preserves image brightness in dim light while constriction sharpens focus in daylight."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' (1987)",quote:"A small light for small people, wanting no / great beam, but testing what they say / with an eye that burns right into your soul / ... Diogenes with his lantern, seeking one just man.",commentary:"The pupil in Heaney becomes Diogenes' lantern: an aperture that tests moral illumination. It does not merely receive light passively but interrogates the observer with a concentrated, piercing pinpoint of vision."}},{id:"lens",name:"Crystalline Lens & Zonules",latin:"Lens Crystallina",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,1.3],cameraTarget:[0,0,1.2],color:"#e0f2fe",opticalMetrics:{refractiveIndex:"Gradient index: n = 1.386 (cortex) to 1.406 (nucleus)",dioptricPower:"+15.0 to +20.0 Diopters (unaccommodated), up to +30.0 D",accommodation:"Helmholtz mechanism mediated by ciliary muscle contraction"},medicalDescription:"A transparent, biconvex, flexible optical element suspended between the iris and vitreous humor by the delicate zonular fibers of Zinn (ciliary zonule). Highly specialized, mature lens fibers lose their nuclei and organelles to maintain optical clarity, packing high concentrations of crystallin proteins (alpha, beta, gamma). Modulates dynamic focus via Helmholtzian accommodation.",clinicalPathology:"Cataracts (nuclear sclerotic, cortical, or posterior subcapsular opacification due to crystallin protein aggregation), presbyopia (loss of zonular elasticity and lens hardness with age), ectopia lentis (zonular dehiscence in Marfan syndrome).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Lens and Cataract: BCSC Section 11",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI Bookshelf: Webvision",title:"Physiological Optics of the Human Lens and Accommodation",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"}],historicalTreatise:{author:"Galen & Ibn al-Jazzar",work:"Medical Canon on the 'Seat of the Soul' (Classical Antiquity)",note:"From Galen through Islamic medieval medicine, the crystalline lens was mistakenly crowned as the ultimate central organ of visual perception ('principale organum visionis'), rather than a simple refractive lens."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XV & Paradiso, Canto XXVI",quote:"Come quando da l'acqua o da lo specchio / salta lo raggio a l'opposita parte, / salendo su per lo modo parecchio / a quel che scende, e tanto si diparte / dal cader de la pietra in igual tratta, / sì come mostra esperïenza e arte...",commentary:"Dante understands optical accommodation spiritually: as his pilgrim ascends the spheres of Paradise, Beatrice cleanses his ocular crystalline faculty so that his gaze can endure escalating intensities of celestial illumination."}},{id:"ciliaryBody",name:"Ciliary Body & Trabecular Meshwork",latin:"Corpus Ciliare",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Middle Uvea)",pinPosition:[0,1.4,1.1],cameraTarget:[0,1,1],color:"#b45309",opticalMetrics:{aqueousProduction:"2.0–2.5 µL/min secretional rate",accommodationForce:"Smooth muscle vectors adjusting zonular tension",intraocularPressure:"Regulated homeostatically around 15.5 mmHg"},medicalDescription:"The circumferential uveal tissue connecting the choroid with the iris. Composed of two parts: pars plicata (anterior corrugated zone bearing ~70 ciliary processes) and pars plana (posterior flattened zone). Produces aqueous humor through active secretion and ultrafiltration by the dual-layered ciliary epithelium, while containing the smooth ciliary muscle fibers (longitudinal, radial, circular) responsible for lens accommodation.",clinicalPathology:"Primary Open-Angle Glaucoma (trabecular meshwork resistance), cyclitis, hypotony, malignant ciliary block glaucoma.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Glaucoma: Pathophysiology of Aqueous Outflow and Intraocular Pressure",url:"https://www.aao.org/education/bcsc"},{authority:"European Glaucoma Society (EGS)",title:"Terminology and Guidelines for Glaucoma (5th Ed.)",url:"https://www.eugs.org/"}],historicalTreatise:{author:"Hermann von Helmholtz",work:"Handbuch der Physiologischen Optik (Treatise on Physiological Optics, 1856–1867)",note:"Formulated the definitive mechanism of ocular accommodation: ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to bulge into greater convexity."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Tollund Man' & Bog Poems",quote:"Those dark man-killing parishes. / ... I will feel lost, / Unhappy and at home.",commentary:"The hydraulic pressure within the ciliary apparatus parallels the bog's peat-press: an enclosed, dark anatomical engine regulating fluid balance, preserving archaic bodily tensions beneath peat and flesh."}},{id:"choroid",name:"Choroid",latin:"Choroidea",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Posterior Uvea)",pinPosition:[0,-1.6,-.6],cameraTarget:[0,-1.2,-.5],color:"#7f1d1d",opticalMetrics:{bloodFlow:"Highest blood flow per unit weight in human body (~1000 mL/min/100g)",pigmentation:"Dense melanin concentration for thermal/light dissipation",thickness:"0.2 mm (posterior pole) thinning to 0.1 mm anteriorly"},medicalDescription:"The posterior, extensively vascularized section of the uveal tract bounded internally by Bruch's membrane and externally by the sclera. Formed of four histological layers: Haller's layer (large vessel layer), Sattler's layer (medium vessels), choriocapillaris (fenestrated capillary monolayer), and Bruch's membrane (extracellular lamina). Nourishes the avascular outer retina, photoreceptors, and retinal pigment epithelium.",clinicalPathology:"Choroidal neovascularization (CNV in wet age-related macular degeneration), choroidal melanoma, central serous chorioretinopathy, choroidal detachment.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Retina and Vitreous: BCSC Section 12",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / NIH Webvision",title:"The Choroid: Anatomy, Vascular Architecture, and Bruch's Membrane",url:"https://www.ncbi.nlm.nih.gov/books/NBK11554/"}],historicalTreatise:{author:"Johannes Kepler",work:"Ad Vitellionem Paralipomena (Astronomiae Pars Optica, 1604)",note:"Recognized the choroid as the dark, light-absorptive lining of the anatomical camera obscura, preventing internal light back-scatter."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto IX (The City of Dis)",quote:"O voi ch'avete li 'ntelletti sani, / mirate la dottrina che s'asconde / sotto 'l velame de li versi strani.",commentary:"The vascular, blood-gorged choroid is the hidden anatomical veil ('velame') beneath the visual screen: a dark, pulsing under-tunic that sustains perception while remaining entirely concealed from conscious sight."}},{id:"vitreous",name:"Vitreous Humor (Corpus Vitreum)",latin:"Corpus Vitreum",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,.2],cameraTarget:[0,0,0],color:"#38bdf8",opticalMetrics:{refractiveIndex:"n = 1.336 (matched closely to aqueous humor)",composition:"98-99% water, type II collagen scaffolding, hyaluronic acid",volume:"4.0 mL (~80% of total globe volume)"},medicalDescription:"A clear, viscoelastic, transparent gel occupying the posterior four-fifths of the globe between the lens and retina. The hyaloid membrane encloses the vitreous core and establishes firm anatomical attachments at the vitreous base (straddling the ora serrata), optic disc margin, macula, and retinal blood vessels. Traversed embryologically by Cloquet's canal (vestige of the fetal hyaloid artery).",clinicalPathology:"Posterior vitreous detachment (PVD), vitreous hemorrhage, asteroid hyalosis, vitreomacular traction syndrome, floaters (vitreous syneresis).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Vitreous Body Physiology and Vitreoretinal Surgery",url:"https://www.aao.org/education/bcsc"},{authority:"National Eye Institute (NEI / NIH)",title:"Vitreous Mechanics and Retinal Traction",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"René Descartes",work:"La Dioptrique (1637)",note:"Used the transparent vitreous humor as a mechanical medium in his treatise on optics to model the physical transmission of motion particles (photons) directly onto the cerebral pineal gland."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Grauballe Man' & Bog Poems",quote:"As if he had been poured / in tar, he lies / on a pillow of turf / and seems to weep / the black river of himself.",commentary:"The vitreous body is the internal gelatinous abyss of the eye: a preserved, primordial fluid chamber preserving optical memory just as the peat bog embalms the sacrificed body in fluid suspension."}},{id:"retina",name:"Retina & Ora Serrata",latin:"Tunica Interna / Retina",layerCategory:"nervosa",layer:"Tunica Nervosa (Inner Sensorium)",pinPosition:[-1.2,.8,-.8],cameraTarget:[-1,.6,-.6],color:"#f43f5e",opticalMetrics:{photoreceptorCount:"~120 million rods, ~6 million cones",signalTransduction:"11-cis-retinal photoisomerization to all-trans-retinal in <1 picosecond",thickness:"100 µm at ora serrata to 230 µm adjacent to optic disc"},medicalDescription:"The neurosensory tissue of the inner eye that converts incident photons into action potentials. Histologically organized into 10 precisely stratified layers: (1) Retinal Pigment Epithelium, (2) Photoreceptor layer, (3) External Limiting Membrane, (4) Outer Nuclear Layer, (5) Outer Plexiform Layer, (6) Inner Nuclear Layer, (7) Inner Plexiform Layer, (8) Ganglion Cell Layer, (9) Nerve Fiber Layer, and (10) Internal Limiting Membrane.",clinicalPathology:"Rhegmatogenous retinal detachment (retinal tears allowing liquefied vitreous subretinal access), diabetic retinopathy, retinitis pigmentosa, retinal vein occlusion.",medicalSources:[{authority:"NCBI Bookshelf: Webvision",title:"The Organization of the Retina and Visual System (Kolb, Fernandez, Nelson)",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"},{authority:"American Academy of Ophthalmology (AAO)",title:"Retinal Anatomy, Physiology, and Vascular Diseases: BCSC Section 12",url:"https://www.aao.org/education/bcsc"}],historicalTreatise:{author:"Johannes Kepler & Santiago Ramón y Cajal",work:"Ad Vitellionem Paralipomena (1604) / The Structure of the Retina (1892)",note:"Kepler proved mathematically that an inverted and reversed physical image is projected onto the retinal screen; Cajal subsequently proved the individual neuronal circuit architecture using Golgi staining."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXXIII (The Beatific Vision)",quote:"Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",commentary:"Dante's climax in the Empyrean is the ultimate retinal exposure: the divine trinity appears as three concentric rings of light of three distinct colors, striking the pilgrim's sensorium directly in pure optical geometry."}},{id:"fovea",name:"Macula Lutea & Fovea Centralis",latin:"Fovea Centralis",layerCategory:"nervosa",layer:"Tunica Nervosa (Visual Axis Core)",pinPosition:[0,0,-1.85],cameraTarget:[0,0,-1.6],color:"#f59e0b",opticalMetrics:{diameter:"1.5 mm (Fovea), 0.35 mm (Foveola / avascular zone)",visualAcuity:"20/20 central foveal acuity (100% packed midget cone system)",pigmentation:"High concentration of lutein and zeaxanthin carotenoids"},medicalDescription:"The specialized, avascular central retinal depression located ~4.0 mm temporal and 0.8 mm inferior to the optic disc center. In the foveola, inner retinal layers are displaced laterally (creating the foveal pit/clivus) to allow unhindered light access to densely packed cone photoreceptors (~200,000 cones/mm²), providing maximal visual resolution and trichromatic color vision.",clinicalPathology:"Age-Related Macular Degeneration (dry/wet AMD with drusen and geographic atrophy), macular hole, central serous chorioretinopathy, cystoid macular edema.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Age-Related Macular Degeneration PPP (Preferred Practice Pattern)",url:"https://www.aao.org/preferred-practice-pattern/age-related-macular-degeneration-ppp"},{authority:"Journal of Comparative Neurology",title:"Curcio CA, et al. 'Human photoreceptor topography' (1990)",url:"https://pubmed.ncbi.nlm.nih.gov/2358643/"}],historicalTreatise:{author:"Samuel Thomas von Sömmerring",work:"De Foramine Centrali Retinae (1799)",note:"First documented the yellow pigment (macula lutea) and central foveal pit ('foramen centrale') in the human ocular fundus."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXVIII",quote:"Un punto vidi che raggiava lume / acuto sì, che 'l viso ch'elli affoca / chiuder conviensi per lo forte acume; / e quale stella par quinci più poca, / parrebbe luna, locata con esso / come stella con stella si colloca.",commentary:"The fovea centralis is Dante's 'point that radiated light so piercing'—an infinitesimal, blazing focal point of pure resolution around which the entire universe and sensory apparatus pivots."}},{id:"opticDisc",name:"Optic Disc (Mariotte's Blind Spot)",latin:"Discus Nervi Optici / Punctum Caecum",layerCategory:"neural",layer:"Neural Pathways / Physiological Scotoma",pinPosition:[.9,.2,-1.75],cameraTarget:[.7,.2,-1.5],color:"#fbbf24",opticalMetrics:{scotomaSize:"5.5° wide by 7.5° high in visual field (~15° temporal to fixation)",dimension:"1.5 mm horizontal x 1.75 mm vertical diameter",photoreceptorDensity:"Zero (complete absence of rods and cones)"},medicalDescription:"The anatomical exit point for ~1.2 million unmyelinated axons of retinal ganglion cells as they coalesce and pass through the fenestrated scleral lamina cribrosa. Because the disc is devoid of photoreceptors and retinal pigment epithelium, it generates an absolute physiological scotoma (blind spot) in the visual field. Contains the physiological cup and the central retinal artery/vein bifurcations.",clinicalPathology:"Papilledema (bilateral optic disc swelling from elevated intracranial pressure), glaucomatous optic neuropathy (cupping and neuroretinal rim loss), ischemic optic neuropathy (AION/NAION).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology: BCSC Section 5",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / StatPearls",title:"Physiology, Blind Spot (Punctum Caecum)",url:"https://www.ncbi.nlm.nih.gov/books/NBK545229/"}],historicalTreatise:{author:"Edme Mariotte",work:"Nouvelle Découverte touchant la Vue (Royal Academy of Sciences, Paris, 1668)",note:"Discovered the physiological blind spot by demonstrating that an object positioned at a 15-degree eccentricity disappears completely when its image strikes the optic nerve head."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' & 'The Underground'",quote:"There we were in the vaulted tunnel running, / You ahead of me, / ... All the while / I thought of Orpheus, turning to look back.",commentary:"Mariotte's blind spot is the structural blind spot of Orpheus: the inevitable dark void in the center of perception where looking directly causes the object of desire to vanish. Vision is constructed around what it cannot see."}},{id:"opticNerve",name:"Optic Nerve (Cranial Nerve II)",latin:"Nervus Opticus (CN II)",layerCategory:"neural",layer:"Neural Pathways (Ocular-Cerebral Conduit)",pinPosition:[.9,.2,-2.8],cameraTarget:[.9,.2,-2.4],color:"#fde047",opticalMetrics:{axonCount:"~1.2 million myelinated nerve fibers (oligodendrocytes post-lamina)",length:"40–50 mm total (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)",sheathMeninges:"Ensheathed by dura mater, arachnoid mater, and pia mater with subarachnoid space (CSF)"},medicalDescription:"The paired cranial nerve transmitting visual sensory information from the retina to the lateral geniculate nucleus (LGN), superior colliculus, and pretectal nuclei. Anatomically not a true peripheral nerve but an outpouching of the diencephalon; thus wrapped by all three meningeal sheaths and vulnerable to intracranial pressure transmitted through the subarachnoid space.",clinicalPathology:"Optic neuritis (demyelination in Multiple Sclerosis), optic nerve glioma, traumatic optic neuropathy, compressive pituitary adenoma at the optic chiasm (bitemporal hemianopia).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology and Optic Nerve Diseases",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy (42nd Ed.)",title:"Cranial Nerves: Cranial Nerve II (Optic Nerve Pathway)",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"}],historicalTreatise:{author:"Andreas Vesalius & Galen",work:"De Humani Corporis Fabrica (1543)",note:"Dismantled the ancient Galenic doctrine that the optic nerves were hollow pipes ('canales perforati') channeling spiritus visivus, proving they were solid fibrillar neural cables leading to the optic chiasm."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XXI & Paradiso, Canto XXX",quote:"Non è fantastico lo splendore ond'io mi sento fasciato; / ... e vidi lume in forma di rivera / fulvido di fulgore, intra due rive / dipinte di mirabil primavera.",commentary:"The optic nerve is the river of light connecting Dante's corporeal body to the Empyrean: a biological cable conveying light through darkness until neural sensation transforms into pure spiritual intellect."}}];function _A({activeStructureId:s,onSelectStructure:e,viewMode:i,activeLayerFilter:r}){const l=bn.useRef(null),u=bn.useRef(null),d=bn.useRef(null),m=bn.useRef(null),p=bn.useRef({isDragging:!1,previousMousePosition:{x:0,y:0},rotation:{x:0,y:0},targetRotation:{x:0,y:0},zoom:4.8,targetZoom:4.8}),h=bn.useRef(null),x=bn.useRef(null),v=bn.useRef(null),[g,b]=bn.useState(null);return bn.useEffect(()=>{const T=l.current;if(!T)return;const w=new WS;u.current=w;const M=T.clientWidth,y=T.clientHeight||580,I=new ui(40,M/y,.1,100);I.position.set(0,0,p.current.zoom),d.current=I;const z=new mA({antialias:!0,alpha:!0});z.setSize(M,y),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.toneMapping=Ih,z.toneMappingExposure=1.35,z.shadowMap.enabled=!0,z.shadowMap.type=$_,m.current=z,T.innerHTML="",T.appendChild(z.domElement);const C=new gM(16777215,2);w.add(C);const B=new M_(16776176,2.5);B.position.set(6,8,8),w.add(B);const L=new M_(9684477,1.8);L.position.set(-6,-4,-6),w.add(L);const P=new pM(16096779,2.5,20);P.position.set(0,6,-5),w.add(P);const E=new zr;x.current=E,w.add(E);const N=new zr;h.current=N,E.add(N);const Y=new dM,G="/the-anatomical-gaze/",j=Y.load(`${G}eye_cutaway_photoreal.jpg?v=3`,Te=>{Te.colorSpace=On,Te.needsUpdate=!0});j.colorSpace=On;const de=Y.load(`${G}eye_globe_photoreal.jpg?v=3`,Te=>{Te.colorSpace=On,Te.needsUpdate=!0});de.colorSpace=On,vA(E,i,r,{cutawayTexture:j,globeTexture:de}),j_(N,ar,s,r);let pe=!1,Q=0,O=0;const H=Te=>{Te.button!==0&&Te.button!==2||(pe=!0,Q=Te.clientX,O=Te.clientY)},J=Te=>{const Ie=z.domElement.getBoundingClientRect(),dt=(Te.clientX-Ie.left)/Ie.width*2-1,tt=-((Te.clientY-Ie.top)/Ie.height)*2+1,ut=new E_;if(ut.setFromCamera(new mt(dt,tt),I),h.current){const Lt=h.current.children.map(qt=>qt.children[0]).filter(Boolean),Zt=ut.intersectObjects(Lt);if(Zt.length>0){const qt=Zt[0].object.userData.structureId;b(qt),z.domElement.style.cursor="pointer"}else b(null),z.domElement.style.cursor=pe?"grabbing":"grab"}if(!pe)return;const pt=Te.clientX-Q,ot=Te.clientY-O;p.current.targetRotation.y+=pt*.007,p.current.targetRotation.x+=ot*.007,p.current.targetRotation.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,p.current.targetRotation.x)),Q=Te.clientX,O=Te.clientY},me=()=>{pe=!1,z.domElement.style.cursor="grab"},Ee=Te=>{const Ie=z.domElement.getBoundingClientRect(),dt=(Te.clientX-Ie.left)/Ie.width*2-1,tt=-((Te.clientY-Ie.top)/Ie.height)*2+1,ut=new E_;if(ut.setFromCamera(new mt(dt,tt),I),h.current){const pt=h.current.children.map(Lt=>Lt.children[0]).filter(Boolean),ot=ut.intersectObjects(pt);if(ot.length>0){const Lt=ot[0].object.userData.structureId;Lt&&e&&e(Lt)}}},U=Te=>{Te.preventDefault(),p.current.targetZoom+=Te.deltaY*.005,p.current.targetZoom=Math.max(3.2,Math.min(7.5,p.current.targetZoom))},W=z.domElement;W.addEventListener("mousedown",H),window.addEventListener("mousemove",J),window.addEventListener("mouseup",me),W.addEventListener("click",Ee),W.addEventListener("wheel",U,{passive:!1});let Se=0;const Ae=Te=>{Te.touches.length===1?(pe=!0,Q=Te.touches[0].clientX,O=Te.touches[0].clientY):Te.touches.length===2&&(Se=Math.hypot(Te.touches[0].clientX-Te.touches[1].clientX,Te.touches[0].clientY-Te.touches[1].clientY))},Oe=Te=>{if(Te.touches.length===1&&pe){const Ie=Te.touches[0].clientX-Q,dt=Te.touches[0].clientY-O;p.current.targetRotation.y+=Ie*.007,p.current.targetRotation.x+=dt*.007,Q=Te.touches[0].clientX,O=Te.touches[0].clientY}else if(Te.touches.length===2){const Ie=Math.hypot(Te.touches[0].clientX-Te.touches[1].clientX,Te.touches[0].clientY-Te.touches[1].clientY),dt=(Se-Ie)*.01;p.current.targetZoom=Math.max(3.2,Math.min(7.5,p.current.targetZoom+dt)),Se=Ie}},ie=()=>{pe=!1};W.addEventListener("touchstart",Ae,{passive:!0}),W.addEventListener("touchmove",Oe,{passive:!0}),W.addEventListener("touchend",ie,{passive:!0});const ye=new ResizeObserver(Te=>{for(let Ie of Te){const dt=Ie.contentRect.width,tt=Ie.contentRect.height||580;dt>0&&tt>0&&(I.aspect=dt/tt,I.updateProjectionMatrix(),z.setSize(dt,tt))}});ye.observe(T);let Me=new xM;const He=()=>{const Te=Me.getElapsedTime();p.current.rotation.x+=(p.current.targetRotation.x-p.current.rotation.x)*.1,p.current.rotation.y+=(p.current.targetRotation.y-p.current.rotation.y)*.1,p.current.zoom+=(p.current.targetZoom-p.current.zoom)*.1,E.rotation.x=p.current.rotation.x,E.rotation.y=p.current.rotation.y,I.position.z=p.current.zoom,h.current&&h.current.children.forEach(Ie=>{const dt=Ie.children[1];if(dt){const tt=1+.35*Math.sin(Te*4.5+Ie.position.x*2);dt.scale.set(tt,tt,tt)}}),z.render(w,I),v.current=requestAnimationFrame(He)};return He(),()=>{v.current&&cancelAnimationFrame(v.current),W.removeEventListener("mousedown",H),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",me),W.removeEventListener("click",Ee),W.removeEventListener("wheel",U),W.removeEventListener("touchstart",Ae),W.removeEventListener("touchmove",Oe),W.removeEventListener("touchend",ie),ye.disconnect(),z.dispose()}},[i,r]),bn.useEffect(()=>{h.current&&j_(h.current,ar,s,r)},[s,r,i]),bn.useEffect(()=>{if(!s)return;const T=ar.find(w=>w.id===s);if(T&&T.pinPosition){const[w,M,y]=T.pinPosition,I=-Math.atan2(w,y+.001)*.45,z=Math.atan2(M,3.5)*.45;p.current.targetRotation.y=I,p.current.targetRotation.x=z,p.current.targetZoom=4.2}},[s]),_e.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"580px"},children:[_e.jsx("div",{ref:l,style:{width:"100%",height:"100%",minHeight:"580px",borderRadius:"12px",overflow:"hidden"}}),_e.jsxs("div",{style:{position:"absolute",bottom:"1rem",left:"1rem",display:"flex",gap:"0.6rem",background:"rgba(10, 10, 12, 0.88)",backdropFilter:"blur(12px)",padding:"0.45rem 0.9rem",borderRadius:"8px",border:"1px solid var(--border-glass)",fontSize:"0.82rem",color:"var(--text-secondary)"},children:[_e.jsx("span",{children:"🖱️ 360° Real 3D Model"}),_e.jsx("span",{children:"•"}),_e.jsx("span",{children:"🔍 Scroll to Zoom"}),_e.jsx("span",{children:"•"}),_e.jsx("span",{children:"🎯 Click 3D Pins"})]}),g&&_e.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",background:"rgba(20, 21, 26, 0.95)",backdropFilter:"blur(12px)",border:"1px solid var(--accent-gold)",padding:"0.5rem 1rem",borderRadius:"8px",color:"#fff",fontSize:"0.9rem",boxShadow:"0 8px 24px rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:30},children:[_e.jsx("strong",{style:{color:"var(--accent-gold)"},children:ar.find(T=>T.id===g)?.name}),_e.jsx("span",{style:{display:"block",fontSize:"0.75rem",color:"var(--text-secondary)",fontStyle:"italic"},children:ar.find(T=>T.id===g)?.latin})]}),_e.jsx("button",{onClick:()=>{p.current.targetRotation={x:0,y:0},p.current.targetZoom=4.8},style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(20, 21, 26, 0.85)",border:"1px solid var(--border-glass)",color:"var(--text-primary)",padding:"0.45rem 0.9rem",borderRadius:"6px",cursor:"pointer",fontSize:"0.82rem",backdropFilter:"blur(8px)",transition:"all 0.2s",zIndex:30},title:"Reset 3D Camera View",children:"↺ Reset 3D View"})]})}function vA(s,e,i,r){for(;s.children.length>1;)s.remove(s.children[s.children.length-1]);const l=e==="crossSection",u=3.6,d=new el(u,u),m=new Ev({map:l?r.cutawayTexture:r.globeTexture,transparent:!0,roughness:.25,metalness:.05,side:Si}),p=new Qn(d,m);p.position.set(0,0,0),s.add(p);const h=new Ko(1.28,48,48,0,Math.PI*2,0,Math.PI/2.1),x=new g_({color:14742270,transparent:!0,opacity:.45,roughness:.015,metalness:.05,transmission:.96,ior:1.376,clearcoat:1,clearcoatRoughness:.04,side:Si}),v=new Qn(h,x);if(l?(v.position.set(-1.08,.02,.35),v.scale.set(.95,.95,.65),v.rotation.y=-.45):(v.position.set(0,0,1.4),v.scale.set(1,1,.75)),s.add(v),l){const g=new Ko(.55,32,32),b=new g_({color:16317180,transparent:!0,opacity:.88,roughness:.03,transmission:.94,ior:1.406,clearcoat:.9}),T=new Qn(g,b);T.position.set(-.68,.01,.12),T.scale.set(.92,.92,.45),s.add(T)}}function j_(s,e,i,r,l){for(;s.children.length>0;)s.remove(s.children[0]);const u={cornea:[-1.42,.08,.3],sclera:[.38,1.48,.1],iris:[-1.18,-.32,.22],pupil:[-1.22,.02,.25],lens:[-.68,.01,.15],ciliary:[-.88,-.68,.18],choroid:[.46,1.34,.1],retina:[.56,1.16,.1],vitreous:[.12,-.22,.05],fovea:[.74,.04,.05],opticDisc:[.96,-.26,.1],opticNerve:[1.68,-.48,.1]};e.forEach(d=>{if(r!=="all"&&d.layerCategory!==r)return;const m=u[d.id]||d.pinPosition,p=d.id===i,h=new zr;h.position.set(...m);const x=new Ko(p?.11:.08,20,20),v=new Wc({color:p?13938487:16777215}),g=new Qn(x,v);g.userData={structureId:d.id},h.add(g);const b=new Kh(.1,.15,32),T=new Wc({color:p?13938487:d.color||3718648,side:Si,transparent:!0,opacity:p?.95:.75}),w=new Qn(b,T);h.add(w),s.add(h)})}function xA({structure:s}){const[e,i]=bn.useState("medical");return s?_e.jsxs("div",{className:"glass-panel",style:{height:"100%",padding:"2rem",display:"flex",flexDirection:"column",overflowY:"auto",maxHeight:"750px",animation:"fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)"},children:[_e.jsxs("div",{style:{borderBottom:"1px solid var(--border-glass)",paddingBottom:"1.25rem",marginBottom:"1.25rem"},children:[_e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.4rem"},children:[_e.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--accent-crimson)",fontWeight:"600",background:"rgba(158, 42, 43, 0.15)",padding:"0.2rem 0.6rem",borderRadius:"4px",border:"1px solid rgba(158, 42, 43, 0.3)"},children:s.layer}),_e.jsx("span",{style:{fontStyle:"italic",color:"var(--text-secondary)",fontSize:"0.9rem"},children:s.latin})]}),_e.jsx("h2",{style:{fontSize:"2.2rem",color:"var(--accent-gold)",margin:"0.2rem 0 0.5rem 0"},children:s.name}),s.opticalMetrics&&_e.jsx("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginTop:"0.75rem"},children:Object.entries(s.opticalMetrics).map(([r,l])=>_e.jsxs("span",{style:{fontSize:"0.8rem",background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-glass)",padding:"0.25rem 0.6rem",borderRadius:"6px",color:"var(--text-primary)"},children:[_e.jsxs("strong",{style:{color:"var(--accent-gold)",textTransform:"capitalize"},children:[r.replace(/([A-Z])/g," $1"),":"]})," ",l]},r))})]}),_e.jsxs("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(0, 0, 0, 0.3)",padding:"0.3rem",borderRadius:"8px",marginBottom:"1.5rem",border:"1px solid var(--border-glass)",overflowX:"auto"},children:[_e.jsx("button",{onClick:()=>i("medical"),style:Oc(e==="medical"),children:"🩺 Anatomy & Pathology"}),_e.jsxs("button",{onClick:()=>i("sources"),style:Oc(e==="sources"),children:["📚 Medical Sources (",s.medicalSources?.length||0,")"]}),_e.jsx("button",{onClick:()=>i("history"),style:Oc(e==="history"),children:"📜 Historical Treatise"}),_e.jsx("button",{onClick:()=>i("literary"),style:Oc(e==="literary"),children:"🖋️ Literary Analysis"})]}),_e.jsxs("div",{style:{flex:1},children:[e==="medical"&&_e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[_e.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",borderRadius:"8px",borderLeft:"4px solid var(--accent-gold)"},children:[_e.jsx("h4",{style:{color:"var(--text-primary)",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Histological Organization & Physiology"}),_e.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.medicalDescription})]}),s.clinicalPathology&&_e.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.08)",borderRadius:"8px",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.2)"},children:[_e.jsx("h4",{style:{color:"#f87171",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Clinical Pathologies & Diagnostics"}),_e.jsx("p",{style:{fontSize:"0.92rem",lineHeight:"1.6",color:"var(--text-primary)"},children:s.clinicalPathology})]})]}),e==="sources"&&_e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[_e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"0.25rem"},children:"Data and anatomical parameters pooled from peer-reviewed ophthalmic authorities and institutional curricula:"}),s.medicalSources?.map((r,l)=>_e.jsxs("div",{className:"interactive-card",style:{padding:"1rem 1.25rem",background:"rgba(20, 21, 26, 0.8)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[_e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.3rem"},children:[_e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-gold)",fontWeight:"600"},children:r.authority}),_e.jsx("span",{style:{fontSize:"0.75rem",color:"#6ee7b7"},children:"✓ Verified Peer-Reviewed"})]}),_e.jsx("h5",{style:{fontSize:"0.95rem",color:"var(--text-primary)",marginBottom:"0.5rem",fontWeight:"500"},children:r.title||r.citation}),r.url&&_e.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem",color:"var(--accent-gold)",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:"View Authority Catalog ↗"})]},l))]}),e==="history"&&s.historicalTreatise&&_e.jsxs("div",{style:{padding:"1.5rem",background:"rgba(216, 184, 99, 0.05)",border:"1px solid rgba(216, 184, 99, 0.2)",borderRadius:"10px"},children:[_e.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"var(--accent-gold)"},children:"Historical Anatomical Root"}),_e.jsx("h3",{style:{fontSize:"1.3rem",color:"var(--text-primary)",margin:"0.4rem 0"},children:s.historicalTreatise.author}),_e.jsx("p",{style:{fontStyle:"italic",color:"var(--accent-gold)",marginBottom:"1rem",fontSize:"0.95rem"},children:s.historicalTreatise.work}),_e.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-primary)"},children:s.historicalTreatise.note})]}),e==="literary"&&s.literaryAnalysis&&_e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[_e.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.1)",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.25)",borderRadius:"8px"},children:[_e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[_e.jsx("span",{style:{color:"var(--accent-crimson)",fontWeight:"bold",fontSize:"0.9rem"},children:s.literaryAnalysis.figure}),_e.jsx("span",{style:{fontStyle:"italic",fontSize:"0.85rem",color:"var(--text-secondary)"},children:s.literaryAnalysis.text})]}),_e.jsxs("blockquote",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"1.05rem",color:"var(--text-primary)",lineHeight:"1.6",margin:"0.75rem 0"},children:['"',s.literaryAnalysis.quote,'"']})]}),_e.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[_e.jsx("h5",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Critical Commentary"}),_e.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:s.literaryAnalysis.commentary})]})]})]})]}):_e.jsxs("div",{className:"glass-panel",style:{height:"100%",minHeight:"450px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2.5rem",textAlign:"center",color:"var(--text-secondary)"},children:[_e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem",opacity:.8},children:"👁️"}),_e.jsx("h3",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"1.4rem"},children:"3D Interactive Ocular Dissection"}),_e.jsx("p",{style:{maxWidth:"380px",fontSize:"0.95rem",lineHeight:"1.6"},children:"Click on any glowing anatomical pin in the 3D viewport or select a structure from the directory to inspect its medical anatomy, clinical citations, and literary resonance."})]})}function Oc(s){return{flex:"1 1 auto",padding:"0.55rem 0.8rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:s?"600":"400",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"}}function yA(){const[s,e]=bn.useState("cornea"),[i,r]=bn.useState("crossSection"),[l,u]=bn.useState("all"),d=ar.find(p=>p.id===s)||ar[0],m=ar.filter(p=>l==="all"||p.layerCategory===l);return _e.jsxs("div",{className:"section-container",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[_e.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:[_e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[_e.jsxs("div",{children:[_e.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"2px",color:"var(--accent-gold)"},children:"Interactive 3D Ocular Deep-Map"}),_e.jsx("h2",{style:{fontSize:"2.4rem",color:"var(--text-primary)",marginTop:"0.25rem"},children:"The Dissected Eye: 3D Anatomical Atlas"}),_e.jsx("p",{style:{maxWidth:"850px",fontSize:"1.05rem",color:"var(--text-secondary)",marginTop:"0.5rem",lineHeight:"1.6"},children:"Interactive 3D WebGL model modeled after clinical ophthalmic anatomy (LASIK, AAO, NIH Webvision). Rotate in 360°, inspect internal structures in sagittal cutaway dissection, and explore the convergence of medical ocular anatomy and Dante/Heaney poetics."})]}),_e.jsxs("div",{style:{display:"flex",background:"rgba(0,0,0,0.5)",padding:"0.4rem",borderRadius:"10px",border:"1px solid var(--border-glass)",gap:"0.4rem"},children:[_e.jsx("button",{onClick:()=>r("crossSection"),style:J_(i==="crossSection"),title:"Sagittal cross-section revealing internal anatomy",children:"🔪 Sagittal Dissection (Cutaway)"}),_e.jsx("button",{onClick:()=>r("composite"),style:J_(i==="composite"),title:"Full intact spherical globe",children:"👁️ Intact 3D Globe"})]})]}),_e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1.5rem",flexWrap:"wrap",borderTop:"1px solid var(--border-glass)",paddingTop:"1.25rem"},children:[_e.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",alignSelf:"center",marginRight:"0.5rem"},children:"Filter Tunics:"}),gA.map(p=>_e.jsx("button",{onClick:()=>u(p.id),style:SA(l===p.id),children:p.label},p.id))]}),_e.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1rem",overflowX:"auto",paddingBottom:"0.4rem"},children:m.map(p=>{const h=p.id===s;return _e.jsxs("button",{onClick:()=>e(p.id),style:{padding:"0.4rem 0.85rem",background:h?"rgba(216, 184, 99, 0.2)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${h?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"20px",color:h?"var(--accent-gold)":"var(--text-secondary)",fontSize:"0.82rem",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"},children:[h?"● ":"",p.name]},p.id)})})]}),_e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(420px, 1fr))",gap:"1.5rem",alignItems:"stretch"},children:[_e.jsxs("div",{className:"glass-panel",style:{position:"relative",padding:"1rem",display:"flex",flexDirection:"column",minHeight:"600px",border:"1px solid var(--border-glass)"},children:[_e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",borderBottom:"1px solid var(--border-glass)",marginBottom:"0.5rem"},children:[_e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[_e.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}),_e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-primary)",letterSpacing:"0.5px"},children:"Interactive 3D WebGL Model"})]}),_e.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:["Mode: ",i==="crossSection"?"Sagittal Cutaway Dissection":"Intact Ocular Globe"]})]}),_e.jsx("div",{style:{flex:1,position:"relative",minHeight:"520px"},children:_e.jsx(_A,{activeStructureId:s,onSelectStructure:p=>e(p),viewMode:i,activeLayerFilter:l})})]}),_e.jsx("div",{style:{minHeight:"600px"},children:_e.jsx(xA,{structure:d})})]})]})}function J_(s){return{padding:"0.55rem 1.1rem",background:s?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"7px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.85rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function SA(s){return{padding:"0.35rem 0.8rem",background:s?"rgba(216, 184, 99, 0.25)":"rgba(255, 255, 255, 0.04)",border:`1px solid ${s?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"6px",color:s?"#fff":"var(--text-secondary)",fontSize:"0.8rem",fontWeight:s?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function MA(){return _e.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[_e.jsx("h2",{style:{marginBottom:"1rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Gaze and the Abject Body"}),_e.jsx("p",{style:{marginBottom:"2rem",maxWidth:"800px",fontSize:"1.1rem"},children:'Explore how the "repulsive object" of the corpse, viewed through a medical lens, becomes the site of both poetic reflection and existential disintegration.'}),_e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:Zy.map(s=>_e.jsxs("div",{className:"interactive-card glass-panel",style:{padding:"1.5rem",display:"flex",flexDirection:"column"},children:[_e.jsx("div",{style:{height:"200px",background:"var(--bg-primary)",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border-glass)",color:"var(--text-secondary)",fontStyle:"italic",overflow:"hidden"},children:s.image?_e.jsx("img",{src:s.image,alt:s.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):`[Image Placeholder: ${s.title}]`}),_e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-crimson)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"0.5rem"},children:s.type}),_e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"1rem",color:"var(--accent-gold)"},children:s.title}),_e.jsx("p",{style:{fontSize:"0.95rem",flexGrow:1},children:s.description})]},s.id))})]})}function bA(){const[s,e]=bn.useState("timeline"),i={timeline:_e.jsx(Ky,{}),diagram:_e.jsx(yA,{}),gallery:_e.jsx(MA,{})};return _e.jsxs("div",{className:"app-container",children:[_e.jsxs("header",{className:"glass-panel app-header",style:{margin:"2rem",padding:"2rem",textAlign:"center"},children:[_e.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"0.5rem",color:"var(--accent-gold)"},children:"The Anatomical Gaze"}),_e.jsx("p",{className:"subtitle",style:{fontSize:"1.1rem",marginBottom:"2rem"},children:"Medical Optics, Ocular Anatomy, and the Literary Eye from Dante to Heaney"}),_e.jsxs("nav",{className:"main-nav",style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[_e.jsx("button",{className:`nav-btn interactive-card ${s==="timeline"?"active":""}`,onClick:()=>e("timeline"),style:Gd(s==="timeline"),children:"The Medical Eye"}),_e.jsx("button",{className:`nav-btn interactive-card ${s==="diagram"?"active":""}`,onClick:()=>e("diagram"),style:Gd(s==="diagram"),children:"The Dissected Eye"}),_e.jsx("button",{className:`nav-btn interactive-card ${s==="gallery"?"active":""}`,onClick:()=>e("gallery"),style:Gd(s==="gallery"),children:"The Abject Body"})]})]}),_e.jsx("main",{className:"content-area",style:{margin:"0 2rem 2rem 2rem",minHeight:"60vh"},children:i[s]})]})}function Gd(s){return{padding:"0.75rem 1.5rem",background:s?"var(--accent-crimson)":"var(--bg-glass)",border:`1px solid ${s?"var(--accent-crimson)":"var(--border-glass)"}`,color:"#fff",borderRadius:"8px",fontFamily:"Inter",fontWeight:"500",fontSize:"1rem",cursor:"pointer",transition:"var(--transition-fast)"}}qy.createRoot(document.getElementById("root")).render(_e.jsx(bn.StrictMode,{children:_e.jsx(bA,{})}));
