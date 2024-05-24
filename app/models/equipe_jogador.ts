import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Equipe from './equipe.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jogadore from './jogadore.js'

export default class EquipeJogador extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare jogadoreId: number

  @column()
  declare equipeId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Equipe)
  declare equipe: BelongsTo<typeof Equipe>

  @belongsTo(() => Jogadore)
  declare jogador: BelongsTo<typeof Jogadore>
}