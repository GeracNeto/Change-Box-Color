const button = document.getElementById('btn');
const box = document.getElementById('box');

let i = 0; // Inicializa o contador com 0


button.addEventListener('click', changeColor); //  Aguarda evento de clique no botão

console.log(i);

function changeColor(){
    console.log(i);

    // Chama a função que muda o nome da classe da div box
    changeClasse(i);
    
    i+=1; // Incrementa 1 sempre que sai da função changeColor
    
    if(i == 9){
        return i = 0; // Zera o contador para começar de novo quando acabar as cores do changeClass
    }
}

// Recebe o i e de acordo com seu valor muda a classe da div box para alterar a cor do background
function changeClasse(index){
    if(index == 0){
        box.classList.add('color-red');
    }
    else if(index == 1){
        box.classList.replace('color-red', 'color-green');
    }
    else if(index == 2){
        box.classList.replace('color-green', 'color-blue');
    } 
    else if(index == 3){
        box.classList.replace('color-blue', 'color-brown');;
    } 
    else if(index == 4){
        box.classList.replace('color-brown', 'color-yellow');
    } 
    else if(index == 5){
        box.classList.replace('color-yellow', 'color-pink');
    } 
    else if(index == 6){
        box.classList.replace('color-pink', 'color-orange');
    } 
    else if(index == 7){
        box.classList.replace('color-orange', 'color-purple');
    }
    else{
        box.classList.remove('color-purple');
    }
}
