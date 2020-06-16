# 跨文档交流

::: details
跨文档消息传送，也简称为 XDM，指的是来自不同域页面间传递消息。 使用场景：iframe 的使用，父子页面的数据传输
:::

## ifarme

这里不多做介绍。就提几点需要注意的：
1.https 协议下的 ifarem 是无法打开 http 协议的页面的，因为不安全

```js
解决办法：
1.购买SSL ，http添加证书变为https(有免费的SSL，需要自己去搜索)

2.通过配置nginx代理，映射到当前https的域名
```

2.页面中，父子页面处于不同域名下时，父子页面无法获得对方 document 的操作权限，包括高度等的获取 场景：嵌套子页面以后，父页面需要获取子页面的高度，因为跨域的原因，无法获取，因为无法获得子页面的 dom 的操作权限

```js
解决办法：
1. nginx代理，将子页面映射到当前父页面域名下(有诸多弊端，比如子页面的一些资源情况等等，很难去处理)

2.利用postMessage 和 message的方法。（前提是双方都需要修改自己的代码）
因为有很多情况 是我们去放置第三方的页面，只能对自身的代码进行修改，所以这种方法有限制
```

## postMessage 与 message 的具体用法

场景：home.html（父页面） msg.html（子页面）

```js
 home.html
<body>
<iframe src='msg.html' width='400' height ='400' onload='sendMsg()' is='iframe'></iframe>
<script>
function sendMsg(){
	var iframes = document.getElementById('iframe').contentWindow;
	var list = {'name':'张三','age':18};
	// postMessage 第一个参数：需要传递的消息内容
	// 第二个参数：接受消息的对象窗口Url,一般与iframe的src一致(用于安全考虑)
	setTimeout(function(){
		iframes.postMessage(list,'http://xxxxxx');
	},1000)
}
</script>

</body>

```

```js
msg.html

<body>
<script>
//event.data 传过来的数据 event.origin 第二个参数 ，eventsource 作为目标文档的window的引用，作为单次握手的操做回应
window.addEventListener('message', function(event) {
	if(event.origin == 'http://xxxxxx'){
		var data = event.data;
		console.log("收到了数据： ",data);
		setTimeout(function(){
			event.source.postMessage('已经收到了消息')
		},2000)
	}
}, false);

</script>

</body>

```

## 同域名的情况下

```js
<script>
function sendMsg(){
	try{
		var iframe = document.getElementById(id);
		if(iframe.attachEvent){
			iframe.attachEvent("onload", function(){
				iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
			});
			return;
		}else{
			iframe.onload = function(){
				iframe.height = iframe.contentDocument.body.scrollHeight;
			};
			return;
		}
	}catch(e){
		throw new Error('setIframeHeight Error');
	}
}

//attachEvent——兼容：IE7、IE8；不兼容firefox、chrome、IE9、IE10、IE11、safari、opera
//scrollHeight  这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。(就是页面文档内容的高度)

</script>
```
