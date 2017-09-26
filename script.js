const userData$ = Rx.Observable.ajax({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  method: 'GET',
});
  
const click$ = Rx.Observable
  .fromEvent(document, 'click');

const resWhenClick$ = click$
  .mergeMap(ev => userData$);

resWhenClick$.subscribe({
  next: function (data) {
    console.log(data.response) || displayInPreview(data.response); 
  }
});



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}