/*eslint-env mocha */
/*global chai, bem */
/*eslint-disable padded-blocks, no-unused-expressions */

var expect = chai.expect

describe('bem', function() {

  describe('.query()', function() {

    it('gets a block', function() {
      var block = bem.query('block')
      expect(block.className).to.equal('block')
    })

    it('gets a block with modifier', function() {
      var block = bem.query('block modifier')
      expect(block.className).to.equal('block--modifier')
    })

    it('gets an element', function() {
      var element = bem.query('block', 'element')
      expect(element.className).to.equal('block__element')
    })

    it('gets an element with modifier', function() {
      var element = bem.query('block', 'element modifier')
      expect(element.className).to.equal('block__element--modifier')
    })

    it('gets an element with modifier within a block with modifier', function() {
      var element = bem.query('block modifier', 'element modifier')
      expect(element.className).to.equal('block__element--modifier')
      expect(element.parentNode.className).to.equal('block--modifier')
    })

  })

  describe('.scope()', function() {

    it('reduce the scope to an ancestor selector', function() {
      var block = bem.scope('#ns-2').query('block')
      expect(block.className).to.equal('block')
      expect(block.parentNode.id).to.equal('ns-2')
    })

    it('reduce the scope to an ancestor node', function() {
      var ancestor = document.querySelector('#ns-1')
      var block = bem.scope(ancestor).query('block')
      expect(block.className).to.equal('block')
      expect(block.parentNode.id).to.equal('ns-1')
    })

  })

})
