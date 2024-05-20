import Partida from '#models/partida'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    return await Partida.createMany([
      //cs
      {
        dataPartida: DateTime.fromISO('2024-06-14').toISODate(),
        resultado: 'Indefinido'
      },
      {
        dataPartida: DateTime.fromISO('2024-07-03').toISODate(),
        resultado: 'Indefinido'
      },
      //r6
      {
        dataPartida: DateTime.fromISO('2024-05-24').toISODate(),
        resultado: 'Indefinido'
      },
      {
        dataPartida: DateTime.fromISO('2024-05-26').toISODate(),
        resultado: 'Indefinido'
      },
      //valorant
      {
        dataPartida: DateTime.fromISO('2024-05-21').toISODate(),
        resultado: 'Indefinido'
      },
      {
        dataPartida: DateTime.fromISO('2024-06-18').toISODate(),
        resultado: 'Indefinido'
      },
      //apex
      {
        dataPartida: DateTime.fromISO('2024-09-06').toISODate(),
        resultado: 'Indefinido'
      },
      {
        dataPartida: DateTime.fromISO('2024-09-10').toISODate(),
        resultado: 'Indefinido'
      },
      //lol
      {
        dataPartida: DateTime.fromISO('2024-09-25').toISODate(),
        resultado: 'Indefinido'
      },
      {
        dataPartida: DateTime.fromISO('2024-11-02').toISODate(),
        resultado: 'Indefinido'
      },
    ])
  }
}