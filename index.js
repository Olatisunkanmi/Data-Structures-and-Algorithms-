//    ?                             Welcome to Big O and Data structures 
 
/**
 *  !why is Big O notation important
 *      !also Known as Time Complexities 
 * 
 * * 1. For faster and better implentation of Writing our codes
 * * it is important because as your codebase and user posts (database) gets larger your code needs not to run slower
 * 
 * *2. BETTER implentation of your code
 * *this means faster time to finish to use less memory (RAM), although there is a much stronger empahsis on the former.
 *                          ^Faster Time 
 * 
 * ~the readabilty of your code does not factor at all PERFORMANCE is KING
 *              ^like  in soccer 3pt is more important than dribbles
 * 
 *  ! why is  time measurements not good .
 * 
 * *computers differ widely in  their processors, so you will often get diffrent times for each comp. ??
* *hence the time complexity of the code will not be safe to determine.

** until inputs get really large we cannot really know the how good the code is.
** if you write a bad code for your APP nobody notices right ?
** what if Microsoft does same mistake ? see!! it would cost them alot.

*?let's write some code!
 * */

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