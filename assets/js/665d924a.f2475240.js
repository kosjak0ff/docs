"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54443],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>c});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=u(e.components);return n.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(t),c=r,f=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return t?n.createElement(f,a(a({ref:o},d),{},{components:t})):n.createElement(f,a({ref:o},d))}));function c(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7368:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const i={id:"cosmovisor",title:"Use Cosmovisor",sidebar_position:5},a="Cosmovisor",s={unversionedId:"fullnode/cosmovisor",id:"version-3/fullnode/cosmovisor",title:"Use Cosmovisor",description:"The Cosmos team provides a tool named Cosmovisor that allows your node to perform some automatic operations when needed. This is particularly useful when dealing with on-chain upgrades, because Cosmovisor can help you by taking care of downloading the updated binary and restarting the node for you.",source:"@site/versioned_docs/version-3/03-fullnode/05-cosmovisor.md",sourceDirName:"03-fullnode",slug:"/fullnode/cosmovisor",permalink:"/3/fullnode/cosmovisor",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/03-fullnode/05-cosmovisor.md",tags:[],version:"3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:5,frontMatter:{id:"cosmovisor",title:"Use Cosmovisor",sidebar_position:5},sidebar:"version-3/docs",previous:{title:"Use RocksDB",permalink:"/3/fullnode/rocksdb-installation"},next:{title:"Overview",permalink:"/3/validators/overview"}},l={},u=[{value:"Setup",id:"setup",level:2},{value:"1. Downloading Cosmovisor",id:"1-downloading-cosmovisor",level:3},{value:"2. Setting up environmental variables",id:"2-setting-up-environmental-variables",level:3},{value:"3. Copying Desmos files in the proper folders",id:"3-copying-desmos-files-in-the-proper-folders",level:3},{value:"4. Restarting your node",id:"4-restarting-your-node",level:3},{value:"Updating the service file",id:"updating-the-service-file",level:4}],d={toc:u};function p(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cosmovisor"},"Cosmovisor"),(0,r.kt)("p",null,"The Cosmos team provides a tool named ",(0,r.kt)("em",{parentName:"p"},"Cosmovisor")," that allows your node to perform some automatic operations when needed. This is particularly useful when dealing with on-chain upgrades, because Cosmovisor can help you by taking care of downloading the updated binary and restarting the node for you.  "),(0,r.kt)("p",null,"If you want to learn how to setup Cosmovisor inside your full or validator node, please follow the guide below. "),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"1-downloading-cosmovisor"},"1. Downloading Cosmovisor"),(0,r.kt)("p",null,"To install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor"),", run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest\n")),(0,r.kt)("p",null,"To install a previous version, you can specify the version. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0\n")),(0,r.kt)("p",null,"You can also install from source by pulling the cosmos-sdk repository and switching to the correct version and building as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:cosmos/cosmos-sdk\ncd cosmos-sdk\ngit checkout cosmovisor/vx.x.x\ncd cosmovisor\nmake\n")),(0,r.kt)("p",null,"This will build cosmovisor in your current directory. Afterwards you may want to put it into your machine's PATH like as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp cosmovisor ~/go/bin/cosmovisor\n")),(0,r.kt)("p",null,"To check your cosmovisor version, you can use this command and make sure it matches the version you've installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'strings $(which cosmovisor) | egrep -e "mod\\s+github.com/cosmos/cosmos-sdk/cosmovisor"\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If you are using go ",(0,r.kt)("inlineCode",{parentName:"em"},"v1.15")," or earlier, you will need to use ",(0,r.kt)("inlineCode",{parentName:"em"},"go get"),", and you may want to run the command outside a project directory.")),(0,r.kt)("h3",{id:"2-setting-up-environmental-variables"},"2. Setting up environmental variables"),(0,r.kt)("p",null,"Cosmovisor relies on the following environmental variables to work properly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAEMON_HOME")," is the location where upgrade binaries should be kept (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.desmos"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAEMON_NAME")," is the name of the binary itself (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"desmos"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAEMON_ALLOW_DOWNLOAD_BINARIES")," (",(0,r.kt)("em",{parentName:"li"},"optional"),", default = ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),") if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," will enable auto-downloading of new binaries\n(for security reasons, this is intended for full nodes rather than validators)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAEMON_RESTART_AFTER_UPGRADE")," (",(0,r.kt)("em",{parentName:"li"},"optional"),", default = ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," it will restart the sub-process with the same\ncommand line arguments and flags (but new binary) after a successful upgrade. By default, ",(0,r.kt)("inlineCode",{parentName:"li"},"cosmovisor")," dies\nafterwards and allows the supervisor to restart it if needed. Note that this will not auto-restart the child\nif there was an error."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAEMON_POLL_INTERVAL")," (",(0,r.kt)("em",{parentName:"li"},"optional"),", default = ",(0,r.kt)("inlineCode",{parentName:"li"},"300ms"),") is the interval length for polling the upgrade plan file. The value can either be a number (in milliseconds) or a duration (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"1s"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNSAFE_SKIP_BACKUP")," (",(0,r.kt)("em",{parentName:"li"},"optional"),", default = ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"), if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", upgrades directly without performing a backup. Otherwise (",(0,r.kt)("inlineCode",{parentName:"li"},"false"),") backs up the data before trying the upgrade. The default value of ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," is useful and recommended in case of failures and when a backup needed to rollback. We recommend using the default backup option ",(0,r.kt)("inlineCode",{parentName:"li"},"UNSAFE_SKIP_BACKUP=false"),".")),(0,r.kt)("p",null,"To properly set those variables, we suggest you to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.profile")," file so that they are loaded when you log into your machine. To edit this file you can simply run "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo nano ~/.profile\n")),(0,r.kt)("p",null,"Once you're in, we suggest you to set the following values: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export DAEMON_HOME=$HOME/.desmos\nexport DAEMON_NAME=desmos\nexport DAEMON_ALLOW_DOWNLOAD_BINARIES=true\nexport DAEMON_RESTART_AFTER_UPGRADE=true\nexport UNSAFE_SKIP_BACKUP=false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),": If you don't have much free disk space, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"UNSAFE_SKIP_BACKUP=true")," to avoid your node failing the upgrade due to insufficient disk space when creating the backup."),(0,r.kt)("p",null,"Once you're done, please reload the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.profile")," file by running "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.profile\n")),(0,r.kt)("p",null,"You can verify the values set by running "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo $DAEMON_NAME\n")),(0,r.kt)("p",null,"If this outputs ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," you are ready to go."),(0,r.kt)("h3",{id:"3-copying-desmos-files-in-the-proper-folders"},"3. Copying Desmos files in the proper folders"),(0,r.kt)("p",null,"In order to work properly, Cosmovisor needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," binary to be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.desmos/cosmovisor/genesis/bin")," folder. To do this you can simply run the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/.desmos/cosmovisor/genesis/bin/\ncp $(which desmos) ~/.desmos/cosmovisor/genesis/bin/\n")),(0,r.kt)("p",null,"To verify that you have setup everything correctly, you can run the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor version\n")),(0,r.kt)("p",null,"This should output the Desmos version."),(0,r.kt)("h3",{id:"4-restarting-your-node"},"4. Restarting your node"),(0,r.kt)("p",null,"Finally, if you've setup everything correctly you can now restart your node. To do this you can simply stop the running ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos start")," and re-start your Desmos node using the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cosmovisor start\n")),(0,r.kt)("h4",{id:"updating-the-service-file"},"Updating the service file"),(0,r.kt)("p",null,"If you are running your node using a service, you need to update your service file to use ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos"),". To do this you can simply run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo tee /etc/systemd/system/desmosd.service > /dev/null <<EOF  \n[Unit]\nDescription=Desmos Full Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\nEnvironment="DAEMON_HOME=$HOME/.desmos"\nEnvironment="DAEMON_NAME=desmos"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\nEnvironment="UNSAFE_SKIP_BACKUP=false"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),": If you don't have much free disk space, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"UNSAFE_SKIP_BACKUP=true")," to avoid your node failing the upgrade due to insufficient disk space when creating the backup."),(0,r.kt)("p",null,"Once you have edited your system file, you need to reload it using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl daemon-reload\n")),(0,r.kt)("p",null,"Finally, you can restart is as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart desmosd\n")))}p.isMDXComponent=!0}}]);