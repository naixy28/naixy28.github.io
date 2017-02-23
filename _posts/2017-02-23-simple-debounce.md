---
layout: article
title: Simple Debounce
excerpt: 简易的debounce(去抖动)
category: tech
tags: javascript
---

# 简易的debounce(去抖动)
常用于延迟响应事件，若连续触发则会重新开始计时，参考了`underscore`

## 代码

```javascript
function myDebounce(func,wait){
  var timeout,content,args //用闭包保留被包装函数的上下文和入参

  function later(){
    func.apply(content,args) //包装一下真正要执行的函数，传入上下文及入参
  }

  return function(){
    content = this;
    args = arguments;

    timeout&&clearTimeout(timeout); //若已不是第一次触发，则清空原本的计时器

    timeout = setTimeout(later ,wait); //获取计时器id用于clear

  }
}
```

## 测试配套

[实例](https://jsfiddle.net/naixy28/agtuv1an/)

```javascript
var log = console.log.bind(console)

var node = document.querySelector('#test1');

node.addEventListener('input', myDebounce(ajaxCall,1000) )

function ajaxCall(data){
  setTimeout(log,50,'Sent value: ' , this.value)
  document.querySelector('#test2').innerText = this.value;
}
```

```html
<input type="text" id="test1" name="" value="">
<div id="test2"></div>
```

## 想法
- 装饰者模式
- underscore中更复杂的逻辑
- 类似的`throttle`方法
