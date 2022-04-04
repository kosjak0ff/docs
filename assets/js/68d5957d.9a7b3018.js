"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8806],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(n),k=a,m=h["".concat(p,".").concat(k)]||h[k]||d[k]||r;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4555:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"application-link",title:"Application link",sidebar_label:"Application link",slug:"application-link"},p="Application link",s={unversionedId:"developers/types/profiles/application-link",id:"version-2.3/developers/types/profiles/application-link",isDocsHomePage:!1,title:"Application link",description:"An application link (abbr. app link) represents a link to an external (and possibly centralized) application.",source:"@site/versioned_docs/version-2.3/02-developers/02-types/profiles/application-link.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/application-link",permalink:"/developers/types/profiles/application-link",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/02-types/profiles/application-link.md",version:"2.3",lastUpdatedAt:1649069758,formattedLastUpdatedAt:"4/4/2022",frontMatter:{id:"application-link",title:"Application link",sidebar_label:"Application link",slug:"application-link"},sidebar:"version-2.3/docs",previous:{title:"User block",permalink:"/developers/types/profiles/user-block"},next:{title:"Chain link",permalink:"/developers/types/profiles/chain-link"}},c=[{value:"Contained data",id:"contained-data",children:[{value:"<code>User</code> (<code>string</code>)",id:"user-string",children:[]},{value:"<code>Data</code> (<code>object</code>)",id:"data-object",children:[]},{value:"<code>State</code> (<code>object</code>)",id:"state-object",children:[]},{value:"<code>OracleRequest</code> (<code>object</code>)",id:"oraclerequest-object",children:[]},{value:"<code>Result</code> (<code>object</code>)",id:"result-object",children:[]},{value:"<code>CreationTime</code> (<code>time</code>)",id:"creationtime-time",children:[]}]},{value:"Create an application link",id:"create-an-application-link",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-link"},"Application link"),(0,r.kt)("p",null,"An application link (abbr. ",(0,r.kt)("em",{parentName:"p"},"app link"),") represents a link to an external (and possibly centralized) application."),(0,r.kt)("h2",{id:"contained-data"},"Contained data"),(0,r.kt)("p",null,"Here follows the data of an application link."),(0,r.kt)("h3",{id:"user-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"User")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,r.kt)("p",null,"Address of the Desmos profile to which the link is associated. "),(0,r.kt)("h3",{id:"data-object"},(0,r.kt)("inlineCode",{parentName:"h3"},"Data")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,r.kt)("p",null,"It contains the link details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"application-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"Application")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"Name of the application to which the link refers to (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"twitter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reddit"),", etc). ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"username-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"Username")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"Identifier of the application account which the link refers to (eg. Twitter username, GitHub profile, Reddit username, etc)."))),(0,r.kt)("h3",{id:"state-object"},(0,r.kt)("inlineCode",{parentName:"h3"},"State")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,r.kt)("p",null,"Representation of the current state of the link.",(0,r.kt)("br",{parentName:"p"}),"\n","There can be five different states in which a link can be: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED")," if the link has just been created, and it still needs to be processed; "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_STARTED")," if the verification process has started; "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_ERROR")," if the verification process ended with an error; "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")," if the verification process ended with success;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_TIMED_OUT")," if the verification process expired due to a timeout. ")),(0,r.kt)("h3",{id:"oraclerequest-object"},(0,r.kt)("inlineCode",{parentName:"h3"},"OracleRequest")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OracleRequest")," field contains all the data that has been sent to the oracle script in order to verify the authenticity of the link. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"id-int64"},(0,r.kt)("inlineCode",{parentName:"h4"},"ID")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"int64"),")"),(0,r.kt)("p",{parentName:"li"},"This is the unique id of the request that has been made to verify the link. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"oraclescriptid-int64"},(0,r.kt)("inlineCode",{parentName:"h4"},"OracleScriptID")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"int64"),")"),(0,r.kt)("p",{parentName:"li"},"A unique id of the script that has been called to verify the authenticity of the link. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"calldata-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"CallData")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,r.kt)("p",{parentName:"li"},"Contains the details of the data that will be used to call the oracle script. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"application-string-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"Application")," (",(0,r.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"Name of the application for which the link is valid (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"twitter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reddit"),", etc). ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"calldata-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"CallData")," (",(0,r.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CallData")," field represents the hex-encoded data that will be given to the data source in order to fetch and verify the validity of the link. ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"clientid-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"ClientID")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"  ID of the client that has performed the request."))),(0,r.kt)("h3",{id:"result-object"},(0,r.kt)("inlineCode",{parentName:"h3"},"Result")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," field contains the effective result of the verification process. This is set only if the link state is either ",(0,r.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_VERIFICATION_ERROR"),". "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," field can be of two types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"result_success-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"Result_Success")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,r.kt)("p",{parentName:"li"},"Represents a successful result. It contains two fields: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"value-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"Value")," (",(0,r.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"Plain text value that has been signed from the user with their Desmos private key to prove the ownership of the Desmos profile. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"signature-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"Signature")," (",(0,r.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,r.kt)("p",{parentName:"li"},"Hex-encoded result of the plain text value signature. ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"result_failed-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"Result_Failed")," (",(0,r.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,r.kt)("p",{parentName:"li"},"Identifies an error during the verification process. It contains only one field:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"error-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"Error")," (",(0,r.kt)("inlineCode",{parentName:"h5"},"string"),")"),"Represents the description of the error that has been emitted during the verification process.")))),(0,r.kt)("h3",{id:"creationtime-time"},(0,r.kt)("inlineCode",{parentName:"h3"},"CreationTime")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"time"),")"),(0,r.kt)("p",null,"Contains the time at which the link has been created. "),(0,r.kt)("h2",{id:"create-an-application-link"},"Create an application link"),(0,r.kt)("p",null,"Application links can be created by any user having a Desmos profile, and their validity is checked using a multi-step verification process described inside the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/themis"},(0,r.kt)("em",{parentName:"a"},'"Themis"')," repository"),"."))}h.isMDXComponent=!0}}]);