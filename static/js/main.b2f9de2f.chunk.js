(this.webpackJsonpsocialNetworkProject=this.webpackJsonpsocialNetworkProject||[]).push([[0],{103:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(4);let r={dialogs:[{id:1,name:"\u0414\u0438\u043c\u043e\u043d"},{id:2,name:"\u041a\u0430\u0442\u044f"},{id:3,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:4,name:"\u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430"},{id:5,name:"\u0421\u0432\u0435\u0442\u0430"},{id:6,name:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:7,name:"\u0421\u0430\u0448\u0430"},{id:8,name:"\u0412\u0438\u0442\u0451\u043a"},{id:9,name:"\u0415\u0432\u0433\u0435\u043d\u0438\u0439"},{id:10,name:"\u0415\u0432\u0433\u0435\u043d\u0438\u044f"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u042d\u0442\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0441\u0442\u044d\u0439\u0442\u0435 \u0438 \u043d\u0435 \u0443\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"},{id:3,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}]};const s=e=>({type:"SEND_MESSAGE",newMessageBody:e});t.a=(e=r,t)=>{switch(t.type){case"SEND_MESSAGE":let a=t.newMessageBody;return Object(n.a)(Object(n.a)({},e),{},{messages:[...e.messages,{id:4,message:a}]});default:return e}}},11:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(129);const r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f639bb76-26f6-4a9e-bbc4-351a0c148c4d"}}),s={getUsers:(e=1,t=10)=>r.get("users?page=".concat(e,"&count=").concat(t)).then(e=>e.data),follow:e=>r.post("follow/".concat(e)).then(e=>e.data.resultCode),unfollow:e=>r.delete("follow/".concat(e)).then(e=>e.data.resultCode),getProfile:e=>(console.log("Obsolete method. Please use ProfileAPI"),o.getProfile(e))},o={getProfile:e=>r.get("profile/".concat(e)),getStatus:e=>r.get("profile/status/".concat(e)),updateStatus:e=>r.put("profile/status",{status:e}),savePhoto(e){const t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:e=>r.put("profile",e)},l={me:()=>r.get("auth/me"),login:(e,t,a=!1,n)=>r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n}),logout:()=>r.delete("auth/login"),captcha:()=>r.get("security/get-captcha-url")}},127:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return f})),a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return h})),a.d(t,"f",(function(){return g}));var n=a(8),r=a.n(n),s=a(17),o=a(4),l=a(11);const c=(e,t,a,n)=>e.map(e=>e[a]===t?Object(o.a)(Object(o.a)({},e),n):e);let i={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]};const u=e=>({type:"FOLLOW",userId:e}),m=e=>({type:"UNFOLLOW",userId:e}),p=e=>({type:"SET_CURRENT_PAGE",currentPage:e}),d=e=>({type:"TOGGLE_IS_FETCHING",isFetching:e}),f=(e,t)=>({type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}),E=(e,t)=>function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(d(!0)),n(p(e)),a.next=4,l.c.getUsers(e,t);case 4:s=a.sent,n(d(!1)),n({type:"SET_USERS",users:s.items}),n({type:"SET_TOTAL_USERS_COUNT",count:s.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(r.a.mark((function e(t,a,n,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f(!0,a)),e.next=3,n(a);case 3:0===e.sent&&t(s(a)),t(f(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),h=e=>function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(a,e,l.c.follow.bind(l.c),u);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=e=>function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b(a,e,l.c.unfollow.bind(l.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();t.a=(e=i,t)=>{switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:c(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:c(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[...e.followingInProgress,t.userId]:e.followingInProgress.filter(e=>e!==t.userId)});default:return e}}},130:function(e,t,a){e.exports=a.p+"static/media/preloader.ba787be4.gif"},131:function(e,t,a){e.exports={preloader:"Preloader_preloader__18qag"}},134:function(e,t,a){e.exports={item:"Post_item__2InU3"}},160:function(e,t,a){e.exports=a(289)},165:function(e,t,a){},166:function(e,t,a){},20:function(e,t,a){e.exports={picture:"ProfileInfo_picture__1wMHM",descriptionBlock:"ProfileInfo_descriptionBlock__2Q-eM",ava:"ProfileInfo_ava__KX1SO",profileDescription:"ProfileInfo_profileDescription__1rhUw",contactItem:"ProfileInfo_contactItem__2DVqY",formSummaryError:"ProfileInfo_formSummaryError__M76sE",formMain:"ProfileInfo_formMain__WyRc_",formChild:"ProfileInfo_formChild__19iKl"}},21:function(e,t,a){e.exports={nav:"Navbar_nav__344Sk",item:"Navbar_item__3pjw5",activeLink:"Navbar_activeLink__1kvqt"}},289:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),s=a(58),o=a.n(s),l=(a(165),a(166),a(21)),c=a.n(l),i=a(24);var u=()=>r.a.createElement("nav",{className:c.a.nav},r.a.createElement("div",{className:c.a.item},r.a.createElement(i.b,{to:"/profile",activeClassName:c.a.activeLink},"- Profile")),r.a.createElement("div",{className:c.a.item},r.a.createElement(i.b,{to:"/dialogs",activeClassName:c.a.activeLink},"- Messages")),r.a.createElement("div",{className:c.a.item},r.a.createElement(i.b,{to:"/users",activeClassName:c.a.activeLink},"- Users")),r.a.createElement("div",{className:c.a.item},r.a.createElement("a",null,"News")),r.a.createElement("div",{className:c.a.item},r.a.createElement("a",null,"Music")),r.a.createElement("div",{className:c.a.item},r.a.createElement("a",null,"Settings"))),m=a(9),p=a(85),d=a.n(p);var f=e=>r.a.createElement("header",{className:d.a.header},r.a.createElement("img",{src:"https://www.seekpng.com/png/full/872-8723815_digital-marketing-services-digital-marketing-png-icons.png"}),r.a.createElement("div",{className:d.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement("br",null)," ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(i.b,{to:"/login"},"Login"))),E=a(14),b=a(36);class h extends r.a.Component{render(){return r.a.createElement(f,this.props)}}var g=Object(E.b)(e=>({isAuth:e.auth.isAuth,login:e.auth.login}),{logout:b.d})(h),v=a(7),O=a(4);let _={initialized:!1};var S=(e=_,t)=>{switch(t.type){case"INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},w=a(37),P=a(8),j=a.n(P),k=a(17),C=a(11),y=a(27);let I={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043c\u0438\u0440! \u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442!",likesCount:12},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?",likesCount:11},{id:3,message:"\u0411\u043b\u0430 \u0431\u043b\u0430...",likesCount:11},{id:4,message:"Oh myyy...",likesCount:3},{id:5,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u0441\u0442\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c\u0438",likesCount:5}],profile:null,status:"",newPostText:""};const N=e=>({type:"SET_STATUS",status:e}),T=e=>t=>{C.c.getProfile(e).then(e=>{t({type:"SET_USER_PROFILE",profile:e.data})})};var x=(e=I,t)=>{switch(t.type){case"ADD-POST":{let a={id:6,message:t.newPostText,likesCount:0};return Object(O.a)(Object(O.a)({},e),{},{posts:[...e.posts,a],newPostText:""})}case"SET_USER_PROFILE":return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{profile:Object(O.a)(Object(O.a)({},e.profile),{},{photos:t.photos})});default:return e}},A=a(103);let U={};var L=(e=U,t)=>e,F=a(127),D=a(132),M=a(126);let R=Object(v.c)({profilePage:x,dialogsPage:A.a,sidebarPage:L,usersPage:F.a,auth:b.a,form:M.a,app:S});const G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,B=Object(v.e)(R,G(Object(v.a)(D.a)));window.__store__=B;var z=B;const H=e=>t=>r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,r.a.createElement(w.a,null))},r.a.createElement(e,t));var W=a(33),V=a(20),J=a.n(V);var K=e=>{let t=Object(n.useState)(!1),a=Object(W.a)(t,2),s=a[0],o=a[1],l=Object(n.useState)(e.status),c=Object(W.a)(l,2),i=c[0],u=c[1];Object(n.useEffect)(()=>{u(e.status)},[e.status]);return r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("div",null,r.a.createElement("i",null,r.a.createElement("span",{onDoubleClick:()=>{e.isOwner?o(!0):o(!1)}},e.status||"-------"))),s&&r.a.createElement("div",null,r.a.createElement("input",{value:i,defaultValue:i,onChange:e=>{u(e.currentTarget.value)},autoFocus:!0,onBlur:()=>{o(!1),e.updateStatus(i)}})))},X=a(124),q=a(125);var Y=Object(q.a)({form:"editProfile"})(e=>r.a.createElement("div",{className:J.a.profileDescription},r.a.createElement("form",{onSubmit:e.handleSubmit,className:J.a.formMain},r.a.createElement("div",{className:J.a.formChild},r.a.createElement("button",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),e.error&&r.a.createElement("div",{className:J.a.formSummaryError}," ",e.error),r.a.createElement("p",null,r.a.createElement(X.a,{name:"fullName",component:"input"})),r.a.createElement(K,{status:e.status}),r.a.createElement("p",null,r.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ")),r.a.createElement(X.a,{name:"aboutMe",component:"textarea"}),r.a.createElement("br",null),r.a.createElement("b",null,"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: "),r.a.createElement(X.a,{name:"lookingForAJob",component:"input",type:"checkbox"}),r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u043a\u0438\u043b\u043b\u044b: ")),r.a.createElement(X.a,{name:"lookingForAJobDescription",component:"textarea"})),r.a.createElement("div",{className:J.a.formChild},r.a.createElement("p",null,r.a.createElement("b",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),Object.keys(e.profile.contacts).map(e=>r.a.createElement("div",{className:J.a.contactItem},r.a.createElement("b",null,e,": "),r.a.createElement("br",null),r.a.createElement(X.a,{name:"contacts."+e,component:"input",placeholder:e}))))))),Q=a(60);const Z=({contactTitle:e,contactValue:t})=>r.a.createElement("div",null,r.a.createElement("b",null,e,": ")," ",t),$=e=>r.a.createElement("div",{className:J.a.profileDescription},r.a.createElement("div",null,e.isOwner&&r.a.createElement("button",{onClick:()=>{e.setEditMode(!0)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("p",null,r.a.createElement("b",null,e.profile.fullName)),r.a.createElement(K,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),r.a.createElement("p",null,r.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435: "),e.profile.aboutMe),r.a.createElement("b",null,"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: "),e.profile.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442",r.a.createElement("br",null),e.profile.lookingForAJob?r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u043a\u0438\u043b\u043b\u044b: ")," ",e.profile.lookingForAJobDescription):null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),Object.keys(e.profile.contacts).map(t=>r.a.createElement(Z,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})))));var ee=e=>{const t=Object(n.useState)(!1),a=Object(W.a)(t,2),s=a[0],o=a[1];if(!e.profile)return r.a.createElement(w.a,null);return r.a.createElement("div",null,r.a.createElement("div",{className:J.a.descriptionBlock},r.a.createElement("div",{className:J.a.ava},r.a.createElement(Q.a,{isLarge:!0,photos:e.profile.photos}),e.isOwner&&r.a.createElement("input",{type:"file",onChange:t=>{t.target.files.length&&e.savePhoto(t.target.files[0])},accept:".jpg, .jpeg, .png"})),s?r.a.createElement(Y,Object.assign({initialValues:e.profile},e,{onSubmit:t=>{e.saveProfile(t).then(()=>{o(!1)})}})):r.a.createElement($,Object.assign({},e,{setEditMode:o}))))},te=a(63),ae=a.n(te),ne=a(134),re=a.n(ne);var se=e=>{let t=Object(n.useState)(e.likesCount),a=Object(W.a)(t,2),s=a[0],o=a[1];return r.a.createElement("div",{className:re.a.item},r.a.createElement(Q.a,{isLarge:!1,photos:e.photos}),e.message,r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>o(s+1)},"Like ",s)))},oe=a(81),le=a(92);const ce=Object(oe.a)(100),ie=r.a.memo(e=>{let t=[...e.posts].reverse().map(e=>r.a.createElement(se,{key:e.id,message:e.message,likesCount:e.likesCount}));return r.a.createElement("div",{className:ae.a.postsBlock},r.a.createElement("h3",null,"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b:"),e.isOwner&&r.a.createElement(ue,{onSubmit:t=>{e.addPost(t.newPostText),t.newPostText=""}}),r.a.createElement("div",{className:ae.a.posts},t))});let ue=Object(q.a)({form:"ProfileAddNewPostForm"})(e=>r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(X.a,{name:"newPostText",component:le.b,type:"text",validate:[oe.b,ce],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430",className:ae.a.textarea})),r.a.createElement("div",null,r.a.createElement("button",null,"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))));var me=ie;var pe=Object(E.b)(e=>({posts:e.profilePage.posts}),e=>({addPost:t=>{e((e=>({type:"ADD-POST",newPostText:e}))(t))}}))(me);var de=e=>r.a.createElement("div",null,r.a.createElement(ee,{profile:e.profile,status:e.status,isOwner:e.isOwner,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),r.a.createElement(pe,{isOwner:e.isOwner}));class fe extends r.a.Component{refreshProfile(){let e=this.props.match.params.userId;e||(e=this.props.autorizedUserId,e||this.props.history.push("/login")),this.props.setProfile(e),this.props.getStatus(e)}componentDidMount(){this.refreshProfile()}componentDidUpdate(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}render(){return r.a.createElement(de,Object.assign({},this.props,{profile:this.props.profile,isOwner:!this.props.match.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}var Ee=Object(v.d)(Object(E.b)(e=>({profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}),{setProfile:T,updateStatus:e=>t=>{C.b.updateStatus(e).then(a=>{0===a.data.resultCode&&t(N(e))})},getStatus:e=>t=>{C.b.getStatus(e).then(e=>{t(N(e.data))})},savePhoto:e=>function(){var t=Object(k.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),saveProfile:e=>function(){var t=Object(k.a)(j.a.mark((function t(a,n){var r,s,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.b.saveProfile(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=8;break}s=n().auth.userId,a(T(s)),t.next=11;break;case 8:return o=r.data.messages.length>0?r.data.messages[0]:"Some Error",a(Object(y.a)("editProfile",{_error:o})),t.abrupt("return",Promise.reject());case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}),m.g)(fe);const be=r.a.lazy(()=>a.e(4).then(a.bind(null,297))),he=r.a.lazy(()=>a.e(3).then(a.bind(null,296))),ge=r.a.lazy(()=>a.e(5).then(a.bind(null,295)));class ve extends r.a.Component{componentDidMount(){this.props.initializeApp()}render(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(g,null),r.a.createElement(u,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:()=>r.a.createElement(m.a,{to:"/profile"})}),r.a.createElement(m.b,{path:"/dialogs",render:H(be)}),r.a.createElement(m.b,{path:"/profile/:userId?",render:()=>r.a.createElement(Ee,null)}),r.a.createElement(m.b,{path:"/users",render:H(he)}),r.a.createElement(m.b,{path:"/login",render:H(ge)}),r.a.createElement(m.b,{path:"/*",render:()=>r.a.createElement("h1",{align:"center"},"404 NOT FOUND")})))):r.a.createElement(w.a,null)}}let Oe=Object(v.d)(m.g,Object(E.b)(e=>({initialized:e.app.initialized}),{initializeApp:()=>e=>{let t=e(Object(b.b)());Promise.all([t]).then(()=>{e({type:"INITIALIZED_SUCCESS"})})}}))(ve);var _e=()=>r.a.createElement(i.a,null,r.a.createElement(E.a,{store:z},r.a.createElement(Oe,null)));o.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},36:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return f}));var n=a(8),r=a.n(n),s=a(17),o=a(4),l=a(11),c=a(27);let i={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null};const u=(e,t,a,n)=>({type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}),m=()=>function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,s=n.id,o=n.login,c=n.email,t(u(s,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(e,t,a,n)=>function(){var o=Object(s.a)(r.a.mark((function s(o){var i,u;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.login(e,t,a,n);case 2:0===(i=r.sent).data.resultCode?o(m()):10===i.data.resultCode?(o(Object(c.a)("login",{_error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b, \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435"})),o(d())):(u=i.data.messages.length>0?i.data.messages[0]:"Some Error",o(Object(c.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}(),d=()=>function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.captcha();case 2:a=e.sent,n=a.data.url,t({type:"samurai-network/auth/SET_CAPTCHA_URL",url:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=()=>function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.logout();case 2:0===e.sent.data.resultCode&&t(u(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=(e=i,t)=>{switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),t.payload);case"samurai-network/auth/SET_CAPTCHA_URL":return Object(o.a)(Object(o.a)({},e),{},{captchaUrl:t.url});default:return e}}},37:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(130),o=a.n(s),l=a(131),c=a.n(l);t.a=()=>r.a.createElement("div",{className:c.a.preloader},r.a.createElement("img",{src:o.a}))},60:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(82),o=a.n(s),l=a(90),c=a.n(l);t.a=e=>r.a.createElement("img",{className:e.isLarge?c.a.large:c.a.small,src:e.photos&&e.photos.large?e.photos.large:o.a})},63:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3C4Tv",posts:"MyPosts_posts__Cs4U3",textarea:"MyPosts_textarea__3DRvC"}},81:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));const n=e=>{if(!e)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},r=e=>t=>{if(t.length>e)return"\u0414\u043b\u0438\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}},82:function(e,t,a){e.exports=a.p+"static/media/defaultAvatar.b0ec8d5b.png"},85:function(e,t,a){e.exports={header:"Header_header__3aull",loginBlock:"Header_loginBlock__3PCQA"}},90:function(e,t,a){e.exports={large:"Ava_large__dBYIf",small:"Ava_small__2kmyX"}},91:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1sK3C",error:"FormsControls_error__2SmPG"}},92:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return u}));var n=a(64),r=a(0),s=a.n(r),o=a(91),l=a.n(o);const c=e=>{e.input;let t=e.meta,a=(e.child,Object(n.a)(e,["input","meta","child"]));const r=t.touched&&t.error;return s.a.createElement("div",{className:l.a.formControl+" "+(r?l.a.error:"")},s.a.createElement("div",null,a.children),r&&s.a.createElement("span",null,t.error))},i=e=>{e.input,e.meta,e.child;const t=Object(n.a)(e,["input","meta","child"]);return s.a.createElement(c,e," ",s.a.createElement("textarea",Object.assign({},e.input,t))," ")},u=e=>{e.input,e.meta,e.child;const t=Object(n.a)(e,["input","meta","child"]);return s.a.createElement(c,e," ",s.a.createElement("input",Object.assign({},e.input,t))," ")}}},[[160,1,2]]]);
//# sourceMappingURL=main.b2f9de2f.chunk.js.map