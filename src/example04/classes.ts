class Entity {
  public id: number;
}

export class User extends Entity {
  static createHash = (name: string) => name.split('').reverse().join('');

  constructor(private name: string) {
    super();
  }

  public sayHello() {
    return `Hello ${this.name}!`;
  }
}
