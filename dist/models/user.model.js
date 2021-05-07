"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
});
const User = mongoose_1.model("User", userSchema);
exports.default = User;
