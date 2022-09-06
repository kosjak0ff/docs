"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,g=m["".concat(i,".").concat(f)]||m[f]||d[f]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/objects/poll-answer-aggregate-fields",id:"version-4.2.0/graphql/objects/poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",description:'aggregate fields of "poll_answer"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/poll-answer-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/poll-answer-aggregate-fields",permalink:"/graphql/objects/poll-answer-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/poll-answer-aggregate-fields.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"poll-answer-aggregate-fields",title:"poll_answer_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests",permalink:"/graphql/objects/dtag-transfer-requests"},next:{title:"poll_answer_aggregate",permalink:"/graphql/objects/poll-answer-aggregate"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>poll_answer_max_fields</code>)",id:"max-poll_answer_max_fields",level:4},{value:"<code>min</code> (<code>poll_answer_min_fields</code>)",id:"min-poll_answer_min_fields",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'aggregate fields of "poll_answer"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type poll_answer_aggregate_fields {\n  count(\n  columns: [poll_answer_select_column!]\n  distinct: Boolean\n): Int!\n  max: poll_answer_max_fields\n  min: poll_answer_min_fields\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"count-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"columns-poll_answer_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/poll-answer-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[poll_answer_select_column!]")),")"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("h4",{id:"max-poll_answer_max_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/poll-answer-max-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"poll_answer_max_fields")),")"),(0,r.kt)("h4",{id:"min-poll_answer_min_fields"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/poll-answer-min-fields"},(0,r.kt)("inlineCode",{parentName:"a"},"poll_answer_min_fields")),")"))}d.isMDXComponent=!0}}]);