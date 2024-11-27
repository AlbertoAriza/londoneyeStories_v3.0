//  → CÓDIGO DE QUIZ MULTIPLE-CHOICE
let data_question_mch = `
    <!--ZONA DE JUEGO TOTAL-->
    <section id="gameSection">
        <!--DATOS BARRA SUPERIOR DE LA PANTALLA-->
        <div id="barraSuperior">
            <h1 id="gameTitle">LONDONEYE STORIES - LAST HOLIDAY</h1>
        </div>

        <!--DATOS BARRA MEDIA DE PANTALLA PARA RESPUESTAS-->
        <div id="barraMedia">
            <button class="answerContainer answersContainer" id="answerContainer1" data-code="4">Answer 1</button>
            <button class="answerContainer answersContainer" id="answerContainer2" data-code="5">Answer 2</button>
            <button class="answerContainer answersContainer" id="answerContainer3" data-code="6">Answer 3</button>
        </div>

        <!--GRÁFICOS DE LA PARTE INFERIOR DE LA PANTALLA-->
        <div id="barraInferior">
            <!-- IMAGEN IZQUIERDA-->
            <div id="containerLeftGirl">
                <img src="" alt="" id="imgGirlLeft" class="imgGirl" />
            </div>

            <!-- BOCADILLO CENTRO-->
            <div id="containerBocadillo">
                <p id="questionText">Text</p>
            </div>

            <!-- IMAGEN DERECHA-->
            <div id="containerRightGirl">
                <img src="" alt="" id="imgGirlRight" class="imgGirl" />
            </div>
        </div>
    </section>
`;
/* ---------- FIN ---------- */


/* ___ ___ _____   ___ _    ___ __  __ ___ _  _ _____ ___          ___   _   __  __ ___   ___ ___ ___ _____ ___ ___  _  _ 
  / __| __|_   _| | __| |  | __|  \/  | __| \| |_   _/ __|  ___   / __| /_\ |  \/  | __| / __| __/ __|_   _|_ _/ _ \| \| |
 | (_ | _|  | |   | _|| |__| _|| |\/| | _|| .` | | | \__ \ |___| | (_ |/ _ \| |\/| | _|  \__ \ _| (__  | |  | | (_) | .` |
  \___|___| |_|   |___|____|___|_|  |_|___|_|\_| |_| |___/        \___/_/ \_\_|  |_|___| |___/___\___| |_| |___\___/|_|\_|
*/



//GET DE LAS RESPUESTAS
let getGameBoard = document.querySelector(".gameBoard");
let getGameSection;
let getBarraMedia;
let getAnswerContainerArray;

//GET DE LAS PREGUNTAS Y VARIABLES DE CONTROL DE ARRAYS DE PREGUNTAS
let getQuestionText;
let setQuestionNumber = 0; // CONTROLA EL BLOQUE DE CONVERSACIÓN EN EL QUE ESTAMOS
let numberOfQuestions = 0; // CONTROLA LA PREGUNTA EN LA QUE NOS ENCONTRAMOS DENTRO DEL BLOQUE

//GET DE LAS IMGs

let getGameImgLeft;
let getGameImgRight;






/*___ _____ _   ___ _____   ___ _   _ _  _  ___ _____ ___ ___  _  _ ___ 
 / __|_   _/_\ | _ \_   _| | __| | | | \| |/ __|_   _|_ _/ _ \| \| / __|
 \__ \ | |/ _ \|   / | |   | _|| |_| | .` | (__  | |  | | (_) | .` \__ \
 |___/ |_/_/ \_\_|_\ |_|   |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|___/
*/

// →  FUNCIÓN QUE RENDERIZA LA PANTALLA DE PREGUNTAS DE LAS MULTIPLE CHOICE QUESTIONS
export const render_question_mch = function(){

    // Code Injection
    getGameBoard.innerHTML = data_question_mch;

    //REASIGNAMOS LOS GET DE LOS ELEMENTOS
    getGameSection = document.getElementById("gameSection");
    getBarraMedia = document.getElementById('barraMedia');
    getAnswerContainerArray = document.querySelectorAll('.answerContainer');

    //GET DE LAS PREGUNTAS Y VARIABLES DE CONTROL DE ARRAYS DE PREGUNTAS
    getQuestionText = document.getElementById("questionText");

    //GET DE LAS IMGs
    getGameImgLeft = document.getElementById("imgGirlLeft");
    getGameImgRight = document.getElementById("imgGirlRight");
}

