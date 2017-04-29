var _ = require('./underscore')

var nqmt = {
  firstname: 'nqmt',
  lastname: 'whyloop'
}

var address = {
  firstname: 'changename',
  address: 'thailand'
}

var utils = {
  getFirstname: function() {
    return this.firstname
  },
  getLastname: function() {
    return this.lastname
  },
  getAddress: function() {
    return this.address
  },
  getFullDetail: function() {
    return this.firstname + ' ' + this.lastname + ' ' + this.address
  } 
}

var compose = _.extend(nqmt, address, utils)

console.log(compose.getFullDetail())