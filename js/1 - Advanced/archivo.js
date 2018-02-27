var fs = require('fs')

/*

fs.readFile('/.lorem.txt', function (err, content) {
    fs.writeFile('./cantidad.txt', content.length, function(err) {
        console.log(content.length);
    })
})

*/

function readFile( name ) {
    return new Promise(function (resolve, reject) {
        fs.readFile(name, function(err, content) {
            if (err) {
                return reject(err)
            }
            resolve(content)
        })
   })
} 

function writeFile(name, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(name, content, function (err){
            if (err) {
                return reject(err)
            }
            resolve()
        })
    })
}

readFile('./lorem.txt')
.then(content => writeFile('./cantidad.txt', content.length))
.catch(err => console.log('Hubo un error.'+err.message))