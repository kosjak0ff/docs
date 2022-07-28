"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[43537],{3905:function(e,r,s){s.d(r,{Zo:function(){return u},kt:function(){return m}});var t=s(67294);function n(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function o(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function l(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?o(Object(s),!0).forEach((function(r){n(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function i(e,r){if(null==e)return{};var s,t,n=function(e,r){if(null==e)return{};var s,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var a=t.createContext({}),c=function(e){var r=t.useContext(a),s=r;return e&&(s="function"==typeof e?e(r):l(l({},r),e)),s},u=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var s=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(s),m=n,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return s?t.createElement(b,l(l({ref:r},u),{},{components:s})):t.createElement(b,l({ref:r},u))}));function m(e,r){var s=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=s.length,l=new Array(o);l[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=s[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,s)}d.displayName="MDXCreateElement"},71187:function(e,r,s){s.r(r),s.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var t=s(87462),n=s(63366),o=(s(67294),s(3905)),l=["components"],i={id:"blocked-users",title:"Query Blocked users",sidebar_label:"Blocked users",slug:"blocked-users"},a=void 0,c={unversionedId:"developers/queries/relationships/blocked-users",id:"version-3/developers/queries/relationships/blocked-users",title:"Query Blocked users",description:"Query blocked users",source:"@site/versioned_docs/version-3/02-developers/04-queries/relationships/blocks.md",sourceDirName:"02-developers/04-queries/relationships",slug:"/developers/queries/relationships/blocked-users",permalink:"/3/developers/queries/relationships/blocked-users",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/relationships/blocks.md",tags:[],version:"3",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"blocked-users",title:"Query Blocked users",sidebar_label:"Blocked users",slug:"blocked-users"},sidebar:"version-3/docs",previous:{title:"Relationships",permalink:"/3/developers/queries/relationships/relationships"},next:{title:"Query subspaces",permalink:"/3/developers/queries/subspaces/subspaces"}},u={},p=[{value:"Query blocked users",id:"query-blocked-users",level:2}],d={toc:p};function m(e){var r=e.components,s=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-blocked-users"},"Query blocked users"),(0,o.kt)("p",null,"This query allows you to retrieve all the blocks made inside the given subspace-id.\nAn optional blocker and blocked addresses can be passed to the query to retrieve specific's blocker's blocks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query relationships blocks [subspace-id] [[blocker]] [[blocked]] [flags]\n\n# Examples\n# desmos query relationships blocks 1\n# desmos query relationships blocks 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query relationships blocks 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n# desmos query relationships blocks 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f\n")))}m.isMDXComponent=!0}}]);