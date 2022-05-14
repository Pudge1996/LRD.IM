# 高级排版功能 Case-Sensitive Forms 是什么？
## 发现
自从转换到 Figma 工作后，我发现在部分字体下的「Type settings」里，有一个选项叫「Case-Sensitive Forms」，来回切换后，发现了一些有意思的现象，颠覆了之前的部分认知。经过一段时间的查阅资料和实践后，写下这篇笔记。

## 认识
实际上「Case-Sensitive Forms」属于 OpenType 字体众多高级排版功能的其中一种，开启后，主要有以下影响：

1. 将部分标点符号的位置上移；
2. 将老式数字改为默认样式；

接下来会图文并茂，逐个举例。

### 1.将部分标点符号的位置上移
一直以来，我们在英文输入法下输入的标点符号，其垂直位置是基于小写字母 x 的中心 (x-height) 作为对齐线的。

![图片alt](图片链接 "SF 和 Inter 字体的小写字母和小写标点的对齐示例x:-)]÷x，以及标题示例")

而在开启「Case-Sensitive Forms」后，标点的垂直位置则是基于大写字母 X 的中心 (Cap-height) 作为对齐线。

![图片alt](图片链接 "SF 和 Inter 字体的大写字母和大写标点的对齐示例x:-)]÷x，以及标题示例")

### 2.将老式数字改为现代数字

将数字字形从旧式数字转变为现代数字。旧式数字实际上也是 x-height 对齐，拥有高低错落的韵律美，常用在外语书籍中。

开启「Case-Sensitive Forms」后，会将旧式数字改为我们常见的现代数字，每个数字都等高，其高度为 Cap-height。

![图片alt](图片链接 "老式数字改为现代数字对比")

https://www.zhangxinxu.com/wordpress/2018/12/css-font-feature-settings-keyword-value/#hwid
Oldstyle Figures: onum

## 实践场景
得益于「将部分标点符号的位置上移」这个特点，我不禁联想到它是适用于大写字母、数字和 CJK 文字的混排当中。下面就列举几个我在工作学习中发现到，应用「Case-Sensitive Forms」的文字能够获取到更优体验的几个场景吧。

### 1. 电话号码
来欢聚集团工作之后接触到了国际化电商业务，在业务需求中就会出现带有各个地区区号的手机号码，纯数字的场景就特别适合使用「Case-Sensitive Forms」，因为数字的字高与大写字母的字高一致。
![图片alt](图片链接 "数字使用大写和非大写标点的对比")

（同理，在验证码场景也适用）

### 2. 时间/时区
与上一个场景类似，时间/时区基本上都是由数字和大写字母组成。也很适合应用该做法。
![图片alt](图片链接 "2022-05-14 9:39 PM (GMT+8) 对比 ")


### 3. 西文大写和 CJK 文字
如果某些标题位置用到了强制大写的样式，特别适用「Case-Sensitive Forms」，因为这个样式的原意就是为了让标点在大写字母中间时，位置更靠近上下文的垂直中心。
![图片alt](图片链接 "大写的标题")

同样地，CJK 文字的高度与大写字母 X 的中心 (cap height) 接近，所以也适合使用。
![图片alt](图片链接 "姓名 | 职务 张三 | 科长 李四 | 副科长；$3/个；50条/页 对比 ")

### 4. 多语言拼接场景
举一个与公司业务贴近的例子。我做的数据中心里面有一个叫「数据报告页」的页面，该页面的名称是由「页面类型」+「分析维度」拼接而成。由于是拼接而成，那两段文本会是需要有首字母大写，一旦上下文中有大写字母，我认为就有「Case-Sensitive Forms」发挥的空间。
![图片alt](图片链接 "拼接标题的对比 ")

### 5. 无序列表
在无序列表 Bullet List 中，每一项都是一个完整的句子，所以也必定会有首字母大写。使用「Case-Sensitive Forms」将无序列表最前面的标点上移至与大写字母垂直对齐，看起来会整齐了不少。
![图片alt](图片链接 "无序列表的对比 ")

