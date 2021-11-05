let peopleList = [{
  firstName: 'Potter',
  lastName: 'Harry',
  age: 15,
  role: 'student'
},
{
  firstName: 'Dumbledore',
  lastName: 'Albus',
  age: 92,
  role: 'principal'
}
]

function printRole(user) {
// Joe Blow를 클릭하면 clerk 이
// Mary Jenkins를 클릭하면 manager 가 찍힙니다.
// 이 함수는 수정하지 마십시오.
console.log(user.role);
}

function test4(arr) {
let resultList=arr.map(x=>{
 let obj={}
 obj.fullName=x.firstName+' '+x.lastName
 obj.age=x.age
 return obj
 })
 let name,age
for (i=0;i<resultList.length;i++){
document.querySelector('#container').append(document.createElement('li'))
name=document.createElement('a')
name.classList.add("name")
name.textContent=resultList[i].fullName
document.querySelectorAll('li')[i].append(name)
//document.querySelectorAll("name")[i].addEventListener("click", printRole(resultList[i].fullName));

age=document.createElement('div')
age.classList.add("age")
age.textContent=resultList[i].age
document.querySelectorAll('li')[i].append(age)
}

}