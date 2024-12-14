import * as model from './model.js';
import * as view_inicio from './views/view_inicio.js';
import * as view_story from './views/view_story.js';
import * as view_question_mch from './views/view_question_mch.js';
import * as view_checkScreen from './views/view_checkScreen.js';
import * as view_finalScreen from './views/view_finalScreen.js';
import * as eventFunctions from './eventFunctions.js';

/** 
 * BRAIN FUNCTION
 *  →  OPTION 0:
 *      * Primero debo ver si se ha acabado un bloque de algún tipo de preguntas para mostrar CHECKEO
 *      * Segundo ajustamos los counters por si se han acabado los items del bloque actual.
 *  →  OPTION 1:  CARGA DE PANTALLA DE INICIO
 *  →  OPTION 2:  CARGA DE PANTALLA DE HISTORIA
 *  →  OPTION 3:  CARGA DE PREGUNTA MULTIPLE CHOICE
 *  →  FINAL ELSE: PANTALLA DE FIN DE JUEGO
 * */ 
export const brainFunction = function(){
    
    // →→ OPTION 0 - Entramos en este bloque cuando se ha acabado un bloque.
    if(model.state.counters.item >= model.bloques[model.state.counters.bloque].items.length){
        // * Primero debo ver si se ha acabado un bloque de algún tipo de preguntas para mostrar los resultados
        if(model.bloques[model.state.counters.bloque].type !== "story") {
            console.log("Aquí se carga la pantalla de checkeo de respuestas");
            let totalAnswers = model.state.answers.filter(answer => answer.bloque === model.state.counters.bloque).length;
            let correctAnswers = model.state.answers.filter(answer => answer.bloque === model.state.counters.bloque && answer.isCorrect === true).length;
            console.log(correctAnswers, totalAnswers);
            // RENDER CHECK SCREEN
            console.log("Aquí se carga la pantalla de checkeo de respuestas 2");
            view_checkScreen.renderCheckScreen(correctAnswers, totalAnswers);
            // LOAD EVENTS
            console.log("Aquí se carga la pantalla de checkeo de respuestas 3");
            view_checkScreen.loadEvents(brainFunction);
            model.state.counters.bloque++;
            model.state.counters.item = 0;
            console.log(model.state.counters);
            return;
        }
        // * Segundo ajustamos los counters por si se han acabado los items del bloque actual.
        model.state.counters.bloque++;
        model.state.counters.item = 0;
    }
    
    // →→ OPTION 1: CARGA DE PANTALLA DE INICIO
    if (model.state.counters.init) {  // → ESTE BLOQUE SE CARGA SI ES LA PRIMERA VEZ QUE SE CARGA EL JUEGO PARA CARGAR LA PANTALLA DE INICIO
        console.log("Ahora cargaríamos la pantalla de inicio");
        
        model.state.counters.init = false;
        view_inicio.renderInicio();
        view_inicio.loadEvents(eventFunctions.initFunction);

    // →→ OPTION 2: CARGA DE PANTALLA DE HISTORIA
              /* si aún quedan bloques por poner                --   si el bloque es de tipo historia                        */
    }else if(model.state.counters.bloque < model.bloques.length && model.bloques[model.state.counters.bloque].type === "story"){
        console.log("Ahora cargaríamos una historia");
        // RENDER STORY VIEW SI ES LA PRIMERA VEZ QUE SE CARGA ESTE BLOQUE DE HISTORIA
        if(model.state.counters.item === 0) view_story.renderStory();
        // AJUSTAR STORY VIEW
        view_story.updateStory(model.state.counters.bloque, model.state.counters.item, model.bloques[model.state.counters.bloque].items[model.state.counters.item]);
        // LOAD EVENTS
        view_story.loadEvents(eventFunctions.eventFunction_story);

    // →→ OPTION 3: CARGA DE PANTALLA DE PREGUNTA MULTIPLE CHOICE
    }else if(model.state.counters.bloque < model.bloques.length && model.bloques[model.state.counters.bloque].type === "question_mch"){
        console.log("Ahora cargaríamos una pregunta de multiple choice");
        // RENDER QUESTION VIEW
        if(model.state.counters.item === 0) view_question_mch.render_question_mch();
        // AJUSTAR QUESTION VIEW
        view_question_mch.update_question_mch(model.state.counters.bloque, model.state.counters.item, model.bloques[model.state.counters.bloque].items[model.state.counters.item]);
        // LOAD EVENTS
        view_question_mch.loadEvents(eventFunctions.eventFunction_mch, model.bloques[model.state.counters.bloque].items[model.state.counters.item].correctAnswer);

    // →→ OPTION 4: AQUÍ SE PUEDEN METER MÁS TIPOS DE PREGUNTAS, Y SUS RENDERIZADOS Y EVENTOS.
    }else if(3 === 4){
    // (content)

    // →→ FINAL ELSE: PANTALLA DE FIN DE JUEGO
    }else{
        let totalAnswers = model.state.answers.length;
        let totalCorrectAnswers = model.state.answers.filter(answer => answer.isCorrect === true).length;
        view_finalScreen.renderFinalScreen(totalCorrectAnswers, totalAnswers);
        view_finalScreen.loadEvents(eventFunctions.eventFunction_finalScreen);
    }
}

window.onload = brainFunction;
