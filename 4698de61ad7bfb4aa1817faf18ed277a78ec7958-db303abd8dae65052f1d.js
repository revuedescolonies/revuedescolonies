(self.webpackChunkrevuedescolonies=self.webpackChunkrevuedescolonies||[]).push([[979],{463:function(e,t,r){"use strict";r.d(t,{n:function(){return o}});var n=r(6540),i=r(7437);const o=e=>{let{children:t,node:o}=e;const s=r.g?new r.g.XMLSerializer:new XMLSerializer;if(1===o.nodeType){const e=o;return n.createElement(e.tagName,{},(0,i.jsx)(n.Fragment,null,(0,i.jsx)("span",{hidden:!0,"aria-hidden":!0,"data-original":!0,dangerouslySetInnerHTML:{__html:s.serializeToString(e)}}),t))}return(0,i.jsx)(n.Fragment,null,(0,i.jsx)("span",{hidden:!0,"aria-hidden":!0,"data-original":!0,dangerouslySetInnerHTML:{__html:o.textContent||""}}),t)}},469:function(e,t,r){"use strict";r.d(t,{B8:function(){return f},Eg:function(){return c},Gk:function(){return v},L7:function(){return p},Tv:function(){return l},bx:function(){return h},fT:function(){return m},ld:function(){return u},oS:function(){return b},vY:function(){return d}});var n=r(8168),i=r(6540),o=r(6071),s=r(463),a=r(7437);const u=e=>Array.from(e).reduce(((e,t)=>(e["ref"===t.name?"Ref":t.name]=t.value,e)),{}),l=e=>{if(1===e.teiNode.nodeType){const t=e.teiNode;return i.createElement(t.localName,Object.assign({},u(t.attributes)),(0,a.jsx)(o.AW,{teiNodes:t.childNodes,availableRoutes:e.availableRoutes}))}return(0,a.jsx)(o.de,e)},c=e=>(0,a.jsx)(s.n,{node:e.teiNode},(0,a.jsx)("pre",null,(0,a.jsx)(o.AW,(0,n.A)({teiNodes:e.teiNode.childNodes},e)))),d=e=>{const t=e.teiNode,r=t.getAttribute("url");if(!r)return null;const n={src:r};return t.getAttribute("width")&&(n.width=t.getAttribute("width")||""),t.getAttribute("height")&&(n.height=t.getAttribute("width")||""),(0,a.jsx)(s.n,{node:e.teiNode},(0,a.jsx)("img",n))},f=e=>{const t=e.teiNode;if("gloss"!==t.getAttribute("type"))return(0,a.jsx)(l,e);const r=Array.from(t.childNodes);return(0,a.jsx)(s.n,{node:e.teiNode},(0,a.jsx)("dl",null,r.map(((t,r)=>{if(1!==t.nodeType)return(0,a.jsx)(o.de,{key:"t-"+r,teiNode:t,availableRoutes:e.availableRoutes});const i=t;switch(i.localName){case"tei-label":return(0,a.jsx)("dt",{key:"tt-"+r},(0,a.jsx)(o.AW,(0,n.A)({teiNodes:i.childNodes},e)));case"tei-item":return(0,a.jsx)("dd",{key:"td-"+r},(0,a.jsx)(o.AW,(0,n.A)({teiNodes:i.childNodes},e)))}}))))},p=e=>{const t=e.teiNode;if("end"!==t.getAttribute("place"))return(0,a.jsx)(l,e);const r="_note_"+t.getAttribute("data-idx");return(0,a.jsx)(s.n,{node:e.teiNode},(0,a.jsx)("sup",null,(0,a.jsx)("a",{id:"src"+r,href:"#"+r},t.getAttribute("data-idx"))))},h=e=>{const t=e.teiNode.getAttribute("target")||"";return(0,a.jsx)(s.n,{node:e.teiNode},(0,a.jsx)("a",{href:t},t))},b=e=>{const t=e.teiNode,r=t.getAttribute("target")||"";return(0,a.jsx)(s.n,{node:e.teiNode},(0,a.jsx)("a",{href:r},(0,a.jsx)(o.AW,(0,n.A)({teiNodes:t.childNodes},e))))},m=e=>{const t=e.teiNode,r=[],s=Array.from(t.getElementsByTagName("tei-note")).reduce(((t,r,i)=>("end"===r.getAttribute("place")&&(r.setAttribute("data-idx",(i+1).toString()),t.push((0,a.jsx)("li",{id:"_note_"+(i+1)},(0,a.jsx)(o.AW,(0,n.A)({key:"en"+i,teiNodes:r.childNodes},e))))),t)),[]);s.length>0&&r.push((0,a.jsx)("ol",{key:"endnotes",className:"ceteicean-notes"},s));const l=i.createElement("tei-tei",Object.assign({},u(t.attributes)),(0,a.jsx)(o.AW,(0,n.A)({teiNodes:e.teiNode.childNodes},e)));return(0,a.jsx)(i.Fragment,null,[],l,r)},v=e=>{const t=e.teiNode;return i.createElement(t.localName.toLowerCase(),Object.assign({},u(t.attributes)),(0,a.jsx)(s.n,{node:e.teiNode}))}},4655:function(e,t,r){"use strict";r.d(t,{A:function(){return c}});var n=r(6540),i=r(6071),o=r(7387),s=r(8593);var a=function(e){for(const r of e){const e=r.toLowerCase();if(!window.customElements.get(e))try{window.customElements.define(e,function(e){function t(){var t;return(t=e.call(this)||this).matches(":defined")||t.setAttribute("data-processed",""),t}return(0,o.A)(t,e),t.prototype.connectedCallback=function(){this.hasAttribute("data-processed")||this.setAttribute("data-processed","")},t}((0,s.A)(HTMLElement)))}catch(t){console.log(r+" couldn't be registered."),console.log(t)}}},u=r(469),l=r(7437);function c(e){let{name:t,prefixed:o,elements:s,routes:c}=e;const d=r.g?new r.g.DOMParser:new DOMParser;(0,n.useEffect)((()=>{a(s)}));const f=d.parseFromString(o,"text/xml"),p={"tei-tei":u.fT,"tei-eg":u.Eg,"tei-graphic":u.vY,"tei-list":u.B8,"tei-note":u.L7,"tei-ptr":u.bx,"tei-ref":u.oS,"tei-teiheader":u.Gk},h=c||p,b=Object.keys(h).map(((e,t)=>(0,l.jsx)(i.az,{el:e,component:h[e],key:"tr-"+t})));return(0,l.jsx)(i.Z0,{data:f.documentElement},b)}},8892:function(e,t,r){"use strict";var n=r(463),i=r(4810),o=r(2532),s=r(7437);t.A=e=>{var t;const r=(0,i.useStaticQuery)("3796001465"),a=e.teiNode,u=a.getAttribute("url"),l=(null===(t=a.parentElement)||void 0===t?void 0:t.getElementsByTagName("tei-figDesc"))||[],c="No description provided.";if(!u)return null;const d=r.allFile.nodes.filter((e=>{const[t,r]=u.split(/\.(?=[^\.]+$)/),n=t.substring(0,t.lastIndexOf("_"))+"."+r;return e.name+e.ext===n}))[0];return d?(0,s.jsx)(n.n,{node:e.teiNode},(0,s.jsx)(o.G,{image:d.childImageSharp.gatsbyImageData,alt:l[0]&&l[0].textContent||c})):null}},8697:function(e,t,r){"use strict";var n=r(6540),i=r(469),o=r(6071),s=r(7437);t.A=e=>{const t="fr"==e.curLang?"fr":"en",r={en:["“","”"],fr:["« "," »"]},a=e.teiNode.cloneNode(!0),u=a.getElementsByTagName("tei-p"),l=u[0],c=u[u.length-1];if(l&&c){const c=l.childNodes[0];return c?l.insertBefore(a.ownerDocument.createTextNode(r[t][0]),c):l.textContent=r[t][0],u[u.length-1].appendChild(a.ownerDocument.createTextNode(r[t][1])),n.createElement(a.localName,Object.assign({},(0,i.ld)(a.attributes)),(0,s.jsx)(o.AW,{teiNodes:a.childNodes,availableRoutes:e.availableRoutes}))}return(0,s.jsx)(n.Fragment,null," ",r[t][0],(0,s.jsx)(i.Tv,e),r[t][1]," ")}},6071:function(e,t,r){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(r(6540));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var i=h(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,r)}}var y=o.default.createContext(),g=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self&&self,{exports:{}});g.exports=new function(){var e=this;e.init=function(){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.repeat=function(e){return new Array(1+e).join(this)}},e.init();var t=/\/\*[\s\S]*?\*\//g,r=/([^\:]+):([^\;]*);/,n=/(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gim,o=1,s=2,a=3,u=4,l=function(e){return void 0===e||0==e.length||null==e};e.toJSON=function(c,d){var f={children:{},attributes:{}},p=null,h=0;for(void 0===d&&(d={ordered:!1,comments:!1,stripComments:!1,split:!1}),d.stripComments&&(d.comments=!1,c=c.replace(t,""));null!=(p=n.exec(c));)if(!l(p[o])&&d.comments){var b=p[o].trim();f[h++]=b}else if(l(p[s])){if(!l(p[a]))return f;if(!l(p[u])){var m=p[u].trim(),v=r.exec(m);if(v){j=v[1].trim();var y=v[2].trim();if(d.ordered)(x={}).name=j,x.value=y,x.type="attr",f[h++]=x;else if(j in f.attributes){var g=f.attributes[j];g instanceof Array||(f.attributes[j]=[g]),f.attributes[j].push(y)}else f.attributes[j]=y}else f[h++]=m}}else{var j=p[s].trim(),N=e.toJSON(c,d);if(d.ordered){var x;(x={}).name=j,x.value=N,x.type="rule",f[h++]=x}else{if(d.split)var w=j.split(",");else w=[j];for(i in w){var A=w[i].trim();if(A in f.children)for(var O in N.attributes)f.children[A].attributes[O]=N.attributes[O];else f.children[A]=N}}}return f},e.toCSS=function(e,t,r){var n="";if(void 0===t&&(t=0),void 0===r&&(r=!1),e.attributes)for(i in e.attributes){var o=e.attributes[i];if(o instanceof Array)for(var s=0;s<o.length;s++)n+=c(i,o[s],t);else n+=c(i,o,t)}if(e.children){var a=!0;for(i in e.children)r&&!a?n+="\n":a=!1,n+=d(i,e.children[i],t)}return n};var c=function(e,t,r){return"\t".repeat(r)+e+": "+t+";\n"},d=function(t,r,n){var i="\t".repeat(n)+t+" {\n";return i+=e.toCSS(r,n+1),i+="\t".repeat(n)+"}\n"}};var j=function(e){p(r,e);var t=v(r);function r(){return u(this,r),t.apply(this,arguments)}return c(r,[{key:"render",value:function(){var e=this;return Array.from(this.props.teiNodes).map((function(t,r){return o.default.createElement(N,{key:"".concat(t.tagName).concat(r),teiNode:t,availableRoutes:e.props.availableRoutes})}))}}]),r}(o.default.Component),N=function(e){p(r,e);var t=v(r);function r(){return u(this,r),t.apply(this,arguments)}return c(r,[{key:"forwardTeiAttributes",value:function(){return Array.from(this.props.teiNode.attributes).reduce((function(e,t){switch(t.name){case"ref":e.Ref=t.value;break;case"style":e.style=g.exports.toJSON(t.value);break;default:e[t.name]=t.value}return e}),{})}},{key:"render",value:function(){var e,t,r=this;if(!this.props.teiNode)return null;if(3===this.props.teiNode.nodeType){if(!this.props.availableRoutes.includes("text()"))return this.props.teiNode.nodeValue;e="text()"}else{if(1!==this.props.teiNode.nodeType)return null;var n=this.props.teiNode,i=n.tagName.toLowerCase();if(t=o.default.createElement(j,f({teiNodes:n.childNodes},this.props)),!this.props.availableRoutes.includes(i))return o.default.createElement(i,a({},this.forwardTeiAttributes()),t);e=i}return o.default.createElement(y.Consumer,null,(function(n){var i=n[e];return o.default.isValidElement(i)?o.default.cloneElement(i,a({},r.props),t):o.default.createElement(i,a({},r.props),t)}))}}]),r}(o.default.Component),x=function(e){p(r,e);var t=v(r);function r(){return u(this,r),t.apply(this,arguments)}return c(r,[{key:"componentDidMount",value:function(){this.props.children&&this.props.component}},{key:"render",value:function(){return null}}]),r}(o.default.Component),w=function(e){p(r,e);var t=v(r);function r(e){var n;return u(this,r),d(m(n=t.call(this,e)),"availableRoutes",[]),d(m(n),"routes",{}),o.default.Children.forEach(e.children,(function(e){n.availableRoutes.push(e.props.el),e.props.children?n.routes[e.props.el]=e.props.children:n.routes[e.props.el]=e.props.component})),n}return c(r,[{key:"render",value:function(){return this.props.data?o.default.createElement(y.Provider,{value:this.routes},o.default.createElement(N,{teiNode:this.props.data,availableRoutes:this.availableRoutes})):null}}]),r}(o.default.Component);t.de=N,t.AW=j,t.Z0=w,t.az=x}}]);
//# sourceMappingURL=4698de61ad7bfb4aa1817faf18ed277a78ec7958-db303abd8dae65052f1d.js.map