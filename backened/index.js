import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
// npm i dotenv - isko install kia h env file ko chlane ke liye uske baad import kra
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

//middleware
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB")
} catch (error) {
    console.log("Error:",error);
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`)
})