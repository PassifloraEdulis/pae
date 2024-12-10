class ProfessorStone extends Objeto {

  constructor(config) {

    super(config);
    this.sprite = new Sprite({
      objeto: this,
      src: 'imagens/objetos/computador.png',
      animacoes: {
        'used-down': [[0,0]],
        'unused-down' : [[1,0]]
      },
      currentAnimation: 'used-down'
    })

    this.storyFlag = config.storyFlag;
    this.professores = config.professores;

    this.talking = [
      {
        required: [this.storyFlag],
        events: [
          { type: 'textMessage', text: 'Esse computador já foi usado', nome: '0'}
        ]
      },
      {
        events: [

          {type: 'textMessage', text: 'o computador está ligando...', nome: '0'},
          {type: 'craftingMenu', professores: this.professores},
          {type: 'addStoryFlag', flag: this.storyFlag},
        ]
      }
    ]
  }

  update() {

    this.sprite.currentAnimation = playerState.storyFlags[this.storyFlag]
      ? 'used-down'
      : 'unused-down'
  }
}