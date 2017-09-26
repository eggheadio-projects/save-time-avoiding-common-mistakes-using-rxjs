const resume$ = new Rx.Subject();

const res$ = resume$
  .switchMap(resume =>
    resume ?
      Rx.Observable.interval(2000) :
      Rx.Observable.empty()
  )
  .do(x => console.log('request it! ' + x) || displayInPreview('request it! ' + x))
  .switchMap(ev => Rx.Observable.ajax({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    method: 'GET',
  }));

res$.subscribe(function (data) {
  console.log(data.response)|| displayInPreview(data.response);
});

resume$.next(false);
setTimeout(() => resume$.next(true), 500);
setTimeout(() => resume$.next(false), 5000);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}