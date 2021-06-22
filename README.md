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
### 同步 Medium 文章



### 回到顶部

按钮的出现/消失：
```JavaScript
var toTop = document.getElementById('toTop');
window.onscroll = function(){
  if (document.documentElement.scrollTop < 200){  // 滚动时动态检测距离
    toTop.classList.add("hidden");
    console.log('<200');
  } else {
    toTop.classList.remove("hidden");
    console.log('>200');
  }
}

if (document.documentElement.scrollTop < 200) { // 刚进网页，静止时检测距离
  toTop.classList.add("hidden");
} else {
  toTop.classList.remove("hidden");
}
```

回顶部时自然的滚动效果：

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

### 复制链接/邮箱
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

### 自适应/切换深色模式
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

### 图片懒加载
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

### 图片放大
```HTML
<link href="zoom.css" rel="stylesheet">
<img src="image.png" data-action="zoom"/>
<script src="zoom-vanilla.min.js"></script>
```
