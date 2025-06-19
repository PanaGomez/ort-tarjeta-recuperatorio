import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

beforeAll(async () => await mongoose.connect(process.env.MONGO_URI));
afterAll(async () => await mongoose.disconnect());

describe("POST /api/cards", () => {
  test("crear tarjeta de crédito", async () => {
    const res = await request(app).post("/api/cards").send({
      cardNumber: "1111222233334444",
      cardHolder: "Maria Pirulo",
      expirationDate: "01/30",
      cvv: "789",
      email: "Pirulin@test.com"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.email).toBe("Pirulin@test.com");
  });
});

describe("POST /api/cards", () => {
  test("no deberia permitir crear dos tarjetas con el mismo mail!", async () => {
    const data = {
      cardNumber: "5555666677778888",
      cardHolder: "Mandrolfio Test",
      expirationDate: "05/28",
      cvv: "999",
      email: "carlos@test.com"
    };

    // Primer intento (debería funcionar)
    const res1 = await request(app).post("/api/cards").send(data);
    expect(res1.statusCode).toBe(201);

    // Segundo intento (mismo email, tiene que salir mal)
    const res2 = await request(app).post("/api/cards").send({
      ...data,
      cardNumber: "9999000011112222", // distinto número pero mismo email
    });
    expect(res2.statusCode).toBe(400);
    expect(res2.body.error).toBe("Ya existe una tarjeta para ese email");
  });
});
