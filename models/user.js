module.exports = function(server){
    var UserSchema = server.mongoose.Schema({
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
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
