function checkPalindrome(textInput: string) {
  const possiblePalindrome = textInput.toLowerCase();
  const possiblePalindromeReversed = possiblePalindrome.split('').reverse().join('');
  if (possiblePalindrome === possiblePalindromeReversed) {
    return true;
  } else {
    return false;
  }
};

const inputString = 'Hannah';