### 6. 纯文字表情
一些用几个标点和字母组成的简易纯文字表情，使用「Case-Sensitive Forms」后效果也会更好。该场景比较少见。
![图片alt](图片链接 ":D :-) 对比 ")

## 支持的字体
支持这个特点的字体并不是特别多。我在各种主流字体或系统默认字体下都试了下，发现生效的字体有：
DIN Pro
Inria Sans
Inter 
SF 系列（Apple 设备系统字体）
Warnock Pro

我们耳熟能详的字体，有大部分都是不支持的：
Roboto
Noto Sans
Source Sans
Helvetica
Arial

## 如何使用
### 在 Figma 中应用
选中字体后，在「Type settings」中切换至「Detail」面板，勾选「Case-Sensitive Forms」，就能看到效果。
![图片alt](图片链接 "Figma 使用步骤图")

### 在 Sketch 中应用
选中字体后，在「 」中选择「」→「」，就能看到效果。
![图片alt](图片链接 "Sketch 使用步骤图")

### 在网页中应用
在网页中给文本添加样式 ```font-feature-settings: 'case';```，就能看到效果。
![图片alt](图片链接 "网页使用步骤图")

[查看兼容性](https://markdown.com.cn)


## 实际案例
恰好最近我也有将这个效果应用到公司项目里面，刚好又踩过一个小坑，正好在这记录下吧。

![图片alt](图片链接 "使用前后对比图")

「Case-Sensitive Forms」应用在特定场景下，确实是会好些。正好公司项目里就会经常出现时区、货币、电话等场景。从上图可以看到使用前后的对比，高下立判。

### 遇到的小坑
当时我计划让前端实现「比例数字」+「Case-Sensitive Forms」时，是分别用两个样式的：
``` CSS
    // 出错做法
    font-variant-numeric: normal; // 实现比例数字
    font-feature-settings: 'case' on; // 实现 Case-Sensitive Forms
```
看起来没问题，我在 Stackblitz 里自己实践了一遍也能达到预期效果，但前端反馈到这两个属性放在一起后，打包工具会在 `font-feature-settings` 属性的值后面追加一个 `normal`（可能为了兼容性），使这句样式变成 `font-feature-settings: 'case' on, normal;`。这自然就会失效了。

然后我后面找了点资料，发现比例数字也能放进 font-feature-settings 里面，于是让前端把样式改成了：
``` CSS
    // 最终做法
    font-feature-settings: 'case', 'pnum'; // 实现 Case-Sensitive Forms 和比例数字
```

最后打包出来效果与预期一致，顿时感到神清气爽，顺便把这做法得记录下来了。

![图片alt](图片链接 "前端对话截图")


## 小科普：什么是 OpenType 高级排版功能？
OpenType 功能就像字体中的密室。解锁它们，您将找到使字体以微妙而生动的方式呈现不同外观和行为的方法。并非所有 OpenType 功能都适合在所有时候使用，但是某些功能对于出色的排版至关重要。——— Adobe

支持 OpenType 的字体，允许我们做更多富有细节的文字样式处理，比如将数字「0」设置为中间有斜线的样式，更有区分度：
![图片alt](图片链接 "Slashed Zero: zero 对比 ")

或者将小写字母转换为小型大写字母：
![图片alt](图片链接 "Small Caps: smcp 对比 ")

又或者设置数字为上标字形或下标字形：
![图片alt](图片链接 "Subscript: subs 对比 ")

等等，OpenType 的世界很庞大，但不是每一个都有用。就像上文所说，如果我们找到一个适合当前场景的高级排版样式，那页面中的文字将会更富有细节、更耐人寻味。

### 尚存的疑问
到底「Case-Sensitive Forms」中文应该叫什么？我觉得「大写标点」好像不错，知道这个术语中文名的观众请提点一下... 网上查了半天没查到。

## 参考资料
https://www.preusstype.com/techdata/otf_case.php

https://helpx.adobe.com/cn/fonts/using/use-open-type-features.html

https://www.fonts.com/content/learning/fontology/level-3/numbers/oldstyle-figures

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide