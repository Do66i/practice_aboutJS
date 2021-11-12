let bufferSize = 1;
let capacities = 10;
let documents = [5, 5, 5, 5];
function queuePrinter(bufferSize, capacities, documents) {
    console.log(documents);
  // 버퍼 사이즈 만큼의 배열 필요
  // 문서에서 shift로 하나씩 버퍼 사이즈에 넣음 물론 그전에 버퍼사이즈 1칸씩 이동  //  [2,5]
  let time = 0,
    sum = 0,
    count = 0;
  let bufferArr = [];
  let bufferArrLength = 0;
  while (count !== bufferSize) {
    //버퍼의 마지막이 존재시 삭제
    if (bufferArr[bufferSize - 1] >= 0) bufferArr.pop();
    //버퍼안의 수의 갯수
    bufferArrLength = bufferArr.filter((num) => num !== 0).length;
    console.log(`bufferArrLength : ${bufferArrLength}`); //bufferArrLength => 0값까지 길이를 잰 후 0을 빼기
    //버퍼내의 합 구하기
    for (let i of bufferArr) {
      if (typeof i === "number") sum += i; //bufferArr안의 요소들의 합 = sum
    } // if 용량이 10, bufferArr가 [1, 5, 2]라면 sum은 8
      // 그렇게 되면 document에서 2이하만 들어올 수 있다
      // capacities >= sum + documents[0] 이부분에서 현잿값(sum = 8)과
      // 새로 더해지는 값 document[0]번째 요소의 합이 
    console.log(`sum : ${sum}`);
    //버퍼에 추가
    if (
      capacities >= sum + documents[0] &&
      bufferArrLength < bufferSize &&
      documents.length !== 0
    ) {
      bufferArr.unshift(documents.shift());
    } else {
      bufferArr.unshift(0);
    }
    console.log(`bufferArr : ${bufferArr}`);
    console.log(`documents : ${documents}`);
    time++;
    sum = 0;
    console.log(time);
    console.log("----------------------");
    if (documents.length === 0) {
      count++;
    }
  }
  return time + 1;
}
debugger
console.log(queuePrinter(bufferSize, capacities, documents));

/*
let bufferSize = 1;
let capacities = 10;
let documents = [5, 5, 5, 5];
function queuePrinter(bufferSize, capacities, documents) {
  //   console.log(documents);
  // TODO: 여기에 코드를 작성합니다.
  // 버퍼 사이즈 만큼의 배열 필요
  // 문서에서 shift로 하나씩 버퍼 사이즈에 넣음 물론 그전에 버퍼사이즈 1칸씩 이동  //  [2,5]
  let time = 0,
    sum = 0,
    count = 0;
  let bufferArr = [];
  let bufferArrLength = 0;
  while (count !== bufferSize) {
    //버퍼의 마지막이 존재시 삭제
    if (bufferArr[bufferSize - 1] >= 0) bufferArr.pop();
    //버퍼안의 수의 갯수
    bufferArrLength = bufferArr.filter((num) => num !== 0).length;
    // console.log(`bufferArrLength : ${bufferArrLength}`);
    //버퍼내의 합 구하기
    for (let i of bufferArr) {
      if (typeof i === "number") sum += i;
    }
    // console.log(`sum : ${sum}`);
    //버퍼에 추가
    if (
      capacities >= sum + documents[0] &&
      bufferArrLength < bufferSize &&
      documents.length !== 0
    ) {
      bufferArr.unshift(documents.shift());
    } else {
      bufferArr.unshift(0);
    }
    // console.log(`bufferArr : ${bufferArr}`);
    // console.log(`documents : ${documents}`);
    time++;
    sum = 0;
    // console.log(time);
    // console.log("----------------------");
    if (documents.length === 0) {
      count++;
    }
  }
  return time + 1;
}
queuePrinter(bufferSize, capacities, documents);
*/