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
