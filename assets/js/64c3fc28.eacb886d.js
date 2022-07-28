"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5806],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return u}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),_=c(t),u=o,b=_["".concat(p,".").concat(u)]||_[u]||l[u]||a;return t?n.createElement(b,i(i({ref:r},d),{},{components:t})):n.createElement(b,i({ref:r},d))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=_;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},95514:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"subspace-registered-reaction-bool-exp",title:"subspace_registered_reaction_bool_exp",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/subspace-registered-reaction-bool-exp",id:"version-4.1.0/graphql/inputs/subspace-registered-reaction-bool-exp",title:"subspace_registered_reaction_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceregisteredreaction\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-registered-reaction-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-bool-exp",permalink:"/4.1.0/graphql/inputs/subspace-registered-reaction-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-registered-reaction-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"subspace-registered-reaction-bool-exp",title:"subspace_registered_reaction_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_avg_order_by",permalink:"/4.1.0/graphql/inputs/subspace-registered-reaction-avg-order-by"},next:{title:"subspace_registered_reaction_max_order_by",permalink:"/4.1.0/graphql/inputs/subspace-registered-reaction-max-order-by"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_registered_reaction_bool_exp!]</code>)",id:"_and-subspace_registered_reaction_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"_not-subspace_registered_reaction_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_registered_reaction_bool_exp!]</code>)",id:"_or-subspace_registered_reaction_bool_exp",level:4},{value:"<code>display_value</code> (<code>String_comparison_exp</code>)",id:"display_value-string_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>shorthand_code</code> (<code>String_comparison_exp</code>)",id:"shorthand_code-string_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4}],_={toc:l};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},_,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_registered_reaction\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_bool_exp {\n  _and: [subspace_registered_reaction_bool_exp!]\n  _not: subspace_registered_reaction_bool_exp\n  _or: [subspace_registered_reaction_bool_exp!]\n  display_value: String_comparison_exp\n  id: bigint_comparison_exp\n  shorthand_code: String_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"display_value-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"display_value"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"shorthand_code-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"shorthand_code"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,a.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}u.isMDXComponent=!0}}]);