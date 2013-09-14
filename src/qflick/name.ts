module TYPOS {

  export class Name<T> {
    public first: T;
    public last: T;

    constructor(first: T, last: T) {
      this.first = first;
      this.last = last;
    }
  }

}
