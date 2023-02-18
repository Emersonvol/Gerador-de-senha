const btnGerador = document.querySelector('.gerador');// selecionei a classe do botao 
const senhaSaida = document.querySelector('.saida')// selecionei a classe de saida
const letras= "ABCDEFGHJKLMNOPQRSTUVWYXZ0123456789";//O que a senha vai aletorizar
const tamanhoDaSenha = 8;//define o tamanho
let senha = '';//onde a senha ira ser armazenada

btnGerador.addEventListener('click',function(e){
    alNum()
    senhaSaida.innerHTML=`${senha}`
});//criar a funcao de click

function alNum(){
    senha=''
    for(let i =0; i <tamanhoDaSenha;i++){// Foi criado um for que com base no tamanho da senha ira execuitaro condigo
        let numerosAleatorios = Math.floor(Math.random()*letras.length);// aleatoriza a variavel 
        senha += letras.substring(numerosAleatorios,numerosAleatorios +1 ); //Define onde inicia e finaliza a senha , dando os numeros aleatorios
    }
}




