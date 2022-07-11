"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39715],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)t=l[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)t=l[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=s.createContext({}),p=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},c=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return t?s.createElement(k,r(r({ref:n},u),{},{components:t})):s.createElement(k,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},30024:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var s=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],o={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},i="Client",p={unversionedId:"developers/modules/relationships/client",id:"version-4.1.0/developers/modules/relationships/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/06-client.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/client",permalink:"/developers/modules/relationships/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/06-client.md",tags:[],version:"4.1.0",lastUpdatedAt:1657539711,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:6,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Events",permalink:"/developers/modules/relationships/events"},next:{title:"Overview",permalink:"/developers/modules/subspaces/overview"}},u={},d=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"relationships",id:"relationships",level:4},{value:"blocks",id:"blocks",level:4},{value:"Transactions",id:"transactions",level:3},{value:"create-relationship",id:"create-relationship",level:4},{value:"delete-relationship",id:"delete-relationship",level:4},{value:"block",id:"block",level:4},{value:"unblock",id:"unblock",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Relationships",id:"relationships-1",level:3},{value:"Blocks",id:"blocks-1",level:3},{value:"REST",id:"rest",level:2},{value:"Relationships",id:"relationships-2",level:2},{value:"Blocks",id:"blocks-2",level:2}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client"},"Client"),(0,l.kt)("h2",{id:"cli"},"CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," module using the CLI. "),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," state. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships --help\n")),(0,l.kt)("h4",{id:"relationships"},"relationships"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," command allows user to query the relationships inside a subspace having a specific id, providing an optional creator and counterparty. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships [subspace-id] [[creator]] [[counterparty]] [flags]\n")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships relationships 1 desmos1... desmos1...\n")),(0,l.kt)("p",null,"Example Output: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nrelationships:\n- counterparty: desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns\n  creator: desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu\n  subspace_id: "1"\n')),(0,l.kt)("h4",{id:"blocks"},"blocks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"blocks")," command allows to query the user blocks stored inside a subspace having a given id, providing an optional blocker and blocked addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships blocks [subspace-id] [[blocker]] [[blocked]] [flags]\n")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships blocks 1 desmos1... desmos1...\n")),(0,l.kt)("p",null,"Example Output: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'blocks:\n  - blocked: desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns\n    blocker: desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu\n    reason: ""\n    subspace_id: "1"\npagination:\n  next_key: null\n  total: "0"\n')),(0,l.kt)("h3",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," module. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships --help\n")),(0,l.kt)("h4",{id:"create-relationship"},"create-relationship"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"create-relationship")," allows users to create a relationship with another user inside a specific subspace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships create-relationship [counterparty] [subspace-id] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships create-relationship desmos1... 1\n")),(0,l.kt)("h4",{id:"delete-relationship"},"delete-relationship"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"delete-relationship")," allows users to delete an existing relationship. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships delete-relationship [counterparty] [subspace-id] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships delete-relationship desmos1... 1\n")),(0,l.kt)("h4",{id:"block"},"block"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"block")," command allows users to block another user inside a specific subspace, optionally providing a reason. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships block [address] [subspace] [[reason]] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'desmos tx relationships block desmos1... 1 "My reason"\n')),(0,l.kt)("h4",{id:"unblock"},"unblock"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"unblock")," command allows users to unblock a previously blocked user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships unblock [address] [subspace] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx relationships unblock desmos1... 1\n")),(0,l.kt)("h2",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," module gRPC endpoints."),(0,l.kt)("h3",{id:"relationships-1"},"Relationships"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Relationships")," endpoint allows users to query for the relationships inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.relationships.v1.Query/Relationships\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"subspace_id": "1"}\' localhost:9090 desmos.relationships.v1.Query/Relationships\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "creator": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu",\n      "counterparty": "desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns",\n      "subspaceId": "1"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,l.kt)("h3",{id:"blocks-1"},"Blocks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Blocks")," endpoint allows users to query for the user blocks inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.relationships.v1.Query/Blocks\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"subspace_id": "1"}\' localhost:9090 desmos.relationships.v1.Query/Blocks\n')),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "blocks": [\n    {\n      "blocker": "desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu",\n      "blocked": "desmos1tamzg6rfj9wlmqhthgfmn9awq0d8ssgfr8fjns",\n      "subspaceId": "1"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,l.kt)("h2",{id:"rest"},"REST"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," module using REST endpoints. "),(0,l.kt)("h2",{id:"relationships-2"},"Relationships"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"relationships")," endpoint allows users to query for the relationships inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/relationships/v1/relationships?subspace_id={subspaceID}&user={userAddress}&counterparty={counterpartyAddress}\n")),(0,l.kt)("h2",{id:"blocks-2"},"Blocks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"blocks")," endpoint allows users to query for the user blocks inside a subspace having a given id, optionally providing user and counterparty addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/desmos/relationships/v1/blocks?subspace_id={subspaceID}&blocker={blockerAddress}&blocked={blockedAddress}\n")))}m.isMDXComponent=!0}}]);