let continueStoryBtn;


let codeInsert_story = `
    <section id="storyContainer"> <!--  Este es el container que contiene la foto en la historia. Tan grande como #gameBoard-->

        <div id="storyTellingContainer">

            <!-- Foto del personaje de la izquierda. -->
            <div class="storyImgContainer" id="storyImgContainer--left">
                <img src="" alt="" id="storyImgLeft" />
            </div>

            <!--  Container del texto de la charla. -->
            <div id="storyTextContainer">
                <p class="bocadilloToLeft" id="storyText"></p>
            </div>

            <!-- Foto del personaje de la derecha. -->
            <div class="storyImgContainer" id="storyImgContainer--right">
                <img src="" alt="" id="storyImgRight" />
            </div>
        </div>
    </section>
`;

export const renderStory = function(){
    let getGameBoard = document.querySelector(".gameBoard");
    // 1.- inyectar el código
    getGameBoard.innerHTML = codeInsert_story;
}

export const updateStory = function(bloqueNumber, itemNumber, items){
    // 1.- atrapamos elementos
    let storyImgLeft = document.querySelector("#storyImgLeft");
    let storyImgRight = document.querySelector("#storyImgRight");
    let storyText = document.querySelector("#storyText");
    let getStoryContainer = document.querySelector("#storyContainer");
    // 2.- ajustamos elementos
    if(items.imagenFondo) getStoryContainer.style.backgroundImage = `url(${items.imagenFondo})`;
    if(items.imagen1) storyImgLeft.src = items.imagen1;
    if(items.imagen2) storyImgRight.src = items.imagen2;
    if(items.bocadillo && items.bocadillo === "right") {
        storyText.classList.remove("bocadilloToLeft")
        storyText.classList.add("bocadilloToRight")
    }else if(items.bocadillo && items.bocadillo === "left") {
        storyText.classList.remove("bocadilloToRight")
        storyText.classList.add("bocadilloToLeft")

    };
    storyText.innerHTML = items.frase;
}

export const loadEvents = function(fcn){
    // 1.- atrapamos elementos
    continueStoryBtn = document.querySelector("#storyTextContainer");
    // 2.- añadimos funcionalidad al botón
    continueStoryBtn.addEventListener("click", fcn);
 }