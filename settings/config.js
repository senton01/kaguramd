const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

// Other
global.owner = ['6281515547358','6281515547358']
global.premium = ['6281515547358']
global.botname = 'π½πΌπππ π½πππ'
global.ownername = 'πππππ'
global.packname = 'π½πΌπππ π½πππ'
global.author = 'πππππ'
global.sessionName = 'session'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
success: 'β Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 50
}
global.thumb = fs.readFileSync('./media/senton.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
