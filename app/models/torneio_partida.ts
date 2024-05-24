import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Torneio from './torneio.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Partida from './partida.js'

export default class TorneioPartida extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare torneioId: number

  @column()
  declare partidaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Torneio)
  declare torneio: BelongsTo<typeof Torneio>

  @belongsTo(() => Partida)
  declare partida: BelongsTo<typeof Partida>
}