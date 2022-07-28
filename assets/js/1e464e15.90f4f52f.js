"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1574],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34332:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"post-hashtag",title:"post_hashtag",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/subscriptions/post-hashtag",id:"graphql/subscriptions/post-hashtag",title:"post_hashtag",description:'fetch data from the table: "post_hashtag"',source:"@site/docs/07-graphql/subscriptions/post-hashtag.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-hashtag",permalink:"/next/graphql/subscriptions/post-hashtag",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/post-hashtag.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-hashtag",title:"post_hashtag",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment",permalink:"/next/graphql/subscriptions/post-attachment"},next:{title:"post_mention",permalink:"/next/graphql/subscriptions/post-mention"}},c={},h=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_hashtag_select_column!]</code>)",id:"distinct_on-post_hashtag_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_hashtag_order_by!]</code>)",id:"order_by-post_hashtag_order_by",level:4},{value:"<code>where</code> (<code>post_hashtag_bool_exp</code>)",id:"where-post_hashtag_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_hashtag</code>",id:"post_hashtag",level:4}],d={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "post_hashtag"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"post_hashtag(\n  distinct_on: [post_hashtag_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_hashtag_order_by!]\n  where: post_hashtag_bool_exp\n): [post_hashtag!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-post_hashtag_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/post-hashtag-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_hashtag_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-post_hashtag_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_hashtag_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-post_hashtag_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_hashtag"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-hashtag"},(0,o.kt)("inlineCode",{parentName:"a"},"post_hashtag"))),(0,o.kt)("p",null,'columns and relationships of "post_hashtag"'))}u.isMDXComponent=!0}}]);