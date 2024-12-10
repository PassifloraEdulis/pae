class PauseMenu {
  constructor({progress, onComplete}) {

    this.progress = progress;
    this.onComplete = onComplete;
  }

  getOptions(pageKey) {

    if(pageKey === 'root') {

      const lineupProfessores = playerState.lineup.map(id => {
        const {professorId} = playerState.professores[id];
        const base = Professores[professorId];
        return {
          label: base.name,
          description: base.description,
          handler: () => {
            this.keyboardMenu.setOptions(this.getOptions(id))
          }
        }

      });

      return [
        ...lineupProfessores,
        {
          label: 'Salvar',
          description: 'Salve seu progresso',
          handler: () => {

            this.progress.save();
            this.close();
          }
        },

        {
          label: 'Fechar',
          description: 'Fechar o menu',
          handler: () => {

            this.close();
          }
        }
      ]
    }

    const unequipped = Object.keys(playerState.professores).filter(id => {
      return playerState.lineup.indexOf(id) === -1
    }).map(id => {
      const {professorId} = playerState.professores[id];
      const base = Professores[professorId];
      return {
        label: `trocar por ${base.name}`,
        description: base.description,
        handler: () => {

          playerState.swapLineup(pageKey, id);
          this.keyboardMenu.setOptions(this.getOptions('root'))
        }
      }
    })
    return [
      ...unequipped,
      {
        label: 'mover para frente',
        description: 'mover esse professor para a frente da lista',
        handler: () => {
          playerState.moveToFront(pageKey);
          this.keyboardMenu.setOptions(this.getOptions('root'))
        }
      },

      {
        label: 'voltar',
        description: 'voltar ao menu principal',
        handler: () => {
          this.keyboardMenu.setOptions(this.getOptions('root'))
        }
      }
    ];
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('PauseMenu');
    this.element.classList.add('overlayMenu');
    this.element.innerHTML = (`
    
    <h2>Menu de Pausa</h2>
    
    `)
  }

  close() {
    this.esc?.unbind();
    this.keyboardMenu.end();
    this.element.remove();
    this.onComplete();
  }

  async init(container) {
    this.createElement();
    this.keyboardMenu = new KeyboardMenu({

      descriptionContainer: container
    })

    this.keyboardMenu.init(this.element)
    this.keyboardMenu.setOptions(this.getOptions('root'));

    container.appendChild(this.element);

    utils.wait(200);
    this.esc = new TeclaApertada("Escape", () => {
      this.close();
    })
  }
}