class TitleScreen {

  constructor({progress}) {

    this.progress = progress;
  }

  getOptions(resolve) {

    const safeFile = this.progress.getSaveFile();
    return [
      {
        label: 'Novo Jogo',
        description: 'Comece um novo jogo!',
        handler: () => {
          this.close();
          resolve();
        },
      },

      safeFile ? {
        label: 'Continuar Jogo',
        description: 'prossiga seu jogo!',
        handler: () => {
          this.close();
          resolve(safeFile);
        } 
      } : null
    ].filter(v => v)
  }

  createElement() {

    this.element = document.createElement('div');
    this.element.classList.add('TitleScreen');
    this.element.innerHTML = (`
    
      <img class='TitleScreen_logo' src='imagens/jogada-pedagogica.png' alt='Jogada Pedagogica'/>
    `)
  }

  close() {

    this.keyboardMenu.end();
    this.element.remove();
  }

  async init(container) {


    return new Promise(resolve => {
      this.createElement();
      container.appendChild(this.element);
      this.keyboardMenu = new KeyboardMenu();
      this.keyboardMenu.init(this.element);
      this.keyboardMenu.setOptions(this.getOptions(resolve))
    })
  }
}