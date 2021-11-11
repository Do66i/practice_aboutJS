/*
제한사항]

인쇄 작업 목록은 칸으로 이루어져 있습니다.
각 칸에는 한 개의 문서만 위치할 수 있습니다.
문서는 1초에 한 칸만 이동할 수 있습니다.
인쇄 작업 목록의 크기는 bufferSize이고 최대 용량 capacities 만큼 문서를 담을 수 있습니다.
만약, 인쇄 작업 목록의 크기가 2이고 최대 용량이 10Kib라면 크기가 [7, 4, 5, 6] Kib인 문서들이 최단 시간 안에 순서대로 모두 인쇄되는 과정은 다음과 같습니다.

1초가 지나면 인쇄 작업 목록에는 7Kib 크기의 문서가 추가됩니다.

2초일 때 인쇄 작업 목록의 최대 용량이 10Kib이기 때문에 4Kib 문서는 작업 목록에 들어갈 수 없습니다. 동시에 7Kib 문서는 작업 목록에서 1칸 앞으로 이동합니다.

3초일 때 7Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 4Kib 문서는 인쇄 작업 목록에 추가됩니다.

4초일 때 4Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 동시에 5Kib 문서는 인쇄 작업 목록에 추가됩니다.

5초일 때 4Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 5Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 최대 용량 10Kib 제한으로 6Kib 문서는 인쇄 작업 목록으로 추가될 수 없습니다.

6초일 때 5Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 6Kib 문서가 인쇄 작업 목록에 추가됩니다.

7초일 때 6Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다.

8초일 때 6Kib 문서가 마지막으로 인쇄됩니다.

위 예시에서와 같이 모든 문서가 출력되는데 걸리는 최소 시간은 8초가 걸립니다.

김코딩이 가지고 있는 프린터의 제한사항인 인쇄 작업 목록의 크기 bufferSize, 최대 용량 capacities가 주어집니다. 인쇄할 문서의 크기가 나열된 배열 documents가 모두 인쇄되는데 걸리는 최소 시간을 반환하는 솔루션을 만들어 주세요.

입력
인자1: bufferSize
Number 타입의 인쇄 작업 목록 크기
인자 2: capacities
Number 타입의 인쇄 작업 목록에 추가될 수 있는 최대 용량
인자 3: documents
Number 타입을 요소로 갖는 문서 크기가 나열된 배열
출력
Number 타입을 리턴해야 합니다.
주의사항
bufferSize는 1 이상 100 이하입니다.
capacities는 100Kib 이하입니다.
인쇄할 문서의 개수(배열의 길이) 1이상 100 이하입니다.
문서 하나의 크기는 capacities를 초과하지 않습니다.
입출력 예시
let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8
*/

function queuePrinter(bufferSize, capacities, documents) {

  let printList=[]
  printList.length=bufferSize
  let paperBox=[...documents]
  let sec=0
function sumIdx(arr){//0과 undefined를 제외한 element 갯수
  return arr.map(x=>x!==0||undefined).filter(x=>x===true).length
} //[0,0,0,0,0,0,0,1,undefined]-----> 1 
function sumArr(arr){
  function add(accumulator, a) {
      return accumulator + a;}
      return arr.reduce(add,0);
  }//[1,2,3,4,5]----------> 15

  // let bufferSize = 2;
  // let capacities = 10;
  // let documents = [7, 4, 5, 6];
  //[   ,   4]  [5   ,   6]                 
  while(paperBox.length||sumIdx(printList)){
    if(printList[0]===undefined){//인쇄해야할 문서없음
      if((sumArr(printList)+paperBox[0])<=capacities&&sumIdx(printList)+1<=bufferSize){
        printList.shift()
        printList[bufferSize-1]=paperBox.shift()
        sec++
      }//이동가능
      else{
        printList.shift()
        printList.length=bufferSize
        sec++
      }//이동불능

      // else if((sumArr(printList)+paperBox[0])>capacities&&sumIdx(printList)+1<=bufferSize){
        // printList.shift()
        // printList.length=capacities
        // sec++
      // }//이동불능
      // else if((sumArr(printList)+paperBox[0])>capacities&&sumIdx(printList)+1>bufferSize){
      //   printList.shift()
      //   printList.length=capacities
      //   sec++
      // }//이동불능
      // else if((sumArr(printList)+paperBox[0])<=capacities&&sumIdx(printList)+1>bufferSize){
      //   printList.shift()
      //   sec++
      // }//이동불능

    }
   // let bufferSize = 2;
  // let capacities = 10;
  // let documents = [7, 4, 5, 6];
  //[  4 ,  ]  [5   ,   6]      
    else if(printList[0]!==undefined){//인쇄해야할 문서있음
      if((sumArr(printList)-printList[0]+paperBox[0])<=capacities&&sumIdx(printList)<=bufferSize){
        printList.shift()
        printList[bufferSize-1]=paperBox.shift()
        sec++
      }//이동가능
      else{
        printList.shift()
        printList.length=bufferSize
        sec++
      }//이동불능
      // else if((sumArr(printList)-printList[0]+paperBox[0])>capacities&&sumIdx(printList)<=bufferSize){
      //   printList.shift()
      //   sec++
      // }//이동불능
      // else if((sumArr(printList)-printList[0]+paperBox[0])>capacities&&sumIdx(printList)>bufferSize){
      //   printList.shift()
      //   sec++
      // }//이동불능
      // else if((sumArr(printList)-printList[0]+paperBox[0])<=capacities&&sumIdx(printList)>bufferSize){
      //   printList.shift()
      //   sec++
      // }//이동불능
    }
  }

return sec
}


let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];
//degger
//queuePrinter(bufferSize, capacities, documents)