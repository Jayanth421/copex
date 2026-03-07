const mongoose = require("mongoose");

async function connectMongo() {
  const mongoUri = String(process.env.MONGO_URI || process.env.MONGODB_URI || "").trim();

  if (!mongoUri) {
    throw new Error("MONGO_URI is required and must point to your cloud MongoDB instance");
  }

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000
  });
}

module.exports = {
  connectMongo
};
