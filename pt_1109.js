//Toy 1번 문제
/* 
문제
말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.

선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.

김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤 발표 순서를 말하면 이 발표 순서가 몇 번째 경우의 수인지를 대답해야 합니다.

총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.

모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.
ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

/* 
입력
인자 1: N
Number 타입의 1 <= N <= 12인 조의 개수
인자 2: K
Number타입의 Array (0 <= index)
ex) n이 3이고 k가 [2, 3, 1]일 경우

모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고,

반환하는 값은 3이 됩니다.

주의사항
k내에 중복되는 요소는 없다고 가정합니다.
 */

function orderOfPresentation (N, K) {
  function fac(n) {
      let result = 1;
      for( let i = 2; i <= n; i++ ) result *= i;
      return n<1 ? 0: result;
      } // => 펙토리얼 구하는 코드

  // N=7, K=[7,3,4,2,5,1,6]
  //arr=[7,3,4,2,5,1,6]
  arr = [...K]
  arrOriginal = [...K]
  let result = 0;
  for ( i = 0; i < N-1 ; i++ ){
      mulyplier = arr.map( x => x < arrOriginal[i] ).filter( x => x === true ).length
      arr.shift()
      result=result + mulyplier*fac( N - i - 1 )
  }
  return result

// K.map( x => x < 7 ).filter( x => x === true ).length
// [false, true, true, true, true, true, true]
}

//예제를 이용하자 
//그래도 힘들면 예제를 2~3번씩 따라 친 후 >> 이해 >> 안보고 코딩해보기

//재귀함수

/*
문제
수를 입력받아 홀수인지 여부를 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수
출력
boolean 타입을 리턴해야 합니다.
주의 사항
함수 isOdd는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
0은 짝수로 간주합니다.
입출력 예시
let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false
*/

function isOdd(num) {
  if (num === 0) { // 1차거름망 (답판별기) => 도착지점
    return false
  }
 else if (num === 1){
   return true
 }

// 여기서 나눠서 다시 생각해야함 
// 아래부분에서 답에 수렴할 수 있도록 if문 사용
  if (num < 0) {
  return isOdd(-num)
  // num이 음수값으로 들어왔을때 절댓값으로 만들어준 후 
  //맨위의 함수 (function isOdd(num))로 리턴
  } else {
  return isOdd(num - 2)
  }
}
//num이 위의 도착지점에 도달할 수 있는 식을 만듬 (0, 1). 
//자기자신을 호출하여 계산한 값을 다시 위의 함수로 올려보냄 => 
//도착지점에 도달할 때 까지 계산반복 (이래서 반복문으로 바꿔쓸 수 있다고 한 듯)

/* 
문제
수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 0)
인자 2 : arr
임의의 요소를 갖는 배열
출력
순차적으로 num 개의 요소가 제거된 배열을 리턴해야 합니다.
주의 사항
함수 drop은 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
num과 arr.length 중 최소값만큼 제거합니다.
입출력 예시
let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]
*/

function drop(num, arr) {
  /* arr =[1, 2 ,3, 4] 일 때 
  만약 num이 3이라면
  1 [2, 3, 4]
  1 2 [3, 4]
  1 2 3 [4]
  결과는 [4]가 되어야함
  */
  if (num === 0 || arr.length === 0) {
    return arr;
  }
  return drop(num - 1, arr.slice(1))
}

/*
러시아 전통인형 마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴해야 합니다.

입력
인자 1 : matryoshka
'matryoshka', 'size' 속성을 갖는 재귀적으로 정의된 객체 (입출력 예시 참고)
matryoshka.matryoshka는 null 또는 matryoshka 객체
matryoshka.size는 중첩될수록 작아집니다.
인자 2 : size
number 타입의 수
출력
boolean 타입을 리턴해야 합니다.
주의 사항
함수 findMatryoshka는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용은 금지됩니다.
입력받은 객체는 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
빈 객체를 입력받은 경우, false를 리턴해야 합니다.
입출력 예시
const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false
*/

function findMatryoshka(matryoshka, a) {
  if(matryoshka.size === a) {
    return true
  } 
  ////// 첫번째 

  if ( matryoshka.matryoshka && matryoshka.size > a ) { //&&(논리연산) 입장에서 matryoshka.size 은 항상 0보다 크다 = true (존재한다)
    return findMatryoshka( matryoshka.matryoshka, a ) // matroyshka.matryoshka(object/null) && object >> matroyshka.matryoshka가 null값이 아니면 무조건적으로 실행이된다
    // null && true/object == null -> if(null) === false 
    // && matryoshka.size > a << 없어도 돌아감 but 만약 a값이 마트로시카 size값보다 크다면 써야함.
  }
  else {
    return false // matryoshka.size =< a 인경우 false
  }
  ////// 두번째 
}
// object.keys(matryoshka).leangh === 0 => matryoshka가 빈 객체이다 (빈 객체를 표시하고 싶을때 사용)

// size 100 / a 3
// 처음부터 다시 풀어보기.

/*
문제
선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

입력
인자 1 : giftBox
문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열 (입출력 예시 참고)
문자열은 선물 상자에 들어있는 각 선물의 이름을 의미합니다.
배열은 더 작은 선물 상자를 의미합니다.
인자 2 : wish
string 타입의 문자열
출력
boolean 타입을 리턴해야 합니다.
주의 사항
함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.
입출력 예시
const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true
*/

function unpackGiftbox(giftBox, wish) {
  for ( let i = 0 ; i < giftBox.length ; i++) {
    if( giftBox[i] === wish ) {
      return true
    } else if (Array.isArray(giftBox[i]) === true) {
       if(unpackGiftbox(giftBox[i], wish) === true) { // 이 식과 위의 for문이 어떻게 이어져서 작동하는지 모르겠음
        return true
      }
     }
    }
    return false //6번째줄 if(unpackGiftbox(giftBox[i], wish) 의 반환값 이자 최종값이됨 => ex) wish가 'iphone'일때.
  }
  // ['eyephone', 'postcard'] >> typeof giftBox[i] === 'object' << 배열찾기
  

  /*
  문제
다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

입력
인자 1 : arr
양의 정수 또는 배열을 요소로 갖는 다차원 배열 (입출력 예시 참고)
출력
배열을 리턴해야 합니다.
주의 사항
함수 flattenArr는 재귀함수의 형태로 작성합니다.
Array Method flat()과 flatMap() 사용은 금지됩니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
입출력 예시
let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]);
console.log(output); // --> [2, 3, 4, 5]
  */

function flattenArr(arr) {
  let some = []
  for ( let i = 0 ; i < arr.length ; i++) {
    if(Array.isArray(arr[i]) === true) {
      let bee = flattenArr(arr[i]) // return 없이도 재귀함수가 발동이 되는것인가 => YES
      some.push(...bee)
    } else {
      some.push(arr[i])
    }
  }
  return some
}
