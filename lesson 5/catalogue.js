

function Game(title, price, genre) {
    this.title = title;
    this.price = price;    
    this.genre = genre;      
}

const killmenator = new Game("Killmenator", 100, "action");
const bigquest = new Game("BigQuest", 50, "adventure");
const fastrace = new Game("FastRace", 150, "racing");

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

    const btn = document.createElement('BUTTON');
    btn.textContent = 'Add to Cart';

    div.appendChild(btn);

    linebreak = document.createElement('BR');
    div.appendChild(linebreak);
}



