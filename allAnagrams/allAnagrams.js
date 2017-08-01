/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.
 */

/**
  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
  let anagrams = [];
  const allAnagrams = (word, anagram = '') => {
  	if (!word) {
  		anagrams.push(anagram);
  		return;
  	}
  	for (let i = 0; i < word.length; i++) {
  		allAnagrams(word.slice(0, i)) + word.slice(i + 1), anagram+word[i]);
  	}

  };

  allAnagrams('abc')
  console.log([...new Set(anagrams)];