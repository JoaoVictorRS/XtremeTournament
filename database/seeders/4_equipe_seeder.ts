import Equipe from '#models/equipe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Equipe.createMany([
      //Counter-Strike 2
      {nome: 'Natus Vincere (CS2)', regiao: 'Ukraine'},
      {nome: 'Astralis (CS2)', regiao: 'Denmark'},
      {nome: 'Furia (CS2)', regiao: 'Brazil'},
      {nome: 'G2 Esports (CS2)', regiao: 'Europe'},
      //Raimbow Six Siege
      {nome: 'w7m esports (R6)', regiao: 'Brazil'},
      {nome: 'FaZe Clan (R6)', regiao: 'Brazil'},
      {nome: 'Team Liquid (R6)', regiao: 'Brazil'},
      {nome: 'Spacestation Gaming (R6)', regiao: 'United States'},
      //Valorant
      {nome: 'LOUD (Valorant)', regiao: 'Brazil'},
      {nome: 'Sentinels (Valorant)', regiao: 'United States'},
      {nome: 'Fnatic (Valorant)', regiao: 'United Kingdom'},
      {nome: 'Team Heretics (Valorant)', regiao: 'Spain'},
      //Apex Lendas
      {nome: 'Counter Logic Gaming (Apex)', regiao: 'United States'},
      {nome: 'TSM (Apex)', regiao: 'United States'},
      {nome: 'Complexity Gaming (Apex)', regiao: 'United States'},
      {nome: 'Fnatic (Apex)', regiao: 'Japan'},
      //Liga of Legends
      {nome: 'LOUD (LoL)', regiao: 'Brazil'},
      {nome: 'T1 (LoL)', regiao: 'South Korea'},
      {nome: 'Dplus (LoL)', regiao: 'South Korea'},
      {nome: 'paiN Gaming (LoL)', regiao: 'Brazil'},
    ])
  }
}