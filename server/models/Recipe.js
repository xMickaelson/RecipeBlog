const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This is a required Field",
  },
  description: {
    type: String,
    required: "This is a required Field",
  },
  email: {
    type: String,
    required: "This is a required Field",
  },
  ingredients: {
    type: Array,
    required: "This is a required Field",
  },
  category: {
    type: String,
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: "This is a required Field",
  },
  image: {
    type: String,
    required: "This is a required Field",
  },
});

recipeSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Recipe", recipeSchema);
