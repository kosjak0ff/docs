"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[50684],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,r,i=function(e,a){if(null==e)return{};var n,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _=r.createContext({}),l=function(e){var a=r.useContext(_),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=l(e.components);return r.createElement(_.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,_=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=l(n),h=i,m=s["".concat(_,".").concat(h)]||s[h]||p[h]||t;return n?r.createElement(m,o(o({ref:a},c),{},{components:n})):r.createElement(m,o({ref:a},c))}));function h(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,o=new Array(t);o[0]=s;var d={};for(var _ in a)hasOwnProperty.call(a,_)&&(d[_]=a[_]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<t;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},32499:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>_,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const t={id:"chain-link-aggregate-order-by",title:"chain_link_aggregate_order_by",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/inputs/chain-link-aggregate-order-by",id:"version-4.2.0/graphql/inputs/chain-link-aggregate-order-by",title:"chain_link_aggregate_order_by",description:'order by aggregate values of table "chain_link"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/chain-link-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-aggregate-order-by",permalink:"/graphql/inputs/chain-link-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/chain-link-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"chain-link-aggregate-order-by",title:"chain_link_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Boolean_comparison_exp",permalink:"/graphql/inputs/boolean-comparison-exp"},next:{title:"chain_link_avg_order_by",permalink:"/graphql/inputs/chain-link-avg-order-by"}},_={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>chain_link_avg_order_by</code>)",id:"avg-chain_link_avg_order_by",level:4},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>chain_link_max_order_by</code>)",id:"max-chain_link_max_order_by",level:4},{value:"<code>min</code> (<code>chain_link_min_order_by</code>)",id:"min-chain_link_min_order_by",level:4},{value:"<code>stddev</code> (<code>chain_link_stddev_order_by</code>)",id:"stddev-chain_link_stddev_order_by",level:4},{value:"<code>stddev_pop</code> (<code>chain_link_stddev_pop_order_by</code>)",id:"stddev_pop-chain_link_stddev_pop_order_by",level:4},{value:"<code>stddev_samp</code> (<code>chain_link_stddev_samp_order_by</code>)",id:"stddev_samp-chain_link_stddev_samp_order_by",level:4},{value:"<code>sum</code> (<code>chain_link_sum_order_by</code>)",id:"sum-chain_link_sum_order_by",level:4},{value:"<code>var_pop</code> (<code>chain_link_var_pop_order_by</code>)",id:"var_pop-chain_link_var_pop_order_by",level:4},{value:"<code>var_samp</code> (<code>chain_link_var_samp_order_by</code>)",id:"var_samp-chain_link_var_samp_order_by",level:4},{value:"<code>variance</code> (<code>chain_link_variance_order_by</code>)",id:"variance-chain_link_variance_order_by",level:4}],c={toc:l};function p(e){let{components:a,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'order by aggregate values of table "chain_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_aggregate_order_by {\n  avg: chain_link_avg_order_by\n  count: order_by\n  max: chain_link_max_order_by\n  min: chain_link_min_order_by\n  stddev: chain_link_stddev_order_by\n  stddev_pop: chain_link_stddev_pop_order_by\n  stddev_samp: chain_link_stddev_samp_order_by\n  sum: chain_link_sum_order_by\n  var_pop: chain_link_var_pop_order_by\n  var_samp: chain_link_var_samp_order_by\n  variance: chain_link_variance_order_by\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"avg-chain_link_avg_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-avg-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_avg_order_by")),")"),(0,i.kt)("h4",{id:"count-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"max-chain_link_max_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-max-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_max_order_by")),")"),(0,i.kt)("h4",{id:"min-chain_link_min_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-min-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_min_order_by")),")"),(0,i.kt)("h4",{id:"stddev-chain_link_stddev_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-stddev-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_order_by")),")"),(0,i.kt)("h4",{id:"stddev_pop-chain_link_stddev_pop_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-stddev-pop-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_pop_order_by")),")"),(0,i.kt)("h4",{id:"stddev_samp-chain_link_stddev_samp_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-stddev-samp-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_samp_order_by")),")"),(0,i.kt)("h4",{id:"sum-chain_link_sum_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-sum-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_sum_order_by")),")"),(0,i.kt)("h4",{id:"var_pop-chain_link_var_pop_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-var-pop-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_var_pop_order_by")),")"),(0,i.kt)("h4",{id:"var_samp-chain_link_var_samp_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-var-samp-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_var_samp_order_by")),")"),(0,i.kt)("h4",{id:"variance-chain_link_variance_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/chain-link-variance-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_variance_order_by")),")"))}p.isMDXComponent=!0}}]);