"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[78176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var p=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,p,o=function(e,t){if(null==e)return{};var n,p,o={},r=Object.keys(e);for(p=0;p<r.length;p++)n=r[p],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)n=r[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=p.createContext({}),u=function(e){var t=p.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return p.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,_=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?p.createElement(_,a(a({ref:t},l),{},{components:n})):p.createElement(_,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return p.createElement.apply(null,a)}return p.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var p=n(87462),o=(n(67294),n(3905));const r={id:"update-post-by-pk",title:"update_post_by_pk",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/mutations/update-post-by-pk",id:"graphql/mutations/update-post-by-pk",title:"update_post_by_pk",description:'update single row of the table: "post"',source:"@site/docs/07-graphql/mutations/update-post-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-post-by-pk",permalink:"/next/graphql/mutations/update-post-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-post-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-post-by-pk",title:"update_post_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_post_attachment",permalink:"/next/graphql/mutations/update-post-attachment"},next:{title:"update_post_hashtag_by_pk",permalink:"/next/graphql/mutations/update-post-hashtag-by-pk"}},i={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>post_inc_input</code>)",id:"_inc-post_inc_input",level:4},{value:"<code>_set</code> (<code>post_set_input</code>)",id:"_set-post_set_input",level:4},{value:"<code>pk_columns</code> (<code>post_pk_columns_input!</code>)",id:"pk_columns-post_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>post</code>",id:"post",level:4}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,p.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'update single row of the table: "post"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"update_post_by_pk(\n  _inc: post_inc_input\n  _set: post_set_input\n  pk_columns: post_pk_columns_input!\n): post\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"_inc-post_inc_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-inc-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_inc_input")),")"),(0,o.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,o.kt)("h4",{id:"_set-post_set_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-set-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_set_input")),")"),(0,o.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,o.kt)("h4",{id:"pk_columns-post_pk_columns_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-pk-columns-input"},(0,o.kt)("inlineCode",{parentName:"a"},"post_pk_columns_input!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post"},(0,o.kt)("a",{parentName:"h4",href:"../objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post"))),(0,o.kt)("p",null,'columns and relationships of "post"'))}c.isMDXComponent=!0}}]);