import { Model } from 'objection';
import user_accounts from '../user_accounts/user_accounts';

export default class contacts extends Model {
    id!: string;
    contact_name?: string;
    phone!: string;
    user_account_id!: string;
    user_account: user_accounts;

    static tableName = 'contacts';

    // static jsonSchema = {
    //     type: 'object',

    //     required: ['phone'],

    //     properties: {
    //         id: { type: 'integer' },
    //         contact_name: { type: 'string' },
    //         phone: { type: 'string' },
    //     },
    // };

    static relationMappings = () => ({
        user_account: {
            relation: Model.BelongsToOneRelation,

            modelClass: user_accounts,
            join: {
                from: 'user_account_id',
                to: 'user_accounts.id',
            },
        },
    });
}