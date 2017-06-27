
var repoFactory = function() {

    this.getRepo = function(repoType) {

        if(repoType === 'task') {
            if(this.taskRepo) {
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
                // config code --
                return this.taskRepo;
            }
        }

        if(repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }

        if(repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }

    }

};





}