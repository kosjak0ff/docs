"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32988],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),_=p(n),u=a,m=_["".concat(c,".").concat(u)]||_[u]||s[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=_;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},51864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"int-8-comparison-exp",title:"_int8_comparison_exp",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/inputs/int-8-comparison-exp",id:"graphql/inputs/int-8-comparison-exp",title:"_int8_comparison_exp",description:"Boolean expression to compare columns of type \"_int8\". All fields are combined with logical 'AND'.",source:"@site/docs/07-graphql/inputs/int-8-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/int-8-comparison-exp",permalink:"/next/graphql/inputs/int-8-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/int-8-comparison-exp.mdx",tags:[],version:"current",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"int-8-comparison-exp",title:"_int8_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-order-by"},next:{title:"jsonb_comparison_exp",permalink:"/next/graphql/inputs/jsonb-comparison-exp"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>_int8</code>)",id:"_eq-_int8",level:4},{value:"<code>_gt</code> (<code>_int8</code>)",id:"_gt-_int8",level:4},{value:"<code>_gte</code> (<code>_int8</code>)",id:"_gte-_int8",level:4},{value:"<code>_in</code> (<code>[_int8!]</code>)",id:"_in-_int8",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>_int8</code>)",id:"_lt-_int8",level:4},{value:"<code>_lte</code> (<code>_int8</code>)",id:"_lte-_int8",level:4},{value:"<code>_neq</code> (<code>_int8</code>)",id:"_neq-_int8",level:4},{value:"<code>_nin</code> (<code>[_int8!]</code>)",id:"_nin-_int8",level:4}],_={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to compare columns of type \"_int8\". All fields are combined with logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input _int8_comparison_exp {\n  _eq: _int8\n  _gt: _int8\n  _gte: _int8\n  _in: [_int8!]\n  _is_null: Boolean\n  _lt: _int8\n  _lte: _int8\n  _neq: _int8\n  _nin: [_int8!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_eq-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_gt-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_gte-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_in-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"[_int8!]")),")"),(0,i.kt)("h4",{id:"_is_null-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"_lt-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_lte-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_neq-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"_int8")),")"),(0,i.kt)("h4",{id:"_nin-_int8"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int-8"},(0,i.kt)("inlineCode",{parentName:"a"},"[_int8!]")),")"))}u.isMDXComponent=!0}}]);