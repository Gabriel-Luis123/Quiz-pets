const anwser1 = document.querySelectorAll('input[name="pais"]');
const anwser1Resposta = "Gales"
const anwser1Cor = document.getElementById('resposta1')
const anwser2 =document.querySelectorAll('input[name="inteligente"]')
const anwser2Resposta = "Collie"
const anwser2Cor = document.getElementById('resposta2')
const anwser3 = document.querySelectorAll('input[name="racas"]')
const anwser3Resposta = "vira-lata-certo"
const anwser3Cor = document.getElementById('resposta3')
const anwser4 = document.querySelectorAll('input[name="gatos-correto"]')
const anwser4Resposta = "Femeas"
const anwser4Cor = document.getElementById('resposta4')
const anwser5 = document.querySelectorAll('input[name="cor"]')
const anwser5Resposta = "Laranja"
const anwser5Cor = document.getElementById('resposta5')
const anwser6 = document.querySelectorAll('input[name="rex"]')
const anwser6Resposta = "La"
const anwser6Cor = document.getElementById('resposta6')
const anwser7 = document.querySelectorAll('input[name="Parte-corpo"]')
const anwser7Resposta = "Pele"
const anwser7Cor = document.getElementById('resposta7')
const anwser8 = document.querySelectorAll('input[name="dominar"]')
const anwser8Resposta = "gerbil"
const anwser8Cor = document.getElementById('resposta8')
const anwser9 = document.querySelectorAll('input[name="checkbox"]')
const anwser9RespostaA = "camundongo-checkbox"
const anwser9RespostaB = "capivara"
const anwser9RespostaC = "rato"
const anwser9RespostaD = "sagui"
const anwser9RespostaE = "mini-porquinho"
const anwser9RespostaF = "Cacatua"
const anwser9RespostaG = "Jiboia"
const anwser9Cor = document.querySelectorAll('.respostas__corretas')
const anwser10 = document.querySelectorAll('input[name="animais-2"]')
const anwser10Resposta = "animais-opcao-4"
const anwser10Cor = document.getElementById('resposta10')
const botaoEnviar = document.querySelector('.btn__submit')
const textoFormatado = document.getElementById('mensagemResultado')
const textoFormatadoCheckbox = document.getElementById('mensagemCheckboxResultado')
const opcaoSelecionada = verificarSelecionado(anwser1);
const botaoReset = document.querySelector('#reset');
console.log(anwser9Cor)

let acertosCheckbox = 0
let errosCheckbox = 0
let acertos = 0
let erros = 0

function verificarCheckbox(resposta) {
  let selecionado;
    resposta.forEach((resposta__correto) => {
        if (resposta__correto.checked) {
            console.log(resposta__correto)
            selecionado = resposta__correto;  
            if (
              selecionado.id === "camundongo-checkbox" ||
              selecionado.id === "rato" ||
              selecionado.id === "Cacatua" ||
              selecionado.id === "mini-porquinho" ||
              selecionado.id === "Jiboia"
          ) {
              acertosCheckbox++
            } else{
              label_id = selecionado.id + "_label"
              const labelElemente = document.getElementById(label_id)
              labelElemente.classList.remove('normal')
              errosCheckbox++
            }
        }
    }
  );
  anwser9Cor.forEach(element => {
    element.classList.remove('normal');
  });
}

function verificarSelecionado(resposta) {
    let selecionado;
    resposta.forEach((resposta__correto) => {
        if (resposta__correto.checked) {
            console.log(resposta__correto)
            selecionado = resposta__correto;  
        }
    });
    return selecionado;
}

function verificarOpcaoSelecionada(selecionada, idUsado, Cor) {
  if (selecionada) {
    if (selecionada.id === idUsado) {
      console.log(acertos)
      Cor.classList.remove('normal')
      acertos ++
    } else {
      if (selecionada.id != null){
        erros ++
        label_id = selecionada.id + "_label"
        const labelElemente = document.getElementById(label_id)
        labelElemente.classList.remove('normal')
        Cor.classList.remove('normal')
      } 
        

    }
}

}


document.querySelector('#verificar').addEventListener('click', () => {
  console.log(acertosCheckbox)
    verificarOpcaoSelecionada(verificarSelecionado(anwser1), anwser1Resposta,anwser1Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser2), anwser2Resposta, anwser2Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser3), anwser3Resposta, anwser3Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser4), anwser4Resposta, anwser4Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser5), anwser5Resposta, anwser5Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser6), anwser6Resposta, anwser6Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser7), anwser7Resposta, anwser7Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser8), anwser8Resposta, anwser8Cor)
    verificarOpcaoSelecionada(verificarSelecionado(anwser10), anwser10Resposta, anwser10Cor)
    if (acertos >0 || erros>0){
      textoFormatado.style.display = 'block';
      textoFormatado.innerHTML = `Resultado de todas questões (menos a questão 9): Você acertou ${acertos} respostas e errou ${erros} respostas`;
    }
    
    verificarCheckbox(anwser9,anwser9Cor)
  
    if (acertosCheckbox>0 || errosCheckbox>0){
      if(acertosCheckbox == 5 && errosCheckbox == 0){
        errosCheckbox += 5 - acertosCheckbox
        acertosCheckbox += 2
        textoFormatadoCheckbox.style.display = 'block';
        textoFormatadoCheckbox.innerHTML = `Você acertou em relação à questão 9: ${acertosCheckbox} alternativas e errou ${errosCheckbox} alternativas`
      }
      if(acertosCheckbox< 5 && errosCheckbox == 1){
        errosCheckbox += 5 - acertosCheckbox
        acertosCheckbox += 1
        textoFormatadoCheckbox.style.display = 'block';
        textoFormatadoCheckbox.innerHTML = `Você acertou em relação à questão 9: ${acertosCheckbox} alternativas e errou ${errosCheckbox} alternativas`
      }
      if(acertosCheckbox< 5 && errosCheckbox == 2){
        errosCheckbox += 5 - acertosCheckbox
        acertosCheckbox += 0
        textoFormatadoCheckbox.style.display = 'block';
        textoFormatadoCheckbox.innerHTML = `Você acertou em relação à questão 9: ${acertosCheckbox} alternativas e errou ${errosCheckbox} alternativas`
      }
      
    }
    
    acertos = 0
    erros = 0
    acertosCheckbox = 0
    errosCheckbox = 0
});

function resetarQuiz() {
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.checked = false;
  });

  document.querySelectorAll('.quiz__perguntas__alternativa__opcao__titulo').forEach(titulo => {
    titulo.classList.add('normal'); 
  });
  textoFormatado.style.display = 'none';
  textoFormatadoCheckbox.style.display = 'none';
}

botaoReset.addEventListener('click', resetarQuiz);



document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.mobile-menu-icon button');
    const header = document.querySelector('.cabecalho');
  
    menuIcon.addEventListener('click', function() {
      header.classList.toggle('open');
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const curiosidadesIcon = document.querySelector('.curiosidades__menu button');
    const header = document.querySelector('.cabecalho');
  
    curiosidadesIcon.addEventListener('click', function() {
      header.classList.toggle('open2');
    });
 });