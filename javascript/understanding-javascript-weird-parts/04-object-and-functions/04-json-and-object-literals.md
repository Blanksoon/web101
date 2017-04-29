# 04 JSON and Object literal

#### Not same thing, It's similar

- JSON -> format for communicate with computer

- Object literal -> object from javascript language

```javascript
// object literal
var obj = {
  firstname: 'nqmt',
  lastname: 'whyloop',
}

// json
{
  "firstname": "nqmt",
  "lastname": "whyloop"
}
```

#### Transfrom

```javascript
// Object literal to JSON
console.log(JSON.stringify(obj))
// Answer: '{"firstname":"nqmt","lastname":"whyloop"}'

// JSON to Object
JSON.parse('{"firstname":"nqmt","lastname":"whyloop"}')
```