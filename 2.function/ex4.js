/* ให้ declare function ในรูปแบบ function declaration 
function นี้ชื่อว่า goodbye รับ parameter 1 ตัวคือ name
เมื่อ function ถูก execute จะแสดงข้อความ "ลาก่อน <name>" 
*/ 

function goodbye(name) {
    return `ลาก่อน ${name}`
}


console.log(goodbye("Ricky"))

//ทำเอง