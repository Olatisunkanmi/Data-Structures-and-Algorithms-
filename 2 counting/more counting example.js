/**
 * ^In this example we have two for loops that run N times
 */

const fn1 = (n) => {
    for (let i = 0 ; i > n ; i ++  ){
        console.log('Hello from Fn 1')
    }

    for (let i = 0 ; i > n ; i ++  ){
        console.log('Hello from Fn 1')
    }
}
    // fn1(5)
/**
 * 
 * ^in the code above there are two for loops that run N times each for loops run N times 
 * ^which make the Big Complexity 0(2n)
 * ^This is because there are '2' for loops, each of them seperately if N was 10
 * ^ the function would run 20 times. 10 for each for loop
 *  */ 


const fn2 = (n) => {
        for(let i = 0; i < 4; i++)
        console.log("Hello from fn2 ")
} 
    // !    Run function 
// fn2(n)

/*
^ In this function no matter the size of N, the condition within the for loop is set to 'i < 4'. Hence, the console will print only three times, no matter the value of N. Therfore the big-0 notation of this function  is 0(4)
 */

const  fn3 = (arr)  => {
    for(let i = 0 ; i  < arr.length ; i ++ ){
        for (let j = 0 ; j < arr.length; j ++) {
            console.log(i)
            console.log(arr[i] + "  " + arr[j] )
        // console.log(count )
    }
}

}
        const arr =  ['pet', 'animals', 'Cars']
    // fn3(arr)


/**
 * ^the big O of this funtion is O(n^2) the reasn is because for every element we print in the array we print one more. 'remember because the for loops are nested'
 * 
 * 
 * ^ Our for loop run the amount of the array length but they are nested into each other,  and because they are 2 for loops we have 0(n ^ 2) as our big O notaion. If we have there  3 for loops then we'd have 0(n ^ 3 ).  if the for loops were not nested like we have in out first example (fn1), our big ) will be 0(2n)
 * 
 * 
 * ^When we run this code we will have 9 outputs. 
 * ^because we have 2 for loops and 3 elements in our arr, which is (n)
 * ^hence, 3 ^ 2 is 9
 **/

const fn4 = n => {
        for(let i = 0; i < arr1.length ; i ++){
                    for(let i =0; i < arr2.length ; i ++){

                    }
        }      
}
const arr1 =  ['pet', 'animals', 'Cars']
const arr2 = ['Dance', 'sing', 'clap']
fn4()