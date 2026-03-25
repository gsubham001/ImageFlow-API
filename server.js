require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

const PORT = process.env.PORT || 3000;
const RETRY_DELAY_MS = 5000;

async function connectWithRetry() {
  try {
    await connectDB();
  } catch (err) {
    console.error("Failed to connect to database:", err.message);
    if (err.message.includes("querySrv")) {
      console.error(
        "MongoDB SRV lookup failed. Check DNS/network access or set MONGO_DNS_SERVERS in .env (example: 8.8.8.8,1.1.1.1).",
      );
    }

    console.log(`Retrying MongoDB connection in ${RETRY_DELAY_MS / 1000}s...`);
    setTimeout(connectWithRetry, RETRY_DELAY_MS);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectWithRetry();
});
