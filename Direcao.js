class Direcao {

  constructor() {

    this.heldDirections = []

    this.mapa = {

      "ArrowUp": 'up',
      "ArrowDown": 'down',
      "ArrowLeft": 'left',
      "ArrowRight": 'right',
      "KeyW": 'up',
      "KeyS": 'down',
      "KeyA": 'left',
      "KeyD": 'right',
    }

  }

  get direction() {

    return this.heldDirections[0];
  }

  init() {

    document.addEventListener('keydown', e => {

      const dir = this.mapa[e.code];

      if(dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir);
      }
    })

    document.addEventListener('keyup', e => {

      const dir = this.mapa[e.code];
      const index = this.heldDirections.indexOf(dir);

      if(index > -1) {
        this.heldDirections.splice(index, 1);
      }
    })
  }
}