// pulled from inkdrop-math

function locator(value, fromIndex) {
  return value.indexOf('^', fromIndex)
}

const RE_CALC = /^\^((?:\\\^|[^^])+)\^/

/**
 * Takes a string math and returns the result of calculating
 */
function tokenizer(eat, value, silent) {
  const match = RE_CALC.exec(value)

  if (match) {
    if (silent) {
      return true
    }

    return eat(match[0])({
      type: 'inlineCode',
      value: match[1].trim(),
      data: {
        hProperties: {
          lang: 'inline_calc'
        }
      }
    })
  }
}

tokenizer.locator = locator
tokenizer.notInLink = true

module.exports = tokenizer
