

function Game(title, price, genre, quantity) {
    this.title = title;
    this.price = price;    
    this.genre = genre; 
    this.quantity = quantity;
    
    this.totalPrice = function() {
        return  this.price * this.quantity;            
    }
}

let killmenator = new Game("Killmenator", 100, "action", 0);
let bigquest = new Game("BigQuest", 50, "adventure", 0);
let fastrace = new Game("FastRace", 150, "racing", 0);

const imgArray = [
   'pics/Goblin01.png',
   'pics/Goblin02.png',
   'pics/Goblin03.png',
   'pics/JungleBat01.png',
   'pics/JungleBat02.png',
   'pics/JungleBat03.png',
   'pics/KnightIdle01.png',
   'pics/KnightIdle02.png',
   'pics/KnightIdle03.png',
];



let mycatalogue = [];
mycatalogue.push(killmenator);
mycatalogue.push(bigquest);
mycatalogue.push(fastrace);

const div = document.getElementById('catalogue');

for(var i = 0; i < mycatalogue.length; i++){
    let catalogueItem = document.createElement("H2");

    let productInfo = 'Game name: ' + mycatalogue[i].title + ', Game Price: ' + mycatalogue[i].price + ', Genre: ' + mycatalogue[i].genre;
    catalogueItem.textContent = productInfo;

    catalogueItem.style.color = 'purple';
    catalogueItem.style.border = "thin dotted red";    


    div.appendChild(catalogueItem);
    const pic = document.createElement("IMG");

    if(i === 0){    
        pic.src = imgArray[i]; 
        pic.id = "first"; 
        pic.style.height = "100px";
        pic.style.width = "100px"; 
        pic.onclick = function() {
            if(pic.style.height === "100px"){
                document.getElementById('first').style.height = "200px";
                document.getElementById('first').style.width = "200px";
            }
            else{
                document.getElementById('first').style.height = "100px";
                document.getElementById('first').style.width = "100px"; 
            }
        }


        const prev = document.createElement('BUTTON');
        prev.textContent = 'Prev';
        let frame1 = 0;
        prev.onclick = function(){             
            if(frame1 != 0){            
                frame1--;
                document.getElementById("first").src = imgArray[frame1]; 
            }
            else{
                frame1 = 2;
                document.getElementById("first").src = imgArray[frame1];
            }
        }; 
        div.appendChild(prev);

        const next = document.createElement('BUTTON');
        next.textContent = 'Next';  
        next.onclick = function(){ 
            if(frame1 < 2){
                frame1++;
                document.getElementById("first").src = imgArray[frame1];
            }
            else{
                frame1 = 0;
                document.getElementById("first").src = imgArray[frame1];
            }
         };  
        div.appendChild(next); 

        div.appendChild(pic);

        linebreak = document.createElement('BR');
        div.appendChild(linebreak);
    

        const btn = document.createElement('BUTTON');
        btn.textContent = 'Add to Cart';
        btn.onclick = function() {           

            killmenator.quantity += 1;
            TotalCart();
         }
        div.appendChild(btn);
    }
    else if(i === 1){
        pic.src = imgArray[i+2];
        pic.id = "second"; 
        pic.style.height = "100px";
        pic.style.width = "100px"; 
        pic.onclick = function() {
            if(pic.style.height === "100px"){
                document.getElementById('second').style.height = "200px";
                document.getElementById('second').style.width = "200px";
            }
            else{
                document.getElementById('second').style.height = "100px";
                document.getElementById('second').style.width = "100px"; 
            }
        }

        const prev = document.createElement('BUTTON');
        prev.textContent = 'Prev';
        let frame2 = 3;
        prev.onclick = function(){ 
            if(frame2 > 3){            
                frame2--;
                document.getElementById("second").src = imgArray[frame2]; 
            }
            else{
                frame2 = 5;
                document.getElementById("second").src = imgArray[frame2];
            }
        }; 
        div.appendChild(prev);

        const next = document.createElement('BUTTON');
        next.textContent = 'Next';  
        next.onclick = function(){ 
            if(frame2 < 5){
                frame2++;
                document.getElementById("second").src = imgArray[frame2];
            }
            else{
                frame2 = 3;
                document.getElementById("second").src = imgArray[frame2];
            }
         };  
        div.appendChild(next);

        div.appendChild(pic);

        linebreak = document.createElement('BR');
        div.appendChild(linebreak);
    

        const btn = document.createElement('BUTTON');
        btn.textContent = 'Add to Cart';
        btn.onclick = function() {           

            bigquest.quantity += 1;
            TotalCart();
         }
        div.appendChild(btn);
    } 
    else {
        pic.src = imgArray[i+4];
        pic.id = "third";
        pic.style.height = "100px";
        pic.style.width = "100px"; 
        pic.onclick = function() {
            if(pic.style.height === "100px"){
                document.getElementById('third').style.height = "200px";
                document.getElementById('third').style.width = "200px";
            }
            else{
                document.getElementById('third').style.height = "100px";
                document.getElementById('third').style.width = "100px"; 
            }
        }

        const prev = document.createElement('BUTTON');
        prev.textContent = 'Prev';
        let frame3 = 6;
        prev.onclick = function(){ 
            if(frame3 > 6){            
                frame3--;
                document.getElementById("third").src = imgArray[frame3]; 
            }
            else{
                frame3 = 8;
                document.getElementById("third").src = imgArray[frame3];
            }
        }; 
        div.appendChild(prev);

        const next = document.createElement('BUTTON');
        next.textContent = 'Next';  
        next.onclick = function(){ 
            if(frame3 < 8){
                frame3++;
                document.getElementById("third").src = imgArray[frame3];
            }
            else{
                frame3 = 6;
                document.getElementById("third").src = imgArray[frame3];
            }
         };  
        div.appendChild(next);

        div.appendChild(pic);

        linebreak = document.createElement('BR');
        div.appendChild(linebreak);
    

        const btn = document.createElement('BUTTON');
        btn.textContent = 'Add to Cart';
        btn.onclick = function() {           

            fastrace.quantity += 1;
            TotalCart();
         }
        div.appendChild(btn);
    }

    
        
    

    

    linebreak = document.createElement('BR');
    div.appendChild(linebreak);
}


