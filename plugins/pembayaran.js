let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *PULSA*: 083112831554
║│➸ *DANA*: 083866366437
║│➸ *PULSA*: 088980870067
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY ZEVANO*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥PEMBAYARAN🔥*', 'status@broadcast')
}
handler.help = ['pembayaran']
handler.tags = ['info']
handler.command = /^pembayaran$/i

module.exports = handler
 
