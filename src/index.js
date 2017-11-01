function parseDoc (f) {
  /**
   * Parse a JSDoc style document string from a function's body. Returns a
   * formatted documentation string.
   */
  let fString = f.toString()
  let docString = 'No documentation found.'

  // find jsdoc style block
  let comment = fString.match(/\/\*\*([\s\S]*?)\*\//)
  if (comment) {
    var lines = comment[1].split('\n')

    // check for blank lead and trail lines
    if (lines[0].trim().length === 0) {
      lines.shift()
    }
    if (lines[lines.length - 1].trim().length === 0) {
      lines.pop()
    }

    // cleanup lines
    for (var i = 0; i < lines.length; i++) {
      // jsdoc bar
      lines[i] = lines[i].replace(/\s+\*/, '')
      // first space
      lines[i] = lines[i].replace(/^\s/, '')
      // trailing whitespace
      lines[i] = lines[i].replace(/\s+$/, '')
    }
    docString = lines.join('\n')
  }

  return docString
}

exports.help = function (f) {
  /**
   * Display the documentation string of a function to the console.
   */
  let docstring = parseDoc(f)
  console.log(`\n${docstring}\n`)
}

exports.dir = function (m) {
  let output = []
  for (let k in m) {
    if (typeof (m[k]) === 'function') {
      output.push(k)
    }
  }
  if (output.length === 0) {
    return null
  }
  output.sort()
  let max = Math.max.apply(null, output.map((s) => s.length)) + 4
  let pad = ''
  while (pad.length < max) {
    pad += ' '
  }
  output.map(function (k) {
    let start = parseDoc(m[k]).split('.')[0]
    let name = (k + pad).substr(0, max)
    console.log(`${name}${start}.`)
  })
}
