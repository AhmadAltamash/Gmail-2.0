import mongoose from "mongoose";

const dbconfig = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

export default dbconfig;