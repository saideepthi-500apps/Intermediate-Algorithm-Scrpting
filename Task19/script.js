function addTogether() {
  let a = arguments[0];
 let b = arguments[1];
 if(typeof(a)=="number"){
   if(typeof(b)=="number"){
     return a+b;
   }
   else if(typeof(b)=="undefined"){
    
       if (typeof secondVal === "number") {
         return function(secondVal) {
           let returnValue2;
           returnValue2=a+b;
           return returnValue2;
         }
       }
   }
 }
 else if(isNaN(a+b)){
   return undefined;
 }
}
 
function getOutput() {
  document.getElementById("output").innerText = addTogether(2,3);
}
