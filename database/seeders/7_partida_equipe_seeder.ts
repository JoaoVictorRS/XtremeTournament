import PartidaEquipe from '#models/partida_equipe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await PartidaEquipe.createMany([
      //partidas cs
      {
        partidaId: 1,
        equipeId: 1,
      },
      {
        partidaId: 1,
        equipeId: 2,
      },
      {
        partidaId: 2,
        equipeId: 3,
      },
      {
        partidaId: 2,
        equipeId: 4,
      },
      //partidas r6
      {
        partidaId: 3,
        equipeId: 5
      },
      {
        partidaId: 3,
        equipeId: 6
      },
      {
        partidaId: 4,
        equipeId: 7
      },
      {
        partidaId: 4,
        equipeId: 8
      },
      //valorant
      {
        partidaId: 5,
        equipeId: 9
      },
      {
        partidaId: 5,
        equipeId: 10
      },
      {
        partidaId: 6,
        equipeId: 11
      },
      {
        partidaId: 6,
        equipeId: 12
      },
      //apex
      {
        partidaId: 7,
        equipeId: 13
      },
      {
        partidaId: 7,
        equipeId: 14
      },
      {
        partidaId: 8,
        equipeId: 15
      },
      {
        partidaId: 8,
        equipeId: 16
      },
      //lol
      {
        partidaId: 9,
        equipeId: 17
      },
      {
        partidaId: 9,
        equipeId: 18
      },
      {
        partidaId: 10,
        equipeId: 19
      },
      {
        partidaId: 10,
        equipeId: 20
      }
    ])
  }
}