// IIFE construct: self-invoking function
(function(){
     // defining a function and converting into an object/ class like function
    function total(){
        var _self = this; //alias for 'this' keyword
        _self.addition = null;
        _self.substract = null;
        _self.product = null;
        _self.dividend = null;

         // defining a function and converting into an object / class like function
        function mathematics(a , b){
            var _mat = this;

            _mat.sum = function(){
                return (a + b);
            };

            _mat.difference = function(){
                return (a - b);
            };

            _mat.multiplication = function(){
                return (a * b);
            };

            _mat.division = function(){
                return (a / b);
            };


        }

        // invoking a function using the constructor 'new' keyword
        var m1 = new mathematics(-100,-10); // class inheritance
        _self.addition = m1.sum();
        _self.substract = m1.difference();
        _self.product = m1.multiplication();
        _self.dividend = m1.division();

        console.log(m1);
        //console.log(task); // gives undefined

    }
    // invoking a function using the constructor 'new' keyword
    var task = new total(); // class like function inheritance

    console.log(task);
    //console.log(m1); //gives an error: m1 not defined



})();