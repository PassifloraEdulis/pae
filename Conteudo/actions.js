window.Actions = {
  damage1: {

    name: 'receba!',
    description: 'melhor do mundo pai kk',
    success: [
      {type: 'textMessage', text: '{CASTER} usou {ACTION}!'},
      {type: 'animation', animation: 'spin'},
      {type: 'stateChange', damage: 10}
    ]
  },

  damage2: {
    name: 'bebê azul',
    description: 'gugu dadá',
    // targetType: 'friendly',
    success: [
      {type: 'textMessage', text: '{CASTER} usou {ACTION}!'},
      {type: 'animation', animation: 'bebeAzul'},
      {type: 'stateChange', status: {type: 'bebeAzul', expiresIn: 3}},
      {type: 'textMessage', text: '{TARGET} ta doente ta com a cabeça quebrada kkkkkkk'},

    ]
  },
  fogosoStatus: {
    name: 'fogoso',
    description: 'calor da bixiga',
    targetType: 'friendly',
    success: [
      {type: 'textMessage', text: '{CASTER} usou {ACTION}!'},
      // {type: 'animation', animation: 'spin'},
      {type: 'stateChange', status: {type: 'fogoso', expiresIn: 3}}
    ]
  },

  ferradoStatus: {
    name: 'sacanage',
    description: 'seu oponente perde suas habilidades',
    success: [
      {type: 'textMessage', text: '{CASTER} usou {ACTION}!'},
      // {type: 'animation', animation: 'bebeAzul'},
      {type: 'stateChange', status: {type: 'sacanage', expiresIn: 3}},
      {type: 'textMessage', text: '{TARGET} ta ferrado kkkkkkkk'},

    ]
  },

  item_recoverStatus: {

      name: 'Cookies',
      description: 'hmmm cookie gostoso',
      targetType: 'friendly',
      success: [
        {type: 'textMessage', text: '{TARGET} usou {ACTION}'},
        {type: 'stateChange', status: null}, 
        {type: 'textMessage', text: 'biscoitin bom da bixiga ne nao'},   
      ],
  },

  item_recoverHp: {

    name: 'cuscuz paulista',
    description: 'hmmm cuscuz gostoso',
    targetType: 'friendly',
    success: [
      {type: 'textMessage', text: '{TARGET} usou {ACTION}'},
      {type: 'stateChange', recover: 10}, 
      {type: 'textMessage', text: 'cuscuzin bom da bixiga ne nao'},   
    ]

  }

}