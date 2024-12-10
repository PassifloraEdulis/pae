
class MensagemTexto {
  constructor({ text, imageSrc, onComplete, nome, imagem}) {
    this.text = text;

    if(nome != '0') {
      this.imageSrc = imageSrc || "imagens/digital/paulaDigital.jpg";
    }

    this.onComplete = onComplete;
    if(nome != '0') {
      this.nome = nome || 'paula nunes';
    }
    this.imagem = imagem;
    this.element = null;
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('MensagemTexto');
  
    if (this.imageSrc) {
      const imageDiv = document.createElement('div');
      const image = document.createElement('img');
      image.src = this.imageSrc;
      image.className = 'MensagemTexto_image';
      imageDiv.appendChild(image);
      this.element.appendChild(imageDiv);
    }

    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
      <p class='MensagemTexto_p'></p>
    `;
    this.element.appendChild(messageDiv);

    const button = document.createElement('button');
    button.className = 'MensagemTexto_button';
    button.textContent = 'Próximo';
    this.element.appendChild(button);
  
    this.revealingText = new RevelandoTexto({
      element: messageDiv.querySelector('.MensagemTexto_p'),
      text: this.text,
    });

    const nome = document.createElement('h3');
    nome.className = 'MensagemTexto_nome';
    nome.textContent = this.nome;
    this.element.appendChild(nome);
  
    this.element.querySelector('button').addEventListener('click', () => {
      this.done();
    });
  
    this.actionListener = new TeclaApertada('Enter', () => {
      this.done();
    });
  }
  
  done() {
    if (this.revealingText.isDone) {
      this.element.remove();
      this.actionListener.unbind();
      this.onComplete();
    } else {
      this.revealingText.warpToDone();
    }
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);
    this.revealingText.init();
  }
}
