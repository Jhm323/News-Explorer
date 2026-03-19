module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || "dev-secret-key",
  DB_ADDRESS:
    process.env.DB_ADDRESS || "mongodb://127.0.0.1:27017/news-explorer",
};
