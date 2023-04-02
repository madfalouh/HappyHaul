import mongoose from 'mongoose'



const connectDB = async () => {

try {
  await mongoose.connect("mongodb://localhost:27017" , {family:4});
} catch (error) {
  throw error;
}

}

export default connectDB