// →  FUNCIÓN QUE ACTUALIZA LAS IMÁGENES, PREGUNTA Y OPCIONES DE RESPUESTA DE LA PANTALLA MULTIPLE CHOICE QUESTION
export const update_question_mch = function(bloqueNumber, itemNumber, items){
    // Asignamos pregunta y respuestas
    getQuestionText.innerHTML = items.question;
    getAnswerContainerArray.forEach((element, index) => {
        element.classList.remove('incorrectAnswer', 'incorrectAnswerChosen', 'correctAnswerChosen', 'correctAnswer');
        element.classList.add('answersContainer');
        element.innerHTML = items.answers[index]
  });

    // Asignamos imágenes
    if(items.backgroundImage) getGameSection.style.backgroundImage = `url(${items.backgroundImage})`;
    if(items.imagen1) getGameImgLeft.src = items.imagen1;
    if(items.imagen2) getGameImgRight.src = items.imagen2;

    // Lanzamos sfx de nueva pregunta
    const sound = new Audio('sfx/sfxNext.m4a');
    sound.play();

  // Creamos función de lógica de clicks para asignar al eventListener.
  
  const loadEvents = function(e){
    let clicked = e.target.closest('.answerContainer');
    
    //  Guarda por si hace click fuera de los botones.
    if(!clicked) return;

    // Meter aquí todo el código al hacer click al botón.
    // 1.- Mirar si la respuesta es verdadera o falsa.
    // 1.1.- Si es verdadera, ponerla en verde
    if(questions[setQuestionNumber][numberOfQuestions][clicked.dataset.code]) {
      clicked.classList.remove('answersContainer');
      clicked.classList.add('correctAnswerChosen');
      // Cambiar caras de muñecas y sonidos
      getGameImgLeft.src = "../highSchoolStories/girl1veryHappy.png"
      soundEffects.sfxBingo.play();
      quizPreguntasAcertadas++;
      quizPreguntasHechas++
    }
    // 1.2.- Si es falsa, ponerla en rojo
    else {
      clicked.classList.remove('answersContainer');
      clicked.classList.add('incorrectAnswerChosen');
      // Cambiar caras de muñecas y sonidos
      getGameImgLeft.src = "../highSchoolStories/girl1surprised.png"
      soundEffects.sfxWrongAnswer.play();
      quizPreguntasHechas++;
    }
      
    // cambiar el resto de respuestas a sus colores de verdadero o falso
    setTimeout(function(){
      getAnswerContainerArray.forEach(function(element){
        if(element === clicked) return;
        if (questions[setQuestionNumber][numberOfQuestions][element.dataset.code]) {
          element.classList.remove('answersContainer');
          element.classList.add('correctAnswer');
        }
        else {
          element.classList.remove('answersContainer');
          element.classList.add('incorrectAnswer');
        }
      });
    }, 1000);

    //  Anulamos el evento para que no se hagan dobles clicks
    getBarraMedia.removeEventListener('click', logicaDeClicks);

    //  Ajustar los contadores de preguntas y pasar a la siguiente pregunta.
    setTimeout(function(){
      numberOfQuestions++;
      if(numberOfQuestions < questions[setQuestionNumber].length) activityMultipleChoiceStartFunction();
      else {
        setQuestionNumber++;
        numberOfQuestions = 0;
        controlQuizMChCodeInject = true;
        controlStoryScreenCodeInjection = true;

        quizPreguntasAcertadasTotales += quizPreguntasAcertadas;
        quizPreguntasHechasTotales += quizPreguntasHechas;
        
        checkProgressFunction(quizPreguntasAcertadas, quizPreguntasHechas);
        quizPreguntasAcertadas = 0;
        quizPreguntasHechas = 0;
      }
      
    }, 3000)
  };


  getBarraMedia.addEventListener('click', logicaDeClicks);
}