"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13363],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),b=o,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=l;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},18718:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"subspace-section-var-samp-order-by",title:"subspace_section_var_samp_order_by",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/inputs/subspace-section-var-samp-order-by",id:"version-4.1.0/graphql/inputs/subspace-section-var-samp-order-by",title:"subspace_section_var_samp_order_by",description:'order by varsamp() on columns of table "subspacesection"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-var-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-var-samp-order-by",permalink:"/4.1.0/graphql/inputs/subspace-section-var-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-section-var-samp-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-section-var-samp-order-by",title:"subspace_section_var_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_var_pop_order_by",permalink:"/4.1.0/graphql/inputs/subspace-section-var-pop-order-by"},next:{title:"subspace_section_variance_order_by",permalink:"/4.1.0/graphql/inputs/subspace-section-variance-order-by"}},u={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],l={toc:d};function b(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by var_samp() on columns of table "subspace_section"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_section_var_samp_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"subspace_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}b.isMDXComponent=!0}}]);