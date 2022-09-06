"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"post-mention-by-pk",title:"post_mention_by_pk",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/queries/post-mention-by-pk",id:"graphql/queries/post-mention-by-pk",title:"post_mention_by_pk",description:'fetch data from the table: "post_mention" using primary key columns',source:"@site/docs/07-graphql/queries/post-mention-by-pk.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/post-mention-by-pk",permalink:"/next/graphql/queries/post-mention-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/post-mention-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-mention-by-pk",title:"post_mention_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_aggregate",permalink:"/next/graphql/queries/post-mention-aggregate"},next:{title:"post_mention",permalink:"/next/graphql/queries/post-mention"}},s={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>row_id</code> (<code>Int!</code>)",id:"row_id-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_mention</code>",id:"post_mention",level:4}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "post_mention" using primary key columns'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"post_mention_by_pk(\n  row_id: Int!\n): post_mention\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"row_id-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_mention"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention"))),(0,o.kt)("p",null,'columns and relationships of "post_mention"'))}m.isMDXComponent=!0}}]);