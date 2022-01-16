import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const Permissions = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' },
});

export const UsersSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    middleName: String,
    username: String,
    mobileNumber: String,
    address:Object,
    dob:Date,
    entityId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
    emiratesId:String,
    // permissions:Array,
    permissions:[Permissions],
    password: {
      type: String,
      select: false,
    },
    email: String,
    parentData:Object,
    onBehalfData:Object,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    onSms: { type: Boolean, default: true },
    onEmail: { type: Boolean, default: true },
    onPush: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

UsersSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
