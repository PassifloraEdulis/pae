class TeclaApertada {

  constructor(keyCode, callback) {
    let keySafe = true;
    this.keydownFunction = function(event) {
      if (!document.hidden) {
        if(event.code === keyCode) {
          if(keySafe) {
            keySafe = false;
            callback();
          }
        }
      }
    }

    this.keyupFunction = function(event) {
      if (event.code === keyCode) {
        keySafe = true;
      }
    }

    document.addEventListener('keydown', this.keydownFunction);
    document.addEventListener('keyup', this.keyupFunction);
  }

  unbind() {
    document.removeEventListener('keydown', this.keydownFunction);
    document.removeEventListener('keyup', this.keyupFunction);
  }
}
