---
layout: article
title: Code Fragments
excerpt: 代码片段（一）
category: tech
tags: javascript
---

# 代码片段

## 快排
- 核心是将元素在一次快排中放到最终index的方法，原理简称挖坑填数吧=-=
- 效率取决于每次base的最终位置，复杂度介于O(nlogn),O(n^2)，已经不会算了=-=

```javascript
function quickSort(arr,low,high){
//这里是升序
  var i = low,
      j = high,
      base = arr[i]; //挖坑，目标数被保存起来，第一个坑位于最左侧：一个小于base的数可以入的坑

  if(i<j){ //结束条件i === j
    while(i<j){
      while(i<j && base < arr[j]){
        j--; //从右寻找第一个小于base的数
      }      
      if(i<j){
        arr[i] = arr[j];
        i++; //填数入坑，被填的数留下了新坑：一个大于base的数可以入的坑
      }
      while(i<j && base>arr[i]){
        i++ //从左寻找第一个大于base的数
      }
      if(i<j){
        arr[j] = arr[i];
        j-- ////填数入坑，被填的数留下了新坑：一个小于base的数可以入的坑
      }                                                         
    }
    //结束循环时，i == j， 即base的最终位置
    arr[i] = base;
    //递归分治
    quickSort(arr, low, i-1);
    quickSort(arr, i+1, high）
  }
}
```
---

## 深拷贝对象的一种实现
一般的浅拷贝只会复制对象的引用，如`Obejct.assign()`

### 思路
- 检查每个元素的类型区分处理
- 使用深度遍历
- 使用`for in`遍历元素

### 代码
```javascript
function deepCopy(obj){
  //处理基础类型
  if(typeof obj !== 'object'){
    return obj;
  }

  //处理引用类型
  var newObj;
  if( obj instanceof Array ){
    newObj = [];
  }else{
    newObj = {};
  }

  //使用for in遍历
  for(key in obj){
    if(typeof obj[key] !== 'object'){
      newObj[key] = obj[key]
    }else{
      newObj[key] = deepCopy(obj[key])
    }
  }
  return newObj;
}
```


### 想法
- Function和其他类型的复制
  - Date类型，可以`geiTime()`转数字
  - Function类型怎么复制。。
- for in的缺陷
  - 顺序问题
  - 各浏览器有实现情况有差异
  - 用`for of`
- 大型对象复制的执行栈溢出
  - 用广度遍历
  - `JSON.stringify()`
