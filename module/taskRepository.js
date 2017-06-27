
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

        return {  // revealing module pattern layout
            get: get,
            save: save
        }
    

}

module.exports = repo();