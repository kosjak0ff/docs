"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[89350],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),l=n(86010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),l=n(67294),r=n(86010),o=n(72389),s=n(67392),i=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,f=e.defaultValue,b=e.values,m=e.groupId,v=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),D=w.tabGroupChoices,x=w.setTabGroupChoices,O=(0,l.useState)(y),T=O[0],N=O[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var B=D[m];null!=B&&B!==T&&h.some((function(e){return e.value===B}))&&N(B)}var R=function(e){var t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==T&&(I(t),N(a),null!=m&&x(m,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=E.indexOf(e.currentTarget)+1;n=null!=(a=E[l])?a:E[0];break;case"ArrowLeft":var r,o=E.indexOf(e.currentTarget)-1;n=null!=(r=E[o])?r:E[E.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:R,onClick:R},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},3950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=n(65488),s=n(85162),i=["components"],u={id:"rocksdb-installation",title:"Use RocksDB",sidebar_label:"Use RocksDB",slug:"rocksdb-installation"},c="Installing RocksDB",d={unversionedId:"fullnode/rocksdb-installation",id:"fullnode/rocksdb-installation",title:"Use RocksDB",description:"By default, Desmos uses LevelDB as its database backend engine. However, since version",source:"@site/docs/03-fullnode/06-rocksdb-installation.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/rocksdb-installation",permalink:"/next/fullnode/rocksdb-installation",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/03-fullnode/06-rocksdb-installation.mdx",tags:[],version:"current",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:6,frontMatter:{id:"rocksdb-installation",title:"Use RocksDB",sidebar_label:"Use RocksDB",slug:"rocksdb-installation"},sidebar:"docs",previous:{title:"Reset Data",permalink:"/next/fullnode/reset-data"},next:{title:"Overview",permalink:"/next/validators/overview"}},p={},f=[{value:"1. Install the dependencies",id:"1-install-the-dependencies",level:2},{value:"2. Install RocksDB",id:"2-install-rocksdb",level:2}],b={toc:f};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-rocksdb"},"Installing RocksDB"),(0,r.kt)("p",null,"By default, Desmos uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since version\n",(0,r.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),",\nwhich, although still being experimental, is know to be faster and could lead to lower syncing times.\nIf you want to try out RocksDB (which we suggest you to do) you can take a look at our\n",(0,r.kt)("a",{parentName:"p",href:"/next/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further."),(0,r.kt)("p",null,"The following guide allows you to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," inside your local machine,\nso that you will be able to use as Desmos' backend engine for better performances."),(0,r.kt)("h2",{id:"1-install-the-dependencies"},"1. Install the dependencies"),(0,r.kt)("p",null,"The first thing to do is to install all the dependencies for RocksDB.\nFollowing you will find the installation guide for both Ubuntu and MacOS. If you have a different operative system you can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official installation guide")),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y \\\n  libgflags-dev \\\n  libsnappy-dev \\\n  zlib1g-dev \\\n  libbz2-dev \\\n  libzstd-dev \\\n  liblz4-dev\n"))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Only needed if you are first time developing of your machine\nxcode-select --install\n\n# Install the dependencies\nbrew tap homebrew/versions; brew install gcc48 --use-llvm\n")))),(0,r.kt)("h2",{id:"2-install-rocksdb"},"2. Install RocksDB"),(0,r.kt)("p",null,"After having installed the dependencies, you need to install RocksDB. Again, following you will find the Linux and MacOS instructions.\nIf you are running another OS, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official documentation"),"."),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone RocksDB\ngit clone https://github.com/facebook/rocksdb.git && cd rocksdb\n\n# Build RocksDB\nDEBUG_LEVEL=0 make shared_lib\n\n# Install RocksDB so that Desmos can access it\nsudo make install-shared\n\n# Make sure the newly built library is linked correctly\nsudo ldconfig\n"))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rocksdb\n")))),(0,r.kt)("p",null,"Once the installation has finished, you will be able to compile Desmos using the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install DB_BACKEND=rocksdb\n")))}m.isMDXComponent=!0}}]);