"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[959],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Reaction",p={unversionedId:"developers/types/staging/posts/reaction",id:"version-mainnet/developers/types/staging/posts/reaction",isDocsHomePage:!1,title:"Reaction",description:"Inside Desmos, the reactions is the fastest way users can react to posts.",source:"@site/versioned_docs/version-mainnet/02-developers/02-types/staging/posts/reaction.md",sourceDirName:"02-developers/02-types/staging/posts",slug:"/developers/types/staging/posts/reaction",permalink:"/developers/types/staging/posts/reaction",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/02-types/staging/posts/reaction.md",version:"mainnet",lastUpdatedAt:1630585150,formattedLastUpdatedAt:"9/2/2021",frontMatter:{}},l=[{value:"Contained data",id:"contained-data",children:[{value:"<code>ShortCode</code>",id:"shortcode",children:[]},{value:"<code>Value</code>",id:"value",children:[]},{value:"<code>Subspace</code>",id:"subspace",children:[]},{value:"<code>Creator</code>",id:"creator",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reaction"},"Reaction"),(0,a.kt)("p",null,"Inside Desmos, the reactions is the fastest way users can react to posts."),(0,a.kt)("p",null,"Everyday each one of us use reactions inside the most popular social networks.\nReactions let you immediately express what you think about the post/photo/video you've just watched."),(0,a.kt)("p",null,"Each new reaction that will be registered inside Desmos will become part of the set of reactions supported by the system.",(0,a.kt)("br",{parentName:"p"}),"\n","Once you have registered your favorite GIF/image/emoji, you will be allowed to use them to react to every post inside Desmos.\nRemember that a reaction can be registered only once per ",(0,a.kt)("inlineCode",{parentName:"p"},"subspace"),", so if you ever try to register a previously\nregistered reaction, your transaction will not be valid. "),(0,a.kt)("h2",{id:"contained-data"},"Contained data"),(0,a.kt)("p",null,"A reaction is made of different parts. Following you will find out what are those and how they can be used."),(0,a.kt)("h3",{id:"shortcode"},(0,a.kt)("inlineCode",{parentName:"h3"},"ShortCode")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ShortCode")," identifies the actual reaction short code.",(0,a.kt)("br",{parentName:"p"}),"\n","Short codes are codes used on various websites to speed up reaction insertion using a keyboard.\nThese begin and end with a colon, and contain the literal name of the reaction itself.\nFor example, it can look something like ",(0,a.kt)("inlineCode",{parentName:"p"},":emoji-shortcode:"),".\nWhen registering a new reaction, the shot code must be validated by the following regEx: ",(0,a.kt)("inlineCode",{parentName:"p"},":[a-z0-9+-]([a-z0-9\\d_-])*:"),".\n",(0,a.kt)("a",{parentName:"p",href:"https://www.webfx.com/tools/emoji-cheat-sheet/"},"Here")," the list of all available short codes."),(0,a.kt)("h3",{id:"value"},(0,a.kt)("inlineCode",{parentName:"h3"},"Value")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," of a reaction identifies whether the reaction is a GIF an image or an emoji.",(0,a.kt)("br",{parentName:"p"}),"\n","Value can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"URL")," with the path of the GIF/image your using as a reaction or it can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"UNICODE"),"\nthat identifies a specific emoji.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"URL"),"'s will be validated by the following regEx: ",(0,a.kt)("inlineCode",{parentName:"p"},"^(?:http(s)?://)[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:/?#[\\]@!$&'()*+,;=.]+$"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"Unicode")," must be one of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/Go-Emoji-Utils/blob/master/data/emoji.json"},"supported ones"),"."),(0,a.kt)("h3",{id:"subspace"},(0,a.kt)("inlineCode",{parentName:"h3"},"Subspace")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Subspace")," field identifies the application inside which the reaction has been registered.",(0,a.kt)("br",{parentName:"p"}),"\n","Currently the subspace must be a SHA256 hash of the previously plain-text value."),(0,a.kt)("h3",{id:"creator"},(0,a.kt)("inlineCode",{parentName:"h3"},"Creator")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Creator")," field is used to specify the Bech32 address of the creator of the reaction.",(0,a.kt)("br",{parentName:"p"}),"\n","In order for a creator address to be valid, it must begin with the ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos")," Bech32 human-readable part."))}u.isMDXComponent=!0}}]);