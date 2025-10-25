import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./Routes/ProductRoutes.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use("/", productRoutes);

server.listen(process.env.PORT, (req, res) => {
  console.log(`Server running on ${process.env.PORT}`);
});
