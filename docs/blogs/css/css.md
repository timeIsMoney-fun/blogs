# css 小字典

## Background

### 线型渐变

```js

 background: linear-gradient(to 方向,颜色)

```

### 背景图片滚动方式

```js
 background-attachment:scroll   // 背景图片随页面的其余部分滚动。这是默认
 background-attachment:fixed    // 背景图固定
```

### 背景图片大小设置

```js
background-size:100%   // 继承父元素宽、高随自身
background-size:100% 100%  // 宽、高继承父元素宽高
background-size:contain  // 图片一定会全部显示，但是盒子会有空白
background-size:cover  // 图片一定会铺满盒子，但是图片部分区域不可见
```
## textarea(文本域)

### 禁止拖拽
``` js
resize: none
```


### cursor(鼠标图标)

``` js
default	默认(箭头)
pointer	点击光标(小手)
move	移动光标
wait	载入光标
not-allowed	禁止光标
text	文本光标
help	帮助光标
```

### outline 外轮廓线/高亮线
``` js

outline:none   去掉高亮
```

# 滚动
## 嵌套滚动
``` js
// 父滚动不触发
overscroll-behavior: contain;
-ms-scroll-chaining: contain;
```


## transition(动画过渡)
### 连写

``` js
transition: property duration timing-function delay;
<!-- 对应属性 -->
property：过渡的属性名称，例如 width height
duration：过渡的时间,例如 2s
timing-function：过渡的运动速度曲线
delay：动画延迟启动，默认不延迟，设置了几秒就延迟几秒
```

### 运动曲线(timing-function)

``` js
linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
```

### 浏览器兼容
``` js
width:100px;
transition: width 2s;
-moz-transition: width 2s; /* Firefox 4 */
-webkit-transition: width 2s; /* Safari 和 Chrome */
-o-transition: width 2s; /* Opera */

```

## transform (2D/3D 转换)
### 语法
``` js

none	定义不进行转换。
matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
translate(x,y)	定义 2D 位移。
translate3d(x,y,z)	定义 3D 位移。
translateX(x)	只是用 X 轴的位移。
translateY(y)	只是用 Y 轴的位移。
translateZ(z)	定义 3D 转换，只是用 Z 轴的位移。
scale(x,y)	定义 2D 缩放转换。
scale3d(x,y,z)	定义 3D 缩放转换。
scaleX(x)	通过设置 X 轴的值来定义缩放转换。
scaleY(y)	通过设置 Y 轴的值来定义缩放转换。
scaleZ(z)	通过设置 Z 轴的值来定义 3D 缩放转换。
rotate(angle)	定义 2D 旋转，在参数中规定角度。
rotate3d(x,y,z,angle)	定义 3D 旋转。
rotateX(angle)	定义沿着 X 轴的 3D 旋转。
rotateY(angle)	定义沿着 Y 轴的 3D 旋转。
rotateZ(angle)	定义沿着 Z 轴的 3D 旋转。
skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换。
skewX(angle)	定义沿着 X 轴的 2D 倾斜转换。
skewY(angle)	定义沿着 Y 轴的 2D 倾斜转换。
perspective(n)	为 3D 转换元素定义透视视图。
```



### 浏览器兼容

``` js
transform:rotate(7deg);
-ms-transform:rotate(7deg); 	/* IE 9 */
-moz-transform:rotate(7deg); 	/* Firefox */
-webkit-transform:rotate(7deg); /* Safari 和 Chrome */
-o-transform:rotate(7deg); 	/* Opera */
```


## Animate(动画过渡)

::: tip
一个很好用的动画库 https://daneden.github.io/animate.css/

:::

### 写法
### 引用
- animation：定义的 keyframes

### 定义

- 百分比写法
``` js
@keyframes 自定义名称
{
  0%   { 需变化的属性 }
  25%  { 需变化的属性 }
  50%  { 需变化的属性 }
  100% { 需变化的属性 }
}
```


- from and to

``` js
@keyframes 自定义名称
{
  from {需变化的属性}
  to {需变化的属性}
}
```


### 连写

``` js
animation: myfirst 5s linear 2s infinite alternate;
/* Firefox: */
-moz-animation: myfirst 5s linear 2s infinite alternate;
/* Safari 和 Chrome: */
-webkit-animation: myfirst 5s linear 2s infinite alternate;
/* Opera: */
-o-animation: myfirst 5s linear 2s infinite alternate;

<!-- 对应属性 -->
第一个参数：定义的动画名
第二个参数：动画时长
第三个参数：动画运动曲线 // ease(默认，由慢到快) linear(匀速) ease-in(低速开始) ease-out(低速结束) ease-in-out(低速结束、开始)
第四个参数：延迟启动
第五个参数：播放次数  // infinite(无限播放)  n(输入次数，n为几就播放几次)
第六个参数：是否逆向播放  // alternate(开启逆向) normal(默认正常播放)
```

## 浏览器兼容
``` js

<!-- myfirst 为你规定的keyframes，即动画名称 -->
animation: myfirst 5s;
-moz-animation: myfirst 5s;	/* Firefox */
-webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
-o-animation: myfirst 5s;	/* Opera */
```