import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
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
    select: false,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    required: true,
  },
});
userSchema.pre('save',async function(){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  console.log(this.password)
})

userSchema.methods.createJWT = function(){
  return jwt.sign({userId:this._id},'jwtSecret',{expiresIn:'1h'})
}

const User = mongoose.model("User", userSchema);

export default User;
