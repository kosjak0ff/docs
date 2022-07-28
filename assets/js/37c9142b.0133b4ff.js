"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97447],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||s;return r?n.createElement(k,l(l({ref:t},i),{},{components:r})):n.createElement(k,l({ref:t},i))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22509:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],o={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},p="Client",u={unversionedId:"developers/modules/reports/client",id:"developers/modules/reports/client",title:"Client",description:"CLI",source:"@site/docs/02-developers/02-modules/reports/08-client.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/client",permalink:"/next/developers/modules/reports/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/reports/08-client.md",tags:[],version:"current",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:8,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Parameters",permalink:"/next/developers/modules/reports/params"},next:{title:"Overview",permalink:"/next/developers/modules/fees/overview"}},i={},d=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"report",id:"report",level:4},{value:"reports",id:"reports",level:4},{value:"reason",id:"reason",level:3},{value:"reasons",id:"reasons",level:3},{value:"params",id:"params",level:3},{value:"gRPC",id:"grpc",level:2},{value:"Report",id:"report-1",level:3},{value:"Reports",id:"reports-1",level:3},{value:"Reason",id:"reason-1",level:3},{value:"Reasons",id:"reasons-1",level:3},{value:"Params",id:"params-1",level:3},{value:"REST",id:"rest",level:2},{value:"Report",id:"report-2",level:3},{value:"Reports",id:"reports-2",level:3},{value:"Reason",id:"reason-2",level:3},{value:"Reasons",id:"reasons-2",level:3},{value:"Params",id:"params-2",level:3}],m={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"client"},"Client"),(0,s.kt)("h2",{id:"cli"},"CLI"),(0,s.kt)("p",null,"A user can query and interact with the ",(0,s.kt)("inlineCode",{parentName:"p"},"reports")," module using the CLI."),(0,s.kt)("h3",{id:"query"},"Query"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,s.kt)("inlineCode",{parentName:"p"},"reports")," state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"desmos query reports --help\n")),(0,s.kt)("h4",{id:"report"},"report"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"report")," query command allows users to get the report with the given id inside the given subspace id."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," desmos query reports report [subspace-id] [report-id] [flags]\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," desmos query reports report 1 1\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'report:\n  creation_date: "2022-07-01T10:11:09.229623Z"\n  id: "1"\n  message: This is a test report\n  reasons_ids:\n  - 1\n  reporter: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  subspace_id: "1"\n  target:\n    \'@type\': /desmos.reports.v1.PostTarget\n    post_id: "1"\n')),(0,s.kt)("h4",{id:"reports"},"reports"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"reports")," query command allows users to get all the reports inside the subspace with the given id."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports reports [subspace-id] [flags]\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports reports 1 --page=1 --limit=100\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nreports:\n- creation_date: "2022-07-01T10:11:09.229623Z"\n  id: "1"\n  message: This is a test report\n  reasons_ids:\n  - 1\n  reporter: desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3\n  subspace_id: "1"\n  target:\n    \'@type\': /desmos.reports.v1.PostTarget\n    post_id: "1"\n')),(0,s.kt)("h3",{id:"reason"},"reason"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"reason")," query command allows users to get the reason with the given id inside the subspace with the given id."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports reason [subspace-id] [reason-id] [flags]\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports reason 1 1\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'reason:\n  description: Spam content or user\n  id: 1\n  subspace_id: "1"\n  title: Spam\n')),(0,s.kt)("h3",{id:"reasons"},"reasons"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"reasons")," query command allows users to get all the reasons inside the subspace with the given id."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports reasons [subspace-id] [flags]\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports reasons 1 --page=1 --limit=100\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'pagination:\n  next_key: null\n  total: "0"\nreasons:\n- description: Spam content or user\n  id: 1\n  subspace_id: "1"\n  title: Spam\n')),(0,s.kt)("h3",{id:"params"},"params"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"params")," query command allows users to get the currently set parameters of the module."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports params [flags]\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query reports params\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'standard_reasons:\n  - id: 1\n    title: "Spam"\n    description: "Spam user or content"\n')),(0,s.kt)("h2",{id:"grpc"},"gRPC"),(0,s.kt)("p",null,"A user can query the ",(0,s.kt)("inlineCode",{parentName:"p"},"reports")," module gRPC endpoints."),(0,s.kt)("h3",{id:"report-1"},"Report"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Report")," endpoint allows users to query a report given its ID and the ID of the subspace where its made."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reports.v1.Query/Report\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "report_id":1}\' localhost:9090 desmos.reports.v1.Query/Report\n')),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "report": {\n    "subspaceId": "1",\n    "id": "1",\n    "reasonsIds": [\n      1\n    ],\n    "message": "This is a test report",\n    "reporter": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n    "target": {"@type":"/desmos.reports.v1.PostTarget","postId":"1"},\n    "creationDate": "2022-07-01T10:11:09.229623Z"\n  }\n}\n')),(0,s.kt)("h3",{id:"reports-1"},"Reports"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Reports")," endpoint allows users to query all the reports of the subspace with the given ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reports.v1.Query/Reports\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext -d '{\"subspace_id\":1}' localhost:9090 desmos.reports.v1.Query/Reports\n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reports": [\n    {\n      "subspaceId": "1",\n      "id": "1",\n      "reasonsIds": [\n        1\n      ],\n      "message": "This is a test report",\n      "reporter": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n      "target": {"@type":"/desmos.reports.v1.PostTarget","postId":"1"},\n      "creationDate": "2022-07-01T10:11:09.229623Z"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n\n')),(0,s.kt)("h3",{id:"reason-1"},"Reason"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Reason")," endpoint allows users to query the reason given its ID and the ID of the subspace where its made."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reports.v1.Query/Reason\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext -d \'{"subspace_id":1, "reason_id":1}\' localhost:9090 desmos.reports.v1.Query/Reason \n')),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reason": {\n    "subspaceId": "1",\n    "id": 1,\n    "title": "Spam",\n    "description": "Spam content or user"\n  }\n}\n')),(0,s.kt)("h3",{id:"reasons-1"},"Reasons"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Reasons")," endpoint allows users to query all the reasons of the subspace with the given ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reports.v1.Query/Reasons\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext -d '{\"subspace_id\":1}' localhost:9090 desmos.reports.v1.Query/Reasons \n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reasons": [\n    {\n      "subspaceId": "1",\n      "id": 1,\n      "title": "Spam",\n      "description": "Spam content or user"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,s.kt)("h3",{id:"params-1"},"Params"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the module's parameters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.reports.v1.Query/Params\n")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"grpcurl -plaintext localhost:9090 desmos.reports.v1.Query/Params \n")),(0,s.kt)("p",null,"Example output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "params": {\n    "standard_reasons": [\n      {\n        "id": "1",\n        "title": "Spam",\n        "description": "Spam user or content"\n      }\n    ]\n  }\n}\n')),(0,s.kt)("h2",{id:"rest"},"REST"),(0,s.kt)("p",null,"A user can query the ",(0,s.kt)("inlineCode",{parentName:"p"},"reports")," module using REST endpoints."),(0,s.kt)("h3",{id:"report-2"},"Report"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Report")," endpoint allows users to query a report given its ID and the ID of the subspace where its made."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/desmos/reports/v1/subspaces/{subspace_id}/reports\n")),(0,s.kt)("h3",{id:"reports-2"},"Reports"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Reports")," endpoint allows users to query all the reports of the subspace with the given ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/desmos/reports/v1/subspaces/{subspace_id}/reports\n")),(0,s.kt)("h3",{id:"reason-2"},"Reason"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Reason")," endpoint allows users to query the reason given its ID and the ID of the subspace where its made."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/desmos/reports/v1/subspaces/{subspace_id}/reasons/{reason_id}\n")),(0,s.kt)("h3",{id:"reasons-2"},"Reasons"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Reasons")," endpoint allows users to query all the reasons of the subspace with the given ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/desmos/reports/v1/subspaces/{subspace_id}/reasons\n")),(0,s.kt)("h3",{id:"params-2"},"Params"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Params")," endpoint allows users to query the module's parameters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/desmos/reports/v1/params\n")))}c.isMDXComponent=!0}}]);