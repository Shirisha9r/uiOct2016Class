(function(){
    /*** this is a class like function in ECMAs script....by the way there is no class concept here!!!
        this class is an object that can be reused and here the function is converted into an object
        using the keyword 'this'*/
    function x(){
        this.firstName = 'Shirisha';
        this.lastName = 'Kuncha';
        this.rollNumber = 2;
    }

    /* function x() changed to object x as below
        x = {
            firstName: 'Shirisha',
            lastName: 'Kuncha',
            rollNumber: 2
        };
    */
    /* creating the new instance of x */
    var y = new x();
    y.firstName = 'Tanvhika';
    y.isPresent = function(){
        return false;
    };

    var z = new x();

    var test = y;
    test.firstName = 'Dhaksh';


    console.log(z);
    console.log(y);

    /***** one more example
    Invoking a Function with a Function Constructor
    If a function invocation is preceded with the new keyword, it is a constructor invocation.

    It looks like you create a new function, but since JavaScript functions are objects you actually
    create a new object:*/

    //Example:
    // This is a function constructor:
    function myfunction(fName,lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    // this creates the new object
    var m = new myfunction('John','Doe');
    m.firstName;   // this will return John
    document.getElementById("demo").innerHTML = m.fName;












})();