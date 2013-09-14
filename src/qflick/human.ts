/// <reference path="name.ts" />
/// <reference path="age.ts" />

module TYPOS {

  export class Human {
    private name: Name<string>;
    private age: Age;

    constructor(first: string, last: string, age: number) {
      this.name = new Name(first, last);
      this.age = new Age(age);
    }

    public sayName(): Name<string> {
      return this.name;
    }

    public sayAge(): Age {
      return this.age;
    }
  }

  export class M extends Human {}
  export class F extends Human {}

}
