exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `π€{ *MENU DONASI ${BotName}* }π
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI
βΊοΈπ


π*${tampilTanggal}* π€
β°*${tampilWaktu}* π€
(Waktu Server)

KALIAN BISA DONASI MENGGUNAKAN
   
π‘ *PULSA*: 081219790454
π‘ *OVO*: 08567771133
π‘ *DANA* : 08567771133


πΊ*IKLAN* *YOUTUBE *


β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
FOLLOW INSTAGRAM SAYA
${instagram}

πΎTELEGRAM : ${telegram}

`
}
