# 09 Framework aside default value

#### Problem

```javascript
//index.html
// <script src="/lib1.js">
// <script src="/lib2.js">
// <script src="/app.js">

// lib1.js
var lib = 'lib 1'

// lib2.js
var lib = 'lib 2'

// app.js
console.log(lib)
```
#### you can check and manage

```javascript
// lib1.js
window.lib = window.lib || 'lib1'

// lib2.js
if (window.lib /* do something */) {
  // ..
} 

```