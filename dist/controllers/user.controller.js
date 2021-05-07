"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const findAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield user_model_1.default.find();
    res.status(200).json({
        message: "All users found",
        data: [...allUsers],
    });
});
exports.findAllUsers = findAllUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { body } = req;
    let newUser = new user_model_1.default(body);
    newUser = yield newUser.save();
    res.status(201).json({
        message: "User created",
        data: {
            user: newUser,
        },
    });
});
exports.createUser = createUser;
