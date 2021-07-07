(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[14],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(108),c=a(2);function r(){return Object(c.jsx)(n.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",display:"block",margin:"auto"}})}},108:function(e,t,a){"use strict";var n=a(1),c=a(3),r=a(4),s=a.n(r),i=a(0),o=a.n(i),d=a(5),l=["bsPrefix","variant","animation","size","children","as","className"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,i=e.animation,u=e.size,j=e.children,b=e.as,p=void 0===b?"div":b,f=e.className,m=Object(c.a)(e,l),h=(a=Object(d.a)(a,"spinner"))+"-"+i;return o.a.createElement(p,Object(n.a)({ref:t},m,{className:s()(f,h,u&&h+"-"+u,r&&"text-"+r)}),j)}));u.displayName="Spinner",t.a=u},148:function(e,t,a){"use strict";var n=a(1),c=a(3),r=a(4),s=a.n(r),i=a(0),o=a.n(i),d=a(6),l=a.n(d),u=a(5),j=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],b=(l.a.string,l.a.bool,l.a.bool,l.a.bool,l.a.bool,o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.fluid,d=e.rounded,l=e.roundedCircle,b=e.thumbnail,p=Object(c.a)(e,j);a=Object(u.a)(a,"img");var f=s()(i&&a+"-fluid",d&&"rounded",l&&"rounded-circle",b&&a+"-thumbnail");return o.a.createElement("img",Object(n.a)({ref:t},p,{className:s()(r,f)}))})));b.displayName="Image",b.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=b},149:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),c=a(15),r=a(93),s=a(94),i=a(66),o=a(67),d=a(27),l=a(148),u=(a(149),a(2));function j(e){var t=e.product,a=e.children;return Object(u.jsxs)(s.a,{className:"d-flex w-100 product-panel",children:[Object(u.jsx)(i.a,{md:3,xs:12,children:(null===t||void 0===t?void 0:t.prodPic)&&Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)(c.Link,{to:"/products/".concat(t.prodId),children:Object(u.jsx)(l.a,{className:"d-block my-4 shadow",src:"https://res.cloudinary.com/jordiespinoza/".concat(t.prodPic)})})})}),Object(u.jsxs)(i.a,{className:"p-4",md:9,xs:12,children:[Object(u.jsx)("h4",{style:{color:"#333"},children:null===t||void 0===t?void 0:t.prodName}),Object(u.jsxs)("span",{children:[Object(u.jsx)("b",{children:"ID:"})," ",null===t||void 0===t?void 0:t.prodId]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("b",{children:"Precio: "}),"$ ",null===t||void 0===t?void 0:t.prodPrice]}),Object(u.jsx)("span",{children:null===t||void 0===t?void 0:t.prodDesc}),a]})]})}var b=a(101),p=a(99),f=a(7);function m(e){var t=e.history,a=Object(d.b)(),l=Object(d.c)((function(e){return e.userLogin})).userInfo,m=Object(d.c)((function(e){return e.productDelete})),h=m.success,O=(m.loading,Object(d.c)((function(e){return e.productList}))),x=(O.success,O.loading),v=O.products;return Object(n.useEffect)((function(){(null===l||void 0===l?void 0:l.isAdmin)||!l?a(Object(p.a)("/api/products/getproducts/","GET",{},{SUCESS:f.a.PRODUCT_LIST_SUCCESS,FAIL:f.a.PRODUCT_LIST_FAIL,REQUEST:f.a.PRODUCT_LIST_REQUEST})):t.push("/")}),[l,t,h]),Object(u.jsx)(r.a,{className:"mt-5",style:{minHeight:"80vh"},children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(i.a,{children:Object(u.jsx)("h1",{children:"Productos"})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(c.Link,{to:"/products/register",children:Object(u.jsxs)(o.a,{variant:"primary",className:"d-block",style:{marginLeft:"auto"},children:[Object(u.jsx)("i",{className:"fas fa-plus"})," Crear producto"]})})}),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(s.a,{className:"w-100 m-0",children:x?Object(u.jsx)(b.a,{}):Object(u.jsx)(u.Fragment,{children:null===v||void 0===v?void 0:v.map((function(e){return Object(u.jsx)(i.a,{xs:12,className:"d-flex justify-content-center m-0",children:Object(u.jsxs)(j,{product:e,children:[Object(u.jsx)(c.Link,{to:"/admin/products/edit/".concat(e.id,"/"),children:Object(u.jsx)(o.a,{variant:"primary",className:"btn-sm mr-2",children:Object(u.jsx)("i",{className:"fas fa-edit"})})}),Object(u.jsx)(o.a,{variant:"danger",className:"btn-sm",onClick:function(){var t;t=e.prodId,window.confirm("Seguro que deseas eliminar este producto?")&&a(Object(p.a)("/api/products/deleteproduct/".concat(t,"/"),"DELETE",{},{SUCESS:f.a.PRODUCT_DELETE_SUCESS,FAIL:f.a.PRODUCT_DELETE_FAIL,REQUEST:f.a.PRODUCT_DELETE_REQUEST},!1,l.token))},children:Object(u.jsx)("i",{className:"fas fa-trash"})})]})})}))})})})]})})}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(104),c=a.n(n),r=a(105),s=a(106),i=a.n(s),o=function(e,t,a,n){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;return function(){var d=Object(r.a)(c.a.mark((function r(d){var l,u,j,b,p;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l=n.REQUEST,u=n.SUCESS,j=n.FAIL,c.prev=1,d({type:l}),c.next=5,i()({method:t,url:e,data:a,headers:{"Content-Type":s?"multipart/form-data":"application/json",Authorization:o?"Bearer ".concat(o):""}});case 5:b=c.sent,p=b.data,d({type:u,payload:p}),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),console.log(c.t0),d({type:j,payload:c.t0.message});case 14:case"end":return c.stop()}}),r,null,[[1,10]])})));return function(e){return d.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=14.c6e50eee.chunk.js.map