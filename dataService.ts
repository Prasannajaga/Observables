import { Observable, of } from 'rxjs';

export function getUserData(): Observable<any> {
  return of([
    { name: 'prasanna', gender: 'MALE' },
    { name: 'Jagadesh', gender: 'MALE' },
    { name: 'Aravindh', gender: 'MALE' },
    { name: 'Swathi', gender: 'FEMALE' },
    { name: 'prasanthini', gender: 'FEMALE' },
  ]);
}
