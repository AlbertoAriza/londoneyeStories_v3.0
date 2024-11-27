// IMPORTS
import * as model from './model.js';
import * as view_inicio from './views/view_inicio.js';
import * as view_story from './views/view_story.js';
import * as view_question_mch from './views/view_question_mch.js';


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
    console.log(model.state.counters);
    
    // HACER UN AJUSTE INICIAL DE COUNTERS POR SI SE HAN ACABADO LOS ITEMS DEL BLOQUE ACTUAL Y DEBEMOS PASAR A NUEVO BLOQUE O TERMINAR EL JUEGO.
    if(model.state.counters.item >= model.bloques[model.state.counters.bloque].items.length){
        console.log("ajustamos counters");
        
        model.state.counters.bloque++;
        model.state.counters.item = 0;
    }
    
    //***************************************
    // CARGA DE PANTALLAS SEGÚN LOS COUNTERS.
    //***************************************
    console.log("hora de elegir la pantalla a cargar");
    // →→ OPTION 1: CARGA DE PANTALLA DE INICIO
    if (model.state.counters.init) {  // → ESTE BLOQUE SE CARGA SI ES LA PRIMERA VEZ QUE SE CARGA EL JUEGO PARA CARGAR LA PANTALLA DE INICIO
        console.log("Ahora cargaríamos la pantalla de inicio");
        
        model.state.counters.init = false;
        view_inicio.renderInicio();
        view_inicio.loadEvents(events_inicio);

    // →→ OPTION 2: CARGA DE PANTALLA DE HISTORIA
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

    // →→ OPTION 3: CARGA DE PANTALLA DE PREGUNTA MULTIPLE CHOICE
    }else if(model.state.counters.bloque < model.bloques.length && model.bloques[model.state.counters.bloque].type === "question"){
        console.log("Ahora cargaríamos una pregunta de multiple choice");
        // RENDER QUESTION VIEW
        if(model.state.counters.item === 0) view_question_mch.render_question_mch();
        // AJUSTAR QUESTION VIEW
        view_question_mch.update_question_mch(model.state.counters.bloque, model.state.counters.item, model.bloques[model.state.counters.bloque].items[model.state.counters.item]);
        // LOAD EVENTS
        view_question_mch.loadEvents(events_question_mch);
    }else{
        console.log("se fue el tren");
    }// →  AQUÍ SE PUEDEN METER MÁS TIPOS DE PREGUNTAS, Y SUS RENDERIZADOS Y EVENTOS.
}

window.onload = brainFunction;
