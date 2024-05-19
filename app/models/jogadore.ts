import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Jogadore extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nomeReal: string

  @column()
  declare nick: string

  @column()
  declare idade: number

  @column()
  declare pais: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}