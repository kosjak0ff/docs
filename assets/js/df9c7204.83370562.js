"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=o,k=c["".concat(l,".").concat(u)]||c[u]||p[u]||s;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var m=2;m<s;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const s={},a="Setting up Tendermint KMS + Softsign",i={unversionedId:"mainnet/kms/kms_softsign",id:"mainnet/kms/kms_softsign",title:"Setting up Tendermint KMS + Softsign",description:"KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.",source:"@site/docs/06-mainnet/kms/kms_softsign.md",sourceDirName:"06-mainnet/kms",slug:"/mainnet/kms/kms_softsign",permalink:"/next/mainnet/kms/kms_softsign",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/06-mainnet/kms/kms_softsign.md",tags:[],version:"current",lastUpdatedAt:1662474845,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{}},l={},m=[{value:"Config file",id:"config-file",level:2},{value:"Create the folders and file",id:"create-the-folders-and-file",level:3},{value:"Add your configuration",id:"add-your-configuration",level:3},{value:"Get the Identity key",id:"get-the-identity-key",level:3},{value:"Import the private validator key",id:"import-the-private-validator-key",level:3},{value:"Chain configuration",id:"chain-configuration",level:3},{value:"Start the tmkms",id:"start-the-tmkms",level:3}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-tendermint-kms--softsign"},"Setting up Tendermint KMS + Softsign"),(0,o.kt)("p",null,"::: danger Warning\nKMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.\n:::"),(0,o.kt)("h2",{id:"config-file"},"Config file"),(0,o.kt)("h3",{id:"create-the-folders-and-file"},"Create the folders and file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p kms/home\ncd kms/home\nnano tmkms.toml\n")),(0,o.kt)("h3",{id:"add-your-configuration"},"Add your configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Example Tendermint KMS configuration file\n\n## Chain Configuration\n\n[[chain]]\nid = "<chain-id>"\nkey_format = { type = "bech32", account_key_prefix = "desmospub", consensus_key_prefix = "desmosvalconspub" }\nstate_file = "/root/kms/home/state/cosmoshub-3-consensus.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["<chain-id>"]\nkey_type = "consensus"\npath = "/root/kms/home/secrets/validator-consensus.key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "morpheus-apollo-1"\naddr = "tcp://127.0.0.1:26658"\nsecret_key = "/root/kms/home/secrets/kms-identity.key"\nprotocol_version = "v0.34"\nreconnect = true\n\n')),(0,o.kt)("h3",{id:"get-the-identity-key"},"Get the Identity key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query staking validator <valoperaddress>\n")),(0,o.kt)("p",null,"You will get a similar response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'commission:\n  commission_rates:\n    max_change_rate: "0.050000000000000000"\n    max_rate: "0.500000000000000000"\n    rate: "0.050000000000000000"\n  update_time: "2021-06-08T13:56:42.931427534Z"\nconsensus_pubkey:\n  \'@type\': /cosmos.crypto.ed25519.PubKey\n  key: eUhoKzRsVUhPMDlvUWdjWmo1RmNtODFRqTT0=\ndelegator_shares: "9999999999.000080008000800080"\ndescription:\n  details: ""\n  identity: 12FA04A22E47GN17\n  moniker: testman\n  security_contact: ""\n  website: ""\njailed: false\nmin_self_delegation: "1"\noperator_address: desmosvaloper1...\nstatus: BOND_STATUS_BONDED\ntokens: "9999999999"\nunbonding_height: "617524"\nunbonding_time: "2021-05-13T05:05:09.783549624Z"\n\n')),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus_pubkey")," ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," value and put it inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"kms-identity.key")," file"),(0,o.kt)("h3",{id:"import-the-private-validator-key"},"Import the private validator key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/.desmos/config\n\ntmkms softsign import priv_validator_key.json "/root/kms/home/secret/morpheus-apollo-1.consensus.key"\n')),(0,o.kt)("h3",{id:"chain-configuration"},"Chain configuration"),(0,o.kt)("p",null,"Now you need to enable KMS access by editing .desmos/config/config.toml.",(0,o.kt)("br",{parentName:"p"}),"\n","In this file, modify ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator_laddr")," to create a listening address/port or a unix socket in desmos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')),(0,o.kt)("h3",{id:"start-the-tmkms"},"Start the tmkms"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c ~/.tmkms/tmkms.toml\n")),(0,o.kt)("p",null,"If you've setup everything properly you should see a log like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"2021-06-09T14:23:51.525184Z  INFO tmkms::commands::start: tmkms 0.10.1 starting up...\n2021-06-09T14:23:51.525380Z  INFO tmkms::keyring: [keyring:softsign] added consensus Ed25519 key: desmosvalconspub1zcjduepqepu8acj4qua576zzquvcly2un0xkzhwh0ehvgmx8gxgl34zhkceskthfp6\n2021-06-09T14:23:51.526030Z  INFO tmkms::connection::tcp: KMS node ID: 7489C3177FB578314099657A7B56CC241144CCC8\n2021-06-09T14:23:51.527591Z  INFO tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659] connected to validator successfully\n2021-06-09T14:23:51.527625Z  WARN tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659]: unverified validator peer ID! (6CA3A1674B1AE6774D1BA6E100D559C5BF80F82B)\n2021-06-09T14:35:20.416891Z  INFO tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659] signed PreCommit:78AD7099DE at h/r/s 609456/0/2 (0 ms)\n2021-06-09T14:35:25.792444Z  INFO tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659] signed PreVote:2DA528546B at h/r/s 609457/0/1 (0 ms)\n2021-06-09T14:35:26.126467Z  INFO tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659] signed PreCommit:2DA528546B at h/r/s 609457/0/2 (0 ms)\n2021-06-09T14:35:31.529730Z  INFO tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659] signed PreVote:AD37ACB851 at h/r/s 609458/0/1 (0 ms)\n2021-06-09T14:35:31.793969Z  INFO tmkms::session: [morpheus-apollo-1@tcp://127.0.0.1:26659] signed PreCommit:AD37ACB851 at h/r/s 609458/0/2 (0 ms)\n")))}p.isMDXComponent=!0}}]);