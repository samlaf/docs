"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[3802],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,b=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?o.createElement(b,r(r({ref:t},c),{},{components:n})):o.createElement(b,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5744:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"bundle inclusion troubleshooting"},l=void 0,u={unversionedId:"flashbots-auction/searchers/advanced/troubleshooting",id:"flashbots-auction/searchers/advanced/troubleshooting",isDocsHomePage:!1,title:"bundle inclusion troubleshooting",description:"How to troubleshoot your Flashbots bundle not landing on-chain",source:"@site/docs/flashbots-auction/searchers/advanced/troubleshooting.mdx",sourceDirName:"flashbots-auction/searchers/advanced",slug:"/flashbots-auction/searchers/advanced/troubleshooting",permalink:"/flashbots-auction/searchers/advanced/troubleshooting",tags:[],version:"current",frontMatter:{title:"bundle inclusion troubleshooting"},sidebar:"docs",previous:{title:"eip-1559 support",permalink:"/flashbots-auction/searchers/advanced/eip1559"},next:{title:"simple arbitrage bot",permalink:"/flashbots-auction/searchers/example-searchers/simple-arbitrage-bot"}},c=[{value:"How to troubleshoot your Flashbots bundle not landing on-chain",id:"how-to-troubleshoot-your-flashbots-bundle-not-landing-on-chain",children:[]},{value:"Does your transaction work and pay enough?",id:"does-your-transaction-work-and-pay-enough",children:[]},{value:"Is you bundle paying enough to be competitive?",id:"is-you-bundle-paying-enough-to-be-competitive",children:[{value:"Types of conflicts",id:"types-of-conflicts",children:[]},{value:"Detecting",id:"detecting",children:[]}]},{value:"Is your bundle received too late?",id:"is-your-bundle-received-too-late",children:[]},{value:"Is the miner for a particular block running Flashbots?",id:"is-the-miner-for-a-particular-block-running-flashbots",children:[]},{value:"Everything checks out, what&#39;s next?",id:"everything-checks-out-whats-next",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-troubleshoot-your-flashbots-bundle-not-landing-on-chain"},"How to troubleshoot your Flashbots bundle not landing on-chain"),(0,i.kt)("p",null,"Unlike broadcasting a transaction which lands on-chain (even if the transaction fails), troubleshooting Flashbots bundles is considerably more challenging, since any of the following circumstances will prevent your bundle from landing on chain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Transaction failure (ANY within the bundle)\n2. Incentives (gas price + coinbase transfers) not high enough to offset value of block space\n3. Competitors paying more for same opportunity\n4. Bundle received too late to appear in target block\n5. A miner for target block not running Flashbots\n")),(0,i.kt)("p",null,"While you might normally rely on ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io"},"Etherscan")," to investigate how your transaction executed, landed on-chain, and compared to competitors, that won't work with Flashbots, a system that keeps your ","[losing]"," transactions from hitting the chain. As a part of debugging we ",(0,i.kt)("em",{parentName:"p"},"strongly")," recommend that you simulate your transactions, log the output, as well as keep a record of each transaction you submit including your entire bundle and its contents (e.g. keep the signed transactions in your bundles)."),(0,i.kt)("p",null,"The above possibilities are specified in the order they should be considered, so let's walk through each issue and demonstrate how one might discover and resolve each one. The following assumes you are using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/ethers-provider-flashbots-bundle"},"Flashbots Ethers Provider"),", but the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/rpc-endpoint"},"RPC calls are standard")," and the strategies should be easy to implement in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/libraries/golang"},"other providers"),"."),(0,i.kt)("h2",{id:"does-your-transaction-work-and-pay-enough"},"Does your transaction work and pay enough?"),(0,i.kt)("p",null,"Covers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Transaction failure (ANY within the bundle)\n2. Incentives (gas price/coinbase transfers) not high enough to offset value of block space\n")),(0,i.kt)("p",null,"These two issues are lumped together since their cause, investigation, and resolutions are very similar. Flashbots will not include a bundle with"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A reverting transaction (unless specified via ",(0,i.kt)("a",{parentName:"li",href:"https://docs.flashbots.net/flashbots-auction/miners/mev-relay/#eth_sendbundle"},"optional argument revertingTxHashes")," or uncle'd)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/eip1559#faq"},"Gas price below base fee")," (would create an invalid block if included)"),(0,i.kt)("li",{parentName:"ol"},"Effective priority fee not high enough to offset opportunity cost of using that block space for other unrelated transactions ",(0,i.kt)("em",{parentName:"li"},"(e.g. your bundle is paying 1 Gwei priority fee, while the cheapest transaction in the block is paying 2 Gwei, it is in the miner's best interest to discard your bundle in favor of standard pending transactions)"))),(0,i.kt)("p",null,"As any of these conditions result in your bundle not appearing in a block, troubleshooting these issues requires ",(0,i.kt)("inlineCode",{parentName:"p"},"simulation")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," RPC call. ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," is similar to an ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_call")," you might already be familiar with, but offers these key benefits:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Operates on an array of ",(0,i.kt)("em",{parentName:"li"},"signed")," transactions, instead of a single ","[unsigned]"," transaction description. These transactions are executed in sequence starting at the top of the specified block. Simulating with signed transactions leaves very little difference between how your system creates transactions and how they will be processed on-chain (e.g. you can never use an incorrect ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," field when simulating a signed transaction)"),(0,i.kt)("li",{parentName:"ol"},"Returns gas used and coinbase transfer, per transaction. (Coinbase transfer factors into effective gas price)"),(0,i.kt)("li",{parentName:"ol"},"Allows specifying the exact values for the following values, allowing more accurate simulation:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"State block number (what values are read from SLOADs)"),(0,i.kt)("li",{parentName:"ul"},"EVM block number (what value is returned from ",(0,i.kt)("inlineCode",{parentName:"li"},"block.number"),")"),(0,i.kt)("li",{parentName:"ul"},"EVM timestamp (what value is returned from ",(0,i.kt)("inlineCode",{parentName:"li"},"block.timestamp"),")")))),(0,i.kt)("p",null,"Flashbots ethers.js provider exposes ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," via the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/ethers-provider-flashbots-bundle#simulate-and-send"},"simulate() method"),". This only operates on a pre-signed bundle, so you must sign your bundle transactions manually."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  const signedTransactions = await flashbotsProvider.signBundle(transactionBundle)\n  const simulation = await flashbotsProvider.simulate(signedTransactions, targetBlockNumber, targetBlockNumber + 1)\n  console.log(JSON.stringify(simulation, null, 2))\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "totalGasUsed": 98564,\n  "bundleHash": "0x9a6a9fa038343fe3c57260fb7bdb2c79ebadb3088656300d8a494123ebda6d85",\n  "coinbaseDiff": BigNumber(0x034dc9949767a4),\n  },\n  "results": [\n    {\n      "coinbaseDiff": "929953106847652",\n      "ethSentToCoinbase": "0",\n      "fromAddress": "0x9874Ef8519a0Fc7a6B553aad92fDF0E469488931",\n      "gasFees": "929953106847652",\n      "gasPrice": "35008022393",\n      "gasUsed": 29964,\n      "toAddress": "0x48B2dD9CEFbA73c60882478a16BC3428Aceed2B9",\n      "txHash": "0xee3f6f22bf3b4740b36833d41d4872f48f98c6328fa04b3679558e482ba0e328",\n      "value": "0x0000000000000000000000000000000000000000000000000000000000000001"\n    },\n    ...\n  ],\n}\n')),(0,i.kt)("p",null,"To resolve, ensure the response from eth_callBundle does not revert and matches your expectations for bundle profitability. Compare your bundle's effective gas price against the profit of the conflicting bundle."),(0,i.kt)("h2",{id:"is-you-bundle-paying-enough-to-be-competitive"},"Is you bundle paying enough to be competitive?"),(0,i.kt)("p",null,"Covers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"3. Competitors paying more\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/overview"},'Flashbots bundles adhere to a "blind" auction'),', where bundle pricing is not released by Flashbots prior to landing in a block. Only after the block containing winning bundles is propagated are the winning "bids" are revealed (via the transactions themselves and blocks-api for recognizing which set of transactions belong to a bundle).'),(0,i.kt)("p",null,"While you cannot see a competitor's bid in real time, it is possible to look AFTER the fact to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the exact bundle (if any) that conflicted with yours"),(0,i.kt)("li",{parentName:"ol"},"Compare the conflicting bundle's ",(0,i.kt)("inlineCode",{parentName:"li"},"effective priority fee")," with your own (to see if you should be bidding more to remain competitive)")),(0,i.kt)("h3",{id:"types-of-conflicts"},"Types of conflicts"),(0,i.kt)("p",null,"There are numerous reasons why two bundles might conflict. Consider that the basic algorithm for merging bundles is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Simulate each bundle at the top of the block"),(0,i.kt)("li",{parentName:"ol"},"Sort bundles by ",(0,i.kt)("inlineCode",{parentName:"li"},"effective priority fee"),", highest first"),(0,i.kt)("li",{parentName:"ol"},"In descending order, try each bundle ",(0,i.kt)("strong",{parentName:"li"},"that does not error or lower its effective priority fee from top-of-block simulation")," until you reach a maximum bundle inclusion count or you run out of profitable bundles")),(0,i.kt)("p",null,"A conflict occurs when a bundle simulates one way at the top of the block, and a different ","[worse]"," way when placed after another bundle. Here is a list of the ways a bundle could conflict:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Nonce collision")," - The target bundle includes a transaction from account ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," and nonce ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),". The conflicting bundle also includes a transaction from account ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," and nonce ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),". The most common case for nonce collision is from including the exact same transaction, but it doesn't have to be; the conflicting bundle only needs to increment an account's nonce via any transaction."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Revert")," - The target bundle has no reverting transactions when simulated at the top of the block, but reverts when placed after a conflicting bundle that appears first"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Effective Priority Fee")," - A bundle cannot significantly reduce its priority fee between simulating at the top of the block and when it is selected for inclusion. This commonly occurs when a bundle is operating on an arbitrage for which it pays a % of the profit to the miner, with an earlier bundle taking part, but not all, of the arbitrage opportunity.")),(0,i.kt)("h3",{id:"detecting"},"Detecting"),(0,i.kt)("p",null,"If a block you targeted contained Flashbots bundles, but yours did not appear, the next step is to determine which bundles conflicted with yours and, if present, calculate their ",(0,i.kt)("inlineCode",{parentName:"p"},"effective priority fee"),". This can be accomplished through several iterations of simulations, using this strategy:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Simulate your bundle at the head of the target block, note its revert states and ",(0,i.kt)("inlineCode",{parentName:"li"},"effective priority fee")),(0,i.kt)("li",{parentName:"ol"},"Fetch all bundles found in the target block"),(0,i.kt)("li",{parentName:"ol"},"Simulate ","[bundle1 + your bundle]"," as a single bundle, check the behavior of your bundle"),(0,i.kt)("li",{parentName:"ol"},"Simulate ","[bundle1 + bundle2 + your bundle]"," as a single bundle, see the behavior of your bundle"),(0,i.kt)("li",{parentName:"ol"},"Simulate ","[bundle1 + bundle2 + ...bundleN + your bundle]"," as a single bundle, see the behavior of your bundle"),(0,i.kt)("li",{parentName:"ol"},"And so on...")),(0,i.kt)("p",null,"Using this method, we can identify the conflicting bundle that caused your target bundle to change behavior. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Flashbots ethers.js provider")," has a built-in helper function for running this strategy called ",(0,i.kt)("inlineCode",{parentName:"p"},"getConflictingBundle()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const signedTransactions = await flashbotsProvider.signBundle(transactionBundle)\nconsole.log(await flashbotsProvider.getConflictingBundle(\n      signedTransactions,\n      13140328 // blockNumber\n  ))\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "conflictType": FlashbotsBundleConflictType.NonceCollision,\n  "initialSimulation": {\n    "totalGasUsed": 205860,\n    "bundleHash": "0x1720ea33d96dca026dddd5689f8cad21966988348ced04e9054a0dca5d60f1d4",\n    "coinbaseDiff": BigNumber(0x0176750858d000),\n    },\n    "results": [...]\n  },\n  "targetBundleGasPricing": {\n    "gasUsed": 205860,\n    "txCount": 1,\n    "gasFeesPaidBySearcher": BigNumber(0x0176750858d000),\n    "priorityFeesReceivedByMiner": BigNumber(0x52efd8d80dbc24),\n    "ethSentToCoinbase": BigNumber.from(0x00),\n    "effectiveGasPriceToSearcher": BigNumber(0x77359400),\n    "effectivePriorityFeeToMiner": BigNumber(0x1a6734f601)\n  },\n  "conflictingBundleGasPricing": {\n    "gasUsed": 396462,\n    "txCount": 3,\n    "gasFeesPaidBySearcher": BigNumber(0xc4c3c97ce1bff8b4),\n    "priorityFeesReceivedByMiner": BigNumber(0xc4213e4d7ad82006),\n    "ethSentToCoinbase": BigNumber(0xc4c2663d3b804731),\n    "effectiveGasPriceToSearcher": BigNumber(0x410ce509aa1e),\n    "effectivePriorityFeeToMiner": BigNumber(0x40f2069f201d)\n  },\n  "conflictingBundle": [\n    {\n      "transaction_hash": "0x23a33038289dda1b6e722835d2b9388cb41d96d085c19ca6b71bb3e9697e6692",\n      "tx_index": 0,\n      "bundle_type": "flashbots",\n      "bundle_index": 0,\n      "block_number": 13140328,\n      "eoa_address": "0x38563699560e4512c7574C8cC5Cf89fd43923BcA",\n      "to_address": "0x000000000035B5e5ad9019092C665357240f594e",\n      "gas_used": 100893,\n      "gas_price": "0",\n      "coinbase_transfer": "0",\n      "total_miner_reward": "0"\n    },\n   ...\n  ]\n}\n')),(0,i.kt)("p",null,"To resolve, first determine if you have an issue of competitors paying more and, if so, increase your ",(0,i.kt)("inlineCode",{parentName:"p"},"effective priority fee"),". This can be accomplished either by paying more to the miner ",(0,i.kt)("em",{parentName:"p"},"or")," using less gas to accomplish the same opportunity.\nIf your bundles are not outbid by a conflicting bundle, check to see if your bundles are being received too late:"),(0,i.kt)("h2",{id:"is-your-bundle-received-too-late"},"Is your bundle received too late?"),(0,i.kt)("p",null,"Covers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"4. Bundle received too late to appear in target block\n")),(0,i.kt)("p",null,"Each bundle submission targets only a specific block number, so it is important that the bundle is received as early as possible to ensure the bundle has time to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Hit the relay"),(0,i.kt)("li",{parentName:"ol"},"Pass relay simulation"),(0,i.kt)("li",{parentName:"ol"},"Reach miners"),(0,i.kt)("li",{parentName:"ol"},"Be present during the miner's next block re-formation")),(0,i.kt)("p",null,"All this must occur prior to the targeted block being mined. If you are targeting ",(0,i.kt)("inlineCode",{parentName:"p"},"blockNumber +1"),", as most bundles do, it is important to get your bundle to the relay (step 1) as fast as possible."),(0,i.kt)("p",null,"Keep in mind there is a period of time, for every block, when your local perspective of block height is ",(0,i.kt)("inlineCode",{parentName:"p"},"X"),", while ",(0,i.kt)("inlineCode",{parentName:"p"},"X+1")," has already been found and propagated to part of the network, without reaching your local node yet. During this period of partial propagation, submitting a bundle targeting ",(0,i.kt)("inlineCode",{parentName:"p"},"X+1"),", while seemingly valid from your perspective of the network, is futile as miners have already begun work on solving X+2. This is the most extreme case, but the same logic also holds true of targeting ",(0,i.kt)("inlineCode",{parentName:"p"},"X+1")," moments BEFORE it is found as steps 1 through 5 all take time (on the order of about 1-2 seconds)."),(0,i.kt)("p",null,"To see how much time elapsed between your bundle being submitted to relay, forwarded to miners, and the next block being found, Flashbots offers an RPC endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_getBundleStats")," which will return timing to you, based on a previously-submitted bundle. All submitted bundles have a bundleHash ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/ethers-provider-flashbots-bundle/blob/0d404bb041b82c12789bd62b18e218304a095b6f/src/index.ts#L266-L269"},"which is easy to calculate")," and target block number which uniquely identify them for later retrieval."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'console.log(\n  await flashbotsProvider.getBundleStats("0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234", 13509887)\n  )\n\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "isSimulated": true,\n  "isSentToMiners": true,\n  "isHighPriority": true,\n  "simulatedAt": "2021-10-29T04:00:50.526Z",\n  "submittedAt": "2021-10-29T04:00:50.472Z",\n  "sentToMinersAt": "2021-10-29T04:00:50.546Z"\n}\n')),(0,i.kt)("p",null,"Compare the above times to the times you witness the targeted block propagated to your node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the amount of time is short, get your processing time and network latency down."),(0,i.kt)("li",{parentName:"ul"},"If the amount of time between ",(0,i.kt)("inlineCode",{parentName:"li"},"sentToMinersAt")," and witnessing the target block is large, continue to the next section")),(0,i.kt)("h2",{id:"is-the-miner-for-a-particular-block-running-flashbots"},"Is the miner for a particular block running Flashbots?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"5. A miner for target block not running Flashbots\n")),(0,i.kt)("p",null,"Flashbots is a system that requires miner active participation, running a custom ethereum node and choosing to receive bundles from the Flashbots relay. While most Ethereum hash rate is currently running Flashbots (as of late 2021), not all blocks are mined with Flashbots bundles."),(0,i.kt)("p",null,"If no bundles are detected in the blocks-api response, check if other blocks from the same miner ever have Flashbots bundles. If no blocks from a particular miner contain Flashbots bundles, it is possible your bundle was not seen by the miner who created the block at the target block height."),(0,i.kt)("h2",{id:"everything-checks-out-whats-next"},"Everything checks out, what's next?"),(0,i.kt)("p",null,"Once you have validated the above issues are not affecting your bundle submission, consider filling out the Flashbots searcher support form:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/flashbots/Searcher-Issue-Reporting-Form-700a5ff3843a443c993912099b4c1b56"},"Fill out our Searcher Issue Reporting Form")),(0,i.kt)("p",null,"Be sure to include the output from the above RPC calls:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eth_callBundle / simulate"),(0,i.kt)("li",{parentName:"ul"},"eth_getBundleStats"),(0,i.kt)("li",{parentName:"ul"},"getConflictingBundle")),(0,i.kt)("p",null,"in the form submission."))}h.isMDXComponent=!0}}]);