(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(22),s=n.n(a),o=(n(29),n(20)),i=n(12),u=n(4),j=n.n(u),d=n(8),l=n(11),b=(n(31),n(1)),h=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:r,children:n})},f=n(2),p=function(e){e.head;var t=e.onAdd,n=e.showTask,r=Object(f.e)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{style:O,children:"todo List "}),"/"===r.pathname&&Object(b.jsx)(h,{text:n?"Close":"Add",color:n?"red":"green",onClick:t})]})},O={color:"red"},x=n(24),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""," "),onDoubleClick:function(){return r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text,Object(b.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(b.jsx)("h3",{children:t.day})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(m,{task:e,onDelete:n,onToggle:r},t)}))})},k=function(e){var t=e.onTask,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],d=Object(r.useState)(!1),h=Object(l.a)(d,2),f=h[0],p=h[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:f}),s(""),j(""),p(!1)):alert("Please add  task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day&Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",value:f,checked:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})})},y=n(9),g=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:"Cppyright  \xa9 2021 "}),Object(b.jsx)(y.b,{to:"/about",children:"About"})]})},T=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"About Us"}),Object(b.jsx)(y.b,{to:"/",children:"Go Back"})]})};var w=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(l.a)(a,2),u=s[0],h=s[1],O=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/marinaBergas/TodoList/tasks/".concat(t),{method:"DELETE"});case 2:h(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("https://my-json-server.typicode.com/marinaBergas/TodoList/tasks/".concat(t),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,h(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/marinaBergas/TodoList/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,h([].concat(Object(o.a)(u),[r])),c=Math.floor(1e4*Math.random())+1,a=Object(i.a)({id:c},t),h([].concat(Object(o.a)(u),[a]));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/marinaBergas/TodoList/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/marinaBergas/TodoList/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/marinaBergas/TodoList/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(y.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(p,{onAdd:function(){return c(!n)},showTask:n}),Object(b.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(k,{onTask:m}),u.length>0?Object(b.jsx)(v,{tasks:u,onDelete:O,onToggle:x}):"No Tasks To Show"]})}}),Object(b.jsx)(T,{}),Object(b.jsx)(g,{})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.0616e18d.chunk.js.map