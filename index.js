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

  function select(context, method, block, element) {
    var selector = '.' + block.replace(' ', '--')
    if (element) {
      if (~selector.indexOf('--')) {
        selector += ' ' + selector.substr(0, selector.indexOf('--'))
      }
      selector += '__' + element.replace(' ', '--')
    }

    context._el = (context._el || document)[method](selector)
    return context
  }

  /* -------------------------------------------------------------------------- */

  function Bem() {
    if (!this instanceof Bem) {
      return Bem.query.apply(this, arguments)
    }
  }

  /** Instance methods. */
  var proto = {
    /**
     * Selects an element given its BEM selector.
     * @param  {string} block
     * @param  {string} element
     * @return {Bem}
     */
    select: function(block, element) {
      return select(this, 'querySelector', block, element)
    },

    /**
     * Selects an element given its CSS selector.
     * @param  {string|Node} selector
     * @return {Bem}
     */
    scope: function(selector) {
      this._el = 'string' === typeof selector
        ? document.querySelector(selector)
        : selector
      return this
    },

    /**
     * Gets an element given its BEM selector.
     * @param  {string} block
     * @param  {string} element
     * @return {Node}
     */
    query: function(block, element) {
      select(this, 'querySelector', block, element)
      return this._el
    },

    /**
     * Gets a collection of elements given their BEM selector.
     * @param  {string} block
     * @param  {string} element
     * @return {NodeList}
     */
    queryAll: function(block, element) {
      select(this, 'querySelectorAll', block, element)
      return this._el
    }
  }

  /** Aliases. */
  proto.s = proto.select
  proto.sc = proto.scope
  proto.q = proto.query
  proto.qa = proto.queryAll

  /** Static methods version. */
  for (var method in proto) {
    Bem[method] = (function() {
      var m = method
      return function() {
        var instance = new Bem()
        return instance[m].apply(instance, arguments)
      }
    }())
  }

  /**
   * Gets the final selected element.
   * @return {Node}
   */
  proto.el = function() {
    return this._el
  }
  proto.e = proto.el

  Bem.prototype = proto
  return Bem
}))
