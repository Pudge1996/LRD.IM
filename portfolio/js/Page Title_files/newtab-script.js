     // ▼▼ 获取当前系统主题
    var mql = [
      window.matchMedia('(prefers-color-scheme: no-preference)'),
      window.matchMedia('(prefers-color-scheme: light)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];
    if (mql[2].matches) { 
      document.body.classList.add('dark'); 
    } else {
      document.body.classList.add('light');
    }
    // ▲▲ 获取当前系统主题
  
    // ▼▼ 快捷键"Cmd+Shift+L"更换主题色
    document.onkeydown=function(e){ //对整个页面监听  
    var keyNum = window.event ? e.keyCode :e.which; //获取被按下的键值  
      if (76 == e.keyCode && e.shiftKey && e.metaKey){  // metaKey=CMD,  shiftKey=SHIFT, 76=L
        if ( document.body.classList.contains('dark') ) {
          document.body.classList.remove('dark');
          document.body.classList.add('light');
        } else if ( document.body.classList.contains('light') ){
          document.body.classList.add('dark');
          document.body.classList.remove('light');
        }
      }
    }
    // ▲▲ 快捷键更换主题色

    


  
    // ▼▼ 周五更换按钮
    var week = new Date().getDay();  
    if (week == 5 && time>19) { //周五晚上
      document.getElementById("YuqueRecord").className += " hide"; //隐藏 UI 校稿记录
      document.getElementById("YuqueTask").className += " hide"; //隐藏 UI 进度表
      document.getElementById("TAPD").className += " hide"; //隐藏 TAPD
      document.getElementById("WeekilyTask").className += " show"; //显示周报任务表
      document.getElementById("Weekily").className += " show"; //显示周报
    } else { //正常情况
      document.getElementById("WeekilyTask").className += " hide"; //隐藏周报任务表
      document.getElementById("Weekily").className += " hide"; //隐藏周报
      document.getElementById("YuqueDaily").className += " hide"; //隐藏了日报
      
    }
    // ▲▲ 周五更换按钮
  
    // ▼▼ 早中晚更换文案和按钮
    var d = new Date();
    var time = d.getHours();
    var r_text = new Array ();
    
    if (time<=12 && week == 1) {  // 上午：12点前
      r_text[0] = "周一点餐";
      r_text[1] = "找点什么...";
      r_text[2] = "找点什么...";
    } else if (time<19 && time>6) {  // 下午：19点前
      r_text[0] = "多喝热水";
      r_text[1] = "找点什么...";
      r_text[2] = "找点什么...";
    } else {  // 晚上：19点至0点
      r_text[0] = "加油，干饭人!";
      r_text[1] = "找点什么...";
      r_text[2] = "找点什么...";
      document.getElementById("YuqueRecord").className += " hide"; //晚上隐藏 UI 校稿记录
      document.getElementById("YuqueDaily").className += " show"; //晚上显示日报
      
      
      
    }
    
    var i = Math.floor(3*Math.random()); // 生成随机数
    document.getElementById("searchBar").setAttribute("placeholder",r_text[i]); //更改 Placeholder 文案
    console.log([i]); // 打印随机数
    // ▲▲ 早中晚更换文案和按钮


    // ▼▼ 大客户直播间相关

      // getElementsByClassName 返回的是一个数组，所以要加上序号指定哪一个
  var pullTab = document.getElementsByClassName('pull-tab')[0]; // 右侧栏
  var list = document.getElementsByClassName('list')[0]; // 大列表

  var liveBg = document.getElementsByClassName('live-bg')[0]; // 背景蒙层
  var liveList = document.getElementsByClassName('live-list')[0]; //直播间列表
  var ulLive = document.getElementsByClassName('ul-live')[0]; //大客户直播间
  var liveClose = document.getElementsByClassName('live-close')[0]; //关闭弹窗按钮
  var qlSearch = document.getElementsByClassName('ql-search')[0]; //千聊搜索大框
  var qlSearchInput = document.getElementsByClassName('ql-search-input')[0]; //千聊搜索框

  liveList.onmouseover = showMouseOverliveList; // 监听鼠标移至直播间列表
  liveList.onmouseout = showMouseOutliveList; // 监听鼠标离开直播间列表
  pullTab.onmouseout = showMouseOutpullTab; // 监听鼠标离开右侧栏Hover区域
  liveBg.onmouseover = showMouseOutliveBg;  // 监听鼠标离开背景蒙层

  // 点击“大客户直播间”按钮，出现蒙层和List
  ulLive.onclick = function(){
    liveBg.classList.toggle("hidden-bg");
    liveList.classList.toggle("hidden-list");
  }
  
  // 鼠标离开遮罩处，右侧栏不消失
  function showMouseOutliveBg(){
     list.classList.add('hover');
  }
  
  // 鼠标移到直播间列表，右侧栏不消失（模拟Hover元素，影响其前面的元素）
  function showMouseOverliveList(){
     list.classList.add('hover');
  }
  
  // 鼠标离开右侧区域（模拟离开Hover）
  function showMouseOutliveList(){
    list.classList.remove('hover');
  }

  // 点击遮罩区域，隐藏蒙层和List（关闭底部浮层）
  liveBg.onclick = function(){
    liveBg.classList.toggle("hidden-bg");
    liveList.classList.toggle("hidden-list");
  }

  // 点击“关闭弹窗按钮”按钮，隐藏蒙层和List（关闭底部浮层）
  liveClose.onclick = function(){
    liveBg.classList.toggle("hidden-bg");
    liveList.classList.toggle("hidden-list");
  }

  // 鼠标离开右侧栏，隐藏蒙层和List
  function showMouseOutpullTab(){
    list.classList.remove('hover');
    liveBg.classList.add("hidden-bg");
    liveList.classList.add("hidden-list");
  }


  // 搜索栏文本框点击范围增大
  qlSearch.onclick = function(){
    qlSearchInput.focus();
  }
  
  // ▼▼ 快捷键，打开侧边栏
  document.onkeydown = function () {
    if (event.ctrlKey == true && event.keyCode == 83) {
      console.log('83')
    }
}