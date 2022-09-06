"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,p(p({ref:t},c),{},{components:r})):o.createElement(f,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={id:"delete-post",title:"delete_post",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/mutations/delete-post",id:"graphql/mutations/delete-post",title:"delete_post",description:'delete data from the table: "post"',source:"@site/docs/07-graphql/mutations/delete-post.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-post",permalink:"/next/graphql/mutations/delete-post",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-post.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-post",title:"delete_post",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_post_url",permalink:"/next/graphql/mutations/delete-post-url"},next:{title:"delete_posts_params_by_pk",permalink:"/next/graphql/mutations/delete-posts-params-by-pk"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>post_bool_exp!</code>)",id:"where-post_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_mutation_response</code>",id:"post_mutation_response",level:4}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "post"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_post(\n  where: post_bool_exp!\n): post_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-post_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"post_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/post-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"post_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "post"'))}d.isMDXComponent=!0}}]);