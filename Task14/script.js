function smallestCommons(arr) {
  let min = Math.min(arr[0],arr[1]);
  let max = Math.max(arr[0],arr[1]);
  let temp = 1;
  for(let i=min ; i<=max-1 ; i++){
    let num1 = temp;
    let num2 = i+1;
    let max = (num1 > num2) ? num1 : num2;

    // while loop
    while (true) {
        if (max % num1 == 0 && max % num2 == 0) {
            break;
        }
        max++;
    }
    temp = max;
    // console.log(max);
  }
  return temp;
}
smallestCommons([1, 13]);
function getOutput() {
  document.getElementById("output").innerText = smallestCommons([1, 13]);
}

