const { of, map, filter, Observable, merge, debounce, catchError, pluck, distinctUntilChanged, Subscription, debounceTime, switchMap, delay, forkJoin, concat, from, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } = require("rxjs");

//****************************RXJS ****************/

/*
const observable=new Observable((sub)=>{
  sub.next(1)
  sub.next(2)
  sub.next(3)
  sub.next(4)
  // sub.next("hellow")
}).pipe(
  map(a=>a*3),
  filter(a=>a%2==0)
)
 const subs=observable.subscribe({
  next:value=> console.log(value),
  error :err=>console.log({"error":err }),
  complete:()=>console.log("completd"),
  
  
 })

 setTimeout(() => {
  subs.unsubscribe ();
  console.log('Unsubscribed');
}, 1000);


*/

//****************************OPERATORS ****************/

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

/*

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

*/


//**************************** Subject-MULTICAST ****************/
 const subject=new Subject()
 subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(1);

// Subscriber 2
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(2);
subject.next(3);
subject.next(4);


/***********BehaviourSubject ***************** */
console.log("BehaviourSubject");

const behaviourSubject = new BehaviorSubject(0); // 0 is the initial value
behaviourSubject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
behaviourSubject.next(1);
behaviourSubject.next(2);
behaviourSubject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
behaviourSubject.next(3);
behaviourSubject.next(4);
behaviourSubject.next(5);

//************* ReplaySubject  ***********/
console.log("ReplaySubject");
const replaySubject = new ReplaySubject(); // 0 is the initial value
replaySubject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
replaySubject.next(1);
replaySubject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
replaySubject.next(3);
replaySubject.next(4);
replaySubject.next(5);

//************* AsyncSubject  ***********/
console.log("ASYNCPIPE");

const subject2 = new  AsyncSubject();

subject2.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject2.next(1);
subject2.next(2);
subject2.next(3);
subject2.next(4);

subject2.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(5);
subject.complete();






