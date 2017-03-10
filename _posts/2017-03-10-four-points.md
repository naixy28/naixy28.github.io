---
layout: article
title: Four points
excerpt: 比较重要的四个原则 -- 可用、健壮、可靠、宽容
category: tech
tags: javascript
---

# 比较重要的四个原则 -- 可用、健壮、可靠、宽容
近日看到一篇叫做[为什么你的前端工作经验不值钱？](https://zhuanlan.zhihu.com/p/25595871)的文章，发现自己积累的一年的前端经验毕竟还是太浅，于是决定实践一下文中提到的四要素。

从一个简单的例子开始，一个生成斐波那契数列的Geneartor，和用于获取第n个斐波那契数的函数。结果通过console输出。

## 可用
> 作为一段需要满足需求的代码来说，它最核心的、最低的要求：可用。

```javascript
function* fib(){
  let [ prev, curr ] = [ 0, 1 ];
  while(true){
    yield curr;
    [ prev, curr ] = [ curr, prev + curr ];
  }
}

function fibPrinter( i ){
  let count = 0;
  for( let n of fib() ){
    if( count === i ){
      console.log(n);
    }
    count++;
  }
}

fibPrinter(1) // 1
fibPrinter(2) // 2
fibPrinter(3) // 3
fibPrinter(4) // 5
```

## 健壮
> 所谓“健壮”，即最基本的兼容性处理、边界处理，异常处理、用户输入校验。很多时候，需求方不会明确告诉你这些逻辑怎么处理，但并不意味着你不需要处理。

```javascript
function fibPrinter( i = 1 ){ // 增加了默认值
  let count = 0;

  // 判断是否为数字
  if( typeof i !== 'number' ){
      return;
  }

  for( let n of fib() ){
    if( count === i ){
      console.log(n);
      return n; // 增加了返回值
    }
    count++;
  }
}
```

## 可靠
> javascript没有强数据类型，函数的返回值也无法强制返回的数据格式。但是作为“可靠”的要求，尽可能在任何情况下，都返回一个可靠的结果，哪怕是异常情况下。

```javascript
function fibPrinter( i = 1 ){
  let count = 0;

    if( typeof i !== 'number' ){
      return 0; // 异常时任然返回数字
    }

  for( let n of fib() ){
    if( count === i ){
      console.log(n);
      return n;
    }
    count++;
  }
}
```

## 宽容
>如果你要想成为一个受欢迎的技术人员，“宽容”是第一步： 对需求宽容、对用户宽容、对调用者宽容、对维护者宽容。

> 如果 n 是一个字符串数字，是否可以允许进入处理流程？

> 如果 n 是一个含有小数的数字，比如 3.000001，是否允许进入处理流程？

> 你的代码中，是否有足够多且清晰的注释？

```javascript
function fibPrinter( i = 1 ){
  let count = 0;

  // if not number
  if( Number.isNaN( +i ) ){
    console.error( `${i} could not become a Number!` );
    return 0;
  }

  // if less than 0
  if( i < 0 ){
    i = -i;
  }

  // round number
  i = ~~i;

  for( let n of fib() ){
    if( count === i ){
      console.log(n);
      return n;
    }
    count++;
  }
}


fibPrinter('a') // 0  log: temp.js:254 a could not become a Number!
fibPrinter('12') // 233
fibPrinter('-12') // 233
fibPrinter(-12) // 233
fibPrinter() // 1
```

## 结尾
以后写代码多想想这些吧。。
