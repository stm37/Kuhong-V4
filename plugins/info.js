let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 INFO BOT 」
│
│> Bot Recoded By :
│• RC047
│
│> Bot Dibuat Dengan :
│• JavaScript via NodeJS
│• FFmpeg
│
│> Thanks To :
│• Nurutomo
│• Drawl Nag
│
│> Donasi :
│• SAWERIA :
│https://saweria.co/donate/junaediindra
│• OVO [+62895605030379]
│• TRI [+62895605030379]
│• DANA [+62895605030379]
│• GOPAY [+62895605030379]
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
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
