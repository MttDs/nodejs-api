module.exports = function(server){
    return function(req, res, next){
        var Category = server.models.Category;

        Category.find({}, function(err, categories) {
            if (err)
                return res.status(500).send(err);

            res.send(categories)
        });
    }
}
