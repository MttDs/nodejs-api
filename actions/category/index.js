module.exports = function(server){
    return {
        get: require('./get')(server)
    }
}
