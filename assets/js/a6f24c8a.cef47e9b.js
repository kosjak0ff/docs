"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[87365],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},98080:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},s="Parameters",p={unversionedId:"developers/modules/profiles/params",id:"version-4.2.0/developers/modules/profiles/params",title:"Parameters",description:"The profiles module contains the following parameters:",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/06-params.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/params",permalink:"/developers/modules/profiles/params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/06-params.md",tags:[],version:"4.2.0",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:6,frontMatter:{id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},sidebar:"docs",previous:{title:"Events",permalink:"/developers/modules/profiles/events"},next:{title:"Client",permalink:"/developers/modules/profiles/client"}},m={},u=[{value:"OracleParams",id:"oracleparams",level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"The profiles module contains the following parameters: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NicknameParams"),(0,l.kt)("td",{parentName:"tr",align:null},"NicknameParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{ "min_length": "2", "max_length": "1000" }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DTagParams"),(0,l.kt)("td",{parentName:"tr",align:null},"DTagParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{ "reg_ex": "^[A-Za-z0-9_]+$", "min_length": "3", "max_length": "30" }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MaxBioLen"),(0,l.kt)("td",{parentName:"tr",align:null},"BioParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{ "max_length": "1000" }'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OracleParams"),(0,l.kt)("td",{parentName:"tr",align:null},"OracleParams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{ "script_id":"32", "ask_count":"5", "min_count":"3", "prepare_gas":"50000", "execute_gas":"200000", "fee_amount":[] }'))))),(0,l.kt)("h2",{id:"oracleparams"},"OracleParams"),(0,l.kt)("p",null,"The oracle parameter contains the details about the Band Protocol oracle script that needs to be called when verifying application links."))}d.isMDXComponent=!0}}]);