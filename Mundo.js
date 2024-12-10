class Mundo {

  constructor(config) {

    this.elemento = config.elemento;
    this.canvas = this.elemento.querySelector('.canvas');
    this.ctx = this.canvas.getContext('2d');
    this.mapa = null;
  }

  gameLoopStepWork(delta) {

    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

    const cameraPerson = this.mapa.objetos.heroi;

    Object.values(this.mapa.objetos).forEach(objeto => {

      objeto.update({
        delta,
        arrow: this.directionInput.direction,
        mapa: this.mapa
      });
    })
    
    this.mapa.drawLowerImage(this.ctx, cameraPerson);

    Object.values(this.mapa.objetos).sort((a,b) => {
      return a.y - b.y;
    }).forEach(objeto => {

      objeto.sprite.draw(this.ctx, cameraPerson)
    });

    this.mapa.drawUpperImage(this.ctx, cameraPerson);

  }

  comecarLoop() {

    let previousMs;
    const step = 1/80;

    const stepFn = (timestampMs) => {

      if(this.mapa.isPaused) {

        return;
      }
      if(previousMs === undefined) {
        previousMs = timestampMs
      }

      let delta = (timestampMs - previousMs) / 1000
      while(delta >= step) {
        this.gameLoopStepWork(delta);
        delta -= step;
      }
      previousMs = timestampMs - delta * 1000
       
      requestAnimationFrame(stepFn)
    }

    requestAnimationFrame(stepFn)
  }

  bindActionInput() {
    new TeclaApertada('Enter', () => {

      this.mapa.checkActionCS();
  
    });

    new TeclaApertada("Escape", () => {

      if(!this.mapa.cutsceneOn) {

        this.mapa.startCutscene([
          {type: 'pause'}
        ])
      }
  
    });
  }

  bindHeroPositionCheck() {
    document.addEventListener("PersonWalkingComplete", e => {
      if (e.detail.whoId === "heroi") {
        this.mapa.checkFootCS()
      }
    })
  }

  startMap(mapConfig, heroInitialState=null) {
    this.mapa = new Mapa(mapConfig);
    this.mapa.mundo = this;
    this.mapa.mountObjects();

    if(heroInitialState) {

      const {heroi} = this.mapa.objetos;
      heroi.x = heroInitialState.x;
      heroi.y = heroInitialState.y;
      heroi.direction = heroInitialState.direction;
    }

    this.progress.mapId = mapConfig.id;
    this.progress.startingHeroX = this.mapa.objetos.heroi.x;
    this.progress.startingHeroY = this.mapa.objetos.heroi.y;
    this.progress.startingHeroDirection = this.mapa.objetos.heroi.direction;

  }

  personagem(char) {

    return this.mapa.configObjects[char].nome;
  }

  async init() {

    const container = document.querySelector('.tela');

    this.progress = new Progresso();

    this.titleScreen = new TitleScreen({
      progress: this.progress
    });

    const UseSaveFile = await this.titleScreen.init(container);

    let initialHeroState = null;

    if(UseSaveFile) {
      this.progress.load();
      initialHeroState = {
        x: this.progress.startingHeroX,
        y: this.progress.startingHeroY,
        direction: this.progress.startingHeroDirection
      }
    }

    this.hud = new Hud();
    this.hud.init(container);

    this.startMap(window.Mapas[this.progress.mapId], initialHeroState);

    this.bindActionInput();
    this.bindHeroPositionCheck();
    
    this.directionInput = new Direcao();
    this.directionInput.init();

    this.comecarLoop();

    console.log(this.mapa.mundo.pro)

    if(!UseSaveFile) {
      this.mapa.startCutscene([

        {who: 'heroi', type: 'stand', direction: 'up', time: '1000'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'walk', direction: 'left'},
        {who: 'heroi', type: 'stand', direction: 'left', time: '400'},
        {who: 'heroi', type: 'stand', direction: 'up', time: '800'},
        {type: 'textMessage', text: "finalmente cheguei no IF", imagem: 'imagens/digital/fernandaDigital.jpg', nome: this.personagem('heroi')},
        {type: 'textMessage', text: "depois de tanto lutar incansavelmente...",imagem: 'imagens/digital/fernandaDigital.jpg', nome: this.personagem('heroi')},
        {type: 'textMessage', text: "cheguei em meu objetivo", imagem: 'imagens/digital/fernandaDigital.jpg', nome: this.personagem('heroi')},
        {who: 'heroi', type: 'stand', direction: 'up', time: '400'},
        {who: 'heroi', type: 'walk', direction: 'up'},
        {who: 'heroi', type: 'walk', direction: 'up'},
        {who: 'heroi', type: 'walk', direction: 'up'},
        {who: 'heroi', type: 'walk', direction: 'up'},
        {who: 'heroi', type: 'stand', direction: 'up', time: '400'},
        {type: 'textMessage', text: "e seja o que deus quiser", imagem: 'imagens/digital/fernandaDigital.jpg', nome: this.personagem('heroi')},
        {who: 'heroi', type: 'stand', direction: 'up', time: '400'},
        {type: 'changeMap', mapa: 'Recepcao', x: utils.withGrid(5), y: utils.withGrid(11), direction: 'up'},
      ]);
    }
  }
}

