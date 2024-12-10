class PlayerState {

    constructor() {

        this.professores  ={

            // 'p1': {

            //     professorId: 's001',
            //     hp: 2,
            //     maxHp: 50,
            //     xp: 99,
            //     maxXp: 100,
            //     level: 1,
            //     status: null,
            // },

            // 'p2': {

            //     professorId: 's004',
            //     hp: 45,
            //     maxHp: 50,
            //     xp: 75,
            //     maxXp: 100,
            //     level: 1,
            //     status: null,
            // },

            // 'p3': {

            //     professorId: 's006',
            //     hp: 5,
            //     maxHp: 50,
            //     xp: 5,
            //     maxXp: 100,
            //     level: 1,
            //     status: null,
            // }
        }

        this.lineup = [];
        this.items = [

            {actionId: 'item_recoverStatus', instanceId: 'item1'},
            {actionId: 'item_recoverStatus', instanceId: 'item2'},
            {actionId: 'item_recoverHp', instanceId: 'item3'},
            {actionId: 'item_recoverStatus', instanceId: 'item4'},
            {actionId: 'item_recoverStatus', instanceId: 'item5'}
        ];
        this.storyFlags = {
            'INICIO': true
        }
    }

    addProfessor(professorId) {
        const newId = `p${Date.now()}`+Math.floor(Math.random()*99999)
        this.professores[newId] = {
            professorId,
            hp: 50,
            maxHp: 50,
            xp: 0,
            maxXp: 100,
            level: 1,
            status: null,
        }

        if(this.lineup.length < 3) {
            this.lineup.push(newId)
        }
        utils.emitEvent('LineupChanged');
        console.log(this)
    }

    swapLineup(oldId, incomingId) {

        const oldIndex = this.lineup.indexOf(oldId);
        this.lineup[oldIndex] = incomingId;
        utils.emitEvent('LineupChanged');

    }

    moveToFront(futureFrontId) {

        this.lineup = this.lineup.filter(id => id !== futureFrontId);
        this.lineup.unshift(futureFrontId);
        utils.emitEvent('LineupChanged');
    }
}

window.playerState = new PlayerState();