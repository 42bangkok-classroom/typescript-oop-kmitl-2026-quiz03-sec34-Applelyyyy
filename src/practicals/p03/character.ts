export class Character {
    protected name:string = ""
    protected health:number
    constructor(name:string,health:number = 100){
        this.name = name
        this.health = health
    }
    public getName(){
        return this.name
    }
    public getHealth():number{
        return this.health
    }
    public receiveDamage(damage: number){
        this.health -= damage
        if(this.health < 0){
            this.health = 0
        }
    }
}
