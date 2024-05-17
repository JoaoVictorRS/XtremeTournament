import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'torneios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable().unique()
      table.date('data_incio').notNullable()
      table.date('data_fim').notNullable()
      table.integer('equipe_id').unsigned().references('id').inTable('equipes').notNullable()
      table.integer('jogo_id').unsigned().references('id').inTable('jogos').notNullable()
      table.integer('partida_id').unsigned().references('id').inTable('partidas').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}