import Equipe from '#models/equipe'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Equipe.createMany([
      // Counter-Strike 2
      { nome: 'Natus Vincere (CS2)', regiao: 'Ukraine', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7a-qSjzqDdQ5aFXjxcmhbBx2gEmiDY8qDHw&s' },
      { nome: 'Astralis (CS2)', regiao: 'Denmark', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Hyqi40hTMsVoSmcP4DAzLn2D2zydAs-e5w&s' },
      { nome: 'Furia (CS2)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfz0AvT2HYV3WYfL0O4NqBlp-rQ21yX8ABQ&s' },
      { nome: 'G2 Esports (CS2)', regiao: 'Europe', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGffke3TXuGbivLOVe0RUdY1MMgyuDrSDdsg&s' },
      // Rainbow Six Siege
      { nome: 'w7m esports (R6)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jBXTKj2eB-bbXc1wfh2wEkkswiUXFh3P7w&s' },
      { nome: 'FaZe Clan (R6)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EPz8z_1JjR_bv3mk6a4ty_paIEaI9p0Kpw&s' },
      { nome: 'Team Liquid (R6)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsGYdVzScFGWPI8cMGqcXFqjPvNAD2L-Xyw&s' },
      { nome: 'Spacestation Gaming (R6)', regiao: 'United States', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLedLtWgAxsJ7LcNYeyAmb701AYLLvjl6xQQ&s' },
      // Valorant
      { nome: 'LOUD (Valorant)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-hsQE0_xEg6CvGzCZk-VZhOxyVQ8yInG8Q&s' },
      { nome: 'Sentinels (Valorant)', regiao: 'United States', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlpy0_NTgJvJ6H3MySOTiymGj9AZsWQAHjA&s' },
      { nome: 'Fnatic (Valorant)', regiao: 'United Kingdom', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCQUOwOPFGfVNvApSRCbTKOzhJ35Yc2PTWg&s' },
      { nome: 'Team Heretics (Valorant)', regiao: 'Spain', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjf0CEiQbtKq45lGsH0HKF6KbRIdswUfyNjg&s' },
      // Apex Legends
      { nome: 'Counter Logic Gaming (Apex)', regiao: 'United States', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEftM9BRlzhJE2OgBp-771mxrC0W7cLPT5w&s' },
      { nome: 'TSM (Apex)', regiao: 'United States', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjesic68rQsS7E09e5dw7Vl_gnDvLf3AsrIA&s' },
      { nome: 'Complexity Gaming (Apex)', regiao: 'United States', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMm7dlJWXbpO0nhVo4Na_iKwdAtBCDeJBMgg&s' },
      { nome: 'Fnatic (Apex)', regiao: 'Japan', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCQUOwOPFGfVNvApSRCbTKOzhJ35Yc2PTWg&s' },
      // League of Legends
      { nome: 'LOUD (LoL)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-hsQE0_xEg6CvGzCZk-VZhOxyVQ8yInG8Q&s' },
      { nome: 'T1 (LoL)', regiao: 'South Korea', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHw0t8DOZAGmlceICYZKpboP39avyBX495A&s' },
      { nome: 'Dplus (LoL)', regiao: 'South Korea', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8ngdHrO5O2HGqb4Fp0PA83j-uZe0ud4l5A&s' },
      { nome: 'paiN Gaming (LoL)', regiao: 'Brazil', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfiqPv2tnu3Be0Ml8jamGOieMdAHVix3SpaQ&s' },
    ])
  }
}
