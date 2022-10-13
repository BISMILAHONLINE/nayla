let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Smartfren:* [088980870067]
┣➥ *Axis:* [083112831554]
┣➥ *Dana:* [083866366437]
┣➥ *Saweria:* [https://saweria.co/swift]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6288980870067*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
