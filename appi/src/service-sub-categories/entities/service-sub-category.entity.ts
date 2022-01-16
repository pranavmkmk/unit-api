import { ObjectId } from "mongoose";

export class ServiceSubCategory {

    readonly name: string;
    readonly descriptions: string;
    readonly serviceCategoryId: ObjectId;
    readonly createdBy: ObjectId;
    readonly updatedBy: ObjectId;

}