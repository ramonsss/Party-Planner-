const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://ramon:tuavodecueca12%40@cluster0.60prw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
