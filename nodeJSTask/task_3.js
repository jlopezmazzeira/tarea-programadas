var calendario = require('node-schedule');
var rule = new calendario.RecurrenceRule();
rule.hour = 12;
rule.minute = 44;
rule.dayOfWeek = [4,5,6];

calendario.scheduleJob(
  rule, function() {
    console.log(new Date(), 'Se ejecuto la tarea');
  }
);
