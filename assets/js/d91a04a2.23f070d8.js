"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[23708],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||a;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20511:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"profile-relationship-aggregate-fields",title:"profile_relationship_aggregate_fields",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/objects/profile-relationship-aggregate-fields",id:"graphql/objects/profile-relationship-aggregate-fields",title:"profile_relationship_aggregate_fields",description:'aggregate fields of "profile_relationship"',source:"@site/docs/07-graphql/objects/profile-relationship-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/profile-relationship-aggregate-fields",permalink:"/next/graphql/objects/profile-relationship-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/profile-relationship-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"profile-relationship-aggregate-fields",title:"profile_relationship_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"posts_params",permalink:"/next/graphql/objects/posts-params"},next:{title:"profile_relationship_aggregate",permalink:"/next/graphql/objects/profile-relationship-aggregate"}},c={},f=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>profile_relationship_max_fields</code>)",id:"max-profile_relationship_max_fields",level:4},{value:"<code>min</code> (<code>profile_relationship_min_fields</code>)",id:"min-profile_relationship_min_fields",level:4}],d={toc:f};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'aggregate fields of "profile_relationship"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type profile_relationship_aggregate_fields {\n  count(\n  columns: [profile_relationship_select_column!]\n  distinct: Boolean\n): Int!\n  max: profile_relationship_max_fields\n  min: profile_relationship_min_fields\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"count-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"columns-profile_relationship_select_column"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,a.kt)("a",{parentName:"h5",href:"../enums/profile-relationship-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,a.kt)("h4",{id:"max-profile_relationship_max_fields"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-max-fields"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationship_max_fields")),")"),(0,a.kt)("h4",{id:"min-profile_relationship_min_fields"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-min-fields"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_relationship_min_fields")),")"))}m.isMDXComponent=!0}}]);