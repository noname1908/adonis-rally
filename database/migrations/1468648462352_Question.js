'use strict'

const Schema = use('Schema')

class QuestionSchema extends Schema {

  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('channel_id').unsigned()
      table.integer('user_id').unsigned()
      table.string('slug').unique()
      table.string('title').notNullable()
      table.text('body', 'longtext').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }

}

module.exports = QuestionSchema
