(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{166:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n(5),i=n(20),c=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(c,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d;function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}var f=n(56),v=n(54),O=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},k=function(e){var t=e.data,n=e.categories,a=t.category,s=t.competency,i=t.title,c={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(v.a)(Object(v.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:c,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};k.defaultProps={categories:[]};var x=k,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,a,s=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=s.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(f.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(f.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Here is my personal evaluation of my technical skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),a&&h(t,a),i}(a.Component);S.defaultProps={skills:[],categories:[]};var w=S,M=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};M.defaultProps={last:!1};var C=M,N=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};N.defaultProps={data:[]};var P=N,A=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"vols-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},G=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"volunteering"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Volunteering"})}),t.map((function(e){return Object(r.jsx)(A,{data:e},e.company)}))]})};G.defaultProps={data:[]};var E=G,T=[{title:"Principles of Computing",number:"CS 100",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Essentials of Computer Science",number:"CS 110",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Introduction to Computer Programming",number:"CS 112",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Object Oriented Programming",number:"CS 211",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Introduction to Low-Level/UNIX Programming",number:"CS 262",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Synthesis of Ethics and Law for the Computing Professional",number:"CS 306",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Data Structures",number:"CS 310",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Formal Methods and Models",number:"CS 330",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Computer Systems and Programming",number:"CS 367",link:"https://catalog.gmu.edu/courses/cs/",university:"George Mason"},{title:"Sculpting and Welding",number:"AVT 262",link:"https://catalog.gmu.edu/search/?search=avt",university:"George Mason"},{title:"Analytic Geometry/Calculus I",number:"MATH 113",link:"https://catalog.gmu.edu/search/?search=math",university:"George Mason"},{title:"Basic Concepts in Psych",number:"PSYC 100",link:"https://catalog.gmu.edu/search/?search=psyc",university:"George Mason"},{title:"Public Speaking",number:"COMM 100",link:"https://catalog.gmu.edu/search/?search=comm",university:"George Mason"},{title:"Intro to Engineering",number:"ENGR 107",link:"https://catalog.gmu.edu/search/?search=engr",university:"George Mason"},{title:"Intro to Global Affairs",number:"GLOA 101",link:"https://catalog.gmu.edu/search/?search=gloa",university:"George Mason"},{title:"Analytic Geometry/Calculus II",number:"MATH 114",link:"https://catalog.gmu.edu/search/?search=math",university:"George Mason"},{title:"Discrete Mathematics I",number:"MATH 125",link:"https://catalog.gmu.edu/search/?search=math",university:"George Mason"},{title:"Linear Algebra",number:"MATH 203",link:"https://catalog.gmu.edu/search/?search=math",university:"George Mason"},{title:"Analytic Geometry/Calculus II",number:"MATH 213",link:"https://catalog.gmu.edu/search/?search=math",university:"George Mason"},{title:"Differential Equations",number:"MATH 214",link:"https://catalog.gmu.edu/search/?search=math",university:"George Mason"},{title:"Digital Electronics",number:"ECE 301",link:"https://catalog.gmu.edu/search/?P=ECE%20301",university:"George Mason"},{title:"Professional and Techn Writing",number:"ENGH 388",link:"https://catalog.gmu.edu/search/?search=engh",university:"George Mason"},{title:"Prob/Stat-Engr/Scient I",number:"STAT 344",link:"https://catalog.gmu.edu/search/?search=stat",university:"George Mason"},{title:"Symbolic Logic and Proofs",number:"PHIL 376",link:"https://catalog.gmu.edu/search/?search=phil",university:"George Mason"}],D=[{company:"USA Science Festival",position:"Supervisor",link:"https://usasciencefestival.org/get-involved/volunteer/become-a-volunteer/",daterange:"2019",points:["Helped attendees participate and navigate through a massive science and engineering event in DC with hundreds of stations. Also met Asimo, the worlds most advanced humanoid robot! "]},{company:"JAMTECH",position:"3D Unity Assistant ",link:"https://www.facebook.com/JAMTECH.me/?ref=page_internal",daterange:"2018",points:["Helped highschoolers learn to create fun and innovative games using Unity engine."]},{company:"Hillside Elementary",position:"STEM CAMP LEADER",link:"https://www.lcps.org/domain/24306",daterange:"2016",points:["Myself and 5 others led a camp of 80+ kids (K-5) through basic programming fundamentals. "]}],I=[{school:"George Mason University",degree:"B.S. Computer Science",link:"https://www2.gmu.edu/",year:2021}],R=[{company:"Starship Technologies",position:"Hybrid Operator",link:"https://www.starship.xyz/",daterange:"January. 2020 \u2013 April. 2020",points:["Oversaw autonomous delivery robot operations and operated and performed maintinence on field.","Optimizing and analyzing logistics processes to improve the efficiency of on-demand delivery systems via delivery robots."]},{company:"Make My Day Please LLC",position:"Data Analyst",link:"https://makemydayplease.com",daterange:"Jan. 2019 \u2013 May. 2019",points:["Successfully gathered and interpreted data in order to perform market analysis and achieve objectives.","Designed and assisted deployment of mockup websites using SASS to accurately display and highlight current website information and pictures."]},{company:"George Mason University",position:"Project Lead",link:"https://volgenau.gmu.edu/research/centers-and-labs",daterange:"Aug. 2018 \u2013 Dec. 2018",points:["Directed a team of people to aid individuals with acheiropodia and amputees who have lost their digits or hands.","Collaborated with specialists from the Volgenau research team to use Prusa I3 MK2S 3D printers and Formlab resin printers to design and construct test models."]},{company:"SPIRIT Equestrian",position:"Developer",link:"https://www.spiritequestrian.org/",daterange:"May. 2017 \u2013 August. 2017",points:["Automated client invoicing by integrating third-party invoicing software into Financial Assistant Web Portal with Python scripts.","Automated classification of financial statements (checks, invoices, cash flow statements, etc.) with Gmail API and Tesseract OCR."]},{company:"RJ Tennis Academy",position:"Lead Instructor",link:"https://rjtennisbootcamp.square.site/",daterange:"June. 2019 \u2013 November. 2020",points:["Coached and trained 100+ Juniors and Adults in high intensity clinics"]}],H=[{title:"Java",competency:5,category:[]},{title:"Javascript",competency:4,category:[]},{title:"Node.JS",competency:3,category:[]},{title:"React",competency:3,category:[]},{title:"Bash",competency:2,category:[]},{title:"Heroku",competency:2,category:[]},{title:"SQL",competency:4,category:[]},{title:"Git",competency:3,category:[]},{title:"Typescript",competency:2,category:[]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:[]},{title:"Python",competency:4,category:[]},{title:"C",competency:5,category:[]},{title:"MATLAB",competency:2,category:[]},{title:"R",competency:2,category:[]},{title:"Spark",competency:2,category:[]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),L=[],J=([new Set(H.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))].sort().map((function(e,t){return{name:e,color:L[t]}})),["Education","Experience","Skills","Courses","Volunteering"]);t.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Saurav Chemudu's Resume",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(s.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:I}),Object(r.jsx)(m,{data:R}),Object(r.jsx)(w,{skills:H}),Object(r.jsx)(P,{data:T}),Object(r.jsx)(E,{data:D})]})})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(56);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},56:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.1924800b.chunk.js.map