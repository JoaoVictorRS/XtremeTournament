import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Equipe from './equipe.js'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import EquipeJogador from './equipe_jogador.js'

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

  @column()
  declare foto: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Equipe, {
    'pivotTable': 'equipe_jogadors',
  })
  declare equipe: ManyToMany<typeof Equipe>

  @hasMany(() => EquipeJogador)
  declare equipeJogador: HasMany<typeof EquipeJogador>
}