"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60325],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>_});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),_=o,f=d["".concat(c,".").concat(_)]||d[_]||p[_]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function _(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3670:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const i={id:"user-block-arr-rel-insert-input",title:"user_block_arr_rel_insert_input",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/user-block-arr-rel-insert-input",id:"graphql/inputs/user-block-arr-rel-insert-input",title:"user_block_arr_rel_insert_input",description:'input type for inserting array relation for remote table "user_block"',source:"@site/docs/07-graphql/inputs/user-block-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-arr-rel-insert-input",permalink:"/next/graphql/inputs/user-block-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-block-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-block-arr-rel-insert-input",title:"user_block_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_aggregate_order_by",permalink:"/next/graphql/inputs/user-block-aggregate-order-by"},next:{title:"user_block_avg_order_by",permalink:"/next/graphql/inputs/user-block-avg-order-by"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[user_block_insert_input!]!</code>)",id:"data-user_block_insert_input",level:4},{value:"<code>on_conflict</code> (<code>user_block_on_conflict</code>)",id:"on_conflict-user_block_on_conflict",level:4}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting array relation for remote table "user_block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_arr_rel_insert_input {\n  data: [user_block_insert_input!]!\n  on_conflict: user_block_on_conflict\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"data-user_block_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-block-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[user_block_insert_input!]!")),")"),(0,o.kt)("h4",{id:"on_conflict-user_block_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-block-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"))}p.isMDXComponent=!0}}]);