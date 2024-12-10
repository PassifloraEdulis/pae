class Objeto {

  constructor(config) {

    this.id = null;
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || 'down';
    this.sprite = new Sprite({
      objeto: this,
      src: config.src || "imagens/personagens/anchieta.png",
    });
    this.behaviorLoop = config.behaviorLoop || [];
    this.bLindex = 0;

    this.talking = config.talking || [];
    this.retryTimeout = null;

  }

  mount(mapa) {

    this.isMounted = true;

    setTimeout(() => {
      this.doBehaviorEvent(mapa);
    }, 10)
  }

  update() {


  }

  async doBehaviorEvent(mapa) {

    if(this.behaviorLoop.length === 0) {

      return;
    }

    if(mapa.cutsceneOn) {

      if(this.retryTimeout) {
        clearTimeout(this.retryTimeout)
      }

      this.retryTimeout = setTimeout(()=> {
        this.doBehaviorEvent(mapa);

      }, 1000)
      return;
    }

    let eventConfig = this.behaviorLoop[this.bLindex];
    eventConfig.who = this.id;

    const eventHandler = new MundoEvento({mapa, event: eventConfig});
    await eventHandler.init();

    this.bLindex += 1;
    if(this.bLindex === this.behaviorLoop.length) {

      this.bLindex = 0;
    }

    this.doBehaviorEvent(mapa);
  }
}