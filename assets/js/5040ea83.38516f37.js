"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56842],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>_});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),_=i,f=d["".concat(c,".").concat(_)]||d[_]||u[_]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={id:"chain-link-arr-rel-insert-input",title:"chain_link_arr_rel_insert_input",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/inputs/chain-link-arr-rel-insert-input",id:"graphql/inputs/chain-link-arr-rel-insert-input",title:"chain_link_arr_rel_insert_input",description:'input type for inserting array relation for remote table "chain_link"',source:"@site/docs/07-graphql/inputs/chain-link-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-arr-rel-insert-input",permalink:"/next/graphql/inputs/chain-link-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-arr-rel-insert-input",title:"chain_link_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_aggregate_order_by",permalink:"/next/graphql/inputs/chain-link-aggregate-order-by"},next:{title:"chain_link_avg_order_by",permalink:"/next/graphql/inputs/chain-link-avg-order-by"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[chain_link_insert_input!]!</code>)",id:"data-chain_link_insert_input",level:4},{value:"<code>on_conflict</code> (<code>chain_link_on_conflict</code>)",id:"on_conflict-chain_link_on_conflict",level:4}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'input type for inserting array relation for remote table "chain_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_arr_rel_insert_input {\n  data: [chain_link_insert_input!]!\n  on_conflict: chain_link_on_conflict\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"data-chain_link_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_insert_input!]!")),")"),(0,i.kt)("h4",{id:"on_conflict-chain_link_on_conflict"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-on-conflict"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_on_conflict")),")"),(0,i.kt)("p",null,"on conflict condition"))}u.isMDXComponent=!0}}]);