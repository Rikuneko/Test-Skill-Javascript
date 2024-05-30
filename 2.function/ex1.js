/* ให้ Declare function addByNumber ที่รับ Argument 2 ตัว คือ a, b
เมื่อ function นี้ทำงาน จะแสดงค่าที่ได้จากการนำ a + b
โดยใช้ concept เรื่อง Function Declaration 
*/

function addByNumber(a, b) {
    return a + b
}



console.log(addByNumber(4,6)) // 10
console.log(addByNumber(20,15)) //35


// function decaration
function greeting(firstName, lastName) {
    return `สวัสดี ${firstName}, ${lastName}`
}


console.log(greeting("rick","ky"))


//function expression

let greeting2 = function(firstName, lastName) {
    return `สวัสดี ${firstName}, ${lastName}`
}


console.log(greeting2("rick", "ky"))


// arrow function

let greeting3 = (firstName, lastName) => {
    return `สวัสดี ${firstName}, ${lastName}`
}

console.log(greeting3("rick", "ky"))