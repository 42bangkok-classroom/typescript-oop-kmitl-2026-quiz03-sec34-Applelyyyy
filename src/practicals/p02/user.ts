export class User {
    firstname: string = "";
    lastname: string = "";
    private age: number = 0;

  static BIRTH_YEAR: number = 2000;

    setFirstname(firstname: string): void {
    this.firstname = firstname
  }

  setLastname(lastname: string): void {
    this.lastname = lastname
  }

  setAge(age: number): void {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  get getFullName(): string {
    if (!this.firstname && !this.lastname) return "";
    return `${this.firstname} ${this.lastname}`;
  }
}