"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={id:"post-sum-fields",title:"post_sum_fields",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/objects/post-sum-fields",id:"graphql/objects/post-sum-fields",title:"post_sum_fields",description:"aggregate sum on columns",source:"@site/docs/07-graphql/objects/post-sum-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-sum-fields",permalink:"/next/graphql/objects/post-sum-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-sum-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-sum-fields",title:"post_sum_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_stddev_samp_fields",permalink:"/next/graphql/objects/post-stddev-samp-fields"},next:{title:"post_tag_aggregate_fields",permalink:"/next/graphql/objects/post-tag-aggregate-fields"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>conversation_row_id</code> (<code>bigint</code>)",id:"conversation_row_id-bigint",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>section_row_id</code> (<code>bigint</code>)",id:"section_row_id-bigint",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"aggregate sum on columns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_sum_fields {\n  conversation_row_id: bigint\n  height: bigint\n  id: bigint\n  row_id: Int\n  section_row_id: bigint\n  subspace_id: bigint\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"conversation_row_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"conversation_row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"height-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"row_id-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"section_row_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"subspace_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}p.isMDXComponent=!0}}]);