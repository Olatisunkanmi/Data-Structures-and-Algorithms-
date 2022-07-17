

const uSrch = 2

const SrchArr = [1, 2, 3, 5, 6, 7, 84 ,8, 90, 100, 99, 45, 4];



const Guess = () => {

    for (let i = 0; i < SrchArr.length; i++) {
        const el= SrchArr[i];
            if( el === uSrch )  {
                console.log(el)
            }
    }
}

Guess()

//^ The Big O Notation of this search Algorithm is O(n) which is linear time.

const Gues = () => {
    let low = 0;
    let high = SrchArr.length -  1

    let md = Math.round((low + high ) / 2);
    let guess = SrchArr[md]

    console.log(guess)
}


Gues()