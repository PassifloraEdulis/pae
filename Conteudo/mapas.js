window.Mapas = {


  Frente: {
    id: 'Frente',
    lowerSrc: 'imagens/mapas/frente-baixo.png',
    upperSrc: '',
    configObjects: {
      heroi: {
        type: 'Person',
        nome: "fernanda",
        control: true,
        x: utils.withGrid(30),
        y: utils.withGrid(14),
        direction: 'up',
        src: 'imagens/personagens/fernanda.png'
      },
    },
    walls: {},
    cutsceneSpaces: {}
  },

  Recepcao: {
    id: 'Recepcao',
    lowerSrc: 'imagens/mapas/recepcao-baixo.png',
    upperSrc: '',
    configObjects: {
      heroi: {
        type: 'Person',
        nome: "fernanda",
        control: true,
        x: utils.withGrid(30),
        y: utils.withGrid(14),
        direction: 'up',
        src: 'imagens/personagens/fernanda.png'
      },

      npc1: {
        type: 'Person',
        nome: 'josé luan',
        x: utils.withGrid(8),
        y: utils.withGrid(5),
        src: 'imagens/personagens/jose.png',
        behaviorLoop: [


        ],

        talking: [

          {
            events: [

            ]
          }
        ]
      },

      npc2: {
        type: 'Person',
        nome: 'giovane',
        x: utils.withGrid(9),
        y: utils.withGrid(5),
        src: 'imagens/personagens/giovane.png',
        behaviorLoop: [


        ],

        talking: [

          {
            events: [

            ]
          }
        ]
      },

    },
    walls: {},
    cutsceneSpaces: {

        [utils.asGridCoord(5,10)]: [
          {
            required: ['INICIO'],
            events: [

              {who: 'npc1', type: 'stand', direction: 'left', time: '800'},
              {who: 'npc1', type: 'walk', direction: 'left'},
              {who: 'npc1', type: 'walk', direction: 'left'},
              {who: 'npc1', type: 'walk', direction: 'left'},
              {who: 'npc1', type: 'stand', direction: 'down', time: '800'},
              {who: 'npc1', type: 'walk', direction: 'down'},
              {who: 'npc1', type: 'walk', direction: 'down'},
              {who: 'npc1', type: 'walk', direction: 'down'},
              {who: 'npc1', type: 'stand', direction: 'down', time: '800'},
              {who: 'npc2', type: 'walk', direction: 'left'},
              {who: 'npc2', type: 'walk', direction: 'left'},
              {who: 'npc2', type: 'walk', direction: 'left'},
              {who: 'npc2', type: 'walk', direction: 'down'},
              {who: 'npc2', type: 'walk', direction: 'down'},
              {who: 'npc2', type: 'walk', direction: 'down'},
              {type: 'textMessage', text: "fernanda! bora, bora", imagem: 'imagens/digital/joseDigital.jpg', nome: 'josé'},
              {type: 'textMessage', text: "o que foi?", imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
              {type: 'textMessage', text: "tamo atrasados pra a aula de dany bio", imagem: 'imagens/digital/giovaneDigital.jpg', nome: 'giovane'},
              {type: 'textMessage', text: "meu deus, verdade!!!", imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
              {type: 'textMessage', text: "espero que ela não brigue com a gente", imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
              {who: 'npc1', type: 'stand', direction: 'up', time: '300'},
              {who: 'npc1', type: 'walk', direction: 'up'},
              {who: 'npc1', type: 'walk', direction: 'up'},
              {who: 'npc1', type: 'walk', direction: 'up'},
              {who: 'npc1', type: 'walk', direction: 'up'},
              {who: 'npc1', type: 'walk', direction: 'up'},

              {who: 'npc2', type: 'stand', direction: 'up', time: '300'},
              {who: 'npc2', type: 'walk', direction: 'up'},
              {who: 'npc2', type: 'walk', direction: 'up'},
              {who: 'npc2', type: 'walk', direction: 'up'},
              {who: 'npc2', type: 'walk', direction: 'up'},
              {who: 'npc2', type: 'walk', direction: 'up'},

              {who: 'heroi', type: 'stand', direction: 'up', time: '300'},
              {who: 'heroi', type: 'walk', direction: 'up'},
              {who: 'heroi', type: 'walk', direction: 'up'},
              {who: 'heroi', type: 'walk', direction: 'up'},
              {type: 'changeMap', mapa: 'Sala56', x: utils.withGrid(13), y: utils.withGrid(6), direction: 'left'},

          ]
        }
      ]
    }
  },

  Sala56: {

    id: 'Sala56',
    lowerSrc: 'imagens/mapas/Sala56.png',
    upperSrc: '', //'DemoUpper.png',
    configObjects: {

      heroi: {
        type: 'Person',
        control: true,
        x: utils.withGrid(13),
        y: utils.withGrid(6),
        src: 'imagens/personagens/fernanda.png'
      },

      npc1: {
        type: 'Person',
        x: utils.withGrid(8),
        y: utils.withGrid(5),
        src: 'imagens/personagens/danybio.png',
        behaviorLoop: [

          { type: 'stand', direction: 'up', time: '1500'},
          { type: 'stand', direction: 'down', time: '1000'},

        ],

        talking: [
          {
            events: [

            ]
          },
          {
            events: [

            ]
          }
        ]
      },

      npc2: {
        type: 'Person',
        x: utils.withGrid(10),
        y: utils.withGrid(12),
        direction: 'up',
        src: 'imagens/personagens/giovane.png',
        behaviorLoop: [

          { type: 'stand', direction: 'left', time: '1200'},
          { type: 'stand', direction: 'right', time: '1200'},

        ],
  
        talking: [
          {
            events: [

            ]
          }
        ]
      },
      
      npc3: {
        type: 'Person',
        x: utils.withGrid(6),
        y: utils.withGrid(9),
        direction: 'up',
        src: 'imagens/personagens/chiquinho.png',
        behaviorLoop: [

          // { type: 'stand', direction: 'left', time: '1200'},
          // { type: 'stand', direction: 'up', time: '1200'},
          // { type: 'stand', direction: 'right', time: '1200'},
          // { type: 'stand', direction: 'down', time: '1200'},

        ],
  
        talking: [
          {
            events: [
            ]
          }
        ]
      },

      npc4: {
        type: 'Person',
        x: utils.withGrid(10),
        y: utils.withGrid(9),
        direction:'up',
        src: 'imagens/personagens/patricio.png',
        behaviorLoop: [

          // { type: 'stand', direction: 'left', time: '1200'},
          // { type: 'stand', direction: 'up', time: '1200'},
          // { type: 'stand', direction: 'right', time: '1200'},
          // { type: 'stand', direction: 'down', time: '1200'},

        ],
  
        talking: [
          {
            required: ['USOU_COMPUTADOR'],
            events: [
              { type: "textMessage", text: "to muito triste, perdi o tiktok que estava vendo", faceHero: 'npc4', imagem: 'imagens/digital/patricioDigital.jpg', nome: 'patricio'},
              { type: "textMessage", text: "como assim? você tava no celular durante a aula?", faceHero: 'npc4', imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
              { type: "textMessage", text: "vai falar pra a professora? pois espere", faceHero: 'npc4', imagem: 'imagens/digital/patricioDigital.jpg', nome: 'patricio'},
              { type: 'battle', enemyId: 'patricio'},
              {type: 'addStoryFlag', flag: 'FALOU_COM_PATRICIO'}, 
              { type: "textMessage", text: "pronto, agora vou te denunciar kkkkk", faceHero: 'npc4', imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
            ]
          },

          {
            events: [
              { type: "textMessage", text: "se tu achar o cabo tu me diz por favor", faceHero: 'npc4', imagem: 'imagens/digital/patricioDigital.jpg', nome: 'patricio'},
            ]
          }
        ]
      },
      
      npc5: {
        type: 'Person',
        x: utils.withGrid(8),
        y: utils.withGrid(15),
        direction: 'up',
        src: 'imagens/personagens/jose.png',
        behaviorLoop: [

          // { type: 'stand', direction: 'left', time: '1200'},
          // { type: 'stand', direction: 'up', time: '1200'},
          // { type: 'stand', direction: 'right', time: '1200'},
          // { type: 'stand', direction: 'down', time: '1200'},

        ],

        talking: [
          {
            events: [
              {type: 'textMessage', text: "eita, faltou energiakkkk", imagem: 'imagens/digital/joseDigital.jpg', nome: 'josé', faceHero: 'npc5'},

            ]
          }
        ]
      },

      npc6: {
        type: 'Person',
        x: utils.withGrid(2),
        y: utils.withGrid(12),
        direction: 'up',
        src: 'imagens/personagens/andre.png',
        behaviorLoop: [

          // { type: 'stand', direction: 'left', time: '1200'},
          // { type: 'stand', direction: 'up', time: '1200'},
          // { type: 'stand', direction: 'right', time: '1200'},
          // { type: 'stand', direction: 'down', time: '1200'},

        ],

        talking: [
          {
            events: [
              {type: 'textMessage', text: "eu queria muito saber como ajeitar isso...", imagem: 'imagens/digital/andreDigital.jpg', nome: 'andré', faceHero: 'npc6'},
            ]
          }
        ]
      },

      professorStone: {
        type: 'ProfessorStone',
        x: utils.withGrid(6),
        y: utils.withGrid(6),
        storyFlag: 'USOU_COMPUTADOR',
        professores: ['s001', 's005', 's006']
      }
    },

    walls: {

      [utils.asGridCoord(13,4)]:true,
      [utils.asGridCoord(13,5)]:true,
      [utils.asGridCoord(12,4)]:true,
      [utils.asGridCoord(11,4)]:true,
      [utils.asGridCoord(10,4)]:true,
      [utils.asGridCoord(9,4)]:true,
      [utils.asGridCoord(8,4)]:true,
      [utils.asGridCoord(7,4)]:true,
      [utils.asGridCoord(6,4)]:true,
      [utils.asGridCoord(5,4)]:true,
      [utils.asGridCoord(4,4)]:true,
      [utils.asGridCoord(3,4)]:true,
      [utils.asGridCoord(2,4)]:true,
      [utils.asGridCoord(1,4)]:true,    
      [utils.asGridCoord(0,5)]:true,    
      [utils.asGridCoord(0,6)]:true,    
      [utils.asGridCoord(0,7)]:true,    
      [utils.asGridCoord(0,8)]:true,    
      [utils.asGridCoord(0,9)]:true,    
      [utils.asGridCoord(0,10)]:true,    
      [utils.asGridCoord(0,11)]:true,    
      [utils.asGridCoord(0,12)]:true,    
      [utils.asGridCoord(0,13)]:true,    
      [utils.asGridCoord(0,14)]:true,    
      [utils.asGridCoord(0,15)]:true,    
      [utils.asGridCoord(0,16)]:true,    

      [utils.asGridCoord(1,17)]:true,    
      [utils.asGridCoord(2,17)]:true,  
      [utils.asGridCoord(3,17)]:true,  
      [utils.asGridCoord(4,17)]:true,  
      [utils.asGridCoord(5,17)]:true,  
      [utils.asGridCoord(6,17)]:true,  
      [utils.asGridCoord(7,17)]:true,  
      [utils.asGridCoord(8,17)]:true,  
      [utils.asGridCoord(9,17)]:true,  
      [utils.asGridCoord(10,17)]:true,  
      [utils.asGridCoord(11,17)]:true,  
      [utils.asGridCoord(12,17)]:true,  
    
      [utils.asGridCoord(13,18)]:true,  
      [utils.asGridCoord(13,17)]:true,  
      [utils.asGridCoord(13,16)]:true,  
      [utils.asGridCoord(13,15)]:true,  
      [utils.asGridCoord(13,14)]:true,  
      [utils.asGridCoord(13,13)]:true,  
      [utils.asGridCoord(13,12)]:true,  
      [utils.asGridCoord(13,11)]:true,  
      [utils.asGridCoord(13,10)]:true,  
      [utils.asGridCoord(13,9)]:true,  
      [utils.asGridCoord(13,8)]:true,  
      [utils.asGridCoord(14,6)]:true,  
      [utils.asGridCoord(13,7)]:true,  
      [utils.asGridCoord(13,5)]:true,  
      [utils.asGridCoord(13,4)]:true,  
      [utils.asGridCoord(13,3)]:true,  

    },


    cutsceneSpaces: {

      [utils.asGridCoord(12,6)]: [
        {
          events: [

            {who: 'heroi', type: 'walk', direction: 'left'},
            {who: 'heroi', type: 'stand', direction: 'left', time: '800', faceHero: 'npc1'},
            {who: 'npc1', type: 'walk', direction: 'down'},
            {who: 'npc1', type: 'walk', direction: 'right'},
            {type: 'textMessage', text: "bom dia, professora!", imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
            {type: 'textMessage', text: "bom dia, fernanda :)", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {type: 'textMessage', text: "perdao por chegar atrasado, vou sentar", imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
            {type: 'textMessage', text: "sem problema, sente-se :)", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {who: 'heroi', type: 'stand', direction: 'left', time: '800', faceHero: 'npc1'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'down'},
            {who: 'heroi', type: 'walk', direction: 'left'},
            {who: 'heroi', type: 'stand', direction: 'down', time: '300', faceHero: 'npc1'},
            {who: 'heroi', type: 'stand', direction: 'left', time: '300', faceHero: 'npc1'},
            {who: 'heroi', type: 'stand', direction: 'up', time: '300', faceHero: 'npc1'},
            {type: 'textMessage', text: "entao, meus queridos, as briófitas...", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {who: 'heroi', type: 'stand', direction: 'up', time: '1500', faceHero: 'npc1'},
            {type: 'textMessage', text: "* ouve-se um estrondo *", imagem: '0', nome: '0'},
            {who: 'heroi', type: 'stand', direction: 'up', time: '1500', faceHero: 'npc1'},
            {type: 'textMessage', text: "que barulho é esse...", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {who: 'heroi', type: 'stand', direction: 'up', time: '1500', faceHero: 'npc1'},
            {type: 'textMessage', text: "professora, eu acho que o cabo de rede deu problema", imagem: 'imagens/digital/patricioDigital.jpg', nome: 'patrício'},
            {type: 'textMessage', text: "verdade, patrício! você é muito esperto!", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {type: 'textMessage', text: "alguém pode me ajudar?", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {type: 'textMessage', text: "eu posso, professora!", imagem: 'imagens/digital/patricioDigital.jpg', nome: 'patrício'},
            {type: 'textMessage', text: "eu posso, professora!", imagem: 'imagens/digital/fernandaDigital.jpg', nome: 'fernanda'},
            {type: 'textMessage', text: "eu posso, professora!", imagem: 'imagens/digital/chiquinhoDigital.jpg', nome: 'chiquinho'},
            {type: 'textMessage', text: "eu posso, professora!", imagem: 'imagens/digital/giovaneDigital.jpg', nome: 'giovane'},
            {type: 'textMessage', text: "eu posso, professora!", imagem: 'imagens/digital/joseDigital.jpg', nome: 'josé'},
            {type: 'textMessage', text: "eu posso, professora!", imagem: 'imagens/digital/andreDigital.jpg', nome: 'andré'},
            {type: 'textMessage', text: "ótimo! quem me ajudar primeiro, passa na matéria!", imagem: 'imagens/digital/danybioDigital.jpg', nome: 'dany bio'},
            {type: 'walk', direction: 'down', who: 'npc5'},
            {type: 'walk', direction: 'right', who: 'npc5'},
            {type: 'walk', direction: 'right', who: 'npc5'},
            {type: 'walk', direction: 'right', who: 'npc5'},

            {type: 'walk', direction: 'left', who: 'npc2'},
            {type: 'walk', direction: 'down', who: 'npc2'},
            {type: 'walk', direction: 'right', who: 'npc2'},
            {type: 'walk', direction: 'right', who: 'npc2'},
            {type: 'walk', direction: 'right', who: 'npc2'},

            {type: 'walk', direction: 'down', who: 'npc4'},
            {type: 'walk', direction: 'right', who: 'npc4'},
            {type: 'walk', direction: 'up', who: 'npc4'},

            {type: 'walk', direction: 'down', who: 'npc3'},
            {type: 'walk', direction: 'left', who: 'npc3'},
            {type: 'walk', direction: 'left', who: 'npc3'},
            {type: 'walk', direction: 'left', who: 'npc3'},
            {type: 'walk', direction: 'left', who: 'npc3'},

          ]
        }
      ],
    },
  },

  Ginasio: {

    id: 'Ginasio',
    lowerSrc: 'KitchenLower.png',
    upperSrc: 'KitchenUpper.png',
    configObjects: {

      heroi: {
        type: 'Person',
        src: 'imagens/personagens/andre.png',
        control: true,
        x: utils.withGrid(5),
        y: utils.withGrid(5),
        direction: 'up'
      },

      npc7: {
        type: 'Person',
        x: utils.withGrid(10),
        y: utils.withGrid(4),
        src: 'imagens/personagens/patricio.png'
      }
    },
    cutsceneSpaces: {
      [utils.asGridCoord(5,10)]:[
        {
          events: [
            {
              type: 'changeMap',
              mapa: 'Sala56',
              x: utils.withGrid(13),
              y: utils.withGrid(6),
              direction: 'left'
            }
          ]
        }
      ]
    }
  }
}