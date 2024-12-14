const codeInsert_final = `
    <section id="finalScreen--mainContainer"> <!--  Este es el container que contiene la foto en la historia. Tan grande como #gameBoard-->
  
        <div id="finalScreen--whiteBlock">
  
            <!--  Container del texto de la charla. -->
            <div id="finalScreen--textContainer">
                <p id="finalScreen--text">Text</p>
                <!--twin stats-->
                <div id="progressbarContainer">
                    <div class="progressbar1">
                        <p>Only works with JS enabled</p>
                    </div>
                </div>
            </div>
  
            <!-- Foto del personaje de la derecha. -->
            <div id="finalScreen--imgContainer">
                <img src="../imgs/gameMaster.png" alt="" id="finalScreen--img" />
            </div>
        </div>
    </section>
`;

export function renderFinalScreen(data1, data2){
    let getGameBoard = document.querySelector(".gameBoard");
    // inyectar código
    getGameBoard.innerHTML = codeInsert_final;
    
    // hacemos get de elementos e insertamos imágenes
    let getfinalScreenContainer = document.getElementById('finalScreen--mainContainer');
    getfinalScreenContainer.style.backgroundImage = 'url(../imgs/fondoTechnology.jpg)';
    
    let getfinalScreenTextContainer = document.getElementById('finalScreen--textContainer');
    getfinalScreenTextContainer.style.backgroundImage = 'url(../imgs/techBoard.png)';
    
    let progress1;
    progress1 = 100 * data1 / data2; // Aquí está la matemática
    document.getElementById('finalScreen--text').innerHTML = `${data1 > (data2 / 2) ? 'Good' : 'Not very good'}. You got ${data1} out of ${data2} questions.<br><br><span class="bold">[Click to close the program]</span>`;

    const getProgressbar1 = document.querySelector(`.progressbar1`);
    getProgressbar1.setAttribute("role", "progressbar1");
    getProgressbar1.setAttribute("aria-valuenow", 0);
    getProgressbar1.setAttribute("aria-live", "polite")
      
    getProgressbar1.setAttribute("aria-valuenow", progress1);
    getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}

export const loadEvents = function(fcn){
    let finalScreenTextContainer = document.getElementById('finalScreen--textContainer');
    finalScreenTextContainer.addEventListener("click", fcn);
}