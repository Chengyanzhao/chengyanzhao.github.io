(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{342:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("网上文章中一般默认如下表示：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("首先总结下Promise的几个特点：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("如果在promise中抛出异常，异常是不会像外层代码传递的，只会向promise后的catch传递。看下面代码：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/promise#Promise-%E7%9A%84%E5%90%AB%E4%B9%89",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门 - Promise 对象 - 阮一峰"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - Promise"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[this._v("#")]),this._v(" Promise")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Promise是异步编程的解决方案，旨在解决异步编程回调地狱的问题。"),e("br"),this._v("\nPromise最早由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了"),e("code",[this._v("Promise")]),this._v("对象。在ES5中也有"),e("code",[this._v("polyfill")]),this._v("对其支持，所以不使用ES6的伙计也不用担心因浏览器兼容性而无法使用Promise。"),e("br"),this._v("\n网上关于Promise的文章已经很多了，ES6的文档中也有详尽的说明，所以这边文章不写这些已经被大家吃的很透的内容。咱们来分析分析Promise使用中的一些问题。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"关于promise-promise-promises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于promise-promise-promises","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于Promise,promise,promises")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Promise: 代表Promise接口")]),this._v(" "),e("li",[this._v("promise: 代表promise实例对象")]),this._v(" "),e("li",[this._v("promises: 代表Promises规范")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用中的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用中的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用中的问题")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Promise可将异步过程包装，多个promise可以像管道一样连接，写法更优雅。")]),t._v(" "),s("li",[t._v("在ES6中，Promise可配合"),s("code",[t._v("await/async")]),t._v("将异步过程写成同步代码。（注意，此时主线程并没有被占用。）")]),t._v(" "),s("li",[t._v("Promise中可以灵活运用"),s("code",[t._v("catch")]),t._v("，"),s("code",[t._v("catch")]),t._v("后同样返回"),s("code",[t._v("promise")]),t._v("对象，可继续执行"),s("code",[t._v("then")]),t._v("。")]),t._v(" "),s("li",[t._v("Promise一旦创建就会立即执行，无法取消。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"try-catch与promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try-catch与promise","aria-hidden":"true"}},[this._v("#")]),this._v(" try/catch与Promise")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在使用Promise与try/catch时请慎重。"),e("br"),this._v("\n在阮老师的文章里有这么一段话：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("try")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Promise"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("reject")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'错误'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'error'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如果你在浏览器中运行这段代码，浏览器会报错"),s("code",[t._v("Uncaught (in promise) 错误")]),t._v("。"),s("br"),t._v("\n疑问来了，为什么我已经将"),s("code",[t._v("reject")]),t._v("放在"),s("code",[t._v("try")]),t._v("块中，而捕捉不到？"),s("br"),t._v("\n实际上"),s("strong",[t._v("拒绝是发生在未来")]),t._v("，而不是执行"),s("code",[t._v("Promise.reject('错误')")]),t._v("时。所以当这行代码执行完毕，"),s("code",[t._v("try")]),t._v("块内的代码已正常执行完成，所以不会进入"),s("code",[t._v("catch")]),t._v("。"),s("br"),t._v("\n所以在使用Promise时请慎重，不要试图使用"),s("code",[t._v("try/catch")]),t._v("去捕捉"),s("code",[t._v("reject")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference")])}],!1,null,null,null);e.default=a.exports}}]);