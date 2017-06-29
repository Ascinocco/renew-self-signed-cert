let schedule = require('node-schedule');
let exec = require('child_process').exec;

let rule = new schedule.RecurrenceRule();
rule.year = 1; // every year

let command = 'sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt';

let renewSSLJob = schedule.scheduleJob(rule, function () {
    console.log('Renewing SSL cert...');
    exec(command);
    console.log('SSL cert renewed...');
});