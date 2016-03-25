function checkIfAuthorizedToEditEvent(server){
    return function(req, res, next){
    server.models.Event.findOne({ '_id': req.params.id,"organizer":req.auth.userId}, function (err, thisEvent) {
        if (err)
          return res.status(500).send(err);

        if(!thisEvent)
          return res.status(500).send("you are not allowed to do this");
        next();
      });
    };
}

function checkIfCanParticipate(server,userId){
  return function(req, res, next){
    server.models.Event.findOne({ '_id': req.params.id}, function (err, thisEvent) {
        if (err)
          return res.status(500).send(err);

        if(!thisEvent)
          return res.status(404).send("event doesnt exist");
        //get all participants
        thisEvent.populate('participants');

        var found=false;
        thisEvent.participants.forEach(function(participant){
          if(userId===participant._id)
            found=true;
        });

        if(found)
          return res.status(500).send("you are already in the list !");


        //if max participants then cant
        if(thisEvent.participants.length==thisEvent.maxParticipants)
          return res.status(500).send("no more place ! this event is complete !");

        res.event=thisEvent;

        next();
      });
    };
}

module.exports = function(server) {
  return {
    editEvent : checkIfAuthorizedToEditEvent(server),
    participateToEvent : checkIfCanParticipate(server)
  };
};
