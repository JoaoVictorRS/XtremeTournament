import TorneioPartida from '#models/torneio_partida'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await TorneioPartida.createMany([
      //cs
      {
        torneioId: 1,
        partidaId: 1
      },
      {
        torneioId: 1,
        partidaId: 2
      },
      //r6
      {
        torneioId: 2,
        partidaId: 3
      },
      {
        torneioId: 2,
        partidaId: 4
      },
      //valor
      {
        torneioId: 3,
        partidaId: 5
      },
      {
        torneioId: 3,
        partidaId: 6
      },
      //apex
      {
        torneioId: 4,
        partidaId: 7
      },
      {
        torneioId: 4,
        partidaId: 8
      },
      //lol
      {
        torneioId: 5,
        partidaId: 9
      },
      {
        torneioId: 5,
        partidaId: 10
      },
    ])
  }
}