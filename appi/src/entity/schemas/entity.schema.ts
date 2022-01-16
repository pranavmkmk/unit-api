import * as mongoose from 'mongoose';

export const EntitySchema = new mongoose.Schema(
  {
    name :String,
    legal_name :String,
    secretKey :String,
    documents :Array,
    logo :String,
    branding :Array,
    services :Array,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isAppPublished :{ type: Boolean, default: false },
    appData :Array,
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    updatedBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'entity',
  },
);
