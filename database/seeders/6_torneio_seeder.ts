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
        jogoId: 1,
        logoCamp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde29XDmeoV7HEJoCW49BdfxLkGbg5ORQAYw&s'
      },
      {
        nome: 'BLAST R6 Major Manchester 2024',
        dataInicio: DateTime.fromISO('2024-05-24').toISODate(),
        dataFim: DateTime.fromISO('2024-05-26').toISODate(),
        jogoId: 2,
        logoCamp: 'https://staticg.sportskeeda.com/editor/2024/04/1349c-17142736997245-1920.jpg?w=640'
      },
      {
        nome: 'VALORANT Challengers Brazil 2024',
        dataInicio: DateTime.fromISO('2024-05-21').toISODate(),
        dataFim: DateTime.fromISO('2024-06-18').toISODate(),
        jogoId: 3,
        logoCamp: 'https://static.valorantzone.gg/news/2021/08/12121157/VALORANT-CHALLENGERS-BRASIL.jpg'
      },
      {
        nome: 'Apex Legends Global Series: 2024 Championship',
        dataInicio: DateTime.fromISO('2024-09-06').toISODate(),
        dataFim: DateTime.fromISO('2024-09-10').toISODate(),
        jogoId: 4,
        logoCamp: 'https://media.contentapi.ea.com/content/dam/apex-legends/compete/images/2021/07/algs-2-0-featured-image.jpg.adapt.crop191x100.1200w.jpg'
      },
      {
        nome: '2024 World Championship',
        dataInicio: DateTime.fromISO('2024-09-25').toISODate(),
        dataFim: DateTime.fromISO('2024-11-02').toISODate(),
        jogoId: 5,
        logoCamp: 'https://cdn.sanity.io/images/dsfx7636/news/2666a6366fa8aae6f83fdb8938b1783ccdd28ac2-1920x640.jpg'
      },
    ])
  }
}