(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{360:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("// 画一个对应线图，比较直观")]),t._v(" "),a("p",[t._v("想要进行权限控制，必然要有用户和角色，每个角色对应不同的权限。")]),t._v(" "),a("p",[t._v("先来说说角色，在MongoDB中，有以下几种角色：")]),t._v(" "),a("p",[t._v("内建角色：")]),t._v(" "),a("p",[t._v("数据库用户角色：read、readWrite；")]),t._v(" "),a("p",[t._v("数据库管理角色：dbAdmin、dbOwner、userAdmin；")]),t._v(" "),a("p",[t._v("集群管理角色：   clusterAdmin、clusterManager、clusterMonitor、hostManager；")]),t._v(" "),a("p",[t._v("备份恢复角色：   backup、restore；")]),t._v(" "),a("p",[t._v("所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase")]),t._v(" "),a("p",[t._v("超级用户角色：   root；  这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）")]),t._v(" "),a("p",[t._v("内部角色：          __system；")]),t._v(" "),a("p",[t._v("再来看看这些角色对应的权限说明：")]),t._v(" "),a("p",[t._v("角色说明：")]),t._v(" "),a("p",[t._v("Read：                             允许用户读取指定数据库")]),t._v(" "),a("p",[t._v("readWrite：                     允许用户读写指定数据库")]),t._v(" "),a("p",[t._v("dbAdmin：                      允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile")]),t._v(" "),a("p",[t._v("userAdmin：                    允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户")]),t._v(" "),a("p",[t._v("dbOwner：                       允许在当前DB中执行任意操作")]),t._v(" "),a("p",[t._v("readAnyDatabase：          赋予用户所有数据库的读权限，只在admin数据库中可用")]),t._v(" "),a("p",[t._v("readWriteAnyDatabase： 赋予用户所有数据库的读写权限，只在admin数据库中可用")]),t._v(" "),a("p",[t._v("userAdminAnyDatabase：赋予用户所有数据库管理User的权限，只在admin数据库中可用")]),t._v(" "),a("p",[t._v("dbAdminAnyDatabase：   赋予管理所有数据库的权限，只在admin数据库中可用")]),t._v(" "),a("p",[t._v("root：                                 超级账号，超级权限，只在admin数据库中可用。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("集群管理角色：")]),t._v(" "),a("p",[t._v("clusterAdmin：                  赋予管理集群的最高权限，只在admin数据库中可用")]),t._v(" "),a("p",[t._v("clusterManager：               赋予管理和监控集群的权限")]),t._v(" "),a("p",[t._v("clusterMonitor：                赋予监控集群的权限，对监控工具具有readonly的权限")]),t._v(" "),a("p",[t._v("hostManager：                   赋予管理Server")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("下面我们来进入实战，我们要完成的任务如下：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("此时查看所有数据库会报错：")]),t._v(" "),t._m(11),a("p",[t._v("注意：登录、创建用户授权角色都是基于db的操作，所以需要先切换至admin数据库，登录，然后再执行其他操作。登陆后控制台显示1则表示登录成功：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),a("p",[t._v("refs:\n"),a("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/built-in-roles/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("built-in-roles"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mongodb的权限管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb的权限管理","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB的权限管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这段时间公司迁移云服务厂商，而我整理项目时发现部分小项目的MongoDB数据并没有放在云上，而是部署在某台云主机上。"),s("br"),this._v("\n但我又想在这个自己搭建的MongoDB数据库中使用类似阿里云MongoDB中提供的权限管理及控制，所以搜寻了一些文章，解决了问题。"),s("br"),this._v("\n这里我将从头开始来复盘一下。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mongodb角色与权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb角色与权限","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB角色与权限")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关于全库管理员和单库管理员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于全库管理员和单库管理员","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于全库管理员和单库管理员")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("MongoDB会自动在System下创建"),a("code",[t._v("admin")]),t._v("数据库，"),a("code",[t._v("admin")]),t._v("库是全库管理员的数据存放位置。创建角色、授权的行为必须基于某个db，所以创建全库管理员时，也就需要基于"),a("code",[t._v("admin")]),t._v("库去操作。"),a("br"),t._v("\n而当针对某个库创建用户设置角色时，所有权限都只针对这个库内部而言。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打个比方，"),s("code",[this._v("admin")]),this._v("库相当于公司领导层的办公区，而其他业务库的用户、角色，相当于项目部，业务员库中的管理员相当于这个项目部的项目经理。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战","aria-hidden":"true"}},[this._v("#")]),this._v(" 实战")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("创建系统超级管理员角色，它是控制数据库的顶级管理员。超级用户角色对应阿里云控制台中的用户，有全部权限。")]),this._v(" "),s("li",[this._v("创建所有库的管理员角色，它可以控制任何数据。比如你的开发经理控制的账号，它也是拥有全部的权限。")]),this._v(" "),s("li",[this._v("创建某项目对应数据库的管理员角色，它只能控制这个项目对应数据库。")]),this._v(" "),s("li",[this._v("创建某项目对应数据库的使用者角色，一般用户开发者在软件中使用。一般对应dbAdmin角色。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，我们要了解，当我们没有为数据库开启"),s("code",[this._v("security -> authorization")]),this._v("时，任何连接到数据的用户都算是超级管理员角色。所以我们需要先关闭权限验证，创建一个系统超级管理员角色。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("db.createUser({ user: 'root', pwd: 'root_1201', roles: [{ rule: 'root', db: 'admin' }]})")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而后我们再关闭数据库，设置"),s("code",[this._v("security -> authorization")]),this._v("为"),s("code",[this._v("enable")]),this._v("来开启权限验证，重新启动数据库。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongo 127.0.0.1:27017\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" use admin\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" show dbs\n2019-09-18T23:35:25.166+0800 E QUERY    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("thread1"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Error: listDatabases failed:"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token string"}},[t._v('"ok"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 0,\n\t"),a("span",{attrs:{class:"token string"}},[t._v('"errmsg"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"not authorized on admin to execute command { listDatabases: 1.0 }"')]),t._v(",\n\t"),a("span",{attrs:{class:"token string"}},[t._v('"code"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 13,\n\t"),a("span",{attrs:{class:"token string"}},[t._v('"codeName"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Unauthorized"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v(":")]),t._v("\n_getErrorWithCode@src/mongo/shell/utils.js:25:13\nMongo.prototype.getDBs@src/mongo/shell/mongo.js:62:1\nshellHelper.show@src/mongo/shell/utils.js:769:19\nshellHelper@src/mongo/shell/utils.js:659:15\n@"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shellhelp2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":1:1\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" use admin\nswitched to db admin\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.auth"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'root'")]),t._v(", "),a("span",{attrs:{class:"token string"}},[t._v("'root123'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n1\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你输入了正确的用户名密码还显示权限验证失败，最好确认下登录前是否切换到了"),s("code",[this._v("admin")]),this._v("库，执行登录、创建用户、设置权限前必须进度到某一个库才能执行。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("首先，我们先用命令行连接数据库："),a("code",[t._v("$ mongo 127.0.0.1:27017")]),t._v("\n切换至"),a("code",[t._v("admin")]),t._v("数据库："),a("code",[t._v("$ use admin")]),t._v("\n创建超级管理员用户，用户名为"),a("code",[t._v("root")]),t._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("db.createUser"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user:"),a("span",{attrs:{class:"token string"}},[t._v("'root'")]),t._v(", pwd:"),a("span",{attrs:{class:"token string"}},[t._v("'root123'")]),t._v(", roles:"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  role:"),a("span",{attrs:{class:"token string"}},[t._v("'root'")]),t._v(",\n  db:"),a("span",{attrs:{class:"token string"}},[t._v("'admin'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);