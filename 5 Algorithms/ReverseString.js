// Return a string in the reverse order of Characters 


// Method 1 
const newArr = [];
const reverseStr = (str) => {
    
    
    for(let i = 0; i < str.length ; i++ ){
        newArr.push(str[i]);
    }
     return newArr.reverse().join('')

}

// console.log(reverseStr('Hello'))


// Method 2
function sumOfNumbers(arrayOfNumbers) {
        let ArrayNo = 0;

        for(let i = 0; i < arrayOfNumbers.length; i ++  ){

            ArrayNo +=  arrayOfNumbers[i]
        }
  
    return ArrayNo;
}

sumOfNumbers([1,2,3])


function countEven (arrayOfNumbers){
    let count = 0; 

    for(let i = 0; i < arrayOfNumbers.length; i ++  ){

        if ( arrayOfNumbers[i] % 2 === 0){
            count ++
        }   
    }
   return count ;
}

countEven([0,1,22,44,6,100,60,91, 99])
