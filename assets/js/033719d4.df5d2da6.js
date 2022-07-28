"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65447],{3905:function(e,t,s){s.d(t,{Zo:function(){return m},kt:function(){return c}});var o=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,o,n=function(e,t){if(null==e)return{};var s,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)s=a[o],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)s=a[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},m=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(s),c=n,h=u["".concat(i,".").concat(c)]||u[c]||d[c]||a;return s?o.createElement(h,r(r({ref:t},m),{},{components:s})):o.createElement(h,r({ref:t},m))}));function c(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,r=new Array(a);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<a;p++)r[p]=s[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,s)}u.displayName="MDXCreateElement"},72586:function(e,t,s){s.r(t),s.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=s(87462),n=s(63366),a=(s(67294),s(3905)),r=["components"],l={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},i="Msg Service",p={unversionedId:"developers/modules/posts/messages",id:"developers/modules/posts/messages",title:"Messages",description:"Msg/CreatePost",source:"@site/docs/02-developers/02-modules/posts/04-messages.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/messages",permalink:"/next/developers/modules/posts/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/posts/04-messages.md",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/next/developers/modules/posts/state"},next:{title:"Events",permalink:"/next/developers/modules/posts/events"}},m={},d=[{value:"Msg/CreatePost",id:"msgcreatepost",level:2},{value:"Msg/EditPost",id:"msgeditpost",level:2},{value:"Msg/DeletePost",id:"msgdeletepost",level:2},{value:"Msg/AddPostAttachment",id:"msgaddpostattachment",level:2},{value:"Msg/RemovePostAttachment",id:"msgremovepostattachment",level:2},{value:"Msg/AnswerPoll",id:"msganswerpoll",level:2}],u={toc:d};function c(e){var t=e.components,s=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msg-service"},"Msg Service"),(0,a.kt)("h2",{id:"msgcreatepost"},"Msg/CreatePost"),(0,a.kt)("p",null,"A post can be created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgCreatePost"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/proto/desmos/posts/v2/msgs.proto#L36-L89\n")),(0,a.kt)("p",null,"It's to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the post author does not have a profile;"),(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the section does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post author does not have the permission to create content within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the post contents are invalid.")),(0,a.kt)("h2",{id:"msgeditpost"},"Msg/EditPost"),(0,a.kt)("p",null,"A previously created post can be edited with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgEditPost"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/proto/desmos/posts/v2/msgs.proto#L107-L135\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post editor is not the post author;"),(0,a.kt)("li",{parentName:"ul"},"the post editor does not have the permission to edit the posts within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the updated post contents are invalid.")),(0,a.kt)("h2",{id:"msgdeletepost"},"Msg/DeletePost"),(0,a.kt)("p",null,"A post can be deleted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgDeletePost"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/proto/desmos/posts/v2/msgs.proto#L147-L163\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the signer has no permission to delete posts within the subspace.")),(0,a.kt)("h2",{id:"msgaddpostattachment"},"Msg/AddPostAttachment"),(0,a.kt)("p",null,"It's possible to add an attachment to an existing post with ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAddPostAttachment"),". Attachment can be a ",(0,a.kt)("a",{parentName:"p",href:"/next/developers/modules/posts/concepts#media"},"media")," or a ",(0,a.kt)("a",{parentName:"p",href:"/next/developers/modules/posts/concepts#poll"},"poll"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/proto/desmos/posts/v2/msgs.proto#L168-L191\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post editor is not the post author;"),(0,a.kt)("li",{parentName:"ul"},"the post editor has no permission to edit posts within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the attachment is invalid.")),(0,a.kt)("h2",{id:"msgremovepostattachment"},"Msg/RemovePostAttachment"),(0,a.kt)("p",null,"A post attachment can be removed with ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRemovePostAttachment"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/proto/desmos/posts/v2/msgs.proto#L209-L232\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post editor is not the post author;"),(0,a.kt)("li",{parentName:"ul"},"the post editor has no permission to edit posts within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the attachment does not exist.")),(0,a.kt)("h2",{id:"msganswerpoll"},"Msg/AnswerPoll"),(0,a.kt)("p",null,"It's possible to answer any active post's poll With ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAnswerPoll"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/master/proto/desmos/posts/v2/msgs.proto#L245-L271\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the signer does not have a profile;"),(0,a.kt)("li",{parentName:"ul"},"the subspace associated with the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the poll does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the poll voting period already ended;"),(0,a.kt)("li",{parentName:"ul"},"the signer does not have the permission to interact with contents within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the signer is trying to edit their own answer but the poll does not allow answers edits;"),(0,a.kt)("li",{parentName:"ul"},"the signer is trying to give multiple answers but the poll does not allow multiple answers;"),(0,a.kt)("li",{parentName:"ul"},"the answer is invalid.")))}c.isMDXComponent=!0}}]);