import Torneio from '#models/torneio'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    return await Torneio.createMany([
      {
        nome: 'IEM Brasilia Major 2024',
        dataInicio: DateTime.fromISO('2024-06-14').toISODate(),
        dataFim: DateTime.fromISO('2024-07-03').toISODate(),
        jogoId: 1
      },
      {
        nome: 'BLAST R6 Major Manchester 2024',
        dataInicio: DateTime.fromISO('2024-05-24').toISODate(),
        dataFim: DateTime.fromISO('2024-05-26').toISODate(),
        jogoId: 2
      },
      {
        nome: 'VALORANT Challengers Brazil 2024',
        dataInicio: DateTime.fromISO('2024-05-21').toISODate(),
        dataFim: DateTime.fromISO('2024-06-18').toISODate(),
        jogoId: 3
      },
      {
        nome: 'Apex Legends Global Series: 2024 Championship',
        dataInicio: DateTime.fromISO('2024-09-06').toISODate(),
        dataFim: DateTime.fromISO('2024-09-10').toISODate(),
        jogoId: 4
      },
      {
        nome: '2024 World Championship',
        dataInicio: DateTime.fromISO('2024-09-25').toISODate(),
        dataFim: DateTime.fromISO('2024-11-02').toISODate(),
        jogoId: 5
      },
    ])
  }
}