// let arr = [1, 2, 3, 4]
// let sumArr = [arr, 5]
// let concateArr = [...arr, 5]

// console.log(sumArr) // [[1, 2, 3, 4], 5]
// console.log(concateArr) // [1, 2, 3, 4, 5]


let obj = {
  username: 'nqmts',
  firstname: 'nqmt',
  lastname: 'whyloop'
}

let obj2 = {
  username: 'nqmts2',
  firstname: 'nqmt2',
  lastname: 'whyloop2'
}
const funcArgument = (num, { username, ...rest }, {username, ...rest2}) => console.log(username)
funcArgument('name', obj, obj2)
// let sumObj = { obj, email: 'nqmt@whyloop.com' } // { obj: { username: 'nqmt', firstname: 'nqmt', lastname: 'whyloop' },email: 'nqmt@whyloop.com' }
// let concateObj = { ...obj, email: 'nqmt@whyloop.com' }
// console.log(concateObj)



// import { add } from './export'
// import str from './export'
// console.log(add(1, 2))
// console.log(str)