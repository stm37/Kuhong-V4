let handler = function (m) {
  // this.sendContact(m.chat, '62895605030379', 'junaedi', m)
  conn.sendContact(m.chat, '62895605030379', 'junaedi', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
