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
        return console.log(`${this.brand} ${this.model} is brake...`)
    }
    stop(){
        return console.log(`${this.brand} ${this.model} is stop...`)
    }
}
