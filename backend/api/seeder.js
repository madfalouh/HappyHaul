import mongoose from "mongoose";
import dotenv from 'dotenv'
import users from "./data/users.js";
import products from "./data/products.js";
import User from './models/User.js'
import Order from "./models/orderModel.js";
import Product from "./models/Product.js";


const importData = async () => {

try {
await  Order.deleteMany()

await Product.deleteMany()

await User.deleteMany( )

const createdUser =   await User.insertMany(users)

const adminUser = createdUser[0]._id


const sampleProducts = products.map(prod =>{

return {...prod , user :adminUser}

})


await Product.insertMany(sampleProducts)
 
process.exit()

} catch(err){
process.exit(1)

}


}


const deletetData = async () => {

try {
await  Order.deleteMany()

await Product.deleteMany()

await User.deleteMany( )


process.exit()

} catch(err){

console.log(err);
process.exit(1)

}
}


if(process.arg[2] ==='d'  ) {

deletetData()

} else {

importData()

}