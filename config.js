//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923263429027@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/fortermu/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw";
global.website =
  process.env.GURL || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.imgur.com/CSfWmk8.jpeg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923263429027";
global.owner = process.env.OWNER_NUMBER || "923263429027";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dkSG8rVFBnTWNvVUs2ZGo3UG9WbW11VUdaTkFnNzNvU2psendiL28xMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2I2ZzJYMm9kaWJzT3ozTjZZWFpzc3NKQUhjdFdkTDBPRXI3TmJzWW5BND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSiszYjlWbnpwOUxrY1lkeGhEeXhrcWRNOWd2RXRIYkhDd204L243UzNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3NWo1Vm5UdmtsU0xrbWhnWWx0dkFodnIwS1l3bUVEemZ2MGtZVTFVUTI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHeDFXVnFlRjN5SW9vYVlSTTM4WWpJMXZTR281eFczMXcraHJwdUwybDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMxK1I0Nzl6d1ovMnBxcFNXbzVKUDJ4ZERsWWVTcEx2NHBkR1RERUhYd2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0h4YUc3bk5JQXhFQmZReE81OGNUT1lVRlZyQzlOcXhva2VEc1Fqa0JIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01LMzZCVndiQlhOT1VzZDRtVGRaRlJkMGxORkJhWXVSUkczMGFteENIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCU2dIQ2c0cmdhblBudmFObCsza04xSkJqQU05MDBHdnlQWEM4NWcvVW5HTFdhbnE1eTFsKzVPUzQ1WDJzL1JaMlIvNXdTMjlieVhOTW1BWk9JWGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJTY29ZQ0MwSXBrRGljUDhOVkxwdVJPZUdyMHBjRURXUVNpUmtJQ3YvUm04PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCS0NGUzNUeFRsYUdBanhVdmdEMnN3IiwicGhvbmVJZCI6ImM4NTVmNDgyLTg1YTktNGEzNy1hODU4LWQwNzVmNWIwZjEzMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bHlZME9qN0VqRDQ1cnByWGMzVXJOWnhvSlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFBVDRaSUNpQVg3bm00dzB1N04xTVZnbXVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IksxNkdTMVM1IiwibWUiOnsiaWQiOiI5MjMyNjM0MjkwMjc6NjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWFsaWsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTSTJvRUhFUHI4eUxjR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxOakFCWDJwcWdmS0VGR2NQY0hoaWhKczdLNUFTb0t5OEpWQnVsM1BoQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJERGJ0dEdUV0wrSnllcURuS1I0R1hXZEVud01pdFRxSFpzQnEwbTg2aTdNNWxQWjd1UFFhRlF0eWtGUGo4TFJjT2Njajl2bVJRS0FvK0prRjBTY0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEZDg0N2hEMGFqZXZtSHVCNDRpSGozdXBTdG1pOU45SlNoTlVmSU52aFFKWEQ5VnJVMmZVcXV5VExOWHEwc3lXMHBOdDlVTDZlQ203M2tmK2FVU1JpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI2MzQyOTAyNzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTell3QVY5cWFvSHloQlJuRDNCNFlvU2JPeXVRRXFDc3ZDVlFicGR6NFFNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MTUxNzUxfQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘:/n> MALIK MEHTAB",
  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "MALIK MEHTAB",
  botname: process.env.BOT_NAME || "MALIK-MD",
  ownername: process.env.OWNER_NAME || "MALIK",
  errorChat: process.env.ERROR_CHAT || "923263429027",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
