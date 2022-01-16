import { ObjectId } from "mongoose";

export class Account {

    readonly accountNumber :string;
    readonly accountTypesId :ObjectId;
    readonly usersId :ObjectId;
    readonly entityId :ObjectId;
    readonly accountProvidersId :ObjectId;
    readonly currency :string;
}