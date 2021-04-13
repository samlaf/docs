(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(123)),c={title:"Web3.py"},l={unversionedId:"flashbots-core/searchers/web3-flashbots",id:"flashbots-core/searchers/web3-flashbots",isDocsHomePage:!1,title:"Web3.py",description:"This library works by injecting a new module in the Web3.py instance, which allows",source:"@site/docs/flashbots-core/searchers/web3-flashbots.md",slug:"/flashbots-core/searchers/web3-flashbots",permalink:"/docs/flashbots-core/searchers/web3-flashbots",editUrl:"https://github.com/flashbots/docs/edit/main/docs/flashbots-core/searchers/web3-flashbots.md",version:"current",sidebar:"docs",previous:{title:"Ethers Provider - Flashbot-bundle",permalink:"/docs/flashbots-core/searchers/ethers-provider-flashbots-bundle"},next:{title:"Miner's Introduction",permalink:"/docs/flashbots-core/miners/miners-introduction"}},i=[{value:"Example",id:"example",children:[]},{value:"Linting",id:"linting",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'This library works by injecting a new module in the Web3.py instance, which allows\nsubmitting "bundles" of transactions directly to miners. This is done by also creating\na middleware which captures calls to ',Object(a.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",Object(a.b)("inlineCode",{parentName:"p"},"eth_callBundle"),", and sends\nthem to an RPC endpoint which you have specified, which corresponds to ",Object(a.b)("inlineCode",{parentName:"p"},"mev-geth"),".\nTo apply correct headers we use FlashbotProvider which injects the correct header on post "),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from eth_account.signers.local import LocalAccount\nfrom web3 import Web3, HTTPProvider\nfrom flashbots import flashbot\nfrom eth_account.account import Account\nimport os\n\nETH_ACCOUNT_SIGNATURE: LocalAccount = Account.from_key(os.environ.get("ETH_SIGNATURE_KEY"))\n\n\nw3 = Web3(HTTPProvider("http://localhost:8545"))\nflashbot(w3, ETH_ACCOUNT_SIGNATURE)\n')),Object(a.b)("p",null,"Now the ",Object(a.b)("inlineCode",{parentName:"p"},"w3.flashbots.sendBundle")," method should be available to you. Look in ",Object(a.b)("inlineCode",{parentName:"p"},"examples/simple.py")," for usage examples"),Object(a.b)("h1",{id:"development-and-testing"},"Development and testing"),Object(a.b)("p",null,"Setup and run (mev-)geth with Websocket support:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"geth --http --http.api eth,net,web3,txpool --syncmode full\n")),Object(a.b)("p",null,"Install ",Object(a.b)("a",{parentName:"p",href:"https://python-poetry.org/"},"poetry")),Object(a.b)("p",null,"Poetry will automatically fix your venv and all packages needed"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"poetry install\n")),Object(a.b)("p",null,"Tips: PyCharm has a poetry plugin"),Object(a.b)("h2",{id:"linting"},"Linting"),Object(a.b)("p",null,"It's advisable to run black with default rules for linting"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sudo pip install black # Black should be installed with a global entrypoint\nblack .\n")))}p.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);