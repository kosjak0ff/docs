"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=p,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(87462),p=(n(67294),n(3905));const o={id:"update-profile-by-pk",title:"update_profile_by_pk",hide_table_of_contents:!1},i=void 0,a={unversionedId:"graphql/mutations/update-profile-by-pk",id:"graphql/mutations/update-profile-by-pk",title:"update_profile_by_pk",description:'update single row of the table: "profile"',source:"@site/docs/07-graphql/mutations/update-profile-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-profile-by-pk",permalink:"/next/graphql/mutations/update-profile-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-profile-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-profile-by-pk",title:"update_profile_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_posts_params",permalink:"/next/graphql/mutations/update-posts-params"},next:{title:"update_profile",permalink:"/next/graphql/mutations/update-profile"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>profile_inc_input</code>)",id:"_inc-profile_inc_input",level:4},{value:"<code>_set</code> (<code>profile_set_input</code>)",id:"_set-profile_set_input",level:4},{value:"<code>pk_columns</code> (<code>profile_pk_columns_input!</code>)",id:"pk_columns-profile_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile</code>",id:"profile",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'update single row of the table: "profile"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"update_profile_by_pk(\n  _inc: profile_inc_input\n  _set: profile_set_input\n  pk_columns: profile_pk_columns_input!\n): profile\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"_inc-profile_inc_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/profile-inc-input"},(0,p.kt)("inlineCode",{parentName:"a"},"profile_inc_input")),")"),(0,p.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,p.kt)("h4",{id:"_set-profile_set_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/profile-set-input"},(0,p.kt)("inlineCode",{parentName:"a"},"profile_set_input")),")"),(0,p.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,p.kt)("h4",{id:"pk_columns-profile_pk_columns_input"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/profile-pk-columns-input"},(0,p.kt)("inlineCode",{parentName:"a"},"profile_pk_columns_input!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"profile"},(0,p.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,p.kt)("inlineCode",{parentName:"a"},"profile"))),(0,p.kt)("p",null,'columns and relationships of "profile"'))}c.isMDXComponent=!0}}]);