"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const p={id:"posts-params-append-input",title:"posts_params_append_input",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/inputs/posts-params-append-input",id:"graphql/inputs/posts-params-append-input",title:"posts_params_append_input",description:"append existing jsonb value of filtered columns with new jsonb value",source:"@site/docs/07-graphql/inputs/posts-params-append-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/posts-params-append-input",permalink:"/next/graphql/inputs/posts-params-append-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/posts-params-append-input.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"posts-params-append-input",title:"posts_params_append_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_variance_order_by",permalink:"/next/graphql/inputs/post-variance-order-by"},next:{title:"posts_params_bool_exp",permalink:"/next/graphql/inputs/posts-params-bool-exp"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>params</code> (<code>jsonb</code>)",id:"params-jsonb",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input posts_params_append_input {\n  params: jsonb\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"params-jsonb"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb")),")"))}u.isMDXComponent=!0}}]);