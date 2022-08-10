"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[71532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const s={id:"setup",title:"Setup",sidebar_position:2},r="Full node setup",i={unversionedId:"fullnode/setup",id:"version-2.3/fullnode/setup",title:"Setup",description:"Following you will find the instructions on how to manually setup your Desmos full node.",source:"@site/versioned_docs/version-2.3/03-fullnode/02-setup.md",sourceDirName:"03-fullnode",slug:"/fullnode/setup",permalink:"/2.3/fullnode/setup",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/03-fullnode/02-setup.md",tags:[],version:"2.3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:2,frontMatter:{id:"setup",title:"Setup",sidebar_position:2},sidebar:"version-2.3/docs",previous:{title:"Overview",permalink:"/2.3/fullnode/overview"},next:{title:"Update",permalink:"/2.3/fullnode/update"}},l={},p=[{value:"1. Build the software",id:"1-build-the-software",level:2},{value:"2. Initialize the Desmos working directory",id:"2-initialize-the-desmos-working-directory",level:2},{value:"3. Get the genesis file",id:"3-get-the-genesis-file",level:2},{value:"4. Setup seeds",id:"4-setup-seeds",level:2},{value:"5. State sync",id:"5-state-sync",level:2},{value:"Changing state sync height",id:"changing-state-sync-height",level:3},{value:"6. Full sync - Sync from block 1",id:"6-full-sync---sync-from-block-1",level:2},{value:"1. Downgrade the software",id:"1-downgrade-the-software",level:3},{value:"2. Disable state-sync",id:"2-disable-state-sync",level:3},{value:"3. Setup Cosmovisor",id:"3-setup-cosmovisor",level:3},{value:"7. (Optional) Edit snapshot config",id:"7-optional-edit-snapshot-config",level:2},{value:"8. (Optional) Change your database backend",id:"8-optional-change-your-database-backend",level:2},{value:"9. Open the proper ports",id:"9-open-the-proper-ports",level:2},{value:"10. Start the Desmos node",id:"10-start-the-desmos-node",level:2},{value:"11. (Optional) Configure the background service",id:"11-optional-configure-the-background-service",level:2},{value:"Service operations",id:"service-operations",level:3},{value:"Check the service status",id:"check-the-service-status",level:4},{value:"Check the node status",id:"check-the-node-status",level:4},{value:"Stopping the service",id:"stopping-the-service",level:4},{value:"10. Cosmovisor",id:"10-cosmovisor",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"full-node-setup"},"Full node setup"),(0,a.kt)("p",null,"Following you will find the instructions on how to manually setup your Desmos full node."),(0,a.kt)("admonition",{title:"Requirements",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before starting, make sure you read the ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/overview"},"overview")," to make sure your hardware meets the needed\nrequirements.")),(0,a.kt)("h2",{id:"1-build-the-software"},"1. Build the software"),(0,a.kt)("admonition",{title:"Choose your DB backend",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before installing the software, a consideration must be done."),(0,a.kt)("p",{parentName:"admonition"},"By default, Desmos uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/leveldb"},"LevelDB")," as its database backend engine. However, since\nversion ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally\nusing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB"),", which, although still being experimental, is known to\nbe faster and could lead to lower syncing times. If you want to try out RocksDB you can take a look at\nour ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/rocksdb-installation"},"RocksDB installation guide")," before proceeding further.")),(0,a.kt)("p",null,"In your terminal, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure we are inside the home directory\ncd $HOME\n\n# Clone the Desmos software\ngit clone https://github.com/desmos-labs/desmos.git && cd desmos\n\n# Checkout the correct tag\ngit checkout tags/v2.3.1\n\n# Build the software\n# If you want to use the default database backend run\nmake install\n\n# If you want to use RocksDB run instead\nmake install DB_BACKEND=rocksdb\n")),(0,a.kt)("p",null,"If the software is built successfully, the ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos")," executable will be located inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOBIN")," path. If you setup\nyour environment variables correctly in the previous step, you should also be able to run it properly. To check this,\ntry running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos version --long\n")),(0,a.kt)("h2",{id:"2-initialize-the-desmos-working-directory"},"2. Initialize the Desmos working directory"),(0,a.kt)("p",null,"Configuration files and chain data will be stored inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.desmos")," directory by default. In order to create\nthis folder and all the necessary data we need to initialize a new full node using the ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos init")," command."),(0,a.kt)("p",null,"Starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.15.0"),", you are now able to provide a custom seed when initializing your node. This will be\nparticularly useful because, in the case that you want to reset your node, you will be able to re-generate the same\nprivate node key instead of having to create a new node."),(0,a.kt)("p",null,"In order to provide a custom seed to your private key, you can do as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get a new random seed by running"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'desmos keys add node --dry-run\n\n# Example\n# desmos keys add node --dry-run\n# - name: node\n#   type: local\n#   address: desmos126cw9j2wy099lttf2qx0qds6k7t4kdea5ualh9\n#   pubkey: desmospub1addwnpepqdpfv4lh0vqjvmu43spz4lq0l92qret9hv6007j4r28z05wuthw2jz3frd4\n#   mnemonic: ""\n#   threshold: 0\n#   pubkeys: []\n#\n#\n# **Important** write this mnemonic phrase in a safe place.\n# It is the only way to recover your account if you ever forget your password.\n#\n# sort curious village display voyage oppose dice idea mutual inquiry keep swim team direct tired pink clinic figure tiny december giant obvious clump chest\n')),(0,a.kt)("p",{parentName:"li"},"This will create a new key ",(0,a.kt)("strong",{parentName:"p"},"without")," adding it to your keystore, and output the underlying seed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--recover")," flag."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"desmos init <your_node_moniker> --recover\n")),(0,a.kt)("p",{parentName:"li"},"You can choose any ",(0,a.kt)("inlineCode",{parentName:"p"},"moniker")," value you like. It will be saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},".desmos")," working\ndirectory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Insert the previously outputted secret recovery phrase (mnemonic phrase):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"> Enter your bip39 mnemonic\nsort curious village display voyage oppose dice idea mutual inquiry keep swim team direct tired pink clinic figure tiny december giant obvious clump chest\n")),(0,a.kt)("p",{parentName:"li"},"This will generate the working files in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.desmos")),(0,a.kt)("admonition",{parentName:"li",title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By default, running ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos init <your_node_moniker>")," without the ",(0,a.kt)("inlineCode",{parentName:"p"},"--recover")," flag will randomly generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json"),". There is no way to regenerate this key if you lose it.\\\nWe recommend running this command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--recover")," so that you can regenerate the same ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," from the secret recovery phrase (mnemonic phrase).")))),(0,a.kt)("h2",{id:"3-get-the-genesis-file"},"3. Get the genesis file"),(0,a.kt)("p",null,"To connect to an existing network, or start a new one, a genesis file is required. The file contains all the settings\ntelling how the genesis block of the network should look like."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are setting up a ",(0,a.kt)("strong",{parentName:"li"},"testnet")," node refer to this ",(0,a.kt)("a",{parentName:"li",href:"/2.3/testnets/join-public/genesis-file"},"procedure"),";"),(0,a.kt)("li",{parentName:"ul"},"If you are setting up a ",(0,a.kt)("strong",{parentName:"li"},"mainnet")," node refer to this ",(0,a.kt)("a",{parentName:"li",href:"/2.3/mainnet/genesis-file"},"procedure"),".")),(0,a.kt)("h2",{id:"4-setup-seeds"},"4. Setup seeds"),(0,a.kt)("p",null,"The next thing you have to do now is telling your node how to connect with other nodes that are already present on the\nnetwork. In order to do so, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"seeds")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"persistent_peers")," values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml"),"\nfile."),(0,a.kt)("p",null,"Seed nodes are a particular type of nodes present on the network. Your fullnode will connect to them, and they will\nprovide it with a list of other fullnodes that are present on the network. Then, your fullnode will automatically\nconnect to such nodes. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are looking for ",(0,a.kt)("strong",{parentName:"li"},"testnet")," seeds please check here: ",(0,a.kt)("a",{parentName:"li",href:"/2.3/testnets/join-public/seeds"},"Testnet seeds"),";"),(0,a.kt)("li",{parentName:"ul"},"If you are looking for ",(0,a.kt)("strong",{parentName:"li"},"mainnet")," seeds please check here: ",(0,a.kt)("a",{parentName:"li",href:"/2.3/mainnet/seeds"},"Mainnet seeds"),".")),(0,a.kt)("h2",{id:"5-state-sync"},"5. State sync"),(0,a.kt)("p",null,"Starting from Desmos ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.15.0"),", we've added the support for Tendermint'\ns ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/nodes/state-sync.html#configure-state-sync"},"state sync"),". This feature allows new nodes to\nsync with the chain extremely fast, by downloading snapshots created by other full nodes.\nHere below, you can find the links to check for the correct procedure depending on which network you're setting up your node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are setting up state-sync for the ",(0,a.kt)("strong",{parentName:"li"},"testnet")," follow the ",(0,a.kt)("a",{parentName:"li",href:"/2.3/testnets/join-public/state-sync"},"State sync testnet procedure"),";"),(0,a.kt)("li",{parentName:"ul"},"If you are setting up state-sync for the ",(0,a.kt)("strong",{parentName:"li"},"mainnet")," follow the ",(0,a.kt)("a",{parentName:"li",href:"/2.3/mainnet/state-sync"},"State sync mainnet procedure"),".")),(0,a.kt)("h3",{id:"changing-state-sync-height"},"Changing state sync height"),(0,a.kt)("p",null,"If you change the state sync height, you will need to perform these actions before trying to sync again:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you're running a ",(0,a.kt)("strong",{parentName:"li"},"validator node"),":",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Backup the ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.desmos/data/priv_validator_state.json"),";"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),";"),(0,a.kt)("li",{parentName:"ol"},"Restore the ",(0,a.kt)("inlineCode",{parentName:"li"},"priv_validator_state.json")," file."),(0,a.kt)("li",{parentName:"ol"},"Restart the node."))),(0,a.kt)("li",{parentName:"ul"},"If you're running a ",(0,a.kt)("em",{parentName:"li"},"full node"),":",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),";"),(0,a.kt)("li",{parentName:"ol"},"Restart the node.")))),(0,a.kt)("h2",{id:"6-full-sync---sync-from-block-1"},"6. Full sync - Sync from block 1"),(0,a.kt)("admonition",{title:"Full sync from scratch",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"With version ",(0,a.kt)("inlineCode",{parentName:"p"},"2.3.1")," it's no longer possible to sync the node from scratch. If, for any reason, you need to do it,\nplease follow the procedure below.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Remember that this procedure takes time (hours, or days) and you will not be able to perform any operation on the node in the meantime.")),(0,a.kt)("h3",{id:"1-downgrade-the-software"},"1. Downgrade the software"),(0,a.kt)("p",null,"The first thing you need to do in order to start sync from scratch is getting the correct Desmos version according to the network you're connecting to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/2.3/mainnet/full-sync"},(0,a.kt)("strong",{parentName:"a"},"Mainnet")),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/2.3/testnets/join-public/full-sync"},(0,a.kt)("strong",{parentName:"a"},"Testnet")),".")),(0,a.kt)("h3",{id:"2-disable-state-sync"},"2. Disable state-sync"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.desmos/config/config.toml")," file."),(0,a.kt)("li",{parentName:"ol"},"Disable state sync by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"enable = false"),"."),(0,a.kt)("li",{parentName:"ol"},"Run a ",(0,a.kt)("inlineCode",{parentName:"li"},"desmos unsafe-reset-all"),".")),(0,a.kt)("h3",{id:"3-setup-cosmovisor"},"3. Setup Cosmovisor"),(0,a.kt)("p",null,"Since we're relying on the Cosmos SDK ",(0,a.kt)("inlineCode",{parentName:"p"},"x/upgrade")," module to update the network, you will need to set up Cosmovisor\nin order to handle the updates that happened at different heights in the past. Check how to do it ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/cosmovisor"},"here"),"."),(0,a.kt)("h2",{id:"7-optional-edit-snapshot-config"},"7. (Optional) Edit snapshot config"),(0,a.kt)("p",null,"Currently, the ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot")," feature is enabled by the default. This means that your node will periodically create snapshots of the chain state and make them public, allowing other nodes to quickly join the network by syncing the application state at a given height."),(0,a.kt)("p",null,"By default, we have set Desmos to take snapshots every 500 blocks, and persist the last 2 snapshots, deleting older ones. If you want to provide other nodes with more (or less) frequent snapshots, you can do this by editing a couple of things inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/app.toml")," file, under the ",(0,a.kt)("inlineCode",{parentName:"p"},"state-sync")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"# snapshot-interval specifies the block interval at which local state sync snapshots are\n# taken (0 to disable). Must be a multiple of pruning-keep-every.\nsnapshot-interval = 500\n\n# snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all).\nsnapshot-keep-recent = 2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Make sure that snapshot-interval is a multiple of ",(0,a.kt)("inlineCode",{parentName:"strong"},"pruning-keep-every")," in the ",(0,a.kt)("inlineCode",{parentName:"strong"},"base")," section")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'pruning-keep-recent = "100"\npruning-keep-every = "500"\npruning-interval = "10"\n')),(0,a.kt)("p",null,"You can find out more about pruning ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/overview#understanding-pruning"},"here"),".\nYou can find out more about pruning ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/overview#understanding-pruning"},"here"),"."),(0,a.kt)("h2",{id:"8-optional-change-your-database-backend"},"8. (Optional) Change your database backend"),(0,a.kt)("p",null,"If you would like to run your node using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb"},"Facebook's RocksDB")," as the database\nbackend, and you have correctly built the Desmos binaries to work with it following the instructions\nat ",(0,a.kt)("a",{parentName:"p",href:"#1-build-the-software"},"point 1"),", there is one more thing you need to do."),(0,a.kt)("p",null,"In order to tell Tendermint to use RocksDB as its database backend engine, you are required to change the following like\ninside the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "goleveldb"\n')),(0,a.kt)("p",null,"To become"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'db_backend = "rocksdb"\n')),(0,a.kt)("h2",{id:"9-open-the-proper-ports"},"9. Open the proper ports"),(0,a.kt)("p",null,"Now that everything is in place to start the node, the last thing to do is to open up the proper ports."),(0,a.kt)("p",null,"Your node uses vary different ports to interact with the rest of the chain. Particularly, it relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"port ",(0,a.kt)("inlineCode",{parentName:"li"},"26656")," to listen for incoming connections from other nodes;"),(0,a.kt)("li",{parentName:"ul"},"port ",(0,a.kt)("inlineCode",{parentName:"li"},"26657")," to expose the RPC service to clients.")),(0,a.kt)("p",null,"A part from those, it also uses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"port ",(0,a.kt)("inlineCode",{parentName:"li"},"9090")," to expose the ",(0,a.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC")," service that allows clients to query the chain state;"),(0,a.kt)("li",{parentName:"ul"},"port ",(0,a.kt)("inlineCode",{parentName:"li"},"1317")," to expose the REST APIs service.")),(0,a.kt)("p",null,"While opening any ports are optional, it is beneficial to the whole network if\nyou open port ",(0,a.kt)("inlineCode",{parentName:"p"},"26656"),". This would allow new nodes to connect to you as a peer, making them sync faster and the connections more reliable."),(0,a.kt)("p",null,"For this reason, we will be opening port ",(0,a.kt)("inlineCode",{parentName:"p"},"26656")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"ufw"),". \\\nBy default, ",(0,a.kt)("inlineCode",{parentName:"p"},"ufw")," is not enabled. In order to enable it please run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# running this should show it is inactive\nsudo ufw status\n\n# Turn on ssh if you need it\nsudo ufw allow ssh\n\n# Accept connections to port 26656 from any address\nsudo ufw allow from any to any port 26656 proto tcp\n\n# enable ufw\nsudo ufw enable\n\n# check ufw is running\nsudo ufw status\n")),(0,a.kt)("p",null,"If you also want to run a gRPC server, RPC node or the REST APIs, you also need to remember to open the related ports as\nwell."),(0,a.kt)("h2",{id:"10-start-the-desmos-node"},"10. Start the Desmos node"),(0,a.kt)("p",null,"After setting up the binary and opening up ports, you are now finally ready to start your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Run Desmos full node\ndesmos start\n")),(0,a.kt)("p",null,"The full node will connect to the peers and start syncing. You can check the status of the node by executing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Check status of the node\ndesmos status\n")),(0,a.kt)("p",null,"You should see an output like the following one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NodeInfo": {\n    "protocol_version": {\n      "p2p": "8",\n      "block": "11",\n      "app": "0"\n    },\n    "id": "84cc13d6acf22c32c209f4205d2693f70f458dde",\n    "listen_addr": "tcp://0.0.0.0:26656",\n    "network": "morpheus-13001",\n    "version": "",\n    "channels": "40202122233038606100",\n    "moniker": "fullnode",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://0.0.0.0:26657"\n    }\n  },\n  "SyncInfo": {\n    "latest_block_hash": "9BA7801C0935C4E18B4E2F8C6E8A2FF4C598C8E5F71A94113D2F0595524FD4E3",\n    "latest_app_hash": "375C9F0E4E63B7ACAD497F8DEDF5E2382F469668DE671B2FF92A5D2B8B50C6D2",\n    "latest_block_height": "204393",\n    "latest_block_time": "2021-02-03T08:03:06.448549383Z",\n    "earliest_block_hash": "839FEB9ED0257B71116CE54618C7E3C15189239CB571066DDBE9E0F1C101DCC8",\n    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n    "earliest_block_height": "1",\n    "earliest_block_time": "2021-01-20T07:00:00Z",\n    "catching_up": false\n  },\n  "ValidatorInfo": {\n    "Address": "E457913A98EC0F9251BB40008E6680A8EFF93F99",\n    "PubKey": {\n      "type": "tendermint/PubKeyEd25519",\n      "value": "BLT8jjQ+ODKa0ERcrhHfOVFVVrJDq7hxyXx6bLXnCdw="\n    },\n    "VotingPower": "0"\n  }\n}\n')),(0,a.kt)("p",null,"If you see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"catching_up")," value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"sync_info"),", it means that you are fully synced. If it\nis ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it means your node is still syncing. You can get the ",(0,a.kt)("inlineCode",{parentName:"p"},"catching_up")," value by simply running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n\n# Example\n# $ desmos status 2>&1 | jq "{catching_up: .SyncInfo.catching_up}"\n# {\n#   "catching_up": false\n# }\n')),(0,a.kt)("p",null,"After your node is fully synced, you can consider running your full node as a ",(0,a.kt)("a",{parentName:"p",href:"/2.3/validators/setup"},"validator node"),"."),(0,a.kt)("h2",{id:"11-optional-configure-the-background-service"},"11. (Optional) Configure the background service"),(0,a.kt)("p",null,"To allow your ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos")," instance to run in the background as a service you need to execute the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tee /etc/systemd/system/desmosd.service > /dev/null <<EOF\n[Unit]\nDescription=Desmos Full Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$GOBIN/desmos start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,a.kt)("p",null,"Once you have successfully created the service, you need to enable it. You can do so by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable desmosd\n")),(0,a.kt)("p",null,"After this, you can run it by executing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start desmosd\n")),(0,a.kt)("h3",{id:"service-operations"},"Service operations"),(0,a.kt)("h4",{id:"check-the-service-status"},"Check the service status"),(0,a.kt)("p",null,"If you want to see if the service is running properly, you can execute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status desmosd\n")),(0,a.kt)("p",null,"If everything is running smoothly you should see something like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl status desmosd\n\u25cf desmos.service - Desmos Node\n   Loaded: loaded (/etc/systemd/system/desmosd.service; enabled; vendor preset:\n   Active: active (running) since Fri 2020-01-17 10:23:12 CET; 2min 3s ago\n Main PID: 11318 (desmos)\n    Tasks: 10 (limit: 4419)\n   CGroup: /system.slice/desmosd.service\n           \u2514\u250011318 /root/go/bin/desmos start\n")),(0,a.kt)("h4",{id:"check-the-node-status"},"Check the node status"),(0,a.kt)("p",null,"If you want to see the current status of the node, you can do so by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u desmosd -f\n")),(0,a.kt)("h4",{id:"stopping-the-service"},"Stopping the service"),(0,a.kt)("p",null,"If you wish to stop the service from running, you can do so by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop desmosd\n")),(0,a.kt)("p",null,"To check the successful stop, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl status desmos"),". This should return"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl status desmosd\n\u25cf desmos.service - Desmos Node\n   Loaded: loaded (/etc/systemd/system/desmosd.service; enabled; vendor preset: enabled)\n   Active: failed (Result: exit-code) since Fri 2020-01-17 10:28:04 CET; 3s ago\n  Process: 11318 ExecStart=/root/go/bin/desmos start (code=exited, status=143)\n Main PID: 11318 (code=exited, status=143)\n")),(0,a.kt)("h2",{id:"10-cosmovisor"},"10. Cosmovisor"),(0,a.kt)("p",null,"In order to do automatic on-chain upgrades we will be using cosmovisor. Please check out ",(0,a.kt)("a",{parentName:"p",href:"/2.3/fullnode/cosmovisor"},"Using Cosmovisor")," for information on how to set this up."))}d.isMDXComponent=!0}}]);