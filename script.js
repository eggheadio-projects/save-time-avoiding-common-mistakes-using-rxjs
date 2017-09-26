const click$ = Rx.Observable
  .fromEvent(document, 'click');

const subscription = click$.subscribe(function (ev) {
  console.log(ev.clientX) || displayInPreview(ev.clientX);
});

setTimeout(function () {
  subscription.unsubscribe();
}, 4000);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}