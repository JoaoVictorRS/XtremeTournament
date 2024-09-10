import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Genero from './genero.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Torneio from './torneio.js'

export default class Jogo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare generoId: number

  @column()
  declare foto: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Genero)
  declare genero: BelongsTo<typeof Genero>

  @hasMany(() => Torneio)
  declare torneios: HasMany<typeof Torneio>
}