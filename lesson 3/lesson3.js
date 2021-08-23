//Task 1
/*
let num = 0;

while (num <= 100){
   
    function isPrime(num) {
        if (num <= 3) return num > 1;
        
        if ((num % 2 === 0) || (num % 3 === 0)) return false;
        
        let count = 5;
        
        while (Math.pow(count, 2) <= num) {
          if (num % count === 0 || num % (count + 2) === 0) return false;
          
          count += 6;
        }
        
        return true;
      }
    
    if (isPrime(num)) console.log(num);

    num++;

}
*/

//Task 2-3
/*
const mycart = [10, 20, 30, 40, 50, 60];

function countCartPrice(cart) {

    let cartPrice = 0;
    for(var i = 0; i < cart.length; i++){
        cartPrice += cart[i];
    } 
    return cartPrice
    
}

console.log(countCartPrice(mycart));
*/


//Task 4
/*
for (var i = 0; i < 10; console.log(i++)){
//empty
}
*/

//Task 5
/*
for (var i = 0; i < 21; i++){
    pyr = "x";
    console.log(pyr.repeat(i));
}
*/

