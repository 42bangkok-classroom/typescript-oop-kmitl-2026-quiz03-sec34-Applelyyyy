# TypeScript Quiz — ข้อ 3 (1 คะแนน)

## 🎯 คำสั่ง

ให้นักเรียนสร้าง 2 class ได้แก่

- `Character` ในไฟล์ `character.ts` (parent class)
- `Warrior` ในไฟล์ `warrior.ts` (child class ที่ `extends Character`)v

โดยต้องทำให้ไฟล์ `index.ts` ที่กำหนดให้ สามารถทำงานได้ถูกต้อง และได้ผลลัพธ์ตามที่คาดหวัง

ห้ามแก้ไขไฟล์ `index.ts`

## 📌 หมายเหตุสำคัญ

**ในไฟล์ `index.ts` มี comment (`//`) ที่แสดงตัวอย่างผลลัพธ์ที่คาดหวัง**

ให้นักเรียนอ่านผลลัพธ์จาก comment เหล่านั้น แล้วเขียน method logic ใน class ต่างๆ ให้สอดคล้องกับผลลัพธ์ที่แสดงไว้ ยกเว้น comment ที่เป็น NOTE

**ตัวอย่าง:**

```typescript
console.log(character.getName());
// NPC
```

จาก comment ด้านบน แสดงว่าผลลัพธ์ที่คาดหวังคือ `"NPC"` ดังนั้น method `getName()` ใน class `Character` ต้อง return ค่าในรูปแบบนี้

```
📁 โครงสร้างไฟล์ที่ต้องมี
p03/
 ├── character.ts
 ├── warrior.ts
 └── index.ts
```

## 📌 เงื่อนไขบังคับ

1. ต้อง `export class Character` และ `export class Warrior extends Character`
2. `Character` ต้องมี attribute `name` และ `health`
   - `health` มีค่าเริ่มต้นเป็น 100
3. `Character` ต้องมี method:
   - `getName()`
   - `getHealth()`
   - `receiveDamage(damage: number)`: ลดเลือดตาม damage ที่ได้รับ
4. `Warrior` ต้องมี constructor รับค่า `name`, `weapon` และ `health` (optional ใน parent แต่ warrior รับมา)
5. `Warrior` ต้องมี attribute `weapon` และ method `getWeapon()`
6. `Warrior` ต้อง override method `receiveDamage(damage: number)`
   - ความสามารถพิเศษ: อ่านได้จากใน comment ของโค้ดไฟล์ index.ts
7. ห้ามใช้ `any`
8. ห้ามใช้ `console.log` ภายใน class
