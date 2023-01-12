"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[7658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=l(a),p=r,b=m["".concat(u,".").concat(p)]||m[p]||c[p]||i;return a?n.createElement(b,s(s({ref:t},h),{},{components:a})):n.createElement(b,s({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"v1.8.0 Release",date:new Date("2023-01-12T16:23:00.000Z"),hide_table_of_contents:!1,author:"walterlife",author_url:"https://github.com/walterlife",author_image_url:"https://avatars.githubusercontent.com/u/8448852"},s=void 0,o={unversionedId:"release-notes/v1.8.0",id:"release-notes/v1.8.0",title:"v1.8.0 Release",description:"Feature",source:"@site/events/release-notes/v1.8.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.8.0",permalink:"/zh/events/release-notes/v1.8.0",draft:!1,tags:[],version:"current",frontMatter:{title:"v1.8.0 Release",date:"2023-01-12T16:23:00.000Z",hide_table_of_contents:!1,author:"walterlife",author_url:"https://github.com/walterlife",author_image_url:"https://avatars.githubusercontent.com/u/8448852"},sidebar:"tutorialSidebar",next:{title:"v1.7.0 Release",permalink:"/zh/events/release-notes/v1.7.0"}},u={},l=[{value:"Feature",id:"feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bug",id:"bug",level:2}],h={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2888"},"Feature #2888")," Complete EventCatalog features"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2882"},"Feature #2894")," Complete Dashboard Workflow Features"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2865"},"Feature #2865")," Dashboard-add workflow swagger docs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2866"},"Feature #2866")," Dashboard-add event catalog swagger docs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2790"},"Feature #2790")," Jaeger tracing plugin docs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2867"},"Feature #2867")," Dashboard-add workflow controller cmd module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2868"},"Feature #2868")," Dashboard-add event catalog controller cmd module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2808"},"Feature #2808")," Dashboard-Add event catalogs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2807"},"Feature #2807")," Dashboard - Add Workflows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2806"},"Feature #2806")," Dashboard - New style for the navigation menu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2789"},"Feature #2789")," Jaeger tracing plugin service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2788"},"Feature #2788")," Jaeger tracing plugin config")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2576"},"Enhancement #2576")," Enhancement the config manage for project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2894"},"Enhancement #2894")," Optimize workflow save interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2880"},"Enhancement #2880")," Optimize workflow dashboard controller module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2181"},"Enhancement #2181")," Workflow Feature Implementation: Catalog Management"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2180"},"Enhancement #2180")," Workflow Feature Implementation: Workflow Management"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2863"},"Enhancement #2863")," eventmesh-server-go module add golangci-lint command in Makefile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2852"},"Enhancement #2852")," optimize code to reduce almost same code for updating client and subscription in different processor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2702"},"Enhancement #2702")," Some optimizations for collections"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2693"},"Enhancement #2693")," SendAsyncEventProcessor judgment blanks can be simplified"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2691"},"Enhancement #2691")," Interface methods are public by default, so you can remove the public"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2642"},"Enhancement #2642")," go sdk common util module add testcase"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2640"},"Enhancement #2640")," Refine rabbitmq connector unit test"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2638"},"Enhancement #2638")," refactor go sdk id module test"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2196"},"Enhancement #2196")," Workflow Feature Implementation: Workflow execution metrics"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2190"},"Enhancement #2190")," Workflow Feature Implementation: Event Filter/Validate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2192"},"Enhancement #2192")," Workflow Feature Implementation: Integrate EM, implement queue based on MQ")),(0,r.kt)("h2",{id:"bug"},"Bug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2855"},"Bug #2855")," eventmesh-sdk-go test error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2849"},"Bug #2849")," TCP Server will throw stack over flow error when subscribing because of calling self method recursively"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/2845"},"Bug #2845")," Fix IOException in SSLContextFactory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1656"},"Bug #1656")," The extension field of CloudEvent does not exist."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1654"},"Bug #1654")," Occur NullPointerException when broadcastEventListener consumes message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1627"},"Bug #1627")," ConsumerGroup subscribes multiple topics, only first topic can invoke url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1367"},"Bug #1367")," Cannot find the webhook protocol adaptor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1350"},"Bug #1350")," Fix WebHookProcessorTest test error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1347"},"Bug #1347")," Pravega connector writer doesn't close when unsubscribing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1279"},"Bug #1279")," gradle.properties incorrect under the eventmesh-connector-pulsar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1238"},"Bug #1238")," Can't start the pulsar connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1208"},"Bug #1208")," Use zipkin hippen NullPointerException"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1021"},"Bug #1021")," Span is null when eventMeshServerTraceEnable is false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1022"},"Bug #1022")," Two NPE problems with Tcp Protocol Resolver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1035"},"Bug #1035")," Tcp UpStreamMsgContext retry infinite loop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1036"},"Bug #1036")," The bug caused by the logical sequence of tcp closeSession"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1038"},"Bug #1038")," The result of validate target url method is opposite in http protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1052"},"Bug #1052")," Only the first instance of the same consumer group receives the message in http protocol"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1056"},"Bug #1056")," Fix StringIndexOutOfBoundsException"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1059"},"Bug #1059")," NullPointException of Http Request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1064"},"Bug #1064")," NullPointException Of ClientManageControllerTest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/issues/1074"},"Bug #1074")," Fix PrometheusConfigurationTest running test fail")))}c.isMDXComponent=!0}}]);