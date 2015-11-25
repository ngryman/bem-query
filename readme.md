# bem-query [![npm][npm-image]][npm-url] [![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/bem-query.svg?style=flat
[npm-url]: https://npmjs.org/package/bem-query
[travis-image]: https://img.shields.io/travis/ngryman/bem-query.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/bem-query

> DOM queries using BEM for lazy people.


`bem-query` is the lazy version of `querySelector` and `querySelectorAll` for people using
BEM and tired of typing sometimes-quite-long-selectors.


## Examples

```js
// gets a block
bem.select('block').el()
// => querySelector('.block')

// ...or directly
bem.query('block')
// => querySelector('.block')

// gets a block with modifier
bem.query('block modifier')
// => querySelector('.block--modifier')

// gets an element with modifier from a block with modifier
bem.query('block modifier', 'element modifier')
// => querySelector('.block--modifier .block__element--modifier')

// gets a collection of elements
bem.queryAll('block')
// => querySelectorAll('.block')

// if you are more lazy...
bem('block modifier', 'element modifier')

// you can also chain several queries
bem.select('block').select('sub-block').el()
```


## API

It's defined as an *universal module* so you can use it with `commonjs`, `amd`, or directly
using `bem` global variable.


#### `bem.select(block, [element])`

Both `block` and `element` match the following pattern: `name[ modifier]`:
 - `name`: name of the block or element.
 - `modifier` (optional): name of the modifier.

**Chainable**<br>
**Aliases**: `s`

#### `bem.scope(ancestor)`

Basically same as `selector` but accepts a CSS selector instead.

**Chainable**<br>
**Aliases**: `sc`

#### `bem.el()`

Gets the final DOM element that is matched.

**Aliases**: `e`

#### `bem.query(block, [element])`

Shortcut for `ben.select().el()`

**Aliases**: `bem`, `q`

#### `bem.queryAll(block, [element])`

It does the same as `bem.query` but returns a collection of elements.

**Aliases**: `qa`


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
