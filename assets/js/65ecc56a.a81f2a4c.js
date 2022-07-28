"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[981],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9441:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"update",title:"Update",sidebar_label:"Update",slug:"update"},l="Upgrade your Desmos full node",p={unversionedId:"fullnode/update",id:"fullnode/update",title:"Update",description:"These instructions are for full nodes that are running on previous versions of Desmos and need to update to the latest version of the Desmos software.",source:"@site/docs/03-fullnode/04-update.md",sourceDirName:"03-fullnode",slug:"/fullnode/update",permalink:"/next/fullnode/update",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/03-fullnode/04-update.md",tags:[],version:"current",lastUpdatedAt:1659016672,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:4,frontMatter:{id:"update",title:"Update",sidebar_label:"Update",slug:"update"},sidebar:"docs",previous:{title:"Use Cosmovisor",permalink:"/next/fullnode/cosmovisor"},next:{title:"Reset Data",permalink:"/next/fullnode/reset-data"}},d={},m=[{value:"Manual upgrade",id:"manual-upgrade",level:2},{value:"Cosmovisor",id:"cosmovisor",level:3},{value:"Automatic upgrade (with Cosmovisor)",id:"automatic-upgrade-with-cosmovisor",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-your-desmos-full-node"},"Upgrade your Desmos full node"),(0,r.kt)("p",null,"These instructions are for full nodes that are running on previous versions of Desmos and need to update to the latest version of the Desmos software."),(0,r.kt)("h2",{id:"manual-upgrade"},"Manual upgrade"),(0,r.kt)("p",null,"The following instructions explain how to ",(0,r.kt)("strong",{parentName:"p"},"manually upgrade")," the node:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop your node:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"bash sudo systemctl stop desmosd"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Backup your validator files:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp ~/.desmos/config/priv_validator_key.json ~/priv_validator_key.json\ncp ~/.desmos/config/node_key.json ~/node_key.json\ncp ~/.desmos/data/priv_validator_state.json ~/priv_validator_state.json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go into the directory in which you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos"),". If you have followed\nthe installation instructions and didn't change the path, it should be ",(0,r.kt)("inlineCode",{parentName:"p"},"~/desmos"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```bash\ncd <installation-path> \n\n# e.g.\n# cd ~/desmos\n```\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," software:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch --tags\ngit checkout tags/$(git describe --tags `git rev-list --tags --max-count=1`)\nmake build && make install\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Select the version you need  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The above commands checks out the latest release that has been tagged on our repository. If you wish to check out a specific version instead, use the following commands:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"List all the tags  ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git tags --list\n"))),(0,r.kt)("li",{parentName:"ol"},"Checkout the tag you want ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/<tag>\n# Example: git checkout tags/v4.1.0\n")))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note   ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have issues at this step, please check that you have the ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"latest stable version")," of Go installed.  "))),(0,r.kt)("h3",{id:"cosmovisor"},"Cosmovisor"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your node is using cosmovisor, and you've followed the above procedure to manually upgrade, don't forget to move the upgraded binary inside the cosmovisor folder by typing the following command:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp build/desmos ~/.desmos/cosmovisor/current/bin/desmos\n")),(0,r.kt)("p",{parentName:"div"},"Then check if the version of cosmovisor matches with the latest desmos version by running:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor version\n")))),(0,r.kt)("h2",{id:"automatic-upgrade-with-cosmovisor"},"Automatic upgrade (with Cosmovisor)"),(0,r.kt)("p",null,"Here below it is explained how to prepare your node to be able to ",(0,r.kt)("strong",{parentName:"p"},"automatically upgrade")," itself."),(0,r.kt)("p",null,"1.Cosmovisor handles the automatic upgrades that happens after the ",(0,r.kt)("em",{parentName:"p"},"upgrade governance proposal")," passes.\nIf during an upgrade your node doesn't have enough space left or if the cosmovisor backup it is taking too much\ntime, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your ",(0,r.kt)("inlineCode",{parentName:"li"},"desmosd")," editor:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl edit desmosd --full\n"))),(0,r.kt)("li",{parentName:"ol"},"Add the following line after the last ",(0,r.kt)("inlineCode",{parentName:"li"},"Environment")," line:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' Environment="UNSAFE_SKIP_BACKUP=true"\n')))))}u.isMDXComponent=!0}}]);