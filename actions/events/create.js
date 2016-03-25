function getCategory(server, newEvent, label, cb) {
    var Category = server.models.Category;

    Category.findOne({ label: label }, function(err, category){
        if (err)
            return false;

        if (category){
            newEvent.category = category._id;

            cb();
        }
        else{

            var category = new Category({ label: label });

            if (typeof category != "undefined") {
                category.save(function(err, newCategory){
                    if (!err)
                        newEvent.category = newCategory._id
                        cb();
                });
            }
            else {
                cb();
            }
        }
    });
}

module.exports = function(server){
    return function(req, res, next){
        var Event = server.models.Event;
        var thisEvent = new Event(req.body)

        getCategory(server, thisEvent, req.body.category_name, function() {
            thisEvent.save(function(err, data){
                if (err)
                    return res.status(500).send(err)

                res.send(data);
            });
        });
    };
};
