import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Jogadore from './jogadore.js'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Torneio from './torneio.js'
import EquipeJogador from './equipe_jogador.js'
import Partida from './partida.js'
import PartidaEquipe from './partida_equipe.js'
import TorneioEquipe from './torneio_equipe.js'

export default class Equipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare regiao: string

  @column()
  declare logo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Jogadore, {
    'pivotTable': 'equipe_jogadors',
  })
  declare jogadores: ManyToMany<typeof Jogadore>

  @manyToMany(() => Torneio, {
    'pivotTable': 'torneio_equipes',
  })
  declare torneios: ManyToMany<typeof Torneio>

  @manyToMany(() => Partida, {
    'pivotTable': 'partida_equipes',
  })
  declare partidas: ManyToMany<typeof Partida>

  @hasMany(() => EquipeJogador)
  declare equipeJogador: HasMany<typeof EquipeJogador>

  @hasMany(() => PartidaEquipe)
  declare partidaEquipe: HasMany<typeof PartidaEquipe>

  @hasMany(() => TorneioEquipe)
  declare torneioEquipe: HasMany<typeof TorneioEquipe>
}