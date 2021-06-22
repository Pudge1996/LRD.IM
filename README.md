# 关于 LRD.IM

域名: [Name.com](https://www.name.com/)

托管资源: [阿里云OSS](https://www.aliyun.com/product/oss)


# 技术方案
### 同步 Medium 文章

### 回到顶部

### 复制链接/邮箱
```html
<!-- HTML -->
<script src="clipboard.min.js"></script>
<div>
  <a href="javascript:" id="btn" data-clipboard-text="要复制的内容">
 复制链接
  </a>
</div>
```

```javascript
// JavaScript
var clipboard = new ClipboardJS(btn);
```

### 自适应/切换深色模式
```javascript
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
```html
<script src="lazysizes.min.js"></script>
<img data-src="image.png" class="lazyload" width="765" height="574"/>
```

### 图片放大
```html
<link href="zoom.css" rel="stylesheet">
<img src="image.png" data-action="zoom"/>
<script src="zoom-vanilla.min.js"></script>
```

# 时间线
- 2021-06 全面重构，脱离 Bootstrap 和 jQuery，同步所有 Medium 文章到本站；
- 2019-11 博客页支持跳转到 Medium 文章了；
- 2019-02 重写部分样式以提升视觉体验；
- 2019-10 适配深色模式；
- 2018-01 用 HTML 模板 [BOX Theme](https://www.behance.net/gallery/36389511/Box-portfolio-Free-html-template) 建站。在 Netlify 部署，[查看旧版](https://elastic-bassi-02c067.netlify.com/)




