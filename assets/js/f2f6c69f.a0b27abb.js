"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[2653],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>_});var s=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function p(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?p(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,s,t=function(e,a){if(null==e)return{};var r,s,t={},p=Object.keys(e);for(s=0;s<p.length;s++)r=p[s],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(s=0;s<p.length;s++)r=p[s],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=s.createContext({}),n=function(e){var a=s.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},d=function(e){var a=n(e.components);return s.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},f=s.forwardRef((function(e,a){var r=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=n(r),_=t,c=f["".concat(o,".").concat(_)]||f[_]||m[_]||p;return r?s.createElement(c,i(i({ref:a},d),{},{components:r})):s.createElement(c,i({ref:a},d))}));function _(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=r.length,i=new Array(p);i[0]=f;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var n=2;n<p;n++)i[n]=r[n];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17427:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>n});var s=r(87462),t=(r(67294),r(3905));const p={id:"profiles-params-aggregate-fields",title:"profiles_params_aggregate_fields",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/profiles-params-aggregate-fields",id:"graphql/objects/profiles-params-aggregate-fields",title:"profiles_params_aggregate_fields",description:'aggregate fields of "profiles_params"',source:"@site/docs/07-graphql/objects/profiles-params-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/profiles-params-aggregate-fields",permalink:"/next/graphql/objects/profiles-params-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/profiles-params-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"profiles-params-aggregate-fields",title:"profiles_params_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile",permalink:"/next/graphql/objects/profile"},next:{title:"profiles_params_aggregate",permalink:"/next/graphql/objects/profiles-params-aggregate"}},o={},n=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>profiles_params_avg_fields</code>)",id:"avg-profiles_params_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>profiles_params_max_fields</code>)",id:"max-profiles_params_max_fields",level:4},{value:"<code>min</code> (<code>profiles_params_min_fields</code>)",id:"min-profiles_params_min_fields",level:4},{value:"<code>stddev</code> (<code>profiles_params_stddev_fields</code>)",id:"stddev-profiles_params_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>profiles_params_stddev_pop_fields</code>)",id:"stddev_pop-profiles_params_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>profiles_params_stddev_samp_fields</code>)",id:"stddev_samp-profiles_params_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>profiles_params_sum_fields</code>)",id:"sum-profiles_params_sum_fields",level:4},{value:"<code>var_pop</code> (<code>profiles_params_var_pop_fields</code>)",id:"var_pop-profiles_params_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>profiles_params_var_samp_fields</code>)",id:"var_samp-profiles_params_var_samp_fields",level:4},{value:"<code>variance</code> (<code>profiles_params_variance_fields</code>)",id:"variance-profiles_params_variance_fields",level:4}],d={toc:n};function m(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,s.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,'aggregate fields of "profiles_params"'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"type profiles_params_aggregate_fields {\n  avg: profiles_params_avg_fields\n  count(columns: [profiles_params_select_column!], distinct: Boolean): Int!\n  max: profiles_params_max_fields\n  min: profiles_params_min_fields\n  stddev: profiles_params_stddev_fields\n  stddev_pop: profiles_params_stddev_pop_fields\n  stddev_samp: profiles_params_stddev_samp_fields\n  sum: profiles_params_sum_fields\n  var_pop: profiles_params_var_pop_fields\n  var_samp: profiles_params_var_samp_fields\n  variance: profiles_params_variance_fields\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"avg-profiles_params_avg_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-avg-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_avg_fields")),")"),(0,t.kt)("h4",{id:"count-int"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,t.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("h5",{parentName:"li",id:"columns-profiles_params_select_column"},(0,t.kt)("a",{parentName:"h5",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,t.kt)("a",{parentName:"h5",href:"../enums/profiles-params-select-column"},(0,t.kt)("inlineCode",{parentName:"a"},"[profiles_params_select_column!]")),")")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,t.kt)("a",{parentName:"h5",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,t.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,t.kt)("h4",{id:"max-profiles_params_max_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-max-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_max_fields")),")"),(0,t.kt)("h4",{id:"min-profiles_params_min_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-min-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_min_fields")),")"),(0,t.kt)("h4",{id:"stddev-profiles_params_stddev_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-stddev-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_stddev_fields")),")"),(0,t.kt)("h4",{id:"stddev_pop-profiles_params_stddev_pop_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-stddev-pop-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_stddev_pop_fields")),")"),(0,t.kt)("h4",{id:"stddev_samp-profiles_params_stddev_samp_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-stddev-samp-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_stddev_samp_fields")),")"),(0,t.kt)("h4",{id:"sum-profiles_params_sum_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-sum-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_sum_fields")),")"),(0,t.kt)("h4",{id:"var_pop-profiles_params_var_pop_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-var-pop-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_var_pop_fields")),")"),(0,t.kt)("h4",{id:"var_samp-profiles_params_var_samp_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-var-samp-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_var_samp_fields")),")"),(0,t.kt)("h4",{id:"variance-profiles_params_variance_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/profiles-params-variance-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_variance_fields")),")"))}m.isMDXComponent=!0}}]);