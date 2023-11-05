(self.webpackChunk=self.webpackChunk||[]).push([[98],{47845:function(ye,qt,_t){_t.d(qt,{T6:function(){return A},VD:function(){return S},WE:function(){return C},Yt:function(){return H},lC:function(){return Mt},py:function(){return B},rW:function(){return l},s:function(){return _},ve:function(){return it},vq:function(){return s}});var V=_t(39057);function l(p,D,F){return{r:(0,V.sh)(p,255)*255,g:(0,V.sh)(D,255)*255,b:(0,V.sh)(F,255)*255}}function Mt(p,D,F){p=(0,V.sh)(p,255),D=(0,V.sh)(D,255),F=(0,V.sh)(F,255);var Z=Math.max(p,D,F),W=Math.min(p,D,F),U=0,ht=0,wt=(Z+W)/2;if(Z===W)ht=0,U=0;else{var Dt=Z-W;switch(ht=wt>.5?Dt/(2-Z-W):Dt/(Z+W),Z){case p:U=(D-F)/Dt+(D<F?6:0);break;case D:U=(F-p)/Dt+2;break;case F:U=(p-D)/Dt+4;break;default:break}U/=6}return{h:U,s:ht,l:wt}}function Et(p,D,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?p+(D-p)*(6*F):F<1/2?D:F<2/3?p+(D-p)*(2/3-F)*6:p}function it(p,D,F){var Z,W,U;if(p=(0,V.sh)(p,360),D=(0,V.sh)(D,100),F=(0,V.sh)(F,100),D===0)W=F,U=F,Z=F;else{var ht=F<.5?F*(1+D):F+D-F*D,wt=2*F-ht;Z=Et(wt,ht,p+1/3),W=Et(wt,ht,p),U=Et(wt,ht,p-1/3)}return{r:Z*255,g:W*255,b:U*255}}function B(p,D,F){p=(0,V.sh)(p,255),D=(0,V.sh)(D,255),F=(0,V.sh)(F,255);var Z=Math.max(p,D,F),W=Math.min(p,D,F),U=0,ht=Z,wt=Z-W,Dt=Z===0?0:wt/Z;if(Z===W)U=0;else{switch(Z){case p:U=(D-F)/wt+(D<F?6:0);break;case D:U=(F-p)/wt+2;break;case F:U=(p-D)/wt+4;break;default:break}U/=6}return{h:U,s:Dt,v:ht}}function C(p,D,F){p=(0,V.sh)(p,360)*6,D=(0,V.sh)(D,100),F=(0,V.sh)(F,100);var Z=Math.floor(p),W=p-Z,U=F*(1-D),ht=F*(1-W*D),wt=F*(1-(1-W)*D),Dt=Z%6,xt=[F,ht,U,U,wt,F][Dt],Ot=[wt,F,F,ht,U,U][Dt],Zt=[U,U,wt,F,F,ht][Dt];return{r:xt*255,g:Ot*255,b:Zt*255}}function s(p,D,F,Z){var W=[(0,V.FZ)(Math.round(p).toString(16)),(0,V.FZ)(Math.round(D).toString(16)),(0,V.FZ)(Math.round(F).toString(16))];return Z&&W[0].startsWith(W[0].charAt(1))&&W[1].startsWith(W[1].charAt(1))&&W[2].startsWith(W[2].charAt(1))?W[0].charAt(0)+W[1].charAt(0)+W[2].charAt(0):W.join("")}function _(p,D,F,Z,W){var U=[(0,V.FZ)(Math.round(p).toString(16)),(0,V.FZ)(Math.round(D).toString(16)),(0,V.FZ)(Math.round(F).toString(16)),(0,V.FZ)(dt(Z))];return W&&U[0].startsWith(U[0].charAt(1))&&U[1].startsWith(U[1].charAt(1))&&U[2].startsWith(U[2].charAt(1))&&U[3].startsWith(U[3].charAt(1))?U[0].charAt(0)+U[1].charAt(0)+U[2].charAt(0)+U[3].charAt(0):U.join("")}function I(p,D,F,Z){var W=[pad2(dt(Z)),pad2(Math.round(p).toString(16)),pad2(Math.round(D).toString(16)),pad2(Math.round(F).toString(16))];return W.join("")}function dt(p){return Math.round(parseFloat(p)*255).toString(16)}function A(p){return S(p)/255}function S(p){return parseInt(p,16)}function H(p){return{r:p>>16,g:(p&65280)>>8,b:p&255}}},97649:function(ye,qt,_t){_t.d(qt,{R:function(){return V}});var V={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},13144:function(ye,qt,_t){_t.d(qt,{uA:function(){return Et}});var V=_t(47845),l=_t(97649),Mt=_t(39057);function Et(S){var H={r:0,g:0,b:0},p=1,D=null,F=null,Z=null,W=!1,U=!1;return typeof S=="string"&&(S=dt(S)),typeof S=="object"&&(A(S.r)&&A(S.g)&&A(S.b)?(H=(0,V.rW)(S.r,S.g,S.b),W=!0,U=String(S.r).substr(-1)==="%"?"prgb":"rgb"):A(S.h)&&A(S.s)&&A(S.v)?(D=(0,Mt.JX)(S.s),F=(0,Mt.JX)(S.v),H=(0,V.WE)(S.h,D,F),W=!0,U="hsv"):A(S.h)&&A(S.s)&&A(S.l)&&(D=(0,Mt.JX)(S.s),Z=(0,Mt.JX)(S.l),H=(0,V.ve)(S.h,D,Z),W=!0,U="hsl"),Object.prototype.hasOwnProperty.call(S,"a")&&(p=S.a)),p=(0,Mt.Yq)(p),{ok:W,format:S.format||U,r:Math.min(255,Math.max(H.r,0)),g:Math.min(255,Math.max(H.g,0)),b:Math.min(255,Math.max(H.b,0)),a:p}}var it="[-\\+]?\\d+%?",B="[-\\+]?\\d*\\.\\d+%?",C="(?:".concat(B,")|(?:").concat(it,")"),s="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),_="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),I={CSS_UNIT:new RegExp(C),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+_),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+_),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+_),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function dt(S){if(S=S.trim().toLowerCase(),S.length===0)return!1;var H=!1;if(l.R[S])S=l.R[S],H=!0;else if(S==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var p=I.rgb.exec(S);return p?{r:p[1],g:p[2],b:p[3]}:(p=I.rgba.exec(S),p?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=I.hsl.exec(S),p?{h:p[1],s:p[2],l:p[3]}:(p=I.hsla.exec(S),p?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=I.hsv.exec(S),p?{h:p[1],s:p[2],v:p[3]}:(p=I.hsva.exec(S),p?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=I.hex8.exec(S),p?{r:(0,V.VD)(p[1]),g:(0,V.VD)(p[2]),b:(0,V.VD)(p[3]),a:(0,V.T6)(p[4]),format:H?"name":"hex8"}:(p=I.hex6.exec(S),p?{r:(0,V.VD)(p[1]),g:(0,V.VD)(p[2]),b:(0,V.VD)(p[3]),format:H?"name":"hex"}:(p=I.hex4.exec(S),p?{r:(0,V.VD)(p[1]+p[1]),g:(0,V.VD)(p[2]+p[2]),b:(0,V.VD)(p[3]+p[3]),a:(0,V.T6)(p[4]+p[4]),format:H?"name":"hex8"}:(p=I.hex3.exec(S),p?{r:(0,V.VD)(p[1]+p[1]),g:(0,V.VD)(p[2]+p[2]),b:(0,V.VD)(p[3]+p[3]),format:H?"name":"hex"}:!1)))))))))}function A(S){return!!I.CSS_UNIT.exec(String(S))}},68645:function(ye,qt,_t){_t.d(qt,{C:function(){return it}});var V=_t(47845),l=_t(97649),Mt=_t(13144),Et=_t(39057),it=function(){function C(s,_){s===void 0&&(s=""),_===void 0&&(_={});var I;if(s instanceof C)return s;typeof s=="number"&&(s=(0,V.Yt)(s)),this.originalInput=s;var dt=(0,Mt.uA)(s);this.originalInput=s,this.r=dt.r,this.g=dt.g,this.b=dt.b,this.a=dt.a,this.roundA=Math.round(100*this.a)/100,this.format=(I=_.format)!==null&&I!==void 0?I:dt.format,this.gradientType=_.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=dt.ok}return C.prototype.isDark=function(){return this.getBrightness()<128},C.prototype.isLight=function(){return!this.isDark()},C.prototype.getBrightness=function(){var s=this.toRgb();return(s.r*299+s.g*587+s.b*114)/1e3},C.prototype.getLuminance=function(){var s=this.toRgb(),_,I,dt,A=s.r/255,S=s.g/255,H=s.b/255;return A<=.03928?_=A/12.92:_=Math.pow((A+.055)/1.055,2.4),S<=.03928?I=S/12.92:I=Math.pow((S+.055)/1.055,2.4),H<=.03928?dt=H/12.92:dt=Math.pow((H+.055)/1.055,2.4),.2126*_+.7152*I+.0722*dt},C.prototype.getAlpha=function(){return this.a},C.prototype.setAlpha=function(s){return this.a=(0,Et.Yq)(s),this.roundA=Math.round(100*this.a)/100,this},C.prototype.isMonochrome=function(){var s=this.toHsl().s;return s===0},C.prototype.toHsv=function(){var s=(0,V.py)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,v:s.v,a:this.a}},C.prototype.toHsvString=function(){var s=(0,V.py)(this.r,this.g,this.b),_=Math.round(s.h*360),I=Math.round(s.s*100),dt=Math.round(s.v*100);return this.a===1?"hsv(".concat(_,", ").concat(I,"%, ").concat(dt,"%)"):"hsva(".concat(_,", ").concat(I,"%, ").concat(dt,"%, ").concat(this.roundA,")")},C.prototype.toHsl=function(){var s=(0,V.lC)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,l:s.l,a:this.a}},C.prototype.toHslString=function(){var s=(0,V.lC)(this.r,this.g,this.b),_=Math.round(s.h*360),I=Math.round(s.s*100),dt=Math.round(s.l*100);return this.a===1?"hsl(".concat(_,", ").concat(I,"%, ").concat(dt,"%)"):"hsla(".concat(_,", ").concat(I,"%, ").concat(dt,"%, ").concat(this.roundA,")")},C.prototype.toHex=function(s){return s===void 0&&(s=!1),(0,V.vq)(this.r,this.g,this.b,s)},C.prototype.toHexString=function(s){return s===void 0&&(s=!1),"#"+this.toHex(s)},C.prototype.toHex8=function(s){return s===void 0&&(s=!1),(0,V.s)(this.r,this.g,this.b,this.a,s)},C.prototype.toHex8String=function(s){return s===void 0&&(s=!1),"#"+this.toHex8(s)},C.prototype.toHexShortString=function(s){return s===void 0&&(s=!1),this.a===1?this.toHexString(s):this.toHex8String(s)},C.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},C.prototype.toRgbString=function(){var s=Math.round(this.r),_=Math.round(this.g),I=Math.round(this.b);return this.a===1?"rgb(".concat(s,", ").concat(_,", ").concat(I,")"):"rgba(".concat(s,", ").concat(_,", ").concat(I,", ").concat(this.roundA,")")},C.prototype.toPercentageRgb=function(){var s=function(_){return"".concat(Math.round((0,Et.sh)(_,255)*100),"%")};return{r:s(this.r),g:s(this.g),b:s(this.b),a:this.a}},C.prototype.toPercentageRgbString=function(){var s=function(_){return Math.round((0,Et.sh)(_,255)*100)};return this.a===1?"rgb(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%)"):"rgba(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%, ").concat(this.roundA,")")},C.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var s="#"+(0,V.vq)(this.r,this.g,this.b,!1),_=0,I=Object.entries(l.R);_<I.length;_++){var dt=I[_],A=dt[0],S=dt[1];if(s===S)return A}return!1},C.prototype.toString=function(s){var _=!!s;s=s??this.format;var I=!1,dt=this.a<1&&this.a>=0,A=!_&&dt&&(s.startsWith("hex")||s==="name");return A?s==="name"&&this.a===0?this.toName():this.toRgbString():(s==="rgb"&&(I=this.toRgbString()),s==="prgb"&&(I=this.toPercentageRgbString()),(s==="hex"||s==="hex6")&&(I=this.toHexString()),s==="hex3"&&(I=this.toHexString(!0)),s==="hex4"&&(I=this.toHex8String(!0)),s==="hex8"&&(I=this.toHex8String()),s==="name"&&(I=this.toName()),s==="hsl"&&(I=this.toHslString()),s==="hsv"&&(I=this.toHsvString()),I||this.toHexString())},C.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},C.prototype.clone=function(){return new C(this.toString())},C.prototype.lighten=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.l+=s/100,_.l=(0,Et.V2)(_.l),new C(_)},C.prototype.brighten=function(s){s===void 0&&(s=10);var _=this.toRgb();return _.r=Math.max(0,Math.min(255,_.r-Math.round(255*-(s/100)))),_.g=Math.max(0,Math.min(255,_.g-Math.round(255*-(s/100)))),_.b=Math.max(0,Math.min(255,_.b-Math.round(255*-(s/100)))),new C(_)},C.prototype.darken=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.l-=s/100,_.l=(0,Et.V2)(_.l),new C(_)},C.prototype.tint=function(s){return s===void 0&&(s=10),this.mix("white",s)},C.prototype.shade=function(s){return s===void 0&&(s=10),this.mix("black",s)},C.prototype.desaturate=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.s-=s/100,_.s=(0,Et.V2)(_.s),new C(_)},C.prototype.saturate=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.s+=s/100,_.s=(0,Et.V2)(_.s),new C(_)},C.prototype.greyscale=function(){return this.desaturate(100)},C.prototype.spin=function(s){var _=this.toHsl(),I=(_.h+s)%360;return _.h=I<0?360+I:I,new C(_)},C.prototype.mix=function(s,_){_===void 0&&(_=50);var I=this.toRgb(),dt=new C(s).toRgb(),A=_/100,S={r:(dt.r-I.r)*A+I.r,g:(dt.g-I.g)*A+I.g,b:(dt.b-I.b)*A+I.b,a:(dt.a-I.a)*A+I.a};return new C(S)},C.prototype.analogous=function(s,_){s===void 0&&(s=6),_===void 0&&(_=30);var I=this.toHsl(),dt=360/_,A=[this];for(I.h=(I.h-(dt*s>>1)+720)%360;--s;)I.h=(I.h+dt)%360,A.push(new C(I));return A},C.prototype.complement=function(){var s=this.toHsl();return s.h=(s.h+180)%360,new C(s)},C.prototype.monochromatic=function(s){s===void 0&&(s=6);for(var _=this.toHsv(),I=_.h,dt=_.s,A=_.v,S=[],H=1/s;s--;)S.push(new C({h:I,s:dt,v:A})),A=(A+H)%1;return S},C.prototype.splitcomplement=function(){var s=this.toHsl(),_=s.h;return[this,new C({h:(_+72)%360,s:s.s,l:s.l}),new C({h:(_+216)%360,s:s.s,l:s.l})]},C.prototype.onBackground=function(s){var _=this.toRgb(),I=new C(s).toRgb(),dt=_.a+I.a*(1-_.a);return new C({r:(_.r*_.a+I.r*I.a*(1-_.a))/dt,g:(_.g*_.a+I.g*I.a*(1-_.a))/dt,b:(_.b*_.a+I.b*I.a*(1-_.a))/dt,a:dt})},C.prototype.triad=function(){return this.polyad(3)},C.prototype.tetrad=function(){return this.polyad(4)},C.prototype.polyad=function(s){for(var _=this.toHsl(),I=_.h,dt=[this],A=360/s,S=1;S<s;S++)dt.push(new C({h:(I+S*A)%360,s:_.s,l:_.l}));return dt},C.prototype.equals=function(s){return this.toRgbString()===new C(s).toRgbString()},C}();function B(C,s){return C===void 0&&(C=""),s===void 0&&(s={}),new it(C,s)}},39057:function(ye,qt,_t){_t.d(qt,{FZ:function(){return C},JX:function(){return B},V2:function(){return l},Yq:function(){return it},sh:function(){return V}});function V(s,_){Mt(s)&&(s="100%");var I=Et(s);return s=_===360?s:Math.min(_,Math.max(0,parseFloat(s))),I&&(s=parseInt(String(s*_),10)/100),Math.abs(s-_)<1e-6?1:(_===360?s=(s<0?s%_+_:s%_)/parseFloat(String(_)):s=s%_/parseFloat(String(_)),s)}function l(s){return Math.min(1,Math.max(0,s))}function Mt(s){return typeof s=="string"&&s.indexOf(".")!==-1&&parseFloat(s)===1}function Et(s){return typeof s=="string"&&s.indexOf("%")!==-1}function it(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function B(s){return s<=1?"".concat(Number(s)*100,"%"):s}function C(s){return s.length===1?"0"+s:String(s)}},82610:function(ye,qt){function _t(V){for(var l=0,Mt,Et=0,it=V.length;it>=4;++Et,it-=4)Mt=V.charCodeAt(Et)&255|(V.charCodeAt(++Et)&255)<<8|(V.charCodeAt(++Et)&255)<<16|(V.charCodeAt(++Et)&255)<<24,Mt=(Mt&65535)*1540483477+((Mt>>>16)*59797<<16),Mt^=Mt>>>24,l=(Mt&65535)*1540483477+((Mt>>>16)*59797<<16)^(l&65535)*1540483477+((l>>>16)*59797<<16);switch(it){case 3:l^=(V.charCodeAt(Et+2)&255)<<16;case 2:l^=(V.charCodeAt(Et+1)&255)<<8;case 1:l^=V.charCodeAt(Et)&255,l=(l&65535)*1540483477+((l>>>16)*59797<<16)}return l^=l>>>13,l=(l&65535)*1540483477+((l>>>16)*59797<<16),((l^l>>>15)>>>0).toString(36)}qt.Z=_t},84380:function(ye,qt){var _t={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};qt.Z=_t},60042:function(ye,qt){var _t,V;(function(){"use strict";var l={}.hasOwnProperty,Mt="[native code]";function Et(){for(var it=[],B=0;B<arguments.length;B++){var C=arguments[B];if(C){var s=typeof C;if(s==="string"||s==="number")it.push(C);else if(Array.isArray(C)){if(C.length){var _=Et.apply(null,C);_&&it.push(_)}}else if(s==="object"){if(C.toString!==Object.prototype.toString&&!C.toString.toString().includes("[native code]")){it.push(C.toString());continue}for(var I in C)l.call(C,I)&&C[I]&&it.push(I)}}}return it.join(" ")}ye.exports?(Et.default=Et,ye.exports=Et):(_t=[],V=function(){return Et}.apply(qt,_t),V!==void 0&&(ye.exports=V))})()},74335:function(ye,qt,_t){var V;_t.d(qt,{$j:function(){return te},AN:function(){return W},BQ:function(){return ht},GK:function(){return N},Hn:function(){return D},JX:function(){return dt},PC:function(){return s},SV:function(){return p},Ud:function(){return S},V7:function(){return Z},X2:function(){return Zt},dy:function(){return A},h_:function(){return Ot},mH:function(){return H},pC:function(){return ue},rj:function(){return F},s_:function(){return xt},u_:function(){return Dt},zd:function(){return U}});var l=_t(27378),Mt=_t(31542),Et={269:(f,G,b)=>{b.d(G,{Z:()=>rt});var K=b(601),R=b.n(K),Y=b(609),P=b.n(Y),M=P()(R());M.push([f.id,`/*@height:2px;
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
`,""]),M.locals={};const rt=M},609:f=>{f.exports=function(G){var b=[];return b.toString=function(){return this.map(function(K){var R="",Y=typeof K[5]<"u";return K[4]&&(R+="@supports (".concat(K[4],") {")),K[2]&&(R+="@media ".concat(K[2]," {")),Y&&(R+="@layer".concat(K[5].length>0?" ".concat(K[5]):""," {")),R+=G(K),Y&&(R+="}"),K[2]&&(R+="}"),K[4]&&(R+="}"),R}).join("")},b.i=function(K,R,Y,P,M){typeof K=="string"&&(K=[[null,K,void 0]]);var rt={};if(Y)for(var Ft=0;Ft<this.length;Ft++){var zt=this[Ft][0];zt!=null&&(rt[zt]=!0)}for(var Lt=0;Lt<K.length;Lt++){var pt=[].concat(K[Lt]);Y&&rt[pt[0]]||(typeof M<"u"&&(typeof pt[5]>"u"||(pt[1]="@layer".concat(pt[5].length>0?" ".concat(pt[5]):""," {").concat(pt[1],"}")),pt[5]=M),R&&(pt[2]&&(pt[1]="@media ".concat(pt[2]," {").concat(pt[1],"}")),pt[2]=R),P&&(pt[4]?(pt[1]="@supports (".concat(pt[4],") {").concat(pt[1],"}"),pt[4]=P):pt[4]="".concat(P)),b.push(pt))}},b}},601:f=>{f.exports=function(G){return G[1]}},837:(f,G,b)=>{var K=b(810),R=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,M=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0};function Ft(zt,Lt,pt){var Tt,Wt={},ne=null,Kt=null;pt!==void 0&&(ne=""+pt),Lt.key!==void 0&&(ne=""+Lt.key),Lt.ref!==void 0&&(Kt=Lt.ref);for(Tt in Lt)P.call(Lt,Tt)&&!rt.hasOwnProperty(Tt)&&(Wt[Tt]=Lt[Tt]);if(zt&&zt.defaultProps)for(Tt in Lt=zt.defaultProps,Lt)Wt[Tt]===void 0&&(Wt[Tt]=Lt[Tt]);return{$$typeof:R,type:zt,key:ne,ref:Kt,props:Wt,_owner:M.current}}G.Fragment=Y,G.jsx=Ft,G.jsxs=Ft},322:(f,G,b)=>{f.exports=b(837)},62:f=>{var G=[];function b(Y){for(var P=-1,M=0;M<G.length;M++)if(G[M].identifier===Y){P=M;break}return P}function K(Y,P){for(var M={},rt=[],Ft=0;Ft<Y.length;Ft++){var zt=Y[Ft],Lt=P.base?zt[0]+P.base:zt[0],pt=M[Lt]||0,Tt="".concat(Lt," ").concat(pt);M[Lt]=pt+1;var Wt=b(Tt),ne={css:zt[1],media:zt[2],sourceMap:zt[3],supports:zt[4],layer:zt[5]};if(Wt!==-1)G[Wt].references++,G[Wt].updater(ne);else{var Kt=R(ne,P);P.byIndex=Ft,G.splice(Ft,0,{identifier:Tt,updater:Kt,references:1})}rt.push(Tt)}return rt}function R(Y,P){var M=P.domAPI(P);M.update(Y);var rt=function(Ft){if(Ft){if(Ft.css===Y.css&&Ft.media===Y.media&&Ft.sourceMap===Y.sourceMap&&Ft.supports===Y.supports&&Ft.layer===Y.layer)return;M.update(Y=Ft)}else M.remove()};return rt}f.exports=function(Y,P){P=P||{},Y=Y||[];var M=K(Y,P);return function(rt){rt=rt||[];for(var Ft=0;Ft<M.length;Ft++){var zt=M[Ft],Lt=b(zt);G[Lt].references--}for(var pt=K(rt,P),Tt=0;Tt<M.length;Tt++){var Wt=M[Tt],ne=b(Wt);G[ne].references===0&&(G[ne].updater(),G.splice(ne,1))}M=pt}}},793:f=>{var G={};function b(R){if(typeof G[R]>"u"){var Y=document.querySelector(R);if(window.HTMLIFrameElement&&Y instanceof window.HTMLIFrameElement)try{Y=Y.contentDocument.head}catch{Y=null}G[R]=Y}return G[R]}function K(R,Y){var P=b(R);if(!P)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");P.appendChild(Y)}f.exports=K},173:f=>{function G(b){var K=document.createElement("style");return b.setAttributes(K,b.attributes),b.insert(K,b.options),K}f.exports=G},892:(f,G,b)=>{function K(R){var Y=b.nc;Y&&R.setAttribute("nonce",Y)}f.exports=K},36:f=>{function G(R,Y,P){var M="";P.supports&&(M+="@supports (".concat(P.supports,") {")),P.media&&(M+="@media ".concat(P.media," {"));var rt=typeof P.layer<"u";rt&&(M+="@layer".concat(P.layer.length>0?" ".concat(P.layer):""," {")),M+=P.css,rt&&(M+="}"),P.media&&(M+="}"),P.supports&&(M+="}");var Ft=P.sourceMap;Ft&&typeof btoa<"u"&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ft))))," */")),Y.styleTagTransform(M,R,Y.options)}function b(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)}function K(R){if(typeof document>"u")return{update:function(){},remove:function(){}};var Y=R.insertStyleElement(R);return{update:function(P){G(Y,R,P)},remove:function(){b(Y)}}}f.exports=K},464:f=>{function G(b,K){if(K.styleSheet)K.styleSheet.cssText=b;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(b))}}f.exports=G},810:f=>{var G=K=>{var R={};return B.d(R,K),R},b=K=>()=>K;f.exports=V||(V=_t.t(l,2))}},it={};function B(f){var G=it[f];if(G!==void 0)return G.exports;var b=it[f]={id:f,exports:{}};return Et[f](b,b.exports,B),b.exports}B.n=f=>{var G=f&&f.__esModule?()=>f.default:()=>f;return B.d(G,{a:G}),G},B.d=(f,G)=>{for(var b in G)B.o(G,b)&&!B.o(f,b)&&Object.defineProperty(f,b,{enumerable:!0,get:G[b]})},B.o=(f,G)=>Object.prototype.hasOwnProperty.call(f,G),B.nc=void 0;var C={};(()=>{B.d(C,{PC:()=>$r,rK:()=>Qe,lr:()=>kr,JX:()=>Cr,dy:()=>L,Ud:()=>x,mH:()=>Ct,SV:()=>$t,Hn:()=>Me,rj:()=>Ir,V7:()=>Xe,AN:()=>le,zd:()=>Nr,BQ:()=>Mr,Ur:()=>Do,u_:()=>mo,s_:()=>Mo,h_:()=>_e,X2:()=>je,$j:()=>eo,GK:()=>Eo,u:()=>nt,mp:()=>_o,C2:()=>Pt,pC:()=>At,ff:()=>wo,d2:()=>jr,Uw:()=>ko});var f=B(322),G=B(62),b=B.n(G),K=B(36),R=B.n(K),Y=B(793),P=B.n(Y),M=B(892),rt=B.n(M),Ft=B(173),zt=B.n(Ft),Lt=B(464),pt=B.n(Lt),Tt=B(269),Wt={};Wt.styleTagTransform=pt(),Wt.setAttributes=rt(),Wt.insert=P().bind(null,"head"),Wt.domAPI=R(),Wt.insertStyleElement=zt();var ne=b()(Tt.Z,Wt);const Kt=Tt.Z&&Tt.Z.locals?Tt.Z.locals:void 0,$r=n=>(0,f.jsx)("span",{className:Kt.anico,children:(0,f.jsx)("span",{className:[Kt.hline,...(n.type||"").split(" ").map(i=>Kt[i]).filter(Boolean)].join(" ")})});var X=B(810);const Je=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),Ve=n=>new Promise((i,d)=>{const m=new FileReader;m.readAsDataURL(n),m.addEventListener("load",()=>i(m.result)),m.addEventListener("error",j=>d(j))}),Dr=async n=>{if(!Je(n))return n;const i=await(await fetch(decodeURIComponent(n))).blob();return await Ve(i)},xr=n=>{const[i,d]=(0,X.useState)(n);return(0,X.useEffect)(()=>{(async m=>{const j=await Dr(m);d(j)})(n)},[n]),i},Qe=({src:n,...i})=>{const d=xr(n);return(0,f.jsx)("img",{...i,src:d})};var gr=n=>{var i={};return B.d(i,n),i},yr=n=>()=>n;const tr=gr({createPortal:()=>Mt.createPortal,flushSync:()=>Mt.flushSync}),er=(n,i)=>{const d=(0,X.useRef)();(0,X.useEffect)(()=>{d.current=n},[n]),(0,X.useEffect)(()=>{if(i){const m=setInterval(()=>d.current(),i);return()=>clearInterval(m)}},[i])},fe=()=>![typeof window,typeof document].includes("undefined"),De=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),rr=n=>De(n).indexOf("element")>-1,ie=(n=null)=>fe()?rr(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},br=(n=()=>{},i=60)=>{let d=null;return function(...m){clearTimeout(d),d=setTimeout(()=>n.apply(this,m),i)}},Te=(n,i)=>Object.prototype.hasOwnProperty.call(n??{},i),de=n=>Te(n,"current"),Ze=(n,i)=>{const d=[],m=n.children??[];for(let j=0,z=m.length;j<z;j++){const O=m[j];O.className.indexOf(i)>-1&&d.push(O)}return d.length===0?null:d.length===1?d[0]:d},Zr=(n,i)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const d=document.createElement("object");return d.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),d.setAttribute("class","resize-sensor"),d.onload=()=>{d.contentDocument.defaultView.addEventListener("resize",i,!1),i()},d.type="text/html",n.appendChild(d),d.data="about:blank",d},vr=(n,i=60)=>{if(!fe())return;n=de(n)?n.current:n??document.body;let d=Ze(n,"resize-sensor"),m=[];const j=br(()=>m.map(ot=>ot(n)),i),z=ot=>{Ze(n,"resize-sensor")||(d=Zr(n,j)),m.indexOf(ot)===-1&&m.push(ot)},O=ot=>{const ut=m.indexOf(ot);ut!==-1&&m.splice(ut,1),m.length===0&&d&&J()},J=()=>{d&&d.parentNode&&(d.contentDocument&&d.contentDocument.defaultView.removeEventListener("resize",j,!1),d.parentNode.removeChild(d),d=void 0,m=[])};return{element:n,bind:z,unbind:O,destroy:J}},Tr=(n={})=>{const i=(0,X.useRef)(0),[d,m]=(0,X.useState)(n),j=(0,X.useCallback)(z=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>m(z))},[]);return(0,X.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[d,j]},wr=(n=null,i=60)=>{const d=de(n)?n.current:n,{bind:m,destroy:j}=vr(d,i),[z,O]=Tr(ie(d));return(0,X.useEffect)(()=>(m(()=>d&&O(ie(d))),()=>j()),[d]),z};var Ye=B(528),pe={};pe.styleTagTransform=pt(),pe.setAttributes=rt(),pe.insert=P().bind(null,"head"),pe.domAPI=R(),pe.insertStyleElement=zt();var Yr=b()(Ye.Z,pe);const be=Ye.Z&&Ye.Z.locals?Ye.Z.locals:void 0,kr=({children:n,active:i=0,delay:d=5e3,className:m,...j})=>{const[z,O]=(0,X.useState)(i+1),[J,ot]=(0,X.useState)(!1),ut=(0,X.useRef)(),vt=(0,X.useRef)(""),{width:yt}=wr(ut);n=Array.isArray(n)?n:[n];const mt=n[0],Xt=[n[n.length-1],...n,mt],Gt=Xt.length;er(()=>{let Bt=z+1;Bt=Bt===Gt?1:Bt,vt.current&&(vt.current=""),O(Bt),Bt===Gt-1&&setTimeout(()=>{vt.current="none",O(1)},500)},J?null:d);const Nt=(Bt,Jt)=>{Jt.stopPropagation(),vt.current="",O(Bt),(0,tr.flushSync)(()=>ot(!0)),ot(!1)},Rt={width:`${Gt*yt}px`,transform:`translateX(${-yt*z}px)`,transition:vt.current};return(0,f.jsxs)("div",{className:`${be["huxy-carousel"]}${m?` ${m}`:""}`,...j,ref:ut,children:[(0,f.jsx)("div",{className:be["huxy-carousel-wrap"],style:Rt,children:Xt.map((Bt,Jt)=>(0,f.jsx)("div",{className:`${be["carousel-item"]} ${z===Jt?be.active:""}`,style:{width:`${yt}px`},children:Bt},`huxy-carousel-${Jt}`))}),(0,f.jsx)("div",{className:be["carousel-switch"],children:n.map((Bt,Jt)=>(0,f.jsx)("span",{className:`${be.dot} ${z===Jt+1?be.active:""}`,onClick:He=>Nt(Jt+1,He)},`huxy-carousel-switch-${Jt}`))})]})},me=(n,i)=>{let d="",m="";if(typeof i=="number"&&(d=`col-${n}-${i}`),typeof i=="object"){const{span:j,offset:z}=i;d=j?`col-${n}-${j}`:"",m=z?`offset-${n}-${z}`:""}return{sp:d,os:m}},Cr=(0,X.forwardRef)(({span:n,offset:i,xl:d,lg:m,md:j,sm:z,xs:O,style:J,width:ot,auto:ut,offsetWidth:vt="0px",className:yt,...mt},Xt)=>{const Gt=yt?` ${yt}`:"",Nt=`col-${n||12}`,Rt=i?`offset-${i}`:"",{sp:Bt,os:Jt}=me("xs",O),{sp:He,os:ke}=me("sm",z),{sp:ur,os:ce}=me("md",j),{sp:$e,os:dr}=me("lg",m),{sp:We,os:Se}=me("xl",d),hr=[Nt,We,$e,ur,He,Bt,Rt,Se,dr,ce,ke,Jt].filter(Boolean).join(" "),io=ut?{width:"auto",flex:1,maxWidth:`calc(100% - ${vt})`}:{width:ot};return(0,f.jsx)("div",{className:`${hr}${Gt}`,...mt,style:{...io,...J},ref:Xt})}),Er=()=>{const n=(0,X.useRef)(!0);return n.current?(n.current=!1,!0):!1},Ur=(n,i=[])=>{const d=Er();(0,X.useEffect)(()=>{if(!d)return n()},i)},Ue=(n,i=450)=>{const[d,m]=(0,X.useState)(n);return Ur(()=>{let j;return n||i===0?m(n):j=setTimeout(()=>m(n),i),()=>j&&clearTimeout(j)},[n]),[d,m]},_e=({children:n,mountNode:i=document.body})=>(0,tr.createPortal)(n,i),Oe={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Ne={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Or=document.body,Nr=({open:n,close:i,delay:d=300,children:m,mountNode:j,hasMask:z=!0,style:O,className:J="h-mask",relative:ot})=>{const[ut]=Ue(n,d);(j??Or).style.overflow=ut?"hidden":"";const vt=ot?"absolute":"fixed";return(0,f.jsx)(_e,{mountNode:j,children:(0,f.jsx)("div",{children:ut?(0,f.jsxs)("div",{className:J,style:{...Oe,position:vt},children:[z?(0,f.jsx)("div",{style:{...Ne,position:vt},onClick:yt=>i?.(yt)}):null,X.Children.map(m,yt=>(0,X.isValidElement)(yt)?(0,X.cloneElement)(yt,{style:{position:"relative",zIndex:100001,...yt.props.style}}):yt)]}):null})})};var u=B(434),v={};v.styleTagTransform=pt(),v.setAttributes=rt(),v.insert=P().bind(null,"head"),v.domAPI=R(),v.insertStyleElement=zt();var k=b()(u.Z,v);const T=u.Z&&u.Z.locals?u.Z.locals:void 0,L=({open:n,close:i,footer:d,header:m,className:j,style:z,children:O,width:J="300px",mountNode:ot,position:ut="right",relative:vt})=>{const yt=["drawer-wrap",ut,n?"open":"",...j?.split(" ")??[]].filter(Boolean).map(mt=>T[mt]).join(" ");return(0,f.jsx)(Nr,{open:n,close:i,delay:250,hasMask:!0,relative:vt,mountNode:ot,className:"huxy-drawer",children:(0,f.jsx)("div",{className:yt,style:{width:J,position:vt?"absolute":"fixed","--footerHeight":d?"44px":"0px","--headerHeight":m?"44px":"0px",...z},children:(0,f.jsxs)("div",{className:T["drawer-container"],children:[m?(0,f.jsxs)("div",{className:T["drawer-header"],children:[ut==="right"?(0,f.jsx)("span",{className:`link ${T["ico-close"]}`,onClick:mt=>i?.(mt)}):null,(0,f.jsx)("div",{children:m}),ut==="left"?(0,f.jsx)("span",{className:`link ${T["ico-close"]}`,onClick:mt=>i?.(mt)}):null]}):null,(0,f.jsx)("div",{className:T["drawer-content"],children:O}),d?(0,f.jsx)("div",{className:T["drawer-footer"],children:d}):null]})})})},st=(n,i,d="click")=>{(0,X.useEffect)(()=>{const m=z=>{const O=de(n)?n.current:n;O?.contains&&!O.contains(z.target)&&i(z)},j=typeof d=="string"?[d]:d;return j.map(z=>{document.addEventListener(z,m,!1)}),()=>{j.map(z=>{document.removeEventListener(z,m,!1)})}},[n,i,d])},kt=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",jt=(n="")=>n.replace(/^\S/,i=>i.toUpperCase()),ct=n=>{if(fe())return n=de(n)?n.current:n??document.body,n.getBoundingClientRect?.()},Ut=n=>{if(!fe())return;const i=document.createElement("div");return i.innerHTML=n,i.children[0]},se=(n,i={},d=!1)=>{if(rr(n)){if(d){let m="";Object.keys(i).map(j=>{m+=`${j}: ${i[j]};`}),n.style=m;return}Object.keys(i).map(m=>n.style.setProperty(m,i[m]))}},ze=(n=350)=>new Promise(i=>setTimeout(i,n)),Pe=(n=100)=>{const i=Date.now();for(;Date.now()-i<=n;);},ve=ze,or=async(n,i=15)=>{if(!fe())return;if(typeof n=="string"&&(n=Ut(n)),n=de(n)?n.current:n,!rr(n))return{};const d=n.cloneNode(!0);se(d,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(d),await ve(i);const m=ct(d);return n.parentNode.removeChild(d),m},Ie=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,he=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,nr=(n,i)=>{i=`huxy-drop-arrow-${i}`;const d=n.getAttribute("class")??"";Ie.test(d)?n.setAttribute("class",d.replace(he,i)):n.setAttribute("class",`${d} ${i}`)},Re=async(n,i,d)=>{const{left:m,right:j,top:z,bottom:O}=ct(n),{width:J,height:ot}=ie(),{width:ut,height:vt}=await or(i);if(j<0||O<0||m>J||z>ot)return{};if(d==="vertical"){const yt={left:m+"px",top:O+10+"px",right:"auto",bottom:"auto"};let mt="lt";m+ut>J&&(yt.left=j-ut+"px",mt="rt"),O+10+vt>ot&&(yt.top=z-10-vt+"px",mt=mt==="lt"?"lb":"rb"),se(i,yt),nr(i,mt)}else{const yt={left:j+10+"px",top:z+"px",right:"auto",bottom:"auto"};let mt="tl";j+10+ut>J&&(yt.left=m-10-ut+"px",mt="tr"),z+vt>ot&&(yt.top=O-vt+"px",mt=mt==="tl"?"bl":"br"),se(i,yt),nr(i,mt)}},lo=(n,i,d="horizontal")=>{const m=br(Re),j=()=>m(n,i,d);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const z=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),se(i,{left:"",top:"",right:"",bottom:""})};return Re(n,i,d),z},Qr=({open:n,delay:i=280,children:d,mountNode:m,style:j,...z})=>{const[O]=Ue(n,i);return(0,f.jsx)(_e,{mountNode:m,children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{style:{...j,display:O?"block":"none"},...z,children:d})})})};var ar=B(503),Ke={};Ke.styleTagTransform=pt(),Ke.setAttributes=rt(),Ke.insert=P().bind(null,"head"),Ke.domAPI=R(),Ke.insertStyleElement=zt();var to=b()(ar.Z,Ke);const c=ar.Z&&ar.Z.locals?ar.Z.locals:void 0,x=({trigger:n="click",type:i,dropList:d,className:m,children:j,targetProps:z,...O})=>{const[J,ot]=(0,X.useState)(!1),ut=(0,X.useRef)(),vt=(0,X.useRef)(),yt=(0,X.useRef)();st(ut,Rt=>J&&ot(!1),[...new Set(["click",n.toLowerCase()])]),(0,X.useEffect)(()=>()=>yt.current?.(),[]);const mt=Rt=>{Rt.preventDefault(),ot(!0),yt.current=lo(ut.current,vt.current,i)},Xt={[`on${jt(n)}`]:mt},Gt=["drop-wrap",J?"open":"",m].filter(Boolean).map(Rt=>c[Rt]).join(" "),Nt=kt(d)?d:d?.(()=>ot(!1),J);return(0,f.jsxs)("span",{ref:ut,className:c["drop-target"],...z,...Xt,children:[j,(0,f.jsx)(Qr,{open:J,className:"huxy-drop",children:(0,f.jsx)("div",{ref:vt,className:Gt,...O,children:Nt})})]})},E=(n,i,d)=>{if(!fe())return;d=de(d)?d.current:d??document.body;const m=document.createElement("span");m.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),i&&se(m,i),m.innerText=(n??"").replace(/[\r\n]/g,""),d.appendChild(m);const j=m.getBoundingClientRect();return d.removeChild(m),j};var w=B(918),y={};y.styleTagTransform=pt(),y.setAttributes=rt(),y.insert=P().bind(null,"head"),y.domAPI=R(),y.insertStyleElement=zt();var et=b()(w.Z,y);const at=w.Z&&w.Z.locals?w.Z.locals:void 0,nt=({title:n,placement:i="topRight",children:d,ellipsis:m,className:j,...z})=>(0,f.jsx)("span",{className:`${at[`huxy-tooltip-${i}`]}${j?` ${j}`:""}`,tooltip:n??d,...z,children:(0,f.jsx)("span",{className:m?at.ellipsis:"",children:d})}),tt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Q=n=>{const{children:i,style:d}=n,m=typeof i=="string",j=m?i:i?.props?.title??i?.props?.children,z=(0,X.useRef)(),[O,J]=(0,X.useState)(!0);return(0,X.useEffect)(()=>{if(z.current){const{width:ot}=E(j,null,z.current.parentNode),{width:ut}=ct(z.current),vt=~~ot>~~ut;vt!==O&&J(vt)}},[j]),(0,f.jsx)("span",{ref:z,style:{display:"flex",width:"100%",...d},children:O?m?(0,f.jsx)(nt,{...n,ellipsis:!0}):(0,f.jsx)("span",{style:tt,children:i}):m?i:i?.props?.children})},Ct=n=>n.children==null?"":(0,f.jsx)(Q,{...n});class $t extends X.default.Component{state={error:null};static getDerivedStateFromError(i){return{error:i}}componentDidCatch(i,d){const{errorReport:m}=this.props;typeof m=="function"&&m({error:i,info:d.componentStack})}render(){const{error:i}=this.state,{fallback:d,children:m}=this.props;return i?d(i):m}}const Pt=n=>i=>{if(typeof i=="function"||typeof i?.render=="function")return(0,f.jsx)(i,{});if(typeof i=="string"){const d=n?.[i];return d?(0,f.jsx)(d,{}):(0,f.jsx)("i",{className:i})}return i??null},St=n=>Pt(n),At=n=>({icon:i,defaultIcon:d})=>i?St(n)(i):i===!1?null:d,It=["","webkit","moz","ms"],bt=n=>It.map(i=>i?`${i}FullscreenElement`:"fullscreenElement").find(i=>n[i]),gt=n=>It.map(i=>i?`${i}RequestFullscreen`:"requestFullscreen").find(i=>n[i]),Ht=n=>It.map(i=>i?`${i}ExitFullscreen`:"exitFullscreen").find(i=>n[i]),Qt=It.map(n=>`${n}fullscreenchange`),ee=n=>{if(!fe())return;n=de(n)?n.current:n??document.body;const i=bt(document),d=gt(n),m=Ht(document);document[i]?document[m]?.():n[d]?.()},xe=n=>fe()?(Qt.map(i=>document.addEventListener(i,n,!1)),()=>Qt.map(i=>document.removeEventListener(i,n,!1))):void 0,Ce=n=>(0,f.jsx)("i",{...n,children:"..."}),Me=({panel:n,fullIcon:i=Ce,exitIcon:d=Ce,...m})=>{const j=de(n)?n.current:n,[z,O]=(0,X.useState)();(0,X.useEffect)(()=>{const ot=xe(()=>{O(ut=>!ut)});return()=>ot()},[]);const J=z?d:i;return(0,f.jsx)(J,{onClick:ot=>ee(j),...m})};var Ee=B(249),Fe={};Fe.styleTagTransform=pt(),Fe.setAttributes=rt(),Fe.insert=P().bind(null,"head"),Fe.domAPI=R(),Fe.insertStyleElement=zt();var ir=b()(Ee.Z,Fe);const Pr=Ee.Z&&Ee.Z.locals?Ee.Z.locals:void 0,Be=({gutter:n=10,className:i,overflow:d="hidden",...m},j)=>{const z=i?` ${i}`:"";let O=10;if(Array.isArray(n)){const J=[...n];n=J[0],O=J[1]??J[0]}return(0,f.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(O/2)}px`,overflow:d},children:(0,f.jsx)("div",{className:`row${z}`,...m,ref:j})})},je=(0,X.forwardRef)(Be),Ir=({rowProps:n,colProps:i,children:d,Row:m=je,Col:j=Cr})=>{const z=[];return X.Children.map(d,O=>{O&&(O.type?.description==="react.fragment"?z.push(...O.props.children):z.push(O))}),(0,f.jsx)(m,{...n,children:z.map((O,J)=>(0,f.jsx)(j,{...i,...O.props.itemprops,children:O},`huuxy_grid_${J}`))})},jr=(n,i)=>(0,f.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...i}),le=n=>{const{error:i={},info:d=""}=n||{},{message:m,stack:j,errMsg:z}=i;let O=z||j||i.toString();O=`${O}
${d}`.replace(/\r|\n|\r\n/g,"<br/>"),O=O.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),O=O.replace(/\s/g,"&nbsp;");const J=m?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,f.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[jr(O,{style:{color:"red"}}),J&&(0,f.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${J}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Xe=({children:n,report:i})=>{const d=(0,X.useRef)();return d.current?.state&&(d.current.state.error=null),(0,f.jsx)($t,{ref:d,fallback:(m,j)=>le({error:m,info:j}),errorReport:i,children:n})},Ae=(n,i)=>Object.keys(i).map(d=>n.style[d]=i[d]),Sr=(n,i)=>Object.keys(i).map(d=>n.style[d]=""),Rr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Kr=({left:n,top:i,width:d,height:m})=>({left:`${n}px`,top:`${i}px`,width:`${d}px`,height:`${m}px`}),qe=n=>(0,f.jsx)("i",{...n,children:"..."}),sr=n=>{const{left:i,top:d}=ct(n),{width:m,height:j}=ie(n);return{left:i,top:d,width:m,height:j}},Mr=({panel:n,target:i,fullIcon:d=qe,exitIcon:m=qe})=>{n=de(n)?n.current:n||document.body;const[j,z]=(0,X.useState)(),O=(0,X.useRef)();(0,X.useEffect)(()=>{O.current={...Rr,...Kr(sr(n))}},[n]);const J=(ut,vt)=>{if(ut){const yt=Kr(sr((typeof i=="function"?i:()=>document.getElementsByClassName(i)[0])()));Ae(vt,O.current),setTimeout(()=>{Ae(vt,yt)},0)}else Sr(vt,O.current);z(ut)},ot=j?m:d;return(0,f.jsx)(ot,{onClick:ut=>J(!j,n)})};var Ge=B(548),ge={};ge.styleTagTransform=pt(),ge.setAttributes=rt(),ge.insert=P().bind(null,"head"),ge.domAPI=R(),ge.insertStyleElement=zt();var Xr=b()(Ge.Z,ge);const we=Ge.Z&&Ge.Z.locals?Ge.Z.locals:void 0,mo=({open:n,close:i,hasMask:d=!0,cancelText:m="\u53D6\u6D88",submit:j,submitText:z="\u786E\u5B9A",title:O="Modal \u5F39\u7A97",className:J,children:ot,delay:ut=250,...vt})=>{const yt=["modal-wrap",n?"open":"",...J?.split(" ")??[]].filter(Boolean).map(mt=>we[mt]).join(" ");return(0,f.jsx)(Nr,{open:n,close:i,delay:ut,hasMask:d,className:"huxy-modal",children:(0,f.jsx)("div",{className:yt,...vt,children:(0,f.jsxs)("div",{className:we["modal-container"],children:[(0,f.jsx)("div",{className:we["modal-header"],children:O}),(0,f.jsx)("div",{className:we["modal-content"],children:ot}),(0,f.jsxs)("div",{className:we["modal-footer"],children:[(0,f.jsx)("div",{className:`${we.btn} ${we.left}`,onClick:mt=>i?.(mt),children:m}),(0,f.jsx)("div",{className:`${we.btn} ${we.right}`,onClick:mt=>j?.(mt),children:z})]})]})})})};var _r=B(990),Br={};Br.styleTagTransform=pt(),Br.setAttributes=rt(),Br.insert=P().bind(null,"head"),Br.domAPI=R(),Br.insertStyleElement=zt();var xo=b()(_r.Z,Br);const Io=_r.Z&&_r.Z.locals?_r.Z.locals:void 0,eo=({global:n,absolute:i})=>(0,f.jsx)("div",{className:`spinner${n?" global":""}${i?" absolute":""}`,children:(0,f.jsx)("figure",{className:"spinning"})});var Lr=B(232),lr={};lr.styleTagTransform=pt(),lr.setAttributes=rt(),lr.insert=P().bind(null,"head"),lr.domAPI=R(),lr.insertStyleElement=zt();var gn=b()(Lr.Z,lr);const zr=Lr.Z&&Lr.Z.locals?Lr.Z.locals:void 0,Ro=n=>n?.filter?.(i=>typeof i=="function"),go=(n,i)=>{const d=(0,X.useRef)(),{loading:m,title:j,plugins:z,children:O,className:J,...ot}=n,ut=Ro(z),vt=ut?.length,yt=J?` ${J}`:"",mt=de(i)?i:d;return(0,f.jsxs)("div",{className:`${zr.panel}${yt}`,...ot,ref:mt,children:[(j||vt)&&(0,f.jsxs)("div",{className:zr["panel-header"],children:[j&&(0,f.jsx)("h4",{className:zr["panel-title"],children:j}),vt&&(0,f.jsx)("div",{className:zr["panel-plugins"],children:ut.map((Xt,Gt)=>(0,f.jsx)("span",{className:`link ${zr.link}`,children:(0,f.jsx)(Xt,{panel:mt})},Gt))})]}),(0,f.jsx)("div",{className:zr["panel-body"],children:O}),m&&(0,f.jsx)(eo,{})]})},Mo=(0,X.forwardRef)(go),ro=n=>De(n)==="array",yo=n=>ro(n)&&!!n.length,Bo=({to:n,preventDefault:i,stopPropagation:d,...m})=>i?(0,f.jsx)("span",{...m}):(0,f.jsx)("a",{href:n,...m}),bo=({item:n,...i})=>(0,f.jsx)("ul",{...i}),vo=(n,...i)=>{const d={};return Object.keys(n).filter(Boolean).map(m=>{d[m]=j=>n[m](j,...i)}),d},co=({data:n=[],events:i={},List:d=bo,Link:m=Bo,leftIcon:j,rightIcon:z,isHorizontal:O,isCollapsed:J,level:ot=0,parentOpen:ut=!0})=>{const vt=J&&!ot,yt=!O&&!J&&!ut;return n.map(mt=>{const{name:Xt,path:Gt,icon:Nt,rightIcon:Rt,active:Bt,open:Jt,children:He,linkProps:ke}=mt,ur=yo(He),ce=mt.id||Gt||Xt,$e=vt?mt.title??Xt:void 0,dr=yt?"hidden":"",We=Nt??j,Se=Rt??z,hr=We?(0,f.jsx)("div",{className:"node-left-icon",children:We===!0?(0,f.jsx)("i",{className:"default-left-icon"}):We}):null,io=Xt?(0,f.jsx)("div",{className:"node-text",children:(0,f.jsx)("span",{children:Xt})}):null;if(ur){const Jr=vo(i,mt,ot),rn=[dr,Jt?"open":""].filter(Boolean).join(" ");return(0,f.jsxs)("li",{className:rn,"has-children":"true",...Jr,children:[(0,f.jsxs)(m,{title:$e,className:`link${Bt?" active":""}`,to:Gt,preventDefault:!0,stopPropagation:!1,...ke,children:[hr,io,Se?(0,f.jsx)("div",{className:"node-right-icon",children:Se===!0?(0,f.jsx)("i",{className:"default-right-icon"}):Se}):null]}),(0,f.jsx)(d,{item:mt,children:co({data:He,events:i,List:d,Link:m,leftIcon:j,rightIcon:z,isHorizontal:O,isCollapsed:J,level:ot+1,parentOpen:!!Jt})})]},ce)}return(0,f.jsx)("li",{className:dr,children:(0,f.jsxs)(m,{title:$e,className:`link${Bt?" active":""}`,to:Gt,...ke,children:[hr,io]})},ce)})},wo=co,ko=(n,...i)=>(0,f.jsx)("div",{"v-html":n,...i});var oo=B(575),Le={};Le.styleTagTransform=pt(),Le.setAttributes=rt(),Le.insert=P().bind(null,"head"),Le.domAPI=R(),Le.insertStyleElement=zt();var yn=b()(oo.Z,Le);const Co=oo.Z&&oo.Z.locals?oo.Z.locals:void 0,Lo=n=>(0,f.jsx)("div",{style:{padding:"6px 15px"},children:n}),uo=({activekey:n,tabs:i=[],switchTab:d,trackColor:m,flex:j,...z},O)=>{const[J,ot]=(0,X.useState)(n??i[0]?.key),[ut,vt]=(0,X.useState)({}),yt=(0,X.useRef)({}),mt=(0,X.useRef)();(0,X.useEffect)(()=>{const Nt=yt.current[J];Nt&&Xt(Nt)},[]);const Xt=Nt=>{const{left:Rt,width:Bt}=ct(Nt),Jt=ct(mt.current).left;vt({left:Rt-Jt,width:Bt})},Gt=(Nt,Rt)=>{Nt.stopPropagation(),ot(Rt),typeof d=="function"&&d(Rt),Xt(Nt.currentTarget)};return(0,f.jsxs)("div",{className:"tabs-header-wrap",...z,ref:O,children:[(0,f.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:mt,children:i.map(Nt=>(0,f.jsx)("li",{ref:Rt=>yt.current[Nt.key]=Rt,className:`th-item${J===Nt.key?" active":""}`,onClick:Rt=>Gt(Rt,Nt.key),children:typeof Nt.renderTabs=="function"?Nt.renderTabs(Nt,J===Nt.key):Lo(Nt.value)},Nt.key))}),(0,f.jsx)("div",{className:"th-track",style:{...ut,color:m}})]})},Eo=(0,X.forwardRef)(uo),Ho=(n,i,d="id",m="children")=>{if(!ro(n))return null;const j=z=>{for(let O=0,J=z.length;O<J;O++){const ot=z[O];if(ot[d]===i)return[ot];if(ro(ot[m])){const ut=j(ot[m]);if(ut)return[ot].concat(ut)}}};return j(n)},jo=n=>++n,Wo=()=>{const[,n]=(0,X.useState)(0);return(0,X.useCallback)(()=>n(jo),[])},qr=n=>{const{children:i,open:d}=n;let m=0;if(d&&i?.length){m=i.length;let j=0;return i.map(z=>j+=qr(z)),m+j}return m},Vo=({item:n,style:i,...d})=>(0,f.jsx)("ul",{style:{...i,"--count":qr(n)},...d});var Gr=B(942),Hr={};Hr.styleTagTransform=pt(),Hr.setAttributes=rt(),Hr.insert=P().bind(null,"head"),Hr.domAPI=R(),Hr.insertStyleElement=zt();var Zo=b()(Gr.Z,Hr);const bn=Gr.Z&&Gr.Z.locals?Gr.Z.locals:void 0,So=n=>(0,f.jsx)("ul",{...n}),Yo=(n,i)=>n?Vo:({item:d,...m})=>(0,f.jsx)(So,{className:i==="right"?"left":"",...m}),_o=n=>{const{data:i=[],collapsed:d=!1,type:m="vertical",Link:j,width:z,bgColor:O,itemHeight:J,collapsedWidth:ot,itemPadding:ut,style:vt,className:yt,...mt}=n,Xt=(0,X.useRef)(),Gt=(0,X.useRef)();(0,X.useEffect)(()=>()=>clearTimeout(Xt.current),[]);const Nt=Wo(),Rt=m==="horizontal",Bt=!Rt&&d,Jt={onClick:(dr,We)=>{if(dr.stopPropagation(),!Rt&&!Bt){const Se=Ho(i,We.path,"path"),hr=Se[Se.length-1];hr.open=!hr.open,Nt()}},onMouseEnter:(dr,We,Se)=>{Bt&&!Se&&(clearTimeout(Xt.current),Gt.current.style.width="var(--maxWidth)")},onMouseLeave:(dr,We,Se)=>{Bt&&!Se&&(Xt.current=setTimeout(()=>Gt.current.style.width="",200))}},He=(Rt?["huxy-horizontal-tree",yt]:["huxy-tree",yt,Bt?"collapsed":""]).filter(Boolean).join(" "),{float:ke,...ur}=mt?.style??{},ce={"--bgColor":O,"--itemHeight":J,"--nodeListWidth":z,...ur};Rt?(ce["--itemPadding"]=ut,ce["--nodeFloat"]=ke):(ce["--width"]=z,ce["--collapsedWidth"]=ot);const $e=Yo(!Rt&&!Bt,ke);return(0,f.jsx)("div",{ref:Gt,className:He,style:ce,...mt,children:(0,f.jsx)("div",{className:"huxy-tree-track",children:(0,f.jsx)("ul",{className:"huxy-tree-root",children:wo({data:i,events:Jt,List:$e,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Rt,isCollapsed:Bt})})})})},Uo=()=>{const[n,i]=Tr(ie());return(0,X.useEffect)(()=>{const d=()=>i(ie());return window.addEventListener("resize",d,!1),()=>window.removeEventListener("resize",d,!1)},[]),n},ho=({menu:n,curName:i,Link:d})=>n.map(m=>{const{path:j,name:z,open:O,children:J}=m,ot=z===i;return J?.length?(0,f.jsxs)("li",{className:O?"open":"",children:[(0,f.jsx)(d,{to:{query:{name:z}},className:`link${ot?" active":""}`,preventDefault:!0,children:(0,f.jsx)("span",{children:z})}),(0,f.jsx)("ul",{children:(0,f.jsx)(ho,{menu:J,curName:z,Link:d})})]},j||z):(0,f.jsx)("li",{children:(0,f.jsx)(d,{to:{query:{name:z}},className:`link${ot?" active":""}`,children:(0,f.jsx)("span",{children:z})})},j||z)}),Ko=ho,zo=(n={})=>{const i={};return Object.keys(n).map(d=>{n[d]!=null&&(i[d]=n[d])}),i},Xo=(n=0,i)=>{fe()&&(i=de(i)?i.current:i??window,i.scrollTo?.({top:n,behavior:"smooth"}))},Fo=(n=()=>{},i=60)=>{let d=null;return function(...m){d||(n.apply(this,m),d=setTimeout(()=>d=null,i))}},qo=(n,i=null,d=!1)=>[...n||[]].sort((m,j)=>{const z=i?m[i]:m,O=i?j[i]:j;return!isNaN(Number(z))&&!isNaN(Number(z))?d?O-z:z-O:typeof z=="string"&&typeof O=="string"?d?O.localeCompare(z):z.localeCompare(O):typeof z=="string"&&typeof O=="number"?d?-1:1:typeof z=="number"||typeof z=="string"?d?1:-1:d?-1:1}),no=()=>fe()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Go=({curName:n,itemList:i})=>{const d=(0,X.useRef)(!1),m=(0,X.useRef)(""),[j,z]=(0,X.useState)(n);return(0,X.useEffect)(()=>{if(i.current=zo(i.current),!n){const ot=Object.keys(i.current).map(ut=>({name:ut,offsetTop:i.current[ut]?.offsetTop??0}));z(ot[0]?.name)}let O=0,J=0;if(m.current!==n){m.current=n;const ot=i.current[n];d.current=!0,ot?(Xo(ot.offsetTop),O=setTimeout(()=>d.current=!1,1050)):J=setTimeout(()=>{window.scrollTo?.({top:i.current[n]?.offsetTop??0,behavior:"instant"}),O=setTimeout(()=>d.current=!1,1050)},550)}return()=>{clearTimeout(O),clearTimeout(J),d.current=!1}},[n]),(0,X.useEffect)(()=>{const O=Fo(()=>{if(!d.current){const J=qo(Object.keys(i.current).map(ot=>({name:ot,offsetTop:i.current[ot]?.offsetTop??0})),"offsetTop",!0).find(ot=>ot.offsetTop<no())?.name;m.current!==J&&(m.current=J,z(J))}});return window.addEventListener("scroll",O,!1),()=>window.removeEventListener("scroll",O,!1)},[]),[j]},Ao=/!\[.*\]\((.*)\)/g,Jo=async(n,i,d)=>{const m={};for(let j=0,z=n.length;j<z;j++){const O=n[j],J=O.slice(2);m[O]=await d({folder:i,name:J})}return m},$o=async(n,{folder:i},d)=>{const m=[...n.matchAll(Ao)].filter(Boolean).map(j=>j[1]);if(m?.length){const j=await Jo(m,i,d);m.map(z=>{n=n.replace(z,j[z])})}return n},Wr=({item:n,marked:i,getContext:d})=>{const[m,j]=(0,X.useState)("");return(0,X.useEffect)(()=>{(async()=>{try{const z=await d({...n,type:".md"}),O=await $o(z,n,d),J=typeof i=="function"?i.parse(O):J;j(J)}catch(z){j(z?.message)}})()},[]),(0,f.jsxs)("div",{className:"huxy-content",children:[jr(m),!m&&(0,f.jsx)(eo,{global:!0})]})},Qo=({router:n,curName:i,context:d,marked:m,getContext:j})=>{const z=(0,X.useRef)({}),[O]=Go({curName:i,itemList:z});return(0,X.useEffect)(()=>{O&&n.push({query:{name:O}})},[O]),(0,f.jsx)("div",{className:"huxy-anchor-page",children:d.map((J,ot)=>(0,f.jsxs)("div",{className:"huxy-anchor-item",ref:ut=>z.current[J.name]=ut,children:[(0,f.jsx)("h2",{children:`${J.name}`}),(0,f.jsx)(Wr,{item:J,marked:m,getContext:j})]},J.name))})},cr=n=>{const i=[];return n.map(d=>{const[m,j]=d.name.split("/"),z=i.find(O=>O.name===m);z?z.children.push({name:j,folder:m}):i.push({name:m,children:[{name:j,folder:m}]})}),i};var ao=B(556),Fr={};Fr.styleTagTransform=pt(),Fr.setAttributes=rt(),Fr.insert=P().bind(null,"head"),Fr.domAPI=R(),Fr.insertStyleElement=zt();var tn=b()(ao.Z,Fr);const vn=ao.Z&&ao.Z.locals?ao.Z.locals:void 0,en=(n,i,d)=>({sidebar:n.find(m=>m.name===i)?.children??[],listEle:n.map(({name:m,children:j})=>(0,f.jsx)("li",{children:(0,f.jsx)(d,{to:{query:{folder:m,name:j[0]?.name}},className:`link${m===i?" active":""}`,children:(0,f.jsx)("span",{children:m})})},m))}),Do=n=>{const{params:i,router:d,Link:m,listFiles:j,getContext:z,marked:O,title:J,routeLink:ot,routeName:ut,className:vt,style:yt}=n,{folder:mt,name:Xt}=i,{width:Gt}=Uo(),[Nt,Rt]=(0,X.useState)([]),[Bt,Jt]=(0,X.useState)(!1);(0,X.useEffect)(()=>{(async()=>{const ce=await j(),$e=cr(ce);Rt($e),mt||d.push({query:{folder:$e[0]?.name,name:$e[0]?.children[0]?.name}})})()},[]);const He=Gt<=1024,{sidebar:ke,listEle:ur}=en(Nt,mt,m);return(0,f.jsxs)("div",{className:`huxy-doc-frame ${vt??""}`,style:yt,children:[(0,f.jsxs)("div",{className:"huxy-doc-header",children:[(0,f.jsx)("div",{className:"huxy-doc-banner",children:J||"\u6587\u6863\u7CFB\u7EDF"}),(0,f.jsx)("ul",{className:"huxy-doc-nav",children:He?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{className:"huxy-doc-collapsed",children:(0,f.jsx)("span",{className:"link",onClick:ce=>{ce.stopPropagation(),Jt(!Bt)},children:(0,f.jsx)($r,{type:Bt?"right":""})})}),(0,f.jsx)(L,{open:Bt,close:()=>Jt(!1),width:"220px",children:(0,f.jsx)("ul",{className:"huxy-doc-menu-drawer",children:ur})})]}):ur}),ot?(0,f.jsx)("div",{className:"huxy-doc-back",children:(0,f.jsx)(m,{to:ot,children:(0,f.jsx)("span",{children:ut??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,f.jsxs)("div",{className:"huxy-doc-container",children:[(0,f.jsx)("div",{className:"huxy-doc-main-page",children:(0,f.jsx)(Qo,{router:d,curName:Xt,context:ke,marked:O,getContext:z})}),(0,f.jsx)("div",{className:"huxy-doc-menu",children:(0,f.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,f.jsx)(Ko,{menu:ke,curName:Xt,Link:m})})})]})]})}})();var s=C.PC,_=C.rK,I=C.lr,dt=C.JX,A=C.dy,S=C.Ud,H=C.mH,p=C.SV,D=C.Hn,F=C.rj,Z=C.V7,W=C.AN,U=C.zd,ht=C.BQ,wt=C.Ur,Dt=C.u_,xt=C.s_,Ot=C.h_,Zt=C.X2,te=C.$j,N=C.GK,Vt=C.u,Yt=C.mp,ae=C.C2,ue=C.pC,pr=C.ff,mr=C.d2,Ar=C.Uw},78611:function(ye,qt,_t){var V;_t.d(qt,{Bv:function(){return _},rU:function(){return C},tv:function(){return dt},yj:function(){return I}});var l=_t(27378),Mt={990:(A,S,H)=>{H.d(S,{Z:()=>U});var p=H(601),D=H.n(p),F=H(609),Z=H.n(F),W=Z()(D());W.push([A.id,`@keyframes before {
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
`,""]),W.locals={link:"Iuy_e",active:"D3oJg"};const U=W},609:A=>{A.exports=function(S){var H=[];return H.toString=function(){return this.map(function(p){var D="",F=typeof p[5]<"u";return p[4]&&(D+="@supports (".concat(p[4],") {")),p[2]&&(D+="@media ".concat(p[2]," {")),F&&(D+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),D+=S(p),F&&(D+="}"),p[2]&&(D+="}"),p[4]&&(D+="}"),D}).join("")},H.i=function(p,D,F,Z,W){typeof p=="string"&&(p=[[null,p,void 0]]);var U={};if(F)for(var ht=0;ht<this.length;ht++){var wt=this[ht][0];wt!=null&&(U[wt]=!0)}for(var Dt=0;Dt<p.length;Dt++){var xt=[].concat(p[Dt]);F&&U[xt[0]]||(typeof W<"u"&&(typeof xt[5]>"u"||(xt[1]="@layer".concat(xt[5].length>0?" ".concat(xt[5]):""," {").concat(xt[1],"}")),xt[5]=W),D&&(xt[2]&&(xt[1]="@media ".concat(xt[2]," {").concat(xt[1],"}")),xt[2]=D),Z&&(xt[4]?(xt[1]="@supports (".concat(xt[4],") {").concat(xt[1],"}"),xt[4]=Z):xt[4]="".concat(Z)),H.push(xt))}},H}},601:A=>{A.exports=function(S){return S[1]}},837:(A,S,H)=>{var p,D=H(810),F=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,U=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0};function wt(Dt,xt,Ot){var Zt,te={},N=null,Vt=null;Ot!==void 0&&(N=""+Ot),xt.key!==void 0&&(N=""+xt.key),xt.ref!==void 0&&(Vt=xt.ref);for(Zt in xt)W.call(xt,Zt)&&!ht.hasOwnProperty(Zt)&&(te[Zt]=xt[Zt]);if(Dt&&Dt.defaultProps)for(Zt in xt=Dt.defaultProps,xt)te[Zt]===void 0&&(te[Zt]=xt[Zt]);return{$$typeof:F,type:Dt,key:N,ref:Vt,props:te,_owner:U.current}}p=Z,S.jsx=wt,S.jsxs=wt},322:(A,S,H)=>{A.exports=H(837)},62:A=>{var S=[];function H(F){for(var Z=-1,W=0;W<S.length;W++)if(S[W].identifier===F){Z=W;break}return Z}function p(F,Z){for(var W={},U=[],ht=0;ht<F.length;ht++){var wt=F[ht],Dt=Z.base?wt[0]+Z.base:wt[0],xt=W[Dt]||0,Ot="".concat(Dt," ").concat(xt);W[Dt]=xt+1;var Zt=H(Ot),te={css:wt[1],media:wt[2],sourceMap:wt[3],supports:wt[4],layer:wt[5]};if(Zt!==-1)S[Zt].references++,S[Zt].updater(te);else{var N=D(te,Z);Z.byIndex=ht,S.splice(ht,0,{identifier:Ot,updater:N,references:1})}U.push(Ot)}return U}function D(F,Z){var W=Z.domAPI(Z);W.update(F);var U=function(ht){if(ht){if(ht.css===F.css&&ht.media===F.media&&ht.sourceMap===F.sourceMap&&ht.supports===F.supports&&ht.layer===F.layer)return;W.update(F=ht)}else W.remove()};return U}A.exports=function(F,Z){Z=Z||{},F=F||[];var W=p(F,Z);return function(U){U=U||[];for(var ht=0;ht<W.length;ht++){var wt=W[ht],Dt=H(wt);S[Dt].references--}for(var xt=p(U,Z),Ot=0;Ot<W.length;Ot++){var Zt=W[Ot],te=H(Zt);S[te].references===0&&(S[te].updater(),S.splice(te,1))}W=xt}}},793:A=>{var S={};function H(D){if(typeof S[D]>"u"){var F=document.querySelector(D);if(window.HTMLIFrameElement&&F instanceof window.HTMLIFrameElement)try{F=F.contentDocument.head}catch{F=null}S[D]=F}return S[D]}function p(D,F){var Z=H(D);if(!Z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Z.appendChild(F)}A.exports=p},173:A=>{function S(H){var p=document.createElement("style");return H.setAttributes(p,H.attributes),H.insert(p,H.options),p}A.exports=S},892:(A,S,H)=>{function p(D){var F=H.nc;F&&D.setAttribute("nonce",F)}A.exports=p},36:A=>{function S(D,F,Z){var W="";Z.supports&&(W+="@supports (".concat(Z.supports,") {")),Z.media&&(W+="@media ".concat(Z.media," {"));var U=typeof Z.layer<"u";U&&(W+="@layer".concat(Z.layer.length>0?" ".concat(Z.layer):""," {")),W+=Z.css,U&&(W+="}"),Z.media&&(W+="}"),Z.supports&&(W+="}");var ht=Z.sourceMap;ht&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ht))))," */")),F.styleTagTransform(W,D,F.options)}function H(D){if(D.parentNode===null)return!1;D.parentNode.removeChild(D)}function p(D){if(typeof document>"u")return{update:function(){},remove:function(){}};var F=D.insertStyleElement(D);return{update:function(Z){S(F,D,Z)},remove:function(){H(F)}}}A.exports=p},464:A=>{function S(H,p){if(p.styleSheet)p.styleSheet.cssText=H;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(H))}}A.exports=S},810:A=>{var S=p=>{var D={};return it.d(D,p),D},H=p=>()=>p;A.exports=V||(V=_t.t(l,2))}},Et={};function it(A){var S=Et[A];if(S!==void 0)return S.exports;var H=Et[A]={id:A,exports:{}};return Mt[A](H,H.exports,it),H.exports}it.n=A=>{var S=A&&A.__esModule?()=>A.default:()=>A;return it.d(S,{a:S}),S},it.d=(A,S)=>{for(var H in S)it.o(S,H)&&!it.o(A,H)&&Object.defineProperty(A,H,{enumerable:!0,get:S[H]})},it.o=(A,S)=>Object.prototype.hasOwnProperty.call(A,S),it.nc=void 0;var B={};(()=>{it.d(B,{rU:()=>Qr,cb:()=>to,Bv:()=>Ke,yj:()=>ar,tv:()=>ve});var A=it(810);const S=c=>Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),H=c=>S(c)==="array",p=c=>S(c)==="object",D=c=>c?.$$typeof&&typeof c.$$typeof=="symbol"&&c.$$typeof.description==="react.element",F=c=>c?.__v_isVNode,Z=(c,x)=>Object.prototype.hasOwnProperty.call(c??{},x),W=c=>{if(!H(c)&&!p(c))return c;const x=H(c)?[]:{};for(const E in c)if(Z(c,E)){const w=c[E];x[E]=D(w)||F(w)||typeof w!="object"?w:w!==c?W(w):"cyclic"}else Object.setPrototypeOf(x,{[E]:c[E]});return x},U=W,ht=c=>S(c)==="function",wt=c=>S(c)==="promise"||p(c)&&ht(c.then),Dt=(c,x=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!wt(c))return{};let w=null,y=null;return{promiseFn:new Promise((et,at)=>{w=(nt="canceled")=>{clearTimeout(y),et({canceled:!0,errMsg:nt})},x&&(x=typeof x!="number"?12e4:x,y=setTimeout(()=>w(E),x)),c.then(nt=>{clearTimeout(y),et({result:nt,errMsg:!1})}).catch(nt=>{clearTimeout(y),at(nt)})}),cancelFn:w}},xt=c=>c?c.charAt(c.length-1)==="/"?c.slice(0,-1):c:"";var Ot=it(322);const Zt=(c,x)=>(0,Ot.jsx)("div",{dangerouslySetInnerHTML:{__html:c},...x}),te=c=>{const{error:x={},info:E=""}=c||{},{message:w,stack:y,errMsg:et}=x;let at=et||y||x.toString();at=`${at}
${E}`.replace(/\r|\n|\r\n/g,"<br/>"),at=at.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),at=at.replace(/\s/g,"&nbsp;");const nt=w?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Ot.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Zt(at,{style:{color:"red"}}),nt&&(0,Ot.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${nt}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},N=c=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(c),Vt=()=>{const c={};return{on:(x,E)=>{c[x]||(c[x]=[]),c[x].indexOf(E)===-1&&c[x].push(E)},emit:(x,E)=>{c[x]&&c[x].map(w=>w(E))},off:(x,E=null)=>{if(c[x]){if(typeof E!="function")return delete c[x];const w=c[x].indexOf(E);w>-1&&(c[x].splice(w,1),c[x].length||delete c[x])}}}},Yt=c=>{const x={};for(let E in c)Z(c,E)||(x[E]=c[E]);return x},ae=(c,x)=>{if(!p(c))return x;if(!p(x))return c;const E={...Yt(c),...Yt(x)},w={...c,...x};return Object.keys(E).map(y=>{Object.setPrototypeOf(w,{[y]:E[y]})}),w},ue=()=>{const{on:c,emit:x,off:E}=Vt(),w={};return{getState:y=>U(w[y]),setState:(y,et=!1)=>{if(typeof y=="function"&&(y=y(U(w))),!p(y))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const at=U(y);Object.keys(at).map(nt=>{const tt=w[nt],Q=at[nt],Ct=p(Q)&&p(tt)?ae(tt,Q):Q;!et&&x(nt,Ct),w[nt]=Ct})},subscribe:(y,et)=>(c(y,et),()=>E(y,et)),unsubscribe:E,clean:y=>{typeof y=="string"?w[y]=void 0:Array.isArray(y)?y.map(et=>w[et]=void 0):Object.keys(w).map(et=>w[et]=void 0)}}},pr=c=>(x,E)=>{const[w,y]=(0,A.useState)(()=>{const tt=c?.getState(x);return tt!==void 0?tt:(E!==void 0&&c?.setState({[x]:E},!0),E)}),et=(0,A.useCallback)(tt=>c?.setState({[x]:typeof tt=="function"?tt(c?.getState(x)):tt}),[]),at=(0,A.useCallback)(tt=>c?.subscribe(x,tt),[]),nt=(0,A.useCallback)((tt=tt)=>c?.clean(tt),[]);return(0,A.useEffect)(()=>{c?.subscribe(x,tt=>y(tt))},[]),[w,et,at,nt]},mr=ue(),Ar=pr(mr),f=Vt(),G=Vt(),b="push-emitter",K="replace-emitter",R="useRoute-emitter",Y={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},P="/404",M={getState:()=>history.state,go:c=>history.go(c),forward:()=>history.forward(),back:()=>history.back()},rt=(c,x,E,w,y=[])=>{const et=tt=>{for(let Q=0,Ct=tt.length;Q<Ct;Q++){const $t=tt[Q],Pt=$t[w].split("?")[0];if(new RegExp("^"+Pt.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return $t;if(H($t[E])){const St=et($t[E]);if(St)return St}}},at=et(c);if(!at)return P;const{redirect:nt}=at;return nt?N(nt)?nt:y.includes(nt)?y:(y.push(nt),rt(c,nt.split("?")[0],E,w,y)):y[y.length-1]},Ft=(c,x,E,w,y)=>{if(!H(c))return null;const et=Ct=>{const $t=Ct.split("/"),Pt=x.split("/"),St={};return $t.map((At,It)=>At.indexOf(":")===0&&(St[At.slice(1)]=Pt[It])),St},at=(Ct,$t)=>{const Pt=[],St=$t.split("/:")[0];for(let At=0,It=Ct.length;At<It;At++){const bt=Ct[At];if(bt[y]===St){bt.active=!0;const{name:gt,title:Ht,icon:Qt,params:ee}=bt;Pt.push({name:gt,title:Ht,icon:Qt,params:ee,[y]:St})}else if($t.indexOf(`${bt[y]}/`)===0){bt.active=!0;const gt=et(bt[y]),Ht=Object.keys(gt).map(Me=>gt[Me]).join("/"),{name:Qt,title:ee,icon:xe}=bt,Ce=Ht?`${St}/${Ht}`:bt[y];Pt.push({name:Qt,title:ee,icon:xe,[y]:Ce,params:{...bt.params,...gt}})}else if(bt[y]===$t){bt.active=!0;const gt=et(bt[y]),{[w]:Ht,...Qt}=bt;Pt.push({...Qt,[y]:x,params:{...Qt.params,...E,...gt}})}}return Pt},nt=(Ct,$t)=>{for(let Pt=0,St=Ct.length;Pt<St;Pt++){const At=Ct[Pt];if($t.indexOf(`${At[y]}/`)===0){At.active=!0;return}}},tt=Ct=>{for(let $t=0,Pt=Ct.length;$t<Pt;$t++){const St=Ct[$t],At=(St[y]||"").split("?")[0];if(At===x){St.hideMenu&&nt(Ct,St.parentPath||At),St.active=!0;const{[w]:It,...bt}=St;return[{...bt,params:{...bt.params,...E}}]}if(new RegExp("^"+At.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return at(Ct,At);if(H(St[w])){const It=tt(St[w]);if(It){St.active=!0,St.open=!0;const{[w]:bt,...gt}=St;return[gt,...It]}}}},Q=tt(c)||[];return{result:c,current:Q}},zt=(c,x,E)=>c.filter(w=>w.hideMenu||w[E].indexOf("/:")>-1?!1:(H(w[x])&&(w[x]=zt(w[x],x,E)),!0)),Lt=(c,x,E,w="children",y="path")=>{const et=rt(c,x,w,y);if(et)return{redirect:et};const{result:at,current:nt}=Ft(c,x,E,w,y),tt=zt(at,w,y);return{current:nt,menu:tt}},pt=(c,x)=>{const E=["#/","/"],w=E[!!x-0];if(!c||E.includes(c))return w;const y=c.charAt(c.length-1)==="/"?c.slice(0,-1):c;return x||y.indexOf("#/")>-1?y:`#${y}`},Tt=(c,x,E,w=!1)=>{const y=pt(x,E);return w?y:E?c&&y==="/"?c:`${c}${y}`:c?`${c}/${y}`:y},Wt=(c,x,E,w,y,et)=>{if(!H(c))return c;const at=(nt,tt="")=>nt.filter(Q=>!Q.denied).map(Q=>{if(!et&&!Q.exact&&!N(Q[w])){(!Q[w]||Q[w]==="javascript:;")&&(Q[w]="");const Ct=Q[w].charAt(0)==="/"&&tt.charAt(tt.length-1)==="/"?Q[w].slice(1):Q[w].charAt(0)!=="/"&&tt.charAt(tt.length-1)!=="/"?`/${Q[w]}`:Q[w];Q[w]=tt?tt+Ct:Tt(y,Ct,x)}return Q.redirect&&!N(Q.redirect)&&(Q.redirect=Tt(y,Q.redirect,x)),H(Q[E])&&(Q[E]=at(Q[E],Q[w]),!Q.redirect&&Q[E].length&&(Q.redirect=Q[E][0][w])),Q});return at(c)},ne=c=>{if(!p(c))return"";const x=[];return Object.keys(c).map((E,w)=>{const y=w>0?"&":"?";x.push(`${y}${E}=${c[E]}`)}),x.join("")},Kt=(c="")=>{const[x,E]=c.split("?");if(E){const w={};return E.split("&").map(y=>{const[et,at]=y.split("=");w[et]=at}),{path:x,params:w}}return{path:x}},$r=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},X=(c,x)=>{for(let E=c.length-1,w;w=c[E--];){const{title:y,name:et}=w;if(typeof y=="string"&&y.length)return document.title=y;if((y==null||y===!0)&&et)return document.title=x?`${et}-${x}`:et;if(x)return document.title=x}},Je=c=>{const{pathname:x,search:E,hash:w}=location;if(c){const nt=pt(x,c),tt=decodeURIComponent(`${nt}${E}`),{params:Q}=Kt(tt);return{path:tt,params:Q}}const y=decodeURIComponent(pt(w,c)),{params:et}=Kt(y),at=xt(x);return{path:at?`${at}/${y}`:y,params:et}},Ve=(c,x,E)=>{typeof c=="function"&&c({...x,stay:new Date-E})},Dr=(c,x,E,w)=>{let y=typeof c=="string"?c:c.path??"";const et=ne(c.query);N(y)||(y=Tt(E,y,w,c.exact)),window?.open(`${y}${et}`,x)},xr=(c,x,E,w)=>{if(c.target||N(c.path)){Dr(c,c.target,x,E);return}let y,et,at;if(typeof c=="string")y=c;else if(p(c))y=c.path,et=c.params,at=c.query;else return;!y||y==="."||y==="./"?y=w:y.indexOf("./")===0?y=`${w.split("?")[0]}${y.replace("./","/")}`:y.indexOf("../")===0&&(y=`${w.split("?")[0].split("/").slice(0,-1).join("/")}${y.replace("../","/")}`),y=Tt(x,y,E,c?.exact);const nt=Kt(y);y=nt.path;const tt={...nt.params,...at},Q=ne(tt);return y=`${y}${Q}`,et={...et,...tt},y===w?!1:{path:y,params:et}},Qe=(c,x)=>{const E=c.split(x);return E.length>1?["","/"].includes(E[1].slice(0,1)):!1},gr=Vt(),yr=c=>{const{on:x,emit:E,off:w}=gr;return{on:y=>x(c,y),emit:y=>E(c,y),off:y=>w(c,y)}},tr=c=>(x,E)=>{const{getState:w,setState:y,subscribe:et,unsubscribe:at,clean:nt}=c;return E!==void 0&&y({[x]:E},!0),{getState:()=>w(x),setState:(tt,Q)=>y({[x]:tt},Q),subscribe:tt=>et(x,tt),unsubscribe:()=>at(x),clean:()=>nt(x)}},er=ue(),fe=tr(er),De=yr("push-emitter"),rr=yr("replace-emitter"),ie=fe("route-store"),br=Vt(),Te=ue(),de=pr(Te),Ze=()=>![typeof window,typeof document].includes("undefined"),Zr=c=>{if(!Ze())return;const x=document.createElement("div");return x.innerHTML=c,x.children[0]};class vr extends A.default.Component{state={error:null};static getDerivedStateFromError(x){return{error:x}}componentDidCatch(x,E){const{errorReport:w}=this.props;typeof w=="function"&&w({error:x,info:E.componentStack})}render(){const{error:x}=this.state,{fallback:E,children:w}=this.props;return x?E(x):w}}const Tr=({children:c,report:x})=>{const E=(0,A.useRef)();return E.current?.state&&(E.current.state.error=null),(0,Ot.jsx)(vr,{ref:E,fallback:(w,y)=>te({error:w,info:y}),errorReport:x,children:c})};var wr=it(62),Ye=it.n(wr),pe=it(36),Yr=it.n(pe),be=it(793),kr=it.n(be),me=it(892),Cr=it.n(me),Er=it(173),Ur=it.n(Er),Ue=it(464),_e=it.n(Ue),Oe=it(990),Ne={};Ne.styleTagTransform=_e(),Ne.setAttributes=Cr(),Ne.insert=kr().bind(null,"head"),Ne.domAPI=Yr(),Ne.insertStyleElement=Ur();var Or=Ye()(Oe.Z,Ne);const Nr=Oe.Z&&Oe.Z.locals?Oe.Z.locals:void 0,u=({global:c,absolute:x})=>(0,Ot.jsx)("div",{className:`spinner${c?" global":""}${x?" absolute":""}`,children:(0,Ot.jsx)("figure",{className:"spinning"})}),v=()=>{const c=(0,A.useRef)([]);return(0,A.useEffect)(()=>()=>{c.current.map(x=>x.cancelFn()),c.current=[]},[]),{cancelablePromise:(0,A.useCallback)((x,E=!0)=>{const w=Dt(x,E);return c.current.indexOf(w)===-1&&c.current.push(w),w.promiseFn},[])}},k=(c={})=>{const{cancelablePromise:x}=v(),[E,w]=(0,A.useState)(c),y=(0,A.useRef)({}),et=(0,A.useRef)({}),at=(0,A.useCallback)((tt=null)=>{Array.isArray(tt)&&tt.length?tt.map(Q=>y.current[Q]=c[Q]):y.current=c},[]),nt=(0,A.useCallback)((tt,Q,Ct=!1)=>{const $t=Object.keys(tt),Pt=JSON.stringify($t.sort());if(!et.current[Pt]){et.current[Pt]=!0,Ct&&at(Array.isArray(Ct)?Ct:$t),$t.map(St=>{y.current[St]||(y.current[St]={}),y.current[St].pending=!0}),w({...y.current});for(let St=0,At=$t.length;St<At;St++){const It=$t[St];x(tt[It]).then(bt=>{let{result:gt,errMsg:Ht}=bt;St===At-1&&(et.current[Pt]=!1),typeof Q=="function"&&(gt=Q(gt)||gt),y.current[It]={...gt,pending:!1},Ht===!1&&w({...y.current})}).catch(bt=>{throw St===At-1&&(et.current[Pt]=!1),y.current[It]={error:bt,pending:!1},w({...y.current}),bt})}}},[]);return[E,nt,at]},T=c=>Object.keys(c).length,L=c=>{const{Comp:x,restResolve:E,loadPromise:w,params:y,children:et}=c,[at,nt]=k(),[tt,Q]=k();return(0,A.useEffect)(()=>{T(E)&&nt(E),T(w)&&Q(w)},[E,w]),(0,A.useEffect)(()=>{const Ct=T(at);Ct&&Ct===T(E)&&y.store.setState(at)},[at]),(0,Ot.jsx)(x,{...y,...at,...tt,children:et})},st=c=>c===!1?null:D(c)?c:ht(c)?(0,Ot.jsx)(c,{}):(0,Ot.jsx)(u,{}),kt=({Loading:c,ErrorBoundary:x,loadedComp:E})=>{const w=(0,Ot.jsx)(A.Suspense,{fallback:st(c),children:E});return x===!1?w:ht(x)?(0,Ot.jsx)(x,{children:w}):(0,Ot.jsx)(Tr,{children:w})},jt=({Comp:c,routerProps:x,children:E})=>{const{params:w,...y}=x,{loading:et,errorBoundary:at,...nt}=w,tt=(0,Ot.jsx)(L,{Comp:c,...y,params:nt,children:E});return kt({Loading:et,ErrorBoundary:at,loadedComp:tt})},ct={},Ut=(c,x,E,w)=>wt(E)?E.then(y=>jt({Comp:c,routerProps:x,children:y.default??y})):jt({Comp:c,routerProps:x,children:E}),se=(c,x,E)=>{const w={},y={};return p(c)?(Object.keys(c).map(et=>{const at=x.getState(et);at==null?y[et]=c[et](E):w[et]=at}),{cachedResolve:w,restResolve:y}):{cachedResolve:w,restResolve:y}},ze=(c,x)=>{if(!p(c))return{};const E={};return Object.keys(c).map(w=>E[w]=c[w](x)),E},Pe=c=>{const{current:x,menu:E,...w}=c,y=x.map(nt=>{const{component:tt,resolve:Q,loadData:Ct,loading:$t,errorBoundary:Pt,icon:St,...At}=nt;return At}),et=[...x].filter(nt=>nt.component),at=(nt=0)=>{if(!et.length)return null;const tt=et.shift(),{component:Q,resolve:Ct,loadData:$t,icon:Pt,key:St,...At}=tt;if(typeof Q=="function"||wt(Q)){const It=At.path;let bt=ct[It];const{cachedResolve:gt,restResolve:Ht}=se(Ct,w.store,At),Qt={loadPromise:ze($t,At),restResolve:Ht,params:{current:y,...w,...At,...gt}},ee=at(nt+1);if(bt)return Ut(bt,Qt,ee,It);try{bt=Q(),bt=D(bt)?Q:bt}catch{bt=Q}return wt(bt)?bt.then(xe=>(bt=xe.default??xe,ct[It]=bt,Ut(bt,Qt,ee,It))):(ct[It]=bt,Ut(bt,Qt,ee,It))}return typeof Q=="string"?Zr(Q):Q};return at()},ve=c=>{const[x,E]=(0,A.useState)(c),[w,y]=(0,A.useState)(),[et,at]=(0,A.useState)(),nt=(0,A.useRef)(),tt=(0,A.useRef)(),Q=(0,A.useRef)(),Ct=(0,A.useRef)(),$t=()=>{typeof nt.current=="function"&&(nt.current({cancel:Y.cancelMsg}),nt.current=null)},Pt=(0,A.useCallback)(gt=>{typeof gt=="function"?E(Ht=>({...Ht,...gt(Ht)})):p(gt)&&E(Ht=>({...Ht,...gt}))},[]),St=(gt,Ht="pushState")=>{const{basepath:Qt,browserRouter:ee}=Ct.current,xe=Q.current,Ce=xr(gt,Qt,ee,xe);if(!Ce)return;const{path:Me,params:Ee}=Ce;bt({inputPath:Me,inputParams:Ee},()=>history[Ht](gt?.state,"",Me))},At=(0,A.useCallback)(gt=>St(gt),[]),It=(0,A.useCallback)(gt=>St(gt,"replaceState"),[]),bt=(0,A.useCallback)(({inputPath:gt="",inputParams:Ht={}},Qt)=>{const ee=+new Date,{browserRouter:xe,childKey:Ce,idKey:Me,title:Ee,routers:Fe,beforeRender:ir,afterRender:Pr,basepath:Be,allowedNotFound:je,...Ir}=Ct.current;if(!gt){const{path:le,params:Xe}=Je(xe);gt=le,Ht={...Ht,...Xe}}const jr=Q.current;new Promise((le,Xe)=>{Fe?.length||Xe("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),gt!==Q.current&&typeof ir=="function"?ir({path:gt,params:Ht,prevPath:jr},le,Xe):le()}).then(le=>{if(le===!1)return;const Xe=le?.path;if(Xe&&Tt(Be,Xe,xe)!==gt){It(le);return}tt.current=tt.current??gt;const{redirect:Ae,current:Sr,menu:Rr}=Lt(U(Fe),gt.split("?")[0],Ht,Ce,Me);if(Ae){if(je&&Ae===P&&(typeof je=="boolean"||typeof je=="string"&&Qe(tt.current,je)||H(je)&&je.find(sr=>Qe(tt.current,sr))))return;if(H(Ae)){console.error(`\u522B\u95F9\uFF0C[${[gt,...Ae].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Ae===P?It({path:Ae}):At({path:Ae,exact:!0})}Qt?.(),gt?.split("?")[0]!==Q.current?.split("?")[0]&&$r(),X(Sr,Ee);const Kr={eventBus:br,store:Te,useStore:de,...Ir,updateRouter:Pt,emitRouter:ie.subscribe,router:{push:At,replace:It},current:Sr,menu:Rr,inputPath:tt.current,prevPath:jr,browserRouter:xe,basepath:Be,title:Ee,history:{...M,goBack:sr=>At({...sr,path:jr})}};ie.setState(Kr);const qe=Pe(Kr);if(Q.current=gt,tt.current=null,$t(),wt(qe)){const{promiseFn:sr,cancelFn:Mr}=Dt(qe,{delay:Y.delay,msg:{timeout:Y.timeoutMsg}});return nt.current=Mr,at(!0),sr.then(Ge=>{nt.current=null;const{result:ge,errMsg:Xr}=Ge,we=Xr===!1?ge:Xr?.timeout?te({error:{errMsg:`${gt} ${Xr.timeout}`}}):null;we&&(at(!1),Ve(Pr,Sr.slice(-1)[0],ee),y(we))}).catch(Ge=>{throw nt.current=null,at(!1),Ve(Pr,Sr.slice(-1)[0],ee),y(te({error:Ge})),Ge})}Ve(Pr,Sr.slice(-1)[0],ee),y(qe)}).catch(le=>{throw y(te({error:le})),le})},[]);return(0,A.useEffect)(()=>{const{childKey:gt="children",idKey:Ht="path",browserRouter:Qt=!1,routers:ee=[],basepath:xe="",exact:Ce=!1,inputPath:Me="",inputParams:Ee={},...Fe}=x,ir=xt(xe),Pr=Wt(U(ee),Qt,gt,Ht,ir,Ce);Ct.current={...Fe,childKey:gt,idKey:Ht,browserRouter:Qt,routers:Pr,basepath:ir};const Be=Qt?"popstate":"hashchange",je=()=>bt({});return bt({inputPath:Me,inputParams:Ee}),De.on(At),rr.on(It),window.addEventListener(Be,je,!1),()=>{$t(),De.off(At),rr.off(It),window.removeEventListener(Be,je,!1)}},[x]),{updateRouter:Pt,output:w,loading:et}},or=c=>{const{to:x,onClick:E,preventDefault:w,stopPropagation:y=!0,exact:et=!0,target:at,...nt}=c,tt=()=>{const Q=typeof x=="string"?{exact:et,path:x}:{exact:et,...x};De.emit(Q)};return Q=>{if(Q.preventDefault(),y&&Q.stopPropagation(),!nt?.disabled){if(!w){if(at){const{browserRouter:Ct,basepath:$t}=ie.getState();Dr(x,at,$t,Ct);return}tt()}typeof E=="function"&&E()}}};var Ie=it(267),he={};he.styleTagTransform=_e(),he.setAttributes=Cr(),he.insert=kr().bind(null,"head"),he.domAPI=Yr(),he.insertStyleElement=Ur();var nr=Ye()(Ie.Z,he);const Re=Ie.Z&&Ie.Z.locals?Ie.Z.locals:void 0,lo=c=>{if(!c)return Re.link;const x=c.trim().split(" ").filter(Boolean),E=x.find(w=>w==="active")?[Re.active]:[];return[Re.link,...E,...x].join(" ")},Qr=c=>{const{to:x,onClick:E,preventDefault:w,stopPropagation:y,exact:et,target:at,className:nt,...tt}=c;return(0,Ot.jsx)("span",{onClick:or(c),className:lo(nt),...tt})},ar=()=>{const[c,x]=(0,A.useState)(ie.getState());return(0,A.useEffect)(()=>ie.subscribe(E=>x(E)),[]),c},Ke=ie.getState,to=ie.subscribe})();var C=B.rU,s=B.cb,_=B.Bv,I=B.yj,dt=B.tv},18124:function(ye,qt,_t){var V;_t.d(qt,{Nr:function(){return A},PQ:function(){return Ot},Rx:function(){return ht},Vd:function(){return dt},Wy:function(){return H},fH:function(){return C},r5:function(){return s},rE:function(){return xt},rf:function(){return Zt},xd:function(){return te}});var l=_t(27378),Mt={837:(N,Vt,Yt)=>{var ae,ue=Yt(810),pr=Symbol.for("react.element"),mr=Symbol.for("react.fragment"),Ar=Object.prototype.hasOwnProperty,f=ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function b(K,R,Y){var P,M={},rt=null,Ft=null;Y!==void 0&&(rt=""+Y),R.key!==void 0&&(rt=""+R.key),R.ref!==void 0&&(Ft=R.ref);for(P in R)Ar.call(R,P)&&!G.hasOwnProperty(P)&&(M[P]=R[P]);if(K&&K.defaultProps)for(P in R=K.defaultProps,R)M[P]===void 0&&(M[P]=R[P]);return{$$typeof:pr,type:K,key:rt,ref:Ft,props:M,_owner:f.current}}ae=mr,Vt.jsx=b,ae=b},322:(N,Vt,Yt)=>{N.exports=Yt(837)},810:N=>{var Vt=ae=>{var ue={};return it.d(ue,ae),ue},Yt=ae=>()=>ae;N.exports=V||(V=_t.t(l,2))}},Et={};function it(N){var Vt=Et[N];if(Vt!==void 0)return Vt.exports;var Yt=Et[N]={exports:{}};return Mt[N](Yt,Yt.exports,it),Yt.exports}it.d=(N,Vt)=>{for(var Yt in Vt)it.o(Vt,Yt)&&!it.o(N,Yt)&&Object.defineProperty(N,Yt,{enumerable:!0,get:Vt[Yt]})},it.o=(N,Vt)=>Object.prototype.hasOwnProperty.call(N,Vt);var B={};(()=>{it.d(B,{fH:()=>Vt,r5:()=>f,Nd:()=>R,KY:()=>Ar,Vd:()=>M,Nr:()=>Ft,D:()=>pt,Wy:()=>Ve,zX:()=>Dr,Cd:()=>zt,Yz:()=>xr,D9:()=>Qe,cb:()=>Je,vO:()=>yr,Rx:()=>Tr,OH:()=>wr,oR:()=>kr,rE:()=>Oe,PQ:()=>Or,rf:()=>Lt,xd:()=>Nr});var N=it(810);const Vt=u=>(v,k)=>{const[T,L]=(0,N.useState)(()=>{const ct=u?.getState(v);return ct!==void 0?ct:(k!==void 0&&u?.setState({[v]:k},!0),k)}),st=(0,N.useCallback)(ct=>u?.setState({[v]:typeof ct=="function"?ct(u?.getState(v)):ct}),[]),kt=(0,N.useCallback)(ct=>u?.subscribe(v,ct),[]),jt=(0,N.useCallback)((ct=ct)=>u?.clean(ct),[]);return(0,N.useEffect)(()=>{u?.subscribe(v,ct=>L(ct))},[]),[T,st,kt,jt]},Yt=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),ae=u=>Yt(u)==="object",ue=u=>Yt(u)==="function",pr=u=>Yt(u)==="promise"||ae(u)&&ue(u.then),mr=(u,v=12e4,k="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!pr(u))return{};let T=null,L=null;return{promiseFn:new Promise((st,kt)=>{T=(jt="canceled")=>{clearTimeout(L),st({canceled:!0,errMsg:jt})},v&&(v=typeof v!="number"?12e4:v,L=setTimeout(()=>T(k),v)),u.then(jt=>{clearTimeout(L),st({result:jt,errMsg:!1})}).catch(jt=>{clearTimeout(L),kt(jt)})}),cancelFn:T}},Ar=()=>{const u=(0,N.useRef)([]);return(0,N.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,N.useCallback)((v,k=!0)=>{const T=mr(v,k);return u.current.indexOf(T)===-1&&u.current.push(T),T.promiseFn},[])}},f=(u={})=>{const{cancelablePromise:v}=Ar(),[k,T]=(0,N.useState)(u),L=(0,N.useRef)({}),st=(0,N.useRef)({}),kt=(0,N.useCallback)((ct=null)=>{Array.isArray(ct)&&ct.length?ct.map(Ut=>L.current[Ut]=u[Ut]):L.current=u},[]),jt=(0,N.useCallback)((ct,Ut,se=!1)=>{const ze=Object.keys(ct),Pe=JSON.stringify(ze.sort());if(!st.current[Pe]){st.current[Pe]=!0,se&&kt(Array.isArray(se)?se:ze),ze.map(ve=>{L.current[ve]||(L.current[ve]={}),L.current[ve].pending=!0}),T({...L.current});for(let ve=0,or=ze.length;ve<or;ve++){const Ie=ze[ve];v(ct[Ie]).then(he=>{let{result:nr,errMsg:Re}=he;ve===or-1&&(st.current[Pe]=!1),typeof Ut=="function"&&(nr=Ut(nr)||nr),L.current[Ie]={...nr,pending:!1},Re===!1&&T({...L.current})}).catch(he=>{throw ve===or-1&&(st.current[Pe]=!1),L.current[Ie]={error:he,pending:!1},T({...L.current}),he})}}},[]);return[k,jt,kt]},G=u=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(u),b=u=>new Promise((v,k)=>{const T=new FileReader;T.readAsDataURL(u),T.addEventListener("load",()=>v(T.result)),T.addEventListener("error",L=>k(L))}),K=async u=>{if(!G(u))return u;const v=await(await fetch(decodeURIComponent(u))).blob();return await b(v)},R=u=>{const[v,k]=(0,N.useState)(u);return(0,N.useEffect)(()=>{(async T=>{const L=await K(T);k(L)})(u)},[u]),v},Y=(u,v)=>Object.prototype.hasOwnProperty.call(u??{},v),P=u=>Y(u,"current"),M=(u,v,k="click")=>{(0,N.useEffect)(()=>{const T=st=>{const kt=P(u)?u.current:u;kt?.contains&&!kt.contains(st.target)&&v(st)},L=typeof k=="string"?[k]:k;return L.map(st=>{document.addEventListener(st,T,!1)}),()=>{L.map(st=>{document.removeEventListener(st,T,!1)})}},[u,v,k])},rt=(u=()=>{},v=60)=>{let k=null;return function(...T){clearTimeout(k),k=setTimeout(()=>u.apply(this,T),v)}},Ft=(u,v=60)=>(0,N.useMemo)(()=>rt(u,v),[v]),zt=()=>{const u=(0,N.useRef)(!0);return u.current?(u.current=!1,!0):!1},Lt=(u,v=[])=>{const k=zt();(0,N.useEffect)(()=>{if(!k)return u()},v)},pt=(u,v=450)=>{const[k,T]=(0,N.useState)(u);return Lt(()=>{let L;return u||v===0?T(u):L=setTimeout(()=>T(u),v),()=>L&&clearTimeout(L)},[u]),[k,T]},Tt=()=>![typeof window,typeof document].includes("undefined"),Wt=u=>Yt(u).indexOf("element")>-1,ne=(u=null)=>Tt()?Wt(u)?{width:u.clientWidth,height:u.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Kt=(u,v)=>{const k=[],T=u.children??[];for(let L=0,st=T.length;L<st;L++){const kt=T[L];kt.className.indexOf(v)>-1&&k.push(kt)}return k.length===0?null:k.length===1?k[0]:k},$r=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",v,!1),v()},k.type="text/html",u.appendChild(k),k.data="about:blank",k},X=(u,v=60)=>{if(!Tt())return;u=P(u)?u.current:u??document.body;let k=Kt(u,"resize-sensor"),T=[];const L=rt(()=>T.map(ct=>ct(u)),v),st=ct=>{Kt(u,"resize-sensor")||(k=$r(u,L)),T.indexOf(ct)===-1&&T.push(ct)},kt=ct=>{const Ut=T.indexOf(ct);Ut!==-1&&T.splice(Ut,1),T.length===0&&k&&jt()},jt=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",L,!1),k.parentNode.removeChild(k),k=void 0,T=[])};return{element:u,bind:st,unbind:kt,destroy:jt}},Je=(u={})=>{const v=(0,N.useRef)(0),[k,T]=(0,N.useState)(u),L=(0,N.useCallback)(st=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>T(st))},[]);return(0,N.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[k,L]},Ve=(u=null,v=60)=>{const k=P(u)?u.current:u,{bind:T,destroy:L}=X(k,v),[st,kt]=Je(ne(k));return(0,N.useEffect)(()=>(T(()=>k&&kt(ne(k))),()=>L()),[k]),st},Dr=u=>{const v=(0,N.useRef)(null);return(0,N.useLayoutEffect)(()=>{v.current=u}),(0,N.useCallback)(v.current,[])},xr=(u,v)=>{const k=(0,N.useRef)();(0,N.useEffect)(()=>{k.current=u},[u]),(0,N.useEffect)(()=>{if(v){const T=setInterval(()=>k.current(),v);return()=>clearInterval(T)}},[v])},Qe=u=>{const v=(0,N.useRef)();return(0,N.useEffect)(()=>{v.current=u},[u]),v.current},gr=(u=null)=>Tt()?Wt(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},yr=(u=null)=>{const[v,k]=Je(gr(u));return(0,N.useEffect)(()=>{const T=()=>k(gr(u)),L=Wt(u)?u:window;return L.addEventListener("scroll",T,{capture:!1,passive:!0}),()=>L.removeEventListener("scroll",T)},[u]),v},tr=u=>Yt(u)==="array",er=u=>tr(u)&&!!u.length,fe=(u,v,k=[],T=!1,L=null)=>er(u)?v?(k=typeof k=="string"?k.split(","):k,u.filter(st=>(k=k.length>0?k:Object.keys(st),k.filter(kt=>{const jt=st[kt];if(jt==null)return!1;if(T)return jt===v;const ct=new RegExp(v,"gi"),Ut=jt.toString().match(ct);return Ut&&L&&(st[kt]=L(jt.toString().replace(ct,`<span style="background-color:yellow">${Ut[0]}</span>`),{display:"inline-block"})),Ut}).length))):u:[],De=(u,v="id")=>{if(!er(u))return u;const k=[],T=[];return u.map(L=>{const st=ae(L)?L[v]:L;T.includes(st)||(T.push(st),k.push(L))}),k},rr=u=>u?.$$typeof&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",ie=u=>u?.__v_isVNode,br=u=>{if(!tr(u)&&!ae(u))return u;const v=tr(u)?[]:{};for(const k in u)if(Y(u,k)){const T=u[k];v[k]=rr(T)||ie(T)||typeof T!="object"?T:T!==u?br(T):"cyclic"}else Object.setPrototypeOf(v,{[k]:u[k]});return v},Te=br,de=u=>(v,k="children")=>{if(!Array.isArray(v))return v;const T=Te(v),L=st=>{const kt=[];return st.map(jt=>{if(er(jt[k])){const ct=L(jt[k])||[];jt[k]=ct,ct.length>0&&kt.push(jt)}}),u(st,kt)};return L(T)},Ze=(u,v,k="name",T=!1,L="id",st="children",kt)=>de((jt,ct)=>De([...fe(jt,v,k,T,kt),...ct],L))(u,st);var Zr=it(322);const vr=(u,v)=>(0,Zr.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Tr=(u=null,v=vr)=>{const[k,T]=(0,N.useState)(u),L=(0,N.useCallback)((...st)=>{const[kt,jt,ct,Ut,se,ze]=st;if(!jt)T(null);else{st=[kt,jt,ct,Ut,se,ze,v];const Pe=Ze(...st);T(Pe)}},[]);return[k,L]},wr=u=>{const[v,k]=(0,N.useState)(u);return(0,N.useEffect)(()=>k(u),[u]),[v,k]},Ye=()=>{const u={};return{on:(v,k)=>{u[v]||(u[v]=[]),u[v].indexOf(k)===-1&&u[v].push(k)},emit:(v,k)=>{u[v]&&u[v].map(T=>T(k))},off:(v,k=null)=>{if(u[v]){if(typeof k!="function")return delete u[v];const T=u[v].indexOf(k);T>-1&&(u[v].splice(T,1),u[v].length||delete u[v])}}}},pe=u=>{const v={};for(let k in u)Y(u,k)||(v[k]=u[k]);return v},Yr=(u,v)=>{if(!ae(u))return v;if(!ae(v))return u;const k={...pe(u),...pe(v)},T={...u,...v};return Object.keys(k).map(L=>{Object.setPrototypeOf(T,{[L]:k[L]})}),T},be=(()=>{const{on:u,emit:v,off:k}=Ye(),T={};return{getState:L=>Te(T[L]),setState:(L,st=!1)=>{if(typeof L=="function"&&(L=L(Te(T))),!ae(L))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const kt=Te(L);Object.keys(kt).map(jt=>{const ct=T[jt],Ut=kt[jt],se=ae(Ut)&&ae(ct)?Yr(ct,Ut):Ut;!st&&v(jt,se),T[jt]=se})},subscribe:(L,st)=>(u(L,st),()=>k(L,st)),unsubscribe:k,clean:L=>{typeof L=="string"?T[L]=void 0:Array.isArray(L)?L.map(st=>T[st]=void 0):Object.keys(T).map(st=>T[st]=void 0)}}})(),kr=Vt(be),me=u=>u<10?"0"+u:u,Cr=(u=new Date)=>{const v=new Date(u),k=v.getFullYear(),T=v.getDay(),L=me(v.getMonth()+1),st=me(v.getDate()),kt=me(v.getHours()),jt=me(v.getMinutes()),ct=me(v.getSeconds());return[k,L,st,kt,jt,ct,T]},Er=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Ur=(u,v,k="-")=>u.replace(new RegExp(k,"g"),v),Ue=(u=new Date,v=["-","-"," ",":",":",""],k=Er)=>{const T=Cr(u);let L="";return v.map((st,kt)=>L+=(kt===6?k[T[kt]]:T[kt]??"")+st),L},_e=()=>Ue(new Date,["-","-"," ",":",":"," ",""]),Oe=()=>{const[u,v]=(0,N.useState)("");return xr(()=>{v(_e())},1e3),[u]},Ne=u=>++u,Or=()=>{const[,u]=(0,N.useState)(0);return(0,N.useCallback)(()=>u(Ne),[])},Nr=()=>{const[u,v]=Je(ne());return(0,N.useEffect)(()=>{const k=()=>v(ne());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),u}})();var C=B.fH,s=B.r5,_=B.Nd,I=B.KY,dt=B.Vd,A=B.Nr,S=B.D,H=B.Wy,p=B.zX,D=B.Cd,F=B.Yz,Z=B.D9,W=B.cb,U=B.vO,ht=B.Rx,wt=B.OH,Dt=B.oR,xt=B.rE,Ot=B.PQ,Zt=B.rf,te=B.xd},71090:function(ye,qt,_t){_t.d(qt,{$L2:function(){return Ka},A_F:function(){return ji},B5o:function(){return yi},BWC:function(){return fi},CLv:function(){return gi},Few:function(){return ai},JaC:function(){return qa},Lgs:function(){return Pi},MTn:function(){return ti},NA2:function(){return pi},Og:function(){return $i},PTJ:function(){return ci},Qfx:function(){return ui},UhT:function(){return Xa},Vcq:function(){return zi},XBe:function(){return Ai},XBv:function(){return di},_O2:function(){return Di},_iG:function(){return ri},_vH:function(){return Si},afD:function(){return li},azd:function(){return Fi},dKu:function(){return si},dtG:function(){return oi},eyl:function(){return hi},f9u:function(){return Ni},fHt:function(){return Qa},gVz:function(){return Ei},hd2:function(){return wi},jg2:function(){return Ci},k$y:function(){return Ti},mrB:function(){return ii},muM:function(){return Ga},nL5:function(){return vi},qg7:function(){return ni},rTd:function(){return xi},rWO:function(){return mi},tOc:function(){return _i},vQq:function(){return Ja},xDX:function(){return ei},yZP:function(){return ki},yfi:function(){return Oi},ywV:function(){return bi}});var V={};(function(){V.d=function(t,e){for(var r in e)V.o(e,r)&&!V.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){V.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var l={};V.d(l,{NzM:function(){return Et},wBC:function(){return A},O39:function(){return H},cnu:function(){return Z},E4D:function(){return U},TRp:function(){return wt},zI1:function(){return xt},Ufj:function(){return Zt},GxO:function(){return Yt},cu2:function(){return ue},BcS:function(){return mr},lPd:function(){return rt},dC1:function(){return zt},$L2:function(){return pt},Vji:function(){return f},YxP:function(){return P},UhT:function(){return er},JaC:function(){return De},o4B:function(){return Te},Hlr:function(){return Er},muM:function(){return L},OiV:function(){return be},KTn:function(){return kt},lwL:function(){return ct},d9v:function(){return k},yCD:function(){return se},qCK:function(){return Pe},vQq:function(){return or},fHt:function(){return he},azq:function(){return Qr},dSY:function(){return et},MTn:function(){return Pt},RYO:function(){return Re},WAo:function(){return At},GVc:function(){return Ue},Emy:function(){return bt},v9O:function(){return Ht},DsO:function(){return ee},_lj:function(){return Ce},vO6:function(){return Ee},xDX:function(){return Ae},hf3:function(){return zr},ip7:function(){return go},uYe:function(){return nt},DgJ:function(){return Oe},rae:function(){return ro},YBu:function(){return bo},_iG:function(){return ko},hXT:function(){return Co},gQq:function(){return jo},D_D:function(){return qr},$nD:function(){return Gr},dtG:function(){return Zo},Y0R:function(){return So},qg7:function(){return _o},Xxf:function(){return ho},tSM:function(){return zo},Few:function(){return Fo},xHg:function(){return Ao},aoj:function(){return $o},Dlm:function(){return Fr},mrB:function(){return Do},dKu:function(){return O},v1d:function(){return xo},afD:function(){return ut},Lz5:function(){return Gt},xZX:function(){return Jt},G_1:function(){return ke},osI:function(){return ce},PTJ:function(){return We},Qfx:function(){return hr},bti:function(){return qe},XBv:function(){return wn},eyl:function(){return kn},y35:function(){return Cn},hKD:function(){return cr},BWC:function(){return on},oLi:function(){return B},NA2:function(){return jn},S3Y:function(){return Rr},pvT:function(){return nn},m2f:function(){return Kt},rWO:function(){return Sn},A$w:function(){return _n},kJL:function(){return s},S9U:function(){return pe},dYC:function(){return le},jUY:function(){return N},J_U:function(){return zn},kKo:function(){return D},VZO:function(){return Fn},mf2:function(){return wr},w1q:function(){return An},Kn2:function(){return b},ncl:function(){return $n},LWC:function(){return Or},dqb:function(){return X},Kjn:function(){return Dn},TaN:function(){return Jr},CBv:function(){return Ir},rTd:function(){return Le},B73:function(){return Tn},SSA:function(){return u},CLv:function(){return On},F$z:function(){return Nn},XT_:function(){return an},omS:function(){return Pn},poV:function(){return In},VXY:function(){return Rn},xsP:function(){return Mn},HPs:function(){return Bn},TSy:function(){return Ln},B5o:function(){return To},u1A:function(){return Hn},WAY:function(){return Oo},I8J:function(){return Ct},ywV:function(){return Yn},bEN:function(){return Un},$45:function(){return Kn},TUk:function(){return Xn},T7B:function(){return R},CEd:function(){return qn},IHq:function(){return Gn},SkG:function(){return un},Smz:function(){return vr},nL5:function(){return Ze},ON:function(){return ta},eiS:function(){return ea},Frc:function(){return ra},z5J:function(){return oa},scT:function(){return na},hd2:function(){return Po},AnA:function(){return aa},kYX:function(){return ia},yZP:function(){return sa},IVd:function(){return No},SIr:function(){return ca},jg2:function(){return ua},gVz:function(){return da},puc:function(){return pa},Azz:function(){return ma},X5u:function(){return Ve},dPh:function(){return xa},SMZ:function(){return Wt},kro:function(){return I},nPi:function(){return ga},US:function(){return ya},A_F:function(){return ge},_vH:function(){return _r},gmH:function(){return mo},DYV:function(){return ba},qi2:function(){return va},tOc:function(){return wa},hau:function(){return Ca},FaZ:function(){return Mr},uyF:function(){return Ea},Vcq:function(){return ja},XKW:function(){return Sa},azd:function(){return ie},P2K:function(){return _a},XBe:function(){return $a},JZ7:function(){return mn},ABi:function(){return ir},ogC:function(){return Da},Og:function(){return Ra},_O2:function(){return no},P0C:function(){return Ma},Uo5:function(){return Ba},Two:function(){return uo},tYQ:function(){return La},tVn:function(){return w},pHy:function(){return Ha},k$y:function(){return Be},yfi:function(){return Wa},fl8:function(){return Va},f9u:function(){return Za},ZV1:function(){return Ya},Lgs:function(){return Ua}});var Et=(t,e="key",r="value")=>{const o={};return(t||[]).map(a=>o[a[e]]=a[r]),o},B=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),s=t=>B(t)==="array",I=t=>(e,r,o="id",a="children")=>{if(!s(e))return null;const h=(g,$="")=>{for(let q=0,lt=g.length;q<lt;q++){const ft=g[q];if(ft[o]===r)return t(g,q,$)||g[q];if(s(ft[a])){const re=h(ft[a],ft[o]);if(re)return re}}};return h(e),e},A=(t,e,r,o="id",a="children")=>I((h,g)=>h.splice(g,0,r))(t,e,o,a),H=(t,e,r,o,a="id",h="children")=>I((g,$)=>{const q=g[$];q.children?q.children.splice(o,0,r):q.children=[r]})(t,e,a,h),D=t=>B(t).indexOf("element")>-1,Z=(t,e="")=>{if(!D(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),a=[...new Set([...r,...o])];t.className=a.join(" ")},U=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},wt=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},xt=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Zt=(t,e,r,o="id",a="children")=>I((h,g)=>{const $=h[g];return $[a]=[...$[a]||[],...r],$})(t,e,o,a),N=()=>![typeof window,typeof document].includes("undefined"),Yt=t=>{if(N())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=a=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},ue=(t,e)=>{if(N())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(a=>a.getAttribute("huxy-css-hash")).filter(Boolean).find(a=>a===e))r();else{const a=document.createElement("style");a.onerror=h=>o(new Error(`Failed to load '${e}' style`)),a.onload=r,a.innerHTML=t,a.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(a=>a.href===t))r();else{const a=document.createElement("link");a.onerror=h=>o(new Error(`Failed to load '${t}'`)),a.onload=r,a.href=t,a.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}})},mr=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},f=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:a})=>r[o]=a),r},b=t=>B(t)==="object";const K=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,b(o)?e+=`${r}: ${K(o)}`:Array.isArray(o)?e+=`${r}: ${P(o)}`:typeof o=="string"?e+=`${r}: '${o}'`:e+=`${r}: ${o}`}),`{${e}}`};var R=K;const Y=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,b(r)?e+=R(r):Array.isArray(r)?e+=Y(r):typeof r=="string"?e+=`'${r}'`:e+=`${r}`}),`[${e}]`};var P=Y,rt=t=>(e,r="id",o="children",a=-1)=>{if(!s(e))return e;const h={},g=e.map($=>$[r]);return[...e].map($=>{const q={...$},{[r]:lt}=q;if(lt!=null){let{parentId:ft}=q;ft==null&&(ft=t?.(q)??a,q.parentId=ft),h[lt]||(h[lt]=[]),q[o]=h[lt],h[ft]||(h[ft]=[]),h[a]||(h[a]=[]),g.includes(ft)?h[ft].push(q):h[a].push(q)}}),h[a]},zt=(t,e="id",r="children",o=-1)=>rt(a=>a[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),pt=(t,e="path",r="children",o=null)=>rt(a=>{const h=a[e],g=h.match(/.*\/[^:/]+\/:[^/]+/);return g?g[0].match(/(.*)\/:+/)?.[1]??o:h.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),Wt=()=>N()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Kt=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),X=t=>Kt(t,"current"),Ve=(t=0,e)=>{N()&&(e=X(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},xr=`.huxy-totop-bar {
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
}`;const Qe=()=>document.getElementsByClassName("huxy-totop-bar")[0],gr=t=>{if(Qe())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Ve(),!1),e},yr=()=>{const t=Qe();t&&document.body.removeChild(t)};var er=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!N())return;ue(xr,"huxy-backtop-css");const r=()=>{Wt()>t?gr(e):yr()};return(()=>(document.addEventListener("scroll",r,!1),()=>{yr(),document.removeEventListener("scroll",r,!1)}))()},De=(t=0,e=2)=>parseInt(String(t),e),ie=(t=0,e=2)=>Number(t).toString(e),Te=(t=0,e=2,r=16)=>ie(De(t,e),r),Ze=t=>{if(!b(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const a=o>0?"&":"?";e.push(`${a}${r}=${t[r]}`)}),e.join("")},vr=t=>{if(!b(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},wr=t=>B(t)==="function",pe=t=>B(t)==="promise"||b(t)&&wr(t.then),be=(t,e=3e5,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!pe(t))return{};let o=null,a=null;return{promiseFn:new Promise((h,g)=>{o=($="canceled")=>{clearTimeout(a),h({canceled:!0,errMsg:$})},e&&(e=typeof e!="number"?12e4:e,a=setTimeout(()=>o(r),e)),t.then($=>{clearTimeout(a),h({result:$,errMsg:!1})}).catch($=>{clearTimeout(a),g($)})}),cancelFn:o}};const kr=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>vr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>Ze(t).slice(1)}],me=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(a=>t[a]);if(o.length===1){const a=o[0],h=r?e:a;return h==="params"?{query:t[a]}:{result:t[a],type:h}}else if(o.length>1){const a=o.filter(g=>g!=="params").slice(-1)[0],h=r?e:a;return h==="params"?{query:t.params||t[a]}:{query:t.params,result:t[a],type:h}}};var Er=(t,e)=>r=>(o,a={})=>{const{headers:h,dataType:g,data:$,formData:q,form:lt,params:ft,...re}=a,oe={data:$,formData:q,form:lt,params:ft};let Vr;const{query:fr,result:xn,type:Ii}=me(oe,g)||{};if(!re.body&&xn){const fo=kr.find(po=>po.type===Ii);Vr=fo.headers,re.body=fo.body(xn)}fr&&(o=`${o}${Ze(fr)}`);const{promiseFn:Ri}=be(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Vr,...h},...re}),e);return Ri.then(({result:fo,errMsg:po})=>t(po?{status:408,statusText:po}:fo))},Ue=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let a=!1;for(let h in o)Kt(o,h)&&r(o[h])&&(o[h]="cyclic",a=!0);return a}return!1};return r(t)&&t};const _e=(t,e)=>{const r=B(t),o=B(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Ue(t)&&Ue(e))return _e(t,e);for(let a in e)if(Kt(t,a)!==Kt(e,a)||!_e(t[a],e[a]))return!1;return!0};var Oe=_e,Or=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",u=t=>t?.__v_isVNode;const v=t=>{if(!s(t)&&!b(t))return t;const e=s(t)?[]:{};for(const r in t)if(Kt(t,r)){const o=t[r];e[r]=Or(o)||u(o)||typeof o!="object"?o:o!==t?v(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var k=v,L=(t=100)=>{const e=[];let r=-1;const o=h=>{const g=e.length,$=k(h);return Oe($,e[g-1]?.data)?{index:r,length:g,data:e[r]?.data}:(e.push({data:$}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},a=(h=0)=>{const g=e.length;return r+=h,r=r<0?0:r>g-1?g-1:r,{index:r,length:g,data:k(e[r]?.data)}};return{record:o,cursor:a,jump:h=>(r=h,{index:r,length:e.length,data:k(e[r]?.data)}),undo:()=>a(-1),redo:()=>a(1),getList:()=>k(e),clean:()=>{e.length=0,r=-1}}},kt=(t,e,r)=>{if(!s(t))return t;const o=t[e],a=t[r];return t.splice(e,1,a),t.splice(r,1,o),t},ct=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},se=(t,e,r=".")=>{const o=t.split(r),a=e.split(r),h=o.length;let g=0;for(let $=0;$<h;$++)if(Number(o[$])<Number(a[$])){g=h-$;break}else if(Number(o[$])>Number(a[$]))break;return g},Pe=(...t)=>(...e)=>{const[...r]=t,o=(...a)=>r.length===0?a[0]:o(r.pop()(...a));return o(...e)},or=t=>{if(!N())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},he=t=>(e,r)=>{const{getState:o,setState:a,subscribe:h,unsubscribe:g,clean:$}=t;return r!==void 0&&a({[e]:r},!0),{getState:()=>o(e),setState:(q,lt)=>a({[e]:q},lt),subscribe:q=>h(e,q),unsubscribe:()=>g(e),clean:()=>$(e)}},Re=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),Qr=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:Re(o))}});const ar=t=>t.startsWith("on"),Ke=t=>t!=="children"&&!ar(t),to=(t,e)=>r=>t[r]!==e[r],c=(t,e)=>r=>!(r in e),x=t=>{const e=Object.keys(t);return{eventProps:e.filter(ar),propertyProps:e.filter(Ke)}};var w=(t,e,r)=>{const{eventProps:o,propertyProps:a}=x(e),{eventProps:h,propertyProps:g}=x(r);o.filter(c(e,r)).map($=>{const q=$.toLowerCase().slice(2);t.removeEventListener(q,e[$])}),a.filter(c(e,r)).map($=>t[$]=""),g.filter(to(e,r)).map($=>t[$]=r[$]),h.filter(to(e,r)).map($=>{const q=$.toLowerCase().slice(2);t.addEventListener(q,r[$])})},et=t=>{if(!N())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return w(e,{},t.props),e},nt=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const tt=t=>{const e={};for(let r in t)Kt(t,r)||(e[r]=t[r]);return e};var Ct=(t,e)=>{if(!b(t))return e;if(!b(e))return t;const r={...tt(t),...tt(e)},o={...t,...e};return Object.keys(r).map(a=>{Object.setPrototypeOf(o,{[a]:r[a]})}),o},Pt=()=>{const{on:t,emit:e,off:r}=nt(),o={};return{getState:a=>k(o[a]),setState:(a,h=!1)=>{if(typeof a=="function"&&(a=a(k(o))),!b(a))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const g=k(a);Object.keys(g).map($=>{const q=o[$],lt=g[$],ft=b(lt)&&b(q)?Ct(q,lt):lt;!h&&e($,ft),o[$]=ft})},subscribe:(a,h)=>(t(a,h),()=>r(a,h)),unsubscribe:r,clean:a=>{typeof a=="string"?o[a]=void 0:Array.isArray(a)?a.map(h=>o[h]=void 0):Object.keys(o).map(h=>o[h]=void 0)}}},At=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...a)=>r(...o,...a);return r},bt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,a=>a.toUpperCase()):r.replace(/^\S/,a=>a.toLowerCase())).join(""),Ht=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let h=a.length;const g=new Uint8Array(h);for(;h--;)g[h]=a.charCodeAt(h);return new File([g],e??+new Date,{type:o})},ee=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Ce=(t,e,r="id",o="children")=>I((a,h)=>a.splice(h,1))(t,e,r,o),Ee=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",ir=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Be=()=>{let t=ir();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},Ir=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),le=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},Ae=async(t,e,r)=>{if(!N())return;r=r||Be();const o=e?`${r}.${e}`:r,a=Ir(t);if(a||le(t)){t=a?decodeURIComponent(t):t;const h=await fetch(t),g=h.headers.get("Content-Disposition"),$=g&&decodeURIComponent(g.split(";")[1].split("=")[1]);h.blob().then(q=>{const lt=window.URL.createObjectURL(q),ft=document.createElement("a");ft.href=lt,ft.download=$||o,ft.style.display="none",document.body.appendChild(ft),ft.click(),ft.parentNode.removeChild(ft),window.URL.revokeObjectURL(lt)})}else{const h=new Blob([t]),g=window.URL.createObjectURL(h),$=document.createElement("a");$.href=g,$.download=o,$.style.display="none",document.body.appendChild($),$.click(),$.parentNode.removeChild($),window.URL.revokeObjectURL(g)}},Rr=(t=null)=>N()?D(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},qe=t=>{if(N())return t=X(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Mr=t=>{if(!N())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},ge=(t,e={},r=!1)=>{if(D(t)){if(r){let o="";Object.keys(e).map(a=>{o+=`${a}: ${e[a]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Xr=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,we=(t=350,e="ms")=>new Promise(r=>setTimeout(r,Xr(t,e))),mo=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var _r=we,xo=async(t,e=15)=>{if(!N())return;if(typeof t=="string"&&(t=Mr(t)),t=X(t)?t.current:t,!D(t))return{};const r=t.cloneNode(!0);ge(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await _r(e);const o=qe(r);return t.parentNode.removeChild(r),o};const Io=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,eo=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Lr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Io.test(r)?t.setAttribute("class",r.replace(eo,e)):t.setAttribute("class",`${r} ${e}`)},lr=async(t,e,r)=>{const{left:o,right:a,top:h,bottom:g}=qe(t),{width:$,height:q}=Rr(),{width:lt,height:ft}=await xo(e);if(a<0||g<0||o>$||h>q)return{};if(r==="vertical"){const re={left:o+"px",top:g+10+"px",right:"auto",bottom:"auto"};let oe="lt";o+lt>$&&(re.left=a-lt+"px",oe="rt"),g+10+ft>q&&(re.top=h-10-ft+"px",oe=oe==="lt"?"lb":"rb"),ge(e,re),Lr(e,oe)}else{const re={left:a+10+"px",top:h+"px",right:"auto",bottom:"auto"};let oe="tl";a+10+lt>$&&(re.left=o-10-lt+"px",oe="tr"),h+ft>q&&(re.top=g-ft+"px",oe=oe==="tl"?"bl":"br"),ge(e,re),Lr(e,oe)}};var zr=(t,e,r="horizontal")=>{const o=ee(lr),a=()=>o(t,e,r);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const h=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),ge(e,{left:"",top:"",right:"",bottom:""})};return lr(t,e,r),h},go=(t,e,r,o="id",a="children")=>I((h,g)=>h[g]={...h[g],...r})(t,e,o,a),ro=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const yo=nt();var bo=t=>{const{on:e,emit:r,off:o}=yo;return{on:a=>e(t,a),emit:a=>r(t,a),off:a=>o(t,a)}};const vo=120*1e3,co=t=>t.json().then(e=>e);var ko=(t=co,e=vo)=>(r="get")=>Er(t)((r||"get").toUpperCase()),Le=t=>s(t)&&!!t.length,Co=(t,e,r=[],o=!1,a=null)=>Le(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(h=>(r=r.length>0?r:Object.keys(h),r.filter(g=>{const $=h[g];if($==null)return!1;if(o)return $===e;const q=new RegExp(e,"gi"),lt=$.toString().match(q);return lt&&a&&(h[g]=a($.toString().replace(q,`<span style="background-color:yellow">${lt[0]}</span>`),{display:"inline-block"})),lt}).length))):t:[],uo=(t,e="id")=>{if(!Le(t))return t;const r=[],o=[];return t.map(a=>{const h=b(a)?a[e]:a;o.includes(h)||(o.push(h),r.push(a))}),r};const Eo=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=k(e),a=h=>{const g=[];return h.map($=>{if(Le($[r])){const q=a($[r])||[];$[r]=q,q.length>0&&g.push($)}}),t(h,g)};return a(o)};var jo=(t,e,r="name",o=!1,a="id",h="children",g)=>Eo(($,q)=>uo([...Co($,e,r,o,g),...q],a))(t,h),qr=(t,e)=>{const r=[],o=t.children??[];for(let a=0,h=o.length;a<h;a++){const g=o[a];g.className.indexOf(e)>-1&&r.push(g)}return r.length===0?null:r.length===1?r[0]:r},Gr=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],Zo=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),So=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},_o=(t="")=>(t??"").replaceAll("//","/"),ho=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",zo=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},Fo=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),a=t%3600,h=~~(a/60);return o<24?`${o}${e[2]}${h}${e[1]}${a%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},no=t=>(e,r="children")=>{if(!s(e))return e;const o=(a,h=[])=>a.map((g,$)=>{const q=s(g[r]);if(g=t(g,h,$,q)||g,q){const{[r]:lt,...ft}=g;g[r]=o(lt,[...h,{...ft,"@@index":$}])}return g});return o(e)},Ao=(t,e="children")=>{const r=[];return no(o=>{const{[e]:a,...h}=o;r.push(h)})(t,e),r},$o=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const Wr=t=>t<10?"0"+t:t;var cr=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),a=Wr(e.getMonth()+1),h=Wr(e.getDate()),g=Wr(e.getHours()),$=Wr(e.getMinutes()),q=Wr(e.getSeconds());return[r,a,h,g,$,q,o]},Fr=(t,e=new Date)=>{t=cr(t),e=cr(e);const r=e.y-t.y,o=e.m-t.m,a=e.d-t.d,h=e.h-t.h,g=e.M-t.M,$=new Date(e.y,e.m,0).getDate(),q=(lt,ft,re,oe,Vr)=>{const fr="\u524D";return ft<0&&(lt-=1,ft+=re),lt===0?ft+Vr+fr:ft===0?lt+oe+fr:lt+oe+ft+Vr+fr};return r>0?q(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?q(o,a,$,"\u4E2A\u6708","\u5929"):a>0?q(a,h,24,"\u5929","\u5C0F\u65F6"):h>0?q(h,g,60,"\u5C0F\u65F6","\u5206\u949F"):g>0?g+"\u5206\u949F\u524D":"\u521A\u521A"};const tn=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],vn=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var Do=(t=new Date,e=["-","-"," ",":",":",""],r=tn)=>{const o=cr(t);let a="";return e.map((h,g)=>a+=(g===6?r[o[g]]:o[g]??"")+h),a};const n=["","webkit","moz","ms"],i=t=>n.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),d=t=>n.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),m=t=>n.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),j=n.map(t=>`${t}fullscreenchange`);var O=t=>{if(!N())return;t=X(t)?t.current:t??document.body;const e=i(document),r=d(t),o=m(document);document[e]?document[o]?.():t[r]?.()};const J=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var ut=()=>{if(!N())return;const t=window.navigator.userAgent.toLowerCase(),e=J.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const vt=60*1e3,yt=60*vt,mt=24*yt;var Gt=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/mt);r-=mt*o;const a=~~(r/yt);r-=yt*a;const h=~~(r/vt);r-=vt*h;const g=~~(r/1e3);return`${o}\u5929${a}\u5C0F\u65F6${h}\u5206${g}\u79D2`};const Nt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Rt=t=>{if(!Array.isArray(t))return Nt;const e=[...Nt];return t.map(r=>{const o=e.findIndex(a=>a.name===r.name||a["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Jt=t=>{const e=Rt(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return Mr(e.join(""))},ke=(t=new Date)=>{const e=cr(t);return new Date(e[0],e[1],0).getDate()},ce=(t=null)=>N()?D(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const $e=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var We=()=>{if(!N())return;const t=window.navigator.userAgent.toLowerCase(),e=$e.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},hr=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(a=>{const[h,g]=a.split("=");o[h]=g}),{path:e,params:o}}return{path:e}},Jr=()=>N()&&(window.ontouchstart||navigator.maxTouchPoints),on=t=>{const{left:e,top:r}=ce();return{touchX:Jr()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:Jr()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},wn=(t,e)=>{const{touchX:r,touchY:o}=on(t),{x:a,y:h}=e?.getBoundingClientRect?.()??{};return{x:r-(a??0),y:o-(h??0)}},kn=(t,e,r="id",o="children")=>{if(!s(t))return null;const a=h=>{for(let g=0,$=h.length;g<$;g++){const q=h[g];if(q[r]===e)return[q];if(s(q[o])){const lt=a(q[o]);if(lt)return[q].concat(lt)}}};return a(t)},Cn=(t,e,r)=>{if(!N())return;r=X(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ge(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const a=o.getBoundingClientRect();return r.removeChild(o),a};const En=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var jn=(t={},e)=>{e=En(e);const r=(o,a)=>{if(!a?.[0])return o;if(typeof o[a[0]]=="object")return r(o[a[0]],a.slice(1));if(!(a.length>1))return o[a[0]]};return r(t,e)},nn=(t,e="")=>D(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),Sn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,a=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${a})`;const h=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${a},${h})`},_n=t=>{if(!N())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:a}=t;return e.width=o,e.height=a,r.drawImage(t,0,0,o,a),e},zn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),Fn=t=>B(t)==="error",An=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),$n=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Dn=t=>B(t)==="regexp",Tn=t=>b(t)&&!!Object.keys(t).length,On=()=>{if(N())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},Nn=t=>typeof t=="boolean"||t==null?`${t}`:Array.isArray(t)?P(t):b(t)?R(t):t,an=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",a=>r(a))}),Pn=async t=>{if(!Ir(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await an(e)},In=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",a=>r(a)))}),Rn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await _r(r)},Mn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],Bn=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const a=JSON.stringify(o),h=r.find(g=>g.key===a);if(!h){const g=t(...o);return r.push({key:a,result:g}),r.length>e&&r.shift(),g}return h.result}};const sn=(t,e,r="id")=>{if(!s(t))return e;if(!s(e))return t;const o={};return[...t,...e].map(a=>{const h=b(a)?a[r]??JSON.stringify(a):a;if(o[h]===void 0)o[h]=a;else{const g=o[h];b(g)&&b(a)?o[h]=Oo(g,a,r):s(g)&&s(a)?o[h]=sn(g,a,r):o[h]=a}}),Object.keys(o).map(a=>o[a])};var To=sn;const ln=(t,e,r="id")=>{if(!b(t))return e;if(!b(e))return t;for(let o in e)Kt(e,o)?b(t[o])&&b(e[o])?t[o]=ln(t[o],e[o],r):s(t[o])&&s(e[o])?t[o]=To(t[o],e[o],r):t[o]=e[o]:Object.setPrototypeOf(t,{[o]:e[o]});return t};var Oo=ln,Ln=(t,...e)=>{const r=s(t)?To:Oo;return e.map(o=>t=r(t,o)),t},Hn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},No=(t,e="")=>{if(!D(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(a=>!r.includes(a));t.className=o.join(" ")},Wn=`@keyframes huxy-message-animate-in {
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
}`;const cn=()=>document.getElementsByClassName("huxy-message")[0],Vn=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Zn=(t,e,r)=>{const o=t?.dir??"auto",a=document.createElement("div");a.setAttribute("class",`message-content open ${e} ${o}`),a.setAttribute("data-id",r);const h=document.createElement("span");h.setAttribute("class","message"),h.innerText=t?.message??t;const g=document.createElement("i");return a.appendChild(g),a.appendChild(h),a},so=(t,e=3250,r,o)=>{if(!N())return;ue(Wn,"huxy-message-css");let a=cn();a||(a=Vn());const h=Be(),g=Zn(t,o,h);return a.appendChild(g),e&&(setTimeout(()=>{a.removeChild(g),r?.()},e),setTimeout(()=>{No(g,"open")},e-250)),h};var Yn={success:(t,e,r)=>so(t,e,r,"success"),warn:(t,e,r)=>so(t,e,r,"warn"),warning:(t,e,r)=>so(t,e,r,"warn"),error:(t,e,r)=>so(t,e,r,"error"),info:(t,e,r)=>so(t,e,r,"info"),destroy:t=>{const e=cn();if(e)if(t){const r=e.querySelector(`[data-id="${t}"]`);r&&e.removeChild(r)}else for(;e.firstChild;)e.removeChild(e.firstChild)}},Un=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[U(1-r),U(ke(e)-r)]},Kn=(t,e,r,o,a="id",h="children")=>{let g={};return I(($,q)=>(g=$[q],$.splice(q,1),!0))(t,e,a,h),H(t,r,g,o,a,h),t},Xn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),qn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(a=>e.includes(a)?o.push({key:a,value:t[a]}):r[a]=t[a]),{newObj:r,newQuery:o}},Gn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},un=(t="",e=2,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const dn="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",hn="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Jn=t=>{const e={},r={},o=t.match(new RegExp(dn,"g")).map(h=>h.match(new RegExp(dn))).filter(Boolean),a=t.match(new RegExp(hn,"g")).map(h=>h.match(new RegExp(hn))).filter(Boolean);return o.map(h=>{const[,g,$]=h;e[g]=$,r[g]="base"}),a.map(h=>{const[,g,$]=h;e[g]=($??"").trim(),r[g]="data"}),{obj:e,types:r}},Qn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var ta={xml2Obj:Jn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Qn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},ea=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!s(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},ra=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(a,h)=>a?o(a):r(h))),oa=()=>"#"+un((~~(Math.random()*(1<<24))).toString(16),6),Po=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),na=(t=[])=>t[Po(t.length-1)],aa=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,a)=>{a===t-1?r[a]=e:(r[a]=Po(1,e-1),e-=r[a])}),r},ia=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),sa=()=>Math.random()>.5;const la=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ca=(t,e=60)=>{if(!N())return;t=X(t)?t.current:t??document.body;let r=qr(t,"resize-sensor"),o=[];const a=ee(()=>o.map(q=>q(t)),e),h=q=>{qr(t,"resize-sensor")||(r=la(t,a)),o.indexOf(q)===-1&&o.push(q)},g=q=>{const lt=o.indexOf(q);lt!==-1&&o.splice(lt,1),o.length===0&&r&&$()},$=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",a,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:h,unbind:g,destroy:$}};const fn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const a=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?a:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${a}${o}`)};var ua=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const a=t.match(/rgba?\((.+)\)/);if(a){const h=a[1]?.split(",").map(g=>g.trim());return fn(...h)}return t}return fn(t,e,r,o)},da=(t,e="px")=>`${t}`.replace(e,"")-0;const pn=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ha=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},fa=()=>{const t=[],e=g=>{t.push(g),h(g)},r=()=>t[0],o=()=>t.shift(),a=g=>g.startTime=pn(),h=g=>{a(g),t.sort(($,q)=>$.startTime-q.startTime)};return{hub:t,push:e,peek:r,shift:o,update:h}};var pa=(t=5)=>{const{hub:e,push:r,peek:o,shift:a,update:h}=fa(),g=ha(()=>{q()&&g()}),$=lt=>pn()-lt.startTime>t,q=()=>{let lt=o();for(;lt;){if($(lt)){h(lt);break}const{task:ft}=lt;typeof ft=="function"?(lt.task=null,ft()):a(),lt=o()}return lt};return(lt=()=>{})=>{r({task:lt}),e.length<2&&g()}},ma=()=>N()&&document.documentElement.scrollHeight-Wt()===Rr().height,xa=t=>{N()&&(t=X(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ga={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ya=t=>{const e=Jt(t);N()&&document.head.appendChild(...e)},ba=(t,e=null,r=!1)=>[...t||[]].sort((o,a)=>{const h=e?o[e]:o,g=e?a[e]:a;return!isNaN(Number(h))&&!isNaN(Number(h))?r?g-h:h-g:typeof h=="string"&&typeof g=="string"?r?g.localeCompare(h):h.localeCompare(g):typeof h=="string"&&typeof g=="number"?r?-1:1:typeof h=="number"||typeof h=="string"?r?1:-1:r?-1:1}),va=t=>{if(!b(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},wa={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const ka=Pt();var Ca=he(ka),Ea=(t,e={},r="utils")=>{const o=[];t.replace(/\/\*[\s\S]*\*\//,"").split(`
`).map(h=>{const g=h.split(");").map($=>$.replace(/(?<!:)\/\/[^\n]*/,"").trim()).filter(Boolean).map($=>`${$})`);o.push(...g)});const a=o.filter(h=>/^[^\s/]+\([\s\S]*\)$/.test(h));if(a.length){const h=a.slice(-1)[0];h.indexOf("return ")!==0&&(t=t.replace(h,`
return ${h}`))}return window[r]=e,Function(`${t}`)()},ja=()=>N()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),Sa=(t,...e)=>{const r=[];return t.map((o,a)=>{r.push(o,e[a]??"")}),r.join("")},_a=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const za=t=>[12,ke(t),24,60,60],Fa=(t=[],e=[],r=[])=>{let o=!1;const a=[];return e.map((h,g)=>{const $=(o?h-1:h)-t[g];$<0?(a[g]=$+(r[g]||10),o=!0):(a[g]=$,o=!1)}),a.reverse()};var mn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=za(e).reverse(),o=cr(t).slice(0,-1).reverse(),a=cr(e).slice(0,-1).reverse();return Fa(o,a,r)};const Aa=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var $a=(t,e=new Date)=>{const r=mn(t,e),o=r.findIndex(a=>a>0);return r.map((a,h)=>`${a||0}${Aa[h]}`).slice(o).join("")},Da=(t,e)=>{D(t)&&(nn(t,e)?No(t,e):Z(t,e))};const Ta=()=>Jr()?{startKey:"touchstart",moveKey:"touchmove",endKey:"touchend"}:{startKey:"mousedown",moveKey:"mousemove",endKey:"mouseup"},Oa=(t,e,r)=>{r.addEventListener(t,e,!1)},Na=(t,e,r)=>{r.removeEventListener(t,e,!1)},Pa=(t,e,r,o,a)=>{a.addEventListener(t,r,!1),document.addEventListener(e,o,!1)},Ia=(t,e,r,o,a)=>{a.removeEventListener(t,r,!1),document.removeEventListener(e,o,!1)};var Ra=(t,e,r,o=document)=>{const{startKey:a,moveKey:h,endKey:g}=Ta(),$=ft=>{t(ft,o),Pa(h,g,q,lt,o)},q=ft=>e(ft,o),lt=ft=>{r(ft,o),Ia(h,g,q,lt,o)};return Oa(a,$,o),()=>Na(a,$,o)},Ma=t=>(e,r="children")=>{if(!s(e))return e;const o=a=>(a.map(h=>{s(h[r])&&(h[r]=o(h[r]))}),t(a));return o(e)},Ba=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),La=(t,e="fuckId",r="children")=>no((o,a,h)=>{o[e]=[...a.map(g=>g["@@index"]),h].join("-")})(t,r),Ha=(t,e,r,o="children")=>I((a,h)=>{const g=a[h];return g[o]=[...g[o]||[],...r],!0})(t,e),Wa=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Va=t=>N()?(j.map(e=>document.addEventListener(e,t,!1)),()=>j.map(e=>document.removeEventListener(e,t,!1))):void 0,Za=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:a="middle",font:h="20px microsoft yahei",fillStyle:g="rgba(202,202,202,0.4)",content:$="\u8BF7\u52FF\u5916\u4F20",rotate:q="-30",zIndex:lt=1e3}={})=>{if(!N())return;t=X(t)?t.current:t??document.body;const ft=t.firstChild;ft?.className==="watermark-canvas"&&t.removeChild(ft);const re=document.createElement("canvas");re.setAttribute("width",e),re.setAttribute("height",r);const oe=re.getContext("2d");oe.textAlign=o,oe.textBaseline=a,oe.font=h,oe.fillStyle=g,oe.rotate(Math.PI/180*q),oe.fillText($,parseFloat(e)/2,parseFloat(r)/2);const Vr=re.toDataURL(),fr=document.createElement("div");fr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${lt};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Vr}')`),t.style.position="relative",t.insertBefore(fr,t.firstChild)},Ya=(t=new Date)=>{const e=new Date(t).getDay();return[U(1-e),U(7-e)]},Ua=t=>{if(!pe(t))return{};let e="pending",r;const o=t.then(a=>{e="success",r=a}).catch(a=>{e="error",r=a});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},rl=l.NzM,ol=l.wBC,nl=l.O39,al=l.cnu,il=l.E4D,sl=l.TRp,ll=l.zI1,cl=l.Ufj,ul=l.GxO,dl=l.cu2,hl=l.BcS,fl=l.lPd,pl=l.dC1,Ka=l.$L2,ml=l.Vji,xl=l.YxP,Xa=l.UhT,qa=l.JaC,gl=l.o4B,yl=l.Hlr,Ga=l.muM,bl=l.OiV,vl=l.KTn,wl=l.lwL,kl=l.d9v,Cl=l.yCD,El=l.qCK,Ja=l.vQq,Qa=l.fHt,jl=l.azq,Sl=l.dSY,ti=l.MTn,_l=l.RYO,zl=l.WAo,Fl=l.GVc,Al=l.Emy,$l=l.v9O,Dl=l.DsO,Tl=l._lj,Ol=l.vO6,ei=l.xDX,Nl=l.hf3,Pl=l.ip7,Il=l.uYe,Rl=l.DgJ,Ml=l.rae,Bl=l.YBu,ri=l._iG,Ll=l.hXT,Hl=l.gQq,Wl=l.D_D,Vl=l.$nD,oi=l.dtG,Zl=l.Y0R,ni=l.qg7,Yl=l.Xxf,Ul=l.tSM,ai=l.Few,Kl=l.xHg,Xl=l.aoj,ql=l.Dlm,ii=l.mrB,si=l.dKu,Gl=l.v1d,li=l.afD,Jl=l.Lz5,Ql=l.xZX,tc=l.G_1,ec=l.osI,ci=l.PTJ,ui=l.Qfx,rc=l.bti,di=l.XBv,hi=l.eyl,oc=l.y35,nc=l.hKD,fi=l.BWC,ac=l.oLi,pi=l.NA2,ic=l.S3Y,sc=l.pvT,lc=l.m2f,mi=l.rWO,cc=l.A$w,uc=l.kJL,dc=l.S9U,hc=l.dYC,fc=l.jUY,pc=l.J_U,mc=l.kKo,xc=l.VZO,gc=l.mf2,yc=l.w1q,bc=l.Kn2,vc=l.ncl,wc=l.LWC,kc=l.dqb,Cc=l.Kjn,Ec=l.TaN,jc=l.CBv,xi=l.rTd,Sc=l.B73,_c=l.SSA,gi=l.CLv,zc=l.F$z,Fc=l.XT_,Ac=l.omS,$c=l.poV,Dc=l.VXY,Tc=l.xsP,Oc=l.HPs,Nc=l.TSy,yi=l.B5o,Pc=l.u1A,Ic=l.WAY,Rc=l.I8J,bi=l.ywV,Mc=l.bEN,Bc=l.$45,Lc=l.TUk,Hc=l.T7B,Wc=l.CEd,Vc=l.IHq,Zc=l.SkG,Yc=l.Smz,vi=l.nL5,Uc=l.ON,Kc=l.eiS,Xc=l.Frc,qc=l.z5J,Gc=l.scT,wi=l.hd2,Jc=l.AnA,Qc=l.kYX,ki=l.yZP,tu=l.IVd,eu=l.SIr,Ci=l.jg2,Ei=l.gVz,ru=l.puc,ou=l.Azz,nu=l.X5u,au=l.dPh,iu=l.SMZ,su=l.kro,lu=l.nPi,cu=l.US,ji=l.A_F,Si=l._vH,uu=l.gmH,du=l.DYV,hu=l.qi2,_i=l.tOc,fu=l.hau,pu=l.FaZ,mu=l.uyF,zi=l.Vcq,xu=l.XKW,Fi=l.azd,gu=l.P2K,Ai=l.XBe,yu=l.JZ7,bu=l.ABi,vu=l.ogC,$i=l.Og,Di=l._O2,wu=l.P0C,ku=l.Uo5,Cu=l.Two,Eu=l.tYQ,ju=l.tVn,Su=l.pHy,Ti=l.k$y,Oi=l.yfi,_u=l.fl8,Ni=l.f9u,zu=l.ZV1,Pi=l.Lgs}}]);
