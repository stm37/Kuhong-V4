let handler = async m => m.reply(`
╭─「 DONATION 」
│• SAWERIA :
│https://saweria.co/donate/junaediindra
│• OVO [+62895605030379]
│• TRI [+62895605030379]
│• DANA [+62895605030379]
│• GOPAY [+62895605030379]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
