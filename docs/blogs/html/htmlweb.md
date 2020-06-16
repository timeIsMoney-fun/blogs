# 实时通讯

## 为什么使用 WebSocket

::: details
想要实时获取信息、动态等，以前的做法是使用 ajax 轮询，但是轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）
:::

## WebSocket 的好处

::: details
它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，这样我们就不需要通过轮询来获取实时动态了
:::

- 建立在 TCP 协议之上，服务器端的实现比较容易。
- 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
- 数据格式比较轻量，性能开销小，通信高效。
- 可以发送文本，也可以发送二进制数据。
- 没有同源限制，客户端可以与任意服务器通信。
- 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。

## 简单示例

```js
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) {
  console.log("Connection open ...");
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log("Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};
```

## API

## WebSocket 构造函数

```js
let ws = new WebSocket("ws://接口Url");
```

readyState

::: details
readyState 属性返回实例对象的当前状态，共有四种。
:::

```js
CONNECTING：值为0，表示正在连接。
OPEN：值为1，表示连接成功，可以通信了。
CLOSING：值为2，表示连接正在关闭。
CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
```

## onopen

::: details
用于指定连接成功后的回调函数
:::

```js
ws.onopen = function() {
  ws.send("Hello Server!");
};
```

::: details
如果要指定多个回调函数，可以使用 addEventListener 方法

:::

```js
ws.addEventListener("open", function(event) {
  ws.send("Hello Server!");
});
```

## onclose

::: details
用于指定连接关闭后的回调函数

:::

```js
ws.onclose = function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener("close", function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
});
```

## onmessage

::: details
用于指定收到服务器数据后的回调函数
:::

```js
ws.onmessage = function(event) {
  var data = event.data;
  // 处理数据
};

ws.addEventListener("message", function(event) {
  var data = event.data;
  // 处理数据
});
```

服务器数据可能是文本，也可能是二进制数据(blob 对象或 Arraybuffer 对象)

```js

ws.onmessage = function(event){
  <!-- 文本字符串 -->
  if(typeof event.data === String) {
    console.log("Received data string");
  }

  <!-- 二进制对象 -->
  if(event.data instanceof ArrayBuffer){
    var buffer = event.data;
    console.log("Received arraybuffer");
  }
}


```

## send

用于向服务器发送数据

## 发送文本的例子

```js
ws.send("your message");
```

## 发送 Blob 对象的例子

```js
var file = document.querySelector('input[type="file"]').files[0];
ws.send(file);
```

## 发送 ArrayBuffer 对象的例子

```js
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i < img.data.length; i++) {
  binary[i] = img.data[i];
}
ws.send(binary.buffer);
```

## onerror

用于指定报错时的回调函数。

```js
socket.onerror = function(event) {
  // handle error event
};

socket.addEventListener("error", function(event) {
  // handle error event
});
```
