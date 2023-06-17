/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// solution 2
// function isAnagram(str1, str2) {

//   if(str1.length !== str2.length) {
//     return false;
//   }

//   const map = {};

//   for(let i = 0; i < str1.length; i++) {
//     const char = str1[i].toLowerCase();
//     map[char] = map[char] + 1 || 1;
//   }

//   for(let i = 0; i < str2.length; i++) {
//     const char = str2[i].toLowerCase();
//     if(!map[char]) {
//       return false;
//     }
//     map[char]--;
//   }

//   return true;

// }


// solution 1
function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  
  }
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
