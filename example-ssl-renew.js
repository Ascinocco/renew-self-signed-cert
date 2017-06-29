let schedule = require('node-schedule');
let exec = require('child_process').exec;

console.log('Creating rules...');

let rule = new schedule.RecurrenceRule();
rule.minute = 1; // every year

console.log('Defining commands...');
let command = 'sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt';

console.log('Setting jobs...');
let renewSSLJob = schedule.scheduleJob(rule, function () {
    console.log('Renewing SSL cert...');
    exec(command);
    console.log('SSL cert renewed...');
});