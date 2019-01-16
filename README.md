# next-is-circular
> Judge object if circular

## install:
```bash
npm install -S afeiship/next-is-circular --registry=https://registry.npm.taobao.org
```

## usage:
```js
var obj2 = { email: '1290657123@qq.com' };
obj2.self = obj2;

nx.isCircular(obj2);// true
```

## resouces:
- https://blog.csdn.net/java_zys/article/details/51258997
- https://github.com/douglascrockford/JSON-js
- http://blog.vjeux.com/2011/javascript/cyclic-object-detection.html
