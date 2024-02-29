import express from "express";
import usernamePasses from "./users.js";
import cors from "cors";
const app = express();
const PORT = 6969;
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

const options = {
  origin: allowedOrigins,
  methods: "GET, PUT",
};

app.use(cors(options));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});
app.post("/validate", (req, res) => {
  const { username, password } = req.body;
  console.log("OK");
  try {
    const check =
      `${username}` in usernamePasses &&
      `${password}` === usernamePasses[`${username}`];
    if (check) {
      res.json("exists");
      res.status(200);
    } else {
      res.json("notexists");
      res.status(404);
    }
  } catch (error) {
    res.json("notexists");
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Listening on http://localhost:6969");
});
