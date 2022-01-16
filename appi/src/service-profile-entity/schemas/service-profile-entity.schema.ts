import * as mongoose from 'mongoose';

export const ServiceProfileEntitySchema = new mongoose.Schema(
  {
    serviceProfileID:Array,
    entityId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'serviceprofilesentity',
  },
);