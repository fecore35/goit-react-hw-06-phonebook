(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},13:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),s=n(8),i=n.n(s),o=n(3),u=n(2),b=n(6),l=n(17),j=n(4),d=Object(j.a)("contacts/Create"),O=Object(j.a)("contacts/Delete"),m=Object(j.a)("contacts/Filter"),p=Object(j.b)([],(a={},Object(b.a)(a,d,(function(t,e){return[e.payload].concat(Object(l.a)(t))})),Object(b.a)(a,O,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),f=Object(j.b)("",Object(b.a)({},m,(function(t,e){return e.payload}))),_=Object(u.b)({items:p,filter:f}),h=Object(u.b)({contacts:_}),x=Object(u.d)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),C=n(14),v=n(32),N=n(5),g=n.n(N),y=n(1);var A=function(){var t=Object(o.c)((function(t){return t.contacts.items})),e=Object(o.b)(),n=Object(c.useState)(""),a=Object(C.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),u=Object(C.a)(i,2),b=u[0],l=u[1],j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":l(a);break;default:return}};return Object(y.jsxs)("form",{className:g.a.form,onSubmit:function(n){n.preventDefault();var a=n.target.name.value.toUpperCase();if(t.find((function(t){return t.name.toUpperCase()===a})))return alert("".concat(a," is already in contacts."));var c={id:Object(v.a)(),name:r,number:b};s(""),l(""),e(d(c))},children:[Object(y.jsxs)("label",{className:g.a.label,children:["Name",Object(y.jsx)("input",{type:"text",className:g.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:j})]}),Object(y.jsxs)("label",{className:g.a.label,children:["Number",Object(y.jsx)("input",{type:"tel",className:g.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:j})]}),Object(y.jsx)("button",{className:g.a.button,type:"submit",children:"Add contact"})]})},w=n(13),E=n.n(w);var k=function(t){t.handlerChange;var e=Object(o.c)((function(t){return t.contacts.filter})),n=Object(o.b)();return Object(y.jsx)("section",{className:E.a.container,children:Object(y.jsxs)("label",{children:["Find contact by name",Object(y.jsx)("input",{type:"text",className:E.a.input,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(t){return n(m(t.target.value))}})]})})},z=n(16),D=n(10),F=n.n(D);var S=function(){var t=function(t,e){var n=e.toUpperCase();return t.filter((function(t){return t.name.toUpperCase().includes(n)}))}(Object(o.c)((function(t){return t.contacts.items})),Object(o.c)((function(t){return t.contacts.filter}))),e=Object(o.b)();return Object(y.jsx)("ul",{className:F.a.list,children:t&&t.map((function(t){var n=t.id,a=t.name,c=t.number,r="tel:"+c.replace(/^(\+)|\D/g,"$1");return Object(y.jsxs)("li",{className:F.a.item,children:[Object(y.jsxs)("p",{children:[a,": ",Object(y.jsx)("a",{href:r,children:c})]}),Object(y.jsx)("button",{className:F.a.button,type:"button","data-id":n,onClick:function(t){e(O(t.currentTarget.dataset.id))},children:Object(y.jsx)(z.a,{})})]},n)}))})};var Z=function(){return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsx)(A,{}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(k,{}),Object(y.jsx)(S,{})]})};n(29);i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(o.a,{store:x,children:Object(y.jsx)(Z,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[30,1,2]]]);
//# sourceMappingURL=main.012988fc.chunk.js.map