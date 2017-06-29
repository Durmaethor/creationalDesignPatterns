
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
};

var mediator = (function(){
    var channels = {};

    var subscribe = function(channel, context, func) {
       if(!mediator.channels[channel]) {
           mediator.channels[channel] = []
       } 
       mediator.channels[channel].push({
           context: context, 
           func: func
       });
    };

    var publish = function(channel) {
        if(!this.channels[channel]) {
            return false
        }
        var args = Array.prototype.slice.call(arguments, 1);

        for(var i = 0; i < mediator.channels[channel].length; i++) {
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args)
        }
    }
    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };

}());

// create new task
var task1 = new Task({
    name: 'Create a demo for constructors', 
    user: 'Ryan'
});

// invoke instances of the 3 services
var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

// Add things to the mediator (create channels)
mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function() {
    mediator.publish('complete', this);
    task1.prototype.complete.call(this);
}

task1.complete();