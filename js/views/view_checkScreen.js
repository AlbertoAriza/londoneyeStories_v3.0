//  → CÓDIGO DE CHECK SCREEN
const codeInsert_check = `
    <section id="checkScreen--mainContainer"> <!--  Este es el container que contiene la foto en la historia. Tan grande como #gameBoard-->
  
        <div id="checkScreen--whiteBlock">
  
            <!--  Container del texto de la charla. -->
            <div id="checkScreen--textContainer">
                <p id="checkScreen--text">Text</p>
                <!--twin stats-->
                <div id="progressbarContainer">
                    <div class="progressbar1">
                        <p>Only works with JS enabled</p>
                    </div>
                </div>
            </div>
  
            <!-- Foto del personaje de la derecha. -->
            <div id="checkScreen--imgContainer">
                <img src="../imgs/gameMaster.png" alt="" id="checkScreen--img" />
            </div>
        </div>
    </section>
`;

export function renderCheckScreen(data1, data2){
    let getGameBoard = document.querySelector(".gameBoard");
    // inyectar código
    getGameBoard.innerHTML = codeInsert_check;
    
    // hacemos get de elementos e insertamos imágenes
    let getCheckScreenContainer = document.getElementById('checkScreen--mainContainer');
    getCheckScreenContainer.style.backgroundImage = 'url(../imgs/fondoTechnology.jpg)';
    
    let getCheckScreenTextContainer = document.getElementById('checkScreen--textContainer');
    getCheckScreenTextContainer.style.backgroundImage = 'url(../imgs/techBoard.png)';
    
    let progress1;
    progress1 = 100 * data1 / data2; // Aquí está la matemática
    document.getElementById('checkScreen--text').innerHTML = `${data1 > (data2 / 2) ? 'Good' : 'Not very good'}. You got ${data1} out of ${data2} questions.<br><br><span class="bold">[Click to continue]</span>`;

    const getProgressbar1 = document.querySelector(`.progressbar1`);
    getProgressbar1.setAttribute("role", "progressbar1");
    getProgressbar1.setAttribute("aria-valuenow", 0);
    getProgressbar1.setAttribute("aria-live", "polite")
      
    getProgressbar1.setAttribute("aria-valuenow", progress1);
    getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}

export const loadEvents = function(fcn){
    let checkScreenTextContainer = document.getElementById('checkScreen--textContainer');
    checkScreenTextContainer.addEventListener("click", fcn);
}