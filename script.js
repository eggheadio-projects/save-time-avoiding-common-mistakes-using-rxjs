const click$ = Rx.Observable
  .fromEvent(document, 'click');

const tickWhenClick$ = click$
  .switchMap(ev => Rx.Observable.interval(500));

tickWhenClick$.subscribe(function (x) {
  console.log(x)|| displayInPreview(x); 
});



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}