/*
Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  const arr = str.split(''); // convert string to array
  const rev = arr.reverse(); // reverse the array
  str = rev.join(''); // convert reversed array to string
  return str;
}

reverseString('hello');
