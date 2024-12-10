class Batalha {

  constructor({enemy, onComplete}) {

    this.enemy = enemy;
    this.onComplete = onComplete;

    this.combatants = {
      // 'player1': new Combatente({
      //   ...Professores.s001,
      //   team: 'player',
      //   hp: 2,
      //   maxHp: 50,
      //   xp: 99,
      //   maxXp: 100,
      //   level: 1,
      //   // status: 'sacanage',
      //   control: true

      // }, this),
      // 'player2': new Combatente({
      //   ...Professores.s006,
      //   team: 'player',
      //   hp: 20,
      //   maxHp: 50,
      //   xp: 25,
      //   maxXp: 100,
      //   level: 1,
      //   control: true

      // }, this),

      // 'enemy1': new Combatente({
      //   ...Professores.s006,
      //   team: 'enemy',
      //   hp: 1,
      //   maxHp: 50,
      //   xp: 88,
      //   maxXp: 100,
      //   level: 1,
      // }, this),

      // 'enemy2': new Combatente({
      //   ...Professores.s004,
      //   team: 'enemy',
      //   hp: 10,
      //   maxHp: 50,
      //   xp: 66,
      //   maxXp: 100,
      //   level: 1,
      //   status: null,

      // }, this),
    }

    this.activeCombatants = {
      player: null, //'player1',
      enemy: null//'enemy1'
    }

    window.playerState.lineup.forEach(id => {
      this.addCombatant(id, 'player', window.playerState.professores[id])
    })

    Object.keys(this.enemy.professores).forEach(key => {
      this.addCombatant('e_'+key, 'enemy', this.enemy.professores[key])
    })
    

    this.items = []

    window.playerState.items.forEach(items => {

      this.items.push({
        ...items,
        team: 'player'
      })
    })

    this.usedInstanceIds = {}
  }

  addCombatant(id, team, config) {

      this.combatants[id] = new Combatente({

        ...Professores[config.professorId],
        ...config,
        team,
        control: team === 'player'
      }, this)

      this.activeCombatants[team] = this.activeCombatants[team] || id
  }

  createElement() {

    this.element = document.createElement('div');
    this.element.classList.add('Batalha');
    this.element.innerHTML = (`
    
      <div class='Batalha_hero'>
        <img src='imagens/personagens/anchieta.png'/>
      </div> 

      <div class='Batalha_enemy'>
        <img src='${this.enemy.src}'/>
      </div> 

    `)
  }

  init(container) {

    this.createElement();
    container.appendChild(this.element);

    this.playerTeam = new Time('player', 'Aluno');
    this.enemyTeam = new Time('enemy', 'Professor');

    Object.keys(this.combatants).forEach(key => {

      let combatant = this.combatants[key];
      combatant.id = key;
      combatant.init(this.element)

      if(combatant.team === 'player') {

        this.playerTeam.combatants.push(combatant);
      } else if(combatant.team === 'enemy') {
        this.enemyTeam.combatants.push(combatant)
      }
    })

    this.playerTeam.init(this.element);
    this.enemyTeam.init(this.element);

    this.turnCycle = new TurnCycle({
      battle: this,
      onNewEvent: event => {
        return new Promise(resolve => {
          const battleEvent = new BatalhaEvento(event, this);
          battleEvent.init(resolve)
        })
      },

      onWinner: winner => {

        if(winner === 'player') {

          const playerState = window.playerState;
          Object.keys(playerState.professores).forEach(id => {
            const playerStateProfessor = playerState.professores[id];
            const combatant = this.combatants[id];
            if(combatant) {
              playerStateProfessor.hp = combatant.hp;
              playerStateProfessor.xp = combatant.xp;
              playerStateProfessor.maxXp = combatant.maxXp;
              playerStateProfessor.level = combatant.level;
            }
          })

          playerState.items = playerState.items.filter(item => {
            return !this.usedInstanceIds[item.instanceId]
          })

          utils.emitEvent('PlayerStateUpdated')
        }
 
        this.element.remove();
        this.onComplete(winner === 'player');
      }
    });

    this.turnCycle.init();
  }
}