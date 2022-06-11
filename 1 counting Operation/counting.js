
    /**
     * ^counting the operations a code has a great way to determine althoug this is not always accurate in some cases but it a very good way to start. 
     * 
     * ^the number of operatons does not change regardless of theruntime of enviroment of the mean
     * ? this means that if you run your code on diffrent computers with diff. processors it does not change the amount of operations in your code.
     * **/

    // !example 1

    const sumUp1 =  ( n )=> {
        return  (n * (n + 1 )  )    /2 ;
      } 



const sumUp2 = n => {
    let total  = 0;

    for (let i = 1;  i <= n; i++){
        total += i ;
        // !                this will show you how total itenerate everytime the for loop runs so if the for loop runs 200 times, total will itenerate 200 times also
        
        // console.log(total)
    }
        return total;
}


let t1, t2;

                        
t1 = Date.now()
                // !            run function
// console.log(sumUp1(300000000))
t2 = Date.now()
                                //!         Calculate time function uses to run 
// console.log(`${(t2-t1) /1000  } Msecs First Fn` )


t1 = Date.now()
                //!                 run function
// console.log(sumUp2(300000000))
t2 = Date.now()
                             //!         Calculate time function uses to run 
// console.log(`${(t2-t1) /1000  } Msecond Fn` )




// ^in the above we have two diffrent functions 
/**
 * ^ sumUp1 has 3 opretaion 
 * 
 * ^however sumUp2 has a for loop which has 1 operation
 *             *"total += 1"
 *      
 * !!Breakdown
 *          ~when both codes are run, sumUp1 runs faster than sumUp2 this is because the only operation \"total +=1 "is dependent on the for loop and in return the for loop will run for 'n' times, 'n' being our input.  
 * ^if n is 20, the for loop runs for 20 times and 
 *      
 */