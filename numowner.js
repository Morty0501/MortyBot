const ownerNumber = ["552172272943@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '552172272943' 
// mude para seu numero

const cr = '𝐁𝐑𝐈𝐙𝐀𝐒 𝐁𝐎𝐓\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const apiTobz = '17ckbnBkmgW7EyoGHVsc'
// pra pegar a key do Tobz va até o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo grupo proprietário! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo bot proprietário! ❌',
        admin: '❌ SILÊNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
    }
}

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+     'TEL; tipo = CELL; tipo = VOZ; waid = 552172272943: +55 21 7227-2943 \ n ' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
// ele corresponde

exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exportações . ownerNumber  =  ownerNumber
