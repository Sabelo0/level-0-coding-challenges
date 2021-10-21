function locateVowels(string) {
    //Convert any uppercase letters to lowercase
    var string = string.toLowerCase()
    var vowels = ["a","e","i","o","u"];
       
    
    var vowelsFound = [];
    var remains = [];
    //Assigning vowels into its own array 
       for (var i in string) {
         if (vowels.includes(string[i])) {
            vowelsFound.push(string[i]);
            } else {
                remains.push(string[i]);
            }
       }
    // removing any duplicate vowels 
    var duplicates = [...new Set(vowelsFound)];
    vowelsFound = duplicates
    
       return "Vowels: " + vowelsFound
}

locateVowels("Umuzi"); 