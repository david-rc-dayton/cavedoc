# [cavedoc]

Docstrings for JavaScript.

Adds the `__doc__` property to the `Function.prototype`, to allow documentation
lookup from the NodeJS or Browser REPL (similar to Python or Clojure).
Docstrings are entered inside the function definition, using JSDoc's
`/** <text_here> */` syntax. The function documentation can also be accessed by
calling CaveDoc's `doc()` function. Inspiration and boilerplate are borrowed
from Monolithed's [\_\_doc\_\_](https://github.com/monolithed/__doc__) project.

## Example

Implementing a single line docstring:

```javascript
var CaveDoc = require('cavedoc');

function square(x) {
    /** Return the square of the input argument. */
    return x * x;
}

CaveDoc.doc(square);
// - or -
square.__doc__;
// => "Return the square of the input argument."
```

Implementing a multi-line docstring:

```javascript
var CaveDoc = require('cavedoc');

var convolutedSquare = function (x) {
    /**
     * An unnecessarily complex implementation of the square function.
     * 
     * Takes a single number as an input argument, and returns it's square.
     * Fractional values will be truncated to an integer.
     * 
     * Args:
     *     square - input number, must be a positive integer
     * 
     * Returns:
     *     a positive integer
     * 
     * Raises:
     *     Error - if input is not positive
     */
     x = Math.floor(x);
     if (x <= 0) {
         throw new Error("Input must be positive.");
     }
     var output = 0;
     while (output !== x * x) {
         output += 1;
     }
     return output;
}

CaveDoc.doc(convolutedSquare);
// - or -
convolutedSquare.__doc__;
// =>
// "An unnecessarily complex implementation of the square function.
//
//  Takes a single number as an input argument, and returns it's square.
//  Fractional values will be truncated to an integer.
//
//  Args:
//      square - input number, must be a positive integer
//
//  Returns:
//      a positive integer
//
//  Raises:
//      Error - if input is not positive"
```

## Installation

NodeJs:

```shell
npm install cavedoc --save
```

Browser:
```html
 <script src="cavedoc.js"></script> 
```

# License

Copyright 2017 David RC Dayton

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
