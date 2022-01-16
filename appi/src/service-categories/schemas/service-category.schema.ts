import * as mongoose from 'mongoose';

export const ServiceCategorySchema = new mongoose.Schema({
    name: String,
    descriptions: String,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},
{
    timestamps: true,
    collection: 'serviceCategories',
})