// IMPORTS
import * as model from './model.js';
import * as view_inicio from './views/view_inicio.js';
import * as view_story from './views/view_story.js';


// STORY EVENTS FUNCTION
const events_story = function(){
    model.state.counters.item++;
    brainFunction();
}

// INICIO_EVENTS FUNCTION
const events_inicio = function(){
    brainFunction();
}

// BRAIN FUNCTION
const brainFunction = function(){
    // HACER UN AJUSTE INICIAL DE COUNTERS POR SI SE HAN ACABADO LOS ITEMS DEL BLOQUE ACTUAL Y DEBEMOS PASAR A NUEVO BLOQUE O TERMINAR EL JUEGO.
    if(model.state.counters.item >= model.bloques[model.state.counters.bloque].items.length){
        console.log("ajustamos counters");
        
        model.state.counters.bloque++;
        model.state.counters.item = 0;
    }
    
    // CARGA DE PANTALLAS SEGÚN LOS COUNTERS.
    if (model.state.counters.init) {  // → ESTE BLOQUE SE CARGA SI ES LA PRIMERA VEZ QUE SE CARGA EL JUEGO PARA CARGAR LA PANTALLA DE INICIO
        model.state.counters.init = false;
        view_inicio.renderInicio();
        view_inicio.loadEvents(events_inicio);

              /* si aún quedan bloques por poner                --   si el bloque es de tipo historia                        */
    }else if(model.state.counters.bloque < model.bloques.length && model.bloques[model.state.counters.bloque].type === "story"){
        console.log("Ahora cargaríamos una historia");
        // RENDER STORY VIEW SI ES LA PRIMERA VEZ QUE SE CARGA ESTE BLOQUE DE HISTORIA
        if(model.state.counters.item === 0){
            view_story.renderStory(events_story);
        }
        // AJUSTAR STORY VIEW
        view_story.updateStory(model.state.counters.bloque, model.state.counters.item, model.bloques[model.state.counters.bloque].items[model.state.counters.item]);
        // LOAD EVENTS
        view_story.loadEvents(events_story);

    }else if(model.state.counters.bloque < model.bloques.length && model.bloques[model.state.counters.bloque].TYPE === "question"){
        console.log("Ahora cargaríamos una pregunta de grammar");
        // RENDER QUESTION VIEW

        // AJUSTAR QUESTION VIEW

        // LOAD EVENTS
    }// →  AQUÍ SE PUEDEN METER MÁS TIPOS DE PREGUNTAS, Y SUS RENDERIZADOS Y EVENTOS.
}

window.onload = brainFunction;
