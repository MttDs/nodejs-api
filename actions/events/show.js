module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.Event;

        Event.findById(req.params.id, function(err, thisEvent){
            if (err)
                return res.status(500).send(err);

            res.send(thisEvent);
        });
    }
}
