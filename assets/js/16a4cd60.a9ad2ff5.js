"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83322],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?r.createElement(m,s(s({ref:t},h),{},{components:a})):r.createElement(m,s({ref:t},h))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={id:"delete-post-hashtag",title:"delete_post_hashtag",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/mutations/delete-post-hashtag",id:"graphql/mutations/delete-post-hashtag",title:"delete_post_hashtag",description:'delete data from the table: "post_hashtag"',source:"@site/docs/07-graphql/mutations/delete-post-hashtag.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-post-hashtag",permalink:"/next/graphql/mutations/delete-post-hashtag",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-post-hashtag.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-post-hashtag",title:"delete_post_hashtag",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_post_hashtag_by_pk",permalink:"/next/graphql/mutations/delete-post-hashtag-by-pk"},next:{title:"delete_post_mention_by_pk",permalink:"/next/graphql/mutations/delete-post-mention-by-pk"}},l={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>post_hashtag_bool_exp!</code>)",id:"where-post_hashtag_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_hashtag_mutation_response</code>",id:"post_hashtag_mutation_response",level:4}],h={toc:i};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "post_hashtag"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_post_hashtag(\n  where: post_hashtag_bool_exp!\n): post_hashtag_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-post_hashtag_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"post_hashtag_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/post-hashtag-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "post_hashtag"'))}c.isMDXComponent=!0}}]);