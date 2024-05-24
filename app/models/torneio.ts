import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Jogo from './jogo.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Equipe from './equipe.js'
import Partida from './partida.js'
import TorneioEquipe from './torneio_equipe.js'
import TorneioPartida from './torneio_partida.js'

export default class Torneio extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare dataInicio: string | null

  @column()
  declare dataFim: string | null

  @column()
  declare jogoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Jogo)
  declare jogo: BelongsTo<typeof Jogo>

  @manyToMany(() => Equipe, {
    'pivotTable': 'torneio_equipes',
  })
  declare equipes: ManyToMany<typeof Equipe>

  @manyToMany(() => Partida, {
    'pivotTable': 'torneio_partidas',
  })
  declare partidas: ManyToMany<typeof Partida>

  @hasMany(() => TorneioEquipe)
  declare torneioEquipe: HasMany<typeof TorneioEquipe>

  @hasMany(() => TorneioPartida)
  declare torneioPartida: HasMany<typeof TorneioPartida>
}