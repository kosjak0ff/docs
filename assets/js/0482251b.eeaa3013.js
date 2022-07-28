"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1454],{3905:function(e,o,r){r.d(o,{Zo:function(){return c},kt:function(){return b}});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function p(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?p(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),u=function(e){var o=n.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},c=function(e){var o=u(e.components);return n.createElement(i.Provider,{value:o},e.children)},_={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},l=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=t,d=l["".concat(i,".").concat(b)]||l[b]||_[b]||p;return r?n.createElement(d,a(a({ref:o},c),{},{components:r})):n.createElement(d,a({ref:o},c))}));function b(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var p=r.length,a=new Array(p);a[0]=l;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},89630:function(e,o,r){r.r(o),r.d(o,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return _}});var n=r(87462),t=r(63366),p=(r(67294),r(3905)),a=["components"],s={id:"subspace-user-group-bool-exp",title:"subspace_user_group_bool_exp",hide_table_of_contents:!1},i=void 0,u={unversionedId:"graphql/inputs/subspace-user-group-bool-exp",id:"graphql/inputs/subspace-user-group-bool-exp",title:"subspace_user_group_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceusergroup\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-user-group-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-bool-exp",permalink:"/next/graphql/inputs/subspace-user-group-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-user-group-bool-exp",title:"subspace_user_group_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_avg_order_by",permalink:"/next/graphql/inputs/subspace-user-group-avg-order-by"},next:{title:"subspace_user_group_max_order_by",permalink:"/next/graphql/inputs/subspace-user-group-max-order-by"}},c={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_user_group_bool_exp!]</code>)",id:"_and-subspace_user_group_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_user_group_bool_exp</code>)",id:"_not-subspace_user_group_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_user_group_bool_exp!]</code>)",id:"_or-subspace_user_group_bool_exp",level:4},{value:"<code>description</code> (<code>String_comparison_exp</code>)",id:"description-string_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>members</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"members-subspace_user_group_member_bool_exp",level:4},{value:"<code>name</code> (<code>String_comparison_exp</code>)",id:"name-string_comparison_exp",level:4},{value:"<code>permissions</code> (<code>_text_comparison_exp</code>)",id:"permissions-_text_comparison_exp",level:4},{value:"<code>section</code> (<code>subspace_section_bool_exp</code>)",id:"section-subspace_section_bool_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4}],l={toc:_};function b(e){var o=e.components,r=(0,t.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:o,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_user_group\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_bool_exp {\n  _and: [subspace_user_group_bool_exp!]\n  _not: subspace_user_group_bool_exp\n  _or: [subspace_user_group_bool_exp!]\n  description: String_comparison_exp\n  id: bigint_comparison_exp\n  members: subspace_user_group_member_bool_exp\n  name: String_comparison_exp\n  permissions: _text_comparison_exp\n  section: subspace_section_bool_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_bool_exp!]")),")"),(0,p.kt)("h4",{id:"description-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"id-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"members-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"members"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,p.kt)("h4",{id:"name-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"permissions-_text_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/text-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"_text_comparison_exp")),")"),(0,p.kt)("h4",{id:"section-subspace_section_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,p.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,p.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}b.isMDXComponent=!0}}]);