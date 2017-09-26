const click$ = Rx.Observable
  .fromEvent(document, 'click');

const tickWhenClick$ = click$
  .switchMap(ev => Rx.Observable.interval(500));

tickWhenClick$.subscribe(function (x) {
  console.log(x); 
});
