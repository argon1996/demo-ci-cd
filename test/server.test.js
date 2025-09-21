const request = require("supertest");
const app = require("../index");

describe("Pruebas del servidor Express", () => {
  it("GET / debe responder con el mensaje correcto", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola CI/CD 🚀 desde Codespaces");
  });
});
