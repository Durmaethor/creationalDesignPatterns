var Task = function(name){
    this.name = name;
    this.completed = false;

    this.completed = function(){
        console.log('Completing Task: ' + task.name);
        this.completed = true;
    }

    this.save = function() {
        console.log('Saving Task: ' + this.name);
    }
}