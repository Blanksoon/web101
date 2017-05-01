# 07 Existence and booleans

```javascript
// false
Boolean(undefined)
Boolean(null)
Boolean("")
Boolean(0)
Boolean(NaN)

// trus
Boolean('something')
Boolean(4)
Boolean({})
Boolean([])

// usage
var a = 'nqmt'
if (a) {
  console.log('!Hi')
}
```