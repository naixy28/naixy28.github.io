---
layout: article
title: Simple Throttle
excerpt: 简易的throttle(节流)
category: tech
tags: javascript
---

# 简易的throttle(节流)
常用于延迟响应事件，若连续触发则会保持一定时间间隔触发，参考了`underscore`

## 代码

```javascript
function myThrottle(func,wait){
    var timeout, content, args, previous,now,remaining;

    function later(){
        func.apply(content,args);
    }

    return function(){
        content = this;
        args = arguments;
        now = +new Date()

        if(!previous){
        //若第一次触发
            timeout = setTimeout( later, wait );
            previous = now;
        }else{
        //非第一次触发，计算剩余时间
            remaining = wait - now + previous;

            if(remaining<=0){
            //无脑重复了代码。。肯定能优化
                timeout = setTimeout( later, wait );
                previous = now;
            }
        }
    }
}
```

## 测试配套
效果为，若连续输入字符，会间隔一秒触发更新dom事件

[实例](https://jsfiddle.net/naixy28/tr15ns64/)

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

## 原版

> [引用自](http://www.cnblogs.com/fsjohnhuang/p/4147810.html)

```javascript
_.throttle = function(func, wait, options) {
    /* options的默认值
     *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
     *  options.leading = true;
     * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
     *  options.trailing = true;
     * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
     */
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      // 计算剩余时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      // 当到达wait指定的时间间隔，则调用func函数
      // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
      if (remaining <= 0 || remaining > wait) {
        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        // options.trailing=true时，延时执行func函数
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
```