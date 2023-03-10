import mongoose from "mongoose";

const choicesSchema = mongoose.Schema({
  choices: Object
});

/* const choicesSchema = mongoose.Schema({
    Allan: [Object],
    Andrija: [Object],
      Ann: [Object],
      Carlos: [Object],
      Egle: [Object],
      Felix: [Object],
      Fin: [Object],
      Gerald: [Object],
      Haakim: [Object],
      Marco: [Object],
      Paul: [Object],
      Uche: [Object],
      Vonn: [Object],
      Wais: [Object],
      Wojtek: [Object]
}); */


/* const choicesSchema = mongoose.Schema({
    Allan: [
      { Allan: Object }, { Andrija: Number },
      { Ann: Number },      { Carlos: Number },
      { Egle: Number },     { Felix: Number },
      { Fin: Number },      { Gerald: Number },
      { Haakim: Number },   { Marco: Number },
      { Paul: Number },     { Uche: Number },
      { Vonn: Number },     { Wais: Number },
      { Wojtek: Number }
    ],
    Andrija: [
      { Allan: Number },  { Andrija: Object },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Ann: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Object }, { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Carlos: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Object },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Egle: [
      { Allan: Number },   { Andrija: Number },
      { Ann: Number },     { Carlos: Number },
      { Egle: Object }, { Felix: Number },
      { Fin: Number },     { Gerald: Number },
      { Haakim: Number },  { Marco: Number },
      { Paul: Number },    { Uche: Number },
      { Vonn: Number },    { Wais: Number },
      { Wojtek: Number }
    ],
    Felix: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Object },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Fin: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Object }, { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Gerald: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Object },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Haakim: [
      { Allan: Number },     { Andrija: Number },
      { Ann: Number },       { Carlos: Number },
      { Egle: Number },      { Felix: Number },
      { Fin: Number },       { Gerald: Number },
      { Haakim: Object }, { Marco: Number },
      { Paul: Number },      { Uche: Number },
      { Vonn: Number },      { Wais: Number },
      { Wojtek: Number }
    ],
    Marco: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Object },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Paul: [
      { Allan: Number },   { Andrija: Number },
      { Ann: Number },     { Carlos: Number },
      { Egle: Number },    { Felix: Number },
      { Fin: Number },     { Gerald: Number },
      { Haakim: Number },  { Marco: Number },
      { Paul: Object }, { Uche: Number },
      { Vonn: Number },    { Wais: Number },
      { Wojtek: Number }
    ],
    Uche: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Object },
      { Vonn: Number },   { Wais: Number },
      { Wojtek: Number }
    ],
    Vonn: [
      { Allan: Number },   { Andrija: Number },
      { Ann: Number },     { Carlos: Number },
      { Egle: Number },    { Felix: Number },
      { Fin: Number },     { Gerald: Number },
      { Haakim: Number },  { Marco: Number },
      { Paul: Number },    { Uche: Number },
      { Vonn: Object }, { Wais: Number },
      { Wojtek: Number }
    ],
    Wais: [
      { Allan: Number },  { Andrija: Number },
      { Ann: Number },    { Carlos: Number },
      { Egle: Number },   { Felix: Number },
      { Fin: Number },    { Gerald: Number },
      { Haakim: Number }, { Marco: Number },
      { Paul: Number },   { Uche: Number },
      { Vonn: Number },   { Wais: Object },
      { Wojtek: Number }
    ],
    Wojtek: [
      { Allan: Number },     { Andrija: Number },
      { Ann: Number },       { Carlos: Number },
      { Egle: Number },      { Felix: Number },
      { Fin: Number },       { Gerald: Number },
      { Haakim: Number },    { Marco: Number },
      { Paul: Number },      { Uche: Number },
      { Vonn: Number },      { Wais: Number },
      { Wojtek: Object }
    ]
  }); */

const choicesModel = mongoose.model('choice', choicesSchema);

export default choicesModel;