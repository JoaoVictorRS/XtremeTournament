import Genero from '#models/genero'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
      return await Genero.createMany([
        {nome: 'FPS'},
        {nome: 'Battle Royale'},
        {nome: 'MOBA'},
        {nome: 'Luta'},
        {nome: 'Esportes'},
      ])
    }
  }