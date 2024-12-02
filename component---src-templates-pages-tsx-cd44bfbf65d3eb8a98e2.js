"use strict";(self.webpackChunkrevuedescolonies=self.webpackChunkrevuedescolonies||[]).push([[612],{8644:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=["January","February","March","April","May","June","July","August","September","October","November","December"],o=n(2780),a=n(1010),i=n(3551),s=n(7951),c=n(6540),l=n(4164),u=n(8473),p=n(1609),m=n(5659),d=n(4247),f=n(4467),g=n(973),h=n(9599),y=n(6641);const b=(e,t,n)=>{const r=e.keys[0];if(Array.isArray(t))t.forEach(((t,r)=>{n(((t,n)=>{r<=e.keys.length-1&&(0===r?Object.assign(t,n):t[e.up(e.keys[r])]=n)}),t)}));else if(t&&"object"==typeof t){(Object.keys(t).length>e.keys.length?e.keys:(o=e.keys,a=Object.keys(t),o.filter((e=>a.includes(e))))).forEach((o=>{if(e.keys.includes(o)){const a=t[o];void 0!==a&&n(((t,n)=>{r===o?Object.assign(t,n):t[e.up(o)]=n}),a)}}))}else"number"!=typeof t&&"string"!=typeof t||n(((e,t)=>{Object.assign(e,t)}),t);var o,a};function v(e){return`--Grid-${e}Spacing`}function x(e){return`--Grid-parent-${e}Spacing`}const w="--Grid-columns",k="--Grid-parent-columns",j=({theme:e,ownerState:t})=>{const n={};return b(e.breakpoints,t.size,((e,t)=>{let r={};"grow"===t&&(r={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(r={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(${k}) - (var(${k}) - ${t}) * (var(${x("column")}) / var(${k})))`}),e(n,r)})),n},S=({theme:e,ownerState:t})=>{const n={};return b(e.breakpoints,t.offset,((e,t)=>{let r={};"auto"===t&&(r={marginLeft:"auto"}),"number"==typeof t&&(r={marginLeft:0===t?"0px":`calc(100% * ${t} / var(${k}) + var(${x("column")}) * ${t} / var(${k}))`}),e(n,r)})),n},A=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={[w]:12};return b(e.breakpoints,t.columns,((e,t)=>{const r=t??12;e(n,{[w]:r,"> *":{[k]:r}})})),n},$=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return b(e.breakpoints,t.rowSpacing,((t,r)=>{const o="string"==typeof r?r:e.spacing?.(r);t(n,{[v("row")]:o,"> *":{[x("row")]:o}})})),n},G=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return b(e.breakpoints,t.columnSpacing,((t,r)=>{const o="string"==typeof r?r:e.spacing?.(r);t(n,{[v("column")]:o,"> *":{[x("column")]:o}})})),n},M=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return b(e.breakpoints,t.direction,((e,t)=>{e(n,{flexDirection:t})})),n},B=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${v("row")}) var(${v("column")})`}}),T=e=>{const t=[];return Object.entries(e).forEach((([e,n])=>{!1!==n&&void 0!==n&&t.push(`grid-${e}-${String(n)}`)})),t},O=(e,t="xs")=>{function n(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(n(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach((([e,r])=>{n(r)&&t.push(`spacing-${e}-${String(r)}`)})),t}return[]},E=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map((([e,t])=>`direction-${e}-${t}`)):[`direction-xs-${String(e)}`];var N=n(4848);const z=(0,y.A)(),C=(0,d.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function L(e){return(0,f.A)({props:e,name:"MuiGrid",defaultTheme:z})}var R=n(1848),_=n(5669);const F=function(e={}){const{createStyledComponent:t=C,useThemeProps:n=L,componentName:r="MuiGrid"}=e;function o(e,t,n=()=>!0){const r={};return null===e||(Array.isArray(e)?e.forEach(((e,o)=>{null!==e&&n(e)&&t.keys[o]&&(r[t.keys[o]]=e)})):"object"==typeof e?Object.keys(e).forEach((t=>{const o=e[t];null!=o&&n(o)&&(r[t]=o)})):r[t.keys[0]]=e),r}const a=t(A,G,$,j,M,B,S),i=c.forwardRef((function(e,t){const i=(0,g.A)(),s=n(e),d=(0,h.A)(s),{className:f,children:y,columns:b=12,container:v=!1,component:x="div",direction:w="row",wrap:k="wrap",size:j={},offset:S={},spacing:A=0,rowSpacing:$=A,columnSpacing:G=A,unstable_level:M=0,...B}=d,z=o(j,i.breakpoints,(e=>!1!==e)),C=o(S,i.breakpoints),L=e.columns??(M?void 0:b),R=e.spacing??(M?void 0:A),_=e.rowSpacing??e.spacing??(M?void 0:$),F=e.columnSpacing??e.spacing??(M?void 0:G),W={...d,level:M,columns:L,container:v,direction:w,wrap:k,spacing:R,rowSpacing:_,columnSpacing:F,size:z,offset:C},P=((e,t)=>{const{container:n,direction:o,spacing:a,wrap:i,size:s}=e,c={root:["root",n&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,...E(o),...T(s),...n?O(a,t.breakpoints.keys[0]):[]]};return(0,m.A)(c,(e=>(0,p.Ay)(r,e)),{})})(W,i);return(0,N.jsx)(a,{ref:t,as:x,ownerState:W,className:(0,l.A)(P.root,f),...B,children:c.Children.map(y,(e=>c.isValidElement(e)&&(0,u.A)(e,["Grid"])&&v&&e.props.container?c.cloneElement(e,{unstable_level:e.props?.unstable_level??M+1}):e))})}));return i.muiName="Grid",i}({createStyledComponent:(0,R.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,_.b)({props:e,name:"MuiGrid2"})});var W=F,P=n(4810),D=n(7437);var J=e=>{let{lang:t}=e;const n=(0,P.useStaticQuery)("3780696447").allTocJson.nodes.filter((e=>(console.log(e.hideFromToc,Boolean(e.hideFromToc)),!1===Boolean(e.hideFromToc))));console.log(n);const r=e=>{const n=new Map([["Annotated original","Original annoté"],["Annotated English translation","Traduction anglaise annotée"]]);return"en"===t?e:n.get(e)};return(0,D.jsx)(W,{container:!0,spacing:2},(0,D.jsx)(W,{size:6},(0,D.jsx)(i.A,{component:"h2",variant:"h2"},r("Annotated original"))),(0,D.jsx)(W,{size:6},(0,D.jsx)(i.A,{component:"h2",variant:"h2"},r("Annotated English translation"))),n.map((e=>(0,D.jsx)(c.Fragment,{key:e.teiBasePath},(0,D.jsx)(W,{size:6},(0,D.jsx)(P.Link,{to:`/${e.teiBasePath}-fr`},e.title.fr)),(0,D.jsx)(W,{size:6},(0,D.jsx)(P.Link,{to:`/${e.teiBasePath}-en`},e.title.en))))))};function I(e){let{location:t,data:n,pageContext:c}=e;const{modifiedTime:l}=c,{markdownRemark:u}=n,{frontmatter:p,html:m}=u,{title:d,path:f}=p,g=new Date(l),h=(g.getDate(),r[g.getMonth()],g.getFullYear(),decodeURIComponent(t.pathname));let y="en";for(const r of n.site.siteMetadata.menuLinks)r.fr.link===h&&(y="fr");const b="/"===t.pathname||t.pathname.match(/fr\/?$/)?(0,D.jsx)(i.A,{variant:"h3",component:"h1",gutterBottom:!1,dangerouslySetInnerHTML:{__html:n.site.siteMetadata.htmlTitle[y]}}):"",v=["/en/toc/","/fr/sommaire/"].includes(f)&&(0,D.jsx)(J,{lang:y});return(0,D.jsx)(o.A,{location:t.pathname},(0,D.jsx)(a.A,{title:d,lang:y}),(0,D.jsx)(s.A,{component:"main",maxWidth:"md"},b,(0,D.jsx)(i.A,{variant:"h3",component:"h1",gutterBottom:!1,sx:{marginBottom:"2rem"}},d),(0,D.jsx)(i.A,{variant:"body1",gutterBottom:!0,component:"div",dangerouslySetInnerHTML:{__html:m}}),v))}}}]);
//# sourceMappingURL=component---src-templates-pages-tsx-cd44bfbf65d3eb8a98e2.js.map