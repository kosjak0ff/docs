"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[81893],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=c(r),d=a,f=b["".concat(i,".").concat(d)]||b[d]||l[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},46773:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],p={id:"subspace-by-pk",title:"subspace_by_pk",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/subscriptions/subspace-by-pk",id:"graphql/subscriptions/subspace-by-pk",title:"subspace_by_pk",description:'fetch data from the table: "subspace" using primary key columns',source:"@site/docs/07-graphql/subscriptions/subspace-by-pk.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-by-pk",permalink:"/next/graphql/subscriptions/subspace-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/subspace-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-by-pk",title:"subspace_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reports_params",permalink:"/next/graphql/subscriptions/reports-params"},next:{title:"subspace_free_text_params_by_pk",permalink:"/next/graphql/subscriptions/subspace-free-text-params-by-pk"}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace</code>",id:"subspace",level:4}],b={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch data from the table: "subspace" using primary key columns'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_by_pk(\n  id: bigint!\n): subspace\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"id-bigint"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,s.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace"))),(0,s.kt)("p",null,'columns and relationships of "subspace"'))}d.isMDXComponent=!0}}]);