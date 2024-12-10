class Mapa {

  constructor(config) {

    this.mundo = null;
    this.objetos = {};
    this.configObjects = config.configObjects;

    this.walls = config.walls || {};
    this.cutsceneSpaces = config.cutsceneSpaces || {}

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.cutsceneOn = false;
    this.isPaused = false;
  }

  drawLowerImage(ctx, cameraPerson) {

    ctx.drawImage(this.lowerImage,
       utils.withGrid(10.5) - cameraPerson.x, 
       utils.withGrid(6) - cameraPerson.y)
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x, 
      utils.withGrid(6) - cameraPerson.y)
  }

  isSpaceTaken(cX, cY, dir) {
    const {x,y} = utils.nextPosition(cX,cY,dir);

    if(this.walls[`${x},${y}`]) {
      return true;
    }

    return Object.values(this.objetos).find(obj => {
      if(obj.x === x && obj.y === y) {return true}
      if(obj.intentPosition && obj.intentPosition[0] === x && obj.intentPosition[1] === y) {
        return true;
      }
      return false;
    })
  }

  mountObjects() {

    Object.keys(this.configObjects).forEach(key => {

      let object = this.configObjects[key]; 
      object.id = key;

      let instance;

      if(object.type === 'Person') {

        instance = new Pessoa(object)
      }

      if(object.type === 'ProfessorStone') {

        instance = new ProfessorStone(object)
      }

      this.objetos[key] = instance;
      this.objetos[key].id = key;

      instance.mount(this);
    })
  }

  async startCutscene(events) {

    this.cutsceneOn = true;

    for(let i=0; i<events.length; i++) {

      const eventHandler = new MundoEvento({
        event: events[i],
        mapa: this
      })
      const result = await eventHandler.init();
      if(result === 'LOST_BATTLE') {
        break
      }
    }

    this.cutsceneOn = false;

    Object.values(this.objetos).forEach(o => o.doBehaviorEvent(this))

  }

  checkActionCS() {
    const hero = this.objetos["heroi"];
    const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
    const match = Object.values(this.objetos).find(o => {
      return `${o.x},${o.y}` === `${nextCoords.x},${nextCoords.y}`
    });

    if(!this.cutsceneOn && match && match.talking.length) {

      const relevantScenario = match.talking.find(scenario => {
        return (scenario.required || []).every(sf => {
          return playerState.storyFlags[sf]
        })
      })
      relevantScenario && this.startCutscene(relevantScenario.events)
    }
  }

  checkFootCS() {

    const hero = this.objetos["heroi"];
    const match = this.cutsceneSpaces[`${hero.x},${hero.y}`];

    if (!this.cutsceneOn && match) {
      this.startCutscene( match[0].events)
    } 
  }
}
