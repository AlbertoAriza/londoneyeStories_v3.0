import * as model from './model.js';
import { brainFunction } from './controller.js';


export const initFunction = function(){
  brainFunction();
  const bso = new Audio('../sfx/sfxBSO.mp3');
  bso.play();
  bso.volume = 0.02;
}

export const eventFunction_finalScreen = function(){
  window.close();
}

export const eventFunction_story = function(){
    console.log("click en story");
    document.querySelector("#storyTextContainer").removeEventListener('click', eventFunction_story);
    model.state.counters.item++;
    brainFunction();
}


// → EVENT FUNCTION PARA PREGUNTAS DE MULTIPLE CHOICE
// Creamos función de lógica de clicks para asignar al eventListener.
export const eventFunction_mch = function(e){

    let respuestas = document.querySelectorAll(".answerContainer");
    let clicked = e.target.closest('.answerContainer');
    
    //  Guarda por si hace click fuera de los botones.
    if(!clicked) return;

    //  Anulamos el evento para que no se hagan dobles clicks
    document.getElementById('barraMedia').removeEventListener('click', eventFunction_mch);
    console.log("elemento clickado: ", clicked);
    
    // Meter aquí todo el código al hacer click al botón.
    // 1.- Mirar si la respuesta es verdadera o falsa.
    // 1.1.- Si es verdadera, ponerla en verde
    if(clicked.dataset.code == model.bloques[model.state.counters.bloque].items[model.state.counters.item].correctAnswer) {
        clicked.classList.remove('answerContainer');
        clicked.classList.add('correctAnswer');
        // Cambiar caras de muñecas y sonidos
        document.getElementById("imgGirlLeft").src = "../imgs/girl1veryHappy.png"
        if(document.getElementById("imgGirlRight").src == "../imgs/girl2happy.png.png"){
          document.getElementById("imgGirlRight").src = "../imgs/girl2surprised.png";
        }
        const sound = new Audio('sfx/sfxSentenceBingo.mp3');
        sound.play();
    }
    // 1.2.- Si es falsa, ponerla en rojo
    else {
        clicked.classList.remove('answerContainer');
        clicked.classList.add('incorrectAnswer');
        // Cambiar caras de muñecas y sonidos
        document.getElementById("imgGirlLeft").src = "../imgs/girl1surprised.png"
        if(document.getElementById("imgGirlRight").src == "../imgs/girl2happy.png.png"){
          document.getElementById("imgGirlRight").src = "../imgs/girl2worried.png";
        }
        document.getElementById("imgGirlRight").src = "../imgs/girl2worried.png"
        const sound = new Audio('sfx/sfxWrong.wav');
        sound.play();
    }

    setTimeout(function() {
      respuestas.forEach((e, index) => {
        if (e !== clicked) {
          if (index === model.bloques[model.state.counters.bloque].items[model.state.counters.item].correctAnswer) {
            e.classList.remove('answerContainer');
            e.classList.add('correctAnswer');
          } else {
            e.classList.remove('answerContainer');
            e.classList.add('incorrectAnswer');
          }
        }
      });
    }, 1000);

    //  Ajustar los contadores de preguntas y pasar a la siguiente pregunta.
    setTimeout(function(){
      const currentBloque = model.state.counters.bloque;
      const currentItem = model.state.counters.item;
      const currentQuestion = model.bloques[currentBloque].items[currentItem];
      const selectedAnswerIndex = parseInt(clicked.dataset.code);
      const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;

      // Guardar la respuesta en model.state.answers
      model.state.answers.push({
        bloque: currentBloque,
        item: currentItem,
        selectedAnswer: selectedAnswerIndex,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isCorrect,
      });
      console.log(model.state.answers);
      
      // Continuar con la siguiente pregunta
      model.state.counters.item++;
      brainFunction();
      
    }, 3000)
};

  