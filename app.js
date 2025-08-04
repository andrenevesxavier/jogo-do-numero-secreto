let quantidadeDeNumerosQuePodemSerSorteados = 4
let numerosecreto = gerarNumeroAletorio();
let listaNumeroSorteado = [];
//função para editar o texto na tela
function exibirTexto(tag, poema){
    let campo = document.querySelector(tag);
    campo.innerHTML = poema;
    responsiveVoice.speak(poema, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');//mensagem que ira ficar no lugar do parametro tag e poema
    exibirTexto('p' , `Digite um número entre 1 e ${quantidadeDeNumerosQuePodemSerSorteados}`);//mensagem que ira ficar no lugar do parametro tag e poema
}
mensagemInicial();

let tentativa = 1;
//função para verificar o chute do usuario
function verificarChute() {
    let chute = document.querySelector('input') . value; //variavel onde sera guardado o chute do usuario
           if (chute == ""){//condição caso o usuario aperte o botao chutar sem um valor
            exibirTexto('p', 'Por favor, digite um número antes de chutar.');
        }else{
            if (chute == numerosecreto){// verificando se o usuario acertou o numero secreto
                exibirTexto ('h1' , 'Você acertou');
                let palavratentativa = tentativa == 1 ? 'tentativa' : 'tentativas';
                let mensagemtentativa = (`voce descobriu o numero secreto com ${tentativa} ${palavratentativa}`);
                exibirTexto ('p' , mensagemtentativa );  
                document.getElementById ('reiniciar') . removeAttribute('disabled');//habilitando o botao novo jogo assim que o usuario acertar o numero secreto
            }else {
                if (chute > numerosecreto){
                    exibirTexto ('p' , 'O numero secreto é menor');
                }else{
                     exibirTexto('p' , 'o numero secreto é maior');
                }
            tentativa ++;
            LimparCampo ()
            }           
        }   
}

//função para que quando o usuario errar o numero secreto, o campo onde digita o numero ficar vazio para digitar o proximo numero
function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
  
//função para gerar um numero aleatorio
function gerarNumeroAletorio() {
    let numeroSorteado = parseInt (Math.random() * quantidadeDeNumerosQuePodemSerSorteados + 1);
    let quantidadeDeElementoNaLista = listaNumeroSorteado.length;
    if (quantidadeDeElementoNaLista == quantidadeDeNumerosQuePodemSerSorteados){
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroSorteado)){
        return gerarNumeroAletorio()
    }else
        listaNumeroSorteado.push(numeroSorteado);//numero sorteado sera colocado dentro da lista 
        console.log(listaNumeroSorteado);
        return numeroSorteado;
        }

function reiniciarJogo() {
    numerosecreto = gerarNumeroAletorio();
    LimparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById ('reiniciar'). setAttribute('disabled', true);
}

let pintogrande = 20