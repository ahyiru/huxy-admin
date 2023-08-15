(self.webpackChunk=self.webpackChunk||[]).push([[158],{47845:function(tt,le,l){l.d(le,{T6:function(){return A},VD:function(){return _},WE:function(){return h},Yt:function(){return z},lC:function(){return Z},py:function(){return y},rW:function(){return n},s:function(){return v},ve:function(){return w},vq:function(){return a}});var d=l(39057);function n(g,E,F){return{r:(0,d.sh)(g,255)*255,g:(0,d.sh)(E,255)*255,b:(0,d.sh)(F,255)*255}}function Z(g,E,F){g=(0,d.sh)(g,255),E=(0,d.sh)(E,255),F=(0,d.sh)(F,255);var V=Math.max(g,E,F),X=Math.min(g,E,F),te=0,xe=0,ne=(V+X)/2;if(V===X)xe=0,te=0;else{var Te=V-X;switch(xe=ne>.5?Te/(2-V-X):Te/(V+X),V){case g:te=(E-F)/Te+(E<F?6:0);break;case E:te=(F-g)/Te+2;break;case F:te=(g-E)/Te+4;break;default:break}te/=6}return{h:te,s:xe,l:ne}}function H(g,E,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?g+(E-g)*(6*F):F<1/2?E:F<2/3?g+(E-g)*(2/3-F)*6:g}function w(g,E,F){var V,X,te;if(g=(0,d.sh)(g,360),E=(0,d.sh)(E,100),F=(0,d.sh)(F,100),E===0)X=F,te=F,V=F;else{var xe=F<.5?F*(1+E):F+E-F*E,ne=2*F-xe;V=H(ne,xe,g+1/3),X=H(ne,xe,g),te=H(ne,xe,g-1/3)}return{r:V*255,g:X*255,b:te*255}}function y(g,E,F){g=(0,d.sh)(g,255),E=(0,d.sh)(E,255),F=(0,d.sh)(F,255);var V=Math.max(g,E,F),X=Math.min(g,E,F),te=0,xe=V,ne=V-X,Te=V===0?0:ne/V;if(V===X)te=0;else{switch(V){case g:te=(E-F)/ne+(E<F?6:0);break;case E:te=(F-g)/ne+2;break;case F:te=(g-E)/ne+4;break;default:break}te/=6}return{h:te,s:Te,v:xe}}function h(g,E,F){g=(0,d.sh)(g,360)*6,E=(0,d.sh)(E,100),F=(0,d.sh)(F,100);var V=Math.floor(g),X=g-V,te=F*(1-E),xe=F*(1-X*E),ne=F*(1-(1-X)*E),Te=V%6,Re=[F,xe,te,te,ne,F][Te],Ce=[ne,F,F,xe,te,te][Te],ve=[te,te,ne,F,F,xe][Te];return{r:Re*255,g:Ce*255,b:ve*255}}function a(g,E,F,V){var X=[(0,d.FZ)(Math.round(g).toString(16)),(0,d.FZ)(Math.round(E).toString(16)),(0,d.FZ)(Math.round(F).toString(16))];return V&&X[0].startsWith(X[0].charAt(1))&&X[1].startsWith(X[1].charAt(1))&&X[2].startsWith(X[2].charAt(1))?X[0].charAt(0)+X[1].charAt(0)+X[2].charAt(0):X.join("")}function v(g,E,F,V,X){var te=[(0,d.FZ)(Math.round(g).toString(16)),(0,d.FZ)(Math.round(E).toString(16)),(0,d.FZ)(Math.round(F).toString(16)),(0,d.FZ)(q(V))];return X&&te[0].startsWith(te[0].charAt(1))&&te[1].startsWith(te[1].charAt(1))&&te[2].startsWith(te[2].charAt(1))&&te[3].startsWith(te[3].charAt(1))?te[0].charAt(0)+te[1].charAt(0)+te[2].charAt(0)+te[3].charAt(0):te.join("")}function P(g,E,F,V){var X=[pad2(q(V)),pad2(Math.round(g).toString(16)),pad2(Math.round(E).toString(16)),pad2(Math.round(F).toString(16))];return X.join("")}function q(g){return Math.round(parseFloat(g)*255).toString(16)}function A(g){return _(g)/255}function _(g){return parseInt(g,16)}function z(g){return{r:g>>16,g:(g&65280)>>8,b:g&255}}},97649:function(tt,le,l){l.d(le,{R:function(){return d}});var d={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},13144:function(tt,le,l){l.d(le,{uA:function(){return H}});var d=l(47845),n=l(97649),Z=l(39057);function H(_){var z={r:0,g:0,b:0},g=1,E=null,F=null,V=null,X=!1,te=!1;return typeof _=="string"&&(_=q(_)),typeof _=="object"&&(A(_.r)&&A(_.g)&&A(_.b)?(z=(0,d.rW)(_.r,_.g,_.b),X=!0,te=String(_.r).substr(-1)==="%"?"prgb":"rgb"):A(_.h)&&A(_.s)&&A(_.v)?(E=(0,Z.JX)(_.s),F=(0,Z.JX)(_.v),z=(0,d.WE)(_.h,E,F),X=!0,te="hsv"):A(_.h)&&A(_.s)&&A(_.l)&&(E=(0,Z.JX)(_.s),V=(0,Z.JX)(_.l),z=(0,d.ve)(_.h,E,V),X=!0,te="hsl"),Object.prototype.hasOwnProperty.call(_,"a")&&(g=_.a)),g=(0,Z.Yq)(g),{ok:X,format:_.format||te,r:Math.min(255,Math.max(z.r,0)),g:Math.min(255,Math.max(z.g,0)),b:Math.min(255,Math.max(z.b,0)),a:g}}var w="[-\\+]?\\d+%?",y="[-\\+]?\\d*\\.\\d+%?",h="(?:".concat(y,")|(?:").concat(w,")"),a="[\\s|\\(]+(".concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")\\s*\\)?"),v="[\\s|\\(]+(".concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")[,|\\s]+(").concat(h,")\\s*\\)?"),P={CSS_UNIT:new RegExp(h),rgb:new RegExp("rgb"+a),rgba:new RegExp("rgba"+v),hsl:new RegExp("hsl"+a),hsla:new RegExp("hsla"+v),hsv:new RegExp("hsv"+a),hsva:new RegExp("hsva"+v),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function q(_){if(_=_.trim().toLowerCase(),_.length===0)return!1;var z=!1;if(n.R[_])_=n.R[_],z=!0;else if(_==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var g=P.rgb.exec(_);return g?{r:g[1],g:g[2],b:g[3]}:(g=P.rgba.exec(_),g?{r:g[1],g:g[2],b:g[3],a:g[4]}:(g=P.hsl.exec(_),g?{h:g[1],s:g[2],l:g[3]}:(g=P.hsla.exec(_),g?{h:g[1],s:g[2],l:g[3],a:g[4]}:(g=P.hsv.exec(_),g?{h:g[1],s:g[2],v:g[3]}:(g=P.hsva.exec(_),g?{h:g[1],s:g[2],v:g[3],a:g[4]}:(g=P.hex8.exec(_),g?{r:(0,d.VD)(g[1]),g:(0,d.VD)(g[2]),b:(0,d.VD)(g[3]),a:(0,d.T6)(g[4]),format:z?"name":"hex8"}:(g=P.hex6.exec(_),g?{r:(0,d.VD)(g[1]),g:(0,d.VD)(g[2]),b:(0,d.VD)(g[3]),format:z?"name":"hex"}:(g=P.hex4.exec(_),g?{r:(0,d.VD)(g[1]+g[1]),g:(0,d.VD)(g[2]+g[2]),b:(0,d.VD)(g[3]+g[3]),a:(0,d.T6)(g[4]+g[4]),format:z?"name":"hex8"}:(g=P.hex3.exec(_),g?{r:(0,d.VD)(g[1]+g[1]),g:(0,d.VD)(g[2]+g[2]),b:(0,d.VD)(g[3]+g[3]),format:z?"name":"hex"}:!1)))))))))}function A(_){return!!P.CSS_UNIT.exec(String(_))}},68645:function(tt,le,l){l.d(le,{C:function(){return w}});var d=l(47845),n=l(97649),Z=l(13144),H=l(39057),w=function(){function h(a,v){a===void 0&&(a=""),v===void 0&&(v={});var P;if(a instanceof h)return a;typeof a=="number"&&(a=(0,d.Yt)(a)),this.originalInput=a;var q=(0,Z.uA)(a);this.originalInput=a,this.r=q.r,this.g=q.g,this.b=q.b,this.a=q.a,this.roundA=Math.round(100*this.a)/100,this.format=(P=v.format)!==null&&P!==void 0?P:q.format,this.gradientType=v.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=q.ok}return h.prototype.isDark=function(){return this.getBrightness()<128},h.prototype.isLight=function(){return!this.isDark()},h.prototype.getBrightness=function(){var a=this.toRgb();return(a.r*299+a.g*587+a.b*114)/1e3},h.prototype.getLuminance=function(){var a=this.toRgb(),v,P,q,A=a.r/255,_=a.g/255,z=a.b/255;return A<=.03928?v=A/12.92:v=Math.pow((A+.055)/1.055,2.4),_<=.03928?P=_/12.92:P=Math.pow((_+.055)/1.055,2.4),z<=.03928?q=z/12.92:q=Math.pow((z+.055)/1.055,2.4),.2126*v+.7152*P+.0722*q},h.prototype.getAlpha=function(){return this.a},h.prototype.setAlpha=function(a){return this.a=(0,H.Yq)(a),this.roundA=Math.round(100*this.a)/100,this},h.prototype.isMonochrome=function(){var a=this.toHsl().s;return a===0},h.prototype.toHsv=function(){var a=(0,d.py)(this.r,this.g,this.b);return{h:a.h*360,s:a.s,v:a.v,a:this.a}},h.prototype.toHsvString=function(){var a=(0,d.py)(this.r,this.g,this.b),v=Math.round(a.h*360),P=Math.round(a.s*100),q=Math.round(a.v*100);return this.a===1?"hsv(".concat(v,", ").concat(P,"%, ").concat(q,"%)"):"hsva(".concat(v,", ").concat(P,"%, ").concat(q,"%, ").concat(this.roundA,")")},h.prototype.toHsl=function(){var a=(0,d.lC)(this.r,this.g,this.b);return{h:a.h*360,s:a.s,l:a.l,a:this.a}},h.prototype.toHslString=function(){var a=(0,d.lC)(this.r,this.g,this.b),v=Math.round(a.h*360),P=Math.round(a.s*100),q=Math.round(a.l*100);return this.a===1?"hsl(".concat(v,", ").concat(P,"%, ").concat(q,"%)"):"hsla(".concat(v,", ").concat(P,"%, ").concat(q,"%, ").concat(this.roundA,")")},h.prototype.toHex=function(a){return a===void 0&&(a=!1),(0,d.vq)(this.r,this.g,this.b,a)},h.prototype.toHexString=function(a){return a===void 0&&(a=!1),"#"+this.toHex(a)},h.prototype.toHex8=function(a){return a===void 0&&(a=!1),(0,d.s)(this.r,this.g,this.b,this.a,a)},h.prototype.toHex8String=function(a){return a===void 0&&(a=!1),"#"+this.toHex8(a)},h.prototype.toHexShortString=function(a){return a===void 0&&(a=!1),this.a===1?this.toHexString(a):this.toHex8String(a)},h.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},h.prototype.toRgbString=function(){var a=Math.round(this.r),v=Math.round(this.g),P=Math.round(this.b);return this.a===1?"rgb(".concat(a,", ").concat(v,", ").concat(P,")"):"rgba(".concat(a,", ").concat(v,", ").concat(P,", ").concat(this.roundA,")")},h.prototype.toPercentageRgb=function(){var a=function(v){return"".concat(Math.round((0,H.sh)(v,255)*100),"%")};return{r:a(this.r),g:a(this.g),b:a(this.b),a:this.a}},h.prototype.toPercentageRgbString=function(){var a=function(v){return Math.round((0,H.sh)(v,255)*100)};return this.a===1?"rgb(".concat(a(this.r),"%, ").concat(a(this.g),"%, ").concat(a(this.b),"%)"):"rgba(".concat(a(this.r),"%, ").concat(a(this.g),"%, ").concat(a(this.b),"%, ").concat(this.roundA,")")},h.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var a="#"+(0,d.vq)(this.r,this.g,this.b,!1),v=0,P=Object.entries(n.R);v<P.length;v++){var q=P[v],A=q[0],_=q[1];if(a===_)return A}return!1},h.prototype.toString=function(a){var v=!!a;a=a??this.format;var P=!1,q=this.a<1&&this.a>=0,A=!v&&q&&(a.startsWith("hex")||a==="name");return A?a==="name"&&this.a===0?this.toName():this.toRgbString():(a==="rgb"&&(P=this.toRgbString()),a==="prgb"&&(P=this.toPercentageRgbString()),(a==="hex"||a==="hex6")&&(P=this.toHexString()),a==="hex3"&&(P=this.toHexString(!0)),a==="hex4"&&(P=this.toHex8String(!0)),a==="hex8"&&(P=this.toHex8String()),a==="name"&&(P=this.toName()),a==="hsl"&&(P=this.toHslString()),a==="hsv"&&(P=this.toHsvString()),P||this.toHexString())},h.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},h.prototype.clone=function(){return new h(this.toString())},h.prototype.lighten=function(a){a===void 0&&(a=10);var v=this.toHsl();return v.l+=a/100,v.l=(0,H.V2)(v.l),new h(v)},h.prototype.brighten=function(a){a===void 0&&(a=10);var v=this.toRgb();return v.r=Math.max(0,Math.min(255,v.r-Math.round(255*-(a/100)))),v.g=Math.max(0,Math.min(255,v.g-Math.round(255*-(a/100)))),v.b=Math.max(0,Math.min(255,v.b-Math.round(255*-(a/100)))),new h(v)},h.prototype.darken=function(a){a===void 0&&(a=10);var v=this.toHsl();return v.l-=a/100,v.l=(0,H.V2)(v.l),new h(v)},h.prototype.tint=function(a){return a===void 0&&(a=10),this.mix("white",a)},h.prototype.shade=function(a){return a===void 0&&(a=10),this.mix("black",a)},h.prototype.desaturate=function(a){a===void 0&&(a=10);var v=this.toHsl();return v.s-=a/100,v.s=(0,H.V2)(v.s),new h(v)},h.prototype.saturate=function(a){a===void 0&&(a=10);var v=this.toHsl();return v.s+=a/100,v.s=(0,H.V2)(v.s),new h(v)},h.prototype.greyscale=function(){return this.desaturate(100)},h.prototype.spin=function(a){var v=this.toHsl(),P=(v.h+a)%360;return v.h=P<0?360+P:P,new h(v)},h.prototype.mix=function(a,v){v===void 0&&(v=50);var P=this.toRgb(),q=new h(a).toRgb(),A=v/100,_={r:(q.r-P.r)*A+P.r,g:(q.g-P.g)*A+P.g,b:(q.b-P.b)*A+P.b,a:(q.a-P.a)*A+P.a};return new h(_)},h.prototype.analogous=function(a,v){a===void 0&&(a=6),v===void 0&&(v=30);var P=this.toHsl(),q=360/v,A=[this];for(P.h=(P.h-(q*a>>1)+720)%360;--a;)P.h=(P.h+q)%360,A.push(new h(P));return A},h.prototype.complement=function(){var a=this.toHsl();return a.h=(a.h+180)%360,new h(a)},h.prototype.monochromatic=function(a){a===void 0&&(a=6);for(var v=this.toHsv(),P=v.h,q=v.s,A=v.v,_=[],z=1/a;a--;)_.push(new h({h:P,s:q,v:A})),A=(A+z)%1;return _},h.prototype.splitcomplement=function(){var a=this.toHsl(),v=a.h;return[this,new h({h:(v+72)%360,s:a.s,l:a.l}),new h({h:(v+216)%360,s:a.s,l:a.l})]},h.prototype.onBackground=function(a){var v=this.toRgb(),P=new h(a).toRgb(),q=v.a+P.a*(1-v.a);return new h({r:(v.r*v.a+P.r*P.a*(1-v.a))/q,g:(v.g*v.a+P.g*P.a*(1-v.a))/q,b:(v.b*v.a+P.b*P.a*(1-v.a))/q,a:q})},h.prototype.triad=function(){return this.polyad(3)},h.prototype.tetrad=function(){return this.polyad(4)},h.prototype.polyad=function(a){for(var v=this.toHsl(),P=v.h,q=[this],A=360/a,_=1;_<a;_++)q.push(new h({h:(P+_*A)%360,s:v.s,l:v.l}));return q},h.prototype.equals=function(a){return this.toRgbString()===new h(a).toRgbString()},h}();function y(h,a){return h===void 0&&(h=""),a===void 0&&(a={}),new w(h,a)}},39057:function(tt,le,l){l.d(le,{FZ:function(){return h},JX:function(){return y},V2:function(){return n},Yq:function(){return w},sh:function(){return d}});function d(a,v){Z(a)&&(a="100%");var P=H(a);return a=v===360?a:Math.min(v,Math.max(0,parseFloat(a))),P&&(a=parseInt(String(a*v),10)/100),Math.abs(a-v)<1e-6?1:(v===360?a=(a<0?a%v+v:a%v)/parseFloat(String(v)):a=a%v/parseFloat(String(v)),a)}function n(a){return Math.min(1,Math.max(0,a))}function Z(a){return typeof a=="string"&&a.indexOf(".")!==-1&&parseFloat(a)===1}function H(a){return typeof a=="string"&&a.indexOf("%")!==-1}function w(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function y(a){return a<=1?"".concat(Number(a)*100,"%"):a}function h(a){return a.length===1?"0"+a:String(a)}},82610:function(tt,le){function l(d){for(var n=0,Z,H=0,w=d.length;w>=4;++H,w-=4)Z=d.charCodeAt(H)&255|(d.charCodeAt(++H)&255)<<8|(d.charCodeAt(++H)&255)<<16|(d.charCodeAt(++H)&255)<<24,Z=(Z&65535)*1540483477+((Z>>>16)*59797<<16),Z^=Z>>>24,n=(Z&65535)*1540483477+((Z>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(w){case 3:n^=(d.charCodeAt(H+2)&255)<<16;case 2:n^=(d.charCodeAt(H+1)&255)<<8;case 1:n^=d.charCodeAt(H)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}le.Z=l},84380:function(tt,le){var l={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};le.Z=l},81412:function(tt,le,l){l.d(le,{Z:function(){return Re}});var d=l(11026),n=l(27378),Z=l(31542),H=l(98554),w=l(74485),y=l(79986),h=n.createContext(null),a=h,v=l(649),P=l(99664),q=[];function A(Ce,ve){var oe=n.useState(function(){if(!(0,H.Z)())return null;var ue=document.createElement("div");return ue}),R=(0,d.Z)(oe,1),we=R[0],Ve=n.useRef(!1),Xe=n.useContext(a),it=n.useState(q),ye=(0,d.Z)(it,2),J=ye[0],Pe=ye[1],m=Xe||(Ve.current?void 0:function(ue){Pe(function(ie){var Q=[ue].concat((0,v.Z)(ie));return Q})});function ae(){we.parentElement||document.body.appendChild(we),Ve.current=!0}function S(){var ue;(ue=we.parentElement)===null||ue===void 0||ue.removeChild(we),Ve.current=!1}return(0,P.Z)(function(){return Ce?Xe?Xe(ae):ae():S(),S},[Ce]),(0,P.Z)(function(){J.length&&(J.forEach(function(ue){return ue()}),Pe(q))},[J]),[we,m]}var _=l(98628),z=l(80408);function g(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var E="rc-util-locker-".concat(Date.now()),F=0;function V(Ce){var ve=!!Ce,oe=n.useState(function(){return F+=1,"".concat(E,"_").concat(F)}),R=(0,d.Z)(oe,1),we=R[0];(0,P.Z)(function(){if(ve){var Ve=(0,z.Z)(),Xe=g();(0,_.hq)(`
html body {
  overflow-y: hidden;
  `.concat(Xe?"width: calc(100% - ".concat(Ve,"px);"):"",`
}`),we)}else(0,_.jL)(we);return function(){(0,_.jL)(we)}},[ve,we])}var X=!1;function te(Ce){return typeof Ce=="boolean"&&(X=Ce),X}var xe=function(ve){return ve===!1?!1:!(0,H.Z)()||!ve?null:typeof ve=="string"?document.querySelector(ve):typeof ve=="function"?ve():ve},ne=n.forwardRef(function(Ce,ve){var oe=Ce.open,R=Ce.autoLock,we=Ce.getContainer,Ve=Ce.debug,Xe=Ce.autoDestroy,it=Xe===void 0?!0:Xe,ye=Ce.children,J=n.useState(oe),Pe=(0,d.Z)(J,2),m=Pe[0],ae=Pe[1],S=m||oe;n.useEffect(function(){(it||oe)&&ae(oe)},[oe,it]);var ue=n.useState(function(){return xe(we)}),ie=(0,d.Z)(ue,2),Q=ie[0],se=ie[1];n.useEffect(function(){var Pt=xe(we);se(Pt??null)});var he=A(S&&!Q,Ve),Fe=(0,d.Z)(he,2),We=Fe[0],et=Fe[1],Je=Q??We;V(R&&oe&&(0,H.Z)()&&(Je===We||Je===document.body));var Ze=null;if(ye&&(0,y.Yr)(ye)&&ve){var Ie=ye;Ze=Ie.ref}var ct=(0,y.x1)(Ze,ve);if(!S||!(0,H.Z)()||Q===void 0)return null;var pt=Je===!1||te(),rt=ye;return ve&&(rt=n.cloneElement(ye,{ref:ct})),n.createElement(a.Provider,{value:et},pt?rt:(0,Z.createPortal)(rt,Je))}),Te=ne,Re=Te},60042:function(tt,le){var l,d;(function(){"use strict";var n={}.hasOwnProperty,Z="[native code]";function H(){for(var w=[],y=0;y<arguments.length;y++){var h=arguments[y];if(h){var a=typeof h;if(a==="string"||a==="number")w.push(h);else if(Array.isArray(h)){if(h.length){var v=H.apply(null,h);v&&w.push(v)}}else if(a==="object"){if(h.toString!==Object.prototype.toString&&!h.toString.toString().includes("[native code]")){w.push(h.toString());continue}for(var P in h)n.call(h,P)&&h[P]&&w.push(P)}}}return w.join(" ")}tt.exports?(H.default=H,tt.exports=H):(l=[],d=function(){return H}.apply(le,l),d!==void 0&&(tt.exports=d))})()},65763:function(tt){var le=1/0,l="[object Symbol]",d=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Z="\\ud800-\\udfff",H="\\u0300-\\u036f\\ufe20-\\ufe23",w="\\u20d0-\\u20f0",y="\\u2700-\\u27bf",h="a-z\\xdf-\\xf6\\xf8-\\xff",a="\\xac\\xb1\\xd7\\xf7",v="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",P="\\u2000-\\u206f",q=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",A="A-Z\\xc0-\\xd6\\xd8-\\xde",_="\\ufe0e\\ufe0f",z=a+v+P+q,g="['\u2019]",E="["+Z+"]",F="["+z+"]",V="["+H+w+"]",X="\\d+",te="["+y+"]",xe="["+h+"]",ne="[^"+Z+z+X+y+h+A+"]",Te="\\ud83c[\\udffb-\\udfff]",Re="(?:"+V+"|"+Te+")",Ce="[^"+Z+"]",ve="(?:\\ud83c[\\udde6-\\uddff]){2}",oe="[\\ud800-\\udbff][\\udc00-\\udfff]",R="["+A+"]",we="\\u200d",Ve="(?:"+xe+"|"+ne+")",Xe="(?:"+R+"|"+ne+")",it="(?:"+g+"(?:d|ll|m|re|s|t|ve))?",ye="(?:"+g+"(?:D|LL|M|RE|S|T|VE))?",J=Re+"?",Pe="["+_+"]?",m="(?:"+we+"(?:"+[Ce,ve,oe].join("|")+")"+Pe+J+")*",ae=Pe+J+m,S="(?:"+[te,ve,oe].join("|")+")"+ae,ue="(?:"+[Ce+V+"?",V,ve,oe,E].join("|")+")",ie=RegExp(g,"g"),Q=RegExp(V,"g"),se=RegExp(Te+"(?="+Te+")|"+ue+ae,"g"),he=RegExp([R+"?"+xe+"+"+it+"(?="+[F,R,"$"].join("|")+")",Xe+"+"+ye+"(?="+[F,R+Ve,"$"].join("|")+")",R+"?"+Ve+"+"+it,R+"+"+ye,X,S].join("|"),"g"),Fe=RegExp("["+we+Z+H+w+_+"]"),We=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,et={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},Je=typeof global=="object"&&global&&global.Object===Object&&global,Ze=typeof self=="object"&&self&&self.Object===Object&&self,Ie=Je||Ze||Function("return this")();function ct(me,T,N,c){var x=-1,i=me?me.length:0;for(c&&i&&(N=me[++x]);++x<i;)N=T(N,me[x],x,me);return N}function pt(me){return me.split("")}function rt(me){return me.match(d)||[]}function Pt(me){return function(T){return me?.[T]}}var ke=Pt(et);function At(me){return Fe.test(me)}function kt(me){return We.test(me)}function lt(me){return At(me)?$t(me):pt(me)}function $t(me){return me.match(se)||[]}function Vt(me){return me.match(he)||[]}var tr=Object.prototype,Zt=tr.toString,zt=Ie.Symbol,Jt=zt?zt.prototype:void 0,Dt=Jt?Jt.toString:void 0;function Wt(me,T,N){var c=-1,x=me.length;T<0&&(T=-T>x?0:x+T),N=N>x?x:N,N<0&&(N+=x),x=T>N?0:N-T>>>0,T>>>=0;for(var i=Array(x);++c<x;)i[c]=me[c+T];return i}function Bt(me){if(typeof me=="string")return me;if(rr(me))return Dt?Dt.call(me):"";var T=me+"";return T=="0"&&1/me==-le?"-0":T}function Tt(me,T,N){var c=me.length;return N=N===void 0?c:N,!T&&N>=c?me:Wt(me,T,N)}function qt(me){return function(T){T=er(T);var N=At(T)?lt(T):void 0,c=N?N[0]:T.charAt(0),x=N?Tt(N,1).join(""):T.slice(1);return c[me]()+x}}function Ht(me){return function(T){return ct(Ue($e(T).replace(ie,"")),me,"")}}function Lt(me){return!!me&&typeof me=="object"}function rr(me){return typeof me=="symbol"||Lt(me)&&Zt.call(me)==l}function er(me){return me==null?"":Bt(me)}var ar=Ht(function(me,T,N){return T=T.toLowerCase(),me+(N?Oe(T):T)});function Oe(me){return Ye(er(me).toLowerCase())}function $e(me){return me=er(me),me&&me.replace(n,ke).replace(Q,"")}var Ye=qt("toUpperCase");function Ue(me,T,N){return me=er(me),T=N?void 0:T,T===void 0?kt(me)?Vt(me):rt(me):me.match(T)||[]}tt.exports=ar},47007:function(tt,le,l){l.d(le,{s:function(){return X},Z:function(){return ve}});var d=l(25773),n=l(11026),Z=l(27378),H=l(81412),w=l(50189),y=l(60042),h=l.n(y),a=l(98209),v=l(63651),P=l(78730),q=l(91864);function A(oe,R,we){var Ve=R;return!Ve&&we&&(Ve="".concat(oe,"-").concat(we)),Ve}function _(oe,R){var we=oe["page".concat(R?"Y":"X","Offset")],Ve="scroll".concat(R?"Top":"Left");if(typeof we!="number"){var Xe=oe.document;we=Xe.documentElement[Ve],typeof we!="number"&&(we=Xe.body[Ve])}return we}function z(oe){var R=oe.getBoundingClientRect(),we={left:R.left,top:R.top},Ve=oe.ownerDocument,Xe=Ve.defaultView||Ve.parentWindow;return we.left+=_(Xe),we.top+=_(Xe,!0),we}var g=l(83395),E=Z.memo(function(oe){var R=oe.children;return R},function(oe,R){var we=R.shouldUpdate;return!we}),F={width:0,height:0,overflow:"hidden",outline:"none"},V=Z.forwardRef(function(oe,R){var we=oe.prefixCls,Ve=oe.className,Xe=oe.style,it=oe.title,ye=oe.ariaId,J=oe.footer,Pe=oe.closable,m=oe.closeIcon,ae=oe.onClose,S=oe.children,ue=oe.bodyStyle,ie=oe.bodyProps,Q=oe.modalRender,se=oe.onMouseDown,he=oe.onMouseUp,Fe=oe.holderRef,We=oe.visible,et=oe.forceRender,Je=oe.width,Ze=oe.height,Ie=(0,Z.useRef)(),ct=(0,Z.useRef)();Z.useImperativeHandle(R,function(){return{focus:function(){var lt;(lt=Ie.current)===null||lt===void 0||lt.focus()},changeActive:function(lt){var $t=document,Vt=$t.activeElement;lt&&Vt===ct.current?Ie.current.focus():!lt&&Vt===Ie.current&&ct.current.focus()}}});var pt={};Je!==void 0&&(pt.width=Je),Ze!==void 0&&(pt.height=Ze);var rt;J&&(rt=Z.createElement("div",{className:"".concat(we,"-footer")},J));var Pt;it&&(Pt=Z.createElement("div",{className:"".concat(we,"-header")},Z.createElement("div",{className:"".concat(we,"-title"),id:ye},it)));var ke;Pe&&(ke=Z.createElement("button",{type:"button",onClick:ae,"aria-label":"Close",className:"".concat(we,"-close")},m||Z.createElement("span",{className:"".concat(we,"-close-x")})));var At=Z.createElement("div",{className:"".concat(we,"-content")},ke,Pt,Z.createElement("div",(0,d.Z)({className:"".concat(we,"-body"),style:ue},ie),S),rt);return Z.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":it?ye:null,"aria-modal":"true",ref:Fe,style:(0,w.Z)((0,w.Z)({},Xe),pt),className:h()(we,Ve),onMouseDown:se,onMouseUp:he},Z.createElement("div",{tabIndex:0,ref:Ie,style:F,"aria-hidden":"true"}),Z.createElement(E,{shouldUpdate:We||et},Q?Q(At):At),Z.createElement("div",{tabIndex:0,ref:ct,style:F,"aria-hidden":"true"}))}),X=V,te=Z.forwardRef(function(oe,R){var we=oe.prefixCls,Ve=oe.title,Xe=oe.style,it=oe.className,ye=oe.visible,J=oe.forceRender,Pe=oe.destroyOnClose,m=oe.motionName,ae=oe.ariaId,S=oe.onVisibleChanged,ue=oe.mousePosition,ie=(0,Z.useRef)(),Q=Z.useState(),se=(0,n.Z)(Q,2),he=se[0],Fe=se[1],We={};he&&(We.transformOrigin=he);function et(){var Je=z(ie.current);Fe(ue?"".concat(ue.x-Je.left,"px ").concat(ue.y-Je.top,"px"):"")}return Z.createElement(g.ZP,{visible:ye,onVisibleChanged:S,onAppearPrepare:et,onEnterPrepare:et,forceRender:J,motionName:m,removeOnLeave:Pe,ref:ie},function(Je,Ze){var Ie=Je.className,ct=Je.style;return Z.createElement(X,(0,d.Z)({},oe,{ref:R,title:Ve,ariaId:ae,prefixCls:we,holderRef:Ze,style:(0,w.Z)((0,w.Z)((0,w.Z)({},ct),Xe),We),className:h()(it,Ie)}))})});te.displayName="Content";var xe=te;function ne(oe){var R=oe.prefixCls,we=oe.style,Ve=oe.visible,Xe=oe.maskProps,it=oe.motionName;return Z.createElement(g.ZP,{key:"mask",visible:Ve,motionName:it,leavedClassName:"".concat(R,"-mask-hidden")},function(ye,J){var Pe=ye.className,m=ye.style;return Z.createElement("div",(0,d.Z)({ref:J,style:(0,w.Z)((0,w.Z)({},m),we),className:h()("".concat(R,"-mask"),Pe)},Xe))})}function Te(oe){var R=oe.prefixCls,we=R===void 0?"rc-dialog":R,Ve=oe.zIndex,Xe=oe.visible,it=Xe===void 0?!1:Xe,ye=oe.keyboard,J=ye===void 0?!0:ye,Pe=oe.focusTriggerAfterClose,m=Pe===void 0?!0:Pe,ae=oe.wrapStyle,S=oe.wrapClassName,ue=oe.wrapProps,ie=oe.onClose,Q=oe.afterOpenChange,se=oe.afterClose,he=oe.transitionName,Fe=oe.animation,We=oe.closable,et=We===void 0?!0:We,Je=oe.mask,Ze=Je===void 0?!0:Je,Ie=oe.maskTransitionName,ct=oe.maskAnimation,pt=oe.maskClosable,rt=pt===void 0?!0:pt,Pt=oe.maskStyle,ke=oe.maskProps,At=oe.rootClassName,kt=(0,Z.useRef)(),lt=(0,Z.useRef)(),$t=(0,Z.useRef)(),Vt=Z.useState(it),tr=(0,n.Z)(Vt,2),Zt=tr[0],zt=tr[1],Jt=(0,v.Z)();function Dt(){(0,a.Z)(lt.current,document.activeElement)||(kt.current=document.activeElement)}function Wt(){if(!(0,a.Z)(lt.current,document.activeElement)){var Oe;(Oe=$t.current)===null||Oe===void 0||Oe.focus()}}function Bt(Oe){if(Oe)Wt();else{if(zt(!1),Ze&&kt.current&&m){try{kt.current.focus({preventScroll:!0})}catch{}kt.current=null}Zt&&se?.()}Q?.(Oe)}function Tt(Oe){ie?.(Oe)}var qt=(0,Z.useRef)(!1),Ht=(0,Z.useRef)(),Lt=function(){clearTimeout(Ht.current),qt.current=!0},rr=function(){Ht.current=setTimeout(function(){qt.current=!1})},er=null;rt&&(er=function($e){qt.current?qt.current=!1:lt.current===$e.target&&Tt($e)});function ar(Oe){if(J&&Oe.keyCode===P.Z.ESC){Oe.stopPropagation(),Tt(Oe);return}it&&Oe.keyCode===P.Z.TAB&&$t.current.changeActive(!Oe.shiftKey)}return(0,Z.useEffect)(function(){it&&(zt(!0),Dt())},[it]),(0,Z.useEffect)(function(){return function(){clearTimeout(Ht.current)}},[]),Z.createElement("div",(0,d.Z)({className:h()("".concat(we,"-root"),At)},(0,q.Z)(oe,{data:!0})),Z.createElement(ne,{prefixCls:we,visible:Ze&&it,motionName:A(we,Ie,ct),style:(0,w.Z)({zIndex:Ve},Pt),maskProps:ke}),Z.createElement("div",(0,d.Z)({tabIndex:-1,onKeyDown:ar,className:h()("".concat(we,"-wrap"),S),ref:lt,onClick:er,style:(0,w.Z)((0,w.Z)({zIndex:Ve},ae),{},{display:Zt?null:"none"})},ue),Z.createElement(xe,(0,d.Z)({},oe,{onMouseDown:Lt,onMouseUp:rr,ref:$t,closable:et,ariaId:Jt,prefixCls:we,visible:it&&Zt,onClose:Tt,onVisibleChanged:Bt,motionName:A(we,he,Fe)}))))}var Re=function(R){var we=R.visible,Ve=R.getContainer,Xe=R.forceRender,it=R.destroyOnClose,ye=it===void 0?!1:it,J=R.afterClose,Pe=Z.useState(we),m=(0,n.Z)(Pe,2),ae=m[0],S=m[1];return Z.useEffect(function(){we&&S(!0)},[we]),!Xe&&ye&&!ae?null:Z.createElement(H.Z,{open:we||Xe||ae,autoDestroy:!1,getContainer:Ve,autoLock:we||ae},Z.createElement(Te,(0,d.Z)({},R,{destroyOnClose:ye,afterClose:function(){J?.(),S(!1)}})))};Re.displayName="Dialog";var Ce=Re,ve=Ce},22181:function(tt,le,l){l.d(le,{gN:function(){return Pt},zb:function(){return V},RV:function(){return Tt},aV:function(){return At},ZM:function(){return te},ZP:function(){return me},cI:function(){return Wt},qo:function(){return $e}});var d=l(27378),n=l(25773),Z=l(18808),H=l(64649),w=l(50189),y=l(649),h=l(22951),a=l(91976),v=l(47169),P=l(67591),q=l(12357),A=l(27406),_=l(74485),z=l(46882),g="RC_FORM_INTERNAL_HOOKS",E=function(){(0,_.ZP)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},F=d.createContext({getFieldValue:E,getFieldsValue:E,getFieldError:E,getFieldWarning:E,getFieldsError:E,isFieldsTouched:E,isFieldTouched:E,isFieldValidating:E,isFieldsValidating:E,resetFields:E,setFields:E,setFieldValue:E,setFieldsValue:E,validateFields:E,submit:E,getInternalHooks:function(){return E(),{dispatch:E,initEntityValue:E,registerField:E,useSubscribe:E,setInitialValues:E,destroyForm:E,setCallbacks:E,registerWatch:E,getFields:E,setValidateMessages:E,setPreserve:E,getInitialValue:E}}}),V=F,X=d.createContext(null),te=X;function xe(T){return T==null?[]:Array.isArray(T)?T:[T]}function ne(T){return T&&!!T._init}var Te=l(11092),Re=l(27791),Ce=l(48121),ve="'${name}' is not a valid ${type}",oe={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:ve,method:ve,array:ve,object:ve,number:ve,date:ve,boolean:ve,integer:ve,float:ve,regexp:ve,email:ve,url:ve,hex:ve},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},R=l(16275),we=Ce.Z;function Ve(T,N){return T.replace(/\$\{\w+\}/g,function(c){var x=c.slice(2,-1);return N[x]})}var Xe="CODE_LOGIC_ERROR";function it(T,N,c,x,i){return ye.apply(this,arguments)}function ye(){return ye=(0,Re.Z)((0,Te.Z)().mark(function T(N,c,x,i,D){var B,ce,G,ee,K,Se,f,O,M;return(0,Te.Z)().wrap(function($){for(;;)switch($.prev=$.next){case 0:return B=(0,w.Z)({},x),delete B.ruleIndex,we.warning=function(){},B.validator&&(ce=B.validator,B.validator=function(){try{return ce.apply(void 0,arguments)}catch(de){return console.error(de),Promise.reject(Xe)}}),G=null,B&&B.type==="array"&&B.defaultField&&(G=B.defaultField,delete B.defaultField),ee=new we((0,H.Z)({},N,[B])),K=(0,R.T)(oe,i.validateMessages),ee.messages(K),Se=[],$.prev=10,$.next=13,Promise.resolve(ee.validate((0,H.Z)({},N,c),(0,w.Z)({},i)));case 13:$.next=18;break;case 15:$.prev=15,$.t0=$.catch(10),$.t0.errors&&(Se=$.t0.errors.map(function(de,be){var Ae=de.message,_e=Ae===Xe?K.default:Ae;return d.isValidElement(_e)?d.cloneElement(_e,{key:"error_".concat(be)}):_e}));case 18:if(!(!Se.length&&G)){$.next=23;break}return $.next=21,Promise.all(c.map(function(de,be){return it("".concat(N,".").concat(be),de,G,i,D)}));case 21:return f=$.sent,$.abrupt("return",f.reduce(function(de,be){return[].concat((0,y.Z)(de),(0,y.Z)(be))},[]));case 23:return O=(0,w.Z)((0,w.Z)({},x),{},{name:N,enum:(x.enum||[]).join(", ")},D),M=Se.map(function(de){return typeof de=="string"?Ve(de,O):de}),$.abrupt("return",M);case 26:case"end":return $.stop()}},T,null,[[10,15]])})),ye.apply(this,arguments)}function J(T,N,c,x,i,D){var B=T.join("."),ce=c.map(function(K,Se){var f=K.validator,O=(0,w.Z)((0,w.Z)({},K),{},{ruleIndex:Se});return f&&(O.validator=function(M,I,$){var de=!1,be=function(){for(var Ge=arguments.length,ze=new Array(Ge),st=0;st<Ge;st++)ze[st]=arguments[st];Promise.resolve().then(function(){(0,_.ZP)(!de,"Your validator function has already return a promise. `callback` will be ignored."),de||$.apply(void 0,ze)})},Ae=f(M,I,be);de=Ae&&typeof Ae.then=="function"&&typeof Ae.catch=="function",(0,_.ZP)(de,"`callback` is deprecated. Please return a promise instead."),de&&Ae.then(function(){$()}).catch(function(_e){$(_e||" ")})}),O}).sort(function(K,Se){var f=K.warningOnly,O=K.ruleIndex,M=Se.warningOnly,I=Se.ruleIndex;return!!f==!!M?O-I:f?1:-1}),G;if(i===!0)G=new Promise(function(){var K=(0,Re.Z)((0,Te.Z)().mark(function Se(f,O){var M,I,$;return(0,Te.Z)().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:M=0;case 1:if(!(M<ce.length)){be.next=12;break}return I=ce[M],be.next=5,it(B,N,I,x,D);case 5:if($=be.sent,!$.length){be.next=9;break}return O([{errors:$,rule:I}]),be.abrupt("return");case 9:M+=1,be.next=1;break;case 12:f([]);case 13:case"end":return be.stop()}},Se)}));return function(Se,f){return K.apply(this,arguments)}}());else{var ee=ce.map(function(K){return it(B,N,K,x,D).then(function(Se){return{errors:Se,rule:K}})});G=(i?ae(ee):Pe(ee)).then(function(K){return Promise.reject(K)})}return G.catch(function(K){return K}),G}function Pe(T){return m.apply(this,arguments)}function m(){return m=(0,Re.Z)((0,Te.Z)().mark(function T(N){return(0,Te.Z)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Promise.all(N).then(function(i){var D,B=(D=[]).concat.apply(D,(0,y.Z)(i));return B}));case 1:case"end":return x.stop()}},T)})),m.apply(this,arguments)}function ae(T){return S.apply(this,arguments)}function S(){return S=(0,Re.Z)((0,Te.Z)().mark(function T(N){var c;return(0,Te.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return c=0,i.abrupt("return",new Promise(function(D){N.forEach(function(B){B.then(function(ce){ce.errors.length&&D([ce]),c+=1,c===N.length&&D([])})})}));case 2:case"end":return i.stop()}},T)})),S.apply(this,arguments)}var ue=l(33940),ie=l(2833);function Q(T){return xe(T)}function se(T,N){var c={};return N.forEach(function(x){var i=(0,ie.Z)(T,x);c=(0,R.Z)(c,x,i)}),c}function he(T,N){return T&&T.some(function(c){return Fe(c,N)})}function Fe(T,N){return!T||!N||T.length!==N.length?!1:T.every(function(c,x){return N[x]===c})}function We(T,N){if(T===N)return!0;if(!T&&N||T&&!N||!T||!N||(0,ue.Z)(T)!=="object"||(0,ue.Z)(N)!=="object")return!1;var c=Object.keys(T),x=Object.keys(N),i=new Set([].concat(c,x));return(0,y.Z)(i).every(function(D){var B=T[D],ce=N[D];return typeof B=="function"&&typeof ce=="function"?!0:B===ce})}function et(T){var N=arguments.length<=1?void 0:arguments[1];return N&&N.target&&(0,ue.Z)(N.target)==="object"&&T in N.target?N.target[T]:N}function Je(T,N,c){var x=T.length;if(N<0||N>=x||c<0||c>=x)return T;var i=T[N],D=N-c;return D>0?[].concat((0,y.Z)(T.slice(0,c)),[i],(0,y.Z)(T.slice(c,N)),(0,y.Z)(T.slice(N+1,x))):D<0?[].concat((0,y.Z)(T.slice(0,N)),(0,y.Z)(T.slice(N+1,c+1)),[i],(0,y.Z)(T.slice(c+1,x))):T}var Ze=["name"],Ie=[];function ct(T,N,c,x,i,D){return typeof T=="function"?T(N,c,"source"in D?{source:D.source}:{}):x!==i}var pt=function(T){(0,P.Z)(c,T);var N=(0,q.Z)(c);function c(x){var i;if((0,h.Z)(this,c),i=N.call(this,x),i.state={resetCount:0},i.cancelRegisterFunc=null,i.mounted=!1,i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.prevValidating=void 0,i.errors=Ie,i.warnings=Ie,i.cancelRegister=function(){var G=i.props,ee=G.preserve,K=G.isListField,Se=G.name;i.cancelRegisterFunc&&i.cancelRegisterFunc(K,ee,Q(Se)),i.cancelRegisterFunc=null},i.getNamePath=function(){var G=i.props,ee=G.name,K=G.fieldContext,Se=K.prefixName,f=Se===void 0?[]:Se;return ee!==void 0?[].concat((0,y.Z)(f),(0,y.Z)(ee)):[]},i.getRules=function(){var G=i.props,ee=G.rules,K=ee===void 0?[]:ee,Se=G.fieldContext;return K.map(function(f){return typeof f=="function"?f(Se):f})},i.refresh=function(){i.mounted&&i.setState(function(G){var ee=G.resetCount;return{resetCount:ee+1}})},i.metaCache=null,i.triggerMetaEvent=function(G){var ee=i.props.onMetaChange;if(ee){var K=(0,w.Z)((0,w.Z)({},i.getMeta()),{},{destroy:G});(0,z.Z)(i.metaCache,K)||ee(K),i.metaCache=K}else i.metaCache=null},i.onStoreChange=function(G,ee,K){var Se=i.props,f=Se.shouldUpdate,O=Se.dependencies,M=O===void 0?[]:O,I=Se.onReset,$=K.store,de=i.getNamePath(),be=i.getValue(G),Ae=i.getValue($),_e=ee&&he(ee,de);switch(K.type==="valueUpdate"&&K.source==="external"&&be!==Ae&&(i.touched=!0,i.dirty=!0,i.validatePromise=null,i.errors=Ie,i.warnings=Ie,i.triggerMetaEvent()),K.type){case"reset":if(!ee||_e){i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.errors=Ie,i.warnings=Ie,i.triggerMetaEvent(),I?.(),i.refresh();return}break;case"remove":{if(f){i.reRender();return}break}case"setField":{if(_e){var Ge=K.data;"touched"in Ge&&(i.touched=Ge.touched),"validating"in Ge&&!("originRCField"in Ge)&&(i.validatePromise=Ge.validating?Promise.resolve([]):null),"errors"in Ge&&(i.errors=Ge.errors||Ie),"warnings"in Ge&&(i.warnings=Ge.warnings||Ie),i.dirty=!0,i.triggerMetaEvent(),i.reRender();return}if(f&&!de.length&&ct(f,G,$,be,Ae,K)){i.reRender();return}break}case"dependenciesUpdate":{var ze=M.map(Q);if(ze.some(function(st){return he(K.relatedFields,st)})){i.reRender();return}break}default:if(_e||(!M.length||de.length||f)&&ct(f,G,$,be,Ae,K)){i.reRender();return}break}f===!0&&i.reRender()},i.validateRules=function(G){var ee=i.getNamePath(),K=i.getValue(),Se=G||{},f=Se.triggerName,O=Se.validateOnly,M=O===void 0?!1:O,I=Promise.resolve().then(function(){if(!i.mounted)return[];var $=i.props,de=$.validateFirst,be=de===void 0?!1:de,Ae=$.messageVariables,_e=i.getRules();f&&(_e=_e.filter(function(ze){return ze}).filter(function(ze){var st=ze.validateTrigger;if(!st)return!0;var vt=xe(st);return vt.includes(f)}));var Ge=J(ee,K,_e,G,be,Ae);return Ge.catch(function(ze){return ze}).then(function(){var ze=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ie;if(i.validatePromise===I){var st;i.validatePromise=null;var vt=[],ut=[];(st=ze.forEach)===null||st===void 0||st.call(ze,function(Qe){var wt=Qe.rule.warningOnly,Et=Qe.errors,_t=Et===void 0?Ie:Et;wt?ut.push.apply(ut,(0,y.Z)(_t)):vt.push.apply(vt,(0,y.Z)(_t))}),i.errors=vt,i.warnings=ut,i.triggerMetaEvent(),i.reRender()}}),Ge});return M||(i.validatePromise=I,i.dirty=!0,i.errors=Ie,i.warnings=Ie,i.triggerMetaEvent(),i.reRender()),I},i.isFieldValidating=function(){return!!i.validatePromise},i.isFieldTouched=function(){return i.touched},i.isFieldDirty=function(){if(i.dirty||i.props.initialValue!==void 0)return!0;var G=i.props.fieldContext,ee=G.getInternalHooks(g),K=ee.getInitialValue;return K(i.getNamePath())!==void 0},i.getErrors=function(){return i.errors},i.getWarnings=function(){return i.warnings},i.isListField=function(){return i.props.isListField},i.isList=function(){return i.props.isList},i.isPreserve=function(){return i.props.preserve},i.getMeta=function(){i.prevValidating=i.isFieldValidating();var G={touched:i.isFieldTouched(),validating:i.prevValidating,errors:i.errors,warnings:i.warnings,name:i.getNamePath(),validated:i.validatePromise===null};return G},i.getOnlyChild=function(G){if(typeof G=="function"){var ee=i.getMeta();return(0,w.Z)((0,w.Z)({},i.getOnlyChild(G(i.getControlled(),ee,i.props.fieldContext))),{},{isFunction:!0})}var K=(0,A.Z)(G);return K.length!==1||!d.isValidElement(K[0])?{child:K,isFunction:!1}:{child:K[0],isFunction:!1}},i.getValue=function(G){var ee=i.props.fieldContext.getFieldsValue,K=i.getNamePath();return(0,ie.Z)(G||ee(!0),K)},i.getControlled=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ee=i.props,K=ee.trigger,Se=ee.validateTrigger,f=ee.getValueFromEvent,O=ee.normalize,M=ee.valuePropName,I=ee.getValueProps,$=ee.fieldContext,de=Se!==void 0?Se:$.validateTrigger,be=i.getNamePath(),Ae=$.getInternalHooks,_e=$.getFieldsValue,Ge=Ae(g),ze=Ge.dispatch,st=i.getValue(),vt=I||function(Et){return(0,H.Z)({},M,Et)},ut=G[K],Qe=(0,w.Z)((0,w.Z)({},G),vt(st));Qe[K]=function(){i.touched=!0,i.dirty=!0,i.triggerMetaEvent();for(var Et,_t=arguments.length,Nt=new Array(_t),Qt=0;Qt<_t;Qt++)Nt[Qt]=arguments[Qt];f?Et=f.apply(void 0,Nt):Et=et.apply(void 0,[M].concat(Nt)),O&&(Et=O(Et,st,_e(!0))),ze({type:"updateValue",namePath:be,value:Et}),ut&&ut.apply(void 0,Nt)};var wt=xe(de||[]);return wt.forEach(function(Et){var _t=Qe[Et];Qe[Et]=function(){_t&&_t.apply(void 0,arguments);var Nt=i.props.rules;Nt&&Nt.length&&ze({type:"validateField",namePath:be,triggerName:Et})}}),Qe},x.fieldContext){var D=x.fieldContext.getInternalHooks,B=D(g),ce=B.initEntityValue;ce((0,v.Z)(i))}return i}return(0,a.Z)(c,[{key:"componentDidMount",value:function(){var i=this.props,D=i.shouldUpdate,B=i.fieldContext;if(this.mounted=!0,B){var ce=B.getInternalHooks,G=ce(g),ee=G.registerField;this.cancelRegisterFunc=ee(this)}D===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var i=this.state.resetCount,D=this.props.children,B=this.getOnlyChild(D),ce=B.child,G=B.isFunction,ee;return G?ee=ce:d.isValidElement(ce)?ee=d.cloneElement(ce,this.getControlled(ce.props)):((0,_.ZP)(!ce,"`children` of Field is not validate ReactElement."),ee=ce),d.createElement(d.Fragment,{key:i},ee)}}]),c}(d.Component);pt.contextType=V,pt.defaultProps={trigger:"onChange",valuePropName:"value"};function rt(T){var N=T.name,c=(0,Z.Z)(T,Ze),x=d.useContext(V),i=d.useContext(te),D=N!==void 0?Q(N):void 0,B="keep";return c.isListField||(B="_".concat((D||[]).join("_"))),d.createElement(pt,(0,n.Z)({key:B,name:D,isListField:!!i},c,{fieldContext:x}))}var Pt=rt;function ke(T){var N=T.name,c=T.initialValue,x=T.children,i=T.rules,D=T.validateTrigger,B=T.isListField,ce=d.useContext(V),G=d.useContext(te),ee=d.useRef({keys:[],id:0}),K=ee.current,Se=d.useMemo(function(){var I=Q(ce.prefixName)||[];return[].concat((0,y.Z)(I),(0,y.Z)(Q(N)))},[ce.prefixName,N]),f=d.useMemo(function(){return(0,w.Z)((0,w.Z)({},ce),{},{prefixName:Se})},[ce,Se]),O=d.useMemo(function(){return{getKey:function($){var de=Se.length,be=$[de];return[K.keys[be],$.slice(de+1)]}}},[Se]);if(typeof x!="function")return(0,_.ZP)(!1,"Form.List only accepts function as children."),null;var M=function($,de,be){var Ae=be.source;return Ae==="internal"?!1:$!==de};return d.createElement(te.Provider,{value:O},d.createElement(V.Provider,{value:f},d.createElement(Pt,{name:[],shouldUpdate:M,rules:i,validateTrigger:D,initialValue:c,isList:!0,isListField:B??!!G},function(I,$){var de=I.value,be=de===void 0?[]:de,Ae=I.onChange,_e=ce.getFieldValue,Ge=function(){var ut=_e(Se||[]);return ut||[]},ze={add:function(ut,Qe){var wt=Ge();Qe>=0&&Qe<=wt.length?(K.keys=[].concat((0,y.Z)(K.keys.slice(0,Qe)),[K.id],(0,y.Z)(K.keys.slice(Qe))),Ae([].concat((0,y.Z)(wt.slice(0,Qe)),[ut],(0,y.Z)(wt.slice(Qe))))):(K.keys=[].concat((0,y.Z)(K.keys),[K.id]),Ae([].concat((0,y.Z)(wt),[ut]))),K.id+=1},remove:function(ut){var Qe=Ge(),wt=new Set(Array.isArray(ut)?ut:[ut]);wt.size<=0||(K.keys=K.keys.filter(function(Et,_t){return!wt.has(_t)}),Ae(Qe.filter(function(Et,_t){return!wt.has(_t)})))},move:function(ut,Qe){if(ut!==Qe){var wt=Ge();ut<0||ut>=wt.length||Qe<0||Qe>=wt.length||(K.keys=Je(K.keys,ut,Qe),Ae(Je(wt,ut,Qe)))}}},st=be||[];return Array.isArray(st)||(st=[]),x(st.map(function(vt,ut){var Qe=K.keys[ut];return Qe===void 0&&(K.keys[ut]=K.id,Qe=K.keys[ut],K.id+=1),{name:ut,key:Qe,isListField:!0}}),ze,$)})))}var At=ke,kt=l(11026);function lt(T){var N=!1,c=T.length,x=[];return T.length?new Promise(function(i,D){T.forEach(function(B,ce){B.catch(function(G){return N=!0,G}).then(function(G){c-=1,x[ce]=G,!(c>0)&&(N&&D(x),i(x))})})}):Promise.resolve([])}var $t="__@field_split__";function Vt(T){return T.map(function(N){return"".concat((0,ue.Z)(N),":").concat(N)}).join($t)}var tr=function(){function T(){(0,h.Z)(this,T),this.kvs=new Map}return(0,a.Z)(T,[{key:"set",value:function(c,x){this.kvs.set(Vt(c),x)}},{key:"get",value:function(c){return this.kvs.get(Vt(c))}},{key:"update",value:function(c,x){var i=this.get(c),D=x(i);D?this.set(c,D):this.delete(c)}},{key:"delete",value:function(c){this.kvs.delete(Vt(c))}},{key:"map",value:function(c){return(0,y.Z)(this.kvs.entries()).map(function(x){var i=(0,kt.Z)(x,2),D=i[0],B=i[1],ce=D.split($t);return c({key:ce.map(function(G){var ee=G.match(/^([^:]*):(.*)$/),K=(0,kt.Z)(ee,3),Se=K[1],f=K[2];return Se==="number"?Number(f):f}),value:B})})}},{key:"toJSON",value:function(){var c={};return this.map(function(x){var i=x.key,D=x.value;return c[i.join(".")]=D,null}),c}}]),T}(),Zt=tr,zt=["name"],Jt=(0,a.Z)(function T(N){var c=this;(0,h.Z)(this,T),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:c.getFieldValue,getFieldsValue:c.getFieldsValue,getFieldError:c.getFieldError,getFieldWarning:c.getFieldWarning,getFieldsError:c.getFieldsError,isFieldsTouched:c.isFieldsTouched,isFieldTouched:c.isFieldTouched,isFieldValidating:c.isFieldValidating,isFieldsValidating:c.isFieldsValidating,resetFields:c.resetFields,setFields:c.setFields,setFieldValue:c.setFieldValue,setFieldsValue:c.setFieldsValue,validateFields:c.validateFields,submit:c.submit,_init:!0,getInternalHooks:c.getInternalHooks}},this.getInternalHooks=function(x){return x===g?(c.formHooked=!0,{dispatch:c.dispatch,initEntityValue:c.initEntityValue,registerField:c.registerField,useSubscribe:c.useSubscribe,setInitialValues:c.setInitialValues,destroyForm:c.destroyForm,setCallbacks:c.setCallbacks,setValidateMessages:c.setValidateMessages,getFields:c.getFields,setPreserve:c.setPreserve,getInitialValue:c.getInitialValue,registerWatch:c.registerWatch}):((0,_.ZP)(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(x){c.subscribable=x},this.prevWithoutPreserves=null,this.setInitialValues=function(x,i){if(c.initialValues=x||{},i){var D,B=(0,R.T)(x,c.store);(D=c.prevWithoutPreserves)===null||D===void 0||D.map(function(ce){var G=ce.key;B=(0,R.Z)(B,G,(0,ie.Z)(x,G))}),c.prevWithoutPreserves=null,c.updateStore(B)}},this.destroyForm=function(){var x=new Zt;c.getFieldEntities(!0).forEach(function(i){c.isMergedPreserve(i.isPreserve())||x.set(i.getNamePath(),!0)}),c.prevWithoutPreserves=x},this.getInitialValue=function(x){var i=(0,ie.Z)(c.initialValues,x);return x.length?(0,R.T)(i):i},this.setCallbacks=function(x){c.callbacks=x},this.setValidateMessages=function(x){c.validateMessages=x},this.setPreserve=function(x){c.preserve=x},this.watchList=[],this.registerWatch=function(x){return c.watchList.push(x),function(){c.watchList=c.watchList.filter(function(i){return i!==x})}},this.notifyWatch=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(c.watchList.length){var i=c.getFieldsValue(),D=c.getFieldsValue(!0);c.watchList.forEach(function(B){B(i,D,x)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(x){c.store=x},this.getFieldEntities=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return x?c.fieldEntities.filter(function(i){return i.getNamePath().length}):c.fieldEntities},this.getFieldsMap=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=new Zt;return c.getFieldEntities(x).forEach(function(D){var B=D.getNamePath();i.set(B,D)}),i},this.getFieldEntitiesForNamePathList=function(x){if(!x)return c.getFieldEntities(!0);var i=c.getFieldsMap(!0);return x.map(function(D){var B=Q(D);return i.get(B)||{INVALIDATE_NAME_PATH:Q(D)}})},this.getFieldsValue=function(x,i){c.warningUnhooked();var D,B,ce;if(x===!0||Array.isArray(x)?(D=x,B=i):x&&(0,ue.Z)(x)==="object"&&(ce=x.strict,B=x.filter),D===!0&&!B)return c.store;var G=c.getFieldEntitiesForNamePathList(Array.isArray(D)?D:null),ee=[];return G.forEach(function(K){var Se,f="INVALIDATE_NAME_PATH"in K?K.INVALIDATE_NAME_PATH:K.getNamePath();if(ce){var O;if(!((O=K.isList)===null||O===void 0)&&O.call(K))return}else if(!D&&(!((Se=K.isListField)===null||Se===void 0)&&Se.call(K)))return;if(!B)ee.push(f);else{var M="getMeta"in K?K.getMeta():null;B(M)&&ee.push(f)}}),se(c.store,ee.map(Q))},this.getFieldValue=function(x){c.warningUnhooked();var i=Q(x);return(0,ie.Z)(c.store,i)},this.getFieldsError=function(x){c.warningUnhooked();var i=c.getFieldEntitiesForNamePathList(x);return i.map(function(D,B){return D&&!("INVALIDATE_NAME_PATH"in D)?{name:D.getNamePath(),errors:D.getErrors(),warnings:D.getWarnings()}:{name:Q(x[B]),errors:[],warnings:[]}})},this.getFieldError=function(x){c.warningUnhooked();var i=Q(x),D=c.getFieldsError([i])[0];return D.errors},this.getFieldWarning=function(x){c.warningUnhooked();var i=Q(x),D=c.getFieldsError([i])[0];return D.warnings},this.isFieldsTouched=function(){c.warningUnhooked();for(var x=arguments.length,i=new Array(x),D=0;D<x;D++)i[D]=arguments[D];var B=i[0],ce=i[1],G,ee=!1;i.length===0?G=null:i.length===1?Array.isArray(B)?(G=B.map(Q),ee=!1):(G=null,ee=B):(G=B.map(Q),ee=ce);var K=c.getFieldEntities(!0),Se=function($){return $.isFieldTouched()};if(!G)return ee?K.every(Se):K.some(Se);var f=new Zt;G.forEach(function(I){f.set(I,[])}),K.forEach(function(I){var $=I.getNamePath();G.forEach(function(de){de.every(function(be,Ae){return $[Ae]===be})&&f.update(de,function(be){return[].concat((0,y.Z)(be),[I])})})});var O=function($){return $.some(Se)},M=f.map(function(I){var $=I.value;return $});return ee?M.every(O):M.some(O)},this.isFieldTouched=function(x){return c.warningUnhooked(),c.isFieldsTouched([x])},this.isFieldsValidating=function(x){c.warningUnhooked();var i=c.getFieldEntities();if(!x)return i.some(function(B){return B.isFieldValidating()});var D=x.map(Q);return i.some(function(B){var ce=B.getNamePath();return he(D,ce)&&B.isFieldValidating()})},this.isFieldValidating=function(x){return c.warningUnhooked(),c.isFieldsValidating([x])},this.resetWithFieldInitialValue=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=new Zt,D=c.getFieldEntities(!0);D.forEach(function(G){var ee=G.props.initialValue,K=G.getNamePath();if(ee!==void 0){var Se=i.get(K)||new Set;Se.add({entity:G,value:ee}),i.set(K,Se)}});var B=function(ee){ee.forEach(function(K){var Se=K.props.initialValue;if(Se!==void 0){var f=K.getNamePath(),O=c.getInitialValue(f);if(O!==void 0)(0,_.ZP)(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var M=i.get(f);if(M&&M.size>1)(0,_.ZP)(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(M){var I=c.getFieldValue(f);(!x.skipExist||I===void 0)&&c.updateStore((0,R.Z)(c.store,f,(0,y.Z)(M)[0].value))}}}})},ce;x.entities?ce=x.entities:x.namePathList?(ce=[],x.namePathList.forEach(function(G){var ee=i.get(G);if(ee){var K;(K=ce).push.apply(K,(0,y.Z)((0,y.Z)(ee).map(function(Se){return Se.entity})))}})):ce=D,B(ce)},this.resetFields=function(x){c.warningUnhooked();var i=c.store;if(!x){c.updateStore((0,R.T)(c.initialValues)),c.resetWithFieldInitialValue(),c.notifyObservers(i,null,{type:"reset"}),c.notifyWatch();return}var D=x.map(Q);D.forEach(function(B){var ce=c.getInitialValue(B);c.updateStore((0,R.Z)(c.store,B,ce))}),c.resetWithFieldInitialValue({namePathList:D}),c.notifyObservers(i,D,{type:"reset"}),c.notifyWatch(D)},this.setFields=function(x){c.warningUnhooked();var i=c.store,D=[];x.forEach(function(B){var ce=B.name,G=(0,Z.Z)(B,zt),ee=Q(ce);D.push(ee),"value"in G&&c.updateStore((0,R.Z)(c.store,ee,G.value)),c.notifyObservers(i,[ee],{type:"setField",data:B})}),c.notifyWatch(D)},this.getFields=function(){var x=c.getFieldEntities(!0),i=x.map(function(D){var B=D.getNamePath(),ce=D.getMeta(),G=(0,w.Z)((0,w.Z)({},ce),{},{name:B,value:c.getFieldValue(B)});return Object.defineProperty(G,"originRCField",{value:!0}),G});return i},this.initEntityValue=function(x){var i=x.props.initialValue;if(i!==void 0){var D=x.getNamePath(),B=(0,ie.Z)(c.store,D);B===void 0&&c.updateStore((0,R.Z)(c.store,D,i))}},this.isMergedPreserve=function(x){var i=x!==void 0?x:c.preserve;return i??!0},this.registerField=function(x){c.fieldEntities.push(x);var i=x.getNamePath();if(c.notifyWatch([i]),x.props.initialValue!==void 0){var D=c.store;c.resetWithFieldInitialValue({entities:[x],skipExist:!0}),c.notifyObservers(D,[x.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(B,ce){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(c.fieldEntities=c.fieldEntities.filter(function(Se){return Se!==x}),!c.isMergedPreserve(ce)&&(!B||G.length>1)){var ee=B?void 0:c.getInitialValue(i);if(i.length&&c.getFieldValue(i)!==ee&&c.fieldEntities.every(function(Se){return!Fe(Se.getNamePath(),i)})){var K=c.store;c.updateStore((0,R.Z)(K,i,ee,!0)),c.notifyObservers(K,[i],{type:"remove"}),c.triggerDependenciesUpdate(K,i)}}c.notifyWatch([i])}},this.dispatch=function(x){switch(x.type){case"updateValue":{var i=x.namePath,D=x.value;c.updateValue(i,D);break}case"validateField":{var B=x.namePath,ce=x.triggerName;c.validateFields([B],{triggerName:ce});break}default:}},this.notifyObservers=function(x,i,D){if(c.subscribable){var B=(0,w.Z)((0,w.Z)({},D),{},{store:c.getFieldsValue(!0)});c.getFieldEntities().forEach(function(ce){var G=ce.onStoreChange;G(x,i,B)})}else c.forceRootUpdate()},this.triggerDependenciesUpdate=function(x,i){var D=c.getDependencyChildrenFields(i);return D.length&&c.validateFields(D),c.notifyObservers(x,D,{type:"dependenciesUpdate",relatedFields:[i].concat((0,y.Z)(D))}),D},this.updateValue=function(x,i){var D=Q(x),B=c.store;c.updateStore((0,R.Z)(c.store,D,i)),c.notifyObservers(B,[D],{type:"valueUpdate",source:"internal"}),c.notifyWatch([D]);var ce=c.triggerDependenciesUpdate(B,D),G=c.callbacks.onValuesChange;if(G){var ee=se(c.store,[D]);G(ee,c.getFieldsValue())}c.triggerOnFieldsChange([D].concat((0,y.Z)(ce)))},this.setFieldsValue=function(x){c.warningUnhooked();var i=c.store;if(x){var D=(0,R.T)(c.store,x);c.updateStore(D)}c.notifyObservers(i,null,{type:"valueUpdate",source:"external"}),c.notifyWatch()},this.setFieldValue=function(x,i){c.setFields([{name:x,value:i}])},this.getDependencyChildrenFields=function(x){var i=new Set,D=[],B=new Zt;c.getFieldEntities().forEach(function(G){var ee=G.props.dependencies;(ee||[]).forEach(function(K){var Se=Q(K);B.update(Se,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(G),f})})});var ce=function G(ee){var K=B.get(ee)||new Set;K.forEach(function(Se){if(!i.has(Se)){i.add(Se);var f=Se.getNamePath();Se.isFieldDirty()&&f.length&&(D.push(f),G(f))}})};return ce(x),D},this.triggerOnFieldsChange=function(x,i){var D=c.callbacks.onFieldsChange;if(D){var B=c.getFields();if(i){var ce=new Zt;i.forEach(function(ee){var K=ee.name,Se=ee.errors;ce.set(K,Se)}),B.forEach(function(ee){ee.errors=ce.get(ee.name)||ee.errors})}var G=B.filter(function(ee){var K=ee.name;return he(x,K)});G.length&&D(G,B)}},this.validateFields=function(x,i){c.warningUnhooked();var D,B;Array.isArray(x)||typeof x=="string"||typeof i=="string"?(D=x,B=i):B=x;var ce=!!D,G=ce?D.map(Q):[],ee=[],K=String(Date.now()),Se=new Set;c.getFieldEntities(!0).forEach(function(I){var $;if(ce||G.push(I.getNamePath()),!(($=B)===null||$===void 0)&&$.recursive&&ce){var de=I.getNamePath();de.every(function(_e,Ge){return D[Ge]===_e||D[Ge]===void 0})&&G.push(de)}if(!(!I.props.rules||!I.props.rules.length)){var be=I.getNamePath();if(Se.add(be.join(K)),!ce||he(G,be)){var Ae=I.validateRules((0,w.Z)({validateMessages:(0,w.Z)((0,w.Z)({},oe),c.validateMessages)},B));ee.push(Ae.then(function(){return{name:be,errors:[],warnings:[]}}).catch(function(_e){var Ge,ze=[],st=[];return(Ge=_e.forEach)===null||Ge===void 0||Ge.call(_e,function(vt){var ut=vt.rule.warningOnly,Qe=vt.errors;ut?st.push.apply(st,(0,y.Z)(Qe)):ze.push.apply(ze,(0,y.Z)(Qe))}),ze.length?Promise.reject({name:be,errors:ze,warnings:st}):{name:be,errors:ze,warnings:st}}))}}});var f=lt(ee);c.lastValidatePromise=f,f.catch(function(I){return I}).then(function(I){var $=I.map(function(de){var be=de.name;return be});c.notifyObservers(c.store,$,{type:"validateFinish"}),c.triggerOnFieldsChange($,I)});var O=f.then(function(){return c.lastValidatePromise===f?Promise.resolve(c.getFieldsValue(G)):Promise.reject([])}).catch(function(I){var $=I.filter(function(de){return de&&de.errors.length});return Promise.reject({values:c.getFieldsValue(G),errorFields:$,outOfDate:c.lastValidatePromise!==f})});O.catch(function(I){return I});var M=G.filter(function(I){return Se.has(I.join(K))});return c.triggerOnFieldsChange(M),O},this.submit=function(){c.warningUnhooked(),c.validateFields().then(function(x){var i=c.callbacks.onFinish;if(i)try{i(x)}catch(D){console.error(D)}}).catch(function(x){var i=c.callbacks.onFinishFailed;i&&i(x)})},this.forceRootUpdate=N});function Dt(T){var N=d.useRef(),c=d.useState({}),x=(0,kt.Z)(c,2),i=x[1];if(!N.current)if(T)N.current=T;else{var D=function(){i({})},B=new Jt(D);N.current=B.getForm()}return[N.current]}var Wt=Dt,Bt=d.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Tt=function(N){var c=N.validateMessages,x=N.onFormChange,i=N.onFormFinish,D=N.children,B=d.useContext(Bt),ce=d.useRef({});return d.createElement(Bt.Provider,{value:(0,w.Z)((0,w.Z)({},B),{},{validateMessages:(0,w.Z)((0,w.Z)({},B.validateMessages),c),triggerFormChange:function(ee,K){x&&x(ee,{changedFields:K,forms:ce.current}),B.triggerFormChange(ee,K)},triggerFormFinish:function(ee,K){i&&i(ee,{values:K,forms:ce.current}),B.triggerFormFinish(ee,K)},registerForm:function(ee,K){ee&&(ce.current=(0,w.Z)((0,w.Z)({},ce.current),{},(0,H.Z)({},ee,K))),B.registerForm(ee,K)},unregisterForm:function(ee){var K=(0,w.Z)({},ce.current);delete K[ee],ce.current=K,B.unregisterForm(ee)}})},D)},qt=Bt,Ht=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],Lt=function(N,c){var x=N.name,i=N.initialValues,D=N.fields,B=N.form,ce=N.preserve,G=N.children,ee=N.component,K=ee===void 0?"form":ee,Se=N.validateMessages,f=N.validateTrigger,O=f===void 0?"onChange":f,M=N.onValuesChange,I=N.onFieldsChange,$=N.onFinish,de=N.onFinishFailed,be=(0,Z.Z)(N,Ht),Ae=d.useContext(qt),_e=Wt(B),Ge=(0,kt.Z)(_e,1),ze=Ge[0],st=ze.getInternalHooks(g),vt=st.useSubscribe,ut=st.setInitialValues,Qe=st.setCallbacks,wt=st.setValidateMessages,Et=st.setPreserve,_t=st.destroyForm;d.useImperativeHandle(c,function(){return ze}),d.useEffect(function(){return Ae.registerForm(x,ze),function(){Ae.unregisterForm(x)}},[Ae,ze,x]),wt((0,w.Z)((0,w.Z)({},Ae.validateMessages),Se)),Qe({onValuesChange:M,onFieldsChange:function(re){if(Ae.triggerFormChange(x,re),I){for(var Y=arguments.length,U=new Array(Y>1?Y-1:0),Ne=1;Ne<Y;Ne++)U[Ne-1]=arguments[Ne];I.apply(void 0,[re].concat(U))}},onFinish:function(re){Ae.triggerFormFinish(x,re),$&&$(re)},onFinishFailed:de}),Et(ce);var Nt=d.useRef(null);ut(i,!Nt.current),Nt.current||(Nt.current=!0),d.useEffect(function(){return _t},[]);var Qt,vr=typeof G=="function";if(vr){var sr=ze.getFieldsValue(!0);Qt=G(sr,ze)}else Qt=G;vt(!vr);var nr=d.useRef();d.useEffect(function(){We(nr.current||[],D||[])||ze.setFields(D||[]),nr.current=D},[D,ze]);var Cr=d.useMemo(function(){return(0,w.Z)((0,w.Z)({},ze),{},{validateTrigger:O})},[ze,O]),b=d.createElement(te.Provider,{value:null},d.createElement(V.Provider,{value:Cr},Qt));return K===!1?b:d.createElement(K,(0,n.Z)({},be,{onSubmit:function(re){re.preventDefault(),re.stopPropagation(),ze.submit()},onReset:function(re){var Y;re.preventDefault(),ze.resetFields(),(Y=be.onReset)===null||Y===void 0||Y.call(be,re)}}),b)},rr=Lt;function er(T){try{return JSON.stringify(T)}catch{return Math.random()}}var ar=function(){};function Oe(){for(var T=arguments.length,N=new Array(T),c=0;c<T;c++)N[c]=arguments[c];var x=N[0],i=x===void 0?[]:x,D=N[1],B=D===void 0?{}:D,ce=ne(B)?{form:B}:B,G=ce.form,ee=(0,d.useState)(),K=(0,kt.Z)(ee,2),Se=K[0],f=K[1],O=(0,d.useMemo)(function(){return er(Se)},[Se]),M=(0,d.useRef)(O);M.current=O;var I=(0,d.useContext)(V),$=G||I,de=$&&$._init,be=Q(i),Ae=(0,d.useRef)(be);return Ae.current=be,ar(be),(0,d.useEffect)(function(){if(de){var _e=$.getFieldsValue,Ge=$.getInternalHooks,ze=Ge(g),st=ze.registerWatch,vt=st(function(Qe,wt){var Et=(0,ie.Z)(ce.preserve?wt:Qe,Ae.current),_t=er(Et);M.current!==_t&&(M.current=_t,f(Et))}),ut=(0,ie.Z)(ce.preserve?_e(!0):_e(),Ae.current);return f(ut),vt}},[de]),Se}var $e=Oe,Ye=d.forwardRef(rr),Ue=Ye;Ue.FormProvider=Tt,Ue.Field=Pt,Ue.List=At,Ue.useForm=Wt,Ue.useWatch=$e;var me=Ue},83395:function(tt,le,l){l.d(le,{V4:function(){return er},zt:function(){return _},ZP:function(){return ar}});var d=l(64649),n=l(50189),Z=l(11026),H=l(33940),w=l(60042),y=l.n(w),h=l(62738),a=l(79986),v=l(27378),P=l(18808),q=["children"],A=v.createContext({});function _(Oe){var $e=Oe.children,Ye=(0,P.Z)(Oe,q);return v.createElement(A.Provider,{value:Ye},$e)}var z=l(22951),g=l(91976),E=l(67591),F=l(12357),V=function(Oe){(0,E.Z)(Ye,Oe);var $e=(0,F.Z)(Ye);function Ye(){return(0,z.Z)(this,Ye),$e.apply(this,arguments)}return(0,g.Z)(Ye,[{key:"render",value:function(){return this.props.children}}]),Ye}(v.Component),X=V,te=l(87643),xe="none",ne="appear",Te="enter",Re="leave",Ce="none",ve="prepare",oe="start",R="active",we="end",Ve="prepared",Xe=l(98554);function it(Oe,$e){var Ye={};return Ye[Oe.toLowerCase()]=$e.toLowerCase(),Ye["Webkit".concat(Oe)]="webkit".concat($e),Ye["Moz".concat(Oe)]="moz".concat($e),Ye["ms".concat(Oe)]="MS".concat($e),Ye["O".concat(Oe)]="o".concat($e.toLowerCase()),Ye}function ye(Oe,$e){var Ye={animationend:it("Animation","AnimationEnd"),transitionend:it("Transition","TransitionEnd")};return Oe&&("AnimationEvent"in $e||delete Ye.animationend.animation,"TransitionEvent"in $e||delete Ye.transitionend.transition),Ye}var J=ye((0,Xe.Z)(),typeof window<"u"?window:{}),Pe={};if((0,Xe.Z)()){var m=document.createElement("div");Pe=m.style}var ae={};function S(Oe){if(ae[Oe])return ae[Oe];var $e=J[Oe];if($e)for(var Ye=Object.keys($e),Ue=Ye.length,me=0;me<Ue;me+=1){var T=Ye[me];if(Object.prototype.hasOwnProperty.call($e,T)&&T in Pe)return ae[Oe]=$e[T],ae[Oe]}return""}var ue=S("animationend"),ie=S("transitionend"),Q=!!(ue&&ie),se=ue||"animationend",he=ie||"transitionend";function Fe(Oe,$e){if(!Oe)return null;if((0,H.Z)(Oe)==="object"){var Ye=$e.replace(/-\w/g,function(Ue){return Ue[1].toUpperCase()});return Oe[Ye]}return"".concat(Oe,"-").concat($e)}var We=function(Oe){var $e=(0,v.useRef)(),Ye=(0,v.useRef)(Oe);Ye.current=Oe;var Ue=v.useCallback(function(N){Ye.current(N)},[]);function me(N){N&&(N.removeEventListener(he,Ue),N.removeEventListener(se,Ue))}function T(N){$e.current&&$e.current!==N&&me($e.current),N&&N!==$e.current&&(N.addEventListener(he,Ue),N.addEventListener(se,Ue),$e.current=N)}return v.useEffect(function(){return function(){me($e.current)}},[]),[T,me]},et=(0,Xe.Z)()?v.useLayoutEffect:v.useEffect,Je=et,Ze=l(94068),Ie=function(){var Oe=v.useRef(null);function $e(){Ze.Z.cancel(Oe.current)}function Ye(Ue){var me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;$e();var T=(0,Ze.Z)(function(){me<=1?Ue({isCanceled:function(){return T!==Oe.current}}):Ye(Ue,me-1)});Oe.current=T}return v.useEffect(function(){return function(){$e()}},[]),[Ye,$e]},ct=[ve,oe,R,we],pt=[ve,Ve],rt=!1,Pt=!0;function ke(Oe){return Oe===R||Oe===we}var At=function(Oe,$e,Ye){var Ue=(0,te.Z)(Ce),me=(0,Z.Z)(Ue,2),T=me[0],N=me[1],c=Ie(),x=(0,Z.Z)(c,2),i=x[0],D=x[1];function B(){N(ve,!0)}var ce=$e?pt:ct;return Je(function(){if(T!==Ce&&T!==we){var G=ce.indexOf(T),ee=ce[G+1],K=Ye(T);K===rt?N(ee,!0):ee&&i(function(Se){function f(){Se.isCanceled()||N(ee,!0)}K===!0?f():Promise.resolve(K).then(f)})}},[Oe,T]),v.useEffect(function(){return function(){D()}},[]),[B,T]};function kt(Oe,$e,Ye,Ue){var me=Ue.motionEnter,T=me===void 0?!0:me,N=Ue.motionAppear,c=N===void 0?!0:N,x=Ue.motionLeave,i=x===void 0?!0:x,D=Ue.motionDeadline,B=Ue.motionLeaveImmediately,ce=Ue.onAppearPrepare,G=Ue.onEnterPrepare,ee=Ue.onLeavePrepare,K=Ue.onAppearStart,Se=Ue.onEnterStart,f=Ue.onLeaveStart,O=Ue.onAppearActive,M=Ue.onEnterActive,I=Ue.onLeaveActive,$=Ue.onAppearEnd,de=Ue.onEnterEnd,be=Ue.onLeaveEnd,Ae=Ue.onVisibleChanged,_e=(0,te.Z)(),Ge=(0,Z.Z)(_e,2),ze=Ge[0],st=Ge[1],vt=(0,te.Z)(xe),ut=(0,Z.Z)(vt,2),Qe=ut[0],wt=ut[1],Et=(0,te.Z)(null),_t=(0,Z.Z)(Et,2),Nt=_t[0],Qt=_t[1],vr=(0,v.useRef)(!1),sr=(0,v.useRef)(null);function nr(){return Ye()}var Cr=(0,v.useRef)(!1);function b(){wt(xe,!0),Qt(null,!0)}function j(ft){var mt=nr();if(!(ft&&!ft.deadline&&ft.target!==mt)){var qe=Cr.current,nt;Qe===ne&&qe?nt=$?.(mt,ft):Qe===Te&&qe?nt=de?.(mt,ft):Qe===Re&&qe&&(nt=be?.(mt,ft)),Qe!==xe&&qe&&nt!==!1&&b()}}var re=We(j),Y=(0,Z.Z)(re,1),U=Y[0],Ne=function(mt){var qe,nt,Ft;switch(mt){case ne:return qe={},(0,d.Z)(qe,ve,ce),(0,d.Z)(qe,oe,K),(0,d.Z)(qe,R,O),qe;case Te:return nt={},(0,d.Z)(nt,ve,G),(0,d.Z)(nt,oe,Se),(0,d.Z)(nt,R,M),nt;case Re:return Ft={},(0,d.Z)(Ft,ve,ee),(0,d.Z)(Ft,oe,f),(0,d.Z)(Ft,R,I),Ft;default:return{}}},Be=v.useMemo(function(){return Ne(Qe)},[Qe]),He=At(Qe,!Oe,function(ft){if(ft===ve){var mt=Be[ve];return mt?mt(nr()):rt}if(ht in Be){var qe;Qt(((qe=Be[ht])===null||qe===void 0?void 0:qe.call(Be,nr(),null))||null)}return ht===R&&(U(nr()),D>0&&(clearTimeout(sr.current),sr.current=setTimeout(function(){j({deadline:!0})},D))),ht===Ve&&b(),Pt}),Le=(0,Z.Z)(He,2),De=Le[0],ht=Le[1],Ct=ke(ht);Cr.current=Ct,Je(function(){st($e);var ft=vr.current;vr.current=!0;var mt;!ft&&$e&&c&&(mt=ne),ft&&$e&&T&&(mt=Te),(ft&&!$e&&i||!ft&&B&&!$e&&i)&&(mt=Re);var qe=Ne(mt);mt&&(Oe||qe[ve])?(wt(mt),De()):wt(xe)},[$e]),(0,v.useEffect)(function(){(Qe===ne&&!c||Qe===Te&&!T||Qe===Re&&!i)&&wt(xe)},[c,T,i]),(0,v.useEffect)(function(){return function(){vr.current=!1,clearTimeout(sr.current)}},[]);var St=v.useRef(!1);(0,v.useEffect)(function(){ze&&(St.current=!0),ze!==void 0&&Qe===xe&&((St.current||ze)&&Ae?.(ze),St.current=!0)},[ze,Qe]);var xt=Nt;return Be[ve]&&ht===oe&&(xt=(0,n.Z)({transition:"none"},xt)),[Qe,ht,xt,ze??$e]}function lt(Oe){var $e=Oe;(0,H.Z)(Oe)==="object"&&($e=Oe.transitionSupport);function Ye(me,T){return!!(me.motionName&&$e&&T!==!1)}var Ue=v.forwardRef(function(me,T){var N=me.visible,c=N===void 0?!0:N,x=me.removeOnLeave,i=x===void 0?!0:x,D=me.forceRender,B=me.children,ce=me.motionName,G=me.leavedClassName,ee=me.eventProps,K=v.useContext(A),Se=K.motion,f=Ye(me,Se),O=(0,v.useRef)(),M=(0,v.useRef)();function I(){try{return O.current instanceof HTMLElement?O.current:(0,h.Z)(M.current)}catch{return null}}var $=kt(f,c,I,me),de=(0,Z.Z)($,4),be=de[0],Ae=de[1],_e=de[2],Ge=de[3],ze=v.useRef(Ge);Ge&&(ze.current=!0);var st=v.useCallback(function(Qt){O.current=Qt,(0,a.mH)(T,Qt)},[T]),vt,ut=(0,n.Z)((0,n.Z)({},ee),{},{visible:c});if(!B)vt=null;else if(be===xe)Ge?vt=B((0,n.Z)({},ut),st):!i&&ze.current&&G?vt=B((0,n.Z)((0,n.Z)({},ut),{},{className:G}),st):D||!i&&!G?vt=B((0,n.Z)((0,n.Z)({},ut),{},{style:{display:"none"}}),st):vt=null;else{var Qe,wt;Ae===ve?wt="prepare":ke(Ae)?wt="active":Ae===oe&&(wt="start");var Et=Fe(ce,"".concat(be,"-").concat(wt));vt=B((0,n.Z)((0,n.Z)({},ut),{},{className:y()(Fe(ce,be),(Qe={},(0,d.Z)(Qe,Et,Et&&wt),(0,d.Z)(Qe,ce,typeof ce=="string"),Qe)),style:_e}),st)}if(v.isValidElement(vt)&&(0,a.Yr)(vt)){var _t=vt,Nt=_t.ref;Nt||(vt=v.cloneElement(vt,{ref:st}))}return v.createElement(X,{ref:M},vt)});return Ue.displayName="CSSMotion",Ue}var $t=lt(Q),Vt=l(25773),tr=l(47169),Zt="add",zt="keep",Jt="remove",Dt="removed";function Wt(Oe){var $e;return Oe&&(0,H.Z)(Oe)==="object"&&"key"in Oe?$e=Oe:$e={key:Oe},(0,n.Z)((0,n.Z)({},$e),{},{key:String($e.key)})}function Bt(){var Oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Oe.map(Wt)}function Tt(){var Oe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],$e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],Ye=[],Ue=0,me=$e.length,T=Bt(Oe),N=Bt($e);T.forEach(function(i){for(var D=!1,B=Ue;B<me;B+=1){var ce=N[B];if(ce.key===i.key){Ue<B&&(Ye=Ye.concat(N.slice(Ue,B).map(function(G){return(0,n.Z)((0,n.Z)({},G),{},{status:Zt})})),Ue=B),Ye.push((0,n.Z)((0,n.Z)({},ce),{},{status:zt})),Ue+=1,D=!0;break}}D||Ye.push((0,n.Z)((0,n.Z)({},i),{},{status:Jt}))}),Ue<me&&(Ye=Ye.concat(N.slice(Ue).map(function(i){return(0,n.Z)((0,n.Z)({},i),{},{status:Zt})})));var c={};Ye.forEach(function(i){var D=i.key;c[D]=(c[D]||0)+1});var x=Object.keys(c).filter(function(i){return c[i]>1});return x.forEach(function(i){Ye=Ye.filter(function(D){var B=D.key,ce=D.status;return B!==i||ce!==Jt}),Ye.forEach(function(D){D.key===i&&(D.status=zt)})}),Ye}var qt=["component","children","onVisibleChanged","onAllRemoved"],Ht=["status"],Lt=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function rr(Oe){var $e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$t,Ye=function(Ue){(0,E.Z)(T,Ue);var me=(0,F.Z)(T);function T(){var N;(0,z.Z)(this,T);for(var c=arguments.length,x=new Array(c),i=0;i<c;i++)x[i]=arguments[i];return N=me.call.apply(me,[this].concat(x)),(0,d.Z)((0,tr.Z)(N),"state",{keyEntities:[]}),(0,d.Z)((0,tr.Z)(N),"removeKey",function(D){var B=N.state.keyEntities,ce=B.map(function(G){return G.key!==D?G:(0,n.Z)((0,n.Z)({},G),{},{status:Dt})});return N.setState({keyEntities:ce}),ce.filter(function(G){var ee=G.status;return ee!==Dt}).length}),N}return(0,g.Z)(T,[{key:"render",value:function(){var c=this,x=this.state.keyEntities,i=this.props,D=i.component,B=i.children,ce=i.onVisibleChanged,G=i.onAllRemoved,ee=(0,P.Z)(i,qt),K=D||v.Fragment,Se={};return Lt.forEach(function(f){Se[f]=ee[f],delete ee[f]}),delete ee.keys,v.createElement(K,ee,x.map(function(f){var O=f.status,M=(0,P.Z)(f,Ht),I=O===Zt||O===zt;return v.createElement($e,(0,Vt.Z)({},Se,{key:M.key,visible:I,eventProps:M,onVisibleChanged:function(de){if(ce?.(de,{key:M.key}),!de){var be=c.removeKey(M.key);be===0&&G&&G()}}}),B)}))}}],[{key:"getDerivedStateFromProps",value:function(c,x){var i=c.keys,D=x.keyEntities,B=Bt(i),ce=Tt(D,B);return{keyEntities:ce.filter(function(G){var ee=D.find(function(K){var Se=K.key;return G.key===Se});return!(ee&&ee.status===Dt&&G.status===Jt)})}}}]),T}(v.Component);return(0,d.Z)(Ye,"defaultProps",{component:"div"}),Ye}var er=rr(Q),ar=$t},84433:function(tt,le){le.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},15100:function(tt,le){var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};le.Z=l},27406:function(tt,le,l){l.d(le,{Z:function(){return Z}});var d=l(27378),n=l(11349);function Z(H){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=[];return d.Children.forEach(H,function(h){h==null&&!w.keepEmpty||(Array.isArray(h)?y=y.concat(Z(h)):(0,n.isFragment)(h)&&h.props?y=y.concat(Z(h.props.children,w)):y.push(h))}),y}},98554:function(tt,le,l){l.d(le,{Z:function(){return d}});function d(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},98209:function(tt,le,l){l.d(le,{Z:function(){return d}});function d(n,Z){if(!n)return!1;if(n.contains)return n.contains(Z);for(var H=Z;H;){if(H===n)return!0;H=H.parentNode}return!1}},98628:function(tt,le,l){l.d(le,{hq:function(){return E},jL:function(){return _}});var d=l(98554),n=l(98209),Z="data-rc-order",H="data-rc-priority",w="rc-util-key",y=new Map;function h(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},V=F.mark;return V?V.startsWith("data-")?V:"data-".concat(V):w}function a(F){if(F.attachTo)return F.attachTo;var V=document.querySelector("head");return V||document.body}function v(F){return F==="queue"?"prependQueue":F?"prepend":"append"}function P(F){return Array.from((y.get(F)||F).children).filter(function(V){return V.tagName==="STYLE"})}function q(F){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,d.Z)())return null;var X=V.csp,te=V.prepend,xe=V.priority,ne=xe===void 0?0:xe,Te=v(te),Re=Te==="prependQueue",Ce=document.createElement("style");Ce.setAttribute(Z,Te),Re&&ne&&Ce.setAttribute(H,"".concat(ne)),X!=null&&X.nonce&&(Ce.nonce=X?.nonce),Ce.innerHTML=F;var ve=a(V),oe=ve.firstChild;if(te){if(Re){var R=P(ve).filter(function(we){if(!["prepend","prependQueue"].includes(we.getAttribute(Z)))return!1;var Ve=Number(we.getAttribute(H)||0);return ne>=Ve});if(R.length)return ve.insertBefore(Ce,R[R.length-1].nextSibling),Ce}ve.insertBefore(Ce,oe)}else ve.appendChild(Ce);return Ce}function A(F){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},X=a(V);return P(X).find(function(te){return te.getAttribute(h(V))===F})}function _(F){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},X=A(F,V);if(X){var te=a(V);te.removeChild(X)}}function z(F,V){var X=y.get(F);if(!X||!(0,n.Z)(document,X)){var te=q("",V),xe=te.parentNode;y.set(F,xe),F.removeChild(te)}}function g(){y.clear()}function E(F,V){var X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},te=a(X);z(te,X);var xe=A(V,X);if(xe){var ne,Te;if((ne=X.csp)!==null&&ne!==void 0&&ne.nonce&&xe.nonce!==((Te=X.csp)===null||Te===void 0?void 0:Te.nonce)){var Re;xe.nonce=(Re=X.csp)===null||Re===void 0?void 0:Re.nonce}return xe.innerHTML!==F&&(xe.innerHTML=F),xe}var Ce=q(F,X);return Ce.setAttribute(h(X),V),Ce}},62738:function(tt,le,l){l.d(le,{S:function(){return Z},Z:function(){return H}});var d=l(27378),n=l(31542);function Z(w){return w instanceof HTMLElement||w instanceof SVGElement}function H(w){return Z(w)?w:w instanceof d.Component?n.findDOMNode(w):null}},5661:function(tt,le){le.Z=function(l){if(!l)return!1;if(l instanceof Element){if(l.offsetParent)return!0;if(l.getBBox){var d=l.getBBox(),n=d.width,Z=d.height;if(n||Z)return!0}if(l.getBoundingClientRect){var H=l.getBoundingClientRect(),w=H.width,y=H.height;if(w||y)return!0}}return!1}},97194:function(tt,le,l){l.d(le,{A:function(){return Z}});function d(H){var w;return H==null||(w=H.getRootNode)===null||w===void 0?void 0:w.call(H)}function n(H){return d(H)!==H?.ownerDocument}function Z(H){return n(H)?d(H):null}},78730:function(tt,le){var l={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var Z=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||Z>=l.F1&&Z<=l.F12)return!1;switch(Z){case l.ALT:case l.CAPS_LOCK:case l.CONTEXT_MENU:case l.CTRL:case l.DOWN:case l.END:case l.ESC:case l.HOME:case l.INSERT:case l.LEFT:case l.MAC_FF_META:case l.META:case l.NUMLOCK:case l.NUM_CENTER:case l.PAGE_DOWN:case l.PAGE_UP:case l.PAUSE:case l.PRINT_SCREEN:case l.RIGHT:case l.SHIFT:case l.UP:case l.WIN_KEY:case l.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=l.ZERO&&n<=l.NINE||n>=l.NUM_ZERO&&n<=l.NUM_MULTIPLY||n>=l.A&&n<=l.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case l.SPACE:case l.QUESTION_MARK:case l.NUM_PLUS:case l.NUM_MINUS:case l.NUM_PERIOD:case l.NUM_DIVISION:case l.SEMICOLON:case l.DASH:case l.EQUALS:case l.COMMA:case l.PERIOD:case l.SLASH:case l.APOSTROPHE:case l.SINGLE_QUOTE:case l.OPEN_SQUARE_BRACKET:case l.BACKSLASH:case l.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};le.Z=l},5245:function(tt,le,l){var d;l.d(le,{s:function(){return V},v:function(){return Te}});var n=l(11092),Z=l(27791),H=l(33940),w=l(50189),y=l(31542),h=(0,w.Z)({},d||(d=l.t(y,2))),a=h.version,v=h.render,P=h.unmountComponentAtNode,q;try{var A=Number((a||"").split(".")[0]);A>=18&&(q=h.createRoot)}catch{}function _(Ce){var ve=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ve&&(0,H.Z)(ve)==="object"&&(ve.usingClientEntryPoint=Ce)}var z="__rc_react_root__";function g(Ce,ve){_(!0);var oe=ve[z]||q(ve);_(!1),oe.render(Ce),ve[z]=oe}function E(Ce,ve){v(Ce,ve)}function F(Ce,ve){}function V(Ce,ve){if(q){g(Ce,ve);return}E(Ce,ve)}function X(Ce){return te.apply(this,arguments)}function te(){return te=(0,Z.Z)((0,n.Z)().mark(function Ce(ve){return(0,n.Z)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",Promise.resolve().then(function(){var we;(we=ve[z])===null||we===void 0||we.unmount(),delete ve[z]}));case 1:case"end":return R.stop()}},Ce)})),te.apply(this,arguments)}function xe(Ce){P(Ce)}function ne(Ce){}function Te(Ce){return Re.apply(this,arguments)}function Re(){return Re=(0,Z.Z)((0,n.Z)().mark(function Ce(ve){return(0,n.Z)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(q===void 0){R.next=2;break}return R.abrupt("return",X(ve));case 2:xe(ve);case 3:case"end":return R.stop()}},Ce)})),Re.apply(this,arguments)}},80408:function(tt,le,l){l.d(le,{Z:function(){return n},o:function(){return H}});var d;function n(w){if(typeof document>"u")return 0;if(w||d===void 0){var y=document.createElement("div");y.style.width="100%",y.style.height="200px";var h=document.createElement("div"),a=h.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",h.appendChild(y),document.body.appendChild(h);var v=y.offsetWidth;h.style.overflow="scroll";var P=y.offsetWidth;v===P&&(P=h.clientWidth),document.body.removeChild(h),d=v-P}return d}function Z(w){var y=w.match(/^(.*)px$/),h=Number(y?.[1]);return Number.isNaN(h)?n():h}function H(w){if(typeof document>"u"||!w||!(w instanceof Element))return{width:0,height:0};var y=getComputedStyle(w,"::-webkit-scrollbar"),h=y.width,a=y.height;return{width:Z(h),height:Z(a)}}},44771:function(tt,le,l){l.d(le,{Z:function(){return n}});var d=l(27378);function n(Z){var H=d.useRef();H.current=Z;var w=d.useCallback(function(){for(var y,h=arguments.length,a=new Array(h),v=0;v<h;v++)a[v]=arguments[v];return(y=H.current)===null||y===void 0?void 0:y.call.apply(y,[H].concat(a))},[]);return w}},63651:function(tt,le,l){var d;l.d(le,{Z:function(){return a}});var n=l(11026),Z=l(50189),H=l(27378);function w(){var v=(0,Z.Z)({},d||(d=l.t(H,2)));return v.useId}var y=0;function h(){}function a(v){var P=H.useState("ssr-id"),q=(0,n.Z)(P,2),A=q[0],_=q[1],z=w(),g=z?.();return H.useEffect(function(){if(!z){var E=y;y+=1,_("rc_unique_".concat(E))}},[]),v||g||A}},99664:function(tt,le,l){l.d(le,{o:function(){return w}});var d=l(27378),n=l(98554),Z=(0,n.Z)()?d.useLayoutEffect:d.useEffect,H=function(h,a){var v=d.useRef(!0);Z(function(){return h(v.current)},a),Z(function(){return v.current=!1,function(){v.current=!0}},[])},w=function(h,a){H(function(v){if(!v)return h()},a)};le.Z=H},8805:function(tt,le,l){l.d(le,{Z:function(){return n}});var d=l(27378);function n(Z,H,w){var y=d.useRef({});return(!("value"in y.current)||w(y.current.condition,H))&&(y.current.value=Z(),y.current.condition=H),y.current.value}},24391:function(tt,le,l){l.d(le,{Z:function(){return y}});var d=l(11026),n=l(44771),Z=l(99664),H=l(87643);function w(h){return h!==void 0}function y(h,a){var v=a||{},P=v.defaultValue,q=v.value,A=v.onChange,_=v.postState,z=(0,H.Z)(function(){return w(q)?q:w(P)?typeof P=="function"?P():P:typeof h=="function"?h():h}),g=(0,d.Z)(z,2),E=g[0],F=g[1],V=q!==void 0?q:E,X=_?_(V):V,te=(0,n.Z)(A),xe=(0,H.Z)([V]),ne=(0,d.Z)(xe,2),Te=ne[0],Re=ne[1];(0,Z.o)(function(){var ve=Te[0];E!==ve&&te(E,ve)},[Te]),(0,Z.o)(function(){w(q)||F(q)},[q]);var Ce=(0,n.Z)(function(ve,oe){F(ve,oe),Re([V],oe)});return[X,Ce]}},87643:function(tt,le,l){l.d(le,{Z:function(){return Z}});var d=l(11026),n=l(27378);function Z(H){var w=n.useRef(!1),y=n.useState(H),h=(0,d.Z)(y,2),a=h[0],v=h[1];n.useEffect(function(){return w.current=!1,function(){w.current=!0}},[]);function P(q,A){A&&w.current||v(q)}return[a,P]}},11815:function(tt,le,l){l.d(le,{C8:function(){return d.Z}});var d=l(24391),n=l(16275),Z=l(74485)},46882:function(tt,le,l){var d=l(33940),n=l(74485);function Z(H,w){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,h=new Set;function a(v,P){var q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=h.has(v);if((0,n.ZP)(!A,"Warning: There may be circular references"),A)return!1;if(v===P)return!0;if(y&&q>1)return!1;h.add(v);var _=q+1;if(Array.isArray(v)){if(!Array.isArray(P)||v.length!==P.length)return!1;for(var z=0;z<v.length;z++)if(!a(v[z],P[z],_))return!1;return!0}if(v&&P&&(0,d.Z)(v)==="object"&&(0,d.Z)(P)==="object"){var g=Object.keys(v);return g.length!==Object.keys(P).length?!1:g.every(function(E){return a(v[E],P[E],_)})}return!1}return a(H,w)}le.Z=Z},42445:function(tt,le,l){l.d(le,{Z:function(){return n}});var d=l(50189);function n(Z,H){var w=(0,d.Z)({},Z);return Array.isArray(H)&&H.forEach(function(y){delete w[y]}),w}},91864:function(tt,le,l){l.d(le,{Z:function(){return a}});var d=l(50189),n=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Z=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,H="".concat(n," ").concat(Z).split(/[\s\n]+/),w="aria-",y="data-";function h(v,P){return v.indexOf(P)===0}function a(v){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,q;P===!1?q={aria:!0,data:!0,attr:!0}:P===!0?q={aria:!0}:q=(0,d.Z)({},P);var A={};return Object.keys(v).forEach(function(_){(q.aria&&(_==="role"||h(_,w))||q.data&&h(_,y)||q.attr&&H.includes(_))&&(A[_]=v[_])}),A}},94068:function(tt,le){var l=function(h){return+setTimeout(h,16)},d=function(h){return clearTimeout(h)};typeof window<"u"&&"requestAnimationFrame"in window&&(l=function(h){return window.requestAnimationFrame(h)},d=function(h){return window.cancelAnimationFrame(h)});var n=0,Z=new Map;function H(y){Z.delete(y)}var w=function(h){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;n+=1;var v=n;function P(q){if(q===0)H(v),h();else{var A=l(function(){P(q-1)});Z.set(v,A)}}return P(a),v};w.cancel=function(y){var h=Z.get(y);return H(h),d(h)},le.Z=w},79986:function(tt,le,l){l.d(le,{Yr:function(){return h},mH:function(){return H},sQ:function(){return w},x1:function(){return y}});var d=l(33940),n=l(11349),Z=l(8805);function H(a,v){typeof a=="function"?a(v):(0,d.Z)(a)==="object"&&a&&"current"in a&&(a.current=v)}function w(){for(var a=arguments.length,v=new Array(a),P=0;P<a;P++)v[P]=arguments[P];var q=v.filter(function(A){return A});return q.length<=1?q[0]:function(A){v.forEach(function(_){H(_,A)})}}function y(){for(var a=arguments.length,v=new Array(a),P=0;P<a;P++)v[P]=arguments[P];return(0,Z.Z)(function(){return w.apply(void 0,v)},v,function(q,A){return q.length===A.length&&q.every(function(_,z){return _===A[z]})})}function h(a){var v,P,q=(0,n.isMemo)(a)?a.type.type:a.type;return!(typeof q=="function"&&!((v=q.prototype)!==null&&v!==void 0&&v.render)||typeof a=="function"&&!((P=a.prototype)!==null&&P!==void 0&&P.render))}},2833:function(tt,le,l){l.d(le,{Z:function(){return d}});function d(n,Z){for(var H=n,w=0;w<Z.length;w+=1){if(H==null)return;H=H[Z[w]]}return H}},16275:function(tt,le,l){l.d(le,{T:function(){return q},Z:function(){return h}});var d=l(33940),n=l(50189),Z=l(649),H=l(62173),w=l(2833);function y(A,_,z,g){if(!_.length)return z;var E=(0,H.Z)(_),F=E[0],V=E.slice(1),X;return!A&&typeof F=="number"?X=[]:Array.isArray(A)?X=(0,Z.Z)(A):X=(0,n.Z)({},A),g&&z===void 0&&V.length===1?delete X[F][V[0]]:X[F]=y(X[F],V,z,g),X}function h(A,_,z){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return _.length&&g&&z===void 0&&!(0,w.Z)(A,_.slice(0,-1))?A:y(A,_,z,g)}function a(A){return(0,d.Z)(A)==="object"&&A!==null&&Object.getPrototypeOf(A)===Object.prototype}function v(A){return Array.isArray(A)?[]:{}}var P=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function q(){for(var A=arguments.length,_=new Array(A),z=0;z<A;z++)_[z]=arguments[z];var g=v(_[0]);return _.forEach(function(E){function F(V,X){var te=new Set(X),xe=(0,w.Z)(E,V),ne=Array.isArray(xe);if(ne||a(xe)){if(!te.has(xe)){te.add(xe);var Te=(0,w.Z)(g,V);ne?g=h(g,V,[]):(!Te||(0,d.Z)(Te)!=="object")&&(g=h(g,V,v(xe))),P(xe).forEach(function(Re){F([].concat((0,Z.Z)(V),[Re]),te)})}}else g=h(g,V,xe)}F([])}),g}},74485:function(tt,le,l){l.d(le,{ET:function(){return v},Kp:function(){return H}});var d={},n=[],Z=function(q){n.push(q)};function H(P,q){if(!1)var A}function w(P,q){if(!1)var A}function y(){d={}}function h(P,q,A){!q&&!d[A]&&(P(!1,A),d[A]=!0)}function a(P,q){h(H,P,q)}function v(P,q){h(w,P,q)}a.preMessage=Z,a.resetWarned=y,a.noteOnce=v,le.ZP=a},96232:function(tt,le){var l;var d=typeof Symbol=="function"&&Symbol.for,n=d?Symbol.for("react.element"):60103,Z=d?Symbol.for("react.portal"):60106,H=d?Symbol.for("react.fragment"):60107,w=d?Symbol.for("react.strict_mode"):60108,y=d?Symbol.for("react.profiler"):60114,h=d?Symbol.for("react.provider"):60109,a=d?Symbol.for("react.context"):60110,v=d?Symbol.for("react.async_mode"):60111,P=d?Symbol.for("react.concurrent_mode"):60111,q=d?Symbol.for("react.forward_ref"):60112,A=d?Symbol.for("react.suspense"):60113,_=d?Symbol.for("react.suspense_list"):60120,z=d?Symbol.for("react.memo"):60115,g=d?Symbol.for("react.lazy"):60116,E=d?Symbol.for("react.block"):60121,F=d?Symbol.for("react.fundamental"):60117,V=d?Symbol.for("react.responder"):60118,X=d?Symbol.for("react.scope"):60119;function te(ne){if(typeof ne=="object"&&ne!==null){var Te=ne.$$typeof;switch(Te){case n:switch(ne=ne.type,ne){case v:case P:case H:case y:case w:case A:return ne;default:switch(ne=ne&&ne.$$typeof,ne){case a:case q:case g:case z:case h:return ne;default:return Te}}case Z:return Te}}}function xe(ne){return te(ne)===P}l=v,l=P,l=a,l=h,l=n,l=q,l=H,l=g,l=z,l=Z,l=y,l=w,l=A,l=function(ne){return xe(ne)||te(ne)===v},l=xe,l=function(ne){return te(ne)===a},l=function(ne){return te(ne)===h},l=function(ne){return typeof ne=="object"&&ne!==null&&ne.$$typeof===n},l=function(ne){return te(ne)===q},le.isFragment=function(ne){return te(ne)===H},l=function(ne){return te(ne)===g},le.isMemo=function(ne){return te(ne)===z},l=function(ne){return te(ne)===Z},l=function(ne){return te(ne)===y},l=function(ne){return te(ne)===w},l=function(ne){return te(ne)===A},l=function(ne){return typeof ne=="string"||typeof ne=="function"||ne===H||ne===P||ne===y||ne===w||ne===A||ne===_||typeof ne=="object"&&ne!==null&&(ne.$$typeof===g||ne.$$typeof===z||ne.$$typeof===h||ne.$$typeof===a||ne.$$typeof===q||ne.$$typeof===F||ne.$$typeof===V||ne.$$typeof===X||ne.$$typeof===E)},l=te},11349:function(tt,le,l){tt.exports=l(96232)},73323:function(tt,le){function l(ye,J){var Pe=ye.length;ye.push(J);e:for(;0<Pe;){var m=Pe-1>>>1,ae=ye[m];if(0<Z(ae,J))ye[m]=J,ye[Pe]=ae,Pe=m;else break e}}function d(ye){return ye.length===0?null:ye[0]}function n(ye){if(ye.length===0)return null;var J=ye[0],Pe=ye.pop();if(Pe!==J){ye[0]=Pe;e:for(var m=0,ae=ye.length,S=ae>>>1;m<S;){var ue=2*(m+1)-1,ie=ye[ue],Q=ue+1,se=ye[Q];if(0>Z(ie,Pe))Q<ae&&0>Z(se,ie)?(ye[m]=se,ye[Q]=Pe,m=Q):(ye[m]=ie,ye[ue]=Pe,m=ue);else if(Q<ae&&0>Z(se,Pe))ye[m]=se,ye[Q]=Pe,m=Q;else break e}}return J}function Z(ye,J){var Pe=ye.sortIndex-J.sortIndex;return Pe!==0?Pe:ye.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var H=performance;le.unstable_now=function(){return H.now()}}else{var w=Date,y=w.now();le.unstable_now=function(){return w.now()-y}}var h=[],a=[],v=1,P=null,q=3,A=!1,_=!1,z=!1,g=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(ye){for(var J=d(a);J!==null;){if(J.callback===null)n(a);else if(J.startTime<=ye)n(a),J.sortIndex=J.expirationTime,l(h,J);else break;J=d(a)}}function X(ye){if(z=!1,V(ye),!_)if(d(h)!==null)_=!0,Xe(te);else{var J=d(a);J!==null&&it(X,J.startTime-ye)}}function te(ye,J){_=!1,z&&(z=!1,E(Te),Te=-1),A=!0;var Pe=q;try{for(V(J),P=d(h);P!==null&&(!(P.expirationTime>J)||ye&&!ve());){var m=P.callback;if(typeof m=="function"){P.callback=null,q=P.priorityLevel;var ae=m(P.expirationTime<=J);J=le.unstable_now(),typeof ae=="function"?P.callback=ae:P===d(h)&&n(h),V(J)}else n(h);P=d(h)}if(P!==null)var S=!0;else{var ue=d(a);ue!==null&&it(X,ue.startTime-J),S=!1}return S}finally{P=null,q=Pe,A=!1}}var xe=!1,ne=null,Te=-1,Re=5,Ce=-1;function ve(){return!(le.unstable_now()-Ce<Re)}function oe(){if(ne!==null){var ye=le.unstable_now();Ce=ye;var J=!0;try{J=ne(!0,ye)}finally{J?R():(xe=!1,ne=null)}}else xe=!1}var R;if(typeof F=="function")R=function(){F(oe)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Ve=we.port2;we.port1.onmessage=oe,R=function(){Ve.postMessage(null)}}else R=function(){g(oe,0)};function Xe(ye){ne=ye,xe||(xe=!0,R())}function it(ye,J){Te=g(function(){ye(le.unstable_now())},J)}le.unstable_IdlePriority=5,le.unstable_ImmediatePriority=1,le.unstable_LowPriority=4,le.unstable_NormalPriority=3,le.unstable_Profiling=null,le.unstable_UserBlockingPriority=2,le.unstable_cancelCallback=function(ye){ye.callback=null},le.unstable_continueExecution=function(){_||A||(_=!0,Xe(te))},le.unstable_forceFrameRate=function(ye){0>ye||125<ye?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<ye?Math.floor(1e3/ye):5},le.unstable_getCurrentPriorityLevel=function(){return q},le.unstable_getFirstCallbackNode=function(){return d(h)},le.unstable_next=function(ye){switch(q){case 1:case 2:case 3:var J=3;break;default:J=q}var Pe=q;q=J;try{return ye()}finally{q=Pe}},le.unstable_pauseExecution=function(){},le.unstable_requestPaint=function(){},le.unstable_runWithPriority=function(ye,J){switch(ye){case 1:case 2:case 3:case 4:case 5:break;default:ye=3}var Pe=q;q=ye;try{return J()}finally{q=Pe}},le.unstable_scheduleCallback=function(ye,J,Pe){var m=le.unstable_now();switch(typeof Pe=="object"&&Pe!==null?(Pe=Pe.delay,Pe=typeof Pe=="number"&&0<Pe?m+Pe:m):Pe=m,ye){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Pe+ae,ye={id:v++,callback:J,priorityLevel:ye,startTime:Pe,expirationTime:ae,sortIndex:-1},Pe>m?(ye.sortIndex=Pe,l(a,ye),d(h)===null&&ye===d(a)&&(z?(E(Te),Te=-1):z=!0,it(X,Pe-m))):(ye.sortIndex=ae,l(h,ye),_||A||(_=!0,Xe(te))),ye},le.unstable_shouldYield=ve,le.unstable_wrapCallback=function(ye){var J=q;return function(){var Pe=q;q=J;try{return ye.apply(this,arguments)}finally{q=Pe}}}},91102:function(tt,le,l){tt.exports=l(73323)},74335:function(tt,le,l){var d;l.d(le,{$j:function(){return oe},AN:function(){return X},BQ:function(){return xe},GK:function(){return R},Hn:function(){return E},JX:function(){return q},PC:function(){return a},SV:function(){return g},Ud:function(){return _},V7:function(){return V},X2:function(){return ve},dy:function(){return A},h_:function(){return Ce},mH:function(){return z},pC:function(){return it},rj:function(){return F},s_:function(){return Re},u_:function(){return Te},zd:function(){return te}});var n=l(27378),Z=l(31542),H={269:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`/*@height:2px;
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
`,""]),he.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const Fe=he},528:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.kLIGi {
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
`,""]),he.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const Fe=he},434:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`@keyframes animate-drawer-right-in {
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
`,""]),he.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const Fe=he},503:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`@keyframes animate-drop-in {
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
`,""]),he.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const Fe=he},556:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.huxy-doc-frame {
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
`,""]),he.locals={};const Fe=he},548:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`@keyframes animate-modal-in {
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
`,""]),he.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const Fe=he},232:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.clear::after {
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
`,""]),he.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const Fe=he},249:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.cols-1 {
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
`,""]),he.locals={};const Fe=he},990:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`@keyframes before {
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
`,""]),he.locals={};const Fe=he},575:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.clear::after {
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
`,""]),he.locals={};const Fe=he},918:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.ofth_ {
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
`,""]),he.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const Fe=he},942:(m,ae,S)=>{S.d(ae,{Z:()=>Fe});var ue=S(601),ie=S.n(ue),Q=S(609),se=S.n(Q),he=se()(ie());he.push([m.id,`.node-right-icon-close {
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
`,""]),he.locals={};const Fe=he},609:m=>{m.exports=function(ae){var S=[];return S.toString=function(){return this.map(function(ue){var ie="",Q=typeof ue[5]<"u";return ue[4]&&(ie+="@supports (".concat(ue[4],") {")),ue[2]&&(ie+="@media ".concat(ue[2]," {")),Q&&(ie+="@layer".concat(ue[5].length>0?" ".concat(ue[5]):""," {")),ie+=ae(ue),Q&&(ie+="}"),ue[2]&&(ie+="}"),ue[4]&&(ie+="}"),ie}).join("")},S.i=function(ue,ie,Q,se,he){typeof ue=="string"&&(ue=[[null,ue,void 0]]);var Fe={};if(Q)for(var We=0;We<this.length;We++){var et=this[We][0];et!=null&&(Fe[et]=!0)}for(var Je=0;Je<ue.length;Je++){var Ze=[].concat(ue[Je]);Q&&Fe[Ze[0]]||(typeof he<"u"&&(typeof Ze[5]>"u"||(Ze[1]="@layer".concat(Ze[5].length>0?" ".concat(Ze[5]):""," {").concat(Ze[1],"}")),Ze[5]=he),ie&&(Ze[2]&&(Ze[1]="@media ".concat(Ze[2]," {").concat(Ze[1],"}")),Ze[2]=ie),se&&(Ze[4]?(Ze[1]="@supports (".concat(Ze[4],") {").concat(Ze[1],"}"),Ze[4]=se):Ze[4]="".concat(se)),S.push(Ze))}},S}},601:m=>{m.exports=function(ae){return ae[1]}},837:(m,ae,S)=>{var ue=S(810),ie=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),se=Object.prototype.hasOwnProperty,he=ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fe={key:!0,ref:!0,__self:!0,__source:!0};function We(et,Je,Ze){var Ie,ct={},pt=null,rt=null;Ze!==void 0&&(pt=""+Ze),Je.key!==void 0&&(pt=""+Je.key),Je.ref!==void 0&&(rt=Je.ref);for(Ie in Je)se.call(Je,Ie)&&!Fe.hasOwnProperty(Ie)&&(ct[Ie]=Je[Ie]);if(et&&et.defaultProps)for(Ie in Je=et.defaultProps,Je)ct[Ie]===void 0&&(ct[Ie]=Je[Ie]);return{$$typeof:ie,type:et,key:pt,ref:rt,props:ct,_owner:he.current}}ae.Fragment=Q,ae.jsx=We,ae.jsxs=We},322:(m,ae,S)=>{m.exports=S(837)},62:m=>{var ae=[];function S(Q){for(var se=-1,he=0;he<ae.length;he++)if(ae[he].identifier===Q){se=he;break}return se}function ue(Q,se){for(var he={},Fe=[],We=0;We<Q.length;We++){var et=Q[We],Je=se.base?et[0]+se.base:et[0],Ze=he[Je]||0,Ie="".concat(Je," ").concat(Ze);he[Je]=Ze+1;var ct=S(Ie),pt={css:et[1],media:et[2],sourceMap:et[3],supports:et[4],layer:et[5]};if(ct!==-1)ae[ct].references++,ae[ct].updater(pt);else{var rt=ie(pt,se);se.byIndex=We,ae.splice(We,0,{identifier:Ie,updater:rt,references:1})}Fe.push(Ie)}return Fe}function ie(Q,se){var he=se.domAPI(se);he.update(Q);var Fe=function(We){if(We){if(We.css===Q.css&&We.media===Q.media&&We.sourceMap===Q.sourceMap&&We.supports===Q.supports&&We.layer===Q.layer)return;he.update(Q=We)}else he.remove()};return Fe}m.exports=function(Q,se){se=se||{},Q=Q||[];var he=ue(Q,se);return function(Fe){Fe=Fe||[];for(var We=0;We<he.length;We++){var et=he[We],Je=S(et);ae[Je].references--}for(var Ze=ue(Fe,se),Ie=0;Ie<he.length;Ie++){var ct=he[Ie],pt=S(ct);ae[pt].references===0&&(ae[pt].updater(),ae.splice(pt,1))}he=Ze}}},793:m=>{var ae={};function S(ie){if(typeof ae[ie]>"u"){var Q=document.querySelector(ie);if(window.HTMLIFrameElement&&Q instanceof window.HTMLIFrameElement)try{Q=Q.contentDocument.head}catch{Q=null}ae[ie]=Q}return ae[ie]}function ue(ie,Q){var se=S(ie);if(!se)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");se.appendChild(Q)}m.exports=ue},173:m=>{function ae(S){var ue=document.createElement("style");return S.setAttributes(ue,S.attributes),S.insert(ue,S.options),ue}m.exports=ae},892:(m,ae,S)=>{function ue(ie){var Q=S.nc;Q&&ie.setAttribute("nonce",Q)}m.exports=ue},36:m=>{function ae(ie,Q,se){var he="";se.supports&&(he+="@supports (".concat(se.supports,") {")),se.media&&(he+="@media ".concat(se.media," {"));var Fe=typeof se.layer<"u";Fe&&(he+="@layer".concat(se.layer.length>0?" ".concat(se.layer):""," {")),he+=se.css,Fe&&(he+="}"),se.media&&(he+="}"),se.supports&&(he+="}");var We=se.sourceMap;We&&typeof btoa<"u"&&(he+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(We))))," */")),Q.styleTagTransform(he,ie,Q.options)}function S(ie){if(ie.parentNode===null)return!1;ie.parentNode.removeChild(ie)}function ue(ie){if(typeof document>"u")return{update:function(){},remove:function(){}};var Q=ie.insertStyleElement(ie);return{update:function(se){ae(Q,ie,se)},remove:function(){S(Q)}}}m.exports=ue},464:m=>{function ae(S,ue){if(ue.styleSheet)ue.styleSheet.cssText=S;else{for(;ue.firstChild;)ue.removeChild(ue.firstChild);ue.appendChild(document.createTextNode(S))}}m.exports=ae},810:m=>{var ae=ue=>{var ie={};return y.d(ie,ue),ie},S=ue=>()=>ue;m.exports=d||(d=l.t(n,2))}},w={};function y(m){var ae=w[m];if(ae!==void 0)return ae.exports;var S=w[m]={id:m,exports:{}};return H[m](S,S.exports,y),S.exports}y.n=m=>{var ae=m&&m.__esModule?()=>m.default:()=>m;return y.d(ae,{a:ae}),ae},y.d=(m,ae)=>{for(var S in ae)y.o(ae,S)&&!y.o(m,S)&&Object.defineProperty(m,S,{enumerable:!0,get:ae[S]})},y.o=(m,ae)=>Object.prototype.hasOwnProperty.call(m,ae),y.nc=void 0;var h={};(()=>{y.d(h,{PC:()=>Pt,rK:()=>Vt,lr:()=>N,JX:()=>x,dy:()=>$,Ud:()=>j,mH:()=>ht,SV:()=>Ct,Hn:()=>xr,rj:()=>zr,V7:()=>Sr,AN:()=>or,zd:()=>Se,BQ:()=>Br,Ur:()=>rn,u_:()=>nn,s_:()=>gn,h_:()=>ce,X2:()=>mr,$j:()=>en,GK:()=>Bn,u:()=>He,mp:()=>Gn,C2:()=>St,pC:()=>ft,ff:()=>fn,d2:()=>Ir,Uw:()=>Wn});var m=y(322),ae=y(62),S=y.n(ae),ue=y(36),ie=y.n(ue),Q=y(793),se=y.n(Q),he=y(892),Fe=y.n(he),We=y(173),et=y.n(We),Je=y(464),Ze=y.n(Je),Ie=y(269),ct={};ct.styleTagTransform=Ze(),ct.setAttributes=Fe(),ct.insert=se().bind(null,"head"),ct.domAPI=ie(),ct.insertStyleElement=et();var pt=S()(Ie.Z,ct);const rt=Ie.Z&&Ie.Z.locals?Ie.Z.locals:void 0,Pt=s=>(0,m.jsx)("span",{className:rt.anico,children:(0,m.jsx)("span",{className:[rt.hline,...(s.type||"").split(" ").map(p=>rt[p]).filter(Boolean)].join(" ")})});var ke=y(810);const At=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s),kt=s=>new Promise((p,k)=>{const L=new FileReader;L.readAsDataURL(s),L.addEventListener("load",()=>p(L.result)),L.addEventListener("error",fe=>k(fe))}),lt=async s=>{if(!At(s))return s;const p=await(await fetch(decodeURIComponent(s))).blob();return await kt(p)},$t=s=>{const[p,k]=(0,ke.useState)(s);return(0,ke.useEffect)(()=>{(async L=>{const fe=await lt(L);k(fe)})(s)},[s]),p},Vt=({src:s,...p})=>{const k=$t(s);return(0,m.jsx)("img",{...p,src:k})};var tr=s=>{var p={};return y.d(p,s),p},Zt=s=>()=>s;const zt=tr({createPortal:()=>Z.createPortal,flushSync:()=>Z.flushSync}),Jt=(s,p)=>{const k=(0,ke.useRef)();(0,ke.useEffect)(()=>{k.current=s},[s]),(0,ke.useEffect)(()=>{if(p){const L=setInterval(()=>k.current(),p);return()=>clearInterval(L)}},[p])},Dt=()=>![typeof window,typeof document].includes("undefined"),Wt=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),Bt=s=>Wt(s).indexOf("element")>-1,Tt=(s=null)=>Dt()?Bt(s)?{width:s.clientWidth,height:s.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},qt=(s=()=>{},p=60)=>{let k=null;return function(...L){clearTimeout(k),k=setTimeout(()=>s.apply(this,L),p)}},Ht=(s,p)=>Object.prototype.hasOwnProperty.call(s??{},p),Lt=s=>Ht(s,"current"),rr=(s,p)=>{const k=[],L=s.children??[];for(let fe=0,pe=L.length;fe<pe;fe++){const Ee=L[fe];Ee.className.indexOf(p)>-1&&k.push(Ee)}return k.length===0?null:k.length===1?k[0]:k},er=(s,p)=>{getComputedStyle(s).position==="static"&&(s.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",p,!1),p()},k.type="text/html",s.appendChild(k),k.data="about:blank",k},ar=(s,p=60)=>{if(!Dt())return;s=Lt(s)?s.current:s??document.body;let k=rr(s,"resize-sensor"),L=[];const fe=qt(()=>L.map(Ke=>Ke(s)),p),pe=Ke=>{rr(s,"resize-sensor")||(k=er(s,fe)),L.indexOf(Ke)===-1&&L.push(Ke)},Ee=Ke=>{const ot=L.indexOf(Ke);ot!==-1&&L.splice(ot,1),L.length===0&&k&&je()},je=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",fe,!1),k.parentNode.removeChild(k),k=void 0,L=[])};return{element:s,bind:pe,unbind:Ee,destroy:je}},Oe=(s={})=>{const p=(0,ke.useRef)(0),[k,L]=(0,ke.useState)(s),fe=(0,ke.useCallback)(pe=>{cancelAnimationFrame(p.current),p.current=requestAnimationFrame(()=>L(pe))},[]);return(0,ke.useEffect)(()=>()=>cancelAnimationFrame(p.current),[]),[k,fe]},$e=(s=null,p=60)=>{const k=Lt(s)?s.current:s,{bind:L,destroy:fe}=ar(k,p),[pe,Ee]=Oe(Tt(k));return(0,ke.useEffect)(()=>(L(()=>k&&Ee(Tt(k))),()=>fe()),[k]),pe};var Ye=y(528),Ue={};Ue.styleTagTransform=Ze(),Ue.setAttributes=Fe(),Ue.insert=se().bind(null,"head"),Ue.domAPI=ie(),Ue.insertStyleElement=et();var me=S()(Ye.Z,Ue);const T=Ye.Z&&Ye.Z.locals?Ye.Z.locals:void 0,N=({children:s,active:p=0,delay:k=5e3,className:L,...fe})=>{const[pe,Ee]=(0,ke.useState)(p+1),[je,Ke]=(0,ke.useState)(!1),ot=(0,ke.useRef)(),bt=(0,ke.useRef)(""),{width:yt}=$e(ot);s=Array.isArray(s)?s:[s];const gt=s[0],It=[s[s.length-1],...s,gt],jt=It.length;Jt(()=>{let Ot=pe+1;Ot=Ot===jt?1:Ot,bt.current&&(bt.current=""),Ee(Ot),Ot===jt-1&&setTimeout(()=>{bt.current="none",Ee(1)},500)},je?null:k);const Rt=(Ot,Yt)=>{Yt.stopPropagation(),bt.current="",Ee(Ot),(0,zt.flushSync)(()=>Ke(!0)),Ke(!1)},Mt={width:`${jt*yt}px`,transform:`translateX(${-yt*pe}px)`,transition:bt.current};return(0,m.jsxs)("div",{className:`${T["huxy-carousel"]}${L?` ${L}`:""}`,...fe,ref:ot,children:[(0,m.jsx)("div",{className:T["huxy-carousel-wrap"],style:Mt,children:It.map((Ot,Yt)=>(0,m.jsx)("div",{className:`${T["carousel-item"]} ${pe===Yt?T.active:""}`,style:{width:`${yt}px`},children:Ot},`huxy-carousel-${Yt}`))}),(0,m.jsx)("div",{className:T["carousel-switch"],children:s.map((Ot,Yt)=>(0,m.jsx)("span",{className:`${T.dot} ${pe===Yt+1?T.active:""}`,onClick:fr=>Rt(Yt+1,fr)},`huxy-carousel-switch-${Yt}`))})]})},c=(s,p)=>{let k="",L="";if(typeof p=="number"&&(k=`col-${s}-${p}`),typeof p=="object"){const{span:fe,offset:pe}=p;k=fe?`col-${s}-${fe}`:"",L=pe?`offset-${s}-${pe}`:""}return{sp:k,os:L}},x=(0,ke.forwardRef)(({span:s,offset:p,xl:k,lg:L,md:fe,sm:pe,xs:Ee,style:je,width:Ke,auto:ot,offsetWidth:bt="0px",className:yt,...gt},It)=>{const jt=yt?` ${yt}`:"",Rt=`col-${s||12}`,Mt=p?`offset-${p}`:"",{sp:Ot,os:Yt}=c("xs",Ee),{sp:fr,os:wr}=c("sm",pe),{sp:Er,os:ir}=c("md",fe),{sp:kr,os:_r}=c("lg",L),{sp:Ar,os:dr}=c("xl",k),Vr=[Rt,Ar,kr,Er,fr,Ot,Mt,dr,_r,ir,wr,Yt].filter(Boolean).join(" "),Dr=ot?{width:"auto",flex:1,maxWidth:`calc(100% - ${bt})`}:{width:Ke};return(0,m.jsx)("div",{className:`${Vr}${jt}`,...gt,style:{...Dr,...je},ref:It})}),i=()=>{const s=(0,ke.useRef)(!0);return s.current?(s.current=!1,!0):!1},D=(s,p=[])=>{const k=i();(0,ke.useEffect)(()=>{if(!k)return s()},p)},B=(s,p=450)=>{const[k,L]=(0,ke.useState)(s);return D(()=>{let fe;return s||p===0?L(s):fe=setTimeout(()=>L(s),p),()=>fe&&clearTimeout(fe)},[s]),[k,L]},ce=({children:s,mountNode:p=document.body})=>(0,zt.createPortal)(s,p),G={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},ee={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},K=document.body,Se=({open:s,close:p,delay:k=300,children:L,mountNode:fe,hasMask:pe=!0,style:Ee,className:je="h-mask",relative:Ke})=>{const[ot]=B(s,k);(fe??K).style.overflow=ot?"hidden":"";const bt=Ke?"absolute":"fixed";return(0,m.jsx)(ce,{mountNode:fe,children:(0,m.jsx)("div",{children:ot?(0,m.jsxs)("div",{className:je,style:{...G,position:bt},children:[pe?(0,m.jsx)("div",{style:{...ee,position:bt},onClick:yt=>p?.(yt)}):null,ke.Children.map(L,yt=>(0,ke.isValidElement)(yt)?(0,ke.cloneElement)(yt,{style:{position:"relative",zIndex:100001,...yt.props.style}}):yt)]}):null})})};var f=y(434),O={};O.styleTagTransform=Ze(),O.setAttributes=Fe(),O.insert=se().bind(null,"head"),O.domAPI=ie(),O.insertStyleElement=et();var M=S()(f.Z,O);const I=f.Z&&f.Z.locals?f.Z.locals:void 0,$=({open:s,close:p,footer:k,header:L,className:fe,style:pe,children:Ee,width:je="300px",mountNode:Ke,position:ot="right",relative:bt})=>{const yt=["drawer-wrap",ot,s?"open":"",...fe?.split(" ")??[]].filter(Boolean).map(gt=>I[gt]).join(" ");return(0,m.jsx)(Se,{open:s,close:p,delay:250,hasMask:!0,relative:bt,mountNode:Ke,className:"huxy-drawer",children:(0,m.jsx)("div",{className:yt,style:{width:je,position:bt?"absolute":"fixed","--footerHeight":k?"44px":"0px","--headerHeight":L?"44px":"0px",...pe},children:(0,m.jsxs)("div",{className:I["drawer-container"],children:[L?(0,m.jsxs)("div",{className:I["drawer-header"],children:[ot==="right"?(0,m.jsx)("span",{className:`link ${I["ico-close"]}`,onClick:gt=>p?.(gt)}):null,(0,m.jsx)("div",{children:L}),ot==="left"?(0,m.jsx)("span",{className:`link ${I["ico-close"]}`,onClick:gt=>p?.(gt)}):null]}):null,(0,m.jsx)("div",{className:I["drawer-content"],children:Ee}),k?(0,m.jsx)("div",{className:I["drawer-footer"],children:k}):null]})})})},de=(s,p,k="click")=>{(0,ke.useEffect)(()=>{const L=pe=>{const Ee=Lt(s)?s.current:s;Ee?.contains&&!Ee.contains(pe.target)&&p(pe)},fe=typeof k=="string"?[k]:k;return fe.map(pe=>{document.addEventListener(pe,L,!1)}),()=>{fe.map(pe=>{document.removeEventListener(pe,L,!1)})}},[s,p,k])},be=s=>s?.$$typeof&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",Ae=(s="")=>s.replace(/^\S/,p=>p.toUpperCase()),_e=s=>{if(Dt())return s=Lt(s)?s.current:s??document.body,s.getBoundingClientRect?.()},Ge=s=>{if(!Dt())return;const p=document.createElement("div");return p.innerHTML=s,p.children[0]},ze=(s,p={},k=!1)=>{if(Bt(s)){if(k){let L="";Object.keys(p).map(fe=>{L+=`${fe}: ${p[fe]};`}),s.style=L;return}Object.keys(p).map(L=>s.style.setProperty(L,p[L]))}},st=(s=350)=>new Promise(p=>setTimeout(p,s)),vt=(s=100)=>{const p=Date.now();for(;Date.now()-p<=s;);},ut=st,Qe=async(s,p=15)=>{if(!Dt())return;if(typeof s=="string"&&(s=Ge(s)),s=Lt(s)?s.current:s,!Bt(s))return{};const k=s.cloneNode(!0);ze(k,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),s.parentNode.appendChild(k),await ut(p);const L=_e(k);return s.parentNode.removeChild(k),L},wt=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Et=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,_t=(s,p)=>{p=`huxy-drop-arrow-${p}`;const k=s.getAttribute("class")??"";wt.test(k)?s.setAttribute("class",k.replace(Et,p)):s.setAttribute("class",`${k} ${p}`)},Nt=async(s,p,k)=>{const{left:L,right:fe,top:pe,bottom:Ee}=_e(s),{width:je,height:Ke}=Tt(),{width:ot,height:bt}=await Qe(p);if(fe<0||Ee<0||L>je||pe>Ke)return{};if(k==="vertical"){const yt={left:L+"px",top:Ee+10+"px",right:"auto",bottom:"auto"};let gt="lt";L+ot>je&&(yt.left=fe-ot+"px",gt="rt"),Ee+10+bt>Ke&&(yt.top=pe-10-bt+"px",gt=gt==="lt"?"lb":"rb"),ze(p,yt),_t(p,gt)}else{const yt={left:fe+10+"px",top:pe+"px",right:"auto",bottom:"auto"};let gt="tl";fe+10+ot>je&&(yt.left=L-10-ot+"px",gt="tr"),pe+bt>Ke&&(yt.top=Ee-bt+"px",gt=gt==="tl"?"bl":"br"),ze(p,yt),_t(p,gt)}},Qt=(s,p,k="horizontal")=>{const L=qt(Nt),fe=()=>L(s,p,k);window.addEventListener("scroll",fe,!1),window.addEventListener("resize",fe,!1);const pe=()=>{window.removeEventListener("scroll",fe),window.removeEventListener("resize",fe),ze(p,{left:"",top:"",right:"",bottom:""})};return Nt(s,p,k),pe},vr=({open:s,delay:p=280,children:k,mountNode:L,style:fe,...pe})=>{const[Ee]=B(s,p);return(0,m.jsx)(ce,{mountNode:L,children:(0,m.jsx)("div",{children:(0,m.jsx)("div",{style:{...fe,display:Ee?"block":"none"},...pe,children:k})})})};var sr=y(503),nr={};nr.styleTagTransform=Ze(),nr.setAttributes=Fe(),nr.insert=se().bind(null,"head"),nr.domAPI=ie(),nr.insertStyleElement=et();var Cr=S()(sr.Z,nr);const b=sr.Z&&sr.Z.locals?sr.Z.locals:void 0,j=({trigger:s="click",type:p,dropList:k,className:L,children:fe,targetProps:pe,...Ee})=>{const[je,Ke]=(0,ke.useState)(!1),ot=(0,ke.useRef)(),bt=(0,ke.useRef)(),yt=(0,ke.useRef)();de(ot,Mt=>je&&Ke(!1),[...new Set(["click",s.toLowerCase()])]),(0,ke.useEffect)(()=>()=>yt.current?.(),[]);const gt=Mt=>{Mt.preventDefault(),Ke(!0),yt.current=Qt(ot.current,bt.current,p)},It={[`on${Ae(s)}`]:gt},jt=["drop-wrap",je?"open":"",L].filter(Boolean).map(Mt=>b[Mt]).join(" "),Rt=be(k)?k:k?.(()=>Ke(!1),je);return(0,m.jsxs)("span",{ref:ot,className:b["drop-target"],...pe,...It,children:[fe,(0,m.jsx)(vr,{open:je,className:"huxy-drop",children:(0,m.jsx)("div",{ref:bt,className:jt,...Ee,children:Rt})})]})},re=(s,p,k)=>{if(!Dt())return;k=Lt(k)?k.current:k??document.body;const L=document.createElement("span");L.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),p&&ze(L,p),L.innerText=(s??"").replace(/[\r\n]/g,""),k.appendChild(L);const fe=L.getBoundingClientRect();return k.removeChild(L),fe};var Y=y(918),U={};U.styleTagTransform=Ze(),U.setAttributes=Fe(),U.insert=se().bind(null,"head"),U.domAPI=ie(),U.insertStyleElement=et();var Ne=S()(Y.Z,U);const Be=Y.Z&&Y.Z.locals?Y.Z.locals:void 0,He=({title:s,placement:p="topRight",children:k,ellipsis:L,className:fe,...pe})=>(0,m.jsx)("span",{className:`${Be[`huxy-tooltip-${p}`]}${fe?` ${fe}`:""}`,tooltip:s??k,...pe,children:(0,m.jsx)("span",{className:L?Be.ellipsis:"",children:k})}),Le={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},De=s=>{const{children:p,style:k}=s,L=typeof p=="string",fe=L?p:p?.props?.title??p?.props?.children,pe=(0,ke.useRef)(),[Ee,je]=(0,ke.useState)(!0);return(0,ke.useEffect)(()=>{if(pe.current){const{width:Ke}=re(fe,null,pe.current.parentNode),{width:ot}=_e(pe.current),bt=~~Ke>~~ot;bt!==Ee&&je(bt)}},[fe]),(0,m.jsx)("span",{ref:pe,style:{display:"flex",width:"100%",...k},children:Ee?L?(0,m.jsx)(He,{...s,ellipsis:!0}):(0,m.jsx)("span",{style:Le,children:p}):L?p:p?.props?.children})},ht=s=>s.children==null?"":(0,m.jsx)(De,{...s});class Ct extends ke.default.Component{state={error:null};static getDerivedStateFromError(p){return{error:p}}componentDidCatch(p,k){const{errorReport:L}=this.props;typeof L=="function"&&L({error:p,info:k.componentStack})}render(){const{error:p}=this.state,{fallback:k,children:L}=this.props;return p?k(p):L}}const St=s=>p=>{if(typeof p=="function"||typeof p?.render=="function")return(0,m.jsx)(p,{});if(typeof p=="string"){const k=s?.[p];return k?(0,m.jsx)(k,{}):(0,m.jsx)("i",{className:p})}return p??null},xt=s=>St(s),ft=s=>({icon:p,defaultIcon:k})=>p?xt(s)(p):p===!1?null:k,mt=["","webkit","moz","ms"],qe=s=>mt.map(p=>p?`${p}FullscreenElement`:"fullscreenElement").find(p=>s[p]),nt=s=>mt.map(p=>p?`${p}RequestFullscreen`:"requestFullscreen").find(p=>s[p]),Ft=s=>mt.map(p=>p?`${p}ExitFullscreen`:"exitFullscreen").find(p=>s[p]),Ut=mt.map(s=>`${s}fullscreenchange`),Kt=s=>{if(!Dt())return;s=Lt(s)?s.current:s??document.body;const p=qe(document),k=nt(s),L=Ft(document);document[p]?document[L]?.():s[k]?.()},ur=s=>Dt()?(Ut.map(p=>document.addEventListener(p,s,!1)),()=>Ut.map(p=>document.removeEventListener(p,s,!1))):void 0,hr=s=>(0,m.jsx)("i",{...s,children:"..."}),xr=({panel:s,fullIcon:p=hr,exitIcon:k=hr,...L})=>{const fe=Lt(s)?s.current:s,[pe,Ee]=(0,ke.useState)();(0,ke.useEffect)(()=>{const Ke=ur(()=>{Ee(ot=>!ot)});return()=>Ke()},[]);const je=pe?k:p;return(0,m.jsx)(je,{onClick:Ke=>Kt(fe),...L})};var pr=y(249),gr={};gr.styleTagTransform=Ze(),gr.setAttributes=Fe(),gr.insert=se().bind(null,"head"),gr.domAPI=ie(),gr.insertStyleElement=et();var Rr=S()(pr.Z,gr);const Ur=pr.Z&&pr.Z.locals?pr.Z.locals:void 0,br=({gutter:s=10,className:p,overflow:k="hidden",...L},fe)=>{const pe=p?` ${p}`:"";let Ee=10;if(Array.isArray(s)){const je=[...s];s=je[0],Ee=je[1]??je[0]}return(0,m.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(s/2)}px`,"--rowgap":`${Math.floor(Ee/2)}px`,overflow:k},children:(0,m.jsx)("div",{className:`row${pe}`,...L,ref:fe})})},mr=(0,ke.forwardRef)(br),zr=({rowProps:s,colProps:p,children:k,Row:L=mr,Col:fe=x})=>{const pe=[];return ke.Children.map(k,Ee=>{Ee&&(Ee.type?.description==="react.fragment"?pe.push(...Ee.props.children):pe.push(Ee))}),(0,m.jsx)(L,{...s,children:pe.map((Ee,je)=>(0,m.jsx)(fe,{...p,...Ee.props.itemprops,children:Ee},`huuxy_grid_${je}`))})},Ir=(s,p)=>(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...p}),or=s=>{const{error:p={},info:k=""}=s||{},{message:L,stack:fe,errMsg:pe}=p;let Ee=pe||fe||p.toString();Ee=`${Ee}
${k}`.replace(/\r|\n|\r\n/g,"<br/>"),Ee=Ee.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Ee=Ee.replace(/\s/g,"&nbsp;");const je=L?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,m.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Ir(Ee,{style:{color:"red"}}),je&&(0,m.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${je}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Sr=({children:s,report:p})=>{const k=(0,ke.useRef)();return k.current?.state&&(k.current.state.error=null),(0,m.jsx)(Ct,{ref:k,fallback:(L,fe)=>or({error:L,info:fe}),errorReport:p,children:s})},yr=(s,p)=>Object.keys(p).map(k=>s.style[k]=p[k]),Lr=(s,p)=>Object.keys(p).map(k=>s.style[k]=""),Wr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Qr=({left:s,top:p,width:k,height:L})=>({left:`${s}px`,top:`${p}px`,width:`${k}px`,height:`${L}px`}),Fr=s=>(0,m.jsx)("i",{...s,children:"..."}),Or=s=>{const{left:p,top:k}=_e(s),{width:L,height:fe}=Tt(s);return{left:p,top:k,width:L,height:fe}},Br=({panel:s,target:p,fullIcon:k=Fr,exitIcon:L=Fr})=>{s=Lt(s)?s.current:s||document.body;const[fe,pe]=(0,ke.useState)(),Ee=(0,ke.useRef)();(0,ke.useEffect)(()=>{Ee.current={...Wr,...Qr(Or(s))}},[s]);const je=(ot,bt)=>{if(ot){const yt=Qr(Or((typeof p=="function"?p:()=>document.getElementsByClassName(p)[0])()));yr(bt,Ee.current),setTimeout(()=>{yr(bt,yt)},0)}else Lr(bt,Ee.current);pe(ot)},Ke=fe?L:k;return(0,m.jsx)(Ke,{onClick:ot=>je(!fe,s)})};var Pr=y(548),lr={};lr.styleTagTransform=Ze(),lr.setAttributes=Fe(),lr.insert=se().bind(null,"head"),lr.domAPI=ie(),lr.insertStyleElement=et();var qr=S()(Pr.Z,lr);const cr=Pr.Z&&Pr.Z.locals?Pr.Z.locals:void 0,nn=({open:s,close:p,hasMask:k=!0,cancelText:L="\u53D6\u6D88",submit:fe,submitText:pe="\u786E\u5B9A",title:Ee="Modal \u5F39\u7A97",className:je,children:Ke,delay:ot=250,...bt})=>{const yt=["modal-wrap",s?"open":"",...je?.split(" ")??[]].filter(Boolean).map(gt=>cr[gt]).join(" ");return(0,m.jsx)(Se,{open:s,close:p,delay:ot,hasMask:k,className:"huxy-modal",children:(0,m.jsx)("div",{className:yt,...bt,children:(0,m.jsxs)("div",{className:cr["modal-container"],children:[(0,m.jsx)("div",{className:cr["modal-header"],children:Ee}),(0,m.jsx)("div",{className:cr["modal-content"],children:Ke}),(0,m.jsxs)("div",{className:cr["modal-footer"],children:[(0,m.jsx)("div",{className:`${cr.btn} ${cr.left}`,onClick:gt=>p?.(gt),children:L}),(0,m.jsx)("div",{className:`${cr.btn} ${cr.right}`,onClick:gt=>fe?.(gt),children:pe})]})]})})})};var on=y(990),Tr={};Tr.styleTagTransform=Ze(),Tr.setAttributes=Fe(),Tr.insert=se().bind(null,"head"),Tr.domAPI=ie(),Tr.insertStyleElement=et();var jn=S()(on.Z,Tr);const $n=on.Z&&on.Z.locals?on.Z.locals:void 0,en=({global:s,absolute:p})=>(0,m.jsx)("div",{className:`spinner${s?" global":""}${p?" absolute":""}`,children:(0,m.jsx)("figure",{className:"spinning"})});var Hr=y(232),Kr={};Kr.styleTagTransform=Ze(),Kr.setAttributes=Fe(),Kr.insert=se().bind(null,"head"),Kr.domAPI=ie(),Kr.insertStyleElement=et();var Vn=S()(Hr.Z,Kr);const Yr=Hr.Z&&Hr.Z.locals?Hr.Z.locals:void 0,vn=s=>s?.filter?.(p=>typeof p=="function"),Un=(s,p)=>{const k=(0,ke.useRef)(),{loading:L,title:fe,plugins:pe,children:Ee,className:je,...Ke}=s,ot=vn(pe),bt=ot?.length,yt=je?` ${je}`:"",gt=Lt(p)?p:k;return(0,m.jsxs)("div",{className:`${Yr.panel}${yt}`,...Ke,ref:gt,children:[(fe||bt)&&(0,m.jsxs)("div",{className:Yr["panel-header"],children:[fe&&(0,m.jsx)("h4",{className:Yr["panel-title"],children:fe}),bt&&(0,m.jsx)("div",{className:Yr["panel-plugins"],children:ot.map((It,jt)=>(0,m.jsx)("span",{className:`link ${Yr.link}`,children:(0,m.jsx)(It,{panel:gt})},jt))})]}),(0,m.jsx)("div",{className:Yr["panel-body"],children:Ee}),L&&(0,m.jsx)(en,{})]})},gn=(0,ke.forwardRef)(Un),an=s=>Wt(s)==="array",zn=s=>an(s)&&!!s.length,yn=({to:s,preventDefault:p,stopPropagation:k,...L})=>p?(0,m.jsx)("span",{...L}):(0,m.jsx)("a",{href:s,...L}),xn=({item:s,...p})=>(0,m.jsx)("ul",{...p}),bn=(s,...p)=>{const k={};return Object.keys(s).filter(Boolean).map(L=>{k[L]=fe=>s[L](fe,...p)}),k},wn=({data:s=[],events:p={},List:k=xn,Link:L=yn,leftIcon:fe,rightIcon:pe,isHorizontal:Ee,isCollapsed:je,level:Ke=0,parentOpen:ot=!0})=>{const bt=je&&!Ke,yt=!Ee&&!je&&!ot;return s.map(gt=>{const{name:It,path:jt,icon:Rt,rightIcon:Mt,active:Ot,open:Yt,children:fr,linkProps:wr}=gt,Er=zn(fr),ir=gt.id||jt||It,kr=bt?gt.title??It:void 0,_r=yt?"hidden":"",Ar=Rt??fe,dr=Mt??pe,Vr=Ar?(0,m.jsx)("div",{className:"node-left-icon",children:Ar===!0?(0,m.jsx)("i",{className:"default-left-icon"}):Ar}):null,Dr=It?(0,m.jsx)("div",{className:"node-text",children:(0,m.jsx)("span",{children:It})}):null;if(Er){const ro=bn(p,gt,Ke),hn=[_r,Yt?"open":""].filter(Boolean).join(" ");return(0,m.jsxs)("li",{className:hn,"has-children":"true",...ro,children:[(0,m.jsxs)(L,{title:kr,className:`link${Ot?" active":""}`,to:jt,preventDefault:!0,stopPropagation:!1,...wr,children:[Vr,Dr,dr?(0,m.jsx)("div",{className:"node-right-icon",children:dr===!0?(0,m.jsx)("i",{className:"default-right-icon"}):dr}):null]}),(0,m.jsx)(k,{item:gt,children:wn({data:fr,events:p,List:k,Link:L,leftIcon:fe,rightIcon:pe,isHorizontal:Ee,isCollapsed:je,level:Ke+1,parentOpen:!!Yt})})]},ir)}return(0,m.jsx)("li",{className:_r,children:(0,m.jsxs)(L,{title:kr,className:`link${Ot?" active":""}`,to:jt,...wr,children:[Vr,Dr]})},ir)})},fn=wn,Wn=(s,...p)=>(0,m.jsx)("div",{"v-html":s,...p});var Mr=y(575),Gr={};Gr.styleTagTransform=Ze(),Gr.setAttributes=Fe(),Gr.insert=se().bind(null,"head"),Gr.domAPI=ie(),Gr.insertStyleElement=et();var En=S()(Mr.Z,Gr);const vo=Mr.Z&&Mr.Z.locals?Mr.Z.locals:void 0,dn=s=>(0,m.jsx)("div",{style:{padding:"6px 15px"},children:s}),kn=({activekey:s,tabs:p=[],switchTab:k,trackColor:L,flex:fe,...pe},Ee)=>{const[je,Ke]=(0,ke.useState)(s??p[0]?.key),[ot,bt]=(0,ke.useState)({}),yt=(0,ke.useRef)({}),gt=(0,ke.useRef)();(0,ke.useEffect)(()=>{const Rt=yt.current[je];Rt&&It(Rt)},[]);const It=Rt=>{const{left:Mt,width:Ot}=_e(Rt),Yt=_e(gt.current).left;bt({left:Mt-Yt,width:Ot})},jt=(Rt,Mt)=>{Rt.stopPropagation(),Ke(Mt),typeof k=="function"&&k(Mt),It(Rt.currentTarget)};return(0,m.jsxs)("div",{className:"tabs-header-wrap",...pe,ref:Ee,children:[(0,m.jsx)("ul",{className:`tabs-header${fe?" flex":""}`,ref:gt,children:p.map(Rt=>(0,m.jsx)("li",{ref:Mt=>yt.current[Rt.key]=Mt,className:`th-item${je===Rt.key?" active":""}`,onClick:Mt=>jt(Mt,Rt.key),children:typeof Rt.renderTabs=="function"?Rt.renderTabs(Rt,je===Rt.key):dn(Rt.value)},Rt.key))}),(0,m.jsx)("div",{className:"th-track",style:{...ot,color:L}})]})},Bn=(0,ke.forwardRef)(kn),Cn=(s,p,k="id",L="children")=>{if(!an(s))return null;const fe=pe=>{for(let Ee=0,je=pe.length;Ee<je;Ee++){const Ke=pe[Ee];if(Ke[k]===p)return[Ke];if(an(Ke[L])){const ot=fe(Ke[L]);if(ot)return[Ke].concat(ot)}}};return fe(s)},Hn=s=>++s,sn=()=>{const[,s]=(0,ke.useState)(0);return(0,ke.useCallback)(()=>s(Hn),[])},Sn=s=>{const{children:p,open:k}=s;let L=0;if(k&&p?.length){L=p.length;let fe=0;return p.map(pe=>fe+=Sn(pe)),L+fe}return L},Fn=({item:s,style:p,...k})=>(0,m.jsx)("ul",{style:{...p,"--count":Sn(s)},...k});var un=y(942),jr={};jr.styleTagTransform=Ze(),jr.setAttributes=Fe(),jr.insert=se().bind(null,"head"),jr.domAPI=ie(),jr.insertStyleElement=et();var go=S()(un.Z,jr);const Kn=un.Z&&un.Z.locals?un.Z.locals:void 0,Yn=s=>(0,m.jsx)("ul",{...s}),Pn=(s,p)=>s?Fn:({item:k,...L})=>(0,m.jsx)(Yn,{className:p==="right"?"left":"",...L}),Gn=s=>{const{data:p=[],collapsed:k=!1,type:L="vertical",Link:fe,width:pe,bgColor:Ee,itemHeight:je,collapsedWidth:Ke,itemPadding:ot,style:bt,className:yt,...gt}=s,It=(0,ke.useRef)(),jt=(0,ke.useRef)();(0,ke.useEffect)(()=>()=>clearTimeout(It.current),[]);const Rt=sn(),Mt=L==="horizontal",Ot=!Mt&&k,Yt={onClick:(_r,Ar)=>{if(_r.stopPropagation(),!Mt&&!Ot){const dr=Cn(p,Ar.path,"path"),Vr=dr[dr.length-1];Vr.open=!Vr.open,Rt()}},onMouseEnter:(_r,Ar,dr)=>{Ot&&!dr&&(clearTimeout(It.current),jt.current.style.width="var(--maxWidth)")},onMouseLeave:(_r,Ar,dr)=>{Ot&&!dr&&(It.current=setTimeout(()=>jt.current.style.width="",200))}},fr=(Mt?["huxy-horizontal-tree",yt]:["huxy-tree",yt,Ot?"collapsed":""]).filter(Boolean).join(" "),{float:wr,...Er}=gt?.style??{},ir={"--bgColor":Ee,"--itemHeight":je,"--nodeListWidth":pe,...Er};Mt?(ir["--itemPadding"]=ot,ir["--nodeFloat"]=wr):(ir["--width"]=pe,ir["--collapsedWidth"]=Ke);const kr=Pn(!Mt&&!Ot,wr);return(0,m.jsx)("div",{ref:jt,className:fr,style:ir,...gt,children:(0,m.jsx)("div",{className:"huxy-tree-track",children:(0,m.jsx)("ul",{className:"huxy-tree-root",children:fn({data:p,events:Yt,List:kr,Link:fe,leftIcon:!0,rightIcon:!0,isHorizontal:Mt,isCollapsed:Ot})})})})},_n=()=>{const[s,p]=Oe(Tt());return(0,ke.useEffect)(()=>{const k=()=>p(Tt());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),s},An=({menu:s,curName:p,Link:k})=>s.map(L=>{const{path:fe,name:pe,open:Ee,children:je}=L,Ke=pe===p;return je?.length?(0,m.jsxs)("li",{className:Ee?"open":"",children:[(0,m.jsx)(k,{to:{query:{name:pe}},className:`link${Ke?" active":""}`,preventDefault:!0,children:(0,m.jsx)("span",{children:pe})}),(0,m.jsx)("ul",{children:(0,m.jsx)(An,{menu:je,curName:pe,Link:k})})]},fe||pe):(0,m.jsx)("li",{children:(0,m.jsx)(k,{to:{query:{name:pe}},className:`link${Ke?" active":""}`,children:(0,m.jsx)("span",{children:pe})})},fe||pe)}),Rn=An,Xn=(s={})=>{const p={};return Object.keys(s).map(k=>{s[k]!=null&&(p[k]=s[k])}),p},On=(s=0,p)=>{Dt()&&(p=Lt(p)?p.current:p??window,p.scrollTo?.({top:s,behavior:"smooth"}))},Jn=(s=()=>{},p=60)=>{let k=null;return function(...L){k||(s.apply(this,L),k=setTimeout(()=>k=null,p))}},ln=(s,p=null,k=!1)=>[...s||[]].sort((L,fe)=>{const pe=p?L[p]:L,Ee=p?fe[p]:fe;return!isNaN(Number(pe))&&!isNaN(Number(pe))?k?Ee-pe:pe-Ee:typeof pe=="string"&&typeof Ee=="string"?k?Ee.localeCompare(pe):pe.localeCompare(Ee):typeof pe=="string"&&typeof Ee=="number"?k?-1:1:typeof pe=="number"||typeof pe=="string"?k?1:-1:k?-1:1}),Qn=()=>Dt()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Tn=({curName:s,itemList:p})=>{const k=(0,ke.useRef)(!1),L=(0,ke.useRef)(""),[fe,pe]=(0,ke.useState)(s);return(0,ke.useEffect)(()=>{if(p.current=Xn(p.current),!s){const Ke=Object.keys(p.current).map(ot=>({name:ot,offsetTop:p.current[ot]?.offsetTop??0}));pe(Ke[0]?.name)}let Ee=0,je=0;if(L.current!==s){L.current=s;const Ke=p.current[s];k.current=!0,Ke?(On(Ke.offsetTop),Ee=setTimeout(()=>k.current=!1,1050)):je=setTimeout(()=>{window.scrollTo?.({top:p.current[s]?.offsetTop??0,behavior:"instant"}),Ee=setTimeout(()=>k.current=!1,1050)},550)}return()=>{clearTimeout(Ee),clearTimeout(je),k.current=!1}},[s]),(0,ke.useEffect)(()=>{const Ee=Jn(()=>{if(!k.current){const je=ln(Object.keys(p.current).map(Ke=>({name:Ke,offsetTop:p.current[Ke]?.offsetTop??0})),"offsetTop",!0).find(Ke=>Ke.offsetTop<Qn())?.name;L.current!==je&&(L.current=je,pe(je))}});return window.addEventListener("scroll",Ee,!1),()=>window.removeEventListener("scroll",Ee,!1)},[]),[fe]},qn=/!\[.*\]\((.*)\)/g,Mn=async(s,p,k)=>{const L={};for(let fe=0,pe=s.length;fe<pe;fe++){const Ee=s[fe],je=Ee.slice(2);L[Ee]=await k({folder:p,name:je})}return L},Xr=async(s,{folder:p},k)=>{const L=[...s.matchAll(qn)].filter(Boolean).map(fe=>fe[1]);if(L?.length){const fe=await Mn(L,p,k);L.map(pe=>{s=s.replace(pe,fe[pe])})}return s},eo=({item:s,marked:p,getContext:k})=>{const[L,fe]=(0,ke.useState)("");return(0,ke.useEffect)(()=>{(async()=>{try{const pe=await k({...s,type:".md"}),Ee=await Xr(pe,s,k),je=typeof p=="function"?p.parse(Ee):je;fe(je)}catch(pe){fe(pe?.message)}})()},[]),(0,m.jsxs)("div",{className:"huxy-content",children:[Ir(L),!L&&(0,m.jsx)(en,{global:!0})]})},Nr=({router:s,curName:p,context:k,marked:L,getContext:fe})=>{const pe=(0,ke.useRef)({}),[Ee]=Tn({curName:p,itemList:pe});return(0,ke.useEffect)(()=>{Ee&&s.push({query:{name:Ee}})},[Ee]),(0,m.jsx)("div",{className:"huxy-anchor-page",children:k.map((je,Ke)=>(0,m.jsxs)("div",{className:"huxy-anchor-item",ref:ot=>pe.current[je.name]=ot,children:[(0,m.jsx)("h2",{children:`${je.name}`}),(0,m.jsx)(eo,{item:je,marked:L,getContext:fe})]},je.name))})},to=s=>{const p=[];return s.map(k=>{const[L,fe]=k.name.split("/"),pe=p.find(Ee=>Ee.name===L);pe?pe.children.push({name:fe,folder:L}):p.push({name:L,children:[{name:fe,folder:L}]})}),p};var tn=y(556),$r={};$r.styleTagTransform=Ze(),$r.setAttributes=Fe(),$r.insert=se().bind(null,"head"),$r.domAPI=ie(),$r.insertStyleElement=et();var yo=S()(tn.Z,$r);const xo=tn.Z&&tn.Z.locals?tn.Z.locals:void 0,Nn=(s,p,k)=>({sidebar:s.find(L=>L.name===p)?.children??[],listEle:s.map(({name:L,children:fe})=>(0,m.jsx)("li",{children:(0,m.jsx)(k,{to:{query:{folder:L,name:fe[0]?.name}},className:`link${L===p?" active":""}`,children:(0,m.jsx)("span",{children:L})})},L))}),rn=s=>{const{params:p,router:k,Link:L,listFiles:fe,getContext:pe,marked:Ee,title:je,routeLink:Ke,routeName:ot,className:bt,style:yt}=s,{folder:gt,name:It}=p,{width:jt}=_n(),[Rt,Mt]=(0,ke.useState)([]),[Ot,Yt]=(0,ke.useState)(!1);(0,ke.useEffect)(()=>{(async()=>{const ir=await fe(),kr=to(ir);Mt(kr),gt||k.push({query:{folder:kr[0]?.name,name:kr[0]?.children[0]?.name}})})()},[]);const fr=jt<=1024,{sidebar:wr,listEle:Er}=Nn(Rt,gt,L);return(0,m.jsxs)("div",{className:`huxy-doc-frame ${bt??""}`,style:yt,children:[(0,m.jsxs)("div",{className:"huxy-doc-header",children:[(0,m.jsx)("div",{className:"huxy-doc-banner",children:je||"\u6587\u6863\u7CFB\u7EDF"}),(0,m.jsx)("ul",{className:"huxy-doc-nav",children:fr?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{className:"huxy-doc-collapsed",children:(0,m.jsx)("span",{className:"link",onClick:ir=>{ir.stopPropagation(),Yt(!Ot)},children:(0,m.jsx)(Pt,{type:Ot?"right":""})})}),(0,m.jsx)($,{open:Ot,close:()=>Yt(!1),width:"220px",children:(0,m.jsx)("ul",{className:"huxy-doc-menu-drawer",children:Er})})]}):Er}),Ke?(0,m.jsx)("div",{className:"huxy-doc-back",children:(0,m.jsx)(L,{to:Ke,children:(0,m.jsx)("span",{children:ot??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,m.jsxs)("div",{className:"huxy-doc-container",children:[(0,m.jsx)("div",{className:"huxy-doc-main-page",children:(0,m.jsx)(Nr,{router:k,curName:It,context:wr,marked:Ee,getContext:pe})}),(0,m.jsx)("div",{className:"huxy-doc-menu",children:(0,m.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,m.jsx)(Rn,{menu:wr,curName:It,Link:L})})})]})]})}})();var a=h.PC,v=h.rK,P=h.lr,q=h.JX,A=h.dy,_=h.Ud,z=h.mH,g=h.SV,E=h.Hn,F=h.rj,V=h.V7,X=h.AN,te=h.zd,xe=h.BQ,ne=h.Ur,Te=h.u_,Re=h.s_,Ce=h.h_,ve=h.X2,oe=h.$j,R=h.GK,we=h.u,Ve=h.mp,Xe=h.C2,it=h.pC,ye=h.ff,J=h.d2,Pe=h.Uw},78611:function(tt,le,l){var d;l.d(le,{Bv:function(){return v},rU:function(){return h},tv:function(){return q},yj:function(){return P}});var n=l(27378),Z={990:(A,_,z)=>{z.d(_,{Z:()=>te});var g=z(601),E=z.n(g),F=z(609),V=z.n(F),X=V()(E());X.push([A.id,`@keyframes before {
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
`,""]),X.locals={};const te=X},267:(A,_,z)=>{z.d(_,{Z:()=>te});var g=z(601),E=z.n(g),F=z(609),V=z.n(F),X=V()(E());X.push([A.id,`.Iuy_e {
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
`,""]),X.locals={link:"Iuy_e",active:"D3oJg"};const te=X},609:A=>{A.exports=function(_){var z=[];return z.toString=function(){return this.map(function(g){var E="",F=typeof g[5]<"u";return g[4]&&(E+="@supports (".concat(g[4],") {")),g[2]&&(E+="@media ".concat(g[2]," {")),F&&(E+="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {")),E+=_(g),F&&(E+="}"),g[2]&&(E+="}"),g[4]&&(E+="}"),E}).join("")},z.i=function(g,E,F,V,X){typeof g=="string"&&(g=[[null,g,void 0]]);var te={};if(F)for(var xe=0;xe<this.length;xe++){var ne=this[xe][0];ne!=null&&(te[ne]=!0)}for(var Te=0;Te<g.length;Te++){var Re=[].concat(g[Te]);F&&te[Re[0]]||(typeof X<"u"&&(typeof Re[5]>"u"||(Re[1]="@layer".concat(Re[5].length>0?" ".concat(Re[5]):""," {").concat(Re[1],"}")),Re[5]=X),E&&(Re[2]&&(Re[1]="@media ".concat(Re[2]," {").concat(Re[1],"}")),Re[2]=E),V&&(Re[4]?(Re[1]="@supports (".concat(Re[4],") {").concat(Re[1],"}"),Re[4]=V):Re[4]="".concat(V)),z.push(Re))}},z}},601:A=>{A.exports=function(_){return _[1]}},837:(A,_,z)=>{var g,E=z(810),F=Symbol.for("react.element"),V=Symbol.for("react.fragment"),X=Object.prototype.hasOwnProperty,te=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xe={key:!0,ref:!0,__self:!0,__source:!0};function ne(Te,Re,Ce){var ve,oe={},R=null,we=null;Ce!==void 0&&(R=""+Ce),Re.key!==void 0&&(R=""+Re.key),Re.ref!==void 0&&(we=Re.ref);for(ve in Re)X.call(Re,ve)&&!xe.hasOwnProperty(ve)&&(oe[ve]=Re[ve]);if(Te&&Te.defaultProps)for(ve in Re=Te.defaultProps,Re)oe[ve]===void 0&&(oe[ve]=Re[ve]);return{$$typeof:F,type:Te,key:R,ref:we,props:oe,_owner:te.current}}g=V,_.jsx=ne,_.jsxs=ne},322:(A,_,z)=>{A.exports=z(837)},62:A=>{var _=[];function z(F){for(var V=-1,X=0;X<_.length;X++)if(_[X].identifier===F){V=X;break}return V}function g(F,V){for(var X={},te=[],xe=0;xe<F.length;xe++){var ne=F[xe],Te=V.base?ne[0]+V.base:ne[0],Re=X[Te]||0,Ce="".concat(Te," ").concat(Re);X[Te]=Re+1;var ve=z(Ce),oe={css:ne[1],media:ne[2],sourceMap:ne[3],supports:ne[4],layer:ne[5]};if(ve!==-1)_[ve].references++,_[ve].updater(oe);else{var R=E(oe,V);V.byIndex=xe,_.splice(xe,0,{identifier:Ce,updater:R,references:1})}te.push(Ce)}return te}function E(F,V){var X=V.domAPI(V);X.update(F);var te=function(xe){if(xe){if(xe.css===F.css&&xe.media===F.media&&xe.sourceMap===F.sourceMap&&xe.supports===F.supports&&xe.layer===F.layer)return;X.update(F=xe)}else X.remove()};return te}A.exports=function(F,V){V=V||{},F=F||[];var X=g(F,V);return function(te){te=te||[];for(var xe=0;xe<X.length;xe++){var ne=X[xe],Te=z(ne);_[Te].references--}for(var Re=g(te,V),Ce=0;Ce<X.length;Ce++){var ve=X[Ce],oe=z(ve);_[oe].references===0&&(_[oe].updater(),_.splice(oe,1))}X=Re}}},793:A=>{var _={};function z(E){if(typeof _[E]>"u"){var F=document.querySelector(E);if(window.HTMLIFrameElement&&F instanceof window.HTMLIFrameElement)try{F=F.contentDocument.head}catch{F=null}_[E]=F}return _[E]}function g(E,F){var V=z(E);if(!V)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");V.appendChild(F)}A.exports=g},173:A=>{function _(z){var g=document.createElement("style");return z.setAttributes(g,z.attributes),z.insert(g,z.options),g}A.exports=_},892:(A,_,z)=>{function g(E){var F=z.nc;F&&E.setAttribute("nonce",F)}A.exports=g},36:A=>{function _(E,F,V){var X="";V.supports&&(X+="@supports (".concat(V.supports,") {")),V.media&&(X+="@media ".concat(V.media," {"));var te=typeof V.layer<"u";te&&(X+="@layer".concat(V.layer.length>0?" ".concat(V.layer):""," {")),X+=V.css,te&&(X+="}"),V.media&&(X+="}"),V.supports&&(X+="}");var xe=V.sourceMap;xe&&typeof btoa<"u"&&(X+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(xe))))," */")),F.styleTagTransform(X,E,F.options)}function z(E){if(E.parentNode===null)return!1;E.parentNode.removeChild(E)}function g(E){if(typeof document>"u")return{update:function(){},remove:function(){}};var F=E.insertStyleElement(E);return{update:function(V){_(F,E,V)},remove:function(){z(F)}}}A.exports=g},464:A=>{function _(z,g){if(g.styleSheet)g.styleSheet.cssText=z;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(z))}}A.exports=_},810:A=>{var _=g=>{var E={};return w.d(E,g),E},z=g=>()=>g;A.exports=d||(d=l.t(n,2))}},H={};function w(A){var _=H[A];if(_!==void 0)return _.exports;var z=H[A]={id:A,exports:{}};return Z[A](z,z.exports,w),z.exports}w.n=A=>{var _=A&&A.__esModule?()=>A.default:()=>A;return w.d(_,{a:_}),_},w.d=(A,_)=>{for(var z in _)w.o(_,z)&&!w.o(A,z)&&Object.defineProperty(A,z,{enumerable:!0,get:_[z]})},w.o=(A,_)=>Object.prototype.hasOwnProperty.call(A,_),w.nc=void 0;var y={};(()=>{w.d(y,{rU:()=>vr,cb:()=>Cr,Bv:()=>nr,yj:()=>sr,tv:()=>ut});var A=w(810);const _=b=>Object.prototype.toString.call(b).slice(8,-1).toLowerCase(),z=b=>_(b)==="array",g=b=>_(b)==="object",E=b=>b?.$$typeof&&typeof b.$$typeof=="symbol"&&b.$$typeof.description==="react.element",F=b=>b?.__v_isVNode,V=(b,j)=>Object.prototype.hasOwnProperty.call(b??{},j),X=b=>{if(!z(b)&&!g(b))return b;const j=z(b)?[]:{};for(const re in b)if(V(b,re)){const Y=b[re];j[re]=E(Y)||F(Y)||typeof Y!="object"?Y:Y!==b?X(Y):"cyclic"}else Object.setPrototypeOf(j,{[re]:b[re]});return j},te=X,xe=b=>_(b)==="function",ne=b=>_(b)==="promise"||g(b)&&xe(b.then),Te=(b,j=12e4,re="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!ne(b))return{};let Y=null,U=null;return{promiseFn:new Promise((Ne,Be)=>{Y=(He="canceled")=>{clearTimeout(U),Ne({canceled:!0,errMsg:He})},j&&(j=typeof j!="number"?12e4:j,U=setTimeout(()=>Y(re),j)),b.then(He=>{clearTimeout(U),Ne({result:He,errMsg:!1})}).catch(He=>{clearTimeout(U),Be(He)})}),cancelFn:Y}},Re=b=>b?b.charAt(b.length-1)==="/"?b.slice(0,-1):b:"";var Ce=w(322);const ve=(b,j)=>(0,Ce.jsx)("div",{dangerouslySetInnerHTML:{__html:b},...j}),oe=b=>{const{error:j={},info:re=""}=b||{},{message:Y,stack:U,errMsg:Ne}=j;let Be=Ne||U||j.toString();Be=`${Be}
${re}`.replace(/\r|\n|\r\n/g,"<br/>"),Be=Be.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Be=Be.replace(/\s/g,"&nbsp;");const He=Y?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Ce.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[ve(Be,{style:{color:"red"}}),He&&(0,Ce.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${He}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},R=b=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(b),we=()=>{const b={};return{on:(j,re)=>{b[j]||(b[j]=[]),b[j].indexOf(re)===-1&&b[j].push(re)},emit:(j,re)=>{b[j]&&b[j].map(Y=>Y(re))},off:(j,re=null)=>{if(b[j]){if(typeof re!="function")return delete b[j];const Y=b[j].indexOf(re);Y>-1&&(b[j].splice(Y,1),b[j].length||delete b[j])}}}},Ve=b=>{const j={};for(let re in b)V(b,re)||(j[re]=b[re]);return j},Xe=(b,j)=>{if(!g(b))return j;if(!g(j))return b;const re={...Ve(b),...Ve(j)},Y={...b,...j};return Object.keys(re).map(U=>{Object.setPrototypeOf(Y,{[U]:re[U]})}),Y},it=()=>{const{on:b,emit:j,off:re}=we(),Y={};return{getState:U=>te(Y[U]),setState:(U,Ne=!1)=>{if(typeof U=="function"&&(U=U(te(Y))),!g(U))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Be=te(U);Object.keys(Be).map(He=>{const Le=Y[He],De=Be[He],ht=g(De)&&g(Le)?Xe(Le,De):De;!Ne&&j(He,ht),Y[He]=ht})},subscribe:(U,Ne)=>(b(U,Ne),()=>re(U,Ne)),unsubscribe:re,clean:U=>{typeof U=="string"?Y[U]=void 0:Array.isArray(U)?U.map(Ne=>Y[Ne]=void 0):Object.keys(Y).map(Ne=>Y[Ne]=void 0)}}},ye=b=>(j,re)=>{const[Y,U]=(0,A.useState)(()=>{const Le=b?.getState(j);return Le!==void 0?Le:(re!==void 0&&b?.setState({[j]:re},!0),re)}),Ne=(0,A.useCallback)(Le=>b?.setState({[j]:typeof Le=="function"?Le(b?.getState(j)):Le}),[]),Be=(0,A.useCallback)(Le=>b?.subscribe(j,Le),[]),He=(0,A.useCallback)((Le=Le)=>b?.clean(Le),[]);return(0,A.useEffect)(()=>{b?.subscribe(j,Le=>U(Le))},[]),[Y,Ne,Be,He]},J=it(),Pe=ye(J),m=we(),ae=we(),S="push-emitter",ue="replace-emitter",ie="useRoute-emitter",Q={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},se="/404",he={getState:()=>history.state,go:b=>history.go(b),forward:()=>history.forward(),back:()=>history.back()},Fe=(b,j,re,Y,U=[])=>{const Ne=Le=>{for(let De=0,ht=Le.length;De<ht;De++){const Ct=Le[De],St=Ct[Y].split("?")[0];if(new RegExp("^"+St.replace(/:[^/]+/g,"[^/]+")+"$").test(j))return Ct;if(z(Ct[re])){const xt=Ne(Ct[re]);if(xt)return xt}}},Be=Ne(b);if(!Be)return se;const{redirect:He}=Be;return He?R(He)?He:U.includes(He)?U:(U.push(He),Fe(b,He.split("?")[0],re,Y,U)):U[U.length-1]},We=(b,j,re,Y,U)=>{if(!z(b))return null;const Ne=ht=>{const Ct=ht.split("/"),St=j.split("/"),xt={};return Ct.map((ft,mt)=>ft.indexOf(":")===0&&(xt[ft.slice(1)]=St[mt])),xt},Be=(ht,Ct)=>{const St=[],xt=Ct.split("/:")[0];for(let ft=0,mt=ht.length;ft<mt;ft++){const qe=ht[ft];if(qe[U]===xt){qe.active=!0;const{name:nt,title:Ft,icon:Ut,params:Kt}=qe;St.push({name:nt,title:Ft,icon:Ut,params:Kt,[U]:xt})}else if(Ct.indexOf(`${qe[U]}/`)===0){qe.active=!0;const nt=Ne(qe[U]),Ft=Object.keys(nt).map(xr=>nt[xr]).join("/"),{name:Ut,title:Kt,icon:ur}=qe,hr=Ft?`${xt}/${Ft}`:qe[U];St.push({name:Ut,title:Kt,icon:ur,[U]:hr,params:{...qe.params,...nt}})}else if(qe[U]===Ct){qe.active=!0;const nt=Ne(qe[U]),{[Y]:Ft,...Ut}=qe;St.push({...Ut,[U]:j,params:{...Ut.params,...re,...nt}})}}return St},He=(ht,Ct)=>{for(let St=0,xt=ht.length;St<xt;St++){const ft=ht[St];if(Ct.indexOf(`${ft[U]}/`)===0){ft.active=!0;return}}},Le=ht=>{for(let Ct=0,St=ht.length;Ct<St;Ct++){const xt=ht[Ct],ft=(xt[U]||"").split("?")[0];if(ft===j){xt.hideMenu&&He(ht,xt.parentPath||ft),xt.active=!0;const{[Y]:mt,...qe}=xt;return[{...qe,params:{...qe.params,...re}}]}if(new RegExp("^"+ft.replace(/:[^/]+/g,"[^/]+")+"$").test(j))return Be(ht,ft);if(z(xt[Y])){const mt=Le(xt[Y]);if(mt){xt.active=!0,xt.open=!0;const{[Y]:qe,...nt}=xt;return[nt,...mt]}}}},De=Le(b)||[];return{result:b,current:De}},et=(b,j,re)=>b.filter(Y=>Y.hideMenu||Y[re].indexOf("/:")>-1?!1:(z(Y[j])&&(Y[j]=et(Y[j],j,re)),!0)),Je=(b,j,re,Y="children",U="path")=>{const Ne=Fe(b,j,Y,U);if(Ne)return{redirect:Ne};const{result:Be,current:He}=We(b,j,re,Y,U),Le=et(Be,Y,U);return{current:He,menu:Le}},Ze=(b,j)=>{const re=["#/","/"],Y=re[!!j-0];if(!b||re.includes(b))return Y;const U=b.charAt(b.length-1)==="/"?b.slice(0,-1):b;return j||U.indexOf("#/")>-1?U:`#${U}`},Ie=(b,j,re,Y=!1)=>{const U=Ze(j,re);return Y?U:re?b&&U==="/"?b:`${b}${U}`:b?`${b}/${U}`:U},ct=(b,j,re,Y,U,Ne)=>{if(!z(b))return b;const Be=(He,Le="")=>He.filter(De=>!De.denied).map(De=>{if(!Ne&&!De.exact&&!R(De[Y])){(!De[Y]||De[Y]==="javascript:;")&&(De[Y]="");const ht=De[Y].charAt(0)==="/"&&Le.charAt(Le.length-1)==="/"?De[Y].slice(1):De[Y].charAt(0)!=="/"&&Le.charAt(Le.length-1)!=="/"?`/${De[Y]}`:De[Y];De[Y]=Le?Le+ht:Ie(U,ht,j)}return De.redirect&&!R(De.redirect)&&(De.redirect=Ie(U,De.redirect,j)),z(De[re])&&(De[re]=Be(De[re],De[Y]),!De.redirect&&De[re].length&&(De.redirect=De[re][0][Y])),De});return Be(b)},pt=b=>{if(!g(b))return"";const j=[];return Object.keys(b).map((re,Y)=>{const U=Y>0?"&":"?";j.push(`${U}${re}=${b[re]}`)}),j.join("")},rt=(b="")=>{const[j,re]=b.split("?");if(re){const Y={};return re.split("&").map(U=>{const[Ne,Be]=U.split("=");Y[Ne]=Be}),{path:j,params:Y}}return{path:j}},Pt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},ke=(b,j)=>{for(let re=b.length-1,Y;Y=b[re--];){const{title:U,name:Ne}=Y;if(typeof U=="string"&&U.length)return document.title=U;if((U==null||U===!0)&&Ne)return document.title=j?`${Ne}-${j}`:Ne;if(j)return document.title=j}},At=b=>{const{pathname:j,search:re,hash:Y}=location;if(b){const He=Ze(j,b),Le=decodeURIComponent(`${He}${re}`),{params:De}=rt(Le);return{path:Le,params:De}}const U=decodeURIComponent(Ze(Y,b)),{params:Ne}=rt(U),Be=Re(j);return{path:Be?`${Be}/${U}`:U,params:Ne}},kt=(b,j,re)=>{typeof b=="function"&&b({...j,stay:new Date-re})},lt=(b,j,re,Y)=>{let U=typeof b=="string"?b:b.path??"";const Ne=pt(b.query);R(U)||(U=Ie(re,U,Y,b.exact)),window?.open(`${U}${Ne}`,j)},$t=(b,j,re,Y)=>{if(b.target||R(b.path)){lt(b,b.target,j,re);return}let U,Ne,Be;if(typeof b=="string")U=b;else if(g(b))U=b.path,Ne=b.params,Be=b.query;else return;!U||U==="."||U==="./"?U=Y:U.indexOf("./")===0?U=`${Y.split("?")[0]}${U.replace("./","/")}`:U.indexOf("../")===0&&(U=`${Y.split("?")[0].split("/").slice(0,-1).join("/")}${U.replace("../","/")}`),U=Ie(j,U,re,b?.exact);const He=rt(U);U=He.path;const Le={...He.params,...Be},De=pt(Le);return U=`${U}${De}`,Ne={...Ne,...Le},U===Y?!1:{path:U,params:Ne}},Vt=(b,j)=>{const re=b.split(j);return re.length>1?["","/"].includes(re[1].slice(0,1)):!1},tr=we(),Zt=b=>{const{on:j,emit:re,off:Y}=tr;return{on:U=>j(b,U),emit:U=>re(b,U),off:U=>Y(b,U)}},zt=b=>(j,re)=>{const{getState:Y,setState:U,subscribe:Ne,unsubscribe:Be,clean:He}=b;return re!==void 0&&U({[j]:re},!0),{getState:()=>Y(j),setState:(Le,De)=>U({[j]:Le},De),subscribe:Le=>Ne(j,Le),unsubscribe:()=>Be(j),clean:()=>He(j)}},Jt=it(),Dt=zt(Jt),Wt=Zt("push-emitter"),Bt=Zt("replace-emitter"),Tt=Dt("route-store"),qt=we(),Ht=it(),Lt=ye(Ht),rr=()=>![typeof window,typeof document].includes("undefined"),er=b=>{if(!rr())return;const j=document.createElement("div");return j.innerHTML=b,j.children[0]};class ar extends A.default.Component{state={error:null};static getDerivedStateFromError(j){return{error:j}}componentDidCatch(j,re){const{errorReport:Y}=this.props;typeof Y=="function"&&Y({error:j,info:re.componentStack})}render(){const{error:j}=this.state,{fallback:re,children:Y}=this.props;return j?re(j):Y}}const Oe=({children:b,report:j})=>{const re=(0,A.useRef)();return re.current?.state&&(re.current.state.error=null),(0,Ce.jsx)(ar,{ref:re,fallback:(Y,U)=>oe({error:Y,info:U}),errorReport:j,children:b})};var $e=w(62),Ye=w.n($e),Ue=w(36),me=w.n(Ue),T=w(793),N=w.n(T),c=w(892),x=w.n(c),i=w(173),D=w.n(i),B=w(464),ce=w.n(B),G=w(990),ee={};ee.styleTagTransform=ce(),ee.setAttributes=x(),ee.insert=N().bind(null,"head"),ee.domAPI=me(),ee.insertStyleElement=D();var K=Ye()(G.Z,ee);const Se=G.Z&&G.Z.locals?G.Z.locals:void 0,f=({global:b,absolute:j})=>(0,Ce.jsx)("div",{className:`spinner${b?" global":""}${j?" absolute":""}`,children:(0,Ce.jsx)("figure",{className:"spinning"})}),O=()=>{const b=(0,A.useRef)([]);return(0,A.useEffect)(()=>()=>{b.current.map(j=>j.cancelFn()),b.current=[]},[]),{cancelablePromise:(0,A.useCallback)((j,re=!0)=>{const Y=Te(j,re);return b.current.indexOf(Y)===-1&&b.current.push(Y),Y.promiseFn},[])}},M=(b={})=>{const{cancelablePromise:j}=O(),[re,Y]=(0,A.useState)(b),U=(0,A.useRef)({}),Ne=(0,A.useRef)({}),Be=(0,A.useCallback)((Le=null)=>{Array.isArray(Le)&&Le.length?Le.map(De=>U.current[De]=b[De]):U.current=b},[]),He=(0,A.useCallback)((Le,De,ht=!1)=>{const Ct=Object.keys(Le),St=JSON.stringify(Ct.sort());if(!Ne.current[St]){Ne.current[St]=!0,ht&&Be(Array.isArray(ht)?ht:Ct),Ct.map(xt=>{U.current[xt]||(U.current[xt]={}),U.current[xt].pending=!0}),Y({...U.current});for(let xt=0,ft=Ct.length;xt<ft;xt++){const mt=Ct[xt];j(Le[mt]).then(qe=>{let{result:nt,errMsg:Ft}=qe;xt===ft-1&&(Ne.current[St]=!1),typeof De=="function"&&(nt=De(nt)||nt),U.current[mt]={...nt,pending:!1},Ft===!1&&Y({...U.current})}).catch(qe=>{throw xt===ft-1&&(Ne.current[St]=!1),U.current[mt]={error:qe,pending:!1},Y({...U.current}),qe})}}},[]);return[re,He,Be]},I=b=>Object.keys(b).length,$=b=>{const{Comp:j,restResolve:re,loadPromise:Y,params:U,children:Ne}=b,[Be,He]=M(),[Le,De]=M();return(0,A.useEffect)(()=>{I(re)&&He(re),I(Y)&&De(Y)},[re,Y]),(0,A.useEffect)(()=>{const ht=I(Be);ht&&ht===I(re)&&U.store.setState(Be)},[Be]),(0,Ce.jsx)(j,{...U,...Be,...Le,children:Ne})},de=b=>b===!1?null:E(b)?b:xe(b)?(0,Ce.jsx)(b,{}):(0,Ce.jsx)(f,{}),be=({Loading:b,ErrorBoundary:j,loadedComp:re})=>{const Y=(0,Ce.jsx)(A.Suspense,{fallback:de(b),children:re});return j===!1?Y:xe(j)?(0,Ce.jsx)(j,{children:Y}):(0,Ce.jsx)(Oe,{children:Y})},Ae=({Comp:b,routerProps:j,children:re})=>{const{params:Y,...U}=j,{loading:Ne,errorBoundary:Be,...He}=Y,Le=(0,Ce.jsx)($,{Comp:b,...U,params:He,children:re});return be({Loading:Ne,ErrorBoundary:Be,loadedComp:Le})},_e={},Ge=(b,j,re,Y)=>ne(re)?re.then(U=>Ae({Comp:b,routerProps:j,children:U.default??U})):Ae({Comp:b,routerProps:j,children:re}),ze=(b,j,re)=>{const Y={},U={};return g(b)?(Object.keys(b).map(Ne=>{const Be=j.getState(Ne);Be==null?U[Ne]=b[Ne](re):Y[Ne]=Be}),{cachedResolve:Y,restResolve:U}):{cachedResolve:Y,restResolve:U}},st=(b,j)=>{if(!g(b))return{};const re={};return Object.keys(b).map(Y=>re[Y]=b[Y](j)),re},vt=b=>{const{current:j,menu:re,...Y}=b,U=j.map(He=>{const{component:Le,resolve:De,loadData:ht,loading:Ct,errorBoundary:St,icon:xt,...ft}=He;return ft}),Ne=[...j].filter(He=>He.component),Be=(He=0)=>{if(!Ne.length)return null;const Le=Ne.shift(),{component:De,resolve:ht,loadData:Ct,icon:St,key:xt,...ft}=Le;if(typeof De=="function"||ne(De)){const mt=ft.path;let qe=_e[mt];const{cachedResolve:nt,restResolve:Ft}=ze(ht,Y.store,ft),Ut={loadPromise:st(Ct,ft),restResolve:Ft,params:{current:U,...Y,...ft,...nt}},Kt=Be(He+1);if(qe)return Ge(qe,Ut,Kt,mt);try{qe=De(),qe=E(qe)?De:qe}catch{qe=De}return ne(qe)?qe.then(ur=>(qe=ur.default??ur,_e[mt]=qe,Ge(qe,Ut,Kt,mt))):(_e[mt]=qe,Ge(qe,Ut,Kt,mt))}return typeof De=="string"?er(De):De};return Be()},ut=b=>{const[j,re]=(0,A.useState)(b),[Y,U]=(0,A.useState)(),[Ne,Be]=(0,A.useState)(),He=(0,A.useRef)(),Le=(0,A.useRef)(),De=(0,A.useRef)(),ht=(0,A.useRef)(),Ct=()=>{typeof He.current=="function"&&(He.current({cancel:Q.cancelMsg}),He.current=null)},St=(0,A.useCallback)(nt=>{typeof nt=="function"?re(Ft=>({...Ft,...nt(Ft)})):g(nt)&&re(Ft=>({...Ft,...nt}))},[]),xt=(nt,Ft="pushState")=>{const{basepath:Ut,browserRouter:Kt}=ht.current,ur=De.current,hr=$t(nt,Ut,Kt,ur);if(!hr)return;const{path:xr,params:pr}=hr;qe({inputPath:xr,inputParams:pr},()=>history[Ft](nt?.state,"",xr))},ft=(0,A.useCallback)(nt=>xt(nt),[]),mt=(0,A.useCallback)(nt=>xt(nt,"replaceState"),[]),qe=(0,A.useCallback)(({inputPath:nt="",inputParams:Ft={}},Ut)=>{const Kt=+new Date,{browserRouter:ur,childKey:hr,idKey:xr,title:pr,routers:gr,beforeRender:Rr,afterRender:Ur,basepath:br,allowedNotFound:mr,...zr}=ht.current;if(!nt){const{path:or,params:Sr}=At(ur);nt=or,Ft={...Ft,...Sr}}const Ir=De.current;new Promise((or,Sr)=>{gr?.length||Sr("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),nt!==De.current&&typeof Rr=="function"?Rr({path:nt,params:Ft,prevPath:Ir},or,Sr):or()}).then(or=>{if(or===!1)return;const Sr=or?.path;if(Sr&&Ie(br,Sr,ur)!==nt){mt(or);return}Le.current=Le.current??nt;const{redirect:yr,current:Lr,menu:Wr}=Je(te(gr),nt.split("?")[0],Ft,hr,xr);if(yr){if(mr&&yr===se&&(typeof mr=="boolean"||typeof mr=="string"&&Vt(Le.current,mr)||z(mr)&&mr.find(Or=>Vt(Le.current,Or))))return;if(z(yr)){console.error(`\u522B\u95F9\uFF0C[${[nt,...yr].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return yr===se?mt({path:yr}):ft({path:yr,exact:!0})}Ut?.(),nt?.split("?")[0]!==De.current?.split("?")[0]&&Pt(),ke(Lr,pr);const Qr={eventBus:qt,store:Ht,useStore:Lt,...zr,updateRouter:St,emitRouter:Tt.subscribe,router:{push:ft,replace:mt},current:Lr,menu:Wr,inputPath:Le.current,prevPath:Ir,browserRouter:ur,basepath:br,title:pr,history:{...he,goBack:Or=>ft({...Or,path:Ir})}};Tt.setState(Qr);const Fr=vt(Qr);if(De.current=nt,Le.current=null,Ct(),ne(Fr)){const{promiseFn:Or,cancelFn:Br}=Te(Fr,{delay:Q.delay,msg:{timeout:Q.timeoutMsg}});return He.current=Br,Be(!0),Or.then(Pr=>{He.current=null;const{result:lr,errMsg:qr}=Pr,cr=qr===!1?lr:qr?.timeout?oe({error:{errMsg:`${nt} ${qr.timeout}`}}):null;cr&&(Be(!1),kt(Ur,Lr.slice(-1)[0],Kt),U(cr))}).catch(Pr=>{throw He.current=null,Be(!1),kt(Ur,Lr.slice(-1)[0],Kt),U(oe({error:Pr})),Pr})}kt(Ur,Lr.slice(-1)[0],Kt),U(Fr)}).catch(or=>{throw U(oe({error:or})),or})},[]);return(0,A.useEffect)(()=>{const{childKey:nt="children",idKey:Ft="path",browserRouter:Ut=!1,routers:Kt=[],basepath:ur="",exact:hr=!1,inputPath:xr="",inputParams:pr={},...gr}=j,Rr=Re(ur),Ur=ct(te(Kt),Ut,nt,Ft,Rr,hr);ht.current={...gr,childKey:nt,idKey:Ft,browserRouter:Ut,routers:Ur,basepath:Rr};const br=Ut?"popstate":"hashchange",mr=()=>qe({});return qe({inputPath:xr,inputParams:pr}),Wt.on(ft),Bt.on(mt),window.addEventListener(br,mr,!1),()=>{Ct(),Wt.off(ft),Bt.off(mt),window.removeEventListener(br,mr,!1)}},[j]),{updateRouter:St,output:Y,loading:Ne}},Qe=b=>{const{to:j,onClick:re,preventDefault:Y,stopPropagation:U=!0,exact:Ne=!0,target:Be,...He}=b,Le=()=>{const De=typeof j=="string"?{exact:Ne,path:j}:{exact:Ne,...j};Wt.emit(De)};return De=>{if(De.preventDefault(),U&&De.stopPropagation(),!He?.disabled){if(!Y){if(Be){const{browserRouter:ht,basepath:Ct}=Tt.getState();lt(j,Be,Ct,ht);return}Le()}typeof re=="function"&&re()}}};var wt=w(267),Et={};Et.styleTagTransform=ce(),Et.setAttributes=x(),Et.insert=N().bind(null,"head"),Et.domAPI=me(),Et.insertStyleElement=D();var _t=Ye()(wt.Z,Et);const Nt=wt.Z&&wt.Z.locals?wt.Z.locals:void 0,Qt=b=>{if(!b)return Nt.link;const j=b.trim().split(" ").filter(Boolean),re=j.find(Y=>Y==="active")?[Nt.active]:[];return[Nt.link,...re,...j].join(" ")},vr=b=>{const{to:j,onClick:re,preventDefault:Y,stopPropagation:U,exact:Ne,target:Be,className:He,...Le}=b;return(0,Ce.jsx)("span",{onClick:Qe(b),className:Qt(He),...Le})},sr=()=>{const[b,j]=(0,A.useState)(Tt.getState());return(0,A.useEffect)(()=>Tt.subscribe(re=>j(re)),[]),b},nr=Tt.getState,Cr=Tt.subscribe})();var h=y.rU,a=y.cb,v=y.Bv,P=y.yj,q=y.tv},18124:function(tt,le,l){var d;l.d(le,{Nr:function(){return A},PQ:function(){return Ce},Rx:function(){return xe},Vd:function(){return q},Wy:function(){return z},fH:function(){return h},r5:function(){return a},rE:function(){return Re},rf:function(){return ve},xd:function(){return oe}});var n=l(27378),Z={837:(R,we,Ve)=>{var Xe,it=Ve(810),ye=Symbol.for("react.element"),J=Symbol.for("react.fragment"),Pe=Object.prototype.hasOwnProperty,m=it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ae={key:!0,ref:!0,__self:!0,__source:!0};function S(ue,ie,Q){var se,he={},Fe=null,We=null;Q!==void 0&&(Fe=""+Q),ie.key!==void 0&&(Fe=""+ie.key),ie.ref!==void 0&&(We=ie.ref);for(se in ie)Pe.call(ie,se)&&!ae.hasOwnProperty(se)&&(he[se]=ie[se]);if(ue&&ue.defaultProps)for(se in ie=ue.defaultProps,ie)he[se]===void 0&&(he[se]=ie[se]);return{$$typeof:ye,type:ue,key:Fe,ref:We,props:he,_owner:m.current}}Xe=J,we.jsx=S,Xe=S},322:(R,we,Ve)=>{R.exports=Ve(837)},810:R=>{var we=Xe=>{var it={};return w.d(it,Xe),it},Ve=Xe=>()=>Xe;R.exports=d||(d=l.t(n,2))}},H={};function w(R){var we=H[R];if(we!==void 0)return we.exports;var Ve=H[R]={exports:{}};return Z[R](Ve,Ve.exports,w),Ve.exports}w.d=(R,we)=>{for(var Ve in we)w.o(we,Ve)&&!w.o(R,Ve)&&Object.defineProperty(R,Ve,{enumerable:!0,get:we[Ve]})},w.o=(R,we)=>Object.prototype.hasOwnProperty.call(R,we);var y={};(()=>{w.d(y,{fH:()=>we,r5:()=>m,Nd:()=>ie,KY:()=>Pe,Vd:()=>he,Nr:()=>We,D:()=>Ze,Wy:()=>kt,zX:()=>lt,Cd:()=>et,Yz:()=>$t,D9:()=>Vt,cb:()=>At,vO:()=>Zt,Rx:()=>Oe,OH:()=>$e,oR:()=>N,rE:()=>G,PQ:()=>K,rf:()=>Je,xd:()=>Se});var R=w(810);const we=f=>(O,M)=>{const[I,$]=(0,R.useState)(()=>{const _e=f?.getState(O);return _e!==void 0?_e:(M!==void 0&&f?.setState({[O]:M},!0),M)}),de=(0,R.useCallback)(_e=>f?.setState({[O]:typeof _e=="function"?_e(f?.getState(O)):_e}),[]),be=(0,R.useCallback)(_e=>f?.subscribe(O,_e),[]),Ae=(0,R.useCallback)((_e=_e)=>f?.clean(_e),[]);return(0,R.useEffect)(()=>{f?.subscribe(O,_e=>$(_e))},[]),[I,de,be,Ae]},Ve=f=>Object.prototype.toString.call(f).slice(8,-1).toLowerCase(),Xe=f=>Ve(f)==="object",it=f=>Ve(f)==="function",ye=f=>Ve(f)==="promise"||Xe(f)&&it(f.then),J=(f,O=12e4,M="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!ye(f))return{};let I=null,$=null;return{promiseFn:new Promise((de,be)=>{I=(Ae="canceled")=>{clearTimeout($),de({canceled:!0,errMsg:Ae})},O&&(O=typeof O!="number"?12e4:O,$=setTimeout(()=>I(M),O)),f.then(Ae=>{clearTimeout($),de({result:Ae,errMsg:!1})}).catch(Ae=>{clearTimeout($),be(Ae)})}),cancelFn:I}},Pe=()=>{const f=(0,R.useRef)([]);return(0,R.useEffect)(()=>()=>{f.current.map(O=>O.cancelFn()),f.current=[]},[]),{cancelablePromise:(0,R.useCallback)((O,M=!0)=>{const I=J(O,M);return f.current.indexOf(I)===-1&&f.current.push(I),I.promiseFn},[])}},m=(f={})=>{const{cancelablePromise:O}=Pe(),[M,I]=(0,R.useState)(f),$=(0,R.useRef)({}),de=(0,R.useRef)({}),be=(0,R.useCallback)((_e=null)=>{Array.isArray(_e)&&_e.length?_e.map(Ge=>$.current[Ge]=f[Ge]):$.current=f},[]),Ae=(0,R.useCallback)((_e,Ge,ze=!1)=>{const st=Object.keys(_e),vt=JSON.stringify(st.sort());if(!de.current[vt]){de.current[vt]=!0,ze&&be(Array.isArray(ze)?ze:st),st.map(ut=>{$.current[ut]||($.current[ut]={}),$.current[ut].pending=!0}),I({...$.current});for(let ut=0,Qe=st.length;ut<Qe;ut++){const wt=st[ut];O(_e[wt]).then(Et=>{let{result:_t,errMsg:Nt}=Et;ut===Qe-1&&(de.current[vt]=!1),typeof Ge=="function"&&(_t=Ge(_t)||_t),$.current[wt]={..._t,pending:!1},Nt===!1&&I({...$.current})}).catch(Et=>{throw ut===Qe-1&&(de.current[vt]=!1),$.current[wt]={error:Et,pending:!1},I({...$.current}),Et})}}},[]);return[M,Ae,be]},ae=f=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(f),S=f=>new Promise((O,M)=>{const I=new FileReader;I.readAsDataURL(f),I.addEventListener("load",()=>O(I.result)),I.addEventListener("error",$=>M($))}),ue=async f=>{if(!ae(f))return f;const O=await(await fetch(decodeURIComponent(f))).blob();return await S(O)},ie=f=>{const[O,M]=(0,R.useState)(f);return(0,R.useEffect)(()=>{(async I=>{const $=await ue(I);M($)})(f)},[f]),O},Q=(f,O)=>Object.prototype.hasOwnProperty.call(f??{},O),se=f=>Q(f,"current"),he=(f,O,M="click")=>{(0,R.useEffect)(()=>{const I=de=>{const be=se(f)?f.current:f;be?.contains&&!be.contains(de.target)&&O(de)},$=typeof M=="string"?[M]:M;return $.map(de=>{document.addEventListener(de,I,!1)}),()=>{$.map(de=>{document.removeEventListener(de,I,!1)})}},[f,O,M])},Fe=(f=()=>{},O=60)=>{let M=null;return function(...I){clearTimeout(M),M=setTimeout(()=>f.apply(this,I),O)}},We=(f,O=60)=>(0,R.useMemo)(()=>Fe(f,O),[O]),et=()=>{const f=(0,R.useRef)(!0);return f.current?(f.current=!1,!0):!1},Je=(f,O=[])=>{const M=et();(0,R.useEffect)(()=>{if(!M)return f()},O)},Ze=(f,O=450)=>{const[M,I]=(0,R.useState)(f);return Je(()=>{let $;return f||O===0?I(f):$=setTimeout(()=>I(f),O),()=>$&&clearTimeout($)},[f]),[M,I]},Ie=()=>![typeof window,typeof document].includes("undefined"),ct=f=>Ve(f).indexOf("element")>-1,pt=(f=null)=>Ie()?ct(f)?{width:f.clientWidth,height:f.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},rt=(f,O)=>{const M=[],I=f.children??[];for(let $=0,de=I.length;$<de;$++){const be=I[$];be.className.indexOf(O)>-1&&M.push(be)}return M.length===0?null:M.length===1?M[0]:M},Pt=(f,O)=>{getComputedStyle(f).position==="static"&&(f.style.position="relative");const M=document.createElement("object");return M.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),M.setAttribute("class","resize-sensor"),M.onload=()=>{M.contentDocument.defaultView.addEventListener("resize",O,!1),O()},M.type="text/html",f.appendChild(M),M.data="about:blank",M},ke=(f,O=60)=>{if(!Ie())return;f=se(f)?f.current:f??document.body;let M=rt(f,"resize-sensor"),I=[];const $=Fe(()=>I.map(_e=>_e(f)),O),de=_e=>{rt(f,"resize-sensor")||(M=Pt(f,$)),I.indexOf(_e)===-1&&I.push(_e)},be=_e=>{const Ge=I.indexOf(_e);Ge!==-1&&I.splice(Ge,1),I.length===0&&M&&Ae()},Ae=()=>{M&&M.parentNode&&(M.contentDocument&&M.contentDocument.defaultView.removeEventListener("resize",$,!1),M.parentNode.removeChild(M),M=void 0,I=[])};return{element:f,bind:de,unbind:be,destroy:Ae}},At=(f={})=>{const O=(0,R.useRef)(0),[M,I]=(0,R.useState)(f),$=(0,R.useCallback)(de=>{cancelAnimationFrame(O.current),O.current=requestAnimationFrame(()=>I(de))},[]);return(0,R.useEffect)(()=>()=>cancelAnimationFrame(O.current),[]),[M,$]},kt=(f=null,O=60)=>{const M=se(f)?f.current:f,{bind:I,destroy:$}=ke(M,O),[de,be]=At(pt(M));return(0,R.useEffect)(()=>(I(()=>M&&be(pt(M))),()=>$()),[M]),de},lt=f=>{const O=(0,R.useRef)(null);return(0,R.useLayoutEffect)(()=>{O.current=f}),(0,R.useCallback)(O.current,[])},$t=(f,O)=>{const M=(0,R.useRef)();(0,R.useEffect)(()=>{M.current=f},[f]),(0,R.useEffect)(()=>{if(O){const I=setInterval(()=>M.current(),O);return()=>clearInterval(I)}},[O])},Vt=f=>{const O=(0,R.useRef)();return(0,R.useEffect)(()=>{O.current=f},[f]),O.current},tr=(f=null)=>Ie()?ct(f)?{left:f.scrollLeft,top:f.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},Zt=(f=null)=>{const[O,M]=At(tr(f));return(0,R.useEffect)(()=>{const I=()=>M(tr(f)),$=ct(f)?f:window;return $.addEventListener("scroll",I,{capture:!1,passive:!0}),()=>$.removeEventListener("scroll",I)},[f]),O},zt=f=>Ve(f)==="array",Jt=f=>zt(f)&&!!f.length,Dt=(f,O,M=[],I=!1,$=null)=>Jt(f)?O?(M=typeof M=="string"?M.split(","):M,f.filter(de=>(M=M.length>0?M:Object.keys(de),M.filter(be=>{const Ae=de[be];if(Ae==null)return!1;if(I)return Ae===O;const _e=new RegExp(O,"gi"),Ge=Ae.toString().match(_e);return Ge&&$&&(de[be]=$(Ae.toString().replace(_e,`<span style="background-color:yellow">${Ge[0]}</span>`),{display:"inline-block"})),Ge}).length))):f:[],Wt=(f,O="id")=>{if(!Jt(f))return f;const M=[],I=[];return f.map($=>{const de=Xe($)?$[O]:$;I.includes(de)||(I.push(de),M.push($))}),M},Bt=f=>f?.$$typeof&&typeof f.$$typeof=="symbol"&&f.$$typeof.description==="react.element",Tt=f=>f?.__v_isVNode,qt=f=>{if(!zt(f)&&!Xe(f))return f;const O=zt(f)?[]:{};for(const M in f)if(Q(f,M)){const I=f[M];O[M]=Bt(I)||Tt(I)||typeof I!="object"?I:I!==f?qt(I):"cyclic"}else Object.setPrototypeOf(O,{[M]:f[M]});return O},Ht=qt,Lt=f=>(O,M="children")=>{if(!Array.isArray(O))return O;const I=Ht(O),$=de=>{const be=[];return de.map(Ae=>{if(Jt(Ae[M])){const _e=$(Ae[M])||[];Ae[M]=_e,_e.length>0&&be.push(Ae)}}),f(de,be)};return $(I)},rr=(f,O,M="name",I=!1,$="id",de="children",be)=>Lt((Ae,_e)=>Wt([...Dt(Ae,O,M,I,be),..._e],$))(f,de);var er=w(322);const ar=(f,O)=>(0,er.jsx)("div",{dangerouslySetInnerHTML:{__html:f},...O}),Oe=(f=null,O=ar)=>{const[M,I]=(0,R.useState)(f),$=(0,R.useCallback)((...de)=>{const[be,Ae,_e,Ge,ze,st]=de;if(!Ae)I(null);else{de=[be,Ae,_e,Ge,ze,st,O];const vt=rr(...de);I(vt)}},[]);return[M,$]},$e=f=>{const[O,M]=(0,R.useState)(f);return(0,R.useEffect)(()=>M(f),[f]),[O,M]},Ye=()=>{const f={};return{on:(O,M)=>{f[O]||(f[O]=[]),f[O].indexOf(M)===-1&&f[O].push(M)},emit:(O,M)=>{f[O]&&f[O].map(I=>I(M))},off:(O,M=null)=>{if(f[O]){if(typeof M!="function")return delete f[O];const I=f[O].indexOf(M);I>-1&&(f[O].splice(I,1),f[O].length||delete f[O])}}}},Ue=f=>{const O={};for(let M in f)Q(f,M)||(O[M]=f[M]);return O},me=(f,O)=>{if(!Xe(f))return O;if(!Xe(O))return f;const M={...Ue(f),...Ue(O)},I={...f,...O};return Object.keys(M).map($=>{Object.setPrototypeOf(I,{[$]:M[$]})}),I},T=(()=>{const{on:f,emit:O,off:M}=Ye(),I={};return{getState:$=>Ht(I[$]),setState:($,de=!1)=>{if(typeof $=="function"&&($=$(Ht(I))),!Xe($))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const be=Ht($);Object.keys(be).map(Ae=>{const _e=I[Ae],Ge=be[Ae],ze=Xe(Ge)&&Xe(_e)?me(_e,Ge):Ge;!de&&O(Ae,ze),I[Ae]=ze})},subscribe:($,de)=>(f($,de),()=>M($,de)),unsubscribe:M,clean:$=>{typeof $=="string"?I[$]=void 0:Array.isArray($)?$.map(de=>I[de]=void 0):Object.keys(I).map(de=>I[de]=void 0)}}})(),N=we(T),c=f=>f<10?"0"+f:f,x=(f=new Date)=>{const O=new Date(f),M=O.getFullYear(),I=O.getDay(),$=c(O.getMonth()+1),de=c(O.getDate()),be=c(O.getHours()),Ae=c(O.getMinutes()),_e=c(O.getSeconds());return[M,$,de,be,Ae,_e,I]},i=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],D=(f,O,M="-")=>f.replace(new RegExp(M,"g"),O),B=(f=new Date,O=["-","-"," ",":",":",""],M=i)=>{const I=x(f);let $="";return O.map((de,be)=>$+=(be===6?M[I[be]]:I[be]??"")+de),$},ce=()=>B(new Date,["-","-"," ",":",":"," ",""]),G=()=>{const[f,O]=(0,R.useState)("");return $t(()=>{O(ce())},1e3),[f]},ee=f=>++f,K=()=>{const[,f]=(0,R.useState)(0);return(0,R.useCallback)(()=>f(ee),[])},Se=()=>{const[f,O]=At(pt());return(0,R.useEffect)(()=>{const M=()=>O(pt());return window.addEventListener("resize",M,!1),()=>window.removeEventListener("resize",M,!1)},[]),f}})();var h=y.fH,a=y.r5,v=y.Nd,P=y.KY,q=y.Vd,A=y.Nr,_=y.D,z=y.Wy,g=y.zX,E=y.Cd,F=y.Yz,V=y.D9,X=y.cb,te=y.vO,xe=y.Rx,ne=y.OH,Te=y.oR,Re=y.rE,Ce=y.PQ,ve=y.rf,oe=y.xd},71090:function(tt,le,l){l.d(le,{$L2:function(){return Ka},A_F:function(){return Ci},B5o:function(){return gi},BWC:function(){return di},CLv:function(){return vi},Few:function(){return oi},JaC:function(){return Ga},Lgs:function(){return Di},MTn:function(){return qa},NA2:function(){return hi},Og:function(){return Ri},PTJ:function(){return ui},Qfx:function(){return li},UhT:function(){return Ya},Vcq:function(){return Pi},XBe:function(){return Ai},XBv:function(){return ci},_O2:function(){return Oi},_iG:function(){return ti},_vH:function(){return Si},afD:function(){return si},azd:function(){return _i},dKu:function(){return ii},dtG:function(){return ri},eyl:function(){return fi},f9u:function(){return Ni},fHt:function(){return Qa},gVz:function(){return ki},hd2:function(){return bi},jg2:function(){return Ei},k$y:function(){return Ti},mrB:function(){return ai},muM:function(){return Xa},nL5:function(){return xi},qg7:function(){return ni},rTd:function(){return mi},rWO:function(){return pi},tOc:function(){return Fi},vQq:function(){return Ja},xDX:function(){return ei},yZP:function(){return wi},yfi:function(){return Mi},ywV:function(){return yi}});var d={};(function(){d.d=function(e,t){for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}();var n={};d.d(n,{NzM:function(){return H},wBC:function(){return A},O39:function(){return z},cnu:function(){return V},E4D:function(){return te},TRp:function(){return ne},zI1:function(){return Re},Ufj:function(){return ve},GxO:function(){return Ve},cu2:function(){return it},BcS:function(){return J},lPd:function(){return Fe},dC1:function(){return et},$L2:function(){return Ze},Vji:function(){return m},YxP:function(){return se},UhT:function(){return Jt},JaC:function(){return Wt},o4B:function(){return Ht},Hlr:function(){return i},muM:function(){return $},OiV:function(){return T},KTn:function(){return be},lwL:function(){return _e},d9v:function(){return M},yCD:function(){return ze},qCK:function(){return vt},vQq:function(){return Qe},fHt:function(){return Et},azq:function(){return vr},dSY:function(){return Ne},MTn:function(){return St},RYO:function(){return Nt},WAo:function(){return ft},GVc:function(){return B},Emy:function(){return qe},v9O:function(){return Ft},DsO:function(){return Kt},_lj:function(){return hr},vO6:function(){return pr},xDX:function(){return yr},hf3:function(){return Vn},ip7:function(){return vn},uYe:function(){return He},DgJ:function(){return G},rae:function(){return gn},YBu:function(){return yn},_iG:function(){return fn},hXT:function(){return En},gQq:function(){return Cn},D_D:function(){return sn},$nD:function(){return Fn},dtG:function(){return jr},Y0R:function(){return Kn},qg7:function(){return Pn},Xxf:function(){return _n},tSM:function(){return Rn},Few:function(){return On},xHg:function(){return Tn},aoj:function(){return Mn},Dlm:function(){return tn},mrB:function(){return Nn},dKu:function(){return pe},v1d:function(){return Tr},afD:function(){return Ke},Lz5:function(){return It},xZX:function(){return Ot},G_1:function(){return fr},osI:function(){return Er},PTJ:function(){return _r},Qfx:function(){return dr},bti:function(){return Fr},XBv:function(){return bo},eyl:function(){return wo},y35:function(){return Eo},hKD:function(){return Nr},BWC:function(){return hn},oLi:function(){return y},NA2:function(){return Co},S3Y:function(){return Wr},pvT:function(){return no},m2f:function(){return rt},rWO:function(){return So},A$w:function(){return Fo},kJL:function(){return a},S9U:function(){return Ue},dYC:function(){return or},jUY:function(){return R},J_U:function(){return Po},kKo:function(){return E},VZO:function(){return _o},mf2:function(){return $e},w1q:function(){return Ao},Kn2:function(){return S},ncl:function(){return Ro},LWC:function(){return K},dqb:function(){return ke},Kjn:function(){return Oo},TaN:function(){return Dr},CBv:function(){return zr},rTd:function(){return Mr},B73:function(){return To},SSA:function(){return f},CLv:function(){return Mo},F$z:function(){return No},XT_:function(){return oo},omS:function(){return Do},poV:function(){return Zo},VXY:function(){return Io},xsP:function(){return Lo},HPs:function(){return jo},TSy:function(){return $o},B5o:function(){return Dn},u1A:function(){return Vo},WAY:function(){return Zn},I8J:function(){return ht},ywV:function(){return Bo},bEN:function(){return Ho},$45:function(){return Ko},TUk:function(){return Yo},T7B:function(){return ie},CEd:function(){return Go},IHq:function(){return Xo},SkG:function(){return uo},Smz:function(){return ar},nL5:function(){return rr},ON:function(){return qo},eiS:function(){return ea},Frc:function(){return ta},z5J:function(){return ra},scT:function(){return na},hd2:function(){return Ln},AnA:function(){return oa},kYX:function(){return aa},yZP:function(){return ia},IVd:function(){return In},SIr:function(){return ua},jg2:function(){return la},gVz:function(){return ca},puc:function(){return ha},Azz:function(){return pa},X5u:function(){return kt},dPh:function(){return ma},SMZ:function(){return ct},kro:function(){return P},nPi:function(){return va},US:function(){return ga},A_F:function(){return lr},_vH:function(){return nn},gmH:function(){return cr},DYV:function(){return ya},qi2:function(){return xa},tOc:function(){return ba},hau:function(){return Ea},FaZ:function(){return Br},uyF:function(){return ka},Vcq:function(){return Ca},XKW:function(){return Sa},azd:function(){return Tt},P2K:function(){return Fa},XBe:function(){return Ra},JZ7:function(){return po},ABi:function(){return Rr},ogC:function(){return Oa},Og:function(){return Ia},_O2:function(){return ln},P0C:function(){return La},Uo5:function(){return ja},Two:function(){return dn},tYQ:function(){return $a},tVn:function(){return Y},pHy:function(){return Va},k$y:function(){return br},yfi:function(){return Ua},fl8:function(){return za},f9u:function(){return Wa},ZV1:function(){return Ba},Lgs:function(){return Ha}});var H=(e,t="key",r="value")=>{const o={};return(e||[]).map(u=>o[u[t]]=u[r]),o},y=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),a=e=>y(e)==="array",P=e=>(t,r,o="id",u="children")=>{if(!a(t))return null;const C=(W,ge="")=>{for(let Me=0,at=W.length;Me<at;Me++){const dt=W[Me];if(dt[o]===r)return e(W,Me,ge)||W[Me];if(a(dt[u])){const Gt=C(dt[u],dt[o]);if(Gt)return Gt}}};return C(t),t},A=(e,t,r,o="id",u="children")=>P((C,W)=>C.splice(W,0,r))(e,t,o,u),z=(e,t,r,o,u="id",C="children")=>P((W,ge)=>{const Me=W[ge];Me.children?Me.children.splice(o,0,r):Me.children=[r]})(e,t,u,C),E=e=>y(e).indexOf("element")>-1,V=(e,t="")=>{if(!E(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),u=[...new Set([...r,...o])];e.className=u.join(" ")},te=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},ne=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},Re=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},ve=(e,t,r,o="id",u="children")=>P((C,W)=>{const ge=C[W];return ge[u]=[...ge[u]||[],...r],ge})(e,t,o,u),R=()=>![typeof window,typeof document].includes("undefined"),Ve=e=>{if(R())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=u=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},it=(e,t)=>{if(R())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(u=>u.getAttribute("huxy-css-hash")).filter(Boolean).find(u=>u===t))r();else{const u=document.createElement("style");u.onerror=C=>o(new Error(`Failed to load '${t}' style`)),u.onload=r,u.innerHTML=e,u.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(u=>u.href===e))r();else{const u=document.createElement("link");u.onerror=C=>o(new Error(`Failed to load '${e}'`)),u.onload=r,u.href=e,u.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}})},J=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},m=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:u})=>r[o]=u),r},S=e=>y(e)==="object";const ue=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,S(o)?t+=`${r}: ${ue(o)}`:Array.isArray(o)?t+=`${r}: ${se(o)}`:typeof o=="string"?t+=`${r}: '${o}'`:t+=`${r}: ${o}`}),`{${t}}`};var ie=ue;const Q=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,S(r)?t+=ie(r):Array.isArray(r)?t+=Q(r):typeof r=="string"?t+=`'${r}'`:t+=`${r}`}),`[${t}]`};var se=Q,Fe=e=>(t,r="id",o="children",u=-1)=>{if(!a(t))return t;const C={},W=t.map(ge=>ge[r]);return[...t].map(ge=>{const Me={...ge},{[r]:at}=Me;if(at!=null){let{parentId:dt}=Me;dt==null&&(dt=e?.(Me)??u,Me.parentId=dt),C[at]||(C[at]=[]),Me[o]=C[at],C[dt]||(C[dt]=[]),C[u]||(C[u]=[]),W.includes(dt)?C[dt].push(Me):C[u].push(Me)}}),C[u]},et=(e,t="id",r="children",o=-1)=>Fe(u=>u[t].match(/\S+(?=-\S+)/)?.[0]||o)(e,t,r,o),Ze=(e,t="path",r="children",o=null)=>Fe(u=>{const C=u[t],W=C.match(/.*\/[^:/]+\/:[^/]+/);return W?W[0].match(/(.*)\/:+/)?.[1]??o:C.match(/(.*)\/+/)?.[1]??o})(e,t,r,o),ct=()=>R()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),rt=(e,t)=>Object.prototype.hasOwnProperty.call(e??{},t),ke=e=>rt(e,"current"),kt=(e=0,t)=>{R()&&(t=ke(t)?t.current:t??window,t.scrollTo?.({top:e,behavior:"smooth"}))},$t=`.huxy-totop-bar {
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
}`;const Vt=()=>document.getElementsByClassName("huxy-totop-bar")[0],tr=e=>{if(Vt())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>kt(),!1),t},Zt=()=>{const e=Vt();e&&document.body.removeChild(e)};var Jt=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!R())return;it($t,"huxy-backtop-css");const r=()=>{ct()>e?tr(t):Zt()};return(()=>(document.addEventListener("scroll",r,!1),()=>{Zt(),document.removeEventListener("scroll",r,!1)}))()},Wt=(e=0,t=2)=>parseInt(String(e),t),Tt=(e=0,t=2)=>Number(e).toString(t),Ht=(e=0,t=2,r=16)=>Tt(Wt(e,t),r),rr=e=>{if(!S(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const u=o>0?"&":"?";t.push(`${u}${r}=${e[r]}`)}),t.join("")},ar=e=>{if(!S(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},$e=e=>y(e)==="function",Ue=e=>y(e)==="promise"||S(e)&&$e(e.then),T=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ue(e))return{};let o=null,u=null;return{promiseFn:new Promise((C,W)=>{o=(ge="canceled")=>{clearTimeout(u),C({canceled:!0,errMsg:ge})},t&&(t=typeof t!="number"?12e4:t,u=setTimeout(()=>o(r),t)),e.then(ge=>{clearTimeout(u),C({result:ge,errMsg:!1})}).catch(ge=>{clearTimeout(u),W(ge)})}),cancelFn:o}};const N=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>ar(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>rr(e).slice(1)}],c=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(u=>e[u]);if(o.length===1){const u=o[0],C=r?t:u;return C==="params"?{query:e[u]}:{result:e[u],type:C}}else if(o.length>1){const u=o.filter(W=>W!=="params").slice(-1)[0],C=r?t:u;return C==="params"?{query:e.params||e[u]}:{query:e.params,result:e[u],type:C}}};var i=(e,t)=>r=>(o,u={})=>{const{headers:C,dataType:W,data:ge,formData:Me,form:at,params:dt,...Gt}=u,Xt={data:ge,formData:Me,form:at,params:dt};let Jr;const{query:Zr,result:mo,type:Zi}=c(Xt,W)||{};if(!Gt.body&&mo){const pn=N.find(mn=>mn.type===Zi);Jr=pn.headers,Gt.body=pn.body(mo)}Zr&&(o=`${o}${rr(Zr)}`);const{promiseFn:Ii}=T(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Jr,...C},...Gt}),t);return Ii.then(({result:pn,errMsg:mn})=>e(mn?{status:408,statusText:mn}:pn))},B=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let u=!1;for(let C in o)rt(o,C)&&r(o[C])&&(o[C]="cyclic",u=!0);return u}return!1};return r(e)&&e};const ce=(e,t)=>{const r=y(e),o=y(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(B(e)&&B(t))return ce(e,t);for(let u in t)if(rt(e,u)!==rt(t,u)||!ce(e[u],t[u]))return!1;return!0};var G=ce,K=e=>e?.$$typeof&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",f=e=>e?.__v_isVNode;const O=e=>{if(!a(e)&&!S(e))return e;const t=a(e)?[]:{};for(const r in e)if(rt(e,r)){const o=e[r];t[r]=K(o)||f(o)||typeof o!="object"?o:o!==e?O(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var M=O,$=(e=100)=>{const t=[];let r=-1;const o=C=>{const W=t.length,ge=M(C);return G(ge,t[W-1]?.data)?{index:r,length:W,data:t[r]?.data}:(t.push({data:ge}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},u=(C=0)=>{const W=t.length;return r+=C,r=r<0?0:r>W-1?W-1:r,{index:r,length:W,data:M(t[r]?.data)}};return{record:o,cursor:u,jump:C=>(r=C,{index:r,length:t.length,data:M(t[r]?.data)}),undo:()=>u(-1),redo:()=>u(1),getList:()=>M(t),clean:()=>{t.length=0,r=-1}}},be=(e,t,r)=>{if(!a(e))return e;const o=e[t],u=e[r];return e.splice(t,1,u),e.splice(r,1,o),e},_e=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},ze=(e,t,r=".")=>{const o=e.split(r),u=t.split(r),C=o.length;let W=0;for(let ge=0;ge<C;ge++)if(Number(o[ge])<Number(u[ge])){W=C-ge;break}else if(Number(o[ge])>Number(u[ge]))break;return W},vt=(...e)=>(...t)=>{const[...r]=e,o=(...u)=>r.length===0?u[0]:o(r.pop()(...u));return o(...t)},Qe=e=>{if(!R())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},Et=e=>(t,r)=>{const{getState:o,setState:u,subscribe:C,unsubscribe:W,clean:ge}=e;return r!==void 0&&u({[t]:r},!0),{getState:()=>o(t),setState:(Me,at)=>u({[t]:Me},at),subscribe:Me=>C(t,Me),unsubscribe:()=>W(t),clean:()=>ge(t)}},Nt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),vr=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Nt(o))}});const sr=e=>e.startsWith("on"),nr=e=>e!=="children"&&!sr(e),Cr=(e,t)=>r=>e[r]!==t[r],b=(e,t)=>r=>!(r in t),j=e=>{const t=Object.keys(e);return{eventProps:t.filter(sr),propertyProps:t.filter(nr)}};var Y=(e,t,r)=>{const{eventProps:o,propertyProps:u}=j(t),{eventProps:C,propertyProps:W}=j(r);o.filter(b(t,r)).map(ge=>{const Me=ge.toLowerCase().slice(2);e.removeEventListener(Me,t[ge])}),u.filter(b(t,r)).map(ge=>e[ge]=""),W.filter(Cr(t,r)).map(ge=>e[ge]=r[ge]),C.filter(Cr(t,r)).map(ge=>{const Me=ge.toLowerCase().slice(2);e.addEventListener(Me,r[ge])})},Ne=e=>{if(!R())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return Y(t,{},e.props),t},He=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return delete e[t];const o=e[t].indexOf(r);o>-1&&(e[t].splice(o,1),e[t].length||delete e[t])}}}};const Le=e=>{const t={};for(let r in e)rt(e,r)||(t[r]=e[r]);return t};var ht=(e,t)=>{if(!S(e))return t;if(!S(t))return e;const r={...Le(e),...Le(t)},o={...e,...t};return Object.keys(r).map(u=>{Object.setPrototypeOf(o,{[u]:r[u]})}),o},St=()=>{const{on:e,emit:t,off:r}=He(),o={};return{getState:u=>M(o[u]),setState:(u,C=!1)=>{if(typeof u=="function"&&(u=u(M(o))),!S(u))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const W=M(u);Object.keys(W).map(ge=>{const Me=o[ge],at=W[ge],dt=S(at)&&S(Me)?ht(Me,at):at;!C&&t(ge,dt),o[ge]=dt})},subscribe:(u,C)=>(e(u,C),()=>r(u,C)),unsubscribe:r,clean:u=>{typeof u=="string"?o[u]=void 0:Array.isArray(u)?u.map(C=>o[C]=void 0):Object.keys(o).map(C=>o[C]=void 0)}}},ft=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...u)=>r(...o,...u);return r},qe=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,u=>u.toUpperCase()):r.replace(/^\S/,u=>u.toLowerCase())).join(""),Ft=(e,t)=>{const r=e.split(","),o=r[0].match(/:(.*?);/)[1],u=atob(r[1]);let C=u.length;const W=new Uint8Array(C);for(;C--;)W[C]=u.charCodeAt(C);return new File([W],t??+new Date,{type:o})},Kt=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},hr=(e,t,r="id",o="children")=>P((u,C)=>u.splice(C,1))(e,t,r,o),pr=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Rr=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),br=()=>{let e=Rr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},zr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),or=e=>{if(typeof e!="string")return!1;const t=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return e.match(t)},yr=async(e,t,r)=>{if(!R())return;r=r||br();const o=t?`${r}.${t}`:r,u=zr(e);if(u||or(e)){e=u?decodeURIComponent(e):e;const C=await fetch(e),W=C.headers.get("Content-Disposition"),ge=W&&decodeURIComponent(W.split(";")[1].split("=")[1]);C.blob().then(Me=>{const at=window.URL.createObjectURL(Me),dt=document.createElement("a");dt.href=at,dt.download=ge||o,dt.style.display="none",document.body.appendChild(dt),dt.click(),dt.parentNode.removeChild(dt),window.URL.revokeObjectURL(at)})}else{const C=new Blob([e]),W=window.URL.createObjectURL(C),ge=document.createElement("a");ge.href=W,ge.download=o,ge.style.display="none",document.body.appendChild(ge),ge.click(),ge.parentNode.removeChild(ge),window.URL.revokeObjectURL(W)}},Wr=(e=null)=>R()?E(e)?{width:e.clientWidth,height:e.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Fr=e=>{if(R())return e=ke(e)?e.current:e??document.body,e.getBoundingClientRect?.()},Br=e=>{if(!R())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},lr=(e,t={},r=!1)=>{if(E(e)){if(r){let o="";Object.keys(t).map(u=>{o+=`${u}: ${t[u]};`}),e.style=o;return}Object.keys(t).map(o=>e.style.setProperty(o,t[o]))}};const qr=(e=350)=>new Promise(t=>setTimeout(t,e)),cr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var nn=qr,Tr=async(e,t=15)=>{if(!R())return;if(typeof e=="string"&&(e=Br(e)),e=ke(e)?e.current:e,!E(e))return{};const r=e.cloneNode(!0);lr(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await nn(t);const o=Fr(r);return e.parentNode.removeChild(r),o};const jn=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,$n=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,en=(e,t)=>{t=`huxy-drop-arrow-${t}`;const r=e.getAttribute("class")??"";jn.test(r)?e.setAttribute("class",r.replace($n,t)):e.setAttribute("class",`${r} ${t}`)},Hr=async(e,t,r)=>{const{left:o,right:u,top:C,bottom:W}=Fr(e),{width:ge,height:Me}=Wr(),{width:at,height:dt}=await Tr(t);if(u<0||W<0||o>ge||C>Me)return{};if(r==="vertical"){const Gt={left:o+"px",top:W+10+"px",right:"auto",bottom:"auto"};let Xt="lt";o+at>ge&&(Gt.left=u-at+"px",Xt="rt"),W+10+dt>Me&&(Gt.top=C-10-dt+"px",Xt=Xt==="lt"?"lb":"rb"),lr(t,Gt),en(t,Xt)}else{const Gt={left:u+10+"px",top:C+"px",right:"auto",bottom:"auto"};let Xt="tl";u+10+at>ge&&(Gt.left=o-10-at+"px",Xt="tr"),C+dt>Me&&(Gt.top=W-dt+"px",Xt=Xt==="tl"?"bl":"br"),lr(t,Gt),en(t,Xt)}};var Vn=(e,t,r="horizontal")=>{const o=Kt(Hr),u=()=>o(e,t,r);window.addEventListener("scroll",u,!1),window.addEventListener("resize",u,!1);const C=()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u),lr(t,{left:"",top:"",right:"",bottom:""})};return Hr(e,t,r),C},vn=(e,t,r,o="id",u="children")=>P((C,W)=>C[W]={...C[W],...r})(e,t,o,u),gn=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const an=He();var yn=e=>{const{on:t,emit:r,off:o}=an;return{on:u=>t(e,u),emit:u=>r(e,u),off:u=>o(e,u)}};const xn=120*1e3,bn=e=>e.json().then(t=>t);var fn=(e=bn,t=xn)=>(r="get")=>i(e)((r||"get").toUpperCase()),Mr=e=>a(e)&&!!e.length,En=(e,t,r=[],o=!1,u=null)=>Mr(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(C=>(r=r.length>0?r:Object.keys(C),r.filter(W=>{const ge=C[W];if(ge==null)return!1;if(o)return ge===t;const Me=new RegExp(t,"gi"),at=ge.toString().match(Me);return at&&u&&(C[W]=u(ge.toString().replace(Me,`<span style="background-color:yellow">${at[0]}</span>`),{display:"inline-block"})),at}).length))):e:[],dn=(e,t="id")=>{if(!Mr(e))return e;const r=[],o=[];return e.map(u=>{const C=S(u)?u[t]:u;o.includes(C)||(o.push(C),r.push(u))}),r};const kn=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=M(t),u=C=>{const W=[];return C.map(ge=>{if(Mr(ge[r])){const Me=u(ge[r])||[];ge[r]=Me,Me.length>0&&W.push(ge)}}),e(C,W)};return u(o)};var Cn=(e,t,r="name",o=!1,u="id",C="children",W)=>kn((ge,Me)=>dn([...En(ge,t,r,o,W),...Me],u))(e,C),sn=(e,t)=>{const r=[],o=e.children??[];for(let u=0,C=o.length;u<C;u++){const W=o[u];W.className.indexOf(t)>-1&&r.push(W)}return r.length===0?null:r.length===1?r[0]:r},Fn=(e="")=>e.match(/\d+/g)?.sort((t,r)=>r-t)[0],jr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Kn=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},Pn=(e="")=>(e??"").replaceAll("//","/"),_n=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",Rn=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},On=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),u=e%3600,C=~~(u/60);return o<24?`${o}${t[2]}${C}${t[1]}${u%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},ln=e=>(t,r="children")=>{if(!a(t))return t;const o=(u,C=[])=>u.map((W,ge)=>{const Me=a(W[r]);if(W=e(W,C,ge,Me)||W,Me){const{[r]:at,...dt}=W;W[r]=o(at,[...C,{...dt,"@@index":ge}])}return W});return o(t)},Tn=(e,t="children")=>{const r=[];return ln(o=>{const{[t]:u,...C}=o;r.push(C)})(e,t),r},Mn=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const Xr=e=>e<10?"0"+e:e;var Nr=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),u=Xr(t.getMonth()+1),C=Xr(t.getDate()),W=Xr(t.getHours()),ge=Xr(t.getMinutes()),Me=Xr(t.getSeconds());return[r,u,C,W,ge,Me,o]},tn=(e,t=new Date)=>{e=Nr(e),t=Nr(t);const r=t.y-e.y,o=t.m-e.m,u=t.d-e.d,C=t.h-e.h,W=t.M-e.M,ge=new Date(t.y,t.m,0).getDate(),Me=(at,dt,Gt,Xt,Jr)=>{const Zr="\u524D";return dt<0&&(at-=1,dt+=Gt),at===0?dt+Jr+Zr:dt===0?at+Xt+Zr:at+Xt+dt+Jr+Zr};return r>0?Me(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?Me(o,u,ge,"\u4E2A\u6708","\u5929"):u>0?Me(u,C,24,"\u5929","\u5C0F\u65F6"):C>0?Me(C,W,60,"\u5C0F\u65F6","\u5206\u949F"):W>0?W+"\u5206\u949F\u524D":"\u521A\u521A"};const $r=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],yo=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var Nn=(e=new Date,t=["-","-"," ",":",":",""],r=$r)=>{const o=Nr(e);let u="";return t.map((C,W)=>u+=(W===6?r[o[W]]:o[W]??"")+C),u};const rn=["","webkit","moz","ms"],s=e=>rn.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),p=e=>rn.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),k=e=>rn.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),L=rn.map(e=>`${e}fullscreenchange`);var pe=e=>{if(!R())return;e=ke(e)?e.current:e??document.body;const t=s(document),r=p(e),o=k(document);document[t]?document[o]?.():e[r]?.()};const Ee=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var Ke=()=>{if(!R())return;const e=window.navigator.userAgent.toLowerCase(),t=Ee.find(r=>e.match(r.reg))??{};return{type:t.name,version:e.match(t.reg)[1]}};const ot=60*1e3,bt=60*ot,yt=24*bt;var It=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/yt);r-=yt*o;const u=~~(r/bt);r-=bt*u;const C=~~(r/ot);r-=ot*C;const W=~~(r/1e3);return`${o}\u5929${u}\u5C0F\u65F6${C}\u5206${W}\u79D2`};const jt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Rt=e=>{if(!Array.isArray(e))return jt;const t=[...jt];return e.map(r=>{const o=t.findIndex(u=>u.name===r.name||u["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Ot=e=>{const t=Rt(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return Br(t.join(""))},fr=(e=new Date)=>{const t=Nr(e);return new Date(t[0],t[1],0).getDate()},Er=(e=null)=>R()?E(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const ir=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>({type:"ios",model:e[1],version:e[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var _r=()=>{if(!R())return;const e=window.navigator.userAgent.toLowerCase(),t=ir.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},dr=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(u=>{const[C,W]=u.split("=");o[C]=W}),{path:t,params:o}}return{path:t}},Dr=()=>R()&&(window.ontouchstart||navigator.maxTouchPoints),hn=e=>{const{left:t,top:r}=Er();return{touchX:Dr()?e?.touches?.[0]?.pageX:e?.pageX||e?.clientX+t,touchY:Dr()?e?.touches?.[0]?.pageY:e?.pageY||e?.clientY+r}},bo=(e,t)=>{const{touchX:r,touchY:o}=hn(e),{x:u,y:C}=t?.getBoundingClientRect?.()??{};return{x:r-(u??0),y:o-(C??0)}},wo=(e,t,r="id",o="children")=>{if(!a(e))return null;const u=C=>{for(let W=0,ge=C.length;W<ge;W++){const Me=C[W];if(Me[r]===t)return[Me];if(a(Me[o])){const at=u(Me[o]);if(at)return[Me].concat(at)}}};return u(e)},Eo=(e,t,r)=>{if(!R())return;r=ke(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&lr(o,t),o.innerText=(e??"").replace(/[\r\n]/g,""),r.appendChild(o);const u=o.getBoundingClientRect();return r.removeChild(o),u};const ko=(e="")=>e.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var Co=(e={},t)=>{t=ko(t);const r=(o,u)=>{if(!u?.[0])return o;if(typeof o[u[0]]=="object")return r(o[u[0]],u.slice(1));if(!(u.length>1))return o[u[0]]};return r(e,t)},no=(e,t="")=>E(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),So=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,u=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${u})`;const C=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${u},${C})`},Fo=e=>{if(!R())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:u}=e;return t.width=o,t.height=u,r.drawImage(e,0,0,o,u),t},Po=(...e)=>!Number.isNaN(new Date(...e).valueOf()),_o=e=>y(e)==="error",Ao=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Ro=e=>e?.$$typeof&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Oo=e=>y(e)==="regexp",To=e=>S(e)&&!!Object.keys(e).length,Mo=()=>{if(R())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},No=e=>typeof e=="boolean"||e==null?`${e}`:Array.isArray(e)?se(e):S(e)?ie(e):e,oo=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",u=>r(u))}),Do=async e=>{if(!zr(e))return e;const t=await(await fetch(decodeURIComponent(e))).blob();return await oo(t)},Zo=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.crossOrigin="Anonymous",o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",u=>r(u)))}),Io=async(e,t,r=2e3)=>{for(;!t?.(e?.());)await nn(r)},Lo=(e,t=["{","}"])=>e?.trim?.().match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`))?.[1],jo=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const u=JSON.stringify(o),C=r.find(W=>W.key===u);if(!C){const W=e(...o);return r.push({key:u,result:W}),r.length>t&&r.shift(),W}return C.result}};const ao=(e,t,r="id")=>{if(!a(e))return t;if(!a(t))return e;const o={};return[...e,...t].map(u=>{const C=S(u)?u[r]??JSON.stringify(u):u;if(o[C]===void 0)o[C]=u;else{const W=o[C];S(W)&&S(u)?o[C]=Zn(W,u,r):a(W)&&a(u)?o[C]=ao(W,u,r):o[C]=u}}),Object.keys(o).map(u=>o[u])};var Dn=ao;const io=(e,t,r="id")=>{if(!S(e))return t;if(!S(t))return e;for(let o in t)rt(t,o)?S(e[o])&&S(t[o])?e[o]=io(e[o],t[o],r):a(e[o])&&a(t[o])?e[o]=Dn(e[o],t[o],r):e[o]=t[o]:Object.setPrototypeOf(e,{[o]:t[o]});return e};var Zn=io,$o=(e,...t)=>{const r=a(e)?Dn:Zn;return t.map(o=>e=r(e,o)),e},Vo=(e,t)=>{const r=e?.split(" ")??[],o=t?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},In=(e,t="")=>{if(!E(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(u=>!r.includes(u));e.className=o.join(" ")},Uo=`@keyframes huxy-message-animate-in {
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
}`;const so=()=>document.getElementsByClassName("huxy-message")[0],zo=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},Wo=(e,t,r)=>{const o=e?.dir??"auto",u=document.createElement("div");u.setAttribute("class",`message-content open ${t} ${o}`),u.setAttribute("data-id",r);const C=document.createElement("span");C.setAttribute("class","message"),C.innerText=e?.message??e;const W=document.createElement("i");return u.appendChild(W),u.appendChild(C),u},cn=(e,t=3250,r,o)=>{if(!R())return;it(Uo,"huxy-message-css");let u=so();u||(u=zo());const C=br(),W=Wo(e,o,C);return u.appendChild(W),t&&(setTimeout(()=>{u.removeChild(W),r?.()},t),setTimeout(()=>{In(W,"open")},t-250)),C};var Bo={success:(e,t,r)=>cn(e,t,r,"success"),warn:(e,t,r)=>cn(e,t,r,"warn"),warning:(e,t,r)=>cn(e,t,r,"warn"),error:(e,t,r)=>cn(e,t,r,"error"),info:(e,t,r)=>cn(e,t,r,"info"),destroy:e=>{const t=so();if(t)if(e){const r=t.querySelector(`[data-id="${e}"]`);r&&t.removeChild(r)}else for(;t.firstChild;)t.removeChild(t.firstChild)}},Ho=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[te(1-r),te(fr(t)-r)]},Ko=(e,t,r,o,u="id",C="children")=>{let W={};return P((ge,Me)=>(W=ge[Me],ge.splice(Me,1),!0))(e,t,u,C),z(e,r,W,o,u,C),e},Yo=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),Go=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(u=>t.includes(u)?o.push({key:u,value:e[u]}):r[u]=e[u]),{newObj:r,newQuery:o}},Xo=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},uo=(e="",t=2,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`};const lo="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",co="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Jo=e=>{const t={},r={},o=e.match(new RegExp(lo,"g")).map(C=>C.match(new RegExp(lo))).filter(Boolean),u=e.match(new RegExp(co,"g")).map(C=>C.match(new RegExp(co))).filter(Boolean);return o.map(C=>{const[,W,ge]=C;t[W]=ge,r[W]="base"}),u.map(C=>{const[,W,ge]=C;t[W]=(ge??"").trim(),r[W]="data"}),{obj:t,types:r}},Qo=(e,t,r)=>`<${e}>${t==="data"?`<![CDATA[${r}]]>`:r}</${e}>
`;var qo={xml2Obj:Jo,obj2Xml:(e,t)=>{let r="";return Object.keys(e).map(o=>{r+=Qo(o,t[o],e[o])}),`<xml>
    ${r}
  </xml>`}},ea=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!a(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},ta=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(u,C)=>u?o(u):r(C))),ra=()=>"#"+uo((~~(Math.random()*(1<<24))).toString(16),6),Ln=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),na=(e=[])=>e[Ln(e.length-1)],oa=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,u)=>{u===e-1?r[u]=t:(r[u]=Ln(1,t-1),t-=r[u])}),r},aa=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),ia=()=>Math.random()>.5;const sa=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var ua=(e,t=60)=>{if(!R())return;e=ke(e)?e.current:e??document.body;let r=sn(e,"resize-sensor"),o=[];const u=Kt(()=>o.map(Me=>Me(e)),t),C=Me=>{sn(e,"resize-sensor")||(r=sa(e,u)),o.indexOf(Me)===-1&&o.push(Me)},W=Me=>{const at=o.indexOf(Me);at!==-1&&o.splice(at,1),o.length===0&&r&&ge()},ge=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",u,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:C,unbind:W,destroy:ge}};const fo=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const u=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?u:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${u}${o}`)};var la=(e=0,t=0,r=0,o=1)=>{if(e.includes("rgb")){const u=e.match(/rgba?\((.+)\)/);if(u){const C=u[1]?.split(",").map(W=>W.trim());return fo(...C)}return e}return fo(e,t,r,o)},ca=(e,t="px")=>`${e}`.replace(t,"")-0;const ho=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),fa=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},da=()=>{const e=[],t=W=>{e.push(W),C(W)},r=()=>e[0],o=()=>e.shift(),u=W=>W.startTime=ho(),C=W=>{u(W),e.sort((ge,Me)=>ge.startTime-Me.startTime)};return{hub:e,push:t,peek:r,shift:o,update:C}};var ha=(e=5)=>{const{hub:t,push:r,peek:o,shift:u,update:C}=da(),W=fa(()=>{Me()&&W()}),ge=at=>ho()-at.startTime>e,Me=()=>{let at=o();for(;at;){if(ge(at)){C(at);break}const{task:dt}=at;typeof dt=="function"?(at.task=null,dt()):u(),at=o()}return at};return(at=()=>{})=>{r({task:at}),t.length<2&&W()}},pa=()=>R()&&document.documentElement.scrollHeight-ct()===Wr().height,ma=e=>{R()&&(e=ke(e)?e.current:e??window,e.scrollIntoView?.({behavior:"smooth",block:"center"}))},va={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch{t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},ga=e=>{const t=Ot(e);R()&&document.head.appendChild(...t)},ya=(e,t=null,r=!1)=>[...e||[]].sort((o,u)=>{const C=t?o[t]:o,W=t?u[t]:u;return!isNaN(Number(C))&&!isNaN(Number(C))?r?W-C:C-W:typeof C=="string"&&typeof W=="string"?r?W.localeCompare(C):C.localeCompare(W):typeof C=="string"&&typeof W=="number"?r?-1:1:typeof C=="number"||typeof C=="string"?r?1:-1:r?-1:1}),xa=e=>{if(!S(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},ba={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch{}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const wa=St();var Ea=Et(wa),ka=(e,t={},r="utils")=>{const o=[];e.replace(/\/\*[\s\S]*\*\//,"").split(`
`).map(C=>{const W=C.split(");").map(ge=>ge.replace(/(?<!:)\/\/[^\n]*/,"").trim()).filter(Boolean).map(ge=>`${ge})`);o.push(...W)});const u=o.filter(C=>/^[^\s/]+\([\s\S]*\)$/.test(C));if(u.length){const C=u.slice(-1)[0];C.indexOf("return ")!==0&&(e=e.replace(C,`
return ${C}`))}return window[r]=t,Function(`${e}`)()},Ca=()=>R()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),Sa=(e,...t)=>{const r=[];return e.map((o,u)=>{r.push(o,t[u]??"")}),r.join("")},Fa=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const Pa=e=>[12,fr(e),24,60,60],_a=(e=[],t=[],r=[])=>{let o=!1;const u=[];return t.map((C,W)=>{const ge=(o?C-1:C)-e[W];ge<0?(u[W]=ge+(r[W]||10),o=!0):(u[W]=ge,o=!1)}),u.reverse()};var po=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=Pa(t).reverse(),o=Nr(e).slice(0,-1).reverse(),u=Nr(t).slice(0,-1).reverse();return _a(o,u,r)};const Aa=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Ra=(e,t=new Date)=>{const r=po(e,t),o=r.findIndex(u=>u>0);return r.map((u,C)=>`${u||0}${Aa[C]}`).slice(o).join("")},Oa=(e,t)=>{E(e)&&(no(e,t)?In(e,t):V(e,t))};const Ta=()=>Dr()?{startKey:"touchstart",moveKey:"touchmove",endKey:"touchend"}:{startKey:"mousedown",moveKey:"mousemove",endKey:"mouseup"},Ma=(e,t,r)=>{r.addEventListener(e,t,!1)},Na=(e,t,r)=>{r.removeEventListener(e,t,!1)},Da=(e,t,r,o,u)=>{u.addEventListener(e,r,!1),document.addEventListener(t,o,!1)},Za=(e,t,r,o,u)=>{u.removeEventListener(e,r,!1),document.removeEventListener(t,o,!1)};var Ia=(e,t,r,o=document)=>{const{startKey:u,moveKey:C,endKey:W}=Ta(),ge=dt=>{e(dt,o),Da(C,W,Me,at,o)},Me=dt=>t(dt,o),at=dt=>{r(dt,o),Za(C,W,Me,at,o)};return Ma(u,ge,o),()=>Na(u,ge,o)},La=e=>(t,r="children")=>{if(!a(t))return t;const o=u=>(u.map(C=>{a(C[r])&&(C[r]=o(C[r]))}),e(u));return o(t)},ja=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),$a=(e,t="fuckId",r="children")=>ln((o,u,C)=>{o[t]=[...u.map(W=>W["@@index"]),C].join("-")})(e,r),Va=(e,t,r,o="children")=>P((u,C)=>{const W=u[C];return W[o]=[...W[o]||[],...r],!0})(e,t),Ua=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},za=e=>R()?(L.map(t=>document.addEventListener(t,e,!1)),()=>L.map(t=>document.removeEventListener(t,e,!1))):void 0,Wa=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:u="middle",font:C="20px microsoft yahei",fillStyle:W="rgba(202,202,202,0.4)",content:ge="\u8BF7\u52FF\u5916\u4F20",rotate:Me="-30",zIndex:at=1e3}={})=>{if(!R())return;e=ke(e)?e.current:e??document.body;const dt=e.firstChild;dt?.className==="watermark-canvas"&&e.removeChild(dt);const Gt=document.createElement("canvas");Gt.setAttribute("width",t),Gt.setAttribute("height",r);const Xt=Gt.getContext("2d");Xt.textAlign=o,Xt.textBaseline=u,Xt.font=C,Xt.fillStyle=W,Xt.rotate(Math.PI/180*Me),Xt.fillText(ge,parseFloat(t)/2,parseFloat(r)/2);const Jr=Gt.toDataURL(),Zr=document.createElement("div");Zr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${at};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Jr}')`),e.style.position="relative",e.insertBefore(Zr,e.firstChild)},Ba=(e=new Date)=>{const t=new Date(e).getDay();return[te(1-t),te(7-t)]},Ha=e=>{if(!Ue(e))return{};let t="pending",r;const o=e.then(u=>{t="success",r=u}).catch(u=>{t="error",r=u});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}},tu=n.NzM,ru=n.wBC,nu=n.O39,ou=n.cnu,au=n.E4D,iu=n.TRp,su=n.zI1,uu=n.Ufj,lu=n.GxO,cu=n.cu2,fu=n.BcS,du=n.lPd,hu=n.dC1,Ka=n.$L2,pu=n.Vji,mu=n.YxP,Ya=n.UhT,Ga=n.JaC,vu=n.o4B,gu=n.Hlr,Xa=n.muM,yu=n.OiV,xu=n.KTn,bu=n.lwL,wu=n.d9v,Eu=n.yCD,ku=n.qCK,Ja=n.vQq,Qa=n.fHt,Cu=n.azq,Su=n.dSY,qa=n.MTn,Fu=n.RYO,Pu=n.WAo,_u=n.GVc,Au=n.Emy,Ru=n.v9O,Ou=n.DsO,Tu=n._lj,Mu=n.vO6,ei=n.xDX,Nu=n.hf3,Du=n.ip7,Zu=n.uYe,Iu=n.DgJ,Lu=n.rae,ju=n.YBu,ti=n._iG,$u=n.hXT,Vu=n.gQq,Uu=n.D_D,zu=n.$nD,ri=n.dtG,Wu=n.Y0R,ni=n.qg7,Bu=n.Xxf,Hu=n.tSM,oi=n.Few,Ku=n.xHg,Yu=n.aoj,Gu=n.Dlm,ai=n.mrB,ii=n.dKu,Xu=n.v1d,si=n.afD,Ju=n.Lz5,Qu=n.xZX,qu=n.G_1,el=n.osI,ui=n.PTJ,li=n.Qfx,tl=n.bti,ci=n.XBv,fi=n.eyl,rl=n.y35,nl=n.hKD,di=n.BWC,ol=n.oLi,hi=n.NA2,al=n.S3Y,il=n.pvT,sl=n.m2f,pi=n.rWO,ul=n.A$w,ll=n.kJL,cl=n.S9U,fl=n.dYC,dl=n.jUY,hl=n.J_U,pl=n.kKo,ml=n.VZO,vl=n.mf2,gl=n.w1q,yl=n.Kn2,xl=n.ncl,bl=n.LWC,wl=n.dqb,El=n.Kjn,kl=n.TaN,Cl=n.CBv,mi=n.rTd,Sl=n.B73,Fl=n.SSA,vi=n.CLv,Pl=n.F$z,_l=n.XT_,Al=n.omS,Rl=n.poV,Ol=n.VXY,Tl=n.xsP,Ml=n.HPs,Nl=n.TSy,gi=n.B5o,Dl=n.u1A,Zl=n.WAY,Il=n.I8J,yi=n.ywV,Ll=n.bEN,jl=n.$45,$l=n.TUk,Vl=n.T7B,Ul=n.CEd,zl=n.IHq,Wl=n.SkG,Bl=n.Smz,xi=n.nL5,Hl=n.ON,Kl=n.eiS,Yl=n.Frc,Gl=n.z5J,Xl=n.scT,bi=n.hd2,Jl=n.AnA,Ql=n.kYX,wi=n.yZP,ql=n.IVd,ec=n.SIr,Ei=n.jg2,ki=n.gVz,tc=n.puc,rc=n.Azz,nc=n.X5u,oc=n.dPh,ac=n.SMZ,ic=n.kro,sc=n.nPi,uc=n.US,Ci=n.A_F,Si=n._vH,lc=n.gmH,cc=n.DYV,fc=n.qi2,Fi=n.tOc,dc=n.hau,hc=n.FaZ,pc=n.uyF,Pi=n.Vcq,mc=n.XKW,_i=n.azd,vc=n.P2K,Ai=n.XBe,gc=n.JZ7,yc=n.ABi,xc=n.ogC,Ri=n.Og,Oi=n._O2,bc=n.P0C,wc=n.Uo5,Ec=n.Two,kc=n.tYQ,Cc=n.tVn,Sc=n.pHy,Ti=n.k$y,Mi=n.yfi,Fc=n.fl8,Ni=n.f9u,Pc=n.ZV1,Di=n.Lgs},38901:function(tt,le,l){l.d(le,{Ab:function(){return H},Fr:function(){return w},JM:function(){return X},K$:function(){return v},h5:function(){return y},lK:function(){return g}});var d="-ms-",n="-moz-",Z="-webkit-",H="comm",w="rule",y="decl",h="@page",a="@media",v="@import",P="@charset",q="@viewport",A="@supports",_="@document",z="@namespace",g="@keyframes",E="@font-face",F="@counter-style",V="@font-feature-values",X="@layer"},48046:function(tt,le,l){l.d(le,{MY:function(){return we}});var d=l(38901),n=l(59985),Z=1,H=1,w=0,y=0,h=0,a="";function v(J,Pe,m,ae,S,ue,ie,Q){return{value:J,root:Pe,parent:m,type:ae,props:S,children:ue,line:Z,column:H,length:ie,return:"",siblings:Q}}function P(J,Pe){return assign(v("",null,null,"",null,null,0,J.siblings),J,{length:-J.length},Pe)}function q(J){for(;J.root;)J=P(J.root,{children:[J]});append(J,J.siblings)}function A(){return h}function _(){return h=y>0?(0,n.uO)(a,--y):0,H--,h===10&&(H=1,Z--),h}function z(){return h=y<w?(0,n.uO)(a,y++):0,H++,h===10&&(H=1,Z++),h}function g(){return(0,n.uO)(a,y)}function E(){return y}function F(J,Pe){return(0,n.tb)(a,J,Pe)}function V(J){switch(J){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X(J){return Z=H=1,w=(0,n.to)(a=J),y=0,[]}function te(J){return a="",J}function xe(J){return(0,n.fy)(F(y-1,ve(J===91?J+2:J===40?J+1:J)))}function ne(J){return te(Re(X(J)))}function Te(J){for(;(h=g())&&h<33;)z();return V(J)>2||V(h)>3?"":" "}function Re(J){for(;z();)switch(V(h)){case 0:append(R(y-1),J);break;case 2:append(xe(h),J);break;default:append(from(h),J)}return J}function Ce(J,Pe){for(;--Pe&&z()&&!(h<48||h>102||h>57&&h<65||h>70&&h<97););return F(J,E()+(Pe<6&&g()==32&&z()==32))}function ve(J){for(;z();)switch(h){case J:return y;case 34:case 39:J!==34&&J!==39&&ve(h);break;case 40:J===41&&ve(J);break;case 92:z();break}return y}function oe(J,Pe){for(;z()&&J+h!==47+10;)if(J+h===42+42&&g()===47)break;return"/*"+F(Pe,y-1)+"*"+(0,n.Dp)(J===47?J:z())}function R(J){for(;!V(g());)z();return F(J,y)}function we(J){return te(Ve("",null,null,null,[""],J=X(J),0,[0],J))}function Ve(J,Pe,m,ae,S,ue,ie,Q,se){for(var he=0,Fe=0,We=ie,et=0,Je=0,Ze=0,Ie=1,ct=1,pt=1,rt=0,Pt="",ke=S,At=ue,kt=ae,lt=Pt;ct;)switch(Ze=rt,rt=z()){case 40:if(Ze!=108&&(0,n.uO)(lt,We-1)==58){(0,n.Cw)(lt+=(0,n.gx)(xe(rt),"&","&\f"),"&\f")!=-1&&(pt=-1);break}case 34:case 39:case 91:lt+=xe(rt);break;case 9:case 10:case 13:case 32:lt+=Te(Ze);break;case 92:lt+=Ce(E()-1,7);continue;case 47:switch(g()){case 42:case 47:(0,n.R3)(it(oe(z(),E()),Pe,m,se),se);break;default:lt+="/"}break;case 123*Ie:Q[he++]=(0,n.to)(lt)*pt;case 125*Ie:case 59:case 0:switch(rt){case 0:case 125:ct=0;case 59+Fe:pt==-1&&(lt=(0,n.gx)(lt,/\f/g,"")),Je>0&&(0,n.to)(lt)-We&&(0,n.R3)(Je>32?ye(lt+";",ae,m,We-1,se):ye((0,n.gx)(lt," ","")+";",ae,m,We-2,se),se);break;case 59:lt+=";";default:if((0,n.R3)(kt=Xe(lt,Pe,m,he,Fe,S,Q,Pt,ke=[],At=[],We,ue),ue),rt===123)if(Fe===0)Ve(lt,Pe,kt,kt,ke,ue,We,Q,At);else switch(et===99&&(0,n.uO)(lt,3)===110?100:et){case 100:case 108:case 109:case 115:Ve(J,kt,kt,ae&&(0,n.R3)(Xe(J,kt,kt,0,0,S,Q,Pt,S,ke=[],We,At),At),S,At,We,Q,ae?ke:At);break;default:Ve(lt,kt,kt,kt,[""],At,0,Q,At)}}he=Fe=Je=0,Ie=pt=1,Pt=lt="",We=ie;break;case 58:We=1+(0,n.to)(lt),Je=Ze;default:if(Ie<1){if(rt==123)--Ie;else if(rt==125&&Ie++==0&&_()==125)continue}switch(lt+=(0,n.Dp)(rt),rt*Ie){case 38:pt=Fe>0?1:(lt+="\f",-1);break;case 44:Q[he++]=((0,n.to)(lt)-1)*pt,pt=1;break;case 64:g()===45&&(lt+=xe(z())),et=g(),Fe=We=(0,n.to)(Pt=lt+=R(E())),rt++;break;case 45:Ze===45&&(0,n.to)(lt)==2&&(Ie=0)}}return ue}function Xe(J,Pe,m,ae,S,ue,ie,Q,se,he,Fe,We){for(var et=S-1,Je=S===0?ue:[""],Ze=(0,n.Ei)(Je),Ie=0,ct=0,pt=0;Ie<ae;++Ie)for(var rt=0,Pt=(0,n.tb)(J,et+1,et=(0,n.Wn)(ct=ie[Ie])),ke=J;rt<Ze;++rt)(ke=(0,n.fy)(ct>0?Je[rt]+" "+Pt:(0,n.gx)(Pt,/&\f/g,Je[rt])))&&(se[pt++]=ke);return v(J,Pe,m,S===0?d.Fr:Q,se,he,Fe,We)}function it(J,Pe,m,ae){return v(J,Pe,m,d.Ab,(0,n.Dp)(A()),(0,n.tb)(J,2,-2),0,ae)}function ye(J,Pe,m,ae,S){return v(J,Pe,m,d.h5,(0,n.tb)(J,0,ae),(0,n.tb)(J,ae+1,-1),ae,S)}},53327:function(tt,le,l){l.d(le,{P:function(){return H},q:function(){return Z}});var d=l(38901),n=l(59985);function Z(w,y){for(var h="",a=0;a<w.length;a++)h+=y(w[a],a,w,y)||"";return h}function H(w,y,h,a){switch(w.type){case d.JM:if(w.children.length)break;case d.K$:case d.h5:return w.return=w.return||w.value;case d.Ab:return"";case d.lK:return w.return=w.value+"{"+Z(w.children,a)+"}";case d.Fr:if(!(0,n.to)(w.value=w.props.join(",")))return""}return(0,n.to)(h=Z(w.children,a))?w.return=w.value+"{"+h+"}":""}},59985:function(tt,le,l){l.d(le,{Cw:function(){return a},Dp:function(){return n},Ei:function(){return A},R3:function(){return _},Wn:function(){return d},fy:function(){return w},gx:function(){return h},tb:function(){return P},to:function(){return q},uO:function(){return v}});var d=Math.abs,n=String.fromCharCode,Z=Object.assign;function H(E,F){return v(E,0)^45?(((F<<2^v(E,0))<<2^v(E,1))<<2^v(E,2))<<2^v(E,3):0}function w(E){return E.trim()}function y(E,F){return(E=F.exec(E))?E[0]:E}function h(E,F,V){return E.replace(F,V)}function a(E,F){return E.indexOf(F)}function v(E,F){return E.charCodeAt(F)|0}function P(E,F,V){return E.slice(F,V)}function q(E){return E.length}function A(E){return E.length}function _(E,F){return F.push(E),E}function z(E,F){return E.map(F).join("")}function g(E,F){return E.filter(function(V){return!y(V,F)})}}}]);
