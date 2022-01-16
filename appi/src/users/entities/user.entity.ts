import { Document ,Schema} from 'mongoose';
export class IUsers extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly mobile: string;
    readonly password: string;
    readonly email: string;
    readonly roles: [string];
    readonly address : [object];
    readonly dob : Date;
    readonly emiratesId : string;
    readonly username : string;
    readonly createdBy :Schema.Types.ObjectId;
    readonly parentData : object;
    readonly onBehalfData: object;
  }