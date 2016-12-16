// Code goes here
function logger(a,b,c,d){
  console.log(a,b,c,d); //1 2 3 4
  console.log(arguments);//[1, 2, 3, 4, 333, 33]
  console.log(arguments);//[1, 2, 3, 4, 333, 33]
  console.log(arguments.length); //6 // you can see how many the user is passing
};
logger(1,2,3,4,333,33);//

