const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let arr = firstAndLast.split(" ");
  let [firstName,lastName] = [arr[0],arr[1]];

  this.getFirstName = function() {
    return firstName;
  }; 
  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
 
    return  firstName + " "+ lastName;
  };

   
  this.setFirstName = function(surname) {
    firstName = surname;
  }; 

  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(value) {
    let arr = value.split(" ");
    firstName = arr[0];
    lastName = arr[1];
  };
 
};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.setFirstName("HUSKEY");

function getOutput() {
  document.getElementById("output").innerText = bob.getFullName();
}
