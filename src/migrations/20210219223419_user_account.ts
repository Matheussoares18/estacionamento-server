import { table } from "console";
import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_accounts', async (table)=> {
        table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('cpf')
        table.string('name')
        table.string('birth_date')
        table.string('email')
        table.text('password')
        table.dateTime('created_at')
        table.dateTime('update_at')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_accounts')
}

