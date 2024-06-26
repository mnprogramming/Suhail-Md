const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94742734789";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://www.mediafire.com/view/8jl9aqidsdpt1ps/WhatsApp_Image_2024-06-03_at_08.57.03_c858638e.jpg/file" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_54_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGdTZMbjF1WVQ0RUluVWZSczVzZWJnZ3NaaGpyTnF3SVdPMzg3UjgwcW9RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQyNzM0Nzg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjRENzMzNkYxNkU4QjFGNjY5QzlEMDQ1OENEOTY5M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1NjY4NzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MjczNDc4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMERFNzU4RDM4Qzk2ODhDRjM5MjFEMkQ0RDE1QzhGMjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTY2ODc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInN3MTRNa2d3VDNlR2VQMmRueTR0UWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQ4ZDhmNGEtNzFlYS00NTQ0LWJmMDMtZGQyYzdkZjRmMzExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTM0LFxuICAgICAgMTAsXG4gICAgICA5NixcbiAgICAgIDEyMSxcbiAgICAgIDExMyxcbiAgICAgIDE2MixcbiAgICAgIDI0OCxcbiAgICAgIDE1NyxcbiAgICAgIDEyMyxcbiAgICAgIDE3OSxcbiAgICAgIDExOSxcbiAgICAgIDMsXG4gICAgICAxMjUsXG4gICAgICA2OCxcbiAgICAgIDI1NSxcbiAgICAgIDEyNyxcbiAgICAgIDQyLFxuICAgICAgMjksXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTcwLFxuICAgICAgMTgzLFxuICAgICAgMTUyLFxuICAgICAgNTAsXG4gICAgICA2MCxcbiAgICAgIDQ0LFxuICAgICAgMTM3LFxuICAgICAgMjI5LFxuICAgICAgMTAxLFxuICAgICAgOSxcbiAgICAgIDczLFxuICAgICAgMjI3LFxuICAgICAgMTcxLFxuICAgICAgMjIxLFxuICAgICAgMjMxLFxuICAgICAgNTIsXG4gICAgICAyNTUsXG4gICAgICAzNixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BMNXNac0RFSlQ3LzdJR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZG5JQ3pTMit2Tm1sYW5lQW5HQS96bTFoRnpLUGNTS1pEZHJnRDBFb25rbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPZlk3UW1pRzc2ZDQ0S2ROOUJiaXRxc0lJK2grNGNTZnltK2lTM0tCVUpMR3RhbENhZDlqUjE0emM2ak5TRVA4cHB5TlhFV2t5TlkvOENNVUEvT01CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzaG1LYThXT3Vuek9sbEo3d09BNDBCNmI1b0xrQWJQcUJpS0t4ZWRvNUVta2wrN3hqS1ZpUWdnM1NNK3ZaaUp2RjFKL2JYdjdXVVhVd3pOMHd0ZDFEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQyNzM0Nzg5OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibWV0aHVrYW5cIixcbiAgICBcImxpZFwiOiBcIjE4OTA1MTg3NzUxOTM5Njo0MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQyNzM0Nzg5OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzU2Njg3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUvTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRV9fTS5qc29uIjogIntcImtleURhdGFcIjpcIjFrUnNuZ3hKdHY5NFJSQVRqVFJlMlB4M2FFa3dCYVNGUU9mWlhGeUVMUWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODYyNzQ3ODkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFX19OLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQW9tM2todGRpUlVBUEJ0QnV0NE1kVnN4Yy80Sm03czExUUh2b3F5T2R2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjI3NDc4OTAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFX19PLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjdDTzdqaWFSK1h4MXpNV2NMZjV6dzlIL3g1U1hvS1dScjJJY1NkVnBIZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjI3NDc4OTAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRV9fUC5qc29uIjogIntcImtleURhdGFcIjpcImR1YWpLZllxYkdzVDM5Q0YvRFB1Ri9OUDMyL0ljMHJkWW1nN2RRV0FRWjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODYyNzQ3ODkwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVfX1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPZkVEYkZWTjVLTzNaeVlsNllDaUM0eTZhcnZ0cklIVmEyajF2MGhIdjYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2Mjc0Nzg5MCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFX19SLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmpyY2xUN0VkLzVTRjk5czFXTWg5cHhIM0VvTEl1Y296bmttblhYajgrcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjI3NDc4OTAsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVfX1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3TWk2NXlRZzM2OUtZYm9PR3RlVkFTN2hEUXRleVoyNnNETXhtNGRyQ1FzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2Mjc0Nzg5MCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNyw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFX19ULmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEJNWVNUUzFiUVQ1dWNOTDBGempUa2VLcUdXSEppV1QyUTNVUDRGVmVqaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjI3NDc4OTAsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDgsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRV9fVS5qc29uIjogIntcImtleURhdGFcIjpcIjBtZ1BUaE0wTlg4T0FUYXpZWHF4UTA3dDBSdEFscHhpa1h3ZXA0T3dCbDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODYyNzQ3ODkwLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsOCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc1NjU3NjMwMThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "black god",
  ownername:process.env.OWNER_NAME|| "methukan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
