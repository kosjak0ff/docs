"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9389],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},84773:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={id:"migrating",title:"Migrating",sidebar_position:5},i="Migrating a validator",l={unversionedId:"validators/migrating",id:"version-2.3/validators/migrating",title:"Migrating",description:"In some cases, you might want to move your running validator from one server to another. For example, this might be the case if you find a cheaper alternative or if your host does not meet the requirements.",source:"@site/versioned_docs/version-2.3/04-validators/04-migrating.md",sourceDirName:"04-validators",slug:"/validators/migrating",permalink:"/2.3/validators/migrating",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/04-validators/04-migrating.md",tags:[],version:"2.3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:5,frontMatter:{id:"migrating",title:"Migrating",sidebar_position:5},sidebar:"version-2.3/docs",previous:{title:"Halting",permalink:"/2.3/validators/halting"},next:{title:"Common Problems",permalink:"/2.3/validators/common-problems"}},d={},s=[{value:"1. Setup new fullnode",id:"1-setup-new-fullnode",level:2},{value:"2. Migrate Data",id:"2-migrate-data",level:2},{value:"Stopping both the validator and the newly synced full node",id:"stopping-both-the-validator-and-the-newly-synced-full-node",level:3},{value:"Backup the following data in the validator node",id:"backup-the-following-data-in-the-validator-node",level:3},{value:"Migrating data to the new fullnode",id:"migrating-data-to-the-new-fullnode",level:3},{value:"Startup the new validator node",id:"startup-the-new-validator-node",level:3},{value:"(Optional) Recover your key",id:"optional-recover-your-key",level:3}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-a-validator"},"Migrating a validator"),(0,a.kt)("p",null,"In some cases, you might want to move your running validator from one server to another. For example, this might be the case if you find a cheaper alternative or if your host does not meet the requirements."),(0,a.kt)("p",null,"In this case, what you need to do is following a two-step procedure:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set and fully sync up a fullnode"),(0,a.kt)("li",{parentName:"ol"},"Migrate data from old node to new node")),(0,a.kt)("h2",{id:"1-setup-new-fullnode"},"1. Setup new fullnode"),(0,a.kt)("p",null,"To avoid as much missed blocks as possible it is recommended that you setup a new server and fully sync up a full node first. To do this,\nyou can read the guide ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/setup"},"here"),"."),(0,a.kt)("p",null,"Proceed to step 2 only if your new node has caught up."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n')),(0,a.kt)("h2",{id:"2-migrate-data"},"2. Migrate Data"),(0,a.kt)("h3",{id:"stopping-both-the-validator-and-the-newly-synced-full-node"},"Stopping both the validator and the newly synced full node"),(0,a.kt)("p",null,"In order to avoid as much side affects as possible we will be stopping both nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl stop desmos\n")),(0,a.kt)("h3",{id:"backup-the-following-data-in-the-validator-node"},"Backup the following data in the validator node"),(0,a.kt)("p",null,"In order to properly migrate our validator node to another server we will need to backup the following data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The validator private key.\nThis is located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/priv_validator_key.json")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The validator consensus state.\nThis is located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.desmos/data/priv_validator_state.json")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you keep your keys on the node make sure you have the secret recovery phrase (mnemonic phrase) associated with your key(s)."))),(0,a.kt)("admonition",{title:"Do not delete your old node yet",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We highly suggest you to delete your old node instance once that the new node is running properly. This will allow you to recover any information if you forgot to do so.")),(0,a.kt)("h3",{id:"migrating-data-to-the-new-fullnode"},"Migrating data to the new fullnode"),(0,a.kt)("p",null,"With both nodes stopped we will be copying the backed up data in to the newly synced fullnode."),(0,a.kt)("admonition",{title:"Warning",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"At this point, both nodes should not be running. This is to prevent any possible side effects such as double signing")),(0,a.kt)("p",null,"Transfer the following backed up files from the old node to the new node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.desmos/config/priv_validator_key.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.desmos/data/priv_validator_state.json"))),(0,a.kt)("h3",{id:"startup-the-new-validator-node"},"Startup the new validator node"),(0,a.kt)("p",null,"Once you have moved your ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_state")," to the newly synced fullnode, it will be recognized as the same validator node."),(0,a.kt)("admonition",{title:"Warning",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key")," should only be online from a single instance. A good practice would be to remove or rename the ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," in the old node so that even if you accidentally start running both nodes, the validator key would only be online for one of them.")),(0,a.kt)("p",null,"With the old validator node stopped, start up the new node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl start desmos\n")),(0,a.kt)("admonition",{title:"Wait before deleting the old node",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We suggest you to wait before deleting the old node. Instead of waiting only to see the blocks syncing, make sure your new node is actually signing blocks as your validator. You will see this by looking at your validator uptime on our ",(0,a.kt)("a",{parentName:"p",href:"https://morpheus.desmos.network/validators"},"explorer"),". If everything is working properly, the uptime should slowly increase.")),(0,a.kt)("h3",{id:"optional-recover-your-key"},"(Optional) Recover your key"),(0,a.kt)("p",null,"If you originally had your key in the previous server you can easily add it back using the secret recovery phrase (mnemonic phrase) you had backed up"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"desmos keys add <key_name> --recover\n")))}u.isMDXComponent=!0}}]);