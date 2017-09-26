function updateDot(x, y) {
  dotElem.style.left = `${x}px`;
  dotElem.style.top = `${y}px`;
}

const click$ = Rx.Observable.fromEvent(document, 'click');

click$.subscribe(ev => updateDot(ev.clientX, ev.clientY));

const res$ = click$
  .switchMap(ev => Rx.Observable.ajax({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    method: 'GET',
  }));

res$.subscribe(function (data) {
  console.log(data.response) || displayInPreview(data.response);
});




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}