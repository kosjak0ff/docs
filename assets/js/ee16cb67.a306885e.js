"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[60618],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>l});var u=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);r&&(u=u.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,u)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,u,s=function(e,r){if(null==e)return{};var t,u,s={},a=Object.keys(e);for(u=0;u<a.length;u++)t=a[u],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(u=0;u<a.length;u++)t=a[u],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=u.createContext({}),m=function(e){var r=u.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},c=function(e){var r=m(e.components);return u.createElement(o.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return u.createElement(u.Fragment,{},r)}},_=u.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),_=m(t),l=s,b=_["".concat(o,".").concat(l)]||_[l]||i[l]||a;return t?u.createElement(b,n(n({ref:r},c),{},{components:t})):u.createElement(b,n({ref:r},c))}));function l(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,n=new Array(a);n[0]=_;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,n[1]=p;for(var m=2;m<a;m++)n[m]=t[m];return u.createElement.apply(null,n)}return u.createElement.apply(null,t)}_.displayName="MDXCreateElement"},89349:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>i,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var u=t(87462),s=(t(67294),t(3905));const a={id:"update-subspace-user-group-member",title:"update_subspace_user_group_member",hide_table_of_contents:!1},n=void 0,p={unversionedId:"graphql/mutations/update-subspace-user-group-member",id:"graphql/mutations/update-subspace-user-group-member",title:"update_subspace_user_group_member",description:'update data of the table: "subspaceusergroup_member"',source:"@site/docs/07-graphql/mutations/update-subspace-user-group-member.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-subspace-user-group-member",permalink:"/next/graphql/mutations/update-subspace-user-group-member",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-subspace-user-group-member.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-subspace-user-group-member",title:"update_subspace_user_group_member",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_subspace_user_group_by_pk",permalink:"/next/graphql/mutations/update-subspace-user-group-by-pk"},next:{title:"update_subspace_user_group",permalink:"/next/graphql/mutations/update-subspace-user-group"}},o={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>subspace_user_group_member_inc_input</code>)",id:"_inc-subspace_user_group_member_inc_input",level:4},{value:"<code>_set</code> (<code>subspace_user_group_member_set_input</code>)",id:"_set-subspace_user_group_member_set_input",level:4},{value:"<code>where</code> (<code>subspace_user_group_member_bool_exp!</code>)",id:"where-subspace_user_group_member_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group_member_mutation_response</code>",id:"subspace_user_group_member_mutation_response",level:4}],c={toc:m};function i(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,u.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'update data of the table: "subspace_user_group_member"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"update_subspace_user_group_member(\n  _inc: subspace_user_group_member_inc_input\n  _set: subspace_user_group_member_set_input\n  where: subspace_user_group_member_bool_exp!\n): subspace_user_group_member_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"_inc-subspace_user_group_member_inc_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-inc-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_inc_input")),")"),(0,s.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,s.kt)("h4",{id:"_set-subspace_user_group_member_set_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-set-input"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_set_input")),")"),(0,s.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,s.kt)("h4",{id:"where-subspace_user_group_member_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp!")),")"),(0,s.kt)("p",null,"filter the rows which have to be updated"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_user_group_member_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "subspace_user_group_member"'))}i.isMDXComponent=!0}}]);