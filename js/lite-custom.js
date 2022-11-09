//包含深色模式、导航栏、滚动到顶部、联系卡片

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
    //屏蔽滚动
    document.body.classList.add("stop-scrolling");
    //屏蔽滚动（Safari）
    navMask.addEventListener('touchmove', e => { 
        e.preventDefault()
      }, false)
    navOpen.addEventListener('touchmove', e => {
    e.preventDefault()
    }, false)
    // ESC 关闭弹窗
    document.onkeydown = function(e){ //对整个页面监听  
      if (27 == e.keyCode){  
        navOpen.classList.toggle('hidden');
        navOpen.classList.toggle('nav-transform');
        navMask.classList.toggle('hidden');
        iconClose.classList.toggle('hide');
        iconMenu.classList.toggle('hide');
        document.body.classList.remove("stop-scrolling");
      }
    }
 }
 iconClose.onclick = function(){
    navOpen.classList.toggle('hidden');
    navOpen.classList.toggle('nav-transform');
    navMask.classList.toggle('hidden');
    //图标切换
    iconClose.classList.toggle('hide');
    iconMenu.classList.toggle('hide');
    //屏蔽滚动
    document.body.classList.remove("stop-scrolling");
 }

 navMask.onclick = function(){ 
    navOpen.classList.toggle('hidden');
    navOpen.classList.toggle('nav-transform');
    navMask.classList.toggle('hidden');
    document.body.classList.remove("stop-scrolling");

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
var sideButton = document.getElementById('sideButton');
window.onscroll = function(){
  if (document.documentElement.scrollTop < 150){  // 滚动时动态检测距离
    sideButton.classList.add("hidden");
    console.log('<150');
  } else {
    sideButton.classList.remove("hidden");
    console.log('>150');
  }
}

if (document.documentElement.scrollTop < 150) { // 刚进网页 静止时检测距离
  sideButton.classList.add("hidden");
} else {
  sideButton.classList.remove("hidden");
}
// ▲▲ 滚动出现返回顶部

// ▼▼ 创建 DOM
var popContactPopover = document.createElement('div');
popContactPopover.setAttribute('id','popover');
popContactPopover.setAttribute('class','contact-popover');
document.body.appendChild(popContactPopover);

var popPopoverContent = document.createElement('div');
popPopoverContent.setAttribute('id','popoverContent');
popPopoverContent.setAttribute('class','popover-content hidden');
popContactPopover.appendChild(popPopoverContent);

var popPopoverMask = document.createElement('div');
popPopoverMask.setAttribute('id','popoverMask');
popPopoverMask.setAttribute('class','popover-mask hidden');
popContactPopover.appendChild(popPopoverMask);

var popImg = document.createElement('img');
popImg.setAttribute('width','240');
popImg.setAttribute('height','240');
popImg.setAttribute('src','../resume/qr-code.png');
popImg.setAttribute('alt','李瑞东的微信二维码');
popPopoverContent.appendChild(popImg);

var popText = document.createElement('p');
popText.setAttribute('class', 'scan-desc-pc');
popText.innerHTML='扫一扫加我微信';
popPopoverContent.appendChild(popText);

var popText2 = document.createElement('p');
popText2.setAttribute('class', 'scan-desc-mobile');
popText2.innerHTML='长按识别加我微信';
popPopoverContent.appendChild(popText2);
// ▲▲ 创建 DOM

// ▼▼ 首页联系卡片
    var popover = document.getElementById('popover');
    var popoverContent = document.getElementById('popoverContent');
    var contactBtn = document.getElementById('contactBtn');
    var popoverMask = document.getElementById('popoverMask');
    contactBtn.onclick = function(){
      popoverContent.classList.toggle("hidden");
      popoverMask.classList.toggle("hidden");
      document.body.classList.add("stop-scrolling");
      //屏蔽滚动（Safari）
      popoverContent.addEventListener('touchmove', e => { 
          e.preventDefault()
      }, false)
      popoverMask.addEventListener('touchmove', e => {
        e.preventDefault()
      }, false)
    }
    popoverMask.onclick = function(){
      popoverContent.classList.toggle("hidden");
      popoverMask.classList.toggle("hidden");
      document.body.classList.remove("stop-scrolling");
    }
    
    document.onkeydown = function(e){ //对整个页面监听  
        if (27 == e.keyCode){  // ESC 关闭弹窗
          popoverContent.classList.add('hidden');
          popoverMask.classList.add('hidden');
          document.body.classList.remove("stop-scrolling");
        }
      };
// ▲▲ 首页联系卡片

