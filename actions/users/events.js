module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.User;
        var query = Event.find({});

        query.where('organizer', req.params.id.toString());
        query.exec(
            function(err, events){
                if (err)
                    return res.status(500).send(err)

                res.send(events);
            }
        );
    }
}
