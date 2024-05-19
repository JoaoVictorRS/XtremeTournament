import Jogo from '#models/jogo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Jogo.createMany([
      {
        nome: 'Counter-Strike 2',
        descricao: 'Há mais de duas décadas, o Counter-Strike oferece uma experiência competitiva de elite moldada por milhões de jogadores mundialmente. Agora, o próximo capítulo da história do CS vai começar. Isso é Counter-Strike 2.',
        generoId: 1
      },
      {
        nome: 'Rainbow Six Siege',
        descricao: 'Tom Clancys Rainbow Six® Siege é um jogo de tiro tático em equipes, realista e de elite, no qual planejamento e execução superiores triunfam.',
        generoId: 1
      },
      {
        nome: 'Valorant',
        descricao: 'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games',
        generoId: 1
      },
      {
        nome: 'Apex Legends',
        descricao: 'Apex Legends é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts.',
        generoId: 2
      },
      {
        nome: 'League of Legends',
        descricao: 'League of Legends é um jogo eletrônico do gênero multiplayer online battle arena desenvolvido e publicado pela Riot Games. Foi lançado em outubro de 2009 para Microsoft Windows e em março de 2013 para macOS.',
        generoId: 3
      },
      { nome: 'Fifa 2025', generoId: 5}
    ])
  }
}