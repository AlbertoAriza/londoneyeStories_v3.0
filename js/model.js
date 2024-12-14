export const state = {
    // → VARIABLES DE CONTROL
    counters: {
        init: true,
        bloque: 0,
        item: 0,
    },
    // → VARIABLES DE CONTROL DE PUNTUACIÓN
    answers:[],
}

export const bloques = [
    // → BLOQUE 00
    // → BLOQUE "STORY"
    {   
        bloque: 0,
        type: 'story', 
        items:[
            /*00-00*/ 
                    { 
                        orden: 0,
                        imagenFondo: '../imgs/fondoCalle01.jpg',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: "",
                        bocadillo: "",
                        frase: `Hello my friend! How is it going?<br> Do you remember me? I'm Akari.<br>We met on our first day at school.<br><br><span class= "bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-01*/ 
                    {
                        orden: 1,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `What a wonderful day to attend classes<br />and learn lots of new things!<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-02*/ 
                    {
                        orden: 2,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `Today, we're not late.<br>Let's see if we can get to LondonEye School<br>and find our friend Sakura.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-03*/ 
                    {
                        orden: 3,
                        imagenFondo:'../imgs/fondoSchoolFacade.png',
                        imagen1: "../imgs/girl1happy.png",
                        imagen2: "",
                        bocadillo: "",
                        frase: `Here we are. A new day at school.<br>I love this place.<br>All these people learning English together.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-04*/ 
                    {
                        orden: 4,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `Look! It's Sakura.<br>Sakura! Over here!<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-05*/ 
                    {
                        orden: 5,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: '../imgs/girl2happy.png',
                        bocadillo: "right",
                        frase: `Hello Akari.<br>Hello my friend.<br>How are you?<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-06*/ 
                    {
                        orden: 6,
                        bocadillo: "left",
                        frase: `Fine! I think we have a new class with Mrs. Himari.<br>I love her classes.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-07*/ 
                    {
                        orden: 7,
                        bocadillo: "right",
                        frase: `Yes! It's our first class today.<br>Let's go to our classroom. The class is about to start.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-08*/
                    {
                        orden: 8,
                        imagenFondo: '../imgs/fondoAula.jpg',
                        bocadillo: "",
                        frase: `Here we are. Let's take our seats. Mrs Himari is coming.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-09*/ 
                    {
                        orden: 9,
                        imagenFondo: '../imgs/fondoAula.jpg',
                        imagen1:"empty",
                        imagen2: '../imgs/teacher.png',
                        bocadillo: "",
                        frase: `Hello students. Is everybody here today?<br>Very good! Let's start the class.<br>Today we are studying the "PAST TENSE"<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-10*/ 
                    {
                        orden: 10,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `We are learning about the "PAST SIMPLE"<br>and "PAST CONTINUOUS".<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-11*/
                    {
                        orden: 11,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `So, the past simple...<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*00-12*/
                    {
                        orden: 12,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `... And that's all about the past tense.<br />Well, I think it's time for a challenge.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["../sfx/sfxYawnLongFemale.mp3"],
                    },
            /*00-13*/
                    {
                        orden: 13,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `Sakura! Ask Akari some questions about the PAST SIMPLE and PAST CONTINUOUS.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            /*01-00*/
                    {
                        orden: 14,
                        imagenFondo: "",
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        bocadillo: "left",
                        frase: `Yes Mrs. Himari!<br />We are ready.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        ]
    },

    // → BLOQUE 01
    // → BLOQUE "QUESTION_MCH"
    {
        bloque: 1,
        type: 'question_mch', 
        items:[
                    {
                        imagenFondo: '../imgs/fondoAula.jpg',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question: `<span class = "bold">1/10.- Which sentence is correct?</span`,
                        answers: [
                            `Maria and Carlos was my friends when I was a child.`,
                            `Maria and Carlos were my friends when I was a child.`,
                            `Maria and Carlos be my friends when I was a child.`,
                        ],
                        correctAnswer: 1,
                    }, 
                    {
                        imagenFondo:'',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question: `<br><span class = "bold">2/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">_____ some good news last week about the project.</span>`,
                        answers:[
                            "There be",
                            "There was",
                            "There were",
                        ],
                        correctAnswer: 1,
                    }, 
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">3/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Mark and Sarah _____ want to play football with me yesterday.</span>`,
                        answers: [
                            `not`,
                            `don't`,
                            `didn't`,
                        ],
                        correctAnswer: 2,
                    }, 
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">4/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Karen _____ to the cinema last weekend.</span>`,
                        answers:[
                            `go`,
                            `went`,
                            `gone`,
                        ],
                        correctAnswer: 1,
                    }, 
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">5/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We used _____ a lot of money when my father ran the company.</span>`,
                        answers:[
                            `make`,
                            `making`,
                            `to make`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">6/10.- Do you know the past of this verb?</span><br><br><span class = "cursiva">fall (caer)</span>`,
                        answers:[
                            `fell`,
                            `felt`,
                            `falled`
                        ],
                        correctAnswer: 0,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">7/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Yesterday, while we _________, it __________ to rain.</span>`,
                        answers:[
                            `walk / start`,
                            `walked / was starting`,
                            `were walking / started`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">8/10.- Which sentence is correct?</span`,
                        answers:[
                            `They don't used to go to the beach when they were young.`,
                            `They didn't use to go to the beach when they were young.`,
                            `They didn't used to go to the beach when they were young.`,
                        ],
                        correctAnswer: 1,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">9/10.- Which sentence is correct?</span>`,
                        answers:[
                            `When did you go to the beach for the last time?`,
                            `When did you went to the beach for the last time?`,
                            `When you went to the beach for the last time?`,
                        ],
                        correctAnswer: 0,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question:`<span class = "bold">10/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">_____ John broke the window, I was studying</span>`,
                        answers:[
                            `When`,
                            `While`,
                            `As`,
                        ],
                    correctAnswer: 0,
                    },
        ],
    },



    // → BLOQUE 02
    // → BLOQUE "STORY"
    {
        bloque: 2,
        type: 'story', 
        items:[
        /*02-00*/ 
                    {
                        orden: 1,
                        imagenFondo: '../imgs/fondoAula.jpg',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/teacher.png',
                        bocadillo: "right",
                        frase: `Thank you Akari and Sakura.<br /> It's time to take a break.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-01*/ 
                    {
                        orden: 2,
                        imagenFondo: "",
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        bocadillo: "right",
                        frase: `Akari, we can go to the park during the break.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-02*/ 
                    {
                        orden: 3,
                        imagenFondo: '../imgs/fondoParque01.jpg',
                        imagen1: '',
                        imagen2: '', 
                        bocadillo: "left",
                        frase: `Perfect. This is a lovely place to spend the break.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-03*/ 
                    {
                        orden: 4,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `The class was really enjoyable.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-04*/ 
                    {
                        orden: 5,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "right",
                        frase: `Yes! All the students were paying a lot of attention.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-05*/ 
                    {
                        orden: 6,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "left",
                        frase: `And I learnt a lot.<br />Did you see Haruki?<br />He was writing every word Mrs. Himari said.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-06*/ 
                    {
                        orden: 7,
                        imagenFondo: "",
                        imagen1: '../imgs/girl1surprised.png',
                        imagen2: '../imgs/boy1.png',
                        bocadillo: "right",
                        frase: `Hello Sakura!<br />Hello Akari!<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["../sfx/sfx_maleLaugh17.mp3"],
                    },
        /*02-07*/ 
                    {
                        orden: 8,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `It's a bit chilly in the park today.<br />The other students are in a café nearby.<br />Do you want to come?<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-08*/ 
                    {
                        orden: 9,
                        imagenFondo: "",
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: "",
                        bocadillo: "left",
                        frase: `What do you think Sakura?<br /> It seems that it is going to rain.<br />Let's go with our classmates<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-09*/ 
                    {
                        orden: 10,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: '../imgs/girl2happy.png',
                        bocadillo: "right",
                        frase: `Yeah! The coffee shop sounds fun.<br />Let's go.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-10*/ 
                    {
                        orden: 11,
                        imagenFondo: '../imgs/fondoCafe.png',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/boy1.png',
                        bocadillo: "",
                        frase: `Here we are! Much better!<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-11*/ 
                    {
                        orden: 12,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "",
                        frase: `Akari, we were talking about our last holiday.<br />Tell us. Where did you go last summer?<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        /*02-11*/ 
                    {
                        orden: 13,
                        imagenFondo: "",
                        imagen1: "",
                        imagen2: "",
                        bocadillo: "left",
                        frase: `Of course!<br><br><span class="bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
        ]
    },

    // → BLOQUE 03
    // → BLOQUE "QUESTION_MCH"
    {
        bloque: 3,
        type: 'question_mch', 
        items:[
                    {
                        imagenFondo: '../imgs/fondoCafe.webp',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: 'boy1.png',
                        question: `<span class = "bold">1/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Last summer my family and I _____ to go to the beach.</span>`,
                        answers: [
                            `want`,
                            `to want`,
                            `wanted`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">2/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We _____ to go to Cádiz.</span`,
                        answers: [
                            `decided`,
                            `decide`,
                            `to decide.`,
                        ],
                        correctAnswer: 0,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">3/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We _____ there when I was very young.</span`,
                        answers: [
                            `use to go`,
                            `used go`,
                            `used to go`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">4/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">I _____ to see my friends from my childhood.</span`,
                        answers: [
                            `not expect`,
                            `didn't expect`,
                            `didn't expected`,
                        ],
                        correctAnswer: 1,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">5/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">But they _____ there when I arrived in Cádiz.</span`,
                        answers: [
                            `be`,
                            `was`,
                            `were`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">6/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">They _____ their holiday there too.</span`,
                        answers: [
                            `to spend`,
                            `spending`,
                            `were spending`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">7/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">One day, while we _________ in a restaurant, we __________ a famous actor.</span`,
                        answers: [
                            `eat / see`,
                            `ate / were seeing`,
                            `were eating / saw`,
                        ],
                        correctAnswer: 2,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">8/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We _____ watching horror films.</span`,
                        answers: [
                            `loved`,
                            `loving`,
                            `loves`,
                        ],
                        correctAnswer: 0,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">9/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">One day, while we _______ a horror movie, the lights _____.</span`,
                        answers: [
                            `were watching / came out`,
                            `were watching / went out`,
                            `were watching / passed out`,
                        ],
                        correctAnswer: 1,
                    },
                    {
                        imagenFondo: '',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '',
                        question: `<span class = "bold">10/10.- We _____ so frightened that I wanted to cry.</span`,
                        answers: [
                            `was`,
                            `were`,
                            `be`,
                        ],
                        correctAnswer: 1,
                    },
        ]
    },

    // → BLOQUE 04
    // → BLOQUE "STORY"
    {   
        bloque: 4,
        type: 'story', 
        items:[
                    /*04-00*/ 
                    { 
                        orden: 0,
                        imagenFondo: '../imgs/fondoCafe.png',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: "../imgs/boy1.png",
                        bocadillo: "left",
                        frase: `I really miss them.<br><br><span class= "bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
                    /*04-01*/ 
                    { 
                        orden: 1,
                        imagenFondo: '',
                        imagen1: '',
                        imagen2: "",
                        bocadillo: "right",
                        frase: `It seems that you had a lovely holiday Akari!<br><br><span class= "bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
                    /*04-00*/ 
                    { 
                        orden: 2,
                        imagenFondo: '../imgs/fondoCalle01.jpg',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: "empty",
                        bocadillo: "left",
                        frase: `After the break we went back to class.<br>And now, it's time to go home.<br><br><span class= "bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
                    /*04-00*/ 
                    { 
                        orden: 3,
                        imagenFondo: '',
                        imagen1: '',
                        imagen2: "",
                        bocadillo: "",
                        frase: `See you tomorrow for another amazing day at <br />LondonEye English School.<br><br><span class= "bold">[Click to continue]</span>`,
                        sound: ["empty"],
                    },
            ],
    },
]





//********************************
// → BLOQUES DE MUESTRA
//********************************
/*
// → BLOQUE 03
    // → BLOQUE "QUESTION_MCH"
    {
        bloque: 1,
        type: 'question_mch', 
        items:[
                    {
                        imagenFondo: '../imgs/',
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                        question: `<span class = "bold">1/10.- Question?</span`,
                        answers: [
                            `Option 1.`,
                            `Option 2.`,
                            `Option 3.`,
                        ],
                        correctAnswer: 1,
                    },
        ]
    },

    // → BLOQUE 04
    // → BLOQUE "STORY"
    {   
        bloque: 4,
        type: 'story', 
        items:[
            //00-00 
            { 
                orden: 0,
                imagenFondo: '../imgs/',
                imagen1: '../imgs/',
                imagen2: "",
                bocadillo: "",
                frase: `TEXT.<br><br><span class= "bold">[Click to continue]</span>`,
                sound: ["empty"],
            },

    ],
},
*/