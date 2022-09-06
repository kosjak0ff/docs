"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[50857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?s.createElement(g,r(r({ref:t},p),{},{components:n})):s.createElement(g,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(87462),o=(n(67294),n(3905));const a={id:"tools-to-build",title:"Tools to build DApps",sidebar_label:"Tools to build DApps",slug:"tools-to-build"},r="Tools to build DApps",i={unversionedId:"developers/tools-to-build",id:"developers/tools-to-build",title:"Tools to build DApps",description:"In order to let developers easily interact with the Desmos blockchain, we have developed a series of tools that will ease the development of DApps.",source:"@site/docs/02-developers/03-tools-to-build.md",sourceDirName:"02-developers",slug:"/developers/tools-to-build",permalink:"/next/developers/tools-to-build",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-tools-to-build.md",tags:[],version:"current",lastUpdatedAt:1662484466,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:3,frontMatter:{id:"tools-to-build",title:"Tools to build DApps",sidebar_label:"Tools to build DApps",slug:"tools-to-build"},sidebar:"docs",previous:{title:"Client",permalink:"/next/developers/modules/supply/client"},next:{title:"Query data",permalink:"/next/developers/query-data"}},l={},c=[{value:"DesmJS",id:"desmjs",level:2},{value:"Install DesmJS",id:"install-desmjs",level:3},{value:"Send your first transaction",id:"send-your-first-transaction",level:3},{value:"Example 1: Create a profile",id:"example-1-create-a-profile",level:3},{value:"Example 2: Create a post",id:"example-2-create-a-post",level:3},{value:"Example 3: Sign with wallet connect",id:"example-3-sign-with-wallet-connect",level:3},{value:"Desmos Bindings",id:"desmos-bindings",level:2},{value:"Example 1: Post from a contract",id:"example-1-post-from-a-contract",level:3},{value:"Example 2: Query from a contract the Desmos chain state you need",id:"example-2-query-from-a-contract-the-desmos-chain-state-you-need",level:3},{value:"Notes",id:"notes",level:4},{value:"GraphQL APIs",id:"graphql-apis",level:2},{value:"Example: Query a user posts",id:"example-query-a-user-posts",level:3},{value:"Query",id:"query",level:4},{value:"Response",id:"response",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-to-build-dapps"},"Tools to build DApps"),(0,o.kt)("p",null,"In order to let developers easily interact with the Desmos blockchain, we have developed a series of tools that will ease the development of DApps."),(0,o.kt)("h2",{id:"desmjs"},"DesmJS"),(0,o.kt)("p",null,"To make it easy to develop dApps on the top of the Desmos chain we have built a ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," framework called ",(0,o.kt)("strong",{parentName:"p"},"DesmJS"),".\nDesmJS is based on to the analog framework for Cosmos based chains ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," but focused on Desmos.\nDesmJS contains 3 different packages, each one with a specific scope:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@desmoslabs/desmjs"},"@desmoslabs/desmjs")," package contains the client that allows to easily create, sign and broadcast transactions containing Desmos (and Cosmos) messages;"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@desmoslabs/desmjs-types"},"@desmoslabs/desmjs-types")," package contains the Desmos types protobuf definitions;"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect"},"@desmoslabs/desmjs-walletconnect")," package contains a ",(0,o.kt)("inlineCode",{parentName:"li"},"WalletConnectSigner")," which implements ",(0,o.kt)("inlineCode",{parentName:"li"},"@desmoslabs/desmjs")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Signer")," interface by signing transactions through a WalletConnect client.")),(0,o.kt)("p",null,"The above packages can be found on the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmjs"},"GitHub Repository")," of DesmJS."),(0,o.kt)("h3",{id:"install-desmjs"},"Install DesmJS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @desmoslabs/desmjs @desmoslabs/desmjs-types\n# or\nyarn add @desmoslabs/desmjs @desmoslabs/desmjs-types\n")),(0,o.kt)("h3",{id:"send-your-first-transaction"},"Send your first transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n    DesmosClient,\n    SigningMode,\n    OfflineSignerAdapter,\n    assertIsDeliverTxSuccess\n} from "@desmoslabs/desmjs";\n\n\nconst mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\n\nconst recipient = "desmos1ptvq7l4jt7n9sc3fky22mfvc6waf2jd8nuc0jv";\nconst amount = {\n    denom: "udsm",\n    amount: "1337420",\n};\nconst result = await client.sendTokens(firstAccount.address, recipient, [amount], "Have fun with your coins");\nassertIsDeliverTxSuccess(result);\n')),(0,o.kt)("p",null,"This is a very easy example but maybe you want to interact with some of the Desmos modules like the ",(0,o.kt)("strong",{parentName:"p"},"profiles")," or ",(0,o.kt)("strong",{parentName:"p"},"posts"),".\nLet's see an example of profile creation and post creation."),(0,o.kt)("h3",{id:"example-1-create-a-profile"},"Example 1: Create a profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { \n    DesmosClient, \n    SigningMode, \n    OfflineSignerAdapter,\n    assertIsDeliverTxSuccess,\n    MsgSaveProfileEncodeObject\n} from "@desmoslabs/desmjs";\nimport {\n    MsgSaveProfile,\n} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";\n\n\nconst mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\nconst msg: MsgSaveProfileEncodeObject = {\n    typeUrl: "/desmos.profiles.v3.MsgSaveProfile",\n    value: MsgSaveProfile.fromPartial({\n        dtag: "frieza",\n        nickname: "Frieza",\n        bio: "A weakling like you could never overcome me!",\n        profilePicture: "https://link_to_profile_picture",\n        coverPicture: "https://link_to_cover_picture",\n        creator: firstAccount.address,\n    })\n}\n\nconst result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");\nassertIsDeliverTxSuccess(result);\n')),(0,o.kt)("h3",{id:"example-2-create-a-post"},"Example 2: Create a post"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { \n    DesmosClient, \n    SigningMode, \n    OfflineSignerAdapter, \n    assertIsDeliverTxSuccess, \n    MsgCreatePostEncodeObject \n} from "@desmoslabs/desmjs";\nimport {\n    MsgCreatePost,\n} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";\nimport { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";\nimport Long from "long";\n\n\nconst mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\nconst msg: MsgCreatePostEncodeObject = {\n    typeUrl: "/desmos.posts.v3.MsgCreatePost",\n    value: MsgCreatePost.fromPartial({\n        subspaceId: Long.fromNumber(1),\n        sectionId: 0,\n        text: "Test post",\n        author: firstAccount.address,\n        replySettings: ReplySettings.REPLY_SETTING_EVERYONE,\n    })\n}\n\nconst result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");\nassertIsDeliverTxSuccess(result);\n')),(0,o.kt)("h3",{id:"example-3-sign-with-wallet-connect"},"Example 3: Sign with wallet connect"),(0,o.kt)("p",null,"make sure to install the wallet connect package with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @desmoslabs/desmjs-walletconnect\n# or\nyarn add @desmoslabs/desmjs-walletconnect\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  WalletConnect,\n  QRCodeModal,\n  WalletConnectSigner,\n} from "@desmoslabs/desmjs-walletconnect";\nimport { DesmosClient, SigningMode, assertIsDeliverTxSuccess, MsgSaveProfileEncodeObject } from "@desmoslabs/desmjs";\nimport {\n    MsgSaveProfile,\n} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";\n\n\nconst connector = new WalletConnect({\n    bridge: "https://bridge.walletconnect.org",\n    qrcodeModal: QRCodeModal,\n});\nconst signer = new WalletConnectSigner(this.connector, {\n    signingMode: SigningMode.AMINO,\n});\n\n// Show the walletconnect modal to allow connection from a client\nawait signer.connect();\n\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\nconst msg: MsgSaveProfileEncodeObject = {\n    typeUrl: "/desmos.profiles.v3.MsgSaveProfile",\n    value: MsgSaveProfile.fromPartial({\n        dtag: "frieza",\n        nickname: "Frieza",\n        bio: "A weakling like you could never overcome me!",\n        profilePicture: "https://link_to_profile_picture",\n        coverPicture: "https://link_to_cover_picture",\n        creator: firstAccount.address,\n    })\n}\n\nconst result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");\nassertIsDeliverTxSuccess(result);\n')),(0,o.kt)("h2",{id:"desmos-bindings"},"Desmos Bindings"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmos-bindings"},"Desmos Bindings")," are a set of packages that make possible to interact with the Desmos chain directly from smart contracts. With them, you can build your own dApp smart contracts taking full advantage of the Desmos chain modules to create even more personalisation to your app.",(0,o.kt)("br",{parentName:"p"}),"\n","You can find the bindings generated documentation here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/desmos-bindings/1.0.0/desmos_bindings/index.html"},"Desmos Bindings docs"),". "),(0,o.kt)("h3",{id:"example-1-post-from-a-contract"},"Example 1: Post from a contract"),(0,o.kt)("p",null,"The below example shows you how to send a ",(0,o.kt)("a",{parentName:"p",href:"/next/developers/modules/posts/messages#msgcreatepost"},(0,o.kt)("inlineCode",{parentName:"a"},"MsgCreatePost"))," from\ninside a smart contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn post_example_from_contract(deps: DepsMut, env: Env, info: MessageInfo, message: String) -> Result<Response<DesmosMsg>, ContractError> {\n    let post_msg = PostsMsg::CreatePost {\n        subspace_id: Uint64::new(1),\n        section_id: 1,\n        external_id: None,\n        text: Some(message),\n        entities: None,\n        attachments: None,\n        author: env.contract.address,\n        conversation_id: None,\n        reply_settings: ReplySetting::Unspecified,\n        referenced_posts: vec![]\n    };\n\n    let response = Response::new()\n        .add_attribute("action", "post")\n        .add_attribute("author", env.contract.to_string())\n        .add_messages(post_msg);\n\n    Ok(response)\n}\n')),(0,o.kt)("h3",{id:"example-2-query-from-a-contract-the-desmos-chain-state-you-need"},"Example 2: Query from a contract the Desmos chain state you need"),(0,o.kt)("p",null,"The below example shows you how to query a Subspace's posts from inside a smart contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn query_posts_from_contract(deps: Deps<DesmosQuery>, subspace_id: Uint64, pagination: Option<PageRequest>) -> StdResult<Binary> {\n    let request = DesmosQuery::Posts(PostsQuery::SubspacePosts {\n        subspace_id,\n        pagination,\n    });\n    let response: StdResult<QuerySubspacePostsResponse> = deps.querier.query(&request.into());\n}\n")),(0,o.kt)("h4",{id:"notes"},"Notes"),(0,o.kt)("p",null,"The above examples are really simple examples of what you can achieve with the Desmos Bindings packages inside smart contracts. More examples will be added here in the future, and you can find some other inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmos-bindings"},"Desmos Bindings Github repository"),"."),(0,o.kt)("h2",{id:"graphql-apis"},"GraphQL APIs"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/next/graphql/overview"},"GraphQL APIs")," simplifies the way with which clients interact with the Desmos blockchain to obtain the data their applications need. These queries can be customised with a wide range of parameters giving developers a great flexibility while building their apps."),(0,o.kt)("h3",{id:"example-query-a-user-posts"},"Example: Query a user posts"),(0,o.kt)("h4",{id:"query"},"Query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query QueryUserPosts {\n  post(where: {author_address: {_eq: "desmos1dx6h75tkj0cuvyqf6cwn6usc9qynu39v0245m4"}}) {\n    id\n    text\n    creation_date\n    last_edited_date\n    external_id\n    author_address\n    attachments {\n      content\n      id\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  "data": {\n    "post": [\n      {\n        "id": 1,\n        "text": "This is a test post",\n        "creation_date": "2022-06-30T17:04:54.57816",\n        "last_edited_date": "2022-07-01T07:35:48.149871",\n        "external_id": null,\n        "author_address": "desmos1dx6h75tkj0cuvyqf6cwn6usc9qynu39v0245m4",\n        "attachments": [\n          {\n            "content": {\n              "uri": "https://images.app.goo.gl/g7VHpLGJYjndRfWL6",\n              "@type": "/desmos.posts.v1.Media",\n              "mime_type": "image/png"\n            },\n            "id": 1\n          }\n        ]\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0}}]);