"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[33474],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"common-problems",title:"Common Problems",sidebar_position:6},l="Common Problems",p={unversionedId:"validators/common-problems",id:"version-2.3/validators/common-problems",title:"Common Problems",description:"Problem 1 0",source:"@site/versioned_docs/version-2.3/04-validators/05-common-problems.md",sourceDirName:"04-validators",slug:"/validators/common-problems",permalink:"/2.3/validators/common-problems",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/04-validators/05-common-problems.md",tags:[],version:"2.3",lastUpdatedAt:1659004506,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:6,frontMatter:{id:"common-problems",title:"Common Problems",sidebar_position:6},sidebar:"version-2.3/docs",previous:{title:"Migrating",permalink:"/2.3/validators/migrating"},next:{title:"F.A.Q",permalink:"/2.3/validators/faq"}},d={},m=[{value:"Problem #1: My validator has <code>voting_power: 0</code>",id:"problem-1-my-validator-has-voting_power-0",level:2},{value:"Problem #2: My <code>desmos</code> crashes because of <code>too many open files</code>",id:"problem-2-my-desmos-crashes-because-of-too-many-open-files",level:2},{value:"Problem #3: My validator is inactive/unbonding",id:"problem-3-my-validator-is-inactiveunbonding",level:2},{value:"Problem #4: My validator is jailed",id:"problem-4-my-validator-is-jailed",level:2},{value:"Problem #5: The persistent peers do not work properly",id:"problem-5-the-persistent-peers-do-not-work-properly",level:2},{value:"Using a seed node",id:"using-a-seed-node",level:3},{value:"Changing your persistent peers",id:"changing-your-persistent-peers",level:3},{value:"Problem #6: I tried unjailing my validator, but it keeps getting jailed after some time",id:"problem-6-i-tried-unjailing-my-validator-but-it-keeps-getting-jailed-after-some-time",level:2},{value:"Problem #7: My validator run out of space",id:"problem-7-my-validator-run-out-of-space",level:2},{value:"Problem #8: Wrong Block Header AppHash",id:"problem-8-wrong-block-header-apphash",level:2},{value:"NOTE",id:"note",level:5}],u={toc:m};function c(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-problems"},"Common Problems"),(0,r.kt)("h2",{id:"problem-1-my-validator-has-voting_power-0"},"Problem #1: My validator has ",(0,r.kt)("inlineCode",{parentName:"h2"},"voting_power: 0")),(0,r.kt)("p",null,"Your validator has become jailed. Validators get jailed, i.e. get removed from the active validator set, if they do not\nvote on ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," of the last ",(0,r.kt)("inlineCode",{parentName:"p"},"10000")," blocks, or if they double sign."),(0,r.kt)("p",null,"If you got jailed for downtime, you can get your voting power back to your validator. First, if ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," is not running,\nstart it up again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos start\n")),(0,r.kt)("p",null,"Wait for your full node to catch up to the latest block. Then, you\ncan ",(0,r.kt)("a",{parentName:"p",href:"#problem-4-my-validator-is-jailed"},"unjail your validator"),"."),(0,r.kt)("p",null,"Lastly, check your validator again to see if your voting power is back."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos status\n")),(0,r.kt)("p",null,"You may notice that your voting power is less than it used to be. That's because you got slashed for downtime!"),(0,r.kt)("h2",{id:"problem-2-my-desmos-crashes-because-of-too-many-open-files"},"Problem #2: My ",(0,r.kt)("inlineCode",{parentName:"h2"},"desmos")," crashes because of ",(0,r.kt)("inlineCode",{parentName:"h2"},"too many open files")),(0,r.kt)("p",null,"The default number of files Linux can open (per-process) is ",(0,r.kt)("inlineCode",{parentName:"p"},"1024"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," is known to open more than ",(0,r.kt)("inlineCode",{parentName:"p"},"1024")," files.\nThis causes the process to crash. A quick fix is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -n 4096")," (increase the number of open files allowed) and\nthen restart the process with ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos start"),". If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," or another process manager to launch ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos"),"\nthis may require some configuration at that level. A sample ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," file to fix this issue is below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{12}"},'# /etc/systemd/system/desmos.service\n[Unit]\nDescription=Desmos Full Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=ubuntu # This is the user that is running the software in the background. Change it to your username if needed.\nWorkingDirectory=/home/ubuntu # This is the home directory of the user that running the software in the background. Change it to your username if needed.\nExecStart=/home/ubuntu/go/bin/desmos start # The path should point to the correct location of the software you have installed.\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096 # To compensate the "Too many open files" issue.\n\n[Install]\nWantedBy=multi-user.target\n')),(0,r.kt)("h2",{id:"problem-3-my-validator-is-inactiveunbonding"},"Problem #3: My validator is inactive/unbonding"),(0,r.kt)("p",null,"When creating a validator you have the minimum self delegation amount using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--min-self-delegation")," flag. What this\nmeans is that if your validator has less than that specific value of tokens self delegated, it will automatically enter\nthe unbonding state and then be marked as inactive."),(0,r.kt)("p",null,"To solve this, what you can do is getting more tokens delegated to it by following these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your address:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos keys show <your_key> --address\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Require more tokens using the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/J6VsHDT"},"Discord")," bot inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"#ask-tokens")," channel by\nsending ",(0,r.kt)("inlineCode",{parentName:"p"},"!send <address>"),". (",(0,r.kt)("strong",{parentName:"p"},"TESTNET ONLY"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the tokens have been sent properly:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query account $(desmos keys show <your_key> --address) --chain-id <chain_id>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delegate the tokens to your validator: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx staking delegate \\\n  $(desmos keys show <your_key> --bech=val --address) \\\n  <amount> \\\n  --chain-id <chain_id> \\\n  --from <your_key> --yes\n\n# Example\n# desmos tx staking delegate \\\n#  $(desmos keys show validator --bech=val --address) \\\n#  10000000udaric \\\n#  --chain-id morpheus-apollo-2 \\\n#  --from validator --yes\n")))),(0,r.kt)("h2",{id:"problem-4-my-validator-is-jailed"},"Problem #4: My validator is jailed"),(0,r.kt)("p",null,"If your validator is jailed it probably means that it has been inactive for a long period of time missing a consistent\nnumber of blocks. We suggest you checking the Desmos daemon status to make sure it hasn't been interrupted by some\nerror."),(0,r.kt)("p",null,"If the service is running properly, it probably means that your node did not have internet access for a prolonged period\nof time. In both cases, if there are no other errors to fix, you can unjail your validator by executing the following\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"desmos tx slashing unjail --chain-id <chain_id> --from <your_key>\n\n# Example\n# desmos tx slashing unjail --chain-id morpheus-apollo-2 --from validator\n")),(0,r.kt)("p",null,"This will perform an unjail transaction that will set your validator as active again from the next block."),(0,r.kt)("p",null,"If the problem still persists, please make sure you\nhave ",(0,r.kt)("a",{parentName:"p",href:"#problem-3-my-validator-is-inactiveunbonding"},"enough tokens delegated to your validator"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Last solution to fixing your node errors")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your service is running properly, you can also try and reset your ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," configuration by running the following\ncommand:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.desmos/config/config.toml\n")),(0,r.kt)("p",{parentName:"div"},"After doing so, remember to restart your validator service to apply the changes:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart desmosd\n")))),(0,r.kt)("h2",{id:"problem-5-the-persistent-peers-do-not-work-properly"},"Problem #5: The persistent peers do not work properly"),(0,r.kt)("p",null,"Sometimes, it might happen that your node cannot connect to the persistent peers we have provided inside\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/morpheus"},"testnet repository"),". This happens because all nodes have a limit of\ninbound connections that they can accept. Once that limit is exceed, the nodes will not accept any more connections."),(0,r.kt)("p",null,"In order to solve this problem, there are two alternative way:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"use a seed node instead of a persistent peer, ",(0,r.kt)("strong",{parentName:"li"},"OR")),(0,r.kt)("li",{parentName:"ol"},"use different persistent peers.")),(0,r.kt)("h3",{id:"using-a-seed-node"},"Using a seed node"),(0,r.kt)("p",null,"Seed nodes are a particular type of nodes that provide every validator with a set of peers to connect with, based on the\ncurrent network status. What will happen when you use seed nodes is the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your node will connect to a seed node."),(0,r.kt)("li",{parentName:"ol"},"The seed node will provide your node with a list of peers."),(0,r.kt)("li",{parentName:"ol"},"Your node will disconnect from the seed node and connect to the peers."),(0,r.kt)("li",{parentName:"ol"},"Your node will start syncing with the chain.")),(0,r.kt)("p",null,"In order to use this particular type of nodes, all you have to do is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the line starting with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'seeds = ""\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace that line with the following: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'seeds = "cd4612957461881d5f62367c589aaa0fdf933bd8@seed-1.morpheus.desmos.network:26656,fc4714d15629e3b016847c45d5648230a30a50f1@seed-2.morpheus.desmos.network:26656"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Empty your persistent peers list by replacing the ",(0,r.kt)("inlineCode",{parentName:"p"},'pesistent_peers = "..."')," line with "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'persistent_peers = ""\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the file and exit the editor. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your node."))),(0,r.kt)("h3",{id:"changing-your-persistent-peers"},"Changing your persistent peers"),(0,r.kt)("p",null,"Instead of using a seed node, you can also keep relying on persistent peers. In this case, you will need to find new ones to connect your node to. To do this, you can query the current peers of any chain node using the following RPC endpoint: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/net_info\n")),(0,r.kt)("p",null,"For example, you can use the public RPC endpoint ",(0,r.kt)("a",{parentName:"p",href:"https://rpc.morpheus.desmos.network/net_info"},"here"),". "),(0,r.kt)("p",null,"From that page, you can see all the peers connected to that node. Their info is present inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"peers")," field, which contains a list of objects made as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json{4,5,17}"},'{\n  "node_info": {\n    "protocol_version": {},\n    "id": "d45d4e0a6a6c393d58cfa1c5fed6286164fbfceb",\n    "listen_addr": "tcp://0.0.0.0:26656",\n    "network": "morpheus-10000",\n    "version": "0.33.7",\n    "channels": "4020212223303800",\n    "moniker": "Maria",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://127.0.0.1:26657"\n    }\n  },\n  "is_outbound": false,\n  "connection_status": {},\n  "remote_ip": "35.193.251.165"\n}\n')),(0,r.kt)("p",null,"In order to get new peers addresses, all you have to do is to combine the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remote_ip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listen_addr")," field values as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id@remote_ip:listen_addr(port)\n")),(0,r.kt)("p",null,"In the above case, that peer's address would be: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"d45d4e0a6a6c393d58cfa1c5fed6286164fbfceb@35.193.251.165:26656\n")),(0,r.kt)("p",null,"You can do this with as many peers as you want. Once you have a list of peers, you can use those inside\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"persistent_peers")," field of your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file."),(0,r.kt)("h2",{id:"problem-6-i-tried-unjailing-my-validator-but-it-keeps-getting-jailed-after-some-time"},"Problem #6: I tried unjailing my validator, but it keeps getting jailed after some time"),(0,r.kt)("p",null,"If you have ",(0,r.kt)("a",{parentName:"p",href:"#problem-4-my-validator-is-jailed"},"tried to unjail"),", but you've seen that your node is jailed again shortly\nafter, it most probably means that your validator has been ",(0,r.kt)("strong",{parentName:"p"},"tombstoned"),"."),(0,r.kt)("p",null,"A validator is put in a tombstone status only when it double signs. Since this is way more egregious than a liveliness\nfault, once your validator double signs it will no longer be able to re-join the active set with the same validator key."),(0,r.kt)("p",null,"In order to avoid this, you need to always make sure that each of your nodes ",(0,r.kt)("strong",{parentName:"p"},"do not")," validate with the same private\nkey."),(0,r.kt)("p",null,"Also, once your validator is tombstoned all you can do is create a new one, and earn again all the delegations that you\nhad before."),(0,r.kt)("h2",{id:"problem-7-my-validator-run-out-of-space"},"Problem #7: My validator run out of space"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"run-out-of-space",src:n(50746).Z,width:"1126",height:"45"})),(0,r.kt)("p",null,"This situation occurs if you haven\u2019t allocated enough disk space to your node when you\u2019ve created it.\nThe space you need is directly related to the pruning strategy your using, you can read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://docs.desmos.network/fullnode/overview#understanding-pruning"},"here"),"."),(0,r.kt)("p",null,"Assuming you\u2019re using a VPS, to solve this we can rely on different strategies, each of one of them with upside/downside:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A)")," Add more diskspace and extend your filesystem to use it:\n1) Log into the provider console and buy more diskspace;\n2) Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.astroarch.com/2019/06/linux-notes-extending-a-file-system-in-a-virtual-disk/"},"this guide"),"\nto learn how to extend the filesystem on linux;\n3) Restart your validator node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros"),": Faster solution, ideal for mainnet validators.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Cons"),": Raise renting costs of VPS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B)")," Switch pruning strategy, reset your node, state-sync it:\n1) Stop your node daemon service (usually sudo ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl stop desmosd"),");\n2) Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},".desmos/config/")," and open app.toml;\n3) Switch from pruning nothing to default/everything or from default to everything*;\n4) Backup the ",(0,r.kt)("inlineCode",{parentName:"p"},"addrbook.json")," file (this will help the node connect faster to peers after the restart);",(0,r.kt)("br",{parentName:"p"}),"\n","5) Navigate to .desmos/data/ and backup the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator_state.json")," file (this will keep the voting state avoiding double sign);\n6) Unsafe reset your node with ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos unsafe-reset-all"),";\n7) Place the backup of ",(0,r.kt)("inlineCode",{parentName:"p"},"addrbook.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator_state.json")," back into ",(0,r.kt)("inlineCode",{parentName:"p"},".desmos/config/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".desmos/data/")," folders respectively;\n8) Resync the node with state-sync (if possible)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros"),": Cheaper solution, help to understand the meaning of different pruning strategies.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Cons"),": Not feasible for mainnet validators, longer times to be back online validating."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*About pruning everything"),":",(0,r.kt)("br",{parentName:"p"}),"\n","Currently, pruning everything looks to be unsafe and unstable so we suggest to ",(0,r.kt)("strong",{parentName:"p"},"NOT use")," this strategy in production.",(0,r.kt)("br",{parentName:"p"}),"\n","However, our team is currently testing it inside our morpheus-apollo-2 testnet and will give some results in the upcoming weeks/months."),(0,r.kt)("h2",{id:"problem-8-wrong-block-header-apphash"},"Problem #8: Wrong Block Header AppHash"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"run-out-of-space",src:n(8284).Z,width:"1332",height:"46"})),(0,r.kt)("p",null,"If you run into this problem while you're syncing your node, probably you are using a wrong Desmos binary version.\nIf so, please ask inside our discord server what's the correct version/versions to use in order to sync the node correctly."),(0,r.kt)("h5",{id:"note"},"NOTE"),(0,r.kt)("p",null,"Previous delegators will still be able to unbond from a tombstoned validator."),(0,r.kt)("p",null,"More information about the slashing penalties and tombstoning can be\nfound ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/modules/slashing/07_tombstone.html#staking-tombstone"},"here"),"."))}c.isMDXComponent=!0},50746:function(e,t,n){t.Z=n.p+"assets/images/no_space_left-541cfea3fdf8824fdc7b431c671444f3.png"},8284:function(e,t,n){t.Z=n.p+"assets/images/wrong_block_header-cd53de71c5fdf9d134972ece9ef60b40.png"}}]);