const fs = require("fs");

const filePath = "./data/activity.json";

const messages = [
  "Refactored internal metadata",
  "Updated activity logs",
  "Improved configuration",
  "Optimized cache structure",
  "Performed maintenance update",
  "Synchronized repository state",
  "Updated generated values",
];

const randomMessage =
  messages[Math.floor(Math.random() * messages.length)];

const data = {
  timestamp: new Date().toISOString(),
  random: Math.floor(Math.random() * 1000000),
  message: randomMessage,
};

let existing = JSON.parse(fs.readFileSync(filePath, "utf8"));

existing.updates.push(data);

fs.writeFileSync(
  filePath,
  JSON.stringify(existing, null, 2)
);

console.log("Activity updated.");

 
