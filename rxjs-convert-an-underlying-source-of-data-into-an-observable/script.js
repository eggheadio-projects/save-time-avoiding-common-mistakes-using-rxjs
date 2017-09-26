// 1. Identify
// 2. Convert to Observables
// 3. Compose

const click$ = Rx.Observable
  .fromEvent(document, 'click');

const res$ = Rx.Observable.from(
  fetch('https://jsonplaceholder.typicode.com/users/0')
  .then(res => res.json())
);

const count$ = Rx.Observable.merge(click$, res$)
  .map(() => 1)
  .scan((acc, x) => acc + x, 0);

count$.subscribe(function (x) {
  console.log(x) || displayInPreview(x);
});



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}