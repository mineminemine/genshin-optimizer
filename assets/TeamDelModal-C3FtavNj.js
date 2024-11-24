import{r as y,D as H,a as v,dD as L,dm as S,c5 as k,e as a,h as f,d as e,al as _,T as p,ch as E,y as T,cx as O,p as P,f as w,B as A,aw as q,q as j,cv as K,cz as N,N as I,u as R,cR as V,L as F,af as U,ag as W,M as B,ar as z,a9 as G,fE as J,ac as Q,am as X,i as $,ah as Y,m as Z,C as ee,aP as ae}from"./index-B4dgGWji.js";import{u as te}from"./useTeamChar-Bt1qKHN8.js";function se({optimizationTarget:t,customMultiTargets:m}){var l;const{data:i}=y.useContext(H),s=v(),c=y.useMemo(()=>L(i,t[0],s),[i,t,s]),{title:d,icon:h,action:n}=c??{},o=S(i.getDisplay(),t),{textSuffix:r,icon:g,name:x=t[0]==="custom"?(l=m[parseInt(t[1]??"")])==null?void 0:l.name:void 0}=(o&&k(o.info))??{};return a(E,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[h||g,e("span",{children:d}),!!n&&e(_,{color:"success",sx:{whiteSpace:"normal"},children:n})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(_,{sx:{whiteSpace:"normal"},children:[e("strong",{children:x}),r&&a("span",{children:[" ",r]})]})})]})}function ne({teamCharId:t,showSetting:m=!1,children:i}){const{t:s}=T("loadout"),c=v(),{name:d,description:h,buildIds:n,buildTcIds:o,optConfigId:r,customMultiTargets:g}=c.teamChars.get(t),{optimizationTarget:x}=O(r);return a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(P,{}),e(p,{variant:"h6",children:d}),!!h&&e(A,{title:e(p,{children:h}),children:e(w,{})}),m&&e(q,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:[s("loadoutHeader.builds"),e("strong",{children:n.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:[s("loadoutHeader.tcBuilds"),e("strong",{children:o.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(K,{}),a(p,{children:[s("loadoutHeader.mltTargets"),e("strong",{children:g.length})]})]})]}),x&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(N,{}),e(f,{children:s("loadoutHeader.optTarget")}),e(se,{customMultiTargets:g,optimizationTarget:x})]}),i]})}function ie({teamId:t,show:m,onHide:i,onDel:s}){const{t:c}=T("page_team"),d=v(),h=R(t),{name:n,description:o,loadoutData:r}=h,g=y.useMemo(()=>r.map(l=>{if(!l)return[];const{teamCharId:u}=l;return d.teams.values.filter(({loadoutData:C})=>C.find(D=>(D==null?void 0:D.teamCharId)===u))}),[d,r]),[x,b]=y.useState(()=>g.map((l,u)=>l.length===1?u:void 0).filter(V)),M=()=>{d.teams.remove(t),r.forEach((l,u)=>{!l||!x.includes(u)||d.teamChars.remove(l.teamCharId)}),s()};return e(Y,{open:m,onClose:i,children:a($,{children:[e(F,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:c("teamDelModal.teamName")}),e("strong",{children:n}),o&&e(A,{title:o,children:e(w,{})})]}),action:e(U,{onClick:i,children:e(W,{})})}),e(B,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(z,{severity:"info",children:e(G,{t:c,i18nKey:"teamDelModal.alert",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."})}),r.map((l,u)=>l?e(le,{teamCharId:l.teamCharId,selected:x.includes(u),onClick:()=>b(C=>J(C,u)),inTeams:g[u]},u):null)]}),e(B,{}),e(I,{sx:{display:"flex",justifyContent:"flex-end"},children:e(Q,{color:"error",startIcon:e(X,{}),onClick:M,children:c("teamDelModal.delBtn")})})]})})}function le({teamCharId:t,selected:m,onClick:i,inTeams:s}){const{t:c}=T("page_team"),d=te(t),{key:h}=d,n=Z(h),{target:o}=(n==null?void 0:n[h])??{},r=y.useMemo(()=>{if(!(!n||!o))return{data:o,teamData:n,compareData:void 0}},[o,n]);if(r)return e(H.Provider,{value:r,children:e($,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(ee,{onClick:i,children:e(ne,{teamCharId:t,children:e(ae,{color:s.length===1?"success":"warning",children:e(p,{children:s.length===1?c("teamDelModal.onlyCrrTeam"):c("teamDelModal.usingMltTeams",{count:s.length})})})})})})})}export{ne as L,se as O,ie as T};
