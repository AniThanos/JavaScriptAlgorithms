function isPrime(number){
    if(number == 2 || number == 3){
        return true;
    }
    if(number % 2 == 0) return false;

    var limit = Math.floor(Math.sqrt(number))
    var divisor = 3;
    while(divisor <= limit){
        if(number % divisor == 0){
            return false
        }else{
            divisor += 2 ;
        }
    }
    return true;
}

let output = isPrime(167)
console.log(output)