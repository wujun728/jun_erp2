(function(e){function n(n){for(var o,r,c=n[0],u=n[1],s=n[2],p=0,l=[];p<c.length;p++)r=c[p],i[r]&&l.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==i[u]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},i={index:0},a=[];function r(e){return c.p+"static/js/"+({"pages-index-index~pages-point-point":"pages-index-index~pages-point-point","pages-index-index":"pages-index-index","pages-point-point":"pages-point-point"}[e]||e)+"."+{"pages-index-index~pages-point-point":"389137f1","pages-index-index":"1193cb17","pages-point-point":"6f21f825"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=i[e]=[n,o]}));n.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e),a=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,t[1](r)}i[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/captcha-h5/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var d=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("483d"),i=t.n(o);i.a},"23be":function(e,n,t){"use strict";t.r(n);var o=t("341d"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},"341d":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){document.addEventListener("touchmove",(function(e){e.preventDefault()}),!1)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"3dfd":function(e,n,t){"use strict";t.r(n);var o=t("9510"),i=t("23be");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("034f");var r,c=t("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=u.exports},"483d":function(e,n,t){var o=t("867b");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=t("4f06").default;i("b29d6b30",o,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,n,t){"use strict";var o=t("4ea4");t("8e6e"),t("ac6a"),t("456d");var i=o(t("bd86"));t("cadf"),t("551c"),t("f751"),t("097d"),t("6cdc"),t("1c31"),t("921b");var a=o(t("e143")),r=o(t("3dfd"));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}a.default.config.productionTip=!1,r.default.mpType="app";var s=new a.default(u({},r.default));s.$mount()},5768:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/index/index":{navigationBarTitleText:"滑动验证"},"pages/point/point":{navigationBarTitleText:"点选验证"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"行为验证码",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=o},"6cdc":function(e,n,t){"use strict";(function(e){var n=t("4ea4"),o=n(t("e143"));e["____wxdb2c7ac2f09808bd____"]=!0,delete e["____wxdb2c7ac2f09808bd____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"行为验证码",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},tabBar:{list:[{pagePath:"pages/index/index",text:"滑动",iconPath:"static/slider.png",selectedIconPath:"static/slider-active.png",redDot:!1,badge:""},{pagePath:"pages/point/point",text:"点选",iconPath:"static/point.png",selectedIconPath:"static/point-active.png",redDot:!1,badge:""}],color:"#999",selectedColor:"#007aff",backgroundColor:"#f7f7fa",borderStyle:"black"}},e.__uniConfig.router={mode:"hash",base:"/captcha-h5/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-index-index",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-point-point"),t.e("pages-index-index")]).then(function(){return e(t("f75a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-point-point",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-point-point"),t.e("pages-point-point")]).then(function(){return e(t("5a54"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"滑动验证"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/point/point",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"点选验证"})},[e("pages-point-point",{slot:"page"})])}},meta:{id:2,name:"pages-point-point",isNVue:!1,pagePath:"pages/point/point",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"867b":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhtml,body{font-size:16px;touch-action:pan-y}\n\t\n\t/*每个页面公共css */",""]),e.exports=n},9510:function(e,n,t){"use strict";var o,i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}))},ecd6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"wxdb2c7ac2f09808bd"};n.default=o}});