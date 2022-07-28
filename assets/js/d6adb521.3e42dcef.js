"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54578],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"endpoints",title:"Endpoints",sidebar_label:"Endpoints",slug:"endpoints"},s="Endpoints",p={unversionedId:"mainnet/endpoints",id:"version-4.1.0/mainnet/endpoints",title:"Endpoints",description:"Here below the list of all the useful endpoints you might need to interact with mainnet data.",source:"@site/versioned_docs/version-4.1.0/06-mainnet/06-endpoints.md",sourceDirName:"06-mainnet",slug:"/mainnet/endpoints",permalink:"/mainnet/endpoints",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/06-mainnet/06-endpoints.md",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:6,frontMatter:{id:"endpoints",title:"Endpoints",sidebar_label:"Endpoints",slug:"endpoints"},sidebar:"docs",previous:{title:"Security",permalink:"/mainnet/security"},next:{title:"Overview",permalink:"/graphql/overview"}},c={},d=[{value:"RPC",id:"rpc",level:2},{value:"REST &amp; gRPC",id:"rest--grpc",level:2},{value:"GQL",id:"gql",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Here below the list of all the useful endpoints you might need to interact with mainnet data."),(0,o.kt)("h2",{id:"rpc"},"RPC"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://rpc.mainnet.desmos.network")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"http://135.181.60.250:26557")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://desmos-rpc01.skynetvalidators.com")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://rpc-desmos.itastakers.com")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://rpc.desmos.nodes.guru"))),(0,o.kt)("h2",{id:"rest--grpc"},"REST & gRPC"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://api.mainnet.desmos.network")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"http://135.181.60.250:1917")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://lcd-desmos.itastakers.com"))),(0,o.kt)("h2",{id:"gql"},"GQL"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://gql.mainnet.desmos.network/v1/graphql")))}m.isMDXComponent=!0}}]);