# 04 Properties and chainable methods

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

}(window))

// usage
var g = G$('nqmt', 'whyloop')
g.greet().setLang().greet(1)

// Hello nqmt!
// Saludos, nqmt whyloo
```