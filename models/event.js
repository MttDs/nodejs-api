module.exports = function(server){
    var EventSchema = server.mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
        },
        place :{
            type : String,
            required : true
        },
        maxParticipants : {
            type : Number,
            required : true,
            min : 10
        },
        category: {
          type: server.mongoose.Schema.Types.ObjectId,
          ref: 'Category',
          required: true
        }
    });

    EventSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Event', EventSchema);
}
