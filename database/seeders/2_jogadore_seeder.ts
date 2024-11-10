import Jogadore from '#models/jogadore'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Jogadore.createMany([
      {
        nomeReal: 'Valerii Vakhovskyi',
        foto: 'https://ggscore.com/media/logo/p41630.png?100',
        nick: 'b1t',
        idade: 21,
        pais: 'Ukraine'
      },
      {
        nomeReal: 'Justinas Lekavicius',
        foto: 'https://ggscore.com/media/logo/p44313.png?42',
        nick: 'jL',
        idade: 24,
        pais: 'Lithuania'
      },
      {
        nomeReal: 'Aleksi Virolainen',
        foto: 'https://ggscore.com/media/logo/p15069.png?11',
        nick: 'Aleksib',
        idade: 27,
        pais: 'Finland'
      },
      {
        nomeReal: 'Mihai Ivan',
        foto: 'https://ggscore.com/media/logo/p23914.png?48',
        nick: 'iM',
        idade: 24,
        pais: 'Romania'
      },
      {
        nomeReal: 'Ihor Zhdanov',
        foto: 'https://ggscore.com/media/logo/p56170.png?80',
        nick: 'w0nderful',
        idade: 19,
        pais: 'Ukraine'
      },
      {
        nomeReal: 'Sasha Kostyliev',
        foto: 'https://ggscore.com/media/logo/p3997.png?92',
        nick: 's1mple',
        idade: 26,
        pais: 'Ukraine'
      },
      {
        nomeReal: 'Alexander Bro',
        foto: 'https://ggscore.com/media/logo/p63049.png?26',
        nick: 'br0',
        idade: 22,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Nicolai Hvilshøj Reedtz',
        foto: 'https://ggscore.com/media/logo/p3883.png?52',
        nick: 'dev1ce',
        idade: 28,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Victor Staehr',
        foto: 'https://ggscore.com/media/logo/p64764.png?46',
        nick: 'Staehr',
        idade: 19,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Jakob Nygaard',
        foto: 'https://ggscore.com/media/logo/p40384.png?40',
        nick: 'Jabbi',
        idade: 20,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Martin Lund',
        foto: 'https://ggscore.com/media/logo/p13930.png?82',
        nick: 'Stavn',
        idade: 22,
        pais: 'Denmark'
      },
      {
        nomeReal: 'Gabriel Toledo de Alcântara Sguario',
        foto: 'https://ggscore.com/media/logo/p3930.png?32',
        nick: 'FalleN',
        idade: 32,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Kaike Silva Cerato',
        foto: 'https://ggscore.com/media/logo/p25160.png?67',
        nick: 'KSCERATO',
        idade: 24,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Yuri Gomes dos Santos Boian',
        foto: 'https://ggscore.com/media/logo/p20930.png?83',
        nick: 'Yuurih',
        idade: 24,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Marcelo Cespedes',
        foto: 'https://ggscore.com/media/logo/p19453.png?35',
        nick: 'Chelo',
        idade: 25,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Kayke Bertolucci',
        foto: 'https://ggscore.com/media/logo/p62782.png?99',
        nick: 'kye',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Nemanja Isaković',
        foto: 'https://ggscore.com/media/logo/p14893.png?80',
        nick: 'Nexa',
        idade: 27,
        pais: 'Serbia'
      },
      {
        nomeReal: 'Nikola Kovač',
        foto: 'https://ggscore.com/media/logo/p3920.png?94',
        nick: 'NiKo',
        idade: 27,
        pais: 'Bosnia and Herzegovina'
      },
      {
        nomeReal: 'Nemanja Kovač',
        foto: 'https://ggscore.com/media/logo/p7108.png?57',
        nick: 'HuNter-',
        idade: 28,
        pais: 'Bosnia and Herzegovina'
      },
      {
        nomeReal: 'Ilya Osipov',
        foto: 'https://ggscore.com/media/logo/p37629.png?38',
        nick: 'm0NESY',
        idade: 19,
        pais: 'Russia'
      },
      {
        nomeReal: 'Rasmus Nielsen',
        foto: 'https://ggscore.com/media/logo/p18949.png?5',
        nick: 'HooXi',
        idade: 28,
        pais: 'Denmark'
      },
      //R6
      //Liquid
      {
        nomeReal: 'Lorenzo Volpi',
        foto: 'https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/66443d242804faf41fa9f4b7_LAGONIS%20S.webp',
        nick: 'Lagonis',
        idade: 22,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Pablo Oliveira',
        foto: 'https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca004/66443d881668c1cc84aa9fbd_RESETZ%20S.webp',
        nick: 'resetz',
        idade: 21,
        pais: 'Brazil'
      },
      {
        nomeReal: 'André Oliveira',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Dhuv3cTArBz2e4i_f25A1ZjS6TfgFHXvJA&s',
        nick: 'nesk',
        idade: 29,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Gabriel Maia',
        foto: 'https://www.jwave.com.br/wp-content/uploads/2024/03/Gabriel-22Maia22-novo-jogador-de-R6-da-Cavalaria-foto-divulgacao-Team-Liquid.jpeg',
        nick: 'Maia',
        idade: 22,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Luccas Molina',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn3UKYW37WZZPTMJY_ZhSi3b4ZDPXaCC6hQ&s',
        nick: 'Paluh',
        idade: 24,
        pais: 'Brazil'
      },
      //FaZe
      {
        nomeReal: 'Victor Augusto dos Santos',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEa5O3EVX4W8QKmNUwJWmJYQFcd24C1oYSw&s',
        nick: 'VITAKING',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Eduardo Chiste Fontes',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTnppBBbxqOLMqJwLpMFHNLMVCxA9yUGZGg&s',
        nick: 'KDS',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Lucas Schinke',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0fB3tjOtFHOVRY4mTzNM4-52RBoHrzG20w&s',
        nick: 'soulz1',
        idade: 23,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Thiago Sá Ferreira',
        foto: 'https://preview.redd.it/are-handyy-nade-the-same-person-does-this-mean-he-will-have-v0-inetbten9ekc1.jpg?width=210&format=pjpg&auto=webp&s=7c9c140b83aa692d3624b615f280106625b24811',
        nick: 'Handyy',
        idade: 21,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Jaime Ramos',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRTLA8JXM-DTDB4AUce00WKYR9KR0BzEp9Bbv16pUx_HL7NYNm6hfLBQf_KINziy2p8A&usqp=CAU',
        nick: 'Cyber',
        idade: 25,
        pais: 'Brazil'
      },
      //space
      {
        nomeReal: 'Alec Fultz',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JpRQu2BkeIu0cl2NHlymeErfxDnD2KCAZg&s',
        nick: 'Fultz',
        idade: 23,
        pais: 'United States'
      },
      {
        nomeReal: 'Liam Paz',
        foto: 'https://cdn.prod.website-files.com/605e2c8c6b591c8ec12559d4/65f1d5f2aae38820f5e42103_240311_AshnHeadshot_GC%20(1).png',
        nick: 'Ashn',
        pais: 'United States'
      },
      {
        nomeReal: 'Jack Burkard',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytHXnGIsSo9Lu4rZg_ltPoKcXxxaP0cEy-g&s',
        nick: 'J9O',
        idade: 21,
        pais: 'United States'
      },
      {
        nomeReal: 'David Ifidon',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHu3PV7j5sotVcE-hePdINym_QTVCQecW8Q&s',
        nick: 'iconic',
        idade: 21,
        pais: 'United States'
      },
      {
        nomeReal: 'Roman Breaux',
        foto: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f335e763-9768-42f1-b4b1-0b295577df54-profile_image-300x300.png',
        nick: 'Forrest',
        idade: 23,
        pais: 'United States'
      },
      {
        nomeReal: 'Seth Mik',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5j8uU7e7f_o1NQo0T4XzDjp3g8TS3vbhCw&s',
        nick: 'Callout',
        idade: 24,
        pais: 'United States'
      },
      //w7
      {
        nomeReal: 'Gabriel Fernandes',
        foto: 'https://s2-ge.glbimg.com/lbb7cD5hN6W6esOn3flO_MASxPo=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/v/o/hNtinBT6ipWVMsk8AiRw/volpzr6-334442168-199273399416271-2154241996292247988-n.jpg',
        nick: 'volpz',
        idade: 20,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Júlio Gabriel',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEUr6ibKWqivwNg5-5NRnSuH5lvHVZ_YfOg&s',
        nick: 'L0BIN',
        pais: 'Brazil'
      },
      {
        nomeReal: 'João Miranda',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYgOQ6mFzAZcO7nZXVVkz9enqu5tqKuvoTA&s',
        nick: 'Dotz',
        idade: 22,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Leonardo Lopes',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPVIBI9zEgZ7Cl4Y0MU6VxStz_FMpEKtzOQ&s',
        nick: 'd4sh',
        idade: 21,
        pais: 'Brazil'
      },
      //valorant
      //LOUD
      {
        nomeReal: 'Matias Delipetro',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxPKVkjPbK5jeVt3uwJ3wj6hcRdkXnVpWB2MZCAdJZPl04I7LxsMi-FCjuoVfCRg85Q4&usqp=CAU',
        nick: 'Saadhak',
        idade: 27,
        pais: 'Argentina'
      },
      {
        nomeReal: 'Arthur Vieira',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzxC0mJHEfwaFZHwpq2ZSskbwP-iATTQn5Q&s',
        nick: 'tuyz',
        idade: 20,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Pedro Lucas',
        foto: 'https://owcdn.net/img/66306e6299a0b.png',
        nick: 'peu',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Cauan Pereira',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumE0plw1H7auH65dkM1HOuVMNp0vjii8kqA&s',
        nick: 'cauanzin',
        idade: 18,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Felipe Basso',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMWBiUm1K34RClZs4iTCxkg10271-iA-e8Q&s',
        nick: 'Less',
        idade: 19,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Jordan Nunes',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiRGc6tYrSetEXrCNa77mEbl02KEm4hdzQw&s',
        nick: 'stk',
        idade: 27,
        pais: 'Brazil'
      },
      //Sentinels
      {
        nomeReal: 'Mouhamed Amine Ouarid',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3stZHRIkY_STiR4c3pO_xkWFZZ_jc1ftaw&s',
        nick: 'johnqt',
        pais: 'Morroco'
      },
      {
        nomeReal: 'Brandon Winn',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZohNoSMH575igYc4zPL6WPPtSDMjx6RpNw&s',
        nick: '-Ace',
        idade: 29,
        pais: 'United States'
      },
      {
        nomeReal: 'Zachary Jude Patrone',
        foto: 'https://owcdn.net/img/6416956f0da1e.png',
        nick: 'zekken',
        idade: 19,
        pais: 'United States'
      },
      {
        nomeReal: 'Tyson Ngo',
        foto: 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cgravity=auto%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/tenz.png',
        nick: 'TenZ',
        idade: 23,
        pais: 'Canada'
      },
      {
        nomeReal: 'Gustavo Rossi',
        foto: 'https://owcdn.net/img/6416954a0788d.png',
        nick: 'Sacy',
        idade: 26,
        pais: 'Brazil'
      },
      //fnatic
      {
        nomeReal: 'Jake Howlett',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3ijOTxS_nuQaQfNZskAH8TuQguswfu2k1g&s',
        nick: 'Boaster',
        idade: 25,
        pais: 'United Kingdom'
      },
      {
        nomeReal: 'Leo Jannesson',
        foto: 'https://owcdn.net/img/65d5cb904fc7c.png',
        nick: 'Leo',
        idade: 20,
        pais: 'Sweden'
      },
      {
        nomeReal: 'David Byer',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSxqVNtVCVH3WuJ8SUi0OFE97eGDlt-eZ3Q&s',
        nick: 'Derke',
        idade: 21,
        pais: 'Finland'
      },
      {
        nomeReal: 'Enzo Mestari',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7ScG8Vs2VoU27Xrb_sfrpRF15SamcNVExQ&s',
        nick: 'Enzo',
        idade: 20,
        pais: 'France'
      },
      {
        nomeReal: 'Nikita Sokolov',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7jnb2V_fUCzWsyGIvqWgoxqgs3x5mNDQiA&s',
        nick: 'Redgar',
        idade: 25,
        pais: 'Russia'
      },
      //heretics
      {
        nomeReal: 'Enes Ecirli',
        foto: 'https://prosettings.net/wp-content/uploads/riens.png',
        nick: 'RieNs',
        idade: 18,
        pais: 'Turkey'
      },
      {
        nomeReal: 'Mert Alkan',
        foto: 'https://liquipedia.net/commons/images/thumb/8/82/Fire_Flux_Esports_Wo0t.png/450px-Fire_Flux_Esports_Wo0t.png',
        nick: 'Wo0t',
        idade: 18,
        pais: 'Turkey'
      },
      {
        nomeReal: 'Wassim Cista',
        foto: 'https://liquipedia.net/commons/images/2/27/G2_Esports_keloqz.png',
        nick: 'keloqz',
        idade: 21,
        pais: 'France'
      },
      {
        nomeReal: 'Ričardas Lukaševičius',
        foto: 'https://owcdn.net/img/665b77d7abe82.png',
        nick: 'Boo',
        idade: 26,
        pais: 'Lithuania'
      },
      {
        nomeReal: 'Rodolfo Martin',
        foto: 'https://pbs.twimg.com/media/FZLgRJeWIAAtVPz.jpg:large',
        nick: 'StarWraith',
        idade: 33,
        pais: 'Spain'
      },
      //Apex
      //Counter logica
      {
        nomeReal: 'Esteban Gomez',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO58GTfinMVl3rGnFyh5tX1yoBQIVzqoLduw&s',
        nick: 'NanoFRYS',
        idade: 24,
        pais: 'United States'
      },
      {
        nomeReal: 'Jake',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO58GTfinMVl3rGnFyh5tX1yoBQIVzqoLduw&s',
        nick: 'Summer',
        pais: 'United States'
      },
      //TSM
      {
        nomeReal: 'Evan Verhulst',
        foto: 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cgravity=auto%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/verhulst.png',
        nick: 'Verhulst',
        pais: 'United States'
      },
      {
        nomeReal: 'Jordan Wolfe',
        foto: 'https://liquipedia.net/commons/images/thumb/7/7a/Reps_Apex_Preseason_Invitational.png/200px-Reps_Apex_Preseason_Invitational.png',
        nick: 'Reps',
        idade: 29,
        pais: 'United States'
      },
      //Complexity
      {
        nomeReal: 'Trenton Clements',
        foto: 'https://liquipedia.net/commons/images/thumb/8/88/Lou_Apex_Preseason_Invitational.png/200px-Lou_Apex_Preseason_Invitational.png',
        nick: 'lou',
        idade: 22,
        pais: 'United States'
      },
      {
        nomeReal: 'James Lee',
        foto: 'https://cdn.complexity.gg/files/2023/08/08134005/kimchee.png',
        nick: 'KIMCHILEE',
        idade: 28,
        pais: 'United States'
      },
      {
        nomeReal: 'Bowen Fuller',
        foto: 'https://liquipedia.net/commons/images/thumb/5/54/Monsoon_Apex_Preseason_Invitational.png/200px-Monsoon_Apex_Preseason_Invitational.png',
        nick: 'Monsoon',
        idade: 25,
        pais: 'United States'
      },
      //Fnatic
      {
        nomeReal: 'Yuga Horie',
        foto: 'https://liquipedia.net/commons/images/thumb/a/a8/GameWith_YukaF.png/155px-GameWith_YukaF.png',
        nick: 'YukaF',
        idade: 20,
        pais: 'Japan'
      },
      {
        nomeReal: 'Rei Yokoyama',
        foto: 'https://cdn.sanity.io/images/5gii1snx/production/6b86d705204168d832eb06582c439fabd46bde24-1000x1000.png',
        nick: 'Lykq',
        idade: 22,
        pais: 'Japan'
      },
      //League of legends (QUASE LAAAAAAAAAAAAAAAAAAAAAAAA)
      //LOUD
      {
        nomeReal: 'Ygor Freitas',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/42/LOUD_RedBert_2024_Split_2.png/revision/latest?cb=20240608025237',
        nick: 'RedBert',
        pais: 'Brazil'
      },
      {
        nomeReal: 'Park Jong-hoon',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f0/LOUD_Croc_2024_Split_2.png/revision/latest?cb=20240608025322',
        nick: 'Croc',
        pais: 'South Korea'
      },
      {
        nomeReal: 'Thiago Sartori',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c6/LLL_tinowns_2023_Split_2.png/revision/latest/scale-to-width-down/250?cb=20230617140227',
        nick: 'Tinowns',
        idade: 27,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Moon Geom-su',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/5/5f/LOUD_Route_2024_Split_2.png/revision/latest?cb=20240608025051',
        nick: 'Route',
        pais: 'South Korea'
      },
      {
        nomeReal: 'Leonardo Souza',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fe/LOUD_Robo_2024_Split_2.png/revision/latest?cb=20240608025437',
        nick: 'Robo',
        idade: 26,
        pais: 'Brazil'
      },
      //T1
      {
        nomeReal: 'Lee Ji-hoon',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/35/SKTEasyhoon2015.jpg/revision/latest/scale-to-width-down/250?cb=20170802120656',
        nick: 'Easyhoon',
        idade: 31,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Kang-hui',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/62/GEN_Roach_2019_Split_2.png/revision/latest/scale-to-width-down/250?cb=20190722133421',
        nick: 'Roach',
        idade: 25,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Park Ui-jin',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b4/GRF_Untara_2020_Split_1.png/revision/latest?cb=20200221235858',
        nick: 'Untara',
        idade: 27,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Im Jae-hyeon',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/06/T1_Tom_2024_Split_1.png/revision/latest/scale-to-width-down/250?cb=20240209181546',
        nick: 'Tom',
        idade: 28,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Jeong-gyun',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e2/T1_kkOma_2024_Split_1.png/revision/latest?cb=20240209181617',
        nick: 'KkOma',
        idade: 38,
        pais: 'South Korea'
      },
      //Dplus
      {
        nomeReal: 'Yoon Seol',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/cc/DK.C_Bible_2021_Split_2.png/revision/latest/scale-to-width-down/250?cb=20210603084545',
        nick: 'Bible',
        idade: 24,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Lee Jae-min',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/39/T1_Zefa_2021_Split_1.png/revision/latest/scale-to-width-down/250?cb=20210207000852',
        nick: 'Zefa',
        idade: 36,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Chang-dong',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/cf/DK_Canna_2023_Split_2.png/revision/latest?cb=20230613224314',
        nick: 'Canna',
        idade: 24,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Heo Su',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/fd/DK_ShowMaker_2023_Split_1.png/revision/latest?cb=20230429032319',
        nick: 'ShowMaker',
        idade: 23,
        pais: 'South Korea'
      },
      {
        nomeReal: 'Kim Geon-bu',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/38/GEN_Canyon_2024_Split_1.png/revision/latest?cb=20240305182159',
        nick: 'Canyon',
        idade: 22,
        pais: 'South Korea'
      },
      //pain
      {
        nomeReal: 'Matheus Guimarães Sarquis',
        foto: 'https://pbs.twimg.com/profile_images/1744898019676299264/Bfubb9HO_400x400.jpg',
        nick: 'Sarkis',
        idade: 17,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Alexandre Lima',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e6/RED_TitaN_2023_Split_1.png/revision/latest/scale-to-width-down/250?cb=20230120112052',
        nick: 'Titan',
        idade: 23,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Choi Won-yeong',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/40/PNG_Kuri_2024_Split_2.png/revision/latest/scale-to-width-down/250?cb=20240604183014',
        nick: 'Kuri',
        pais: 'South Korea'
      },
      {
        nomeReal: 'Matheus Rossini',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a6/PNG_DyNquedo_2024_Split_2.png/revision/latest/scale-to-width-down/630?cb=20240604183143',
        nick: 'DyNquedo',
        idade: 26,
        pais: 'Brazil'
      },
      {
        nomeReal: 'Choi Ui-seok',
        foto: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c0/PNG_Wizer_2024_Split_2.png/revision/latest/scale-to-width-down/630?cb=20240604182829',
        nick: 'Wizer',
        idade: 25,
        pais: 'South Korea'
      },
    ])
  }
}