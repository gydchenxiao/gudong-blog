<template><div><h1 id="c语言数组与指针" tabindex="-1"><a class="header-anchor" href="#c语言数组与指针"><span>C语言数组与指针</span></a></h1>
<p>C 语言支持数组数据结构，它可以存储一个固定大小的相同类型元素的顺序集合。数组是用来存储一系列数据，但它往往被认为是一系列相同类型的变量。</p>
<p>数组的声明并不是声明一个个单独的变量，比如 runoob0、runoob1、...、runoob99，而是声明一个数组变量，比如 runoob，然后使用 runoob[0]、runoob[1]、...、runoob[99] 来代表一个个单独的变量。</p>
<p>所有的数组都是由连续的内存位置组成。最低的地址对应第一个元素，最高的地址对应最后一个元素。</p>
<p><img src="https://blog.200310.xyz/usr/uploads/2024/02/2830112454.png" alt="c-arrays-2021-1-18-3.png" title="c-arrays-2021-1-18-3.png"></p>
<p>数组中的特定元素可以通过索引访问，第一个索引值为 0。</p>
<p>C 语言还允许我们使用指针来处理数组，这使得对数组的操作更加灵活和高效。</p>
<p><img src="https://blog.200310.xyz/usr/uploads/2024/02/1323222618.png" alt="c-array-2021-01-18-2.png" title="c-array-2021-01-18-2.png"></p>
<p>直接代码举例，B站视频代码</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#include &#x3C;stdio.h></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 第一个下标（号） </span></span>
<span class="line"><span>    // 第一个0开始，0代码第一个元素，那么第二个下标就是2-1=1，第三个下标：3-1，第四个4-1，第五个5-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 数组类型 数组名称[数组长度]</span></span>
<span class="line"><span>    unsigned plants[5] = { 100, 50, 150, 80, 25 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 数组的元素下标从0开始，规律，下标 = N-1  N代表第几个元素</span></span>
<span class="line"><span>    printf("plant --- %u\n", plants[1]); //下标是1，输出第二个元素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 遍历 数组</span></span>
<span class="line"><span>    for (int i = 0; i &#x3C; 5; i++) {</span></span>
<span class="line"><span>        printf("plant --- %u\n", plants[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我本地visual studio 调试运行</p>
<p><img src="https://blog.200310.xyz/usr/uploads/2024/02/3846327685.png" alt="屏幕截图 2024-02-20 230544.png" title="屏幕截图 2024-02-20 230544.png"></p>
<p><strong>二维数组的比喻</strong></p>
</div></template>


