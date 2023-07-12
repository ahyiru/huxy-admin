(self.webpackChunk=self.webpackChunk||[]).push([[415],{47845:function(ye,Gt,_t){_t.d(Gt,{T6:function(){return A},VD:function(){return S},WE:function(){return C},Yt:function(){return H},lC:function(){return Mt},py:function(){return B},rW:function(){return l},s:function(){return F},ve:function(){return it},vq:function(){return s}});var Y=_t(39057);function l(p,$,z){return{r:(0,Y.sh)(p,255)*255,g:(0,Y.sh)($,255)*255,b:(0,Y.sh)(z,255)*255}}function Mt(p,$,z){p=(0,Y.sh)(p,255),$=(0,Y.sh)($,255),z=(0,Y.sh)(z,255);var Z=Math.max(p,$,z),V=Math.min(p,$,z),K=0,ht=0,wt=(Z+V)/2;if(Z===V)ht=0,K=0;else{var Dt=Z-V;switch(ht=wt>.5?Dt/(2-Z-V):Dt/(Z+V),Z){case p:K=($-z)/Dt+($<z?6:0);break;case $:K=(z-p)/Dt+2;break;case z:K=(p-$)/Dt+4;break;default:break}K/=6}return{h:K,s:ht,l:wt}}function Et(p,$,z){return z<0&&(z+=1),z>1&&(z-=1),z<1/6?p+($-p)*(6*z):z<1/2?$:z<2/3?p+($-p)*(2/3-z)*6:p}function it(p,$,z){var Z,V,K;if(p=(0,Y.sh)(p,360),$=(0,Y.sh)($,100),z=(0,Y.sh)(z,100),$===0)V=z,K=z,Z=z;else{var ht=z<.5?z*(1+$):z+$-z*$,wt=2*z-ht;Z=Et(wt,ht,p+1/3),V=Et(wt,ht,p),K=Et(wt,ht,p-1/3)}return{r:Z*255,g:V*255,b:K*255}}function B(p,$,z){p=(0,Y.sh)(p,255),$=(0,Y.sh)($,255),z=(0,Y.sh)(z,255);var Z=Math.max(p,$,z),V=Math.min(p,$,z),K=0,ht=Z,wt=Z-V,Dt=Z===0?0:wt/Z;if(Z===V)K=0;else{switch(Z){case p:K=($-z)/wt+($<z?6:0);break;case $:K=(z-p)/wt+2;break;case z:K=(p-$)/wt+4;break;default:break}K/=6}return{h:K,s:Dt,v:ht}}function C(p,$,z){p=(0,Y.sh)(p,360)*6,$=(0,Y.sh)($,100),z=(0,Y.sh)(z,100);var Z=Math.floor(p),V=p-Z,K=z*(1-$),ht=z*(1-V*$),wt=z*(1-(1-V)*$),Dt=Z%6,mt=[z,ht,K,K,wt,z][Dt],Ot=[wt,z,z,ht,K,K][Dt],Yt=[K,K,wt,z,z,ht][Dt];return{r:mt*255,g:Ot*255,b:Yt*255}}function s(p,$,z,Z){var V=[(0,Y.FZ)(Math.round(p).toString(16)),(0,Y.FZ)(Math.round($).toString(16)),(0,Y.FZ)(Math.round(z).toString(16))];return Z&&V[0].startsWith(V[0].charAt(1))&&V[1].startsWith(V[1].charAt(1))&&V[2].startsWith(V[2].charAt(1))?V[0].charAt(0)+V[1].charAt(0)+V[2].charAt(0):V.join("")}function F(p,$,z,Z,V){var K=[(0,Y.FZ)(Math.round(p).toString(16)),(0,Y.FZ)(Math.round($).toString(16)),(0,Y.FZ)(Math.round(z).toString(16)),(0,Y.FZ)(dt(Z))];return V&&K[0].startsWith(K[0].charAt(1))&&K[1].startsWith(K[1].charAt(1))&&K[2].startsWith(K[2].charAt(1))&&K[3].startsWith(K[3].charAt(1))?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function I(p,$,z,Z){var V=[pad2(dt(Z)),pad2(Math.round(p).toString(16)),pad2(Math.round($).toString(16)),pad2(Math.round(z).toString(16))];return V.join("")}function dt(p){return Math.round(parseFloat(p)*255).toString(16)}function A(p){return S(p)/255}function S(p){return parseInt(p,16)}function H(p){return{r:p>>16,g:(p&65280)>>8,b:p&255}}},97649:function(ye,Gt,_t){_t.d(Gt,{R:function(){return Y}});var Y={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},13144:function(ye,Gt,_t){_t.d(Gt,{uA:function(){return Et}});var Y=_t(47845),l=_t(97649),Mt=_t(39057);function Et(S){var H={r:0,g:0,b:0},p=1,$=null,z=null,Z=null,V=!1,K=!1;return typeof S=="string"&&(S=dt(S)),typeof S=="object"&&(A(S.r)&&A(S.g)&&A(S.b)?(H=(0,Y.rW)(S.r,S.g,S.b),V=!0,K=String(S.r).substr(-1)==="%"?"prgb":"rgb"):A(S.h)&&A(S.s)&&A(S.v)?($=(0,Mt.JX)(S.s),z=(0,Mt.JX)(S.v),H=(0,Y.WE)(S.h,$,z),V=!0,K="hsv"):A(S.h)&&A(S.s)&&A(S.l)&&($=(0,Mt.JX)(S.s),Z=(0,Mt.JX)(S.l),H=(0,Y.ve)(S.h,$,Z),V=!0,K="hsl"),Object.prototype.hasOwnProperty.call(S,"a")&&(p=S.a)),p=(0,Mt.Yq)(p),{ok:V,format:S.format||K,r:Math.min(255,Math.max(H.r,0)),g:Math.min(255,Math.max(H.g,0)),b:Math.min(255,Math.max(H.b,0)),a:p}}var it="[-\\+]?\\d+%?",B="[-\\+]?\\d*\\.\\d+%?",C="(?:".concat(B,")|(?:").concat(it,")"),s="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),F="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),I={CSS_UNIT:new RegExp(C),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+F),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+F),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+F),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function dt(S){if(S=S.trim().toLowerCase(),S.length===0)return!1;var H=!1;if(l.R[S])S=l.R[S],H=!0;else if(S==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var p=I.rgb.exec(S);return p?{r:p[1],g:p[2],b:p[3]}:(p=I.rgba.exec(S),p?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=I.hsl.exec(S),p?{h:p[1],s:p[2],l:p[3]}:(p=I.hsla.exec(S),p?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=I.hsv.exec(S),p?{h:p[1],s:p[2],v:p[3]}:(p=I.hsva.exec(S),p?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=I.hex8.exec(S),p?{r:(0,Y.VD)(p[1]),g:(0,Y.VD)(p[2]),b:(0,Y.VD)(p[3]),a:(0,Y.T6)(p[4]),format:H?"name":"hex8"}:(p=I.hex6.exec(S),p?{r:(0,Y.VD)(p[1]),g:(0,Y.VD)(p[2]),b:(0,Y.VD)(p[3]),format:H?"name":"hex"}:(p=I.hex4.exec(S),p?{r:(0,Y.VD)(p[1]+p[1]),g:(0,Y.VD)(p[2]+p[2]),b:(0,Y.VD)(p[3]+p[3]),a:(0,Y.T6)(p[4]+p[4]),format:H?"name":"hex8"}:(p=I.hex3.exec(S),p?{r:(0,Y.VD)(p[1]+p[1]),g:(0,Y.VD)(p[2]+p[2]),b:(0,Y.VD)(p[3]+p[3]),format:H?"name":"hex"}:!1)))))))))}function A(S){return!!I.CSS_UNIT.exec(String(S))}},68645:function(ye,Gt,_t){_t.d(Gt,{C:function(){return it}});var Y=_t(47845),l=_t(97649),Mt=_t(13144),Et=_t(39057),it=function(){function C(s,F){s===void 0&&(s=""),F===void 0&&(F={});var I;if(s instanceof C)return s;typeof s=="number"&&(s=(0,Y.Yt)(s)),this.originalInput=s;var dt=(0,Mt.uA)(s);this.originalInput=s,this.r=dt.r,this.g=dt.g,this.b=dt.b,this.a=dt.a,this.roundA=Math.round(100*this.a)/100,this.format=(I=F.format)!==null&&I!==void 0?I:dt.format,this.gradientType=F.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=dt.ok}return C.prototype.isDark=function(){return this.getBrightness()<128},C.prototype.isLight=function(){return!this.isDark()},C.prototype.getBrightness=function(){var s=this.toRgb();return(s.r*299+s.g*587+s.b*114)/1e3},C.prototype.getLuminance=function(){var s=this.toRgb(),F,I,dt,A=s.r/255,S=s.g/255,H=s.b/255;return A<=.03928?F=A/12.92:F=Math.pow((A+.055)/1.055,2.4),S<=.03928?I=S/12.92:I=Math.pow((S+.055)/1.055,2.4),H<=.03928?dt=H/12.92:dt=Math.pow((H+.055)/1.055,2.4),.2126*F+.7152*I+.0722*dt},C.prototype.getAlpha=function(){return this.a},C.prototype.setAlpha=function(s){return this.a=(0,Et.Yq)(s),this.roundA=Math.round(100*this.a)/100,this},C.prototype.isMonochrome=function(){var s=this.toHsl().s;return s===0},C.prototype.toHsv=function(){var s=(0,Y.py)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,v:s.v,a:this.a}},C.prototype.toHsvString=function(){var s=(0,Y.py)(this.r,this.g,this.b),F=Math.round(s.h*360),I=Math.round(s.s*100),dt=Math.round(s.v*100);return this.a===1?"hsv(".concat(F,", ").concat(I,"%, ").concat(dt,"%)"):"hsva(".concat(F,", ").concat(I,"%, ").concat(dt,"%, ").concat(this.roundA,")")},C.prototype.toHsl=function(){var s=(0,Y.lC)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,l:s.l,a:this.a}},C.prototype.toHslString=function(){var s=(0,Y.lC)(this.r,this.g,this.b),F=Math.round(s.h*360),I=Math.round(s.s*100),dt=Math.round(s.l*100);return this.a===1?"hsl(".concat(F,", ").concat(I,"%, ").concat(dt,"%)"):"hsla(".concat(F,", ").concat(I,"%, ").concat(dt,"%, ").concat(this.roundA,")")},C.prototype.toHex=function(s){return s===void 0&&(s=!1),(0,Y.vq)(this.r,this.g,this.b,s)},C.prototype.toHexString=function(s){return s===void 0&&(s=!1),"#"+this.toHex(s)},C.prototype.toHex8=function(s){return s===void 0&&(s=!1),(0,Y.s)(this.r,this.g,this.b,this.a,s)},C.prototype.toHex8String=function(s){return s===void 0&&(s=!1),"#"+this.toHex8(s)},C.prototype.toHexShortString=function(s){return s===void 0&&(s=!1),this.a===1?this.toHexString(s):this.toHex8String(s)},C.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},C.prototype.toRgbString=function(){var s=Math.round(this.r),F=Math.round(this.g),I=Math.round(this.b);return this.a===1?"rgb(".concat(s,", ").concat(F,", ").concat(I,")"):"rgba(".concat(s,", ").concat(F,", ").concat(I,", ").concat(this.roundA,")")},C.prototype.toPercentageRgb=function(){var s=function(F){return"".concat(Math.round((0,Et.sh)(F,255)*100),"%")};return{r:s(this.r),g:s(this.g),b:s(this.b),a:this.a}},C.prototype.toPercentageRgbString=function(){var s=function(F){return Math.round((0,Et.sh)(F,255)*100)};return this.a===1?"rgb(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%)"):"rgba(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%, ").concat(this.roundA,")")},C.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var s="#"+(0,Y.vq)(this.r,this.g,this.b,!1),F=0,I=Object.entries(l.R);F<I.length;F++){var dt=I[F],A=dt[0],S=dt[1];if(s===S)return A}return!1},C.prototype.toString=function(s){var F=!!s;s=s??this.format;var I=!1,dt=this.a<1&&this.a>=0,A=!F&&dt&&(s.startsWith("hex")||s==="name");return A?s==="name"&&this.a===0?this.toName():this.toRgbString():(s==="rgb"&&(I=this.toRgbString()),s==="prgb"&&(I=this.toPercentageRgbString()),(s==="hex"||s==="hex6")&&(I=this.toHexString()),s==="hex3"&&(I=this.toHexString(!0)),s==="hex4"&&(I=this.toHex8String(!0)),s==="hex8"&&(I=this.toHex8String()),s==="name"&&(I=this.toName()),s==="hsl"&&(I=this.toHslString()),s==="hsv"&&(I=this.toHsvString()),I||this.toHexString())},C.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},C.prototype.clone=function(){return new C(this.toString())},C.prototype.lighten=function(s){s===void 0&&(s=10);var F=this.toHsl();return F.l+=s/100,F.l=(0,Et.V2)(F.l),new C(F)},C.prototype.brighten=function(s){s===void 0&&(s=10);var F=this.toRgb();return F.r=Math.max(0,Math.min(255,F.r-Math.round(255*-(s/100)))),F.g=Math.max(0,Math.min(255,F.g-Math.round(255*-(s/100)))),F.b=Math.max(0,Math.min(255,F.b-Math.round(255*-(s/100)))),new C(F)},C.prototype.darken=function(s){s===void 0&&(s=10);var F=this.toHsl();return F.l-=s/100,F.l=(0,Et.V2)(F.l),new C(F)},C.prototype.tint=function(s){return s===void 0&&(s=10),this.mix("white",s)},C.prototype.shade=function(s){return s===void 0&&(s=10),this.mix("black",s)},C.prototype.desaturate=function(s){s===void 0&&(s=10);var F=this.toHsl();return F.s-=s/100,F.s=(0,Et.V2)(F.s),new C(F)},C.prototype.saturate=function(s){s===void 0&&(s=10);var F=this.toHsl();return F.s+=s/100,F.s=(0,Et.V2)(F.s),new C(F)},C.prototype.greyscale=function(){return this.desaturate(100)},C.prototype.spin=function(s){var F=this.toHsl(),I=(F.h+s)%360;return F.h=I<0?360+I:I,new C(F)},C.prototype.mix=function(s,F){F===void 0&&(F=50);var I=this.toRgb(),dt=new C(s).toRgb(),A=F/100,S={r:(dt.r-I.r)*A+I.r,g:(dt.g-I.g)*A+I.g,b:(dt.b-I.b)*A+I.b,a:(dt.a-I.a)*A+I.a};return new C(S)},C.prototype.analogous=function(s,F){s===void 0&&(s=6),F===void 0&&(F=30);var I=this.toHsl(),dt=360/F,A=[this];for(I.h=(I.h-(dt*s>>1)+720)%360;--s;)I.h=(I.h+dt)%360,A.push(new C(I));return A},C.prototype.complement=function(){var s=this.toHsl();return s.h=(s.h+180)%360,new C(s)},C.prototype.monochromatic=function(s){s===void 0&&(s=6);for(var F=this.toHsv(),I=F.h,dt=F.s,A=F.v,S=[],H=1/s;s--;)S.push(new C({h:I,s:dt,v:A})),A=(A+H)%1;return S},C.prototype.splitcomplement=function(){var s=this.toHsl(),F=s.h;return[this,new C({h:(F+72)%360,s:s.s,l:s.l}),new C({h:(F+216)%360,s:s.s,l:s.l})]},C.prototype.onBackground=function(s){var F=this.toRgb(),I=new C(s).toRgb(),dt=F.a+I.a*(1-F.a);return new C({r:(F.r*F.a+I.r*I.a*(1-F.a))/dt,g:(F.g*F.a+I.g*I.a*(1-F.a))/dt,b:(F.b*F.a+I.b*I.a*(1-F.a))/dt,a:dt})},C.prototype.triad=function(){return this.polyad(3)},C.prototype.tetrad=function(){return this.polyad(4)},C.prototype.polyad=function(s){for(var F=this.toHsl(),I=F.h,dt=[this],A=360/s,S=1;S<s;S++)dt.push(new C({h:(I+S*A)%360,s:F.s,l:F.l}));return dt},C.prototype.equals=function(s){return this.toRgbString()===new C(s).toRgbString()},C}();function B(C,s){return C===void 0&&(C=""),s===void 0&&(s={}),new it(C,s)}},39057:function(ye,Gt,_t){_t.d(Gt,{FZ:function(){return C},JX:function(){return B},V2:function(){return l},Yq:function(){return it},sh:function(){return Y}});function Y(s,F){Mt(s)&&(s="100%");var I=Et(s);return s=F===360?s:Math.min(F,Math.max(0,parseFloat(s))),I&&(s=parseInt(String(s*F),10)/100),Math.abs(s-F)<1e-6?1:(F===360?s=(s<0?s%F+F:s%F)/parseFloat(String(F)):s=s%F/parseFloat(String(F)),s)}function l(s){return Math.min(1,Math.max(0,s))}function Mt(s){return typeof s=="string"&&s.indexOf(".")!==-1&&parseFloat(s)===1}function Et(s){return typeof s=="string"&&s.indexOf("%")!==-1}function it(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function B(s){return s<=1?"".concat(Number(s)*100,"%"):s}function C(s){return s.length===1?"0"+s:String(s)}},82610:function(ye,Gt){function _t(Y){for(var l=0,Mt,Et=0,it=Y.length;it>=4;++Et,it-=4)Mt=Y.charCodeAt(Et)&255|(Y.charCodeAt(++Et)&255)<<8|(Y.charCodeAt(++Et)&255)<<16|(Y.charCodeAt(++Et)&255)<<24,Mt=(Mt&65535)*1540483477+((Mt>>>16)*59797<<16),Mt^=Mt>>>24,l=(Mt&65535)*1540483477+((Mt>>>16)*59797<<16)^(l&65535)*1540483477+((l>>>16)*59797<<16);switch(it){case 3:l^=(Y.charCodeAt(Et+2)&255)<<16;case 2:l^=(Y.charCodeAt(Et+1)&255)<<8;case 1:l^=Y.charCodeAt(Et)&255,l=(l&65535)*1540483477+((l>>>16)*59797<<16)}return l^=l>>>13,l=(l&65535)*1540483477+((l>>>16)*59797<<16),((l^l>>>15)>>>0).toString(36)}Gt.Z=_t},84380:function(ye,Gt){var _t={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};Gt.Z=_t},60042:function(ye,Gt){var _t,Y;(function(){"use strict";var l={}.hasOwnProperty,Mt="[native code]";function Et(){for(var it=[],B=0;B<arguments.length;B++){var C=arguments[B];if(C){var s=typeof C;if(s==="string"||s==="number")it.push(C);else if(Array.isArray(C)){if(C.length){var F=Et.apply(null,C);F&&it.push(F)}}else if(s==="object"){if(C.toString!==Object.prototype.toString&&!C.toString.toString().includes("[native code]")){it.push(C.toString());continue}for(var I in C)l.call(C,I)&&C[I]&&it.push(I)}}}return it.join(" ")}ye.exports?(Et.default=Et,ye.exports=Et):(_t=[],Y=function(){return Et}.apply(Gt,_t),Y!==void 0&&(ye.exports=Y))})()},74335:function(ye,Gt,_t){var Y;_t.d(Gt,{$j:function(){return Qt},AN:function(){return V},BQ:function(){return ht},GK:function(){return N},Hn:function(){return $},JX:function(){return dt},PC:function(){return s},SV:function(){return p},Ud:function(){return S},V7:function(){return Z},X2:function(){return Yt},dy:function(){return A},h_:function(){return Ot},mH:function(){return H},pC:function(){return le},rj:function(){return z},s_:function(){return mt},u_:function(){return Dt},zd:function(){return K}});var l=_t(27378),Mt=_t(31542),Et={269:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`/*@height:2px;
@width:18px;
// @bgcolor:currentColor;
@bgcolor:#00b4cf;

@ratio:1.4142;
@rotate:45deg;
@scale:@ratio / (@ratio + 1);
@maigin:@height * 3;
@ty:@width / 4 - @height / @ratio;
@tx:@width / 4 + @height / @ratio;
@anitime:.3s;
*/
.nstud {
  --height: 2px;
  --width: 18px;
  --ratio: 1.4142;
  --rotate: 45deg;
  --anitime: 0.3s;
  --scale: calc(var(--ratio) / (var(--ratio) + 1));
  --maigin: calc(var(--height) * 3);
  --ty: calc(var(--width) / 4 - var(--height) / var(--ratio));
  --tx: calc(var(--width) / 4 + var(--height) / var(--ratio));
  position: relative;
  display: inline-block;
  height: 100%;
  width: var(--width);
}
.nstud .IZUmD, .nstud .IZUmD::before, .nstud .IZUmD::after {
  position: absolute;
  background-color: var(--linkHoverColor, currentColor);
  border-radius: 2px;
  transform: translateZ(0);
}
.nstud .IZUmD {
  width: var(--width);
  height: var(--height);
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform var(--anitime), background-color var(--anitime);
}
.nstud .IZUmD::before, .nstud .IZUmD::after {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: currentColor;
  transition: transform var(--anitime);
}
.nstud .IZUmD::before {
  transform: translateY(calc(0px - var(--maigin)));
}
.nstud .IZUmD::after {
  transform: translateY(var(--maigin));
}
.nstud .IZUmD.ylzxZ {
  background-color: rgba(255, 255, 255, 0);
}
.nstud .IZUmD.ylzxZ::before {
  transform: rotate(var(--rotate));
}
.nstud .IZUmD.ylzxZ::after {
  transform: rotate(calc(0deg - var(--rotate)));
}
.nstud .IZUmD.Wy_0M::before {
  transform: translateX(var(--tx)) translateY(calc(0px - var(--ty))) rotate(var(--rotate)) scaleX(var(--scale));
}
.nstud .IZUmD.Wy_0M::after {
  transform: translateX(var(--tx)) translateY(var(--ty)) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.nstud .IZUmD.bdjKS {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}
.nstud .IZUmD.bdjKS::before {
  transform: translateX(calc(0px - var(--tx))) translateY(calc(0px - var(--ty))) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.nstud .IZUmD.bdjKS::after {
  transform: translateX(calc(0px - var(--tx))) translateY(var(--ty)) rotate(var(--rotate)) scaleX(var(--scale));
}
.nstud .IZUmD.QPs9T {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  background-color: rgba(0, 0, 0, 0);
}
.nstud .IZUmD.QPs9T::before {
  transform-origin: 0 0;
}
.nstud .IZUmD.QPs9T::after {
  transform-origin: 100% 100%;
}
.nstud .IZUmD.QPs9T.tx7CH {
  background-color: var(--linkHoverColor, currentColor);
  transform: translateX(-75%) translateY(-50%) rotate(-90deg);
}
.nstud .IZUmD.QPs9T.tx7CH::before {
  transform: rotate(60deg);
}
.nstud .IZUmD.QPs9T.tx7CH::after {
  transform: rotate(-60deg);
}
@media screen and (max-width: 1024px) {
  .nstud .IZUmD.Wy_0M {
    background-color: rgba(255, 255, 255, 0);
  }
  .nstud .IZUmD.Wy_0M::before {
    transform: rotate(45deg);
  }
  .nstud .IZUmD.Wy_0M::after {
    transform: rotate(-45deg);
  }
}
`,""]),M.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const rt=M},528:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.kLIGi {
  --bar-color: #fff;
  --bar-width: 16px;
  position: relative;
  overflow: hidden;
}
.XoNs4 {
  transition: transform 0.5s cubic-bezier(0.24, 0.14, 0.17, 1.07);
}
.x4UPo {
  float: left;
}
.qYuQn {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.qYuQn .GU0qu {
  display: inline-block;
  margin: 0 5px;
  width: var(--bar-width);
  height: 4px;
  border-radius: 2px;
  background: var(--bar-color);
  opacity: 0.3;
  cursor: pointer;
}
.qYuQn .GU0qu.svhYU {
  width: calc(var(--bar-width) + 8px);
  opacity: 1;
}
`,""]),M.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const rt=M},434:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`@keyframes animate-drawer-right-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes animate-drawer-right-out {
  0% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-drawer-left-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes animate-drawer-left-out {
  0% {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
.KsHNu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  background: #ffffff;
  width: 300px;
  opacity: 0;
  overflow: auto;
  transform: translate3d(0, 0, 0);
}
.KsHNu {
  animation: animate-drawer-right-out 0.25s forwards;
}
.KsHNu.c6aFy {
  animation: animate-drawer-right-in 0.25s forwards;
}
.KsHNu.mlowE {
  top: 0;
  bottom: 0;
  left: 100%;
}
.KsHNu.mlowE {
  animation: animate-drawer-right-out 0.25s forwards;
}
.KsHNu.mlowE.c6aFy {
  animation: animate-drawer-right-in 0.25s forwards;
}
.KsHNu.w0B0d {
  top: 0;
  bottom: 0;
  right: 100%;
  left: auto;
}
.KsHNu.w0B0d {
  animation: animate-drawer-left-out 0.25s forwards;
}
.KsHNu.w0B0d.c6aFy {
  animation: animate-drawer-left-in 0.25s forwards;
}
.W4gG3 {
  position: relative;
  height: 100%;
  --headerHeight: 44px;
  --footerHeight: 0px;
}
.W4gG3 .SMORg {
  padding: 8px 12px 24px;
  height: calc(100% - var(--headerHeight) - var(--footerHeight));
}
.W4gG3 .e3AWW {
  font-weight: 500;
  font-size: 1.6rem;
  padding: 12px 16px;
  height: var(--headerHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.W4gG3 .e3AWW .VSVwl {
  position: relative;
  font-size: 2.2rem;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;
  border-color: rgba(0, 0, 0, 0.02);
}
.W4gG3 .e3AWW .VSVwl:before {
  content: "\\00D7";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.W4gG3 .e3AWW .VSVwl:hover {
  border-color: rgba(0, 0, 0, 0.1);
}
.W4gG3 .hlj9r {
  height: var(--footerHeight);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]),M.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const rt=M},503:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`@keyframes animate-drop-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-drop-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
}
.TEYHV {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  max-width: 100%;
  vertical-align: bottom;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.TEYHV::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.NCYpg {
  --bgColor: #ffffff;
  --borderColor: #f0f0f0;
  position: fixed !important;
  z-index: 10001;
  opacity: 0;
  min-width: 100px;
  min-height: 50px;
  width: max-content;
  border-radius: 4px;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  transform: translate3d(0, -30px, 0);
}
.NCYpg {
  animation: animate-drop-out 0.25s forwards;
}
.NCYpg.qjBWI {
  animation: animate-drop-in 0.25s forwards;
}
.huxy-drop-arrow-lt {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-lt::before {
  border-width: 6px;
}
.huxy-drop-arrow-lt::after {
  border-width: 5px;
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-drop-arrow-lt::before {
  left: 10px;
  border-bottom-color: var(--borderColor);
}
.huxy-drop-arrow-lt::after {
  left: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-drop-arrow-rt {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-rt::before {
  border-width: 6px;
}
.huxy-drop-arrow-rt::after {
  border-width: 5px;
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-drop-arrow-rt::before {
  right: 10px;
  border-bottom-color: var(--borderColor);
}
.huxy-drop-arrow-rt::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-drop-arrow-lb {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-lb::before {
  border-width: 6px;
}
.huxy-drop-arrow-lb::after {
  border-width: 5px;
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  bottom: auto;
  top: 100%;
  border-top-color: var(--borderColor);
}
.huxy-drop-arrow-lb::before {
  left: 10px;
}
.huxy-drop-arrow-lb::after {
  left: calc(10px + 1px);
  border-top-color: var(--bgColor);
}
.huxy-drop-arrow-rb {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-rb::before {
  border-width: 6px;
}
.huxy-drop-arrow-rb::after {
  border-width: 5px;
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  bottom: auto;
  top: 100%;
}
.huxy-drop-arrow-rb::before {
  right: 10px;
  border-top-color: var(--borderColor);
}
.huxy-drop-arrow-rb::after {
  right: calc(10px + 1px);
  border-top-color: var(--bgColor);
}
.huxy-drop-arrow-tl {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-tl::before {
  border-width: 6px;
}
.huxy-drop-arrow-tl::after {
  border-width: 5px;
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  left: auto;
  right: 100%;
}
.huxy-drop-arrow-tl::before {
  top: 10px;
  border-right-color: var(--borderColor);
}
.huxy-drop-arrow-tl::after {
  top: calc(10px + 1px);
  border-right-color: var(--bgColor);
}
.huxy-drop-arrow-tr {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-tr::before {
  border-width: 6px;
}
.huxy-drop-arrow-tr::after {
  border-width: 5px;
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  right: auto;
  left: 100%;
}
.huxy-drop-arrow-tr::before {
  top: 10px;
  border-left-color: var(--borderColor);
}
.huxy-drop-arrow-tr::after {
  top: calc(10px + 1px);
  border-left-color: var(--bgColor);
}
.huxy-drop-arrow-bl {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-bl::before {
  border-width: 6px;
}
.huxy-drop-arrow-bl::after {
  border-width: 5px;
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  left: auto;
  right: 100%;
}
.huxy-drop-arrow-bl::before {
  bottom: 10px;
  border-right-color: var(--borderColor);
}
.huxy-drop-arrow-bl::after {
  bottom: calc(10px + 1px);
  border-right-color: var(--bgColor);
}
.huxy-drop-arrow-br {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-br::before {
  border-width: 6px;
}
.huxy-drop-arrow-br::after {
  border-width: 5px;
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  right: auto;
  left: 100%;
}
.huxy-drop-arrow-br::before {
  bottom: 10px;
  border-left-color: var(--borderColor);
}
.huxy-drop-arrow-br::after {
  bottom: calc(10px + 1px);
  border-left-color: var(--bgColor);
}
`,""]),M.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const rt=M},556:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.huxy-doc-frame {
  --headerHeight: 60px;
  --menuWidth: 180px;
  --bannerWidth: 180px;
  --menuItemHeight: 45px;
  --borderColor: rgba(0, 0, 0, 0.08);
  --panelBgColor: rgba(253, 253, 253, 0.85);
  --linkColor: #455a64;
  --linkHoverColor: var(--blue1);
  --linkActiveColor: var(--blue2);
  position: relative;
  transform: none;
  overflow: visible;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  color: #495057;
}
.huxy-doc-header {
  height: var(--headerHeight);
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid var(--borderColor);
  background: var(--panelBgColor);
  backdrop-filter: blur(0.3rem);
}
.huxy-doc-header .huxy-doc-banner {
  width: var(--bannerWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-align: center;
  font-size: 24px;
  flex-shrink: 0;
}
.huxy-doc-header .huxy-doc-nav {
  flex: 1;
  overflow: hidden;
}
.huxy-doc-header .huxy-doc-nav li {
  float: left;
}
.huxy-doc-header .huxy-doc-nav li > .link {
  display: block;
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-decoration: none;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  transition: all 0.3s;
}
.huxy-doc-header .huxy-doc-nav li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-header .huxy-doc-nav li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-doc-header .huxy-doc-back {
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  font-size: 12px;
  padding: 0 10px;
  flex-shrink: 0;
}
.huxy-doc-container {
  display: flex;
}
.huxy-doc-container .huxy-doc-main-page {
  flex: 1;
  overflow: auto;
}
.huxy-doc-container .huxy-doc-menu {
  width: var(--menuWidth);
  position: sticky;
  top: var(--headerHeight);
  height: calc(var(--containerHeight) - var(--headerHeight));
  overflow: hidden;
  background-color: var(--panelBgColor);
  border-left: 1px solid var(--borderColor);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link {
  position: relative;
  display: block;
  height: var(--menuItemHeight);
  line-height: var(--menuItemHeight);
  text-decoration: none;
  padding: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.3s;
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > ul > li > .link {
  padding-left: 25px;
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li.open > ul {
  display: block;
}
.huxy-anchor-page {
  position: relative;
  padding: 15px 24px;
}
.huxy-anchor-page .huxy-anchor-item {
  min-height: 200px;
}
.huxy-anchor-page .huxy-anchor-item:not(:first-of-type) {
  margin-top: 20px;
  border-top: 1px dashed #eee;
}
.huxy-anchor-page .huxy-anchor-item .huxy-content {
  padding: 10px 15px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.012);
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
}
.huxy-anchor-page .huxy-anchor-item .huxy-content img {
  width: 100%;
}
.huxy-doc-menu-drawer {
  list-style: none;
  padding: 0;
  margin: 0;
}
.huxy-doc-menu-drawer .link {
  display: block;
  height: 45px;
  line-height: 45px;
  text-decoration: none;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 4px;
  transition: all 0.3s;
}
.huxy-doc-menu-drawer .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-menu-drawer .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
@media screen and (max-width: 1024px) {
  .huxy-doc-frame {
    --menuWidth: 0px;
  }
}
`,""]),M.locals={};const rt=M},548:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`@keyframes animate-modal-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-modal-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.SqXAN {
  position: fixed;
  background: #ffffff;
  border-radius: 12px;
  min-width: 333px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.SqXAN {
  animation: animate-modal-out 0.25s forwards;
}
.SqXAN.S3vb_ {
  animation: animate-modal-in 0.25s forwards;
}
.RiDlb {
  position: relative;
}
.RiDlb .xdqLE {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 20px 12px 0;
}
.RiDlb .C91AO {
  padding: 8px 12px 24px;
}
.RiDlb .J6dpF {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  height: 100%;
}
.RiDlb .J6dpF .XOnmm.t1Fx9 {
  color: #666666;
  border-right: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm.YGj9K {
  color: #036dff;
}
`,""]),M.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const rt=M},232:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE {
  --radius: 2px;
  position: relative;
  background: var(--panelBgColor);
  border-radius: var(--radius);
  height: 100%;
  z-index: 1;
  /*&:hover{
      box-shadow:0px 2px 5px hsla(0,0%,80%,.7);
    }*/
}
.J8VWE.ohmPp {
  box-shadow: 0 0 3rem rgba(100, 200, 255, 0.5) inset;
}
.J8VWE.JzE05 {
  border-color: rgba(0, 180, 220, 0.5);
  box-shadow: 0 0 2rem rgba(0, 180, 220, 0.5) inset;
}
.J8VWE .rOxNb {
  padding: 10px 12px;
  border-radius: var(--radius);
}
.J8VWE .rOxNb::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX {
  padding: 8px 12px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.J8VWE .OQwTX::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX .W_1K6 {
  flex: 1;
  width: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.J8VWE .OQwTX .eCk2_ {
  flex-shrink: 0;
}
.J8VWE .OQwTX .eCk2_ .R2Mku {
  text-align: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ .R2Mku:not(:first-of-type) {
  margin-left: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]),M.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const rt=M},249:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.cols-1 {
  width: 8.33333333%;
}
.cols-2 {
  width: 16.66666667%;
}
.cols-3 {
  width: 25%;
}
.cols-4 {
  width: 33.33333333%;
}
.cols-5 {
  width: 41.66666667%;
}
.cols-6 {
  width: 50%;
}
.cols-7 {
  width: 58.33333333%;
}
.cols-8 {
  width: 66.66666667%;
}
.cols-9 {
  width: 75%;
}
.cols-10 {
  width: 83.33333333%;
}
.cols-11 {
  width: 91.66666667%;
}
.cols-12 {
  width: 100%;
}
.offsets-0 {
  margin-left: 0;
}
.offsets-1 {
  margin-left: 8.33333333%;
}
.offsets-2 {
  margin-left: 16.66666667%;
}
.offsets-3 {
  margin-left: 25%;
}
.offsets-4 {
  margin-left: 33.33333333%;
}
.offsets-5 {
  margin-left: 41.66666667%;
}
.offsets-6 {
  margin-left: 50%;
}
.offsets-7 {
  margin-left: 58.33333333%;
}
.offsets-8 {
  margin-left: 66.66666667%;
}
.offsets-9 {
  margin-left: 75%;
}
.offsets-10 {
  margin-left: 83.33333333%;
}
.offsets-11 {
  margin-left: 91.66666667%;
}
.offsets-12 {
  margin-left: 100%;
}
.row-wrap {
  --gutter: 8px;
  --rowgap: 8px;
  width: 100%;
}
.row-wrap + .row-wrap {
  margin-top: calc(var(--rowgap) * 2);
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: calc(0px - var(--rowgap)) calc(0px - var(--gutter));
}
.row [class^="col-"] {
  padding: var(--rowgap) var(--gutter);
  position: relative;
}
.row .col-1 {
  width: 8.33333333%;
}
.row .col-2 {
  width: 16.66666667%;
}
.row .col-3 {
  width: 25%;
}
.row .col-4 {
  width: 33.33333333%;
}
.row .col-5 {
  width: 41.66666667%;
}
.row .col-6 {
  width: 50%;
}
.row .col-7 {
  width: 58.33333333%;
}
.row .col-8 {
  width: 66.66666667%;
}
.row .col-9 {
  width: 75%;
}
.row .col-10 {
  width: 83.33333333%;
}
.row .col-11 {
  width: 91.66666667%;
}
.row .col-12 {
  width: 100%;
}
.row .offset-0 {
  margin-left: 0;
}
.row .offset-1 {
  margin-left: 8.33333333%;
}
.row .offset-2 {
  margin-left: 16.66666667%;
}
.row .offset-3 {
  margin-left: 25%;
}
.row .offset-4 {
  margin-left: 33.33333333%;
}
.row .offset-5 {
  margin-left: 41.66666667%;
}
.row .offset-6 {
  margin-left: 50%;
}
.row .offset-7 {
  margin-left: 58.33333333%;
}
.row .offset-8 {
  margin-left: 66.66666667%;
}
.row .offset-9 {
  margin-left: 75%;
}
.row .offset-10 {
  margin-left: 83.33333333%;
}
.row .offset-11 {
  margin-left: 91.66666667%;
}
.row .offset-12 {
  margin-left: 100%;
}
@media screen and (min-width: 1600px) {
  .row .col-xl-1 {
    width: 8.33333333%;
  }
  .row .col-xl-2 {
    width: 16.66666667%;
  }
  .row .col-xl-3 {
    width: 25%;
  }
  .row .col-xl-4 {
    width: 33.33333333%;
  }
  .row .col-xl-5 {
    width: 41.66666667%;
  }
  .row .col-xl-6 {
    width: 50%;
  }
  .row .col-xl-7 {
    width: 58.33333333%;
  }
  .row .col-xl-8 {
    width: 66.66666667%;
  }
  .row .col-xl-9 {
    width: 75%;
  }
  .row .col-xl-10 {
    width: 83.33333333%;
  }
  .row .col-xl-11 {
    width: 91.66666667%;
  }
  .row .col-xl-12 {
    width: 100%;
  }
  .row .offset-xl-0 {
    margin-left: 0;
  }
  .row .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-xl-3 {
    margin-left: 25%;
  }
  .row .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-xl-6 {
    margin-left: 50%;
  }
  .row .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-xl-9 {
    margin-left: 75%;
  }
  .row .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-xl-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1600px) {
  .row .col-lg-1 {
    width: 8.33333333%;
  }
  .row .col-lg-2 {
    width: 16.66666667%;
  }
  .row .col-lg-3 {
    width: 25%;
  }
  .row .col-lg-4 {
    width: 33.33333333%;
  }
  .row .col-lg-5 {
    width: 41.66666667%;
  }
  .row .col-lg-6 {
    width: 50%;
  }
  .row .col-lg-7 {
    width: 58.33333333%;
  }
  .row .col-lg-8 {
    width: 66.66666667%;
  }
  .row .col-lg-9 {
    width: 75%;
  }
  .row .col-lg-10 {
    width: 83.33333333%;
  }
  .row .col-lg-11 {
    width: 91.66666667%;
  }
  .row .col-lg-12 {
    width: 100%;
  }
  .row .offset-lg-0 {
    margin-left: 0;
  }
  .row .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-lg-3 {
    margin-left: 25%;
  }
  .row .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-lg-6 {
    margin-left: 50%;
  }
  .row .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-lg-9 {
    margin-left: 75%;
  }
  .row .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-lg-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .row .col-md-1 {
    width: 8.33333333%;
  }
  .row .col-md-2 {
    width: 16.66666667%;
  }
  .row .col-md-3 {
    width: 25%;
  }
  .row .col-md-4 {
    width: 33.33333333%;
  }
  .row .col-md-5 {
    width: 41.66666667%;
  }
  .row .col-md-6 {
    width: 50%;
  }
  .row .col-md-7 {
    width: 58.33333333%;
  }
  .row .col-md-8 {
    width: 66.66666667%;
  }
  .row .col-md-9 {
    width: 75%;
  }
  .row .col-md-10 {
    width: 83.33333333%;
  }
  .row .col-md-11 {
    width: 91.66666667%;
  }
  .row .col-md-12 {
    width: 100%;
  }
  .row .offset-md-0 {
    margin-left: 0;
  }
  .row .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-md-3 {
    margin-left: 25%;
  }
  .row .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-md-6 {
    margin-left: 50%;
  }
  .row .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-md-9 {
    margin-left: 75%;
  }
  .row .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-md-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .row .col-sm-1 {
    width: 8.33333333%;
  }
  .row .col-sm-2 {
    width: 16.66666667%;
  }
  .row .col-sm-3 {
    width: 25%;
  }
  .row .col-sm-4 {
    width: 33.33333333%;
  }
  .row .col-sm-5 {
    width: 41.66666667%;
  }
  .row .col-sm-6 {
    width: 50%;
  }
  .row .col-sm-7 {
    width: 58.33333333%;
  }
  .row .col-sm-8 {
    width: 66.66666667%;
  }
  .row .col-sm-9 {
    width: 75%;
  }
  .row .col-sm-10 {
    width: 83.33333333%;
  }
  .row .col-sm-11 {
    width: 91.66666667%;
  }
  .row .col-sm-12 {
    width: 100%;
  }
  .row .offset-sm-0 {
    margin-left: 0;
  }
  .row .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-sm-3 {
    margin-left: 25%;
  }
  .row .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-sm-6 {
    margin-left: 50%;
  }
  .row .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-sm-9 {
    margin-left: 75%;
  }
  .row .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-sm-12 {
    margin-left: 100%;
  }
}
@media screen and (max-width: 768px) {
  .row .col-xs-1 {
    width: 8.33333333%;
  }
  .row .col-xs-2 {
    width: 16.66666667%;
  }
  .row .col-xs-3 {
    width: 25%;
  }
  .row .col-xs-4 {
    width: 33.33333333%;
  }
  .row .col-xs-5 {
    width: 41.66666667%;
  }
  .row .col-xs-6 {
    width: 50%;
  }
  .row .col-xs-7 {
    width: 58.33333333%;
  }
  .row .col-xs-8 {
    width: 66.66666667%;
  }
  .row .col-xs-9 {
    width: 75%;
  }
  .row .col-xs-10 {
    width: 83.33333333%;
  }
  .row .col-xs-11 {
    width: 91.66666667%;
  }
  .row .col-xs-12 {
    width: 100%;
  }
  .row .offset-xs-0 {
    margin-left: 0;
  }
  .row .offset-xs-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-xs-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-xs-3 {
    margin-left: 25%;
  }
  .row .offset-xs-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-xs-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-xs-6 {
    margin-left: 50%;
  }
  .row .offset-xs-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-xs-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-xs-9 {
    margin-left: 75%;
  }
  .row .offset-xs-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-xs-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-xs-12 {
    margin-left: 100%;
  }
}
`,""]),M.locals={};const rt=M},990:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,""]),M.locals={};const rt=M},575:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.tabs-header-wrap {
  position: relative;
  border-bottom: 3px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
}
.tabs-header-wrap .tabs-header {
  display: block;
  user-select: none;
  margin: 0;
  padding: 0;
}
.tabs-header-wrap .tabs-header::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.tabs-header-wrap .tabs-header.flex {
  display: flex;
}
.tabs-header-wrap .tabs-header.flex .th-item {
  flex: 1;
  text-align: center;
}
.tabs-header-wrap .tabs-header .th-item {
  display: block;
  float: left;
  position: relative;
  cursor: pointer;
  border-right: 1px solid transparent;
  margin-right: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.tabs-header-wrap .tabs-header .th-item:last-of-type {
  border: 0;
  margin-right: 0;
}
.tabs-header-wrap .tabs-header .th-item:hover {
  color: #40a9ff;
}
.tabs-header-wrap .tabs-header .th-item.active {
  color: #40a9ff;
}
.tabs-header-wrap .th-track {
  height: 3px;
  position: absolute;
  left: 0;
  bottom: -3px;
  color: #40a9ff;
  background-color: currentColor;
  transition: all 0.3s;
}
.tabs-header-wrap .th-track::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: currentColor;
}
`,""]),M.locals={};const rt=M},918:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.ofth_ {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
.hVmF3 {
  position: relative;
  width: 100%;
}
.hVmF3:hover::before, .hVmF3:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.hVmF3:hover::before {
  transform: translateY(0);
}
.hVmF3:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.hVmF3::before, .hVmF3::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.hVmF3::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.hVmF3::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.uzFyE {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.uzFyE[tooltip] {
  position: relative;
  width: 100%;
}
.uzFyE[tooltip]:hover::before, .uzFyE[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.uzFyE[tooltip]:hover::before {
  transform: translateY(0);
}
.uzFyE[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.uzFyE[tooltip]::before, .uzFyE[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.uzFyE[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.uzFyE[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.uzFyE[tooltip]::before {
  left: 0;
  bottom: calc(100% + var(--arrowSize));
}
.uzFyE[tooltip]::after {
  left: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.Giihu {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.Giihu[tooltip] {
  position: relative;
  width: 100%;
}
.Giihu[tooltip]:hover::before, .Giihu[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.Giihu[tooltip]:hover::before {
  transform: translateY(0);
}
.Giihu[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.Giihu[tooltip]::before, .Giihu[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.Giihu[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.Giihu[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.Giihu[tooltip]::before {
  right: 0;
  bottom: calc(100% + var(--arrowSize));
}
.Giihu[tooltip]::after {
  right: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.bFVVt {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.bFVVt[tooltip] {
  position: relative;
  width: 100%;
}
.bFVVt[tooltip]:hover::before, .bFVVt[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.bFVVt[tooltip]:hover::before {
  transform: translateY(0);
}
.bFVVt[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.bFVVt[tooltip]::before, .bFVVt[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.bFVVt[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.bFVVt[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.bFVVt[tooltip]::before {
  left: 0;
  top: calc(100% + var(--arrowSize));
}
.bFVVt[tooltip]::after {
  left: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.oGmKq {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.oGmKq[tooltip] {
  position: relative;
  width: 100%;
}
.oGmKq[tooltip]:hover::before, .oGmKq[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.oGmKq[tooltip]:hover::before {
  transform: translateY(0);
}
.oGmKq[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.oGmKq[tooltip]::before, .oGmKq[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.oGmKq[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.oGmKq[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.oGmKq[tooltip]::before {
  right: 0;
  top: calc(100% + var(--arrowSize));
}
.oGmKq[tooltip]::after {
  right: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.svYWD {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.svYWD[tooltip] {
  position: relative;
  width: 100%;
}
.svYWD[tooltip]:hover::before, .svYWD[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.svYWD[tooltip]:hover::before {
  transform: translateY(0);
}
.svYWD[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.svYWD[tooltip]::before, .svYWD[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.svYWD[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.svYWD[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.svYWD[tooltip]::before {
  top: 0;
  left: calc(100% + var(--arrowSize));
}
.svYWD[tooltip]::after {
  top: var(--position);
  left: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
`,""]),M.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const rt=M},942:(h,G,b)=>{b.d(G,{Z:()=>rt});var X=b(601),R=b.n(X),U=b(609),P=b.n(U),M=P()(R());M.push([h.id,`.node-right-icon-close {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-close .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-close .default-right-icon::before {
  left: 0;
}
.node-right-icon-close .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.node-right-icon-close .default-right-icon::before {
  transform: rotate(135deg);
}
.node-right-icon-close .default-right-icon::after {
  transform: rotate(45deg);
}
.node-right-icon-open {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-open .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-open .default-right-icon::before {
  left: 0;
}
.node-right-icon-open .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.node-right-icon-open .default-right-icon::before {
  transform: rotate(225deg);
}
.node-right-icon-open .default-right-icon::after {
  transform: rotate(-45deg);
}
.hide-scrollbar {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.huxy-tree {
  --topBar: 0px;
  --downBar: var(--footerHeight, 0);
  --width: var(--menuWidth, 100%);
  --bgColor: var(--menuBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --trackWidth: 15px;
  --collapsedWidth: var(--collapseWidth, 60px);
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  height: calc(100% - var(--topBar) - var(--downBar));
  overflow: hidden;
}
.huxy-tree .huxy-tree-track {
  width: calc(100% + var(--trackWidth));
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: calc(100% - var(--trackWidth));
  min-height: 100%;
  padding: var(--ulPadding);
  margin: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {
  padding-left: 70px;
  font-size: 0.9rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {
  height: calc(var(--subItemHeight) * var(--count));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  --count: 0;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  height: auto;
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  border-radius: 2px;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  width: var(--collapsedWidth);
  font-size: 1.6rem;
}
.huxy-horizontal-tree {
  --bgColor: var(--navBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --itemPadding: 0 8px;
  --nodeFloat: auto;
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  border-top: 1px solid var(--treeBorderColor);
  float: var(--nodeFloat);
}
.huxy-horizontal-tree .huxy-tree-track {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {
  float: var(--nodeFloat);
  width: max-content;
  padding: 0 10px;
  margin: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  right: auto;
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  left: auto;
  right: var(--ulPosition);
  position: absolute;
  transform-origin: 100% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  right: auto;
  left: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  top: var(--arrowPosition);
  border-left-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  top: calc(var(--arrowPosition) + 1px);
  border-left-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: var(--ulPosition);
  left: 0;
  transform-origin: 50% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  border-width: 8px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  border-width: 7px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  left: 16px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  left: auto;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  right: 10px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
`,""]),M.locals={};const rt=M},609:h=>{h.exports=function(G){var b=[];return b.toString=function(){return this.map(function(X){var R="",U=typeof X[5]<"u";return X[4]&&(R+="@supports (".concat(X[4],") {")),X[2]&&(R+="@media ".concat(X[2]," {")),U&&(R+="@layer".concat(X[5].length>0?" ".concat(X[5]):""," {")),R+=G(X),U&&(R+="}"),X[2]&&(R+="}"),X[4]&&(R+="}"),R}).join("")},b.i=function(X,R,U,P,M){typeof X=="string"&&(X=[[null,X,void 0]]);var rt={};if(U)for(var zt=0;zt<this.length;zt++){var Ft=this[zt][0];Ft!=null&&(rt[Ft]=!0)}for(var Lt=0;Lt<X.length;Lt++){var pt=[].concat(X[Lt]);U&&rt[pt[0]]||(typeof M<"u"&&(typeof pt[5]>"u"||(pt[1]="@layer".concat(pt[5].length>0?" ".concat(pt[5]):""," {").concat(pt[1],"}")),pt[5]=M),R&&(pt[2]&&(pt[1]="@media ".concat(pt[2]," {").concat(pt[1],"}")),pt[2]=R),P&&(pt[4]?(pt[1]="@supports (".concat(pt[4],") {").concat(pt[1],"}"),pt[4]=P):pt[4]="".concat(P)),b.push(pt))}},b}},601:h=>{h.exports=function(G){return G[1]}},837:(h,G,b)=>{var X=b(810),R=Symbol.for("react.element"),U=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,M=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0};function zt(Ft,Lt,pt){var Tt,Wt={},ne=null,Xt=null;pt!==void 0&&(ne=""+pt),Lt.key!==void 0&&(ne=""+Lt.key),Lt.ref!==void 0&&(Xt=Lt.ref);for(Tt in Lt)P.call(Lt,Tt)&&!rt.hasOwnProperty(Tt)&&(Wt[Tt]=Lt[Tt]);if(Ft&&Ft.defaultProps)for(Tt in Lt=Ft.defaultProps,Lt)Wt[Tt]===void 0&&(Wt[Tt]=Lt[Tt]);return{$$typeof:R,type:Ft,key:ne,ref:Xt,props:Wt,_owner:M.current}}G.Fragment=U,G.jsx=zt,G.jsxs=zt},322:(h,G,b)=>{h.exports=b(837)},62:h=>{var G=[];function b(U){for(var P=-1,M=0;M<G.length;M++)if(G[M].identifier===U){P=M;break}return P}function X(U,P){for(var M={},rt=[],zt=0;zt<U.length;zt++){var Ft=U[zt],Lt=P.base?Ft[0]+P.base:Ft[0],pt=M[Lt]||0,Tt="".concat(Lt," ").concat(pt);M[Lt]=pt+1;var Wt=b(Tt),ne={css:Ft[1],media:Ft[2],sourceMap:Ft[3],supports:Ft[4],layer:Ft[5]};if(Wt!==-1)G[Wt].references++,G[Wt].updater(ne);else{var Xt=R(ne,P);P.byIndex=zt,G.splice(zt,0,{identifier:Tt,updater:Xt,references:1})}rt.push(Tt)}return rt}function R(U,P){var M=P.domAPI(P);M.update(U);var rt=function(zt){if(zt){if(zt.css===U.css&&zt.media===U.media&&zt.sourceMap===U.sourceMap&&zt.supports===U.supports&&zt.layer===U.layer)return;M.update(U=zt)}else M.remove()};return rt}h.exports=function(U,P){P=P||{},U=U||[];var M=X(U,P);return function(rt){rt=rt||[];for(var zt=0;zt<M.length;zt++){var Ft=M[zt],Lt=b(Ft);G[Lt].references--}for(var pt=X(rt,P),Tt=0;Tt<M.length;Tt++){var Wt=M[Tt],ne=b(Wt);G[ne].references===0&&(G[ne].updater(),G.splice(ne,1))}M=pt}}},793:h=>{var G={};function b(R){if(typeof G[R]>"u"){var U=document.querySelector(R);if(window.HTMLIFrameElement&&U instanceof window.HTMLIFrameElement)try{U=U.contentDocument.head}catch{U=null}G[R]=U}return G[R]}function X(R,U){var P=b(R);if(!P)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");P.appendChild(U)}h.exports=X},173:h=>{function G(b){var X=document.createElement("style");return b.setAttributes(X,b.attributes),b.insert(X,b.options),X}h.exports=G},892:(h,G,b)=>{function X(R){var U=b.nc;U&&R.setAttribute("nonce",U)}h.exports=X},36:h=>{function G(R,U,P){var M="";P.supports&&(M+="@supports (".concat(P.supports,") {")),P.media&&(M+="@media ".concat(P.media," {"));var rt=typeof P.layer<"u";rt&&(M+="@layer".concat(P.layer.length>0?" ".concat(P.layer):""," {")),M+=P.css,rt&&(M+="}"),P.media&&(M+="}"),P.supports&&(M+="}");var zt=P.sourceMap;zt&&typeof btoa<"u"&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(zt))))," */")),U.styleTagTransform(M,R,U.options)}function b(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)}function X(R){if(typeof document>"u")return{update:function(){},remove:function(){}};var U=R.insertStyleElement(R);return{update:function(P){G(U,R,P)},remove:function(){b(U)}}}h.exports=X},464:h=>{function G(b,X){if(X.styleSheet)X.styleSheet.cssText=b;else{for(;X.firstChild;)X.removeChild(X.firstChild);X.appendChild(document.createTextNode(b))}}h.exports=G},810:h=>{var G=X=>{var R={};return B.d(R,X),R},b=X=>()=>X;h.exports=Y||(Y=_t.t(l,2))}},it={};function B(h){var G=it[h];if(G!==void 0)return G.exports;var b=it[h]={id:h,exports:{}};return Et[h](b,b.exports,B),b.exports}B.n=h=>{var G=h&&h.__esModule?()=>h.default:()=>h;return B.d(G,{a:G}),G},B.d=(h,G)=>{for(var b in G)B.o(G,b)&&!B.o(h,b)&&Object.defineProperty(h,b,{enumerable:!0,get:G[b]})},B.o=(h,G)=>Object.prototype.hasOwnProperty.call(h,G),B.nc=void 0;var C={};(()=>{B.d(C,{PC:()=>$r,rK:()=>Qe,lr:()=>kr,JX:()=>Cr,dy:()=>L,Ud:()=>x,mH:()=>Ct,SV:()=>$t,Hn:()=>Pe,rj:()=>Ir,V7:()=>Ue,AN:()=>se,zd:()=>Nr,BQ:()=>Mr,Ur:()=>Qr,u_:()=>ro,s_:()=>go,h_:()=>_e,X2:()=>Se,$j:()=>Gr,GK:()=>Yo,u:()=>nt,mp:()=>Xo,C2:()=>It,pC:()=>At,ff:()=>uo,d2:()=>jr,Uw:()=>Vo});var h=B(322),G=B(62),b=B.n(G),X=B(36),R=B.n(X),U=B(793),P=B.n(U),M=B(892),rt=B.n(M),zt=B(173),Ft=B.n(zt),Lt=B(464),pt=B.n(Lt),Tt=B(269),Wt={};Wt.styleTagTransform=pt(),Wt.setAttributes=rt(),Wt.insert=P().bind(null,"head"),Wt.domAPI=R(),Wt.insertStyleElement=Ft();var ne=b()(Tt.Z,Wt);const Xt=Tt.Z&&Tt.Z.locals?Tt.Z.locals:void 0,$r=n=>(0,h.jsx)("span",{className:Xt.anico,children:(0,h.jsx)("span",{className:[Xt.hline,...(n.type||"").split(" ").map(i=>Xt[i]).filter(Boolean)].join(" ")})});var q=B(810);const Je=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),Le=n=>new Promise((i,d)=>{const m=new FileReader;m.readAsDataURL(n),m.addEventListener("load",()=>i(m.result)),m.addEventListener("error",j=>d(j))}),Dr=async n=>{if(!Je(n))return n;const i=await(await fetch(decodeURIComponent(n))).blob();return await Le(i)},xr=n=>{const[i,d]=(0,q.useState)(n);return(0,q.useEffect)(()=>{(async m=>{const j=await Dr(m);d(j)})(n)},[n]),i},Qe=({src:n,...i})=>{const d=xr(n);return(0,h.jsx)("img",{...i,src:d})};var gr=n=>{var i={};return B.d(i,n),i},yr=n=>()=>n;const tr=gr({createPortal:()=>Mt.createPortal,flushSync:()=>Mt.flushSync}),er=(n,i)=>{const d=(0,q.useRef)();(0,q.useEffect)(()=>{d.current=n},[n]),(0,q.useEffect)(()=>{if(i){const m=setInterval(()=>d.current(),i);return()=>clearInterval(m)}},[i])},fe=()=>![typeof window,typeof document].includes("undefined"),Ae=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),rr=n=>Ae(n).indexOf("element")>-1,ie=(n=null)=>fe()?rr(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},br=(n=()=>{},i=60)=>{let d=null;return function(...m){clearTimeout(d),d=setTimeout(()=>n.apply(this,m),i)}},$e=(n,i)=>Object.prototype.hasOwnProperty.call(n??{},i),ce=n=>$e(n,"current"),He=(n,i)=>{const d=[],m=n.children??[];for(let j=0,_=m.length;j<_;j++){const T=m[j];T.className.indexOf(i)>-1&&d.push(T)}return d.length===0?null:d.length===1?d[0]:d},Zr=(n,i)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const d=document.createElement("object");return d.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),d.setAttribute("class","resize-sensor"),d.onload=()=>{d.contentDocument.defaultView.addEventListener("resize",i,!1),i()},d.type="text/html",n.appendChild(d),d.data="about:blank",d},vr=(n,i=60)=>{if(!fe())return;n=ce(n)?n.current:n??document.body;let d=He(n,"resize-sensor"),m=[];const j=br(()=>m.map(ot=>ot(n)),i),_=ot=>{He(n,"resize-sensor")||(d=Zr(n,j)),m.indexOf(ot)===-1&&m.push(ot)},T=ot=>{const ut=m.indexOf(ot);ut!==-1&&m.splice(ut,1),m.length===0&&d&&Q()},Q=()=>{d&&d.parentNode&&(d.contentDocument&&d.contentDocument.defaultView.removeEventListener("resize",j,!1),d.parentNode.removeChild(d),d=void 0,m=[])};return{element:n,bind:_,unbind:T,destroy:Q}},Tr=(n={})=>{const i=(0,q.useRef)(0),[d,m]=(0,q.useState)(n),j=(0,q.useCallback)(_=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>m(_))},[]);return(0,q.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[d,j]},wr=(n=null,i=60)=>{const d=ce(n)?n.current:n,{bind:m,destroy:j}=vr(d,i),[_,T]=Tr(ie(d));return(0,q.useEffect)(()=>(m(()=>d&&T(ie(d))),()=>j()),[d]),_};var We=B(528),pe={};pe.styleTagTransform=pt(),pe.setAttributes=rt(),pe.insert=P().bind(null,"head"),pe.domAPI=R(),pe.insertStyleElement=Ft();var Ur=b()(We.Z,pe);const be=We.Z&&We.Z.locals?We.Z.locals:void 0,kr=({children:n,active:i=0,delay:d=5e3,className:m,...j})=>{const[_,T]=(0,q.useState)(i+1),[Q,ot]=(0,q.useState)(!1),ut=(0,q.useRef)(),bt=(0,q.useRef)(""),{width:yt}=wr(ut);n=Array.isArray(n)?n:[n];const vt=n[0],Kt=[n[n.length-1],...n,vt],qt=Kt.length;er(()=>{let Pt=_+1;Pt=Pt===qt?1:Pt,bt.current&&(bt.current=""),T(Pt),Pt===qt-1&&setTimeout(()=>{bt.current="none",T(1)},500)},Q?null:d);const Nt=(Pt,ee)=>{ee.stopPropagation(),bt.current="",T(Pt),(0,tr.flushSync)(()=>ot(!0)),ot(!1)},Bt={width:`${qt*yt}px`,transform:`translateX(${-yt*_}px)`,transition:bt.current};return(0,h.jsxs)("div",{className:`${be["huxy-carousel"]}${m?` ${m}`:""}`,...j,ref:ut,children:[(0,h.jsx)("div",{className:be["huxy-carousel-wrap"],style:Bt,children:Kt.map((Pt,ee)=>(0,h.jsx)("div",{className:`${be["carousel-item"]} ${_===ee?be.active:""}`,style:{width:`${yt}px`},children:Pt},`huxy-carousel-${ee}`))}),(0,h.jsx)("div",{className:be["carousel-switch"],children:n.map((Pt,ee)=>(0,h.jsx)("span",{className:`${be.dot} ${_===ee+1?be.active:""}`,onClick:ke=>Nt(ee+1,ke)},`huxy-carousel-switch-${ee}`))})]})},me=(n,i)=>{let d="",m="";if(typeof i=="number"&&(d=`col-${n}-${i}`),typeof i=="object"){const{span:j,offset:_}=i;d=j?`col-${n}-${j}`:"",m=_?`offset-${n}-${_}`:""}return{sp:d,os:m}},Cr=(0,q.forwardRef)(({span:n,offset:i,xl:d,lg:m,md:j,sm:_,xs:T,style:Q,width:ot,auto:ut,offsetWidth:bt="0px",className:yt,...vt},Kt)=>{const qt=yt?` ${yt}`:"",Nt=`col-${n||12}`,Bt=i?`offset-${i}`:"",{sp:Pt,os:ee}=me("xs",T),{sp:ke,os:Re}=me("sm",_),{sp:Me,os:he}=me("md",j),{sp:Be,os:qe}=me("lg",m),{sp:Ge,os:Ce}=me("xl",d),zr=[Nt,Ge,Be,Me,ke,Pt,Bt,Ce,qe,he,Re,ee].filter(Boolean).join(" "),hr=ut?{width:"auto",flex:1,maxWidth:`calc(100% - ${bt})`}:{width:ot};return(0,h.jsx)("div",{className:`${zr}${qt}`,...vt,style:{...hr,...Q},ref:Kt})}),Er=()=>{const n=(0,q.useRef)(!0);return n.current?(n.current=!1,!0):!1},Kr=(n,i=[])=>{const d=Er();(0,q.useEffect)(()=>{if(!d)return n()},i)},Ve=(n,i=450)=>{const[d,m]=(0,q.useState)(n);return Kr(()=>{let j;return n||i===0?m(n):j=setTimeout(()=>m(n),i),()=>j&&clearTimeout(j)},[n]),[d,m]},_e=({children:n,mountNode:i=document.body})=>(0,tr.createPortal)(n,i),De={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Te={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Or=document.body,Nr=({open:n,close:i,delay:d=300,children:m,mountNode:j,hasMask:_=!0,style:T,className:Q="h-mask",relative:ot})=>{const[ut]=Ve(n,d);(j??Or).style.overflow=ut?"hidden":"";const bt=ot?"absolute":"fixed";return(0,h.jsx)(_e,{mountNode:j,children:(0,h.jsx)("div",{children:ut?(0,h.jsxs)("div",{className:Q,style:{...De,position:bt},children:[_?(0,h.jsx)("div",{style:{...Te,position:bt},onClick:yt=>i?.(yt)}):null,q.Children.map(m,yt=>(0,q.isValidElement)(yt)?(0,q.cloneElement)(yt,{style:{position:"relative",zIndex:100001,...yt.props.style}}):yt)]}):null})})};var u=B(434),v={};v.styleTagTransform=pt(),v.setAttributes=rt(),v.insert=P().bind(null,"head"),v.domAPI=R(),v.insertStyleElement=Ft();var k=b()(u.Z,v);const D=u.Z&&u.Z.locals?u.Z.locals:void 0,L=({open:n,close:i,footer:d,header:m,className:j,style:_,children:T,width:Q="300px",mountNode:ot,position:ut="right",relative:bt})=>{const yt=["drawer-wrap",ut,n?"open":"",...j?.split(" ")??[]].filter(Boolean).map(vt=>D[vt]).join(" ");return(0,h.jsx)(Nr,{open:n,close:i,delay:250,hasMask:!0,relative:bt,mountNode:ot,className:"huxy-drawer",children:(0,h.jsx)("div",{className:yt,style:{width:Q,position:bt?"absolute":"fixed","--footerHeight":d?"44px":"0px",..._},children:(0,h.jsxs)("div",{className:D["drawer-container"],children:[(0,h.jsxs)("div",{className:D["drawer-header"],children:[(0,h.jsx)("span",{className:`link ${D["ico-close"]}`,onClick:vt=>i?.(vt)}),(0,h.jsx)("div",{children:m})]}),(0,h.jsx)("div",{className:D["drawer-content"],children:T}),d?(0,h.jsx)("div",{className:D["drawer-footer"],children:d}):null]})})})},st=(n,i,d="click")=>{(0,q.useEffect)(()=>{const m=_=>{const T=ce(n)?n.current:n;T?.contains&&!T.contains(_.target)&&i(_)},j=typeof d=="string"?[d]:d;return j.map(_=>{document.addEventListener(_,m,!1)}),()=>{j.map(_=>{document.removeEventListener(_,m,!1)})}},[n,i,d])},kt=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",jt=(n="")=>n.replace(/^\S/,i=>i.toUpperCase()),ct=n=>{if(fe())return n=ce(n)?n.current:n??document.body,n.getBoundingClientRect?.()},Ut=n=>{if(!fe())return;const i=document.createElement("div");return i.innerHTML=n,i.children[0]},ue=(n,i={},d=!1)=>{if(rr(n)){if(d){let m="";Object.keys(i).map(j=>{m+=`${j}: ${i[j]};`}),n.style=m;return}Object.keys(i).map(m=>n.style.setProperty(m,i[m]))}},Ye=(n=350)=>new Promise(i=>setTimeout(i,n)),or=(n=100)=>{const i=Date.now();for(;Date.now()-i<=n;);},ve=Ye,nr=async(n,i=15)=>{if(!fe())return;if(typeof n=="string"&&(n=Ut(n)),n=ce(n)?n.current:n,!rr(n))return{};const d=n.cloneNode(!0);ue(d,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(d),await ve(i);const m=ct(d);return n.parentNode.removeChild(d),m},Oe=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,de=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ar=(n,i)=>{i=`huxy-drop-arrow-${i}`;const d=n.getAttribute("class")??"";Oe.test(d)?n.setAttribute("class",d.replace(de,i)):n.setAttribute("class",`${d} ${i}`)},Ne=async(n,i,d)=>{const{left:m,right:j,top:_,bottom:T}=ct(n),{width:Q,height:ot}=ie(),{width:ut,height:bt}=await nr(i);if(j<0||T<0||m>Q||_>ot)return{};if(d==="vertical"){const yt={left:m+"px",top:T+10+"px",right:"auto",bottom:"auto"};let vt="lt";m+ut>Q&&(yt.left=j-ut+"px",vt="rt"),T+10+bt>ot&&(yt.top=_-10-bt+"px",vt=vt==="lt"?"lb":"rb"),ue(i,yt),ar(i,vt)}else{const yt={left:j+10+"px",top:_+"px",right:"auto",bottom:"auto"};let vt="tl";j+10+ut>Q&&(yt.left=m-10-ut+"px",vt="tr"),_+bt>ot&&(yt.top=T-bt+"px",vt=vt==="tl"?"bl":"br"),ue(i,yt),ar(i,vt)}},co=(n,i,d="horizontal")=>{const m=br(Ne),j=()=>m(n,i,d);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const _=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),ue(i,{left:"",top:"",right:"",bottom:""})};return Ne(n,i,d),_},to=({open:n,delay:i=280,children:d,mountNode:m,style:j,..._})=>{const[T]=Ve(n,i);return(0,h.jsx)(_e,{mountNode:m,children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{style:{...j,display:T?"block":"none"},..._,children:d})})})};var ir=B(503),Ze={};Ze.styleTagTransform=pt(),Ze.setAttributes=rt(),Ze.insert=P().bind(null,"head"),Ze.domAPI=R(),Ze.insertStyleElement=Ft();var eo=b()(ir.Z,Ze);const c=ir.Z&&ir.Z.locals?ir.Z.locals:void 0,x=({trigger:n="click",type:i,dropList:d,className:m,children:j,targetProps:_,...T})=>{const[Q,ot]=(0,q.useState)(!1),ut=(0,q.useRef)(),bt=(0,q.useRef)(),yt=(0,q.useRef)();st(ut,Bt=>Q&&ot(!1),[...new Set(["click",n.toLowerCase()])]),(0,q.useEffect)(()=>()=>yt.current?.(),[]);const vt=Bt=>{Bt.preventDefault(),ot(!0),yt.current=co(ut.current,bt.current,i)},Kt={[`on${jt(n)}`]:vt},qt=["drop-wrap",Q?"open":"",m].filter(Boolean).map(Bt=>c[Bt]).join(" "),Nt=kt(d)?d:d?.(()=>ot(!1),Q);return(0,h.jsxs)("span",{ref:ut,className:c["drop-target"],..._,...Kt,children:[j,(0,h.jsx)(to,{open:Q,className:"huxy-drop",children:(0,h.jsx)("div",{ref:bt,className:qt,...T,children:Nt})})]})},E=(n,i,d)=>{if(!fe())return;d=ce(d)?d.current:d??document.body;const m=document.createElement("span");m.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),i&&ue(m,i),m.innerText=(n??"").replace(/[\r\n]/g,""),d.appendChild(m);const j=m.getBoundingClientRect();return d.removeChild(m),j};var w=B(918),g={};g.styleTagTransform=pt(),g.setAttributes=rt(),g.insert=P().bind(null,"head"),g.domAPI=R(),g.insertStyleElement=Ft();var et=b()(w.Z,g);const at=w.Z&&w.Z.locals?w.Z.locals:void 0,nt=({title:n,placement:i="topRight",children:d,ellipsis:m,className:j,..._})=>(0,h.jsx)("span",{className:`${at[`huxy-tooltip-${i}`]}${j?` ${j}`:""}`,tooltip:n??d,..._,children:(0,h.jsx)("span",{className:m?at.ellipsis:"",children:d})}),tt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},J=n=>{const{children:i,style:d}=n,m=typeof i=="string",j=m?i:i?.props?.title??i?.props?.children,_=(0,q.useRef)(),[T,Q]=(0,q.useState)(!0);return(0,q.useEffect)(()=>{if(_.current){const{width:ot}=E(j,null,_.current.parentNode),{width:ut}=ct(_.current),bt=~~ot>~~ut;bt!==T&&Q(bt)}},[j]),(0,h.jsx)("span",{ref:_,style:{display:"flex",width:"100%",...d},children:T?m?(0,h.jsx)(nt,{...n,ellipsis:!0}):(0,h.jsx)("span",{style:tt,children:i}):m?i:i?.props?.children})},Ct=n=>n.children==null?"":(0,h.jsx)(J,{...n});class $t extends q.default.Component{state={error:null};static getDerivedStateFromError(i){return{error:i}}componentDidCatch(i,d){const{errorReport:m}=this.props;typeof m=="function"&&m({error:i,info:d.componentStack})}render(){const{error:i}=this.state,{fallback:d,children:m}=this.props;return i?d(i):m}}const It=n=>i=>{if(typeof i=="function"||typeof i?.render=="function")return(0,h.jsx)(i,{});if(typeof i=="string"){const d=n?.[i];return d?(0,h.jsx)(d,{}):(0,h.jsx)("i",{className:i})}return i??null},St=n=>It(n),At=n=>({icon:i,defaultIcon:d})=>i?St(n)(i):i===!1?null:d,Rt=["","webkit","moz","ms"],gt=n=>Rt.map(i=>i?`${i}FullscreenElement`:"fullscreenElement").find(i=>n[i]),xt=n=>Rt.map(i=>i?`${i}RequestFullscreen`:"requestFullscreen").find(i=>n[i]),Ht=n=>Rt.map(i=>i?`${i}ExitFullscreen`:"exitFullscreen").find(i=>n[i]),Jt=Rt.map(n=>`${n}fullscreenchange`),te=n=>{if(!fe())return;n=ce(n)?n.current:n??document.body;const i=gt(document),d=xt(n),m=Ht(document);document[i]?document[m]?.():n[d]?.()},xe=n=>fe()?(Jt.map(i=>document.addEventListener(i,n,!1)),()=>Jt.map(i=>document.removeEventListener(i,n,!1))):void 0,Ee=n=>(0,h.jsx)("i",{...n,children:"..."}),Pe=({panel:n,fullIcon:i=Ee,exitIcon:d=Ee,...m})=>{const j=ce(n)?n.current:n,[_,T]=(0,q.useState)();(0,q.useEffect)(()=>{const ot=xe(()=>{T(ut=>!ut)});return()=>ot()},[]);const Q=_?d:i;return(0,h.jsx)(Q,{onClick:ot=>te(j),...m})};var je=B(249),Fe={};Fe.styleTagTransform=pt(),Fe.setAttributes=rt(),Fe.insert=P().bind(null,"head"),Fe.domAPI=R(),Fe.insertStyleElement=Ft();var sr=b()(je.Z,Fe);const Pr=je.Z&&je.Z.locals?je.Z.locals:void 0,Ie=({gutter:n=10,className:i,overflow:d="hidden",...m},j)=>{const _=i?` ${i}`:"";let T=10;if(Array.isArray(n)){const Q=[...n];n=Q[0],T=Q[1]??Q[0]}return(0,h.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(T/2)}px`,overflow:d},children:(0,h.jsx)("div",{className:`row${_}`,...m,ref:j})})},Se=(0,q.forwardRef)(Ie),Ir=({rowProps:n,colProps:i,children:d,Row:m=Se,Col:j=Cr})=>{const _=[];return q.Children.map(d,T=>{T&&(T.type?.description==="react.fragment"?_.push(...T.props.children):_.push(T))}),(0,h.jsx)(m,{...n,children:_.map((T,Q)=>(0,h.jsx)(j,{...i,...T.props.itemprops,children:T},`huuxy_grid_${Q}`))})},jr=(n,i)=>(0,h.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...i}),se=n=>{const{error:i={},info:d=""}=n||{},{message:m,stack:j,errMsg:_}=i;let T=_||j||i.toString();T=`${T}
${d}`.replace(/\r|\n|\r\n/g,"<br/>"),T=T.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),T=T.replace(/\s/g,"&nbsp;");const Q=m?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,h.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[jr(T,{style:{color:"red"}}),Q&&(0,h.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${Q}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Ue=({children:n,report:i})=>{const d=(0,q.useRef)();return d.current?.state&&(d.current.state.error=null),(0,h.jsx)($t,{ref:d,fallback:(m,j)=>se({error:m,info:j}),errorReport:i,children:n})},ze=(n,i)=>Object.keys(i).map(d=>n.style[d]=i[d]),Sr=(n,i)=>Object.keys(i).map(d=>n.style[d]=""),Rr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Xr=({left:n,top:i,width:d,height:m})=>({left:`${n}px`,top:`${i}px`,width:`${d}px`,height:`${m}px`}),Ke=n=>(0,h.jsx)("i",{...n,children:"..."}),lr=n=>{const{left:i,top:d}=ct(n),{width:m,height:j}=ie(n);return{left:i,top:d,width:m,height:j}},Mr=({panel:n,target:i,fullIcon:d=Ke,exitIcon:m=Ke})=>{n=ce(n)?n.current:n||document.body;const[j,_]=(0,q.useState)(),T=(0,q.useRef)();(0,q.useEffect)(()=>{T.current={...Rr,...Xr(lr(n))}},[n]);const Q=(ut,bt)=>{if(ut){const yt=Xr(lr((typeof i=="function"?i:()=>document.getElementsByClassName(i)[0])()));ze(bt,T.current),setTimeout(()=>{ze(bt,yt)},0)}else Sr(bt,T.current);_(ut)},ot=j?m:d;return(0,h.jsx)(ot,{onClick:ut=>Q(!j,n)})};var Xe=B(548),ge={};ge.styleTagTransform=pt(),ge.setAttributes=rt(),ge.insert=P().bind(null,"head"),ge.domAPI=R(),ge.insertStyleElement=Ft();var qr=b()(Xe.Z,ge);const we=Xe.Z&&Xe.Z.locals?Xe.Z.locals:void 0,ro=({open:n,close:i,hasMask:d=!0,cancelText:m="\u53D6\u6D88",submit:j,submitText:_="\u786E\u5B9A",title:T="Modal \u5F39\u7A97",className:Q,children:ot,delay:ut=250,...bt})=>{const yt=["modal-wrap",n?"open":"",...Q?.split(" ")??[]].filter(Boolean).map(vt=>we[vt]).join(" ");return(0,h.jsx)(Nr,{open:n,close:i,delay:ut,hasMask:d,className:"huxy-modal",children:(0,h.jsx)("div",{className:yt,...bt,children:(0,h.jsxs)("div",{className:we["modal-container"],children:[(0,h.jsx)("div",{className:we["modal-header"],children:T}),(0,h.jsx)("div",{className:we["modal-content"],children:ot}),(0,h.jsxs)("div",{className:we["modal-footer"],children:[(0,h.jsx)("div",{className:`${we.btn} ${we.left}`,onClick:vt=>i?.(vt),children:m}),(0,h.jsx)("div",{className:`${we.btn} ${we.right}`,onClick:vt=>j?.(vt),children:_})]})]})})})};var oo=B(990),cr={};cr.styleTagTransform=pt(),cr.setAttributes=rt(),cr.insert=P().bind(null,"head"),cr.domAPI=R(),cr.insertStyleElement=Ft();var Mo=b()(oo.Z,cr);const Bo=oo.Z&&oo.Z.locals?oo.Z.locals:void 0,Gr=({global:n,absolute:i})=>(0,h.jsx)("div",{className:`spinner${n?" global":""}${i?" absolute":""}`,children:(0,h.jsx)("figure",{className:"spinning"})});var Br=B(232),Lr={};Lr.styleTagTransform=pt(),Lr.setAttributes=rt(),Lr.insert=P().bind(null,"head"),Lr.domAPI=R(),Lr.insertStyleElement=Ft();var Lo=b()(Br.Z,Lr);const Hr=Br.Z&&Br.Z.locals?Br.Z.locals:void 0,xo=n=>n?.filter?.(i=>typeof i=="function"),Ho=(n,i)=>{const d=(0,q.useRef)(),{loading:m,title:j,plugins:_,children:T,className:Q,...ot}=n,ut=xo(_),bt=ut?.length,yt=Q?` ${Q}`:"",vt=ce(i)?i:d;return(0,h.jsxs)("div",{className:`${Hr.panel}${yt}`,...ot,ref:vt,children:[(j||bt)&&(0,h.jsxs)("div",{className:Hr["panel-header"],children:[j&&(0,h.jsx)("h4",{className:Hr["panel-title"],children:j}),bt&&(0,h.jsx)("div",{className:Hr["panel-plugins"],children:ut.map((Kt,qt)=>(0,h.jsx)("span",{className:`link ${Hr.link}`,children:(0,h.jsx)(Kt,{panel:vt})},qt))})]}),(0,h.jsx)("div",{className:Hr["panel-body"],children:T}),m&&(0,h.jsx)(Gr,{})]})},go=(0,q.forwardRef)(Ho),no=n=>Ae(n)==="array",Wo=n=>no(n)&&!!n.length,yo=({to:n,preventDefault:i,stopPropagation:d,...m})=>i?(0,h.jsx)("span",{...m}):(0,h.jsx)("a",{href:n,...m}),bo=({item:n,...i})=>(0,h.jsx)("ul",{...i}),vo=(n,...i)=>{const d={};return Object.keys(n).filter(Boolean).map(m=>{d[m]=j=>n[m](j,...i)}),d},wo=({data:n=[],events:i={},List:d=bo,Link:m=yo,leftIcon:j,rightIcon:_,isHorizontal:T,isCollapsed:Q,level:ot=0,parentOpen:ut=!0})=>{const bt=Q&&!ot,yt=!T&&!Q&&!ut;return n.map(vt=>{const{name:Kt,path:qt,icon:Nt,rightIcon:Bt,active:Pt,open:ee,children:ke,linkProps:Re}=vt,Me=Wo(ke),he=vt.id||qt||Kt,Be=bt?vt.title??Kt:void 0,qe=yt?"hidden":"",Ge=Nt??j,Ce=Bt??_,zr=Ge?(0,h.jsx)("div",{className:"node-left-icon",children:Ge===!0?(0,h.jsx)("i",{className:"default-left-icon"}):Ge}):null,hr=Kt?(0,h.jsx)("div",{className:"node-text",children:(0,h.jsx)("span",{children:Kt})}):null;if(Me){const rn=vo(i,vt,ot),fo=[qe,ee?"open":""].filter(Boolean).join(" ");return(0,h.jsxs)("li",{className:fo,"has-children":"true",...rn,children:[(0,h.jsxs)(m,{title:Be,className:`link${Pt?" active":""}`,to:qt,preventDefault:!0,stopPropagation:!1,...Re,children:[zr,hr,Ce?(0,h.jsx)("div",{className:"node-right-icon",children:Ce===!0?(0,h.jsx)("i",{className:"default-right-icon"}):Ce}):null]}),(0,h.jsx)(d,{item:vt,children:wo({data:ke,events:i,List:d,Link:m,leftIcon:j,rightIcon:_,isHorizontal:T,isCollapsed:Q,level:ot+1,parentOpen:!!ee})})]},he)}return(0,h.jsx)("li",{className:qe,children:(0,h.jsxs)(m,{title:Be,className:`link${Pt?" active":""}`,to:qt,...Re,children:[zr,hr]})},he)})},uo=wo,Vo=(n,...i)=>(0,h.jsx)("div",{"v-html":n,...i});var ur=B(575),Wr={};Wr.styleTagTransform=pt(),Wr.setAttributes=rt(),Wr.insert=P().bind(null,"head"),Wr.domAPI=R(),Wr.insertStyleElement=Ft();var ko=b()(ur.Z,Wr);const xn=ur.Z&&ur.Z.locals?ur.Z.locals:void 0,ho=n=>(0,h.jsx)("div",{style:{padding:"6px 15px"},children:n}),Co=({activekey:n,tabs:i=[],switchTab:d,trackColor:m,flex:j,..._},T)=>{const[Q,ot]=(0,q.useState)(n??i[0]?.key),[ut,bt]=(0,q.useState)({}),yt=(0,q.useRef)({}),vt=(0,q.useRef)();(0,q.useEffect)(()=>{const Nt=yt.current[Q];Nt&&Kt(Nt)},[]);const Kt=Nt=>{const{left:Bt,width:Pt}=ct(Nt),ee=ct(vt.current).left;bt({left:Bt-ee,width:Pt})},qt=(Nt,Bt)=>{Nt.stopPropagation(),ot(Bt),typeof d=="function"&&d(Bt),Kt(Nt.currentTarget)};return(0,h.jsxs)("div",{className:"tabs-header-wrap",..._,ref:T,children:[(0,h.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:vt,children:i.map(Nt=>(0,h.jsx)("li",{ref:Bt=>yt.current[Nt.key]=Bt,className:`th-item${Q===Nt.key?" active":""}`,onClick:Bt=>qt(Bt,Nt.key),children:typeof Nt.renderTabs=="function"?Nt.renderTabs(Nt,Q===Nt.key):ho(Nt.value)},Nt.key))}),(0,h.jsx)("div",{className:"th-track",style:{...ut,color:m}})]})},Yo=(0,q.forwardRef)(Co),Eo=(n,i,d="id",m="children")=>{if(!no(n))return null;const j=_=>{for(let T=0,Q=_.length;T<Q;T++){const ot=_[T];if(ot[d]===i)return[ot];if(no(ot[m])){const ut=j(ot[m]);if(ut)return[ot].concat(ut)}}};return j(n)},Zo=n=>++n,ao=()=>{const[,n]=(0,q.useState)(0);return(0,q.useCallback)(()=>n(Zo),[])},jo=n=>{const{children:i,open:d}=n;let m=0;if(d&&i?.length){m=i.length;let j=0;return i.map(_=>j+=jo(_)),m+j}return m},So=({item:n,style:i,...d})=>(0,h.jsx)("ul",{style:{...i,"--count":jo(n)},...d});var io=B(942),_r={};_r.styleTagTransform=pt(),_r.setAttributes=rt(),_r.insert=P().bind(null,"head"),_r.domAPI=R(),_r.insertStyleElement=Ft();var gn=b()(io.Z,_r);const Uo=io.Z&&io.Z.locals?io.Z.locals:void 0,Ko=n=>(0,h.jsx)("ul",{...n}),_o=(n,i)=>n?So:({item:d,...m})=>(0,h.jsx)(Ko,{className:i==="right"?"left":"",...m}),Xo=n=>{const{data:i=[],collapsed:d=!1,type:m="vertical",Link:j,width:_,bgColor:T,itemHeight:Q,collapsedWidth:ot,itemPadding:ut,style:bt,className:yt,...vt}=n,Kt=(0,q.useRef)(),qt=(0,q.useRef)();(0,q.useEffect)(()=>()=>clearTimeout(Kt.current),[]);const Nt=ao(),Bt=m==="horizontal",Pt=!Bt&&d,ee={onClick:(qe,Ge)=>{if(qe.stopPropagation(),!Bt&&!Pt){const Ce=Eo(i,Ge.path,"path"),zr=Ce[Ce.length-1];zr.open=!zr.open,Nt()}},onMouseEnter:(qe,Ge,Ce)=>{Pt&&!Ce&&(clearTimeout(Kt.current),qt.current.style.width="var(--maxWidth)")},onMouseLeave:(qe,Ge,Ce)=>{Pt&&!Ce&&(Kt.current=setTimeout(()=>qt.current.style.width="",200))}},ke=(Bt?["huxy-horizontal-tree",yt]:["huxy-tree",yt,Pt?"collapsed":""]).filter(Boolean).join(" "),{float:Re,...Me}=vt?.style??{},he={"--bgColor":T,"--itemHeight":Q,"--nodeListWidth":_,...Me};Bt?(he["--itemPadding"]=ut,he["--nodeFloat"]=Re):(he["--width"]=_,he["--collapsedWidth"]=ot);const Be=_o(!Bt&&!Pt,Re);return(0,h.jsx)("div",{ref:qt,className:ke,style:he,...vt,children:(0,h.jsx)("div",{className:"huxy-tree-track",children:(0,h.jsx)("ul",{className:"huxy-tree-root",children:uo({data:i,events:ee,List:Be,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Bt,isCollapsed:Pt})})})})},Fo=()=>{const[n,i]=Tr(ie());return(0,q.useEffect)(()=>{const d=()=>i(ie());return window.addEventListener("resize",d,!1),()=>window.removeEventListener("resize",d,!1)},[]),n},zo=({menu:n,curName:i,Link:d})=>n.map(m=>{const{path:j,name:_,open:T,children:Q}=m,ot=_===i;return Q?.length?(0,h.jsxs)("li",{className:T?"open":"",children:[(0,h.jsx)(d,{to:{query:{name:_}},className:`link${ot?" active":""}`,preventDefault:!0,children:(0,h.jsx)("span",{children:_})}),(0,h.jsx)("ul",{children:(0,h.jsx)(zo,{menu:Q,curName:_,Link:d})})]},j||_):(0,h.jsx)("li",{children:(0,h.jsx)(d,{to:{query:{name:_}},className:`link${ot?" active":""}`,children:(0,h.jsx)("span",{children:_})})},j||_)}),Ao=zo,qo=(n={})=>{const i={};return Object.keys(n).map(d=>{n[d]!=null&&(i[d]=n[d])}),i},$o=(n=0,i)=>{fe()&&(i=ce(i)?i.current:i??window,i.scrollTo?.({top:n,behavior:"smooth"}))},Go=(n=()=>{},i=60)=>{let d=null;return function(...m){d||(n.apply(this,m),d=setTimeout(()=>d=null,i))}},so=(n,i=null,d=!1)=>[...n||[]].sort((m,j)=>{const _=i?m[i]:m,T=i?j[i]:j;return!isNaN(Number(_))&&!isNaN(Number(_))?d?T-_:_-T:typeof _=="string"&&typeof T=="string"?d?T.localeCompare(_):_.localeCompare(T):typeof _=="string"&&typeof T=="number"?d?-1:1:typeof _=="number"||typeof _=="string"?d?1:-1:d?-1:1}),Jo=()=>fe()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Do=({curName:n,itemList:i})=>{const d=(0,q.useRef)(!1),m=(0,q.useRef)(""),[j,_]=(0,q.useState)(n);return(0,q.useEffect)(()=>{if(i.current=qo(i.current),!n){const ot=Object.keys(i.current).map(ut=>({name:ut,offsetTop:i.current[ut]?.offsetTop??0}));_(ot[0]?.name)}let T=0,Q=0;if(m.current!==n){m.current=n;const ot=i.current[n];d.current=!0,ot?($o(ot.offsetTop),T=setTimeout(()=>d.current=!1,1050)):Q=setTimeout(()=>{window.scrollTo?.({top:i.current[n]?.offsetTop??0,behavior:"instant"}),T=setTimeout(()=>d.current=!1,1050)},550)}return()=>{clearTimeout(T),clearTimeout(Q),d.current=!1}},[n]),(0,q.useEffect)(()=>{const T=Go(()=>{if(!d.current){const Q=so(Object.keys(i.current).map(ot=>({name:ot,offsetTop:i.current[ot]?.offsetTop??0})),"offsetTop",!0).find(ot=>ot.offsetTop<Jo())?.name;m.current!==Q&&(m.current=Q,_(Q))}});return window.addEventListener("scroll",T,!1),()=>window.removeEventListener("scroll",T,!1)},[]),[j]},Qo=/!\[.*\]\((.*)\)/g,To=async(n,i,d)=>{const m={};for(let j=0,_=n.length;j<_;j++){const T=n[j],Q=T.slice(2);m[T]=await d({folder:i,name:Q})}return m},Vr=async(n,{folder:i},d)=>{const m=[...n.matchAll(Qo)].filter(Boolean).map(j=>j[1]);if(m?.length){const j=await To(m,i,d);m.map(_=>{n=n.replace(_,j[_])})}return n},tn=({item:n,marked:i,getContext:d})=>{const[m,j]=(0,q.useState)("");return(0,q.useEffect)(()=>{(async()=>{try{const _=await d({...n,type:".md"}),T=await Vr(_,n,d),Q=typeof i=="function"?i.parse(T):Q;j(Q)}catch(_){j(_?.message)}})()},[]),(0,h.jsxs)("div",{className:"huxy-content",children:[jr(m),!m&&(0,h.jsx)(Gr,{global:!0})]})},dr=({router:n,curName:i,context:d,marked:m,getContext:j})=>{const _=(0,q.useRef)({}),[T]=Do({curName:i,itemList:_});return(0,q.useEffect)(()=>{T&&n.push({query:{name:T}})},[T]),(0,h.jsx)("div",{className:"huxy-anchor-page",children:d.map((Q,ot)=>(0,h.jsxs)("div",{className:"huxy-anchor-item",ref:ut=>_.current[Q.name]=ut,children:[(0,h.jsx)("h2",{children:`${Q.name}`}),(0,h.jsx)(tn,{item:Q,marked:m,getContext:j})]},Q.name))})},en=n=>{const i=[];return n.map(d=>{const[m,j]=d.name.split("/"),_=i.find(T=>T.name===m);_?_.children.push({name:j,folder:m}):i.push({name:m,children:[{name:j,folder:m}]})}),i};var Jr=B(556),Fr={};Fr.styleTagTransform=pt(),Fr.setAttributes=rt(),Fr.insert=P().bind(null,"head"),Fr.domAPI=R(),Fr.insertStyleElement=Ft();var yn=b()(Jr.Z,Fr);const bn=Jr.Z&&Jr.Z.locals?Jr.Z.locals:void 0,Oo=(n,i,d)=>({sidebar:n.find(m=>m.name===i)?.children??[],listEle:n.map(({name:m,children:j})=>(0,h.jsx)("li",{children:(0,h.jsx)(d,{to:{query:{folder:m,name:j[0]?.name}},className:`link${m===i?" active":""}`,children:(0,h.jsx)("span",{children:m})})},m))}),Qr=n=>{const{params:i,router:d,Link:m,listFiles:j,getContext:_,marked:T,title:Q,routeLink:ot,routeName:ut,className:bt,style:yt}=n,{folder:vt,name:Kt}=i,{width:qt}=Fo(),[Nt,Bt]=(0,q.useState)([]),[Pt,ee]=(0,q.useState)(!1);(0,q.useEffect)(()=>{(async()=>{const he=await j(),Be=en(he);Bt(Be),vt||d.push({query:{folder:Be[0]?.name,name:Be[0]?.children[0]?.name}})})()},[]);const ke=qt<=1024,{sidebar:Re,listEle:Me}=Oo(Nt,vt,m);return(0,h.jsxs)("div",{className:`huxy-doc-frame ${bt??""}`,style:yt,children:[(0,h.jsxs)("div",{className:"huxy-doc-header",children:[(0,h.jsx)("div",{className:"huxy-doc-banner",children:Q||"\u6587\u6863\u7CFB\u7EDF"}),(0,h.jsx)("ul",{className:"huxy-doc-nav",children:ke?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{className:"huxy-doc-collapsed",children:(0,h.jsx)("span",{className:"link",onClick:he=>{he.stopPropagation(),ee(!Pt)},children:(0,h.jsx)($r,{type:Pt?"right":""})})}),(0,h.jsx)(L,{open:Pt,close:()=>ee(!1),width:"220px",children:(0,h.jsx)("ul",{className:"huxy-doc-menu-drawer",children:Me})})]}):Me}),ot?(0,h.jsx)("div",{className:"huxy-doc-back",children:(0,h.jsx)(m,{to:ot,children:(0,h.jsx)("span",{children:ut??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,h.jsxs)("div",{className:"huxy-doc-container",children:[(0,h.jsx)("div",{className:"huxy-doc-main-page",children:(0,h.jsx)(dr,{router:d,curName:Kt,context:Re,marked:T,getContext:_})}),(0,h.jsx)("div",{className:"huxy-doc-menu",children:(0,h.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,h.jsx)(Ao,{menu:Re,curName:Kt,Link:m})})})]})]})}})();var s=C.PC,F=C.rK,I=C.lr,dt=C.JX,A=C.dy,S=C.Ud,H=C.mH,p=C.SV,$=C.Hn,z=C.rj,Z=C.V7,V=C.AN,K=C.zd,ht=C.BQ,wt=C.Ur,Dt=C.u_,mt=C.s_,Ot=C.h_,Yt=C.X2,Qt=C.$j,N=C.GK,Vt=C.u,Zt=C.mp,ae=C.C2,le=C.pC,pr=C.ff,mr=C.d2,Ar=C.Uw},78611:function(ye,Gt,_t){var Y;_t.d(Gt,{Bv:function(){return F},rU:function(){return C},tv:function(){return dt},yj:function(){return I}});var l=_t(27378),Mt={990:(A,S,H)=>{H.d(S,{Z:()=>K});var p=H(601),$=H.n(p),z=H(609),Z=H.n(z),V=Z()($());V.push([A.id,`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,""]),V.locals={};const K=V},267:(A,S,H)=>{H.d(S,{Z:()=>K});var p=H(601),$=H.n(p),z=H(609),Z=H.n(z),V=Z()($());V.push([A.id,`.Iuy_e {
  text-decoration: none;
  cursor: pointer;
  color: var(--linkColor);
  background-color: transparent;
  font-weight: 500;
  transition: color 0.3s;
}
.Iuy_e:active, .Iuy_e.D3oJg {
  color: var(--linkActiveColor, #42a5f5);
}
.Iuy_e:hover {
  color: var(--linkHoverColor, #2196f3);
}
.Iuy_e[disabled] {
  cursor: not-allowed;
  opacity: 0.7;
}
.Iuy_e[disabled]:active, .Iuy_e[disabled].D3oJg, .Iuy_e[disabled]:hover {
  color: var(--linkColor);
}
`,""]),V.locals={link:"Iuy_e",active:"D3oJg"};const K=V},609:A=>{A.exports=function(S){var H=[];return H.toString=function(){return this.map(function(p){var $="",z=typeof p[5]<"u";return p[4]&&($+="@supports (".concat(p[4],") {")),p[2]&&($+="@media ".concat(p[2]," {")),z&&($+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),$+=S(p),z&&($+="}"),p[2]&&($+="}"),p[4]&&($+="}"),$}).join("")},H.i=function(p,$,z,Z,V){typeof p=="string"&&(p=[[null,p,void 0]]);var K={};if(z)for(var ht=0;ht<this.length;ht++){var wt=this[ht][0];wt!=null&&(K[wt]=!0)}for(var Dt=0;Dt<p.length;Dt++){var mt=[].concat(p[Dt]);z&&K[mt[0]]||(typeof V<"u"&&(typeof mt[5]>"u"||(mt[1]="@layer".concat(mt[5].length>0?" ".concat(mt[5]):""," {").concat(mt[1],"}")),mt[5]=V),$&&(mt[2]&&(mt[1]="@media ".concat(mt[2]," {").concat(mt[1],"}")),mt[2]=$),Z&&(mt[4]?(mt[1]="@supports (".concat(mt[4],") {").concat(mt[1],"}"),mt[4]=Z):mt[4]="".concat(Z)),H.push(mt))}},H}},601:A=>{A.exports=function(S){return S[1]}},837:(A,S,H)=>{var p,$=H(810),z=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,K=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0};function wt(Dt,mt,Ot){var Yt,Qt={},N=null,Vt=null;Ot!==void 0&&(N=""+Ot),mt.key!==void 0&&(N=""+mt.key),mt.ref!==void 0&&(Vt=mt.ref);for(Yt in mt)V.call(mt,Yt)&&!ht.hasOwnProperty(Yt)&&(Qt[Yt]=mt[Yt]);if(Dt&&Dt.defaultProps)for(Yt in mt=Dt.defaultProps,mt)Qt[Yt]===void 0&&(Qt[Yt]=mt[Yt]);return{$$typeof:z,type:Dt,key:N,ref:Vt,props:Qt,_owner:K.current}}p=Z,S.jsx=wt,S.jsxs=wt},322:(A,S,H)=>{A.exports=H(837)},62:A=>{var S=[];function H(z){for(var Z=-1,V=0;V<S.length;V++)if(S[V].identifier===z){Z=V;break}return Z}function p(z,Z){for(var V={},K=[],ht=0;ht<z.length;ht++){var wt=z[ht],Dt=Z.base?wt[0]+Z.base:wt[0],mt=V[Dt]||0,Ot="".concat(Dt," ").concat(mt);V[Dt]=mt+1;var Yt=H(Ot),Qt={css:wt[1],media:wt[2],sourceMap:wt[3],supports:wt[4],layer:wt[5]};if(Yt!==-1)S[Yt].references++,S[Yt].updater(Qt);else{var N=$(Qt,Z);Z.byIndex=ht,S.splice(ht,0,{identifier:Ot,updater:N,references:1})}K.push(Ot)}return K}function $(z,Z){var V=Z.domAPI(Z);V.update(z);var K=function(ht){if(ht){if(ht.css===z.css&&ht.media===z.media&&ht.sourceMap===z.sourceMap&&ht.supports===z.supports&&ht.layer===z.layer)return;V.update(z=ht)}else V.remove()};return K}A.exports=function(z,Z){Z=Z||{},z=z||[];var V=p(z,Z);return function(K){K=K||[];for(var ht=0;ht<V.length;ht++){var wt=V[ht],Dt=H(wt);S[Dt].references--}for(var mt=p(K,Z),Ot=0;Ot<V.length;Ot++){var Yt=V[Ot],Qt=H(Yt);S[Qt].references===0&&(S[Qt].updater(),S.splice(Qt,1))}V=mt}}},793:A=>{var S={};function H($){if(typeof S[$]>"u"){var z=document.querySelector($);if(window.HTMLIFrameElement&&z instanceof window.HTMLIFrameElement)try{z=z.contentDocument.head}catch{z=null}S[$]=z}return S[$]}function p($,z){var Z=H($);if(!Z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Z.appendChild(z)}A.exports=p},173:A=>{function S(H){var p=document.createElement("style");return H.setAttributes(p,H.attributes),H.insert(p,H.options),p}A.exports=S},892:(A,S,H)=>{function p($){var z=H.nc;z&&$.setAttribute("nonce",z)}A.exports=p},36:A=>{function S($,z,Z){var V="";Z.supports&&(V+="@supports (".concat(Z.supports,") {")),Z.media&&(V+="@media ".concat(Z.media," {"));var K=typeof Z.layer<"u";K&&(V+="@layer".concat(Z.layer.length>0?" ".concat(Z.layer):""," {")),V+=Z.css,K&&(V+="}"),Z.media&&(V+="}"),Z.supports&&(V+="}");var ht=Z.sourceMap;ht&&typeof btoa<"u"&&(V+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ht))))," */")),z.styleTagTransform(V,$,z.options)}function H($){if($.parentNode===null)return!1;$.parentNode.removeChild($)}function p($){if(typeof document>"u")return{update:function(){},remove:function(){}};var z=$.insertStyleElement($);return{update:function(Z){S(z,$,Z)},remove:function(){H(z)}}}A.exports=p},464:A=>{function S(H,p){if(p.styleSheet)p.styleSheet.cssText=H;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(H))}}A.exports=S},810:A=>{var S=p=>{var $={};return it.d($,p),$},H=p=>()=>p;A.exports=Y||(Y=_t.t(l,2))}},Et={};function it(A){var S=Et[A];if(S!==void 0)return S.exports;var H=Et[A]={id:A,exports:{}};return Mt[A](H,H.exports,it),H.exports}it.n=A=>{var S=A&&A.__esModule?()=>A.default:()=>A;return it.d(S,{a:S}),S},it.d=(A,S)=>{for(var H in S)it.o(S,H)&&!it.o(A,H)&&Object.defineProperty(A,H,{enumerable:!0,get:S[H]})},it.o=(A,S)=>Object.prototype.hasOwnProperty.call(A,S),it.nc=void 0;var B={};(()=>{it.d(B,{rU:()=>to,cb:()=>eo,Bv:()=>Ze,yj:()=>ir,tv:()=>ve});var A=it(810);const S=c=>Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),H=c=>S(c)==="array",p=c=>S(c)==="object",$=c=>c?.$$typeof&&typeof c.$$typeof=="symbol"&&c.$$typeof.description==="react.element",z=c=>c?.__v_isVNode,Z=(c,x)=>Object.prototype.hasOwnProperty.call(c??{},x),V=c=>{if(!H(c)&&!p(c))return c;const x=H(c)?[]:{};for(const E in c)if(Z(c,E)){const w=c[E];x[E]=$(w)||z(w)||typeof w!="object"?w:w!==c?V(w):"cyclic"}else Object.setPrototypeOf(x,{[E]:c[E]});return x},K=V,ht=c=>S(c)==="function",wt=c=>S(c)==="promise"||p(c)&&ht(c.then),Dt=(c,x=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!wt(c))return{};let w=null,g=null;return{promiseFn:new Promise((et,at)=>{w=(nt="canceled")=>{clearTimeout(g),et({canceled:!0,errMsg:nt})},x&&(x=typeof x!="number"?12e4:x,g=setTimeout(()=>w(E),x)),c.then(nt=>{clearTimeout(g),et({result:nt,errMsg:!1})}).catch(nt=>{clearTimeout(g),at(nt)})}),cancelFn:w}},mt=c=>c?c.charAt(c.length-1)==="/"?c.slice(0,-1):c:"";var Ot=it(322);const Yt=(c,x)=>(0,Ot.jsx)("div",{dangerouslySetInnerHTML:{__html:c},...x}),Qt=c=>{const{error:x={},info:E=""}=c||{},{message:w,stack:g,errMsg:et}=x;let at=et||g||x.toString();at=`${at}
${E}`.replace(/\r|\n|\r\n/g,"<br/>"),at=at.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),at=at.replace(/\s/g,"&nbsp;");const nt=w?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Ot.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Yt(at,{style:{color:"red"}}),nt&&(0,Ot.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${nt}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},N=c=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(c),Vt=()=>{const c={};return{on:(x,E)=>{c[x]||(c[x]=[]),c[x].indexOf(E)===-1&&c[x].push(E)},emit:(x,E)=>{c[x]&&c[x].map(w=>w(E))},off:(x,E=null)=>{if(c[x]){if(typeof E!="function")return delete c[x];const w=c[x].indexOf(E);w>-1&&(c[x].splice(w,1),c[x].length||delete c[x])}}}},Zt=c=>{const x={};for(let E in c)Z(c,E)||(x[E]=c[E]);return x},ae=(c,x)=>{if(!p(c))return x;if(!p(x))return c;const E={...Zt(c),...Zt(x)},w={...c,...x};return Object.keys(E).map(g=>{Object.setPrototypeOf(w,{[g]:E[g]})}),w},le=()=>{const{on:c,emit:x,off:E}=Vt(),w={};return{getState:g=>K(w[g]),setState:(g,et=!1)=>{if(typeof g=="function"&&(g=g(K(w))),!p(g))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const at=K(g);Object.keys(at).map(nt=>{const tt=w[nt],J=at[nt],Ct=p(J)&&p(tt)?ae(tt,J):J;!et&&x(nt,Ct),w[nt]=Ct})},subscribe:(g,et)=>(c(g,et),()=>E(g,et)),unsubscribe:E,clean:g=>{typeof g=="string"?w[g]=void 0:Array.isArray(g)?g.map(et=>w[et]=void 0):Object.keys(w).map(et=>w[et]=void 0)}}},pr=c=>(x,E)=>{const[w,g]=(0,A.useState)(()=>{const tt=c?.getState(x);return tt!==void 0?tt:(E!==void 0&&c?.setState({[x]:E},!0),E)}),et=(0,A.useCallback)(tt=>c?.setState({[x]:typeof tt=="function"?tt(c?.getState(x)):tt}),[]),at=(0,A.useCallback)(tt=>c?.subscribe(x,tt),[]),nt=(0,A.useCallback)((tt=tt)=>c?.clean(tt),[]);return(0,A.useEffect)(()=>{c?.subscribe(x,tt=>g(tt))},[]),[w,et,at,nt]},mr=le(),Ar=pr(mr),h=Vt(),G=Vt(),b="push-emitter",X="replace-emitter",R="useRoute-emitter",U={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},P="/404",M={getState:()=>history.state,go:c=>history.go(c),forward:()=>history.forward(),back:()=>history.back()},rt=(c,x,E,w,g=[])=>{const et=tt=>{for(let J=0,Ct=tt.length;J<Ct;J++){const $t=tt[J],It=$t[w].split("?")[0];if(new RegExp("^"+It.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return $t;if(H($t[E])){const St=et($t[E]);if(St)return St}}},at=et(c);if(!at)return P;const{redirect:nt}=at;return nt?N(nt)?nt:g.includes(nt)?g:(g.push(nt),rt(c,nt.split("?")[0],E,w,g)):g[g.length-1]},zt=(c,x,E,w,g)=>{if(!H(c))return null;const et=Ct=>{const $t=Ct.split("/"),It=x.split("/"),St={};return $t.map((At,Rt)=>At.indexOf(":")===0&&(St[At.slice(1)]=It[Rt])),St},at=(Ct,$t)=>{const It=[],St=$t.split("/:")[0];for(let At=0,Rt=Ct.length;At<Rt;At++){const gt=Ct[At];if(gt[g]===St){gt.active=!0;const{name:xt,title:Ht,icon:Jt,params:te}=gt;It.push({name:xt,title:Ht,icon:Jt,params:te,[g]:St})}else if($t.indexOf(`${gt[g]}/`)===0){gt.active=!0;const xt=et(gt[g]),Ht=Object.keys(xt).map(Pe=>xt[Pe]).join("/"),{name:Jt,title:te,icon:xe}=gt,Ee=Ht?`${St}/${Ht}`:gt[g];It.push({name:Jt,title:te,icon:xe,[g]:Ee,params:{...gt.params,...xt}})}else if(gt[g]===$t){gt.active=!0;const xt=et(gt[g]),{[w]:Ht,...Jt}=gt;It.push({...Jt,[g]:x,params:{...Jt.params,...E,...xt}})}}return It},nt=(Ct,$t)=>{for(let It=0,St=Ct.length;It<St;It++){const At=Ct[It];if($t.indexOf(`${At[g]}/`)===0){At.active=!0;return}}},tt=Ct=>{for(let $t=0,It=Ct.length;$t<It;$t++){const St=Ct[$t],At=(St[g]||"").split("?")[0];if(At===x){St.hideMenu&&nt(Ct,St.parentPath||At),St.active=!0;const{[w]:Rt,...gt}=St;return[{...gt,params:{...gt.params,...E}}]}if(new RegExp("^"+At.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return at(Ct,At);if(H(St[w])){const Rt=tt(St[w]);if(Rt){St.active=!0,St.open=!0;const{[w]:gt,...xt}=St;return[xt,...Rt]}}}},J=tt(c)||[];return{result:c,current:J}},Ft=(c,x,E)=>c.filter(w=>w.hideMenu||w[E].indexOf("/:")>-1?!1:(H(w[x])&&(w[x]=Ft(w[x],x,E)),!0)),Lt=(c,x,E,w="children",g="path")=>{const et=rt(c,x,w,g);if(et)return{redirect:et};const{result:at,current:nt}=zt(c,x,E,w,g),tt=Ft(at,w,g);return{current:nt,menu:tt}},pt=(c,x)=>{const E=["#/","/"],w=E[!!x-0];if(!c||E.includes(c))return w;const g=c.charAt(c.length-1)==="/"?c.slice(0,-1):c;return x||g.indexOf("#/")>-1?g:`#${g}`},Tt=(c,x,E,w=!1)=>{const g=pt(x,E);return w?g:E?c&&g==="/"?c:`${c}${g}`:c?`${c}/${g}`:g},Wt=(c,x,E,w,g,et)=>{if(!H(c))return c;const at=(nt,tt="")=>nt.filter(J=>!J.denied).map(J=>{if(!et&&!J.exact&&!N(J[w])){(!J[w]||J[w]==="javascript:;")&&(J[w]="");const Ct=J[w].charAt(0)==="/"&&tt.charAt(tt.length-1)==="/"?J[w].slice(1):J[w].charAt(0)!=="/"&&tt.charAt(tt.length-1)!=="/"?`/${J[w]}`:J[w];J[w]=tt?tt+Ct:Tt(g,Ct,x)}return J.redirect&&!N(J.redirect)&&(J.redirect=Tt(g,J.redirect,x)),H(J[E])&&(J[E]=at(J[E],J[w]),!J.redirect&&J[E].length&&(J.redirect=J[E][0][w])),J});return at(c)},ne=c=>{if(!p(c))return"";const x=[];return Object.keys(c).map((E,w)=>{const g=w>0?"&":"?";x.push(`${g}${E}=${c[E]}`)}),x.join("")},Xt=(c="")=>{const[x,E]=c.split("?");if(E){const w={};return E.split("&").map(g=>{const[et,at]=g.split("=");w[et]=at}),{path:x,params:w}}return{path:x}},$r=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},q=(c,x)=>{for(let E=c.length-1,w;w=c[E--];){const{title:g,name:et}=w;if(typeof g=="string"&&g.length)return document.title=g;if((g==null||g===!0)&&et)return document.title=x?`${et}-${x}`:et;if(x)return document.title=x}},Je=c=>{const{pathname:x,search:E,hash:w}=location;if(c){const nt=pt(x,c),tt=decodeURIComponent(`${nt}${E}`),{params:J}=Xt(tt);return{path:tt,params:J}}const g=decodeURIComponent(pt(w,c)),{params:et}=Xt(g),at=mt(x);return{path:at?`${at}/${g}`:g,params:et}},Le=(c,x,E)=>{typeof c=="function"&&c({...x,stay:new Date-E})},Dr=(c,x,E,w)=>{let g=typeof c=="string"?c:c.path??"";const et=ne(c.query);N(g)||(g=Tt(E,g,w,c.exact)),window?.open(`${g}${et}`,x)},xr=(c,x,E,w)=>{if(c.target||N(c.path)){Dr(c,c.target,x,E);return}let g,et,at;if(typeof c=="string")g=c;else if(p(c))g=c.path,et=c.params,at=c.query;else return;!g||g==="."||g==="./"?g=w:g.indexOf("./")===0?g=`${w.split("?")[0]}${g.replace("./","/")}`:g.indexOf("../")===0&&(g=`${w.split("?")[0].split("/").slice(0,-1).join("/")}${g.replace("../","/")}`),g=Tt(x,g,E,c?.exact);const nt=Xt(g);g=nt.path;const tt={...nt.params,...at},J=ne(tt);return g=`${g}${J}`,et={...et,...tt},g===w?!1:{path:g,params:et}},Qe=(c,x)=>{const E=c.split(x);return E.length>1?["","/"].includes(E[1].slice(0,1)):!1},gr=Vt(),yr=c=>{const{on:x,emit:E,off:w}=gr;return{on:g=>x(c,g),emit:g=>E(c,g),off:g=>w(c,g)}},tr=c=>(x,E)=>{const{getState:w,setState:g,subscribe:et,unsubscribe:at,clean:nt}=c;return E!==void 0&&g({[x]:E},!0),{getState:()=>w(x),setState:(tt,J)=>g({[x]:tt},J),subscribe:tt=>et(x,tt),unsubscribe:()=>at(x),clean:()=>nt(x)}},er=le(),fe=tr(er),Ae=yr("push-emitter"),rr=yr("replace-emitter"),ie=fe("route-store"),br=Vt(),$e=le(),ce=pr($e),He=()=>![typeof window,typeof document].includes("undefined"),Zr=c=>{if(!He())return;const x=document.createElement("div");return x.innerHTML=c,x.children[0]};class vr extends A.default.Component{state={error:null};static getDerivedStateFromError(x){return{error:x}}componentDidCatch(x,E){const{errorReport:w}=this.props;typeof w=="function"&&w({error:x,info:E.componentStack})}render(){const{error:x}=this.state,{fallback:E,children:w}=this.props;return x?E(x):w}}const Tr=({children:c,report:x})=>{const E=(0,A.useRef)();return E.current?.state&&(E.current.state.error=null),(0,Ot.jsx)(vr,{ref:E,fallback:(w,g)=>Qt({error:w,info:g}),errorReport:x,children:c})};var wr=it(62),We=it.n(wr),pe=it(36),Ur=it.n(pe),be=it(793),kr=it.n(be),me=it(892),Cr=it.n(me),Er=it(173),Kr=it.n(Er),Ve=it(464),_e=it.n(Ve),De=it(990),Te={};Te.styleTagTransform=_e(),Te.setAttributes=Cr(),Te.insert=kr().bind(null,"head"),Te.domAPI=Ur(),Te.insertStyleElement=Kr();var Or=We()(De.Z,Te);const Nr=De.Z&&De.Z.locals?De.Z.locals:void 0,u=({global:c,absolute:x})=>(0,Ot.jsx)("div",{className:`spinner${c?" global":""}${x?" absolute":""}`,children:(0,Ot.jsx)("figure",{className:"spinning"})}),v=()=>{const c=(0,A.useRef)([]);return(0,A.useEffect)(()=>()=>{c.current.map(x=>x.cancelFn()),c.current=[]},[]),{cancelablePromise:(0,A.useCallback)((x,E=!0)=>{const w=Dt(x,E);return c.current.indexOf(w)===-1&&c.current.push(w),w.promiseFn},[])}},k=(c={})=>{const{cancelablePromise:x}=v(),[E,w]=(0,A.useState)(c),g=(0,A.useRef)({}),et=(0,A.useRef)({}),at=(0,A.useCallback)((tt=null)=>{Array.isArray(tt)&&tt.length?tt.map(J=>g.current[J]=c[J]):g.current=c},[]),nt=(0,A.useCallback)((tt,J,Ct=!1)=>{const $t=Object.keys(tt),It=JSON.stringify($t.sort());if(!et.current[It]){et.current[It]=!0,Ct&&at(Array.isArray(Ct)?Ct:$t),$t.map(St=>{g.current[St]||(g.current[St]={}),g.current[St].pending=!0}),w({...g.current});for(let St=0,At=$t.length;St<At;St++){const Rt=$t[St];x(tt[Rt]).then(gt=>{let{result:xt,errMsg:Ht}=gt;St===At-1&&(et.current[It]=!1),typeof J=="function"&&(xt=J(xt)||xt),g.current[Rt]={...xt,pending:!1},Ht===!1&&w({...g.current})}).catch(gt=>{throw St===At-1&&(et.current[It]=!1),g.current[Rt]={error:gt,pending:!1},w({...g.current}),gt})}}},[]);return[E,nt,at]},D=c=>Object.keys(c).length,L=c=>{const{Comp:x,restResolve:E,loadPromise:w,params:g,children:et}=c,[at,nt]=k(),[tt,J]=k();return(0,A.useEffect)(()=>{D(E)&&nt(E),D(w)&&J(w)},[E,w]),(0,A.useEffect)(()=>{const Ct=D(at);Ct&&Ct===D(E)&&g.store.setState(at)},[at]),(0,Ot.jsx)(x,{...g,...at,...tt,children:et})},st=c=>c===!1?null:$(c)?c:ht(c)?(0,Ot.jsx)(c,{}):(0,Ot.jsx)(u,{}),kt=({Loading:c,ErrorBoundary:x,loadedComp:E})=>{const w=(0,Ot.jsx)(A.Suspense,{fallback:st(c),children:E});return x===!1?w:ht(x)?(0,Ot.jsx)(x,{children:w}):(0,Ot.jsx)(Tr,{children:w})},jt=({Comp:c,routerProps:x,children:E})=>{const{params:w,...g}=x,{loading:et,errorBoundary:at,...nt}=w,tt=(0,Ot.jsx)(L,{Comp:c,...g,params:nt,children:E});return kt({Loading:et,ErrorBoundary:at,loadedComp:tt})},ct={},Ut=(c,x,E,w)=>wt(E)?E.then(g=>jt({Comp:c,routerProps:x,children:g.default??g})):jt({Comp:c,routerProps:x,children:E}),ue=(c,x,E)=>{const w={},g={};return p(c)?(Object.keys(c).map(et=>{const at=x.getState(et);at==null?g[et]=c[et](E):w[et]=at}),{cachedResolve:w,restResolve:g}):{cachedResolve:w,restResolve:g}},Ye=(c,x)=>{if(!p(c))return{};const E={};return Object.keys(c).map(w=>E[w]=c[w](x)),E},or=c=>{const{current:x,menu:E,...w}=c,g=x.map(nt=>{const{component:tt,resolve:J,loadData:Ct,loading:$t,errorBoundary:It,icon:St,...At}=nt;return At}),et=[...x].filter(nt=>nt.component),at=(nt=0)=>{if(!et.length)return null;const tt=et.shift(),{component:J,resolve:Ct,loadData:$t,icon:It,key:St,...At}=tt;if(typeof J=="function"||wt(J)){const Rt=At.path;let gt=ct[Rt];const{cachedResolve:xt,restResolve:Ht}=ue(Ct,w.store,At),Jt={loadPromise:Ye($t,At),restResolve:Ht,params:{current:g,...w,...At,...xt}},te=at(nt+1);if(gt)return Ut(gt,Jt,te,Rt);try{gt=J(),gt=$(gt)?J:gt}catch{gt=J}return wt(gt)?gt.then(xe=>(gt=xe.default??xe,ct[Rt]=gt,Ut(gt,Jt,te,Rt))):(ct[Rt]=gt,Ut(gt,Jt,te,Rt))}return typeof J=="string"?Zr(J):J};return at()},ve=c=>{const[x,E]=(0,A.useState)(c),[w,g]=(0,A.useState)(),[et,at]=(0,A.useState)(),nt=(0,A.useRef)(),tt=(0,A.useRef)(),J=(0,A.useRef)(),Ct=(0,A.useRef)(),$t=()=>{typeof nt.current=="function"&&(nt.current({cancel:U.cancelMsg}),nt.current=null)},It=(0,A.useCallback)(xt=>{typeof xt=="function"?E(Ht=>({...Ht,...xt(Ht)})):p(xt)&&E(Ht=>({...Ht,...xt}))},[]),St=(xt,Ht="pushState")=>{const{basepath:Jt,browserRouter:te}=Ct.current,xe=J.current,Ee=xr(xt,Jt,te,xe);if(!Ee)return;const{path:Pe,params:je}=Ee;gt({inputPath:Pe,inputParams:je},()=>history[Ht](xt?.state,"",Pe))},At=(0,A.useCallback)(xt=>St(xt),[]),Rt=(0,A.useCallback)(xt=>St(xt,"replaceState"),[]),gt=(0,A.useCallback)(({inputPath:xt="",inputParams:Ht={}},Jt)=>{const te=+new Date,{browserRouter:xe,childKey:Ee,idKey:Pe,title:je,routers:Fe,beforeRender:sr,afterRender:Pr,basepath:Ie,allowedNotFound:Se,...Ir}=Ct.current;if(!xt){const{path:se,params:Ue}=Je(xe);xt=se,Ht={...Ht,...Ue}}const jr=J.current;new Promise((se,Ue)=>{Fe?.length||Ue("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),xt!==J.current&&typeof sr=="function"?sr({path:xt,params:Ht,prevPath:jr},se,Ue):se()}).then(se=>{if(se===!1)return;const Ue=se?.path;if(Ue&&Tt(Ie,Ue,xe)!==xt){Rt(se);return}tt.current=tt.current??xt;const{redirect:ze,current:Sr,menu:Rr}=Lt(K(Fe),xt.split("?")[0],Ht,Ee,Pe);if(ze){if(Se&&ze===P&&(typeof Se=="boolean"||typeof Se=="string"&&Qe(tt.current,Se)||H(Se)&&Se.find(lr=>Qe(tt.current,lr))))return;if(H(ze)){console.error(`\u522B\u95F9\uFF0C[${[xt,...ze].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return ze===P?Rt({path:ze}):At({path:ze,exact:!0})}Jt?.(),xt?.split("?")[0]!==J.current?.split("?")[0]&&$r(),q(Sr,je);const Xr={eventBus:br,store:$e,useStore:ce,...Ir,updateRouter:It,emitRouter:ie.subscribe,router:{push:At,replace:Rt},current:Sr,menu:Rr,inputPath:tt.current,prevPath:jr,browserRouter:xe,basepath:Ie,title:je,history:{...M,goBack:lr=>At({...lr,path:jr})}};ie.setState(Xr);const Ke=or(Xr);if(J.current=xt,tt.current=null,$t(),wt(Ke)){const{promiseFn:lr,cancelFn:Mr}=Dt(Ke,{delay:U.delay,msg:{timeout:U.timeoutMsg}});return nt.current=Mr,at(!0),lr.then(Xe=>{nt.current=null;const{result:ge,errMsg:qr}=Xe,we=qr===!1?ge:qr?.timeout?Qt({error:{errMsg:`${xt} ${qr.timeout}`}}):null;we&&(at(!1),Le(Pr,Sr.slice(-1)[0],te),g(we))}).catch(Xe=>{throw nt.current=null,at(!1),Le(Pr,Sr.slice(-1)[0],te),g(Qt({error:Xe})),Xe})}Le(Pr,Sr.slice(-1)[0],te),g(Ke)}).catch(se=>{throw g(Qt({error:se})),se})},[]);return(0,A.useEffect)(()=>{const{childKey:xt="children",idKey:Ht="path",browserRouter:Jt=!1,routers:te=[],basepath:xe="",exact:Ee=!1,inputPath:Pe="",inputParams:je={},...Fe}=x,sr=mt(xe),Pr=Wt(K(te),Jt,xt,Ht,sr,Ee);Ct.current={...Fe,childKey:xt,idKey:Ht,browserRouter:Jt,routers:Pr,basepath:sr};const Ie=Jt?"popstate":"hashchange",Se=()=>gt({});return gt({inputPath:Pe,inputParams:je}),Ae.on(At),rr.on(Rt),window.addEventListener(Ie,Se,!1),()=>{$t(),Ae.off(At),rr.off(Rt),window.removeEventListener(Ie,Se,!1)}},[x]),{updateRouter:It,output:w,loading:et}},nr=c=>{const{to:x,onClick:E,preventDefault:w,stopPropagation:g=!0,exact:et=!0,target:at,...nt}=c,tt=()=>{const J=typeof x=="string"?{exact:et,path:x}:{exact:et,...x};Ae.emit(J)};return J=>{if(J.preventDefault(),g&&J.stopPropagation(),!nt?.disabled){if(!w){if(at){const{browserRouter:Ct,basepath:$t}=ie.getState();Dr(x,at,$t,Ct);return}tt()}typeof E=="function"&&E()}}};var Oe=it(267),de={};de.styleTagTransform=_e(),de.setAttributes=Cr(),de.insert=kr().bind(null,"head"),de.domAPI=Ur(),de.insertStyleElement=Kr();var ar=We()(Oe.Z,de);const Ne=Oe.Z&&Oe.Z.locals?Oe.Z.locals:void 0,co=c=>{if(!c)return Ne.link;const x=c.trim().split(" ").filter(Boolean),E=x.find(w=>w==="active")?[Ne.active]:[];return[Ne.link,...E,...x].join(" ")},to=c=>{const{to:x,onClick:E,preventDefault:w,stopPropagation:g,exact:et,target:at,className:nt,...tt}=c;return(0,Ot.jsx)("span",{onClick:nr(c),className:co(nt),...tt})},ir=()=>{const[c,x]=(0,A.useState)(ie.getState());return(0,A.useEffect)(()=>ie.subscribe(E=>x(E)),[]),c},Ze=ie.getState,eo=ie.subscribe})();var C=B.rU,s=B.cb,F=B.Bv,I=B.yj,dt=B.tv},18124:function(ye,Gt,_t){var Y;_t.d(Gt,{Nr:function(){return A},PQ:function(){return Ot},Rx:function(){return ht},Vd:function(){return dt},Wy:function(){return H},fH:function(){return C},r5:function(){return s},rE:function(){return mt},rf:function(){return Yt},xd:function(){return Qt}});var l=_t(27378),Mt={837:(N,Vt,Zt)=>{var ae,le=Zt(810),pr=Symbol.for("react.element"),mr=Symbol.for("react.fragment"),Ar=Object.prototype.hasOwnProperty,h=le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function b(X,R,U){var P,M={},rt=null,zt=null;U!==void 0&&(rt=""+U),R.key!==void 0&&(rt=""+R.key),R.ref!==void 0&&(zt=R.ref);for(P in R)Ar.call(R,P)&&!G.hasOwnProperty(P)&&(M[P]=R[P]);if(X&&X.defaultProps)for(P in R=X.defaultProps,R)M[P]===void 0&&(M[P]=R[P]);return{$$typeof:pr,type:X,key:rt,ref:zt,props:M,_owner:h.current}}ae=mr,Vt.jsx=b,ae=b},322:(N,Vt,Zt)=>{N.exports=Zt(837)},810:N=>{var Vt=ae=>{var le={};return it.d(le,ae),le},Zt=ae=>()=>ae;N.exports=Y||(Y=_t.t(l,2))}},Et={};function it(N){var Vt=Et[N];if(Vt!==void 0)return Vt.exports;var Zt=Et[N]={exports:{}};return Mt[N](Zt,Zt.exports,it),Zt.exports}it.d=(N,Vt)=>{for(var Zt in Vt)it.o(Vt,Zt)&&!it.o(N,Zt)&&Object.defineProperty(N,Zt,{enumerable:!0,get:Vt[Zt]})},it.o=(N,Vt)=>Object.prototype.hasOwnProperty.call(N,Vt);var B={};(()=>{it.d(B,{fH:()=>Vt,r5:()=>h,Nd:()=>R,KY:()=>Ar,Vd:()=>M,Nr:()=>zt,D:()=>pt,Wy:()=>Le,zX:()=>Dr,Cd:()=>Ft,Yz:()=>xr,D9:()=>Qe,cb:()=>Je,vO:()=>yr,Rx:()=>Tr,OH:()=>wr,oR:()=>kr,rE:()=>De,PQ:()=>Or,rf:()=>Lt,xd:()=>Nr});var N=it(810);const Vt=u=>(v,k)=>{const[D,L]=(0,N.useState)(()=>{const ct=u?.getState(v);return ct!==void 0?ct:(k!==void 0&&u?.setState({[v]:k},!0),k)}),st=(0,N.useCallback)(ct=>u?.setState({[v]:typeof ct=="function"?ct(u?.getState(v)):ct}),[]),kt=(0,N.useCallback)(ct=>u?.subscribe(v,ct),[]),jt=(0,N.useCallback)((ct=ct)=>u?.clean(ct),[]);return(0,N.useEffect)(()=>{u?.subscribe(v,ct=>L(ct))},[]),[D,st,kt,jt]},Zt=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),ae=u=>Zt(u)==="object",le=u=>Zt(u)==="function",pr=u=>Zt(u)==="promise"||ae(u)&&le(u.then),mr=(u,v=12e4,k="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!pr(u))return{};let D=null,L=null;return{promiseFn:new Promise((st,kt)=>{D=(jt="canceled")=>{clearTimeout(L),st({canceled:!0,errMsg:jt})},v&&(v=typeof v!="number"?12e4:v,L=setTimeout(()=>D(k),v)),u.then(jt=>{clearTimeout(L),st({result:jt,errMsg:!1})}).catch(jt=>{clearTimeout(L),kt(jt)})}),cancelFn:D}},Ar=()=>{const u=(0,N.useRef)([]);return(0,N.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,N.useCallback)((v,k=!0)=>{const D=mr(v,k);return u.current.indexOf(D)===-1&&u.current.push(D),D.promiseFn},[])}},h=(u={})=>{const{cancelablePromise:v}=Ar(),[k,D]=(0,N.useState)(u),L=(0,N.useRef)({}),st=(0,N.useRef)({}),kt=(0,N.useCallback)((ct=null)=>{Array.isArray(ct)&&ct.length?ct.map(Ut=>L.current[Ut]=u[Ut]):L.current=u},[]),jt=(0,N.useCallback)((ct,Ut,ue=!1)=>{const Ye=Object.keys(ct),or=JSON.stringify(Ye.sort());if(!st.current[or]){st.current[or]=!0,ue&&kt(Array.isArray(ue)?ue:Ye),Ye.map(ve=>{L.current[ve]||(L.current[ve]={}),L.current[ve].pending=!0}),D({...L.current});for(let ve=0,nr=Ye.length;ve<nr;ve++){const Oe=Ye[ve];v(ct[Oe]).then(de=>{let{result:ar,errMsg:Ne}=de;ve===nr-1&&(st.current[or]=!1),typeof Ut=="function"&&(ar=Ut(ar)||ar),L.current[Oe]={...ar,pending:!1},Ne===!1&&D({...L.current})}).catch(de=>{throw ve===nr-1&&(st.current[or]=!1),L.current[Oe]={error:de,pending:!1},D({...L.current}),de})}}},[]);return[k,jt,kt]},G=u=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(u),b=u=>new Promise((v,k)=>{const D=new FileReader;D.readAsDataURL(u),D.addEventListener("load",()=>v(D.result)),D.addEventListener("error",L=>k(L))}),X=async u=>{if(!G(u))return u;const v=await(await fetch(decodeURIComponent(u))).blob();return await b(v)},R=u=>{const[v,k]=(0,N.useState)(u);return(0,N.useEffect)(()=>{(async D=>{const L=await X(D);k(L)})(u)},[u]),v},U=(u,v)=>Object.prototype.hasOwnProperty.call(u??{},v),P=u=>U(u,"current"),M=(u,v,k="click")=>{(0,N.useEffect)(()=>{const D=st=>{const kt=P(u)?u.current:u;kt?.contains&&!kt.contains(st.target)&&v(st)},L=typeof k=="string"?[k]:k;return L.map(st=>{document.addEventListener(st,D,!1)}),()=>{L.map(st=>{document.removeEventListener(st,D,!1)})}},[u,v,k])},rt=(u=()=>{},v=60)=>{let k=null;return function(...D){clearTimeout(k),k=setTimeout(()=>u.apply(this,D),v)}},zt=(u,v=60)=>(0,N.useMemo)(()=>rt(u,v),[v]),Ft=()=>{const u=(0,N.useRef)(!0);return u.current?(u.current=!1,!0):!1},Lt=(u,v=[])=>{const k=Ft();(0,N.useEffect)(()=>{if(!k)return u()},v)},pt=(u,v=450)=>{const[k,D]=(0,N.useState)(u);return Lt(()=>{let L;return u||v===0?D(u):L=setTimeout(()=>D(u),v),()=>L&&clearTimeout(L)},[u]),[k,D]},Tt=()=>![typeof window,typeof document].includes("undefined"),Wt=u=>Zt(u).indexOf("element")>-1,ne=(u=null)=>Tt()?Wt(u)?{width:u.clientWidth,height:u.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Xt=(u,v)=>{const k=[],D=u.children??[];for(let L=0,st=D.length;L<st;L++){const kt=D[L];kt.className.indexOf(v)>-1&&k.push(kt)}return k.length===0?null:k.length===1?k[0]:k},$r=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",v,!1),v()},k.type="text/html",u.appendChild(k),k.data="about:blank",k},q=(u,v=60)=>{if(!Tt())return;u=P(u)?u.current:u??document.body;let k=Xt(u,"resize-sensor"),D=[];const L=rt(()=>D.map(ct=>ct(u)),v),st=ct=>{Xt(u,"resize-sensor")||(k=$r(u,L)),D.indexOf(ct)===-1&&D.push(ct)},kt=ct=>{const Ut=D.indexOf(ct);Ut!==-1&&D.splice(Ut,1),D.length===0&&k&&jt()},jt=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",L,!1),k.parentNode.removeChild(k),k=void 0,D=[])};return{element:u,bind:st,unbind:kt,destroy:jt}},Je=(u={})=>{const v=(0,N.useRef)(0),[k,D]=(0,N.useState)(u),L=(0,N.useCallback)(st=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>D(st))},[]);return(0,N.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[k,L]},Le=(u=null,v=60)=>{const k=P(u)?u.current:u,{bind:D,destroy:L}=q(k,v),[st,kt]=Je(ne(k));return(0,N.useEffect)(()=>(D(()=>k&&kt(ne(k))),()=>L()),[k]),st},Dr=u=>{const v=(0,N.useRef)(null);return(0,N.useLayoutEffect)(()=>{v.current=u}),(0,N.useCallback)(v.current,[])},xr=(u,v)=>{const k=(0,N.useRef)();(0,N.useEffect)(()=>{k.current=u},[u]),(0,N.useEffect)(()=>{if(v){const D=setInterval(()=>k.current(),v);return()=>clearInterval(D)}},[v])},Qe=u=>{const v=(0,N.useRef)();return(0,N.useEffect)(()=>{v.current=u},[u]),v.current},gr=(u=null)=>Tt()?Wt(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},yr=(u=null)=>{const[v,k]=Je(gr(u));return(0,N.useEffect)(()=>{const D=()=>k(gr(u)),L=Wt(u)?u:window;return L.addEventListener("scroll",D,{capture:!1,passive:!0}),()=>L.removeEventListener("scroll",D)},[u]),v},tr=u=>Zt(u)==="array",er=u=>tr(u)&&!!u.length,fe=(u,v,k=[],D=!1,L=null)=>er(u)?v?(k=typeof k=="string"?k.split(","):k,u.filter(st=>(k=k.length>0?k:Object.keys(st),k.filter(kt=>{const jt=st[kt];if(jt==null)return!1;if(D)return jt===v;const ct=new RegExp(v,"gi"),Ut=jt.toString().match(ct);return Ut&&L&&(st[kt]=L(jt.toString().replace(ct,`<span style="background-color:yellow">${Ut[0]}</span>`),{display:"inline-block"})),Ut}).length))):u:[],Ae=(u,v="id")=>{if(!er(u))return u;const k=[],D=[];return u.map(L=>{const st=ae(L)?L[v]:L;D.includes(st)||(D.push(st),k.push(L))}),k},rr=u=>u?.$$typeof&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",ie=u=>u?.__v_isVNode,br=u=>{if(!tr(u)&&!ae(u))return u;const v=tr(u)?[]:{};for(const k in u)if(U(u,k)){const D=u[k];v[k]=rr(D)||ie(D)||typeof D!="object"?D:D!==u?br(D):"cyclic"}else Object.setPrototypeOf(v,{[k]:u[k]});return v},$e=br,ce=u=>(v,k="children")=>{if(!Array.isArray(v))return v;const D=$e(v),L=st=>{const kt=[];return st.map(jt=>{if(er(jt[k])){const ct=L(jt[k])||[];jt[k]=ct,ct.length>0&&kt.push(jt)}}),u(st,kt)};return L(D)},He=(u,v,k,D="name",L="id",st="children",kt=!1)=>ce((jt,ct)=>Ae([...fe(jt,v,D,kt,k),...ct],L))(u,st);var Zr=it(322);const vr=(u,v)=>(0,Zr.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Tr=(u=null,v=vr)=>{const[k,D]=(0,N.useState)(u),L=(0,N.useCallback)((...st)=>{const[kt,jt,...ct]=st;if(!jt)D(null);else{st=[kt,jt,v,...ct];const Ut=He(...st);D(Ut)}},[]);return[k,L]},wr=u=>{const[v,k]=(0,N.useState)(u);return(0,N.useEffect)(()=>k(u),[u]),[v,k]},We=()=>{const u={};return{on:(v,k)=>{u[v]||(u[v]=[]),u[v].indexOf(k)===-1&&u[v].push(k)},emit:(v,k)=>{u[v]&&u[v].map(D=>D(k))},off:(v,k=null)=>{if(u[v]){if(typeof k!="function")return delete u[v];const D=u[v].indexOf(k);D>-1&&(u[v].splice(D,1),u[v].length||delete u[v])}}}},pe=u=>{const v={};for(let k in u)U(u,k)||(v[k]=u[k]);return v},Ur=(u,v)=>{if(!ae(u))return v;if(!ae(v))return u;const k={...pe(u),...pe(v)},D={...u,...v};return Object.keys(k).map(L=>{Object.setPrototypeOf(D,{[L]:k[L]})}),D},be=(()=>{const{on:u,emit:v,off:k}=We(),D={};return{getState:L=>$e(D[L]),setState:(L,st=!1)=>{if(typeof L=="function"&&(L=L($e(D))),!ae(L))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const kt=$e(L);Object.keys(kt).map(jt=>{const ct=D[jt],Ut=kt[jt],ue=ae(Ut)&&ae(ct)?Ur(ct,Ut):Ut;!st&&v(jt,ue),D[jt]=ue})},subscribe:(L,st)=>(u(L,st),()=>k(L,st)),unsubscribe:k,clean:L=>{typeof L=="string"?D[L]=void 0:Array.isArray(L)?L.map(st=>D[st]=void 0):Object.keys(D).map(st=>D[st]=void 0)}}})(),kr=Vt(be),me=u=>u<10?"0"+u:u,Cr=(u=new Date)=>{const v=new Date(u),k=v.getFullYear(),D=v.getDay(),L=me(v.getMonth()+1),st=me(v.getDate()),kt=me(v.getHours()),jt=me(v.getMinutes()),ct=me(v.getSeconds());return[k,L,st,kt,jt,ct,D]},Er=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Kr=(u,v,k="-")=>u.replace(new RegExp(k,"g"),v),Ve=(u=new Date,v=["-","-"," ",":",":",""],k=Er)=>{const D=Cr(u);let L="";return v.map((st,kt)=>L+=(kt===6?k[D[kt]]:D[kt]??"")+st),L},_e=()=>Ve(new Date,["-","-"," ",":",":"," ",""]),De=()=>{const[u,v]=(0,N.useState)("");return xr(()=>{v(_e())},1e3),[u]},Te=u=>++u,Or=()=>{const[,u]=(0,N.useState)(0);return(0,N.useCallback)(()=>u(Te),[])},Nr=()=>{const[u,v]=Je(ne());return(0,N.useEffect)(()=>{const k=()=>v(ne());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),u}})();var C=B.fH,s=B.r5,F=B.Nd,I=B.KY,dt=B.Vd,A=B.Nr,S=B.D,H=B.Wy,p=B.zX,$=B.Cd,z=B.Yz,Z=B.D9,V=B.cb,K=B.vO,ht=B.Rx,wt=B.OH,Dt=B.oR,mt=B.rE,Ot=B.PQ,Yt=B.rf,Qt=B.xd},71090:function(ye,Gt,_t){_t.d(Gt,{$L2:function(){return Ka},A_F:function(){return ji},B5o:function(){return yi},BWC:function(){return fi},CLv:function(){return gi},Few:function(){return ai},JaC:function(){return qa},Lgs:function(){return Pi},MTn:function(){return ti},NA2:function(){return pi},Og:function(){return $i},PTJ:function(){return ci},Qfx:function(){return ui},UhT:function(){return Xa},Vcq:function(){return Fi},XBe:function(){return Ai},XBv:function(){return di},_O2:function(){return Di},_iG:function(){return ri},_vH:function(){return Si},afD:function(){return li},azd:function(){return zi},dKu:function(){return si},dtG:function(){return oi},eyl:function(){return hi},f9u:function(){return Ni},fHt:function(){return Qa},gVz:function(){return Ei},hd2:function(){return wi},jg2:function(){return Ci},k$y:function(){return Ti},mrB:function(){return ii},muM:function(){return Ga},nL5:function(){return vi},qg7:function(){return ni},rTd:function(){return xi},rWO:function(){return mi},tOc:function(){return _i},vQq:function(){return Ja},xDX:function(){return ei},yZP:function(){return ki},yfi:function(){return Oi},ywV:function(){return bi}});var Y={};(function(){Y.d=function(t,e){for(var r in e)Y.o(e,r)&&!Y.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Y.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var l={};Y.d(l,{NzM:function(){return Et},wBC:function(){return A},O39:function(){return H},cnu:function(){return Z},E4D:function(){return K},TRp:function(){return wt},zI1:function(){return mt},Ufj:function(){return Yt},GxO:function(){return Zt},cu2:function(){return le},BcS:function(){return mr},lPd:function(){return rt},dC1:function(){return Ft},$L2:function(){return pt},Vji:function(){return h},YxP:function(){return P},UhT:function(){return er},JaC:function(){return Ae},o4B:function(){return $e},Hlr:function(){return Er},muM:function(){return L},OiV:function(){return be},KTn:function(){return kt},lwL:function(){return ct},d9v:function(){return k},yCD:function(){return ue},qCK:function(){return or},vQq:function(){return nr},fHt:function(){return de},azq:function(){return to},dSY:function(){return et},MTn:function(){return It},RYO:function(){return Ne},WAo:function(){return At},GVc:function(){return Ve},Emy:function(){return gt},v9O:function(){return Ht},DsO:function(){return te},_lj:function(){return Ee},vO6:function(){return je},xDX:function(){return ze},hf3:function(){return Lo},ip7:function(){return xo},uYe:function(){return nt},DgJ:function(){return De},rae:function(){return go},YBu:function(){return yo},_iG:function(){return uo},hXT:function(){return ko},gQq:function(){return Eo},D_D:function(){return ao},$nD:function(){return So},dtG:function(){return _r},Y0R:function(){return Uo},qg7:function(){return _o},Xxf:function(){return Fo},tSM:function(){return Ao},Few:function(){return $o},xHg:function(){return Do},aoj:function(){return To},Dlm:function(){return Jr},mrB:function(){return Oo},dKu:function(){return _},v1d:function(){return cr},afD:function(){return ot},Lz5:function(){return Kt},xZX:function(){return Pt},G_1:function(){return ke},osI:function(){return Me},PTJ:function(){return qe},Qfx:function(){return Ce},bti:function(){return Ke},XBv:function(){return vn},eyl:function(){return wn},y35:function(){return kn},hKD:function(){return dr},BWC:function(){return fo},oLi:function(){return B},NA2:function(){return jn},S3Y:function(){return Rr},pvT:function(){return on},m2f:function(){return Xt},rWO:function(){return Sn},A$w:function(){return _n},kJL:function(){return s},S9U:function(){return pe},dYC:function(){return se},jUY:function(){return N},J_U:function(){return Fn},kKo:function(){return $},VZO:function(){return zn},mf2:function(){return wr},w1q:function(){return An},Kn2:function(){return b},ncl:function(){return $n},LWC:function(){return Or},dqb:function(){return q},Kjn:function(){return Dn},TaN:function(){return hr},CBv:function(){return Ir},rTd:function(){return ur},B73:function(){return Tn},SSA:function(){return u},CLv:function(){return On},F$z:function(){return Nn},XT_:function(){return nn},omS:function(){return Pn},poV:function(){return In},VXY:function(){return Rn},xsP:function(){return Mn},HPs:function(){return Bn},TSy:function(){return Ln},B5o:function(){return No},u1A:function(){return Hn},WAY:function(){return Po},I8J:function(){return Ct},ywV:function(){return Zn},bEN:function(){return Un},$45:function(){return Kn},TUk:function(){return Xn},T7B:function(){return R},CEd:function(){return qn},IHq:function(){return Gn},SkG:function(){return cn},Smz:function(){return vr},nL5:function(){return He},ON:function(){return ta},eiS:function(){return ea},Frc:function(){return ra},z5J:function(){return oa},scT:function(){return na},hd2:function(){return Ro},AnA:function(){return aa},kYX:function(){return ia},yZP:function(){return sa},IVd:function(){return Io},SIr:function(){return ca},jg2:function(){return ua},gVz:function(){return da},puc:function(){return pa},Azz:function(){return ma},X5u:function(){return Le},dPh:function(){return xa},SMZ:function(){return Wt},kro:function(){return I},nPi:function(){return ga},US:function(){return ya},A_F:function(){return ge},_vH:function(){return ro},gmH:function(){return we},DYV:function(){return ba},qi2:function(){return va},tOc:function(){return wa},hau:function(){return Ca},FaZ:function(){return Mr},uyF:function(){return Ea},Vcq:function(){return ja},XKW:function(){return Sa},azd:function(){return ie},P2K:function(){return _a},XBe:function(){return $a},JZ7:function(){return pn},ABi:function(){return sr},ogC:function(){return Da},Og:function(){return Ra},_O2:function(){return so},P0C:function(){return Ma},Uo5:function(){return Ba},Two:function(){return ho},tYQ:function(){return La},tVn:function(){return w},pHy:function(){return Ha},k$y:function(){return Ie},yfi:function(){return Wa},fl8:function(){return Va},f9u:function(){return Ya},ZV1:function(){return Za},Lgs:function(){return Ua}});var Et=(t,e="key",r="value")=>{const o={};return(t||[]).map(a=>o[a[e]]=a[r]),o},B=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),s=t=>B(t)==="array",I=t=>(e,r,o="id",a="children")=>{if(!s(e))return null;const f=(y,O="")=>{for(let W=0,lt=y.length;W<lt;W++){const ft=y[W];if(ft[o]===r)return t(y,W,O)||y[W];if(s(ft[a])){const re=f(ft[a],ft[o]);if(re)return re}}};return f(e),e},A=(t,e,r,o="id",a="children")=>I((f,y)=>f.splice(y,0,r))(t,e,o,a),H=(t,e,r,o,a="id",f="children")=>I((y,O)=>{const W=y[O];W.children?W.children.splice(o,0,r):W.children=[r]})(t,e,a,f),$=t=>B(t).indexOf("element")>-1,Z=(t,e="")=>{if(!$(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),a=[...new Set([...r,...o])];t.className=a.join(" ")},K=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},wt=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},mt=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Yt=(t,e,r,o="id",a="children")=>I((f,y)=>{const O=f[y];return O[a]=[...O[a]||[],...r],O})(t,e,o,a),N=()=>![typeof window,typeof document].includes("undefined"),Zt=t=>{if(N())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=a=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},le=(t,e)=>{if(N())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(a=>a.getAttribute("huxy-css-hash")).filter(Boolean).find(a=>a===e))r();else{const a=document.createElement("style");a.onerror=f=>o(new Error(`Failed to load '${e}' style`)),a.onload=r,a.innerHTML=t,a.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(a=>a.href===t))r();else{const a=document.createElement("link");a.onerror=f=>o(new Error(`Failed to load '${t}'`)),a.onload=r,a.href=t,a.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}})},mr=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},h=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:a})=>r[o]=a),r},b=t=>B(t)==="object";const X=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,b(o)?e+=`${r}=${X(o)}`:Array.isArray(o)?e+=`${r}=${P(o)}`:e+=`${r}=${o}`}),`{${e}}`};var R=X;const U=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,b(r)?e+=R(r):Array.isArray(r)?e+=U(r):e+=`${r}`}),`[${e}]`};var P=U,rt=t=>(e,r="id",o="children",a=-1)=>{if(!s(e))return e;const f={},y=e.map(O=>O[r]);return[...e].map(O=>{const W={...O},{[r]:lt}=W;if(lt!=null){let{parentId:ft}=W;ft==null&&(ft=t?.(W)??a,W.parentId=ft),f[lt]||(f[lt]=[]),W[o]=f[lt],f[ft]||(f[ft]=[]),f[a]||(f[a]=[]),y.includes(ft)?f[ft].push(W):f[a].push(W)}}),f[a]},Ft=(t,e="id",r="children",o=-1)=>rt(a=>a[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),pt=(t,e="path",r="children",o=null)=>rt(a=>{const f=a[e],y=f.match(/.*\/[^:/]+\/:[^/]+/);return y?y[0].match(/(.*)\/:+/)?.[1]??o:f.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),Wt=()=>N()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Xt=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),q=t=>Xt(t,"current"),Le=(t=0,e)=>{N()&&(e=q(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},xr=`.huxy-totop-bar {
  --size: 36px;
  --color: #fff;
  --bgColor: #666;
  --hoverBgColor: #40a9ff;
  width: var(--size);
  height: var(--size);
  border-radius: 4px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--bgColor);
  color: var(--color);
  z-index: 99999;
  cursor: pointer;
  overflow: hidden;
}
.huxy-totop-bar i,
.huxy-totop-bar span {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: var(--size);
  height: var(--size);
  text-align: center;
}
.huxy-totop-bar i {
  font-size: 22px;
  line-height: var(--size);
  transform: translateY(0);
  transition: transform 0.2s;

  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.huxy-totop-bar i:before {
  content: "\\2191";
}
.huxy-totop-bar span {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.1;
  padding: 4px 0;
  background-color: var(--hoverBgColor);
  transform: translateY(100%);
  transition: transform 0.2s;
}
.huxy-totop-bar:hover i {
  transform: translateY(-100%);
}
.huxy-totop-bar:hover span {
  transform: translateY(0);
}`;const Qe=()=>document.getElementsByClassName("huxy-totop-bar")[0],gr=t=>{if(Qe())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Le(),!1),e},yr=()=>{const t=Qe();t&&document.body.removeChild(t)};var er=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!N())return;le(xr,"huxy-backtop-css");const r=()=>{Wt()>t?gr(e):yr()};return(()=>(document.addEventListener("scroll",r,!1),()=>{yr(),document.removeEventListener("scroll",r,!1)}))()},Ae=(t=0,e=2)=>parseInt(String(t),e),ie=(t=0,e=2)=>Number(t).toString(e),$e=(t=0,e=2,r=16)=>ie(Ae(t,e),r),He=t=>{if(!b(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const a=o>0?"&":"?";e.push(`${a}${r}=${t[r]}`)}),e.join("")},vr=t=>{if(!b(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},wr=t=>B(t)==="function",pe=t=>B(t)==="promise"||b(t)&&wr(t.then),be=(t,e=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!pe(t))return{};let o=null,a=null;return{promiseFn:new Promise((f,y)=>{o=(O="canceled")=>{clearTimeout(a),f({canceled:!0,errMsg:O})},e&&(e=typeof e!="number"?12e4:e,a=setTimeout(()=>o(r),e)),t.then(O=>{clearTimeout(a),f({result:O,errMsg:!1})}).catch(O=>{clearTimeout(a),y(O)})}),cancelFn:o}};const kr=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>vr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>He(t).slice(1)}],me=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(a=>t[a]);if(o.length===1){const a=o[0],f=r?e:a;return f==="params"?{query:t[a]}:{result:t[a],type:f}}else if(o.length>1){const a=o.filter(y=>y!=="params").slice(-1)[0],f=r?e:a;return f==="params"?{query:t.params||t[a]}:{query:t.params,result:t[a],type:f}}};var Er=(t,e)=>r=>(o,a={})=>{const{headers:f,dataType:y,data:O,formData:W,form:lt,params:ft,...re}=a,oe={data:O,formData:W,form:lt,params:ft};let Yr;const{query:fr,result:mn,type:Ii}=me(oe,y)||{};if(!re.body&&mn){const po=kr.find(mo=>mo.type===Ii);Yr=po.headers,re.body=po.body(mn)}fr&&(o=`${o}${He(fr)}`);const{promiseFn:Ri}=be(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Yr,...f},...re}),e);return Ri.then(({result:po,errMsg:mo})=>t(mo?{status:408,statusText:mo}:po))},Ve=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let a=!1;for(let f in o)Xt(o,f)&&r(o[f])&&(o[f]="cyclic",a=!0);return a}return!1};return r(t)&&t};const _e=(t,e)=>{const r=B(t),o=B(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Ve(t)&&Ve(e))return _e(t,e);for(let a in e)if(Xt(t,a)!==Xt(e,a)||!_e(t[a],e[a]))return!1;return!0};var De=_e,Or=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",u=t=>t?.__v_isVNode;const v=t=>{if(!s(t)&&!b(t))return t;const e=s(t)?[]:{};for(const r in t)if(Xt(t,r)){const o=t[r];e[r]=Or(o)||u(o)||typeof o!="object"?o:o!==t?v(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var k=v,L=(t=100)=>{const e=[];let r=-1;const o=f=>{const y=e.length,O=k(f);return De(O,e[y-1]?.data)?{index:r,length:y,data:e[r]?.data}:(e.push({data:O}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},a=(f=0)=>{const y=e.length;return r+=f,r=r<0?0:r>y-1?y-1:r,{index:r,length:y,data:k(e[r]?.data)}};return{record:o,cursor:a,jump:f=>(r=f,{index:r,length:e.length,data:k(e[r]?.data)}),undo:()=>a(-1),redo:()=>a(1),getList:()=>k(e),clean:()=>{e.length=0,r=-1}}},kt=(t,e,r)=>{if(!s(t))return t;const o=t[e],a=t[r];return t.splice(e,1,a),t.splice(r,1,o),t},ct=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},ue=(t,e,r=".")=>{const o=(W,lt)=>W.split(lt),a=o(t,r),f=o(e,r),y=a.length;let O=0;for(let W=0;W<y;W++)if(a[W]<f[W]){O=y-W;break}return O},or=(...t)=>(...e)=>{const[...r]=t,o=(...a)=>r.length===0?a[0]:o(r.pop()(...a));return o(...e)},nr=t=>{if(!N())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},de=t=>(e,r)=>{const{getState:o,setState:a,subscribe:f,unsubscribe:y,clean:O}=t;return r!==void 0&&a({[e]:r},!0),{getState:()=>o(e),setState:(W,lt)=>a({[e]:W},lt),subscribe:W=>f(e,W),unsubscribe:()=>y(e),clean:()=>O(e)}},Ne=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),to=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:Ne(o))}});const ir=t=>t.startsWith("on"),Ze=t=>t!=="children"&&!ir(t),eo=(t,e)=>r=>t[r]!==e[r],c=(t,e)=>r=>!(r in e),x=t=>{const e=Object.keys(t);return{eventProps:e.filter(ir),propertyProps:e.filter(Ze)}};var w=(t,e,r)=>{const{eventProps:o,propertyProps:a}=x(e),{eventProps:f,propertyProps:y}=x(r);o.filter(c(e,r)).map(O=>{const W=O.toLowerCase().slice(2);t.removeEventListener(W,e[O])}),a.filter(c(e,r)).map(O=>t[O]=""),y.filter(eo(e,r)).map(O=>t[O]=r[O]),f.filter(eo(e,r)).map(O=>{const W=O.toLowerCase().slice(2);t.addEventListener(W,r[O])})},et=t=>{if(!N())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return w(e,{},t.props),e},nt=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const tt=t=>{const e={};for(let r in t)Xt(t,r)||(e[r]=t[r]);return e};var Ct=(t,e)=>{if(!b(t))return e;if(!b(e))return t;const r={...tt(t),...tt(e)},o={...t,...e};return Object.keys(r).map(a=>{Object.setPrototypeOf(o,{[a]:r[a]})}),o},It=()=>{const{on:t,emit:e,off:r}=nt(),o={};return{getState:a=>k(o[a]),setState:(a,f=!1)=>{if(typeof a=="function"&&(a=a(k(o))),!b(a))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const y=k(a);Object.keys(y).map(O=>{const W=o[O],lt=y[O],ft=b(lt)&&b(W)?Ct(W,lt):lt;!f&&e(O,ft),o[O]=ft})},subscribe:(a,f)=>(t(a,f),()=>r(a,f)),unsubscribe:r,clean:a=>{typeof a=="string"?o[a]=void 0:Array.isArray(a)?a.map(f=>o[f]=void 0):Object.keys(o).map(f=>o[f]=void 0)}}},At=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...a)=>r(...o,...a);return r},gt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,a=>a.toUpperCase()):r.replace(/^\S/,a=>a.toLowerCase())).join(""),Ht=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let f=a.length;const y=new Uint8Array(f);for(;f--;)y[f]=a.charCodeAt(f);return new File([y],e??+new Date,{type:o})},te=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Ee=(t,e,r="id",o="children")=>I((a,f)=>a.splice(f,1))(t,e,r,o),je=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",sr=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Ie=()=>{let t=sr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},Ir=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),se=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},ze=async(t,e,r)=>{if(!N())return;r=r||Ie();const o=e?`${r}.${e}`:r,a=Ir(t);if(a||se(t)){t=a?decodeURIComponent(t):t;const f=await fetch(t),y=f.headers.get("Content-Disposition"),O=y&&decodeURIComponent(y.split(";")[1].split("=")[1]);f.blob().then(W=>{const lt=window.URL.createObjectURL(W),ft=document.createElement("a");ft.href=lt,ft.download=O||o,ft.style.display="none",document.body.appendChild(ft),ft.click(),ft.parentNode.removeChild(ft),window.URL.revokeObjectURL(lt)})}else{const f=new Blob([t]),y=window.URL.createObjectURL(f),O=document.createElement("a");O.href=y,O.download=o,O.style.display="none",document.body.appendChild(O),O.click(),O.parentNode.removeChild(O),window.URL.revokeObjectURL(y)}},Rr=(t=null)=>N()?$(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Ke=t=>{if(N())return t=q(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Mr=t=>{if(!N())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},ge=(t,e={},r=!1)=>{if($(t)){if(r){let o="";Object.keys(e).map(a=>{o+=`${a}: ${e[a]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const qr=(t=350)=>new Promise(e=>setTimeout(e,t)),we=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var ro=qr,cr=async(t,e=15)=>{if(!N())return;if(typeof t=="string"&&(t=Mr(t)),t=q(t)?t.current:t,!$(t))return{};const r=t.cloneNode(!0);ge(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await ro(e);const o=Ke(r);return t.parentNode.removeChild(r),o};const Mo=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Bo=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Gr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Mo.test(r)?t.setAttribute("class",r.replace(Bo,e)):t.setAttribute("class",`${r} ${e}`)},Br=async(t,e,r)=>{const{left:o,right:a,top:f,bottom:y}=Ke(t),{width:O,height:W}=Rr(),{width:lt,height:ft}=await cr(e);if(a<0||y<0||o>O||f>W)return{};if(r==="vertical"){const re={left:o+"px",top:y+10+"px",right:"auto",bottom:"auto"};let oe="lt";o+lt>O&&(re.left=a-lt+"px",oe="rt"),y+10+ft>W&&(re.top=f-10-ft+"px",oe=oe==="lt"?"lb":"rb"),ge(e,re),Gr(e,oe)}else{const re={left:a+10+"px",top:f+"px",right:"auto",bottom:"auto"};let oe="tl";a+10+lt>O&&(re.left=o-10-lt+"px",oe="tr"),f+ft>W&&(re.top=y-ft+"px",oe=oe==="tl"?"bl":"br"),ge(e,re),Gr(e,oe)}};var Lo=(t,e,r="horizontal")=>{const o=te(Br),a=()=>o(t,e,r);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const f=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),ge(e,{left:"",top:"",right:"",bottom:""})};return Br(t,e,r),f},xo=(t,e,r,o="id",a="children")=>I((f,y)=>f[y]={...f[y],...r})(t,e,o,a),go=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const no=nt();var yo=t=>{const{on:e,emit:r,off:o}=no;return{on:a=>e(t,a),emit:a=>r(t,a),off:a=>o(t,a)}};const bo=120*1e3,vo=t=>t.json().then(e=>e);var uo=(t=vo,e=bo)=>(r="get")=>Er(t)((r||"get").toUpperCase()),ur=t=>s(t)&&!!t.length,ko=(t,e,r=[],o=!1,a=null)=>ur(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(f=>(r=r.length>0?r:Object.keys(f),r.filter(y=>{const O=f[y];if(O==null)return!1;if(o)return O===e;const W=new RegExp(e,"gi"),lt=O.toString().match(W);return lt&&a&&(f[y]=a(O.toString().replace(W,`<span style="background-color:yellow">${lt[0]}</span>`),{display:"inline-block"})),lt}).length))):t:[],ho=(t,e="id")=>{if(!ur(t))return t;const r=[],o=[];return t.map(a=>{const f=b(a)?a[e]:a;o.includes(f)||(o.push(f),r.push(a))}),r};const Co=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=k(e),a=f=>{const y=[];return f.map(O=>{if(ur(O[r])){const W=a(O[r])||[];O[r]=W,W.length>0&&y.push(O)}}),t(f,y)};return a(o)};var Eo=(t,e,r,o="name",a="id",f="children",y=!1)=>Co((O,W)=>ho([...ko(O,e,o,y,r),...W],a))(t,f),ao=(t,e)=>{const r=[],o=t.children??[];for(let a=0,f=o.length;a<f;a++){const y=o[a];y.className.indexOf(e)>-1&&r.push(y)}return r.length===0?null:r.length===1?r[0]:r},So=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],_r=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),Uo=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},_o=(t="")=>(t??"").replaceAll("//","/"),Fo=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",Ao=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},$o=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),a=t%3600,f=~~(a/60);return o<24?`${o}${e[2]}${f}${e[1]}${a%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},so=t=>(e,r="children")=>{if(!s(e))return e;const o=(a,f=[])=>a.map((y,O)=>{const W=s(y[r]);if(y=t(y,f,O,W)||y,W){const{[r]:lt,...ft}=y;y[r]=o(lt,[...f,{...ft,"@@index":O}])}return y});return o(e)},Do=(t,e="children")=>{const r=[];return so(o=>{const{[e]:a,...f}=o;r.push(f)})(t,e),r},To=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const Vr=t=>t<10?"0"+t:t;var dr=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),a=Vr(e.getMonth()+1),f=Vr(e.getDate()),y=Vr(e.getHours()),O=Vr(e.getMinutes()),W=Vr(e.getSeconds());return[r,a,f,y,O,W,o]},Jr=(t,e=new Date)=>{t=dr(t),e=dr(e);const r=e.y-t.y,o=e.m-t.m,a=e.d-t.d,f=e.h-t.h,y=e.M-t.M,O=new Date(e.y,e.m,0).getDate(),W=(lt,ft,re,oe,Yr)=>{const fr="\u524D";return ft<0&&(lt-=1,ft+=re),lt===0?ft+Yr+fr:ft===0?lt+oe+fr:lt+oe+ft+Yr+fr};return r>0?W(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?W(o,a,O,"\u4E2A\u6708","\u5929"):a>0?W(a,f,24,"\u5929","\u5C0F\u65F6"):f>0?W(f,y,60,"\u5C0F\u65F6","\u5206\u949F"):y>0?y+"\u5206\u949F\u524D":"\u521A\u521A"};const Fr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],yn=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var Oo=(t=new Date,e=["-","-"," ",":",":",""],r=Fr)=>{const o=dr(t);let a="";return e.map((f,y)=>a+=(y===6?r[o[y]]:o[y]??"")+f),a};const Qr=["","webkit","moz","ms"],n=t=>Qr.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),i=t=>Qr.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),d=t=>Qr.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),m=Qr.map(t=>`${t}fullscreenchange`);var _=t=>{if(!N())return;t=q(t)?t.current:t??document.body;const e=n(document),r=i(t),o=d(document);document[e]?document[o]?.():t[r]?.()};const T=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var ot=()=>{if(!N())return;const t=window.navigator.userAgent.toLowerCase(),e=T.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const ut=60*1e3,bt=60*ut,yt=24*bt;var Kt=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/yt);r-=yt*o;const a=~~(r/bt);r-=bt*a;const f=~~(r/ut);r-=ut*f;const y=~~(r/1e3);return`${o}\u5929${a}\u5C0F\u65F6${f}\u5206${y}\u79D2`};const qt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Nt=t=>{if(!Array.isArray(t))return qt;const e=[...qt];return t.map(r=>{const o=e.findIndex(a=>a.name===r.name||a["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Pt=t=>{const e=Nt(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return Mr(e.join(""))},ke=(t=new Date)=>{const e=dr(t);return new Date(e[0],e[1],0).getDate()},Me=(t=null)=>N()?$(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const he=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var qe=()=>{if(!N())return;const t=window.navigator.userAgent.toLowerCase(),e=he.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},Ce=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(a=>{const[f,y]=a.split("=");o[f]=y}),{path:e,params:o}}return{path:e}},hr=()=>N()&&(window.ontouchstart||navigator.maxTouchPoints),fo=t=>{const{left:e,top:r}=Me();return{touchX:hr()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:hr()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},vn=(t,e)=>{const{touchX:r,touchY:o}=fo(t),{x:a,y:f}=e?.getBoundingClientRect?.()??{};return{x:r-(a??0),y:o-(f??0)}},wn=(t,e,r="id",o="children")=>{if(!s(t))return null;const a=f=>{for(let y=0,O=f.length;y<O;y++){const W=f[y];if(W[r]===e)return[W];if(s(W[o])){const lt=a(W[o]);if(lt)return[W].concat(lt)}}};return a(t)},kn=(t,e,r)=>{if(!N())return;r=q(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ge(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const a=o.getBoundingClientRect();return r.removeChild(o),a};const Cn=(t={},e)=>{e=En(e);const r=(o,a)=>{if(!a?.[0])return o;if(typeof o[a[0]]=="object")return r(o[a[0]],a.slice(1));if(!(a.length>1))return o[a[0]]};return r(t,e)},En=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var jn=Cn,on=(t,e="")=>$(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),Sn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,a=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${a})`;const f=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${a},${f})`},_n=t=>{if(!N())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:a}=t;return e.width=o,e.height=a,r.drawImage(t,0,0,o,a),e},Fn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),zn=t=>B(t)==="error",An=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),$n=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Dn=t=>B(t)==="regexp",Tn=t=>b(t)&&Object.keys(t).length,On=()=>{if(N())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},Nn=t=>b(t)?R(t):Array.isArray(t)?P(t):t,nn=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",a=>r(a))}),Pn=async t=>{if(!Ir(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await nn(e)},In=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",a=>r(a)))}),Rn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await ro(r)},Mn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],Bn=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const a=JSON.stringify(o),f=r.find(y=>y.key===a);if(!f){const y=t(...o);return r.push({key:a,result:y}),r.length>e&&r.shift(),y}return f.result}};const an=(t,e,r="id")=>{if(!s(t))return e;if(!s(e))return t;const o={};return[...t,...e].map(a=>{const f=b(a)?a[r]??JSON.stringify(a):a;if(o[f]===void 0)o[f]=a;else{const y=o[f];b(y)&&b(a)?o[f]=Po(y,a,r):s(y)&&s(a)?o[f]=an(y,a,r):o[f]=a}}),Object.keys(o).map(a=>o[a])};var No=an;const sn=(t,e,r="id")=>{if(!b(t))return e;if(!b(e))return t;for(let o in e)Xt(e,o)?b(t[o])&&b(e[o])?t[o]=sn(t[o],e[o],r):s(t[o])&&s(e[o])?t[o]=No(t[o],e[o],r):t[o]=e[o]:Object.setPrototypeOf(t,{[o]:e[o]});return t};var Po=sn,Ln=(t,...e)=>{const r=s(t)?No:Po;return e.map(o=>t=r(t,o)),t},Hn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Io=(t,e="")=>{if(!$(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(a=>!r.includes(a));t.className=o.join(" ")},Wn=`@keyframes huxy-message-animate-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes huxy-message-animate-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.huxy-message {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 999999;
  pointer-events: none;
}

.message-content {
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #333333;
  border-radius: 4px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  padding: 10px 16px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  animation: huxy-message-animate-out 0.25s forwards;
}

.message-content.left {
  margin-left: 20px;
}

.message-content.right {
  margin-right: 20px;
}

.message-content.open {
  animation: huxy-message-animate-in 0.25s forwards;
}

.message-content .title {
  font-size: 1.8rem;
}

.message-content .message {
  line-height: 1.75;
}

.message-content i {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: #fff;
  flex-shrink: 0;
}
.message-content.success i {
  background: #73d13d;
}
.message-content.success i:before {
  content: "\\2713";
}
.message-content.error i {
  background: #ff4d4f;
}
.message-content.error i:before {
  content: "\\00D7";
}
.message-content.warn i {
  background: #ffa940;
}
.message-content.warn i:before {
  content: "\\267A";
}
.message-content.info i {
  background: #40a9ff;
}
.message-content.info i:before {
  content: "\\2690";
}`;const ln=()=>document.getElementsByClassName("huxy-message")[0],Vn=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Yn=(t,e,r)=>{const o=t?.dir??"auto",a=document.createElement("div");a.setAttribute("class",`message-content open ${e} ${o}`),a.setAttribute("data-id",r);const f=document.createElement("span");f.setAttribute("class","message"),f.innerText=t?.message??t;const y=document.createElement("i");return a.appendChild(y),a.appendChild(f),a},lo=(t,e=3250,r,o)=>{if(!N())return;le(Wn,"huxy-message-css");let a=ln();a||(a=Vn());const f=Ie(),y=Yn(t,o,f);return a.appendChild(y),e&&(setTimeout(()=>{a.removeChild(y),r?.()},e),setTimeout(()=>{Io(y,"open")},e-250)),f};var Zn={success:(t,e,r)=>lo(t,e,r,"success"),warn:(t,e,r)=>lo(t,e,r,"warn"),warning:(t,e,r)=>lo(t,e,r,"warn"),error:(t,e,r)=>lo(t,e,r,"error"),info:(t,e,r)=>lo(t,e,r,"info"),destroy:t=>{const e=ln();if(e)if(t){const r=e.querySelector(`[data-id="${t}"]`);r&&e.removeChild(r)}else for(;e.firstChild;)e.removeChild(e.firstChild)}},Un=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[K(1-r),K(ke(e)-r)]},Kn=(t,e,r,o,a="id",f="children")=>{let y={};return I((O,W)=>(y=O[W],O.splice(W,1),!0))(t,e,a,f),H(t,r,y,o,a,f),t},Xn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),qn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(a=>e.includes(a)?o.push({key:a,value:t[a]}):r[a]=t[a]),{newObj:r,newQuery:o}},Gn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},cn=(t="",e=0,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const un="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",dn="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Jn=t=>{const e={},r={},o=t.match(new RegExp(un,"g")).map(f=>f.match(new RegExp(un))).filter(Boolean),a=t.match(new RegExp(dn,"g")).map(f=>f.match(new RegExp(dn))).filter(Boolean);return o.map(f=>{const[,y,O]=f;e[y]=O,r[y]="base"}),a.map(f=>{const[,y,O]=f;e[y]=(O??"").trim(),r[y]="data"}),{obj:e,types:r}},Qn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var ta={xml2Obj:Jn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Qn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},ea=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!s(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},ra=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(a,f)=>a?o(a):r(f))),oa=()=>"#"+cn((~~(Math.random()*(1<<24))).toString(16),6),Ro=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),na=(t=[])=>t[Ro(t.length-1)],aa=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,a)=>{a===t-1?r[a]=e:(r[a]=Ro(1,e-1),e-=r[a])}),r},ia=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),sa=()=>Math.random()>.5;const la=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ca=(t,e=60)=>{if(!N())return;t=q(t)?t.current:t??document.body;let r=ao(t,"resize-sensor"),o=[];const a=te(()=>o.map(W=>W(t)),e),f=W=>{ao(t,"resize-sensor")||(r=la(t,a)),o.indexOf(W)===-1&&o.push(W)},y=W=>{const lt=o.indexOf(W);lt!==-1&&o.splice(lt,1),o.length===0&&r&&O()},O=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",a,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:f,unbind:y,destroy:O}};const hn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const a=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?a:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${a}${o}`)};var ua=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const a=t.match(/rgba?\((.+)\)/);if(a){const f=a[1]?.split(",").map(y=>y.trim());return hn(...f)}return t}return hn(t,e,r,o)},da=(t,e="px")=>`${t}`.replace(e,"")-0;const fn=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ha=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},fa=()=>{const t=[],e=y=>{t.push(y),f(y)},r=()=>t[0],o=()=>t.shift(),a=y=>y.startTime=fn(),f=y=>{a(y),t.sort((O,W)=>O.startTime-W.startTime)};return{hub:t,push:e,peek:r,shift:o,update:f}};var pa=(t=5)=>{const{hub:e,push:r,peek:o,shift:a,update:f}=fa(),y=ha(()=>{W()&&y()}),O=lt=>fn()-lt.startTime>t,W=()=>{let lt=o();for(;lt;){if(O(lt)){f(lt);break}const{task:ft}=lt;typeof ft=="function"?(lt.task=null,ft()):a(),lt=o()}return lt};return(lt=()=>{})=>{r({task:lt}),e.length<2&&y()}},ma=()=>N()&&document.documentElement.scrollHeight-Wt()===Rr().height,xa=t=>{N()&&(t=q(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ga={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ya=t=>{const e=Pt(t);N()&&document.head.appendChild(...e)},ba=(t,e=null,r=!1)=>[...t||[]].sort((o,a)=>{const f=e?o[e]:o,y=e?a[e]:a;return!isNaN(Number(f))&&!isNaN(Number(f))?r?y-f:f-y:typeof f=="string"&&typeof y=="string"?r?y.localeCompare(f):f.localeCompare(y):typeof f=="string"&&typeof y=="number"?r?-1:1:typeof f=="number"||typeof f=="string"?r?1:-1:r?-1:1}),va=t=>{if(!b(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},wa={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const ka=It();var Ca=de(ka),Ea=(t,e=!1)=>(t=e?t:`return ${t};`,Function(t)()),ja=()=>N()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),Sa=(t,...e)=>{const r=[];return t.map((o,a)=>{r.push(o,e[a]??"")}),r.join("")},_a=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const Fa=t=>[12,ke(t),24,60,60],za=(t=[],e=[],r=[])=>{let o=!1;const a=[];return e.map((f,y)=>{const O=(o?f-1:f)-t[y];O<0?(a[y]=O+(r[y]||10),o=!0):(a[y]=O,o=!1)}),a.reverse()};var pn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=Fa(e).reverse(),o=dr(t).slice(0,-1).reverse(),a=dr(e).slice(0,-1).reverse();return za(o,a,r)};const Aa=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var $a=(t,e=new Date)=>{const r=pn(t,e),o=r.findIndex(a=>a>0);return r.map((a,f)=>`${a||0}${Aa[f]}`).slice(o).join("")},Da=(t,e)=>{$(t)&&(on(t,e)?Io(t,e):Z(t,e))};const Ta=()=>hr()?{startKey:"touchstart",moveKey:"touchmove",endKey:"touchend"}:{startKey:"mousedown",moveKey:"mousemove",endKey:"mouseup"},Oa=(t,e,r)=>{r.addEventListener(t,e,!1)},Na=(t,e,r)=>{r.removeEventListener(t,e,!1)},Pa=(t,e,r,o,a)=>{a.addEventListener(t,r,!1),document.addEventListener(e,o,!1)},Ia=(t,e,r,o,a)=>{a.removeEventListener(t,r,!1),document.removeEventListener(e,o,!1)};var Ra=(t,e,r,o=document)=>{const{startKey:a,moveKey:f,endKey:y}=Ta(),O=ft=>{t(ft,o),Pa(f,y,W,lt,o)},W=ft=>e(ft,o),lt=ft=>{r(ft,o),Ia(f,y,W,lt,o)};return Oa(a,O,o),()=>Na(a,O,o)},Ma=t=>(e,r="children")=>{if(!s(e))return e;const o=a=>(a.map(f=>{s(f[r])&&(f[r]=o(f[r]))}),t(a));return o(e)},Ba=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),La=(t,e="fuckId",r="children")=>so((o,a,f)=>{o[e]=[...a.map(y=>y["@@index"]),f].join("-")})(t,r),Ha=(t,e,r,o="children")=>I((a,f)=>{const y=a[f];return y[o]=[...y[o]||[],...r],!0})(t,e),Wa=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Va=t=>N()?(m.map(e=>document.addEventListener(e,t,!1)),()=>m.map(e=>document.removeEventListener(e,t,!1))):void 0,Ya=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:a="middle",font:f="20px microsoft yahei",fillStyle:y="rgba(202,202,202,0.4)",content:O="\u8BF7\u52FF\u5916\u4F20",rotate:W="-30",zIndex:lt=1e3}={})=>{if(!N())return;t=q(t)?t.current:t??document.body;const ft=t.firstChild;ft?.className==="watermark-canvas"&&t.removeChild(ft);const re=document.createElement("canvas");re.setAttribute("width",e),re.setAttribute("height",r);const oe=re.getContext("2d");oe.textAlign=o,oe.textBaseline=a,oe.font=f,oe.fillStyle=y,oe.rotate(Math.PI/180*W),oe.fillText(O,parseFloat(e)/2,parseFloat(r)/2);const Yr=re.toDataURL(),fr=document.createElement("div");fr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${lt};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Yr}')`),t.style.position="relative",t.insertBefore(fr,t.firstChild)},Za=(t=new Date)=>{const e=new Date(t).getDay();return[K(1-e),K(7-e)]},Ua=t=>{if(!pe(t))return{};let e="pending",r;const o=t.then(a=>{e="success",r=a}).catch(a=>{e="error",r=a});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},el=l.NzM,rl=l.wBC,ol=l.O39,nl=l.cnu,al=l.E4D,il=l.TRp,sl=l.zI1,ll=l.Ufj,cl=l.GxO,ul=l.cu2,dl=l.BcS,hl=l.lPd,fl=l.dC1,Ka=l.$L2,pl=l.Vji,ml=l.YxP,Xa=l.UhT,qa=l.JaC,xl=l.o4B,gl=l.Hlr,Ga=l.muM,yl=l.OiV,bl=l.KTn,vl=l.lwL,wl=l.d9v,kl=l.yCD,Cl=l.qCK,Ja=l.vQq,Qa=l.fHt,El=l.azq,jl=l.dSY,ti=l.MTn,Sl=l.RYO,_l=l.WAo,Fl=l.GVc,zl=l.Emy,Al=l.v9O,$l=l.DsO,Dl=l._lj,Tl=l.vO6,ei=l.xDX,Ol=l.hf3,Nl=l.ip7,Pl=l.uYe,Il=l.DgJ,Rl=l.rae,Ml=l.YBu,ri=l._iG,Bl=l.hXT,Ll=l.gQq,Hl=l.D_D,Wl=l.$nD,oi=l.dtG,Vl=l.Y0R,ni=l.qg7,Yl=l.Xxf,Zl=l.tSM,ai=l.Few,Ul=l.xHg,Kl=l.aoj,Xl=l.Dlm,ii=l.mrB,si=l.dKu,ql=l.v1d,li=l.afD,Gl=l.Lz5,Jl=l.xZX,Ql=l.G_1,tc=l.osI,ci=l.PTJ,ui=l.Qfx,ec=l.bti,di=l.XBv,hi=l.eyl,rc=l.y35,oc=l.hKD,fi=l.BWC,nc=l.oLi,pi=l.NA2,ac=l.S3Y,ic=l.pvT,sc=l.m2f,mi=l.rWO,lc=l.A$w,cc=l.kJL,uc=l.S9U,dc=l.dYC,hc=l.jUY,fc=l.J_U,pc=l.kKo,mc=l.VZO,xc=l.mf2,gc=l.w1q,yc=l.Kn2,bc=l.ncl,vc=l.LWC,wc=l.dqb,kc=l.Kjn,Cc=l.TaN,Ec=l.CBv,xi=l.rTd,jc=l.B73,Sc=l.SSA,gi=l.CLv,_c=l.F$z,Fc=l.XT_,zc=l.omS,Ac=l.poV,$c=l.VXY,Dc=l.xsP,Tc=l.HPs,Oc=l.TSy,yi=l.B5o,Nc=l.u1A,Pc=l.WAY,Ic=l.I8J,bi=l.ywV,Rc=l.bEN,Mc=l.$45,Bc=l.TUk,Lc=l.T7B,Hc=l.CEd,Wc=l.IHq,Vc=l.SkG,Yc=l.Smz,vi=l.nL5,Zc=l.ON,Uc=l.eiS,Kc=l.Frc,Xc=l.z5J,qc=l.scT,wi=l.hd2,Gc=l.AnA,Jc=l.kYX,ki=l.yZP,Qc=l.IVd,tu=l.SIr,Ci=l.jg2,Ei=l.gVz,eu=l.puc,ru=l.Azz,ou=l.X5u,nu=l.dPh,au=l.SMZ,iu=l.kro,su=l.nPi,lu=l.US,ji=l.A_F,Si=l._vH,cu=l.gmH,uu=l.DYV,du=l.qi2,_i=l.tOc,hu=l.hau,fu=l.FaZ,pu=l.uyF,Fi=l.Vcq,mu=l.XKW,zi=l.azd,xu=l.P2K,Ai=l.XBe,gu=l.JZ7,yu=l.ABi,bu=l.ogC,$i=l.Og,Di=l._O2,vu=l.P0C,wu=l.Uo5,ku=l.Two,Cu=l.tYQ,Eu=l.tVn,ju=l.pHy,Ti=l.k$y,Oi=l.yfi,Su=l.fl8,Ni=l.f9u,_u=l.ZV1,Pi=l.Lgs}}]);
