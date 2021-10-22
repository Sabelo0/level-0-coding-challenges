function locateVowels(string) {
    //Convert any uppercase letters to lowercase
    var string = string.toLowerCase()
    let vowels = ["a","e","i","o","u"];
       
    
    let vowelsFound = [];
    let remains = [];
    //Assigning vowels into its own array 
       for (const i in string) {
         if (vowels.includes(string[i])) {
            vowelsFound.push(string[i]);
            } else {
                remains.push(string[i]);
            }
       }
    // removing any duplicate vowels 
    let duplicates = [...new Set(vowelsFound)];
    vowelsFound = duplicates
   console.log("Vowels: " + vowelsFound)
}

locateVowels("Umuzi"); 