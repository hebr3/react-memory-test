(this["webpackJsonpreact-memory-test"]=this["webpackJsonpreact-memory-test"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(15),a(6)),s=a(7),i=a(20),u=a(19);a(16);var m=function(){var e=Object(n.useState)(4),t=Object(s.a)(e,2),a=t[0],c=(t[1],Object(n.useState)([])),o=Object(s.a)(c,2),m=o[0],f=o[1],d=Object(n.useState)(i.a(1,a*a+1)),h=Object(s.a)(d,2),b=h[0],p=h[1];return Object(n.useEffect)((function(){p(function(e){for(var t=Object(l.a)(e),a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(1*a)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}(b))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h4",null,"Memory Test")),r.a.createElement("div",{className:"board",style:{gridTemplateColumns:i.a(0,a).map((function(e){return"1fr"})).join(" ")}},b&&b.map((function(e){return e<a*a/2?r.a.createElement("button",{className:"cell-active",key:e,onClick:function(){return t=e,void f(u.a([].concat(Object(l.a)(m),[t])));var t}},e):r.a.createElement("button",{className:"cell",key:e},e)}))),r.a.createElement("pre",null,JSON.stringify(m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.5cc90327.chunk.js.map