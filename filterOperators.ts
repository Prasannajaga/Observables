import { getUserData } from './dataService';
import { skip, interval, take, takeUntil, of, single } from 'rxjs';

export class fitlerOperators {
  userData = interval(100);

  skip() {
    this.userData
      .pipe(skip(5), take(10), takeUntil(of(false)))
      .subscribe((res) => {
        console.log('res', res);
      });
  }

  single() {
    getUserData()
      .pipe(single((val) => val[0].name.startsWith('p')))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
