import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// 要在controller里面用
userSchema.methods.matchPassword = async function (enteredPassword) {
  // this.password就是当前这个用户的密码 this.可以点出来这个用户的信息
  return await bcrypt.compare(enteredPassword, this.password);
};

// pre是before save
userSchema.pre('save', async function (next) {
  // save是save一行数据。当密码没有被修改时，这个方法不运行！否则更新数据时，密码也加密一次。
  if (!this.isModified('password')) {
    next();
  }

  // genSalt返回一个promise, 所以要用await
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
