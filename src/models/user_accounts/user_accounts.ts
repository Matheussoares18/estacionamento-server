import { Model } from 'objection';
import addresses from '../adresses/adresses';
import contacts from '../contacts/contacts';

export default class user_accounts extends Model {
    id!: string;
    name!: string;
    cpf!: string;
    birth_date: string;
    email!: string;
    password!: string;

    Addresses?: addresses[];

    Contacts?: contacts[];

    static tableName = 'user_accounts';

    static jsonSchema = {
        type: 'object',

        required: ['name', 'cpf', 'birth_date', 'email', 'password'],

        properties: {
            name: { type: 'string' },
            social_reason: { type: 'string' },
            birth_date: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },

            address: {
                type: 'object',
                properties: {
                    zip_code: { type: 'string' },
                    street: { type: 'string' },
                    state: { type: 'string' },
                    city: { type: 'string' },
                },
            },
            contacts: {
                type: 'object',
                properties: {
                    contact_name: { type: 'string' },
                    phone: { type: 'string' },
                },
            },
        },
    };

    static relationMappings = () => ({
        Address: {
            relation: Model.HasManyRelation,

            modelClass: addresses,
            join: {
                from: 'user_accounts.id',
                to: 'address.user_account_id',
            },
        },
        Contacts: {
            relation: Model.HasManyRelation,

            modelClass: contacts,
            join: {
                from: 'user_accounts.id',
                to: 'contacts.user_account_id',
            },
        },
    });
}