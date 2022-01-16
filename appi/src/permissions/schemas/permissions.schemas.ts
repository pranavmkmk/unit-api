import * as mongoose from 'mongoose';

export const PermissionsSchema = new mongoose.Schema(
  {
    name: String,
    code: String,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'permissions',
  },
);