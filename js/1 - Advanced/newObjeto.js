var obj = function(){
    var _this = this;
    console.log(this)

    _this.hello = 'hola';

    _this.greet = function() {
        console.log(this.hello);
    }

    this.delayGreeting = function() {
        setTimeout(_this.greet.bind(this),1000)
    }
}

var greeter = new obj();

greeter.delayGreeting();