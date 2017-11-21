// FREE CODE CAMP

// Check for Palindromes

const palindrome = str => {
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase()

  if (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  ) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('A man, a plan, a canal. Panama'))

// Find longest word in a string

const findLongestWord = str => {
  const longestWord = str.split(' ').reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest
  }, '')
  return longestWord.length
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))

// Title case a sentence

const titleCase = str =>
  str
    .toLowerCase()
    .split(' ')
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join(' ')

console.log(titleCase("I'm a little tea pot"))
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'))

// Return largest numbers in arrays

const largestOfFour = arr => {
  return arr.map(el =>
    el.reduce((longest, currentNumber) => Math.max(longest, currentNumber))
  )
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
)
