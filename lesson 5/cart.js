//Task 2

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

let mycart = [];
//mycart.push(killmenator);
mycart.push(bigquest);
mycart.push(fastrace);

function countCartPrice(cart) {
    let cartPrice = 0;
    for(var i = 0; i < cart.length; i++){
        cartPrice += cart[i].totalPrice();
    } 
    return cartPrice
    
}

function countCartQuantity(cart) {
    let cartQuantity = 0;
    for(var i = 0; i < cart.length; i++){
        cartQuantity += cart[i].quantity;
    } 
    return cartQuantity
    
}
//console.log(countCartPrice(mycart));
//console.log(mycart);


const div = document.getElementById('shopcart');

if (countCartPrice(mycart) === 0){
    let empty = document.createElement("H2");
    empty.textContent = 'Shopping cart is Empty!'    

    div.appendChild(empty);
}
else{
    for(var i = 0; i < mycart.length; i++){
        let cartItem = document.createElement("H2");

        let productInfo = 'Game name: ' + mycart[i].title + ', Game Price: ' + mycart[i].price + ', Quantity: ' + mycart[i].quantity;

        cartItem.textContent = productInfo;
        

        div.appendChild(cartItem);

        linebreak = document.createElement('BR');
        div.appendChild(linebreak);
    }

    let totalCart = document.createElement("H1");
    let totalCartInfo = 'Shopping cart: You have ' + countCartQuantity(mycart) + ' items, Total Value: ' + countCartPrice(mycart);
    totalCart.textContent = totalCartInfo;    
    div.appendChild(totalCart);
}





