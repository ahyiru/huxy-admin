(self.webpackChunk=self.webpackChunk||[]).push([[393],{53289:function(j,i,t){var e=t(24246),u=t(96678);const n=({className:s,...c})=>{const d=["h-btn",...s?.split(" ")??[]].filter(Boolean).map(m=>u.Z[m]).join(" ");return(0,e.jsx)("button",{className:d,...c})};i.Z=n},48839:function(j,i,t){var e=t(24246),u=t(64973),n=t(74335);const s=({children:c,...d})=>(0,e.jsx)(n.mH,{...d,children:(0,e.jsx)(u.Z,{placement:"topLeft",title:c,children:c})});i.Z=s},83736:function(j,i,t){var e=t(24246),u=t(16937),n=t(12299),s=t(53289),c=t(33850);const d={width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},m={width:"100px"},E={width:"100%",paddingRight:"50px",fontSize:"1.6rem",fontWeight:500,textAlign:"center"},f={maxWidth:"500px"},h=({back:g,title:C,actions:p=[],backText:P="\u8FD4\u56DE"})=>(0,e.jsx)(u.Z,{style:{height:"4.4rem"},children:(0,e.jsxs)("div",{style:d,children:[(0,e.jsx)("div",{style:m,children:(0,e.jsxs)(s.Z,{onClick:A=>typeof g=="function"?g():history.back(),className:"sm link",children:[(0,e.jsx)(n.Z,{icon:"ico-left"}),(0,e.jsx)("span",{children:(0,e.jsx)(c.ZP,{keys:"main.components.back",children:P})})]})}),C&&(0,e.jsx)("div",{style:E,children:C}),p.length?(0,e.jsx)("div",{style:f,children:p.map(({text:A,icon:x,className:B,style:l,...a},o)=>(0,e.jsxs)(s.Z,{className:`sm ${B??""}`,style:{marginLeft:o?12:0,...l},...a,children:[(0,e.jsx)(n.Z,{icon:x}),(0,e.jsx)("span",{children:A})]},A))}):null]})});i.Z=h},16937:function(j,i,t){var e=t(24246),u=t(74335);const n=({style:s,children:c,...d})=>(0,e.jsx)(u.s_,{style:{background:"var(--panelBgColor)",...s},...d,children:c});i.Z=n},95727:function(j,i,t){t.d(i,{B:function(){return c}});var e=t(24246),u=t(48839);const n=()=>({render:d=>(0,e.jsx)(u.Z,{children:d})}),s=(d,m,E=n())=>d.map(f=>({...E,...f,...m?.find(({dataIndex:h})=>h===f.dataIndex)}));i.Z=s;const c=({index:d,style:m,item:E,isItemLoaded:f})=>{let h;return f(d)?h=E.name:h="Loading...",(0,e.jsx)("div",{style:{...m,borderBottom:"1px solid #333"},children:(0,e.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:h})})}},43671:function(j,i,t){t.r(i);var e=t(24246),u=t(88749),n=t(48535),s=t(1799),c=t(3196),d=t(56591),m=t(74335),E=t(71090),f=t(83736),h=t(18935),g=t(24599),C=t(16937),p=t(33850),P=t(38154);const{addUser:A,editUser:x,projectList:B}=P.apiList,l=a=>{const r=(0,p.kn)()("main.users.addFormText",{}),[_]=u.Z.useForm(),{getState:y}=a.history,{item:F,backState:v}=y()||{},O=async D=>{const M=F?x:A;D=F?{...F,...D}:D;const U=B.find(T=>T._id===D.projectId)?.name??"";try{const{code:T,message:W}=await M({...D,projectName:U});T===200&&(E.ywV.success(W),a.router.push("/playground/configList"))}catch(T){}},L=()=>{v?a.router.push(v):a.history.back()};return(0,e.jsx)("div",{children:(0,e.jsxs)(m.X2,{children:[(0,e.jsx)(m.JX,{children:(0,e.jsx)(f.Z,{back:L})}),(0,e.jsx)(m.JX,{children:(0,e.jsx)(C.Z,{children:(0,e.jsxs)(u.Z,{name:"addUser",onFinish:O,form:_,initialValues:F??{},...h.bK,style:{width:"100%",maxWidth:"600px"},autoComplete:"off",children:[(0,e.jsx)(u.Z.Item,{label:r.name,name:"name",rules:g.nameRule,children:(0,e.jsx)(n.default,{placeholder:r.name})}),(0,e.jsx)(u.Z.Item,{label:r.email,name:"email",rules:g.emailRule,children:(0,e.jsx)(n.default,{placeholder:r.email})}),(0,e.jsx)(u.Z.Item,{label:r.password,name:"password",children:(0,e.jsx)(n.default,{type:"password",placeholder:r.password,autoComplete:"new-password"})}),(0,e.jsx)(u.Z.Item,{label:r.role,name:"role",rules:g.roleRule,children:(0,e.jsx)(s.Z,{placeholder:r.role,style:{width:"160px"}})}),(0,e.jsx)(u.Z.Item,{label:r.avatar,name:"avatar",children:(0,e.jsx)(n.default,{placeholder:r.avatar})}),(0,e.jsx)(u.Z.Item,{label:r.projectId,name:"projectId",children:(0,e.jsx)(c.default,{placeholder:r.projectId,allowClear:!0,style:{width:"80%"},children:B.map(D=>(0,e.jsx)(c.default.Option,{value:D._id,children:D.name},D._id))})}),(0,e.jsxs)(u.Z.Item,{...h.FA,children:[(0,e.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:r.submit}),(0,e.jsx)(d.ZP,{style:{marginLeft:"12px"},onClick:()=>_.resetFields(),children:r.reset})]})]})})})]})})};i.default=l},26295:function(j,i,t){t.r(i);var e=t(24246),u=t(27378),n=t(88749),s=t(48535),c=t(56591),d=t(45479),m=t(42702),E=t(95648),f=t(47199),h=t(69640),g=t(74335),C=t(18124),p=t(71090),P=t(21242),A=t(33850),x=t(79442),B=t(93837);const{activeEmailFn:l,githubFn:a,wechatFn:o,loginFn:r,qrStatusFn:_}=x.default,{emailRule:y}=B.formRules,F={textAlign:"center",fontSize:"3.6rem"},v={position:"fixed",left:0,top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.8rem",background:"#fcfcfc",color:"#43a047",fontWeight:500,zIndex:3};let O=0;const L=D=>{const M=(0,A.kn)(),[U,T]=(0,u.useState)(!1),W=(0,u.useRef)(),S=(0,C.PQ)(),{state:z,code:K,token:b}=D.params??{},N=z?.indexOf("scan0")===0;(0,u.useEffect)(()=>{if(K){Q(K,z);return}if(b){X(b);return}(0,P.pt)()&&D.router.push("/")},[]);const $=I=>{W.current=I,O=0,S()},V=async I=>{if(!W.current)return;if(O>40){$(),p.ywV.error("\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"),O=0;return}const R=await _({status:I});if(R.status){if($(),R.status==="error"){p.ywV.error("\u767B\u5F55\u5931\u8D25\uFF01");return}p.ywV.success("\u767B\u5F55\u6210\u529F\uFF01"),p.tOc.set("token",R.status),(0,P.a0)()}else O++,await(0,p._vH)(1200),V(I)},Y=async I=>{const{wechat_oauth_url:R,...w}=B._Z,Z=`${R}${(0,p.nL5)({...w,state:I})}#wechat_redirect`;try{const k=await h.toDataURL(Z);$(k)}catch(k){console.error(k)}},J=async()=>{const I=`scan0${(0,p.k$y)().replaceAll("-","0")}`;await Y(I),V(I)},Q=async(I,R)=>{T(!0);const w=R?o:a;try{const{token:Z}=await w({code:I,state:R});Z?(p.tOc.set("token",Z),(0,P.a0)()):(T(!1),setTimeout(()=>WeixinJSBridge.call("closeWindow"),1e3))}catch{}T(!1)},X=async I=>{T(!0);try{const{code:R,token:w,message:Z}=await l({token:I});R===200&&(p.ywV.success(Z),p.tOc.set("token",w),(0,P.a0)())}catch{}T(!1)},H=async I=>{T(!0);try{const{code:R,token:w,message:Z}=await r(I);R===200&&(p.ywV.success(Z),p.tOc.set("token",w),(0,P.a0)())}catch{(0,P.a0)()}T(!1)},G=()=>{const{github_oauth_url:I,github_client_id:R}=B.githubConfigs;location.href=`${I}?client_id=${R}`},q=()=>{const{wechat_oauth_url:I,...R}=B._Z;location.href=`${I}${(0,p.nL5)(R)}#wechat_redirect`};return N?(0,e.jsx)("div",{style:v,children:U?"\u6B63\u5728\u767B\u5F55...":"\u767B\u5F55\u6210\u529F\uFF01"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.Z,{name:"login",initialValues:{},onFinish:H,autoComplete:"off",children:[(0,e.jsx)(n.Z.Item,{name:"email",rules:y,children:(0,e.jsx)(s.default,{prefix:(0,e.jsx)(d.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:M("login.email")})}),(0,e.jsx)(n.Z.Item,{name:"password",children:(0,e.jsx)(s.default.Password,{prefix:(0,e.jsx)(m.Z,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:M("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(n.Z.Item,{children:(0,e.jsx)(c.ZP,{block:!0,type:"primary",htmlType:"submit",children:M("login.login")})}),(0,e.jsx)(n.Z.Item,{children:(0,e.jsx)(c.ZP,{block:!0,onClick:()=>H({email:"test1@zys.com",password:"test1234"}),children:M("login.visitor")})})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{overflow:"hidden"},children:[(0,e.jsx)("span",{className:"link",style:{float:"right"},onClick:I=>D.router.push("/user/signup"),children:M("login.signup")}),(0,e.jsx)("span",{className:"link",style:{float:"left"},onClick:I=>D.router.push("/user/verifyEmail"),children:M("login.forgetPwd")})]}),(0,e.jsx)("div",{className:"split-line",style:{padding:"15px 0"},children:M("login.thirdParty")}),(0,e.jsxs)("div",{style:F,children:[(0,e.jsx)("span",{className:"link",children:(0,e.jsx)(E.Z,{onClick:()=>G()})}),(0,e.jsx)("span",{className:"link",style:{marginLeft:"3rem",color:"#8ae14d"},children:(0,e.jsx)(f.Z,{onClick:()=>(0,p.CLv)()?q():J()})})]}),(0,e.jsx)(g.zd,{open:W.current,close:I=>$(),children:W.current?(0,e.jsxs)("div",{style:{width:"85%",maxWidth:"35rem",textAlign:"center",background:"#333",padding:"15px 20px",color:"#fff",fontWeight:500},children:[(0,e.jsx)("h2",{style:{margin:0},children:"\u5FAE\u4FE1\u767B\u5F55"}),(0,e.jsx)("div",{style:{padding:"20px"},children:(0,e.jsx)("img",{width:"100%",src:W.current,alt:"qr"})}),(0,e.jsx)("p",{style:{margin:"0 20px",marginBottom:0,height:"32px",lineHeight:"32px",background:"#232323",borderRadius:"16px"},children:"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801\u767B\u5F55"})]}):(0,e.jsx)("div",{style:{color:"#43a047",fontWeight:500,fontSize:"3rem"},children:"\u767B\u5F55\u4E2D..."})})]}),U&&(0,e.jsx)(g.$j,{global:!0})]})};i.default=L},65679:function(j,i,t){t.r(i);var e=t(24246),u=t(27378),n=t(88749),s=t(63788),c=t(25384),d=t(56591),m=t(48535),E=t(8466),f=t(36212),h=t(45479),g=t(61872),C=t(16935),p=t(42702),P=t(71090),A=t(79442),x=t(24599),B=t(16937),l=t(81097),a=t(33850),o=t(18935);const r={padding:"10px 20px",width:"100%",maxWidth:"600px"},_=y=>{const[F,v]=(0,u.useState)(!1),O=(0,a.kn)(),L=O("main.users.profilePageText.profile",{}),D=O("main.users.profilePageText.upProfile",{}),M=l.xZ.getState(),[U]=n.Z.useForm(),T=async K=>{v(!0);const{code:b,message:N}=await A.default.upProfileFn(K);v(!1),b===200&&(P.ywV.success(N),window.location.reload())},W=o.Uy.find(K=>K.value===M.role)?.label??"\u666E\u901A\u7528\u6237",S=M.deadline?Math.floor((M.deadline-new Date)/864e5):0,z=[{key:"1",label:L.title,children:(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsx)("div",{style:r,children:(0,e.jsxs)(n.Z,{name:"profile",className:"sm-form-style",children:[(0,e.jsx)(n.Z.Item,{name:"name",label:L.name,children:(0,e.jsx)(s.Z.Text,{children:M.name})}),(0,e.jsx)(n.Z.Item,{name:"email",label:L.email,children:(0,e.jsx)(s.Z.Text,{children:M.email})}),(0,e.jsx)(n.Z.Item,{name:"active",label:L.active,children:(0,e.jsx)(s.Z.Text,{children:M.active?L.active_true:L.active_false})}),(0,e.jsx)(n.Z.Item,{name:"projectName",label:L.projectName,children:(0,e.jsx)(s.Z.Text,{children:M.projectName})}),(0,e.jsx)(n.Z.Item,{name:"role",label:L.role,children:(0,e.jsx)(s.Z.Text,{children:W})}),S?(0,e.jsx)(n.Z.Item,{name:"leftDate",label:"\u5305\u6708\u4F1A\u5458\u5269\u4F59\u65F6\u95F4",children:(0,e.jsxs)(s.Z.Text,{children:[S," \u5929"]})}):null,M.payCount?(0,e.jsx)(n.Z.Item,{name:"payCount",label:"\u5305\u6B21\u4F1A\u5458\u5269\u4F59\u6B21\u6570",children:(0,e.jsxs)(s.Z.Text,{children:[M.payCount," \u6B21"]})}):null]})}),(0,e.jsxs)(c.Z,{align:"center",style:{width:"140px"},children:[M.role===0?(0,e.jsx)(d.ZP,{block:!0,type:"primary",icon:(0,e.jsx)(f.Z,{}),size:"large",onClick:K=>y.router.push("/payer/count/member"),children:"\u5F00\u901A\u4F1A\u5458"}):null,M.role>0?(0,e.jsx)(d.ZP,{block:!0,type:"primary",icon:(0,e.jsx)(f.Z,{}),size:"large",onClick:K=>y.router.push("/payer/month/member"),children:"\u4F1A\u5458\u7EED\u8D39"}):null]})]})},{key:"2",label:D.title,children:(0,e.jsx)("div",{style:r,children:(0,e.jsxs)(n.Z,{name:"upProfile",className:"sm-form-style",form:U,autoComplete:"off",initialValues:M,onFinish:T,children:[(0,e.jsx)(n.Z.Item,{name:"name",rules:x.nameRule,children:(0,e.jsx)(m.default,{prefix:(0,e.jsx)(h.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:D.name})}),(0,e.jsx)(n.Z.Item,{name:"avatar",rules:x.urlRule,children:(0,e.jsx)(m.default,{prefix:(0,e.jsx)(g.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:"\u5934\u50CF"})}),(0,e.jsx)(n.Z.Item,{name:"email",rules:x.emailRule,children:(0,e.jsx)(m.default,{disabled:!0,prefix:(0,e.jsx)(C.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:D.email})}),(0,e.jsx)(n.Z.Item,{name:"password",rules:x.passwordRule,children:(0,e.jsx)(m.default.Password,{prefix:(0,e.jsx)(p.Z,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:D.password,autoComplete:"new-password"})}),(0,e.jsxs)(n.Z.Item,{children:[(0,e.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:D.submit}),(0,e.jsx)(d.ZP,{disabled:F,style:{marginLeft:"12px"},onClick:()=>U.setFieldsValue({name:"",password:""}),children:D.reset})]})]})})}];return(0,e.jsx)(B.Z,{children:(0,e.jsx)(E.Z,{type:"card",items:z})})};i.default=_},51833:function(j,i,t){t.r(i);var e=t(24246),u=t(27378),n=t(88749),s=t(48535),c=t(56591),d=t(42702),m=t(17277),E=t(71090),f=t(33850),h=t(21242),g=t(93837),C=t(79442);const{passwordRule:p,confirmRule:P}=g.formRules,A=x=>{const B=(0,f.kn)(),[l,a]=(0,u.useState)(!1),o=async r=>{a(!0);try{const _=x.params?.token,{code:y,token:F,message:v}=await C.default.setNewPwdFn({password:r.password,token:_});y===200&&(E.ywV.success(v),(0,h.a0)())}catch{}a(!1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.Z,{name:"setNewPwd",autoComplete:"off",onFinish:o,children:[(0,e.jsx)(n.Z.Item,{name:"password",rules:p,children:(0,e.jsx)(s.default.Password,{prefix:(0,e.jsx)(d.Z,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:B("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(n.Z.Item,{name:"confirm",rules:P,children:(0,e.jsx)(s.default.Password,{prefix:(0,e.jsx)(d.Z,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:B("login.confirmPwd"),autoComplete:"new-password"})}),(0,e.jsx)(n.Z.Item,{children:(0,e.jsx)(c.ZP,{block:!0,type:"primary",htmlType:"submit",disabled:l,children:B("login.resetPwd")})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(c.ZP,{onClick:r=>x.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(m.Z,{}),children:B("login.backLogin")})})})]})};i.default=A},67304:function(j,i,t){t.r(i);var e=t(24246),u=t(27378),n=t(88749),s=t(48535),c=t(56591),d=t(47045),m=t(45479),E=t(16935),f=t(42702),h=t(17277),g=t(71090),C=t(33850),p=t(21242),P=t(93837),A=t(79442);const{nameRule:x,emailRule:B,passwordRule:l,confirmRule:a}=P.formRules,o=r=>{const _=(0,C.kn)(),[y,F]=(0,u.useState)(!1),[v,O]=(0,u.useState)(!1),L=async D=>{O(!0);try{const{code:M,message:U}=await A.default.signupFn(D);M===200&&(g.ywV.success(U),F(!0))}catch{}O(!1)};return y?(0,e.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,e.jsx)(d.ZP,{status:"success",title:_("login.signup_msg"),subTitle:_("login.signup_sub_msg"),extra:(0,e.jsx)(c.ZP,{type:"primary",onClick:()=>(0,p.a0)(),children:_("login.backLogin")},"back")})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.Z,{name:"signup",autoComplete:"off",onFinish:L,children:[(0,e.jsx)(n.Z.Item,{name:"name",rules:x,children:(0,e.jsx)(s.default,{prefix:(0,e.jsx)(m.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:_("login.username")})}),(0,e.jsx)(n.Z.Item,{name:"email",rules:B,children:(0,e.jsx)(s.default,{prefix:(0,e.jsx)(E.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:_("login.email")})}),(0,e.jsx)(n.Z.Item,{name:"password",rules:l,children:(0,e.jsx)(s.default.Password,{prefix:(0,e.jsx)(f.Z,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:_("login.password"),autoComplete:"new-password"})}),(0,e.jsx)(n.Z.Item,{name:"confirm",rules:a,children:(0,e.jsx)(s.default.Password,{prefix:(0,e.jsx)(f.Z,{style:{marginRight:"7px",color:"#999"}}),type:"password",placeholder:_("login.confirmPwd"),autoComplete:"new-password"})}),(0,e.jsx)(n.Z.Item,{children:(0,e.jsx)(c.ZP,{block:!0,type:"primary",htmlType:"submit",disabled:v,children:_("login.signup")})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(c.ZP,{onClick:D=>r.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(h.Z,{}),children:_("login.backLogin")})})})]})};i.default=o},81694:function(j,i,t){t.r(i);var e=t(24246),u=t(27378),n=t(88749),s=t(48535),c=t(56591),d=t(47045),m=t(16935),E=t(17277),f=t(71090),h=t(33850),g=t(93837),C=t(79442);const{emailRule:p}=g.formRules,P=A=>{const x=(0,h.kn)(),[B,l]=(0,u.useState)(!1),[a,o]=(0,u.useState)(!1),r=async _=>{o(!0);try{const{code:y,message:F}=await C.default.verifyEmailFn(_);y===200&&(f.ywV.success(F),l(!0))}catch{}o(!1)};return B?(0,e.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,e.jsx)(d.ZP,{status:"success",title:x("login.verifyEmail_msg"),subTitle:x("login.verifyEmail_sub_msg"),extra:(0,e.jsx)(c.ZP,{type:"primary",onClick:()=>location.href="/",children:(0,e.jsx)(h.ZP,{keys:"login.backLogin"})},"back")})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.Z,{name:"verifyEmail",autoComplete:"off",onFinish:r,children:[(0,e.jsx)(n.Z.Item,{name:"email",rules:p,children:(0,e.jsx)(s.default,{prefix:(0,e.jsx)(m.Z,{style:{marginRight:"7px",color:"#999"}}),placeholder:x("login.email")})}),(0,e.jsx)(n.Z.Item,{children:(0,e.jsx)(c.ZP,{block:!0,type:"primary",htmlType:"submit",children:(0,e.jsx)(h.ZP,{keys:"login.confirmEmail"})})})]}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsx)(c.ZP,{onClick:_=>A.router.push("/user/signin"),type:"link",size:"small",icon:(0,e.jsx)(E.Z,{}),disabled:a,children:(0,e.jsx)(h.ZP,{keys:"login.backLogin"})})})})]})};i.default=P},96678:function(j,i){i.Z={"h-btn":"dvZYe",link:"RHxmY",default:"f4yr7",outlineDefault:"kJKrM",info:"ZakFV",outlineInfo:"Zd_vm",success:"C4ThU",outlineSuccess:"i4_gW",warn:"WqYCn",outlineWarn:"Yt9hk",danger:"aATLw",outlineDanger:"YAbKM",sm:"TYtKw",lg:"HxrRu",block:"ojXq7",right:"koEUi","h-btn-group":"qIbso"}},18935:function(j,i,t){t.d(i,{FA:function(){return E},QN:function(){return e},Uy:function(){return u},bK:function(){return m}});const e=[{type:"vip1",label:"\u57FA\u7840\u7248",price:29,period:3,count:800,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

800 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 3 \u4E2A\u6708\u3002`},{type:"vip2",label:"\u767D\u94F6\u7248",price:39,period:6,count:1500,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

1500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 6 \u4E2A\u6708\u3002`},{type:"vip3",label:"\u9EC4\u91D1\u7248",price:69,period:12,count:3e3,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

3000 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 12 \u4E2A\u6708\u3002`}],u=[{value:0,label:"\u666E\u901A\u7528\u6237",price:0,period:0,name:"general",description:"\u6BCF\u5929 2 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002"},{value:1,label:"\u57FA\u7840\u4F1A\u5458",price:19,period:1,name:"vip1",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 50 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:2,label:"\u767D\u94F6\u4F1A\u5458",price:29,period:1,name:"vip2",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 100 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:3,label:"\u9EC4\u91D1\u4F1A\u5458",price:39,period:1,name:"vip3",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 200 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:4,label:"\u94BB\u77F3\u4F1A\u5458",price:49,period:1,name:"vip4",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 320 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:5,label:"\u8D85\u7EA7\u7BA1\u7406\u5458",price:1e4,period:1e4,name:"vip5",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`}],n=[{value:1,label:"1 \u4E2A\u6708"},{value:3,label:"3 \u4E2A\u6708"},{value:6,label:"6 \u4E2A\u6708"},{value:12,label:"12 \u4E2A\u6708"},{value:24,label:"24 \u4E2A\u6708"}],s=[{value:"get",label:"get"},{value:"post",label:"post"}],c=[{value:"data",label:"data"},{value:"params",label:"params"},{value:"form",label:"form"},{value:"formData",label:"formData"}],d=[{value:0,label:"\u666E\u901A",color:"green"},{value:1,label:"\u91CD\u8981",color:"orange"},{value:2,label:"\u6838\u5FC3",color:"red"}],m={labelCol:{span:4},wrapperCol:{span:16}},E={wrapperCol:{offset:4,span:16}},f={sm:12,xs:12},h={rowKey:"name",pagination:!1,scroll:{x:!0,y:!0},size:"small"}},99468:function(j,i,t){t.d(i,{C1:function(){return u},ES:function(){return s},J0:function(){return n},Ni:function(){return m},h:function(){return e},lI:function(){return d},s9:function(){return c},zt:function(){return E}});const e={pattern:/.+/,message:"\u8BF7\u8F93\u5165!"},u={required:!0},n={pattern:/^[\u4E00-\u9FA5A-Za-z0-9_.-\s]{2,32}$/,message:"\u957F\u5EA6\u4E3A2-20\u4E0D\u542B\u7279\u6B8A\u5B57\u7B26!"},s={pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]{2,20}$/,message:"\u957F\u5EA6\u4E3A2-20\u4E0D\u542B\u7279\u6B8A\u5B57\u7B26!"},c={pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E!"},d={pattern:/^(?![a-z]+$)(?![A-Z]+$)(?![\d]+$)[0-9a-zA-Z!@#$_]{8,20}$/,message:"\u5BC6\u7801\u957F\u5EA6\u4E3A8-20\u4E2A\u5B57\u7B26\uFF0C\u5E76\u4E14\u81F3\u5C11\u5305\u542B\u6570\u5B57\u3001\u5927\u5C0F\u5199\u5B57\u6BCD\u4E2D\u7684\u4E24\u79CD\uFF0C\u4E0D\u542B\u9664 !@#$_ \u4EE5\u5916\u7684\u7279\u6B8A\u5B57\u7B26!"},m={pattern:/^https?:\/\/[^\s/?.#]+\.[^\s]+/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5\uFF01"},E={pattern:/^(\/[\w#?&=:.-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},f={pattern:/^https?:\/\/[^\s/?.#]+\.[^\s]+|^(\/[\w#?&=:.-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},h={pattern:/^\d+(?:\.\d+){2}$/,message:"\u7248\u672C\u53F7\u683C\u5F0F\u5FC5\u987B\u4E3AX.Y.Z\uFF01"},g={pattern:/^\/(\w+\/?)*$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},C={pattern:/^\/(\w+\/)*\w+\.\w+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},p={pattern:/^[a-zA-Z]:\\(?:\w+\\?)*$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"},P={pattern:/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u8DEF\u5F84\uFF01"}},24599:function(j,i,t){t.r(i),t.d(i,{checkVolid:function(){return p},confirmRule:function(){return E},customEmailRule:function(){return g},customNameRule:function(){return h},customPasswordRule:function(){return C},emailRule:function(){return c},nameRule:function(){return s},passwordRule:function(){return d},pathRule:function(){return f},roleRule:function(){return m},titleRule:function(){return u},urlRule:function(){return n}});var e=t(99468);const u=[e.C1,e.J0],n=[e.Ni],s=[e.C1,e.ES],c=[e.C1,e.s9],d=[e.C1,e.lI],m=[{type:"number",min:0,max:5,message:"\u53D6\u503C\u8303\u56F40-5!"}],E=[e.C1,({getFieldValue:P})=>({validator(A,x){return P("password")===x?Promise.resolve():Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!")}})],f=[e.C1,e.zt],h=[e.h,e.ES],g=[e.h,e.s9],C=[e.h,e.lI],p=(P,A)=>{for(let x=0,B=P.length;x<B;x++){const l=P[x];if(!l.pattern.test(A))return l.message}}},38154:function(j,i,t){t.d(i,{BU:function(){return g},IR:function(){return p},Pu:function(){return h},Rt:function(){return x},VW:function(){return P},apiList:function(){return f},eA:function(){return C},rf:function(){return B}});var e=t(24246),u=t(59447),n=t(25384),s=t(56591),c=t(71090),d=t(18935),m=t(29205),E=t(95727);const f=m,h=E.Z,g=E.B,C=[{key:1,value:"\u5DF2\u6FC0\u6D3B"},{key:0,value:"\u672A\u6FC0\u6D3B"}],p=[{type:"input",name:"name",label:"\u7528\u6237\u540D",props:{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0,style:{width:"120px"}}},{type:"select",name:"role",label:"\u7B49\u7EA7",props:{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0,style:{width:"100px"},options:d.Uy}}],P=(l,a)=>[{key:"add",type:"primary",label:"\u65B0\u589E",action:l.handleAdd},{key:"export",type:"default",label:"\u5BFC\u51FA",action:l.handleExport},{key:"handleDelete",type:"default",label:"\u6279\u91CF\u5220\u9664",action:l.handleDelete,disabled:a}],A=[{key:"handleCheck",type:"link",label:"\u8BBE\u7F6E"},{key:"handleEdit",type:"link",label:"\u7F16\u8F91"},{key:"handleDelete",type:"link",label:"\u5220\u9664"}],x=[{dataIndex:"name",title:"\u7528\u6237\u540D"},{dataIndex:"email",title:"\u90AE\u7BB1"},{dataIndex:"active",title:"\u72B6\u6001"},{dataIndex:"github",title:"\u7ED1\u5B9AGitHub"},{dataIndex:"role",title:"\u7B49\u7EA7"},{dataIndex:"updatetime",title:"\u66F4\u65B0\u65F6\u95F4"},{dataIndex:"updater",title:"\u66F4\u65B0\u4EBA"},{dataIndex:"action",title:"\u64CD\u4F5C",align:"center"}],B=l=>[{dataIndex:"name",render:(a,o)=>(0,e.jsx)("span",{className:"link",onClick:()=>l.handleCheck(o),children:a})},{dataIndex:"email",render:a=>a.replace(/\S+(@\S+)/,"*****$1")},{dataIndex:"active",render:a=>a?(0,e.jsx)(u.Z,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,e.jsx)(u.Z,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"github",render:a=>a?(0,e.jsx)(u.Z,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,e.jsx)(u.Z,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"role",render:(a,o)=>d.Uy.find(r=>r.value===a)?.label??"-"},{dataIndex:"updatetime",render:(a,o)=>{const r=a||o.createtime||o.signuptime||+new Date;return(0,c.mrB)(new Date(r))}},{dataIndex:"updater",render:(a,o)=>a||o.creator},{dataIndex:"action",render:(a,o)=>{const _=Object.keys(l).map(y=>({...A.find(F=>F.key===y),action:l[y]}));return(0,e.jsx)(n.Z,{children:_.map(({key:y,action:F,type:v,label:O})=>(0,e.jsx)(s.ZP,{type:v,size:"small",disabled:!1,danger:y==="handleDelete",onClick:()=>F(o),children:O},y))})}}]},61423:function(j,i,t){t.d(i,{Mo:function(){return m},rC:function(){return d}});var e=t(71090);const u={name:"demo",email:"demo@gmail.com",password:"123456",role:2,token:(0,e.k$y)(),projectName:"demo",projectId:"demo-1",description:"demo",active:1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy",avatar:"https://pic2.zhimg.com/a2e68681a006bd3e60fd5b22d51cb629_im.jpg",github:""},n={path:"",projectId:"demo-1",parentId:"",name:"",icon:"",redirect:"",hideMenu:!1,denied:!1,component:"",isRoot:!1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy"},s=[{parentId:"",path:"/",name:"\u9996\u9875",icon:"HomeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620635990643},{parentId:"",path:"/user",name:"\u767B\u5F55\u6CE8\u518C",icon:"TeamOutlined",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636017796},{parentId:"",path:"/404",name:"404",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636048186},{parentId:"/user",path:"/user/signin",name:"\u767B\u5F55",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636070080},{parentId:"/user",path:"/user/signup",name:"\u6CE8\u518C",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636092363},{parentId:"/user",path:"/user/verifyEmail",name:"\u9A8C\u8BC1\u90AE\u7BB1",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636109839},{parentId:"/user",path:"/user/setNewPwd",name:"\u91CD\u7F6E\u5BC6\u7801",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636127522},{parentId:"/",path:"/layout",name:"\u6846\u67B6\u914D\u7F6E",icon:"LayoutOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636154481,updater:"zys",updatetime:1624872133851},{parentId:"/",path:"/projects",name:"\u9879\u76EE\u7BA1\u7406",icon:"ConsoleSqlOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636177773},{parentId:"/",path:"/projects/add",name:"\u6DFB\u52A0\u9879\u76EE",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636207200},{parentId:"/",path:"/projects/edit/:id",name:"\u7F16\u8F91\u9879\u76EE",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636226823},{parentId:"/",path:"/projects/router/:id",name:"\u9879\u76EE\u8DEF\u7531\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636245820},{parentId:"/",path:"/users",name:"\u7528\u6237\u7BA1\u7406",icon:"UsergroupAddOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636267387},{parentId:"/",path:"/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636289415},{parentId:"/",path:"/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636307487},{parentId:"/",path:"/users/auth/:id",name:"\u8DEF\u7531\u6743\u9650\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636329861},{parentId:"/",path:"/profile",name:"\u4E2A\u4EBA\u4E2D\u5FC3",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636349501},{parentId:"/",path:"/dashboard",name:"\u4EEA\u8868\u76D8",icon:"DashboardOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636376269},{parentId:"/",path:"/pages",name:"\u9875\u9762\u8BBE\u8BA1",icon:"DesktopOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636398998},{parentId:"/",path:"/apis",name:"\u63A5\u53E3\u7BA1\u7406",icon:"ClusterOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636421223},{parentId:"/",path:"/docs",name:"\u6587\u6863\u7BA1\u7406",icon:"FileMarkdownOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636442351},{parentId:"/",path:"/i18n",name:"\u8BED\u8A00\u7BA1\u7406",icon:"GlobalOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636467249},{parentId:"/",path:"/apis/add",name:"\u6DFB\u52A0\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690561030},{parentId:"/",path:"/apis/edit/:id",name:"\u7F16\u8F91\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690599153},{parentId:"/",path:"/apis/test/:id",name:"\u63A5\u53E3\u6D4B\u8BD5",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690623384},{parentId:"/",path:"/suspense",name:"suspense",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690670034},{parentId:"/",path:"/canvas",name:"\u56FE\u5F62\u7ED8\u5236",icon:"AreaChartOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690702896},{parentId:"/",path:"/editor",name:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",icon:"EditOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690737041},{parentId:"/",path:"/low-code",name:"\u4F4E\u4EE3\u7801",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882549254},{parentId:"/low-code",path:"/low-code/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882672292},{parentId:"/low-code",path:"/low-code/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882700289},{parentId:"/low-code",path:"/low-code/users",name:"\u4E1A\u52A1\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882742565},{parentId:"/low-code",path:"/low-code/ui",name:"UI\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882785052},{parentId:"/low-code",path:"/low-code/dom",name:"\u539F\u751Fdom",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882800008}],d=((E,f=10)=>[...Array(f)].map((h,g)=>({...E,_id:(0,e.k$y)(),name:`${E.name}-${g+1}`,email:`${E.name}${g+1}@gmail.com`,role:(0,e.hd2)(5),active:(0,e.yZP)()})))(u,500),m=s.map(E=>({...n,...E,_id:(0,e.k$y)()}))},29205:function(j,i,t){t.r(i),t.d(i,{addRouter:function(){return p},addUser:function(){return E},allUser:function(){return g},deleteRouter:function(){return A},deleteUser:function(){return h},editRouter:function(){return P},editUser:function(){return f},getAuthedRouter:function(){return x},getRouter:function(){return C},login:function(){return d},logout:function(){return m},projectList:function(){return c},setAuthedRouter:function(){return B}});var e=t(71090),u=t(79835),n=t(61423);const s=(0,e.MTn)();s.setState({users:n.rC,routers:n.Mo});const c=[{_id:(0,e.k$y)(),name:"demo1"},{_id:(0,e.k$y)(),name:"demo2"}],d=async l=>{const a=await(0,u.e)(),r=s.getState("users").find(_=>l.name===_.name&&l.password===_.password);return{...a,result:r}},m=async l=>({...await(0,u.e)(),result:!0}),E=async l=>{const a=await(0,u.e)(),o={...l,_id:(0,e.k$y)()},r=s.getState("users");return r.push(o),s.setState({users:r}),{...a,result:o}},f=async l=>{const a=await(0,u.e)(),o=s.getState("users");let r=o.find(_=>_._id===l._id);return r&&(r={...r,...l},s.setState({users:o})),{...a,result:l}},h=async({ids:l})=>{const a=await(0,u.e)(),o=s.getState("users");return(l||[]).map(r=>{const _=o.findIndex(y=>y._id===r);_>-1&&o.splice(_,1)}),s.setState({users:o}),a},g=async({active:l,current:a,size:o,name:r,role:_})=>{const y=await(0,u.e)(),F=s.getState("users"),v=o*(a-1);let O=[];if(l!=null?O=F.filter(D=>D.active==l):O=[...F],_!=null&&(O=O.filter(D=>D.role===_)),r){const D=new RegExp(r,"gi");O=O.filter(M=>M.name.toString().match(D))}const L=O.slice(v,v+o);return{...y,result:{current:a,size:o,total:O.length,list:L}}},C=async()=>{const l=await(0,u.e)(),a=s.getState("routers");return{...l,result:a}},p=async l=>{const a=await(0,u.e)(),o=s.getState("routers"),r={...l,_id:(0,e.k$y)()};return o.push(r),s.setState({routers:o}),{...a,result:r}},P=async l=>{const a=await(0,u.e)(),o=s.getState("routers");let r=o.find(_=>_._id===l._id);return r&&(r={...r,...l},s.setState({routers:o})),{...a,result:l}},A=async l=>{const a=await(0,u.e)(),o=s.getState("routers"),r=o.findIndex(_=>_._id===l._id);return r>-1&&(o.splice(r,1),s.setState({routers:o})),a},x=async()=>{const l=await(0,u.e)(),a=s.getState("authedRouter")||[];return{...l,result:a}},B=async l=>{const a=await(0,u.e)(),o=s.getState("authedRouter")||[],r=[...new Set([...o,...l?.authKeys??[]])];return s.setState({authedRouter:r}),{...a,result:r}}},79835:function(j,i,t){t.d(i,{e:function(){return u}});var e=t(71090);const u=async s=>(await(0,e._vH)(),{code:200,message:"success\uFF01",result:{}}),n=(s,c=10)=>[...Array(c)].map((d,m)=>({id:uuidv4(),...s}))},93837:function(j,i,t){t.d(i,{_Z:function(){return s},formRules:function(){return u},githubConfigs:function(){return n}});var e=t(24599);const u=e,n={github_client_id:"61721ef923095e006d18",github_oauth_url:"https://github.com/login/oauth/authorize"},s={appid:"wx7f4df123f88372a5",wechat_oauth_url:"https://open.weixin.qq.com/connect/oauth2/authorize",redirect_uri:"https://ihuxy.com/user/signin",response_type:"code",scope:"snsapi_base",state:"wechat"}}}]);
