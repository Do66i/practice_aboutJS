// 문자열을 입력받아 문자열에 존재하는 각 단어의 개수 정보를 담은 객체를 리턴해야 합니다.
//각 단어(소문자 형태)를 키로 하고, 각 단어의 개수를 값으로 하는 객체를 리턴해야 합니다.
/* 단어는 공백을 제외한 연속된 알파벳 문자열로 정의합니다.
공백은 한 칸 이상입니다.
단어가 존재하지 않는 경우, 빈 객체를 리턴해야 합니다.
대소문자를 구분하지 않습니다.
str.trim 사용은 금지됩니다. */
function test1(str) {
  let some=str.toLowerCase().split(" ")
  let gosh={}
  for( i = 0 ; i < some.length ; i++ ){
    if ( gosh[some[i]] === undefined && some[i]!== '' ) {
    gosh[some[i]]=some.filter( x => x === some[i] ).length
    } 
  }
return gosh
};
let output = test1('ask a bunch try a BUNCH get a bunch');
/* function test1(str) {
  some=str.toLowerCase().split(' ')
  // TODO: 여기에 코드를 작성합니다.
  let result={}
  some.map( x =>{
    if ( result[x]===undefined && x!=='' ){

      result[x]=1;
      for( i=0 ;i<some.length;i++){
        if(x===some[i]){
          result[x]+=1
        }
      }
      }
  })
  let answerList=Object.keys(result)
  for(j=0;j<answerList.length;j++){
    result[answerList[j]]=result[answerList[j]]-1
  }

return result
} */
console.log(output);

//수를 입력받아 각 자릿수를 모두 더한 값을 리턴해야 합니다.
//음수를 입력받은 경우, 첫번째 수는 음수로 계산합니다.

function test2(num) { // 예시보자마자 알아챘다. 이것은 리듀스를 써야한다. 이유없다.
  let some = num.toString()
      some = some.split(''); // 복사
  
  if(num < 0){
  please = (Number(some[1]) * -1); //만약 첫번째 숫자가 음수일경우  > some[0]은 '-'이기 때문에 [1]로 지정
  for(let i = 2; i < some.length; i++){
    please = please + Number(some[i]) 
  }
  return please;
  
  } else {
    return some.reduce((acc, cur) => Number(acc) + Number(cur), 0)   // 위의 if조건문( num < 0 )외 의 모든경우
  }
}
let output = test2(1148);
console.log(output); // --> 14 = 1 + 1 + 4 + 8


//수를 입력받아 각 자리의 수를 곱한 결과물들이 한자리 수가 될 때까지 반복적으로 곱한 후, 최후의 한 자리 수를 리턴해야 합니다.
/* 예를 들어 786을 인자로 넘길 경우, 함수는 0을 리턴해야 합니다.
7 * 8 * 6 -> 336
3 * 3 * 6 -> 54
5 * 4 -> 20
2 * 0 -> 0 */

function test3(num) { // 일단 얘도 reduce 이용하는 문제임 ( 힌트보니 토너먼트 형태 )

  let some = num.toString()
      some = some.split('')
  
  for( let i = 0; some.length > 1; i++ ) { // i없으면 for문 쓸 수가 없는데 ? 근데 i넣을 구녕도없음;
    some = some.reduce( (acc, cur) =>  acc * cur , 1);
    some = some.toString()
    some = some.split(''); // 롸?
   }
    return Number(some)
  }
  let output = test3(786);
  console.log(output); // --> 0
  
  //사원들의 정보를 배열로 입력받아 HTML 엘리먼트의 형태로 변형해서 ul#container에 append 합니다.
  /* 인자 1 : arr
객체를 요소로 갖는 배열
arr[i]는 'firstName', 'lastName', 'age', 'role' 등의 속성을 갖는 객체
'firstName', 'lastName', 'role' 등의 속성은 string 타입
'age' 속성은 number 타입 (1 이상의 정수)
 */
/* <a> 요소로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수가 실행되어 해당 사원의 role이 콘솔에 출력되어야 합니다. */

function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function test4(arr) {
 let some=arr.map(x=>{
   let obj={}
   obj.fullName=x.firstName+' '+x.lastName
   obj.age=x.age
   return obj
   })
   let name,age
  for (i=0;i<some.length;i++){
  document.querySelector('#container').append(document.createElement('li'))
  name=document.createElement('a')
  name.classList.add("name")
  name.textContent=some[i].fullName
  document.querySelectorAll('li')[i].append(name)

  // 넘모 어려워서 못하겠습니다... 진짜로 ㅠㅠ... 죄송합니다...
  }
 
}

//사람들의 정보를 담은 배열을 입력받아 조건에 맞게 각 개인의 전체 이름을 요소로 갖는 배열을 리턴해야 합니다.

/* 이름과 성이 모두 없는 경우는 없다고 가정합니다.
사람들의 나이는 18 이상 120 이하의 자연수입니다.
사람들의 나이는 전부 다르다고 가정합니다.
이름, 성, 나이 외 추가 정보가 있을 수 있습니다.
 */

/* 인자 1 : arr
배열을 요소로 갖는 배열
arr[i]는 한 개인에 대한 정보를 담고 있는 배열
arr[i]는 string 또는 number 타입을 요소로 갖는 배열
arr[i].length는 2

string 타입을 요소로 갖는 배열을 리턴해야 합니다.
각 요소는 개인의 전체 이름은 이름(firstName)과 성(lastName) 사이에 공백을 표기합니다.
사람들의 전체 이름은 각 개인의 나이순(오름차순)으로 정렬되어야 합니다.
이름과 성이 하나만 있는 경우, 하나만 표기합니다.*/

let list = [
  [
    ['firstName', 'Joe'],
    ['age', 42],
    ['gender', 'male'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['gender', 'female'],
  ],
  [
    ['lastName', 'Kim'],
    ['age', 40],
    ['gender', 'female'],
  ],
];

function test5(arr) {
  let arrNew = [] // 선배열후뚜넣
  for(let i =0; i< arr.length; i++){
    arrNew.push(Object.fromEntries(arr[i])) // 그냥 entries쓰면 안돌아감.
  } 
 
  //나이랑 오름차순 뚜들겨만들기
  arrNew.sort(function (acc, cur) { // sort쓰면 정렬가능 "배열"
    if(acc.age > cur.age ){
      return 0
    } else {
      return -1
    }
  });
 
  // 조건문 노가다
  let a = arrNew.map( function(x) {
    { if(x .firstName !== undefined && x .lastName !==undefined) {
      return `${x .firstName} ${x .lastName}`
    } else if (x .firstName !== undefined && x .lastName ===undefined ) {
      return `${x .firstName}`
    } else if (x .firstName === undefined && x .lastName !==undefined) {
      return `${x .lastName}`
    } else {
    }
  }})
    return a;
}

let output = test5(list);
console.log(output);
//dsafjdkslfajdlsk;f

