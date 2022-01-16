import { ObjectId } from "mongoose";

export class ServiceCategory {

    readonly name: string;
    readonly descriptions: string;
    readonly createdBy: ObjectId;
    readonly updatedBy: ObjectId;

}