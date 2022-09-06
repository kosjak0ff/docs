"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[2646],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,_=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(_,a(a({ref:e},u),{},{components:n})):r.createElement(_,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41277:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={id:"insert-post-url",title:"insert_post_url",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/mutations/insert-post-url",id:"graphql/mutations/insert-post-url",title:"insert_post_url",description:'insert data into the table: "post_url"',source:"@site/docs/07-graphql/mutations/insert-post-url.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-post-url",permalink:"/next/graphql/mutations/insert-post-url",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-post-url.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-post-url",title:"insert_post_url",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post_url_one",permalink:"/next/graphql/mutations/insert-post-url-one"},next:{title:"insert_post",permalink:"/next/graphql/mutations/insert-post"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[post_url_insert_input!]!</code>)",id:"objects-post_url_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_url_on_conflict</code>)",id:"on_conflict-post_url_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_url_mutation_response</code>",id:"post_url_mutation_response",level:4}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert data into the table: "post_url"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_post_url(\n  objects: [post_url_insert_input!]!\n  on_conflict: post_url_on_conflict\n): post_url_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"objects-post_url_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-url-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_url_insert_input!]!")),")"),(0,o.kt)("p",null,"the rows to be inserted"),(0,o.kt)("h4",{id:"on_conflict-post_url_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-url-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_url_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_url_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-url-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"post_url_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "post_url"'))}c.isMDXComponent=!0}}]);