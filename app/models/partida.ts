import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Partida extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dataPartida: Date

  @column()
  declare resultado: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}