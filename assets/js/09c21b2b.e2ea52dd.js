"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[81150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),f=a,m=c["".concat(d,".").concat(f)]||c[f]||p[f]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const s={id:"delete-dtag-transfer-requests",title:"delete_dtag_transfer_requests",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/mutations/delete-dtag-transfer-requests",id:"graphql/mutations/delete-dtag-transfer-requests",title:"delete_dtag_transfer_requests",description:'delete data from the table: "dtagtransferrequests"',source:"@site/docs/07-graphql/mutations/delete-dtag-transfer-requests.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-dtag-transfer-requests",permalink:"/next/graphql/mutations/delete-dtag-transfer-requests",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-dtag-transfer-requests.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"delete-dtag-transfer-requests",title:"delete_dtag_transfer_requests",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_chain_link",permalink:"/next/graphql/mutations/delete-chain-link"},next:{title:"delete_poll_answer_by_pk",permalink:"/next/graphql/mutations/delete-poll-answer-by-pk"}},d={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>dtag_transfer_requests_bool_exp!</code>)",id:"where-dtag_transfer_requests_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>dtag_transfer_requests_mutation_response</code>",id:"dtag_transfer_requests_mutation_response",level:4}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'delete data from the table: "dtag_transfer_requests"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_dtag_transfer_requests(\n  where: dtag_transfer_requests_bool_exp!\n): dtag_transfer_requests_mutation_response\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"where-dtag_transfer_requests_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp!")),")"),(0,a.kt)("p",null,"filter the rows which have to be deleted"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"dtag_transfer_requests_mutation_response"},(0,a.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-mutation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_mutation_response"))),(0,a.kt)("p",null,'response of any mutation on the table "dtag_transfer_requests"'))}p.isMDXComponent=!0}}]);