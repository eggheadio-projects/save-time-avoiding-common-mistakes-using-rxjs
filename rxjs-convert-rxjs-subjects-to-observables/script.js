const click$ = Rx.Observable.create(
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
  console.log(ev.clientX);
});

setTimeout(function () {
  subscription.unsubscribe();
}, 4000);
