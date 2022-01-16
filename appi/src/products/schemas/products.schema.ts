
import * as mongoose from 'mongoose';
export const productsSchema = new mongoose.Schema(
  {
    name: String,
    code: String,
    documents: Array,
    hsnCode: String,
    serviceSubCategoriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSubCategory' },
    serviceCategoriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCategory' },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'products',
  },
);