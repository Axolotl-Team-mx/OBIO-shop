(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{100:function(e,a,t){"use strict";var n=t(1),r=t(0),c=t.n(r),s=t(4),i=t.n(s);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},103:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(55),r=t(0),c=t.n(r),s=t(110),i=t(2);function o(e){var a=e.variant,t=e.children,r=c.a.useState(!0),o=Object(n.a)(r,2),l=o[0],u=o[1];return l?Object(i.jsx)(s.a,{variant:a,onClose:function(){return u(!l)},children:t}):null}},109:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(93),r=t(94),c=t(66),s=t(2);function i(e){var a=e.children;return Object(s.jsx)(n.a,{className:"py-5",children:Object(s.jsx)("main",{children:Object(s.jsx)(r.a,{className:"justify-content-md-center",style:{width:"100%",margin:"0"},children:Object(s.jsx)(c.a,{xs:12,children:a})})})})}},110:function(e,a,t){"use strict";var n,r=t(1),c=t(3),s=t(4),i=t.n(s),o=t(0),l=t.n(o),u=t(23),d=t(11),b=t(5),j=t(31),m=t(57),f=t(56),p=["className","children"],O=((n={})[j.b]="show",n[j.a]="show",n),h=l.a.forwardRef((function(e,a){var t=e.className,n=e.children,s=Object(c.a)(e,p),u=Object(o.useCallback)((function(e){Object(f.a)(e),s.onEnter&&s.onEnter(e)}),[s]);return l.a.createElement(j.e,Object(r.a)({ref:a,addEndListener:m.a},s,{onEnter:u}),(function(e,a){return l.a.cloneElement(n,Object(r.a)({},a,{className:i()("fade",t,n.props.className,O[e])}))}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade";var v=h,E=t(6),x=t.n(E),y=["label","onClick","className"],g={label:x.a.string.isRequired,onClick:x.a.func},R=l.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,s=e.className,o=Object(c.a)(e,y);return l.a.createElement("button",Object(r.a)({ref:a,type:"button",className:i()("close",s),onClick:n},o),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},t))}));R.displayName="CloseButton",R.propTypes=g,R.defaultProps={label:"Close"};var C=R,N=t(100),S=t(24),w=t(30),k=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],I=Object(N.a)("h4");I.displayName="DivStyledAsH4";var T=Object(S.a)("alert-heading",{Component:I}),L=Object(S.a)("alert-link",{Component:w.a}),A={show:!0,transition:v,closeLabel:"Close alert"},_=l.a.forwardRef((function(e,a){var t=Object(u.a)(e,{show:"onClose"}),n=t.bsPrefix,s=t.show,o=t.closeLabel,j=t.className,m=t.children,f=t.variant,p=t.onClose,O=t.dismissible,h=t.transition,E=Object(c.a)(t,k),x=Object(b.a)(n,"alert"),y=Object(d.a)((function(e){p&&p(!1,e)})),g=!0===h?v:h,R=l.a.createElement("div",Object(r.a)({role:"alert"},g?void 0:E,{ref:a,className:i()(j,x,f&&x+"-"+f,O&&x+"-dismissible")}),O&&l.a.createElement(C,{onClick:y,label:o}),m);return g?l.a.createElement(g,Object(r.a)({unmountOnExit:!0},E,{ref:void 0,in:s}),R):s?R:null}));_.displayName="Alert",_.defaultProps=A,_.Link=L,_.Heading=T;a.a=_},165:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(28),r=t(13),c=t(55),s=t(0),i=t(27),o=t(96),l=t(67),u=t(109),d=t(40),b=t(103),j=t(10),m=t(99),f=t(2),p={name:"",description:""};function O(e){var a=e.history,t=Object(s.useState)(p),O=Object(c.a)(t,2),h=O[0],v=O[1],E=Object(i.b)(),x=Object(i.c)((function(e){return e.userLogin})).userInfo,y=Object(i.c)((function(e){return e.brandRegister})),g=y.loading,R=y.error,C=y.success,N=function(e){v(Object(r.a)(Object(r.a)({},h),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(s.useEffect)((function(){C&&a.push("/admin/categorias/"),E({type:j.a.BRAND_REGISTER_RESET})}),[a,x,C]),Object(f.jsx)("div",{style:{marginTop:"10vh"},children:Object(f.jsx)("main",{children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)("h2",{children:"Registrar marca"}),Object(f.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),E(Object(m.a)("/api/brands/createbrand/","POST",h,{SUCESS:j.a.BRAND_REGISTER_SUCCESS,REQUEST:j.a.BRAND_REGISTER_REQUEST,FAIL:j.a.BRAND_REGISTER_FAIL},!1,x.token))},children:[Object(f.jsxs)(o.a.Group,{controlId:"name",children:[Object(f.jsx)(o.a.Label,{children:"Nombre de marca"}),Object(f.jsx)(o.a.Control,{type:"text",name:"name",placeholder:"Ingresa el nombre de la marca",onChange:N,required:!0})]}),Object(f.jsxs)(o.a.Group,{controlId:"description",children:[Object(f.jsx)(o.a.Label,{children:"Descripcion de la marca"}),Object(f.jsx)(o.a.Control,{type:"text",as:"textarea",name:"description",placeholder:"Ingresa la descripcion de la marca",onChange:N,required:!0})]}),g?Object(f.jsx)(d.a,{}):R?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{variant:"danger",children:R}),Object(f.jsx)(l.a,{type:"submit",variant:"primary",children:"Registrar categor\xeda"})]}):Object(f.jsx)(l.a,{type:"submit",variant:"primary",children:"Registrar marca"})]})]})})})}},99:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(104),r=t.n(n),c=t(105),s=t(106),i=t.n(s),o=function(e,a,t,n){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;return function(){var l=Object(c.a)(r.a.mark((function c(l){var u,d,b,j,m;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=n.REQUEST,d=n.SUCESS,b=n.FAIL,r.prev=1,l({type:u}),r.next=5,i()({method:a,url:e,data:t,headers:{"Content-Type":s?"multipart/form-data":"application/json",Authorization:o?"Bearer ".concat(o):""}});case 5:j=r.sent,m=j.data,l({type:d,payload:m}),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0),l({type:b,payload:r.t0.message});case 14:case"end":return r.stop()}}),c,null,[[1,10]])})));return function(e){return l.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=1.0f04584e.chunk.js.map