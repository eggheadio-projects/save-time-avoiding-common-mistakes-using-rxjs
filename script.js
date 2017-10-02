const clock$ = Rx.Observable.interval(500).share().take(6);

const randomNum$ = clock$
  .map(i => Math.random() * 100).share();

const smallNum$ = randomNum$
  .filter(x => x <= 50)
  .toArray();

const largeNum$ = randomNum$
  .filter(x => x > 50)
  .toArray();

  randomNum$.subscribe(x => console.log('random: ' + x) || displayInPreview('random: ' + x));
  smallNum$.subscribe(x => console.log('small:', x) || displayInPreview('small:' + x));
  largeNum$.subscribe(x => console.log('large:', x) || displayInPreview('large:' + x));
  



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}