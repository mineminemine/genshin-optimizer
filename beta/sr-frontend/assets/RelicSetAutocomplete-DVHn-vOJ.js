import{e as u,b7 as H,b8 as k,_ as p,ae as q,b9 as A,o as t,ba as G,bb as V,bc as W,bd as Y,be as $,bf as J,i as Q,k as U,j as X,Y as g,z as Z,B as K,p as F,m as j,bg as ee,r as R,aR as te,a2 as oe}from"./index-CRI9GZ7I.js";import{T as re,b as m,S as P,a as C}from"./StatDisplay-Db_1BrL5.js";import{M as y,D as T}from"./UploadCard-iMOmTSV8.js";import{a as se,G as ne}from"./Close-CNlYHnC2.js";const ae=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],le=["component","slots","slotProps"],ce=["component"];function ve(e,o){const{className:r,elementType:l,ownerState:n,externalForwardedProps:s,getSlotOwnerState:a,internalForwardedProps:c}=o,L=u(o,ae),{component:S,slots:d={[e]:void 0},slotProps:M={[e]:void 0}}=s,O=u(s,le),h=d[e]||l,i=H(M[e],n),b=k(p({className:r},L,{externalForwardedProps:e==="root"?O:void 0,externalSlotProps:i})),{props:{component:v},internalRef:N}=b,x=u(b.props,ce),E=q(N,i==null?void 0:i.ref,o.ref),w=a?a(x):{},z=p({},n,w),I=e==="root"?v||S:v,_=A(h,p({},e==="root"&&!S&&!d[e]&&c,e!=="root"&&!d[e]&&c,x,I&&{as:I},{ref:E}),z);return Object.keys(w).forEach(B=>{delete _[B]}),[h,_]}function xe({slotKey:e,iconProps:o={}}){switch(e){case"head":return t(J,{...o});case"hands":return t($,{...o});case"body":return t(Y,{...o});case"feet":return t(W,{...o});case"sphere":return t(V,{...o});case"rope":return t(G,{...o})}}function we({setKey:e}){return t(re,{ns:"relicNames_gen",key18:e})}var f={},de=U;Object.defineProperty(f,"__esModule",{value:!0});var ie=f.default=void 0,ue=de(Q()),pe=X,me=(0,ue.default)((0,pe.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");ie=f.default=me;function Ie({statKey:e,slotKey:o,setStatKey:r,defText:l,dropdownButtonProps:n={}}){return(o==="head"||o==="hands")&&e?t(Z,{sx:{p:1},bgt:"light",children:t(m,{statKey:g[o][0],showPercent:!0})}):t(T,{startIcon:e?t(P,{statKey:e}):void 0,title:t(K,{children:e?t(m,{statKey:e,showPercent:!0,disableIcon:!0}):l}),...n,children:g[o].map(s=>F(y,{selected:e===s,disabled:e===s,onClick:()=>r(s),children:[t(se,{children:t(P,{statKey:s})}),t(m,{statKey:s,showPercent:!0,disableIcon:!0})]},s))})}function _e({rarity:e,onRarityChange:o,filter:r,showNumber:l=!1,...n}){const{t:s}=j("relic");return t(T,{...n,title:e?t(D,{stars:e,showNumber:l}):s("editor.rarity"),color:e?"success":"primary",children:ee.map(a=>t(y,{disabled:r?!(r!=null&&r(a)):!1,onClick:()=>o(a),children:t(D,{stars:a,showNumber:l})},a))})}function D({stars:e,showNumber:o}){return o?F("span",{children:[e," ",t(C,{stars:1,inline:!0})]}):t(C,{stars:e,inline:!0})}function ge({relicSetKey:e,setRelicSetKey:o,label:r="",...l}){const{t:n}=j(["relic","relicNames_gen"]);r=r||n("relic:autocompleteLabels.set");const s=R.useMemo(()=>te.map(c=>({key:c,label:n(`relicNames_gen:${c}`)})),[n]),a=R.useCallback(c=>o(c??""),[o]);return t(ne,{options:s,valueKey:e,onChange:a,toImg:()=>t(oe,{children:" "}),label:r,...l})}export{we as R,xe as S,ge as a,_e as b,Ie as c,ie as d,ve as u};
