
var Task = require('./task');

// Service notifications and updates
var notificationService = function() { // This is an OBSERVER 
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var loggingService = function() {  // This is an OBSERVER 
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var auditingService = function() { // This is an OBSERVER
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

// create new task
var task1 = new Task({
    name: 'Create a demo for constructors', 
    user: 'Ryan'
});

// invoke instances of the 3 services
var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();