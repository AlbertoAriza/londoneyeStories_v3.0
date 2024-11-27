export const state = {
    // → VARIABLES DE CONTROL
    counters: {
        init: true,
        bloque: 0,
        item: 0,
        rightQuestions: [/*A1→*/0 , /*A2→*/0, /*B1→*/0, /*B2→*/0, /*C1→*/0, /*C2→*/0],
        counterQuestions: [/*A1→*/0 , /*A2→*/0, /*B1→*/0, /*B2→*/0, /*C1→*/0, /*C2→*/0],
    },
}

export const bloques = [
    // → BLOQUE 00
    {   
        bloque: 0,
        type: 'story', 
        items:[
            /*00-00*/ 
                    { 
                        orden: 0,
                        imagenFondo: '../imgs/fondoCalle01.jpg',
                        imagen1: '../imgs/girl1happy.png',
                        frase: `Hello my friend! How is it going?<br> Do you remember me? I'm Akari.<br>We met on our first day at school.<br><br><span class= "bold">[Click to continue]</span>`,
                        sound: '../sfx/'
                    },
            /*00-01*/ 
                    {
                        orden: 1,
                        frase: `What a wonderful day to attend classes<br />and learn lots of new things!<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-02*/ 
                    {
                        orden: 2,
                        frase: `Today, we're not late.<br>Let's see if we can get to LondonEye School<br>and find our friend Sakura.<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-03*/ 
                    {
                        orden: 3,
                        imagenFondo:'../imgs/fondoSchoolFacade.png',
                        frase: `Here we are. A new day at school.<br>I love this place.<br>All these people learning English together.<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1happy.png',
                    },
            /*00-04*/ 
                    {
                        orden: 4,
                        frase: `Look! It's Sakura.<br>Sakura! Over here!<br><br><span class="bold">[Click to continue]</span>`, 
                    },
            /*00-05*/ 
                    {
                        orden: 5,
                        imagen2: '../imgs/girl2happy.png',
                        frase: `Hello Akari.<br>Hello my friend.<br>How are you?<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-06*/ 
                    {
                        orden: 6,
                        frase: `Fine! I think we have a new class with Mrs. Himari.<br>I love her classes.<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-07*/ 
                    {
                        orden: 7,
                        frase: `Yes! It's our first class today.<br>Let's go to our classroom. The class is about to start.<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-08*/
                    {
                        orden: 8,
                        imagenFondo: '../imgs/fondoAula.jpg',
                        frase: `Here we are. Let's take our seats. Mrs Himari is coming.<br><br><span class="bold">[Click to continue]</span>`,
                        sound: '../sfx/',
                    },
            /*00-09*/ 
                    {
                        orden: 9,
                        frase: `Hello students. Is everybody here today?<br>Very good! Let's start the class.<br>Today we are studying the "PAST TENSE"<br><br><span class="bold">[Click to continue]</span>`,
                        imagen2: '../imgs/teacher.png',
                    },
            /*00-10*/ 
                    {
                        orden: 10,
                        frase: `We are learning about the "PAST SIMPLE"<br>and "PAST CONTINUOUS".<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-11*/
                    {
                        orden: 11,
                        frase: `So, the past simple...<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-12*/
                    {
                        orden: 12,
                        frase: `... And that's all about the past tense.<br />Well, I think it's time for a challenge.<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*00-13*/
                    {
                        orden: 13,
                        frase: `Sakura! Ask Akari some questions about the PAST SIMPLE and PAST CONTINUOUS.<br><br><span class="bold">[Click to continue]</span>`,
                    },
            /*01-00*/
                    {
                        orden: 14,
                        frase: `Yes Mrs. Himari!<br />We are ready.<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                    },
        ]
    },

    // → BLOQUE 01
    {
        bloque: 1,
        type: 'question', 
        items:[
                    {
                        question: `<span class = "bold">1/10.- Which sentence is correct?</span`,
                        answers: [
                            `Maria and Carlos was my friends when I was a child.`,
                            `Maria and Carlos were my friends when I was a child.`,
                            `Maria and Carlos be my friends when I was a child.`,
                        ],
                        correctAnswer: 1,
                    }, 
                    {
                        question: `2/10.- Here comes the second question.<br><span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">_____ some good news last week about the project.</span>`,
                        answers:[
                                    "There be",
                                    "There was",
                                    "There were",
                        ],
                        correctAnswer: 1,
                    }, 
            [
                `<span class = "bold">3/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Mark and Sarah _____ want to play football with me yesterday.</span>`,
                `not`,
                `don't`,
                `didn't`,
                false,
                false,
                true,
            ], 
            [
                `<span class = "bold">4/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Karen _____ to the cinema last weekend.</span>`,
                `go`,
                `went`,
                `gone`,
                false,
                true,
                false,
            ], 
            [
                `<span class = "bold">5/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We used _____ a lot of money when my father ran the company.</span>`,
                `make`,
                `making`,
                `to make`,
                false,
                false,
                true,
            ],
            [
            `<span class = "bold">6/10.- Do you know the past of this verb?</span><br><br><span class = "cursiva">fall (caer)</span>`,
            `fell`,
            `felt`,
            `falled`,
            true,
            false,
            false,
            ],
            [
            `<span class = "bold">7/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Yesterday, while we _________, it __________ to rain.</span>`,
            `walk / start`,
            `walked / was starting`,
            `were walking / started`,
            false,
            false,
            true,
            ],
            [
            `<span class = "bold">8/10.- Which sentence is correct?</span`,
            `They don't used to go to the beach when they were young.`,
            `They didn't use to go to the beach when they were young.`,
            `They didn't used to go to the beach when they were young.`,
            false,
            true,
            false,
            ],
            [
            `<span class = "bold">9/10.- Which sentence is correct?</span>`,
            `When did you go to the beach for the last time?`,
            `When did you went to the beach for the last time?`,
            `When you went to the beach for the last time?`,
            true,
            false,
            false,
            ],
            [
            `<span class = "bold">10/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">_____ John broke the window, I was studying</span>`,
            `When`,
            `While`,
            `As`,
            true,
            false,
            false,
            ],
        ],
    },



    // → BLOQUE 02
    {
        bloque: 2,
        type: 'story', 
        sentences:[
        /*01-00*/ 
                    {
                        orden: 1,
                        frase: `Thank you Akari and Sakura.<br /> It's time to take a break.<br><br><span class="bold">[Click to continue]</span>`,
                        imagen2: '../imgs/teacher.png',
                        imagenFondo: '../imgs/fondoAula.jpg',
                    },
        /*01-01*/ 
                    {
                        orden: 2,
                        frase: `Akari, we can go to the park during the break.<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png',
                    },
        /*01-02*/ 
                    {
                        orden: 3,
                        frase: `Perfect. This is a lovely place to spend the break.<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/girl2happy.png', 
                        imagenFondo: '../imgs/fondoParque01.jpg',
                    },
        /*01-03*/ 
                    {
                        orden: 4,
                        frase: `The class was really enjoyable.<br><br><span class="bold">[Click to continue]</span>`,
                    },
        /*01-04*/ 
                    {
                        orden: 5,
                        frase: `Yes! All the students were paying a lot of attention.<br><br><span class="bold">[Click to continue]</span>`,
                    },
        /*01-05*/ 
                    {
                        orden: 6,
                        frase: `And I learnt a lot.<br />Did you see Haruki?<br />He was writing every word Mrs. Himari said.<br><br><span class="bold">[Click to continue]</span>`,
                    },
        /*01-06*/ 
                    {
                        orden: 7,
                        frase: `Hello Sakura!<br />Hello Akari!<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1surprised.png',
                        imagen2: '../imgs/boy1.png',
                    },
        /*01-07*/ 
                    {
                        orden: 8,
                        frase: `It's a bit chilly in the park today.<br />The other students are in a café nearby.<br />Do you want to come?<br><br><span class="bold">[Click to continue]</span>`,
                    },
        /*01-08*/ 
                    {
                        orden: 9,
                        frase: `What do you think Sakura?<br /> It seems that it is going to rain.<br />Let's go with our classmates<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1happy.png',
                    },
        /*01-09*/ 
                    {
                        orden: 10,
                        frase: `Yeah! The coffee shop sounds fun.<br />Let's go.<br><br><span class="bold">[Click to continue]</span>`,
                        imagen2: '../imgs/girl2happy.png',
                    },
        /*01-10*/ 
                    {
                        orden: 11,
                        frase: `Here we are! Much better!<br><br><span class="bold">[Click to continue]</span>`,
                        imagen1: '../imgs/girl1happy.png',
                        imagen2: '../imgs/boy1.png',
                        imagenFondo: '../imgs/fondoCafe.png'
                    },
        /*01-11*/ 
                    {
                        orden: 12,
                        frase: `Akari, we were talking about our last holiday.<br />Tell us. Where did you go last summer?<br><br><span class="bold">[Click to continue]</span>`,
                    },
        /*01-11*/ 
                    {
                        orden: 13,
                        frase: `Of course!<br><br><span class="bold">[Click to continue]</span>`,
                    },
        ]
    },
  
    // → TERCER BLOQUE DE CONVERSACIÓN
    [
      /*02-00*/ ['', `I really miss them.<br><br><span class="bold">[Click to continue]</span>`, /*fotoLeft*/true, /*fotoRight*/true, /*fotoFondo*/true, /*fotoLeft.src*/'../imgs/girl1happy.png', /*fotoRight.src*/'../imgs/boy1.png', /*fotoFondo.src*/'../imgs/fondoCafe.png', /*hasSound?*/false],
      /*02-01*/ ['cambio', `It seems that you had a lovely holiday Akari!<br><br><span class="bold">[Click to continue]</span>`, /*fotoLeft*/false, /*fotoRight*/false, /*fotoFondo*/false, /*fotoLeft.src*/'', /*fotoRight.src*/'', /*fotoFondo.src*/'', /*hasSound?*/true],
      /*02-02*/ ['cambio', `After the break we went back to class.<br>And now, it's time to go home.<br><br><span class="bold">[Click to continue]</span>`, /*fotoLeft*/false, /*fotoRight*/true, /*fotoFondo*/true, /*fotoLeft.src*/'', /*fotoRight.src*/'', /*fotoFondo.src*/'../imgs/fondoCalle01.jpg', /*hasSound?*/false],
      /*02-03*/ ['', `See you tomorrow for another amazing day at <br />LondonEye English School.<br><br><span class="bold">[Click to continue]</span>`, /*fotoLeft*/false, /*fotoRight*/false, /*fotoFondo*/false, /*fotoLeft.src*/'', /*fotoRight.src*/'', /*fotoFondo.src*/'', /*hasSound?*/false],
    ],
  ];
  
  /* ---------- FIN ---------- */
  
  /* ___              _   _             
    / _ \ _  _ ___ __| |_(_)___ _ _  ___
   | (_) | || / -_|_-<  _| / _ \ ' \(_-<
    \__\_\\_,_\___/__/\__|_\___/_||_/__/
  */
  
  //PREGUNTAS DE LOS DISTINTOS ROUNDS
  let questions = [
    //  PRIMER SET DE PREGUNTAS
    
    //  SEGUNDO SET DE PREGUNTAS
    [
      [
        `<span class = "bold">1/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Last summer my family and I _____ to go to the beach.</span`,
        `want`,
        `to want`,
        `wanted`,
        false,
        false,
        true,
      ], 
      [
          `<span class = "bold">2/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We _____ to go to Cádiz.</span>`,
          "decided",
          "decide",
          "to decide",
          true,
          false,
          false,
      ], 
      [
          `<span class = "bold">3/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We _____ there when I was very young.</span>`,
          `use to go`,
          `used go`,
          `used to go`,
          false,
          false,
          true,
      ], 
      [
          `<span class = "bold">4/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">I _____ to see my friends from my childhood.</span>`,
          `not expect`,
          `didn't expect`,
          `didn't expected`,
          false,
          true,
          false,
      ], 
      [
          `<span class = "bold">5/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">But they _____ there when I arrived in Cádiz.</span>`,
          `be`,
          `was`,
          `were`,
          false,
          false,
          true,
      ],
      [
        `<span class = "bold">6/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">They _____ their holiday there too.</span>`,
        `to spend`,
        `spending`,
        `were spending`,
        false,
        false,
        true,
      ],
      [
        `<span class = "bold">7/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">One day, while we _________ in a restaurant, we __________ a famous actor.</span>`,
        `eat / see`,
        `ate / were seeing`,
        `were eating / saw`,
        false,
        false,
        true,
      ],
      [
        `<span class = "bold">8/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">We _____ watching horror films.</span`,
        `loved`,
        `loving`,
        `loves`,
        true,
        false,
        false,
      ],
      [
        `<span class = "bold">9/10.- Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">One day, while we _______ a horror movie, the lights _____.</span>`,
        `were watching / came out`,
        `were watching / went out`,
        `were watching / passed out`,
        false,
        true,
        false,
      ],
      [
        `<span class = "bold">10/10.- We _____ so frightened that I wanted to cry.</span>`,
        `was`,
        `were`,
        `be`,
        false,
        true,
        false,
      ],
    ]
  ];
  
  /* ---------- FIN ---------- */