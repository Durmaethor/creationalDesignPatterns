
var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('Completing Task: ' + this.name);
        this.completed = true;
};

Task.prototype.save = function() {
    console.log('Saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
   Task.call(this, name);
   this.priority = priority; 
};

UrgentTask.prototype = Object.create(Task.prototype); // Creates a new object out of the Task object

var ut = new UrgentTask('This is urgent', 1);
ut.complete();
console.log(ut);