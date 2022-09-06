"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),_=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=_(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=_(n),u=a,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var _=2;_<i;_++)o[_]=n[_];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>_});var r=n(87462),a=(n(67294),n(3905));const i={id:"post-insert-input",title:"post_insert_input",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/inputs/post-insert-input",id:"graphql/inputs/post-insert-input",title:"post_insert_input",description:'input type for inserting data into table "post"',source:"@site/docs/07-graphql/inputs/post-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-insert-input",permalink:"/next/graphql/inputs/post-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-insert-input",title:"post_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_inc_input",permalink:"/next/graphql/inputs/post-inc-input"},next:{title:"post_max_order_by",permalink:"/next/graphql/inputs/post-max-order-by"}},p={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>attachments</code> (<code>post_attachment_arr_rel_insert_input</code>)",id:"attachments-post_attachment_arr_rel_insert_input",level:4},{value:"<code>author</code> (<code>profile_obj_rel_insert_input</code>)",id:"author-profile_obj_rel_insert_input",level:4},{value:"<code>author_address</code> (<code>String</code>)",id:"author_address-string",level:4},{value:"<code>conversation</code> (<code>post_obj_rel_insert_input</code>)",id:"conversation-post_obj_rel_insert_input",level:4},{value:"<code>conversation_row_id</code> (<code>bigint</code>)",id:"conversation_row_id-bigint",level:4},{value:"<code>creation_date</code> (<code>timestamp</code>)",id:"creation_date-timestamp",level:4},{value:"<code>external_id</code> (<code>String</code>)",id:"external_id-string",level:4},{value:"<code>hashtags</code> (<code>post_hashtag_arr_rel_insert_input</code>)",id:"hashtags-post_hashtag_arr_rel_insert_input",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>last_edited_date</code> (<code>timestamp</code>)",id:"last_edited_date-timestamp",level:4},{value:"<code>mentions</code> (<code>post_mention_arr_rel_insert_input</code>)",id:"mentions-post_mention_arr_rel_insert_input",level:4},{value:"<code>posts</code> (<code>post_arr_rel_insert_input</code>)",id:"posts-post_arr_rel_insert_input",level:4},{value:"<code>reactions</code> (<code>reaction_arr_rel_insert_input</code>)",id:"reactions-reaction_arr_rel_insert_input",level:4},{value:"<code>references</code> (<code>post_reference_arr_rel_insert_input</code>)",id:"references-post_reference_arr_rel_insert_input",level:4},{value:"<code>reply_settings</code> (<code>String</code>)",id:"reply_settings-string",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>section</code> (<code>subspace_section_obj_rel_insert_input</code>)",id:"section-subspace_section_obj_rel_insert_input",level:4},{value:"<code>section_row_id</code> (<code>bigint</code>)",id:"section_row_id-bigint",level:4},{value:"<code>subspace</code> (<code>subspace_obj_rel_insert_input</code>)",id:"subspace-subspace_obj_rel_insert_input",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4},{value:"<code>tags</code> (<code>post_tag_arr_rel_insert_input</code>)",id:"tags-post_tag_arr_rel_insert_input",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4},{value:"<code>urls</code> (<code>post_url_arr_rel_insert_input</code>)",id:"urls-post_url_arr_rel_insert_input",level:4}],l={toc:_};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting data into table "post"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_insert_input {\n  attachments: post_attachment_arr_rel_insert_input\n  author: profile_obj_rel_insert_input\n  author_address: String\n  conversation: post_obj_rel_insert_input\n  conversation_row_id: bigint\n  creation_date: timestamp\n  external_id: String\n  hashtags: post_hashtag_arr_rel_insert_input\n  height: bigint\n  id: bigint\n  last_edited_date: timestamp\n  mentions: post_mention_arr_rel_insert_input\n  posts: post_arr_rel_insert_input\n  reactions: reaction_arr_rel_insert_input\n  references: post_reference_arr_rel_insert_input\n  reply_settings: String\n  row_id: Int\n  section: subspace_section_obj_rel_insert_input\n  section_row_id: bigint\n  subspace: subspace_obj_rel_insert_input\n  subspace_id: bigint\n  tags: post_tag_arr_rel_insert_input\n  text: String\n  urls: post_url_arr_rel_insert_input\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"attachments-post_attachment_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"attachments"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"author-profile_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"author"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"author_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"conversation-post_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"conversation"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"conversation_row_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"conversation_row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"creation_date-timestamp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,a.kt)("h4",{id:"external_id-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"hashtags-post_hashtag_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"hashtags"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_hashtag_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"last_edited_date-timestamp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,a.kt)("h4",{id:"mentions-post_mention_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"mentions"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-mention-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_mention_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"posts-post_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"reactions-reaction_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reactions"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/reaction-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"reaction_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"references-post_reference_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"references"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-reference-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_reference_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"reply_settings-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"row_id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"section-subspace_section_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_section_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"section_row_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"subspace-subspace_obj_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-obj-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_obj_rel_insert_input")),")"),(0,a.kt)("h4",{id:"subspace_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"tags-post_tag_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"tags"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-tag-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_tag_arr_rel_insert_input")),")"),(0,a.kt)("h4",{id:"text-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"urls-post_url_arr_rel_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"urls"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-url-arr-rel-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"post_url_arr_rel_insert_input")),")"))}d.isMDXComponent=!0}}]);