"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1867],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,p=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,c=e.groupId,m=e.className,f=o(),h=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,r.useState)(a),b=g[0],v=g[1],y=r.Children.toArray(e.children),N=[];if(null!=c){var w=h[c];null!=w&&w!==b&&d.some((function(e){return e.value===w}))&&v(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=d[n].value;v(r),null!=c&&(k(c,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],u={id:"overview",title:"Overview",sidebar_position:1},p="Desmos fullnode overview",d={unversionedId:"fullnode/overview",id:"version-mainnet/fullnode/overview",isDocsHomePage:!1,title:"Overview",description:"A full-node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light-node",source:"@site/versioned_docs/version-mainnet/03-fullnode/01-overview.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/overview",permalink:"/fullnode/overview",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/03-fullnode/01-overview.mdx",version:"mainnet",lastUpdatedAt:1630585150,formattedLastUpdatedAt:"9/2/2021",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_position:1},sidebar:"version-mainnet/docs",previous:{title:"F.A.Q",permalink:"/developers/faq"},next:{title:"Setup",permalink:"/fullnode/setup"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Understanding pruning",id:"understanding-pruning",children:[]},{value:"Hardware requirements",id:"hardware-requirements",children:[]}]},{value:"1. Setup your environment",id:"1-setup-your-environment",children:[]},{value:"2. Install the software",id:"2-install-the-software",children:[]}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desmos-fullnode-overview"},"Desmos fullnode overview"),(0,o.kt)("p",null,"A full-node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light-node\nthat only processes block headers and a small subset of transactions. Running a full-node requires more resources than a\nlight-node but is necessary in order to be a validator. In practice, running a full-node only implies running a\nnon-compromised and up-to-date version of the software with low network latency and without downtime."),(0,o.kt)("p",null,"Of course, it is possible and encouraged for users to run full-nodes even if they do not plan to be validators."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"understanding-pruning"},"Understanding pruning"),(0,o.kt)("p",null,"In order to run a full node, different hardware requirements should be met based on the pruning strategy you would like\nto use."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pruning")," is the term used to identify the periodic action that can be taken in order to free some disk space on your\nfull node. This is done by removing old blocks data from the disk, freeing up space."),(0,o.kt)("p",null,"Inside Desmos, there are various types of pruning strategies that can be applied. The main ones are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"default"),": the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"nothing"),": all historic states will be saved, nothing will be deleted (i.e. archiving node);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"everything"),": all saved states will be deleted, storing only the current state; pruning at 10 block intervals\n(At the moment this option is not recommended as it can easily corrupt the database and the node will halt);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"custom"),": allow pruning options to be manually specified through 'pruning-keep-recent', 'pruning-keep-every', and 'pruning-interval'."))),(0,o.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"You can easily understand how using a pruning strategy of ",(0,o.kt)("inlineCode",{parentName:"p"},"nothing")," will use more disk space than ",(0,o.kt)("inlineCode",{parentName:"p"},"everything"),".\nFor this reason, there are different disk space that we recommend based on the pruning strategy you choose:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Pruning strategy"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Minimum disk space"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Recommended disk space"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"everything")),(0,o.kt)("td",{parentName:"tr",align:"center"},"20 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"40 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"default")),(0,o.kt)("td",{parentName:"tr",align:"center"},"80 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"120 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"nothing")),(0,o.kt)("td",{parentName:"tr",align:"center"},"120 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},">"," 240 GB")))),(0,o.kt)("p",null,"A part from disk space, the following requirements should be met."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Minimum CPU cores"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Recommended CPU cores"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Minimum RAM"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Recommended RAM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"4 GB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8 GB")))),(0,o.kt)("h2",{id:"1-setup-your-environment"},"1. Setup your environment"),(0,o.kt)("p",null,"In order to run a fullnode, you need to build ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos")," which requires ",(0,o.kt)("inlineCode",{parentName:"p"},"Go"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," installed."),(0,o.kt)("p",null,"This process depends on your working environment."),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"The following example is based on ",(0,o.kt)("strong",{parentName:"p"},"Ubuntu (Debian)")," and assumes you are using a terminal environment by default.\nPlease run the equivalent commands if you are running other Linux distributions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Update the system\nsudo apt update\nsudo apt upgrade\n\n# Install git, gcc and make\nsudo apt install git build-essential ufw curl jq snapd --yes\n\n# Install Go with Snap\nsudo snap install go --classic\n\n# Export environment variables\necho 'export GOPATH=\"$HOME/go\"' >> ~/.profile\necho 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\necho 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\nsource ~/.profile\n"))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the required build tools,\nsimple ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/hk/app/xcode/id497799835?l=en&mt=12"},"install Xcode from the Mac App Store"),"."),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," on ",(0,o.kt)("strong",{parentName:"p"},"MacOS"),", the best option is to install with ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},(0,o.kt)("strong",{parentName:"a"},"Homebrew")),". To do so, open\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal")," application and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Install Homebrew\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you don't know how to open a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal"),", you can search it by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"Spotlight"),"(to access spotlight press cmd + spacebar simultaneously).")),(0,o.kt)("p",null,"After ",(0,o.kt)("strong",{parentName:"p"},"Homebrew")," is installed, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install software using Homebrew\nbrew install go git curl jq\n\n# Export environment variables\necho 'export GOPATH=\"$HOME/go\"' >> ~/.profile\necho 'export GOBIN=\"$GOPATH/bin\"' >> ~/.profile\necho 'export PATH=\"$GOBIN:$PATH\"' >> ~/.profile\nsource ~/.profile\n"))),(0,o.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"The software has not been tested on ",(0,o.kt)("strong",{parentName:"p"},"Windows")," If you are currently running a ",(0,o.kt)("strong",{parentName:"p"},"Windows")," PC, the following options\nshould be considered:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Switch to a ",(0,o.kt)("strong",{parentName:"li"},"Mac")," \ud83d\udc68\u200d\ud83d\udcbb."),(0,o.kt)("li",{parentName:"ol"},"Wipe your hard drive and install a ",(0,o.kt)("strong",{parentName:"li"},"Linux")," system on your PC."),(0,o.kt)("li",{parentName:"ol"},"Install a separate ",(0,o.kt)("strong",{parentName:"li"},"Linux")," system using ",(0,o.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")),(0,o.kt)("li",{parentName:"ol"},"Run a ",(0,o.kt)("strong",{parentName:"li"},"Linux")," instance on a cloud provider.")),(0,o.kt)("p",null,"Note that is still possible to build and run the software on ",(0,o.kt)("strong",{parentName:"p"},"Windows")," but it may give you unexpected results and it\nmay require additional setup to be done. If you insist to build and run the software on ",(0,o.kt)("strong",{parentName:"p"},"Windows"),", the best bet would\nbe installing the ",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package manager."))),(0,o.kt)("h2",{id:"2-install-the-software"},"2. Install the software"),(0,o.kt)("p",null,"Once you have set up your environment correctly, you are now ready to install the Desmos software and start your full\nnode."),(0,o.kt)("p",null,"In order to do so, you can follow our ",(0,o.kt)("a",{parentName:"p",href:"/fullnode/setup"},"setup guide"),"."))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);