// PEGANDO OS ELEMENTOS HTML E CRIANDO AS VARIAVEIS SEM ATRIBUIÇÃO 

const tela = document.getElementById("tela");
const nums = document.querySelectorAll(".nums");
const operacoes = document.querySelectorAll(".funcoes")
let valorAtual = "";
let operador = "";
let primeiroNum = "";
let segundoNum = "";
let ans = "";


// TIRANDO A FUNÇÃO DE CARREGAR A PAGINA TODAS AS VEZES QUE CLICAR NO BOTAO DE NUMEROS E FAZENDO COM QUE ELE APAREÇA NA TELA DA CALCULADORA

nums.forEach(btn => {
    btn.addEventListener("click",  (i) => {
        i.preventDefault();
        valorAtual += btn.textContent;
        tela.value = valorAtual;
        
    });

})
 
// TIRANDO A FUNÇÃO DE CARREGAR A PAGINA TODAS AS VEZES QUE CLICAR NO BOTAO DE NUMEROS E CRIANDO FUNÇÃO DE CALCULO 

operacoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.preventDefault();

    const valor = botao.textContent;
    if(valor === "C"){
        tela.value = "";
         valorAtual = "";
         operador = "";
         primeiroNum = "";
         segundoNum = "";
    }else if (valor === "ANS"){
            valorAtual += ans.toString();
            tela.value = valorAtual;
}else if(valor === "DEL"){
        tela.value = tela.value.slice(0, -1);
    }else if(["+", "-", "%", "×", "÷", "POT"].includes(valor)){
        operador = valor;
        primeiroNum = valorAtual
        valorAtual = "";
    }else if(valor === "="){
         segundoNum = valorAtual;

         let n1 = parseFloat(primeiroNum);
         let n2 = parseFloat(segundoNum);
         let resultado = 0;
        
         switch(operador){
            case "+":
                resultado = n1 + n2;
                break;

            case "-":
                resultado = n1 - n2;
                break;
            case "×":
                resultado = n1 * n2;
                break;

            case "÷":
                resultado = n2 !== 0 ?  n1 / n2 : "Erro";
                break;
            case "POT":
                resultado = n1 ** n2;
                break;
            case "%":
                resultado = n1 % n2;
                break;
            default:
                resultado = "invalido";

           
         };
         
            tela.value = resultado;
            valorAtual = resultado.toString(); //
            operador = "";
            primeiroNum = "";
            segundoNum = "";
            ans = resultado;
    }
    
        
})

});
