# 小程序公告


<img src="/gif1.gif">


wxml

```js
<view class="marquee_container" style="--marqueeWidth--:-15em">
  <view class="marquee_text">一个人活着就是为了让更多的人更好的活着！</view>
</view>
```

wxss

```css
/*首页跑马灯效果*/
@keyframes around {
  from {
    margin-left: 100%;
  }

  to {
    /* var接受传入的变量 */
    margin-left: var(--marqueeWidth--);
  }
}

.marquee_container {
  background-color: #fe4655;
  height: 50rpx;
  line-height: 44rpx;
  position: relative;
  width: 100%;
  margin-top: 0rpx;
}

.marquee_container:hover {
  /* 不起作用 */
  animation-play-state: paused;
}

.marquee_text {
  color: #fff;
  font-size: 28rpx;
  display: inline-block;
  white-space: nowrap;
  animation-name: around;
  animation-duration: 10s;
  /*过渡时间*/
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
```
