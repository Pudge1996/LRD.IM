# LRD.IM 背后的故事

2017 年底我初次捣鼓了我的[个人网站](https://elastic-bassi-02c067.netlify.app/#0)，大四下学期的时候技术尚未成熟，所以在网上找了一个当时觉得还挺好看的 HTML 模板来做网页，我也没仔细了解，只是简单的替换文字、图片素材，部署在 Netify 就一直用了。毫无疑问当时的网站无论是设计、性能、内容都比较的辣眼睛，于是我在密谋一次全面更新...

毕业后在工作中也一点点积累前端知识，而且也会偶尔询问下公司的前端老哥一点技术问题，解决方案。直到在20-21年间读了[张鑫旭](https://www.zhangxinxu.com/)大神的两本书，也在油管里看了不少 [DesignCourse](https://www.youtube.com/c/DesignCourse/featured) 和 [Kevin Powell](https://www.youtube.com/kepowob/featured) 频道的视频，同时也有 [Dribbble Dark](https://lrd.im/html/dribbbledark.html) 以及 [PureTab](https://github.com/Pudge1996/PureTab) 这两个项目的实践，觉得技术开始有点像样了，便开始动手重构整个网站。

抛弃 Boostrap 框架之后用上了 Sass，完全使用 JS 代替 jQ，以及大量使用 Flex 和 Grid 布局，起码自己看起来舒服多了。现在不管是访问速度、网站易用性、可扩展性等各方面均比最初的版本更出色。

现在 [LRD.IM](https://lrd.im) 用来存放我的博客、设计作品等，不定期也会对网站的基础能力、样式等做一番迭代。

# 时间线
- 2022 年 11 月：新增博客的 RSS 订阅源，并完善了博客详情页的功能。作品详情页支持快速定位至关键位置；
- 2022 年 10 月：首页重构，优化信息获取体验。在 [archive.org](https://web.archive.org/web/20221007035203/https://lrd.im/project.html) 中查看旧版；
- 2022 年 2 月：作品页面支持宽屏看图；
- 2021 年 12 月：博客详情页支持了目录功能；
- 2021 年 06 月：全面重构，脱离 Bootstrap 和 jQuery，同步所有 Medium 文章；
- 2019 年 11 月：博客列表页支持跳转到 Medium 文章了；
- 2019 年 02 月：重写部分样式以提升视觉体验；
- 2019 年 10 月：适配深色模式；
- 2018 年 1 月：HTML 模板 [BOX Theme](https://www.behance.net/gallery/36389511/Box-portfolio-Free-html-template) 建站。在 Netlify 部署，[查看旧版](https://elastic-bassi-02c067.netlify.com/)

# To-do
![PageSpeed 评分](https://i.imgur.com/1yurjcQ.png)
待办1：按照谷歌建议继续完善网站；

待办2：博客列表页的搜索、排序功能。

# 技术方案

记录达到某个效果的技术方案，毕竟是非科班+半桶水，好记性不如烂笔头。

### 一、回到顶部

###### 1.按钮的出现/消失：
```JavaScript
var toTop = document.getElementById('toTop');
window.onscroll = function(){
  if (document.documentElement.scrollTop < 200){  // 滚动时动态检测距离
    toTop.classList.add("hidden");
  } else {
    toTop.classList.remove("hidden");
  }
}

if (document.documentElement.scrollTop < 200) { // 刚进网页，静止时检测距离
  toTop.classList.add("hidden");
} else {
  toTop.classList.remove("hidden");
}
```

###### 2.回顶部时自然的滚动效果：

```HTML
<!-- HTML -->
<div id="toTop" onclick="backToTop(4)">
```

```JavaScript
// JavaScript
var backToTop = function (rate) { // rate表示缓动速率
var doc = document.body.scrollTop? document.body : document.documentElement;
var scrollTop = doc.scrollTop;

var top = function () {
  scrollTop = scrollTop + (0 - scrollTop) / (rate || 1);

  if (scrollTop <= 1) { // 临界判断，终止动画
    doc.scrollTop = 0;
    return;
  }
  doc.scrollTop = scrollTop;      
  requestAnimationFrame(top); // 动画gogogo! 
};
top();
};

if (isChromium) { // Chrome 浏览器会有延迟，所以需要将缓动速率调成0
  console.log('Chrome!');
  document.getElementById('toTop').setAttribute('onclick','backToTop(0)');
};
```

### 二、复制链接/邮箱
```HTML
<!-- HTML -->
<script src="clipboard.min.js"></script>
<div>
  <a href="javascript:" id="btn" data-clipboard-text="要复制的内容">复制链接</a>
</div>
```

```JavaScript
// JavaScript
var clipboard = new ClipboardJS(btn);
```

### 三、深色模式
```JavaScript
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'); 

// 判断是否匹配深色模式 
if (darkMode && darkMode.matches) { 
  document.body.classList.add('dark'); 
} 

// 监听主题切换事件 
darkMode && darkMode.addEventListener('change', e => { 
if (e.matches) { 
    document.body.classList.add('dark'); 
} else { 
    document.body.classList.remove('dark');  
} 
});
```

### 四、移动端呼出导航栏时禁止滚动
```JavaScript
navMask.addEventListener('touchmove', e => {  //禁止在遮罩层滚动
  e.preventDefault()
}, false)
navOpen.addEventListener('touchmove', e => {  //禁止在导航菜单滚动
  e.preventDefault()
}, false)
```

### 五、图片懒加载
```HTML
<!-- HTML -->
<script src="lazysizes.min.js"></script>
<img data-src="image.png" class="lazyload" width="765" height="574"/>
```

```CSS
/* CSS */
.lazyload, .lazyloading { /* 图片加载中的背景色 */
  opacity: .5;
  background-color: grey;
}
.lazyloaded { /* 加载完的渐现效果 */
  opacity: 1;
  transition: opacity .3s;
}
```

### 六、图片放大
```HTML
<link href="zoom.css" rel="stylesheet">
<img src="image.png" data-action="zoom"/>
<script src="zoom-vanilla.min.js"></script>
```

### 七、同步 Medium 文章

Medium 平台支持导出文章，而且是带有标签和 Class 的 HTML 文件，可以在其基础上覆盖一套自己做的样式。
所以，当要转换一篇文章时，需要做的事：

###### 1.处理文档
1. 将 `<body>` 之前的内容替换成自己网站的；
2. `<h1>`之后增加文章信息`<p>`；
3. 替换`</section>`后的内容；
4. 底部文章导航需要更新上一篇、下一篇、复制链接；
5. 检查是否有跳转到 Medium 其他文章的链接；
6. 匹配正则表达式`name="[0-9a-f]{4}"`，删除多余的`name`和`id`，注意不能删除有锚点的`id`

###### 2.处理图片
1. `data-width`和`data-height`改为`width`和`height`；
2. `class="graf-image"` 添加 `lazyload`；
3. 添加 `data-action="zoom"`；
4. 图片上载到阿里云OSS

###### 3.使文章能被抓取到目录
1. 确保文章内只有一个 `section-inner`;
2. 搜索并删除多余的 `/section` 标签;
3. 让类名 `section--last` 跟在 `section--last` 的后面
4. 确保至少有一个 `h3`
5. 确保正文大标题是 h3，小标题是 h4

### 八、移动端加载小尺寸图片
```HTML
<!-- HTML -->
<picture>
  <source media="(max-width: 576px)" srcset="w_960.png">
  <img src="w_1920.png"/>
</picture>
```

### 九、作品页图片放大（Viewer.js 的使用）
```HTML
<!-- HTML -->
<link href="viewer.min.css" rel="stylesheet">
<div id="galley"> // 让 JS 找到图片列表
  <picture>
    <source media="(max-width: 576px)" data-srcset="w_960.png"> // 移动端使用低质量图片
    <img data-src="w_1920.png"/>
  </picture>
  <picture> ... </picture>
</div>
<script src="viewer.min.js"></script>
```

```JavaScript
// JavaScript
window.addEventListener('DOMContentLoaded', function () {
  var galley = document.getElementById('galley'); // 绑定图片列表
  var viewer = new Viewer(galley, {
    url: 'data-src', // 定义图片来源
    title: function (image) {
        return (this.index + 1) + ' / ' + this.length; // 显示页码
    },
  });
});
```

### 十、作品页，在移动端可以点击整个卡片跳转
```HTML
<!-- HTML -->
<section class="project-ytscrm" onclick="openYtscrmLink()">
  ...
</section>
```

```JavaScript
// JavaScript
const mql = window.matchMedia("(max-width:768px)"); // 定义宽度
var sectionYtscrm = document.getElementById('sectionYtscrm') // 绑定卡片
sectionYtscrm.onclick = function(){if (mql.matches){window.open('project/ytscrm.html');}} // 点击卡片时判断屏幕宽度
```


### 十一、防镜像

现在已经找到一个镜像网站：https://zhoucaixia.cn

```JavaScript
<script>
  if (window.location.host.search('lrd.im') == -1) {
      window.location.href = 'https://lrd.im';
  }
</script>
```
已经过[JS混淆加密](https://www.sojson.com/js.html)

### 十二、HTTP 头下载简历.pdf

Content-Type: `application/pdf`

Content-Disposition: `attachment; filename="文件名.pdf"`

HTML 里用 `<a>` 标签跳转到 OSS 链接即可


### 十三、Toast 效果实现
```HTML
<!-- HTML -->
<section class="project-card card-1">...</section>
<section class="project-card card-2">...</section>
<section class="project-card card-3">...</section>
```

```JavaScript
// JavaScript
var projectCard = document.getElementsByClassName('project-card') // 获取数组
var projectBtn = document.getElementsByClassName('project-btn')

var ToastNode = `<div id="toast"> <span>文字提示</span> </div>`; // 定义 Toast

for(var i=0;i<projectCard.length;i++){  // 通过循环获取数组内的元素           
  projectCard[i].addEventListener('click',showToast,false); // 监听到 click 后，执行 showToast 动作
  projectBtn[i].addEventListener('keydown', (event) => {  // 监听聚焦到按钮后回车，执行 showToast 动作
    var name = event.key; 
      if (name === 'Enter') { showToast(); }
  }, false);
}; 

function showToast(e){  // 定义 showToast 行为
  document.body.insertAdjacentHTML('beforeend', ToastNode); // 将 ToastNode 插入指定位置
  window.setTimeout(function(clearToast){ 
    document.getElementById("toast").remove();  // 定时在 DOM 中删除 Toast
  }, 1000);
};
```

# 其他

服务器：[阿里云轻量应用服务器](https://www.aliyun.com/product/swas)

静态资源托管: [阿里云OSS](https://www.aliyun.com/product/oss)

域名购买: [Name.com(ref)](https://www.name.com/zh-cn/referral/315c9d)
