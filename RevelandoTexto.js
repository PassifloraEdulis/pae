class RevelandoTexto {

  constructor(config) {
    this.element = config.element;
    this.text = config.text;
    this.speed = config.speed || 60;

    this.timeout = null;
    this.isDone = false;
  }

  revealChar(list) {

    const next = list.splice(0,1)[0];
    next.span.classList.add('revealed');

    if(list.length > 0) {
      this.timeout = setTimeout(() => {
        this.revealChar(list)
      }, next.delayAfter)
    } else {
      this.isDone = true;
    }
  }

  warpToDone() {

    clearTimeout(this.timeout);
    this.isDone = true;
    this.element.querySelectorAll("span").forEach(s => {

      s.classList.add("revealed");
    })
  }


  init() {
    let chars = [];

    this.text.split("").forEach(char => {

      let span = document.createElement('span');
      span.textContent = char;
      this.element.appendChild(span);
      
      chars.push({
        span,
        delayAfter: char === ' ' ? 0 : this.speed
      })
    });

    this.revealChar(chars);

  }
}