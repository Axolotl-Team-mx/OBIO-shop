(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{138:function(t,e,n){},150:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var a=n(0),r=n(29),c=n(85),i=n(61),s=n(86),o=n(60),d=n(145),l=(n(137),n(14)),u=n(95),j=n(96),h=n(92),p=n(9),v=(n(138),n(2));function b(t){var e=t.history,n=t.match.params.id,b=Object(r.b)(),f=Object(r.c)((function(t){return t.productDetails})),m=f.error,O=f.loading,x=(f.success,f.product);return Object(a.useEffect)((function(){b(Object(h.a)("/api/products/getproduct/".concat(n,"/"),"GET",{},{SUCESS:p.a.PRODUCT_DETAILS_SUCCESS,FAIL:p.a.PRODUCT_DETAILS_FAIL,REQUEST:p.a.PRODUCT_DETAILS_REQUEST}))}),[n,e]),O?Object(v.jsx)("div",{style:{minHeight:"100vh",marginTop:"15vh"},children:Object(v.jsx)(u.a,{})}):m?Object(v.jsx)("div",{style:{minHeight:"100vh",marginTop:"15vh"},children:Object(v.jsx)(j.a,{variant:"danger",children:m})}):Object(v.jsxs)("div",{style:{marginTop:"10vh",overflowX:"hidden",marginBottom:"5vh"},children:[Object(v.jsx)(c.a,{className:"p-5","data-aos":"fade-down",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(l.Link,{to:"/catalogo",children:Object(v.jsxs)(i.a,{children:[" ",Object(v.jsx)("i",{className:"fas fa-exchange-alt"})," Regresar"]})}),Object(v.jsx)("h1",{className:"text-primary mt-3",children:null===x||void 0===x?void 0:x.prodName})]})}),Object(v.jsx)(c.a,{children:Object(v.jsxs)(s.a,{children:[Object(v.jsxs)(o.a,{md:7,className:"p-5",children:[Object(v.jsxs)("h1",{children:["$ ",null===x||void 0===x?void 0:x.prodPrice,"MXN"]}),Object(v.jsx)("span",{children:null===x||void 0===x?void 0:x.prodDesc})]}),Object(v.jsx)(o.a,{md:5,children:Object(v.jsx)(d.a,{children:Object(v.jsx)("img",{className:"image-product",src:"https://res.cloudinary.com/majo-floral-desing/".concat(null===x||void 0===x?void 0:x.prodPic)})})})]})})]})}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(97),r=n.n(a),c=n(98),i=n(99),s=n.n(i),o=function(t,e,n,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;return function(){var d=Object(c.a)(r.a.mark((function c(d){var l,u,j,h,p;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l=a.REQUEST,u=a.SUCESS,j=a.FAIL,r.prev=1,d({type:l}),r.next=5,s()({method:e,url:t,data:n,headers:{"Content-Type":i?"multipart/form-data":"application/json",Authorization:o?"Bearer ".concat(o):""}});case 5:h=r.sent,p=h.data,d({type:u,payload:p}),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0),d({type:j,payload:r.t0.message});case 14:case"end":return r.stop()}}),c,null,[[1,10]])})));return function(t){return d.apply(this,arguments)}}()}},95:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(101),r=n(2);function c(){return Object(r.jsx)(a.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",display:"block",margin:"auto"}})}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(93),r=n(0),c=n.n(r),i=n(103),s=n(2);function o(t){var e=t.variant,n=t.children,r=c.a.useState(!0),o=Object(a.a)(r,2),d=o[0],l=o[1];return d?Object(s.jsx)(i.a,{variant:e,onClose:function(){return l(!d)},children:n}):null}}}]);
//# sourceMappingURL=9.d557bd7f.chunk.js.map