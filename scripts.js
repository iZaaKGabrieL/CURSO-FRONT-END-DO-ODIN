
const container = document.getElementById("container");
let gridSize = "";
let corAtual = 'black';
let CorRgb = false;
criaGrid(16);

function  criaGrid(gridSize){
    container.innerHTML = ""; 

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


for (let i = 0; i < gridSize * gridSize; i++){
    const tela = document.createElement('div');
    tela.classList.add('tela');

      

    tela.addEventListener('mouseover', function(){

        if(CorRgb){
         const blocos = document.querySelectorAll('.tela');
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        tela.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }else{
            tela.style.backgroundColor = corAtual;
        }
    })

container.appendChild(tela);
}
}



function MudarCor(){
    CorRgb = !CorRgb;
}

function Limpar(){
const quadrado = document.querySelectorAll('.tela');
quadrado.forEach((quadrado) => {
    quadrado.style.backgroundColor = "white";    
});

};

function MudarTamanho(){
    let AlteraGrade = parseInt(document.getElementById("gridSize").value);
    if(isNaN(AlteraGrade) || AlteraGrade < 1 || AlteraGrade > 100){
        alert("POR FAVOR ESCOLHA UM NUMERO DE 1 A 100: ");
        return;
    };
criaGrid(AlteraGrade);
};


