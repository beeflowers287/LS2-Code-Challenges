// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

 
const compress = (s) => {
    let ns = "";
    let currentChar = s[0];
    let count = 1;
    for (let i = 1; i <= s.length; i++) {
        if (i != s.length && s[i] == currentChar){
            count++;
        }
        ns += currentChar;
        ns.push(toString(count));
        count = 1;
        currentChar = s[i];
        
    }
    if (ns.length < s.length) { 
        return ns;
    } else {
        return s;
    }
        
};      
console.log(compress('aaaffffkkkdllsjfkk'));