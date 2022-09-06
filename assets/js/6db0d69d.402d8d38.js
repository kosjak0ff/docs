"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[12057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,m=f["".concat(i,".").concat(u)]||f[u]||p[u]||a;return r?o.createElement(m,d(d({ref:t},c),{},{components:r})):o.createElement(m,d({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,d=new Array(a);d[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var s=2;s<a;s++)d[s]=r[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:"post-reference-stddev-fields",title:"post_reference_stddev_fields",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/objects/post-reference-stddev-fields",id:"graphql/objects/post-reference-stddev-fields",title:"post_reference_stddev_fields",description:"aggregate stddev on columns",source:"@site/docs/07-graphql/objects/post-reference-stddev-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-reference-stddev-fields",permalink:"/next/graphql/objects/post-reference-stddev-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-reference-stddev-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-reference-stddev-fields",title:"post_reference_stddev_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_mutation_response",permalink:"/next/graphql/objects/post-reference-mutation-response"},next:{title:"post_reference_stddev_pop_fields",permalink:"/next/graphql/objects/post-reference-stddev-pop-fields"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>Float</code>)",id:"position_index-float",level:4},{value:"<code>post_row_id</code> (<code>Float</code>)",id:"post_row_id-float",level:4},{value:"<code>reference_row_id</code> (<code>Float</code>)",id:"reference_row_id-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"aggregate stddev on columns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_reference_stddev_fields {\n  position_index: Float\n  post_row_id: Float\n  reference_row_id: Float\n  row_id: Float\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"position_index-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"post_row_id-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"reference_row_id-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reference_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"row_id-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"))}p.isMDXComponent=!0}}]);