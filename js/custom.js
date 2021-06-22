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