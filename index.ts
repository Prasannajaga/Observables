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

const finalData = concat(userData, others);

finalData.subscribe((res) => {
  if (res.name && res.name === 'Kumar') {
    console.log(res.gender);
  }
});
