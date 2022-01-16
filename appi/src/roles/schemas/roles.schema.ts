
import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema(
  {
    name: String,
    code: String,
    permissions:Array,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'roles',
  },
);
