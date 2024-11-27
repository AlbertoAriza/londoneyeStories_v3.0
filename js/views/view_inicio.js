
let inicioBtn;

let codeInsert_inicio = `
<section class="startScreenSection">
     <!--startScreenSection_leftMenu-->
     <!--DOCUMENTACIÓN: Este 'div' conforma la parte izquierda de la pantalla de la 'startScreenSection'.
       Esta incluye el botón de inicio del juego.-->
     <div class="startScreenSection_leftMenu">
       <!--startScreenSection_leftMenu_leftMenuButton-->
       <!--DOCUMENTACIÓN: Botón de inicio del juego.-->
       <button class="startScreenSection_leftMenu_leftMenuButton">Start Game</button>
     </div>
     <!-------------------------------->

     <!--startScreenSection_rightMenu-->
     <!--DOCUMENTACIÓN: Este 'div' conforma la parte derecha de 'startScreenSection' con las imágenes que suben de una en una.-->
     <div class="startScreenSection_rightMenu">
         
       <!--Div de img 1-->
       <!--DOCUMENTACIÓN: Imagen de Akari que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer1">
         <img src="imgs/girl1happy.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
         
       <!--Div de img 2-->
       <!--DOCUMENTACIÓN: Imagen de Sakura que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer2">
         <img src="imgs/girl2happy.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
       
       <!--Div de img 3-->
       <!--DOCUMENTACIÓN: Imagen de Haruki que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer3">
         <img src="imgs/boy1.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
       
       <!--Div de img 4-->
       <!--DOCUMENTACIÓN: Imagen de Mrs Himari que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer4">
         <img src="imgs/teacher.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
     
       <!--Div de img 5-->
       <!--DOCUMENTACIÓN: Imagen de Headmistress que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer5">
         <img src="imgs/headMaster01.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
     </div>
   </section>
`;

//  function to inject the code and prepare the buttons for interaction
export const renderInicio = function(){
   let getGameBoard = document.querySelector(".gameBoard");
   // 1.- inyectar el código
   getGameBoard.innerHTML = codeInsert_inicio;
}

export const loadEvents = function(fcn){
   // 1.- atrapamos elementos
   inicioBtn = document.querySelector(".startScreenSection_leftMenu_leftMenuButton");
   // 2.- añadimos funcionalidad al botón
   inicioBtn.addEventListener("click", fcn);
}
