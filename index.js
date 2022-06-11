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
 *  ! why is time measurements not good .
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

   const sumUp1 = n => {
    return (n * (n + 1) ) / 2 ;
   } 

const sumUp2 = n => {
    let total  = 0;

    for (let i = 1;  i <= n; i++){
        total += 1 ;
    }
    return total ;
}

// ^in the above we have two diffrent functions 
/**
 * ^ sumUp1 has 3 opretaion 
 * ^ sumup2 has 
 */