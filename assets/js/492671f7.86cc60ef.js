"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[33285],{3905:function(e,o,t){t.d(o,{Zo:function(){return s},kt:function(){return u}});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},s=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},_=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),_=c(t),u=r,m=_["".concat(l,".").concat(u)]||_[u]||d[u]||a;return t?n.createElement(m,i(i({ref:o},s),{},{components:t})):n.createElement(m,i({ref:o},s))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=_;var p={};for(var l in o)hasOwnProperty.call(o,l)&&(p[l]=o[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},74501:function(e,o,t){t.r(o),t.d(o,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"reaction-bool-exp",title:"reaction_bool_exp",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/reaction-bool-exp",id:"version-4.1.0/graphql/inputs/reaction-bool-exp",title:"reaction_bool_exp",description:"Boolean expression to filter rows from the table \"reaction\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/reaction-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reaction-bool-exp",permalink:"/4.1.0/graphql/inputs/reaction-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/reaction-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"reaction-bool-exp",title:"reaction_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_avg_order_by",permalink:"/4.1.0/graphql/inputs/reaction-avg-order-by"},next:{title:"reaction_max_order_by",permalink:"/4.1.0/graphql/inputs/reaction-max-order-by"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[reaction_bool_exp!]</code>)",id:"_and-reaction_bool_exp",level:4},{value:"<code>_not</code> (<code>reaction_bool_exp</code>)",id:"_not-reaction_bool_exp",level:4},{value:"<code>_or</code> (<code>[reaction_bool_exp!]</code>)",id:"_or-reaction_bool_exp",level:4},{value:"<code>author_address</code> (<code>String_comparison_exp</code>)",id:"author_address-string_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>value</code> (<code>jsonb_comparison_exp</code>)",id:"value-jsonb_comparison_exp",level:4}],_={toc:d};function u(e){var o=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},_,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"reaction\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input reaction_bool_exp {\n  _and: [reaction_bool_exp!]\n  _not: reaction_bool_exp\n  _or: [reaction_bool_exp!]\n  author_address: String_comparison_exp\n  id: bigint_comparison_exp\n  post: post_bool_exp\n  value: jsonb_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"reaction_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"author_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"post-post_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,a.kt)("h4",{id:"value-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"value"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}u.isMDXComponent=!0}}]);