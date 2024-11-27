function checkProgressFunction(data1, data2){
    // inyectar código
    getGameBoard.innerHTML = checkScreenCode;
    
    // hacemos get de elementos e insertamos imágenes
    let getCheckScreenContainer = document.getElementById('checkScreen--mainContainer');
    getCheckScreenContainer.style.backgroundImage = 'url(../highSchoolStories/fondoTechnology.jpg)';
    
    let getCheckScreenTextContainer = document.getElementById('checkScreen--textContainer');
    getCheckScreenTextContainer.style.backgroundImage = 'url(../highSchoolStories/techBoard.png)';
    
    let progress1;
        
    

    if(setConversationNumber < conversationPages.length){
        progress1 = 100 * data1 / data2; // Aquí está la matemática
        document.getElementById('checkScreen--text').innerHTML = `${data1 > (data2 / 2) ? 'Good' : 'Not very good'}. You got ${data1} out of ${data2} questions.<br><br><span class="bold">[Click to continue]</span>`;
        document.getElementById('checkScreen--textContainer').addEventListener('click', conversar);
    }else{
        progress1 = 100 * quizPreguntasAcertadasTotales / quizPreguntasHechasTotales; // Aquí está la matemática
        document.getElementById('checkScreen--text').innerHTML = `This is the end of the activity.<br />You got ${quizPreguntasAcertadasTotales} out of ${quizPreguntasHechasTotales} questions.<br /><br><span class="bold">[Click to finish the test]</span>`
        document.getElementById('checkScreen--textContainer').addEventListener('click', function(){
            window.close();
        });
    }

    const getProgressbar1 = document.querySelector(`.progressbar1`);
    getProgressbar1.setAttribute("role", "progressbar1");
    getProgressbar1.setAttribute("aria-valuenow", 0);
    getProgressbar1.setAttribute("aria-live", "polite")
      
    getProgressbar1.setAttribute("aria-valuenow", progress1);
    getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}