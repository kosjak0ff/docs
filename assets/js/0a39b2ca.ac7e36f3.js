"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6622],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>u});var a=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=a.createContext({}),c=function(e){var n=a.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=t,h=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return o?a.createElement(h,l(l({ref:n},d),{},{components:o})):a.createElement(h,l({ref:n},d))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9919:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=o(87462),t=(o(67294),o(3905));const r={id:"boolean-comparison-exp",title:"Boolean_comparison_exp",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/inputs/boolean-comparison-exp",id:"version-4.1.0/graphql/inputs/boolean-comparison-exp",title:"Boolean_comparison_exp",description:"Boolean expression to compare columns of type \"Boolean\". All fields are combined with logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/boolean-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/boolean-comparison-exp",permalink:"/4.1.0/graphql/inputs/boolean-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/boolean-comparison-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"boolean-comparison-exp",title:"Boolean_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"bigint_comparison_exp",permalink:"/4.1.0/graphql/inputs/bigint-comparison-exp"},next:{title:"chain_link_aggregate_order_by",permalink:"/4.1.0/graphql/inputs/chain-link-aggregate-order-by"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>Boolean</code>)",id:"_eq-boolean",level:4},{value:"<code>_gt</code> (<code>Boolean</code>)",id:"_gt-boolean",level:4},{value:"<code>_gte</code> (<code>Boolean</code>)",id:"_gte-boolean",level:4},{value:"<code>_in</code> (<code>[Boolean!]</code>)",id:"_in-boolean",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>Boolean</code>)",id:"_lt-boolean",level:4},{value:"<code>_lte</code> (<code>Boolean</code>)",id:"_lte-boolean",level:4},{value:"<code>_neq</code> (<code>Boolean</code>)",id:"_neq-boolean",level:4},{value:"<code>_nin</code> (<code>[Boolean!]</code>)",id:"_nin-boolean",level:4}],d={toc:c};function s(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to compare columns of type \"Boolean\". All fields are combined with logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input Boolean_comparison_exp {\n  _eq: Boolean\n  _gt: Boolean\n  _gte: Boolean\n  _in: [Boolean!]\n  _is_null: Boolean\n  _lt: Boolean\n  _lte: Boolean\n  _neq: Boolean\n  _nin: [Boolean!]\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_eq-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_gt-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_gte-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_in-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"[Boolean!]")),")"),(0,t.kt)("h4",{id:"_is_null-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_lt-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_lte-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_neq-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,t.kt)("h4",{id:"_nin-boolean"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"[Boolean!]")),")"))}s.isMDXComponent=!0}}]);