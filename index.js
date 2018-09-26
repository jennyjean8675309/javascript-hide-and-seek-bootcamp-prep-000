function getFirstSelector(selector) {
  document.querySelector('selector');
}

function nestedTarget() {
  targetSpot = document.getElementById("nested").children[0].children[0].children[0].children[0];
  targetSpot.innerHTML;
}

function increaseRankBy(n) {
  lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  div = document.getElementById('grand-node')
  nextChild = div.children[0]
    while div.children !== null
}
