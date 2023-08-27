import { interval, take, concat, Observable, of, merge } from 'rxjs';

function getUserData(): Observable<any> {
  return of([
    { name: 'prasanna', gender: 'MALE' },
    { name: 'Jagadesh', gender: 'MALE' },
    { name: 'Aravindh', gender: 'MALE' },
    { name: 'Swathi', gender: 'FEMALE' },
    { name: 'prasanthini', gender: 'FEMALE' },
  ]);
}

const userData = getUserData();
const others = of({ name: 'Kumar', gender: 'TRANSGENDER' });
const others2 = of({ name: 'Geetha', gender: 'TRANSGENDER' });

// Concat will merge tha data by the order and it follows one by one
// exceution when scubscribing
const concatFinalData = concat(userData, others);

// concatFinalData.subscribe((res) => {
//   console.log(res);
// });

// merge and concat similiar action but there's some extra parameters
// concurrent param that specify whether we want merge 2 observables at the same time
const mergeFinalData = merge(userData, others, others2, 2);

mergeFinalData.subscribe((res) => {
  console.log(res);
});
