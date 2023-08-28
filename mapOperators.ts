import {
  concat,
  concatMap,
  mergeMap,
  Observable,
  of,
  merge,
  filter,
  partition,
  zip,
  map,
  startWith,
} from 'rxjs';
import { getUserData } from './dataService';

export class MapOperator {
  userData = getUserData();
  others: Observable<any> = of({ name: 'Dhanush', gender: 'MALE' });
  others1: Observable<any> = of({ name: 'Suriya', gender: 'MALE' });
  others2: Observable<any> = of({ name: 'Hamsika', gender: 'FEMALE' });

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

  updateParition() {
    const [female, male] = partition(
      this.userData,
      (value: any, index: number) => value[index].name.length > 9
    );

    female.subscribe((res) => {
      console.log('FEMALE', res);
    });

    male.subscribe((res) => {
      console.log('MALE', res);
    });
  }

  updateZip() {
    const ziped = zip(this.others, this.others1, this.others2); 
    ziped
      .pipe(map(([one, two, three]) => ({ one, two, three })))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
