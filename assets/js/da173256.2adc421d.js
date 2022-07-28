"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15473],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,d=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||d;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=r.length,i=new Array(d);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<d;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26040:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),d=(r(67294),r(3905)),i=["components"],a={id:"post-mention-stddev-order-by",title:"post_mention_stddev_order_by",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/post-mention-stddev-order-by",id:"graphql/inputs/post-mention-stddev-order-by",title:"post_mention_stddev_order_by",description:'order by stddev() on columns of table "post_mention"',source:"@site/docs/07-graphql/inputs/post-mention-stddev-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-stddev-order-by",permalink:"/next/graphql/inputs/post-mention-stddev-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-stddev-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-mention-stddev-order-by",title:"post_mention_stddev_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_order_by",permalink:"/next/graphql/inputs/post-mention-order-by"},next:{title:"post_mention_stddev_pop_order_by",permalink:"/next/graphql/inputs/post-mention-stddev-pop-order-by"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4}],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,d.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,'order by stddev() on columns of table "post_mention"'),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_stddev_order_by {\n  end_index: order_by\n  start_index: order_by\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"end_index-order_by"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,d.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,d.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,d.kt)("h4",{id:"start_index-order_by"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,d.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,d.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}m.isMDXComponent=!0}}]);