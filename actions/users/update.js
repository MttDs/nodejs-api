var sha1 = require('sha1');

module.exports = function(server){
    return function(req, res, next){
        var User = server.models.User

        if (req.body.password)
            req.body.password = sha1(req.body.password)

        User.findByIdAndUpdate(req.params.id, req.body, function(err, data){
            if (err)
                return res.status(500).send(err)

            res.send(data)
        });
    }
}
