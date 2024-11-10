import Jogo from '#models/jogo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Jogo.createMany([
      {
        nome: 'Counter-Strike 2',
        descricao: 'Há mais de duas décadas, o Counter-Strike oferece uma experiência competitiva de elite moldada por milhões de jogadores mundialmente. Agora, o próximo capítulo da história do CS vai começar. Isso é Counter-Strike 2.',
        generoId: 1,
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Counter_Strike_2_Logo.png/800px-Counter_Strike_2_Logo.png',
        cover: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg'
      },
      {
        nome: 'Rainbow Six Siege',
        descricao: 'Tom Clancys Rainbow Six® Siege é um jogo de tiro tático em equipes, realista e de elite, no qual planejamento e execução superiores triunfam.',
        generoId: 1,
        foto: 'https://s2-ge.glbimg.com/Mn4MpbfOftUzZYusjMjY6ucisp4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/b/d/MsAo0RQq25hzLuK95lew/r6-thumb.jpg',
        cover: 'https://notadogame.com/uploads/game/cover/250x/5bfdc3009ba9d.jpg'
      },
      {
        nome: 'Valorant',
        descricao: 'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games',
        generoId: 1,
        foto: 'https://s2-techtudo.glbimg.com/M0ll8r3w3WsiRLLroy5xJaK4A5c=/0x0:1656x915/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/N/j/3cZcm6Qf6TxFIAW0nMNg/como-baixar-valorant-de-graca-the-squad.jpg',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxn61ygHzmOkpx85CL50ZozFcQ2u6KgKnUug&s'
      },
      {
        nome: 'Apex Legends',
        descricao: 'Apex Legends é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts.',
        generoId: 2,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwApIpvyE9ncizP3Tv4-Ja5XhndUxc6SGnA&s',
        cover: 'https://upload.wikimedia.org/wikipedia/pt/a/ad/Apex_legends_capa.jpg'
      },
      {
        nome: 'League of Legends',
        descricao: 'League of Legends é um jogo eletrônico do gênero multiplayer online battle arena desenvolvido e publicado pela Riot Games. Foi lançado em outubro de 2009 para Microsoft Windows e em março de 2013 para macOS.',
        generoId: 3,
        foto: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends',
        cover: 'https://i.pinimg.com/originals/c5/6c/77/c56c774ee09e3e16bf12460dea765109.jpg'
      },
      {
        nome: 'EA FC25',
        generoId: 5,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHNRZmck-6MFdCrUbR3htsTCMHoRsbdQVoA&s',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJNFkz4Em_LNfZtLS33k6mtkYWPvaak1AdNMWIf2UiG5vvE_YN_fKMjyyzNOB5N7t0yg&usqp=CAU'
      }
    ])
  }
}