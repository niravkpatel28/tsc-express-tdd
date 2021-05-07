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
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
const database_config_1 = require("../config/database.config");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(database_config_1.DB_TEST);
    yield mongoose_1.default.connect(database_config_1.DB_TEST, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}));
describe("Testing user routes", () => {
    // test("User fetched successfully", async (done) => {
    //   const response = await request(app).get("/users").send();
    //   const { body, status } = response;
    //   expect(status).toBe(200);
    //   expect(body.message).toBe("All users found");
    //   expect(body.data).toBeTruthy();
    //   done();
    // });
    test("New User created ", (done) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("This test has executed ================");
        const response = yield supertest_1.default(app_1.default)
            .post("/users")
            .send({ name: "Test Name" });
        const { body, status } = response;
        expect(status).toBe(201);
        expect(body.message).toBe("User created");
        expect(body.data).toBeTruthy();
        expect(body.data.user.name).toBe("Test Name");
        done();
    }));
});
