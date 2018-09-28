/*
0 -> Domingo
1 -> Lunes
2 -> Martes
3 -> Miércoles
4 -> Jueves
5 -> Viernes
6 -> Sábado
*/
var calendario = require('node-schedule');

calendario.scheduleJob(
  {hour:12, minute: 40, dayOfWeek:4}, function() {
    console.log(new Date(), 'Se ejecuto la tarea');
  }
);
