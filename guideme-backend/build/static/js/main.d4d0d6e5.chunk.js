(this["webpackJsonpguideme-frontend"]=this["webpackJsonpguideme-frontend"]||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(37),c=n.n(a),i=n(7),o=n(15),s=n(24),u=n(182),l=n(188),j=n(189),b=n(14),d=n.n(b),h=n(18),p=n(30),O=n.n(p),v=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(1),m=n(180),f=n(176),g=n(174),w=function(e){var t=e.setUser,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],s=a[1],l=Object(r.useState)(""),j=Object(i.a)(l,2),b=j[0],p=j[1],O=Object(r.useState)(null),w=Object(i.a)(O,2),y=w[0],S=w[1],k=Object(r.useState)(!1),C=Object(i.a)(k,2),B=C[0],T=C[1],N=Object(o.f)(),I=function(){var e=Object(h.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),S(null),T(!1),e.prev=3,e.next=6,v({username:c,password:b});case 6:r=e.sent,t(r),window.localStorage.setItem("Guideme-app-user",JSON.stringify(r)),T(!0),setTimeout((function(){N.push("/")}),2e3),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),S("invalid credentials");case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h2",sx:{marginBottom:2},children:"Login"}),y?Object(x.jsx)(f.a,{severity:"error",style:{marginBottom:7},children:y}):null,B?Object(x.jsx)(f.a,{severity:"success",style:{marginBottom:7},children:"successfull login, redirecting to Home"}):null,Object(x.jsxs)("form",{onSubmit:I,children:[Object(x.jsx)(g.a,{label:"username",value:c,variant:"outlined",onChange:function(e){var t=e.target;return s(t.value)}}),Object(x.jsx)(g.a,{label:"password",value:b,variant:"outlined",onChange:function(e){var t=e.target;return p(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{type:"submit",color:"success",variant:"contained",sx:{marginTop:2},children:"login"})]})]})},y=n(171),S=n(183),k=n(184),C=function(){return Object(x.jsx)("footer",{children:Object(x.jsx)(y.a,{py:{xs:1,sm:1},bgcolor:"#EEEEEE",color:"black",bottom:0,position:"fixed",width:"100%",children:Object(x.jsx)(S.a,{align:"center",maxWidth:"lg","margin-top":"calc(5% + 60px)",position:"fixed",bottom:0,children:Object(x.jsx)(k.a,{href:"https://github.com/Mo-Fatah/GuideMe",color:"inherit",underline:"hover",children:"Github"})})})})},B="/api/food",T=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,O.a.get(B,{params:t});case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,O.a.get(B);case 8:n=e.sent;case 9:return e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(B,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post(B,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),l=s[0],j=s[1],b=Object(r.useState)(""),p=Object(i.a)(b,2),O=p[0],v=p[1],w=Object(r.useState)(""),y=Object(i.a)(w,2),S=y[0],k=y[1],C=Object(r.useState)(""),B=Object(i.a)(C,2),T=B[0],N=B[1],R=Object(r.useState)([]),E=Object(i.a)(R,2),G=E[0],M=E[1],U=Object(r.useState)(""),L=Object(i.a)(U,2),A=L[0],F=L[1],W=Object(r.useState)(null),D=Object(i.a)(W,2),H=D[0],J=D[1],P=Object(r.useState)(null),z=Object(i.a)(P,2),V=z[0],Y=z[1],q=(Object(o.f)(),function(){var e=Object(h.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Y(null),J(null),O.trim()&&n.trim()&&l.trim()&&S.trim()&&T.trim()&&0!==G.length){e.next=6;break}return Y("pleae fill the missing fields"),e.abrupt("return");case 6:return r={name:n,governorate:l,city:O,neighborhood:S,address:T,foodTypes:G},e.next=9,I(r);case 9:a(""),j(""),v(""),N(""),F(""),M([]),J("Thanks for Your Contribution! you can find ".concat(r.name," now in the search result"));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h2",align:"center",children:"Add a New Restaurant"}),V?Object(x.jsx)(f.a,{severity:"error",children:V}):null,H?Object(x.jsx)(f.a,{severity:"success",children:H}):null,Object(x.jsxs)("form",{onSubmit:q,children:[Object(x.jsx)(g.a,{label:"Name",value:n,variant:"outlined",onChange:function(e){var t=e.target;return a(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{label:"Governorate",value:l,variant:"outlined",onChange:function(e){var t=e.target;return j(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{label:"City",value:O,variant:"outlined",onChange:function(e){var t=e.target;return v(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{label:"Neighbothood",value:S,variant:"outlined",onChange:function(e){var t=e.target;return k(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{label:"Adress",value:T,variant:"outlined",onChange:function(e){var t=e.target;return N(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{label:"FoodTypes",value:A,variant:"outlined",onChange:function(e){var t=e.target;return F(t.value)}}),Object(x.jsx)(u.a,{onClick:function(e){e.preventDefault(),M(G.concat(A)),F("")},sx:{margin:2},children:"Add Type"}),Object(x.jsx)("br",{}),G.toString(),Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{type:"submit",color:"success",variant:"contained",sx:{marginTop:2},children:"Submit"})]})]})},E=n(5),G=n(4),M=n(177),U=Object(G.a)(M.a)((function(e){var t,n=e.theme;return t={position:"relative",height:200},Object(E.a)(t,n.breakpoints.down("sm"),{width:"100% !important",height:100}),Object(E.a)(t,"&:hover, &.Mui-focusVisible",{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}),t})),L=Object(G.a)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),A=Object(G.a)("span")((function(e){return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.common.white}})),F=Object(G.a)("span")((function(e){var t=e.theme;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:.4,transition:t.transitions.create("opacity")}})),W=Object(G.a)("span")((function(e){var t=e.theme;return{height:3,width:18,backgroundColor:t.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:t.transitions.create("opacity")}})),D=function(e){var t=e.images;return Object(x.jsx)(y.a,{sx:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},paddingBottom:5,children:t.map((function(e){return Object(x.jsxs)(U,{focusRipple:!0,style:{width:e.width},disabled:e.disabled,component:s.b,to:"/search",children:[Object(x.jsx)(L,{style:{backgroundImage:"url(".concat(e.url,")")}}),Object(x.jsx)(F,{className:"MuiImageBackdrop-root"}),Object(x.jsx)(A,{children:Object(x.jsxs)(m.a,{component:"span",variant:"subtitle1",color:"inherit",sx:{position:"relative",p:4,pt:2,pb:function(e){return"calc(".concat(e.spacing(1)," + 6px)")}},children:[e.title,Object(x.jsx)(W,{className:"MuiImageMarked-root"})]})})]},e.title)}))})},H=n(172),J=function(e){var t=e.component,n=e.path,r=e.text;e.color;return Object(x.jsx)(H.a,{direction:"row",spacing:2,paddingBottom:4,children:Object(x.jsx)(u.a,{variant:"contained",color:"success",component:t,to:n,children:r})})},P=[{url:"./food.jpg",title:"Food",width:"34%",disabled:!1},{url:"./car.jpg",title:"Car Rental (available soon)",width:"33%",disabled:!0},{url:"./hotel",title:"Hotel (available soon)",width:"33%",disabled:!0}],z=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h1",align:"center",marginTop:5,children:"GuideMe"}),Object(x.jsx)(m.a,{variant:"subtitle1",align:"center",paddingBottom:5,children:"A community-driven application to help you find the best services in any place you go"}),Object(x.jsxs)("main",{children:[Object(x.jsx)(D,{images:P}),Object(x.jsx)(m.a,{variant:"h5",children:"Help our community to grow!"}),Object(x.jsx)("br",{}),Object(x.jsx)(J,{component:s.b,path:"/new-restaurant",text:"Add Restaurant",color:"success"})]})]})},V=function(e){var t=e.search,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1],s=Object(r.useState)(""),l=Object(i.a)(s,2),j=l[0],b=l[1],d=Object(r.useState)(""),h=Object(i.a)(d,2),p=h[0],O=h[1],v=Object(r.useState)(""),m=Object(i.a)(v,2),f=m[0],w=m[1],y=Object(r.useState)(""),S=Object(i.a)(y,2);S[0],S[1];return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={};c.trim()&&(n.name=c.toLowerCase().trim()),j.trim()&&(n.governorate=j.toLowerCase().trim()),p.trim()&&(n.city=p.toLowerCase().trim()),f.trim()&&(n.neighborhood=f.toLowerCase().trim()),t(n),O(""),b(""),o(""),w("")},children:[Object(x.jsx)(g.a,{label:"Name",value:c,variant:"outlined",onChange:function(e){var t=e.target;return o(t.value)}}),Object(x.jsx)(g.a,{label:"Governorate",value:j,variant:"outlined",onChange:function(e){var t=e.target;return b(t.value)}}),Object(x.jsx)(g.a,{label:"City",value:p,variant:"outlined",onChange:function(e){var t=e.target;return O(t.value)}}),Object(x.jsx)(g.a,{label:"Neighborhood",value:f,variant:"outlined",onChange:function(e){var t=e.target;return w(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{type:"submit",variant:"contained",style:{marginTop:9,background:"##B8545B"},children:"search"})]})},Y=n(185),q=n(186),K=n(187),Q=function(e){var t=e.restaurant;return Object(x.jsx)("div",{children:Object(x.jsxs)(Y.a,{elevation:3,style:{marginBottom:10},children:[Object(x.jsx)(q.a,{title:Object(x.jsx)(m.a,{variant:"h4",color:"#240063",gutterBottom:!0,children:t.name.toUpperCase()}),subheader:"Rate: ".concat(10)}),Object(x.jsxs)(K.a,{children:[Object(x.jsx)(m.a,{variant:"body1",color:"black",children:"Address: ".concat(t.governorate.toUpperCase(),", ").concat(t.neighborhood.toUpperCase())}),Object(x.jsx)(u.a,{component:s.b,to:"/food/".concat(t.id),children:"View Reviews"})]})]})})},X=function(e){var t=e.result;return t?0===t.length?Object(x.jsx)("div",{children:"No result found :("}):Object(x.jsx)("div",{children:Object(x.jsx)("ul",{children:t.map((function(e){return Object(x.jsx)(Q,{restaurant:e},e.id)}))})}):null},Z=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h2",style:{margin:6},children:"Search for Restaurants by location"}),Object(x.jsx)(f.a,{severity:"info",style:{marginBottom:10},children:"All fields are optional. If you want all restaurants leave search fields empty"}),Object(x.jsx)(V,{search:c}),Object(x.jsx)(X,{result:n})]})},$=n(173),_=n(179),ee=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat("/api/review","/").concat(n),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),te=function(e){var t=e.id,n=e.reviews,a=e.setReviews,c=Object(r.useState)(""),o=Object(i.a)(c,2),s=o[0],l=o[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),p=b[0],O=b[1],v=Object(r.useState)(0),w=Object(i.a)(v,2),y=w[0],S=w[1],k=Object(r.useState)(!1),C=Object(i.a)(k,2),B=C[0],T=C[1],N=Object(r.useState)(null),I=Object(i.a)(N,2),R=I[0],E=I[1],G=JSON.parse(window.localStorage.getItem("Guideme-app-user")).username,M=function(){var e=Object(h.a)(d.a.mark((function e(r){var c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),T(!1),E(null),!(s.length<1||p.length<1)){e.next=6;break}return E("please write a meaningful title and content"),e.abrupt("return");case 6:if(!(!Number(y)||y<1||y>10)){e.next=9;break}return E("rate should be a number between 1 and 10 inclusive"),e.abrupt("return");case 9:return c={title:s,user:G,content:p,rate:y},e.next=12,ee(c,t);case 12:i=e.sent,l(""),O(""),S(0),a(n.concat(i)),T(!0);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)($.a,{sx:{marginTop:5,paddingTop:2,marginBottom:3,borderTop:1},children:Object(x.jsx)(m.a,{variant:"h4",children:"You have an experience with this restaurant ? Help others with your review!"})}),R?Object(x.jsx)(f.a,{severity:"error",style:{marginBottom:10},children:R}):null,B?Object(x.jsx)(f.a,{severity:"success",children:"Thanks for your Contribution!"}):null,Object(x.jsx)($.a,{sx:{marginBottom:10},children:Object(x.jsxs)("form",{onSubmit:M,children:[Object(x.jsx)(g.a,{label:"title",value:s,variant:"outlined",onChange:function(e){var t=e.target;return l(t.value)}}),Object(x.jsx)(g.a,{label:"content",value:p,variant:"outlined",multiline:!0,rows:4,fullWidth:!0,style:{marginTop:12,marginBottom:12},onChange:function(e){var t=e.target;return O(t.value)}}),Object(x.jsx)(g.a,{label:"rate (out of 10)",value:y,variant:"outlined",onChange:function(e){var t=e.target;return S(t.value)}}),Object(x.jsx)(u.a,{type:"submit",color:"success",variant:"contained",sx:{marginTop:2},children:"Submit"})]})})]})},ne=function(e){var t=e.review,n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1],s=function(){o(!c)};return Object(x.jsxs)(Y.a,{elevation:3,style:{marginBottom:5,maxWidth:400},children:[Object(x.jsx)(q.a,{title:t.title,subheader:"".concat(t.rate,"/10"),style:{margin:0,paddingBottom:0}}),Object(x.jsxs)(K.a,{children:[Object(x.jsx)(m.a,{style:c?{wordWrap:"break-word"}:{wordWrap:"normal"},variant:"body1",fontSize:20,children:t.content}),c?Object(x.jsx)(u.a,{onClick:s,children:" hide "}):Object(x.jsx)(u.a,{onClick:s,children:" full text "}),Object(x.jsxs)(m.a,{variant:"subtitle1",fontSize:15,children:["By: ",t.user.username]})]})]})},re=function(e){var t=e.initialReviews,n=e.id,a=Object(r.useState)(t),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h4",marginBottom:2,marginTop:3,children:"Reviews:"}),0===o.length?Object(x.jsx)("p",{children:"No reviews yet"}):Object(x.jsx)(S.a,{sx:{marginBottom:5},children:Object(x.jsx)(_.a,{container:!0,spacing:2,children:o.map((function(e){return Object(x.jsx)(_.a,{item:!0,xs:12,md:6,lg:4,children:Object(x.jsx)(ne,{review:e})},e.id)}))})}),window.localStorage.getItem("Guideme-app-user")&&Object(x.jsx)(te,{id:n,reviews:o,setReviews:s})]})},ae=function(){var e=Object(o.g)().id,t=Object(r.useState)(null),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),a?Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h1",marginTop:2,marginLeft:2,children:a.name.toUpperCase()}),Object(x.jsx)($.a,{sx:{marginLeft:3,marginBottom:2,borderBottom:1},children:Object(x.jsxs)(m.a,{variant:"subtitle1",children:[a.governorate.toUpperCase(),", ",a.city.toUpperCase(),", ",a.neighborhood.toUpperCase()]})}),Object(x.jsxs)($.a,{sx:{borderBottom:1},children:[Object(x.jsx)(m.a,{variant:"h5",children:"Food Types:"}),Object(x.jsx)("ul",{children:a.foodTypes.map((function(e){return Object(x.jsx)("li",{children:e})}))})]}),Object(x.jsx)("div",{children:Object(x.jsx)(re,{initialReviews:a.reviews,id:a.id})})]}):Object(x.jsx)("div",{children:"loading..."})},ce=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("http://localhost:3003/api/user",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(e){var t=e.username,n=e.password,r=e.setUsername,a=e.setPassword,c=e.handler;return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:c,children:[Object(x.jsx)(g.a,{label:"username (4 characters min.)",value:t,variant:"outlined",onChange:function(e){var t=e.target;return r(t.value)}}),Object(x.jsx)(g.a,{label:"password (5 characters min.)",value:n,variant:"outlined",onChange:function(e){var t=e.target;return a(t.value)}}),Object(x.jsx)("br",{}),Object(x.jsx)(u.a,{type:"submit",color:"success",variant:"contained",sx:{marginTop:2},children:"create"})]})})},oe=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),u=s[0],l=s[1],j=Object(r.useState)(null),b=Object(i.a)(j,2),p=b[0],O=b[1],v=Object(r.useState)(!1),g=Object(i.a)(v,2),w=g[0],y=g[1],S=Object(o.f)(),k=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(null),y(!1),t.preventDefault(),!(n.length<4)){e.next=6;break}return O("username should be 4 characters minimum"),e.abrupt("return");case 6:if(!(u.length<5)){e.next=9;break}return O("password should be 5 characters minimum"),e.abrupt("return");case 9:return e.next=11,ce({username:n,password:u});case 11:if(!e.sent.error){e.next=15;break}return O("username already taken, please try a new one"),e.abrupt("return");case 15:y(!0),setTimeout((function(){S.push("/login")}),2500);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{variant:"h2",children:"Create New Account"}),w?Object(x.jsx)(f.a,{severity:"success",style:{marginBottom:15},children:"Great, Welcome aboard! Redirecting to login page ..."}):null,p?Object(x.jsx)(f.a,{severity:"error",style:{marginBottom:15},children:p}):null,Object(x.jsx)(ie,{username:n,password:u,setUsername:a,setPassword:l,handler:k})]})},se=n(175),ue=Object(se.a)((function(e){e.theme;return{page:{background:"#f9f9f9",width:"100%",height:"100%"}}})),le=function(e){var t=e.children,n=ue();return Object(x.jsx)("div",{className:n.page,children:Object(x.jsx)("div",{className:n.toolbar,children:t})})},je=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(o.f)();Object(r.useEffect)((function(){var e=window.localStorage.getItem("Guideme-app-user");e&&a(JSON.parse(e))}),[]);return Object(x.jsx)("div",{children:Object(x.jsxs)(le,{children:[Object(x.jsx)(l.a,{position:"sticky",style:{marginBottom:10},children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(u.a,{color:"inherit",component:s.b,to:"/",children:"Home"}),null===n&&Object(x.jsx)(u.a,{color:"inherit",component:s.b,to:"/login",children:"login"}),null===n&&Object(x.jsx)(u.a,{color:"inherit",component:s.b,to:"/signup",style:{background:"#0E9E30",paddingLeft:15},children:"New Account"}),null!==n&&Object(x.jsx)(u.a,{color:"inherit",component:s.b,to:"/logout",children:"logout"})]})}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/login",children:Object(x.jsx)(w,{setUser:a})}),Object(x.jsx)(o.a,{path:"/food/:id",children:Object(x.jsx)(ae,{})}),Object(x.jsx)(o.a,{path:"/new-restaurant",children:Object(x.jsx)(R,{})}),Object(x.jsx)(o.a,{path:"/signup",children:Object(x.jsx)(oe,{})}),Object(x.jsx)(o.a,{path:"/search",children:Object(x.jsx)(Z,{})}),Object(x.jsx)(o.a,{path:"/logout",render:function(){return window.localStorage.removeItem("Guideme-app-user"),setTimeout((function(){a(null)}),0),void c.push("/")}}),Object(x.jsx)(o.a,{path:"/",children:Object(x.jsx)(z,{})})]}),Object(x.jsx)(C,{})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};c.a.render(Object(x.jsx)(s.a,{children:Object(x.jsx)(je,{})}),document.getElementById("root")),be()}},[[126,1,2]]]);
//# sourceMappingURL=main.d4d0d6e5.chunk.js.map