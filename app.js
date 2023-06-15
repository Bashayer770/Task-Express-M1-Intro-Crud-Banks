const express = require("express");
const PORT = 8000;
const app = express();
const accRoutes = require("./apis/accounts.routes/accounts.routes");

app.use(express.json());

app.use("/api", accRoutes);

app.listen(PORT, () => {
  console.log(`Server is up running ${PORT}`);
});
