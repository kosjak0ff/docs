"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),_=o,f=d["".concat(p,".").concat(_)]||d[_]||c[_]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function _(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"post-url-arr-rel-insert-input",title:"post_url_arr_rel_insert_input",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/post-url-arr-rel-insert-input",id:"graphql/inputs/post-url-arr-rel-insert-input",title:"post_url_arr_rel_insert_input",description:'input type for inserting array relation for remote table "post_url"',source:"@site/docs/07-graphql/inputs/post-url-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-url-arr-rel-insert-input",permalink:"/next/graphql/inputs/post-url-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-url-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-url-arr-rel-insert-input",title:"post_url_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_url_aggregate_order_by",permalink:"/next/graphql/inputs/post-url-aggregate-order-by"},next:{title:"post_url_avg_order_by",permalink:"/next/graphql/inputs/post-url-avg-order-by"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[post_url_insert_input!]!</code>)",id:"data-post_url_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_url_on_conflict</code>)",id:"on_conflict-post_url_on_conflict",level:4}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting array relation for remote table "post_url"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_url_arr_rel_insert_input {\n  data: [post_url_insert_input!]!\n  on_conflict: post_url_on_conflict\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"data-post_url_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-url-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_url_insert_input!]!")),")"),(0,o.kt)("h4",{id:"on_conflict-post_url_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-url-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_url_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"))}c.isMDXComponent=!0}}]);