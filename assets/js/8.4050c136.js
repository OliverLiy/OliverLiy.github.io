(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{336:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("本文收录于"),a("a",{attrs:{href:"https://github.com/OliverLiy/JavaStarter",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaStarter"),a("OutboundLink")],1),s._v(" ，如果该文对你有帮助的话，希望能动动手给个Star。")])]),s._v(" "),a("h1",{attrs:{id:"一-引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-引言"}},[s._v("#")]),s._v(" （一）引言")]),s._v(" "),a("p",[s._v("String str和new String()有什么区别？这个问题之前在面试中有被问到过一次，当时面试结束后也写了自己关于这个题目的理解，不过最近在看Effect Java的时候发现书中也提到了关于String的用法，刚好就放到一起聊一下。")]),s._v(" "),a("h1",{attrs:{id:"二-关于string字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-关于string字符串"}},[s._v("#")]),s._v(" （二）关于String字符串")]),s._v(" "),a("p",[s._v("String应该是Java中最常用的一个对象，他不是八种基本数据类型的其中之一，但是我随便翻了一下项目代码，用String定义的变量超过百分之八十。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Comparable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CharSequence")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** The value is used for character storage. */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** Cache the hash code for the string */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Default to 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("关于String的几个基本知识点在String类的源码定义中就能看到：")]),s._v(" "),a("p",[s._v("1、"),a("strong",[s._v("在JDK8中，String实例的值是通过char数据存储的")]),s._v("。（JDK9时，String实例的存储由char变成了byte数组，原因是使用byte数组可以减少一半的内存）")]),s._v(" "),a("p",[s._v("2、"),a("strong",[s._v("String类被final修饰")]),s._v("，因此String不能被继承，value变量被final修饰，因此String实例不能被修改")]),s._v(" "),a("p",[s._v("3、"),a("strong",[s._v("String类实现了Serializable, Comparable, CharSequence接口")]),s._v("。")]),s._v(" "),a("h1",{attrs:{id:"三-关于字符串常量池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-关于字符串常量池"}},[s._v("#")]),s._v(" （三）关于字符串常量池")]),s._v(" "),a("p",[s._v("字符串常量池是虚拟机中的内容，但是接下来的几个问题需要用到，就简单了解下。"),a("strong",[s._v("为了让String字符串可以复用")]),s._v("，Java虚拟机中设置了一种叫做字符串常量池的东西。")]),s._v(" "),a("p",[s._v("Java为了避免产生大量的String对象，设计了一个字符串常量池。工作原理是这样的，"),a("strong",[s._v("创建一个字符串时，JVM首先为检查字符串常量池中是否有值相等的字符串，如果有，则不再创建，直接返回该字符串的引用地址，若没有，则创建，然后放到字符串常量池中，并返回新创建的字符串的引用地址")]),s._v("。因此看下面这段代码：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("返回的结果就是true，因为指向了同一个对象。")]),s._v(" "),a("p",[s._v("关于字符串常量池的位置，在不同版本的JDK中有所不同：")]),s._v(" "),a("p",[a("strong",[s._v("JDK1.7之前字符串常量池属于运行时常量池的一部分，存放在方法区")])]),s._v(" "),a("p",[a("strong",[s._v("JDK1.7之后字符串常量池被从方法区拿到了堆中")])]),s._v(" "),a("h1",{attrs:{id:"四-string-str和new-string-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-string-str和new-string-有什么区别"}},[s._v("#")]),s._v(" （四）String str和new String()有什么区别")]),s._v(" "),a("p",[s._v("回到开始的问题，String str和new String()有什么区别？区别在于，String str创建的字符串保存在字符串常量池中，并且可复用。new String()创建的字符串按照最标准的对象创建方式，生成在堆中，并且一个new String会在堆中创建一个对象。下面这张图应该可以把这个流程讲清楚。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/OliverLiy/DrawingBed/myblog/2-1.jpeg",alt:""}})]),s._v(" "),a("p",[s._v("s1==s2返回true，s1==s3返回false。")]),s._v(" "),a("h1",{attrs:{id:"五-new-string-方法创建了几个对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-new-string-方法创建了几个对象"}},[s._v("#")]),s._v(" （五）new String()方法创建了几个对象")]),s._v(" "),a("p",[s._v("又是个好问题，这道题的答案是一个或者两个。")]),s._v(" "),a("p",[s._v("写一段代码：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ab"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("编译后通过javap -v test.class查看字节码：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/OliverLiy/DrawingBed/myblog/2-2.png",alt:""}})]),s._v(" "),a("p",[s._v("1、在常量池中创建了ab对象，位置在#3")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/OliverLiy/DrawingBed/myblog/2-3.png",alt:""}})]),s._v(" "),a("p",[s._v("2、在堆中创建了ab对象")]),s._v(" "),a("p",[s._v("这样的情况下创建了两个对象，一个在常量池中，一个在堆中。")]),s._v(" "),a("p",[s._v("再写一段代码：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ab"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ab"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("同样的方式查看字节码：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/OliverLiy/DrawingBed/myblog/2-4.png",alt:""}})]),s._v(" "),a("p",[s._v('首先s1="ab"在常量池中创建了ab对象，存放在常量池的#2位置里，这个时候new String就只在堆中创建了一个String对象，常量池中因为已经有了，就不会再创建了。')]),s._v(" "),a("p",[s._v("这样的情况下，只创建了一个对象。")]),s._v(" "),a("h1",{attrs:{id:"六-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-总结"}},[s._v("#")]),s._v(" （六）总结")]),s._v(" "),a("p",[s._v("虽说怎么写代码都能实现一定的功能，但是有时候换种写法可以省下很多资源。比如将：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("写成：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("虽然只是小小的改动，但是在频繁调用的方法中，就有可能避免创建了百万个String实例。")]),s._v(" "),a("p",[s._v("对于有一定开发经验的程序员，建议可以读一下《Effect-Java》，里面有许多写代码的更优方式。")]),s._v(" "),a("p",[s._v("我是鱼仔，我们下期再见！")])])}),[],!1,null,null,null);a.default=r.exports}}]);