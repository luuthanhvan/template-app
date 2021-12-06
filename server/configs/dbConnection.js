const dotenv = require("dotenv");
const mg = require("mongoose");

const configPath = process.cwd().replace('/server', "")
dotenv.config({ path: `${configPath}/.env` });

async function connect() {
  try {
    await mg.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database sucessfully connected");
  } catch (err) {
    console.log("Database failure connected");
  }
}

module.exports = { connect };
