// ให้ Declare variable studentInfo มีค่าเท่ากับ empty object
let studentInfo = {};


/* ให้เพิ่มข้อมูลลงใน studentInfo เมื่อแสดงผลลัพธ์บนหน้าจอ จะเห็นข้อมูลดังนี้
{ firstname: 'Jane', lastname: 'Doe', age: 17 } */
studentInfo = { firstname: 'Jane', lastname: 'Doe', age: 17 }
console.log(studentInfo);

/* ให้เปลี่ยน firstname จาก "Jane" เป็น "Alice" เมื่อแสดงผลลัพธ์บนหน้าจอ จะเห็นข้อมูลดังนี้
{ firstname: 'Alice', lastname: 'Doe', age: 17 } */
studentInfo.firstname = "Alice";
console.log(studentInfo)


/* ให้เพิ่ม key subjects ลงไปใน studentInfo โดยมี value เป็น empty object 
เมื่อแสดงผลลัพธ์บนหน้าจอ จะเห็นข้อมูลดังนี้ 
{ firstname: 'Alice', lastname: 'Doe', age: 17, subjects: {} } */
studentInfo.subjects = {};
console.log(studentInfo)


/* ให้เพิ่ม key value pair เข้าไปเป็น value ของ key subjects เพื่อเก็บข้อมูลคะแนนสอบแต่ละวิชา
เมื่อแสดงผลลัพธ์บนหน้าจอ จะเห็นข้อมูลดังนี้
{ firstname: 'Alice', lastname: 'Doe', age: 17, subjects: { math: 80 } } */
studentInfo.subjects = {math: 80};
console.log(studentInfo);


/* ให้เพิ่ม key value pair เข้าไปอีกรอบ เพื่อเก็บข้อมูลคะแนนสอบแต่ละวิชา
เมื่อแสดงผลลัพธ์บนหน้าจอ จะเห็นข้อมูลดังนี้
{ firstname: 'Alice', lastname: 'Doe', age: 17, subjects: {math: 80, science: 70, art: 65, eng: 90} } */
studentInfo.subjects = {math: 80, science: 70, art: 65, eng: 90} 
console.log(studentInfo);
/* ให้ลบ key age ออกจาก studentInfo  
เมื่อแสดงผลลัพธ์บนหน้าจอ จะเห็นข้อมูลดังนี้
{ firstname: 'Alice', lastname: 'Doe', subjects: {math: 80, science: 70, art: 65, eng: 90} } */
delete studentInfo.age
console.log(studentInfo)