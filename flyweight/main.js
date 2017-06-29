
var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

// FIX HEAVY MEMORY USAGE BY ADDING A FLYWEIGHT FACTORY
var FlyweightFactory = function() {
    
    var flyweights = {}; // this is the "collection" object

    var get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = 
                new FlyWeight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };
}()

function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = 
            new Task(data);
        count++;
    };
    var get = function (name) {
        return tasks[name];
    };
    var getCount = function () {
        return count;
    };
    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['Ryan', 'Cassie', 'Ron', 'Debby'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed; // pull in initial memory usage

for (var i = 0; i < 10000; i++) { // create 10000 tasks
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    });
};

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000); // process the memory used after the tasks are created

console.log("tasks: " + tasks.getCount());