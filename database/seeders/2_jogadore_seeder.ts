import Jogadore from '#models/jogadore'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Jogadore.createMany([
      {
        nomeReal: 'Valerii Vakhovskyi',
        nick: 'b1t',
        idade: 21,
        pais: 'Ukraine'
      },
      {
        nomeReal: 'Justinas Lekavicius',
        nick: 'jL',
        idade: 24,
        pais: 'Lithuania'
      },
      {
        nomeReal: 'Aleksi Virolainen',
        nick: 'Aleksib',
        idade: 27,
        pais: 'Finland'
      },
      {
        nomeReal: 'Mihai Ivan',
        nick: 'iM',
        idade: 24,
        pais: 'Romania'
      },
      {
        nomeReal: 'Ihor Zhdanov',
        nick: 'w0nderful',
        idade: 19,
        pais: 'Ukraine'
      },
      {
        nomeReal: 'Sasha Kostyliev',
        nick: 's1mple',
        idade: 26,
        pais: 'Ukraine'
      },
      {
        nomeReal: 'Alexander Bro',
        nick: 'br0',
        idade: 22,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Nicolai Hvilshøj Reedtz',
        nick: 'dev1ce',
        idade: 28,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Victor Staehr',
        nick: 'Staehr',
        idade: 19,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Jakob Nygaard',
        nick: 'Jabbi',
        idade: 20,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Martin Lund',
        nick: 'Stavn',
        idade: 22,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Gabriel Toledo de Alcântara Sguario',
        nick: 'FalleN',
        idade: 32,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Kaike Silva Cerato',
        nick: 'KSCERATO',
        idade: 24,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Yuri Gomes dos Santos Boian',
        nick: 'Yuurih',
        idade: 24,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Marcelo Cespedes',
        nick: 'Chelo',
        idade: 25,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Kayke Bertolucci',
        nick: 'kye',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Nemanja Isaković',
        nick: 'Nexa',
        idade: 27,
        pais: 'Serbia'
      },
      {
        nomeReal: 'Nikola Kovač',
        nick: 'NiKo',
        idade: 27,
        pais: 'Bosnia and Herzegovina'
      },
      {
        nomeReal: 'Nemanja Kovač',
        nick: 'HuNter-',
        idade: 28,
        pais: 'Bosnia and Herzegovina'
      },
      {
        nomeReal: 'Ilya Osipov',
        nick: 'm0NESY',
        idade: 19,
        pais: 'Russia'
      },
      {
        nomeReal: 'Rasmus Nielsen',
        nick: 'HooXi',
        idade: 28,
        pais: 'Denmark'
      },
      //R6
      //Liquid
      {
        nomeReal: 'Lorenzo Volpi',
        nick: 'Lagonis',
        idade: 22,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Pablo Oliveira',
        nick: 'resetz',
        idade: 21,
        pais: 'Brazil'
      },
      {
        nomeReal: 'André Oliveira',
        nick: 'nesk',
        idade: 29,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Gabriel Maia',
        nick: 'Maia',
        idade: 22,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Luccas Molina',
        nick: 'Paluh',
        idade: 24,
        pais: 'Brazil'
      },
      //FaZe
      {
        nomeReal: 'Victor Augusto dos Santos',
        nick: 'VITAKING',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Eduardo Chiste Fontes',
        nick: 'KDS',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Lucas Schinke',
        nick: 'soulz1',
        idade: 23,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Thiago Sá Ferreira',
        nick: 'Handyy',
        idade: 21,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Jaime Ramos',
        nick: 'Cyber',
        idade: 25,
        pais: 'Brazil'
      },
      //space
      {
        nomeReal: 'Alec Fultz',
        nick: 'Fultz',
        idade: 23,
        pais: 'United States'
      },
      {
        nomeReal: 'Liam Paz',
        nick: 'Ashn',
        pais: 'United States'
      },
      {
        nomeReal: 'Jack Burkard',
        nick: 'J9O',
        idade: 21,
        pais: 'United States'
      },
      {
        nomeReal: 'David Ifidon',
        nick: 'iconic',
        idade: 21,
        pais: 'United States'
      },
      {
        nomeReal: 'Roman Breaux',
        nick: 'Forrest',
        idade: 23,
        pais: 'United States'
      },
      {
        nomeReal: 'Seth Mik',
        nick: 'Callout',
        idade: 24,
        pais: 'United States'
      },
      //w7
      {
        nomeReal: 'Gabriel Fernandes',
        nick: 'volpz',
        idade: 20,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Júlio Gabriel',
        nick: 'L0BIN',
        pais: 'Brazil'
      },
      {
        nomeReal: 'João Miranda',
        nick: 'Dotz',
        idade: 22,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Leonardo Lopes',
        nick: 'd4sh',
        idade: 21,
        pais: 'Brazil'
      },
      //valorant
      //LOUD
      {
        nomeReal: 'Matias Delipetro',
        nick: 'Saadhak',
        idade: 27,
        pais: 'Argentina'
      },
      {
        nomeReal: 'Arthur Vieira',
        nick: 'tuyz',
        idade: 20,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Pedro Lucas',
        nick: 'peu',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Cauan Pereira',
        nick: 'cauanzin',
        idade: 18,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Felipe Basso',
        nick: 'Less',
        idade: 19,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Jordan Nunes',
        nick: 'stk',
        idade: 27,
        pais: 'Brazil'
      },
      //Sentinels
      {
        nomeReal: 'Mouhamed Amine Ouarid',
        nick: 'johnqt',
        pais: 'Morroco'
      },
      {
        nomeReal: 'Brandon Winn',
        nick: '-Ace',
        idade: 29,
        pais: 'United States'
      },
      {
        nomeReal: 'Zachary Jude Patrone',
        nick: 'zekken',
        idade: 19,
        pais: 'United States'
      },
      {
        nomeReal: 'Tyson Ngo',
        nick: 'TenZ',
        idade: 23,
        pais: 'Canada'
      },
      {
        nomeReal: 'Gustavo Rossi',
        nick: 'Sacy',
        idade: 26,
        pais: 'Brazil'
      },
      //fnatic
      {
        nomeReal: 'Jake Howlett',
        nick: 'Boaster',
        idade: 25,
        pais: 'United Kingdom'
      },
      {
        nomeReal: 'Leo Jannesson',
        nick: 'Leo',
        idade: 20,
        pais: 'Sweden'
      },
      {
        nomeReal: 'Nikita Syrmytev',
        nick: 'Derke',
        idade: 21,
        pais: 'Finland'
      },
      {
        nomeReal: 'Timofey Khromov',
        nick: 'Chronicle',
        idade: 21,
        pais: 'Russia'
      },
      {
        nomeReal: 'Emir Ali Beder',
        nick: 'Alfajer',
        idade: 18,
        pais: 'Turkey'
      },
      //heretics
      {
        nomeReal: 'Enes Ecirli',
        nick: 'RieNs',
        idade: 18,
        pais: 'Turkey'
      },
      {
        nomeReal: 'Mert Alkan',
        nick: 'Wo0t',
        idade: 18,
        pais: 'Turkey'
      },
      {
        nomeReal: 'Wassim Cista',
        nick: 'keloqz',
        idade: 21,
        pais: 'France'
      },
      {
        nomeReal: 'Ričardas Lukaševičius',
        nick: 'Boo',
        idade: 26,
        pais: 'Lithuania'
      },
      {
        nomeReal: 'Rodolfo Martin',
        nick: 'StarWraith',
        idade: 33,
        pais: 'Spain'
      },
      //Apex
      //Counter logica
      {
        nomeReal: 'Esteban Gomez',
        nick: 'NanoFRYS',
        idade: 24,
        pais: 'United States'
      },
      {
        nomeReal: 'Jake',
        nick: 'Summer',
        pais: 'United States'
      },
      //TSM
      {
        nomeReal: 'Evan Verhulst',
        nick: 'Verhulst',
        pais: 'United States'
      },
      {
        nomeReal: 'Jordan Wolfe',
        nick: 'Reps',
        idade: 29,
        pais: 'United States'
      },
      //Complexity
      {
        nomeReal: 'Trenton Clements',
        nick: 'lou',
        idade: 22,
        pais: 'United States'
      },
      {
        nomeReal: 'James Lee',
        nick: 'KIMCHILEE',
        idade: 28,
        pais: 'United States'
      },
      {
        nomeReal: 'Bowen Fuller',
        nick: 'Monsoon',
        idade: 25,
        pais: 'United States'
      },
      //Fnatic
      {
        nomeReal: 'Yuga Horie',
        nick: 'YukaF',
        idade: 20,
        pais: 'Japan'
      },
      {
        nomeReal: 'Rei Yokoyama',
        nick: 'Lykq',
        idade: 22,
        pais: 'Japan'
      },
      //League of legends (QUASE LAAAAAAAAAAAAAAAAAAAAAAAA)
      //LOUD
      {
        nomeReal: 'Ygor Freitas',
        nick: 'RedBert',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Park Jong-hoon',
        nick: 'Croc',
        pais: 'South Korea'
      },
      {
        nomeReal: 'Thiago Sartori',
        nick: 'Tinowns',
        idade: 27,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Moon Geom-su',
        nick: 'Route',
        pais: 'South Korea'
      },
      {
        nomeReal: 'Leonardo Souza',
        nick: 'Robo',
        idade: 26,
        pais: 'Brazil'
      },
      //T1
      {
        nomeReal: 'Lee Ji-hoon',
        nick: 'Easyhoon',
        idade: 31,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Kang-hui',
        nick: 'Roach',
        idade: 25,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Park Ui-jin',
        nick: 'Untara',
        idade: 27,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Im Jae-hyeon',
        nick: 'Tom',
        idade: 28,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Jeong-gyun',
        nick: 'KkOma',
        idade: 38,
        pais: 'South Korea'
      },
      //Dplus
      {
        nomeReal: 'Yoon Seol',
        nick: 'Bible',
        idade: 24,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Lee Jae-min',
        nick: 'Zefa',
        idade: 36,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Chang-dong',
        nick: 'Canna',
        idade: 24,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Heo Su',
        nick: 'ShowMaker',
        idade: 23,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Geon-bu',
        nick: 'Canyon',
        idade: 22,
        pais: 'South Korea'
      },
      //pain
      {
        nomeReal: 'Matheus Guimarães Sarquis',
        nick: 'Sarkis',
        idade: 17,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Alexandre Lima',
        nick: 'Titan',
        idade: 23,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Choi Won-yeong',
        nick: 'Kuri',
        pais: 'South Korea'
      },
      {
        nomeReal: 'Matheus Rossini',
        nick: 'DyNquedo',
        idade: 26,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Choi Ui-seok',
        nick: 'Wizer',
        idade: 25,
        pais: 'South Korea'
      },
    ])
  }
}