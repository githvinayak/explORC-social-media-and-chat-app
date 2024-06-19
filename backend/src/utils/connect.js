
import mongoose from "mongoose";
export const connectDb = (mongoURI) => {
    mongoose
        .connect(`${mongoURI}`, {
        dbName: "social-app",
    })
        .then((c) => console.log(`mongodb is connected successfully to ${c.connection.host}`))
        .catch((err) => console.log(err));
};