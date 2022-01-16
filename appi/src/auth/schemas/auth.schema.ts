import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const AuthSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    mobileNumber: String,
    password: {
      type: String,
      select: false,
    },
    email: String,
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

AuthSchema.pre('save', async function(next) {
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
