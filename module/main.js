
var Task = require('./task');
var repo = require('./taskRepository');


var task1 = new Task(repo.get(1));

var task2 = new Task({name:'Create a demo for modules'});
var task3 = new Task({name:'Create a demo for singletons'});
var task4 = new Task({name:'Create a demo for prototypes'});

task1.complete();
task2.save();
task3.save();
task4.save();