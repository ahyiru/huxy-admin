(self.webpackChunk=self.webpackChunk||[]).push([[148],{88656:function(S,m,t){t.d(m,{A:function(){return c}});var e=t(62540),u={"h-btn":"dvZYe",link:"RHxmY",default:"f4yr7",outlineDefault:"kJKrM",info:"ZakFV",outlineInfo:"Zd_vm",success:"C4ThU",outlineSuccess:"i4_gW",warn:"WqYCn",outlineWarn:"Yt9hk",danger:"aATLw",outlineDanger:"YAbKM",sm:"TYtKw",lg:"HxrRu",block:"ojXq7",right:"koEUi","h-btn-group":"qIbso"},c=({className:E,...o})=>{const g=["h-btn",...E?.split(" ")??[]].filter(Boolean).map(p=>u[p]).join(" ");return(0,e.jsx)("button",{className:g,...o})}},65361:function(S,m,t){var e=t(62540),u=t(21613),s=t(7003);const c=({children:E,...o})=>(0,e.jsx)(s.gy,{...o,children:(0,e.jsx)(u.A,{placement:"topLeft",title:E,children:E})});m.A=c},35871:function(S,m,t){var e=t(62540),u=t(37553),s=t(32651),c=t(88656),E=t(48393);const o={width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},g={width:"100px"},p={width:"100%",paddingRight:"50px",fontSize:"1.6rem",fontWeight:500,textAlign:"center"},C={maxWidth:"500px"},y=({back:O,title:j,actions:A=[],backText:B="\u8FD4\u56DE"})=>(0,e.jsx)(u.A,{style:{height:"4.4rem"},children:(0,e.jsxs)("div",{style:o,children:[(0,e.jsx)("div",{style:g,children:(0,e.jsxs)(c.A,{onClick:F=>typeof O=="function"?O():history.back(),className:"sm link",children:[(0,e.jsx)(s.A,{icon:"ico-left"}),(0,e.jsx)("span",{children:(0,e.jsx)(E.Ay,{keys:"main.components.back",children:B})})]})}),j&&(0,e.jsx)("div",{style:p,children:j}),A.length?(0,e.jsx)("div",{style:C,children:A.map(({text:F,icon:i,className:D,style:v,...P},R)=>(0,e.jsxs)(c.A,{className:`sm ${D??""}`,style:{marginLeft:R?12:0,...v},...P,children:[(0,e.jsx)(s.A,{icon:i}),(0,e.jsx)("span",{children:F})]},F))}):null]})});m.A=y},37553:function(S,m,t){var e=t(62540),u=t(7003);const s=({style:c,children:E,...o})=>(0,e.jsx)(u.Zk,{style:{background:"var(--panelBgColor)",...c},...o,children:E});m.A=s},86066:function(S,m,t){t.r(m);var e=t(62540),u=t(35703),s=t(67372),c=t(80546),E=t(13601),o=t(67202),g=t(7003),p=t(60608),C=t(35871),y=t(76449),O=t(13630),j=t(37553),A=t(48393),B=t(70961);const{addUser:F,editUser:i,projectList:D}=B.lZ,v=P=>{const h=(0,A._6)()("main.users.addFormText",{}),[x]=u.A.useForm(),{getState:L}=P.history,{item:U,backState:w}=L()||{},W=async f=>{const _=U?i:F;f=U?{...U,...f}:f;const z=D.find(M=>M._id===f.projectId)?.name??"";try{const{code:M,message:b}=await _({...f,projectName:z});M===200&&(p.iUO.success(b),P.router.push("/playground/configList"))}catch(M){}},I=()=>{w?P.router.push(w):P.history.back()};return(0,e.jsx)("div",{children:(0,e.jsxs)(g.fI,{children:[(0,e.jsx)(g.fv,{children:(0,e.jsx)(C.A,{back:I})}),(0,e.jsx)(g.fv,{children:(0,e.jsx)(j.A,{children:(0,e.jsxs)(u.A,{name:"addUser",onFinish:W,form:x,initialValues:U??{},...y.Zp,style:{width:"100%",maxWidth:"600px"},autoComplete:"off",children:[(0,e.jsx)(u.A.Item,{label:h.name,name:"name",rules:O.nameRule,children:(0,e.jsx)(s.A,{placeholder:h.name})}),(0,e.jsx)(u.A.Item,{label:h.email,name:"email",rules:O.emailRule,children:(0,e.jsx)(s.A,{placeholder:h.email})}),(0,e.jsx)(u.A.Item,{label:h.password,name:"password",children:(0,e.jsx)(s.A,{type:"password",placeholder:h.password,autoComplete:"new-password"})}),(0,e.jsx)(u.A.Item,{label:h.role,name:"role",rules:O.roleRule,children:(0,e.jsx)(c.A,{placeholder:h.role,style:{width:"160px"}})}),(0,e.jsx)(u.A.Item,{label:h.avatar,name:"avatar",children:(0,e.jsx)(s.A,{placeholder:h.avatar})}),(0,e.jsx)(u.A.Item,{label:h.projectId,name:"projectId",children:(0,e.jsx)(E.A,{placeholder:h.projectId,allowClear:!0,style:{width:"80%"},children:D.map(f=>(0,e.jsx)(E.A.Option,{value:f._id,children:f.name},f._id))})}),(0,e.jsxs)(u.A.Item,{...y.vz,children:[(0,e.jsx)(o.Ay,{type:"primary",htmlType:"submit",children:h.submit}),(0,e.jsx)(o.Ay,{style:{marginLeft:"12px"},onClick:()=>x.resetFields(),children:h.reset})]})]})})})]})})};m.default=v},75698:function(S,m,t){t.r(m);var e=t(62540),u=t(63696),s=t(35703),c=t(67372),E=t(67202),o=t(42815),g=t(75807),p=t(16487),C=t(91926),y=t(77155),O=t(7003),j=t(87458),A=t(60608),B=t(98139),F=t(48393),i=t(66954),D=t(5074);const{activeEmailFn:v,githubFn:P,wechatFn:R,loginFn:h,qrStatusFn:x}=i.Ay,{emailRule:L}=D.Q,U={textAlign:"center",fontSize:"3.6rem"},w={position:"fixed",left:0,top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.8rem",background:"#fcfcfc",color:"#43a047",fontWeight:500,zIndex:3};let W=0;const I=f=>{const _=(0,F._6)(),[z,M]=(0,u.useState)(!1),b=(0,u.useRef)(),V=(0,j.xS)(),{state:Q,code:$,token:Y}=f.params??{},k=Q?.indexOf("scan0")===0;(0,u.useEffect)(()=>{if($){ee($,Q);return}if(Y){te(Y);return}(0,B.a$)()&&f.router.push("/")},[]);const H=n=>{b.current=n,W=0,V()},J=async n=>{if(!b.current)return;if(W>40){H(),A.iUO.error("\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"),W=0;return}const d=await x({status:n});if(d.status){if(H(),d.status==="error"){A.iUO.error("\u767B\u5F55\u5931\u8D25\uFF01");return}A.iUO.success("\u767B\u5F55\u6210\u529F\uFF01"),A.IGN.set("token",d.status),(0,B.gV)()}else W++,await(0,A.yy4)(1200),J(n)},X=async n=>{const{wechat_oauth_url:d,...T}=D.AY,K=`${d}${(0,A.St2)({...T,state:n})}#wechat_redirect`;try{const Z=await y.toDataURL(K);H(Z)}catch(Z){console.error(Z)}},q=async()=>{const n=`scan0${(0,A.gZm)().replaceAll("-","0")}`;await X(n),J(n)},ee=async(n,d)=>{M(!0);const T=d?R:P;try{const{token:K}=await T({code:n,state:d});K?(A.IGN.set("token",K),(0,B.gV)()):(M(!1),setTimeout(()=>WeixinJSBridge.call("closeWindow"),1e3))}catch{}M(!1)},te=async n=>{M(!0);try{const{code:d,token:T,message:K}=await v({token:n});d===200&&(A.iUO.success(K),A.IGN.set("token",T),(0,B.gV)())}catch{}M(!1)},a=async n=>{M(!0);try{const{code:d,token:T,message:K}=await h(n);d===200&&(A.iUO.success(K),A.IGN.set("token",T),(0,B.gV)())}catch{(0,B.gV)()}M(!1)},r=()=>{const{github_oauth_url:n,github_client_id:d}=D.Dh;location.href=`${n}?client_id=${d}`},l=()=>{const{wechat_oauth_url:n,...d}=D.AY;location.href=`${n}${(0,A.St2)(d)}#wechat_redirect`};return k?(0,e.jsx)("div",{style:w,children:z?"\u6B63\u5728\u767B\u5F55...":"\u767B\u5F55\u6210\u529F\uFF01"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.A,{name:"login",initialValues:{},onFinish:a,autoComplete:"off",children:[(0,e.jsx)(s.A.Item,{name:"email",rules:L,children:(0,e.jsx)(c.A,{prefix:(0,e.jsx)(o.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:_("login.email")})}),(0,e.jsx)(s.A.Item,{name:"password",children:(0,e.jsx)(c.A.Password,{prefix:(0,e.jsx)(g.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:_("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsx)(E.Ay,{block:!0,type:"primary",htmlType:"submit",children:_("login.login")})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsx)(E.Ay,{block:!0,onClick:()=>a({email:"test1@zys.com",password:"test1234"}),children:_("login.visitor")})})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{overflow:"hidden"},children:[(0,e.jsx)("span",{className:"link",style:{float:"right"},onClick:n=>f.router.push("/user/signup"),children:_("login.signup")}),(0,e.jsx)("span",{className:"link",style:{float:"left"},onClick:n=>f.router.push("/user/verifyEmail"),children:_("login.forgetPwd")})]}),(0,e.jsx)("div",{className:"split-line",style:{padding:"15px 0"},children:_("login.thirdParty")}),(0,e.jsxs)("div",{style:U,children:[(0,e.jsx)("span",{className:"link",children:(0,e.jsx)(p.A,{onClick:()=>r()})}),(0,e.jsx)("span",{className:"link",style:{marginLeft:"3rem",color:"#8ae14d"},children:(0,e.jsx)(C.A,{onClick:()=>(0,A.vqn)()?l():q()})})]}),(0,e.jsx)(O.n1,{open:b.current,close:n=>H(),children:b.current?(0,e.jsxs)("div",{style:{width:"85%",maxWidth:"35rem",textAlign:"center",background:"#333",padding:"15px 20px",color:"#fff",fontWeight:500},children:[(0,e.jsx)("h2",{style:{margin:0},children:"\u5FAE\u4FE1\u767B\u5F55"}),(0,e.jsx)("div",{style:{padding:"20px"},children:(0,e.jsx)("img",{width:"100%",src:b.current,alt:"qr"})}),(0,e.jsx)("p",{style:{margin:"0 20px",marginBottom:0,height:"32px",lineHeight:"32px",background:"#232323",borderRadius:"16px"},children:"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801\u767B\u5F55"})]}):(0,e.jsx)("div",{style:{color:"#43a047",fontWeight:500,fontSize:"3rem"},children:"\u767B\u5F55\u4E2D..."})})]}),z&&(0,e.jsx)(O.y$,{global:!0})]})};m.default=I},65738:function(S,m,t){t.r(m);var e=t(62540),u=t(63696),s=t(35703),c=t(6607),E=t(33402),o=t(67202),g=t(67372),p=t(78705),C=t(11057),y=t(42815),O=t(86520),j=t(4843),A=t(75807),B=t(60608),F=t(66954),i=t(13630),D=t(37553),v=t(17212),P=t(48393),R=t(76449);const h={padding:"10px 20px",width:"100%",maxWidth:"600px"},x=L=>{const[U,w]=(0,u.useState)(!1),W=(0,P._6)(),I=W("main.users.profilePageText.profile",{}),f=W("main.users.profilePageText.upProfile",{}),_=v.PK.getState(),[z]=s.A.useForm(),M=async $=>{w(!0);const{code:Y,message:k}=await F.Ay.upProfileFn($);w(!1),Y===200&&(B.iUO.success(k),window.location.reload())},b=R.r9.find($=>$.value===_.role)?.label??"\u666E\u901A\u7528\u6237",V=_.deadline?Math.floor((_.deadline-new Date)/864e5):0,Q=[{key:"1",label:I.title,children:(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)("div",{style:h,children:(0,e.jsxs)(s.A,{name:"profile",className:"sm-form-style",children:[(0,e.jsx)(s.A.Item,{name:"name",label:I.name,children:(0,e.jsx)(c.A.Text,{children:_.name})}),(0,e.jsx)(s.A.Item,{name:"email",label:I.email,children:(0,e.jsx)(c.A.Text,{children:_.email})}),(0,e.jsx)(s.A.Item,{name:"active",label:I.active,children:(0,e.jsx)(c.A.Text,{children:_.active?I.active_true:I.active_false})}),(0,e.jsx)(s.A.Item,{name:"projectName",label:I.projectName,children:(0,e.jsx)(c.A.Text,{children:_.projectName})}),(0,e.jsx)(s.A.Item,{name:"role",label:I.role,children:(0,e.jsx)(c.A.Text,{children:b})}),V?(0,e.jsx)(s.A.Item,{name:"leftDate",label:"\u5305\u6708\u4F1A\u5458\u5269\u4F59\u65F6\u95F4",children:(0,e.jsxs)(c.A.Text,{children:[V," \u5929"]})}):null,_.payCount?(0,e.jsx)(s.A.Item,{name:"payCount",label:"\u5305\u6B21\u4F1A\u5458\u5269\u4F59\u6B21\u6570",children:(0,e.jsxs)(c.A.Text,{children:[_.payCount," \u6B21"]})}):null]})}),(0,e.jsxs)(E.A,{align:"center",style:{width:"140px"},children:[_.role===0?(0,e.jsx)(o.Ay,{block:!0,type:"primary",icon:(0,e.jsx)(C.A,{}),size:"large",onClick:$=>L.router.push("/payer/count/member"),children:"\u5F00\u901A\u4F1A\u5458"}):null,_.role>0?(0,e.jsx)(o.Ay,{block:!0,type:"primary",icon:(0,e.jsx)(C.A,{}),size:"large",onClick:$=>L.router.push("/payer/month/member"),children:"\u4F1A\u5458\u7EED\u8D39"}):null]})]})},{key:"2",label:f.title,children:(0,e.jsx)("div",{style:h,children:(0,e.jsxs)(s.A,{name:"upProfile",className:"sm-form-style",form:z,autoComplete:"off",initialValues:_,onFinish:M,children:[(0,e.jsx)(s.A.Item,{name:"name",rules:i.nameRule,children:(0,e.jsx)(g.A,{prefix:(0,e.jsx)(y.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:f.name})}),(0,e.jsx)(s.A.Item,{name:"avatar",rules:i.urlRule,children:(0,e.jsx)(g.A,{prefix:(0,e.jsx)(O.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:"\u5934\u50CF"})}),(0,e.jsx)(s.A.Item,{name:"email",rules:i.emailRule,children:(0,e.jsx)(g.A,{disabled:!0,prefix:(0,e.jsx)(j.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:f.email})}),(0,e.jsx)(s.A.Item,{name:"password",rules:i.passwordRule,children:(0,e.jsx)(g.A.Password,{prefix:(0,e.jsx)(A.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:f.password,autoComplete:"new-password"})}),(0,e.jsxs)(s.A.Item,{children:[(0,e.jsx)(o.Ay,{type:"primary",htmlType:"submit",children:f.submit}),(0,e.jsx)(o.Ay,{disabled:U,style:{marginLeft:"12px"},onClick:()=>z.setFieldsValue({name:"",password:""}),children:f.reset})]})]})})}];return(0,e.jsx)(D.A,{children:(0,e.jsx)(p.A,{type:"card",items:Q})})};m.default=x},64966:function(S,m,t){t.r(m);var e=t(62540),u=t(63696),s=t(35703),c=t(67372),E=t(67202),o=t(75807),g=t(40441),p=t(60608),C=t(48393),y=t(98139),O=t(5074),j=t(66954);const{passwordRule:A,confirmRule:B}=O.Q,F=i=>{const D=(0,C._6)(),[v,P]=(0,u.useState)(!1),R=async h=>{P(!0);try{const x=i.params?.token,{code:L,token:U,message:w}=await j.Ay.setNewPwdFn({password:h.password,token:x});L===200&&(p.iUO.success(w),(0,y.gV)())}catch{}P(!1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.A,{name:"setNewPwd",autoComplete:"off",onFinish:R,children:[(0,e.jsx)(s.A.Item,{name:"password",rules:A,children:(0,e.jsx)(c.A.Password,{prefix:(0,e.jsx)(o.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:D("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(s.A.Item,{name:"confirm",rules:B,children:(0,e.jsx)(c.A.Password,{prefix:(0,e.jsx)(o.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:D("login.confirmPwd"),autoComplete:"new-password"})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsx)(E.Ay,{block:!0,type:"primary",htmlType:"submit",disabled:v,children:D("login.resetPwd")})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(E.Ay,{onClick:h=>i.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(g.A,{}),children:D("login.backLogin")})})})]})};m.default=F},35161:function(S,m,t){t.r(m);var e=t(62540),u=t(63696),s=t(35703),c=t(67372),E=t(67202),o=t(78969),g=t(42815),p=t(4843),C=t(75807),y=t(40441),O=t(60608),j=t(48393),A=t(98139),B=t(5074),F=t(66954);const{nameRule:i,emailRule:D,passwordRule:v,confirmRule:P}=B.Q,R=h=>{const x=(0,j._6)(),[L,U]=(0,u.useState)(!1),[w,W]=(0,u.useState)(!1),I=async f=>{W(!0);try{const{code:_,message:z}=await F.Ay.signupFn(f);_===200&&(O.iUO.success(z),U(!0))}catch{}W(!1)};return L?(0,e.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,e.jsx)(o.Ay,{status:"success",title:x("login.signup_msg"),subTitle:x("login.signup_sub_msg"),extra:(0,e.jsx)(E.Ay,{type:"primary",onClick:()=>(0,A.gV)(),children:x("login.backLogin")},"back")})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.A,{name:"signup",autoComplete:"off",onFinish:I,children:[(0,e.jsx)(s.A.Item,{name:"name",rules:i,children:(0,e.jsx)(c.A,{prefix:(0,e.jsx)(g.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:x("login.username")})}),(0,e.jsx)(s.A.Item,{name:"email",rules:D,children:(0,e.jsx)(c.A,{prefix:(0,e.jsx)(p.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:x("login.email")})}),(0,e.jsx)(s.A.Item,{name:"password",rules:v,children:(0,e.jsx)(c.A.Password,{prefix:(0,e.jsx)(C.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:x("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(s.A.Item,{name:"confirm",rules:P,children:(0,e.jsx)(c.A.Password,{prefix:(0,e.jsx)(C.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:x("login.confirmPwd"),autoComplete:"new-password"})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsx)(E.Ay,{block:!0,type:"primary",htmlType:"submit",disabled:w,children:x("login.signup")})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(E.Ay,{onClick:f=>h.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(y.A,{}),children:x("login.backLogin")})})})]})};m.default=R},23148:function(S,m,t){t.r(m);var e=t(62540),u=t(63696),s=t(35703),c=t(67372),E=t(67202),o=t(78969),g=t(4843),p=t(40441),C=t(60608),y=t(48393),O=t(5074),j=t(66954);const{emailRule:A}=O.Q,B=F=>{const i=(0,y._6)(),[D,v]=(0,u.useState)(!1),[P,R]=(0,u.useState)(!1),h=async x=>{R(!0);try{const{code:L,message:U}=await j.Ay.verifyEmailFn(x);L===200&&(C.iUO.success(U),v(!0))}catch{}R(!1)};return D?(0,e.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,e.jsx)(o.Ay,{status:"success",title:i("login.verifyEmail_msg"),subTitle:i("login.verifyEmail_sub_msg"),extra:(0,e.jsx)(E.Ay,{type:"primary",onClick:()=>location.href="/",children:(0,e.jsx)(y.Ay,{keys:"login.backLogin"})},"back")})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.A,{name:"verifyEmail",autoComplete:"off",onFinish:h,children:[(0,e.jsx)(s.A.Item,{name:"email",rules:A,children:(0,e.jsx)(c.A,{prefix:(0,e.jsx)(g.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:i("login.email")})}),(0,e.jsx)(s.A.Item,{children:(0,e.jsx)(E.Ay,{block:!0,type:"primary",htmlType:"submit",children:(0,e.jsx)(y.Ay,{keys:"login.confirmEmail"})})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(E.Ay,{onClick:x=>F.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(p.A,{}),disabled:P,children:(0,e.jsx)(y.Ay,{keys:"login.backLogin"})})})})]})};m.default=B},76449:function(S,m,t){t.d(m,{Zp:function(){return g},r9:function(){return u},rY:function(){return e},vz:function(){return p}});const e=[{type:"vip1",label:"\u57FA\u7840\u7248",price:29,period:3,count:800,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

800 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 3 \u4E2A\u6708\u3002`},{type:"vip2",label:"\u767D\u94F6\u7248",price:39,period:6,count:1500,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

1500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 6 \u4E2A\u6708\u3002`},{type:"vip3",label:"\u9EC4\u91D1\u7248",price:69,period:12,count:3e3,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

3000 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 12 \u4E2A\u6708\u3002`}],u=[{value:0,label:"\u666E\u901A\u7528\u6237",price:0,period:0,name:"general",description:"\u6BCF\u5929 2 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002"},{value:1,label:"\u57FA\u7840\u4F1A\u5458",price:19,period:1,name:"vip1",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 50 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:2,label:"\u767D\u94F6\u4F1A\u5458",price:29,period:1,name:"vip2",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 100 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:3,label:"\u9EC4\u91D1\u4F1A\u5458",price:39,period:1,name:"vip3",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 200 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:4,label:"\u94BB\u77F3\u4F1A\u5458",price:49,period:1,name:"vip4",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 320 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:5,label:"\u8D85\u7EA7\u7BA1\u7406\u5458",price:1e4,period:1e4,name:"vip5",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`}],s=[{value:1,label:"1 \u4E2A\u6708"},{value:3,label:"3 \u4E2A\u6708"},{value:6,label:"6 \u4E2A\u6708"},{value:12,label:"12 \u4E2A\u6708"},{value:24,label:"24 \u4E2A\u6708"}],c=[{value:"get",label:"get"},{value:"post",label:"post"}],E=[{value:"data",label:"data"},{value:"params",label:"params"},{value:"form",label:"form"},{value:"formData",label:"formData"}],o=[{value:0,label:"\u666E\u901A",color:"green"},{value:1,label:"\u91CD\u8981",color:"orange"},{value:2,label:"\u6838\u5FC3",color:"red"}],g={labelCol:{span:4},wrapperCol:{span:16}},p={wrapperCol:{offset:4,span:16}},C={sm:12,xs:12},y={rowKey:"name",pagination:!1,scroll:{x:!0,y:!0},size:"small"}},13630:function(S,m,t){t.r(m),t.d(m,{checkVolid:function(){return W},confirmRule:function(){return h},customEmailRule:function(){return U},customNameRule:function(){return L},customPasswordRule:function(){return w},emailRule:function(){return v},nameRule:function(){return D},passwordRule:function(){return P},pathRule:function(){return x},roleRule:function(){return R},titleRule:function(){return F},urlRule:function(){return i}});const e={pattern:/.+/,message:"\u8BF7\u8F93\u5165!"},u={required:!0},s={pattern:/^[\u4E00-\u9FA5A-Za-z0-9_.-\s]{2,32}$/,message:"\u957F\u5EA6\u4E3A2-20\u4E0D\u542B\u7279\u6B8A\u5B57\u7B26!"},c={pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]{2,20}$/,message:"\u957F\u5EA6\u4E3A2-20\u4E0D\u542B\u7279\u6B8A\u5B57\u7B26!"},E={pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E!"},o={pattern:/^(?![a-z]+$)(?![A-Z]+$)(?![\d]+$)[0-9a-zA-Z!@#$_]{8,20}$/,message:"\u5BC6\u7801\u957F\u5EA6\u4E3A8-20\u4E2A\u5B57\u7B26\uFF0C\u5E76\u4E14\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5927\u5C0F\u5199\u5B57\u6BCD\u4E2D\u7684\u4E24\u79CD\uFF0C\u4E0D\u542B\u9664 !@#$_ \u4EE5\u5916\u7684\u7279\u6B8A\u5B57\u7B26!"},g={pattern:/^https?:\/\/[^\s/?.#]+\.[^\s]+/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5\uFF01"},p={pattern:/^(\/[\w#?&=:.-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},C={pattern:/^https?:\/\/[^\s/?.#]+\.[^\s]+|^(\/[\w#?&=:.-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},y={pattern:/^\d+(?:\.\d+){2}$/,message:"\u7248\u672C\u53F7\u683C\u5F0F\u5FC5\u987B\u4E3AX.Y.Z\uFF01"},O={pattern:/^\/(\w+\/?)*$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},j={pattern:/^\/(\w+\/)*\w+\.\w+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},A={pattern:/^[a-zA-Z]:\\(?:\w+\\?)*$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},B={pattern:/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},F=[u,s],i=[g],D=[u,c],v=[u,E],P=[u,o],R=[{type:"number",min:0,max:5,message:"\u53D6\u503C\u8303\u56F40-5!"}],h=[u,({getFieldValue:I})=>({validator(f,_){return I("password")===_?Promise.resolve():Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!")}})],x=[u,p],L=[e,c],U=[e,E],w=[e,o],W=(I,f)=>{for(let _=0,z=I.length;_<z;_++){const M=I[_];if(!M.pattern.test(f))return M.message}}},70961:function(S,m,t){t.d(m,{gE:function(){return k},Zt:function(){return X},lZ:function(){return $},QJ:function(){return te},Hc:function(){return J},GH:function(){return Y},qd:function(){return ee},vR:function(){return H}});var e={};t.r(e),t.d(e,{addRouter:function(){return w},addUser:function(){return R},allUser:function(){return L},deleteRouter:function(){return I},deleteUser:function(){return x},editRouter:function(){return W},editUser:function(){return h},getAuthedRouter:function(){return f},getRouter:function(){return U},login:function(){return v},logout:function(){return P},projectList:function(){return D},setAuthedRouter:function(){return _}});var u=t(62540),s=t(53942),c=t(33402),E=t(67202),o=t(60608),g=t(76449);const p=async a=>(await(0,o.yy4)(),{code:200,message:"success\uFF01",result:{}}),C=(a,r=10)=>[...Array(r)].map((l,n)=>({id:uuidv4(),...a})),y={name:"demo",email:"demo@gmail.com",password:"123456",role:2,token:(0,o.gZm)(),projectName:"demo",projectId:"demo-1",description:"demo",active:1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy",avatar:"https://pic2.zhimg.com/a2e68681a006bd3e60fd5b22d51cb629_im.jpg",github:""},O={path:"",projectId:"demo-1",parentId:"",name:"",icon:"",redirect:"",hideMenu:!1,denied:!1,component:"",isRoot:!1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy"},j=[{parentId:"",path:"/",name:"\u9996\u9875",icon:"HomeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620635990643},{parentId:"",path:"/user",name:"\u767B\u5F55\u6CE8\u518C",icon:"TeamOutlined",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636017796},{parentId:"",path:"/404",name:"404",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636048186},{parentId:"/user",path:"/user/signin",name:"\u767B\u5F55",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636070080},{parentId:"/user",path:"/user/signup",name:"\u6CE8\u518C",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636092363},{parentId:"/user",path:"/user/verifyEmail",name:"\u9A8C\u8BC1\u90AE\u7BB1",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636109839},{parentId:"/user",path:"/user/setNewPwd",name:"\u91CD\u7F6E\u5BC6\u7801",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636127522},{parentId:"/",path:"/layout",name:"\u6846\u67B6\u914D\u7F6E",icon:"LayoutOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636154481,updater:"zys",updatetime:1624872133851},{parentId:"/",path:"/projects",name:"\u9879\u76EE\u7BA1\u7406",icon:"ConsoleSqlOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636177773},{parentId:"/",path:"/projects/add",name:"\u6DFB\u52A0\u9879\u76EE",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636207200},{parentId:"/",path:"/projects/edit/:id",name:"\u7F16\u8F91\u9879\u76EE",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636226823},{parentId:"/",path:"/projects/router/:id",name:"\u9879\u76EE\u8DEF\u7531\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636245820},{parentId:"/",path:"/users",name:"\u7528\u6237\u7BA1\u7406",icon:"UsergroupAddOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636267387},{parentId:"/",path:"/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636289415},{parentId:"/",path:"/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636307487},{parentId:"/",path:"/users/auth/:id",name:"\u8DEF\u7531\u6743\u9650\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636329861},{parentId:"/",path:"/profile",name:"\u4E2A\u4EBA\u4E2D\u5FC3",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636349501},{parentId:"/",path:"/dashboard",name:"\u4EEA\u8868\u76D8",icon:"DashboardOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636376269},{parentId:"/",path:"/pages",name:"\u9875\u9762\u8BBE\u8BA1",icon:"DesktopOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636398998},{parentId:"/",path:"/apis",name:"\u63A5\u53E3\u7BA1\u7406",icon:"ClusterOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636421223},{parentId:"/",path:"/docs",name:"\u6587\u6863\u7BA1\u7406",icon:"FileMarkdownOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636442351},{parentId:"/",path:"/i18n",name:"\u8BED\u8A00\u7BA1\u7406",icon:"GlobalOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636467249},{parentId:"/",path:"/apis/add",name:"\u6DFB\u52A0\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690561030},{parentId:"/",path:"/apis/edit/:id",name:"\u7F16\u8F91\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690599153},{parentId:"/",path:"/apis/test/:id",name:"\u63A5\u53E3\u6D4B\u8BD5",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690623384},{parentId:"/",path:"/suspense",name:"suspense",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690670034},{parentId:"/",path:"/canvas",name:"\u56FE\u5F62\u7ED8\u5236",icon:"AreaChartOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690702896},{parentId:"/",path:"/editor",name:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",icon:"EditOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690737041},{parentId:"/",path:"/low-code",name:"\u4F4E\u4EE3\u7801",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882549254},{parentId:"/low-code",path:"/low-code/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882672292},{parentId:"/low-code",path:"/low-code/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882700289},{parentId:"/low-code",path:"/low-code/users",name:"\u4E1A\u52A1\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882742565},{parentId:"/low-code",path:"/low-code/ui",name:"UI\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882785052},{parentId:"/low-code",path:"/low-code/dom",name:"\u539F\u751Fdom",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882800008}],B=((a,r=10)=>[...Array(r)].map((l,n)=>({...a,_id:(0,o.gZm)(),name:`${a.name}-${n+1}`,email:`${a.name}${n+1}@gmail.com`,role:(0,o.ImQ)(5),active:(0,o.G1U)()})))(y,500),F=j.map(a=>({...O,...a,_id:(0,o.gZm)()})),i=(0,o.y$O)();i.setState({users:B,routers:F});const D=[{_id:(0,o.gZm)(),name:"demo1"},{_id:(0,o.gZm)(),name:"demo2"}],v=async a=>{const r=await p(),n=i.getState("users").find(d=>a.name===d.name&&a.password===d.password);return{...r,result:n}},P=async a=>({...await p(),result:!0}),R=async a=>{const r=await p(),l={...a,_id:(0,o.gZm)()},n=i.getState("users");return n.push(l),i.setState({users:n}),{...r,result:l}},h=async a=>{const r=await p(),l=i.getState("users");let n=l.find(d=>d._id===a._id);return n&&(n={...n,...a},i.setState({users:l})),{...r,result:a}},x=async({ids:a})=>{const r=await p(),l=i.getState("users");return(a||[]).map(n=>{const d=l.findIndex(T=>T._id===n);d>-1&&l.splice(d,1)}),i.setState({users:l}),r},L=async({active:a,current:r,size:l,name:n,role:d})=>{const T=await p(),K=i.getState("users"),Z=l*(r-1);let N=[];if(a!=null?N=K.filter(G=>G.active==a):N=[...K],d!=null&&(N=N.filter(G=>G.role===d)),n){const G=new RegExp(n,"gi");N=N.filter(se=>se.name.toString().match(G))}const ne=N.slice(Z,Z+l);return{...T,result:{current:r,size:l,total:N.length,list:ne}}},U=async()=>{const a=await p(),r=i.getState("routers");return{...a,result:r}},w=async a=>{const r=await p(),l=i.getState("routers"),n={...a,_id:(0,o.gZm)()};return l.push(n),i.setState({routers:l}),{...r,result:n}},W=async a=>{const r=await p(),l=i.getState("routers");let n=l.find(d=>d._id===a._id);return n&&(n={...n,...a},i.setState({routers:l})),{...r,result:a}},I=async a=>{const r=await p(),l=i.getState("routers"),n=l.findIndex(d=>d._id===a._id);return n>-1&&(l.splice(n,1),i.setState({routers:l})),r},f=async()=>{const a=await p(),r=i.getState("authedRouter")||[];return{...a,result:r}},_=async a=>{const r=await p(),l=i.getState("authedRouter")||[],n=[...new Set([...l,...a?.authKeys??[]])];return i.setState({authedRouter:n}),{...r,result:n}};var z=t(65361);const M=()=>({render:a=>(0,u.jsx)(z.A,{children:a})});var V=(a,r,l=M())=>a.map(n=>({...l,...n,...r?.find(({dataIndex:d})=>d===n.dataIndex)}));const Q=({index:a,style:r,item:l,isItemLoaded:n})=>{let d;return n(a)?d=l.name:d="Loading...",(0,u.jsx)("div",{style:{...r,borderBottom:"1px solid #333"},children:(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:d})})},$=e,Y=V,k=Q,H=[{key:1,value:"\u5DF2\u6FC0\u6D3B"},{key:0,value:"\u672A\u6FC0\u6D3B"}],J=[{type:"input",name:"name",label:"\u7528\u6237\u540D",props:{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0,style:{width:"120px"}}},{type:"select",name:"role",label:"\u7B49\u7EA7",props:{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0,style:{width:"100px"},options:g.r9}}],X=(a,r)=>[{key:"add",type:"primary",label:"\u65B0\u589E",action:a.handleAdd},{key:"export",type:"default",label:"\u5BFC\u51FA",action:a.handleExport},{key:"handleDelete",type:"default",label:"\u6279\u91CF\u5220\u9664",action:a.handleDelete,disabled:r}],q=[{key:"handleCheck",type:"link",label:"\u8BBE\u7F6E"},{key:"handleEdit",type:"link",label:"\u7F16\u8F91"},{key:"handleDelete",type:"link",label:"\u5220\u9664"}],ee=[{dataIndex:"name",title:"\u7528\u6237\u540D"},{dataIndex:"email",title:"\u90AE\u7BB1"},{dataIndex:"active",title:"\u72B6\u6001"},{dataIndex:"github",title:"\u7ED1\u5B9AGitHub"},{dataIndex:"role",title:"\u7B49\u7EA7"},{dataIndex:"updatetime",title:"\u66F4\u65B0\u65F6\u95F4"},{dataIndex:"updater",title:"\u66F4\u65B0\u4EBA"},{dataIndex:"action",title:"\u64CD\u4F5C",align:"center"}],te=a=>[{dataIndex:"name",render:(r,l)=>(0,u.jsx)("span",{className:"link",onClick:()=>a.handleCheck(l),children:r})},{dataIndex:"email",render:r=>r.replace(/\S+(@\S+)/,"*****$1")},{dataIndex:"active",render:r=>r?(0,u.jsx)(s.A,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,u.jsx)(s.A,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"github",render:r=>r?(0,u.jsx)(s.A,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,u.jsx)(s.A,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"role",render:(r,l)=>g.r9.find(n=>n.value===r)?.label??"-"},{dataIndex:"updatetime",render:(r,l)=>{const n=r||l.createtime||l.signuptime||+new Date;return(0,o.fUm)(new Date(n))}},{dataIndex:"updater",render:(r,l)=>r||l.creator},{dataIndex:"action",render:(r,l)=>{const d=Object.keys(a).map(T=>({...q.find(K=>K.key===T),action:a[T]}));return(0,u.jsx)(c.A,{children:d.map(({key:T,action:K,type:Z,label:N})=>(0,u.jsx)(E.Ay,{type:Z,size:"small",disabled:!1,danger:T==="handleDelete",onClick:()=>K(l),children:N},T))})}}]},5074:function(S,m,t){t.d(m,{AY:function(){return c},Dh:function(){return s},Q:function(){return u}});var e=t(13630);const u=e,s={github_client_id:"61721ef923095e006d18",github_oauth_url:"https://github.com/login/oauth/authorize"},c={appid:"wx7f4df123f88372a5",wechat_oauth_url:"https://open.weixin.qq.com/connect/oauth2/authorize",redirect_uri:"https://ihuxy.com/user/signin",response_type:"code",scope:"snsapi_base",state:"wechat"}}}]);
