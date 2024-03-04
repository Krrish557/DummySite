import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

// Import other modules after configuring dotenv
import usernamePasses from "./users.js";

// Create express app
const app = express();

// Access environment variables
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO;
const options = {
  origin: allowedOrigins,
  methods: ["GET", "PUT", "POST", "DELETE"],
};
// Connection
mongoose
  .connect(`${mongoURI}`)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Schema
const itemSchema = new mongoose.Schema({
  key: String,
  name: String,
  img: String,
  price: Number,
  sizes: [String],
  desc: String,
  keywords: [String],
});

// Model
const Item = mongoose.model("Item", itemSchema);

app.use(cors(options));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
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
app.post("/insertitems", async (req, res) => {
  try {
    const maxItem = await Item.findOne({}, {}, { sort: { key: -1 } });
    let maxKey = -1;
    if (maxItem) {
      maxKey = parseInt(maxItem.key);
    }

    const newKey = (maxKey + 1).toString();

    const { name, img, price, sizes, desc, keywords } = req.body;

    const newItem = new Item({
      key: newKey,
      name,
      img,
      price,
      sizes,
      desc,
      keywords,
    });

    await newItem.save();
    res.status(201).json({ message: "Item added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/items/:key", async (req, res) => {
  const { key } = req.params;
  try {
    const deletedItem = await Item.findOneAndDelete({ key: key });

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    const itemsToUpdate = await Item.find({ key: { $gt: key } });

    await Promise.all(
      itemsToUpdate.map(async (item) => {
        item.key = (parseInt(item.key) - 1).toString();
        await item.save();
      })
    );

    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
