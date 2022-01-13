"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[476],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,v=f["".concat(a,".").concat(m)]||f[m]||l[m]||s;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],c={},a="HTTPS",u={unversionedId:"features/https",id:"features/https",title:"HTTPS",description:"1.\u5728eventmesh-runtime \u4e2d\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/https.md",sourceDirName:"features",slug:"/features/https",permalink:"/zh/docs/features/https",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/https.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eventmesh-HTTP-trace-design",permalink:"/zh/docs/features/eventmesh-trace-design"},next:{title:"EventMesh SPI",permalink:"/zh/docs/features/spi"}},p=[],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"https"},"HTTPS"),(0,s.kt)("p",null,"1.\u5728eventmesh-runtime \u4e2d\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"eventMesh.properties(\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e)\neventMesh.server.useTls.enabled=true   //\u9ed8\u8ba4\u503c false\n\n\nconfig env varible\n-Dssl.server.protocol=TLSv1.1   //\u9ed8\u8ba4\u503c TLSv1.1\n-Dssl.server.cer=sChat2.jks     //\u628a\u6587\u4ef6\u653e\u5230\u542f\u52a8\u811a\u672cstart.sh \u6307\u5b9a\u7684conPath\u76ee\u5f55\u4e0b\n-Dssl.server.pass=sNetty\n")),(0,s.kt)("p",null,"2.\u5728eventmesh-sdk-java \u4e2d\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"//\u521b\u5efaproducer\nLiteClientConfig eventMeshHttpClientConfig = new eventMeshHttpClientConfig();\n...\n\n//\u8bbe\u7f6e\u5f00\u542fTLS\neventMeshHttpClientConfig.setUseTls(true);\nLiteProducer producer = new LiteProducer(eventMeshHttpClientConfig);\n\n\n//\u914d\u7f6e\u73af\u5883\u53d8\u91cf\n-Dssl.client.protocol=TLSv1.1   //\u9ed8\u8ba4\u503c TLSv1.1\n-Dssl.client.cer=sChat2.jks     //\u628a\u6587\u4ef6\u653e\u5230\u5e94\u7528\u6307\u5b9a\u7684conPath\u76ee\u5f55\u4e0b\n-Dssl.client.pass=sNetty\n")))}f.isMDXComponent=!0}}]);