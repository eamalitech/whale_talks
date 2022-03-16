let input = "a whale of a deal!";

//storing the values of the 5 vowel letters
const vowels = ['a','e','i','o','u'];

let resultArray = [];

//loop statement to check for vowels in the input phrase variable
for(let char=0; char<input.length; char++){
  for(let letter=0; letter<vowels.length; letter++){
    //console.log(char,letter);
    if(input[char] === vowels[letter]){
      //console.log(char,letter);
      if((input[char] === 'e') || (input[char] === 'u')){
        //doubling the vowel if it is an 'a' or 'e'
        resultArray.push(input[char],input[char]);
      }else{
        resultArray.push(input[char]);
      } 
    }
  }
}

//looping through each element in result array and capitalize letters
for(let i=0; i<resultArray.length; i++){
  resultArray[i] = resultArray[i].toUpperCase();
}

//converting letters in the list to a single string with join function
resultArray = resultArray.join('');

//displaying the resultsArray
console.log(resultArray);