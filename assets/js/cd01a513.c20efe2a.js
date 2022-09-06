"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[20657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),_=c(n),m=r,u=_["".concat(p,".").concat(m)]||_[m]||s[m]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=_;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},16193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"int-8-comparison-exp",title:"_int8_comparison_exp",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/inputs/int-8-comparison-exp",id:"version-4.2.0/graphql/inputs/int-8-comparison-exp",title:"_int8_comparison_exp",description:"Boolean expression to compare columns of type \"_int8\". All fields are combined with logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/int-8-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/int-8-comparison-exp",permalink:"/graphql/inputs/int-8-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/int-8-comparison-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"int-8-comparison-exp",title:"_int8_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_order_by",permalink:"/graphql/inputs/dtag-transfer-requests-order-by"},next:{title:"jsonb_comparison_exp",permalink:"/graphql/inputs/jsonb-comparison-exp"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>_int8</code>)",id:"_eq-_int8",level:4},{value:"<code>_gt</code> (<code>_int8</code>)",id:"_gt-_int8",level:4},{value:"<code>_gte</code> (<code>_int8</code>)",id:"_gte-_int8",level:4},{value:"<code>_in</code> (<code>[_int8!]</code>)",id:"_in-_int8",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>_int8</code>)",id:"_lt-_int8",level:4},{value:"<code>_lte</code> (<code>_int8</code>)",id:"_lte-_int8",level:4},{value:"<code>_neq</code> (<code>_int8</code>)",id:"_neq-_int8",level:4},{value:"<code>_nin</code> (<code>[_int8!]</code>)",id:"_nin-_int8",level:4}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boolean expression to compare columns of type \"_int8\". All fields are combined with logical 'AND'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input _int8_comparison_exp {\n  _eq: _int8\n  _gt: _int8\n  _gte: _int8\n  _in: [_int8!]\n  _is_null: Boolean\n  _lt: _int8\n  _lte: _int8\n  _neq: _int8\n  _nin: [_int8!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"_eq-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,r.kt)("h4",{id:"_gt-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,r.kt)("h4",{id:"_gte-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,r.kt)("h4",{id:"_in-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"[_int8!]")),")"),(0,r.kt)("h4",{id:"_is_null-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"_lt-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,r.kt)("h4",{id:"_lte-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,r.kt)("h4",{id:"_neq-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,r.kt)("h4",{id:"_nin-_int8"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,r.kt)("inlineCode",{parentName:"a"},"[_int8!]")),")"))}s.isMDXComponent=!0}}]);