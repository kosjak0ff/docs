"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[42634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=d(t),m=i,h=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},55257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={id:"string-comparison-exp",title:"String_comparison_exp",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/inputs/string-comparison-exp",id:"version-4.2.0/graphql/inputs/string-comparison-exp",title:"String_comparison_exp",description:"Boolean expression to compare columns of type \"String\". All fields are combined with logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/string-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/string-comparison-exp",permalink:"/graphql/inputs/string-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/string-comparison-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"string-comparison-exp",title:"String_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reports_params_order_by",permalink:"/graphql/inputs/reports-params-order-by"},next:{title:"subspace_bool_exp",permalink:"/graphql/inputs/subspace-bool-exp"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>String</code>)",id:"_eq-string",level:4},{value:"<code>_gt</code> (<code>String</code>)",id:"_gt-string",level:4},{value:"<code>_gte</code> (<code>String</code>)",id:"_gte-string",level:4},{value:"<code>_ilike</code> (<code>String</code>)",id:"_ilike-string",level:4},{value:"<code>_in</code> (<code>[String!]</code>)",id:"_in-string",level:4},{value:"<code>_iregex</code> (<code>String</code>)",id:"_iregex-string",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_like</code> (<code>String</code>)",id:"_like-string",level:4},{value:"<code>_lt</code> (<code>String</code>)",id:"_lt-string",level:4},{value:"<code>_lte</code> (<code>String</code>)",id:"_lte-string",level:4},{value:"<code>_neq</code> (<code>String</code>)",id:"_neq-string",level:4},{value:"<code>_nilike</code> (<code>String</code>)",id:"_nilike-string",level:4},{value:"<code>_nin</code> (<code>[String!]</code>)",id:"_nin-string",level:4},{value:"<code>_niregex</code> (<code>String</code>)",id:"_niregex-string",level:4},{value:"<code>_nlike</code> (<code>String</code>)",id:"_nlike-string",level:4},{value:"<code>_nregex</code> (<code>String</code>)",id:"_nregex-string",level:4},{value:"<code>_nsimilar</code> (<code>String</code>)",id:"_nsimilar-string",level:4},{value:"<code>_regex</code> (<code>String</code>)",id:"_regex-string",level:4},{value:"<code>_similar</code> (<code>String</code>)",id:"_similar-string",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to compare columns of type \"String\". All fields are combined with logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input String_comparison_exp {\n  _eq: String\n  _gt: String\n  _gte: String\n  _ilike: String\n  _in: [String!]\n  _iregex: String\n  _is_null: Boolean\n  _like: String\n  _lt: String\n  _lte: String\n  _neq: String\n  _nilike: String\n  _nin: [String!]\n  _niregex: String\n  _nlike: String\n  _nregex: String\n  _nsimilar: String\n  _regex: String\n  _similar: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_eq-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"_gt-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"_gte-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"_ilike-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_ilike"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column match the given case-insensitive pattern"),(0,i.kt)("h4",{id:"_in-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"_iregex-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_iregex"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column match the given POSIX regular expression, case insensitive"),(0,i.kt)("h4",{id:"_is_null-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"_like-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_like"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column match the given pattern"),(0,i.kt)("h4",{id:"_lt-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"_lte-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"_neq-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"_nilike-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nilike"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column NOT match the given case-insensitive pattern"),(0,i.kt)("h4",{id:"_nin-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"_niregex-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_niregex"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column NOT match the given POSIX regular expression, case insensitive"),(0,i.kt)("h4",{id:"_nlike-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nlike"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column NOT match the given pattern"),(0,i.kt)("h4",{id:"_nregex-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nregex"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column NOT match the given POSIX regular expression, case sensitive"),(0,i.kt)("h4",{id:"_nsimilar-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nsimilar"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column NOT match the given SQL regular expression"),(0,i.kt)("h4",{id:"_regex-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_regex"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column match the given POSIX regular expression, case sensitive"),(0,i.kt)("h4",{id:"_similar-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_similar"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"does the column match the given SQL regular expression"))}p.isMDXComponent=!0}}]);