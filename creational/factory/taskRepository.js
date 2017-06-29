
var repo = function(){

    var db = {};

    var get = function(id){
            console.log('Getting Task ' + id);
            return {
                name: 'New task from db'
            }
        }
        
        var save = function(task) {
            console.log('Saving ' + task.name + ' to the db');
        }

        console.log('Newing up a task repo');
        return {  
            get: get,
            save: save
        }
    

}

module.exports = repo;