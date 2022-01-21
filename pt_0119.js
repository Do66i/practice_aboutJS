function rockPaperScissors (turn) {
  turn = turn || 3 // 이 코드가 없으면 함수가 왜 안돌아가는지 물어봐야함
  let vsResult = []
  let newArr = ['rock', 'paper', 'scissors']
  
  let some = (next, memo) => {
    if( next === 0 ){
      return vsResult.push(memo)
    }
   // 경기가 끝나면 리턴
  
  // 게임이 진행되는 과정을 적어줘야함
  for(let i = 0; i < newArr.length; i++){ // for문은 묵찌빠들이 나와야함
    let currentGame = newArr[i] // i의 0번째라면 'rock', 1번째라면 'paper', 2번째라면 'scissors'
    some( next - 1, memo.concat(currentGame) )
    }
  }
  
  // some안에 for문이 있어야함 ( 스코프가 같아야함 )
  
  some(turn, []) // 오지게 신박하네 * 함수를 함수안에 만들었기 때문에 마지막에 우리가 만든 함수를 실행시켜야함* 그냥 함수를 실행시킨거임
    return vsResult
  }
  
  /*
  
  2인 이상, 삼세판 
  
  1. 가위 바위 보가 승패에 상관없이, 라운드 끝날때까지 경기 진행 => next
  2. 각 게임의 결과가 배열에 저장 => memo
  3. 경기가 모두 끝난 후, 저장된 배열이 리턴값으로 나옴
  
  {} << 함수 자체를 실행할 때는 필요없음
  
  
   */