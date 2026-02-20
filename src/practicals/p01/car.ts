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
        return console.log(`${this.brand} ${this.model} is brakeing...`)
    }
    stop(){
        return console.log(`${this.brand} ${this.model} is stoping...`)
    }
}
