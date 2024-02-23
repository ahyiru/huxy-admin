(self.webpackChunk=self.webpackChunk||[]).push([[429],{66220:function(ye,Jt,St){St.d(Jt,{H:function(){return _},K6:function(){return Ft},Me:function(){return C},Ob:function(){return s},YL:function(){return st},_:function(){return l},g8:function(){return S},n6:function(){return $},oS:function(){return H},wE:function(){return F}});var Y=St(21208);function l(p,T,z){return{r:(0,Y.Cg)(p,255)*255,g:(0,Y.Cg)(T,255)*255,b:(0,Y.Cg)(z,255)*255}}function Ft(p,T,z){p=(0,Y.Cg)(p,255),T=(0,Y.Cg)(T,255),z=(0,Y.Cg)(z,255);var U=Math.max(p,T,z),W=Math.min(p,T,z),K=0,ft=0,Et=(U+W)/2;if(U===W)ft=0,K=0;else{var Tt=U-W;switch(ft=Et>.5?Tt/(2-U-W):Tt/(U+W),U){case p:K=(T-z)/Tt+(T<z?6:0);break;case T:K=(z-p)/Tt+2;break;case z:K=(p-T)/Tt+4;break;default:break}K/=6}return{h:K,s:ft,l:Et}}function $t(p,T,z){return z<0&&(z+=1),z>1&&(z-=1),z<1/6?p+(T-p)*(6*z):z<1/2?T:z<2/3?p+(T-p)*(2/3-z)*6:p}function st(p,T,z){var U,W,K;if(p=(0,Y.Cg)(p,360),T=(0,Y.Cg)(T,100),z=(0,Y.Cg)(z,100),T===0)W=z,K=z,U=z;else{var ft=z<.5?z*(1+T):z+T-z*T,Et=2*z-ft;U=$t(Et,ft,p+1/3),W=$t(Et,ft,p),K=$t(Et,ft,p-1/3)}return{r:U*255,g:W*255,b:K*255}}function F(p,T,z){p=(0,Y.Cg)(p,255),T=(0,Y.Cg)(T,255),z=(0,Y.Cg)(z,255);var U=Math.max(p,T,z),W=Math.min(p,T,z),K=0,ft=U,Et=U-W,Tt=U===0?0:Et/U;if(U===W)K=0;else{switch(U){case p:K=(T-z)/Et+(T<z?6:0);break;case T:K=(z-p)/Et+2;break;case z:K=(p-T)/Et+4;break;default:break}K/=6}return{h:K,s:Tt,v:ft}}function C(p,T,z){p=(0,Y.Cg)(p,360)*6,T=(0,Y.Cg)(T,100),z=(0,Y.Cg)(z,100);var U=Math.floor(p),W=p-U,K=z*(1-T),ft=z*(1-W*T),Et=z*(1-(1-W)*T),Tt=U%6,yt=[z,ft,K,K,Et,z][Tt],Nt=[Et,z,z,ft,K,K][Tt],Ut=[K,K,Et,z,z,ft][Tt];return{r:yt*255,g:Nt*255,b:Ut*255}}function s(p,T,z,U){var W=[(0,Y.wl)(Math.round(p).toString(16)),(0,Y.wl)(Math.round(T).toString(16)),(0,Y.wl)(Math.round(z).toString(16))];return U&&W[0].startsWith(W[0].charAt(1))&&W[1].startsWith(W[1].charAt(1))&&W[2].startsWith(W[2].charAt(1))?W[0].charAt(0)+W[1].charAt(0)+W[2].charAt(0):W.join("")}function _(p,T,z,U,W){var K=[(0,Y.wl)(Math.round(p).toString(16)),(0,Y.wl)(Math.round(T).toString(16)),(0,Y.wl)(Math.round(z).toString(16)),(0,Y.wl)(ht(U))];return W&&K[0].startsWith(K[0].charAt(1))&&K[1].startsWith(K[1].charAt(1))&&K[2].startsWith(K[2].charAt(1))&&K[3].startsWith(K[3].charAt(1))?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function B(p,T,z,U){var W=[pad2(ht(U)),pad2(Math.round(p).toString(16)),pad2(Math.round(T).toString(16)),pad2(Math.round(z).toString(16))];return W.join("")}function ht(p){return Math.round(parseFloat(p)*255).toString(16)}function $(p){return S(p)/255}function S(p){return parseInt(p,16)}function H(p){return{r:p>>16,g:(p&65280)>>8,b:p&255}}},81838:function(ye,Jt,St){St.d(Jt,{D:function(){return Y}});var Y={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},50222:function(ye,Jt,St){St.d(Jt,{RO:function(){return $t}});var Y=St(66220),l=St(81838),Ft=St(21208);function $t(S){var H={r:0,g:0,b:0},p=1,T=null,z=null,U=null,W=!1,K=!1;return typeof S=="string"&&(S=ht(S)),typeof S=="object"&&($(S.r)&&$(S.g)&&$(S.b)?(H=(0,Y._)(S.r,S.g,S.b),W=!0,K=String(S.r).substr(-1)==="%"?"prgb":"rgb"):$(S.h)&&$(S.s)&&$(S.v)?(T=(0,Ft.Px)(S.s),z=(0,Ft.Px)(S.v),H=(0,Y.Me)(S.h,T,z),W=!0,K="hsv"):$(S.h)&&$(S.s)&&$(S.l)&&(T=(0,Ft.Px)(S.s),U=(0,Ft.Px)(S.l),H=(0,Y.YL)(S.h,T,U),W=!0,K="hsl"),Object.prototype.hasOwnProperty.call(S,"a")&&(p=S.a)),p=(0,Ft.TV)(p),{ok:W,format:S.format||K,r:Math.min(255,Math.max(H.r,0)),g:Math.min(255,Math.max(H.g,0)),b:Math.min(255,Math.max(H.b,0)),a:p}}var st="[-\\+]?\\d+%?",F="[-\\+]?\\d*\\.\\d+%?",C="(?:".concat(F,")|(?:").concat(st,")"),s="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),_="[\\s|\\(]+(".concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")[,|\\s]+(").concat(C,")\\s*\\)?"),B={CSS_UNIT:new RegExp(C),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+_),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+_),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+_),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ht(S){if(S=S.trim().toLowerCase(),S.length===0)return!1;var H=!1;if(l.D[S])S=l.D[S],H=!0;else if(S==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var p=B.rgb.exec(S);return p?{r:p[1],g:p[2],b:p[3]}:(p=B.rgba.exec(S),p?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=B.hsl.exec(S),p?{h:p[1],s:p[2],l:p[3]}:(p=B.hsla.exec(S),p?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=B.hsv.exec(S),p?{h:p[1],s:p[2],v:p[3]}:(p=B.hsva.exec(S),p?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=B.hex8.exec(S),p?{r:(0,Y.g8)(p[1]),g:(0,Y.g8)(p[2]),b:(0,Y.g8)(p[3]),a:(0,Y.n6)(p[4]),format:H?"name":"hex8"}:(p=B.hex6.exec(S),p?{r:(0,Y.g8)(p[1]),g:(0,Y.g8)(p[2]),b:(0,Y.g8)(p[3]),format:H?"name":"hex"}:(p=B.hex4.exec(S),p?{r:(0,Y.g8)(p[1]+p[1]),g:(0,Y.g8)(p[2]+p[2]),b:(0,Y.g8)(p[3]+p[3]),a:(0,Y.n6)(p[4]+p[4]),format:H?"name":"hex8"}:(p=B.hex3.exec(S),p?{r:(0,Y.g8)(p[1]+p[1]),g:(0,Y.g8)(p[2]+p[2]),b:(0,Y.g8)(p[3]+p[3]),format:H?"name":"hex"}:!1)))))))))}function $(S){return!!B.CSS_UNIT.exec(String(S))}},1350:function(ye,Jt,St){St.d(Jt,{q:function(){return st}});var Y=St(66220),l=St(81838),Ft=St(50222),$t=St(21208),st=function(){function C(s,_){s===void 0&&(s=""),_===void 0&&(_={});var B;if(s instanceof C)return s;typeof s=="number"&&(s=(0,Y.oS)(s)),this.originalInput=s;var ht=(0,Ft.RO)(s);this.originalInput=s,this.r=ht.r,this.g=ht.g,this.b=ht.b,this.a=ht.a,this.roundA=Math.round(100*this.a)/100,this.format=(B=_.format)!==null&&B!==void 0?B:ht.format,this.gradientType=_.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=ht.ok}return C.prototype.isDark=function(){return this.getBrightness()<128},C.prototype.isLight=function(){return!this.isDark()},C.prototype.getBrightness=function(){var s=this.toRgb();return(s.r*299+s.g*587+s.b*114)/1e3},C.prototype.getLuminance=function(){var s=this.toRgb(),_,B,ht,$=s.r/255,S=s.g/255,H=s.b/255;return $<=.03928?_=$/12.92:_=Math.pow(($+.055)/1.055,2.4),S<=.03928?B=S/12.92:B=Math.pow((S+.055)/1.055,2.4),H<=.03928?ht=H/12.92:ht=Math.pow((H+.055)/1.055,2.4),.2126*_+.7152*B+.0722*ht},C.prototype.getAlpha=function(){return this.a},C.prototype.setAlpha=function(s){return this.a=(0,$t.TV)(s),this.roundA=Math.round(100*this.a)/100,this},C.prototype.isMonochrome=function(){var s=this.toHsl().s;return s===0},C.prototype.toHsv=function(){var s=(0,Y.wE)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,v:s.v,a:this.a}},C.prototype.toHsvString=function(){var s=(0,Y.wE)(this.r,this.g,this.b),_=Math.round(s.h*360),B=Math.round(s.s*100),ht=Math.round(s.v*100);return this.a===1?"hsv(".concat(_,", ").concat(B,"%, ").concat(ht,"%)"):"hsva(".concat(_,", ").concat(B,"%, ").concat(ht,"%, ").concat(this.roundA,")")},C.prototype.toHsl=function(){var s=(0,Y.K6)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,l:s.l,a:this.a}},C.prototype.toHslString=function(){var s=(0,Y.K6)(this.r,this.g,this.b),_=Math.round(s.h*360),B=Math.round(s.s*100),ht=Math.round(s.l*100);return this.a===1?"hsl(".concat(_,", ").concat(B,"%, ").concat(ht,"%)"):"hsla(".concat(_,", ").concat(B,"%, ").concat(ht,"%, ").concat(this.roundA,")")},C.prototype.toHex=function(s){return s===void 0&&(s=!1),(0,Y.Ob)(this.r,this.g,this.b,s)},C.prototype.toHexString=function(s){return s===void 0&&(s=!1),"#"+this.toHex(s)},C.prototype.toHex8=function(s){return s===void 0&&(s=!1),(0,Y.H)(this.r,this.g,this.b,this.a,s)},C.prototype.toHex8String=function(s){return s===void 0&&(s=!1),"#"+this.toHex8(s)},C.prototype.toHexShortString=function(s){return s===void 0&&(s=!1),this.a===1?this.toHexString(s):this.toHex8String(s)},C.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},C.prototype.toRgbString=function(){var s=Math.round(this.r),_=Math.round(this.g),B=Math.round(this.b);return this.a===1?"rgb(".concat(s,", ").concat(_,", ").concat(B,")"):"rgba(".concat(s,", ").concat(_,", ").concat(B,", ").concat(this.roundA,")")},C.prototype.toPercentageRgb=function(){var s=function(_){return"".concat(Math.round((0,$t.Cg)(_,255)*100),"%")};return{r:s(this.r),g:s(this.g),b:s(this.b),a:this.a}},C.prototype.toPercentageRgbString=function(){var s=function(_){return Math.round((0,$t.Cg)(_,255)*100)};return this.a===1?"rgb(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%)"):"rgba(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%, ").concat(this.roundA,")")},C.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var s="#"+(0,Y.Ob)(this.r,this.g,this.b,!1),_=0,B=Object.entries(l.D);_<B.length;_++){var ht=B[_],$=ht[0],S=ht[1];if(s===S)return $}return!1},C.prototype.toString=function(s){var _=!!s;s=s??this.format;var B=!1,ht=this.a<1&&this.a>=0,$=!_&&ht&&(s.startsWith("hex")||s==="name");return $?s==="name"&&this.a===0?this.toName():this.toRgbString():(s==="rgb"&&(B=this.toRgbString()),s==="prgb"&&(B=this.toPercentageRgbString()),(s==="hex"||s==="hex6")&&(B=this.toHexString()),s==="hex3"&&(B=this.toHexString(!0)),s==="hex4"&&(B=this.toHex8String(!0)),s==="hex8"&&(B=this.toHex8String()),s==="name"&&(B=this.toName()),s==="hsl"&&(B=this.toHslString()),s==="hsv"&&(B=this.toHsvString()),B||this.toHexString())},C.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},C.prototype.clone=function(){return new C(this.toString())},C.prototype.lighten=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.l+=s/100,_.l=(0,$t.J$)(_.l),new C(_)},C.prototype.brighten=function(s){s===void 0&&(s=10);var _=this.toRgb();return _.r=Math.max(0,Math.min(255,_.r-Math.round(255*-(s/100)))),_.g=Math.max(0,Math.min(255,_.g-Math.round(255*-(s/100)))),_.b=Math.max(0,Math.min(255,_.b-Math.round(255*-(s/100)))),new C(_)},C.prototype.darken=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.l-=s/100,_.l=(0,$t.J$)(_.l),new C(_)},C.prototype.tint=function(s){return s===void 0&&(s=10),this.mix("white",s)},C.prototype.shade=function(s){return s===void 0&&(s=10),this.mix("black",s)},C.prototype.desaturate=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.s-=s/100,_.s=(0,$t.J$)(_.s),new C(_)},C.prototype.saturate=function(s){s===void 0&&(s=10);var _=this.toHsl();return _.s+=s/100,_.s=(0,$t.J$)(_.s),new C(_)},C.prototype.greyscale=function(){return this.desaturate(100)},C.prototype.spin=function(s){var _=this.toHsl(),B=(_.h+s)%360;return _.h=B<0?360+B:B,new C(_)},C.prototype.mix=function(s,_){_===void 0&&(_=50);var B=this.toRgb(),ht=new C(s).toRgb(),$=_/100,S={r:(ht.r-B.r)*$+B.r,g:(ht.g-B.g)*$+B.g,b:(ht.b-B.b)*$+B.b,a:(ht.a-B.a)*$+B.a};return new C(S)},C.prototype.analogous=function(s,_){s===void 0&&(s=6),_===void 0&&(_=30);var B=this.toHsl(),ht=360/_,$=[this];for(B.h=(B.h-(ht*s>>1)+720)%360;--s;)B.h=(B.h+ht)%360,$.push(new C(B));return $},C.prototype.complement=function(){var s=this.toHsl();return s.h=(s.h+180)%360,new C(s)},C.prototype.monochromatic=function(s){s===void 0&&(s=6);for(var _=this.toHsv(),B=_.h,ht=_.s,$=_.v,S=[],H=1/s;s--;)S.push(new C({h:B,s:ht,v:$})),$=($+H)%1;return S},C.prototype.splitcomplement=function(){var s=this.toHsl(),_=s.h;return[this,new C({h:(_+72)%360,s:s.s,l:s.l}),new C({h:(_+216)%360,s:s.s,l:s.l})]},C.prototype.onBackground=function(s){var _=this.toRgb(),B=new C(s).toRgb(),ht=_.a+B.a*(1-_.a);return new C({r:(_.r*_.a+B.r*B.a*(1-_.a))/ht,g:(_.g*_.a+B.g*B.a*(1-_.a))/ht,b:(_.b*_.a+B.b*B.a*(1-_.a))/ht,a:ht})},C.prototype.triad=function(){return this.polyad(3)},C.prototype.tetrad=function(){return this.polyad(4)},C.prototype.polyad=function(s){for(var _=this.toHsl(),B=_.h,ht=[this],$=360/s,S=1;S<s;S++)ht.push(new C({h:(B+S*$)%360,s:_.s,l:_.l}));return ht},C.prototype.equals=function(s){return this.toRgbString()===new C(s).toRgbString()},C}();function F(C,s){return C===void 0&&(C=""),s===void 0&&(s={}),new st(C,s)}},21208:function(ye,Jt,St){St.d(Jt,{Cg:function(){return Y},J$:function(){return l},Px:function(){return F},TV:function(){return st},wl:function(){return C}});function Y(s,_){Ft(s)&&(s="100%");var B=$t(s);return s=_===360?s:Math.min(_,Math.max(0,parseFloat(s))),B&&(s=parseInt(String(s*_),10)/100),Math.abs(s-_)<1e-6?1:(_===360?s=(s<0?s%_+_:s%_)/parseFloat(String(_)):s=s%_/parseFloat(String(_)),s)}function l(s){return Math.min(1,Math.max(0,s))}function Ft(s){return typeof s=="string"&&s.indexOf(".")!==-1&&parseFloat(s)===1}function $t(s){return typeof s=="string"&&s.indexOf("%")!==-1}function st(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function F(s){return s<=1?"".concat(Number(s)*100,"%"):s}function C(s){return s.length===1?"0"+s:String(s)}},45423:function(ye,Jt){function St(Y){for(var l=0,Ft,$t=0,st=Y.length;st>=4;++$t,st-=4)Ft=Y.charCodeAt($t)&255|(Y.charCodeAt(++$t)&255)<<8|(Y.charCodeAt(++$t)&255)<<16|(Y.charCodeAt(++$t)&255)<<24,Ft=(Ft&65535)*1540483477+((Ft>>>16)*59797<<16),Ft^=Ft>>>24,l=(Ft&65535)*1540483477+((Ft>>>16)*59797<<16)^(l&65535)*1540483477+((l>>>16)*59797<<16);switch(st){case 3:l^=(Y.charCodeAt($t+2)&255)<<16;case 2:l^=(Y.charCodeAt($t+1)&255)<<8;case 1:l^=Y.charCodeAt($t)&255,l=(l&65535)*1540483477+((l>>>16)*59797<<16)}return l^=l>>>13,l=(l&65535)*1540483477+((l>>>16)*59797<<16),((l^l>>>15)>>>0).toString(36)}Jt.A=St},93619:function(ye,Jt){var St={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};Jt.A=St},4452:function(ye,Jt){var St,Y;(function(){"use strict";var l={}.hasOwnProperty;function Ft(){for(var F="",C=0;C<arguments.length;C++){var s=arguments[C];s&&(F=st(F,$t(s)))}return F}function $t(F){if(typeof F=="string"||typeof F=="number")return F;if(typeof F!="object")return"";if(Array.isArray(F))return Ft.apply(null,F);if(F.toString!==Object.prototype.toString&&!F.toString.toString().includes("[native code]"))return F.toString();var C="";for(var s in F)l.call(F,s)&&F[s]&&(C=st(C,s));return C}function st(F,C){return C?F?F+" "+C:F+C:F}ye.exports?(Ft.default=Ft,ye.exports=Ft):(St=[],Y=function(){return Ft}.apply(Jt,St),Y!==void 0&&(ye.exports=Y))})()},7003:function(ye,Jt,St){var Y;St.d(Jt,{J0:function(){return le},PQ:function(){return T},Rt:function(){return s},Xb:function(){return W},ZL:function(){return Nt},Zk:function(){return yt},_s:function(){return $},aF:function(){return Tt},ey:function(){return S},fI:function(){return Ut},fv:function(){return ht},gy:function(){return H},lz:function(){return U},mk:function(){return ft},n1:function(){return K},tH:function(){return p},tu:function(){return I},xA:function(){return z},y$:function(){return Qt}});var l=St(63696),Ft=St(78325),$t={87:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`/*@height:2px;
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
`,""]),M.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const et=M},587:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.kLIGi {
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
`,""]),M.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const et=M},724:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`@keyframes animate-drawer-right-in {
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
`,""]),M.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const et=M},468:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`@keyframes animate-drop-in {
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
`,""]),M.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const et=M},55:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.huxy-doc-frame {
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
`,""]),M.locals={};const et=M},482:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`@keyframes animate-modal-in {
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
`,""]),M.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const et=M},945:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.clear::after {
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
`,""]),M.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const et=M},531:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.cols-1 {
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
`,""]),M.locals={};const et=M},670:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`@keyframes before {
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
`,""]),M.locals={};const et=M},473:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.clear::after {
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
`,""]),M.locals={};const et=M},700:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.ofth_ {
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
`,""]),M.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const et=M},133:(f,J,b)=>{b.d(J,{A:()=>et});var q=b(758),P=b.n(q),V=b(935),R=b.n(V),M=R()(P());M.push([f.id,`.node-right-icon-close {
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
`,""]),M.locals={};const et=M},935:f=>{f.exports=function(J){var b=[];return b.toString=function(){return this.map(function(q){var P="",V=typeof q[5]<"u";return q[4]&&(P+="@supports (".concat(q[4],") {")),q[2]&&(P+="@media ".concat(q[2]," {")),V&&(P+="@layer".concat(q[5].length>0?" ".concat(q[5]):""," {")),P+=J(q),V&&(P+="}"),q[2]&&(P+="}"),q[4]&&(P+="}"),P}).join("")},b.i=function(q,P,V,R,M){typeof q=="string"&&(q=[[null,q,void 0]]);var et={};if(V)for(var zt=0;zt<this.length;zt++){var _t=this[zt][0];_t!=null&&(et[_t]=!0)}for(var Wt=0;Wt<q.length;Wt++){var xt=[].concat(q[Wt]);V&&et[xt[0]]||(typeof M<"u"&&(typeof xt[5]>"u"||(xt[1]="@layer".concat(xt[5].length>0?" ".concat(xt[5]):""," {").concat(xt[1],"}")),xt[5]=M),P&&(xt[2]&&(xt[1]="@media ".concat(xt[2]," {").concat(xt[1],"}")),xt[2]=P),R&&(xt[4]?(xt[1]="@supports (".concat(xt[4],") {").concat(xt[1],"}"),xt[4]=R):xt[4]="".concat(R)),b.push(xt))}},b}},758:f=>{f.exports=function(J){return J[1]}},335:(f,J,b)=>{var q=b(649),P=Symbol.for("react.element"),V=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,M=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,et={key:!0,ref:!0,__self:!0,__source:!0};function zt(_t,Wt,xt){var Dt,It={},ae=null,Zt=null;xt!==void 0&&(ae=""+xt),Wt.key!==void 0&&(ae=""+Wt.key),Wt.ref!==void 0&&(Zt=Wt.ref);for(Dt in Wt)R.call(Wt,Dt)&&!et.hasOwnProperty(Dt)&&(It[Dt]=Wt[Dt]);if(_t&&_t.defaultProps)for(Dt in Wt=_t.defaultProps,Wt)It[Dt]===void 0&&(It[Dt]=Wt[Dt]);return{$$typeof:P,type:_t,key:ae,ref:Zt,props:It,_owner:M.current}}J.Fragment=V,J.jsx=zt,J.jsxs=zt},85:(f,J,b)=>{f.exports=b(335)},591:f=>{var J=[];function b(V){for(var R=-1,M=0;M<J.length;M++)if(J[M].identifier===V){R=M;break}return R}function q(V,R){for(var M={},et=[],zt=0;zt<V.length;zt++){var _t=V[zt],Wt=R.base?_t[0]+R.base:_t[0],xt=M[Wt]||0,Dt="".concat(Wt," ").concat(xt);M[Wt]=xt+1;var It=b(Dt),ae={css:_t[1],media:_t[2],sourceMap:_t[3],supports:_t[4],layer:_t[5]};if(It!==-1)J[It].references++,J[It].updater(ae);else{var Zt=P(ae,R);R.byIndex=zt,J.splice(zt,0,{identifier:Dt,updater:Zt,references:1})}et.push(Dt)}return et}function P(V,R){var M=R.domAPI(R);M.update(V);var et=function(zt){if(zt){if(zt.css===V.css&&zt.media===V.media&&zt.sourceMap===V.sourceMap&&zt.supports===V.supports&&zt.layer===V.layer)return;M.update(V=zt)}else M.remove()};return et}f.exports=function(V,R){R=R||{},V=V||[];var M=q(V,R);return function(et){et=et||[];for(var zt=0;zt<M.length;zt++){var _t=M[zt],Wt=b(_t);J[Wt].references--}for(var xt=q(et,R),Dt=0;Dt<M.length;Dt++){var It=M[Dt],ae=b(It);J[ae].references===0&&(J[ae].updater(),J.splice(ae,1))}M=xt}}},128:f=>{var J={};function b(P){if(typeof J[P]>"u"){var V=document.querySelector(P);if(window.HTMLIFrameElement&&V instanceof window.HTMLIFrameElement)try{V=V.contentDocument.head}catch{V=null}J[P]=V}return J[P]}function q(P,V){var R=b(P);if(!R)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");R.appendChild(V)}f.exports=q},51:f=>{function J(b){var q=document.createElement("style");return b.setAttributes(q,b.attributes),b.insert(q,b.options),q}f.exports=J},855:(f,J,b)=>{function q(P){var V=b.nc;V&&P.setAttribute("nonce",V)}f.exports=q},740:f=>{function J(P,V,R){var M="";R.supports&&(M+="@supports (".concat(R.supports,") {")),R.media&&(M+="@media ".concat(R.media," {"));var et=typeof R.layer<"u";et&&(M+="@layer".concat(R.layer.length>0?" ".concat(R.layer):""," {")),M+=R.css,et&&(M+="}"),R.media&&(M+="}"),R.supports&&(M+="}");var zt=R.sourceMap;zt&&typeof btoa<"u"&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(zt))))," */")),V.styleTagTransform(M,P,V.options)}function b(P){if(P.parentNode===null)return!1;P.parentNode.removeChild(P)}function q(P){if(typeof document>"u")return{update:function(){},remove:function(){}};var V=P.insertStyleElement(P);return{update:function(R){J(V,P,R)},remove:function(){b(V)}}}f.exports=q},656:f=>{function J(b,q){if(q.styleSheet)q.styleSheet.cssText=b;else{for(;q.firstChild;)q.removeChild(q.firstChild);q.appendChild(document.createTextNode(b))}}f.exports=J},649:f=>{var J=q=>{var P={};return F.d(P,q),P},b=q=>()=>q;f.exports=Y||(Y=St.t(l,2))}},st={};function F(f){var J=st[f];if(J!==void 0)return J.exports;var b=st[f]={id:f,exports:{}};return $t[f](b,b.exports,F),b.exports}F.n=f=>{var J=f&&f.__esModule?()=>f.default:()=>f;return F.d(J,{a:J}),J},F.d=(f,J)=>{for(var b in J)F.o(J,b)&&!F.o(f,b)&&Object.defineProperty(f,b,{enumerable:!0,get:J[b]})},F.o=(f,J)=>Object.prototype.hasOwnProperty.call(f,J),F.nc=void 0;var C={};(()=>{F.d(C,{Rt:()=>Qe,L8:()=>vr,FN:()=>Tr,fv:()=>Nr,_s:()=>L,ey:()=>x,gy:()=>nt,tH:()=>Ct,PQ:()=>Fe,xA:()=>lo,lz:()=>Pe,Xb:()=>ge,n1:()=>Dr,mk:()=>uo,Bl:()=>Xr,aF:()=>eo,Zk:()=>yo,ZL:()=>Ie,fI:()=>he,y$:()=>qr,tu:()=>Vo,m_:()=>at,PH:()=>Xo,mK:()=>Lt,J0:()=>Ot,B6:()=>ho,fz:()=>Ge,Iu:()=>Uo});var f=F(85),J=F(591),b=F.n(J),q=F(740),P=F.n(q),V=F(128),R=F.n(V),M=F(855),et=F.n(M),zt=F(51),_t=F.n(zt),Wt=F(656),xt=F.n(Wt),Dt=F(87),It={};It.styleTagTransform=xt(),It.setAttributes=et(),It.insert=R().bind(null,"head"),It.domAPI=P(),It.insertStyleElement=_t();var ae=b()(Dt.A,It);const Zt=Dt.A&&Dt.A.locals?Dt.A.locals:void 0,Qe=n=>(0,f.jsx)("span",{className:Zt.anico,children:(0,f.jsx)("span",{className:[Zt.hline,...(n.type||"").split(" ").map(i=>Zt[i]).filter(Boolean)].join(" ")})});var G=F(649);const tr=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),yr=n=>new Promise((i,u)=>{const m=new FileReader;m.readAsDataURL(n),m.addEventListener("load",()=>i(m.result)),m.addEventListener("error",A=>u(A))}),br=async n=>{if(!tr(n))return n;const i=await(await fetch(decodeURIComponent(n))).blob();return await yr(i)},er=n=>{const[i,u]=(0,G.useState)(n);return(0,G.useEffect)(()=>{(async m=>{const A=await br(m);u(A)})(n)},[n]),i},vr=({src:n,...i})=>{const u=er(n);return(0,f.jsx)("img",{...i,src:u})};var rr=n=>{var i={};return F.d(i,n),i},Or=n=>()=>n;const Ye=rr({createPortal:()=>Ft.createPortal,flushSync:()=>Ft.flushSync}),or=(n,i)=>{const u=(0,G.useRef)();(0,G.useEffect)(()=>{u.current=n},[n]),(0,G.useEffect)(()=>{if(i){const m=setInterval(()=>u.current(),i);return()=>clearInterval(m)}},[i])},me=()=>![typeof window,typeof document].includes("undefined"),nr=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),Ue=n=>nr(n).indexOf("element")>-1,be=(n=null)=>me()?Ue(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},ve=(n=()=>{},i=60)=>{let u=null;return function(...m){clearTimeout(u),u=setTimeout(()=>n.apply(this,m),i)}},Ve=(n,i)=>Object.prototype.hasOwnProperty.call(n??{},i),se=n=>Ve(n,"current"),Ke=(n,i)=>{const u=[],m=n.children??[];for(let A=0,j=m.length;A<j;A++){const D=m[A];D.className.indexOf(i)>-1&&u.push(D)}return u.length===0?null:u.length===1?u[0]:u},Ur=(n,i)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const u=document.createElement("object");return u.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),u.setAttribute("class","resize-sensor"),u.onload=()=>{u.contentDocument.defaultView.addEventListener("resize",i,!1),i()},u.type="text/html",n.appendChild(u),u.data="about:blank",u},wr=(n,i=60)=>{if(!me())return;n=se(n)?n.current:n??document.body;let u=Ke(n,"resize-sensor"),m=[];const A=ve(()=>m.map(rt=>rt(n)),i),j=rt=>{Ke(n,"resize-sensor")||(u=Ur(n,A)),m.indexOf(rt)===-1&&m.push(rt)},D=rt=>{const lt=m.indexOf(rt);lt!==-1&&m.splice(lt,1),m.length===0&&u&&Z()},Z=()=>{u&&u.parentNode&&(u.contentDocument&&u.contentDocument.defaultView.removeEventListener("resize",A,!1),u.parentNode.removeChild(u),u=void 0,m=[])};return{element:n,bind:j,unbind:D,destroy:Z}},Fr=(n={})=>{const i=(0,G.useRef)(0),[u,m]=(0,G.useState)(n),A=(0,G.useCallback)(j=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>m(j))},[]);return(0,G.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[u,A]},kr=(n=null,i=60)=>{const u=se(n)?n.current:n,{bind:m,destroy:A}=wr(u,i),[j,D]=Fr(be(u));return(0,G.useEffect)(()=>(m(()=>u&&D(be(u))),()=>A()),[u]),j};var ar=F(587),ce={};ce.styleTagTransform=xt(),ce.setAttributes=et(),ce.insert=R().bind(null,"head"),ce.domAPI=P(),ce.insertStyleElement=_t();var Jr=b()(ar.A,ce);const xe=ar.A&&ar.A.locals?ar.A.locals:void 0,Tr=({children:n,active:i=0,delay:u=5e3,className:m,...A})=>{const[j,D]=(0,G.useState)(i+1),[Z,rt]=(0,G.useState)(!1),lt=(0,G.useRef)(),kt=(0,G.useRef)(""),{width:vt}=kr(lt);n=Array.isArray(n)?n:[n];const gt=n[0],Gt=[n[n.length-1],...n,gt],Xt=Gt.length;or(()=>{let Mt=j+1;Mt=Mt===Xt?1:Mt,kt.current&&(kt.current=""),D(Mt),Mt===Xt-1&&setTimeout(()=>{kt.current="none",D(1)},500)},Z?null:u);const Pt=(Mt,te)=>{te.stopPropagation(),kt.current="",D(Mt),(0,Ye.flushSync)(()=>rt(!0)),rt(!1)},Ht={width:`${Xt*vt}px`,transform:`translateX(${-vt*j}px)`,transition:kt.current};return(0,f.jsxs)("div",{className:`${xe["huxy-carousel"]}${m?` ${m}`:""}`,...A,ref:lt,children:[(0,f.jsx)("div",{className:xe["huxy-carousel-wrap"],style:Ht,children:Gt.map((Mt,te)=>(0,f.jsx)("div",{className:`${xe["carousel-item"]} ${j===te?xe.active:""}`,style:{width:`${vt}px`},children:Mt},`huxy-carousel-${te}`))}),(0,f.jsx)("div",{className:xe["carousel-switch"],children:n.map((Mt,te)=>(0,f.jsx)("span",{className:`${xe.dot} ${j===te+1?xe.active:""}`,onClick:Ae=>Pt(te+1,Ae)},`huxy-carousel-switch-${te}`))})]})},ue=(n,i)=>{let u="",m="";if(typeof i=="number"&&(u=`col-${n}-${i}`),typeof i=="object"){const{span:A,offset:j}=i;u=A?`col-${n}-${A}`:"",m=j?`offset-${n}-${j}`:""}return{sp:u,os:m}},Nr=(0,G.forwardRef)(({span:n,offset:i,xl:u,lg:m,md:A,sm:j,xs:D,style:Z,width:rt,auto:lt,offsetWidth:kt="0px",className:vt,...gt},Gt)=>{const Xt=vt?` ${vt}`:"",Pt=`col-${n||12}`,Ht=i?`offset-${i}`:"",{sp:Mt,os:te}=ue("xs",D),{sp:Ae,os:Be}=ue("sm",j),{sp:He,os:pe}=ue("md",A),{sp:We,os:Je}=ue("lg",m),{sp:Ze,os:Se}=ue("xl",u),zr=[Pt,Ze,We,He,Ae,Mt,Ht,Se,Je,pe,Be,te].filter(Boolean).join(" "),pr=lt?{width:"auto",flex:1,maxWidth:`calc(100% - ${kt})`}:{width:rt};return(0,f.jsx)("div",{className:`${zr}${Xt}`,...gt,style:{...pr,...Z},ref:Gt})}),ir=()=>{const n=(0,G.useRef)(!0);return n.current?(n.current=!1,!0):!1},Zr=(n,i=[])=>{const u=ir();(0,G.useEffect)(()=>{if(!u)return n()},i)},De=(n,i=450)=>{const[u,m]=(0,G.useState)(n);return Zr(()=>{let A;return n||i===0?m(n):A=setTimeout(()=>m(n),i),()=>A&&clearTimeout(A)},[n]),[u,m]},Ie=({children:n,mountNode:i=document.body})=>(0,Ye.createPortal)(n,i),sr={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},lr={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},je=document.body,Dr=({open:n,close:i,delay:u=300,children:m,mountNode:A,hasMask:j=!0,style:D,className:Z="h-mask",relative:rt})=>{const[lt]=De(n,u);(A??je).style.overflow=lt?"hidden":"";const kt=rt?"absolute":"fixed";return(0,f.jsx)(Ie,{mountNode:A,children:(0,f.jsx)("div",{children:lt?(0,f.jsxs)("div",{className:Z,style:{...sr,position:kt},children:[j?(0,f.jsx)("div",{style:{...lr,position:kt},onClick:vt=>i?.(vt)}):null,G.Children.map(m,vt=>(0,G.isValidElement)(vt)?(0,G.cloneElement)(vt,{style:{position:"relative",zIndex:100001,...vt.props.style}}):vt)]}):null})})};var d=F(724),w={};w.styleTagTransform=xt(),w.setAttributes=et(),w.insert=R().bind(null,"head"),w.domAPI=P(),w.insertStyleElement=_t();var k=b()(d.A,w);const N=d.A&&d.A.locals?d.A.locals:void 0,L=({open:n,close:i,footer:u,header:m,className:A,style:j,children:D,width:Z="300px",mountNode:rt,position:lt="right",relative:kt})=>{const vt=["drawer-wrap",lt,n?"open":"",...A?.split(" ")??[]].filter(Boolean).map(gt=>N[gt]).join(" ");return(0,f.jsx)(Dr,{open:n,close:i,delay:250,hasMask:!0,relative:kt,mountNode:rt,className:"huxy-drawer",children:(0,f.jsx)("div",{className:vt,style:{width:Z,position:kt?"absolute":"fixed","--footerHeight":u?"44px":"0px","--headerHeight":m?"44px":"0px",...j},children:(0,f.jsxs)("div",{className:N["drawer-container"],children:[m?(0,f.jsxs)("div",{className:N["drawer-header"],children:[lt==="right"?(0,f.jsx)("span",{className:`link ${N["ico-close"]}`,onClick:gt=>i?.(gt)}):null,(0,f.jsx)("div",{children:m}),lt==="left"?(0,f.jsx)("span",{className:`link ${N["ico-close"]}`,onClick:gt=>i?.(gt)}):null]}):null,(0,f.jsx)("div",{className:N["drawer-content"],children:D}),u?(0,f.jsx)("div",{className:N["drawer-footer"],children:u}):null]})})})},it=(n,i,u="click")=>{(0,G.useEffect)(()=>{const m=j=>{const D=se(n)?n.current:n;D?.contains&&!D.contains(j.target)&&i(j)},A=typeof u=="string"?[u]:u;return A.map(j=>{document.addEventListener(j,m,!1)}),()=>{A.map(j=>{document.removeEventListener(j,m,!1)})}},[n,i,u])},At=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",jt=(n="")=>n.replace(/^\S/,i=>i.toUpperCase()),ut=n=>{if(me())return n=se(n)?n.current:n??document.body,n.getBoundingClientRect?.()},Kt=n=>{if(!me())return;const i=document.createElement("div");return i.innerHTML=n,i.children[0]},oe=(n,i={},u=!1)=>{if(Ue(n)){if(u){let m="";Object.keys(i).map(A=>{m+=`${A}: ${i[A]};`}),n.style=m;return}Object.keys(i).map(m=>n.style.setProperty(m,i[m]))}},ze=(n=350,i="ms")=>({ms:n*1,s:n*1e3,m:n*6e4,h:n*36e5,d:n*864e5})[i]??n,$e=(n=350,i="ms")=>new Promise(u=>setTimeout(u,ze(n,i))),_e=(n=100)=>{const i=Date.now();for(;Date.now()-i<=n;);},cr=$e,Cr=async(n,i=15)=>{if(!me())return;if(typeof n=="string"&&(n=Kt(n)),n=se(n)?n.current:n,!Ue(n))return{};const u=n.cloneNode(!0);oe(u,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(u),await cr(i);const m=ut(u);return n.parentNode.removeChild(u),m},we=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ke=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Er=(n,i)=>{i=`huxy-drop-arrow-${i}`;const u=n.getAttribute("class")??"";we.test(u)?n.setAttribute("class",u.replace(ke,i)):n.setAttribute("class",`${u} ${i}`)},Ir=async(n,i,u)=>{const{left:m,right:A,top:j,bottom:D}=ut(n),{width:Z,height:rt}=be(),{width:lt,height:kt}=await Cr(i);if(A<0||D<0||m>Z||j>rt)return{};if(u==="vertical"){const vt={left:m+"px",top:D+10+"px",right:"auto",bottom:"auto"};let gt="lt";m+lt>Z&&(vt.left=A-lt+"px",gt="rt"),D+10+kt>rt&&(vt.top=j-10-kt+"px",gt=gt==="lt"?"lb":"rb"),oe(i,vt),Er(i,gt)}else{const vt={left:A+10+"px",top:j+"px",right:"auto",bottom:"auto"};let gt="tl";A+10+lt>Z&&(vt.left=m-10-lt+"px",gt="tr"),j+kt>rt&&(vt.top=D-kt+"px",gt=gt==="tl"?"bl":"br"),oe(i,vt),Er(i,gt)}},Qr=(n,i,u="horizontal")=>{const m=ve(Ir),A=()=>m(n,i,u);window.addEventListener("scroll",A,!1),window.addEventListener("resize",A,!1);const j=()=>{window.removeEventListener("scroll",A),window.removeEventListener("resize",A),oe(i,{left:"",top:"",right:"",bottom:""})};return Ir(n,i,u),j},Vr=({open:n,delay:i=280,children:u,mountNode:m,style:A,...j})=>{const[D]=De(n,i);return(0,f.jsx)(Ie,{mountNode:m,children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{style:{...A,display:D?"block":"none"},...j,children:u})})})};var Ar=F(468),Re={};Re.styleTagTransform=xt(),Re.setAttributes=et(),Re.insert=R().bind(null,"head"),Re.domAPI=P(),Re.insertStyleElement=_t();var to=b()(Ar.A,Re);const c=Ar.A&&Ar.A.locals?Ar.A.locals:void 0,x=({trigger:n="click",type:i,dropList:u,className:m,children:A,targetProps:j,...D})=>{const[Z,rt]=(0,G.useState)(!1),lt=(0,G.useRef)(),kt=(0,G.useRef)(),vt=(0,G.useRef)();it(lt,Ht=>Z&&rt(!1),[...new Set(["click",n.toLowerCase()])]),(0,G.useEffect)(()=>()=>vt.current?.(),[]);const gt=Ht=>{Ht.preventDefault(),rt(!0),vt.current=Qr(lt.current,kt.current,i)},Gt={[`on${jt(n)}`]:gt},Xt=["drop-wrap",Z?"open":"",m].filter(Boolean).map(Ht=>c[Ht]).join(" "),Pt=At(u)?u:u?.(()=>rt(!1),Z);return(0,f.jsxs)("span",{ref:lt,className:c["drop-target"],...j,...Gt,children:[A,(0,f.jsx)(Vr,{open:Z,className:"huxy-drop",children:(0,f.jsx)("div",{ref:kt,className:Xt,...D,children:Pt})})]})},E=(n,i,u)=>{if(!me())return;u=se(u)?u.current:u??document.body;const m=document.createElement("span");m.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),i&&oe(m,i),m.innerText=(n??"").replace(/[\r\n]/g,""),u.appendChild(m);const A=m.getBoundingClientRect();return u.removeChild(m),A};var v=F(700),g={};g.styleTagTransform=xt(),g.setAttributes=et(),g.insert=R().bind(null,"head"),g.domAPI=P(),g.insertStyleElement=_t();var tt=b()(v.A,g);const ot=v.A&&v.A.locals?v.A.locals:void 0,at=({title:n,placement:i="topRight",children:u,ellipsis:m,className:A,...j})=>(0,f.jsx)("span",{className:`${ot[`huxy-tooltip-${i}`]}${A?` ${A}`:""}`,tooltip:n??u,...j,children:(0,f.jsx)("span",{className:m?ot.ellipsis:"",children:u})}),Q={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},dt=n=>{const{children:i,style:u}=n,m=typeof i=="string",A=m?i:i?.props?.title??i?.props?.children,j=(0,G.useRef)(),[D,Z]=(0,G.useState)(!0);return(0,G.useEffect)(()=>{if(j.current){const{width:rt}=E(A,null,j.current.parentNode),{width:lt}=ut(j.current),kt=~~rt>~~lt;kt!==D&&Z(kt)}},[A]),(0,f.jsx)("span",{ref:j,style:{display:"flex",width:"100%",...u},children:D?m?(0,f.jsx)(at,{...n,ellipsis:!0}):(0,f.jsx)("span",{style:Q,children:i}):m?i:i?.props?.children})},nt=n=>n.children==null?"":(0,f.jsx)(dt,{...n});class Ct extends G.default.Component{state={error:null};static getDerivedStateFromError(i){return{error:i}}componentDidCatch(i,u){const{errorReport:m}=this.props;typeof m=="function"&&m({error:i,info:u.componentStack})}render(){const{error:i}=this.state,{fallback:u,children:m}=this.props;return i?u?.(i)??i:m}}const Lt=n=>i=>{if(typeof i=="function"||typeof i?.render=="function")return(0,f.jsx)(i,{});if(typeof i=="string"){const u=n?.[i];return u?(0,f.jsx)(u,{}):(0,f.jsx)("i",{className:i})}return i??null},bt=n=>Lt(n),Ot=n=>({icon:i,defaultIcon:u})=>i?bt(n)(i):i===!1?null:u,Rt=["","webkit","moz","ms"],wt=n=>Rt.map(i=>i?`${i}FullscreenElement`:"fullscreenElement").find(i=>n[i]),mt=n=>Rt.map(i=>i?`${i}RequestFullscreen`:"requestFullscreen").find(i=>n[i]),Bt=n=>Rt.map(i=>i?`${i}ExitFullscreen`:"exitFullscreen").find(i=>n[i]),qt=Rt.map(n=>`${n}fullscreenchange`),ie=n=>{if(!me())return;n=se(n)?n.current:n??document.body;const i=wt(document),u=mt(n),m=Bt(document);document[i]?document[m]?.():n[u]?.()},de=n=>me()?(qt.map(i=>document.addEventListener(i,n,!1)),()=>qt.map(i=>document.removeEventListener(i,n,!1))):void 0,Oe=n=>(0,f.jsx)("i",{...n,children:"..."}),Fe=({panel:n,fullIcon:i=Oe,exitIcon:u=Oe,...m})=>{const A=se(n)?n.current:n,[j,D]=(0,G.useState)();(0,G.useEffect)(()=>{const rt=de(()=>{D(lt=>!lt)});return()=>rt()},[]);const Z=j?u:i;return(0,f.jsx)(Z,{onClick:rt=>ie(A),...m})};var Te=F(531),Ce={};Ce.styleTagTransform=xt(),Ce.setAttributes=et(),Ce.insert=R().bind(null,"head"),Ce.domAPI=P(),Ce.insertStyleElement=_t();var Rr=b()(Te.A,Ce);const qe=Te.A&&Te.A.locals?Te.A.locals:void 0,Sr=({gutter:n=10,className:i,overflow:u="hidden",...m},A)=>{const j=i?` ${i}`:"";let D=10;if(Array.isArray(n)){const Z=[...n];n=Z[0],D=Z[1]??Z[0]}return(0,f.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(D/2)}px`,overflow:u},children:(0,f.jsx)("div",{className:`row${j}`,...m,ref:A})})},he=(0,G.forwardRef)(Sr),lo=({rowProps:n,colProps:i,children:u,Row:m=he,Col:A=Nr})=>{const j=[];return G.Children.map(u,D=>{D&&(D.type?.description==="react.fragment"?j.push(...D.props.children):j.push(D))}),(0,f.jsx)(m,{...n,children:j.map((D,Z)=>(0,f.jsx)(A,{...i,...D.props.itemprops,children:D},`huuxy_grid_${Z}`))})},Ge=(n,i)=>(0,f.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...i}),ge=n=>{const{error:i={},info:u=""}=n||{},{message:m,stack:A,errMsg:j}=i;let D=j||A||i.toString();D=`${D}
${u}`.replace(/\r|\n|\r\n/g,"<br/>"),D=D.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),D=D.replace(/\s/g,"&nbsp;");const Z=m?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,f.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Ge(D,{style:{color:"red"}}),Z&&(0,f.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${Z}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Pe=({children:n,report:i})=>{const u=(0,G.useRef)();return u.current?.state&&(u.current.state.error=null),(0,f.jsx)(Ct,{ref:u,fallback:(m,A)=>ge({error:m,info:A}),errorReport:i,children:n})},Me=(n,i)=>Object.keys(i).map(u=>n.style[u]=i[u]),Le=(n,i)=>Object.keys(i).map(u=>n.style[u]=""),co={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},ur=({left:n,top:i,width:u,height:m})=>({left:`${n}px`,top:`${i}px`,width:`${u}px`,height:`${m}px`}),Pr=n=>(0,f.jsx)("i",{...n,children:"..."}),Ne=n=>{const{left:i,top:u}=ut(n),{width:m,height:A}=be(n);return{left:i,top:u,width:m,height:A}},uo=({panel:n,target:i,fullIcon:u=Pr,exitIcon:m=Pr})=>{n=se(n)?n.current:n||document.body;const[A,j]=(0,G.useState)(),D=(0,G.useRef)();(0,G.useEffect)(()=>{D.current={...co,...ur(Ne(n))}},[n]);const Z=(lt,kt)=>{if(lt){const vt=ur(Ne((typeof i=="function"?i:()=>document.getElementsByClassName(i)[0])()));Me(kt,D.current),setTimeout(()=>{Me(kt,vt)},0)}else Le(kt,D.current);j(lt)},rt=A?m:u;return(0,f.jsx)(rt,{onClick:lt=>Z(!A,n)})};var fe=F(482),Xe={};Xe.styleTagTransform=xt(),Xe.setAttributes=et(),Xe.insert=R().bind(null,"head"),Xe.domAPI=P(),Xe.insertStyleElement=_t();var Kr=b()(fe.A,Xe);const Ee=fe.A&&fe.A.locals?fe.A.locals:void 0,eo=({open:n,close:i,hasMask:u=!0,cancelText:m="\u53D6\u6D88",submit:A,submitText:j="\u786E\u5B9A",title:D="Modal \u5F39\u7A97",className:Z,children:rt,delay:lt=250,...kt})=>{const vt=["modal-wrap",n?"open":"",...Z?.split(" ")??[]].filter(Boolean).map(gt=>Ee[gt]).join(" ");return(0,f.jsx)(Dr,{open:n,close:i,delay:lt,hasMask:u,className:"huxy-modal",children:(0,f.jsx)("div",{className:vt,...kt,children:(0,f.jsxs)("div",{className:Ee["modal-container"],children:[(0,f.jsx)("div",{className:Ee["modal-header"],children:D}),(0,f.jsx)("div",{className:Ee["modal-content"],children:rt}),(0,f.jsxs)("div",{className:Ee["modal-footer"],children:[(0,f.jsx)("div",{className:`${Ee.btn} ${Ee.left}`,onClick:gt=>i?.(gt),children:m}),(0,f.jsx)("div",{className:`${Ee.btn} ${Ee.right}`,onClick:gt=>A?.(gt),children:j})]})]})})})};var ro=F(670),dr={};dr.styleTagTransform=xt(),dr.setAttributes=et(),dr.insert=R().bind(null,"head"),dr.domAPI=P(),dr.insertStyleElement=_t();var Lo=b()(ro.A,dr);const Bo=ro.A&&ro.A.locals?ro.A.locals:void 0,qr=({global:n,absolute:i})=>(0,f.jsx)("div",{className:`spinner${n?" global":""}${i?" absolute":""}`,children:(0,f.jsx)("figure",{className:"spinning"})});var Mr=F(945),Lr={};Lr.styleTagTransform=xt(),Lr.setAttributes=et(),Lr.insert=R().bind(null,"head"),Lr.domAPI=P(),Lr.insertStyleElement=_t();var Ho=b()(Mr.A,Lr);const Br=Mr.A&&Mr.A.locals?Mr.A.locals:void 0,go=n=>n?.filter?.(i=>typeof i=="function"),Wo=(n,i)=>{const u=(0,G.useRef)(),{loading:m,title:A,plugins:j,children:D,className:Z,...rt}=n,lt=go(j),kt=lt?.length,vt=Z?` ${Z}`:"",gt=se(i)?i:u;return(0,f.jsxs)("div",{className:`${Br.panel}${vt}`,...rt,ref:gt,children:[(A||kt)&&(0,f.jsxs)("div",{className:Br["panel-header"],children:[A&&(0,f.jsx)("h4",{className:Br["panel-title"],children:A}),kt&&(0,f.jsx)("div",{className:Br["panel-plugins"],children:lt.map((Gt,Xt)=>(0,f.jsx)("span",{className:`link ${Br.link}`,children:(0,f.jsx)(Gt,{panel:gt})},Xt))})]}),(0,f.jsx)("div",{className:Br["panel-body"],children:D}),m&&(0,f.jsx)(qr,{})]})},yo=(0,G.forwardRef)(Wo),oo=n=>nr(n)==="array",Yo=n=>oo(n)&&!!n.length,bo=({to:n,preventDefault:i,stopPropagation:u,...m})=>i?(0,f.jsx)("span",{...m}):(0,f.jsx)("a",{href:n,...m}),vo=({item:n,...i})=>(0,f.jsx)("ul",{...i}),wo=(n,...i)=>{const u={};return Object.keys(n).filter(Boolean).map(m=>{u[m]=A=>n[m](A,...i)}),u},ko=({data:n=[],events:i={},List:u=vo,Link:m=bo,leftIcon:A,rightIcon:j,isHorizontal:D,isCollapsed:Z,level:rt=0,parentOpen:lt=!0})=>{const kt=Z&&!rt,vt=!D&&!Z&&!lt;return n.map(gt=>{const{name:Gt,path:Xt,icon:Pt,rightIcon:Ht,active:Mt,open:te,children:Ae,linkProps:Be}=gt,He=Yo(Ae),pe=gt.id||`${Xt}${gt.childSameRouteLevel??""}`,We=kt?gt.title??Gt:void 0,Je=vt?"hidden":"",Ze=Pt??A,Se=Ht??j,zr=Ze?(0,f.jsx)("div",{className:"node-left-icon",children:Ze===!0?(0,f.jsx)("i",{className:"default-left-icon"}):Ze}):null,pr=Gt?(0,f.jsx)("div",{className:"node-text",children:(0,f.jsx)("span",{children:Gt})}):null;if(He){const on=wo(i,gt,rt),po=[Je,te?"open":""].filter(Boolean).join(" ");return(0,f.jsxs)("li",{className:po,"has-children":"true",...on,children:[(0,f.jsxs)(m,{title:We,className:`link${Mt?" active":""}`,to:Xt,preventDefault:!0,stopPropagation:!1,...Be,children:[zr,pr,Se?(0,f.jsx)("div",{className:"node-right-icon",children:Se===!0?(0,f.jsx)("i",{className:"default-right-icon"}):Se}):null]}),(0,f.jsx)(u,{item:gt,children:ko({data:Ae,events:i,List:u,Link:m,leftIcon:A,rightIcon:j,isHorizontal:D,isCollapsed:Z,level:rt+1,parentOpen:!!te})})]},pe)}return(0,f.jsx)("li",{className:Je,children:(0,f.jsxs)(m,{title:We,className:`link${Mt?" active":""}`,to:Xt,...Be,children:[zr,pr]})},pe)})},ho=ko,Uo=(n,...i)=>(0,f.jsx)("div",{"v-html":n,...i});var hr=F(473),Hr={};Hr.styleTagTransform=xt(),Hr.setAttributes=et(),Hr.insert=R().bind(null,"head"),Hr.domAPI=P(),Hr.insertStyleElement=_t();var Co=b()(hr.A,Hr);const gn=hr.A&&hr.A.locals?hr.A.locals:void 0,fo=n=>(0,f.jsx)("div",{style:{padding:"6px 15px"},children:n}),Eo=({activekey:n,tabs:i=[],switchTab:u,trackColor:m,flex:A,...j},D)=>{const[Z,rt]=(0,G.useState)(n??i[0]?.key),[lt,kt]=(0,G.useState)({}),vt=(0,G.useRef)({}),gt=(0,G.useRef)();(0,G.useEffect)(()=>{const Pt=vt.current[Z];Pt&&Gt(Pt)},[]);const Gt=Pt=>{const{left:Ht,width:Mt}=ut(Pt),te=ut(gt.current).left;kt({left:Ht-te,width:Mt})},Xt=(Pt,Ht)=>{Pt.stopPropagation(),rt(Ht),typeof u=="function"&&u(Ht),Gt(Pt.currentTarget)};return(0,f.jsxs)("div",{className:"tabs-header-wrap",...j,ref:D,children:[(0,f.jsx)("ul",{className:`tabs-header${A?" flex":""}`,ref:gt,children:i.map(Pt=>(0,f.jsx)("li",{ref:Ht=>vt.current[Pt.key]=Ht,className:`th-item${Z===Pt.key?" active":""}`,onClick:Ht=>Xt(Ht,Pt.key),children:typeof Pt.renderTabs=="function"?Pt.renderTabs(Pt,Z===Pt.key):fo(Pt.value)},Pt.key))}),(0,f.jsx)("div",{className:"th-track",style:{...lt,color:m}})]})},Vo=(0,G.forwardRef)(Eo),Ao=(n,i,u="id",m="children")=>{if(!oo(n))return null;const A=j=>{for(let D=0,Z=j.length;D<Z;D++){const rt=j[D];if(rt[u]===i)return[rt];if(oo(rt[m])){const lt=A(rt[m]);if(lt)return[rt].concat(lt)}}};return A(n)},Ko=n=>++n,no=()=>{const[,n]=(0,G.useState)(0);return(0,G.useCallback)(()=>n(Ko),[])},So=n=>{const{children:i,open:u}=n;let m=0;if(u&&i?.length){m=i.length;let A=0;return i.map(j=>A+=So(j)),m+A}return m},jo=({item:n,style:i,...u})=>(0,f.jsx)("ul",{style:{...i,"--count":So(n)},...u});var ao=F(133),jr={};jr.styleTagTransform=xt(),jr.setAttributes=et(),jr.insert=R().bind(null,"head"),jr.domAPI=P(),jr.insertStyleElement=_t();var yn=b()(ao.A,jr);const qo=ao.A&&ao.A.locals?ao.A.locals:void 0,Go=n=>(0,f.jsx)("ul",{...n}),_o=(n,i)=>n?jo:({item:u,...m})=>(0,f.jsx)(Go,{className:i==="right"?"left":"",...m}),Xo=n=>{const{data:i=[],collapsed:u=!1,type:m="vertical",Link:A,width:j,bgColor:D,itemHeight:Z,collapsedWidth:rt,itemPadding:lt,style:kt,className:vt,...gt}=n,Gt=(0,G.useRef)(),Xt=(0,G.useRef)();(0,G.useEffect)(()=>()=>clearTimeout(Gt.current),[]);const Pt=no(),Ht=m==="horizontal",Mt=!Ht&&u,te={onClick:(Je,Ze)=>{if(Je.stopPropagation(),!Ht&&!Mt){const Se=Ao(i,Ze.path,"path"),zr=Se[Se.length-1];zr.open=!zr.open,Pt()}},onMouseEnter:(Je,Ze,Se)=>{Mt&&!Se&&(clearTimeout(Gt.current),Xt.current.style.width="var(--maxWidth)")},onMouseLeave:(Je,Ze,Se)=>{Mt&&!Se&&(Gt.current=setTimeout(()=>Xt.current.style.width="",200))}},Ae=(Ht?["huxy-horizontal-tree",vt]:["huxy-tree",vt,Mt?"collapsed":""]).filter(Boolean).join(" "),{float:Be,...He}=gt?.style??{},pe={"--bgColor":D,"--itemHeight":Z,"--nodeListWidth":j,...He};Ht?(pe["--itemPadding"]=lt,pe["--nodeFloat"]=Be):(pe["--width"]=j,pe["--collapsedWidth"]=rt);const We=_o(!Ht&&!Mt,Be);return(0,f.jsx)("div",{ref:Xt,className:Ae,style:pe,...gt,children:(0,f.jsx)("div",{className:"huxy-tree-track",children:(0,f.jsx)("ul",{className:"huxy-tree-root",children:ho({data:i,events:te,List:We,Link:A,leftIcon:!0,rightIcon:!0,isHorizontal:Ht,isCollapsed:Mt})})})})},zo=()=>{const[n,i]=Fr(be());return(0,G.useEffect)(()=>{const u=()=>i(be());return window.addEventListener("resize",u,!1),()=>window.removeEventListener("resize",u,!1)},[]),n},$o=({menu:n,curName:i,Link:u})=>n.map(m=>{const{path:A,name:j,open:D,children:Z}=m,rt=j===i;return Z?.length?(0,f.jsxs)("li",{className:D?"open":"",children:[(0,f.jsx)(u,{to:{query:{name:j}},className:`link${rt?" active":""}`,preventDefault:!0,children:(0,f.jsx)("span",{children:j})}),(0,f.jsx)("ul",{children:(0,f.jsx)($o,{menu:Z,curName:j,Link:u})})]},A||j):(0,f.jsx)("li",{children:(0,f.jsx)(u,{to:{query:{name:j}},className:`link${rt?" active":""}`,children:(0,f.jsx)("span",{children:j})})},A||j)}),Oo=$o,Jo=(n={})=>{const i={};return Object.keys(n).map(u=>{n[u]!=null&&(i[u]=n[u])}),i},Fo=(n=0,i)=>{me()&&(i=se(i)?i.current:i??window,i.scrollTo?.({top:n,behavior:"smooth"}))},Zo=(n=()=>{},i=60)=>{let u=null;return function(...m){u||(n.apply(this,m),u=setTimeout(()=>u=null,i))}},io=(n,i=null,u=!1)=>[...n||[]].sort((m,A)=>{const j=i?m[i]:m,D=i?A[i]:A;return!isNaN(Number(j))&&!isNaN(Number(j))?u?D-j:j-D:typeof j=="string"&&typeof D=="string"?u?D.localeCompare(j):j.localeCompare(D):typeof j=="string"&&typeof D=="number"?u?-1:1:typeof j=="number"||typeof j=="string"?u?1:-1:u?-1:1}),Qo=()=>me()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),To=({curName:n,itemList:i})=>{const u=(0,G.useRef)(!1),m=(0,G.useRef)(""),[A,j]=(0,G.useState)(n);return(0,G.useEffect)(()=>{if(i.current=Jo(i.current),!n){const rt=Object.keys(i.current).map(lt=>({name:lt,offsetTop:i.current[lt]?.offsetTop??0}));j(rt[0]?.name)}let D=0,Z=0;if(m.current!==n){m.current=n;const rt=i.current[n];u.current=!0,rt?(Fo(rt.offsetTop),D=setTimeout(()=>u.current=!1,1050)):Z=setTimeout(()=>{window.scrollTo?.({top:i.current[n]?.offsetTop??0,behavior:"instant"}),D=setTimeout(()=>u.current=!1,1050)},550)}return()=>{clearTimeout(D),clearTimeout(Z),u.current=!1}},[n]),(0,G.useEffect)(()=>{const D=Zo(()=>{if(!u.current){const Z=io(Object.keys(i.current).map(rt=>({name:rt,offsetTop:i.current[rt]?.offsetTop??0})),"offsetTop",!0).find(rt=>rt.offsetTop<Qo())?.name;m.current!==Z&&(m.current=Z,j(Z))}});return window.addEventListener("scroll",D,!1),()=>window.removeEventListener("scroll",D,!1)},[]),[A]},tn=/!\[.*\]\((.*)\)/g,No=async(n,i,u)=>{const m={};for(let A=0,j=n.length;A<j;A++){const D=n[A],Z=D.slice(2);m[D]=await u({folder:i,name:Z})}return m},Wr=async(n,{folder:i},u)=>{const m=[...n.matchAll(tn)].filter(Boolean).map(A=>A[1]);if(m?.length){const A=await No(m,i,u);m.map(j=>{n=n.replace(j,A[j])})}return n},en=({item:n,marked:i,getContext:u})=>{const[m,A]=(0,G.useState)("");return(0,G.useEffect)(()=>{(async()=>{try{const j=await u({...n,type:".md"}),D=await Wr(j,n,u),Z=typeof i=="function"?i.parse(D):Z;A(Z)}catch(j){A(j?.message)}})()},[]),(0,f.jsxs)("div",{className:"huxy-content",children:[Ge(m),!m&&(0,f.jsx)(qr,{global:!0})]})},fr=({router:n,curName:i,context:u,marked:m,getContext:A})=>{const j=(0,G.useRef)({}),[D]=To({curName:i,itemList:j});return(0,G.useEffect)(()=>{D&&n.push({query:{name:D}})},[D]),(0,f.jsx)("div",{className:"huxy-anchor-page",children:u.map((Z,rt)=>(0,f.jsxs)("div",{className:"huxy-anchor-item",ref:lt=>j.current[Z.name]=lt,children:[(0,f.jsx)("h2",{children:`${Z.name}`}),(0,f.jsx)(en,{item:Z,marked:m,getContext:A})]},Z.name))})},rn=n=>{const i=[];return n.map(u=>{const[m,A]=u.name.split("/"),j=i.find(D=>D.name===m);j?j.children.push({name:A,folder:m}):i.push({name:m,children:[{name:A,folder:m}]})}),i};var Gr=F(55),_r={};_r.styleTagTransform=xt(),_r.setAttributes=et(),_r.insert=R().bind(null,"head"),_r.domAPI=P(),_r.insertStyleElement=_t();var bn=b()(Gr.A,_r);const vn=Gr.A&&Gr.A.locals?Gr.A.locals:void 0,Do=(n,i,u)=>({sidebar:n.find(m=>m.name===i)?.children??[],listEle:n.map(({name:m,children:A})=>(0,f.jsx)("li",{children:(0,f.jsx)(u,{to:{query:{folder:m,name:A[0]?.name}},className:`link${m===i?" active":""}`,children:(0,f.jsx)("span",{children:m})})},m))}),Xr=n=>{const{params:i,router:u,Link:m,listFiles:A,getContext:j,marked:D,title:Z,routeLink:rt,routeName:lt,className:kt,style:vt}=n,{folder:gt,name:Gt}=i,{width:Xt}=zo(),[Pt,Ht]=(0,G.useState)([]),[Mt,te]=(0,G.useState)(!1);(0,G.useEffect)(()=>{(async()=>{const pe=await A(),We=rn(pe);Ht(We),gt||u.push({query:{folder:We[0]?.name,name:We[0]?.children[0]?.name}})})()},[]);const Ae=Xt<=1024,{sidebar:Be,listEle:He}=Do(Pt,gt,m);return(0,f.jsxs)("div",{className:`huxy-doc-frame ${kt??""}`,style:vt,children:[(0,f.jsxs)("div",{className:"huxy-doc-header",children:[(0,f.jsx)("div",{className:"huxy-doc-banner",children:Z||"\u6587\u6863\u7CFB\u7EDF"}),(0,f.jsx)("ul",{className:"huxy-doc-nav",children:Ae?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("li",{className:"huxy-doc-collapsed",children:(0,f.jsx)("span",{className:"link",onClick:pe=>{pe.stopPropagation(),te(!Mt)},children:(0,f.jsx)(Qe,{type:Mt?"right":""})})}),(0,f.jsx)(L,{open:Mt,close:()=>te(!1),width:"220px",children:(0,f.jsx)("ul",{className:"huxy-doc-menu-drawer",children:He})})]}):He}),rt?(0,f.jsx)("div",{className:"huxy-doc-back",children:(0,f.jsx)(m,{to:rt,children:(0,f.jsx)("span",{children:lt??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,f.jsxs)("div",{className:"huxy-doc-container",children:[(0,f.jsx)("div",{className:"huxy-doc-main-page",children:(0,f.jsx)(fr,{router:u,curName:Gt,context:Be,marked:D,getContext:j})}),(0,f.jsx)("div",{className:"huxy-doc-menu",children:(0,f.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,f.jsx)(Oo,{menu:Be,curName:Gt,Link:m})})})]})]})}})();var s=C.Rt,_=C.L8,B=C.FN,ht=C.fv,$=C._s,S=C.ey,H=C.gy,p=C.tH,T=C.PQ,z=C.xA,U=C.lz,W=C.Xb,K=C.n1,ft=C.mk,Et=C.Bl,Tt=C.aF,yt=C.Zk,Nt=C.ZL,Ut=C.fI,Qt=C.y$,I=C.tu,Yt=C.m_,Vt=C.PH,ne=C.mK,le=C.J0,xr=C.B6,gr=C.fz,$r=C.Iu},90246:function(ye,Jt,St){var Y;St.d(Jt,{N_:function(){return C},aM:function(){return _},lq:function(){return B},rd:function(){return ht}});var l=St(63696),Ft={670:($,S,H)=>{H.d(S,{A:()=>K});var p=H(758),T=H.n(p),z=H(935),U=H.n(z),W=U()(T());W.push([$.id,`@keyframes before {
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
`,""]),W.locals={};const K=W},845:($,S,H)=>{H.d(S,{A:()=>K});var p=H(758),T=H.n(p),z=H(935),U=H.n(z),W=U()(T());W.push([$.id,`.Iuy_e {
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
`,""]),W.locals={link:"Iuy_e",active:"D3oJg"};const K=W},935:$=>{$.exports=function(S){var H=[];return H.toString=function(){return this.map(function(p){var T="",z=typeof p[5]<"u";return p[4]&&(T+="@supports (".concat(p[4],") {")),p[2]&&(T+="@media ".concat(p[2]," {")),z&&(T+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),T+=S(p),z&&(T+="}"),p[2]&&(T+="}"),p[4]&&(T+="}"),T}).join("")},H.i=function(p,T,z,U,W){typeof p=="string"&&(p=[[null,p,void 0]]);var K={};if(z)for(var ft=0;ft<this.length;ft++){var Et=this[ft][0];Et!=null&&(K[Et]=!0)}for(var Tt=0;Tt<p.length;Tt++){var yt=[].concat(p[Tt]);z&&K[yt[0]]||(typeof W<"u"&&(typeof yt[5]>"u"||(yt[1]="@layer".concat(yt[5].length>0?" ".concat(yt[5]):""," {").concat(yt[1],"}")),yt[5]=W),T&&(yt[2]&&(yt[1]="@media ".concat(yt[2]," {").concat(yt[1],"}")),yt[2]=T),U&&(yt[4]?(yt[1]="@supports (".concat(yt[4],") {").concat(yt[1],"}"),yt[4]=U):yt[4]="".concat(U)),H.push(yt))}},H}},758:$=>{$.exports=function(S){return S[1]}},335:($,S,H)=>{var p,T=H(649),z=Symbol.for("react.element"),U=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,K=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ft={key:!0,ref:!0,__self:!0,__source:!0};function Et(Tt,yt,Nt){var Ut,Qt={},I=null,Yt=null;Nt!==void 0&&(I=""+Nt),yt.key!==void 0&&(I=""+yt.key),yt.ref!==void 0&&(Yt=yt.ref);for(Ut in yt)W.call(yt,Ut)&&!ft.hasOwnProperty(Ut)&&(Qt[Ut]=yt[Ut]);if(Tt&&Tt.defaultProps)for(Ut in yt=Tt.defaultProps,yt)Qt[Ut]===void 0&&(Qt[Ut]=yt[Ut]);return{$$typeof:z,type:Tt,key:I,ref:Yt,props:Qt,_owner:K.current}}p=U,S.jsx=Et,S.jsxs=Et},85:($,S,H)=>{$.exports=H(335)},591:$=>{var S=[];function H(z){for(var U=-1,W=0;W<S.length;W++)if(S[W].identifier===z){U=W;break}return U}function p(z,U){for(var W={},K=[],ft=0;ft<z.length;ft++){var Et=z[ft],Tt=U.base?Et[0]+U.base:Et[0],yt=W[Tt]||0,Nt="".concat(Tt," ").concat(yt);W[Tt]=yt+1;var Ut=H(Nt),Qt={css:Et[1],media:Et[2],sourceMap:Et[3],supports:Et[4],layer:Et[5]};if(Ut!==-1)S[Ut].references++,S[Ut].updater(Qt);else{var I=T(Qt,U);U.byIndex=ft,S.splice(ft,0,{identifier:Nt,updater:I,references:1})}K.push(Nt)}return K}function T(z,U){var W=U.domAPI(U);W.update(z);var K=function(ft){if(ft){if(ft.css===z.css&&ft.media===z.media&&ft.sourceMap===z.sourceMap&&ft.supports===z.supports&&ft.layer===z.layer)return;W.update(z=ft)}else W.remove()};return K}$.exports=function(z,U){U=U||{},z=z||[];var W=p(z,U);return function(K){K=K||[];for(var ft=0;ft<W.length;ft++){var Et=W[ft],Tt=H(Et);S[Tt].references--}for(var yt=p(K,U),Nt=0;Nt<W.length;Nt++){var Ut=W[Nt],Qt=H(Ut);S[Qt].references===0&&(S[Qt].updater(),S.splice(Qt,1))}W=yt}}},128:$=>{var S={};function H(T){if(typeof S[T]>"u"){var z=document.querySelector(T);if(window.HTMLIFrameElement&&z instanceof window.HTMLIFrameElement)try{z=z.contentDocument.head}catch{z=null}S[T]=z}return S[T]}function p(T,z){var U=H(T);if(!U)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");U.appendChild(z)}$.exports=p},51:$=>{function S(H){var p=document.createElement("style");return H.setAttributes(p,H.attributes),H.insert(p,H.options),p}$.exports=S},855:($,S,H)=>{function p(T){var z=H.nc;z&&T.setAttribute("nonce",z)}$.exports=p},740:$=>{function S(T,z,U){var W="";U.supports&&(W+="@supports (".concat(U.supports,") {")),U.media&&(W+="@media ".concat(U.media," {"));var K=typeof U.layer<"u";K&&(W+="@layer".concat(U.layer.length>0?" ".concat(U.layer):""," {")),W+=U.css,K&&(W+="}"),U.media&&(W+="}"),U.supports&&(W+="}");var ft=U.sourceMap;ft&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ft))))," */")),z.styleTagTransform(W,T,z.options)}function H(T){if(T.parentNode===null)return!1;T.parentNode.removeChild(T)}function p(T){if(typeof document>"u")return{update:function(){},remove:function(){}};var z=T.insertStyleElement(T);return{update:function(U){S(z,T,U)},remove:function(){H(z)}}}$.exports=p},656:$=>{function S(H,p){if(p.styleSheet)p.styleSheet.cssText=H;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(H))}}$.exports=S},649:$=>{var S=p=>{var T={};return st.d(T,p),T},H=p=>()=>p;$.exports=Y||(Y=St.t(l,2))}},$t={};function st($){var S=$t[$];if(S!==void 0)return S.exports;var H=$t[$]={id:$,exports:{}};return Ft[$](H,H.exports,st),H.exports}st.n=$=>{var S=$&&$.__esModule?()=>$.default:()=>$;return st.d(S,{a:S}),S},st.d=($,S)=>{for(var H in S)st.o(S,H)&&!st.o($,H)&&Object.defineProperty($,H,{enumerable:!0,get:S[H]})},st.o=($,S)=>Object.prototype.hasOwnProperty.call($,S),st.nc=void 0;var F={};(()=>{st.d(F,{N_:()=>Vr,vY:()=>to,aM:()=>Re,lq:()=>Ar,rd:()=>cr});var $=st(649);const S=c=>Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),H=c=>S(c)==="array",p=c=>S(c)==="object",T=c=>c?.$$typeof&&typeof c.$$typeof=="symbol"&&c.$$typeof.description==="react.element",z=c=>c?.__v_isVNode,U=(c,x)=>Object.prototype.hasOwnProperty.call(c??{},x),W=c=>{if(!H(c)&&!p(c))return c;const x=H(c)?[]:{};for(const E in c)if(U(c,E)){const v=c[E];x[E]=T(v)||z(v)||typeof v!="object"?v:v!==c?W(v):"cyclic"}else Object.setPrototypeOf(x,{[E]:c[E]});return x},K=W,ft=c=>S(c)==="function",Et=c=>S(c)==="promise"||p(c)&&ft(c.then),Tt=(c,x=3e5,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Et(c))return{};let v=null,g=null;return{promiseFn:new Promise((tt,ot)=>{v=(at="canceled")=>{clearTimeout(g),tt({canceled:!0,errMsg:at})},x&&(x=typeof x!="number"?12e4:x,g=setTimeout(()=>v(E),x)),c.then(at=>{clearTimeout(g),tt({result:at,errMsg:!1})}).catch(at=>{clearTimeout(g),ot(at)})}),cancelFn:v}},yt=c=>c?c.charAt(c.length-1)==="/"?c.slice(0,-1):c:"";var Nt=st(85);const Ut=(c,x)=>(0,Nt.jsx)("div",{dangerouslySetInnerHTML:{__html:c},...x}),Qt=c=>{const{error:x={},info:E=""}=c||{},{message:v,stack:g,errMsg:tt}=x;let ot=tt||g||x.toString();ot=`${ot}
${E}`.replace(/\r|\n|\r\n/g,"<br/>"),ot=ot.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),ot=ot.replace(/\s/g,"&nbsp;");const at=v?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Nt.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Ut(ot,{style:{color:"red"}}),at&&(0,Nt.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${at}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},I=c=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(c),Yt=()=>{const c={};return{on:(x,E)=>{c[x]||(c[x]=[]),c[x].indexOf(E)===-1&&c[x].push(E)},emit:(x,E)=>{c[x]&&c[x].map(v=>v(E))},off:(x,E=null)=>{if(c[x]){if(typeof E!="function")return delete c[x];const v=c[x].indexOf(E);v>-1&&(c[x].splice(v,1),c[x].length||delete c[x])}}}},Vt=c=>{const x={};for(let E in c)U(c,E)||(x[E]=c[E]);return x},ne=(c,x)=>{if(!p(c))return x;if(!p(x))return c;const E={...Vt(c),...Vt(x)},v={...c,...x};return Object.keys(E).map(g=>{Object.setPrototypeOf(v,{[g]:E[g]})}),v},le=()=>{const{on:c,emit:x,off:E}=Yt(),v={};return{getState:g=>K(v[g]),setState:(g,tt=!1)=>{if(typeof g=="function"&&(g=g(K(v))),!p(g))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const ot=K(g);Object.keys(ot).map(at=>{const Q=v[at],dt=ot[at],nt=p(dt)&&p(Q)?ne(Q,dt):dt;!tt&&x(at,nt),v[at]=nt})},subscribe:(g,tt)=>(c(g,tt),()=>E(g,tt)),unsubscribe:E,clean:g=>{typeof g=="string"?v[g]=void 0:Array.isArray(g)?g.map(tt=>v[tt]=void 0):Object.keys(v).map(tt=>v[tt]=void 0)}}},xr=c=>(x,E)=>{const[v,g]=(0,$.useState)(()=>{const Q=c?.getState(x);return Q!==void 0?Q:(E!==void 0&&c?.setState({[x]:E},!0),E)}),tt=(0,$.useCallback)(Q=>c?.setState({[x]:typeof Q=="function"?Q(c?.getState(x)):Q}),[]),ot=(0,$.useCallback)(Q=>c?.subscribe(x,Q),[]),at=(0,$.useCallback)((Q=Q)=>c?.clean(Q),[]);return(0,$.useEffect)(()=>{c?.subscribe(x,Q=>g(Q))},[]),[v,tt,ot,at]},gr=le(),$r=xr(gr),f=Yt(),J=Yt(),b="push-emitter",q="replace-emitter",P="useRoute-emitter",V={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},R="/404",M={getState:()=>history.state,go:c=>history.go(c),forward:()=>history.forward(),back:()=>history.back()},et=(c,x,E,v,g=[])=>{const tt=Q=>{for(let dt=0,nt=Q.length;dt<nt;dt++){const Ct=Q[dt],Lt=Ct[v].split("?")[0];if(new RegExp("^"+Lt.replace(/:[^/]+/g,"[^/]+")+"$").test(x)&&!Ct.childSameRouteLevel)return Ct;if(H(Ct[E])){const bt=tt(Ct[E]);if(bt)return bt}}},ot=tt(c);if(!ot)return R;const{redirect:at}=ot;return at?I(at)?at:g.includes(at)?g:(g.push(at),et(c,at.split("?")[0],E,v,g)):g[g.length-1]},zt=(c,x,E,v,g)=>{if(!H(c))return null;const tt=nt=>{const Ct=nt.split("/"),Lt=x.split("/"),bt={};return Ct.map((Ot,Rt)=>Ot.indexOf(":")===0&&(bt[Ot.slice(1)]=Lt[Rt])),bt},ot=(nt,Ct)=>{const Lt=[],bt=Ct.split("/:")[0];for(let Ot=0,Rt=nt.length;Ot<Rt;Ot++){const wt=nt[Ot];if(wt[g]===bt){wt.active=!0;const{name:mt,title:Bt,icon:qt,params:ie}=wt;Lt.push({name:mt,title:Bt,icon:qt,params:ie,[g]:bt})}else if(Ct.indexOf(`${wt[g]}/`)===0){wt.active=!0;const mt=tt(wt[g]),Bt=Object.keys(mt).map(Fe=>mt[Fe]).join("/"),{name:qt,title:ie,icon:de}=wt,Oe=Bt?`${bt}/${Bt}`:wt[g];Lt.push({name:qt,title:ie,icon:de,[g]:Oe,params:{...wt.params,...mt}})}else if(wt[g]===Ct){wt.active=!0;const mt=tt(wt[g]),{[v]:Bt,...qt}=wt;Lt.push({...qt,[g]:x,params:{...qt.params,...E,...mt}})}}return Lt},at=(nt,Ct)=>{for(let Lt=0,bt=nt.length;Lt<bt;Lt++){const Ot=nt[Lt];if(Ct.indexOf(`${Ot[g]}/`)===0){Ot.active=!0;return}}},Q=nt=>{for(let Ct=0,Lt=nt.length;Ct<Lt;Ct++){const bt=nt[Ct],Ot=(bt[g]||"").split("?")[0];if(Ot===x){if(bt.childSameRouteLevel){bt.active=!0,bt.open=!0;const{[v]:mt,...Bt}=bt;return[Bt,...Q(bt[v])]}bt.hideMenu&&at(nt,bt.parentPath||Ot),bt.active=!0;const{[v]:Rt,...wt}=bt;return[{...wt,params:{...wt.params,...E}}]}if(new RegExp("^"+Ot.replace(/:[^/]+/g,"[^/]+")+"$").test(x))return ot(nt,Ot);if(H(bt[v])){const Rt=Q(bt[v]);if(Rt){bt.active=!0,bt.open=!0;const{[v]:wt,...mt}=bt;return[mt,...Rt]}}}},dt=Q(c)||[];return{result:c,current:dt}},_t=(c,x,E)=>c.filter(v=>v.hideMenu||v[E].indexOf("/:")>-1?!1:(H(v[x])&&(v[x]=_t(v[x],x,E)),!0)),Wt=(c,x,E,v="children",g="path")=>{const tt=et(c,x,v,g);if(tt)return{redirect:tt};const{result:ot,current:at}=zt(c,x,E,v,g),Q=_t(ot,v,g);return{current:at,menu:Q}},xt=c=>H(c)&&!!c.length,Dt=(c,x)=>{const E=["#/","/"],v=E[!!x-0];if(!c||E.includes(c))return v;const g=c.charAt(c.length-1)==="/"?c.slice(0,-1):c;return x||g.indexOf("#/")>-1?g:`#${g}`},It=(c,x,E,v=!1)=>{const g=Dt(x,E);return v?g:E?c&&g==="/"?c:`${c}${g}`:c?`${c}/${g}`:g},ae=(c,x,E,v,g,tt)=>{if(!xt(c))return c;const ot=(at,Q="",dt=0)=>at.filter(nt=>!nt.denied).map(nt=>{if(!tt&&!nt.exact&&!I(nt[v])){(!nt[v]||nt[v]==="javascript:;")&&(nt[v]="");const Ct=nt[v].charAt(0)==="/"&&Q.charAt(Q.length-1)==="/"?nt[v].slice(1):nt[v].charAt(0)!=="/"&&Q.charAt(Q.length-1)!=="/"?`/${nt[v]}`:nt[v];nt[v]=Q?Q+Ct:It(g,Ct,x)}if(nt.redirect&&!I(nt.redirect)&&(nt.redirect=It(g,nt.redirect,x)),xt(nt[E])&&(nt[E]=ot(nt[E],nt[v],dt+1),!nt.redirect)){const Ct=nt[E].findIndex(Lt=>Lt[v]===nt[v]);Ct&&(nt.redirect=nt[E][0][v]),Ct>-1&&(nt.childSameRouteLevel=dt+1)}return nt});return ot(c)},Zt=c=>{if(!p(c))return"";const x=[];return Object.keys(c).map((E,v)=>{const g=v>0?"&":"?";x.push(`${g}${E}=${c[E]}`)}),x.join("")},Qe=(c="")=>{const[x,E]=c.split("?");if(E){const v={};return E.split("&").map(g=>{const[tt,ot]=g.split("=");v[tt]=ot}),{path:x,params:v}}return{path:x}},G=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},tr=(c,x)=>{for(let E=c.length-1,v;v=c[E--];){const{title:g,name:tt}=v;if(typeof g=="string"&&g.length)return document.title=g;if((g==null||g===!0)&&tt)return document.title=x?`${tt}-${x}`:tt;if(x)return document.title=x}},yr=c=>{const{pathname:x,search:E,hash:v}=location;if(c){const at=Dt(x,c),Q=decodeURIComponent(`${at}${E}`),{params:dt}=Qe(Q);return{path:Q,params:dt}}const g=decodeURIComponent(Dt(v,c)),{params:tt}=Qe(g),ot=yt(x);return{path:ot?`${ot}/${g}`:g,params:tt}},br=(c,x,E)=>{typeof c=="function"&&c({...x,stay:new Date-E})},er=(c,x,E,v)=>{let g=typeof c=="string"?c:c.path??"";const tt=Zt(c.query);I(g)||(g=It(E,g,v,c.exact)),window?.open(`${g}${tt}`,x)},vr=(c,x,E,v)=>{if(c.target||I(c.path)){er(c,c.target,x,E);return}let g,tt,ot;if(typeof c=="string")g=c;else if(p(c))g=c.path,tt=c.params,ot=c.query;else return;!g||g==="."||g==="./"?g=v:g.indexOf("./")===0?g=`${v.split("?")[0]}${g.replace("./","/")}`:g.indexOf("../")===0&&(g=`${v.split("?")[0].split("/").slice(0,-1).join("/")}${g.replace("../","/")}`),g=It(x,g,E,c?.exact);const at=Qe(g);g=at.path;const Q={...at.params,...ot},dt=Zt(Q);return g=`${g}${dt}`,tt={...tt,...Q},g===v?!1:{path:g,params:tt}},rr=(c,x)=>{const E=c.split(x);return E.length>1?["","/"].includes(E[1].slice(0,1)):!1},Or=Yt(),Ye=c=>{const{on:x,emit:E,off:v}=Or;return{on:g=>x(c,g),emit:g=>E(c,g),off:g=>v(c,g)}},or=c=>(x,E)=>{const{getState:v,setState:g,subscribe:tt,unsubscribe:ot,clean:at}=c;return E!==void 0&&g({[x]:E},!0),{getState:()=>v(x),setState:(Q,dt)=>g({[x]:Q},dt),subscribe:Q=>tt(x,Q),unsubscribe:()=>ot(x),clean:()=>at(x)}},me=le(),nr=or(me),Ue=Ye("push-emitter"),be=Ye("replace-emitter"),ve=nr("route-store"),Ve=Yt(),se=le(),Ke=xr(se),Ur=()=>![typeof window,typeof document].includes("undefined"),wr=c=>{if(!Ur())return;const x=document.createElement("div");return x.innerHTML=c,x.children[0]};class Fr extends $.default.Component{state={error:null};static getDerivedStateFromError(x){return{error:x}}componentDidCatch(x,E){const{errorReport:v}=this.props;typeof v=="function"&&v({error:x,info:E.componentStack})}render(){const{error:x}=this.state,{fallback:E,children:v}=this.props;return x?E?.(x)??x:v}}const kr=({children:c,report:x})=>{const E=(0,$.useRef)();return E.current?.state&&(E.current.state.error=null),(0,Nt.jsx)(Fr,{ref:E,fallback:(v,g)=>Qt({error:v,info:g}),errorReport:x,children:c})};var ar=st(591),ce=st.n(ar),Jr=st(740),xe=st.n(Jr),Tr=st(128),ue=st.n(Tr),Nr=st(855),ir=st.n(Nr),Zr=st(51),De=st.n(Zr),Ie=st(656),sr=st.n(Ie),lr=st(670),je={};je.styleTagTransform=sr(),je.setAttributes=ir(),je.insert=ue().bind(null,"head"),je.domAPI=xe(),je.insertStyleElement=De();var Dr=ce()(lr.A,je);const d=lr.A&&lr.A.locals?lr.A.locals:void 0,w=({global:c,absolute:x})=>(0,Nt.jsx)("div",{className:`spinner${c?" global":""}${x?" absolute":""}`,children:(0,Nt.jsx)("figure",{className:"spinning"})}),k=()=>{const c=(0,$.useRef)([]);return(0,$.useEffect)(()=>()=>{c.current.map(x=>x.cancelFn()),c.current=[]},[]),{cancelablePromise:(0,$.useCallback)((x,E=!0)=>{const v=Tt(x,E);return c.current.indexOf(v)===-1&&c.current.push(v),v.promiseFn},[])}},N=(c={})=>{const{cancelablePromise:x}=k(),[E,v]=(0,$.useState)(c),g=(0,$.useRef)({}),tt=(0,$.useRef)({}),ot=(0,$.useCallback)((Q=null)=>{Array.isArray(Q)&&Q.length?Q.map(dt=>g.current[dt]=c[dt]):g.current=c},[]),at=(0,$.useCallback)((Q,dt,nt=!1)=>{const Ct=Object.keys(Q),Lt=JSON.stringify(Ct.sort());if(!tt.current[Lt]){tt.current[Lt]=!0,nt&&ot(Array.isArray(nt)?nt:Ct),Ct.map(bt=>{g.current[bt]||(g.current[bt]={}),g.current[bt].pending=!0}),v({...g.current});for(let bt=0,Ot=Ct.length;bt<Ot;bt++){const Rt=Ct[bt];x(Q[Rt]).then(wt=>{let{result:mt,errMsg:Bt}=wt;bt===Ot-1&&(tt.current[Lt]=!1),typeof dt=="function"&&(mt=dt(mt)||mt),g.current[Rt]={...mt,pending:!1},Bt===!1&&v({...g.current})}).catch(wt=>{throw bt===Ot-1&&(tt.current[Lt]=!1),g.current[Rt]={error:wt,pending:!1},v({...g.current}),wt})}}},[]);return[E,at,ot]},L=c=>Object.keys(c).length,it=c=>{const{Comp:x,restResolve:E,loadPromise:v,params:g,children:tt}=c,[ot,at]=N(),[Q,dt]=N();return(0,$.useEffect)(()=>{L(E)&&at(E),L(v)&&dt(v)},[E,v]),(0,$.useEffect)(()=>{const nt=L(ot);nt&&nt===L(E)&&g.store.setState(ot)},[ot]),(0,Nt.jsx)(x,{...g,...ot,...Q,children:tt})},At=c=>c===!1?null:T(c)?c:ft(c)?(0,Nt.jsx)(c,{}):(0,Nt.jsx)(w,{}),jt=({Loading:c,ErrorBoundary:x,loadedComp:E})=>{const v=(0,Nt.jsx)($.Suspense,{fallback:At(c),children:E});return x===!1?v:ft(x)?(0,Nt.jsx)(x,{children:v}):(0,Nt.jsx)(kr,{children:v})},ut=({Comp:c,routerProps:x,children:E})=>{const{params:v,...g}=x,{loading:tt,errorBoundary:ot,...at}=v,Q=(0,Nt.jsx)(it,{Comp:c,...g,params:at,children:E});return jt({Loading:tt,ErrorBoundary:ot,loadedComp:Q})},Kt={},oe=(c,x,E,v)=>Et(E)?E.then(g=>ut({Comp:c,routerProps:x,children:g.default??g})):ut({Comp:c,routerProps:x,children:E}),ze=(c,x,E)=>{const v={},g={};return p(c)?(Object.keys(c).map(tt=>{const ot=x.getState(tt);ot==null?g[tt]=c[tt](E):v[tt]=ot}),{cachedResolve:v,restResolve:g}):{cachedResolve:v,restResolve:g}},$e=(c,x)=>{if(!p(c))return{};const E={};return Object.keys(c).map(v=>E[v]=c[v](x)),E},_e=c=>{const{current:x,menu:E,...v}=c,g=x.map(at=>{const{component:Q,resolve:dt,loadData:nt,loading:Ct,errorBoundary:Lt,icon:bt,...Ot}=at;return Ot}),tt=[...x].filter(at=>at.component),ot=(at=0)=>{if(!tt.length)return null;const Q=tt.shift(),{component:dt,resolve:nt,loadData:Ct,icon:Lt,key:bt,...Ot}=Q;if(typeof dt=="function"||Et(dt)){const Rt=`${Ot.path}${Ot.childSameRouteLevel??""}`;let wt=Kt[Rt];const{cachedResolve:mt,restResolve:Bt}=ze(nt,v.store,Ot),qt={loadPromise:$e(Ct,Ot),restResolve:Bt,params:{current:g,...v,...Ot,...mt}},ie=ot(at+1);if(wt)return oe(wt,qt,ie,Rt);try{wt=dt(),wt=T(wt)?dt:wt}catch{wt=dt}return Et(wt)?wt.then(de=>(wt=de.default??de,Kt[Rt]=wt,oe(wt,qt,ie,Rt))):(Kt[Rt]=wt,oe(wt,qt,ie,Rt))}return typeof dt=="string"?wr(dt):dt};return ot()},cr=c=>{const[x,E]=(0,$.useState)(c),[v,g]=(0,$.useState)(),[tt,ot]=(0,$.useState)(),at=(0,$.useRef)(),Q=(0,$.useRef)(),dt=(0,$.useRef)(),nt=(0,$.useRef)(),Ct=()=>{typeof at.current=="function"&&(at.current({cancel:V.cancelMsg}),at.current=null)},Lt=(0,$.useCallback)(mt=>{typeof mt=="function"?E(Bt=>({...Bt,...mt(Bt)})):p(mt)&&E(Bt=>({...Bt,...mt}))},[]),bt=(mt,Bt="pushState")=>{const{basepath:qt,browserRouter:ie}=nt.current,de=dt.current,Oe=vr(mt,qt,ie,de);if(!Oe)return;const{path:Fe,params:Te}=Oe;wt({inputPath:Fe,inputParams:Te},()=>history[Bt](mt?.state,"",Fe))},Ot=(0,$.useCallback)(mt=>bt(mt),[]),Rt=(0,$.useCallback)(mt=>bt(mt,"replaceState"),[]),wt=(0,$.useCallback)(({inputPath:mt="",inputParams:Bt={}},qt)=>{const ie=+new Date,{browserRouter:de,childKey:Oe,idKey:Fe,title:Te,routers:Ce,beforeRender:Rr,afterRender:qe,basepath:Sr,allowedNotFound:he,...lo}=nt.current;if(!mt){const{path:ge,params:Pe}=yr(de);mt=ge,Bt={...Bt,...Pe}}const Ge=dt.current;new Promise((ge,Pe)=>{Ce?.length||Pe("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),mt!==dt.current&&typeof Rr=="function"?Rr({path:mt,params:Bt,prevPath:Ge},ge,Pe):ge()}).then(ge=>{if(ge===!1)return;const Pe=ge?.path;if(Pe&&It(Sr,Pe,de)!==mt){Rt(ge);return}Q.current=Q.current??mt;const{redirect:Me,current:Le,menu:co}=Wt(K(Ce),mt.split("?")[0],Bt,Oe,Fe);if(Me){if(he&&Me===R&&(typeof he=="boolean"||typeof he=="string"&&rr(Q.current,he)||H(he)&&he.find(Ne=>rr(Q.current,Ne))))return;if(H(Me)){console.error(`\u522B\u95F9\uFF0C[${[mt,...Me].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Me===R?Rt({path:Me}):Ot({path:Me,exact:!0})}qt?.(),mt?.split("?")[0]!==dt.current?.split("?")[0]&&G(),tr(Le,Te);const ur={eventBus:Ve,store:se,useStore:Ke,...lo,updateRouter:Lt,emitRouter:ve.subscribe,router:{push:Ot,replace:Rt},current:Le,menu:co,inputPath:Q.current,prevPath:Ge,browserRouter:de,basepath:Sr,title:Te,history:{...M,goBack:Ne=>Ot({...Ne,path:Ge})}};ve.setState(ur);const Pr=_e(ur);if(dt.current=mt,Q.current=null,Ct(),Et(Pr)){const{promiseFn:Ne,cancelFn:uo}=Tt(Pr,{delay:V.delay,msg:{timeout:V.timeoutMsg}});return at.current=uo,ot(!0),Ne.then(fe=>{at.current=null;const{result:Xe,errMsg:Kr}=fe,Ee=Kr===!1?Xe:Kr?.timeout?Qt({error:{errMsg:`${mt} ${Kr.timeout}`}}):null;Ee&&(ot(!1),br(qe,Le.slice(-1)[0],ie),g(Ee))}).catch(fe=>{throw at.current=null,ot(!1),br(qe,Le.slice(-1)[0],ie),g(Qt({error:fe})),fe})}br(qe,Le.slice(-1)[0],ie),g(Pr)}).catch(ge=>{throw g(Qt({error:ge})),ge})},[]);return(0,$.useEffect)(()=>{const{childKey:mt="children",idKey:Bt="path",browserRouter:qt=!1,routers:ie=[],basepath:de="",exact:Oe=!1,inputPath:Fe="",inputParams:Te={},...Ce}=x,Rr=yt(de),qe=ae(K(ie),qt,mt,Bt,Rr,Oe);nt.current={...Ce,childKey:mt,idKey:Bt,browserRouter:qt,routers:qe,basepath:Rr};const Sr=qt?"popstate":"hashchange",he=()=>wt({});return wt({inputPath:Fe,inputParams:Te}),Ue.on(Ot),be.on(Rt),window.addEventListener(Sr,he,!1),()=>{Ct(),Ue.off(Ot),be.off(Rt),window.removeEventListener(Sr,he,!1)}},[x]),{updateRouter:Lt,output:v,loading:tt}},Cr=c=>{const{to:x,onClick:E,preventDefault:v,stopPropagation:g=!0,exact:tt=!0,target:ot,...at}=c,Q=()=>{const dt=typeof x=="string"?{exact:tt,path:x}:{exact:tt,...x};Ue.emit(dt)};return dt=>{if(dt.preventDefault(),g&&dt.stopPropagation(),!at?.disabled){if(!v){if(ot){const{browserRouter:nt,basepath:Ct}=ve.getState();er(x,ot,Ct,nt);return}Q()}typeof E=="function"&&E()}}};var we=st(845),ke={};ke.styleTagTransform=sr(),ke.setAttributes=ir(),ke.insert=ue().bind(null,"head"),ke.domAPI=xe(),ke.insertStyleElement=De();var Er=ce()(we.A,ke);const Ir=we.A&&we.A.locals?we.A.locals:void 0,Qr=c=>{if(!c)return Ir.link;const x=c.trim().split(" ").filter(Boolean),E=x.find(v=>v==="active")?[Ir.active]:[];return[Ir.link,...E,...x].join(" ")},Vr=c=>{const{to:x,onClick:E,preventDefault:v,stopPropagation:g,exact:tt,target:ot,className:at,...Q}=c;return(0,Nt.jsx)("span",{onClick:Cr(c),className:Qr(at),...Q})},Ar=()=>{const[c,x]=(0,$.useState)(ve.getState());return(0,$.useEffect)(()=>ve.subscribe(E=>x(E)),[]),c},Re=ve.getState,to=ve.subscribe})();var C=F.N_,s=F.vY,_=F.aM,B=F.lq,ht=F.rd},87458:function(ye,Jt,St){var Y;St.d(Jt,{OC:function(){return H},SQ:function(){return ft},W3:function(){return ht},Yb:function(){return s},d7:function(){return $},g$:function(){return C},qx:function(){return Qt},w5:function(){return Ut},xS:function(){return Nt},z5:function(){return yt}});var l=St(63696),Ft={837:(I,Yt,Vt)=>{var ne,le=Vt(810),xr=Symbol.for("react.element"),gr=Symbol.for("react.fragment"),$r=Object.prototype.hasOwnProperty,f=le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J={key:!0,ref:!0,__self:!0,__source:!0};function b(q,P,V){var R,M={},et=null,zt=null;V!==void 0&&(et=""+V),P.key!==void 0&&(et=""+P.key),P.ref!==void 0&&(zt=P.ref);for(R in P)$r.call(P,R)&&!J.hasOwnProperty(R)&&(M[R]=P[R]);if(q&&q.defaultProps)for(R in P=q.defaultProps,P)M[R]===void 0&&(M[R]=P[R]);return{$$typeof:xr,type:q,key:et,ref:zt,props:M,_owner:f.current}}ne=gr,Yt.jsx=b,ne=b},322:(I,Yt,Vt)=>{I.exports=Vt(837)},810:I=>{var Yt=ne=>{var le={};return st.d(le,ne),le},Vt=ne=>()=>ne;I.exports=Y||(Y=St.t(l,2))}},$t={};function st(I){var Yt=$t[I];if(Yt!==void 0)return Yt.exports;var Vt=$t[I]={exports:{}};return Ft[I](Vt,Vt.exports,st),Vt.exports}st.d=(I,Yt)=>{for(var Vt in Yt)st.o(Yt,Vt)&&!st.o(I,Vt)&&Object.defineProperty(I,Vt,{enumerable:!0,get:Yt[Vt]})},st.o=(I,Yt)=>Object.prototype.hasOwnProperty.call(I,Yt);var F={};(()=>{st.d(F,{fH:()=>Yt,r5:()=>f,Nd:()=>P,KY:()=>$r,Vd:()=>M,Nr:()=>zt,D:()=>xt,Wy:()=>yr,zX:()=>br,Cd:()=>_t,Yz:()=>er,D9:()=>vr,cb:()=>tr,vO:()=>Or,Rx:()=>Fr,OH:()=>kr,oR:()=>Tr,rE:()=>sr,PQ:()=>je,rf:()=>Wt,xd:()=>Dr});var I=st(810);const Yt=d=>(w,k)=>{const[N,L]=(0,I.useState)(()=>{const ut=d?.getState(w);return ut!==void 0?ut:(k!==void 0&&d?.setState({[w]:k},!0),k)}),it=(0,I.useCallback)(ut=>d?.setState({[w]:typeof ut=="function"?ut(d?.getState(w)):ut}),[]),At=(0,I.useCallback)(ut=>d?.subscribe(w,ut),[]),jt=(0,I.useCallback)((ut=ut)=>d?.clean(ut),[]);return(0,I.useEffect)(()=>{d?.subscribe(w,ut=>L(ut))},[]),[N,it,At,jt]},Vt=d=>Object.prototype.toString.call(d).slice(8,-1).toLowerCase(),ne=d=>Vt(d)==="object",le=d=>Vt(d)==="function",xr=d=>Vt(d)==="promise"||ne(d)&&le(d.then),gr=(d,w=3e5,k="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!xr(d))return{};let N=null,L=null;return{promiseFn:new Promise((it,At)=>{N=(jt="canceled")=>{clearTimeout(L),it({canceled:!0,errMsg:jt})},w&&(w=typeof w!="number"?12e4:w,L=setTimeout(()=>N(k),w)),d.then(jt=>{clearTimeout(L),it({result:jt,errMsg:!1})}).catch(jt=>{clearTimeout(L),At(jt)})}),cancelFn:N}},$r=()=>{const d=(0,I.useRef)([]);return(0,I.useEffect)(()=>()=>{d.current.map(w=>w.cancelFn()),d.current=[]},[]),{cancelablePromise:(0,I.useCallback)((w,k=!0)=>{const N=gr(w,k);return d.current.indexOf(N)===-1&&d.current.push(N),N.promiseFn},[])}},f=(d={})=>{const{cancelablePromise:w}=$r(),[k,N]=(0,I.useState)(d),L=(0,I.useRef)({}),it=(0,I.useRef)({}),At=(0,I.useCallback)((ut=null)=>{Array.isArray(ut)&&ut.length?ut.map(Kt=>L.current[Kt]=d[Kt]):L.current=d},[]),jt=(0,I.useCallback)((ut,Kt,oe=!1)=>{const ze=Object.keys(ut),$e=JSON.stringify(ze.sort());if(!it.current[$e]){it.current[$e]=!0,oe&&At(Array.isArray(oe)?oe:ze),ze.map(_e=>{L.current[_e]||(L.current[_e]={}),L.current[_e].pending=!0}),N({...L.current});for(let _e=0,cr=ze.length;_e<cr;_e++){const Cr=ze[_e];w(ut[Cr]).then(we=>{let{result:ke,errMsg:Er}=we;_e===cr-1&&(it.current[$e]=!1),typeof Kt=="function"&&(ke=Kt(ke)||ke),L.current[Cr]={...ke,pending:!1},Er===!1&&N({...L.current})}).catch(we=>{throw _e===cr-1&&(it.current[$e]=!1),L.current[Cr]={error:we,pending:!1},N({...L.current}),we})}}},[]);return[k,jt,At]},J=d=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(d),b=d=>new Promise((w,k)=>{const N=new FileReader;N.readAsDataURL(d),N.addEventListener("load",()=>w(N.result)),N.addEventListener("error",L=>k(L))}),q=async d=>{if(!J(d))return d;const w=await(await fetch(decodeURIComponent(d))).blob();return await b(w)},P=d=>{const[w,k]=(0,I.useState)(d);return(0,I.useEffect)(()=>{(async N=>{const L=await q(N);k(L)})(d)},[d]),w},V=(d,w)=>Object.prototype.hasOwnProperty.call(d??{},w),R=d=>V(d,"current"),M=(d,w,k="click")=>{(0,I.useEffect)(()=>{const N=it=>{const At=R(d)?d.current:d;At?.contains&&!At.contains(it.target)&&w(it)},L=typeof k=="string"?[k]:k;return L.map(it=>{document.addEventListener(it,N,!1)}),()=>{L.map(it=>{document.removeEventListener(it,N,!1)})}},[d,w,k])},et=(d=()=>{},w=60)=>{let k=null;return function(...N){clearTimeout(k),k=setTimeout(()=>d.apply(this,N),w)}},zt=(d,w=60)=>(0,I.useMemo)(()=>et(d,w),[w]),_t=()=>{const d=(0,I.useRef)(!0);return d.current?(d.current=!1,!0):!1},Wt=(d,w=[])=>{const k=_t();(0,I.useEffect)(()=>{if(!k)return d()},w)},xt=(d,w=450)=>{const[k,N]=(0,I.useState)(d);return Wt(()=>{let L;return d||w===0?N(d):L=setTimeout(()=>N(d),w),()=>L&&clearTimeout(L)},[d]),[k,N]},Dt=()=>![typeof window,typeof document].includes("undefined"),It=d=>Vt(d).indexOf("element")>-1,ae=(d=null)=>Dt()?It(d)?{width:d.clientWidth,height:d.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Zt=(d,w)=>{const k=[],N=d.children??[];for(let L=0,it=N.length;L<it;L++){const At=N[L];At.className.indexOf(w)>-1&&k.push(At)}return k.length===0?null:k.length===1?k[0]:k},Qe=(d,w)=>{getComputedStyle(d).position==="static"&&(d.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",w,!1),w()},k.type="text/html",d.appendChild(k),k.data="about:blank",k},G=(d,w=60)=>{if(!Dt())return;d=R(d)?d.current:d??document.body;let k=Zt(d,"resize-sensor"),N=[];const L=et(()=>N.map(ut=>ut(d)),w),it=ut=>{Zt(d,"resize-sensor")||(k=Qe(d,L)),N.indexOf(ut)===-1&&N.push(ut)},At=ut=>{const Kt=N.indexOf(ut);Kt!==-1&&N.splice(Kt,1),N.length===0&&k&&jt()},jt=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",L,!1),k.parentNode.removeChild(k),k=void 0,N=[])};return{element:d,bind:it,unbind:At,destroy:jt}},tr=(d={})=>{const w=(0,I.useRef)(0),[k,N]=(0,I.useState)(d),L=(0,I.useCallback)(it=>{cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>N(it))},[]);return(0,I.useEffect)(()=>()=>cancelAnimationFrame(w.current),[]),[k,L]},yr=(d=null,w=60)=>{const k=R(d)?d.current:d,{bind:N,destroy:L}=G(k,w),[it,At]=tr(ae(k));return(0,I.useEffect)(()=>(N(()=>k&&At(ae(k))),()=>L()),[k]),it},br=d=>{const w=(0,I.useRef)(null);return(0,I.useLayoutEffect)(()=>{w.current=d}),(0,I.useCallback)(w.current,[])},er=(d,w)=>{const k=(0,I.useRef)();(0,I.useEffect)(()=>{k.current=d},[d]),(0,I.useEffect)(()=>{if(w){const N=setInterval(()=>k.current(),w);return()=>clearInterval(N)}},[w])},vr=d=>{const w=(0,I.useRef)();return(0,I.useEffect)(()=>{w.current=d},[d]),w.current},rr=(d=null)=>Dt()?It(d)?{left:d.scrollLeft,top:d.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},Or=(d=null)=>{const[w,k]=tr(rr(d));return(0,I.useEffect)(()=>{const N=()=>k(rr(d)),L=It(d)?d:window;return L.addEventListener("scroll",N,{capture:!1,passive:!0}),()=>L.removeEventListener("scroll",N)},[d]),w},Ye=d=>Vt(d)==="array",or=d=>Ye(d)&&!!d.length,me=(d,w,k=[],N=!1,L=null)=>or(d)?w?(k=typeof k=="string"?k.split(","):k,d.filter(it=>(k=k.length>0?k:Object.keys(it),k.filter(At=>{const jt=it[At];if(jt==null)return!1;if(N)return jt===w;const ut=new RegExp(w,"gi"),Kt=jt.toString().match(ut);return Kt&&L&&(it[At]=L(jt.toString().replace(ut,`<span style="background-color:yellow">${Kt[0]}</span>`),{display:"inline-block"})),Kt}).length))):d:[],nr=(d,w="id")=>{if(!or(d))return d;const k=[],N=[];return d.map(L=>{const it=ne(L)?L[w]:L;N.includes(it)||(N.push(it),k.push(L))}),k},Ue=d=>d?.$$typeof&&typeof d.$$typeof=="symbol"&&d.$$typeof.description==="react.element",be=d=>d?.__v_isVNode,ve=d=>{if(!Ye(d)&&!ne(d))return d;const w=Ye(d)?[]:{};for(const k in d)if(V(d,k)){const N=d[k];w[k]=Ue(N)||be(N)||typeof N!="object"?N:N!==d?ve(N):"cyclic"}else Object.setPrototypeOf(w,{[k]:d[k]});return w},Ve=ve,se=d=>(w,k="children")=>{if(!Array.isArray(w))return w;const N=Ve(w),L=it=>{const At=[];return it.map(jt=>{if(or(jt[k])){const ut=L(jt[k])||[];jt[k]=ut,ut.length>0&&At.push(jt)}}),d(it,At)};return L(N)},Ke=(d,w,k="name",N=!1,L="id",it="children",At)=>se((jt,ut)=>nr([...me(jt,w,k,N,At),...ut],L))(d,it);var Ur=st(322);const wr=(d,w)=>(0,Ur.jsx)("div",{dangerouslySetInnerHTML:{__html:d},...w}),Fr=(d=null,w=wr)=>{const[k,N]=(0,I.useState)(d),L=(0,I.useCallback)((...it)=>{const[At,jt,ut,Kt,oe,ze]=it;if(!jt)N(null);else{it=[At,jt,ut,Kt,oe,ze,w];const $e=Ke(...it);N($e)}},[]);return[k,L]},kr=d=>{const[w,k]=(0,I.useState)(d);return(0,I.useEffect)(()=>k(d),[d]),[w,k]},ar=()=>{const d={};return{on:(w,k)=>{d[w]||(d[w]=[]),d[w].indexOf(k)===-1&&d[w].push(k)},emit:(w,k)=>{d[w]&&d[w].map(N=>N(k))},off:(w,k=null)=>{if(d[w]){if(typeof k!="function")return delete d[w];const N=d[w].indexOf(k);N>-1&&(d[w].splice(N,1),d[w].length||delete d[w])}}}},ce=d=>{const w={};for(let k in d)V(d,k)||(w[k]=d[k]);return w},Jr=(d,w)=>{if(!ne(d))return w;if(!ne(w))return d;const k={...ce(d),...ce(w)},N={...d,...w};return Object.keys(k).map(L=>{Object.setPrototypeOf(N,{[L]:k[L]})}),N},xe=(()=>{const{on:d,emit:w,off:k}=ar(),N={};return{getState:L=>Ve(N[L]),setState:(L,it=!1)=>{if(typeof L=="function"&&(L=L(Ve(N))),!ne(L))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const At=Ve(L);Object.keys(At).map(jt=>{const ut=N[jt],Kt=At[jt],oe=ne(Kt)&&ne(ut)?Jr(ut,Kt):Kt;!it&&w(jt,oe),N[jt]=oe})},subscribe:(L,it)=>(d(L,it),()=>k(L,it)),unsubscribe:k,clean:L=>{typeof L=="string"?N[L]=void 0:Array.isArray(L)?L.map(it=>N[it]=void 0):Object.keys(N).map(it=>N[it]=void 0)}}})(),Tr=Yt(xe),ue=d=>d<10?"0"+d:d,Nr=(d=new Date)=>{const w=new Date(d),k=w.getFullYear(),N=w.getDay(),L=ue(w.getMonth()+1),it=ue(w.getDate()),At=ue(w.getHours()),jt=ue(w.getMinutes()),ut=ue(w.getSeconds());return[k,L,it,At,jt,ut,N]},ir=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Zr=(d,w,k="-")=>d.replace(new RegExp(k,"g"),w),De=(d=new Date,w=["-","-"," ",":",":",""],k=ir)=>{const N=Nr(d);let L="";return w.map((it,At)=>L+=(At===6?k[N[At]]:N[At]??"")+it),L},Ie=()=>De(new Date,["-","-"," ",":",":"," ",""]),sr=()=>{const[d,w]=(0,I.useState)("");return er(()=>{w(Ie())},1e3),[d]},lr=d=>++d,je=()=>{const[,d]=(0,I.useState)(0);return(0,I.useCallback)(()=>d(lr),[])},Dr=()=>{const[d,w]=tr(ae());return(0,I.useEffect)(()=>{const k=()=>w(ae());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),d}})();var C=F.fH,s=F.r5,_=F.Nd,B=F.KY,ht=F.Vd,$=F.Nr,S=F.D,H=F.Wy,p=F.zX,T=F.Cd,z=F.Yz,U=F.D9,W=F.cb,K=F.vO,ft=F.Rx,Et=F.OH,Tt=F.oR,yt=F.rE,Nt=F.PQ,Ut=F.rf,Qt=F.xd},60608:function(ye,Jt,St){St.d(Jt,{A1j:function(){return Ci},CRY:function(){return _i},FJx:function(){return ei},G1U:function(){return ki},GBf:function(){return yi},GON:function(){return ri},GyK:function(){return Fi},H_0:function(){return di},IGN:function(){return ji},ImQ:function(){return wi},MYj:function(){return Ei},NMg:function(){return fi},NwO:function(){return ci},OIl:function(){return xi},Puy:function(){return ai},PwC:function(){return zi},QPc:function(){return Oi},St2:function(){return vi},VT1:function(){return ni},_WG:function(){return pi},e3U:function(){return li},eCW:function(){return Ai},efi:function(){return hi},fQM:function(){return oi},fUm:function(){return ii},g$M:function(){return Qa},gZm:function(){return Ti},iUO:function(){return bi},iy9:function(){return si},lWL:function(){return Za},o5o:function(){return qa},o8U:function(){return Ii},pa3:function(){return Ja},pwm:function(){return Di},qh3:function(){return mi},sy5:function(){return Ni},tIx:function(){return ui},vqn:function(){return gi},xWM:function(){return Xa},y$O:function(){return ti},y4V:function(){return $i},yy4:function(){return Si},zbw:function(){return Ga}});var Y={};(function(){Y.d=function(t,e){for(var r in e)Y.o(e,r)&&!Y.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Y.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var l={};Y.d(l,{NzM:function(){return $t},wBC:function(){return $},O39:function(){return H},cnu:function(){return U},E4D:function(){return K},TRp:function(){return Et},zI1:function(){return yt},Ufj:function(){return Ut},GxO:function(){return Vt},cu2:function(){return le},BcS:function(){return gr},lPd:function(){return et},dC1:function(){return _t},$L2:function(){return xt},Vji:function(){return f},YxP:function(){return R},UhT:function(){return or},JaC:function(){return nr},o4B:function(){return Ve},Hlr:function(){return ir},muM:function(){return L},OiV:function(){return xe},KTn:function(){return At},lwL:function(){return ut},d9v:function(){return k},yCD:function(){return oe},qCK:function(){return $e},vQq:function(){return cr},fHt:function(){return we},azq:function(){return Qr},dSY:function(){return g},MTn:function(){return Ct},RYO:function(){return Er},WAo:function(){return bt},GVc:function(){return De},Emy:function(){return Rt},v9O:function(){return mt},DsO:function(){return qt},_lj:function(){return de},vO6:function(){return Fe},xDX:function(){return Pe},hf3:function(){return Ho},ip7:function(){return go},uYe:function(){return ot},DgJ:function(){return sr},rae:function(){return yo},YBu:function(){return bo},_iG:function(){return ho},hXT:function(){return Co},gQq:function(){return Ao},D_D:function(){return no},$nD:function(){return jo},dtG:function(){return jr},Y0R:function(){return qo},qg7:function(){return _o},Xxf:function(){return zo},tSM:function(){return Oo},Few:function(){return Fo},xHg:function(){return To},aoj:function(){return No},Dlm:function(){return Gr},mrB:function(){return Do},dKu:function(){return j},v1d:function(){return dr},afD:function(){return rt},Lz5:function(){return Gt},xZX:function(){return Mt},G_1:function(){return Ae},osI:function(){return He},PTJ:function(){return Je},Qfx:function(){return Se},bti:function(){return ur},XBv:function(){return wn},eyl:function(){return kn},y35:function(){return Cn},hKD:function(){return fr},BWC:function(){return po},oLi:function(){return F},NA2:function(){return An},S3Y:function(){return Le},pvT:function(){return nn},m2f:function(){return Zt},rWO:function(){return Sn},A$w:function(){return jn},kJL:function(){return s},S9U:function(){return ce},dYC:function(){return Ge},jUY:function(){return I},J_U:function(){return _n},kKo:function(){return T},VZO:function(){return zn},mf2:function(){return kr},w1q:function(){return $n},Kn2:function(){return b},ncl:function(){return On},LWC:function(){return je},dqb:function(){return G},Kjn:function(){return Fn},TaN:function(){return pr},CBv:function(){return he},rTd:function(){return hr},B73:function(){return Tn},SSA:function(){return d},CLv:function(){return Nn},F$z:function(){return Dn},XT_:function(){return an},omS:function(){return In},poV:function(){return Rn},VXY:function(){return Pn},xsP:function(){return Mn},HPs:function(){return Ln},TSy:function(){return Bn},B5o:function(){return Io},u1A:function(){return Hn},WAY:function(){return Ro},I8J:function(){return dt},ywV:function(){return Vn},bEN:function(){return Kn},$45:function(){return qn},TUk:function(){return Gn},T7B:function(){return P},CEd:function(){return Xn},IHq:function(){return Jn},SkG:function(){return un},Smz:function(){return wr},nL5:function(){return Ke},ON:function(){return ta},eiS:function(){return ea},Frc:function(){return ra},z5J:function(){return oa},scT:function(){return na},hd2:function(){return Mo},AnA:function(){return aa},kYX:function(){return ia},yZP:function(){return sa},IVd:function(){return Po},SIr:function(){return ca},jg2:function(){return ua},gVz:function(){return da},puc:function(){return pa},Azz:function(){return ma},X5u:function(){return yr},dPh:function(){return xa},SMZ:function(){return It},kro:function(){return B},nPi:function(){return ga},US:function(){return ya},A_F:function(){return fe},_vH:function(){return eo},gmH:function(){return Ee},DYV:function(){return ba},qi2:function(){return va},tOc:function(){return wa},hau:function(){return Ca},FaZ:function(){return Ne},uyF:function(){return Ea},Vcq:function(){return Aa},XKW:function(){return Sa},azd:function(){return be},P2K:function(){return ja},XBe:function(){return Oa},JZ7:function(){return mn},ABi:function(){return Ce},ogC:function(){return Fa},Og:function(){return Pa},_O2:function(){return io},P0C:function(){return Ma},Uo5:function(){return La},Two:function(){return fo},tYQ:function(){return Ba},tVn:function(){return E},pHy:function(){return Ha},k$y:function(){return qe},yfi:function(){return Wa},fl8:function(){return Ya},f9u:function(){return Ua},ZV1:function(){return Va},Lgs:function(){return Ka}});var $t=(t,e="key",r="value")=>{const o={};return(t||[]).map(a=>o[a[e]]=a[r]),o},F=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),s=t=>F(t)==="array",B=t=>(e,r,o="id",a="children")=>{if(!s(e))return null;const h=(y,O="")=>{for(let X=0,ct=y.length;X<ct;X++){const pt=y[X];if(pt[o]===r)return t(y,X,O)||y[X];if(s(pt[a])){const ee=h(pt[a],pt[o]);if(ee)return ee}}};return h(e),e},$=(t,e,r,o="id",a="children")=>B((h,y)=>h.splice(y,0,r))(t,e,o,a),H=(t,e,r,o,a="id",h="children")=>B((y,O)=>{const X=y[O];X.children?X.children.splice(o,0,r):X.children=[r]})(t,e,a,h),T=t=>F(t).indexOf("element")>-1,U=(t,e="")=>{if(!T(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),a=[...new Set([...r,...o])];t.className=a.join(" ")},K=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},Et=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},yt=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Ut=(t,e,r,o="id",a="children")=>B((h,y)=>{const O=h[y];return O[a]=[...O[a]||[],...r],O})(t,e,o,a),I=()=>![typeof window,typeof document].includes("undefined"),Vt=t=>{if(I())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=a=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},le=(t,e)=>{if(I())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(a=>a.getAttribute("huxy-css-hash")).filter(Boolean).find(a=>a===e))r();else{const a=document.createElement("style");a.onerror=h=>o(new Error(`Failed to load '${e}' style`)),a.onload=r,a.innerHTML=t,a.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(a=>a.href===t))r();else{const a=document.createElement("link");a.onerror=h=>o(new Error(`Failed to load '${t}'`)),a.onload=r,a.href=t,a.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}})},gr=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},f=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:a})=>r[o]=a),r},b=t=>F(t)==="object";const q=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,b(o)?e+=`${r}: ${q(o)}`:Array.isArray(o)?e+=`${r}: ${R(o)}`:typeof o=="string"?e+=`${r}: '${o}'`:e+=`${r}: ${o}`}),`{${e}}`};var P=q;const V=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,b(r)?e+=P(r):Array.isArray(r)?e+=V(r):typeof r=="string"?e+=`'${r}'`:e+=`${r}`}),`[${e}]`};var R=V,et=t=>(e,r="id",o="children",a=-1)=>{if(!s(e))return e;const h={},y=e.map(O=>O[r]);return[...e].map(O=>{const X={...O},{[r]:ct}=X;if(ct!=null){let{parentId:pt}=X;pt==null&&(pt=t?.(X)??a,X.parentId=pt),h[ct]||(h[ct]=[]),X[o]=h[ct],h[pt]||(h[pt]=[]),h[a]||(h[a]=[]),y.includes(pt)?h[pt].push(X):h[a].push(X)}}),h[a]},_t=(t,e="id",r="children",o=-1)=>et(a=>a[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),xt=(t,e="path",r="children",o=null)=>et(a=>{const h=a[e],y=h.match(/.*\/[^:/]+\/:[^/]+/);return y?y[0].match(/(.*)\/:+/)?.[1]??o:h.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),It=()=>I()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Zt=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),G=t=>Zt(t,"current"),yr=(t=0,e)=>{I()&&(e=G(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},er=`.huxy-totop-bar {
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
}`;const vr=()=>document.getElementsByClassName("huxy-totop-bar")[0],rr=t=>{if(vr())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>yr(),!1),e},Or=()=>{const t=vr();t&&document.body.removeChild(t)};var or=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!I())return;le(er,"huxy-backtop-css");const r=()=>{It()>t?rr(e):Or()};return document.addEventListener("scroll",r,!1),()=>{Or(),document.removeEventListener("scroll",r,!1)}},nr=(t=0,e=2)=>parseInt(String(t),e),be=(t=0,e=2)=>Number(t).toString(e),Ve=(t=0,e=2,r=16)=>be(nr(t,e),r),Ke=t=>{if(!b(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const a=o>0?"&":"?";e.push(`${a}${r}=${t[r]}`)}),e.join("")},wr=t=>{if(!b(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},kr=t=>F(t)==="function",ce=t=>F(t)==="promise"||b(t)&&kr(t.then),xe=(t,e=3e5,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!ce(t))return{};let o=null,a=null;return{promiseFn:new Promise((h,y)=>{o=(O="canceled")=>{clearTimeout(a),h({canceled:!0,errMsg:O})},e&&(e=typeof e!="number"?12e4:e,a=setTimeout(()=>o(r),e)),t.then(O=>{clearTimeout(a),h({result:O,errMsg:!1})}).catch(O=>{clearTimeout(a),y(O)})}),cancelFn:o}};const Tr=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>wr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>Ke(t).slice(1)}],ue=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(a=>t[a]);if(o.length===1){const a=o[0],h=r?e:a;return h==="params"?{query:t[a]}:{result:t[a],type:h}}else if(o.length>1){const a=o.filter(y=>y!=="params").slice(-1)[0],h=r?e:a;return h==="params"?{query:t.params||t[a]}:{query:t.params,result:t[a],type:h}}};var ir=(t,e)=>r=>(o,a={})=>{const{headers:h,dataType:y,data:O,formData:X,form:ct,params:pt,...ee}=a,re={data:O,formData:X,form:ct,params:pt};let Yr;const{query:mr,result:xn,type:Ri}=ue(re,y)||{};if(!ee.body&&xn){const mo=Tr.find(xo=>xo.type===Ri);Yr=mo.headers,ee.body=mo.body(xn)}mr&&(o=`${o}${Ke(mr)}`);const{promiseFn:Pi}=xe(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Yr,...h},...ee}),e);return Pi.then(({result:mo,errMsg:xo})=>t(xo?{status:408,statusText:xo}:mo))},De=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let a=!1;for(let h in o)Zt(o,h)&&r(o[h])&&(o[h]="cyclic",a=!0);return a}return!1};return r(t)&&t};const Ie=(t,e)=>{const r=F(t),o=F(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(De(t)&&De(e))return Ie(t,e);for(let a in e)if(Zt(t,a)!==Zt(e,a)||!Ie(t[a],e[a]))return!1;return!0};var sr=Ie,je=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",d=t=>t?.__v_isVNode;const w=t=>{if(!s(t)&&!b(t))return t;const e=s(t)?[]:{};for(const r in t)if(Zt(t,r)){const o=t[r];e[r]=je(o)||d(o)||typeof o!="object"?o:o!==t?w(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var k=w,L=(t=100)=>{const e=[];let r=-1;const o=h=>{const y=e.length,O=k(h);return sr(O,e[y-1]?.data)?{index:r,length:y,data:e[r]?.data}:(e.push({data:O}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},a=(h=0)=>{const y=e.length;return r+=h,r=r<0?0:r>y-1?y-1:r,{index:r,length:y,data:k(e[r]?.data)}};return{record:o,cursor:a,jump:h=>(r=h,{index:r,length:e.length,data:k(e[r]?.data)}),undo:()=>a(-1),redo:()=>a(1),getList:()=>k(e),clean:()=>{e.length=0,r=-1}}},At=(t,e,r)=>{if(!s(t))return t;const o=t[e],a=t[r];return t.splice(e,1,a),t.splice(r,1,o),t},ut=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},oe=(t,e,r=".")=>{const o=t.split(r),a=e.split(r),h=o.length;let y=0;for(let O=0;O<h;O++)if(Number(o[O])<Number(a[O])){y=h-O;break}else if(Number(o[O])>Number(a[O]))break;return y},$e=(...t)=>(...e)=>{const[...r]=t,o=(...a)=>r.length===0?a[0]:o(r.pop()(...a));return o(...e)},cr=t=>{if(!I())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},we=t=>(e,r)=>{const{getState:o,setState:a,subscribe:h,unsubscribe:y,clean:O}=t;return r!==void 0&&a({[e]:r},!0),{getState:()=>o(e),setState:(X,ct)=>a({[e]:X},ct),subscribe:X=>h(e,X),unsubscribe:()=>y(e),clean:()=>O(e)}},Er=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),Qr=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:Er(o))}});const Vr=t=>t.startsWith("on"),Ar=t=>t!=="children"&&!Vr(t),Re=(t,e)=>r=>t[r]!==e[r],to=(t,e)=>r=>!(r in e),c=t=>{const e=Object.keys(t);return{eventProps:e.filter(Vr),propertyProps:e.filter(Ar)}};var E=(t,e,r)=>{const{eventProps:o,propertyProps:a}=c(e),{eventProps:h,propertyProps:y}=c(r);o.filter(to(e,r)).map(O=>{const X=O.toLowerCase().slice(2);t.removeEventListener(X,e[O])}),a.filter(to(e,r)).map(O=>t[O]=""),y.filter(Re(e,r)).map(O=>t[O]=r[O]),h.filter(Re(e,r)).map(O=>{const X=O.toLowerCase().slice(2);t.addEventListener(X,r[O])})},g=t=>{if(!I())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return E(e,{},t.props),e},ot=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const at=t=>{const e={};for(let r in t)Zt(t,r)||(e[r]=t[r]);return e};var dt=(t,e)=>{if(!b(t))return e;if(!b(e))return t;const r={...at(t),...at(e)},o={...t,...e};return Object.keys(r).map(a=>{Object.setPrototypeOf(o,{[a]:r[a]})}),o},Ct=()=>{const{on:t,emit:e,off:r}=ot(),o={};return{getState:a=>k(o[a]),setState:(a,h=!1)=>{if(typeof a=="function"&&(a=a(k(o))),!b(a))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const y=k(a);Object.keys(y).map(O=>{const X=o[O],ct=y[O],pt=b(ct)&&b(X)?dt(X,ct):ct;!h&&e(O,pt),o[O]=pt})},subscribe:(a,h)=>(t(a,h),()=>r(a,h)),unsubscribe:r,clean:a=>{typeof a=="string"?o[a]=void 0:Array.isArray(a)?a.map(h=>o[h]=void 0):Object.keys(o).map(h=>o[h]=void 0)}}},bt=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...a)=>r(...o,...a);return r},Rt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,a=>a.toUpperCase()):r.replace(/^\S/,a=>a.toLowerCase())).join(""),mt=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let h=a.length;const y=new Uint8Array(h);for(;h--;)y[h]=a.charCodeAt(h);return new File([y],e??+new Date,{type:o})},qt=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},de=(t,e,r="id",o="children")=>B((a,h)=>a.splice(h,1))(t,e,r,o),Fe=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Ce=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),qe=()=>{let t=Ce();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},he=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),Ge=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},Pe=async(t,e,r)=>{if(!I())return;r=r||qe();const o=e?`${r}.${e}`:r,a=he(t);if(a||Ge(t)){t=a?decodeURIComponent(t):t;const h=await fetch(t),y=h.headers.get("Content-Disposition"),O=y&&decodeURIComponent(y.split(";")[1].split("=")[1]);h.blob().then(X=>{const ct=window.URL.createObjectURL(X),pt=document.createElement("a");pt.href=ct,pt.download=O||o,pt.style.display="none",document.body.appendChild(pt),pt.click(),pt.parentNode.removeChild(pt),window.URL.revokeObjectURL(ct)})}else{const h=new Blob([t]),y=window.URL.createObjectURL(h),O=document.createElement("a");O.href=y,O.download=o,O.style.display="none",document.body.appendChild(O),O.click(),O.parentNode.removeChild(O),window.URL.revokeObjectURL(y)}},Le=(t=null)=>I()?T(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},ur=t=>{if(I())return t=G(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Ne=t=>{if(!I())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},fe=(t,e={},r=!1)=>{if(T(t)){if(r){let o="";Object.keys(e).map(a=>{o+=`${a}: ${e[a]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Xe=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,Kr=(t=350,e="ms")=>new Promise(r=>setTimeout(r,Xe(t,e))),Ee=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var eo=Kr,dr=async(t,e=15)=>{if(!I())return;if(typeof t=="string"&&(t=Ne(t)),t=G(t)?t.current:t,!T(t))return{};const r=t.cloneNode(!0);fe(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await eo(e);const o=ur(r);return t.parentNode.removeChild(r),o};const Lo=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Bo=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,qr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Lo.test(r)?t.setAttribute("class",r.replace(Bo,e)):t.setAttribute("class",`${r} ${e}`)},Mr=async(t,e,r)=>{const{left:o,right:a,top:h,bottom:y}=ur(t),{width:O,height:X}=Le(),{width:ct,height:pt}=await dr(e);if(a<0||y<0||o>O||h>X)return{};if(r==="vertical"){const ee={left:o+"px",top:y+10+"px",right:"auto",bottom:"auto"};let re="lt";o+ct>O&&(ee.left=a-ct+"px",re="rt"),y+10+pt>X&&(ee.top=h-10-pt+"px",re=re==="lt"?"lb":"rb"),fe(e,ee),qr(e,re)}else{const ee={left:a+10+"px",top:h+"px",right:"auto",bottom:"auto"};let re="tl";a+10+ct>O&&(ee.left=o-10-ct+"px",re="tr"),h+pt>X&&(ee.top=y-pt+"px",re=re==="tl"?"bl":"br"),fe(e,ee),qr(e,re)}};var Ho=(t,e,r="horizontal")=>{const o=qt(Mr),a=()=>o(t,e,r);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const h=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),fe(e,{left:"",top:"",right:"",bottom:""})};return Mr(t,e,r),h},go=(t,e,r,o="id",a="children")=>B((h,y)=>h[y]={...h[y],...r})(t,e,o,a),yo=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const oo=ot();var bo=t=>{const{on:e,emit:r,off:o}=oo;return{on:a=>e(t,a),emit:a=>r(t,a),off:a=>o(t,a)}};const vo=120*1e3,wo=t=>t.json().then(e=>e);var ho=(t=wo,e=vo)=>(r="get")=>ir(t)((r||"get").toUpperCase()),hr=t=>s(t)&&!!t.length,Co=(t,e,r=[],o=!1,a=null)=>hr(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(h=>(r=r.length>0?r:Object.keys(h),r.filter(y=>{const O=h[y];if(O==null)return!1;if(o)return O===e;const X=new RegExp(e,"gi"),ct=O.toString().match(X);return ct&&a&&(h[y]=a(O.toString().replace(X,`<span style="background-color:yellow">${ct[0]}</span>`),{display:"inline-block"})),ct}).length))):t:[],fo=(t,e="id")=>{if(!hr(t))return t;const r=[],o=[];return t.map(a=>{const h=b(a)?a[e]:a;o.includes(h)||(o.push(h),r.push(a))}),r};const Eo=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=k(e),a=h=>{const y=[];return h.map(O=>{if(hr(O[r])){const X=a(O[r])||[];O[r]=X,X.length>0&&y.push(O)}}),t(h,y)};return a(o)};var Ao=(t,e,r="name",o=!1,a="id",h="children",y)=>Eo((O,X)=>fo([...Co(O,e,r,o,y),...X],a))(t,h),no=(t,e)=>{const r=[],o=t.children??[];for(let a=0,h=o.length;a<h;a++){const y=o[a];y.className.indexOf(e)>-1&&r.push(y)}return r.length===0?null:r.length===1?r[0]:r},jo=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],jr=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),qo=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},_o=(t="")=>(t??"").replaceAll("//","/"),zo=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",Oo=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},Fo=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),a=t%3600,h=~~(a/60);return o<24?`${o}${e[2]}${h}${e[1]}${a%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},io=t=>(e,r="children")=>{if(!s(e))return e;const o=(a,h=[])=>a.map((y,O)=>{const X=s(y[r]);if(y=t(y,h,O,X)||y,X){const{[r]:ct,...pt}=y;y[r]=o(ct,[...h,{...pt,"@@index":O}])}return y});return o(e)},To=(t,e="children")=>{const r=[];return io(o=>{const{[e]:a,...h}=o;r.push(h)})(t,e),r},No=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const Wr=t=>t<10?"0"+t:t;var fr=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),a=Wr(e.getMonth()+1),h=Wr(e.getDate()),y=Wr(e.getHours()),O=Wr(e.getMinutes()),X=Wr(e.getSeconds());return[r,a,h,y,O,X,o]},Gr=(t,e=new Date)=>{t=fr(t),e=fr(e);const r=e.y-t.y,o=e.m-t.m,a=e.d-t.d,h=e.h-t.h,y=e.M-t.M,O=new Date(e.y,e.m,0).getDate(),X=(ct,pt,ee,re,Yr)=>{const mr="\u524D";return pt<0&&(ct-=1,pt+=ee),ct===0?pt+Yr+mr:pt===0?ct+re+mr:ct+re+pt+Yr+mr};return r>0?X(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?X(o,a,O,"\u4E2A\u6708","\u5929"):a>0?X(a,h,24,"\u5929","\u5C0F\u65F6"):h>0?X(h,y,60,"\u5C0F\u65F6","\u5206\u949F"):y>0?y+"\u5206\u949F\u524D":"\u521A\u521A"};const _r=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],bn=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var Do=(t=new Date,e=["-","-"," ",":",":",""],r=_r)=>{const o=fr(t);let a="";return e.map((h,y)=>a+=(y===6?r[o[y]]:o[y]??"")+h),a};const Xr=["","webkit","moz","ms"],n=t=>Xr.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),i=t=>Xr.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),u=t=>Xr.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),m=Xr.map(t=>`${t}fullscreenchange`);var j=t=>{if(!I())return;t=G(t)?t.current:t??document.body;const e=n(document),r=i(t),o=u(document);document[e]?document[o]?.():t[r]?.()};const D=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var rt=()=>{if(!I())return;const t=window.navigator.userAgent.toLowerCase(),e=D.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const lt=60*1e3,kt=60*lt,vt=24*kt;var Gt=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/vt);r-=vt*o;const a=~~(r/kt);r-=kt*a;const h=~~(r/lt);r-=lt*h;const y=~~(r/1e3);return`${o}\u5929${a}\u5C0F\u65F6${h}\u5206${y}\u79D2`};const Xt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Pt=t=>{if(!Array.isArray(t))return Xt;const e=[...Xt];return t.map(r=>{const o=e.findIndex(a=>a.name===r.name||a["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Mt=t=>{const e=Pt(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return Ne(e.join(""))},Ae=(t=new Date)=>{const e=fr(t);return new Date(e[0],e[1],0).getDate()},He=(t=null)=>I()?T(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const pe=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var Je=()=>{if(!I())return;const t=window.navigator.userAgent.toLowerCase(),e=pe.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},Se=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(a=>{const[h,y]=a.split("=");o[h]=y}),{path:e,params:o}}return{path:e}},pr=()=>I()&&(window.ontouchstart||navigator.maxTouchPoints),po=t=>{const{left:e,top:r}=He();return{touchX:pr()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:pr()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},wn=(t,e)=>{const{touchX:r,touchY:o}=po(t),{x:a,y:h}=e?.getBoundingClientRect?.()??{};return{x:r-(a??0),y:o-(h??0)}},kn=(t,e,r="id",o="children")=>{if(!s(t))return null;const a=h=>{for(let y=0,O=h.length;y<O;y++){const X=h[y];if(X[r]===e)return[X];if(s(X[o])){const ct=a(X[o]);if(ct)return[X].concat(ct)}}};return a(t)},Cn=(t,e,r)=>{if(!I())return;r=G(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&fe(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const a=o.getBoundingClientRect();return r.removeChild(o),a};const En=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var An=(t={},e)=>{e=En(e);const r=(o,a)=>{if(!a?.[0])return o;if(typeof o[a[0]]=="object")return r(o[a[0]],a.slice(1));if(!(a.length>1))return o[a[0]]};return r(t,e)},nn=(t,e="")=>T(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),Sn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,a=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${a})`;const h=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${a},${h})`},jn=t=>{if(!I())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:a}=t;return e.width=o,e.height=a,r.drawImage(t,0,0,o,a),e},_n=(...t)=>!Number.isNaN(new Date(...t).valueOf()),zn=t=>F(t)==="error",$n=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),On=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Fn=t=>F(t)==="regexp",Tn=t=>b(t)&&!!Object.keys(t).length,Nn=()=>{if(I())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},Dn=t=>typeof t=="boolean"||t==null?`${t}`:Array.isArray(t)?R(t):b(t)?P(t):t,an=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",a=>r(a))}),In=async t=>{if(!he(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await an(e)},Rn=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",a=>r(a)))}),Pn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await eo(r)},Mn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],Ln=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const a=JSON.stringify(o),h=r.find(y=>y.key===a);if(!h){const y=t(...o);return r.push({key:a,result:y}),r.length>e&&r.shift(),y}return h.result}};const sn=(t,e,r="id")=>{if(!s(t))return e;if(!s(e))return t;const o={};return[...t,...e].map(a=>{const h=b(a)?a[r]??JSON.stringify(a):a;if(o[h]===void 0)o[h]=a;else{const y=o[h];b(y)&&b(a)?o[h]=Ro(y,a,r):s(y)&&s(a)?o[h]=sn(y,a,r):o[h]=a}}),Object.keys(o).map(a=>o[a])};var Io=sn;const ln=(t,e,r="id")=>{if(!b(t))return e;if(!b(e))return t;for(let o in e)Zt(e,o)?b(t[o])&&b(e[o])?t[o]=ln(t[o],e[o],r):s(t[o])&&s(e[o])?t[o]=Io(t[o],e[o],r):t[o]=e[o]:Object.setPrototypeOf(t,{[o]:e[o]});return t};var Ro=ln,Bn=(t,...e)=>{const r=s(t)?Io:Ro;return e.map(o=>t=r(t,o)),t},Hn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Po=(t,e="")=>{if(!T(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(a=>!r.includes(a));t.className=o.join(" ")},Wn=`@keyframes huxy-message-animate-in {
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
}`;const cn=()=>document.getElementsByClassName("huxy-message")[0],Yn=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Un=(t,e,r)=>{const o=t?.dir??"auto",a=document.createElement("div");a.setAttribute("class",`message-content open ${e} ${o}`),a.setAttribute("data-id",r);const h=document.createElement("span");h.setAttribute("class","message"),h.innerText=t?.message??t;const y=document.createElement("i");return a.appendChild(y),a.appendChild(h),a},so=(t,e=3250,r,o)=>{if(!I())return;le(Wn,"huxy-message-css");let a=cn();a||(a=Yn());const h=qe(),y=Un(t,o,h);return a.appendChild(y),e&&(setTimeout(()=>{a.removeChild(y),r?.()},e),setTimeout(()=>{Po(y,"open")},e-250)),h};var Vn={success:(t,e,r)=>so(t,e,r,"success"),warn:(t,e,r)=>so(t,e,r,"warn"),warning:(t,e,r)=>so(t,e,r,"warn"),error:(t,e,r)=>so(t,e,r,"error"),info:(t,e,r)=>so(t,e,r,"info"),destroy:t=>{const e=cn();if(e)if(t){const r=e.querySelector(`[data-id="${t}"]`);r&&e.removeChild(r)}else for(;e.firstChild;)e.removeChild(e.firstChild)}},Kn=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[K(1-r),K(Ae(e)-r)]},qn=(t,e,r,o,a="id",h="children")=>{let y={};return B((O,X)=>(y=O[X],O.splice(X,1),!0))(t,e,a,h),H(t,r,y,o,a,h),t},Gn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),Xn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(a=>e.includes(a)?o.push({key:a,value:t[a]}):r[a]=t[a]),{newObj:r,newQuery:o}},Jn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},un=(t="",e=2,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const dn="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",hn="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Zn=t=>{const e={},r={},o=t.match(new RegExp(dn,"g")).map(h=>h.match(new RegExp(dn))).filter(Boolean),a=t.match(new RegExp(hn,"g")).map(h=>h.match(new RegExp(hn))).filter(Boolean);return o.map(h=>{const[,y,O]=h;e[y]=O,r[y]="base"}),a.map(h=>{const[,y,O]=h;e[y]=(O??"").trim(),r[y]="data"}),{obj:e,types:r}},Qn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var ta={xml2Obj:Zn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Qn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},ea=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!s(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},ra=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(a,h)=>a?o(a):r(h))),oa=()=>"#"+un((~~(Math.random()*(1<<24))).toString(16),6),Mo=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),na=(t=[])=>t[Mo(t.length-1)],aa=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,a)=>{a===t-1?r[a]=e:(r[a]=Mo(1,e-1),e-=r[a])}),r},ia=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),sa=()=>Math.random()>.5;const la=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ca=(t,e=60)=>{if(!I())return;t=G(t)?t.current:t??document.body;let r=no(t,"resize-sensor"),o=[];const a=qt(()=>o.map(X=>X(t)),e),h=X=>{no(t,"resize-sensor")||(r=la(t,a)),o.indexOf(X)===-1&&o.push(X)},y=X=>{const ct=o.indexOf(X);ct!==-1&&o.splice(ct,1),o.length===0&&r&&O()},O=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",a,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:h,unbind:y,destroy:O}};const fn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const a=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?a:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${a}${o}`)};var ua=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const a=t.match(/rgba?\((.+)\)/);if(a){const h=a[1]?.split(",").map(y=>y.trim());return fn(...h)}return t}return fn(t,e,r,o)},da=(t,e="px")=>`${t}`.replace(e,"")-0;const pn=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ha=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},fa=()=>{const t=[],e=y=>{t.push(y),h(y)},r=()=>t[0],o=()=>t.shift(),a=y=>y.startTime=pn(),h=y=>{a(y),t.sort((O,X)=>O.startTime-X.startTime)};return{hub:t,push:e,peek:r,shift:o,update:h}};var pa=(t=5)=>{const{hub:e,push:r,peek:o,shift:a,update:h}=fa(),y=ha(()=>{X()&&y()}),O=ct=>pn()-ct.startTime>t,X=()=>{let ct=o();for(;ct;){if(O(ct)){h(ct);break}const{task:pt}=ct;typeof pt=="function"?(ct.task=null,pt()):a(),ct=o()}return ct};return(ct=()=>{})=>{r({task:ct}),e.length<2&&y()}},ma=()=>I()&&document.documentElement.scrollHeight-It()===Le().height,xa=t=>{I()&&(t=G(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ga={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ya=t=>{const e=Mt(t);I()&&document.head.appendChild(...e)},ba=(t,e=null,r=!1)=>[...t||[]].sort((o,a)=>{const h=e?o[e]:o,y=e?a[e]:a;return!isNaN(Number(h))&&!isNaN(Number(h))?r?y-h:h-y:typeof h=="string"&&typeof y=="string"?r?y.localeCompare(h):h.localeCompare(y):typeof h=="string"&&typeof y=="number"?r?-1:1:typeof h=="number"||typeof h=="string"?r?1:-1:r?-1:1}),va=t=>{if(!b(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},wa={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const ka=Ct();var Ca=we(ka),Ea=(t,e={},r="utils")=>{const o=[];t.replace(/\/\*[\s\S]*\*\//,"").split(`
`).map(h=>{const y=h.split(");").map(O=>O.replace(/(?<!:)\/\/[^\n]*/,"").trim()).filter(Boolean).map(O=>`${O})`);o.push(...y)});const a=o.filter(h=>/^[^\s/]+\([\s\S]*\)$/.test(h));if(a.length){const h=a.slice(-1)[0];h.indexOf("return ")!==0&&(t=t.replace(h,`
return ${h}`))}return window[r]=e,Function(`${t}`)()},Aa=()=>I()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),Sa=(t,...e)=>{const r=[];return t.map((o,a)=>{r.push(o,e[a]??"")}),r.join("")},ja=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const _a=t=>[12,Ae(t),24,60,60],za=(t=[],e=[],r=[])=>{let o=!1;const a=[];return e.map((h,y)=>{const O=(o?h-1:h)-t[y];O<0?(a[y]=O+(r[y]||10),o=!0):(a[y]=O,o=!1)}),a.reverse()};var mn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=_a(e).reverse(),o=fr(t).slice(0,-1).reverse(),a=fr(e).slice(0,-1).reverse();return za(o,a,r)};const $a=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Oa=(t,e=new Date)=>{const r=mn(t,e),o=r.findIndex(a=>a>0);return r.map((a,h)=>`${a||0}${$a[h]}`).slice(o).join("")},Fa=(t,e)=>{T(t)&&(nn(t,e)?Po(t,e):U(t,e))};const Ta=()=>pr()?{startKey:"touchstart",moveKey:"touchmove",endKey:"touchend"}:{startKey:"mousedown",moveKey:"mousemove",endKey:"mouseup"},Na=(t,e,r)=>{r.addEventListener(t,e,!1)},Da=(t,e,r)=>{r.removeEventListener(t,e,!1)},Ia=(t,e,r,o,a)=>{a.addEventListener(t,r,!1),document.addEventListener(e,o,!1)},Ra=(t,e,r,o,a)=>{a.removeEventListener(t,r,!1),document.removeEventListener(e,o,!1)};var Pa=(t,e,r,o=document)=>{const{startKey:a,moveKey:h,endKey:y}=Ta(),O=pt=>{t(pt,o),Ia(h,y,X,ct,o)},X=pt=>e(pt,o),ct=pt=>{r(pt,o),Ra(h,y,X,ct,o)};return Na(a,O,o),()=>Da(a,O,o)},Ma=t=>(e,r="children")=>{if(!s(e))return e;const o=a=>(a.map(h=>{s(h[r])&&(h[r]=o(h[r]))}),t(a));return o(e)},La=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),Ba=(t,e="fuckId",r="children")=>io((o,a,h)=>{o[e]=[...a.map(y=>y["@@index"]),h].join("-")})(t,r),Ha=(t,e,r,o="children")=>B((a,h)=>{const y=a[h];return y[o]=[...y[o]||[],...r],!0})(t,e),Wa=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Ya=t=>I()?(m.map(e=>document.addEventListener(e,t,!1)),()=>m.map(e=>document.removeEventListener(e,t,!1))):void 0,Ua=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:a="middle",font:h="20px microsoft yahei",fillStyle:y="rgba(202,202,202,0.4)",content:O="\u8BF7\u52FF\u5916\u4F20",rotate:X="-30",zIndex:ct=1e3}={})=>{if(!I())return;t=G(t)?t.current:t??document.body;const pt=t.firstChild;pt?.className==="watermark-canvas"&&t.removeChild(pt);const ee=document.createElement("canvas");ee.setAttribute("width",e),ee.setAttribute("height",r);const re=ee.getContext("2d");re.textAlign=o,re.textBaseline=a,re.font=h,re.fillStyle=y,re.rotate(Math.PI/180*X),re.fillText(O,parseFloat(e)/2,parseFloat(r)/2);const Yr=ee.toDataURL(),mr=document.createElement("div");mr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${ct};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Yr}')`),t.style.position="relative",t.insertBefore(mr,t.firstChild)},Va=(t=new Date)=>{const e=new Date(t).getDay();return[K(1-e),K(7-e)]},Ka=t=>{if(!ce(t))return{};let e="pending",r;const o=t.then(a=>{e="success",r=a}).catch(a=>{e="error",r=a});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},rl=l.NzM,ol=l.wBC,nl=l.O39,al=l.cnu,il=l.E4D,sl=l.TRp,ll=l.zI1,cl=l.Ufj,ul=l.GxO,dl=l.cu2,hl=l.BcS,fl=l.lPd,pl=l.dC1,qa=l.$L2,ml=l.Vji,xl=l.YxP,Ga=l.UhT,Xa=l.JaC,gl=l.o4B,yl=l.Hlr,Ja=l.muM,bl=l.OiV,vl=l.KTn,wl=l.lwL,kl=l.d9v,Cl=l.yCD,El=l.qCK,Za=l.vQq,Qa=l.fHt,Al=l.azq,Sl=l.dSY,ti=l.MTn,jl=l.RYO,_l=l.WAo,zl=l.GVc,$l=l.Emy,Ol=l.v9O,Fl=l.DsO,Tl=l._lj,Nl=l.vO6,ei=l.xDX,Dl=l.hf3,Il=l.ip7,Rl=l.uYe,Pl=l.DgJ,Ml=l.rae,Ll=l.YBu,ri=l._iG,Bl=l.hXT,Hl=l.gQq,Wl=l.D_D,Yl=l.$nD,oi=l.dtG,Ul=l.Y0R,ni=l.qg7,Vl=l.Xxf,Kl=l.tSM,ai=l.Few,ql=l.xHg,Gl=l.aoj,Xl=l.Dlm,ii=l.mrB,si=l.dKu,Jl=l.v1d,li=l.afD,Zl=l.Lz5,Ql=l.xZX,tc=l.G_1,ec=l.osI,ci=l.PTJ,ui=l.Qfx,rc=l.bti,di=l.XBv,hi=l.eyl,oc=l.y35,nc=l.hKD,fi=l.BWC,ac=l.oLi,pi=l.NA2,ic=l.S3Y,sc=l.pvT,lc=l.m2f,mi=l.rWO,cc=l.A$w,uc=l.kJL,dc=l.S9U,hc=l.dYC,fc=l.jUY,pc=l.J_U,mc=l.kKo,xc=l.VZO,gc=l.mf2,yc=l.w1q,bc=l.Kn2,vc=l.ncl,wc=l.LWC,kc=l.dqb,Cc=l.Kjn,Ec=l.TaN,Ac=l.CBv,xi=l.rTd,Sc=l.B73,jc=l.SSA,gi=l.CLv,_c=l.F$z,zc=l.XT_,$c=l.omS,Oc=l.poV,Fc=l.VXY,Tc=l.xsP,Nc=l.HPs,Dc=l.TSy,yi=l.B5o,Ic=l.u1A,Rc=l.WAY,Pc=l.I8J,bi=l.ywV,Mc=l.bEN,Lc=l.$45,Bc=l.TUk,Hc=l.T7B,Wc=l.CEd,Yc=l.IHq,Uc=l.SkG,Vc=l.Smz,vi=l.nL5,Kc=l.ON,qc=l.eiS,Gc=l.Frc,Xc=l.z5J,Jc=l.scT,wi=l.hd2,Zc=l.AnA,Qc=l.kYX,ki=l.yZP,tu=l.IVd,eu=l.SIr,Ci=l.jg2,Ei=l.gVz,ru=l.puc,ou=l.Azz,nu=l.X5u,au=l.dPh,iu=l.SMZ,su=l.kro,lu=l.nPi,cu=l.US,Ai=l.A_F,Si=l._vH,uu=l.gmH,du=l.DYV,hu=l.qi2,ji=l.tOc,fu=l.hau,pu=l.FaZ,mu=l.uyF,_i=l.Vcq,xu=l.XKW,zi=l.azd,gu=l.P2K,$i=l.XBe,yu=l.JZ7,bu=l.ABi,vu=l.ogC,Oi=l.Og,Fi=l._O2,wu=l.P0C,ku=l.Uo5,Cu=l.Two,Eu=l.tYQ,Au=l.tVn,Su=l.pHy,Ti=l.k$y,Ni=l.yfi,ju=l.fl8,Di=l.f9u,_u=l.ZV1,Ii=l.Lgs}}]);
