---
layout: article
title: Getter & Setter Trick
excerpt: Object的getter和setter
category: tech
tags: javascript
---

# Object的getter和setter
> 原文链接[关于Object的getter和setter](https://zhuanlan.zhihu.com/p/25672454)  

## 问题描述
```javascript
// 对于对象o有N个属性，不修改下面代码，编写一段程序获取到对象o的所有属性。
var foo = (function(){
    var o = {
       a: 1,
       b: 2,
       /**更多属性**/
    };
    return function(key) {
        return o[key];
    }
})();
```

## 解决方案
- 利用`Object.defineProperty`为`Object`的原型定义一个新的属性，且在其getter中返回this，再遍历出`keys`
- 为避免属性同名被覆盖，可以用`Symbol`

```javascript
var self = Symbol.for('self');
Object.defineProperty( Object.prototype, self, {
  get(){
    return this;
  }
})

foo(self)
// Object {a: 1, b: 2}
Object.keys(foo(self))
// ["a", "b"]
```

## 其他的写法
```javascript
// 字面量定义
var test = {
    get o(){
        console.log('监听到正在获取属性o的值');
        return this._o;
    },
    set o(v){
        console.log('监听到正在设置属性o的值为：' + v);
        this._o = v;
        return this._o;
    }
}

// deprecated __define...
var test = {};

test.__defineGetter__('o', function(){
    console.log('监听到正在获取属性o的值');
    return this._o;
});

test.__defineSetter__('o', function(v){
    console.log('监听到正在设置属性o的值为：' + v);
    this._o = v;
    return this._o;
});

/// Object.defineProperties
var test = {};

Object.defineProperties(test, {
  o: {
     get() {},
     set(v) {}
  },
  p: {
    get() {},
    set(v) {}
  }
});

```

## 思考
利用`setter,getter`这个机制可以简单地做双向绑定
