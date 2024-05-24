import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Equipe from './equipe.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Partida from './partida.js'

export default class PartidaEquipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare equipeId: number

  @column()
  declare partidaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Partida)
  declare partida: BelongsTo<typeof Partida>

  @belongsTo(() => Equipe)
  declare equipe: BelongsTo<typeof Equipe>
}