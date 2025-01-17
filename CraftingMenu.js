class CraftingMenu {

  constructor({professores, onComplete}) {

    this.professores = professores;
    this.onComplete = onComplete;
  }

  getOptions() {

    return this.professores.map(id => {
      const base = Professores[id];
      return {
        label: base.name,
        description: base.description,
        handler: () => {
          playerState.addProfessor(id)
          this.close()
        }
      }
    })
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('CraftingMenu');
    this.element.classList.add('overlayMenu');
    this.element.innerHTML = (`
      <h2>Convide um colega para seu time</h2>
    `)
  }

  close() {

    this.keyboardMenu.end();
    this.element.remove();
    this.onComplete();
  }

  init(container) {
    this.createElement();
    this.keyboardMenu = new KeyboardMenu({
      descriptionContainer: container
    })
    this.keyboardMenu.init(this.element);
    this.keyboardMenu.setOptions(this.getOptions());

    container.appendChild(this.element)
  }
}