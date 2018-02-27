function asyncMethod(message, cb){
    return new Promise(function(fullfill, reject){
        setTimeout(function() {
            console.log(message);
            fullfill();
        },500 )
    });
}
function findUser(){
    return asyncMethod('Buscar Usuario')
}
function validateUser(){
    return asyncMethod('Validate User')
}
function doStuff() {
    return asyncMethod('do stuff')
}
asyncMethod('Open db Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function() {} )