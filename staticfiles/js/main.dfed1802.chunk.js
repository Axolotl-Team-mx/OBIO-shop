(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[2],{10:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={BRAND_REGISTER_REQUEST:"BRAND_REGISTER_REQUEST",BRAND_REGISTER_SUCCESS:"BRAND_REGISTER_SUCCESS",BRAND_REGISTER_FAIL:"BRAND_REGISTER_FAIL",BRAND_REGISTER_RESET:"BRAND_REGISTER_RESET",BRAND_UPDATE_REQUEST:"BRAND_UPDATE_REQUEST",BRAND_UPDATE_SUCCESS:"BRAND_UPDATE_SUCCESS",BRAND_UPDATE_FAIL:"BRAND_UPDATE_FAIL",BRAND_UPDATE_RESET:"BRAND_UPDATE_RESET",BRAND_LIST_REQUEST:"BRAND_LIST_REQUEST",BRAND_LIST_SUCCESS:"BRAND_LIST_SUCCESS",BRAND_LIST_FAIL:"BRAND_LIST_FAIL",BRAND_LIST_RESET:"BRAND_LIST_RESET",BRAND_DETAILS_REQUEST:"BRAND_DETAILS_REQUEST",BRAND_DETAILS_SUCCESS:"BRAND_DETAILS_SUCCESS",BRAND_DETAILS_FAIL:"BRAND_DETAILS_FAIL",BRAND_DETAILS_RESET:"BRAND_DETAILS_RESET",BRAND_DELETE_REQUEST:"BRAND_DELETE_REQUEST",BRAND_DELETE_SUCCESS:"BRAND_DELETE_SUCCESS",BRAND_DELETE_FAIL:"BRAND_DELETE_FAIL",BRAND_DELETE_RESET:"BRAND_DELETE_RESET"}},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={USER_LOGIN_REQUEST:"USER_LOGIN_REQUEST",USER_LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",USER_LOGIN_FAIL:"USER_LOGIN_FAIL",USER_LOGIN_RESET:"USER_LOGIN_RESET",USER_LOGOUT:"USER_LOGOUT",USER_REGISTER_REQUEST:"USER_REGISTER_REQUEST",USER_REGISTER_SUCCESS:"USER_REGISTER_SUCCESS",USER_REGISTER_FAIL:"USER_REGISTER_FAIL",USER_REGISTER_RESET:"USER_REGISTER_RESET"}},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(86);var n=a(45),r=a(2);function c(){return Object(r.jsx)("img",{className:"loader-logo",src:n.a})}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",CART_CLEAR_ITEMS:"CART_CLEAR_ITEMS"}},45:function(e,t,a){"use strict";t.a=a.p+"static/media/logo1.38ec1c06.png"},7:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={PRODUCT_CREATE_REQUEST:"PRODUCT_CREATE_REQUEST",PRODUCT_CREATE_SUCCESS:"PRODUCT_CREATE_SUCCESS",PRODUCT_CREATE_FAIL:"PRODUCT_CREATE_FAIL",PRODUCT_CREATE_RESET:"PRODUCT_CREATE_RESET",PRODUCT_EDIT_REQUEST:"PRODUCT_EDIT_REQUEST",PRODUCT_EDIT_SUCCESS:"PRODUCT_EDIT_SUCCESS",PRODUCT_EDIT_FAIL:"PRODUCT_EDIT_FAIL",PRODUCT_EDIT_RESET:"PRODUCT_EDIT_RESET",PRODUCT_LIST_REQUEST:"PRODUCT_LIST_REQUEST",PRODUCT_LIST_SUCCESS:"PRODUCT_LIST_SUCCESS",PRODUCT_LIST_FAIL:"PRODUCT_LIST_FAIL",PRODUCT_LIST_RESET:"PRODUCT_LIST_RESET",PRODUCT_DETAILS_REQUEST:"PRODUCT_DETAILS_REQUEST",PRODUCT_DETAILS_SUCCESS:"PRODUCT_DETAILS_SUCCESS",PRODUCT_DETAILS_FAIL:"PRODUCT_DETAILS_FAIL",PRODUCT_DETAILS_RESET:"PRODUCT_DETAILS_RESET",PRODUCT_DELETE_REQUEST:"PRODUCT_DELETE_REQUEST",PRODUCT_DELETE_SUCCESS:"PRODUCT_DELETE_SUCCESS",PRODUCT_DELETE_FAIL:"PRODUCT_DELETE_FAIL",PRODUCT_DELETE_RESET:"PRODUCT_DELETE_RESET",PRODUCT_REVIEW_REQUEST:"PRODUCT_REVIEW_REQUEST",PRODUCT_REVIEW_SUCCESS:"PRODUCT_REVIEW_SUCCESS",PRODUCT_REVIEW_FAIL:"PRODUCT_REVIEW_FAIL",PRODUCT_REVIEW_RESET:"PRODUCT_REVIEW_RESET",PRODUCT_SEARCH_REQUEST:"PRODUCT_SEARCH_REQUEST",PRODUCT_SEARCH_SUCCESS:"PRODUCT_SEARCH_SUCCESS",PRODUCT_SEARCH_FAIL:"PRODUCT_SEARCH_FAIL",PRODUCT_SEARCH_RESET:"PRODUCT_SEARCH_RESET"}},78:function(e,t,a){},82:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),E=a(27),o=a(39),i=a(62),l=a(63),R=a(17),_=a(10),S=a(7),u=a(69),T=a(13),d=a(43),O=Object(o.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.a.USER_LOGIN_REQUEST:return{loading:!0};case R.a.USER_LOGIN_SUCCESS:return localStorage.setItem("userInfo",JSON.stringify(t.payload)),{loading:!1,success:!0,userInfo:t.payload};case R.a.USER_LOGIN_FAIL:return{loading:!1,success:!1,error:t.payload};case R.a.USER_LOGIN_RESET:return{loading:!1,success:!1,error:null};case R.a.USER_LOGOUT:return localStorage.removeItem("userInfo"),{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.a.USER_REGISTER_REQUEST:return{loading:!0};case R.a.USER_REGISTER_SUCCESS:return localStorage.setItem("userInfo",JSON.stringify(t.payload)),{loading:!1,success:!0,userInfo:t.payload};case R.a.USER_REGISTER_FAIL:return{loading:!1,success:!1,error:t.payload};case R.a.USER_REGISTER_RESET:return{loading:!1,success:!1,error:null};default:return e}},brandDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.BRAND_DELETE_REQUEST:return{loading:!0};case _.a.BRAND_DELETE_SUCCESS:return{loading:!1,success:!0,message:t.payload};case _.a.BRAND_DELETE_FAIL:return{loading:!1,success:!1,error:t.payload};case _.a.BRAND_DELETE_RESET:return{};default:return e}},brandDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.BRAND_DETAILS_REQUEST:return{loading:!0};case _.a.BRAND_DETAILS_SUCCESS:return{loading:!1,success:!0,brand:t.payload};case _.a.BRAND_DETAILS_FAIL:return{loading:!1,success:!1,error:t.payload};case _.a.BRAND_DETAILS_RESET:return{};default:return e}},brandUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{brand:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.BRAND_UPDATE_REQUEST:return{loading:!0};case _.a.BRAND_UPDATE_SUCCESS:return{loading:!1,success:!0,message:t.payload};case _.a.BRAND_UPDATE_FAIL:return{loading:!1,success:!1,error:t.payload};case _.a.BRAND_UPDATE_RESET:return{};default:return e}},brandList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.BRAND_LIST_REQUEST:return{loading:!0};case _.a.BRAND_LIST_SUCCESS:return{loading:!1,success:!0,brands:t.payload};case _.a.BRAND_LIST_FAIL:return{loading:!1,success:!1,error:t.payload};default:return e}},brandRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.BRAND_REGISTER_REQUEST:return{loading:!0};case _.a.BRAND_REGISTER_SUCCESS:return{loading:!1,success:!0,message:t.payload};case _.a.BRAND_REGISTER_FAIL:return{loading:!1,success:!1,error:t.payload};case _.a.BRAND_REGISTER_RESET:return{};default:return e}},productRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_CREATE_REQUEST:return{loading:!0};case S.a.PRODUCT_CREATE_SUCCESS:return{loading:!1,success:!0,message:t.payload};case S.a.PRODUCT_CREATE_FAIL:return{loading:!1,success:!1,error:t.payload};case S.a.PRODUCT_CREATE_RESET:return{};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_DELETE_REQUEST:return{loading:!0};case S.a.PRODUCT_DELETE_SUCCESS:return{loading:!1,success:!0,message:t.payload};case S.a.PRODUCT_DELETE_FAIL:return{loading:!1,success:!1,error:t.payload};case S.a.PRODUCT_DELETE_RESET:return{};default:return e}},productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_LIST_REQUEST:return{loading:!0};case S.a.PRODUCT_LIST_SUCCESS:return{loading:!1,success:!0,products:t.payload};case S.a.PRODUCT_LIST_FAIL:return{loading:!1,success:!1,error:t.payload};default:return e}},productUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_UPDATE_REQUEST:return{loading:!0};case S.a.PRODUCT_UPDATE_SUCCESS:return{loading:!1,success:!0,message:t.payload};case S.a.PRODUCT_UPDATE_FAIL:return{loading:!1,success:!1,error:t.payload};case S.a.PRODUCT_UPDATE_RESET:return{};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_DETAILS_REQUEST:return{loading:!0};case S.a.PRODUCT_DETAILS_SUCCESS:return{loading:!1,success:!0,product:t.payload};case S.a.PRODUCT_DETAILS_FAIL:return{loading:!1,success:!1,error:t.payload};case S.a.PRODUCT_DETAILS_RESET:return{};default:return e}},productReview:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_REVIEW_REQUEST:return{loading:!0};case S.a.PRODUCT_REVIEW_SUCCESS:return{loading:!1,success:!0,message:t.payload};case S.a.PRODUCT_REVIEW_FAIL:return{loading:!1,success:!1,error:t.payload};case S.a.PRODUCT_REVIEW_RESET:return{};default:return e}},productSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a.PRODUCT_SEARCH_REQUEST:return{loading:!0};case S.a.PRODUCT_SEARCH_SUCCESS:return{loading:!1,success:!0,products:t.payload};case S.a.PRODUCT_SEARCH_FAIL:return{loading:!1,success:!1,error:t.payload};case S.a.PRODUCT_SEARCH_RESET:return{};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a.CART_ADD_ITEM:var a=t.payload,n=e.cartItems.find((function(e){return e.prodId===a.prodId}));return n?Object(T.a)(Object(T.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.prodId===n.prodId?a:e}))}):Object(T.a)(Object(T.a)({},e),{},{cartItems:[].concat(Object(u.a)(e.cartItems),[a])});case d.a.CART_REMOVE_ITEM:return Object(T.a)(Object(T.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.prodId!==t.payload}))});case d.a.CART_CLEAR_ITEMS:return Object(T.a)(Object(T.a)({},e),{},{cartItems:[]});default:return e}}}),D={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},C=[i.a],U=Object(o.createStore)(O,D,Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,C))),j=(a(78),a(15)),I=a(8),A=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,170))})),h=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,162))})),b=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,163))})),p=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,164))})),g=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,165))})),L=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,166))})),f=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,172))})),m=[{path:"/",name:"home",exact:!0,component:A},{path:"/login",name:"login",exact:!0,component:h},{path:"/register",name:"register",exact:!0,component:b},{path:"/brands/register",name:"brand-register",exact:!0,component:g},{path:"/products/register",name:"product-register",exact:!0,component:L},{path:"/products/list",name:"product-list",exact:!0,component:Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,171))}))},{path:"/products/:id/",name:"product-screen",exact:!0,component:Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6),a.e(13)]).then(a.bind(null,167))}))},{path:"/products/",name:"products",exact:!0,component:p},{path:"/cart/:id?",name:"cart",exact:!0,component:f},{path:"/searchproducts/:search?",name:"search",exact:!0,component:Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,168))}))}],P=a(55),x=a(97),N=a(93),y=a(96),v=a(65),B=a(67),F=a(98),Q=a(95),G=a(45),k=a(22),w=(a(82),a(2));function z(){var e=Object(E.b)(),t=Object(n.useState)(""),a=Object(P.a)(t,2),r=a[0],c=a[1],s=Object(E.c)((function(e){return e.userLogin})).userInfo,o=Object(E.c)((function(e){return e.cart})).cartItems;return Object(w.jsx)(x.a,{sticky:"top",bg:"light",collapseOnSelect:!0,expand:"lg",className:"text-warning",style:{fontWeight:"bold"},children:Object(w.jsxs)(N.a,{children:[Object(w.jsx)(x.a.Brand,{href:"/",children:Object(w.jsx)("img",{height:"40",src:G.a})}),Object(w.jsx)(x.a.Toggle,{"aria-controls":"navbar1"}),Object(w.jsxs)(x.a.Collapse,{id:"navbar1 ",style:{justifyContent:"space-between"},children:[Object(w.jsxs)(y.a,{onSubmit:function(e){return e.preventDefault()},className:"d-flex",children:[Object(w.jsx)(v.a,{type:"search",placeholder:"Busca un producto",className:"mr-3","aria-label":"Search",value:r,onChange:function(e){return c(e.target.value)}}),Object(w.jsx)(k.LinkContainer,{to:"/searchproducts/".concat(r,"/"),children:Object(w.jsx)(B.a,{variant:"success",children:Object(w.jsx)("i",{class:"fas fa-search",style:{color:"#fff"}})})})]}),Object(w.jsxs)(F.a,{className:"me-auto",children:[Object(w.jsx)(k.LinkContainer,{to:"/",children:Object(w.jsxs)(F.a.Link,{children:[Object(w.jsx)("i",{class:"fas fa-home"}),"Inicio"]})}),Object(w.jsx)(k.LinkContainer,{to:"/products/",children:Object(w.jsxs)(F.a.Link,{children:[" ",Object(w.jsx)("i",{class:"fas fa-shopping-basket"})," Tienda"]})}),s?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Q.a,{title:"Cuenta",children:Object(w.jsx)(Q.a.Item,{onClick:function(){return e({type:R.a.USER_LOGOUT})},children:"Logout"})}),s.isAdmin&&Object(w.jsxs)(Q.a,{title:"Admin",children:[Object(w.jsx)(k.LinkContainer,{to:"/products/list",children:Object(w.jsx)(Q.a.Item,{children:"Productos"})}),Object(w.jsx)(k.LinkContainer,{to:"/admin/categories/",children:Object(w.jsx)(Q.a.Item,{children:"Categorias"})}),Object(w.jsx)(k.LinkContainer,{to:"/admin/users/",children:Object(w.jsx)(Q.a.Item,{children:"Usuarios"})}),Object(w.jsx)(k.LinkContainer,{to:"/admin/orders/",children:Object(w.jsx)(Q.a.Item,{children:"Ordenes"})})]}),Object(w.jsx)(k.LinkContainer,{to:"/cart",children:Object(w.jsxs)(F.a.Link,{children:[Object(w.jsx)("i",{className:"fas fa-shopping-cart"}),Object(w.jsx)("span",{className:"cart-counter",children:void 0==o?0:o.length})]})})]}):Object(w.jsxs)(j.Link,{to:"/login/",className:"text-primary",children:[Object(w.jsx)("i",{className:"fas fa-user"})," Login"]})]})]})]})})}function H(){var e=Object(I.l)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var V=a(40),W=a(28),M=a(94),J=a(66);a(87);function q(){var e,t;return Object(w.jsx)("footer",{className:"bg-primary  d-flex align-items-center w-100 flex-column p-4",style:{minHeight:"30vh",color:"#fff !important"},children:Object(w.jsxs)(M.a,{children:[Object(w.jsxs)(J.a,{md:4,children:[Object(w.jsx)("h5",{style:{color:"#fff"},children:"Sobre OBIO"}),Object(w.jsx)("p",{style:{fontSize:"14px",color:"#fff"},children:"OBIO es fruto del esfuerzo, creatividad y compromiso de comunidades, cooperativas y organizaciones de peque\xf1os productores rurales que trabajan la tierra y ofrecen a los consumidores productos saludables, frescos, libres de plaguicidas, producidos bajo esquemas que respetan y protegen la biodiversidad."})]}),Object(w.jsxs)(J.a,(e={md:4,className:"text-light"},Object(W.a)(e,"className","text-light"),Object(W.a)(e,"children",[Object(w.jsx)("h5",{children:"Links rapidos"}),Object(w.jsxs)("div",{style:{fontSize:"14px",color:"white"},children:[Object(w.jsx)("p",{children:Object(w.jsx)(j.Link,{to:"/",children:"Inicio"})}),Object(w.jsx)("p",{children:Object(w.jsx)(j.Link,{to:"/login",children:"Iniciar sesi\xf3n"})})]})]),e)),Object(w.jsxs)(J.a,(t={md:4,className:"text-light"},Object(W.a)(t,"className","text-light"),Object(W.a)(t,"children",[Object(w.jsx)("h5",{children:"Redes sociales"}),Object(w.jsxs)("div",{style:{fontSize:"18px"},children:[Object(w.jsx)(j.Link,{to:"/",className:"mr-4",children:Object(w.jsx)("i",{className:"fab fa-facebook-f"})}),Object(w.jsx)("a",{target:"__blank",href:"/",children:Object(w.jsx)("i",{className:"fab fa-instagram"})})]})]),t))]})})}function K(e){e.history;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H,{}),Object(w.jsx)(z,{}),Object(w.jsx)(r.a.Suspense,{fallback:Object(w.jsx)("div",{style:{minHeight:"60vh",display:"flex",justifyContent:"center",alignItems:"center"},className:"loading-div",children:Object(w.jsx)(V.a,{})}),children:Object(w.jsx)(I.g,{children:null===m||void 0===m?void 0:m.map((function(e,t){return e.component?Object(w.jsx)(I.d,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(w.jsx)(e.component,Object(T.a)({},t))}},t):null}))})}),Object(w.jsx)(q,{})]})}var X=[{path:"/brands/register",name:"brand-register",exact:!0,component:Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,165))}))}];function Y(e){e.history;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H,{}),Object(w.jsx)(z,{}),Object(w.jsx)(r.a.Suspense,{fallback:Object(w.jsx)(V.a,{}),children:Object(w.jsx)(I.g,{children:X.map((function(e,t){return e.component?Object(w.jsx)(I.d,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(w.jsx)(e.component,Object(T.a)({},t))}},t):null}))})})]})}var Z=function(){return Object(w.jsx)(j.HashRouter,{children:Object(w.jsxs)(I.g,{children:[Object(w.jsx)(I.d,{path:"/",name:"store",render:function(e){return Object(w.jsx)(K,Object(T.a)({},e))}}),Object(w.jsx)(I.d,{path:"/dashboard",name:"dashboard",render:function(e){return Object(w.jsx)(Y,Object(T.a)({},e))}})]})})},$=function(e){e&&e instanceof Function&&a.e(15).then(a.bind(null,169)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(w.jsx)(E.a,{store:U,children:Object(w.jsx)(Z,{})}),document.getElementById("root")),$()}},[[88,3,4]]]);
//# sourceMappingURL=main.dfed1802.chunk.js.map