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

palindrome('A man, a plan, a canal. Panama')
