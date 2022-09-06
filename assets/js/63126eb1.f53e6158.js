"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,p=function(e,t){if(null==e)return{};var n,o,p={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=p,_=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(_,i(i({ref:t},l),{},{components:n})):o.createElement(_,i({ref:t},l))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,i=new Array(r);i[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(87462),p=(n(67294),n(3905));const r={id:"update-post-mention-by-pk",title:"update_post_mention_by_pk",hide_table_of_contents:!1},i=void 0,a={unversionedId:"graphql/mutations/update-post-mention-by-pk",id:"graphql/mutations/update-post-mention-by-pk",title:"update_post_mention_by_pk",description:'update single row of the table: "post_mention"',source:"@site/docs/07-graphql/mutations/update-post-mention-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-post-mention-by-pk",permalink:"/next/graphql/mutations/update-post-mention-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-post-mention-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-post-mention-by-pk",title:"update_post_mention_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_post_hashtag",permalink:"/next/graphql/mutations/update-post-hashtag"},next:{title:"update_post_mention",permalink:"/next/graphql/mutations/update-post-mention"}},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>post_mention_inc_input</code>)",id:"_inc-post_mention_inc_input",level:4},{value:"<code>_set</code> (<code>post_mention_set_input</code>)",id:"_set-post_mention_set_input",level:4},{value:"<code>pk_columns</code> (<code>post_mention_pk_columns_input!</code>)",id:"pk_columns-post_mention_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_mention</code>",id:"post_mention",level:4}],l={toc:u};function m(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'update single row of the table: "post_mention"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"update_post_mention_by_pk(\n  _inc: post_mention_inc_input\n  _set: post_mention_set_input\n  pk_columns: post_mention_pk_columns_input!\n): post_mention\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"_inc-post_mention_inc_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-mention-inc-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_mention_inc_input")),")"),(0,p.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,p.kt)("h4",{id:"_set-post_mention_set_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-mention-set-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_mention_set_input")),")"),(0,p.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,p.kt)("h4",{id:"pk_columns-post_mention_pk_columns_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-mention-pk-columns-input"},(0,p.kt)("inlineCode",{parentName:"a"},"post_mention_pk_columns_input!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"post_mention"},(0,p.kt)("a",{parentName:"h4",href:"../objects/post-mention"},(0,p.kt)("inlineCode",{parentName:"a"},"post_mention"))),(0,p.kt)("p",null,'columns and relationships of "post_mention"'))}m.isMDXComponent=!0}}]);