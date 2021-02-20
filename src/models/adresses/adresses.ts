import { Model } from 'objection';
import user_accounts from '../user_accounts/user_accounts';

export default class addresses extends Model {
    id!: string;
    zip_code!: string;
    street!: string;
    state!: string;
    city!: string;
    user_account_id!: string;
    user_account!: user_accounts;

    static tableName = 'address';

    static jsonSchema = {
        type: 'object',

        required: ['zip_code', 'street', 'state', 'city'],

        properties: {
            id: { type: 'integer' },
            street: { type: 'string' },
            state: { type: 'string' },
            city: { type: 'string' },
            zip_code: { type: 'string' },
        },
    };

    static relationMappings = () => ({
        user_account: {
            relation: Model.BelongsToOneRelation,

            modelClass: user_accounts,
            join: {
                from: 'user_account_id',
                to: 'address.user_account_id',
            },
        },
    });
}