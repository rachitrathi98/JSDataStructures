   //Find prime factors of a number
   function findPrimeFactors(num){
    let arr = [];
    for ( var i = 2; i < num; i++) {
        let isPrime
        if (num % i === 0) {
            isPrime = true;
            for (var j = 2; j <= i; j++) {
                if ( i % j === 0) {
                isPrime == false;
                }
            } 
        }if (isPrime == true) { arr.push(i)}

    }console.log(arr)
}

findPrimeFactors(13195)