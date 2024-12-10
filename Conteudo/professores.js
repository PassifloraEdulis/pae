window.ProfessoresTipos = {
  normal: "normal",
  psiquico: "psiquico",
  eletrico: "eletrico",
  planta: "planta",
  fantasma: "fantasma",
  sombrio: "sombrio",
}

window.Professores = {

  "s001": {

    name: "Igor Gacheiro",
    description: 'pouco cabelo mas cheio de poder!',
    type: ProfessoresTipos.psiquico,
    src: "imagens/professores/gacheiro.png", 
    icon: "imagens/elementos/pco.png",
    actions: ['damage1', 'fogosoStatus', 'damage2', 'ferradoStatus']
  },

  // "s002": {

  //   name: "Igor Gacheiro",
  //   type: ProfessoresTipos.psiquico,
  //   src: "imagens/digital/gacheiroDigital.jpg", 
  //   icon: "imagens/elementos/pco.png",
  //   actions: ['damage1', 'fogosoStatus', 'damage2', 'ferradoStatus']
  // },

  // "s003": {

  //   name: "Igor Gacheiro",
  //   type: ProfessoresTipos.psiquico,
  //   src: "imagens/professores/gacheiro.png", 
  //   icon: "imagens/elementos/pco.png",
  //   actions: ['damage1', 'fogosoStatus', 'damage2', 'ferradoStatus']
  // },

  // "s004": {

  //   name: "Igor Gacheiro",
  //   type: ProfessoresTipos.psiquico,
  //   src: "imagens/professores/gacheiro.png", 
  //   icon: "imagens/elementos/pco.png",
  //   actions: ['damage1', 'fogosoStatus', 'damage2', 'ferradoStatus']
  // },

  "s005": {

    name: "Paula Nunes",
    description:  'rumo à etapa nordeste!',
    type: ProfessoresTipos.eletrico,
    src: "imagens/professores/paula.png", 
    icon: "imagens/elementos/bola.jpg",
    actions: ['damage1', 'fogosoStatus', 'damage2', 'ferradoStatus']
  },

  "s006": {

    name: "Carlos Deyvinson",
    description: 'beethoven da eletrônica!',
    type: ProfessoresTipos.planta,
    src: "imagens/professores/deyvinson.png",
    icon: "imagens/elementos/arduino.jpg",
    actions: ['damage1', 'fogosoStatus', 'damage2', 'ferradoStatus']

  }
}