//Task 1
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, потому что "a" сначала увеличивается на 1, а потому записывается в "с"
d = b++; alert(d);           // 1, потому что "b" сначала записывается в "d", а потом увеличивается на 1
c = (2+ ++a); alert(c);      // 5, потому что после первой операции с "с", "а" уже 2. Потом к "2+" увеличиваем "а" на 1, складываем, получаем 5 
d = (2+ b++); alert(d);      // 4, потому что после первой операции с "d", "b" уже 2. Потом к "2+" прибавляем "b", а потом увеличиваем "b" на 1
alert(a);                    // 3, потому что после всех операций перемернная дважды увеличивалась на 1
alert(b);                    // 3, потому что после всех операций перемернная дважды увеличивалась на 1
*/

//Task 2
/*
var a = 2;
var x = 1 + (a *= 2); // ответ 5, потому что 2 * 2 + 1;
*/

//Task 3
/*
let a = -5;
let b = 3;

if (a >= 0 && b >= 0){
    alert(a-b);
}

if (a < 0 && b < 0){
    alert(a*b);
}

if((a >= 0 && b < 0) || (a < 0 && b >= 0)){
    alert(a+b);
}
*/

//Task 4
/*
let a = prompt("Enter a number");

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

switch(a){
    case "0": alert(range(0, 15, 1)); break;
    case "1": alert(range(1, 15, 1)); break;
    case "2": alert(range(2, 15, 1)); break;
    case "3": alert(range(3, 15, 1)); break;
    case "4": alert(range(4, 15, 1)); break;
    case "5": alert(range(5, 15, 1)); break;
    case "6": alert(range(6, 15, 1)); break;
    case "7": alert(range(7, 15, 1)); break;
    case "8": alert(range(8, 15, 1)); break;
    case "9": alert(range(9, 15, 1)); break;
    case "10": alert(range(10, 15, 1)); break;
    case "11": alert(range(11, 15, 1)); break;
    case "12": alert(range(12, 15, 1)); break;
    case "13": alert(range(13, 15, 1)); break;
    case "14": alert(range(14, 15, 1)); break;
    case "15": alert(range(15, 15, 1)); break;
    default: alert("Something went wrong!");
} 
*/

//Task 5
/*
function add(a,b){
    let c = a + b;
    return c;
}

function sub(a,b){
    let c = a - b;
    return c;
}

function multi(a,b){
    let c = a * b;
    return c;
}

function div(a,b){
    let c = a / b;
    return c;
}


//Task 6
function mathOperation(arg1, arg2, operation){

     let result = operation(arg1, arg2);

    switch(operation){     

        case add:            
            alert("Addition equals " + result);                       
        break;

        case sub:            
            alert("Subtraction equals " + result);                       
        break;

        case multi:            
            alert("Multiplication equals " + result);                       
        break;

        case div:             
            alert("Division equals " + result);                        
        break;
    }

    return result;
}

*/

//Task 7
/*
if (null == 0)    //false
if (null > 0)     //false
if (null < 0)     //false
if (null >= 0)    //true
if (null <= 0)    //true
if (null == undefined) //true
if (null == null)      //true

//Насколько я выяснил происходит это, потому что сравнения >= <= превращают null в число 0, а остальные операторы сравнения этого не делают
*/

//Task 8
/*
function power(val, pow){  
    
    if(pow === 0){
        return 1;
    }
    else{
        --pow;        
        if(pow > 0){  

            if(typeof a === 'undefined'){
                a = val * val;            
            }
            else {
                a *= val;            
            }

            return power (val, pow); 

        } 

        else {  
            if(typeof a === 'undefined'){      
                return val;
            }
            else{
                return a;
            }

        }  
    }    
}

alert(power(2,5));
*/
