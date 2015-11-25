/*eslint-env mocha */
/*global chai, bem */
/*eslint-disable padded-blocks, no-unused-expressions */

var expect = chai.expect

describe('bem', function() {

  describe('.select()', function() {

    it('gets a block', function() {
      var block = bem.select('block').el()
      expect(block.className).to.equal('block')
    })

    it('gets a block with modifier', function() {
      var block = bem.select('block modifier').el()
      expect(block.className).to.equal('block--modifier')
    })

    it('gets an element', function() {
      var element = bem.select('block', 'element').el()
      expect(element.className).to.equal('block__element')
    })

    it('gets an element with modifier', function() {
      var element = bem.select('block', 'element modifier').el()
      expect(element.className).to.equal('block__element--modifier')
    })

    it('gets an element with modifier within a block with modifier', function() {
      var element = bem.select('block modifier', 'element modifier').el()
      expect(element.className).to.equal('block__element--modifier')
      expect(element.parentNode.className).to.equal('block--modifier')
    })

    it('can be chained', function() {
      var element = bem.select('block').select('child-block').el()
      expect(element.className).to.equal('child-block')
      expect(element.parentNode.className).to.equal('block__element--modifier')
    })

  })

  describe('.scope()', function() {

    it('reduce the scope to an ancestor selector', function() {
      var block = bem.scope('#ns-2').select('block').el()
      expect(block.className).to.equal('block')
      expect(block.parentNode.id).to.equal('ns-2')
    })

    it('reduce the scope to an ancestor node', function() {
      var ancestor = document.querySelector('#ns-1')
      var block = bem.scope(ancestor).select('block').el()
      expect(block.className).to.equal('block')
      expect(block.parentNode.id).to.equal('ns-1')
    })

  })

  describe('.query()', function() {

    it('returns the element directly', function() {
      var block = bem.query('block')
      expect(block.className).to.equal('block')
    })

  })

})
