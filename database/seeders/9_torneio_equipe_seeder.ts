import TorneioEquipe from '#models/torneio_equipe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await TorneioEquipe.createMany([
      //partidas cs
      {
        torneioId: 1,
        equipeId: 1,
      },
      {
        torneioId: 1,
        equipeId: 2,
      },
      {
        torneioId: 1,
        equipeId: 3,
      },
      {
        torneioId: 1,
        equipeId: 4,
      },
      //partidas r6
      {
        torneioId: 2,
        equipeId: 5
      },
      {
        torneioId: 2,
        equipeId: 6
      },
      {
        torneioId: 2,
        equipeId: 7
      },
      {
        torneioId: 2,
        equipeId: 8
      },
      //valorant
      {
        torneioId: 3,
        equipeId: 9
      },
      {
        torneioId: 3,
        equipeId: 10
      },
      {
        torneioId: 3,
        equipeId: 11
      },
      {
        torneioId: 3,
        equipeId: 12
      },
      //apex
      {
        torneioId: 4,
        equipeId: 13
      },
      {
        torneioId: 4,
        equipeId: 14
      },
      {
        torneioId: 4,
        equipeId: 15
      },
      {
        torneioId: 4,
        equipeId: 16
      },
      //lol
      {
        torneioId: 5,
        equipeId: 17
      },
      {
        torneioId: 5,
        equipeId: 18
      },
      {
        torneioId: 5,
        equipeId: 19
      },
      {
        torneioId: 5,
        equipeId: 20
      }
    ])
  }
}