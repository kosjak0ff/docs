"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[19907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=l,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),l=n(67294),o=n(86010),r=n(72389),s=n(67392),i=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:r,block:p,defaultValue:b,values:m,groupId:f,className:k}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===b?b:null!=(t=null!=b?b:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:D}=(0,i.U)(),[O,T]=(0,l.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==O&&(x(t),T(a),null!=f&&D(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var l;const t=N.indexOf(e.currentTarget)-1;n=null!=(l=N[t])?l:N[N.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},v.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},33326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),o=n(65488),r=n(85162);const s={id:"rocksdb-installation",title:"Use RocksDB",sidebar_label:"Use RocksDB",slug:"rocksdb-installation"},i="Installing RocksDB",c={unversionedId:"fullnode/rocksdb-installation",id:"version-4.1.0/fullnode/rocksdb-installation",title:"Use RocksDB",description:"By default, Desmos uses LevelDB as its database backend engine. However, since version",source:"@site/versioned_docs/version-4.1.0/03-fullnode/06-rocksdb-installation.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/rocksdb-installation",permalink:"/4.1.0/fullnode/rocksdb-installation",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/03-fullnode/06-rocksdb-installation.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:6,frontMatter:{id:"rocksdb-installation",title:"Use RocksDB",sidebar_label:"Use RocksDB",slug:"rocksdb-installation"},sidebar:"docs",previous:{title:"Reset Data",permalink:"/4.1.0/fullnode/reset-data"},next:{title:"Overview",permalink:"/4.1.0/validators/overview"}},u={},d=[{value:"1. Install the dependencies",id:"1-install-the-dependencies",level:2},{value:"2. Install RocksDB",id:"2-install-rocksdb",level:2}],p={toc:d};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installing-rocksdb"},"Installing RocksDB"),(0,l.kt)("p",null,"By default, Desmos uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since version\n",(0,l.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),",\nwhich, although still being experimental, is know to be faster and could lead to lower syncing times.\nIf you want to try out RocksDB (which we suggest you to do) you can take a look at our\n",(0,l.kt)("a",{parentName:"p",href:"/4.1.0/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further."),(0,l.kt)("p",null,"The following guide allows you to install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," inside your local machine,\nso that you will be able to use as Desmos' backend engine for better performances."),(0,l.kt)("h2",{id:"1-install-the-dependencies"},"1. Install the dependencies"),(0,l.kt)("p",null,"The first thing to do is to install all the dependencies for RocksDB.\nFollowing you will find the installation guide for both Ubuntu and MacOS. If you have a different operative system you can refer to the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official installation guide")),(0,l.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y \\\n  libgflags-dev \\\n  libsnappy-dev \\\n  zlib1g-dev \\\n  libbz2-dev \\\n  libzstd-dev \\\n  liblz4-dev\n"))),(0,l.kt)(r.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Only needed if you are first time developing of your machine\nxcode-select --install\n\n# Install the dependencies\nbrew tap homebrew/versions; brew install gcc48 --use-llvm\n")))),(0,l.kt)("h2",{id:"2-install-rocksdb"},"2. Install RocksDB"),(0,l.kt)("p",null,"After having installed the dependencies, you need to install RocksDB. Again, following you will find the Linux and MacOS instructions.\nIf you are running another OS, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"official documentation"),"."),(0,l.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone RocksDB\ngit clone https://github.com/facebook/rocksdb.git && cd rocksdb\n\n# Build RocksDB\nDEBUG_LEVEL=0 make shared_lib\n\n# Install RocksDB so that Desmos can access it\nsudo make install-shared\n\n# Make sure the newly built library is linked correctly\nsudo ldconfig\n"))),(0,l.kt)(r.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install rocksdb\n")))),(0,l.kt)("p",null,"Once the installation has finished, you will be able to compile Desmos using the following command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make install DB_BACKEND=rocksdb\n")))}b.isMDXComponent=!0}}]);