"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[942],{70060:function(t,e,n){n.r(e),n.d(e,{default:function(){return Gt}});var r,o=n(95193),i=n(61889),c=n(68870),s=n(39504),a=n(20890),l=n(23060),u=n(30418),d=n(10757),h=n(22020),p=n(76899),x=n(3992),f=n(29439),Z=n(30168),m=n(63204),j=n(55200),v=n(9585),g=n(94721),b=n(66647),y=n(81918),w=n(72791),k=n(43504),C=n(10658),T=n(95614),z=n(71310),D=n(82095),L=n(55942),A=n(75545),M=n(947),S=n(66218),H=n(66101),V=n(12761),q=n(42320),G=n(24351),P=n(60393),N=n(80184);function O(){var t=(0,h.$)(["page_home","ui"]).t,e=(0,w.useContext)(H.t).database,n=(0,V.Z)().gender,i=(0,q.Z)((function(){return M.Z.getAll}),[]),c=(0,w.useMemo)((function(){var t=e.chars.keys,r=(0,P.O)(G.N,(function(){return 0}));return i&&t.forEach((function(t){var e=i(t,n).elementKey;r[e]=r[e]+1})),{characterTally:r,characterTotal:t.length}}),[e,i,n]),l=c.characterTally,d=c.characterTotal,p=(0,q.Z)((function(){return S.Z.getAll}),[]),O=(0,w.useMemo)((function(){var t=e.weapons.values,n=(0,P.O)(G.yd,(function(){return 0}));return p&&t.forEach((function(t){var e=p(t.key).weaponType;n[e]=n[e]+1})),{weaponTally:n,weaponTotal:t.length}}),[e,p]),R=O.weaponTally,W=O.weaponTotal,_=(0,w.useMemo)((function(){var t=(0,P.O)(G.eV,(function(){return 0})),n=e.arts.values;return n.forEach((function(e){var n=e.slotKey;t[n]=t[n]+1})),{artifactTally:t,artifactTotal:n.length}}),[e]),B=_.artifactTally,F=_.artifactTotal,E=(0,u.Z)(),U=!(0,o.Z)(E.breakpoints.up("md"));return(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(v.Z,{title:(0,N.jsx)(a.Z,{variant:"h5",children:t(r||(r=(0,Z.Z)(["inventoryCard.title"])))}),avatar:(0,N.jsx)(m.Z,{fontSize:"large"})}),(0,N.jsx)(g.Z,{}),(0,N.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,N.jsx)(z.Z,{children:(0,N.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:k.rU,to:"/characters",children:[(0,N.jsx)(y.Z,{label:(0,N.jsxs)("strong",{children:[t("ui:tabs.characters")," ",d]}),icon:(0,N.jsx)(j.Z,{}),sx:{flexBasis:U?"100%":"auto",flexGrow:1,cursor:"pointer"},color:d?"primary":"secondary"}),Object.entries(l).map((function(t){var e=(0,f.Z)(t,2),n=e[0],r=e[1];return(0,N.jsx)(y.Z,{sx:{flexGrow:1,cursor:"pointer"},color:r?n:"secondary",icon:(0,N.jsx)(D.Z,{icon:A.z[n]}),label:(0,N.jsx)("strong",{children:r})},n)}))]})}),(0,N.jsx)(z.Z,{children:(0,N.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:k.rU,to:"/weapons",children:[(0,N.jsx)(y.Z,{label:(0,N.jsxs)("strong",{children:[t("ui:tabs.weapons")," ",W]}),icon:C.Z.svg.anvil,sx:{flexBasis:U?"100%":"auto",flexGrow:1,cursor:"pointer"},color:W?"primary":"secondary"}),Object.entries(R).map((function(t){var e,n=(0,f.Z)(t,2),r=n[0],o=n[1];return(0,N.jsx)(y.Z,{sx:{flexGrow:1,cursor:"pointer"},color:o?"success":"secondary",icon:(0,N.jsx)(L.Z,{src:null===(e=C.Z.weaponTypes)||void 0===e?void 0:e[r],size:2}),label:(0,N.jsx)("strong",{children:o})},r)}))]})}),(0,N.jsx)(z.Z,{children:(0,N.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:k.rU,to:"/artifacts",children:[(0,N.jsx)(y.Z,{label:(0,N.jsxs)("strong",{children:[t("ui:tabs.artifacts")," ",F]}),icon:(0,N.jsx)(D.Z,{icon:T.xe.flower}),sx:{flexBasis:U?"100%":"auto",flexGrow:1,cursor:"pointer"},color:F?"primary":"secondary"}),Object.entries(B).map((function(t){var e=(0,f.Z)(t,2),n=e[0],r=e[1];return(0,N.jsx)(y.Z,{sx:{flexGrow:1,cursor:"pointer"},color:r?"success":"secondary",icon:(0,N.jsx)(D.Z,{icon:T.xe[n]}),label:(0,N.jsx)("strong",{children:r})},n)}))]})})]})]})}var R,W=n(43136),_=JSON.parse(("[]","[]"));function B(){var t=(0,h.$)(["page_home","ui"]).t;return _.length?(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(v.Z,{title:(0,N.jsx)(a.Z,{variant:"h5",component:l.Z,color:"inherit",href:"https://www.youtube.com/",target:"_blank",rel:"noopener",children:t(R||(R=(0,Z.Z)(["vidGuideCard.title"])))}),avatar:(0,N.jsx)(W.Z,{fontSize:"large"})}),(0,N.jsx)(g.Z,{}),(0,N.jsx)(s.Z,{children:(0,N.jsx)(i.ZP,{container:!0,columns:{xs:1,sm:2},spacing:2,children:_.map((function(t){return(0,N.jsx)(i.ZP,{item:!0,xs:1,children:(0,N.jsx)(c.Z,{sx:{position:"relative",pb:"56.25%",pt:"25px",height:0,borderRadius:2,overflow:"hidden","> iframe":{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},children:(0,N.jsx)("iframe",{width:"560",height:"349",title:"Genshin Optimizer Guide",src:"https://www.youtube-nocookie.com/embed/".concat(t),frameBorder:0,allowFullScreen:!0})},t)},t)}))})})]}):null}var F,E,U,I,$,K,Y,J,Q,X,tt,et,nt,rt=n(27118),ot=n(74223),it=(0,ot.Z)((0,N.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),ct=(0,ot.Z)((0,N.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),st=n(35210),at=(0,ot.Z)((0,N.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description"),lt=(0,ot.Z)((0,N.jsx)("path",{d:"M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.32-8.34c1.17-1.17 1.17-3.07 0-4.24l-4.24-4.24c-1.15-1.15-3.01-1.17-4.18-.06l4.47 4.47z"}),"Handshake"),ut=n(18801),dt=n(40315),ht=n(40165),pt=n(24518),xt=[{tooltip:"Genshin Optimizer Discord",icon:(0,N.jsx)(D.Z,{icon:rt.omb}),url:"https://discord.com/",color:"discord"},{tooltip:"Genshin Optimizer Github",icon:(0,N.jsx)(it,{}),url:"https://github.com/",color:"white"},{tooltip:"Youtube (frzyc)",icon:(0,N.jsx)(W.Z,{}),url:"https://www.youtube.com/",color:"red"},{tooltip:"Twitch (frzyc)",icon:(0,N.jsx)(D.Z,{icon:rt.z0T}),url:"https://www.twitch.tv/",color:"twitch"},{tooltip:"Twitter (frzyc)",icon:(0,N.jsx)(ct,{}),url:"https://twitter.com/frzyc",color:"twitter"},{tooltip:"Patreon (frzyc)",icon:(0,N.jsx)(D.Z,{icon:rt.MkT}),url:"https://www.patreon.com/",color:"patreon"},{tooltip:"PayPal (frzyc)",icon:(0,N.jsx)(D.Z,{icon:rt.PDv}),url:"https://www.paypal.com/",color:"paypal"}],ft=[{title:function(t){return t(F||(F=(0,Z.Z)(["quickLinksCard.buttons.tyGuide.title"])))},icon:(0,N.jsx)(W.Z,{}),tooltip:function(t){return t(E||(E=(0,Z.Z)(["quickLinksCard.buttons.tyGuide.tooltip"])))},url:"https://www.youtube.com/",color:"red"},{title:function(t){return t(U||(U=(0,Z.Z)(["quickLinksCard.buttons.scanners.title"])))},icon:(0,N.jsx)(st.Z,{}),tooltip:function(t){return t(I||(I=(0,Z.Z)(["quickLinksCard.buttons.scanners.tooltip"])))},to:"/scanner",color:"primary"},{title:function(t){return t($||($=(0,Z.Z)(["quickLinksCard.buttons.patchNotes.title"])))},icon:(0,N.jsx)(at,{}),tooltip:function(t){return t(K||(K=(0,Z.Z)(["quickLinksCard.buttons.patchNotes.tooltip"])))},url:"".concat("https://github.com/","/releases"),color:"secondary"},{title:function(t){return t(Y||(Y=(0,Z.Z)(["quickLinksCard.buttons.kqm.title"])))},icon:(0,N.jsx)(lt,{}),tooltip:function(t){return t(J||(J=(0,Z.Z)(["quickLinksCard.buttons.kqm.tooltip"])))},url:"https://keqingmains.com/",color:"keqing"},{title:function(t){return t(Q||(Q=(0,Z.Z)(["quickLinksCard.buttons.devDiscord.title"])))},icon:(0,N.jsx)(D.Z,{icon:rt.omb}),tooltip:function(t){return t(X||(X=(0,Z.Z)(["quickLinksCard.buttons.devDiscord.tooltip"])))},url:"https://discord.com/",color:"discord"},{title:function(t){return t(tt||(tt=(0,Z.Z)(["quickLinksCard.buttons.good.title"])))},icon:(0,N.jsx)(ut.Z,{}),tooltip:function(t){return t(et||(et=(0,Z.Z)(["quickLinksCard.buttons.good.tooltip"])))},to:"/doc",color:"primary"}];function Zt(){var t=(0,h.$)(["page_home","ui"]).t;return(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(v.Z,{title:(0,N.jsx)(a.Z,{variant:"h5",children:t(nt||(nt=(0,Z.Z)(["quickLinksCard.title"])))}),avatar:(0,N.jsx)(dt.Z,{fontSize:"large"})}),(0,N.jsx)(g.Z,{}),(0,N.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,N.jsx)(c.Z,{display:"flex",justifyContent:"space-between",gap:1,children:xt.map((function(t){var e=t.tooltip,n=t.icon,r=t.url,o=t.color;return(0,N.jsx)(ht.Z,{title:e,placement:"top",arrow:!0,children:(0,N.jsx)(pt.Z,{fullWidth:!0,color:o,sx:{p:1,minWidth:0},component:l.Z,href:r,target:"_blank",rel:"noopener",children:n},e)},e)}))}),ft.map((function(e,n){var r,o=e.title,i=e.icon,c=e.tooltip,s=e.color;return"to"in e&&(r=(0,N.jsx)(pt.Z,{fullWidth:!0,color:s,component:k.rU,to:e.to,startIcon:i,children:o(t)},n)),"url"in e&&(r=(0,N.jsx)(pt.Z,{fullWidth:!0,color:s,component:l.Z,href:e.url,target:"_blank",rel:"noopener",startIcon:i,children:o(t)},n)),(0,N.jsx)(ht.Z,{title:c(t),placement:"top",arrow:!0,children:r},n)}))]})]})}var mt=(0,ot.Z)((0,N.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled"),jt=n(93758),vt=n(589),gt=n(52771);function bt(){var t=(0,w.useContext)(H.t).database,e=(0,w.useState)((function(){return t.displayTool.get()})),n=(0,f.Z)(e,2),r=n[0],o=r.timeZoneKey,i=r.resin,c=r.resinDate,l=n[1];(0,w.useEffect)((function(){return t.displayTool.follow((function(t,e){return l(e)}))}),[t]);var u=(0,w.useState)(new Date(Date.now()+vt.W3[o])),d=(0,f.Z)(u,2),h=d[0],p=d[1];(0,w.useEffect)((function(){var t=function e(){return p(new Date(Date.now()+vt.W3[o])),setTimeout((function(){t=e()}),gt.vL-Date.now()%gt.vL)}();return function(){return clearTimeout(t)}}),[o]);var Z=(0,w.useRef)(void 0);return(0,w.useEffect)((function(){if(i<jt.nD){var e=Date.now(),n=jt.nD-i,r=Math.min(Math.floor((e-c)/jt.T5),n),o=i+r,s=c+r*jt.T5;t.displayTool.set({resin:o,resinDate:s}),o<jt.nD&&(Z.current=setTimeout((function(){return(e=o+1)>=jt.nD?(Z.current&&clearTimeout(Z.current),Z.current=void 0):Z.current=setTimeout((function(){return console.log("set resin",e+1)}),jt.T5),void t.displayTool.set({resin:e,resinDate:(new Date).getTime()});var e}),e-s))}return function(){return Z.current&&clearTimeout(Z.current)}}),[t]),(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(v.Z,{title:(0,N.jsxs)(a.Z,{variant:"h5",children:[o," ",h.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:(0,N.jsx)(mt,{fontSize:"large"})}),(0,N.jsx)(g.Z,{}),(0,N.jsx)(s.Z,{children:(0,N.jsx)(z.Z,{children:(0,N.jsx)(b.Z,{sx:{p:2},component:k.rU,to:"/tools",children:(0,N.jsxs)(a.Z,{variant:"h2",sx:{textAlign:"center"},children:[(0,N.jsx)(L.Z,{src:C.Z.resin.fragile}),(0,N.jsxs)("span",{children:[i,"/",jt.nD]})]})})})})]})}var yt,wt,kt,Ct,Tt,zt,Dt=n.p+"static/media/frzyc.f212a854d96a06634299.png",Lt=n.p+"static/media/lantua.ee2d4bdd1f99b6b5d189.png",At=n.p+"static/media/van.7fffd8572b1a7cebf234.png",Mt=n.p+"static/media/stain.a1ff1f2839ae1dc7a7fc.png",St=n.p+"static/media/sin.62c279bb0076b8046b5b.png",Ht=n(35893),Vt=[{name:"frzyc",img:Dt,title:function(t){return t(yt||(yt=(0,Z.Z)(["teamCard.jobTitle.leadDev"])))},subtitle:"Insomniac in Chief",url:"https://github.com/"},{name:"Lantua",img:Lt,title:function(t){return t(wt||(wt=(0,Z.Z)(["teamCard.jobTitle.dev"])))},subtitle:"Copium Calculator",url:"https://github.com/"},{name:"Van",img:At,title:function(t){return t(kt||(kt=(0,Z.Z)(["teamCard.jobTitle.dev"])))},subtitle:"Waverider Stowaway",url:"https://github.com/"},{name:"\u2726 Sin \u2726",img:St,title:function(t){return t(Ct||(Ct=(0,Z.Z)(["teamCard.jobTitle.mod"])))},subtitle:"Ohh, shiny.",url:""},{name:"Stain",img:Mt,title:function(t){return t(Tt||(Tt=(0,Z.Z)(["teamCard.jobTitle.mod"])))},subtitle:"Australia Man",url:""}];function qt(){var t=(0,h.$)(["page_home","ui"]).t;return(0,N.jsxs)(x.Z,{children:[(0,N.jsx)(v.Z,{title:(0,N.jsx)(a.Z,{variant:"h5",children:t(zt||(zt=(0,Z.Z)(["teamCard.title"])))}),avatar:(0,N.jsx)(Ht.Z,{fontSize:"large"})}),(0,N.jsx)(g.Z,{}),(0,N.jsx)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,N.jsx)(i.ZP,{container:!0,columns:{xs:6,md:5},spacing:1,children:Vt.map((function(e,n){var r=e.name,o=e.img,u=e.title,d=e.subtitle,h=e.url;return(0,N.jsx)(i.ZP,{item:!0,xs:n<2?3:2,md:1,children:(0,N.jsx)(z.Z,{sx:{height:"100%"},children:(0,N.jsxs)(s.Z,{children:[(0,N.jsx)(c.Z,{component:"img",src:o,sx:{width:"100%",height:"auto",borderRadius:"50%"}}),(0,N.jsxs)(c.Z,{display:"flex",flexDirection:"column",children:[h?(0,N.jsx)(a.Z,{variant:"h6",sx:{textAlign:"center"},color:"inherit",component:l.Z,href:h,target:"_blank",rel:"noopener",children:(0,N.jsx)("strong",{children:r})}):(0,N.jsx)(a.Z,{variant:"h6",sx:{textAlign:"center"},children:(0,N.jsx)("strong",{children:r})}),(0,N.jsx)(a.Z,{variant:"subtitle1",sx:{textAlign:"center"},children:u(t)}),(0,N.jsx)(a.Z,{variant:"subtitle2",sx:{textAlign:"center",transform:"Stain"===r?"rotate(180deg)":void 0},color:"secondary.light",children:d})]})]})})},r)}))})})]})}function Gt(){var t=(0,u.Z)(),e=(0,o.Z)(t.breakpoints.up("lg"));return d.ZP.send({hitType:"pageview",page:"/home"}),e?(0,N.jsxs)(i.ZP,{container:!0,spacing:2,direction:"row-reverse",sx:{my:2},children:[(0,N.jsxs)(i.ZP,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,N.jsx)(Zt,{}),(0,N.jsx)(bt,{})]}),(0,N.jsxs)(i.ZP,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,N.jsx)(Pt,{}),(0,N.jsx)(O,{}),(0,N.jsx)(B,{}),(0,N.jsx)(qt,{})]})]}):(0,N.jsxs)(c.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,N.jsx)(Pt,{}),(0,N.jsx)(Zt,{}),(0,N.jsx)(O,{}),(0,N.jsx)(bt,{}),(0,N.jsx)(B,{}),(0,N.jsx)(qt,{})]})}function Pt(){var t=(0,h.$)("page_home").t;return(0,N.jsx)(x.Z,{children:(0,N.jsx)(s.Z,{children:(0,N.jsx)(a.Z,{variant:"subtitle1",children:(0,N.jsxs)(p.c,{t:t,i18nKey:"intro",children:["The ",(0,N.jsx)("strong",{children:"ultimate"})," ",(0,N.jsx)(l.Z,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:(0,N.jsx)("i",{children:"Genshin Impact"})})," calculator, GO will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with what you have."]})})})})}},63204:function(t,e,n){var r=n(74223),o=n(80184);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter")},40315:function(t,e,n){var r=n(74223),o=n(80184);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"InsertLink")},43136:function(t,e,n){n(72791);var r=n(74223),o=n(80184);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube")},66647:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(4942),o=n(87462),i=n(63366),c=n(72791),s=n(28182),a=n(94419),l=n(31402),u=n(66934),d=n(21217);function h(t){return(0,d.Z)("MuiCardActionArea",t)}var p=(0,n(75878).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),x=n(23701),f=n(80184),Z=["children","className","focusVisibleClassName"],m=(0,u.ZP)(x.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,n=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(e,"&:hover .".concat(p.focusHighlight),{opacity:(n.vars||n).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(e,"&.".concat(p.focusVisible," .").concat(p.focusHighlight),{opacity:(n.vars||n).palette.action.focusOpacity}),e})),j=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),v=c.forwardRef((function(t,e){var n=(0,l.Z)({props:t,name:"MuiCardActionArea"}),r=n.children,c=n.className,u=n.focusVisibleClassName,d=(0,i.Z)(n,Z),p=n,x=function(t){var e=t.classes;return(0,a.Z)({root:["root"],focusHighlight:["focusHighlight"]},h,e)}(p);return(0,f.jsxs)(m,(0,o.Z)({className:(0,s.Z)(x.root,c),focusVisibleClassName:(0,s.Z)(u,x.focusVisible),ref:e,ownerState:p},d,{children:[r,(0,f.jsx)(j,{className:x.focusHighlight,ownerState:p})]}))}))},23060:function(t,e,n){n.d(e,{Z:function(){return T}});var r=n(93433),o=n(29439),i=n(4942),c=n(63366),s=n(87462),a=n(72791),l=n(28182),u=n(94419),d=n(18529),h=n(12065),p=n(14036),x=n(66934),f=n(31402),Z=n(68221),m=n(42071),j=n(20890),v=n(21217);function g(t){return(0,v.Z)("MuiLink",t)}var b=(0,n(75878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(80184),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=(0,x.ZP)(j.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e["underline".concat((0,p.Z)(n.underline))],"button"===n.component&&e.button]}})((function(t){var e=t.theme,n=t.ownerState,r=(0,d.D)(e,"palette.".concat(function(t){return k[t]||t}(n.color)))||n.color;return(0,s.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,h.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),T=a.forwardRef((function(t,e){var n=(0,f.Z)({props:t,name:"MuiLink"}),i=n.className,d=n.color,h=void 0===d?"primary":d,x=n.component,j=void 0===x?"a":x,v=n.onBlur,b=n.onFocus,T=n.TypographyClasses,z=n.underline,D=void 0===z?"always":z,L=n.variant,A=void 0===L?"inherit":L,M=n.sx,S=(0,c.Z)(n,w),H=(0,Z.Z)(),V=H.isFocusVisibleRef,q=H.onBlur,G=H.onFocus,P=H.ref,N=a.useState(!1),O=(0,o.Z)(N,2),R=O[0],W=O[1],_=(0,m.Z)(e,P),B=(0,s.Z)({},n,{color:h,component:j,focusVisible:R,underline:D,variant:A}),F=function(t){var e=t.classes,n=t.component,r=t.focusVisible,o=t.underline,i={root:["root","underline".concat((0,p.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,u.Z)(i,g,e)}(B);return(0,y.jsx)(C,(0,s.Z)({color:h,className:(0,l.Z)(F.root,i),classes:T,component:j,onBlur:function(t){q(t),!1===V.current&&W(!1),v&&v(t)},onFocus:function(t){G(t),!0===V.current&&W(!0),b&&b(t)},ref:_,ownerState:B,variant:A,sx:[].concat((0,r.Z)(Object.keys(k).includes(h)?[]:[{color:h}]),(0,r.Z)(Array.isArray(M)?M:[M]))},S))}))}}]);
//# sourceMappingURL=942.991853f5.chunk.js.map