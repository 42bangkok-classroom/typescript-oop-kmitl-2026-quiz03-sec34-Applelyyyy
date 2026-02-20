export class Character {
    name:string = ""
    health:number
    constructor(name:string,health:number = 100){
        this.name = name
        this.health = health
    }
    getName(){
        return this.name
    }
    getHealth(){
        return this.getHealth
    }
    receiveDamage(damage: number){
        this.health -= damage
        if(this.health < 0){
            this.health = 0
        }
    }
}
