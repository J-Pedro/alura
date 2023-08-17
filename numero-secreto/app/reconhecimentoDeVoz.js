const elementoChute = document.getElementById('chute')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

// recognition.addEventListerner = ('result', onSpeak);

// function onSpeak(e) {
//     console.log(e);
// }

recognition.onresult = (e) => {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
};

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
