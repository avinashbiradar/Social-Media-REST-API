import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/user",router);
app.use("/api/blog",blogRouter)

mongoose
  .connect(
    "mongodb+srv://admin:iwcZ1dG4KdG1FHwe@cluster0.ilarpbn.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .then(console.log("connected to database on port number 5000"))
  .catch((err) => console.log(err));
