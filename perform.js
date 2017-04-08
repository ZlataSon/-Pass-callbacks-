function perform() {
    var param = arguments[1]();
    console.dir(arguments);
    console.log('***',param);

    return {
        then: function(val) {
            param = val(param);
            return this;
        }
    }
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
    })
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
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
