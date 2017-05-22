'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// let arr = [1, 2, 3, 4]
// let sumArr = [arr, 5]
// let concateArr = [...arr, 5]

// console.log(sumArr) // [[1, 2, 3, 4], 5]
// console.log(concateArr) // [1, 2, 3, 4, 5]


var obj = {
  username: 'nqmts',
  firstname: 'nqmt',
  lastname: 'whyloop'
};

var obj2 = {
  username: 'nqmts2',
  firstname: 'nqmt2',
  lastname: 'whyloop2'
};
var funcArgument = function funcArgument(num, _ref, _ref2) {
  var username = _ref.username,
      rest = _objectWithoutProperties(_ref, ['username']);

  var username2 = _ref2.username2,
      rest2 = _objectWithoutProperties(_ref2, ['username2']);

  return console.log(username);
};
funcArgument('name', obj, obj2);
// let sumObj = { obj, email: 'nqmt@whyloop.com' } // { obj: { username: 'nqmt', firstname: 'nqmt', lastname: 'whyloop' },email: 'nqmt@whyloop.com' }
// let concateObj = { ...obj, email: 'nqmt@whyloop.com' }
// console.log(concateObj)


// import { add } from './export'
// import str from './export'
// console.log(add(1, 2))
// console.log(str)