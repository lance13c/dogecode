# DogeCode

## How
Doges are smart animals, but they have their limitation. Have you ever trained a doge?

### Limits

#### Memory

Doges can usually only keep the state of one thing in their mind. There limitation here is **1 Variable**.

##### Rule
1 Multi Purpose Variable

#### Cycle
Doges have a special power of following 24 hour cycles to the minute. Wake up at X, bathroom at Y, sleep at Z.
This grants a queue that cycles through on a daily basis.

##### Rule
1 Priority Queue consisting of an array of reminders: Reminder[]

```ts
interface Time {
  hours: number
  minutes: number
}

interface Reminder {
  time: Time,
  action: Function
}
```

#### Cycle Cache

Often times it is difficult for a doge to change its Cycle. This is often annoying when they get up at 7am, but on the weekends you wish to sleep in to 10 and they don't let you.
This grants cache that will last at least 2 days.

##### Rule

```ts
type TaskId = string;

type forgetCycleAction = (taskId: TaskId): boolean;
```

#### Memory

Doges have the ability to remember multiple commands. The commands are usually best retained if they are short. Long commands tend to be forgoten or automatically shortened by the doge.
This grants a Map of _string:actionId_ pairs.

##### Rule
```ts
type ActionId = string;
  
type MemeMemory = {
  [property: string]: ActionId
```

#### Awareness
Doges see, smell, taste, touch, and hear the world around them. Making them aware of their surroundings.
This grants them two abilities, **Listening**, and **Learning**.

The doge can listen to changes in any objects around them.

##### Rule

```ts
interface ChangeEvent {
  preState: Object,
  state: Object,
  diffState: Object
}

interface Object {
  ...
  addListener: (change: ChangeEvent)
}
```


#### Short Attention Span






## How to use

Install it and run:

```sh
npm install
npm run dev
```
