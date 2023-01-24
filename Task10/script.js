function uniteUnique(...arr) {
  arr = [].concat(...arr);
  let set = new Set(arr);
  return Array.from(set);
}

function getOutput() {
  document.getElementById("output").innerText = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
}

