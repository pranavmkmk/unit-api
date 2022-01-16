import { ObjectId } from "mongoose";

export class ServiceProvider {

    readonly name: string;
    readonly descriptions: string;
    readonly integrations: Object;
    readonly documents: Array<any>;
    readonly isActive: boolean;
    readonly isDeleted: boolean;
    readonly createdBy: ObjectId;
    readonly updatedBy: ObjectId;

}