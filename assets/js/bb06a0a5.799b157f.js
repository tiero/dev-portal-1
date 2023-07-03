"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[6345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,h=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,title:"Quick Start with LangChain",sidebar_label:"LangChain"},o="Quick Start with LangChain",p={unversionedId:"prem-app/usage/chat/langchain",id:"prem-app/usage/chat/langchain",title:"Quick Start with LangChain",description:"- Import all the necessary dependencies",source:"@site/docs/prem-app/usage/chat/langchain.md",sourceDirName:"prem-app/usage/chat",slug:"/prem-app/usage/chat/langchain",permalink:"/docs/prem-app/usage/chat/langchain",draft:!1,editUrl:"https://github.com/premAI-io/dev-portal/docs/prem-app/usage/chat/langchain.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Quick Start with LangChain",sidebar_label:"LangChain"},sidebar:"tutorialSidebar",previous:{title:"APIs",permalink:"/docs/prem-app/usage/chat/api"},next:{title:"Embeddings",permalink:"/docs/category/embeddings"}},c={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-with-langchain"},"Quick Start with LangChain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import all the necessary dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.schema import AIMessage, HumanMessage\n\nos.environ["OPENAI_API_KEY"] = "random-string"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instantiate the LLM Object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat = ChatOpenAI(openai_api_base="http://localhost:8000/api/v1", max_tokens=128)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send a message to the LLM")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'messages = [\n    HumanMessage(content="Can you explain what is a large language model?")\n]\nchat(messages)\n')))}m.isMDXComponent=!0}}]);