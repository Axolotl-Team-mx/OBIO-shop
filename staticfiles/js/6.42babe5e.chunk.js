(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{104:function(e,a,t){"use strict";var c=t(1),r=t(3),s=t(4),i=t.n(s),n=t(0),o=t.n(n),d=t(5),l=["bsPrefix","variant","animation","size","children","as","className"],j=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,n=e.animation,j=e.size,b=e.children,u=e.as,m=void 0===u?"div":u,O=e.className,x=Object(r.a)(e,l),v=(t=Object(d.a)(t,"spinner"))+"-"+n;return o.a.createElement(m,Object(c.a)({ref:a},x,{className:i()(O,v,j&&v+"-"+j,s&&"text-"+s)}),b)}));j.displayName="Spinner",a.a=j},105:function(e,a,t){"use strict";t(0);var c=t(2);a.a=function(e){var a=e.value,t=e.text,r=e.color;return Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:r},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:r},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:r},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:r},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:r},className:a>=4?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:t&&t})]})}},137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return V}));var c=t(0),r=t.n(c),s=t(29),i=t(95),n=t(7),o=(t(137),t(63)),d=t(2);function l(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"header-page",children:[Object(d.jsxs)("h2",{children:["Culpa adipisicing ipsum enim ea pariatur ",Object(d.jsx)("br",{}),"id mollit fugiat consectetur."]}),Object(d.jsx)(o.a,{variant:"secondary",children:"Ver productos"})]})})}var j=t(1),b=t(3),u=t(4),m=t.n(u),O=t(5),x=t(23),v=t(97),f=t(55),h=["bsPrefix","className","variant","as"],p=r.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.variant,i=e.as,n=void 0===i?"img":i,o=Object(b.a)(e,h),d=Object(O.a)(t,"card-img");return r.a.createElement(n,Object(j.a)({ref:a,className:m()(s?d+"-"+s:d,c)},o))}));p.displayName="CardImg",p.defaultProps={variant:null};var g=p,N=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(v.a)("h5"),w=Object(v.a)("h6"),E=Object(x.a)("card-body"),P=Object(x.a)("card-title",{Component:y}),S=Object(x.a)("card-subtitle",{Component:w}),T=Object(x.a)("card-link",{Component:"a"}),C=Object(x.a)("card-text",{Component:"p"}),I=Object(x.a)("card-header"),k=Object(x.a)("card-footer"),R=Object(x.a)("card-img-overlay"),L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.bg,n=e.text,o=e.border,d=e.body,l=e.children,u=e.as,x=void 0===u?"div":u,v=Object(b.a)(e,N),h=Object(O.a)(t,"card"),p=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return r.a.createElement(f.a.Provider,{value:p},r.a.createElement(x,Object(j.a)({ref:a},v,{className:m()(s,h,i&&"bg-"+i,n&&"text-"+n,o&&"border-"+o)}),d?r.a.createElement(E,null,l):l))}));L.displayName="Card",L.defaultProps={body:!1},L.Img=g,L.Title=P,L.Subtitle=S,L.Body=E,L.Link=T,L.Text=C,L.Header=I,L.Footer=k,L.ImgOverlay=R;var U=L,A=t(105),F=t(14);var _=function(e){var a=e.product;return Object(d.jsxs)(U,{className:"my-3 p-3 rounded",children:[Object(d.jsx)(F.Link,{to:"/products/".concat(a.prodId),children:Object(d.jsx)(U.Img,{src:"https://res.cloudinary.com/jordiespinoza/".concat(null===a||void 0===a?void 0:a.prodPic)})}),Object(d.jsxs)(U.Body,{children:[Object(d.jsx)(F.Link,{to:"/products/".concat(a.prodId),children:Object(d.jsx)(U.Title,{as:"div",children:Object(d.jsx)("strong",{style:{color:"#333"},children:null===a||void 0===a?void 0:a.prodName})})}),Object(d.jsx)(U.Text,{as:"div",children:Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)(A.a,{value:null===a||void 0===a?void 0:a.rating,text:"".concat((null===a||void 0===a?void 0:a.numReviews)?null===a||void 0===a?void 0:a.numReviews:0," reviews"),color:"#d3a007"})," "]})}),Object(d.jsxs)(U.Text,{as:"h3",children:["$ ",null===a||void 0===a?void 0:a.prodPrice]}),Object(d.jsx)(F.Link,{to:"/products/".concat(a.prodId),children:Object(d.jsx)(o.a,{variant:"primary",children:"Ver producto"})})]})]})},z=(t(98),t(40));t(138);function H(e){var a=e.product;return Object(d.jsxs)("div",{className:"small-item",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h5",{children:null===a||void 0===a?void 0:a.prodName}),Object(d.jsx)("span",{children:null===a||void 0===a?void 0:a.prodDesc.substring(0,20)}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"my-3",children:Object(d.jsx)(A.a,{value:null===a||void 0===a?void 0:a.rating,text:"".concat((null===a||void 0===a?void 0:a.numReviews)?null===a||void 0===a?void 0:a.numReviews:0," reviews"),color:"#d3a007"})}),Object(d.jsxs)("span",{children:["$ ",null===a||void 0===a?void 0:a.prodPrice]}),Object(d.jsx)("br",{}),Object(d.jsx)(F.Link,{to:"/products/".concat(a.prodId),children:Object(d.jsx)(o.a,{variant:"primary",children:"Ver producto"})})]}),Object(d.jsx)("div",{className:"image-small",children:Object(d.jsx)("img",{src:"https://res.cloudinary.com/jordiespinoza/".concat(null===a||void 0===a?void 0:a.prodPic)})})]})}function B(){return Object(d.jsxs)("div",{className:"categories-colection",children:[Object(d.jsxs)("div",{className:"categorie-item",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h5",{children:"Hola"}),Object(d.jsx)("span",{children:"Anim laboris anim est amet."})]}),Object(d.jsx)("div",{className:"image-categorie",children:Object(d.jsx)("img",{src:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"})})]}),Object(d.jsxs)("div",{className:"categorie-item",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h5",{children:"Hola"}),Object(d.jsx)("span",{children:"Anim laboris anim est amet."})]}),Object(d.jsx)("div",{className:"image-categorie",children:Object(d.jsx)("img",{src:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"})})]}),Object(d.jsxs)("div",{className:"categorie-item",children:[Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h5",{children:"Hola"}),Object(d.jsx)("span",{children:"Anim laboris anim est amet."})]}),Object(d.jsx)("div",{className:"image-categorie",children:Object(d.jsx)("img",{src:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"})})]})]})}var D=t(89),Q=t(62);t(139);function V(e){var a,t=e.history,r=Object(s.b)(),o=Object(s.c)((function(e){return e.userLogin})).userInfo,j=Object(s.c)((function(e){return e.productList})),b=(j.success,j.loading),u=j.products;return Object(c.useEffect)((function(){r(Object(i.a)("/api/products/getproducts/","GET",{},{SUCESS:n.a.PRODUCT_LIST_SUCCESS,FAIL:n.a.PRODUCT_LIST_FAIL,REQUEST:n.a.PRODUCT_LIST_REQUEST}))}),[o,t]),Object(d.jsxs)("div",{id:"home-screen",children:[Object(d.jsx)(l,{}),b?Object(d.jsx)("div",{className:"loading-div",children:Object(d.jsx)(z.a,{})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B,{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"trending",children:[Object(d.jsx)("h2",{children:"Productos Trending"}),Object(d.jsx)(D.a,{className:"products-trending",children:null===u||void 0===u?void 0:u.map((function(e){return e.rating>=3&&Object(d.jsx)(Q.a,{md:3,children:Object(d.jsx)(_,{product:e})})}))})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(B,{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h2",{children:"Productos"}),Object(d.jsx)(D.a,{className:"products-small",children:null===u||void 0===u||null===(a=u.slice(0,12))||void 0===a?void 0:a.map((function(e){return Object(d.jsx)(Q.a,{xl:3,md:6,children:Object(d.jsx)(H,{product:e})})}))})]})]})]})}},95:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var c=t(100),r=t.n(c),s=t(101),i=t(102),n=t.n(i),o=function(e,a,t,c){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;return function(){var d=Object(s.a)(r.a.mark((function s(d){var l,j,b,u,m;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l=c.REQUEST,j=c.SUCESS,b=c.FAIL,r.prev=1,d({type:l}),r.next=5,n()({method:a,url:e,data:t,headers:{"Content-Type":i?"multipart/form-data":"application/json",Authorization:o?"Bearer ".concat(o):""}});case 5:u=r.sent,m=u.data,d({type:j,payload:m}),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0),d({type:b,payload:r.t0.message});case 14:case"end":return r.stop()}}),s,null,[[1,10]])})));return function(e){return d.apply(this,arguments)}}()}},97:function(e,a,t){"use strict";var c=t(1),r=t(0),s=t.n(r),i=t(4),n=t.n(i);a.a=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(c.a)({},a,{ref:t,className:n()(a.className,e)}))}))}},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var c=t(104),r=t(2);function s(){return Object(r.jsx)(c.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",display:"block",margin:"auto"}})}}}]);
//# sourceMappingURL=6.42babe5e.chunk.js.map