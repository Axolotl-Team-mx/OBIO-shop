(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12],{102:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(109),n=t(2);function r(){return Object(n.jsx)(c.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",display:"block",margin:"auto"}})}},103:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var c=t(99),n=t(0),r=t.n(n),s=t(110),i=t(2);function o(e){var a=e.variant,t=e.children,n=r.a.useState(!0),o=Object(c.a)(n,2),l=o[0],j=o[1];return l?Object(i.jsx)(s.a,{variant:a,onClose:function(){return j(!l)},children:t}):null}},107:function(e,a,t){"use strict";t(0);var c=t(2);a.a=function(e){var a=e.value,t=e.text,n=e.color;return Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:n},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:n},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:n},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:n},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:n},className:a>=4?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:t&&t})]})}},151:function(e,a,t){},167:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var c=t(28),n=t(13),r=t(99),s=t(0),i=t(27),o=t(92),l=t(67),j=t(93),d=t(66),u=t(95),b=t(159),O=t(158),h=(t(150),t(107)),f=t(15),v=t(102),p=t(103),x=t(98),m=t(7),g=(t(151),t(2)),E={name:"",comment:"",rating:0,user:null};function S(e){var a,t=e.history,S=e.match.params.id,y=Object(i.b)(),C=Object(s.useState)(E),T=Object(r.a)(C,2),R=T[0],I=T[1],U=Object(i.c)((function(e){return e.productDetails})),N=U.error,D=U.loading,_=(U.success,U.product),w=Object(i.c)((function(e){return e.userLogin})).userInfo,L=Object(i.c)((function(e){return e.productReview})),P=L.loading,A=L.success,k=L.error;return Object(s.useEffect)((function(){var e;(y(Object(x.a)("/api/products/getproduct/".concat(S,"/"),"GET",{},{SUCESS:m.a.PRODUCT_DETAILS_SUCCESS,FAIL:m.a.PRODUCT_DETAILS_FAIL,REQUEST:m.a.PRODUCT_DETAILS_REQUEST})),w)&&I(Object(n.a)(Object(n.a)({},R),{},(e={},Object(c.a)(e,"name",null===w||void 0===w?void 0:w.name),Object(c.a)(e,"user",null===w||void 0===w?void 0:w.id),e)))}),[S,t,w,A]),Object(s.useEffect)((function(){y({type:m.a.PRODUCT_REVIEW_RESET})}),[t]),D?Object(g.jsx)("div",{style:{minHeight:"100vh",marginTop:"15vh"},children:Object(g.jsx)(v.a,{})}):N?Object(g.jsx)("div",{style:{minHeight:"100vh",marginTop:"15vh"},children:Object(g.jsx)(p.a,{variant:"danger",children:N})}):Object(g.jsxs)("div",{style:{marginTop:"10vh",overflowX:"hidden",marginBottom:"5vh"},children:[Object(g.jsx)(o.a,{className:"p-5","data-aos":"fade-down",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(f.Link,{to:"/",children:Object(g.jsxs)(l.a,{children:[" ",Object(g.jsx)("i",{className:"fas fa-exchange-alt"})," Regresar"]})}),Object(g.jsx)("h1",{className:"text-primary mt-3",children:null===_||void 0===_?void 0:_.prodName})]})}),Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(j.a,{children:[Object(g.jsx)(d.a,{md:5,children:Object(g.jsx)(O.a,{children:Object(g.jsx)("img",{className:"image-product",src:"https://res.cloudinary.com/jordiespinoza/".concat(null===_||void 0===_?void 0:_.prodPic)})})}),Object(g.jsxs)(d.a,{md:4,className:"p-5",children:[Object(g.jsxs)("h1",{children:["$ ",null===_||void 0===_?void 0:_.prodPrice,"MXN"]}),Object(g.jsx)(h.a,{value:null===_||void 0===_?void 0:_.rating,color:"#d3a007"}),Object(g.jsx)("span",{children:null===_||void 0===_?void 0:_.prodDesc}),Object(g.jsx)("br",{}),Object(g.jsxs)(l.a,{variant:"success",type:"button",onClick:function(e){w?t.push("/cart/".concat(_.prodId,"?qty=",1)):t.push("/login")},className:"btn btn-primary",children:["A\xf1adir al carro ",Object(g.jsx)("i",{className:"fas fa-shopping-cart"})]})]}),Object(g.jsxs)(d.a,{md:3,children:[w?Object(g.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),y(Object(x.a)("/api/products/createreview/".concat(null===_||void 0===_?void 0:_.prodId,"/"),"POST",R,{SUCESS:m.a.PRODUCT_REVIEW_SUCCESS,REQUEST:m.a.PRODUCT_REVIEW_REQUEST,FAIL:m.a.PRODUCT_REVIEW_FAIL},!1,null===w||void 0===w?void 0:w.token))},children:[Object(g.jsxs)(u.a.Group,{children:[Object(g.jsx)(u.a.Label,{children:"Calificaci\xf3n"}),Object(g.jsxs)(u.a.Control,{as:"select",onChange:function(e){return I(Object(n.a)(Object(n.a)({},R),{},Object(c.a)({},"rating",e.target.value)))},children:[Object(g.jsx)("option",{value:"0",children:"Selecciona una opci\xf3n"}),Object(g.jsx)("option",{value:"1",children:"1 - Muy malo"}),Object(g.jsx)("option",{value:"2",children:"2 - Malo"}),Object(g.jsx)("option",{value:"3",children:"3 - Bueno"}),Object(g.jsx)("option",{value:"4",children:"4 - Muy bueno"}),Object(g.jsx)("option",{value:"5",children:"5 - Excelente"})]})]}),Object(g.jsxs)(u.a.Group,{children:[Object(g.jsx)(u.a.Label,{children:"Comentarios"}),Object(g.jsx)(u.a.Control,{as:"textarea",row:"5",name:"comment",onChange:function(e){I(Object(n.a)(Object(n.a)({},R),{},Object(c.a)({},e.target.name,e.target.value)))}})]}),k&&Object(g.jsx)(p.a,{variant:"danger",children:"Ingresa una calificaci\xf3n"}),A&&Object(g.jsx)(p.a,{variant:"success",children:"Review agregada"}),P?Object(g.jsx)(v.a,{}):Object(g.jsx)(l.a,{variant:"success",type:"submit",children:"Enviar"})]}):Object(g.jsxs)(p.a,{variant:"info",children:["Para realizar una review debes hacer"," ",Object(g.jsx)(f.Link,{to:"/login",children:"login"})]}),Object(g.jsx)("h3",{children:"Comentarios"}),Object(g.jsx)(b.a,{variant:"flush",children:null===_||void 0===_||null===(a=_.reviews)||void 0===a?void 0:a.map((function(e){return Object(g.jsxs)(b.a.Item,{children:[Object(g.jsx)("strong",{children:e.revName}),Object(g.jsx)(h.a,{value:e.revRating,color:"#d3a007"}),Object(g.jsx)("p",{children:e.revDate.substring(0,10)}),Object(g.jsx)("p",{children:e.revComment})]})}))})]})]}),Object(g.jsx)("hr",{})]})]})}},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var c=t(104),n=t.n(c),r=t(105),s=t(106),i=t.n(s),o=function(e,a,t,c){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;return function(){var l=Object(r.a)(n.a.mark((function r(l){var j,d,u,b,O;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j=c.REQUEST,d=c.SUCESS,u=c.FAIL,n.prev=1,l({type:j}),n.next=5,i()({method:a,url:e,data:t,headers:{"Content-Type":s?"multipart/form-data":"application/json",Authorization:o?"Bearer ".concat(o):""}});case 5:b=n.sent,O=b.data,l({type:d,payload:O}),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),l({type:u,payload:n.t0.message});case 14:case"end":return n.stop()}}),r,null,[[1,10]])})));return function(e){return l.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=12.c876809a.chunk.js.map