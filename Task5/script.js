function spinalCase(str) {
   return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
 }
 
function getOutput() {
  document.getElementById("output").innerText =  spinalCase("thisIsSpinalTap");
}
