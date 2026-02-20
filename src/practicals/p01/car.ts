export class Car {
    public brand:string = ""
    public model:string = ""

    start(){
        return console.log(`${this.brand} ${this.model} is starting...`)
    }
    accelerate(){
        return console.log(`${this.brand} ${this.model} is accelerating...`)
    }
    brake(){
        return console.log(`${this.brand} ${this.model} is braking...`)
    }
    stop(){
        return console.log(`${this.brand} ${this.model} is stopping...`)
    }
}
