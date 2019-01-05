function spinWords(stringToReverse){
  //splits string by space
  var originalStringAsWords = stringToReverse.split(" ");
  var reversedStrings = [];
  
  for(var i = 0; i < originalStringAsWords.length; i++)
  {
    //determines if word is over 5 characters
    if(originalStringAsWords[i].length >= 5) 
    {
      var reversedWord = originalStringAsWords[i];
      var reversed = reversedWord.split("").reverse().join("");
      reversedStrings.push(reversed);
    }
    //if <5 leave original word
      else 
      {
      reversedStrings.push(originalStringAsWords[i]);
      }  
  }
  
   var reversedVersionWithCommas = reversedStrings.join();
   var finalReversed = reversedVersionWithCommas.replace(/,/g, ' ');
   
  return finalReversed;
  }