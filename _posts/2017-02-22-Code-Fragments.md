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
