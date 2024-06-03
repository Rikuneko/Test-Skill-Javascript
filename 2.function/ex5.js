/* ให้ declare function ในรูปแบบ function expression 
function นี้ชื่อว่า oddOrEven รับ parameter 1 ตัวคือ number
เมื่อ function ถูก execute จะแสดงข้อความตามเงื่อนไขดังนี้
- ถ้า number เป็นเลขคี่ เช่น 1, 3, 5 จะแสดงข้อความ "<number> เป็นเลขคี่"
- ถ้า number เป็นเลขคู่ เช่น 2, 4, 6 จะแสดงข้อความ "<number> เป็นเลขคู่"
*/ 
let oddOrEven = function(number) {
    if (number % 2 !== 0) {
       return `${number} เป็นเลขคี่`
    } else {
        return `${number} เป็นเลขคู่`
    }
    return
}

console.log(oddOrEven(1)) // "1 เป็นเลขคี่"
console.log(oddOrEven(10)) // "10 เป็นเลขคู่"


// ทำเอง