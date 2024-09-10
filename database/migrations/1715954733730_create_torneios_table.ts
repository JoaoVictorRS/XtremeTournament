import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'torneios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable().unique()
      table.string('data_inicio').notNullable()
      table.string('data_fim').notNullable()
      table.text('logo_campeonato').nullable()
      table.integer('jogo_id').unsigned().references('id').inTable('jogos').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}