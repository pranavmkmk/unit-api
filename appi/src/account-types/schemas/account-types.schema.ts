import * as mongoose from 'mongoose';

export const AccountTypesSchema = new mongoose.Schema(
  {
    name :String,
    descriptions :String,
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    updatedBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'account_types',
  },
);
