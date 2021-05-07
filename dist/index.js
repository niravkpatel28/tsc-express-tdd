"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const database_config_1 = require("./config/database.config");
// connect to database
// launch app
mongoose_1.default
    .connect(database_config_1.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then((connection) => {
    console.log("Connected to database");
    try {
        app_1.default.listen(3000, () => {
            console.log("App launched on port 3000");
        });
    }
    catch (err) {
        console.log("Error", err);
        throw err;
    }
})
    .catch((err) => {
    console.log("Error in connecting to database");
});
