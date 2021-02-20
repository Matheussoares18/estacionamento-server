import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('address', (table) => {
        table.text('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

        table.string('zip_code');
        table.string('street');
        table.string('state');
        table.string('city');
        table.dateTime('created_at');
        table.dateTime('updated_at');

        table
            .text('user_account_id')
            .references('id')
            .inTable('user_accounts')
            .onDelete('CASCADE')
            .index();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('address');
}