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
^ In this function no matter the size of N, the condition within the for loop is set to 'i < 4'. Hence, the console will print only three times, no matter the value of N. Therfore the big-0 notation of this function  is 0(1)
 */