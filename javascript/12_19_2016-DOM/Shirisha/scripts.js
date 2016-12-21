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
    console.log("print d");
    console.log(d);
    /*console.log('#foo\bar') */              // "#foobar" (\b is the backspace control character)
    /*document.querySelector('#foo\bar')    // Does not match anything*/
    var e = document.querySelector('#foo\\\\bar')    // escape
    console.log("print e");
    console.log(e);
    var p1 = document.body.querySelector('.viswa');
    console.log("print p1");
    console.log(p1);
    var lis = document.querySelector("ul.navClass li");
    console.log(lis);
   /* for (var i = 0; i < lis.length; i++) {
      process(lis.[i]);
    }
    fuction process(i) {
      return lis.length;
    }*/













})();