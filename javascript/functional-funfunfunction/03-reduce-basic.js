/*
 *  Learn funtional programming javascript from funfunfunction
 *  own implement "reduce" basic function
 */

/* implement own reduce function */
var array = {
  data: [
    {value: 200},
    {value: 199},
    {value: 400},
    {value: 600},
  ],
  reduce: function(callback, init) {
    for (var i=0; i<this.data.length; i++) {
      init = callback(init, this.data[i]);
    }
    return init;
  }
};

var summary = function(sum, order) {
  return sum + order.value;
}

/* Im = implement, Df = defult */
var valueIm = array.reduce(summary, 0);
var valueDf = array.data.reduce(summary, 0);
/* es6 way, nice form */
var es6 = array.reduce((sum, order) => sum + order.value, 0);

console.log(valueIm);
console.log(valueDf);
console.log(es6);