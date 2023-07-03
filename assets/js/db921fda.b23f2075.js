"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?i.createElement(y,o(o({ref:t},p),{},{components:r})):i.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={sidebar_position:4,title:"Registry"},o="Registry",l={unversionedId:"registry",id:"registry",title:"Registry",description:"The registry contains all the services available in the Prem Ecosystem. At https//registry.premai.io/.",source:"@site/docs/registry.md",sourceDirName:".",slug:"/registry",permalink:"/docs/registry",draft:!1,editUrl:"https://github.com/premAI-io/dev-portal/docs/registry.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Registry"},sidebar:"tutorialSidebar",previous:{title:"System Prune",permalink:"/docs/prem-daemon/api/system-prune-v-1-system-prune-get"},next:{title:"Service Packaging",permalink:"/docs/category/service-packaging"}},s={},c=[{value:"Add a Service",id:"add-a-service",level:2},{value:"1. Test",id:"1-test",level:3},{value:"2. Submit",id:"2-submit",level:3},{value:"3. Deploy \ud83c\udf89",id:"3-deploy-",level:3},{value:"Disclaimer",id:"disclaimer",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registry"},"Registry"),(0,n.kt)("p",null,"The registry contains all the services available in the Prem Ecosystem. At ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/premAI-io/prem-registry/tree/main"},"https://github.com/premAI-io/prem-registry/tree/main")," you can see the latest stable version of the registry. We currently expose a UI as well in order for you to easily visualize all the available models ",(0,n.kt)("a",{parentName:"p",href:"https://registry.premai.io/"},"https://registry.premai.io/"),"."),(0,n.kt)("h2",{id:"add-a-service"},"Add a Service"),(0,n.kt)("p",null,"The following steps are necessary in order to submit a new service in Prem Registry."),(0,n.kt)("h3",{id:"1-test"},"1. Test"),(0,n.kt)("p",null,"Before submitting the service, make sure that the image has been tested with the corresponding Prem Interface. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Development Mode To Be Defined. An Idea could be provide external URL in settings.")),(0,n.kt)("h3",{id:"2-submit"},"2. Submit"),(0,n.kt)("p",null,"When you are done with testing and you are confident that your service is ready for Prem, you can fork ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/premAI-io/prem-registry/"},"https://github.com/premAI-io/prem-registry/")," and add a pull request against ",(0,n.kt)("inlineCode",{parentName:"p"},"dev")," branch. Here the folders and files necessary for the pull request."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a folder with name: ",(0,n.kt)("inlineCode",{parentName:"p"},"{interface}-{service-id}"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the following files inside the folder:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"manifest.json"),": a file specifying all the service metadata.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "dolly-v2-12b", // id of the service\n    "name": "Dolly v2 12B", // name of the service\n    "beta": true, // we suggest to put it as true meaning that is a new servcie\n    "description": "Dolly-v2-12b, developed by Databricks, is an instruction-following large language model trained on diverse capability domains. It exhibits remarkable instruction following behavior, surpassing the foundation model it\'s based on, Pythia-12b. The model is particularly designed for commercial use and its inference can be run on various GPU configurations.", // service short description\n    "documentation": "", // leave it blank, will be populated by the README.md\n    "icon": "", // leave it blank, will be populated by the logo.svg absolute url\n    "modelInfo": {\n        "memoryRequirements": 24576, // amount of memory required in MiB\n        "tokensPerSecond": 18 // if it\'s a text generative model the amount of tokens per second generated\n    },\n    "interfaces": [\n        "chat" // list of interfaces the service is compatible with\n    ],\n    "dockerImages": {\n        "gpu": { // where the docker image should run: gpu | cpu\n            "size": 40689160223,\n            "image": "ghcr.io/premai-io/chat-dolly-v2-12b-gpu:1.0.2"\n        }\n    },\n    "defaultPort": 8000, // try to keep 8000\n    "defaultExternalPort": 8333 // put a random number here\n}\n')),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"logo.svg"),": a logo of your service in svg format 256x256."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"README.md"),": documentation of the service, how to use it, tips and tricks, license. Provide all the insights and the information necessary to exploit the model at maximum capacity.")))),(0,n.kt)("h3",{id:"3-deploy-"},"3. Deploy \ud83c\udf89"),(0,n.kt)("p",null,"The pull request will be reviewed by Prem team and merged accordingly. Automatically all the daemon using Prem Registry will have access to your service."),(0,n.kt)("p",null,"Congraulations \ud83c\udf89 You have published your first Service in Prem Ecosystem."),(0,n.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Prem is fully open source. You can run Prem Daemon using a different registry. In the Prem Daemon contribution ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/premAI-io/prem-daemon#custom-registry"},"guide")," you can check how to do that.")))}u.isMDXComponent=!0}}]);