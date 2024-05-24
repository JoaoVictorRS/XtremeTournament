import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Equipe from './equipe.js'
import Torneio from './torneio.js'
import TorneioPartida from './torneio_partida.js'
import TorneioEquipe from './torneio_equipe.js'

export default class Partida extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dataPartida: string | null

  @column()
  declare resultado: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Equipe, {
    'pivotTable': 'partida_equipes',
  })
  declare equipes: ManyToMany<typeof Equipe>

  @manyToMany(() => Torneio, {
    'pivotTable': 'torneio_partidas',
  })
  declare torneio: ManyToMany<typeof Torneio>

  @hasMany(() => TorneioPartida)
  declare torneioPartida: HasMany<typeof TorneioPartida>

  @hasMany(() => TorneioEquipe)
  declare torneioEquipe: HasMany<typeof TorneioEquipe>
}