///////CART

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

function countCartQuantity(cart) {
    let cartQuantity = 0;
    for(var i = 0; i < cart.length; i++){
        cartQuantity += cart[i].quantity;
    } 
    return cartQuantity

}
//console.log(countCartPrice(mycart));
//console.log(mycart);

function TotalCart(){

    if(document.getElementById("empty")){
        document.getElementById("empty").remove();                
        }
    
    for(var i = 0; i < mycart.length; i++){
        if(document.getElementById('item' + i)){
        document.getElementById('item' + i).remove();                
        }
    }

    let cart = document.getElementById('shopcart');

    if (countCartPrice(mycart) === 0){
        let empty = document.createElement("H2");
        empty.id = "empty";
        empty.textContent = 'Shopping cart is Empty!'    

        cart.appendChild(empty);
    }
    else{
        for(var i = 0; i < mycart.length; i++){
            let cartItem = document.createElement("H2");

            let productInfo = 'Game name: ' + mycart[i].title + ', Game Price: ' + mycart[i].price + ', Quantity: ' + mycart[i].quantity;

            cartItem.textContent = productInfo;

            cartItem.id = "item" + i;

            

            cart.appendChild(cartItem);

            
        }

        let totalCart = document.createElement("H1");
        let totalCartInfo = 'Shopping cart: You have ' + countCartQuantity(mycart) + ' items, Total Value: ' + countCartPrice(mycart);
        totalCart.textContent = totalCartInfo; 
        totalCart.id = "sum";

        if(document.getElementById('sum')){
            document.getElementById('sum').remove();
            
            }
        cart.appendChild(totalCart);
        
    }
}

TotalCart();