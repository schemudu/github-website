(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(0),a=n(1),i=n(16),l=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),u=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===u&&s.a.initialize(j);var o=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===u&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},b=n(5),h=n(22),d=[{index:!0,label:"Saurav // Chemudu",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(4).then(n.t.bind(null,165,7))})),m=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(23),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(b.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Saurav Chemudu"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:schemudu@outlook.com",children:"schemudu@outlook.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Saurav. I am currently a ",Object(c.jsx)("a",{href:"https://www2.gmu.edu/",children:"George Mason"})," undergraduate looking for job oppurtunities for this summer!"]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Saurav Chemudu ",Object(c.jsx)(b.b,{to:"/",children:"schemudu.com"}),"."]})]})]})},v=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Saurav Chemudu",defaultTitle:"Saurav Chemudu",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Saurav Chemudu's personal website."};t.a=k},23:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(27)),i=n(28),l=n(29),s=n(30),r=n(31),u=n(32),j=[{link:"https://github.com/schemudu",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/saurav.chemudu/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/sauravcc/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/saurav-chemudu/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://twitter.com/saurav_cc",label:"Twitter",icon:u.faTwitter}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),l=n(15),s=n(5),r=n(3),u=n(20),j=(n(45),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,162))}))),o=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,169))})),b=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,163))})),h=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,164))})),d=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,168))})),O=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,166))})),m=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,167))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(u.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[46,1,3]]]);
//# sourceMappingURL=main.64c1ac7c.chunk.js.map