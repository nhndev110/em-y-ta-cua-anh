let nodeClickFirst = document.querySelector('#first-click');
nodeClickFirst.onclick = function (e) {
    let nodeBox = document.querySelector('.box');
    nodeBox.style.display = 'flex';
    this.style.display = 'none';
}