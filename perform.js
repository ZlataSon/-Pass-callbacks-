function perform() {
    //TODO implement
}

perform(null, function() {
    var param = 1;
    console.log(param);
    return param;
})
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
        return param;
    });
