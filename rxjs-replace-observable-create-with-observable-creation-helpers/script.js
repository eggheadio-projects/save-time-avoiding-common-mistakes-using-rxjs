const click$ = Rx.Observable
  .fromEvent(document, 'click');

const subscription = click$.subscribe(function (ev) {
  console.log(ev.clientX);
});

setTimeout(function () {
  subscription.unsubscribe();
}, 4000);
