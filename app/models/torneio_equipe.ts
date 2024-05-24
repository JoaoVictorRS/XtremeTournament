import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Equipe from './equipe.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Torneio from './torneio.js'

export default class TorneioEquipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare equipeId: number

  @column()
  declare torneioId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @belongsTo(() => Torneio)
  declare torneio: BelongsTo<typeof Torneio>
  
  @belongsTo(() => Equipe)
  declare equipe: BelongsTo<typeof Equipe>
}