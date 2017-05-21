/*
 *  Learn funtional programming javascript from funfunfunction
 *  own implement "filter" function
 */

/* implement own filter function */
var array = {
  data: [
    {name: 'Antonia', company: 'whyloop'},
    {name: 'Kyle', company: 'Woods'},
    {name: 'Russell', company: 'Diaz'},
    {name: 'Mark', company: 'whyloop'},
    {name: 'William', company: 'Woods'},
    {name: 'Wayne', company: 'Diaz'},
  ],
  filter: function(callback) {
    var store = [];
    for (var i=0; i<this.data.length; i++) {
      if (callback(this.data[i])) {
        store.push(this.data[i]);
      }
    }
    return store;
  }
};

var isCompany = function(data) {
  return data.company === "whyloop";
}

/* Im = implement, Df = defult */
var filterIm = array.filter(isCompany);
var filterDf = array.data.filter(isCompany);

console.log(filterIm);
console.log(filterDf);