window.BattleAnimations = {

  async spin(event, onComplete) {

    const element = event.caster.professorElement;
    const animationClassName = event.caster.team === 'player' ? 'battle-spin-right' : 'battle-spin-left';
    element.classList.add(animationClassName);

    element.addEventListener('animationend', () => {
      element.classList.remove(animationClassName);

    }, {once:true})

    await utils.wait(100);
    onComplete();
  },

  async bebeAzul(event, onComplete) {
    const element = event.target.professorElement;

    const removeClassesOnZeroExpiresIn = () => {
      if (event.expiresIn === 0) {
        element.classList.remove('bebe');
        element.classList.remove('azul');
        document.removeEventListener('expiresInChanged', removeClassesOnZeroExpiresIn);
      }
    };

    element.classList.add('bebe');
    element.classList.add('azul');

    // Adicione um ouvinte para o evento 'expiresInChanged'
    document.addEventListener('expiresInChanged', removeClassesOnZeroExpiresIn);

    await utils.wait(100);

    onComplete();
  }  
}