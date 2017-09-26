class LogSubscriber extends Rx.Subscriber {
  next(value) {
    console.log('next ' + value) || displayInPreview('next ' + value);
    this._next(value);
  }
  
  error(e) {
    console.log('error ' + e) || displayInPreview('error ' + e);
    this._error(e);
  }
  
  complete() {
    console.log('complete') || displayInPreview('complete');
    this._complete();
  }
}

class LogOperator {
  constructor(childOperator) {
    this.childOperator = childOperator;
  }

  call(subscriber, source) {
    return this.childOperator.call(
      new LogSubscriber(subscriber), source
    );
  }
}

class LogObservable extends Rx.Observable {
  lift(operator) {
    const observable = new LogObservable();
    observable.source = this;
    observable.operator = new LogOperator(operator);
    return observable;
  }
}

// --1--2--3|
// const observable = Rx.Observable.interval(100)
//   .map(x => x+1)
//   .take(3);

const observable = new LogObservable((observer) => {
  setTimeout(() => {observer.next(1)}, 100);
  setTimeout(() => {observer.next(2)}, 200);
  setTimeout(() => {observer.next(3)}, 300);
  setTimeout(() => {observer.complete()}, 400);
});

observable
  .map(x => 10 * x) // LogObservable
  .filter(x => x > 15) // LogObservable
  .count() // LogObservable
  .subscribe(x => { alert(x); });




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}