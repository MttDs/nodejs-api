module.exports = function(server){
    return function (req, res, next){
        var Event = server.models.Event;
        var User = server.models.User;

        Event.findOne({ '_id': req.params.id }, function(err, currentEvent){
            if (err)
                return res.status(500).send(err)
            if (!currentEvent)
                return res.status(404).send('event not found')

            User.findOne({ _id: req.auth.userId }, function(err, user){
                if (err)
                    return res.status(500).send(err)

                currentEvent.populate('participants');
                currentEvent.participants.push(user);

                currentEvent.participants.forEach(function(participant) {
                    if (participant.toString() == req.auth.userId.toString())
                        currentEvent.participants.pull(participant.toString())
                });

                currentEvent.save(function(err, data){
                    if (err)
                        return res.status(500).send(err)

                    res.send(currentEvent);
                });
            });
        });
    }
}
