//IIFE CONSTRUCT
(function(){
    //
    // DOM = WINDOW object=browser in javascript
    console.log(window);
    var a = document.getElementById('heading');
    console.log(a);
    var b = document.getElementsByClassName('test');
    console.log(b);
    // gets the first element with "h1" tag
    var c = document.querySelector('h1');
    console.log(c);
    var c1 = document.querySelectorAll('h1');
    console.log(c1);
    var d = document.querySelectorAll('[data-srikar="viswa"]');
    console.log(d);
    console.log('#foo\bar')               // "#foobar" (\b is the backspace control character)
    /*document.querySelector('#foo\bar')    // Does not match anything*/
    document.querySelector('#foo\\\\bar')    // escape














})();