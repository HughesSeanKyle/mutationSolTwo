/* 
Basic Algorithm Scripting: MutationsPassed
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//Solution Two
function mutation(arr) {                                  //1
  return arr[1]                                           //2
    .toLowerCase()                                        //3
    .split("")                                            //4
    .every(function(letter) {                             //5
      return arr[0].toLowerCase().indexOf(letter) != -1;  //6
    });
}

  
console.log(mutation(["Alien", "line"]));


//Notes
/*
//1
function which takes in an array as an argument

//2, //3, //4, //5 && //6
The toLowerCase() method returns the calling string value converted to lower case.
Source-[https://devdocs.io/javascript/global_objects/string/tolowercase]

The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
Source-[https://devdocs.io/javascript/global_objects/string/split]

The every() method tests whether all elements in the array pass the test implemented by the provided function.
Source-[https://devdocs.io/javascript/global_objects/array/every]

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
Source-[https://devdocs.io/javascript/global_objects/array/indexof]

  This section of code will return the second word in the array by targeting the index number.

  All letters/characters will then be converted to lowercase

  The split method will split all the characters in the word to an array. The quotes with no space in the split method indicates that the word should be split by letter. The output will be [ 'l', 'i', 'n', 'e' ]

  The every method will check the first word (targeted via zero index)
    Set all characters to lowercase
      Return the index of the letter matched in the second word
        Make sure that the index is not equal to -1. If it is the every methods test will fail. 
*/