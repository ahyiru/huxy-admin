(self.webpackChunk=self.webpackChunk||[]).push([[552],{6796:function(s,a,e){e.r(a),e.d(a,{default:function(){return p}});var u=e(4246),i=e(4335),l=e(1090),t={};const n=["plus","plus-circle","minus","close","close-circle","close-square","close-left","close-right","check","checked","left","right","dleft","dright","refresh","stop","time","history","loop","arrow-left","arrow-up","arrow-right","arrow-down","left-right","up-down","upload","download","waiting","wait","block","square","star","solid-start","circle-star","snow","radar","flag","solid-flag","heart","music","sun","knot","male","female","dmale","dfemale","polygon","forward","table","grid","quad","circle-left","circle-right","circle-bottom","circle-top","solid-box","box","caret-left","caret-right","round","solid-round","layout","circle-outer","border-outer"];var p=B=>{const v=c=>{(0,l.vQq)(c),l.ywV.success("\u62F7\u8D1D\u6210\u529F\uFF01")};return(0,u.jsx)("div",{className:"page icon-list",children:(0,u.jsx)(i.X2,{gutter:12,children:n.map((c,R)=>(0,u.jsx)(i.JX,{span:3,sm:4,children:(0,u.jsxs)("div",{className:"ilist",onClick:()=>v(c),children:[(0,u.jsx)("span",{className:`ico-${c}`}),(0,u.jsx)("span",{className:"icon-name",children:c})]})},c))})})}},3328:function(s,a,e){e.r(a),e.d(a,{default:function(){return p}});var u=e(4246),i=e(3586),l=e(5330),t=e.n(l),n={page:"GiaIi","login-panel":"Pc0MF",title:"H813L",logo:"kGu0x",content:"j43db",copyright:"GeIAo",copy:"NcosX",right:"urquE",active:"niHpq"},p=B=>(0,u.jsxs)("div",{className:n.page,children:[(0,u.jsxs)("div",{className:n["login-panel"],children:[(0,u.jsxs)("div",{className:n.title,children:[(0,u.jsx)("div",{className:n.logo,children:(0,u.jsx)("img",{src:t(),alt:"logo"})}),(0,u.jsx)("h2",{children:(0,u.jsx)(i.ZP,{keys:"title",children:"Dashboard"})})]}),(0,u.jsx)("div",{className:n.content,children:B.children})]}),(0,u.jsxs)("div",{className:n.copyright,children:[(0,u.jsx)("a",{className:`${n.copy} link`,href:"https://ihuxy.com",children:"\xA92022 ihuxy"}),(0,u.jsx)("a",{className:`${n.right} link`,href:"https://beian.miit.gov.cn/",children:"\u4EACICP\u590715005899\u53F7-2"})]})]})},8763:function(s,a,e){e.r(a);var u=e(4246),i=e(7378),l=e(1090),t=e(3586),n=e(338),A=e(7689),p=e(2399),B=e(5211),v=e(8562);const{customNameRule:c,customEmailRule:R,customPasswordRule:I,confirmRule:J,checkVolid:D}=B.formRules,d={position:"relative",paddingBottom:"25px"},F={position:"absolute",color:"var(--red2)",top:"35px",left:0},y="\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!",M=S=>{const r=(0,t.kn)(),[E,L]=(0,i.useState)({value:"",message:""}),[V,Q]=(0,i.useState)({value:"",message:""}),[C,K]=(0,i.useState)({value:"",message:""}),[m,f]=(0,i.useState)({value:"",message:""}),[O,U]=(0,i.useState)(!1),W=async o=>{const{code:g,message:k}=await v.default.signupFn(o);g===200&&(l.ywV.success(k),U(!0))},x=o=>{const g=D(c,o);L({value:o,message:g})},P=o=>{const g=D(R,o);Q({value:o,message:g})},w=(o,g=!0)=>{const k=D(I,o);K({value:o,message:k});const h=m.value;g&&h&&f(h!==o?{value:h,message:y}:{value:h,message:""})},b=o=>{const g=o?o===C.value?"":y:"";f({value:o,message:g})},T=E.message||V.message||C.message||m.message,N=!E.value||!V.value||!C.value||!m.value;return O?(0,u.jsx)("div",{style:{background:"#ccc",borderRadius:"4px"},children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:r("login.signup_msg")}),(0,u.jsx)("h4",{children:r("login.signup_sub_msg")}),(0,u.jsx)(A.Z,{className:"info",onClick:()=>(0,p.a0)(),children:r("login.backLogin")})]})}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{name:"signup",autoComplete:"off",children:[(0,u.jsxs)("div",{style:d,children:[(0,u.jsx)(n.Z,{value:E.value,placeholder:r("login.username"),onChange:o=>x(o.target.value)}),E.message?(0,u.jsx)("span",{style:F,children:E.message}):null]}),(0,u.jsxs)("div",{style:d,children:[(0,u.jsx)(n.Z,{value:V.value,placeholder:r("login.email"),onChange:o=>P(o.target.value)}),V.message?(0,u.jsx)("span",{style:F,children:V.message}):null]}),(0,u.jsxs)("div",{style:d,children:[(0,u.jsx)(n.Z,{type:"password",value:C.value,onChange:o=>w(o.target.value),placeholder:r("login.password"),autoComplete:"new-password"}),C.message?(0,u.jsx)("span",{style:F,children:C.message}):null]}),(0,u.jsxs)("div",{style:d,children:[(0,u.jsx)(n.Z,{type:"password",value:m.value,onChange:o=>b(o.target.value),placeholder:r("login.confirmPwd"),autoComplete:"new-password"}),m.message?(0,u.jsx)("span",{style:F,children:m.message}):null]}),(0,u.jsx)("div",{style:d,children:(0,u.jsx)(A.Z,{disabled:T||N,type:"button",className:"block info",onClick:o=>W({name:E.value,email:V.value,password:C.value}),children:r("login.signup")})})]}),(0,u.jsx)("div",{children:(0,u.jsx)("div",{style:{textAlign:"center"},children:(0,u.jsxs)("span",{className:"link",onClick:o=>S.router.push("/user/signin"),children:[(0,u.jsx)("span",{className:"ico-left",style:{paddingRight:4}}),(0,u.jsx)("span",{style:{verticalAlign:"bottom"},children:r("login.backLogin")})]})})})]})};a.default=M},5330:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAMAAADsrvZaAAACQ1BMVEUAAAAYc5NWwuilyD5SvepSvesRaqmnuzQhp94ikJIhkJMMY24hqN8Raailxz8MYm5Mueilxz1KuegRaadSvepSvepRvupKuehSvetSvetSvetPvOpSvetSvetSvetSvetSvepSveqmyD5SveoRaakRaqlSvetSvetSveqlyD2lxz1RvepSvepSveulxz5SvepSvetSveqlyD4RaqlSvepSveqlxz5SvepSveohp95SvetSvusUbaYbcqEhkJKlxz6lyD6lyD2lxz4RaqkRaaKlxz4Sa6pSveuixUMQaqmlyD4RaakWa6imxz4UbKKlxz4Saqmlxz4RaaVSveoSaqoSa6oRaaQRaqkRaqkqp9cPaaOlxz5SveoRaamlyD4rpc+lxz4gp94kqN4hp94hp90LY3ERaqmlxz4jp9wunrImp9ggp98tl543mZogp94vlpggp98hp94gp94MZHEMY3EMZHgMZXY4naYynrIxocAhp98QbYIunKwznbY7oa4MZHRSveqlxz4ikJIhp94RaqkMY20QaahYyvsScbUlnJ5TwvFTv+0ktPBVxPOy10MNa3ZWxvVXyPgSb7IpkpGx1UISba4fkJKv00JWx/cjsu2t0UGrzkCmyT4iquMBjJapzD8MZXAfqOIfj46qyjIir+moyTcNaXMkj4oLYmgJXF8ireaawE8vnKkql5gtp9Qtm6Eoos0SjpQMZXwvob8ilpZBl4uBsmpVnoSNuV8OaJ5lpX10rHUek8IZibESd5IOZo8WgKKtiGgiAAAAgHRSTlMABAX7+vv8BPv6evp6+Xp6FP0MevXuKhzYvzMi46N7Qc1sQIR42Iyymia9XpQ668dNqhLv6LdbWEjsc2UzGfzilobUvinKhVIL5KFpCxwSr19PR9KwUj3JpSog9N2QZkUyyTbZUrabcWL9cbr+tpXkrqOJ69NXlYC5noH+59FgaNs2qnIAACBQSURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYPbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhb06NgEAhAEgGLKKoJVYCe4/meAGkvau+BUeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAmnzJAIC/fZy+12gzwkQue3eQkzoUxWH8cnPP3BCo4EPFmKiJGjTRaHQBLsDpW8yZ3aRNk3bW5T5BKvBosUVHvd9v4gpO/lT4UmCTNdEs9XmR+/jxkAsBNvTMnRYizjlRPzziQoANkcZOP7ns4cAAWDPLnZacPzYAStZc56Jr0lM+ZAFf+g+xrpFsagCUA3Lhna4Tf8aEAEuR/i8e8pwOLD3mopucv2JCgA/WvBWiWxK+DAHm7CjdPhApxgaANSfe6Tbnr5kQwPwZJFolnvQNELx777SK8xdMCALXM8+p1pHIAIGbZk6rSX5pgJBZc+ad1pHsjQ9ZCNrBMNFako64DwTMmivvtJ7zJ0wIgmXNbaw7JYNDAwRrVv2ETjoFzDMp77QC6RTwoT+JRbeRTgFlJlWBdAr4EGkF0imgMpMqVaRTPQOEpcyktpBOAWUm1YQjnUJw6jIpJZ0C6jMp0ilgRyZFOgUYu8ik2iCdQlDeM6fNiSedQjjmmZRoG5Ld8WUIglGTSZFOATsyKdIpoDaTIp0CFmaF0wqkU0CZSbWXnvKcjgAsMqn2HOkUArAjkyKdAnZmUqRTCN4ik2qGt04hME0zqfp0CuiyJpkU6RQC1TCTIp1CoBaZ1P6EdAqd1iyTIp1CiKw5TbUp0imEZ5qJNkI6heC0yqRIpxCcg2GsTZFOITDtMinSKYSlzKTaI51CEMaF6H5Ip9B1ZSa1H946ha7rT2L9CdIpdFiZSf0A6RQ6LNLflJBOoVsu04H+AtIpdJA1Tz7PYhVx+jO8dQqdFL1ezB6S3BexOie6P9IpdNXB0evNeBh7/xtb4nLSKXSItcsruX29mpVXsteWkE6ho2zPlFdydjWdX0maqBPRVkin0GmrLXk5ng5T77NExWkrpFPotK8tOTx9OX4fpIstafn0LjnpFDrN2tWVjJZXIqJNSXHHhyx03NeW/Hk+uX8fZPMrke+2hHQKYbFrVzIaZN9tCekUwrPakrvzy5ErfB5rzZaQTiFUdvnn40oe/8r8ShLZ3hLSKQSsV15J9Hb+ONF8viWbU0I6heD1zEI/evq8kmL9ByqkU8DqH8H9o6eL8UT91pY40imEbnUl1zfjh8Qvt4S3TuEfe3fX0kYQhQF4zMxh74qKtUatRoWqNX7iF3phKxSLIKX0siLe9W/MXi24pCQQyBIF/2rdzY5rm13txMlkk7zPD/DKw2T2vGcOpFTJcXlTVYmgcHQKDy0CxFWSBOdbkWBfConRKYDM4Hzg4Z4OfalQYLr0q2R+YWXqjAH0p5QiMf/HcU2HfnS4Pp6ESLqlUMAFBPrQCJuv+bPFD2vTcZXgHxngqVJF3AReVCUHk6gSgH+2SQkZdSpual4gZ/eWUCUAKdukSBDJm8AL5OXe0tlkAVUCQ699mxQJkpWaV6XL5aWtGVQJDLMCW/dlOxJCRlUippbntmYYqgSGVTEQMgMJ8iteWCXbc4eoEhg+L2+TIiLpV2pe5aFKjg7foUpgqIzP3pB8EQkhw7OkMvHj/dF8XCUIHsKg09omRaSqpPRQJaM4SmDwTUod6iypet7N29L7hXVUCQy2vZqQ+ohUlWyuoEpgUBXYWZVkp0jQY5Uco0pgABWmKiRfRQgRtt49/+1meW06rpIRVAkMgAKbM7PvmVSV7BbLiATDwJiZ8KUxQlBUJXIXwXkYDNsaB4jWL66anN37cPAYdsRTJvBajsMsK7D5itSgeZbUwiqJIsFoKoIZtmukVBWyWyiukoAulxGch1fWxcXi/v61vfpQY1Iku0yEYceoSsJIMM4S6Mjq+c9ms3l/8saxeYiMvvWlDeosqU60IsH4Egx6rtz6/Rjn7u3v01VLFaLGpOxphR1VlSDsCP/JYb9+3/Ex9wHnjY0LZoEak7KNVJWEkeBDLJyClzls8d7lbow3vjBL1JiUfVGMSwXn8Y4cvOBLk7uPeP2XlR9ZBbZWE7J3xGNwHlun4BkOe1PnbmLs7ucFs0CNSfUWkcBr1vCsVX435j7BG9+6foSoMak8wNYpeNa3Bnf/wpvfLVTIpMwLbJ2CTA7bj+sjwW9PHdZ1y7Xe/8BqEV4ZRwhk2Dm55+4/eP1z9hGSgzEp4/xpBpDCYZ/q3G1z566yLHkZkzJIBEUGkN4CGXPb8eZHli5nY1KGiOoBfmRBVgskBW/sp//IyuOY1KuQCHvr3gTu6ZDRAknD7zd2WBe9z8UBQkR+NDSyW1yZZAApLRA3Ha9/aj9Ccj8mpXFuUPTib0Dh2OH0OANI8bHB3Sz3i6pCzCv18BOWiphUxVQ4RhXXBiZyIb0FkoU3tUKL+tuk7Ete0Zr4sT2HrSPwgp2N9haIhdCi2iZlFUVrq+LXSufxPjx01gJ5NrTYn2NSavFhzd9tvb6IZ07gf6dAMqnQonkFNu1LS9RakUBGC6ZHcW6AhtP2FoiV0GLRQggrmRwUl1iYCyZbIAl+e/KVKf0zJpVMQk3hKg6dcdQUSBvt0KL+mJTsGhIivopHE+d4vQTMtECyXZutkJHujEmp7erxIgR8poIutUCyQ4s5HpMSrZ3qgT9bLB9Pj+I9HzDcAsnGG1dmj5A9ozd0IhF/prrcC59zx28qsNAC0Qgtao9JBWS0K64SI/hMBUZbILdpF/Ts0GKuxqRIEKl90OETieozFc4NsNYCSYzdLjInN2NSJJLEyBGu4pCw0gLJDi32fEyK4u1RUWJkYR1dcdBgYAokE6+/YU5vx6SIog0GtVZiBLtsQZ/5FkgSWuSrhsek9BMjQSsxgs9UoMFYC8RSaLFUJd2ueDXeVrCF/VCgwXQLRCO0aGObVPSOQjW+ih/OIKAO1jjsXOOGbii0qMakNAab/FZiBF1x0Ga+BaIbWjQ/JqXaG/EbI+VksGkE5wbYdHqrdYDohxb1x6RUYkS9MYKuOGiw0AKxEVos1kTGuRGvRENiBHrN0WiB6IYW9cekBLU+U1XwxgjkhUYLRCO0qD0mRSSevDGCwSbIhaQFoo/Xz5ljYEyKHj9T7RZXjpEYgTzZ2Wh/y91KaHHyr8EmOVss440RyBvNFkj72inWseXKRPSZqkqXy2FiBO0NyB2NFojZ0OIIO/MCvDECuafRAjEaWhwvTT0kRlAbkGcO+6zxA8toaHEcg02Qf2kPYVkILaI2oD+ktkD0Q4sAA8hhVxn1oR9aHBI484ZK6hSIvrvroagQVRxYzTYkOm2BpIUWB9sf9s6st2kgisLjiW2eiojUBgilLAUKZSsUKGJR2fd9FxTEE/wNV4rkyFZQXLVKVCr1r+Kxc2MHJxAnk9Rzfb/HPOTt6HrmnHOHc6ivlK+f2T+1QF5NHhjCAkmGFtGOkLY29p49cvL8lOvZNXsfI3KBsEBkUBShRXy0tXHg6rWDhycd2647IlE5ac/QCMHPcBZIMrSICtAGP7Awc2HfpKimuEHxN8Cd3MsI9JwqbsmZH4VCYXX9NUNC+yheWpq9vE+v217NDVoqEbp9kBHoAQtkKHxxbG2uNwrLu5nycA4mf/n0if3TVtPXRri7MYFziD6ycCPBAimG4tgs3L915RRTnPY11Vn/muqSa9tNJ2ypdEWvH2YEbqAFMrA4itu+OL7cv/VacXFE11SH/KP4VKgNHaTRA8M+QiMEM2CBDCyOxvrvc/O3Xz8P/03RO16uwVH86syFt+E1FRw3/o3hTO1hBFoGtkDEebwljqMqi4PD3OClh7NzwTVVzQ2WqfSJbp9htJsLL7vAAkkpjt+N9e3l+d1HLyotDjiKL524PG00U2oDcMv0kYUVsEDSXVb54thafvlTYXFwLX4Un7Y823PgmiotRnM/I3CyCyyQFOJYb6zeefnz+yN1xQHaOCQSI8FRHMbGYBjeEo0QrMxvFtJMjkbhzpNv33cpKg6tfU0lEiNTraM4zI3BcaYp1osSsEDS2ByBKtQLJCYSI6E2DEsGuj1LIwQlYIH0Y3OAB7hLscnBNRYlRuZW9Lo4ioM2JOHqJUagI7BAUNscMDf2QGIkTFNZstHtOUZgAyyQ3jbHprri4PHEyPlLrmc34ZpqFBj1BTJD0NHLAimqbXPEEiNHxFHcg2uqEWLUqDqFDbBAunmAjW1hc6h3k8t5R2KkBsUmwxo1OlWnkOFbIKtbXW9yV5dffvv+SLXLqrYrDokRKDaNBapOISRugRRDD1BJmyMqb5ROn7i8YkGxybDGB1WnsBG3QMDmuCNucpWaHJ07RqJik7UT1EZYndLordKxAhaI0EZxq21zqDQ5YjtGIDECx42dYKTVKY3e8x0jYIE0CqEH+PuLaje5XPsrMQLFph1FfnUqksfn909f3WN0kTwOwALZLqjY5ui6Y0QUm7LAaKpTGnvxaWKtuma++0wKGRuPzv3aOqeWzZHYMQKJkcwwkuqUxj4/rlbMCbNSXbxBChkXP+dVanP8lRjxxDVVBr6pkrhlJp/jVV8dFV8ja4+fMWI8qGJzaFrHjhHLtr0sHDd6oMuvTmnsQXWiEjJR/UEjZAwoclnVkRg53zqKG1nVRojhnWZcrj7umRWzEmKaGx9IIURMG9GOkYwdN3pgyK9O3V0zK4C59pER+YZr8R0jel0ZbQikV6c09qpqViLM6jEaIXkllAbsGFnRgx0jhjraaGGUpN7wLm50CKQyQXe9eYTzWGLkUnhNlfHjRlckV6c09glO6O0R8o4Ekiu0jh0jrVW4unJzAwirU1yWPt7A/IgdQ96TQnJC7JoqvmMkG674gMitTmnHkwLZOE76QA/XEomRmqv03IiA6pQcCySuDzBDHtAIwUxHsQl2jBgopBEA1SmpFkiE+OUeKQQlXEu8SuOodIXbH1CdkmeBJE4hdxmBFdgxEhSbVD9u9ACqU3ItkAiz+opGCEL8xMhJOIobqL6pOpFVnXqxWOkhkI3FF4zABWczVqANhJ9UCaA6Jc0CASi0iJeS5RhZKTaNHFGdkmCBJAYIhRbxMuflRRwCUZ3i8iyQ5Dn9OCMQwdlCHf+HVQduWVILJIJCi4jZV8uXQKA6JdMCodAiVjibsfP0gSXQoTolzQKh0CJe9k66Vs4YpjqlsadJC4RCi4g5mLsBMkx1SmM3u1ggydAibXDAwoKX3T0LI8QoSbRAKLSImDOTho0vk/g/DHtuUAvkPwcQCC3Smiws+CVaUTAXexAzv5hEFvDqlBwLhEKL+OEH/E26Ysu06NPiDmMJoDolxQKh0CJ2Yu8UiDc88jFMoDqV0gKpJE/oFFrMBZzHh8nhYJg4lnqLS/oEqlOSLZAIk0KLGIm9P+v3plaMuu2Jx9IwBhlFdYpLsEAotJg7omfTRCv9LdphAtWpoSwQCi3mldgrUeIFteB1QVTDBKpTQ1kgFFrMN7E3OB+2NvE2HSx9XB2qU0NYIBRaJEKVQDMXnuN0LV3522CoTg1ugVBokegyTJaCx87VHyZQnRrYAqHQItFjOxDbG24jVXyYuGXG+9THjS4WCIUWiX9fBreHSV3JYaJ7+6VaIMnQ4lcaIXmFazFn8WS4T8vJzqu2/SpkifFBLRAKLRKpYiqzfkxFsWEC1amBLBAKLRIphwnEVLzAWVShZwLVKbkWSIRZfUojhOiSeZzW62o8mWAc6M8CSQwQCi0SQw2ThZnwYZFmpmMqUJ1KbYFQaJGQMEyCmIrRzPIwgVenJFkgyRnyhhRCdEHT2s6iyDxmdZhAdSqlBUKhRUJ+5lG8ASoK8JkaJrp9jfG0FgiFFokRZR5nReYxU8+BQnUqhQVCoUVCPlyLxVQyNEx0+6BkCyQZWiSItMOkHGUedzrM5UB1qrsFYlaGwqTQIjGgTHgr8+hB5tEaP1CdStECSX2R9ZhCi4S0YTL+WaLb1xnv3wKh0CIxNjjnidVc4x8mzh/2zuyniSgK422ROu5WE40xUWP0QR+MW0wwUjc0rrhEXKO47/u+aztiihgXllYoWAHFqEUkgrv/m3emHDrt7WzlXmc7vyff9fM7537fnC4ebzwCwdIiZ4b7EM2aSubOY93/MxP50yk/wwiEDkN2+RBzKkGZaJzmmr8Uair/x0xUf3VqF72BYGmRM5uXHFyIKjFUUyGnueTOYx33398tfTmFbQRClxbLUSHG2PIsNG/NhrHb5qwDmaBONJJFReeRn5nAp1PsIhB6T9+NAjG0f2xrKYmkWhoTLSXL5644MHMzqsRo5/EhVzOBT6d0IhAsLXJm3fJkSaREojVJZJLct2rLSjJzoUyMnuaC09qMZUJ/OuX3VcECwkYgWFo0YiArG0siA4SISiKpZKKxpXVg5sLVRE8mcJrrBfsf/akbNolpBELv6RPRQnT1cbA1AmRVIs1cRCYwc6GbGDnNtSB7TYWFTODTKXYRCB2GBCtQIXqsIRtIAUK5Mxe+c+nLBE5zwZ3HoaoEfnWKXQRChyFYWtQzkBMwYBVENpNWeebCdy4zNRUWZgKfTpmJQPDSImM272sNRfQYnLmSAzMXZou6Mpk6HU5zFW8m8OmUegSCpUXebEmoGwg9c4WkmasR37m0CfiVNRViJi+KNRP4dEo1AsHSIkcgAgFMyATfuQyZCXWay/wzF/l0CgSyg97QsbTIE4hAioB65xqOZmLATMidR/kx2MSnvfDplByBUAaCpUWOQARSLPDOlWhsTOHMZdhMpsHPkRo0E/h0alOBCARLi7yACCQVGTIheOdK4MylSSCvpgJmotegL5U+nfL79rMfsGDIwtKiVgTChBA9c6FMCuMPUKe5tM1E/nSqYASCpUWOQATCEnjnSuA7lzkzKX2lVVMhn05BBMKFIJYWdSIQxiqBd64EZotFnOYqJVAeMnUjpwELSouoj6FEIPjORcHeTOA0VwEzKX0xYz29oWNpkSMQgXAm06FP0X0ugp8M44jKz5ESM3mhMJO6P48pfWBpsSDWRyCmgQ69cuYKjAeZ4F+LiplA55GYSd3nnwX1gaVFHoCBrDC6oTN950o2yjPXubs3b508PBnNRPOaCjET+ZrKk9jjoMwjgINCtqKF5OhjZipiBbJMOn/0NnT3pNOn7t06fXTPBDQTFZVATeXemKZYrL6+6VEwTydYWszHhhGIeUKR/tcN4Q5CX206nc6YCapEQybly7au3bF6tqyTJvKvGWSCpUUlto5AzND5+3VDPCoRHkFUIpvJXWIm1WAmfpQJpRLCpr07N+7fMXvRo/pYjLmdBINYWlQwByIQC3j3qTeqIBweIcuktid9lpjJ/cO4vyuh/svwS3aye9d6pUzw0qKEYyIQPYF8BwMBMmYSJiNXd21PT8ZMAgNehzIprJPKiqpZx3etDzYNyGRMkIClRedEIKp0fnvdEFVBNpN4H1HJ2Qs3b9zfM2gm+DeXxS8BU1fF9o37V89e1FSvWE6wtOicCKTQgEXbBy0T2UyISu6du1E9OYCbiYpO4I97d25dm7+cYGnRMRFIDp2/qAFLw0yITM6CmaBMVGUCb11VE8lyEszZ4bG06JgIRKbzBwxYesACH4/39dXWdl84R8ykfMBM8K8xj9ypa9Zx6Um4XiETLC06JAKJRPp7aYHom0k4HiVm0k1kgmZidOqSn4SJTGJNhnUyJrbW8//32CUCAcyYSVg2kwZiJiOJmeBrsP7UpXwShrcuLC1qM6fEyggkTsvDvJlII1eDZCbLKiFNwzKXhkwql1WRqWv9GP3lJFi/2ud17BeBFGkmtYNmsm5AJWgmFIWehGMKnWBpMX/AWmJpBELpg42Z3Bw92HnEYrDpJ2GCsrRY6fMy65anLIxA+nujDAEziUZ7Pr4Vys6cP0lqKmgmBqcu+kkYS4sOiUBME36fFsWPb5ub28oOXSJmEoDFxLt/08b6KvAkLE1dWTfZ6VmFWB6BRHnx/mu7KAiC2EZU8lY4cuYymomJ5QRawvJyEmzycmnR0ggENnQOdHQLYgZBIGbS3NzcLplJNZqJ8eWkXFpOpPqjZ8MQKQJxyYZO8f5UuzgImklx9UdYTvZ79eNCayMQkAcX4g1flAoBM2kHMzldPTWAkYk2fs9XEyyNQGBD50RHj1gQMJOPZUcuXj56eAKaCcpENQJJ2PMrEHZ7uipgJmLZofOnq/EDeMRmEUgriUA4CyTe/VkE9M3ktpQs4gKP2CUCKVhSZL2nt4kGkFRCzOQtmglimwgE7jRwJf6e2tO1vATNBLFVBBLlTsdZQaQwZiZnzuNpLk8z3DfWtRGIyp5u0kygpjIBC/SexMURiDIM+dwuFgcki2IZSRbxNJf3mOviCCRLR1rMgmaCOCMC0brTYIMhS8VMPgpH0Ey8wsLlKUvvNPA1ELq0yEAkAhTolTUVP5qJG3F/BEKFIWwQ0Ey8gNURiFF1sC8tMjUTqKkE8NNe17Gmxel3GoovLbI3k4u38Ud/3IQ3IhCVPZ29StoVNRXM312B1REI7ycsOgwRuQJm0laGZuIK5iZceKdBgw61PZ29mUBNpXoyRiYOxTsRiLnSInszGY1m4kgWzkuFIpbRb4FAqNIiZ4TczuN4Hz5zOQfrI5CoIRyzp6uSV1PB09qOgEQgyYg57HSqmlFpkT/0NZVM5xF/zcT2rEp6JwJhUFpkZyaK01w4c9kV6yOQqFFcMGQB1GkuNBPbUkwE4qA7DerESWnRBghw51HMdB59aCb2wmsRSG5p0S4oayqXj6KZ2AXLI5CoWWxdWmRkJlBTQTOxHhKBuP1Og1Zp0RZDVh7511Tw50jN4aIIpIiSotv2dJOdR79nj35agRyBmF/QHXenQbu0aGfkkQvMpKpivA/dRB/3RCC/XluuEBKG2J6MmTwVup5fuXp93LWKch/aiSpuikCKLSk6tLQ4RIQ7H2pqurqed725cvXYuAc79/rRTngCEUjEKlrJnQbrBUJKi3bc02na/n54UzOKUFPzhsjk+ZtRV4+hnRTCNRHIb+sHrEwY4gQLaftSkyWrk66aK0QnD7bvrfT6D3f8Y+/8XtqGojgeEaKby3zov1Bf9lrYU8uYlbL6CxGtQ3FvCnsesoe9bZeQwVAIhoHaKQNdBmNzhTHKNrc/bTc3PVabWntLkp5zcz+C2pY+fvnmnO83N4AyEUhwVDUK+JxOQSEX3ECuMyF0csJ1wu3kxdbW5E6xNKLtRKUIBIOB0JjT678j+uhmJxOBneysL+rpJBYDmc1oSZFOGHLJeMMHQdyuk9BOaqV5bSc6AlGotNiD+r+bDKT7ZdeZuOwSdjKzmPnnCg7K9EG2IxCcpcUocIElAUwnwk64TnaWtZ3oCESh0mInr3wJgUSm+L32FL84ou2kL8YgAhkOOCIQ7KVFQEQggwN2whFL4aWaXnbpCEShOR0ikAgD2knTK0yVt+eW9XSCNwLBpQ7spUWIQGLSScNmnuu6nllYW6ks1da1nWA7COv0J6oJpBWGYJ3T4QIrNvy/zAxgXCeOyyxuJ/nVorYTHYHQLC2ON2BCj4sTm9mcUCa2kIlrF6ZWNrmdzGud6AiEVGkRIpB4LcRuY17RiWdVy9u51WIp6zKZPszqOQ3USosQgcRLk9kdsFAooZ2wwE74FJ9ROxkzHu9n9pwGcqVFiEDixG8wuzumgIGdrD2tLHE7yZZORAQyzKOqcRoIztIiTOhJW0hUKFZgJ2KK50vhzWwthR8c6AiERhhSP4eOYkoWAkSnE5PbiVgKq66TMePZUCOQ11jlgbK0CBFI3PgRC+nPTrxwKay0nfAIJItHVVOc05O4wAILsWUBO/Ecx2PVqZWKmkvh4UcgePWBrrQYuQskqVWvvE7adqLWUnigCESNo6rplRZlIxD5tBAY3E5cx1NsKTx9qCd0GnP69QgEjYV0ZCfW1Sk+x5fCpAv1w41ATrFGIEhLi5EIJIVVrzxQWelcCtNE/i4QJc9poBCGyE/o8qveWGnbiQNL4XmDGrO6pEhkTu8SgWC1kG7TSdhZKRvEWNiQzNDVLylGLATL/enRCAS7hURDRmeO1BOAgtuk9DkNNFq9SV9gQVqYKCYrlAxC8BFdWiCqntOAvbMocRdIammhPJazSclC+NNyJAWi3FHVVARy44oX26r3NgupUprTJQWSsQgEl0AgI0yWhs3sZGE1QhYifxaWekdV99FYxJCE1G8Y0clZiLtKSiCyPRNlntYp0zZ5g4CeAkFTOFFNIIbx5JFMkzczJUV8ZZMel1h0Vr0BrEhJIHyNtdunQLIYgSDqmvQc0vGnhUSHdGEh/XcV1T+nAa2BBE8k9BWwEMupUDIQMYUcH4+mO4cckYlAOJ++oIgJQwtJRyFNltgcYnlVaqVFrpCN/aPRlPnx/Q4JPnJ9oOHPZ38iDRqmlRCma5GaQFoKWZgdfb+bKr8+fHtLgudf3yHi/GIvDc6aTkKw8gw5fQQKMRYe3k+Vu0R4eQ8Zk+mQy+Xy/Ef8Ef+2XsIbefgUfrc/5S8E176eb32nZhDUh+Y/+3RQAwAMAgFs7IN/x7ggXNJ6KFtyf/SuSvFvqXQPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdiDAwEAAAAAIP/XRlBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVlfbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAONNjiMZZOFrAAAAAElFTkSuQmCC"},3022:function(s,a,e){e.r(a);var u=e(1302),i=e(6480),l=e(1639),t=e(9370),n=e(1697);const A="admin template";a.default={title:A,router:u.default,nav:i.default,theme:l.default,main:t.default,login:n.default}},1697:function(s,a,e){e.r(a);const u={username:"username",password:"password",login:"login",visitor:"visitor",signup:"signup",forgetPwd:"forgetPwd",thirdParty:"thirdParty",email:"email",confirmPwd:"confirmPwd",backLogin:"backLogin",signup_msg:"registration success\uFF01",signup_sub_msg:"an activation link has been sent to your mailbox, please check for activation in time\uFF01",confirmEmail:"confirmEmail",verifyEmail_msg:"verified successfully\uFF01",verifyEmail_sub_msg:"a link to reset your password has been sent to your mailbox, please check it in time\uFF01",resetPwd:"resetPwd"};a.default=u},9370:function(s,a,e){e.r(a);const l={bread:"current",copyright:"copyright &copy; 2020-2022",layout:{saveConfig:"save configs",copyConfig:"copy config",menuType:"menuType\uFF1A",vertical:"vertical",horizontal:"horizontal",compose:"compose",fontSize:"font size\uFF1A",layoutDesign:"layout",sizeDesign:"size",colorDesign:"color",save_cfg_msg:"success save theme\uFF01",copy_cfg_msg:"success copy theme\uFF01",data_valid_msg:"please enter legal data\uFF01",data_px_msg:"please enter data within 500-5000\uFF01",data_percent_msg:"please enter data within 50-100\uFF01",menu_width_msg:"please enter data within 0-300\uFF01"},components:{back:"back"}};a.default=l},6480:function(s,a,e){e.r(a);const u={left:{collapse:"collapse",projectList:"projectList",apis:"apis",wechat:"wechat",followMe:"follow me"},right:{user:"visitor",profile:"profile",logout:"logout",language:"language",zh:"zh",en:"en",jp:"jp",themeList:"themeList",github:"github"}};a.default=u},1302:function(s,a,e){e.r(a);const u={"/":"home","/user":"user","/user/signin":"signin","/user/signup":"signup","/user/verifyEmail":"verifyEmail","/user/setNewPwd":"setNewPwd","/404":"404","/preview":"preview","/layout":"layout"};a.default=u},1639:function(s,a,e){e.r(a);const u={defaults:"defaults",dark:"dark",light:"light",portal:"portal",fontSize:"fontSize",menuType:"menuType","--maxWidth":"maxWidth","--menuWidth":"menuWidth","--collapseWidth":"collapseWidth","--collapseMenuWidth":"collapseMenuWidth","--headerHeight":"headerHeight","--footerHeight":"footerHeight","--breadHeight":"breadHeight","--menuItemHeight":"menuItemHeight","--topbarHeight":"topbarHeight","--bannerBgColor":"bannerBgColor","--navBgColor":"navBgColor","--menuBgColor":"menuBgColor","--appBgColor":"appBgColor","--pageBgColor":"pageBgColor","--panelBgColor":"panelBgColor","--appColor":"appColor","--linkColor":"linkColor","--linkHoverColor":"linkHoverColor","--linkActiveColor":"linkActiveColor","--borderColor":"borderColor"};a.default=u},7405:function(s,a,e){e.r(a);var u=e(5338),i=e(3265),l=e(5364),t=e(9363),n=e(9570);const A="\u9879\u76EE\u6A21\u677F";a.default={title:A,router:u.default,nav:i.default,theme:l.default,main:t.default,login:n.default}},9570:function(s,a,e){e.r(a);const u={username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",login:"\u767B\u5F55",visitor:"\u6E38\u5BA2",signup:"\u6CE8\u518C",forgetPwd:"\u5FD8\u8BB0\u5BC6\u7801",thirdParty:"\u7B2C\u4E09\u65B9\u767B\u5F55",email:"\u90AE\u7BB1",confirmPwd:"\u786E\u8BA4\u5BC6\u7801",backLogin:"\u8FD4\u56DE\u767B\u5F55",signup_msg:"\u6CE8\u518C\u6210\u529F\uFF01",signup_sub_msg:"\u5DF2\u5411\u60A8\u7684\u90AE\u7BB1\u53D1\u9001\u6FC0\u6D3B\u94FE\u63A5\uFF0C\u8BF7\u53CA\u65F6\u67E5\u6536\u6FC0\u6D3B\uFF01",confirmEmail:"\u90AE\u7BB1\u9A8C\u8BC1",verifyEmail_msg:"\u9A8C\u8BC1\u6210\u529F\uFF01",verifyEmail_sub_msg:"\u5DF2\u5411\u60A8\u7684\u90AE\u7BB1\u53D1\u9001\u91CD\u7F6E\u5BC6\u7801\u94FE\u63A5\uFF0C\u8BF7\u53CA\u65F6\u67E5\u6536\uFF01",resetPwd:"\u91CD\u7F6E\u5BC6\u7801"};a.default=u},9363:function(s,a,e){e.r(a);const l={bread:"\u5F53\u524D\u4F4D\u7F6E",copyright:"copyright &copy; 2020-2022",layout:{saveConfig:"\u4FDD\u5B58\u914D\u7F6E",copyConfig:"\u62F7\u8D1D\u914D\u7F6E",menuType:"\u83DC\u5355\u7C7B\u578B\uFF1A",vertical:"\u7EB5\u5411",horizontal:"\u6A2A\u5411",compose:"\u7EC4\u5408",fontSize:"\u5B57\u4F53\u5927\u5C0F\uFF1A",layoutDesign:"\u5E03\u5C40",sizeDesign:"\u5927\u5C0F",colorDesign:"\u989C\u8272",save_cfg_msg:"\u4E3B\u9898\u4FDD\u5B58\u6210\u529F\uFF01",copy_cfg_msg:"\u4E3B\u9898\u62F7\u8D1D\u6210\u529F\uFF01",data_valid_msg:"\u8BF7\u8F93\u5165\u5408\u6CD5\u6570\u636E\uFF01",data_px_msg:"\u8BF7\u8F93\u5165500-5000\u5185\u6570\u636E\uFF01",data_percent_msg:"\u8BF7\u8F93\u516550-100\u5185\u6570\u636E\uFF01",menu_width_msg:"\u8BF7\u8F93\u51650-300\u5185\u6570\u636E\uFF01"},components:{back:"\u8FD4\u56DE"}};a.default=l},3265:function(s,a,e){e.r(a);const u={left:{collapse:"\u5207\u6362",projectList:"\u9879\u76EE\u5217\u8868",apis:"API\u6587\u6863",wechat:"\u5FAE\u4FE1",followMe:"\u5173\u6CE8\u6211"},right:{user:"\u6E38\u5BA2",profile:"\u4E2A\u4EBA\u4E2D\u5FC3",logout:"\u9000\u51FA",language:"\u8BED\u8A00",zh:"\u6C49\u8BED",en:"\u82F1\u8BED",jp:"\u65E5\u8BED",themeList:"\u4E3B\u9898",github:"github"}};a.default=u},5338:function(s,a,e){e.r(a);const u={"/":"\u9996\u9875","/user":"\u767B\u5F55\u6CE8\u518C","/user/signin":"\u767B\u5F55","/user/signup":"\u6CE8\u518C","/user/verifyEmail":"\u9A8C\u8BC1\u90AE\u7BB1","/user/setNewPwd":"\u91CD\u7F6E\u5BC6\u7801","/404":"404","/preview":"\u9884\u89C8","/layout":"\u6846\u67B6\u914D\u7F6E"};a.default=u},5364:function(s,a,e){e.r(a);const u={defaults:"\u9ED8\u8BA4\u4E3B\u9898",dark:"\u6DF1\u6697\u8272",light:"\u6D45\u4EAE\u8272",portal:"\u95E8\u6237",fontSize:"\u5B57\u4F53\u5927\u5C0F",menuType:"\u83DC\u5355\u7C7B\u578B","--maxWidth":"\u6846\u67B6\u6700\u5927\u5BBD\u5EA6","--menuWidth":"\u4FA7\u8FB9\u83DC\u5355\u5BBD\u5EA6","--collapseWidth":"\u83DC\u5355\u6536\u7F29\u5BBD\u5EA6","--collapseMenuWidth":"\u6536\u7F29\u83DC\u5355\u5BBD\u5EA6","--headerHeight":"\u5934\u90E8\u9AD8\u5EA6","--footerHeight":"\u5E95\u90E8\u9AD8\u5EA6","--breadHeight":"\u9762\u5305\u5C51\u9AD8\u5EA6","--menuItemHeight":"\u83DC\u5355\u884C\u9AD8","--topbarHeight":"\u9876\u90E8\u9AD8\u5EA6","--bannerBgColor":"banner\u80CC\u666F\u8272","--navBgColor":"nav\u80CC\u666F\u8272","--menuBgColor":"menu\u80CC\u666F\u8272","--appBgColor":"app\u80CC\u666F\u8272","--pageBgColor":"\u9875\u9762\u80CC\u666F\u8272","--panelBgColor":"panel\u80CC\u666F\u8272","--appColor":"app\u989C\u8272","--linkColor":"\u6846\u67B6\u94FE\u63A5\u989C\u8272","--linkHoverColor":"\u94FE\u63A5hover\u989C\u8272","--linkActiveColor":"\u94FE\u63A5active\u989C\u8272","--borderColor":"\u8FB9\u6846\u989C\u8272"};a.default=u},3087:function(s,a,e){e.r(a);var u=e(9061),i=e(4334),l=e(8337),t=e(3818),n=e(8166);const A="\u9879\u76EE\u6A21\u677F";a.default={title:A,router:u.default,nav:i.default,theme:l.default,main:t.default,login:n.default}},8166:function(s,a,e){e.r(a);const u={username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",login:"\u767B\u5F55",visitor:"\u6E38\u5BA2",signup:"\u6CE8\u518C",forgetPwd:"\u5FD8\u8BB0\u5BC6\u7801",thirdParty:"\u7B2C\u4E09\u65B9\u767B\u5F55",email:"\u90AE\u7BB1",confirmPwd:"\u786E\u8BA4\u5BC6\u7801",backLogin:"\u8FD4\u56DE\u767B\u5F55",signup_msg:"\u6CE8\u518C\u6210\u529F\uFF01",signup_sub_msg:"\u5DF2\u5411\u60A8\u7684\u90AE\u7BB1\u53D1\u9001\u6FC0\u6D3B\u94FE\u63A5\uFF0C\u8BF7\u53CA\u65F6\u67E5\u6536\u6FC0\u6D3B\uFF01",confirmEmail:"\u90AE\u7BB1\u9A8C\u8BC1",verifyEmail_msg:"\u9A8C\u8BC1\u6210\u529F\uFF01",verifyEmail_sub_msg:"\u5DF2\u5411\u60A8\u7684\u90AE\u7BB1\u53D1\u9001\u91CD\u7F6E\u5BC6\u7801\u94FE\u63A5\uFF0C\u8BF7\u53CA\u65F6\u67E5\u6536\uFF01",resetPwd:"\u91CD\u7F6E\u5BC6\u7801"};a.default=u},3818:function(s,a,e){e.r(a);const l={bread:"\u5F53\u524D\u4F4D\u7F6E",copyright:"copyright &copy; 2020-2022",layout:{saveConfig:"\u4FDD\u5B58\u914D\u7F6E",copyConfig:"\u62F7\u8D1D\u914D\u7F6E",menuType:"\u83DC\u5355\u7C7B\u578B\uFF1A",vertical:"\u7EB5\u5411",horizontal:"\u6A2A\u5411",compose:"\u7EC4\u5408",fontSize:"\u5B57\u4F53\u5927\u5C0F\uFF1A",layoutDesign:"\u5E03\u5C40",sizeDesign:"\u5927\u5C0F",colorDesign:"\u989C\u8272",save_cfg_msg:"\u4E3B\u9898\u4FDD\u5B58\u6210\u529F\uFF01",copy_cfg_msg:"\u4E3B\u9898\u62F7\u8D1D\u6210\u529F\uFF01",data_valid_msg:"\u8BF7\u8F93\u5165\u5408\u6CD5\u6570\u636E\uFF01",data_px_msg:"\u8BF7\u8F93\u5165500-5000\u5185\u6570\u636E\uFF01",data_percent_msg:"\u8BF7\u8F93\u516550-100\u5185\u6570\u636E\uFF01",menu_width_msg:"\u8BF7\u8F93\u51650-300\u5185\u6570\u636E\uFF01"},components:{back:"\u8FD4\u56DE"}};a.default=l},4334:function(s,a,e){e.r(a);const u={left:{collapse:"\u5207\u6362",projectList:"\u9879\u76EE\u5217\u8868",apis:"API\u6587\u6863",wechat:"\u5FAE\u4FE1",followMe:"\u5173\u6CE8\u6211"},right:{user:"\u6E38\u5BA2",profile:"\u4E2A\u4EBA\u4E2D\u5FC3",logout:"\u9000\u51FA",language:"\u8BED\u8A00",zh:"\u6C49\u8BED",en:"\u82F1\u8BED",jp:"\u65E5\u8BED",themeList:"\u4E3B\u9898",github:"github"}};a.default=u},9061:function(s,a,e){e.r(a);const u={"/":"\u9996\u9875","/user":"\u767B\u5F55\u6CE8\u518C","/user/signin":"\u767B\u5F55","/user/signup":"\u6CE8\u518C","/user/verifyEmail":"\u9A8C\u8BC1\u90AE\u7BB1","/user/setNewPwd":"\u91CD\u7F6E\u5BC6\u7801","/404":"404","/preview":"\u9884\u89C8","/layout":"\u6846\u67B6\u914D\u7F6E"};a.default=u},8337:function(s,a,e){e.r(a);const u={defaults:"\u9ED8\u8BA4\u4E3B\u9898",dark:"\u6DF1\u6697\u8272",light:"\u6D45\u4EAE\u8272",portal:"\u95E8\u6237",fontSize:"\u5B57\u4F53\u5927\u5C0F",menuType:"\u83DC\u5355\u7C7B\u578B","--maxWidth":"\u6846\u67B6\u6700\u5927\u5BBD\u5EA6","--menuWidth":"\u4FA7\u8FB9\u83DC\u5355\u5BBD\u5EA6","--collapseWidth":"\u83DC\u5355\u6536\u7F29\u5BBD\u5EA6","--collapseMenuWidth":"\u6536\u7F29\u83DC\u5355\u5BBD\u5EA6","--headerHeight":"\u5934\u90E8\u9AD8\u5EA6","--footerHeight":"\u5E95\u90E8\u9AD8\u5EA6","--breadHeight":"\u9762\u5305\u5C51\u9AD8\u5EA6","--menuItemHeight":"\u83DC\u5355\u884C\u9AD8","--topbarHeight":"\u9876\u90E8\u9AD8\u5EA6","--bannerBgColor":"banner\u80CC\u666F\u8272","--navBgColor":"nav\u80CC\u666F\u8272","--menuBgColor":"menu\u80CC\u666F\u8272","--appBgColor":"app\u80CC\u666F\u8272","--pageBgColor":"\u9875\u9762\u80CC\u666F\u8272","--panelBgColor":"panel\u80CC\u666F\u8272","--appColor":"app\u989C\u8272","--linkColor":"\u6846\u67B6\u94FE\u63A5\u989C\u8272","--linkHoverColor":"\u94FE\u63A5hover\u989C\u8272","--linkActiveColor":"\u94FE\u63A5active\u989C\u8272","--borderColor":"\u8FB9\u6846\u989C\u8272"};a.default=u}}]);
