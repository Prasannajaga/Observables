import { concat, concatMap, of } from 'rxjs';
import { getUserData } from '.';

export class MapOperator {
  userData = getUserData();

  updateMap() {
    this.userData
      .pipe(
        concatMap((res) => {
          let data = Array.isArray(res) && res.push({ name: 'Vijay', gender: 'MALE'});
          return res
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
