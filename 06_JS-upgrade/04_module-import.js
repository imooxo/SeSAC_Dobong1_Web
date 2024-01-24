// 모듈 사용 - import 키워드를 이용
// 따로 따로 가져오기
//import {flr, getFlr} from './04_exports1.js';
//console.log(flr);
//console.log(getFlr(2))
//console.log(getFlr(3))

// 한번에 가져오기
import * as flowers from './04_exports1.js'
console.log(flowers)
console.log(flowers.flr)
console.log(flowers.getFlr(1))

// 방법1
import { showAnimals,animals } from './04_exports2.js';
console.log(animals);
showAnimals();

// 방법2
import sayHi from './05_exportdefault.js';
sayHi();

