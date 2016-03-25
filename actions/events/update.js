module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.Event;

        console.log(req.body);
        Event.findByIdAndUpdate(req.params.id, req.body, function(err, event){
            if (err)
                return res.status(500).send(err);
            if(!event)
                return res.status(404).send("evenement n'a pas été trouvé !");
            res.send(event);
        });
    }
}
