import * as mongoose from 'mongoose';

export const ServiceProfileSchema = new mongoose.Schema(
  {
    name: String,
    services:Array,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'serviceprofiles',
  },
);