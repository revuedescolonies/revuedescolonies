"use strict";(self.webpackChunkrevuedescolonies=self.webpackChunkrevuedescolonies||[]).push([[990],{2022:function(e,a,t){t.d(a,{A:function(){return S}});var o=t(6540),l=t(4164),r=t(5659),i=t(3139),n=t(5003),c=t(4848),s=(0,n.A)((0,c.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),p=t(6852),d=t(8466),v=t(7881),m=t(1848),u=t(9077),b=t(8660),g=t(5669),y=t(8413),$=t(1609);function h(e){return(0,$.Ay)("MuiChip",e)}var C=(0,y.A)("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]);const f=(0,m.Ay)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e,{color:o,iconColor:l,clickable:r,onDelete:i,size:n,variant:c}=t;return[{[`& .${C.avatar}`]:a.avatar},{[`& .${C.avatar}`]:a[`avatar${(0,d.A)(n)}`]},{[`& .${C.avatar}`]:a[`avatarColor${(0,d.A)(o)}`]},{[`& .${C.icon}`]:a.icon},{[`& .${C.icon}`]:a[`icon${(0,d.A)(n)}`]},{[`& .${C.icon}`]:a[`iconColor${(0,d.A)(l)}`]},{[`& .${C.deleteIcon}`]:a.deleteIcon},{[`& .${C.deleteIcon}`]:a[`deleteIcon${(0,d.A)(n)}`]},{[`& .${C.deleteIcon}`]:a[`deleteIconColor${(0,d.A)(o)}`]},{[`& .${C.deleteIcon}`]:a[`deleteIcon${(0,d.A)(c)}Color${(0,d.A)(o)}`]},a.root,a[`size${(0,d.A)(n)}`],a[`color${(0,d.A)(o)}`],r&&a.clickable,r&&"default"!==o&&a[`clickableColor${(0,d.A)(o)})`],i&&a.deletable,i&&"default"!==o&&a[`deletableColor${(0,d.A)(o)}`],a[c],a[`${c}${(0,d.A)(o)}`]]}})((0,u.A)((({theme:e})=>{const a="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${C.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:a,fontSize:e.typography.pxToRem(12)},[`& .${C.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${C.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${C.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${C.icon}`]:{marginLeft:5,marginRight:-6},[`& .${C.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,i.X4)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,i.X4)(e.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${C.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${C.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter((0,b.A)(["contrastText"])).map((([a])=>({props:{color:a},style:{backgroundColor:(e.vars||e).palette[a].main,color:(e.vars||e).palette[a].contrastText,[`& .${C.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a].contrastTextChannel} / 0.7)`:(0,i.X4)(e.palette[a].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a].contrastText}}}}))),{props:e=>e.iconColor===e.color,style:{[`& .${C.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:a}}},{props:e=>e.iconColor===e.color&&"default"!==e.color,style:{[`& .${C.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.X4)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}},...Object.entries(e.palette).filter((0,b.A)(["dark"])).map((([a])=>({props:{color:a,onDelete:!0},style:{[`&.${C.focusVisible}`]:{background:(e.vars||e).palette[a].dark}}}))),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,i.X4)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.X4)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter((0,b.A)(["dark"])).map((([a])=>({props:{color:a,clickable:!0},style:{[`&:hover, &.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a].dark}}}))),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${C.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${C.avatar}`]:{marginLeft:4},[`& .${C.avatarSmall}`]:{marginLeft:2},[`& .${C.icon}`]:{marginLeft:4},[`& .${C.iconSmall}`]:{marginLeft:2},[`& .${C.deleteIcon}`]:{marginRight:5},[`& .${C.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter((0,b.A)()).map((([a])=>({props:{variant:"outlined",color:a},style:{color:(e.vars||e).palette[a].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a].mainChannel} / 0.7)`:(0,i.X4)(e.palette[a].main,.7)}`,[`&.${C.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,i.X4)(e.palette[a].main,e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,i.X4)(e.palette[a].main,e.palette.action.focusOpacity)},[`& .${C.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a].mainChannel} / 0.7)`:(0,i.X4)(e.palette[a].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a].main}}}})))]}}))),A=(0,m.Ay)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:t}=e,{size:o}=t;return[a.label,a[`label${(0,d.A)(o)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function k(e){return"Backspace"===e.key||"Delete"===e.key}var S=o.forwardRef((function(e,a){const t=(0,g.b)({props:e,name:"MuiChip"}),{avatar:i,className:n,clickable:m,color:u="default",component:b,deleteIcon:y,disabled:$=!1,icon:C,label:S,onClick:I,onDelete:x,onKeyDown:O,onKeyUp:z,size:R="medium",variant:w="filled",tabIndex:T,skipFocusWhenDisabled:L=!1,...D}=t,V=o.useRef(null),P=(0,p.A)(V,a),M=e=>{e.stopPropagation(),x&&x(e)},N=!(!1===m||!I)||m,X=N||x?v.A:b||"div",j={...t,component:X,disabled:$,size:R,color:u,iconColor:o.isValidElement(C)&&C.props.color||u,onDelete:!!x,clickable:N,variant:w},E=(e=>{const{classes:a,disabled:t,size:o,color:l,iconColor:i,onDelete:n,clickable:c,variant:s}=e,p={root:["root",s,t&&"disabled",`size${(0,d.A)(o)}`,`color${(0,d.A)(l)}`,c&&"clickable",c&&`clickableColor${(0,d.A)(l)}`,n&&"deletable",n&&`deletableColor${(0,d.A)(l)}`,`${s}${(0,d.A)(l)}`],label:["label",`label${(0,d.A)(o)}`],avatar:["avatar",`avatar${(0,d.A)(o)}`,`avatarColor${(0,d.A)(l)}`],icon:["icon",`icon${(0,d.A)(o)}`,`iconColor${(0,d.A)(i)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,d.A)(o)}`,`deleteIconColor${(0,d.A)(l)}`,`deleteIcon${(0,d.A)(s)}Color${(0,d.A)(l)}`]};return(0,r.A)(p,h,a)})(j),F=X===v.A?{component:b||"div",focusVisibleClassName:E.focusVisible,...x&&{disableRipple:!0}}:{};let W=null;x&&(W=y&&o.isValidElement(y)?o.cloneElement(y,{className:(0,l.A)(y.props.className,E.deleteIcon),onClick:M}):(0,c.jsx)(s,{className:(0,l.A)(E.deleteIcon),onClick:M}));let K=null;i&&o.isValidElement(i)&&(K=o.cloneElement(i,{className:(0,l.A)(E.avatar,i.props.className)}));let B=null;return C&&o.isValidElement(C)&&(B=o.cloneElement(C,{className:(0,l.A)(E.icon,C.props.className)})),(0,c.jsxs)(f,{as:X,className:(0,l.A)(E.root,n),disabled:!(!N||!$)||void 0,onClick:I,onKeyDown:e=>{e.currentTarget===e.target&&k(e)&&e.preventDefault(),O&&O(e)},onKeyUp:e=>{e.currentTarget===e.target&&x&&k(e)&&x(e),z&&z(e)},ref:P,tabIndex:L&&$?-1:T,ownerState:j,...F,...D,children:[K||B,(0,c.jsx)(A,{className:(0,l.A)(E.label),ownerState:j,children:S}),W]})}))},1935:function(e,a,t){var o=t(4705);a.A=o.A},4705:function(e,a,t){function o(e,a=166){let t;function o(...o){clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),a)}return o.clear=()=>{clearTimeout(t)},o}t.d(a,{A:function(){return o}})}}]);
//# sourceMappingURL=c5209053cd714bfe6b86e3668bab95352cb7f13a-c5dc8c77ffdf45179ee7.js.map