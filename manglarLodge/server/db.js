import {mongoose} from "mongoose"

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://genesis:zen@cluster0.msjhg.mongodb.net/HotelManglares');
        console.log('>>> DB esta conectada')
    } 
    catch(error){
        console.log(error)
    };
};