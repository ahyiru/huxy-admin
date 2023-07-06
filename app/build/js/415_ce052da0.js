(self.webpackChunk=self.webpackChunk||[]).push([[415],{47845:function(ve,Kt,jt){jt.d(Kt,{T6:function(){return $},VD:function(){return S},WE:function(){return E},Yt:function(){return W},lC:function(){return Rt},py:function(){return B},rW:function(){return c},s:function(){return z},ve:function(){return it},vq:function(){return s}});var Y=jt(39057);function c(p,A,F){return{r:(0,Y.sh)(p,255)*255,g:(0,Y.sh)(A,255)*255,b:(0,Y.sh)(F,255)*255}}function Rt(p,A,F){p=(0,Y.sh)(p,255),A=(0,Y.sh)(A,255),F=(0,Y.sh)(F,255);var Z=Math.max(p,A,F),V=Math.min(p,A,F),X=0,ht=0,kt=(Z+V)/2;if(Z===V)ht=0,X=0;else{var Dt=Z-V;switch(ht=kt>.5?Dt/(2-Z-V):Dt/(Z+V),Z){case p:X=(A-F)/Dt+(A<F?6:0);break;case A:X=(F-p)/Dt+2;break;case F:X=(p-A)/Dt+4;break;default:break}X/=6}return{h:X,s:ht,l:kt}}function Et(p,A,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?p+(A-p)*(6*F):F<1/2?A:F<2/3?p+(A-p)*(2/3-F)*6:p}function it(p,A,F){var Z,V,X;if(p=(0,Y.sh)(p,360),A=(0,Y.sh)(A,100),F=(0,Y.sh)(F,100),A===0)V=F,X=F,Z=F;else{var ht=F<.5?F*(1+A):F+A-F*A,kt=2*F-ht;Z=Et(kt,ht,p+1/3),V=Et(kt,ht,p),X=Et(kt,ht,p-1/3)}return{r:Z*255,g:V*255,b:X*255}}function B(p,A,F){p=(0,Y.sh)(p,255),A=(0,Y.sh)(A,255),F=(0,Y.sh)(F,255);var Z=Math.max(p,A,F),V=Math.min(p,A,F),X=0,ht=Z,kt=Z-V,Dt=Z===0?0:kt/Z;if(Z===V)X=0;else{switch(Z){case p:X=(A-F)/kt+(A<F?6:0);break;case A:X=(F-p)/kt+2;break;case F:X=(p-A)/kt+4;break;default:break}X/=6}return{h:X,s:Dt,v:ht}}function E(p,A,F){p=(0,Y.sh)(p,360)*6,A=(0,Y.sh)(A,100),F=(0,Y.sh)(F,100);var Z=Math.floor(p),V=p-Z,X=F*(1-A),ht=F*(1-V*A),kt=F*(1-(1-V)*A),Dt=Z%6,mt=[F,ht,X,X,kt,F][Dt],Nt=[kt,F,F,ht,X,X][Dt],Yt=[X,X,kt,F,F,ht][Dt];return{r:mt*255,g:Nt*255,b:Yt*255}}function s(p,A,F,Z){var V=[(0,Y.FZ)(Math.round(p).toString(16)),(0,Y.FZ)(Math.round(A).toString(16)),(0,Y.FZ)(Math.round(F).toString(16))];return Z&&V[0].startsWith(V[0].charAt(1))&&V[1].startsWith(V[1].charAt(1))&&V[2].startsWith(V[2].charAt(1))?V[0].charAt(0)+V[1].charAt(0)+V[2].charAt(0):V.join("")}function z(p,A,F,Z,V){var X=[(0,Y.FZ)(Math.round(p).toString(16)),(0,Y.FZ)(Math.round(A).toString(16)),(0,Y.FZ)(Math.round(F).toString(16)),(0,Y.FZ)(ut(Z))];return V&&X[0].startsWith(X[0].charAt(1))&&X[1].startsWith(X[1].charAt(1))&&X[2].startsWith(X[2].charAt(1))&&X[3].startsWith(X[3].charAt(1))?X[0].charAt(0)+X[1].charAt(0)+X[2].charAt(0)+X[3].charAt(0):X.join("")}function I(p,A,F,Z){var V=[pad2(ut(Z)),pad2(Math.round(p).toString(16)),pad2(Math.round(A).toString(16)),pad2(Math.round(F).toString(16))];return V.join("")}function ut(p){return Math.round(parseFloat(p)*255).toString(16)}function $(p){return S(p)/255}function S(p){return parseInt(p,16)}function W(p){return{r:p>>16,g:(p&65280)>>8,b:p&255}}},97649:function(ve,Kt,jt){jt.d(Kt,{R:function(){return Y}});var Y={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},13144:function(ve,Kt,jt){jt.d(Kt,{uA:function(){return Et}});var Y=jt(47845),c=jt(97649),Rt=jt(39057);function Et(S){var W={r:0,g:0,b:0},p=1,A=null,F=null,Z=null,V=!1,X=!1;return typeof S=="string"&&(S=ut(S)),typeof S=="object"&&($(S.r)&&$(S.g)&&$(S.b)?(W=(0,Y.rW)(S.r,S.g,S.b),V=!0,X=String(S.r).substr(-1)==="%"?"prgb":"rgb"):$(S.h)&&$(S.s)&&$(S.v)?(A=(0,Rt.JX)(S.s),F=(0,Rt.JX)(S.v),W=(0,Y.WE)(S.h,A,F),V=!0,X="hsv"):$(S.h)&&$(S.s)&&$(S.l)&&(A=(0,Rt.JX)(S.s),Z=(0,Rt.JX)(S.l),W=(0,Y.ve)(S.h,A,Z),V=!0,X="hsl"),Object.prototype.hasOwnProperty.call(S,"a")&&(p=S.a)),p=(0,Rt.Yq)(p),{ok:V,format:S.format||X,r:Math.min(255,Math.max(W.r,0)),g:Math.min(255,Math.max(W.g,0)),b:Math.min(255,Math.max(W.b,0)),a:p}}var it="[-\\+]?\\d+%?",B="[-\\+]?\\d*\\.\\d+%?",E="(?:".concat(B,")|(?:").concat(it,")"),s="[\\s|\\(]+(".concat(E,")[,|\\s]+(").concat(E,")[,|\\s]+(").concat(E,")\\s*\\)?"),z="[\\s|\\(]+(".concat(E,")[,|\\s]+(").concat(E,")[,|\\s]+(").concat(E,")[,|\\s]+(").concat(E,")\\s*\\)?"),I={CSS_UNIT:new RegExp(E),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+z),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+z),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ut(S){if(S=S.trim().toLowerCase(),S.length===0)return!1;var W=!1;if(c.R[S])S=c.R[S],W=!0;else if(S==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var p=I.rgb.exec(S);return p?{r:p[1],g:p[2],b:p[3]}:(p=I.rgba.exec(S),p?{r:p[1],g:p[2],b:p[3],a:p[4]}:(p=I.hsl.exec(S),p?{h:p[1],s:p[2],l:p[3]}:(p=I.hsla.exec(S),p?{h:p[1],s:p[2],l:p[3],a:p[4]}:(p=I.hsv.exec(S),p?{h:p[1],s:p[2],v:p[3]}:(p=I.hsva.exec(S),p?{h:p[1],s:p[2],v:p[3],a:p[4]}:(p=I.hex8.exec(S),p?{r:(0,Y.VD)(p[1]),g:(0,Y.VD)(p[2]),b:(0,Y.VD)(p[3]),a:(0,Y.T6)(p[4]),format:W?"name":"hex8"}:(p=I.hex6.exec(S),p?{r:(0,Y.VD)(p[1]),g:(0,Y.VD)(p[2]),b:(0,Y.VD)(p[3]),format:W?"name":"hex"}:(p=I.hex4.exec(S),p?{r:(0,Y.VD)(p[1]+p[1]),g:(0,Y.VD)(p[2]+p[2]),b:(0,Y.VD)(p[3]+p[3]),a:(0,Y.T6)(p[4]+p[4]),format:W?"name":"hex8"}:(p=I.hex3.exec(S),p?{r:(0,Y.VD)(p[1]+p[1]),g:(0,Y.VD)(p[2]+p[2]),b:(0,Y.VD)(p[3]+p[3]),format:W?"name":"hex"}:!1)))))))))}function $(S){return!!I.CSS_UNIT.exec(String(S))}},68645:function(ve,Kt,jt){jt.d(Kt,{C:function(){return it}});var Y=jt(47845),c=jt(97649),Rt=jt(13144),Et=jt(39057),it=function(){function E(s,z){s===void 0&&(s=""),z===void 0&&(z={});var I;if(s instanceof E)return s;typeof s=="number"&&(s=(0,Y.Yt)(s)),this.originalInput=s;var ut=(0,Rt.uA)(s);this.originalInput=s,this.r=ut.r,this.g=ut.g,this.b=ut.b,this.a=ut.a,this.roundA=Math.round(100*this.a)/100,this.format=(I=z.format)!==null&&I!==void 0?I:ut.format,this.gradientType=z.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=ut.ok}return E.prototype.isDark=function(){return this.getBrightness()<128},E.prototype.isLight=function(){return!this.isDark()},E.prototype.getBrightness=function(){var s=this.toRgb();return(s.r*299+s.g*587+s.b*114)/1e3},E.prototype.getLuminance=function(){var s=this.toRgb(),z,I,ut,$=s.r/255,S=s.g/255,W=s.b/255;return $<=.03928?z=$/12.92:z=Math.pow(($+.055)/1.055,2.4),S<=.03928?I=S/12.92:I=Math.pow((S+.055)/1.055,2.4),W<=.03928?ut=W/12.92:ut=Math.pow((W+.055)/1.055,2.4),.2126*z+.7152*I+.0722*ut},E.prototype.getAlpha=function(){return this.a},E.prototype.setAlpha=function(s){return this.a=(0,Et.Yq)(s),this.roundA=Math.round(100*this.a)/100,this},E.prototype.isMonochrome=function(){var s=this.toHsl().s;return s===0},E.prototype.toHsv=function(){var s=(0,Y.py)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,v:s.v,a:this.a}},E.prototype.toHsvString=function(){var s=(0,Y.py)(this.r,this.g,this.b),z=Math.round(s.h*360),I=Math.round(s.s*100),ut=Math.round(s.v*100);return this.a===1?"hsv(".concat(z,", ").concat(I,"%, ").concat(ut,"%)"):"hsva(".concat(z,", ").concat(I,"%, ").concat(ut,"%, ").concat(this.roundA,")")},E.prototype.toHsl=function(){var s=(0,Y.lC)(this.r,this.g,this.b);return{h:s.h*360,s:s.s,l:s.l,a:this.a}},E.prototype.toHslString=function(){var s=(0,Y.lC)(this.r,this.g,this.b),z=Math.round(s.h*360),I=Math.round(s.s*100),ut=Math.round(s.l*100);return this.a===1?"hsl(".concat(z,", ").concat(I,"%, ").concat(ut,"%)"):"hsla(".concat(z,", ").concat(I,"%, ").concat(ut,"%, ").concat(this.roundA,")")},E.prototype.toHex=function(s){return s===void 0&&(s=!1),(0,Y.vq)(this.r,this.g,this.b,s)},E.prototype.toHexString=function(s){return s===void 0&&(s=!1),"#"+this.toHex(s)},E.prototype.toHex8=function(s){return s===void 0&&(s=!1),(0,Y.s)(this.r,this.g,this.b,this.a,s)},E.prototype.toHex8String=function(s){return s===void 0&&(s=!1),"#"+this.toHex8(s)},E.prototype.toHexShortString=function(s){return s===void 0&&(s=!1),this.a===1?this.toHexString(s):this.toHex8String(s)},E.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},E.prototype.toRgbString=function(){var s=Math.round(this.r),z=Math.round(this.g),I=Math.round(this.b);return this.a===1?"rgb(".concat(s,", ").concat(z,", ").concat(I,")"):"rgba(".concat(s,", ").concat(z,", ").concat(I,", ").concat(this.roundA,")")},E.prototype.toPercentageRgb=function(){var s=function(z){return"".concat(Math.round((0,Et.sh)(z,255)*100),"%")};return{r:s(this.r),g:s(this.g),b:s(this.b),a:this.a}},E.prototype.toPercentageRgbString=function(){var s=function(z){return Math.round((0,Et.sh)(z,255)*100)};return this.a===1?"rgb(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%)"):"rgba(".concat(s(this.r),"%, ").concat(s(this.g),"%, ").concat(s(this.b),"%, ").concat(this.roundA,")")},E.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var s="#"+(0,Y.vq)(this.r,this.g,this.b,!1),z=0,I=Object.entries(c.R);z<I.length;z++){var ut=I[z],$=ut[0],S=ut[1];if(s===S)return $}return!1},E.prototype.toString=function(s){var z=!!s;s=s??this.format;var I=!1,ut=this.a<1&&this.a>=0,$=!z&&ut&&(s.startsWith("hex")||s==="name");return $?s==="name"&&this.a===0?this.toName():this.toRgbString():(s==="rgb"&&(I=this.toRgbString()),s==="prgb"&&(I=this.toPercentageRgbString()),(s==="hex"||s==="hex6")&&(I=this.toHexString()),s==="hex3"&&(I=this.toHexString(!0)),s==="hex4"&&(I=this.toHex8String(!0)),s==="hex8"&&(I=this.toHex8String()),s==="name"&&(I=this.toName()),s==="hsl"&&(I=this.toHslString()),s==="hsv"&&(I=this.toHsvString()),I||this.toHexString())},E.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},E.prototype.clone=function(){return new E(this.toString())},E.prototype.lighten=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.l+=s/100,z.l=(0,Et.V2)(z.l),new E(z)},E.prototype.brighten=function(s){s===void 0&&(s=10);var z=this.toRgb();return z.r=Math.max(0,Math.min(255,z.r-Math.round(255*-(s/100)))),z.g=Math.max(0,Math.min(255,z.g-Math.round(255*-(s/100)))),z.b=Math.max(0,Math.min(255,z.b-Math.round(255*-(s/100)))),new E(z)},E.prototype.darken=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.l-=s/100,z.l=(0,Et.V2)(z.l),new E(z)},E.prototype.tint=function(s){return s===void 0&&(s=10),this.mix("white",s)},E.prototype.shade=function(s){return s===void 0&&(s=10),this.mix("black",s)},E.prototype.desaturate=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.s-=s/100,z.s=(0,Et.V2)(z.s),new E(z)},E.prototype.saturate=function(s){s===void 0&&(s=10);var z=this.toHsl();return z.s+=s/100,z.s=(0,Et.V2)(z.s),new E(z)},E.prototype.greyscale=function(){return this.desaturate(100)},E.prototype.spin=function(s){var z=this.toHsl(),I=(z.h+s)%360;return z.h=I<0?360+I:I,new E(z)},E.prototype.mix=function(s,z){z===void 0&&(z=50);var I=this.toRgb(),ut=new E(s).toRgb(),$=z/100,S={r:(ut.r-I.r)*$+I.r,g:(ut.g-I.g)*$+I.g,b:(ut.b-I.b)*$+I.b,a:(ut.a-I.a)*$+I.a};return new E(S)},E.prototype.analogous=function(s,z){s===void 0&&(s=6),z===void 0&&(z=30);var I=this.toHsl(),ut=360/z,$=[this];for(I.h=(I.h-(ut*s>>1)+720)%360;--s;)I.h=(I.h+ut)%360,$.push(new E(I));return $},E.prototype.complement=function(){var s=this.toHsl();return s.h=(s.h+180)%360,new E(s)},E.prototype.monochromatic=function(s){s===void 0&&(s=6);for(var z=this.toHsv(),I=z.h,ut=z.s,$=z.v,S=[],W=1/s;s--;)S.push(new E({h:I,s:ut,v:$})),$=($+W)%1;return S},E.prototype.splitcomplement=function(){var s=this.toHsl(),z=s.h;return[this,new E({h:(z+72)%360,s:s.s,l:s.l}),new E({h:(z+216)%360,s:s.s,l:s.l})]},E.prototype.onBackground=function(s){var z=this.toRgb(),I=new E(s).toRgb(),ut=z.a+I.a*(1-z.a);return new E({r:(z.r*z.a+I.r*I.a*(1-z.a))/ut,g:(z.g*z.a+I.g*I.a*(1-z.a))/ut,b:(z.b*z.a+I.b*I.a*(1-z.a))/ut,a:ut})},E.prototype.triad=function(){return this.polyad(3)},E.prototype.tetrad=function(){return this.polyad(4)},E.prototype.polyad=function(s){for(var z=this.toHsl(),I=z.h,ut=[this],$=360/s,S=1;S<s;S++)ut.push(new E({h:(I+S*$)%360,s:z.s,l:z.l}));return ut},E.prototype.equals=function(s){return this.toRgbString()===new E(s).toRgbString()},E}();function B(E,s){return E===void 0&&(E=""),s===void 0&&(s={}),new it(E,s)}},39057:function(ve,Kt,jt){jt.d(Kt,{FZ:function(){return E},JX:function(){return B},V2:function(){return c},Yq:function(){return it},sh:function(){return Y}});function Y(s,z){Rt(s)&&(s="100%");var I=Et(s);return s=z===360?s:Math.min(z,Math.max(0,parseFloat(s))),I&&(s=parseInt(String(s*z),10)/100),Math.abs(s-z)<1e-6?1:(z===360?s=(s<0?s%z+z:s%z)/parseFloat(String(z)):s=s%z/parseFloat(String(z)),s)}function c(s){return Math.min(1,Math.max(0,s))}function Rt(s){return typeof s=="string"&&s.indexOf(".")!==-1&&parseFloat(s)===1}function Et(s){return typeof s=="string"&&s.indexOf("%")!==-1}function it(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function B(s){return s<=1?"".concat(Number(s)*100,"%"):s}function E(s){return s.length===1?"0"+s:String(s)}},82610:function(ve,Kt){function jt(Y){for(var c=0,Rt,Et=0,it=Y.length;it>=4;++Et,it-=4)Rt=Y.charCodeAt(Et)&255|(Y.charCodeAt(++Et)&255)<<8|(Y.charCodeAt(++Et)&255)<<16|(Y.charCodeAt(++Et)&255)<<24,Rt=(Rt&65535)*1540483477+((Rt>>>16)*59797<<16),Rt^=Rt>>>24,c=(Rt&65535)*1540483477+((Rt>>>16)*59797<<16)^(c&65535)*1540483477+((c>>>16)*59797<<16);switch(it){case 3:c^=(Y.charCodeAt(Et+2)&255)<<16;case 2:c^=(Y.charCodeAt(Et+1)&255)<<8;case 1:c^=Y.charCodeAt(Et)&255,c=(c&65535)*1540483477+((c>>>16)*59797<<16)}return c^=c>>>13,c=(c&65535)*1540483477+((c>>>16)*59797<<16),((c^c>>>15)>>>0).toString(36)}Kt.Z=jt},84380:function(ve,Kt){var jt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};Kt.Z=jt},60042:function(ve,Kt){var jt,Y;(function(){"use strict";var c={}.hasOwnProperty,Rt="[native code]";function Et(){for(var it=[],B=0;B<arguments.length;B++){var E=arguments[B];if(E){var s=typeof E;if(s==="string"||s==="number")it.push(E);else if(Array.isArray(E)){if(E.length){var z=Et.apply(null,E);z&&it.push(z)}}else if(s==="object"){if(E.toString!==Object.prototype.toString&&!E.toString.toString().includes("[native code]")){it.push(E.toString());continue}for(var I in E)c.call(E,I)&&E[I]&&it.push(I)}}}return it.join(" ")}ve.exports?(Et.default=Et,ve.exports=Et):(jt=[],Y=function(){return Et}.apply(Kt,jt),Y!==void 0&&(ve.exports=Y))})()},74335:function(ve,Kt,jt){var Y;jt.d(Kt,{$j:function(){return te},AN:function(){return V},BQ:function(){return ht},GK:function(){return T},Hn:function(){return A},JX:function(){return ut},PC:function(){return s},SV:function(){return p},Ud:function(){return S},V7:function(){return Z},X2:function(){return Yt},dy:function(){return $},h_:function(){return Nt},mH:function(){return W},pC:function(){return le},rj:function(){return F},s_:function(){return mt},u_:function(){return Dt},zd:function(){return X}});var c=jt(27378),Rt=jt(31542),Et={269:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`/*@height:2px;
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
`,""]),M.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const rt=M},528:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.kLIGi {
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
`,""]),M.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const rt=M},434:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`@keyframes animate-drawer-right-in {
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
`,""]),M.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const rt=M},503:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`@keyframes animate-drop-in {
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
`,""]),M.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const rt=M},556:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.huxy-doc-frame {
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
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid var(--borderColor);
  background: var(--panelBgColor);
  backdrop-filter: blur(0.3rem);
}
.huxy-doc-header .huxy-doc-banner {
  float: left;
  width: var(--bannerWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-align: center;
  font-size: 24px;
}
.huxy-doc-header .huxy-doc-nav {
  float: left;
  width: calc(100% - var(--bannerWidth));
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
`,""]),M.locals={};const rt=M},548:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`@keyframes animate-modal-in {
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
`,""]),M.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const rt=M},232:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.clear::after {
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
`,""]),M.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const rt=M},249:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.cols-1 {
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
`,""]),M.locals={};const rt=M},990:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`@keyframes before {
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
`,""]),M.locals={};const rt=M},575:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.clear::after {
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
`,""]),M.locals={};const rt=M},918:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.ofth_ {
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
`,""]),M.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const rt=M},942:(h,Q,y)=>{y.d(Q,{Z:()=>rt});var K=y(601),R=y.n(K),U=y(609),P=y.n(U),M=P()(R());M.push([h.id,`.node-right-icon-close {
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
`,""]),M.locals={};const rt=M},609:h=>{h.exports=function(Q){var y=[];return y.toString=function(){return this.map(function(K){var R="",U=typeof K[5]<"u";return K[4]&&(R+="@supports (".concat(K[4],") {")),K[2]&&(R+="@media ".concat(K[2]," {")),U&&(R+="@layer".concat(K[5].length>0?" ".concat(K[5]):""," {")),R+=Q(K),U&&(R+="}"),K[2]&&(R+="}"),K[4]&&(R+="}"),R}).join("")},y.i=function(K,R,U,P,M){typeof K=="string"&&(K=[[null,K,void 0]]);var rt={};if(U)for(var Ft=0;Ft<this.length;Ft++){var zt=this[Ft][0];zt!=null&&(rt[zt]=!0)}for(var Mt=0;Mt<K.length;Mt++){var pt=[].concat(K[Mt]);U&&rt[pt[0]]||(typeof M<"u"&&(typeof pt[5]>"u"||(pt[1]="@layer".concat(pt[5].length>0?" ".concat(pt[5]):""," {").concat(pt[1],"}")),pt[5]=M),R&&(pt[2]&&(pt[1]="@media ".concat(pt[2]," {").concat(pt[1],"}")),pt[2]=R),P&&(pt[4]?(pt[1]="@supports (".concat(pt[4],") {").concat(pt[1],"}"),pt[4]=P):pt[4]="".concat(P)),y.push(pt))}},y}},601:h=>{h.exports=function(Q){return Q[1]}},837:(h,Q,y)=>{var K=y(810),R=Symbol.for("react.element"),U=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,M=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0};function Ft(zt,Mt,pt){var Tt,Lt={},oe=null,Ut=null;pt!==void 0&&(oe=""+pt),Mt.key!==void 0&&(oe=""+Mt.key),Mt.ref!==void 0&&(Ut=Mt.ref);for(Tt in Mt)P.call(Mt,Tt)&&!rt.hasOwnProperty(Tt)&&(Lt[Tt]=Mt[Tt]);if(zt&&zt.defaultProps)for(Tt in Mt=zt.defaultProps,Mt)Lt[Tt]===void 0&&(Lt[Tt]=Mt[Tt]);return{$$typeof:R,type:zt,key:oe,ref:Ut,props:Lt,_owner:M.current}}Q.Fragment=U,Q.jsx=Ft,Q.jsxs=Ft},322:(h,Q,y)=>{h.exports=y(837)},62:h=>{var Q=[];function y(U){for(var P=-1,M=0;M<Q.length;M++)if(Q[M].identifier===U){P=M;break}return P}function K(U,P){for(var M={},rt=[],Ft=0;Ft<U.length;Ft++){var zt=U[Ft],Mt=P.base?zt[0]+P.base:zt[0],pt=M[Mt]||0,Tt="".concat(Mt," ").concat(pt);M[Mt]=pt+1;var Lt=y(Tt),oe={css:zt[1],media:zt[2],sourceMap:zt[3],supports:zt[4],layer:zt[5]};if(Lt!==-1)Q[Lt].references++,Q[Lt].updater(oe);else{var Ut=R(oe,P);P.byIndex=Ft,Q.splice(Ft,0,{identifier:Tt,updater:Ut,references:1})}rt.push(Tt)}return rt}function R(U,P){var M=P.domAPI(P);M.update(U);var rt=function(Ft){if(Ft){if(Ft.css===U.css&&Ft.media===U.media&&Ft.sourceMap===U.sourceMap&&Ft.supports===U.supports&&Ft.layer===U.layer)return;M.update(U=Ft)}else M.remove()};return rt}h.exports=function(U,P){P=P||{},U=U||[];var M=K(U,P);return function(rt){rt=rt||[];for(var Ft=0;Ft<M.length;Ft++){var zt=M[Ft],Mt=y(zt);Q[Mt].references--}for(var pt=K(rt,P),Tt=0;Tt<M.length;Tt++){var Lt=M[Tt],oe=y(Lt);Q[oe].references===0&&(Q[oe].updater(),Q.splice(oe,1))}M=pt}}},793:h=>{var Q={};function y(R){if(typeof Q[R]>"u"){var U=document.querySelector(R);if(window.HTMLIFrameElement&&U instanceof window.HTMLIFrameElement)try{U=U.contentDocument.head}catch{U=null}Q[R]=U}return Q[R]}function K(R,U){var P=y(R);if(!P)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");P.appendChild(U)}h.exports=K},173:h=>{function Q(y){var K=document.createElement("style");return y.setAttributes(K,y.attributes),y.insert(K,y.options),K}h.exports=Q},892:(h,Q,y)=>{function K(R){var U=y.nc;U&&R.setAttribute("nonce",U)}h.exports=K},36:h=>{function Q(R,U,P){var M="";P.supports&&(M+="@supports (".concat(P.supports,") {")),P.media&&(M+="@media ".concat(P.media," {"));var rt=typeof P.layer<"u";rt&&(M+="@layer".concat(P.layer.length>0?" ".concat(P.layer):""," {")),M+=P.css,rt&&(M+="}"),P.media&&(M+="}"),P.supports&&(M+="}");var Ft=P.sourceMap;Ft&&typeof btoa<"u"&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ft))))," */")),U.styleTagTransform(M,R,U.options)}function y(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R)}function K(R){if(typeof document>"u")return{update:function(){},remove:function(){}};var U=R.insertStyleElement(R);return{update:function(P){Q(U,R,P)},remove:function(){y(U)}}}h.exports=K},464:h=>{function Q(y,K){if(K.styleSheet)K.styleSheet.cssText=y;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(y))}}h.exports=Q},810:h=>{var Q=K=>{var R={};return B.d(R,K),R},y=K=>()=>K;h.exports=Y||(Y=jt.t(c,2))}},it={};function B(h){var Q=it[h];if(Q!==void 0)return Q.exports;var y=it[h]={id:h,exports:{}};return Et[h](y,y.exports,B),y.exports}B.n=h=>{var Q=h&&h.__esModule?()=>h.default:()=>h;return B.d(Q,{a:Q}),Q},B.d=(h,Q)=>{for(var y in Q)B.o(Q,y)&&!B.o(h,y)&&Object.defineProperty(h,y,{enumerable:!0,get:Q[y]})},B.o=(h,Q)=>Object.prototype.hasOwnProperty.call(h,Q),B.nc=void 0;var E={};(()=>{B.d(E,{PC:()=>Ar,rK:()=>Qe,lr:()=>Or,JX:()=>Nr,dy:()=>L,Ud:()=>Yr,mH:()=>nt,SV:()=>$t,Hn:()=>ke,rj:()=>ho,V7:()=>Ce,AN:()=>ge,zd:()=>Ie,BQ:()=>Gr,Ur:()=>No,u_:()=>bo,s_:()=>ko,h_:()=>Pe,X2:()=>xe,$j:()=>Qr,GK:()=>oo,u:()=>g,mp:()=>Fo,C2:()=>Bt,pC:()=>At,ff:()=>jo,d2:()=>cr,Uw:()=>po});var h=B(322),Q=B(62),y=B.n(Q),K=B(36),R=B.n(K),U=B(793),P=B.n(U),M=B(892),rt=B.n(M),Ft=B(173),zt=B.n(Ft),Mt=B(464),pt=B.n(Mt),Tt=B(269),Lt={};Lt.styleTagTransform=pt(),Lt.setAttributes=rt(),Lt.insert=P().bind(null,"head"),Lt.domAPI=R(),Lt.insertStyleElement=zt();var oe=y()(Tt.Z,Lt);const Ut=Tt.Z&&Tt.Z.locals?Tt.Z.locals:void 0,Ar=n=>(0,h.jsx)("span",{className:Ut.anico,children:(0,h.jsx)("span",{className:[Ut.hline,...(n.type||"").split(" ").map(i=>Ut[i]).filter(Boolean)].join(" ")})});var q=B(810);const Je=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),Ze=n=>new Promise((i,d)=>{const x=new FileReader;x.readAsDataURL(n),x.addEventListener("load",()=>i(x.result)),x.addEventListener("error",j=>d(j))}),Dr=async n=>{if(!Je(n))return n;const i=await(await fetch(decodeURIComponent(n))).blob();return await Ze(i)},yr=n=>{const[i,d]=(0,q.useState)(n);return(0,q.useEffect)(()=>{(async x=>{const j=await Dr(x);d(j)})(n)},[n]),i},Qe=({src:n,...i})=>{const d=yr(n);return(0,h.jsx)("img",{...i,src:d})};var br=n=>{var i={};return B.d(i,n),i},vr=n=>()=>n;const tr=br({createPortal:()=>Rt.createPortal,flushSync:()=>Rt.flushSync}),er=(n,i)=>{const d=(0,q.useRef)();(0,q.useEffect)(()=>{d.current=n},[n]),(0,q.useEffect)(()=>{if(i){const x=setInterval(()=>d.current(),i);return()=>clearInterval(x)}},[i])},he=()=>![typeof window,typeof document].includes("undefined"),Te=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),rr=n=>Te(n).indexOf("element")>-1,ae=(n=null)=>he()?rr(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},wr=(n=()=>{},i=60)=>{let d=null;return function(...x){clearTimeout(d),d=setTimeout(()=>n.apply(this,x),i)}},Oe=(n,i)=>Object.prototype.hasOwnProperty.call(n??{},i),ce=n=>Oe(n,"current"),Ue=(n,i)=>{const d=[],x=n.children??[];for(let j=0,_=x.length;j<_;j++){const D=x[j];D.className.indexOf(i)>-1&&d.push(D)}return d.length===0?null:d.length===1?d[0]:d},Hr=(n,i)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const d=document.createElement("object");return d.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),d.setAttribute("class","resize-sensor"),d.onload=()=>{d.contentDocument.defaultView.addEventListener("resize",i,!1),i()},d.type="text/html",n.appendChild(d),d.data="about:blank",d},kr=(n,i=60)=>{if(!he())return;n=ce(n)?n.current:n??document.body;let d=Ue(n,"resize-sensor"),x=[];const j=wr(()=>x.map(ot=>ot(n)),i),_=ot=>{Ue(n,"resize-sensor")||(d=Hr(n,j)),x.indexOf(ot)===-1&&x.push(ot)},D=ot=>{const dt=x.indexOf(ot);dt!==-1&&x.splice(dt,1),x.length===0&&d&&G()},G=()=>{d&&d.parentNode&&(d.contentDocument&&d.contentDocument.defaultView.removeEventListener("resize",j,!1),d.parentNode.removeChild(d),d=void 0,x=[])};return{element:n,bind:_,unbind:D,destroy:G}},Tr=(n={})=>{const i=(0,q.useRef)(0),[d,x]=(0,q.useState)(n),j=(0,q.useCallback)(_=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>x(_))},[]);return(0,q.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[d,j]},Cr=(n=null,i=60)=>{const d=ce(n)?n.current:n,{bind:x,destroy:j}=kr(d,i),[_,D]=Tr(ae(d));return(0,q.useEffect)(()=>(x(()=>d&&D(ae(d))),()=>j()),[d]),_};var or=B(528),fe={};fe.styleTagTransform=pt(),fe.setAttributes=rt(),fe.insert=P().bind(null,"head"),fe.domAPI=R(),fe.insertStyleElement=zt();var Xr=y()(or.Z,fe);const pe=or.Z&&or.Z.locals?or.Z.locals:void 0,Or=({children:n,active:i=0,delay:d=5e3,className:x,...j})=>{const[_,D]=(0,q.useState)(i+1),[G,ot]=(0,q.useState)(!1),dt=(0,q.useRef)(),wt=(0,q.useRef)(""),{width:xt}=Cr(dt);n=Array.isArray(n)?n:[n];const bt=n[0],Jt=[n[n.length-1],...n,bt],Xt=Jt.length;er(()=>{let Ht=_+1;Ht=Ht===Xt?1:Ht,wt.current&&(wt.current=""),D(Ht),Ht===Xt-1&&setTimeout(()=>{wt.current="none",D(1)},500)},G?null:d);const Pt=(Ht,Qt)=>{Qt.stopPropagation(),wt.current="",D(Ht),(0,tr.flushSync)(()=>ot(!0)),ot(!1)},Ot={width:`${Xt*xt}px`,transform:`translateX(${-xt*_}px)`,transition:wt.current};return(0,h.jsxs)("div",{className:`${pe["huxy-carousel"]}${x?` ${x}`:""}`,...j,ref:dt,children:[(0,h.jsx)("div",{className:pe["huxy-carousel-wrap"],style:Ot,children:Jt.map((Ht,Qt)=>(0,h.jsx)("div",{className:`${pe["carousel-item"]} ${_===Qt?pe.active:""}`,style:{width:`${xt}px`},children:Ht},`huxy-carousel-${Qt}`))}),(0,h.jsx)("div",{className:pe["carousel-switch"],children:n.map((Ht,Qt)=>(0,h.jsx)("span",{className:`${pe.dot} ${_===Qt+1?pe.active:""}`,onClick:Ee=>Pt(Qt+1,Ee)},`huxy-carousel-switch-${Qt}`))})]})},ue=(n,i)=>{let d="",x="";if(typeof i=="number"&&(d=`col-${n}-${i}`),typeof i=="object"){const{span:j,offset:_}=i;d=j?`col-${n}-${j}`:"",x=_?`offset-${n}-${_}`:""}return{sp:d,os:x}},Nr=(0,q.forwardRef)(({span:n,offset:i,xl:d,lg:x,md:j,sm:_,xs:D,style:G,width:ot,auto:dt,offsetWidth:wt="0px",className:xt,...bt},Jt)=>{const Xt=xt?` ${xt}`:"",Pt=`col-${n||12}`,Ot=i?`offset-${i}`:"",{sp:Ht,os:Qt}=ue("xs",D),{sp:Ee,os:De}=ue("sm",_),{sp:Ve,os:Ye}=ue("md",j),{sp:Fr,os:pr}=ue("lg",x),{sp:je,os:Se}=ue("xl",d),Ge=[Pt,je,Fr,Ve,Ee,Ht,Ot,Se,pr,Ye,De,Qt].filter(Boolean).join(" "),so=dt?{width:"auto",flex:1,maxWidth:`calc(100% - ${wt})`}:{width:ot};return(0,h.jsx)("div",{className:`${Ge}${Xt}`,...bt,style:{...so,...G},ref:Jt})}),nr=()=>{const n=(0,q.useRef)(!0);return n.current?(n.current=!1,!0):!1},Kr=(n,i=[])=>{const d=nr();(0,q.useEffect)(()=>{if(!d)return n()},i)},Ne=(n,i=450)=>{const[d,x]=(0,q.useState)(n);return Kr(()=>{let j;return n||i===0?x(n):j=setTimeout(()=>x(n),i),()=>j&&clearTimeout(j)},[n]),[d,x]},Pe=({children:n,mountNode:i=document.body})=>(0,tr.createPortal)(n,i),ar={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Vr={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},ir=document.body,Ie=({open:n,close:i,delay:d=300,children:x,mountNode:j,hasMask:_=!0,style:D,className:G="h-mask",relative:ot})=>{const[dt]=Ne(n,d);(j??ir).style.overflow=dt?"hidden":"";const wt=ot?"absolute":"fixed";return(0,h.jsx)(Pe,{mountNode:j,children:(0,h.jsx)("div",{children:dt?(0,h.jsxs)("div",{className:G,style:{...ar,position:wt},children:[_?(0,h.jsx)("div",{style:{...Vr,position:wt},onClick:xt=>i?.(xt)}):null,q.Children.map(x,xt=>(0,q.isValidElement)(xt)?(0,q.cloneElement)(xt,{style:{position:"relative",zIndex:100001,...xt.props.style}}):xt)]}):null})})};var u=B(434),v={};v.styleTagTransform=pt(),v.setAttributes=rt(),v.insert=P().bind(null,"head"),v.domAPI=R(),v.insertStyleElement=zt();var k=y()(u.Z,v);const O=u.Z&&u.Z.locals?u.Z.locals:void 0,L=({open:n,close:i,footer:d,header:x,className:j,style:_,children:D,width:G="300px",mountNode:ot,position:dt="right",relative:wt})=>{const xt=["drawer-wrap",dt,n?"open":"",...j?.split(" ")??[]].filter(Boolean).map(bt=>O[bt]).join(" ");return(0,h.jsx)(Ie,{open:n,close:i,delay:250,hasMask:!0,relative:wt,mountNode:ot,className:"huxy-drawer",children:(0,h.jsx)("div",{className:xt,style:{width:G,position:wt?"absolute":"fixed","--footerHeight":d?"44px":"0px",..._},children:(0,h.jsxs)("div",{className:O["drawer-container"],children:[(0,h.jsxs)("div",{className:O["drawer-header"],children:[(0,h.jsx)("span",{className:`link ${O["ico-close"]}`,onClick:bt=>i?.(bt)}),(0,h.jsx)("div",{children:x})]}),(0,h.jsx)("div",{className:O["drawer-content"],children:D}),d?(0,h.jsx)("div",{className:O["drawer-footer"],children:d}):null]})})})},st=(n,i,d="click")=>{(0,q.useEffect)(()=>{const x=_=>{const D=ce(n)?n.current:n;D?.contains&&!D.contains(_.target)&&i(_)},j=typeof d=="string"?[d]:d;return j.map(_=>{document.addEventListener(_,x,!1)}),()=>{j.map(_=>{document.removeEventListener(_,x,!1)})}},[n,i,d])},gt=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",St=(n="")=>n.replace(/^\S/,i=>i.toUpperCase()),ct=n=>{if(he())return n=ce(n)?n.current:n??document.body,n.getBoundingClientRect?.()},qt=n=>{if(!he())return;const i=document.createElement("div");return i.innerHTML=n,i.children[0]},se=(n,i={},d=!1)=>{if(rr(n)){if(d){let x="";Object.keys(i).map(j=>{x+=`${j}: ${i[j]};`}),n.style=x;return}Object.keys(i).map(x=>n.style.setProperty(x,i[x]))}},_e=(n=350)=>new Promise(i=>setTimeout(i,n)),Re=(n=100)=>{const i=Date.now();for(;Date.now()-i<=n;);},we=_e,sr=async(n,i=15)=>{if(!he())return;if(typeof n=="string"&&(n=qt(n)),n=ce(n)?n.current:n,!rr(n))return{};const d=n.cloneNode(!0);se(d,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(d),await we(i);const x=ct(d);return n.parentNode.removeChild(d),x},Er=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Me=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Xe=(n,i)=>{i=`huxy-drop-arrow-${i}`;const d=n.getAttribute("class")??"";Er.test(d)?n.setAttribute("class",d.replace(Me,i)):n.setAttribute("class",`${d} ${i}`)},ze=async(n,i,d)=>{const{left:x,right:j,top:_,bottom:D}=ct(n),{width:G,height:ot}=ae(),{width:dt,height:wt}=await sr(i);if(j<0||D<0||x>G||_>ot)return{};if(d==="vertical"){const xt={left:x+"px",top:D+10+"px",right:"auto",bottom:"auto"};let bt="lt";x+dt>G&&(xt.left=j-dt+"px",bt="rt"),D+10+wt>ot&&(xt.top=_-10-wt+"px",bt=bt==="lt"?"lb":"rb"),se(i,xt),Xe(i,bt)}else{const xt={left:j+10+"px",top:_+"px",right:"auto",bottom:"auto"};let bt="tl";j+10+dt>G&&(xt.left=x-10-dt+"px",bt="tr"),_+wt>ot&&(xt.top=D-wt+"px",bt=bt==="tl"?"bl":"br"),se(i,xt),Xe(i,bt)}},lr=(n,i,d="horizontal")=>{const x=wr(ze),j=()=>x(n,i,d);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const _=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),se(i,{left:"",top:"",right:"",bottom:""})};return ze(n,i,d),_},co=({open:n,delay:i=280,children:d,mountNode:x,style:j,..._})=>{const[D]=Ne(n,i);return(0,h.jsx)(Pe,{mountNode:x,children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{style:{...j,display:D?"block":"none"},..._,children:d})})})};var Be=B(503),Ke={};Ke.styleTagTransform=pt(),Ke.setAttributes=rt(),Ke.insert=P().bind(null,"head"),Ke.domAPI=R(),Ke.insertStyleElement=zt();var qr=y()(Be.Z,Ke);const Pr=Be.Z&&Be.Z.locals?Be.Z.locals:void 0,Yr=({trigger:n="click",type:i,dropList:d,className:x,children:j,targetProps:_,...D})=>{const[G,ot]=(0,q.useState)(!1),dt=(0,q.useRef)(),wt=(0,q.useRef)(),xt=(0,q.useRef)();st(dt,Ot=>G&&ot(!1),[...new Set(["click",n.toLowerCase()])]),(0,q.useEffect)(()=>()=>xt.current?.(),[]);const bt=Ot=>{Ot.preventDefault(),ot(!0),xt.current=lr(dt.current,wt.current,i)},Jt={[`on${St(n)}`]:bt},Xt=["drop-wrap",G?"open":"",x].filter(Boolean).map(Ot=>Pr[Ot]).join(" "),Pt=gt(d)?d:d?.(()=>ot(!1),G);return(0,h.jsxs)("span",{ref:dt,className:Pr["drop-target"],..._,...Jt,children:[j,(0,h.jsx)(co,{open:G,className:"huxy-drop",children:(0,h.jsx)("div",{ref:wt,className:Xt,...D,children:Pt})})]})},uo=(n,i,d)=>{if(!he())return;d=ce(d)?d.current:d??document.body;const x=document.createElement("span");x.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),i&&se(x,i),x.innerText=(n??"").replace(/[\r\n]/g,""),d.appendChild(x);const j=x.getBoundingClientRect();return d.removeChild(x),j};var l=B(918),m={};m.styleTagTransform=pt(),m.setAttributes=rt(),m.insert=P().bind(null,"head"),m.domAPI=R(),m.insertStyleElement=zt();var C=y()(l.Z,m);const w=l.Z&&l.Z.locals?l.Z.locals:void 0,g=({title:n,placement:i="topRight",children:d,ellipsis:x,className:j,..._})=>(0,h.jsx)("span",{className:`${w[`huxy-tooltip-${i}`]}${j?` ${j}`:""}`,tooltip:n??d,..._,children:(0,h.jsx)("span",{className:x?w.ellipsis:"",children:d})}),tt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},at=n=>{const{children:i,style:d}=n,x=typeof i=="string",j=x?i:i?.props?.title??i?.props?.children,_=(0,q.useRef)(),[D,G]=(0,q.useState)(!0);return(0,q.useEffect)(()=>{if(_.current){const{width:ot}=uo(j,null,_.current.parentNode),{width:dt}=ct(_.current),wt=~~ot>~~dt;wt!==D&&G(wt)}},[j]),(0,h.jsx)("span",{ref:_,style:{display:"flex",width:"100%",...d},children:D?x?(0,h.jsx)(g,{...n,ellipsis:!0}):(0,h.jsx)("span",{style:tt,children:i}):x?i:i?.props?.children})},nt=n=>n.children==null?"":(0,h.jsx)(at,{...n});var et=Object.defineProperty,J=(n,i,d)=>i in n?et(n,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[i]=d,_t=(n,i,d)=>(J(n,typeof i!="symbol"?i+"":i,d),d);class $t extends q.default.Component{constructor(){super(...arguments),_t(this,"state",{error:null})}static getDerivedStateFromError(i){return{error:i}}componentDidCatch(i,d){const{errorReport:x}=this.props;typeof x=="function"&&x({error:i,info:d.componentStack})}render(){const{error:i}=this.state,{fallback:d,children:x}=this.props;return i?d(i):x}}const Bt=n=>i=>{if(typeof i=="function"||typeof i?.render=="function")return(0,h.jsx)(i,{});if(typeof i=="string"){const d=n?.[i];return d?(0,h.jsx)(d,{}):(0,h.jsx)("i",{className:i})}return i??null},Ct=n=>Bt(n),At=n=>({icon:i,defaultIcon:d})=>i?Ct(n)(i):i===!1?null:d,It=["","webkit","moz","ms"],yt=n=>It.map(i=>i?`${i}FullscreenElement`:"fullscreenElement").find(i=>n[i]),ft=n=>It.map(i=>i?`${i}RequestFullscreen`:"requestFullscreen").find(i=>n[i]),Wt=n=>It.map(i=>i?`${i}ExitFullscreen`:"exitFullscreen").find(i=>n[i]),Gt=It.map(n=>`${n}fullscreenchange`),ie=n=>{if(!he())return;n=ce(n)?n.current:n??document.body;const i=yt(document),d=ft(n),x=Wt(document);document[i]?document[x]?.():n[d]?.()},de=n=>he()?(Gt.map(i=>document.addEventListener(i,n,!1)),()=>Gt.map(i=>document.removeEventListener(i,n,!1))):void 0,Fe=n=>(0,h.jsx)("i",{...n,children:"..."}),ke=({panel:n,fullIcon:i=Fe,exitIcon:d=Fe,...x})=>{const j=ce(n)?n.current:n,[_,D]=(0,q.useState)();(0,q.useEffect)(()=>{const ot=de(()=>{D(dt=>!dt)});return()=>ot()},[]);const G=_?d:i;return(0,h.jsx)(G,{onClick:ot=>ie(j),...x})};var $e=B(249),me={};me.styleTagTransform=pt(),me.setAttributes=rt(),me.insert=P().bind(null,"head"),me.domAPI=R(),me.insertStyleElement=zt();var Ir=y()($e.Z,me);const qe=$e.Z&&$e.Z.locals?$e.Z.locals:void 0,jr=({gutter:n=10,className:i,overflow:d="hidden",...x},j)=>{const _=i?` ${i}`:"";let D=10;if(Array.isArray(n)){const G=[...n];n=G[0],D=G[1]??G[0]}return(0,h.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(D/2)}px`,overflow:d},children:(0,h.jsx)("div",{className:`row${_}`,...x,ref:j})})},xe=(0,q.forwardRef)(jr),ho=({rowProps:n,colProps:i,children:d,Row:x=xe,Col:j=Nr})=>{const _=[];return q.Children.map(d,D=>{D&&(D.type?.description==="react.fragment"?_.push(...D.props.children):_.push(D))}),(0,h.jsx)(x,{...n,children:_.map((D,G)=>(0,h.jsx)(j,{...i,...D.props.itemprops,children:D},`huuxy_grid_${G}`))})},cr=(n,i)=>(0,h.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...i}),ge=n=>{const{error:i={},info:d=""}=n||{},{message:x,stack:j,errMsg:_}=i;let D=_||j||i.toString();D=`${D}
${d}`.replace(/\r|\n|\r\n/g,"<br/>"),D=D.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),D=D.replace(/\s/g,"&nbsp;");const G=x?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,h.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[cr(D,{style:{color:"red"}}),G&&(0,h.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${G}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Ce=({children:n,report:i})=>{const d=(0,q.useRef)();return d.current?.state&&(d.current.state.error=null),(0,h.jsx)($t,{ref:d,fallback:(x,j)=>ge({error:x,info:j}),errorReport:i,children:n})},Le=(n,i)=>Object.keys(i).map(d=>n.style[d]=i[d]),We=(n,i)=>Object.keys(i).map(d=>n.style[d]=""),fo={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},ur=({left:n,top:i,width:d,height:x})=>({left:`${n}px`,top:`${i}px`,width:`${d}px`,height:`${x}px`}),Rr=n=>(0,h.jsx)("i",{...n,children:"..."}),ye=n=>{const{left:i,top:d}=ct(n),{width:x,height:j}=ae(n);return{left:i,top:d,width:x,height:j}},Gr=({panel:n,target:i,fullIcon:d=Rr,exitIcon:x=Rr})=>{n=ce(n)?n.current:n||document.body;const[j,_]=(0,q.useState)(),D=(0,q.useRef)();(0,q.useEffect)(()=>{D.current={...fo,...ur(ye(n))}},[n]);const G=(dt,wt)=>{if(dt){const xt=ur(ye((typeof i=="function"?i:()=>document.getElementsByClassName(i)[0])()));Le(wt,D.current),setTimeout(()=>{Le(wt,xt)},0)}else We(wt,D.current);_(dt)},ot=j?x:d;return(0,h.jsx)(ot,{onClick:dt=>G(!j,n)})};var He=B(548),Ae={};Ae.styleTagTransform=pt(),Ae.setAttributes=rt(),Ae.insert=P().bind(null,"head"),Ae.domAPI=R(),Ae.insertStyleElement=zt();var Jr=y()(He.Z,Ae);const be=He.Z&&He.Z.locals?He.Z.locals:void 0,bo=({open:n,close:i,hasMask:d=!0,cancelText:x="\u53D6\u6D88",submit:j,submitText:_="\u786E\u5B9A",title:D="Modal \u5F39\u7A97",className:G,children:ot,delay:dt=250,...wt})=>{const xt=["modal-wrap",n?"open":"",...G?.split(" ")??[]].filter(Boolean).map(bt=>be[bt]).join(" ");return(0,h.jsx)(Ie,{open:n,close:i,delay:dt,hasMask:d,className:"huxy-modal",children:(0,h.jsx)("div",{className:xt,...wt,children:(0,h.jsxs)("div",{className:be["modal-container"],children:[(0,h.jsx)("div",{className:be["modal-header"],children:D}),(0,h.jsx)("div",{className:be["modal-content"],children:ot}),(0,h.jsxs)("div",{className:be["modal-footer"],children:[(0,h.jsx)("div",{className:`${be.btn} ${be.left}`,onClick:bt=>i?.(bt),children:x}),(0,h.jsx)("div",{className:`${be.btn} ${be.right}`,onClick:bt=>j?.(bt),children:_})]})]})})})};var Zr=B(990),dr={};dr.styleTagTransform=pt(),dr.setAttributes=rt(),dr.insert=P().bind(null,"head"),dr.domAPI=R(),dr.insertStyleElement=zt();var vo=y()(Zr.Z,dr);const bn=Zr.Z&&Zr.Z.locals?Zr.Z.locals:void 0,Qr=({global:n,absolute:i})=>(0,h.jsx)("div",{className:`spinner${n?" global":""}${i?" absolute":""}`,children:(0,h.jsx)("figure",{className:"spinning"})});var to=B(232),Sr={};Sr.styleTagTransform=pt(),Sr.setAttributes=rt(),Sr.insert=P().bind(null,"head"),Sr.domAPI=R(),Sr.insertStyleElement=zt();var vn=y()(to.Z,Sr);const _r=to.Z&&to.Z.locals?to.Z.locals:void 0,wo=n=>n?.filter?.(i=>typeof i=="function"),Lo=(n,i)=>{const d=(0,q.useRef)(),{loading:x,title:j,plugins:_,children:D,className:G,...ot}=n,dt=wo(_),wt=dt?.length,xt=G?` ${G}`:"",bt=ce(i)?i:d;return(0,h.jsxs)("div",{className:`${_r.panel}${xt}`,...ot,ref:bt,children:[(j||wt)&&(0,h.jsxs)("div",{className:_r["panel-header"],children:[j&&(0,h.jsx)("h4",{className:_r["panel-title"],children:j}),wt&&(0,h.jsx)("div",{className:_r["panel-plugins"],children:dt.map((Jt,Xt)=>(0,h.jsx)("span",{className:`link ${_r.link}`,children:(0,h.jsx)(Jt,{panel:bt})},Xt))})]}),(0,h.jsx)("div",{className:_r["panel-body"],children:D}),x&&(0,h.jsx)(Qr,{})]})},ko=(0,q.forwardRef)(Lo),eo=n=>Te(n)==="array",Co=n=>eo(n)&&!!n.length,Wo=({to:n,preventDefault:i,stopPropagation:d,...x})=>i?(0,h.jsx)("span",{...x}):(0,h.jsx)("a",{href:n,...x}),Eo=({item:n,...i})=>(0,h.jsx)("ul",{...i}),Ho=(n,...i)=>{const d={};return Object.keys(n).filter(Boolean).map(x=>{d[x]=j=>n[x](j,...i)}),d},Mr=({data:n=[],events:i={},List:d=Eo,Link:x=Wo,leftIcon:j,rightIcon:_,isHorizontal:D,isCollapsed:G,level:ot=0,parentOpen:dt=!0})=>{const wt=G&&!ot,xt=!D&&!G&&!dt;return n.map(bt=>{const{name:Jt,path:Xt,icon:Pt,rightIcon:Ot,active:Ht,open:Qt,children:Ee,linkProps:De}=bt,Ve=Co(Ee),Ye=bt.id||Xt||Jt,Fr=wt?bt.title??Jt:void 0,pr=xt?"hidden":"",je=Pt??j,Se=Ot??_,Ge=je?(0,h.jsx)("div",{className:"node-left-icon",children:je===!0?(0,h.jsx)("i",{className:"default-left-icon"}):je}):null,so=Jt?(0,h.jsx)("div",{className:"node-text",children:(0,h.jsx)("span",{children:Jt})}):null;if(Ve){const Po=Ho(i,bt,ot),an=[pr,Qt?"open":""].filter(Boolean).join(" ");return(0,h.jsxs)("li",{className:an,"has-children":"true",...Po,children:[(0,h.jsxs)(x,{title:Fr,className:`link${Ht?" active":""}`,to:Xt,preventDefault:!0,stopPropagation:!1,...De,children:[Ge,so,Se?(0,h.jsx)("div",{className:"node-right-icon",children:Se===!0?(0,h.jsx)("i",{className:"default-right-icon"}):Se}):null]}),(0,h.jsx)(d,{item:bt,children:Mr({data:Ee,events:i,List:d,Link:x,leftIcon:j,rightIcon:_,isHorizontal:D,isCollapsed:G,level:ot+1,parentOpen:!!Qt})})]},Ye)}return(0,h.jsx)("li",{className:pr,children:(0,h.jsxs)(x,{title:Fr,className:`link${Ht?" active":""}`,to:Xt,...De,children:[Ge,so]})},Ye)})},jo=Mr,po=(n,...i)=>(0,h.jsx)("div",{"v-html":n,...i});var ro=B(575),hr={};hr.styleTagTransform=pt(),hr.setAttributes=rt(),hr.insert=P().bind(null,"head"),hr.domAPI=R(),hr.insertStyleElement=zt();var Vo=y()(ro.Z,hr);const wn=ro.Z&&ro.Z.locals?ro.Z.locals:void 0,So=n=>(0,h.jsx)("div",{style:{padding:"6px 15px"},children:n}),Yo=({activekey:n,tabs:i=[],switchTab:d,trackColor:x,flex:j,..._},D)=>{const[G,ot]=(0,q.useState)(n??i[0]?.key),[dt,wt]=(0,q.useState)({}),xt=(0,q.useRef)({}),bt=(0,q.useRef)();(0,q.useEffect)(()=>{const Pt=xt.current[G];Pt&&Jt(Pt)},[]);const Jt=Pt=>{const{left:Ot,width:Ht}=ct(Pt),Qt=ct(bt.current).left;wt({left:Ot-Qt,width:Ht})},Xt=(Pt,Ot)=>{Pt.stopPropagation(),ot(Ot),typeof d=="function"&&d(Ot),Jt(Pt.currentTarget)};return(0,h.jsxs)("div",{className:"tabs-header-wrap",..._,ref:D,children:[(0,h.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:bt,children:i.map(Pt=>(0,h.jsx)("li",{ref:Ot=>xt.current[Pt.key]=Ot,className:`th-item${G===Pt.key?" active":""}`,onClick:Ot=>Xt(Ot,Pt.key),children:typeof Pt.renderTabs=="function"?Pt.renderTabs(Pt,G===Pt.key):So(Pt.value)},Pt.key))}),(0,h.jsx)("div",{className:"th-track",style:{...dt,color:x}})]})},oo=(0,q.forwardRef)(Yo),Zo=(n,i,d="id",x="children")=>{if(!eo(n))return null;const j=_=>{for(let D=0,G=_.length;D<G;D++){const ot=_[D];if(ot[d]===i)return[ot];if(eo(ot[x])){const dt=j(ot[x]);if(dt)return[ot].concat(dt)}}};return j(n)},_o=n=>++n,Uo=()=>{const[,n]=(0,q.useState)(0);return(0,q.useCallback)(()=>n(_o),[])},mo=n=>{const{children:i,open:d}=n;let x=0;if(d&&i?.length){x=i.length;let j=0;return i.map(_=>j+=mo(_)),x+j}return x},Xo=({item:n,style:i,...d})=>(0,h.jsx)("ul",{style:{...i,"--count":mo(n)},...d});var Ur=B(942),Br={};Br.styleTagTransform=pt(),Br.setAttributes=rt(),Br.insert=P().bind(null,"head"),Br.domAPI=R(),Br.insertStyleElement=zt();var Ko=y()(Ur.Z,Br);const kn=Ur.Z&&Ur.Z.locals?Ur.Z.locals:void 0,zo=n=>(0,h.jsx)("ul",{...n}),qo=(n,i)=>n?Xo:({item:d,...x})=>(0,h.jsx)(zo,{className:i==="right"?"left":"",...x}),Fo=n=>{const{data:i=[],collapsed:d=!1,type:x="vertical",Link:j,width:_,bgColor:D,itemHeight:G,collapsedWidth:ot,itemPadding:dt,style:wt,className:xt,...bt}=n,Jt=(0,q.useRef)(),Xt=(0,q.useRef)();(0,q.useEffect)(()=>()=>clearTimeout(Jt.current),[]);const Pt=Uo(),Ot=x==="horizontal",Ht=!Ot&&d,Qt={onClick:(pr,je)=>{if(pr.stopPropagation(),!Ot&&!Ht){const Se=Zo(i,je.path,"path"),Ge=Se[Se.length-1];Ge.open=!Ge.open,Pt()}},onMouseEnter:(pr,je,Se)=>{Ht&&!Se&&(clearTimeout(Jt.current),Xt.current.style.width="var(--maxWidth)")},onMouseLeave:(pr,je,Se)=>{Ht&&!Se&&(Jt.current=setTimeout(()=>Xt.current.style.width="",200))}},Ee=(Ot?["huxy-horizontal-tree",xt]:["huxy-tree",xt,Ht?"collapsed":""]).filter(Boolean).join(" "),{float:De,...Ve}=bt?.style??{},Ye={"--bgColor":D,"--itemHeight":G,"--nodeListWidth":_,...Ve};Ot?(Ye["--itemPadding"]=dt,Ye["--nodeFloat"]=De):(Ye["--width"]=_,Ye["--collapsedWidth"]=ot);const Fr=qo(!Ot&&!Ht,De);return(0,h.jsx)("div",{ref:Xt,className:Ee,style:Ye,...bt,children:(0,h.jsx)("div",{className:"huxy-tree-track",children:(0,h.jsx)("ul",{className:"huxy-tree-root",children:jo({data:i,events:Qt,List:Fr,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Ot,isCollapsed:Ht})})})})},Go=()=>{const[n,i]=Tr(ae());return(0,q.useEffect)(()=>{const d=()=>i(ae());return window.addEventListener("resize",d,!1),()=>window.removeEventListener("resize",d,!1)},[]),n},xo=({menu:n,curName:i,Link:d})=>n.map(x=>{const{path:j,name:_,open:D,children:G}=x,ot=_===i;return G?.length?(0,h.jsxs)("li",{className:D?"open":"",children:[(0,h.jsx)(d,{to:{query:{name:_}},className:`link${ot?" active":""}`,preventDefault:!0,children:(0,h.jsx)("span",{children:_})}),(0,h.jsx)("ul",{children:(0,h.jsx)(xo,{menu:G,curName:_,Link:d})})]},j||_):(0,h.jsx)("li",{children:(0,h.jsx)(d,{to:{query:{name:_}},className:`link${ot?" active":""}`,children:(0,h.jsx)("span",{children:_})})},j||_)}),Jo=xo,no=(n={})=>{const i={};return Object.keys(n).map(d=>{n[d]!=null&&(i[d]=n[d])}),i},Qo=(n=0,i)=>{he()&&(i=ce(i)?i.current:i??window,i.scrollTo?.({top:n,behavior:"smooth"}))},$o=(n=()=>{},i=60)=>{let d=null;return function(...x){d||(n.apply(this,x),d=setTimeout(()=>d=null,i))}},tn=(n,i=null,d=!1)=>[...n||[]].sort((x,j)=>{const _=i?x[i]:x,D=i?j[i]:j;return!isNaN(Number(_))&&!isNaN(Number(_))?d?D-_:_-D:typeof _=="string"&&typeof D=="string"?d?D.localeCompare(_):_.localeCompare(D):typeof _=="string"&&typeof D=="number"?d?-1:1:typeof _=="number"||typeof _=="string"?d?1:-1:d?-1:1}),Ao=()=>he()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Lr=({curName:n,itemList:i})=>{const d=(0,q.useRef)(!1),x=(0,q.useRef)(""),[j,_]=(0,q.useState)(n);return(0,q.useEffect)(()=>{if(i.current=no(i.current),!n){const ot=Object.keys(i.current).map(dt=>({name:dt,offsetTop:i.current[dt]?.offsetTop??0}));_(ot[0]?.name)}let D=0,G=0;if(x.current!==n){x.current=n;const ot=i.current[n];d.current=!0,ot?(Qo(ot.offsetTop),D=setTimeout(()=>d.current=!1,1050)):G=setTimeout(()=>{window.scrollTo?.({top:i.current[n]?.offsetTop??0,behavior:"instant"}),D=setTimeout(()=>d.current=!1,1050)},550)}return()=>{clearTimeout(D),clearTimeout(G),d.current=!1}},[n]),(0,q.useEffect)(()=>{const D=$o(()=>{if(!d.current){const G=tn(Object.keys(i.current).map(ot=>({name:ot,offsetTop:i.current[ot]?.offsetTop??0})),"offsetTop",!0).find(ot=>ot.offsetTop<Ao())?.name;x.current!==G&&(x.current=G,_(G))}});return window.addEventListener("scroll",D,!1),()=>window.removeEventListener("scroll",D,!1)},[]),[j]},en=/!\[.*\]\((.*)\)/g,fr=async(n,i,d)=>{const x={};for(let j=0,_=n.length;j<_;j++){const D=n[j],G=D.slice(2);x[D]=await d({folder:i,name:G})}return x},rn=async(n,{folder:i},d)=>{const x=[...n.matchAll(en)].filter(Boolean).map(j=>j[1]);if(x?.length){const j=await fr(x,i,d);x.map(_=>{n=n.replace(_,j[_])})}return n},Do=({item:n,marked:i,getContext:d})=>{const[x,j]=(0,q.useState)("");return(0,q.useEffect)(()=>{(async()=>{try{const _=await d({...n,type:".md"}),D=await rn(_,n,d),G=typeof i=="function"?i.parse(D):G;j(G)}catch(_){j(_?.message)}})()},[]),(0,h.jsxs)("div",{className:"huxy-content",children:[cr(x),!x&&(0,h.jsx)(Qr,{global:!0})]})},To=({router:n,curName:i,context:d,marked:x,getContext:j})=>{const _=(0,q.useRef)({}),[D]=Lr({curName:i,itemList:_});return(0,q.useEffect)(()=>{D&&n.push({query:{name:D}})},[D]),(0,h.jsx)("div",{className:"huxy-anchor-page",children:d.map((G,ot)=>(0,h.jsxs)("div",{className:"huxy-anchor-item",ref:dt=>_.current[G.name]=dt,children:[(0,h.jsx)("h2",{children:`${G.name}`}),(0,h.jsx)(Do,{item:G,marked:x,getContext:j})]},G.name))})},on=n=>{const i=[];return n.map(d=>{const[x,j]=d.name.split("/"),_=i.find(D=>D.name===x);_?_.children.push({name:j,folder:x}):i.push({name:x,children:[{name:j,folder:x}]})}),i};var ao=B(556),zr={};zr.styleTagTransform=pt(),zr.setAttributes=rt(),zr.insert=P().bind(null,"head"),zr.domAPI=R(),zr.insertStyleElement=zt();var io=y()(ao.Z,zr);const nn=ao.Z&&ao.Z.locals?ao.Z.locals:void 0,Oo=(n,i,d)=>({sidebar:n.find(x=>x.name===i)?.children??[],listEle:n.map(({name:x,children:j})=>(0,h.jsx)("li",{children:(0,h.jsx)(d,{to:{query:{folder:x,name:j[0]?.name}},className:`link${x===i?" active":""}`,children:(0,h.jsx)("span",{children:x})})},x))}),No=n=>{const{params:i,router:d,Link:x,listFiles:j,getContext:_,marked:D,title:G,className:ot,style:dt}=n,{folder:wt,name:xt}=i,{width:bt}=Go(),[Jt,Xt]=(0,q.useState)([]),[Pt,Ot]=(0,q.useState)(!1);(0,q.useEffect)(()=>{(async()=>{const De=await j(),Ve=on(De);Xt(Ve),wt||d.push({query:{folder:Ve[0]?.name,name:Ve[0]?.children[0]?.name}})})()},[]);const Ht=bt<=1024,{sidebar:Qt,listEle:Ee}=Oo(Jt,wt,x);return(0,h.jsxs)("div",{className:`huxy-doc-frame ${ot??""}`,style:dt,children:[(0,h.jsxs)("div",{className:"huxy-doc-header",children:[(0,h.jsx)("div",{className:"huxy-doc-banner",children:G||"\u6587\u6863\u7CFB\u7EDF"}),(0,h.jsx)("ul",{className:"huxy-doc-nav",children:Ht?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{className:"huxy-doc-collapsed",children:(0,h.jsx)("span",{className:"link",onClick:De=>{De.stopPropagation(),Ot(!Pt)},children:(0,h.jsx)(Ar,{type:Pt?"right":""})})}),(0,h.jsx)(L,{open:Pt,close:()=>Ot(!1),width:"220px",children:(0,h.jsx)("ul",{className:"huxy-doc-menu-drawer",children:Ee})})]}):Ee})]}),(0,h.jsxs)("div",{className:"huxy-doc-container",children:[(0,h.jsx)("div",{className:"huxy-doc-main-page",children:(0,h.jsx)(To,{router:d,curName:xt,context:Qt,marked:D,getContext:_})}),(0,h.jsx)("div",{className:"huxy-doc-menu",children:(0,h.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,h.jsx)(Jo,{menu:Qt,curName:xt,Link:x})})})]})]})}})();var s=E.PC,z=E.rK,I=E.lr,ut=E.JX,$=E.dy,S=E.Ud,W=E.mH,p=E.SV,A=E.Hn,F=E.rj,Z=E.V7,V=E.AN,X=E.zd,ht=E.BQ,kt=E.Ur,Dt=E.u_,mt=E.s_,Nt=E.h_,Yt=E.X2,te=E.$j,T=E.GK,Vt=E.u,Zt=E.mp,ne=E.C2,le=E.pC,xr=E.ff,gr=E.d2,$r=E.Uw},78611:function(ve,Kt,jt){var Y;jt.d(Kt,{Bv:function(){return z},rU:function(){return E},tv:function(){return ut},yj:function(){return I}});var c=jt(27378),Rt={990:($,S,W)=>{W.d(S,{Z:()=>X});var p=W(601),A=W.n(p),F=W(609),Z=W.n(F),V=Z()(A());V.push([$.id,`@keyframes before {
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
`,""]),V.locals={};const X=V},267:($,S,W)=>{W.d(S,{Z:()=>X});var p=W(601),A=W.n(p),F=W(609),Z=W.n(F),V=Z()(A());V.push([$.id,`.Iuy_e {
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
`,""]),V.locals={link:"Iuy_e",active:"D3oJg"};const X=V},609:$=>{$.exports=function(S){var W=[];return W.toString=function(){return this.map(function(p){var A="",F=typeof p[5]<"u";return p[4]&&(A+="@supports (".concat(p[4],") {")),p[2]&&(A+="@media ".concat(p[2]," {")),F&&(A+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),A+=S(p),F&&(A+="}"),p[2]&&(A+="}"),p[4]&&(A+="}"),A}).join("")},W.i=function(p,A,F,Z,V){typeof p=="string"&&(p=[[null,p,void 0]]);var X={};if(F)for(var ht=0;ht<this.length;ht++){var kt=this[ht][0];kt!=null&&(X[kt]=!0)}for(var Dt=0;Dt<p.length;Dt++){var mt=[].concat(p[Dt]);F&&X[mt[0]]||(typeof V<"u"&&(typeof mt[5]>"u"||(mt[1]="@layer".concat(mt[5].length>0?" ".concat(mt[5]):""," {").concat(mt[1],"}")),mt[5]=V),A&&(mt[2]&&(mt[1]="@media ".concat(mt[2]," {").concat(mt[1],"}")),mt[2]=A),Z&&(mt[4]?(mt[1]="@supports (".concat(mt[4],") {").concat(mt[1],"}"),mt[4]=Z):mt[4]="".concat(Z)),W.push(mt))}},W}},601:$=>{$.exports=function(S){return S[1]}},837:($,S,W)=>{var p,A=W(810),F=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),V=Object.prototype.hasOwnProperty,X=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0};function kt(Dt,mt,Nt){var Yt,te={},T=null,Vt=null;Nt!==void 0&&(T=""+Nt),mt.key!==void 0&&(T=""+mt.key),mt.ref!==void 0&&(Vt=mt.ref);for(Yt in mt)V.call(mt,Yt)&&!ht.hasOwnProperty(Yt)&&(te[Yt]=mt[Yt]);if(Dt&&Dt.defaultProps)for(Yt in mt=Dt.defaultProps,mt)te[Yt]===void 0&&(te[Yt]=mt[Yt]);return{$$typeof:F,type:Dt,key:T,ref:Vt,props:te,_owner:X.current}}p=Z,S.jsx=kt,S.jsxs=kt},322:($,S,W)=>{$.exports=W(837)},62:$=>{var S=[];function W(F){for(var Z=-1,V=0;V<S.length;V++)if(S[V].identifier===F){Z=V;break}return Z}function p(F,Z){for(var V={},X=[],ht=0;ht<F.length;ht++){var kt=F[ht],Dt=Z.base?kt[0]+Z.base:kt[0],mt=V[Dt]||0,Nt="".concat(Dt," ").concat(mt);V[Dt]=mt+1;var Yt=W(Nt),te={css:kt[1],media:kt[2],sourceMap:kt[3],supports:kt[4],layer:kt[5]};if(Yt!==-1)S[Yt].references++,S[Yt].updater(te);else{var T=A(te,Z);Z.byIndex=ht,S.splice(ht,0,{identifier:Nt,updater:T,references:1})}X.push(Nt)}return X}function A(F,Z){var V=Z.domAPI(Z);V.update(F);var X=function(ht){if(ht){if(ht.css===F.css&&ht.media===F.media&&ht.sourceMap===F.sourceMap&&ht.supports===F.supports&&ht.layer===F.layer)return;V.update(F=ht)}else V.remove()};return X}$.exports=function(F,Z){Z=Z||{},F=F||[];var V=p(F,Z);return function(X){X=X||[];for(var ht=0;ht<V.length;ht++){var kt=V[ht],Dt=W(kt);S[Dt].references--}for(var mt=p(X,Z),Nt=0;Nt<V.length;Nt++){var Yt=V[Nt],te=W(Yt);S[te].references===0&&(S[te].updater(),S.splice(te,1))}V=mt}}},793:$=>{var S={};function W(A){if(typeof S[A]>"u"){var F=document.querySelector(A);if(window.HTMLIFrameElement&&F instanceof window.HTMLIFrameElement)try{F=F.contentDocument.head}catch{F=null}S[A]=F}return S[A]}function p(A,F){var Z=W(A);if(!Z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Z.appendChild(F)}$.exports=p},173:$=>{function S(W){var p=document.createElement("style");return W.setAttributes(p,W.attributes),W.insert(p,W.options),p}$.exports=S},892:($,S,W)=>{function p(A){var F=W.nc;F&&A.setAttribute("nonce",F)}$.exports=p},36:$=>{function S(A,F,Z){var V="";Z.supports&&(V+="@supports (".concat(Z.supports,") {")),Z.media&&(V+="@media ".concat(Z.media," {"));var X=typeof Z.layer<"u";X&&(V+="@layer".concat(Z.layer.length>0?" ".concat(Z.layer):""," {")),V+=Z.css,X&&(V+="}"),Z.media&&(V+="}"),Z.supports&&(V+="}");var ht=Z.sourceMap;ht&&typeof btoa<"u"&&(V+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ht))))," */")),F.styleTagTransform(V,A,F.options)}function W(A){if(A.parentNode===null)return!1;A.parentNode.removeChild(A)}function p(A){if(typeof document>"u")return{update:function(){},remove:function(){}};var F=A.insertStyleElement(A);return{update:function(Z){S(F,A,Z)},remove:function(){W(F)}}}$.exports=p},464:$=>{function S(W,p){if(p.styleSheet)p.styleSheet.cssText=W;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(W))}}$.exports=S},810:$=>{var S=p=>{var A={};return it.d(A,p),A},W=p=>()=>p;$.exports=Y||(Y=jt.t(c,2))}},Et={};function it($){var S=Et[$];if(S!==void 0)return S.exports;var W=Et[$]={id:$,exports:{}};return Rt[$](W,W.exports,it),W.exports}it.n=$=>{var S=$&&$.__esModule?()=>$.default:()=>$;return it.d(S,{a:S}),S},it.d=($,S)=>{for(var W in S)it.o(S,W)&&!it.o($,W)&&Object.defineProperty($,W,{enumerable:!0,get:S[W]})},it.o=($,S)=>Object.prototype.hasOwnProperty.call($,S),it.nc=void 0;var B={};(()=>{it.d(B,{rU:()=>qr,cb:()=>uo,Bv:()=>Yr,yj:()=>Pr,tv:()=>Me});var $=it(810);const S=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),W=l=>S(l)==="array",p=l=>S(l)==="object",A=l=>l?.$$typeof&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",F=l=>l?.__v_isVNode,Z=(l,m)=>Object.prototype.hasOwnProperty.call(l??{},m),V=l=>{if(!W(l)&&!p(l))return l;const m=W(l)?[]:{};for(const C in l)if(Z(l,C)){const w=l[C];m[C]=A(w)||F(w)||typeof w!="object"?w:w!==l?V(w):"cyclic"}else Object.setPrototypeOf(m,{[C]:l[C]});return m},X=V,ht=l=>S(l)==="function",kt=l=>S(l)==="promise"||p(l)&&ht(l.then),Dt=(l,m=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!kt(l))return{};let w=null,g=null;return{promiseFn:new Promise((tt,at)=>{w=(nt="canceled")=>{clearTimeout(g),tt({canceled:!0,errMsg:nt})},m&&(m=typeof m!="number"?12e4:m,g=setTimeout(()=>w(C),m)),l.then(nt=>{clearTimeout(g),tt({result:nt,errMsg:!1})}).catch(nt=>{clearTimeout(g),at(nt)})}),cancelFn:w}},mt=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"";var Nt=it(322);const Yt=(l,m)=>(0,Nt.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...m}),te=l=>{const{error:m={},info:C=""}=l||{},{message:w,stack:g,errMsg:tt}=m;let at=tt||g||m.toString();at=`${at}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),at=at.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),at=at.replace(/\s/g,"&nbsp;");const nt=w?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Nt.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Yt(at,{style:{color:"red"}}),nt&&(0,Nt.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${nt}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},T=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l),Vt=()=>{const l={};return{on:(m,C)=>{l[m]||(l[m]=[]),l[m].indexOf(C)===-1&&l[m].push(C)},emit:(m,C)=>{l[m]&&l[m].map(w=>w(C))},off:(m,C=null)=>{if(l[m]){if(typeof C!="function")return delete l[m];const w=l[m].indexOf(C);w>-1&&(l[m].splice(w,1),l[m].length||delete l[m])}}}},Zt=l=>{const m={};for(let C in l)Z(l,C)||(m[C]=l[C]);return m},ne=(l,m)=>{if(!p(l))return m;if(!p(m))return l;const C={...Zt(l),...Zt(m)},w={...l,...m};return Object.keys(C).map(g=>{Object.setPrototypeOf(w,{[g]:C[g]})}),w},le=()=>{const{on:l,emit:m,off:C}=Vt(),w={};return{getState:g=>X(w[g]),setState:(g,tt=!1)=>{if(typeof g=="function"&&(g=g(X(w))),!p(g))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const at=X(g);Object.keys(at).map(nt=>{const et=w[nt],J=at[nt],_t=p(J)&&p(et)?ne(et,J):J;!tt&&m(nt,_t),w[nt]=_t})},subscribe:(g,tt)=>(l(g,tt),()=>C(g,tt)),unsubscribe:C,clean:g=>{typeof g=="string"?w[g]=void 0:Array.isArray(g)?g.map(tt=>w[tt]=void 0):Object.keys(w).map(tt=>w[tt]=void 0)}}},xr=l=>(m,C)=>{const[w,g]=(0,$.useState)(()=>{const et=l?.getState(m);return et!==void 0?et:(C!==void 0&&l?.setState({[m]:C},!0),C)}),tt=(0,$.useCallback)(et=>l?.setState({[m]:typeof et=="function"?et(l?.getState(m)):et}),[]),at=(0,$.useCallback)(et=>l?.subscribe(m,et),[]),nt=(0,$.useCallback)((et=et)=>l?.clean(et),[]);return(0,$.useEffect)(()=>{l?.subscribe(m,et=>g(et))},[]),[w,tt,at,nt]},gr=le(),$r=xr(gr),h=Vt(),Q=Vt(),y="push-emitter",K="replace-emitter",R="useRoute-emitter",U={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},P="/404",M={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()},rt=(l,m,C,w,g=[])=>{const tt=et=>{for(let J=0,_t=et.length;J<_t;J++){const $t=et[J],Bt=$t[w].split("?")[0];if(new RegExp("^"+Bt.replace(/:[^/]+/g,"[^/]+")+"$").test(m))return $t;if(W($t[C])){const Ct=tt($t[C]);if(Ct)return Ct}}},at=tt(l);if(!at)return P;const{redirect:nt}=at;return nt?T(nt)?nt:g.includes(nt)?g:(g.push(nt),rt(l,nt.split("?")[0],C,w,g)):g[g.length-1]},Ft=(l,m,C,w,g)=>{if(!W(l))return null;const tt=_t=>{const $t=_t.split("/"),Bt=m.split("/"),Ct={};return $t.map((At,It)=>At.indexOf(":")===0&&(Ct[At.slice(1)]=Bt[It])),Ct},at=(_t,$t)=>{const Bt=[],Ct=$t.split("/:")[0];for(let At=0,It=_t.length;At<It;At++){const yt=_t[At];if(yt[g]===Ct){yt.active=!0;const{name:ft,title:Wt,icon:Gt,params:ie}=yt;Bt.push({name:ft,title:Wt,icon:Gt,params:ie,[g]:Ct})}else if($t.indexOf(`${yt[g]}/`)===0){yt.active=!0;const ft=tt(yt[g]),Wt=Object.keys(ft).map(ke=>ft[ke]).join("/"),{name:Gt,title:ie,icon:de}=yt,Fe=Wt?`${Ct}/${Wt}`:yt[g];Bt.push({name:Gt,title:ie,icon:de,[g]:Fe,params:{...yt.params,...ft}})}else if(yt[g]===$t){yt.active=!0;const ft=tt(yt[g]),{[w]:Wt,...Gt}=yt;Bt.push({...Gt,[g]:m,params:{...Gt.params,...C,...ft}})}}return Bt},nt=(_t,$t)=>{for(let Bt=0,Ct=_t.length;Bt<Ct;Bt++){const At=_t[Bt];if($t.indexOf(`${At[g]}/`)===0){At.active=!0;return}}},et=_t=>{for(let $t=0,Bt=_t.length;$t<Bt;$t++){const Ct=_t[$t],At=(Ct[g]||"").split("?")[0];if(At===m){Ct.hideMenu&&nt(_t,Ct.parentPath||At),Ct.active=!0;const{[w]:It,...yt}=Ct;return[{...yt,params:{...yt.params,...C}}]}if(new RegExp("^"+At.replace(/:[^/]+/g,"[^/]+")+"$").test(m))return at(_t,At);if(W(Ct[w])){const It=et(Ct[w]);if(It){Ct.active=!0,Ct.open=!0;const{[w]:yt,...ft}=Ct;return[ft,...It]}}}},J=et(l)||[];return{result:l,current:J}},zt=(l,m,C)=>l.filter(w=>w.hideMenu||w[C].indexOf("/:")>-1?!1:(W(w[m])&&(w[m]=zt(w[m],m,C)),!0)),Mt=(l,m,C,w="children",g="path")=>{const tt=rt(l,m,w,g);if(tt)return{redirect:tt};const{result:at,current:nt}=Ft(l,m,C,w,g),et=zt(at,w,g);return{current:nt,menu:et}},pt=(l,m)=>{const C=["#/","/"],w=C[!!m-0];if(!l||C.includes(l))return w;const g=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return m||g.indexOf("#/")>-1?g:`#${g}`},Tt=(l,m,C,w=!1)=>{const g=pt(m,C);return w?g:C?l&&g==="/"?l:`${l}${g}`:l?`${l}/${g}`:g},Lt=(l,m,C,w,g,tt)=>{if(!W(l))return l;const at=(nt,et="")=>nt.filter(J=>!J.denied).map(J=>{if(!tt&&!J.exact&&!T(J[w])){(!J[w]||J[w]==="javascript:;")&&(J[w]="");const _t=J[w].charAt(0)==="/"&&et.charAt(et.length-1)==="/"?J[w].slice(1):J[w].charAt(0)!=="/"&&et.charAt(et.length-1)!=="/"?`/${J[w]}`:J[w];J[w]=et?et+_t:Tt(g,_t,m)}return J.redirect&&!T(J.redirect)&&(J.redirect=Tt(g,J.redirect,m)),W(J[C])&&(J[C]=at(J[C],J[w]),!J.redirect&&J[C].length&&(J.redirect=J[C][0][w])),J});return at(l)},oe=l=>{if(!p(l))return"";const m=[];return Object.keys(l).map((C,w)=>{const g=w>0?"&":"?";m.push(`${g}${C}=${l[C]}`)}),m.join("")},Ut=(l="")=>{const[m,C]=l.split("?");if(C){const w={};return C.split("&").map(g=>{const[tt,at]=g.split("=");w[tt]=at}),{path:m,params:w}}return{path:m}},Ar=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},q=(l,m)=>{for(let C=l.length-1,w;w=l[C--];){const{title:g,name:tt}=w;if(typeof g=="string"&&g.length)return document.title=g;if((g==null||g===!0)&&tt)return document.title=m?`${tt}-${m}`:tt;if(m)return document.title=m}},Je=l=>{const{pathname:m,search:C,hash:w}=location;if(l){const nt=pt(m,l),et=decodeURIComponent(`${nt}${C}`),{params:J}=Ut(et);return{path:et,params:J}}const g=decodeURIComponent(pt(w,l)),{params:tt}=Ut(g),at=mt(m);return{path:at?`${at}/${g}`:g,params:tt}},Ze=(l,m,C)=>{typeof l=="function"&&l({...m,stay:new Date-C})},Dr=(l,m,C,w)=>{let g=typeof l=="string"?l:l.path??"";const tt=oe(l.query);T(g)||(g=Tt(C,g,w,l.exact)),window?.open(`${g}${tt}`,m)},yr=(l,m,C,w)=>{if(l.target||T(l.path)){Dr(l,l.target,m,C);return}let g,tt,at;if(typeof l=="string")g=l;else if(p(l))g=l.path,tt=l.params,at=l.query;else return;!g||g==="."||g==="./"?g=w:g.indexOf("./")===0?g=`${w.split("?")[0]}${g.replace("./","/")}`:g.indexOf("../")===0&&(g=`${w.split("?")[0].split("/").slice(0,-1).join("/")}${g.replace("../","/")}`),g=Tt(m,g,C,l?.exact);const nt=Ut(g);g=nt.path;const et={...nt.params,...at},J=oe(et);return g=`${g}${J}`,tt={...tt,...et},g===w?!1:{path:g,params:tt}},Qe=(l,m)=>{const C=l.split(m);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},br=Vt(),vr=l=>{const{on:m,emit:C,off:w}=br;return{on:g=>m(l,g),emit:g=>C(l,g),off:g=>w(l,g)}},tr=l=>(m,C)=>{const{getState:w,setState:g,subscribe:tt,unsubscribe:at,clean:nt}=l;return C!==void 0&&g({[m]:C},!0),{getState:()=>w(m),setState:(et,J)=>g({[m]:et},J),subscribe:et=>tt(m,et),unsubscribe:()=>at(m),clean:()=>nt(m)}},er=le(),he=tr(er),Te=vr("push-emitter"),rr=vr("replace-emitter"),ae=he("route-store"),wr=Vt(),Oe=le(),ce=xr(Oe),Ue=()=>![typeof window,typeof document].includes("undefined"),Hr=l=>{if(!Ue())return;const m=document.createElement("div");return m.innerHTML=l,m.children[0]};var kr=Object.defineProperty,Tr=(l,m,C)=>m in l?kr(l,m,{enumerable:!0,configurable:!0,writable:!0,value:C}):l[m]=C,Cr=(l,m,C)=>(Tr(l,typeof m!="symbol"?m+"":m,C),C);class or extends $.default.Component{constructor(){super(...arguments),Cr(this,"state",{error:null})}static getDerivedStateFromError(m){return{error:m}}componentDidCatch(m,C){const{errorReport:w}=this.props;typeof w=="function"&&w({error:m,info:C.componentStack})}render(){const{error:m}=this.state,{fallback:C,children:w}=this.props;return m?C(m):w}}const fe=({children:l,report:m})=>{const C=(0,$.useRef)();return C.current?.state&&(C.current.state.error=null),(0,Nt.jsx)(or,{ref:C,fallback:(w,g)=>te({error:w,info:g}),errorReport:m,children:l})};var Xr=it(62),pe=it.n(Xr),Or=it(36),ue=it.n(Or),Nr=it(793),nr=it.n(Nr),Kr=it(892),Ne=it.n(Kr),Pe=it(173),ar=it.n(Pe),Vr=it(464),ir=it.n(Vr),Ie=it(990),u={};u.styleTagTransform=ir(),u.setAttributes=Ne(),u.insert=nr().bind(null,"head"),u.domAPI=ue(),u.insertStyleElement=ar();var v=pe()(Ie.Z,u);const k=Ie.Z&&Ie.Z.locals?Ie.Z.locals:void 0,O=({global:l,absolute:m})=>(0,Nt.jsx)("div",{className:`spinner${l?" global":""}${m?" absolute":""}`,children:(0,Nt.jsx)("figure",{className:"spinning"})}),L=()=>{const l=(0,$.useRef)([]);return(0,$.useEffect)(()=>()=>{l.current.map(m=>m.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,$.useCallback)((m,C=!0)=>{const w=Dt(m,C);return l.current.indexOf(w)===-1&&l.current.push(w),w.promiseFn},[])}},st=(l={})=>{const{cancelablePromise:m}=L(),[C,w]=(0,$.useState)(l),g=(0,$.useRef)({}),tt=(0,$.useRef)({}),at=(0,$.useCallback)((et=null)=>{Array.isArray(et)&&et.length?et.map(J=>g.current[J]=l[J]):g.current=l},[]),nt=(0,$.useCallback)((et,J,_t=!1)=>{const $t=Object.keys(et),Bt=JSON.stringify($t.sort());if(!tt.current[Bt]){tt.current[Bt]=!0,_t&&at(Array.isArray(_t)?_t:$t),$t.map(Ct=>{g.current[Ct]||(g.current[Ct]={}),g.current[Ct].pending=!0}),w({...g.current});for(let Ct=0,At=$t.length;Ct<At;Ct++){const It=$t[Ct];m(et[It]).then(yt=>{let{result:ft,errMsg:Wt}=yt;Ct===At-1&&(tt.current[Bt]=!1),typeof J=="function"&&(ft=J(ft)||ft),g.current[It]={...ft,pending:!1},Wt===!1&&w({...g.current})}).catch(yt=>{throw Ct===At-1&&(tt.current[Bt]=!1),g.current[It]={error:yt,pending:!1},w({...g.current}),yt})}}},[]);return[C,nt,at]},gt=l=>Object.keys(l).length,St=l=>{const{Comp:m,restResolve:C,loadPromise:w,params:g,children:tt}=l,[at,nt]=st(),[et,J]=st();return(0,$.useEffect)(()=>{gt(C)&&nt(C),gt(w)&&J(w)},[C,w]),(0,$.useEffect)(()=>{const _t=gt(at);_t&&_t===gt(C)&&g.store.setState(at)},[at]),(0,Nt.jsx)(m,{...g,...at,...et,children:tt})},ct=l=>l===!1?null:A(l)?l:ht(l)?(0,Nt.jsx)(l,{}):(0,Nt.jsx)(O,{}),qt=({Loading:l,ErrorBoundary:m,loadedComp:C})=>{const w=(0,Nt.jsx)($.Suspense,{fallback:ct(l),children:C});return m===!1?w:ht(m)?(0,Nt.jsx)(m,{children:w}):(0,Nt.jsx)(fe,{children:w})},se=({Comp:l,routerProps:m,children:C})=>{const{params:w,...g}=m,{loading:tt,errorBoundary:at,...nt}=w,et=(0,Nt.jsx)(St,{Comp:l,...g,params:nt,children:C});return qt({Loading:tt,ErrorBoundary:at,loadedComp:et})},_e={},Re=(l,m,C,w)=>kt(C)?C.then(g=>se({Comp:l,routerProps:m,children:g.default??g})):se({Comp:l,routerProps:m,children:C}),we=(l,m,C)=>{const w={},g={};return p(l)?(Object.keys(l).map(tt=>{const at=m.getState(tt);at==null?g[tt]=l[tt](C):w[tt]=at}),{cachedResolve:w,restResolve:g}):{cachedResolve:w,restResolve:g}},sr=(l,m)=>{if(!p(l))return{};const C={};return Object.keys(l).map(w=>C[w]=l[w](m)),C},Er=l=>{const{current:m,menu:C,...w}=l,g=m.map(nt=>{const{component:et,resolve:J,loadData:_t,loading:$t,errorBoundary:Bt,icon:Ct,...At}=nt;return At}),tt=[...m].filter(nt=>nt.component),at=(nt=0)=>{if(!tt.length)return null;const et=tt.shift(),{component:J,resolve:_t,loadData:$t,icon:Bt,key:Ct,...At}=et;if(typeof J=="function"||kt(J)){const It=At.path;let yt=_e[It];const{cachedResolve:ft,restResolve:Wt}=we(_t,w.store,At),Gt={loadPromise:sr($t,At),restResolve:Wt,params:{current:g,...w,...At,...ft}},ie=at(nt+1);if(yt)return Re(yt,Gt,ie,It);try{yt=J(),yt=A(yt)?J:yt}catch{yt=J}return kt(yt)?yt.then(de=>(yt=de.default??de,_e[It]=yt,Re(yt,Gt,ie,It))):(_e[It]=yt,Re(yt,Gt,ie,It))}return typeof J=="string"?Hr(J):J};return at()},Me=l=>{const[m,C]=(0,$.useState)(l),[w,g]=(0,$.useState)(),[tt,at]=(0,$.useState)(),nt=(0,$.useRef)(),et=(0,$.useRef)(),J=(0,$.useRef)(),_t=(0,$.useRef)(),$t=()=>{typeof nt.current=="function"&&(nt.current({cancel:U.cancelMsg}),nt.current=null)},Bt=(0,$.useCallback)(ft=>{typeof ft=="function"?C(Wt=>({...Wt,...ft(Wt)})):p(ft)&&C(Wt=>({...Wt,...ft}))},[]),Ct=(ft,Wt="pushState")=>{const{basepath:Gt,browserRouter:ie}=_t.current,de=J.current,Fe=yr(ft,Gt,ie,de);if(!Fe)return;const{path:ke,params:$e}=Fe;yt({inputPath:ke,inputParams:$e},()=>history[Wt](ft?.state,"",ke))},At=(0,$.useCallback)(ft=>Ct(ft),[]),It=(0,$.useCallback)(ft=>Ct(ft,"replaceState"),[]),yt=(0,$.useCallback)(({inputPath:ft="",inputParams:Wt={}},Gt)=>{const ie=+new Date,{browserRouter:de,childKey:Fe,idKey:ke,title:$e,routers:me,beforeRender:Ir,afterRender:qe,basepath:jr,allowedNotFound:xe,...ho}=_t.current;if(!ft){const{path:ge,params:Ce}=Je(de);ft=ge,Wt={...Wt,...Ce}}const cr=J.current;new Promise((ge,Ce)=>{me?.length||Ce("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),ft!==J.current&&typeof Ir=="function"?Ir({path:ft,params:Wt,prevPath:cr},ge,Ce):ge()}).then(ge=>{if(ge===!1)return;const Ce=ge?.path;if(Ce&&Tt(jr,Ce,de)!==ft){It(ge);return}et.current=et.current??ft;const{redirect:Le,current:We,menu:fo}=Mt(X(me),ft.split("?")[0],Wt,Fe,ke);if(Le){if(xe&&Le===P&&(typeof xe=="boolean"||typeof xe=="string"&&Qe(et.current,xe)||W(xe)&&xe.find(ye=>Qe(et.current,ye))))return;if(W(Le)){console.error(`\u522B\u95F9\uFF0C[${[ft,...Le].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Le===P?It({path:Le}):At({path:Le,exact:!0})}Gt?.(),ft?.split("?")[0]!==J.current?.split("?")[0]&&Ar(),q(We,$e);const ur={eventBus:wr,store:Oe,useStore:ce,...ho,updateRouter:Bt,emitRouter:ae.subscribe,router:{push:At,replace:It},current:We,menu:fo,inputPath:et.current,prevPath:cr,browserRouter:de,basepath:jr,title:$e,history:{...M,goBack:ye=>At({...ye,path:cr})}};ae.setState(ur);const Rr=Er(ur);if(J.current=ft,et.current=null,$t(),kt(Rr)){const{promiseFn:ye,cancelFn:Gr}=Dt(Rr,{delay:U.delay,msg:{timeout:U.timeoutMsg}});return nt.current=Gr,at(!0),ye.then(He=>{nt.current=null;const{result:Ae,errMsg:Jr}=He,be=Jr===!1?Ae:Jr?.timeout?te({error:{errMsg:`${ft} ${Jr.timeout}`}}):null;be&&(at(!1),Ze(qe,We.slice(-1)[0],ie),g(be))}).catch(He=>{throw nt.current=null,at(!1),Ze(qe,We.slice(-1)[0],ie),g(te({error:He})),He})}Ze(qe,We.slice(-1)[0],ie),g(Rr)}).catch(ge=>{throw g(te({error:ge})),ge})},[]);return(0,$.useEffect)(()=>{const{childKey:ft="children",idKey:Wt="path",browserRouter:Gt=!1,routers:ie=[],basepath:de="",exact:Fe=!1,inputPath:ke="",inputParams:$e={},...me}=m,Ir=mt(de),qe=Lt(X(ie),Gt,ft,Wt,Ir,Fe);_t.current={...me,childKey:ft,idKey:Wt,browserRouter:Gt,routers:qe,basepath:Ir};const jr=Gt?"popstate":"hashchange",xe=()=>yt({});return yt({inputPath:ke,inputParams:$e}),Te.on(At),rr.on(It),window.addEventListener(jr,xe,!1),()=>{$t(),Te.off(At),rr.off(It),window.removeEventListener(jr,xe,!1)}},[m]),{updateRouter:Bt,output:w,loading:tt}},Xe=l=>{const{to:m,onClick:C,preventDefault:w,stopPropagation:g=!0,exact:tt=!0,target:at,...nt}=l,et=()=>{const J=typeof m=="string"?{exact:tt,path:m}:{exact:tt,...m};Te.emit(J)};return J=>{if(J.preventDefault(),g&&J.stopPropagation(),!nt?.disabled){if(!w){if(at){const{browserRouter:_t,basepath:$t}=ae.getState();Dr(m,at,$t,_t);return}et()}typeof C=="function"&&C()}}};var ze=it(267),lr={};lr.styleTagTransform=ir(),lr.setAttributes=Ne(),lr.insert=nr().bind(null,"head"),lr.domAPI=ue(),lr.insertStyleElement=ar();var co=pe()(ze.Z,lr);const Be=ze.Z&&ze.Z.locals?ze.Z.locals:void 0,Ke=l=>{if(!l)return Be.link;const m=l.trim().split(" ").filter(Boolean),C=m.find(w=>w==="active")?[Be.active]:[];return[Be.link,...C,...m].join(" ")},qr=l=>{const{to:m,onClick:C,preventDefault:w,stopPropagation:g,exact:tt,target:at,className:nt,...et}=l;return(0,Nt.jsx)("span",{onClick:Xe(l),className:Ke(nt),...et})},Pr=()=>{const[l,m]=(0,$.useState)(ae.getState());return(0,$.useEffect)(()=>ae.subscribe(C=>m(C)),[]),l},Yr=ae.getState,uo=ae.subscribe})();var E=B.rU,s=B.cb,z=B.Bv,I=B.yj,ut=B.tv},18124:function(ve,Kt,jt){var Y;jt.d(Kt,{Nr:function(){return $},PQ:function(){return Nt},Vd:function(){return ut},Wy:function(){return W},fH:function(){return E},r5:function(){return s},rE:function(){return mt},rf:function(){return Yt},xd:function(){return te}});var c=jt(27378),Rt={837:(T,Vt,Zt)=>{var ne,le=Zt(810),xr=Symbol.for("react.element"),gr=Symbol.for("react.fragment"),$r=Object.prototype.hasOwnProperty,h=le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function y(K,R,U){var P,M={},rt=null,Ft=null;U!==void 0&&(rt=""+U),R.key!==void 0&&(rt=""+R.key),R.ref!==void 0&&(Ft=R.ref);for(P in R)$r.call(R,P)&&!Q.hasOwnProperty(P)&&(M[P]=R[P]);if(K&&K.defaultProps)for(P in R=K.defaultProps,R)M[P]===void 0&&(M[P]=R[P]);return{$$typeof:xr,type:K,key:rt,ref:Ft,props:M,_owner:h.current}}ne=gr,Vt.jsx=y,ne=y},322:(T,Vt,Zt)=>{T.exports=Zt(837)},810:T=>{var Vt=ne=>{var le={};return it.d(le,ne),le},Zt=ne=>()=>ne;T.exports=Y||(Y=jt.t(c,2))}},Et={};function it(T){var Vt=Et[T];if(Vt!==void 0)return Vt.exports;var Zt=Et[T]={exports:{}};return Rt[T](Zt,Zt.exports,it),Zt.exports}it.d=(T,Vt)=>{for(var Zt in Vt)it.o(Vt,Zt)&&!it.o(T,Zt)&&Object.defineProperty(T,Zt,{enumerable:!0,get:Vt[Zt]})},it.o=(T,Vt)=>Object.prototype.hasOwnProperty.call(T,Vt);var B={};(()=>{it.d(B,{fH:()=>Vt,r5:()=>h,Nd:()=>R,KY:()=>$r,Vd:()=>M,Nr:()=>Ft,D:()=>pt,Wy:()=>Ze,zX:()=>Dr,Cd:()=>zt,Yz:()=>yr,D9:()=>Qe,cb:()=>Je,vO:()=>vr,Rx:()=>Tr,OH:()=>Cr,oR:()=>Or,rE:()=>ar,PQ:()=>ir,rf:()=>Mt,xd:()=>Ie});var T=it(810);const Vt=u=>(v,k)=>{const[O,L]=(0,T.useState)(()=>{const ct=u?.getState(v);return ct!==void 0?ct:(k!==void 0&&u?.setState({[v]:k},!0),k)}),st=(0,T.useCallback)(ct=>u?.setState({[v]:typeof ct=="function"?ct(u?.getState(v)):ct}),[]),gt=(0,T.useCallback)(ct=>u?.subscribe(v,ct),[]),St=(0,T.useCallback)((ct=ct)=>u?.clean(ct),[]);return(0,T.useEffect)(()=>{u?.subscribe(v,ct=>L(ct))},[]),[O,st,gt,St]},Zt=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),ne=u=>Zt(u)==="object",le=u=>Zt(u)==="function",xr=u=>Zt(u)==="promise"||ne(u)&&le(u.then),gr=(u,v=12e4,k="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!xr(u))return{};let O=null,L=null;return{promiseFn:new Promise((st,gt)=>{O=(St="canceled")=>{clearTimeout(L),st({canceled:!0,errMsg:St})},v&&(v=typeof v!="number"?12e4:v,L=setTimeout(()=>O(k),v)),u.then(St=>{clearTimeout(L),st({result:St,errMsg:!1})}).catch(St=>{clearTimeout(L),gt(St)})}),cancelFn:O}},$r=()=>{const u=(0,T.useRef)([]);return(0,T.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,T.useCallback)((v,k=!0)=>{const O=gr(v,k);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},h=(u={})=>{const{cancelablePromise:v}=$r(),[k,O]=(0,T.useState)(u),L=(0,T.useRef)({}),st=(0,T.useRef)({}),gt=(0,T.useCallback)((ct=null)=>{Array.isArray(ct)&&ct.length?ct.map(qt=>L.current[qt]=u[qt]):L.current=u},[]),St=(0,T.useCallback)((ct,qt,se=!1)=>{const _e=Object.keys(ct),Re=JSON.stringify(_e.sort());if(!st.current[Re]){st.current[Re]=!0,se&&gt(Array.isArray(se)?se:_e),_e.map(we=>{L.current[we]||(L.current[we]={}),L.current[we].pending=!0}),O({...L.current});for(let we=0,sr=_e.length;we<sr;we++){const Er=_e[we];v(ct[Er]).then(Me=>{let{result:Xe,errMsg:ze}=Me;we===sr-1&&(st.current[Re]=!1),typeof qt=="function"&&(Xe=qt(Xe)||Xe),L.current[Er]={...Xe,pending:!1},ze===!1&&O({...L.current})}).catch(Me=>{throw we===sr-1&&(st.current[Re]=!1),L.current[Er]={error:Me,pending:!1},O({...L.current}),Me})}}},[]);return[k,St,gt]},Q=u=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(u),y=u=>new Promise((v,k)=>{const O=new FileReader;O.readAsDataURL(u),O.addEventListener("load",()=>v(O.result)),O.addEventListener("error",L=>k(L))}),K=async u=>{if(!Q(u))return u;const v=await(await fetch(decodeURIComponent(u))).blob();return await y(v)},R=u=>{const[v,k]=(0,T.useState)(u);return(0,T.useEffect)(()=>{(async O=>{const L=await K(O);k(L)})(u)},[u]),v},U=(u,v)=>Object.prototype.hasOwnProperty.call(u??{},v),P=u=>U(u,"current"),M=(u,v,k="click")=>{(0,T.useEffect)(()=>{const O=st=>{const gt=P(u)?u.current:u;gt?.contains&&!gt.contains(st.target)&&v(st)},L=typeof k=="string"?[k]:k;return L.map(st=>{document.addEventListener(st,O,!1)}),()=>{L.map(st=>{document.removeEventListener(st,O,!1)})}},[u,v,k])},rt=(u=()=>{},v=60)=>{let k=null;return function(...O){clearTimeout(k),k=setTimeout(()=>u.apply(this,O),v)}},Ft=(u,v=60)=>(0,T.useMemo)(()=>rt(u,v),[v]),zt=()=>{const u=(0,T.useRef)(!0);return u.current?(u.current=!1,!0):!1},Mt=(u,v=[])=>{const k=zt();(0,T.useEffect)(()=>{if(!k)return u()},v)},pt=(u,v=450)=>{const[k,O]=(0,T.useState)(u);return Mt(()=>{let L;return u||v===0?O(u):L=setTimeout(()=>O(u),v),()=>L&&clearTimeout(L)},[u]),[k,O]},Tt=()=>![typeof window,typeof document].includes("undefined"),Lt=u=>Zt(u).indexOf("element")>-1,oe=(u=null)=>Tt()?Lt(u)?{width:u.clientWidth,height:u.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Ut=(u,v)=>{const k=[],O=u.children??[];for(let L=0,st=O.length;L<st;L++){const gt=O[L];gt.className.indexOf(v)>-1&&k.push(gt)}return k.length===0?null:k.length===1?k[0]:k},Ar=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",v,!1),v()},k.type="text/html",u.appendChild(k),k.data="about:blank",k},q=(u,v=60)=>{if(!Tt())return;u=P(u)?u.current:u??document.body;let k=Ut(u,"resize-sensor"),O=[];const L=rt(()=>O.map(ct=>ct(u)),v),st=ct=>{Ut(u,"resize-sensor")||(k=Ar(u,L)),O.indexOf(ct)===-1&&O.push(ct)},gt=ct=>{const qt=O.indexOf(ct);qt!==-1&&O.splice(qt,1),O.length===0&&k&&St()},St=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",L,!1),k.parentNode.removeChild(k),k=void 0,O=[])};return{element:u,bind:st,unbind:gt,destroy:St}},Je=(u={})=>{const v=(0,T.useRef)(0),[k,O]=(0,T.useState)(u),L=(0,T.useCallback)(st=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>O(st))},[]);return(0,T.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[k,L]},Ze=(u=null,v=60)=>{const k=P(u)?u.current:u,{bind:O,destroy:L}=q(k,v),[st,gt]=Je(oe(k));return(0,T.useEffect)(()=>(O(()=>k&&gt(oe(k))),()=>L()),[k]),st},Dr=u=>{const v=(0,T.useRef)(null);return(0,T.useLayoutEffect)(()=>{v.current=u}),(0,T.useCallback)(v.current,[])},yr=(u,v)=>{const k=(0,T.useRef)();(0,T.useEffect)(()=>{k.current=u},[u]),(0,T.useEffect)(()=>{if(v){const O=setInterval(()=>k.current(),v);return()=>clearInterval(O)}},[v])},Qe=u=>{const v=(0,T.useRef)();return(0,T.useEffect)(()=>{v.current=u},[u]),v.current},br=(u=null)=>Tt()?Lt(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},vr=(u=null)=>{const[v,k]=Je(br(u));return(0,T.useEffect)(()=>{const O=()=>k(br(u)),L=Lt(u)?u:window;return L.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>L.removeEventListener("scroll",O)},[u]),v},tr=u=>Zt(u)==="array",er=u=>tr(u)&&!!u.length,he=(u,v,k=[],O=!1,L=null)=>er(u)?v?(k=typeof k=="string"?k.split(","):k,u.filter(st=>(k=k.length>0?k:Object.keys(st),k.filter(gt=>{const St=st[gt];if(St==null)return!1;if(O)return St===v;const ct=new RegExp(v,"gi"),qt=St.toString().match(ct);return qt&&L&&(st[gt]=L(St.toString().replace(ct,`<span style="background-color:yellow">${qt[0]}</span>`),{display:"inline-block"})),qt}).length))):u:[],Te=(u,v="id")=>{if(!er(u))return u;const k=[],O=[];return u.map(L=>{const st=ne(L)?L[v]:L;O.includes(st)||(O.push(st),k.push(L))}),k},rr=u=>u?.$$typeof&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",ae=u=>u?.__v_isVNode,wr=u=>{if(!tr(u)&&!ne(u))return u;const v=tr(u)?[]:{};for(const k in u)if(U(u,k)){const O=u[k];v[k]=rr(O)||ae(O)||typeof O!="object"?O:O!==u?wr(O):"cyclic"}else Object.setPrototypeOf(v,{[k]:u[k]});return v},Oe=wr,ce=u=>(v,k="children")=>{if(!Array.isArray(v))return v;const O=Oe(v),L=st=>{const gt=[];return st.map(St=>{if(er(St[k])){const ct=L(St[k])||[];St[k]=ct,ct.length>0&&gt.push(St)}}),u(st,gt)};return L(O)},Ue=(u,v,k,O="name",L="id",st="children",gt=!1)=>ce((St,ct)=>Te([...he(St,v,O,gt,k),...ct],L))(u,st);var Hr=it(322);const kr=(u,v)=>(0,Hr.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Tr=(u=null,v=kr)=>{const[k,O]=(0,T.useState)(u),L=(0,T.useCallback)((...st)=>{const[gt,St,...ct]=st;if(!St)O(null);else{st=[gt,St,v,...ct];const qt=Ue(...st);O(qt)}},[]);return[k,L]},Cr=u=>{const[v,k]=(0,T.useState)(u);return(0,T.useEffect)(()=>k(u),[u]),[v,k]},or=()=>{const u={};return{on:(v,k)=>{u[v]||(u[v]=[]),u[v].indexOf(k)===-1&&u[v].push(k)},emit:(v,k)=>{u[v]&&u[v].map(O=>O(k))},off:(v,k=null)=>{if(u[v]){if(typeof k!="function")return delete u[v];const O=u[v].indexOf(k);O>-1&&(u[v].splice(O,1),u[v].length||delete u[v])}}}},fe=u=>{const v={};for(let k in u)U(u,k)||(v[k]=u[k]);return v},Xr=(u,v)=>{if(!ne(u))return v;if(!ne(v))return u;const k={...fe(u),...fe(v)},O={...u,...v};return Object.keys(k).map(L=>{Object.setPrototypeOf(O,{[L]:k[L]})}),O},pe=(()=>{const{on:u,emit:v,off:k}=or(),O={};return{getState:L=>Oe(O[L]),setState:(L,st=!1)=>{if(typeof L=="function"&&(L=L(Oe(O))),!ne(L))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const gt=Oe(L);Object.keys(gt).map(St=>{const ct=O[St],qt=gt[St],se=ne(qt)&&ne(ct)?Xr(ct,qt):qt;!st&&v(St,se),O[St]=se})},subscribe:(L,st)=>(u(L,st),()=>k(L,st)),unsubscribe:k,clean:L=>{typeof L=="string"?O[L]=void 0:Array.isArray(L)?L.map(st=>O[st]=void 0):Object.keys(O).map(st=>O[st]=void 0)}}})(),Or=Vt(pe),ue=u=>u<10?"0"+u:u,Nr=(u=new Date)=>{const v=new Date(u),k=v.getFullYear(),O=v.getDay(),L=ue(v.getMonth()+1),st=ue(v.getDate()),gt=ue(v.getHours()),St=ue(v.getMinutes()),ct=ue(v.getSeconds());return[k,L,st,gt,St,ct,O]},nr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Kr=(u,v,k="-")=>u.replace(new RegExp(k,"g"),v),Ne=(u=new Date,v=["-","-"," ",":",":",""],k=nr)=>{const O=Nr(u);let L="";return v.map((st,gt)=>L+=(gt===6?k[O[gt]]:O[gt]??"")+st),L},Pe=()=>Ne(new Date,["-","-"," ",":",":"," ",""]),ar=()=>{const[u,v]=(0,T.useState)("");return yr(()=>{v(Pe())},1e3),[u]},Vr=u=>++u,ir=()=>{const[,u]=(0,T.useState)(0);return(0,T.useCallback)(()=>u(Vr),[])},Ie=()=>{const[u,v]=Je(oe());return(0,T.useEffect)(()=>{const k=()=>v(oe());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),u}})();var E=B.fH,s=B.r5,z=B.Nd,I=B.KY,ut=B.Vd,$=B.Nr,S=B.D,W=B.Wy,p=B.zX,A=B.Cd,F=B.Yz,Z=B.D9,V=B.cb,X=B.vO,ht=B.Rx,kt=B.OH,Dt=B.oR,mt=B.rE,Nt=B.PQ,Yt=B.rf,te=B.xd},71090:function(ve,Kt,jt){jt.d(Kt,{$L2:function(){return Va},A_F:function(){return yi},B5o:function(){return fi},BWC:function(){return li},CLv:function(){return hi},Few:function(){return ti},JaC:function(){return Za},Lgs:function(){return zi},MTn:function(){return qa},NA2:function(){return ci},PTJ:function(){return ni},Qfx:function(){return ai},TaN:function(){return di},UhT:function(){return Ya},Vcq:function(){return wi},XBe:function(){return Ci},XBv:function(){return ii},_O2:function(){return Ei},_iG:function(){return Ja},_vH:function(){return bi},afD:function(){return oi},azd:function(){return ki},dKu:function(){return ri},eyl:function(){return si},f9u:function(){return _i},fHt:function(){return Ka},gVz:function(){return gi},jg2:function(){return xi},k$y:function(){return ji},mrB:function(){return ei},muM:function(){return Ua},nL5:function(){return mi},qg7:function(){return Qa},rWO:function(){return ui},tOc:function(){return vi},vQq:function(){return Xa},xDX:function(){return Ga},yfi:function(){return Si},ywV:function(){return pi}});var Y={};(function(){Y.d=function(t,e){for(var r in e)Y.o(e,r)&&!Y.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Y.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var c={};Y.d(c,{NzM:function(){return Et},wBC:function(){return $},O39:function(){return W},cnu:function(){return Z},E4D:function(){return X},TRp:function(){return kt},zI1:function(){return mt},Ufj:function(){return Yt},GxO:function(){return Zt},cu2:function(){return le},BcS:function(){return gr},lPd:function(){return rt},dC1:function(){return zt},$L2:function(){return pt},Vji:function(){return h},YxP:function(){return P},UhT:function(){return er},JaC:function(){return Te},o4B:function(){return Oe},Hlr:function(){return nr},muM:function(){return L},OiV:function(){return pe},KTn:function(){return gt},lwL:function(){return ct},d9v:function(){return k},yCD:function(){return se},qCK:function(){return Re},vQq:function(){return sr},fHt:function(){return Me},azq:function(){return co},dSY:function(){return C},MTn:function(){return J},RYO:function(){return ze},WAo:function(){return $t},GVc:function(){return Ne},Emy:function(){return Ct},v9O:function(){return It},DsO:function(){return ft},_lj:function(){return Gt},vO6:function(){return de},xDX:function(){return cr},hf3:function(){return Qr},ip7:function(){return Sr},uYe:function(){return g},DgJ:function(){return ar},rae:function(){return _r},YBu:function(){return ko},_iG:function(){return Eo},hXT:function(){return po},gQq:function(){return So},D_D:function(){return oo},$nD:function(){return _o},dtG:function(){return mo},Y0R:function(){return Ur},qg7:function(){return Ko},Xxf:function(){return zo},tSM:function(){return Fo},Few:function(){return xo},xHg:function(){return $o},aoj:function(){return Ao},Dlm:function(){return Do},mrB:function(){return zr},dKu:function(){return d},v1d:function(){return be},afD:function(){return _},Lz5:function(){return wt},xZX:function(){return Xt},G_1:function(){return Ot},osI:function(){return Qt},PTJ:function(){return Ve},Qfx:function(){return Fr},bti:function(){return We},XBv:function(){return Po},eyl:function(){return Cn},y35:function(){return En},hKD:function(){return fr},BWC:function(){return Ge},oLi:function(){return B},NA2:function(){return _n},S3Y:function(){return Ce},pvT:function(){return sn},m2f:function(){return Ut},rWO:function(){return zn},A$w:function(){return Fn},kJL:function(){return s},S9U:function(){return fe},dYC:function(){return xe},jUY:function(){return T},J_U:function(){return $n},kKo:function(){return A},VZO:function(){return An},mf2:function(){return Cr},w1q:function(){return Dn},Kn2:function(){return y},ncl:function(){return Tn},LWC:function(){return ir},dqb:function(){return q},Kjn:function(){return On},TaN:function(){return je},CBv:function(){return qe},rTd:function(){return Mr},B73:function(){return Nn},SSA:function(){return u},CLv:function(){return Pn},F$z:function(){return In},XT_:function(){return ln},omS:function(){return Rn},poV:function(){return Mn},VXY:function(){return Bn},xsP:function(){return Ln},HPs:function(){return Wn},TSy:function(){return Hn},B5o:function(){return Io},u1A:function(){return Vn},WAY:function(){return Ro},I8J:function(){return nt},ywV:function(){return Xn},bEN:function(){return Kn},$45:function(){return qn},TUk:function(){return Gn},T7B:function(){return R},CEd:function(){return Jn},IHq:function(){return Qn},SkG:function(){return hn},Smz:function(){return kr},nL5:function(){return Ue},ON:function(){return ra},eiS:function(){return oa},Frc:function(){return na},z5J:function(){return aa},scT:function(){return ia},hd2:function(){return Bo},AnA:function(){return sa},kYX:function(){return la},yZP:function(){return ca},IVd:function(){return Mo},SIr:function(){return da},jg2:function(){return ha},gVz:function(){return fa},puc:function(){return xa},Azz:function(){return ga},X5u:function(){return Ze},dPh:function(){return ya},SMZ:function(){return Lt},kro:function(){return I},nPi:function(){return ba},US:function(){return va},A_F:function(){return ye},_vH:function(){return Ae},gmH:function(){return He},DYV:function(){return wa},qi2:function(){return ka},tOc:function(){return Ca},hau:function(){return ja},FaZ:function(){return ur},uyF:function(){return Sa},Vcq:function(){return _a},XKW:function(){return za},azd:function(){return ae},P2K:function(){return Fa},XBe:function(){return Ta},JZ7:function(){return gn},ABi:function(){return ke},ogC:function(){return Oa},_O2:function(){return no},P0C:function(){return Na},Uo5:function(){return Pa},Two:function(){return hr},tYQ:function(){return Ia},tVn:function(){return l},pHy:function(){return Ra},k$y:function(){return me},yfi:function(){return Ma},fl8:function(){return Ba},f9u:function(){return La},ZV1:function(){return Wa},Lgs:function(){return Ha}});var Et=(t,e="key",r="value")=>{const o={};return(t||[]).map(a=>o[a[e]]=a[r]),o},B=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),s=t=>B(t)==="array",I=t=>(e,r,o="id",a="children")=>{if(!s(e))return null;const f=(b,N="")=>{for(let H=0,lt=b.length;H<lt;H++){const vt=b[H];if(vt[o]===r)return t(b,H,N)||b[H];if(s(vt[a])){const ee=f(vt[a],vt[o]);if(ee)return ee}}};return f(e),e},$=(t,e,r,o="id",a="children")=>I((f,b)=>f.splice(b,0,r))(t,e,o,a),W=(t,e,r,o,a="id",f="children")=>I((b,N)=>{const H=b[N];H.children?H.children.splice(o,0,r):H.children=[r]})(t,e,a,f),A=t=>B(t).indexOf("element")>-1,Z=(t,e="")=>{if(!A(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),a=[...new Set([...r,...o])];t.className=a.join(" ")},X=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},kt=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},mt=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Yt=(t,e,r,o="id",a="children")=>I((f,b)=>{const N=f[b];return N[a]=[...N[a]||[],...r],N})(t,e,o,a),T=()=>![typeof window,typeof document].includes("undefined"),Zt=t=>{if(T())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=a=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},le=(t,e)=>{if(T())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(a=>a.getAttribute("huxy-css-hash")).filter(Boolean).find(a=>a===e))r();else{const a=document.createElement("style");a.onerror=f=>o(new Error(`Failed to load '${e}' style`)),a.onload=r,a.innerHTML=t,a.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(a=>a.href===t))r();else{const a=document.createElement("link");a.onerror=f=>o(new Error(`Failed to load '${t}'`)),a.onload=r,a.href=t,a.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}})},gr=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},h=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:a})=>r[o]=a),r},y=t=>B(t)==="object";const K=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,y(o)?e+=`${r}=${K(o)}`:Array.isArray(o)?e+=`${r}=${P(o)}`:e+=`${r}=${o}`}),`{${e}}`};var R=K;const U=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,y(r)?e+=R(r):Array.isArray(r)?e+=U(r):e+=`${r}`}),`[${e}]`};var P=U,rt=t=>(e,r="id",o="children",a=-1)=>{if(!s(e))return e;const f={},b=e.map(N=>N[r]);return[...e].map(N=>{const H={...N},{[r]:lt}=H;if(lt!=null){let{parentId:vt}=H;vt==null&&(vt=t?.(H)??a,H.parentId=vt),f[lt]||(f[lt]=[]),H[o]=f[lt],f[vt]||(f[vt]=[]),f[a]||(f[a]=[]),b.includes(vt)?f[vt].push(H):f[a].push(H)}}),f[a]},zt=(t,e="id",r="children",o=-1)=>rt(a=>a[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),pt=(t,e="path",r="children",o=null)=>rt(a=>{const f=a[e],b=f.match(/.*\/[^:/]+\/:[^/]+/);return b?b[0].match(/(.*)\/:+/)?.[1]??o:f.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),Lt=()=>T()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Ut=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),q=t=>Ut(t,"current"),Ze=(t=0,e)=>{T()&&(e=q(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},yr=`.huxy-totop-bar {
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
}`;const Qe=()=>document.getElementsByClassName("huxy-totop-bar")[0],br=t=>{if(Qe())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Ze(),!1),e},vr=()=>{const t=Qe();t&&document.body.removeChild(t)};var er=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!T())return;le(yr,"huxy-backtop-css");const r=()=>{Lt()>t?br(e):vr()};return(()=>(document.addEventListener("scroll",r,!1),()=>{vr(),document.removeEventListener("scroll",r,!1)}))()},Te=(t=0,e=2)=>parseInt(String(t),e),ae=(t=0,e=2)=>Number(t).toString(e),Oe=(t=0,e=2,r=16)=>ae(Te(t,e),r),Ue=t=>{if(!y(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const a=o>0?"&":"?";e.push(`${a}${r}=${t[r]}`)}),e.join("")},kr=t=>{if(!y(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},Cr=t=>B(t)==="function",fe=t=>B(t)==="promise"||y(t)&&Cr(t.then),pe=(t,e=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!fe(t))return{};let o=null,a=null;return{promiseFn:new Promise((f,b)=>{o=(N="canceled")=>{clearTimeout(a),f({canceled:!0,errMsg:N})},e&&(e=typeof e!="number"?12e4:e,a=setTimeout(()=>o(r),e)),t.then(N=>{clearTimeout(a),f({result:N,errMsg:!1})}).catch(N=>{clearTimeout(a),b(N)})}),cancelFn:o}};const Or=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>kr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>Ue(t).slice(1)}],ue=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(a=>t[a]);if(o.length===1){const a=o[0],f=r?e:a;return f==="params"?{query:t[a]}:{result:t[a],type:f}}else if(o.length>1){const a=o.filter(b=>b!=="params").slice(-1)[0],f=r?e:a;return f==="params"?{query:t.params||t[a]}:{query:t.params,result:t[a],type:f}}};var nr=(t,e)=>r=>(o,a={})=>{const{headers:f,dataType:b,data:N,formData:H,form:lt,params:vt,...ee}=a,re={data:N,formData:H,form:lt,params:vt};let Wr;const{query:mr,result:yn,type:Fi}=ue(re,b)||{};if(!ee.body&&yn){const go=Or.find(yo=>yo.type===Fi);Wr=go.headers,ee.body=go.body(yn)}mr&&(o=`${o}${Ue(mr)}`);const{promiseFn:$i}=pe(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Wr,...f},...ee}),e);return $i.then(({result:go,errMsg:yo})=>t(yo?{status:408,statusText:yo}:go))},Ne=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let a=!1;for(let f in o)Ut(o,f)&&r(o[f])&&(o[f]="cyclic",a=!0);return a}return!1};return r(t)&&t};const Pe=(t,e)=>{const r=B(t),o=B(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Ne(t)&&Ne(e))return Pe(t,e);for(let a in e)if(Ut(t,a)!==Ut(e,a)||!Pe(t[a],e[a]))return!1;return!0};var ar=Pe,ir=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",u=t=>t?.__v_isVNode;const v=t=>{if(!s(t)&&!y(t))return t;const e=s(t)?[]:{};for(const r in t)if(Ut(t,r)){const o=t[r];e[r]=ir(o)||u(o)||typeof o!="object"?o:o!==t?v(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var k=v,L=(t=100)=>{const e=[];let r=-1;const o=f=>{const b=e.length,N=k(f);return ar(N,e[b-1]?.data)?{index:r,length:b,data:e[r]?.data}:(e.push({data:N}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},a=(f=0)=>{const b=e.length;return r+=f,r=r<0?0:r>b-1?b-1:r,{index:r,length:b,data:k(e[r]?.data)}};return{record:o,cursor:a,jump:f=>(r=f,{index:r,length:e.length,data:k(e[r]?.data)}),undo:()=>a(-1),redo:()=>a(1),getList:()=>k(e),clean:()=>{e.length=0,r=-1}}},gt=(t,e,r)=>{if(!s(t))return t;const o=t[e],a=t[r];return t.splice(e,1,a),t.splice(r,1,o),t},ct=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},se=(t,e,r=".")=>{const o=(H,lt)=>H.split(lt),a=o(t,r),f=o(e,r),b=a.length;let N=0;for(let H=0;H<b;H++)if(a[H]<f[H]){N=b-H;break}return N},Re=(...t)=>(...e)=>{const[...r]=t,o=(...a)=>r.length===0?a[0]:o(r.pop()(...a));return o(...e)},sr=t=>{if(!T())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},Me=t=>(e,r)=>{const{getState:o,setState:a,subscribe:f,unsubscribe:b,clean:N}=t;return r!==void 0&&a({[e]:r},!0),{getState:()=>o(e),setState:(H,lt)=>a({[e]:H},lt),subscribe:H=>f(e,H),unsubscribe:()=>b(e),clean:()=>N(e)}},ze=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),co=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:ze(o))}});const Be=t=>t.startsWith("on"),Ke=t=>t!=="children"&&!Be(t),qr=(t,e)=>r=>t[r]!==e[r],Pr=(t,e)=>r=>!(r in e),Yr=t=>{const e=Object.keys(t);return{eventProps:e.filter(Be),propertyProps:e.filter(Ke)}};var l=(t,e,r)=>{const{eventProps:o,propertyProps:a}=Yr(e),{eventProps:f,propertyProps:b}=Yr(r);o.filter(Pr(e,r)).map(N=>{const H=N.toLowerCase().slice(2);t.removeEventListener(H,e[N])}),a.filter(Pr(e,r)).map(N=>t[N]=""),b.filter(qr(e,r)).map(N=>t[N]=r[N]),f.filter(qr(e,r)).map(N=>{const H=N.toLowerCase().slice(2);t.addEventListener(H,r[N])})},C=t=>{if(!T())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return l(e,{},t.props),e},g=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const tt=t=>{const e={};for(let r in t)Ut(t,r)||(e[r]=t[r]);return e};var nt=(t,e)=>{if(!y(t))return e;if(!y(e))return t;const r={...tt(t),...tt(e)},o={...t,...e};return Object.keys(r).map(a=>{Object.setPrototypeOf(o,{[a]:r[a]})}),o},J=()=>{const{on:t,emit:e,off:r}=g(),o={};return{getState:a=>k(o[a]),setState:(a,f=!1)=>{if(typeof a=="function"&&(a=a(k(o))),!y(a))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const b=k(a);Object.keys(b).map(N=>{const H=o[N],lt=b[N],vt=y(lt)&&y(H)?nt(H,lt):lt;!f&&e(N,vt),o[N]=vt})},subscribe:(a,f)=>(t(a,f),()=>r(a,f)),unsubscribe:r,clean:a=>{typeof a=="string"?o[a]=void 0:Array.isArray(a)?a.map(f=>o[f]=void 0):Object.keys(o).map(f=>o[f]=void 0)}}},$t=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...a)=>r(...o,...a);return r},Ct=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,a=>a.toUpperCase()):r.replace(/^\S/,a=>a.toLowerCase())).join(""),It=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let f=a.length;const b=new Uint8Array(f);for(;f--;)b[f]=a.charCodeAt(f);return new File([b],e??+new Date,{type:o})},ft=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Gt=(t,e,r="id",o="children")=>I((a,f)=>a.splice(f,1))(t,e,r,o),de=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",ke=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),me=()=>{let t=ke();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},qe=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),xe=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},cr=async(t,e,r)=>{if(!T())return;r=r||me();const o=e?`${r}.${e}`:r,a=qe(t);if(a||xe(t)){t=a?decodeURIComponent(t):t;const f=await fetch(t),b=f.headers.get("Content-Disposition"),N=b&&decodeURIComponent(b.split(";")[1].split("=")[1]);f.blob().then(H=>{const lt=window.URL.createObjectURL(H),vt=document.createElement("a");vt.href=lt,vt.download=N||o,vt.style.display="none",document.body.appendChild(vt),vt.click(),vt.parentNode.removeChild(vt),window.URL.revokeObjectURL(lt)})}else{const f=new Blob([t]),b=window.URL.createObjectURL(f),N=document.createElement("a");N.href=b,N.download=o,N.style.display="none",document.body.appendChild(N),N.click(),N.parentNode.removeChild(N),window.URL.revokeObjectURL(b)}},Ce=(t=null)=>T()?A(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},We=t=>{if(T())return t=q(t)?t.current:t??document.body,t.getBoundingClientRect?.()},ur=t=>{if(!T())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},ye=(t,e={},r=!1)=>{if(A(t)){if(r){let o="";Object.keys(e).map(a=>{o+=`${a}: ${e[a]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Gr=(t=350)=>new Promise(e=>setTimeout(e,t)),He=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var Ae=Gr,be=async(t,e=15)=>{if(!T())return;if(typeof t=="string"&&(t=ur(t)),t=q(t)?t.current:t,!A(t))return{};const r=t.cloneNode(!0);ye(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await Ae(e);const o=We(r);return t.parentNode.removeChild(r),o};const bo=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Zr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,dr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";bo.test(r)?t.setAttribute("class",r.replace(Zr,e)):t.setAttribute("class",`${r} ${e}`)},vo=async(t,e,r)=>{const{left:o,right:a,top:f,bottom:b}=We(t),{width:N,height:H}=Ce(),{width:lt,height:vt}=await be(e);if(a<0||b<0||o>N||f>H)return{};if(r==="vertical"){const ee={left:o+"px",top:b+10+"px",right:"auto",bottom:"auto"};let re="lt";o+lt>N&&(ee.left=a-lt+"px",re="rt"),b+10+vt>H&&(ee.top=f-10-vt+"px",re=re==="lt"?"lb":"rb"),ye(e,ee),dr(e,re)}else{const ee={left:a+10+"px",top:f+"px",right:"auto",bottom:"auto"};let re="tl";a+10+lt>N&&(ee.left=o-10-lt+"px",re="tr"),f+vt>H&&(ee.top=b-vt+"px",re=re==="tl"?"bl":"br"),ye(e,ee),dr(e,re)}};var Qr=(t,e,r="horizontal")=>{const o=ft(vo),a=()=>o(t,e,r);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const f=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),ye(e,{left:"",top:"",right:"",bottom:""})};return vo(t,e,r),f},Sr=(t,e,r,o="id",a="children")=>I((f,b)=>f[b]={...f[b],...r})(t,e,o,a),_r=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const wo=g();var ko=t=>{const{on:e,emit:r,off:o}=wo;return{on:a=>e(t,a),emit:a=>r(t,a),off:a=>o(t,a)}};const eo=120*1e3,Co=t=>t.json().then(e=>e);var Eo=(t=Co,e=eo)=>(r="get")=>nr(t)((r||"get").toUpperCase()),Mr=t=>s(t)&&!!t.length,po=(t,e,r=[],o=!1,a=null)=>Mr(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(f=>(r=r.length>0?r:Object.keys(f),r.filter(b=>{const N=f[b];if(N==null)return!1;if(o)return N===e;const H=new RegExp(e,"gi"),lt=N.toString().match(H);return lt&&a&&(f[b]=a(N.toString().replace(H,`<span style="background-color:yellow">${lt[0]}</span>`),{display:"inline-block"})),lt}).length))):t:[],hr=(t,e="id")=>{if(!Mr(t))return t;const r=[],o=[];return t.map(a=>{const f=y(a)?a[e]:a;o.includes(f)||(o.push(f),r.push(a))}),r};const Vo=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=k(e),a=f=>{const b=[];return f.map(N=>{if(Mr(N[r])){const H=a(N[r])||[];N[r]=H,H.length>0&&b.push(N)}}),t(f,b)};return a(o)};var So=(t,e,r,o="name",a="id",f="children",b=!1)=>Vo((N,H)=>hr([...po(N,e,o,b,r),...H],a))(t,f),oo=(t,e)=>{const r=[],o=t.children??[];for(let a=0,f=o.length;a<f;a++){const b=o[a];b.className.indexOf(e)>-1&&r.push(b)}return r.length===0?null:r.length===1?r[0]:r},_o=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],mo=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),Ur=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},Ko=(t="")=>(t??"").replaceAll("//","/"),zo=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",Fo=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},xo=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),a=t%3600,f=~~(a/60);return o<24?`${o}${e[2]}${f}${e[1]}${a%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},no=t=>(e,r="children")=>{if(!s(e))return e;const o=(a,f=[])=>a.map((b,N)=>{const H=s(b[r]);if(b=t(b,f,N,H)||b,H){const{[r]:lt,...vt}=b;b[r]=o(lt,[...f,{...vt,"@@index":N}])}return b});return o(e)},$o=(t,e="children")=>{const r=[];return no(o=>{const{[e]:a,...f}=o;r.push(f)})(t,e),r},Ao=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const Lr=t=>t<10?"0"+t:t;var fr=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),a=Lr(e.getMonth()+1),f=Lr(e.getDate()),b=Lr(e.getHours()),N=Lr(e.getMinutes()),H=Lr(e.getSeconds());return[r,a,f,b,N,H,o]},Do=(t,e=new Date)=>{t=fr(t),e=fr(e);const r=e.y-t.y,o=e.m-t.m,a=e.d-t.d,f=e.h-t.h,b=e.M-t.M,N=new Date(e.y,e.m,0).getDate(),H=(lt,vt,ee,re,Wr)=>{const mr="\u524D";return vt<0&&(lt-=1,vt+=ee),lt===0?vt+Wr+mr:vt===0?lt+re+mr:lt+re+vt+Wr+mr};return r>0?H(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?H(o,a,N,"\u4E2A\u6708","\u5929"):a>0?H(a,f,24,"\u5929","\u5C0F\u65F6"):f>0?H(f,b,60,"\u5C0F\u65F6","\u5206\u949F"):b>0?b+"\u5206\u949F\u524D":"\u521A\u521A"};const To=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],on=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var zr=(t=new Date,e=["-","-"," ",":",":",""],r=To)=>{const o=fr(t);let a="";return e.map((f,b)=>a+=(b===6?r[o[b]]:o[b]??"")+f),a};const io=["","webkit","moz","ms"],nn=t=>io.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Oo=t=>io.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),No=t=>io.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),n=io.map(t=>`${t}fullscreenchange`);var d=t=>{if(!T())return;t=q(t)?t.current:t??document.body;const e=nn(document),r=Oo(t),o=No(document);document[e]?document[o]?.():t[r]?.()};const x=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var _=()=>{if(!T())return;const t=window.navigator.userAgent.toLowerCase(),e=x.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const D=60*1e3,G=60*D,ot=24*G;var wt=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/ot);r-=ot*o;const a=~~(r/G);r-=G*a;const f=~~(r/D);r-=D*f;const b=~~(r/1e3);return`${o}\u5929${a}\u5C0F\u65F6${f}\u5206${b}\u79D2`};const xt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],bt=t=>{if(!Array.isArray(t))return xt;const e=[...xt];return t.map(r=>{const o=e.findIndex(a=>a.name===r.name||a["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Xt=t=>{const e=bt(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return ur(e.join(""))},Ot=(t=new Date)=>{const e=fr(t);return new Date(e[0],e[1],0).getDate()},Qt=(t=null)=>T()?A(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const Ee=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var Ve=()=>{if(!T())return;const t=window.navigator.userAgent.toLowerCase(),e=Ee.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},Fr=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(a=>{const[f,b]=a.split("=");o[f]=b}),{path:e,params:o}}return{path:e}},je=()=>T()&&(window.ontouchstart||navigator.maxTouchPoints),Ge=t=>{const{left:e,top:r}=Qt();return{touchX:je()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:je()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},Po=(t,e)=>{const{touchX:r,touchY:o}=Ge(t),{x:a,y:f}=e?.getBoundingClientRect?.()??{};return{x:r-(a??0),y:o-(f??0)}},Cn=(t,e,r="id",o="children")=>{if(!s(t))return null;const a=f=>{for(let b=0,N=f.length;b<N;b++){const H=f[b];if(H[r]===e)return[H];if(s(H[o])){const lt=a(H[o]);if(lt)return[H].concat(lt)}}};return a(t)},En=(t,e,r)=>{if(!T())return;r=q(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ye(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const a=o.getBoundingClientRect();return r.removeChild(o),a};const jn=(t={},e)=>{e=Sn(e);const r=(o,a)=>{if(!a?.[0])return o;if(typeof o[a[0]]=="object")return r(o[a[0]],a.slice(1));if(!(a.length>1))return o[a[0]]};return r(t,e)},Sn=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var _n=jn,sn=(t,e="")=>A(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),zn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,a=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${a})`;const f=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${a},${f})`},Fn=t=>{if(!T())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:a}=t;return e.width=o,e.height=a,r.drawImage(t,0,0,o,a),e},$n=(...t)=>!Number.isNaN(new Date(...t).valueOf()),An=t=>B(t)==="error",Dn=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Tn=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",On=t=>B(t)==="regexp",Nn=t=>y(t)&&Object.keys(t).length,Pn=()=>{if(T())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},In=t=>y(t)?R(t):Array.isArray(t)?P(t):t,ln=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",a=>r(a))}),Rn=async t=>{if(!qe(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await ln(e)},Mn=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",a=>r(a)))}),Bn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await Ae(r)},Ln=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],Wn=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const a=JSON.stringify(o),f=r.find(b=>b.key===a);if(!f){const b=t(...o);return r.push({key:a,result:b}),r.length>e&&r.shift(),b}return f.result}};const cn=(t,e,r="id")=>{if(!s(t))return e;if(!s(e))return t;const o={};return[...t,...e].map(a=>{const f=y(a)?a[r]??JSON.stringify(a):a;if(o[f]===void 0)o[f]=a;else{const b=o[f];y(b)&&y(a)?o[f]=Ro(b,a,r):s(b)&&s(a)?o[f]=cn(b,a,r):o[f]=a}}),Object.keys(o).map(a=>o[a])};var Io=cn;const un=(t,e,r="id")=>{if(!y(t))return e;if(!y(e))return t;for(let o in e)Ut(e,o)?y(t[o])&&y(e[o])?t[o]=un(t[o],e[o],r):s(t[o])&&s(e[o])?t[o]=Io(t[o],e[o],r):t[o]=e[o]:Object.setPrototypeOf(t,{[o]:e[o]});return t};var Ro=un,Hn=(t,...e)=>{const r=s(t)?Io:Ro;return e.map(o=>t=r(t,o)),t},Vn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Mo=(t,e="")=>{if(!A(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(a=>!r.includes(a));t.className=o.join(" ")},Yn=`@keyframes huxy-message-animate-in {
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
}`;const dn=()=>document.getElementsByClassName("huxy-message")[0],Zn=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Un=(t,e,r)=>{const o=t?.dir??"auto",a=document.createElement("div");a.setAttribute("class",`message-content open ${e} ${o}`),a.setAttribute("data-id",r);const f=document.createElement("span");f.setAttribute("class","message"),f.innerText=t?.message??t;const b=document.createElement("i");return a.appendChild(b),a.appendChild(f),a},lo=(t,e=3250,r,o)=>{if(!T())return;le(Yn,"huxy-message-css");let a=dn();a||(a=Zn());const f=me(),b=Un(t,o,f);return a.appendChild(b),e&&(setTimeout(()=>{a.removeChild(b),r?.()},e),setTimeout(()=>{Mo(b,"open")},e-250)),f};var Xn={success:(t,e,r)=>lo(t,e,r,"success"),warn:(t,e,r)=>lo(t,e,r,"warn"),warning:(t,e,r)=>lo(t,e,r,"warn"),error:(t,e,r)=>lo(t,e,r,"error"),info:(t,e,r)=>lo(t,e,r,"info"),destroy:t=>{const e=dn();if(e)if(t){const r=e.querySelector(`[data-id="${t}"]`);r&&e.removeChild(r)}else for(;e.firstChild;)e.removeChild(e.firstChild)}},Kn=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[X(1-r),X(Ot(e)-r)]},qn=(t,e,r,o,a="id",f="children")=>{let b={};return I((N,H)=>(b=N[H],N.splice(H,1),!0))(t,e,a,f),W(t,r,b,o,a,f),t},Gn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),Jn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(a=>e.includes(a)?o.push({key:a,value:t[a]}):r[a]=t[a]),{newObj:r,newQuery:o}},Qn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},hn=(t="",e=0,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const fn="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",pn="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",ta=t=>{const e={},r={},o=t.match(new RegExp(fn,"g")).map(f=>f.match(new RegExp(fn))).filter(Boolean),a=t.match(new RegExp(pn,"g")).map(f=>f.match(new RegExp(pn))).filter(Boolean);return o.map(f=>{const[,b,N]=f;e[b]=N,r[b]="base"}),a.map(f=>{const[,b,N]=f;e[b]=(N??"").trim(),r[b]="data"}),{obj:e,types:r}},ea=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var ra={xml2Obj:ta,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=ea(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},oa=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!s(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},na=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(a,f)=>a?o(a):r(f))),aa=()=>"#"+hn((~~(Math.random()*(1<<24))).toString(16),6),Bo=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),ia=(t=[])=>t[Bo(t.length-1)],sa=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,a)=>{a===t-1?r[a]=e:(r[a]=Bo(1,e-1),e-=r[a])}),r},la=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),ca=()=>Math.random()>.5;const ua=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var da=(t,e=60)=>{if(!T())return;t=q(t)?t.current:t??document.body;let r=oo(t,"resize-sensor"),o=[];const a=ft(()=>o.map(H=>H(t)),e),f=H=>{oo(t,"resize-sensor")||(r=ua(t,a)),o.indexOf(H)===-1&&o.push(H)},b=H=>{const lt=o.indexOf(H);lt!==-1&&o.splice(lt,1),o.length===0&&r&&N()},N=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",a,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:f,unbind:b,destroy:N}};const mn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const a=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?a:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${a}${o}`)};var ha=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const a=t.match(/rgba?\((.+)\)/);if(a){const f=a[1]?.split(",").map(b=>b.trim());return mn(...f)}return t}return mn(t,e,r,o)},fa=(t,e="px")=>`${t}`.replace(e,"")-0;const xn=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),pa=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},ma=()=>{const t=[],e=b=>{t.push(b),f(b)},r=()=>t[0],o=()=>t.shift(),a=b=>b.startTime=xn(),f=b=>{a(b),t.sort((N,H)=>N.startTime-H.startTime)};return{hub:t,push:e,peek:r,shift:o,update:f}};var xa=(t=5)=>{const{hub:e,push:r,peek:o,shift:a,update:f}=ma(),b=pa(()=>{H()&&b()}),N=lt=>xn()-lt.startTime>t,H=()=>{let lt=o();for(;lt;){if(N(lt)){f(lt);break}const{task:vt}=lt;typeof vt=="function"?(lt.task=null,vt()):a(),lt=o()}return lt};return(lt=()=>{})=>{r({task:lt}),e.length<2&&b()}},ga=()=>T()&&document.documentElement.scrollHeight-Lt()===Ce().height,ya=t=>{T()&&(t=q(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ba={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},va=t=>{const e=Xt(t);T()&&document.head.appendChild(...e)},wa=(t,e=null,r=!1)=>[...t||[]].sort((o,a)=>{const f=e?o[e]:o,b=e?a[e]:a;return!isNaN(Number(f))&&!isNaN(Number(f))?r?b-f:f-b:typeof f=="string"&&typeof b=="string"?r?b.localeCompare(f):f.localeCompare(b):typeof f=="string"&&typeof b=="number"?r?-1:1:typeof f=="number"||typeof f=="string"?r?1:-1:r?-1:1}),ka=t=>{if(!y(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},Ca={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const Ea=J();var ja=Me(Ea),Sa=(t,e=!1)=>(t=e?t:`return ${t};`,Function(t)()),_a=()=>T()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),za=(t,...e)=>{const r=[];return t.map((o,a)=>{r.push(o,e[a]??"")}),r.join("")},Fa=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const $a=t=>[12,Ot(t),24,60,60],Aa=(t=[],e=[],r=[])=>{let o=!1;const a=[];return e.map((f,b)=>{const N=(o?f-1:f)-t[b];N<0?(a[b]=N+(r[b]||10),o=!0):(a[b]=N,o=!1)}),a.reverse()};var gn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=$a(e).reverse(),o=fr(t).slice(0,-1).reverse(),a=fr(e).slice(0,-1).reverse();return Aa(o,a,r)};const Da=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Ta=(t,e=new Date)=>{const r=gn(t,e),o=r.findIndex(a=>a>0);return r.map((a,f)=>`${a||0}${Da[f]}`).slice(o).join("")},Oa=(t,e)=>{A(t)&&(sn(t,e)?Mo(t,e):Z(t,e))},Na=t=>(e,r="children")=>{if(!s(e))return e;const o=a=>(a.map(f=>{s(f[r])&&(f[r]=o(f[r]))}),t(a));return o(e)},Pa=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),Ia=(t,e="fuckId",r="children")=>no((o,a,f)=>{o[e]=[...a.map(b=>b["@@index"]),f].join("-")})(t,r),Ra=(t,e,r,o="children")=>I((a,f)=>{const b=a[f];return b[o]=[...b[o]||[],...r],!0})(t,e),Ma=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Ba=t=>T()?(n.map(e=>document.addEventListener(e,t,!1)),()=>n.map(e=>document.removeEventListener(e,t,!1))):void 0,La=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:a="middle",font:f="20px microsoft yahei",fillStyle:b="rgba(202,202,202,0.4)",content:N="\u8BF7\u52FF\u5916\u4F20",rotate:H="-30",zIndex:lt=1e3}={})=>{if(!T())return;t=q(t)?t.current:t??document.body;const vt=t.firstChild;vt?.className==="watermark-canvas"&&t.removeChild(vt);const ee=document.createElement("canvas");ee.setAttribute("width",e),ee.setAttribute("height",r);const re=ee.getContext("2d");re.textAlign=o,re.textBaseline=a,re.font=f,re.fillStyle=b,re.rotate(Math.PI/180*H),re.fillText(N,parseFloat(e)/2,parseFloat(r)/2);const Wr=ee.toDataURL(),mr=document.createElement("div");mr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${lt};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Wr}')`),t.style.position="relative",t.insertBefore(mr,t.firstChild)},Wa=(t=new Date)=>{const e=new Date(t).getDay();return[X(1-e),X(7-e)]},Ha=t=>{if(!fe(t))return{};let e="pending",r;const o=t.then(a=>{e="success",r=a}).catch(a=>{e="error",r=a});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},Vs=c.NzM,Ys=c.wBC,Zs=c.O39,Us=c.cnu,Xs=c.E4D,Ks=c.TRp,qs=c.zI1,Gs=c.Ufj,Js=c.GxO,Qs=c.cu2,tl=c.BcS,el=c.lPd,rl=c.dC1,Va=c.$L2,ol=c.Vji,nl=c.YxP,Ya=c.UhT,Za=c.JaC,al=c.o4B,il=c.Hlr,Ua=c.muM,sl=c.OiV,ll=c.KTn,cl=c.lwL,ul=c.d9v,dl=c.yCD,hl=c.qCK,Xa=c.vQq,Ka=c.fHt,fl=c.azq,pl=c.dSY,qa=c.MTn,ml=c.RYO,xl=c.WAo,gl=c.GVc,yl=c.Emy,bl=c.v9O,vl=c.DsO,wl=c._lj,kl=c.vO6,Ga=c.xDX,Cl=c.hf3,El=c.ip7,jl=c.uYe,Sl=c.DgJ,_l=c.rae,zl=c.YBu,Ja=c._iG,Fl=c.hXT,$l=c.gQq,Al=c.D_D,Dl=c.$nD,Tl=c.dtG,Ol=c.Y0R,Qa=c.qg7,Nl=c.Xxf,Pl=c.tSM,ti=c.Few,Il=c.xHg,Rl=c.aoj,Ml=c.Dlm,ei=c.mrB,ri=c.dKu,Bl=c.v1d,oi=c.afD,Ll=c.Lz5,Wl=c.xZX,Hl=c.G_1,Vl=c.osI,ni=c.PTJ,ai=c.Qfx,Yl=c.bti,ii=c.XBv,si=c.eyl,Zl=c.y35,Ul=c.hKD,li=c.BWC,Xl=c.oLi,ci=c.NA2,Kl=c.S3Y,ql=c.pvT,Gl=c.m2f,ui=c.rWO,Jl=c.A$w,Ql=c.kJL,tc=c.S9U,ec=c.dYC,rc=c.jUY,oc=c.J_U,nc=c.kKo,ac=c.VZO,ic=c.mf2,sc=c.w1q,lc=c.Kn2,cc=c.ncl,uc=c.LWC,dc=c.dqb,hc=c.Kjn,di=c.TaN,fc=c.CBv,pc=c.rTd,mc=c.B73,xc=c.SSA,hi=c.CLv,gc=c.F$z,yc=c.XT_,bc=c.omS,vc=c.poV,wc=c.VXY,kc=c.xsP,Cc=c.HPs,Ec=c.TSy,fi=c.B5o,jc=c.u1A,Sc=c.WAY,_c=c.I8J,pi=c.ywV,zc=c.bEN,Fc=c.$45,$c=c.TUk,Ac=c.T7B,Dc=c.CEd,Tc=c.IHq,Oc=c.SkG,Nc=c.Smz,mi=c.nL5,Pc=c.ON,Ic=c.eiS,Rc=c.Frc,Mc=c.z5J,Bc=c.scT,Lc=c.hd2,Wc=c.AnA,Hc=c.kYX,Vc=c.yZP,Yc=c.IVd,Zc=c.SIr,xi=c.jg2,gi=c.gVz,Uc=c.puc,Xc=c.Azz,Kc=c.X5u,qc=c.dPh,Gc=c.SMZ,Jc=c.kro,Qc=c.nPi,tu=c.US,yi=c.A_F,bi=c._vH,eu=c.gmH,ru=c.DYV,ou=c.qi2,vi=c.tOc,nu=c.hau,au=c.FaZ,iu=c.uyF,wi=c.Vcq,su=c.XKW,ki=c.azd,lu=c.P2K,Ci=c.XBe,cu=c.JZ7,uu=c.ABi,du=c.ogC,Ei=c._O2,hu=c.P0C,fu=c.Uo5,pu=c.Two,mu=c.tYQ,xu=c.tVn,gu=c.pHy,ji=c.k$y,Si=c.yfi,yu=c.fl8,_i=c.f9u,bu=c.ZV1,zi=c.Lgs}}]);
