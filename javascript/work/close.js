   (function(){
   function total(){
        var _self = this;
        _self.fName;
        _self.substract;
        _self.product;
        _self.dividend;

         // defining a function and converting into an object
        function mathematics(a , b){
            var _mat = this;
            _mat.sum = a + b;
            _mat.difference = a - b;
            _mat.multiplication = a * b;
            _mat.division = a / b;

        }
        // invoking a function using the constructor
        var m1 = mathematics(-100,-0);
        _self.addition = m1.sum;
        _self.substract = m1.difference;
        _self.product = m1.multiplication;
        _self.dividend = m1.division;

        console.log(m1);
        //console.log(task); // gives undefined

    }
    // invoking a function using the constructor
    var task = total();
    console.log(task);
    //console.log(m1); //gives an error: m1 not defined
})();