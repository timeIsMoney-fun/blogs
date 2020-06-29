# Vue组将封装

## 日历组件封装

**效果**

<img :src="$withBase('/vueC1.gif')" alt="vue">


**父组件使用**

``` js
<template>
  <div>
    <datepick v-model="date"/>
  </div>
</template>

<script>
import datepick from './datepick'
export default {
  components: {
    datepick
  },
  data() {
    return {
      date: new Date()
    }
  },

}
</script>

<style>

</style>
```


**子组件封装**



``` js
<template>
  <div class="box" v-click-outside>
    <input type="text" :value="formatDate">
    <div v-if="isVisible" class="pannel">
      <div class="pannel-nav">
      <span @click="prevYear"> < </span>
        <span @click="prevMonth"> << </span>
        <span>{{time.year}}年</span>
        <span>{{time.month +1}}月</span>
        <span @click="nextMonth">>></span>
        <span @click="nextYear">></span>
    </div>
    <div class="pannel-content">
      <span v-for="item in week" :key="item">
        {{item}}
      </span>
      <div class="days">
        <div v-for="i in 6" :key="i">
          <span
            v-for="j in 7"
            :key="j"
            class="cell"
            :class="[
              {notCurrerntMonth:!isCurrerntMonth(visibleDays[(i-1) * 7 + (j-1)])},
              {today: isToday(visibleDays[(i-1) * 7 + (j-1)])},
              {select: isSelect(visibleDays[(i-1) * 7 + (j-1)])}
            ]"
            @click="handleChooseDate(visibleDays[(i-1) * 7 + (j-1)])"
          >
            {{ visibleDays[(i-1)*7 + (j-1)].getDate() }}
          </span>
        </div>
      </div>
    </div>
    <div class="pannel-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    let { year, month } = this.getYearMonthDay(this.value)
    return {
      week: ['日', '一', '二', '三', '四', '五', '六'],
      time: {
        year,
        month
      },
      isVisible: false
    }
  },
  directives: {
    clickOutside: {
      // 自定义指令的生命周期
      // el: 指令所绑定的元素，可以用来直接操作DOM。
      // binding:  一个对象，包含指令的很多信息。
      // vnode: Vue编译生成的虚拟节点。
      bind(el,binding,vnode) { // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
        // 把事件绑定给document上，看一下点击得是否是当前的这个元素内部
        let handler = (e) => {
          if (el.contains(e.target)) { // el.contains(e.target) 原生dom操作
            if (!vnode.context.isVisible) {
               vnode.context.hanldeFocus()
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.handleBlur()
            }
          }
        }
        document.addEventListener('click',handler)
      }
    }
  },
  computed: {
    formatDate() {
      let {year,month,day} = this.getYearMonthDay(this.value)
      return `${year}-${month + 1}-${day}`
    },
    visibleDays() {

      let {year, month} = this.getYearMonthDay(this.getDate(this.time.year, this.time.month,1))
      // 获取当前月份的第一天
      let currentDay = this.getDate(year,month,1)
      
      // 获取第一天是周几
      let week = currentDay.getDay()
      
      // 计算当月开始的天数
      let startDay = currentDay - week * 60 * 60 *24 * 1000
      
      // 循环42天
      let arr = []
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 24 * 1000))
      }
      return arr
    },
    
    
  },
  methods: {
    hanldeFocus() {
      this.isVisible = true // 显示面板
    },
    handleBlur() {
      this.isVisible = false // 隐藏面板
    },
    // 获取年月日
    getYearMonthDay(date) {
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return {year, month, day}
    },
    getDate(year, month, day) {
      return new Date(year, month, day)
    },
    // 是否当月
    isCurrerntMonth(date) {
      // 传入值匹配当前年月
      let {year,month}  = this.getYearMonthDay(this.getDate(this.time.year,this.time.month,1))
      let {year:y, month:m} = this.getYearMonthDay(date);
      
      return year === y && month === m
    },
    // 是否今天
    isToday(date) {
      let {year,month,day} = this.getYearMonthDay(new Date())
      let {year:y, month:m, day:d} = this.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    // 是否被选中
    isSelect(date) {
      let {year,month,day} = this.getYearMonthDay(this.value)
      let {year:y, month:m, day:d} = this.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    // 改变input value
    handleChooseDate(date) {
      this.time = this.getYearMonthDay(date)
      this.$emit('input',date)
      // this.handleBlur()  // 关闭日历模板
    },
    // 上一个月
    prevMonth() {
      let d = this.getDate(this.time.year,this.time.month,1)
      d.setMonth(d.getMonth()-1)
      this.time = this.getYearMonthDay(d)
    },
    // 下一个月
    nextMonth() {
      let d = this.getDate(this.time.year,this.time.month,1)
      d.setMonth(d.getMonth() + 1)
      this.time = this.getYearMonthDay(d)
    },
    // 上一年
    prevYear() {
      let d = this.getDate(this.time.year,this.time.month,1)
      d.setFullYear(d.getFullYear() - 1)
      this.time = this.getYearMonthDay(d)
    },
    // 下一年
    nextYear() {
      let d = this.getDate(this.time.year,this.time.month,1)
      d.setFullYear(d.getFullYear() + 1)
      this.time = this.getYearMonthDay(d)
    }
  }
}
</script>

<style scoped lang="less">
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pannel {
  width: 32 * 7px;
  background: #fff;
  margin-top: 10px;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;
  position: relative;
  .pannel-nav {
    display: flex;
    justify-content: space-around;
    height: 30px;
    user-select: none;
    span {
      cursor: pointer;
    }
  }
  .pannel-content {
    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      font-weight: bold;
      box-sizing: border-box;
    }
    .cell {
      cursor: pointer;
    }
    .cell:hover {
      border: 1px solid pink;
    }
    .notCurrerntMonth {
      color: gray;
    }
    .today {
      background: red;
      color: white;
    }
    .select {
      background: pink;
      color: white;
    }
  }
}
</style>
```