/*      this script will have IFFE construct with primitive datatype,object datatype, named and
        anonymous functions---- IIFE constructis used inorder to avoid the memory leaks from the global variables
          This is a technique used to limit variable scope;
          it's the only way to prevent variables from polluting the global namespace.          */
(function(){

    /*****
    /* Declaring the primitive datatypes in Javascript or ECMA Script5
    there are five datatypes:number, string, boolean, null and undefined */

    //--1. Variables as number datatype
    var a1 = 10;
    var b1 = 45.99;

    //--2. Variables as string datatype
    var firstName = 'Shirisha';
    var lastName = 'Kuncha';

    //--3. Variables as 'Boolean' datatype
    var isHTMLLoaded = false;
    var isCSSLoaded = true;

    //--4. Variable as 'Null' datatype and holds the null value
    var m = null;

    //--5. Variable as 'undefined' datatype and means its not defined
    var n = undefined;

    // use the method console.log() to display the data
    console.log(a1);
    console.log(b1);
    console.log(firstName);
    console.log(lastName);
    console.log(isHTMLLoaded);
    console.log(isCSSLoaded);
    console.log(m);
    console.log(n);

    //////
    //--6. Variable as 'object' datatype and this can hold any primitive datatype
    var p = {
        firstName: 'Shirisha',
        isPresent: false,
        isSuspended: null,
        rollNumber: 66,
        q: {
            lastName: 'Kuncha',
            rollNumber: 55,
            r:{
                fullName: 'Shirisha Kuncha',
                rollNumber: 100,
                status: undefined
            }
        }

    };

    var q = {
        firstName: 'Dhaksh',
        rollNumber: 99
    };
    // -- using dot notation to update the properties
    p.q.rollNumber = 111;
    q.rollNumber = 222;

    p.firstName = 'Tanvhika';

    //p->q->lastName
    p.q.lastName = 'Kuncha';

    //p->q->r->fullName
    p.q.r.fullName = 'Tanvhika Kuncha';

    //console.log(p);
    //console.log(q);
        /////////////////////////////////////////////////////////////
        // datatype as function
        //-- defining a named function 'addition' with arguments which will always return a value
        function addition(a,b,c) {
            //variable sum is local to the function 'addition'
            var sum = a+b+c;

/*            // below p,q are global variables here inside the function 'addition'
            console.log(p);
            console.log(q);*/
           /* return sum;*/
        }
        // -- calling addition function and assigning to the 'output' variable
        var output = addition(22,44,99);
        console.log(output);
        // ***** important and gives the below error
        /*console.log(sum); *///Uncaught ReferenceError: sum is not defined(…)
        ////////////////////////////////////////////////////////////////////
        /*  -- defining anonymous function or callback function
        and it may or may not return a value  -- */
        var w = function(){
            var w1 = 1;
            var w2 = w1+1;
            // **** Its not mandatory to return the value

        }
        console.log(w());











































})();



