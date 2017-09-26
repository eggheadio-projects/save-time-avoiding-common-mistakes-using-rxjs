const length$ = Rx.Observable.of(5);
const width$ = Rx.Observable.of(7);
const height$ = Rx.Observable.of(2.8, 2.5);

const volume$ = Rx.Observable
  .combineLatest(length$, width$, height$,
    (length, width, height) => length * width * height
  );

volume$.subscribe(function (volume) {
  console.log(volume); 
});
