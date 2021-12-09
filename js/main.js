//!
// let user = {
//   name: "kany",
//   age: 20,
//   languages: {
//     english: "2 level",
//     frecnh: "3 level",
//   },
// };
// // let user2 = "2 level";
// // ... it spred operator (chek)
// let user2 = { ...user };

//! superfical copy work correct only then, ,when none vlosheny obj, or massiv
// user2.namme = "beka";
// user2.age = "24";
// user2.languages.english = "6 level";
// console.log(user);
// console.log(user2);

//! deep copy - comes the at expanses
//! JSON,parse () is str in our format
//! JSON.parse ( ) is str format
// let user = {
//   name: "lol",
//   age: 20,
//   languages: {
//     english: "2 level",
//     frecnh: "3 level",
//   },
// };
// let user2 = JSON.parse(JSON.stringify(user));
// user2.name = "baky";
// user2.languages.frecnh = "advanced";
// user2.languages.russian = "1 level";
// user.languages.chinese = "6 HSK";

// console.log(user);
// console.log(user2);

//! destructrishetioni это специальный синтакс при помоши которого мы можем брать свойства обект либо записовать переменую

// let student = {
//   name: "adi",
//   lastName: "lox",
// };
// let studentName = student.name;
// let lastName = student.lastName;
// let { name, lastName } = student;

// console.log(name);
// console.log(lastName);

// let student2 = {
//   name: "maks",
//   lastName: "sergey",
// };
// let { name: student2Name, lastName: student2LastName } = student2;
// console.log(student2Name);
// console.log(student2LastName);

// let library = {
//   title: "bootstrap",
//   versions: {
//     first: "2014",
//     second: "2019",
//     third: "2021",
//   },
// };
// let {
//   versions: { first: firstVersion, third: thirdVersion },
// } = library;
// console.log(firstVersion, thirdVersion);

// let arr = [true, 10, 77, false];
// let [boolean, num, , bool] = arr;
// console.log(boolean, num, bool);

// let nums = [42, 55, 866, 90, 105];
// let [first, , third, ...rest] = nums;
// console.log(first, third, rest);

// let project = {
//   name: "market place",
//   framworks: ["angular", "django API"],
//   libraries: ["react", "express JS"],
//   team: {
//     FrontEnd: ["js15", "js13"],
//     backEnd: ["py-16", "py-7-ev"],
//   },
// };
// let {
//   libraries: [, secondLibrary],
//   team: {
//     FrontEnd: [firstFrontEnd],
//     backEnd: [secondFrontEnd],
//   },
// } = project;
// console.log(secondLibrary, firstFrontEnd, secondFrontEnd);

// let obj = {
//   title: "h2",
//   subTitle: "h3",
// };
// let { title, subTitle = "default" } = obj;
// console.log(title, subTitle);

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.
// let student = {
//   name: "john",
//   //   age: 22,
// };
// let { name = prompt("enter age"), age = prompt("enter age") } = student;
// console.log(name, age);

// Задание №1
// Дан объект {name: "John", years: 30}.
// Напишите деструктурирующее присваивание, которое:
// 	•	свойство name присвоит в переменную name.
// 	•	свойство years присвоит в переменную age.
// 	•	свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = {
//   name: "john",
//   age: 30,
// };
// let { name, age, isAdmin = false } = user;
// alert(name);
// alert(age);
// alert(isAdmin);
// function func(employee) {

// function func(name, surname, department, position, salary) {
//   console.log(name, surname, department, position, salary);
// }
// let arr = ["Иван", "Иванов", "отдел разработки", "программист", 2000];
// func(...arr);

// Задание №3
// Значение переменной firstName равно 32, lastName равно Michael, и age равно Jackson.
// Поменяйте значения переменные так, чтобы в них хранились соответствующие значения.
// Используйте деструктуризацию.

// let obj = {
//   firstName: "32",
//   lastName: "Michael",
//   age: "Jackson",
// };
// let { firstName, lastName, age } = {
//   firstName: "Michael",
//   lastName: "Jackson",
//   age: 32,
// };
// console.log(firstName, lastName, age);

function foo(arr) {
  let [, , ...rest] = arr;
  let sum = rest.reduce((value, item) => {
    return item + value;
  });
  console.log(sum);
}
foo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
