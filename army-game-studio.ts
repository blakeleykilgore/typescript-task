function checkPalindrome(textInput: string) {
  const possiblePalindrome = textInput.toLowerCase();
  const possiblePalindromeReversed = possiblePalindrome.split('').reverse().join('');
  return (possiblePalindrome === possiblePalindromeReversed) ? true : false;
};

const inputString = 'Hannah';

(checkPalindrome(inputString)) ? document.body.innerHTML = `The string "${inputString}" is a palindrome` : document.body.innerHTML = `The string "${inputString}" is not a palindrome`;
