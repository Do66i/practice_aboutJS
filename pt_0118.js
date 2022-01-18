function movingStuff(stuff, limit) {
  let sortStuff = stuff.sort((a, b) => a - b ); // 1. stuff의 내용물들을 오름차순으로 먼저 정리한다.
  let count = 0 // 박스 나르는 횟수


  while(sortStuff.length !== 0){
    if(sortStuff[0] + sortStuff[sortStuff.length - 1] <= limit){ // 10 + 80 / 100 이하 -> 10 과 80이 같이 나간다
      count++ //  2
      sortStuff.shift();
      sortStuff.pop();
    } else { // else if => 앞 조건과 또 다른 조건 // if를 하나 더 만들었다고 생각하면됨
      count++
      sortStuff.pop()
    }
  }
  return count
}

/*
10 40 50 80 100 / 100
100 + 10 / 100초과 -> 100만 나간다 1 
10 40 50 80 
10 + 80 / 100 이하 -> 10 과 80이 같이 나간다 2
40 50
40 + 50 / 100 이하 -> 40과 50이 같이 나간다 3

카운트 : 3
최대한 무거운 것과 작은것

한 번에 최대 2개 

60 + 10 = 70 / 
60 + 10 = 70 / 

limited : 한계치 무게
stuff : 각 상자의 무게들을 합친 배열 ? [ ㅁㄴㅇㄹ ㄴㅁㄹㅇ  ㅇㄴㅁㄹㅇ ㄹ ㅇㄴㅁㄹ ]

1. stuff의 내용물들을 오름차순으로 먼저 정리한다.
2. sort를 사용 !
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
3. 


 */

function partTimeJob(k) {
  let count = 0 // 동전갯수
  const showmethemoney = [500, 100, 50, 10, 5, 1] // 거슬러 줄 수 있는 동전 목록 ! => k원이 들어오면 가장 적은 동전으로 거슬러 줘야한다.
  //! showmethemoney 순서주의 !

  for (let el of showmethemoney) {
    if( k !== 0 ) {
      count = count + Math.floor(k/el) // let el of showmethemoney => showmethemoney의 요소, el에 500, 100, 50, 10, 5, 1 찍힘
      k = k - el * Math.floor(k/el) // k = 4511 - 500 * 9 => k = 11
    }
  }
  return count
}

/*
1원, 5원, 10원, 50원, 100원, 500원

만약 거스름돈이 4511원이라면

1. 500원으로 나눠본다 => 9개 + 11원 
2. 100원으로 나눠본다 => 불가
3. 50원으로 나눠본다 => 불가
4. 10원으로 나눠본다 => 1개 + 1원
5. 5원으로 나눠본다 => 불가
6. 1원으로 나눠본다 => 1개 = "0원"

총 동전갯수 = 11개

순서대로 찍어봐야함 => 반복문 필요
 */

function boardGame(board, operation) {
  let start = board[0][0] //출발지 y, x  출발지가 고정이기 때문에 current 필요X
  let x = 0 // 좌표를 임의로 설정하는 것
  let y = 0
  let count = 0
  // let current = board[0][0] // board[y][x] // 마지막 위치를 알 필요 없어서 필요없음
  // U = -1, D = +1, R = +1 (거의 고정된 공식?), L = -1 // 보통 시작점이 0,0일때 // 좌표값은 거의 고정값임 
  for(let el of operation) {
    if(el === 'U'){
      y-=1
    } 
    if(el === 'R'){
      x+=1
    }
    if(el === 'L'){
      x-=1
    }
    if(el === 'D'){
      y+=1
    }
    if(x < 0 || y < 0 || x > board.length || y > board.length) {
      return "OUT"
    }
    start = board[y][x]
    count = count + start
  } 
  return count
};

//많이 중요함 !

/*
 출발 = 0,0   let start = board[0][0]
 상, 하, 좌, 우 이동 좌표 만들어줘야함
 U, D, L, R

 숫자 1을 지나가게 되면 카운트++

 보드 밖으로 나가면 'OUT'
  [ [0, 0, 1], [1, 1, 1], [1, 0, 0] ]

 URLD가 끝날때까지 반복문
 리턴 카운트   let count = 0

 정사각형 행렬
 x 좌우, y 위아래 좌표   let x = 0   let y = 0
아래로 움직이는 것을 +로 많이 둔다 (출발지가 0,0기 때문)
 */