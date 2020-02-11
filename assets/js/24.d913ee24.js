(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{313:function(t,e,r){t.exports=r.p+"assets/img/http-cache-p1.de60d825.png"},314:function(t,e,r){t.exports=r.p+"assets/img/http-cache-p2.6130724f.png"},381:function(t,e,r){"use strict";r.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"浅析浏览器缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浅析浏览器缓存机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 浅析浏览器缓存机制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 强缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("强缓存：当浏览器获取强缓存资源时，不会向服务器发送请求，直接从缓存中读取资源。在Chrome控制台中可以看到响应200状态码，size显示from disk cache或from memory cache。"),e("br"),this._v("\n可以设置HTTP Headers中的Expires和Cache-Control头来设置强缓存。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires","aria-hidden":"true"}},[this._v("#")]),this._v(" Expires")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(313),alt:"HTTP-Expired"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上图的"),e("code",[this._v("expires")]),this._v("头表示，在"),e("code",[this._v("2020-12-20 12:37:59")]),this._v("之前缓存都是有效的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但这样的时间戳有bug，因为客户端与服务端的时间存在不一致的可能，那么缓存也就存在失效，或者应该抛弃缓存重新请求资源但缺没有重新请求的情况。"),e("br"),this._v("\n所以在http/1.1中，出现了"),e("code",[this._v("Cache-Control")]),this._v("头，来弥补这个bug。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Cache-Control")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(314),alt:"HTTP-Expired"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这张图跟上面的一样，但是我们这次关注Cache-Control，和它的"),e("code",[this._v("max-age")]),this._v("属性。"),e("br"),this._v("\nmax-age指令设置缓存存储的最大周期，超过这个时间缓存被认为过期。上图中Cache-Control的max-age，表示在3600秒后缓存失效。这种方式即避免了Expires客户端与服务端时间不一致导致的缓存失效问题。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("可缓存性")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("作用")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("public")])]),t._v(" "),r("td",[t._v("表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("private")])]),t._v(" "),r("td",[t._v("表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("no-cache")])]),t._v(" "),r("td",[t._v("在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("no-store")])]),t._v(" "),r("td",[t._v("所有内容都不会被缓存，无论是强制缓存还是协商缓存。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("到期")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("指令")]),t._v(" "),r("th",[t._v("作用")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("max-age=<seconds>")])]),t._v(" "),r("td",[t._v("设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("s-maxage=<seconds>")])]),t._v(" "),r("td",[t._v("覆盖max-age或者Expires头，但是仅适用于共享缓存(比如各个代理)，私有缓存会忽略它。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("max-stale[=<seconds>]")])]),t._v(" "),r("td",[t._v("表明客户端愿意接收一个已经过期的资源。可以设置一个可选的秒数，表示响应不能已经过时超过该给定的时间。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("min-fresh=<seconds>")])]),t._v(" "),r("td",[t._v("表示客户端希望获取一个能在指定的秒数内保持其最新状态的响应。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"expires与cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires与cache-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Expires与Cache-Control")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当Expires与Cache-Control同时使用时，"),e("strong",[this._v("Cache-Control的优先级高于Expires")]),this._v("。我们常常会见到Expires与Cache-Control一起使用，这是因为它们的http版本不同，同时使用为了照顾兼容性，对于不支持Cache-Control的客户端也可是使用缓存。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 协商缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"last-modified和if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified和if-modified-since","aria-hidden":"true"}},[this._v("#")]),this._v(" Last-Modified和If-Modified-Since")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{attrs:{class:"token header-name keyword"}},[this._v("last-modified:")]),this._v(" Sat, 21 Dec 2019 00:50:00 GMT\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("此时客户端拿到响应结果，分析Response Header中的"),r("code",[t._v("Last-Modified")]),t._v("，了解到这个资源最后修改时间为"),r("code",[t._v("2019-12-21 08:50:00")]),t._v("。"),r("br"),t._v("\n当浏览器再次请求这个资源时，会将这个时间设置在"),r("code",[t._v("If-Modified-Since")]),t._v("请求头中，一并发送给服务端。"),r("br"),t._v("\n服务端接收到这次请求，根据"),r("code",[t._v("If-Modified-Since")]),t._v("中的时间与资源最后修改时间对比，如果不一致说明资源发生变化，需要更新，返回200和响应体。如果最后修改时间一直，则返回304，告诉浏览器针对这个资源服务端没有更新，使用缓存即可。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Last-Modified也有一些弊端：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Last-Modified")]),this._v("通过资源修改时间来判断资源是否有更新，最多精确到秒。如果一个资源在1秒内更新了两次，它的修改时间相同，如果客户端缓存的是第一次更新的结果，那么这个协商缓存会被认为是有效的，服务端不会返回第二次更新的资源。"),e("br"),this._v("\n因此根据资源修改时间来判断资源是否有更新的机智，也是有疏漏的。HTTP/1.1出现了"),e("code",[this._v("ETag")]),this._v("和"),e("code",[this._v("If-None-Match")]),this._v("来解决这个问题。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"etag与if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag与if-none-match","aria-hidden":"true"}},[this._v("#")]),this._v(" ETag与If-None-Match")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("ETag与If-None-Match的机制，和Last-Modified的机制大体相同，区别是以资源的唯一标识作为判断资源是否更新，而不使用时间。时间有精度有误差，而唯一标示具有唯一性，可避免精度和误差的问题。"),e("br"),this._v("\n在使用中，ETag对应Last-Modified，If-None-Match对应If-Modified-Since。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"两种协商缓存方式对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两种协商缓存方式对比","aria-hidden":"true"}},[this._v("#")]),this._v(" 两种协商缓存方式对比")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("在同时使用ETag、Last-Modified时，ETag拥有更高的优先级。")]),this._v(" "),e("li",[this._v("Last-Modified无法精确辨别资源更新。另外对于负载均衡服务器，各服务器的Last-Modified也有所不同，导致很有可能不会命中缓存。")]),this._v(" "),e("li",[this._v("ETag的写上缓存机制能更精确的判断资源变化，但对于这个唯一标识的计算，服务端需要付出一定的性能。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存机制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("强缓存比协商缓存拥有更高的优先级。当请求资源命中强缓存时，直接使用强缓存。若强缓存不生效，进行协商缓存。协商缓存是客户端与服务端协商，服务端决定客户端是否使用缓存。如果协商缓存失效，那么就是一个普通的资源请求，服务端返回响应实体。"),e("br"),this._v("\n无论是强缓存还是写上缓存，只要命中缓存，http会返回code:304，响应体为空，客户端从缓存中拿到资源。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用","aria-hidden":"true"}},[this._v("#")]),this._v(" 引用")])}],i=r(1),a=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("浏览器缓存，实际上是浏览器对于HTTP协议中的缓存部分进行的实现，所以我们先从协议入手，了解有哪些缓存策略。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires",target:"_blank",rel:"noopener noreferrer"}},[t._v("Expires"),r("OutboundLink")],1),t._v("头用来指定资源的到期时间，它的值是一个GMT格式的时间戳。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cache-Control"),r("OutboundLink")],1),t._v("定义在http/1中，用来实现缓存机制。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("Cache-Control包含多种指令，并且可以组合使用它们：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("强缓存基于缓存失效时间来判断是否使用缓存，如果在缓存有效期内，服务端对资源更新，客户端无法第一时间获取更新后的资源。为了解决这种问题，需要使用协商缓存策略。")]),t._v(" "),r("p",[t._v("协商缓存：在强制缓存失效后，浏览器携带缓存标识向服务器发起请求，有服务端根据标识来决定客户端是否继续使用缓存。")]),t._v(" "),r("p",[t._v("若协商缓存生效，响应返回304状态码及Not Modified。若协商缓存未生效，则像正常的请求一样，返回状态码和响应体。")]),t._v(" "),r("p",[t._v("协商缓存通过设置两种HTTP Header实现：Last-Modified和ETag。")]),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("服务端响应到请求时，在Response Header中设置Last-Modified值（GMT时间），来告诉客户端这个资源的最后修改时间。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/54cc04190252",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解浏览器的缓存机制"),r("OutboundLink")],1),t._v("。")])])])},s,!1,null,null,null);e.default=a.exports}}]);