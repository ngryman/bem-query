(function(factory) {
  if ('function' === typeof define && define.amd) {
    define([], factory)
  }
  else if ('object' === typeof exports) {
    module.exports = factory()
  }
  else {
    window.bem = factory()
  }
}(function() {
  'use strict'

  var scope = null

  function query(method, block, element) {
    var selector = '.' + block.replace(' ', '--')
    if (element) {
      if (~selector.indexOf('--')) {
        selector += ' ' + selector.substr(0, selector.indexOf('--'))
      }
      selector += '__' + element.replace(' ', '--')
    }

    var node = (scope || document)[method](selector)
    scope = null
    return node
  }

  /* -------------------------------------------------------------------------- */

  function bem() {
    return bem.query.apply(this, arguments)
  }

  bem.q =
  bem.query = function(block, element) {
    return query('querySelector', block, element)
  }

  bem.qa =
  bem.queryAll = function(block, element) {
    return query('querySelectorAll', block, element)
  }

  bem.s =
  bem.scope = function(ancestor) {
    if ('string' === typeof ancestor) {
      ancestor = document.querySelector(ancestor)
    }
    scope = ancestor
    return bem
  }

  return bem
}))
