import { Character } from "./character";

export class Warrior extends Character {
  weapon: string;

  constructor(name: string, weapon: string, health: number = 100) {
    super(name, health);
    this.weapon = weapon;
  }

  getWeapon(): string {
    return this.weapon;
  }

  override receiveDamage(damage: number): void {
    const reducedDamage = damage * 0.9; // Reduce damage by 10%
    super.receiveDamage(reducedDamage);
  }
}