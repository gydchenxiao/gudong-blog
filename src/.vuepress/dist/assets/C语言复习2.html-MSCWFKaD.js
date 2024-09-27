import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a,o as l}from"./app-D44EjeSa.js";const e={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="c语言判断与循环" tabindex="-1"><a class="header-anchor" href="#c语言判断与循环"><span>C语言判断与循环</span></a></h1><p>判断语句<br> C 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。</p><p>语句 描述<br> if 语句 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。<br> if...else 语句 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。<br> 嵌套 if 语句 可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句。<br> switch 语句 一个 switch 语句允许测试一个变量等于多个值时的情况。<br> 嵌套 switch 语句 可以在一个 switch 语句内使用另一个 switch 语句。</p><p><strong>if else 语句</strong></p><p>if(boolean_expression)<br> {<br> / <em>如果布尔表达式为真将执行的语句</em> /<br> }<br> else<br> {<br> / <em>如果布尔表达式为假将执行的语句</em> /<br> }</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int age;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int english_score;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int IQ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;Please input your age: \\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    scanf_s(&quot;%d&quot;, &amp;age);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;Please input your english_score: \\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    scanf_s(&quot;%d&quot;, &amp;english_score);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;Please input your IQ: \\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    scanf_s(&quot;%d&quot;, &amp;IQ);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    if ((age &gt;= 18) &amp;&amp; (english_score &gt;= 90 || IQ &gt;= 120)){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        //程序可读性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        printf (&quot;成年！允许玩！ \\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    else {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        printf (&quot;不成年 或者你的英语成绩不合格! \\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        //程序可读性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中if 中语句是条件，age要大于等于18，后面英语分数和IQ满足一项就可以执行 &quot;成年! 允许玩&quot;，否则执行else 后的语句。</p><p>if 可以嵌套使用，但不建议又过多的if</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main(void) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  int age = 21;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  if (age </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 18){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;你未成年！\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  if (age &gt;= 70){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;老年\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  if (age &gt;=50) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;中年\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  if (age &gt;= 20){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf (&quot;angthing\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  return 0;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>else if 可以理解为要不然</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int age == 20;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  if (age == 18){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      printf (&quot;满足成年了！\\n&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     //要不然的话</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } else if (age == 30) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      printf (&quot;满足结婚年龄!\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } else if (age == 70) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      printf (&quot;满足养老年龄！\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } else if (age == 100) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      printf (&quot;高寿\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } else {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      printf (&quot;快去睡觉！\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch语句可以嵌套使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    int day;</span></span>
<span class="line"><span>    printf(&quot;请输入一个数字（1-7）：&quot;);</span></span>
<span class="line"><span>    scanf(&quot;%d&quot;, &amp;day);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    switch (day) {</span></span>
<span class="line"><span>        case 1:</span></span>
<span class="line"><span>            printf(&quot;星期一\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 2:</span></span>
<span class="line"><span>            printf(&quot;星期二\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 3:</span></span>
<span class="line"><span>            printf(&quot;星期三\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 4:</span></span>
<span class="line"><span>            printf(&quot;星期四\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 5:</span></span>
<span class="line"><span>            printf(&quot;星期五\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 6:</span></span>
<span class="line"><span>            printf(&quot;星期六\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 7:</span></span>
<span class="line"><span>            printf(&quot;星期日\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            printf(&quot;无效的输入\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>C语言循环基础</strong><br> 首先用的最多是for循环</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">for ( init; condition; increment )</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   statement(s);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for 循环是一种在编程中经常使用的迭代结构，用于重复执行一组语句，直到指定的条件不再满足。for 循环的基本语法如下：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">for (初始化表达式; 循环条件; 迭代表达式)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    循环体语句;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.初始化表达式 (init)：在循环开始之前执行一次。通常用于初始化循环控制变量。这一部分可以包含声明和赋值操作。</p><p>2.循环条件 (condition)：在每次循环迭代之前检查的条件。如果条件为真（true），循环将继续执行；如果条件为假（false），循环将终止。</p><p>3.迭代表达式 (increment)：在每次循环迭代之后执行。通常用于更新循环控制变量的值。</p><p>4.循环体语句 (statement(s))：在每次循环迭代时执行的一组语句。这是循环的主体，包含了实际的操作。</p><p><strong>我会举个简单的例子，利用for循环计算1到5的和</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main() </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int sum = 0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    // 使用 for 循环计算 1 到 5 的和</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    for (int i = 1; i </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">= 5; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        sum += i;// 循环体语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    // 输出结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf(&quot;Sum: %d\\n&quot;, sum);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.首先就是初始化表达式 int i = 1; 在循环开始前初始化循环控制变量 i，i就是1。<br> 2.循环条件 i &lt;= 5 在每次循环迭代前检查 i 是否小于等于 5。<br> 3.迭代表达式 i++ 在每次循环迭代后将 i 的值增加 1。<br> 4.循环体语句 sum += i; 在每次循环迭代时将当前的 i 加到 sum 中。</p><p><strong>sum += i就是 sum = sum + i</strong><br> 循环开始时，sum 的初始值为 0，然后在每次循环中，当前的 i 的值都会加到 sum 上，最终得到 1 到 5 的和。<br> 第一次循环：sum = 0 + 1，sum 的值为 1。<br> 第二次循环：sum = 1 + 2，sum 的值为 3。<br> 第三次循环：sum = 3 + 3，sum 的值为 6。<br> 第四次循环：sum = 6 + 4，sum 的值为 10。<br> 第五次循环：sum = 10 + 5，sum 的值为 15。</p><p>i++（后缀递增）：<br> 先使用当前值，然后再递增。<br> 返回 i 的原始值，然后将 i 增加 1。</p><p>int i = 5;<br> int result = i++;<br> // result = 5, i = 6</p><p>++i（前缀递增）：</p><p>先递增，然后再使用新值。<br> 返回 i 增加 1 后的值。</p><p><strong>在C语言中，for 循环的循环体可以是一个单独的语句，也就是说，你可以在没有大括号的情况下编写 for 循环。如果 for 循环只有一条语句，大括号是可选的</strong> 。<br><strong>在你的代码中，你的 for 循环只有一条语句，因此去掉大括号是合法的。以下是你的代码的修正版：</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main() </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   /* for 循环执行 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   for (int a = 10; a </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 20; a = a + 1) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      printf(&quot;a 的值： %d\\n&quot;, a);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次直接输出10，第二次执行迭代表达式，a 的值: 11 换行继续输出，最后是19</p><p><img src="https://blog.200310.xyz/usr/uploads/2024/02/1163191085.png" alt="屏幕截图 2024-02-20 233732.png" title="屏幕截图 2024-02-20 233732.png"></p><p><strong>求1到100中所有偶数的和</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    // 初始化偶数和为0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int even_sum = 0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    // 使用for循环遍历0到100的偶数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    for (int num = 0; num </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">= 100; num += 2)  //num = num + 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        even_sum += num;    //even_sum = even_sum + num</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    // 打印结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf(&quot;0到100的偶数和为: %d\\n&quot;, even_sum);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://blog.200310.xyz/usr/uploads/2024/02/2460638926.png" alt="屏幕截图 2024-02-20 234256.png" title="屏幕截图 2024-02-20 234256.png"></p><p>在上述的C程序中，初始时 even_sum 被初始化为0，而 num 被设置为0。在第一次循环迭代中，num 的值是0，因此 even_sum 将增加0，即 even_sum 的值仍然是0（even_sum = even_sum + num）。所以，第一次循环迭代后，even_sum 的值仍然是0。第二次循环结果是2.</p><p>在第二次循环迭代中，num 的值已经被自增为2。循环条件 num &lt;= 100 仍然满足，因此循环继续执行。在第二次迭代中，even_sum += num; 将 even_sum 加上 num（此时 num 的值为2），并且 num += 2; 将 num 自增为4。所以，第二次循环迭代后，even_sum 的值是2，而 num 的值变为4。</p><p>这个过程会一直重复，每次迭代都会将 num 的当前值加到 even_sum 中，然后将 num 增加2。最终，当 num 的值超过100时，循环终止。在循环结束时，even_sum 包含了0到100之间所有偶数的总和。</p><p>第一步执行rush = 1;就是初始化表达式，第二步执行循环条件，看rush 是否小于1000 ，第三步执行循环体语句，rush = 1. 第四步执行自加语句rush ++，此时rush 是2。 第五步执行循环条件，rush &lt;= GOLD;即rush &lt;= 1000，第六步执行自增语句，rush变成了3，第七步执行循环体语句，输出 rush = 7;</p><p><strong>以下是一个简单的C语言程序，用于生成斐波那契数列的前n个数字：</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">void generateFibonacci(int n) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int first = 0, second = 1, next, i;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf(&quot;斐波那契数列前 %d 个数字：\\n&quot;, n);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    for (i = 0; i </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        printf(&quot;%d, &quot;, first);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        next = first + second;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        first = second;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        second = next;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int n;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    printf(&quot;请输入要生成的斐波那契数列的数字个数：&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    scanf(&quot;%d&quot;, &amp;n);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    generateFibonacci(n);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>for 循环可以嵌套使用</strong><br><strong>下面用C语言输出九九乘法表</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#include &lt;</span><span style="--shiki-light:white;--shiki-dark:#E06C75;">stdio.h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">int main()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    int row, column;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    for (row = 1; row </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">= 9; row++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        for (column = 1; column </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">= 9; column++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            printf(&quot;%d*%d = %2d\\t&quot;, row, column, row * column);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        printf(&quot;\\n&quot;);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>外层循环 (for (row = 1; row &lt;= 9; row++)): 控制行数，从1到9。</strong></p><p><strong>内层循环 (for (column = 1; column &lt;= 9; column++)): 控制每行中的列数，同样从1到9</strong> 。</p><p>在内层循环中，printf语句输出了每一项的乘法表达式，其中%d*%d = %2d\\t 是格式控制字符串，它表示输出两个整数相乘的结果，其中 %d 是用来格式化整数的占位符，%2d 表示至少输出两个字符的整数，\\t 是制表符（用于在输出中产生水平制表）。</p><p>代码里printf(&quot;%d*%d = %2d\\t&quot;, row, column, row* column); 语句用于输出九九乘法表中每一项的表达式。这样的格式化输出有助于让输出结果整齐对齐，提高可读性。例如，如果乘积是个位数，%2d 会在前面补一个空格，确保每一项的输出都占用两个字符的宽度。\\t 是制表符（用于在输出中产生水平制表）。</p><p>调试：<br><img src="https://blog.200310.xyz/usr/uploads/2024/02/3871918122.png" alt="屏幕截图 2024-02-20 234525.png" title="屏幕截图 2024-02-20 234525.png"></p>`,49)]))}const h=i(e,[["render",p],["__file","C语言复习2.html.vue"]]),k=JSON.parse('{"path":"/%E6%96%87%E7%AB%A0/C%E8%AF%AD%E8%A8%80%E5%A4%8D%E4%B9%A02.html","title":"C语言判断与循环","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-09-24T00:00:00.000Z","category":["C语言"],"tag":["Windows","Visual studio"],"star":true,"description":"C语言判断与循环 判断语句 C 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。 语句 描述 if 语句 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。 if...else 语句 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。 嵌套 if 语句 可以在一个 if 或 else if 语句...","head":[["meta",{"property":"og:url","content":"https://docs.200310.xyz/%E6%96%87%E7%AB%A0/C%E8%AF%AD%E8%A8%80%E5%A4%8D%E4%B9%A02.html"}],["meta",{"property":"og:title","content":"C语言判断与循环"}],["meta",{"property":"og:description","content":"C语言判断与循环 判断语句 C 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。 语句 描述 if 语句 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。 if...else 语句 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。 嵌套 if 语句 可以在一个 if 或 else if 语句..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.200310.xyz/usr/uploads/2024/02/1163191085.png \\"屏幕截图 2024-02-20 233732.png\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"咕咚"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:tag","content":"Visual studio"}],["meta",{"property":"article:published_time","content":"2024-09-24T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C语言判断与循环\\",\\"image\\":[\\"https://blog.200310.xyz/usr/uploads/2024/02/1163191085.png \\\\\\"屏幕截图 2024-02-20 233732.png\\\\\\"\\",\\"https://blog.200310.xyz/usr/uploads/2024/02/2460638926.png \\\\\\"屏幕截图 2024-02-20 234256.png\\\\\\"\\",\\"https://blog.200310.xyz/usr/uploads/2024/02/3871918122.png \\\\\\"屏幕截图 2024-02-20 234525.png\\\\\\"\\"],\\"datePublished\\":\\"2024-09-24T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咕咚\\",\\"url\\":\\"https://github.com/gydchenxiao\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":7.57,"words":2272},"filePathRelative":"文章/C语言复习2.md","localizedDate":"2024年9月24日","excerpt":"\\n<p>判断语句<br>\\nC 语言提供了以下类型的判断语句。点击链接查看每个语句的细节。</p>\\n<p>语句 描述<br>\\nif 语句 一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。<br>\\nif...else 语句 一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。<br>\\n嵌套 if 语句 可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句。<br>\\nswitch 语句 一个 switch 语句允许测试一个变量等于多个值时的情况。<br>\\n嵌套 switch 语句 可以在一个 switch 语句内使用另一个 switch 语句。</p>","autoDesc":true}');export{h as comp,k as data};
