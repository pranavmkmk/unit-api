import { Document } from 'mongoose';
export interface IAuth extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly mobileNumber: string;
  readonly password: string;
  readonly email: string;
  readonly roles: [string];
}
