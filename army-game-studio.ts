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

if (checkPalindrome(inputString)) {
  document.body.innerHTML = `The string "${inputString}" is a palindrome`;
} else {
  document.body.innerHTML = `The string "${inputString}" is not a palindrome`;
}
