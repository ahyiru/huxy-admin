(self.webpackChunk=self.webpackChunk||[]).push([[204],{38777:function(j,i,t){var e=t(62540),u=t(17519);const n=({className:s,...c})=>{const d=["h-btn",...s?.split(" ")??[]].filter(Boolean).map(m=>u.A[m]).join(" ");return(0,e.jsx)("button",{className:d,...c})};i.A=n},47977:function(j,i,t){var e=t(62540),u=t(69551),n=t(7003);const s=({children:c,...d})=>(0,e.jsx)(n.gy,{...d,children:(0,e.jsx)(u.A,{placement:"topLeft",title:c,children:c})});i.A=s},32823:function(j,i,t){var e=t(62540),u=t(87801),n=t(35027),s=t(38777),c=t(93585);const d={width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},m={width:"100px"},E={width:"100%",paddingRight:"50px",fontSize:"1.6rem",fontWeight:500,textAlign:"center"},A={maxWidth:"500px"},h=({back:g,title:C,actions:p=[],backText:x="\u8FD4\u56DE"})=>(0,e.jsx)(u.A,{style:{height:"4.4rem"},children:(0,e.jsxs)("div",{style:d,children:[(0,e.jsx)("div",{style:m,children:(0,e.jsxs)(s.A,{onClick:B=>typeof g=="function"?g():history.back(),className:"sm link",children:[(0,e.jsx)(n.A,{icon:"ico-left"}),(0,e.jsx)("span",{children:(0,e.jsx)(c.Ay,{keys:"main.components.back",children:x})})]})}),C&&(0,e.jsx)("div",{style:E,children:C}),p.length?(0,e.jsx)("div",{style:A,children:p.map(({text:B,icon:D,className:y,style:o,...a},l)=>(0,e.jsxs)(s.A,{className:`sm ${y??""}`,style:{marginLeft:l?12:0,...o},...a,children:[(0,e.jsx)(n.A,{icon:D}),(0,e.jsx)("span",{children:B})]},B))}):null]})});i.A=h},87801:function(j,i,t){var e=t(62540),u=t(7003);const n=({style:s,children:c,...d})=>(0,e.jsx)(u.Zk,{style:{background:"var(--panelBgColor)",...s},...d,children:c});i.A=n},51:function(j,i,t){t.d(i,{g:function(){return c}});var e=t(62540),u=t(47977);const n=()=>({render:d=>(0,e.jsx)(u.A,{children:d})}),s=(d,m,E=n())=>d.map(A=>({...E,...A,...m?.find(({dataIndex:h})=>h===A.dataIndex)}));i.A=s;const c=({index:d,style:m,item:E,isItemLoaded:A})=>{let h;return A(d)?h=E.name:h="Loading...",(0,e.jsx)("div",{style:{...m,borderBottom:"1px solid #333"},children:(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:h})})}},8410:function(j,i,t){t.r(i);var e=t(62540),u=t(1338),n=t(90588),s=t(92526),c=t(1624),d=t(75668),m=t(7003),E=t(60608),A=t(32823),h=t(46645),g=t(72161),C=t(87801),p=t(93585),x=t(34518);const{addUser:B,editUser:D,projectList:y}=x.lZ,o=a=>{const r=(0,p._6)()("main.users.addFormText",{}),[_]=u.A.useForm(),{getState:O}=a.history,{item:F,backState:R}=O()||{},M=async f=>{const P=F?D:B;f=F?{...F,...f}:f;const W=y.find(U=>U._id===f.projectId)?.name??"";try{const{code:U,message:T}=await P({...f,projectName:W});U===200&&(E.iUO.success(T),a.router.push("/playground/configList"))}catch(U){}},L=()=>{R?a.router.push(R):a.history.back()};return(0,e.jsx)("div",{children:(0,e.jsxs)(m.fI,{children:[(0,e.jsx)(m.fv,{children:(0,e.jsx)(A.A,{back:L})}),(0,e.jsx)(m.fv,{children:(0,e.jsx)(C.A,{children:(0,e.jsxs)(u.A,{name:"addUser",onFinish:M,form:_,initialValues:F??{},...h.Zp,style:{width:"100%",maxWidth:"600px"},autoComplete:"off",children:[(0,e.jsx)(u.A.Item,{label:r.name,name:"name",rules:g.nameRule,children:(0,e.jsx)(n.A,{placeholder:r.name})}),(0,e.jsx)(u.A.Item,{label:r.email,name:"email",rules:g.emailRule,children:(0,e.jsx)(n.A,{placeholder:r.email})}),(0,e.jsx)(u.A.Item,{label:r.password,name:"password",children:(0,e.jsx)(n.A,{type:"password",placeholder:r.password,autoComplete:"new-password"})}),(0,e.jsx)(u.A.Item,{label:r.role,name:"role",rules:g.roleRule,children:(0,e.jsx)(s.A,{placeholder:r.role,style:{width:"160px"}})}),(0,e.jsx)(u.A.Item,{label:r.avatar,name:"avatar",children:(0,e.jsx)(n.A,{placeholder:r.avatar})}),(0,e.jsx)(u.A.Item,{label:r.projectId,name:"projectId",children:(0,e.jsx)(c.A,{placeholder:r.projectId,allowClear:!0,style:{width:"80%"},children:y.map(f=>(0,e.jsx)(c.A.Option,{value:f._id,children:f.name},f._id))})}),(0,e.jsxs)(u.A.Item,{...h.vz,children:[(0,e.jsx)(d.Ay,{type:"primary",htmlType:"submit",children:r.submit}),(0,e.jsx)(d.Ay,{style:{marginLeft:"12px"},onClick:()=>_.resetFields(),children:r.reset})]})]})})})]})})};i.default=o},7290:function(j,i,t){t.r(i);var e=t(62540),u=t(63696),n=t(1338),s=t(90588),c=t(75668),d=t(42815),m=t(75807),E=t(16487),A=t(91926),h=t(77155),g=t(7003),C=t(87458),p=t(60608),x=t(20583),B=t(93585),D=t(75940),y=t(91238);const{activeEmailFn:o,githubFn:a,wechatFn:l,loginFn:r,qrStatusFn:_}=D.Ay,{emailRule:O}=y.Q,F={textAlign:"center",fontSize:"3.6rem"},R={position:"fixed",left:0,top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.8rem",background:"#fcfcfc",color:"#43a047",fontWeight:500,zIndex:3};let M=0;const L=f=>{const P=(0,B._6)(),[W,U]=(0,u.useState)(!1),T=(0,u.useRef)(),z=(0,C.xS)(),{state:b,code:w,token:$}=f.params??{},Z=b?.indexOf("scan0")===0;(0,u.useEffect)(()=>{if(w){G(w,b);return}if($){X($);return}(0,x.a$)()&&f.router.push("/")},[]);const N=I=>{T.current=I,M=0,z()},H=async I=>{if(!T.current)return;if(M>40){N(),p.iUO.error("\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"),M=0;return}const v=await _({status:I});if(v.status){if(N(),v.status==="error"){p.iUO.error("\u767B\u5F55\u5931\u8D25\uFF01");return}p.iUO.success("\u767B\u5F55\u6210\u529F\uFF01"),p.IGN.set("token",v.status),(0,x.gV)()}else M++,await(0,p.yy4)(1200),H(I)},Y=async I=>{const{wechat_oauth_url:v,...S}=y.AY,K=`${v}${(0,p.St2)({...S,state:I})}#wechat_redirect`;try{const V=await h.toDataURL(K);N(V)}catch(V){console.error(V)}},k=async()=>{const I=`scan0${(0,p.gZm)().replaceAll("-","0")}`;await Y(I),H(I)},G=async(I,v)=>{U(!0);const S=v?l:a;try{const{token:K}=await S({code:I,state:v});K?(p.IGN.set("token",K),(0,x.gV)()):(U(!1),setTimeout(()=>WeixinJSBridge.call("closeWindow"),1e3))}catch{}U(!1)},X=async I=>{U(!0);try{const{code:v,token:S,message:K}=await o({token:I});v===200&&(p.iUO.success(K),p.IGN.set("token",S),(0,x.gV)())}catch{}U(!1)},Q=async I=>{U(!0);try{const{code:v,token:S,message:K}=await r(I);v===200&&(p.iUO.success(K),p.IGN.set("token",S),(0,x.gV)())}catch{(0,x.gV)()}U(!1)},J=()=>{const{github_oauth_url:I,github_client_id:v}=y.Dh;location.href=`${I}?client_id=${v}`},q=()=>{const{wechat_oauth_url:I,...v}=y.AY;location.href=`${I}${(0,p.St2)(v)}#wechat_redirect`};return Z?(0,e.jsx)("div",{style:R,children:W?"\u6B63\u5728\u767B\u5F55...":"\u767B\u5F55\u6210\u529F\uFF01"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.A,{name:"login",initialValues:{},onFinish:Q,autoComplete:"off",children:[(0,e.jsx)(n.A.Item,{name:"email",rules:O,children:(0,e.jsx)(s.A,{prefix:(0,e.jsx)(d.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:P("login.email")})}),(0,e.jsx)(n.A.Item,{name:"password",children:(0,e.jsx)(s.A.Password,{prefix:(0,e.jsx)(m.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:P("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(n.A.Item,{children:(0,e.jsx)(c.Ay,{block:!0,type:"primary",htmlType:"submit",children:P("login.login")})}),(0,e.jsx)(n.A.Item,{children:(0,e.jsx)(c.Ay,{block:!0,onClick:()=>Q({email:"test1@zys.com",password:"test1234"}),children:P("login.visitor")})})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{overflow:"hidden"},children:[(0,e.jsx)("span",{className:"link",style:{float:"right"},onClick:I=>f.router.push("/user/signup"),children:P("login.signup")}),(0,e.jsx)("span",{className:"link",style:{float:"left"},onClick:I=>f.router.push("/user/verifyEmail"),children:P("login.forgetPwd")})]}),(0,e.jsx)("div",{className:"split-line",style:{padding:"15px 0"},children:P("login.thirdParty")}),(0,e.jsxs)("div",{style:F,children:[(0,e.jsx)("span",{className:"link",children:(0,e.jsx)(E.A,{onClick:()=>J()})}),(0,e.jsx)("span",{className:"link",style:{marginLeft:"3rem",color:"#8ae14d"},children:(0,e.jsx)(A.A,{onClick:()=>(0,p.vqn)()?q():k()})})]}),(0,e.jsx)(g.n1,{open:T.current,close:I=>N(),children:T.current?(0,e.jsxs)("div",{style:{width:"85%",maxWidth:"35rem",textAlign:"center",background:"#333",padding:"15px 20px",color:"#fff",fontWeight:500},children:[(0,e.jsx)("h2",{style:{margin:0},children:"\u5FAE\u4FE1\u767B\u5F55"}),(0,e.jsx)("div",{style:{padding:"20px"},children:(0,e.jsx)("img",{width:"100%",src:T.current,alt:"qr"})}),(0,e.jsx)("p",{style:{margin:"0 20px",marginBottom:0,height:"32px",lineHeight:"32px",background:"#232323",borderRadius:"16px"},children:"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801\u767B\u5F55"})]}):(0,e.jsx)("div",{style:{color:"#43a047",fontWeight:500,fontSize:"3rem"},children:"\u767B\u5F55\u4E2D..."})})]}),W&&(0,e.jsx)(g.y$,{global:!0})]})};i.default=L},40770:function(j,i,t){t.r(i);var e=t(62540),u=t(63696),n=t(1338),s=t(12133),c=t(2258),d=t(75668),m=t(90588),E=t(25940),A=t(11057),h=t(42815),g=t(86520),C=t(4843),p=t(75807),x=t(60608),B=t(75940),D=t(72161),y=t(87801),o=t(11986),a=t(93585),l=t(46645);const r={padding:"10px 20px",width:"100%",maxWidth:"600px"},_=O=>{const[F,R]=(0,u.useState)(!1),M=(0,a._6)(),L=M("main.users.profilePageText.profile",{}),f=M("main.users.profilePageText.upProfile",{}),P=o.PK.getState(),[W]=n.A.useForm(),U=async w=>{R(!0);const{code:$,message:Z}=await B.Ay.upProfileFn(w);R(!1),$===200&&(x.iUO.success(Z),window.location.reload())},T=l.r9.find(w=>w.value===P.role)?.label??"\u666E\u901A\u7528\u6237",z=P.deadline?Math.floor((P.deadline-new Date)/864e5):0,b=[{key:"1",label:L.title,children:(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)("div",{style:r,children:(0,e.jsxs)(n.A,{name:"profile",className:"sm-form-style",children:[(0,e.jsx)(n.A.Item,{name:"name",label:L.name,children:(0,e.jsx)(s.A.Text,{children:P.name})}),(0,e.jsx)(n.A.Item,{name:"email",label:L.email,children:(0,e.jsx)(s.A.Text,{children:P.email})}),(0,e.jsx)(n.A.Item,{name:"active",label:L.active,children:(0,e.jsx)(s.A.Text,{children:P.active?L.active_true:L.active_false})}),(0,e.jsx)(n.A.Item,{name:"projectName",label:L.projectName,children:(0,e.jsx)(s.A.Text,{children:P.projectName})}),(0,e.jsx)(n.A.Item,{name:"role",label:L.role,children:(0,e.jsx)(s.A.Text,{children:T})}),z?(0,e.jsx)(n.A.Item,{name:"leftDate",label:"\u5305\u6708\u4F1A\u5458\u5269\u4F59\u65F6\u95F4",children:(0,e.jsxs)(s.A.Text,{children:[z," \u5929"]})}):null,P.payCount?(0,e.jsx)(n.A.Item,{name:"payCount",label:"\u5305\u6B21\u4F1A\u5458\u5269\u4F59\u6B21\u6570",children:(0,e.jsxs)(s.A.Text,{children:[P.payCount," \u6B21"]})}):null]})}),(0,e.jsxs)(c.A,{align:"center",style:{width:"140px"},children:[P.role===0?(0,e.jsx)(d.Ay,{block:!0,type:"primary",icon:(0,e.jsx)(A.A,{}),size:"large",onClick:w=>O.router.push("/payer/count/member"),children:"\u5F00\u901A\u4F1A\u5458"}):null,P.role>0?(0,e.jsx)(d.Ay,{block:!0,type:"primary",icon:(0,e.jsx)(A.A,{}),size:"large",onClick:w=>O.router.push("/payer/month/member"),children:"\u4F1A\u5458\u7EED\u8D39"}):null]})]})},{key:"2",label:f.title,children:(0,e.jsx)("div",{style:r,children:(0,e.jsxs)(n.A,{name:"upProfile",className:"sm-form-style",form:W,autoComplete:"off",initialValues:P,onFinish:U,children:[(0,e.jsx)(n.A.Item,{name:"name",rules:D.nameRule,children:(0,e.jsx)(m.A,{prefix:(0,e.jsx)(h.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:f.name})}),(0,e.jsx)(n.A.Item,{name:"avatar",rules:D.urlRule,children:(0,e.jsx)(m.A,{prefix:(0,e.jsx)(g.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:"\u5934\u50CF"})}),(0,e.jsx)(n.A.Item,{name:"email",rules:D.emailRule,children:(0,e.jsx)(m.A,{disabled:!0,prefix:(0,e.jsx)(C.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:f.email})}),(0,e.jsx)(n.A.Item,{name:"password",rules:D.passwordRule,children:(0,e.jsx)(m.A.Password,{prefix:(0,e.jsx)(p.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:f.password,autoComplete:"new-password"})}),(0,e.jsxs)(n.A.Item,{children:[(0,e.jsx)(d.Ay,{type:"primary",htmlType:"submit",children:f.submit}),(0,e.jsx)(d.Ay,{disabled:F,style:{marginLeft:"12px"},onClick:()=>W.setFieldsValue({name:"",password:""}),children:f.reset})]})]})})}];return(0,e.jsx)(y.A,{children:(0,e.jsx)(E.A,{type:"card",items:b})})};i.default=_},68766:function(j,i,t){t.r(i);var e=t(62540),u=t(63696),n=t(1338),s=t(90588),c=t(75668),d=t(75807),m=t(40441),E=t(60608),A=t(93585),h=t(20583),g=t(91238),C=t(75940);const{passwordRule:p,confirmRule:x}=g.Q,B=D=>{const y=(0,A._6)(),[o,a]=(0,u.useState)(!1),l=async r=>{a(!0);try{const _=D.params?.token,{code:O,token:F,message:R}=await C.Ay.setNewPwdFn({password:r.password,token:_});O===200&&(E.iUO.success(R),(0,h.gV)())}catch{}a(!1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.A,{name:"setNewPwd",autoComplete:"off",onFinish:l,children:[(0,e.jsx)(n.A.Item,{name:"password",rules:p,children:(0,e.jsx)(s.A.Password,{prefix:(0,e.jsx)(d.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:y("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(n.A.Item,{name:"confirm",rules:x,children:(0,e.jsx)(s.A.Password,{prefix:(0,e.jsx)(d.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:y("login.confirmPwd"),autoComplete:"new-password"})}),(0,e.jsx)(n.A.Item,{children:(0,e.jsx)(c.Ay,{block:!0,type:"primary",htmlType:"submit",disabled:o,children:y("login.resetPwd")})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(c.Ay,{onClick:r=>D.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(m.A,{}),children:y("login.backLogin")})})})]})};i.default=B},28849:function(j,i,t){t.r(i);var e=t(62540),u=t(63696),n=t(1338),s=t(90588),c=t(75668),d=t(19545),m=t(42815),E=t(4843),A=t(75807),h=t(40441),g=t(60608),C=t(93585),p=t(20583),x=t(91238),B=t(75940);const{nameRule:D,emailRule:y,passwordRule:o,confirmRule:a}=x.Q,l=r=>{const _=(0,C._6)(),[O,F]=(0,u.useState)(!1),[R,M]=(0,u.useState)(!1),L=async f=>{M(!0);try{const{code:P,message:W}=await B.Ay.signupFn(f);P===200&&(g.iUO.success(W),F(!0))}catch{}M(!1)};return O?(0,e.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,e.jsx)(d.Ay,{status:"success",title:_("login.signup_msg"),subTitle:_("login.signup_sub_msg"),extra:(0,e.jsx)(c.Ay,{type:"primary",onClick:()=>(0,p.gV)(),children:_("login.backLogin")},"back")})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.A,{name:"signup",autoComplete:"off",onFinish:L,children:[(0,e.jsx)(n.A.Item,{name:"name",rules:D,children:(0,e.jsx)(s.A,{prefix:(0,e.jsx)(m.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:_("login.username")})}),(0,e.jsx)(n.A.Item,{name:"email",rules:y,children:(0,e.jsx)(s.A,{prefix:(0,e.jsx)(E.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:_("login.email")})}),(0,e.jsx)(n.A.Item,{name:"password",rules:o,children:(0,e.jsx)(s.A.Password,{prefix:(0,e.jsx)(A.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:_("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(n.A.Item,{name:"confirm",rules:a,children:(0,e.jsx)(s.A.Password,{prefix:(0,e.jsx)(A.A,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:_("login.confirmPwd"),autoComplete:"new-password"})}),(0,e.jsx)(n.A.Item,{children:(0,e.jsx)(c.Ay,{block:!0,type:"primary",htmlType:"submit",disabled:R,children:_("login.signup")})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(c.Ay,{onClick:f=>r.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(h.A,{}),children:_("login.backLogin")})})})]})};i.default=l},69188:function(j,i,t){t.r(i);var e=t(62540),u=t(63696),n=t(1338),s=t(90588),c=t(75668),d=t(19545),m=t(4843),E=t(40441),A=t(60608),h=t(93585),g=t(91238),C=t(75940);const{emailRule:p}=g.Q,x=B=>{const D=(0,h._6)(),[y,o]=(0,u.useState)(!1),[a,l]=(0,u.useState)(!1),r=async _=>{l(!0);try{const{code:O,message:F}=await C.Ay.verifyEmailFn(_);O===200&&(A.iUO.success(F),o(!0))}catch{}l(!1)};return y?(0,e.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,e.jsx)(d.Ay,{status:"success",title:D("login.verifyEmail_msg"),subTitle:D("login.verifyEmail_sub_msg"),extra:(0,e.jsx)(c.Ay,{type:"primary",onClick:()=>location.href="/",children:(0,e.jsx)(h.Ay,{keys:"login.backLogin"})},"back")})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.A,{name:"verifyEmail",autoComplete:"off",onFinish:r,children:[(0,e.jsx)(n.A.Item,{name:"email",rules:p,children:(0,e.jsx)(s.A,{prefix:(0,e.jsx)(m.A,{style:{marginRight:"7px",color:"#999"}}),placeholder:D("login.email")})}),(0,e.jsx)(n.A.Item,{children:(0,e.jsx)(c.Ay,{block:!0,type:"primary",htmlType:"submit",children:(0,e.jsx)(h.Ay,{keys:"login.confirmEmail"})})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(c.Ay,{onClick:_=>B.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(E.A,{}),disabled:a,children:(0,e.jsx)(h.Ay,{keys:"login.backLogin"})})})})]})};i.default=x},17519:function(j,i){i.A={"h-btn":"dvZYe",link:"RHxmY",default:"f4yr7",outlineDefault:"kJKrM",info:"ZakFV",outlineInfo:"Zd_vm",success:"C4ThU",outlineSuccess:"i4_gW",warn:"WqYCn",outlineWarn:"Yt9hk",danger:"aATLw",outlineDanger:"YAbKM",sm:"TYtKw",lg:"HxrRu",block:"ojXq7",right:"koEUi","h-btn-group":"qIbso"}},46645:function(j,i,t){t.d(i,{Zp:function(){return m},r9:function(){return u},rY:function(){return e},vz:function(){return E}});const e=[{type:"vip1",label:"\u57FA\u7840\u7248",price:29,period:3,count:800,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

800 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 3 \u4E2A\u6708\u3002`},{type:"vip2",label:"\u767D\u94F6\u7248",price:39,period:6,count:1500,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

1500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 6 \u4E2A\u6708\u3002`},{type:"vip3",label:"\u9EC4\u91D1\u7248",price:69,period:12,count:3e3,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

3000 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 12 \u4E2A\u6708\u3002`}],u=[{value:0,label:"\u666E\u901A\u7528\u6237",price:0,period:0,name:"general",description:"\u6BCF\u5929 2 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002"},{value:1,label:"\u57FA\u7840\u4F1A\u5458",price:19,period:1,name:"vip1",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 50 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:2,label:"\u767D\u94F6\u4F1A\u5458",price:29,period:1,name:"vip2",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 100 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:3,label:"\u9EC4\u91D1\u4F1A\u5458",price:39,period:1,name:"vip3",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 200 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:4,label:"\u94BB\u77F3\u4F1A\u5458",price:49,period:1,name:"vip4",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 320 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:5,label:"\u8D85\u7EA7\u7BA1\u7406\u5458",price:1e4,period:1e4,name:"vip5",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`}],n=[{value:1,label:"1 \u4E2A\u6708"},{value:3,label:"3 \u4E2A\u6708"},{value:6,label:"6 \u4E2A\u6708"},{value:12,label:"12 \u4E2A\u6708"},{value:24,label:"24 \u4E2A\u6708"}],s=[{value:"get",label:"get"},{value:"post",label:"post"}],c=[{value:"data",label:"data"},{value:"params",label:"params"},{value:"form",label:"form"},{value:"formData",label:"formData"}],d=[{value:0,label:"\u666E\u901A",color:"green"},{value:1,label:"\u91CD\u8981",color:"orange"},{value:2,label:"\u6838\u5FC3",color:"red"}],m={labelCol:{span:4},wrapperCol:{span:16}},E={wrapperCol:{offset:4,span:16}},A={sm:12,xs:12},h={rowKey:"name",pagination:!1,scroll:{x:!0,y:!0},size:"small"}},15483:function(j,i,t){t.d(i,{AN:function(){return m},PH:function(){return n},TS:function(){return e},WX:function(){return d},_u:function(){return s},mw:function(){return u},s$:function(){return E},z6:function(){return c}});const e={pattern:/.+/,message:"\u8BF7\u8F93\u5165!"},u={required:!0},n={pattern:/^[\u4E00-\u9FA5A-Za-z0-9_.-\s]{2,32}$/,message:"\u957F\u5EA6\u4E3A2-20\u4E0D\u542B\u7279\u6B8A\u5B57\u7B26!"},s={pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]{2,20}$/,message:"\u957F\u5EA6\u4E3A2-20\u4E0D\u542B\u7279\u6B8A\u5B57\u7B26!"},c={pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E!"},d={pattern:/^(?![a-z]+$)(?![A-Z]+$)(?![\d]+$)[0-9a-zA-Z!@#$_]{8,20}$/,message:"\u5BC6\u7801\u957F\u5EA6\u4E3A8-20\u4E2A\u5B57\u7B26\uFF0C\u5E76\u4E14\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5927\u5C0F\u5199\u5B57\u6BCD\u4E2D\u7684\u4E24\u79CD\uFF0C\u4E0D\u542B\u9664 !@#$_ \u4EE5\u5916\u7684\u7279\u6B8A\u5B57\u7B26!"},m={pattern:/^https?:\/\/[^\s/?.#]+\.[^\s]+/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5\uFF01"},E={pattern:/^(\/[\w#?&=:.-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},A={pattern:/^https?:\/\/[^\s/?.#]+\.[^\s]+|^(\/[\w#?&=:.-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},h={pattern:/^\d+(?:\.\d+){2}$/,message:"\u7248\u672C\u53F7\u683C\u5F0F\u5FC5\u987B\u4E3AX.Y.Z\uFF01"},g={pattern:/^\/(\w+\/?)*$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},C={pattern:/^\/(\w+\/)*\w+\.\w+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},p={pattern:/^[a-zA-Z]:\\(?:\w+\\?)*$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},x={pattern:/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"}},72161:function(j,i,t){t.r(i),t.d(i,{checkVolid:function(){return p},confirmRule:function(){return E},customEmailRule:function(){return g},customNameRule:function(){return h},customPasswordRule:function(){return C},emailRule:function(){return c},nameRule:function(){return s},passwordRule:function(){return d},pathRule:function(){return A},roleRule:function(){return m},titleRule:function(){return u},urlRule:function(){return n}});var e=t(15483);const u=[e.mw,e.PH],n=[e.AN],s=[e.mw,e._u],c=[e.mw,e.z6],d=[e.mw,e.WX],m=[{type:"number",min:0,max:5,message:"\u53D6\u503C\u8303\u56F40-5!"}],E=[e.mw,({getFieldValue:x})=>({validator(B,D){return x("password")===D?Promise.resolve():Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!")}})],A=[e.mw,e.s$],h=[e.TS,e._u],g=[e.TS,e.z6],C=[e.TS,e.WX],p=(x,B)=>{for(let D=0,y=x.length;D<y;D++){const o=x[D];if(!o.pattern.test(B))return o.message}}},34518:function(j,i,t){t.d(i,{GH:function(){return h},Hc:function(){return p},QJ:function(){return y},Zt:function(){return x},gE:function(){return g},lZ:function(){return A},qd:function(){return D},vR:function(){return C}});var e=t(62540),u=t(73672),n=t(2258),s=t(75668),c=t(60608),d=t(46645),m=t(48044),E=t(51);const A=m,h=E.A,g=E.g,C=[{key:1,value:"\u5DF2\u6FC0\u6D3B"},{key:0,value:"\u672A\u6FC0\u6D3B"}],p=[{type:"input",name:"name",label:"\u7528\u6237\u540D",props:{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0,style:{width:"120px"}}},{type:"select",name:"role",label:"\u7B49\u7EA7",props:{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0,style:{width:"100px"},options:d.r9}}],x=(o,a)=>[{key:"add",type:"primary",label:"\u65B0\u589E",action:o.handleAdd},{key:"export",type:"default",label:"\u5BFC\u51FA",action:o.handleExport},{key:"handleDelete",type:"default",label:"\u6279\u91CF\u5220\u9664",action:o.handleDelete,disabled:a}],B=[{key:"handleCheck",type:"link",label:"\u8BBE\u7F6E"},{key:"handleEdit",type:"link",label:"\u7F16\u8F91"},{key:"handleDelete",type:"link",label:"\u5220\u9664"}],D=[{dataIndex:"name",title:"\u7528\u6237\u540D"},{dataIndex:"email",title:"\u90AE\u7BB1"},{dataIndex:"active",title:"\u72B6\u6001"},{dataIndex:"github",title:"\u7ED1\u5B9AGitHub"},{dataIndex:"role",title:"\u7B49\u7EA7"},{dataIndex:"updatetime",title:"\u66F4\u65B0\u65F6\u95F4"},{dataIndex:"updater",title:"\u66F4\u65B0\u4EBA"},{dataIndex:"action",title:"\u64CD\u4F5C",align:"center"}],y=o=>[{dataIndex:"name",render:(a,l)=>(0,e.jsx)("span",{className:"link",onClick:()=>o.handleCheck(l),children:a})},{dataIndex:"email",render:a=>a.replace(/\S+(@\S+)/,"*****$1")},{dataIndex:"active",render:a=>a?(0,e.jsx)(u.A,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,e.jsx)(u.A,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"github",render:a=>a?(0,e.jsx)(u.A,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,e.jsx)(u.A,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"role",render:(a,l)=>d.r9.find(r=>r.value===a)?.label??"-"},{dataIndex:"updatetime",render:(a,l)=>{const r=a||l.createtime||l.signuptime||+new Date;return(0,c.fUm)(new Date(r))}},{dataIndex:"updater",render:(a,l)=>a||l.creator},{dataIndex:"action",render:(a,l)=>{const _=Object.keys(o).map(O=>({...B.find(F=>F.key===O),action:o[O]}));return(0,e.jsx)(n.A,{children:_.map(({key:O,action:F,type:R,label:M})=>(0,e.jsx)(s.Ay,{type:R,size:"small",disabled:!1,danger:O==="handleDelete",onClick:()=>F(l),children:M},O))})}}]},22258:function(j,i,t){t.d(i,{Lx:function(){return m},VV:function(){return d}});var e=t(60608);const u={name:"demo",email:"demo@gmail.com",password:"123456",role:2,token:(0,e.gZm)(),projectName:"demo",projectId:"demo-1",description:"demo",active:1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy",avatar:"https://pic2.zhimg.com/a2e68681a006bd3e60fd5b22d51cb629_im.jpg",github:""},n={path:"",projectId:"demo-1",parentId:"",name:"",icon:"",redirect:"",hideMenu:!1,denied:!1,component:"",isRoot:!1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy"},s=[{parentId:"",path:"/",name:"\u9996\u9875",icon:"HomeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620635990643},{parentId:"",path:"/user",name:"\u767B\u5F55\u6CE8\u518C",icon:"TeamOutlined",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636017796},{parentId:"",path:"/404",name:"404",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636048186},{parentId:"/user",path:"/user/signin",name:"\u767B\u5F55",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636070080},{parentId:"/user",path:"/user/signup",name:"\u6CE8\u518C",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636092363},{parentId:"/user",path:"/user/verifyEmail",name:"\u9A8C\u8BC1\u90AE\u7BB1",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636109839},{parentId:"/user",path:"/user/setNewPwd",name:"\u91CD\u7F6E\u5BC6\u7801",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636127522},{parentId:"/",path:"/layout",name:"\u6846\u67B6\u914D\u7F6E",icon:"LayoutOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636154481,updater:"zys",updatetime:1624872133851},{parentId:"/",path:"/projects",name:"\u9879\u76EE\u7BA1\u7406",icon:"ConsoleSqlOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636177773},{parentId:"/",path:"/projects/add",name:"\u6DFB\u52A0\u9879\u76EE",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636207200},{parentId:"/",path:"/projects/edit/:id",name:"\u7F16\u8F91\u9879\u76EE",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636226823},{parentId:"/",path:"/projects/router/:id",name:"\u9879\u76EE\u8DEF\u7531\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636245820},{parentId:"/",path:"/users",name:"\u7528\u6237\u7BA1\u7406",icon:"UsergroupAddOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636267387},{parentId:"/",path:"/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636289415},{parentId:"/",path:"/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636307487},{parentId:"/",path:"/users/auth/:id",name:"\u8DEF\u7531\u6743\u9650\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636329861},{parentId:"/",path:"/profile",name:"\u4E2A\u4EBA\u4E2D\u5FC3",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636349501},{parentId:"/",path:"/dashboard",name:"\u4EEA\u8868\u76D8",icon:"DashboardOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636376269},{parentId:"/",path:"/pages",name:"\u9875\u9762\u8BBE\u8BA1",icon:"DesktopOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636398998},{parentId:"/",path:"/apis",name:"\u63A5\u53E3\u7BA1\u7406",icon:"ClusterOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636421223},{parentId:"/",path:"/docs",name:"\u6587\u6863\u7BA1\u7406",icon:"FileMarkdownOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636442351},{parentId:"/",path:"/i18n",name:"\u8BED\u8A00\u7BA1\u7406",icon:"GlobalOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636467249},{parentId:"/",path:"/apis/add",name:"\u6DFB\u52A0\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690561030},{parentId:"/",path:"/apis/edit/:id",name:"\u7F16\u8F91\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690599153},{parentId:"/",path:"/apis/test/:id",name:"\u63A5\u53E3\u6D4B\u8BD5",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690623384},{parentId:"/",path:"/suspense",name:"suspense",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690670034},{parentId:"/",path:"/canvas",name:"\u56FE\u5F62\u7ED8\u5236",icon:"AreaChartOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690702896},{parentId:"/",path:"/editor",name:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",icon:"EditOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690737041},{parentId:"/",path:"/low-code",name:"\u4F4E\u4EE3\u7801",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882549254},{parentId:"/low-code",path:"/low-code/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882672292},{parentId:"/low-code",path:"/low-code/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882700289},{parentId:"/low-code",path:"/low-code/users",name:"\u4E1A\u52A1\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882742565},{parentId:"/low-code",path:"/low-code/ui",name:"UI\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882785052},{parentId:"/low-code",path:"/low-code/dom",name:"\u539F\u751Fdom",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882800008}],d=((E,A=10)=>[...Array(A)].map((h,g)=>({...E,_id:(0,e.gZm)(),name:`${E.name}-${g+1}`,email:`${E.name}${g+1}@gmail.com`,role:(0,e.ImQ)(5),active:(0,e.G1U)()})))(u,500),m=s.map(E=>({...n,...E,_id:(0,e.gZm)()}))},48044:function(j,i,t){t.r(i),t.d(i,{addRouter:function(){return p},addUser:function(){return E},allUser:function(){return g},deleteRouter:function(){return B},deleteUser:function(){return h},editRouter:function(){return x},editUser:function(){return A},getAuthedRouter:function(){return D},getRouter:function(){return C},login:function(){return d},logout:function(){return m},projectList:function(){return c},setAuthedRouter:function(){return y}});var e=t(60608),u=t(17861),n=t(22258);const s=(0,e.y$O)();s.setState({users:n.VV,routers:n.Lx});const c=[{_id:(0,e.gZm)(),name:"demo1"},{_id:(0,e.gZm)(),name:"demo2"}],d=async o=>{const a=await(0,u.W)(),r=s.getState("users").find(_=>o.name===_.name&&o.password===_.password);return{...a,result:r}},m=async o=>({...await(0,u.W)(),result:!0}),E=async o=>{const a=await(0,u.W)(),l={...o,_id:(0,e.gZm)()},r=s.getState("users");return r.push(l),s.setState({users:r}),{...a,result:l}},A=async o=>{const a=await(0,u.W)(),l=s.getState("users");let r=l.find(_=>_._id===o._id);return r&&(r={...r,...o},s.setState({users:l})),{...a,result:o}},h=async({ids:o})=>{const a=await(0,u.W)(),l=s.getState("users");return(o||[]).map(r=>{const _=l.findIndex(O=>O._id===r);_>-1&&l.splice(_,1)}),s.setState({users:l}),a},g=async({active:o,current:a,size:l,name:r,role:_})=>{const O=await(0,u.W)(),F=s.getState("users"),R=l*(a-1);let M=[];if(o!=null?M=F.filter(f=>f.active==o):M=[...F],_!=null&&(M=M.filter(f=>f.role===_)),r){const f=new RegExp(r,"gi");M=M.filter(P=>P.name.toString().match(f))}const L=M.slice(R,R+l);return{...O,result:{current:a,size:l,total:M.length,list:L}}},C=async()=>{const o=await(0,u.W)(),a=s.getState("routers");return{...o,result:a}},p=async o=>{const a=await(0,u.W)(),l=s.getState("routers"),r={...o,_id:(0,e.gZm)()};return l.push(r),s.setState({routers:l}),{...a,result:r}},x=async o=>{const a=await(0,u.W)(),l=s.getState("routers");let r=l.find(_=>_._id===o._id);return r&&(r={...r,...o},s.setState({routers:l})),{...a,result:o}},B=async o=>{const a=await(0,u.W)(),l=s.getState("routers"),r=l.findIndex(_=>_._id===o._id);return r>-1&&(l.splice(r,1),s.setState({routers:l})),a},D=async()=>{const o=await(0,u.W)(),a=s.getState("authedRouter")||[];return{...o,result:a}},y=async o=>{const a=await(0,u.W)(),l=s.getState("authedRouter")||[],r=[...new Set([...l,...o?.authKeys??[]])];return s.setState({authedRouter:r}),{...a,result:r}}},17861:function(j,i,t){t.d(i,{W:function(){return u}});var e=t(60608);const u=async s=>(await(0,e.yy4)(),{code:200,message:"success\uFF01",result:{}}),n=(s,c=10)=>[...Array(c)].map((d,m)=>({id:uuidv4(),...s}))},91238:function(j,i,t){t.d(i,{AY:function(){return s},Dh:function(){return n},Q:function(){return u}});var e=t(72161);const u=e,n={github_client_id:"61721ef923095e006d18",github_oauth_url:"https://github.com/login/oauth/authorize"},s={appid:"wx7f4df123f88372a5",wechat_oauth_url:"https://open.weixin.qq.com/connect/oauth2/authorize",redirect_uri:"https://ihuxy.com/user/signin",response_type:"code",scope:"snsapi_base",state:"wechat"}}}]);