
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); 

export const conn = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        return connection; 
    } catch(e) {
        console.log('DB Connection Error', e.message)
    }
} 

