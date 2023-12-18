(self.webpackChunk=self.webpackChunk||[]).push([[415],{47845:function(ye,Gt,_t){_t.d(Gt,{T6:function(){return A},VD:function(){return S},WE:function(){return C},Yt:function(){return H},lC:function(){return Rt},py:function(){return B},rW:function(){return l},s:function(){return z},ve:function(){return it},vq:function(){return s}});var V=_t(39057);function l(p,D,F){return{r:(0,V.sh)(p,255)*255,g:(0,V.sh)(D,255)*255,b:(0,V.sh)(F,255)*255}}function Rt(p,D,F){p=(0,V.sh)(p,255),D=(0,V.sh)(D,255),F=(0,V.sh)(F,255);var Z=Math.max(p,D,F),W=Math.min(p,D,F),U=0,ht=0,wt=(Z+W)/2;if(Z===W)ht=0,U=0;else{var $t=Z-W;switch(ht=wt>.5?$t/(2-Z-W):$t/(Z+W),Z){case p:U=(D-F)/$t+(D<F?6:0);break;case D:U=(F-p)/$t+2;break;case F:U=(p-D)/$t+4;break;default:break}U/=6}return{h:U,s:ht,l:wt}}function jt(p,D,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?p+(D-p)*(6*F):F<1/2?D:F<2/3?p+(D-p)*(2/3-F)*6:p}function it(p,D,F){var Z,W,U;if(p=(0,V.sh)(p,360),D=(0,V.sh)(D,100),F=(0,V.sh)(F,100),D===0)W=F,U=F,Z=F;else{var ht=F<.5?F*(1+D):F+D-F*D,wt=2*F-ht;Z=jt(wt,ht,p+1/3),W=jt(wt,ht,p),U=jt(wt,ht,p-1/3)}return{r:Z*255,g:W*255,b:U*255}}function B(p,D,F){p=(0,V.sh)(p,255),D=(0,V.sh)(D,255),F=(0,V.sh)(F,255);var Z=Math.max(p,D,F),W=Math.min(p,D,F),U=0,ht=Z,wt=Z-W,$t=Z===0?0:wt/Z;if(Z===W)U=0;else{switch(Z){case p:U=(D-F)/wt+(D<F?6:0);break;case D:U=(F-p)/wt+2;break;case F:U=(p-D)/wt+4;break;default:break}U/=6}return{h:U,s:$t,v:ht}}function C(p,D,F){p=(0,V.sh)(p,360)*6,D=(0,V.sh)(D,100),F=(0,V.sh)(F,100);var Z=Math.floor(p),W=p-Z,U=F*(1-D),ht=F*(1-W*D),wt=F*(1-(1-W)*D),$t=Z%6,xt=[F,ht,U,U,wt,F][$t],Tt=[wt,F,F,ht,U,U][$t],Zt=[U,U,wt,F,F,ht][$t];return{r:xt*255,g:Tt*255,b:Zt*255}}function s(p,D,F,Z){var W=[(0,V.FZ)(Math.round(p).toString(16)),(0,V.FZ)(Math.round(D).toString(16)),(0,V.FZ)(Math.round(F).toString(16))];return Z&&W[0].startsWith(W[0].charAt(1))&&W[1].startsWith(W[1].charAt(1))&&W[2].startsWith(W[2].charAt(1))?W[0].charAt(0)+W[1].charAt(0)+W[2].charAt(0):W.join("")}function z(p,D,F,Z,W){var U=[(0,V.FZ)(Math.round(p).toString(16)),(0,V.FZ)(Math.round(D).toString(16)),(0,V.FZ)(Math.round(F).toString(16)),(0,V.FZ)(dt(Z))];return W&&U[0].startsWith(U[0].charAt(1))&&U[1].startsWith(U[1].charAt(1))&&U[2].startsWith(U[2].charAt(1))&&U[3].startsWith(U[3].charAt(1))?U[0].charAt(0)+U[1].charAt(0)+U[2].charAt(0)+U[3].charAt(0):U.join("")}function I(p,D,F,Z){var W=[pad2(dt(Z)),pad2(Math.round(p).toString(16)),pad2(Math.round(D).toString(16)),pad2(Math.round(F).toString(16))];return W.join("")}function dt(p){return Math.round(parseFloat(p)*255).toString(16)}function A(p){return S(p)/255}function S(p){return parseInt(p,16)}function H(p){return{r:p>>16,g:(p&65280)>>8,b:p&255}}},97649:function(ye,Gt,_t){_t.d(Gt,{R:function(){return V}});var V={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},13144:function(ye,Gt,_t){_t.d(Gt,{uA:function(){return jt}});var V=_t(47845),l=_t(97649),Rt=_t(39057);function jt(S){var H={r:0,g:0,b:0},p=1,D=null,F=null,Z=null,W=!1,U=!1;return typeof S=="string"&&(S=dt(S)),typeof S=="object"&&(A(S.r)&&A(S.g)&&A(S.b)?(H=(0,V.rW)(S.r,S.g,S.b),W=!0,U=String(S.r).substr(-1)==="%"?"prgb":"rgb"):A(S.h)&&A(S.s)&&A(S.v)?(D=(0,Rt.JX)(S.s),F=(0,Rt.JX)(S.v),H=(0,V.WE)(S.h,D,F),W=!0,U="hsv"):A(S.h)&&A(S.s)&&A(S.l)&&(D=(0,Rt.JX)(S.s),Z=(0,Rt.JX)(S.l),H=(0,V.ve)(S.h,D,Z),W=!0,U="hsl"),Object.prototype.hasOwnProperty.call(S,"a")&&(p=S.a)),p=(0,Rt.Yq)(p),{ok:W,format:S.format||U,r:Math.min(255,Math.max(H.r,0)),g:Math.min(255,Math.max(H.g,0)),b:Math.min(255,Math.max(H.b,0)),a:p}}var it="[-\\+]?\\d+%?",B="[-\\+]?\\d*\\.\\d+%?",C="(?:".concat(B,")|(?:").concat(it,")"),s="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),z="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),I={CSS_UNIT:new RegExp(C),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+z),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+z),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function dt(S){if(S=S.trim().toLowerCase(),S.length===0)return!1;var H=!1;if(l.R[S])S=l.R[S],H=!0;else if(S==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var p=I.rgb.exec(S);return p?{r:p[1],g:p[2],b:p[3]}:(p=I.rgba.exec(S),p?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=I.hsl.exec(S),p?{h:p[1],s:p[2],l:p[3]}:(p=I.hsla.exec(S),p?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=I.hsv.exec(S),p?{h:p[1],s:p[2],v:p[3]}:(p=I.hsva.exec(S),p?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=I.hex8.exec(S),p?{r:(0,V.VD)(p[1]),g:(0,V.VD)(p[2]),b:(0,V.VD)(p[3]),a:(0,V.T6)(p[4]),format:H?"name":"hex8"}:(p=I.hex6.exec(S),p?{r:(0,V.VD)(p[1]),g:(0,V.VD)(p[2]),b:(0,V.VD)(p[3]),format:H?"name":"hex"}:(p=I.hex4.exec(S),p?{r:(0,V.VD)(p[1]+p[1]),g:(0,V.VD)(p[2]+p[2]),b:(0,V.VD)(p[3]+p[3]),a:(0,V.T6)(p[4]+p[4]),format:H?"name":"hex8"}:(p=I.hex3.exec(S),p?{r:(0,V.VD)(p[1]+p[1]),g:(0,V.VD)(p[2]+p[2]),b:(0,V.VD)(p[3]+p[3]),format:H?"name":"hex"}:!1)))))))))}function A(S){return!!I.CSS_UNIT.exec(String(S))}},68645:function(ye,Gt,_t){_t.d(Gt,{C:function(){return it}});var V=_t(47845),l=_t(97649),Rt=_t(13144),jt=_t(39057),it=function(){function C(s,z){s===void 0&&(s=""),z===void 0&&(z={});var I;if(s instanceof C)return s;typeof s=="number"&&(s=(0,V.Yt)(s)),this.originalInput=s;var dt=(0,Rt.uA)(s);this.originalInput=s,this.r=dt.r,this.g=dt.g,this.b=dt.b,this.a=dt.a,this.roundA=Math.round(100*this.a)/100,this.format=(I=z.format)!==null&&I!==void 0?I:dt.format,this.gradientType=z.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=dt.ok}return C.prototype.isDark=function(){return this.getBrightness()<128},C.prototype.isLight=function(){return!this.isDark()},C.prototype.getBrightness=function(){var s=this.toRgb();return(s.r*299+s.g*587+s.b*114)/1e3},C.prototype.getLuminance=function(){var s=this.toRgb(),z,I,dt,A=s.r/255,S=s.g/255,H=s.b/255;return A<=.03928?z=A/12.92:z=Math.pow((A+.055)/1.055,2.4),S<=.03928?I=S/12.92:I=Math.pow((S+.055)/1.055,2.4),H<=.03928?dt=H/12.92:dt=Math.pow((H+.055)/1.055,2.4),.2126*z+.7152*I+.0722*dt},C.prototype.getAlpha=function(){return this.a},C.prototype.setAlpha=function(s){return this.a=(0,jt.Yq)(s),this.roundA=Math.round(100*this.a)/100,this},C.prototype.isMonochrome=function(){var s=this.toHsl().s;return s===0},C.prototype.toHsv=function(){var s=(0,V.py)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,v:s.v,a:this.a}},C.prototype.toHsvString=function(){var s=(0,V.py)(this.r,this.g,this.b),z=Math.round(s.h*360),I=Math.round(s.s*100),dt=Math.round(s.v*100);return this.a===1?"hsv(".concat(z,", ").concat(I,"%, ").concat(dt,"%)"):"hsva(".concat(z,", ").concat(I,"%, ").concat(dt,"%, ").concat(this.roundA,")")},C.prototype.toHsl=function(){var s=(0,V.lC)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,l:s.l,a:this.a}},C.prototype.toHslString=function(){var s=(0,V.lC)(this.r,this.g,this.b),z=Math.round(s.h*360),I=Math.round(s.s*100),dt=Math.round(s.l*100);return this.a===1?"hsl(".concat(z,", ").concat(I,"%, ").concat(dt,"%)"):"hsla(".concat(z,", ").concat(I,"%, ").concat(dt,"%, ").concat(this.roundA,")")},C.prototype.toHex=function(s){return s===void 0&&(s=!1),(0,V.vq)(this.r,this.g,this.b,s)},C.prototype.toHexString=function(s){return s===void 0&&(s=!1),"#"+this.toHex(s)},C.prototype.toHex8=function(s){return s===void 0&&(s=!1),(0,V.s)(this.r,this.g,this.b,this.a,s)},C.prototype.toHex8String=function(s){return s===void 0&&(s=!1),"#"+this.toHex8(s)},C.prototype.toHexShortString=function(s){return s===void 0&&(s=!1),this.a===1?this.toHexString(s):this.toHex8String(s)},C.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},C.prototype.toRgbString=function(){var s=Math.round(this.r),z=Math.round(this.g),I=Math.round(this.b);return this.a===1?"rgb(".concat(s,", ").concat(z,", ").concat(I,")"):"rgba(".concat(s,", ").concat(z,", ").concat(I,", ").concat(this.roundA,")")},C.prototype.toPercentageRgb=function(){var s=function(z){return"".concat(Math.round((0,jt.sh)(z,255)*100),"%")};return{r:s(this.r),g:s(this.g),b:s(this.b),a:this.a}},C.prototype.toPercentageRgbString=function(){var s=function(z){return Math.round((0,jt.sh)(z,255)*100)};return this.a===1?"rgb(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%)"):"rgba(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%, ").concat(this.roundA,")")},C.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var s="#"+(0,V.vq)(this.r,this.g,this.b,!1),z=0,I=Object.entries(l.R);z<I.length;z++){var dt=I[z],A=dt[0],S=dt[1];if(s===S)return A}return!1},C.prototype.toString=function(s){var z=!!s;s=s??this.format;var I=!1,dt=this.a<1&&this.a>=0,A=!z&&dt&&(s.startsWith("hex")||s==="name");return A?s==="name"&&this.a===0?this.toName():this.toRgbString():(s==="rgb"&&(I=this.toRgbString()),s==="prgb"&&(I=this.toPercentageRgbString()),(s==="hex"||s==="hex6")&&(I=this.toHexString()),s==="hex3"&&(I=this.toHexString(!0)),s==="hex4"&&(I=this.toHex8String(!0)),s==="hex8"&&(I=this.toHex8String()),s==="name"&&(I=this.toName()),s==="hsl"&&(I=this.toHslString()),s==="hsv"&&(I=this.toHsvString()),I||this.toHexString())},C.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},C.prototype.clone=function(){return new C(this.toString())},C.prototype.lighten=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.l+=s/100,z.l=(0,jt.V2)(z.l),new C(z)},C.prototype.brighten=function(s){s===void 0&&(s=10);var z=this.toRgb();return z.r=Math.max(0,Math.min(255,z.r-Math.round(255*-(s/100)))),z.g=Math.max(0,Math.min(255,z.g-Math.round(255*-(s/100)))),z.b=Math.max(0,Math.min(255,z.b-Math.round(255*-(s/100)))),new C(z)},C.prototype.darken=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.l-=s/100,z.l=(0,jt.V2)(z.l),new C(z)},C.prototype.tint=function(s){return s===void 0&&(s=10),this.mix("white",s)},C.prototype.shade=function(s){return s===void 0&&(s=10),this.mix("black",s)},C.prototype.desaturate=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.s-=s/100,z.s=(0,jt.V2)(z.s),new C(z)},C.prototype.saturate=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.s+=s/100,z.s=(0,jt.V2)(z.s),new C(z)},C.prototype.greyscale=function(){return this.desaturate(100)},C.prototype.spin=function(s){var z=this.toHsl(),I=(z.h+s)%360;return z.h=I<0?360+I:I,new C(z)},C.prototype.mix=function(s,z){z===void 0&&(z=50);var I=this.toRgb(),dt=new C(s).toRgb(),A=z/100,S={r:(dt.r-I.r)*A+I.r,g:(dt.g-I.g)*A+I.g,b:(dt.b-I.b)*A+I.b,a:(dt.a-I.a)*A+I.a};return new C(S)},C.prototype.analogous=function(s,z){s===void 0&&(s=6),z===void 0&&(z=30);var I=this.toHsl(),dt=360/z,A=[this];for(I.h=(I.h-(dt*s>>1)+720)%360;--s;)I.h=(I.h+dt)%360,A.push(new C(I));return A},C.prototype.complement=function(){var s=this.toHsl();return s.h=(s.h+180)%360,new C(s)},C.prototype.monochromatic=function(s){s===void 0&&(s=6);for(var z=this.toHsv(),I=z.h,dt=z.s,A=z.v,S=[],H=1/s;s--;)S.push(new C({h:I,s:dt,v:A})),A=(A+H)%1;return S},C.prototype.splitcomplement=function(){var s=this.toHsl(),z=s.h;return[this,new C({h:(z+72)%360,s:s.s,l:s.l}),new C({h:(z+216)%360,s:s.s,l:s.l})]},C.prototype.onBackground=function(s){var z=this.toRgb(),I=new C(s).toRgb(),dt=z.a+I.a*(1-z.a);return new C({r:(z.r*z.a+I.r*I.a*(1-z.a))/dt,g:(z.g*z.a+I.g*I.a*(1-z.a))/dt,b:(z.b*z.a+I.b*I.a*(1-z.a))/dt,a:dt})},C.prototype.triad=function(){return this.polyad(3)},C.prototype.tetrad=function(){return this.polyad(4)},C.prototype.polyad=function(s){for(var z=this.toHsl(),I=z.h,dt=[this],A=360/s,S=1;S<s;S++)dt.push(new C({h:(I+S*A)%360,s:z.s,l:z.l}));return dt},C.prototype.equals=function(s){return this.toRgbString()===new C(s).toRgbString()},C}();function B(C,s){return C===void 0&&(C=""),s===void 0&&(s={}),new it(C,s)}},39057:function(ye,Gt,_t){_t.d(Gt,{FZ:function(){return C},JX:function(){return B},V2:function(){return l},Yq:function(){return it},sh:function(){return V}});function V(s,z){Rt(s)&&(s="100%");var I=jt(s);return s=z===360?s:Math.min(z,Math.max(0,parseFloat(s))),I&&(s=parseInt(String(s*z),10)/100),Math.abs(s-z)<1e-6?1:(z===360?s=(s<0?s%z+z:s%z)/parseFloat(String(z)):s=s%z/parseFloat(String(z)),s)}function l(s){return Math.min(1,Math.max(0,s))}function Rt(s){return typeof s=="string"&&s.indexOf(".")!==-1&&parseFloat(s)===1}function jt(s){return typeof s=="string"&&s.indexOf("%")!==-1}function it(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function B(s){return s<=1?"".concat(Number(s)*100,"%"):s}function C(s){return s.length===1?"0"+s:String(s)}},82610:function(ye,Gt){function _t(V){for(var l=0,Rt,jt=0,it=V.length;it>=4;++jt,it-=4)Rt=V.charCodeAt(jt)&255|(V.charCodeAt(++jt)&255)<<8|(V.charCodeAt(++jt)&255)<<16|(V.charCodeAt(++jt)&255)<<24,Rt=(Rt&65535)*1540483477+((Rt>>>16)*59797<<16),Rt^=Rt>>>24,l=(Rt&65535)*1540483477+((Rt>>>16)*59797<<16)^(l&65535)*1540483477+((l>>>16)*59797<<16);switch(it){case 3:l^=(V.charCodeAt(jt+2)&255)<<16;case 2:l^=(V.charCodeAt(jt+1)&255)<<8;case 1:l^=V.charCodeAt(jt)&255,l=(l&65535)*1540483477+((l>>>16)*59797<<16)}return l^=l>>>13,l=(l&65535)*1540483477+((l>>>16)*59797<<16),((l^l>>>15)>>>0).toString(36)}Gt.Z=_t},84380:function(ye,Gt){var _t={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};Gt.Z=_t},60042:function(ye,Gt){var _t,V;(function(){"use strict";var l={}.hasOwnProperty,Rt="[native code]";function jt(){for(var it=[],B=0;B<arguments.length;B++){var C=arguments[B];if(C){var s=typeof C;if(s==="string"||s==="number")it.push(C);else if(Array.isArray(C)){if(C.length){var z=jt.apply(null,C);z&&it.push(z)}}else if(s==="object"){if(C.toString!==Object.prototype.toString&&!C.toString.toString().includes("[native code]")){it.push(C.toString());continue}for(var I in C)l.call(C,I)&&C[I]&&it.push(I)}}}return it.join(" ")}ye.exports?(jt.default=jt,ye.exports=jt):(_t=[],V=function(){return jt}.apply(Gt,_t),V!==void 0&&(ye.exports=V))})()},74335:function(ye,Gt,_t){var V;_t.d(Gt,{$j:function(){return Qt},AN:function(){return W},BQ:function(){return ht},GK:function(){return N},Hn:function(){return D},JX:function(){return dt},PC:function(){return s},SV:function(){return p},Ud:function(){return S},V7:function(){return Z},X2:function(){return Zt},dy:function(){return A},h_:function(){return Tt},mH:function(){return H},pC:function(){return ce},rj:function(){return F},s_:function(){return xt},u_:function(){return $t},zd:function(){return U}});var l=_t(27378),Rt=_t(31542),jt={269:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`/*@height:2px;
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
`,""]),M.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const rt=M},528:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.kLIGi {
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
`,""]),M.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const rt=M},434:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`@keyframes animate-drawer-right-in {
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
  --headerHeight: 44px;
  --footerHeight: 0px;
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
}
.W4gG3 .SMORg {
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
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
`,""]),M.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const rt=M},503:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`@keyframes animate-drop-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 25px, 0);
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
    transform: translate3d(0, 25px, 0);
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
`,""]),M.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const rt=M},556:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.huxy-doc-frame {
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
`,""]),M.locals={};const rt=M},548:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`@keyframes animate-modal-in {
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
`,""]),M.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const rt=M},232:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.clear::after {
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
`,""]),M.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const rt=M},249:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.cols-1 {
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
`,""]),M.locals={};const rt=M},990:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`@keyframes before {
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
`,""]),M.locals={};const rt=M},575:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.clear::after {
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
`,""]),M.locals={};const rt=M},918:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.ofth_ {
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
`,""]),M.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const rt=M},942:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`.node-right-icon-close {
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
`,""]),M.locals={};const rt=M},609:f=>{f.exports=function(G){var b=[];return b.toString=function(){return this.map(function(K){var R="",Y=typeof K[5]<"u";return K[4]&&(R+="@supports (".concat(K[4],") {")),K[2]&&(R+="@media ".concat(K[2]," {")),Y&&(R+="@layer".concat(K[5].length>0?" ".concat(K[5]):""," {")),R+=G(K),Y&&(R+="}"),K[2]&&(R+="}"),K[4]&&(R+="}"),R}).join("")},b.i=function(K,R,Y,P,M){typeof K=="string"&&(K=[[null,K,void 0]]);var rt={};if(Y)for(var Ft=0;Ft<this.length;Ft++){var zt=this[Ft][0];zt!=null&&(rt[zt]=!0)}for(var Bt=0;Bt<K.length;Bt++){var pt=[].concat(K[Bt]);Y&&rt[pt[0]]||(typeof M<"u"&&(typeof pt[5]>"u"||(pt[1]="@layer".concat(pt[5].length>0?" ".concat(pt[5]):""," {").concat(pt[1],"}")),pt[5]=M),R&&(pt[2]&&(pt[1]="@media ".concat(pt[2]," {").concat(pt[1],"}")),pt[2]=R),P&&(pt[4]?(pt[1]="@supports (".concat(pt[4],") {").concat(pt[1],"}"),pt[4]=P):pt[4]="".concat(P)),b.push(pt))}},b}},601:f=>{f.exports=function(G){return G[1]}},837:(f,G,b)=>{var K=b(810),R=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,M=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0};function Ft(zt,Bt,pt){var Dt,Ht={},ne=null,Xt=null;pt!==void 0&&(ne=""+pt),Bt.key!==void 0&&(ne=""+Bt.key),Bt.ref!==void 0&&(Xt=Bt.ref);for(Dt in Bt)P.call(Bt,Dt)&&!rt.hasOwnProperty(Dt)&&(Ht[Dt]=Bt[Dt]);if(zt&&zt.defaultProps)for(Dt in Bt=zt.defaultProps,Bt)Ht[Dt]===void 0&&(Ht[Dt]=Bt[Dt]);return{$$typeof:R,type:zt,key:ne,ref:Xt,props:Ht,_owner:M.current}}G.Fragment=Y,G.jsx=Ft,G.jsxs=Ft},322:(f,G,b)=>{f.exports=b(837)},62:f=>{var G=[];function b(Y){for(var P=-1,M=0;M<G.length;M++)if(G[M].identifier===Y){P=M;break}return P}function K(Y,P){for(var M={},rt=[],Ft=0;Ft<Y.length;Ft++){var zt=Y[Ft],Bt=P.base?zt[0]+P.base:zt[0],pt=M[Bt]||0,Dt="".concat(Bt," ").concat(pt);M[Bt]=pt+1;var Ht=b(Dt),ne={css:zt[1],media:zt[2],sourceMap:zt[3],supports:zt[4],layer:zt[5]};if(Ht!==-1)G[Ht].references++,G[Ht].updater(ne);else{var Xt=R(ne,P);P.byIndex=Ft,G.splice(Ft,0,{identifier:Dt,updater:Xt,references:1})}rt.push(Dt)}return rt}function R(Y,P){var M=P.domAPI(P);M.update(Y);var rt=function(Ft){if(Ft){if(Ft.css===Y.css&&Ft.media===Y.media&&Ft.sourceMap===Y.sourceMap&&Ft.supports===Y.supports&&Ft.layer===Y.layer)return;M.update(Y=Ft)}else M.remove()};return rt}f.exports=function(Y,P){P=P||{},Y=Y||[];var M=K(Y,P);return function(rt){rt=rt||[];for(var Ft=0;Ft<M.length;Ft++){var zt=M[Ft],Bt=b(zt);G[Bt].references--}for(var pt=K(rt,P),Dt=0;Dt<M.length;Dt++){var Ht=M[Dt],ne=b(Ht);G[ne].references===0&&(G[ne].updater(),G.splice(ne,1))}M=pt}}},793:f=>{var G={};function b(R){if(typeof G[R]>"u"){var Y=document.querySelector(R);if(window.HTMLIFrameElement&&Y instanceof window.HTMLIFrameElement)try{Y=Y.contentDocument.head}catch{Y=null}G[R]=Y}return G[R]}function K(R,Y){var P=b(R);if(!P)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");P.appendChild(Y)}f.exports=K},173:f=>{function G(b){var K=document.createElement("style");return b.setAttributes(K,b.attributes),b.insert(K,b.options),K}f.exports=G},892:(f,G,b)=>{function K(R){var Y=b.nc;Y&&R.setAttribute("nonce",Y)}f.exports=K},36:f=>{function G(R,Y,P){var M="";P.supports&&(M+="@supports (".concat(P.supports,") {")),P.media&&(M+="@media ".concat(P.media," {"));var rt=typeof P.layer<"u";rt&&(M+="@layer".concat(P.layer.length>0?" ".concat(P.layer):""," {")),M+=P.css,rt&&(M+="}"),P.media&&(M+="}"),P.supports&&(M+="}");var Ft=P.sourceMap;Ft&&typeof btoa<"u"&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ft))))," */")),Y.styleTagTransform(M,R,Y.options)}function b(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)}function K(R){if(typeof document>"u")return{update:function(){},remove:function(){}};var Y=R.insertStyleElement(R);return{update:function(P){G(Y,R,P)},remove:function(){b(Y)}}}f.exports=K},464:f=>{function G(b,K){if(K.styleSheet)K.styleSheet.cssText=b;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(b))}}f.exports=G},810:f=>{var G=K=>{var R={};return B.d(R,K),R},b=K=>()=>K;f.exports=V||(V=_t.t(l,2))}},it={};function B(f){var G=it[f];if(G!==void 0)return G.exports;var b=it[f]={id:f,exports:{}};return jt[f](b,b.exports,B),b.exports}B.n=f=>{var G=f&&f.__esModule?()=>f.default:()=>f;return B.d(G,{a:G}),G},B.d=(f,G)=>{for(var b in G)B.o(G,b)&&!B.o(f,b)&&Object.defineProperty(f,b,{enumerable:!0,get:G[b]})},B.o=(f,G)=>Object.prototype.hasOwnProperty.call(f,G),B.nc=void 0;var C={};(()=>{B.d(C,{PC:()=>Dr,rK:()=>er,lr:()=>wr,JX:()=>kr,dy:()=>L,Ud:()=>E,mH:()=>Ot,SV:()=>It,Hn:()=>Ke,rj:()=>qr,V7:()=>Me,AN:()=>Re,zd:()=>Pr,BQ:()=>Mr,Ur:()=>Qr,u_:()=>no,s_:()=>yo,h_:()=>Ee,X2:()=>Sr,$j:()=>Gr,GK:()=>Yo,u:()=>et,mp:()=>qo,C2:()=>Et,pC:()=>Wt,ff:()=>ho,d2:()=>le,Uw:()=>Zo});var f=B(322),G=B(62),b=B.n(G),K=B(36),R=B.n(K),Y=B(793),P=B.n(Y),M=B(892),rt=B.n(M),Ft=B(173),zt=B.n(Ft),Bt=B(464),pt=B.n(Bt),Dt=B(269),Ht={};Ht.styleTagTransform=pt(),Ht.setAttributes=rt(),Ht.insert=P().bind(null,"head"),Ht.domAPI=R(),Ht.insertStyleElement=zt();var ne=b()(Dt.Z,Ht);const Xt=Dt.Z&&Dt.Z.locals?Dt.Z.locals:void 0,Dr=n=>(0,f.jsx)("span",{className:Xt.anico,children:(0,f.jsx)("span",{className:[Xt.hline,...(n.type||"").split(" ").map(i=>Xt[i]).filter(Boolean)].join(" ")})});var X=B(810);const tr=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),Ve=n=>new Promise((i,u)=>{const m=new FileReader;m.readAsDataURL(n),m.addEventListener("load",()=>i(m.result)),m.addEventListener("error",j=>u(j))}),Or=async n=>{if(!tr(n))return n;const i=await(await fetch(decodeURIComponent(n))).blob();return await Ve(i)},mr=n=>{const[i,u]=(0,X.useState)(n);return(0,X.useEffect)(()=>{(async m=>{const j=await Or(m);u(j)})(n)},[n]),i},er=({src:n,...i})=>{const u=mr(n);return(0,f.jsx)("img",{...i,src:u})};var xr=n=>{var i={};return B.d(i,n),i},gr=n=>()=>n;const rr=xr({createPortal:()=>Rt.createPortal,flushSync:()=>Rt.flushSync}),or=(n,i)=>{const u=(0,X.useRef)();(0,X.useEffect)(()=>{u.current=n},[n]),(0,X.useEffect)(()=>{if(i){const m=setInterval(()=>u.current(),i);return()=>clearInterval(m)}},[i])},fe=()=>![typeof window,typeof document].includes("undefined"),$e=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),nr=n=>$e(n).indexOf("element")>-1,ie=(n=null)=>fe()?nr(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},yr=(n=()=>{},i=60)=>{let u=null;return function(...m){clearTimeout(u),u=setTimeout(()=>n.apply(this,m),i)}},De=(n,i)=>Object.prototype.hasOwnProperty.call(n??{},i),ue=n=>De(n,"current"),Ze=(n,i)=>{const u=[],m=n.children??[];for(let j=0,_=m.length;j<_;j++){const T=m[j];T.className.indexOf(i)>-1&&u.push(T)}return u.length===0?null:u.length===1?u[0]:u},Yr=(n,i)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const u=document.createElement("object");return u.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),u.setAttribute("class","resize-sensor"),u.onload=()=>{u.contentDocument.defaultView.addEventListener("resize",i,!1),i()},u.type="text/html",n.appendChild(u),u.data="about:blank",u},br=(n,i=60)=>{if(!fe())return;n=ue(n)?n.current:n??document.body;let u=Ze(n,"resize-sensor"),m=[];const j=yr(()=>m.map(ot=>ot(n)),i),_=ot=>{Ze(n,"resize-sensor")||(u=Yr(n,j)),m.indexOf(ot)===-1&&m.push(ot)},T=ot=>{const lt=m.indexOf(ot);lt!==-1&&m.splice(lt,1),m.length===0&&u&&tt()},tt=()=>{u&&u.parentNode&&(u.contentDocument&&u.contentDocument.defaultView.removeEventListener("resize",j,!1),u.parentNode.removeChild(u),u=void 0,m=[])};return{element:n,bind:_,unbind:T,destroy:tt}},Tr=(n={})=>{const i=(0,X.useRef)(0),[u,m]=(0,X.useState)(n),j=(0,X.useCallback)(_=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>m(_))},[]);return(0,X.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[u,j]},vr=(n=null,i=60)=>{const u=ue(n)?n.current:n,{bind:m,destroy:j}=br(u,i),[_,T]=Tr(ie(u));return(0,X.useEffect)(()=>(m(()=>u&&T(ie(u))),()=>j()),[u]),_};var Ye=B(528),pe={};pe.styleTagTransform=pt(),pe.setAttributes=rt(),pe.insert=P().bind(null,"head"),pe.domAPI=R(),pe.insertStyleElement=zt();var Ur=b()(Ye.Z,pe);const be=Ye.Z&&Ye.Z.locals?Ye.Z.locals:void 0,wr=({children:n,active:i=0,delay:u=5e3,className:m,...j})=>{const[_,T]=(0,X.useState)(i+1),[tt,ot]=(0,X.useState)(!1),lt=(0,X.useRef)(),vt=(0,X.useRef)(""),{width:bt}=vr(lt);n=Array.isArray(n)?n:[n];const yt=n[0],Kt=[n[n.length-1],...n,yt],qt=Kt.length;or(()=>{let Pt=_+1;Pt=Pt===qt?1:Pt,vt.current&&(vt.current=""),T(Pt),Pt===qt-1&&setTimeout(()=>{vt.current="none",T(1)},500)},tt?null:u);const Nt=(Pt,ee)=>{ee.stopPropagation(),vt.current="",T(Pt),(0,rr.flushSync)(()=>ot(!0)),ot(!1)},Mt={width:`${qt*bt}px`,transform:`translateX(${-bt*_}px)`,transition:vt.current};return(0,f.jsxs)("div",{className:`${be["huxy-carousel"]}${m?` ${m}`:""}`,...j,ref:lt,children:[(0,f.jsx)("div",{className:be["huxy-carousel-wrap"],style:Mt,children:Kt.map((Pt,ee)=>(0,f.jsx)("div",{className:`${be["carousel-item"]} ${_===ee?be.active:""}`,style:{width:`${bt}px`},children:Pt},`huxy-carousel-${ee}`))}),(0,f.jsx)("div",{className:be["carousel-switch"],children:n.map((Pt,ee)=>(0,f.jsx)("span",{className:`${be.dot} ${_===ee+1?be.active:""}`,onClick:ve=>Nt(ee+1,ve)},`huxy-carousel-switch-${ee}`))})]})},me=(n,i)=>{let u="",m="";if(typeof i=="number"&&(u=`col-${n}-${i}`),typeof i=="object"){const{span:j,offset:_}=i;u=j?`col-${n}-${j}`:"",m=_?`offset-${n}-${_}`:""}return{sp:u,os:m}},kr=(0,X.forwardRef)(({span:n,offset:i,xl:u,lg:m,md:j,sm:_,xs:T,style:tt,width:ot,auto:lt,offsetWidth:vt="0px",className:bt,...yt},Kt)=>{const qt=bt?` ${bt}`:"",Nt=`col-${n||12}`,Mt=i?`offset-${i}`:"",{sp:Pt,os:ee}=me("xs",T),{sp:ve,os:Le}=me("sm",_),{sp:He,os:he}=me("md",j),{sp:We,os:Je}=me("lg",m),{sp:Qe,os:we}=me("xl",u),Ar=[Nt,Qe,We,He,ve,Pt,Mt,we,Je,he,Le,ee].filter(Boolean).join(" "),dr=lt?{width:"auto",flex:1,maxWidth:`calc(100% - ${vt})`}:{width:ot};return(0,f.jsx)("div",{className:`${Ar}${qt}`,...yt,style:{...dr,...tt},ref:Kt})}),Cr=()=>{const n=(0,X.useRef)(!0);return n.current?(n.current=!1,!0):!1},Kr=(n,i=[])=>{const u=Cr();(0,X.useEffect)(()=>{if(!u)return n()},i)},Ue=(n,i=450)=>{const[u,m]=(0,X.useState)(n);return Kr(()=>{let j;return n||i===0?m(n):j=setTimeout(()=>m(n),i),()=>j&&clearTimeout(j)},[n]),[u,m]},Ee=({children:n,mountNode:i=document.body})=>(0,rr.createPortal)(n,i),Oe={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Te={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Nr=document.body,Pr=({open:n,close:i,delay:u=300,children:m,mountNode:j,hasMask:_=!0,style:T,className:tt="h-mask",relative:ot})=>{const[lt]=Ue(n,u);(j??Nr).style.overflow=lt?"hidden":"";const vt=ot?"absolute":"fixed";return(0,f.jsx)(Ee,{mountNode:j,children:(0,f.jsx)("div",{children:lt?(0,f.jsxs)("div",{className:tt,style:{...Oe,position:vt},children:[_?(0,f.jsx)("div",{style:{...Te,position:vt},onClick:bt=>i?.(bt)}):null,X.Children.map(m,bt=>(0,X.isValidElement)(bt)?(0,X.cloneElement)(bt,{style:{position:"relative",zIndex:100001,...bt.props.style}}):bt)]}):null})})};var d=B(434),v={};v.styleTagTransform=pt(),v.setAttributes=rt(),v.insert=P().bind(null,"head"),v.domAPI=R(),v.insertStyleElement=zt();var k=b()(d.Z,v);const O=d.Z&&d.Z.locals?d.Z.locals:void 0,L=({open:n,close:i,footer:u,header:m,className:j,style:_,children:T,width:tt="300px",mountNode:ot,position:lt="right",relative:vt})=>{const bt=["drawer-wrap",lt,n?"open":"",...j?.split(" ")??[]].filter(Boolean).map(yt=>O[yt]).join(" ");return(0,f.jsx)(Pr,{open:n,close:i,delay:250,hasMask:!0,relative:vt,mountNode:ot,className:"huxy-drawer",children:(0,f.jsx)("div",{className:bt,style:{width:tt,position:vt?"absolute":"fixed","--footerHeight":u?"44px":"0px","--headerHeight":m?"44px":"0px",..._},children:(0,f.jsxs)("div",{className:O["drawer-container"],children:[m?(0,f.jsxs)("div",{className:O["drawer-header"],children:[lt==="right"?(0,f.jsx)("span",{className:`link ${O["ico-close"]}`,onClick:yt=>i?.(yt)}):null,(0,f.jsx)("div",{children:m}),lt==="left"?(0,f.jsx)("span",{className:`link ${O["ico-close"]}`,onClick:yt=>i?.(yt)}):null]}):null,(0,f.jsx)("div",{className:O["drawer-content"],children:T}),u?(0,f.jsx)("div",{className:O["drawer-footer"],children:u}):null]})})})},st=(n,i,u="click")=>{(0,X.useEffect)(()=>{const m=_=>{const T=ue(n)?n.current:n;T?.contains&&!T.contains(_.target)&&i(_)},j=typeof u=="string"?[u]:u;return j.map(_=>{document.addEventListener(_,m,!1)}),()=>{j.map(_=>{document.removeEventListener(_,m,!1)})}},[n,i,u])},kt=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",St=(n="")=>n.replace(/^\S/,i=>i.toUpperCase()),ut=n=>{if(fe())return n=ue(n)?n.current:n??document.body,n.getBoundingClientRect?.()},Ut=n=>{if(!fe())return;const i=document.createElement("div");return i.innerHTML=n,i.children[0]},se=(n,i={},u=!1)=>{if(nr(n)){if(u){let m="";Object.keys(i).map(j=>{m+=`${j}: ${i[j]};`}),n.style=m;return}Object.keys(i).map(m=>n.style.setProperty(m,i[m]))}},je=(n=350,i="ms")=>({ms:n*1,s:n*1e3,m:n*6e4,h:n*36e5,d:n*864e5})[i]??n,Se=(n=350,i="ms")=>new Promise(u=>setTimeout(u,je(n,i))),ke=(n=100)=>{const i=Date.now();for(;Date.now()-i<=n;);},ar=Se,Ne=async(n,i=15)=>{if(!fe())return;if(typeof n=="string"&&(n=Ut(n)),n=ue(n)?n.current:n,!nr(n))return{};const u=n.cloneNode(!0);se(u,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(u),await ar(i);const m=ut(u);return n.parentNode.removeChild(u),m},de=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Er=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Pe=(n,i)=>{i=`huxy-drop-arrow-${i}`;const u=n.getAttribute("class")??"";de.test(u)?n.setAttribute("class",u.replace(Er,i)):n.setAttribute("class",`${u} ${i}`)},to=async(n,i,u)=>{const{left:m,right:j,top:_,bottom:T}=ut(n),{width:tt,height:ot}=ie(),{width:lt,height:vt}=await Ne(i);if(j<0||T<0||m>tt||_>ot)return{};if(u==="vertical"){const bt={left:m+"px",top:T+10+"px",right:"auto",bottom:"auto"};let yt="lt";m+lt>tt&&(bt.left=j-lt+"px",yt="rt"),T+10+vt>ot&&(bt.top=_-10-vt+"px",yt=yt==="lt"?"lb":"rb"),se(i,bt),Pe(i,yt)}else{const bt={left:j+10+"px",top:_+"px",right:"auto",bottom:"auto"};let yt="tl";j+10+lt>tt&&(bt.left=m-10-lt+"px",yt="tr"),_+vt>ot&&(bt.top=T-vt+"px",yt=yt==="tl"?"bl":"br"),se(i,bt),Pe(i,yt)}},eo=(n,i,u="horizontal")=>{const m=yr(to),j=()=>m(n,i,u);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const _=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),se(i,{left:"",top:"",right:"",bottom:""})};return to(n,i,u),_},Xr=({open:n,delay:i=280,children:u,mountNode:m,style:j,..._})=>{const[T]=Ue(n,i);return(0,f.jsx)(Ee,{mountNode:m,children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{style:{...j,display:T?"block":"none"},..._,children:u})})})};var jr=B(503),Ie={};Ie.styleTagTransform=pt(),Ie.setAttributes=rt(),Ie.insert=P().bind(null,"head"),Ie.domAPI=R(),Ie.insertStyleElement=zt();var c=b()(jr.Z,Ie);const x=jr.Z&&jr.Z.locals?jr.Z.locals:void 0,E=({trigger:n="click",type:i,dropList:u,className:m,children:j,targetProps:_,...T})=>{const[tt,ot]=(0,X.useState)(!1),lt=(0,X.useRef)(),vt=(0,X.useRef)(),bt=(0,X.useRef)();st(lt,Mt=>tt&&ot(!1),[...new Set(["click",n.toLowerCase()])]),(0,X.useEffect)(()=>()=>bt.current?.(),[]);const yt=Mt=>{Mt.preventDefault(),ot(!0),bt.current=eo(lt.current,vt.current,i)},Kt={[`on${St(n)}`]:yt},qt=["drop-wrap",tt?"open":"",m].filter(Boolean).map(Mt=>x[Mt]).join(" "),Nt=kt(u)?u:u?.(()=>ot(!1),tt);return(0,f.jsxs)("span",{ref:lt,className:x["drop-target"],..._,...Kt,children:[j,(0,f.jsx)(Xr,{open:tt,className:"huxy-drop",children:(0,f.jsx)("div",{ref:vt,className:qt,...T,children:Nt})})]})},w=(n,i,u)=>{if(!fe())return;u=ue(u)?u.current:u??document.body;const m=document.createElement("span");m.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),i&&se(m,i),m.innerText=(n??"").replace(/[\r\n]/g,""),u.appendChild(m);const j=m.getBoundingClientRect();return u.removeChild(m),j};var y=B(918),J={};J.styleTagTransform=pt(),J.setAttributes=rt(),J.insert=P().bind(null,"head"),J.domAPI=R(),J.insertStyleElement=zt();var at=b()(y.Z,J);const nt=y.Z&&y.Z.locals?y.Z.locals:void 0,et=({title:n,placement:i="topRight",children:u,ellipsis:m,className:j,..._})=>(0,f.jsx)("span",{className:`${nt[`huxy-tooltip-${i}`]}${j?` ${j}`:""}`,tooltip:n??u,..._,children:(0,f.jsx)("span",{className:m?nt.ellipsis:"",children:u})}),Q={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Ct=n=>{const{children:i,style:u}=n,m=typeof i=="string",j=m?i:i?.props?.title??i?.props?.children,_=(0,X.useRef)(),[T,tt]=(0,X.useState)(!0);return(0,X.useEffect)(()=>{if(_.current){const{width:ot}=w(j,null,_.current.parentNode),{width:lt}=ut(_.current),vt=~~ot>~~lt;vt!==T&&tt(vt)}},[j]),(0,f.jsx)("span",{ref:_,style:{display:"flex",width:"100%",...u},children:T?m?(0,f.jsx)(et,{...n,ellipsis:!0}):(0,f.jsx)("span",{style:Q,children:i}):m?i:i?.props?.children})},Ot=n=>n.children==null?"":(0,f.jsx)(Ct,{...n});class It extends X.default.Component{state={error:null};static getDerivedStateFromError(i){return{error:i}}componentDidCatch(i,u){const{errorReport:m}=this.props;typeof m=="function"&&m({error:i,info:u.componentStack})}render(){const{error:i}=this.state,{fallback:u,children:m}=this.props;return i?u?.(i)??i:m}}const Et=n=>i=>{if(typeof i=="function"||typeof i?.render=="function")return(0,f.jsx)(i,{});if(typeof i=="string"){const u=n?.[i];return u?(0,f.jsx)(u,{}):(0,f.jsx)("i",{className:i})}return i??null},At=n=>Et(n),Wt=n=>({icon:i,defaultIcon:u})=>i?At(n)(i):i===!1?null:u,mt=["","webkit","moz","ms"],gt=n=>mt.map(i=>i?`${i}FullscreenElement`:"fullscreenElement").find(i=>n[i]),Lt=n=>mt.map(i=>i?`${i}RequestFullscreen`:"requestFullscreen").find(i=>n[i]),te=n=>mt.map(i=>i?`${i}ExitFullscreen`:"exitFullscreen").find(i=>n[i]),Jt=mt.map(n=>`${n}fullscreenchange`),xe=n=>{if(!fe())return;n=ue(n)?n.current:n??document.body;const i=gt(document),u=Lt(n),m=te(document);document[i]?document[m]?.():n[u]?.()},_e=n=>fe()?(Jt.map(i=>document.addEventListener(i,n,!1)),()=>Jt.map(i=>document.removeEventListener(i,n,!1))):void 0,ze=n=>(0,f.jsx)("i",{...n,children:"..."}),Ke=({panel:n,fullIcon:i=ze,exitIcon:u=ze,...m})=>{const j=ue(n)?n.current:n,[_,T]=(0,X.useState)();(0,X.useEffect)(()=>{const ot=_e(()=>{T(lt=>!lt)});return()=>ot()},[]);const tt=_?u:i;return(0,f.jsx)(tt,{onClick:ot=>xe(j),...m})};var Xe=B(249),ge={};ge.styleTagTransform=pt(),ge.setAttributes=rt(),ge.insert=P().bind(null,"head"),ge.domAPI=R(),ge.insertStyleElement=zt();var Ir=b()(Xe.Z,ge);const qe=Xe.Z&&Xe.Z.locals?Xe.Z.locals:void 0,Fe=({gutter:n=10,className:i,overflow:u="hidden",...m},j)=>{const _=i?` ${i}`:"";let T=10;if(Array.isArray(n)){const tt=[...n];n=tt[0],T=tt[1]??tt[0]}return(0,f.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(T/2)}px`,overflow:u},children:(0,f.jsx)("div",{className:`row${_}`,...m,ref:j})})},Sr=(0,X.forwardRef)(Fe),qr=({rowProps:n,colProps:i,children:u,Row:m=Sr,Col:j=kr})=>{const _=[];return X.Children.map(u,T=>{T&&(T.type?.description==="react.fragment"?_.push(...T.props.children):_.push(T))}),(0,f.jsx)(m,{...n,children:_.map((T,tt)=>(0,f.jsx)(j,{...i,...T.props.itemprops,children:T},`huuxy_grid_${tt}`))})},le=(n,i)=>(0,f.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...i}),Re=n=>{const{error:i={},info:u=""}=n||{},{message:m,stack:j,errMsg:_}=i;let T=_||j||i.toString();T=`${T}
${u}`.replace(/\r|\n|\r\n/g,"<br/>"),T=T.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),T=T.replace(/\s/g,"&nbsp;");const tt=m?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,f.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[le(T,{style:{color:"red"}}),tt&&(0,f.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${tt}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Me=({children:n,report:i})=>{const u=(0,X.useRef)();return u.current?.state&&(u.current.state.error=null),(0,f.jsx)(It,{ref:u,fallback:(m,j)=>Re({error:m,info:j}),errorReport:i,children:n})},ir=(n,i)=>Object.keys(i).map(u=>n.style[u]=i[u]),Rr=(n,i)=>Object.keys(i).map(u=>n.style[u]=""),ro={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Ge=({left:n,top:i,width:u,height:m})=>({left:`${n}px`,top:`${i}px`,width:`${u}px`,height:`${m}px`}),sr=n=>(0,f.jsx)("i",{...n,children:"..."}),_r=n=>{const{left:i,top:u}=ut(n),{width:m,height:j}=ie(n);return{left:i,top:u,width:m,height:j}},Mr=({panel:n,target:i,fullIcon:u=sr,exitIcon:m=sr})=>{n=ue(n)?n.current:n||document.body;const[j,_]=(0,X.useState)(),T=(0,X.useRef)();(0,X.useEffect)(()=>{T.current={...ro,...Ge(_r(n))}},[n]);const tt=(lt,vt)=>{if(lt){const bt=Ge(_r((typeof i=="function"?i:()=>document.getElementsByClassName(i)[0])()));ir(vt,T.current),setTimeout(()=>{ir(vt,bt)},0)}else Rr(vt,T.current);_(lt)},ot=j?m:u;return(0,f.jsx)(ot,{onClick:lt=>tt(!j,n)})};var Ce=B(548),Ae={};Ae.styleTagTransform=pt(),Ae.setAttributes=rt(),Ae.insert=P().bind(null,"head"),Ae.domAPI=R(),Ae.insertStyleElement=zt();var oo=b()(Ce.Z,Ae);const Be=Ce.Z&&Ce.Z.locals?Ce.Z.locals:void 0,no=({open:n,close:i,hasMask:u=!0,cancelText:m="\u53D6\u6D88",submit:j,submitText:_="\u786E\u5B9A",title:T="Modal \u5F39\u7A97",className:tt,children:ot,delay:lt=250,...vt})=>{const bt=["modal-wrap",n?"open":"",...tt?.split(" ")??[]].filter(Boolean).map(yt=>Be[yt]).join(" ");return(0,f.jsx)(Pr,{open:n,close:i,delay:lt,hasMask:u,className:"huxy-modal",children:(0,f.jsx)("div",{className:bt,...vt,children:(0,f.jsxs)("div",{className:Be["modal-container"],children:[(0,f.jsx)("div",{className:Be["modal-header"],children:T}),(0,f.jsx)("div",{className:Be["modal-content"],children:ot}),(0,f.jsxs)("div",{className:Be["modal-footer"],children:[(0,f.jsx)("div",{className:`${Be.btn} ${Be.left}`,onClick:yt=>i?.(yt),children:m}),(0,f.jsx)("div",{className:`${Be.btn} ${Be.right}`,onClick:yt=>j?.(yt),children:_})]})]})})})};var ao=B(990),lr={};lr.styleTagTransform=pt(),lr.setAttributes=rt(),lr.insert=P().bind(null,"head"),lr.domAPI=R(),lr.insertStyleElement=zt();var Bo=b()(ao.Z,lr);const Lo=ao.Z&&ao.Z.locals?ao.Z.locals:void 0,Gr=({global:n,absolute:i})=>(0,f.jsx)("div",{className:`spinner${n?" global":""}${i?" absolute":""}`,children:(0,f.jsx)("figure",{className:"spinning"})});var Br=B(232),Lr={};Lr.styleTagTransform=pt(),Lr.setAttributes=rt(),Lr.insert=P().bind(null,"head"),Lr.domAPI=R(),Lr.insertStyleElement=zt();var Ho=b()(Br.Z,Lr);const Hr=Br.Z&&Br.Z.locals?Br.Z.locals:void 0,go=n=>n?.filter?.(i=>typeof i=="function"),Wo=(n,i)=>{const u=(0,X.useRef)(),{loading:m,title:j,plugins:_,children:T,className:tt,...ot}=n,lt=go(_),vt=lt?.length,bt=tt?` ${tt}`:"",yt=ue(i)?i:u;return(0,f.jsxs)("div",{className:`${Hr.panel}${bt}`,...ot,ref:yt,children:[(j||vt)&&(0,f.jsxs)("div",{className:Hr["panel-header"],children:[j&&(0,f.jsx)("h4",{className:Hr["panel-title"],children:j}),vt&&(0,f.jsx)("div",{className:Hr["panel-plugins"],children:lt.map((Kt,qt)=>(0,f.jsx)("span",{className:`link ${Hr.link}`,children:(0,f.jsx)(Kt,{panel:yt})},qt))})]}),(0,f.jsx)("div",{className:Hr["panel-body"],children:T}),m&&(0,f.jsx)(Gr,{})]})},yo=(0,X.forwardRef)(Wo),io=n=>$e(n)==="array",Vo=n=>io(n)&&!!n.length,bo=({to:n,preventDefault:i,stopPropagation:u,...m})=>i?(0,f.jsx)("span",{...m}):(0,f.jsx)("a",{href:n,...m}),vo=({item:n,...i})=>(0,f.jsx)("ul",{...i}),wo=(n,...i)=>{const u={};return Object.keys(n).filter(Boolean).map(m=>{u[m]=j=>n[m](j,...i)}),u},ko=({data:n=[],events:i={},List:u=vo,Link:m=bo,leftIcon:j,rightIcon:_,isHorizontal:T,isCollapsed:tt,level:ot=0,parentOpen:lt=!0})=>{const vt=tt&&!ot,bt=!T&&!tt&&!lt;return n.map(yt=>{const{name:Kt,path:qt,icon:Nt,rightIcon:Mt,active:Pt,open:ee,children:ve,linkProps:Le}=yt,He=Vo(ve),he=yt.id||qt||Kt,We=vt?yt.title??Kt:void 0,Je=bt?"hidden":"",Qe=Nt??j,we=Mt??_,Ar=Qe?(0,f.jsx)("div",{className:"node-left-icon",children:Qe===!0?(0,f.jsx)("i",{className:"default-left-icon"}):Qe}):null,dr=Kt?(0,f.jsx)("div",{className:"node-text",children:(0,f.jsx)("span",{children:Kt})}):null;if(He){const on=wo(i,yt,ot),po=[Je,ee?"open":""].filter(Boolean).join(" ");return(0,f.jsxs)("li",{className:po,"has-children":"true",...on,children:[(0,f.jsxs)(m,{title:We,className:`link${Pt?" active":""}`,to:qt,preventDefault:!0,stopPropagation:!1,...Le,children:[Ar,dr,we?(0,f.jsx)("div",{className:"node-right-icon",children:we===!0?(0,f.jsx)("i",{className:"default-right-icon"}):we}):null]}),(0,f.jsx)(u,{item:yt,children:ko({data:ve,events:i,List:u,Link:m,leftIcon:j,rightIcon:_,isHorizontal:T,isCollapsed:tt,level:ot+1,parentOpen:!!ee})})]},he)}return(0,f.jsx)("li",{className:Je,children:(0,f.jsxs)(m,{title:We,className:`link${Pt?" active":""}`,to:qt,...Le,children:[Ar,dr]})},he)})},ho=ko,Zo=(n,...i)=>(0,f.jsx)("div",{"v-html":n,...i});var cr=B(575),Wr={};Wr.styleTagTransform=pt(),Wr.setAttributes=rt(),Wr.insert=P().bind(null,"head"),Wr.domAPI=R(),Wr.insertStyleElement=zt();var Co=b()(cr.Z,Wr);const gn=cr.Z&&cr.Z.locals?cr.Z.locals:void 0,fo=n=>(0,f.jsx)("div",{style:{padding:"6px 15px"},children:n}),Eo=({activekey:n,tabs:i=[],switchTab:u,trackColor:m,flex:j,..._},T)=>{const[tt,ot]=(0,X.useState)(n??i[0]?.key),[lt,vt]=(0,X.useState)({}),bt=(0,X.useRef)({}),yt=(0,X.useRef)();(0,X.useEffect)(()=>{const Nt=bt.current[tt];Nt&&Kt(Nt)},[]);const Kt=Nt=>{const{left:Mt,width:Pt}=ut(Nt),ee=ut(yt.current).left;vt({left:Mt-ee,width:Pt})},qt=(Nt,Mt)=>{Nt.stopPropagation(),ot(Mt),typeof u=="function"&&u(Mt),Kt(Nt.currentTarget)};return(0,f.jsxs)("div",{className:"tabs-header-wrap",..._,ref:T,children:[(0,f.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:yt,children:i.map(Nt=>(0,f.jsx)("li",{ref:Mt=>bt.current[Nt.key]=Mt,className:`th-item${tt===Nt.key?" active":""}`,onClick:Mt=>qt(Mt,Nt.key),children:typeof Nt.renderTabs=="function"?Nt.renderTabs(Nt,tt===Nt.key):fo(Nt.value)},Nt.key))}),(0,f.jsx)("div",{className:"th-track",style:{...lt,color:m}})]})},Yo=(0,X.forwardRef)(Eo),jo=(n,i,u="id",m="children")=>{if(!io(n))return null;const j=_=>{for(let T=0,tt=_.length;T<tt;T++){const ot=_[T];if(ot[u]===i)return[ot];if(io(ot[m])){const lt=j(ot[m]);if(lt)return[ot].concat(lt)}}};return j(n)},Uo=n=>++n,so=()=>{const[,n]=(0,X.useState)(0);return(0,X.useCallback)(()=>n(Uo),[])},So=n=>{const{children:i,open:u}=n;let m=0;if(u&&i?.length){m=i.length;let j=0;return i.map(_=>j+=So(_)),m+j}return m},_o=({item:n,style:i,...u})=>(0,f.jsx)("ul",{style:{...i,"--count":So(n)},...u});var lo=B(942),zr={};zr.styleTagTransform=pt(),zr.setAttributes=rt(),zr.insert=P().bind(null,"head"),zr.domAPI=R(),zr.insertStyleElement=zt();var yn=b()(lo.Z,zr);const Ko=lo.Z&&lo.Z.locals?lo.Z.locals:void 0,Xo=n=>(0,f.jsx)("ul",{...n}),zo=(n,i)=>n?_o:({item:u,...m})=>(0,f.jsx)(Xo,{className:i==="right"?"left":"",...m}),qo=n=>{const{data:i=[],collapsed:u=!1,type:m="vertical",Link:j,width:_,bgColor:T,itemHeight:tt,collapsedWidth:ot,itemPadding:lt,style:vt,className:bt,...yt}=n,Kt=(0,X.useRef)(),qt=(0,X.useRef)();(0,X.useEffect)(()=>()=>clearTimeout(Kt.current),[]);const Nt=so(),Mt=m==="horizontal",Pt=!Mt&&u,ee={onClick:(Je,Qe)=>{if(Je.stopPropagation(),!Mt&&!Pt){const we=jo(i,Qe.path,"path"),Ar=we[we.length-1];Ar.open=!Ar.open,Nt()}},onMouseEnter:(Je,Qe,we)=>{Pt&&!we&&(clearTimeout(Kt.current),qt.current.style.width="var(--maxWidth)")},onMouseLeave:(Je,Qe,we)=>{Pt&&!we&&(Kt.current=setTimeout(()=>qt.current.style.width="",200))}},ve=(Mt?["huxy-horizontal-tree",bt]:["huxy-tree",bt,Pt?"collapsed":""]).filter(Boolean).join(" "),{float:Le,...He}=yt?.style??{},he={"--bgColor":T,"--itemHeight":tt,"--nodeListWidth":_,...He};Mt?(he["--itemPadding"]=lt,he["--nodeFloat"]=Le):(he["--width"]=_,he["--collapsedWidth"]=ot);const We=zo(!Mt&&!Pt,Le);return(0,f.jsx)("div",{ref:qt,className:ve,style:he,...yt,children:(0,f.jsx)("div",{className:"huxy-tree-track",children:(0,f.jsx)("ul",{className:"huxy-tree-root",children:ho({data:i,events:ee,List:We,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Mt,isCollapsed:Pt})})})})},Fo=()=>{const[n,i]=Tr(ie());return(0,X.useEffect)(()=>{const u=()=>i(ie());return window.addEventListener("resize",u,!1),()=>window.removeEventListener("resize",u,!1)},[]),n},Ao=({menu:n,curName:i,Link:u})=>n.map(m=>{const{path:j,name:_,open:T,children:tt}=m,ot=_===i;return tt?.length?(0,f.jsxs)("li",{className:T?"open":"",children:[(0,f.jsx)(u,{to:{query:{name:_}},className:`link${ot?" active":""}`,preventDefault:!0,children:(0,f.jsx)("span",{children:_})}),(0,f.jsx)("ul",{children:(0,f.jsx)(Ao,{menu:tt,curName:_,Link:u})})]},j||_):(0,f.jsx)("li",{children:(0,f.jsx)(u,{to:{query:{name:_}},className:`link${ot?" active":""}`,children:(0,f.jsx)("span",{children:_})})},j||_)}),$o=Ao,Go=(n={})=>{const i={};return Object.keys(n).map(u=>{n[u]!=null&&(i[u]=n[u])}),i},Do=(n=0,i)=>{fe()&&(i=ue(i)?i.current:i??window,i.scrollTo?.({top:n,behavior:"smooth"}))},Jo=(n=()=>{},i=60)=>{let u=null;return function(...m){u||(n.apply(this,m),u=setTimeout(()=>u=null,i))}},co=(n,i=null,u=!1)=>[...n||[]].sort((m,j)=>{const _=i?m[i]:m,T=i?j[i]:j;return!isNaN(Number(_))&&!isNaN(Number(_))?u?T-_:_-T:typeof _=="string"&&typeof T=="string"?u?T.localeCompare(_):_.localeCompare(T):typeof _=="string"&&typeof T=="number"?u?-1:1:typeof _=="number"||typeof _=="string"?u?1:-1:u?-1:1}),Qo=()=>fe()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Oo=({curName:n,itemList:i})=>{const u=(0,X.useRef)(!1),m=(0,X.useRef)(""),[j,_]=(0,X.useState)(n);return(0,X.useEffect)(()=>{if(i.current=Go(i.current),!n){const ot=Object.keys(i.current).map(lt=>({name:lt,offsetTop:i.current[lt]?.offsetTop??0}));_(ot[0]?.name)}let T=0,tt=0;if(m.current!==n){m.current=n;const ot=i.current[n];u.current=!0,ot?(Do(ot.offsetTop),T=setTimeout(()=>u.current=!1,1050)):tt=setTimeout(()=>{window.scrollTo?.({top:i.current[n]?.offsetTop??0,behavior:"instant"}),T=setTimeout(()=>u.current=!1,1050)},550)}return()=>{clearTimeout(T),clearTimeout(tt),u.current=!1}},[n]),(0,X.useEffect)(()=>{const T=Jo(()=>{if(!u.current){const tt=co(Object.keys(i.current).map(ot=>({name:ot,offsetTop:i.current[ot]?.offsetTop??0})),"offsetTop",!0).find(ot=>ot.offsetTop<Qo())?.name;m.current!==tt&&(m.current=tt,_(tt))}});return window.addEventListener("scroll",T,!1),()=>window.removeEventListener("scroll",T,!1)},[]),[j]},tn=/!\[.*\]\((.*)\)/g,To=async(n,i,u)=>{const m={};for(let j=0,_=n.length;j<_;j++){const T=n[j],tt=T.slice(2);m[T]=await u({folder:i,name:tt})}return m},Vr=async(n,{folder:i},u)=>{const m=[...n.matchAll(tn)].filter(Boolean).map(j=>j[1]);if(m?.length){const j=await To(m,i,u);m.map(_=>{n=n.replace(_,j[_])})}return n},en=({item:n,marked:i,getContext:u})=>{const[m,j]=(0,X.useState)("");return(0,X.useEffect)(()=>{(async()=>{try{const _=await u({...n,type:".md"}),T=await Vr(_,n,u),tt=typeof i=="function"?i.parse(T):tt;j(tt)}catch(_){j(_?.message)}})()},[]),(0,f.jsxs)("div",{className:"huxy-content",children:[le(m),!m&&(0,f.jsx)(Gr,{global:!0})]})},ur=({router:n,curName:i,context:u,marked:m,getContext:j})=>{const _=(0,X.useRef)({}),[T]=Oo({curName:i,itemList:_});return(0,X.useEffect)(()=>{T&&n.push({query:{name:T}})},[T]),(0,f.jsx)("div",{className:"huxy-anchor-page",children:u.map((tt,ot)=>(0,f.jsxs)("div",{className:"huxy-anchor-item",ref:lt=>_.current[tt.name]=lt,children:[(0,f.jsx)("h2",{children:`${tt.name}`}),(0,f.jsx)(en,{item:tt,marked:m,getContext:j})]},tt.name))})},rn=n=>{const i=[];return n.map(u=>{const[m,j]=u.name.split("/"),_=i.find(T=>T.name===m);_?_.children.push({name:j,folder:m}):i.push({name:m,children:[{name:j,folder:m}]})}),i};var Jr=B(556),Fr={};Fr.styleTagTransform=pt(),Fr.setAttributes=rt(),Fr.insert=P().bind(null,"head"),Fr.domAPI=R(),Fr.insertStyleElement=zt();var bn=b()(Jr.Z,Fr);const vn=Jr.Z&&Jr.Z.locals?Jr.Z.locals:void 0,No=(n,i,u)=>({sidebar:n.find(m=>m.name===i)?.children??[],listEle:n.map(({name:m,children:j})=>(0,f.jsx)("li",{children:(0,f.jsx)(u,{to:{query:{folder:m,name:j[0]?.name}},className:`link${m===i?" active":""}`,children:(0,f.jsx)("span",{children:m})})},m))}),Qr=n=>{const{params:i,router:u,Link:m,listFiles:j,getContext:_,marked:T,title:tt,routeLink:ot,routeName:lt,className:vt,style:bt}=n,{folder:yt,name:Kt}=i,{width:qt}=Fo(),[Nt,Mt]=(0,X.useState)([]),[Pt,ee]=(0,X.useState)(!1);(0,X.useEffect)(()=>{(async()=>{const he=await j(),We=rn(he);Mt(We),yt||u.push({query:{folder:We[0]?.name,name:We[0]?.children[0]?.name}})})()},[]);const ve=qt<=1024,{sidebar:Le,listEle:He}=No(Nt,yt,m);return(0,f.jsxs)("div",{className:`huxy-doc-frame ${vt??""}`,style:bt,children:[(0,f.jsxs)("div",{className:"huxy-doc-header",children:[(0,f.jsx)("div",{className:"huxy-doc-banner",children:tt||"\u6587\u6863\u7CFB\u7EDF"}),(0,f.jsx)("ul",{className:"huxy-doc-nav",children:ve?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{className:"huxy-doc-collapsed",children:(0,f.jsx)("span",{className:"link",onClick:he=>{he.stopPropagation(),ee(!Pt)},children:(0,f.jsx)(Dr,{type:Pt?"right":""})})}),(0,f.jsx)(L,{open:Pt,close:()=>ee(!1),width:"220px",children:(0,f.jsx)("ul",{className:"huxy-doc-menu-drawer",children:He})})]}):He}),ot?(0,f.jsx)("div",{className:"huxy-doc-back",children:(0,f.jsx)(m,{to:ot,children:(0,f.jsx)("span",{children:lt??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,f.jsxs)("div",{className:"huxy-doc-container",children:[(0,f.jsx)("div",{className:"huxy-doc-main-page",children:(0,f.jsx)(ur,{router:u,curName:Kt,context:Le,marked:T,getContext:_})}),(0,f.jsx)("div",{className:"huxy-doc-menu",children:(0,f.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,f.jsx)($o,{menu:Le,curName:Kt,Link:m})})})]})]})}})();var s=C.PC,z=C.rK,I=C.lr,dt=C.JX,A=C.dy,S=C.Ud,H=C.mH,p=C.SV,D=C.Hn,F=C.rj,Z=C.V7,W=C.AN,U=C.zd,ht=C.BQ,wt=C.Ur,$t=C.u_,xt=C.s_,Tt=C.h_,Zt=C.X2,Qt=C.$j,N=C.GK,Vt=C.u,Yt=C.mp,ae=C.C2,ce=C.pC,fr=C.ff,pr=C.d2,$r=C.Uw},78611:function(ye,Gt,_t){var V;_t.d(Gt,{Bv:function(){return z},rU:function(){return C},tv:function(){return dt},yj:function(){return I}});var l=_t(27378),Rt={990:(A,S,H)=>{H.d(S,{Z:()=>U});var p=H(601),D=H.n(p),F=H(609),Z=H.n(F),W=Z()(D());W.push([A.id,`@keyframes before {
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
`,""]),W.locals={};const U=W},267:(A,S,H)=>{H.d(S,{Z:()=>U});var p=H(601),D=H.n(p),F=H(609),Z=H.n(F),W=Z()(D());W.push([A.id,`.Iuy_e {
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
`,""]),W.locals={link:"Iuy_e",active:"D3oJg"};const U=W},609:A=>{A.exports=function(S){var H=[];return H.toString=function(){return this.map(function(p){var D="",F=typeof p[5]<"u";return p[4]&&(D+="@supports (".concat(p[4],") {")),p[2]&&(D+="@media ".concat(p[2]," {")),F&&(D+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),D+=S(p),F&&(D+="}"),p[2]&&(D+="}"),p[4]&&(D+="}"),D}).join("")},H.i=function(p,D,F,Z,W){typeof p=="string"&&(p=[[null,p,void 0]]);var U={};if(F)for(var ht=0;ht<this.length;ht++){var wt=this[ht][0];wt!=null&&(U[wt]=!0)}for(var $t=0;$t<p.length;$t++){var xt=[].concat(p[$t]);F&&U[xt[0]]||(typeof W<"u"&&(typeof xt[5]>"u"||(xt[1]="@layer".concat(xt[5].length>0?" ".concat(xt[5]):""," {").concat(xt[1],"}")),xt[5]=W),D&&(xt[2]&&(xt[1]="@media ".concat(xt[2]," {").concat(xt[1],"}")),xt[2]=D),Z&&(xt[4]?(xt[1]="@supports (".concat(xt[4],") {").concat(xt[1],"}"),xt[4]=Z):xt[4]="".concat(Z)),H.push(xt))}},H}},601:A=>{A.exports=function(S){return S[1]}},837:(A,S,H)=>{var p,D=H(810),F=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,U=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0};function wt($t,xt,Tt){var Zt,Qt={},N=null,Vt=null;Tt!==void 0&&(N=""+Tt),xt.key!==void 0&&(N=""+xt.key),xt.ref!==void 0&&(Vt=xt.ref);for(Zt in xt)W.call(xt,Zt)&&!ht.hasOwnProperty(Zt)&&(Qt[Zt]=xt[Zt]);if($t&&$t.defaultProps)for(Zt in xt=$t.defaultProps,xt)Qt[Zt]===void 0&&(Qt[Zt]=xt[Zt]);return{$$typeof:F,type:$t,key:N,ref:Vt,props:Qt,_owner:U.current}}p=Z,S.jsx=wt,S.jsxs=wt},322:(A,S,H)=>{A.exports=H(837)},62:A=>{var S=[];function H(F){for(var Z=-1,W=0;W<S.length;W++)if(S[W].identifier===F){Z=W;break}return Z}function p(F,Z){for(var W={},U=[],ht=0;ht<F.length;ht++){var wt=F[ht],$t=Z.base?wt[0]+Z.base:wt[0],xt=W[$t]||0,Tt="".concat($t," ").concat(xt);W[$t]=xt+1;var Zt=H(Tt),Qt={css:wt[1],media:wt[2],sourceMap:wt[3],supports:wt[4],layer:wt[5]};if(Zt!==-1)S[Zt].references++,S[Zt].updater(Qt);else{var N=D(Qt,Z);Z.byIndex=ht,S.splice(ht,0,{identifier:Tt,updater:N,references:1})}U.push(Tt)}return U}function D(F,Z){var W=Z.domAPI(Z);W.update(F);var U=function(ht){if(ht){if(ht.css===F.css&&ht.media===F.media&&ht.sourceMap===F.sourceMap&&ht.supports===F.supports&&ht.layer===F.layer)return;W.update(F=ht)}else W.remove()};return U}A.exports=function(F,Z){Z=Z||{},F=F||[];var W=p(F,Z);return function(U){U=U||[];for(var ht=0;ht<W.length;ht++){var wt=W[ht],$t=H(wt);S[$t].references--}for(var xt=p(U,Z),Tt=0;Tt<W.length;Tt++){var Zt=W[Tt],Qt=H(Zt);S[Qt].references===0&&(S[Qt].updater(),S.splice(Qt,1))}W=xt}}},793:A=>{var S={};function H(D){if(typeof S[D]>"u"){var F=document.querySelector(D);if(window.HTMLIFrameElement&&F instanceof window.HTMLIFrameElement)try{F=F.contentDocument.head}catch{F=null}S[D]=F}return S[D]}function p(D,F){var Z=H(D);if(!Z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Z.appendChild(F)}A.exports=p},173:A=>{function S(H){var p=document.createElement("style");return H.setAttributes(p,H.attributes),H.insert(p,H.options),p}A.exports=S},892:(A,S,H)=>{function p(D){var F=H.nc;F&&D.setAttribute("nonce",F)}A.exports=p},36:A=>{function S(D,F,Z){var W="";Z.supports&&(W+="@supports (".concat(Z.supports,") {")),Z.media&&(W+="@media ".concat(Z.media," {"));var U=typeof Z.layer<"u";U&&(W+="@layer".concat(Z.layer.length>0?" ".concat(Z.layer):""," {")),W+=Z.css,U&&(W+="}"),Z.media&&(W+="}"),Z.supports&&(W+="}");var ht=Z.sourceMap;ht&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ht))))," */")),F.styleTagTransform(W,D,F.options)}function H(D){if(D.parentNode===null)return!1;D.parentNode.removeChild(D)}function p(D){if(typeof document>"u")return{update:function(){},remove:function(){}};var F=D.insertStyleElement(D);return{update:function(Z){S(F,D,Z)},remove:function(){H(F)}}}A.exports=p},464:A=>{function S(H,p){if(p.styleSheet)p.styleSheet.cssText=H;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(H))}}A.exports=S},810:A=>{var S=p=>{var D={};return it.d(D,p),D},H=p=>()=>p;A.exports=V||(V=_t.t(l,2))}},jt={};function it(A){var S=jt[A];if(S!==void 0)return S.exports;var H=jt[A]={id:A,exports:{}};return Rt[A](H,H.exports,it),H.exports}it.n=A=>{var S=A&&A.__esModule?()=>A.default:()=>A;return it.d(S,{a:S}),S},it.d=(A,S)=>{for(var H in S)it.o(S,H)&&!it.o(A,H)&&Object.defineProperty(A,H,{enumerable:!0,get:S[H]})},it.o=(A,S)=>Object.prototype.hasOwnProperty.call(A,S),it.nc=void 0;var B={};(()=>{it.d(B,{rU:()=>eo,cb:()=>Ie,Bv:()=>jr,yj:()=>Xr,tv:()=>ke});var A=it(810);const S=c=>Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),H=c=>S(c)==="array",p=c=>S(c)==="object",D=c=>c?.$$typeof&&typeof c.$$typeof=="symbol"&&c.$$typeof.description==="react.element",F=c=>c?.__v_isVNode,Z=(c,x)=>Object.prototype.hasOwnProperty.call(c??{},x),W=c=>{if(!H(c)&&!p(c))return c;const x=H(c)?[]:{};for(const E in c)if(Z(c,E)){const w=c[E];x[E]=D(w)||F(w)||typeof w!="object"?w:w!==c?W(w):"cyclic"}else Object.setPrototypeOf(x,{[E]:c[E]});return x},U=W,ht=c=>S(c)==="function",wt=c=>S(c)==="promise"||p(c)&&ht(c.then),$t=(c,x=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!wt(c))return{};let w=null,y=null;return{promiseFn:new Promise((J,at)=>{w=(nt="canceled")=>{clearTimeout(y),J({canceled:!0,errMsg:nt})},x&&(x=typeof x!="number"?12e4:x,y=setTimeout(()=>w(E),x)),c.then(nt=>{clearTimeout(y),J({result:nt,errMsg:!1})}).catch(nt=>{clearTimeout(y),at(nt)})}),cancelFn:w}},xt=c=>c?c.charAt(c.length-1)==="/"?c.slice(0,-1):c:"";var Tt=it(322);const Zt=(c,x)=>(0,Tt.jsx)("div",{dangerouslySetInnerHTML:{__html:c},...x}),Qt=c=>{const{error:x={},info:E=""}=c||{},{message:w,stack:y,errMsg:J}=x;let at=J||y||x.toString();at=`${at}
${E}`.replace(/\r|\n|\r\n/g,"<br/>"),at=at.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),at=at.replace(/\s/g,"&nbsp;");const nt=w?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Tt.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Zt(at,{style:{color:"red"}}),nt&&(0,Tt.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${nt}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},N=c=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(c),Vt=()=>{const c={};return{on:(x,E)=>{c[x]||(c[x]=[]),c[x].indexOf(E)===-1&&c[x].push(E)},emit:(x,E)=>{c[x]&&c[x].map(w=>w(E))},off:(x,E=null)=>{if(c[x]){if(typeof E!="function")return delete c[x];const w=c[x].indexOf(E);w>-1&&(c[x].splice(w,1),c[x].length||delete c[x])}}}},Yt=c=>{const x={};for(let E in c)Z(c,E)||(x[E]=c[E]);return x},ae=(c,x)=>{if(!p(c))return x;if(!p(x))return c;const E={...Yt(c),...Yt(x)},w={...c,...x};return Object.keys(E).map(y=>{Object.setPrototypeOf(w,{[y]:E[y]})}),w},ce=()=>{const{on:c,emit:x,off:E}=Vt(),w={};return{getState:y=>U(w[y]),setState:(y,J=!1)=>{if(typeof y=="function"&&(y=y(U(w))),!p(y))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const at=U(y);Object.keys(at).map(nt=>{const et=w[nt],Q=at[nt],Ct=p(Q)&&p(et)?ae(et,Q):Q;!J&&x(nt,Ct),w[nt]=Ct})},subscribe:(y,J)=>(c(y,J),()=>E(y,J)),unsubscribe:E,clean:y=>{typeof y=="string"?w[y]=void 0:Array.isArray(y)?y.map(J=>w[J]=void 0):Object.keys(w).map(J=>w[J]=void 0)}}},fr=c=>(x,E)=>{const[w,y]=(0,A.useState)(()=>{const et=c?.getState(x);return et!==void 0?et:(E!==void 0&&c?.setState({[x]:E},!0),E)}),J=(0,A.useCallback)(et=>c?.setState({[x]:typeof et=="function"?et(c?.getState(x)):et}),[]),at=(0,A.useCallback)(et=>c?.subscribe(x,et),[]),nt=(0,A.useCallback)((et=et)=>c?.clean(et),[]);return(0,A.useEffect)(()=>{c?.subscribe(x,et=>y(et))},[]),[w,J,at,nt]},pr=ce(),$r=fr(pr),f=Vt(),G=Vt(),b="push-emitter",K="replace-emitter",R="useRoute-emitter",Y={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},P="/404",M={getState:()=>history.state,go:c=>history.go(c),forward:()=>history.forward(),back:()=>history.back()},rt=(c,x,E,w,y=[])=>{const J=et=>{for(let Q=0,Ct=et.length;Q<Ct;Q++){const Ot=et[Q],It=Ot[w].split("?")[0];if(new RegExp("^"+It.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return Ot;if(H(Ot[E])){const Et=J(Ot[E]);if(Et)return Et}}},at=J(c);if(!at)return P;const{redirect:nt}=at;return nt?N(nt)?nt:y.includes(nt)?y:(y.push(nt),rt(c,nt.split("?")[0],E,w,y)):y[y.length-1]},Ft=(c,x,E,w,y)=>{if(!H(c))return null;const J=Ct=>{const Ot=Ct.split("/"),It=x.split("/"),Et={};return Ot.map((At,Wt)=>At.indexOf(":")===0&&(Et[At.slice(1)]=It[Wt])),Et},at=(Ct,Ot)=>{const It=[],Et=Ot.split("/:")[0];for(let At=0,Wt=Ct.length;At<Wt;At++){const mt=Ct[At];if(mt[y]===Et){mt.active=!0;const{name:gt,title:Lt,icon:te,params:Jt}=mt;It.push({name:gt,title:Lt,icon:te,params:Jt,[y]:Et})}else if(Ot.indexOf(`${mt[y]}/`)===0){mt.active=!0;const gt=J(mt[y]),Lt=Object.keys(gt).map(ze=>gt[ze]).join("/"),{name:te,title:Jt,icon:xe}=mt,_e=Lt?`${Et}/${Lt}`:mt[y];It.push({name:te,title:Jt,icon:xe,[y]:_e,params:{...mt.params,...gt}})}else if(mt[y]===Ot){mt.active=!0;const gt=J(mt[y]),{[w]:Lt,...te}=mt;It.push({...te,[y]:x,params:{...te.params,...E,...gt}})}}return It},nt=(Ct,Ot)=>{for(let It=0,Et=Ct.length;It<Et;It++){const At=Ct[It];if(Ot.indexOf(`${At[y]}/`)===0){At.active=!0;return}}},et=Ct=>{for(let Ot=0,It=Ct.length;Ot<It;Ot++){const Et=Ct[Ot],At=(Et[y]||"").split("?")[0];if(At===x){Et.hideMenu&&nt(Ct,Et.parentPath||At),Et.active=!0;const{[w]:Wt,...mt}=Et;return[{...mt,params:{...mt.params,...E}}]}if(new RegExp("^"+At.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return at(Ct,At);if(H(Et[w])){const Wt=et(Et[w]);if(Wt){Et.active=!0,Et.open=!0;const{[w]:mt,...gt}=Et;return[gt,...Wt]}}}},Q=et(c)||[];return{result:c,current:Q}},zt=(c,x,E)=>c.filter(w=>w.hideMenu||w[E].indexOf("/:")>-1?!1:(H(w[x])&&(w[x]=zt(w[x],x,E)),!0)),Bt=(c,x,E,w="children",y="path")=>{const J=rt(c,x,w,y);if(J)return{redirect:J};const{result:at,current:nt}=Ft(c,x,E,w,y),et=zt(at,w,y);return{current:nt,menu:et}},pt=(c,x)=>{const E=["#/","/"],w=E[!!x-0];if(!c||E.includes(c))return w;const y=c.charAt(c.length-1)==="/"?c.slice(0,-1):c;return x||y.indexOf("#/")>-1?y:`#${y}`},Dt=(c,x,E,w=!1)=>{const y=pt(x,E);return w?y:E?c&&y==="/"?c:`${c}${y}`:c?`${c}/${y}`:y},Ht=(c,x,E,w,y,J)=>{if(!H(c))return c;const at=(nt,et="")=>nt.filter(Q=>!Q.denied).map(Q=>{if(!J&&!Q.exact&&!N(Q[w])){(!Q[w]||Q[w]==="javascript:;")&&(Q[w]="");const Ct=Q[w].charAt(0)==="/"&&et.charAt(et.length-1)==="/"?Q[w].slice(1):Q[w].charAt(0)!=="/"&&et.charAt(et.length-1)!=="/"?`/${Q[w]}`:Q[w];Q[w]=et?et+Ct:Dt(y,Ct,x)}return Q.redirect&&!N(Q.redirect)&&(Q.redirect=Dt(y,Q.redirect,x)),H(Q[E])&&(Q[E]=at(Q[E],Q[w]),!Q.redirect&&Q[E].length&&(Q.redirect=Q[E][0][w])),Q});return at(c)},ne=c=>{if(!p(c))return"";const x=[];return Object.keys(c).map((E,w)=>{const y=w>0?"&":"?";x.push(`${y}${E}=${c[E]}`)}),x.join("")},Xt=(c="")=>{const[x,E]=c.split("?");if(E){const w={};return E.split("&").map(y=>{const[J,at]=y.split("=");w[J]=at}),{path:x,params:w}}return{path:x}},Dr=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},X=(c,x)=>{for(let E=c.length-1,w;w=c[E--];){const{title:y,name:J}=w;if(typeof y=="string"&&y.length)return document.title=y;if((y==null||y===!0)&&J)return document.title=x?`${J}-${x}`:J;if(x)return document.title=x}},tr=c=>{const{pathname:x,search:E,hash:w}=location;if(c){const nt=pt(x,c),et=decodeURIComponent(`${nt}${E}`),{params:Q}=Xt(et);return{path:et,params:Q}}const y=decodeURIComponent(pt(w,c)),{params:J}=Xt(y),at=xt(x);return{path:at?`${at}/${y}`:y,params:J}},Ve=(c,x,E)=>{typeof c=="function"&&c({...x,stay:new Date-E})},Or=(c,x,E,w)=>{let y=typeof c=="string"?c:c.path??"";const J=ne(c.query);N(y)||(y=Dt(E,y,w,c.exact)),window?.open(`${y}${J}`,x)},mr=(c,x,E,w)=>{if(c.target||N(c.path)){Or(c,c.target,x,E);return}let y,J,at;if(typeof c=="string")y=c;else if(p(c))y=c.path,J=c.params,at=c.query;else return;!y||y==="."||y==="./"?y=w:y.indexOf("./")===0?y=`${w.split("?")[0]}${y.replace("./","/")}`:y.indexOf("../")===0&&(y=`${w.split("?")[0].split("/").slice(0,-1).join("/")}${y.replace("../","/")}`),y=Dt(x,y,E,c?.exact);const nt=Xt(y);y=nt.path;const et={...nt.params,...at},Q=ne(et);return y=`${y}${Q}`,J={...J,...et},y===w?!1:{path:y,params:J}},er=(c,x)=>{const E=c.split(x);return E.length>1?["","/"].includes(E[1].slice(0,1)):!1},xr=Vt(),gr=c=>{const{on:x,emit:E,off:w}=xr;return{on:y=>x(c,y),emit:y=>E(c,y),off:y=>w(c,y)}},rr=c=>(x,E)=>{const{getState:w,setState:y,subscribe:J,unsubscribe:at,clean:nt}=c;return E!==void 0&&y({[x]:E},!0),{getState:()=>w(x),setState:(et,Q)=>y({[x]:et},Q),subscribe:et=>J(x,et),unsubscribe:()=>at(x),clean:()=>nt(x)}},or=ce(),fe=rr(or),$e=gr("push-emitter"),nr=gr("replace-emitter"),ie=fe("route-store"),yr=Vt(),De=ce(),ue=fr(De),Ze=()=>![typeof window,typeof document].includes("undefined"),Yr=c=>{if(!Ze())return;const x=document.createElement("div");return x.innerHTML=c,x.children[0]};class br extends A.default.Component{state={error:null};static getDerivedStateFromError(x){return{error:x}}componentDidCatch(x,E){const{errorReport:w}=this.props;typeof w=="function"&&w({error:x,info:E.componentStack})}render(){const{error:x}=this.state,{fallback:E,children:w}=this.props;return x?E(x):w}}const Tr=({children:c,report:x})=>{const E=(0,A.useRef)();return E.current?.state&&(E.current.state.error=null),(0,Tt.jsx)(br,{ref:E,fallback:(w,y)=>Qt({error:w,info:y}),errorReport:x,children:c})};var vr=it(62),Ye=it.n(vr),pe=it(36),Ur=it.n(pe),be=it(793),wr=it.n(be),me=it(892),kr=it.n(me),Cr=it(173),Kr=it.n(Cr),Ue=it(464),Ee=it.n(Ue),Oe=it(990),Te={};Te.styleTagTransform=Ee(),Te.setAttributes=kr(),Te.insert=wr().bind(null,"head"),Te.domAPI=Ur(),Te.insertStyleElement=Kr();var Nr=Ye()(Oe.Z,Te);const Pr=Oe.Z&&Oe.Z.locals?Oe.Z.locals:void 0,d=({global:c,absolute:x})=>(0,Tt.jsx)("div",{className:`spinner${c?" global":""}${x?" absolute":""}`,children:(0,Tt.jsx)("figure",{className:"spinning"})}),v=()=>{const c=(0,A.useRef)([]);return(0,A.useEffect)(()=>()=>{c.current.map(x=>x.cancelFn()),c.current=[]},[]),{cancelablePromise:(0,A.useCallback)((x,E=!0)=>{const w=$t(x,E);return c.current.indexOf(w)===-1&&c.current.push(w),w.promiseFn},[])}},k=(c={})=>{const{cancelablePromise:x}=v(),[E,w]=(0,A.useState)(c),y=(0,A.useRef)({}),J=(0,A.useRef)({}),at=(0,A.useCallback)((et=null)=>{Array.isArray(et)&&et.length?et.map(Q=>y.current[Q]=c[Q]):y.current=c},[]),nt=(0,A.useCallback)((et,Q,Ct=!1)=>{const Ot=Object.keys(et),It=JSON.stringify(Ot.sort());if(!J.current[It]){J.current[It]=!0,Ct&&at(Array.isArray(Ct)?Ct:Ot),Ot.map(Et=>{y.current[Et]||(y.current[Et]={}),y.current[Et].pending=!0}),w({...y.current});for(let Et=0,At=Ot.length;Et<At;Et++){const Wt=Ot[Et];x(et[Wt]).then(mt=>{let{result:gt,errMsg:Lt}=mt;Et===At-1&&(J.current[It]=!1),typeof Q=="function"&&(gt=Q(gt)||gt),y.current[Wt]={...gt,pending:!1},Lt===!1&&w({...y.current})}).catch(mt=>{throw Et===At-1&&(J.current[It]=!1),y.current[Wt]={error:mt,pending:!1},w({...y.current}),mt})}}},[]);return[E,nt,at]},O=c=>Object.keys(c).length,L=c=>{const{Comp:x,restResolve:E,loadPromise:w,params:y,children:J}=c,[at,nt]=k(),[et,Q]=k();return(0,A.useEffect)(()=>{O(E)&&nt(E),O(w)&&Q(w)},[E,w]),(0,A.useEffect)(()=>{const Ct=O(at);Ct&&Ct===O(E)&&y.store.setState(at)},[at]),(0,Tt.jsx)(x,{...y,...at,...et,children:J})},st=c=>c===!1?null:D(c)?c:ht(c)?(0,Tt.jsx)(c,{}):(0,Tt.jsx)(d,{}),kt=({Loading:c,ErrorBoundary:x,loadedComp:E})=>{const w=(0,Tt.jsx)(A.Suspense,{fallback:st(c),children:E});return x===!1?w:ht(x)?(0,Tt.jsx)(x,{children:w}):(0,Tt.jsx)(Tr,{children:w})},St=({Comp:c,routerProps:x,children:E})=>{const{params:w,...y}=x,{loading:J,errorBoundary:at,...nt}=w,et=(0,Tt.jsx)(L,{Comp:c,...y,params:nt,children:E});return kt({Loading:J,ErrorBoundary:at,loadedComp:et})},ut={},Ut=(c,x,E,w)=>wt(E)?E.then(y=>St({Comp:c,routerProps:x,children:y.default??y})):St({Comp:c,routerProps:x,children:E}),se=(c,x,E)=>{const w={},y={};return p(c)?(Object.keys(c).map(J=>{const at=x.getState(J);at==null?y[J]=c[J](E):w[J]=at}),{cachedResolve:w,restResolve:y}):{cachedResolve:w,restResolve:y}},je=(c,x)=>{if(!p(c))return{};const E={};return Object.keys(c).map(w=>E[w]=c[w](x)),E},Se=c=>{const{current:x,menu:E,...w}=c,y=x.map(nt=>{const{component:et,resolve:Q,loadData:Ct,loading:Ot,errorBoundary:It,icon:Et,...At}=nt;return At}),J=[...x].filter(nt=>nt.component),at=(nt=0)=>{if(!J.length)return null;const et=J.shift(),{component:Q,resolve:Ct,loadData:Ot,icon:It,key:Et,...At}=et;if(typeof Q=="function"||wt(Q)){const Wt=At.path;let mt=ut[Wt];const{cachedResolve:gt,restResolve:Lt}=se(Ct,w.store,At),te={loadPromise:je(Ot,At),restResolve:Lt,params:{current:y,...w,...At,...gt}},Jt=at(nt+1);if(mt)return Ut(mt,te,Jt,Wt);try{mt=Q(),mt=D(mt)?Q:mt}catch{mt=Q}return wt(mt)?mt.then(xe=>(mt=xe.default??xe,ut[Wt]=mt,Ut(mt,te,Jt,Wt))):(ut[Wt]=mt,Ut(mt,te,Jt,Wt))}return typeof Q=="string"?Yr(Q):Q};return at()},ke=c=>{const[x,E]=(0,A.useState)(c),[w,y]=(0,A.useState)(),[J,at]=(0,A.useState)(),nt=(0,A.useRef)(),et=(0,A.useRef)(),Q=(0,A.useRef)(),Ct=(0,A.useRef)(),Ot=()=>{typeof nt.current=="function"&&(nt.current({cancel:Y.cancelMsg}),nt.current=null)},It=(0,A.useCallback)(gt=>{typeof gt=="function"?E(Lt=>({...Lt,...gt(Lt)})):p(gt)&&E(Lt=>({...Lt,...gt}))},[]),Et=(gt,Lt="pushState")=>{const{basepath:te,browserRouter:Jt}=Ct.current,xe=Q.current,_e=mr(gt,te,Jt,xe);if(!_e)return;const{path:ze,params:Ke}=_e;mt({inputPath:ze,inputParams:Ke},()=>history[Lt](gt?.state,"",ze))},At=(0,A.useCallback)(gt=>Et(gt),[]),Wt=(0,A.useCallback)(gt=>Et(gt,"replaceState"),[]),mt=(0,A.useCallback)(({inputPath:gt="",inputParams:Lt={}},te)=>{const Jt=+new Date,{browserRouter:xe,childKey:_e,idKey:ze,title:Ke,routers:Xe,beforeRender:ge,afterRender:Ir,basepath:qe,allowedNotFound:Fe,...Sr}=Ct.current;if(!gt){const{path:le,params:Re}=tr(xe);gt=le,Lt={...Lt,...Re}}const qr=Q.current;new Promise((le,Re)=>{Xe?.length||Re("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),gt!==Q.current&&typeof ge=="function"?ge({path:gt,params:Lt,prevPath:qr},le,Re):le()}).then(le=>{if(le===!1)return;const Re=le?.path;if(Re&&Dt(qe,Re,xe)!==gt){Wt(le);return}et.current=et.current??gt;const{redirect:Me,current:ir,menu:Rr}=Bt(U(Xe),gt.split("?")[0],Lt,_e,ze);if(Me){if(Fe&&Me===P&&(typeof Fe=="boolean"||typeof Fe=="string"&&er(et.current,Fe)||H(Fe)&&Fe.find(sr=>er(et.current,sr))))return;if(H(Me)){console.error(`\u522B\u95F9\uFF0C[${[gt,...Me].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Me===P?Wt({path:Me}):At({path:Me,exact:!0})}te?.(),gt?.split("?")[0]!==Q.current?.split("?")[0]&&Dr(),X(ir,Ke);const ro={eventBus:yr,store:De,useStore:ue,...Sr,updateRouter:It,emitRouter:ie.subscribe,router:{push:At,replace:Wt},current:ir,menu:Rr,inputPath:et.current,prevPath:qr,browserRouter:xe,basepath:qe,title:Ke,history:{...M,goBack:sr=>At({...sr,path:qr})}};ie.setState(ro);const Ge=Se(ro);if(Q.current=gt,et.current=null,Ot(),wt(Ge)){const{promiseFn:sr,cancelFn:_r}=$t(Ge,{delay:Y.delay,msg:{timeout:Y.timeoutMsg}});return nt.current=_r,at(!0),sr.then(Mr=>{nt.current=null;const{result:Ce,errMsg:Ae}=Mr,oo=Ae===!1?Ce:Ae?.timeout?Qt({error:{errMsg:`${gt} ${Ae.timeout}`}}):null;oo&&(at(!1),Ve(Ir,ir.slice(-1)[0],Jt),y(oo))}).catch(Mr=>{throw nt.current=null,at(!1),Ve(Ir,ir.slice(-1)[0],Jt),y(Qt({error:Mr})),Mr})}Ve(Ir,ir.slice(-1)[0],Jt),y(Ge)}).catch(le=>{throw y(Qt({error:le})),le})},[]);return(0,A.useEffect)(()=>{const{childKey:gt="children",idKey:Lt="path",browserRouter:te=!1,routers:Jt=[],basepath:xe="",exact:_e=!1,inputPath:ze="",inputParams:Ke={},...Xe}=x,ge=xt(xe),Ir=Ht(U(Jt),te,gt,Lt,ge,_e);Ct.current={...Xe,childKey:gt,idKey:Lt,browserRouter:te,routers:Ir,basepath:ge};const qe=te?"popstate":"hashchange",Fe=()=>mt({});return mt({inputPath:ze,inputParams:Ke}),$e.on(At),nr.on(Wt),window.addEventListener(qe,Fe,!1),()=>{Ot(),$e.off(At),nr.off(Wt),window.removeEventListener(qe,Fe,!1)}},[x]),{updateRouter:It,output:w,loading:J}},ar=c=>{const{to:x,onClick:E,preventDefault:w,stopPropagation:y=!0,exact:J=!0,target:at,...nt}=c,et=()=>{const Q=typeof x=="string"?{exact:J,path:x}:{exact:J,...x};$e.emit(Q)};return Q=>{if(Q.preventDefault(),y&&Q.stopPropagation(),!nt?.disabled){if(!w){if(at){const{browserRouter:Ct,basepath:Ot}=ie.getState();Or(x,at,Ot,Ct);return}et()}typeof E=="function"&&E()}}};var Ne=it(267),de={};de.styleTagTransform=Ee(),de.setAttributes=kr(),de.insert=wr().bind(null,"head"),de.domAPI=Ur(),de.insertStyleElement=Kr();var Er=Ye()(Ne.Z,de);const Pe=Ne.Z&&Ne.Z.locals?Ne.Z.locals:void 0,to=c=>{if(!c)return Pe.link;const x=c.trim().split(" ").filter(Boolean),E=x.find(w=>w==="active")?[Pe.active]:[];return[Pe.link,...E,...x].join(" ")},eo=c=>{const{to:x,onClick:E,preventDefault:w,stopPropagation:y,exact:J,target:at,className:nt,...et}=c;return(0,Tt.jsx)("span",{onClick:ar(c),className:to(nt),...et})},Xr=()=>{const[c,x]=(0,A.useState)(ie.getState());return(0,A.useEffect)(()=>ie.subscribe(E=>x(E)),[]),c},jr=ie.getState,Ie=ie.subscribe})();var C=B.rU,s=B.cb,z=B.Bv,I=B.yj,dt=B.tv},18124:function(ye,Gt,_t){var V;_t.d(Gt,{Nr:function(){return A},PQ:function(){return Tt},Rx:function(){return ht},Vd:function(){return dt},Wy:function(){return H},fH:function(){return C},r5:function(){return s},rE:function(){return xt},rf:function(){return Zt},xd:function(){return Qt}});var l=_t(27378),Rt={837:(N,Vt,Yt)=>{var ae,ce=Yt(810),fr=Symbol.for("react.element"),pr=Symbol.for("react.fragment"),$r=Object.prototype.hasOwnProperty,f=ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function b(K,R,Y){var P,M={},rt=null,Ft=null;Y!==void 0&&(rt=""+Y),R.key!==void 0&&(rt=""+R.key),R.ref!==void 0&&(Ft=R.ref);for(P in R)$r.call(R,P)&&!G.hasOwnProperty(P)&&(M[P]=R[P]);if(K&&K.defaultProps)for(P in R=K.defaultProps,R)M[P]===void 0&&(M[P]=R[P]);return{$$typeof:fr,type:K,key:rt,ref:Ft,props:M,_owner:f.current}}ae=pr,Vt.jsx=b,ae=b},322:(N,Vt,Yt)=>{N.exports=Yt(837)},810:N=>{var Vt=ae=>{var ce={};return it.d(ce,ae),ce},Yt=ae=>()=>ae;N.exports=V||(V=_t.t(l,2))}},jt={};function it(N){var Vt=jt[N];if(Vt!==void 0)return Vt.exports;var Yt=jt[N]={exports:{}};return Rt[N](Yt,Yt.exports,it),Yt.exports}it.d=(N,Vt)=>{for(var Yt in Vt)it.o(Vt,Yt)&&!it.o(N,Yt)&&Object.defineProperty(N,Yt,{enumerable:!0,get:Vt[Yt]})},it.o=(N,Vt)=>Object.prototype.hasOwnProperty.call(N,Vt);var B={};(()=>{it.d(B,{fH:()=>Vt,r5:()=>f,Nd:()=>R,KY:()=>$r,Vd:()=>M,Nr:()=>Ft,D:()=>pt,Wy:()=>Ve,zX:()=>Or,Cd:()=>zt,Yz:()=>mr,D9:()=>er,cb:()=>tr,vO:()=>gr,Rx:()=>Tr,OH:()=>vr,oR:()=>wr,rE:()=>Oe,PQ:()=>Nr,rf:()=>Bt,xd:()=>Pr});var N=it(810);const Vt=d=>(v,k)=>{const[O,L]=(0,N.useState)(()=>{const ut=d?.getState(v);return ut!==void 0?ut:(k!==void 0&&d?.setState({[v]:k},!0),k)}),st=(0,N.useCallback)(ut=>d?.setState({[v]:typeof ut=="function"?ut(d?.getState(v)):ut}),[]),kt=(0,N.useCallback)(ut=>d?.subscribe(v,ut),[]),St=(0,N.useCallback)((ut=ut)=>d?.clean(ut),[]);return(0,N.useEffect)(()=>{d?.subscribe(v,ut=>L(ut))},[]),[O,st,kt,St]},Yt=d=>Object.prototype.toString.call(d).slice(8,-1).toLowerCase(),ae=d=>Yt(d)==="object",ce=d=>Yt(d)==="function",fr=d=>Yt(d)==="promise"||ae(d)&&ce(d.then),pr=(d,v=3e5,k="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!fr(d))return{};let O=null,L=null;return{promiseFn:new Promise((st,kt)=>{O=(St="canceled")=>{clearTimeout(L),st({canceled:!0,errMsg:St})},v&&(v=typeof v!="number"?12e4:v,L=setTimeout(()=>O(k),v)),d.then(St=>{clearTimeout(L),st({result:St,errMsg:!1})}).catch(St=>{clearTimeout(L),kt(St)})}),cancelFn:O}},$r=()=>{const d=(0,N.useRef)([]);return(0,N.useEffect)(()=>()=>{d.current.map(v=>v.cancelFn()),d.current=[]},[]),{cancelablePromise:(0,N.useCallback)((v,k=!0)=>{const O=pr(v,k);return d.current.indexOf(O)===-1&&d.current.push(O),O.promiseFn},[])}},f=(d={})=>{const{cancelablePromise:v}=$r(),[k,O]=(0,N.useState)(d),L=(0,N.useRef)({}),st=(0,N.useRef)({}),kt=(0,N.useCallback)((ut=null)=>{Array.isArray(ut)&&ut.length?ut.map(Ut=>L.current[Ut]=d[Ut]):L.current=d},[]),St=(0,N.useCallback)((ut,Ut,se=!1)=>{const je=Object.keys(ut),Se=JSON.stringify(je.sort());if(!st.current[Se]){st.current[Se]=!0,se&&kt(Array.isArray(se)?se:je),je.map(ke=>{L.current[ke]||(L.current[ke]={}),L.current[ke].pending=!0}),O({...L.current});for(let ke=0,ar=je.length;ke<ar;ke++){const Ne=je[ke];v(ut[Ne]).then(de=>{let{result:Er,errMsg:Pe}=de;ke===ar-1&&(st.current[Se]=!1),typeof Ut=="function"&&(Er=Ut(Er)||Er),L.current[Ne]={...Er,pending:!1},Pe===!1&&O({...L.current})}).catch(de=>{throw ke===ar-1&&(st.current[Se]=!1),L.current[Ne]={error:de,pending:!1},O({...L.current}),de})}}},[]);return[k,St,kt]},G=d=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(d),b=d=>new Promise((v,k)=>{const O=new FileReader;O.readAsDataURL(d),O.addEventListener("load",()=>v(O.result)),O.addEventListener("error",L=>k(L))}),K=async d=>{if(!G(d))return d;const v=await(await fetch(decodeURIComponent(d))).blob();return await b(v)},R=d=>{const[v,k]=(0,N.useState)(d);return(0,N.useEffect)(()=>{(async O=>{const L=await K(O);k(L)})(d)},[d]),v},Y=(d,v)=>Object.prototype.hasOwnProperty.call(d??{},v),P=d=>Y(d,"current"),M=(d,v,k="click")=>{(0,N.useEffect)(()=>{const O=st=>{const kt=P(d)?d.current:d;kt?.contains&&!kt.contains(st.target)&&v(st)},L=typeof k=="string"?[k]:k;return L.map(st=>{document.addEventListener(st,O,!1)}),()=>{L.map(st=>{document.removeEventListener(st,O,!1)})}},[d,v,k])},rt=(d=()=>{},v=60)=>{let k=null;return function(...O){clearTimeout(k),k=setTimeout(()=>d.apply(this,O),v)}},Ft=(d,v=60)=>(0,N.useMemo)(()=>rt(d,v),[v]),zt=()=>{const d=(0,N.useRef)(!0);return d.current?(d.current=!1,!0):!1},Bt=(d,v=[])=>{const k=zt();(0,N.useEffect)(()=>{if(!k)return d()},v)},pt=(d,v=450)=>{const[k,O]=(0,N.useState)(d);return Bt(()=>{let L;return d||v===0?O(d):L=setTimeout(()=>O(d),v),()=>L&&clearTimeout(L)},[d]),[k,O]},Dt=()=>![typeof window,typeof document].includes("undefined"),Ht=d=>Yt(d).indexOf("element")>-1,ne=(d=null)=>Dt()?Ht(d)?{width:d.clientWidth,height:d.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Xt=(d,v)=>{const k=[],O=d.children??[];for(let L=0,st=O.length;L<st;L++){const kt=O[L];kt.className.indexOf(v)>-1&&k.push(kt)}return k.length===0?null:k.length===1?k[0]:k},Dr=(d,v)=>{getComputedStyle(d).position==="static"&&(d.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",v,!1),v()},k.type="text/html",d.appendChild(k),k.data="about:blank",k},X=(d,v=60)=>{if(!Dt())return;d=P(d)?d.current:d??document.body;let k=Xt(d,"resize-sensor"),O=[];const L=rt(()=>O.map(ut=>ut(d)),v),st=ut=>{Xt(d,"resize-sensor")||(k=Dr(d,L)),O.indexOf(ut)===-1&&O.push(ut)},kt=ut=>{const Ut=O.indexOf(ut);Ut!==-1&&O.splice(Ut,1),O.length===0&&k&&St()},St=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",L,!1),k.parentNode.removeChild(k),k=void 0,O=[])};return{element:d,bind:st,unbind:kt,destroy:St}},tr=(d={})=>{const v=(0,N.useRef)(0),[k,O]=(0,N.useState)(d),L=(0,N.useCallback)(st=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>O(st))},[]);return(0,N.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[k,L]},Ve=(d=null,v=60)=>{const k=P(d)?d.current:d,{bind:O,destroy:L}=X(k,v),[st,kt]=tr(ne(k));return(0,N.useEffect)(()=>(O(()=>k&&kt(ne(k))),()=>L()),[k]),st},Or=d=>{const v=(0,N.useRef)(null);return(0,N.useLayoutEffect)(()=>{v.current=d}),(0,N.useCallback)(v.current,[])},mr=(d,v)=>{const k=(0,N.useRef)();(0,N.useEffect)(()=>{k.current=d},[d]),(0,N.useEffect)(()=>{if(v){const O=setInterval(()=>k.current(),v);return()=>clearInterval(O)}},[v])},er=d=>{const v=(0,N.useRef)();return(0,N.useEffect)(()=>{v.current=d},[d]),v.current},xr=(d=null)=>Dt()?Ht(d)?{left:d.scrollLeft,top:d.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},gr=(d=null)=>{const[v,k]=tr(xr(d));return(0,N.useEffect)(()=>{const O=()=>k(xr(d)),L=Ht(d)?d:window;return L.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>L.removeEventListener("scroll",O)},[d]),v},rr=d=>Yt(d)==="array",or=d=>rr(d)&&!!d.length,fe=(d,v,k=[],O=!1,L=null)=>or(d)?v?(k=typeof k=="string"?k.split(","):k,d.filter(st=>(k=k.length>0?k:Object.keys(st),k.filter(kt=>{const St=st[kt];if(St==null)return!1;if(O)return St===v;const ut=new RegExp(v,"gi"),Ut=St.toString().match(ut);return Ut&&L&&(st[kt]=L(St.toString().replace(ut,`<span style="background-color:yellow">${Ut[0]}</span>`),{display:"inline-block"})),Ut}).length))):d:[],$e=(d,v="id")=>{if(!or(d))return d;const k=[],O=[];return d.map(L=>{const st=ae(L)?L[v]:L;O.includes(st)||(O.push(st),k.push(L))}),k},nr=d=>d?.$$typeof&&typeof d.$$typeof=="symbol"&&d.$$typeof.description==="react.element",ie=d=>d?.__v_isVNode,yr=d=>{if(!rr(d)&&!ae(d))return d;const v=rr(d)?[]:{};for(const k in d)if(Y(d,k)){const O=d[k];v[k]=nr(O)||ie(O)||typeof O!="object"?O:O!==d?yr(O):"cyclic"}else Object.setPrototypeOf(v,{[k]:d[k]});return v},De=yr,ue=d=>(v,k="children")=>{if(!Array.isArray(v))return v;const O=De(v),L=st=>{const kt=[];return st.map(St=>{if(or(St[k])){const ut=L(St[k])||[];St[k]=ut,ut.length>0&&kt.push(St)}}),d(st,kt)};return L(O)},Ze=(d,v,k="name",O=!1,L="id",st="children",kt)=>ue((St,ut)=>$e([...fe(St,v,k,O,kt),...ut],L))(d,st);var Yr=it(322);const br=(d,v)=>(0,Yr.jsx)("div",{dangerouslySetInnerHTML:{__html:d},...v}),Tr=(d=null,v=br)=>{const[k,O]=(0,N.useState)(d),L=(0,N.useCallback)((...st)=>{const[kt,St,ut,Ut,se,je]=st;if(!St)O(null);else{st=[kt,St,ut,Ut,se,je,v];const Se=Ze(...st);O(Se)}},[]);return[k,L]},vr=d=>{const[v,k]=(0,N.useState)(d);return(0,N.useEffect)(()=>k(d),[d]),[v,k]},Ye=()=>{const d={};return{on:(v,k)=>{d[v]||(d[v]=[]),d[v].indexOf(k)===-1&&d[v].push(k)},emit:(v,k)=>{d[v]&&d[v].map(O=>O(k))},off:(v,k=null)=>{if(d[v]){if(typeof k!="function")return delete d[v];const O=d[v].indexOf(k);O>-1&&(d[v].splice(O,1),d[v].length||delete d[v])}}}},pe=d=>{const v={};for(let k in d)Y(d,k)||(v[k]=d[k]);return v},Ur=(d,v)=>{if(!ae(d))return v;if(!ae(v))return d;const k={...pe(d),...pe(v)},O={...d,...v};return Object.keys(k).map(L=>{Object.setPrototypeOf(O,{[L]:k[L]})}),O},be=(()=>{const{on:d,emit:v,off:k}=Ye(),O={};return{getState:L=>De(O[L]),setState:(L,st=!1)=>{if(typeof L=="function"&&(L=L(De(O))),!ae(L))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const kt=De(L);Object.keys(kt).map(St=>{const ut=O[St],Ut=kt[St],se=ae(Ut)&&ae(ut)?Ur(ut,Ut):Ut;!st&&v(St,se),O[St]=se})},subscribe:(L,st)=>(d(L,st),()=>k(L,st)),unsubscribe:k,clean:L=>{typeof L=="string"?O[L]=void 0:Array.isArray(L)?L.map(st=>O[st]=void 0):Object.keys(O).map(st=>O[st]=void 0)}}})(),wr=Vt(be),me=d=>d<10?"0"+d:d,kr=(d=new Date)=>{const v=new Date(d),k=v.getFullYear(),O=v.getDay(),L=me(v.getMonth()+1),st=me(v.getDate()),kt=me(v.getHours()),St=me(v.getMinutes()),ut=me(v.getSeconds());return[k,L,st,kt,St,ut,O]},Cr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Kr=(d,v,k="-")=>d.replace(new RegExp(k,"g"),v),Ue=(d=new Date,v=["-","-"," ",":",":",""],k=Cr)=>{const O=kr(d);let L="";return v.map((st,kt)=>L+=(kt===6?k[O[kt]]:O[kt]??"")+st),L},Ee=()=>Ue(new Date,["-","-"," ",":",":"," ",""]),Oe=()=>{const[d,v]=(0,N.useState)("");return mr(()=>{v(Ee())},1e3),[d]},Te=d=>++d,Nr=()=>{const[,d]=(0,N.useState)(0);return(0,N.useCallback)(()=>d(Te),[])},Pr=()=>{const[d,v]=tr(ne());return(0,N.useEffect)(()=>{const k=()=>v(ne());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),d}})();var C=B.fH,s=B.r5,z=B.Nd,I=B.KY,dt=B.Vd,A=B.Nr,S=B.D,H=B.Wy,p=B.zX,D=B.Cd,F=B.Yz,Z=B.D9,W=B.cb,U=B.vO,ht=B.Rx,wt=B.OH,$t=B.oR,xt=B.rE,Tt=B.PQ,Zt=B.rf,Qt=B.xd},71090:function(ye,Gt,_t){_t.d(Gt,{$L2:function(){return Ka},A_F:function(){return ji},B5o:function(){return yi},BWC:function(){return fi},CLv:function(){return gi},Few:function(){return ai},JaC:function(){return qa},Lgs:function(){return Pi},MTn:function(){return ti},NA2:function(){return pi},Og:function(){return $i},PTJ:function(){return ci},Qfx:function(){return ui},UhT:function(){return Xa},Vcq:function(){return zi},XBe:function(){return Ai},XBv:function(){return di},_O2:function(){return Di},_iG:function(){return ri},_vH:function(){return Si},afD:function(){return li},azd:function(){return Fi},dKu:function(){return si},dtG:function(){return oi},eyl:function(){return hi},f9u:function(){return Ni},fHt:function(){return Qa},gVz:function(){return Ei},hd2:function(){return wi},jg2:function(){return Ci},k$y:function(){return Oi},mrB:function(){return ii},muM:function(){return Ga},nL5:function(){return vi},qg7:function(){return ni},rTd:function(){return xi},rWO:function(){return mi},tOc:function(){return _i},vQq:function(){return Ja},xDX:function(){return ei},yZP:function(){return ki},yfi:function(){return Ti},ywV:function(){return bi}});var V={};(function(){V.d=function(t,e){for(var r in e)V.o(e,r)&&!V.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){V.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var l={};V.d(l,{NzM:function(){return jt},wBC:function(){return A},O39:function(){return H},cnu:function(){return Z},E4D:function(){return U},TRp:function(){return wt},zI1:function(){return xt},Ufj:function(){return Zt},GxO:function(){return Yt},cu2:function(){return ce},BcS:function(){return pr},lPd:function(){return rt},dC1:function(){return zt},$L2:function(){return pt},Vji:function(){return f},YxP:function(){return P},UhT:function(){return or},JaC:function(){return $e},o4B:function(){return De},Hlr:function(){return Cr},muM:function(){return L},OiV:function(){return be},KTn:function(){return kt},lwL:function(){return ut},d9v:function(){return k},yCD:function(){return se},qCK:function(){return Se},vQq:function(){return ar},fHt:function(){return de},azq:function(){return eo},dSY:function(){return J},MTn:function(){return It},RYO:function(){return Pe},WAo:function(){return At},GVc:function(){return Ue},Emy:function(){return mt},v9O:function(){return Lt},DsO:function(){return Jt},_lj:function(){return _e},vO6:function(){return Ke},xDX:function(){return Me},hf3:function(){return Ho},ip7:function(){return go},uYe:function(){return nt},DgJ:function(){return Oe},rae:function(){return yo},YBu:function(){return bo},_iG:function(){return ho},hXT:function(){return Co},gQq:function(){return jo},D_D:function(){return so},$nD:function(){return _o},dtG:function(){return zr},Y0R:function(){return Ko},qg7:function(){return zo},Xxf:function(){return Fo},tSM:function(){return $o},Few:function(){return Do},xHg:function(){return Oo},aoj:function(){return To},Dlm:function(){return Jr},mrB:function(){return No},dKu:function(){return _},v1d:function(){return lr},afD:function(){return ot},Lz5:function(){return Kt},xZX:function(){return Pt},G_1:function(){return ve},osI:function(){return He},PTJ:function(){return Je},Qfx:function(){return we},bti:function(){return Ge},XBv:function(){return wn},eyl:function(){return kn},y35:function(){return Cn},hKD:function(){return ur},BWC:function(){return po},oLi:function(){return B},NA2:function(){return jn},S3Y:function(){return Rr},pvT:function(){return nn},m2f:function(){return Xt},rWO:function(){return Sn},A$w:function(){return _n},kJL:function(){return s},S9U:function(){return pe},dYC:function(){return le},jUY:function(){return N},J_U:function(){return zn},kKo:function(){return D},VZO:function(){return Fn},mf2:function(){return vr},w1q:function(){return An},Kn2:function(){return b},ncl:function(){return $n},LWC:function(){return Nr},dqb:function(){return X},Kjn:function(){return Dn},TaN:function(){return dr},CBv:function(){return Sr},rTd:function(){return cr},B73:function(){return On},SSA:function(){return d},CLv:function(){return Tn},F$z:function(){return Nn},XT_:function(){return an},omS:function(){return Pn},poV:function(){return In},VXY:function(){return Rn},xsP:function(){return Mn},HPs:function(){return Bn},TSy:function(){return Ln},B5o:function(){return Po},u1A:function(){return Hn},WAY:function(){return Io},I8J:function(){return Ct},ywV:function(){return Yn},bEN:function(){return Un},$45:function(){return Kn},TUk:function(){return Xn},T7B:function(){return R},CEd:function(){return qn},IHq:function(){return Gn},SkG:function(){return un},Smz:function(){return br},nL5:function(){return Ze},ON:function(){return ta},eiS:function(){return ea},Frc:function(){return ra},z5J:function(){return oa},scT:function(){return na},hd2:function(){return Mo},AnA:function(){return aa},kYX:function(){return ia},yZP:function(){return sa},IVd:function(){return Ro},SIr:function(){return ca},jg2:function(){return ua},gVz:function(){return da},puc:function(){return pa},Azz:function(){return ma},X5u:function(){return Ve},dPh:function(){return xa},SMZ:function(){return Ht},kro:function(){return I},nPi:function(){return ga},US:function(){return ya},A_F:function(){return Ce},_vH:function(){return no},gmH:function(){return Be},DYV:function(){return ba},qi2:function(){return va},tOc:function(){return wa},hau:function(){return Ca},FaZ:function(){return _r},uyF:function(){return Ea},Vcq:function(){return ja},XKW:function(){return Sa},azd:function(){return ie},P2K:function(){return _a},XBe:function(){return $a},JZ7:function(){return mn},ABi:function(){return ge},ogC:function(){return Da},Og:function(){return Ra},_O2:function(){return co},P0C:function(){return Ma},Uo5:function(){return Ba},Two:function(){return fo},tYQ:function(){return La},tVn:function(){return w},pHy:function(){return Ha},k$y:function(){return qe},yfi:function(){return Wa},fl8:function(){return Va},f9u:function(){return Za},ZV1:function(){return Ya},Lgs:function(){return Ua}});var jt=(t,e="key",r="value")=>{const o={};return(t||[]).map(a=>o[a[e]]=a[r]),o},B=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),s=t=>B(t)==="array",I=t=>(e,r,o="id",a="children")=>{if(!s(e))return null;const h=(g,$="")=>{for(let q=0,ct=g.length;q<ct;q++){const ft=g[q];if(ft[o]===r)return t(g,q,$)||g[q];if(s(ft[a])){const re=h(ft[a],ft[o]);if(re)return re}}};return h(e),e},A=(t,e,r,o="id",a="children")=>I((h,g)=>h.splice(g,0,r))(t,e,o,a),H=(t,e,r,o,a="id",h="children")=>I((g,$)=>{const q=g[$];q.children?q.children.splice(o,0,r):q.children=[r]})(t,e,a,h),D=t=>B(t).indexOf("element")>-1,Z=(t,e="")=>{if(!D(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),a=[...new Set([...r,...o])];t.className=a.join(" ")},U=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},wt=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},xt=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Zt=(t,e,r,o="id",a="children")=>I((h,g)=>{const $=h[g];return $[a]=[...$[a]||[],...r],$})(t,e,o,a),N=()=>![typeof window,typeof document].includes("undefined"),Yt=t=>{if(N())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=a=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},ce=(t,e)=>{if(N())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(a=>a.getAttribute("huxy-css-hash")).filter(Boolean).find(a=>a===e))r();else{const a=document.createElement("style");a.onerror=h=>o(new Error(`Failed to load '${e}' style`)),a.onload=r,a.innerHTML=t,a.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(a=>a.href===t))r();else{const a=document.createElement("link");a.onerror=h=>o(new Error(`Failed to load '${t}'`)),a.onload=r,a.href=t,a.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}})},pr=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},f=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:a})=>r[o]=a),r},b=t=>B(t)==="object";const K=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,b(o)?e+=`${r}: ${K(o)}`:Array.isArray(o)?e+=`${r}: ${P(o)}`:typeof o=="string"?e+=`${r}: '${o}'`:e+=`${r}: ${o}`}),`{${e}}`};var R=K;const Y=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,b(r)?e+=R(r):Array.isArray(r)?e+=Y(r):typeof r=="string"?e+=`'${r}'`:e+=`${r}`}),`[${e}]`};var P=Y,rt=t=>(e,r="id",o="children",a=-1)=>{if(!s(e))return e;const h={},g=e.map($=>$[r]);return[...e].map($=>{const q={...$},{[r]:ct}=q;if(ct!=null){let{parentId:ft}=q;ft==null&&(ft=t?.(q)??a,q.parentId=ft),h[ct]||(h[ct]=[]),q[o]=h[ct],h[ft]||(h[ft]=[]),h[a]||(h[a]=[]),g.includes(ft)?h[ft].push(q):h[a].push(q)}}),h[a]},zt=(t,e="id",r="children",o=-1)=>rt(a=>a[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),pt=(t,e="path",r="children",o=null)=>rt(a=>{const h=a[e],g=h.match(/.*\/[^:/]+\/:[^/]+/);return g?g[0].match(/(.*)\/:+/)?.[1]??o:h.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),Ht=()=>N()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Xt=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),X=t=>Xt(t,"current"),Ve=(t=0,e)=>{N()&&(e=X(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},mr=`.huxy-totop-bar {
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
  z-index: 8888;
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
}`;const er=()=>document.getElementsByClassName("huxy-totop-bar")[0],xr=t=>{if(er())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Ve(),!1),e},gr=()=>{const t=er();t&&document.body.removeChild(t)};var or=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!N())return;ce(mr,"huxy-backtop-css");const r=()=>{Ht()>t?xr(e):gr()};return(()=>(document.addEventListener("scroll",r,!1),()=>{gr(),document.removeEventListener("scroll",r,!1)}))()},$e=(t=0,e=2)=>parseInt(String(t),e),ie=(t=0,e=2)=>Number(t).toString(e),De=(t=0,e=2,r=16)=>ie($e(t,e),r),Ze=t=>{if(!b(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const a=o>0?"&":"?";e.push(`${a}${r}=${t[r]}`)}),e.join("")},br=t=>{if(!b(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},vr=t=>B(t)==="function",pe=t=>B(t)==="promise"||b(t)&&vr(t.then),be=(t,e=3e5,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!pe(t))return{};let o=null,a=null;return{promiseFn:new Promise((h,g)=>{o=($="canceled")=>{clearTimeout(a),h({canceled:!0,errMsg:$})},e&&(e=typeof e!="number"?12e4:e,a=setTimeout(()=>o(r),e)),t.then($=>{clearTimeout(a),h({result:$,errMsg:!1})}).catch($=>{clearTimeout(a),g($)})}),cancelFn:o}};const wr=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>br(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>Ze(t).slice(1)}],me=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(a=>t[a]);if(o.length===1){const a=o[0],h=r?e:a;return h==="params"?{query:t[a]}:{result:t[a],type:h}}else if(o.length>1){const a=o.filter(g=>g!=="params").slice(-1)[0],h=r?e:a;return h==="params"?{query:t.params||t[a]}:{query:t.params,result:t[a],type:h}}};var Cr=(t,e)=>r=>(o,a={})=>{const{headers:h,dataType:g,data:$,formData:q,form:ct,params:ft,...re}=a,oe={data:$,formData:q,form:ct,params:ft};let Zr;const{query:hr,result:xn,type:Ii}=me(oe,g)||{};if(!re.body&&xn){const mo=wr.find(xo=>xo.type===Ii);Zr=mo.headers,re.body=mo.body(xn)}hr&&(o=`${o}${Ze(hr)}`);const{promiseFn:Ri}=be(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Zr,...h},...re}),e);return Ri.then(({result:mo,errMsg:xo})=>t(xo?{status:408,statusText:xo}:mo))},Ue=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let a=!1;for(let h in o)Xt(o,h)&&r(o[h])&&(o[h]="cyclic",a=!0);return a}return!1};return r(t)&&t};const Ee=(t,e)=>{const r=B(t),o=B(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Ue(t)&&Ue(e))return Ee(t,e);for(let a in e)if(Xt(t,a)!==Xt(e,a)||!Ee(t[a],e[a]))return!1;return!0};var Oe=Ee,Nr=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",d=t=>t?.__v_isVNode;const v=t=>{if(!s(t)&&!b(t))return t;const e=s(t)?[]:{};for(const r in t)if(Xt(t,r)){const o=t[r];e[r]=Nr(o)||d(o)||typeof o!="object"?o:o!==t?v(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var k=v,L=(t=100)=>{const e=[];let r=-1;const o=h=>{const g=e.length,$=k(h);return Oe($,e[g-1]?.data)?{index:r,length:g,data:e[r]?.data}:(e.push({data:$}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},a=(h=0)=>{const g=e.length;return r+=h,r=r<0?0:r>g-1?g-1:r,{index:r,length:g,data:k(e[r]?.data)}};return{record:o,cursor:a,jump:h=>(r=h,{index:r,length:e.length,data:k(e[r]?.data)}),undo:()=>a(-1),redo:()=>a(1),getList:()=>k(e),clean:()=>{e.length=0,r=-1}}},kt=(t,e,r)=>{if(!s(t))return t;const o=t[e],a=t[r];return t.splice(e,1,a),t.splice(r,1,o),t},ut=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},se=(t,e,r=".")=>{const o=t.split(r),a=e.split(r),h=o.length;let g=0;for(let $=0;$<h;$++)if(Number(o[$])<Number(a[$])){g=h-$;break}else if(Number(o[$])>Number(a[$]))break;return g},Se=(...t)=>(...e)=>{const[...r]=t,o=(...a)=>r.length===0?a[0]:o(r.pop()(...a));return o(...e)},ar=t=>{if(!N())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},de=t=>(e,r)=>{const{getState:o,setState:a,subscribe:h,unsubscribe:g,clean:$}=t;return r!==void 0&&a({[e]:r},!0),{getState:()=>o(e),setState:(q,ct)=>a({[e]:q},ct),subscribe:q=>h(e,q),unsubscribe:()=>g(e),clean:()=>$(e)}},Pe=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),eo=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:Pe(o))}});const Xr=t=>t.startsWith("on"),jr=t=>t!=="children"&&!Xr(t),Ie=(t,e)=>r=>t[r]!==e[r],c=(t,e)=>r=>!(r in e),x=t=>{const e=Object.keys(t);return{eventProps:e.filter(Xr),propertyProps:e.filter(jr)}};var w=(t,e,r)=>{const{eventProps:o,propertyProps:a}=x(e),{eventProps:h,propertyProps:g}=x(r);o.filter(c(e,r)).map($=>{const q=$.toLowerCase().slice(2);t.removeEventListener(q,e[$])}),a.filter(c(e,r)).map($=>t[$]=""),g.filter(Ie(e,r)).map($=>t[$]=r[$]),h.filter(Ie(e,r)).map($=>{const q=$.toLowerCase().slice(2);t.addEventListener(q,r[$])})},J=t=>{if(!N())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return w(e,{},t.props),e},nt=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const et=t=>{const e={};for(let r in t)Xt(t,r)||(e[r]=t[r]);return e};var Ct=(t,e)=>{if(!b(t))return e;if(!b(e))return t;const r={...et(t),...et(e)},o={...t,...e};return Object.keys(r).map(a=>{Object.setPrototypeOf(o,{[a]:r[a]})}),o},It=()=>{const{on:t,emit:e,off:r}=nt(),o={};return{getState:a=>k(o[a]),setState:(a,h=!1)=>{if(typeof a=="function"&&(a=a(k(o))),!b(a))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const g=k(a);Object.keys(g).map($=>{const q=o[$],ct=g[$],ft=b(ct)&&b(q)?Ct(q,ct):ct;!h&&e($,ft),o[$]=ft})},subscribe:(a,h)=>(t(a,h),()=>r(a,h)),unsubscribe:r,clean:a=>{typeof a=="string"?o[a]=void 0:Array.isArray(a)?a.map(h=>o[h]=void 0):Object.keys(o).map(h=>o[h]=void 0)}}},At=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...a)=>r(...o,...a);return r},mt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,a=>a.toUpperCase()):r.replace(/^\S/,a=>a.toLowerCase())).join(""),Lt=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let h=a.length;const g=new Uint8Array(h);for(;h--;)g[h]=a.charCodeAt(h);return new File([g],e??+new Date,{type:o})},Jt=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},_e=(t,e,r="id",o="children")=>I((a,h)=>a.splice(h,1))(t,e,r,o),Ke=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",ge=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),qe=()=>{let t=ge();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},Sr=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),le=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},Me=async(t,e,r)=>{if(!N())return;r=r||qe();const o=e?`${r}.${e}`:r,a=Sr(t);if(a||le(t)){t=a?decodeURIComponent(t):t;const h=await fetch(t),g=h.headers.get("Content-Disposition"),$=g&&decodeURIComponent(g.split(";")[1].split("=")[1]);h.blob().then(q=>{const ct=window.URL.createObjectURL(q),ft=document.createElement("a");ft.href=ct,ft.download=$||o,ft.style.display="none",document.body.appendChild(ft),ft.click(),ft.parentNode.removeChild(ft),window.URL.revokeObjectURL(ct)})}else{const h=new Blob([t]),g=window.URL.createObjectURL(h),$=document.createElement("a");$.href=g,$.download=o,$.style.display="none",document.body.appendChild($),$.click(),$.parentNode.removeChild($),window.URL.revokeObjectURL(g)}},Rr=(t=null)=>N()?D(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Ge=t=>{if(N())return t=X(t)?t.current:t??document.body,t.getBoundingClientRect?.()},_r=t=>{if(!N())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},Ce=(t,e={},r=!1)=>{if(D(t)){if(r){let o="";Object.keys(e).map(a=>{o+=`${a}: ${e[a]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Ae=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,oo=(t=350,e="ms")=>new Promise(r=>setTimeout(r,Ae(t,e))),Be=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var no=oo,lr=async(t,e=15)=>{if(!N())return;if(typeof t=="string"&&(t=_r(t)),t=X(t)?t.current:t,!D(t))return{};const r=t.cloneNode(!0);Ce(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await no(e);const o=Ge(r);return t.parentNode.removeChild(r),o};const Bo=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Lo=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Gr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Bo.test(r)?t.setAttribute("class",r.replace(Lo,e)):t.setAttribute("class",`${r} ${e}`)},Br=async(t,e,r)=>{const{left:o,right:a,top:h,bottom:g}=Ge(t),{width:$,height:q}=Rr(),{width:ct,height:ft}=await lr(e);if(a<0||g<0||o>$||h>q)return{};if(r==="vertical"){const re={left:o+"px",top:g+10+"px",right:"auto",bottom:"auto"};let oe="lt";o+ct>$&&(re.left=a-ct+"px",oe="rt"),g+10+ft>q&&(re.top=h-10-ft+"px",oe=oe==="lt"?"lb":"rb"),Ce(e,re),Gr(e,oe)}else{const re={left:a+10+"px",top:h+"px",right:"auto",bottom:"auto"};let oe="tl";a+10+ct>$&&(re.left=o-10-ct+"px",oe="tr"),h+ft>q&&(re.top=g-ft+"px",oe=oe==="tl"?"bl":"br"),Ce(e,re),Gr(e,oe)}};var Ho=(t,e,r="horizontal")=>{const o=Jt(Br),a=()=>o(t,e,r);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const h=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),Ce(e,{left:"",top:"",right:"",bottom:""})};return Br(t,e,r),h},go=(t,e,r,o="id",a="children")=>I((h,g)=>h[g]={...h[g],...r})(t,e,o,a),yo=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const io=nt();var bo=t=>{const{on:e,emit:r,off:o}=io;return{on:a=>e(t,a),emit:a=>r(t,a),off:a=>o(t,a)}};const vo=120*1e3,wo=t=>t.json().then(e=>e);var ho=(t=wo,e=vo)=>(r="get")=>Cr(t)((r||"get").toUpperCase()),cr=t=>s(t)&&!!t.length,Co=(t,e,r=[],o=!1,a=null)=>cr(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(h=>(r=r.length>0?r:Object.keys(h),r.filter(g=>{const $=h[g];if($==null)return!1;if(o)return $===e;const q=new RegExp(e,"gi"),ct=$.toString().match(q);return ct&&a&&(h[g]=a($.toString().replace(q,`<span style="background-color:yellow">${ct[0]}</span>`),{display:"inline-block"})),ct}).length))):t:[],fo=(t,e="id")=>{if(!cr(t))return t;const r=[],o=[];return t.map(a=>{const h=b(a)?a[e]:a;o.includes(h)||(o.push(h),r.push(a))}),r};const Eo=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=k(e),a=h=>{const g=[];return h.map($=>{if(cr($[r])){const q=a($[r])||[];$[r]=q,q.length>0&&g.push($)}}),t(h,g)};return a(o)};var jo=(t,e,r="name",o=!1,a="id",h="children",g)=>Eo(($,q)=>fo([...Co($,e,r,o,g),...q],a))(t,h),so=(t,e)=>{const r=[],o=t.children??[];for(let a=0,h=o.length;a<h;a++){const g=o[a];g.className.indexOf(e)>-1&&r.push(g)}return r.length===0?null:r.length===1?r[0]:r},_o=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],zr=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),Ko=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},zo=(t="")=>(t??"").replaceAll("//","/"),Fo=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",$o=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},Do=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),a=t%3600,h=~~(a/60);return o<24?`${o}${e[2]}${h}${e[1]}${a%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},co=t=>(e,r="children")=>{if(!s(e))return e;const o=(a,h=[])=>a.map((g,$)=>{const q=s(g[r]);if(g=t(g,h,$,q)||g,q){const{[r]:ct,...ft}=g;g[r]=o(ct,[...h,{...ft,"@@index":$}])}return g});return o(e)},Oo=(t,e="children")=>{const r=[];return co(o=>{const{[e]:a,...h}=o;r.push(h)})(t,e),r},To=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const Vr=t=>t<10?"0"+t:t;var ur=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),a=Vr(e.getMonth()+1),h=Vr(e.getDate()),g=Vr(e.getHours()),$=Vr(e.getMinutes()),q=Vr(e.getSeconds());return[r,a,h,g,$,q,o]},Jr=(t,e=new Date)=>{t=ur(t),e=ur(e);const r=e.y-t.y,o=e.m-t.m,a=e.d-t.d,h=e.h-t.h,g=e.M-t.M,$=new Date(e.y,e.m,0).getDate(),q=(ct,ft,re,oe,Zr)=>{const hr="\u524D";return ft<0&&(ct-=1,ft+=re),ct===0?ft+Zr+hr:ft===0?ct+oe+hr:ct+oe+ft+Zr+hr};return r>0?q(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?q(o,a,$,"\u4E2A\u6708","\u5929"):a>0?q(a,h,24,"\u5929","\u5C0F\u65F6"):h>0?q(h,g,60,"\u5C0F\u65F6","\u5206\u949F"):g>0?g+"\u5206\u949F\u524D":"\u521A\u521A"};const Fr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],bn=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var No=(t=new Date,e=["-","-"," ",":",":",""],r=Fr)=>{const o=ur(t);let a="";return e.map((h,g)=>a+=(g===6?r[o[g]]:o[g]??"")+h),a};const Qr=["","webkit","moz","ms"],n=t=>Qr.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),i=t=>Qr.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),u=t=>Qr.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),m=Qr.map(t=>`${t}fullscreenchange`);var _=t=>{if(!N())return;t=X(t)?t.current:t??document.body;const e=n(document),r=i(t),o=u(document);document[e]?document[o]?.():t[r]?.()};const T=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var ot=()=>{if(!N())return;const t=window.navigator.userAgent.toLowerCase(),e=T.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const lt=60*1e3,vt=60*lt,bt=24*vt;var Kt=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/bt);r-=bt*o;const a=~~(r/vt);r-=vt*a;const h=~~(r/lt);r-=lt*h;const g=~~(r/1e3);return`${o}\u5929${a}\u5C0F\u65F6${h}\u5206${g}\u79D2`};const qt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Nt=t=>{if(!Array.isArray(t))return qt;const e=[...qt];return t.map(r=>{const o=e.findIndex(a=>a.name===r.name||a["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Pt=t=>{const e=Nt(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return _r(e.join(""))},ve=(t=new Date)=>{const e=ur(t);return new Date(e[0],e[1],0).getDate()},He=(t=null)=>N()?D(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const he=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var Je=()=>{if(!N())return;const t=window.navigator.userAgent.toLowerCase(),e=he.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},we=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(a=>{const[h,g]=a.split("=");o[h]=g}),{path:e,params:o}}return{path:e}},dr=()=>N()&&(window.ontouchstart||navigator.maxTouchPoints),po=t=>{const{left:e,top:r}=He();return{touchX:dr()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:dr()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},wn=(t,e)=>{const{touchX:r,touchY:o}=po(t),{x:a,y:h}=e?.getBoundingClientRect?.()??{};return{x:r-(a??0),y:o-(h??0)}},kn=(t,e,r="id",o="children")=>{if(!s(t))return null;const a=h=>{for(let g=0,$=h.length;g<$;g++){const q=h[g];if(q[r]===e)return[q];if(s(q[o])){const ct=a(q[o]);if(ct)return[q].concat(ct)}}};return a(t)},Cn=(t,e,r)=>{if(!N())return;r=X(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&Ce(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const a=o.getBoundingClientRect();return r.removeChild(o),a};const En=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var jn=(t={},e)=>{e=En(e);const r=(o,a)=>{if(!a?.[0])return o;if(typeof o[a[0]]=="object")return r(o[a[0]],a.slice(1));if(!(a.length>1))return o[a[0]]};return r(t,e)},nn=(t,e="")=>D(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),Sn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,a=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${a})`;const h=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${a},${h})`},_n=t=>{if(!N())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:a}=t;return e.width=o,e.height=a,r.drawImage(t,0,0,o,a),e},zn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),Fn=t=>B(t)==="error",An=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),$n=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Dn=t=>B(t)==="regexp",On=t=>b(t)&&!!Object.keys(t).length,Tn=()=>{if(N())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},Nn=t=>typeof t=="boolean"||t==null?`${t}`:Array.isArray(t)?P(t):b(t)?R(t):t,an=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",a=>r(a))}),Pn=async t=>{if(!Sr(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await an(e)},In=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",a=>r(a)))}),Rn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await no(r)},Mn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],Bn=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const a=JSON.stringify(o),h=r.find(g=>g.key===a);if(!h){const g=t(...o);return r.push({key:a,result:g}),r.length>e&&r.shift(),g}return h.result}};const sn=(t,e,r="id")=>{if(!s(t))return e;if(!s(e))return t;const o={};return[...t,...e].map(a=>{const h=b(a)?a[r]??JSON.stringify(a):a;if(o[h]===void 0)o[h]=a;else{const g=o[h];b(g)&&b(a)?o[h]=Io(g,a,r):s(g)&&s(a)?o[h]=sn(g,a,r):o[h]=a}}),Object.keys(o).map(a=>o[a])};var Po=sn;const ln=(t,e,r="id")=>{if(!b(t))return e;if(!b(e))return t;for(let o in e)Xt(e,o)?b(t[o])&&b(e[o])?t[o]=ln(t[o],e[o],r):s(t[o])&&s(e[o])?t[o]=Po(t[o],e[o],r):t[o]=e[o]:Object.setPrototypeOf(t,{[o]:e[o]});return t};var Io=ln,Ln=(t,...e)=>{const r=s(t)?Po:Io;return e.map(o=>t=r(t,o)),t},Hn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Ro=(t,e="")=>{if(!D(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(a=>!r.includes(a));t.className=o.join(" ")},Wn=`@keyframes huxy-message-animate-in {
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
}`;const cn=()=>document.getElementsByClassName("huxy-message")[0],Vn=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Zn=(t,e,r)=>{const o=t?.dir??"auto",a=document.createElement("div");a.setAttribute("class",`message-content open ${e} ${o}`),a.setAttribute("data-id",r);const h=document.createElement("span");h.setAttribute("class","message"),h.innerText=t?.message??t;const g=document.createElement("i");return a.appendChild(g),a.appendChild(h),a},uo=(t,e=3250,r,o)=>{if(!N())return;ce(Wn,"huxy-message-css");let a=cn();a||(a=Vn());const h=qe(),g=Zn(t,o,h);return a.appendChild(g),e&&(setTimeout(()=>{a.removeChild(g),r?.()},e),setTimeout(()=>{Ro(g,"open")},e-250)),h};var Yn={success:(t,e,r)=>uo(t,e,r,"success"),warn:(t,e,r)=>uo(t,e,r,"warn"),warning:(t,e,r)=>uo(t,e,r,"warn"),error:(t,e,r)=>uo(t,e,r,"error"),info:(t,e,r)=>uo(t,e,r,"info"),destroy:t=>{const e=cn();if(e)if(t){const r=e.querySelector(`[data-id="${t}"]`);r&&e.removeChild(r)}else for(;e.firstChild;)e.removeChild(e.firstChild)}},Un=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[U(1-r),U(ve(e)-r)]},Kn=(t,e,r,o,a="id",h="children")=>{let g={};return I(($,q)=>(g=$[q],$.splice(q,1),!0))(t,e,a,h),H(t,r,g,o,a,h),t},Xn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),qn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(a=>e.includes(a)?o.push({key:a,value:t[a]}):r[a]=t[a]),{newObj:r,newQuery:o}},Gn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},un=(t="",e=2,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const dn="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",hn="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Jn=t=>{const e={},r={},o=t.match(new RegExp(dn,"g")).map(h=>h.match(new RegExp(dn))).filter(Boolean),a=t.match(new RegExp(hn,"g")).map(h=>h.match(new RegExp(hn))).filter(Boolean);return o.map(h=>{const[,g,$]=h;e[g]=$,r[g]="base"}),a.map(h=>{const[,g,$]=h;e[g]=($??"").trim(),r[g]="data"}),{obj:e,types:r}},Qn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var ta={xml2Obj:Jn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Qn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},ea=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!s(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},ra=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(a,h)=>a?o(a):r(h))),oa=()=>"#"+un((~~(Math.random()*(1<<24))).toString(16),6),Mo=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),na=(t=[])=>t[Mo(t.length-1)],aa=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,a)=>{a===t-1?r[a]=e:(r[a]=Mo(1,e-1),e-=r[a])}),r},ia=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),sa=()=>Math.random()>.5;const la=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ca=(t,e=60)=>{if(!N())return;t=X(t)?t.current:t??document.body;let r=so(t,"resize-sensor"),o=[];const a=Jt(()=>o.map(q=>q(t)),e),h=q=>{so(t,"resize-sensor")||(r=la(t,a)),o.indexOf(q)===-1&&o.push(q)},g=q=>{const ct=o.indexOf(q);ct!==-1&&o.splice(ct,1),o.length===0&&r&&$()},$=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",a,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:h,unbind:g,destroy:$}};const fn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const a=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?a:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${a}${o}`)};var ua=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const a=t.match(/rgba?\((.+)\)/);if(a){const h=a[1]?.split(",").map(g=>g.trim());return fn(...h)}return t}return fn(t,e,r,o)},da=(t,e="px")=>`${t}`.replace(e,"")-0;const pn=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ha=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},fa=()=>{const t=[],e=g=>{t.push(g),h(g)},r=()=>t[0],o=()=>t.shift(),a=g=>g.startTime=pn(),h=g=>{a(g),t.sort(($,q)=>$.startTime-q.startTime)};return{hub:t,push:e,peek:r,shift:o,update:h}};var pa=(t=5)=>{const{hub:e,push:r,peek:o,shift:a,update:h}=fa(),g=ha(()=>{q()&&g()}),$=ct=>pn()-ct.startTime>t,q=()=>{let ct=o();for(;ct;){if($(ct)){h(ct);break}const{task:ft}=ct;typeof ft=="function"?(ct.task=null,ft()):a(),ct=o()}return ct};return(ct=()=>{})=>{r({task:ct}),e.length<2&&g()}},ma=()=>N()&&document.documentElement.scrollHeight-Ht()===Rr().height,xa=t=>{N()&&(t=X(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ga={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ya=t=>{const e=Pt(t);N()&&document.head.appendChild(...e)},ba=(t,e=null,r=!1)=>[...t||[]].sort((o,a)=>{const h=e?o[e]:o,g=e?a[e]:a;return!isNaN(Number(h))&&!isNaN(Number(h))?r?g-h:h-g:typeof h=="string"&&typeof g=="string"?r?g.localeCompare(h):h.localeCompare(g):typeof h=="string"&&typeof g=="number"?r?-1:1:typeof h=="number"||typeof h=="string"?r?1:-1:r?-1:1}),va=t=>{if(!b(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},wa={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const ka=It();var Ca=de(ka),Ea=(t,e={},r="utils")=>{const o=[];t.replace(/\/\*[\s\S]*\*\//,"").split(`
`).map(h=>{const g=h.split(");").map($=>$.replace(/(?<!:)\/\/[^\n]*/,"").trim()).filter(Boolean).map($=>`${$})`);o.push(...g)});const a=o.filter(h=>/^[^\s/]+\([\s\S]*\)$/.test(h));if(a.length){const h=a.slice(-1)[0];h.indexOf("return ")!==0&&(t=t.replace(h,`
return ${h}`))}return window[r]=e,Function(`${t}`)()},ja=()=>N()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),Sa=(t,...e)=>{const r=[];return t.map((o,a)=>{r.push(o,e[a]??"")}),r.join("")},_a=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const za=t=>[12,ve(t),24,60,60],Fa=(t=[],e=[],r=[])=>{let o=!1;const a=[];return e.map((h,g)=>{const $=(o?h-1:h)-t[g];$<0?(a[g]=$+(r[g]||10),o=!0):(a[g]=$,o=!1)}),a.reverse()};var mn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=za(e).reverse(),o=ur(t).slice(0,-1).reverse(),a=ur(e).slice(0,-1).reverse();return Fa(o,a,r)};const Aa=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var $a=(t,e=new Date)=>{const r=mn(t,e),o=r.findIndex(a=>a>0);return r.map((a,h)=>`${a||0}${Aa[h]}`).slice(o).join("")},Da=(t,e)=>{D(t)&&(nn(t,e)?Ro(t,e):Z(t,e))};const Oa=()=>dr()?{startKey:"touchstart",moveKey:"touchmove",endKey:"touchend"}:{startKey:"mousedown",moveKey:"mousemove",endKey:"mouseup"},Ta=(t,e,r)=>{r.addEventListener(t,e,!1)},Na=(t,e,r)=>{r.removeEventListener(t,e,!1)},Pa=(t,e,r,o,a)=>{a.addEventListener(t,r,!1),document.addEventListener(e,o,!1)},Ia=(t,e,r,o,a)=>{a.removeEventListener(t,r,!1),document.removeEventListener(e,o,!1)};var Ra=(t,e,r,o=document)=>{const{startKey:a,moveKey:h,endKey:g}=Oa(),$=ft=>{t(ft,o),Pa(h,g,q,ct,o)},q=ft=>e(ft,o),ct=ft=>{r(ft,o),Ia(h,g,q,ct,o)};return Ta(a,$,o),()=>Na(a,$,o)},Ma=t=>(e,r="children")=>{if(!s(e))return e;const o=a=>(a.map(h=>{s(h[r])&&(h[r]=o(h[r]))}),t(a));return o(e)},Ba=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),La=(t,e="fuckId",r="children")=>co((o,a,h)=>{o[e]=[...a.map(g=>g["@@index"]),h].join("-")})(t,r),Ha=(t,e,r,o="children")=>I((a,h)=>{const g=a[h];return g[o]=[...g[o]||[],...r],!0})(t,e),Wa=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Va=t=>N()?(m.map(e=>document.addEventListener(e,t,!1)),()=>m.map(e=>document.removeEventListener(e,t,!1))):void 0,Za=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:a="middle",font:h="20px microsoft yahei",fillStyle:g="rgba(202,202,202,0.4)",content:$="\u8BF7\u52FF\u5916\u4F20",rotate:q="-30",zIndex:ct=1e3}={})=>{if(!N())return;t=X(t)?t.current:t??document.body;const ft=t.firstChild;ft?.className==="watermark-canvas"&&t.removeChild(ft);const re=document.createElement("canvas");re.setAttribute("width",e),re.setAttribute("height",r);const oe=re.getContext("2d");oe.textAlign=o,oe.textBaseline=a,oe.font=h,oe.fillStyle=g,oe.rotate(Math.PI/180*q),oe.fillText($,parseFloat(e)/2,parseFloat(r)/2);const Zr=re.toDataURL(),hr=document.createElement("div");hr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${ct};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Zr}')`),t.style.position="relative",t.insertBefore(hr,t.firstChild)},Ya=(t=new Date)=>{const e=new Date(t).getDay();return[U(1-e),U(7-e)]},Ua=t=>{if(!pe(t))return{};let e="pending",r;const o=t.then(a=>{e="success",r=a}).catch(a=>{e="error",r=a});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},rl=l.NzM,ol=l.wBC,nl=l.O39,al=l.cnu,il=l.E4D,sl=l.TRp,ll=l.zI1,cl=l.Ufj,ul=l.GxO,dl=l.cu2,hl=l.BcS,fl=l.lPd,pl=l.dC1,Ka=l.$L2,ml=l.Vji,xl=l.YxP,Xa=l.UhT,qa=l.JaC,gl=l.o4B,yl=l.Hlr,Ga=l.muM,bl=l.OiV,vl=l.KTn,wl=l.lwL,kl=l.d9v,Cl=l.yCD,El=l.qCK,Ja=l.vQq,Qa=l.fHt,jl=l.azq,Sl=l.dSY,ti=l.MTn,_l=l.RYO,zl=l.WAo,Fl=l.GVc,Al=l.Emy,$l=l.v9O,Dl=l.DsO,Ol=l._lj,Tl=l.vO6,ei=l.xDX,Nl=l.hf3,Pl=l.ip7,Il=l.uYe,Rl=l.DgJ,Ml=l.rae,Bl=l.YBu,ri=l._iG,Ll=l.hXT,Hl=l.gQq,Wl=l.D_D,Vl=l.$nD,oi=l.dtG,Zl=l.Y0R,ni=l.qg7,Yl=l.Xxf,Ul=l.tSM,ai=l.Few,Kl=l.xHg,Xl=l.aoj,ql=l.Dlm,ii=l.mrB,si=l.dKu,Gl=l.v1d,li=l.afD,Jl=l.Lz5,Ql=l.xZX,tc=l.G_1,ec=l.osI,ci=l.PTJ,ui=l.Qfx,rc=l.bti,di=l.XBv,hi=l.eyl,oc=l.y35,nc=l.hKD,fi=l.BWC,ac=l.oLi,pi=l.NA2,ic=l.S3Y,sc=l.pvT,lc=l.m2f,mi=l.rWO,cc=l.A$w,uc=l.kJL,dc=l.S9U,hc=l.dYC,fc=l.jUY,pc=l.J_U,mc=l.kKo,xc=l.VZO,gc=l.mf2,yc=l.w1q,bc=l.Kn2,vc=l.ncl,wc=l.LWC,kc=l.dqb,Cc=l.Kjn,Ec=l.TaN,jc=l.CBv,xi=l.rTd,Sc=l.B73,_c=l.SSA,gi=l.CLv,zc=l.F$z,Fc=l.XT_,Ac=l.omS,$c=l.poV,Dc=l.VXY,Oc=l.xsP,Tc=l.HPs,Nc=l.TSy,yi=l.B5o,Pc=l.u1A,Ic=l.WAY,Rc=l.I8J,bi=l.ywV,Mc=l.bEN,Bc=l.$45,Lc=l.TUk,Hc=l.T7B,Wc=l.CEd,Vc=l.IHq,Zc=l.SkG,Yc=l.Smz,vi=l.nL5,Uc=l.ON,Kc=l.eiS,Xc=l.Frc,qc=l.z5J,Gc=l.scT,wi=l.hd2,Jc=l.AnA,Qc=l.kYX,ki=l.yZP,tu=l.IVd,eu=l.SIr,Ci=l.jg2,Ei=l.gVz,ru=l.puc,ou=l.Azz,nu=l.X5u,au=l.dPh,iu=l.SMZ,su=l.kro,lu=l.nPi,cu=l.US,ji=l.A_F,Si=l._vH,uu=l.gmH,du=l.DYV,hu=l.qi2,_i=l.tOc,fu=l.hau,pu=l.FaZ,mu=l.uyF,zi=l.Vcq,xu=l.XKW,Fi=l.azd,gu=l.P2K,Ai=l.XBe,yu=l.JZ7,bu=l.ABi,vu=l.ogC,$i=l.Og,Di=l._O2,wu=l.P0C,ku=l.Uo5,Cu=l.Two,Eu=l.tYQ,ju=l.tVn,Su=l.pHy,Oi=l.k$y,Ti=l.yfi,_u=l.fl8,Ni=l.f9u,zu=l.ZV1,Pi=l.Lgs}}]);
