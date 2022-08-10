"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[91893],{3905:(e,o,r)=>{r.d(o,{Zo:()=>c,kt:()=>m});var a=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,a,t=function(e,o){if(null==e)return{};var r,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),_=function(e){var o=a.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):p(p({},o),e)),r},c=function(e){var o=_(e.components);return a.createElement(i.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},d=a.forwardRef((function(e,o){var r=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=_(r),m=t,u=d["".concat(i,".").concat(m)]||d[m]||l[m]||n;return r?a.createElement(u,p(p({ref:o},c),{},{components:r})):a.createElement(u,p({ref:o},c))}));function m(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=r.length,p=new Array(n);p[0]=d;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,p[1]=s;for(var _=2;_<n;_++)p[_]=r[_];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88876:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>_});var a=r(87462),t=(r(67294),r(3905));const n={id:"subspace-bool-exp",title:"subspace_bool_exp",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/subspace-bool-exp",id:"graphql/inputs/subspace-bool-exp",title:"subspace_bool_exp",description:"Boolean expression to filter rows from the table \"subspace\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-bool-exp",permalink:"/next/graphql/inputs/subspace-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-bool-exp",title:"subspace_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"String_comparison_exp",permalink:"/next/graphql/inputs/string-comparison-exp"},next:{title:"subspace_free_text_params_bool_exp",permalink:"/next/graphql/inputs/subspace-free-text-params-bool-exp"}},i={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_bool_exp!]</code>)",id:"_and-subspace_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_bool_exp</code>)",id:"_not-subspace_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_bool_exp!]</code>)",id:"_or-subspace_bool_exp",level:4},{value:"<code>creation_time</code> (<code>timestamp_comparison_exp</code>)",id:"creation_time-timestamp_comparison_exp",level:4},{value:"<code>creator_address</code> (<code>String_comparison_exp</code>)",id:"creator_address-string_comparison_exp",level:4},{value:"<code>description</code> (<code>String_comparison_exp</code>)",id:"description-string_comparison_exp",level:4},{value:"<code>free_text_reactions_params</code> (<code>subspace_free_text_params_bool_exp</code>)",id:"free_text_reactions_params-subspace_free_text_params_bool_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>name</code> (<code>String_comparison_exp</code>)",id:"name-string_comparison_exp",level:4},{value:"<code>owner_address</code> (<code>String_comparison_exp</code>)",id:"owner_address-string_comparison_exp",level:4},{value:"<code>posts</code> (<code>post_bool_exp</code>)",id:"posts-post_bool_exp",level:4},{value:"<code>registered_reactions</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"registered_reactions-subspace_registered_reaction_bool_exp",level:4},{value:"<code>registered_reactions_params</code> (<code>subspace_registered_reaction_params_bool_exp</code>)",id:"registered_reactions_params-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>report_reasons</code> (<code>subspace_report_reason_bool_exp</code>)",id:"report_reasons-subspace_report_reason_bool_exp",level:4},{value:"<code>reports</code> (<code>report_bool_exp</code>)",id:"reports-report_bool_exp",level:4},{value:"<code>sections</code> (<code>subspace_section_bool_exp</code>)",id:"sections-subspace_section_bool_exp",level:4},{value:"<code>treasury_address</code> (<code>String_comparison_exp</code>)",id:"treasury_address-string_comparison_exp",level:4},{value:"<code>user_groups</code> (<code>subspace_user_group_bool_exp</code>)",id:"user_groups-subspace_user_group_bool_exp",level:4}],c={toc:_};function l(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"subspace\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_bool_exp {\n  _and: [subspace_bool_exp!]\n  _not: subspace_bool_exp\n  _or: [subspace_bool_exp!]\n  creation_time: timestamp_comparison_exp\n  creator_address: String_comparison_exp\n  description: String_comparison_exp\n  free_text_reactions_params: subspace_free_text_params_bool_exp\n  id: bigint_comparison_exp\n  name: String_comparison_exp\n  owner_address: String_comparison_exp\n  posts: post_bool_exp\n  registered_reactions: subspace_registered_reaction_bool_exp\n  registered_reactions_params: subspace_registered_reaction_params_bool_exp\n  report_reasons: subspace_report_reason_bool_exp\n  reports: report_bool_exp\n  sections: subspace_section_bool_exp\n  treasury_address: String_comparison_exp\n  user_groups: subspace_user_group_bool_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-subspace_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-subspace_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-subspace_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_bool_exp!]")),")"),(0,t.kt)("h4",{id:"creation_time-timestamp_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/timestamp-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"timestamp_comparison_exp")),")"),(0,t.kt)("h4",{id:"creator_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"description-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"free_text_reactions_params-subspace_free_text_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"free_text_reactions_params"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp")),")"),(0,t.kt)("h4",{id:"id-bigint_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",{id:"name-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"owner_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"owner_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"posts-post_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,t.kt)("h4",{id:"registered_reactions-subspace_registered_reaction_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"registered_reactions"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,t.kt)("h4",{id:"registered_reactions_params-subspace_registered_reaction_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"registered_reactions_params"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_bool_exp")),")"),(0,t.kt)("h4",{id:"report_reasons-subspace_report_reason_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"report_reasons"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"),(0,t.kt)("h4",{id:"reports-report_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"reports"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/report-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"report_bool_exp")),")"),(0,t.kt)("h4",{id:"sections-subspace_section_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"sections"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,t.kt)("h4",{id:"treasury_address-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"treasury_address"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"user_groups-subspace_user_group_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"))}l.isMDXComponent=!0}}]);