function commonLetters(string1,string2) {
    var count = [];
    var commonChars =[]; 
//check characters  of first string
    for(var i=0; i < string1.length; i++) {
      count[string1.charAt(i)] = 1;
    }
//check characters of second string
    for(var i=0; i < string2.length; i++) {
      if( count[string2.charAt(i)] == 1) {
        commonChars.push(string2.charAt(i)); 
      }
    }
//remove duplicates
    var duplicates =[...new  Set(commonChars)];
    commonChars = duplicates 

    return "Common Letters: " + commonChars;
  }
  
commonLetters("houses","computers"); 