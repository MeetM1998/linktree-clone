import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


import AuthRoute from "./routes/AuthRoutes.js";
import UserRoute from "./routes/UserRoutes.js";
import LinkRoute from "./routes/LinkRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;

const CONNECTION = process.env.MONGO_DB;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/api/auth', AuthRoute);
app.use('/api/user', UserRoute);
app.use('/api/link', LinkRoute);