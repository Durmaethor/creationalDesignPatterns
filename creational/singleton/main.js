
var taskHandler = require('./taskHandler');
var myrepo = require('./repo');


myrepo.save('fromMain')
myrepo.save('fromMain')
myrepo.save('fromMain')
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

// As a SINGLETON this will now log the following:

// Newing up the task repo
// Saving fromMain Called 1 times
// Saving fromMain Called 2 times
// Saving fromMain Called 3 times
// Saving Hi from taskHandler Called 4 times
// Saving Hi from taskHandler Called 5 times
// Saving Hi from taskHandler Called 6 times
// Saving Hi from taskHandler Called 7 times

// As you can see, with singleton it only runs the functions once, and does not duplicate. Rather, it addes them up. (count++)