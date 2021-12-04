// ▼▼ 深色模式
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
// ▲▲ 深色模式

// ▼▼ 博客 - 右侧导航菜单 // https://www.rainng.com/js-wordpress-catalog/

var div = document.createElement('div');
div.id = 'blogCatalog';
div.setAttribute('class','blogCatalog');
document.body.appendChild(div);

// 目录
let catalogData = getArticleCatalog();
if (catalogData != null) {
    // blogCatalog换成你的目录容器
    let wrapper = document.getElementById('blogCatalog');
    wrapper.innerHTML = generateCatalog(catalogData);
}

function getArticleCatalog(){
let articleContent = document.getElementsByClassName('section-inner');
console.log(articleContent)

if (articleContent.length !== 1) {
  // alert('not found');
  return null;
}
let catalog = [];
let header = {};
let elements = articleContent[0].childNodes; // 获取文章容器的子节点
// 遍历所有元素 
for (let i = 0; i < elements.length; i++) {
  if (elements[i].nodeName === 'H3') {
    elements[i].id = 'h3-' + catalog.length;
    header = {
        name: elements[i].innerText,
        childHeaders: []
    };
    catalog.push(header);
  } else if (elements[i].nodeName === 'H4') {
    elements[i].id = 'h3-' + (catalog.length - 1) + '-h4-' + header.childHeaders.length;
    header.childHeaders.push(elements[i].innerText);
    } 
  }
  return catalog;
}

function generateCatalog(catalogData) { // 添加目录标签
  let catalog = '<div style="font-weight: 600;font-size: 16px; padding-left: 8px;">文章目录</div>';
  for (let i = 0; i < catalogData.length; i++) {
    let target = '#h3-' + i; // 跳转目标
    // let index = (i + 0) + '. '; // 标题索引
    let name = catalogData[i].name; // 标题
    catalog += '<a href="' + target + '">' + name + '</a>';

    for (let i2 = 0; i2 < catalogData[i].childHeaders.length; i2++) {
      target = '#h3-' + i + '-h4-' + i2; // 跳转目标
      // index = (i + 0) + '.' + (i2 + 1) + '. '; // 标题索引
      name = catalogData[i].childHeaders[i2]; // 标题
      catalog += '  <a href="' + target + '" class="catalog-h4">' + name + '</a>'
    }
  }
  return catalog;
}

// ▲▲ 博客 - 右侧导航菜单

// ▼▼ 导航栏

 var iconMenu = document.getElementById('iconMenu');
 var iconClose = document.getElementById('iconClose');
 var navOpen = document.getElementById('navOpen');
 var navMask = document.getElementById('navMask');

 iconMenu.onclick = function(){
    navOpen.classList.toggle('hidden');
    navOpen.classList.toggle('nav-transform');
    navMask.classList.toggle('hidden');
    iconClose.classList.toggle('hide');
    iconMenu.classList.toggle('hide');
    
    navMask.addEventListener('touchmove', e => {
        e.preventDefault()
      }, false)
    navOpen.addEventListener('touchmove', e => {
    e.preventDefault()
    }, false)
 }
 iconClose.onclick = function(){
    navOpen.classList.toggle('hidden');
    navOpen.classList.toggle('nav-transform');
    navMask.classList.toggle('hidden');
    //图标切换
    iconClose.classList.toggle('hide');
    iconMenu.classList.toggle('hide');
    
    navMask.addEventListener('touchmove', e => {  //禁止在遮罩层滚动
        e.preventDefault()
      }, false)
    navOpen.addEventListener('touchmove', e => {  //禁止在导航菜单滚动
    e.preventDefault()
    }, false)
 }

 navMask.onclick = function(){ 
    navOpen.classList.toggle('hidden');
    navOpen.classList.toggle('nav-transform');
    navMask.classList.toggle('hidden');
    //图标切换
    iconClose.classList.toggle('hide');
    iconMenu.classList.toggle('hide');
 }

// ▲▲ 导航栏


// ▼▼ 滚动到顶部缓动实现（滚动到顶部缓动实现，rate表示缓动速率，默认是2）
  var backToTop = function (rate) {
  var doc = document.body.scrollTop? document.body : document.documentElement;
  var scrollTop = doc.scrollTop;
  
  var top = function () {
      scrollTop = scrollTop + (0 - scrollTop) / (rate || 1);
      
      // 临界判断，终止动画
      if (scrollTop <= 1) {
          doc.scrollTop = 0;
          return;
      }
      doc.scrollTop = scrollTop;
      // 动画gogogo!
      requestAnimationFrame(top);    
  };
  top();
};
// ▲▲ 滚动到顶部缓动实现


// ▼▼ 判断是 Chrome 就用回到顶部(0)的动效
var isChromium = window.chrome;
if (isChromium) {
  document.getElementById('toTop').setAttribute('onclick','backToTop(0)');
  console.log('Chrome!');
};
// ▲▲ 判断是 Chrome 就用回到顶部(0)的动效



// ▼▼ 滚动出现返回顶部
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

if (document.documentElement.scrollTop < 200) { // 刚进网页 静止时检测距离
  toTop.classList.add("hidden");
} else {
  toTop.classList.remove("hidden");
}
// ▲▲ 滚动出现返回顶部


// ▼▼ 博客 - 复制链接
var blogLink = document.getElementById('blogLink');
var copyLink = document.getElementById('copyLink');
var copied = document.getElementById('copied');
var clipboard = new ClipboardJS(blogLink);
clipboard.on('success', function (e) { 
  console.log(e);
  console.log(copied);
  copyLink.classList.toggle('hide');
  copied.classList.toggle('hide');
});

copied.onclick = function() {
  copyLink.classList.toggle('hide');
  copied.classList.toggle('hide');
}
// ▲▲ 博客 - 复制链接

// ▼▼ Viewer.js
window.addEventListener('DOMContentLoaded', function () {
  var galley = document.getElementById('galley'); // 绑定图片组
  var viewer = new Viewer(galley, {
    url: 'data-src',  // 定义图片来源
    title: function (image) {
        return (this.index + 1) + ' / ' + this.length; // 显示当前/总数
    },
    toolbar: 0,
    transition: 1,
    zoomRatio: 0.2, // 每次缩放多少
  });
});
// ▲▲ Viewer.js




  // 匹配域名
  // var url =  window.location.href
  // if (url.indexOf('blog') == '-1'){ //非博客页面
  //   alert('not blog')
  // } else {  //博客页面
  //   alert('is blog')
  // }