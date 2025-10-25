import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./Routes/Product.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use("/", userRoutes);

server.listen(process.env.PORT, (req, res) => {
  console.log(`Server running on ${process.env.PORT}`);
});
