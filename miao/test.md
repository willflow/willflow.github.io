
大喵教育前端培训
================

## 阶段性测试 2018.05.11

### 大喵教育版权所有 | 出题人：谢然


01. 列出至少 7 个常用 Linux 命令及其基本使用方法
    * pwd 显示当前工作目录
    * ls 查看目录中的文件 ls -a 显示全部文件包括隐藏文件
    * cd 切换当前目录 cd .. 返回上一级目录
    * mkdir 创建目录 mkdir dir1 创建一个叫做dir1的目录/li>
    * rm 删除文件 rm -r thedir 删除thedir及其内容
    * mv 移动文件 mv file1 file2 把文件file1重命名为file2
    * cat 查看文件内容 cat file


02. 什么是 html 实体？常见 html 实体有哪些？
    * 在HTML中，某些字符是预留的，不能直接使用，需要用字符实体来转义
    * &amp;nbsp; 空格
    * &amp;amp; &amp;
    * &amp;copy; 版权符
    * &amp;lt; 小于号
    * &amp;gt; 大于号
    * &amp;quot; 双引号


03. 计算机为什么使用二进制？
    * 因为二进制是在电路中最好控制的,只有1和0两种状态.


04. 什么是 Unicode？如何表示，有什么作用？最通用的 Unicode 实现是？
    * Unicode 是一种重要的交互和显示的通用字符编码标准。
    * 它希望能够解决多语言的计算，如不同国家的字符标准。
    * utf-8


05. 什么是 GUI，什么是 CLI，什么是接口/界面？现实生活中有哪些例子？
    * GUI:图形化用户界面/接口
    * CLI：命令行界面
    * 接口/界面：现在用户面前,显示器屏幕上的图形状态。
    * window用户界面是GUI，gitbash是CLI


06. 在什么情况下 html 标签可以不需要闭合？
    * 当html标签是自闭合标签的时候，如input标签，hr标签


07. 在一些情况下某些非自闭合标签的结束标签可以省略的原因是什么？
    * 在一些情况下符合规范或者浏览器会自动补全


08. 什么是费茨定律？它有哪些应用？
    * 任意一点移动到目标中心位置所需时间与该点到目标的距离和大小有关，距离越大时间越长，目标越大时间越短。
    * window和mac系统菜单设计：增大目标大小以缩短定位时间（边缘无限大）。
    * 鼠标右击菜单设计：缩短当前位置到目标区域的距离。


09. 为什么英文很重要？
    * 前端资源大多为英文，学好英文可以更快更准确地获得更靠谱的信息
    * 更多更有趣的娱乐方式、内容，更多快乐


10. 将二进制 `10010` 数转换为十进制数
    * 18

11. 将十六进制数 `ABCDEF` 转换为十进制数
    * 11259375

12. 将十进制数 `435` 分别转换成二进制数和十六进制数
    * 110110011
    * 1b3


13. 请说出你对命令行程序的理解，以及其与 GUI 程序的区别
    * 理解：通过一些简单的命令就能够快速搜索或创建文件，而通过对那些简单命令进行组合，可以完成更加复杂的任务，可以更有效地控制操作系统，提升效率。
    * 区别：形式不同
    
    

14. 列出 HTML 中常见的全局属性
    * style，title，lang，id，class
    

15. 什么是操作系统的路径（Path）？它的作用及应用场景是？
    * 用来定位表示文件的位置。
    * 分为绝对路径 /dir1/dir2/file/somedir
    * 和相对路径 dir1/dir2/file


16. 什么是文本文件？什么是二进制文件？它们最明显的区别是？
    * 文本文件以ASCII码存放文件，二进制文件以二进制编码方式存放文件
    * 区别：文件的程序在对其内容的解释上不同。


17. 为什么说 html 与数学公式有诸多相似之处？
    * 都可以画出树形结构，思维上有很多相似之处
    

