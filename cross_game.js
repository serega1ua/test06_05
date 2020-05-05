function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
      if (Object.create)                // If Object.create() is defined...
    console.log("we are here 1");
       return Object.create(p);      //    then just use it.
    var t = typeof p;                 // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    console.log("we are here 2");//we are here 2
    function f333() {
    };                  // Define a dummy constructor function.
    f333.prototype = p;                  // Set its prototype property to p.
    return new f333();                   // Use f() to create an "heir" of p.
}

var p = {prop1: true, prop2: 33, prop3: "fine"};// вот этот будет прототипом,
// отдадим ее аргументом в функцию
var p_copy = inherit(p);

p_copy.prop4 = "best_own";

console.log(p_copy);
console.log(p_copy.constructor)
