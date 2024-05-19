import EquipeJogador from '#models/equipe_jogador'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await EquipeJogador.createMany([
      //Navi
      { equipeId: 1, jogadorId: 1 },
      { equipeId: 1, jogadorId: 2 },
      { equipeId: 1, jogadorId: 3 },
      { equipeId: 1, jogadorId: 4 },
      { equipeId: 1, jogadorId: 5 },
      { equipeId: 1, jogadorId: 6 },
      //Astralis
      { equipeId: 2, jogadorId: 7 },
      { equipeId: 2, jogadorId: 8 },
      { equipeId: 2, jogadorId: 9 },
      { equipeId: 2, jogadorId: 10 },
      { equipeId: 2, jogadorId: 11 },
      //Furia
      { equipeId: 3, jogadorId: 12 },
      { equipeId: 3, jogadorId: 13 },
      { equipeId: 3, jogadorId: 14 },
      { equipeId: 3, jogadorId: 15 },
      { equipeId: 3, jogadorId: 16 },
      //g2
      { equipeId: 4, jogadorId: 17 },
      { equipeId: 4, jogadorId: 18 },
      { equipeId: 4, jogadorId: 19 },
      { equipeId: 4, jogadorId: 20 },
      { equipeId: 4, jogadorId: 21 },
      //w7
      { equipeId: 5, jogadorId: 38 },
      { equipeId: 5, jogadorId: 39 },
      { equipeId: 5, jogadorId: 40 },
      { equipeId: 5, jogadorId: 41 },
      //Faze
      { equipeId: 6, jogadorId: 27 },
      { equipeId: 6, jogadorId: 28 },
      { equipeId: 6, jogadorId: 29 },
      { equipeId: 6, jogadorId: 30 },
      { equipeId: 6, jogadorId: 31 },
      //liquid
      { equipeId: 7, jogadorId: 22 },
      { equipeId: 7, jogadorId: 23 },
      { equipeId: 7, jogadorId: 24 },
      { equipeId: 7, jogadorId: 25 },
      { equipeId: 7, jogadorId: 26 },
      //space
      { equipeId: 8, jogadorId: 32 },
      { equipeId: 8, jogadorId: 33 },
      { equipeId: 8, jogadorId: 34 },
      { equipeId: 8, jogadorId: 35 },
      { equipeId: 8, jogadorId: 36 },
      { equipeId: 8, jogadorId: 37},
      //loud
      { equipeId: 9, jogadorId: 42 },
      { equipeId: 9, jogadorId: 43 },
      { equipeId: 9, jogadorId: 44 },
      { equipeId: 9, jogadorId: 45 },
      { equipeId: 9, jogadorId: 46 },
      { equipeId: 9, jogadorId: 47 },
      //sentinels
      { equipeId: 10, jogadorId: 48 },
      { equipeId: 10, jogadorId: 49 },
      { equipeId: 10, jogadorId: 50 },
      { equipeId: 10, jogadorId: 51 },
      { equipeId: 10, jogadorId: 52 },
      //fnatic
      { equipeId: 11, jogadorId: 53 },
      { equipeId: 11, jogadorId: 54 },
      { equipeId: 11, jogadorId: 55 },
      { equipeId: 11, jogadorId: 56 },
      { equipeId: 11, jogadorId: 57 },
      //heretics
      { equipeId: 12, jogadorId: 58 },
      { equipeId: 12, jogadorId: 59 },
      { equipeId: 12, jogadorId: 60 },
      { equipeId: 12, jogadorId: 61 },
      { equipeId: 12, jogadorId: 62 },
      //counter
      { equipeId: 13, jogadorId: 63 },
      { equipeId: 13, jogadorId: 64 },
      //tsm
      { equipeId: 14, jogadorId: 65 },
      { equipeId: 14, jogadorId: 66 },
      //complexity
      { equipeId: 15, jogadorId: 67 },
      { equipeId: 15, jogadorId: 68 },
      { equipeId: 15, jogadorId: 69 },
      //fnatic
      { equipeId: 16, jogadorId: 70 },
      { equipeId: 16, jogadorId: 71 },
      //loud
      { equipeId: 17, jogadorId: 72 },
      { equipeId: 17, jogadorId: 73 },
      { equipeId: 17, jogadorId: 74 },
      { equipeId: 17, jogadorId: 75 },
      { equipeId: 17, jogadorId: 76 },
      //t1
      { equipeId: 18, jogadorId: 77 },
      { equipeId: 18, jogadorId: 78 },
      { equipeId: 18, jogadorId: 79 },
      { equipeId: 18, jogadorId: 80 },
      { equipeId: 18, jogadorId: 81 },
      //dplus
      { equipeId: 19, jogadorId: 82 },
      { equipeId: 19, jogadorId: 83 },
      { equipeId: 19, jogadorId: 84 },
      { equipeId: 19, jogadorId: 85 },
      { equipeId: 19, jogadorId: 86 },
      //pain
      { equipeId: 20, jogadorId: 87 },
      { equipeId: 20, jogadorId: 88 },
      { equipeId: 20, jogadorId: 89 },
      { equipeId: 20, jogadorId: 90 },
      { equipeId: 20, jogadorId: 91 },
    ])
  }
}