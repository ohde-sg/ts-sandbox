// Person
class Person {
  constructor(public name: string, public age: number) {}
  greeting(): void {
    console.log(`Hello !! I'm ${this.name}(${this.age})`)
  }
}

let p = new Person('yoshiyuki', 31)
p.greeting()
