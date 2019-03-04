(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{329:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("阿里云oss的各种sdk，都是对它的API进行的封装。所以如果我们直接调用API时出错，却又不知道哪里出问题时，可以直接阅读sdk的源码，找到问题所在。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("首先贴一下"),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/31951.html?spm=5176.doc31950.6.842.KmlCNR",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云oss官网"),a("OutboundLink")],1),t._v("贴出的签名计算方式：")]),t._v(" "),t._m(3),a("p",[t._v("通过计算方法可以看出Authorization是由四部分组成：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("这里的前几项相信大家都可以看懂，只是后面的CanonicalizedOSSHeaders 、CanonicalizedResource 有些迷惑，不知道具体的规则，真正使用时会发现按照上述计算方式得出的签名，使用时会被oss的服务器拒绝，返回签名错误。当初这里也困扰了我很长时间，下面就写一下这里到底要如何计算。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("这里拿object的put API举例说明：")]),t._v(" "),a("ul",[a("li",[t._v("put文件的"),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/31978.html?spm=5176.doc31947.6.869.1e7i7i",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方api"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("请求工具"),a("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("上传文件 aa.txt")])]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("p",[t._v("上面的CanonicalizedOSSHeaders实际上是一个数组，第一个元素为x-oss-date，值与Date一样，后面的x-oss-user-agent是从oss-sdk源码上拔下来的，可以直观看出包含了sdk、浏览器版本、系统版本等信息。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),a("p",[t._v("然后使用array的join('\\n')方法合并成一个字符串")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("另外这里有一个demo，是在阿里云论坛上找到的，为了方便学习我在"),a("a",{attrs:{href:"http://pan.baidu.com/s/1c13M5wc",target:"_blank",rel:"noopener noreferrer"}},[t._v("网盘"),a("OutboundLink")],1),t._v("中分享，密码:9d54。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("首先要了解，控制文件的下载名，其实就是控制headers中的Content-Disposition。通过修改它的值来实现修改文件下载名。")]),t._v(" "),a("p",[t._v("修改文件下载名可分两种方式：")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("这里使用js-oss-sdk来说明。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("了解本质，oss的文件元数据信息都是通过headers传输，所以这里还是通过copy方法，将新的元数据放在options参数中，与上面的修改文件后修改文件下载名用法相同，这里就不多赘述。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"阿里云oss-文件上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云oss-文件上传","aria-hidden":"true"}},[this._v("#")]),this._v(" 阿里云oss - 文件上传")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("写在前面")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-authorization的计算方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-authorization的计算方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 1 Authorization的计算方式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Authorization "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"OSS "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" AccessKeyId "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Signature\nSignature "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("base64")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hmac"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token function"}},[t._v("sha1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AccessKeySecret"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token constant"}},[t._v("VERB")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"\\n"')]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Content"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("MD5")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"\\n"')]),t._v(" \n            "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Content"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Type "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"\\n"')]),t._v(" \n            "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Date "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"\\n"')]),t._v(" \n            "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" CanonicalizedOSSHeaders\n            "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" CanonicalizedResource"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("字符串"),a("code",[t._v("OSS")]),t._v("(注意OSS后面有一个空格)")]),t._v(" "),a("li",[t._v("AccessKeyId，也就是oss Bucket的用户名。可以在OSS控制台 - 对象存储OSS - 概览，在页面的右侧即可看到AccessKey选项，点进去可以查看。")]),t._v(" "),a("li",[t._v("字符串"),a("code",[t._v(":")])]),t._v(" "),a("li",[t._v("Signature签名，这里再贴一下阿里云oss官网给出的计算说明：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("AccessKeySecret 表示签名所需的密钥")]),t._v(" "),a("li",[t._v("VERB表示HTTP 请求的Method，主要有PUT，GET，POST，HEAD，DELETE等")]),t._v(" "),a("li",[t._v("\\n 表示换行符")]),t._v(" "),a("li",[t._v("Content-MD5 表示请求内容数据的MD5值，对消息内容（不包括头部）计算MD5值获得128比特位数字，对该数字进行base64编码而得到。该请求头可用于消息合法性的检查（消息内容是否与发送时一致），如”eB5eJF1ptWaXm4bijSPyxw==”，也可以为空。详情参看RFC2616 Content-MD5")]),t._v(" "),a("li",[t._v("Content-Type 表示请求内容的类型，如”application/octet-stream”，也可以为空")]),t._v(" "),a("li",[t._v("Date 表示此次操作的时间，且必须为GMT格式，如”Sun, 22 Nov 2015 08:16:38 GMT”")]),t._v(" "),a("li",[t._v("CanonicalizedOSSHeaders 表示以 x-oss- 为前缀的http header的字典序排列")]),t._v(" "),a("li",[t._v("CanonicalizedResource 表示用户想要访问的OSS资源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("例子")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{attrs:{class:"token request-line"}},[a("span",{attrs:{class:"token property"}},[t._v("PUT")]),t._v(" /ObjectName HTTP/1.1")]),t._v("\nContent-Length：ContentLength\n"),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" ContentType\n"),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" BucketName.oss-cn-hangzhou.aliyuncs.com\n"),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Date:")]),t._v(" GMT Date\n"),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" SignatureValue\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("步骤")]),this._v(" "),s("strong",[this._v("1.生成Signature之前的参数")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{attrs:{class:"token header-name keyword"}},[t._v("VERB:")]),t._v(' "post"\n'),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Content-MD5:")]),t._v(' ""  //如果没有MD5可以为空字符串\n'),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(' "text/plain"\n'),a("span",{attrs:{class:"token header-name keyword"}},[t._v("Date:")]),t._v(' "Tue, 26 Sep 2017 07:10:15 GMT"  //GMT格式时间\n'),a("span",{attrs:{class:"token header-name keyword"}},[t._v("CanonicalizedOSSHeaders:")]),t._v(' ["x-oss-date:Tue, 26 Sep 2017 07:10:15 GMT","x-oss-user-agent:aliyun-sdk-js/4.10.0 Chrome 60.0.3112.113 on Windows 10 64-bit"]\n'),a("span",{attrs:{class:"token header-name keyword"}},[t._v("CanonicalizedResource:")]),t._v(' "/bucket/aa.txt"  //bucket为你的bucket名称\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2.将前面的参数拼接成一个字符串")]),this._v("\n从Signature的规则中，每个参数后面都要加一个换行符，从而组成一个字符串。我们先将以上参数放在一个数组中。(CanonicalizedOSSHeaders有两项则在数组中有两个元素，这里需要注意)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PUT"')]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"text/plain"')]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Tue, 26 Sep 2017 07:10:15 GMT"')]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"x-oss-date:Tue, 26 Sep 2017 07:10:15 GMT"')]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"x-oss-user-agent:aliyun-sdk-js/4.10.0 Chrome 60.0.3112.113 on Windows 10 64-bit"')]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/chengyanzhao/aa.txt"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"PUT\n\ntext/plain\nTue, 26 Sep 2017 07:10:15 GMT\nx-oss-date:Tue, 26 Sep 2017 07:10:15 GMT\nx-oss-user-agent:aliyun-sdk-js/4.10.0 Chrome 60.0.3112.113 on Windows 10 64-bit\n/chengyanzhao/aa.txt"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('这样Authorization = "OSS " + AccessKeyId + ":" + Signature中的计算参数我们就有了，套入base64和hmac-sha1计算方式即可得出Authorization。\n'),s("strong",[this._v("3.发送请求")]),this._v("\nheaders\n"),s("img",{attrs:{src:"http://img.blog.csdn.net/20170926153113090?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXE0NTEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"这里写图片描述"}}),this._v("\nbody\n"),s("img",{attrs:{src:"http://img.blog.csdn.net/20170926153205574?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXE0NTEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"这里写图片描述"}}),this._v("\nresponse\n"),s("img",{attrs:{src:"http://img.blog.csdn.net/20170926153604051?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXE0NTEzNTQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"这里写图片描述"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_2-修改文件的元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改文件的元数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 2 修改文件的元数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-1-修改文件的下载名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-修改文件的下载名","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.1 修改文件的下载名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("上传时设置")]),this._v(" "),s("li",[this._v("上传后设置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1.上传时设置")]),this._v("\n阿里oss提供了多种上传方式，但每种上传方法都接受一个options参数，这个参数即可设置文件的元数据。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("headers"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'Content-Disposition'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'attachment;filename='")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("encodeURI")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2.上传后设置")]),this._v("\n文件上传后修改文件的下载名，其实就是使用阿里提供的接口修改文件的元数据中的Content-Disposition。\n在js-oss-sdk中，使用copy方法设置文件的元数据")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// key为oss中文件的key，也就是在oss控制台中现实的文件名。")]),t._v("\nclient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("copy")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  headers"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'Content-Disposition'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'attachment;filename='")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("encodeURI")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-2-修改其他元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改其他元数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2 修改其他元数据")])}],!1,null,null,null);s.default=e.exports}}]);