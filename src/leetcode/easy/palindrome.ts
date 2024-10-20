function isPalindrome(number: number): boolean {
  const numString: string = number.toString();
  return numString === numString.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome(929));
console.log(isPalindrome(122));
console.log(isPalindrome(921));
console.log(isPalindrome(111));

/* 
  Step 1: Change number to string
  Step 2: Split the string
  Step 3: Reverse the string
  Step 4: Join String

  const numString: string = number.toString();
  const splitString = (numString).split("");
  const reversedString = splitString.reverse();
  const joinedString = reversedString.join('');
  return numString === joinedString ? true : false
*/