18. 几种常见图片格式有什么区别和特点？
    * jpeg：有损压缩，适合保存照片
    * png：无损压缩，适合存储大片完全相同颜色的图片，不适合保存照片，支持透明色
    * gif：无损压缩，适合保存动图，支持透明色

19. `data-*` 属性一般是用来干嘛？
    * 用来嵌入自定义数据

20. 什么是 MIME Type？
    * 描述消息内容类型的因特网标准，用来告诉浏览器某资源的媒体类型


21. 哪些标签可以使用 target 属性？哪些标签可以使用 href 属性？
    * target：a标签，link标签
    * href：a标签，link标签


22. 把如下以十进制表示的字节序列按utf8的格式转码为Unicode编码序列。然后查出每个编码对应的具体符号：
    
    230, 152, 159, 230, 156, 159, 49



23. group 类型的标签有哪些？
    * hgroup分组标题，optgroup分组选项，colgroup分组表格col标签


24. 什么是 SEO？
    * 利用搜索引擎的搜索规则让网站在搜索引擎的排名更好


25. 分别列出每种常见浏览器的内核名称（自己查）。
    * Trident内核： internet explorer，国产的绝大部分浏览器
    * webkit内涵： apple 的safari、google的chrome、国产的大部分双核浏览器其中一核就是WebKit
    * Gecko内核： Mozilla Firefox


26. 列表类标签有哪些？分别如何使用？需要注意些什么？
    * ul无序列表和ol有序列表，dl描述列表
    * ul和ol的列表项使用li标签
    * dl使用dt标签表示标题，dd标签显示内容，三者需要一起使用


27. 为什么查文档一般不推荐 W3School？
    *缺少维护，文档存在很多错误。


28. 为什么不同类型的标签的 fallback 内容要以不同的形式提供？
    * script和frameset正常使用的时候，里面是有内容的，备用方案写在里面会造成逻辑错误
    * canvas和iframe正常使用的时候，里面是没有内容的，浏览器会忽略里面的内容，备用方案写在里面结构更紧凑


29. 分别写出在 head 中设定页面编码，设定 icon，引入样式表的标签
    * 编码：`<meta charset="UTF-8">`
    * 引入icon：`<link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">`
    * 引入样式：`<link rel="stylesheet" href="./reset.css">`


30. 什么叫做可访问性，html 中为此做了什么工作？
    * 可访问性：Web内容对于残障用户的可阅读和可理解性，提高可访问性也能让普通用户更容易理解Web内容。
    * lable标签嵌套input标签扩大选择范围
    * 用fieldset和legend给表单元素分组
    * 使用title和alt标签添加描述文本
    * 使用 `aria-*` 与 `role`添加描述


31. 请确认以下标签分别属性什么类别（Content Category）？
    
    p, meta, h1, fieldset, option, input, area

    * 块级：p，h1，fileldset，option
    * 行内：input meta，area


32. 写出以下几个符号的 ascii 码：`a，A，0，CR，LF，空格，NBSP`。
     * a：\0x61
     * A：\0x41
     * 0：\0x30
     * CR：\x0d
     * LF：\x0a
     * 空格：\0x20
     * NBSP：\0xA0


33. 写出如下结构中div元素的所有后代/祖先/子/父/兄弟元素
    ```html
    <section>
      <h1><span></span></h1>
      <main>
        <h2></h2>
        <div>
          <ul>
            <li><a href=""><img src="" alt=""></a></li>
          </ul>
        </div>
        <aside>
          <h3></h3>
        </aside>
      </main>
    </section>
    ```
    * 后代：ul、li、a、img
    * 祖先：main、section
    * 子元素：ul
    * 父元素：main
    * 兄弟元素：h2、aside


34. 用什么方法扩大一个 checkbox 的可点击区域？
```html
有for的写法
<label for="oneid">One</label>
<input type="checkbox" name="sex" id="oneid">男
没有for的写法
<label>
<input type="checkbox" name="sex">男
</label>
```

35. 什么是 BOM 头？
    * BOM头是放在UTF-8编码的文件的头部的,占用三个字节,用来标识该文件属于UTF-8编码。


