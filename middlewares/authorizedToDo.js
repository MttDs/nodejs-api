function checkIfAuthorizedToEditEvent(server){
    return function(req, res, next){
    server.models.Event.findOne({ '_id': req.params.id,"organizer":req.auth.userId}, function (err, thisEvent) {
        console.log("event id : "+req.params.id);
        console.log("user id : "+req.auth.userId);
        console.log(thisEvent);
        //console.log('%s', thisEvent.title);
        if (err)
          return res.status(500).send(err);

        if(!thisEvent)
          return res.status(500).send("you are not allowed to do this");
        next();
      });
    };
}

module.exports = function(server) {
  return {
    editEvent : checkIfAuthorizedToEditEvent(server)
  }
};
