var Rt=Object.defineProperty,_t=Object.defineProperties;var zt=Object.getOwnPropertyDescriptors;var ht=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var dt=(x,o,C)=>o in x?Rt(x,o,{enumerable:!0,configurable:!0,writable:!0,value:C}):x[o]=C,g=(x,o)=>{for(var C in o||(o={}))Mt.call(o,C)&&dt(x,C,o[C]);if(ht)for(var C of ht(o))Et.call(o,C)&&dt(x,C,o[C]);return x},m=(x,o)=>_t(x,zt(o));(function(x,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],o):o((x=typeof globalThis!="undefined"?globalThis:x||self)["@bmunozg/react-image-area"]={},x.React)})(this,function(x,o){"use strict";function C(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var lt=C(o);const $={x:0,y:0,width:0,height:0,unit:"px"};function U(t,i,l){return Math.min(Math.max(t,i),l)}const G=(t,i,l,p)=>p==="pixel"?D(t,i,l):ct(t,i,l),ct=(t,i,l)=>t.unit==="%"?m(g(g({},$),t),{unit:"%"}):{unit:"%",x:t.x?t.x/i*100:0,y:t.y?t.y/l*100:0,width:t.width?t.width/i*100:0,height:t.height?t.height/l*100:0};function D(t,i,l){return t.unit?t.unit==="px"?m(g(g({},$),t),{unit:"px"}):{unit:"px",x:t.x?t.x*i/100:0,y:t.y?t.y*l/100:0,width:t.width?t.width*i/100:0,height:t.height?t.height*l/100:0}:m(g(g({},$),t),{unit:"px"})}const J=10,j={position:"absolute",outline:"1px solid rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.5)",width:J,height:J};var B={exports:{}},E={};(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var i={},l=0;l<10;l++)i["_"+String.fromCharCode(l)]=l;var p=Object.getOwnPropertyNames(i).map(function(v){return i[v]});if(p.join("")!=="0123456789")return!1;var A={};return"abcdefghijklmnopqrst".split("").forEach(function(v){A[v]=v}),Object.keys(Object.assign({},A)).join("")==="abcdefghijklmnopqrst"}catch{return!1}})();/** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var gt=lt.default,K=60103;if(E.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var Q=Symbol.for;K=Q("react.element"),E.Fragment=Q("react.fragment")}var ut=gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pt=Object.prototype.hasOwnProperty,wt={key:!0,ref:!0,__self:!0,__source:!0};function V(t,i,l){var p,A={},v=null,u=null;for(p in l!==void 0&&(v=""+l),i.key!==void 0&&(v=""+i.key),i.ref!==void 0&&(u=i.ref),i)pt.call(i,p)&&!wt.hasOwnProperty(p)&&(A[p]=i[p]);if(t&&t.defaultProps)for(p in i=t.defaultProps)A[p]===void 0&&(A[p]=i[p]);return{$$typeof:K,type:t,key:v,ref:u,props:A,_owner:ut.current}}E.jsx=V,E.jsxs=V,B.exports=E;const b=B.exports.jsx,S=B.exports.jsxs,yt=()=>S(o.Fragment,{children:[b("div",{"data-dir":"s","data-ord":"s",style:m(g({},j),{bottom:0,left:"50%",marginBottom:-5,marginLeft:-5,cursor:"s-resize"})}),b("div",{"data-dir":"n","data-ord":"n",style:m(g({},j),{top:0,left:"50%",marginTop:-5,marginLeft:-5,cursor:"n-resize"})}),b("div",{"data-dir":"w","data-ord":"w",style:m(g({},j),{top:"50%",left:0,marginTop:-5,marginLeft:-5,cursor:"w-resize"})}),b("div",{"data-dir":"e","data-ord":"e",style:m(g({},j),{top:"50%",right:0,marginTop:-5,marginRight:-5,cursor:"e-resize"})}),b("div",{"data-dir":"se","data-ord":"se",style:m(g({},j),{bottom:0,right:0,marginBottom:-5,marginRight:-5,cursor:"se-resize"})}),b("div",{"data-dir":"sw","data-ord":"sw",style:m(g({},j),{bottom:0,left:0,marginBottom:-5,marginLeft:-5,cursor:"sw-resize"})}),b("div",{"data-dir":"nw","data-ord":"nw",style:m(g({},j),{top:0,left:0,marginTop:-5,marginLeft:-5,cursor:"nw-resize"})}),b("div",{"data-dir":"ne","data-ord":"ne",style:m(g({},j),{top:0,right:0,marginTop:-5,marginRight:-5,cursor:"ne-resize"})})]}),xt=({area:t,onCropStart:i,showHandles:l,globalAreaStyle:p,customAreaRenderer:A,areaNumber:v})=>{const u={top:`${t.y}${t.unit}`,left:`${t.x}${t.unit}`,width:`${t.width}${t.unit}`,height:`${t.height}${t.unit}`};return S("div",{style:g(g(g({position:"absolute",border:"1px dashed rgba(0,0,0,0.5)",outline:"1px dashed rgba(255,255,255,0.5)",cursor:"move",boxSizing:"border-box",touchAction:"none"},u),p),t.areaStyle),onPointerDown:i,"data-wrapper":"wrapper",children:[A?A(m(g({},t),{areaNumber:v})):null,l?b(yt,{}):null]})},ft=({areas:t})=>b("table",{style:{position:"absolute",right:0,top:0},children:b("tbody",{children:t.map((i,l)=>S("tr",{children:[S("td",{children:["x: ",Math.round(i.x)]}),S("td",{children:["y: ",Math.round(i.y)]}),S("td",{children:["width: ",Math.round(i.width)]}),S("td",{children:["height: ",Math.round(i.height)]}),S("td",{children:["unit: ",i.unit]})]},l))})}),Z=(t,i)=>t!==null&&(!!i(t)||Z(t.parentNode,i)),_={capture:!0,passive:!1},mt=["e","w"],bt=["n","s"],vt=["nw","ne","se","sw"];x.AreaSelector=({maxAreas:t=1/0,unit:i="pixel",minWidth:l=0,minHeight:p=0,debug:A=!1,children:v,areas:u,onChange:z,maxWidth:tt,maxHeight:et,wrapperStyle:Ct,globalAreaStyle:At,customAreaRenderer:Yt,mediaWrapperClassName:Xt})=>{const Ot=o.useRef(null),it=o.useRef(null),[St,jt]=o.useState(0),[s,L]=o.useState({startClientX:0,startClientY:0,startAreaX:0,startAreaY:0,clientX:0,clientY:0,isResize:!1}),[T,H]=o.useState({areaChangeIndex:0,isChanging:!1}),M=()=>{const n=it.current;if(!n)return{x:0,y:0,width:0,height:0};const{x:c,y:a,width:h,height:w}=n.getBoundingClientRect();return{x:c,y:a,width:h,height:w}},rt=o.useCallback(n=>{const c=s.clientX-n.x,a=s.clientY-n.y<s.startAreaY;return c<s.startAreaX?a?"nw":"sw":a?"ne":"se"},[s]),I=o.useCallback(n=>{const c=M();return D(n,c.width,c.height)},[]),nt=o.useCallback(n=>{const c=M(),a=I(n),h=s.clientX-s.startClientX,w=s.clientY-s.startClientY;return a.x=U(s.startAreaX+h,0,c.width-a.width),a.y=U(s.startAreaY+w,0,c.height-a.height),a},[s,I]),at=o.useCallback(n=>{const c=M(),a=rt(c),h=I(n),w=s.ord?s.ord:a,y=s.clientX-s.startClientX,d=s.clientY-s.startClientY,e={unit:"px",x:0,y:0,width:0,height:0,isChanging:!0,isNew:!1};a==="ne"?(e.x=s.startAreaX,e.width=y,e.height=Math.abs(d),e.y=s.startAreaY-e.height):a==="se"?(e.x=s.startAreaX,e.y=s.startAreaY,e.width=y,e.height=d):a==="sw"?(e.x=s.startAreaX+y,e.y=s.startAreaY,e.width=Math.abs(y),e.height=d):a==="nw"&&(e.x=s.startAreaX+y,e.width=Math.abs(y),e.height=Math.abs(d),e.y=s.startAreaY+d);const f=function(R,Y,X,O,P=0,k=0,F=X,q=O){const r=g({},R);r.y<0&&(r.height=Math.max(r.height+r.y,k),r.y=0),r.x<0&&(r.width=Math.max(r.width+r.x,P),r.x=0);const ot=X-(r.x+r.width);ot<0&&(r.x=Math.min(r.x,X-P),r.width+=ot);const st=O-(r.y+r.height);return st<0&&(r.y=Math.min(r.y,O-k),r.height+=st),r.width<P&&(Y!=="sw"&&Y!="nw"||(r.x-=P-r.width),r.width=P),r.height<k&&(Y!=="nw"&&Y!="ne"||(r.y-=k-r.height),r.height=k),r.width>F&&(Y!=="sw"&&Y!="nw"||(r.x-=F-r.width),r.width=F),r.height>q&&(Y!=="nw"&&Y!="ne"||(r.y-=q-r.height),r.height=q),r}(e,a,c.width,c.height,l,p,tt,et);return vt.indexOf(w)>-1?(h.x=f.x,h.y=f.y,h.width=f.width,h.height=f.height):mt.indexOf(w)>-1?(h.x=f.x,h.width=f.width):bt.indexOf(w)>-1&&(h.y=f.y,h.height=f.height),h},[s,rt,I,l,p,tt,et]),W=o.useCallback(n=>{n.preventDefault(),n.stopPropagation();const{isChanging:c,areaChangeIndex:a}=T;if(!c)return;const h=M(),w=u[a];let y;if(L(f=>m(g({},f),{clientX:n.clientX,clientY:n.clientY})),y=s.isResize?at(w):nt(w),e=y,(d=w).width!==e.width||d.height!==e.height||d.x!==e.x||d.y!==e.y||d.unit!==e.unit){const f=G(y,h.width,h.height,i);z([...u.slice(0,a),g({},f),...u.slice(a+1)])}var d,e},[T,u,s,nt,z,i,at]),N=o.useCallback(n=>{n.preventDefault(),n.stopPropagation();const{isChanging:c,areaChangeIndex:a}=T;if(c){H({isChanging:!1,areaChangeIndex:-1}),L({startClientX:0,startClientY:0,startAreaX:0,startAreaY:0,clientX:0,clientY:0,isResize:!1});const h=u[a];z([...u.slice(0,a),m(g({},h),{isNew:!1,isChanging:!1}),...u.slice(a+1)])}},[T,u,z]);return o.useEffect(()=>(document.addEventListener("pointermove",W,_),document.addEventListener("pointerup",N,_),document.addEventListener("pointercancel",N,_),()=>{document.removeEventListener("pointermove",W,_),document.removeEventListener("pointerup",N,_),document.removeEventListener("pointercancel",N,_)}),[W,N]),S("div",{ref:Ot,style:g({position:"relative",display:"inline-block",cursor:"crosshair",boxSizing:"border-box",maxWidth:"100%",touchAction:"none",lineHeight:0},Ct),children:[b("div",{ref:it,onPointerDown:n=>{const c=n.currentTarget;if(c.dataset.wrapper||c.dataset.direction||Z(c,f=>{var R;return(R=f.dataset)==null?void 0:R.wrapper}))return;n.preventDefault(),n.stopPropagation();const a=M(),h=n.clientX-a.x,w=n.clientY-a.y,y={unit:"px",x:h,y:w,width:0,height:0,isChanging:!0,isNew:!0};L({startClientX:n.clientX,startClientY:n.clientY,startAreaX:h,startAreaY:w,clientX:n.clientX,clientY:n.clientY,isResize:!0}),jt(St+1);const d=G(y,a.width,a.height,i);let e;u.length<t?(z(u.concat(d)),e=u.length):(z([...u.slice(0,t-1),d]),e=t-1),H({areaChangeIndex:e,isChanging:!0})},style:{boxSizing:"border-box"},className:Xt,children:v}),u.map((n,c)=>b(xt,{area:n,showHandles:!n.isNew,onCropStart:a=>((h,w)=>{h.preventDefault(),h.stopPropagation();const y=M(),d=D(u[w],y.width,y.height),e=h.target.dataset.ord,f=Boolean(e);let R=h.clientX,Y=h.clientY,X=d.x,O=d.y;e&&(e==="ne"||e=="e"?(X=d.x,O=d.y+d.height):e==="se"||e==="s"?(X=d.x,O=d.y):e==="sw"||e=="w"?(X=d.x+d.width,O=d.y):e!=="nw"&&e!="n"||(X=d.x+d.width,O=d.y+d.height),R=X+y.x,Y=O+y.y),L({startClientX:R,startClientY:Y,startAreaX:X,startAreaY:O,clientX:h.clientX,clientY:h.clientY,isResize:f,ord:e}),H({isChanging:!0,areaChangeIndex:w})})(a,c),globalAreaStyle:At,customAreaRenderer:Yt,areaNumber:c+1},c)),A?b(ft,{areas:u}):null]})},Object.defineProperties(x,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
