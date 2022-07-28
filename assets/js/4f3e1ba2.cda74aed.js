"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[71096],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return _}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),_=o,m=u["".concat(p,".").concat(_)]||u[_]||c[_]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function _(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87699:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return p},default:function(){return _},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"application-link-oracle-request-stddev-samp-order-by",title:"application_link_oracle_request_stddev_samp_order_by",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/application-link-oracle-request-stddev-samp-order-by",id:"version-4.1.0/graphql/inputs/application-link-oracle-request-stddev-samp-order-by",title:"application_link_oracle_request_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "applicationlinkoraclerequest"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-oracle-request-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-stddev-samp-order-by",permalink:"/4.1.0/graphql/inputs/application-link-oracle-request-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/application-link-oracle-request-stddev-samp-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"application-link-oracle-request-stddev-samp-order-by",title:"application_link_oracle_request_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_stddev_pop_order_by",permalink:"/4.1.0/graphql/inputs/application-link-oracle-request-stddev-pop-order-by"},next:{title:"application_link_oracle_request_sum_order_by",permalink:"/4.1.0/graphql/inputs/application-link-oracle-request-sum-order-by"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>request_id</code> (<code>order_by</code>)",id:"request_id-order_by",level:4},{value:"<code>script_id</code> (<code>order_by</code>)",id:"script_id-order_by",level:4}],u={toc:c};function _(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by stddev_samp() on columns of table "application_link_oracle_request"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_stddev_samp_order_by {\n  request_id: order_by\n  script_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"request_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"script_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}_.isMDXComponent=!0}}]);