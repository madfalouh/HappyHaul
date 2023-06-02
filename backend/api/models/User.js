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

userShema.pre('findOneAndUpdate', async function (next) {
  // Check if the password field is being updated
  if (!this._update.$set || !this._update.$set.password) {
    next();
    return;
  }

  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this._update.$set.password, salt);
    // Set the hashed password as the updated value
    this._update.$set.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});



const User = mongoose.model("User", userShema);

export default User;
