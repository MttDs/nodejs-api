module.exports = function(server){
    var UserSchema = server.mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            select: false
        }
    });

    UserSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('User', UserSchema);
}
