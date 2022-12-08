import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../src/.env") });

import express, { Application } from "express";
import bodyParser from "body-parser";
import { config } from "./server/server.config";
import { timeout } from "./helper";
import routes from "./api/routes";
import sequelizeConnection from "./db/config/connection";

const app: Application = express();
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static("src/public"));
app.use(timeout);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

try {
  const server = app.listen(config.port, "localhost", async function () {
    await sequelizeConnection.sync();
    var host = (server?.address() as any)?.address;
    var port = (server?.address() as any)?.port;
    console.log(`Server running on ${host}:${port}`);
  });
} catch (error) {
  console.log("Error occurred:", error);
}
