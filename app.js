const express = require("express");
const app = express();

// Default route
app.get("/", (req, res) => {
  res.send("Hello Boss! CI/CD Pipeline is working 🚀");
});

// Health check route (useful for DevOps)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
