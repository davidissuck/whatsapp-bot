// -- send message
exports.wait = `Por favor, espere un momento...`;
exports.bye = `Adiós...`;
exports.done = `Finalizado...`;
exports.next = (value) => {
  return 'Haga clic en Siguiente para más '+value+'';
};
exports.packon = 'El nombre del paquete ya está registrado en database-bot';
exports.packoff = 'El nombre del paquete de medios no aparece en database-bot';
exports.liston = 'Lista de medios almacenados en database-bot';
exports.getlist = 'Por favor use el comando #getimg/ #getvid/ #getvn/ #getstik para recuperar pack media\n*Ejemplo* : #getimg lexa';
exports.nolink = (value) => {
  return '¡Enlace no disponible! por favor ingrese el comando agregando un enlace ' + value;
};

// -- Saying time
exports.night = 'Buenas noches';
exports.evening = 'Buenas tardes';
exports.day = 'Buenas tardes';
exports.morning = 'Buenos días';

// -- message only
exports.admin = `¡Este comando solo puede ser ejecutado por el grupo de administración!`;
exports.group = `Este comando solo se puede ejecutar dentro del grupo`;
exports.premium = `Este comando solo puede ser utilizado por usuarios premium`;
exports.premdl = `No eres un usuario premium, descárgalo tú mismo usando el enlace\n*ENLACE*: `;
exports.oversize = 'El tamaño del archivo excede el tamaño especificado, descárguelo usted mismo a través del siguiente enlace\n*Enlace*: ';
exports.botadmin = `Este comando se puede usar cuando el bot se convierte en administrador`;
exports.owner = `Este comando solo puede ser utilizado por el propietario del bot`;
exports.isprem = `El usuario se ha convertido en un usuario premium antes`;
exports.noprem = `Solo los usuarios premium pueden usar esta función, chatee con el propietario para comprar funciones premium`;
exports.ban = 'El usuario ha sido baneado antes';
exports.noban = 'Este usuario no tiene un estado prohibido en la base de datos del bot';
exports.isadmin = 'Lo siento, los bots no pueden sacar al administrador';

// -- text
exports.notag = 'Etiquetar a un miembro del grupo';
exports.nonum = 'Repita esta advertencia agregando el número de destino o responda al chat';
exports.notext = 'Repita este comando agregando texto';
exports.reply = 'Destino del mensaje de respuesta...';
exports.replyStic = 'Etiqueta de mensaje de respuesta...';
exports.replyVid = 'Responder al video...';
exports.replyVn = 'Responder audio...';
exports.replyImg = 'Responder imagen...';
exports.noreply = 'El mensaje al que respondió no contenía una respuesta';
exports.nolink = (value) => {
  return 'Repita agregando un enlace ' + value;
};
exports.addwarn = `️️⚠️Aviso\nRecibes 1 advertencia`;
exports.delwarn = `⚠️Aviso\nTu advertencia ha disminuido en 1 advertencia`;
exports.cekwarn = (warn) => {
  return `El usuario tiene una advertencia total ${warn}`;
};
exports.nowarn = `El usuario no tiene ninguna advertencia`;
exports.Pbahasa = `Seleccione el idioma que desea utilizar

Idioma utilizable
- Indonesia (español)
- English
- Jawa
- Sunda
- Arab

Ejemplo: /bahasa English`;
exports.nobahasa = `Idioma no disponible.

Idioma utilizable
- Indonesia
- English
- Jawa
- Sunda
- Arab

Ejemplo: /bahasa English`;
exports.online = 'Comando recibido, bot _*ACTIVADO*_ en este grupo';
exports.offline = 'Comando recibido, bot _*DESACTIVADO*_ en este grupo';

// -- group
exports.onwa = 'El usuario ya está en el grupo';
exports.sendlink = 'Invitación enviada con éxito a ';
exports.open = 'Se modificó correctamente la configuración del grupo para permitir que todos los miembros envíen mensajes en este grupo.';
exports.close = 'Se modificó correctamente la configuración del grupo para permitir que solo los administradores envíen mensajes en este grupo';
exports.name = (value) => {
  return `Éxito en el cambio de tema a ${value}`;
};
exports.desk = (value) => {
  return `Se cambió correctamente la descripción del grupo a ${value}`;
};
exports.promote = (value) => {
  return `Promoción exitosa, ${value} como administrador`;
};
exports.demote = (value) => {
  return 'Éxito en el descenso, posición ' + value;
};

exports.kick = (value) => {
  return 'Orden recibida, emitida '+value;
};
exports.On = (value) => {
 return `Encendido exitosamente ${value} en este grupo`;
};
exports.Off = (value) => {
  return value + ' desactivado para este grupo';
};
exports.Thison = (value) => {
  return value + ' ha estado antes';
};
exports.Thisoff = (value) => {
return value+ ' no encendido antes';
};
exports.OnorOff = 'Repita agregando on/off';
exports.antilink = 'Se te detecta enviando otro enlace de grupo de whatsapp';
exports.setwel = (value) => {
  return `Repita agregando texto
*Ejemplo:*
!setwelcome Bienvenido @tag a @group
Nombre: @nama
Bio: @about 

No olvide presentarse + lea la descripción del grupo, hermano

*Ejemplos para cada función*` + value;
};

exports.setbye = (value) => {
  return `Repita agregando texto
*Ejemplo:*
!setbye Adiós @tag

*Ejemplos para cada función*` + value;
};

exports.setweldone = (value, fungsi) => {
  return `Bienvenida cambiada con éxito\n\n`
+ value + `\n\n*Ejemplos para cada función*` + fungsi;
};

exports.setbyedone = (value, fungsi) => {
  return `Despedida reemplazado con éxito\n\n`
+ value + `\n\n*Ejemplos para cada función*` + fungsi;
};

exports.default = (value) => {
  return value + ' Volver a la configuración inicial';
};

exports.main = (value) => {
  return 'Todavía hay ' + value + ' pasando!';
};
exports.nomain = (value) => {
  return 'No hay ninguno ' + value + ' pasando!';
};
exports.inmain = (value) => {
  return 'Has hecho ' + value
};
exports.hapus = (value) =>{
  return 'Eliminado con éxito ' + value + ' en este grupo';
};
// game
exports.onGame = 'Todavía hay preguntas sin respuesta en este chat.';
exports.soal = (text1, text2, text3) => {
  return `${text1}

*Tiempo de espera*
${text2}

*PUNTOS*
${text3}

_*Responde este mensaje para responder*_
La pista de respuesta aparece en los últimos 10 segundos.`;
};

exports.timeout = 'Tiempo de espera, la respuesta es ';
exports.salah = '*Incorrecto* !\nIntenta otra vez';
exports.hampir = '*Casi* !\nIntenta otra vez';
exports.benar = (value, value2) => {
  return `*BIEN HECHO!*\nLa respuesta es ${value}\nUsted obtiene ${value2}`;
};

// afk
exports.with = 'con razón ';
exports.onAfk = (value) => {
  return 'Ahora estás afk ' + value
};
exports.offAfk = 'Ya no estás AFK'
exports.inAfk = (value, time) => {
  return 'El usuario está en modo AFK ' + value + '\nSobre: ' + time
}
