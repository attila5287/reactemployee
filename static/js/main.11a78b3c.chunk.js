(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{129:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(49),c=a.n(n),i=a(14),r=a(3),l=a(0);var o=function(){var e=Object(r.e)();return Object(l.jsxs)("ul",{className:"nav nav-tabs py-0 text-sm shadow-lg",children:[Object(l.jsx)("li",{className:"nav-item align-items-center",children:Object(l.jsxs)(i.b,{to:"/",className:"/"===e.pathname?"nav-link active bg-info":"nav-link",children:[Object(l.jsx)("i",{className:"fas fa-table mx-1"}),Object(l.jsx)("span",{className:"text-md"})]})}),Object(l.jsx)("li",{className:"nav-item align-items-center",children:Object(l.jsx)(i.b,{to:"/about",className:"/about"===e.pathname?"nav-link active bg-info":"nav-link",children:Object(l.jsx)("i",{className:"fas fa-info-circle"})})}),Object(l.jsx)("li",{className:"nav-item align-items-center",children:Object(l.jsxs)(i.b,{className:"nav-link disabled",children:[Object(l.jsx)("i",{className:"fab fa-github mx-1"}),Object(l.jsx)("span",{className:"text-sm",children:"attila5287"})]})})]})},m=a(4);var d=function(){return Object(l.jsxs)("div",{className:"mini",children:[Object(l.jsx)(m.Animated,{animationIn:"bounceInLeft",isVisible:!0,children:Object(l.jsxs)("h1",{className:"bg-secondary p-0 rounded text-center",children:[Object(l.jsx)("i",{className:"fas fa-info-circle mx-2"}),"About"]})}),Object(l.jsxs)("div",{className:"list-group rounded-xl mx-5",children:[Object(l.jsx)(m.Animated,{animationIn:"bounceInLeft",animationInDelay:0,isVisible:!0,className:"list-group-item list-group-item-action py-4 bg-info text-light flex-column align-items-start rounded-xl disabled",children:Object(l.jsxs)("div",{className:"row no-gutters",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h1",{className:"title text-light fab fa-react fa-spin my-0"})}),Object(l.jsx)("div",{className:"col-10",children:Object(l.jsx)("p",{className:"my-1",children:Object(l.jsx)("i",{children:"REACT for user interface, Axios for requests, Bootswatch for stylesheets, Font-Awesome for icons, Animate.css for animations, a node.js app"})})})]})}),Object(l.jsx)("a",{href:"/table",className:"list-group-item list-group-item-action py-4 flex-column align-items-start",children:Object(l.jsxs)(m.Animated,{animationIn:"bounceInRight",isVisible:!0,animationInDelay:500,children:[Object(l.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(l.jsx)("h3",{className:"mb-1",children:"/Table"}),Object(l.jsx)("h1",{className:"fas fa-table mb-0"})]}),Object(l.jsx)("p",{className:"mb-1",children:"Given a table of employees( generated from the Random User API at https://randomuser.me/), when the user loads the page, a table of employees render. The user are able to: * Sort the table by at least one category * Filter the users by at least one property."})]})}),Object(l.jsx)("a",{href:"https://github.com/attila5287/reactemployee",className:"list-group-item list-group-item-action py-4 bg-secondary text-info flex-column align-items-start px-4",children:Object(l.jsxs)(m.Animated,{animationIn:"bounceInLeft",isVisible:!0,animationInDelay:1e3,children:[Object(l.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(l.jsx)("h5",{className:"text-info mb-1",children:"Github Repo"}),Object(l.jsx)("h3",{className:"text-info fab fa-github mb-0"})]}),Object(l.jsx)("p",{className:"mb-1",children:"Browse code on github website"})]})}),Object(l.jsx)("a",{href:"https://attila5287.github.io/",className:"list-group-item list-group-item-action py-4 bg-secondary text-info flex-column align-items-start px-4",children:Object(l.jsxs)(m.Animated,{animationIn:"bounceInRight",isVisible:!0,animationInDelay:1500,children:[Object(l.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(l.jsx)("h5",{className:"text-info mb-1",children:"By Developer"}),Object(l.jsx)("h3",{className:"text-info fas fa-id-card-alt mb-0"})]}),Object(l.jsx)("p",{className:"mb-1",children:"Check out other apps by developer"})]})})]})]})},j=a(15),b=a(51),u=function(e){return Object(l.jsx)("thead",{className:"bg-transparent",children:Object(l.jsxs)("tr",{className:"py-0",children:[Object(l.jsx)("th",{className:"align-middle",children:Object(l.jsx)("i",{className:"text-2xl text-info fab fa-react fa-spin"})}),e.headings.map((function(t,a){return Object(l.jsxs)("th",{className:"align-middle",children:[Object(l.jsx)("button",{className:"btn btn-sm btn-outline-secondary py-0 add-anime my-0 w-100",type:"button","data-sortby":t,onClick:e.handleSortBy,children:Object(l.jsxs)("span",{"data-sortby":t,className:"text-2xl text-nowrap text-right text-info py-0",children:[Object(l.jsx)("i",{"data-sortby":t,className:e.icons[t]}),Object(l.jsx)("i",{"data-sortby":t,className:"fas fa-sort text-reg text-dark opac-70 mx-3"})]})}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"d-none text-secondary opac-30",children:t})]},a)}))]})})};var h=function(e){return Object(l.jsx)("tbody",{children:e.rows.map((function(e,t){return Object(l.jsxs)("tr",{className:"py-0",children:[Object(l.jsxs)("th",{scope:"row",className:"text-sm align-middle",children:[Object(l.jsx)("i",{className:"text-info text-reg fas fa-user-tag"}),Object(l.jsx)("b",{className:"",children:t+1})]}),Object.keys(e).map((function(t,a){return"Picture"===t?Object(l.jsx)("td",{className:"align-middle  py-1",children:Object(l.jsx)("img",{src:e[t],alt:"img",className:"img-mini rounded-xl p-0"})},a):Object(l.jsx)("td",{className:"align-middle  py-1",children:e[t]},a)}))]},t)}))})},x={prep:function(e){var t=[];return e.data.results.forEach((function(e,a){var s={Picture:e.picture.thumbnail,FullName:e.name.first+" "+e.name.last,Address:[e.location.street.number+" "+e.location.street.name,e.location.city,e.location.state,e.location.postcode].join(", "),Country:e.location.country,Email:e.email,Age:e.dob.age,Cell:e.cell,Phone:e.phone};t.push(s)})),t},headings:["Picture","FullName","Address","Country","Email","Age","Cell","Phone"],headIcons:{Picture:"fas fa-image text-2xl",FullName:"fas fa-id-card text-2xl",Address:"fas fa-map-marked-alt text-2xl",Country:"fas fa-flag text-2xl",Email:"fas fa-envelope text-2xl",Age:"fas fa-birthday-cake text-2xl",Cell:"fas fa-mobile-alt text-2xl",Phone:"fas fa-phone text-2xl"}},f=a(11),p=a.n(f),g=a(19),O=a(20),N=a.n(O),y={fetch:function(){var e=Object(g.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://randomuser.me/api/?results="+t);case 2:return a=e.sent,console.log("res table",a),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(g.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://dog.ceo/api/breed/"+t+"/images");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),random:function(){var e=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://dog.ceo/api/breeds/image/random");case 2:return t=e.sent,e.abrupt("return",[t.data.message]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};var v=function(e){return Object(l.jsx)(m.Animated,{animationIn:"bounceInRight",animationInDelay:500,isVisible:!0,className:"mini",children:Object(l.jsxs)("form",{className:"row align-items-start",children:[Object(l.jsx)("div",{className:"form-group col-2",children:Object(l.jsx)("h4",{className:"fas fa-id-card fa-pull-right"})}),Object(l.jsx)("div",{className:"form-group col rounded",children:Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.search.FullName,name:"FullName",type:"text",className:"form-control form-control-sm",placeholder:"by full name"})})]})})};var I=function(e){return Object(l.jsx)(m.Animated,{animationIn:"bounceInRight",animationInDelay:1e3,isVisible:!0,className:"mini",children:Object(l.jsxs)("form",{className:"row align-items-start",children:[Object(l.jsx)("div",{className:"form-group col-2",children:Object(l.jsx)("h4",{className:"fas fa-map-marked-alt fa-pull-right"})}),Object(l.jsx)("div",{className:"form-group col rounded",children:Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.search.Address,name:"Address",type:"text",className:"form-control form-control-sm",placeholder:"by address"})})]})})};var w=function(e){return Object(l.jsx)(m.Animated,{animationIn:"bounceInRight",animationInDelay:1500,isVisible:!0,className:"mini",children:Object(l.jsxs)("form",{className:"row align-items-start",children:[Object(l.jsx)("div",{className:"form-group col-2",children:Object(l.jsx)("h4",{className:"fas fa-flag fa-pull-right"})}),Object(l.jsx)("div",{className:"form-group col rounded",children:Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.search.Country,name:"Country",type:"text",className:"form-control form-control-sm",placeholder:"by country"})})]})})};var A=function(){var e=Object(s.useState)({FullName:"",Address:"",Country:""}),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)([]),i=Object(j.a)(c,2),r=i[0],o=i[1],d=Object(s.useState)([]),f=Object(j.a)(d,2),p=f[0],g=f[1],O=Object(s.useState)(!1),N=Object(j.a)(O,2),A=N[0],C=N[1];Object(s.useEffect)((function(){y.fetch(10).then((function(e){console.log("res",e);var t=x.prep(e);o(t),console.log("org.length",t.length),console.log("rows.length",r.length),10===t.length&&(g(t),console.log(">> ---org",t),console.log(">> ---initial",p),p.length<1&&10===t.length&&(g(t),console.log(">> ---initial",p)))})).catch((function(e){return console.log(e)}))}),[]);var k=function(e){var t=e.target.name,s=e.target.value.trim();console.log(">> value",s),n(a),a[t]=s,console.log("search",a);var c=r.filter((function(e){return e[t].toLowerCase().includes(s.toLowerCase())}));o(c),console.log("filtered.length",c.length),""===Object.keys(a).map((function(e){return a[e]})).join("")&&(console.log("search",a),o([]),o(p))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"",children:Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsxs)("div",{className:"col-2 offset-1 align-items-center text-center d-flex justify-content-between",children:[Object(l.jsxs)(m.Animated,{animationIn:"fadeInLeft",isVisible:!0,animationInDelay:750,children:[Object(l.jsx)("i",{className:"text-info opac-50 fas fa-filter text-2xl"}),Object(l.jsx)("p",{className:"text-lg mb-0",children:Object(l.jsx)("b",{children:" Filter By "})})]}),Object(l.jsx)(m.Animated,{animationIn:"bounceInDown",animationInDelay:500,isVisible:!0,children:Object(l.jsx)("i",{className:"align-middle text-2xl fas fa-sitemap fa-rotate-270 opac-50"})})]}),Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsx)(v,{search:a.FullName,handleInputChange:function(e){return k(e)}}),Object(l.jsx)(I,{search:a.Address,handleInputChange:function(e){return k(e)}}),Object(l.jsx)(w,{search:a.Country,handleInputChange:function(e){return k(e)}})]})]})}),Object(l.jsx)("div",{className:"container text-center m-0",children:Object(l.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"info",className:"m-0",children:[Object(l.jsx)(u,{headings:x.headings,icons:x.headIcons,handleSortBy:function(e){return function(e){var t=e.target.dataset.sortby;console.log(">> sort by ",t);var a=r.sort((function(e,a){return a[t]>e[t]?-1:e[t]>a[t]?1:0}));console.log("sorted",a),A?(o(a),C(!1)):o(a),C(!0)}(e)}}),Object(l.jsx)(h,{rows:r})]})})]})};var C=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(r.a,{exact:!0,path:"/about",component:d}),Object(l.jsx)(r.a,{exact:!0,path:"/",component:A})]})};a(129),a(130);c.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.11a78b3c.chunk.js.map