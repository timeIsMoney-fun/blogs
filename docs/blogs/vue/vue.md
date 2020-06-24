# Vue

::: tip

PS:这里不会写的很详细，只是把常用的东西放上来
:::

## Vue 是什么？

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

### 学习 Vue 最好的途径！

当然是官网啦,没有比官网更详细的教程了.. https://cn.vuejs.org/v2/guide/

## Vue 的生命周期

::: tip
PS:为了更好的使用 Vue，生命周期是必须掌握的！！！
:::

### 先来一张图(看不到可以另存)

<img :src="$withBase('/vue.png')" alt="dock">

### 创建期间的生命函数

**beforeCreate**

表示实例完全被创建出来之前，会执行它，只有一个默认的生命周期和默认的事件，其他东西都还没初始化
注意：在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化

**created** <br/>
在 created 中，data 和 methods 都已经被初始化好了！
**beforemoute**

模板在内存中编译好了，但是未加载到页面中去，此时，页面的内容还是旧的

**mounted**

此时整个 vue 实例已经加载完毕了，进入运行阶段

### 运行期间的生命周期函数

**beforeUpdate**

状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染 DOM 节点

**updated**
实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
注意：如果数据未更新，不会执行此阶段

### 销毁期间的生命周期函数

**beforeDestroy**

实例销毁之前调用。在这一步，实例仍然完全可用。

**destroyed**

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

## 指令

### {{}} 插值表达式

只会替换自己的占位符，不会清空文本内容 只能输出普通文本

### v-clock

解决插值表达式闪烁的问题

### v-text

没有闪烁问题，会覆盖元素中原本的内容 不会解析标签,只会输出普通文本

### v-html

与 text 差不多，但是会解析标签

### v-bind

简写 : 提供绑定属性的指令

### v-on

简写 @ 事件绑定 例如:click、change

### v-if(隐藏元素)

会整个清除,适用于直接删除的，不再显示的元素

### v-show(隐藏元素)

加 display 属性，适用于频繁显示隐藏的元素

### v-model(动态更新视图)

双向绑定,只适用表单元素

### v-for（循环遍历数组、对象）

```js
迭代数组
<li v-for="(item, i) in list">索引：{{i}} --- 姓名：{{item.name}} --- 年龄：{{item.age}}</li>
迭代对象中的属性
<div v-for="(val, key, i) in userInfo">{{val}} --- {{key}} --- {{i}}</div>
迭代数字
<p v-for="i in 10">这是第 {{i}} 个 P 标签</p>

```

### 事件修饰符

特点：修饰符可以串联,会从左到右按顺序执行

```js
<a v-on:click.stop.prevent="doThat"></a>
```

```js
// 方法
.stop
阻止冒泡
.pervent
阻止跳转
.capture
实现捕获触发事件的机制
.self
会阻止自身的冒泡，不会阻止其他的
.once
只触发一次事件处理函数
```

## 使用样式

### 使用 class 样式

**数组：**

```js
<h1 :class="['red', 'thin']">这是一个邪恶的 H1</h1>
```

**三元：**

```js
<h1 :class="['red', 'thin', isactive?'active':'']">这是一个邪恶的 H1</h1>
```

**嵌套对象**

```js
<h1 :class="['red', 'thin', {'active': isactive}]">这是一个邪恶的 H1</h1>
```

**使用对象：**

```js
<h1 :class="{red:true, italic:true, active:true, thin:true}">
  这是一个邪恶的 H1
</h1>

```

## 使用内联样式

### 通过 :style 的形式，书写样式对象

```js
<h1 :style="{color: 'red', 'font-size': '40px'}">这是一个善良的 H1</h1>
```

### 在 data 上定义样式

```js
<h1 :style="h1StyleObj">这是一个善良的 H1</h1>
```

```js
data: {
    h1StyleObj: { color: 'red', 'font-size': '40px', 'font-weight': '200' }
}
```

### 通过属性绑定的形式，将样式对象应用到元素中

```js
  <h1 :style="[h1StyleObj, h1StyleObj2]">这是一个善良的H1</h1>

```

## 指令(directive)

### 全局写法

**Vue.directive(绑定的指令, 对象);**

