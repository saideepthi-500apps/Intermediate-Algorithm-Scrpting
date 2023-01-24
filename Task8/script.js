function pairElement(str) {
  let newArray = [];
for(let item of str){
  let subArray = [];
  switch(item){
    case 'A':
                    subArray.push("A","T");
                    newArray.push(subArray);
                    break;
    case 'T':
                    subArray.push("T","A");
                    newArray.push(subArray);
                    break;
    case 'C':
                    subArray.push("C","G");
                    newArray.push(subArray);
                    break;
    case 'G':
                    subArray.push("G","C");
                    newArray.push(subArray);
                    break;
  }
}
return newArray;
}

function getOutput() {
  document.getElementById("output").innerText = pairElement("GCG");;
}

