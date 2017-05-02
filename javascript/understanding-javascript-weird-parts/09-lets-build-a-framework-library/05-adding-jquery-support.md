# 05 Adding jquery support

```html
<html>
  <body>
    <div id="logindiv">
      <select id="lang">
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <input type="button" value="Login" id="login" />
    </div>
    <h1 id="greeting"></h1>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="<Own file>"></script>
  <body>
<html>
```


```javascript
(function(global, $) {
  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language)
  }

  var supportedLangs = ['en', 'es']
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  }
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  }
  var logMessages = {
    en: 'Logged in',
    es: 'Iniciar sesión'
  }

  Greetr.prototype = {
    fullName: function() {
      return this.firstname + ' ' + this.lastname
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language"
      }
    },
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '!'
    },
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName()
    },
    greet: function(formal) {
      var msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }
      // for ie
      if (console) {
        console.log(msg)
      }
      return this // chainable
    },
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName())
      }
      return this // chainable
    },
    setLang: function(lang) {
      this.language = lang
      this.validate()
      return this // chainable
    },
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded'
      }
      if (!selector) {
        throw 'Missing jQuery selector'
      }

      var msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }

      $(selector).html(msg)
      return this
    }
  }

  Greetr.init = function(firstname, lastname, language) {
    var self = this
    self.firstname = firstname || ''
    self.lastname = lastname || ''
    self.language = language || 'en'
  }

  Greetr.init.prototype = Greetr.prototype

  global.Greetr = global.$G = Greetr

}(window, jQuery))


```