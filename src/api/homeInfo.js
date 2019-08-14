var excellent =[
    {"id":1,"title":'推荐网址',"children":[
        {"id":1,head:'菜鸟教程',"subhead":'各种文档各种爽',"imgaddress":'http://i2.tiimg.com/696502/538c2f55fe139d07.png',"src":'https://www.runoob.com/'},
        {"id":2,head:'工具下载',"subhead":'程序员必备软件',"imgaddress":'http://i2.tiimg.com/696502/548816abe9292827.png',"src":'https://www.php.cn/xiazai/gongju'},
        {"id":6,head:'贴图库',"subhead":'免费图片外链、云存储。',"imgaddress":'http://i1.fuimg.com/696502/e9de4bc564ce38e8.png',"src":'http://www.tietuku.com/'},
        {"id":7,head:'Easy Mock',"subhead":'快速生成 模拟数据 的持久化服务',"imgaddress":'http://i1.fuimg.com/696502/9bdf1d2847226e43.png',"src":'https://www.easy-mock.com/'},
        ]
    },
    {"id":2,"title":'程序大牛',"children":[
        {"id":3,head:'廖雪峰',"subhead":'廖雪峰的官方网站',"imgaddress":'http://i1.fuimg.com/696502/b86cd4616d6d76d1.png',"src":'https://www.liaoxuefeng.com/'},
        {"id":4,head:'技术胖',"subhead":'大量高质的前端技术视频',"imgaddress":'http://i1.fuimg.com/696502/aa268786d4160d8d.png',"src":'http://jspang.com/'}
        ]
    },
    {"id":3,"title":'推荐文章',"children":[
        {"id":5,head:'介绍redux',"subhead":'非常容易理解Redux',"imgaddress":'http://i1.fuimg.com/696502/451fab9e1f9409a5.jpg',"src":'https://github.com/brickspert/blog/issues/22'},
        
    ]}
]
var bokeinfo = {
    "classify":[{id:1,name:'全部'},{id:2,name:'React'},{id:3,name:'value'}],
    "bokeinfo": [
        [
            {"id": 1,"updatatime": '2019年 08月06日',"head": '源码阅读(1)：Java中主要的List结构——概述',"htmlinfo":'<p>作为一个程序员，对英语一定要有一个学习，毕竟使用英语写的页面<br/><br/>css命名规范<br/>1.cssclass命名尽量使用英语，不要使用汉拼，并且有意义，<br/><br/>2.使用单词命名时不要缩写，除非非常有名的单词。<br/><br/>3.-规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或_&nbsp;&nbsp;例如（header-list）<br/><br/>4.不允许通过1、2、3等序号进行命名<br/><br/>5.避免class与id重名<br/><br/>css编写顺序<br/>1.位置，定位，层级（position，top，bottom，left，right，z-index，display，float）<br/><br/>2.大小（width，height，padding，margin）<br/><br/>3.文字控制（font，line-height）<br/><br/>4.背景边框（background，border）<br/><br/>5.其他（animation）<br/><br/>css文件命名<br/>主要的master.css<br/><br/>公用的base.css<br/><br/>布局，版面layout.css<br/><br/>文字font.css<br/><br/>前端，开发一定要经常看页面提醒的警告，出现就要解决</p>'},
            {"id": 2,"updatatime": '2019年 08月06日',"head": 'React 中 BrowserHistory 刷新报404',"htmlinfo":'<p>	常用的history有三种形式，但是你也可以使用ReactRouter实现自定义的history。</p><ul><li><ahref="http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html#browserHistory">browserHistory</a>	</li>	<li>		<ahref="http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html#hashHistory">hashHistory</a>	</li>	<li>		<ahref="http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html#creatememoryhistory">createMemoryHistory</a>	</li></ul><p>	在项目中最初开发阶段，使用的是hashHistory,遇到的问题就是链接地址会有#/</p><p>	so不得不使用BrowserHistory这时候在开发环境中没有任何问题，刷新也不会报404</p><p>	我的项目地址<ahref="http://react.cyclv.com/customerService">http://react.cyclv.com/customerService（个人项目）</a></p><p>	但是项目打包之后，在服务器上跑的时候，在二级页面刷新时候会报404</p><p>	推荐大家看一个介绍<ahref="http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html">http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html</a></p><p>	<strong>结论</strong>+解决方法：需要配置服务器信息，我的操作是把服务器端404转到自己的首页（index.html）</p><p>	操作：更改404报错跳转页面的地址（这个是后端配置）</p><p>	ErrorDocument401/error_pages/401.html<br/>ErrorDocument403/error_pages/403.html<br/>ErrorDocument404/index.html<br/>ErrorDocument500/error_pages/500.html</p><p>	这个时候页面刷新依然会保存在当前页</p><p>	分析原因：</p><p>	1.在浏览输入链接到页面展示，期间做了什么</p><p>	推荐大家百度，理解一下本人推荐地址<ahref="https://www.jianshu.com/p/23b388f8e5aa">：https://www.jianshu.com/p/23b388f8e5aa</a></p><p>	2.react项目目录</p><p>	react，是单文件项目（本人自己项目打包之后）</p><p>	<spanclass="cke_widget_wrappercke_widget_inlinecke_widget_imagecke_image_nocaptioncke_widget_selected"><imgalt=""height="253"src="https://img-blog.csdnimg.cn/20190722090047683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTQ4NzY5NA==,size_16,color_FFFFFF,t_70"width="952"class="hascke_widget_element"/><imgclass="cke_resetcke_widget_drag_handler"src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="width="15"title="点击并拖拽以移动"height="15"/><spanclass="cke_image_resizer"></span></span></p><p>	也就是说当页面在<ahref="http://react.cyclv.com/customerService">http://react.cyclv.com/customerService</a></p><p>	进行刷新时，是向服务请求customerService这个文件，因为就没有所有404</p>'}
        ],
        [
            {"id": 3,"updatatime": '2019年 08月06日',"head": '源码阅读(1)：Java中主要的List结构——概述',"htmlinfo":'<p>作为一个程序员，对英语一定要有一个学习，毕竟使用英语写的页面<br/><br/>css命名规范<br/>1.cssclass命名尽量使用英语，不要使用汉拼，并且有意义，<br/><br/>2.使用单词命名时不要缩写，除非非常有名的单词。<br/><br/>3.-规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或_&nbsp;&nbsp;例如（header-list）<br/><br/>4.不允许通过1、2、3等序号进行命名<br/><br/>5.避免class与id重名<br/><br/>css编写顺序<br/>1.位置，定位，层级（position，top，bottom，left，right，z-index，display，float）<br/><br/>2.大小（width，height，padding，margin）<br/><br/>3.文字控制（font，line-height）<br/><br/>4.背景边框（background，border）<br/><br/>5.其他（animation）<br/><br/>css文件命名<br/>主要的master.css<br/><br/>公用的base.css<br/><br/>布局，版面layout.css<br/><br/>文字font.css<br/><br/>前端，开发一定要经常看页面提醒的警告，出现就要解决</p>'},
            {"id": 4,"updatatime": '2019年 08月06日',"head": '源码阅读(1)：Java中主要的List结构——概述',"htmlinfo":'<p>作为一个程序员，对英语一定要有一个学习，毕竟使用英语写的页面<br/><br/>css命名规范<br/>1.cssclass命名尽量使用英语，不要使用汉拼，并且有意义，<br/><br/>2.使用单词命名时不要缩写，除非非常有名的单词。<br/><br/>3.-规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或_&nbsp;&nbsp;例如（header-list）<br/><br/>4.不允许通过1、2、3等序号进行命名<br/><br/>5.避免class与id重名<br/><br/>css编写顺序<br/>1.位置，定位，层级（position，top，bottom，left，right，z-index，display，float）<br/><br/>2.大小（width，height，padding，margin）<br/><br/>3.文字控制（font，line-height）<br/><br/>4.背景边框（background，border）<br/><br/>5.其他（animation）<br/><br/>css文件命名<br/>主要的master.css<br/><br/>公用的base.css<br/><br/>布局，版面layout.css<br/><br/>文字font.css<br/><br/>前端，开发一定要经常看页面提醒的警告，出现就要解决</p>'}
        ]
    ]
}