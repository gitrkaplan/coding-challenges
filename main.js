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

// Confirm the ending

const confirmEnding = (str, target) => str.substr(-target.length) === target

console.log(confirmEnding('Bastian', 'n'))
console.log(confirmEnding('He has to give me a new name', 'name'))

// Repeat a string repeat a string

const repeatStringNumTimes = (str, num) => (num > 0 ? str.repeat(num) : '')

console.log(repeatStringNumTimes('abc', 3))

// Truncate a string

const truncateString = (str, num) =>
  str.length <= num
    ? str
    : num <= 3
      ? str.slice(0, num) + '.'.repeat(3)
      : str.slice(0, num - 3) + '.'.repeat(3)

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 11))
console.log(truncateString('A-', 1))
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
)

// jshint esversion:6

// Chunky Monkey

const chunkArrayInGroups = (arr, size) => {
  const newArr = []
  while (arr.length) {
    newArr.push(arr.splice(0, size))
  }
  return newArr
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))

// Slasher Flick

const slasher = (arr, howMany) => arr.slice(howMany)

console.log(slasher([1, 2, 3], 2))
console.log(slasher(['burgers', 'fries', 'shake'], 1))

// Mutations

const mutation = arr => {
  for (var i = 0; i <= arr[1].length - 1; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1)
      return false
  }
  return true
}
//
// console.log(mutation(['hello', 'hey']))
// console.log(mutation(['Alien', 'line']))

// Falsy Bouncer

function bouncer(arr) {
  let truthy = []
  arr.forEach(el => {
    if (el) {
      truthy.push(el)
    }
  })
  return truthy
}

console.log(bouncer([7, 'ate', '', false, 9]))

// Seek and Destroy

function destroyer(arr) {
  var args = Array.from(arguments).slice(1)
  return arr.filter(function(val) {
    return !args.includes(val)
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53))

// FizzBuzz

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz()

// Where Do I Belong?

function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a, b) {
    return a - b
  })
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) {
      return i
    }
  }
  if (num > arr[arr.length - 1]) {
    return arr.length
  }
}

console.log(getIndexToIns([40, 60], 50))

// Caesars Cipher

const rot13 = str =>
  str.replace(/[A-Z]/g, letter =>
    String.fromCharCode(letter.charCodeAt(0) % 26 + 65)
  )

console.log(rot13('SERR PBQR PNZC'))
console.log(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'))
