import EquipeJogador from '#models/equipe_jogador'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await EquipeJogador.createMany([
      //Navi
      { equipeId: 1, jogadoreId: 1 },
      { equipeId: 1, jogadoreId: 2 },
      { equipeId: 1, jogadoreId: 3 },
      { equipeId: 1, jogadoreId: 4 },
      { equipeId: 1, jogadoreId: 5 },
      { equipeId: 1, jogadoreId: 6 },
      //Astralis
      { equipeId: 2, jogadoreId: 7 },
      { equipeId: 2, jogadoreId: 8 },
      { equipeId: 2, jogadoreId: 9 },
      { equipeId: 2, jogadoreId: 10 },
      { equipeId: 2, jogadoreId: 11 },
      //Furia
      { equipeId: 3, jogadoreId: 12 },
      { equipeId: 3, jogadoreId: 13 },
      { equipeId: 3, jogadoreId: 14 },
      { equipeId: 3, jogadoreId: 15 },
      { equipeId: 3, jogadoreId: 16 },
      //g2
      { equipeId: 4, jogadoreId: 17 },
      { equipeId: 4, jogadoreId: 18 },
      { equipeId: 4, jogadoreId: 19 },
      { equipeId: 4, jogadoreId: 20 },
      { equipeId: 4, jogadoreId: 21 },
      //w7
      { equipeId: 5, jogadoreId: 38 },
      { equipeId: 5, jogadoreId: 39 },
      { equipeId: 5, jogadoreId: 40 },
      { equipeId: 5, jogadoreId: 41 },
      //Faze
      { equipeId: 6, jogadoreId: 27 },
      { equipeId: 6, jogadoreId: 28 },
      { equipeId: 6, jogadoreId: 29 },
      { equipeId: 6, jogadoreId: 30 },
      { equipeId: 6, jogadoreId: 31 },
      //liquid
      { equipeId: 7, jogadoreId: 22 },
      { equipeId: 7, jogadoreId: 23 },
      { equipeId: 7, jogadoreId: 24 },
      { equipeId: 7, jogadoreId: 25 },
      { equipeId: 7, jogadoreId: 26 },
      //space
      { equipeId: 8, jogadoreId: 32 },
      { equipeId: 8, jogadoreId: 33 },
      { equipeId: 8, jogadoreId: 34 },
      { equipeId: 8, jogadoreId: 35 },
      { equipeId: 8, jogadoreId: 36 },
      { equipeId: 8, jogadoreId: 37},
      //loud
      { equipeId: 9, jogadoreId: 42 },
      { equipeId: 9, jogadoreId: 43 },
      { equipeId: 9, jogadoreId: 44 },
      { equipeId: 9, jogadoreId: 45 },
      { equipeId: 9, jogadoreId: 46 },
      { equipeId: 9, jogadoreId: 47 },
      //sentinels
      { equipeId: 10, jogadoreId: 48 },
      { equipeId: 10, jogadoreId: 49 },
      { equipeId: 10, jogadoreId: 50 },
      { equipeId: 10, jogadoreId: 51 },
      { equipeId: 10, jogadoreId: 52 },
      //fnatic
      { equipeId: 11, jogadoreId: 53 },
      { equipeId: 11, jogadoreId: 54 },
      { equipeId: 11, jogadoreId: 55 },
      { equipeId: 11, jogadoreId: 56 },
      { equipeId: 11, jogadoreId: 57 },
      //heretics
      { equipeId: 12, jogadoreId: 58 },
      { equipeId: 12, jogadoreId: 59 },
      { equipeId: 12, jogadoreId: 60 },
      { equipeId: 12, jogadoreId: 61 },
      { equipeId: 12, jogadoreId: 62 },
      //counter
      { equipeId: 13, jogadoreId: 63 },
      { equipeId: 13, jogadoreId: 64 },
      //tsm
      { equipeId: 14, jogadoreId: 65 },
      { equipeId: 14, jogadoreId: 66 },
      //complexity
      { equipeId: 15, jogadoreId: 67 },
      { equipeId: 15, jogadoreId: 68 },
      { equipeId: 15, jogadoreId: 69 },
      //fnatic
      { equipeId: 16, jogadoreId: 70 },
      { equipeId: 16, jogadoreId: 71 },
      //loud
      { equipeId: 17, jogadoreId: 72 },
      { equipeId: 17, jogadoreId: 73 },
      { equipeId: 17, jogadoreId: 74 },
      { equipeId: 17, jogadoreId: 75 },
      { equipeId: 17, jogadoreId: 76 },
      //t1
      { equipeId: 18, jogadoreId: 77 },
      { equipeId: 18, jogadoreId: 78 },
      { equipeId: 18, jogadoreId: 79 },
      { equipeId: 18, jogadoreId: 80 },
      { equipeId: 18, jogadoreId: 81 },
      //dplus
      { equipeId: 19, jogadoreId: 82 },
      { equipeId: 19, jogadoreId: 83 },
      { equipeId: 19, jogadoreId: 84 },
      { equipeId: 19, jogadoreId: 85 },
      { equipeId: 19, jogadoreId: 86 },
      //pain
      { equipeId: 20, jogadoreId: 87 },
      { equipeId: 20, jogadoreId: 88 },
      { equipeId: 20, jogadoreId: 89 },
      { equipeId: 20, jogadoreId: 90 },
      { equipeId: 20, jogadoreId: 91 },
    ])
  }
}