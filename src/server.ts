import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

server.set("view engine", "mustache"); //configure mustache
server.set("views", path.join(__dirname, "views")); //create views in rootDir src
server.engine("mustache", mustache()); //run mustache

server.use(express.static(path.join(__dirname, "../public"))); //create folder "public"

server.use(mainRoutes); //rotes
server.use((req, res) => {
    res.send("Page not found!");
});

server.listen(process.env.PORT);
