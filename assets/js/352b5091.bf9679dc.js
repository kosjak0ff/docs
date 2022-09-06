"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60602],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,s(s({ref:e},l),{},{components:n})):a.createElement(d,s({ref:e},l))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29768:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"insert-post-attachment",title:"insert_post_attachment",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/mutations/insert-post-attachment",id:"graphql/mutations/insert-post-attachment",title:"insert_post_attachment",description:'insert data into the table: "post_attachment"',source:"@site/docs/07-graphql/mutations/insert-post-attachment.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-post-attachment",permalink:"/next/graphql/mutations/insert-post-attachment",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-post-attachment.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-post-attachment",title:"insert_post_attachment",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_post_attachment_one",permalink:"/next/graphql/mutations/insert-post-attachment-one"},next:{title:"insert_post_hashtag_one",permalink:"/next/graphql/mutations/insert-post-hashtag-one"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[post_attachment_insert_input!]!</code>)",id:"objects-post_attachment_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_attachment_on_conflict</code>)",id:"on_conflict-post_attachment_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment_mutation_response</code>",id:"post_attachment_mutation_response",level:4}],l={toc:p};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert data into the table: "post_attachment"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_post_attachment(\n  objects: [post_attachment_insert_input!]!\n  on_conflict: post_attachment_on_conflict\n): post_attachment_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"objects-post_attachment_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_attachment_insert_input!]!")),")"),(0,o.kt)("p",null,"the rows to be inserted"),(0,o.kt)("h4",{id:"on_conflict-post_attachment_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_attachment_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-attachment-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "post_attachment"'))}m.isMDXComponent=!0}}]);