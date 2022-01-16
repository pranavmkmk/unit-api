import * as mongoose from 'mongoose';

export const ServiceProviderSchema = new mongoose.Schema({
    name: String,
    descriptions: String,
    integrations: Object,
    documents: Array,
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: Date.now },
})