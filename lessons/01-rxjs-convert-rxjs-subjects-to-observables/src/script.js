import { Observable } from 'rxjs'

const click$ = Observable.create(
  function subscribe(observer) {
    const listener = function (ev){
      observer.next(ev);
    };
    
    document.addEventListener('click', listener);
    
    return function unsubscribe() {
      document.removeEventListener('click', listener)
    };
  }
)

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