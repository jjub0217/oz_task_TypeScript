// const a: string = "";
// const b: string = "";
// const c: string = ``;

// let myName: string = "joo";
// let message: string = `hello ${myName}`;

// myName.toLocaleUpperCase();
// // message = 123 // 에러

// let n: number = 100;

// // n = "100" // 에러
// // n.toLocaleUpperCase() // 에러

// let count: number = 10;
// let price: number = 9.99;
// let tem: number = -15;
// let distance: number = 3.4e-5;

// let total: number = count * price;
// let avg: number = total / 2;

// let numbers: number[] = [1, 2, 3, 4];
// let firstNumber = numbers[0]; // 자동으로 number 타입으로 추론된다.

// console.log(numbers); // [1,2,3,4]
// console.log(firstNumber); // 1

// let numberCount = numbers.length;
// console.log(numberCount); // 4

interface Car {
  brand: string;
  model: string;
  year?: number; // 선택적 속성
}

const car1: Car = {
  brand: "Toyota",
  model: "Corolla",
};

const car2: Car = {
  brand: "Tesla",
  model: "Model S",
  year: 2020,
};

console.log(car1, car2);
