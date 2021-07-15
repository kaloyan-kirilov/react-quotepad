(this["webpackJsonpreact-quotepad"]=this["webpackJsonpreact-quotepad"]||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),s=n(13),r=n.n(s),o=(n(22),n(10)),i=n.n(o),u=n(14),l=n(8),j=n(2);var d=function(){return Object(j.jsx)("div",{className:"info-container",children:Object(j.jsx)("div",{className:"info-text",children:"Read & write wise, inspirational or funny quotes to brighten & enligthen your day"})})},b=function(e){var t=e.onClick,n=e.text,a=e.icon;return Object(j.jsxs)("button",{className:"add-button",onClick:t,children:[n," ",a]})},h=n(15),p=function(e){var t=e.toggle,n=e.showForm;return Object(j.jsxs)("header",{className:"app-header",children:[Object(j.jsx)("h1",{className:"app-title",children:"QuotePad"}),Object(j.jsx)(b,{text:n?"Close":"Add",icon:!n&&Object(j.jsx)(h.a,{className:"icon"}),onClick:t})]})},x=function(e){var t=e.quote;return Object(j.jsxs)("div",{className:"quote",children:[Object(j.jsxs)("div",{className:"quote-text",children:['"',t.quote,'"']}),Object(j.jsxs)("div",{className:"author",children:["- ",t.author]}),Object(j.jsxs)("div",{className:"username",children:["~ ",t.username,"\xa0",Object(j.jsx)("div",{style:{fontFamily:"Hi Melody"},children:"*"})]})]})},O=function(e){var t=e.quotes;return Object(j.jsx)("div",{className:"quotes-container",children:t.map((function(e){return Object(j.jsx)(x,{quote:e},e.id)}))})},m=function(){return Object(j.jsx)("div",{className:"no-quotes",children:Object(j.jsx)("h3",{children:"Waiting for Quotes..."})})},f=n(16),v=function(e){var t=e.onAdd,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],d=i[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),p=h[0],x=h[1],O=document.querySelector(".submit-message"),m=function(){O.style.opacity="1",O.style.pointerEvents="auto"};return Object(j.jsxs)("form",{className:"quote-form",onSubmit:function(e){e.preventDefault(),t({text:s,author:u,username:p}),r(""),d(""),x(""),setTimeout(m,1e3)},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Quote :"}),Object(j.jsx)("input",{type:"text",maxLength:"210",placeholder:"Enter quote...",value:s,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Author :"}),Object(j.jsx)("input",{type:"text",maxLength:"25",placeholder:"Enter name of the author...",value:u,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username :"}),Object(j.jsx)("input",{type:"text",maxLength:"20",placeholder:"Enter your username...",value:p,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(j.jsxs)("button",{className:"write-button",children:[Object(j.jsx)(f.a,{className:"write-icon"})," Write"]})]})};var g=function(){return Object(j.jsxs)("div",{className:"footer-text",children:[Object(j.jsxs)("div",{children:["Developed by\xa0",Object(j.jsx)("a",{href:"https://kaloyan-kirilov.github.io/",rel:"noreferrer",target:"_blank",children:"kaloyan-kirilov.github.io"})]}),Object(j.jsx)("div",{children:"Built with React JS + Firebase"})]})},y=n(17);var q=function(){var e=document.querySelector(".submit-message");return Object(j.jsx)("div",{className:"submit-message",children:Object(j.jsxs)("div",{className:"message-body",children:[Object(j.jsx)("p",{children:"Your quote has been written."}),Object(j.jsx)("p",{children:"Thank you for your contribution!"}),Object(j.jsxs)("button",{className:"message-button",onClick:function(){e.style.opacity="0",e.style.pointerEvents="none"},children:[Object(j.jsx)(y.a,{style:{fontSize:".8em"}}),"Okay"]})]})})};var N=function(){return Object(j.jsxs)("div",{style:{position:"absolute",zIndex:"-2"},children:[Object(j.jsx)("p",{style:{fontFamily:"Roboto Slab",fontSize:"1px",color:"transparent"},children:"Roboto Slab"}),Object(j.jsx)("p",{style:{fontFamily:"Oleo Script Swash Caps",fontSize:"1px",color:"transparent"},children:"Oleo Script Swash Caps"})]})},S=n(11),k=(n(26),{apiKey:"".concat("AIzaSyCJnzTxdgVYL_PWH34i93QvltbDyrprHH0"),authDomain:"react-quotepad.firebaseapp.com",databaseURL:"https://react-quotepad-default-rtdb.europe-west1.firebasedatabase.app",projectId:"react-quotepad",storageBucket:"react-quotepad.appspot.com",messagingSenderId:"1046353058359",appId:"1:1046353058359:web:dc61d1c4fbc5ca64117db2"});S.a.initializeApp(k);var w=S.a.database().ref("quotes");var C=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(l.a)(s,2),o=r[0],b=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.on("value",(function(e){var t=e.val();if(null!==t){var n=Object.values(t);b(n)}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"quote-pad",children:[Object(j.jsx)(p,{toggle:function(){c(!n)},showForm:n}),n&&Object(j.jsx)(v,{onAdd:function(e){var t=Math.floor(1e8*Math.random())+1;w.push().set({id:t,quote:e.text,author:e.author,username:e.username})}}),o.length>0?Object(j.jsx)(O,{quotes:o}):Object(j.jsx)(m,{})]}),Object(j.jsx)(g,{}),Object(j.jsx)(q,{}),Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"background-img"})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),F()}},[[30,1,2]]]);
//# sourceMappingURL=main.3d49982a.chunk.js.map