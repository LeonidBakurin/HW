let age_2 = 18
    age_3 = 60;

//1*.Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
const checkAge = function(age){
    if (age < age_2) {
        console.log("You don't have access cause your age is", age, "It's less then")
    } else if(age >= age_2 && age < age_3){
        console.log("Welcome   !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
};
console.log("checkAge age = 17 ");
checkAge(17);
console.log("checkAge age = 18 ")
checkAge(18);
console.log("checkAge age = 61 ")
checkAge(61);
//2*.Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
const checkAge2 = function(age){
  if(typeof age == "number"){
    if (age < age_2) {
        console.log("You don't have access cause your age is", age, "It's less then")
        } else if(age >= age_2 && age < age_3){
        console.log("Welcome   !")
        } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
        }  else {
        console.log("Technical work")
        }
    } else {console.log("Error!!!")}
};
console.log("checkAge2 age = 17")
checkAge2(17)
console.log("checkAge2 age = 18")
checkAge2(18)
console.log("checkAge2 age = 61")
checkAge2(61)
console.log("checkAge2 age = qa123")
checkAge2('qa123')
//3**. Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const checkAge3 = function(age){
    let age_n = Number(age);
    if(typeof age_n == "number" && age_n == +age){
      if (age_n < age_2) {
          console.log("You don't have access cause your age is", age_n, "It's less then")
          } 
          else if(age_n >= age_2 && age_n < age_3){
          console.log("Welcome   !")
          } 
          else if (age_n > age_3) {
          console.log("Keep calm and look Culture channel")
          }  
          else {
          console.log("Technical work")
          }
    } else {console.log('Error!!!')}   
        
};
console.log("checkAge3 age = 17")
checkAge3(17)
console.log("test_age3 = 18")
checkAge3(18)
console.log("test_age3 = 61")
checkAge3(61)
console.log("test_age3 = '2' ")
checkAge3("25")

//4***. Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке


