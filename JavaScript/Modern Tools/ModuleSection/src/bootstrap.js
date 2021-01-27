// ES6 code goes here
import * as hl from './helper';
import navigation from './navigation';

/*
    import { greeting } from './helper';
    import { multiply } from './helper';
    ---------------------------------------
    import { greeting, multiply } from './helper';
    ---------------------------------------
    Si esta todo en un archivo
    import navigation, {greeting, multiply } from './navigation';
*/

console.log('es6 code goes here');
console.log(hl.greeting);
console.log(hl.multiply(2, 5));
console.log(navigation());