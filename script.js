//--------------- Ex1 Entrada e Saída de Dados-----------------
//let nome = prompt("Digite Aqui Seu Nome:"); //pede o nome

//console.log(`O nome digitado foi ${nome}`); //imprime o nome no console

//alert(`Seja Bem vindo, ${nome}! Aproveite sua visita`); //aparece o alert com a mensagem








//--------------- Ex2 Blocos -----------------
//Estruturas de Controle (if e while) e Blocos
//if(condição (booleano)){
    //codigo vai ser executado SE a condição for true;
//}








//---------------- Ex3 ------------------
//Vai imprimir no console pq é true
//if (6<7){
    //console.log("6 é menor que 7");
//}

//---------------- Ex 3 ----------------
//Não vai imprimir pq é false
//if (6 === 7){
    //console.log("6 é menor que 7");
//}








//-----------------  Ex4 -------------------
//let numero = Number(prompt ("Digite aqui um número")); // Garante que o que for digitado vai ser transformado numero 

//if (numero > 10) {
    //console.log ("É um número maior que 10");
//} else { //Se eu digitar uma string no prompt, ele vai apontar isso, pq a string não é maior que 10. Dai executa o else
    //console.log("Não é um número maior que 10");
//}

//console.log("--------------------")









//----------- Ex 5 exclusividade mútua ------------------

//let numero = Number(prompt ("Digite aqui um número")); // Garante que o que for digitado vai ser transformado numero 

//if(isNaN(Number(numero)) || numero === null ){ // Pega o que foi digitado no prompt e transforma em numero. Dai confere se o numero é NaN. 
                                               // Se for NaN, dá valor inválido. Se não for NaN, confere se é null.
                                               // Se for null, dá valor inválido. Se não for null, vai para os próximos blocos.
    //console.log ("Valor Inválido");
//}
//else if (numero > 10) {
    //console.log ("É um número maior que 10");
//}
//else if (numero < 10) {
    //console.log ("É um número menor que 10");
//} else {
    //console.log("É 10");
//}







// ------------------ Ex 6 while -------------------------

//inicialização
let limite = Number(prompt("Digite o limite do contador"));
let contador = 1;

while( contador <= limite){ //condição
    console.log(contador);
    contador = contador + 1; //atualização do valor -> essencial pata não ter laço infinito
    //pode ser escrito contador += 1 ou contador++
    //boa prática: contador ser chamado de i
}