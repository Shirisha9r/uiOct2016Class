
 var obj = {
   "firstName": "Shirisha",
   "lastname": "Reddy",
   "age": 20,
   "state": {
            "city": "Dallas",
            "county" : "Denton"

   }
 };
 // stringify is a function that would convert JSON object to string
 // to communicate with the server
var objStr = JSON.stringify(obj);
 console.log(objStr);//{"firstName":"Shirisha","lastname":"Reddy","age":20,"state":{"city":"Dallas","county":"Denton"}}

 // parse function is used to convert the string to JSON object

 var objprs = JSON.parse(objStr);
 console.log(objprs);
 // eval() can be used for deserializer but, its  bad, too slow and is not a secured option
 // XSS vulnerability