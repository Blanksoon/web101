/*
 *  Learn funtional programming javascript from funfunfunction
 *  own implement "map" function
 */

/* implement own map function */
var array = {
  data: [
    {name: 'Antonia', company: 'whyloop'},
    {name: 'Kyle', company: 'Woods'},
    {name: 'Russell', company: 'Diaz'},
    {name: 'Mark', company: 'whyloop'},
    {name: 'William', company: 'Woods'},
    {name: 'Wayne', company: 'Diaz'},
  ],
  map: function(callback) {
    var store = [];
    for (var i=0; i<this.data.length; i++) {
      store.push(callback(this.data[i]));
    }
    return store;
  }
};

var isTransform = function(data) {
  return data.name;
}

/* Im = implement, Df = defult */
var nameIm = array.map(isTransform);
var nameDf = array.data.map(isTransform);
/* es6 way, nice form */
var es6 = array.map(data => data.name + ' nice form es6');

console.log(nameIm);
console.log(nameDf);
console.log(es6);