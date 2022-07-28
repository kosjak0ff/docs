"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[50931],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(t),b=o,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=l;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},58989:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],p={id:"subspace-report-reason-avg-order-by",title:"subspace_report_reason_avg_order_by",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/subspace-report-reason-avg-order-by",id:"version-4.1.0/graphql/inputs/subspace-report-reason-avg-order-by",title:"subspace_report_reason_avg_order_by",description:'order by avg() on columns of table "subspacereportreason"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-report-reason-avg-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-report-reason-avg-order-by",permalink:"/graphql/inputs/subspace-report-reason-avg-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-report-reason-avg-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-report-reason-avg-order-by",title:"subspace_report_reason_avg_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_aggregate_order_by",permalink:"/graphql/inputs/subspace-report-reason-aggregate-order-by"},next:{title:"subspace_report_reason_bool_exp",permalink:"/graphql/inputs/subspace-report-reason-bool-exp"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],l={toc:d};function b(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by avg() on columns of table "subspace_report_reason"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_report_reason_avg_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);