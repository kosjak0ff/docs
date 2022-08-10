"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[25802],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>_});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),_=o,y=u["".concat(d,".").concat(_)]||u[_]||c[_]||a;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function _(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55450:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={id:"application-link-oracle-request-stddev-order-by",title:"application_link_oracle_request_stddev_order_by",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/inputs/application-link-oracle-request-stddev-order-by",id:"version-4.2.0/graphql/inputs/application-link-oracle-request-stddev-order-by",title:"application_link_oracle_request_stddev_order_by",description:'order by stddev() on columns of table "applicationlinkoracle_request"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/application-link-oracle-request-stddev-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-stddev-order-by",permalink:"/graphql/inputs/application-link-oracle-request-stddev-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/application-link-oracle-request-stddev-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"application-link-oracle-request-stddev-order-by",title:"application_link_oracle_request_stddev_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_order_by",permalink:"/graphql/inputs/application-link-oracle-request-order-by"},next:{title:"application_link_oracle_request_stddev_pop_order_by",permalink:"/graphql/inputs/application-link-oracle-request-stddev-pop-order-by"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>request_id</code> (<code>order_by</code>)",id:"request_id-order_by",level:4},{value:"<code>script_id</code> (<code>order_by</code>)",id:"script_id-order_by",level:4}],s={toc:p};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by stddev() on columns of table "application_link_oracle_request"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_stddev_order_by {\n  request_id: order_by\n  script_id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"request_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"script_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);