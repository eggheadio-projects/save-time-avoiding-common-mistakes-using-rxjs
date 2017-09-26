const click$ = Rx.Observable
  .fromEvent(document, 'click');

const four$ = Rx.Observable.interval(4000).take(1);

/*
click$          --c------c---c-c-----c---c---c-
four$           -----------------0|
clickUntilFour$ --c------c---c-c-|
*/

const clickUntilFour$ = click$.takeUntil(four$);

clickUntilFour$.subscribe(function (ev) {
  console.log(ev.clientX) || displayInPreview(ev.clientX);
});



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}