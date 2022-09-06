"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(t),k=a,f=h["".concat(c,".").concat(k)]||h[k]||s[k]||r;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"chain-link-proof",title:"chain_link_proof",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/objects/chain-link-proof",id:"graphql/objects/chain-link-proof",title:"chain_link_proof",description:'columns and relationships of "chainlinkproof"',source:"@site/docs/07-graphql/objects/chain-link-proof.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-proof",permalink:"/next/graphql/objects/chain-link-proof",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/chain-link-proof.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-proof",title:"chain_link_proof",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_variance_fields",permalink:"/next/graphql/objects/chain-link-proof-variance-fields"},next:{title:"chain_link_stddev_fields",permalink:"/next/graphql/objects/chain-link-stddev-fields"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_link</code> (<code>chain_link!</code>)",id:"chain_link-chain_link",level:4},{value:"<code>chain_link_id</code> (<code>bigint!</code>)",id:"chain_link_id-bigint",level:4},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>plain_text</code> (<code>String!</code>)",id:"plain_text-string",level:4},{value:"<code>public_key</code> (<code>jsonb!</code>)",id:"public_key-jsonb",level:4},{value:"<code>signature</code> (<code>String!</code>)",id:"signature-string",level:4}],d={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "chain_link_proof"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_proof {\n  chain_link: chain_link!\n  chain_link_id: bigint!\n  height: bigint!\n  id: Int!\n  plain_text: String!\n  public_key(path: String): jsonb!\n  signature: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"chain_link-chain_link"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"chain_link_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h4",{id:"plain_text-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"plain_text"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"public_key-jsonb"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"public_key"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"path-string"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,a.kt)("p",null,"JSON select path"),(0,a.kt)("h4",{id:"signature-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"signature"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}s.isMDXComponent=!0}}]);