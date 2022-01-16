import * as mongoose from 'mongoose';

export const ServiceSchema = new mongoose.Schema({
    name: String,
    serviceSubCategoriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSubCategory' },
    serviceCategoriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCategory' },
    serviceProvidersId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider' },
    productsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    integrations: Array,
    isActive: Boolean,
    isDeleted: Boolean,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ,
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: Date.now },
})