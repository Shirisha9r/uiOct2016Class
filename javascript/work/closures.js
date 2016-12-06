function siblings () {

var siblings = ["John", "Liza", "Peter"];

function siblingCount () {

var siblingsLength = siblings.length;

return siblingsLength;

}

function joinSiblingNames () {

return "I have " + siblingCount() + " siblings:\n\n" + siblings.join("\n");

}

return joinSiblingNames();

}

alert(siblings()); // Outputs "I have 3 siblings: John Liza Peter"