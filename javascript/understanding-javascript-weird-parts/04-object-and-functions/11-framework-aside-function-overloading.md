# 11 Framework aside function overloading

javascript isn't overloading but It's can imprement.

#### Imprement function overloading function in javascript

```javascript
function person(firstname, lastname, language) {
  if (language === 'th') {
    console.log('ดีจ้า!, ' + firstname + ' ' + lastname + ' ' + language)
  }

  if (language === 'en') {
    console.log('Hi!, ' + firstname + ' ' + lastname + ' ' + language)
  }
}

function nameTh(firstname, lastname) {
  person(firstname, lastname, 'th')
}

function nameEn(firstname, lastname) {
  person(firstname, lastname, 'en')
}

nameTh('nqmt', 'whyloop')
nameEn('nqmt', 'whyloop')
```
