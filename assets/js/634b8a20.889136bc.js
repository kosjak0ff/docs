"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"update-profile",title:"update_profile",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/mutations/update-profile",id:"graphql/mutations/update-profile",title:"update_profile",description:'update data of the table: "profile"',source:"@site/docs/07-graphql/mutations/update-profile.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-profile",permalink:"/next/graphql/mutations/update-profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-profile.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-profile",title:"update_profile",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_profile_by_pk",permalink:"/next/graphql/mutations/update-profile-by-pk"},next:{title:"update_profiles_params_by_pk",permalink:"/next/graphql/mutations/update-profiles-params-by-pk"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>profile_inc_input</code>)",id:"_inc-profile_inc_input",level:4},{value:"<code>_set</code> (<code>profile_set_input</code>)",id:"_set-profile_set_input",level:4},{value:"<code>where</code> (<code>profile_bool_exp!</code>)",id:"where-profile_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile_mutation_response</code>",id:"profile_mutation_response",level:4}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'update data of the table: "profile"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"update_profile(\n  _inc: profile_inc_input\n  _set: profile_set_input\n  where: profile_bool_exp!\n): profile_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"_inc-profile_inc_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-inc-input"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_inc_input")),")"),(0,o.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,o.kt)("h4",{id:"_set-profile_set_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-set-input"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_set_input")),")"),(0,o.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,o.kt)("h4",{id:"where-profile_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_bool_exp!")),")"),(0,o.kt)("p",null,"filter the rows which have to be updated"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profile_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profile-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "profile"'))}c.isMDXComponent=!0}}]);