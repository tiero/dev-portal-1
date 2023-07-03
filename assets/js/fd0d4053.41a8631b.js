"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[1653],{91062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>v});var i=a(87462),s=(a(67294),a(3905)),r=a(58219),l=a(9487),n=(a(41429),a(5397)),o=a(4667),p=a(9472),m=(a(62316),a(85162));const c={id:"run-service-v-1-run-service-post",title:"Run Service",description:"Run Service",sidebar_label:"Run Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"run_service_v1_run_service__post",requestBody:{content:{"application/json":{schema:{title:"ServiceInput",required:["id"],type:"object",properties:{id:{title:"Id",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SuccessResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},400:{description:"Failed to start container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Run Service",method:"post",path:"/v1/run-service/",jsonRequestBodyExample:{id:"string"},info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Run Service",description:{type:"text/plain"},url:{path:["v1","run-service",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},d=void 0,u={unversionedId:"prem-daemon/api/run-service-v-1-run-service-post",id:"prem-daemon/api/run-service-v-1-run-service-post",title:"Run Service",description:"Run Service",source:"@site/docs/prem-daemon/api/run-service-v-1-run-service-post.api.mdx",sourceDirName:"prem-daemon/api",slug:"/prem-daemon/api/run-service-v-1-run-service-post",permalink:"/docs/prem-daemon/api/run-service-v-1-run-service-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"run-service-v-1-run-service-post",title:"Run Service",description:"Run Service",sidebar_label:"Run Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"run_service_v1_run_service__post",requestBody:{content:{"application/json":{schema:{title:"ServiceInput",required:["id"],type:"object",properties:{id:{title:"Id",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"SuccessResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},400:{description:"Failed to start container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Run Service",method:"post",path:"/v1/run-service/",jsonRequestBodyExample:{id:"string"},info:{title:"Prem Box",version:"0.0.1"},postman:{name:"Run Service",description:{type:"text/plain"},url:{path:["v1","run-service",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-daemon/api/prem-box",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Remove Volume",permalink:"/docs/prem-daemon/api/remove-volume-v-1-remove-volume-volume-name-get"},next:{title:"Service By Id",permalink:"/docs/prem-daemon/api/service-by-id-v-1-services-service-id-get"}},y={},v=[{value:"Run Service",id:"run-service",level:2}],g={toc:v},k="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"run-service"},"Run Service"),(0,s.kt)("p",null,"Run Service"),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(m.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaName:"Id",qualifierMessage:void 0,schema:{title:"Id",type:"string"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(m.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(m.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Failed to start container or service not found.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(m.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(m.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.default,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(m.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"detail"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"loc"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(p.default,{mdxType:"SchemaTabs"},(0,s.kt)(m.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,s.kt)("p",null,"string"))),(0,s.kt)(m.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,s.kt)("p",null,"integer"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(o.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(m.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);