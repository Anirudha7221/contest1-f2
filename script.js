/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) => {
    if(value.profession == "developer")
      {
        console.log(value);
      }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) =>{
    if(value.profession == "developer")
      {
        console.log(value);
      }
  })
}

function addData() {
  //Write your code here, just console.log
  let employee={
    id : 4,
    name : "susan",
    age : "20",
    profession : "intern"
  }
  arr.push(employee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let ans=arr.filter((value) =>{
    return value.profession!="admin";
  })

  console.log(ans);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 4, name: "Anirudha", age: "22", profession: "developer" },
    { id: 5, name: "Somesh", age: "22", profession: "developer" },
    { id: 6, name: "Sanil", age: "20", profession: "intern" },
  ];

  let arr3=arr.concat(arr2);
   console.log(arr3);
}
