export class User {

    firstname: string = "";
    lastname: string = "";
    private age: number = 0;

    public static BIRTH_YEAR: number = 2000;

    setFirstname(firstname: string) {
        this.firstname = firstname
    }

    setLastname(lastname: string) {
        this.lastname = lastname
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    getFullName(): string {
        if (!this.firstname && !this.lastname) return "";
        return `${this.firstname} ${this.lastname}`;
    }
}