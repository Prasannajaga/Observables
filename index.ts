import { interval, take, concat, Observable, of, merge } from 'rxjs';
import { getUserData } from './dataService';
import { fitlerOperators } from './filterOperators';
import { MapOperator } from './mapOperators';

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
const concurrent = 2;
const mergeFinalData = merge(userData, others, others2, concurrent);

// mergeFinalData.subscribe((res) => {
//   if (res.name && res.name === 'Geetha') {
//     console.log(res.gender);
//   }
// });

// ConcatMap
// let d = new MapOperator().updateConcatMap();

// mergeMap
// new MapOperator().updatMergeMap();

// partition
// new MapOperator().updateParition();

//  zip
// new MapOperator().updateZip();

new fitlerOperators().single();
