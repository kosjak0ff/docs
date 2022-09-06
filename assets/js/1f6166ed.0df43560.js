"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,_=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(_,a(a({ref:t},u),{},{components:n})):r.createElement(_,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"insert-user-relationship",title:"insert_user_relationship",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/mutations/insert-user-relationship",id:"graphql/mutations/insert-user-relationship",title:"insert_user_relationship",description:'insert data into the table: "user_relationship"',source:"@site/docs/07-graphql/mutations/insert-user-relationship.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-user-relationship",permalink:"/next/graphql/mutations/insert-user-relationship",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-user-relationship.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"insert-user-relationship",title:"insert_user_relationship",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_user_relationship_one",permalink:"/next/graphql/mutations/insert-user-relationship-one"},next:{title:"update_application_link_by_pk",permalink:"/next/graphql/mutations/update-application-link-by-pk"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[user_relationship_insert_input!]!</code>)",id:"objects-user_relationship_insert_input",level:4},{value:"<code>on_conflict</code> (<code>user_relationship_on_conflict</code>)",id:"on_conflict-user_relationship_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>user_relationship_mutation_response</code>",id:"user_relationship_mutation_response",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'insert data into the table: "user_relationship"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_user_relationship(\n  objects: [user_relationship_insert_input!]!\n  on_conflict: user_relationship_on_conflict\n): user_relationship_mutation_response\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"objects-user_relationship_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[user_relationship_insert_input!]!")),")"),(0,i.kt)("p",null,"the rows to be inserted"),(0,i.kt)("h4",{id:"on_conflict-user_relationship_on_conflict"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/user-relationship-on-conflict"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_on_conflict")),")"),(0,i.kt)("p",null,"on conflict condition"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"user_relationship_mutation_response"},(0,i.kt)("a",{parentName:"h4",href:"../objects/user-relationship-mutation-response"},(0,i.kt)("inlineCode",{parentName:"a"},"user_relationship_mutation_response"))),(0,i.kt)("p",null,'response of any mutation on the table "user_relationship"'))}c.isMDXComponent=!0}}]);