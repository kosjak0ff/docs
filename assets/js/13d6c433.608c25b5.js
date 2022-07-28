"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48747],{3905:function(e,r,o){o.d(r,{Zo:function(){return c},kt:function(){return d}});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),d=a,_=m["".concat(l,".").concat(d)]||m[d]||f[d]||n;return o?t.createElement(_,p(p({ref:r},c),{},{components:o})):t.createElement(_,p({ref:r},c))}));function d(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<n;s++)p[s]=o[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},92381:function(e,r,o){o.r(r),o.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var t=o(87462),a=o(63366),n=(o(67294),o(3905)),p=["components"],i={id:"profiles-params-bool-exp",title:"profiles_params_bool_exp",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/inputs/profiles-params-bool-exp",id:"version-4.1.0/graphql/inputs/profiles-params-bool-exp",title:"profiles_params_bool_exp",description:"Boolean expression to filter rows from the table \"profiles_params\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/profiles-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profiles-params-bool-exp",permalink:"/4.1.0/graphql/inputs/profiles-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/profiles-params-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"profiles-params-bool-exp",title:"profiles_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship_order_by",permalink:"/4.1.0/graphql/inputs/profile-relationship-order-by"},next:{title:"profiles_params_order_by",permalink:"/4.1.0/graphql/inputs/profiles-params-order-by"}},c={},f=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[profiles_params_bool_exp!]</code>)",id:"_and-profiles_params_bool_exp",level:4},{value:"<code>_not</code> (<code>profiles_params_bool_exp</code>)",id:"_not-profiles_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[profiles_params_bool_exp!]</code>)",id:"_or-profiles_params_bool_exp",level:4},{value:"<code>params</code> (<code>jsonb_comparison_exp</code>)",id:"params-jsonb_comparison_exp",level:4}],m={toc:f};function d(e){var r=e.components,o=(0,a.Z)(e,p);return(0,n.kt)("wrapper",(0,t.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"profiles_params\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input profiles_params_bool_exp {\n  _and: [profiles_params_bool_exp!]\n  _not: profiles_params_bool_exp\n  _or: [profiles_params_bool_exp!]\n  params: jsonb_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-profiles_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[profiles_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-profiles_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-profiles_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[profiles_params_bool_exp!]")),")"),(0,n.kt)("h4",{id:"params-jsonb_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}d.isMDXComponent=!0}}]);