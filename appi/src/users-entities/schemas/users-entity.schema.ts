import * as mongoose from 'mongoose';

export const UsersEntitySchema = new mongoose.Schema(
  {
    usersId :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    entityId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    onSms :{ type: Boolean, default: false }, 
    onEmail :{ type: Boolean, default: false }, 
    onPush :{ type: Boolean, default: false }, 
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  },
  {
    timestamps: true,
    collection: 'usersentity',
  },
);