```js
// 获取焦点
Vue.directive("focus", {
  inserted: function(el, binding) {
    el.focus();
  },
});
```

### 局部写法(写在局部组件的 data)

**directives: {绑定的指令: 对象 }**

```js
 directives: {
    color: {
            // 指令的定义
            bind: function (el,binding) {
                el.style.color=binding.value
            }
    }
 }
// 简写形式,相当于同时调用了，bind和updated方法
directives:{
  focus:function (el) {
    el.focus()
  }
}

```

### 注意点

调用的时候，指令名称前要加上 v- 前缀来调用

### 对象的里的方法（钩子函数）

bind:funtion(el,binding){}

```js
指令绑定到元素上的时候，会执行bind，执行一次
特点：加在到内存中
样式相关的行为，就用bind
```

### inserted:funtion(el，binding){}

```js
元素插入dom的时候，会执行inserted，执行一次
特点：加在到页面上
和JS行为有关的，就用inserted，防止JS行为不生效
```

### updated:funtion(el，binding){}

```js
VNode更新的时候会执行updated，可能触发多次
```

### 钩子函数的参数：

```js
参数一：el 指的是指令绑定的元素，指定加在谁身上，el参数是一个原生JS对象
参数二：binding,是一个对象，有相关属性
name：指令名，不包括 v- 前缀。
value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2
expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"
arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"
```

## 过滤器(filter)

#### 概念

```js
Vue.js 允许你自定义过滤器，可被用作一些常见的文本格式化。
过滤器可以用在两个地方：mustache 插值和 v-bind 表达式*。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道（|）”符指示；
经常拿来做一些字符串的替换、时间换算等等
```

### 全局过滤器

```js
定义：调用Vue.filter方法
特点：所有VM实例都共享
Vue.filter(过滤器名称, function (参数1) {})
	参数1为管道符前面的数据

```

### 私有过滤器

```js
定义：在实例化的Vue对象里，加一个filters方法
filters{ 过滤器名称 : function (参数1){}}
	参数1为管道符前面的数据
```

### 注意：

- 私有过滤器调用时，过滤器跟全局过滤器名定义名称一样时，采用就近原则，优先调用私有过滤器
- 调用过滤器可以传多个参数
- 可以多次调用过滤器，用管道符( | )隔开,从左往右依次执行
- 过滤器中的 this 是 window

```js
<p>{{ msg | msgFormat('疯狂+1', '123') | test | test1}}</p>
```

## 计算属性(computed)

### 定义

可以定义一些【计算属性】,本质上是一个方法，使用 这些计算属性的时候，是把它们的名称，直接当作属性来使用的；并不会把 计算属性，当作方法去调用；

### 注意点：

1. 计算属性，在引用的时候，一定不要加 () 去调用，直接把它 当作 普通 属性去使用就好了
2. 计算属性，这个 function 内部，所用到的 任何 data 中的数据发生了变化，就会 立即重新计算 这个 计算属性的值
3. 计算属性的求值结果，会被缓存起来，方便下次直接使用； 如果 计算属性方法中的数据都没有发生过变化，则不会重新对计算属性求值；

### 特点

计算属性是基于它们的响应式依赖进行缓存的,只在相关响应式依赖发生改变时它们才会重新求值,有利于节省内存开销

### 官方例子

```js
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    },
  },
});
```

```js
// 输出
Original message: "Hello"
Computed reversed message: "olleH"
```

### 动态获取数据

```js
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar",
  },
  computed: {
    fullName: {
      // getter 获取变化的数据
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // setter 设置新的数据
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
});
```

## 侦听器(watch)

**watch(newVal，oldVal)**

### 作用：

可以监视 data 中指定数据的变化,然后触发这个 watch 中对应的 function 处理函数
主要用来监听非 DOM 元素
参数 1：修改的新值
参数 2：没有修改前的值

### 使用

```js
<div id="demo">{{ fullName }}</div>
```

```js
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar",
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    },
  },
});
```

### 深度侦听

**作用：主要用来侦听对象，普通侦听无法侦听到对象**

```js
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar",
  },
  watch: {
    firstName: {
      handler(newName, oldName) {
        this.fullName = newName + " " + this.lastName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true,
      // 是否开启深度侦听
      deep: true,
    },
  },
});
```
