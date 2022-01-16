import { ObjectId } from "mongoose";

export class IProducts {

    readonly name: string;
    readonly code: string;
    readonly documents: Array<any>;
    readonly serviceSubCategoriesId: ObjectId;
    readonly isActive: boolean;
    readonly isDeleted: boolean;

}
