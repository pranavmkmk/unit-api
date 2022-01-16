import * as mongoose from 'mongoose';

export const BeneficiaryTypeSchema = new mongoose.Schema(
  {
    name :String,
    description :String,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, 
    updatedBy :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  },
  {
    timestamps: true,
    collection: 'beneficiary_types',
  },
);
