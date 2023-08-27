import {
  concat,
  concatMap,
  mergeMap,
  Observable,
  of,
  merge,
  filter,
} from 'rxjs';
import { getUserData } from './dataService';

export class MapOperator {
  userData = getUserData();
  others: Observable<any> = of({ name: 'Dhanush', gender: 'MALE' });

  updateConcatMap() {
    this.userData
      .pipe(
        concatMap((res) => {
          let data =
            Array.isArray(res) && res.push({ name: 'Vijay', gender: 'MALE' });
          return res;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  updatMergeMap() {
    this.userData
      .pipe(
        mergeMap((res) => {
          return merge(res, this.others);
        }),
        filter((val) => val.gender === 'MALE')
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
