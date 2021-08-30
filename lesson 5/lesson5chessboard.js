// Task 1

function createChessBoard(){
    const body = document.getElementsByTagName('BODY')[0];
    const table = document.createElement("TABLE");
    table.style.backgroundColor = 'white';
    let evennum = 10;
    let unevennum = 9;

    for (var i = 0; i <= 8; i++){
        let tr = document.createElement('TR');
        if(i === 0){
            for (var j = 0; j <= 8; j++){
                if(j === 0){
                    let td = document.createElement('TD');                    
                    tr.appendChild(td);
                }
                if(j === 1){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('A');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                }
                if(j === 2){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('B');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                } 
                if(j === 3){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('C');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                }
                if(j === 4){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('D');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                } 
                if(j === 5){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('E');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                }
                if(j === 6){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('F');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                }
                if(j === 7){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('G');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                } 
                if(j === 8){
                    let td = document.createElement('TD');
                    let letters = document.createTextNode('H');
                    td.style.textAlign = 'center';
                    td.appendChild(letters);
                    tr.appendChild(td);
                }
            }
        }
        else if (i % 2){
                for (var j = 0; j <= 8; j++){
                    
                    if(j === 0){                                                 
                        var td = document.createElement('TD');                                                       
                        evennum -= 2;
                        var num = document.createTextNode(evennum.toString());
                        td.appendChild(num);                 
                        tr.appendChild(td);
                        
                    }
                    else if(j % 2){
                        let td = document.createElement('TD');
                        
                        td.style.width = '100px';
                        td.style.height = '100px';
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('TD');
                        td.style.backgroundColor = 'black';
                        td.style.width = '100px';
                        td.style.height = '100px';
                        tr.appendChild(td);
                        
                    }
                }
        }
            else{
                for (var j = 0; j <= 8; j++){  
                    if(j === 0){
                        var td = document.createElement('TD');                                                       
                        unevennum -= 2;
                        var num = document.createTextNode(unevennum.toString());
                        td.appendChild(num);                 
                        tr.appendChild(td);
                    }                  
                    else if(j % 2){
                        let td = document.createElement('TD'); 
                        td.style.backgroundColor = 'black';                       
                        td.style.width = '100px';
                        td.style.height = '100px';
                        tr.appendChild(td);
                    }
                    else{
                        let td = document.createElement('TD');
                       
                        td.style.width = '100px';
                        td.style.height = '100px';
                        tr.appendChild(td);
                        
                        
                    }
                }
            }
            table.appendChild(tr);
        }
        body.appendChild(table); 
    }

    

    
    




createChessBoard();



