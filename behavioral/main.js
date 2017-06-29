
var Task = require('./task');

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

function ObserverList() {
    this.observerList = [];
};

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};

var task1 = new Task({name: 'Create a demo for constructors', user: 'Ryan'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task1.save();