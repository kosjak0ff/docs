"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[84251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),_=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=_(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=_(n),k=i,s=u["".concat(r,".").concat(k)]||u[k]||c[k]||p;return n?a.createElement(s,l(l({ref:t},d),{},{components:n})):a.createElement(s,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var _=2;_<p;_++)l[_]=n[_];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>_});var a=n(87462),i=(n(67294),n(3905));const p={id:"update-application-link",title:"update_application_link",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/mutations/update-application-link",id:"graphql/mutations/update-application-link",title:"update_application_link",description:'update data of the table: "application_link"',source:"@site/docs/07-graphql/mutations/update-application-link.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-application-link",permalink:"/next/graphql/mutations/update-application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-application-link.mdx",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"update-application-link",title:"update_application_link",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_application_link_oracle_request",permalink:"/next/graphql/mutations/update-application-link-oracle-request"},next:{title:"update_block_by_pk",permalink:"/next/graphql/mutations/update-block-by-pk"}},r={},_=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_append</code> (<code>application_link_append_input</code>)",id:"_append-application_link_append_input",level:4},{value:"<code>_delete_at_path</code> (<code>application_link_delete_at_path_input</code>)",id:"_delete_at_path-application_link_delete_at_path_input",level:4},{value:"<code>_delete_elem</code> (<code>application_link_delete_elem_input</code>)",id:"_delete_elem-application_link_delete_elem_input",level:4},{value:"<code>_delete_key</code> (<code>application_link_delete_key_input</code>)",id:"_delete_key-application_link_delete_key_input",level:4},{value:"<code>_inc</code> (<code>application_link_inc_input</code>)",id:"_inc-application_link_inc_input",level:4},{value:"<code>_prepend</code> (<code>application_link_prepend_input</code>)",id:"_prepend-application_link_prepend_input",level:4},{value:"<code>_set</code> (<code>application_link_set_input</code>)",id:"_set-application_link_set_input",level:4},{value:"<code>where</code> (<code>application_link_bool_exp!</code>)",id:"where-application_link_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_mutation_response</code>",id:"application_link_mutation_response",level:4}],d={toc:_};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'update data of the table: "application_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"update_application_link(\n  _append: application_link_append_input\n  _delete_at_path: application_link_delete_at_path_input\n  _delete_elem: application_link_delete_elem_input\n  _delete_key: application_link_delete_key_input\n  _inc: application_link_inc_input\n  _prepend: application_link_prepend_input\n  _set: application_link_set_input\n  where: application_link_bool_exp!\n): application_link_mutation_response\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"_append-application_link_append_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_append"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-append-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_append_input")),")"),(0,i.kt)("p",null,"append existing jsonb value of filtered columns with new jsonb value"),(0,i.kt)("h4",{id:"_delete_at_path-application_link_delete_at_path_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_at_path"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-delete-at-path-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_delete_at_path_input")),")"),(0,i.kt)("p",null,"delete the field or element with specified path (for JSON arrays, negative integers count from the end)"),(0,i.kt)("h4",{id:"_delete_elem-application_link_delete_elem_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_elem"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-delete-elem-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_delete_elem_input")),")"),(0,i.kt)("p",null,"delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"),(0,i.kt)("h4",{id:"_delete_key-application_link_delete_key_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_delete_key"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-delete-key-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_delete_key_input")),")"),(0,i.kt)("p",null,"delete key/value pair or string element. key/value pairs are matched based on their key value"),(0,i.kt)("h4",{id:"_inc-application_link_inc_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-inc-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_inc_input")),")"),(0,i.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,i.kt)("h4",{id:"_prepend-application_link_prepend_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_prepend"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-prepend-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_prepend_input")),")"),(0,i.kt)("p",null,"prepend existing jsonb value of filtered columns with new jsonb value"),(0,i.kt)("h4",{id:"_set-application_link_set_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-set-input"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_set_input")),")"),(0,i.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,i.kt)("h4",{id:"where-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp!")),")"),(0,i.kt)("p",null,"filter the rows which have to be updated"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"application_link_mutation_response"},(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link-mutation-response"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_mutation_response"))),(0,i.kt)("p",null,'response of any mutation on the table "application_link"'))}c.isMDXComponent=!0}}]);