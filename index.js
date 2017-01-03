Object.defineProperty(Function.prototype, '__doc__', {
    get: function () {
        'use strict';
        var comment = this.toString();
        var docstring = '';

        // find jsdoc style block
        if (comment = comment.match(/\/\*\*([\s\S]*?)\*\//)) {
            var lines = comment[1].split('\n');

            // check for blank lead and trail lines
            if (lines[0].trim().length === 0) {
                lines.shift();
            }
            if (lines[lines.length - 1].trim().length === 0) {
                lines.pop();
            }

            // cleanup lines
            for (var i = 0; i < lines.length; i++) {
                lines[i] = lines[i].replace(/\s+\*/, ''); // jsdoc bar
                lines[i] = lines[i].replace(/^\s/, ''); // first space
                lines[i] = lines[i].replace(/\s+$/, ''); // trailing whitespace
            }
            docstring = lines.join('\n');
        }

        return docstring;
    }
});
