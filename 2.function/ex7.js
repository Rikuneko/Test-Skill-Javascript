function getData() {
    // ให้ fetch ข้อมูลจาก website https://jsonplaceholder.typicode.com/users

}

function showData(fetchData) {
  return fetchData.json();
}

function filteredData(data) {
  console.log(data);
  //เริ่มเขียนโค้ดตรงนี้ โดยแสดงผลเฉพาะ name ที่มีความยาวมากกว่า 17 ตัวอักษร
  /* ถ้าทำได้ถูกต้องจะเห็น
[
  'Mrs. Dennis Schulist',
  'Nicholas Runolfsdottir V',
  'Clementina DuBuque'
]
*/
}

function displayError(error) {
    console.log(error);
}

// แก้ไขโค้ดตรงนี้ให้ถูกต้อง
getData().then().then().catch();
