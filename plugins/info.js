let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• Swift Kawai
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃• ImageMagick
┃
┃> Thanks To :
┃• Nurutomo
┃• Zevano
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *AXIS:* [083112831554]
┣➥ *Dana:* [083866366437]
┣➥ *Gopay:* [0838666366437]
┣➥ *LinkAja:* [088980870067]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6288980870067*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NAYLABOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
