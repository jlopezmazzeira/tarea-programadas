var calendario = require('node-schedule');
var rule = new calendario.RecurrenceRule();

//rule.second = new calendario.Range(0, 59, 2);
rule.minute = new calendario.Range(0, 59, 1);

calendario.scheduleJob(
  rule, function() {
    console.log(new Date(), 'Se ejecuto la tarea');
  }
);
