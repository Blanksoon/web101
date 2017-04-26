# 13 Dangerous aside automatic semicolon insertion

#### Systax error

```javascript
function person() {
  return
  {
    firstname: 'Tony'
  }
}

console.log(person()) // undefind
```
#### Systax paser think

```javascript
function person() {
  return;
  {
    firstname: 'Tony'
  }
}

console.log(person()) // undefind
```
#### Fix that

```javascript
function person() {
  return {
    firstname: 'Tony'
  }
}

console.log(person()) // Object {firstname: "Tony"}
```

####  :information_source: You should add ';' end of statment