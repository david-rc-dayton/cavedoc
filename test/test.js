try {
    var CaveDoc = require('../cavedoc');
    console.log("Running in nodejs...");
} catch (err) {
    console.log("Running in browser...");
}

function square(x) {
    /** Return the square of the input argument. */
    return x * x;
}

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

console.log('\n=== square(x) ===');
console.log('\n--- __doc__ ---\n');
console.log(square.__doc__);
console.log('\n--- doc() ---\n');
CaveDoc.doc(square);

console.log('\n=== convolutedSquare(x) ===');
console.log('\n--- __doc__ ---\n');
console.log(convolutedSquare.__doc__);
console.log('\n--- doc() ---\n');
CaveDoc.doc(convolutedSquare);
