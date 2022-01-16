import { ObjectId } from "mongoose";

export class Service {

    readonly name: string;
    readonly integartions: Array<any>;
    readonly serviceSubCategoriesId: ObjectId;
    readonly serviceProvidersId: ObjectId;
    readonly productsId: ObjectId;
    readonly isActive :{ type: Boolean, default: true };
    readonly isDeleted :{ type: Boolean, default: false };
    readonly createdBy: ObjectId;
    readonly updatedBy: ObjectId;
}
