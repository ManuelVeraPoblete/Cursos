'use strict';
var obj = {
    val: ' hola a todos',
    printVal: function(){
        console.log(this);
        console.log(this.val);
    }
};
var obj2 = {
    val: 'Whats up'
};

var print = obj.printVal.bind(obj2);
print();
