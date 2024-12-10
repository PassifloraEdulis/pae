class MundoEvento {
  constructor({mapa, event}) {

    this.mapa = mapa;
    this.event = event;
  }
  
  stand(resolve) {

    const who = this.mapa.objetos[this.event.who];
    who.startBehavior({
      mapa: this.mapa
    }, {
      type: 'stand',
      direction: this.event.direction,
      time: this.event.time
    });

    const completeHandler = e => {
      if(e.detail.whoId === this.event.who) {
        document.removeEventListener("PersonStandComplete", completeHandler)
        resolve();
      }
    }

    document.addEventListener("PersonStandComplete", completeHandler)
  }

  walk(resolve) {

    const who = this.mapa.objetos[this.event.who];
    who.startBehavior({
      mapa: this.mapa
    }, {
      type: "walk",
      direction: this.event.direction,
      retry: true
    });

    const completeHandler = e => {
      if(e.detail.whoId === this.event.who) {
        document.removeEventListener("PersonWalkingComplete", completeHandler)
        resolve();
      }
    }

    document.addEventListener("PersonWalkingComplete", completeHandler)
  }

  textMessage(resolve) {

    if(this.event.faceHero) {
      const obj = this.mapa.objetos[this.event.faceHero];
      obj.direction = utils.oppositeDir(this.mapa.objetos['heroi'].direction);
    }
    const message = new MensagemTexto({

      text: this.event.text,
      nome: this.event.nome,
      imageSrc: this.event.imagem || '',
      onComplete: () => resolve()
    })

    message.init(document.querySelector('.tela'))
  }

  changeMap(resolve) {


    //retirar objeto

    Object.values(this.mapa.objetos).forEach(obj => {
      obj.isMounted = false
    })

    const sceneTransition = new Transicao();
    sceneTransition.init(document.querySelector('.tela'), () => {
      this.mapa.mundo.startMap(window.Mapas[this.event.mapa], {

         x: this.event.x,
         y: this.event.y,
         direction: this.event.direction
      })

      resolve();

      sceneTransition.fadeOut();
    });
  }

  battle(resolve) {

    const battle = new Batalha({

      enemy: Chefes[this.event.enemyId],
      onComplete: (didWin) => {
        resolve(didWin ? 'WON_BATTLE' : 'LOST_BATTLE')
      }
    })
    battle.init(document.querySelector('.tela'))
  }

  pause(resolve) {

    this.mapa.isPaused = true;
    const menu = new PauseMenu({
      progress: this.mapa.mundo.progress,
      onComplete: () => {
        resolve();
        this.mapa.isPaused = false;
        this.mapa.mundo.comecarLoop();
      }
    });
    menu.init(document.querySelector('.tela'))
  }

  craftingMenu(resolve) {
    const menu = new CraftingMenu({
      professores: this.event.professores,
      onComplete: () => {
        resolve()
      }
    })

    menu.init(document.querySelector('.tela'))
  }

  addStoryFlag(resolve) {
    window.playerState.storyFlags[this.event.flag] = true;
    resolve();
  }

  removeStoryFlag(resolve) {
    window.playerState.storyFlags[this.event.flag] = false;
    resolve();
  }

  init() {
    return new Promise(resolve => {
      this[this.event.type](resolve)
    })  
  }
}