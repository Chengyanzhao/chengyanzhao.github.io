(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{353:function(e,t,s){"use strict";s.r(t);var r=s(1),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("查询源码，找到删除此字段的操作在"),s("a",{attrs:{href:"https://github.com/axios/axios/blob/master/lib/adapters/xhr.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("axios/lib/adapters/xhr.js - r113"),s("OutboundLink")],1),e._v("，而且并没有配置或选项可以影响到此删除操作，除非覆盖"),s("code",[e._v("adapter")]),e._v("。"),s("br"),e._v("\n另外在"),s("a",{attrs:{href:"https://github.com/axios/axios/issues/767",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),s("OutboundLink")],1),e._v("中也印证这点。")]),e._v(" "),e._m(4),e._v(" "),e._m(5)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"axios问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios问题汇总","aria-hidden":"true"}},[this._v("#")]),this._v(" Axios问题汇总")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"设置content-type无效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置content-type无效","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置Content-Type无效")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("在使用axios发送FormData类型数据时，设置了headers中的Content-Type，但请求发送时，还是被axios强制更改为默认值。\n当使用"),s("code",[e._v("axios")]),e._v("post"),s("code",[e._v("FormData")]),e._v("时，"),s("code",[e._v("axios")]),e._v("内部会自动删除参数"),s("code",[e._v("headers")]),e._v("设置的"),s("code",[e._v("Content-Type")]),e._v("，而后由浏览器根据数据类型自动设置此参数。"),s("br"),e._v("\n我遇到的情况是需要调用阿里云OSS API，因为涉及到秘钥计算。必须指定"),s("code",[e._v("Content-Type")]),e._v("。尝试过以下操作：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("在请求前配置options参数修改"),s("code",[e._v("headers")]),e._v("。失败，被"),s("code",[e._v("axios")]),e._v("删除并重新复制。")]),e._v(" "),s("li",[e._v("在request拦截中修改"),s("code",[e._v("headers")]),e._v("。失败，依旧被"),s("code",[e._v("axios")]),e._v("删除并重新赋值。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("所以只有拷贝源码"),t("code",[this._v("axios/lib/adapters/xhr.js")]),this._v("，而后修改删除"),t("code",[this._v("Content-Type")]),this._v("处的代码，并在axios调用时设置"),t("code",[this._v("adapter")]),this._v("选项，得以解决。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("另外注意不要全局配置"),t("code",[this._v("adapter")]),this._v("，可能会对其他正常的请求造成影响。")])}],!1,null,null,null);t.default=a.exports}}]);