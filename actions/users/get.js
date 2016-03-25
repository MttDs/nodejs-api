module.exports = function(server){
    return function(req, res, next){
        var User = server.models.User;

        User.find({}, function(err, users){
            if (err)
                res.status(500).send(err)

            res.send(users)
        });
    };
};
