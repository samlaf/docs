"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4296],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,s(s({ref:e},u),{},{components:n})):r.createElement(m,s({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8338:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Pending transaction status API"},c=void 0,l={unversionedId:"flashbots-protect/rpc/status-api",id:"flashbots-protect/rpc/status-api",isDocsHomePage:!1,title:"Pending transaction status API",description:"Transactions that you submit to Flashbots Protect won't be observable in the public mempool. However, you can use our status API to check the status of your transactions. The URL for doing so is//protect.flashbots.net/tx/YOURTXHASH_HERE, and you can also use Etherscan as you normally would for transactions. They will show the status of your transaction from the status API as well.",source:"@site/docs/flashbots-protect/rpc/status-api.md",sourceDirName:"flashbots-protect/rpc",slug:"/flashbots-protect/rpc/status-api",permalink:"/flashbots-protect/rpc/status-api",tags:[],version:"current",frontMatter:{title:"Pending transaction status API"},sidebar:"docs",previous:{title:"uncle bandit risk",permalink:"/flashbots-protect/rpc/uncle-bandits"},next:{title:"Release notes",permalink:"/flashbots-protect/rpc/releases"}},u=[{value:"Potential statuses",id:"potential-statuses",children:[]},{value:"Privacy",id:"privacy",children:[]}],p={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Transactions that you submit to Flashbots Protect won't be observable in the public mempool. However, you can use our status API to check the status of your transactions. The URL for doing so is: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://protect.flashbots.net/tx/YOUR_TX_HASH_HERE"),", and you can also use Etherscan as you normally would for transactions. They will show the status of your transaction from the status API as well."),(0,o.kt)("p",null,"In turn you will receive a JSON response that looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "pending",\n    "hash": "YOUR_TX_HASH",\n    "maxBlockNumber": "13543898",\n    "transaction": {\n        "from": "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",\n        "to": "0xac03bb73b6a9e108530aff4df5077c2b3d481e5a",\n        "data": "0x414bf389000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n        "gasLimit": "21000",\n        "maxFeePerGas": "300",\n        "maxPriorityFeePerGas": "10",\n        "nonce": "0",\n        "value": "10000000000",\n    }\n}\n')),(0,o.kt)("h2",{id:"potential-statuses"},"Potential statuses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PENDING")," - The transaction was received and is currently being submitted to miners"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"INCLUDED")," - The transaction was included on-chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FAILED")," - The transaction was submitted for 25 blocks and failed to be included on-chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UNKNOWN")," - The transaction was not received")),(0,o.kt)("h2",{id:"privacy"},"Privacy"),(0,o.kt)("p",null,"In order to receive a response from the status API you must know and provide a transaction hash to look up. As a result, you are only able to look up transactions which you know about."))}f.isMDXComponent=!0}}]);