36. 常见的替换元素有哪些？它们与非替换元素最大的区别什么？
   * img
   * radio
   * checkbox
   * input
   * iframe
   * canvas
   * object
   * video
   * audio
   * 区别：只是一个占位标签，内容会随属性改变而改变。


37. 让 CSS 在 HTML 页面上生效有哪几种方法，分别写出来。
     * `<p style="color:red">内联</p>`
     * `<link rel="stylesheet" href="./reset.css">`
     * `<style>p{color:red;}</style>`

38. 如何让页面打印时应用不同的效果？
    * `<link rel="stylesheet" type="text/css" media="print" href="printstyles.css" />`

39. 假设 index.html 的路径为 http://user.coding.me/task/index.html ，如下引用的a.css和b.css路径分别为？
    ```html
    <!-- index.html的内容 -->
    <style>
        @import "../a.css";
    </style>
    ```
    ```css
    /* a.css的内容 */
    @import "b.css";
    ```
    * a.css: http://user.coding.me/a.css
    * b.css：http://user.coding.me/task/b.css
40. 将如下 markdown 转换成 html
    ```md
    ## 四季变换

    一年有四季，
    四季有其对应的节气

    * 春
        - 立春
        - 惊蛰
        - 元宵
    * 夏
        - **小米**发布会
        - 华为发布会
    * 秋
        - 开学了
        - 军训了
    * 冬
        - 下雪了
            + 打雪仗了
        - 来暖气了
        - 开空调了

    > 知识就是力量，法国就是培根。

    [春](http://baike.baidu.com/item/%E6%98%A5/6983693)
    ![春](https://www.google.com.hk/images/nav_logo242_hr.png)
    ```
    ```html
    <h2>四季变换</h2>
    <p>一年有四季</p>
    <p>四季有其对于的节气</p>
    <dl>
      <dt>春</dt>
      <dd>立春</dd>
      <dd>惊蛰</dd>
      <dd>元宵</dd>
      <dt>夏</dt>
      <dd><strong>小米</strong>发布会</dd>
      <dd>华为发布会</dd>
      <dt>秋</dt>
      <dd>开学了</dd>
      <dd>军训了</dd>
      <dt>冬</dt>
      <dd>
        <dl>
          <dt>下雪了</dt>
          <dd>打雪仗了</dd>
        </dl>
      </dd>
      <dd>来暖气了</dd>
      <dd>开调了</dd>
    </dl>
    <blockquote>知识就是力量，法国就是培根。</blockquote>
    <a href="http://baike.baidu.com/item/%E6%98%A5/6983693">春</a> 
    <img src="https://www.google.com.hk/images/nav_logo242_hr.png" alt="春">
    ```
41. 什么是模拟信号？什么是数字信号？它们的区别是？
  * 模拟信号：把设备里读出来的数据直接使用（衰减比较小，适合远距离传输）
  * 数字信号：如果把模拟信号理解0和1，就称为数字信号（衰减严重，适合近距离传输）


42. 如下表单提交后将跳转到什么地址
    ```html
    <form action="https://www.baidu.com/s" target="_blank">
      <input type="text" value="bb" name="a">
      <input type="checkbox" name="b" id="b" value="123" checked>
      <input type="checkbox" name="b" id="b" value="456" checked>
      <input type="checkbox" name="b" id="b" value="789">
      <input type="radio" name="c" id="c" value="a2">
      <input type="radio" name="c" id="c" value="a5" checked>
      <input type="radio" name="c" id="c" value="a4">
      <select name="select">
        <option value="01">0001</option>
        <option value="02">0002</option>
        <option value="03" selected>0003</option>
        <option value="04">0004</option>
        <option value="05">0005</option>
      </select>
      <button>提交</button>
    </form>
    ```
    * 打开新窗口，跳转到百度

