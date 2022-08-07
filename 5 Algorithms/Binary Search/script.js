

const uSrch = 100
const SrchArr = [1, 2, 3, 5, 6, 7, 84 ,8, 90, 100, 99, 45, 4];

const Guess = () => {

    for (let i = 0; i < SrchArr.length; i++) {
        const el= SrchArr[i];
            if( el === uSrch )  {
                // console.log(el)
            }
    }
}

Guess()

//^ The Big O Notation of this search Algorithm is O(n) which is linear time.


const BinarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high) / 2 );
    let guess =  arr[mid];
    
    while (arr[low] <= arr[high] ) {
            if( guess == item ){
            return mid;
        }	else if ( guess > item  ){
            high =  mid - 1 ;
        }	else {
            low =  mid + 1 ;
        }  
         return null 
    }

}


console.log(BinarySearch([1,2,3 ,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 33 ) )
