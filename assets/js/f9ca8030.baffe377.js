"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[98254],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>_});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=l(a),_=o,m=d["".concat(i,".").concat(_)]||d[_]||c[_]||r;return a?n.createElement(m,p(p({ref:e},u),{},{components:a})):n.createElement(m,p({ref:e},u))}));function _(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,p=new Array(r);p[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,p[1]=s;for(var l=2;l<r;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98985:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={id:"update-post-tag",title:"update_post_tag",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/mutations/update-post-tag",id:"graphql/mutations/update-post-tag",title:"update_post_tag",description:'update data of the table: "post_tag"',source:"@site/docs/07-graphql/mutations/update-post-tag.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-post-tag",permalink:"/next/graphql/mutations/update-post-tag",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-post-tag.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-post-tag",title:"update_post_tag",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_post_tag_by_pk",permalink:"/next/graphql/mutations/update-post-tag-by-pk"},next:{title:"update_post_url_by_pk",permalink:"/next/graphql/mutations/update-post-url-by-pk"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>post_tag_inc_input</code>)",id:"_inc-post_tag_inc_input",level:4},{value:"<code>_set</code> (<code>post_tag_set_input</code>)",id:"_set-post_tag_set_input",level:4},{value:"<code>where</code> (<code>post_tag_bool_exp!</code>)",id:"where-post_tag_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_tag_mutation_response</code>",id:"post_tag_mutation_response",level:4}],u={toc:l};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'update data of the table: "post_tag"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"update_post_tag(\n  _inc: post_tag_inc_input\n  _set: post_tag_set_input\n  where: post_tag_bool_exp!\n): post_tag_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"_inc-post_tag_inc_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-tag-inc-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_tag_inc_input")),")"),(0,o.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,o.kt)("h4",{id:"_set-post_tag_set_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-tag-set-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_tag_set_input")),")"),(0,o.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,o.kt)("h4",{id:"where-post_tag_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-tag-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_tag_bool_exp!")),")"),(0,o.kt)("p",null,"filter the rows which have to be updated"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post_tag_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post-tag-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"post_tag_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "post_tag"'))}c.isMDXComponent=!0}}]);