43. 列出 input 的 type 有哪些值，以及为各个值时分别需要怎么使用。
    * button 定义可点击按钮
    * checkbox 定义复选框。name一样，value值不一样
    * file 定义输入字段和 "浏览"按钮，供文件上传。
    * hidden 定义隐藏的输入字段。
    * image 定义图像形式的提交按钮。
    * password 	定义密码字段。该字段中的字符被掩码。
    * radio 定义单选按钮。name一样，value值不一样
    * reset 定义重置按钮。重置按钮会清除表单中的所有数据。
    * submit 定义提交按钮。提交按钮会把表单数据发送到服务器。
    * text	定义单行的输入字段，用户可在其中输入文本。
    * texterea 定义多行的输入字段，用户可在其中输入文本。

44. 想要让一个文本输入框在页面打开后自动获得光标要怎么办？
    * 添加autofocus属性

45. 如何在文本框里放置提示性文字？
    * 添加placeholder属性


46. option 标签的主体内容太长影响用户体验，你会如何解决？
    * 删减内容，将完整内容设置在title属性上显示出来

47. 想要在 textarea 标签中默认显示一段 html 代码最安全的做法是什么？
    * 添加placeholder属性，并使用html实体转义大于号小于号。

48. 如何禁用一组输入框？
    * 使用用fieldset和legend给输入框分组，然后设置disabled属性。


49. 如下表格渲染出来后是什么效果？不要直接将代码贴入jsbin中看效果
    ```html
    <table border=1>
      <caption>美国队长</caption>
      <col>
      <col bgcolor=red>
      <col>
      <colgroup bgcolor=pink>
        <col>
        <col>
        <col bgcolor=brown>
      </colgroup>
      <thead>
        <tr>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>06</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc</td>
          <td colspan=3 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td colspan=2 rowspan=3>abc</td>
        </tr>
        <tr bgcolor=lightgreen>
          <td colspan=2 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </tbody>
    </table>
    ```
    * 标题为美国队长的5行6列的表格
    * 第一行第1和3单元格白色，第2个单元格为红色，4和5单元格为粉红，第6个单元格为棕色
    * 第二行第1单元格白色，从第2个单元格开始，合并3列2行，颜色为红色，剩余5，6两个单元格颜色为粉红和棕色
    * 第三行第1单元格白色，剩余第5单元格合并2列3行，颜色为粉红。
    * 第四行，第1个单元格开始合并2列2行浅绿色，剩余3和4单元格为浅绿色
    * 第五行剩余第2单元格白色，第3单元格粉色


50. HTML 的 `aria-*` 与 `role` 属性的作用是？
     * `role与aria-*`用在非语义标签上，增强语义，提高可读性。


51. 写出如下标签或属性值的英文全称

    标签：html,div,p,a,em,tr,th,td,col,ul,ol,li,dl,dt,dd,pre,nav

    属性：coord,rect,poly,href,src

    * html: HyperText Markup Language
    * div: DIVision
    * p: paragraph
    * a: Anchor
    * em: Emphasized
    * tr: table row
    * th: table header cell
    * td: table data cell
    * col: column
    * ul:  Unordered List 
    * ol: Ordered List
    * li: List Item
    * dl: Definition List
    * dt: Definition Term
    * dd: Definition Description
    * pre: Preformatted  
    * nav: navigation
    * coord: coordinate
    * rect: rectangle
    * poly: polygon
    * href: Hypertext Reference
    * src: source

52. 中英互翻
    
    * geek，极客
    * nerd，书呆子
    * hacker，黑客
    * edge，优势
    * bleeding/cutting edge 前沿/尖端/可能存在风险的技术，
    * HTML 实体，HTML entity
    * coordinate，协调
    * polygon，多边形
    * bit，比特
    * byte，字节
    * alternative，替代
    * 属性，attribute
    * obsolate，废弃的
    * 二进制，Binary
    * 十进制，Decimal
    * 十六进制，Hexadecimal
    * octal，八进制
    * deprecate，反对
    * loop，循环
    * 行，line 
    * 列，row
    * horizontal，水平线
    * 语义化，Semantic
    * 可访问性，Accessibility