//Global Vars

const FIELD_SIZE_X = 20; //lines
const FIELD_SIZE_Y = 20; //tables
let SNAKE_SPEED = 200; 
let snake = []; 
let direction = 'y+'; //Direction of the snake
let gameIsRunning = false;
let snake_timer;
let food_timer;
let barrier_timer;
let score = 0;

function init(){
    prepareGameField(); //Field Generation
    showScore();
    let wrap = document.getElementsByClassName('wrap')[0];

    /*
    if(16 * (FIELD_SIZE_X +1) < 380){
        wrap.style.width = '380px';
    }
    else{
        wrap.style.width = (16 * (FIELD_SIZE_X + 1)).toString() + 'px';
    }
    */

    
    

    //Start event
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);

    //Keyboard presses

   addEventListener('keydown', changeDirection);
}

//Field Generation Functions
function prepareGameField(){
    let game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');

    for(var i = 0; i < FIELD_SIZE_X; i++){
        let row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for(var j = 0; j < FIELD_SIZE_Y; j++){
            let cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell);
        }
        game_table.appendChild(row);
    }

    document.getElementById('snake-field').appendChild(game_table);

}

//Game Start

function startGame(){
    gameIsRunning = true;
    respawn();

    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 5000);
    setTimeout(createBarrier, 10000);

}

function respawn(){
    const start_coord_x = Math.floor(FIELD_SIZE_X/2);
    const start_coord_y = Math.floor(FIELD_SIZE_Y/2);

    //Snake Tail
    let snake_tail = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');
    //Snake Head
    let snake_head = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');

    snake.push(snake_tail);
    snake.push(snake_head);
}

//Movement
function move(){
    //Class array
    let snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

    //head movement
    let new_unit;
    let snake_coords = snake_head_classes[1].split('-');
    let coord_y = parseInt(snake_coords[1]);
    let coord_x = parseInt(snake_coords[2]);

    //Determin new point
    if(direction == 'x-'){
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
    }
    else if(direction == 'x+'){
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
    }
    else if(direction == 'y+'){
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    }
    else if(direction == 'y-'){
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    }

    
    //Wrapping around

        if(new_unit == undefined && direction == 'x-'){
            new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + 19)[0];
        }
        else if(new_unit == undefined && direction == 'x+'){
            new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + 0)[0];
        }
        else if(new_unit == undefined && direction == 'y+'){
            new_unit = document.getElementsByClassName('cell-' + 19 + '-' + (coord_x))[0];
        }
        else if(new_unit == undefined && direction == 'y-'){
            new_unit = document.getElementsByClassName('cell-' + 0 + '-' + (coord_x))[0];
        }

    //Checks
    if(!isSnakeUnit(new_unit)  && !isBarrierUnit(new_unit)){

        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);

        if(!haveFood(new_unit)){
            let removed = snake.splice(0, 1)[0];
            let classes = removed.getAttribute('class').split(' ');

            //remove tail
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);

        }
    }
    else{
        finishGame();
    }
}

function isSnakeUnit(unit){
    let check = false;

    if(snake.includes(unit)){
        check = true;
    }
    return check;
}

function isBarrierUnit(unit){

    let check = false;
    let barrier_unit_classes = unit.getAttribute('class').split(' ');

    if(barrier_unit_classes.includes('barrier-unit')){    
        check = true;
    }
    return check;
}

function haveFood(unit){
    let check = false;

    let unit_classes = unit.getAttribute('class').split(' ');

    if(unit_classes.includes('food-unit')){
        check = true;
        createFood();
        score++;        
        showScore();
        setTimeout(createBarrier, 10000);
    }
    return check;
}

function showScore(){      
    
    //Remove old score if exists
    if(document.getElementById('toberemoved')){
        document.getElementById('toberemoved').remove();
    }
    
    //Write new score
    const scorecounter = document.getElementById('scorecounter');

    let scorecount = document.createElement('H2');
    scorecount.id = 'toberemoved';
    
    let scorestring = 'Your score is: ' + score + ' !';

    scorecount.textContent = scorestring;      

    scorecounter.appendChild(scorecount);


}

function createFood(){
    let foodCreated = false;
    
    while(!foodCreated){
        let food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        let food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        let food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        let food_cell_classes = food_cell.getAttribute('class').split(' ');

        //Check if snake
        if(!food_cell_classes.includes('snake-unit')){
            let classes = '';
            for (var i = 0; i < food_cell_classes.length; i++){
                classes += food_cell_classes[i] + ' ';
            }

            food_cell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
        }

    }

}

function createBarrier() {
    let barrierCreated = false;

    
    
    while(!barrierCreated){
        let barrier_x = Math.floor(Math.random() * FIELD_SIZE_X);
        let barrier_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        let barrier_cell = document.getElementsByClassName('cell-' + barrier_y + '-' + barrier_x)[0];
        let barrier_cell_classes = barrier_cell.getAttribute('class').split(' ');

        //Check if snake
        if(!barrier_cell_classes.includes('snake-unit')){
            let classes = '';
            for (var i = 0; i < barrier_cell_classes.length; i++){
                classes += barrier_cell_classes[i] + ' ';
            }

            barrier_cell.setAttribute('class', classes + 'barrier-unit');
            barrierCreated = true;
        }

    }
    
}

function changeDirection(e){
    console.log(e);

    switch (e.keyCode){
        case 37:
            if(direction != 'x+'){
                direction = 'x-';
            }
        break;

        case 38:
            if(direction != 'y-'){
                direction = 'y+';
            }
        break;

        case 39:
            if(direction != 'x-'){
                direction = 'x+';
            }
        break;

        case 40:
            if(direction != 'y+'){
                direction = 'y-';
            }
        break;
    }


}


//Game finish 
function finishGame(){
    gameIsRunning = false;
    clearInterval(snake_timer);       
    alert('You lost! Your score is : ' + score.toString());
}

//New Game
function refreshGame() {
    location.reload();
}

//Init
window.onload = init;
