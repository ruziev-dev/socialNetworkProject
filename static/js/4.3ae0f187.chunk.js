(this.webpackJsonpsocialNetworkProject=this.webpackJsonpsocialNetworkProject||[]).push([[4],{290:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__BXK7d",dialogsItems:"Dialogs_dialogsItems__1zs_w",messages:"Dialogs_messages__opGXH",button:"Dialogs_button__Pl2Q5",item:"Dialogs_item__1XaUi",messageForm:"Dialogs_messageForm__3M7MN",messageItem:"Dialogs_messageItem__UFYXD",mesageItemContainer:"Dialogs_mesageItemContainer__37JbI",textarea:"Dialogs_textarea__c1XPi"}},297:function(e,a,s){"use strict";s.r(a);var t=s(0),m=s.n(t),l=s(103),n=s(290),o=s.n(n),i=s(24),r=s(60);var c=e=>{let a="/dialogs/"+e.id;return m.a.createElement(i.b,{to:a},m.a.createElement("div",{className:o.a.item},m.a.createElement(r.a,null),e.name))};var g=e=>m.a.createElement("div",{className:o.a.mesageItemContainer},m.a.createElement("div",{className:o.a.messageItem},e.message)),d=s(124),_=s(125),u=s(92),b=s(81);let E=Object(b.a)(50);const v=Object(_.a)({form:"dialogAddMessageForm"})(e=>m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement("div",null,m.a.createElement(d.a,{component:u.b,name:"newMessageBody",validate:[b.b,E],placeholder:"Enter your message",className:o.a.textarea})),m.a.createElement("div",null,m.a.createElement("button",{className:o.a.button},"Send"))));var p=e=>{let a=e.dialogsPage,s=a.dialogs.map(e=>m.a.createElement(c,{name:e.name,key:e.id,id:e.id})),t=a.messages.map(e=>m.a.createElement(g,{message:e.message,key:e.id}));return m.a.createElement("div",{className:o.a.dialogs},m.a.createElement("div",{className:o.a.dialogsItems},s),m.a.createElement("div",{className:o.a.messages},m.a.createElement("div",null,t),m.a.createElement("div",{className:o.a.messageForm},m.a.createElement(v,{onSubmit:a=>{e.sendMessage(a.newMessageBody),a.newMessageBody=""}}))))},N=s(14);var h=s(9).a;let D=e=>({isAuth:e.auth.isAuth});var I=s(7);a.default=Object(I.d)(Object(N.b)(e=>({dialogsPage:e.dialogsPage}),e=>({sendMessage:a=>{e(Object(l.b)(a))}})),e=>{class a extends m.a.Component{render(){return this.props.isAuth?m.a.createElement(e,this.props):m.a.createElement(h,{to:"/login"})}}return Object(N.b)(D)(a)})(p)}}]);
//# sourceMappingURL=4.3ae0f187.chunk.js.map