export interface VocabWord {
  spanish: string;
  armenian: string;
  emoji: string;
}

export interface PerfectoChallenge {
  sentence: string;
  translation: string;
  correctAnswer: string;
  options: string[];
  type: 'regular' | 'irregular';
}

export const PERFECTO_GRAMMAR = {
  auxiliary: [
    { p: "Yo", c: "he" },
    { p: "Tú", c: "has" },
    { p: "Él/Ella/Ud.", c: "ha" },
    { p: "Nosotros", c: "hemos" },
    { p: "Vosotros", c: "habéis" },
    { p: "Ellos/as/Uds.", c: "han" }
  ],
  regularEnding: "-ado"
};

export const PERFECTO_CHALLENGES: PerfectoChallenge[] = [
  { sentence: "Hoy yo ___ (trabajar) mucho.", translation: "Այսօր ես շատ եմ աշխատել:", correctAnswer: "he trabajado", options: ["he trabajado", "has trabajado", "hemos trabajado"], type: 'regular' },
  { sentence: "¿Tú ___ (estudiar) hoy?", translation: "Դու այսօր սովորե՞լ ես:", correctAnswer: "has estudiado", options: ["has estudiado", "he estudiado", "ha estudiado"], type: 'regular' },
  { sentence: "Nosotros ___ (comprar) pan.", translation: "Մենք հաց ենք գնել:", correctAnswer: "hemos comprado", options: ["hemos comprado", "han comprado", "habéis comprado"], type: 'regular' },
  { sentence: "Ella ___ (mirar) la tele.", translation: "Նա հեռուստացույց է դիտել:", correctAnswer: "ha mirado", options: ["ha mirado", "he mirado", "has mirado"], type: 'regular' },
  { sentence: "Yo ___ (escuchar) música.", translation: "Ես երաժշտություն եմ լսել:", correctAnswer: "he escuchado", options: ["he escuchado", "has escuchado", "hemos escuchado"], type: 'regular' },
  { sentence: "Ellos ___ (viajar) a Madrid.", translation: "Նրանք ճանապարհորդել են Մադրիդ:", correctAnswer: "han viajado", options: ["han viajado", "hemos viajado", "has viajado"], type: 'regular' },
  { sentence: "Tú ___ (comprar) un libro.", translation: "Դու գիրք ես գնել:", correctAnswer: "has comprado", options: ["has comprado", "he comprado", "ha comprado"], type: 'regular' },
  { sentence: "Nosotros ___ (estudiar) mucho.", translation: "Մենք շատ ենք սովորել:", correctAnswer: "hemos estudiado", options: ["hemos estudiado", "habéis estudiado", "han estudiado"], type: 'regular' },
  { sentence: "Yo ___ (viajar) solo.", translation: "Ես մենակ եմ ճանապարհորդել:", correctAnswer: "he viajado", options: ["he viajado", "has viajado", "ha viajado"], type: 'regular' },
  { sentence: "Él ___ (escuchar) la radio.", translation: "Նա ռադիո է լսել:", correctAnswer: "ha escuchado", options: ["ha escuchado", "he escuchado", "han escuchado"], type: 'regular' },
  { sentence: "Vosotros ___ (trabajar) aquí.", translation: "Դուք այստեղ եք աշխատել:", correctAnswer: "habéis trabajado", options: ["habéis trabajado", "hemos trabajado", "han trabajado"], type: 'regular' },
  { sentence: "Ustedes ___ (mirar) el mapa.", translation: "Դուք (հարգալից) նայել եք քարտեզին:", correctAnswer: "han mirado", options: ["han mirado", "hemos mirado", "ha mirado"], type: 'regular' },
  { sentence: "Yo ___ (comprar) café.", translation: "Ես սուրճ եմ գնել:", correctAnswer: "he comprado", options: ["he comprado", "has comprado", "ha comprado"], type: 'regular' },
  { sentence: "Tú ___ (viajar) en tren.", translation: "Դու գնացքով ես ճանապարհորդել:", correctAnswer: "has viajado", options: ["has viajado", "he viajado", "hemos viajado"], type: 'regular' },
  { sentence: "Nosotros ___ (mirar) fotos.", translation: "Մենք նկարներ ենք դիտել:", correctAnswer: "hemos mirado", options: ["hemos mirado", "habéis mirado", "han mirado"], type: 'regular' },
  { sentence: "Ellos ___ (estudiar) inglés.", translation: "Նրանք անգլերեն են սովորել:", correctAnswer: "han estudiado", options: ["han estudiado", "ha estudiado", "has estudiado"], type: 'regular' },
  { sentence: "Ella ___ (trabajar) hoy.", translation: "Նա այսօր աշխատել է:", correctAnswer: "ha trabajado", options: ["ha trabajado", "he trabajado", "hemos trabajado"], type: 'regular' },
  { sentence: "Yo ___ (mirar) la luna.", translation: "Ես նայել եմ լուսնին:", correctAnswer: "he mirado", options: ["he mirado", "has mirado", "ha mirado"], type: 'regular' },
  { sentence: "Tú ___ (escuchar) un podcast.", translation: "Դու լսել ես պոդքաստ:", correctAnswer: "has escuchado", options: ["has escuchado", "he escuchado", "ha escuchado"], type: 'regular' },
  { sentence: "Nosotros ___ (viajar) en avión.", translation: "Մենք ինքնաթիռով ենք ճանապարհորդել:", correctAnswer: "hemos viajado", options: ["hemos viajado", "habéis viajado", "han viajado"], type: 'regular' }
];
