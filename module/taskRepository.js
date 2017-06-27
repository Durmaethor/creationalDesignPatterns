
var repo = function(){

    return {
        get: function(id){
            console.log('Getting Task ' + id);
            return {
                name: 'New task from db'
            }
        },
        save: function(task) {
            console.log('Saving ' + task.name + ' to the db');
        }
    }


}

module.exports = repo();