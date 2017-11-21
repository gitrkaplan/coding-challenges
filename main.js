// FREE CODE CAMP

// Check for Palindromes

function palindrome(str) {
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
