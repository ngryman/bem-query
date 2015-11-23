# badge-size [![npm][npm-image]][npm-url] [![travis][travis-image]][travis-url]

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
bem.query('block')
// => querySelector('.block')

// gets a block with modifier
bem.query('block modifier')
// => querySelector('.block--modifier')

// gets an element with modifier from a block with modifier
bem.query('block modifier', 'element modifier')
// => querySelector('.block--modifier .block__element--modifier')

// if you are more lazy...
bem('block modifier', 'element modifier')
```


## API

It's defined as an *universal module* so you can use it with `commonjs`, `amd`, or directly
using `bem` global variable.


#### `bem.query(block, [element])`

Both `block` and `element` match the following pattern: `name[ modifier]`:
 - `name`: name of the block or element.
 - `modifier` (optional): name of the modifier.

**Aliases**: `bem`, `bem.q`

#### `bem.queryAll(block, [element])`

It does the same as `bem.query` but returns a collection of elements.

#### `bem.scope(ancestor)`

Defines a scope for the next query:
 - `ancestor`: CSS selector or DOM node.

It can be chained directly:

```js
bem.scope('header').query('nav')
```

**Aliases**: `bem.s`


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
