// const x$ = new Rx.Subject();

const click$ = Rx.Observable
  .fromEvent(document, 'click');

const x$ = click$.map(ev => ev.clientX);

// click$.subscribe({
//   next: function (ev) {
//     x$.next(ev.clientX);
//   }
// });

x$.subscribe({
  next: function next(x) {
    console.log(x) || displayInPreview(x);
  }
});



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}