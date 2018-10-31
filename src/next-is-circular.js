(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isCircular = function(inTarget) {
    var result = false;
    try {
      JSON.stringify(inTarget);
    } catch (_) {
      result = true;
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isCircular;
  }
})();
