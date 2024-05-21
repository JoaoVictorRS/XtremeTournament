import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Jogo from './jogo.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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
}