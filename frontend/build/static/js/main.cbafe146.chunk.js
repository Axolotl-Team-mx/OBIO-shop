(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(10),a=n.n(o),s=n(21),i=n(14),l=n(25),j=n(26),u=Object(i.combineReducers)({}),b={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},d=[l.a],O=Object(i.createStore)(u,b,Object(j.composeWithDevTools)(i.applyMiddleware.apply(void 0,d))),f=(n(37),n(17)),p=n(15),h=n(4),m=[{path:"/",name:"home",exact:!0,component:Object(c.lazy)((function(){return n.e(3).then(n.bind(null,52))}))}],x=n(47),g=n(46),I=n.p+"static/media/logo1.38ec1c06.png",S=(n(38),n(3));function v(){return Object(S.jsx)(x.a,{fixed:"top",collapseOnSelect:!0,variant:"secondary",expand:"lg",children:Object(S.jsx)(g.a,{children:Object(S.jsx)(x.a.Brand,{href:"/",children:Object(S.jsx)("img",{height:"40",src:I})})})})}function y(){var e=Object(h.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}n(42);function w(){return Object(S.jsx)("img",{className:"loader-logo",src:I})}function F(e){e.history;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(y,{}),Object(S.jsx)(v,{}),Object(S.jsx)(r.a.Suspense,{fallback:Object(S.jsx)(w,{}),children:Object(S.jsx)(h.c,{children:null===m||void 0===m?void 0:m.map((function(e,t){return e.component?Object(S.jsx)(h.a,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(S.jsx)(e.component,Object(f.a)({},t))}},t):null}))})})]})}var J=function(){return Object(S.jsx)(p.a,{children:Object(S.jsx)(h.c,{children:Object(S.jsx)(h.a,{path:"/",name:"store",render:function(e){return Object(S.jsx)(F,Object(f.a)({},e))}})})})},T=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(S.jsx)(s.a,{store:O,children:Object(S.jsx)(J,{})}),document.getElementById("root")),T()}},[[43,1,2]]]);
//# sourceMappingURL=main.cbafe146.chunk.js.map