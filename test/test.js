var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-is-circular');

describe('next/isCircular', function() {
  it('nx.isCircular', function() {
    var obj1 = { name: 'fei' };
    var obj2 = { email: '1290657123@qq.com' };
    obj2.self = obj2;

    nx.isCircular(obj1, false);
    nx.isCircular(obj2, true);
  });
});
