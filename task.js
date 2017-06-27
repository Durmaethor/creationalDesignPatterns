var Task = function(name){
    this.name = name;
    this.completed = false;

    this.completed = function(){
        console.log('Completing Task: ' + this.name);
        this.completed = true;
    }

    this.save = function() {
        console.log('Saving Task: ' + this.name);
    }
}

var task1 = new Task('Create a demo for constructors');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singletons');
var task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
