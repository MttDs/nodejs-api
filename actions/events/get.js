module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.Event;

        Event.find({}, function(err, events){
            if (err)
                res.status(500).send(err)

            res.send(events)
        });
    };
};
