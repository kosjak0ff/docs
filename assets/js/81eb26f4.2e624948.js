"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90609],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,b=u["".concat(i,".").concat(f)]||u[f]||l[f]||a;return t?n.createElement(b,p(p({ref:r},d),{},{components:t})):n.createElement(b,p({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39026:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],s={id:"report-reason-order-by",title:"report_reason_order_by",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/report-reason-order-by",id:"graphql/inputs/report-reason-order-by",title:"report_reason_order_by",description:'Ordering options when selecting data from "report_reason".',source:"@site/docs/07-graphql/inputs/report-reason-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-reason-order-by",permalink:"/next/graphql/inputs/report-reason-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-reason-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"report-reason-order-by",title:"report_reason_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_reason_bool_exp",permalink:"/next/graphql/inputs/report-reason-bool-exp"},next:{title:"report_stddev_order_by",permalink:"/next/graphql/inputs/report-stddev-order-by"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>reason</code> (<code>subspace_report_reason_order_by</code>)",id:"reason-subspace_report_reason_order_by",level:4},{value:"<code>report</code> (<code>report_order_by</code>)",id:"report-report_order_by",level:4}],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "report_reason".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_reason_order_by {\n  reason: subspace_report_reason_order_by\n  report: report_order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"reason-subspace_report_reason_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_order_by")),")"),(0,a.kt)("h4",{id:"report-report_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"report"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/report-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"report_order_by")),")"))}f.isMDXComponent=!0}}]);