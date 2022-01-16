import * as mongoose from 'mongoose';

export const BeneficiarySchema = new mongoose.Schema(
  {
    name :String,
    benefiaciaryTypeId :{ type: mongoose.Schema.Types.ObjectId, ref: 'BeneficiaryType' },
    fullName :String,
    documents :Array,
    accountData :Object,
    usersId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' },    
    entityId :{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
    isDefault: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, 
    updatedBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  },
  {
    timestamps: true,
    collection: 'beneficiaries',
  },
);
