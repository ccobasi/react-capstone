(this["webpackJsonpreact-capstone"]=this["webpackJsonpreact-capstone"]||[]).push([[0],{63:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(16),r=c.n(a),s=c(5),j=c(17),l=c(32),d=c(11),b=c(21),o=c.n(b),u="GET_EXECUTIVE_REQUEST",O="GET_EXECUTIVE_SUCCESS",x="GET_EXECUTIVE_FAILURE",h="HOMEPAGE_SUCCESS",v="FILTER_EXECUTIVE",m="DETAILPAGE_SUCCESS",p="https://financialmodelingprep.com/api/v3/key-executives/AAPL?apikey=5addb169fe41bc6d1578eb6dd7ae2d8e",f=function(){return{type:u}},y=function(e){return{type:O,payload:e}},E=function(e){return{type:x,payload:e}},N=function(e){return{type:m,payload:e}},g=function(){return function(e){e(f),o.a.get(p).then((function(t){var c=t.data.map((function(e){return{title:e.title,pay:e.pay,name:e.name,currencyPay:e.currencyPay,gender:e.gender,yearBorn:e.yearBorn,titleSince:e.titleSince}}));e(y(c))})).catch((function(t){var c=t.message;e(E(c))}))}},S=function(e,t){return"all"===t?e:"male"===t?e.filter((function(e){return"male"===e.gender})):e.filter((function(e){return"female"===e.gender}))},C={loading:!1,executive:[],error:"",home:!0,value:"all",filtered:[],data:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case O:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,executive:t.payload,error:""});case v:return Object(d.a)(Object(d.a)({},e),{},{value:t.payload.value,data:t.payload.data,filtered:S(t.payload.data,t.payload.value)});case x:return{loading:!1,executive:[],error:t.payload};case h:return Object(d.a)(Object(d.a)({},e),{},{home:!0});case m:return Object(d.a)(Object(d.a)({},e),{},{home:t.payload});default:return e}},A=Object(j.b)({executive:T}),U=Object(j.c)(A,Object(j.a)(l.a)),H=c(13),_=c(4),B=(c(63),c(14)),G=c(2),I=function(e){return e.home?Object(G.jsxs)("div",{className:"Header-Container",children:[Object(G.jsx)("p",{children:Object(G.jsx)(H.c,{to:"/",children:Object(G.jsx)(B.a,{})})}),Object(G.jsx)("p",{children:"Details"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("i",{className:"Mic",children:Object(G.jsx)(B.c,{})}),Object(G.jsx)("i",{children:Object(G.jsx)(B.b,{})})]})]}):Object(G.jsxs)("div",{className:"Header-Container",children:[Object(G.jsx)("p",{children:"2021"}),Object(G.jsx)("p",{className:"Header-Title",children:"Top Executives"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("i",{className:"Mic",children:Object(G.jsx)(B.c,{})}),Object(G.jsx)("i",{children:Object(G.jsx)(B.b,{})})]})]})},w=function(){var e=Object(s.c)((function(e){return e.executive.home}));return Object(G.jsx)("div",{className:"NavBar-Container",children:Object(G.jsx)(I,{home:e})})},L=c(34),P=function(e){var t=e.executive,c=Object(s.b)(),n=t.title,i=t.pay,a=t.name,r=t.gender;return Object(G.jsx)("li",{className:"executive",children:Object(G.jsx)(H.b,{to:"/details/".concat(n),onClick:function(){c(N(!0))},value:n,children:Object(G.jsxs)("div",{className:"executive-container",children:[Object(G.jsxs)("div",{className:"executive-picture",children:[Object(G.jsx)(L.a,{className:"Arrow"}),Object(G.jsx)("div",{className:"Symbol",children:Object(G.jsx)("p",{children:n})})]}),Object(G.jsxs)("div",{className:"executive-name",children:[Object(G.jsx)("h2",{children:a}),Object(G.jsx)("h3",{children:i}),Object(G.jsx)("p",{children:r})]})]})},n)})},k=function(e){var t=e.handleSelection;return Object(G.jsxs)("select",{onChange:function(e){return t(e)},className:"Filter",children:[Object(G.jsx)("option",{value:"all",children:"All"}),Object(G.jsx)("option",{value:"male",children:"Male"}),Object(G.jsx)("option",{value:"female",children:"Female"})]})};var D=function(){var e=Object(s.c)((function(e){return e.executive.executive})),t=Object(s.c)((function(e){return e.executive.filtered})),c=Object(s.c)((function(e){return e.executive.data})),i=Object(s.c)((function(e){return e.executive.loading})),a=Object(s.b)();Object(n.useEffect)((function(){!1===i&&a(g()),a(N(!1))}),[]);var r=0===t.length&&0===c.length?e:t;return Object(G.jsxs)("div",{className:"Home",children:[Object(G.jsx)("div",{className:"Header-Container",children:Object(G.jsxs)("div",{className:"Header-Name",children:[Object(G.jsx)("h2",{children:"Key Executives"}),Object(G.jsx)("p",{children:"List"})]})}),Object(G.jsxs)("div",{children:[Object(G.jsxs)("div",{className:"executive-details",children:[Object(G.jsx)("h4",{className:"executive-details1",children:"Filter By Gender"}),Object(G.jsx)(k,{handleSelection:function(t){var c;a((c={value:t.target.value,data:e},{type:v,payload:c}))}})]}),i,Object(G.jsx)("ul",{className:"home",children:r.map((function(e){return Object(G.jsx)(P,{executive:e},e.title)}))})]})]})},F=function(e){var t=e.executive,c=t.title,n=t.pay,i=t.name,a=t.gender,r=t.yearBorn;return Object(G.jsxs)("ul",{className:"Detail-Container",children:[Object(G.jsxs)("li",{children:[Object(G.jsx)("h2",{children:"Title"}),Object(G.jsx)("p",{children:c})]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("h2",{children:"Name"}),Object(G.jsx)("p",{children:i})]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("h2",{children:"Gender"}),Object(G.jsx)("p",{children:a})]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("h2",{children:"Salary"}),Object(G.jsx)("p",{children:n})]}),Object(G.jsxs)("li",{children:[Object(G.jsx)("h2",{children:"DOB"}),Object(G.jsx)("p",{children:r})]})]})},M=function(e){var t=e.match,c=Object(s.c)((function(e){return e.executive.executive})),i=Object(s.b)();Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.useEffect)((function(){0===c.length&&i(g()),i(N(!0))}),[]);var a=c.find((function(e){return e.title.toString()===t.params.title.toString()}));return 0===c.length?Object(G.jsx)("div",{children:"Loading..."}):Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:"Header-Container",children:Object(G.jsxs)("div",{className:"Header-Name",children:[Object(G.jsx)("h2",{children:a.name.toUpperCase()}),Object(G.jsxs)("p",{children:[a.title," ",Object(G.jsx)("br",{})," ","Portfolio"]})]})}),Object(G.jsxs)("div",{className:"All-Stats",children:[Object(G.jsx)("h3",{className:"Currency-Stats",children:"Details By Gender"}),Object(G.jsx)(F,{executive:a})]})]})};var V=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(H.a,{children:[Object(G.jsx)(w,{}),Object(G.jsxs)(_.d,{children:[Object(G.jsx)(_.b,{path:"/home",children:Object(G.jsx)(D,{})}),Object(G.jsx)(_.b,{path:"/details/:title",component:M}),Object(G.jsx)(_.a,{from:"/",to:"/home"})]})]})})};r.a.render(Object(G.jsx)(i.a.StrictMode,{children:Object(G.jsx)(s.a,{store:U,children:Object(G.jsx)(V,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.276d9240.chunk.js.map