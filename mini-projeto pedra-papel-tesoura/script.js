const game = [
    "pedra",
    "papel",
    "tesoura",
];



//pontos

let humanscore = 0;
let machinescore = 0;

//SEU NICKNAME

function nome(){
    
    var name = prompt("QUAL E O SEU NOME?: ");
    return name.trim();
};

//minha escolha//

    function user(){
    var voce = prompt("ESCOLHA PEDRA,PAPEL OU TESOURA: ");
    return voce.toLowerCase();
}

//escolha da maquina

function maquina(){
    const escolha = Math.floor(Math.random() *3);
    return game[escolha];
};



function PlayRound(name, usuario, machine){

    console.log("-------------------------------");
    console.log(`${name} ESCOLHEU ${usuario}`);
    console.log(`E A MAQUINA ESCOLHEU ${machine}`);
    console.log("-------------------------------");

 if( (usuario === 'pedra' && machine === 'tesoura')||
     (usuario === 'tesoura' && machine === 'papel')||
     (usuario === 'papel' && machine === 'pedra') 
){
    console.log(`${name} VENCEU A RODADA 🎉🎉🎉🎉`);
    console.log(`placar: ${machinescore} x ${humanscore}`);
    humanscore++;
    }


else if(usuario === machine){
    console.log("EMPATOU");
    console.log(`placar: ${machinescore} x ${humanscore}`);
}

else{
    console.log("vitoria da maquina")
    machinescore++;
    console.log(`placar: ${machinescore} x ${humanscore}`);
}

};

const jogador = nome();


//loop abaixo

while (humanscore < 5 && machinescore < 5){

const escolhahumana = user();
const escolhamaquina = maquina();

PlayRound(jogador, escolhahumana, escolhamaquina);


//FIM DO LOOP//

}

///pontos

if( humanscore >= 5){
console.log("VOCE VENCEU O JOGO, SEUS PONTOS ESTAO ABAIXO:");
console.log(humanscore);
}else{
    console.log("AS MAQUINAS VENCERAM KKKKKKKKKKKKKKKKKKKK")
    console.log(machinescore);

}



