function getFutureEvents(server){
    return function(req, res, next){

        var Event = server.models.Event;
        console.log("apres eventttttttttttttttt");
        Event.find({date:{"$gte": new Date()}
            }, function(err, events){
                if (err){
                    console.log("errorsssssssssssssss");
                    res.status(500).send(err);
                }

            res.send(events);
        });
    };
}

function getPastEvents(server){
    return function(req, res, next){

        var Event = server.models.Event;

        Event.find({date:
                    {
                        $lt: new Date()
                    }
            }, function(err, events){
                if (err)
                    res.status(500).send(err)

                res.send(events)
        });
    };
}

module.exports= function(server){
    return {
        futureEvents : getFutureEvents(server),
        pastEvents : getPastEvents(server)
    }
}
