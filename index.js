const { of, map, filter, Observable, merge, debounce, catchError, pluck, distinctUntilChanged, Subscription, debounceTime, switchMap, delay, forkJoin, concat, from } = require("rxjs");
/*
//map
//You receive user input in a form and want to capitalize it before further processing.
const users$ = of([
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 }
]);

users$.pipe(
  map(user => user.map(use => ({ name: use.name, email: use.email })))
).subscribe(result => console.log(result));

users$.pipe(
  map(user => user.filter(users => users.age > 25))
).subscribe(result => {
  console.log("age greater than 30");

  console.log(result)
});


//filter
//
const numbers$ = of(1, 2, 3, 4, 5, 6);
console.log("filter operator");
numbers$.pipe(
  filter(num => num % 2 === 0)
).subscribe(console.log);

//merge
//Submitting a form and sending the data to a server with an asynchronous HTTP request.
const numbers1$ = [1, 2, 3]
const numbers2$ = [4, 5, 6]
console.log("merge operator");
merge(numbers1$, numbers2$).subscribe((result) => {


  console.log(result);
});

//debounseTime
//Auto-saving form data when the user stops typing for 1 second.
// const num = of(1, 2, 3, 4, 5, 6);
// console.log("debounse operator");
// num.pipe(
//   debounce(() => timer(300))
// ).subscribe(console.log);

//catchError

const source = of(1, 2, 3, 'oops', 5);
console.log("catcherror operator");

source.pipe(
  map(value => value * 2),
  catchError(error => {
    console.log('Error:', error);
    // return of(0); // Fallback value
  })
).subscribe(result => console.log(result));

//pluck
//extract specific property 
const obj = of([
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]);

obj.pipe(
  pluck('name')
).subscribe(result => console.log(result));

//distinct until changed
const sour1 = [1, 1, 2, 2, 3, 3, 3, 4, 5];
const obse2=new Observable(sub1=>sub1.next(sour1)).pipe(
  distinctUntilChanged()
)
obse2.subscribe(result => console.log(result));
*/

let array=of(1, 2, 3, 4, 5,6,7,8,9)
// const observable=new Observable(sub=>sub.next(array))
console.log("map operator");
array.pipe(
  map((input)=>input*2)
).subscribe(res=>console.log(res))

//
console.log("filter operator");
array.pipe(
 filter(a=>a%2==0)
).subscribe(res=>console.log(res))

//
let array2=[21,2,3,3,3]
console.log("merge operator");
merge(array,array2).subscribe(res=>console.log(res))

//
console.log("debounceTime operator");
array.pipe(
  debounceTime(100)
).subscribe(res=>console.log(res))

//
console.log("fork operator");
forkJoin([array, array2]).subscribe(results => {
  console.log(results);  //[9,3]
});

//
console.log("distinct untilChanged");

const source = from([1, 1, 2, 2, 3, 3, 3, 4, 5]);

source.pipe(
  distinctUntilChanged()
).subscribe(result => console.log(result));
