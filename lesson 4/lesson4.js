//Task 1
/*
function numtoobject(_num){
        _numstring = _num.toString();

        if(_numstring.length === 3){
            num_obj = {
                hundreds: _numstring.charAt(0),
                tens: _numstring.charAt(1),
                singles: _numstring.charAt(2)
            }
        }
        else if (_numstring.length === 2){
            num_obj = {
                hundreds: "0",
                tenths: _numstring.charAt(0),
                singles: _numstring.charAt(1)
            }
        }
        else{
            num_obj = {
                hundreds: "0",
                tenths: "0",
                singles: _numstring.charAt(0)
            }
        }
        
    

    return num_obj
}

numtoobject(345);

console.log(num_obj);
*/

//Task 2-3
/*

    function Game(title, price, quantity, genre) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.genre = genre;    
    
        this.totalPrice = function() {
            return  this.price * this.quantity;            
        }

 }

const killmenator = new Game("Killmenator", 100, 2, "action");
const bigquest = new Game("BigQuest", 50, 3, "adventure");
const fastrace = new Game("FastRace", 150, 2, "racing");

// Тут думаю стоит в будущем иметь пронумерованную корзину, в которой при добавлении в нее каждому объекту в корзине будет присваиваться номер и for loop,
// которая push'ит их в массив mycart. 
// Сортировка по жанрам позволит добавить функционал поиска по сайту и, например, систему скидок и акции.


let mycart = [];
mycart.push(killmenator);
mycart.push(bigquest);
mycart.push(fastrace);

function countCartPrice(cart) {
    let cartPrice = 0;
    for(var i = 0; i < cart.length; i++){
        cartPrice += cart[i].totalPrice();
    } 
    return cartPrice
    
}
console.log(countCartPrice(mycart));

console.log(mycart);

*/
