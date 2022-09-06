"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29137],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>d});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),h=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=h(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=h(a),d=o,_=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(_,s(s({ref:e},l),{},{components:a})):n.createElement(_,s({ref:e},l))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,s[1]=p;for(var h=2;h<r;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60655:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>h});var n=a(87462),o=(a(67294),a(3905));const r={id:"update-post-hashtag",title:"update_post_hashtag",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/mutations/update-post-hashtag",id:"graphql/mutations/update-post-hashtag",title:"update_post_hashtag",description:'update data of the table: "post_hashtag"',source:"@site/docs/07-graphql/mutations/update-post-hashtag.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-post-hashtag",permalink:"/next/graphql/mutations/update-post-hashtag",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-post-hashtag.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-post-hashtag",title:"update_post_hashtag",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_post_hashtag_by_pk",permalink:"/next/graphql/mutations/update-post-hashtag-by-pk"},next:{title:"update_post_mention_by_pk",permalink:"/next/graphql/mutations/update-post-mention-by-pk"}},i={},h=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>post_hashtag_inc_input</code>)",id:"_inc-post_hashtag_inc_input",level:4},{value:"<code>_set</code> (<code>post_hashtag_set_input</code>)",id:"_set-post_hashtag_set_input",level:4},{value:"<code>where</code> (<code>post_hashtag_bool_exp!</code>)",id:"where-post_hashtag_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_hashtag_mutation_response</code>",id:"post_hashtag_mutation_response",level:4}],l={toc:h};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'update data of the table: "post_hashtag"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"update_post_hashtag(\n  _inc: post_hashtag_inc_input\n  _set: post_hashtag_set_input\n  where: post_hashtag_bool_exp!\n): post_hashtag_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"_inc-post_hashtag_inc_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-inc-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_hashtag_inc_input")),")"),(0,o.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,o.kt)("h4",{id:"_set-post_hashtag_set_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-set-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_hashtag_set_input")),")"),(0,o.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,o.kt)("h4",{id:"where-post_hashtag_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp!")),")"),(0,o.kt)("p",null,"filter the rows which have to be updated"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_hashtag_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-hashtag-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"post_hashtag_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "post_hashtag"'))}u.isMDXComponent=!0}}]);