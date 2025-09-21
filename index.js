const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola CI/CD 🚀 desde Codespaces");
});

// Solo levantar el servidor si se ejecuta con node directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app; // 👈 exportamos la app para Jest
