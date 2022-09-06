"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"post-set-input",title:"post_set_input",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/inputs/post-set-input",id:"graphql/inputs/post-set-input",title:"post_set_input",description:'input type for updating data in table "post"',source:"@site/docs/07-graphql/inputs/post-set-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-set-input",permalink:"/next/graphql/inputs/post-set-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-set-input.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-set-input",title:"post_set_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_variance_order_by",permalink:"/next/graphql/inputs/post-reference-variance-order-by"},next:{title:"post_stddev_order_by",permalink:"/next/graphql/inputs/post-stddev-order-by"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>String</code>)",id:"author_address-string",level:4},{value:"<code>conversation_row_id</code> (<code>bigint</code>)",id:"conversation_row_id-bigint",level:4},{value:"<code>creation_date</code> (<code>timestamp</code>)",id:"creation_date-timestamp",level:4},{value:"<code>external_id</code> (<code>String</code>)",id:"external_id-string",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>last_edited_date</code> (<code>timestamp</code>)",id:"last_edited_date-timestamp",level:4},{value:"<code>reply_settings</code> (<code>String</code>)",id:"reply_settings-string",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>section_row_id</code> (<code>bigint</code>)",id:"section_row_id-bigint",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'input type for updating data in table "post"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_set_input {\n  author_address: String\n  conversation_row_id: bigint\n  creation_date: timestamp\n  external_id: String\n  height: bigint\n  id: bigint\n  last_edited_date: timestamp\n  reply_settings: String\n  row_id: Int\n  section_row_id: bigint\n  subspace_id: bigint\n  text: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"author_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"conversation_row_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"conversation_row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"creation_date-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"external_id-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"last_edited_date-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"reply_settings-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"row_id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"section_row_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"subspace_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"text-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}c.isMDXComponent=!0}}]);