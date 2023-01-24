function convertHTML(str) {
  let obj = {
    "<":"&lt;",
    ">":"&gt;",
    "&":"&amp;",
    "\"":"&quot;",
    "'" :"&apos;"
    };
  let keys = Object.keys(obj);
  for(let item of str){
    if(keys.includes(item)){
      str =str.replace(item,obj[item]);
    }
    else{
     str = str;
    }
  }
  console.log(str)
 return str;
}


function getOutput() {
  document.getElementById("output").innerText = convertHTML("Dolce & Gabbana");
}
