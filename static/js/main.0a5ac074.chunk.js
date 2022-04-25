(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{15:function(e,t,c){e.exports={font:"Cart_font__3knUI","bg-lightgreen":"Cart_bg-lightgreen__3dK0A",submitNote:"Cart_submitNote__U1S2I",actions:"Cart_actions__1dAsD","button--alt":"Cart_button--alt__1ADw6",button:"Cart_button__1noN4"}},16:function(e,t,c){e.exports={bgDark:"Footer_bgDark__y_INl",robotoFont:"Footer_robotoFont__1_Vpr",lineheight:"Footer_lineheight__SwmM1"}},26:function(e,t,c){e.exports={modalText:"Modal_modalText__TQHdX",backdrop:"Modal_backdrop__DcXr4",modal:"Modal_modal__2ifxD","slide-down":"Modal_slide-down__3NmY1"}},40:function(e,t,c){e.exports={li:"CartItem_li__1Pkav",font:"CartItem_font__3mZuY"}},56:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(33),s=c.n(a),n=(c(56),c(1)),l=c.n(n),i=c(9),r=c(11),o=c(0),j=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light shadow",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:" "}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"/navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(o.jsxs)("div",{className:"navbar-nav m-auto font-weight-bold",children:[Object(o.jsx)("a",{className:"nav-item nav-link text-dark",href:"/",children:"PRODUCT"}),Object(o.jsx)("a",{className:"nav-item nav-link text-dark",href:"/",children:"STORIES"}),Object(o.jsx)("a",{className:"nav-item nav-link text-dark",href:"/",children:"SKIN ASSESSMENT"}),Object(o.jsx)("a",{className:"nav-item nav-link text-dark",href:"/",children:"INGREDIENTS"}),Object(o.jsx)("a",{className:"nav-item nav-link text-dark",href:"/",children:"BLOGS"})]})})]})},d=c(75),b=c(20),m=c(37),h=c.n(m),x=Object(b.a)(d.a)((function(e){var t=e.theme;return{"& .MuiBadge-badge":{right:5,top:20,border:"2px solid ".concat(t.palette.background.paper),padding:"0 2px",color:"white",background:"red"}}}));function O(e){var t=Object(n.useContext)(Y).totalItems;return Object(o.jsx)("button",{className:"btn active btn-light mr-5 ","aria-label":"cart",children:Object(o.jsx)(x,{badgeContent:t,children:Object(o.jsx)(h.a,{})})})}var u=c(38),N=c.n(u),v=c(39),p=c.n(v),g=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-light bg-light shadow",children:[Object(o.jsx)("span",{className:"navbar-brand",href:""}),Object(o.jsxs)("form",{className:"form-inline",children:[Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)(N.a,{className:""}),Object(o.jsx)(p.a,{className:"m-3"}),Object(o.jsx)(O,{})]})]})},f=function(){return Object(o.jsxs)(l.a.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(j,{})]})},y=function(e){e.color;return Object(o.jsx)("hr",{style:{color:"#CECECE",backgroundColor:"#CECECE",height:.25}})},_=function(){return Object(o.jsxs)(l.a.Fragment,{children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsx)("div",{className:"col-md-5",children:Object(o.jsx)("h5",{className:"font-weight-bold",children:"Product"})}),Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsx)("h5",{className:"font-weight-bold",children:"Price"})}),Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsx)("h5",{className:"font-weight-bold",children:"Quantity"})}),Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsx)("h5",{className:"font-weight-bold",children:"Total"})}),Object(o.jsx)("div",{className:"col-md-1"})]}),Object(o.jsx)(y,{})]})},C=c(40),E=c.n(C),I=function(e){var t=Object(n.useContext)(Y),c=t.removeItem,a=t.increaseItem,s=t.decreaseItem,l="\u20b9".concat(e.price.toFixed(2)),i=e.quantity*e.price;return Object(o.jsx)("li",{className:"".concat(E.a.li),children:Object(o.jsxs)("div",{className:"row my-3 d-flex align-items-center",children:[Object(o.jsx)("div",{className:"col-sm-5",children:Object(o.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{src:e.img,alt:"item"})}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("p",{className:"font-weight-bolder ",children:e.name})})]})}),Object(o.jsx)("div",{className:"col-md-2 ",children:Object(o.jsx)("p",{children:l})}),Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsxs)("span",{className:"border",children:[Object(o.jsx)("button",{className:"btn btn-light p-0 ",onClick:function(){e.quantity>1&&s(e.id)},children:"-"}),Object(o.jsx)("input",{className:"w-50 border-0 text-center",type:"text",min:"1",onChange:function(e){},value:e.quantity}),Object(o.jsx)("button",{className:"btn btn-light p-0 ",onClick:function(){a(e.id)},children:"+"})]})}),Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsxs)("p",{children:["\u20b9",i.toFixed(2)]})}),Object(o.jsx)("div",{className:"col-md-1",children:Object(o.jsx)("button",{className:"btn btn-light",onClick:function(){c(e.id)},children:"\u2715"})})]})})},w=c(15),k=c.n(w),T=function(e){var t=e.totalAmount,c=t+200;return Object(o.jsxs)("div",{className:"m-3 ".concat(k.a["bg-lightgreen"]),children:[Object(o.jsx)("h4",{className:"font-weight-bold",children:"Cart Total"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("p",{children:"Sub Total"})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsxs)("p",{className:"text-success font-weight-bold",children:["\u20b9",t.toFixed(2)]})})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("p",{children:"Shipping"})}),Object(o.jsxs)("div",{className:"col-sm-6",children:[t>=1e3&&Object(o.jsx)("p",{className:"font-weight-bold",children:"Free"}),t<1e3&&Object(o.jsxs)("p",{className:"text-success font-weight-bold",children:["\u20b9",200..toFixed(2)]})]})]}),Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6 font-weight-bold",children:Object(o.jsx)("p",{children:"Total"})}),Object(o.jsxs)("div",{className:"col-sm-6",children:[t>=1e3&&Object(o.jsxs)("p",{className:"text-success font-weight-bold",children:["\u20b9",t.toFixed(2)]}),t<1e3&&Object(o.jsxs)("p",{className:"text-success font-weight-bold",children:["\u20b9",c.toFixed(2)]})]})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-sm-12",children:Object(o.jsx)("button",{type:"button",onClick:function(){e.onBuy()},className:"btn btn-success w-100 font-weight-bold",children:"Buy"})})})]})},S=c(22),A=c.n(S),F=c(26),M=c.n(F),R=function(e){return Object(o.jsx)("div",{className:M.a.backdrop,onClick:e.onClose})},B=function(e){return Object(o.jsx)("div",{className:M.a.modal,children:Object(o.jsx)("div",{className:M.a.modalText,children:e.children})})},q=document.getElementById("overlays");var D=function(e){return Object(o.jsxs)(n.Fragment,{children:[A.a.createPortal(Object(o.jsx)(R,{onClose:e.onClose}),q),A.a.createPortal(Object(o.jsx)(B,{children:e.children}),q)]})},P=function(e){var t=Object(n.useContext)(Y),c=t.items,a=t.totalAmount,s=Object(n.useState)(!1),i=Object(r.a)(s,2),j=i[0],d=i[1],b=function(){d(!1)};return Object(o.jsxs)(l.a.Fragment,{children:[j&&Object(o.jsxs)(D,{onClose:b,children:[Object(o.jsx)("h2",{className:k.a.submitNote,children:"Succesfully placed the order!"}),Object(o.jsx)("span",{className:k.a.actions,children:Object(o.jsx)("button",{className:k.a.button,onClick:b,children:"Close"})})]}),Object(o.jsxs)("div",{className:"".concat("container my-5"," ").concat(k.a.font),children:[Object(o.jsx)("h1",{className:"text-center my-4 font-weight-bold ",children:"Shopping Cart"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-lg-8",children:[Object(o.jsx)(_,{}),c.map((function(e){return Object(o.jsx)(I,{id:e.id,img:e.img,name:e.name,price:e.price,quantity:e.quantity},e.id)}))]}),Object(o.jsx)("div",{className:"col-lg-4",children:Object(o.jsx)(T,{totalAmount:a,onBuy:function(){d(!0)}})})]})]})]})},U=[{id:"I1",img:c.p+"static/media/bodycleaner1.bb6eb0c1.png",name:"Body Cleanser (250ml)",price:250,quantity:1},{id:"I2",img:c.p+"static/media/bodycleaner2.a55b3c2e.png",name:"Body Cleanser (250ml)",price:250,quantity:1},{id:"I3",img:c.p+"static/media/bodycleaner3.ceaa31af.png",name:"Body Cleanser (250ml)",price:250,quantity:1}],L=function(e,t){if("REMOVE_ITEM"===t.type)return Object(i.a)(Object(i.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});if("INCREASE_ITEM"===t.type){var c=e.items.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(i.a)(Object(i.a)({},e),{},{items:c})}if("DECREASE_ITEM"===t.type){var a=e.items.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{quantity:e.quantity-1}):e}));return Object(i.a)(Object(i.a)({},e),{},{items:a})}if("GET_TOTAL"===t.type){var s=e.items.reduce((function(e,t){var c=t.price,a=t.quantity,s=c*a;return e.totalAmount+=s,e.totalItems+=a,e}),{totalItems:0,totalAmount:0}),n=s.totalItems,l=s.totalAmount;return Object(i.a)(Object(i.a)({},e),{},{totalItems:n,totalAmount:l})}return e},Y=Object(n.createContext)(),G={items:U,totalItems:0,totalAmount:0},V=function(){var e=Object(n.useReducer)(L,G),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){a({type:"GET_TOTAL"})}),[c.items]),Object(o.jsxs)(Y.Provider,{value:Object(i.a)(Object(i.a)({},c),{},{removeItem:function(e){return a({type:"REMOVE_ITEM",payload:e})},increaseItem:function(e){return a({type:"INCREASE_ITEM",payload:e})},decreaseItem:function(e){return a({type:"DECREASE_ITEM",payload:e})}}),children:[Object(o.jsx)(f,{}),Object(o.jsx)(P,{})]})},Q=c(16),J=c.n(Q),K=c(41),X=c.n(K),H=c(42),W=c.n(H),Z=c(43),z=c.n(Z),$=function(e){e.color;return Object(o.jsx)("hr",{style:{color:"white",backgroundColor:"white",height:.25}})},ee=function(){return Object(o.jsx)("div",{className:"".concat("card text-white mb-3"," ").concat(J.a.bgDark),children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"mt-5 mx-5 px-4",children:Object(o.jsx)("h2",{className:J.a.robotoFont,children:"Brand Name"})}),Object(o.jsxs)("div",{className:"row mt-0",children:[Object(o.jsx)("div",{className:"col-lg-1"}),Object(o.jsxs)("div",{className:"col-lg-3",children:[Object(o.jsx)("h4",{className:"my-3",children:"INFORMATION"}),Object(o.jsx)("p",{className:J.a.lineheight,children:"ABOUT US"}),Object(o.jsx)("p",{className:J.a.lineheight,children:"FAQS"}),Object(o.jsx)("p",{className:J.a.lineheight,children:"REFUND POLICY"}),Object(o.jsx)("p",{className:J.a.lineheight,children:"TERMS & CONDITIONS"})]}),Object(o.jsxs)("div",{className:"col-lg-3",children:[Object(o.jsx)("h4",{className:"my-3",children:"SUPPORT"}),Object(o.jsx)("a",{className:"text-light",href:"/",children:"hello@sample.com"})]}),Object(o.jsxs)("div",{className:"col-lg-3",children:[Object(o.jsx)("h4",{className:"my-3",children:"NEWSLETTER"}),Object(o.jsx)("p",{children:"Subscribe to recieive updates, access deals and more"}),Object(o.jsx)("input",{className:"rounded w-100 p-1",placeholder:"Enter email address"}),Object(o.jsx)("button",{className:"btn bg-success my-3",children:"SUBSCRIBE"})]}),Object(o.jsx)("div",{className:"col-lg-2"})]}),Object(o.jsxs)("div",{className:"mx-5 px-4",children:[Object(o.jsx)(X.a,{className:"m-3"}),Object(o.jsx)(W.a,{className:"m-3"}),Object(o.jsx)(z.a,{className:"m-3"})]}),Object(o.jsx)("div",{className:" mx-5",children:Object(o.jsx)($,{})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-1"}),Object(o.jsx)("div",{className:"col-lg-8",children:Object(o.jsx)("p",{children:"Copyright 2022"})}),Object(o.jsx)("div",{className:"col-lg-2",children:Object(o.jsx)("p",{className:"ml-auto",children:"PRIVACY POLICY"})}),Object(o.jsx)("div",{className:"col-lg-1"})]})]})})};var te=function(){return Object(o.jsxs)(l.a.Fragment,{children:[Object(o.jsx)(V,{}),Object(o.jsx)(ee,{})]})};s.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(te,{}))}},[[62,1,2]]]);
//# sourceMappingURL=main.0a5ac074.chunk.js.map