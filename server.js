import express from "express";
import { dbConnect } from "./src/config/dbConnect.js";
import todoRoute from "./src/route/todoRoute.js";


const app = express();
const port = 8000;

app.use(express.json())
app.use('/', todoRoute);

dbConnect()

app.listen(port, () => {
    console.log(`Server is running ${port}`);
});