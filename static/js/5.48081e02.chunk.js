(this.webpackJsonpsocialNetworkProject=this.webpackJsonpsocialNetworkProject||[]).push([[5],{292:function(e,a,t){"use strict";var r=t(9);a.a=r.a},295:function(e,a,t){e.exports={loginModule:"Login_loginModule__hm6u3",formSummaryError:"Login_formSummaryError__29zkq",captcha:"Login_captcha__LsP1q"}},296:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),l=t(124),n=t(125),o=t(295),m=t.n(o),i=t(92),s=t(81),u=t(14),p=t(36),h=t(292);let d=Object(s.a)(30);const E=Object(n.a)({form:"login"})(({handleSubmit:e,error:a,captchaUrl:t})=>c.a.createElement("div",null,c.a.createElement("form",{onSubmit:e},c.a.createElement("div",null,c.a.createElement(l.a,{placeholder:"Login",validate:[s.b,d],name:"email",component:i.a})),c.a.createElement("div",null,c.a.createElement(l.a,{placeholder:"Password",type:"password",validate:[s.b,d],name:"password",component:i.a})),c.a.createElement("div",null,c.a.createElement(l.a,{type:"checkbox",name:"rememberMe",component:i.a})," remember me"),a&&c.a.createElement("div",{className:m.a.formSummaryError}," ",a),t&&c.a.createElement("div",{className:m.a.captcha},c.a.createElement("img",{src:t}),c.a.createElement(l.a,{validate:s.b,name:"captcha",component:i.a})),c.a.createElement("div",null,c.a.createElement("button",null,"Login")))));a.default=Object(u.b)(e=>({isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}),{login:p.c})(e=>!0===e.isAuth?c.a.createElement(h.a,{to:"/profile"}):c.a.createElement("div",{className:m.a.loginModule},c.a.createElement("h1",null,"Login"),c.a.createElement(E,{onSubmit:a=>{e.login(a.email,a.password,a.rememberMe,a.captcha)},captchaUrl:e.captchaUrl})))}}]);
//# sourceMappingURL=5.48081e02.chunk.js.map