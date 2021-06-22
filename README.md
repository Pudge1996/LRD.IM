# 关于 LRD.IM

域名购买: [Name.com](https://www.name.com/)

托管资源: [阿里云OSS](https://www.aliyun.com/product/oss)

# 时间线
- 2021-06 全面重构，脱离 Bootstrap 和 jQuery，同步所有 Medium 文章到本站；
- 2019-11 博客页支持跳转到 Medium 文章了；
- 2019-02 重写部分样式以提升视觉体验；
- 2019-10 适配深色模式；
- 2018-01 用 HTML 模板 [BOX Theme](https://www.behance.net/gallery/36389511/Box-portfolio-Free-html-template) 建站。在 Netlify 部署，[查看旧版](https://elastic-bassi-02c067.netlify.com/)


# 技术方案

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

Medium 平台支持导出文章，而且是带有标签和 Class 的 HTML 文件，所以可以在其基础上覆盖一套自己做的样式。
所以，当要转换一篇文章时，需要做的事：

###### 1.处理文档
1. 替换 `<body>` 之前的内容；
2. `<h1>`之后增加文章信息`<p>`；
3. 替换`</section>`后的内容；
4. 底部文章导航需要更新上一篇、下一篇、复制链接；
5. 检查是否有跳转到 Medium 其他文章的链接；
6. 匹配正则表达式`name="[0-9a-f]{4}"`，删除多余的`name`和`id`，注意不能删除有锚点的`id`

###### 2.处理图片
1. `data-width`和`data-height`改为`widht`和`height`;
2. class 添加 `lazyload`;
3. 添加 `data-action="zoom"`
4. 图片上载到阿里云OSS

