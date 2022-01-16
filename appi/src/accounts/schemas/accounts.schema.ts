import * as mongoose from 'mongoose';

export const AccountsSchema = new mongoose.Schema(
  {
    accountNumber :String,
    accountTypesId :{ type: mongoose.Schema.Types.ObjectId, ref: 'AccountType' },
    usersId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    entityId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
    accountProvidersId :{ type: mongoose.Schema.Types.ObjectId, ref: 'AccountProviders' },
    currency :String,
    status: {
      type: Number,
      enum: [0, 1, 2, 3],
      default: 1
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  },
  {
    timestamps: true,
    collection: 'accounts',
  },
);
