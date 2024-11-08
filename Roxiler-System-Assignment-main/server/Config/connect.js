import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("--> Database connection successful <--".italic.blue);
    } catch (error) {
        console.log(`--> Error in connecting database: -->`.italic.red, error.message);
    }
};

export default connectDB;
