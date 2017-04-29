# 03 Framework aside faking namespaces

#### Javascript no namespace, Use Object

```javascript
var greeting {
  en: function() {
    console.log('hi')
  },
  uk: function() {
    console.log('hello')
  }
}

greeting.en()
greeting.uk()
```