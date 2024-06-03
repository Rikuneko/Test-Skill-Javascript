// ไม่ได้ทำเอง

function getData() {
    // ให้ fetch ข้อมูลจาก website https://jsonplaceholder.typicode.com/users
  return fetch("https://jsonplaceholder.typicode.com/users")

}

function showData(fetchData) {
  return fetchData.json();
}

function filteredData(data) {
  let filterNameOver17 = data.filter((character) => character.name.length > 17 )
  let result = filterNameOver17.map((nameOver17) => nameOver17.name)
  console.log(result)
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
getData().then(showData).then(filteredData).catch(displayError);



//Asyn Await

// async function filteredData2 () {
//   try {
//     let getData1 = await fetch("https://jsonplaceholder.typicode.com/users")
//     let showData1 = await getData1.json()
//     let nameOver17 = showData1.filter((Character1) => Character1.name.length > 17)
//     let result1 = nameOver17.map((onlyNameOver17) => onlyNameOver17.name)
//     console.log(result1)
//   } catch(e) {
//     console.log(e);
//   } 
// }

// filteredData2 ()