/**
 * ^In Big o Notation, constant do not matter.
 * 
 * ^        0(12)  -> 0(1)
 * ^        0(702)  ->      0(1)
 * ^        0(2n)   ->      0(n)
 * ^        0(n / 2)    ->      0(n)
 * ^        0(13n ^ 2 )     ->      0(n^2) 
 * 
 * 
 * 
 * ^            Small Terms do not matter 
 * 
 * ^            0(n + 10 )  -> 0(n)
 * ^            0(1337n  + 50)  -> 0(n)
 * ^            0(n^2  +  13n  +  8 )   -> 0(n ^ 2)
 * 
 *
 * ^                Other Terms 
 * ^            0(1 )   -> Constant Time 
 *  ^           0(n)        -> Linear Time
 *  ^           0(n ^ 2)        -> Quadratic Time 
 * 
 * 
 * ?  pop Quiz 
 * ^        what is the big O Notation / Time Complexity of this fn
 */

 const  printNumber = (n) => {
            for (let i = 0; i < Math.max(5, n); i ++){
                    console.log(n)
            }
 }