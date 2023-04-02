import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userShema = new mongoose.Schema(
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
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userShema.methods.matchPassword =async function (enteredPassword){
 return  await bcrypt.compare(enteredPassword , this.password);
}


userShema.pre('save' , async function(next) {

if(!this.isModified('password')) {
next()
}


const salt =  await bcrypt.genSalt(10)
this.password = await  bcrypt.hash(this.password , salt)

}  )


const User = mongoose.model("User", userShema);

export default User;
