class Sprite {

  constructor(config) {

    this.imagem = new Image();
    this.imagem.src = config.src;

    this.imagem.onload = () => {

      this.carregou = true;

    }

    this.sombra = new Image();
    this.usaSombra = true;
    if(this.usaSombra) {
      
      this.sombra.src = 'imagens/objetos/sombra.png';
    }

    this.sombra.onload = () => {

      this.sombraCarregou = true;

    }

    this.animacoes = config.animacoes || {

        'idle-down': [[0,0]],
        'idle-right': [[0,1]],
        'idle-up': [[0,2]],
        'idle-left': [[0,3]],
        'walk-down': [[1,0],[0,0],[3,0],[0,0]],
        'walk-right': [[1,1],[0,1],[3,1],[0,1]],
        'walk-up': [[1,2],[0,2],[3,2],[0,2]],
        'walk-left': [[1,3],[0,3],[3,3],[0,3]],

    }

    this.currentAnimation = config.currentAnimation || 'idle-down' //config.currentAnimation || 'idle-down';

    this.Caf = 0; //current animation frame
    this.Afl = config.Afl || 8; // animation frame limit
    this.Afp = this.Afl; // animation frame progress

    this.objeto = config.objeto;

  }

  get frame() {

    return this.animacoes[this.currentAnimation][this.Caf]
  }

  setAnimation(key) {

    if(this.currentAnimation !== key) {

      this.currentAnimation = key;
      this.Caf = 0;
      this.Afp = this.Afl;
    }
  }

  updateAnimationProgress() {

    if(this.Afp > 0) {

      this.Afp -= 1;
      return;
    }

    this.Afp = this.Afl;
    this.Caf += 1;

    if(this.frame === undefined) {
      this.Caf = 0;
    }
  }

  draw(ctx, cameraPerson) {

    const x = this.objeto.x - 8 + utils.withGrid(10.5) - cameraPerson.x;
    const y = this.objeto.y - 18 + utils.withGrid(6) - cameraPerson.y;

    this.sombraCarregou && ctx.drawImage(this.sombra, x, y);

    const [frameX, frameY] = this.frame;

    this.carregou && ctx.drawImage(this.imagem,
      frameX*32, frameY*32,
      32,32,
      x,y,
      32,32)

    this.updateAnimationProgress();
  }

}