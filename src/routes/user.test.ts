import request from "supertest";
import mongoose, { Mongoose } from "mongoose";
import app from "../app";
import { DB_TEST } from "../config/database.config";
beforeAll(async () => {
  console.log(DB_TEST);
  await mongoose.connect(DB_TEST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

describe("Testing user routes", () => {
  // test("User fetched successfully", async (done) => {
  //   const response = await request(app).get("/users").send();
  //   const { body, status } = response;
  //   expect(status).toBe(200);
  //   expect(body.message).toBe("All users found");
  //   expect(body.data).toBeTruthy();
  //   done();
  // });

  test("New User created ", async (done) => {
    console.log("This test has executed ================");
    const response = await request(app)
      .post("/users")
      .send({ name: "Test Name" });
    const { body, status } = response;
    expect(status).toBe(201);
    expect(body.message).toBe("User created");
    expect(body.data).toBeTruthy();
    expect(body.data.user.name).toBe("Test Name");
    done();
  });
});
