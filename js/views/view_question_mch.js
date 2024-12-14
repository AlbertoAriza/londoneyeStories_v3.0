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

//GET DE LOS DISTINTOS ELEMENTOS DE LAS MULTIPLE CHOICE QUESTIONS
let getQuestionText;

//GET DE LAS IMGs
let getGameImgLeft;
let getGameImgRight;



// →  FUNCIÓN QUE RENDERIZA LA PANTALLA DE PREGUNTAS DE LAS MULTIPLE CHOICE QUESTIONS
export const render_question_mch = function(){

    // Code Injection
    getGameBoard.innerHTML = data_question_mch;

    //REASIGNAMOS LOS GET DE LOS ELEMENTOS
    getGameSection = document.getElementById("gameSection");
    getBarraMedia = document.getElementById('barraMedia');
    //getAnswerContainerArray = document.querySelectorAll('.answerContainer');

    //GET DE LAS PREGUNTAS Y VARIABLES DE CONTROL DE ARRAYS DE PREGUNTAS
    getQuestionText = document.getElementById("questionText");
    //GET DE LAS IMGs
    getGameImgLeft = document.getElementById("imgGirlLeft");
    getGameImgRight = document.getElementById("imgGirlRight");
}

// →  FUNCIÓN QUE ACTUALIZA LAS IMÁGENES, PREGUNTA Y OPCIONES DE RESPUESTA DE LA PANTALLA MULTIPLE CHOICE QUESTION
export const update_question_mch = function(bloqueNumber, itemNumber, items){

    // Limpiar respuestas anteriores
    getBarraMedia.innerHTML = "";

    // Asignamos pregunta
    getQuestionText.innerHTML = items.question;

    // Generar respuestas dinámicamente
    items.answers.forEach((answer, index) => {
      const answerButton = document.createElement('button');
      answerButton.classList.add('answerContainer');
      answerButton.dataset.code = index; // Asignar data-code automáticamente
      answerButton.innerHTML = answer;
      getBarraMedia.appendChild(answerButton);
      console.log(answerButton);
      
    });

    // Asignamos imágenes
    if(items.imagenFondo) getGameSection.style.backgroundImage = `url(${items.imagenFondo})`;
    getGameImgLeft.src = items.imagen1;
    getGameImgRight.src = items.imagen2;

    // Lanzamos sfx de nueva pregunta
    const sound = new Audio('sfx/sfxNext.m4a');
    sound.play();
}

export const loadEvents = function(func){
  document.getElementById('barraMedia').addEventListener('click', func);
}