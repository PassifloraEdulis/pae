class Pessoa extends Objeto {

  constructor(config) {

    super(config);
    this.mpr = 0;
    this.standing = false;
    this.intentPosition = null;

    this.control = config.control || false; 

    this.directionUpdate = {

      'up': ['y', -1],
      'down': ['y', 1],
      'left': ['x', -1],
      'right': ['x', 1],
    }
  }

  update(state) {
    
    if(this.mpr > 0) {
      this.updatePosition();
    } else {
      if(!state.mapa.cutsceneOn && this.control && state.arrow) {

        this.startBehavior(state, {
          type: 'walk',
          direction: state.arrow
        })
      }

      this.updateSprite(state);
    }    
  }

  startBehavior(state, behavior) {

    if(!this.isMounted) {
      return
    }

    this.direction = behavior.direction;

    if(behavior.type === "walk") {

      if(state.mapa.isSpaceTaken(this.x, this.y, this.direction)) {

        behavior.retry && setTimeout(() => {
          this.startBehavior(state, behavior)
        },10)
        return;
      };
      this.mpr = 16;


      const intentPosition = utils.nextPosition(this.x, this.y, this.direction)
      this.intentPosition = [
        intentPosition.x,
        intentPosition.y
      ]

      this.updateSprite(state);

    }

    if(behavior.type === "stand") {
      this.standing =  true;
      setTimeout(() => {
        utils.emitEvent("PersonStandComplete", {
          whoId: this.id
        });
        this.standing =  false;
      }, behavior.time);
    }

  }

  updatePosition() {
      const[property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.mpr -= 1;

      if(this.mpr === 0) {
        
        this.intentPosition = null;
        utils.emitEvent("PersonWalkingComplete", {

          whoId: this.id
        })

      }
  }

  updateSprite() {

    if(this.mpr > 0) {

      this.sprite.setAnimation('walk-'+this.direction);
      return;
    }

    this.sprite.setAnimation('idle-'+this.direction);

  }
}