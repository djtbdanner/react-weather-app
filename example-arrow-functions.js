var names = ['Dave','Dan','Mike'];

names.forEach(function(name){
  console.log('forEach', name);
});

// arrow functions
names.forEach((name) => {console.log('arrow-func', name)});

// just a statement remvoe culry if you just want to do one thing
names.forEach((name) => console.log('easier- ', name));

// example with a return - See that return me is now kind of a method
var returnMe = (name) => name + '!';
console.log(returnMe('Dave'));


// arrow functions take over their this binding...

var person = {
  name:'Dave',
  greet: function () {
    names.forEach (function (name)
    {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

var personII = {
  name:'Dave',
  greet: function () {
    names.forEach ((name) =>
    {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

personII.greet();


//

function add (a, b){
  return a+ b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {return a+  b};
console.log(addStatement(1,10));
console.log(addStatement(9,42));

var addExpression = (a,b) => a + b;  // automagically gets returned
console.log(addExpression(3,-2));
console.log(addExpression(9,99));
