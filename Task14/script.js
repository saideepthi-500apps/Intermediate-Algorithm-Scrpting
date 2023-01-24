function smallestCommons(arr) {
  let min = Math.min(arr[0],arr[1]);
  let max = Math.max(arr[0],arr[1]);
  let temp = 1;
  for(let i=min ; i<=max-1 ; i++){
    let num1 = temp;
    num2 = i+1;
    let min = (num1 > num2) ? num1 : num2;

    // while loop
    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            break;
        }
        min++;
    }
    temp = min;
    console.log(min);
  }
}

function getOutput() {
  document.getElementById("output").innerText = smallestCommons([1, 13]);
}

