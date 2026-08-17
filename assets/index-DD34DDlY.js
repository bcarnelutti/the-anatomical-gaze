(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ch={exports:{}},Yo={};var y_;function wS(){if(y_)return Yo;y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var x_;function DS(){return x_||(x_=1,Ch.exports=wS()),Ch.exports}var gt=DS(),wh={exports:{}},he={};var S_;function US(){if(S_)return he;S_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(N,j,St){this.props=N,this.context=j,this.refs=M,this.updater=St||T}x.prototype.isReactComponent={},x.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=x.prototype;function B(N,j,St){this.props=N,this.context=j,this.refs=M,this.updater=St||T}var C=B.prototype=new O;C.constructor=B,w(C,x.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(N,j,St){var Rt=St.ref;return{$$typeof:r,type:N,key:j,ref:Rt!==void 0?Rt:null,props:St}}function F(N,j){return D(N.type,j,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function X(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return j[St]})}var $=/\/+/g;function ct(N,j){return typeof N=="object"&&N!==null&&N.key!=null?X(""+N.key):j.toString(36)}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(U,U):(N.status="pending",N.then(function(j){N.status==="pending"&&(N.status="fulfilled",N.value=j)},function(j){N.status==="pending"&&(N.status="rejected",N.reason=j)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,j,St,Rt,zt){var st=typeof N;(st==="undefined"||st==="boolean")&&(N=null);var vt=!1;if(N===null)vt=!0;else switch(st){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(N.$$typeof){case r:case t:vt=!0;break;case _:return vt=N._init,z(vt(N._payload),j,St,Rt,zt)}}if(vt)return zt=zt(N),vt=Rt===""?"."+ct(N,0):Rt,P(zt)?(St="",vt!=null&&(St=vt.replace($,"$&/")+"/"),z(zt,j,St,"",function(ae){return ae})):zt!=null&&(H(zt)&&(zt=F(zt,St+(zt.key==null||N&&N.key===zt.key?"":(""+zt.key).replace($,"$&/")+"/")+vt)),j.push(zt)),1;vt=0;var Et=Rt===""?".":Rt+":";if(P(N))for(var Ht=0;Ht<N.length;Ht++)Rt=N[Ht],st=Et+ct(Rt,Ht),vt+=z(Rt,j,St,st,zt);else if(Ht=S(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(Rt=N.next()).done;)Rt=Rt.value,st=Et+ct(Rt,Ht++),vt+=z(Rt,j,St,st,zt);else if(st==="object"){if(typeof N.then=="function")return z(K(N),j,St,Rt,zt);throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return vt}function V(N,j,St){if(N==null)return N;var Rt=[],zt=0;return z(N,Rt,"","",function(st){return j.call(St,st,zt++)}),Rt}function tt(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},bt={map:V,forEach:function(N,j,St){V(N,function(){j.apply(this,arguments)},St)},count:function(N){var j=0;return V(N,function(){j++}),j},toArray:function(N){return V(N,function(j){return j})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return he.Activity=v,he.Children=bt,he.Component=x,he.Fragment=i,he.Profiler=l,he.PureComponent=B,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(N,j,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=w({},N.props),zt=N.key;if(j!=null)for(st in j.key!==void 0&&(zt=""+j.key),j)!E.call(j,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&j.ref===void 0||(Rt[st]=j[st]);var st=arguments.length-2;if(st===1)Rt.children=St;else if(1<st){for(var vt=Array(st),Et=0;Et<st;Et++)vt[Et]=arguments[Et+2];Rt.children=vt}return D(N.type,zt,Rt)},he.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},he.createElement=function(N,j,St){var Rt,zt={},st=null;if(j!=null)for(Rt in j.key!==void 0&&(st=""+j.key),j)E.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(zt[Rt]=j[Rt]);var vt=arguments.length-2;if(vt===1)zt.children=St;else if(1<vt){for(var Et=Array(vt),Ht=0;Ht<vt;Ht++)Et[Ht]=arguments[Ht+2];zt.children=Et}if(N&&N.defaultProps)for(Rt in vt=N.defaultProps,vt)zt[Rt]===void 0&&(zt[Rt]=vt[Rt]);return D(N,st,zt)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:d,render:N}},he.isValidElement=H,he.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:tt}},he.memo=function(N,j){return{$$typeof:p,type:N,compare:j===void 0?null:j}},he.startTransition=function(N){var j=I.T,St={};I.T=St;try{var Rt=N(),zt=I.S;zt!==null&&zt(St,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(U,mt)}catch(st){mt(st)}finally{j!==null&&St.types!==null&&(j.types=St.types),I.T=j}},he.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},he.use=function(N){return I.H.use(N)},he.useActionState=function(N,j,St){return I.H.useActionState(N,j,St)},he.useCallback=function(N,j){return I.H.useCallback(N,j)},he.useContext=function(N){return I.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,j){return I.H.useDeferredValue(N,j)},he.useEffect=function(N,j){return I.H.useEffect(N,j)},he.useEffectEvent=function(N){return I.H.useEffectEvent(N)},he.useId=function(){return I.H.useId()},he.useImperativeHandle=function(N,j,St){return I.H.useImperativeHandle(N,j,St)},he.useInsertionEffect=function(N,j){return I.H.useInsertionEffect(N,j)},he.useLayoutEffect=function(N,j){return I.H.useLayoutEffect(N,j)},he.useMemo=function(N,j){return I.H.useMemo(N,j)},he.useOptimistic=function(N,j){return I.H.useOptimistic(N,j)},he.useReducer=function(N,j,St){return I.H.useReducer(N,j,St)},he.useRef=function(N){return I.H.useRef(N)},he.useState=function(N){return I.H.useState(N)},he.useSyncExternalStore=function(N,j,St){return I.H.useSyncExternalStore(N,j,St)},he.useTransition=function(){return I.H.useTransition()},he.version="19.2.8",he}var M_;function pp(){return M_||(M_=1,wh.exports=US()),wh.exports}var Qe=pp(),Dh={exports:{}},Zo={},Uh={exports:{}},Lh={};var b_;function LS(){return b_||(b_=1,(function(r){function t(z,V){var tt=z.length;z.push(V);t:for(;0<tt;){var mt=tt-1>>>1,bt=z[mt];if(0<l(bt,V))z[mt]=V,z[tt]=bt,tt=mt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],tt=z.pop();if(tt!==V){z[0]=tt;t:for(var mt=0,bt=z.length,N=bt>>>1;mt<N;){var j=2*(mt+1)-1,St=z[j],Rt=j+1,zt=z[Rt];if(0>l(St,tt))Rt<bt&&0>l(zt,St)?(z[mt]=zt,z[Rt]=tt,mt=Rt):(z[mt]=St,z[j]=tt,mt=j);else if(Rt<bt&&0>l(zt,tt))z[mt]=zt,z[Rt]=tt,mt=Rt;else break t}}return V}function l(z,V){var tt=z.sortIndex-V.sortIndex;return tt!==0?tt:z.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,S=!1,T=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var V=i(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=z)s(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=i(p)}}function P(z){if(w=!1,C(z),!T)if(i(m)!==null)T=!0,U||(U=!0,X());else{var V=i(p);V!==null&&K(P,V.startTime-z)}}var U=!1,I=-1,E=5,D=-1;function F(){return M?!0:!(r.unstable_now()-D<E)}function H(){if(M=!1,U){var z=r.unstable_now();D=z;var V=!0;try{t:{T=!1,w&&(w=!1,O(I),I=-1),S=!0;var tt=g;try{e:{for(C(z),v=i(m);v!==null&&!(v.expirationTime>z&&F());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var bt=mt(v.expirationTime<=z);if(z=r.unstable_now(),typeof bt=="function"){v.callback=bt,C(z),V=!0;break e}v===i(m)&&s(m),C(z)}else s(m);v=i(m)}if(v!==null)V=!0;else{var N=i(p);N!==null&&K(P,N.startTime-z),V=!1}}break t}finally{v=null,g=tt,S=!1}V=void 0}}finally{V?X():U=!1}}}var X;if(typeof B=="function")X=function(){B(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=H,X=function(){ct.postMessage(null)}}else X=function(){x(H,0)};function K(z,V){I=x(function(){z(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var tt=g;g=V;try{return z()}finally{g=tt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=g;g=z;try{return V()}finally{g=tt}},r.unstable_scheduleCallback=function(z,V,tt){var mt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?mt+tt:mt):tt=mt,z){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=tt+bt,z={id:_++,callback:V,priorityLevel:z,startTime:tt,expirationTime:bt,sortIndex:-1},tt>mt?(z.sortIndex=tt,t(p,z),i(m)===null&&z===i(p)&&(w?(O(I),I=-1):w=!0,K(P,tt-mt))):(z.sortIndex=bt,t(m,z),T||S||(T=!0,U||(U=!0,X()))),z},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(z){var V=g;return function(){var tt=g;g=V;try{return z.apply(this,arguments)}finally{g=tt}}}})(Lh)),Lh}var E_;function NS(){return E_||(E_=1,Uh.exports=LS()),Uh.exports}var Nh={exports:{}},Xn={};var T_;function OS(){if(T_)return Xn;T_=1;var r=pp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Xn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Xn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Xn.requestFormReset=function(m){s.d.r(m)},Xn.unstable_batchedUpdates=function(m,p){return m(p)},Xn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Xn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xn.version="19.2.8",Xn}var A_;function PS(){if(A_)return Nh.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Nh.exports=OS(),Nh.exports}var R_;function IS(){if(R_)return Zo;R_=1;var r=NS(),t=pp(),i=PS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=h;break}if(R===o){y=!0,o=u,a=h;break}R=R.sibling}if(!y){for(R=h.child;R;){if(R===a){y=!0,a=h,o=u;break}if(R===o){y=!0,o=h,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case B:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var K=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},mt=[],bt=-1;function N(e){return{current:e}}function j(e){0>bt||(e.current=mt[bt],mt[bt]=null,bt--)}function St(e,n){bt++,mt[bt]=e.current,e.current=n}var Rt=N(null),zt=N(null),st=N(null),vt=N(null);function Et(e,n){switch(St(st,n),St(zt,e),St(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?V0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=V0(n),e=k0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Rt),St(Rt,e)}function Ht(){j(Rt),j(zt),j(st)}function ae(e){e.memoizedState!==null&&St(vt,e);var n=Rt.current,a=k0(n,e.type);n!==a&&(St(zt,e),St(Rt,a))}function te(e){zt.current===e&&(j(Rt),j(zt)),vt.current===e&&(j(vt),ko._currentValue=tt)}var Re,ge;function ue(e){if(Re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Re=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+e+ge}var xe=!1;function ee(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){lt=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],R=h[1];if(y&&R){var G=y.split(`
`),nt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===nt.length)for(o=G.length-1,u=nt.length-1;1<=o&&0<=u&&G[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==nt[u]){var _t=`
`+G[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ue(a):""}function cn(e,n){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue("Lazy");case 13:return e.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return ue("Activity");default:return""}}function an(e){try{var n="",a=null;do n+=cn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var sn=Object.prototype.hasOwnProperty,dn=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,rn=r.unstable_shouldYield,Y=r.unstable_requestPaint,Ie=r.unstable_now,Ce=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,rt=r.unstable_LowPriority,ht=r.unstable_IdlePriority,At=r.log,Ut=r.unstable_setDisableYieldValue,ft=null,dt=null;function Ct(e){if(typeof At=="function"&&Ut(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,e)}catch{}}var Bt=Math.clz32?Math.clz32:Qt,Nt=Math.log,Lt=Math.LN2;function Qt(e){return e>>>=0,e===0?32:31-(Nt(e)/Lt|0)|0}var Jt=256,se=262144,q=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Tt(o):(y&=R,y!==0?u=Tt(y):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~h,R!==0?u=Tt(R):y!==0?u=Tt(y):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function Yt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tn(e,n,a,o,u,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=y&~a;0<a;){var _t=31-Bt(a),xt=1<<_t;R[_t]=0,G[_t]=-1;var lt=nt[_t];if(lt!==null)for(nt[_t]=null,_t=0;_t<lt.length;_t++){var ut=lt[_t];ut!==null&&(ut.lane&=-536870913)}a&=~xt}o!==0&&wt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function wt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function qt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function le(e,n){var a=n&-n;return a=(a&42)!==0?1:fe(a),(a&(e.suspendedLanes|n))!==0?0:a}function fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zn(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:h_(e.type))}function Mi(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Vn=Math.random().toString(36).slice(2),pn="__reactFiber$"+Vn,Le="__reactProps$"+Vn,Nn="__reactContainer$"+Vn,Li="__reactEvents$"+Vn,pl="__reactListeners$"+Vn,ml="__reactHandles$"+Vn,bs="__reactResources$"+Vn,za="__reactMarker$"+Vn;function Ba(e){delete e[pn],delete e[Le],delete e[Li],delete e[pl],delete e[ml]}function sa(e){var n=e[pn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=j0(e);e!==null;){if(a=e[pn])return a;e=j0(e)}return n}e=a,a=e.parentNode}return null}function ra(e){if(e=e[pn]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Es(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Fa(e){var n=e[bs];return n||(n=e[bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xn(e){e[za]=!0}var gl=new Set,A={};function Z(e,n){ot(e,n),ot(e+"Capture",n)}function ot(e,n){for(A[e]=n,e=0;e<n.length;e++)gl.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},It={};function Xt(e){return sn.call(It,e)?!0:sn.call(at,e)?!1:it.test(e)?It[e]=!0:(at[e]=!0,!1)}function Ot(e,n,a){if(Xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){if(!e._valueTracker){var n=pe(e)?"checked":"value";e._valueTracker=$t(e,n,""+e[n])}}function un(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=pe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function en(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ge=/[\n"\\]/g;function Ve(e){return e.replace(Ge,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,o,u,h,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Me(e,y,ne(n)):a!=null?Me(e,y,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ne(R):e.removeAttribute("name")}function kn(e,n,a,o,u,h,y,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ne(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ne(e)}function Me(e,n,a){n==="number"&&en(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function An(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function oi(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Ni(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ne(e)}function li(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ke=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ke.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Oi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&fn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&fn(e,h,n[h])}function He(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ts(e){return Ha.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Eu=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,er=null;function Gp(e){var n=ra(e);if(n&&(e=n.stateNode)){var a=e[Le]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Le]||null;if(!u)throw Error(s(90));Gt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&un(o)}break t;case"textarea":oi(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&An(e,!!a.multiple,n,!1)}}}var Au=!1;function Vp(e,n,a){if(Au)return e(n,a);Au=!0;try{var o=e(n);return o}finally{if(Au=!1,(tr!==null||er!==null)&&(ic(),tr&&(n=tr,e=er,er=tr=null,Gp(n),e)))for(n=0;n<e.length;n++)Gp(e[n])}}function so(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Le]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(la)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Ru=!1}var Ga=null,Cu=null,_l=null;function kp(){if(_l)return _l;var e,n=Cu,a=n.length,o,u="value"in Ga?Ga.value:Ga.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Xp(){return!1}function $n(e){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?yl:Xp,this.isPropagationStopped=Xp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=$n(As),oo=v({},As,{view:0,detail:0}),Ry=$n(oo),wu,Du,lo,Sl=v({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(wu=e.screenX-lo.screenX,Du=e.screenY-lo.screenY):Du=wu=0,lo=e),wu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),Wp=$n(Sl),Cy=v({},Sl,{dataTransfer:0}),wy=$n(Cy),Dy=v({},oo,{relatedTarget:0}),Uu=$n(Dy),Uy=v({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=$n(Uy),Ny=v({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oy=$n(Ny),Py=v({},As,{data:0}),qp=$n(Py),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=By[e])?!!n[e]:!1}function Lu(){return Fy}var Hy=v({},oo,{key:function(e){if(e.key){var n=Iy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gy=$n(Hy),Vy=v({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=$n(Vy),ky=v({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Xy=$n(ky),Wy=v({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=$n(Wy),Yy=v({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=$n(Yy),Ky=v({},As,{newState:0,oldState:0}),jy=$n(Ky),Qy=[9,13,27,32],Nu=la&&"CompositionEvent"in window,co=null;la&&"documentMode"in document&&(co=document.documentMode);var Jy=la&&"TextEvent"in window&&!co,Zp=la&&(!Nu||co&&8<co&&11>=co),Kp=" ",jp=!1;function Qp(e,n){switch(e){case"keyup":return Qy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function $y(e,n){switch(e){case"compositionend":return Jp(n);case"keypress":return n.which!==32?null:(jp=!0,Kp);case"textInput":return e=n.data,e===Kp&&jp?null:e;default:return null}}function tx(e,n){if(nr)return e==="compositionend"||!Nu&&Qp(e,n)?(e=kp(),_l=Cu=Ga=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zp&&n.locale!=="ko"?null:n.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ex[e.type]:n==="textarea"}function tm(e,n,a,o){tr?er?er.push(o):er=[o]:tr=o,n=uc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var uo=null,fo=null;function nx(e){I0(e,0)}function Ml(e){var n=Es(e);if(un(n))return e}function em(e,n){if(e==="change")return n}var nm=!1;if(la){var Ou;if(la){var Pu="oninput"in document;if(!Pu){var im=document.createElement("div");im.setAttribute("oninput","return;"),Pu=typeof im.oninput=="function"}Ou=Pu}else Ou=!1;nm=Ou&&(!document.documentMode||9<document.documentMode)}function am(){uo&&(uo.detachEvent("onpropertychange",sm),fo=uo=null)}function sm(e){if(e.propertyName==="value"&&Ml(fo)){var n=[];tm(n,fo,e,Tu(e)),Vp(nx,n)}}function ix(e,n,a){e==="focusin"?(am(),uo=n,fo=a,uo.attachEvent("onpropertychange",sm)):e==="focusout"&&am()}function ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(fo)}function sx(e,n){if(e==="click")return Ml(n)}function rx(e,n){if(e==="input"||e==="change")return Ml(n)}function ox(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:ox;function ho(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!sn.call(n,u)||!ci(e[u],n[u]))return!1}return!0}function rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function om(e,n){var a=rm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rm(a)}}function lm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=en(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=en(e.document)}return n}function Iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lx=la&&"documentMode"in document&&11>=document.documentMode,ir=null,zu=null,po=null,Bu=!1;function um(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||ir==null||ir!==en(o)||(o=ir,"selectionStart"in o&&Iu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=uc(zu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ir)))}function Rs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ar={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},Fu={},fm={};la&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Cs(e){if(Fu[e])return Fu[e];if(!ar[e])return e;var n=ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fm)return Fu[e]=n[a];return e}var hm=Cs("animationend"),dm=Cs("animationiteration"),pm=Cs("animationstart"),cx=Cs("transitionrun"),ux=Cs("transitionstart"),fx=Cs("transitioncancel"),mm=Cs("transitionend"),gm=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function Pi(e,n){gm.set(e,n),Z(n,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],sr=0,Gu=0;function El(){for(var e=sr,n=Gu=sr=0;n<e;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var h=bi[n];if(bi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&_m(a,u,h)}}function Tl(e,n,a,o){bi[sr++]=e,bi[sr++]=n,bi[sr++]=a,bi[sr++]=o,Gu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Vu(e,n,a,o){return Tl(e,n,a,o),Al(e)}function ws(e,n){return Tl(e,null,null,n),Al(e)}function _m(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Al(e){if(50<Io)throw Io=0,Jf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var rr={};function hx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,n,a,o){return new hx(e,n,a,o)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=ui(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,o,u,h){var y=0;if(o=e,typeof e=="function")ku(e)&&(y=1);else if(typeof e=="string")y=_S(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ui(31,a,n,u),e.elementType=D,e.lanes=h,e;case w:return Ds(a.children,u,h,n);case M:y=8,u|=24;break;case x:return e=ui(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case P:return e=ui(13,a,n,u),e.elementType=P,e.lanes=h,e;case U:return e=ui(19,a,n,u),e.elementType=U,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:y=10;break t;case O:y=9;break t;case C:y=11;break t;case I:y=14;break t;case E:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ui(y,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Ds(e,n,a,o){return e=ui(7,e,o,n),e.lanes=a,e}function Xu(e,n,a){return e=ui(6,e,null,n),e.lanes=a,e}function ym(e){var n=ui(18,null,null,0);return n.stateNode=e,n}function Wu(e,n,a){return n=ui(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xm=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=xm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:an(n)},xm.set(e,n),n)}return{value:e,source:n,stack:an(n)}}var or=[],lr=0,Cl=null,mo=0,Ti=[],Ai=0,Va=null,Yi=1,Zi="";function ua(e,n){or[lr++]=mo,or[lr++]=Cl,Cl=e,mo=n}function Sm(e,n,a){Ti[Ai++]=Yi,Ti[Ai++]=Zi,Ti[Ai++]=Va,Va=e;var o=Yi;e=Zi;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var h=32-Bt(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Yi=1<<32-Bt(n)+u|a<<u|o,Zi=h+e}else Yi=1<<h|a<<u|o,Zi=e}function qu(e){e.return!==null&&(ua(e,1),Sm(e,1,0))}function Yu(e){for(;e===Cl;)Cl=or[--lr],or[lr]=null,mo=or[--lr],or[lr]=null;for(;e===Va;)Va=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null,Yi=Ti[--Ai],Ti[Ai]=null}function Mm(e,n){Ti[Ai++]=Yi,Ti[Ai++]=Zi,Ti[Ai++]=Va,Yi=n.id,Zi=n.overflow,Va=e}var zn=null,on=null,we=!1,ka=null,Ri=!1,Zu=Error(s(519));function Xa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(Ei(n,e)),Zu}function bm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[pn]=e,n[Le]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)Ee(Bo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),kn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||H0(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||Xa(e,!0)}function Em(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:zn=zn.return}}function cr(e){if(e!==zn)return!1;if(!we)return Em(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dh(e.type,e.memoizedProps)),a=!a),a&&on&&Xa(e),Em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=K0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));on=K0(e)}else n===27?(n=on,as(e.type)?(e=vh,vh=null,on=e):on=n):on=zn?wi(e.stateNode.nextSibling):null;return!0}function Us(){on=zn=null,we=!1}function Ku(){var e=ka;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),ka=null),e}function go(e){ka===null?ka=[e]:ka.push(e)}var ju=N(null),Ls=null,fa=null;function Wa(e,n,a){St(ju,n._currentValue),n._currentValue=a}function ha(e){e._currentValue=ju.current,j(ju)}function Qu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ju(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Qu(h.return,a,e),o||(y=null);break t}h=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Qu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ur(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ci(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===vt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}u=u.return}e!==null&&Ju(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Ls=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return Tm(Ls,e)}function Dl(e,n){return Ls===null&&Ns(e),Tm(e,n)}function Tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(s(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},px=r.unstable_scheduleCallback,mx=r.unstable_NormalPriority,Sn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $u(){return{controller:new dx,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&px(mx,function(){e.controller.abort()})}var vo=null,tf=0,fr=0,hr=null;function gx(e,n){if(vo===null){var a=vo=[];tf=0,fr=ah(),hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return tf++,n.then(Am,Am),n}function Am(){if(--tf===0&&vo!==null){hr!==null&&(hr.status="fulfilled");var e=vo;vo=null,fr=0,hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _x(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rm=z.S;z.S=function(e,n){u0=Ie(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(e,n),Rm!==null&&Rm(e,n)};var Os=N(null);function ef(){var e=Os.current;return e!==null?e:nn.pooledCache}function Ul(e,n){n===null?St(Os,Os.current):St(Os,n.pool)}function Cm(){var e=ef();return e===null?null:{parent:Sn._currentValue,pool:e}}var dr=Error(s(460)),nf=Error(s(474)),Ll=Error(s(542)),Nl={then:function(){}};function wm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lm(e),e;default:if(typeof n.status=="string")n.then(oa,oa);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lm(e),e}throw Is=n,dr}}function Ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Is=a,dr):a}}var Is=null;function Um(){if(Is===null)throw Error(s(459));var e=Is;return Is=null,e}function Lm(e){if(e===dr||e===Ll)throw Error(s(483))}var pr=null,yo=0;function Ol(e){var n=yo;return yo+=1,pr===null&&(pr=[]),Dm(pr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Nm(e){function n(Q,W){if(e){var et=Q.deletions;et===null?(Q.deletions=[W],Q.flags|=16):et.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=ca(Q,W),Q.index=0,Q.sibling=null,Q}function h(Q,W,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<W?(Q.flags|=67108866,W):et):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,et,yt){return W===null||W.tag!==6?(W=Xu(et,Q.mode,yt),W.return=Q,W):(W=u(W,et),W.return=Q,W)}function G(Q,W,et,yt){var ie=et.type;return ie===w?_t(Q,W,et.props.children,yt,et.key):W!==null&&(W.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Ps(ie)===W.type)?(W=u(W,et.props),xo(W,et),W.return=Q,W):(W=Rl(et.type,et.key,et.props,null,Q.mode,yt),xo(W,et),W.return=Q,W)}function nt(Q,W,et,yt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=Wu(et,Q.mode,yt),W.return=Q,W):(W=u(W,et.children||[]),W.return=Q,W)}function _t(Q,W,et,yt,ie){return W===null||W.tag!==7?(W=Ds(et,Q.mode,yt,ie),W.return=Q,W):(W=u(W,et),W.return=Q,W)}function xt(Q,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Xu(""+W,Q.mode,et),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return et=Rl(W.type,W.key,W.props,null,Q.mode,et),xo(et,W),et.return=Q,et;case T:return W=Wu(W,Q.mode,et),W.return=Q,W;case E:return W=Ps(W),xt(Q,W,et)}if(K(W)||X(W))return W=Ds(W,Q.mode,et,null),W.return=Q,W;if(typeof W.then=="function")return xt(Q,Ol(W),et);if(W.$$typeof===B)return xt(Q,Dl(Q,W),et);Pl(Q,W)}return null}function lt(Q,W,et,yt){var ie=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ie!==null?null:R(Q,W,""+et,yt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===ie?G(Q,W,et,yt):null;case T:return et.key===ie?nt(Q,W,et,yt):null;case E:return et=Ps(et),lt(Q,W,et,yt)}if(K(et)||X(et))return ie!==null?null:_t(Q,W,et,yt,null);if(typeof et.then=="function")return lt(Q,W,Ol(et),yt);if(et.$$typeof===B)return lt(Q,W,Dl(Q,et),yt);Pl(Q,et)}return null}function ut(Q,W,et,yt,ie){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return Q=Q.get(et)||null,R(W,Q,""+yt,ie);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case S:return Q=Q.get(yt.key===null?et:yt.key)||null,G(W,Q,yt,ie);case T:return Q=Q.get(yt.key===null?et:yt.key)||null,nt(W,Q,yt,ie);case E:return yt=Ps(yt),ut(Q,W,et,yt,ie)}if(K(yt)||X(yt))return Q=Q.get(et)||null,_t(W,Q,yt,ie,null);if(typeof yt.then=="function")return ut(Q,W,et,Ol(yt),ie);if(yt.$$typeof===B)return ut(Q,W,et,Dl(W,yt),ie);Pl(W,yt)}return null}function Kt(Q,W,et,yt){for(var ie=null,Oe=null,jt=W,_e=W=0,Ae=null;jt!==null&&_e<et.length;_e++){jt.index>_e?(Ae=jt,jt=null):Ae=jt.sibling;var Pe=lt(Q,jt,et[_e],yt);if(Pe===null){jt===null&&(jt=Ae);break}e&&jt&&Pe.alternate===null&&n(Q,jt),W=h(Pe,W,_e),Oe===null?ie=Pe:Oe.sibling=Pe,Oe=Pe,jt=Ae}if(_e===et.length)return a(Q,jt),we&&ua(Q,_e),ie;if(jt===null){for(;_e<et.length;_e++)jt=xt(Q,et[_e],yt),jt!==null&&(W=h(jt,W,_e),Oe===null?ie=jt:Oe.sibling=jt,Oe=jt);return we&&ua(Q,_e),ie}for(jt=o(jt);_e<et.length;_e++)Ae=ut(jt,Q,_e,et[_e],yt),Ae!==null&&(e&&Ae.alternate!==null&&jt.delete(Ae.key===null?_e:Ae.key),W=h(Ae,W,_e),Oe===null?ie=Ae:Oe.sibling=Ae,Oe=Ae);return e&&jt.forEach(function(cs){return n(Q,cs)}),we&&ua(Q,_e),ie}function re(Q,W,et,yt){if(et==null)throw Error(s(151));for(var ie=null,Oe=null,jt=W,_e=W=0,Ae=null,Pe=et.next();jt!==null&&!Pe.done;_e++,Pe=et.next()){jt.index>_e?(Ae=jt,jt=null):Ae=jt.sibling;var cs=lt(Q,jt,Pe.value,yt);if(cs===null){jt===null&&(jt=Ae);break}e&&jt&&cs.alternate===null&&n(Q,jt),W=h(cs,W,_e),Oe===null?ie=cs:Oe.sibling=cs,Oe=cs,jt=Ae}if(Pe.done)return a(Q,jt),we&&ua(Q,_e),ie;if(jt===null){for(;!Pe.done;_e++,Pe=et.next())Pe=xt(Q,Pe.value,yt),Pe!==null&&(W=h(Pe,W,_e),Oe===null?ie=Pe:Oe.sibling=Pe,Oe=Pe);return we&&ua(Q,_e),ie}for(jt=o(jt);!Pe.done;_e++,Pe=et.next())Pe=ut(jt,Q,_e,Pe.value,yt),Pe!==null&&(e&&Pe.alternate!==null&&jt.delete(Pe.key===null?_e:Pe.key),W=h(Pe,W,_e),Oe===null?ie=Pe:Oe.sibling=Pe,Oe=Pe);return e&&jt.forEach(function(CS){return n(Q,CS)}),we&&ua(Q,_e),ie}function je(Q,W,et,yt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var ie=et.key;W!==null;){if(W.key===ie){if(ie=et.type,ie===w){if(W.tag===7){a(Q,W.sibling),yt=u(W,et.props.children),yt.return=Q,Q=yt;break t}}else if(W.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Ps(ie)===W.type){a(Q,W.sibling),yt=u(W,et.props),xo(yt,et),yt.return=Q,Q=yt;break t}a(Q,W);break}else n(Q,W);W=W.sibling}et.type===w?(yt=Ds(et.props.children,Q.mode,yt,et.key),yt.return=Q,Q=yt):(yt=Rl(et.type,et.key,et.props,null,Q.mode,yt),xo(yt,et),yt.return=Q,Q=yt)}return y(Q);case T:t:{for(ie=et.key;W!==null;){if(W.key===ie)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(Q,W.sibling),yt=u(W,et.children||[]),yt.return=Q,Q=yt;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}yt=Wu(et,Q.mode,yt),yt.return=Q,Q=yt}return y(Q);case E:return et=Ps(et),je(Q,W,et,yt)}if(K(et))return Kt(Q,W,et,yt);if(X(et)){if(ie=X(et),typeof ie!="function")throw Error(s(150));return et=ie.call(et),re(Q,W,et,yt)}if(typeof et.then=="function")return je(Q,W,Ol(et),yt);if(et.$$typeof===B)return je(Q,W,Dl(Q,et),yt);Pl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(Q,W.sibling),yt=u(W,et),yt.return=Q,Q=yt):(a(Q,W),yt=Xu(et,Q.mode,yt),yt.return=Q,Q=yt),y(Q)):a(Q,W)}return function(Q,W,et,yt){try{yo=0;var ie=je(Q,W,et,yt);return pr=null,ie}catch(jt){if(jt===dr||jt===Ll)throw jt;var Oe=ui(29,jt,null,Q.mode);return Oe.lanes=yt,Oe.return=Q,Oe}}}var zs=Nm(!0),Om=Nm(!1),qa=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(e),_m(e,null,a),n}return Tl(e,o,n,a),Al(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,qt(e,a)}}function rf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var of=!1;function Mo(){if(of){var e=hr;if(e!==null)throw e}}function bo(e,n,a,o){of=!1;var u=e.updateQueue;qa=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,nt=G.next;G.next=null,y===null?h=nt:y.next=nt,y=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,R=_t.lastBaseUpdate,R!==y&&(R===null?_t.firstBaseUpdate=nt:R.next=nt,_t.lastBaseUpdate=G))}if(h!==null){var xt=u.baseState;y=0,_t=nt=G=null,R=h;do{var lt=R.lane&-536870913,ut=lt!==R.lane;if(ut?(Te&lt)===lt:(o&lt)===lt){lt!==0&&lt===fr&&(of=!0),_t!==null&&(_t=_t.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Kt=e,re=R;lt=n;var je=a;switch(re.tag){case 1:if(Kt=re.payload,typeof Kt=="function"){xt=Kt.call(je,xt,lt);break t}xt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=re.payload,lt=typeof Kt=="function"?Kt.call(je,xt,lt):Kt,lt==null)break t;xt=v({},xt,lt);break t;case 2:qa=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_t===null?(nt=_t=ut,G=xt):_t=_t.next=ut,y|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);_t===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=_t,h===null&&(u.shared.lanes=0),$a|=y,e.lanes=y,e.memoizedState=xt}}function Pm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Im(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pm(a[e],n)}var mr=N(null),Il=N(0);function zm(e,n){e=Sa,St(Il,e),St(mr,n),Sa=e|n.baseLanes}function lf(){St(Il,Sa),St(mr,mr.current)}function cf(){Sa=Il.current,j(mr),j(Il)}var fi=N(null),Ci=null;function Ka(e){var n=e.alternate;St(vn,vn.current&1),St(fi,e),Ci===null&&(n===null||mr.current!==null||n.memoizedState!==null)&&(Ci=e)}function uf(e){St(vn,vn.current),St(fi,e),Ci===null&&(Ci=e)}function Bm(e){e.tag===22?(St(vn,vn.current),St(fi,e),Ci===null&&(Ci=e)):ja()}function ja(){St(vn,vn.current),St(fi,fi.current)}function hi(e){j(fi),Ci===e&&(Ci=null),j(vn)}var vn=N(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gh(a)||_h(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,me=null,Ze=null,Mn=null,Bl=!1,gr=!1,Bs=!1,Fl=0,Eo=0,_r=null,vx=0;function gn(){throw Error(s(321))}function ff(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function hf(e,n,a,o,u,h){return da=h,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Sg:Rf,Bs=!1,h=a(o,u),Bs=!1,gr&&(h=Hm(n,a,o,u)),Fm(e),h}function Fm(e){z.H=Ro;var n=Ze!==null&&Ze.next!==null;if(da=0,Mn=Ze=me=null,Bl=!1,Eo=0,_r=null,n)throw Error(s(300));e===null||bn||(e=e.dependencies,e!==null&&wl(e)&&(bn=!0))}function Hm(e,n,a,o){me=e;var u=0;do{if(gr&&(_r=null),Eo=0,gr=!1,25<=u)throw Error(s(301));if(u+=1,Mn=Ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=Mg,h=n(a,o)}while(gr);return h}function yx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?To(n):n,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(me.flags|=1024),n}function df(){var e=Fl!==0;return Fl=0,e}function pf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function mf(e){if(Bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bl=!1}da=0,Mn=Ze=me=null,gr=!1,Eo=Fl=0,_r=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?me.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function yn(){if(Ze===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=Mn===null?me.memoizedState:Mn.next;if(n!==null)Mn=n,Ze=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Mn===null?me.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var n=Eo;return Eo+=1,_r===null&&(_r=[]),e=Dm(_r,e,n),n=me,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Sg:Rf),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===B)return Bn(e)}throw Error(s(438,String(e)))}function gf(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=F;return n.index++,a}function pa(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=yn();return _f(n,Ze,e)}function _f(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=y=null,G=null,nt=n,_t=!1;do{var xt=nt.lane&-536870913;if(xt!==nt.lane?(Te&xt)===xt:(da&xt)===xt){var lt=nt.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),xt===fr&&(_t=!0);else if((da&lt)===lt){nt=nt.next,lt===fr&&(_t=!0);continue}else xt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=xt,y=h):G=G.next=xt,me.lanes|=lt,$a|=lt;xt=nt.action,Bs&&a(h,xt),h=nt.hasEagerState?nt.eagerState:a(h,xt)}else lt={lane:xt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=lt,y=h):G=G.next=lt,me.lanes|=xt,$a|=xt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?y=h:G.next=R,!ci(h,e.memoizedState)&&(bn=!0,_t&&(a=hr,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function vf(e){var n=yn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);ci(h,n.memoizedState)||(bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Gm(e,n,a){var o=me,u=yn(),h=we;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ci((Ze||u).memoizedState,a);if(y&&(u.memoizedState=a,bn=!0),u=u.queue,Sf(Xm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,vr(9,{destroy:void 0},km.bind(null,o,u,a,n),null),nn===null)throw Error(s(349));h||(da&127)!==0||Vm(o,n,a)}return a}function Vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Hl(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function km(e,n,a,o){n.value=a,n.getSnapshot=o,Wm(n)&&qm(e)}function Xm(e,n,a){return a(function(){Wm(n)&&qm(e)})}function Wm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function qm(e){var n=ws(e,2);n!==null&&ai(n,e,2)}function yf(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Bs){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function Ym(e,n,a,o){return e.baseState=a,_f(e,Ze,typeof o=="function"?o:pa)}function xx(e,n,a,o,u){if(Wl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Zm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Zm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=z.T,y={};z.T=y;try{var R=a(u,o),G=z.S;G!==null&&G(y,R),Km(e,n,R)}catch(nt){xf(e,n,nt)}finally{h!==null&&y.types!==null&&(h.types=y.types),z.T=h}}else try{h=a(u,o),Km(e,n,h)}catch(nt){xf(e,n,nt)}}function Km(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jm(e,n,o)},function(o){return xf(e,n,o)}):jm(e,n,a)}function jm(e,n,a){n.status="fulfilled",n.value=a,Qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qm(n),n=n.next;while(n!==o)}e.action=null}function Qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jm(e,n){return n}function $m(e,n){if(we){var a=nn.formState;if(a!==null){t:{var o=me;if(we){if(on){e:{for(var u=on,h=Ri;u.nodeType!==8;){if(!h){u=null;break e}if(u=wi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){on=wi(u.nextSibling),o=u.data==="F!";break t}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:n},a.queue=o,a=vg.bind(null,me,o),o.dispatch=a,o=yf(!1),h=Af.bind(null,me,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=xx.bind(null,me,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function tg(e){var n=yn();return eg(n,Ze,e)}function eg(e,n,a){if(n=_f(e,n,Jm)[0],e=Vl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(y){throw y===dr?Ll:y}else o=n;n=yn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,vr(9,{destroy:void 0},Sx.bind(null,u,a),null)),[o,h,e]}function Sx(e,n){e.action=n}function ng(e){var n=yn(),a=Ze;if(a!==null)return eg(n,a,e);yn(),n=n.memoizedState,a=yn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function vr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=Hl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function ig(){return yn().memoizedState}function kl(e,n,a,o){var u=Kn();me.flags|=e,u.memoizedState=vr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var u=yn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ze!==null&&o!==null&&ff(o,Ze.memoizedState.deps)?u.memoizedState=vr(n,h,a,o):(me.flags|=e,u.memoizedState=vr(1|n,h,a,o))}function ag(e,n){kl(8390656,8,e,n)}function Sf(e,n){Xl(2048,8,e,n)}function Mx(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=Hl(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function sg(e){var n=yn().memoizedState;return Mx({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function rg(e,n){return Xl(4,2,e,n)}function og(e,n){return Xl(4,4,e,n)}function lg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cg(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,lg.bind(null,n,e),a)}function Mf(){}function ug(e,n){var a=yn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ff(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function fg(e,n){var a=yn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ff(n,o[1]))return o[0];if(o=e(),Bs){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o}function bf(e,n,a){return a===void 0||(da&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=h0(),me.lanes|=e,$a|=e,a)}function hg(e,n,a,o){return ci(a,n)?a:mr.current!==null?(e=bf(e,a,o),ci(e,n)||(bn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Te&261930)===0?(bn=!0,e.memoizedState=a):(e=h0(),me.lanes|=e,$a|=e,n)}function dg(e,n,a,o,u){var h=V.p;V.p=h!==0&&8>h?h:8;var y=z.T,R={};z.T=R,Af(e,!1,n,a);try{var G=u(),nt=z.S;if(nt!==null&&nt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=_x(G,o);Ao(e,n,_t,mi(e))}else Ao(e,n,o,mi(e))}catch(xt){Ao(e,n,{then:function(){},status:"rejected",reason:xt},mi())}finally{V.p=h,y!==null&&R.types!==null&&(y.types=R.types),z.T=y}}function bx(){}function Ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=pg(e).queue;dg(e,u,n,tt,a===null?bx:function(){return mg(e),a(o)})}function pg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mg(e){var n=pg(e);n.next===null&&(n=e.alternate.memoizedState),Ao(e,n.next.queue,{},mi())}function Tf(){return Bn(ko)}function gg(){return yn().memoizedState}function _g(){return yn().memoizedState}function Ex(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=Ya(a);var o=Za(n,e,a);o!==null&&(ai(o,n,a),So(o,n,a)),n={cache:$u()},e.payload=n;return}n=n.return}}function Tx(e,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?yg(n,a):(a=Vu(e,n,a,o),a!==null&&(ai(a,e,o),xg(a,n,o)))}function vg(e,n,a){var o=mi();Ao(e,n,a,o)}function Ao(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))yg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,R=h(y,a);if(u.hasEagerState=!0,u.eagerState=R,ci(R,y))return Tl(e,n,u,0),nn===null&&El(),!1}catch{}if(a=Vu(e,n,u,o),a!==null)return ai(a,e,o),xg(a,n,o),!0}return!1}function Af(e,n,a,o){if(o={lane:2,revertLane:ah(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(n)throw Error(s(479))}else n=Vu(e,a,o,2),n!==null&&ai(n,e,2)}function Wl(e){var n=e.alternate;return e===me||n!==null&&n===me}function yg(e,n){gr=Bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,qt(e,a)}}var Ro={readContext:Bn,use:Gl,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};Ro.useEffectEvent=gn;var Sg={readContext:Bn,use:Gl,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Bn,useEffect:ag,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,lg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(Bs){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Bs){Ct(!0);try{a(n)}finally{Ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Tx.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=yf(e);var n=e.queue,a=vg.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Mf,useDeferredValue:function(e,n){var a=Kn();return bf(a,e,n)},useTransition:function(){var e=yf(!1);return e=dg.bind(null,me,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=me,u=Kn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),nn===null)throw Error(s(349));(Te&127)!==0||Vm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,ag(Xm.bind(null,o,h,e),[e]),o.flags|=2048,vr(9,{destroy:void 0},km.bind(null,o,h,a,n),null),a},useId:function(){var e=Kn(),n=nn.identifierPrefix;if(we){var a=Zi,o=Yi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Tf,useFormState:$m,useActionState:$m,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Af.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:gf,useCacheRefresh:function(){return Kn().memoizedState=Ex.bind(null,me)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Rf={readContext:Bn,use:Gl,useCallback:ug,useContext:Bn,useEffect:Sf,useImperativeHandle:cg,useInsertionEffect:rg,useLayoutEffect:og,useMemo:fg,useReducer:Vl,useRef:ig,useState:function(){return Vl(pa)},useDebugValue:Mf,useDeferredValue:function(e,n){var a=yn();return hg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=Vl(pa)[0],n=yn().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:Tf,useFormState:tg,useActionState:tg,useOptimistic:function(e,n){var a=yn();return Ym(a,Ze,e,n)},useMemoCache:gf,useCacheRefresh:_g};Rf.useEffectEvent=sg;var Mg={readContext:Bn,use:Gl,useCallback:ug,useContext:Bn,useEffect:Sf,useImperativeHandle:cg,useInsertionEffect:rg,useLayoutEffect:og,useMemo:fg,useReducer:vf,useRef:ig,useState:function(){return vf(pa)},useDebugValue:Mf,useDeferredValue:function(e,n){var a=yn();return Ze===null?bf(a,e,n):hg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=vf(pa)[0],n=yn().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:Tf,useFormState:ng,useActionState:ng,useOptimistic:function(e,n){var a=yn();return Ze!==null?Ym(a,Ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:gf,useCacheRefresh:_g};Mg.useEffectEvent=sg;function Cf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Ya(o);u.payload=n,a!=null&&(u.callback=a),n=Za(e,u,o),n!==null&&(ai(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(e,u,o),n!==null&&(ai(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=Ya(a);o.tag=2,n!=null&&(o.callback=n),n=Za(e,o,a),n!==null&&(ai(n,e,a),So(n,e,a))}};function bg(e,n,a,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,h):!0}function Eg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&wf.enqueueReplaceState(n,n.state,null)}function Fs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Tg(e){bl(e)}function Ag(e){console.error(e)}function Rg(e){bl(e)}function ql(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Cg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Df(e,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,n)},a}function wg(e){return e=Ya(e),e.tag=3,e}function Dg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Cg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Cg(n,a,o),typeof u!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ax(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ur(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 31:case 13:return Ci===null?ac():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),eh(e,o,u)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),eh(e,o,u)),!1}throw Error(s(435,a.tag))}return eh(e,o,u),ac(),!1}if(we)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Zu&&(e=Error(s(422),{cause:o}),go(Ei(e,a)))):(o!==Zu&&(n=Error(s(423),{cause:o}),go(Ei(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ei(o,a),u=Df(e.stateNode,o,u),rf(e,u),_n!==4&&(_n=2)),!1;var h=Error(s(520),{cause:o});if(h=Ei(h,a),Po===null?Po=[h]:Po.push(h),_n!==4&&(_n=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Df(a.stateNode,o,e),rf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ts===null||!ts.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=wg(u),Dg(u,e,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Uf=Error(s(461)),bn=!1;function Fn(e,n,a,o){n.child=e===null?Om(n,null,a,o):zs(n,e.child,a,o)}function Ug(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Ns(n),o=hf(e,n,a,y,h,u),R=df(),e!==null&&!bn?(pf(e,n,u),ma(e,n,u)):(we&&R&&qu(n),n.flags|=1,Fn(e,n,o,u),n.child)}function Lg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!ku(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Ng(e,n,h,o,u)):(e=Rl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Ff(e,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(y,o)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(h,o),e.ref=n.ref,e.return=n,n.child=e}function Ng(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(ho(h,o)&&e.ref===n.ref)if(bn=!1,n.pendingProps=o=h,Ff(e,u))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,ma(e,n,u)}return Lf(e,n,a,o,u)}function Og(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Pg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,h!==null?h.cachePool:null),h!==null?zm(n,h):lf(),Bm(n);else return o=n.lanes=536870912,Pg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ul(n,h.cachePool),zm(n,h),ja(),n.memoizedState=null):(e!==null&&Ul(n,null),lf(),ja());return Fn(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pg(e,n,a,o,u){var h=ef();return h=h===null?null:{parent:Sn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ul(n,null),lf(),Bm(n),e!==null&&ur(e,n,o,!0),n.childLanes=u,null}function Yl(e,n){return n=Kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ig(e,n,a){return zs(n,e.child,null,a),e=Yl(n,n.pendingProps),e.flags|=2,hi(n),n.memoizedState=null,e}function Rx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=Yl(n,o),n.lanes=536870912,Co(null,e);if(uf(n),(e=on)?(e=Z0(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=ym(e),a.return=n,n.child=a,zn=n,on=null)):e=null,e===null)throw Xa(n);return n.lanes=536870912,null}return Yl(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(uf(n),u)if(n.flags&256)n.flags&=-257,n=Ig(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(bn||ur(e,n,a,!1),u=(a&e.childLanes)!==0,bn||u){if(o=nn,o!==null&&(y=le(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,ws(e,y),ai(o,e,y),Uf;ac(),n=Ig(e,n,a)}else e=h.treeContext,on=wi(y.nextSibling),zn=n,we=!0,ka=null,Ri=!1,e!==null&&Mm(n,e),n=Yl(n,o),n.flags|=4096;return n}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Lf(e,n,a,o,u){return Ns(n),a=hf(e,n,a,o,void 0,u),o=df(),e!==null&&!bn?(pf(e,n,u),ma(e,n,u)):(we&&o&&qu(n),n.flags|=1,Fn(e,n,a,u),n.child)}function zg(e,n,a,o,u,h){return Ns(n),n.updateQueue=null,a=Hm(n,o,a,u),Fm(e),o=df(),e!==null&&!bn?(pf(e,n,h),ma(e,n,h)):(we&&o&&qu(n),n.flags|=1,Fn(e,n,a,h),n.child)}function Bg(e,n,a,o,u){if(Ns(n),n.stateNode===null){var h=rr,y=a.contextType;typeof y=="object"&&y!==null&&(h=Bn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},af(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Bn(y):rr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Cf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&wf.enqueueReplaceState(h,h.state,null),bo(n,o,h,u),Mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,G=Fs(a,R);h.props=G;var nt=h.context,_t=a.contextType;y=rr,typeof _t=="object"&&_t!==null&&(y=Bn(_t));var xt=a.getDerivedStateFromProps;_t=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_t||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||nt!==y)&&Eg(n,h,o,y),qa=!1;var lt=n.memoizedState;h.state=lt,bo(n,o,h,u),Mo(),nt=n.memoizedState,R||lt!==nt||qa?(typeof xt=="function"&&(Cf(n,a,xt,o),nt=n.memoizedState),(G=qa||bg(n,a,G,o,lt,nt,y))?(_t||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=y,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,sf(e,n),y=n.memoizedProps,_t=Fs(a,y),h.props=_t,xt=n.pendingProps,lt=h.context,nt=a.contextType,G=rr,typeof nt=="object"&&nt!==null&&(G=Bn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xt||lt!==G)&&Eg(n,h,o,G),qa=!1,lt=n.memoizedState,h.state=lt,bo(n,o,h,u),Mo();var ut=n.memoizedState;y!==xt||lt!==ut||qa||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof R=="function"&&(Cf(n,a,R,o),ut=n.memoizedState),(_t=qa||bg(n,a,_t,o,lt,ut,G)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=G,o=_t):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Zl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=zs(n,e.child,null,u),n.child=zs(n,null,a,u)):Fn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ma(e,n,u),e}function Fg(e,n,a,o){return Us(),n.flags|=256,Fn(e,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Of(e){return{baseLanes:e,cachePool:Cm()}}function Pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function Hg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ka(n):ja(),(e=on)?(e=Z0(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=ym(e),a.return=n,n.child=a,zn=n,on=null)):e=null,e===null)throw Xa(n);return _h(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ja(),u=n.mode,R=Kl({mode:"hidden",children:R},u),o=Ds(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(e,y,a),n.memoizedState=Nf,Co(null,o)):(Ka(n),If(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(Ka(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(ja(),n.child=e.child,n.flags|=128,n=null):(ja(),R=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),R=Ds(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,zs(n,e.child,null,a),o=n.child,o.memoizedState=Of(a),o.childLanes=Pf(e,y,a),n.memoizedState=Nf,n=Co(null,o));else if(Ka(n),_h(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var nt=y.dgst;y=nt,o=Error(s(419)),o.stack="",o.digest=y,go({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(bn||ur(e,n,a,!1),y=(a&e.childLanes)!==0,bn||y){if(y=nn,y!==null&&(o=le(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ws(e,o),ai(y,e,o),Uf;gh(R)||ac(),n=zf(e,n,a)}else gh(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,on=wi(R.nextSibling),zn=n,we=!0,ka=null,Ri=!1,e!==null&&Mm(n,e),n=If(n,o.children),n.flags|=4096);return n}return u?(ja(),R=o.fallback,u=n.mode,G=e.child,nt=G.sibling,o=ca(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,nt!==null?R=ca(nt,R):(R=Ds(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Co(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Of(a):(u=R.cachePool,u!==null?(G=Sn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Cm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Pf(e,y,a),n.memoizedState=Nf,Co(e.child,o)):(Ka(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function If(e,n){return n=Kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Kl(e,n){return e=ui(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return zs(n,e.child,null,a),e=If(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Qu(e.return,n,a)}function Bf(e,n,a,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function Vg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=vn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,St(vn,y),Fn(e,n,o,a),o=we?mo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gg(e,a,n);else if(e.tag===19)Gg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bf(n,!0,a,null,h,o);break;case"together":Bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ur(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function Cx(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),Wa(n,Sn,e.memoizedState.cache),Us();break;case 27:case 5:ae(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hg(e,n,a):(Ka(n),e=ma(e,n,a),e!==null?e.sibling:null);Ka(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ur(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Vg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(vn,vn.current),o)break;return null;case 22:return n.lanes=0,Og(e,n,a,n.pendingProps);case 24:Wa(n,Sn,e.memoizedState.cache)}return ma(e,n,a)}function kg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!Ff(e,a)&&(n.flags&128)===0)return bn=!1,Cx(e,n,a);bn=(e.flags&131072)!==0}else bn=!1,we&&(n.flags&1048576)!==0&&Sm(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ps(n.elementType),n.type=e,typeof e=="function")ku(e)?(o=Fs(e,o),n.tag=1,n=Bg(null,n,e,o,a)):(n.tag=0,n=Lf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Ug(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=Lg(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Fs(o,n.pendingProps),Bg(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,sf(e,n),bo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Wa(n,Sn,o),o!==h.cache&&Ju(n,[Sn],a,!0),Mo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Fg(e,n,o,a);break t}else if(o!==u){u=Ei(Error(s(424)),n),go(u),n=Fg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,on=wi(e.firstChild),zn=n,we=!0,ka=null,Ri=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Us(),o===u){n=ma(e,n,a);break t}Fn(e,n,o,a)}n=n.child}return n;case 26:return Zl(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=fc(st.current).createElement(a),o[pn]=n,o[Le]=e,Hn(o,a,e),xn(o),n.stateNode=o):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&we&&(o=n.stateNode=Q0(n.type,n.pendingProps,st.current),zn=n,Ri=!0,u=on,as(n.type)?(vh=u,on=wi(o.firstChild)):on=u),Fn(e,n,n.pendingProps.children,a),Zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=on)&&(o=aS(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,zn=n,on=wi(o.firstChild),Ri=!1,u=!0):u=!1),u||Xa(n)),ae(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,dh(u,h)?o=null:y!==null&&dh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=hf(e,n,yx,null,null,a),ko._currentValue=u),Zl(e,n),Fn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=on)&&(a=sS(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,zn=n,on=null,e=!0):e=!1),e||Xa(n)),null;case 13:return Hg(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=zs(n,null,o,a):Fn(e,n,o,a),n.child;case 11:return Ug(e,n,n.type,n.pendingProps,a);case 7:return Fn(e,n,n.pendingProps,a),n.child;case 8:return Fn(e,n,n.pendingProps.children,a),n.child;case 12:return Fn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Wa(n,n.type,o.value),Fn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ns(n),u=Bn(u),o=o(u),n.flags|=1,Fn(e,n,o,a),n.child;case 14:return Lg(e,n,n.type,n.pendingProps,a);case 15:return Ng(e,n,n.type,n.pendingProps,a);case 19:return Vg(e,n,a);case 31:return Rx(e,n,a);case 22:return Og(e,n,a,n.pendingProps);case 24:return Ns(n),o=Bn(Sn),e===null?(u=ef(),u===null&&(u=nn,h=$u(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},af(n),Wa(n,Sn,u)):((e.lanes&a)!==0&&(sf(e,n),bo(n,null,null,a),Mo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,Sn,o)):(o=h.cache,Wa(n,Sn,o),o!==u.cache&&Ju(n,[Sn],a,!0))),Fn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(e){e.flags|=4}function Hf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(g0())e.flags|=8192;else throw Is=Nl,nf}else e.flags&=-16777217}function Xg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!s_(n))if(g0())e.flags|=8192;else throw Is=Nl,nf}function jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mt():536870912,e.lanes|=n,Mr|=n)}function wo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ln(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function wx(e,n,a){var o=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(Sn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cr(n)?ga(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ku())),ln(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ga(n),h!==null?(ln(n),Xg(n,h)):(ln(n),Hf(n,u,null,o,a))):h?h!==e.memoizedState?(ga(n),ln(n),Xg(n,h)):(ln(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(n),ln(n),Hf(n,u,e,o,a)),null;case 27:if(te(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}e=Rt.current,cr(n)?bm(n):(e=Q0(u,o,a),n.stateNode=e,ga(n))}return ln(n),null;case 5:if(te(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}if(h=Rt.current,cr(n))bm(n);else{var y=fc(st.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[pn]=n,h[Le]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(Hn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ga(n)}}return ln(n),Hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,cr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||H0(e.nodeValue,a)),e||Xa(n,!0)}else e=fc(e).createTextNode(o),e[pn]=n,n.stateNode=e}return ln(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=cr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[pn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),e=!1}else a=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=cr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),ln(n),null);case 4:return Ht(),e===null&&lh(n.stateNode.containerInfo),ln(n),null;case 10:return ha(n.type),ln(n),null;case 19:if(j(vn),o=n.memoizedState,o===null)return ln(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)wo(o,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=zl(e),h!==null){for(n.flags|=128,wo(o,!1),e=h.updateQueue,n.updateQueue=e,jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vm(a,e),a=a.sibling;return St(vn,vn.current&1|2),we&&ua(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ie()>ec&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(e=zl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,jl(n,e),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!we)return ln(n),null}else 2*Ie()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ie(),e.sibling=null,a=vn.current,St(vn,u?a&1|2:a&1),we&&ua(n,o.treeForkCount),e):(ln(n),null);case 22:case 23:return hi(n),cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(Os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(Sn),ln(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Dx(e,n){switch(Yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(Sn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return te(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(vn),null;case 4:return Ht(),null;case 10:return ha(n.type),null;case 22:case 23:return hi(n),cf(),e!==null&&j(Os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ha(Sn),null;case 25:return null;default:return null}}function Wg(e,n){switch(Yu(n),n.tag){case 3:ha(Sn),Ht();break;case 26:case 27:case 5:te(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:j(vn);break;case 10:ha(n.type);break;case 22:case 23:hi(n),cf(),e!==null&&j(Os);break;case 24:ha(Sn)}}function Do(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){We(n,n.return,R)}}function Qa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var G=a,nt=R;try{nt()}catch(_t){We(u,G,_t)}}}o=o.next}while(o!==h)}}catch(_t){We(n,n.return,_t)}}function qg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Im(n,a)}catch(o){We(e,e.return,o)}}}function Yg(e,n,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){We(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){We(e,n,u)}}function Ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(e,n,u)}else a.current=null}function Zg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){We(e,e.return,u)}}function Gf(e,n,a){try{var o=e.stateNode;Jx(o,e.type,a,n),o[Le]=n}catch(u){We(e,e.return,u)}}function Kg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&as(e.type)||e.tag===4}function Vf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&as(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(kf(e,n,a),e=e.sibling;e!==null;)kf(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function jg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,o,a),n[pn]=e,n[Le]=a}catch(h){We(e,e.return,h)}}var _a=!1,En=!1,Xf=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,On=null;function Ux(e,n){if(e=e.containerInfo,fh=vc,e=cm(e),Iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,R=-1,G=-1,nt=0,_t=0,xt=e,lt=null;e:for(;;){for(var ut;xt!==a||u!==0&&xt.nodeType!==3||(R=y+u),xt!==h||o!==0&&xt.nodeType!==3||(G=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)lt=xt,xt=ut;for(;;){if(xt===e)break e;if(lt===a&&++nt===u&&(R=y),lt===h&&++_t===o&&(G=y),(ut=xt.nextSibling)!==null)break;xt=lt,lt=xt.parentNode}xt=ut}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:e,selectionRange:a},vc=!1,On=n;On!==null;)if(n=On,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,On=e;else for(;On!==null;){switch(n=On,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Kt=Fs(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){We(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)mh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,On=e;break}On=n.return}}function Jg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&Do(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){We(a,a.return,y)}else{var u=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){We(a,a.return,y)}}o&64&&qg(a),o&512&&Uo(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Im(e,n)}catch(y){We(a,a.return,y)}}break;case 27:n===null&&o&4&&jg(a);case 26:case 5:ya(e,a),n===null&&o&4&&Zg(a),o&512&&Uo(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),o&4&&e0(e,a);break;case 13:ya(e,a),o&4&&n0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Hx.bind(null,a),rS(e,a))));break;case 22:if(o=a.memoizedState!==null||_a,!o){n=n!==null&&n.memoizedState!==null||En,u=_a;var h=En;_a=o,(En=n)&&!h?xa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),_a=u,En=h}break;case 30:break;default:ya(e,a)}}function $g(e){var n=e.alternate;n!==null&&(e.alternate=null,$g(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ba(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,ti=!1;function va(e,n,a){for(a=a.child;a!==null;)t0(e,n,a),a=a.sibling}function t0(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:En||Ki(a,n),va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:En||Ki(a,n);var o=hn,u=ti;as(a.type)&&(hn=a.stateNode,ti=!1),va(e,n,a),Ho(a.stateNode),hn=o,ti=u;break;case 5:En||Ki(a,n);case 6:if(o=hn,u=ti,hn=null,va(e,n,a),hn=o,ti=u,hn!==null)if(ti)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(h){We(a,n,h)}else try{hn.removeChild(a.stateNode)}catch(h){We(a,n,h)}break;case 18:hn!==null&&(ti?(e=hn,q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dr(e)):q0(hn,a.stateNode));break;case 4:o=hn,u=ti,hn=a.stateNode.containerInfo,ti=!0,va(e,n,a),hn=o,ti=u;break;case 0:case 11:case 14:case 15:Qa(2,a,n),En||Qa(4,a,n),va(e,n,a);break;case 1:En||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Yg(a,n,o)),va(e,n,a);break;case 21:va(e,n,a);break;case 22:En=(o=En)||a.memoizedState!==null,va(e,n,a),En=o;break;default:va(e,n,a)}}function e0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dr(e)}catch(a){We(n,n.return,a)}}}function n0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dr(e)}catch(a){We(n,n.return,a)}}function Lx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Qg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Qg),n;default:throw Error(s(435,e.tag))}}function Jl(e,n){var a=Lx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Gx.bind(null,e,o);o.then(u,u)}})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(as(R.type)){hn=R.stateNode,ti=!1;break t}break;case 5:hn=R.stateNode,ti=!1;break t;case 3:case 4:hn=R.stateNode.containerInfo,ti=!0;break t}R=R.return}if(hn===null)throw Error(s(160));t0(h,y,u),hn=null,ti=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i0(n,e),n=n.sibling}var Ii=null;function i0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(Qa(3,e,e.return),Do(3,e),Qa(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(En||a===null||Ki(a,a.return)),o&64&&_a&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ii;if(ei(n,e),ni(e),o&512&&(En||a===null||Ki(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[za]||h[pn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Hn(h,o,a),h[pn]=e,xn(h),o=h;break t;case"link":var y=i_("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(h=y[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}h=u.createElement(o),Hn(h,o,a),u.head.appendChild(h);break;case"meta":if(y=i_("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(h=y[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}h=u.createElement(o),Hn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[pn]=e,xn(h),o=h}e.stateNode=o}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?a_(u,e.type,e.stateNode):n_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ei(n,e),ni(e),o&512&&(En||a===null||Ki(a,a.return)),a!==null&&o&4&&Gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,e),ni(e),o&512&&(En||a===null||Ki(a,a.return)),e.flags&32){u=e.stateNode;try{li(u,"")}catch(Kt){We(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Gf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Xf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){We(e,e.return,Kt)}}break;case 3:if(pc=null,u=Ii,Ii=hc(n.containerInfo),ei(n,e),Ii=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Dr(n.containerInfo)}catch(Kt){We(e,e.return,Kt)}Xf&&(Xf=!1,a0(e));break;case 4:o=Ii,Ii=hc(e.stateNode.containerInfo),ei(n,e),ni(e),Ii=o;break;case 12:ei(n,e),ni(e);break;case 31:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=Ie()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=_a,_t=En;if(_a=nt||u,En=_t||G,ei(n,e),En=_t,_a=nt,ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||_a||En||Hs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=G.stateNode;var xt=G.memoizedProps.style,lt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Kt){We(G,G.return,Kt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Kt){We(G,G.return,Kt)}}}else if(n.tag===18){if(a===null){G=n;try{var ut=G.stateNode;u?Y0(ut,!0):Y0(G.stateNode,!1)}catch(Kt){We(G,G.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Kg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Vf(e);Ql(e,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(li(y,""),a.flags&=-33);var R=Vf(e);Ql(e,R,y);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=Vf(e);kf(e,nt,G);break;default:throw Error(s(161))}}catch(_t){We(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function a0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;a0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jg(e,n.alternate,n),n=n.sibling}function Hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Qa(4,n,n.return),Hs(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Yg(n,n.return,a),Hs(n);break;case 27:Ho(n.stateNode);case 26:case 5:Ki(n,n.return),Hs(n);break;case 22:n.memoizedState===null&&Hs(n);break;case 30:Hs(n);break;default:Hs(n)}e=e.sibling}}function xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:xa(u,h,a),Do(4,h);break;case 1:if(xa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){We(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Pm(G[u],R)}catch(nt){We(o,o.return,nt)}}a&&y&64&&qg(h),Uo(h,h.return);break;case 27:jg(h);case 26:case 5:xa(u,h,a),a&&o===null&&y&4&&Zg(h),Uo(h,h.return);break;case 12:xa(u,h,a);break;case 31:xa(u,h,a),a&&y&4&&e0(u,h);break;case 13:xa(u,h,a),a&&y&4&&n0(u,h);break;case 22:h.memoizedState===null&&xa(u,h,a),Uo(h,h.return);break;case 30:break;default:xa(u,h,a)}n=n.sibling}}function Wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_o(a))}function qf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e))}function zi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s0(e,n,a,o),n=n.sibling}function s0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n,a,o),u&2048&&Do(9,n);break;case 1:zi(e,n,a,o);break;case 3:zi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e)));break;case 12:if(u&2048){zi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,R=h.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){We(n,n.return,G)}}else zi(e,n,a,o);break;case 31:zi(e,n,a,o);break;case 13:zi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?zi(e,n,a,o):Lo(e,n):h._visibility&2?zi(e,n,a,o):(h._visibility|=2,yr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Wf(y,n);break;case 24:zi(e,n,a,o),u&2048&&qf(n.alternate,n);break;default:zi(e,n,a,o)}}function yr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,R=a,G=o,nt=y.flags;switch(y.tag){case 0:case 11:case 15:yr(h,y,R,G,u),Do(8,y);break;case 23:break;case 22:var _t=y.stateNode;y.memoizedState!==null?_t._visibility&2?yr(h,y,R,G,u):Lo(h,y):(_t._visibility|=2,yr(h,y,R,G,u)),u&&nt&2048&&Wf(y.alternate,y);break;case 24:yr(h,y,R,G,u),u&&nt&2048&&qf(y.alternate,y);break;default:yr(h,y,R,G,u)}n=n.sibling}}function Lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Wf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&qf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var No=8192;function xr(e,n,a){if(e.subtreeFlags&No)for(e=e.child;e!==null;)r0(e,n,a),e=e.sibling}function r0(e,n,a){switch(e.tag){case 26:xr(e,n,a),e.flags&No&&e.memoizedState!==null&&vS(a,Ii,e.memoizedState,e.memoizedProps);break;case 5:xr(e,n,a);break;case 3:case 4:var o=Ii;Ii=hc(e.stateNode.containerInfo),xr(e,n,a),Ii=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,xr(e,n,a),No=o):xr(e,n,a));break;default:xr(e,n,a)}}function o0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,c0(o,e)}o0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(e),e=e.sibling}function l0(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$l(e)):Oo(e);break;default:Oo(e)}}function $l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,c0(o,e)}o0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}e=e.sibling}}function c0(e,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else t:for(a=e;On!==null;){o=On;var u=o.sibling,h=o.return;if($g(o),o===a){On=null;break t}if(u!==null){u.return=h,On=u;break t}On=h}}}var Nx={getCacheForType:function(e){var n=Bn(Sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Bn(Sn).controller.signal}},Ox=typeof WeakMap=="function"?WeakMap:Map,Be=0,nn=null,be=null,Te=0,Xe=0,di=null,Ja=!1,Sr=!1,Yf=!1,Sa=0,_n=0,$a=0,Gs=0,Zf=0,pi=0,Mr=0,Po=null,ii=null,Kf=!1,tc=0,u0=0,ec=1/0,nc=null,ts=null,Rn=0,es=null,br=null,Ma=0,jf=0,Qf=null,f0=null,Io=0,Jf=null;function mi(){return(Be&2)!==0&&Te!==0?Te&-Te:z.T!==null?ah():Zn()}function h0(){if(pi===0)if((Te&536870912)===0||we){var e=se;se<<=1,(se&3932160)===0&&(se=262144),pi=e}else pi=536870912;return e=fi.current,e!==null&&(e.flags|=32),pi}function ai(e,n,a){(e===nn&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Er(e,0),ns(e,Te,pi,!1)),Vt(e,a),((Be&2)===0||e!==nn)&&(e===nn&&((Be&2)===0&&(Gs|=a),_n===4&&ns(e,Te,pi,!1)),ji(e))}function d0(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?zx(e,n):th(e,n,!0),h=o;do{if(u===0){Sr&&!o&&ns(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Px(a)){u=th(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Po;var G=R.current.memoizedState.isDehydrated;if(G&&(Er(R,y).flags|=256),y=th(R,y,!1),y!==2){if(Yf&&!G){R.errorRecoveryDisabledLanes|=h,Gs|=h,u=4;break t}h=ii,ii=u,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){Er(e,0),ns(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ns(o,n,pi,!Ja);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-Ie(),10<u)){if(ns(o,n,pi,!Ja),pt(o,0,!0)!==0)break t;Ma=n,o.timeoutHandle=X0(p0.bind(null,o,a,ii,nc,Kf,n,pi,Gs,Mr,Ja,h,"Throttled",-0,0),u);break t}p0(o,a,ii,nc,Kf,n,pi,Gs,Mr,Ja,h,null,-0,0)}}break}while(!0);ji(e)}function p0(e,n,a,o,u,h,y,R,G,nt,_t,xt,lt,ut){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},r0(n,h,xt);var Kt=(h&62914560)===h?tc-Ie():(h&4194048)===h?u0-Ie():0;if(Kt=yS(xt,Kt),Kt!==null){Ma=h,e.cancelPendingCommit=Kt(M0.bind(null,e,n,h,a,o,u,y,R,G,_t,xt,null,lt,ut)),ns(e,h,y,!nt);return}}M0(e,n,h,a,o,u,y,R,G)}function Px(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ci(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ns(e,n,a,o){n&=~Zf,n&=~Gs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bt(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&wt(e,a,n)}function ic(){return(Be&6)===0?(zo(0),!1):!0}function $f(){if(be!==null){if(Xe===0)var e=be.return;else e=be,fa=Ls=null,mf(e),pr=null,yo=0,e=be;for(;e!==null;)Wg(e.alternate,e),e=e.return;be=null}}function Er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ma=0,$f(),nn=e,be=a=ca(e.current,null),Te=n,Xe=0,di=null,Ja=!1,Sr=Dt(e,n),Yf=!1,Mr=pi=Zf=Gs=$a=_n=0,ii=Po=null,Kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),h=1<<u;n|=e[u],o&=~h}return Sa=n,El(),a}function m0(e,n){me=null,z.H=Ro,n===dr||n===Ll?(n=Um(),Xe=3):n===nf?(n=Um(),Xe=4):Xe=n===Uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,be===null&&(_n=1,ql(e,Ei(n,e.current)))}function g0(){var e=fi.current;return e===null?!0:(Te&4194048)===Te?Ci===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ci:!1}function _0(){var e=z.H;return z.H=Ro,e===null?Ro:e}function v0(){var e=z.A;return z.A=Nx,e}function ac(){_n=4,Ja||(Te&4194048)!==Te&&fi.current!==null||(Sr=!0),($a&134217727)===0&&(Gs&134217727)===0||nn===null||ns(nn,Te,pi,!1)}function th(e,n,a){var o=Be;Be|=2;var u=_0(),h=v0();(nn!==e||Te!==n)&&(nc=null,Er(e,n)),n=!1;var y=_n;t:do try{if(Xe!==0&&be!==null){var R=be,G=di;switch(Xe){case 8:$f(),y=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var nt=Xe;if(Xe=0,di=null,Tr(e,R,G,nt),a&&Sr){y=0;break t}break;default:nt=Xe,Xe=0,di=null,Tr(e,R,G,nt)}}Ix(),y=_n;break}catch(_t){m0(e,_t)}while(!0);return n&&e.shellSuspendCounter++,fa=Ls=null,Be=o,z.H=u,z.A=h,be===null&&(nn=null,Te=0,El()),y}function Ix(){for(;be!==null;)y0(be)}function zx(e,n){var a=Be;Be|=2;var o=_0(),u=v0();nn!==e||Te!==n?(nc=null,ec=Ie()+500,Er(e,n)):Sr=Dt(e,n);t:do try{if(Xe!==0&&be!==null){n=be;var h=di;e:switch(Xe){case 1:Xe=0,di=null,Tr(e,n,h,1);break;case 2:case 9:if(wm(h)){Xe=0,di=null,x0(n);break}n=function(){Xe!==2&&Xe!==9||nn!==e||(Xe=7),ji(e)},h.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:wm(h)?(Xe=0,di=null,x0(n)):(Xe=0,di=null,Tr(e,n,h,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var R=be;if(y?s_(y):R.stateNode.complete){Xe=0,di=null;var G=R.sibling;if(G!==null)be=G;else{var nt=R.return;nt!==null?(be=nt,sc(nt)):be=null}break e}}Xe=0,di=null,Tr(e,n,h,5);break;case 6:Xe=0,di=null,Tr(e,n,h,6);break;case 8:$f(),_n=6;break t;default:throw Error(s(462))}}Bx();break}catch(_t){m0(e,_t)}while(!0);return fa=Ls=null,z.H=o,z.A=u,Be=a,be!==null?0:(nn=null,Te=0,El(),_n)}function Bx(){for(;be!==null&&!rn();)y0(be)}function y0(e){var n=kg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,n===null?sc(e):be=n}function x0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=zg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:mf(n);default:Wg(a,n),n=be=vm(n,Sa),n=kg(a,n,Sa)}e.memoizedProps=e.pendingProps,n===null?sc(e):be=n}function Tr(e,n,a,o){fa=Ls=null,mf(n),pr=null,yo=0;var u=n.return;try{if(Ax(e,u,n,a,Te)){_n=1,ql(e,Ei(a,e.current)),be=null;return}}catch(h){if(u!==null)throw be=u,h;_n=1,ql(e,Ei(a,e.current)),be=null;return}n.flags&32768?(we||o===1?e=!0:Sr||(Te&536870912)!==0?e=!1:(Ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),S0(n,e)):sc(n)}function sc(e){var n=e;do{if((n.flags&32768)!==0){S0(n,Ja);return}e=n.return;var a=wx(n.alternate,n,Sa);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);_n===0&&(_n=5)}function S0(e,n){do{var a=Dx(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);_n=6,be=null}function M0(e,n,a,o,u,h,y,R,G){e.cancelPendingCommit=null;do rc();while(Rn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Gu,tn(e,a,h,y,R,G),e===nn&&(be=nn=null,Te=0),br=n,es=e,Ma=a,jf=h,Qf=u,f0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vx(J,function(){return R0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=V.p,V.p=2,y=Be,Be|=4;try{Ux(e,n,a)}finally{Be=y,V.p=u,z.T=o}}Rn=1,b0(),E0(),T0()}}function b0(){if(Rn===1){Rn=0;var e=es,n=br,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=V.p;V.p=2;var u=Be;Be|=4;try{i0(n,e);var h=hh,y=cm(e.containerInfo),R=h.focusedElem,G=h.selectionRange;if(y!==R&&R&&R.ownerDocument&&lm(R.ownerDocument.documentElement,R)){if(G!==null&&Iu(R)){var nt=G.start,_t=G.end;if(_t===void 0&&(_t=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(_t,R.value.length);else{var xt=R.ownerDocument||document,lt=xt&&xt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),Kt=R.textContent.length,re=Math.min(G.start,Kt),je=G.end===void 0?re:Math.min(G.end,Kt);!ut.extend&&re>je&&(y=je,je=re,re=y);var Q=om(R,re),W=om(R,je);if(Q&&W&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var et=xt.createRange();et.setStart(Q.node,Q.offset),ut.removeAllRanges(),re>je?(ut.addRange(et),ut.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ut.addRange(et))}}}}for(xt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var yt=xt[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}vc=!!fh,hh=fh=null}finally{Be=u,V.p=o,z.T=a}}e.current=n,Rn=2}}function E0(){if(Rn===2){Rn=0;var e=es,n=br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=V.p;V.p=2;var u=Be;Be|=4;try{Jg(e,n.alternate,n)}finally{Be=u,V.p=o,z.T=a}}Rn=3}}function T0(){if(Rn===4||Rn===3){Rn=0,Y();var e=es,n=br,a=Ma,o=f0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,br=es=null,A0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ts=null),ze(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=V.p,V.p=2,z.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];h(R.value,{componentStack:R.stack})}}finally{z.T=n,V.p=u}}(Ma&3)!==0&&rc(),ji(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Jf?Io++:(Io=0,Jf=e):Io=0,zo(0)}}function A0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_o(n)))}function rc(){return b0(),E0(),T0(),R0()}function R0(){if(Rn!==5)return!1;var e=es,n=jf;jf=0;var a=ze(Ma),o=z.T,u=V.p;try{V.p=32>a?32:a,z.T=null,a=Qf,Qf=null;var h=es,y=Ma;if(Rn=0,br=es=null,Ma=0,(Be&6)!==0)throw Error(s(331));var R=Be;if(Be|=4,l0(h.current),s0(h,h.current,y,a),Be=R,zo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{V.p=u,z.T=o,A0(e,n)}}function C0(e,n,a){n=Ei(a,n),n=Df(e.stateNode,n,2),e=Za(e,n,2),e!==null&&(Vt(e,2),ji(e))}function We(e,n,a){if(e.tag===3)C0(e,e,a);else for(;n!==null;){if(n.tag===3){C0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ts===null||!ts.has(o))){e=Ei(a,e),a=wg(2),o=Za(n,a,2),o!==null&&(Dg(a,o,n,e),Vt(o,2),ji(o));break}}n=n.return}}function eh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ox;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Yf=!0,u.add(a),e=Fx.bind(null,e,n,a),n.then(e,e))}function Fx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,nn===e&&(Te&a)===a&&(_n===4||_n===3&&(Te&62914560)===Te&&300>Ie()-tc?(Be&2)===0&&Er(e,0):Zf|=a,Mr===Te&&(Mr=0)),ji(e)}function w0(e,n){n===0&&(n=Mt()),e=ws(e,n),e!==null&&(Vt(e,n),ji(e))}function Hx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),w0(e,a)}function Gx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),w0(e,a)}function Vx(e,n){return dn(e,n)}var oc=null,Ar=null,nh=!1,lc=!1,ih=!1,is=0;function ji(e){e!==Ar&&e.next===null&&(Ar===null?oc=Ar=e:Ar=Ar.next=e),lc=!0,nh||(nh=!0,Xx())}function zo(e,n){if(!ih&&lc){ih=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(y&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,N0(o,h))}else h=Te,h=pt(o,o===nn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Dt(o,h)||(a=!0,N0(o,h));o=o.next}while(a);ih=!1}}function kx(){D0()}function D0(){lc=nh=!1;var e=0;is!==0&&tS()&&(e=is);for(var n=Ie(),a=null,o=oc;o!==null;){var u=o.next,h=U0(o,n);h===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(Ar=a)):(a=o,(e!==0||(h&3)!==0)&&(lc=!0)),o=u}Rn!==0&&Rn!==5||zo(e),is!==0&&(is=0)}function U0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Bt(h),R=1<<y,G=u[y];G===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Pt(R,n)):G<=n&&(e.expiredLanes|=R),h&=~R}if(n=nn,a=Te,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ye(o),ze(a)){case 2:case 8:a=b;break;case 32:a=J;break;case 268435456:a=ht;break;default:a=J}return o=L0.bind(null,e),a=dn(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),e.callbackPriority=2,e.callbackNode=null,2}function L0(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=Te;return o=pt(e,e===nn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(d0(e,o,n),U0(e,Ie()),e.callbackNode!=null&&e.callbackNode===a?L0.bind(null,e):null)}function N0(e,n){if(rc())return null;d0(e,n,!0)}function Xx(){nS(function(){(Be&6)!==0?dn(L,kx):D0()})}function ah(){if(is===0){var e=fr;e===0&&(e=Jt,Jt<<=1,(Jt&261888)===0&&(Jt=256)),is=e}return is}function O0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ts(""+e)}function P0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Wx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=O0((u[Le]||null).action),y=o.submitter;y&&(n=(n=y[Le]||null)?O0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var R=new xl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(is!==0){var G=y?P0(u,y):new FormData(u);Ef(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=y?P0(u,y):new FormData(u),Ef(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var sh=0;sh<Hu.length;sh++){var rh=Hu[sh],qx=rh.toLowerCase(),Yx=rh[0].toUpperCase()+rh.slice(1);Pi(qx,"on"+Yx)}Pi(hm,"onAnimationEnd"),Pi(dm,"onAnimationIteration"),Pi(pm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(cx,"onTransitionRun"),Pi(ux,"onTransitionStart"),Pi(fx,"onTransitionCancel"),Pi(mm,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function I0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],G=R.instance,nt=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=nt;try{h(u)}catch(_t){bl(_t)}u.currentTarget=null,h=G}else for(y=0;y<o.length;y++){if(R=o[y],G=R.instance,nt=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=nt;try{h(u)}catch(_t){bl(_t)}u.currentTarget=null,h=G}}}}function Ee(e,n){var a=n[Li];a===void 0&&(a=n[Li]=new Set);var o=e+"__bubble";a.has(o)||(z0(n,e,2,!1),a.add(o))}function oh(e,n,a){var o=0;n&&(o|=4),z0(a,e,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function lh(e){if(!e[cc]){e[cc]=!0,gl.forEach(function(a){a!=="selectionchange"&&(Zx.has(a)||oh(a,!1,e),oh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cc]||(n[cc]=!0,oh("selectionchange",!1,n))}}function z0(e,n,a,o){switch(h_(n)){case 2:var u=MS;break;case 8:u=bS;break;default:u=bh}a=u.bind(null,n,a,e),u=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ch(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=sa(R),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=h=y;continue t}R=R.parentNode}}o=o.return}Vp(function(){var nt=h,_t=Tu(a),xt=[];t:{var lt=gm.get(e);if(lt!==void 0){var ut=xl,Kt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":ut=Gy;break;case"focusin":Kt="focus",ut=Uu;break;case"focusout":Kt="blur",ut=Uu;break;case"beforeblur":case"afterblur":ut=Uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Xy;break;case hm:case dm:case pm:ut=Ly;break;case mm:ut=qy;break;case"scroll":case"scrollend":ut=Ry;break;case"wheel":ut=Zy;break;case"copy":case"cut":case"paste":ut=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Yp;break;case"toggle":case"beforetoggle":ut=jy}var re=(n&4)!==0,je=!re&&(e==="scroll"||e==="scrollend"),Q=re?lt!==null?lt+"Capture":null:lt;re=[];for(var W=nt,et;W!==null;){var yt=W;if(et=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||et===null||Q===null||(yt=so(W,Q),yt!=null&&re.push(Fo(W,yt,et))),je)break;W=W.return}0<re.length&&(lt=new ut(lt,Kt,null,a,_t),xt.push({event:lt,listeners:re}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==Eu&&(Kt=a.relatedTarget||a.fromElement)&&(sa(Kt)||Kt[Nn]))break t;if((ut||lt)&&(lt=_t.window===_t?_t:(lt=_t.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(Kt=a.relatedTarget||a.toElement,ut=nt,Kt=Kt?sa(Kt):null,Kt!==null&&(je=c(Kt),re=Kt.tag,Kt!==je||re!==5&&re!==27&&re!==6)&&(Kt=null)):(ut=null,Kt=nt),ut!==Kt)){if(re=Wp,yt="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(re=Yp,yt="onPointerLeave",Q="onPointerEnter",W="pointer"),je=ut==null?lt:Es(ut),et=Kt==null?lt:Es(Kt),lt=new re(yt,W+"leave",ut,a,_t),lt.target=je,lt.relatedTarget=et,yt=null,sa(_t)===nt&&(re=new re(Q,W+"enter",Kt,a,_t),re.target=et,re.relatedTarget=je,yt=re),je=yt,ut&&Kt)e:{for(re=Kx,Q=ut,W=Kt,et=0,yt=Q;yt;yt=re(yt))et++;yt=0;for(var ie=W;ie;ie=re(ie))yt++;for(;0<et-yt;)Q=re(Q),et--;for(;0<yt-et;)W=re(W),yt--;for(;et--;){if(Q===W||W!==null&&Q===W.alternate){re=Q;break e}Q=re(Q),W=re(W)}re=null}else re=null;ut!==null&&B0(xt,lt,ut,re,!1),Kt!==null&&je!==null&&B0(xt,je,Kt,re,!0)}}t:{if(lt=nt?Es(nt):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Oe=em;else if($p(lt))if(nm)Oe=rx;else{Oe=ax;var jt=ix}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?nt&&He(nt.elementType)&&(Oe=em):Oe=sx;if(Oe&&(Oe=Oe(e,nt))){tm(xt,Oe,a,_t);break t}jt&&jt(e,lt,nt),e==="focusout"&&nt&&lt.type==="number"&&nt.memoizedProps.value!=null&&Me(lt,"number",lt.value)}switch(jt=nt?Es(nt):window,e){case"focusin":($p(jt)||jt.contentEditable==="true")&&(ir=jt,zu=nt,po=null);break;case"focusout":po=zu=ir=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,um(xt,a,_t);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":um(xt,a,_t)}var _e;if(Nu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else nr?Qp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Zp&&a.locale!=="ko"&&(nr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&nr&&(_e=kp()):(Ga=_t,Cu="value"in Ga?Ga.value:Ga.textContent,nr=!0)),jt=uc(nt,Ae),0<jt.length&&(Ae=new qp(Ae,e,null,a,_t),xt.push({event:Ae,listeners:jt}),_e?Ae.data=_e:(_e=Jp(a),_e!==null&&(Ae.data=_e)))),(_e=Jy?$y(e,a):tx(e,a))&&(Ae=uc(nt,"onBeforeInput"),0<Ae.length&&(jt=new qp("onBeforeInput","beforeinput",null,a,_t),xt.push({event:jt,listeners:Ae}),jt.data=_e)),Wx(xt,e,nt,a,_t)}I0(xt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=so(e,a),u!=null&&o.unshift(Fo(e,u,h)),u=so(e,n),u!=null&&o.push(Fo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Kx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B0(e,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var R=a,G=R.alternate,nt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||nt===null||(G=nt,u?(nt=so(a,h),nt!=null&&y.unshift(Fo(a,nt,G))):u||(nt=so(a,h),nt!=null&&y.push(Fo(a,nt,G)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var jx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function F0(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Qx,"")}function H0(e,n){return n=F0(n),F0(e)===n}function Ke(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||li(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&li(e,""+o);break;case"className":Zt(e,"class",o);break;case"tabIndex":Zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zt(e,a,o);break;case"style":Oi(e,o,h);break;case"data":if(n!=="object"){Zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ts(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ke(e,n,"name",u.name,u,null),Ke(e,n,"formEncType",u.formEncType,u,null),Ke(e,n,"formMethod",u.formMethod,u,null),Ke(e,n,"formTarget",u.formTarget,u,null)):(Ke(e,n,"encType",u.encType,u,null),Ke(e,n,"method",u.method,u,null),Ke(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ts(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ts(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Ot(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ot(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qi.get(a)||a,Ot(e,a,o))}}function uh(e,n,a,o,u,h){switch(a){case"style":Oi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?li(e,o):(typeof o=="number"||typeof o=="bigint")&&li(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Le]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ot(e,a,o)}}}function Hn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,h,y,a,null)}}u&&Ke(e,n,"srcSet",a.srcSet,a,null),o&&Ke(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=h=y=u=null,G=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":y=_t;break;case"checked":G=_t;break;case"defaultChecked":nt=_t;break;case"value":h=_t;break;case"defaultValue":R=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:Ke(e,n,o,_t,a,null)}}kn(e,h,R,G,nt,y,u,!1);return;case"select":Ee("invalid",e),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Ke(e,n,u,R,a,null)}n=h,a=y,e.multiple=!!o,n!=null?An(e,!!o,n,!1):a!=null&&An(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ke(e,n,y,R,a,null)}Ni(e,o,u,h);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ke(e,n,G,o,a,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Bo.length;o++)Ee(Bo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,nt,o,a,null)}return;default:if(He(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&uh(e,n,_t,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ke(e,n,R,o,a,null))}function Jx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,R=null,G=null,nt=null,_t=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ut)||Ke(e,n,ut,null,o,xt)}}for(var lt in o){var ut=o[lt];if(xt=a[lt],o.hasOwnProperty(lt)&&(ut!=null||xt!=null))switch(lt){case"type":h=ut;break;case"name":u=ut;break;case"checked":nt=ut;break;case"defaultChecked":_t=ut;break;case"value":y=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&Ke(e,n,lt,ut,o,xt)}}Gt(e,y,R,G,nt,_t,h,u);return;case"select":ut=y=R=lt=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(h)||Ke(e,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":lt=h;break;case"defaultValue":R=h;break;case"multiple":y=h;default:h!==G&&Ke(e,n,u,h,o,G)}n=R,a=y,o=ut,lt!=null?An(e,!!a,lt,!1):!!o!=!!a&&(n!=null?An(e,!!a,n,!0):An(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ke(e,n,R,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ke(e,n,y,u,o,h)}oi(e,lt,ut);return;case"option":for(var Kt in a)lt=a[Kt],a.hasOwnProperty(Kt)&&lt!=null&&!o.hasOwnProperty(Kt)&&(Kt==="selected"?e.selected=!1:Ke(e,n,Kt,null,o,lt));for(G in o)lt=o[G],ut=a[G],o.hasOwnProperty(G)&&lt!==ut&&(lt!=null||ut!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":Ke(e,n,G,lt,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)lt=a[re],a.hasOwnProperty(re)&&lt!=null&&!o.hasOwnProperty(re)&&Ke(e,n,re,null,o,lt);for(nt in o)if(lt=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&lt!==ut&&(lt!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Ke(e,n,nt,lt,o,ut)}return;default:if(He(n)){for(var je in a)lt=a[je],a.hasOwnProperty(je)&&lt!==void 0&&!o.hasOwnProperty(je)&&uh(e,n,je,void 0,o,lt);for(_t in o)lt=o[_t],ut=a[_t],!o.hasOwnProperty(_t)||lt===ut||lt===void 0&&ut===void 0||uh(e,n,_t,lt,o,ut);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&Ke(e,n,Q,null,o,lt);for(xt in o)lt=o[xt],ut=a[xt],!o.hasOwnProperty(xt)||lt===ut||lt==null&&ut==null||Ke(e,n,xt,lt,o,ut)}function G0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $x(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,R=u.duration;if(h&&R&&G0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],nt=G.startTime;if(nt>R)break;var _t=G.transferSize,xt=G.initiatorType;_t&&G0(xt)&&(G=G.responseEnd,y+=_t*(G<R?1:(R-nt)/(G-nt)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fh=null,hh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function V0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function dh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ph=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===ph?!1:(ph=e,!0):(ph=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(e){return W0.resolve(null).then(e).catch(iS)}:X0;function iS(e){setTimeout(function(){throw e})}function as(e){return e==="head"}function q0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Dr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ho(a);for(var h=a.firstChild;h;){var y=h.nextSibling,R=h.nodeName;h[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Ho(e.ownerDocument.body);a=u}while(a);Dr(n)}function Y0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function mh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mh(a),Ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function sS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wi(e.nextSibling),e===null))return null;return e}function Z0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function gh(e){return e.data==="$?"||e.data==="$~"}function _h(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function wi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var vh=null;function K0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return wi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function j0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Q0(e,n,a){switch(n=fc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ba(e)}var Di=new Map,J0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=V.d;V.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var e=ba.f(),n=ic();return e||n}function lS(e){var n=ra(e);n!==null&&n.tag===5&&n.type==="form"?mg(n):ba.r(e)}var Rr=typeof document>"u"?null:document;function $0(e,n,a){var o=Rr;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),J0.has(u)||(J0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Hn(n,"link",e),xn(n),o.head.appendChild(n)))}}function cS(e){ba.D(e),$0("dns-prefetch",e,null)}function uS(e,n){ba.C(e,n),$0("preconnect",e,n)}function fS(e,n,a){ba.L(e,n,a);var o=Rr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var h=u;switch(n){case"style":h=Cr(e);break;case"script":h=wr(e)}Di.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(h))||n==="script"&&o.querySelector(Vo(h))||(n=o.createElement("link"),Hn(n,"link",e),xn(n),o.head.appendChild(n)))}}function hS(e,n){ba.m(e,n);var a=Rr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=wr(e)}if(!Di.has(h)&&(e=v({rel:"modulepreload",href:e},n),Di.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vo(h)))return}o=a.createElement("link"),Hn(o,"link",e),xn(o),a.head.appendChild(o)}}}function dS(e,n,a){ba.S(e,n,a);var o=Rr;if(o&&e){var u=Fa(o).hoistableStyles,h=Cr(e);n=n||"default";var y=u.get(h);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Go(h)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(h))&&yh(e,a);var G=y=o.createElement("link");xn(G),Hn(G,"link",e),G._p=new Promise(function(nt,_t){G.onload=nt,G.onerror=_t}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(h,y)}}}function pS(e,n){ba.X(e,n);var a=Rr;if(a&&e){var o=Fa(a).hoistableScripts,u=wr(e),h=o.get(u);h||(h=a.querySelector(Vo(u)),h||(e=v({src:e,async:!0},n),(n=Di.get(u))&&xh(e,n),h=a.createElement("script"),xn(h),Hn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function mS(e,n){ba.M(e,n);var a=Rr;if(a&&e){var o=Fa(a).hoistableScripts,u=wr(e),h=o.get(u);h||(h=a.querySelector(Vo(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Di.get(u))&&xh(e,n),h=a.createElement("script"),xn(h),Hn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function t_(e,n,a,o){var u=(u=st.current)?hc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Cr(a.href),a=Fa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cr(a.href);var h=Fa(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Go(e)))&&!h._p&&(y.instance=h,y.state.loading=5),Di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,a),h||gS(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wr(a),a=Fa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Cr(e){return'href="'+Ve(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Hn(n,"link",a),xn(n),e.head.appendChild(n))}function wr(e){return'[src="'+Ve(e)+'"]'}function Vo(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,xn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),xn(o),Hn(o,"style",u),dc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Cr(a.href);var h=e.querySelector(Go(u));if(h)return n.state.loading|=4,n.instance=h,xn(h),h;o=e_(a),(u=Di.get(u))&&yh(o,u),h=(e.ownerDocument||e).createElement("link"),xn(h);var y=h;return y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Hn(h,"link",o),n.state.loading|=4,dc(h,a.precedence,e),n.instance=h;case"script":return h=wr(a.src),(u=e.querySelector(Vo(h)))?(n.instance=u,xn(u),u):(o=a,(u=Di.get(h))&&(o=v({},a),xh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),xn(u),Hn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,e));return n.instance}function dc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pc=null;function i_(e,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[za]||h[pn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(h):o.set(y,[h])}}return o}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function s_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Cr(o.href),h=n.querySelector(Go(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=mc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,xn(h);return}h=n.ownerDocument||n,o=e_(o),(u=Di.get(u))&&yh(o,u),h=h.createElement("link"),xn(h);var y=h;y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),Hn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sh=0;function yS(e,n){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Sh===0&&(Sh=62500*$x());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,n.forEach(xS,e),gc=null,mc.call(e))}function xS(e,n){if(!(n.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ko={$$typeof:B,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function SS(e,n,a,o,u,h,y,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function r_(e,n,a,o,u,h,y,R,G,nt,_t,xt){return e=new SS(e,n,a,y,G,nt,_t,xt,R),n=1,h===!0&&(n|=24),h=ui(3,null,null,n),e.current=h,h.stateNode=e,n=$u(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},af(h),e}function o_(e){return e?(e=rr,e):rr}function l_(e,n,a,o,u,h){u=o_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ya(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Za(e,o,n),a!==null&&(ai(a,e,n),So(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Mh(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13||e.tag===31){var n=ws(e,67108864);n!==null&&ai(n,e,67108864),Mh(e,67108864)}}function f_(e){if(e.tag===13||e.tag===31){var n=mi();n=fe(n);var a=ws(e,n);a!==null&&ai(a,e,n),Mh(e,n)}}var vc=!0;function MS(e,n,a,o){var u=z.T;z.T=null;var h=V.p;try{V.p=2,bh(e,n,a,o)}finally{V.p=h,z.T=u}}function bS(e,n,a,o){var u=z.T;z.T=null;var h=V.p;try{V.p=8,bh(e,n,a,o)}finally{V.p=h,z.T=u}}function bh(e,n,a,o){if(vc){var u=Eh(o);if(u===null)ch(e,n,o,yc,a),d_(e,o);else if(TS(u,e,n,a,o))o.stopPropagation();else if(d_(e,o),n&4&&-1<ES.indexOf(e)){for(;u!==null;){var h=ra(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Tt(h.pendingLanes);if(y!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var G=1<<31-Bt(y);R.entanglements[1]|=G,y&=~G}ji(h),(Be&6)===0&&(ec=Ie()+500,zo(0))}}break;case 31:case 13:R=ws(h,2),R!==null&&ai(R,h,2),ic(),Mh(h,2)}if(h=Eh(o),h===null&&ch(e,n,o,yc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ch(e,n,o,null,a)}}function Eh(e){return e=Tu(e),Th(e)}var yc=null;function Th(e){if(yc=null,e=sa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yc=e,null}function h_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ce()){case L:return 2;case b:return 8;case J:case rt:return 32;case ht:return 268435456;default:return 32}default:return 32}}var Ah=!1,ss=null,rs=null,os=null,Xo=new Map,Wo=new Map,ls=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d_(e,n){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ra(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TS(e,n,a,o,u){switch(n){case"focusin":return ss=qo(ss,e,n,a,o,u),!0;case"dragenter":return rs=qo(rs,e,n,a,o,u),!0;case"mouseover":return os=qo(os,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Xo.set(h,qo(Xo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Wo.set(h,qo(Wo.get(h)||null,e,n,a,o,u)),!0}return!1}function p_(e){var n=sa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Mi(e.priority,function(){f_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Mi(e.priority,function(){f_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Eu=o,a.target.dispatchEvent(o),Eu=null}else return n=ra(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function m_(e,n,a){xc(e)&&a.delete(n)}function AS(){Ah=!1,ss!==null&&xc(ss)&&(ss=null),rs!==null&&xc(rs)&&(rs=null),os!==null&&xc(os)&&(os=null),Xo.forEach(m_),Wo.forEach(m_)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Ah||(Ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AS)))}var Mc=null;function g_(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Th(o||a)===null)continue;break}var h=ra(a);h!==null&&(e.splice(n,3),n-=3,Ef(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Dr(e){function n(G){return Sc(G,e)}ss!==null&&Sc(ss,e),rs!==null&&Sc(rs,e),os!==null&&Sc(os,e),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<ls.length;a++){var o=ls[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)p_(a),a.blockedOn===null&&ls.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[Le]||null;if(typeof h=="function")y||g_(a);else if(y){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Le]||null)R=y.formAction;else if(Th(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),g_(a)}}}function __(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Rh(e){this._internalRoot=e}bc.prototype.render=Rh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();l_(a,o,e,n,null,null)},bc.prototype.unmount=Rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),ic(),n[Nn]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ls.length&&n!==0&&n<ls[a].priority;a++);ls.splice(a,0,e),a===0&&p_(e)}};var v_=t.version;if(v_!=="19.2.8")throw Error(s(527,v_,"19.2.8"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var RS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ft=Ec.inject(RS),dt=Ec}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Tg,h=Ag,y=Rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=r_(e,1,!1,null,null,a,o,null,u,h,y,__),e[Nn]=n.current,lh(e),new Rh(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Tg,y=Ag,R=Rg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=r_(e,1,!0,n,a??null,o,u,G,h,y,R,__),n.context=o_(null),a=n.current,o=mi(),o=fe(o),u=Ya(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,Vt(n,a),ji(n),e[Nn]=n.current,lh(e),new bc(n)},Zo.version="19.2.8",Zo}var C_;function zS(){if(C_)return Dh.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dh.exports=IS(),Dh.exports}var BS=zS();const FS=[{id:1,title:"Galen's Model of the Eye",date:"2nd Century",description:"Galen posited the crystalline lens as the principal instrument of vision. His anatomical model influenced centuries of thought.",literaryConnection:"Dante's emphasis on pure light and the initial structure of his cosmos echo Galenic perfection."},{id:2,title:"Alhazen's Book of Optics",date:"11th Century",description:"Influential on medieval perspectivism, Alhazen proved intromission theory—that light enters the eye rather than being emitted from it.",literaryConnection:"Provides the optical framework for Dante's progressive adaptation to blinding divine light."},{id:3,title:"Vesalius's Fabrica",date:"1543",description:"Revolutionized anatomical dissection, breaking down the eye into structural parts verifiable by the medical gaze.",literaryConnection:"The corpse becomes an object of intense scrutiny, shifting the focus from mystical light to physical flesh."},{id:4,title:"Kepler's Discovery of the Retina",date:"1604",description:"Kepler identified the retina, not the lens, as the seat of vision.",literaryConnection:"Corresponds to Dante's Empyrean as the 'eye of God', an inverted image forming the true reality."},{id:5,title:"Descartes & the Camera Obscura",date:"17th Century",description:"Descartes modeled the eye as a mechanical camera obscura, leading to the mind/body dualism.",literaryConnection:"Prefigures the modern detachment of the viewing subject from the observed object."},{id:6,title:"Forensic Pathology",date:"19th Century",description:"The rise of medicalization of the corpse. Exploring the body as a site of trauma and history.",literaryConnection:"Echoes Frankenstein's assembled body and the preservation of Tollund Man's eyes in Heaney's poetry."}],HS=[{id:1,title:"The Anatomical Venus",type:"Early modern anatomical plate",image:"/anatomical_venus.jpg",description:"Wax models depicting dissected faces and eyes, blending the beautiful with the macabre."},{id:2,title:"Tollund Man",type:"Forensic Photograph",description:"As catalogued in Glob's 'The Bog People'. A preserved corpse that becomes an object of both forensic and poetic inquiry."},{id:3,title:"Frankenstein's Assembly",type:"Literary Medicalization",description:"The creation of life from the fragments of the dead, viewed through the physician's eye."}];function GS(){return gt.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[gt.jsx("h2",{style:{marginBottom:"2rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Eye Timeline"}),gt.jsx("div",{className:"timeline",style:{position:"relative",borderLeft:"2px solid var(--accent-gold)",paddingLeft:"2rem",marginLeft:"1rem"},children:FS.map((r,t)=>gt.jsxs("div",{className:"timeline-item interactive-card",style:{marginBottom:"2rem",padding:"1.5rem",background:"var(--bg-secondary)",borderRadius:"12px",position:"relative"},children:[gt.jsx("div",{style:{position:"absolute",left:"-2.65rem",top:"1.5rem",width:"16px",height:"16px",borderRadius:"50%",background:"var(--accent-crimson)",border:"3px solid var(--bg-primary)"}}),gt.jsx("span",{style:{color:"var(--accent-gold)",fontWeight:"bold",display:"block",marginBottom:"0.5rem"},children:r.date}),gt.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"1rem"},children:r.title}),gt.jsxs("p",{style:{marginBottom:"1rem"},children:[gt.jsx("strong",{children:"Medical History:"})," ",r.description]}),gt.jsxs("p",{style:{color:"#d0d0d0"},children:[gt.jsx("em",{children:"Literary Connection:"})," ",r.literaryConnection]})]},r.id))})]})}const mp="185",Zr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VS=0,w_=1,kS=2,Jc=1,kv=2,sl=3,ys=0,Qn=1,In=2,Ua=0,Kr=1,D_=2,U_=3,L_=4,XS=5,qs=100,WS=101,qS=102,YS=103,ZS=104,KS=200,jS=201,QS=202,JS=203,Sd=204,Md=205,$S=206,tM=207,eM=208,nM=209,iM=210,aM=211,sM=212,rM=213,oM=214,bd=0,Ed=1,Td=2,Jr=3,Ad=4,Rd=5,Cd=6,wd=7,gp=0,lM=1,cM=2,ea=0,Xv=1,Wv=2,qv=3,_p=4,Yv=5,Zv=6,Kv=7,jv=300,Qs=301,$r=302,Oh=303,Ph=304,vu=306,Dd=1e3,Da=1001,Ud=1002,Gn=1003,uM=1004,Tc=1005,Yn=1006,Ih=1007,Zs=1008,Si=1009,Qv=1010,Jv=1011,ul=1012,vp=1013,ia=1014,ki=1015,Na=1016,yp=1017,xp=1018,fl=1020,$v=35902,ty=35899,ey=1021,ny=1022,Xi=1023,Oa=1026,Ks=1027,Sp=1028,Mp=1029,Js=1030,bp=1031,Ep=1033,$c=33776,tu=33777,eu=33778,nu=33779,Ld=35840,Nd=35841,Od=35842,Pd=35843,Id=36196,zd=37492,Bd=37496,Fd=37488,Hd=37489,su=37490,Gd=37491,Vd=37808,kd=37809,Xd=37810,Wd=37811,qd=37812,Yd=37813,Zd=37814,Kd=37815,jd=37816,Qd=37817,Jd=37818,$d=37819,tp=37820,ep=37821,np=36492,ip=36494,ap=36495,sp=36283,rp=36284,ru=36285,op=36286,fM=3200,ou=0,hM=1,gs="",vi="srgb",lu="srgb-linear",cu="linear",qe="srgb",Ur=7680,N_=519,dM=512,pM=513,mM=514,Tp=515,gM=516,_M=517,Ap=518,vM=519,O_=35044,P_="300 es",ta=2e3,hl=2001;function yM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function uu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xM(){const r=uu("canvas");return r.style.display="block",r}const I_={};function z_(...r){const t="THREE."+r.shift();console.log(t,...r)}function iy(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function oe(...r){r=iy(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=iy(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function jr(...r){const t=r.join(" ");t in I_||(I_[t]=!0,oe(...r))}function SM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const MM={[bd]:Ed,[Td]:Cd,[Ad]:wd,[Jr]:Rd,[Ed]:bd,[Cd]:Td,[wd]:Ad,[Rd]:Jr};class Ss{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,lp=180/Math.PI;function dl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function ye(r,t,i){return Math.max(t,Math.min(i,r))}function bM(r,t){return(r%t+t)%t}function zh(r,t,i){return(1-i)*r+i*t}function Ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const EM={DEG2RAD:iu},Ip=class Ip{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ip.prototype.isVector2=!0;let kt=Ip;class xs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],T=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==T){let M=m*g+p*S+_*T+v*w;M<0&&(g=-g,S=-S,T=-T,w=-w,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),B=Math.sin(O);x=Math.sin(x*O)/B,d=Math.sin(d*O)/B,m=m*x+g*d,p=p*x+S*d,_=_*x+T*d,v=v*x+w*d}else{m=m*x+g*d,p=p*x+S*d,_=_*x+T*d,v=v*x+w*d;const O=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=O,p*=O,_*=O,v*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],T=c[f+3];return t[i]=d*T+_*v+m*S-p*g,t[i+1]=m*T+_*g+p*v-d*S,t[i+2]=p*T+_*S+d*g-m*v,t[i+3]=_*T-d*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),S=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"YZX":this._x=g*_*v+p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v-g*S*T;break;case"XZY":this._x=g*_*v-p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v+g*S*T;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zp=class zp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(B_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(B_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Bh.copy(this).projectOnVector(t),this.sub(Bh)}reflect(t){return this.sub(Bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zp.prototype.isVector3=!0;let k=zp;const Bh=new k,B_=new xs,Bp=class Bp{constructor(t,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],T=s[8],w=l[0],M=l[3],x=l[6],O=l[1],B=l[4],C=l[7],P=l[2],U=l[5],I=l[8];return c[0]=f*w+d*O+m*P,c[3]=f*M+d*B+m*U,c[6]=f*x+d*C+m*I,c[1]=p*w+_*O+v*P,c[4]=p*M+_*B+v*U,c[7]=p*x+_*C+v*I,c[2]=g*w+S*O+T*P,c[5]=g*M+S*B+T*U,c[8]=g*x+S*C+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,S=p*c-f*m,T=i*v+s*g+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fh.makeScale(t,i)),this}rotate(t){return jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fh.makeRotation(-t)),this}translate(t,i){return jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bp.prototype.isMatrix3=!0;let de=Bp;const Fh=new de,F_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TM(){const r={enabled:!0,workingColorSpace:lu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qe&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qe&&(l.r=Qr(l.r),l.g=Qr(l.g),l.b=Qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===gs?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[lu]:{primaries:t,whitePoint:s,transfer:cu,toXYZ:F_,fromXYZ:H_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:qe,toXYZ:F_,fromXYZ:H_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const De=TM();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Lr;class AM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Lr===void 0&&(Lr=uu("canvas")),Lr.width=t.width,Lr.height=t.height;const l=Lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=uu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RM=0;class Rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=dl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Hh(l[f].image)):c.push(Hh(l[f]))}else c=Hh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let CM=0;const Gh=new k;class Jn extends Ss{constructor(t=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Da,l=Da,c=Yn,f=Zs,d=Xi,m=Si,p=Jn.DEFAULT_ANISOTROPY,_=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=dl(),this.name="",this.source=new Rp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dd:t.x=t.x-Math.floor(t.x);break;case Da:t.x=t.x<0?0:1;break;case Ud:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dd:t.y=t.y-Math.floor(t.y);break;case Da:t.y=t.y<0?0:1;break;case Ud:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=jv;Jn.DEFAULT_ANISOTROPY=1;const Fp=class Fp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],T=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,C=(S+1)/2,P=(x+1)/2,U=(_+g)/4,I=(v+w)/4,E=(T+M)/4;return B>C&&B>P?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=U/s,c=I/s):C>P?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=U/l,c=E/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=I/c,l=E/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-T)*(M-T)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(M-T)/O,this.y=(v-w)/O,this.z=(g-_)/O,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fp.prototype.isVector4=!0;let mn=Fp;class wM extends Ss{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new mn(0,0,t,i),this.scissorTest=!1,this.viewport=new mn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Jn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class na extends wM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ay extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=class _u{constructor(t,i,s,l,c,f,d,m,p,_,v,g,S,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,S,T,w,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,S,T,w,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=g,x[3]=S,x[7]=T,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _u().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Nr.setFromMatrixColumn(t,0).length(),c=1/Nr.setFromMatrixColumn(t,1).length(),f=1/Nr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,T=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+T*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=T+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,T=p*_,w=p*v;i[0]=g+w*d,i[4]=T*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-T,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,T=p*_,w=p*v;i[0]=g-w*d,i[4]=-f*v,i[8]=T+S*d,i[1]=S+T*d,i[5]=f*_,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,T=d*_,w=d*v;i[0]=m*_,i[4]=T*p-S,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=S*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-g*v,i[8]=T*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*v+T,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,S=f*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=S*v-T,i[2]=T*v-S,i[6]=d*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UM,t,LM)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),us.crossVectors(s,gi),us.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),us.crossVectors(s,gi)),us.normalize(),Ac.crossVectors(gi,us),l[0]=us.x,l[4]=Ac.x,l[8]=gi.x,l[1]=us.y,l[5]=Ac.y,l[9]=gi.y,l[2]=us.z,l[6]=Ac.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],T=s[2],w=s[6],M=s[10],x=s[14],O=s[3],B=s[7],C=s[11],P=s[15],U=l[0],I=l[4],E=l[8],D=l[12],F=l[1],H=l[5],X=l[9],$=l[13],ct=l[2],K=l[6],z=l[10],V=l[14],tt=l[3],mt=l[7],bt=l[11],N=l[15];return c[0]=f*U+d*F+m*ct+p*tt,c[4]=f*I+d*H+m*K+p*mt,c[8]=f*E+d*X+m*z+p*bt,c[12]=f*D+d*$+m*V+p*N,c[1]=_*U+v*F+g*ct+S*tt,c[5]=_*I+v*H+g*K+S*mt,c[9]=_*E+v*X+g*z+S*bt,c[13]=_*D+v*$+g*V+S*N,c[2]=T*U+w*F+M*ct+x*tt,c[6]=T*I+w*H+M*K+x*mt,c[10]=T*E+w*X+M*z+x*bt,c[14]=T*D+w*$+M*V+x*N,c[3]=O*U+B*F+C*ct+P*tt,c[7]=O*I+B*H+C*K+P*mt,c[11]=O*E+B*X+C*z+P*bt,c[15]=O*D+B*$+C*V+P*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],T=t[3],w=t[7],M=t[11],x=t[15],O=m*S-p*g,B=d*S-p*v,C=d*g-m*v,P=f*S-p*_,U=f*g-m*_,I=f*v-d*_;return i*(w*O-M*B+x*C)-s*(T*O-M*P+x*U)+l*(T*B-w*P+x*I)-c*(T*C-w*U+M*I)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],d=t[9],m=t[2],p=t[6],_=t[10];return i*(f*_-d*p)-s*(c*_-d*m)+l*(c*p-f*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],T=t[12],w=t[13],M=t[14],x=t[15],O=i*d-s*f,B=i*m-l*f,C=i*p-c*f,P=s*m-l*d,U=s*p-c*d,I=l*p-c*m,E=_*w-v*T,D=_*M-g*T,F=_*x-S*T,H=v*M-g*w,X=v*x-S*w,$=g*x-S*M,ct=O*$-B*X+C*H+P*F-U*D+I*E;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ct;return t[0]=(d*$-m*X+p*H)*K,t[1]=(l*X-s*$-c*H)*K,t[2]=(w*I-M*U+x*P)*K,t[3]=(g*U-v*I-S*P)*K,t[4]=(m*F-f*$-p*D)*K,t[5]=(i*$-l*F+c*D)*K,t[6]=(M*C-T*I-x*B)*K,t[7]=(_*I-g*C+S*B)*K,t[8]=(f*X-d*F+p*E)*K,t[9]=(s*F-i*X-c*E)*K,t[10]=(T*U-w*C+x*O)*K,t[11]=(v*C-_*U-S*O)*K,t[12]=(d*D-f*H-m*E)*K,t[13]=(i*H-s*D+l*E)*K,t[14]=(w*B-T*P-M*O)*K,t[15]=(_*P-v*B+g*O)*K,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,S=c*_,T=c*v,w=f*_,M=f*v,x=d*v,O=m*p,B=m*_,C=m*v,P=s.x,U=s.y,I=s.z;return l[0]=(1-(w+x))*P,l[1]=(S+C)*P,l[2]=(T-B)*P,l[3]=0,l[4]=(S-C)*U,l[5]=(1-(g+x))*U,l[6]=(M+O)*U,l[7]=0,l[8]=(T+B)*I,l[9]=(M-O)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Nr.set(l[0],l[1],l[2]).length();const d=Nr.set(l[4],l[5],l[6]).length(),m=Nr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Bi.copy(this);const p=1/f,_=1/d,v=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,i.setFromRotationMatrix(Bi),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=ta,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let T,w;if(m)T=c/(f-c),w=f*c/(f-c);else if(d===ta)T=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===hl)T=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ta,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,w;if(m)T=1/(f-c),w=f/(f-c);else if(d===ta)T=-2/(f-c),w=-(f+c)/(f-c);else if(d===hl)T=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};_u.prototype.isMatrix4=!0;let $e=_u;const Nr=new k,Bi=new $e,UM=new k(0,0,0),LM=new k(1,1,1),us=new k,Ac=new k,gi=new k,G_=new $e,V_=new xs;class Pa{constructor(t=0,i=0,s=0,l=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return G_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(G_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return V_.setFromEuler(this),this.setFromQuaternion(V_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NM=0;const k_=new k,Or=new xs,Ea=new $e,Rc=new k,jo=new k,OM=new k,PM=new xs,X_=new k(1,0,0),W_=new k(0,1,0),q_=new k(0,0,1),Y_={type:"added"},IM={type:"removed"},Pr={type:"childadded",child:null},Vh={type:"childremoved",child:null};class wn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new k,i=new Pa,s=new xs,l=new k(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(X_,t)}rotateY(t){return this.rotateOnAxis(W_,t)}rotateZ(t){return this.rotateOnAxis(q_,t)}translateOnAxis(t,i){return k_.copy(t).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(X_,t)}translateY(t){return this.translateOnAxis(W_,t)}translateZ(t){return this.translateOnAxis(q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Rc.copy(t):Rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(jo,Rc,this.up):Ea.lookAt(Rc,jo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Or.setFromRotationMatrix(Ea),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IM),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,OM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,PM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new k(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class js extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new js;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=bM(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Xh(f,c,t+1/3),this.g=Xh(f,c,t),this.b=Xh(f,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=sy[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return De.workingToColorSpace(qn.copy(this),t),Math.round(ye(qn.r*255,0,255))*65536+Math.round(ye(qn.g*255,0,255))*256+Math.round(ye(qn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(qn.copy(this),i);const s=qn.r,l=qn.g,c=qn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(qn.copy(this),i),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=vi){De.workingToColorSpace(qn.copy(this),t);const i=qn.r,s=qn.g,l=qn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+i,fs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(fs),t.getHSL(Cc);const s=zh(fs.h,Cc.h,i),l=zh(fs.s,Cc.s,i),c=zh(fs.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new ce;ce.NAMES=sy;class ry extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new k,Ta=new k,Wh=new k,Aa=new k,Ir=new k,zr=new k,Z_=new k,qh=new k,Yh=new k,Zh=new k,Kh=new mn,jh=new mn,Qh=new mn;class Vi{constructor(t=new k,i=new k,s=new k){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Fi.subVectors(t,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Fi.subVectors(l,i),Ta.subVectors(s,i),Wh.subVectors(t,i);const f=Fi.dot(Fi),d=Fi.dot(Ta),m=Fi.dot(Wh),p=Ta.dot(Ta),_=Ta.dot(Wh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-d*_)*g,T=(f*_-d*m)*g;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(d,Aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Kh.setScalar(0),jh.setScalar(0),Qh.setScalar(0),Kh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,s),Qh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Kh,c.x),f.addScaledVector(jh,c.y),f.addScaledVector(Qh,c.z),f}static isFrontFacing(t,i,s,l){return Fi.subVectors(s,i),Ta.subVectors(t,i),Fi.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Fi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Ir.subVectors(l,s),zr.subVectors(c,s),qh.subVectors(t,s);const m=Ir.dot(qh),p=zr.dot(qh);if(m<=0&&p<=0)return i.copy(s);Yh.subVectors(t,l);const _=Ir.dot(Yh),v=zr.dot(Yh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Ir,f);Zh.subVectors(t,c);const S=Ir.dot(Zh),T=zr.dot(Zh);if(T>=0&&S<=T)return i.copy(c);const w=S*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(zr,d);const M=_*T-S*v;if(M<=0&&v-_>=0&&S-T>=0)return Z_.subVectors(c,l),d=(v-_)/(v-_+(S-T)),i.copy(l).addScaledVector(Z_,d);const x=1/(M+w+g);return f=w*x,d=g*x,i.copy(s).addScaledVector(Ir,f).addScaledVector(zr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $s{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Dc.subVectors(this.max,Qo),Br.subVectors(t.a,Qo),Fr.subVectors(t.b,Qo),Hr.subVectors(t.c,Qo),hs.subVectors(Fr,Br),ds.subVectors(Hr,Fr),Vs.subVectors(Br,Hr);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Vs.z,Vs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Vs.z,0,-Vs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Vs.y,Vs.x,0];return!Jh(i,Br,Fr,Hr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,Br,Fr,Hr,Dc))?!1:(Uc.crossVectors(hs,ds),i=[Uc.x,Uc.y,Uc.z],Jh(i,Br,Fr,Hr,Dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new k,new k,new k,new k,new k,new k,new k,new k],Hi=new k,wc=new $s,Br=new k,Fr=new k,Hr=new k,hs=new k,ds=new k,Vs=new k,Qo=new k,Dc=new k,Uc=new k,ks=new k;function Jh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ks.fromArray(r,c);const d=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),m=t.dot(ks),p=i.dot(ks),_=s.dot(ks);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Tn=new k,Lc=new kt;let BM=0;class Wi extends Ss{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=O_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(t),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(t),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=si(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),s=si(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),s=si(s,this.array),l=si(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),s=si(s,this.array),l=si(l,this.array),c=si(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==O_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class oy extends Wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ly extends Wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Fe extends Wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const FM=new $s,Jo=new k,$h=new k;class no{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):FM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add($h)),this.expandByPoint(Jo.copy(t.center).sub($h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let HM=0;const Ui=new $e,td=new wn,Gr=new k,_i=new $s,$o=new $s,Pn=new k;class Dn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yM(t)?ly:oy)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,i,s){return Ui.makeTranslation(t,i,s),this.applyMatrix4(Ui),this}scale(t,i,s){return Ui.makeScale(t,i,s),this.applyMatrix4(Ui),this}lookAt(t){return td.lookAt(t),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Fe(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];$o.setFromBufferAttribute(d),this.morphTargetsRelative?(Pn.addVectors(_i.min,$o.min),_i.expandByPoint(Pn),Pn.addVectors(_i.max,$o.max),_i.expandByPoint(Pn)):(_i.expandByPoint($o.min),_i.expandByPoint($o.max))}_i.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Pn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Pn.fromBufferAttribute(d,p),m&&(Gr.fromBufferAttribute(t,p),Pn.add(Gr)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Wi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],m=[];for(let E=0;E<s.count;E++)d[E]=new k,m[E]=new k;const p=new k,_=new k,v=new k,g=new kt,S=new kt,T=new kt,w=new k,M=new k;function x(E,D,F){p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,D),v.fromBufferAttribute(s,F),g.fromBufferAttribute(c,E),S.fromBufferAttribute(c,D),T.fromBufferAttribute(c,F),_.sub(p),v.sub(p),S.sub(g),T.sub(g);const H=1/(S.x*T.y-T.x*S.y);isFinite(H)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(H),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(H),d[E].add(w),d[D].add(w),d[F].add(w),m[E].add(M),m[D].add(M),m[F].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let E=0,D=O.length;E<D;++E){const F=O[E],H=F.start,X=F.count;for(let $=H,ct=H+X;$<ct;$+=3)x(t.getX($+0),t.getX($+1),t.getX($+2))}const B=new k,C=new k,P=new k,U=new k;function I(E){P.fromBufferAttribute(l,E),U.copy(P);const D=d[E];B.copy(D),B.sub(P.multiplyScalar(P.dot(D))).normalize(),C.crossVectors(U,D);const H=C.dot(m[E])<0?-1:1;f.setXYZW(E,B.x,B.y,B.z,H)}for(let E=0,D=O.length;E<D;++E){const F=O[E],H=F.start,X=F.count;for(let $=H,ct=H+X;$<ct;$+=3)I(t.getX($+0)),I(t.getX($+1)),I(t.getX($+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new k,c=new k,f=new k,d=new k,m=new k,p=new k,_=new k,v=new k;if(t)for(let g=0,S=t.count;g<S;g+=3){const T=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Pn.fromBufferAttribute(t,i),Pn.normalize(),t.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let S=0,T=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let x=0;x<_;x++)g[T++]=p[S++]}return new Wi(g,_,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GM=0;class Ms extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Kr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sd&&(s.blendSrc=this.blendSrc),this.blendDst!==Md&&(s.blendDst=this.blendDst),this.blendEquation!==qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new kt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ca=new k,ed=new k,Nc=new k,ps=new k,nd=new k,Oc=new k,id=new k;class yu{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ed.copy(t).add(i).multiplyScalar(.5),Nc.copy(i).sub(t).normalize(),ps.copy(this.origin).sub(ed);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Nc),d=ps.dot(this.direction),m=-ps.dot(Nc),p=ps.lengthSq(),_=Math.abs(1-f*f);let v,g,S,T;if(_>0)if(v=f*m-d,g=f*d-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ed).addScaledVector(Nc,g),S}intersectSphere(t,i){Ca.subVectors(t.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,s,l,c){nd.subVectors(i,t),Oc.subVectors(s,t),id.crossVectors(nd,Oc);let f=this.direction.dot(id),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ps.subVectors(this.origin,t);const m=d*this.direction.dot(Oc.crossVectors(ps,Oc));if(m<0)return null;const p=d*this.direction.dot(nd.cross(ps));if(p<0||m+p>f)return null;const _=-d*ps.dot(id);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fu extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const K_=new $e,Xs=new yu,Pc=new no,j_=new k,Ic=new k,zc=new k,Bc=new k,ad=new k,Fc=new k,Q_=new k,Hc=new k;class Se extends wn{constructor(t=new Dn,i=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Fc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(ad.fromBufferAttribute(v,t),f?Fc.addScaledVector(ad,_):Fc.addScaledVector(ad.sub(i),_))}i.add(Fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Xs.copy(t.ray).recast(t.near),!(Pc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Pc,j_)===null||Xs.origin.distanceToSquared(j_)>(t.far-t.near)**2))&&(K_.copy(c).invert(),Xs.copy(t.ray).applyMatrix4(K_),!(s.boundingBox!==null&&Xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Xs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const M=g[T],x=f[M.materialIndex],O=Math.max(M.start,S.start),B=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,P=B;C<P;C+=3){const U=d.getX(C),I=d.getX(C+1),E=d.getX(C+2);l=Gc(this,x,t,s,p,_,v,U,I,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=T,x=w;M<x;M+=3){const O=d.getX(M),B=d.getX(M+1),C=d.getX(M+2);l=Gc(this,f,t,s,p,_,v,O,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const M=g[T],x=f[M.materialIndex],O=Math.max(M.start,S.start),B=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let C=O,P=B;C<P;C+=3){const U=C,I=C+1,E=C+2;l=Gc(this,x,t,s,p,_,v,U,I,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=T,x=w;M<x;M+=3){const O=M,B=M+1,C=M+2;l=Gc(this,f,t,s,p,_,v,O,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function VM(r,t,i,s,l,c,f,d){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===ys,d),m===null)return null;Hc.copy(d),Hc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Ic),r.getVertexPosition(m,zc),r.getVertexPosition(p,Bc);const _=VM(r,t,i,s,Ic,zc,Bc,Q_);if(_){const v=new k;Vi.getBarycoord(Q_,Ic,zc,Bc,v),l&&(_.uv=Vi.getInterpolatedAttribute(l,d,m,p,v,new kt)),c&&(_.uv1=Vi.getInterpolatedAttribute(c,d,m,p,v,new kt)),f&&(_.normal=Vi.getInterpolatedAttribute(f,d,m,p,v,new k),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new k,materialIndex:0};Vi.getNormal(Ic,zc,Bc,g.normal),_.face=g,_.barycoord=v}return _}class cy extends Jn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Gn,_=Gn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J_ extends Wi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vr=new $e,$_=new $e,Vc=[],tv=new $s,kM=new $e,tl=new Se,el=new no;class XM extends Se{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new J_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,kM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new $s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Vr),tv.copy(t.boundingBox).applyMatrix4(Vr),this.boundingBox.union(tv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new no),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Vr),el.copy(t.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(el)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(tl.geometry=this.geometry,tl.material=this.material,tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(s),t.ray.intersectsSphere(el)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Vr),$_.multiplyMatrices(s,Vr),tl.matrixWorld=$_,tl.raycast(t,Vc);for(let f=0,d=Vc.length;f<d;f++){const m=Vc[f];m.instanceId=c,m.object=this,i.push(m)}Vc.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new J_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new cy(new Float32Array(l*this.count),l,this.count,Sp,ki));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;return c[m]=d,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sd=new k,WM=new k,qM=new de;class yi{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=sd.subVectors(s,i).cross(WM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(sd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||qM.getNormalMatrix(t),l=this.coplanarPoint(sd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new no,YM=new kt(.5,.5),kc=new k;class wp{constructor(t=new yi,i=new yi,s=new yi,l=new yi,c=new yi,f=new yi){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ta,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],T=c[8],w=c[9],M=c[10],x=c[11],O=c[12],B=c[13],C=c[14],P=c[15];if(l[0].setComponents(p-f,S-_,x-T,P-O).normalize(),l[1].setComponents(p+f,S+_,x+T,P+O).normalize(),l[2].setComponents(p+d,S+v,x+w,P+B).normalize(),l[3].setComponents(p-d,S-v,x-w,P-B).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(p-m,S-g,x-M,P-C).normalize();else if(l[4].setComponents(p-m,S-g,x-M,P-C).normalize(),i===ta)l[5].setComponents(p+m,S+g,x+M,P+C).normalize();else if(i===hl)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const i=YM.distanceTo(t.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cp extends Ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hu=new k,du=new k,ev=new $e,nl=new yu,Xc=new no,rd=new k,nv=new k;class iv extends wn{constructor(t=new Dn,i=new cp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)hu.fromBufferAttribute(i,l-1),du.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=hu.distanceTo(du);t.setAttribute("lineDistance",new Fe(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;ev.copy(l).invert(),nl.copy(t.ray).applyMatrix4(ev);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const S=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let w=S,M=T-1;w<M;w+=p){const x=_.getX(w),O=_.getX(w+1),B=Wc(this,t,nl,m,x,O,w);B&&i.push(B)}if(this.isLineLoop){const w=_.getX(T-1),M=_.getX(S),x=Wc(this,t,nl,m,w,M,T-1);x&&i.push(x)}}else{const S=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let w=S,M=T-1;w<M;w+=p){const x=Wc(this,t,nl,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=Wc(this,t,nl,m,T-1,S,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Wc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(hu.fromBufferAttribute(d,l),du.fromBufferAttribute(d,c),i.distanceSqToSegment(hu,du,rd,nv)>s)return;rd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(rd);if(!(p<t.near||p>t.far))return{distance:p,point:nv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class uy extends Jn{constructor(t=[],i=Qs,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class to extends Jn{constructor(t,i,s=ia,l,c,f,d=Gn,m=Gn,p,_=Oa,v=1){if(_!==Oa&&_!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZM extends to{constructor(t,i=ia,s=Qs,l,c,f=Gn,d=Gn,m,p=Oa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fy extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class io extends Dn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,s,i,t,f,c,0),T("z","y","x",1,-1,s,i,-t,f,c,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(v,2));function T(w,M,x,O,B,C,P,U,I,E,D){const F=C/I,H=P/E,X=C/2,$=P/2,ct=U/2,K=I+1,z=E+1;let V=0,tt=0;const mt=new k;for(let bt=0;bt<z;bt++){const N=bt*H-$;for(let j=0;j<K;j++){const St=j*F-X;mt[w]=St*O,mt[M]=N*B,mt[x]=ct,p.push(mt.x,mt.y,mt.z),mt[w]=0,mt[M]=0,mt[x]=U>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push(j/I),v.push(1-bt/E),V+=1}}for(let bt=0;bt<E;bt++)for(let N=0;N<I;N++){const j=g+N+K*bt,St=g+N+K*(bt+1),Rt=g+(N+1)+K*(bt+1),zt=g+(N+1)+K*bt;m.push(j,St,zt),m.push(St,Rt,zt),tt+=6}d.addGroup(S,tt,D),S+=tt,g+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Dp extends Dn{constructor(t=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const f=[],d=[],m=[],p=[],_=i/2,v=Math.PI/2*t,g=i,S=2*v+g,T=s*2+c,w=l+1,M=new k,x=new k;for(let O=0;O<=T;O++){let B=0,C=0,P=0,U=0;if(O<=s){const D=O/s,F=D*Math.PI/2;C=-_-t*Math.cos(F),P=t*Math.sin(F),U=-t*Math.cos(F),B=D*v}else if(O<=s+c){const D=(O-s)/c;C=-_+D*i,P=t,U=0,B=v+D*g}else{const D=(O-s-c)/s,F=D*Math.PI/2;C=_+t*Math.sin(F),P=t*Math.cos(F),U=t*Math.sin(F),B=v+g+D*v}const I=Math.max(0,Math.min(1,B/S));let E=0;O===0?E=.5/l:O===T&&(E=-.5/l);for(let D=0;D<=l;D++){const F=D/l,H=F*Math.PI*2,X=Math.sin(H),$=Math.cos(H);x.x=-P*$,x.y=C,x.z=P*X,d.push(x.x,x.y,x.z),M.set(-P*$,U,P*X),M.normalize(),m.push(M.x,M.y,M.z),p.push(F+E,I)}if(O>0){const D=(O-1)*w;for(let F=0;F<l;F++){const H=D+F,X=D+F+1,$=O*w+F,ct=O*w+F+1;f.push(H,X,$),f.push(X,ct,$)}}}this.setIndex(f),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(m,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dp(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class pu extends Dn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],f=[],d=[],m=[],p=new k,_=new kt;f.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let v=0,g=3;v<=i;v++,g+=3){const S=s+v/i*l;p.x=t*Math.cos(S),p.y=t*Math.sin(S),f.push(p.x,p.y,p.z),d.push(0,0,1),_.x=(f[g]/t+1)/2,_.y=(f[g+1]/t+1)/2,m.push(_.x,_.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ol extends Dn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],S=[];let T=0;const w=[],M=s/2;let x=0;O(),f===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(_),this.setAttribute("position",new Fe(v,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(S,2));function O(){const C=new k,P=new k;let U=0;const I=(i-t)/s;for(let E=0;E<=c;E++){const D=[],F=E/c,H=F*(i-t)+t;for(let X=0;X<=l;X++){const $=X/l,ct=$*m+d,K=Math.sin(ct),z=Math.cos(ct);P.x=H*K,P.y=-F*s+M,P.z=H*z,v.push(P.x,P.y,P.z),C.set(K,I,z).normalize(),g.push(C.x,C.y,C.z),S.push($,1-F),D.push(T++)}w.push(D)}for(let E=0;E<l;E++)for(let D=0;D<c;D++){const F=w[D][E],H=w[D+1][E],X=w[D+1][E+1],$=w[D][E+1];(t>0||D!==0)&&(_.push(F,H,$),U+=3),(i>0||D!==c-1)&&(_.push(H,X,$),U+=3)}p.addGroup(x,U,0),x+=U}function B(C){const P=T,U=new kt,I=new k;let E=0;const D=C===!0?t:i,F=C===!0?1:-1;for(let X=1;X<=l;X++)v.push(0,M*F,0),g.push(0,F,0),S.push(.5,.5),T++;const H=T;for(let X=0;X<=l;X++){const ct=X/l*m+d,K=Math.cos(ct),z=Math.sin(ct);I.x=D*z,I.y=M*F,I.z=D*K,v.push(I.x,I.y,I.z),g.push(0,F,0),U.x=K*.5+.5,U.y=z*.5*F+.5,S.push(U.x,U.y),T++}for(let X=0;X<l;X++){const $=P+X,ct=H+X;C===!0?_.push(ct,ct+1,$):_.push(ct+1,ct,$),E+=3}p.addGroup(x,E,C===!0?1:2),x+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ia{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],g=s[l+1]-_,S=(f-_)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new kt:new k);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new k,l=[],c=[],f=[],d=new k,m=new $e;for(let S=0;S<=t;S++){const T=S/t;l[S]=this.getTangentAt(T,new k)}c[0]=new k,f[0]=new k;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),v<=p&&(p=v,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(ye(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,T))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(ye(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],S*T)),f[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hy extends Ia{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new kt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=m-this.aX,S=p-this.aY;m=g*_-S*v+this.aX,p=g*v+S*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class KM extends hy{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Up(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,v){let g=(f-c)/p-(d-c)/(p+_)+(d-f)/_,S=(d-f)/_-(m-f)/(_+v)+(m-d)/v;g*=_,S*=_,l(f,d,g,S)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const av=new k,sv=new k,od=new Up,ld=new Up,cd=new Up;class dy extends Ia{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new k){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(sv.subVectors(l[0],l[1]).add(l[0]),p=sv);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(av.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=av),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);w<1e-4&&(w=1),T<1e-4&&(T=w),M<1e-4&&(M=w),od.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,T,w,M),ld.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,T,w,M),cd.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,T,w,M)}else this.curveType==="catmullrom"&&(od.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),ld.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),cd.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return s.set(od.calc(m),ld.calc(m),cd.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rv(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*d+c*r+i}function jM(r,t){const i=1-r;return i*i*t}function QM(r,t){return 2*(1-r)*r*t}function JM(r,t){return r*r*t}function ll(r,t,i,s){return jM(r,t)+QM(r,i)+JM(r,s)}function $M(r,t){const i=1-r;return i*i*i*t}function tb(r,t){const i=1-r;return 3*i*i*r*t}function eb(r,t){return 3*(1-r)*r*r*t}function nb(r,t){return r*r*r*t}function cl(r,t,i,s,l){return $M(r,t)+tb(r,i)+eb(r,s)+nb(r,l)}class ib extends Ia{constructor(t=new kt,i=new kt,s=new kt,l=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new kt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(cl(t,l.x,c.x,f.x,d.x),cl(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ab extends Ia{constructor(t=new k,i=new k,s=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new k){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(cl(t,l.x,c.x,f.x,d.x),cl(t,l.y,c.y,f.y,d.y),cl(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sb extends Ia{constructor(t=new kt,i=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new kt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new kt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rb extends Ia{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ob extends Ia{constructor(t=new kt,i=new kt,s=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new kt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(ll(t,l.x,c.x,f.x),ll(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class py extends Ia{constructor(t=new k,i=new k,s=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new k){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(ll(t,l.x,c.x,f.x),ll(t,l.y,c.y,f.y),ll(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lb extends Ia{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new kt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],_=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(rv(d,m.x,p.x,_.x,v.x),rv(d,m.y,p.y,_.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new kt().fromArray(l))}return this}}var cb=Object.freeze({__proto__:null,ArcCurve:KM,CatmullRomCurve3:dy,CubicBezierCurve:ib,CubicBezierCurve3:ab,EllipseCurve:hy,LineCurve:sb,LineCurve3:rb,QuadraticBezierCurve:ob,QuadraticBezierCurve3:py,SplineCurve:lb});class xu extends Dn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,S=[],T=[],w=[],M=[];for(let x=0;x<_;x++){const O=x*g-f;for(let B=0;B<p;B++){const C=B*v-c;T.push(C,-O,0),w.push(0,0,1),M.push(B/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const B=O+p*x,C=O+p*(x+1),P=O+1+p*(x+1),U=O+1+p*x;S.push(B,C,U),S.push(C,P,U)}this.setIndex(S),this.setAttribute("position",new Fe(T,3)),this.setAttribute("normal",new Fe(w,3)),this.setAttribute("uv",new Fe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Su extends Dn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let v=t;const g=(i-t)/l,S=new k,T=new kt;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const x=c+M/s*f;S.x=v*Math.cos(x),S.y=v*Math.sin(x),m.push(S.x,S.y,S.z),p.push(0,0,1),T.x=(S.x/i+1)/2,T.y=(S.y/i+1)/2,_.push(T.x,T.y)}v+=g}for(let w=0;w<l;w++){const M=w*(s+1);for(let x=0;x<s;x++){const O=x+M,B=O,C=O+s+1,P=O+s+2,U=O+1;d.push(B,C,U),d.push(C,P,U)}}this.setIndex(d),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(p,3)),this.setAttribute("uv",new Fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gi extends Dn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],v=new k,g=new k,S=[],T=[],w=[],M=[];for(let x=0;x<=s;x++){const O=[],B=x/s,C=f+B*d,P=t*Math.cos(C),U=Math.sqrt(t*t-P*P);let I=0;x===0&&f===0?I=.5/i:x===s&&m===Math.PI&&(I=-.5/i);for(let E=0;E<=i;E++){const D=E/i,F=l+D*c;v.x=-U*Math.cos(F),v.y=P,v.z=U*Math.sin(F),T.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(D+I,1-B),O.push(p++)}_.push(O)}for(let x=0;x<s;x++)for(let O=0;O<i;O++){const B=_[x][O+1],C=_[x][O],P=_[x+1][O],U=_[x+1][O+1];(x!==0||f>0)&&S.push(B,C,U),(x!==s-1||m<Math.PI)&&S.push(C,P,U)}this.setIndex(S),this.setAttribute("position",new Fe(T,3)),this.setAttribute("normal",new Fe(w,3)),this.setAttribute("uv",new Fe(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mu extends Dn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],v=[],g=new k,S=new k,T=new k;for(let w=0;w<=s;w++){const M=f+w/s*d;for(let x=0;x<=l;x++){const O=x/l*c;S.x=(t+i*Math.cos(M))*Math.cos(O),S.y=(t+i*Math.cos(M))*Math.sin(O),S.z=i*Math.sin(M),p.push(S.x,S.y,S.z),g.x=t*Math.cos(O),g.y=t*Math.sin(O),T.subVectors(S,g).normalize(),_.push(T.x,T.y,T.z),v.push(x/l),v.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const x=(l+1)*w+M-1,O=(l+1)*(w-1)+M-1,B=(l+1)*(w-1)+M,C=(l+1)*w+M;m.push(x,O,C),m.push(O,B,C)}this.setIndex(m),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lp extends Dn{constructor(t=new py(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new k,m=new k,p=new kt;let _=new k;const v=[],g=[],S=[],T=[];w(),this.setIndex(T),this.setAttribute("position",new Fe(v,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(S,2));function w(){for(let B=0;B<i;B++)M(B);M(c===!1?i:0),O(),x()}function M(B){_=t.getPointAt(B/i,_);const C=f.normals[B],P=f.binormals[B];for(let U=0;U<=l;U++){const I=U/l*Math.PI*2,E=Math.sin(I),D=-Math.cos(I);m.x=D*C.x+E*P.x,m.y=D*C.y+E*P.y,m.z=D*C.z+E*P.z,m.normalize(),g.push(m.x,m.y,m.z),d.x=_.x+s*m.x,d.y=_.y+s*m.y,d.z=_.z+s*m.z,v.push(d.x,d.y,d.z)}}function x(){for(let B=1;B<=i;B++)for(let C=1;C<=l;C++){const P=(l+1)*(B-1)+(C-1),U=(l+1)*B+(C-1),I=(l+1)*B+C,E=(l+1)*(B-1)+C;T.push(P,U,E),T.push(U,I,E)}}function O(){for(let B=0;B<=i;B++)for(let C=0;C<=l;C++)p.x=B/i,p.y=C/l,S.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lp(new cb[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ub extends Ms{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function eo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(ov(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(ov(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function jn(r){const t={};for(let i=0;i<r.length;i++){const s=eo(r[i]);for(const l in s)t[l]=s[l]}return t}function ov(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function fb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function my(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const hb={clone:eo,merge:jn};var db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=db,this.fragmentShader=pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=fb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ce().setHex(l.value);break;case"v2":this.uniforms[s].value=new kt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new k().fromArray(l.value);break;case"v4":this.uniforms[s].value=new mn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new de().fromArray(l.value);break;case"m4":this.uniforms[s].value=new $e().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class mb extends aa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gu extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wa extends gu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class gb extends Ms{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=gp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _b extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vb extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Np extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class yb extends Np{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ud=new $e,lv=new k,cv=new k;class gy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;lv.setFromMatrixPosition(t.matrixWorld),i.position.copy(lv),cv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(cv),i.updateMatrixWorld(),ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===hl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ud)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new k,Yc=new xs,Qi=new k;class _y extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qc,Yc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Yc,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(qc,Yc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Yc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new k,uv=new kt,fv=new kt;class xi extends _y{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,i){return this.getViewBounds(t,uv,fv),i.subVectors(fv,uv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(iu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xb extends gy{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0}}class Sb extends Np{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new xb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Op extends _y{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Mb extends gy{constructor(){super(new Op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends Np{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Mb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const kr=-90,Xr=1;class bb extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(kr,Xr,t,i);l.layers=this.layers,this.add(l);const c=new xi(kr,Xr,t,i);c.layers=this.layers,this.add(c);const f=new xi(kr,Xr,t,i);f.layers=this.layers,this.add(f);const d=new xi(kr,Xr,t,i);d.layers=this.layers,this.add(d);const m=new xi(kr,Xr,t,i);m.layers=this.layers,this.add(m);const p=new xi(kr,Xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Eb extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const hv=new $e;class Tb{constructor(t,i,s=0,l=1/0){this.ray=new yu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ue("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return hv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hv),this}intersectObject(t,i=!0,s=[]){return up(t,this,s,i),s.sort(dv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)up(t[l],this,s,i);return s.sort(dv),s}}function dv(r,t){return r.distance-t.distance}function up(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)up(c[f],t,i,!0)}}class Ab{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class pv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ye(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hp=class Hp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Hp.prototype.isMatrix2=!0;let mv=Hp;class Rb extends Ss{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function gv(r,t,i,s){const l=Cb(s);switch(i){case ey:return r*t;case Sp:return r*t/l.components*l.byteLength;case Mp:return r*t/l.components*l.byteLength;case Js:return r*t*2/l.components*l.byteLength;case bp:return r*t*2/l.components*l.byteLength;case ny:return r*t*3/l.components*l.byteLength;case Xi:return r*t*4/l.components*l.byteLength;case Ep:return r*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:case Pd:return Math.max(r,16)*Math.max(t,8)/4;case Ld:case Od:return Math.max(r,8)*Math.max(t,8)/2;case Id:case zd:case Fd:case Hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bd:case su:case Gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $d:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ep:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case np:case ip:case ap:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sp:case rp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ru:case op:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Cb(r){switch(r){case Si:case Qv:return{byteLength:1,components:1};case ul:case Jv:case Na:return{byteLength:2,components:1};case yp:case xp:return{byteLength:2,components:4};case ia:case vp:case ki:return{byteLength:4,components:1};case $v:case ty:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);function vy(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wb(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
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
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ib=`#ifdef USE_AOMAP
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
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
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
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Xb=`#ifdef USE_BUMPMAP
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$b=`#define PI 3.141592653589793
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
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eE=`vec3 transformedNormal = objectNormal;
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
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
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
}`,vE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ME=`#ifdef USE_ENVMAP
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
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
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
#endif`,CE=`uniform sampler2D dfgLUT;
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
}`,wE=`
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
#endif`,DE=`#if defined( RE_IndirectDiffuse )
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
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HE=`#if defined( USE_POINTS_UV )
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
#endif`,GE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
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
#endif`,YE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,t1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m1=`float getShadowMask() {
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
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,z1=`#if DEPTH_PACKING == 3200
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
}`,B1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
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
}`,k1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,W1=`uniform vec3 diffuse;
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,Z1=`#define MATCAP
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
}`,K1=`#define MATCAP
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
}`,j1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,J1=`#define PHONG
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
}`,$1=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,eT=`#define STANDARD
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
}`,nT=`#define TOON
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
}`,iT=`#define TOON
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
}`,aT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,oT=`uniform vec3 color;
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
}`,lT=`uniform float rotation;
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
}`,cT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Lb,alphamap_pars_fragment:Nb,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:Ib,aomap_pars_fragment:zb,batching_pars_vertex:Bb,batching_vertex:Fb,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Yb,clipping_planes_vertex:Zb,color_fragment:Kb,color_pars_fragment:jb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:tE,defaultnormal_vertex:eE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:aE,emissivemap_pars_fragment:sE,colorspace_fragment:rE,colorspace_pars_fragment:oE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:ME,envmap_vertex:hE,fog_vertex:dE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:vE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:xE,lights_pars_begin:SE,lights_toon_fragment:bE,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:AE,lights_physical_fragment:RE,lights_physical_pars_fragment:CE,lights_fragment_begin:wE,lights_fragment_maps:DE,lights_fragment_end:UE,lightprobes_pars_fragment:LE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:OE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:IE,map_fragment:zE,map_pars_fragment:BE,map_particle_fragment:FE,map_particle_pars_fragment:HE,metalnessmap_fragment:GE,metalnessmap_pars_fragment:VE,morphinstance_vertex:kE,morphcolor_vertex:XE,morphnormal_vertex:WE,morphtarget_pars_vertex:qE,morphtarget_vertex:YE,normal_fragment_begin:ZE,normal_fragment_maps:KE,normal_pars_fragment:jE,normal_pars_vertex:QE,normal_vertex:JE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:t1,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:a1,packing:s1,premultiplied_alpha_fragment:r1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:d1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:_1,skinning_vertex:v1,skinnormal_vertex:y1,specularmap_fragment:x1,specularmap_pars_fragment:S1,tonemapping_fragment:M1,tonemapping_pars_fragment:b1,transmission_fragment:E1,transmission_pars_fragment:T1,uv_pars_fragment:A1,uv_pars_vertex:R1,uv_vertex:C1,worldpos_vertex:w1,background_vert:D1,background_frag:U1,backgroundCube_vert:L1,backgroundCube_frag:N1,cube_vert:O1,cube_frag:P1,depth_vert:I1,depth_frag:z1,distance_vert:B1,distance_frag:F1,equirect_vert:H1,equirect_frag:G1,linedashed_vert:V1,linedashed_frag:k1,meshbasic_vert:X1,meshbasic_frag:W1,meshlambert_vert:q1,meshlambert_frag:Y1,meshmatcap_vert:Z1,meshmatcap_frag:K1,meshnormal_vert:j1,meshnormal_frag:Q1,meshphong_vert:J1,meshphong_frag:$1,meshphysical_vert:tT,meshphysical_frag:eT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:aT,points_frag:sT,shadow_vert:rT,shadow_frag:oT,sprite_vert:lT,sprite_frag:cT},Ft={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},$i={basic:{uniforms:jn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:jn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:jn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:jn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:jn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ce(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:jn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:jn([Ft.points,Ft.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:jn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:jn([Ft.common,Ft.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:jn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:jn([Ft.sprite,Ft.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:jn([Ft.common,Ft.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:jn([Ft.lights,Ft.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};$i.physical={uniforms:jn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Zc={r:0,b:0,g:0},uT=new $e,yy=new de;yy.set(-1,0,0,0,1,0,0,0,1);function fT(r,t,i,s,l,c){const f=new ce(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function S(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){const C=O.backgroundBlurriness>0;B=t.get(B,C)}return B}function T(O){let B=!1;const C=S(O);C===null?M(f,d):C&&C.isColor&&(M(C,1),B=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(O,B){const C=S(B);C&&(C.isCubeTexture||C.mapping===vu)?(p===void 0&&(p=new Se(new io(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:eo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(yy),p.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,(_!==C||v!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Se(new xu(2,2),new aa({name:"BackgroundMaterial",uniforms:eo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function M(O,B){O.getRGB(Zc,my(r)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,B,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(O,B=1){f.set(O),d=B,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,M(f,d)},render:T,addToRenderList:w,dispose:x}}function hT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(H,X,$,ct,K){let z=!1;const V=v(H,ct,$,X);c!==V&&(c=V,p(c.object)),z=S(H,ct,$,K),z&&T(H,ct,$,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,C(H,X,$,ct),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function v(H,X,$,ct){const K=ct.wireframe===!0;let z=s[X.id];z===void 0&&(z={},s[X.id]=z);const V=H.isInstancedMesh===!0?H.id:0;let tt=z[V];tt===void 0&&(tt={},z[V]=tt);let mt=tt[$.id];mt===void 0&&(mt={},tt[$.id]=mt);let bt=mt[K];return bt===void 0&&(bt=g(m()),mt[K]=bt),bt}function g(H){const X=[],$=[],ct=[];for(let K=0;K<i;K++)X[K]=0,$[K]=0,ct[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:ct,object:H,attributes:{},index:null}}function S(H,X,$,ct){const K=c.attributes,z=X.attributes;let V=0;const tt=$.getAttributes();for(const mt in tt)if(tt[mt].location>=0){const N=K[mt];let j=z[mt];if(j===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;V++}return c.attributesNum!==V||c.index!==ct}function T(H,X,$,ct){const K={},z=X.attributes;let V=0;const tt=$.getAttributes();for(const mt in tt)if(tt[mt].location>=0){let N=z[mt];N===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const j={};j.attribute=N,N&&N.data&&(j.data=N.data),K[mt]=j,V++}c.attributes=K,c.attributesNum=V,c.index=ct}function w(){const H=c.newAttributes;for(let X=0,$=H.length;X<$;X++)H[X]=0}function M(H){x(H,0)}function x(H,X){const $=c.newAttributes,ct=c.enabledAttributes,K=c.attributeDivisors;$[H]=1,ct[H]===0&&(r.enableVertexAttribArray(H),ct[H]=1),K[H]!==X&&(r.vertexAttribDivisor(H,X),K[H]=X)}function O(){const H=c.newAttributes,X=c.enabledAttributes;for(let $=0,ct=X.length;$<ct;$++)X[$]!==H[$]&&(r.disableVertexAttribArray($),X[$]=0)}function B(H,X,$,ct,K,z,V){V===!0?r.vertexAttribIPointer(H,X,$,K,z):r.vertexAttribPointer(H,X,$,ct,K,z)}function C(H,X,$,ct){w();const K=ct.attributes,z=$.getAttributes(),V=X.defaultAttributeValues;for(const tt in z){const mt=z[tt];if(mt.location>=0){let bt=K[tt];if(bt===void 0&&(tt==="instanceMatrix"&&H.instanceMatrix&&(bt=H.instanceMatrix),tt==="instanceColor"&&H.instanceColor&&(bt=H.instanceColor)),bt!==void 0){const N=bt.normalized,j=bt.itemSize,St=t.get(bt);if(St===void 0)continue;const Rt=St.buffer,zt=St.type,st=St.bytesPerElement,vt=zt===r.INT||zt===r.UNSIGNED_INT||bt.gpuType===vp;if(bt.isInterleavedBufferAttribute){const Et=bt.data,Ht=Et.stride,ae=bt.offset;if(Et.isInstancedInterleavedBuffer){for(let te=0;te<mt.locationSize;te++)x(mt.location+te,Et.meshPerAttribute);H.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let te=0;te<mt.locationSize;te++)M(mt.location+te);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let te=0;te<mt.locationSize;te++)B(mt.location+te,j/mt.locationSize,zt,N,Ht*st,(ae+j/mt.locationSize*te)*st,vt)}else{if(bt.isInstancedBufferAttribute){for(let Et=0;Et<mt.locationSize;Et++)x(mt.location+Et,bt.meshPerAttribute);H.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Et=0;Et<mt.locationSize;Et++)M(mt.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Et=0;Et<mt.locationSize;Et++)B(mt.location+Et,j/mt.locationSize,zt,N,j*st,j/mt.locationSize*Et*st,vt)}}else if(V!==void 0){const N=V[tt];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(mt.location,N);break;case 3:r.vertexAttrib3fv(mt.location,N);break;case 4:r.vertexAttrib4fv(mt.location,N);break;default:r.vertexAttrib1fv(mt.location,N)}}}}O()}function P(){D();for(const H in s){const X=s[H];for(const $ in X){const ct=X[$];for(const K in ct){const z=ct[K];for(const V in z)_(z[V].object),delete z[V];delete ct[K]}}delete s[H]}}function U(H){if(s[H.id]===void 0)return;const X=s[H.id];for(const $ in X){const ct=X[$];for(const K in ct){const z=ct[K];for(const V in z)_(z[V].object),delete z[V];delete ct[K]}}delete s[H.id]}function I(H){for(const X in s){const $=s[X];for(const ct in $){const K=$[ct];if(K[H.id]===void 0)continue;const z=K[H.id];for(const V in z)_(z[V].object),delete z[V];delete K[H.id]}}}function E(H){for(const X in s){const $=s[X],ct=H.isInstancedMesh===!0?H.id:0,K=$[ct];if(K!==void 0){for(const z in K){const V=K[z];for(const tt in V)_(V[tt].object),delete V[tt];delete K[z]}delete $[ct],Object.keys($).length===0&&delete s[X]}}}function D(){F(),f=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:O}}function dT(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function pT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Xi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const E=I===Na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Si&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!E)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(oe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:C,maxSamples:P,samples:U}}function mT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new yi,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,x=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const O=c?0:s,B=O*4;let C=x.clippingState||null;m.value=C,C=_(T,g,B,S);for(let P=0;P!==B;++P)C[P]=i[P];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,T){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const x=S+w*4,O=g.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let B=0,C=S;B!==w;++B,C+=4)f.copy(v[B]).applyMatrix4(O,d),f.normal.toArray(M,C),M[C+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const vs=4,_v=[.125,.215,.35,.446,.526,.582],Ys=20,gT=256,il=new Op,vv=new ce;let hd=null,dd=0,pd=0,md=!1;const _T=new k;class fp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=_T}=c;hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hd,dd,pd),this._renderer.xr.enabled=md,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Na,format:Xi,colorSpace:lu,depthBuffer:!1},l=yv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vT(c)),this._blurMaterial=xT(c,t,i),this._ggxMaterial=yT(c,t,i)}return l}_compileMaterial(t){const i=new Se(new Dn,t);this._renderer.compile(i,il)}_sceneToCubeUV(t,i,s,l,c){const m=new xi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(vv),v.toneMapping=ea,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new io,new fu({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,x=!0):(M.color.copy(vv),x=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):C===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const P=this._cubeSize;Wr(l,C*P,B>2?P:0,P,P),v.setRenderTarget(l),x&&v.render(w,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Qs||t.mapping===$r;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,il)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-vs?s-T+vs:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=T-i,Wr(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(d,il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Wr(t,M,x,3*w,2*w),l.setRenderTarget(t),l.render(d,il)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ys-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):Ys;M>Ys&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ys}`);const x=[];let O=0;for(let I=0;I<Ys;++I){const E=I/w,D=Math.exp(-E*E/2);x.push(D),I===0?O+=D:I<M&&(O+=2*D)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:B}=this;g.dTheta.value=T,g.mipInt.value=B-s;const C=this._sizeLods[l],P=3*C*(l>B-vs?l-B+vs:0),U=4*(this._cubeSize-C);Wr(i,P,U,3*C,2*C),m.setRenderTarget(i),m.render(v,il)}}function vT(r){const t=[],i=[],s=[];let l=r;const c=r-vs+1+_v.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-vs?m=_v[f-r+vs-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,w=3,M=2,x=1,O=new Float32Array(w*T*S),B=new Float32Array(M*T*S),C=new Float32Array(x*T*S);for(let U=0;U<S;U++){const I=U%3*2/3-1,E=U>2?0:-1,D=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];O.set(D,w*T*U),B.set(g,M*T*U);const F=[U,U,U,U,U,U];C.set(F,x*T*U)}const P=new Dn;P.setAttribute("position",new Wi(O,w)),P.setAttribute("uv",new Wi(B,M)),P.setAttribute("faceIndex",new Wi(C,x)),s.push(new Se(P,null)),l>vs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function yv(r,t,i){const s=new na(r,t,i);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Wr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function yT(r,t,i){return new aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function xT(r,t,i){const s=new Float32Array(Ys),l=new k(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function xv(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Sv(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}class xy extends na{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new uy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new io(5,5,5),c=new aa({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ua});c.uniforms.tEquirect.value=i;const f=new Se(l,c),d=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Yn),new bb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function ST(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Oh||S===Ph)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new xy(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,T=S===Oh||S===Ph,w=S===Qs||S===$r;if(T||w){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new fp(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const O=g.image;return T&&O&&O.height>0||w&&O&&m(O)?(s===null&&(s=new fp(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,S){return S===Oh?g.mapping=Qs:S===Ph&&(g.mapping=$r),g}function m(g){let S=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function MT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jr("WebGLRenderer: "+s+" extension not supported."),l}}}function bT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(S!==null){const O=S.array;w=S.version;for(let B=0,C=O.length;B<C;B+=3){const P=O[B+0],U=O[B+1],I=O[B+2];g.push(P,U,U,I,I,P)}}else{const O=T.array;w=T.version;for(let B=0,C=O.length/3-1;B<C;B+=3){const P=B+0,U=B+1,I=B+2;g.push(P,U,U,I,I,P)}}const M=new(T.count>=65535?ly:oy)(g,1);M.version=w;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function ET(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*f),i.update(g,s,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(s,g,c,v*f,S),i.update(g,s,S))}function _(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,S);let w=0;for(let M=0;M<S;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function TT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function AT(r,t,i){const s=new WeakMap,l=new mn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let F=function(){E.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var S=F;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let P=d.attributes.position.count*C,U=1;P>t.maxTextureSize&&(U=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const I=new Float32Array(P*U*4*v),E=new ay(I,P,U,v);E.type=ki,E.needsUpdate=!0;const D=C*4;for(let H=0;H<v;H++){const X=x[H],$=O[H],ct=B[H],K=P*U*4*H;for(let z=0;z<X.count;z++){const V=z*D;T===!0&&(l.fromBufferAttribute(X,z),I[K+V+0]=l.x,I[K+V+1]=l.y,I[K+V+2]=l.z,I[K+V+3]=0),w===!0&&(l.fromBufferAttribute($,z),I[K+V+4]=l.x,I[K+V+5]=l.y,I[K+V+6]=l.z,I[K+V+7]=0),M===!0&&(l.fromBufferAttribute(ct,z),I[K+V+8]=l.x,I[K+V+9]=l.y,I[K+V+10]=l.z,I[K+V+11]=ct.itemSize===4?l.w:1)}}g={count:v,texture:E,size:new kt(P,U)},s.set(d,g),d.addEventListener("dispose",F)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function RT(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const CT={[Xv]:"LINEAR_TONE_MAPPING",[Wv]:"REINHARD_TONE_MAPPING",[qv]:"CINEON_TONE_MAPPING",[_p]:"ACES_FILMIC_TONE_MAPPING",[Zv]:"AGX_TONE_MAPPING",[Kv]:"NEUTRAL_TONE_MAPPING",[Yv]:"CUSTOM_TONE_MAPPING"};function wT(r,t,i,s,l,c){const f=new na(t,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new to(t,i):void 0}),d=new na(t,i,{type:Na,depthBuffer:!1,stencilBuffer:!1}),m=new Dn;m.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const p=new mb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Se(m,p),v=new Op(-1,1,1,-1,0,1);let g=null,S=null,T=!1,w,M=null,x=[],O=!1;this.setSize=function(B,C){f.setSize(B,C),d.setSize(B,C);for(let P=0;P<x.length;P++){const U=x[P];U.setSize&&U.setSize(B,C)}},this.setEffects=function(B){x=B,O=x.length>0&&x[0].isRenderPass===!0;const C=f.width,P=f.height;for(let U=0;U<x.length;U++){const I=x[U];I.setSize&&I.setSize(C,P)}},this.begin=function(B,C){if(T||B.toneMapping===ea&&x.length===0)return!1;if(M=C,C!==null){const P=C.width,U=C.height;(f.width!==P||f.height!==U)&&this.setSize(P,U)}return O===!1&&B.setRenderTarget(f),w=B.toneMapping,B.toneMapping=ea,!0},this.hasRenderPass=function(){return O},this.end=function(B,C){B.toneMapping=w,T=!0;let P=f,U=d;for(let I=0;I<x.length;I++){const E=x[I];if(E.enabled!==!1&&(E.render(B,U,P,C),E.needsSwap!==!1)){const D=P;P=U,U=D}}if(g!==B.outputColorSpace||S!==B.toneMapping){g=B.outputColorSpace,S=B.toneMapping,p.defines={},De.getTransfer(g)===qe&&(p.defines.SRGB_TRANSFER="");const I=CT[S];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,B.setRenderTarget(M),B.render(_,v),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),d.dispose(),m.dispose(),p.dispose()}}const Sy=new Jn,hp=new to(1,1),My=new ay,by=new DM,Ey=new uy,Mv=[],bv=[],Ev=new Float32Array(16),Tv=new Float32Array(9),Av=new Float32Array(4);function ao(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Mv[l];if(c===void 0&&(c=new Float32Array(l),Mv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Un(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Ln(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function bu(r,t){let i=bv[t];i===void 0&&(i=new Int32Array(t),bv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function DT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function UT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;r.uniform2fv(this.addr,t),Ln(i,t)}}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Un(i,t))return;r.uniform3fv(this.addr,t),Ln(i,t)}}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;r.uniform4fv(this.addr,t),Ln(i,t)}}function OT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Un(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ln(i,t)}else{if(Un(i,s))return;Av.set(s),r.uniformMatrix2fv(this.addr,!1,Av),Ln(i,s)}}function PT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Un(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ln(i,t)}else{if(Un(i,s))return;Tv.set(s),r.uniformMatrix3fv(this.addr,!1,Tv),Ln(i,s)}}function IT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Un(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ln(i,t)}else{if(Un(i,s))return;Ev.set(s),r.uniformMatrix4fv(this.addr,!1,Ev),Ln(i,s)}}function zT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;r.uniform2iv(this.addr,t),Ln(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;r.uniform3iv(this.addr,t),Ln(i,t)}}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;r.uniform4iv(this.addr,t),Ln(i,t)}}function GT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;r.uniform2uiv(this.addr,t),Ln(i,t)}}function kT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;r.uniform3uiv(this.addr,t),Ln(i,t)}}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;r.uniform4uiv(this.addr,t),Ln(i,t)}}function WT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?Ap:Tp,c=hp):c=Sy,i.setTexture2D(t||c,l)}function qT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||by,l)}function YT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ey,l)}function ZT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||My,l)}function KT(r){switch(r){case 5126:return DT;case 35664:return UT;case 35665:return LT;case 35666:return NT;case 35674:return OT;case 35675:return PT;case 35676:return IT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return ZT}}function jT(r,t){r.uniform1fv(this.addr,t)}function QT(r,t){const i=ao(t,this.size,2);r.uniform2fv(this.addr,i)}function JT(r,t){const i=ao(t,this.size,3);r.uniform3fv(this.addr,i)}function $T(r,t){const i=ao(t,this.size,4);r.uniform4fv(this.addr,i)}function tA(r,t){const i=ao(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function eA(r,t){const i=ao(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function nA(r,t){const i=ao(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function iA(r,t){r.uniform1iv(this.addr,t)}function aA(r,t){r.uniform2iv(this.addr,t)}function sA(r,t){r.uniform3iv(this.addr,t)}function rA(r,t){r.uniform4iv(this.addr,t)}function oA(r,t){r.uniform1uiv(this.addr,t)}function lA(r,t){r.uniform2uiv(this.addr,t)}function cA(r,t){r.uniform3uiv(this.addr,t)}function uA(r,t){r.uniform4uiv(this.addr,t)}function fA(r,t,i){const s=this.cache,l=t.length,c=bu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=hp:f=Sy;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function hA(r,t,i){const s=this.cache,l=t.length,c=bu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||by,c[f])}function dA(r,t,i){const s=this.cache,l=t.length,c=bu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ey,c[f])}function pA(r,t,i){const s=this.cache,l=t.length,c=bu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||My,c[f])}function mA(r){switch(r){case 5126:return jT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tA;case 35675:return eA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KT(i.type)}}class _A{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mA(i.type)}}class vA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Rv(r,t){r.seq.push(t),r.map[t.id]=t}function yA(r,t,i){const s=r.name,l=s.length;for(gd.lastIndex=0;;){const c=gd.exec(s),f=gd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Rv(i,p===void 0?new gA(d,r,t):new _A(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new vA(d),Rv(i,v)),i=v}}}class au{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);yA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Cv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const xA=37297;let SA=0;function MA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const wv=new de;function bA(r){De._getMatrix(wv,De.workingColorSpace,r);const t=`mat3( ${wv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case cu:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Dv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+MA(r.getShaderSource(t),d)}else return c}function EA(r,t){const i=bA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TA={[Xv]:"Linear",[Wv]:"Reinhard",[qv]:"Cineon",[_p]:"ACESFilmic",[Zv]:"AgX",[Kv]:"Neutral",[Yv]:"Custom"};function AA(r,t){const i=TA[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new k;function RA(){De.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),t=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function wA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function DA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function rl(r){return r!==""}function Uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(r){return r.replace(UA,NA)}const LA=new Map;function NA(r,t){let i=ve[t];if(i===void 0){const s=LA.get(t);if(s!==void 0)i=ve[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dp(i)}const OA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(r){return r.replace(OA,PA)}function PA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ov(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const IA={[Jc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function zA(r){return IA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[Qs]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function FA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":BA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const HA={[$r]:"ENVMAP_MODE_REFRACTION"};function GA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":HA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VA={[gp]:"ENVMAP_BLENDING_MULTIPLY",[lM]:"ENVMAP_BLENDING_MIX",[cM]:"ENVMAP_BLENDING_ADD"};function kA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":VA[r.combine]||"ENVMAP_BLENDING_NONE"}function XA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function WA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=zA(i),p=FA(i),_=GA(i),v=kA(i),g=XA(i),S=CA(i),T=wA(c),w=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(rl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(rl).join(`
`),x.length>0&&(x+=`
`)):(M=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),x=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ea?"#define TONE_MAPPING":"",i.toneMapping!==ea?ve.tonemapping_pars_fragment:"",i.toneMapping!==ea?AA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,EA("linearToOutputTexel",i.outputColorSpace),RA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),f=dp(f),f=Uv(f,i),f=Lv(f,i),d=dp(d),d=Uv(d,i),d=Lv(d,i),f=Nv(f),d=Nv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const B=O+M+f,C=O+x+d,P=Cv(l,l.VERTEX_SHADER,B),U=Cv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,P),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(H){if(r.debug.checkShaderErrors){const X=l.getProgramInfoLog(w)||"",$=l.getShaderInfoLog(P)||"",ct=l.getShaderInfoLog(U)||"",K=X.trim(),z=$.trim(),V=ct.trim();let tt=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,P,U);else{const bt=Dv(l,P,"vertex"),N=Dv(l,U,"fragment");Ue("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+bt+`
`+N)}else K!==""?oe("WebGLProgram: Program Info Log:",K):(z===""||V==="")&&(mt=!1);mt&&(H.diagnostics={runnable:tt,programLog:K,vertexShader:{log:z,prefix:M},fragmentShader:{log:V,prefix:x}})}l.deleteShader(P),l.deleteShader(U),E=new au(l,w),D=DA(l,w)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(w,xA)),F},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=U,this}let qA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new ZA(t),i.set(t,s)),s}}class ZA{constructor(t){this.id=qA++,this.code=t,this.usedTimes=0}}function KA(r){return r===Js||r===su||r===ru}function jA(r,t,i,s,l,c){const f=new Cp,d=new YA,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function w(E,D,F,H,X,$){const ct=H.fog,K=X.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,tt=t.get(E.envMap||z,V),mt=tt&&tt.mapping===vu?tt.image.height:null,bt=S[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&oe("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,j=N!==void 0?N.length:0;let St=0;K.morphAttributes.position!==void 0&&(St=1),K.morphAttributes.normal!==void 0&&(St=2),K.morphAttributes.color!==void 0&&(St=3);let Rt,zt,st,vt;if(bt){const Vt=$i[bt];Rt=Vt.vertexShader,zt=Vt.fragmentShader}else{Rt=E.vertexShader,zt=E.fragmentShader;const Vt=d.getVertexShaderStage(E),tn=d.getFragmentShaderStage(E);d.update(E,Vt,tn),st=Vt.id,vt=tn.id}const Et=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),ae=X.isInstancedMesh===!0,te=X.isBatchedMesh===!0,Re=!!E.map,ge=!!E.matcap,ue=!!tt,xe=!!E.aoMap,ee=!!E.lightMap,cn=!!E.bumpMap&&E.wireframe===!1,an=!!E.normalMap,sn=!!E.displacementMap,dn=!!E.emissiveMap,Ye=!!E.metalnessMap,rn=!!E.roughnessMap,Y=E.anisotropy>0,Ie=E.clearcoat>0,Ce=E.dispersion>0,L=E.iridescence>0,b=E.sheen>0,J=E.transmission>0,rt=Y&&!!E.anisotropyMap,ht=Ie&&!!E.clearcoatMap,At=Ie&&!!E.clearcoatNormalMap,Ut=Ie&&!!E.clearcoatRoughnessMap,ft=L&&!!E.iridescenceMap,dt=L&&!!E.iridescenceThicknessMap,Ct=b&&!!E.sheenColorMap,Bt=b&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Lt=!!E.specularColorMap,Qt=!!E.specularIntensityMap,Jt=J&&!!E.transmissionMap,se=J&&!!E.thicknessMap,q=!!E.gradientMap,Tt=!!E.alphaMap,pt=E.alphaTest>0,Dt=!!E.alphaHash,Pt=!!E.extensions;let Mt=ea;E.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Mt=r.toneMapping);const Yt={shaderID:bt,shaderType:E.type,shaderName:E.name,vertexShader:Rt,fragmentShader:zt,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:vt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:te,batchingColor:te&&X._colorsTexture!==null,instancing:ae,instancingColor:ae&&X.instanceColor!==null,instancingMorph:ae&&X.morphTexture!==null,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Re,matcap:ge,envMap:ue,envMapMode:ue&&tt.mapping,envMapCubeUVHeight:mt,aoMap:xe,lightMap:ee,bumpMap:cn,normalMap:an,displacementMap:sn,emissiveMap:dn,normalMapObjectSpace:an&&E.normalMapType===hM,normalMapTangentSpace:an&&E.normalMapType===ou,packedNormalMap:an&&E.normalMapType===ou&&KA(E.normalMap.format),metalnessMap:Ye,roughnessMap:rn,anisotropy:Y,anisotropyMap:rt,clearcoat:Ie,clearcoatMap:ht,clearcoatNormalMap:At,clearcoatRoughnessMap:Ut,dispersion:Ce,iridescence:L,iridescenceMap:ft,iridescenceThicknessMap:dt,sheen:b,sheenColorMap:Ct,sheenRoughnessMap:Bt,specularMap:Nt,specularColorMap:Lt,specularIntensityMap:Qt,transmission:J,transmissionMap:Jt,thicknessMap:se,gradientMap:q,opaque:E.transparent===!1&&E.blending===Kr&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:pt,alphaHash:Dt,combine:E.combine,mapUv:Re&&T(E.map.channel),aoMapUv:xe&&T(E.aoMap.channel),lightMapUv:ee&&T(E.lightMap.channel),bumpMapUv:cn&&T(E.bumpMap.channel),normalMapUv:an&&T(E.normalMap.channel),displacementMapUv:sn&&T(E.displacementMap.channel),emissiveMapUv:dn&&T(E.emissiveMap.channel),metalnessMapUv:Ye&&T(E.metalnessMap.channel),roughnessMapUv:rn&&T(E.roughnessMap.channel),anisotropyMapUv:rt&&T(E.anisotropyMap.channel),clearcoatMapUv:ht&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(E.sheenRoughnessMap.channel),specularMapUv:Nt&&T(E.specularMap.channel),specularColorMapUv:Lt&&T(E.specularColorMap.channel),specularIntensityMapUv:Qt&&T(E.specularIntensityMap.channel),transmissionMapUv:Jt&&T(E.transmissionMap.channel),thicknessMapUv:se&&T(E.thicknessMap.channel),alphaMapUv:Tt&&T(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(an||Y),vertexNormals:!!K.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(Re||Tt),fog:!!ct,useFog:E.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||K.attributes.normal===void 0&&an===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:St,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Re&&E.map.isVideoTexture===!0&&De.getTransfer(E.map.colorSpace)===qe,decodeVideoTextureEmissive:dn&&E.emissiveMap.isVideoTexture===!0&&De.getTransfer(E.emissiveMap.colorSpace)===qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===In,flipSided:E.side===Qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function M(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)D.push(F),D.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(x(D,E),O(D,E),D.push(r.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function x(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function O(E,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),D.packedNormalMap&&f.enable(22),D.vertexNormals&&f.enable(23),E.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),D.numLightProbeGrids>0&&f.enable(22),D.hasPositionAttribute&&f.enable(23),E.push(f.mask)}function B(E){const D=S[E.type];let F;if(D){const H=$i[D];F=hb.clone(H.uniforms)}else F=E.uniforms;return F}function C(E,D){let F=_.get(D);return F!==void 0?++F.usedTimes:(F=new WA(r,D,E,l),p.push(F),_.set(D,F)),F}function P(E){if(--E.usedTimes===0){const D=p.indexOf(E);p[D]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function U(E){d.remove(E)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:P,releaseShaderCache:U,programs:p,dispose:I}}function QA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function JA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Iv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,T,w,M,x){let O=r[t];return O===void 0?(O={id:g.id,object:g,geometry:S,material:T,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:x},r[t]=O):(O.id=g.id,O.object=g,O.geometry=S,O.material=T,O.materialVariant=f(g),O.groupOrder=w,O.renderOrder=g.renderOrder,O.z=M,O.group=x),t++,O}function m(g,S,T,w,M,x){const O=d(g,S,T,w,M,x);T.transmission>0?s.push(O):T.transparent===!0?l.push(O):i.push(O)}function p(g,S,T,w,M,x){const O=d(g,S,T,w,M,x);T.transmission>0?s.unshift(O):T.transparent===!0?l.unshift(O):i.unshift(O)}function _(g,S,T){i.length>1&&i.sort(g||JA),s.length>1&&s.sort(S||Pv),l.length>1&&l.sort(S||Pv),T&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=t,S=r.length;g<S;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function $A(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Iv,r.set(s,[f])):l>=c.length?(f=new Iv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function tR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new ce};break;case"SpotLight":i={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":i={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=i,i}}}function eR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let nR=0;function iR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function aR(r){const t=new tR,i=eR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new k);const l=new k,c=new $e,f=new $e;function d(p){let _=0,v=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,T=0,w=0,M=0,x=0,O=0,B=0,C=0,P=0,U=0,I=0;p.sort(iR);for(let D=0,F=p.length;D<F;D++){const H=p[D],X=H.color,$=H.intensity,ct=H.distance;let K=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Js?K=H.shadow.map.texture:K=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=X.r*$,v+=X.g*$,g+=X.b*$;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],$);I++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,tt=i.get(H);tt.shadowIntensity=V.intensity,tt.shadowBias=V.bias,tt.shadowNormalBias=V.normalBias,tt.shadowRadius=V.radius,tt.shadowMapSize=V.mapSize,s.directionalShadow[S]=tt,s.directionalShadowMap[S]=K,s.directionalShadowMatrix[S]=H.shadow.matrix,O++}s.directional[S]=z,S++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(X).multiplyScalar($),z.distance=ct,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[w]=z;const V=H.shadow;if(H.map&&(s.spotLightMap[P]=H.map,P++,V.updateMatrices(H),H.castShadow&&U++),s.spotLightMatrix[w]=V.matrix,H.castShadow){const tt=i.get(H);tt.shadowIntensity=V.intensity,tt.shadowBias=V.bias,tt.shadowNormalBias=V.normalBias,tt.shadowRadius=V.radius,tt.shadowMapSize=V.mapSize,s.spotShadow[w]=tt,s.spotShadowMap[w]=K,C++}w++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(X).multiplyScalar($),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=z,M++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const V=H.shadow,tt=i.get(H);tt.shadowIntensity=V.intensity,tt.shadowBias=V.bias,tt.shadowNormalBias=V.normalBias,tt.shadowRadius=V.radius,tt.shadowMapSize=V.mapSize,tt.shadowCameraNear=V.camera.near,tt.shadowCameraFar=V.camera.far,s.pointShadow[T]=tt,s.pointShadowMap[T]=K,s.pointShadowMatrix[T]=H.shadow.matrix,B++}s.point[T]=z,T++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar($),z.groundColor.copy(H.groundColor).multiplyScalar($),s.hemi[x]=z,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==S||E.pointLength!==T||E.spotLength!==w||E.rectAreaLength!==M||E.hemiLength!==x||E.numDirectionalShadows!==O||E.numPointShadows!==B||E.numSpotShadows!==C||E.numSpotMaps!==P||E.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=C+P-U,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=I,E.directionalLength=S,E.pointLength=T,E.spotLength=w,E.rectAreaLength=M,E.hemiLength=x,E.numDirectionalShadows=O,E.numPointShadows=B,E.numSpotShadows=C,E.numSpotMaps=P,E.numLightProbes=I,s.version=nR++)}function m(p,_){let v=0,g=0,S=0,T=0,w=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const B=p[x];if(B.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),v++}else if(B.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(B.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(B.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(B.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),g++}else if(B.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function zv(r){const t=new aR(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function sR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new zv(r),t.set(l,[d])):c>=f.length?(d=new zv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
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
}`,lR=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],cR=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Bv=new $e,al=new k,_d=new k;function uR(r,t,i){let s=new wp;const l=new kt,c=new kt,f=new mn,d=new _b,m=new vb,p={},_=i.maxTextureSize,v={[ys]:Qn,[Qn]:ys,[In]:In},g=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:rR,fragmentShader:oR}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new Dn;T.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Se(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let x=this.type;this.render=function(U,I,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===kv&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const D=r.getRenderTarget(),F=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Ua),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const $=x!==this.type;$&&I.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(K=>K.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,K=U.length;ct<K;ct++){const z=U[ct],V=z.shadow;if(V===void 0){oe("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const tt=V.getFrameExtents();l.multiply(tt),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/tt.x),l.x=c.x*tt.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/tt.y),l.y=c.y*tt.y,V.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=mt,V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sl){if(z.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new na(l.x,l.y,{format:Js,type:Na,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new to(l.x,l.y,ki),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Oa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn}else z.isPointLight?(V.map=new xy(l.x),V.map.depthTexture=new ZM(l.x,ia)):(V.map=new na(l.x,l.y),V.map.depthTexture=new to(l.x,l.y,ia)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Oa,this.type===Jc?(V.map.depthTexture.compareFunction=mt?Ap:Tp,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gn,V.map.depthTexture.magFilter=Gn);V.camera.updateProjectionMatrix()}const bt=V.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<bt;N++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,N),r.clear();else{N===0&&(r.setRenderTarget(V.map),r.clear());const j=V.getViewport(N);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),X.viewport(f)}if(z.isPointLight){const j=V.camera,St=V.matrix,Rt=z.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),al.setFromMatrixPosition(z.matrixWorld),j.position.copy(al),_d.copy(j.position),_d.add(lR[N]),j.up.copy(cR[N]),j.lookAt(_d),j.updateMatrixWorld(),St.makeTranslation(-al.x,-al.y,-al.z),Bv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Bv,j.coordinateSystem,j.reversedDepth)}else V.updateMatrices(z);s=V.getFrustum(),C(I,E,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===sl&&O(V,E),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(D,F,H)};function O(U,I){const E=t.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new na(l.x,l.y,{format:Js,type:Na})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(I,null,E,g,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(I,null,E,S,w,null)}function B(U,I,E,D){let F=null;const H=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)F=H;else if(F=E.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=F.uuid,$=I.uuid;let ct=p[X];ct===void 0&&(ct={},p[X]=ct);let K=ct[$];K===void 0&&(K=F.clone(),ct[$]=K,I.addEventListener("dispose",P)),F=K}if(F.visible=I.visible,F.wireframe=I.wireframe,D===sl?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:v[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const X=r.properties.get(F);X.light=E}return F}function C(U,I,E,D,F){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&F===sl)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const $=t.update(U),ct=U.material;if(Array.isArray(ct)){const K=$.groups;for(let z=0,V=K.length;z<V;z++){const tt=K[z],mt=ct[tt.materialIndex];if(mt&&mt.visible){const bt=B(U,mt,D,F);U.onBeforeShadow(r,U,I,E,$,bt,tt),r.renderBufferDirect(E,null,$,bt,U,tt),U.onAfterShadow(r,U,I,E,$,bt,tt)}}}else if(ct.visible){const K=B(U,ct,D,F);U.onBeforeShadow(r,U,I,E,$,K,null),r.renderBufferDirect(E,null,$,K,U,null),U.onAfterShadow(r,U,I,E,$,K,null)}}const X=U.children;for(let $=0,ct=X.length;$<ct;$++)C(X[$],I,E,D,F)}function P(U){U.target.removeEventListener("dispose",P);for(const E in p){const D=p[E],F=U.target.uuid;F in D&&(D[F].dispose(),delete D[F])}}}function fR(r,t){function i(){let q=!1;const Tt=new mn;let pt=null;const Dt=new mn(0,0,0,0);return{setMask:function(Pt){pt!==Pt&&!q&&(r.colorMask(Pt,Pt,Pt,Pt),pt=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,Mt,Yt,Vt,tn){tn===!0&&(Pt*=Vt,Mt*=Vt,Yt*=Vt),Tt.set(Pt,Mt,Yt,Vt),Dt.equals(Tt)===!1&&(r.clearColor(Pt,Mt,Yt,Vt),Dt.copy(Tt))},reset:function(){q=!1,pt=null,Dt.set(-1,0,0,0)}}}function s(){let q=!1,Tt=!1,pt=null,Dt=null,Pt=null;return{setReversed:function(Mt){if(Tt!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Tt=Mt;const Vt=Pt;Pt=null,this.setClear(Vt)}},getReversed:function(){return Tt},setTest:function(Mt){Mt?Et(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Mt){pt!==Mt&&!q&&(r.depthMask(Mt),pt=Mt)},setFunc:function(Mt){if(Tt&&(Mt=MM[Mt]),Dt!==Mt){switch(Mt){case bd:r.depthFunc(r.NEVER);break;case Ed:r.depthFunc(r.ALWAYS);break;case Td:r.depthFunc(r.LESS);break;case Jr:r.depthFunc(r.LEQUAL);break;case Ad:r.depthFunc(r.EQUAL);break;case Rd:r.depthFunc(r.GEQUAL);break;case Cd:r.depthFunc(r.GREATER);break;case wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Dt=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){Pt!==Mt&&(Pt=Mt,Tt&&(Mt=1-Mt),r.clearDepth(Mt))},reset:function(){q=!1,pt=null,Dt=null,Pt=null,Tt=!1}}}function l(){let q=!1,Tt=null,pt=null,Dt=null,Pt=null,Mt=null,Yt=null,Vt=null,tn=null;return{setTest:function(wt){q||(wt?Et(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(wt){Tt!==wt&&!q&&(r.stencilMask(wt),Tt=wt)},setFunc:function(wt,qt,le){(pt!==wt||Dt!==qt||Pt!==le)&&(r.stencilFunc(wt,qt,le),pt=wt,Dt=qt,Pt=le)},setOp:function(wt,qt,le){(Mt!==wt||Yt!==qt||Vt!==le)&&(r.stencilOp(wt,qt,le),Mt=wt,Yt=qt,Vt=le)},setLocked:function(wt){q=wt},setClear:function(wt){tn!==wt&&(r.clearStencil(wt),tn=wt)},reset:function(){q=!1,Tt=null,pt=null,Dt=null,Pt=null,Mt=null,Yt=null,Vt=null,tn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],w=null,M=!1,x=null,O=null,B=null,C=null,P=null,U=null,I=null,E=new ce(0,0,0),D=0,F=!1,H=null,X=null,$=null,ct=null,K=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,tt=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),V=tt>=1):mt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),V=tt>=2);let bt=null,N={};const j=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),Rt=new mn().fromArray(j),zt=new mn().fromArray(St);function st(q,Tt,pt,Dt){const Pt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(q,Mt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<pt;Yt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Dt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(Tt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return Mt}const vt={};vt[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(r.DEPTH_TEST),f.setFunc(Jr),cn(!1),an(w_),Et(r.CULL_FACE),xe(Ua);function Et(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function Ht(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function ae(q,Tt){return g[q]!==Tt?(r.bindFramebuffer(q,Tt),g[q]=Tt,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function te(q,Tt){let pt=T,Dt=!1;if(q){pt=S.get(Tt),pt===void 0&&(pt=[],S.set(Tt,pt));const Pt=q.textures;if(pt.length!==Pt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Yt=Pt.length;Mt<Yt;Mt++)pt[Mt]=r.COLOR_ATTACHMENT0+Mt;pt.length=Pt.length,Dt=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Dt=!0);Dt&&r.drawBuffers(pt)}function Re(q){return w!==q?(r.useProgram(q),w=q,!0):!1}const ge={[qs]:r.FUNC_ADD,[WS]:r.FUNC_SUBTRACT,[qS]:r.FUNC_REVERSE_SUBTRACT};ge[YS]=r.MIN,ge[ZS]=r.MAX;const ue={[KS]:r.ZERO,[jS]:r.ONE,[QS]:r.SRC_COLOR,[Sd]:r.SRC_ALPHA,[iM]:r.SRC_ALPHA_SATURATE,[eM]:r.DST_COLOR,[$S]:r.DST_ALPHA,[JS]:r.ONE_MINUS_SRC_COLOR,[Md]:r.ONE_MINUS_SRC_ALPHA,[nM]:r.ONE_MINUS_DST_COLOR,[tM]:r.ONE_MINUS_DST_ALPHA,[aM]:r.CONSTANT_COLOR,[sM]:r.ONE_MINUS_CONSTANT_COLOR,[rM]:r.CONSTANT_ALPHA,[oM]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(q,Tt,pt,Dt,Pt,Mt,Yt,Vt,tn,wt){if(q===Ua){M===!0&&(Ht(r.BLEND),M=!1);return}if(M===!1&&(Et(r.BLEND),M=!0),q!==XS){if(q!==x||wt!==F){if((O!==qs||P!==qs)&&(r.blendEquation(r.FUNC_ADD),O=qs,P=qs),wt)switch(q){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFunc(r.ONE,r.ONE);break;case U_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case L_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",q);break}else switch(q){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case U_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",q);break}B=null,C=null,U=null,I=null,E.set(0,0,0),D=0,x=q,F=wt}return}Pt=Pt||Tt,Mt=Mt||pt,Yt=Yt||Dt,(Tt!==O||Pt!==P)&&(r.blendEquationSeparate(ge[Tt],ge[Pt]),O=Tt,P=Pt),(pt!==B||Dt!==C||Mt!==U||Yt!==I)&&(r.blendFuncSeparate(ue[pt],ue[Dt],ue[Mt],ue[Yt]),B=pt,C=Dt,U=Mt,I=Yt),(Vt.equals(E)===!1||tn!==D)&&(r.blendColor(Vt.r,Vt.g,Vt.b,tn),E.copy(Vt),D=tn),x=q,F=!1}function ee(q,Tt){q.side===In?Ht(r.CULL_FACE):Et(r.CULL_FACE);let pt=q.side===Qn;Tt&&(pt=!pt),cn(pt),q.blending===Kr&&q.transparent===!1?xe(Ua):xe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Dt=q.stencilWrite;d.setTest(Dt),Dt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),dn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Et(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function cn(q){H!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),H=q)}function an(q){q!==VS?(Et(r.CULL_FACE),q!==X&&(q===w_?r.cullFace(r.BACK):q===kS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),X=q}function sn(q){q!==$&&(V&&r.lineWidth(q),$=q)}function dn(q,Tt,pt){q?(Et(r.POLYGON_OFFSET_FILL),(ct!==Tt||K!==pt)&&(ct=Tt,K=pt,f.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,pt))):Ht(r.POLYGON_OFFSET_FILL)}function Ye(q){q?Et(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function rn(q){q===void 0&&(q=r.TEXTURE0+z-1),bt!==q&&(r.activeTexture(q),bt=q)}function Y(q,Tt,pt){pt===void 0&&(bt===null?pt=r.TEXTURE0+z-1:pt=bt);let Dt=N[pt];Dt===void 0&&(Dt={type:void 0,texture:void 0},N[pt]=Dt),(Dt.type!==q||Dt.texture!==Tt)&&(bt!==pt&&(r.activeTexture(pt),bt=pt),r.bindTexture(q,Tt||vt[q]),Dt.type=q,Dt.texture=Tt)}function Ie(){const q=N[bt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ce(){try{r.compressedTexImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function b(){try{r.texSubImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function J(){try{r.texSubImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function rt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function ht(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function At(){try{r.texStorage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Ut(){try{r.texStorage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function ft(){try{r.texImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function dt(){try{r.texImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Ct(q){return v[q]!==void 0?v[q]:r.getParameter(q)}function Bt(q,Tt){v[q]!==Tt&&(r.pixelStorei(q,Tt),v[q]=Tt)}function Nt(q){Rt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Rt.copy(q))}function Lt(q){zt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),zt.copy(q))}function Qt(q,Tt){let pt=p.get(Tt);pt===void 0&&(pt=new WeakMap,p.set(Tt,pt));let Dt=pt.get(q);Dt===void 0&&(Dt=r.getUniformBlockIndex(Tt,q.name),pt.set(q,Dt))}function Jt(q,Tt){const Dt=p.get(Tt).get(q);m.get(Tt)!==Dt&&(r.uniformBlockBinding(Tt,Dt,q.__bindingPointIndex),m.set(Tt,Dt))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},bt=null,N={},g={},S=new WeakMap,T=[],w=null,M=!1,x=null,O=null,B=null,C=null,P=null,U=null,I=null,E=new ce(0,0,0),D=0,F=!1,H=null,X=null,$=null,ct=null,K=null,Rt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Et,disable:Ht,bindFramebuffer:ae,drawBuffers:te,useProgram:Re,setBlending:xe,setMaterial:ee,setFlipSided:cn,setCullFace:an,setLineWidth:sn,setPolygonOffset:dn,setScissorTest:Ye,activeTexture:rn,bindTexture:Y,unbindTexture:Ie,compressedTexImage2D:Ce,compressedTexImage3D:L,texImage2D:ft,texImage3D:dt,pixelStorei:Bt,getParameter:Ct,updateUBOMapping:Qt,uniformBlockBinding:Jt,texStorage2D:At,texStorage3D:Ut,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Nt,viewport:Lt,reset:se}}function hR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,b){return T?new OffscreenCanvas(L,b):uu("canvas")}function M(L,b,J){let rt=1;const ht=Ce(L);if((ht.width>J||ht.height>J)&&(rt=J/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const At=Math.floor(rt*ht.width),Ut=Math.floor(rt*ht.height);g===void 0&&(g=w(At,Ut));const ft=b?w(At,Ut):g;return ft.width=At,ft.height=Ut,ft.getContext("2d").drawImage(L,0,0,At,Ut),oe("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+At+"x"+Ut+")."),ft}else return"data"in L&&oe("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function x(L){return L.generateMipmaps}function O(L){r.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,b,J,rt,ht,At=!1){if(L!==null){if(r[L]!==void 0)return r[L];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ut;rt&&(Ut=t.get("EXT_texture_norm16"),Ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=b;if(b===r.RED&&(J===r.FLOAT&&(ft=r.R32F),J===r.HALF_FLOAT&&(ft=r.R16F),J===r.UNSIGNED_BYTE&&(ft=r.R8),J===r.UNSIGNED_SHORT&&Ut&&(ft=Ut.R16_EXT),J===r.SHORT&&Ut&&(ft=Ut.R16_SNORM_EXT)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.R8UI),J===r.UNSIGNED_SHORT&&(ft=r.R16UI),J===r.UNSIGNED_INT&&(ft=r.R32UI),J===r.BYTE&&(ft=r.R8I),J===r.SHORT&&(ft=r.R16I),J===r.INT&&(ft=r.R32I)),b===r.RG&&(J===r.FLOAT&&(ft=r.RG32F),J===r.HALF_FLOAT&&(ft=r.RG16F),J===r.UNSIGNED_BYTE&&(ft=r.RG8),J===r.UNSIGNED_SHORT&&Ut&&(ft=Ut.RG16_EXT),J===r.SHORT&&Ut&&(ft=Ut.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RG8UI),J===r.UNSIGNED_SHORT&&(ft=r.RG16UI),J===r.UNSIGNED_INT&&(ft=r.RG32UI),J===r.BYTE&&(ft=r.RG8I),J===r.SHORT&&(ft=r.RG16I),J===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),J===r.UNSIGNED_INT&&(ft=r.RGB32UI),J===r.BYTE&&(ft=r.RGB8I),J===r.SHORT&&(ft=r.RGB16I),J===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),J===r.UNSIGNED_INT&&(ft=r.RGBA32UI),J===r.BYTE&&(ft=r.RGBA8I),J===r.SHORT&&(ft=r.RGBA16I),J===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(J===r.UNSIGNED_SHORT&&Ut&&(ft=Ut.RGB16_EXT),J===r.SHORT&&Ut&&(ft=Ut.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const dt=At?cu:De.getTransfer(ht);J===r.FLOAT&&(ft=r.RGBA32F),J===r.HALF_FLOAT&&(ft=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ft=dt===qe?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Ut&&(ft=Ut.RGBA16_EXT),J===r.SHORT&&Ut&&(ft=Ut.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function P(L,b){let J;return L?b===null||b===ia||b===fl?J=r.DEPTH24_STENCIL8:b===ki?J=r.DEPTH32F_STENCIL8:b===ul&&(J=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ia||b===fl?J=r.DEPTH_COMPONENT24:b===ki?J=r.DEPTH_COMPONENT32F:b===ul&&(J=r.DEPTH_COMPONENT16),J}function U(L,b){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Gn&&L.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){const b=L.target;b.removeEventListener("dispose",I),D(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function E(L){const b=L.target;b.removeEventListener("dispose",E),H(b)}function D(L){const b=s.get(L);if(b.__webglInit===void 0)return;const J=L.source,rt=S.get(J);if(rt){const ht=rt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&F(L),Object.keys(rt).length===0&&S.delete(J)}s.remove(L)}function F(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const J=L.source,rt=S.get(J);delete rt[b.__cacheKey],f.memory.textures--}function H(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let ht=0;ht<b.__webglFramebuffer[rt].length;ht++)r.deleteFramebuffer(b.__webglFramebuffer[rt][ht]);else r.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)r.deleteFramebuffer(b.__webglFramebuffer[rt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let rt=0,ht=J.length;rt<ht;rt++){const At=s.get(J[rt]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),f.memory.textures--),s.remove(J[rt])}s.remove(L)}let X=0;function $(){X=0}function ct(){return X}function K(L){X=L}function z(){const L=X;return L>=l.maxTextures&&oe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),X+=1,L}function V(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function tt(L,b){const J=s.get(L);if(L.isVideoTexture&&Y(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const rt=L.image;if(rt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,L,b);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function mt(L,b){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ht(J,L,b);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function bt(L,b){const J=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){Ht(J,L,b);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function N(L,b){const J=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){ae(J,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const j={[Dd]:r.REPEAT,[Da]:r.CLAMP_TO_EDGE,[Ud]:r.MIRRORED_REPEAT},St={[Gn]:r.NEAREST,[uM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[Ih]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},Rt={[dM]:r.NEVER,[vM]:r.ALWAYS,[pM]:r.LESS,[Tp]:r.LEQUAL,[mM]:r.EQUAL,[Ap]:r.GEQUAL,[gM]:r.GREATER,[_M]:r.NOTEQUAL};function zt(L,b){if(b.type===ki&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===Ih||b.magFilter===Tc||b.magFilter===Zs||b.minFilter===Yn||b.minFilter===Ih||b.minFilter===Tc||b.minFilter===Zs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,j[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,j[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,j[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,St[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gn||b.minFilter!==Tc&&b.minFilter!==Zs||b.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function st(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const rt=b.source;let ht=S.get(rt);ht===void 0&&(ht={},S.set(rt,ht));const At=V(b);if(At!==L.__cacheKey){ht[At]===void 0&&(ht[At]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),ht[At].usedTimes++;const Ut=ht[L.__cacheKey];Ut!==void 0&&(ht[L.__cacheKey].usedTimes--,Ut.usedTimes===0&&F(b)),L.__cacheKey=At,L.__webglTexture=ht[At].texture}return J}function vt(L,b,J){return Math.floor(Math.floor(L/J)/b)}function Et(L,b,J,rt){const At=L.updateRanges;if(At.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,J,rt,b.data);else{At.sort((Bt,Nt)=>Bt.start-Nt.start);let Ut=0;for(let Bt=1;Bt<At.length;Bt++){const Nt=At[Ut],Lt=At[Bt],Qt=Nt.start+Nt.count,Jt=vt(Lt.start,b.width,4),se=vt(Nt.start,b.width,4);Lt.start<=Qt+1&&Jt===se&&vt(Lt.start+Lt.count-1,b.width,4)===Jt?Nt.count=Math.max(Nt.count,Lt.start+Lt.count-Nt.start):(++Ut,At[Ut]=Lt)}At.length=Ut+1;const ft=i.getParameter(r.UNPACK_ROW_LENGTH),dt=i.getParameter(r.UNPACK_SKIP_PIXELS),Ct=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Bt=0,Nt=At.length;Bt<Nt;Bt++){const Lt=At[Bt],Qt=Math.floor(Lt.start/4),Jt=Math.ceil(Lt.count/4),se=Qt%b.width,q=Math.floor(Qt/b.width),Tt=Jt,pt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,se),i.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,se,q,Tt,pt,J,rt,b.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ft),i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ct)}}function Ht(L,b,J){let rt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=r.TEXTURE_3D);const ht=st(L,b),At=b.source;i.bindTexture(rt,L.__webglTexture,r.TEXTURE0+J);const Ut=s.get(At);if(At.version!==Ut.__version||ht===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pt=De.getPrimaries(De.workingColorSpace),Dt=b.colorSpace===gs?null:De.getPrimaries(b.colorSpace),Pt=b.colorSpace===gs||pt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let dt=M(b.image,!1,l.maxTextureSize);dt=Ie(b,dt);const Ct=c.convert(b.format,b.colorSpace),Bt=c.convert(b.type);let Nt=C(b.internalFormat,Ct,Bt,b.normalized,b.colorSpace,b.isVideoTexture);zt(rt,b);let Lt;const Qt=b.mipmaps,Jt=b.isVideoTexture!==!0,se=Ut.__version===void 0||ht===!0,q=At.dataReady,Tt=U(b,dt);if(b.isDepthTexture)Nt=P(b.format===Ks,b.type),se&&(Jt?i.texStorage2D(r.TEXTURE_2D,1,Nt,dt.width,dt.height):i.texImage2D(r.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Ct,Bt,null));else if(b.isDataTexture)if(Qt.length>0){Jt&&se&&i.texStorage2D(r.TEXTURE_2D,Tt,Nt,Qt[0].width,Qt[0].height);for(let pt=0,Dt=Qt.length;pt<Dt;pt++)Lt=Qt[pt],Jt?q&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Lt.width,Lt.height,Ct,Bt,Lt.data):i.texImage2D(r.TEXTURE_2D,pt,Nt,Lt.width,Lt.height,0,Ct,Bt,Lt.data);b.generateMipmaps=!1}else Jt?(se&&i.texStorage2D(r.TEXTURE_2D,Tt,Nt,dt.width,dt.height),q&&Et(b,dt,Ct,Bt)):i.texImage2D(r.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Ct,Bt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&se&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Nt,Qt[0].width,Qt[0].height,dt.depth);for(let pt=0,Dt=Qt.length;pt<Dt;pt++)if(Lt=Qt[pt],b.format!==Xi)if(Ct!==null)if(Jt){if(q)if(b.layerUpdates.size>0){const Pt=gv(Lt.width,Lt.height,b.format,b.type);for(const Mt of b.layerUpdates){const Yt=Lt.data.subarray(Mt*Pt/Lt.data.BYTES_PER_ELEMENT,(Mt+1)*Pt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,Mt,Lt.width,Lt.height,1,Ct,Yt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Lt.width,Lt.height,dt.depth,Ct,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Nt,Lt.width,Lt.height,dt.depth,0,Lt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Lt.width,Lt.height,dt.depth,Ct,Bt,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,Nt,Lt.width,Lt.height,dt.depth,0,Ct,Bt,Lt.data)}else{Jt&&se&&i.texStorage2D(r.TEXTURE_2D,Tt,Nt,Qt[0].width,Qt[0].height);for(let pt=0,Dt=Qt.length;pt<Dt;pt++)Lt=Qt[pt],b.format!==Xi?Ct!==null?Jt?q&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,Lt.width,Lt.height,Ct,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,Nt,Lt.width,Lt.height,0,Lt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?q&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Lt.width,Lt.height,Ct,Bt,Lt.data):i.texImage2D(r.TEXTURE_2D,pt,Nt,Lt.width,Lt.height,0,Ct,Bt,Lt.data)}else if(b.isDataArrayTexture)if(Jt){if(se&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Nt,dt.width,dt.height,dt.depth),q)if(b.layerUpdates.size>0){const pt=gv(dt.width,dt.height,b.format,b.type);for(const Dt of b.layerUpdates){const Pt=dt.data.subarray(Dt*pt/dt.data.BYTES_PER_ELEMENT,(Dt+1)*pt/dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Dt,dt.width,dt.height,1,Ct,Bt,Pt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Bt,dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Ct,Bt,dt.data);else if(b.isData3DTexture)Jt?(se&&i.texStorage3D(r.TEXTURE_3D,Tt,Nt,dt.width,dt.height,dt.depth),q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Bt,dt.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Ct,Bt,dt.data);else if(b.isFramebufferTexture){if(se)if(Jt)i.texStorage2D(r.TEXTURE_2D,Tt,Nt,dt.width,dt.height);else{let pt=dt.width,Dt=dt.height;for(let Pt=0;Pt<Tt;Pt++)i.texImage2D(r.TEXTURE_2D,Pt,Nt,pt,Dt,0,Ct,Bt,null),pt>>=1,Dt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pt=r.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),dt.parentNode!==pt){pt.appendChild(dt),v.add(b),pt.onpaint=Dt=>{const Pt=Dt.changedElements;for(const Mt of v)Pt.includes(Mt.image)&&(Mt.needsUpdate=!0)},pt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,dt);else{const Pt=r.RGBA,Mt=r.RGBA,Yt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Pt,Mt,Yt,dt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Qt.length>0){if(Jt&&se){const pt=Ce(Qt[0]);i.texStorage2D(r.TEXTURE_2D,Tt,Nt,pt.width,pt.height)}for(let pt=0,Dt=Qt.length;pt<Dt;pt++)Lt=Qt[pt],Jt?q&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Ct,Bt,Lt):i.texImage2D(r.TEXTURE_2D,pt,Nt,Ct,Bt,Lt);b.generateMipmaps=!1}else if(Jt){if(se){const pt=Ce(dt);i.texStorage2D(r.TEXTURE_2D,Tt,Nt,pt.width,pt.height)}q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Bt,dt)}else i.texImage2D(r.TEXTURE_2D,0,Nt,Ct,Bt,dt);x(b)&&O(rt),Ut.__version=At.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ae(L,b,J){if(b.image.length!==6)return;const rt=st(L,b),ht=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+J);const At=s.get(ht);if(ht.version!==At.__version||rt===!0){i.activeTexture(r.TEXTURE0+J);const Ut=De.getPrimaries(De.workingColorSpace),ft=b.colorSpace===gs?null:De.getPrimaries(b.colorSpace),dt=b.colorSpace===gs||Ut===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,Bt=b.image[0]&&b.image[0].isDataTexture,Nt=[];for(let Mt=0;Mt<6;Mt++)!Ct&&!Bt?Nt[Mt]=M(b.image[Mt],!0,l.maxCubemapSize):Nt[Mt]=Bt?b.image[Mt].image:b.image[Mt],Nt[Mt]=Ie(b,Nt[Mt]);const Lt=Nt[0],Qt=c.convert(b.format,b.colorSpace),Jt=c.convert(b.type),se=C(b.internalFormat,Qt,Jt,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,Tt=At.__version===void 0||rt===!0,pt=ht.dataReady;let Dt=U(b,Lt);zt(r.TEXTURE_CUBE_MAP,b);let Pt;if(Ct){q&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,se,Lt.width,Lt.height);for(let Mt=0;Mt<6;Mt++){Pt=Nt[Mt].mipmaps;for(let Yt=0;Yt<Pt.length;Yt++){const Vt=Pt[Yt];b.format!==Xi?Qt!==null?q?pt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,Vt.width,Vt.height,Qt,Vt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,se,Vt.width,Vt.height,0,Vt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,Vt.width,Vt.height,Qt,Jt,Vt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,se,Vt.width,Vt.height,0,Qt,Jt,Vt.data)}}}else{if(Pt=b.mipmaps,q&&Tt){Pt.length>0&&Dt++;const Mt=Ce(Nt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,se,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Bt){q?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Nt[Mt].width,Nt[Mt].height,Qt,Jt,Nt[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,se,Nt[Mt].width,Nt[Mt].height,0,Qt,Jt,Nt[Mt].data);for(let Yt=0;Yt<Pt.length;Yt++){const tn=Pt[Yt].image[Mt].image;q?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,tn.width,tn.height,Qt,Jt,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,se,tn.width,tn.height,0,Qt,Jt,tn.data)}}else{q?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Qt,Jt,Nt[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,se,Qt,Jt,Nt[Mt]);for(let Yt=0;Yt<Pt.length;Yt++){const Vt=Pt[Yt];q?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,Qt,Jt,Vt.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,se,Qt,Jt,Vt.image[Mt])}}}x(b)&&O(r.TEXTURE_CUBE_MAP),At.__version=ht.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function te(L,b,J,rt,ht,At){const Ut=c.convert(J.format,J.colorSpace),ft=c.convert(J.type),dt=C(J.internalFormat,Ut,ft,J.normalized,J.colorSpace),Ct=s.get(b),Bt=s.get(J);if(Bt.__renderTarget=b,!Ct.__hasExternalTextures){const Nt=Math.max(1,b.width>>At),Lt=Math.max(1,b.height>>At);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?i.texImage3D(ht,At,dt,Nt,Lt,b.depth,0,Ut,ft,null):i.texImage2D(ht,At,dt,Nt,Lt,0,Ut,ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),rn(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,ht,Bt.__webglTexture,0,Ye(b)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,ht,Bt.__webglTexture,At),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(L,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const rt=b.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,At=P(b.stencilBuffer,ht),Ut=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rn(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(b),At,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(b),At,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,At,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,L)}else{const rt=b.textures;for(let ht=0;ht<rt.length;ht++){const At=rt[ht],Ut=c.convert(At.format,At.colorSpace),ft=c.convert(At.type),dt=C(At.internalFormat,Ut,ft,At.normalized,At.colorSpace);rn(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(b),dt,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(b),dt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,dt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(L,b,J){const rt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=s.get(b.depthTexture);if(ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),rt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),ht.__webglTexture===void 0){ht.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),zt(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ct=c.convert(b.depthTexture.format),Bt=c.convert(b.depthTexture.type);let Nt;b.depthTexture.format===Oa?Nt=r.DEPTH_COMPONENT24:b.depthTexture.format===Ks&&(Nt=r.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Nt,b.width,b.height,0,Ct,Bt,null)}}else tt(b.depthTexture,0);const At=ht.__webglTexture,Ut=Ye(b),ft=rt?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,dt=b.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oa)rn(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ft,At,0,Ut):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ft,At,0);else if(b.depthTexture.format===Ks)rn(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ft,At,0,Ut):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ft,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(L){const b=s.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const rt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=rt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let rt=0;rt<6;rt++)ge(b.__webglFramebuffer[rt],L,rt);else{const rt=L.texture.mipmaps;rt&&rt.length>0?ge(b.__webglFramebuffer[0],L,0):ge(b.__webglFramebuffer,L,0)}else if(J){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=r.createRenderbuffer(),Re(b.__webglDepthbuffer[rt],L,!1);else{const ht=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer[rt];r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,At)}}else{const rt=L.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Re(b.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,At)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(L,b,J){const rt=s.get(L);b!==void 0&&te(rt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ue(L)}function ee(L){const b=L.texture,J=s.get(L),rt=s.get(b);L.addEventListener("dispose",E);const ht=L.textures,At=L.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=b.version,f.memory.textures++),At){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let dt=0;dt<b.mipmaps.length;dt++)J.__webglFramebuffer[ft][dt]=r.createFramebuffer()}else J.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)J.__webglFramebuffer[ft]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let ft=0,dt=ht.length;ft<dt;ft++){const Ct=s.get(ht[ft]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&rn(L)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){const dt=ht[ft];J.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);const Ct=c.convert(dt.format,dt.colorSpace),Bt=c.convert(dt.type),Nt=C(dt.internalFormat,Ct,Bt,dt.normalized,dt.colorSpace,L.isXRRenderTarget===!0),Lt=Ye(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,Nt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(At){i.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),zt(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)te(J.__webglFramebuffer[ft][dt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,dt);else te(J.__webglFramebuffer[ft],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(b)&&O(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let ft=0,dt=ht.length;ft<dt;ft++){const Ct=ht[ft],Bt=s.get(Ct);let Nt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Nt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Bt.__webglTexture),zt(Nt,Ct),te(J.__webglFramebuffer,L,Ct,r.COLOR_ATTACHMENT0+ft,Nt,0),x(Ct)&&O(Nt)}i.unbindTexture()}else{let ft=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ft=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ft,rt.__webglTexture),zt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)te(J.__webglFramebuffer[dt],L,b,r.COLOR_ATTACHMENT0,ft,dt);else te(J.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,ft,0);x(b)&&O(ft),i.unbindTexture()}L.depthBuffer&&ue(L)}function cn(L){const b=L.textures;for(let J=0,rt=b.length;J<rt;J++){const ht=b[J];if(x(ht)){const At=B(L),Ut=s.get(ht).__webglTexture;i.bindTexture(At,Ut),O(At),i.unbindTexture()}}}const an=[],sn=[];function dn(L){if(L.samples>0){if(rn(L)===!1){const b=L.textures,J=L.width,rt=L.height;let ht=r.COLOR_BUFFER_BIT;const At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=s.get(L),ft=b.length>1;if(ft)for(let Ct=0;Ct<b.length;Ct++)i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const dt=L.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);const Bt=s.get(b[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Bt,0)}r.blitFramebuffer(0,0,J,rt,0,0,J,rt,ht,r.NEAREST),m===!0&&(an.length=0,sn.length=0,an.push(r.COLOR_ATTACHMENT0+Ct),L.depthBuffer&&L.resolveDepthBuffer===!1&&(an.push(At),sn.push(At),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,sn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,an))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Ct=0;Ct<b.length;Ct++){i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ct]);const Bt=s.get(b[Ct]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,Bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ye(L){return Math.min(l.maxSamples,L.samples)}function rn(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(L){const b=f.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Ie(L,b){const J=L.colorSpace,rt=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==lu&&J!==gs&&(De.getTransfer(J)===qe?(rt!==Xi||ht!==Si)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",J)),b}function Ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.getTextureUnits=ct,this.setTextureUnits=K,this.setTexture2D=tt,this.setTexture2DArray=mt,this.setTexture3D=bt,this.setTextureCube=N,this.rebindTextures=xe,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=te,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function dR(r,t){function i(s,l=gs){let c;const f=De.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===yp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ty)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Qv)return r.BYTE;if(s===Jv)return r.SHORT;if(s===ul)return r.UNSIGNED_SHORT;if(s===vp)return r.INT;if(s===ia)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Na)return r.HALF_FLOAT;if(s===ey)return r.ALPHA;if(s===ny)return r.RGB;if(s===Xi)return r.RGBA;if(s===Oa)return r.DEPTH_COMPONENT;if(s===Ks)return r.DEPTH_STENCIL;if(s===Sp)return r.RED;if(s===Mp)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===bp)return r.RG_INTEGER;if(s===Ep)return r.RGBA_INTEGER;if(s===$c||s===tu||s===eu||s===nu)if(f===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ld||s===Nd||s===Od||s===Pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Id||s===zd||s===Bd||s===Fd||s===Hd||s===su||s===Gd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Id||s===zd)return f===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Bd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Fd)return c.COMPRESSED_R11_EAC;if(s===Hd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===su)return c.COMPRESSED_RG11_EAC;if(s===Gd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===Zd||s===Kd||s===jd||s===Qd||s===Jd||s===$d||s===tp||s===ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Vd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$d)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tp)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===np||s===ip||s===ap)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===np)return f===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sp||s===rp||s===ru||s===op)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===sp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ru)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const pR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mR=`
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

}`;class gR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new fy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new aa({vertexShader:pR,fragmentShader:mR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Se(new xu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _R extends Ss{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,T=null;const w=typeof XRWebGLBinding<"u",M=new gR,x={},O=i.getContextAttributes();let B=null,C=null;const P=[],U=[],I=new kt;let E=null;const D=new xi;D.viewport=new mn;const F=new xi;F.viewport=new mn;const H=[D,F],X=new Eb;let $=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let vt=P[st];return vt===void 0&&(vt=new kh,P[st]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(st){let vt=P[st];return vt===void 0&&(vt=new kh,P[st]=vt),vt.getGripSpace()},this.getHand=function(st){let vt=P[st];return vt===void 0&&(vt=new kh,P[st]=vt),vt.getHandSpace()};function K(st){const vt=U.indexOf(st.inputSource);if(vt===-1)return;const Et=P[vt];Et!==void 0&&(Et.update(st.inputSource,st.frame,p||f),Et.dispatchEvent({type:st.type,data:st.inputSource}))}function z(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let st=0;st<P.length;st++){const vt=U[st];vt!==null&&(U[st]=null,P[st].disconnect(vt))}$=null,ct=null,M.reset();for(const st in x)delete x[st];t.setRenderTarget(B),S=null,g=null,v=null,l=null,C=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){d=st,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ht=null,ae=null;O.depth&&(ae=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=O.stencil?Ks:Oa,Ht=O.stencil?fl:ia);const te={colorFormat:i.RGBA8,depthFormat:ae,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(te),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new na(g.textureWidth,g.textureHeight,{format:Xi,type:Si,depthTexture:new to(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Et={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new na(S.framebufferWidth,S.framebufferHeight,{format:Xi,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(st){for(let vt=0;vt<st.removed.length;vt++){const Et=st.removed[vt],Ht=U.indexOf(Et);Ht>=0&&(U[Ht]=null,P[Ht].disconnect(Et))}for(let vt=0;vt<st.added.length;vt++){const Et=st.added[vt];let Ht=U.indexOf(Et);if(Ht===-1){for(let te=0;te<P.length;te++)if(te>=U.length){U.push(Et),Ht=te;break}else if(U[te]===null){U[te]=Et,Ht=te;break}if(Ht===-1)break}const ae=P[Ht];ae&&ae.connect(Et)}}const tt=new k,mt=new k;function bt(st,vt,Et){tt.setFromMatrixPosition(vt.matrixWorld),mt.setFromMatrixPosition(Et.matrixWorld);const Ht=tt.distanceTo(mt),ae=vt.projectionMatrix.elements,te=Et.projectionMatrix.elements,Re=ae[14]/(ae[10]-1),ge=ae[14]/(ae[10]+1),ue=(ae[9]+1)/ae[5],xe=(ae[9]-1)/ae[5],ee=(ae[8]-1)/ae[0],cn=(te[8]+1)/te[0],an=Re*ee,sn=Re*cn,dn=Ht/(-ee+cn),Ye=dn*-ee;if(vt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Ye),st.translateZ(dn),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),ae[10]===-1)st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const rn=Re+dn,Y=ge+dn,Ie=an-Ye,Ce=sn+(Ht-Ye),L=ue*ge/Y*rn,b=xe*ge/Y*rn;st.projectionMatrix.makePerspective(Ie,Ce,L,b,rn,Y),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function N(st,vt){vt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(vt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let vt=st.near,Et=st.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),X.near=F.near=D.near=vt,X.far=F.far=D.far=Et,($!==X.near||ct!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),$=X.near,ct=X.far),X.layers.mask=st.layers.mask|6,D.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;const Ht=st.parent,ae=X.cameras;N(X,Ht);for(let te=0;te<ae.length;te++)N(ae[te],Ht);ae.length===2?bt(X,D,F):X.projectionMatrix.copy(D.projectionMatrix),j(st,X,Ht)};function j(st,vt,Et){Et===null?st.matrix.copy(vt.matrixWorld):(st.matrix.copy(Et.matrixWorld),st.matrix.invert(),st.matrix.multiply(vt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=lp*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(st){m=st,g!==null&&(g.fixedFoveation=st),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(X)},this.getCameraTexture=function(st){return x[st]};let St=null;function Rt(st,vt){if(_=vt.getViewerPose(p||f),T=vt,_!==null){const Et=_.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Ht=!1;Et.length!==X.cameras.length&&(X.cameras.length=0,Ht=!0);for(let ge=0;ge<Et.length;ge++){const ue=Et[ge];let xe=null;if(S!==null)xe=S.getViewport(ue);else{const cn=v.getViewSubImage(g,ue);xe=cn.viewport,ge===0&&(t.setRenderTargetTextures(C,cn.colorTexture,cn.depthStencilTexture),t.setRenderTarget(C))}let ee=H[ge];ee===void 0&&(ee=new xi,ee.layers.enable(ge),ee.viewport=new mn,H[ge]=ee),ee.matrix.fromArray(ue.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),ge===0&&(X.matrix.copy(ee.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ht===!0&&X.cameras.push(ee)}const ae=l.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const ge=v.getDepthInformation(Et[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(ae&&ae.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let ge=0;ge<Et.length;ge++){const ue=Et[ge].camera;if(ue){let xe=x[ue];xe||(xe=new fy,x[ue]=xe);const ee=v.getCameraImage(ue);xe.sourceTexture=ee}}}}for(let Et=0;Et<P.length;Et++){const Ht=U[Et],ae=P[Et];Ht!==null&&ae!==void 0&&ae.update(Ht,vt,p||f)}St&&St(st,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const zt=new vy;zt.setAnimationLoop(Rt),this.setAnimationLoop=function(st){St=st},this.dispose=function(){}}}const vR=new $e,Ty=new de;Ty.set(-1,0,0,0,1,0,0,0,1);function yR(r,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,my(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,B,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&S(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,B):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=t.get(x),B=O.envMap,C=O.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(vR.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Ty),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,B){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=B*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const O=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function xR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const U=P.program;s.uniformBlockBinding(C,U)}function p(C,P){let U=l[C.id];U===void 0&&(M(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",O));const I=P.program;s.updateUBOMapping(C,I);const E=t.render.frame;c[C.id]!==E&&(g(C),c[C.id]=E)}function _(C){const P=v();C.__bindingPointIndex=P;const U=r.createBuffer(),I=C.__size,E=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,I,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=l[C.id],U=C.uniforms,I=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let E=0,D=U.length;E<D;E++){const F=U[E];if(Array.isArray(F))for(let H=0,X=F.length;H<X;H++)S(F[H],E,H,I);else S(F,E,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,P,U,I){if(w(C,P,U,I)===!0){const E=C.__offset,D=C.value;if(Array.isArray(D)){let F=0;for(let H=0;H<D.length;H++){const X=D[H],$=x(X);T(X,C.__data,F),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,C.__data)}}function T(C,P,U){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,U)}function w(C,P,U,I){const E=C.value,D=P+"_"+U;if(I[D]===void 0)return typeof E=="number"||typeof E=="boolean"?I[D]=E:ArrayBuffer.isView(E)?I[D]=E.slice():I[D]=E.clone(),!0;{const F=I[D];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return I[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(F.equals(E)===!1)return F.copy(E),!0}}return!1}function M(C){const P=C.uniforms;let U=0;const I=16;for(let D=0,F=P.length;D<F;D++){const H=Array.isArray(P[D])?P[D]:[P[D]];for(let X=0,$=H.length;X<$;X++){const ct=H[X],K=Array.isArray(ct.value)?ct.value:[ct.value];for(let z=0,V=K.length;z<V;z++){const tt=K[z],mt=x(tt),bt=U%I,N=bt%mt.boundary,j=bt+N;U+=N,j!==0&&I-j<mt.storage&&(U+=I-j),ct.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=U,U+=mt.storage}}}const E=U%I;return E>0&&(U+=I-E),C.__size=U,C.__cache={},this}function x(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),P}function O(C){const P=C.target;P.removeEventListener("dispose",O);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function B(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:B}}const SR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function MR(){return Ji===null&&(Ji=new cy(SR,16,16,Js,Na),Ji.name="DFG_LUT",Ji.minFilter=Yn,Ji.magFilter=Yn,Ji.wrapS=Da,Ji.wrapT=Da,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class bR{constructor(t={}){const{canvas:i=xM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Si}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const w=S,M=new Set([Ep,bp,Mp]),x=new Set([Si,ia,ul,fl,yp,xp]),O=new Uint32Array(4),B=new Int32Array(4),C=new k;let P=null,U=null;const I=[],E=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let H=!1,X=null,$=null,ct=null,K=null;this._outputColorSpace=vi;let z=0,V=0,tt=null,mt=-1,bt=null;const N=new mn,j=new mn;let St=null;const Rt=new ce(0);let zt=0,st=i.width,vt=i.height,Et=1,Ht=null,ae=null;const te=new mn(0,0,st,vt),Re=new mn(0,0,st,vt);let ge=!1;const ue=new wp;let xe=!1,ee=!1;const cn=new $e,an=new k,sn=new mn,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function rn(){return tt===null?Et:1}let Y=s;function Ie(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",tn,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",qt,!1),Y===null){const Z="webgl2";if(Y=Ie(Z,A),Y===null)throw Ie(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ue("WebGLRenderer: "+A.message),A}let Ce,L,b,J,rt,ht,At,Ut,ft,dt,Ct,Bt,Nt,Lt,Qt,Jt,se,q,Tt,pt,Dt,Pt,Mt;function Yt(){Ce=new MT(Y),Ce.init(),Dt=new dR(Y,Ce),L=new pT(Y,Ce,t,Dt),b=new fR(Y,Ce),L.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),$=Y.createFramebuffer(),ct=Y.createFramebuffer(),K=Y.createFramebuffer(),J=new TT(Y),rt=new QA,ht=new hR(Y,Ce,b,rt,L,Dt,J),At=new ST(F),Ut=new wb(Y),Pt=new hT(Y,Ut),ft=new bT(Y,Ut,J,Pt),dt=new RT(Y,ft,Ut,Pt,J),q=new AT(Y,L,ht),Qt=new mT(rt),Ct=new jA(F,At,Ce,L,Pt,Qt),Bt=new yR(F,rt),Nt=new $A,Lt=new sR(Ce),se=new fT(F,At,b,dt,T,m),Jt=new uR(F,dt,L),Mt=new xR(Y,J,L,b),Tt=new dT(Y,Ce,J),pt=new ET(Y,Ce,J),J.programs=Ct.programs,F.capabilities=L,F.extensions=Ce,F.properties=rt,F.renderLists=Nt,F.shadowMap=Jt,F.state=b,F.info=J}Yt(),w!==Si&&(D=new wT(w,i.width,i.height,d,l,c));const Vt=new _R(F,Y);this.xr=Vt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(A){A!==void 0&&(Et=A,this.setSize(st,vt,!1))},this.getSize=function(A){return A.set(st,vt)},this.setSize=function(A,Z,ot=!0){if(Vt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,vt=Z,i.width=Math.floor(A*Et),i.height=Math.floor(Z*Et),ot===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(st*Et,vt*Et).floor()},this.setDrawingBufferSize=function(A,Z,ot){st=A,vt=Z,Et=ot,i.width=Math.floor(A*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(w===Si){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,Z,ot,it){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,Z,ot,it),b.viewport(N.copy(te).multiplyScalar(Et).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,Z,ot,it){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,Z,ot,it),b.scissor(j.copy(Re).multiplyScalar(Et).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){b.setScissorTest(ge=A)},this.setOpaqueSort=function(A){Ht=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,ot=!0){let it=0;if(A){let at=!1;if(tt!==null){const It=tt.texture.format;at=M.has(It)}if(at){const It=tt.texture.type,Xt=x.has(It),Ot=se.getClearColor(),Zt=se.getClearAlpha(),Wt=Ot.r,ne=Ot.g,pe=Ot.b;Xt?(O[0]=Wt,O[1]=ne,O[2]=pe,O[3]=Zt,Y.clearBufferuiv(Y.COLOR,0,O)):(B[0]=Wt,B[1]=ne,B[2]=pe,B[3]=Zt,Y.clearBufferiv(Y.COLOR,0,B))}else it|=Y.COLOR_BUFFER_BIT}Z&&(it|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(it|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Y.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),X=A},this.dispose=function(){i.removeEventListener("webglcontextlost",tn,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",qt,!1),se.dispose(),Nt.dispose(),Lt.dispose(),rt.dispose(),At.dispose(),dt.dispose(),Pt.dispose(),Mt.dispose(),Ct.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",pn),Vt.removeEventListener("sessionend",Le),Nn.stop()};function tn(A){A.preventDefault(),z_("WebGLRenderer: Context Lost."),H=!0}function wt(){z_("WebGLRenderer: Context Restored."),H=!1;const A=J.autoReset,Z=Jt.enabled,ot=Jt.autoUpdate,it=Jt.needsUpdate,at=Jt.type;Yt(),J.autoReset=A,Jt.enabled=Z,Jt.autoUpdate=ot,Jt.needsUpdate=it,Jt.type=at}function qt(A){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const Z=A.target;Z.removeEventListener("dispose",le),fe(Z)}function fe(A){ze(A),rt.remove(A)}function ze(A){const Z=rt.get(A).programs;Z!==void 0&&(Z.forEach(function(ot){Ct.releaseProgram(ot)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,ot,it,at,It){Z===null&&(Z=dn);const Xt=at.isMesh&&at.matrixWorld.determinantAffine()<0,Ot=Fa(A,Z,ot,it,at);b.setMaterial(it,Xt);let Zt=ot.index,Wt=1;if(it.wireframe===!0){if(Zt=ft.getWireframeAttribute(ot),Zt===void 0)return;Wt=2}const ne=ot.drawRange,pe=ot.attributes.position;let $t=ne.start*Wt,Ne=(ne.start+ne.count)*Wt;It!==null&&($t=Math.max($t,It.start*Wt),Ne=Math.min(Ne,(It.start+It.count)*Wt)),Zt!==null?($t=Math.max($t,0),Ne=Math.min(Ne,Zt.count)):pe!=null&&($t=Math.max($t,0),Ne=Math.min(Ne,pe.count));const un=Ne-$t;if(un<0||un===1/0)return;Pt.setup(at,it,Ot,ot,Zt);let en,Ge=Tt;if(Zt!==null&&(en=Ut.get(Zt),Ge=pt,Ge.setIndex(en)),at.isMesh)it.wireframe===!0?(b.setLineWidth(it.wireframeLinewidth*rn()),Ge.setMode(Y.LINES)):Ge.setMode(Y.TRIANGLES);else if(at.isLine){let Ve=it.linewidth;Ve===void 0&&(Ve=1),b.setLineWidth(Ve*rn()),at.isLineSegments?Ge.setMode(Y.LINES):at.isLineLoop?Ge.setMode(Y.LINE_LOOP):Ge.setMode(Y.LINE_STRIP)}else at.isPoints?Ge.setMode(Y.POINTS):at.isSprite&&Ge.setMode(Y.TRIANGLES);if(at.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))Ge.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Ve=at._multiDrawStarts,Gt=at._multiDrawCounts,kn=at._multiDrawCount,Me=Zt?Ut.get(Zt).bytesPerElement:1,An=rt.get(it).currentProgram.getUniforms();for(let oi=0;oi<kn;oi++)An.setValue(Y,"_gl_DrawID",oi),Ge.render(Ve[oi]/Me,Gt[oi])}else if(at.isInstancedMesh)Ge.renderInstances($t,un,at.count);else if(ot.isInstancedBufferGeometry){const Ve=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Gt=Math.min(ot.instanceCount,Ve);Ge.renderInstances($t,un,Gt)}else Ge.render($t,un)};function Zn(A,Z,ot){A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ba(A,Z,ot),A.side=ys,A.needsUpdate=!0,Ba(A,Z,ot),A.side=In):Ba(A,Z,ot)}this.compile=function(A,Z,ot=null){ot===null&&(ot=A),U=Lt.get(ot),U.init(Z),E.push(U),ot.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),A!==ot&&A.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Xt=0;Xt<It.length;Xt++){const Ot=It[Xt];Zn(Ot,ot,at),it.add(Ot)}else Zn(It,ot,at),it.add(It)}),U=E.pop(),it},this.compileAsync=function(A,Z,ot=null){const it=this.compile(A,Z,ot);return new Promise(at=>{function It(){if(it.forEach(function(Xt){rt.get(Xt).currentProgram.isReady()&&it.delete(Xt)}),it.size===0){at(A);return}setTimeout(It,10)}Ce.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Mi=null;function Vn(A){Mi&&Mi(A)}function pn(){Nn.stop()}function Le(){Nn.start()}const Nn=new vy;Nn.setAnimationLoop(Vn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Mi=A,Vt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Vt.addEventListener("sessionstart",pn),Vt.addEventListener("sessionend",Le),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;X!==null&&X.renderStart(A,Z);const ot=Vt.enabled===!0&&Vt.isPresenting===!0,it=D!==null&&(tt===null||ot)&&D.begin(F,tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Z),Z=Vt.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,Z,tt),U=Lt.get(A,E.length),U.init(Z),U.state.textureUnits=ht.getTextureUnits(),E.push(U),cn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ue.setFromProjectionMatrix(cn,ta,Z.reversedDepth),ee=this.localClippingEnabled,xe=Qt.init(this.clippingPlanes,ee),P=Nt.get(A,I.length),P.init(),I.push(P),Vt.enabled===!0&&Vt.isPresenting===!0){const Xt=F.xr.getDepthSensingMesh();Xt!==null&&Li(Xt,Z,-1/0,F.sortObjects)}Li(A,Z,0,F.sortObjects),P.finish(),F.sortObjects===!0&&P.sort(Ht,ae,Z.reversedDepth),Ye=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Ye&&se.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Qt.beginShadows();const at=U.state.shadowsArray;if(Jt.render(at,A,Z),xe===!0&&Qt.endShadows(),(it&&D.hasRenderPass())===!1){const Xt=P.opaque,Ot=P.transmissive;if(U.setupLights(),Z.isArrayCamera){const Zt=Z.cameras;if(Ot.length>0)for(let Wt=0,ne=Zt.length;Wt<ne;Wt++){const pe=Zt[Wt];ml(Xt,Ot,A,pe)}Ye&&se.render(A);for(let Wt=0,ne=Zt.length;Wt<ne;Wt++){const pe=Zt[Wt];pl(P,A,pe,pe.viewport)}}else Ot.length>0&&ml(Xt,Ot,A,Z),Ye&&se.render(A),pl(P,A,Z)}tt!==null&&V===0&&(ht.updateMultisampleRenderTarget(tt),ht.updateRenderTargetMipmap(tt)),it&&D.end(F),A.isScene===!0&&A.onAfterRender(F,A,Z),Pt.resetDefaultState(),mt=-1,bt=null,E.pop(),E.length>0?(U=E[E.length-1],ht.setTextureUnits(U.state.textureUnits),xe===!0&&Qt.setGlobalState(F.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?P=I[I.length-1]:P=null,X!==null&&X.renderEnd()};function Li(A,Z,ot,it){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ue.intersectsSprite(A)){it&&sn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(cn);const Xt=dt.update(A),Ot=A.material;Ot.visible&&P.push(A,Xt,Ot,ot,sn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ue.intersectsObject(A))){const Xt=dt.update(A),Ot=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),sn.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),sn.copy(Xt.boundingSphere.center)),sn.applyMatrix4(A.matrixWorld).applyMatrix4(cn)),Array.isArray(Ot)){const Zt=Xt.groups;for(let Wt=0,ne=Zt.length;Wt<ne;Wt++){const pe=Zt[Wt],$t=Ot[pe.materialIndex];$t&&$t.visible&&P.push(A,Xt,$t,ot,sn.z,pe)}}else Ot.visible&&P.push(A,Xt,Ot,ot,sn.z,null)}}const It=A.children;for(let Xt=0,Ot=It.length;Xt<Ot;Xt++)Li(It[Xt],Z,ot,it)}function pl(A,Z,ot,it){const{opaque:at,transmissive:It,transparent:Xt}=A;U.setupLightsView(ot),xe===!0&&Qt.setGlobalState(F.clippingPlanes,ot),it&&b.viewport(N.copy(it)),at.length>0&&bs(at,Z,ot),It.length>0&&bs(It,Z,ot),Xt.length>0&&bs(Xt,Z,ot),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ml(A,Z,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[it.id]===void 0){const $t=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[it.id]=new na(1,1,{generateMipmaps:!0,type:$t?Na:Si,minFilter:Zs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const It=U.state.transmissionRenderTarget[it.id],Xt=it.viewport||N;It.setSize(Xt.z*F.transmissionResolutionScale,Xt.w*F.transmissionResolutionScale);const Ot=F.getRenderTarget(),Zt=F.getActiveCubeFace(),Wt=F.getActiveMipmapLevel();F.setRenderTarget(It),F.getClearColor(Rt),zt=F.getClearAlpha(),zt<1&&F.setClearColor(16777215,.5),F.clear(),Ye&&se.render(ot);const ne=F.toneMapping;F.toneMapping=ea;const pe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),U.setupLightsView(it),xe===!0&&Qt.setGlobalState(F.clippingPlanes,it),bs(A,ot,it),ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ne=0,un=Z.length;Ne<un;Ne++){const en=Z[Ne],{object:Ge,geometry:Ve,material:Gt,group:kn}=en;if(Gt.side===In&&Ge.layers.test(it.layers)){const Me=Gt.side;Gt.side=Qn,Gt.needsUpdate=!0,za(Ge,ot,it,Ve,Gt,kn),Gt.side=Me,Gt.needsUpdate=!0,$t=!0}}$t===!0&&(ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It))}F.setRenderTarget(Ot,Zt,Wt),F.setClearColor(Rt,zt),pe!==void 0&&(it.viewport=pe),F.toneMapping=ne}function bs(A,Z,ot){const it=Z.isScene===!0?Z.overrideMaterial:null;for(let at=0,It=A.length;at<It;at++){const Xt=A[at],{object:Ot,geometry:Zt,group:Wt}=Xt;let ne=Xt.material;ne.allowOverride===!0&&it!==null&&(ne=it),Ot.layers.test(ot.layers)&&za(Ot,Z,ot,Zt,ne,Wt)}}function za(A,Z,ot,it,at,It){A.onBeforeRender(F,Z,ot,it,at,It),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(F,Z,ot,it,A,It),at.transparent===!0&&at.side===In&&at.forceSinglePass===!1?(at.side=Qn,at.needsUpdate=!0,F.renderBufferDirect(ot,Z,it,at,A,It),at.side=ys,at.needsUpdate=!0,F.renderBufferDirect(ot,Z,it,at,A,It),at.side=In):F.renderBufferDirect(ot,Z,it,at,A,It),A.onAfterRender(F,Z,ot,it,at,It)}function Ba(A,Z,ot){Z.isScene!==!0&&(Z=dn);const it=rt.get(A),at=U.state.lights,It=U.state.shadowsArray,Xt=at.state.version,Ot=Ct.getParameters(A,at.state,It,Z,ot,U.state.lightProbeGridArray),Zt=Ct.getProgramCacheKey(Ot);let Wt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,it.fog=Z.fog;const ne=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=At.get(A.envMap||it.environment,ne),it.envMapRotation=it.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",le),Wt=new Map,it.programs=Wt);let pe=Wt.get(Zt);if(pe!==void 0){if(it.currentProgram===pe&&it.lightsStateVersion===Xt)return ra(A,Ot),pe}else Ot.uniforms=Ct.getUniforms(A),X!==null&&A.isNodeMaterial&&X.build(A,ot,Ot),A.onBeforeCompile(Ot,F),pe=Ct.acquireProgram(Ot,Zt),Wt.set(Zt,pe),it.uniforms=Ot.uniforms;const $t=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=Qt.uniform),ra(A,Ot),it.needsLights=gl(A),it.lightsStateVersion=Xt,it.needsLights&&($t.ambientLightColor.value=at.state.ambient,$t.lightProbe.value=at.state.probe,$t.directionalLights.value=at.state.directional,$t.directionalLightShadows.value=at.state.directionalShadow,$t.spotLights.value=at.state.spot,$t.spotLightShadows.value=at.state.spotShadow,$t.rectAreaLights.value=at.state.rectArea,$t.ltc_1.value=at.state.rectAreaLTC1,$t.ltc_2.value=at.state.rectAreaLTC2,$t.pointLights.value=at.state.point,$t.pointLightShadows.value=at.state.pointShadow,$t.hemisphereLights.value=at.state.hemi,$t.directionalShadowMatrix.value=at.state.directionalShadowMatrix,$t.spotLightMatrix.value=at.state.spotLightMatrix,$t.spotLightMap.value=at.state.spotLightMap,$t.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=U.state.lightProbeGridArray.length>0,it.currentProgram=pe,it.uniformsList=null,pe}function sa(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=au.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function ra(A,Z){const ot=rt.get(A);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function Es(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Z.matrixWorld);for(let ot=0,it=A.length;ot<it;ot++){const at=A[ot];if(at.texture!==null&&at.boundingBox.containsPoint(C))return at}return null}function Fa(A,Z,ot,it,at){Z.isScene!==!0&&(Z=dn),ht.resetTextureUnits();const It=Z.fog,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Z.environment:null,Ot=tt===null?F.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:De.workingColorSpace,Zt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Wt=At.get(it.envMap||Xt,Zt),ne=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pe=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),$t=!!ot.morphAttributes.position,Ne=!!ot.morphAttributes.normal,un=!!ot.morphAttributes.color;let en=ea;it.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(en=F.toneMapping);const Ge=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ve=Ge!==void 0?Ge.length:0,Gt=rt.get(it),kn=U.state.lights;if(xe===!0&&(ee===!0||A!==bt)){const He=A===bt&&it.id===mt;Qt.setState(it,A,He)}let Me=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==kn.state.version||Gt.outputColorSpace!==Ot||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==Wt||it.fog===!0&&Gt.fog!==It||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Qt.numPlanes||Gt.numIntersection!==Qt.numIntersection)||Gt.vertexAlphas!==ne||Gt.vertexTangents!==pe||Gt.morphTargets!==$t||Gt.morphNormals!==Ne||Gt.morphColors!==un||Gt.toneMapping!==en||Gt.morphTargetsCount!==Ve||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Gt.__version=it.version);let An=Gt.currentProgram;Me===!0&&(An=Ba(it,Z,at),X&&it.isNodeMaterial&&X.onUpdateProgram(it,An,Gt));let oi=!1,Ni=!1,li=!1;const ke=An.getUniforms(),fn=Gt.uniforms;if(b.useProgram(An.program)&&(oi=!0,Ni=!0,li=!0),it.id!==mt&&(mt=it.id,Ni=!0),Gt.needsLights){const He=Es(U.state.lightProbeGridArray,at);Gt.lightProbeGrid!==He&&(Gt.lightProbeGrid=He,Ni=!0)}if(oi||bt!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ke.setValue(Y,"projectionMatrix",A.projectionMatrix),ke.setValue(Y,"viewMatrix",A.matrixWorldInverse);const qi=ke.map.cameraPosition;qi!==void 0&&qi.setValue(Y,an.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&ke.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ke.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),bt!==A&&(bt=A,Ni=!0,li=!0)}if(Gt.needsLights&&(kn.state.directionalShadowMap.length>0&&ke.setValue(Y,"directionalShadowMap",kn.state.directionalShadowMap,ht),kn.state.spotShadowMap.length>0&&ke.setValue(Y,"spotShadowMap",kn.state.spotShadowMap,ht),kn.state.pointShadowMap.length>0&&ke.setValue(Y,"pointShadowMap",kn.state.pointShadowMap,ht)),at.isSkinnedMesh){ke.setOptional(Y,at,"bindMatrix"),ke.setOptional(Y,at,"bindMatrixInverse");const He=at.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ke.setValue(Y,"boneTexture",He.boneTexture,ht))}at.isBatchedMesh&&(ke.setOptional(Y,at,"batchingTexture"),ke.setValue(Y,"batchingTexture",at._matricesTexture,ht),ke.setOptional(Y,at,"batchingIdTexture"),ke.setValue(Y,"batchingIdTexture",at._indirectTexture,ht),ke.setOptional(Y,at,"batchingColorTexture"),at._colorsTexture!==null&&ke.setValue(Y,"batchingColorTexture",at._colorsTexture,ht));const Oi=ot.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&q.update(at,ot,An),(Ni||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,ke.setValue(Y,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Z.environment!==null&&(fn.envMapIntensity.value=Z.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=MR()),Ni){if(ke.setValue(Y,"toneMappingExposure",F.toneMappingExposure),Gt.needsLights&&xn(fn,li),It&&it.fog===!0&&Bt.refreshFogUniforms(fn,It),Bt.refreshMaterialUniforms(fn,it,Et,vt,U.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const He=Gt.lightProbeGrid;fn.probesSH.value=He.texture,fn.probesMin.value.copy(He.boundingBox.min),fn.probesMax.value.copy(He.boundingBox.max),fn.probesResolution.value.copy(He.resolution)}au.upload(Y,sa(Gt),fn,ht)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(au.upload(Y,sa(Gt),fn,ht),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ke.setValue(Y,"center",at.center),ke.setValue(Y,"modelViewMatrix",at.modelViewMatrix),ke.setValue(Y,"normalMatrix",at.normalMatrix),ke.setValue(Y,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const He=it.uniformsGroups;for(let qi=0,Ha=He.length;qi<Ha;qi++){const Ts=He[qi];Mt.update(Ts,An),Mt.bind(Ts,An)}}return An}function xn(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function gl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(A,Z,ot){const it=rt.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),rt.get(A.texture).__webglTexture=Z,rt.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const ot=rt.get(A);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,ot=0){tt=A,z=Z,V=ot;let it=null,at=!1,It=!1;if(A){const Ot=rt.get(A);if(Ot.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(Y.FRAMEBUFFER,Ot.__webglFramebuffer),N.copy(A.viewport),j.copy(A.scissor),St=A.scissorTest,b.viewport(N),b.scissor(j),b.setScissorTest(St),mt=-1;return}else if(Ot.__webglFramebuffer===void 0)ht.setupRenderTarget(A);else if(Ot.__hasExternalTextures)ht.rebindTextures(A,rt.get(A.texture).__webglTexture,rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ne=A.depthTexture;if(Ot.__boundDepthTexture!==ne){if(ne!==null&&rt.has(ne)&&(A.width!==ne.image.width||A.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(A)}}const Zt=A.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);const Wt=rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?it=Wt[Z][ot]:it=Wt[Z],at=!0):A.samples>0&&ht.useMultisampledRTT(A)===!1?it=rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[ot]:it=Wt,N.copy(A.viewport),j.copy(A.scissor),St=A.scissorTest}else N.copy(te).multiplyScalar(Et).floor(),j.copy(Re).multiplyScalar(Et).floor(),St=ge;if(ot!==0&&(it=$),b.bindFramebuffer(Y.FRAMEBUFFER,it)&&b.drawBuffers(A,it),b.viewport(N),b.scissor(j),b.setScissorTest(St),at){const Ot=rt.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ot.__webglTexture,ot)}else if(It){const Ot=Z;for(let Zt=0;Zt<A.textures.length;Zt++){const Wt=rt.get(A.textures[Zt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Zt,Wt.__webglTexture,ot,Ot)}}else if(A!==null&&ot!==0){const Ot=rt.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ot.__webglTexture,ot)}mt=-1},this.readRenderTargetPixels=function(A,Z,ot,it,at,It,Xt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Zt=Zt[Xt]),Zt){b.bindFramebuffer(Y.FRAMEBUFFER,Zt);try{const Wt=A.textures[Ot],ne=Wt.format,pe=Wt.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ot),!L.textureFormatReadable(ne)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(pe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-it&&ot>=0&&ot<=A.height-at&&Y.readPixels(Z,ot,it,at,Dt.convert(ne),Dt.convert(pe),It)}finally{const Wt=tt!==null?rt.get(tt).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,ot,it,at,It,Xt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Zt=Zt[Xt]),Zt)if(Z>=0&&Z<=A.width-it&&ot>=0&&ot<=A.height-at){b.bindFramebuffer(Y.FRAMEBUFFER,Zt);const Wt=A.textures[Ot],ne=Wt.format,pe=Wt.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ot),!L.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,$t),Y.bufferData(Y.PIXEL_PACK_BUFFER,It.byteLength,Y.STREAM_READ),Y.readPixels(Z,ot,it,at,Dt.convert(ne),Dt.convert(pe),0);const Ne=tt!==null?rt.get(tt).__webglFramebuffer:null;b.bindFramebuffer(Y.FRAMEBUFFER,Ne);const un=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await SM(Y,un,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,$t),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,It),Y.deleteBuffer($t),Y.deleteSync(un),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,ot=0){const it=Math.pow(2,-ot),at=Math.floor(A.image.width*it),It=Math.floor(A.image.height*it),Xt=Z!==null?Z.x:0,Ot=Z!==null?Z.y:0;ht.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ot,0,0,Xt,Ot,at,It),b.unbindTexture()},this.copyTextureToTexture=function(A,Z,ot=null,it=null,at=0,It=0){let Xt,Ot,Zt,Wt,ne,pe,$t,Ne,un;const en=A.isCompressedTexture?A.mipmaps[It]:A.image;if(ot!==null)Xt=ot.max.x-ot.min.x,Ot=ot.max.y-ot.min.y,Zt=ot.isBox3?ot.max.z-ot.min.z:1,Wt=ot.min.x,ne=ot.min.y,pe=ot.isBox3?ot.min.z:0;else{const fn=Math.pow(2,-at);Xt=Math.floor(en.width*fn),Ot=Math.floor(en.height*fn),A.isDataArrayTexture?Zt=en.depth:A.isData3DTexture?Zt=Math.floor(en.depth*fn):Zt=1,Wt=0,ne=0,pe=0}it!==null?($t=it.x,Ne=it.y,un=it.z):($t=0,Ne=0,un=0);const Ge=Dt.convert(Z.format),Ve=Dt.convert(Z.type);let Gt;Z.isData3DTexture?(ht.setTexture3D(Z,0),Gt=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ht.setTexture2DArray(Z,0),Gt=Y.TEXTURE_2D_ARRAY):(ht.setTexture2D(Z,0),Gt=Y.TEXTURE_2D),b.activeTexture(Y.TEXTURE0),b.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const kn=b.getParameter(Y.UNPACK_ROW_LENGTH),Me=b.getParameter(Y.UNPACK_IMAGE_HEIGHT),An=b.getParameter(Y.UNPACK_SKIP_PIXELS),oi=b.getParameter(Y.UNPACK_SKIP_ROWS),Ni=b.getParameter(Y.UNPACK_SKIP_IMAGES);b.pixelStorei(Y.UNPACK_ROW_LENGTH,en.width),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,en.height),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,Wt),b.pixelStorei(Y.UNPACK_SKIP_ROWS,ne),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,pe);const li=A.isDataArrayTexture||A.isData3DTexture,ke=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const fn=rt.get(A),Oi=rt.get(Z),He=rt.get(fn.__renderTarget),qi=rt.get(Oi.__renderTarget);b.bindFramebuffer(Y.READ_FRAMEBUFFER,He.__webglFramebuffer),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Ha=0;Ha<Zt;Ha++)li&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(A).__webglTexture,at,pe+Ha),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(Z).__webglTexture,It,un+Ha)),Y.blitFramebuffer(Wt,ne,Xt,Ot,$t,Ne,Xt,Ot,Y.DEPTH_BUFFER_BIT,Y.NEAREST);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||rt.has(A)){const fn=rt.get(A),Oi=rt.get(Z);b.bindFramebuffer(Y.READ_FRAMEBUFFER,ct),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,K);for(let He=0;He<Zt;He++)li?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,fn.__webglTexture,at,pe+He):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,fn.__webglTexture,at),ke?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Oi.__webglTexture,It,un+He):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oi.__webglTexture,It),at!==0?Y.blitFramebuffer(Wt,ne,Xt,Ot,$t,Ne,Xt,Ot,Y.COLOR_BUFFER_BIT,Y.NEAREST):ke?Y.copyTexSubImage3D(Gt,It,$t,Ne,un+He,Wt,ne,Xt,Ot):Y.copyTexSubImage2D(Gt,It,$t,Ne,Wt,ne,Xt,Ot);b.bindFramebuffer(Y.READ_FRAMEBUFFER,null),b.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ke?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Gt,It,$t,Ne,un,Xt,Ot,Zt,Ge,Ve,en.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(Gt,It,$t,Ne,un,Xt,Ot,Zt,Ge,en.data):Y.texSubImage3D(Gt,It,$t,Ne,un,Xt,Ot,Zt,Ge,Ve,en):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,It,$t,Ne,Xt,Ot,Ge,Ve,en.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,It,$t,Ne,en.width,en.height,Ge,en.data):Y.texSubImage2D(Y.TEXTURE_2D,It,$t,Ne,Xt,Ot,Ge,Ve,en);b.pixelStorei(Y.UNPACK_ROW_LENGTH,kn),b.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Me),b.pixelStorei(Y.UNPACK_SKIP_PIXELS,An),b.pixelStorei(Y.UNPACK_SKIP_ROWS,oi),b.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ni),It===0&&Z.generateMipmaps&&Y.generateMipmap(Gt),b.unbindTexture()},this.initRenderTarget=function(A){rt.get(A).__webglFramebuffer===void 0&&ht.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ht.setTextureCube(A,0):A.isData3DTexture?ht.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ht.setTexture2DArray(A,0):ht.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){z=0,V=0,tt=null,b.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Fv={type:"change"},Pp={type:"start"},Ay={type:"end"},jc=new yu,Hv=new yi,ER=Math.cos(70*EM.DEG2RAD),Cn=new k,ri=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6;class TR extends Rb{constructor(t,i=null){super(t,i),this.state=Je.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new xs,this._lastTargetPosition=new k,this._quat=new xs().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pv,this._sphericalDelta=new pv,this._scale=1,this._panOffset=new k,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new k,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RR.bind(this),this._onPointerDown=AR.bind(this),this._onPointerUp=CR.bind(this),this._onContextMenu=PR.bind(this),this._onMouseWheel=UR.bind(this),this._onKeyDown=LR.bind(this),this._onTouchStart=NR.bind(this),this._onTouchMove=OR.bind(this),this._onMouseDown=wR.bind(this),this._onMouseMove=DR.bind(this),this._interceptControlDown=IR.bind(this),this._interceptControlUp=zR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fv),this.update(),this.state=Je.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Cn.copy(i).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ri:s>Math.PI&&(s-=ri),l<-Math.PI?l+=ri:l>Math.PI&&(l-=ri),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Cn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new k(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<ER?this.object.lookAt(this.target):(Hv.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(Hv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(Fv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ri/60*this.autoRotateSpeed*t:ri/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Cn.setFromMatrixColumn(i,0),Cn.multiplyScalar(-t),this._panOffset.add(Cn)}_panUp(t,i){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(i,1):(Cn.setFromMatrixColumn(i,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(t),this._panOffset.add(Cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Cn.copy(l).sub(this.target);let c=Cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/i.clientHeight),this._rotateUp(ri*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/i.clientHeight),this._rotateUp(ri*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new kt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function AR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function RR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function CR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ay),this.state=Je.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function wR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Je.DOLLY;break;case Zr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}break;case Zr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Pp)}function DR(r){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function UR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(r.preventDefault(),this.dispatchEvent(Pp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ay))}function LR(r){this.enabled!==!1&&this._handleKeyDown(r)}function NR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Je.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Je.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Pp)}function OR(r){switch(this._trackPointer(r),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Je.NONE}}function PR(r){this.enabled!==!1&&r.preventDefault()}function IR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class BR extends ry{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new io;t.deleteAttribute("uv");const i=new gu({side:Qn}),s=new gu,l=new Sb(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Se(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new XM(t,s,6),d=new wn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),f.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),f.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),f.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),f.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),f.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),f.setMatrixAt(5,d.matrix),this.add(f);const m=new Se(t,qr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Se(t,qr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Se(t,qr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Se(t,qr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Se(t,qr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const S=new Se(t,qr(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function qr(r){return new gb({color:0,emissive:16777215,emissiveIntensity:r})}const FR=[{id:"all",label:"All Structures"},{id:"fibrosa",label:"Tunica Fibrosa (Outer)"},{id:"vasculosa",label:"Tunica Vasculosa / Uvea"},{id:"nervosa",label:"Tunica Nervosa (Retina)"},{id:"optical",label:"Optical Refractive Media"},{id:"neural",label:"Neural Pathways"}],_s=[{id:"cornea",name:"Cornea",latin:"Cornea Transparens",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Anterior 1/6th)",pinPosition:[0,3.5,11.2],cameraTarget:[0,0,9],color:"#7dd3fc",opticalMetrics:{refractiveIndex:"n = 1.376",dioptricPower:"+43.0 Diopters (~70% total eye refraction)",thickness:"535 µm central, ~650 µm peripheral"},medicalDescription:"The anterior, transparent, highly curved window of the eye. Completely avascular, receiving oxygen directly from ambient air through the tear film and nutrients from the anterior chamber's aqueous humor. Comprises five classical histological layers: non-keratinized stratified squamous epithelium, Bowman's membrane, stroma (90% thickness composed of orthogonally arranged type I/V collagen fibrils), Descemet's membrane, and metabolic monolayer endothelium.",clinicalPathology:"Keratoconus (biomechanical stromal degradation causing conical ectasia), Fuchs' endothelial corneal dystrophy, microbial keratitis, bullous keratopathy.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course (BCSC), Section 8: External Disease and Cornea",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy: The Anatomical Basis of Clinical Practice (42nd Ed.)",title:"Chapter 41: The Visual Apparatus and Orbit",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"},{authority:"National Center for Biotechnology Information (NCBI)",title:"StatPearls: Anatomy, Head and Neck, Eye Cornea",url:"https://www.ncbi.nlm.nih.gov/books/NBK470344/"}],historicalTreatise:{author:"Alhazen (Ibn al-Haytham)",work:"Kitāb al-Manāẓir (Book of Optics, c. 1021)",note:"Refuted classical extramission theory (Pythagoras, Euclid, Galen), demonstrating through geometry and camera obscura experiments that perpendicular rays of light enter through the corneal hemisphere to initiate vision."},literaryAnalysis:{figure:"Seamus Heaney",text:"'Personal Helicon' (Death of a Naturalist, 1966)",quote:"Others had echoes, gave back your own call / With a clean new music in it. And one was mean for water: a shallow / To stare, big-eyed Narcissus, into some spring / Is beneath all adult dignity. I rhyme / To see myself, to set the darkness echoing.",commentary:"The cornea is the surface of the well: an organic lens that is both transparent aperture and reflective barrier. In Heaney's poetic archaeology, gazing into water mirrors the corneal threshold where the observing subject is confronted with their own submerged reflection."}},{id:"sclera",name:"Sclera & Episclera",latin:"Tunica Sclera",layerCategory:"fibrosa",layer:"Tunica Fibrosa (Posterior 5/6ths)",pinPosition:[0,11.8,0],cameraTarget:[0,0,0],color:"#f8fafc",opticalMetrics:{refractiveIndex:"Opaque (irregular collagen scatter)",hydration:"68% hydration (vs. 78% in cornea)",thickness:"1.0 mm at posterior pole, 0.3 mm behind rectus insertions"},medicalDescription:"The dense, opaque, fibrous protective envelope of the globe. Consists of dense irregular bundles of collagen fibrils and elastic fibers that resist intraocular pressure (10–21 mmHg) and provide dynamic insertion points for the six extraocular muscles. Pierced posteriorly by the lamina cribrosa, through which retinal ganglion cell axons emerge to form the optic nerve.",clinicalPathology:"Scleritis (frequently associated with systemic autoimmune disorders like rheumatoid arthritis and granulomatosis with polyangiitis), episcleritis, scleral staphyloma, blue sclera (osteogenesis imperfecta).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Sclera and Episclera: Anatomy and Inflammation Management",url:"https://www.aao.org/eyenet/article/scleritis-diagnosis-management"},{authority:"Stanford University School of Medicine",title:"Ocular Pathology & Scleral Biomechanics",url:"https://med.stanford.edu/ophthalmology.html"}],historicalTreatise:{author:"Andreas Vesalius",work:"De Humani Corporis Fabrica (1543, Book VII)",note:"Vesalius systematically dissected the hard scleral tunic ('tunica dura / cornea dura') to dismantle Galen's rete mirabile within human cranial anatomy, demonstrating direct ocular-cerebral continuity."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto XXXII & XXXIII (Cocytus)",quote:"Lo pianto stesso lì pianger non lascia, / e 'l duol che truova in su li occhi rintoppo, / si volge in entro a far crescer l'ambascia; / ché le lagrime prime fanno groppo, / e sì come visiere di cristallo, / rïempion sotto 'l ciglio tutto 'l coppo.",commentary:"At the icy nadir of Dante's Inferno, frozen tears turn the ocular coats into rigid crystal visors. The sclera, as the protective armor of the eye, petrifies: weeping cannot escape, turning inward to intensify existential agony."}},{id:"iris",name:"Iris & Pupil",latin:"Iris / Pupilla",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Anterior Uvea)",pinPosition:[0,3.8,8.35],cameraTarget:[0,0,7.5],color:"#ca8a04",opticalMetrics:{apertureRange:"2.0 mm (miosis) to 8.0 mm (mydriasis)",focalRatio:"f/2.1 to f/8.3 optical aperture adjustment",aberrationControl:"Restricts peripheral spherical and chromatic aberration"},medicalDescription:"The contractile pigmented diaphragm dividing the anterior and posterior chambers. Regulates retinal illuminance via antagonistic smooth muscle systems: the circumferentially arranged sphincter pupillae (parasympathetic innervation via CN III / ciliary ganglion) and the radially arranged dilator pupillae (sympathetic innervation via superior cervical ganglion). Posterior pigmented epithelium prevents light leakage.",clinicalPathology:"Acute angle-closure glaucoma (pupillary block resulting in aqueous outflow obstruction at the trabecular meshwork), anterior uveitis (iritis with keratic precipitates), Horner's syndrome, Argyll Robertson pupil.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Basic and Clinical Science Course, Section 2: Fundamentals and Principles of Ophthalmology",url:"https://www.aao.org/education/bcsc"},{authority:"National Institutes of Health (NIH)",title:"National Eye Institute: Pupil Reflex and Uveal Biology",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"Galen of Pergamon",work:"De Usu Partium (On the Usefulness of the Parts of the Body, 2nd Century CE)",note:"Interpreted the pupillary aperture as the conduit for the pneuma optikon (visual spirit) descending from the ventricles of the brain to illuminate the crystalline lens."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' (1987)",quote:"A small light for small people, wanting no / great beam, but testing what they say / with an eye that burns right into your soul / ... Diogenes with his lantern, seeking one just man.",commentary:"The pupil in Heaney becomes Diogenes' lantern: an aperture that tests moral illumination. It does not merely receive light but interrogates the observer with a concentrated, piercing pinpoint."}},{id:"lens",name:"Crystalline Lens & Zonules",latin:"Lens Crystallina",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,2.5,5],cameraTarget:[0,0,5],color:"#e0f2fe",opticalMetrics:{refractiveIndex:"Gradient index: n = 1.386 (cortex) to 1.406 (nucleus)",dioptricPower:"+15.0 to +20.0 Diopters (unaccommodated), up to +30.0 D",accommodation:"Helmholtz mechanism mediated by ciliary muscle contraction"},medicalDescription:"A transparent, biconvex, flexible optical element suspended between the iris and vitreous humor by the delicate zonular fibers of Zinn (ciliary zonule). Highly specialized, mature lens fibers lose their nuclei and organelles to maintain optical clarity, packing high concentrations of crystallin proteins (alpha, beta, gamma). Modulates dynamic focus via Helmholtzian accommodation.",clinicalPathology:"Cataracts (nuclear sclerotic, cortical, or posterior subcapsular opacification due to crystallin protein aggregation), presbyopia (loss of zonular elasticity and lens hardness with age), ectopia lentis (zonular dehiscence in Marfan syndrome).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Lens and Cataract: BCSC Section 11",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI Bookshelf: Webvision",title:"Physiological Optics of the Human Lens and Accommodation",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"}],historicalTreatise:{author:"Galen & Ibn al-Jazzar",work:"Medical Canon on the 'Seat of the Soul' (Classical Antiquity)",note:"From Galen through Islamic medieval medicine, the crystalline lens was mistakenly crowned as the ultimate central organ of visual perception ('principale organum visionis'), rather than a simple refractive lens."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XV & Paradiso, Canto XXVI",quote:"Come quando da l'acqua o da lo specchio / salta lo raggio a l'opposita parte, / salendo su per lo modo parecchio / a quel che scende, e tanto si diparte / dal cader de la pietra in igual tratta, / sì come mostra esperïenza e arte...",commentary:"Dante understands optical accommodation spiritually: as his pilgrim ascends the spheres of Paradise, Beatrice cleanses his ocular crystalline faculty so that his gaze can endure escalating intensities of celestial illumination."}},{id:"ciliaryBody",name:"Ciliary Body & Trabecular Meshwork",latin:"Corpus Ciliare",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Middle Uvea)",pinPosition:[0,5.35,6.85],cameraTarget:[0,3,6],color:"#b45309",opticalMetrics:{aqueousProduction:"2.0–2.5 µL/min secretional rate",accommodationForce:"Smooth muscle vectors adjusting zonular tension",intraocularPressure:"Regulated homeostatically around 15.5 mmHg"},medicalDescription:"The circumferential uveal tissue connecting the choroid with the iris. Composed of two parts: pars plicata (anterior corrugated zone bearing ~70 ciliary processes) and pars plana (posterior flattened zone). Produces aqueous humor through active secretion and ultrafiltration by the dual-layered ciliary epithelium, while containing the smooth ciliary muscle fibers (longitudinal, radial, circular) responsible for lens accommodation.",clinicalPathology:"Primary Open-Angle Glaucoma (trabecular meshwork resistance), cyclitis, hypotony, malignant ciliary block glaucoma.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Glaucoma: Pathophysiology of Aqueous Outflow and Intraocular Pressure",url:"https://www.aao.org/education/bcsc"},{authority:"European Glaucoma Society (EGS)",title:"Terminology and Guidelines for Glaucoma (5th Ed.)",url:"https://www.eugs.org/"}],historicalTreatise:{author:"Hermann von Helmholtz",work:"Handbuch der Physiologischen Optik (Treatise on Physiological Optics, 1856–1867)",note:"Formulated the definitive mechanism of ocular accommodation: ciliary muscle contraction releases zonular tension, allowing the elastic lens capsule to bulge into greater convexity."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Tollund Man' & Bog Poems",quote:"Those dark man-killing parishes. / ... I will feel lost, / Unhappy and at home.",commentary:"The hydraulic pressure within the ciliary apparatus parallels the bog's peat-press: an enclosed, dark anatomical engine regulating fluid balance, preserving archaic bodily tensions beneath peat and flesh."}},{id:"choroid",name:"Choroid",latin:"Choroidea",layerCategory:"vasculosa",layer:"Tunica Vasculosa (Posterior Uvea)",pinPosition:[0,11.5,-3.5],cameraTarget:[0,0,-2],color:"#7f1d1d",opticalMetrics:{bloodFlow:"Highest blood flow per unit weight in human body (~1000 mL/min/100g)",pigmentation:"Dense melanin concentration for thermal/light dissipation",thickness:"0.2 mm (posterior pole) thinning to 0.1 mm anteriorly"},medicalDescription:"The posterior, extensively vascularized section of the uveal tract bounded internally by Bruch's membrane and externally by the sclera. Formed of four histological layers: Haller's layer (large vessel layer), Sattler's layer (medium vessels), choriocapillaris (fenestrated capillary monolayer), and Bruch's membrane (extracellular lamina). Nourishes the avascular outer retina, photoreceptors, and retinal pigment epithelium.",clinicalPathology:"Choroidal neovascularization (CNV in wet age-related macular degeneration), choroidal melanoma, central serous chorioretinopathy, choroidal detachment.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Retina and Vitreous: BCSC Section 12",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / NIH Webvision",title:"The Choroid: Anatomy, Vascular Architecture, and Bruch's Membrane",url:"https://www.ncbi.nlm.nih.gov/books/NBK11554/"}],historicalTreatise:{author:"Johannes Kepler",work:"Ad Vitellionem Paralipomena (Astronomiae Pars Optica, 1604)",note:"Recognized the choroid as the dark, light-absorptive lining of the anatomical camera obscura, preventing internal light back-scatter."},literaryAnalysis:{figure:"Dante Alighieri",text:"Inferno, Canto IX (The City of Dis)",quote:"O voi ch'avete li 'ntelletti sani, / mirate la dottrina che s'asconde / sotto 'l velame de li versi strani.",commentary:"The vascular, blood-gorged choroid is the hidden anatomical veil ('velame') beneath the visual screen: a dark, pulsing under-tunic that sustains perception while remaining entirely concealed from conscious sight."}},{id:"vitreous",name:"Vitreous Humor (Corpus Vitreum)",latin:"Corpus Vitreum",layerCategory:"optical",layer:"Optical Refractive Media",pinPosition:[0,0,0],cameraTarget:[0,0,0],color:"#38bdf8",opticalMetrics:{refractiveIndex:"n = 1.336 (matched closely to aqueous humor)",composition:"98-99% water, type II collagen scaffolding, hyaluronic acid",volume:"4.0 mL (~80% of total globe volume)"},medicalDescription:"A clear, viscoelastic, transparent gel occupying the posterior four-fifths of the globe between the lens and retina. The hyaloid membrane encloses the vitreous core and establishes firm anatomical attachments at the vitreous base (straddling the ora serrata), optic disc margin, macula, and retinal blood vessels. Traversed embryologically by Cloquet's canal (vestige of the fetal hyaloid artery).",clinicalPathology:"Posterior vitreous detachment (PVD), vitreous hemorrhage, asteroid hyalosis, vitreomacular traction syndrome, floaters (vitreous syneresis).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Vitreous Body Physiology and Vitreoretinal Surgery",url:"https://www.aao.org/education/bcsc"},{authority:"National Eye Institute (NEI / NIH)",title:"Vitreous Mechanics and Retinal Traction",url:"https://www.nei.nih.gov/"}],historicalTreatise:{author:"René Descartes",work:"La Dioptrique (1637)",note:"Used the transparent vitreous humor as a mechanical medium in his treatise on optics to model the physical transmission of motion particles (photons) directly onto the cerebral pineal gland."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Grauballe Man' & Bog Poems",quote:"As if he had been poured / in tar, he lies / on a pillow of turf / and seems to weep / the black river of himself.",commentary:"The vitreous body is the internal gelatinous abyss of the eye: a preserved, primordial fluid chamber preserving optical memory just as the peat bog embalms the sacrificed body in fluid suspension."}},{id:"retina",name:"Retina & Ora Serrata",latin:"Tunica Interna / Retina",layerCategory:"nervosa",layer:"Tunica Nervosa (Inner Sensorium)",pinPosition:[0,11.2,-6.5],cameraTarget:[0,0,-3],color:"#f43f5e",opticalMetrics:{photoreceptorCount:"~120 million rods, ~6 million cones",signalTransduction:"11-cis-retinal photoisomerization to all-trans-retinal in <1 picosecond",thickness:"100 µm at ora serrata to 230 µm adjacent to optic disc"},medicalDescription:"The neurosensory tissue of the inner eye that converts incident photons into action potentials. Histologically organized into 10 precisely stratified layers: (1) Retinal Pigment Epithelium, (2) Photoreceptor layer, (3) External Limiting Membrane, (4) Outer Nuclear Layer, (5) Outer Plexiform Layer, (6) Inner Nuclear Layer, (7) Inner Plexiform Layer, (8) Ganglion Cell Layer, (9) Nerve Fiber Layer, and (10) Internal Limiting Membrane.",clinicalPathology:"Rhegmatogenous retinal detachment (retinal tears allowing liquefied vitreous subretinal access), diabetic retinopathy, retinitis pigmentosa, retinal vein occlusion.",medicalSources:[{authority:"NCBI Bookshelf: Webvision",title:"The Organization of the Retina and Visual System (Kolb, Fernandez, Nelson)",url:"https://www.ncbi.nlm.nih.gov/books/NBK11530/"},{authority:"American Academy of Ophthalmology (AAO)",title:"Retinal Anatomy, Physiology, and Vascular Diseases: BCSC Section 12",url:"https://www.aao.org/education/bcsc"}],historicalTreatise:{author:"Johannes Kepler & Santiago Ramón y Cajal",work:"Ad Vitellionem Paralipomena (1604) / The Structure of the Retina (1892)",note:"Kepler proved mathematically that an inverted and reversed physical image is projected onto the retinal screen; Cajal subsequently proved the individual neuronal circuit architecture using Golgi staining."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXXIII (The Beatific Vision)",quote:"Ne la profonda e chiara sussistenza / de l'alto lume parvermi tre giri / di tre colori e d'una contenenza; / e l'un da l'altro come iri da iri / parea reflesso, e 'l terzo parea foco / che quinci e quindi igualmente si spiri.",commentary:"Dante's climax in the Empyrean is the ultimate retinal exposure: the divine trinity appears as three concentric rings of light of three distinct colors, striking the pilgrim's sensorium directly in pure optical geometry."}},{id:"fovea",name:"Macula Lutea & Fovea Centralis",latin:"Fovea Centralis",layerCategory:"nervosa",layer:"Tunica Nervosa (Visual Axis Core)",pinPosition:[3.6,.8,-11.2],cameraTarget:[0,0,-11],color:"#f59e0b",opticalMetrics:{diameter:"1.5 mm (Fovea), 0.35 mm (Foveola / avascular zone)",visualAcuity:"20/20 central foveal acuity (100% packed midget cone system)",pigmentation:"High concentration of lutein and zeaxanthin carotenoids"},medicalDescription:"The specialized, avascular central retinal depression located ~4.0 mm temporal and 0.8 mm inferior to the optic disc center. In the foveola, inner retinal layers are displaced laterally (creating the foveal pit/clivus) to allow unhindered light access to densely packed cone photoreceptors (~200,000 cones/mm²), providing maximal visual resolution and trichromatic color vision.",clinicalPathology:"Age-Related Macular Degeneration (dry/wet AMD with drusen and geographic atrophy), macular hole, central serous chorioretinopathy, cystoid macular edema.",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Age-Related Macular Degeneration PPP (Preferred Practice Pattern)",url:"https://www.aao.org/preferred-practice-pattern/age-related-macular-degeneration-ppp"},{authority:"Journal of Comparative Neurology",title:"Curcio CA, et al. 'Human photoreceptor topography' (1990)",url:"https://pubmed.ncbi.nlm.nih.gov/2358643/"}],historicalTreatise:{author:"Samuel Thomas von Sömmerring",work:"De Foramine Centrali Retinae (1799)",note:"First documented the yellow pigment (macula lutea) and central foveal pit ('foramen centrale') in the human ocular fundus."},literaryAnalysis:{figure:"Dante Alighieri",text:"Paradiso, Canto XXVIII",quote:"Un punto vidi che raggiava lume / acuto sì, che 'l viso ch'elli affoca / chiuder conviensi per lo forte acume; / e quale stella par quinci più poca, / parrebbe luna, locata con esso / come stella con stella si colloca.",commentary:"The fovea centralis is Dante's 'point that radiated light so piercing'—an infinitesimal, blazing focal point of pure resolution around which the entire universe and sensory apparatus pivots."}},{id:"opticDisc",name:"Optic Disc (Mariotte's Blind Spot)",latin:"Discus Nervi Optici / Punctum Caecum",layerCategory:"neural",layer:"Neural Pathways / Physiological Scotoma",pinPosition:[0,0,-11.38],cameraTarget:[0,0,-11],color:"#fbbf24",opticalMetrics:{scotomaSize:"5.5° wide by 7.5° high in visual field (~15° temporal to fixation)",dimension:"1.5 mm horizontal x 1.75 mm vertical diameter",photoreceptorDensity:"Zero (complete absence of rods and cones)"},medicalDescription:"The anatomical exit point for ~1.2 million unmyelinated axons of retinal ganglion cells as they coalesce and pass through the fenestrated scleral lamina cribrosa. Because the disc is devoid of photoreceptors and retinal pigment epithelium, it generates an absolute physiological scotoma (blind spot) in the visual field. Contains the physiological cup and the central retinal artery/vein bifurcations.",clinicalPathology:"Papilledema (bilateral optic disc swelling from elevated intracranial pressure), glaucomatous optic neuropathy (cupping and neuroretinal rim loss), ischemic optic neuropathy (AION/NAION).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology: BCSC Section 5",url:"https://www.aao.org/education/bcsc"},{authority:"NCBI / StatPearls",title:"Physiology, Blind Spot (Punctum Caecum)",url:"https://www.ncbi.nlm.nih.gov/books/NBK545229/"}],historicalTreatise:{author:"Edme Mariotte",work:"Nouvelle Découverte touchant la Vue (Royal Academy of Sciences, Paris, 1668)",note:"Discovered the physiological blind spot by demonstrating that an object positioned at a 15-degree eccentricity disappears completely when its image strikes the optic nerve head."},literaryAnalysis:{figure:"Seamus Heaney",text:"'The Haw Lantern' & 'The Underground'",quote:"There we were in the vaulted tunnel running, / You ahead of me, / ... All the while / I thought of Orpheus, turning to look back.",commentary:"Mariotte's blind spot is the structural blind spot of Orpheus: the inevitable dark void in the center of perception where looking directly causes the object of desire to vanish. Vision is constructed around what it cannot see."}},{id:"opticNerve",name:"Optic Nerve (Cranial Nerve II)",latin:"Nervus Opticus (CN II)",layerCategory:"neural",layer:"Neural Pathways (Ocular-Cerebral Conduit)",pinPosition:[0,0,-17.3],cameraTarget:[0,0,-16],color:"#fde047",opticalMetrics:{axonCount:"~1.2 million myelinated nerve fibers (oligodendrocytes post-lamina)",length:"40–50 mm total (intraocular 1mm, intraorbital 25mm, intracanalicular 9mm, intracranial 10mm)",sheathMeninges:"Ensheathed by dura mater, arachnoid mater, and pia mater with subarachnoid space (CSF)"},medicalDescription:"The paired cranial nerve transmitting visual sensory information from the retina to the lateral geniculate nucleus (LGN), superior colliculus, and pretectal nuclei. Anatomically not a true peripheral nerve but an outpouching of the diencephalon; thus wrapped by all three meningeal sheaths and vulnerable to intracranial pressure transmitted through the subarachnoid space.",clinicalPathology:"Optic neuritis (demyelination in Multiple Sclerosis), optic nerve glioma, traumatic optic neuropathy, compressive pituitary adenoma at the optic chiasm (bitemporal hemianopia).",medicalSources:[{authority:"American Academy of Ophthalmology (AAO)",title:"Neuro-Ophthalmology and Optic Nerve Diseases",url:"https://www.aao.org/education/bcsc"},{authority:"Gray's Anatomy (42nd Ed.)",title:"Cranial Nerves: Cranial Nerve II (Optic Nerve Pathway)",url:"https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0"}],historicalTreatise:{author:"Andreas Vesalius & Galen",work:"De Humani Corporis Fabrica (1543)",note:"Dismantled the ancient Galenic doctrine that the optic nerves were hollow pipes ('canales perforati') channeling spiritus visivus, proving they were solid fibrillar neural cables leading to the optic chiasm."},literaryAnalysis:{figure:"Dante Alighieri",text:"Purgatorio, Canto XXI & Paradiso, Canto XXX",quote:"Non è fantastico lo splendore ond'io mi sento fasciato; / ... e vidi lume in forma di rivera / fulvido di fulgore, intra due rive / dipinte di mirabil primavera.",commentary:"The optic nerve is the river of light connecting Dante's corporeal body to the Empyrean: a biological cable conveying light through darkness until neural sensation transforms into pure spiritual intellect."}}];function HR({activeStructureId:r,onSelectStructure:t,viewMode:i,activeLayerFilter:s}){const l=Qe.useRef(null),c=Qe.useRef(null),f=Qe.useRef(null),d=Qe.useRef(null),m=Qe.useRef(null),p=Qe.useRef(null),_=Qe.useRef(null),v=Qe.useRef({}),g=Qe.useRef([]),S=Qe.useRef([]),T=Qe.useRef(null),w=Qe.useRef(null),[M,x]=Qe.useState(null),[O,B]=Qe.useState(0),[C,P]=Qe.useState(0),[U,I]=Qe.useState(!1);Qe.useEffect(()=>{const F=l.current;if(!F)return;const H=F.clientWidth,X=F.clientHeight||620,$=new bR({antialias:!0,alpha:!0,powerPreference:"high-performance"});$.setPixelRatio(Math.min(window.devicePixelRatio,2)),$.setSize(H,X),$.localClippingEnabled=!0,$.shadowMap.enabled=!0,$.shadowMap.type=kv,$.toneMapping=_p,$.toneMappingExposure=1.22,$.outputColorSpace=vi,$.setClearColor(527117,0),c.current=$,F.innerHTML="",F.appendChild($.domElement);const ct=new ry;f.current=ct;const K=new xi(36,H/X,.1,180);K.position.set(31,16,27),d.current=K;const z=new TR(K,$.domElement);z.enableDamping=!0,z.dampingFactor=.055,z.target.set(0,0,0),z.minDistance=12,z.maxDistance=80,z.autoRotateSpeed=.65,z.autoRotate=U,m.current=z;const tt=new fp($).fromScene(new BR($),.03).texture;ct.environment=tt;const mt=new fd(16774376,3);mt.position.set(18,22,24),mt.castShadow=!0,mt.shadow.mapSize.set(2048,2048),ct.add(mt);const bt=new fd(13164031,1.5);bt.position.set(-18,6,9),ct.add(bt);const N=new fd(16777215,2.3);N.position.set(2,16,-28),ct.add(N),ct.add(new yb(14477551,1445388,.7));const j=new Se(new pu(52,96),new ub({color:0,transparent:!0,opacity:.28}));j.rotation.x=-Math.PI/2,j.position.y=-15.2,j.receiveShadow=!0,ct.add(j);const St=new js;St.rotation.set(-.03,.12,-.08),p.current=St,ct.add(St);const Rt=new js;_.current=Rt,St.add(Rt);const st=i==="crossSection"?O:25,vt=new yi(new k(1,0,0),st);T.current=vt;const Et=new yi(new k(0,0,-1),10.25),Ht=new yi(new k(0,0,-1),8.15),ae=new yi(new k(0,0,-1),7.45),te=new yi(new k(0,0,1),-9.8);function Re(wt={}){return new wa({side:In,roughness:.34,metalness:0,clearcoat:.34,clearcoatRoughness:.24,envMapIntensity:1.05,clippingPlanes:[vt],...wt})}function ge(wt={}){return new gu({side:In,roughness:.5,clippingPlanes:[vt],...wt})}const ue={},xe=[];function ee(wt,qt,le=!1,fe="all"){return qt.name=wt,qt.userData={category:fe,partName:wt},St.add(qt),ue[wt]=ue[wt]||[],ue[wt].push(qt),le&&xe.push({mesh:qt,base:qt.scale.clone(),name:wt}),qt}ee("Sclera",new Se(new Gi(12,160,120),Re({color:15262681,roughness:.48,clearcoat:.22,sheen:.18,sheenColor:new ce(16774635),clippingPlanes:[vt,Et]})),!0,"fibrosa"),ee("Choroid",new Se(new Gi(11.64,150,110),Re({color:3281422,roughness:.52,clearcoat:.16,sheen:.08,sheenColor:new ce(7217944),clippingPlanes:[vt,Ht]})),!0,"vasculosa"),ee("Retina",new Se(new Gi(11.36,150,110),Re({color:9122089,roughness:.42,clearcoat:.24,transmission:.02,sheen:.22,sheenColor:new ce(14251108),clippingPlanes:[vt,ae]})),!0,"nervosa"),ee("Vitreous",new Se(new Gi(10.95,120,90),new wa({color:14479345,transparent:!0,opacity:.085,transmission:.92,thickness:6,ior:1.336,roughness:.08,clearcoat:.3,depthWrite:!1,side:In,clippingPlanes:[vt],envMapIntensity:.8})),!1,"optical");const cn=new wa({color:14349818,transparent:!0,opacity:.32,transmission:.98,ior:1.376,thickness:1,roughness:.04,clearcoat:1,clearcoatRoughness:.05,side:In,depthWrite:!1,clippingPlanes:[vt,te],envMapIntensity:1.35}),an=new Se(new Gi(7.3,160,100),cn);an.scale.set(1,1,1.05),an.position.z=5.3,ee("Cornea",an,!1,"fibrosa");const sn=new Se(new Gi(6,100,70),new wa({color:13625579,transparent:!0,opacity:.09,transmission:.96,ior:1.336,thickness:2,roughness:.04,depthWrite:!1,side:In,clippingPlanes:[vt]}));sn.scale.set(.9,.9,.45),sn.position.z=7.85,ee("Aqueous",sn,!1,"optical");const dn=new Su(2.15,5.35,180,5),Ye=Re({color:4797223,roughness:.62,clearcoat:.18,sheen:.08}),rn=new Se(dn,Ye);rn.position.z=8.35,ee("Iris",rn,!1,"vasculosa");const Y=new cp({color:9269850,transparent:!0,opacity:.28,clippingPlanes:[vt]});for(let wt=0;wt<110;wt++){const qt=wt/110*Math.PI*2+Math.sin(wt*12.73)*.015,le=2.2+Math.sin(wt*3.1)*.08,fe=5.15+Math.sin(wt*1.73)*.12,ze=[new k(Math.cos(qt)*le,Math.sin(qt)*le,8.31),new k(Math.cos(qt+Math.sin(wt)*.018)*fe,Math.sin(qt+Math.sin(wt)*.018)*fe,8.31)],Zn=new iv(new Dn().setFromPoints(ze),Y);ee("Iris",Zn,!1,"vasculosa")}const Ie=new Se(new mu(5.35,.8,28,160),Re({color:6104606,roughness:.5,clearcoat:.23,sheen:.16,sheenColor:new ce(10242619)}));Ie.position.z=6.85,ee("Ciliary Body",Ie,!1,"vasculosa");for(let wt=0;wt<40;wt++){const qt=wt/40*Math.PI*2,le=new Se(new Dp(.14,.72,5,10),ge({color:7418406,roughness:.56}));le.position.set(Math.cos(qt)*4.75,Math.sin(qt)*4.75,6.55),le.rotation.z=qt+Math.PI/2,le.rotation.x=Math.PI/2,ee("Ciliary Body",le,!1,"vasculosa")}const Ce=new Se(new Gi(5,140,100),new wa({color:14278603,transparent:!0,opacity:.64,transmission:.72,ior:1.406,thickness:3.5,roughness:.12,clearcoat:.56,clearcoatRoughness:.1,side:In,clippingPlanes:[vt],envMapIntensity:1.1}));Ce.scale.set(.91,.91,.41),Ce.position.z=5,ee("Lens",Ce,!1,"optical");const L=new Se(new Gi(4,110,80),new wa({color:14078637,transparent:!0,opacity:.22,transmission:.82,ior:1.41,thickness:2.5,roughness:.17,side:In,clippingPlanes:[vt],depthWrite:!1}));L.scale.set(.83,.83,.36),L.position.z=5,ee("Lens",L,!1,"optical");const b=new cp({color:14997949,transparent:!0,opacity:.32,clippingPlanes:[vt]});for(let wt=0;wt<48;wt++){const qt=wt/48*Math.PI*2,le=new k(Math.cos(qt)*4.55,Math.sin(qt)*4.55,5.1),fe=new k(Math.cos(qt)*5.08,Math.sin(qt)*5.08,6.45),ze=new k(Math.cos(qt)*4.55,Math.sin(qt)*4.55,4.9),Zn=new k(Math.cos(qt)*5.08,Math.sin(qt)*5.08,6.15);for(const Mi of[[le,fe],[ze,Zn]])ee("Lens",new iv(new Dn().setFromPoints(Mi),b),!1,"optical")}const J=Re({color:13874312,roughness:.58,clearcoat:.12,sheen:.08}),rt=new Se(new ol(1.65,2.05,13.2,64,4),J);rt.rotation.x=Math.PI/2,rt.position.set(0,0,-17.3),ee("Optic Nerve",rt,!1,"neural");const ht=new Se(new pu(1.05,72),Re({color:14921868,roughness:.52,clearcoat:.18}));ht.position.set(0,0,-11.38),ht.rotation.y=Math.PI,ee("Optic Disc",ht,!1,"neural");const At=Re({color:7540756,roughness:.4,clearcoat:.38,sheen:.12,clippingPlanes:[vt]}),Ut=Re({color:4133143,roughness:.42,clearcoat:.3,clippingPlanes:[vt]});function ft(wt,qt,le=11.3){return new k(le*Math.sin(wt)*Math.cos(qt),le*Math.sin(wt)*Math.sin(qt),-le*Math.cos(wt))}function dt(wt,qt,le){const fe=new dy(wt),ze=new Se(new Lp(fe,Math.max(24,wt.length*10),qt,7,!1),le);ee("Blood Vessels",ze,!1,"nervosa")}const Ct=[-1.05,-.66,-.25,.18,.62,1.02];for(let wt=0;wt<Ct.length;wt++){const qt=Ct[wt],le=[];for(let fe=0;fe<10;fe++){const ze=.06+fe*.105,Zn=qt+Math.sin(fe*.78+wt*1.9)*.055+fe*fe*.0018*(wt%2?1:-1);le.push(ft(ze,Zn))}dt(le,wt%2?.115:.13,wt%2?Ut:At);for(let fe=0;fe<2;fe++){const ze=4+fe*2,Zn=[le[ze]],Mi=(fe===0?-1:1)*(wt%2?1:-1);for(let Le=1;Le<7;Le++){const Nn=.06+(ze+Le)*.105,Li=qt+Mi*(.065*Le+.008*Le*Le)+Math.sin((Le+wt)*1.2)*.035;Zn.push(ft(Nn,Li))}dt(Zn,.065,wt%2?Ut:At);const Vn=3,pn=[Zn[Vn]];for(let Le=1;Le<5;Le++){const Nn=.06+(ze+Vn+Le)*.105,Li=qt+Mi*(.065*(Vn+Le)+.008*(Vn+Le)*(Vn+Le))-Mi*.05*Le;pn.push(ft(Nn,Li))}dt(pn,.035,wt%2?Ut:At)}}const Bt=new Se(new ol(.115,.14,11.8,16),new wa({color:8261652,roughness:.34,clearcoat:.38}));Bt.rotation.x=Math.PI/2,Bt.position.set(.28,0,-17.2),ee("Blood Vessels",Bt,!1,"neural");const Nt=new Se(new ol(.12,.16,11.8,16),new wa({color:4329499,roughness:.35,clearcoat:.34}));Nt.rotation.x=Math.PI/2,Nt.position.set(-.28,0,-17.2),ee("Blood Vessels",Nt,!1,"neural");function Lt(wt,qt,le,fe=1){const ze=new Se(new mu(wt,qt,14,180),new wa({color:le,transparent:fe<1,opacity:fe,roughness:.58,clearcoat:.13,side:In,clippingPlanes:[],depthWrite:fe>.4}));return ze.rotation.y=Math.PI/2,ze.position.x=-st+.015,St.add(ze),ze}const Qt=Lt(11.83,.2,15657438),Jt=Lt(11.52,.1,4855569),se=Lt(11.28,.075,11292998,.95);Qt.material.clippingPlanes=[Et],Jt.material.clippingPlanes=[Ht],se.material.clippingPlanes=[ae];const q=Lt(11.12,.025,16761273,.34);q.material.clippingPlanes=[ae],S.current=[Qt,Jt,se,q],ue.Sclera.push(Qt),ue.Choroid.push(Jt),ue.Retina.push(se),ue.Retina.push(q),v.current=ue,g.current=xe,Gv(Rt,_s,r,s);const Tt=new Tb,pt=new kt,Dt=wt=>{const qt=$.domElement.getBoundingClientRect();if(pt.x=(wt.clientX-qt.left)/qt.width*2-1,pt.y=-((wt.clientY-qt.top)/qt.height)*2+1,Tt.setFromCamera(pt,K),_.current){const le=_.current.children.map(ze=>ze.children[0]).filter(Boolean),fe=Tt.intersectObjects(le);if(fe.length>0){const ze=fe[0].object.userData.structureId;x(ze),$.domElement.style.cursor="pointer"}else x(null),$.domElement.style.cursor="grab"}},Pt=wt=>{const qt=$.domElement.getBoundingClientRect();if(pt.x=(wt.clientX-qt.left)/qt.width*2-1,pt.y=-((wt.clientY-qt.top)/qt.height)*2+1,Tt.setFromCamera(pt,K),_.current){const le=_.current.children.map(ze=>ze.children[0]).filter(Boolean),fe=Tt.intersectObjects(le);if(fe.length>0){const ze=fe[0].object.userData.structureId;ze&&t&&t(ze)}}},Mt=$.domElement;Mt.addEventListener("pointermove",Dt),Mt.addEventListener("click",Pt);const Yt=new ResizeObserver(wt=>{for(let qt of wt){const le=qt.contentRect.width,fe=qt.contentRect.height||620;le>0&&fe>0&&(K.aspect=le/fe,K.updateProjectionMatrix(),$.setSize(le,fe))}});Yt.observe(F);const Vt=new Ab,tn=()=>{const wt=Vt.getElapsedTime();N.intensity=2.15+Math.sin(wt*.45)*.1,_.current&&_.current.children.forEach(qt=>{const le=qt.children[1];if(le){const fe=1+.25*Math.sin(wt*4+qt.position.z);le.scale.set(fe,fe,fe)}}),z.update(),$.render(ct,K),w.current=requestAnimationFrame(tn)};return tn(),()=>{w.current&&cancelAnimationFrame(w.current),Mt.removeEventListener("pointermove",Dt),Mt.removeEventListener("click",Pt),Yt.disconnect(),$.dispose()}},[i]),Qe.useEffect(()=>{if(T.current){const F=i==="crossSection",H=F?O:25;T.current.constant=H;const X=-H+.015;S.current.forEach($=>{$&&($.position.x=X,$.visible=F)})}},[O,i]),Qe.useEffect(()=>{const F=C,H={Sclera:1+.032*F,Choroid:1+.016*F,Retina:1};g.current.forEach(X=>{const $=H[X.name]||1;X.mesh.scale.copy(X.base).multiplyScalar($)}),S.current[0]&&S.current[0].scale.setScalar(1+.032*F),S.current[1]&&S.current[1].scale.setScalar(1+.016*F)},[C]),Qe.useEffect(()=>{m.current&&(m.current.autoRotate=U)},[U]),Qe.useEffect(()=>{p.current&&p.current.children.forEach(F=>{if(F===_.current||F.type==="Line")return;const H=F.userData?.category;!H||s==="all"?F.visible=!0:F.visible=H===s}),_.current&&Gv(_.current,_s,r,s)},[s,r]),Qe.useEffect(()=>{if(!r||!m.current||!d.current)return;const F=_s.find(H=>H.id===r);if(F&&F.cameraTarget&&F.pinPosition){const[H,X,$]=F.cameraTarget,[ct,K,z]=F.pinPosition,V=m.current,tt=d.current;V.target.set(H,X,$);const mt=24,bt=Math.hypot(ct-H,K-X,z-$)||1,N=(ct-H)/bt,j=(K-X)/bt,St=(z-$)/bt;tt.position.set(H+N*mt+10,X+j*mt+6,$+St*mt+12),V.update()}},[r]);const E=()=>{m.current&&d.current&&(d.current.position.set(31,16,27),m.current.target.set(0,0,0),m.current.update())},D=()=>{m.current&&d.current&&(d.current.position.set(18,3,-2),m.current.target.set(0,0,-3.5),m.current.update())};return gt.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"620px"},children:[gt.jsx("div",{ref:l,style:{width:"100%",height:"100%",minHeight:"620px",borderRadius:"12px",overflow:"hidden"}}),gt.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",width:"min(290px, calc(100% - 2rem))",background:"rgba(15, 18, 22, 0.82)",backdropFilter:"blur(14px)",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",padding:"1rem",color:"#eef3f5",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.45)",zIndex:20},children:[gt.jsx("div",{style:{fontSize:"0.88rem",fontWeight:"700",marginBottom:"0.2rem",color:"#fff"},children:"Anatomical Controls"}),gt.jsx("div",{style:{fontSize:"0.74rem",color:"rgba(235, 244, 247, 0.65)",marginBottom:"0.75rem"},children:"Drag to orbit • Scroll to zoom • Click pins"}),gt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.5rem"},children:[gt.jsx("span",{children:"Cutaway opening:"}),gt.jsx("input",{type:"range",min:"-2.5",max:"2.5",step:"0.05",value:O,onChange:F=>B(parseFloat(F.target.value)),style:{width:"110px",accentColor:"var(--accent-gold)"}})]}),gt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.78rem",marginBottom:"0.85rem"},children:[gt.jsx("span",{children:"Layer separation:"}),gt.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:C,onChange:F=>P(parseFloat(F.target.value)),style:{width:"110px",accentColor:"var(--accent-gold)"}})]}),gt.jsxs("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap"},children:[gt.jsx("button",{onClick:E,style:yd,title:"Reset to default 3D camera angle",children:"↺ Reset"}),gt.jsx("button",{onClick:D,style:yd,title:"Inspect inside the fundus & retina",children:"👁️ Inspect Retina"}),gt.jsx("button",{onClick:()=>I(!U),style:{...yd,background:U?"rgba(216, 184, 99, 0.3)":"rgba(255, 255, 255, 0.08)"},title:"Toggle 360° auto rotation",children:U?"⏸ Stop":"▶ Orbit"})]})]}),M&&gt.jsxs("div",{style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(20, 21, 26, 0.95)",backdropFilter:"blur(12px)",border:"1px solid var(--accent-gold)",padding:"0.6rem 1.1rem",borderRadius:"8px",color:"#fff",fontSize:"0.88rem",boxShadow:"0 8px 24px rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:30},children:[gt.jsx("strong",{style:{color:"var(--accent-gold)"},children:_s.find(F=>F.id===M)?.name}),gt.jsx("span",{style:{display:"block",fontSize:"0.75rem",color:"var(--text-secondary)",fontStyle:"italic"},children:_s.find(F=>F.id===M)?.latin})]}),gt.jsx("div",{style:{position:"absolute",bottom:"1rem",right:"1rem",fontSize:"0.75rem",color:"rgba(235, 244, 247, 0.55)",background:"rgba(10, 12, 14, 0.55)",padding:"0.4rem 0.8rem",borderRadius:"6px",backdropFilter:"blur(8px)",border:"1px solid rgba(255, 255, 255, 0.08)"},children:"Clinical Ophthalmic WebGL Anatomical Model"})]})}function Gv(r,t,i,s){for(;r.children.length>0;)r.remove(r.children[0]);t.forEach(l=>{if(s!=="all"&&l.layerCategory!==s)return;const c=l.id===i,f=new js;f.position.set(...l.pinPosition);const d=new Gi(c?.65:.45,20,20),m=new fu({color:c?13938487:16777215}),p=new Se(d,m);p.userData={structureId:l.id},f.add(p);const _=new Su(.65,.95,32),v=new fu({color:c?13938487:l.color||3718648,side:In,transparent:!0,opacity:c?.95:.7}),g=new Se(_,v);g.lookAt(0,0,10),f.add(g),r.add(f)})}const yd={appearance:"none",border:"1px solid rgba(255, 255, 255, 0.16)",color:"#eff5f7",background:"rgba(255, 255, 255, 0.08)",borderRadius:"6px",padding:"0.35rem 0.65rem",fontSize:"0.74rem",cursor:"pointer",transition:"all 0.2s ease"};function GR({structure:r}){const[t,i]=Qe.useState("medical");return r?gt.jsxs("div",{className:"glass-panel",style:{height:"100%",padding:"2rem",display:"flex",flexDirection:"column",overflowY:"auto",maxHeight:"750px",animation:"fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)"},children:[gt.jsxs("div",{style:{borderBottom:"1px solid var(--border-glass)",paddingBottom:"1.25rem",marginBottom:"1.25rem"},children:[gt.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.4rem"},children:[gt.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--accent-crimson)",fontWeight:"600",background:"rgba(158, 42, 43, 0.15)",padding:"0.2rem 0.6rem",borderRadius:"4px",border:"1px solid rgba(158, 42, 43, 0.3)"},children:r.layer}),gt.jsx("span",{style:{fontStyle:"italic",color:"var(--text-secondary)",fontSize:"0.9rem"},children:r.latin})]}),gt.jsx("h2",{style:{fontSize:"2.2rem",color:"var(--accent-gold)",margin:"0.2rem 0 0.5rem 0"},children:r.name}),r.opticalMetrics&&gt.jsx("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap",marginTop:"0.75rem"},children:Object.entries(r.opticalMetrics).map(([s,l])=>gt.jsxs("span",{style:{fontSize:"0.8rem",background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-glass)",padding:"0.25rem 0.6rem",borderRadius:"6px",color:"var(--text-primary)"},children:[gt.jsxs("strong",{style:{color:"var(--accent-gold)",textTransform:"capitalize"},children:[s.replace(/([A-Z])/g," $1"),":"]})," ",l]},s))})]}),gt.jsxs("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(0, 0, 0, 0.3)",padding:"0.3rem",borderRadius:"8px",marginBottom:"1.5rem",border:"1px solid var(--border-glass)",overflowX:"auto"},children:[gt.jsx("button",{onClick:()=>i("medical"),style:Qc(t==="medical"),children:"🩺 Anatomy & Pathology"}),gt.jsxs("button",{onClick:()=>i("sources"),style:Qc(t==="sources"),children:["📚 Medical Sources (",r.medicalSources?.length||0,")"]}),gt.jsx("button",{onClick:()=>i("history"),style:Qc(t==="history"),children:"📜 Historical Treatise"}),gt.jsx("button",{onClick:()=>i("literary"),style:Qc(t==="literary"),children:"🖋️ Literary Analysis"})]}),gt.jsxs("div",{style:{flex:1},children:[t==="medical"&&gt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[gt.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",borderRadius:"8px",borderLeft:"4px solid var(--accent-gold)"},children:[gt.jsx("h4",{style:{color:"var(--text-primary)",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Histological Organization & Physiology"}),gt.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:r.medicalDescription})]}),r.clinicalPathology&&gt.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.08)",borderRadius:"8px",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.2)"},children:[gt.jsx("h4",{style:{color:"#f87171",marginBottom:"0.5rem",fontSize:"1.05rem"},children:"Clinical Pathologies & Diagnostics"}),gt.jsx("p",{style:{fontSize:"0.92rem",lineHeight:"1.6",color:"var(--text-primary)"},children:r.clinicalPathology})]})]}),t==="sources"&&gt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[gt.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"0.25rem"},children:"Data and anatomical parameters pooled from peer-reviewed ophthalmic authorities and institutional curricula:"}),r.medicalSources?.map((s,l)=>gt.jsxs("div",{className:"interactive-card",style:{padding:"1rem 1.25rem",background:"rgba(20, 21, 26, 0.8)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[gt.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.3rem"},children:[gt.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-gold)",fontWeight:"600"},children:s.authority}),gt.jsx("span",{style:{fontSize:"0.75rem",color:"#6ee7b7"},children:"✓ Verified Peer-Reviewed"})]}),gt.jsx("h5",{style:{fontSize:"0.95rem",color:"var(--text-primary)",marginBottom:"0.5rem",fontWeight:"500"},children:s.title||s.citation}),s.url&&gt.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem",color:"var(--accent-gold)",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:"View Authority Catalog ↗"})]},l))]}),t==="history"&&r.historicalTreatise&&gt.jsxs("div",{style:{padding:"1.5rem",background:"rgba(216, 184, 99, 0.05)",border:"1px solid rgba(216, 184, 99, 0.2)",borderRadius:"10px"},children:[gt.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"var(--accent-gold)"},children:"Historical Anatomical Root"}),gt.jsx("h3",{style:{fontSize:"1.3rem",color:"var(--text-primary)",margin:"0.4rem 0"},children:r.historicalTreatise.author}),gt.jsx("p",{style:{fontStyle:"italic",color:"var(--accent-gold)",marginBottom:"1rem",fontSize:"0.95rem"},children:r.historicalTreatise.work}),gt.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-primary)"},children:r.historicalTreatise.note})]}),t==="literary"&&r.literaryAnalysis&&gt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[gt.jsxs("div",{style:{padding:"1.25rem",background:"rgba(158, 42, 43, 0.1)",borderLeft:"4px solid var(--accent-crimson)",border:"1px solid rgba(158, 42, 43, 0.25)",borderRadius:"8px"},children:[gt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[gt.jsx("span",{style:{color:"var(--accent-crimson)",fontWeight:"bold",fontSize:"0.9rem"},children:r.literaryAnalysis.figure}),gt.jsx("span",{style:{fontStyle:"italic",fontSize:"0.85rem",color:"var(--text-secondary)"},children:r.literaryAnalysis.text})]}),gt.jsxs("blockquote",{style:{fontFamily:"Playfair Display",fontStyle:"italic",fontSize:"1.05rem",color:"var(--text-primary)",lineHeight:"1.6",margin:"0.75rem 0"},children:['"',r.literaryAnalysis.quote,'"']})]}),gt.jsxs("div",{style:{padding:"1.25rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border-glass)",borderRadius:"8px"},children:[gt.jsx("h5",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Critical Commentary"}),gt.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.7",color:"var(--text-secondary)"},children:r.literaryAnalysis.commentary})]})]})]})]}):gt.jsxs("div",{className:"glass-panel",style:{height:"100%",minHeight:"450px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2.5rem",textAlign:"center",color:"var(--text-secondary)"},children:[gt.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem",opacity:.8},children:"👁️"}),gt.jsx("h3",{style:{color:"var(--accent-gold)",marginBottom:"0.5rem",fontSize:"1.4rem"},children:"3D Interactive Ocular Dissection"}),gt.jsx("p",{style:{maxWidth:"380px",fontSize:"0.95rem",lineHeight:"1.6"},children:"Click on any glowing anatomical pin in the 3D viewport or select a structure from the directory to inspect its medical anatomy, clinical citations, and literary resonance."})]})}function Qc(r){return{flex:"1 1 auto",padding:"0.55rem 0.8rem",background:r?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"6px",color:r?"#fff":"var(--text-secondary)",fontSize:"0.82rem",fontWeight:r?"600":"400",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"}}function VR(){const[r,t]=Qe.useState("cornea"),[i,s]=Qe.useState("crossSection"),[l,c]=Qe.useState("all"),f=_s.find(m=>m.id===r)||_s[0],d=_s.filter(m=>l==="all"||m.layerCategory===l);return gt.jsxs("div",{className:"section-container",style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[gt.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:[gt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem"},children:[gt.jsxs("div",{children:[gt.jsx("span",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"2px",color:"var(--accent-gold)"},children:"Interactive 3D Ocular Deep-Map"}),gt.jsx("h2",{style:{fontSize:"2.4rem",color:"var(--text-primary)",marginTop:"0.25rem"},children:"The Dissected Eye: 3D Anatomical Atlas"}),gt.jsx("p",{style:{maxWidth:"850px",fontSize:"1.05rem",color:"var(--text-secondary)",marginTop:"0.5rem",lineHeight:"1.6"},children:"Interactive 3D WebGL model modeled after clinical ophthalmic anatomy (LASIK, AAO, NIH Webvision). Rotate in 360°, inspect internal structures in sagittal cutaway dissection, and explore the convergence of medical ocular anatomy and Dante/Heaney poetics."})]}),gt.jsxs("div",{style:{display:"flex",background:"rgba(0,0,0,0.5)",padding:"0.4rem",borderRadius:"10px",border:"1px solid var(--border-glass)",gap:"0.4rem"},children:[gt.jsx("button",{onClick:()=>s("crossSection"),style:Vv(i==="crossSection"),title:"Sagittal cross-section revealing internal anatomy",children:"🔪 Sagittal Dissection (Cutaway)"}),gt.jsx("button",{onClick:()=>s("composite"),style:Vv(i==="composite"),title:"Full intact spherical globe",children:"👁️ Intact 3D Globe"})]})]}),gt.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1.5rem",flexWrap:"wrap",borderTop:"1px solid var(--border-glass)",paddingTop:"1.25rem"},children:[gt.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",alignSelf:"center",marginRight:"0.5rem"},children:"Filter Tunics:"}),FR.map(m=>gt.jsx("button",{onClick:()=>c(m.id),style:kR(l===m.id),children:m.label},m.id))]}),gt.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"1rem",overflowX:"auto",paddingBottom:"0.4rem"},children:d.map(m=>{const p=m.id===r;return gt.jsxs("button",{onClick:()=>t(m.id),style:{padding:"0.4rem 0.85rem",background:p?"rgba(216, 184, 99, 0.2)":"rgba(255, 255, 255, 0.03)",border:`1px solid ${p?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"20px",color:p?"var(--accent-gold)":"var(--text-secondary)",fontSize:"0.82rem",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease"},children:[p?"● ":"",m.name]},m.id)})})]}),gt.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(420px, 1fr))",gap:"1.5rem",alignItems:"stretch"},children:[gt.jsxs("div",{className:"glass-panel",style:{position:"relative",padding:"1rem",display:"flex",flexDirection:"column",minHeight:"600px",border:"1px solid var(--border-glass)"},children:[gt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1rem",borderBottom:"1px solid var(--border-glass)",marginBottom:"0.5rem"},children:[gt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[gt.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e"}}),gt.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-primary)",letterSpacing:"0.5px"},children:"Interactive 3D WebGL Model"})]}),gt.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:["Mode: ",i==="crossSection"?"Sagittal Cutaway Dissection":"Intact Ocular Globe"]})]}),gt.jsx("div",{style:{flex:1,position:"relative",minHeight:"520px"},children:gt.jsx(HR,{activeStructureId:r,onSelectStructure:m=>t(m),viewMode:i,activeLayerFilter:l})})]}),gt.jsx("div",{style:{minHeight:"600px"},children:gt.jsx(GR,{structure:f})})]})]})}function Vv(r){return{padding:"0.55rem 1.1rem",background:r?"var(--accent-crimson)":"transparent",border:"none",borderRadius:"7px",color:r?"#fff":"var(--text-secondary)",fontSize:"0.85rem",fontWeight:r?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function kR(r){return{padding:"0.35rem 0.8rem",background:r?"rgba(216, 184, 99, 0.25)":"rgba(255, 255, 255, 0.04)",border:`1px solid ${r?"var(--accent-gold)":"var(--border-glass)"}`,borderRadius:"6px",color:r?"#fff":"var(--text-secondary)",fontSize:"0.8rem",fontWeight:r?"600":"400",cursor:"pointer",transition:"all 0.2s ease"}}function XR(){return gt.jsxs("div",{className:"section-container glass-panel",style:{padding:"2rem"},children:[gt.jsx("h2",{style:{marginBottom:"1rem",borderBottom:"1px solid var(--border-glass)",paddingBottom:"1rem"},children:"The Medical Gaze and the Abject Body"}),gt.jsx("p",{style:{marginBottom:"2rem",maxWidth:"800px",fontSize:"1.1rem"},children:'Explore how the "repulsive object" of the corpse, viewed through a medical lens, becomes the site of both poetic reflection and existential disintegration.'}),gt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:HS.map(r=>gt.jsxs("div",{className:"interactive-card glass-panel",style:{padding:"1.5rem",display:"flex",flexDirection:"column"},children:[gt.jsx("div",{style:{height:"200px",background:"var(--bg-primary)",borderRadius:"8px",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border-glass)",color:"var(--text-secondary)",fontStyle:"italic",overflow:"hidden"},children:r.image?gt.jsx("img",{src:r.image,alt:r.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):`[Image Placeholder: ${r.title}]`}),gt.jsx("span",{style:{fontSize:"0.8rem",color:"var(--accent-crimson)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"0.5rem"},children:r.type}),gt.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"1rem",color:"var(--accent-gold)"},children:r.title}),gt.jsx("p",{style:{fontSize:"0.95rem",flexGrow:1},children:r.description})]},r.id))})]})}function WR(){const[r,t]=Qe.useState("timeline"),i={timeline:gt.jsx(GS,{}),diagram:gt.jsx(VR,{}),gallery:gt.jsx(XR,{})};return gt.jsxs("div",{className:"app-container",children:[gt.jsxs("header",{className:"glass-panel app-header",style:{margin:"2rem",padding:"2rem",textAlign:"center"},children:[gt.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"0.5rem",color:"var(--accent-gold)"},children:"The Anatomical Gaze"}),gt.jsx("p",{className:"subtitle",style:{fontSize:"1.1rem",marginBottom:"2rem"},children:"Medical Optics, Ocular Anatomy, and the Literary Eye from Dante to Heaney"}),gt.jsxs("nav",{className:"main-nav",style:{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"},children:[gt.jsx("button",{className:`nav-btn interactive-card ${r==="timeline"?"active":""}`,onClick:()=>t("timeline"),style:xd(r==="timeline"),children:"The Medical Eye"}),gt.jsx("button",{className:`nav-btn interactive-card ${r==="diagram"?"active":""}`,onClick:()=>t("diagram"),style:xd(r==="diagram"),children:"The Dissected Eye"}),gt.jsx("button",{className:`nav-btn interactive-card ${r==="gallery"?"active":""}`,onClick:()=>t("gallery"),style:xd(r==="gallery"),children:"The Abject Body"})]})]}),gt.jsx("main",{className:"content-area",style:{margin:"0 2rem 2rem 2rem",minHeight:"60vh"},children:i[r]})]})}function xd(r){return{padding:"0.75rem 1.5rem",background:r?"var(--accent-crimson)":"var(--bg-glass)",border:`1px solid ${r?"var(--accent-crimson)":"var(--border-glass)"}`,color:"#fff",borderRadius:"8px",fontFamily:"Inter",fontWeight:"500",fontSize:"1rem",cursor:"pointer",transition:"var(--transition-fast)"}}BS.createRoot(document.getElementById("root")).render(gt.jsx(Qe.StrictMode,{children:gt.jsx(WR,{})}));
