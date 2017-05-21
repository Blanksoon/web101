/*
 *  Learn funtional programming javascript from funfunfunction
 *  own implement "reduce practical" basic function
 */
// import fs from 'fs'; // es6 style not competitible with nodejs v6.10.0 
var fs = require('fs');

/* Note if not spacify utf8 it's byte buffer*/
var output = fs.readFileSync('04-data.txt', 'utf8')
  .trim()  // delete enline have not string, another space at the end of string.
  .split('\n')  // split string to array
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers;
  }, {})
// .map(line => line.split('\t'))

console.log(output);
// console.log('output: ', JSON.stringify(output, null, 1));


/* Clean way */ 
const output = fs.readFileSync('data.txt', 'UTF8')
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((customers, [name, order, price, quantity]) => {
    customers[name] = customers[name] || [];
    customers[name].push({ order, price, quantity });
    return customers;
  }, {});


/* 
FILE: 04-data.txt
=================
mark johansson	waffle iron	80	2
mark johansson	blender	200	1
mark johansson	knife	10	4
Nikita Smith	waffle iron	80	1
Nikita Smith	knife	10	2
Nikita Smith	pot	20	3

OUTPUT
======
{
  "mark johansson": [
      "price": "80",
      "quantity": "2\r"
    },
    {
      "name": "blender",
      "price": "200",
      "quantity": "1\r"
    },
    {
      "name": "knife",
      "price": "10",
      "quantity": "4\r"
    }
  ],
  "Nikita Smith": [
    {
      "name": "waffle iron",
      "price": "80",
      "quantity": "1\r"
    },
    {
      "name": "knife",
      "price": "10",
      "quantity": "2\r"
    },
    {
      "name": "pot",
      "price": "20",
      "quantity": "3"
    }
  ]
}
*/