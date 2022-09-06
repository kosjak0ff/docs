"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[70968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(n),_=a,m=d["".concat(s,".").concat(_)]||d[_]||c[_]||l;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={id:"update-poll-answer-by-pk",title:"update_poll_answer_by_pk",hide_table_of_contents:!1},p=void 0,o={unversionedId:"graphql/mutations/update-poll-answer-by-pk",id:"graphql/mutations/update-poll-answer-by-pk",title:"update_poll_answer_by_pk",description:'update single row of the table: "poll_answer"',source:"@site/docs/07-graphql/mutations/update-poll-answer-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-poll-answer-by-pk",permalink:"/next/graphql/mutations/update-poll-answer-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-poll-answer-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-poll-answer-by-pk",title:"update_poll_answer_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_dtag_transfer_requests",permalink:"/next/graphql/mutations/update-dtag-transfer-requests"},next:{title:"update_poll_answer",permalink:"/next/graphql/mutations/update-poll-answer"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>poll_answer_inc_input</code>)",id:"_inc-poll_answer_inc_input",level:4},{value:"<code>_set</code> (<code>poll_answer_set_input</code>)",id:"_set-poll_answer_set_input",level:4},{value:"<code>pk_columns</code> (<code>poll_answer_pk_columns_input!</code>)",id:"pk_columns-poll_answer_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>poll_answer</code>",id:"poll_answer",level:4}],u={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'update single row of the table: "poll_answer"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"update_poll_answer_by_pk(\n  _inc: poll_answer_inc_input\n  _set: poll_answer_set_input\n  pk_columns: poll_answer_pk_columns_input!\n): poll_answer\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"_inc-poll_answer_inc_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-inc-input"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_inc_input")),")"),(0,a.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,a.kt)("h4",{id:"_set-poll_answer_set_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-set-input"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_set_input")),")"),(0,a.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,a.kt)("h4",{id:"pk_columns-poll_answer_pk_columns_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/poll-answer-pk-columns-input"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer_pk_columns_input!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"poll_answer"},(0,a.kt)("a",{parentName:"h4",href:"../objects/poll-answer"},(0,a.kt)("inlineCode",{parentName:"a"},"poll_answer"))),(0,a.kt)("p",null,'columns and relationships of "poll_answer"'))}c.isMDXComponent=!0}}]);